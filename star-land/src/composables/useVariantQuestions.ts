import type { PracticeQuestion } from '@/types'

// 变式题生成器：基于现有题目生成内容不同的变式题
// 策略:
// 1. 数学填空题：大幅替换数字，生成不同难度
// 2. 选择题：改变题干描述+打乱选项+重新生成干扰项
// 3. 中文填空题：替换关键词
// 4. 闪卡/拖拽题：翻转问题方向

// 数学：用完全不同的数字范围替换
function replaceNumbersMath(text: string): { text: string; map: Record<string, string> } {
  const numbers = text.match(/\d+/g)
  if (!numbers || numbers.length === 0) return { text, map: {} }

  const map: Record<string, string> = {}
  let result = text
  const used = new Set<string>()

  for (const num of numbers) {
    if (used.has(num)) continue
    used.add(num)
    const original = parseInt(num)
    let newNum: string
    // 生成相差至少5的新数字，范围1-99
    do {
      let candidate: number
      if (original < 10) {
        // 小数字：生成10-20之间的
        candidate = 10 + Math.floor(Math.random() * 11)
      } else if (original < 30) {
        // 中数字：大幅偏移
        candidate = original + (Math.random() > 0.5 ? 15 : -8)
      } else {
        // 大数字：取完全不同的值
        candidate = original + (Math.floor(Math.random() * 20) - 10)
      }
      candidate = Math.max(1, Math.min(99, candidate))
      newNum = String(candidate)
    } while (newNum === num)
    map[num] = newNum
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

// 中文语义替换：替换题干中的关键词
function replaceChineseKeywords(text: string): string {
  const replacements: [RegExp, string][] = [
    [/苹果/g, '橘子'],
    [/橘子/g, '梨子'],
    [/香蕉/g, '葡萄'],
    [/小猫/g, '小兔'],
    [/小狗/g, '小鸭'],
    [/春天/g, '秋天'],
    [/夏天/g, '冬天'],
    [/红色/g, '蓝色'],
    [/蓝色/g, '绿色'],
    [/高兴/g, '快乐'],
    [/开心/g, '幸福'],
    [/哭了/g, '笑了'],
    [/上学/g, '放学'],
    [/早上/g, '下午'],
    [/妈妈/g, '爸爸'],
    [/哥哥/g, '姐姐'],
    [/弟弟/g, '妹妹'],
    [/天空/g, '大地'],
    [/太阳/g, '月亮'],
    [/书本/g, '铅笔'],
    [/桌子/g, '椅子'],
    [/教室/g, '操场'],
    [/吃饭/g, '睡觉'],
    [/来/g, '去'],
    [/大/g, '小'],
    [/多/g, '少'],
    [/前/g, '后'],
    [/上/g, '下'],
    [/左/g, '右'],
  ]
  let result = text
  for (const [pattern, replacement] of replacements) {
    if (pattern.test(result)) {
      result = result.replace(pattern, replacement)
      break // 只替换一处，避免全部替换
    }
  }
  return result
}

// 从现有答案生成干扰项
function generateDistractors(correctAnswer: string, originalOptions?: string[]): string[] {
  const distractors = new Set<string>()
  if (originalOptions) {
    for (const opt of originalOptions) {
      if (opt !== correctAnswer) distractors.add(opt)
    }
  }
  // 如果没有足够干扰项，加入一些变体
  if (distractors.size < 2) {
    const num = parseInt(correctAnswer)
    if (!isNaN(num)) {
      distractors.add(String(num + 1))
      distractors.add(String(num - 1))
      distractors.add(String(num + 3))
    }
  }
  const result = [correctAnswer, ...Array.from(distractors)]
  // Fisher-Yates 打乱
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result.slice(0, 4)
}

// 生成单道变式题
export function generateVariant(original: PracticeQuestion, index: number): PracticeQuestion {
  const variantId = `${original.id}_v${index}`

  // === 数学填空题：大幅替换数字 ===
  if (original.type === 'fill' && /\d/.test(original.question)) {
    const { text: newQuestion, map } = replaceNumbersMath(original.question)
    const newAnswer = applyNumberMap(original.answer, map)
    const newAcceptable = original.acceptableAnswers?.map(a => applyNumberMap(a, map))
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

  // === 选择题：改变题干+重排选项+再生干扰项 ===
  if (original.type === 'choice' && original.options && original.options.length > 1) {
    const newQuestion = replaceChineseKeywords(original.question)
    const newOptions = generateDistractors(original.answer, original.options.filter(o => o !== original.answer))

    return {
      ...original,
      id: variantId,
      question: newQuestion,
      options: newOptions,
      answer: original.answer, // 答案不变
      hint: original.hint + '（变式练习）',
    }
  }

  // === 中文填空题（非数字）：替换关键词 ===
  if (original.type === 'fill' && /[\u4e00-\u9fff]/.test(original.question)) {
    const newQuestion = replaceChineseKeywords(original.question)
    // 如果题目没变，添加不同表述
    const finalQuestion = newQuestion === original.question
      ? original.question.replace(/？$/, '呢？')
      : newQuestion

    return {
      ...original,
      id: variantId,
      question: finalQuestion,
      hint: original.hint + '（变式练习）',
    }
  }

  // === 闪卡题：反转问题和答案 ===
  if (original.type === 'flashcard') {
    return {
      ...original,
      id: variantId,
      question: `请回忆：${original.answer} 对应的内容是什么？`,
      answer: original.question,
      hint: `（反向记忆）${original.hint}`,
    }
  }

  // === 拖拽题：保持原题但改变提示 ===
  if (original.type === 'drag') {
    return {
      ...original,
      id: variantId,
      question: original.question.replace(/？$/, '（再试一次）？'),
      hint: original.hint + '（变式练习）',
    }
  }

  // === 默认：英文填空题等 ===
  return {
    ...original,
    id: variantId,
    question: original.question.replace(/？$/, '（变式）？'),
    answer: original.answer,
    hint: original.hint + '（变式练习）',
    explanation: original.explanation,
  }
}

// 为一组题目生成变式题，使总数翻倍（交错排列：原题→变式→原题→变式...）
export function expandQuestions(questions: PracticeQuestion[]): PracticeQuestion[] {
  if (questions.length === 0) return []
  const result: PracticeQuestion[] = []
  for (let i = 0; i < questions.length; i++) {
    result.push(questions[i])
    result.push(generateVariant(questions[i], i + 1))
  }
  return result
}