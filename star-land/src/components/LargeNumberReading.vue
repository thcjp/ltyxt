<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  grade: number
}>()

const emit = defineEmits<{
  close: []
}>()

const currentNumber = ref('')
const userInput = ref('')
const showResult = ref(false)
const isCorrect = ref(false)
const score = ref(0)

const numbers = computed(() => {
  const lists: Record<number, string[]> = {
    1: ['12', '25', '38', '47', '56'],
    2: ['105', '230', '345', '478', '560'],
    3: ['1234', '2567', '3890', '4500', '6789'],
    4: ['12345', '23456', '34567', '45678', '56789'],
    5: ['123456', '234567', '345678', '456789', '567890'],
    6: ['1234567', '2345678', '3456789', '4567890', '5678901'],
  }
  return lists[1] || lists[1]
})

const currentIdx = ref(0)
const currentNum = computed(() => numbers.value[currentIdx.value] || '')

function generateNew() {
  currentNumber.value = currentNum.value
  userInput.value = ''
  showResult.value = false
}

generateNew()

function checkAnswer() {
  isCorrect.value = userInput.value.trim() === currentNumber.value
  showResult.value = true
  if (isCorrect.value) score.value++
}

function nextRound() {
  if (currentIdx.value < numbers.value.length - 1) {
    currentIdx.value++
    generateNew()
  } else {
    emit('close')
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="emit('close')">
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-gray-800">大数读法练习</h3>
        <button @click="emit('close')" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
      </div>
      <div class="mb-2 text-sm text-green-500">得分：{{ score }}</div>
      <div class="bg-indigo-50 rounded-xl p-8 mb-4 text-center">
        <p class="text-sm text-gray-500 mb-2">请读出这个数并写出它的阿拉伯数字</p>
        <p class="text-4xl font-bold text-indigo-600 tracking-wider">{{ currentNumber }}</p>
      </div>
      <input
        v-model="userInput"
        type="text"
        placeholder="输入数字"
        class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-400 focus:outline-none text-center text-xl mb-3"
        @keyup.enter="checkAnswer"
        :disabled="showResult"
      />
      <div v-if="showResult" class="mb-3 text-center">
        <p v-if="isCorrect" class="text-green-600 font-bold">✓ 正确！</p>
        <p v-else class="text-red-500 font-bold">✗ 正确答案：{{ currentNumber }}</p>
      </div>
      <button
        v-if="!showResult"
        @click="checkAnswer"
        class="w-full py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600"
      >
        确认
      </button>
      <button
        v-else
        @click="nextRound"
        class="w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600"
      >
        {{ currentIdx < numbers.length - 1 ? '下一个' : '完成' }}
      </button>
    </div>
  </div>
</template>
