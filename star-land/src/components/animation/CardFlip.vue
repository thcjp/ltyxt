<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'
import { Volume2 } from 'lucide-vue-next'
import { useSpeech, type SpeechRole } from '@/composables/useSpeech'

const props = defineProps<{
  front: string
  back: string
  lang?: 'zh' | 'en'
  flipOnMount?: boolean
  role?: SpeechRole
  isPinyin?: boolean
}>()

const isFlipped = ref(false)
const cardRef = ref<HTMLElement | null>(null)
const { speak, speakPinyin, speakWithRole, isSpeaking, stop: stopSpeech } = useSpeech()

function flip() {
  if (!cardRef.value) return
  isFlipped.value = !isFlipped.value

  if (isFlipped.value) {
    gsap.to(cardRef.value, {
      rotationY: 180,
      duration: 0.6,
      ease: 'back.out(1.2)',
      force3D: true,
    })
  } else {
    gsap.to(cardRef.value, {
      rotationY: 0,
      duration: 0.6,
      ease: 'back.out(1.2)',
      force3D: true,
    })
  }
}

function handleSpeak() {
  if (isSpeaking.value) {
    stopSpeech()
  } else {
    const text = isFlipped.value ? props.back : props.front
    if (props.isPinyin) {
      speakPinyin(text, 0.7)
    } else if (props.role) {
      speakWithRole(text, props.role, props.lang || 'zh')
    } else {
      speak(text, props.lang || 'zh', 0.8)
    }
  }
}
</script>

<template>
  <div class="perspective-1000">
    <div
      ref="cardRef"
      class="relative w-full cursor-pointer"
      style="transform-style: preserve-3d"
      @click="flip"
    >
      <!-- 正面 -->
      <div class="rounded-2xl p-6 bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200 text-center" style="backface-visibility: hidden">
        <p class="font-title text-2xl text-gray-800">{{ front }}</p>
      </div>
      <!-- 背面 -->
      <div class="absolute inset-0 rounded-2xl p-6 bg-gradient-to-br from-green-50 to-secondary-50 border-2 border-green-200 text-center" style="backface-visibility: hidden; transform: rotateY(180deg)">
        <p class="font-title text-2xl text-green-800">{{ back }}</p>
      </div>
    </div>
    <!-- 语音按钮 -->
    <button
      @click.stop="handleSpeak"
      class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary-50 transition-colors"
    >
      <Volume2 class="w-3.5 h-3.5" :class="isSpeaking ? 'text-primary-500' : 'text-gray-400'" />
    </button>
  </div>
</template>
