<script setup lang="ts">
import { useRouter } from 'vue-router'
import { BookOpen, Trophy, RotateCcw, Users } from 'lucide-vue-next'
import RightSidebar from '@/components/RightSidebar.vue'

const router = useRouter()

const navItems = [
  { name: '首页', icon: BookOpen, path: '/', color: 'text-primary-500' },
  { name: '课程', icon: BookOpen, path: '/courses', color: 'text-secondary-500' },
  { name: '奖励', icon: Trophy, path: '/rewards', color: 'text-star-gold' },
  { name: '复习', icon: RotateCcw, path: '/review', color: 'text-chinese' },
  { name: '家长', icon: Users, path: '/parent', color: 'text-math' },
]
</script>

<template>
  <div class="min-h-screen bg-[#FFF9F5] flex flex-col">
    <!-- 主内容区 -->
    <main class="flex-1 pb-20">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 右侧固定栏：星星/钻石/家长加分 -->
    <RightSidebar />

    <!-- 底部导航栏 -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] rounded-t-3xl z-50">
      <div class="max-w-lg mx-auto flex justify-around items-center py-2 px-4">
        <button
          v-for="item in navItems"
          :key="item.path"
          @click="router.push(item.path)"
          class="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200 hover:bg-gray-50 active:scale-95"
          :class="{ 'bg-primary-50': $route.path === item.path }"
        >
          <component :is="item.icon" :class="[item.color, 'w-5 h-5']" />
          <span class="text-xs font-body" :class="$route.path === item.path ? 'text-primary-500 font-medium' : 'text-gray-500'">
            {{ item.name }}
          </span>
        </button>
      </div>
    </nav>
  </div>
</template>
