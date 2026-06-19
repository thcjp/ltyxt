import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Subject, Grade, CourseMeta, Unit } from '@/types'
import { mathGrade1, mathGrade2, mathGrade3 } from '@/data/math'
import { chineseGrade1, chineseGrade2, chineseGrade3 } from '@/data/chinese'
import { englishGrade1, englishGrade2, englishGrade3 } from '@/data/english'

export const useCourseStore = defineStore('course', () => {
  // 课程元数据
  const courseMetas = ref<CourseMeta[]>([
    { subject: 'chinese', grade: 1, title: '一年级语文', subtitle: '识字·拼音·阅读', icon: '📖', color: '#9B59B6', totalUnits: 8 },
    { subject: 'chinese', grade: 2, title: '二年级语文', subtitle: '字词·句子·写话', icon: '📖', color: '#9B59B6', totalUnits: 8 },
    { subject: 'chinese', grade: 3, title: '三年级语文', subtitle: '阅读·作文·积累', icon: '📖', color: '#9B59B6', totalUnits: 8 },
    { subject: 'math', grade: 1, title: '一年级数学', subtitle: '数感·加减·图形', icon: '🔢', color: '#2ECC71', totalUnits: 8 },
    { subject: 'math', grade: 2, title: '二年级数学', subtitle: '乘除·测量·数据', icon: '🔢', color: '#2ECC71', totalUnits: 8 },
    { subject: 'math', grade: 3, title: '三年级数学', subtitle: '分数·面积·应用', icon: '🔢', color: '#2ECC71', totalUnits: 8 },
    { subject: 'english', grade: 1, title: '一年级英语', subtitle: '字母·语音·词汇', icon: '🌟', color: '#E74C3C', totalUnits: 8 },
    { subject: 'english', grade: 2, title: '二年级英语', subtitle: '句型·对话·阅读', icon: '🌟', color: '#E74C3C', totalUnits: 8 },
    { subject: 'english', grade: 3, title: '三年级英语', subtitle: '语法·写作·表达', icon: '🌟', color: '#E74C3C', totalUnits: 8 },
  ])

  // 获取课程元数据
  function getCourseMeta(subject: Subject, grade: Grade): CourseMeta | undefined {
    return courseMetas.value.find(m => m.subject === subject && m.grade === grade)
  }

  // 获取某学科所有年级的元数据
  function getSubjectMetas(subject: Subject): CourseMeta[] {
    return courseMetas.value.filter(m => m.subject === subject)
  }

  // 获取单元数据
  function getUnits(subject: Subject, grade: Grade): Unit[] {
    const dataMap: Record<string, Unit[]> = {
      'math-1': mathGrade1,
      'math-2': mathGrade2,
      'math-3': mathGrade3,
      'chinese-1': chineseGrade1,
      'chinese-2': chineseGrade2,
      'chinese-3': chineseGrade3,
      'english-1': englishGrade1,
      'english-2': englishGrade2,
      'english-3': englishGrade3,
    }
    return dataMap[`${subject}-${grade}`] || []
  }

  // 获取特定单元
  function getUnit(subject: Subject, grade: Grade, unitId: string): Unit | undefined {
    return getUnits(subject, grade).find(u => u.id === unitId)
  }

  return {
    courseMetas,
    getCourseMeta,
    getSubjectMetas,
    getUnits,
    getUnit,
  }
})
