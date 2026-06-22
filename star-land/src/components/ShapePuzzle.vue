<script setup lang="ts">
import { ref, computed } from 'vue'
import { X, RotateCcw, Star, Grid3X3 } from 'lucide-vue-next'

const props = defineProps<{ grade: number }>()
const emit = defineEmits<{ close: [] }>()

interface ShapePiece { id: string; cells: [number, number][]; color: string; placed: boolean; position: { row: number; col: number } | null }
interface Puzzle { name: string; gridSize: number; targetCells: Set<string>; pieces: ShapePiece[] }

const phase = ref<'ready' | 'playing' | 'result'>('ready')
const currentPuzzleIndex = ref(0)
const selectedPiece = ref<string | null>(null)
const grid = ref<string[][]>([])
const score = ref(0)
const totalPuzzles = 3

const puzzles: Puzzle[] = [
  { name: '拼正方形', gridSize: 4, targetCells: new Set(['0,0','0,1','0,2','0,3','1,0','1,1','1,2','1,3','2,0','2,1','2,2','2,3','3,0','3,1','3,2','3,3']), pieces: [{ id: 'p1', cells: [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3]], color: 'bg-blue-400', placed: false, position: null }, { id: 'p2', cells: [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3]], color: 'bg-green-400', placed: false, position: null }] },
  { name: '拼长方形', gridSize: 4, targetCells: new Set(['0,0','0,1','0,2','0,3','1,0','1,1','1,2','1,3','2,0','2,1','2,2','2,3']), pieces: [{ id: 'p1', cells: [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3]], color: 'bg-purple-400', placed: false, position: null }, { id: 'p2', cells: [[0,0],[0,1],[0,2],[0,3]], color: 'bg-orange-400', placed: false, position: null }] },
  { name: '拼L形', gridSize: 4, targetCells: new Set(['0,0','0,1','1,0','1,1','2,0','2,1','2,2','2,3']), pieces: [{ id: 'p1', cells: [[0,0],[0,1],[1,0],[1,1]], color: 'bg-pink-400', placed: false, position: null }, { id: 'p2', cells: [[0,0],[0,1],[0,2],[0,3]], color: 'bg-teal-400', placed: false, position: null }] },
]
const currentPuzzle = computed(() => puzzles[currentPuzzleIndex.value])

function initGrid() {
  const puzzle = currentPuzzle.value; grid.value = Array.from({ length: puzzle.gridSize }, () => Array(puzzle.gridSize).fill(''))
  for (const cell of puzzle.targetCells) { const [r, c] = cell.split(',').map(Number); grid.value[r][c] = 'target' }
}
function startGame() { currentPuzzleIndex.value = 0; score.value = 0; phase.value = 'playing'; initGrid() }
function selectPiece(pieceId: string) { selectedPiece.value = selectedPiece.value === pieceId ? null : pieceId }
function placePiece(row: number, col: number) {
  if (!selectedPiece.value) return; const puzzle = currentPuzzle.value; const piece = puzzle.pieces.find(p => p.id === selectedPiece.value)
  if (!piece || piece.placed) return
  for (const [dr, dc] of piece.cells) { const r = row + dr; const c = col + dc; if (r >= puzzle.gridSize || c >= puzzle.gridSize) return; if (grid.value[r][c] !== 'target' && grid.value[r][c] !== '') return }
  piece.placed = true; piece.position = { row, col }
  for (const [dr, dc] of piece.cells) { const r = row + dr; const c = col + dc; grid.value[r][c] = piece.id }
  selectedPiece.value = null; checkComplete()
}
function removePiece(pieceId: string) {
  const puzzle = currentPuzzle.value; const piece = puzzle.pieces.find(p => p.id === pieceId)
  if (!piece || !piece.placed || !piece.position) return
  for (const [dr, dc] of piece.cells) { const r = piece.position.row + dr; const c = piece.position.col + dc; grid.value[r][c] = 'target' }
  piece.placed = false; piece.position = null
}
function checkComplete() { if (currentPuzzle.value.pieces.every(p => p.placed)) { score.value += 100; if (currentPuzzleIndex.value < totalPuzzles - 1) { currentPuzzleIndex.value++; initGrid() } else { phase.value = 'result' } } }
function retry() { phase.value = 'ready' }
function getCellClass(r: number, c: number): string { const val = grid.value[r][c]; if (val === 'target') return 'bg-gray-100 border-2 border-dashed border-gray-300'; if (val === '') return 'bg-gray-50'; const piece = currentPuzzle.value.pieces.find(p => p.id === val); return piece ? `${piece.color} border-2 border-white` : 'bg-gray-50' }
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4"><h2 class="font-title text-xl text-gray-800 flex items-center gap-2"><Grid3X3 class="w-5 h-5 text-indigo-500" />图形拼搭</h2><button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><X class="w-5 h-5" /></button></div>
      <div v-if="phase === 'ready'" class="text-center py-8">
        <div class="text-6xl mb-4">🧱</div><h3 class="font-title text-lg text-gray-700 mb-2">图形拼搭挑战</h3><p class="text-gray-500 mb-4">用下方的形状块拼出目标图形！点击形状块选中，再点击目标区域放置。</p>
        <div class="card bg-indigo-50 border border-indigo-200 mb-4 text-left"><p class="text-sm text-indigo-800"><strong>玩法：</strong>1. 点击下方形状块选中 2. 点击虚线框区域放置 3. 点击已放置的块可移除</p></div>
        <button @click="startGame" class="btn-primary text-lg px-8 py-3">开始挑战</button>
      </div>
      <div v-if="phase === 'playing' && currentPuzzle" class="text-center py-4">
        <div class="text-sm text-gray-500 mb-3">第 {{ currentPuzzleIndex + 1 }}/{{ totalPuzzles }} 关：{{ currentPuzzle.name }}</div>
        <div class="grid gap-0.5 mx-auto mb-4" :style="{ gridTemplateColumns: `repeat(${currentPuzzle.gridSize}, 1fr)`, maxWidth: '280px' }">
          <template v-for="(row, r) in grid" :key="r">
            <button v-for="(cell, c) in row" :key="`${r}-${c}`" @click="placePiece(r, c)" class="aspect-square rounded transition-colors" :class="getCellClass(r, c)" />
          </template>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <div v-for="piece in currentPuzzle.pieces" :key="piece.id" @click="piece.placed ? removePiece(piece.id) : selectPiece(piece.id)" class="cursor-pointer p-2 rounded-xl transition-all" :class="{'ring-2 ring-primary-500 scale-105': selectedPiece === piece.id, 'opacity-40': piece.placed, 'hover:shadow-md': !piece.placed}">
            <div class="grid gap-0.5" :style="{ gridTemplateColumns: `repeat(${Math.max(...piece.cells.map(([_,c]) => c)) + 1}, 20px)` }">
              <div v-for="i in piece.cells.length" :key="i" class="w-5 h-5 rounded-sm" :class="piece.color" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="phase === 'result'" class="text-center py-4">
        <div class="text-6xl mb-4">🎉</div><h3 class="font-title text-xl text-gray-800 mb-2">全部完成！</h3><p class="text-gray-500 mb-4">得分：{{ score }} 分</p>
        <div class="flex gap-2"><button @click="retry" class="btn-secondary flex items-center gap-1"><RotateCcw class="w-4 h-4" /> 再来一次</button><button @click="emit('close')" class="btn-primary flex-1">完成</button></div>
      </div>
    </div>
  </div>
</template>