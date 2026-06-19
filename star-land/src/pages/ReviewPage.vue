<script setup lang="ts">
import { ref } from 'vue'
import { RotateCcw, BookOpen, Layers } from 'lucide-vue-next'
import type { PracticeQuestion } from '@/types'

// 模拟复习数据
const reviewItems = ref<PracticeQuestion[]>([
  { id: 'r1', type: 'flashcard', question: '3 + 5 = ?', answer: '8', hint: '用手指数一数', explanation: '3加5等于8' },
  { id: 'r2', type: 'flashcard', question: '日字怎么写？', answer: '日', hint: '一个方框加一横', explanation: '日是太阳的意思' },
  { id: 'r3', type: 'choice', question: "What color is the sky?", options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 'Blue', hint: '抬头看看天', explanation: '天空是蓝色的' },
])

const currentIndex = ref(0)
const showAnswer = ref(false)
const isFlipped = ref(false)

function flip() {
  isFlipped.value = !isFlipped.value
  showAnswer.value = true
}

function markKnown() {
  if (currentIndex.value < reviewItems.value.length - 1) {
    currentIndex.value++
    isFlipped.value = false
    showAnswer.value = false
  }
}

function markUnknown() {
  // 简化处理：重新放回队列
  isFlipped.value = false
  showAnswer.value = false
}
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <h1 class="font-title text-2xl text-gray-800 mb-2">复习中心</h1>
    <p class="text-sm text-gray-500 mb-6">温故而知新，每天复习一点点</p>

    <!-- 复习统计 -->
    <div class="grid grid-cols-3 gap-3 mb-6">
      <div class="card text-center">
        <RotateCcw class="w-6 h-6 text-primary-500 mx-auto mb-1" />
        <p class="font-title text-lg">{{ reviewItems.length }}</p>
        <p class="text-xs text-gray-500">待复习</p>
      </div>
      <div class="card text-center">
        <BookOpen class="w-6 h-6 text-secondary-500 mx-auto mb-1" />
        <p class="font-title text-lg">0</p>
        <p class="text-xs text-gray-500">已完成</p>
      </div>
      <div class="card text-center">
        <Layers class="w-6 h-6 text-chinese mx-auto mb-1" />
        <p class="font-title text-lg">0</p>
        <p class="text-xs text-gray-500">需加强</p>
      </div>
    </div>

    <!-- 闪卡复习 -->
    <div v-if="currentIndex < reviewItems.length" class="space-y-4">
      <div class="text-center text-sm text-gray-400">第 {{ currentIndex + 1 }}/{{ reviewItems.length }} 张</div>
      <div
        @click="flip"
        class="card text-center py-12 cursor-pointer select-none transition-all duration-300"
        :class="{ 'bg-gradient-to-br from-primary-50 to-secondary-50': !isFlipped, 'bg-green-50': isFlipped }"
      >
        <p v-if="!isFlipped" class="text-2xl font-title text-gray-800">{{ reviewItems[currentIndex].question }}</p>
        <div v-else>
          <p class="text-2xl font-title text-green-700 mb-2">{{ reviewItems[currentIndex].answer }}</p>
          <p class="text-sm text-gray-600">{{ reviewItems[currentIndex].explanation }}</p>
        </div>
        <p v-if="!isFlipped" class="text-xs text-gray-400 mt-4">点击翻转查看答案</p>
      </div>
      <div v-if="showAnswer" class="grid grid-cols-2 gap-3">
        <button @click="markUnknown" class="py-3 rounded-2xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors">
          还不会 😟
        </button>
        <button @click="markKnown" class="py-3 rounded-2xl bg-green-50 text-green-600 font-medium hover:bg-green-100 transition-colors">
          记住了 😊
        </button>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-4xl mb-4">🎉</p>
      <p class="font-title text-xl text-gray-800">今日复习完成！</p>
      <p class="text-sm text-gray-500 mt-2">明天继续加油哦~</p>
    </div>
  </div>
</template>
