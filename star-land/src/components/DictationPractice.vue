<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useSpeech } from '@/composables/useSpeech'
import { X, Volume2, CheckCircle, XCircle, ArrowRight, RotateCcw, Star, Headphones, Pencil } from 'lucide-vue-next'

const props = defineProps<{
  subject: 'chinese' | 'english'
  grade: number
  lessonId: string
}>()

const emit = defineEmits<{ close: [] }>()

const { speakChinese, speakEnglish, stop } = useSpeech()

// 听写数据
interface DictationItem {
  id: string
  word: string        // 要听写的词/字/句子
  pinyin?: string     // 拼音（中文）
  hint?: string       // 提示
  difficulty: 1 | 2 | 3
}

// 中文听写词库
const chineseDictationData: DictationItem[] = [
  // 一年级上
  { id: 'cd1', word: '一', pinyin: 'yī', hint: '数字', difficulty: 1 },
  { id: 'cd2', word: '二', pinyin: 'èr', hint: '数字', difficulty: 1 },
  { id: 'cd3', word: '三', pinyin: 'sān', hint: '数字', difficulty: 1 },
  { id: 'cd4', word: '十', pinyin: 'shí', hint: '数字', difficulty: 1 },
  { id: 'cd5', word: '人', pinyin: 'rén', hint: '身体', difficulty: 1 },
  { id: 'cd6', word: '大', pinyin: 'dà', hint: '大小', difficulty: 1 },
  { id: 'cd7', word: '天', pinyin: 'tiān', hint: '天气', difficulty: 1 },
  { id: 'cd8', word: '上', pinyin: 'shàng', hint: '方位', difficulty: 1 },
  { id: 'cd9', word: '下', pinyin: 'xià', hint: '方位', difficulty: 1 },
  { id: 'cd10', word: '日', pinyin: 'rì', hint: '太阳', difficulty: 1 },
  { id: 'cd11', word: '月', pinyin: 'yuè', hint: '月亮', difficulty: 1 },
  { id: 'cd12', word: '水', pinyin: 'shuǐ', hint: '液体', difficulty: 1 },
  { id: 'cd13', word: '火', pinyin: 'huǒ', hint: '燃烧', difficulty: 1 },
  { id: 'cd14', word: '山', pinyin: 'shān', hint: '地形', difficulty: 1 },
  { id: 'cd15', word: '田', pinyin: 'tián', hint: '土地', difficulty: 1 },
  // 一年级下
  { id: 'cd16', word: '花', pinyin: 'huā', hint: '植物', difficulty: 1 },
  { id: 'cd17', word: '草', pinyin: 'cǎo', hint: '植物', difficulty: 1 },
  { id: 'cd18', word: '树', pinyin: 'shù', hint: '植物', difficulty: 1 },
  { id: 'cd19', word: '鸟', pinyin: 'niǎo', hint: '动物', difficulty: 1 },
  { id: 'cd20', word: '鱼', pinyin: 'yú', hint: '动物', difficulty: 1 },
  { id: 'cd21', word: '马', pinyin: 'mǎ', hint: '动物', difficulty: 2 },
  { id: 'cd22', word: '牛', pinyin: 'niú', hint: '动物', difficulty: 2 },
  { id: 'cd23', word: '羊', pinyin: 'yáng', hint: '动物', difficulty: 2 },
  { id: 'cd24', word: '春天', pinyin: 'chūn tiān', hint: '季节', difficulty: 2 },
  { id: 'cd25', word: '秋天', pinyin: 'qiū tiān', hint: '季节', difficulty: 2 },
  { id: 'cd26', word: '太阳', pinyin: 'tài yáng', hint: '天体', difficulty: 2 },
  { id: 'cd27', word: '月亮', pinyin: 'yuè liàng', hint: '天体', difficulty: 2 },
  { id: 'cd28', word: '星星', pinyin: 'xīng xīng', hint: '天体', difficulty: 2 },
  { id: 'cd29', word: '学校', pinyin: 'xué xiào', hint: '地点', difficulty: 2 },
  { id: 'cd30', word: '老师', pinyin: 'lǎo shī', hint: '人物', difficulty: 2 },
  // 二年级
  { id: 'cd31', word: '祖国', pinyin: 'zǔ guó', hint: '国家', difficulty: 2 },
  { id: 'cd32', word: '美丽', pinyin: 'měi lì', hint: '形容词', difficulty: 2 },
  { id: 'cd33', word: '快乐', pinyin: 'kuài lè', hint: '心情', difficulty: 2 },
  { id: 'cd34', word: '朋友', pinyin: 'péng yǒu', hint: '关系', difficulty: 2 },
  { id: 'cd35', word: '梦想', pinyin: 'mèng xiǎng', hint: '愿望', difficulty: 2 },
  // 三年级
  { id: 'cd36', word: '勇敢', pinyin: 'yǒng gǎn', hint: '品质', difficulty: 3 },
  { id: 'cd37', word: '聪明', pinyin: 'cōng míng', hint: '品质', difficulty: 3 },
  { id: 'cd38', word: '认真', pinyin: 'rèn zhēn', hint: '态度', difficulty: 3 },
  { id: 'cd39', word: '努力', pinyin: 'nǔ lì', hint: '态度', difficulty: 3 },
  { id: 'cd40', word: '鲜艳', pinyin: 'xiān yàn', hint: '颜色', difficulty: 3 },
]

// 英文听写词库
const englishDictationData: DictationItem[] = [
  { id: 'ed1', word: 'apple', hint: '水果', difficulty: 1 },
  { id: 'ed2', word: 'cat', hint: '动物', difficulty: 1 },
  { id: 'ed3', word: 'dog', hint: '动物', difficulty: 1 },
  { id: 'ed4', word: 'book', hint: '物品', difficulty: 1 },
  { id: 'ed5', word: 'pen', hint: '文具', difficulty: 1 },
  { id: 'ed6', word: 'red', hint: '颜色', difficulty: 1 },
  { id: 'ed7', word: 'big', hint: '大小', difficulty: 1 },
  { id: 'ed8', word: 'one', hint: '数字', difficulty: 1 },
  { id: 'ed9', word: 'two', hint: '数字', difficulty: 1 },
  { id: 'ed10', word: 'three', hint: '数字', difficulty: 1 },
  { id: 'ed11', word: 'mother', hint: '家人', difficulty: 1 },
  { id: 'ed12', word: 'father', hint: '家人', difficulty: 1 },
  { id: 'ed13', word: 'bird', hint: '动物', difficulty: 1 },
  { id: 'ed14', word: 'fish', hint: '动物', difficulty: 1 },
  { id: 'ed15', word: 'milk', hint: '食物', difficulty: 1 },
  { id: 'ed16', word: 'school', hint: '地点', difficulty: 2 },
  { id: 'ed17', word: 'teacher', hint: '人物', difficulty: 2 },
  { id: 'ed18', word: 'orange', hint: '水果/颜色', difficulty: 2 },
  { id: 'ed19', word: 'yellow', hint: '颜色', difficulty: 2 },
  { id: 'ed20', word: 'please', hint: '礼貌用语', difficulty: 2 },
  { id: 'ed21', word: 'water', hint: '液体', difficulty: 2 },
  { id: 'ed22', word: 'happy', hint: '心情', difficulty: 2 },
  { id: 'ed23', word: 'beautiful', hint: '形容词', difficulty: 3 },
  { id: 'ed24', word: 'elephant', hint: '动物', difficulty: 3 },
  { id: 'ed25', word: 'breakfast', hint: '餐', difficulty: 3 },
  { id: 'ed26', word: 'library', hint: '地点', difficulty: 3 },
  { id: 'ed27', word: 'weather', hint: '天气', difficulty: 3 },
  { id: 'ed28', word: 'hospital', hint: '地点', difficulty: 3 },
  { id: 'ed29', word: 'strawberry', hint: '水果', difficulty: 3 },
  { id: 'ed30', word: 'chocolate', hint: '食物', difficulty: 3 },
]

// 筛选当前年级的听写词
const gradeWords = computed(() => {
  const data = props.subject === 'chinese' ? chineseDictationData : englishDictationData
  const maxDifficulty = props.grade === 1 ? 1 : props.grade === 2 ? 2 : 3
  return data.filter(w => w.difficulty <= maxDifficulty)
})

// 练习状态
const currentIndex = ref(0)
const userInput = ref('')
const showResult = ref(false)
const isCorrect = ref(false)
const score = ref(0)
const totalAnswered = ref(0)
const phase = ref<'ready' | 'listening' | 'writing' | 'result'>('ready')
const wrongAnswers = ref<{ item: DictationItem; userAnswer: string }[]>([])
const practiceWords = ref<DictationItem[]>([])

const currentWord = computed(() => practiceWords.value[currentIndex.value] || null)

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function startPractice() {
  const words = shuffleArray(gradeWords.value).slice(0, 10)
  practiceWords.value = words
  currentIndex.value = 0
  score.value = 0
  totalAnswered.value = 0
  wrongAnswers.value = []
  userInput.value = ''
  showResult.value = false
  phase.value = 'listening'
  nextTick(() => playCurrentWord())
}

function playCurrentWord() {
  if (!currentWord.value) return
  stop()
  if (props.subject === 'chinese') {
    speakChinese(currentWord.value.word, undefined, 'teacher')
  } else {
    speakEnglish(currentWord.value.word)
  }
}

function playAgain() {
  playCurrentWord()
}

function checkAnswer() {
  if (!currentWord.value || !userInput.value.trim()) return
  const userAnswer = userInput.value.trim()
  const correctAnswer = currentWord.value.word

  // 标准化比较
  const normalize = (s: string) => s.replace(/\s+/g, '').toLowerCase()
  const match = normalize(userAnswer) === normalize(correctAnswer)

  isCorrect.value = match
  showResult.value = true
  totalAnswered.value++

  if (match) {
    score.value++
  } else {
    wrongAnswers.value.push({ item: currentWord.value, userAnswer })
  }
}

function nextWord() {
  if (currentIndex.value < practiceWords.value.length - 1) {
    currentIndex.value++
    userInput.value = ''
    showResult.value = false
    phase.value = 'listening'
    nextTick(() => playCurrentWord())
  } else {
    phase.value = 'result'
  }
}

function retryPractice() {
  phase.value = 'ready'
  practiceWords.value = []
  wrongAnswers.value = []
}

const accuracy = computed(() => {
  if (totalAnswered.value === 0) return 0
  return Math.round((score.value / totalAnswered.value) * 100)
})

const starLevel = computed(() => {
  if (accuracy.value >= 90) return 3
  if (accuracy.value >= 70) return 2
  if (accuracy.value >= 50) return 1
  return 0
})

// 监听题目切换，自动朗读
watch(currentIndex, () => {
  if (phase.value === 'listening' && currentWord.value) {
    nextTick(() => playCurrentWord())
  }
})

onMounted(() => {
  if (gradeWords.value.length === 0) {
    emit('close')
  }
})
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
      <!-- 头部 -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2">
          <Headphones class="w-5 h-5" :class="subject === 'chinese' ? 'text-red-500' : 'text-blue-500'" />
          {{ subject === 'chinese' ? '汉字听写' : '单词听写' }}
        </h2>
        <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- 准备阶段 -->
      <div v-if="phase === 'ready'" class="text-center py-8">
        <div class="text-6xl mb-4">{{ subject === 'chinese' ? '✍️' : '🔤' }}</div>
        <h3 class="font-title text-lg text-gray-700 mb-2">
          {{ subject === 'chinese' ? '汉字听写练习' : 'English Dictation' }}
        </h3>
        <p class="text-gray-500 mb-4">
          {{ subject === 'chinese'
            ? '听读音，写出正确的汉字。共10道题，准备好了吗？'
            : 'Listen and spell the word. 10 words total. Are you ready?' }}
        </p>
        <div class="card bg-yellow-50 border border-yellow-200 mb-4 text-left">
          <p class="text-sm text-yellow-800">
            <strong>提示：</strong>
            {{ subject === 'chinese'
              ? '点击喇叭按钮可以重复听。每个词可以听多次。'
              : 'Click the speaker to listen again. You can replay each word.' }}
          </p>
        </div>
        <button @click="startPractice" class="btn-primary text-lg px-8 py-3">
          开始听写
        </button>
      </div>

      <!-- 听写阶段 -->
      <div v-if="phase === 'listening' || phase === 'writing'" class="text-center py-4">
        <!-- 进度 -->
        <div class="text-sm text-gray-400 mb-4">
          第 {{ currentIndex + 1 }} / {{ practiceWords.length }} 题
          <span class="mx-2">|</span>
          已对 {{ score }} 题
        </div>

        <!-- 播放按钮 -->
        <div class="mb-6">
          <button
            @click="playAgain"
            class="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 text-white shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center mx-auto"
          >
            <Volume2 class="w-10 h-10" />
          </button>
          <p class="text-sm text-gray-400 mt-2">点击喇叭听发音，可重复听</p>
          <p v-if="currentWord?.hint" class="text-xs text-gray-400 mt-1">
            提示：{{ currentWord.hint }}
          </p>
        </div>

        <!-- 输入区域 -->
        <div class="mb-4">
          <input
            v-model="userInput"
            :disabled="showResult"
            :placeholder="subject === 'chinese' ? '输入你听到的汉字...' : 'Type the word you hear...'"
            class="w-full max-w-xs mx-auto p-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 outline-none text-2xl text-center"
            :class="subject === 'chinese' ? 'font-kai' : ''"
            @keyup.enter="checkAnswer"
          />
        </div>

        <button
          v-if="!showResult"
          @click="checkAnswer"
          :disabled="!userInput.trim()"
          class="btn-primary px-8 py-3"
        >
          确认
        </button>

        <!-- 结果 -->
        <div v-if="showResult" class="mt-4 space-y-3">
          <div class="flex items-center justify-center gap-2" :class="isCorrect ? 'text-green-600' : 'text-red-600'">
            <CheckCircle v-if="isCorrect" class="w-6 h-6" />
            <XCircle v-else class="w-6 h-6" />
            <span class="font-medium text-lg">{{ isCorrect ? '正确！' : '写错了' }}</span>
          </div>

          <div v-if="!isCorrect" class="p-3 rounded-xl bg-red-50">
            <p class="text-sm text-gray-600">你的答案：<span class="text-red-500">{{ userInput }}</span></p>
            <p class="text-sm text-gray-600">
              正确答案：<span class="text-green-600 font-bold text-xl">{{ currentWord?.word }}</span>
              <span v-if="currentWord?.pinyin" class="text-gray-400 ml-2">({{ currentWord.pinyin }})</span>
            </p>
          </div>

          <button @click="nextWord" class="btn-primary w-full">
            {{ currentIndex < practiceWords.length - 1 ? '下一题 →' : '查看结果' }}
          </button>
        </div>
      </div>

      <!-- 结果阶段 -->
      <div v-if="phase === 'result'" class="text-center py-4">
        <div class="text-6xl mb-4">
          {{ starLevel === 3 ? '🏆' : starLevel === 2 ? '🥈' : starLevel === 1 ? '🥉' : '💪' }}
        </div>
        <h3 class="font-title text-xl text-gray-800 mb-2">听写完成！</h3>

        <div class="grid grid-cols-3 gap-3 mb-4">
          <div class="card bg-green-50">
            <div class="text-2xl font-bold text-green-600">{{ score }}</div>
            <div class="text-xs text-gray-500">正确</div>
          </div>
          <div class="card bg-red-50">
            <div class="text-2xl font-bold text-red-600">{{ totalAnswered - score }}</div>
            <div class="text-xs text-gray-500">错误</div>
          </div>
          <div class="card bg-blue-50">
            <div class="text-2xl font-bold text-blue-600">{{ accuracy }}%</div>
            <div class="text-xs text-gray-500">正确率</div>
          </div>
        </div>

        <div class="flex justify-center gap-2 mb-4">
          <Star v-for="n in 3" :key="n" :class="n <= starLevel ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" class="w-8 h-8" />
        </div>

        <!-- 错题回顾 -->
        <div v-if="wrongAnswers.length > 0" class="text-left mb-4">
          <h4 class="font-title text-sm text-gray-700 mb-2">错题回顾</h4>
          <div class="max-h-40 overflow-y-auto space-y-2">
            <div v-for="(wa, i) in wrongAnswers" :key="i" class="card bg-red-50 p-3">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-sm text-red-500">你的答案：{{ wa.userAnswer }}</p>
                  <p class="text-sm text-green-600">
                    正确答案：{{ wa.item.word }}
                    <span v-if="wa.item.pinyin" class="text-gray-400">({{ wa.item.pinyin }})</span>
                  </p>
                </div>
                <button
                  @click="subject === 'chinese' ? speakChinese(wa.item.word, undefined, 'teacher') : speakEnglish(wa.item.word)"
                  class="p-2 rounded-lg bg-white hover:bg-gray-100"
                >
                  <Volume2 class="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-2">
          <button @click="retryPractice" class="btn-secondary flex items-center gap-1">
            <RotateCcw class="w-4 h-4" /> 再来一次
          </button>
          <button @click="emit('close')" class="btn-primary flex-1">完成</button>
        </div>
      </div>
    </div>
  </div>
</template>