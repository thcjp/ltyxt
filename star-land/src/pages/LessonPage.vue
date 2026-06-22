<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/course'
import { useProgressStore } from '@/stores/progress'
import { useStudyStore } from '@/stores/study'
import { useSettingsStore } from '@/stores/settings'
import { useRewardSystem } from '@/composables/useRewardSystem'
import { useSpeech } from '@/composables/useSpeech'
import { gsap } from 'gsap'
import { ArrowLeft, ArrowRight, Users, Star, ChevronRight, CheckCircle, XCircle, Lightbulb, BookOpen, PenTool, Rocket, Volume2, Home, Headphones, Zap, Grid3X3, Route, Hash, Gamepad2 } from 'lucide-vue-next'
import ContentBlockRenderer from '@/components/animation/ContentBlockRenderer.vue'
import type { KnowledgeLink, VideoResource } from '@/types'
import CardFlip from '@/components/animation/CardFlip.vue'
import SpeechButton from '@/components/animation/SpeechButton.vue'
import DragQuestion from '@/components/animation/DragQuestion.vue'
import WritingPractice from '@/components/WritingPractice.vue'
import PhonicsPractice from '@/components/PhonicsPractice.vue'
import DictationPractice from '@/components/DictationPractice.vue'
import LargeNumberReading from '@/components/LargeNumberReading.vue'
import ShapePuzzle from '@/components/ShapePuzzle.vue'
import ShortestPath from '@/components/ShortestPath.vue'
import NumberMaze from '@/components/NumberMaze.vue'
import SchulteGrid from '@/components/SchulteGrid.vue'
import { expandQuestions } from '@/composables/useVariantQuestions'
import { getVideoResources } from '@/data/math/mathGrade1Videos'
import { generateVideoResources } from '@/data/videoResourceGenerator'
import { PlayCircle, ExternalLink, Search, Video } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()
const progressStore = useProgressStore()
const studyStore = useStudyStore()

// ===== 知识点溯源链接解析 =====
// 从 hint 中解析格式：[知识点名称]（课程名称-章节号）
function parseKnowledgeLinks(hint?: string): KnowledgeLink[] {
  if (!hint) return []
  const links: KnowledgeLink[] = []
  // 匹配 [知识点名称]（课程名称-章节号） 格式
  const regex = /\[([^\]]+)\]（([^）]+)）/g
  let match
  while ((match = regex.exec(hint)) !== null) {
    const knowledgeName = match[1]
    const courseInfo = match[2]
    // 解析课程名称和章节号，格式如"数学-20以内进位加法-第1课"
    const parts = courseInfo.split('-')
    const courseName = parts.slice(0, -1).join('-') || courseInfo
    const chapterPart = parts[parts.length - 1] || ''
    // 从章节号推导chapterId（简化处理）
    const chapterNum = chapterPart.match(/第(\d+)课/)?.[1]
    links.push({
      knowledgeName,
      courseName,
      chapterId: chapterNum || '',
      lessonTitle: `${knowledgeName}（${courseInfo}）`,
    })
  }
  return links.slice(0, 3) // 最多3个链接
}
const { rewardForLesson, checkAchievements } = useRewardSystem()
const { speakWithRole, stop: stopSpeech } = useSpeech()
const settingsStore = useSettingsStore()

const subject = computed(() => route.params.subject as string)
const grade = computed(() => Number(route.params.grade) as 1 | 2 | 3)
const unitId = computed(() => route.params.unit as string)
const lessonId = computed(() => route.params.lesson as string)

const unit = computed(() => courseStore.getUnit(subject.value as any, grade.value, unitId.value))
const lesson = computed(() => unit.value?.lessons.find(l => l.id === lessonId.value))

// 视频辅助学习资源（全网抓取）
// 优先级：课程自带 > 数学一年级专属直链 > 通用搜索链接生成器
const videoResources = computed<VideoResource[]>(() => {
  if (!lesson.value) return []
  // 1. 优先使用课程自带的视频资源
  if (lesson.value.videoResources && lesson.value.videoResources.length > 0) {
    return lesson.value.videoResources
  }
  // 2. 数学一年级优先使用专属资源文件（包含网易公开课真实直链）
  if (subject.value === 'math' && grade.value === 1) {
    const resources = getVideoResources(lessonId.value)
    if (resources.length > 0) {
      return resources
    }
  }
  // 3. 其他学科年级使用通用生成器（内部会生成搜索链接作为回退）
  return generateVideoResources(
    subject.value,
    grade.value,
    lessonId.value,
    lesson.value.title || '',
  )
})

// 平台显示名称映射
const platformNames: Record<string, string> = {
  national_edu: '国家中小学智慧教育平台',
  bilibili: 'B站',
  youtube: 'YouTube',
  other: '教育平台',
}

// 平台图标颜色映射
const platformColors: Record<string, string> = {
  national_edu: 'bg-blue-100 text-blue-700',
  bilibili: 'bg-pink-100 text-pink-700',
  youtube: 'bg-red-100 text-red-700',
  other: 'bg-green-100 text-green-700',
}

// 打开视频链接
function openVideo(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

// 学习开始时间（用于计算学习时长）
const lessonStartTime = ref(Date.now())

// 学习阶段
const currentPhase = ref<'content' | 'iDo' | 'weDo' | 'youDo' | 'complete'>('content')
const showParentPanel = ref(false)
const currentQuestionIndex = ref(0)
const selectedAnswer = ref('')
const showResult = ref(false)
const isCorrect = ref(false)
const correctCount = ref(0)
const totalAnswered = ref(0)
// 家长批改相关状态
const showParentGrade = ref(false)       // 是否显示家长批改弹窗
const parentGradedQuestionId = ref('')   // 当前正在批改的题目ID（防止重复批改）
const hasParentGraded = ref(false)       // 当前题是否已被家长批改过

let ctx: gsap.Context | null = null

// 题量扩充：原始题 + 变式题 = 2倍题量
const currentQuestions = computed(() => {
  const original = lesson.value?.practiceQuestions || []
  return expandQuestions(original)
})
const currentQuestion = computed(() => currentQuestions.value[currentQuestionIndex.value])

// ===== 选择题选项打乱（消除答案分布规律性）=====
// 每次切换到新选择题时，对选项进行 Fisher-Yates 打乱
// 判分仍用原始 answer 字符串匹配，不受打乱影响
const shuffledOptions = ref<string[]>([])

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

watch(currentQuestion, (q) => {
  if (q && q.type === 'choice' && q.options && q.options.length > 1) {
    shuffledOptions.value = shuffleArray(q.options)
  } else {
    shuffledOptions.value = []
  }
  // 重置答题状态
  selectedAnswer.value = ''
  showResult.value = false
  isCorrect.value = false
  hasParentGraded.value = false
}, { immediate: true })

// ===== 语文生字书写练习 =====
// 从课文 ContentBlock 中解析生字详解，提取字和拼音
interface CharInfo { char: string; pinyin: string }

const writingChars = computed<CharInfo[]>(() => {
  if (!lesson.value || subject.value !== 'chinese') return []
  const chars: CharInfo[] = []
  for (const block of lesson.value.content) {
    if (block.label === '生字详解' && block.content) {
      // 第一行格式：字(拼音)
      const firstLine = block.content.split('\n')[0]
      const match = firstLine.match(/^(.+?)\((.+?)\)/)
      if (match) {
        chars.push({ char: match[1], pinyin: match[2] })
      }
    }
  }
  return chars
})

const showWritingPractice = ref(false)

function openWritingPractice() {
  showWritingPractice.value = true
}

// ===== 英语自然拼读练习 =====
const showPhonicsPractice = ref(false)

function openPhonicsPractice() {
  showPhonicsPractice.value = true
}

// ===== 听写练习 =====
const showDictationPractice = ref(false)

function openDictationPractice() {
  showDictationPractice.value = true
}

// ===== 数学趣味练习 =====
const showMathGame = ref<'largeNumber' | 'shapePuzzle' | 'shortestPath' | 'numberMaze' | 'schulteGrid' | null>(null)

function openMathGame(game: 'largeNumber' | 'shapePuzzle' | 'shortestPath' | 'numberMaze' | 'schulteGrid') {
  showMathGame.value = game
}

// 阶段配置
const phases = [
  { key: 'content', name: '课文', icon: BookOpen, color: 'text-primary-500' },
  { key: 'iDo', name: '示范', icon: Lightbulb, color: 'text-yellow-500' },
  { key: 'weDo', name: '合练', icon: PenTool, color: 'text-secondary-500' },
  { key: 'youDo', name: '自练', icon: Rocket, color: 'text-green-500' },
]

const currentPhaseIndex = computed(() => phases.findIndex(p => p.key === currentPhase.value))

// 推断学科语言
const subjectLang = computed<'zh' | 'en'>(() => subject.value === 'english' ? 'en' : 'zh')

// ===== 答案标准化：处理键盘无法输入的特殊字符 =====
// 将用户输入和标准答案都标准化后再比较
function normalizeAnswer(answer: string): string {
  let result = answer.trim()

  // 1. ü 系列：接受 v / V / u: 替代
  result = result.replace(/[üǖǘǚǜ]/g, 'ü')  // 先统一为 ü
  result = result.replace(/u:/gi, 'ü')         // u: 视为 ü
  // 独立的 v 视为 ü（拼音输入习惯：nv→nü, lv→lü, v→ü）
  // 只在以下情况替换：单独的v、或v前面是n/l、或v在拼音组合中
  result = result.replace(/([nl])v/gi, '$1ü')  // nv→nü, lv→lü
  result = result.replace(/\bv\b/g, 'ü')       // 独立的 v 视为 ü

  // 2. 带声调的元音 → 去声调（方便比较）
  //    用户输入无声调字母也能匹配带声调答案
  const toneMap: Record<string, string> = {
    'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
    'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
    'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
    'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
    'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
    'ǖ': 'ü', 'ǘ': 'ü', 'ǚ': 'ü', 'ǜ': 'ü',
  }
  for (const [tone, base] of Object.entries(toneMap)) {
    result = result.replace(new RegExp(tone, 'g'), base)
  }

  // 3. 数学符号替代
  result = result.replace(/[×✕✖]/g, '×')   // 乘号统一
  result = result.replace(/\*/g, '×')        // * 视为乘号
  result = result.replace(/[xX]/g, (match, offset, str) => {
    // 只在数学上下文中替换 x 为 ×（前后有数字时）
    const before = str[offset - 1]
    const after = str[offset + 1]
    if (before && after && /\d/.test(before) && /\d/.test(after)) {
      return '×'
    }
    return match
  })
  result = result.replace(/[÷]/g, '÷')      // 除号统一
  result = result.replace(/\//g, (match, offset, str) => {
    // 只在数字上下文中替换 / 为 ÷
    const before = str[offset - 1]
    const after = str[offset + 1]
    if (before && after && /\d/.test(before) && /\d/.test(after)) {
      return '÷'
    }
    return match
  })

  // 4. 全角转半角
  result = result.replace(/，/g, ',')
  result = result.replace(/。/g, '.')
  result = result.replace(/：/g, ':')
  result = result.replace(/；/g, ';')
  result = result.replace(/（/g, '(')
  result = result.replace(/）/g, ')')

  // 5. 统一空格
  result = result.replace(/\s+/g, ' ').trim()

  return result
}

// 中文数字与阿拉伯数字映射
const CHINESE_NUM_MAP: Record<string, string> = {
  '零': '0', '一': '1', '二': '2', '两': '2', '三': '3', '四': '4',
  '五': '5', '六': '6', '七': '7', '八': '8', '九': '9', '十': '10',
}

// 将中文数字转为阿拉伯数字（仅转换单字映射）
function normalizeChineseNumber(text: string): string {
  let result = text
  for (const [cn, num] of Object.entries(CHINESE_NUM_MAP)) {
    result = result.replace(new RegExp(cn, 'g'), num)
  }
  return result
}

// 模糊匹配答案：标准化后比较
function checkAnswer(userAnswer: string, correctAnswer: string, acceptableAnswers?: string[]): boolean {
  const normUser = normalizeAnswer(userAnswer)
  const normCorrect = normalizeAnswer(correctAnswer)

  // 完全匹配
  if (normUser === normCorrect) return true

  // 忽略大小写匹配
  if (normUser.toLowerCase() === normCorrect.toLowerCase()) return true

  // 检查 acceptableAnswers（备选正确答案）
  if (acceptableAnswers && acceptableAnswers.length > 0) {
    for (const alt of acceptableAnswers) {
      const normAlt = normalizeAnswer(alt)
      if (normUser === normAlt) return true
      if (normUser.toLowerCase() === normAlt.toLowerCase()) return true
    }
  }

  // 中文数字与阿拉伯数字等价匹配
  const userNum = normalizeChineseNumber(normUser)
  const correctNum = normalizeChineseNumber(normCorrect)
  if (userNum !== normUser && userNum === correctNum) return true
  if (correctNum !== normCorrect && userNum === correctNum) return true
  if (userNum.toLowerCase() === correctNum.toLowerCase()) return true

  // 逗号分隔的列表匹配（如 "a,o,e,i,u,ü"）
  // 将两边按逗号分割为集合，比较集合是否相同
  const userParts = normUser.toLowerCase().split(',').map(s => s.trim()).filter(Boolean)
  const correctParts = normCorrect.toLowerCase().split(',').map(s => s.trim()).filter(Boolean)
  if (userParts.length > 1 && correctParts.length > 1) {
    if (userParts.length === correctParts.length && userParts.every(p => correctParts.includes(p))) return true
  }

  // "和" 分隔的列表匹配（如 "5和6" vs "5,6" vs "5、6"）
  const splitByAll = (s: string) => s.split(/[，,、和]/).map(p => p.trim()).filter(Boolean)
  const userAllParts = splitByAll(normUser.toLowerCase())
  const correctAllParts = splitByAll(normCorrect.toLowerCase())
  if (userAllParts.length > 1 && correctAllParts.length > 1) {
    if (userAllParts.length === correctAllParts.length && userAllParts.every(p => correctAllParts.includes(p))) return true
  }

  // 前缀/后缀模糊匹配：用户答案比正确答案少1-2个字但核心意思相同
  // 如 "右下" 匹配 "右下方"，"上" 匹配 "上方"，"右" 匹配 "右下"
  const userLow = normUser.toLowerCase()
  const correctLow = normCorrect.toLowerCase()
  // 修复：移除 length >= 2 的限制，允许单字前缀匹配
  if (userLow.length >= 1 && correctLow.length >= 1) {
    const diff = Math.abs(userLow.length - correctLow.length)
    if (diff >= 1 && diff <= 2) {
      // 用户答案是正确答案的前缀（如 "右" → "右下"），或反过来
      if (correctLow.startsWith(userLow) || userLow.startsWith(correctLow)) return true
    }
  }

  return false
}

// 当前题目是否包含特殊字符（需要输入提示）
const hasSpecialCharHint = computed(() => {
  const answer = currentQuestion.value?.answer || ''
  return /[üǖǘǚǜāáǎàēéěèīíǐìōóǒòūúǔù×÷]/.test(answer)
})

function selectAnswer(answer: string) {
  if (showResult.value) return
  selectedAnswer.value = answer
  isCorrect.value = checkAnswer(answer, currentQuestion.value?.answer || '', currentQuestion.value?.acceptableAnswers)
  showResult.value = true
  totalAnswered.value++
  if (isCorrect.value) {
    correctCount.value++
    nextTick(() => {
      const el = document.querySelector('.answer-card')
      if (el) {
        gsap.to(el, { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1, force3D: true })
      }
      // 正确反馈 - 朗读带名字的鼓励语
      const praise = settingsStore.getPraise()
      speakWithRole(praise, 'student', subjectLang.value)
    })
  } else {
    // 记录错题
    if (currentQuestion.value) {
      studyStore.addWrongQuestion({
        questionId: currentQuestion.value.id,
        subject: subject.value as any,
        grade: grade.value,
        unitId: unitId.value,
        lessonId: lessonId.value,
        questionType: currentQuestion.value.type,
        question: currentQuestion.value.question,
        correctAnswer: currentQuestion.value.answer,
        userAnswer: answer,
        wrongAt: new Date().toISOString(),
        explanation: currentQuestion.value.explanation,
        knowledgeLinks: parseKnowledgeLinks(currentQuestion.value.hint),
      })
    }
    nextTick(() => {
      const el = document.querySelector('.answer-card')
      if (el) {
        gsap.to(el, { x: -6, duration: 0.06, yoyo: true, repeat: 4, force3D: true })
      }
    })
  }
}

// ===== 家长批改功能 =====
// 判断当前题是否支持家长批改（填空题和闪卡题，这类题答案可能不唯一）
const canParentGrade = computed(() => {
  if (!currentQuestion.value || !showResult.value || hasParentGraded.value) return false
  return currentQuestion.value.type === 'fill' || currentQuestion.value.type === 'flashcard'
})

// 打开家长批改弹窗
function openParentGrade() {
  showParentGrade.value = true
}

// 家长判定为正确
function parentMarkCorrect() {
  if (!currentQuestion.value || hasParentGraded.value) return
  hasParentGraded.value = true
  showParentGrade.value = false

  // 如果原来是错的，需要修正为正确
  if (!isCorrect.value) {
    isCorrect.value = true
    correctCount.value++

    // 从错题本中移除该题（如果刚被加入）
    const qid = currentQuestion.value.id
    const existing = studyStore.wrongQuestions.find(
      w => w.questionId === qid && !w.mastered
    )
    if (existing) {
      // 标记为已掌握（相当于撤销错题记录）
      studyStore.reviewWrongQuestion(existing.id, true)
      studyStore.reviewWrongQuestion(existing.id, true)
    }

    // 播放正确反馈动画和语音
    nextTick(() => {
      const el = document.querySelector('.answer-card')
      if (el) {
        gsap.to(el, { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1, force3D: true })
      }
      speakWithRole(settingsStore.getPraise(), 'student', subjectLang.value)
    })
  }
}

// 家长判定维持错误
function parentKeepWrong() {
  showParentGrade.value = false
  hasParentGraded.value = true
}

// 拖拽题完成回调
function onDragDone(correct: boolean) {
  isCorrect.value = correct
  showResult.value = true
  totalAnswered.value++
  if (correct) {
    correctCount.value++
    const praise = settingsStore.getPraise()
    speakWithRole(praise, 'student', subjectLang.value)
  } else if (currentQuestion.value) {
    // 记录拖拽题错题
    studyStore.addWrongQuestion({
      questionId: currentQuestion.value.id,
      subject: subject.value as any,
      grade: grade.value,
      unitId: unitId.value,
      lessonId: lessonId.value,
      questionType: currentQuestion.value.type,
      question: currentQuestion.value.question,
      correctAnswer: currentQuestion.value.answer,
      userAnswer: '(拖拽错误)',
      wrongAt: new Date().toISOString(),
      explanation: currentQuestion.value.explanation,
      knowledgeLinks: parseKnowledgeLinks(currentQuestion.value.hint),
    })
  }
}

function nextQuestion() {
  showResult.value = false
  selectedAnswer.value = ''
  hasParentGraded.value = false
  showParentGrade.value = false
  if (currentQuestionIndex.value < currentQuestions.value.length - 1) {
    currentQuestionIndex.value++
    // 下一题弹跳出现
    nextTick(() => {
      const el = document.querySelector('.answer-card')
      if (el) gsap.fromTo(el, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out', force3D: true })
    })
  } else {
    const accuracy = totalAnswered.value > 0 ? Math.round((correctCount.value / totalAnswered.value) * 100) : 0
    progressStore.completeLesson(lessonId.value, accuracy)
    rewardForLesson(accuracy)
    checkAchievements()

    // 记录学习日志
    const duration = Math.round((Date.now() - lessonStartTime.value) / 1000)
    const starLevel = accuracy >= 95 ? 3 : accuracy >= 80 ? 2 : accuracy >= 60 ? 1 : 0
    studyStore.addStudyLog({
      date: new Date().toISOString().split('T')[0],
      subject: subject.value as any,
      grade: grade.value,
      unitId: unitId.value,
      lessonId: lessonId.value,
      lessonTitle: lesson.value?.title || '',
      accuracy,
      starLevel: starLevel as any,
      duration,
      wrongCount: totalAnswered.value - correctCount.value,
      correctCount: correctCount.value,
    })

    currentPhase.value = 'complete'
    if (accuracy >= 80) celebrateAnimation()
  }
}

function nextPhase() {
  const idx = currentPhaseIndex.value
  if (idx < phases.length - 1) {
    stopSpeech()
    currentPhase.value = phases[idx + 1].key as any
    nextTick(() => {
      const el = document.querySelector('.phase-content')
      if (el) gsap.fromTo(el, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true })
    })
  }
}

// ===== 步进式导航：上一步/下一步 =====
// 重构页面返回机制：不再直接跳转到单元页，而是按步骤回退
function goBack() {
  stopSpeech()

  // 完成阶段：返回练习阶段
  if (currentPhase.value === 'complete') {
    currentPhase.value = 'youDo'
    // 重置练习状态，允许重新答题
    currentQuestionIndex.value = 0
    selectedAnswer.value = ''
    showResult.value = false
    correctCount.value = 0
    totalAnswered.value = 0
    return
  }

  // 自练阶段（youDo）：如果在第1题之前，回退到合练阶段；否则回退到上一题
  if (currentPhase.value === 'youDo') {
    if (currentQuestionIndex.value > 0) {
      // 回退到上一题
      currentQuestionIndex.value--
      selectedAnswer.value = ''
      showResult.value = false
      nextTick(() => {
        const el = document.querySelector('.answer-card')
        if (el) gsap.fromTo(el, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out', force3D: true })
      })
    } else {
      // 第1题时回退到合练阶段
      currentPhase.value = 'weDo'
    }
    return
  }

  // 合练阶段（weDo）：回退到示范阶段
  if (currentPhase.value === 'weDo') {
    currentPhase.value = 'iDo'
    return
  }

  // 示范阶段（iDo）：回退到课文阶段
  if (currentPhase.value === 'iDo') {
    currentPhase.value = 'content'
    return
  }

  // 课文阶段（content）：返回单元页（这是唯一的"大回退"）
  if (currentPhase.value === 'content') {
    router.push(`/courses/${subject.value}/${grade.value}/${unitId.value}`)
    return
  }
}

// 前进到下一步
function goForward() {
  const idx = currentPhaseIndex.value
  if (currentPhase.value === 'complete') {
    // 完成阶段：前进到奖励页
    router.push('/rewards')
    return
  }
  if (idx < phases.length - 1) {
    nextPhase()
  }
}

// 是否可以回退（用于控制按钮显示）
const canGoBack = computed(() => true) // 任何阶段都可以回退

// 是否可以前进（用于控制按钮显示）
const canGoForward = computed(() => {
  if (currentPhase.value === 'complete') return true
  // 在练习阶段，如果正在答题（showResult=true），不显示前进按钮（用"下一题"按钮）
  if (currentPhase.value === 'youDo' && !showResult.value && currentQuestions.value.length > 0) return false
  return currentPhaseIndex.value < phases.length - 1
})

function celebrateAnimation() {
  const colors = ['#FF8C42', '#4ECDC4', '#9B59B6', '#2ECC71', '#E74C3C', '#FFD700']
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div')
    particle.style.cssText = `
      position: fixed; width: 10px; height: 10px; border-radius: 50%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${50 + (Math.random() - 0.5) * 20}%;
      top: 50%; z-index: 9999; pointer-events: none;
    `
    document.body.appendChild(particle)
    gsap.to(particle, {
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 1) * 400,
      autoAlpha: 0,
      scale: Math.random() * 2,
      duration: 1 + Math.random(),
      ease: 'power2.out',
      onComplete: () => particle.remove(),
    })
  }
}

const progress = computed(() => progressStore.getLessonProgress(lessonId.value))
const starLevel = computed(() => progress.value?.starLevel || 0)

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo('.lesson-header', { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true })
  })
})

onUnmounted(() => {
  ctx?.revert()
  stopSpeech()
})
</script>

<template>
  <div class="min-h-screen flex flex-col" v-if="lesson">
    <!-- 顶部栏 -->
    <div class="lesson-header sticky top-0 bg-white/90 backdrop-blur-sm z-40 px-4 py-2 shadow-sm">
      <div class="flex items-center justify-between">
        <!-- 步进式导航：上一步 + 下一步 -->
        <div class="flex items-center gap-1">
          <button @click="goBack" class="flex items-center gap-1 px-2 py-1 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors" title="上一步">
            <ArrowLeft class="w-5 h-5" />
          </button>
          <button
            v-if="canGoForward"
            @click="goForward"
            class="flex items-center gap-1 px-2 py-1 rounded-xl text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            title="下一步"
          >
            <ArrowRight class="w-5 h-5" />
          </button>
          <!-- 快速返回单元页按钮（仅在课文阶段显示，避免误触） -->
          <button
            v-if="currentPhase === 'content'"
            @click="router.push(`/courses/${subject}/${grade}/${unitId}`)"
            class="flex items-center gap-1 px-2 py-1 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors ml-1"
            title="返回单元"
          >
            <Home class="w-4 h-4" />
          </button>
        </div>
        <h1 class="font-title text-lg text-gray-800 truncate mx-4">{{ lesson.title }}</h1>
        <button @click="showParentPanel = !showParentPanel" class="p-2 rounded-xl hover:bg-gray-100">
          <Users class="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <!-- 面包屑导航 -->
      <div class="flex items-center gap-1 text-xs text-gray-400 mt-1">
        <router-link to="/courses" class="hover:text-primary-500">课程</router-link>
        <ChevronRight class="w-3 h-3" />
        <router-link :to="`/courses/${subject}`" class="hover:text-primary-500">{{ { math: '数学', chinese: '语文', english: '英语' }[subject as string] || subject }}</router-link>
        <ChevronRight class="w-3 h-3" />
        <router-link :to="`/courses/${subject}/${grade}`" class="hover:text-primary-500">{{ grade }}年级</router-link>
        <ChevronRight class="w-3 h-3" />
        <router-link :to="`/courses/${subject}/${grade}/${unitId}`" class="hover:text-primary-500">{{ unit?.title || unitId }}</router-link>
        <ChevronRight class="w-3 h-3" />
        <span class="text-gray-600">{{ lesson.title }}</span>
      </div>
      <!-- 当前步骤提示 -->
      <div class="text-xs text-gray-400 mt-1">
        <span v-if="currentPhase === 'content'">📖 课文学习</span>
        <span v-else-if="currentPhase === 'iDo'">💡 示范阶段</span>
        <span v-else-if="currentPhase === 'weDo'">✏️ 合练阶段</span>
        <span v-else-if="currentPhase === 'youDo'">🚀 自练阶段 · 第 {{ currentQuestionIndex + 1 }}/{{ currentQuestions.length }} 题</span>
        <span v-else-if="currentPhase === 'complete'">🎉 完成阶段</span>
      </div>
    </div>

    <!-- 阶段指示器 -->
    <div class="px-4 py-2 flex items-center gap-1">
      <template v-for="(phase, idx) in phases" :key="phase.key">
        <button
          @click="currentPhaseIndex >= idx && (currentPhase = phase.key as any)"
          class="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl transition-all duration-200"
          :class="currentPhase === phase.key ? 'bg-primary-50' : (currentPhaseIndex >= idx ? 'bg-gray-50' : 'opacity-40')"
        >
          <component :is="phase.icon" class="w-4 h-4" :class="phase.color" />
          <span class="text-[10px]" :class="currentPhase === phase.key ? 'text-primary-600 font-medium' : 'text-gray-400'">{{ phase.name }}</span>
        </button>
        <ChevronRight v-if="idx < phases.length - 1" class="w-3 h-3 text-gray-300" />
      </template>
    </div>

    <!-- 主内容区 -->
    <div class="phase-content flex-1 p-4 overflow-y-auto">

      <!-- 课文学习阶段 -->
      <div v-if="currentPhase === 'content'" class="space-y-3">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <BookOpen class="w-5 h-5 text-primary-500" />
            <h2 class="font-title text-lg text-primary-600">课文学习</h2>
          </div>
          <SpeechButton :text="lesson.content.map(b => b.content).join('。')" :lang="subjectLang" />
        </div>
        <ContentBlockRenderer
          v-for="(block, idx) in lesson.content"
          :key="idx"
          :block="block"
          :index="idx"
          :lang="subjectLang"
        />

        <!-- 语文生字书写练习入口 -->
        <div v-if="writingChars.length > 0" class="card bg-purple-50 border-2 border-purple-200 mt-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <PenTool class="w-5 h-5 text-purple-500" />
              <div>
                <p class="font-title text-base text-purple-700">生字书写练习</p>
                <p class="text-xs text-purple-500">共 {{ writingChars.length }} 个生字需要练习书写</p>
              </div>
            </div>
            <button @click="openWritingPractice" class="px-4 py-2 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-colors text-sm">
              开始练习
            </button>
          </div>
        </div>

        <!-- 书写练习弹窗 -->
        <WritingPractice
          v-if="showWritingPractice"
          :chars="writingChars"
          :lesson-id="lessonId"
          :subject="subject"
          :grade="grade"
          :unit-id="unitId"
          @close="showWritingPractice = false"
        />

        <!-- 语文听写练习入口 -->
        <div v-if="subject === 'chinese'" class="card bg-red-50 border-2 border-red-200 mt-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <Headphones class="w-5 h-5 text-red-500" />
              <div>
                <p class="font-title text-base text-red-700">汉字听写</p>
                <p class="text-xs text-red-500">听读音写汉字，训练听写能力</p>
              </div>
            </div>
            <button @click="openDictationPractice" class="px-4 py-2 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors text-sm">
              开始听写
            </button>
          </div>
        </div>

        <!-- 听写练习弹窗 -->
        <DictationPractice
          v-if="showDictationPractice && (subject === 'chinese' || subject === 'english')"
          :subject="(subject as 'chinese' | 'english')"
          :grade="grade"
          :lesson-id="lessonId"
          @close="showDictationPractice = false"
        />

        <!-- 英语自然拼读练习入口 -->
        <div v-if="subject === 'english'" class="card bg-blue-50 border-2 border-blue-200 mt-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <Volume2 class="w-5 h-5 text-blue-500" />
              <div>
                <p class="font-title text-base text-blue-700">自然拼读 Phonics</p>
                <p class="text-xs text-blue-500">字母音·CVC拼读·字母组合·高频词·听音拼写</p>
              </div>
            </div>
            <button @click="openPhonicsPractice" class="px-4 py-2 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors text-sm">
              开始练习
            </button>
          </div>
        </div>

        <!-- 拼读练习弹窗 -->
        <PhonicsPractice
          v-if="showPhonicsPractice"
          :grade="grade"
          @close="showPhonicsPractice = false"
        />

        <!-- 英语听写练习入口 -->
        <div v-if="subject === 'english'" class="card bg-cyan-50 border-2 border-cyan-200 mt-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <Headphones class="w-5 h-5 text-cyan-500" />
              <div>
                <p class="font-title text-base text-cyan-700">单词听写 Dictation</p>
                <p class="text-xs text-cyan-500">Listen and spell the words</p>
              </div>
            </div>
            <button @click="openDictationPractice" class="px-4 py-2 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 transition-colors text-sm">
              开始听写
            </button>
          </div>
        </div>

        <!-- 数学趣味练习入口 -->
        <div v-if="subject === 'math'" class="space-y-3 mt-4">
          <div class="flex items-center gap-2 mb-2">
            <Gamepad2 class="w-5 h-5 text-green-600" />
            <h3 class="font-title text-base text-green-700">数学趣味练习</h3>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button @click="openMathGame('largeNumber')" class="card bg-orange-50 border-2 border-orange-200 p-3 text-left hover:bg-orange-100 transition-colors">
              <div class="flex items-center gap-2 mb-1">
                <Hash class="w-4 h-4 text-orange-500" />
                <span class="font-title text-sm text-orange-700">大数读法</span>
              </div>
              <p class="text-xs text-orange-500">听数字读音，写出中文读法</p>
            </button>
            <button @click="openMathGame('shapePuzzle')" class="card bg-indigo-50 border-2 border-indigo-200 p-3 text-left hover:bg-indigo-100 transition-colors">
              <div class="flex items-center gap-2 mb-1">
                <Grid3X3 class="w-4 h-4 text-indigo-500" />
                <span class="font-title text-sm text-indigo-700">图形拼搭</span>
              </div>
              <p class="text-xs text-indigo-500">用形状块拼出目标图形</p>
            </button>
            <button @click="openMathGame('shortestPath')" class="card bg-green-50 border-2 border-green-200 p-3 text-left hover:bg-green-100 transition-colors">
              <div class="flex items-center gap-2 mb-1">
                <Route class="w-4 h-4 text-green-500" />
                <span class="font-title text-sm text-green-700">最短路径</span>
              </div>
              <p class="text-xs text-green-500">避开障碍找最短路径</p>
            </button>
            <button @click="openMathGame('numberMaze')" class="card bg-purple-50 border-2 border-purple-200 p-3 text-left hover:bg-purple-100 transition-colors">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">🌀</span>
                <span class="font-title text-sm text-purple-700">数字迷宫</span>
              </div>
              <p class="text-xs text-purple-500">沿数字路径走出迷宫</p>
            </button>
            <button @click="openMathGame('schulteGrid')" class="card bg-yellow-50 border-2 border-yellow-200 p-3 text-left hover:bg-yellow-100 transition-colors col-span-2">
              <div class="flex items-center gap-2 mb-1">
                <Zap class="w-4 h-4 text-yellow-500" />
                <span class="font-title text-sm text-yellow-700">舒尔特方格</span>
              </div>
              <p class="text-xs text-yellow-500">按顺序点击数字，训练注意力</p>
            </button>
          </div>
        </div>

        <!-- 数学趣味练习弹窗 -->
        <LargeNumberReading v-if="showMathGame === 'largeNumber'" :grade="grade" @close="showMathGame = null" />
        <ShapePuzzle v-if="showMathGame === 'shapePuzzle'" :grade="grade" @close="showMathGame = null" />
        <ShortestPath v-if="showMathGame === 'shortestPath'" :grade="grade" @close="showMathGame = null" />
        <NumberMaze v-if="showMathGame === 'numberMaze'" :grade="grade" @close="showMathGame = null" />
        <SchulteGrid v-if="showMathGame === 'schulteGrid'" :grade="grade" @close="showMathGame = null" />

        <div class="card bg-yellow-50 border border-yellow-200 mt-4">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-lg">😄</span>
              <span class="text-sm font-medium text-yellow-700">趣味时刻</span>
            </div>
            <SpeechButton :text="lesson.funElement" lang="zh" size="sm" />
          </div>
          <p class="text-sm text-yellow-800">{{ lesson.funElement }}</p>
        </div>

        <!-- 辅助学习视频资源（全网抓取） -->
        <div v-if="videoResources.length > 0" class="card bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 mt-4">
          <div class="flex items-center gap-2 mb-3">
            <Video class="w-5 h-5 text-indigo-500" />
            <h3 class="font-title text-base text-indigo-700">辅助学习视频</h3>
            <span class="text-xs text-indigo-400 ml-auto">共 {{ videoResources.length }} 个资源</span>
          </div>
          <p class="text-xs text-indigo-500 mb-3">以下视频来自全网教育平台，可作为本课辅助学习资料。如链接失效，请点击"搜索"按钮通过关键词查找。</p>
          <div class="space-y-2">
            <div
              v-for="video in videoResources"
              :key="video.id"
              class="bg-white rounded-lg p-3 border border-indigo-100 hover:shadow-md transition-shadow"
            >
              <div class="flex items-start justify-between gap-2 mb-2">
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-medium text-gray-800 truncate">{{ video.title }}</h4>
                  <div class="flex items-center gap-2 mt-1 flex-wrap">
                    <span class="text-[10px] px-2 py-0.5 rounded-full" :class="platformColors[video.platform]">
                      {{ platformNames[video.platform] }}
                    </span>
                    <span v-if="video.duration" class="text-[10px] text-gray-400">时长: {{ video.duration }}</span>
                    <span class="text-[10px] text-amber-500">匹配度: {{ '★'.repeat(video.matchScore) }}</span>
                  </div>
                </div>
                <PlayCircle class="w-5 h-5 text-indigo-400 flex-shrink-0" />
              </div>
              <p v-if="video.note" class="text-xs text-gray-500 mb-2 line-clamp-2">{{ video.note }}</p>
              <div class="flex items-center gap-2">
                <button
                  @click="openVideo(video.url)"
                  class="flex-1 flex items-center justify-center gap-1 text-xs bg-indigo-500 text-white py-1.5 rounded-md hover:bg-indigo-600 transition-colors"
                >
                  <ExternalLink class="w-3 h-3" />
                  观看视频
                </button>
                <button
                  @click="openVideo(video.searchUrl)"
                  class="flex items-center justify-center gap-1 text-xs bg-gray-100 text-gray-600 py-1.5 px-3 rounded-md hover:bg-gray-200 transition-colors"
                  title="链接失效时可通过关键词搜索"
                >
                  <Search class="w-3 h-3" />
                  搜索
                </button>
              </div>
            </div>
          </div>
        </div>

        <button @click="nextPhase" class="btn-primary w-full flex items-center justify-center gap-2 mt-4">
          我来示范 <ChevronRight class="w-4 h-4" />
        </button>
      </div>

      <!-- I Do 示范阶段 -->
      <div v-if="currentPhase === 'iDo'" class="space-y-4">
        <div class="card">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-sm">👨‍🏫</div>
              <h2 class="font-title text-lg text-yellow-600">我来示范</h2>
            </div>
            <SpeechButton :text="lesson.iDo" :lang="subjectLang" />
          </div>
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ lesson.iDo }}</p>
        </div>
        <div class="card bg-blue-50 border border-blue-200">
          <p class="text-sm text-blue-700">💡 教学法：{{ lesson.teachingMethod }}</p>
        </div>
        <button @click="nextPhase" class="btn-primary w-full flex items-center justify-center gap-2">
          一起练习 <ChevronRight class="w-4 h-4" />
        </button>
      </div>

      <!-- We Do 合作阶段 -->
      <div v-if="currentPhase === 'weDo'" class="space-y-4">
        <div class="card">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-sm">👨‍👧</div>
              <h2 class="font-title text-lg text-secondary-600">一起练习</h2>
            </div>
            <SpeechButton :text="lesson.weDo" :lang="subjectLang" />
          </div>
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ lesson.weDo }}</p>
        </div>
        <div class="card bg-purple-50 border border-purple-200">
          <p class="text-sm text-purple-700">🎯 家长提示：{{ lesson.parentTips }}</p>
        </div>
        <button @click="nextPhase" class="btn-secondary w-full flex items-center justify-center gap-2">
          自己试试 <ChevronRight class="w-4 h-4" />
        </button>
      </div>

      <!-- You Do 独立练习阶段 -->
      <div v-if="currentPhase === 'youDo'" class="space-y-4">
        <div class="card mb-4">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">🙋</div>
              <h2 class="font-title text-lg text-green-600">自己试试</h2>
            </div>
            <SpeechButton :text="lesson.youDo" :lang="subjectLang" />
          </div>
          <p class="text-gray-700 leading-relaxed">{{ lesson.youDo }}</p>
        </div>

        <!-- 练习题 -->
        <div v-if="currentQuestion" class="card answer-card">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-gray-400">第 {{ currentQuestionIndex + 1 }}/{{ currentQuestions.length }} 题</span>
            <SpeechButton :text="currentQuestion.question" :lang="subjectLang" size="sm" />
          </div>
          <p class="font-medium text-gray-800 mb-4">{{ currentQuestion.question }}</p>

          <!-- 选择题 -->
          <div v-if="currentQuestion.type === 'choice'" class="space-y-2">
            <button
              v-for="(option, oi) in shuffledOptions"
              :key="option"
              @click="selectAnswer(option)"
              class="w-full p-3 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-sm active:scale-[0.98]"
              :class="{
                'border-primary-500 bg-primary-50': selectedAnswer === option && !showResult,
                'border-green-500 bg-green-50': showResult && option === currentQuestion.answer,
                'border-red-500 bg-red-50': showResult && selectedAnswer === option && option !== currentQuestion.answer,
                'border-gray-200 hover:border-gray-300': selectedAnswer !== option || !showResult,
              }"
            >
              <span class="inline-block w-6 h-6 rounded-full bg-gray-100 text-center text-xs leading-6 mr-2">{{ ['A','B','C','D'][oi] }}</span>
              {{ option }}
            </button>
          </div>

          <!-- 填空题 -->
          <div v-if="currentQuestion.type === 'fill'" class="space-y-3">
            <div class="flex items-center gap-2">
              <input
                v-model="selectedAnswer"
                :disabled="showResult"
                placeholder="输入你的答案..."
                class="flex-1 p-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 outline-none text-lg"
                @keyup.enter="selectAnswer(selectedAnswer)"
              />
              <button
                @click="speakWithRole(currentQuestion.answer, 'teacher', subjectLang)"
                class="p-3 rounded-xl bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                title="听一听正确读音"
              >
                <Volume2 class="w-5 h-5" />
              </button>
            </div>
            <p v-if="hasSpecialCharHint && !showResult" class="text-xs text-amber-500 flex items-center gap-1">
              <Lightbulb class="w-3 h-3" />
              输入提示：ü可以用 v 或 u: 代替，带声调字母直接输入无声调字母即可，×可以用 * 代替
            </p>
            <button v-if="!showResult" @click="selectAnswer(selectedAnswer)" class="btn-primary w-full">确认答案</button>
          </div>

          <!-- 闪卡 -->
          <div v-if="currentQuestion.type === 'flashcard'" class="text-center">
            <CardFlip
              :front="currentQuestion.question"
              :back="currentQuestion.answer"
              :lang="subjectLang"
            />
            <button v-if="!showResult" @click="selectAnswer(currentQuestion.answer)" class="btn-secondary w-full mt-3">我记住了</button>
          </div>

          <!-- 拖拽题 -->
          <div v-if="currentQuestion.type === 'drag'" class="space-y-3">
            <DragQuestion
              :question="currentQuestion.question"
              :answer="currentQuestion.answer"
              :hint="currentQuestion.hint"
              @done="(correct) => onDragDone(correct)"
            />
          </div>

          <!-- 答题结果 -->
          <div v-if="showResult" class="mt-4 space-y-2">
            <div class="flex items-center gap-2" :class="isCorrect ? 'text-green-600' : 'text-red-600'">
              <CheckCircle v-if="isCorrect" class="w-5 h-5" />
              <XCircle v-else class="w-5 h-5" />
              <span class="font-medium">{{ isCorrect ? settingsStore.getPraise() : settingsStore.getEncourage() }}</span>
              <span v-if="hasParentGraded && isCorrect" class="text-xs text-amber-500 ml-1">（家长批改）</span>
            </div>
            <p class="text-sm text-gray-600">{{ currentQuestion.explanation }}</p>

            <!-- 家长批改按钮（仅填空题/闪卡题且系统判错时显示） -->
            <button
              v-if="canParentGrade && !isCorrect"
              @click="openParentGrade"
              class="w-full mt-2 p-2.5 rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-700 text-sm font-medium hover:bg-amber-100 transition-colors flex items-center justify-center gap-1.5"
            >
              <Users class="w-4 h-4" />
              家长批改：孩子的答案其实是对的？
            </button>

            <button @click="nextQuestion" class="btn-primary w-full mt-2">
              {{ currentQuestionIndex < currentQuestions.length - 1 ? '下一题 →' : '查看结果 🎯' }}
            </button>
          </div>
        </div>
      </div>

      <!-- 家长批改弹窗 -->
      <div v-if="showParentGrade" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/40" @click="showParentGrade = false" />
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 space-y-4">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 mb-3">
              <Users class="w-7 h-7 text-amber-600" />
            </div>
            <h3 class="font-title text-lg text-gray-800 mb-1">家长批改</h3>
            <p class="text-sm text-gray-500 mb-3">填空题答案不唯一，家长可根据孩子实际作答情况主观判断</p>
          </div>

          <!-- 孩子的答案 -->
          <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-xs text-gray-400 mb-1">孩子的答案</p>
            <p class="text-base font-medium text-gray-800">{{ selectedAnswer || '(未输入)' }}</p>
          </div>

          <!-- 标准答案 -->
          <div class="p-3 rounded-xl bg-green-50 border border-green-200">
            <p class="text-xs text-green-400 mb-1">参考答案</p>
            <p class="text-base font-medium text-green-700">{{ currentQuestion.answer }}</p>
          </div>

          <!-- 操作按钮 -->
          <div class="flex gap-3 pt-1">
            <button
              @click="parentKeepWrong"
              class="flex-1 p-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              维持错误
            </button>
            <button
              @click="parentMarkCorrect"
              class="flex-1 p-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
            >
              算孩子对的
            </button>
          </div>
        </div>
      </div>

      <!-- 完成阶段 -->
      <div v-if="currentPhase === 'complete'" class="text-center space-y-6 py-8">
        <div class="text-6xl">{{ starLevel >= 2 ? '🎉' : '💪' }}</div>
        <h2 class="font-title text-2xl text-gray-800">{{ starLevel >= 2 ? `${settingsStore.getPraise()}` : `${settingsStore.getEncourage()}` }}</h2>
        <div class="flex justify-center gap-3">
          <Star v-for="i in 3" :key="i" class="w-12 h-12 transition-all duration-300" :class="i <= starLevel ? 'text-star-gold fill-star-gold' : 'text-gray-300'" />
        </div>
        <p class="text-gray-600">正确率：{{ progress?.accuracy }}%</p>
        <div class="flex gap-3">
          <button @click="goBack" class="btn-secondary flex-1">重新练习</button>
          <button @click="router.push(`/courses/${subject}/${grade}/${unitId}`)" class="btn-secondary flex-1">返回单元</button>
          <button @click="router.push('/rewards')" class="btn-primary flex-1">查看奖励</button>
        </div>
      </div>
    </div>

    <!-- 家长侧边栏 -->
    <div v-if="showParentPanel" class="fixed inset-0 z-50 flex">
      <div class="flex-1 bg-black/30" @click="showParentPanel = false" />
      <div class="w-80 bg-white shadow-xl overflow-y-auto p-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-title text-lg">家长指南</h3>
          <button @click="showParentPanel = false" class="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        <div class="space-y-4">
          <div class="p-3 rounded-xl bg-primary-50">
            <div class="flex items-center justify-between mb-1">
              <p class="text-xs text-primary-600 font-medium">教学话术</p>
              <SpeechButton :text="lesson.iDo" :lang="subjectLang" size="sm" />
            </div>
            <p class="text-sm text-gray-700 whitespace-pre-line">{{ lesson.iDo }}</p>
          </div>
          <div class="p-3 rounded-xl bg-secondary-50">
            <p class="text-xs text-secondary-600 font-medium mb-1">操作提示</p>
            <p class="text-sm text-gray-700">{{ lesson.parentTips }}</p>
          </div>
          <div class="p-3 rounded-xl bg-yellow-50">
            <p class="text-xs text-yellow-600 font-medium mb-1">趣味素材</p>
            <p class="text-sm text-gray-700">{{ lesson.funElement }}</p>
          </div>
          <div class="p-3 rounded-xl bg-green-50">
            <p class="text-xs text-green-600 font-medium mb-1">教学法</p>
            <p class="text-sm text-gray-700">{{ lesson.teachingMethod }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
