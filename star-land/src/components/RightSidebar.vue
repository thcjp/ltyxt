<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRewardStore } from '@/stores/reward'
import { Star, Diamond, Users, ChevronRight } from 'lucide-vue-next'

const router = useRouter()
const rewardStore = useRewardStore()
const route = router.currentRoute
const isLessonPage = computed(() => route.value.name === 'lesson')

function goToParent() { router.push('/parent') }
function goToRewards() { router.push('/rewards') }
</script>

<template>
  <!-- 桌面端：右侧固定侧边栏 -->
  <div
    class="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-l-2xl shadow-lg border border-r-0 border-gray-100"
    :class="{ 'md:opacity-70 hover:opacity-100 transition-opacity': isLessonPage }"
  >
    <button
      @click="goToRewards"
      class="flex items-center gap-1.5 px-2 py-1.5 rounded-xl hover:bg-yellow-50 transition-colors group"
      title="查看奖励中心"
    >
      <Star class="w-5 h-5 text-star-gold fill-star-gold flex-shrink-0" />
      <span class="font-title text-sm text-yellow-700 min-w-[20px] text-center">{{ rewardStore.stars }}</span>
    </button>
    <button
      @click="goToRewards"
      class="flex items-center gap-1.5 px-2 py-1.5 rounded-xl hover:bg-blue-50 transition-colors group"
      title="查看奖励中心"
    >
      <Diamond class="w-5 h-5 text-blue-500 flex-shrink-0" />
      <span class="font-title text-sm text-blue-700 min-w-[20px] text-center">{{ rewardStore.diamonds }}</span>
    </button>
    <div class="h-px bg-gray-100 mx-1" />
    <button
      @click="goToParent"
      class="flex items-center gap-1.5 px-2 py-1.5 rounded-xl hover:bg-primary-50 transition-colors group"
      title="家长加分"
    >
      <Users class="w-5 h-5 text-primary-500 flex-shrink-0" />
      <ChevronRight class="w-3 h-3 text-gray-400 group-hover:text-primary-400" />
    </button>
  </div>

  <!-- 移动端：底部导航上方的浮动气泡 -->
  <div class="fixed right-3 bottom-20 z-30 md:hidden flex flex-col gap-1.5">
    <button
      @click="goToRewards"
      class="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-yellow-100"
      title="星星"
    >
      <Star class="w-4 h-4 text-star-gold fill-star-gold" />
      <span class="font-title text-xs text-yellow-700">{{ rewardStore.stars }}</span>
    </button>
    <button
      @click="goToRewards"
      class="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-blue-100"
      title="钻石"
    >
      <Diamond class="w-4 h-4 text-blue-500" />
      <span class="font-title text-xs text-blue-700">{{ rewardStore.diamonds }}</span>
    </button>
  </div>
</template>
