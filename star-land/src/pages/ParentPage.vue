<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProgressStore } from '@/stores/progress'
import { useRewardStore } from '@/stores/reward'
import { useSettingsStore } from '@/stores/settings'
import { useCourseProgress } from '@/composables/useCourseProgress'
import { useSpeech } from '@/composables/useSpeech'
import { BarChart3, TrendingUp, Calendar, Settings, User, Pencil, Volume2, Gauge, Star, Lock, History, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-vue-next'

const progressStore = useProgressStore()
const rewardStore = useRewardStore()
const settingsStore = useSettingsStore()
const { getCourseCompletion } = useCourseProgress()
const { speakChinese, speakPinyin, speakEnglish } = useSpeech()

const showNameEdit = ref(false)
const nameInput = ref(settingsStore.childName)

const subjects = [
  { key: 'chinese' as const, name: '语文', color: 'bg-chinese' },
  { key: 'math' as const, name: '数学', color: 'bg-math' },
  { key: 'english' as const, name: '英语', color: 'bg-english' },
]

function getSubjectProgress(subject: 'chinese' | 'math' | 'english') {
  let total = 0; let completed = 0
  for (let g = 1; g <= 3; g++) {
    const p = getCourseCompletion(subject, g as any)
    total += p.total; completed += p.completed
  }
  return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 }
}

function saveName() {
  settingsStore.setChildName(nameInput.value)
  showNameEdit.value = false
}

function openNameEdit() {
  nameInput.value = settingsStore.childName
  showNameEdit.value = true
}

// 语音速度滑块变化处理
function onSpeechRateChange(event: Event) {
  const target = event.target as HTMLInputElement
  const value = parseFloat(target.value)
  settingsStore.setSpeechRate(value)
}

// 测试语音速度
function testSpeechRate() {
  speakChinese('你好，这是语音速度测试。')
  setTimeout(() => {
    speakPinyin('b-a-ba')
  }, 1500)
  setTimeout(() => {
    speakEnglish('Hello, this is a test.')
  }, 3000)
}

// 语音速度预设
const speechRatePresets = [
  { label: '默认', value: 0 },
  { label: '很慢', value: 0.6 },
  { label: '稍慢', value: 0.8 },
  { label: '正常', value: 1.0 },
  { label: '稍快', value: 1.2 },
]

function setSpeechRatePreset(value: number) {
  settingsStore.setSpeechRate(value)
}

// ===== 家长加分功能 =====
const showAddStars = ref(false)
const showPinSetup = ref(false)
const pinInput = ref('')
const pinConfirmInput = ref('')
const pinError = ref('')
const addStarsAmount = ref(1)
const addStarsReason = ref('')
const addStarsSuccess = ref('')

// 快捷原因
const quickReasons = [
  '系统bug补偿',
  '题目有误补偿',
  '表现特别好',
  '额外奖励',
]

// 打开加分面板
function openAddStars() {
  addStarsAmount.value = 1
  addStarsReason.value = ''
  addStarsSuccess.value = ''
  pinError.value = ''
  pinInput.value = ''

  // 如果未设置PIN，先设置PIN
  if (!settingsStore.hasParentPin()) {
    showPinSetup.value = true
    pinConfirmInput.value = ''
  } else {
    showAddStars.value = true
  }
}

// 设置PIN码
function setupPin() {
  pinError.value = ''
  if (!/^\d{4}$/.test(pinInput.value)) {
    pinError.value = 'PIN码必须是4位数字'
    return
  }
  if (pinInput.value !== pinConfirmInput.value) {
    pinError.value = '两次输入的PIN码不一致'
    return
  }
  settingsStore.setParentPin(pinInput.value)
  showPinSetup.value = false
  pinInput.value = ''
  pinConfirmInput.value = ''
  showAddStars.value = true
}

// 验证PIN并加分
function confirmAddStars() {
  pinError.value = ''
  addStarsSuccess.value = ''

  if (!settingsStore.verifyParentPin(pinInput.value)) {
    pinError.value = 'PIN码不正确'
    return
  }

  const amount = addStarsAmount.value
  const reason = addStarsReason.value.trim() || '家长手动加分'

  const success = rewardStore.parentAddStars(amount, reason)
  if (success) {
    addStarsSuccess.value = `成功${amount > 0 ? '加' : '减'} ${Math.abs(amount)} 颗星星`
    pinInput.value = ''
    addStarsReason.value = ''
    // 2秒后关闭
    setTimeout(() => {
      showAddStars.value = false
      addStarsSuccess.value = ''
    }, 2000)
  }
}

// 增减分数
function increaseStars() {
  addStarsAmount.value = Math.min(50, addStarsAmount.value + 1)
}
function decreaseStars() {
  addStarsAmount.value = Math.max(-50, addStarsAmount.value - 1)
}
function setAmount(n: number) {
  addStarsAmount.value = n
}

// ===== 星星历史记录 =====
const showHistory = ref(false)
const historyPageSize = 10
const historyPage = ref(0)

const pagedHistory = computed(() => {
  const start = historyPage.value * historyPageSize
  return rewardStore.starHistory.slice(start, start + historyPageSize)
})

const totalHistoryPages = computed(() => {
  return Math.max(1, Math.ceil(rewardStore.starHistory.length / historyPageSize))
})

function formatTime(iso: string): string {
  const d = new Date(iso)
  const month = d.getMonth() + 1
  const day = d.getDate()
  const h = String(d.getHours()).padStart(2, '0')
  const m = String(d.getMinutes()).padStart(2, '0')
  return `${month}/${day} ${h}:${m}`
}

function sourceLabel(source: string): string {
  const labels: Record<string, string> = {
    lesson: '课时',
    checkin: '签到',
    parent: '家长',
    redeem: '兑换',
    achievement: '成就',
  }
  return labels[source] || source
}

function sourceColor(source: string): string {
  const colors: Record<string, string> = {
    lesson: 'text-green-600',
    checkin: 'text-blue-600',
    parent: 'text-purple-600',
    redeem: 'text-orange-600',
    achievement: 'text-yellow-600',
  }
  return colors[source] || 'text-gray-600'
}
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <h1 class="font-title text-2xl text-gray-800 mb-4">家长中心</h1>

    <!-- 孩子名字设置 -->
    <div class="card mb-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
          <User class="w-5 h-5 text-primary-500" />
        </div>
        <div>
          <p class="text-sm text-gray-500">孩子名字</p>
          <p class="font-title text-lg text-gray-800">
            {{ settingsStore.getChildName() }}
          </p>
        </div>
      </div>
      <button
        @click="openNameEdit"
        class="flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600"
      >
        <Pencil class="w-4 h-4" />
        修改
      </button>
    </div>

    <!-- 名字编辑弹窗 -->
    <div v-if="showNameEdit" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-3xl p-6 w-80 mx-4 shadow-xl">
        <div class="flex items-center gap-2 mb-4">
          <User class="w-5 h-5 text-primary-500" />
          <h3 class="font-title text-lg">设置孩子名字</h3>
        </div>
        <p class="text-xs text-gray-400 mb-3">答对题目时会喊孩子的名字哦~</p>
        <input
          v-model="nameInput"
          placeholder="输入孩子的名字..."
          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 outline-none text-lg mb-4"
          @keyup.enter="saveName"
          autofocus
        />
        <div class="flex gap-2">
          <button @click="showNameEdit = false" class="btn-secondary flex-1">取消</button>
          <button @click="saveName" class="btn-primary flex-1">保存</button>
        </div>
      </div>
    </div>

    <!-- 语音速度设置 -->
    <div class="card mb-4">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
          <Gauge class="w-5 h-5 text-secondary-500" />
        </div>
        <div class="flex-1">
          <p class="font-title text-base text-gray-800">语音朗读速度</p>
          <p class="text-xs text-gray-500">统一控制拼音、中文、英文的朗读速度</p>
        </div>
        <span class="text-sm font-medium text-primary-500">{{ settingsStore.getSpeechRateLabel() }}</span>
      </div>

      <!-- 速度滑块 -->
      <div class="mb-3">
        <input
          type="range"
          min="0"
          max="1.5"
          step="0.1"
          :value="settingsStore.settings.speechRate"
          @input="onSpeechRateChange"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
        />
        <div class="flex justify-between text-xs text-gray-400 mt-1">
          <span>0.5x</span>
          <span>1.0x</span>
          <span>1.5x</span>
        </div>
      </div>

      <!-- 预设按钮 -->
      <div class="flex gap-2 mb-3 flex-wrap">
        <button
          v-for="preset in speechRatePresets"
          :key="preset.value"
          @click="setSpeechRatePreset(preset.value)"
          :class="[
            'px-3 py-1.5 rounded-full text-xs transition-all',
            settingsStore.settings.speechRate === preset.value
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          {{ preset.label }}
        </button>
      </div>

      <!-- 测试按钮 -->
      <button
        @click="testSpeechRate"
        class="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-secondary-50 text-secondary-600 hover:bg-secondary-100 transition-all"
      >
        <Volume2 class="w-4 h-4" />
        <span class="text-sm">测试语音速度</span>
      </button>
    </div>

    <!-- 学习概览 -->
    <div class="grid grid-cols-3 gap-3 mb-6">
      <div class="card text-center">
        <BarChart3 class="w-6 h-6 text-primary-500 mx-auto mb-1" />
        <p class="font-title text-xl">{{ progressStore.totalCompleted }}</p>
        <p class="text-xs text-gray-500">已完成课时</p>
      </div>
      <div class="card text-center">
        <Calendar class="w-6 h-6 text-secondary-500 mx-auto mb-1" />
        <p class="font-title text-xl">{{ progressStore.currentStreak }}</p>
        <p class="text-xs text-gray-500">连续天数</p>
      </div>
      <div class="card text-center">
        <TrendingUp class="w-6 h-6 text-chinese mx-auto mb-1" />
        <p class="font-title text-xl">{{ rewardStore.stars }}</p>
        <p class="text-xs text-gray-500">累计星星</p>
      </div>
    </div>

    <!-- 家长加分功能 -->
    <div class="card mb-4 border-2 border-purple-200 bg-purple-50">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
          <Star class="w-5 h-5 text-purple-500" />
        </div>
        <div class="flex-1">
          <p class="font-title text-base text-gray-800">家长加分</p>
          <p class="text-xs text-gray-500">系统bug或题目有误时，家长可手动调整星星</p>
        </div>
        <Lock v-if="settingsStore.hasParentPin()" class="w-4 h-4 text-purple-400" />
      </div>

      <button
        @click="openAddStars"
        class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-all"
      >
        <Plus class="w-4 h-4" />
        <span class="text-sm font-medium">调整星星</span>
      </button>
    </div>

    <!-- PIN设置弹窗 -->
    <div v-if="showPinSetup" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-3xl p-6 w-80 mx-4 shadow-xl">
        <div class="flex items-center gap-2 mb-3">
          <Lock class="w-5 h-5 text-purple-500" />
          <h3 class="font-title text-lg">设置家长PIN码</h3>
        </div>
        <p class="text-xs text-gray-400 mb-4">设置4位数字PIN码，防止孩子自行加分。请牢记PIN码！</p>
        <input
          v-model="pinInput"
          type="password"
          inputmode="numeric"
          maxlength="4"
          placeholder="输入4位数字PIN码"
          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-lg text-center tracking-widest mb-3"
          @keyup.enter="setupPin"
        />
        <input
          v-model="pinConfirmInput"
          type="password"
          inputmode="numeric"
          maxlength="4"
          placeholder="再次输入PIN码"
          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-lg text-center tracking-widest mb-3"
          @keyup.enter="setupPin"
        />
        <p v-if="pinError" class="text-sm text-red-500 mb-3 text-center">{{ pinError }}</p>
        <div class="flex gap-2">
          <button @click="showPinSetup = false" class="btn-secondary flex-1">取消</button>
          <button @click="setupPin" class="btn-primary flex-1">确认</button>
        </div>
      </div>
    </div>

    <!-- 加分弹窗 -->
    <div v-if="showAddStars" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-3xl p-6 w-80 mx-4 shadow-xl">
        <div class="flex items-center gap-2 mb-4">
          <Star class="w-5 h-5 text-purple-500" />
          <h3 class="font-title text-lg">调整星星</h3>
        </div>

        <!-- 成功提示 -->
        <div v-if="addStarsSuccess" class="mb-4 p-3 rounded-xl bg-green-50 text-green-700 text-center text-sm">
          {{ addStarsSuccess }}
        </div>

        <template v-if="!addStarsSuccess">
          <!-- 分数选择 -->
          <p class="text-sm text-gray-500 mb-2">调整数量</p>
          <div class="flex items-center justify-center gap-3 mb-3">
            <button @click="decreaseStars" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <Minus class="w-4 h-4" />
            </button>
            <div class="w-20 text-center">
              <span class="font-title text-2xl" :class="addStarsAmount > 0 ? 'text-green-600' : addStarsAmount < 0 ? 'text-red-600' : 'text-gray-800'">
                {{ addStarsAmount > 0 ? '+' : '' }}{{ addStarsAmount }}
              </span>
            </div>
            <button @click="increaseStars" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <Plus class="w-4 h-4" />
            </button>
          </div>

          <!-- 快捷按钮 -->
          <div class="flex gap-2 mb-3 flex-wrap">
            <button
              v-for="n in [1, 3, 5, 10]"
              :key="n"
              @click="setAmount(n)"
              :class="[
                'px-3 py-1 rounded-full text-xs transition-all',
                addStarsAmount === n ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              +{{ n }}
            </button>
            <button
              v-for="n in [-1, -3, -5]"
              :key="n"
              @click="setAmount(n)"
              :class="[
                'px-3 py-1 rounded-full text-xs transition-all',
                addStarsAmount === n ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ n }}
            </button>
          </div>

          <!-- 原因输入 -->
          <p class="text-sm text-gray-500 mb-2">原因</p>
          <div class="flex gap-2 mb-2 flex-wrap">
            <button
              v-for="r in quickReasons"
              :key="r"
              @click="addStarsReason = r"
              :class="[
                'px-2.5 py-1 rounded-full text-xs transition-all',
                addStarsReason === r ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ r }}
            </button>
          </div>
          <input
            v-model="addStarsReason"
            placeholder="或输入其他原因..."
            class="w-full p-2.5 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-sm mb-4"
          />

          <!-- PIN验证 -->
          <div class="flex items-center gap-2 mb-2">
            <Lock class="w-4 h-4 text-gray-400" />
            <p class="text-sm text-gray-500">请输入家长PIN码</p>
          </div>
          <input
            v-model="pinInput"
            type="password"
            inputmode="numeric"
            maxlength="4"
            placeholder="PIN码"
            class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none text-lg text-center tracking-widest mb-3"
            @keyup.enter="confirmAddStars"
          />
          <p v-if="pinError" class="text-sm text-red-500 mb-3 text-center">{{ pinError }}</p>

          <div class="flex gap-2">
            <button @click="showAddStars = false" class="btn-secondary flex-1">取消</button>
            <button @click="confirmAddStars" class="btn-primary flex-1">确认</button>
          </div>
        </template>
      </div>
    </div>

    <!-- 星星变动记录 -->
    <div class="card mb-4">
      <button
        @click="showHistory = !showHistory"
        class="w-full flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <History class="w-5 h-5 text-gray-500" />
          <span class="font-title text-base text-gray-800">星星变动记录</span>
          <span class="text-xs text-gray-400">({{ rewardStore.starHistory.length }}条)</span>
        </div>
        <ChevronDown v-if="!showHistory" class="w-5 h-5 text-gray-400" />
        <ChevronUp v-else class="w-5 h-5 text-gray-400" />
      </button>

      <div v-if="showHistory" class="mt-4">
        <div v-if="rewardStore.starHistory.length === 0" class="text-center py-6 text-gray-400 text-sm">
          暂无记录
        </div>
        <div v-else class="space-y-2 max-h-80 overflow-y-auto">
          <div
            v-for="record in pagedHistory"
            :key="record.id"
            class="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50"
          >
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-700 truncate">{{ record.reason }}</p>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs text-gray-400">{{ formatTime(record.timestamp) }}</span>
                <span class="text-xs px-1.5 py-0.5 rounded-full bg-gray-200" :class="sourceColor(record.source)">
                  {{ sourceLabel(record.source) }}
                </span>
              </div>
            </div>
            <span
              class="font-title text-base ml-2"
              :class="record.amount > 0 ? 'text-green-600' : 'text-red-500'"
            >
              {{ record.amount > 0 ? '+' : '' }}{{ record.amount }}
            </span>
          </div>
        </div>

        <!-- 分页 -->
        <div v-if="totalHistoryPages > 1" class="flex items-center justify-center gap-2 mt-3">
          <button
            @click="historyPage = Math.max(0, historyPage - 1)"
            :disabled="historyPage === 0"
            class="px-3 py-1 rounded-lg text-sm bg-gray-100 disabled:opacity-40"
          >
            上一页
          </button>
          <span class="text-sm text-gray-500">{{ historyPage + 1 }}/{{ totalHistoryPages }}</span>
          <button
            @click="historyPage = Math.min(totalHistoryPages - 1, historyPage + 1)"
            :disabled="historyPage >= totalHistoryPages - 1"
            class="px-3 py-1 rounded-lg text-sm bg-gray-100 disabled:opacity-40"
          >
            下一页
          </button>
        </div>
      </div>
    </div>

    <!-- 三科进度 -->
    <h2 class="font-title text-lg text-gray-800 mb-3">学科进度</h2>
    <div class="space-y-3 mb-6">
      <div v-for="s in subjects" :key="s.key" class="card">
        <div class="flex items-center justify-between mb-2">
          <span class="font-medium">{{ s.name }}</span>
          <span class="text-sm text-gray-500">{{ getSubjectProgress(s.key).completed }}/{{ getSubjectProgress(s.key).total }}课</span>
        </div>
        <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div :class="s.color" class="h-full rounded-full transition-all duration-500" :style="{ width: getSubjectProgress(s.key).percentage + '%' }" />
        </div>
      </div>
    </div>

    <!-- 提示 -->
    <div class="card bg-blue-50 border border-blue-200">
      <div class="flex items-center gap-2 mb-2">
        <Settings class="w-4 h-4 text-blue-600" />
        <span class="text-sm font-medium text-blue-700">家长小贴士</span>
      </div>
      <p class="text-sm text-blue-800">陪伴学习时，请多鼓励少批评。每个孩子都有自己的节奏，重要的是保持学习的兴趣和信心。每天16:00-20:00是最佳学习时间，建议每科30分钟后休息10分钟。语音速度可根据孩子接受能力调整，低年级建议稍慢（0.7-0.8x）。</p>
    </div>
  </div>
</template>
