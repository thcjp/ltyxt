<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProgressStore } from '@/stores/progress'
import { useRewardStore } from '@/stores/reward'
import { useSettingsStore } from '@/stores/settings'
import { useCourseProgress } from '@/composables/useCourseProgress'
import { useSpeech } from '@/composables/useSpeech'
import { BarChart3, TrendingUp, Calendar, Settings, User, Pencil, Volume2, Gauge, Star, Lock, History, Plus, Minus, ChevronDown, ChevronUp, Gem, Trash2, RotateCcw, Package, Download, Upload, AlertTriangle } from 'lucide-vue-next'
import type { DiamondItem, WishItem } from '@/types'
import { useDataManager } from '@/composables/useDataManager'

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

// ===== 家长调整钻石 =====
const showAddDiamonds = ref(false)
const addDiamondsAmount = ref(1)
const addDiamondsReason = ref('')
const addDiamondsSuccess = ref('')
const diamondPinInput = ref('')
const diamondPinError = ref('')

const quickDiamondReasons = [
  '系统bug补偿',
  '表现特别好',
  '额外奖励',
  '家长鼓励',
]

function openAddDiamonds() {
  addDiamondsAmount.value = 1
  addDiamondsReason.value = ''
  addDiamondsSuccess.value = ''
  diamondPinError.value = ''
  diamondPinInput.value = ''

  if (!settingsStore.hasParentPin()) {
    showPinSetup.value = true
    pinConfirmInput.value = ''
  } else {
    showAddDiamonds.value = true
  }
}

function confirmAddDiamonds() {
  diamondPinError.value = ''
  addDiamondsSuccess.value = ''

  if (!settingsStore.verifyParentPin(diamondPinInput.value)) {
    diamondPinError.value = 'PIN码不正确'
    return
  }

  const amount = addDiamondsAmount.value
  const reason = addDiamondsReason.value.trim() || '家长手动调整钻石'

  const success = rewardStore.parentAddDiamonds(amount, reason)
  if (success) {
    addDiamondsSuccess.value = `成功${amount > 0 ? '加' : '减'} ${Math.abs(amount)} 颗钻石`
    diamondPinInput.value = ''
    addDiamondsReason.value = ''
    setTimeout(() => {
      showAddDiamonds.value = false
      addDiamondsSuccess.value = ''
    }, 2000)
  }
}

function increaseDiamonds() {
  addDiamondsAmount.value = Math.min(50, addDiamondsAmount.value + 1)
}
function decreaseDiamonds() {
  addDiamondsAmount.value = Math.max(-50, addDiamondsAmount.value - 1)
}
function setDiamondAmount(n: number) {
  addDiamondsAmount.value = n
}

// ===== 钻石商品管理 =====
const showDiamondManage = ref(false)
const diamondManagePinInput = ref('')
const diamondManagePinError = ref('')
const diamondManageVerified = ref(false)

const showAddDiamondItem = ref(false)
const newItemName = ref('')
const newItemDesc = ref('')
const newItemCost = ref(1)
const newItemIcon = ref('🎁')
const newItemStock = ref(3)

const editingItemId = ref<string | null>(null)
const editItemName = ref('')
const editItemDesc = ref('')
const editItemCost = ref(1)
const editItemIcon = ref('')
const editItemStock = ref(3)

// 补货弹窗
const restockingItemId = ref<string | null>(null)
const restockAmount = ref(1)

function openDiamondManage() {
  diamondManagePinInput.value = ''
  diamondManagePinError.value = ''
  diamondManageVerified.value = false
  showAddDiamondItem.value = false
  editingItemId.value = null
  restockingItemId.value = null

  if (!settingsStore.hasParentPin()) {
    showPinSetup.value = true
    pinConfirmInput.value = ''
  } else {
    showDiamondManage.value = true
  }
}

function verifyDiamondManagePin() {
  diamondManagePinError.value = ''
  if (!settingsStore.verifyParentPin(diamondManagePinInput.value)) {
    diamondManagePinError.value = 'PIN码不正确'
    return
  }
  diamondManageVerified.value = true
  diamondManagePinInput.value = ''
}

function closeDiamondManage() {
  showDiamondManage.value = false
  diamondManageVerified.value = false
  diamondManagePinInput.value = ''
  showAddDiamondItem.value = false
  editingItemId.value = null
  restockingItemId.value = null
}

function openAddDiamondItemForm() {
  newItemName.value = ''
  newItemDesc.value = ''
  newItemCost.value = 1
  newItemIcon.value = '🎁'
  newItemStock.value = 3
  showAddDiamondItem.value = true
}

function confirmAddDiamondItem() {
  const cost = Number(newItemCost.value)
  const stock = Number(newItemStock.value)
  if (!newItemName.value.trim() || !cost || cost <= 0) return
  rewardStore.addDiamondItem(
    newItemName.value,
    newItemDesc.value,
    cost,
    newItemIcon.value || '🎁',
    stock,
  )
  showAddDiamondItem.value = false
}

function startEditDiamondItem(item: DiamondItem) {
  editingItemId.value = item.id
  editItemName.value = item.name
  editItemDesc.value = item.description
  editItemCost.value = item.diamondCost
  editItemIcon.value = item.icon
  editItemStock.value = item.stock
}

function cancelEditDiamondItem() {
  editingItemId.value = null
}

function saveEditDiamondItem() {
  if (!editingItemId.value) return
  const cost = Number(editItemCost.value)
  const stock = Number(editItemStock.value)
  if (!editItemName.value.trim() || !cost || cost <= 0) return
  rewardStore.updateDiamondItem(editingItemId.value, {
    name: editItemName.value,
    description: editItemDesc.value,
    diamondCost: cost,
    icon: editItemIcon.value || '🎁',
    stock,
  })
  editingItemId.value = null
}

function removeDiamondItemById(itemId: string) {
  if (confirm('确定要删除这个商品吗？')) {
    rewardStore.removeDiamondItem(itemId)
  }
}

function startRestockDiamondItem(itemId: string) {
  restockingItemId.value = itemId
  restockAmount.value = 3
}

function confirmRestockDiamondItem() {
  if (!restockingItemId.value) return
  rewardStore.restockDiamondItem(restockingItemId.value, Number(restockAmount.value))
  restockingItemId.value = null
}

function cancelRestockDiamondItem() {
  restockingItemId.value = null
}

// ===== 心愿商品管理（星星商店）=====
const showWishManage = ref(false)
const wishManagePinInput = ref('')
const wishManagePinError = ref('')
const wishManageVerified = ref(false)

const showAddWishItem = ref(false)
const newWishName = ref('')
const newWishDesc = ref('')
const newWishCost = ref(1)
const newWishIcon = ref('🎁')
const newWishStock = ref(3)

const editingWishId = ref<string | null>(null)
const editWishName = ref('')
const editWishDesc = ref('')
const editWishCost = ref(1)
const editWishIcon = ref('')
const editWishStock = ref(3)

const restockingWishId = ref<string | null>(null)
const restockWishAmount = ref(1)

function openWishManage() {
  wishManagePinInput.value = ''
  wishManagePinError.value = ''
  wishManageVerified.value = false
  showAddWishItem.value = false
  editingWishId.value = null
  restockingWishId.value = null

  if (!settingsStore.hasParentPin()) {
    showPinSetup.value = true
    pinConfirmInput.value = ''
  } else {
    showWishManage.value = true
  }
}

function verifyWishManagePin() {
  wishManagePinError.value = ''
  if (!settingsStore.verifyParentPin(wishManagePinInput.value)) {
    wishManagePinError.value = 'PIN码不正确'
    return
  }
  wishManageVerified.value = true
  wishManagePinInput.value = ''
}

function closeWishManage() {
  showWishManage.value = false
  wishManageVerified.value = false
  wishManagePinInput.value = ''
  showAddWishItem.value = false
  editingWishId.value = null
  restockingWishId.value = null
}

function openAddWishItemForm() {
  newWishName.value = ''
  newWishDesc.value = ''
  newWishCost.value = 1
  newWishIcon.value = '🎁'
  newWishStock.value = 3
  showAddWishItem.value = true
}

function confirmAddWishItem() {
  const cost = Number(newWishCost.value)
  const stock = Number(newWishStock.value)
  if (!newWishName.value.trim() || !cost || cost <= 0) return
  rewardStore.addWishItem(
    newWishName.value,
    newWishDesc.value,
    cost,
    newWishIcon.value || '🎁',
    stock,
  )
  showAddWishItem.value = false
}

function startEditWishItem(item: WishItem) {
  editingWishId.value = item.id
  editWishName.value = item.name
  editWishDesc.value = item.description
  editWishCost.value = item.starCost
  editWishIcon.value = item.icon
  editWishStock.value = item.stock
}

function cancelEditWishItem() {
  editingWishId.value = null
}

function saveEditWishItem() {
  if (!editingWishId.value) return
  const cost = Number(editWishCost.value)
  const stock = Number(editWishStock.value)
  if (!editWishName.value.trim() || !cost || cost <= 0) return
  rewardStore.updateWishItem(editingWishId.value, {
    name: editWishName.value,
    description: editWishDesc.value,
    starCost: cost,
    icon: editWishIcon.value || '🎁',
    stock,
  })
  editingWishId.value = null
}

function removeWishItemById(itemId: string) {
  if (confirm('确定要删除这个商品吗？')) {
    rewardStore.removeWishItem(itemId)
  }
}

function startRestockWishItem(itemId: string) {
  restockingWishId.value = itemId
  restockWishAmount.value = 3
}

function confirmRestockWishItem() {
  if (!restockingWishId.value) return
  rewardStore.restockWishItem(restockingWishId.value, Number(restockWishAmount.value))
  restockingWishId.value = null
}

function cancelRestockWishItem() {
  restockingWishId.value = null
}

// 库存显示文本
function stockLabel(stock: number): string {
  if (stock === -1) return '不限'
  if (stock === 0) return '已兑完'
  return `剩余 ${stock}`
}

function stockColor(stock: number): string {
  if (stock === 0) return 'text-red-400'
  if (stock === -1) return 'text-green-500'
  return 'text-gray-400'
}

// ===== 钻石变动记录 =====
const showDiamondHistory = ref(false)
const diamondHistoryPageSize = 10
const diamondHistoryPage = ref(0)

const pagedDiamondHistory = computed(() => {
  const start = diamondHistoryPage.value * diamondHistoryPageSize
  return rewardStore.diamondHistory.slice(start, start + diamondHistoryPageSize)
})

const totalDiamondHistoryPages = computed(() => {
  return Math.max(1, Math.ceil(rewardStore.diamondHistory.length / diamondHistoryPageSize))
})

// ===== 数据管理（导出/导入/清除）=====
const { exporting, importing, importMessage, importSuccess, exportAllData, triggerImport, clearAllData } = useDataManager()
const showDataManage = ref(false)
const showClearConfirm = ref(false)
const dataManagePinInput = ref('')
const dataManagePinError = ref(false)
const importFileInput = ref<HTMLInputElement | null>(null)

function openDataManage() {
  showDataManage.value = true
  dataManagePinInput.value = ''
  dataManagePinError.value = false
}

function handleExport() {
  exportAllData()
}

function handleImportClick() {
  importFileInput.value?.click()
}

function handleImportChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    triggerImport(input)
  }
}

function handleClear() {
  clearAllData()
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

    <!-- 家长调整钻石 -->
    <div class="card mb-4 border-2 border-blue-200 bg-blue-50">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <Gem class="w-5 h-5 text-blue-500" />
        </div>
        <div class="flex-1">
          <p class="font-title text-base text-gray-800">家长调整钻石</p>
          <p class="text-xs text-gray-500">家长可手动调整钻石数量（成就解锁会自动获得钻石）</p>
        </div>
        <Lock v-if="settingsStore.hasParentPin()" class="w-4 h-4 text-blue-400" />
      </div>

      <button
        @click="openAddDiamonds"
        class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all"
      >
        <Plus class="w-4 h-4" />
        <span class="text-sm font-medium">调整钻石</span>
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

    <!-- 调整钻石弹窗 -->
    <div v-if="showAddDiamonds" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-3xl p-6 w-80 mx-4 shadow-xl">
        <div class="flex items-center gap-2 mb-4">
          <Gem class="w-5 h-5 text-blue-500" />
          <h3 class="font-title text-lg">调整钻石</h3>
        </div>

        <!-- 成功提示 -->
        <div v-if="addDiamondsSuccess" class="mb-4 p-3 rounded-xl bg-green-50 text-green-700 text-center text-sm">
          {{ addDiamondsSuccess }}
        </div>

        <template v-if="!addDiamondsSuccess">
          <!-- 数量选择 -->
          <p class="text-sm text-gray-500 mb-2">调整数量</p>
          <div class="flex items-center justify-center gap-3 mb-3">
            <button @click="decreaseDiamonds" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <Minus class="w-4 h-4" />
            </button>
            <div class="w-20 text-center">
              <span class="font-title text-2xl" :class="addDiamondsAmount > 0 ? 'text-green-600' : addDiamondsAmount < 0 ? 'text-red-600' : 'text-gray-800'">
                {{ addDiamondsAmount > 0 ? '+' : '' }}{{ addDiamondsAmount }}
              </span>
            </div>
            <button @click="increaseDiamonds" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <Plus class="w-4 h-4" />
            </button>
          </div>

          <!-- 快捷按钮 -->
          <div class="flex gap-2 mb-3 flex-wrap">
            <button
              v-for="n in [1, 3, 5, 10]"
              :key="n"
              @click="setDiamondAmount(n)"
              :class="[
                'px-3 py-1 rounded-full text-xs transition-all',
                addDiamondsAmount === n ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              +{{ n }}
            </button>
            <button
              v-for="n in [-1, -3, -5]"
              :key="n"
              @click="setDiamondAmount(n)"
              :class="[
                'px-3 py-1 rounded-full text-xs transition-all',
                addDiamondsAmount === n ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ n }}
            </button>
          </div>

          <!-- 原因输入 -->
          <p class="text-sm text-gray-500 mb-2">原因</p>
          <div class="flex gap-2 mb-2 flex-wrap">
            <button
              v-for="r in quickDiamondReasons"
              :key="r"
              @click="addDiamondsReason = r"
              :class="[
                'px-2.5 py-1 rounded-full text-xs transition-all',
                addDiamondsReason === r ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ r }}
            </button>
          </div>
          <input
            v-model="addDiamondsReason"
            placeholder="或输入其他原因..."
            class="w-full p-2.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none text-sm mb-4"
          />

          <!-- PIN验证 -->
          <div class="flex items-center gap-2 mb-2">
            <Lock class="w-4 h-4 text-gray-400" />
            <p class="text-sm text-gray-500">请输入家长PIN码</p>
          </div>
          <input
            v-model="diamondPinInput"
            type="password"
            inputmode="numeric"
            maxlength="4"
            placeholder="PIN码"
            class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none text-lg text-center tracking-widest mb-3"
            @keyup.enter="confirmAddDiamonds"
          />
          <p v-if="diamondPinError" class="text-sm text-red-500 mb-3 text-center">{{ diamondPinError }}</p>

          <div class="flex gap-2">
            <button @click="showAddDiamonds = false" class="btn-secondary flex-1">取消</button>
            <button @click="confirmAddDiamonds" class="btn-primary flex-1">确认</button>
          </div>
        </template>
      </div>
    </div>

    <!-- 心愿商品管理 -->
    <div class="card mb-4 border-2 border-orange-200 bg-orange-50">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
          <Star class="w-5 h-5 text-orange-500" />
        </div>
        <div class="flex-1">
          <p class="font-title text-base text-gray-800">心愿商品管理</p>
          <p class="text-xs text-gray-500">管理星星兑换商品及库存，需PIN验证</p>
        </div>
        <Lock class="w-4 h-4 text-orange-400" />
      </div>

      <button
        @click="openWishManage"
        class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-all"
      >
        <Package class="w-4 h-4" />
        <span class="text-sm font-medium">管理心愿商品</span>
      </button>
    </div>

    <!-- 钻石商品管理 -->
    <div class="card mb-4 border-2 border-cyan-200 bg-cyan-50">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
          <Package class="w-5 h-5 text-cyan-500" />
        </div>
        <div class="flex-1">
          <p class="font-title text-base text-gray-800">钻石商品管理</p>
          <p class="text-xs text-gray-500">管理钻石兑换商品，需PIN验证</p>
        </div>
        <Lock class="w-4 h-4 text-cyan-400" />
      </div>

      <button
        @click="openDiamondManage"
        class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-all"
      >
        <Package class="w-4 h-4" />
        <span class="text-sm font-medium">管理钻石商品</span>
      </button>
    </div>

    <!-- 钻石商品管理弹窗 -->
    <div v-if="showDiamondManage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-3xl p-6 w-96 mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <Package class="w-5 h-5 text-cyan-500" />
            <h3 class="font-title text-lg">钻石商品管理</h3>
          </div>
          <button @click="closeDiamondManage" class="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
        </div>

        <!-- PIN验证 -->
        <template v-if="!diamondManageVerified">
          <p class="text-sm text-gray-500 mb-3">请输入家长PIN码以管理钻石商品</p>
          <input
            v-model="diamondManagePinInput"
            type="password"
            inputmode="numeric"
            maxlength="4"
            placeholder="PIN码"
            class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 outline-none text-lg text-center tracking-widest mb-3"
            @keyup.enter="verifyDiamondManagePin"
          />
          <p v-if="diamondManagePinError" class="text-sm text-red-500 mb-3 text-center">{{ diamondManagePinError }}</p>
          <div class="flex gap-2">
            <button @click="closeDiamondManage" class="btn-secondary flex-1">取消</button>
            <button @click="verifyDiamondManagePin" class="btn-primary flex-1">验证</button>
          </div>
        </template>

        <!-- 管理界面 -->
        <template v-else>
          <!-- 新增商品表单 -->
          <div v-if="showAddDiamondItem" class="mb-4 p-3 rounded-xl bg-cyan-50 border border-cyan-200">
            <p class="text-sm font-medium text-gray-700 mb-2">新增商品</p>
            <div class="flex gap-2 mb-2">
              <input
                v-model="newItemIcon"
                placeholder="图标"
                maxlength="2"
                class="w-14 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-center text-lg"
              />
              <input
                v-model="newItemName"
                placeholder="商品名称"
                class="flex-1 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm"
              />
            </div>
            <input
              v-model="newItemDesc"
              placeholder="商品描述"
              class="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm mb-2"
            />
            <div class="flex items-center gap-2 mb-2">
              <span class="text-sm text-gray-500">钻石成本</span>
              <input
                v-model.number="newItemCost"
                type="number"
                min="1"
                class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm"
              />
              <span class="text-sm text-gray-500 ml-2">库存</span>
              <input
                v-model.number="newItemStock"
                type="number"
                min="-1"
                class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm"
              />
              <span class="text-xs text-gray-400">-1=不限</span>
            </div>
            <div class="flex gap-2">
              <button @click="showAddDiamondItem = false" class="btn-secondary flex-1 text-sm">取消</button>
              <button @click="confirmAddDiamondItem" class="btn-primary flex-1 text-sm">添加</button>
            </div>
          </div>

          <!-- 新增按钮 -->
          <button
            v-if="!showAddDiamondItem"
            @click="openAddDiamondItemForm"
            class="w-full flex items-center justify-center gap-2 py-2 mb-3 rounded-xl border-2 border-dashed border-cyan-300 text-cyan-600 hover:bg-cyan-50 transition-all"
          >
            <Plus class="w-4 h-4" />
            <span class="text-sm">新增商品</span>
          </button>

          <!-- 商品列表 -->
          <div class="space-y-2">
            <div
              v-for="item in rewardStore.diamondItems"
              :key="item.id"
              class="p-3 rounded-xl bg-gray-50"
            >
              <!-- 补货模式 -->
              <template v-if="restockingItemId === item.id">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm text-gray-600">补货数量</span>
                  <input
                    v-model.number="restockAmount"
                    type="number"
                    min="-1"
                    class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm"
                  />
                  <span class="text-xs text-gray-400">-1=不限</span>
                </div>
                <div class="flex gap-2">
                  <button @click="cancelRestockDiamondItem" class="btn-secondary flex-1 text-sm">取消</button>
                  <button @click="confirmRestockDiamondItem" class="btn-primary flex-1 text-sm">确认补货</button>
                </div>
              </template>

              <!-- 编辑模式 -->
              <template v-else-if="editingItemId === item.id">
                <div class="flex gap-2 mb-2">
                  <input
                    v-model="editItemIcon"
                    placeholder="图标"
                    maxlength="2"
                    class="w-14 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-center text-lg"
                  />
                  <input
                    v-model="editItemName"
                    placeholder="名称"
                    class="flex-1 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm"
                  />
                </div>
                <input
                  v-model="editItemDesc"
                  placeholder="描述"
                  class="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm mb-2"
                />
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm text-gray-500">成本</span>
                  <input
                    v-model.number="editItemCost"
                    type="number"
                    min="1"
                    class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm"
                  />
                  <span class="text-sm text-gray-500 ml-2">库存</span>
                  <input
                    v-model.number="editItemStock"
                    type="number"
                    min="-1"
                    class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-cyan-500 outline-none text-sm"
                  />
                </div>
                <div class="flex gap-2">
                  <button @click="cancelEditDiamondItem" class="btn-secondary flex-1 text-sm">取消</button>
                  <button @click="saveEditDiamondItem" class="btn-primary flex-1 text-sm">保存</button>
                </div>
              </template>

              <!-- 显示模式 -->
              <template v-else>
                <div class="flex items-center gap-2">
                  <span class="text-2xl">{{ item.icon }}</span>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <p class="text-sm font-medium text-gray-800 truncate">{{ item.name }}</p>
                      <span v-if="!item.custom" class="text-xs px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-500">预置</span>
                      <span v-if="item.custom" class="text-xs px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-600">自定义</span>
                    </div>
                    <p class="text-xs text-gray-500 truncate">{{ item.description }}</p>
                    <p class="text-xs" :class="stockColor(item.stock)">{{ stockLabel(item.stock) }}</p>
                  </div>
                  <span class="flex items-center gap-0.5 text-sm font-medium text-cyan-600 whitespace-nowrap">
                    <Gem class="w-3.5 h-3.5" />
                    {{ item.diamondCost }}
                  </span>
                </div>
                <div class="flex gap-1.5 mt-2 flex-wrap">
                  <button
                    @click="startEditDiamondItem(item)"
                    class="flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 text-xs"
                  >
                    <Pencil class="w-3 h-3" />
                    修改
                  </button>
                  <button
                    @click="startRestockDiamondItem(item.id)"
                    class="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 text-xs"
                  >
                    <RotateCcw class="w-3 h-3" />
                    补货
                  </button>
                  <button
                    v-if="item.custom"
                    @click="removeDiamondItemById(item.id)"
                    class="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 text-xs"
                  >
                    <Trash2 class="w-3 h-3" />
                    删除
                  </button>
                </div>
              </template>
            </div>
          </div>

          <div class="flex gap-2 mt-4">
            <button @click="closeDiamondManage" class="btn-secondary flex-1">关闭</button>
          </div>
        </template>
      </div>
    </div>

    <!-- 心愿商品管理弹窗 -->
    <div v-if="showWishManage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-3xl p-6 w-96 mx-4 shadow-xl max-h-[85vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <Star class="w-5 h-5 text-orange-500" />
            <h3 class="font-title text-lg">心愿商品管理</h3>
          </div>
          <button @click="closeWishManage" class="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
        </div>

        <!-- PIN验证 -->
        <template v-if="!wishManageVerified">
          <p class="text-sm text-gray-500 mb-3">请输入家长PIN码以管理心愿商品</p>
          <input
            v-model="wishManagePinInput"
            type="password"
            inputmode="numeric"
            maxlength="4"
            placeholder="PIN码"
            class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 outline-none text-lg text-center tracking-widest mb-3"
            @keyup.enter="verifyWishManagePin"
          />
          <p v-if="wishManagePinError" class="text-sm text-red-500 mb-3 text-center">{{ wishManagePinError }}</p>
          <div class="flex gap-2">
            <button @click="closeWishManage" class="btn-secondary flex-1">取消</button>
            <button @click="verifyWishManagePin" class="btn-primary flex-1">验证</button>
          </div>
        </template>

        <!-- 管理界面 -->
        <template v-else>
          <!-- 新增商品表单 -->
          <div v-if="showAddWishItem" class="mb-4 p-3 rounded-xl bg-orange-50 border border-orange-200">
            <p class="text-sm font-medium text-gray-700 mb-2">新增商品</p>
            <div class="flex gap-2 mb-2">
              <input
                v-model="newWishIcon"
                placeholder="图标"
                maxlength="2"
                class="w-14 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-center text-lg"
              />
              <input
                v-model="newWishName"
                placeholder="商品名称"
                class="flex-1 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm"
              />
            </div>
            <input
              v-model="newWishDesc"
              placeholder="商品描述"
              class="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm mb-2"
            />
            <div class="flex items-center gap-2 mb-2">
              <span class="text-sm text-gray-500">星星成本</span>
              <input
                v-model.number="newWishCost"
                type="number"
                min="1"
                class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm"
              />
              <span class="text-sm text-gray-500 ml-2">库存</span>
              <input
                v-model.number="newWishStock"
                type="number"
                min="-1"
                class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm"
              />
              <span class="text-xs text-gray-400">-1=不限</span>
            </div>
            <div class="flex gap-2">
              <button @click="showAddWishItem = false" class="btn-secondary flex-1 text-sm">取消</button>
              <button @click="confirmAddWishItem" class="btn-primary flex-1 text-sm">添加</button>
            </div>
          </div>

          <!-- 新增按钮 -->
          <button
            v-if="!showAddWishItem"
            @click="openAddWishItemForm"
            class="w-full flex items-center justify-center gap-2 py-2 mb-3 rounded-xl border-2 border-dashed border-orange-300 text-orange-600 hover:bg-orange-50 transition-all"
          >
            <Plus class="w-4 h-4" />
            <span class="text-sm">新增商品</span>
          </button>

          <!-- 商品列表 -->
          <div class="space-y-2">
            <div
              v-for="item in rewardStore.wishItems"
              :key="item.id"
              class="p-3 rounded-xl bg-gray-50"
            >
              <!-- 补货模式 -->
              <template v-if="restockingWishId === item.id">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm text-gray-600">补货数量</span>
                  <input
                    v-model.number="restockWishAmount"
                    type="number"
                    min="-1"
                    class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm"
                  />
                  <span class="text-xs text-gray-400">-1=不限</span>
                </div>
                <div class="flex gap-2">
                  <button @click="cancelRestockWishItem" class="btn-secondary flex-1 text-sm">取消</button>
                  <button @click="confirmRestockWishItem" class="btn-primary flex-1 text-sm">确认补货</button>
                </div>
              </template>

              <!-- 编辑模式 -->
              <template v-else-if="editingWishId === item.id">
                <div class="flex gap-2 mb-2">
                  <input
                    v-model="editWishIcon"
                    placeholder="图标"
                    maxlength="2"
                    class="w-14 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-center text-lg"
                  />
                  <input
                    v-model="editWishName"
                    placeholder="名称"
                    class="flex-1 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm"
                  />
                </div>
                <input
                  v-model="editWishDesc"
                  placeholder="描述"
                  class="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm mb-2"
                />
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-sm text-gray-500">成本</span>
                  <input
                    v-model.number="editWishCost"
                    type="number"
                    min="1"
                    class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm"
                  />
                  <span class="text-sm text-gray-500 ml-2">库存</span>
                  <input
                    v-model.number="editWishStock"
                    type="number"
                    min="-1"
                    class="w-20 p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 outline-none text-sm"
                  />
                </div>
                <div class="flex gap-2">
                  <button @click="cancelEditWishItem" class="btn-secondary flex-1 text-sm">取消</button>
                  <button @click="saveEditWishItem" class="btn-primary flex-1 text-sm">保存</button>
                </div>
              </template>

              <!-- 显示模式 -->
              <template v-else>
                <div class="flex items-center gap-2">
                  <span class="text-2xl">{{ item.icon }}</span>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <p class="text-sm font-medium text-gray-800 truncate">{{ item.name }}</p>
                      <span v-if="!item.custom" class="text-xs px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-500">预置</span>
                      <span v-if="item.custom" class="text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">自定义</span>
                    </div>
                    <p class="text-xs text-gray-500 truncate">{{ item.description }}</p>
                    <p class="text-xs" :class="stockColor(item.stock)">{{ stockLabel(item.stock) }}</p>
                  </div>
                  <span class="flex items-center gap-0.5 text-sm font-medium text-orange-600 whitespace-nowrap">
                    <Star class="w-3.5 h-3.5" />
                    {{ item.starCost }}
                  </span>
                </div>
                <div class="flex gap-1.5 mt-2 flex-wrap">
                  <button
                    @click="startEditWishItem(item)"
                    class="flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 text-xs"
                  >
                    <Pencil class="w-3 h-3" />
                    修改
                  </button>
                  <button
                    @click="startRestockWishItem(item.id)"
                    class="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 text-xs"
                  >
                    <RotateCcw class="w-3 h-3" />
                    补货
                  </button>
                  <button
                    v-if="item.custom"
                    @click="removeWishItemById(item.id)"
                    class="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 text-xs"
                  >
                    <Trash2 class="w-3 h-3" />
                    删除
                  </button>
                </div>
              </template>
            </div>
          </div>

          <div class="flex gap-2 mt-4">
            <button @click="closeWishManage" class="btn-secondary flex-1">关闭</button>
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

    <!-- 钻石变动记录 -->
    <div class="card mb-4">
      <button
        @click="showDiamondHistory = !showDiamondHistory"
        class="w-full flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <Gem class="w-5 h-5 text-blue-500" />
          <span class="font-title text-base text-gray-800">钻石变动记录</span>
          <span class="text-xs text-gray-400">({{ rewardStore.diamondHistory.length }}条)</span>
        </div>
        <ChevronDown v-if="!showDiamondHistory" class="w-5 h-5 text-gray-400" />
        <ChevronUp v-else class="w-5 h-5 text-gray-400" />
      </button>

      <div v-if="showDiamondHistory" class="mt-4">
        <div v-if="rewardStore.diamondHistory.length === 0" class="text-center py-6 text-gray-400 text-sm">
          暂无记录
        </div>
        <div v-else class="space-y-2 max-h-80 overflow-y-auto">
          <div
            v-for="record in pagedDiamondHistory"
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
        <div v-if="totalDiamondHistoryPages > 1" class="flex items-center justify-center gap-2 mt-3">
          <button
            @click="diamondHistoryPage = Math.max(0, diamondHistoryPage - 1)"
            :disabled="diamondHistoryPage === 0"
            class="px-3 py-1 rounded-lg text-sm bg-gray-100 disabled:opacity-40"
          >
            上一页
          </button>
          <span class="text-sm text-gray-500">{{ diamondHistoryPage + 1 }}/{{ totalDiamondHistoryPages }}</span>
          <button
            @click="diamondHistoryPage = Math.min(totalDiamondHistoryPages - 1, diamondHistoryPage + 1)"
            :disabled="diamondHistoryPage >= totalDiamondHistoryPages - 1"
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

    <!-- 数据管理（导出/导入/清除）-->
    <div class="card mb-4 border-2 border-emerald-200 bg-emerald-50">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <Package class="w-5 h-5 text-emerald-600" />
          <p class="font-title text-base text-gray-800">数据管理</p>
        </div>
        <button @click="openDataManage" class="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
          <ChevronDown v-if="!showDataManage" class="w-4 h-4" />
          <ChevronUp v-else class="w-4 h-4" />
          {{ showDataManage ? '收起' : '展开' }}
        </button>
      </div>
      <div v-if="!showDataManage" class="text-sm text-gray-500">
        <span class="font-medium">管理学习数据</span>
        <span> · 导出备份、导入恢复、清除数据</span>
      </div>
      <div v-else class="space-y-3">
        <p class="text-sm text-gray-600">导出当前设备的学习进度、答题记录、奖励数据为 JSON 文件，可在其他设备导入恢复。建议定期备份。</p>

        <!-- 导出按钮 -->
        <button
          @click="handleExport"
          :disabled="exporting"
          class="w-full p-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Download class="w-4 h-4" />
          {{ exporting ? '导出中...' : '导出数据（备份）' }}
        </button>

        <!-- 导入按钮 -->
        <button
          @click="handleImportClick"
          :disabled="importing"
          class="w-full p-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Upload class="w-4 h-4" />
          {{ importing ? '导入中...' : '导入数据（恢复）' }}
        </button>
        <input
          ref="importFileInput"
          type="file"
          accept=".json,application/json"
          class="hidden"
          @change="handleImportChange"
        />

        <!-- 导入提示 -->
        <div v-if="importMessage" :class="importSuccess ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'" class="p-2 rounded-lg text-sm text-center">
          {{ importMessage }}
        </div>

        <!-- 清除数据 -->
        <div class="pt-2 border-t border-gray-200">
          <button
            v-if="!showClearConfirm"
            @click="showClearConfirm = true"
            class="w-full p-3 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
          >
            <Trash2 class="w-4 h-4" />
            清除所有数据
          </button>
          <div v-else class="space-y-2">
            <div class="flex items-center gap-2 p-2 bg-red-50 rounded-lg text-red-700 text-sm">
              <AlertTriangle class="w-4 h-4 flex-shrink-0" />
              <span>将清除所有学习记录和奖励数据，不可恢复！</span>
            </div>
            <div class="flex gap-2">
              <button
                @click="handleClear"
                class="flex-1 p-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors text-sm"
              >确认清除</button>
              <button
                @click="showClearConfirm = false"
                class="flex-1 p-2 rounded-xl bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors text-sm"
              >取消</button>
            </div>
          </div>
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
