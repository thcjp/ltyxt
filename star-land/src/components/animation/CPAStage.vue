<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  concrete: string  // 实物描述（如"3个苹果🍎🍎🍎"）
  pictorial: string // 图示描述（如"●●●"）
  abstract: string  // 符号描述（如"3"）
  delay?: number
}>()

const stageRef = ref<HTMLElement | null>(null)
const currentStage = ref(0) // 0=实物, 1=图示, 2=符号
let tl: gsap.core.Timeline | null = null

const stages = [
  { label: '实物', emoji: '🍎', content: props.concrete, color: 'bg-green-50 border-green-200 text-green-800' },
  { label: '图示', emoji: '📊', content: props.pictorial, color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { label: '符号', emoji: '🔢', content: props.abstract, color: 'bg-purple-50 border-purple-200 text-purple-800' },
]

onMounted(() => {
  if (!stageRef.value) return

  tl = gsap.timeline({ delay: props.delay || 0 })

  // 三个阶段依次出现
  stages.forEach((_, i) => {
    tl.call(() => { currentStage.value = i }, null, i * 1.2)
    tl.fromTo(`.cpa-stage-${i}`,
      { autoAlpha: 0, scale: 0.5, y: 20 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)', force3D: true },
      i * 1.2
    )
  })

  // 箭头动画
  tl.fromTo('.cpa-arrow',
    { autoAlpha: 0, scaleX: 0 },
    { autoAlpha: 1, scaleX: 1, duration: 0.4, stagger: 0.3, ease: 'power2.out', force3D: true },
    0.8
  )
})

// 卸载时清理时间线，避免回调在组件销毁后仍修改 currentStage（内存泄漏）
onUnmounted(() => {
  tl?.kill()
  tl = null
})
</script>

<template>
  <div ref="stageRef" class="space-y-2">
    <div class="flex items-center gap-1 mb-2">
      <span v-for="(s, i) in stages" :key="i" class="text-xs px-2 py-0.5 rounded-full transition-all duration-300" :class="currentStage >= i ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-400'">
        {{ s.label }}
      </span>
    </div>
    <div class="flex items-center gap-3 flex-wrap">
      <div v-for="(stage, i) in stages" :key="i" :class="[`cpa-stage-${i}`, stage.color, 'rounded-2xl p-3 border-2 text-center min-w-[80px]']" style="opacity: 0">
        <p class="text-2xl mb-1">{{ stage.emoji }}</p>
        <p class="font-title text-sm">{{ stage.content }}</p>
      </div>
      <span v-if="stages.length > 1" class="cpa-arrow text-primary-400 text-xl" style="opacity: 0">→</span>
    </div>
  </div>
</template>
