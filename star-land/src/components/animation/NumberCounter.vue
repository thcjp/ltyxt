<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  target: number
  duration?: number
  delay?: number
  suffix?: string
}>()

const displayValue = ref('0')
const counterRef = ref<HTMLElement | null>(null)
let tween: gsap.core.Tween | null = null

onMounted(() => {
  const proxy = { value: 0 }
  tween = gsap.to(proxy, {
    value: props.target,
    duration: props.duration || 1.5,
    delay: props.delay || 0,
    ease: 'power2.out',
    snap: { value: 1 },
    onUpdate() {
      displayValue.value = String(Math.round(proxy.value)) + (props.suffix || '')
    },
    onStart() {
      if (counterRef.value) {
        gsap.fromTo(counterRef.value,
          { scale: 0.5, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(1.7)', force3D: true }
        )
      }
    },
  })
})

// 卸载时清理 tween，避免组件销毁后动画仍更新已失效的响应式状态（内存泄漏）
onUnmounted(() => {
  tween?.kill()
  tween = null
  if (counterRef.value) {
    gsap.killTweensOf(counterRef.value)
  }
})
</script>

<template>
  <span ref="counterRef" class="font-title text-3xl text-primary-600 inline-block" style="opacity: 0">
    {{ displayValue }}
  </span>
</template>
