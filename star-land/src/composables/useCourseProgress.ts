import { computed } from 'vue'
import { useProgressStore } from '@/stores/progress'
import { useCourseStore } from '@/stores/course'
import type { Subject, Grade } from '@/types'

export function useCourseProgress() {
  const progressStore = useProgressStore()
  const courseStore = useCourseStore()

  // 获取某课程的完成进度
  function getCourseCompletion(subject: Subject, grade: Grade) {
    const units = courseStore.getUnits(subject, grade)
    let total = 0
    let completed = 0
    units.forEach(unit => {
      unit.lessons.forEach(lesson => {
        total++
        const p = progressStore.getLessonProgress(lesson.id)
        if (p?.status === 'completed') completed++
      })
    })
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 }
  }

  // 获取某单元的完成进度
  function getUnitCompletion(subject: Subject, grade: Grade, unitId: string) {
    const unit = courseStore.getUnit(subject, grade, unitId)
    if (!unit) return { total: 0, completed: 0, percentage: 0 }
    let completed = 0
    unit.lessons.forEach(lesson => {
      const p = progressStore.getLessonProgress(lesson.id)
      if (p?.status === 'completed') completed++
    })
    return { total: unit.lessons.length, completed, percentage: Math.round((completed / unit.lessons.length) * 100) }
  }

  // 检查课时是否解锁
  function isLessonUnlocked(subject: Subject, grade: Grade, unitId: string, lessonOrder: number): boolean {
    if (lessonOrder === 1) return true
    const unit = courseStore.getUnit(subject, grade, unitId)
    if (!unit) return false
    const prevLesson = unit.lessons.find(l => l.order === lessonOrder - 1)
    if (!prevLesson) return false
    const p = progressStore.getLessonProgress(prevLesson.id)
    return p?.status === 'completed'
  }

  return {
    getCourseCompletion,
    getUnitCompletion,
    isLessonUnlocked,
  }
}
