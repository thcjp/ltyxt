<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSpeech } from '@/composables/useSpeech'
import { X, Volume2, CheckCircle, XCircle, RotateCcw, Star, Hash } from 'lucide-vue-next'

const props = defineProps<{ grade: number }>()
const emit = defineEmits<{ close: [] }>()
const { speakChinese } = useSpeech()

const CHINESE_DIGITS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const CHINESE_PLACE = ['', '十', '百', '千']

function numberToChinese(num: number): string {
  if (num === 0) return '零'
  const str = String(num)
  const len = str.length
  let result = ''
  let hasZero = false
  for (let i = 0; i < len; i++) {
    const digit = parseInt(str[i])
    const pos = len - i - 1
    if (digit === 0) { hasZero = true }
    else {
      if (hasZero && result.length > 0) result += '零'
      hasZero = false
      result += CHINESE_DIGITS[digit]
      if (pos === 4 || pos === 8) { result += pos === 8 ? '亿' : '万' }
      else { result += CHINESE_PLACE[pos % 4] }
    }
  }
  if (result.startsWith('一十')) result = result.substring(1)
  return result
}

const currentIndex = ref(0)
const userInput = ref('')
const showResult = ref(false)
const isCorrect = ref(false)
const score = ref(0)
const totalAnswered = ref(0)
const phase = ref<'ready' | 'playing' | 'result'>('ready')
const wrongAnswers = ref<{ number: number; correct: string; user: string }[]>([])
const questions = ref<{ number: number; chinese: string }[]>([])

function generateQuestions() {
  const result: { number: number; chinese: string }[] = []
  const ranges: [number, number][] = props.grade === 1
    ? [[1, 99], [100, 999]]
    : props.grade === 2
      ? [[100, 9999], [10000, 99999]]
      : [[1000, 999999], [1000000, 99999999]]
  for (const [min, max] of ranges) {
    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min
      result.push({ number: num, chinese: numberToChinese(num) })
    }
  }
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const currentQuestion = computed(() => questions.value[currentIndex.value] || null)

function startGame() {
  questions.value = generateQuestions()
  currentIndex.value = 0; score.value = 0; totalAnswered.value = 0
  wrongAnswers.value = []; userInput.value = ''; showResult.value = false
  phase.value = 'playing'
}

function readNumber() { if (currentQuestion.value) speakChinese(currentQuestion.value.chinese, undefined, 'teacher') }

function checkAnswer() {
  if (!currentQuestion.value || !userInput.value.trim()) return
  const userAnswer = userInput.value.trim()
  const normalize = (s: string) => s.replace(/\s+/g, '').replace(/[两]/g, '二')
  isCorrect.value = normalize(userAnswer) === normalize(currentQuestion.value.chinese)
  showResult.value = true; totalAnswered.value++
  if (isCorrect.value) score.value++
  else wrongAnswers.value.push({ number: currentQuestion.value.number, correct: currentQuestion.value.chinese, user: userAnswer })
}

function nextQuestion() {
  if (currentIndex.value < questions.value.length - 1) { currentIndex.value++; userInput.value = ''; showResult.value = false }
  else phase.value = 'result'
}

function retry() { phase.value = 'ready' }
const accuracy = computed(() => totalAnswered.value > 0 ? Math.round((score.value / totalAnswered.value) * 100) : 0)
const starLevel = computed(() => accuracy.value >= 90 ? 3 : accuracy.value >= 70 ? 2 : accuracy.value >= 50 ? 1 : 0)
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2"><Hash class="w-5 h-5 text-orange-500" />大数读法</h2>
        <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><X class="w-5 h-5" /></button>
      </div>
      <div v-if="phase === 'ready'" class="text-center py-8">
        <div class="text-6xl mb-4">🔢</div>
        <h3 class="font-title text-lg text-gray-700 mb-2">大数读法练习</h3>
        <p class="text-gray-500 mb-4">听数字的读音，写出对应的中文读法。共10道题。</p>
        <div class="card bg-orange-50 border border-orange-200 mb-4 text-left"><p class="text-sm text-orange-800"><strong>示例：</strong>听到"三百二十五"→ 写出"三百二十五"</p></div>
        <button @click="startGame" class="btn-primary text-lg px-8 py-3">开始练习</button>
      </div>
      <div v-if="phase === 'playing' && currentQuestion" class="text-center py-4">
        <div class="text-sm text-gray-400 mb-4">第 {{ currentIndex + 1 }} / {{ questions.length }} 题 | 已对 {{ score }} 题</div>
        <div class="mb-6">
          <div class="text-5xl font-bold text-orange-500 mb-3">{{ currentQuestion.number }}</div>
          <button @click="readNumber" class="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center mx-auto"><Volume2 class="w-8 h-8" /></button>
          <p class="text-sm text-gray-400 mt-2">点击喇叭听读音</p>
        </div>
        <div class="mb-4"><input v-model="userInput" :disabled="showResult" placeholder="输入中文读法..." class="w-full max-w-sm mx-auto p-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 outline-none text-xl text-center" @keyup.enter="checkAnswer" /></div>
        <button v-if="!showResult" @click="checkAnswer" :disabled="!userInput.trim()" class="btn-primary px-8 py-3">确认</button>
        <div v-if="showResult" class="mt-4 space-y-3">
          <div class="flex items-center justify-center gap-2" :class="isCorrect ? 'text-green-600' : 'text-red-600'"><CheckCircle v-if="isCorrect" class="w-6 h-6" /><XCircle v-else class="w-6 h-6" /><span class="font-medium text-lg">{{ isCorrect ? '正确！' : '写错了' }}</span></div>
          <div v-if="!isCorrect" class="p-3 rounded-xl bg-red-50"><p class="text-sm text-gray-600">正确答案：<span class="text-green-600 font-bold text-xl">{{ currentQuestion.chinese }}</span></p><p class="text-sm text-gray-600">数字：{{ currentQuestion.number }}</p></div>
          <button @click="nextQuestion" class="btn-primary w-full">{{ currentIndex < questions.length - 1 ? '下一题 →' : '查看结果' }}</button>
        </div>
      </div>
      <div v-if="phase === 'result'" class="text-center py-4">
        <div class="text-6xl mb-4">{{ starLevel === 3 ? '🏆' : starLevel === 2 ? '🥈' : starLevel === 1 ? '🥉' : '💪' }}</div>
        <h3 class="font-title text-xl text-gray-800 mb-2">练习完成！</h3>
        <div class="grid grid-cols-3 gap-3 mb-4"><div class="card bg-green-50"><div class="text-2xl font-bold text-green-600">{{ score }}</div><div class="text-xs text-gray-500">正确</div></div><div class="card bg-red-50"><div class="text-2xl font-bold text-red-600">{{ totalAnswered - score }}</div><div class="text-xs text-gray-500">错误</div></div><div class="card bg-blue-50"><div class="text-2xl font-bold text-blue-600">{{ accuracy }}%</div><div class="text-xs text-gray-500">正确率</div></div></div>
        <div class="flex justify-center gap-2 mb-4"><Star v-for="n in 3" :key="n" :class="n <= starLevel ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" class="w-8 h-8" /></div>
        <div v-if="wrongAnswers.length > 0" class="text-left mb-4"><h4 class="font-title text-sm text-gray-700 mb-2">错题回顾</h4><div class="max-h-40 overflow-y-auto space-y-2"><div v-for="(wa, i) in wrongAnswers" :key="i" class="card bg-red-50 p-3"><p class="text-sm"><span class="text-gray-500">{{ wa.number }}</span> → 正确：<span class="text-green-600">{{ wa.correct }}</span></p><p class="text-sm text-red-500">你的答案：{{ wa.user }}</p></div></div></div>
        <div class="flex gap-2"><button @click="retry" class="btn-secondary flex items-center gap-1"><RotateCcw class="w-4 h-4" /> 再来一次</button><button @click="emit('close')" class="btn-primary flex-1">完成</button></div>
      </div>
    </div>
  </div>
</template>