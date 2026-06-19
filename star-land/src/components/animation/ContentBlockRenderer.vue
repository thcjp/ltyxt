<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import type { ContentBlock, AnimationSceneConfig } from '@/types'
import CharReveal from './CharReveal.vue'
import CPAStage from './CPAStage.vue'
import LessonAnimation from './LessonAnimation.vue'
import SpeechButton from './SpeechButton.vue'

const props = defineProps<{
  block: ContentBlock
  index: number
  lang?: 'zh' | 'en'
}>()

const blockRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

// 根据block类型确定样式
const blockClass = computed(() => {
  const base = 'content-block rounded-2xl p-4 transition-all duration-300 relative'
  switch (props.block.type) {
    case 'text': return `${base} bg-white border border-gray-100 shadow-sm`
    case 'example': return `${base} bg-primary-50 border border-primary-200`
    case 'poem': return `${base} bg-purple-50 border border-purple-200 text-center`
    case 'dialogue': return `${base} bg-secondary-50 border border-secondary-200`
    case 'formula': return `${base} bg-yellow-50 border border-yellow-200 text-center`
    case 'tip': return `${base} bg-green-50 border border-green-200`
    case 'image': return `${base} bg-blue-50 border border-blue-200 text-center`
    case 'animation': return `${base} bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200`
    default: return base
  }
})

const labelIcon = computed(() => {
  switch (props.block.type) {
    case 'text': return '📝'
    case 'example': return '💡'
    case 'poem': return '📜'
    case 'dialogue': return '💬'
    case 'formula': return '📐'
    case 'tip': return '⭐'
    case 'image': return '🖼️'
    case 'animation': return '🎬'
    default: return '📌'
  }
})

// 是否使用CharReveal组件（poem和formula类型）
const useCharReveal = computed(() => {
  return props.block.type === 'poem' || props.block.type === 'formula'
})

// 是否使用CPAStage组件（animation类型且包含→分隔符，且无animationConfig）
const useCPAStage = computed(() => {
  return props.block.type === 'animation' && !props.block.animationConfig && props.block.content.includes('→')
})

// 是否使用LessonAnimation组件（animation类型且有animationConfig）
const useLessonAnimation = computed(() => {
  return props.block.type === 'animation' && !!props.block.animationConfig
})

// 解析CPA三阶段内容
const cpaData = computed(() => {
  if (!useCPAStage.value) return null
  const parts = props.block.content.split('→').map(s => s.trim())
  return {
    concrete: parts[0] || '',
    pictorial: parts[1] || '',
    abstract: parts[2] || '',
  }
})

// 获取动画配置（优先使用animationConfig，否则智能解析）
const animationConfig = computed<AnimationSceneConfig | null>(() => {
  if (props.block.animationConfig) return props.block.animationConfig
  // 智能解析：当没有结构化配置时，从文字描述推断
  if (props.block.type !== 'animation') return null
  return inferAnimationConfig(props.block.content)
})

// 智能推断动画配置：从文字描述解析出动画场景类型和参数
function inferAnimationConfig(content: string): AnimationSceneConfig | null {
  // 数数/计数类
  if (/数字\d.*依次|数数|计数|从\d数到\d/.test(content)) {
    const nums = content.match(/\d+/g)?.map(Number) || []
    const emoji = content.match(/[🍎🌸⭐🌟🍬🐱🐶🐰🐥🐟]/)?.[0] || '⭐'
    return {
      sceneType: 'numberCount',
      title: '数数动画',
      countConfig: {
        from: nums[0] || 1,
        to: nums[1] || 10,
        itemEmoji: emoji,
        direction: 'forward',
      },
      ttsNarration: content,
    }
  }

  // 合并/加法类
  if (/合并|合在一起|加法|\+.*等于/.test(content)) {
    const nums = content.match(/\d+/g)?.map(Number) || []
    const emoji = content.match(/[🍎🍬🌸⭐🧡]/)?.[0] || '🍎'
    return {
      sceneType: 'merge',
      title: '合并动画',
      mergeConfig: {
        leftCount: nums[0] || 2,
        leftEmoji: emoji,
        rightCount: nums[1] || 1,
        rightEmoji: emoji,
        operator: '+',
        resultCount: (nums[0] || 2) + (nums[1] || 1),
      },
      ttsNarration: content,
    }
  }

  // 分离/减法类
  if (/消失|拿走|减法|去掉|还剩/.test(content)) {
    const nums = content.match(/\d+/g)?.map(Number) || []
    const emoji = content.match(/[🍬🍎🌸⭐]/)?.[0] || '🍬'
    return {
      sceneType: 'separate',
      title: '减法动画',
      mergeConfig: {
        leftCount: nums[0] || 3,
        leftEmoji: emoji,
        rightCount: nums[1] || 1,
        rightEmoji: emoji,
        operator: '-',
        resultCount: (nums[0] || 3) - (nums[1] || 1),
      },
      ttsNarration: content,
    }
  }

  // 拼音/字母类
  if (/拼音|声母|韵母|字母|口型/.test(content)) {
    const letters = content.match(/[bpmfdtnlgkhjqxszcayowuvieü]+/g)?.[0]?.split('') || ['a', 'o', 'e']
    return {
      sceneType: 'pinyin',
      title: '拼音动画',
      pinyinConfig: {
        letters,
      },
      ttsNarration: content,
    }
  }

  // 颜色混合类
  if (/颜色.*混合|混合.*颜色|Red.*Yellow|颜色融合/.test(content)) {
    return {
      sceneType: 'colorMix',
      title: '颜色混合动画',
      colorMixConfig: {
        color1: 'Red', color1Hex: '#EF4444',
        color2: 'Yellow', color2Hex: '#EAB308',
        resultColor: 'Orange', resultHex: '#F97316',
      },
      ttsNarration: content,
    }
  }

  // 排序类
  if (/排队|排序|从小到大|从大到小|按顺序/.test(content)) {
    const nums = content.match(/\d+/g) || ['1', '2', '3', '4', '5']
    return {
      sceneType: 'sequence',
      title: '排序动画',
      sequenceConfig: {
        items: nums,
        order: 'asc',
        itemType: 'number',
      },
      ttsNarration: content,
    }
  }

  // 比较类
  if (/比较|一一对应|比多少|哪边多/.test(content)) {
    return {
      sceneType: 'compare',
      title: '比较动画',
      compareConfig: {
        leftItems: ['🍎', '🍎', '🍎'],
        rightItems: ['🍎', '🍎', '🍎', '🍎', '🍎'],
        result: 'right',
        resultText: '右边多！',
      },
      ttsNarration: content,
    }
  }

  // 图形绘制类
  if (/描边|绘制|图形|角|四边形|长方形|正方形|三角形|圆形/.test(content)) {
    const shape = content.match(/长方形|正方形|三角形|圆形|角|四边形/)?.[0] || '长方形'
    return {
      sceneType: 'shapeDraw',
      title: '图形动画',
      shapeDrawConfig: {
        shape,
      },
      ttsNarration: content,
    }
  }

  // 默认：场景构建
  return {
    sceneType: 'sceneBuild',
    title: '互动动画',
    sceneBuildConfig: {
      sceneName: content.slice(0, 20),
      elements: content.split(/[，,、；;]/).filter(s => s.trim()).map((s, i) => ({
        id: `el-${i}`,
        text: s.trim().slice(0, 6),
        emoji: '📦',
        delay: i * 0.4,
        animation: 'bounceIn' as const,
        ttsText: s.trim(),
      })),
    },
    ttsNarration: content,
  }
}

// 格式化内容（保留换行）
const formattedContent = computed(() => {
  return props.block.content.replace(/\n/g, '<br/>')
})

// 推断语言：优先使用父组件传入的语言，否则根据内容推断
const blockLang = computed<'zh' | 'en'>(() => {
  // 如果父组件明确传入了语言，直接使用
  if (props.lang) return props.lang
  // 否则根据内容推断：如果内容主要是英文字母则为英语
  const englishPattern = /^[A-Za-z\s!?,.']+$/m
  return englishPattern.test(props.block.content) ? 'en' : 'zh'
})

// 对话角色头像映射
const DIALOGUE_EMOJI_MAP: Record<string, string> = {
  '老师': '👨‍🏫',
  '教师': '👨‍🏫',
  '妈妈': '👩',
  '爸爸': '👨',
  '小明': '🧒',
  '小红': '👧',
  '孩子': '🧒',
  '小朋友': '🧒',
  '学生': '🧑‍🎓',
  '同学': '🧑‍🎓',
  '同学们': '👨‍👩‍👧‍👦',
  '旁白': '📜',
  '合唱': '🎵',
  '观众': '👀',
  '店员': '🧑‍💼',
  '导游': '🧭',
  '售货员': '🧑‍💼',
  '大灰狼': '🐺',
  '狼': '🐺',
  '兔子': '🐰',
  '乌龟': '🐢',
  '小猪1': '🐷',
  '小猪2': '🐷',
  '小猪3': '🐷',
  '小猪': '🐷',
}

// 根据对话行内容获取对应角色头像
function getDialogueEmoji(line: string): string {
  const match = line.match(/^(.+?)[:：]/)
  if (match) {
    const roleName = match[1].trim()
    return DIALOGUE_EMOJI_MAP[roleName] || '🧑'
  }
  return '📜' // 无角色名的行默认用旁白图标
}

onMounted(() => {
  if (!blockRef.value) return

  ctx = gsap.context(() => {
    const el = blockRef.value!
    const animType = props.block.animationType || 'reveal'
    const delay = props.index * 0.25

    // CharReveal、CPAStage和LessonAnimation组件自带动画，不需要外部动画
    if (useCharReveal.value || useCPAStage.value || (props.block.type === 'animation' && animationConfig)) {
      gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, delay, force3D: true })
      return
    }

    // 设置初始状态
    switch (animType) {
      case 'bounce':
        gsap.set(el, { autoAlpha: 0, scale: 0.3 })
        gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.6, delay, ease: 'back.out(1.7)', force3D: true })
        break
      case 'typewriter':
        gsap.set(el, { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' })
        gsap.to(el, { autoAlpha: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.5, delay, ease: 'none', force3D: true })
        break
      case 'float':
        gsap.to(el, {
          y: 'random(-6, 6)', rotation: 'random(-2, 2)',
          duration: 'random(2, 4)', ease: 'sine.inOut', force3D: true,
          repeat: -1, yoyo: true, repeatRefresh: true, delay,
        })
        break
      case 'pulse':
        gsap.fromTo(el, { autoAlpha: 0, scale: 0.9 },
          { autoAlpha: 1, scale: 1, duration: 0.5, delay, ease: 'power2.out', force3D: true })
        gsap.to(el, { scale: 1.02, duration: 0.8, ease: 'power1.inOut', repeat: -1, yoyo: true, force3D: true, delay: delay + 0.5 })
        break
      case 'counter':
        gsap.fromTo(el, { autoAlpha: 0, scale: 0.5 },
          { autoAlpha: 1, scale: 1, duration: 0.6, delay, ease: 'back.out(1.7)', force3D: true })
        break
      case 'cpaTransition':
        gsap.fromTo(el, { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.8, delay, ease: 'back.out(1.4)', force3D: true })
        break
      default: // reveal
        gsap.fromTo(el, { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.8, delay, ease: 'power2.out', force3D: true })
    }
  }, blockRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div ref="blockRef" :class="blockClass" class="mb-3" style="opacity: 0">
    <!-- 标签 + 语音按钮 -->
    <div class="flex items-center justify-between mb-2">
      <div v-if="block.label" class="flex items-center gap-1.5">
        <span class="text-sm">{{ labelIcon }}</span>
        <span class="text-xs font-medium text-gray-600">{{ block.label }}</span>
      </div>
      <div v-else />
      <SpeechButton
        v-if="block.type !== 'animation'"
        :text="block.content"
        :lang="blockLang"
        size="sm"
        :is-dialogue="block.type === 'dialogue'"
      />
    </div>

    <!-- 诗歌/公式：使用CharReveal逐字揭示 -->
    <CharReveal
      v-if="useCharReveal"
      :text="block.content"
      :lang="blockLang"
      :char-by-char="block.type === 'poem'"
      :delay="index * 0.25"
    />

    <!-- 动画指示：使用CPAStage -->
    <CPAStage
      v-else-if="useCPAStage && cpaData"
      :concrete="cpaData.concrete"
      :pictorial="cpaData.pictorial"
      :abstract="cpaData.abstract"
      :delay="index * 0.25"
    />

    <!-- 对话：特殊格式，按角色显示对应头像 -->
    <div v-else-if="block.type === 'dialogue'" class="font-body text-sm leading-loose whitespace-pre-line text-secondary-800">
      <template v-for="(line, i) in block.content.split('\n')" :key="i">
        <div :class="i > 0 ? 'mt-2' : ''" class="flex items-start gap-2">
          <span class="text-lg">{{ getDialogueEmoji(line) }}</span>
          <span>{{ line }}</span>
        </div>
      </template>
    </div>

    <!-- 动画：使用LessonAnimation组件渲染真实GSAP动画 -->
    <LessonAnimation
      v-else-if="block.type === 'animation' && animationConfig"
      :config="animationConfig"
      :delay="index * 0.25"
      :lang="blockLang"
    />

    <!-- 动画回退（无配置且非CPA格式） -->
    <div v-else-if="block.type === 'animation'" class="py-3 text-center">
      <p class="text-3xl mb-2 animate-bounce-slow">🎬</p>
      <p class="text-sm text-primary-600">{{ block.content }}</p>
    </div>

    <!-- 普通文本 -->
    <div v-else class="text-sm leading-relaxed text-gray-700 whitespace-pre-line" v-html="formattedContent" />
  </div>
</template>
