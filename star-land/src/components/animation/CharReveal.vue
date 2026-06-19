<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { Volume2 } from 'lucide-vue-next'
import { useSpeech, type SpeechRole } from '@/composables/useSpeech'

const props = defineProps<{
  text: string
  lang?: 'zh' | 'en'
  charByChar?: boolean
  delay?: number
  role?: SpeechRole
  isPinyin?: boolean
}>()

const containerRef = ref<HTMLElement | null>(null)
const { speak, speakPinyin, speakWithRole, isSpeaking, stop: stopSpeech } = useSpeech()
let tween: gsap.core.Tween | null = null

function handleSpeak() {
  if (isSpeaking.value) {
    stopSpeech()
  } else if (props.isPinyin) {
    speakPinyin(props.text, 0.7)
  } else if (props.role) {
    speakWithRole(props.text, props.role, props.lang || 'zh')
  } else {
    speak(props.text, props.lang || 'zh', 0.8)
  }
}

onMounted(() => {
  if (!containerRef.value) return
  const el = containerRef.value

  if (props.charByChar) {
    // 逐字揭示：将文字拆分为单个字符span
    const chars = [...props.text]
    el.innerHTML = chars.map((char, i) => {
      if (char === '\n') return '<br/>'
      return `<span class="char-unit" style="display:inline-block;opacity:0;transform:translateY(20px)">${char}</span>`
    }).join('')

    // 作用域限定到当前容器，避免页面上多个 CharReveal 实例的 .char-unit 互相干扰（R27）
    const units = el.querySelectorAll('.char-unit')
    tween = gsap.to(units, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.06,
      delay: props.delay || 0,
      ease: 'back.out(1.4)',
      force3D: true,
    })
  } else {
    // 整体揭示
    tween = gsap.fromTo(el,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.8, delay: props.delay || 0, ease: 'power2.out', force3D: true }
    )
  }
})

// 卸载时清理 tween，避免组件销毁后动画仍运行（内存泄漏）
onUnmounted(() => {
  tween?.kill()
  tween = null
})
</script>

<template>
  <div class="relative group">
    <div ref="containerRef" class="font-title text-lg leading-relaxed whitespace-pre-line" />
    <button
      @click="handleSpeak"
      class="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary-50"
      :class="{ 'opacity-100': isSpeaking }"
    >
      <Volume2 class="w-3.5 h-3.5" :class="isSpeaking ? 'text-primary-500' : 'text-gray-400'" />
    </button>
  </div>
</template>
