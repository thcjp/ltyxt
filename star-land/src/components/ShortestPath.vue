<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  grade: number
}>()

const emit = defineEmits<{
  close: []
}>()

interface Cell {
  row: number
  col: number
  value: number
  isWall: boolean
  isPath: boolean
}

const gridSize = 5
const grid = ref<Cell[][]>([])
const startPos = { row: 0, col: 0 }
const endPos = { row: gridSize - 1, col: gridSize - 1 }
const score = ref(0)
const showResult = ref(false)

function initGrid() {
  grid.value = []
  for (let r = 0; r < gridSize; r++) {
    const row: Cell[] = []
    for (let c = 0; c < gridSize; c++) {
      row.push({
        row: r,
        col: c,
        value: Math.floor(Math.random() * 9) + 1,
        isWall: Math.random() < 0.2 && !(r === startPos.row && c === startPos.col) && !(r === endPos.row && c === endPos.col),
        isPath: false,
      })
    }
    grid.value.push(row)
  }
  grid.value[startPos.row][startPos.col].isWall = false
  grid.value[endPos.row][endPos.col].isWall = false
  grid.value[startPos.row][startPos.col].isPath = true
}

initGrid()

const pathSum = computed(() => {
  let sum = 0
  for (const row of grid.value) {
    for (const cell of row) {
      if (cell.isPath) sum += cell.value
    }
  }
  return sum
})

function toggleCell(r: number, c: number) {
  const cell = grid.value[r][c]
  if (cell.isWall) return
  if (r === startPos.row && c === startPos.col) return
  if (r === endPos.row && c === endPos.col) return
  cell.isPath = !cell.isPath
}

function checkPath() {
  showResult.value = true
  score.value = pathSum.value
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="emit('close')">
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-gray-800">最短路径练习</h3>
        <button @click="emit('close')" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
      </div>
      <p class="text-sm text-gray-500 mb-3">从起点(左上)到终点(右下)，点击格子选路径，使路径上数字之和最小</p>
      <div class="grid gap-1 mb-4" :style="`grid-template-columns: repeat(${gridSize}, 1fr)`">
        <div
          v-for="row in grid"
          :key="row[0].row"
          class="contents"
        >
          <div
            v-for="cell in row"
            :key="`${cell.row}-${cell.col}`"
            @click="toggleCell(cell.row, cell.col)"
            class="aspect-square flex items-center justify-center rounded-lg font-bold text-sm cursor-pointer transition-colors"
            :class="{
              'bg-green-500 text-white': cell.row === startPos.row && cell.col === startPos.col,
              'bg-red-500 text-white': cell.row === endPos.row && cell.col === endPos.col,
              'bg-gray-300 text-gray-400 cursor-not-allowed': cell.isWall,
              'bg-blue-200 text-blue-700': cell.isPath && !cell.isWall,
              'bg-gray-100 text-gray-600': !cell.isPath && !cell.isWall,
            }"
          >
            {{ cell.isWall ? '🧱' : cell.value }}
          </div>
        </div>
      </div>
      <div v-if="showResult" class="mb-3 text-center">
        <p class="text-lg font-bold text-indigo-600">路径和：{{ score }}</p>
      </div>
      <div class="flex gap-3">
        <button @click="checkPath" class="flex-1 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600">
          计算路径和
        </button>
        <button @click="initGrid(); showResult = false" class="flex-1 py-3 bg-gray-400 text-white rounded-xl font-medium hover:bg-gray-500">
          重新开始
        </button>
      </div>
    </div>
  </div>
</template>
