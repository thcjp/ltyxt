import type { PracticeQuestion } from '@/types'

// 变式题生成器：基于现有题目生成变式题，实现题量翻倍
// 策略：
// 1. 数学填空题：替换数字生成新题
// 2. 选择题：打乱选项顺序，改变题干表述
// 3. 其他题：改变题干前缀/表述

function replaceNumbers(text: string): { text: string; map: Record<string, string> } {
  // 找到所有数字
  const numbers = text.match(/\d+/g)
  if (!numbers || numbers.length === 0) return { text, map: {} }

  const map: Record<string, string> = {}
  let result = text
  const used = new Set<string>()

  for (const num of numbers) {
    if (used.has(num)) continue
    used.add(num)
    // 生成一个不同的数字（1-20范围内）
    let newNum: string
    const original = parseInt(num)
    do {
      // 在原数字附近浮动±3，但保证1-20范围
      const delta = Math.floor(Math.random() * 7) - 3
      const candidate = Math.max(1, Math.min(20, original + delta))
      newNum = String(candidate)
    } while (newNum === num)
    map[num] = newNum
    // 替换所有该数字的出现
    result = result.replace(new RegExp(`\\b${num}\\b`, 'g'), newNum)
  }

  return { text: result, map }
}

function applyNumberMap(text: string, map: Record<string, string>): string {
  let result = text
  for (const [old, newNum] of Object.entries(map)) {
    result = result.replace(new RegExp(`\\b${old}\\b`, 'g'), newNum)
  }
  return result
}

// 生成单道变式题
export function generateVariant(original: PracticeQuestion, index: number): PracticeQuestion {
  const variantId = `${original.id}_v${index}`

  // 数学填空题：替换数字
  if (original.type === 'fill' && /\d/.test(original.question)) {
    const { text: newQuestion, map } = replaceNumbers(original.question)
    const newAnswer = applyNumberMap(original.answer, map)

    // 如果有可接受答案，也替换
    const newAcceptable = original.acceptableAnswers?.map(a => applyNumberMap(a, map))

    // 替换解释中的数字
    const newExplanation = applyNumberMap(original.explanation, map)

    return {
      ...original,
      id: variantId,
      question: newQuestion,
      answer: newAnswer,
      explanation: newExplanation,
      acceptableAnswers: newAcceptable,
      hint: original.hint + '（变式练习）',
    }
  }

  // 选择题：打乱选项顺序
  if (original.type === 'choice' && original.options && original.options.length > 1) {
    const shuffled = [...original.options]
    // Fisher-Yates 打乱
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return {
      ...original,
      id: variantId,
      options: shuffled,
      // answer 不变（仍是原始正确答案字符串）
      question: original.question + '（变式）',
      hint: original.hint + '（变式练习）',
    }
  }

  // 闪卡题：添加变式标记
  if (original.type === 'flashcard') {
    return {
      ...original,
      id: variantId,
      question: original.question + '（复习）',
      hint: original.hint + '（变式复习）',
    }
  }

  // 拖拽题：保持原题，添加变式标记
  if (original.type === 'drag') {
    return {
      ...original,
      id: variantId,
      question: original.question + '（变式）',
      hint: original.hint + '（变式练习）',
    }
  }

  // 默认：通用变式（非数字填空题）
  return {
    ...original,
    id: variantId,
    question: original.question + '（变式）',
    hint: original.hint + '（变式练习）',
  }
}

// 为一组题目生成变式题，使总数翻倍
export function expandQuestions(questions: PracticeQuestion[]): PracticeQuestion[] {
  if (questions.length === 0) return []
  const variants = questions.map((q, i) => generateVariant(q, i + 1))
  return [...questions, ...variants]
}
