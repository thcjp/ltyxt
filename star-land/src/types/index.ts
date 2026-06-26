// 学科类型
export type Subject = 'math' | 'chinese' | 'english'

// 年级类型
export type Grade = 1 | 2 | 3 | 4 | 5 | 6

// 星级评价
export type StarLevel = 0 | 1 | 2 | 3

// 课时状态
export type LessonStatus = 'locked' | 'in_progress' | 'completed'

// 课程元数据
export interface CourseMeta {
  subject: Subject
  grade: Grade
  title: string
  subtitle: string
  icon: string
  color: string
  totalUnits: number
}

// 单元数据
export interface Unit {
  id: string
  title: string
  subtitle: string
  order: number
  lessons: Lesson[]
}

// 课文内容块
export interface ContentBlock {
  type: 'text' | 'example' | 'poem' | 'dialogue' | 'formula' | 'tip' | 'image' | 'animation'
  content: string
  label?: string
  animationType?: 'reveal' | 'bounce' | 'typewriter' | 'counter' | 'cpaTransition' | 'float' | 'pulse' | 'sceneBuild' | 'makeTen' | 'verticalCalc' | 'shapeDraw' | 'numberCount' | 'merge' | 'separate' | 'compare' | 'cardReveal' | 'timeline' | 'pinyin' | 'colorMix' | 'sequence'
  // 结构化动画配置（当type为animation时使用）
  animationConfig?: AnimationSceneConfig
}

// ===== 动画引擎类型系统 =====

// 动画场景类型：覆盖所有课程中出现的动画模式
export type AnimationSceneType =
  | 'numberCount'      // 数数：数字依次出现，配合物品计数
  | 'merge'            // 合并：两组物品合到一起（加法）
  | 'separate'         // 分离：从一组物品中拿走一些（减法）
  | 'pinyin'           // 拼音：字母出现+口型/形状变化
  | 'colorMix'         // 颜色混合：两种颜色融合成新颜色
  | 'sequence'         // 排序：物品按顺序排列
  | 'sceneBuild'       // 场景构建：场景元素逐步出现
  | 'cpaTransition'    // CPA过渡：实物→图示→符号三阶段
  | 'compare'          // 比较：两组物品一一对应比较
  | 'shapeDraw'        // 图形绘制：几何图形逐步画出
  | 'cardReveal'       // 卡片揭示：翻转/弹出揭示内容
  | 'timeline'         // 时间线：步骤/事件按时间顺序出现
  | 'verticalCalc'     // 竖式计算：逐位计算，进位/借位可视化
  | 'makeTen'          // 凑十法：拆分数字→凑十→加剩余

// 动画元素
export interface AnimationElement {
  id?: string
  // 显示内容
  text?: string           // 文字内容
  emoji?: string          // emoji图标
  svgShape?: string       // SVG形状名称（circle/rect/triangle/star/arrow）
  // 位置与样式
  x?: number              // 相对位置百分比 0-100
  y?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string          // CSS颜色
  // 动画参数
  delay?: number          // 出现延迟（秒）
  animation?: 'bounceIn' | 'fadeIn' | 'slideIn' | 'scaleIn' | 'drawIn' | 'flipIn' | 'popIn'
  // 交互
  clickable?: boolean
  ttsText?: string        // 点击或出现时朗读的文字
  // 分组（用于merge/separate等分组动画）
  group?: 'A' | 'B' | 'result'
}

// 动画步骤（用于分步动画）
export interface AnimationStep {
  id?: string             // 步骤唯一标识
  description?: string    // 步骤描述
  text?: string           // 步骤文字（与description二选一）
  emoji?: string          // 步骤图标
  ttsNarration?: string   // TTS旁白文字
  ttsText?: string        // TTS文字（兼容旧数据，与ttsNarration等效）
  elements?: AnimationElement[]
  duration?: number       // 步骤持续时间（秒）
}

// 动画场景配置
export interface AnimationSceneConfig {
  sceneType: AnimationSceneType
  title?: string          // 动画标题
  // 数数动画配置
  countConfig?: {
    from: number
    to: number
    itemEmoji: string     // 计数物品emoji
    direction?: 'forward' | 'backward' | 'skip'
    skipBy?: number       // 跳数间隔
  }
  // 合并/分离动画配置
  mergeConfig?: {
    leftCount: number
    leftEmoji: string
    rightCount: number
    rightEmoji: string
    operator: '+' | '-' | '×' | '÷' | string
    resultCount: number
    resultEmoji?: string
  }
  // 拼音动画配置
  pinyinConfig?: {
    letters: string[]     // 要展示的拼音字母
    mouthShapes?: string[]  // 口型描述
    keywords?: string[]   // 组词示例
  }
  // 颜色混合配置
  colorMixConfig?: {
    color1: string        // 颜色1名称
    color1Hex: string     // 颜色1十六进制
    color2: string
    color2Hex: string
    resultColor: string
    resultHex: string
  }
  // 排序动画配置
  sequenceConfig?: {
    items: string[]       // 要排序的项
    order?: 'asc' | 'desc' | 'custom'
    itemType?: 'number' | 'letter' | 'word'
  }
  // 比较动画配置
  compareConfig?: {
    leftItems: string[]   // 左边物品
    rightItems: string[]  // 右边物品
    result: 'left' | 'right' | 'equal' | 'more' | 'less' | 'close' | string
    resultText: string
  }
  // 场景构建配置
  sceneBuildConfig?: {
    sceneName?: string     // 场景名称
    elements: AnimationElement[]
  }
  // CPA过渡配置
  cpaConfig?: {
    concrete: { text: string; emoji: string }
    pictorial: { text: string; emoji: string }
    abstract: { text: string; emoji: string }
  }
  // 图形绘制配置
  shapeDrawConfig?: {
    shape: string         // 形状名称
    vertices?: number[][] // 顶点坐标
    labels?: string[]     // 标注文字
  }
  // 卡片揭示配置
  cardRevealConfig?: {
    cards: { id?: string; front: string; back: string; ttsText: string }[]
  }
  // 时间线配置
  timelineConfig?: {
    steps: AnimationStep[]
  }
  // 竖式计算配置
  verticalCalcConfig?: {
    num1: number           // 第一个数
    num2: number           // 第二个数
    operator: '+' | '-' | '×'  // 运算符
    result: number         // 结果
    carry?: number[]       // 进位（从高位到低位，对应显示位置从左到右）
    borrow?: number[]      // 借位（从高位到低位，对应显示位置从左到右）
    steps?: {              // 计算步骤（可选，不提供则自动推导）
      text: string         // 步骤描述
      highlight?: string   // 高亮的位（'ones'|'tens'|'hundreds'）
    }[]
  }
  // 凑十法配置
  makeTenConfig?: {
    bigNum: number         // 大数
    smallNum: number       // 小数
    splitTo: number        // 小数拆成几和几（凑十的部分）
    splitLeft: number      // 拆分后凑十的部分
    splitRight: number     // 拆分后剩余的部分
    tenResult: number      // 凑十结果（通常是10）
    finalResult: number    // 最终结果
  }
  // 通用TTS旁白
  ttsNarration?: string   // 整体旁白
  // 通用步骤（用于复杂动画）
  steps?: AnimationStep[]
}

// 视频资源平台
export type VideoPlatform = 'national_edu' | 'bilibili' | 'youtube' | 'other'

// 视频资源（辅助学习资料）
export interface VideoResource {
  id: string                     // 资源ID
  title: string                  // 视频标题
  platform: VideoPlatform        // 来源平台
  url: string                    // 视频直链（可能失效，优先使用 searchUrl）
  searchUrl: string              // 搜索链接（稳定备选）
  keywords: string[]             // 搜索关键词
  duration?: string              // 视频时长
  matchScore: number             // 匹配度 1-5（5为最佳）
  note?: string                  // 说明（如：官方课程/UP主讲解等）
}

// 课时数据
export interface Lesson {
  id: string
  title: string
  order: number
  teachingMethod: string
  // 课文内容（核心学习材料）
  content: ContentBlock[]
  // 教学闭环
  iDo: string
  weDo: string
  youDo: string
  parentTips: string
  funElement: string
  gsapAnimations: string[]
  images: string[]
  practiceQuestions: PracticeQuestion[]
  // 辅助学习视频资源（全网抓取）
  videoResources?: VideoResource[]
}

// 练习题
export interface PracticeQuestion {
  id: string
  type: 'choice' | 'fill' | 'drag' | 'flashcard'
  question: string
  options?: string[]
  answer: string
  hint: string
  explanation: string
  // 可接受的备选答案列表（用于填空题多答案场景）
  // 用户输入匹配 answer 或 acceptableAnswers 中任意一个即为正确
  acceptableAnswers?: string[]
}

// 学习进度
export interface LessonProgress {
  lessonId: string
  status: LessonStatus
  starLevel: StarLevel
  accuracy: number
  completedAt: string | null
  attempts: number
}

// 奖励记录
export interface RewardRecord {
  type: 'star' | 'diamond' | 'badge'
  id: string
  name: string
  description: string
  earnedAt: string
  icon: string
}

// 星星变动记录
export interface StarHistoryRecord {
  id: string
  amount: number           // 正数=增加，负数=扣除
  reason: string           // 变动原因
  source: 'lesson' | 'checkin' | 'parent' | 'redeem' | 'achievement'  // 来源
  timestamp: string        // ISO 时间戳
}

// 钻石变动记录
export interface DiamondHistoryRecord {
  id: string
  amount: number           // 正数=增加，负数=扣除
  reason: string           // 变动原因
  source: 'lesson' | 'achievement' | 'parent' | 'redeem'  // 来源
  timestamp: string        // ISO 时间戳
}

// 复习项
export interface ReviewItem {
  id: string
  lessonId: string
  subject: Subject
  question: string
  answer: string
  nextReview: string
  interval: number
  easeFactor: number
  repetitions: number
}

// 每日日志
export interface DailyLog {
  date: string
  lessonsCompleted: number
  starsEarned: number
  accuracy: number
  subjectsStudied: Subject[]
  streakDays: number
}

// 成就
export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt: string | null
  condition: string
}

// 心愿商品
export interface WishItem {
  id: string
  name: string
  description: string
  starCost: number
  icon: string
  stock: number            // 库存: -1=不限, 0=已兑完, >0=可兑换数量
  purchased: boolean       // 保留兼容旧数据，新逻辑用 stock 判断
  custom?: boolean         // 是否家长自定义（true=家长新增，false=系统预置）
}

// 钻石兑换商品（家长可修改/新增）
export interface DiamondItem {
  id: string
  name: string
  description: string
  diamondCost: number
  icon: string
  stock: number            // 库存: -1=不限, 0=已兑完, >0=可兑换数量
  purchased: boolean       // 保留兼容旧数据，新逻辑用 stock 判断
  custom?: boolean         // 是否家长自定义（true=家长新增，false=系统预置）
}

// 错题记录
export interface WrongQuestion {
  id: string
  questionId: string
  subject: Subject
  grade: number
  unitId: string
  lessonId: string
  questionType: PracticeQuestion['type']
  question: string
  correctAnswer: string
  userAnswer: string
  wrongAt: string           // 做错时间
  reviewCount: number       // 已复习次数
  lastReviewAt: string | null // 上次复习时间
  mastered: boolean         // 是否已掌握
  explanation: string       // 解题说明
  knowledgeLinks?: KnowledgeLink[]  // 知识点溯源链接
}

// 知识点溯源链接
export interface KnowledgeLink {
  knowledgeName: string     // 知识点名称
  courseName: string        // 课程名称（如"数学-20以内进位加法"）
  chapterId: string         // 章节ID（如"m1u5l1"）
  lessonTitle: string       // 课时标题
}

// 单元测试结果
export interface UnitTestResult {
  id: string
  subject: Subject
  grade: number
  unitId: string
  totalQuestions: number
  correctCount: number
  accuracy: number
  starLevel: StarLevel
  completedAt: string
  wrongQuestionIds: string[]
}

// 学习日志条目
export interface StudyLogEntry {
  id: string
  date: string
  subject: Subject
  grade: number
  unitId: string
  lessonId: string
  lessonTitle: string
  accuracy: number
  starLevel: StarLevel
  duration: number          // 学习时长（秒）
  wrongCount: number
  correctCount: number
  timestamp: string
}

// 家长模式
export type ParentMode = 'split' | 'independent' | 'cast'

// 用户设置
export interface UserSettings {
  childName: string          // 孩子名字
  parentMode: ParentMode
  soundEnabled: boolean
  musicEnabled: boolean
  dailyGoal: number
  speechRate: number         // 统一语音速度 (0.5-1.5, 0表示使用默认值)
  parentPin: string          // 家长PIN码（4位数字，空表示未设置）
}
