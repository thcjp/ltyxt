<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  question: string
  answer: string
  hint?: string
}>()

const emit = defineEmits<{
  correct: []
  wrong: []
  done: [isCorrect: boolean]
}>()

// 解析答案，判断拖拽类型
interface DragItem {
  id: string
  text: string
  group?: string  // 配对/分类时的目标组
}

interface DropZone {
  id: string
  label: string
  expectedItems: string[]  // 期望放入的item id列表
}

// 解析答案格式
const parsedAnswer = computed(() => {
  const answer = props.answer

  // 类型1：分类拖拽 - "前鼻:an,en,in,un,ün;后鼻:ang,eng,ing,ong"
  if (answer.includes(':') && answer.includes(';')) {
    const groups = answer.split(';').map(g => g.trim())
    const zones: DropZone[] = []
    const items: DragItem[] = []
    groups.forEach(g => {
      const [label, itemsStr] = g.split(':').map(s => s.trim())
      const itemTexts = itemsStr.split(',').map(s => s.trim())
      const zone: DropZone = { id: label, label, expectedItems: [] }
      itemTexts.forEach(t => {
        const itemId = `${label}_${t}`
        zone.expectedItems.push(itemId)
        items.push({ id: itemId, text: t, group: label })
      })
      zones.push(zone)
    })
    return { type: 'classify' as const, zones, items }
  }

  // 类型2：配对拖拽 - "g-鸽子,k-蝌蚪,h-椅子"
  if (answer.includes('-') && answer.includes(',')) {
    const pairs = answer.split(',').map(p => p.trim())
    const zones: DropZone[] = []
    const items: DragItem[] = []
    pairs.forEach(p => {
      const [left, right] = p.split('-').map(s => s.trim())
      const itemId = `item_${left}`
      zones.push({ id: `zone_${left}`, label: right, expectedItems: [itemId] })
      items.push({ id: itemId, text: left, group: right })
    })
    return { type: 'match' as const, zones, items }
  }

  // 类型3：排序拖拽 - "a,o,e,i,u,ü"（包含逗号的多项排序）
  if (answer.includes(',')) {
    const itemTexts = answer.split(',').map(s => s.trim())
    const items = itemTexts.map((t, i) => ({ id: `item_${i}`, text: t }))
    const zone: DropZone = { id: 'order', label: '正确顺序', expectedItems: items.map(it => it.id) }
    return { type: 'order' as const, zones: [zone], items }
  }

  // 类型4：单词填空拖拽 - 单个答案（英语常见）
  // 需要生成干扰选项
  const correctAnswer = answer.trim()
  const distractors = generateDistractors(correctAnswer)
  const items: DragItem[] = [
    { id: 'item_correct', text: correctAnswer },
    ...distractors.map((d, i) => ({ id: `item_dist_${i}`, text: d }))
  ]
  const zone: DropZone = { id: 'blank', label: '填入正确答案', expectedItems: ['item_correct'] }
  return { type: 'wordFill' as const, zones: [zone], items }
})

// 为单词填空生成干扰选项
function generateDistractors(correct: string): string[] {
  // 常见英语干扰词库
  const commonWords = [
    'go', 'come', 'make', 'take', 'give', 'play', 'read', 'write', 'run', 'walk',
    'eat', 'drink', 'sleep', 'open', 'close', 'sit', 'stand', 'look', 'see', 'hear',
    'big', 'small', 'tall', 'short', 'long', 'new', 'old', 'good', 'bad', 'hot',
    'cold', 'fast', 'slow', 'high', 'low', 'happy', 'sad', 'hard', 'soft', 'clean',
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'have', 'has', 'had',
    'do', 'does', 'did', 'can', 'will', 'would', 'should', 'must', 'may', 'might',
    'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'our', 'their',
    'in', 'on', 'at', 'to', 'for', 'with', 'from', 'by', 'of', 'about',
    'and', 'but', 'or', 'so', 'because', 'if', 'when', 'where', 'what', 'how',
    'yes', 'no', 'not', 'very', 'much', 'many', 'some', 'any', 'all', 'each',
    'first', 'then', 'next', 'finally', 'also', 'too', 'just', 'only', 'still', 'already',
    'Plant', 'Save', 'Hold', 'Raise', 'Clean', 'Thank', 'Where', 'When', 'How', 'Yes',
    'No', 'Finally', 'First', 'Then', 'Next', 'Also', 'But', 'And', 'Or', 'So',
  ]
  // 过滤掉正确答案，随机选3个
  const filtered = commonWords.filter(w => w.toLowerCase() !== correct.toLowerCase())
  const shuffled = filtered.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
}

// 打乱后的拖拽项
const shuffledItems = computed(() => {
  const items = [...parsedAnswer.value.items]
  // Fisher-Yates 洗牌
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
})

// 每个放置区的当前内容
const dropZoneContents = ref<Record<string, string[]>>({})
const draggedItemId = ref<string | null>(null)
const isVerified = ref(false)
const isCorrectResult = ref(false)

// 初始化放置区
function initZones() {
  const contents: Record<string, string[]> = {}
  parsedAnswer.value.zones.forEach(z => {
    contents[z.id] = []
  })
  dropZoneContents.value = contents
}

// 获取未放置的项（不在任何zone中的）
const unplacedItems = computed(() => {
  const placedIds = new Set<string>()
  Object.values(dropZoneContents.value).forEach(ids => ids.forEach(id => placedIds.add(id)))
  return shuffledItems.value.filter(item => !placedIds.has(item.id))
})

// 拖拽开始
function onDragStart(itemId: string) {
  draggedItemId.value = itemId
}

// 触摸拖拽支持（R28铁律：mousedown+touchstart必须双支持）
const touchDragItemId = ref<string | null>(null)
const touchClone = ref<HTMLElement | null>(null)

function onTouchStart(itemId: string, event: TouchEvent) {
  if (isVerified.value) return
  event.preventDefault()
  touchDragItemId.value = itemId
  draggedItemId.value = itemId

  // 创建拖拽克隆元素
  const touch = event.touches[0]
  const clone = document.createElement('div')
  clone.textContent = getItemText(itemId)
  clone.style.cssText = `
    position: fixed; z-index: 9999; pointer-events: none;
    padding: 6px 12px; border-radius: 8px; font-size: 14px; font-weight: 500;
    background: #6366f1; color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translate(-50%, -50%);
    left: ${touch.clientX}px; top: ${touch.clientY}px;
  `
  document.body.appendChild(clone)
  touchClone.value = clone
}

function onTouchMove(event: TouchEvent) {
  if (!touchDragItemId.value || !touchClone.value) return
  event.preventDefault()
  const touch = event.touches[0]
  touchClone.value.style.left = `${touch.clientX}px`
  touchClone.value.style.top = `${touch.clientY}px`
}

function onTouchEnd(event: TouchEvent) {
  if (!touchDragItemId.value) return
  // 移除克隆元素
  if (touchClone.value) {
    touchClone.value.remove()
    touchClone.value = null
  }

  // 检测触摸结束位置下方的放置区
  const touch = event.changedTouches[0]
  const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY)

  if (elementBelow) {
    // 查找最近的放置区
    const dropZone = elementBelow.closest('[data-drop-zone]')
    if (dropZone) {
      const zoneId = dropZone.getAttribute('data-drop-zone')
      if (zoneId) {
        onDropToZone(zoneId)
      }
    } else {
      // 如果不在放置区，移回源区
      const sourceZone = elementBelow.closest('[data-drop-source]')
      if (sourceZone) {
        onDropToSource()
      }
    }
  }

  touchDragItemId.value = null
  draggedItemId.value = null
}

// 拖拽到放置区
function onDropToZone(zoneId: string) {
  if (!draggedItemId.value || isVerified.value) return
  const itemId = draggedItemId.value

  // 如果已经在某个zone中，先移除
  for (const zId of Object.keys(dropZoneContents.value)) {
    const idx = dropZoneContents.value[zId].indexOf(itemId)
    if (idx !== -1) {
      dropZoneContents.value[zId].splice(idx, 1)
      break
    }
  }

  // 添加到目标zone
  if (!dropZoneContents.value[zoneId]) {
    dropZoneContents.value[zoneId] = []
  }
  dropZoneContents.value[zoneId].push(itemId)
  draggedItemId.value = null
}

// 从放置区移回
function onDropToSource() {
  if (!draggedItemId.value || isVerified.value) return
  const itemId = draggedItemId.value

  for (const zId of Object.keys(dropZoneContents.value)) {
    const idx = dropZoneContents.value[zId].indexOf(itemId)
    if (idx !== -1) {
      dropZoneContents.value[zId].splice(idx, 1)
      break
    }
  }
  draggedItemId.value = null
}

// 点击项直接放入下一个空zone（触屏友好）
function onItemClick(itemId: string) {
  if (isVerified.value) return

  // 如果在未放置区，放入第一个有空位的zone
  if (unplacedItems.value.some(i => i.id === itemId)) {
    for (const zone of parsedAnswer.value.zones) {
      const contents = dropZoneContents.value[zone.id] || []
      if (contents.length < zone.expectedItems.length) {
        if (!dropZoneContents.value[zone.id]) {
          dropZoneContents.value[zone.id] = []
        }
        dropZoneContents.value[zone.id].push(itemId)
        break
      }
    }
    return
  }

  // 如果在zone中，移回未放置区
  for (const zId of Object.keys(dropZoneContents.value)) {
    const idx = dropZoneContents.value[zId].indexOf(itemId)
    if (idx !== -1) {
      dropZoneContents.value[zId].splice(idx, 1)
      break
    }
  }
}

// 获取item的文字
function getItemText(itemId: string): string {
  const item = parsedAnswer.value.items.find(i => i.id === itemId)
  return item?.text || itemId
}

// 验证答案
function verifyAnswer() {
  const { type, zones } = parsedAnswer.value
  let correct = true

  if (type === 'order') {
    // 排序：检查zone中的顺序
    const zoneContent = dropZoneContents.value['order'] || []
    if (zoneContent.length !== zones[0].expectedItems.length) {
      correct = false
    } else {
      for (let i = 0; i < zoneContent.length; i++) {
        if (zoneContent[i] !== zones[0].expectedItems[i]) {
          correct = false
          break
        }
      }
    }
  } else if (type === 'wordFill') {
    // 单词填空：检查是否放入了正确答案
    const zoneContent = dropZoneContents.value['blank'] || []
    if (zoneContent.length !== 1 || zoneContent[0] !== 'item_correct') {
      correct = false
    }
  } else if (type === 'match') {
    // 配对：检查每个zone中是否包含正确的item
    for (const zone of zones) {
      const content = dropZoneContents.value[zone.id] || []
      if (content.length !== zone.expectedItems.length ||
          !zone.expectedItems.every(eid => content.includes(eid))) {
        correct = false
        break
      }
    }
  } else if (type === 'classify') {
    // 分类：检查每个zone中是否包含所有正确的items
    for (const zone of zones) {
      const content = dropZoneContents.value[zone.id] || []
      if (content.length !== zone.expectedItems.length ||
          !zone.expectedItems.every(eid => content.includes(eid))) {
        correct = false
        break
      }
    }
  }

  isVerified.value = true
  isCorrectResult.value = correct

  if (correct) {
    emit('correct')
    nextTick(() => {
      gsap.fromTo('.drag-verify-result', { scale: 0.8 }, { scale: 1, duration: 0.3, ease: 'back.out(1.7)' })
    })
  } else {
    emit('wrong')
  }
  emit('done', correct)
}

// 检查某个item在zone中是否正确
function isItemCorrect(itemId: string, zoneId: string): boolean | null {
  if (!isVerified.value) return null
  const zone = parsedAnswer.value.zones.find(z => z.id === zoneId)
  if (!zone) return false
  return zone.expectedItems.includes(itemId)
}

// 重置
function resetDrag() {
  initZones()
  isVerified.value = false
  isCorrectResult.value = false
}

// 初始化
initZones()
</script>

<template>
  <div class="drag-question space-y-4">
    <!-- 题目 -->
    <p class="font-medium text-gray-800">{{ question }}</p>

    <!-- 排序类型 -->
    <template v-if="parsedAnswer.type === 'order'">
      <!-- 放置区：排序槽位 -->
      <div
        class="flex flex-wrap gap-2 p-3 rounded-xl border-2 border-dashed min-h-[56px] transition-colors"
        :class="isVerified ? (isCorrectResult ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-primary-300 bg-primary-50/30'"
        data-drop-zone="order"
        @dragover.prevent
        @drop="onDropToZone('order')"
      >
        <div
          v-for="(itemId, idx) in dropZoneContents['order'] || []"
          :key="itemId"
          class="drag-item-placed px-3 py-1.5 rounded-lg font-medium text-sm cursor-pointer transition-all"
          :class="{
            'bg-primary-500 text-white': !isVerified,
            'bg-green-500 text-white': isItemCorrect(itemId, 'order') === true,
            'bg-red-500 text-white': isItemCorrect(itemId, 'order') === false,
          }"
          draggable="true"
          @dragstart="onDragStart(itemId)"
          @touchstart.passive="onTouchStart(itemId, $event)"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          @click="onItemClick(itemId)"
        >
          {{ getItemText(itemId) }}
        </div>
        <p v-if="!(dropZoneContents['order']?.length)" class="text-sm text-gray-400 m-auto">
          把下面的项目拖到这里排好顺序
        </p>
      </div>
    </template>

    <!-- 单词填空类型（英语常见） -->
    <template v-else-if="parsedAnswer.type === 'wordFill'">
      <div
        class="p-4 rounded-xl border-2 border-dashed min-h-[56px] transition-colors text-center"
        :class="isVerified ? (isCorrectResult ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-primary-300 bg-primary-50/30'"
        data-drop-zone="blank"
        @dragover.prevent
        @drop="onDropToZone('blank')"
      >
        <div
          v-for="itemId in (dropZoneContents['blank'] || [])"
          :key="itemId"
          class="inline-block px-4 py-2 rounded-lg font-medium text-base cursor-pointer transition-all"
          :class="{
            'bg-primary-500 text-white': !isVerified,
            'bg-green-500 text-white': isItemCorrect(itemId, 'blank') === true,
            'bg-red-500 text-white': isItemCorrect(itemId, 'blank') === false,
          }"
          draggable="true"
          @dragstart="onDragStart(itemId)"
          @touchstart.passive="onTouchStart(itemId, $event)"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          @click="onItemClick(itemId)"
        >
          {{ getItemText(itemId) }}
        </div>
        <p v-if="!(dropZoneContents['blank']?.length)" class="text-sm text-gray-400">
          从下方选择正确的词拖到这里
        </p>
      </div>
    </template>

    <!-- 配对/分类类型 -->
    <template v-else>
      <div class="grid gap-3" :class="parsedAnswer.zones.length <= 2 ? 'grid-cols-2' : 'grid-cols-2'">
        <div
          v-for="zone in parsedAnswer.zones"
          :key="zone.id"
          class="rounded-xl border-2 p-3 transition-colors"
          :class="isVerified
            ? (zone.expectedItems.every(eid => (dropZoneContents[zone.id] || []).includes(eid)) && (dropZoneContents[zone.id] || []).length === zone.expectedItems.length
              ? 'border-green-400 bg-green-50'
              : 'border-red-400 bg-red-50')
            : 'border-gray-300 bg-gray-50'"
          :data-drop-zone="zone.id"
          @dragover.prevent
          @drop="onDropToZone(zone.id)"
        >
          <p class="text-sm font-medium text-gray-600 mb-2 text-center">{{ zone.label }}</p>
          <div class="flex flex-wrap gap-1.5 min-h-[36px]">
            <div
              v-for="itemId in (dropZoneContents[zone.id] || [])"
              :key="itemId"
              class="px-2.5 py-1 rounded-lg text-sm font-medium cursor-pointer transition-all"
              :class="{
                'bg-primary-500 text-white': !isVerified,
                'bg-green-500 text-white': isItemCorrect(itemId, zone.id) === true,
                'bg-red-500 text-white': isItemCorrect(itemId, zone.id) === false,
              }"
              draggable="true"
              @dragstart="onDragStart(itemId)"
              @touchstart.passive="onTouchStart(itemId, $event)"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
              @click="onItemClick(itemId)"
            >
              {{ getItemText(itemId) }}
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- 可拖拽的源项 -->
    <div
      v-if="unplacedItems.length > 0"
      class="flex flex-wrap gap-2 p-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50"
      data-drop-source="true"
      @dragover.prevent
      @drop="onDropToSource"
    >
      <div
        v-for="item in unplacedItems"
        :key="item.id"
        class="px-3 py-1.5 rounded-lg bg-white border-2 border-primary-300 text-primary-700 font-medium text-sm cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-all active:scale-95"
        draggable="true"
        @dragstart="onDragStart(item.id)"
        @touchstart.passive="onTouchStart(item.id, $event)"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @click="onItemClick(item.id)"
      >
        {{ item.text }}
      </div>
    </div>

    <!-- 提示 -->
    <p v-if="hint && !isVerified" class="text-xs text-gray-400 flex items-center gap-1">
      💡 {{ hint }}
    </p>

    <!-- 操作按钮 -->
    <div class="flex gap-2">
      <button v-if="!isVerified" @click="verifyAnswer" class="btn-primary flex-1">确认排列</button>
      <button v-if="!isVerified" @click="resetDrag" class="btn-secondary">重置</button>
    </div>

    <!-- 验证结果 -->
    <div v-if="isVerified" class="drag-verify-result text-center space-y-2">
      <div class="flex items-center justify-center gap-2" :class="isCorrectResult ? 'text-green-600' : 'text-red-600'">
        <span class="text-2xl">{{ isCorrectResult ? '🎉' : '💪' }}</span>
        <span class="font-medium">{{ isCorrectResult ? '排列正确！' : '顺序不对，再试试' }}</span>
      </div>
      <button v-if="!isCorrectResult" @click="resetDrag" class="btn-secondary">重新排列</button>
    </div>
  </div>
</template>
