<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useWritingStore } from '@/stores/writing'
import { useSettingsStore } from '@/stores/settings'
import { useSpeech } from '@/composables/useSpeech'
import { X, CheckCircle, Star, Smile, ThumbsUp, RotateCcw, Award, Settings2, ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface CharInfo {
  char: string
  pinyin: string
}

const props = defineProps<{
  chars: CharInfo[]          // 要练习的生字列表
  lessonId: string
  subject: string
  grade: number
  unitId: string
}>()

const emit = defineEmits<{
  close: []
}>()

const writingStore = useWritingStore()
const settingsStore = useSettingsStore()
const { speakChinese, speakPinyin } = useSpeech()

// 当前练习的字索引
const currentIndex = ref(0)
// 当前字的练习次数
const currentCount = ref(0)
// Canvas 相关
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let isDrawing = false
// 家长评分弹窗
const showScorePanel = ref(false)
const showPinInput = ref(false)
const pinInput = ref('')
const pinError = ref(false)
// 设置要求次数
const showSettings = ref(false)
const tempRequiredCount = ref(writingStore.requiredCount)

const currentChar = computed(() => props.chars[currentIndex.value])
const requiredCount = computed(() => writingStore.requiredCount)
const isCompleted = computed(() => currentCount.value >= requiredCount.value)

// 已有记录
const existingRecord = computed(() => {
  if (!currentChar.value) return null
  return writingStore.getRecord(currentChar.value.char, props.lessonId)
})

// 初始化 Canvas
function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  // 设置 canvas 实际尺寸（高DPI）
  const rect = canvas.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.scale(dpr, dpr)
    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = '#333'
  }
  drawGrid()
}

// 绘制田字格
function drawGrid() {
  const canvas = canvasRef.value
  if (!canvas || !ctx) return
  const rect = canvas.getBoundingClientRect()
  const w = rect.width
  const h = rect.height
  ctx.clearRect(0, 0, w, h)

  // 外框
  ctx.strokeStyle = '#d1d5db'
  ctx.lineWidth = 2
  ctx.strokeRect(1, 1, w - 2, h - 2)

  // 虚线十字
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 1
  ctx.setLineDash([5, 5])
  ctx.beginPath()
  ctx.moveTo(w / 2, 0)
  ctx.lineTo(w / 2, h)
  ctx.moveTo(0, h / 2)
  ctx.lineTo(w, h / 2)
  ctx.stroke()
  ctx.setLineDash([])
}

// 获取坐标
function getPos(e: MouseEvent | TouchEvent) {
  const canvas = canvasRef.value
  if (!canvas) return { x: 0, y: 0 }
  const rect = canvas.getBoundingClientRect()
  let clientX: number, clientY: number
  if ('touches' in e) {
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  }
}

function startDraw(e: MouseEvent | TouchEvent) {
  e.preventDefault()
  if (!ctx) return
  isDrawing = true
  const pos = getPos(e)
  ctx.beginPath()
  ctx.moveTo(pos.x, pos.y)
}

function draw(e: MouseEvent | TouchEvent) {
  if (!isDrawing || !ctx) return
  e.preventDefault()
  const pos = getPos(e)
  ctx.lineTo(pos.x, pos.y)
  ctx.stroke()
}

function endDraw() {
  isDrawing = false
}

// 清除画布
function clearCanvas() {
  drawGrid()
}

// 确认完成一次书写
function confirmWriting() {
  currentCount.value++
  clearCanvas()

  // 保存记录
  if (currentChar.value) {
    writingStore.upsertRecord({
      character: currentChar.value.char,
      pinyin: currentChar.value.pinyin,
      lessonId: props.lessonId,
      subject: props.subject,
      grade: props.grade,
      unitId: props.unitId,
      practiceCount: currentCount.value,
      parentScore: existingRecord.value?.parentScore || null,
      scoredAt: existingRecord.value?.scoredAt || null,
    })
  }

  // 如果达到要求次数，自动显示评分面板
  if (isCompleted.value) {
    showScorePanel.value = true
  }
}

// 下一字
function nextChar() {
  if (currentIndex.value < props.chars.length - 1) {
    currentIndex.value++
    currentCount.value = 0
    clearCanvas()
  }
}

// 上一字
function prevChar() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    currentCount.value = 0
    clearCanvas()
  }
}

// 朗读当前字
function speakChar() {
  if (currentChar.value) {
    speakChinese(currentChar.value.char)
  }
}

// 朗读拼音
function speakPinyinSound() {
  if (currentChar.value) {
    speakPinyin(currentChar.value.pinyin)
  }
}

// 家长评分
function tryScore() {
  if (settingsStore.hasParentPin()) {
    showPinInput.value = true
    pinInput.value = ''
    pinError.value = false
  } else {
    showScorePanel.value = true
  }
}

function verifyPin() {
  if (settingsStore.verifyParentPin(pinInput.value)) {
    showPinInput.value = false
    pinError.value = false
    showScorePanel.value = true
  } else {
    pinError.value = true
  }
}

function submitScore(score: 'excellent' | 'good' | 'try_again') {
  if (currentChar.value && existingRecord.value) {
    writingStore.scoreRecord(existingRecord.value.id, score)
  }
  showScorePanel.value = false
  // 评分后自动跳到下一字
  if (currentIndex.value < props.chars.length - 1) {
    nextChar()
  }
}

// 保存设置
function saveSettings() {
  writingStore.setRequiredCount(tempRequiredCount.value)
  showSettings.value = false
}

// 监听字切换，重置次数
watch(currentIndex, () => {
  const record = currentChar.value ? writingStore.getRecord(currentChar.value.char, props.lessonId) : null
  currentCount.value = record?.practiceCount || 0
})

onMounted(() => {
  initCanvas()
  // 加载当前字已有进度
  if (currentChar.value) {
    const record = writingStore.getRecord(currentChar.value.char, props.lessonId)
    currentCount.value = record?.practiceCount || 0
  }
})

onUnmounted(() => {
  isDrawing = false
})
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
      <!-- 头部 -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2">
          <Award class="w-5 h-5 text-purple-500" />
          生字书写练习
        </h2>
        <div class="flex items-center gap-2">
          <button @click="showSettings = !showSettings" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500" title="设置练习次数">
            <Settings2 class="w-4 h-4" />
          </button>
          <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- 设置面板 -->
      <div v-if="showSettings" class="mb-4 p-3 bg-purple-50 rounded-xl">
        <p class="text-sm text-gray-600 mb-2">每个字练习次数：{{ tempRequiredCount }} 次</p>
        <input type="range" min="1" max="10" v-model.number="tempRequiredCount" class="w-full mb-2" />
        <div class="flex justify-between text-xs text-gray-400 mb-2">
          <span>1次</span><span>5次</span><span>10次</span>
        </div>
        <button @click="saveSettings" class="w-full py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600">保存设置</button>
      </div>

      <!-- 字导航 -->
      <div class="flex items-center justify-between mb-4">
        <button
          @click="prevChar"
          :disabled="currentIndex === 0"
          class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 text-gray-600"
        >
          <ChevronLeft class="w-5 h-5" />
        </button>
        <span class="text-sm text-gray-500">
          第 {{ currentIndex + 1 }} / {{ chars.length }} 字
        </span>
        <button
          @click="nextChar"
          :disabled="currentIndex === chars.length - 1"
          class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 text-gray-600"
        >
          <ChevronRight class="w-5 h-5" />
        </button>
      </div>

      <!-- 范字展示 -->
      <div v-if="currentChar" class="text-center mb-4">
        <div class="inline-flex items-baseline gap-3">
          <span class="text-7xl font-bold text-gray-800" style="font-family: 'KaiTi', 'STKaiti', serif;">{{ currentChar.char }}</span>
          <div class="flex flex-col items-start gap-1">
            <span class="text-2xl text-primary-500">{{ currentChar.pinyin }}</span>
            <div class="flex gap-1">
              <button @click="speakChar" class="p-1.5 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 text-xs">读字</button>
              <button @click="speakPinyinSound" class="p-1.5 rounded-lg bg-green-50 text-green-500 hover:bg-green-100 text-xs">拼音</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 书写区域 -->
      <div class="mb-4">
        <div class="relative mx-auto" style="width: 240px; height: 240px;">
          <canvas
            ref="canvasRef"
            class="absolute inset-0 w-full h-full touch-none cursor-crosshair"
            @mousedown="startDraw"
            @mousemove="draw"
            @mouseup="endDraw"
            @mouseleave="endDraw"
            @touchstart="startDraw"
            @touchmove="draw"
            @touchend="endDraw"
          />
        </div>
        <div class="flex justify-center gap-2 mt-2">
          <button @click="clearCanvas" class="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm hover:bg-gray-200 flex items-center gap-1">
            <RotateCcw class="w-3 h-3" /> 重写
          </button>
        </div>
      </div>

      <!-- 进度 -->
      <div class="text-center mb-4">
        <div class="flex items-center justify-center gap-1 mb-1">
          <span v-for="n in requiredCount" :key="n" class="w-3 h-3 rounded-full" :class="n <= currentCount ? 'bg-green-500' : 'bg-gray-200'" />
        </div>
        <p class="text-sm text-gray-500">已练习 {{ currentCount }} / {{ requiredCount }} 次</p>
      </div>

      <!-- 完成按钮 -->
      <button
        v-if="!isCompleted"
        @click="confirmWriting"
        class="w-full py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors"
      >
        写完了（第 {{ currentCount + 1 }} 次）
      </button>

      <!-- 完成后评分 -->
      <div v-if="isCompleted && !showScorePanel" class="space-y-2">
        <div v-if="existingRecord?.parentScore" class="text-center p-3 bg-green-50 rounded-xl">
          <p class="text-sm text-green-700">
            <CheckCircle class="w-4 h-4 inline mr-1" />
            已完成，家长评分：
            <span v-if="existingRecord.parentScore === 'excellent'">优</span>
            <span v-else-if="existingRecord.parentScore === 'good'">良</span>
            <span v-else>加油</span>
          </p>
        </div>
        <button @click="tryScore" class="w-full py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-colors">
          家长评分
        </button>
        <button v-if="currentIndex < chars.length - 1" @click="nextChar" class="w-full py-2 bg-gray-100 text-gray-600 rounded-xl text-sm hover:bg-gray-200">
          练习下一个字 →
        </button>
      </div>

      <!-- PIN 验证弹窗 -->
      <div v-if="showPinInput" class="fixed inset-0 bg-black/30 z-10 flex items-center justify-center p-4" @click.self="showPinInput = false">
        <div class="bg-white rounded-xl p-5 max-w-xs w-full">
          <h3 class="font-title text-base mb-3 text-center">请输入家长PIN码</h3>
          <input
            v-model="pinInput"
            type="password"
            class="w-full p-2 border-2 border-gray-200 rounded-lg text-center text-lg mb-2 focus:border-purple-500 outline-none"
            @keyup.enter="verifyPin"
            placeholder="PIN"
          />
          <p v-if="pinError" class="text-red-500 text-sm text-center mb-2">PIN码错误</p>
          <button @click="verifyPin" class="w-full py-2 bg-purple-500 text-white rounded-lg text-sm">确认</button>
        </div>
      </div>

      <!-- 评分面板 -->
      <div v-if="showScorePanel" class="space-y-2">
        <p class="text-center text-sm text-gray-600 mb-3">家长请评分：</p>
        <div class="grid grid-cols-3 gap-2">
          <button @click="submitScore('excellent')" class="p-4 rounded-xl bg-green-50 hover:bg-green-100 flex flex-col items-center gap-1">
            <Star class="w-6 h-6 text-green-500" />
            <span class="text-sm font-medium text-green-700">优</span>
          </button>
          <button @click="submitScore('good')" class="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 flex flex-col items-center gap-1">
            <ThumbsUp class="w-6 h-6 text-blue-500" />
            <span class="text-sm font-medium text-blue-700">良</span>
          </button>
          <button @click="submitScore('try_again')" class="p-4 rounded-xl bg-orange-50 hover:bg-orange-100 flex flex-col items-center gap-1">
            <Smile class="w-6 h-6 text-orange-500" />
            <span class="text-sm font-medium text-orange-700">加油</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
