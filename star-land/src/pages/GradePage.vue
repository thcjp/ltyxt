<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '@/stores/course'
import { useCourseProgress } from '@/composables/useCourseProgress'
import { ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()
const { getUnitCompletion } = useCourseProgress()

const subject = computed(() => route.params.subject as string)
const grade = computed(() => Number(route.params.grade) as 1 | 2 | 3)
const meta = computed(() => courseStore.getCourseMeta(subject.value as any, grade.value))
const units = computed(() => courseStore.getUnits(subject.value as any, grade.value))

const subjectColors: Record<string, string> = { chinese: 'bg-chinese', math: 'bg-math', english: 'bg-english' }

function goToUnit(unitId: string) {
  router.push(`/courses/${subject.value}/${grade.value}/${unitId}`)
}
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <button @click="router.back()" class="flex items-center gap-1 text-gray-500 mb-4 hover:text-gray-700">
      <ArrowLeft class="w-4 h-4" /> 返回
    </button>
    <h1 class="font-title text-2xl text-gray-800 mb-1">{{ meta?.title }}</h1>
    <p class="text-sm text-gray-500 mb-6">{{ meta?.subtitle }} · 共{{ units.length }}个单元</p>

    <div class="space-y-3">
      <button
        v-for="unit in units"
        :key="unit.id"
        @click="goToUnit(unit.id)"
        class="w-full card text-left hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
      >
        <div class="flex items-center gap-3">
          <div :class="subjectColors[subject]" class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-title text-sm">
            {{ unit.order }}
          </div>
          <div class="flex-1">
            <h3 class="font-medium text-gray-800">{{ unit.title }}</h3>
            <p class="text-xs text-gray-500">{{ unit.subtitle }}</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-gray-400">{{ getUnitCompletion(subject as any, grade, unit.id).completed }}/{{ unit.lessons.length }}课</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
