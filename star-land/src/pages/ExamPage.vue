<script setup lang="ts">
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getExam, type Exam, type ExamQuestion } from '@/data/exams'
import { useStudyStore } from '@/stores/study'
import { useRewardSystem } from '@/composables/useRewardSystem'
import { useSpeech } from '@/composables/useSpeech'
import { gsap } from 'gsap'
import { ArrowLeft, CheckCircle, XCircle, Star, Award, Clock, Home, RotateCcw } from 'lucide-vue-next'
import SpeechButton from '@/components/animation/SpeechButton.vue'

const route = useRoute()
const router = useRouter()
const studyStore = useStudyStore()
const { rewardForExam } = useRewardSystem()
const { speakWithRole } = useSpeech()

const subject = computed(() => route.params.subject as string)
const grade = computed(() => Number(route.params.grade))
const examType = computed(() => route.params.type as 'midterm' | 'final')

const exam = computed<Exam | null>(() => {
  try {
    return getExam(subject.value as any, grade.value, examType.value)
  } catch {
    return null
  }
})

// 考试状态
const phase = ref<'intro' | 'testing' | 'result'>('intro')
const currentIndex = ref(0)
const selectedAnswer = ref('')
const showResult = ref(false)
const isCorrect = ref(false)
const correctCount = ref(0)
const totalAnswered = ref(0)
const wrongAnswers = ref<{ question: ExamQuestion; userAnswer: string }[]>([])

// 选择题选项打乱
const shuffledOptions = ref<string[]>([])

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const currentQuestion = computed(() => exam.value?.questions[currentIndex.value] || null)
const subjectLang = computed(() => subject.value === 'english' ? 'en' : 'zh')

// 答案检查（简化版，与 LessonPage 类似）
function checkAnswer(userAnswer: string, correctAnswer: string, acceptable?: string[]): boolean {
  const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')
  const normUser = normalize(userAnswer)
  const normCorrect = normalize(correctAnswer)
  if (normUser === normCorrect) return true
  if (acceptable?.some(a => normalize(a) === normUser)) return true
  return false
}

function selectAnswer(answer: string) {
  if (showResult.value || !currentQuestion.value) return
  selectedAnswer.value = answer
  isCorrect.value = checkAnswer(answer, currentQuestion.value.answer, currentQuestion.value.acceptableAnswers)
  showResult.value = true
  totalAnswered.value++

  if (isCorrect.value) {
    correctCount.value++
    nextTick(() => {
      const el = document.querySelector('.exam-card')
      if (el) gsap.to(el, { scale: 1.03, duration: 0.15, yoyo: true, repeat: 1, force3D: true })
    })
  } else {
    wrongAnswers.value.push({ question: currentQuestion.value, userAnswer: answer })
    nextTick(() => {
      const el = document.querySelector('.exam-card')
      if (el) gsap.to(el, { x: -6, duration: 0.06, yoyo: true, repeat: 4, force3D: true })
    })
  }
}

function nextQuestion() {
  showResult.value = false
  selectedAnswer.value = ''
  if (currentIndex.value < (exam.value?.questions.length || 0) - 1) {
    currentIndex.value++
  } else {
    finishExam()
  }
}

function finishExam() {
  const accuracy = totalAnswered.value > 0 ? Math.round((correctCount.value / totalAnswered.value) * 100) : 0
  // 记录考试结果
  studyStore.addUnitTestResult({
    subject: subject.value as any,
    grade: grade.value,
    unitId: `${examType.value}-exam`,
    totalQuestions: totalAnswered.value,
    correctCount: correctCount.value,
    accuracy,
    starLevel: accuracy >= 95 ? 3 : accuracy >= 80 ? 2 : accuracy >= 60 ? 1 : 0,
    wrongQuestionIds: [],
    completedAt: new Date().toISOString(),
  })
  // 奖励
  rewardForExam(accuracy, examType.value)
  phase.value = 'result'
}

function startExam() {
  phase.value = 'testing'
  currentIndex.value = 0
  correctCount.value = 0
  totalAnswered.value = 0
  wrongAnswers.value = []
  selectedAnswer.value = ''
  showResult.value = false
  isCorrect.value = false
  // 初始化第一题的选项打乱
  nextTick(() => onQuestionChange())
}

function retryExam() {
  phase.value = 'intro'
  currentIndex.value = 0
  correctCount.value = 0
  totalAnswered.value = 0
  wrongAnswers.value = []
  selectedAnswer.value = ''
  showResult.value = false
  isCorrect.value = false
}

// 监听题目切换，打乱选项
function onQuestionChange() {
  const q = exam.value?.questions[currentIndex.value]
  if (q && q.type === 'choice' && q.options && q.options.length > 1) {
    shuffledOptions.value = shuffleArray(q.options)
  } else {
    shuffledOptions.value = []
  }
  selectedAnswer.value = ''
  showResult.value = false
  isCorrect.value = false
}

// 跳过当前题（用于拖拽题等复杂题型回退）
function skipQuestion() {
  if (showResult.value) return
  showResult.value = true
  isCorrect.value = false
  totalAnswered.value++
  if (currentQuestion.value) {
    wrongAnswers.value.push({ question: currentQuestion.value, userAnswer: '（跳过）' })
  }
}

watch(currentIndex, onQuestionChange)

onMounted(() => {
  if (exam.value) {
    onQuestionChange()
  }
})

const accuracy = computed(() => totalAnswered.value > 0 ? Math.round((correctCount.value / totalAnswered.value) * 100) : 0)
const starLevel = computed(() => accuracy.value >= 95 ? 3 : accuracy.value >= 80 ? 2 : accuracy.value >= 60 ? 1 : 0)
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <!-- 顶部导航 -->
    <div class="flex items-center justify-between mb-4">
      <button @click="router.back()" class="flex items-center gap-1 text-gray-600 hover:text-gray-800">
        <ArrowLeft class="w-5 h-5" /> 返回
      </button>
      <button @click="router.push('/')" class="text-gray-400 hover:text-gray-600">
        <Home class="w-5 h-5" />
      </button>
    </div>

    <!-- 考试介绍页 -->
    <div v-if="phase === 'intro' && exam && exam.questions.length > 0" class="max-w-2xl mx-auto">
      <div class="card text-center py-8">
        <div class="text-6xl mb-4">{{ examType === 'midterm' ? '📝' : '🎓' }}</div>
        <h1 class="font-title text-2xl text-gray-800 mb-2">{{ exam.title }}</h1>
        <p class="text-gray-500 mb-6">{{ exam.description }}</p>

        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="card bg-blue-50">
            <div class="text-2xl font-bold text-blue-600">{{ exam.questions.length }}</div>
            <div class="text-xs text-gray-500">题目数量</div>
          </div>
          <div class="card bg-green-50">
            <div class="text-2xl font-bold text-green-600">{{ exam.duration }}</div>
            <div class="text-xs text-gray-500">建议时长(分钟)</div>
          </div>
          <div class="card bg-purple-50">
            <div class="text-2xl font-bold text-purple-600">{{ exam.questions.filter(q => q.sourceSubject !== subject).length }}</div>
            <div class="text-xs text-gray-500">跨学科题</div>
          </div>
        </div>

        <div class="card bg-yellow-50 border border-yellow-200 mb-6 text-left">
          <p class="text-sm text-yellow-800">
            <strong>考试说明：</strong>
            本次考试共 {{ exam.questions.length }} 道题，包含本学科各单元知识点和跨学科应用题。
            每答完一题立即显示对错，完成后获得星星奖励。正确率≥95%得3星，≥80%得2星，≥60%得1星。
          </p>
        </div>

        <button @click="startExam" class="btn-primary text-lg px-8 py-3">
          开始考试
        </button>
      </div>
    </div>

    <!-- 考试答题页 -->
    <div v-if="phase === 'testing' && exam && currentQuestion" class="max-w-2xl mx-auto">
      <!-- 进度条 -->
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm text-gray-500">
          第 {{ currentIndex + 1 }} / {{ exam.questions.length }} 题
        </span>
        <span class="text-sm text-gray-500">
          已答对 {{ correctCount }} 题
        </span>
      </div>
      <div class="h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
        <div class="h-full bg-primary-500 rounded-full transition-all duration-300" :style="{ width: ((currentIndex + 1) / exam.questions.length * 100) + '%' }" />
      </div>

      <!-- 题目卡片 -->
      <div class="card exam-card">
        <div class="flex items-center justify-between mb-3">
          <span v-if="currentQuestion.sourceSubject !== subject" class="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">跨学科</span>
          <span v-else class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">本学科</span>
          <SpeechButton :text="currentQuestion.question" :lang="subjectLang" size="sm" />
        </div>
        <p class="font-medium text-gray-800 mb-4">{{ currentQuestion.question }}</p>

        <!-- 选择题 -->
        <div v-if="currentQuestion.type === 'choice'" class="space-y-2">
          <button
            v-for="(option, oi) in shuffledOptions"
            :key="option"
            @click="selectAnswer(option)"
            class="w-full p-3 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-sm"
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
          <input
            v-model="selectedAnswer"
            :disabled="showResult"
            placeholder="输入你的答案..."
            class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 outline-none text-lg"
            @keyup.enter="selectAnswer(selectedAnswer)"
          />
          <button v-if="!showResult" @click="selectAnswer(selectedAnswer)" class="btn-primary w-full">确认答案</button>
        </div>

        <!-- 闪卡题 -->
        <div v-if="currentQuestion.type === 'flashcard'" class="text-center">
          <div class="text-2xl font-bold text-gray-700 mb-2">{{ currentQuestion.question }}</div>
          <button v-if="!showResult" @click="selectAnswer(currentQuestion.answer)" class="btn-secondary">显示答案</button>
        </div>

        <!-- 拖拽题（简化：显示为判断题，跳过直接判错） -->
        <div v-if="currentQuestion.type === 'drag'" class="text-center">
          <p class="text-sm text-gray-500 mb-3">此题为拖拽题，在考试中暂不支持操作</p>
          <button v-if="!showResult" @click="skipQuestion" class="btn-secondary">跳过（计为错题）</button>
        </div>

        <!-- 跳过按钮（所有题型通用兜底） -->
        <div v-if="!showResult" class="mt-3 text-center">
          <button @click="skipQuestion" class="text-xs text-gray-400 hover:text-gray-600 underline">跳过此题</button>
        </div>

        <!-- 结果反馈 -->
        <div v-if="showResult" class="mt-4 p-3 rounded-xl" :class="isCorrect ? 'bg-green-50' : 'bg-red-50'">
          <div class="flex items-center gap-2 mb-2">
            <CheckCircle v-if="isCorrect" class="w-5 h-5 text-green-500" />
            <XCircle v-else class="w-5 h-5 text-red-500" />
            <span :class="isCorrect ? 'text-green-700' : 'text-red-700'" class="font-medium">
              {{ isCorrect ? '回答正确！' : '答错了' }}
            </span>
          </div>
          <p v-if="!isCorrect" class="text-sm text-gray-600 mb-1">正确答案：{{ currentQuestion.answer }}</p>
          <p class="text-sm text-gray-600">{{ currentQuestion.explanation }}</p>
        </div>

        <!-- 下一题按钮 -->
        <button v-if="showResult" @click="nextQuestion" class="btn-primary w-full mt-4">
          {{ currentIndex < exam.questions.length - 1 ? '下一题 →' : '完成考试 🎯' }}
        </button>
      </div>
    </div>

    <!-- 考试结果页 -->
    <div v-if="phase === 'result' && exam" class="max-w-2xl mx-auto">
      <div class="card text-center py-8">
        <div class="text-6xl mb-4">
          {{ starLevel === 3 ? '🏆' : starLevel === 2 ? '🥈' : starLevel === 1 ? '🥉' : '💪' }}
        </div>
        <h1 class="font-title text-2xl text-gray-800 mb-2">考试完成！</h1>
        <p class="text-gray-500 mb-6">{{ exam.title }}</p>

        <!-- 成绩 -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="card bg-blue-50">
            <div class="text-3xl font-bold text-blue-600">{{ correctCount }}</div>
            <div class="text-xs text-gray-500">答对</div>
          </div>
          <div class="card bg-red-50">
            <div class="text-3xl font-bold text-red-600">{{ totalAnswered - correctCount }}</div>
            <div class="text-xs text-gray-500">答错</div>
          </div>
          <div class="card bg-green-50">
            <div class="text-3xl font-bold text-green-600">{{ accuracy }}%</div>
            <div class="text-xs text-gray-500">正确率</div>
          </div>
        </div>

        <!-- 星级 -->
        <div class="flex justify-center gap-2 mb-6">
          <Star v-for="n in 3" :key="n" :class="n <= starLevel ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" class="w-8 h-8" />
        </div>

        <!-- 错题回顾 -->
        <div v-if="wrongAnswers.length > 0" class="text-left mb-6">
          <h3 class="font-title text-base text-gray-700 mb-2">错题回顾（{{ wrongAnswers.length }}题）</h3>
          <div class="max-h-60 overflow-y-auto space-y-2">
            <div v-for="(wa, i) in wrongAnswers" :key="i" class="card bg-red-50 p-3">
              <p class="text-sm text-gray-700 mb-1">{{ wa.question.question }}</p>
              <p class="text-xs text-red-500">你的答案：{{ wa.userAnswer }}</p>
              <p class="text-xs text-green-600">正确答案：{{ wa.question.answer }}</p>
            </div>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="flex gap-2 justify-center">
          <button @click="retryExam" class="btn-secondary flex items-center gap-1">
            <RotateCcw class="w-4 h-4" /> 再考一次
          </button>
          <button @click="router.push('/')" class="btn-primary flex items-center gap-1">
            <Home class="w-4 h-4" /> 返回首页
          </button>
        </div>
      </div>
    </div>

    <!-- 无考试数据或题目为空 -->
    <div v-if="!exam || exam.questions.length === 0" class="text-center py-20">
      <p class="text-gray-400">该年级的考试内容正在建设中</p>
      <p class="text-sm text-gray-400 mt-2">目前支持1-3年级的期中期末考试</p>
      <button @click="router.back()" class="btn-primary mt-4">返回</button>
    </div>
  </div>
</template>
