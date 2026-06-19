import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { LessonProgress, StarLevel, DailyLog, Subject } from '@/types'

export const useProgressStore = defineStore('progress', () => {
  // 学习进度数据
  const lessonProgress = ref<Map<string, LessonProgress>>(new Map())
  const dailyLogs = ref<DailyLog[]>([])
  const currentStreak = ref(0)
  const lastStudyDate = ref<string | null>(null)

  // 计算属性：总体完成率
  const totalCompleted = computed(() => {
    let count = 0
    lessonProgress.value.forEach(p => {
      if (p.status === 'completed') count++
    })
    return count
  })

  // 计算属性：今日已完成课时数
  const todayCompleted = computed(() => {
    const today = new Date().toISOString().split('T')[0]
    let count = 0
    lessonProgress.value.forEach(p => {
      if (p.completedAt && p.completedAt.startsWith(today)) count++
    })
    return count
  })

  // 获取课时进度
  function getLessonProgress(lessonId: string): LessonProgress | undefined {
    return lessonProgress.value.get(lessonId)
  }

  // 更新课时进度
  function updateLessonProgress(lessonId: string, updates: Partial<LessonProgress>) {
    const existing = lessonProgress.value.get(lessonId)
    if (existing) {
      lessonProgress.value.set(lessonId, { ...existing, ...updates })
    } else {
      lessonProgress.value.set(lessonId, {
        lessonId,
        status: 'in_progress',
        starLevel: 0,
        accuracy: 0,
        completedAt: null,
        attempts: 0,
        ...updates,
      })
    }
    saveToStorage()
  }

  // 完成课时
  function completeLesson(lessonId: string, accuracy: number) {
    let starLevel: StarLevel = 0
    if (accuracy >= 95) starLevel = 3
    else if (accuracy >= 80) starLevel = 2
    else if (accuracy >= 60) starLevel = 1

    updateLessonProgress(lessonId, {
      status: 'completed',
      starLevel,
      accuracy,
      completedAt: new Date().toISOString(),
      attempts: (lessonProgress.value.get(lessonId)?.attempts || 0) + 1,
    })

    // 更新连续学习天数
    updateStreak()
  }

  // 更新连续学习天数
  function updateStreak() {
    const today = new Date().toISOString().split('T')[0]
    if (lastStudyDate.value !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      if (lastStudyDate.value === yesterday) {
        currentStreak.value++
      } else if (lastStudyDate.value !== today) {
        currentStreak.value = 1
      }
      lastStudyDate.value = today
    }
  }

  // 保存到localStorage
  function saveToStorage() {
    const data = {
      lessonProgress: Object.fromEntries(lessonProgress.value),
      dailyLogs: dailyLogs.value,
      currentStreak: currentStreak.value,
      lastStudyDate: lastStudyDate.value,
    }
    localStorage.setItem('star-land-progress', JSON.stringify(data))
  }

  // 从localStorage加载
  function loadFromStorage() {
    const stored = localStorage.getItem('star-land-progress')
    if (stored) {
      try {
        const data = JSON.parse(stored)
        lessonProgress.value = new Map(Object.entries(data.lessonProgress || {}))
        dailyLogs.value = data.dailyLogs || []
        currentStreak.value = data.currentStreak || 0
        lastStudyDate.value = data.lastStudyDate || null
      } catch (e) {
        console.error('加载进度数据失败:', e)
      }
    }
  }

  // 初始化时加载数据
  loadFromStorage()

  return {
    lessonProgress,
    dailyLogs,
    currentStreak,
    lastStudyDate,
    totalCompleted,
    todayCompleted,
    getLessonProgress,
    updateLessonProgress,
    completeLesson,
    saveToStorage,
    loadFromStorage,
  }
})
