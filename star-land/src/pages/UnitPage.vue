<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/course'
import { useProgressStore } from '@/stores/progress'
import { useCourseProgress } from '@/composables/useCourseProgress'
import { ArrowLeft, Lock, Star } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()
const progressStore = useProgressStore()
const { isLessonUnlocked } = useCourseProgress()

const subject = computed(() => route.params.subject as string)
const grade = computed(() => Number(route.params.grade) as 1 | 2 | 3)
const unitId = computed(() => route.params.unit as string)
const unit = computed(() => courseStore.getUnit(subject.value as any, grade.value, unitId.value))

const subjectColors: Record<string, string> = { chinese: 'bg-chinese', math: 'bg-math', english: 'bg-english' }

function getLessonStatus(lessonOrder: number) {
  const lesson = unit.value?.lessons.find(l => l.order === lessonOrder)
  if (!lesson) return 'locked'
  return progressStore.getLessonProgress(lesson.id)?.status || (isLessonUnlocked(subject.value as any, grade.value, unitId.value, lessonOrder) ? 'available' : 'locked')
}

function goToLesson(lessonId: string, order: number) {
  if (getLessonStatus(order) === 'locked') return
  router.push(`/courses/${subject.value}/${grade.value}/${unitId.value}/${lessonId}`)
}
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <button @click="router.back()" class="flex items-center gap-1 text-gray-500 mb-4 hover:text-gray-700">
      <ArrowLeft class="w-4 h-4" /> 返回
    </button>
    <h1 class="font-title text-2xl text-gray-800 mb-1">{{ unit?.title }}</h1>
    <p class="text-sm text-gray-500 mb-6">{{ unit?.subtitle }}</p>

    <div class="space-y-3">
      <button
        v-for="lesson in unit?.lessons"
        :key="lesson.id"
        @click="goToLesson(lesson.id, lesson.order)"
        class="w-full card text-left transition-all duration-300"
        :class="{
          'opacity-50 cursor-not-allowed': getLessonStatus(lesson.order) === 'locked',
          'hover:shadow-xl active:scale-[0.98]': getLessonStatus(lesson.order) !== 'locked',
        }"
      >
        <div class="flex items-center gap-3">
          <div :class="[subjectColors[subject], getLessonStatus(lesson.order) === 'locked' ? 'bg-gray-300' : '']" class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-title text-sm">
            <Lock v-if="getLessonStatus(lesson.order) === 'locked'" class="w-4 h-4" />
            <span v-else>{{ lesson.order }}</span>
          </div>
          <div class="flex-1">
            <h3 class="font-medium text-gray-800">{{ lesson.title }}</h3>
            <p class="text-xs text-gray-500">{{ lesson.teachingMethod }}</p>
          </div>
          <div v-if="progressStore.getLessonProgress(lesson.id)?.status === 'completed'" class="flex gap-0.5">
            <Star v-for="i in progressStore.getLessonProgress(lesson.id)?.starLevel" :key="i" class="w-4 h-4 text-star-gold fill-star-gold" />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
