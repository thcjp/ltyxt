import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface WritingRecord {
  id: string
  character: string        // 书写的字
  pinyin: string           // 拼音
  lessonId: string         // 课时ID
  subject: string          // 学科
  grade: number            // 年级
  unitId: string           // 单元ID
  practiceCount: number    // 练习次数
  parentScore: 'excellent' | 'good' | 'try_again' | null  // 家长评分
  scoredAt: string | null  // 评分时间
  createdAt: string        // 创建时间
}

const STORAGE_KEY = 'star-land-writing-records'

export const useWritingStore = defineStore('writing', () => {
  const records = ref<WritingRecord[]>([])
  const requiredCount = ref(3) // 默认每个字练习3次

  // 按课时获取书写记录
  function getRecordsByLesson(lessonId: string): WritingRecord[] {
    return records.value.filter(r => r.lessonId === lessonId)
  }

  // 获取某个字的书写记录
  function getRecord(character: string, lessonId: string): WritingRecord | undefined {
    return records.value.find(r => r.character === character && r.lessonId === lessonId)
  }

  // 添加或更新书写记录
  function upsertRecord(payload: Omit<WritingRecord, 'id' | 'createdAt'>) {
    const existing = records.value.find(
      r => r.character === payload.character && r.lessonId === payload.lessonId
    )
    if (existing) {
      Object.assign(existing, payload)
    } else {
      records.value.push({
        ...payload,
        id: `wr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
      })
    }
    saveToStorage()
  }

  // 家长评分
  function scoreRecord(recordId: string, score: WritingRecord['parentScore']) {
    const record = records.value.find(r => r.id === recordId)
    if (record) {
      record.parentScore = score
      record.scoredAt = new Date().toISOString()
      saveToStorage()
    }
  }

  // 设置要求练习次数
  function setRequiredCount(count: number) {
    requiredCount.value = Math.max(1, Math.min(10, count))
    saveToStorage()
  }

  // 统计：已评分且优秀的字数
  const excellentCount = computed(() =>
    records.value.filter(r => r.parentScore === 'excellent').length
  )

  // 统计：总练习字数
  const totalPracticed = computed(() => records.value.length)

  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        records: records.value,
        requiredCount: requiredCount.value,
      }))
    } catch (e) {
      console.error('保存书写记录失败:', e)
    }
  }

  function loadFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const data = JSON.parse(stored)
        records.value = data.records || []
        requiredCount.value = data.requiredCount || 3
      } catch (e) {
        console.error('加载书写记录失败:', e)
      }
    }
  }

  loadFromStorage()

  return {
    records,
    requiredCount,
    excellentCount,
    totalPracticed,
    getRecordsByLesson,
    getRecord,
    upsertRecord,
    scoreRecord,
    setRequiredCount,
    saveToStorage,
    loadFromStorage,
  }
})
