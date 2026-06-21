<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import type { ContentBlock, AnimationSceneConfig, AnimationElement } from '@/types'
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

  // 英语数字类（one/two/three 或 1-10 英文表达）
  if (/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/i.test(content) && /数字|number|count/i.test(content)) {
    const wordToNum: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 }
    const matches = content.toLowerCase().match(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/g) || []
    const nums = matches.map(m => wordToNum[m])
    const from = nums[0] || 1
    const to = nums[nums.length - 1] || 5
    return {
      sceneType: 'numberCount',
      title: 'Number Count',
      countConfig: { from, to, itemEmoji: '🍎', direction: 'forward' },
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

  // 拼音/字母类（中文拼音）
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

  // 英语字母类（A/B/C 单独字母教学）
  if (/\b(alphabet|letters?|ABC|abc)\b/i.test(content) || /[Aa]\s*[Bb]\s*[Cc]\s*[Dd]/.test(content)) {
    const letters = content.match(/[A-Za-z]/g)?.filter(c => c.trim()) || ['A', 'B', 'C']
    return {
      sceneType: 'sequence',
      title: 'Alphabet',
      sequenceConfig: {
        items: letters.slice(0, 10),
        order: 'custom',
        itemType: 'letter',
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

  // 英语颜色类（red/blue/green 等单词教学）
  if (/\b(red|blue|green|yellow|orange|purple|pink|black|white|brown)\b/i.test(content) && /颜色|colour|color/i.test(content)) {
    const colorEmojiMap: Record<string, { emoji: string; hex: string }> = {
      red: { emoji: '🟥', hex: '#EF4444' },
      blue: { emoji: '🟦', hex: '#3B82F6' },
      green: { emoji: '🟩', hex: '#22C55E' },
      yellow: { emoji: '🟨', hex: '#EAB308' },
      orange: { emoji: '🟧', hex: '#F97316' },
      purple: { emoji: '🟪', hex: '#A855F7' },
      pink: { emoji: '🌸', hex: '#EC4899' },
      black: { emoji: '⬛', hex: '#000000' },
      white: { emoji: '⬜', hex: '#FFFFFF' },
      brown: { emoji: '🟫', hex: '#92400E' },
    }
    const found = content.toLowerCase().match(/\b(red|blue|green|yellow|orange|purple|pink|black|white|brown)\b/g) || []
    const unique = [...new Set(found)]
    const cards = unique.slice(0, 6).map(c => ({
      front: c.charAt(0).toUpperCase() + c.slice(1),
      back: colorEmojiMap[c]?.emoji || '🎨',
      ttsText: `${c.charAt(0).toUpperCase() + c.slice(1)}`,
    }))
    return {
      sceneType: 'cardReveal',
      title: 'Colors',
      cardRevealConfig: { cards },
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

  // 英语问候类（hello/hi/good morning）
  if (/\b(hello|hi|good\s*morning|good\s*afternoon|good\s*evening|how\s*are\s*you|nice\s*to\s*meet)\b/i.test(content)) {
    const greetingCards = [
      { front: 'Hello!', back: '你好！', ttsText: 'Hello!' },
      { front: 'Hi!', back: '嗨！', ttsText: 'Hi!' },
      { front: 'Good Morning!', back: '早上好！', ttsText: 'Good morning!' },
      { front: 'How are you?', back: '你好吗？', ttsText: 'How are you?' },
    ]
    const mentioned = greetingCards.filter(c => content.toLowerCase().includes(c.front.toLowerCase().replace('!', '')))
    return {
      sceneType: 'cardReveal',
      title: 'Greetings',
      cardRevealConfig: { cards: mentioned.length > 0 ? mentioned.slice(0, 4) : greetingCards.slice(0, 3) },
      ttsNarration: content,
    }
  }

  // 英语家庭成员类
  if (/\b(father|mother|brother|sister|family|dad|mom|parents)\b/i.test(content)) {
    const familyEmojiMap: Record<string, string> = {
      father: '👨', dad: '👨', mother: '👩', mom: '👩',
      brother: '👦', sister: '👧', family: '👨‍👩‍👧‍👦', parents: '👨‍👩',
    }
    const found = content.toLowerCase().match(/\b(father|mother|brother|sister|family|dad|mom|parents)\b/g) || []
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word.charAt(0).toUpperCase() + word.slice(1),
      emoji: familyEmojiMap[word] || '👤',
      delay: i * 0.4,
      animation: 'bounceIn' as const,
      ttsText: word.charAt(0).toUpperCase() + word.slice(1),
    }))
    return {
      sceneType: 'sceneBuild',
      title: 'Family',
      sceneBuildConfig: { sceneName: 'My Family', elements },
      ttsNarration: content,
    }
  }

  // 英语动物类
  if (/\b(cat|dog|bird|fish|rabbit|duck|cow|pig|horse|sheep|chicken|bear|monkey|elephant|tiger|lion)\b/i.test(content)) {
    const animalEmojiMap: Record<string, string> = {
      cat: '🐱', dog: '🐶', bird: '🐦', fish: '🐟', rabbit: '🐰',
      duck: '🦆', cow: '🐮', pig: '🐷', horse: '🐴', sheep: '🐑',
      chicken: '🐔', bear: '🐻', monkey: '🐵', elephant: '🐘', tiger: '🐯', lion: '🦁',
    }
    const found = content.toLowerCase().match(/\b(cat|dog|bird|fish|rabbit|duck|cow|pig|horse|sheep|chicken|bear|monkey|elephant|tiger|lion)\b/g) || []
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 8).map((word, i) => ({
      id: `el-${i}`,
      text: word.charAt(0).toUpperCase() + word.slice(1),
      emoji: animalEmojiMap[word] || '🐾',
      delay: i * 0.4,
      animation: 'popIn' as const,
      ttsText: word.charAt(0).toUpperCase() + word.slice(1),
    }))
    return {
      sceneType: 'sceneBuild',
      title: 'Animals',
      sceneBuildConfig: { sceneName: 'Animals', elements },
      ttsNarration: content,
    }
  }

  // 英语水果类
  if (/\b(apple|banana|orange|grape|pear|peach|watermelon|strawberry|cherry|lemon|mango)\b/i.test(content)) {
    const fruitEmojiMap: Record<string, string> = {
      apple: '🍎', banana: '🍌', orange: '🍊', grape: '🍇', pear: '🍐',
      peach: '🍑', watermelon: '🍉', strawberry: '🍓', cherry: '🍒', lemon: '🍋', mango: '🥭',
    }
    const found = content.toLowerCase().match(/\b(apple|banana|orange|grape|pear|peach|watermelon|strawberry|cherry|lemon|mango)\b/g) || []
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 8).map((word, i) => ({
      id: `el-${i}`,
      text: word.charAt(0).toUpperCase() + word.slice(1),
      emoji: fruitEmojiMap[word] || '果子',
      delay: i * 0.4,
      animation: 'scaleIn' as const,
      ttsText: word.charAt(0).toUpperCase() + word.slice(1),
    }))
    return {
      sceneType: 'sceneBuild',
      title: 'Fruits',
      sceneBuildConfig: { sceneName: 'Fruits', elements },
      ttsNarration: content,
    }
  }

  // 英语身体部位类
  if (/\b(head|shoulder|knee|toe|eye|ear|nose|mouth|hand|foot|arm|leg|face|hair)\b/i.test(content)) {
    const bodyEmojiMap: Record<string, string> = {
      head: '🧑', shoulder: '🤷', knee: '🦵', toe: '🦶',
      eye: '👁', ear: '👂', nose: '👃', mouth: '👄',
      hand: '✋', foot: '🦶', arm: '💪', leg: '🦵', face: '😀', hair: '💇',
    }
    const found = content.toLowerCase().match(/\b(head|shoulder|knee|toe|eye|ear|nose|mouth|hand|foot|arm|leg|face|hair)\b/g) || []
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 8).map((word, i) => ({
      id: `el-${i}`,
      text: word.charAt(0).toUpperCase() + word.slice(1),
      emoji: bodyEmojiMap[word] || '👤',
      delay: i * 0.35,
      animation: 'bounceIn' as const,
      ttsText: word.charAt(0).toUpperCase() + word.slice(1),
    }))
    return {
      sceneType: 'sceneBuild',
      title: 'Body Parts',
      sceneBuildConfig: { sceneName: 'My Body', elements },
      ttsNarration: content,
    }
  }

  // 英语日常动作类
  if (/\b(brush|wash|eat|drink|sleep|wake|walk|run|jump|swim|read|write|sing|dance|play)\w*\b/i.test(content)) {
    const actionEmojiMap: Record<string, string> = {
      brush: '🪥', wash: '🧼', eat: '🍽', drink: '🥤', sleep: '😴',
      wake: '⏰', walk: '🚶', run: '🏃', jump: '🤸', swim: '🏊',
      read: '📖', write: '✍', sing: '🎤', dance: '💃', play: '🎮',
    }
    const found = content.toLowerCase().match(/\b(brush|wash|eat|drink|sleep|wake|walk|run|jump|swim|read|write|sing|dance|play)\w*\b/g) || []
    const unique = [...new Set(found.map(w => w.replace(/(s|ed|ing)$/, '')))]
    const steps = unique.slice(0, 6).map((word, i) => ({
      text: `${i + 1}. ${word.charAt(0).toUpperCase() + word.slice(1)}`,
      emoji: actionEmojiMap[word] || '⭐',
      ttsText: word.charAt(0).toUpperCase() + word.slice(1),
      duration: 1.2,
    }))
    return {
      sceneType: 'timeline',
      title: 'Daily Routine',
      timelineConfig: { steps },
      ttsNarration: content,
    }
  }

  // 变化/变态发育/循环过程类（中文）→ 时间线展示阶段
  if (/变成|变化|变态|循环|过程|步骤|生长|长大|轮转|依次出现|分阶段/.test(content)) {
    const parts = content.split(/[，,、；;\n]/).map(s => s.trim()).filter(s => s.length > 0)
    // 提取关键阶段描述
    const stageKeywords: { keywords: RegExp; emoji: string }[] = [
      { keywords: /蝌蚪/i, emoji: '🐸' },
      { keywords: /青蛙/i, emoji: '🐸' },
      { keywords: /蒸发/i, emoji: '☀️' },
      { keywords: /凝结/i, emoji: '☁️' },
      { keywords: /降水|下雨/i, emoji: '🌧️' },
      { keywords: /种子/i, emoji: '🌱' },
      { keywords: /蒲公英/i, emoji: '🌼' },
      { keywords: /苍耳/i, emoji: '🌿' },
      { keywords: /豌豆/i, emoji: '🫛' },
      { keywords: /发芽/i, emoji: '🌱' },
      { keywords: /开花/i, emoji: '🌸' },
      { keywords: /结果/i, emoji: '🍎' },
      { keywords: /太阳/i, emoji: '☀️' },
      { keywords: /月亮/i, emoji: '🌙' },
      { keywords: /星星/i, emoji: '⭐' },
      { keywords: /云|云朵/i, emoji: '☁️' },
      { keywords: /雨/i, emoji: '🌧️' },
      { keywords: /雪/i, emoji: '❄️' },
      { keywords: /风/i, emoji: '💨' },
      { keywords: /春/i, emoji: '🌸' },
      { keywords: /夏/i, emoji: '☀️' },
      { keywords: /秋/i, emoji: '🍂' },
      { keywords: /冬/i, emoji: '⛄' },
      { keywords: /树/i, emoji: '🌳' },
      { keywords: /叶/i, emoji: '🍃' },
      { keywords: /花/i, emoji: '🌸' },
      { keywords: /草/i, emoji: '🌿' },
      { keywords: /水/i, emoji: '💧' },
      { keywords: /火/i, emoji: '🔥' },
      { keywords: /土/i, emoji: '🌍' },
      { keywords: /石/i, emoji: '🪨' },
      { keywords: /钟|时间/i, emoji: '⏰' },
      { keywords: /门/i, emoji: '🚪' },
      { keywords: /房/i, emoji: '🏠' },
      { keywords: /车/i, emoji: '🚗' },
      { keywords: /船/i, emoji: '⛵' },
      { keywords: /鸟/i, emoji: '🐦' },
      { keywords: /鱼/i, emoji: '🐟' },
      { keywords: /虫/i, emoji: '🐛' },
      { keywords: /象|大象/i, emoji: '🐘' },
      { keywords: /信/i, emoji: '✉️' },
      { keywords: /书/i, emoji: '📚' },
      { keywords: /笔/i, emoji: '✏️' },
      { keywords: /球/i, emoji: '⚽' },
      { keywords: /星/i, emoji: '⭐' },
      { keywords: /心/i, emoji: '❤️' },
      { keywords: /手/i, emoji: '✋' },
      { keywords: /眼/i, emoji: '👁' },
      { keywords: /嘴/i, emoji: '👄' },
      { keywords: /耳/i, emoji: '👂' },
      { keywords: /脚/i, emoji: '🦶' },
    ]
    const steps = parts.slice(0, 6).map((text, i) => {
      const emoji = stageKeywords.find(({ keywords }) => keywords.test(text))?.emoji || '⭐'
      return {
        text: text.slice(0, 15),
        emoji,
        ttsText: text,
        duration: 1.5,
      }
    })
    if (steps.length > 0) {
      return {
        sceneType: 'timeline',
        title: '过程动画',
        timelineConfig: { steps },
        ttsNarration: content,
      }
    }
  }

  // ===== 模式A：中文描述的英语课内容识别 =====
  // 中文关键词 → 英文场景构建（统一处理动物/水果/身体部位/家庭成员/服装/交通工具/节日）
  const cnSceneBuildGroups: {
    title: string; sceneName: string;
    anim: 'bounceIn' | 'scaleIn' | 'slideIn' | 'popIn' | 'fadeIn';
    map: Record<string, { en: string; emoji: string }>
  }[] = [
    {
      title: 'Animals', sceneName: 'Animals', anim: 'popIn',
      map: {
        '猫': { en: 'Cat', emoji: '🐱' }, '狗': { en: 'Dog', emoji: '🐶' },
        '鸟': { en: 'Bird', emoji: '🐦' }, '鱼': { en: 'Fish', emoji: '🐟' },
        '兔': { en: 'Rabbit', emoji: '🐰' }, '鸭': { en: 'Duck', emoji: '🦆' },
        '牛': { en: 'Cow', emoji: '🐮' }, '猪': { en: 'Pig', emoji: '🐷' },
        '马': { en: 'Horse', emoji: '🐴' }, '羊': { en: 'Sheep', emoji: '🐑' },
        '鸡': { en: 'Chicken', emoji: '🐔' }, '熊': { en: 'Bear', emoji: '🐻' },
        '猴': { en: 'Monkey', emoji: '🐵' }, '象': { en: 'Elephant', emoji: '🐘' },
        '虎': { en: 'Tiger', emoji: '🐯' }, '狮': { en: 'Lion', emoji: '🦁' },
      },
    },
    {
      title: 'Fruits', sceneName: 'Fruits', anim: 'scaleIn',
      map: {
        '苹果': { en: 'Apple', emoji: '🍎' }, '香蕉': { en: 'Banana', emoji: '🍌' },
        '橘子': { en: 'Orange', emoji: '🍊' }, '葡萄': { en: 'Grape', emoji: '🍇' },
        '西瓜': { en: 'Watermelon', emoji: '🍉' }, '草莓': { en: 'Strawberry', emoji: '🍓' },
        '桃': { en: 'Peach', emoji: '🍑' }, '梨': { en: 'Pear', emoji: '🍐' },
      },
    },
    {
      title: 'Body Parts', sceneName: 'My Body', anim: 'bounceIn',
      map: {
        '头': { en: 'Head', emoji: '🧑' }, '肩': { en: 'Shoulder', emoji: '🤷' },
        '膝': { en: 'Knee', emoji: '🦵' }, '脚': { en: 'Foot', emoji: '🦶' },
        '眼': { en: 'Eye', emoji: '👁' }, '耳': { en: 'Ear', emoji: '👂' },
        '鼻': { en: 'Nose', emoji: '👃' }, '嘴': { en: 'Mouth', emoji: '👄' },
        '手': { en: 'Hand', emoji: '✋' }, '臂': { en: 'Arm', emoji: '💪' },
        '腿': { en: 'Leg', emoji: '🦵' },
      },
    },
    {
      title: 'Family', sceneName: 'My Family', anim: 'bounceIn',
      map: {
        '爸爸': { en: 'Father', emoji: '👨' }, '妈妈': { en: 'Mother', emoji: '👩' },
        '哥哥': { en: 'Brother', emoji: '👦' }, '姐姐': { en: 'Sister', emoji: '👧' },
        '宝宝': { en: 'Baby', emoji: '👶' }, '家庭': { en: 'Family', emoji: '👨‍👩‍👧‍👦' },
      },
    },
    {
      title: 'Clothes', sceneName: 'Clothes', anim: 'scaleIn',
      map: {
        '衬衫': { en: 'Shirt', emoji: '👕' }, '裤子': { en: 'Pants', emoji: '👖' },
        '裙子': { en: 'Dress', emoji: '👗' }, '帽子': { en: 'Hat', emoji: '🎩' },
        '鞋': { en: 'Shoes', emoji: '👟' }, '袜': { en: 'Socks', emoji: '🧦' },
      },
    },
    {
      title: 'Transport', sceneName: 'Transport', anim: 'slideIn',
      map: {
        '汽车': { en: 'Car', emoji: '🚗' }, '公交': { en: 'Bus', emoji: '🚌' },
        '火车': { en: 'Train', emoji: '🚂' }, '飞机': { en: 'Plane', emoji: '✈️' },
        '船': { en: 'Ship', emoji: '⛵' }, '自行车': { en: 'Bike', emoji: '🚲' },
      },
    },
    {
      title: 'Festival', sceneName: 'Festival', anim: 'popIn',
      map: {
        '烟花': { en: 'Fireworks', emoji: '🎆' }, '灯笼': { en: 'Lantern', emoji: '🏮' },
        '圣诞': { en: 'Christmas', emoji: '🎄' }, '礼物': { en: 'Gift', emoji: '🎁' },
        '春联': { en: 'Couplet', emoji: '🧧' }, '红包': { en: 'Red Envelope', emoji: '🧧' },
      },
    },
  ]
  for (const group of cnSceneBuildGroups) {
    const found = Object.keys(group.map).filter(k => content.includes(k))
    if (found.length > 0) {
      const elements = found.slice(0, 8).map((k, i) => ({
        id: `el-${i}`,
        text: group.map[k].en,
        emoji: group.map[k].emoji,
        delay: i * 0.4,
        animation: group.anim,
        ttsText: group.map[k].en,
      }))
      return {
        sceneType: 'sceneBuild',
        title: group.title,
        sceneBuildConfig: { sceneName: group.sceneName, elements },
        ttsNarration: content,
      }
    }
  }

  // 中文动作词 → 时间线场景
  {
    const cnActionMap: Record<string, { en: string; emoji: string }> = {
      '跑': { en: 'Run', emoji: '🏃' }, '跳': { en: 'Jump', emoji: '🤸' },
      '游泳': { en: 'Swim', emoji: '🏊' }, '跳舞': { en: 'Dance', emoji: '💃' },
      '唱': { en: 'Sing', emoji: '🎤' }, '读': { en: 'Read', emoji: '📖' },
      '写': { en: 'Write', emoji: '✍' }, '吃': { en: 'Eat', emoji: '🍽' },
      '喝': { en: 'Drink', emoji: '🥤' }, '睡': { en: 'Sleep', emoji: '😴' },
      '醒': { en: 'Wake', emoji: '⏰' }, '走': { en: 'Walk', emoji: '🚶' },
    }
    const found = Object.keys(cnActionMap).filter(k => content.includes(k))
    if (found.length > 0) {
      const steps = found.slice(0, 6).map((k, i) => ({
        text: `${i + 1}. ${cnActionMap[k].en}`,
        emoji: cnActionMap[k].emoji,
        ttsText: cnActionMap[k].en,
        duration: 1.2,
      }))
      return {
        sceneType: 'timeline',
        title: 'Daily Routine',
        timelineConfig: { steps },
        ttsNarration: content,
      }
    }
  }

  // 中文颜色词 → 卡片揭示场景
  {
    const cnColorMap: Record<string, { en: string; emoji: string }> = {
      '红': { en: 'Red', emoji: '🟥' }, '蓝': { en: 'Blue', emoji: '🟦' },
      '绿': { en: 'Green', emoji: '🟩' }, '黄': { en: 'Yellow', emoji: '🟨' },
      '橙': { en: 'Orange', emoji: '🟧' }, '紫': { en: 'Purple', emoji: '🟪' },
      '粉': { en: 'Pink', emoji: '🌸' }, '黑': { en: 'Black', emoji: '⬛' },
      '白': { en: 'White', emoji: '⬜' }, '棕': { en: 'Brown', emoji: '🟫' },
    }
    const found = Object.keys(cnColorMap).filter(k => content.includes(k))
    if (found.length > 0) {
      const cards = found.slice(0, 6).map(k => ({
        front: cnColorMap[k].en,
        back: cnColorMap[k].emoji,
        ttsText: cnColorMap[k].en,
      }))
      return {
        sceneType: 'cardReveal',
        title: 'Colors',
        cardRevealConfig: { cards },
        ttsNarration: content,
      }
    }
  }

  // ===== 模式B：笼统描述识别 =====
  // 单元回顾动画 → 卡片揭示
  if (/单元回顾动画|Review动画/.test(content)) {
    const reviewCards = [
      { front: 'Review', back: '📚', ttsText: 'Review' },
      { front: 'Practice', back: '✏️', ttsText: 'Practice' },
      { front: 'Remember', back: '💡', ttsText: 'Remember' },
      { front: 'Great Job!', back: '⭐', ttsText: 'Great job!' },
    ]
    return {
      sceneType: 'cardReveal',
      title: 'Unit Review',
      cardRevealConfig: { cards: reviewCards },
      ttsNarration: content,
    }
  }
  // 闯关开始/庆祝特效 → 卡片揭示
  if (/闯关开始标签弹出|庆祝特效/.test(content)) {
    const challengeCards = [
      { front: '开始', back: '🚀', ttsText: '开始挑战' },
      { front: '答题', back: '✏️', ttsText: '认真答题' },
      { front: '通关', back: '🏆', ttsText: '恭喜通关' },
      { front: '庆祝', back: '🎉', ttsText: '庆祝成功' },
    ]
    return {
      sceneType: 'cardReveal',
      title: 'Challenge',
      cardRevealConfig: { cards: challengeCards },
      ttsNarration: content,
    }
  }

  // ===== 模式C：中文场景关键词识别 =====
  // 对比 → compare 场景
  if (/对比/.test(content)) {
    return {
      sceneType: 'compare',
      title: '对比动画',
      compareConfig: {
        leftItems: ['🍎', '🍎', '🍎'],
        rightItems: ['🍎', '🍎', '🍎', '🍎', '🍎'],
        result: 'right',
        resultText: '右边多！',
      },
      ttsNarration: content,
    }
  }
  // 依次打开/依次弹出/依次来/依次出现 → timeline 场景
  if (/依次打开|依次弹出|依次来|依次出现/.test(content)) {
    const parts = content.split(/[，,、；;\n]/).map(s => s.trim()).filter(s => s.length > 0)
    const steps = (parts.length > 1 ? parts : ['第一步', '第二步', '第三步']).slice(0, 6).map((text, i) => ({
      text: text.slice(0, 15),
      emoji: '⭐',
      ttsText: text,
      duration: 1.2,
    }))
    return {
      sceneType: 'timeline',
      title: '依次出现',
      timelineConfig: { steps },
      ttsNarration: content,
    }
  }

  // ===== 中文描述的英语课内容（扩展匹配）=====

  // 中文动物名称 → 动物场景
  if (/猫|狗|鸟|鱼|兔|鸭|牛|猪|马|羊|鸡|熊|猴|象|虎|狮|动物|农场|动物园|宠物/.test(content)) {
    const cnAnimalEmojiMap: Record<string, string> = {
      '猫': '🐱', '狗': '🐶', '鸟': '🐦', '鱼': '🐟', '兔': '🐰',
      '鸭': '🦆', '牛': '🐮', '猪': '🐷', '马': '🐴', '羊': '🐑',
      '鸡': '🐔', '熊': '🐻', '猴': '🐵', '象': '🐘', '虎': '🐯', '狮': '🦁',
    }
    const found = Object.keys(cnAnimalEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 8).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnAnimalEmojiMap[word] || '🐾',
      delay: i * 0.4,
      animation: 'bounceIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '动物动画',
        sceneBuildConfig: { sceneName: '动物', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文水果/食物名称 → 食物场景
  if (/苹果|香蕉|橘子|橙子|葡萄|西瓜|草莓|桃|梨|樱桃|柠檬|芒果|水果|食物|面包|牛奶|蛋糕|糖果/.test(content)) {
    const cnFoodEmojiMap: Record<string, string> = {
      '苹果': '🍎', '香蕉': '🍌', '橘子': '🍊', '橙子': '🍊', '葡萄': '🍇',
      '西瓜': '🍉', '草莓': '🍓', '桃': '🍑', '梨': '🍐', '樱桃': '🍒',
      '柠檬': '🍋', '芒果': '🥭', '面包': '🍞', '牛奶': '🥛', '蛋糕': '🎂', '糖果': '🍬',
    }
    const found = Object.keys(cnFoodEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 8).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnFoodEmojiMap[word] || '🍽️',
      delay: i * 0.4,
      animation: 'scaleIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '食物动画',
        sceneBuildConfig: { sceneName: '食物', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文身体部位 → 身体场景
  if (/头|肩|膝|脚|眼|耳|鼻|嘴|手|脸|头发|身体部位|五官/.test(content)) {
    const cnBodyEmojiMap: Record<string, string> = {
      '头': '🧑', '肩': '🤷', '膝': '🦵', '脚': '🦶',
      '眼': '👁', '耳': '👂', '鼻': '👃', '嘴': '👄',
      '手': '✋', '脸': '😀', '头发': '💇',
    }
    const found = Object.keys(cnBodyEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 8).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnBodyEmojiMap[word] || '👤',
      delay: i * 0.35,
      animation: 'bounceIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '身体部位动画',
        sceneBuildConfig: { sceneName: '身体部位', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文家庭成员 → 家庭场景
  if (/爸爸|妈妈|哥哥|姐姐|爷爷|奶奶|弟弟|妹妹|家庭|家人|全家福|相框/.test(content)) {
    const cnFamilyEmojiMap: Record<string, string> = {
      '爸爸': '👨', '妈妈': '👩', '哥哥': '👦', '姐姐': '👧',
      '爷爷': '👴', '奶奶': '👵', '弟弟': '👦', '妹妹': '👧',
    }
    const found = Object.keys(cnFamilyEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnFamilyEmojiMap[word] || '👤',
      delay: i * 0.4,
      animation: 'bounceIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '家庭动画',
        sceneBuildConfig: { sceneName: '我的家庭', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文交通工具 → 交通场景
  if (/车|公交|火车|飞机|船|自行车|交通|红绿灯|行人/.test(content)) {
    const cnTransportEmojiMap: Record<string, string> = {
      '车': '🚗', '公交': '🚌', '火车': '🚂', '飞机': '✈️',
      '船': '⛵', '自行车': '🚲', '红绿灯': '🚦',
    }
    const found = Object.keys(cnTransportEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnTransportEmojiMap[word] || '🚗',
      delay: i * 0.4,
      animation: 'slideIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '交通动画',
        sceneBuildConfig: { sceneName: '交通工具', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文动作词 → 时间线
  if (/跑步|跳跃|游泳|跳舞|唱歌|读书|写字|起床|刷牙|吃早饭|吃晚饭|睡觉|日常/.test(content)) {
    const cnActionEmojiMap: Record<string, string> = {
      '跑步': '🏃', '跳跃': '🤸', '游泳': '🏊', '跳舞': '💃', '唱歌': '🎤',
      '读书': '📖', '写字': '✍', '起床': '⏰', '刷牙': '🪥',
      '吃早饭': '🍽️', '吃晚饭': '🍽️', '睡觉': '😴',
    }
    const found = Object.keys(cnActionEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const steps = unique.slice(0, 6).map((word, i) => ({
      text: word,
      emoji: cnActionEmojiMap[word] || '⭐',
      ttsText: word,
      duration: 1.2,
    }))
    if (steps.length > 0) {
      return {
        sceneType: 'timeline',
        title: '日常动画',
        timelineConfig: { steps },
        ttsNarration: content,
      }
    }
  }

  // 中文天气 → 场景
  if (/晴天|雨天|云|雪|风|天气|太阳升起|月亮升起|星星闪烁/.test(content)) {
    const cnWeatherEmojiMap: Record<string, string> = {
      '晴': '☀️', '雨': '🌧️', '云': '☁️', '雪': '❄️', '风': '💨',
      '太阳': '☀️', '月亮': '🌙', '星星': '⭐',
    }
    const found = Object.keys(cnWeatherEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnWeatherEmojiMap[word] || '🌤️',
      delay: i * 0.4,
      animation: 'fadeIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '天气动画',
        sceneBuildConfig: { sceneName: '天气', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文服装 → 场景
  if (/衣服|裤子|裙子|帽子|鞋|服装|购物|价格标签/.test(content)) {
    const cnClothesEmojiMap: Record<string, string> = {
      '衣服': '👕', '裤子': '👖', '裙子': '👗', '帽子': '🎩', '鞋': '👟',
    }
    const found = Object.keys(cnClothesEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnClothesEmojiMap[word] || '👕',
      delay: i * 0.4,
      animation: 'scaleIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '服装动画',
        sceneBuildConfig: { sceneName: '服装', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文节日 → 场景
  if (/节日|圣诞|新年|春节|烟花|灯笼|春联|红包|礼物|庆祝/.test(content)) {
    const cnFestivalEmojiMap: Record<string, string> = {
      '圣诞': '🎄', '新年': '🎉', '春节': '🧧', '烟花': '🎆', '灯笼': '🏮',
      '春联': '🧧', '红包': '🧧', '礼物': '🎁',
    }
    const found = Object.keys(cnFestivalEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnFestivalEmojiMap[word] || '🎉',
      delay: i * 0.4,
      animation: 'bounceIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '节日动画',
        sceneBuildConfig: { sceneName: '节日', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文文具/教室物品 → 场景
  if (/文具|铅笔|橡皮|尺子|书本|书|笔|教室|书包|翻页/.test(content)) {
    const cnStationeryEmojiMap: Record<string, string> = {
      '文具': '✏️', '铅笔': '✏️', '橡皮': '🧽', '尺子': '📏',
      '书本': '📚', '书': '📖', '笔': '✏️', '教室': '🏫', '书包': '🎒',
    }
    const found = Object.keys(cnStationeryEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnStationeryEmojiMap[word] || '✏️',
      delay: i * 0.4,
      animation: 'bounceIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '文具动画',
        sceneBuildConfig: { sceneName: '文具', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文颜色 → 卡片揭示
  if (/红色|蓝色|绿色|黄色|橙色|紫色|粉色|黑色|白色|棕色|彩色|彩虹|颜色/.test(content)) {
    const cnColorCardMap: Record<string, { emoji: string; en: string }> = {
      '红': { emoji: '🟥', en: 'Red' }, '蓝': { emoji: '🟦', en: 'Blue' },
      '绿': { emoji: '🟩', en: 'Green' }, '黄': { emoji: '🟨', en: 'Yellow' },
      '橙': { emoji: '🟧', en: 'Orange' }, '紫': { emoji: '🟪', en: 'Purple' },
      '粉': { emoji: '🌸', en: 'Pink' }, '黑': { emoji: '⬛', en: 'Black' },
      '白': { emoji: '⬜', en: 'White' },
    }
    const found = Object.keys(cnColorCardMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const cards = unique.slice(0, 6).map(c => ({
      front: cnColorCardMap[c].en,
      back: cnColorCardMap[c].emoji,
      ttsText: cnColorCardMap[c].en,
    }))
    if (cards.length > 0) {
      return {
        sceneType: 'cardReveal',
        title: '颜色动画',
        cardRevealConfig: { cards },
        ttsNarration: content,
      }
    }
  }

  // "单元回顾动画" → 卡片揭示（通用回顾）
  if (/回顾动画|单元回顾|Review/.test(content)) {
    // 从内容中提取单元名
    const unitMatch = content.match(/(\w+)单元回顾|(\w+)Review/)
    const unitName = unitMatch?.[1] || unitMatch?.[2] || '本单元'
    const cards = [
      { front: '📚', back: '知识回顾', ttsText: '知识回顾' },
      { front: '✏️', back: '练习巩固', ttsText: '练习巩固' },
      { front: '🏆', back: '成果展示', ttsText: '成果展示' },
    ]
    return {
      sceneType: 'cardReveal',
      title: `${unitName}回顾`,
      cardRevealConfig: { cards },
      ttsNarration: content,
    }
  }

  // "闯关"/"庆祝特效" → 卡片揭示（闯关主题）
  if (/闯关|庆祝特效|全对后/.test(content)) {
    const cards = [
      { front: '🎯', back: '闯关开始', ttsText: '闯关开始' },
      { front: '⭐', back: '答题挑战', ttsText: '答题挑战' },
      { front: '🏆', back: '庆祝通关', ttsText: '庆祝通关' },
    ]
    return {
      sceneType: 'cardReveal',
      title: '闯关动画',
      cardRevealConfig: { cards },
      ttsNarration: content,
    }
  }

  // 中文房间/场所 → 场景
  if (/房间|卧室|浴室|厨房|客厅|超市|商店|公园|学校|家/.test(content)) {
    const cnPlaceEmojiMap: Record<string, string> = {
      '房间': '🚪', '卧室': '🛏️', '浴室': '🚿', '厨房': '🍳', '客厅': '🛋️',
      '超市': '🏪', '商店': '🏪', '公园': '🏞️', '学校': '🏫', '家': '🏠',
    }
    const found = Object.keys(cnPlaceEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnPlaceEmojiMap[word] || '🏠',
      delay: i * 0.4,
      animation: 'slideIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '场所动画',
        sceneBuildConfig: { sceneName: '场所', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文职业 → 场景
  if (/医生|老师|警察|消防员|护士|司机|厨师|工人|职业|梦想/.test(content)) {
    const cnJobEmojiMap: Record<string, string> = {
      '医生': '👨‍⚕️', '老师': '👩‍🏫', '警察': '👮', '消防员': '🧑‍🚒',
      '护士': '👩‍⚕️', '司机': '🚗', '厨师': '👨‍🍳', '工人': '👷',
    }
    const found = Object.keys(cnJobEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnJobEmojiMap[word] || '👤',
      delay: i * 0.4,
      animation: 'bounceIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '职业动画',
        sceneBuildConfig: { sceneName: '职业', elements },
        ttsNarration: content,
      }
    }
  }

  // 中文自然景观 → 场景
  if (/山|河|湖|海|森林|草原|蓝天|绿草|牛羊|地球|环境|回收/.test(content)) {
    const cnNatureEmojiMap: Record<string, string> = {
      '山': '⛰️', '河': '🏞️', '湖': '🌊', '海': '🌊', '森林': '🌲',
      '草原': '🌿', '蓝天': '☁️', '绿草': '🌿', '牛': '🐄', '羊': '🐑',
      '地球': '🌍', '环境': '🌱', '回收': '♻️',
    }
    const found = Object.keys(cnNatureEmojiMap).filter(k => content.includes(k))
    const unique = [...new Set(found)]
    const elements = unique.slice(0, 6).map((word, i) => ({
      id: `el-${i}`,
      text: word,
      emoji: cnNatureEmojiMap[word] || '🌿',
      delay: i * 0.4,
      animation: 'fadeIn' as const,
      ttsText: word,
    }))
    if (elements.length > 0) {
      return {
        sceneType: 'sceneBuild',
        title: '自然动画',
        sceneBuildConfig: { sceneName: '自然', elements },
        ttsNarration: content,
      }
    }
  }

  // 默认：智能场景构建（不再使用统一的📦纸箱）
  return buildSmartSceneBuild(content)
}

// 智能场景构建：从内容中提取emoji或根据关键词选择合适的图标
function buildSmartSceneBuild(content: string): AnimationSceneConfig {
  // 1. 尝试从内容中直接提取emoji
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/gu
  const extractedEmojis = content.match(emojiRegex) || []

  // 2. 根据内容关键词选择主题图标
  const themeMap: { keywords: RegExp; emoji: string }[] = [
    { keywords: /学校|上课|老师|学生|school|class|teacher|student/i, emoji: '🏫' },
    { keywords: /书|读|写|book|read|write/i, emoji: '📚' },
    { keywords: /朋友|同学|friend/i, emoji: '👫' },
    { keywords: /小朋友|孩子|child|kid/i, emoji: '🧒' },
    { keywords: /男孩|boy/i, emoji: '👦' },
    { keywords: /女孩|girl/i, emoji: '👧' },
    { keywords: /爸爸|father|dad/i, emoji: '👨' },
    { keywords: /妈妈|mother|mom/i, emoji: '👩' },
    { keywords: /爷爷|grandfather/i, emoji: '👴' },
    { keywords: /奶奶|grandmother/i, emoji: '👵' },
    { keywords: /猫|cat/i, emoji: '🐱' },
    { keywords: /狗|dog/i, emoji: '🐶' },
    { keywords: /鸟|bird/i, emoji: '🐦' },
    { keywords: /鱼|fish/i, emoji: '🐟' },
    { keywords: /兔|rabbit|bunny/i, emoji: '🐰' },
    { keywords: /鸭|duck/i, emoji: '🦆' },
    { keywords: /青蛙|frog/i, emoji: '🐸' },
    { keywords: /蝌蚪|tadpole/i, emoji: '🐸' },
    { keywords: /虫|worm|insect/i, emoji: '🐛' },
    { keywords: /蝴蝶|butterfly/i, emoji: '🦋' },
    { keywords: /蜜蜂|bee/i, emoji: '🐝' },
    { keywords: /苹果|apple/i, emoji: '🍎' },
    { keywords: /香蕉|banana/i, emoji: '🍌' },
    { keywords: /橘子|橙子|orange/i, emoji: '🍊' },
    { keywords: /葡萄|grape/i, emoji: '🍇' },
    { keywords: /西瓜|watermelon/i, emoji: '🍉' },
    { keywords: /草莓|strawberry/i, emoji: '🍓' },
    { keywords: /桃|peach/i, emoji: '🍑' },
    { keywords: /梨|pear/i, emoji: '🍐' },
    { keywords: /樱桃|cherry/i, emoji: '🍒' },
    { keywords: /柠檬|lemon/i, emoji: '🍋' },
    { keywords: /花|flower/i, emoji: '🌸' },
    { keywords: /树|tree/i, emoji: '🌳' },
    { keywords: /草|grass/i, emoji: '🌿' },
    { keywords: /叶|leaf|leaves/i, emoji: '🍃' },
    { keywords: /种子|seed/i, emoji: '🌱' },
    { keywords: /蒲公英|dandelion/i, emoji: '🌼' },
    { keywords: /太阳|sun/i, emoji: '☀️' },
    { keywords: /月亮|moon/i, emoji: '🌙' },
    { keywords: /星星|star/i, emoji: '⭐' },
    { keywords: /云|cloud/i, emoji: '☁️' },
    { keywords: /雨|rain/i, emoji: '🌧️' },
    { keywords: /雪|snow/i, emoji: '❄️' },
    { keywords: /风|wind/i, emoji: '💨' },
    { keywords: /闪电|lightning|thunder/i, emoji: '⚡' },
    { keywords: /彩虹|rainbow/i, emoji: '🌈' },
    { keywords: /春|spring/i, emoji: '🌸' },
    { keywords: /夏|summer/i, emoji: '☀️' },
    { keywords: /秋|autumn|fall/i, emoji: '🍂' },
    { keywords: /冬|winter/i, emoji: '⛄' },
    { keywords: /车|car|bus/i, emoji: '🚗' },
    { keywords: /公交|bus/i, emoji: '🚌' },
    { keywords: /火车|train/i, emoji: '🚂' },
    { keywords: /飞机|plane|airplane/i, emoji: '✈️' },
    { keywords: /船|ship|boat/i, emoji: '⛵' },
    { keywords: /自行车|bike|bicycle/i, emoji: '🚲' },
    { keywords: /球|ball/i, emoji: '⚽' },
    { keywords: /篮球|basketball/i, emoji: '🏀' },
    { keywords: /足球|football|soccer/i, emoji: '⚽' },
    { keywords: /玩具|toy/i, emoji: '🧸' },
    { keywords: /礼物|gift|present/i, emoji: '🎁' },
    { keywords: /蛋糕|cake/i, emoji: '🎂' },
    { keywords: /糖果|candy|sweet/i, emoji: '🍬' },
    { keywords: /面包|bread/i, emoji: '🍞' },
    { keywords: /牛奶|milk/i, emoji: '🥛' },
    { keywords: /水|water/i, emoji: '💧' },
    { keywords: /火|fire/i, emoji: '🔥' },
    { keywords: /冰|ice/i, emoji: '🧊' },
    { keywords: /衣服|cloth/i, emoji: '👕' },
    { keywords: /帽子|hat|cap/i, emoji: '🎩' },
    { keywords: /鞋|shoe/i, emoji: '👟' },
    { keywords: /伞|umbrella/i, emoji: '☂️' },
    { keywords: /音乐|music/i, emoji: '🎵' },
    { keywords: /画|draw|paint/i, emoji: '🎨' },
    { keywords: /游戏|game|play/i, emoji: '🎮' },
    { keywords: /时间|time|clock/i, emoji: '⏰' },
    { keywords: /钟|clock/i, emoji: '⏰' },
    { keywords: /日历|calendar/i, emoji: '📅' },
    { keywords: /铅笔|pencil/i, emoji: '✏️' },
    { keywords: /橡皮|eraser/i, emoji: '🧽' },
    { keywords: /尺子|ruler/i, emoji: '📏' },
    { keywords: /剪刀|scissor/i, emoji: '✂️' },
    { keywords: /电脑|computer/i, emoji: '💻' },
    { keywords: /手机|phone/i, emoji: '📱' },
    { keywords: /电视|tv|television/i, emoji: '📺' },
    { keywords: /食物|food|eat/i, emoji: '🍽️' },
    { keywords: /家|home|house/i, emoji: '🏠' },
    { keywords: /房间|room/i, emoji: '🚪' },
    { keywords: /门|door/i, emoji: '🚪' },
    { keywords: /窗|window/i, emoji: '🪟' },
    { keywords: /公园|park/i, emoji: '🏞️' },
    { keywords: /商店|shop|store/i, emoji: '🏪' },
    { keywords: /超市|supermarket/i, emoji: '🛒' },
    { keywords: /医院|hospital|doctor/i, emoji: '🏥' },
    { keywords: /警察|police/i, emoji: '👮' },
    { keywords: /消防|fire/i, emoji: '🚒' },
    { keywords: /学校|school/i, emoji: '🏫' },
    { keywords: /信|letter|mail/i, emoji: '✉️' },
    { keywords: /购物|shopping/i, emoji: '🛒' },
    { keywords: /钱|money|dollar/i, emoji: '💰' },
    { keywords: /心|heart/i, emoji: '❤️' },
    { keywords: /星|star/i, emoji: '⭐' },
    { keywords: /钻石|diamond/i, emoji: '💎' },
    { keywords: /奖|prize|award/i, emoji: '🏆' },
    { keywords: /旗|flag/i, emoji: '🚩' },
    { keywords: /气球|balloon/i, emoji: '🎈' },
    { keywords: /蜡烛|candle/i, emoji: '🕯️' },
    { keywords: /灯|light|lamp/i, emoji: '💡' },
    { keywords: /钥匙|key/i, emoji: '🔑' },
    { keywords: /锁|lock/i, emoji: '🔒' },
    { keywords: /工具|tool/i, emoji: '🛠️' },
    { keywords: /锤|hammer/i, emoji: '🔨' },
    { keywords: /书桌|desk|table/i, emoji: '🪑' },
    { keywords: /椅子|chair/i, emoji: '🪑' },
    { keywords: /床|bed/i, emoji: '🛏️' },
    { keywords: /枕头|pillow/i, emoji: '🛏️' },
    { keywords: /被子|quilt|blanket/i, emoji: '🛏️' },
    { keywords: /碗|bowl/i, emoji: '🥣' },
    { keywords: /筷子|chopstick/i, emoji: '🥢' },
    { keywords: /勺|spoon/i, emoji: '🥄' },
    { keywords: /叉|fork/i, emoji: '🍴' },
    { keywords: /盘|plate|dish/i, emoji: '🍽️' },
    { keywords: /杯|cup|glass/i, emoji: '🥤' },
    { keywords: /表|watch/i, emoji: '⌚' },
    { keywords: /眼镜|glasses/i, emoji: '👓' },
    { keywords: /包|bag|backpack/i, emoji: '🎒' },
    { keywords: /雨衣|raincoat/i, emoji: '🧥' },
    { keywords: /手套|glove/i, emoji: '🧤' },
    { keywords: /围巾|scarf/i, emoji: '🧣' },
    { keywords: /袜子|sock/i, emoji: '🧦' },
    { keywords: /钻石|diamond/i, emoji: '💎' },
    { keywords: /宝石|gem|jewel/i, emoji: '💍' },
    { keywords: /皇冠|crown/i, emoji: '👑' },
    { keywords: /地图|map/i, emoji: '🗺️' },
    { keywords: /指南针|compass/i, emoji: '🧭' },
    { keywords: /望远镜|telescope/i, emoji: '🔭' },
    { keywords: /显微镜|microscope/i, emoji: '🔬' },
    { keywords: /实验|experiment/i, emoji: '🧪' },
    { keywords: /火箭|rocket/i, emoji: '🚀' },
    { keywords: /卫星|satellite/i, emoji: '🛰️' },
    { keywords: /地球|earth|globe/i, emoji: '🌍' },
    { keywords: /月亮|moon/i, emoji: '🌙' },
    { keywords: /太阳系|solar system/i, emoji: '☀️' },
  ]

  // 切分内容为元素
  const parts = content.split(/[，,、；;\n]/).map(s => s.trim()).filter(s => s.length > 0)

  // 如果内容很短（只有一两句），按字符或词切分
  let elements: AnimationElement[]
  if (parts.length <= 1) {
    // 尝试按空格切分（英语）
    const words = content.split(/\s+/).filter(s => s.length > 0).slice(0, 8)
    elements = words.map((s, i) => {
      // 优先使用提取的emoji
      const emoji = extractedEmojis[i] || pickThemeEmoji(s, themeMap) || '📚'
      return {
        id: `el-${i}`,
        text: s.trim().slice(0, 8),
        emoji,
        delay: i * 0.4,
        animation: pickAnimation(i),
        ttsText: s.trim(),
      }
    })
  } else {
    elements = parts.slice(0, 8).map((s, i) => {
      const emoji = extractedEmojis[i] || pickThemeEmoji(s, themeMap) || '📚'
      return {
        id: `el-${i}`,
        text: s.trim().slice(0, 8),
        emoji,
        delay: i * 0.4,
        animation: pickAnimation(i),
        ttsText: s.trim(),
      }
    })
  }

  // 如果一个元素都没有，至少放一个文字卡片
  if (elements.length === 0) {
    elements = [{
      id: 'el-0',
      text: content.slice(0, 12),
      emoji: '📚',
      delay: 0,
      animation: 'fadeIn' as const,
      ttsText: content,
    }]
  }

  return {
    sceneType: 'sceneBuild',
    title: '互动动画',
    sceneBuildConfig: {
      sceneName: content.slice(0, 20),
      elements,
    },
    ttsNarration: content,
  }
}

// 根据文字内容从主题映射中选择emoji
function pickThemeEmoji(text: string, themeMap: { keywords: RegExp; emoji: string }[]): string {
  for (const { keywords, emoji } of themeMap) {
    if (keywords.test(text)) return emoji
  }
  return ''
}

// 根据索引选择不同的动画效果，避免单调
function pickAnimation(i: number): 'bounceIn' | 'fadeIn' | 'slideIn' | 'scaleIn' | 'popIn' {
  const animations: ('bounceIn' | 'fadeIn' | 'slideIn' | 'scaleIn' | 'popIn')[] = [
    'bounceIn', 'scaleIn', 'slideIn', 'popIn', 'fadeIn'
  ]
  return animations[i % animations.length]
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
