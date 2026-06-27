import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { WrongQuestion, StudyLogEntry, UnitTestResult } from '@/types'

// 持久化到 localStorage 的键
const STORAGE_KEY_WRONG = 'star-land-wrong-questions'
const STORAGE_KEY_LOG = 'star-land-study-logs'
const STORAGE_KEY_TESTS = 'star-land-unit-tests'

function loadFromStorage<T>(key: string, fallback: T[]): T[] {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : fallback
  } catch {
    return fallback
  }
}

function saveToStorage<T>(key: string, data: T[]) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch {
    // localStorage 满了，忽略
  }
}

// ===== SM-2 间隔重复算法 =====
// 算法参数：quality(质量) 0~5，这里简化为答对(4=good)和答错(2=hard)
const SM2_DEFAULT_EASE = 2.5
const SM2_MIN_EASE = 1.3
const SM2_MASTER_REPETITIONS = 3 // 连续答对3次判定为掌握

/**
 * 计算SM-2算法的下次复习参数
 * @param correct 是否答对
 * @param currentInterval 当前间隔（天）
 * @param currentEase 当前难度系数
 * @param currentReps 当前连续答对次数
 * @returns { interval, easeFactor, repetitions, nextReview, mastered }
 */
function calculateSM2(
  correct: boolean,
  currentInterval: number,
  currentEase: number,
  currentReps: number
): { interval: number; easeFactor: number; repetitions: number; nextReview: string; mastered: boolean } {
  let interval: number
  let easeFactor: number
  let repetitions: number

  if (correct) {
    // 答对：quality=4
    const q = 4
    // 更新难度系数
    easeFactor = currentEase + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    easeFactor = Math.max(SM2_MIN_EASE, easeFactor)

    repetitions = currentReps + 1

    // 计算下次间隔
    if (repetitions === 1) {
      interval = 1 // 第一次答对：1天后复习
    } else if (repetitions === 2) {
      interval = 3 // 第二次答对：3天后复习
    } else {
      interval = Math.round(currentInterval * easeFactor)
    }
  } else {
    // 答错：重置
    repetitions = 0
    interval = 0 // 答错：今天/明天继续复习
    easeFactor = Math.max(SM2_MIN_EASE, currentEase - 0.2)
  }

  // 计算下次复习日期
  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + interval)
  nextReview.setHours(0, 0, 0, 0)

  // 连续答对SM2_MASTER_REPETITIONS次判定为掌握
  const mastered = correct && repetitions >= SM2_MASTER_REPETITIONS

  return {
    interval,
    easeFactor,
    repetitions,
    nextReview: nextReview.toISOString(),
    mastered,
  }
}

// 确保旧数据有SM-2字段（数据迁移）
function ensureSM2Fields(q: WrongQuestion): WrongQuestion {
  if (q.sm2Interval === undefined) q.sm2Interval = 0
  if (q.sm2EaseFactor === undefined) q.sm2EaseFactor = SM2_DEFAULT_EASE
  if (q.sm2Repetitions === undefined) q.sm2Repetitions = 0
  if (!q.sm2NextReview) q.sm2NextReview = q.wrongAt // 旧数据立即可复习
  return q
}

export const useStudyStore = defineStore('study', () => {
  // ===== 错题集 =====
  const wrongQuestions = ref<WrongQuestion[]>(
    loadFromStorage<WrongQuestion>(STORAGE_KEY_WRONG, []).map(ensureSM2Fields)
  )

  // ===== 学习日志 =====
  const studyLogs = ref<StudyLogEntry[]>(loadFromStorage(STORAGE_KEY_LOG, []))

  // ===== 单元测试结果 =====
  const unitTestResults = ref<UnitTestResult[]>(loadFromStorage(STORAGE_KEY_TESTS, []))

  // ===== 计算属性 =====
  // 未掌握的错题
  const unmasteredWrongs = computed(() =>
    wrongQuestions.value.filter(q => !q.mastered)
  )

  // 今天到期需要复习的错题（SM-2调度）
  const dueForReview = computed(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return wrongQuestions.value.filter(q => {
      if (q.mastered) return false
      const nextReview = new Date(q.sm2NextReview)
      nextReview.setHours(0, 0, 0, 0)
      return nextReview <= today
    })
  })

  // 今天到期需要复习的错题数（按学科分组）
  const dueCountBySubject = computed(() => {
    const counts: Record<string, number> = {}
    for (const q of dueForReview.value) {
      counts[q.subject] = (counts[q.subject] || 0) + 1
    }
    return counts
  })

  // 按学科分组的错题数
  const wrongCountBySubject = computed(() => {
    const counts: Record<string, number> = {}
    for (const q of unmasteredWrongs.value) {
      counts[q.subject] = (counts[q.subject] || 0) + 1
    }
    return counts
  })

  // 最近7天的学习日志
  const recentLogs = computed(() => {
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    return studyLogs.value.filter(l => new Date(l.timestamp) >= sevenDaysAgo)
  })

  // 连续学习天数
  const streakDays = computed(() => {
    const dates = [...new Set(studyLogs.value.map(l => l.date))].sort().reverse()
    if (dates.length === 0) return 0
    let streak = 1
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const lastDate = new Date(dates[0])
    lastDate.setHours(0, 0, 0, 0)
    // 如果最后一天不是今天也不是昨天，连续天数为0
    const diff = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))
    if (diff > 1) return 0
    for (let i = 1; i < dates.length; i++) {
      const prev = new Date(dates[i - 1])
      const curr = new Date(dates[i])
      const dayDiff = Math.floor((prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24))
      if (dayDiff === 1) {
        streak++
      } else {
        break
      }
    }
    return streak
  })

  // ===== 方法 =====
  // 添加错题
  function addWrongQuestion(q: Omit<WrongQuestion, 'id' | 'reviewCount' | 'lastReviewAt' | 'mastered' | 'sm2Interval' | 'sm2EaseFactor' | 'sm2Repetitions' | 'sm2NextReview'>) {
    // 检查是否已存在同一题的未掌握错题
    const existing = wrongQuestions.value.find(
      w => w.questionId === q.questionId && !w.mastered
    )
    if (existing) {
      // 更新错误记录，重置SM-2参数（因为又做错了）
      existing.userAnswer = q.userAnswer
      existing.wrongAt = q.wrongAt
      existing.sm2Repetitions = 0
      existing.sm2Interval = 0
      existing.sm2EaseFactor = Math.max(SM2_MIN_EASE, existing.sm2EaseFactor - 0.2)
      existing.sm2NextReview = new Date().toISOString()
      saveToStorage(STORAGE_KEY_WRONG, wrongQuestions.value)
      return
    }
    const now = new Date().toISOString()
    const wrong: WrongQuestion = {
      ...q,
      id: `wq_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      reviewCount: 0,
      lastReviewAt: null,
      mastered: false,
      sm2Interval: 0,
      sm2EaseFactor: SM2_DEFAULT_EASE,
      sm2Repetitions: 0,
      sm2NextReview: now, // 新错题立即可复习
    }
    wrongQuestions.value.unshift(wrong)
    saveToStorage(STORAGE_KEY_WRONG, wrongQuestions.value)
  }

  // 标记错题复习结果（SM-2算法调度）
  function reviewWrongQuestion(id: string, correct: boolean) {
    const q = wrongQuestions.value.find(w => w.id === id)
    if (!q) return
    q.reviewCount++
    q.lastReviewAt = new Date().toISOString()

    // 使用SM-2算法计算下次复习参数
    const result = calculateSM2(
      correct,
      q.sm2Interval,
      q.sm2EaseFactor,
      q.sm2Repetitions
    )
    q.sm2Interval = result.interval
    q.sm2EaseFactor = result.easeFactor
    q.sm2Repetitions = result.repetitions
    q.sm2NextReview = result.nextReview
    q.mastered = result.mastered

    saveToStorage(STORAGE_KEY_WRONG, wrongQuestions.value)
  }

  // 添加学习日志
  function addStudyLog(log: Omit<StudyLogEntry, 'id' | 'timestamp'>) {
    const entry: StudyLogEntry = {
      ...log,
      id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      timestamp: new Date().toISOString(),
    }
    studyLogs.value.unshift(entry)
    // 只保留最近90天的日志
    const ninetyDaysAgo = new Date()
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90)
    studyLogs.value = studyLogs.value.filter(
      l => new Date(l.timestamp) >= ninetyDaysAgo
    )
    saveToStorage(STORAGE_KEY_LOG, studyLogs.value)
  }

  // 添加单元测试结果
  function addUnitTestResult(result: Omit<UnitTestResult, 'id'>) {
    const entry: UnitTestResult = {
      ...result,
      id: `test_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    }
    unitTestResults.value.unshift(entry)
    saveToStorage(STORAGE_KEY_TESTS, unitTestResults.value)
  }

  // 获取某单元的测试结果
  function getUnitTestResults(subject: string, grade: number, unitId: string) {
    return unitTestResults.value.filter(
      r => r.subject === subject && r.grade === grade && r.unitId === unitId
    )
  }

  // 获取某学科某年级的错题
  function getWrongQuestions(subject: string, grade: number) {
    return unmasteredWrongs.value.filter(
      q => q.subject === subject && q.grade === grade
    )
  }

  // 获取回归练习题（SM-2调度：到期的优先，按到期日和难度排序）
  function getRegressionQuestions(subject: string, grade: number, limit: number = 10) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const wrongs = getWrongQuestions(subject, grade)
    // 优先级：已到期(sm2NextReview <= today) > 从未复习 > 复习次数少
    return wrongs
      .map(w => ({
        ...w,
        _isDue: new Date(w.sm2NextReview) <= today,
        _dueDays: Math.floor((today.getTime() - new Date(w.sm2NextReview).getTime()) / (1000 * 60 * 60 * 24)),
      }))
      .sort((a, b) => {
        // 到期的排前面
        if (a._isDue !== b._isDue) return a._isDue ? -1 : 1
        // 到期天数多的排前面（逾期更久更紧急）
        if (a._isDue && b._isDue) return b._dueDays - a._dueDays
        // 未到期的按到期日排序
        return new Date(a.sm2NextReview).getTime() - new Date(b.sm2NextReview).getTime()
      })
      .slice(0, limit)
  }

  // 获取今日待复习的错题（按学科+年级过滤，SM-2调度）
  function getTodayReviewItems(subject: string, grade: number, limit: number = 10) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return wrongQuestions.value
      .filter(q => !q.mastered && q.subject === subject && q.grade === grade)
      .filter(q => {
        const nextReview = new Date(q.sm2NextReview)
        nextReview.setHours(0, 0, 0, 0)
        return nextReview <= today
      })
      .sort((a, b) => new Date(a.sm2NextReview).getTime() - new Date(b.sm2NextReview).getTime())
      .slice(0, limit)
  }

  return {
    wrongQuestions,
    studyLogs,
    unitTestResults,
    unmasteredWrongs,
    dueForReview,
    dueCountBySubject,
    wrongCountBySubject,
    recentLogs,
    streakDays,
    addWrongQuestion,
    reviewWrongQuestion,
    addStudyLog,
    addUnitTestResult,
    getUnitTestResults,
    getWrongQuestions,
    getRegressionQuestions,
    getTodayReviewItems,
  }
})
