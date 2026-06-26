<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useSpeech } from '@/composables/useSpeech'

const props = defineProps<{
  subject: 'chinese' | 'english'
  grade: number
  lessonId: string
}>()

const emit = defineEmits<{
  close: []
}>()

const { speak } = useSpeech()
const currentIndex = ref(0)
const userInput = ref('')
const showResult = ref(false)
const isCorrect = ref(false)
const completedCount = ref(0)

const words = computed(() => {
  // 根据学科返回听写词汇
  if (props.subject === 'chinese') {
    return ['美丽', '快乐', '朋友', '学校', '学习']
  }
  return ['apple', 'banana', 'cat', 'dog', 'egg']
})

const currentWord = computed(() => words.value[currentIndex.value] || '')
const totalCount = computed(() => words.value.length)

function playWord() {
  speak(currentWord.value)
}

function checkAnswer() {
  isCorrect.value = userInput.value.trim() === currentWord.value
  showResult.value = true
  if (isCorrect.value) {
    completedCount.value++
  }
}

function nextWord() {
  if (currentIndex.value < totalCount.value - 1) {
    currentIndex.value++
    userInput.value = ''
    showResult.value = false
  } else {
    emit('close')
  }
}

function handleClose() {
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="handleClose">
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-gray-800">
          {{ subject === 'chinese' ? '听写练习' : 'Dictation Practice' }}
        </h3>
        <button @click="handleClose" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
      </div>

      <div class="mb-2 text-sm text-gray-500">
        {{ currentIndex + 1 }} / {{ totalCount }}
        <span class="ml-2 text-green-500">已完成 {{ completedCount }} 个</span>
      </div>

      <div class="bg-blue-50 rounded-xl p-6 mb-4 text-center">
        <p class="text-sm text-gray-500 mb-3">点击喇叭听写</p>
        <button @click="playWord" class="text-4xl hover:scale-110 transition-transform">
          🔊
        </button>
      </div>

      <div class="mb-4">
        <input
          v-model="userInput"
          type="text"
          :placeholder="subject === 'chinese' ? '请写出听到的词语' : 'Write the word you hear'"
          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none text-center text-lg"
          @keyup.enter="checkAnswer"
          :disabled="showResult"
        />
      </div>

      <div v-if="showResult" class="mb-4 text-center">
        <p v-if="isCorrect" class="text-green-600 font-bold text-lg">✓ 正确！</p>
        <p v-else class="text-red-500 font-bold text-lg">
          ✗ 正确答案：{{ currentWord }}
        </p>
      </div>

      <div class="flex gap-3">
        <button
          v-if="!showResult"
          @click="checkAnswer"
          class="flex-1 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
        >
          确认
        </button>
        <button
          v-else
          @click="nextWord"
          class="flex-1 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
        >
          {{ currentIndex < totalCount - 1 ? '下一个' : '完成' }}
        </button>
      </div>
    </div>
  </div>
</template>
