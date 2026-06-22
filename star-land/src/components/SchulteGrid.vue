<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { X, RotateCcw, Star, Timer, Zap } from 'lucide-vue-next'

const props = defineProps<{ grade: number }>()
const emit = defineEmits<{ close: [] }>()

const gridSize = computed(() => props.grade === 1 ? 9 : props.grade === 2 ? 16 : 25)
const gridDim = computed(() => Math.sqrt(gridSize.value))
const phase = ref<'ready' | 'playing' | 'result'>('ready')
const numbers = ref<number[]>([])
const currentTarget = ref(1)
const score = ref(0)
const totalTapped = ref(0)
const mistakes = ref(0)
const startTime = ref(0)
const elapsedTime = ref(0)
const bestTime = ref<number | null>(null)
const wrongTaps = ref<number[]>([])
let timerInterval: ReturnType<typeof setInterval> | null = null

function generateNumbers() {
  const arr: number[] = []
  for (let i = 1; i <= gridSize.value; i++) arr.push(i)
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]] }
  return arr
}

function startGame() {
  numbers.value = generateNumbers(); currentTarget.value = 1; score.value = 0; totalTapped.value = 0; mistakes.value = 0; wrongTaps.value = []; elapsedTime.value = 0; startTime.value = Date.now(); phase.value = 'playing'
  timerInterval = setInterval(() => { elapsedTime.value = Math.round((Date.now() - startTime.value) / 1000) }, 100)
}

function tapNumber(num: number) {
  if (phase.value !== 'playing') return
  totalTapped.value++
  if (num === currentTarget.value) {
    score.value++
    if (num >= gridSize.value) {
      clearInterval(timerInterval!); timerInterval = null
      const finalTime = Math.round((Date.now() - startTime.value) / 1000); elapsedTime.value = finalTime
      if (bestTime.value === null || finalTime < bestTime.value) bestTime.value = finalTime
      phase.value = 'result'
    } else { currentTarget.value++ }
  } else { mistakes.value++; wrongTaps.value.push(num); setTimeout(() => { wrongTaps.value = wrongTaps.value.filter(n => n !== num) }, 500) }
}

function retry() { clearInterval(timerInterval!); timerInterval = null; phase.value = 'ready' }
const accuracy = computed(() => totalTapped.value > 0 ? Math.round((score.value / totalTapped.value) * 100) : 100)
const starLevel = computed(() => {
  const time = elapsedTime.value; const size = gridSize.value
  if (size === 9) return time <= 15 ? 3 : time <= 30 ? 2 : time <= 60 ? 1 : 0
  if (size === 16) return time <= 30 ? 3 : time <= 60 ? 2 : time <= 90 ? 1 : 0
  return time <= 60 ? 3 : time <= 120 ? 2 : time <= 180 ? 1 : 0
})
function formatTime(seconds: number): string { const m = Math.floor(seconds / 60); const s = seconds % 60; return `${m}:${s.toString().padStart(2, '0')}` }
onUnmounted(() => { clearInterval(timerInterval!) })
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4"><h2 class="font-title text-xl text-gray-800 flex items-center gap-2"><Zap class="w-5 h-5 text-yellow-500" />舒尔特方格</h2><button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><X class="w-5 h-5" /></button></div>
      <div v-if="phase === 'ready'" class="text-center py-8">
        <div class="text-6xl mb-4">🧩</div><h3 class="font-title text-lg text-gray-700 mb-2">舒尔特方格训练</h3><p class="text-gray-500 mb-4">按顺序从1点到{{ gridSize }}，越快越好！这是训练注意力的经典方法。</p>
        <div class="card bg-yellow-50 border border-yellow-200 mb-4 text-left"><p class="text-sm text-yellow-800"><strong>规则：</strong>方格中有打乱的数字 {{ gridSize === 9 ? '1-9' : gridSize === 16 ? '1-16' : '1-25' }}，请按从小到大的顺序依次点击。用时越短，注意力越集中！</p></div>
        <button @click="startGame" class="btn-primary text-lg px-8 py-3">开始挑战</button>
      </div>
      <div v-if="phase === 'playing'" class="text-center py-4">
        <div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2 text-sm text-gray-500"><Timer class="w-4 h-4" />{{ formatTime(elapsedTime) }}</div><div class="text-sm text-gray-500">目标：<span class="text-primary-500 font-bold text-lg">{{ currentTarget }}</span></div><div class="text-sm text-gray-500">错误：{{ mistakes }}</div></div>
        <div class="grid gap-2 mx-auto" :style="{ gridTemplateColumns: `repeat(${gridDim}, 1fr)`, maxWidth: gridDim === 5 ? '320px' : gridDim === 4 ? '280px' : '240px' }">
          <button v-for="num in numbers" :key="num" @click="tapNumber(num)" class="aspect-square rounded-xl text-lg font-bold transition-all duration-200 active:scale-95" :class="{'bg-green-500 text-white': num < currentTarget, 'bg-primary-500 text-white shadow-lg ring-2 ring-primary-300': num === currentTarget, 'bg-gray-100 text-gray-700 hover:bg-gray-200': num > currentTarget, 'bg-red-500 text-white animate-pulse': wrongTaps.includes(num)}">{{ num }}</button>
        </div>
        <p class="text-xs text-gray-400 mt-4">按顺序点击：1 → 2 → 3 → ... → {{ gridSize }}</p>
      </div>
      <div v-if="phase === 'result'" class="text-center py-4">
        <div class="text-6xl mb-4">{{ starLevel >= 3 ? '🏆' : starLevel >= 2 ? '🥈' : starLevel >= 1 ? '🥉' : '💪' }}</div><h3 class="font-title text-xl text-gray-800 mb-2">挑战完成！</h3>
        <div class="grid grid-cols-3 gap-3 mb-4"><div class="card bg-blue-50"><div class="text-2xl font-bold text-blue-600">{{ formatTime(elapsedTime) }}</div><div class="text-xs text-gray-500">用时</div></div><div class="card bg-red-50"><div class="text-2xl font-bold text-red-600">{{ mistakes }}</div><div class="text-xs text-gray-500">错误次数</div></div><div class="card bg-green-50"><div class="text-2xl font-bold text-green-600">{{ accuracy }}%</div><div class="text-xs text-gray-500">准确率</div></div></div>
        <div v-if="bestTime !== null" class="text-sm text-gray-500 mb-4">最佳记录：{{ formatTime(bestTime) }}</div>
        <div class="flex justify-center gap-2 mb-4"><Star v-for="n in 3" :key="n" :class="n <= starLevel ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" class="w-8 h-8" /></div>
        <div class="flex gap-2"><button @click="retry" class="btn-secondary flex items-center gap-1"><RotateCcw class="w-4 h-4" /> 再来一次</button><button @click="emit('close')" class="btn-primary flex-1">完成</button></div>
      </div>
    </div>
  </div>
</template>