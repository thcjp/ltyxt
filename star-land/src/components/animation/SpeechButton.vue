<script setup lang="ts">
import { computed } from 'vue'
import { Volume2, VolumeX } from 'lucide-vue-next'
import { useSpeech, type SpeechRole } from '@/composables/useSpeech'

const props = defineProps<{
  text: string
  lang?: 'zh' | 'en'
  rate?: number
  size?: 'sm' | 'md' | 'lg'
  role?: SpeechRole
  isPinyin?: boolean
  isDialogue?: boolean  // 对话模式：逐行用不同角色人声朗读
}>()

const { speak, speakPinyin, speakWithRole, speakDialogue, isSpeaking, stop } = useSpeech()

function toggle() {
  if (isSpeaking.value) {
    stop()
  } else if (props.isDialogue) {
    // 对话朗读：解析角色并用不同人声逐行朗读
    speakDialogue(props.text, props.lang || 'zh')
  } else if (props.isPinyin) {
    // 拼音朗读：自动转换为中文读音（使用统一语音速度设置）
    speakPinyin(props.text, props.rate)
  } else if (props.role) {
    // 带角色朗读（使用统一语音速度设置）
    speakWithRole(props.text, props.role, props.lang || 'zh')
  } else {
    speak(props.text, props.lang || 'zh', props.rate)
  }
}

const sizeClass = computed(() => props.size === 'sm' ? 'w-6 h-6' : props.size === 'lg' ? 'w-10 h-10' : 'w-8 h-8')
const iconSize = computed(() => props.size === 'sm' ? 'w-3 h-3' : props.size === 'lg' ? 'w-5 h-5' : 'w-4 h-4')
</script>

<template>
  <button
    @click="toggle"
    :class="[sizeClass]"
    class="rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary-50 transition-all duration-200 active:scale-90"
    :title="isSpeaking ? '停止朗读' : '点击朗读'"
  >
    <VolumeX v-if="isSpeaking" :class="[iconSize, 'text-primary-500']" />
    <Volume2 v-else :class="[iconSize, 'text-gray-400']" />
  </button>
</template>
