<script setup lang="ts">
import { ref, computed } from 'vue'
import { X, RotateCcw, Star, MapPin, Flag, Route } from 'lucide-vue-next'

const props = defineProps<{ grade: number }>()
const emit = defineEmits<{ close: [] }>()

const gridSize = computed(() => props.grade === 1 ? 5 : props.grade === 2 ? 6 : 7)

interface Cell { row: number; col: number; isStart: boolean; isEnd: boolean; isBlocked: boolean; isPath: boolean; isCurrent: boolean; distance: number }
const phase = ref<'ready' | 'playing' | 'result'>('ready')
const grid = ref<Cell[][]>([])
const playerPath = ref<[number, number][]>([])
const optimalLength = ref(0)
const score = ref(0)
const level = ref(1)
const totalLevels = 3

function generateGrid(): Cell[][] {
  const size = gridSize.value
  const g: Cell[][] = []
  for (let r = 0; r < size; r++) {
    g[r] = []
    for (let c = 0; c < size; c++) {
      g[r][c] = { row: r, col: c, isStart: false, isEnd: false, isBlocked: false, isPath: false, isCurrent: false, distance: -1 }
    }
  }
  g[0][0].isStart = true
  g[size - 1][size - 1].isEnd = true
  const obstacleCount = props.grade === 1 ? 3 : props.grade === 2 ? 5 : 8
  const obstacles = new Set<string>()
  while (obstacles.size < obstacleCount) {
    const r = Math.floor(Math.random() * size)
    const c = Math.floor(Math.random() * size)
    const key = `${r},${c}`
    if (key !== '0,0' && key !== `${size - 1},${size - 1}` && !obstacles.has(key)) {
      obstacles.add(key)
      g[r][c].isBlocked = true
    }
  }
  const queue: [number, number, number][] = [[0, 0, 0]]
  const visited = new Set<string>()
  visited.add('0,0')
  while (queue.length > 0) {
    const [r, c, d] = queue.shift()!
    g[r][c].distance = d
    if (r === size - 1 && c === size - 1) { optimalLength.value = d; break }
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for (const [dr, dc] of dirs) {
      const nr = r + dr
      const nc = c + dc
      const key = `${nr},${nc}`
      if (nr >= 0 && nr < size && nc >= 0 && nc < size && !g[nr][nc].isBlocked && !visited.has(key)) {
        visited.add(key)
        queue.push([nr, nc, d + 1])
      }
    }
  }
  return g
}

function startGame() { level.value = 1; score.value = 0; startLevel() }
function startLevel() { grid.value = generateGrid(); playerPath.value = [[0, 0]]; grid.value[0][0].isCurrent = true; optimalLength.value = 0; phase.value = 'playing' }

function clickCell(row: number, col: number) {
  if (phase.value !== 'playing') return
  if (grid.value[row][col].isBlocked) return
  const [lr, lc] = playerPath.value[playerPath.value.length - 1]
  if (Math.abs(row - lr) + Math.abs(col - lc) !== 1) return
  const key = `${row},${col}`
  if (playerPath.value.some(([r, c]) => `${r},${c}` === key && !(r === lr && c === lc))) {
    if (playerPath.value.length >= 2) {
      const prev = playerPath.value[playerPath.value.length - 2]
      if (prev[0] === row && prev[1] === col) {
        grid.value[lr][lc].isCurrent = false
        grid.value[lr][lc].isPath = false
        playerPath.value.pop()
        grid.value[row][col].isCurrent = true
      }
    }
    return
  }
  grid.value[lr][lc].isCurrent = false
  grid.value[lr][lc].isPath = true
  playerPath.value.push([row, col])
  grid.value[row][col].isCurrent = true
  grid.value[row][col].isPath = true
  if (row === gridSize.value - 1 && col === gridSize.value - 1) {
    const pathLen = playerPath.value.length - 1
    score.value += optimalLength.value > 0 && pathLen <= optimalLength.value + 2 ? 100 : 50
    if (level.value < totalLevels) { level.value++; setTimeout(() => startLevel(), 800) }
    else { phase.value = 'result' }
  }
}

function undoLast() {
  if (playerPath.value.length <= 1) return
  const last = playerPath.value.pop()!
  grid.value[last[0]][last[1]].isCurrent = false
  grid.value[last[0]][last[1]].isPath = false
  const newLast = playerPath.value[playerPath.value.length - 1]
  grid.value[newLast[0]][newLast[1]].isCurrent = true
}

function retry() { phase.value = 'ready' }
function getCellClass(r: number, c: number): string {
  const cell = grid.value[r][c]
  if (cell.isStart) return 'bg-green-400 text-white'
  if (cell.isEnd) return 'bg-red-400 text-white'
  if (cell.isCurrent) return 'bg-primary-500 text-white shadow-lg scale-110'
  if (cell.isPath) return 'bg-primary-200 text-primary-700'
  if (cell.isBlocked) return 'bg-gray-400 text-gray-300'
  return 'bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer'
}
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2"><Route class="w-5 h-5 text-green-500" />最短路径</h2>
        <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><X class="w-5 h-5" /></button>
      </div>
      <div v-if="phase === 'ready'" class="text-center py-8">
        <div class="text-6xl mb-4">🗺️</div>
        <h3 class="font-title text-lg text-gray-700 mb-2">最短路径挑战</h3>
        <p class="text-gray-500 mb-4">从绿色起点走到红色终点，避开灰色障碍物，找到最短路径！</p>
        <div class="card bg-green-50 border border-green-200 mb-4 text-left"><p class="text-sm text-green-800"><strong>规则：</strong>点击相邻格子移动。只能上下左右走，不能斜走。路径越短得分越高！点击已走过的格子可以回退。</p></div>
        <button @click="startGame" class="btn-primary text-lg px-8 py-3">开始挑战</button>
      </div>
      <div v-if="phase === 'playing'" class="text-center py-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-500">第 {{ level }}/{{ totalLevels }} 关</span>
          <span class="text-sm text-gray-500">步数: {{ playerPath.length - 1 }}<span v-if="optimalLength > 0" class="text-green-500 ml-1">(最短: {{ optimalLength }})</span></span>
          <button @click="undoLast" class="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-500">回退</button>
        </div>
        <div class="grid gap-0.5 mx-auto mb-4" :style="{ gridTemplateColumns: `repeat(${gridSize}, 1fr)`, maxWidth: '320px' }">
          <template v-for="(row, r) in grid" :key="r">
            <button v-for="(cell, c) in row" :key="`${r}-${c}`" @click="clickCell(r, c)" class="aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200" :class="getCellClass(r, c)">
              <MapPin v-if="cell.isStart" class="w-4 h-4" />
              <Flag v-else-if="cell.isEnd" class="w-4 h-4" />
            </button>
          </template>
        </div>
        <div class="flex gap-2 justify-center text-xs text-gray-400">
          <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-green-400 inline-block" /> 起点</span>
          <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-400 inline-block" /> 终点</span>
          <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-gray-400 inline-block" /> 障碍</span>
        </div>
      </div>
      <div v-if="phase === 'result'" class="text-center py-4">
        <div class="text-6xl mb-4">🎉</div>
        <h3 class="font-title text-xl text-gray-800 mb-2">全部通关！</h3>
        <p class="text-gray-500 mb-4">总得分：{{ score }} 分</p>
        <div class="flex gap-2">
          <button @click="retry" class="btn-secondary flex items-center gap-1"><RotateCcw class="w-4 h-4" /> 再来一次</button>
          <button @click="emit('close')" class="btn-primary flex-1">完成</button>
        </div>
      </div>
    </div>
  </div>
</template>