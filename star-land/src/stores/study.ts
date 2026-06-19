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

export const useStudyStore = defineStore('study', () => {
  // ===== 错题集 =====
  const wrongQuestions = ref<WrongQuestion[]>(loadFromStorage(STORAGE_KEY_WRONG, []))

  // ===== 学习日志 =====
  const studyLogs = ref<StudyLogEntry[]>(loadFromStorage(STORAGE_KEY_LOG, []))

  // ===== 单元测试结果 =====
  const unitTestResults = ref<UnitTestResult[]>(loadFromStorage(STORAGE_KEY_TESTS, []))

  // ===== 计算属性 =====
  // 未掌握的错题
  const unmasteredWrongs = computed(() =>
    wrongQuestions.value.filter(q => !q.mastered)
  )

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
  function addWrongQuestion(q: Omit<WrongQuestion, 'id' | 'reviewCount' | 'lastReviewAt' | 'mastered'>) {
    // 检查是否已存在同一题的未掌握错题
    const existing = wrongQuestions.value.find(
      w => w.questionId === q.questionId && !w.mastered
    )
    if (existing) {
      // 更新错误记录
      existing.userAnswer = q.userAnswer
      existing.wrongAt = q.wrongAt
      saveToStorage(STORAGE_KEY_WRONG, wrongQuestions.value)
      return
    }
    const wrong: WrongQuestion = {
      ...q,
      id: `wq_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      reviewCount: 0,
      lastReviewAt: null,
      mastered: false,
    }
    wrongQuestions.value.unshift(wrong)
    saveToStorage(STORAGE_KEY_WRONG, wrongQuestions.value)
  }

  // 标记错题已复习
  function reviewWrongQuestion(id: string, correct: boolean) {
    const q = wrongQuestions.value.find(w => w.id === id)
    if (!q) return
    q.reviewCount++
    q.lastReviewAt = new Date().toISOString()
    if (correct && q.reviewCount >= 2) {
      q.mastered = true
    }
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

  // 获取回归练习题（未掌握的错题，按复习优先级排序）
  function getRegressionQuestions(subject: string, grade: number, limit: number = 10) {
    const wrongs = getWrongQuestions(subject, grade)
    // 优先级：从未复习的 > 复习次数少的 > 最近做错的
    return wrongs
      .sort((a, b) => {
        if (a.reviewCount !== b.reviewCount) return a.reviewCount - b.reviewCount
        return new Date(b.wrongAt).getTime() - new Date(a.wrongAt).getTime()
      })
      .slice(0, limit)
  }

  return {
    wrongQuestions,
    studyLogs,
    unitTestResults,
    unmasteredWrongs,
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
  }
})
