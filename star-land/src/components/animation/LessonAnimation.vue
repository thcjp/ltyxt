<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { gsap } from 'gsap'
import { Volume2, VolumeX, Play, RotateCcw, Move, ZoomIn } from 'lucide-vue-next'
import { useSpeech } from '@/composables/useSpeech'
import type { AnimationSceneConfig } from '@/types'

const props = defineProps<{
  config: AnimationSceneConfig
  delay?: number
  lang?: 'zh' | 'en'
}>()

const containerRef = ref<HTMLElement | null>(null)
const stageRef = ref<HTMLElement | null>(null)
const { speak, speakPinyin, speakWithRole, isSpeaking, stop: stopSpeech } = useSpeech()

const isPlaying = ref(false)
const hasPlayed = ref(false)
let ctx: gsap.Context | null = null

// ===== 鼠标交互状态 =====
const transform = ref({ x: 0, y: 0, scale: 1, rotation: 0 })
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const lastTransform = ref({ x: 0, y: 0 })
const showInteractionHint = ref(false)

// ===== 3D旋转交互状态 =====
const rotate3dX = ref(-25)
const rotate3dY = ref(35)
const is3dDragging = ref(false)
const drag3dStart = ref({ x: 0, y: 0 })
const last3dRotation = ref({ x: -25, y: 35 })
const is3dExploded = ref(false)

// ===== 3D立方体拆分/堆叠 =====
function toggle3DExplode() {
  is3dExploded.value = !is3dExploded.value
}

function reset3DView() {
  rotate3dX.value = -25
  rotate3dY.value = 35
  is3dExploded.value = false
}

// 根据形状和标签索引计算标注位置（R21：角的顶点在角尖，边从顶点出发，标注位置不遮挡图形）
function getShapeLabelPos(shape: string | undefined, i: number): { x: number; y: number } {
  if (shape === '角') {
    const labels = props.config.shapeDrawConfig?.labels || []
    const label = labels[i] || ''
    // 顶点标签放在顶点位置（角尖）
    if (label.includes('顶点')) return { x: 8, y: 108 }
    // 边标签放在对应边的位置
    const edgeCount = labels.slice(0, i).filter(l => l.includes('边')).length
    if (edgeCount === 0) return { x: 60, y: 85 }  // 第一条边（水平边）
    return { x: 52, y: 52 }  // 第二条边（斜边）
  }
  // 默认位置（其他形状保持原有布局）
  return { x: 25 + i * 35, y: 65 }
}

// 根据形状和标签内容确定标注颜色（R21：顶点红色，边蓝色，区分清晰）
function getShapeLabelClass(shape: string | undefined, i: number): string {
  if (shape === '角') {
    const labels = props.config.shapeDrawConfig?.labels || []
    const label = labels[i] || ''
    if (label.includes('顶点')) return 'fill-red-400'
    return 'fill-indigo-400'
  }
  return 'fill-primary-500'
}

// 根据拆分状态计算每个面的transform
function getCubeFaceTransform(face: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'): string {
  const isCube = props.config.shapeDrawConfig?.shape === '正方体3D'
  const z = isCube ? 30 : 25
  const explodeOffset = is3dExploded.value ? 20 : 0

  switch (face) {
    case 'front':
      return `translateZ(${z + explodeOffset}px)`
    case 'back':
      return `translateZ(${-z - explodeOffset}px) rotateY(180deg)`
    case 'left':
      return `rotateY(-90deg) translateZ(${z + explodeOffset}px)`
    case 'right':
      return `rotateY(90deg) translateZ(${z + explodeOffset}px)`
    case 'top':
      return `rotateX(90deg) translateZ(${z + explodeOffset}px)`
    case 'bottom':
      return `rotateX(-90deg) translateZ(${z + explodeOffset}px)`
    default:
      return ''
  }
}

// 推断语言：优先使用父组件传入的语言
const narrationLang = computed<'zh' | 'en'>(() => {
  if (props.lang) return props.lang
  const text = props.config.ttsNarration || props.config.title || ''
  if (!text) return 'zh'
  // 包含中文字符 → 中文
  if (/[\u4e00-\u9fa5]/.test(text)) return 'zh'
  // 包含拼音声调符号 → 中文（拼音）
  if (/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/.test(text)) return 'zh'
  // 全小写字母（可能是拼音音节） → 中文，由 smartConvertPinyin 处理转换
  if (/^[a-z\s,，、;；\-]+$/.test(text.trim())) return 'zh'
  // 包含大写字母（英文单词通常首字母大写） → 英文
  if (/[A-Z]/.test(text)) return 'en'
  // 默认中文（本应用以中文教育为主）
  return 'zh'
})

// 场景标题
const sceneTitle = computed(() => props.config.title || '互动动画')

// 舞台变换样式
const stageTransform = computed(() => ({
  transform: `translate(${transform.value.x}px, ${transform.value.y}px) scale(${transform.value.scale}) rotate(${transform.value.rotation}deg)`,
  transition: isDragging.value ? 'none' : 'transform 0.15s ease-out',
  transformOrigin: 'center center',
}))

// 重置变换
function resetTransform() {
  transform.value = { x: 0, y: 0, scale: 1, rotation: 0 }
}

// 鼠标拖拽
function onDragStart(e: MouseEvent) {
  if (!hasPlayed.value) return
  isDragging.value = true
  dragStart.value = { x: e.clientX, y: e.clientY }
  lastTransform.value = { x: transform.value.x, y: transform.value.y }
}

function onDragMove(e: MouseEvent) {
  if (!isDragging.value) return
  const dx = e.clientX - dragStart.value.x
  const dy = e.clientY - dragStart.value.y
  transform.value.x = lastTransform.value.x + dx
  transform.value.y = lastTransform.value.y + dy
}

function onDragEnd() {
  isDragging.value = false
}

// 滚轮缩放
function onWheel(e: WheelEvent) {
  if (!hasPlayed.value) return
  e.preventDefault()
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  transform.value.scale = Math.max(0.3, Math.min(3, transform.value.scale + delta))
}

// 右键旋转
function onContextMenu(e: MouseEvent) {
  if (!hasPlayed.value) return
  e.preventDefault()
  transform.value.rotation = (transform.value.rotation + 15) % 360
}

// 触摸交互
let touchStartDist = 0
let touchStartScale = 1
let touchStartAngle = 0
let touchStartRotation = 0

function onTouchStart(e: TouchEvent) {
  if (!hasPlayed.value) return
  if (e.touches.length === 1) {
    isDragging.value = true
    dragStart.value = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    lastTransform.value = { x: transform.value.x, y: transform.value.y }
  } else if (e.touches.length === 2) {
    isDragging.value = false
    const dx = e.touches[1].clientX - e.touches[0].clientX
    const dy = e.touches[1].clientY - e.touches[0].clientY
    touchStartDist = Math.sqrt(dx * dx + dy * dy)
    touchStartScale = transform.value.scale
    touchStartAngle = Math.atan2(dy, dx) * 180 / Math.PI
    touchStartRotation = transform.value.rotation
  }
}

function onTouchMove(e: TouchEvent) {
  if (!hasPlayed.value) return
  e.preventDefault()
  if (e.touches.length === 1 && isDragging.value) {
    const dx = e.touches[0].clientX - dragStart.value.x
    const dy = e.touches[0].clientY - dragStart.value.y
    transform.value.x = lastTransform.value.x + dx
    transform.value.y = lastTransform.value.y + dy
  } else if (e.touches.length === 2) {
    const dx = e.touches[1].clientX - e.touches[0].clientX
    const dy = e.touches[1].clientY - e.touches[0].clientY
    const dist = Math.sqrt(dx * dx + dy * dy)
    const angle = Math.atan2(dy, dx) * 180 / Math.PI
    transform.value.scale = Math.max(0.3, Math.min(3, touchStartScale * (dist / touchStartDist)))
    transform.value.rotation = touchStartRotation + (angle - touchStartAngle)
  }
}

function onTouchEnd() {
  isDragging.value = false
}

// ===== 3D立方体旋转交互 =====
function start3DRotate(e: MouseEvent) {
  is3dDragging.value = true
  drag3dStart.value = { x: e.clientX, y: e.clientY }
  last3dRotation.value = { x: rotate3dX.value, y: rotate3dY.value }
  const onMove = (ev: MouseEvent) => {
    if (!is3dDragging.value) return
    const dx = ev.clientX - drag3dStart.value.x
    const dy = ev.clientY - drag3dStart.value.y
    rotate3dY.value = last3dRotation.value.y + dx * 0.5
    rotate3dX.value = last3dRotation.value.x - dy * 0.5
  }
  const onUp = () => {
    is3dDragging.value = false
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

function start3DRotateTouch(e: TouchEvent) {
  if (e.touches.length !== 1) return
  is3dDragging.value = true
  drag3dStart.value = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  last3dRotation.value = { x: rotate3dX.value, y: rotate3dY.value }
  const onMove = (ev: TouchEvent) => {
    if (!is3dDragging.value || ev.touches.length !== 1) return
    const dx = ev.touches[0].clientX - drag3dStart.value.x
    const dy = ev.touches[0].clientY - drag3dStart.value.y
    rotate3dY.value = last3dRotation.value.y + dx * 0.5
    rotate3dX.value = last3dRotation.value.x - dy * 0.5
  }
  const onEnd = () => {
    is3dDragging.value = false
    window.removeEventListener('touchmove', onMove)
    window.removeEventListener('touchend', onEnd)
  }
  window.addEventListener('touchmove', onMove)
  window.addEventListener('touchend', onEnd)
}

// ===== 分组辅助计算 =====
// 将数量按每groupSize个一组划分，返回分组信息
function computeGroups(total: number, groupSize: number = 10) {
  if (total <= groupSize) return [{ count: total, label: `${total}` }]
  const groups: { count: number; label: string }[] = []
  const fullGroups = Math.floor(total / groupSize)
  const remainder = total % groupSize
  for (let i = 0; i < fullGroups; i++) {
    groups.push({ count: groupSize, label: `${(i + 1) * groupSize}` })
  }
  if (remainder > 0) {
    groups.push({ count: remainder, label: `${total}` })
  }
  return groups
}

// 判断是否需要分组显示
function needsGrouping(count: number, threshold: number = 10) {
  return count > threshold
}

// 判断分组中的某个物品是否属于"被拿走"的部分
// 逻辑：从总数末尾开始拿走removeCount个
function isItemRemoved(
  group: { count: number; label: string },
  groupIndex: number,
  itemIndexInGroup: number,
  removeCount: number
) {
  // 计算该物品在总数中的全局位置（从1开始）
  const groups = computeGroups(
    props.config.mergeConfig?.leftCount || 0
  )
  let globalIndex = 0
  for (let i = 0; i < groupIndex; i++) {
    globalIndex += groups[i].count
  }
  globalIndex += itemIndexInGroup // 0-based

  // 从末尾拿走removeCount个
  const total = props.config.mergeConfig?.leftCount || 0
  return globalIndex >= total - removeCount
}

// ===== 播放动画 =====
function play() {
  if (isPlaying.value) return
  isPlaying.value = true
  hasPlayed.value = true
  stopSpeech()
  resetTransform()

  if (!stageRef.value) return

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      delay: props.delay || 0,
      onComplete: () => {
        isPlaying.value = false
        // 播放完毕后显示交互提示
        setTimeout(() => { showInteractionHint.value = true }, 500)
        setTimeout(() => { showInteractionHint.value = false }, 3500)
      }
    })

    // 旁白（使用旁白角色）
    if (props.config.ttsNarration) {
      speakWithRole(props.config.ttsNarration, 'narrator', narrationLang.value)
    }

    buildAnimation(tl)
  }, stageRef.value)
}

// 重播
function replay() {
  ctx?.revert()
  stopSpeech()
  isPlaying.value = false
  hasPlayed.value = false
  showInteractionHint.value = false
  resetTransform()
  nextTick(() => play())
}

// 根据场景类型构建GSAP动画时间线
function buildAnimation(tl: gsap.core.Timeline) {
  const stage = stageRef.value!
  switch (props.config.sceneType) {
    case 'numberCount': buildNumberCount(tl, stage); break
    case 'merge': buildMerge(tl, stage); break
    case 'separate': buildSeparate(tl, stage); break
    case 'pinyin': buildPinyin(tl, stage); break
    case 'colorMix': buildColorMix(tl, stage); break
    case 'sequence': buildSequence(tl, stage); break
    case 'sceneBuild': buildSceneBuild(tl, stage); break
    case 'cpaTransition': buildCPATransition(tl, stage); break
    case 'compare': buildCompare(tl, stage); break
    case 'shapeDraw': buildShapeDraw(tl, stage); break
    case 'cardReveal': buildCardReveal(tl, stage); break
    case 'timeline': buildTimeline(tl, stage); break
    case 'verticalCalc': buildVerticalCalc(tl, stage); break
    case 'makeTen': buildMakeTen(tl, stage); break
    default: buildSceneBuild(tl, stage)
  }
}

// ===== 数数动画 =====
function buildNumberCount(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.countConfig
  if (!cfg) return

  const from = cfg.from
  const to = cfg.to

  for (let i = from; i <= to; i++) {
    const numEl = stage.querySelector(`.anim-num-${i}`) as HTMLElement
    const groupEls = stage.querySelectorAll(`.anim-group-${i}`) as NodeListOf<HTMLElement>
    const singleItemEls = stage.querySelectorAll(`.anim-item-${i}`) as NodeListOf<HTMLElement>

    if (numEl) {
      tl.fromTo(numEl,
        { autoAlpha: 0, scale: 0, rotation: -180 },
        { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)', force3D: true },
        (i - from) * 0.6
      )
    }

    // 分组框动画
    groupEls.forEach((el, j) => {
      tl.fromTo(el,
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(1.2)', force3D: true },
        (i - from) * 0.6 + 0.2 + j * 0.1
      )
    })

    // 单个物品动画
    singleItemEls.forEach((el, j) => {
      tl.fromTo(el,
        { autoAlpha: 0, scale: 0, y: -20 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.25, ease: 'bounce.out', force3D: true },
        (i - from) * 0.6 + 0.25 + j * 0.06
      )
    })

    // 朗读（老师角色）
    tl.call(() => {
      speakWithRole(String(i), 'teacher', narrationLang.value)
    }, null, (i - from) * 0.6 + 0.3)
  }
}

// ===== 合并动画（加法）=====
function buildMerge(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.mergeConfig
  if (!cfg) return

  const leftGroup = stage.querySelectorAll('.merge-group-a') as NodeListOf<HTMLElement>
  const rightGroup = stage.querySelectorAll('.merge-group-b') as NodeListOf<HTMLElement>
  const resultGroup = stage.querySelectorAll('.merge-result') as NodeListOf<HTMLElement>
  const operatorEl = stage.querySelector('.merge-operator') as HTMLElement
  const resultNumEl = stage.querySelector('.merge-result-num') as HTMLElement

  // 左边物品出现
  leftGroup.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, x: -50, scale: 0 },
      { autoAlpha: 1, x: 0, scale: 1, duration: 0.3, ease: 'back.out(1.5)', force3D: true },
      i * 0.15
    )
  })

  tl.call(() => speakWithRole(`${cfg.leftCount}`, 'teacher', narrationLang.value), null, 0.3)

  // 加号出现
  if (operatorEl) {
    tl.fromTo(operatorEl,
      { autoAlpha: 0, scale: 0, rotation: -90 },
      { autoAlpha: 1, scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2)', force3D: true },
      cfg.leftCount * 0.15 + 0.3
    )
  }

  // 右边物品出现
  rightGroup.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, x: 50, scale: 0 },
      { autoAlpha: 1, x: 0, scale: 1, duration: 0.3, ease: 'back.out(1.5)', force3D: true },
      cfg.leftCount * 0.15 + 0.6 + i * 0.15
    )
  })

  tl.call(() => speakWithRole(`${cfg.operator === '+' ? '加' : '减'} ${cfg.rightCount}`, 'teacher', narrationLang.value), null, cfg.leftCount * 0.15 + 0.8)

  // 合并动画
  const mergeTime = (cfg.leftCount + cfg.rightCount) * 0.15 + 1.2
  leftGroup.forEach(el => {
    tl.to(el, { x: 80, duration: 0.5, ease: 'power2.inOut', force3D: true }, mergeTime)
  })
  rightGroup.forEach(el => {
    tl.to(el, { x: -80, duration: 0.5, ease: 'power2.inOut', force3D: true }, mergeTime)
  })

  // 结果出现
  if (resultNumEl) {
    tl.fromTo(resultNumEl,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'back.out(2)', force3D: true },
      mergeTime + 0.5
    )
  }

  resultGroup.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'bounce.out', force3D: true },
      mergeTime + 0.6 + i * 0.08
    )
  })

  tl.call(() => speakWithRole(`等于 ${cfg.resultCount}`, 'student', narrationLang.value), null, mergeTime + 0.8)
}

// ===== 分离动画（减法）=====
function buildSeparate(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.mergeConfig
  if (!cfg) return

  const allItems = stage.querySelectorAll('.sep-all') as NodeListOf<HTMLElement>
  const removeItems = stage.querySelectorAll('.sep-remove') as NodeListOf<HTMLElement>
  const remainItems = stage.querySelectorAll('.sep-remain') as NodeListOf<HTMLElement>
  const resultEl = stage.querySelector('.sep-result') as HTMLElement

  // 全部物品出现
  allItems.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(1.5)', force3D: true },
      i * 0.12
    )
  })

  tl.call(() => speakWithRole(`${cfg.leftCount}个`, 'teacher', narrationLang.value), null, 0.3)

  // 拿走动画
  const removeTime = cfg.leftCount * 0.12 + 0.8
  removeItems.forEach((el, i) => {
    tl.to(el, {
      autoAlpha: 0, y: -40, scale: 0.3, rotation: 20,
      duration: 0.4, ease: 'power2.in', force3D: true
    }, removeTime + i * 0.2)
  })

  tl.call(() => speakWithRole(`拿走${cfg.rightCount}个`, 'teacher', narrationLang.value), null, removeTime)

  // 剩余高亮
  remainItems.forEach(el => {
    tl.to(el, {
      scale: 1.15, duration: 0.2, ease: 'power2.out', force3D: true, yoyo: true, repeat: 1
    }, removeTime + cfg.rightCount * 0.2 + 0.3)
  })

  // 结果出现
  if (resultEl) {
    tl.fromTo(resultEl,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'back.out(2)', force3D: true },
      removeTime + cfg.rightCount * 0.2 + 0.6
    )
  }

  tl.call(() => speakWithRole(`还剩${cfg.resultCount}个`, 'student', narrationLang.value), null, removeTime + cfg.rightCount * 0.2 + 0.8)
}

// ===== 拼音动画 =====
function buildPinyin(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.pinyinConfig
  if (!cfg) return

  const letterEls = stage.querySelectorAll('.pinyin-letter') as NodeListOf<HTMLElement>
  const keywordEls = stage.querySelectorAll('.pinyin-keyword') as NodeListOf<HTMLElement>

  letterEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, y: -60, scale: 0.3, rotation: (Math.random() - 0.5) * 40 },
      { autoAlpha: 1, y: 0, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)', force3D: true },
      i * 0.5
    )

    tl.call(() => {
      const letter = cfg.letters[i]
      speakPinyin(letter, 0.7)
    }, null, i * 0.5 + 0.3)

    tl.to(el, {
      y: 'random(-5, 5)', duration: 'random(2, 3)',
      ease: 'sine.inOut', repeat: -1, yoyo: true, repeatRefresh: true, force3D: true
    }, i * 0.5 + 0.8)
  })

  keywordEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, duration: 0.4, ease: 'power2.out', force3D: true },
      cfg.letters.length * 0.5 + 0.3 + i * 0.3
    )
  })
}

// ===== 颜色混合动画 =====
function buildColorMix(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.colorMixConfig
  if (!cfg) return

  const color1El = stage.querySelector('.color-blob-1') as HTMLElement
  const color2El = stage.querySelector('.color-blob-2') as HTMLElement
  const resultEl = stage.querySelector('.color-blob-result') as HTMLElement
  const labelEl = stage.querySelector('.color-result-label') as HTMLElement

  if (color1El) {
    tl.fromTo(color1El,
      { autoAlpha: 0, scale: 0, x: -60 },
      { autoAlpha: 1, scale: 1, x: 0, duration: 0.6, ease: 'back.out(1.7)', force3D: true }, 0)
  }
  tl.call(() => speak(cfg.color1, 'en', 0.8), null, 0.3)

  if (color2El) {
    tl.fromTo(color2El,
      { autoAlpha: 0, scale: 0, x: 60 },
      { autoAlpha: 1, scale: 1, x: 0, duration: 0.6, ease: 'back.out(1.7)', force3D: true }, 0.8)
  }
  tl.call(() => speak(cfg.color2, 'en', 0.8), null, 1.1)

  if (color1El && color2El && resultEl) {
    tl.to(color1El, { x: 30, scale: 0.8, duration: 0.5, ease: 'power2.inOut', force3D: true }, 1.8)
    tl.to(color2El, { x: -30, scale: 0.8, duration: 0.5, ease: 'power2.inOut', force3D: true }, 1.8)
    tl.to([color1El, color2El], { autoAlpha: 0, duration: 0.3, force3D: true }, 2.3)
    tl.fromTo(resultEl,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1.2, duration: 0.5, ease: 'back.out(2)', force3D: true }, 2.5)
    tl.to(resultEl, { scale: 1, duration: 0.3, force3D: true }, 3.0)
  }

  if (labelEl) {
    tl.fromTo(labelEl,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out', force3D: true }, 2.8)
  }

  tl.call(() => speak(`${cfg.color1} and ${cfg.color2} make ${cfg.resultColor}`, 'en', 0.8), null, 2.8)
}

// ===== 排序动画 =====
function buildSequence(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.sequenceConfig
  if (!cfg) return

  const itemEls = stage.querySelectorAll('.seq-item') as NodeListOf<HTMLElement>
  const arrowEls = stage.querySelectorAll('.seq-arrow') as NodeListOf<HTMLElement>

  itemEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, y: 30, scale: 0.5 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)', force3D: true },
      i * 0.35)
    tl.call(() => speakWithRole(cfg.items[i], 'teacher', narrationLang.value), null, i * 0.35 + 0.2)
  })

  arrowEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, scaleX: 0 },
      { autoAlpha: 1, scaleX: 1, duration: 0.3, ease: 'power2.out', force3D: true },
      i * 0.35 + 0.3)
  })
}

// ===== 场景构建动画 =====
function buildSceneBuild(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.sceneBuildConfig
  if (!cfg) return

  const elementEls = stage.querySelectorAll('.scene-element') as NodeListOf<HTMLElement>

  elementEls.forEach((el, i) => {
    const animType = el.dataset.anim || 'bounceIn'
    const delay = parseFloat(el.dataset.delay || String(i * 0.4))

    switch (animType) {
      case 'fadeIn':
        tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: 'power2.out', force3D: true }, delay)
        break
      case 'slideIn':
        tl.fromTo(el, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true }, delay)
        break
      case 'scaleIn':
        tl.fromTo(el, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', force3D: true }, delay)
        break
      default:
        tl.fromTo(el, { autoAlpha: 0, scale: 0.3 }, { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', force3D: true }, delay)
    }

    const tts = el.dataset.tts
    if (tts) {
      tl.call(() => speakWithRole(tts, 'teacher', narrationLang.value), null, delay + 0.2)
    }
  })
}

// ===== CPA过渡动画 =====
function buildCPATransition(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.cpaConfig
  if (!cfg) return

  const concreteEl = stage.querySelector('.cpa-concrete') as HTMLElement
  const pictorialEl = stage.querySelector('.cpa-pictorial') as HTMLElement
  const abstractEl = stage.querySelector('.cpa-abstract') as HTMLElement
  const arrow1 = stage.querySelector('.cpa-arrow-1') as HTMLElement
  const arrow2 = stage.querySelector('.cpa-arrow-2') as HTMLElement

  if (concreteEl) {
    tl.fromTo(concreteEl,
      { autoAlpha: 0, scale: 0.5, y: 20 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)', force3D: true }, 0)
  }
  tl.call(() => speakWithRole(`实物：${cfg.concrete.text}`, 'teacher', 'zh'), null, 0.3)

  if (arrow1) {
    tl.fromTo(arrow1,
      { autoAlpha: 0, scaleX: 0 },
      { autoAlpha: 1, scaleX: 1, duration: 0.4, ease: 'power2.out', force3D: true }, 1.0)
  }

  if (pictorialEl) {
    tl.fromTo(pictorialEl,
      { autoAlpha: 0, scale: 0.5, y: 20 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)', force3D: true }, 1.4)
  }
  tl.call(() => speakWithRole(`图示：${cfg.pictorial.text}`, 'teacher', 'zh'), null, 1.7)

  if (arrow2) {
    tl.fromTo(arrow2,
      { autoAlpha: 0, scaleX: 0 },
      { autoAlpha: 1, scaleX: 1, duration: 0.4, ease: 'power2.out', force3D: true }, 2.4)
  }

  if (abstractEl) {
    tl.fromTo(abstractEl,
      { autoAlpha: 0, scale: 0.5, y: 20 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)', force3D: true }, 2.8)
  }
  tl.call(() => speakWithRole(`符号：${cfg.abstract.text}`, 'student', 'zh'), null, 3.1)
}

// ===== 比较动画 =====
function buildCompare(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.compareConfig
  if (!cfg) return

  const leftEls = stage.querySelectorAll('.compare-left') as NodeListOf<HTMLElement>
  const rightEls = stage.querySelectorAll('.compare-right') as NodeListOf<HTMLElement>
  const lineEls = stage.querySelectorAll('.compare-line') as NodeListOf<HTMLElement>
  const resultEl = stage.querySelector('.compare-result') as HTMLElement

  leftEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, x: -30 },
      { autoAlpha: 1, x: 0, duration: 0.3, ease: 'back.out(1.5)', force3D: true }, i * 0.2)
  })

  rightEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, x: 30 },
      { autoAlpha: 1, x: 0, duration: 0.3, ease: 'back.out(1.5)', force3D: true }, i * 0.2 + 0.3)
  })

  lineEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, scaleX: 0 },
      { autoAlpha: 1, scaleX: 1, duration: 0.3, ease: 'power2.out', force3D: true }, 0.8 + i * 0.15)
  })

  if (resultEl) {
    tl.fromTo(resultEl,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', force3D: true }, 1.5)
  }

  tl.call(() => speakWithRole(cfg.resultText, 'student', 'zh'), null, 1.7)
}

// ===== 图形绘制动画 =====
function buildShapeDraw(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.shapeDrawConfig
  if (!cfg) return

  const shapeEl = stage.querySelector('.shape-svg') as HTMLElement
  const drawLines = stage.querySelectorAll('.draw-line') as NodeListOf<HTMLElement>
  const drawRects = stage.querySelectorAll('.draw-rect') as NodeListOf<HTMLElement>
  const drawPolys = stage.querySelectorAll('.draw-poly') as NodeListOf<HTMLElement>
  const drawCircles = stage.querySelectorAll('.draw-circle') as NodeListOf<HTMLElement>
  const labelEls = stage.querySelectorAll('.shape-label') as NodeListOf<HTMLElement>

  // SVG容器淡入
  if (shapeEl) {
    tl.fromTo(shapeEl,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.3, ease: 'power2.out', force3D: true }, 0)
  }

  // 描边绘制动画：用GSAP驱动stroke-dashoffset从初始值到0
  const allDrawEls = [...drawLines, ...drawRects, ...drawPolys, ...drawCircles]
  allDrawEls.forEach((el, i) => {
    const dashOffset = el.getAttribute('stroke-dashoffset')
    const dashArray = el.getAttribute('stroke-dasharray')
    if (dashOffset && dashArray) {
      tl.fromTo(el,
        { strokeDashoffset: parseFloat(dashOffset) },
        { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', force3D: true },
        0.3 + i * 0.4
      )
    }
  })

  // 标注元素弹出
  labelEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)', force3D: true },
      1.5 + i * 0.3)
  })

  tl.call(() => speakWithRole(`这是一个${cfg.shape}`, 'teacher', 'zh'), null, 0.3)
}

// ===== 卡片揭示动画 =====
function buildCardReveal(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.cardRevealConfig
  if (!cfg) return

  const cardEls = stage.querySelectorAll('.reveal-card') as NodeListOf<HTMLElement>

  cardEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, rotationY: -90, scale: 0.8 },
      { autoAlpha: 1, rotationY: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)', force3D: true },
      i * 0.6)

    if (cfg.cards[i]) {
      tl.call(() => speakWithRole(cfg.cards[i].ttsText, 'teacher', narrationLang.value), null, i * 0.6 + 0.3)
    }
  })
}

// ===== 时间线动画 =====
function buildTimeline(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.timelineConfig
  if (!cfg) return

  const stepEls = stage.querySelectorAll('.timeline-step') as NodeListOf<HTMLElement>
  const connectorEls = stage.querySelectorAll('.timeline-connector') as NodeListOf<HTMLElement>

  stepEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, y: 20, scale: 0.8 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)', force3D: true },
      i * 0.8)

    if (cfg.steps[i]) {
      tl.call(() => speakWithRole(cfg.steps[i].ttsNarration || cfg.steps[i].ttsText || '', 'narrator', narrationLang.value), null, i * 0.8 + 0.2)
    }
  })

  connectorEls.forEach((el, i) => {
    tl.fromTo(el,
      { autoAlpha: 0, scaleX: 0 },
      { autoAlpha: 1, scaleX: 1, duration: 0.3, ease: 'power2.out', force3D: true },
      i * 0.8 + 0.5)
  })
}

// ===== 竖式计算动画 =====
function buildVerticalCalc(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.verticalCalcConfig
  if (!cfg) return

  const num1Digits = stage.querySelectorAll('.num1-digit')
  const num2Digits = stage.querySelectorAll('.num2-digit')
  const operatorEl = stage.querySelector('.operator') as HTMLElement
  const lineEl = stage.querySelector('.calc-line') as HTMLElement
  const resultDigits = stage.querySelectorAll('.result-digit')
  const carryDigits = stage.querySelectorAll('.carry-digit')
  const stepTextEl = stage.querySelector('.calc-step-text') as HTMLElement

  // 第1步：第一个数逐位出现
  num1Digits.forEach((el, i) => {
    tl.fromTo(el, { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)', force3D: true }, i * 0.2)
  })

  // 第2步：运算符和第二个数出现
  tl.fromTo(operatorEl, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)', force3D: true }, '+=0.2')
  num2Digits.forEach((el, i) => {
    tl.fromTo(el, { autoAlpha: 0, y: -10 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)', force3D: true }, i * 0.2 + 0.3)
  })

  // 第3步：横线画出
  tl.fromTo(lineEl, { autoAlpha: 0, scaleX: 0 }, { autoAlpha: 1, scaleX: 1, duration: 0.4, ease: 'power2.out', force3D: true }, '+=0.2')

  // 第4步：如果有进位，先显示进位
  if (cfg.carry && cfg.carry.length > 0) {
    cfg.carry.forEach((c, i) => {
      if (c > 0) {
        const carryEl = carryDigits[i] as HTMLElement | undefined
        if (carryEl) {
          tl.fromTo(carryEl, { autoAlpha: 0, y: 10, scale: 0.5 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(2)', force3D: true }, '+=0.1')
          // 进位闪烁强调
          tl.to(carryEl, { color: '#dc2626', scale: 1.3, duration: 0.2, yoyo: true, repeat: 1, force3D: true })
        }
      }
    })
  }

  // 第5步：如果有借位，标记借位
  if (cfg.borrow && cfg.borrow.length > 0) {
    cfg.borrow.forEach((b, i) => {
      if (b > 0) {
        // 借位时被借位的高位数字变红变小（i=0是个位借位，被借的是十位即num1Digits[length-2]）
        const digitEl = num1Digits[num1Digits.length - 2 - i] as HTMLElement | undefined
        if (digitEl) {
          tl.to(digitEl, { color: '#dc2626', scale: 0.9, duration: 0.2, force3D: true })
          tl.to(digitEl, { scale: 1, duration: 0.2, force3D: true })
        }
      }
    })
  }

  // 第6步：结果逐位出现（从个位开始）
  const resultStr = String(cfg.result)
  for (let i = resultStr.length - 1; i >= 0; i--) {
    const resEl = resultDigits[i] as HTMLElement | undefined
    if (resEl) {
      tl.fromTo(resEl, { autoAlpha: 0, y: 10, scale: 0.5 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)', force3D: true }, '+=0.15')
      // 结果数字闪烁强调
      tl.to(resEl, { scale: 1.2, duration: 0.15, yoyo: true, repeat: 1, force3D: true })
    }
  }

  // 第7步：显示步骤说明
  if (cfg.steps && cfg.steps.length > 0) {
    const stepTexts = cfg.steps.map(s => s.text).join(' → ')
    if (stepTextEl) {
      tl.call(() => { stepTextEl.textContent = stepTexts }, null, '+=0.2')
      tl.fromTo(stepTextEl, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, force3D: true })
    }
  }

  // 朗读旁白
  if (props.config.ttsNarration) {
    tl.call(() => speakWithRole(props.config.ttsNarration!, 'narrator', narrationLang.value), null, 0.5)
  }
}

// ===== 凑十法动画 =====
function buildMakeTen(tl: gsap.core.Timeline, stage: HTMLElement) {
  const cfg = props.config.makeTenConfig
  if (!cfg) return

  const bigNumEl = stage.querySelector('.big-num') as HTMLElement
  const operatorEl = stage.querySelector('.operator') as HTMLElement
  const smallNumEl = stage.querySelector('.small-num') as HTMLElement
  const splitRow = stage.querySelector('.split-row') as HTMLElement
  const tenRow = stage.querySelector('.ten-row') as HTMLElement
  const finalRow = stage.querySelector('.final-row') as HTMLElement
  const hintEl = stage.querySelector('.make-ten-hint') as HTMLElement

  // 第1步：大数出现
  tl.fromTo(bigNumEl, { autoAlpha: 0, scale: 0.3 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', force3D: true })
  tl.fromTo(operatorEl, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)', force3D: true }, '-=0.1')
  tl.fromTo(smallNumEl, { autoAlpha: 0, scale: 0.3 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', force3D: true })

  // 第2步：小数拆分动画——小数先抖动，然后显示拆分
  tl.to(smallNumEl, { x: -3, duration: 0.05, yoyo: true, repeat: 3, force3D: true }, '+=0.3')
  tl.fromTo(splitRow, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true })

  // 拆分后的小数高亮闪烁
  const splitLeftEl = stage.querySelector('.split-left') as HTMLElement
  const splitRightEl = stage.querySelector('.split-right') as HTMLElement
  if (splitLeftEl) {
    tl.to(splitLeftEl, { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1, force3D: true })
  }

  // 第3步：凑十——大数和拆分左边的数合为10
  tl.fromTo(tenRow, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true }, '+=0.3')

  // 10的徽章闪烁强调
  const tenBadge = stage.querySelector('.ten-badge') as HTMLElement
  if (tenBadge) {
    tl.to(tenBadge, { scale: 1.3, duration: 0.2, yoyo: true, repeat: 2, force3D: true })
  }

  // 第4步：最终结果
  tl.fromTo(finalRow, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out', force3D: true }, '+=0.3')

  // 最终结果闪烁
  const finalResult = stage.querySelector('.final-result') as HTMLElement
  if (finalResult) {
    tl.to(finalResult, { scale: 1.2, duration: 0.15, yoyo: true, repeat: 2, force3D: true })
  }

  // 第5步：显示凑十口诀
  tl.fromTo(hintEl, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, force3D: true }, '+=0.2')

  // 朗读旁白
  if (props.config.ttsNarration) {
    tl.call(() => speakWithRole(props.config.ttsNarration!, 'narrator', narrationLang.value), null, 0.5)
  }
}

// 点击元素朗读
function handleElementClick(ttsText: string) {
  if (ttsText) {
    speakWithRole(ttsText, 'student', narrationLang.value)
  }
}

// 卡片翻转状态
const flippedCards = ref<Set<number>>(new Set())
function toggleCard(index: number, ttsText: string) {
  if (flippedCards.value.has(index)) {
    flippedCards.value.delete(index)
  } else {
    flippedCards.value.add(index)
    if (ttsText) speakWithRole(ttsText, 'child', narrationLang.value)
  }
}

onUnmounted(() => {
  ctx?.revert()
  stopSpeech()
})
</script>

<template>
  <div ref="containerRef" class="lesson-animation rounded-2xl overflow-hidden border-2 border-primary-200 bg-gradient-to-br from-primary-50/50 to-secondary-50/50">
    <!-- 动画标题栏 -->
    <div class="flex items-center justify-between px-4 py-2 bg-primary-100/60">
      <div class="flex items-center gap-2">
        <span class="text-lg">🎬</span>
        <span class="text-sm font-medium text-primary-700">{{ sceneTitle }}</span>
      </div>
      <div class="flex items-center gap-1">
        <!-- 交互提示 -->
        <span v-if="showInteractionHint" class="text-[10px] text-primary-400 animate-pulse mr-1">
          拖拽移动 · 滚轮缩放 · 右键旋转
        </span>
        <button v-if="hasPlayed && (transform.x !== 0 || transform.y !== 0 || transform.scale !== 1 || transform.rotation !== 0)"
          @click="resetTransform" class="p-1.5 rounded-lg hover:bg-primary-200/60 transition-colors" title="重置视角">
          <Move class="w-4 h-4 text-primary-500" />
        </button>
        <button v-if="hasPlayed" @click="replay" class="p-1.5 rounded-lg hover:bg-primary-200/60 transition-colors" title="重播">
          <RotateCcw class="w-4 h-4 text-primary-600" />
        </button>
        <button @click="isSpeaking ? stopSpeech() : (props.config.ttsNarration && speakWithRole(props.config.ttsNarration, 'narrator', narrationLang))"
          class="p-1.5 rounded-lg hover:bg-primary-200/60 transition-colors" :title="isSpeaking ? '停止朗读' : '朗读旁白'">
          <VolumeX v-if="isSpeaking" class="w-4 h-4 text-primary-500" />
          <Volume2 v-else class="w-4 h-4 text-primary-400" />
        </button>
      </div>
    </div>

    <!-- 动画舞台（支持鼠标交互） -->
    <div class="relative p-4 min-h-[200px] overflow-hidden select-none"
      :class="{ 'cursor-grab': hasPlayed && !isDragging, 'cursor-grabbing': isDragging }"
      @mousedown="onDragStart"
      @mousemove="onDragMove"
      @mouseup="onDragEnd"
      @mouseleave="onDragEnd"
      @wheel.prevent="onWheel"
      @contextmenu="onContextMenu"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd">

      <!-- 未播放状态：播放按钮 -->
      <button v-if="!hasPlayed" @click="play"
        class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-white/40 backdrop-blur-sm hover:bg-white/30 transition-colors">
        <div class="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Play class="w-7 h-7 text-white ml-1" />
        </div>
        <span class="text-sm text-primary-600 font-medium">点击播放动画</span>
      </button>

      <!-- 可变换的内容层 -->
      <div ref="stageRef" class="flex items-center justify-center" :style="stageTransform">

        <!-- ===== 数数场景（支持分组） ===== -->
        <template v-if="config.sceneType === 'numberCount' && config.countConfig">
          <div class="flex flex-wrap gap-3 justify-center items-end">
            <div v-for="n in (config.countConfig.to - config.countConfig.from + 1)" :key="n"
              class="flex flex-col items-center gap-1">
              <div :class="`anim-num-${config.countConfig.from + n - 1}`"
                class="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center font-title text-xl shadow-md"
                style="opacity:0">
                {{ config.countConfig.from + n - 1 }}
              </div>
              <!-- 分组显示：数量>10时每10个一组 -->
              <template v-if="needsGrouping(config.countConfig.from + n - 1)">
                <div class="flex flex-wrap gap-1 max-w-[120px] justify-center">
                  <div v-for="(group, gi) in computeGroups(config.countConfig.from + n - 1)" :key="gi"
                    :class="[`anim-group-${config.countConfig.from + n - 1}`, 'flex flex-wrap gap-0.5 p-1 rounded-lg border-2 border-dashed', group.count === 10 ? 'border-primary-300 bg-primary-50/50' : 'border-yellow-300 bg-yellow-50/50']"
                    style="opacity:0">
                    <span v-for="j in group.count" :key="j"
                      :class="`anim-item-${config.countConfig.from + n - 1}`"
                      class="text-sm" style="opacity:0">
                      {{ config.countConfig.itemEmoji || '⭐' }}
                    </span>
                    <span class="text-[10px] text-primary-400 w-full text-center">{{ group.count === 10 ? '10' : group.label }}</span>
                  </div>
                </div>
              </template>
              <!-- 普通显示：数量<=10 -->
              <template v-else>
                <div class="flex flex-col items-center gap-0.5">
                  <span v-for="j in (config.countConfig.from + n - 1)" :key="j"
                    :class="`anim-item-${config.countConfig.from + n - 1}`"
                    class="text-lg" style="opacity:0">
                    {{ config.countConfig.itemEmoji || '⭐' }}
                  </span>
                </div>
              </template>
            </div>
          </div>
        </template>

        <!-- ===== 合并场景（加法，支持分组） ===== -->
        <template v-if="config.sceneType === 'merge' && config.mergeConfig">
          <div class="flex items-center gap-3 flex-wrap justify-center">
            <!-- 左组 -->
            <div class="flex gap-1 flex-wrap max-w-[240px] justify-end">
              <template v-if="needsGrouping(config.mergeConfig.leftCount)">
                <div v-for="(group, gi) in computeGroups(config.mergeConfig.leftCount)" :key="'ag'+gi"
                  class="merge-group-a flex flex-wrap gap-0.5 p-1 rounded-lg border-2 border-dashed border-primary-300 bg-primary-50/30"
                  style="opacity:0">
                  <span v-for="j in group.count" :key="j" class="text-xl">{{ config.mergeConfig.leftEmoji }}</span>
                  <span class="text-[10px] text-primary-400 w-full text-center">{{ group.count }}</span>
                </div>
              </template>
              <template v-else>
                <span v-for="i in config.mergeConfig.leftCount" :key="'a'+i"
                  class="merge-group-a text-2xl" style="opacity:0">{{ config.mergeConfig.leftEmoji }}</span>
              </template>
            </div>
            <!-- 运算符 -->
            <span class="merge-operator font-title text-3xl text-primary-600" style="opacity:0">
              {{ config.mergeConfig.operator }}
            </span>
            <!-- 右组 -->
            <div class="flex gap-1 flex-wrap max-w-[240px] justify-start">
              <template v-if="needsGrouping(config.mergeConfig.rightCount)">
                <div v-for="(group, gi) in computeGroups(config.mergeConfig.rightCount)" :key="'bg'+gi"
                  class="merge-group-b flex flex-wrap gap-0.5 p-1 rounded-lg border-2 border-dashed border-secondary-300 bg-secondary-50/30"
                  style="opacity:0">
                  <span v-for="j in group.count" :key="j" class="text-xl">{{ config.mergeConfig.rightEmoji }}</span>
                  <span class="text-[10px] text-secondary-400 w-full text-center">{{ group.count }}</span>
                </div>
              </template>
              <template v-else>
                <span v-for="i in config.mergeConfig.rightCount" :key="'b'+i"
                  class="merge-group-b text-2xl" style="opacity:0">{{ config.mergeConfig.rightEmoji }}</span>
              </template>
            </div>
            <!-- 等号 -->
            <span class="font-title text-3xl text-gray-400">=</span>
            <!-- 结果 -->
            <div class="flex flex-col items-center gap-1">
              <span class="merge-result-num font-title text-3xl text-green-600" style="opacity:0">
                {{ config.mergeConfig.resultCount }}
              </span>
              <div class="flex gap-1 flex-wrap max-w-[240px] justify-center">
                <template v-if="needsGrouping(config.mergeConfig.resultCount)">
                  <div v-for="(group, gi) in computeGroups(config.mergeConfig.resultCount)" :key="'rg'+gi"
                    class="merge-result flex flex-wrap gap-0.5 p-1 rounded-lg border-2 border-dashed border-green-300 bg-green-50/30"
                    style="opacity:0">
                    <span v-for="j in group.count" :key="j" class="text-xl">{{ config.mergeConfig.resultEmoji || config.mergeConfig.leftEmoji }}</span>
                    <span class="text-[10px] text-green-400 w-full text-center">{{ group.count }}</span>
                  </div>
                </template>
                <template v-else>
                  <span v-for="i in config.mergeConfig.resultCount" :key="'r'+i"
                    class="merge-result text-2xl" style="opacity:0">{{ config.mergeConfig.resultEmoji || config.mergeConfig.leftEmoji }}</span>
                </template>
              </div>
            </div>
          </div>
        </template>

        <!-- ===== 分离场景（减法，支持分组） ===== -->
        <template v-if="config.sceneType === 'separate' && config.mergeConfig">
          <div class="flex flex-col items-center gap-4">
            <!-- 全部物品 -->
            <div class="flex gap-1 flex-wrap justify-center max-w-[280px]">
              <template v-if="needsGrouping(config.mergeConfig.leftCount)">
                <div v-for="(group, gi) in computeGroups(config.mergeConfig.leftCount)" :key="'sg'+gi"
                  class="sep-all flex flex-wrap gap-0.5 p-1 rounded-lg border-2 border-dashed relative"
                  :class="group.count === 10 ? 'border-primary-300 bg-primary-50/30' : 'border-yellow-300 bg-yellow-50/30'"
                  style="opacity:0">
                  <span v-for="j in group.count" :key="j"
                    :class="isItemRemoved(group, gi, j, config.mergeConfig!.rightCount) ? 'sep-remove' : 'sep-remain'"
                    class="text-xl">{{ config.mergeConfig.leftEmoji }}</span>
                  <span class="text-[10px] text-primary-400 w-full text-center">{{ group.count }}</span>
                </div>
              </template>
              <template v-else>
                <span v-for="i in config.mergeConfig.leftCount" :key="'all'+i"
                  :class="['sep-all', i > config.mergeConfig.leftCount - config.mergeConfig.rightCount ? 'sep-remove' : 'sep-remain']"
                  class="text-2xl" style="opacity:0">{{ config.mergeConfig.leftEmoji }}</span>
              </template>
            </div>
            <!-- 算式 -->
            <div class="flex items-center gap-2 font-title text-xl text-gray-600">
              <span>{{ config.mergeConfig.leftCount }}</span>
              <span class="text-red-500">- {{ config.mergeConfig.rightCount }}</span>
              <span>=</span>
              <span class="sep-result text-green-600 font-bold" style="opacity:0">{{ config.mergeConfig.resultCount }}</span>
            </div>
          </div>
        </template>

        <!-- ===== 拼音场景 ===== -->
        <template v-if="config.sceneType === 'pinyin' && config.pinyinConfig">
          <div class="flex flex-col items-center gap-4">
            <div class="flex gap-4 flex-wrap justify-center">
              <div v-for="(letter, i) in config.pinyinConfig.letters" :key="i"
                class="pinyin-letter flex flex-col items-center gap-1 cursor-pointer"
                style="opacity:0"
                @click="handleElementClick(letter)">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300 flex items-center justify-center font-title text-2xl text-yellow-700 shadow-md">
                  {{ letter }}
                </div>
                <span v-if="config.pinyinConfig.keywords?.[i]" class="pinyin-keyword text-xs text-gray-500" style="opacity:0">
                  {{ config.pinyinConfig.keywords[i] }}
                </span>
              </div>
            </div>
          </div>
        </template>

        <!-- ===== 颜色混合场景 ===== -->
        <template v-if="config.sceneType === 'colorMix' && config.colorMixConfig">
          <div class="flex items-center gap-4 justify-center">
            <div class="color-blob-1 w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-sm"
              :style="{ backgroundColor: config.colorMixConfig.color1Hex, opacity: 0 }">
              {{ config.colorMixConfig.color1 }}
            </div>
            <span class="font-title text-2xl text-gray-400">+</span>
            <div class="color-blob-2 w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-sm"
              :style="{ backgroundColor: config.colorMixConfig.color2Hex, opacity: 0 }">
              {{ config.colorMixConfig.color2 }}
            </div>
            <span class="font-title text-2xl text-gray-400">=</span>
            <div class="flex flex-col items-center gap-1">
              <div class="color-blob-result w-24 h-24 rounded-full shadow-xl flex items-center justify-center text-white font-bold"
                :style="{ backgroundColor: config.colorMixConfig.resultHex, opacity: 0 }">
                {{ config.colorMixConfig.resultColor }}
              </div>
              <span class="color-result-label text-sm text-gray-600" style="opacity:0">
                {{ config.colorMixConfig.color1 }} + {{ config.colorMixConfig.color2 }} = {{ config.colorMixConfig.resultColor }}
              </span>
            </div>
          </div>
        </template>

        <!-- ===== 排序场景 ===== -->
        <template v-if="config.sceneType === 'sequence' && config.sequenceConfig">
          <div class="flex items-center gap-2 flex-wrap justify-center">
            <template v-for="(item, i) in config.sequenceConfig.items" :key="i">
              <div class="seq-item px-4 py-2 rounded-xl bg-white border-2 border-primary-200 font-title text-lg text-primary-700 shadow-sm cursor-pointer"
                style="opacity:0"
                @click="handleElementClick(item)">
                {{ item }}
              </div>
              <span v-if="i < config.sequenceConfig.items.length - 1" class="seq-arrow text-primary-300 text-xl" style="opacity:0">→</span>
            </template>
          </div>
        </template>

        <!-- ===== 场景构建 ===== -->
        <template v-if="config.sceneType === 'sceneBuild' && config.sceneBuildConfig">
          <div class="flex flex-wrap gap-3 justify-center items-center">
            <div v-for="(el, i) in config.sceneBuildConfig.elements" :key="i"
              class="scene-element flex flex-col items-center gap-1 cursor-pointer"
              :data-anim="el.animation || 'bounceIn'"
              :data-delay="el.delay ?? i * 0.4"
              :data-tts="el.ttsText || ''"
              style="opacity:0"
              @click="handleElementClick(el.ttsText || el.text || '')">
              <span class="text-3xl">{{ el.emoji || '📦' }}</span>
              <span v-if="el.text" class="text-xs text-gray-600 text-center max-w-[60px]">{{ el.text }}</span>
            </div>
          </div>
        </template>

        <!-- ===== CPA过渡场景 ===== -->
        <template v-if="config.sceneType === 'cpaTransition' && config.cpaConfig">
          <div class="flex items-center gap-3 justify-center flex-wrap">
            <div class="cpa-concrete flex flex-col items-center gap-1 rounded-2xl p-3 bg-green-50 border-2 border-green-200 cursor-pointer"
              style="opacity:0" @click="handleElementClick(config.cpaConfig!.concrete.text)">
              <span class="text-3xl">{{ config.cpaConfig.concrete.emoji }}</span>
              <span class="text-sm font-medium text-green-700">{{ config.cpaConfig.concrete.text }}</span>
              <span class="text-[10px] text-green-500">实物</span>
            </div>
            <span class="cpa-arrow-1 text-primary-400 text-2xl" style="opacity:0">→</span>
            <div class="cpa-pictorial flex flex-col items-center gap-1 rounded-2xl p-3 bg-blue-50 border-2 border-blue-200 cursor-pointer"
              style="opacity:0" @click="handleElementClick(config.cpaConfig!.pictorial.text)">
              <span class="text-3xl">{{ config.cpaConfig.pictorial.emoji }}</span>
              <span class="text-sm font-medium text-blue-700">{{ config.cpaConfig.pictorial.text }}</span>
              <span class="text-[10px] text-blue-500">图示</span>
            </div>
            <span class="cpa-arrow-2 text-primary-400 text-2xl" style="opacity:0">→</span>
            <div class="cpa-abstract flex flex-col items-center gap-1 rounded-2xl p-3 bg-purple-50 border-2 border-purple-200 cursor-pointer"
              style="opacity:0" @click="handleElementClick(config.cpaConfig!.abstract.text)">
              <span class="text-3xl">{{ config.cpaConfig.abstract.emoji }}</span>
              <span class="text-sm font-medium text-purple-700">{{ config.cpaConfig.abstract.text }}</span>
              <span class="text-[10px] text-purple-500">符号</span>
            </div>
          </div>
        </template>

        <!-- ===== 比较场景 ===== -->
        <template v-if="config.sceneType === 'compare' && config.compareConfig">
          <div class="flex flex-col items-center gap-3">
            <div class="flex items-center gap-6">
              <div class="flex flex-col items-center gap-1">
                <span class="text-xs text-gray-400 mb-1">左边</span>
                <div class="flex gap-1">
                  <span v-for="(item, i) in config.compareConfig.leftItems" :key="'l'+i"
                    class="compare-left text-2xl" style="opacity:0">{{ item }}</span>
                </div>
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="text-xs text-gray-400 mb-1">右边</span>
                <div class="flex gap-1">
                  <span v-for="(item, i) in config.compareConfig.rightItems" :key="'r'+i"
                    class="compare-right text-2xl" style="opacity:0">{{ item }}</span>
                </div>
              </div>
            </div>
            <!-- 一一对应连线 -->
            <div class="flex items-center gap-6">
              <div class="flex flex-col items-center">
                <div v-for="i in Math.min(config.compareConfig.leftItems.length, config.compareConfig.rightItems.length)" :key="'line'+i"
                  class="compare-line w-20 h-0.5 bg-primary-300 my-0.5" style="opacity:0; transform-origin: left center;"></div>
              </div>
            </div>
            <div class="compare-result px-4 py-2 rounded-xl font-title text-lg"
              :class="config.compareConfig.result === 'equal' ? 'bg-blue-50 text-blue-700' : 'bg-yellow-50 text-yellow-700'"
              style="opacity:0">
              {{ config.compareConfig.resultText }}
            </div>
          </div>
        </template>

        <!-- ===== 图形绘制场景（修复：加粗线条+填充色+角） ===== -->
        <template v-if="config.sceneType === 'shapeDraw' && config.shapeDrawConfig">
          <div class="flex flex-col items-center gap-3">
            <svg class="shape-svg w-48 h-48" viewBox="0 0 120 120" style="opacity:0">
              <!-- 长方形 -->
              <template v-if="config.shapeDrawConfig.shape === '长方形' || config.shapeDrawConfig.shape === '矩形'">
                <rect x="15" y="25" width="90" height="70" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="4" stroke-linejoin="round"
                  stroke-dasharray="320" stroke-dashoffset="320" class="draw-rect" />
                <!-- 宽高标注 -->
                <line x1="15" y1="105" x2="105" y2="105" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 2" class="shape-label" style="opacity:0" />
                <text x="60" y="115" text-anchor="middle" class="shape-label fill-gray-400" style="font-size:10px;opacity:0">宽</text>
                <line x1="5" y1="25" x2="5" y2="95" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 2" class="shape-label" style="opacity:0" />
                <text x="5" y="65" text-anchor="middle" class="shape-label fill-gray-400" style="font-size:10px;opacity:0;writing-mode:tb">高</text>
              </template>
              <!-- 正方形 -->
              <template v-else-if="config.shapeDrawConfig.shape === '正方形'">
                <rect x="15" y="15" width="90" height="90" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="4" stroke-linejoin="round"
                  stroke-dasharray="360" stroke-dashoffset="360" class="draw-rect" />
                <text x="60" y="65" text-anchor="middle" class="shape-label fill-primary-400" style="font-size:12px;opacity:0">边</text>
              </template>
              <!-- 三角形 -->
              <template v-else-if="config.shapeDrawConfig.shape === '三角形'">
                <polygon points="60,10 110,100 10,100" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="4" stroke-linejoin="round"
                  stroke-dasharray="340" stroke-dashoffset="340" class="draw-poly" />
                <!-- 角标注 -->
                <path d="M60,10 L55,20 L65,20 Z" fill="#f59e0b" stroke="#f59e0b" stroke-width="1" class="shape-label" style="opacity:0" />
                <text x="60" y="32" text-anchor="middle" class="shape-label fill-yellow-500" style="font-size:9px;opacity:0">角</text>
              </template>
              <!-- 圆形 -->
              <template v-else-if="config.shapeDrawConfig.shape === '圆形'">
                <circle cx="60" cy="60" r="48" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="4"
                  stroke-dasharray="310" stroke-dashoffset="310" class="draw-circle" />
                <!-- 圆心 -->
                <circle cx="60" cy="60" r="3" fill="#f59e0b" class="shape-label" style="opacity:0" />
                <text x="60" y="75" text-anchor="middle" class="shape-label fill-yellow-500" style="font-size:9px;opacity:0">圆心</text>
                <!-- 半径 -->
                <line x1="60" y1="60" x2="108" y2="60" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2" class="shape-label" style="opacity:0" />
                <text x="85" y="55" text-anchor="middle" class="shape-label fill-yellow-500" style="font-size:9px;opacity:0">半径</text>
              </template>
              <!-- 角 -->
              <template v-else-if="config.shapeDrawConfig.shape === '角'">
                <!-- 角的两条边（加粗） -->
                <line x1="20" y1="90" x2="100" y2="90" stroke="#6366f1" stroke-width="5" stroke-linecap="round"
                  stroke-dasharray="80" stroke-dashoffset="80" class="draw-line" />
                <line x1="20" y1="90" x2="75" y2="25" stroke="#6366f1" stroke-width="5" stroke-linecap="round"
                  stroke-dasharray="80" stroke-dashoffset="80" class="draw-line" />
                <!-- 角度弧线 -->
                <path d="M40,90 A25,25 0 0,1 33,72" fill="none" stroke="#f59e0b" stroke-width="3" class="shape-label" style="opacity:0" />
                <!-- 角度标注 -->
                <text x="45" y="80" class="shape-label fill-yellow-500" style="font-size:11px;opacity:0">角</text>
                <!-- 顶点 -->
                <circle cx="20" cy="90" r="5" fill="#ef4444" class="shape-label" style="opacity:0" />
                <!-- 内置标签：仅在没有自定义labels时显示 -->
                <template v-if="!config.shapeDrawConfig.labels">
                  <text x="8" y="108" class="shape-label fill-red-400" style="font-size:10px;opacity:0">顶点</text>
                  <text x="60" y="85" class="shape-label fill-indigo-400" style="font-size:10px;opacity:0">边</text>
                  <text x="52" y="52" class="shape-label fill-indigo-400" style="font-size:10px;opacity:0">边</text>
                </template>
              </template>
              <!-- 四边形 -->
              <template v-else-if="config.shapeDrawConfig.shape === '四边形'">
                <polygon points="20,90 30,20 100,30 90,100" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="4" stroke-linejoin="round"
                  stroke-dasharray="340" stroke-dashoffset="340" class="draw-poly" />
              </template>
              <!-- 3D立方体（可拖拽旋转+拆分堆叠） -->
              <template v-else-if="config.shapeDrawConfig.shape === '正方体3D' || config.shapeDrawConfig.shape === '长方体3D'">
                <foreignObject x="0" y="0" width="140" height="160">
                  <div xmlns="http://www.w3.org/1999/xhtml" class="w-full h-full flex flex-col items-center">
                    <!-- 3D立方体区域 -->
                    <div class="w-full flex items-center justify-center" style="height:120px;"
                      @mousedown.prevent="start3DRotate" @touchstart.prevent="start3DRotateTouch">
                      <div :style="{
                        width: config.shapeDrawConfig.shape === '正方体3D' ? '60px' : '80px',
                        height: config.shapeDrawConfig.shape === '正方体3D' ? '60px' : '50px',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transform: `rotateX(${rotate3dX}deg) rotateY(${rotate3dY}deg)`,
                        transition: is3dDragging ? 'none' : 'transform 0.3s ease-out',
                      }">
                        <!-- 前面 -->
                        <div class="cube-face-front" :style="{
                          position: 'absolute', width: '100%', height: '100%',
                          background: 'rgba(99,102,241,0.15)', border: '2px solid #6366f1',
                          transform: getCubeFaceTransform('front'),
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', color: '#6366f1',
                          transition: is3dExploded ? 'transform 0.6s ease-out' : 'transform 0.4s ease-in',
                        }">前面</div>
                        <!-- 后面 -->
                        <div class="cube-face-back" :style="{
                          position: 'absolute', width: '100%', height: '100%',
                          background: 'rgba(99,102,241,0.1)', border: '2px solid #818cf8',
                          transform: getCubeFaceTransform('back'),
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', color: '#818cf8',
                          transition: is3dExploded ? 'transform 0.6s ease-out' : 'transform 0.4s ease-in',
                        }">后面</div>
                        <!-- 左面 -->
                        <div class="cube-face-left" :style="{
                          position: 'absolute', width: config.shapeDrawConfig.shape === '正方体3D' ? '60px' : '50px', height: '100%',
                          background: 'rgba(129,140,248,0.12)', border: '2px solid #a5b4fc',
                          left: config.shapeDrawConfig.shape === '正方体3D' ? '-30px' : '-25px',
                          transform: getCubeFaceTransform('left'),
                          transformOrigin: 'right center',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', color: '#a5b4fc',
                          transition: is3dExploded ? 'transform 0.6s ease-out' : 'transform 0.4s ease-in',
                        }">左</div>
                        <!-- 右面 -->
                        <div class="cube-face-right" :style="{
                          position: 'absolute', width: config.shapeDrawConfig.shape === '正方体3D' ? '60px' : '50px', height: '100%',
                          background: 'rgba(129,140,248,0.12)', border: '2px solid #a5b4fc',
                          right: config.shapeDrawConfig.shape === '正方体3D' ? '-30px' : '-25px',
                          transform: getCubeFaceTransform('right'),
                          transformOrigin: 'left center',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', color: '#a5b4fc',
                          transition: is3dExploded ? 'transform 0.6s ease-out' : 'transform 0.4s ease-in',
                        }">右</div>
                        <!-- 上面 -->
                        <div class="cube-face-top" :style="{
                          position: 'absolute', width: '100%',
                          height: config.shapeDrawConfig.shape === '正方体3D' ? '60px' : '50px',
                          background: 'rgba(245,158,11,0.12)', border: '2px solid #fbbf24',
                          top: config.shapeDrawConfig.shape === '正方体3D' ? '-30px' : '-25px',
                          transform: getCubeFaceTransform('top'),
                          transformOrigin: 'center bottom',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', color: '#fbbf24',
                          transition: is3dExploded ? 'transform 0.6s ease-out' : 'transform 0.4s ease-in',
                        }">顶面</div>
                        <!-- 下面 -->
                        <div class="cube-face-bottom" :style="{
                          position: 'absolute', width: '100%',
                          height: config.shapeDrawConfig.shape === '正方体3D' ? '60px' : '50px',
                          background: 'rgba(245,158,11,0.08)', border: '2px solid #fcd34d',
                          bottom: config.shapeDrawConfig.shape === '正方体3D' ? '-30px' : '-25px',
                          transform: getCubeFaceTransform('bottom'),
                          transformOrigin: 'center top',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', color: '#fcd34d',
                          transition: is3dExploded ? 'transform 0.6s ease-out' : 'transform 0.4s ease-in',
                        }">底面</div>
                      </div>
                    </div>
                    <!-- 拆分/堆叠控制按钮 -->
                    <div class="flex gap-1 mt-1">
                      <button @click.stop="toggle3DExplode" class="px-2 py-0.5 text-xs rounded-full border transition-colors"
                        :class="is3dExploded ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-50'">
                        {{ is3dExploded ? '堆叠' : '拆分' }}
                      </button>
                      <button @click.stop="reset3DView" class="px-2 py-0.5 text-xs rounded-full border bg-white text-gray-500 border-gray-300 hover:bg-gray-50">
                        复位
                      </button>
                    </div>
                  </div>
                </foreignObject>
              </template>
              <!-- 默认：长方形 -->
              <template v-else>
                <rect x="15" y="25" width="90" height="70" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="4" stroke-linejoin="round"
                  stroke-dasharray="320" stroke-dashoffset="320" class="draw-rect" />
              </template>
              <!-- 自定义标注（R21：角形标注位置根据标签内容智能定位，顶点在角尖，边从顶点出发） -->
              <template v-if="config.shapeDrawConfig.labels">
                <text v-for="(label, i) in config.shapeDrawConfig.labels" :key="i"
                  :x="getShapeLabelPos(config.shapeDrawConfig.shape, i).x"
                  :y="getShapeLabelPos(config.shapeDrawConfig.shape, i).y"
                  :class="['shape-label', getShapeLabelClass(config.shapeDrawConfig.shape, i)]"
                  style="font-size:10px;opacity:0">
                  {{ label }}
                </text>
              </template>
            </svg>
            <span class="text-sm text-gray-500 font-medium">{{ config.shapeDrawConfig.shape }}</span>
          </div>
        </template>

        <!-- ===== 卡片揭示场景（支持翻转） ===== -->
        <template v-if="config.sceneType === 'cardReveal' && config.cardRevealConfig">
          <div class="flex gap-3 flex-wrap justify-center">
            <div v-for="(card, i) in config.cardRevealConfig.cards" :key="i"
              class="reveal-card w-24 h-32 rounded-xl border-2 shadow-md cursor-pointer perspective-500"
              :class="flippedCards.has(i)
                ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-300'
                : 'bg-gradient-to-br from-primary-100 to-secondary-100 border-primary-200'"
              style="opacity:0"
              @click="toggleCard(i, card.ttsText)">
              <div class="h-full flex flex-col items-center justify-center gap-2 transition-transform duration-300"
                :style="{ transform: flippedCards.has(i) ? 'rotateY(180deg)' : 'rotateY(0deg)' }">
                <span v-if="!flippedCards.has(i)" class="font-title text-xl text-primary-700">{{ card.front }}</span>
                <span v-else class="font-title text-xl text-green-700" style="transform: rotateY(180deg)">{{ card.back }}</span>
                <span class="text-xs" :class="flippedCards.has(i) ? 'text-green-400' : 'text-gray-400'">
                  {{ flippedCards.has(i) ? '点击翻回' : '点击翻转' }}
                </span>
              </div>
            </div>
          </div>
        </template>

        <!-- ===== 时间线场景 ===== -->
        <template v-if="config.sceneType === 'timeline' && config.timelineConfig">
          <div class="flex items-center gap-2 flex-wrap justify-center">
            <template v-for="(step, i) in config.timelineConfig.steps" :key="i">
              <div class="timeline-step flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-white border-2 border-primary-200 shadow-sm cursor-pointer"
                style="opacity:0"
                @click="handleElementClick(step.ttsNarration || step.ttsText || '')">
                <span class="text-lg">{{ step.emoji || (i + 1) }}</span>
                <span class="text-xs text-gray-600 text-center max-w-[80px]">{{ step.description || step.text }}</span>
              </div>
              <span v-if="i < config.timelineConfig.steps.length - 1" class="timeline-connector text-primary-300" style="opacity:0">→</span>
            </template>
          </div>
        </template>

        <!-- ===== 竖式计算场景 ===== -->
        <template v-if="config.sceneType === 'verticalCalc' && config.verticalCalcConfig">
          <div class="vertical-calc-container flex flex-col items-center gap-1 select-none" style="font-family: 'Courier New', monospace;">
            <!-- 进位行 -->
            <div class="flex gap-0 text-xs text-red-500 font-bold" style="min-height:18px;">
              <span v-for="i in Math.max(String(config.verticalCalcConfig.num1).length, String(config.verticalCalcConfig.num2).length) + 1" :key="'carry-'+i"
                class="carry-digit text-center" style="width:28px; opacity:0;">
                {{ (config.verticalCalcConfig.carry || [])[i - 1] || '' }}
              </span>
            </div>
            <!-- 第一个数（前置占位与运算符列对齐，确保竖式数位严格对齐，避免学习困惑 R27） -->
            <div class="flex gap-0 text-2xl font-bold text-gray-800">
              <span class="text-center" style="width:28px;">&nbsp;</span>
              <span v-for="(d, i) in String(config.verticalCalcConfig.num1).padStart(Math.max(String(config.verticalCalcConfig.num1).length, String(config.verticalCalcConfig.num2).length), ' ')" :key="'n1-'+i"
                class="num1-digit text-center rounded" style="width:28px; opacity:0;">
                {{ d }}
              </span>
            </div>
            <!-- 运算符 + 第二个数 -->
            <div class="flex gap-0 text-2xl font-bold text-gray-800 items-center">
              <span class="operator text-indigo-600 text-xl text-center" style="width:28px; opacity:0;">{{ config.verticalCalcConfig.operator }}</span>
              <span v-for="(d, i) in String(config.verticalCalcConfig.num2).padStart(Math.max(String(config.verticalCalcConfig.num1).length, String(config.verticalCalcConfig.num2).length), ' ')" :key="'n2-'+i"
                class="num2-digit text-center rounded" style="width:28px; opacity:0;">
                {{ d }}
              </span>
            </div>
            <!-- 横线 -->
            <div class="w-full border-t-3 border-gray-700 my-1 calc-line" style="opacity:0; min-width: 84px;"></div>
            <!-- 结果（前置占位与运算符列对齐，确保结果数位与上方对齐 R27） -->
            <div class="flex gap-0 text-2xl font-bold text-green-600">
              <span v-for="n in (Math.max(String(config.verticalCalcConfig.num1).length, String(config.verticalCalcConfig.num2).length) + 1 - String(config.verticalCalcConfig.result).length)" :key="'res-space-'+n"
                class="text-center" style="width:28px;">&nbsp;</span>
              <span v-for="(d, i) in String(config.verticalCalcConfig.result)" :key="'res-'+i"
                class="result-digit text-center rounded" style="width:28px; opacity:0;">
                {{ d }}
              </span>
            </div>
            <!-- 步骤说明 -->
            <div class="calc-step-text text-sm text-gray-500 mt-2 text-center" style="opacity:0; max-width: 240px;">
            </div>
          </div>
        </template>

        <!-- ===== 凑十法场景 ===== -->
        <template v-if="config.sceneType === 'makeTen' && config.makeTenConfig">
          <div class="make-ten-container flex flex-col items-center gap-3 select-none">
            <!-- 第一行：大数 + 小数 -->
            <div class="flex items-center gap-2 text-xl font-bold">
              <span class="big-num text-indigo-600 text-3xl" style="opacity:0;">{{ config.makeTenConfig.bigNum }}</span>
              <span class="operator text-gray-500" style="opacity:0;">+</span>
              <span class="small-num text-orange-500 text-3xl" style="opacity:0;">{{ config.makeTenConfig.smallNum }}</span>
            </div>
            <!-- 第二行：拆分小数 -->
            <div class="flex items-center gap-1 text-lg split-row" style="opacity:0;">
              <span class="text-gray-400">=</span>
              <span class="big-num-2 text-indigo-600 text-2xl">{{ config.makeTenConfig.bigNum }}</span>
              <span class="text-gray-400">+</span>
              <span class="split-left text-green-600 text-2xl font-bold rounded px-1 bg-green-50">{{ config.makeTenConfig.splitLeft }}</span>
              <span class="text-gray-400">+</span>
              <span class="split-right text-blue-600 text-2xl font-bold rounded px-1 bg-blue-50">{{ config.makeTenConfig.splitRight }}</span>
            </div>
            <!-- 第三行：凑十 -->
            <div class="flex items-center gap-1 text-lg ten-row" style="opacity:0;">
              <span class="text-gray-400">=</span>
              <span class="ten-badge text-2xl font-bold text-yellow-600 bg-yellow-50 rounded-full px-3 py-1 border-2 border-yellow-300">10</span>
              <span class="text-gray-400">+</span>
              <span class="split-right-2 text-blue-600 text-2xl font-bold rounded px-1 bg-blue-50">{{ config.makeTenConfig.splitRight }}</span>
            </div>
            <!-- 第四行：最终结果 -->
            <div class="flex items-center gap-1 text-lg final-row" style="opacity:0;">
              <span class="text-gray-400">=</span>
              <span class="final-result text-3xl font-bold text-red-600 bg-red-50 rounded-lg px-4 py-1 border-2 border-red-200">{{ config.makeTenConfig.finalResult }}</span>
            </div>
            <!-- 凑十说明 -->
            <div class="make-ten-hint text-sm text-gray-500 mt-1 text-center" style="opacity:0;">
              见{{ config.makeTenConfig.bigNum }}想{{ config.makeTenConfig.splitLeft }}，{{ config.makeTenConfig.smallNum }}拆成{{ config.makeTenConfig.splitLeft }}和{{ config.makeTenConfig.splitRight }}
            </div>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* SVG描边动画由GSAP驱动，不需要CSS动画 */
.draw-rect, .draw-poly, .draw-circle, .draw-line {
  /* 初始状态：线条不可见，由GSAP控制strokeDashoffset动画 */
}

/* 3D透视 */
.perspective-500 {
  perspective: 500px;
}
</style>
