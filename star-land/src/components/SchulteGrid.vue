<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { X, RotateCcw, Star, Timer, Zap, Trophy, Lock, ChevronRight } from 'lucide-vue-next'

const props = defineProps<{ grade: number }>()
const emit = defineEmits<{ close: [] }>()

// 闯关配置：从易到难，逐步解锁
interface LevelConfig {
  level: number
  gridSize: number
  title: string
  desc: string
  reverse: boolean  // 是否倒序（从大到小）
}

const allLevels: LevelConfig[] = [
  { level: 1, gridSize: 9, title: '初出茅庐', desc: '3×3 挑战', reverse: false },
  { level: 2, gridSize: 16, title: '小试牛刀', desc: '4×4 挑战', reverse: false },
  { level: 3, gridSize: 25, title: '渐入佳境', desc: '5×5 挑战', reverse: false },
  { level: 4, gridSize: 9, title: '逆向思维', desc: '3×3 挑战', reverse: true },
  { level: 5, gridSize: 16, title: '高手过招', desc: '4×4 挑战', reverse: true },
  { level: 6, gridSize: 25, title: '巅峰对决', desc: '5×5 挑战', reverse: true },
]

// 根据年级决定起始关卡（高年级跳过太简单的）
const startLevelIdx = computed(() => props.grade <= 2 ? 0 : props.grade <= 4 ? 1 : 2)
const unlockedLevel = ref(startLevelIdx.value)

const phase = ref<'menu' | 'playing' | 'result'>('menu')
const currentLevelIdx = ref(0)
const numbers = ref<number[]>([])
const currentTarget = ref(1)
const score = ref(0)
const totalTapped = ref(0)
const mistakes = ref(0)
const startTime = ref(0)
const elapsedTime = ref(0)
const wrongTaps = ref<number[]>([])
let timerInterval: ReturnType<typeof setInterval> | null = null

const currentConfig = computed(() => allLevels[currentLevelIdx.value])
const gridDim = computed(() => Math.sqrt(currentConfig.value?.gridSize || 9))

function generateNumbers(count: number, reverse: boolean): number[] {
  const arr: number[] = []
  for (let i = 1; i <= count; i++) arr.push(i)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function startLevel(idx: number) {
  currentLevelIdx.value = idx
  const config = allLevels[idx]
  numbers.value = generateNumbers(config.gridSize, config.reverse)
  currentTarget.value = config.reverse ? config.gridSize : 1
  score.value = 0
  totalTapped.value = 0
  mistakes.value = 0
  wrongTaps.value = []
  elapsedTime.value = 0
  startTime.value = Date.now()
  phase.value = 'playing'
  timerInterval = setInterval(() => {
    elapsedTime.value = Math.round((Date.now() - startTime.value) / 1000)
  }, 100)
}

function tapNumber(num: number) {
  if (phase.value !== 'playing') return
  totalTapped.value++
  if (num === currentTarget.value) {
    score.value++
    const config = currentConfig.value
    const isLast = config.reverse
      ? num <= 1
      : num >= config.gridSize
    if (isLast) {
      clearInterval(timerInterval!)
      timerInterval = null
      const finalTime = Math.round((Date.now() - startTime.value) / 1000)
      elapsedTime.value = finalTime
      // 解锁下一关
      if (currentLevelIdx.value + 1 < allLevels.length && currentLevelIdx.value + 1 >= unlockedLevel.value) {
        unlockedLevel.value = currentLevelIdx.value + 1
      }
      phase.value = 'result'
    } else {
      currentTarget.value += currentConfig.value.reverse ? -1 : 1
    }
  } else {
    mistakes.value++
    wrongTaps.value.push(num)
    setTimeout(() => {
      wrongTaps.value = wrongTaps.value.filter(n => n !== num)
    }, 500)
  }
}

function retry() {
  clearInterval(timerInterval!)
  timerInterval = null
  phase.value = 'menu'
}

function nextLevel() {
  if (currentLevelIdx.value + 1 < allLevels.length) {
    startLevel(currentLevelIdx.value + 1)
  } else {
    phase.value = 'menu'
  }
}

const accuracy = computed(() => totalTapped.value > 0 ? Math.round((score.value / totalTapped.value) * 100) : 100)
const starLevel = computed(() => {
  const time = elapsedTime.value
  const size = currentConfig.value?.gridSize || 9
  if (size === 9) return time <= 10 ? 3 : time <= 20 ? 2 : time <= 40 ? 1 : 0
  if (size === 16) return time <= 25 ? 3 : time <= 45 ? 2 : time <= 80 ? 1 : 0
  return time <= 50 ? 3 : time <= 90 ? 2 : time <= 150 ? 1 : 0
})
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
onUnmounted(() => { clearInterval(timerInterval!) })
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2">
          <Zap class="w-5 h-5 text-yellow-500" />舒尔特方格
        </h2>
        <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- 关卡选择菜单 -->
      <div v-if="phase === 'menu'" class="py-4">
        <p class="text-sm text-gray-500 mb-4 text-center">按顺序点击数字，越快越好！从简单到困难，逐级挑战！</p>
        <div class="space-y-2">
          <button
            v-for="(lv, idx) in allLevels"
            :key="lv.level"
            @click="idx <= unlockedLevel ? startLevel(idx) : null"
            :disabled="idx > unlockedLevel"
            class="w-full flex items-center justify-between p-3 rounded-xl transition-all"
            :class="idx <= unlockedLevel
              ? 'bg-white border-2 border-primary-200 hover:border-primary-400 hover:shadow-md cursor-pointer'
              : 'bg-gray-50 border-2 border-gray-100 opacity-50 cursor-not-allowed'"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                :class="idx < unlockedLevel ? 'bg-green-100 text-green-600' : idx === unlockedLevel ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'">
                <Lock v-if="idx > unlockedLevel" class="w-4 h-4" />
                <Trophy v-else-if="idx < unlockedLevel" class="w-4 h-4" />
                <span v-else>{{ lv.level }}</span>
              </div>
              <div class="text-left">
                <div class="font-medium text-sm" :class="idx > unlockedLevel ? 'text-gray-400' : 'text-gray-700'">
                  第{{ lv.level }}关 · {{ lv.title }}
                </div>
                <div class="text-xs" :class="idx > unlockedLevel ? 'text-gray-300' : 'text-gray-400'">
                  {{ lv.desc }}
                </div>
              </div>
            </div>
            <ChevronRight v-if="idx <= unlockedLevel" class="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <!-- 游戏中 -->
      <div v-if="phase === 'playing'" class="text-center py-4">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <Timer class="w-4 h-4" />{{ formatTime(elapsedTime) }}
          </div>
          <div class="text-sm text-gray-500">
            第{{ currentConfig.level }}关 · {{ currentConfig.title }}
          </div>
          <div class="text-sm text-gray-500">错误：{{ mistakes }}</div>
        </div>
        <!-- 不提示当前目标数字，增加挑战性 -->
        <div class="grid gap-2 mx-auto" :style="{ gridTemplateColumns: `repeat(${gridDim}, 1fr)`, maxWidth: gridDim === 5 ? '320px' : gridDim === 4 ? '280px' : '240px' }">
          <button
            v-for="num in numbers"
            :key="num"
            @click="tapNumber(num)"
            class="aspect-square rounded-xl text-lg font-bold transition-all duration-200 active:scale-95"
            :class="{
              'bg-gray-200 text-gray-700': !wrongTaps.includes(num),
              'bg-red-500 text-white animate-pulse': wrongTaps.includes(num)
            }"
          >{{ num }}</button>
        </div>
        <p class="text-xs text-gray-400 mt-4">
          找到下一个数字，快速点击！
        </p>
      </div>

      <!-- 结果 -->
      <div v-if="phase === 'result'" class="text-center py-4">
        <div class="text-6xl mb-4">{{ starLevel >= 3 ? '🏆' : starLevel >= 2 ? '🥈' : starLevel >= 1 ? '🥉' : '💪' }}</div>
        <h3 class="font-title text-xl text-gray-800 mb-2">第{{ currentConfig.level }}关完成！</h3>
        <div class="grid grid-cols-3 gap-3 mb-4">
          <div class="card bg-blue-50">
            <div class="text-2xl font-bold text-blue-600">{{ formatTime(elapsedTime) }}</div>
            <div class="text-xs text-gray-500">用时</div>
          </div>
          <div class="card bg-red-50">
            <div class="text-2xl font-bold text-red-600">{{ mistakes }}</div>
            <div class="text-xs text-gray-500">错误次数</div>
          </div>
          <div class="card bg-green-50">
            <div class="text-2xl font-bold text-green-600">{{ accuracy }}%</div>
            <div class="text-xs text-gray-500">准确率</div>
          </div>
        </div>
        <div class="flex justify-center gap-2 mb-4">
          <Star v-for="n in 3" :key="n" :class="n <= starLevel ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'" class="w-8 h-8" />
        </div>
        <div class="flex gap-2">
          <button @click="retry" class="btn-secondary flex items-center gap-1">
            <RotateCcw class="w-4 h-4" /> 关卡列表
          </button>
          <button v-if="currentLevelIdx + 1 < allLevels.length" @click="nextLevel" class="btn-primary flex-1 flex items-center justify-center gap-1">
            下一关 <ChevronRight class="w-4 h-4" />
          </button>
          <button v-else @click="emit('close')" class="btn-primary flex-1">全部通关！</button>
        </div>
      </div>
    </div>
  </div>
</template>
