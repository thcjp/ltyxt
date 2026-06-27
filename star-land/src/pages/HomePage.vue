<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import { useRewardStore } from '@/stores/reward'
import { useSettingsStore } from '@/stores/settings'
import { useRewardSystem } from '@/composables/useRewardSystem'
import { useGsap } from '@/composables/useGsap'
import { Sparkles, Star, Diamond, Flame, CheckCircle, User, Pencil, Share2, Gift, Zap, BookOpen, Brain, Heart, Trophy, ChevronRight, X } from 'lucide-vue-next'

const router = useRouter()
const progressStore = useProgressStore()
const rewardStore = useRewardStore()
const settingsStore = useSettingsStore()
const { rewardForCheckIn, checkAchievements } = useRewardSystem()
const { bounceIn, revealText } = useGsap()

const checkedIn = ref(false)
const showCheckInAnim = ref(false)
const showNameEdit = ref(false)
const nameInput = ref(settingsStore.childName)
const showShareToast = ref(false)
const shareToastMsg = ref('')
const hasSharedBefore = ref(localStorage.getItem('hasShared') === 'true')
const showShareModal = ref(false)
const currentAdvantageTab = ref(0)

// 营销介绍页始终显示（作为首页固定内容）
const showMarketing = ref(true)

// 教学方法权威徽章
const methodBadges = [
  { icon: '🧮', name: '新加坡CPA教学法', desc: '实物→图示→符号，让孩子真正"想通"而非"背会"', color: 'from-emerald-400 to-teal-500' },
  { icon: '🎓', name: 'EDI显性直接教学', desc: '每课明确学习目标+成功标准，示范→共练→独立', color: 'from-blue-400 to-indigo-500' },
  { icon: '🔄', name: '艾宾浩斯间隔重复', desc: '智能错题本按遗忘曲线推送复习，精准补漏', color: 'from-amber-400 to-orange-500' },
  { icon: '🌈', name: '多感官互动学习', desc: '拼音口型+凑十动画+笔顺书写，视听觉动觉全开', color: 'from-pink-400 to-rose-500' },
]

// 一节课的完整流程
const lessonFlow = [
  { step: 'I Do', icon: '👨‍🏫', title: '家长示范', desc: 'AI动画讲解+家长按提示引导', time: '6分钟' },
  { step: 'We Do', icon: '🤝', title: '亲子共练', desc: '一起做题，家长随时帮忙', time: '10分钟' },
  { step: 'You Do', icon: '🦸', title: '孩子独立', desc: '自己闯关，答对获星星奖励', time: '10分钟' },
  { step: '复习', icon: '🔄', title: '智能回溯', desc: '错题自动记录，到期推送复习', time: '4分钟' },
]

// 学科区域（含方法标签）
const areas = [
  { name: '字灵山', subject: 'chinese' as const, desc: '语文冒险', color: 'from-purple-400 to-purple-600', icon: '📖', method: '多感官识字+思维导图' },
  { name: '数魔塔', subject: 'math' as const, desc: '数学探索', color: 'from-green-400 to-green-600', icon: '🔢', method: '新加坡CPA+凑十法' },
  { name: '语声森林', subject: 'english' as const, desc: '英语奇遇', color: 'from-red-400 to-red-600', icon: '🌟', method: '自然拼读+间隔重复' },
]

// 今日任务
const todayTasks = [
  { subject: 'chinese' as const, name: '语文', icon: '📖', color: 'bg-chinese' },
  { subject: 'math' as const, name: '数学', icon: '🔢', color: 'bg-math' },
  { subject: 'english' as const, name: '英语', icon: '🌟', color: 'bg-english' },
]

// 营销卖点（分三层：方法权威→场景利益→信任门槛）
const sellingPoints = [
  { icon: '🧮', title: '融入新加坡CPA教学法', desc: '实物→图示→符号三步走，让孩子真正"想通"而不是"背会"', layer: '方法权威' },
  { icon: '🎓', title: 'I Do→We Do→You Do教学闭环', desc: '先示范、再带着练、最后独立做，国际公认渐进式教学法', layer: '方法权威' },
  { icon: '🔄', title: '间隔重复+智能错题本', desc: '自动在孩子快要遗忘时推送复习，错题自动溯源到课程', layer: '方法权威' },
  { icon: '👨‍👩‍👧', title: '家长共学四步法提示', desc: '不会教也能陪，照着念就行——把辅导从战场变亲子时光', layer: '场景利益' },
  { icon: '🎬', title: 'AI动画+多感官互动', desc: '拼音口型、凑十动画、笔顺书写，孩子边玩边学', layer: '场景利益' },
  { icon: '📚', title: '1-6年级语数外全覆盖', desc: '850+课时+6000+练习题，一个账号陪到小学毕业', layer: '场景利益' },
  { icon: '🆓', title: '完全免费·免注册·无广告', desc: '点开即用，不收集隐私，永不变相收费', layer: '信任门槛' },
  { icon: '📊', title: '学习进度可视化', desc: '孩子学到哪、哪薄弱、进步多少，家长心里有数', layer: '信任门槛' },
]

// 第一屏精选卖点（家长一看就想要的核心钩子）
const coreHooks = [
  { icon: '🧮', title: '用新加坡数学CPA法', desc: '实物→图示→符号，真正理解而非死记', highlight: true },
  { icon: '🔄', title: '自动抗遗忘复习', desc: '错题按遗忘曲线精准推送，不用家长盯着', highlight: true },
  { icon: '👨‍👩‍👧', title: '不会教也能陪', desc: '每课有家长提示词，照着念就能辅导', highlight: false },
  { icon: '📚', title: '三版教材融合', desc: '人教+北师大+苏教精华全收入，一个账号全搞定', highlight: true },
  { icon: '🔗', title: '跨学科跨年级', desc: '英语购物关联数学人民币，高年级回溯低年级', highlight: false },
  { icon: '🎮', title: '孩子主动想学', desc: '闯关游戏+星星奖励，从"要我学"变"我要学"', highlight: false },
  { icon: '🆓', title: '完全免费无套路', desc: '不注册、不收费、无广告、离线可用', highlight: true },
]

// 第二屏：全部优点分类
const advantageCategories = [
  {
    tab: '教学方法', icon: '🎓', color: 'from-blue-500 to-indigo-600',
    items: [
      '新加坡CPA教学法：数学从动手到抽象',
      'EDI显性直接教学：每课明确目标+成功标准',
      'I Do→We Do→You Do渐进式教学闭环',
      '艾宾浩斯间隔重复：SM-2算法智能复习',
      '多感官学习：拼音口型+凑十动画+笔顺书写',
      '成长型思维语言：夸努力不夸聪明',
    ]
  },
  {
    tab: '课程体系', icon: '📚', color: 'from-emerald-500 to-teal-600',
    items: [
      '1-6年级语数外全覆盖，850+课时',
      '融合人教版+北师大版+苏教版三版教材精华',
      '每单元5课时：讲解→深化→应用→测试→综合',
      '每课时7题：基础→提高→挑战→回溯',
      '6000+练习题，含期末/期中真题标记',
      '跨年级回溯：q7题自动链接低年级知识，抗遗忘',
      '跨学科融合：英语购物关联数学人民币，语文古诗关联英语四季',
      '知识点溯源：错题自动链接到原始课程',
    ]
  },
  {
    tab: '游戏化', icon: '🎮', color: 'from-orange-500 to-red-600',
    items: [
      '星星钻石双奖励系统',
      '每日签到+连续学习激励',
      '14种动画场景（竖式/凑十/拼音/3D几何等）',
      '闪卡复习+翻转卡片',
      '成就徽章解锁系统',
      '分享得星星，鼓励传播',
    ]
  },
  {
    tab: '家长共学', icon: '👨‍👩‍👧', color: 'from-purple-500 to-pink-600',
    items: [
      '每课parentTips：照着念就能辅导',
      '费曼学习法提示：让孩子当小老师',
      '苏格拉底提问链：引导而非直接告诉',
      'CFU检查理解：让孩子复述确认',
      '学习进度可视化：哪薄弱一目了然',
      '钻石消费：家长自定义奖励机制',
    ]
  },
  {
    tab: '技术优势', icon: '⚙️', color: 'from-slate-500 to-gray-700',
    items: [
      '完全离线：file://协议直接打开',
      'localStorage持久化：关了再开数据不丢',
      'TTS语音：中英文双语朗读',
      'GSAP动画：流畅的教学动效',
      '单文件部署：一个HTML搞定一切',
      '数据不外传：所有数据存在本地',
    ]
  },
]

// 第三屏：家长痛点-方案对照
const painPoints = [
  { pain: '辅导作业鸡飞狗跳', painIcon: '😤', solution: '每课有家长提示词，照着念就能教，把战场变亲子时光', solutionIcon: '👨‍👩‍👧' },
  { pain: '孩子一学就忘', painIcon: '🤯', solution: 'SM-2间隔重复算法，在孩子快忘记时精准推送复习', solutionIcon: '🔄' },
  { pain: '只会死记硬背', painIcon: '📝', solution: '新加坡CPA教学法，从实物到符号真正理解', solutionIcon: '🧮' },
  { pain: '孩子不想学', painIcon: '😴', solution: '闯关游戏+星星奖励，从"要我学"变"我要学"', solutionIcon: '🎮' },
  { pain: '不知道学到哪了', painIcon: '❓', solution: '进度可视化+错题分析，哪薄弱一目了然', solutionIcon: '📊' },
  { pain: '辅导班太贵', painIcon: '💸', solution: '用同样的方法，完全免费，一个账号陪到毕业', solutionIcon: '🆓' },
]

// 第四屏：信任信号
const trustSignals = [
  { icon: '🆓', title: '永久免费', desc: '不收费、不内购、不变相收费。一位父亲用AI为孩子做的工具，分享给所有家庭' },
  { icon: '🔒', title: '隐私安全', desc: '不注册、不登录、不收集任何信息。所有数据存在你自己的设备上' },
  { icon: '📱', title: '离线可用', desc: '下载一个HTML文件，手机/电脑/平板都能直接打开，无需网络' },
  { icon: '📚', title: '三版教材融合', desc: '融合人教版、北师大版、苏教版三大教材精华，确保知识点全覆盖' },
  { icon: '🔗', title: '跨学科回溯', desc: '依托科技时代跨学科人才培养理念，英语关联数学，语文关联科学，高年级回溯低年级' },
  { icon: '🎓', title: '方法有据', desc: '融入新加坡CPA、EDI直接教学、艾宾浩斯遗忘曲线等全球验证的方法' },
]

// 统计数据
const stats = [
  { value: '850+', label: '课时' },
  { value: '6000+', label: '练习题' },
  { value: '14', label: '种教学法' },
  { value: '3×6', label: '科年级' },
]

// 分享场景文案
const shareScenes = [
  { scene: '朋友圈', text: '我家娃这周用新加坡CPA法学会了凑十，从掰手指到秒算，免费工具真香！' },
  { scene: '家长群', text: '找到一个把新加坡数学+间隔重复做成闯关游戏的免费平台，1-6年级都有，推荐试试：' },
  { scene: '家庭群', text: '看看TA今天的学习战报，连续坚持学习啦！' },
]

// ===== 全球14种优秀教学方法（营销核心展示） =====
const teachingMethods = [
  {
    name: '新加坡CPA教学法', icon: '🧮', color: 'from-emerald-400 to-teal-500',
    principle: 'Concrete具象→Pictorial图示→Abstract符号，三阶段建构数学概念',
    evidence: [
      '数学G1 数数课：emoji实物→图形→数字CPA动画配置',
      '数学G5 小数乘法：硬币实物→线段图→算式三段式cpaConfig',
      '数学G6 圆柱圆锥：实物模型→展开图→体积公式',
    ],
  },
  {
    name: 'EDI显性直接教学', icon: '🎓', color: 'from-blue-400 to-indigo-500',
    principle: '明确目标→I Do示范→We Do共练→You Do独立→CFU检查理解',
    evidence: [
      '全部850+课时：每课learningObjective+successCriteria',
      '每课iDo末尾含【CFU检查理解】即时检测问句',
      'weDo标注【引导式】→【半独立】→【独立】支架梯度',
    ],
  },
  {
    name: '间隔重复SM-2', icon: '🔄', color: 'from-amber-400 to-orange-500',
    principle: '按遗忘曲线调度，答对拉长间隔、答错重置，easeFactor自适应',
    evidence: [
      'study.ts: calculateSM2()完整实现SM-2算法（间隔1→3→round(interval*ease)）',
      'ReviewPage.vue: 从dueForReview取今日到期错题，三档自评驱动调度',
      'WrongQuestion类型: sm2Interval/sm2EaseFactor/sm2Repetitions/sm2NextReview字段',
    ],
  },
  {
    name: '自然拼读法', icon: '🔤', color: 'from-pink-400 to-rose-500',
    principle: '建立字母与发音对应规则，见词能读、听音能写',
    evidence: [
      '英语G1-3: 系统覆盖字母音/CVC/字母组合/Word Family/Sight Words',
      '语文G1: 复韵母ie üe er系统教学（c1u9）',
      'phonicsData.ts: 完整自然拼读数据系统',
    ],
  },
  {
    name: '费曼学习法', icon: '👨‍🏫', color: 'from-purple-400 to-violet-500',
    principle: '用最简单的话把知识讲给外行听，讲不清的地方就是没懂',
    evidence: [
      '全部课时youDo末尾: 【费曼小老师时间】用最简单的话讲给小熊/家长听',
      '语文G4: 记叙文阅读让孩子当小老师讲解段落',
      '数学G6: 分数运算让孩子用费曼法讲解算理',
    ],
  },
  {
    name: '苏格拉底提问法', icon: '🤔', color: 'from-cyan-400 to-blue-500',
    principle: '用递进式提问链引导学生自己发现答案，而非直接告知',
    evidence: [
      '数学G4 运算定律: 用提问链引导发现乘法分配律',
      '语文G3: 写景古诗用三步提问引导理解意境',
      '英语G5 比较级: 用提问链引导发现-er/-est规律',
    ],
  },
  {
    name: '成长型思维', icon: '🌱', color: 'from-green-400 to-emerald-500',
    principle: '能力可经由努力增长，表扬过程而非天赋，用"还没"语言',
    evidence: [
      '全部explanation末尾: "做错是因为方法还不熟练，多练几次就好，不是你不够聪明"',
      'settings.ts: 成长型思维表扬话术库',
      'parentTips: 引导家长表扬努力和策略而非聪明',
    ],
  },
  {
    name: '蒙台梭利多感官', icon: '✋', color: 'from-orange-400 to-amber-500',
    principle: '动手操作自主学习具，视/听/触/动多感官同步输入',
    evidence: [
      '14种动画场景: numberCount/merge/separate/compare/shapeDraw等',
      '语文G1笔画教学: 蒙台梭利多感官（看+写+说）',
      'TTS语音+GSAP动画+触摸交互三通道同步',
    ],
  },
  {
    name: '游戏化学习', icon: '🎮', color: 'from-red-400 to-pink-500',
    principle: '用游戏机制提升内在动机：关卡/积分/反馈/挑战/自主',
    evidence: [
      '16个成就徽章+星星钻石双货币+心愿商店+连胜机制',
      '每课funElement: 趣味游戏元素配套教学',
      'l4形成性评价: 闯关测试模式+连击+Boss题',
    ],
  },
  {
    name: '思维导图法', icon: '🗺️', color: 'from-indigo-400 to-purple-500',
    principle: '以中心主题辐射分支，用关键词+图像建立结构化联想',
    evidence: [
      '每单元l4: 思维导图整理环节，梳理本单元知识结构',
      '英语G6 一般过去时: 思维导图整理规则/不规则变化',
      '数学G6 比例: 思维导图整理正反比例关系',
    ],
  },
  {
    name: '记忆宫殿法', icon: '🏛️', color: 'from-teal-400 to-cyan-500',
    principle: '把要记的内容放置在熟悉空间的固定位置，回忆时走一遍',
    evidence: [
      '英语G6 词根词缀(e6u10): 用记忆宫殿法记忆前缀un-/re-/dis-',
      '语文古诗: 把诗句放在客厅空间锚点上记忆',
      '英语词汇: 选熟悉路线设锚点放单词图像',
    ],
  },
  {
    name: '多元智能理论', icon: '🌈', color: 'from-violet-400 to-fuchsia-500',
    principle: '8种智能用多种通道触达不同孩子，让强项带动弱项',
    evidence: [
      '语言智能: 课文/对话/诗歌', 
      '视觉空间: 14种动画场景+图形绘制',
      '身体动觉: TPR全身反应法+笔顺书写+舒尔特方格',
    ],
  },
  {
    name: '芬兰现象式学习', icon: '🌍', color: 'from-lime-400 to-green-500',
    principle: '以真实世界现象为切入点，跨学科多课时整合探究',
    evidence: [
      '跨学科融合: 英语购物关联数学人民币',
      '跨年级回溯: q7题自动回溯低年级知识',
      'PBL项目: 制作老师卡/朋友卡/成长纪念册',
    ],
  },
  {
    name: 'RTI分层干预', icon: '📊', color: 'from-sky-400 to-blue-500',
    principle: 'Tier1普遍教学→Tier2小组干预→Tier3强化个体，数据驱动',
    evidence: [
      '错题本: 自动记录未掌握知识点，按优先级排序',
      'SM-2算法: easeFactor<2.0的错题标记为"需加强"',
      'getRegressionQuestions(): 按复习优先级取未掌握错题',
    ],
  },
]

function handleCheckIn() {
  if (checkedIn.value) return
  checkedIn.value = true
  showCheckInAnim.value = true
  rewardForCheckIn()
  checkAchievements()
  setTimeout(() => { showCheckInAnim.value = false }, 2000)
}

function goToSubject(subject: string) {
  router.push(`/courses/${subject}`)
}

function saveName() {
  settingsStore.setChildName(nameInput.value)
  showNameEdit.value = false
}

function openNameEdit() {
  nameInput.value = settingsStore.childName
  showNameEdit.value = true
}

function startLearning() {
  const el = document.getElementById('learning-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// 分享功能
const SHARE_URL = 'http://www.cnthc.cn/xxxx.html?from=share'
const SHARE_TEXT = '辅导作业不吼了！这个免费平台融入新加坡CPA教学法+艾宾浩斯遗忘曲线，1-6年级语数外全覆盖，不注册不收费无广告！'

function openShareModal() {
  showShareModal.value = true
}

function doShare() {
  const fullText = `${SHARE_TEXT}\n${SHARE_URL}`
  
  // 始终先复制到剪贴板
  if (navigator.clipboard) {
    navigator.clipboard.writeText(fullText).then(() => {
      shareToastMsg.value = '✅ 已复制！快去粘贴发给好友吧'
    }).catch(() => {
      // 剪贴板失败，尝试 Web Share API
      if (navigator.share) {
        navigator.share({
          title: '老田和小甜甜的游戏屋',
          text: fullText,
          url: SHARE_URL,
        }).then(() => {
          shareToastMsg.value = '分享成功！'
        }).catch(() => {
          shareToastMsg.value = '请手动复制：' + fullText
        })
      } else {
        shareToastMsg.value = '请手动复制：' + fullText
      }
    })
  } else {
    shareToastMsg.value = '请手动复制：' + fullText
  }
  handleShareSuccess()
}

function handleShareSuccess() {
  if (!hasSharedBefore.value) {
    // 首次分享：奖励20星星
    rewardStore.addStars(20, '首次分享奖励', 'achievement')
    shareToastMsg.value = '分享成功！获得 20 颗⭐奖励！'
    hasSharedBefore.value = true
    localStorage.setItem('hasShared', 'true')
  } else {
    // 再次分享：奖励5星星（每天限1次）
    const today = new Date().toDateString()
    const lastShareDate = localStorage.getItem('lastShareDate')
    if (lastShareDate !== today) {
      rewardStore.addStars(5, '每日分享奖励', 'achievement')
      shareToastMsg.value = '分享成功！获得 5 颗⭐奖励！'
      localStorage.setItem('lastShareDate', today)
    } else {
      shareToastMsg.value = '今天已分享过啦，明天再来吧！'
    }
  }
  showShareToast.value = true
  showShareModal.value = false
  setTimeout(() => { showShareToast.value = false }, 3000)
}

onMounted(() => {
  bounceIn('.area-card-0', 0)
  bounceIn('.area-card-1', 0.15)
  bounceIn('.area-card-2', 0.3)
  if (showMarketing.value) {
    revealText('.marketing-hero', 0.2)
    revealText('.marketing-stats', 0.5)
    revealText('.marketing-points', 0.8)
  }
})
</script>

<template>
  <div class="min-h-screen">
    <!-- ========== 多屏营销展示（首页固定内容，始终可见） ========== -->
    <div class="bg-slate-950">

      <!-- ===== 第一屏：核心钩子（深色渐变+光效） ===== -->
      <div class="min-h-screen relative overflow-hidden flex flex-col justify-center"
        style="background: radial-gradient(ellipse at top, #1e1b4b 0%, #0f172a 50%, #020617 100%)">
        <!-- 光效装饰 -->
        <div class="absolute top-10 left-10 w-40 h-40 bg-indigo-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-56 h-56 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
        <div class="absolute top-1/3 right-1/4 w-28 h-28 bg-emerald-400/10 rounded-full blur-2xl"></div>

        <div class="relative z-10 max-w-2xl mx-auto px-5 py-8">
          <!-- 顶部信任条 -->
          <div class="text-center mb-6">
            <div class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-4 py-1.5 backdrop-blur">
              <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <p class="text-emerald-300 text-xs font-medium">永久免费 · 不收集隐私 · 点开即用</p>
            </div>
          </div>

          <!-- 主标题 -->
          <div class="text-center mb-8 marketing-hero">
            <h1 class="font-black text-4xl leading-tight mb-4">
              <span class="text-white">辅导作业</span><span class="text-red-400">不用吼</span><span class="text-white">了</span>
            </h1>
            <div class="inline-block bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text">
              <p class="text-2xl font-black text-transparent">全球好方法，做成免费课程</p>
            </div>
            <p class="text-slate-400 text-sm mt-3">新加坡CPA · 间隔重复抗遗忘 · 家长照着念就能教</p>
          </div>

          <!-- 5个核心钩子 - 左边框卡片 -->
          <div class="space-y-2 mb-8">
            <div v-for="hook in coreHooks" :key="hook.title"
              class="rounded-xl px-4 py-3 flex items-center gap-3 border-l-2 transition-all hover:translate-x-1"
              :class="hook.highlight
                ? 'bg-gradient-to-r from-yellow-500/15 to-transparent border-yellow-400'
                : 'bg-white/5 border-slate-600'">
              <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl flex-shrink-0">
                {{ hook.icon }}
              </div>
              <div class="flex-1 min-w-0">
                <span class="text-white font-bold text-sm block">{{ hook.title }}</span>
                <span class="text-slate-400 text-xs">{{ hook.desc }}</span>
              </div>
              <span v-if="hook.highlight"
                class="text-[10px] font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full flex-shrink-0">核心</span>
            </div>
          </div>

          <!-- CTA -->
          <button @click="startLearning"
            class="w-full py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 rounded-2xl font-black text-lg shadow-2xl shadow-yellow-500/20 hover:scale-[1.02] transition-transform active:scale-95 mb-2">
            🚀 免费开始学习
          </button>
          <p class="text-center text-slate-500 text-xs mb-4">无需注册 · 永久免费 · 离线可用</p>

          <!-- 向下滚动提示 -->
          <div class="text-center">
            <p class="text-slate-600 text-xs animate-bounce">↓ 向下滚动查看全部优点</p>
          </div>
        </div>
      </div>

      <!-- ===== 第二屏：全部优点（深蓝底+彩色Tab） ===== -->
      <div class="min-h-screen relative py-8" style="background: linear-gradient(180deg, #020617 0%, #0c1a3e 50%, #020617 100%)">
        <div class="absolute top-0 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 max-w-2xl mx-auto px-5">
          <div class="text-center mb-6">
            <div class="inline-block bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1 mb-3">
              <span class="text-blue-300 text-xs font-bold">📋 全景展示</span>
            </div>
            <h2 class="text-white font-black text-2xl mb-1">全部优点一览</h2>
            <p class="text-slate-400 text-sm">5大维度，覆盖孩子学习的每个环节</p>
          </div>

          <!-- Tab切换 -->
          <div class="flex gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-hide">
            <button v-for="(cat, i) in advantageCategories" :key="cat.tab"
              @click="currentAdvantageTab = i"
              class="flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap"
              :class="currentAdvantageTab === i
                ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                : 'bg-white/5 text-slate-400'">
              {{ cat.icon }} {{ cat.tab }}
            </button>
          </div>

          <!-- 当前分类内容 -->
          <div class="bg-white/5 rounded-2xl p-4 mb-4 border border-white/5">
            <div v-for="(item, i) in advantageCategories[currentAdvantageTab].items" :key="i"
              class="flex items-start gap-2 py-2 border-b border-white/5 last:border-0">
              <span class="text-emerald-400 text-sm flex-shrink-0 mt-0.5">✓</span>
              <span class="text-slate-200 text-sm">{{ item }}</span>
            </div>
          </div>

          <!-- 数据统计 -->
          <div class="grid grid-cols-4 gap-2 mb-6">
            <div v-for="stat in stats" :key="stat.label"
              class="bg-gradient-to-b from-white/10 to-white/5 rounded-xl py-3 text-center border border-white/5">
              <div class="text-xl font-black bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">{{ stat.value }}</div>
              <div class="text-slate-500 text-[10px] mt-0.5">{{ stat.label }}</div>
            </div>
          </div>

          <!-- CTA -->
          <button @click="startLearning"
            class="w-full py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black text-base shadow-2xl shadow-blue-500/20 hover:scale-[1.02] transition-transform active:scale-95 mb-3">
            🚀 马上体验
          </button>
          <p class="text-center text-slate-600 text-xs animate-bounce">↓ 看看我们用了哪些全球顶尖教学法</p>
        </div>
      </div>

      <!-- ===== 第三屏：全球14种教学方法（核心营销屏） ===== -->
      <div id="teaching-methods" class="min-h-screen relative py-8"
        style="background: linear-gradient(180deg, #020617 0%, #1a0a2e 30%, #16213e 60%, #020617 100%)">
        <div class="absolute top-10 left-1/4 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 max-w-2xl mx-auto px-5">
          <div class="text-center mb-6">
            <div class="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-3">
              <span class="text-yellow-300 text-xs font-bold">🏆 核心竞争力</span>
            </div>
            <h2 class="text-white font-black text-2xl mb-1">
              全球<span class="text-yellow-300">14种</span>优秀教学法
            </h2>
            <p class="text-slate-400 text-sm">每种方法都有3条课程中的实际应用证据</p>
          </div>

          <!-- 14种方法 - 双列网格 -->
          <div class="grid grid-cols-1 gap-2.5 mb-6">
            <div v-for="(method, i) in teachingMethods" :key="method.name"
              class="rounded-2xl p-3.5 border transition-all hover:scale-[1.01]"
              :class="i % 2 === 0
                ? 'bg-white/5 border-white/10 hover:border-white/20'
                : 'bg-white/[0.03] border-white/5 hover:border-white/15'">
              <!-- 方法标题行 -->
              <div class="flex items-center gap-3 mb-2">
                <div class="w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center text-lg flex-shrink-0 shadow-lg"
                  :class="method.color">
                  {{ method.icon }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-white font-bold text-xs">{{ method.name }}</span>
                    <span class="text-slate-600 text-[9px]">#{{ i + 1 }}</span>
                  </div>
                  <p class="text-slate-500 text-[10px] leading-snug truncate">{{ method.principle }}</p>
                </div>
              </div>
              <!-- 应用证据 - 紧凑布局 -->
              <div class="ml-12 space-y-0.5">
                <div v-for="(ev, j) in method.evidence" :key="j"
                  class="flex items-start gap-1 text-slate-400 text-[10px] leading-snug">
                  <span class="text-emerald-400 flex-shrink-0">▸</span>
                  <span>{{ ev }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 对比改进前 vs 改进后 -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <div class="bg-red-500/5 border border-red-500/15 rounded-2xl p-4 text-center">
              <p class="text-slate-500 text-[10px] mb-1">改进前</p>
              <p class="text-red-400 text-3xl font-black">2.6<span class="text-sm">/5</span></p>
              <p class="text-slate-600 text-[9px] mt-1">标签多实质少</p>
            </div>
            <div class="bg-emerald-500/5 border border-emerald-500/15 rounded-2xl p-4 text-center">
              <p class="text-slate-500 text-[10px] mb-1">改进后</p>
              <p class="text-emerald-400 text-3xl font-black">3.8<span class="text-sm">/5</span></p>
              <p class="text-slate-600 text-[9px] mt-1">14种方法全面落地</p>
            </div>
          </div>

          <!-- CTA -->
          <button @click="startLearning"
            class="w-full py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 rounded-2xl font-black text-base shadow-2xl shadow-yellow-500/20 hover:scale-[1.02] transition-transform active:scale-95 mb-3">
            🚀 体验这些方法
          </button>
          <p class="text-center text-slate-600 text-xs animate-bounce">↓ 继续看家长痛点</p>
        </div>
      </div>

      <!-- ===== 第四屏：家长痛点（红色底→绿色方案） ===== -->
      <div class="min-h-screen relative py-8"
        style="background: linear-gradient(180deg, #020617 0%, #1a0510 50%, #020617 100%)">
        <div class="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 max-w-2xl mx-auto px-5">
          <div class="text-center mb-6">
            <div class="inline-block bg-red-500/10 border border-red-400/20 rounded-full px-4 py-1 mb-3">
              <span class="text-red-300 text-xs font-bold">💔 家长心声</span>
            </div>
            <h2 class="text-white font-black text-2xl mb-1">这些困扰，你也有吗？</h2>
            <p class="text-slate-400 text-sm">每个痛点背后，都有对应的解决方案</p>
          </div>

          <!-- 痛点-方案对照 -->
          <div class="space-y-2.5 mb-6">
            <div v-for="pp in painPoints" :key="pp.pain"
              class="rounded-xl overflow-hidden border border-white/5">
              <!-- 痛点 -->
              <div class="bg-red-500/5 px-4 py-2.5 flex items-center gap-2">
                <span class="text-lg flex-shrink-0">{{ pp.painIcon }}</span>
                <span class="text-slate-500 text-xs line-through">{{ pp.pain }}</span>
              </div>
              <!-- 方案 -->
              <div class="bg-emerald-500/5 px-4 py-2.5 flex items-center gap-2 border-t border-emerald-500/10">
                <span class="text-lg flex-shrink-0">{{ pp.solutionIcon }}</span>
                <span class="text-emerald-300 text-xs font-medium">{{ pp.solution }}</span>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <button @click="startLearning"
            class="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-black text-base shadow-2xl shadow-emerald-500/20 hover:scale-[1.02] transition-transform active:scale-95 mb-3">
            🚀 解决我的困扰
          </button>
          <p class="text-center text-slate-600 text-xs animate-bounce">↓ 为什么值得信任</p>
        </div>
      </div>

      <!-- ===== 第五屏：信任建立 ===== -->
      <div class="min-h-screen relative py-8 pb-16"
        style="background: linear-gradient(180deg, #020617 0%, #0a1929 50%, #020617 100%)">
        <div class="absolute top-0 left-1/3 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 max-w-2xl mx-auto px-5">
          <div class="text-center mb-6">
            <div class="inline-block bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1 mb-3">
              <span class="text-green-300 text-xs font-bold">🛡️ 家长放心</span>
            </div>
            <h2 class="text-white font-black text-2xl mb-1">为什么值得信任</h2>
            <p class="text-slate-400 text-sm">4个承诺，让家长放心</p>
          </div>

          <div class="grid grid-cols-2 gap-2.5 mb-6">
            <div v-for="trust in trustSignals" :key="trust.title"
              class="bg-white/5 rounded-2xl p-3.5 border border-white/5 hover:border-white/10 transition-all text-center">
              <div class="text-2xl mb-1.5">{{ trust.icon }}</div>
              <p class="text-white font-bold text-xs mb-0.5">{{ trust.title }}</p>
              <p class="text-slate-500 text-[10px] leading-snug">{{ trust.desc }}</p>
            </div>
          </div>

          <!-- 创始人故事 -->
          <div class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-5 mb-6 text-center border border-amber-400/10">
            <p class="text-slate-200 text-sm leading-relaxed">
              💡 这是一位父亲用AI为孩子制作的学习工具<br/>
              <span class="text-slate-400 text-xs">初衷是让每个家庭都能用上全球最有效的方法</span><br/>
              <span class="text-yellow-300 text-xs font-medium">觉得好用，分享给其他家长就是最好的支持</span>
            </p>
          </div>

          <!-- 最终CTA -->
          <button @click="startLearning"
            class="w-full py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 rounded-2xl font-black text-lg shadow-2xl shadow-yellow-500/20 hover:scale-[1.02] transition-transform active:scale-95 mb-2">
            🚀 立即开始，完全免费
          </button>
          <p class="text-center text-slate-500 text-xs mb-3">无需注册 · 永久免费 · 数据不外传 · 离线可用</p>
          <p class="text-center text-slate-700 text-[10px]">
            线下辅导单科年费数千元 · 这里用同样的方法，完全免费
          </p>
        </div>
      </div>
    </div>

    <!-- ========== 常规首页（学习区域） ========== -->
    <div id="learning-section" class="min-h-screen p-4 pt-6">
      <!-- 顶部欢迎区 -->
      <div class="flex items-center justify-between mb-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-title text-xl text-gray-800">老田和小甜甜的游戏屋</h1>
          </div>
          <div class="flex items-center gap-2 mt-1">
            <p class="text-sm text-gray-500">
              <template v-if="settingsStore.childName">
                <span class="font-medium text-primary-500">{{ settingsStore.childName }}</span>，今天也要加油哦！✨
              </template>
              <template v-else>
                今天也要加油哦！✨
              </template>
            </p>
            <button @click="openNameEdit" class="text-xs text-gray-400 hover:text-primary-500 transition-colors" title="设置孩子名字">
              <Pencil class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1 bg-yellow-50 px-2.5 py-1.5 rounded-full">
            <Star class="w-4 h-4 text-star-gold fill-star-gold" />
            <span class="text-sm font-medium text-yellow-700">{{ rewardStore.stars }}</span>
          </div>
          <div class="flex items-center gap-1 bg-blue-50 px-2.5 py-1.5 rounded-full">
            <Diamond class="w-4 h-4 text-blue-500" />
            <span class="text-sm font-medium text-blue-700">{{ rewardStore.diamonds }}</span>
          </div>
          <!-- 分享按钮 -->
          <button @click="openShareModal" class="flex items-center gap-1 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-2.5 py-1.5 rounded-full text-xs font-medium hover:scale-105 transition-transform" title="分享给好友得星星">
            <Share2 class="w-3.5 h-3.5" />
            <span class="hidden sm:inline">分享得⭐</span>
          </button>
        </div>
      </div>

      <!-- 名字编辑弹窗 -->
      <div v-if="showNameEdit" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div class="bg-white rounded-3xl p-6 w-80 mx-4 shadow-xl">
          <div class="flex items-center gap-2 mb-4">
            <User class="w-5 h-5 text-primary-500" />
            <h3 class="font-title text-lg">设置孩子名字</h3>
          </div>
          <input v-model="nameInput" placeholder="输入孩子的名字..." class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 outline-none text-lg mb-4" @keyup.enter="saveName" autofocus />
          <div class="flex gap-2">
            <button @click="showNameEdit = false" class="btn-secondary flex-1">取消</button>
            <button @click="saveName" class="btn-primary flex-1">保存</button>
          </div>
        </div>
      </div>

      <!-- 签到区 -->
      <div class="card mb-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
            <Flame class="w-6 h-6 text-white" />
          </div>
          <div>
            <p class="font-title text-lg">连续学习 {{ progressStore.currentStreak }} 天</p>
            <p class="text-xs text-gray-500">坚持就是胜利！</p>
          </div>
        </div>
        <button @click="handleCheckIn" :disabled="checkedIn" class="btn-primary text-sm flex items-center gap-1" :class="{ 'opacity-50 cursor-not-allowed': checkedIn }">
          <CheckCircle class="w-4 h-4" />
          {{ checkedIn ? '已签到' : '签到+5⭐' }}
        </button>
      </div>

      <!-- 签到动画 -->
      <div v-if="showCheckInAnim" class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div class="text-6xl animate-bounce">⭐+5</div>
      </div>

      <!-- 学习冒险地图 - 三大区域 -->
      <h2 class="font-title text-xl mb-3 text-gray-800">🗺️ 探索游戏屋</h2>
      <div class="grid grid-cols-1 gap-3 mb-4">
        <button v-for="(area, index) in areas" :key="area.subject" @click="goToSubject(area.subject)" :class="`area-card-${index}`" class="relative overflow-hidden rounded-3xl p-5 text-white shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]">
          <div :class="`absolute inset-0 bg-gradient-to-br ${area.color}`" />
          <div class="relative z-10 flex items-center justify-between">
            <div class="text-left">
              <p class="text-3xl mb-1">{{ area.icon }}</p>
              <p class="font-title text-xl">{{ area.name }}</p>
              <p class="text-sm opacity-80">{{ area.desc }}</p>
              <span class="inline-block mt-1.5 bg-white/20 backdrop-blur rounded-full px-2 py-0.5 text-[10px] font-medium">{{ area.method }}</span>
            </div>
            <Sparkles class="w-8 h-8 opacity-60" />
          </div>
        </button>
      </div>

      <!-- 今日任务 -->
      <h2 class="font-title text-xl mb-3 text-gray-800">📋 今日任务</h2>
      <div class="space-y-3 mb-4">
        <div v-for="task in todayTasks" :key="task.subject" @click="goToSubject(task.subject)" class="card flex items-center gap-4 cursor-pointer">
          <div :class="task.color" class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg">
            {{ task.icon }}
          </div>
          <div class="flex-1">
            <p class="font-medium">{{ task.name }}练习</p>
            <p class="text-xs text-gray-500">点击开始学习</p>
          </div>
          <div class="text-primary-500 text-sm font-medium">GO →</div>
        </div>
      </div>

      <!-- 底部软营销 -->
      <div class="card bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 mb-4">
        <div class="flex items-center gap-3">
          <div class="text-3xl">🏆</div>
          <div class="flex-1">
            <p class="font-medium text-sm text-gray-700">已陪伴孩子完成 {{ progressStore.totalCompleted }} 节课</p>
            <p class="text-xs text-gray-400">用全球验证的方法学习，让每一分钟都不白费。觉得好用？分享给其他家长吧 👆</p>
          </div>
        </div>
      </div>

      <!-- 学习科学小知识（软营销） -->
      <div class="card bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 mb-4">
        <div class="flex items-start gap-3">
          <div class="text-2xl flex-shrink-0">💡</div>
          <div>
            <p class="font-medium text-sm text-gray-700">学习科学小知识</p>
            <p class="text-xs text-gray-500 mt-0.5">艾宾浩斯遗忘曲线：学完20分钟后遗忘42%，1天后遗忘66%。本系统的智能错题本会按遗忘曲线自动推送复习，让记忆更牢固。</p>
          </div>
        </div>
      </div>

      <!-- 分享弹窗 -->
      <div v-if="showShareModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="showShareModal = false">
        <div class="bg-white rounded-3xl p-6 max-w-sm w-full mx-4 shadow-2xl">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-title text-lg text-gray-800 flex items-center gap-2">
              <Gift class="w-5 h-5 text-pink-500" /> 分享得星星
            </h3>
            <button @click="showShareModal = false" class="text-gray-400 hover:text-gray-600">
              <X class="w-5 h-5" />
            </button>
          </div>
          <div class="text-center py-2">
            <div class="text-5xl mb-3">{{ hasSharedBefore ? '🌟' : '🎉' }}</div>
            <p class="text-gray-600 mb-2">{{ hasSharedBefore ? '继续分享给更多好友！' : '首次分享获得 20 颗⭐！' }}</p>
            <p class="text-xs text-gray-400 mb-4">{{ hasSharedBefore ? '每日分享再得 5 颗⭐' : '之后每天分享还能再得 5 颗⭐' }}</p>
            
            <!-- 分享文案展示 -->
            <div class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 mb-4 text-left border border-pink-100">
              <p class="text-[10px] text-gray-400 mb-2">👇 以下内容将复制到剪贴板</p>
              <p class="text-sm text-gray-700 font-medium leading-relaxed mb-2">{{ SHARE_TEXT }}</p>
              <p class="text-xs text-blue-500 break-all">{{ SHARE_URL }}</p>
            </div>
            
            <button @click="doShare" class="w-full py-3.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2">
              <Share2 class="w-5 h-5" /> 一键复制分享文案
            </button>
            <p class="text-xs text-gray-400 mt-3">复制后可粘贴到微信、QQ、朋友圈等任意位置</p>
          </div>
        </div>
      </div>

      <!-- 分享成功提示 -->
      <div v-if="showShareToast" class="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
        <CheckCircle class="w-5 h-5" />
        <span class="font-medium">{{ shareToastMsg }}</span>
      </div>
    </div>
  </div>
</template>
