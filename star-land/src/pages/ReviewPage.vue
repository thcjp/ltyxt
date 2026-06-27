<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { RotateCcw, CheckCircle2, AlertCircle, Brain } from 'lucide-vue-next'
import { useStudyStore } from '@/stores/study'
import { useRewardStore } from '@/stores/reward'
import { useSpeech } from '@/composables/useSpeech'
import type { WrongQuestion } from '@/types'

const router = useRouter()
const studyStore = useStudyStore()
const rewardStore = useRewardStore()
const { speakWithRole } = useSpeech()

// 学科过滤
const selectedSubject = ref<'all' | 'chinese' | 'math' | 'english'>('all')

// 当前复习列表
const reviewQueue = ref<WrongQuestion[]>([])
const currentIndex = ref(0)
const showAnswer = ref(false)
const isFlipped = ref(false)
const reviewSessionStats = ref({ correct: 0, wrong: 0, total: 0 })
const sessionCompleted = ref(false)

// 今日待复习的所有错题
const allDueItems = computed(() => studyStore.dueForReview)

// 按学科过滤后的复习队列
const filteredItems = computed(() => {
  if (selectedSubject.value === 'all') return allDueItems.value
  return allDueItems.value.filter(q => q.subject === selectedSubject.value)
})

// 各学科待复习数
const subjectCounts = computed(() => {
  const counts = studyStore.dueCountBySubject
  return {
    all: allDueItems.value.length,
    chinese: counts.chinese || 0,
    math: counts.math || 0,
    english: counts.english || 0,
  }
})

// 已掌握的错题数
const masteredCount = computed(() =>
  studyStore.wrongQuestions.filter(q => q.mastered).length
)

// 需加强的错题数（连续答错或easeFactor较低）
const needStrengthenCount = computed(() =>
  studyStore.wrongQuestions.filter(q => !q.mastered && q.sm2EaseFactor < 2.0).length
)

// 初始化复习队列
function startReview(subject?: 'all' | 'chinese' | 'math' | 'english') {
  if (subject) selectedSubject.value = subject
  reviewQueue.value = [...filteredItems.value].slice(0, 20) // 每次最多复习20题
  currentIndex.value = 0
  showAnswer.value = false
  isFlipped.value = false
  reviewSessionStats.value = { correct: 0, wrong: 0, total: reviewQueue.value.length }
  sessionCompleted.value = false
}

// 翻转卡片
function flip() {
  if (!isFlipped.value) {
    isFlipped.value = true
    showAnswer.value = true
    // 朗读正确答案
    const current = reviewQueue.value[currentIndex.value]
    if (current) {
      const lang = current.subject === 'english' ? 'en' : 'zh'
      speakWithRole(current.correctAnswer, 'student', lang)
    }
  }
}

// 标记答对（SM-2调度）
function markKnown() {
  const current = reviewQueue.value[currentIndex.value]
  if (!current) return

  studyStore.reviewWrongQuestion(current.id, true)
  reviewSessionStats.value.correct++

  // 每答对一题获得1颗星星（复习奖励）
  rewardStore.addStars(1, '复习答对', 'review')

  goNext()
}

// 标记答错（SM-2重置）
function markUnknown() {
  const current = reviewQueue.value[currentIndex.value]
  if (!current) return

  studyStore.reviewWrongQuestion(current.id, false)
  reviewSessionStats.value.wrong++

  goNext()
}

// 下一题
function goNext() {
  if (currentIndex.value < reviewQueue.value.length - 1) {
    currentIndex.value++
    isFlipped.value = false
    showAnswer.value = false
  } else {
    // 复习完成
    sessionCompleted.value = true
    // 完成全部复习奖励
    if (reviewSessionStats.value.correct === reviewSessionStats.value.total && reviewSessionStats.value.total > 0) {
      rewardStore.addStars(5, '复习全部答对', 'review')
    }
  }
}

// 跳转到学科学习
function goToSubject(subject: string) {
  router.push(`/courses/${subject}`)
}

// 格式化日期
function formatDate(iso: string): string {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(iso)
  target.setHours(0, 0, 0, 0)
  const diff = Math.floor((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  if (diff <= 0) return '今日到期'
  if (diff === 1) return '明天复习'
  return `${diff}天后`
}

// 获取错题来源描述
function getSourceDesc(q: WrongQuestion): string {
  const subjectNames: Record<string, string> = { chinese: '语文', math: '数学', english: '英语' }
  return `${subjectNames[q.subject] || q.subject} ${q.grade}年级`
}

onMounted(() => {
  // 如果有到期的错题，自动准备复习队列
  if (allDueItems.value.length > 0) {
    startReview('all')
  }
})
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <h1 class="font-title text-2xl text-gray-800 mb-2">复习中心</h1>
    <p class="text-sm text-gray-500 mb-6">基于艾宾浩斯遗忘曲线的智能复习</p>

    <!-- 间隔重复科学说明（软营销） -->
    <div class="card bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 mb-6">
      <div class="flex items-start gap-3">
        <Brain class="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p class="font-medium text-sm text-gray-700">为什么复习这么重要？</p>
          <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">根据艾宾浩斯遗忘曲线，学完1天后会遗忘66%。本系统采用SM-2间隔重复算法，在你快要遗忘时精准推送复习，用最少的时间锁住记忆。连续答对3次即判定掌握，答错则自动缩短间隔加强复习。</p>
        </div>
      </div>
    </div>

    <!-- 复习统计 -->
    <div class="grid grid-cols-3 gap-3 mb-6">
      <div class="card text-center">
        <RotateCcw class="w-6 h-6 text-primary-500 mx-auto mb-1" />
        <p class="font-title text-lg">{{ allDueItems.length }}</p>
        <p class="text-xs text-gray-500">待复习</p>
      </div>
      <div class="card text-center">
        <CheckCircle2 class="w-6 h-6 text-green-500 mx-auto mb-1" />
        <p class="font-title text-lg">{{ masteredCount }}</p>
        <p class="text-xs text-gray-500">已掌握</p>
      </div>
      <div class="card text-center">
        <AlertCircle class="w-6 h-6 text-orange-500 mx-auto mb-1" />
        <p class="font-title text-lg">{{ needStrengthenCount }}</p>
        <p class="text-xs text-gray-500">需加强</p>
      </div>
    </div>

    <!-- 没有到期错题时的空状态 -->
    <div v-if="reviewQueue.length === 0 && !sessionCompleted" class="text-center py-12">
      <div class="text-5xl mb-4">🌟</div>
      <p class="font-title text-xl text-gray-800 mb-2">暂无需要复习的错题</p>
      <p class="text-sm text-gray-500 mb-6">继续学习新课程，错题会自动进入复习队列</p>
      <div class="grid grid-cols-3 gap-3 max-w-md mx-auto">
        <button @click="goToSubject('chinese')" class="card text-center py-4 hover:shadow-lg transition-shadow">
          <p class="text-2xl mb-1">📖</p>
          <p class="text-xs font-medium text-gray-700">学语文</p>
        </button>
        <button @click="goToSubject('math')" class="card text-center py-4 hover:shadow-lg transition-shadow">
          <p class="text-2xl mb-1">🔢</p>
          <p class="text-xs font-medium text-gray-700">学数学</p>
        </button>
        <button @click="goToSubject('english')" class="card text-center py-4 hover:shadow-lg transition-shadow">
          <p class="text-2xl mb-1">🌟</p>
          <p class="text-xs font-medium text-gray-700">学英语</p>
        </button>
      </div>
    </div>

    <!-- 学科筛选 + 开始复习 -->
    <div v-if="reviewQueue.length === 0 && allDueItems.length > 0" class="space-y-4">
      <div class="grid grid-cols-2 gap-3">
        <button
          v-for="subj in [
            { key: 'all', name: '全部', count: subjectCounts.all, icon: '📚' },
            { key: 'chinese', name: '语文', count: subjectCounts.chinese, icon: '📖' },
            { key: 'math', name: '数学', count: subjectCounts.math, icon: '🔢' },
            { key: 'english', name: '英语', count: subjectCounts.english, icon: '🌟' },
          ]"
          :key="subj.key"
          @click="startReview(subj.key as any)"
          :disabled="subj.count === 0"
          class="card text-left p-4 transition-all duration-200"
          :class="subj.count > 0 ? 'hover:shadow-lg cursor-pointer active:scale-[0.98]' : 'opacity-50'"
        >
          <div class="flex items-center justify-between mb-1">
            <span class="text-2xl">{{ subj.icon }}</span>
            <span v-if="subj.count > 0" class="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-0.5 rounded-full">{{ subj.count }}题</span>
          </div>
          <p class="font-medium text-sm text-gray-700">{{ subj.name }}</p>
          <p class="text-xs text-gray-400">{{ subj.count > 0 ? '点击开始复习' : '暂无错题' }}</p>
        </button>
      </div>
    </div>

    <!-- 闪卡复习进行中 -->
    <div v-if="reviewQueue.length > 0 && !sessionCompleted" class="space-y-4">
      <!-- 进度条 -->
      <div class="flex items-center justify-between text-sm text-gray-400">
        <span>第 {{ currentIndex + 1 }}/{{ reviewQueue.length }} 张</span>
        <span>✅ {{ reviewSessionStats.correct }} / ❌ {{ reviewSessionStats.wrong }}</span>
      </div>
      <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300"
          :style="{ width: `${((currentIndex + 1) / reviewQueue.length) * 100}%` }"
        />
      </div>

      <!-- 来源标签 -->
      <div class="flex items-center gap-2 text-xs text-gray-400">
        <span class="bg-gray-100 px-2 py-0.5 rounded-full">{{ getSourceDesc(reviewQueue[currentIndex]) }}</span>
        <span v-if="reviewQueue[currentIndex].reviewCount > 0" class="bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full">
          已复习{{ reviewQueue[currentIndex].reviewCount }}次
        </span>
        <span v-else class="bg-red-50 text-red-500 px-2 py-0.5 rounded-full">
          新错题
        </span>
      </div>

      <!-- 闪卡 -->
      <div
        @click="flip"
        class="card text-center py-12 cursor-pointer select-none transition-all duration-300 min-h-[200px] flex flex-col items-center justify-center"
        :class="{ 'bg-gradient-to-br from-primary-50 to-secondary-50': !isFlipped, 'bg-green-50': isFlipped }"
      >
        <p v-if="!isFlipped" class="text-xl font-title text-gray-800 px-4">{{ reviewQueue[currentIndex].question }}</p>
        <div v-else>
          <p class="text-2xl font-title text-green-700 mb-3">{{ reviewQueue[currentIndex].correctAnswer }}</p>
          <p class="text-sm text-gray-600 px-4 leading-relaxed">{{ reviewQueue[currentIndex].explanation }}</p>
        </div>
        <p v-if="!isFlipped" class="text-xs text-gray-400 mt-6">点击翻转查看答案</p>
      </div>

      <!-- 复习操作按钮 -->
      <div v-if="showAnswer" class="grid grid-cols-2 gap-3">
        <button @click="markUnknown" class="py-3 rounded-2xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors active:scale-95">
          还不会 😟
        </button>
        <button @click="markKnown" class="py-3 rounded-2xl bg-green-50 text-green-600 font-medium hover:bg-green-100 transition-colors active:scale-95">
          记住了 😊 +1⭐
        </button>
      </div>
      <p v-if="showAnswer" class="text-center text-xs text-gray-400">
        💡 答对：间隔变长，复习频率降低 | 答错：间隔重置，明天继续复习
      </p>
    </div>

    <!-- 复习完成 -->
    <div v-if="sessionCompleted" class="text-center py-12">
      <div class="text-5xl mb-4">🎉</div>
      <p class="font-title text-xl text-gray-800 mb-2">今日复习完成！</p>
      <div class="grid grid-cols-3 gap-4 max-w-xs mx-auto my-6">
        <div class="text-center">
          <p class="text-2xl font-bold text-green-500">{{ reviewSessionStats.correct }}</p>
          <p class="text-xs text-gray-400">答对</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold text-red-400">{{ reviewSessionStats.wrong }}</p>
          <p class="text-xs text-gray-400">答错</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold text-yellow-500">{{ reviewSessionStats.correct }}</p>
          <p class="text-xs text-gray-400">得⭐</p>
        </div>
      </div>
      <p v-if="reviewSessionStats.wrong > 0" class="text-sm text-gray-500 mb-4">
        答错的题目将在明天继续推送复习，坚持就是胜利！
      </p>
      <button @click="startReview('all')" class="btn-primary">
        再复习一轮
      </button>
    </div>
  </div>
</template>
