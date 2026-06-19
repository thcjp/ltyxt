<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import { useRewardStore } from '@/stores/reward'
import { useSettingsStore } from '@/stores/settings'
import { useRewardSystem } from '@/composables/useRewardSystem'
import { useGsap } from '@/composables/useGsap'
import { Sparkles, Star, Diamond, Flame, CheckCircle, User, Pencil } from 'lucide-vue-next'

const router = useRouter()
const progressStore = useProgressStore()
const rewardStore = useRewardStore()
const settingsStore = useSettingsStore()
const { rewardForCheckIn, checkAchievements } = useRewardSystem()
const { bounceIn } = useGsap()

const checkedIn = ref(false)
const showCheckInAnim = ref(false)
const showNameEdit = ref(false)
const nameInput = ref(settingsStore.childName)

// 学科区域
const areas = [
  { name: '字灵山', subject: 'chinese' as const, desc: '语文冒险', color: 'from-purple-400 to-purple-600', icon: '📖' },
  { name: '数魔塔', subject: 'math' as const, desc: '数学探索', color: 'from-green-400 to-green-600', icon: '🔢' },
  { name: '语声森林', subject: 'english' as const, desc: '英语奇遇', color: 'from-red-400 to-red-600', icon: '🌟' },
]

// 今日任务
const todayTasks = [
  { subject: 'chinese' as const, name: '语文', icon: '📖', color: 'bg-chinese' },
  { subject: 'math' as const, name: '数学', icon: '🔢', color: 'bg-math' },
  { subject: 'english' as const, name: '英语', icon: '🌟', color: 'bg-english' },
]

function handleCheckIn() {
  if (checkedIn.value) return
  checkedIn.value = true
  showCheckInAnim.value = true
  rewardForCheckIn()
  checkAchievements()
  setTimeout(() => { showCheckInAnim.value = false }, 2000)
}

function goToSubject(subject: string) {
  router.push(`/courses/${subject}`)
}

function saveName() {
  settingsStore.setChildName(nameInput.value)
  showNameEdit.value = false
}

function openNameEdit() {
  nameInput.value = settingsStore.childName
  showNameEdit.value = true
}

onMounted(() => {
  bounceIn('.area-card-0', 0)
  bounceIn('.area-card-1', 0.15)
  bounceIn('.area-card-2', 0.3)
})
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <!-- 顶部欢迎区 -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <div class="flex items-center gap-2">
          <h1 class="font-title text-2xl text-gray-800">老甜甜和小甜甜的游戏屋</h1>
        </div>
        <div class="flex items-center gap-2 mt-1">
          <p class="text-sm text-gray-500">
            <template v-if="settingsStore.childName">
              <span class="font-medium text-primary-500">{{ settingsStore.childName }}</span>，今天也要加油哦！✨
            </template>
            <template v-else>
              今天也要加油哦！✨
            </template>
          </p>
          <button
            @click="openNameEdit"
            class="text-xs text-gray-400 hover:text-primary-500 transition-colors"
            title="设置孩子名字"
          >
            <Pencil class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full">
          <Star class="w-4 h-4 text-star-gold fill-star-gold" />
          <span class="text-sm font-medium text-yellow-700">{{ rewardStore.stars }}</span>
        </div>
        <div class="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full">
          <Diamond class="w-4 h-4 text-blue-500" />
          <span class="text-sm font-medium text-blue-700">{{ rewardStore.diamonds }}</span>
        </div>
      </div>
    </div>

    <!-- 名字编辑弹窗 -->
    <div v-if="showNameEdit" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div class="bg-white rounded-3xl p-6 w-80 mx-4 shadow-xl">
        <div class="flex items-center gap-2 mb-4">
          <User class="w-5 h-5 text-primary-500" />
          <h3 class="font-title text-lg">设置孩子名字</h3>
        </div>
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

    <!-- 签到区 -->
    <div class="card mb-6 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
          <Flame class="w-6 h-6 text-white" />
        </div>
        <div>
          <p class="font-title text-lg">连续学习 {{ progressStore.currentStreak }} 天</p>
          <p class="text-xs text-gray-500">坚持就是胜利！</p>
        </div>
      </div>
      <button
        @click="handleCheckIn"
        :disabled="checkedIn"
        class="btn-primary text-sm flex items-center gap-1"
        :class="{ 'opacity-50 cursor-not-allowed': checkedIn }"
      >
        <CheckCircle class="w-4 h-4" />
        {{ checkedIn ? '已签到' : '签到+5⭐' }}
      </button>
    </div>

    <!-- 签到动画 -->
    <div v-if="showCheckInAnim" class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div class="text-6xl animate-bounce">⭐+5</div>
    </div>

    <!-- 学习冒险地图 - 三大区域 -->
    <h2 class="font-title text-xl mb-3 text-gray-800">🗺️ 探索游戏屋</h2>
    <div class="grid grid-cols-1 gap-4 mb-6">
      <button
        v-for="(area, index) in areas"
        :key="area.subject"
        @click="goToSubject(area.subject)"
        :class="`area-card-${index}`"
        class="relative overflow-hidden rounded-3xl p-5 text-white shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
      >
        <div :class="`absolute inset-0 bg-gradient-to-br ${area.color}`" />
        <div class="relative z-10 flex items-center justify-between">
          <div class="text-left">
            <p class="text-3xl mb-1">{{ area.icon }}</p>
            <p class="font-title text-xl">{{ area.name }}</p>
            <p class="text-sm opacity-80">{{ area.desc }}</p>
          </div>
          <Sparkles class="w-8 h-8 opacity-60" />
        </div>
      </button>
    </div>

    <!-- 今日任务 -->
    <h2 class="font-title text-xl mb-3 text-gray-800">📋 今日任务</h2>
    <div class="space-y-3">
      <div
        v-for="task in todayTasks"
        :key="task.subject"
        @click="goToSubject(task.subject)"
        class="card flex items-center gap-4 cursor-pointer"
      >
        <div :class="task.color" class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg">
          {{ task.icon }}
        </div>
        <div class="flex-1">
          <p class="font-medium">{{ task.name }}练习</p>
          <p class="text-xs text-gray-500">点击开始学习</p>
        </div>
        <div class="text-primary-500 text-sm font-medium">GO →</div>
      </div>
    </div>
  </div>
</template>
