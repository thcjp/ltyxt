<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { X, RotateCcw, Star, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-vue-next'

const props = defineProps<{ grade: number }>()
const emit = defineEmits<{ close: [] }>()

const mazeSize = computed(() => props.grade === 1 ? 5 : props.grade === 2 ? 6 : 7)

interface Cell { value: number; isPath: boolean; isStart: boolean; isEnd: boolean; visited: boolean; isCurrent: boolean }
const phase = ref<'ready' | 'playing' | 'result'>('ready')
const maze = ref<Cell[][]>([])
const playerPos = ref({ row: 0, col: 0 })
const steps = ref(0)
const score = ref(0)
const level = ref(1)
const totalLevels = 3
const message = ref('')

function generateMaze(): Cell[][] {
  const size = mazeSize.value; const grid: Cell[][] = []
  for (let r = 0; r < size; r++) { grid[r] = []; for (let c = 0; c < size; c++) { grid[r][c] = { value: Math.floor(Math.random() * 9) + 1, isPath: false, isStart: r === 0 && c === 0, isEnd: r === size - 1 && c === size - 1, visited: false, isCurrent: false } } }
  const visited = new Set<string>(); const stack: [number, number][] = [[0, 0]]
  while (stack.length > 0) {
    const [r, c] = stack[stack.length - 1]; visited.add(`${r},${c}`)
    if (r === size - 1 && c === size - 1) break
    const neighbors: [number, number][] = []; const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for (const [dr, dc] of dirs) { const nr = r + dr; const nc = c + dc; if (nr >= 0 && nr < size && nc >= 0 && nc < size && !visited.has(`${nr},${nc}`)) { const distToEnd = Math.abs(nr - (size - 1)) + Math.abs(nc - (size - 1)); const distCurr = Math.abs(r - (size - 1)) + Math.abs(c - (size - 1)); if (distToEnd <= distCurr || Math.random() > 0.3) neighbors.push([nr, nc]) } }
    if (neighbors.length > 0) { stack.push(neighbors[Math.floor(Math.random() * neighbors.length)]) } else { stack.pop() }
  }
  for (const [r, c] of stack) { grid[r][c].isPath = true }
  grid[0][0].isPath = true; grid[size - 1][size - 1].isPath = true
  let pathValue = 1; for (const [r, c] of stack) { grid[r][c].value = pathValue; pathValue++ }
  return grid
}

function startGame() { level.value = 1; score.value = 0; startLevel() }
function startLevel() { maze.value = generateMaze(); playerPos.value = { row: 0, col: 0 }; steps.value = 0; message.value = ''; phase.value = 'playing'; maze.value[0][0].isCurrent = true }

function movePlayer(dr: number, dc: number) {
  if (phase.value !== 'playing') return
  const size = mazeSize.value; const newRow = playerPos.value.row + dr; const newCol = playerPos.value.col + dc
  if (newRow < 0 || newRow >= size || newCol < 0 || newCol >= size) { message.value = '不能走出迷宫！'; return }
  if (!maze.value[newRow][newCol].isPath) { message.value = '此路不通！请走数字路径'; return }
  maze.value[playerPos.value.row][playerPos.value.col].isCurrent = false; maze.value[playerPos.value.row][playerPos.value.col].visited = true
  playerPos.value = { row: newRow, col: newCol }; maze.value[newRow][newCol].isCurrent = true; steps.value++; message.value = ''
  if (newRow === size - 1 && newCol === size - 1) { score.value += Math.max(100 - steps.value * 2, 10); if (level.value < totalLevels) { level.value++; message.value = `第${level.value - 1}关完成！进入第${level.value}关`; setTimeout(() => startLevel(), 1000) } else { phase.value = 'result' } }
}

function retry() { phase.value = 'ready' }
function handleKeydown(e: KeyboardEvent) { if (phase.value !== 'playing') return; switch (e.key) { case 'ArrowUp': case 'w': case 'W': movePlayer(-1, 0); break; case 'ArrowDown': case 's': case 'S': movePlayer(1, 0); break; case 'ArrowLeft': case 'a': case 'A': movePlayer(0, -1); break; case 'ArrowRight': case 'd': case 'D': movePlayer(0, 1); break } }
onMounted(() => { window.addEventListener('keydown', handleKeydown) })
onUnmounted(() => { window.removeEventListener('keydown', handleKeydown) })
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4"><h2 class="font-title text-xl text-gray-800 flex items-center gap-2"><span class="text-2xl">🌀</span>数字迷宫</h2><button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><X class="w-5 h-5" /></button></div>
      <div v-if="phase === 'ready'" class="text-center py-8">
        <div class="text-6xl mb-4">🌀</div><h3 class="font-title text-lg text-gray-700 mb-2">数字迷宫</h3><p class="text-gray-500 mb-4">沿着数字路径从起点走到终点！使用方向键或点击按钮移动。</p>
        <div class="card bg-purple-50 border border-purple-200 mb-4 text-left"><p class="text-sm text-purple-800"><strong>规则：</strong>只能走数字路径（蓝色格子），从左上角走到右下角。数字从1开始递增，帮助你找到正确路径！</p></div>
        <button @click="startGame" class="btn-primary text-lg px-8 py-3">开始挑战</button>
      </div>
      <div v-if="phase === 'playing'" class="text-center py-4">
        <div class="flex items-center justify-between mb-4"><span class="text-sm text-gray-500">第 {{ level }}/{{ totalLevels }} 关</span><span class="text-sm text-gray-500">步数: {{ steps }}</span><span class="text-sm text-gray-500">得分: {{ score }}</span></div>
        <div v-if="message" class="text-sm mb-3 px-3 py-1.5 rounded-lg" :class="message.includes('完成') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'">{{ message }}</div>
        <div class="grid gap-1 mx-auto mb-4" :style="{ gridTemplateColumns: `repeat(${mazeSize}, 1fr)`, maxWidth: mazeSize > 6 ? '360px' : '300px' }">
          <template v-for="(row, r) in maze" :key="r">
            <div v-for="(cell, c) in row" :key="`${r}-${c}`" class="aspect-square rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200" :class="{'bg-green-400 text-white shadow-lg scale-110': cell.isCurrent, 'bg-blue-200 text-blue-700': cell.isPath && !cell.isCurrent && !cell.visited, 'bg-blue-100 text-blue-400': cell.visited && !cell.isCurrent, 'bg-gray-100 text-gray-300': !cell.isPath, 'bg-green-500 text-white': cell.isEnd && !cell.isCurrent}">{{ cell.isPath ? cell.value : '' }}</div>
          </template>
        </div>
        <div class="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
          <div></div><button @click="movePlayer(-1, 0)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowUp class="w-5 h-5 text-gray-600" /></button><div></div>
          <button @click="movePlayer(0, -1)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowLeft class="w-5 h-5 text-gray-600" /></button><div class="p-3 text-center text-xs text-gray-400">移动</div><button @click="movePlayer(0, 1)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowRight class="w-5 h-5 text-gray-600" /></button>
          <div></div><button @click="movePlayer(1, 0)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowDown class="w-5 h-5 text-gray-600" /></button><div></div>
        </div>
      </div>
      <div v-if="phase === 'result'" class="text-center py-4">
        <div class="text-6xl mb-4">🎉</div><h3 class="font-title text-xl text-gray-800 mb-2">全部通关！</h3><p class="text-gray-500 mb-4">总得分：{{ score }} 分</p>
        <div class="flex gap-2"><button @click="retry" class="btn-secondary flex items-center gap-1"><RotateCcw class="w-4 h-4" /> 再来一次</button><button @click="emit('close')" class="btn-primary flex-1">完成</button></div>
      </div>
    </div>
  </div>
</template>