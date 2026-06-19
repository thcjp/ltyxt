<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/course'
import { useCourseProgress } from '@/composables/useCourseProgress'
import { ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()
const { getCourseCompletion } = useCourseProgress()

const subject = computed(() => route.params.subject as string)
const metas = computed(() => courseStore.getSubjectMetas(subject.value as any))

const subjectNames: Record<string, string> = { chinese: '语文', math: '数学', english: '英语' }
const subjectColors: Record<string, string> = { chinese: 'bg-chinese', math: 'bg-math', english: 'bg-english' }

function goToGrade(grade: number) {
  router.push(`/courses/${subject.value}/${grade}`)
}
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <button @click="router.back()" class="flex items-center gap-1 text-gray-500 mb-4 hover:text-gray-700">
      <ArrowLeft class="w-4 h-4" /> 返回
    </button>
    <h1 class="font-title text-2xl text-gray-800 mb-2">{{ subjectNames[subject] || '学科' }}</h1>
    <p class="text-sm text-gray-500 mb-6">选择年级开始学习</p>

    <div class="space-y-4">
      <button
        v-for="meta in metas"
        :key="`${meta.subject}-${meta.grade}`"
        @click="goToGrade(meta.grade)"
        class="w-full card text-left hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
      >
        <div class="flex items-center gap-4">
          <div :class="subjectColors[meta.subject]" class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl">
            {{ meta.icon }}
          </div>
          <div class="flex-1">
            <h3 class="font-title text-lg">{{ meta.title }}</h3>
            <p class="text-xs text-gray-500">{{ meta.subtitle }}</p>
          </div>
          <div class="text-right">
            <p class="text-sm font-medium text-gray-600">{{ getCourseCompletion(meta.subject, meta.grade).percentage }}%</p>
          </div>
        </div>
        <div class="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div :class="subjectColors[meta.subject]" class="h-full rounded-full transition-all duration-500" :style="{ width: getCourseCompletion(meta.subject, meta.grade).percentage + '%' }" />
        </div>
      </button>
    </div>
  </div>
</template>
