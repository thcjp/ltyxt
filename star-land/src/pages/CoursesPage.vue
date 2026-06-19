<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/course'
import { useCourseProgress } from '@/composables/useCourseProgress'
import type { Subject } from '@/types'
import { BookOpen, Calculator, Languages } from 'lucide-vue-next'

const router = useRouter()
const courseStore = useCourseStore()
const { getCourseCompletion } = useCourseProgress()

const subjects: { key: Subject; name: string; desc: string; icon: any; color: string; bgColor: string }[] = [
  { key: 'chinese', name: '语文', desc: '识字·拼音·阅读·作文', icon: BookOpen, color: 'text-chinese', bgColor: 'bg-chinese', },
  { key: 'math', name: '数学', desc: '数感·计算·图形·应用', icon: Calculator, color: 'text-math', bgColor: 'bg-math', },
  { key: 'english', name: '英语', desc: '字母·语音·词汇·对话', icon: Languages, color: 'text-english', bgColor: 'bg-english', },
]

function getSubjectProgress(subject: Subject) {
  let total = 0; let completed = 0
  for (let g = 1; g <= 3; g++) {
    const p = getCourseCompletion(subject, g as any)
    total += p.total; completed += p.completed
  }
  return total > 0 ? Math.round((completed / total) * 100) : 0
}

function goToSubject(subject: Subject) {
  router.push(`/courses/${subject}`)
}
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <h1 class="font-title text-2xl text-gray-800 mb-2">选择学科</h1>
    <p class="text-sm text-gray-500 mb-6">点击学科开始学习之旅</p>

    <div class="space-y-4">
      <button
        v-for="s in subjects"
        :key="s.key"
        @click="goToSubject(s.key)"
        class="w-full card text-left hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
      >
        <div class="flex items-center gap-4">
          <div :class="s.bgColor" class="w-14 h-14 rounded-2xl flex items-center justify-center">
            <component :is="s.icon" class="w-7 h-7 text-white" />
          </div>
          <div class="flex-1">
            <h3 class="font-title text-lg" :class="s.color">{{ s.name }}</h3>
            <p class="text-xs text-gray-500">{{ s.desc }}</p>
          </div>
          <div class="text-right">
            <p class="text-sm font-medium text-gray-600">{{ getSubjectProgress(s.key) }}%</p>
            <p class="text-xs text-gray-400">完成度</p>
          </div>
        </div>
        <div class="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div :class="s.bgColor" class="h-full rounded-full transition-all duration-500" :style="{ width: getSubjectProgress(s.key) + '%' }" />
        </div>
      </button>
    </div>
  </div>
</template>
