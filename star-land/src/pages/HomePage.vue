<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import { useRewardStore } from '@/stores/reward'
import { useSettingsStore } from '@/stores/settings'
import { useRewardSystem } from '@/composables/useRewardSystem'
import { useGsap } from '@/composables/useGsap'
import { Sparkles, Star, Diamond, Flame, CheckCircle, User, Pencil, Share2, Gift, Zap, BookOpen, Brain, Heart, Trophy, ChevronRight, X } from 'lucide-vue-next'

const router = useRouter()
const progressStore = useProgressStore()
const rewardStore = useRewardStore()
const settingsStore = useSettingsStore()
const { rewardForCheckIn, checkAchievements } = useRewardSystem()
const { bounceIn, revealText } = useGsap()

const checkedIn = ref(false)
const showCheckInAnim = ref(false)
const showNameEdit = ref(false)
const nameInput = ref(settingsStore.childName)
const showShareToast = ref(false)
const shareToastMsg = ref('')
const hasSharedBefore = ref(localStorage.getItem('hasShared') === 'true')
const showShareModal = ref(false)

// 判断是否首次访问（显示营销首屏）
const isFirstVisit = ref(!localStorage.getItem('hasVisited'))
const showMarketing = ref(isFirstVisit.value)

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

// 营销卖点
const sellingPoints = [
  { icon: '📚', title: '1-6年级全覆盖', desc: '语数外3科×6年级·720课时·5000+题' },
  { icon: '🎬', title: 'AI动画教学', desc: '不是看视频，是边玩边学的互动课堂' },
  { icon: '👨‍👩‍👧', title: '家长共学设计', desc: '手把手教你怎么陪孩子，不会也能教' },
  { icon: '🎮', title: '游戏化闯关', desc: '舒尔特方格·数字迷宫·笔顺书写·趣味挑战' },
  { icon: '📝', title: '错题本+进度追踪', desc: '自动记录薄弱点，智能回溯复习' },
  { icon: '🆓', title: '完全免费', desc: '无广告·无内购·无套路' },
]

// 统计数据
const stats = [
  { value: '720', label: '课时' },
  { value: '5000+', label: '练习题' },
  { value: '18', label: '课程包' },
  { value: '6', label: '年级' },
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

function startLearning() {
  showMarketing.value = false
  localStorage.setItem('hasVisited', 'true')
}

// 分享功能
const SHARE_URL = 'http://www.cnthc.cn/xxxx.html'

function openShareModal() {
  showShareModal.value = true
}

function doShare() {
  const shareText = `我家孩子在用「星地学习平台」学语数外，1-6年级全覆盖，AI动画教学+游戏化闯关，完全免费！推荐你也试试！${SHARE_URL}`
  
  // 尝试使用Web Share API
  if (navigator.share) {
    navigator.share({
      title: '星地学习平台 - 让孩子爱上学习',
      text: shareText,
      url: SHARE_URL,
    }).then(() => {
      handleShareSuccess()
    }).catch(() => {
      // 用户取消，不做处理
    })
  } else {
    // 回退：复制到剪贴板
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText).then(() => {
        shareToastMsg.value = '链接已复制到剪贴板！去粘贴给好友吧'
      }).catch(() => {
        shareToastMsg.value = '请手动复制链接分享给好友'
      })
    } else {
      // 最终回退：选中文本
      shareToastMsg.value = '请复制此链接分享：' + SHARE_URL
    }
    handleShareSuccess()
  }
}

function handleShareSuccess() {
  if (!hasSharedBefore.value) {
    // 首次分享：奖励20星星
    rewardStore.addStars(20, '首次分享奖励', 'achievement')
    shareToastMsg.value = '分享成功！获得 20 颗⭐奖励！'
    hasSharedBefore.value = true
    localStorage.setItem('hasShared', 'true')
  } else {
    // 再次分享：奖励5星星（每天限1次）
    const today = new Date().toDateString()
    const lastShareDate = localStorage.getItem('lastShareDate')
    if (lastShareDate !== today) {
      rewardStore.addStars(5, '每日分享奖励', 'achievement')
      shareToastMsg.value = '分享成功！获得 5 颗⭐奖励！'
      localStorage.setItem('lastShareDate', today)
    } else {
      shareToastMsg.value = '今天已分享过啦，明天再来吧！'
    }
  }
  showShareToast.value = true
  showShareModal.value = false
  setTimeout(() => { showShareToast.value = false }, 3000)
}

onMounted(() => {
  localStorage.setItem('hasVisited', 'true')
  bounceIn('.area-card-0', 0)
  bounceIn('.area-card-1', 0.15)
  bounceIn('.area-card-2', 0.3)
  if (showMarketing.value) {
    revealText('.marketing-hero', 0.2)
    revealText('.marketing-stats', 0.5)
    revealText('.marketing-points', 0.8)
  }
})
</script>

<template>
  <div class="min-h-screen">
    <!-- ========== 营销首屏（首次访问显示） ========== -->
    <div v-if="showMarketing" class="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <!-- 装饰气泡 -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-xl"></div>

      <div class="relative z-10 max-w-2xl mx-auto px-4 py-8">
        <!-- 顶部Logo -->
        <div class="text-center mb-6 marketing-hero">
          <p class="text-white/80 text-sm mb-1">⭐ 星地学习平台 ⭐</p>
          <h1 class="text-white font-bold text-3xl leading-tight mb-2">
            让孩子主动喊<br/>"我还要学！"
          </h1>
          <p class="text-white/90 text-base">
            1-6年级语数外 · AI动画教学 · 家长共学 · 完全免费
          </p>
        </div>

        <!-- 数据统计 -->
        <div class="grid grid-cols-4 gap-2 mb-6 marketing-stats">
          <div v-for="stat in stats" :key="stat.label" class="bg-white/15 backdrop-blur rounded-2xl py-3 text-center">
            <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
            <div class="text-xs text-white/70">{{ stat.label }}</div>
          </div>
        </div>

        <!-- 核心卖点 -->
        <div class="grid grid-cols-2 gap-3 mb-6 marketing-points">
          <div v-for="(point, i) in sellingPoints" :key="i"
            class="bg-white/15 backdrop-blur rounded-2xl p-3 text-white">
            <div class="text-2xl mb-1">{{ point.icon }}</div>
            <div class="font-bold text-sm">{{ point.title }}</div>
            <div class="text-xs text-white/70 mt-0.5 leading-snug">{{ point.desc }}</div>
          </div>
        </div>

        <!-- 家长痛点共鸣 -->
        <div class="bg-white/15 backdrop-blur rounded-3xl p-4 mb-6 text-white text-center">
          <p class="text-sm leading-relaxed">
            💡 孩子写作业磨蹭？一学就忘？家长不会辅导？<br/>
            <span class="font-bold text-yellow-300">在这里，学习变成冒险，做题变成闯关</span><br/>
            <span class="text-xs text-white/80">家长只需按照提示陪孩子互动，不懂也能教</span>
          </p>
        </div>

        <!-- CTA按钮 -->
        <button @click="startLearning"
          class="w-full py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform active:scale-95 mb-3">
          🚀 免费开始学习
        </button>
        <p class="text-center text-white/60 text-xs">无需注册 · 直接使用 · 永久免费</p>
      </div>
    </div>

    <!-- ========== 常规首页 ========== -->
    <div v-show="!showMarketing" class="min-h-screen p-4 pt-6">
      <!-- 顶部欢迎区 -->
      <div class="flex items-center justify-between mb-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-title text-xl text-gray-800">老田和小甜甜的游戏屋</h1>
            <button @click="showMarketing = true" class="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full hover:bg-purple-200">
              ⭐ 介绍
            </button>
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
            <button @click="openNameEdit" class="text-xs text-gray-400 hover:text-primary-500 transition-colors" title="设置孩子名字">
              <Pencil class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1 bg-yellow-50 px-2.5 py-1.5 rounded-full">
            <Star class="w-4 h-4 text-star-gold fill-star-gold" />
            <span class="text-sm font-medium text-yellow-700">{{ rewardStore.stars }}</span>
          </div>
          <div class="flex items-center gap-1 bg-blue-50 px-2.5 py-1.5 rounded-full">
            <Diamond class="w-4 h-4 text-blue-500" />
            <span class="text-sm font-medium text-blue-700">{{ rewardStore.diamonds }}</span>
          </div>
          <!-- 分享按钮 -->
          <button @click="openShareModal" class="flex items-center gap-1 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-2.5 py-1.5 rounded-full text-xs font-medium hover:scale-105 transition-transform" title="分享给好友得星星">
            <Share2 class="w-3.5 h-3.5" />
            <span class="hidden sm:inline">分享得⭐</span>
          </button>
        </div>
      </div>

      <!-- 名字编辑弹窗 -->
      <div v-if="showNameEdit" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div class="bg-white rounded-3xl p-6 w-80 mx-4 shadow-xl">
          <div class="flex items-center gap-2 mb-4">
            <User class="w-5 h-5 text-primary-500" />
            <h3 class="font-title text-lg">设置孩子名字</h3>
          </div>
          <input v-model="nameInput" placeholder="输入孩子的名字..." class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 outline-none text-lg mb-4" @keyup.enter="saveName" autofocus />
          <div class="flex gap-2">
            <button @click="showNameEdit = false" class="btn-secondary flex-1">取消</button>
            <button @click="saveName" class="btn-primary flex-1">保存</button>
          </div>
        </div>
      </div>

      <!-- 签到区 -->
      <div class="card mb-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
            <Flame class="w-6 h-6 text-white" />
          </div>
          <div>
            <p class="font-title text-lg">连续学习 {{ progressStore.currentStreak }} 天</p>
            <p class="text-xs text-gray-500">坚持就是胜利！</p>
          </div>
        </div>
        <button @click="handleCheckIn" :disabled="checkedIn" class="btn-primary text-sm flex items-center gap-1" :class="{ 'opacity-50 cursor-not-allowed': checkedIn }">
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
      <div class="grid grid-cols-1 gap-3 mb-4">
        <button v-for="(area, index) in areas" :key="area.subject" @click="goToSubject(area.subject)" :class="`area-card-${index}`" class="relative overflow-hidden rounded-3xl p-5 text-white shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]">
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
      <div class="space-y-3 mb-4">
        <div v-for="task in todayTasks" :key="task.subject" @click="goToSubject(task.subject)" class="card flex items-center gap-4 cursor-pointer">
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

      <!-- 底部软营销 -->
      <div class="card bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-4">
        <div class="flex items-center gap-3">
          <div class="text-3xl">🏆</div>
          <div class="flex-1">
            <p class="font-medium text-sm text-gray-700">已陪伴孩子完成 {{ progressStore.totalCompleted }} 节课</p>
            <p class="text-xs text-gray-400">坚持学习，让孩子爱上思考！觉得好用？分享给其他家长吧 👆</p>
          </div>
        </div>
      </div>

      <!-- 分享弹窗 -->
      <div v-if="showShareModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="showShareModal = false">
        <div class="bg-white rounded-3xl p-6 max-w-sm w-full mx-4 shadow-2xl">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-title text-lg text-gray-800 flex items-center gap-2">
              <Gift class="w-5 h-5 text-pink-500" /> 分享得星星
            </h3>
            <button @click="showShareModal = false" class="text-gray-400 hover:text-gray-600">
              <X class="w-5 h-5" />
            </button>
          </div>
          <div class="text-center py-4">
            <div class="text-5xl mb-3">{{ hasSharedBefore ? '🌟' : '🎉' }}</div>
            <p class="text-gray-600 mb-2">{{ hasSharedBefore ? '继续分享给更多好友！' : '首次分享获得 20 颗⭐！' }}</p>
            <p class="text-xs text-gray-400 mb-4">{{ hasSharedBefore ? '每日分享再得 5 颗⭐' : '之后每天分享还能再得 5 颗⭐' }}</p>
            <button @click="doShare" class="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-medium hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2">
              <Share2 class="w-5 h-5" /> 立即分享
            </button>
            <p class="text-xs text-gray-400 mt-3">分享链接：{{ SHARE_URL }}</p>
          </div>
        </div>
      </div>

      <!-- 分享成功提示 -->
      <div v-if="showShareToast" class="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
        <CheckCircle class="w-5 h-5" />
        <span class="font-medium">{{ shareToastMsg }}</span>
      </div>
    </div>
  </div>
</template>
