<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { X, RotateCcw, Eye, Check, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-vue-next'

interface CharInfo { char: string; pinyin: string }
const props = defineProps<{
  chars: CharInfo[]
  lessonId: string
  subject: string
  grade: number
  unitId: string
}>()
const emit = defineEmits<{ close: [] }>()

const currentIndex = ref(0)
const currentChar = computed(() => props.chars[currentIndex.value]?.char || '')
const currentPinyin = computed(() => props.chars[currentIndex.value]?.pinyin || '')

// 笔顺数据（常见字的笔画顺序）
// 每个字按笔画顺序分解，每笔用一个描述和SVG路径表示
const strokeOrderData: Record<string, { name: string; path: string; desc: string }[]> = {
  '一': [{ name: '横', path: 'M 20 50 L 80 50', desc: '从左到右一横' }],
  '二': [
    { name: '横', path: 'M 20 30 L 80 30', desc: '上面一横' },
    { name: '横', path: 'M 15 70 L 85 70', desc: '下面一横' },
  ],
  '三': [
    { name: '横', path: 'M 25 25 L 75 25', desc: '第一横' },
    { name: '横', path: 'M 20 50 L 80 50', desc: '第二横' },
    { name: '横', path: 'M 15 75 L 85 75', desc: '第三横' },
  ],
  '十': [
    { name: '横', path: 'M 15 50 L 85 50', desc: '先写一横' },
    { name: '竖', path: 'M 50 15 L 50 85', desc: '再写一竖' },
  ],
  '人': [
    { name: '撇', path: 'M 50 20 L 25 80', desc: '先写撇' },
    { name: '捺', path: 'M 50 35 L 80 85', desc: '再写捺' },
  ],
  '口': [
    { name: '竖', path: 'M 25 20 L 25 80', desc: '左竖' },
    { name: '横折', path: 'M 25 20 L 75 20 L 75 80', desc: '横折' },
    { name: '横', path: 'M 25 80 L 75 80', desc: '底横' },
  ],
  '日': [
    { name: '竖', path: 'M 25 15 L 25 85', desc: '左竖' },
    { name: '横折', path: 'M 25 15 L 75 15 L 75 85', desc: '横折' },
    { name: '横', path: 'M 25 50 L 75 50', desc: '中间横' },
    { name: '横', path: 'M 25 85 L 75 85', desc: '底横' },
  ],
  '月': [
    { name: '撇', path: 'M 35 15 L 25 85', desc: '左撇' },
    { name: '横折钩', path: 'M 30 15 L 75 15 L 75 85', desc: '横折钩' },
    { name: '横', path: 'M 30 40 L 75 40', desc: '第一横' },
    { name: '横', path: 'M 28 65 L 75 65', desc: '第二横' },
  ],
  '木': [
    { name: '横', path: 'M 15 40 L 85 40', desc: '一横' },
    { name: '竖', path: 'M 50 20 L 50 85', desc: '一竖' },
    { name: '撇', path: 'M 50 45 L 20 80', desc: '撇' },
    { name: '捺', path: 'M 50 45 L 80 80', desc: '捺' },
  ],
  '水': [
    { name: '竖钩', path: 'M 50 15 L 50 70 L 45 80', desc: '中间竖钩' },
    { name: '横撇', path: 'M 30 35 L 50 45', desc: '左横撇' },
    { name: '撇', path: 'M 50 45 L 25 75', desc: '左撇' },
    { name: '捺', path: 'M 50 45 L 75 75', desc: '右捺' },
  ],
  '火': [
    { name: '点', path: 'M 50 15 L 50 20', desc: '上面点' },
    { name: '撇', path: 'M 50 25 L 30 55', desc: '左撇' },
    { name: '撇', path: 'M 40 35 L 15 75', desc: '左长撇' },
    { name: '捺', path: 'M 45 35 L 80 80', desc: '右捺' },
  ],
  '山': [
    { name: '竖', path: 'M 50 15 L 50 85', desc: '中间竖' },
    { name: '竖折', path: 'M 25 50 L 25 85 L 75 85', desc: '左竖折' },
    { name: '竖', path: 'M 75 50 L 75 85', desc: '右竖' },
  ],
  '田': [
    { name: '竖', path: 'M 25 15 L 25 85', desc: '左竖' },
    { name: '横折', path: 'M 25 15 L 75 15 L 75 85', desc: '横折' },
    { name: '横', path: 'M 25 50 L 75 50', desc: '中横' },
    { name: '竖', path: 'M 50 15 L 50 85', desc: '中竖' },
    { name: '横', path: 'M 25 85 L 75 85', desc: '底横' },
  ],
  '大': [
    { name: '横', path: 'M 15 35 L 85 35', desc: '一横' },
    { name: '撇', path: 'M 50 25 L 20 80', desc: '撇' },
    { name: '捺', path: 'M 50 25 L 80 80', desc: '捺' },
  ],
  '小': [
    { name: '竖钩', path: 'M 50 20 L 50 75 L 45 85', desc: '中间竖钩' },
    { name: '点', path: 'M 30 40 L 35 50', desc: '左点' },
    { name: '点', path: 'M 70 40 L 65 50', desc: '右点' },
  ],
}

// 为没有预设笔顺的字生成默认笔顺（按笔画数分解为横竖撇捺）
function getStrokes(char: string): { name: string; path: string; desc: string }[] {
  if (strokeOrderData[char]) return strokeOrderData[char]
  // 默认：假设1-4画，用简单笔画
  const strokeCount = char.length === 1 ? Math.min(char.charCodeAt(0) % 8 + 2, 12) : 2
  const strokes: { name: string; path: string; desc: string }[] = []
  const strokeTypes = [
    { name: '横', path: 'M 20 50 L 80 50', desc: '横' },
    { name: '竖', path: 'M 50 20 L 50 80', desc: '竖' },
    { name: '撇', path: 'M 50 25 L 25 75', desc: '撇' },
    { name: '捺', path: 'M 50 25 L 75 75', desc: '捺' },
    { name: '点', path: 'M 50 20 L 55 30', desc: '点' },
    { name: '横折', path: 'M 25 25 L 75 25 L 75 75', desc: '横折' },
    { name: '竖钩', path: 'M 50 20 L 50 75 L 45 85', desc: '竖钩' },
    { name: '横撇', path: 'M 25 35 L 75 35 L 50 75', desc: '横撇' },
  ]
  for (let i = 0; i < strokeCount; i++) {
    strokes.push(strokeTypes[i % strokeTypes.length])
  }
  return strokes
}

const currentStrokes = computed(() => getStrokes(currentChar.value))
const showStrokeDemo = ref(false)
const demoStrokeIndex = ref(0)
const writingProgress = ref(0) // 当前写到第几笔
const feedback = ref<'none' | 'correct' | 'wrong'>('none')
const feedbackMessage = ref('')
const completedChars = ref<Set<string>>(new Set())
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isDrawing = ref(false)
const lastPoint = ref<{ x: number; y: number } | null>(null)
const drawnPaths = ref<{ x: number; y: number }[]>([])

// 笔顺演示动画
let demoTimer: ReturnType<typeof setInterval> | null = null
function playStrokeDemo() {
  showStrokeDemo.value = true
  demoStrokeIndex.value = 0
  writingProgress.value = 0
  feedback.value = 'none'
  clearCanvas()
  if (demoTimer) clearInterval(demoTimer)
  demoTimer = setInterval(() => {
    demoStrokeIndex.value++
    writingProgress.value = demoStrokeIndex.value
    if (demoStrokeIndex.value >= currentStrokes.value.length) {
      clearInterval(demoTimer!)
      demoTimer = null
      setTimeout(() => {
        showStrokeDemo.value = false
        clearCanvas()
      }, 1000)
    }
  }, 800)
}

function clearCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawnPaths.value = []
}

function startDraw(e: MouseEvent | TouchEvent) {
  if (showStrokeDemo.value) return
  isDrawing.value = true
  const point = getEventPoint(e)
  lastPoint.value = point
  drawnPaths.value = [point]
}

function draw(e: MouseEvent | TouchEvent) {
  if (!isDrawing.value) return
  e.preventDefault()
  const point = getEventPoint(e)
  const canvas = canvasRef.value
  if (!canvas || !lastPoint.value) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.strokeStyle = '#6366f1'
  ctx.lineWidth = 4
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  ctx.moveTo(lastPoint.value.x, lastPoint.value.y)
  ctx.lineTo(point.x, point.y)
  ctx.stroke()
  lastPoint.value = point
  drawnPaths.value.push(point)
}

function endDraw() {
  if (!isDrawing.value) return
  isDrawing.value = false
  lastPoint.value = null
  // 检查书写质量：至少画了一定长度的路径
  if (drawnPaths.value.length > 5) {
    writingProgress.value++
    if (writingProgress.value >= currentStrokes.value.length) {
      // 完成所有笔画
      feedback.value = 'correct'
      feedbackMessage.value = '书写完成！字写得很棒！'
      completedChars.value.add(currentChar.value)
    } else {
      feedback.value = 'correct'
      feedbackMessage.value = `第${writingProgress.value}笔完成，还需${currentStrokes.value.length - writingProgress.value}笔`
    }
  } else {
    feedback.value = 'wrong'
    feedbackMessage.value = `笔画太短了，请认真描写。参考笔顺：第${writingProgress.value + 1}笔是"${currentStrokes.value[writingProgress.value]?.name || ''}"`
  }
}

function getEventPoint(e: MouseEvent | TouchEvent): { x: number; y: number } {
  const canvas = canvasRef.value
  if (!canvas) return { x: 0, y: 0 }
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height
  if ('touches' in e) {
    return {
      x: (e.touches[0].clientX - rect.left) * scaleX,
      y: (e.touches[0].clientY - rect.top) * scaleY,
    }
  }
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY,
  }
}

function resetChar() {
  clearCanvas()
  writingProgress.value = 0
  feedback.value = 'none'
  feedbackMessage.value = ''
}

function prevChar() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    resetChar()
  }
}

function nextChar() {
  if (currentIndex.value < props.chars.length - 1) {
    currentIndex.value++
    resetChar()
  }
}

watch(currentIndex, () => { resetChar() })
onUnmounted(() => { if (demoTimer) clearInterval(demoTimer) })
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2">
          <span class="text-2xl">✍️</span>生字书写练习
        </h2>
        <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- 进度条 -->
      <div class="flex items-center gap-2 mb-4">
        <button v-if="currentIndex > 0" @click="prevChar" class="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
          <ChevronLeft class="w-5 h-5" />
        </button>
        <div class="flex-1 flex gap-1 overflow-x-auto">
          <button
            v-for="(ch, i) in chars"
            :key="i"
            @click="currentIndex = i; resetChar()"
            class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all shrink-0"
            :class="{
              'bg-purple-500 text-white': i === currentIndex,
              'bg-green-100 text-green-600': completedChars.has(ch.char) && i !== currentIndex,
              'bg-gray-100 text-gray-400': !completedChars.has(ch.char) && i !== currentIndex,
            }"
          >{{ ch.char }}</button>
        </div>
        <button v-if="currentIndex < chars.length - 1" @click="nextChar" class="p-2 rounded-lg hover:bg-gray-100 text-gray-400">
          <ChevronRight class="w-5 h-5" />
        </button>
      </div>

      <!-- 当前字信息 -->
      <div class="text-center mb-4">
        <span class="text-3xl font-bold text-purple-700">{{ currentChar }}</span>
        <span class="text-lg text-gray-400 ml-3">{{ currentPinyin }}</span>
        <span class="text-sm text-gray-400 ml-3">共{{ currentStrokes.length }}笔</span>
      </div>

      <!-- 笔顺提示 -->
      <div class="card bg-blue-50 border border-blue-200 mb-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-sm text-blue-700">
            <AlertCircle class="w-4 h-4" />
            <span>笔顺：{{ currentStrokes.map((s, i) => `${i + 1}.${s.name}`).join(' → ') }}</span>
          </div>
          <button @click="playStrokeDemo" class="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
            <Eye class="w-4 h-4" /> 看笔顺
          </button>
        </div>
      </div>

      <!-- 书写区域 -->
      <div class="flex justify-center gap-6 mb-4">
        <!-- 田字格背景 + 笔顺演示 -->
        <div class="relative">
          <svg viewBox="0 0 100 100" class="w-40 h-40 absolute top-0 left-0 pointer-events-none z-10" v-if="showStrokeDemo">
            <!-- 已完成的笔画 -->
            <path
              v-for="(stroke, i) in currentStrokes.slice(0, demoStrokeIndex)"
              :key="i"
              :d="stroke.path"
              stroke="#6366f1"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- 当前笔画（动画中） -->
            <path
              v-if="demoStrokeIndex > 0 && demoStrokeIndex <= currentStrokes.length"
              :d="currentStrokes[demoStrokeIndex - 1]?.path"
              stroke="#ef4444"
              stroke-width="4"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="animate-pulse"
            />
          </svg>
          <!-- 参考字（淡色） -->
          <div class="w-40 h-40 flex items-center justify-center text-7xl text-gray-200 font-bold select-none">{{ currentChar }}</div>
          <!-- 田字格虚线 -->
          <div class="absolute top-0 left-0 w-40 h-40 pointer-events-none border-2 border-gray-300 rounded-lg">
            <div class="absolute left-1/2 top-0 w-px h-full bg-gray-200 border-l border-dashed border-gray-300"></div>
            <div class="absolute top-1/2 left-0 h-px w-full bg-gray-200 border-t border-dashed border-gray-300"></div>
          </div>
        </div>

        <!-- 书写画布 -->
        <div class="relative">
          <canvas
            ref="canvasRef"
            width="160"
            height="160"
            class="w-40 h-40 border-2 border-purple-300 rounded-lg cursor-crosshair touch-none"
            @mousedown="startDraw"
            @mousemove="draw"
            @mouseup="endDraw"
            @mouseleave="endDraw"
            @touchstart="startDraw"
            @touchmove="draw"
            @touchend="endDraw"
          />
          <!-- 田字格虚线 -->
          <div class="absolute top-0 left-0 w-40 h-40 pointer-events-none">
            <div class="absolute left-1/2 top-0 w-px h-full border-l border-dashed border-purple-200"></div>
            <div class="absolute top-1/2 left-0 h-px w-full border-t border-dashed border-purple-200"></div>
          </div>
        </div>
      </div>

      <!-- 书写进度 -->
      <div class="flex items-center justify-center gap-2 mb-3">
        <span class="text-sm text-gray-500">书写进度：</span>
        <div class="flex gap-1">
          <div
            v-for="(stroke, i) in currentStrokes"
            :key="i"
            class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            :class="i < writingProgress ? 'bg-green-500 text-white' : i === writingProgress ? 'bg-purple-500 text-white animate-pulse' : 'bg-gray-200 text-gray-400'"
          >
            <Check v-if="i < writingProgress" class="w-3 h-3" />
            <span v-else>{{ i + 1 }}</span>
          </div>
        </div>
      </div>

      <!-- 反馈 -->
      <div v-if="feedback !== 'none'" class="mb-3 text-center">
        <p class="font-bold text-lg" :class="feedback === 'correct' ? 'text-green-600' : 'text-red-500'">
          {{ feedback === 'correct' ? '✓ ' : '✗ ' }}{{ feedbackMessage }}
        </p>
      </div>

      <!-- 操作按钮 -->
      <div class="flex justify-center gap-3">
        <button @click="resetChar" class="btn-secondary flex items-center gap-1">
          <RotateCcw class="w-4 h-4" /> 重写
        </button>
        <button @click="playStrokeDemo" class="btn-secondary flex items-center gap-1">
          <Eye class="w-4 h-4" /> 笔顺演示
        </button>
        <button v-if="currentIndex < chars.length - 1" @click="nextChar" class="btn-primary flex items-center gap-1">
          下一个 <ChevronRight class="w-4 h-4" />
        </button>
        <button v-else @click="emit('close')" class="btn-primary">完成练习</button>
      </div>

      <!-- 完成统计 -->
      <div class="mt-4 text-center text-sm text-gray-500">
        已完成 {{ completedChars.size }} / {{ chars.length }} 个生字
      </div>
    </div>
  </div>
</template>
