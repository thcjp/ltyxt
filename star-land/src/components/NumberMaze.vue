<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { X, RotateCcw, Star, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Heart, Coins, Skull } from 'lucide-vue-next'

const props = defineProps<{ grade: number }>()
const emit = defineEmits<{ close: [] }>()

const mazeSize = computed(() => props.grade <= 2 ? 5 : props.grade <= 4 ? 6 : 7)

interface Cell {
  value: number          // 算术题的答案
  question: string       // 算术题题面
  isPath: boolean        // 是否是可行走路径
  isWall: boolean        // 是否是墙壁
  isStart: boolean
  isEnd: boolean
  visited: boolean
  isCurrent: boolean
  isTreasure: boolean    // 宝箱
  isTrap: boolean        // 陷阱
  solved: boolean        // 该格题目已答对
}

const phase = ref<'ready' | 'playing' | 'question' | 'result'>('ready')
const maze = ref<Cell[][]>([])
const playerPos = ref({ row: 0, col: 0 })
const steps = ref(0)
const score = ref(0)
const coins = ref(0)
const lives = ref(3)
const level = ref(1)
const totalLevels = 3
const message = ref('')
const currentQuestion = ref<{ question: string; answer: number; cellRow: number; cellCol: number } | null>(null)
const userInput = ref('')
const questionFeedback = ref<'none' | 'correct' | 'wrong'>('none')

// 根据年级生成算术题
function generateQuestion(grade: number): { question: string; answer: number } {
  const ops = ['+', '-', '×']
  const op = ops[Math.floor(Math.random() * ops.length)]
  let a: number, b: number, answer: number, question: string

  if (grade <= 2) {
    // 1-2年级：20以内加减，乘法口诀
    if (op === '×') {
      a = Math.floor(Math.random() * 9) + 1
      b = Math.floor(Math.random() * 9) + 1
      answer = a * b
    } else if (op === '+') {
      a = Math.floor(Math.random() * 15) + 1
      b = Math.floor(Math.random() * 5) + 1
      answer = a + b
    } else {
      a = Math.floor(Math.random() * 18) + 2
      b = Math.floor(Math.random() * (a - 1)) + 1
      answer = a - b
    }
  } else if (grade <= 4) {
    // 3-4年级：100以内加减，两位数乘一位数
    if (op === '×') {
      a = Math.floor(Math.random() * 20) + 10
      b = Math.floor(Math.random() * 8) + 2
      answer = a * b
    } else if (op === '+') {
      a = Math.floor(Math.random() * 50) + 20
      b = Math.floor(Math.random() * 40) + 10
      answer = a + b
    } else {
      a = Math.floor(Math.random() * 80) + 20
      b = Math.floor(Math.random() * (a - 10)) + 5
      answer = a - b
    }
  } else {
    // 5-6年级：更大范围运算
    if (op === '×') {
      a = Math.floor(Math.random() * 40) + 20
      b = Math.floor(Math.random() * 15) + 5
      answer = a * b
    } else if (op === '+') {
      a = Math.floor(Math.random() * 200) + 100
      b = Math.floor(Math.random() * 150) + 50
      answer = a + b
    } else {
      a = Math.floor(Math.random() * 200) + 100
      b = Math.floor(Math.random() * (a - 50)) + 20
      answer = a - b
    }
  }
  question = `${a} ${op} ${b} = ?`
  return { question, answer }
}

function generateMaze(): Cell[][] {
  const size = mazeSize.value
  const grid: Cell[][] = []
  for (let r = 0; r < size; r++) {
    grid[r] = []
    for (let c = 0; c < size; c++) {
      grid[r][c] = {
        value: 0,
        question: '',
        isPath: false,
        isWall: true,
        isStart: r === 0 && c === 0,
        isEnd: r === size - 1 && c === size - 1,
        visited: false,
        isCurrent: false,
        isTreasure: false,
        isTrap: false,
        solved: false,
      }
    }
  }

  // 生成路径（DFS随机迷宫）
  const visited = new Set<string>()
  const stack: [number, number][] = [[0, 0]]
  const path: [number, number][] = []
  while (stack.length > 0) {
    const [r, c] = stack[stack.length - 1]
    visited.add(`${r},${c}`)
    path.push([r, c])
    if (r === size - 1 && c === size - 1) break
    const neighbors: [number, number][] = []
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc
      if (nr >= 0 && nr < size && nc >= 0 && nc < size && !visited.has(`${nr},${nc}`)) {
        // 50%概率加入邻居，制造分支
        if (Math.abs(nr - (size - 1)) + Math.abs(nc - (size - 1)) < Math.abs(r - (size - 1)) + Math.abs(c - (size - 1)) || Math.random() > 0.4) {
          neighbors.push([nr, nc])
        }
      }
    }
    if (neighbors.length > 0) {
      stack.push(neighbors[Math.floor(Math.random() * neighbors.length)])
    } else {
      stack.pop()
    }
  }

  // 标记路径
  for (const [r, c] of path) {
    grid[r][c].isPath = true
    grid[r][c].isWall = false
    // 为路径格子生成算术题（起点和终点除外）
    if (!grid[r][c].isStart && !grid[r][c].isEnd) {
      const q = generateQuestion(props.grade)
      grid[r][c].question = q.question
      grid[r][c].value = q.answer
    }
  }

  // 添加宝箱（路径上的随机位置）
  const treasureCount = Math.max(2, Math.floor(path.length * 0.15))
  for (let i = 0; i < treasureCount; i++) {
    const idx = Math.floor(Math.random() * (path.length - 2)) + 1
    const [r, c] = path[idx]
    if (!grid[r][c].isStart && !grid[r][c].isEnd && !grid[r][c].isTreasure) {
      grid[r][c].isTreasure = true
    }
  }

  // 添加陷阱（路径上的随机位置）
  const trapCount = Math.max(1, Math.floor(path.length * 0.1))
  for (let i = 0; i < trapCount; i++) {
    const idx = Math.floor(Math.random() * (path.length - 2)) + 1
    const [r, c] = path[idx]
    if (!grid[r][c].isStart && !grid[r][c].isEnd && !grid[r][c].isTreasure && !grid[r][c].isTrap) {
      grid[r][c].isTrap = true
    }
  }

  // 添加一些非路径的装饰墙壁格子
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c].isWall && Math.random() > 0.6) {
        grid[r][c].isWall = false
        grid[r][c].isPath = false
      }
    }
  }

  grid[0][0].isPath = true
  grid[0][0].isWall = false
  grid[size - 1][size - 1].isPath = true
  grid[size - 1][size - 1].isWall = false

  return grid
}

function startGame() {
  level.value = 1
  score.value = 0
  coins.value = 0
  lives.value = 3
  startLevel()
}

function startLevel() {
  maze.value = generateMaze()
  playerPos.value = { row: 0, col: 0 }
  steps.value = 0
  message.value = ''
  phase.value = 'playing'
  maze.value[0][0].isCurrent = true
  maze.value[0][0].visited = true
}

function movePlayer(dr: number, dc: number) {
  if (phase.value !== 'playing') return
  const size = mazeSize.value
  const newRow = playerPos.value.row + dr
  const newCol = playerPos.value.col + dc
  if (newRow < 0 || newRow >= size || newCol < 0 || newCol >= size) return
  if (!maze.value[newRow][newCol].isPath) return

  const targetCell = maze.value[newRow][newCol]

  // 检查陷阱
  if (targetCell.isTrap && !targetCell.solved) {
    lives.value--
    message.value = '踩到陷阱了！失去一条生命'
    if (lives.value <= 0) {
      phase.value = 'result'
      message.value = '生命耗尽！游戏结束'
      return
    }
    targetCell.solved = true
    // 陷阱不阻止移动，但扣生命
  }

  // 检查宝箱
  if (targetCell.isTreasure && !targetCell.solved) {
    const bonus = Math.floor(Math.random() * 50) + 20
    coins.value += bonus
    message.value = `发现宝箱！获得${bonus}金币`
    targetCell.solved = true
  }

  // 移动
  maze.value[playerPos.value.row][playerPos.value.col].isCurrent = false
  playerPos.value = { row: newRow, col: newCol }
  maze.value[newRow][newCol].isCurrent = true
  maze.value[newRow][newCol].visited = true
  steps.value++

  // 如果有算术题，弹出答题
  if (targetCell.question && !targetCell.solved) {
    currentQuestion.value = {
      question: targetCell.question,
      answer: targetCell.value,
      cellRow: newRow,
      cellCol: newCol,
    }
    userInput.value = ''
    questionFeedback.value = 'none'
    phase.value = 'question'
    return
  }

  // 到达终点
  if (newRow === size - 1 && newCol === size - 1) {
    const levelScore = Math.max(200 - steps.value * 5, 50) + coins.value * 2
    score.value += levelScore
    if (level.value < totalLevels) {
      level.value++
      message.value = `第${level.value - 1}关完成！进入第${level.value}关`
      setTimeout(() => startLevel(), 1500)
    } else {
      phase.value = 'result'
      message.value = '全部通关！'
    }
  }
}

function checkAnswer() {
  if (!currentQuestion.value) return
  const userAnswer = parseInt(userInput.value)
  if (isNaN(userAnswer)) {
    questionFeedback.value = 'wrong'
    return
  }
  if (userAnswer === currentQuestion.value.answer) {
    questionFeedback.value = 'correct'
    score.value += 10
    maze.value[currentQuestion.value.cellRow][currentQuestion.value.cellCol].solved = true
    message.value = '回答正确！+10分'
    setTimeout(() => {
      phase.value = 'playing'
      currentQuestion.value = null
      // 检查是否到终点
      if (playerPos.value.row === mazeSize.value - 1 && playerPos.value.col === mazeSize.value - 1) {
        const levelScore = Math.max(200 - steps.value * 5, 50) + coins.value * 2
        score.value += levelScore
        if (level.value < totalLevels) {
          level.value++
          message.value = `第${level.value - 1}关完成！进入第${level.value}关`
          setTimeout(() => startLevel(), 1500)
        } else {
          phase.value = 'result'
        }
      }
    }, 800)
  } else {
    questionFeedback.value = 'wrong'
    lives.value--
    message.value = `回答错误！正确答案是${currentQuestion.value.answer}，失去一条生命`
    if (lives.value <= 0) {
      phase.value = 'result'
      message.value = '生命耗尽！游戏结束'
      return
    }
    setTimeout(() => {
      maze.value[currentQuestion.value!.cellRow][currentQuestion.value!.cellCol].solved = true
      phase.value = 'playing'
      currentQuestion.value = null
      // 同样检查终点
      if (playerPos.value.row === mazeSize.value - 1 && playerPos.value.col === mazeSize.value - 1) {
        const levelScore = Math.max(200 - steps.value * 5, 50) + coins.value * 2
        score.value += levelScore
        if (level.value < totalLevels) {
          level.value++
          setTimeout(() => startLevel(), 1500)
        } else {
          phase.value = 'result'
        }
      }
    }, 1500)
  }
}

function retry() { phase.value = 'ready' }
function handleKeydown(e: KeyboardEvent) {
  if (phase.value === 'question') {
    if (e.key === 'Enter') checkAnswer()
    return
  }
  if (phase.value !== 'playing') return
  switch (e.key) {
    case 'ArrowUp': case 'w': case 'W': movePlayer(-1, 0); break
    case 'ArrowDown': case 's': case 'S': movePlayer(1, 0); break
    case 'ArrowLeft': case 'a': case 'A': movePlayer(0, -1); break
    case 'ArrowRight': case 'd': case 'D': movePlayer(0, 1); break
  }
}
onMounted(() => { window.addEventListener('keydown', handleKeydown) })
onUnmounted(() => { window.removeEventListener('keydown', handleKeydown) })
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2">
          <span class="text-2xl">🌀</span>数字迷宫
        </h2>
        <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- 开始页 -->
      <div v-if="phase === 'ready'" class="text-center py-8">
        <div class="text-6xl mb-4">🌀</div>
        <h3 class="font-title text-lg text-gray-700 mb-2">数字迷宫大冒险</h3>
        <p class="text-gray-500 mb-4">沿着路径从起点走到终点，路上有算术题、宝箱和陷阱！</p>
        <div class="card bg-purple-50 border border-purple-200 mb-4 text-left space-y-1">
          <p class="text-sm text-purple-800"><Coins class="w-4 h-4 inline" /> 宝箱：获得金币加分</p>
          <p class="text-sm text-purple-800"><Skull class="w-4 h-4 inline" /> 陷阱：扣一条生命</p>
          <p class="text-sm text-purple-800">算术题：答对加分，答错扣生命</p>
          <p class="text-sm text-purple-800"><Heart class="w-4 h-4 inline" /> 生命：共3条，耗尽则游戏结束</p>
        </div>
        <button @click="startGame" class="btn-primary text-lg px-8 py-3">开始冒险</button>
      </div>

      <!-- 游戏中 -->
      <div v-if="phase === 'playing'" class="text-center py-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-500">第{{ level }}/{{ totalLevels }}关</span>
          <div class="flex items-center gap-1">
            <Heart v-for="n in 3" :key="n" class="w-4 h-4" :class="n <= lives ? 'text-red-500 fill-red-500' : 'text-gray-200'" />
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <Coins class="w-4 h-4 text-yellow-500" />{{ coins }}
            <span class="text-gray-300">|</span>
            <span>得分:{{ score }}</span>
          </div>
        </div>
        <div v-if="message" class="text-sm mb-3 px-3 py-1.5 rounded-lg" :class="message.includes('正确') || message.includes('宝箱') || message.includes('完成') ? 'bg-green-50 text-green-600' : message.includes('错误') || message.includes('陷阱') || message.includes('耗尽') ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-600'">
          {{ message }}
        </div>
        <div class="grid gap-1 mx-auto mb-4" :style="{ gridTemplateColumns: `repeat(${mazeSize}, 1fr)`, maxWidth: mazeSize > 6 ? '360px' : '300px' }">
          <template v-for="(row, r) in maze" :key="r">
            <div v-for="(cell, c) in row" :key="`${r}-${c}`"
              class="aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200"
              :class="{
                'bg-green-400 text-white shadow-lg scale-110': cell.isCurrent,
                'bg-yellow-200 text-yellow-700': cell.isPath && !cell.isCurrent && !cell.visited && cell.isTreasure && !cell.solved,
                'bg-red-100 text-red-400': cell.isPath && !cell.isCurrent && !cell.visited && cell.isTrap && !cell.solved,
                'bg-blue-100 text-blue-400': cell.visited && !cell.isCurrent,
                'bg-purple-200 text-purple-700': cell.isPath && !cell.isCurrent && !cell.visited && cell.question && !cell.isTreasure && !cell.isTrap,
                'bg-gray-200 text-gray-400': cell.isPath && !cell.isCurrent && !cell.visited && !cell.question,
                'bg-gray-50': !cell.isPath,
                'bg-green-500 text-white': cell.isEnd && !cell.isCurrent,
              }">
              <span v-if="cell.isCurrent">🧑</span>
              <span v-else-if="cell.isEnd">🏁</span>
              <span v-else-if="cell.isStart && cell.visited">⭐</span>
              <span v-else-if="cell.isTreasure && !cell.solved">💰</span>
              <span v-else-if="cell.isTrap && !cell.solved">💣</span>
              <span v-else-if="cell.question && cell.solved">✓</span>
              <span v-else-if="cell.question">?</span>
              <span v-else-if="cell.isPath && !cell.visited">·</span>
            </div>
          </template>
        </div>
        <div class="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
          <div></div>
          <button @click="movePlayer(-1, 0)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowUp class="w-5 h-5 text-gray-600" /></button>
          <div></div>
          <button @click="movePlayer(0, -1)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowLeft class="w-5 h-5 text-gray-600" /></button>
          <div class="p-3 text-center text-xs text-gray-400">方向键/WASD</div>
          <button @click="movePlayer(0, 1)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowRight class="w-5 h-5 text-gray-600" /></button>
          <div></div>
          <button @click="movePlayer(1, 0)" class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95"><ArrowDown class="w-5 h-5 text-gray-600" /></button>
          <div></div>
        </div>
      </div>

      <!-- 答题弹窗 -->
      <div v-if="phase === 'question'" class="text-center py-8">
        <div class="text-4xl mb-4">🧮</div>
        <h3 class="font-title text-lg text-gray-700 mb-4">回答正确才能通过！</h3>
        <div class="card bg-purple-50 border border-purple-200 mb-4">
          <p class="text-2xl font-bold text-purple-700 py-2">{{ currentQuestion?.question }}</p>
        </div>
        <input
          v-model="userInput"
          type="number"
          class="w-32 px-4 py-3 text-center text-xl border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none mb-3"
          @keyup.enter="checkAnswer"
          placeholder="答案"
          autofocus
        />
        <div v-if="questionFeedback === 'correct'" class="text-green-600 font-bold mb-2">✓ 回答正确！+10分</div>
        <div v-if="questionFeedback === 'wrong'" class="text-red-500 font-bold mb-2">✗ 回答错误！失去一条生命</div>
        <button v-if="questionFeedback === 'none'" @click="checkAnswer" class="btn-primary px-8 py-2">确认</button>
      </div>

      <!-- 结果页 -->
      <div v-if="phase === 'result'" class="text-center py-8">
        <div class="text-6xl mb-4">{{ lives > 0 ? '🎉' : '💀' }}</div>
        <h3 class="font-title text-xl text-gray-800 mb-2">{{ lives > 0 ? '全部通关！' : '游戏结束' }}</h3>
        <div class="grid grid-cols-2 gap-3 mb-4 max-w-xs mx-auto">
          <div class="card bg-blue-50">
            <div class="text-2xl font-bold text-blue-600">{{ score }}</div>
            <div class="text-xs text-gray-500">总得分</div>
          </div>
          <div class="card bg-yellow-50">
            <div class="text-2xl font-bold text-yellow-600">{{ coins }}</div>
            <div class="text-xs text-gray-500">金币</div>
          </div>
        </div>
        <div class="flex gap-2">
          <button @click="retry" class="btn-secondary flex items-center gap-1">
            <RotateCcw class="w-4 h-4" /> 再来一次
          </button>
          <button @click="emit('close')" class="btn-primary flex-1">完成</button>
        </div>
      </div>
    </div>
  </div>
</template>
