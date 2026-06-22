import type { PracticeQuestion, Subject } from '@/types'
import { mathGrade1, mathGrade2, mathGrade3 } from '@/data/math'
import { chineseGrade1, chineseGrade2, chineseGrade3 } from '@/data/chinese'
import { englishGrade1, englishGrade2, englishGrade3 } from '@/data/english'

export interface ExamQuestion extends PracticeQuestion {
  sourceUnit: string
  sourceLesson: string
  sourceSubject: Subject
}

export interface Exam {
  id: string
  type: 'midterm' | 'final'
  subject: Subject
  grade: number
  title: string
  description: string
  questions: ExamQuestion[]
  duration: number // 建议时长（分钟）
}

// 获取指定学科年级的所有单元
function getUnits(subject: Subject, grade: number) {
  const dataMap: Record<string, any> = {
    'math-1': mathGrade1, 'math-2': mathGrade2, 'math-3': mathGrade3,
    'chinese-1': chineseGrade1, 'chinese-2': chineseGrade2, 'chinese-3': chineseGrade3,
    'english-1': englishGrade1, 'english-2': englishGrade2, 'english-3': englishGrade3,
  }
  const data = dataMap[`${subject}-${grade}`]
  return data || []
}

// 从题目池中随机抽取N道题（仅抽取适合考试的选择题和填空题）
function sampleQuestions(pool: ExamQuestion[], n: number): ExamQuestion[] {
  // 过滤掉不适合考试的题型：拖拽题、闪卡题
  const examSuitable = pool.filter(q => q.type === 'choice' || q.type === 'fill')
  const shuffled = [...examSuitable].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(n, shuffled.length))
}

// 生成期中考试（前4个单元）
export function generateMidtermExam(subject: Subject, grade: number): Exam {
  const units = getUnits(subject, grade).slice(0, 4) // 前4个单元
  const questionPool: ExamQuestion[] = []

  for (const unit of units) {
    for (const lesson of unit.lessons) {
      for (const q of lesson.practiceQuestions) {
        questionPool.push({
          ...q,
          sourceUnit: unit.id,
          sourceLesson: lesson.id,
          sourceSubject: subject,
        })
      }
    }
  }

  // 跨学科应用题：从其他学科同年级抽取少量题目
  const otherSubjects: Subject[] = (['math', 'chinese', 'english'] as Subject[]).filter(s => s !== subject)
  for (const os of otherSubjects) {
    const otherUnits = getUnits(os, grade).slice(0, 2)
    for (const unit of otherUnits) {
      const lesson = unit.lessons[0]
      if (lesson?.practiceQuestions?.[0]) {
        questionPool.push({
          ...lesson.practiceQuestions[0],
          sourceUnit: unit.id,
          sourceLesson: lesson.id,
          sourceSubject: os,
        })
      }
    }
  }

  const examQuestions = sampleQuestions(questionPool, 30)

  const subjectName = subject === 'math' ? '数学' : subject === 'chinese' ? '语文' : '英语'
  return {
    id: `${subject}-${grade}-midterm`,
    type: 'midterm',
    subject,
    grade,
    title: `${grade}年级${subjectName}期中考试`,
    description: `覆盖${subjectName}${grade}年级前4个单元全部知识点，含跨学科应用题`,
    questions: examQuestions,
    duration: 45,
  }
}

// 生成期末考试（全部8个单元）
export function generateFinalExam(subject: Subject, grade: number): Exam {
  const units = getUnits(subject, grade) // 全部单元
  const questionPool: ExamQuestion[] = []

  for (const unit of units) {
    for (const lesson of unit.lessons) {
      for (const q of lesson.practiceQuestions) {
        questionPool.push({
          ...q,
          sourceUnit: unit.id,
          sourceLesson: lesson.id,
          sourceSubject: subject,
        })
      }
    }
  }

  // 跨学科应用题：从其他学科同年级抽取
  const otherSubjects: Subject[] = (['math', 'chinese', 'english'] as Subject[]).filter(s => s !== subject)
  for (const os of otherSubjects) {
    const otherUnits = getUnits(os, grade)
    // 从每个其他学科抽取3道题
    for (const unit of otherUnits.slice(0, 3)) {
      const lesson = unit.lessons[0]
      if (lesson?.practiceQuestions?.[0]) {
        const q = lesson.practiceQuestions[0]
        questionPool.push({
          ...q,
          sourceUnit: unit.id,
          sourceLesson: lesson.id,
          sourceSubject: os,
        })
      }
    }
  }

  const examQuestions = sampleQuestions(questionPool, 40)

  const subjectName = subject === 'math' ? '数学' : subject === 'chinese' ? '语文' : '英语'
  return {
    id: `${subject}-${grade}-final`,
    type: 'final',
    subject,
    grade,
    title: `${grade}年级${subjectName}期末考试`,
    description: `覆盖${subjectName}${grade}年级全部8个单元知识点，含跨学科综合应用题`,
    questions: examQuestions,
    duration: 60,
  }
}

// 获取考试
export function getExam(subject: Subject, grade: number, type: 'midterm' | 'final'): Exam {
  return type === 'midterm' ? generateMidtermExam(subject, grade) : generateFinalExam(subject, grade)
}
