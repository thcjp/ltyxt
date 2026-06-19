# 老甜甜和小甜甜的游戏屋 — 项目设计文档

> 面向小学一至三年级（语数英三科）的离线补习学习应用，以游戏化、动画化、家长可参与为核心特色。

---

## 一、项目定位与价值

### 1.1 项目目标
为小学低年级（1-3 年级）学生提供一套**完整、离线可用、家长可参与**的语数英三科补习学习系统，解决以下痛点：

- **教育资源不均衡**：偏远地区或家庭无法获得优质补习资源
- **家长辅导困难**：家长不知道怎么教、教什么、孩子学到哪
- **孩子学习兴趣低**：传统补习枯燥，孩子注意力难以集中
- **学习数据缺失**：缺乏系统化的学习进度跟踪与薄弱点分析

### 1.2 核心价值
- **离线运行**：打包为 Windows 桌面应用，无需联网即可使用，适合任何环境
- **游戏化学习**：星星货币、钻石奖励、成就系统、心愿商店，让孩子在游戏中学习
- **CPA 教学法**：每节课遵循 Concrete（实物）→ Pictorial（图示）→ Abstract（符号）三阶段，符合低年级认知规律
- **家长可参与**：家长中心可查看进度、调整语音速度、手动加分、设置心愿
- **完整课程体系**：3 学科 × 3 年级 × 8 单元 × 5 课时 = **360 节完整课时**，**2520 道练习题**

---

## 二、技术架构

### 2.1 技术栈

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| 前端框架 | Vue 3.4 + TypeScript 5.3 | 组合式 API + `<script setup>` |
| 构建工具 | Vite 5.0 | 极速 HMR 与构建 |
| 状态管理 | Pinia 2.1 | 轻量、类型友好 |
| 路由 | Vue Router 4.2 | History 模式 |
| 动画引擎 | GSAP 3.12 | 专业级 Web 动画 |
| 样式 | Tailwind CSS 3.4 | 原子化 CSS + 自定义主题 |
| 图标 | Lucide Vue Next | 现代化 SVG 图标库 |
| 桌面打包 | Electron 42 + electron-builder 26 | 跨平台桌面应用 |
| 移动端 | Capacitor 8（Android） | 可选的 Android 打包 |

### 2.2 目录结构

```
star-land/
├── electron/
│   └── main.cjs              # Electron 主进程
├── src/
│   ├── App.vue               # 根组件（底部导航 + 路由出口）
│   ├── main.ts               # 应用入口
│   ├── style.css             # 全局样式 + Tailwind
│   ├── router/index.ts       # 路由配置（9 个页面）
│   ├── types/index.ts        # 全局 TypeScript 类型定义
│   ├── stores/               # Pinia 状态管理
│   │   ├── course.ts         # 课程数据 store
│   │   ├── progress.ts       # 学习进度 store（localStorage 持久化）
│   │   ├── reward.ts         # 奖励/成就/心愿 store（localStorage 持久化）
│   │   ├── settings.ts       # 用户设置 store（含语音速度）
│   │   └── study.ts          # 学习日志 store
│   ├── composables/          # 组合式函数
│   │   ├── useGsap.ts        # GSAP 动画封装
│   │   ├── useSpeech.ts      # TTS 语音合成（含拼音转中文）
│   │   ├── useCourseProgress.ts # 课程进度计算
│   │   ├── useRewardSystem.ts   # 奖励系统逻辑
│   │   └── useTheme.ts       # 主题管理
│   ├── components/animation/ # 动画组件
│   │   ├── ContentBlockRenderer.vue # 内容块渲染器（分发到具体动画组件）
│   │   ├── LessonAnimation.vue      # 通用动画场景组件
│   │   ├── CPAStage.vue             # CPA 教学法三阶段动画
│   │   ├── CardFlip.vue             # 翻转卡片
│   │   ├── CharReveal.vue           # 汉字逐字揭示
│   │   ├── NumberCounter.vue        # 数字滚动计数
│   │   ├── DragQuestion.vue         # 拖拽题目
│   │   └── SpeechButton.vue         # 语音朗读按钮
│   ├── data/                 # 课程数据（核心内容）
│   │   ├── math/             # 数学：3 年级 × 40 课时 = 120 课时
│   │   ├── chinese/          # 语文：3 年级 × 40 课时 = 120 课时
│   │   ├── english/          # 英语：3 年级 × 40 课时 = 120 课时
│   │   ├── videoDirectLinks.ts      # 视频直链资源
│   │   └── videoResourceGenerator.ts # 视频资源生成器
│   ├── pages/                # 页面组件
│   │   ├── HomePage.vue      # 首页（签到、学科入口、今日任务）
│   │   ├── CoursesPage.vue   # 课程总览
│   │   ├── SubjectPage.vue   # 学科页（选择年级）
│   │   ├── GradePage.vue     # 年级页（选择单元）
│   │   ├── UnitPage.vue      # 单元页（选择课时）
│   │   ├── LessonPage.vue    # 课时学习页（核心：内容+练习+视频）
│   │   ├── RewardsPage.vue   # 奖励中心（货币+成就+心愿商店）
│   │   ├── ReviewPage.vue    # 复习中心
│   │   └── ParentPage.vue    # 家长中心（进度+设置+语音速度）
│   └── lib/utils.ts          # 工具函数
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

### 2.3 数据流架构

```
用户操作
   │
   ▼
Vue 组件 (pages/components)
   │
   ├──► Pinia Stores (course/progress/reward/settings)
   │         │
   │         ├──► localStorage（持久化：进度、奖励、设置）
   │         │
   │         └──► 课程数据 (data/*.ts，静态导入)
   │
   ├──► Composables (useSpeech/useGsap/useRewardSystem)
   │         │
   │         ├──► Web Speech API（TTS 语音合成）
   │         ├──► GSAP（动画引擎）
   │         └──► Store 交互（奖励发放、进度更新）
   │
   └──► Router（页面导航）
```

---

## 三、核心功能模块

### 3.1 课程体系

#### 3.1.1 数据规模

| 学科 | 年级 | 单元数 | 课时数 | 练习题数 | 数据文件行数 |
|------|------|--------|--------|----------|-------------|
| 数学 | 1-3 | 24 | 120 | 840 | ~8,693 行 |
| 语文 | 1-3 | 24 | 120 | 840 | ~10,518 行 |
| 英语 | 1-3 | 24 | 120 | 840 | ~9,958 行 |
| **合计** | - | **72** | **360** | **2,520** | **~29,169 行** |

#### 3.1.2 课时结构

每个课时（Lesson）包含完整的教学闭环：

```typescript
interface Lesson {
  id: string                    // 课时ID（如 m1u5l3）
  title: string                 // 课时标题
  teachingMethod: string        // 教学方法说明
  content: ContentBlock[]       // 课文内容块（核心学习材料）
  iDo: string                   // 教师示范（I do）
  weDo: string                  // 师生共做（We do）
  youDo: string                 // 学生独立做（You do）
  parentTips: string            // 家长辅导建议
  funElement: string            // 趣味元素
  gsapAnimations: string[]      // GSAP 动画配置
  images: string[]              // 图片资源
  practiceQuestions: PracticeQuestion[] // 练习题（每课7题）
  videoResources?: VideoResource[]      // 辅助学习视频
}
```

#### 3.1.3 单元结构

每个单元固定 5 课时，遵循"新授→巩固→评价→应用"螺旋上升结构：
- **l1-l3**：新授课（3 节，逐步深入）
- **l4**：形成性评价（1 节，检测掌握情况）
- **l5**：综合复习与应用（1 节，知识整合）

#### 3.1.4 练习题分层

每课 7 道练习题，采用分层设计：
- **q1-q3**：基础层（直接应用本课知识）
- **q4-q5**：提高层（需要一步推理/转化）
- **q6**：期末真题（标注【期末真题】，模拟考试）
- **q7**：跨课复习（螺旋式回顾前面知识，hint 标注知识点来源）

题目类型：`choice`（选择题）、`fill`（填空题）、`drag`（拖拽题）、`flashcard`（闪卡）

### 3.2 动画引擎

#### 3.2.1 动画类型系统

项目定义了 14 种动画场景类型，覆盖低年级所有教学需求：

| 动画类型 | 用途 | 示例 |
|---------|------|------|
| `numberCount` | 数数：数字依次出现 | 1-10 认识 |
| `merge` | 合并：两组物品合到一起 | 加法 3+2=5 |
| `separate` | 分离：从一组物品中拿走 | 减法 5-2=3 |
| `pinyin` | 拼音：字母出现+口型 | b-a-ba |
| `colorMix` | 颜色混合 | 红+黄=橙 |
| `sequence` | 排序 | 数字/字母排序 |
| `sceneBuild` | 场景构建 | 课堂场景搭建 |
| `cpaTransition` | CPA 过渡 | 实物→图示→符号 |
| `compare` | 比较 | 多少/长短比较 |
| `shapeDraw` | 图形绘制 | 几何图形逐步画出 |
| `cardReveal` | 卡片揭示 | 翻转卡片学单词 |
| `timeline` | 时间线 | 步骤按时间出现 |
| `verticalCalc` | 竖式计算 | 逐位计算+进位可视化 |
| `makeTen` | 凑十法 | 拆分→凑十→加剩余 |

#### 3.2.2 GSAP 动画封装

`useGsap.ts` 封装了 12 种基础动画：
- `revealText`：文字逐字揭示
- `bounceIn`：弹跳出现
- `typewriter`：打字机效果
- `counter`：数字滚动计数
- `cpaTransition`：CPA 三阶段过渡
- `float`：浮动动画
- `pulse`：脉冲动画
- `celebrate`：庆祝纸屑
- `starFlyIn`：星星飞入
- `correctFeedback`/`wrongFeedback`：答题反馈

所有动画使用 `gsap.context()` 管理，组件卸载时自动 `revert()`，避免内存泄漏。

### 3.3 语音系统（TTS）

#### 3.3.1 核心特性
- 基于 **Web Speech API**（`speechSynthesis`），无需联网，使用系统自带语音
- **拼音智能转换**：内置完整拼音音节映射表（PINYIN_MAP），将拼音自动转为中文读音
  - 例如：`b-a-ba` → `波-啊-巴`，避免拼音被读成英文字母
  - 覆盖所有声母、韵母、整体认读音节、四声调
- **角色化语音**：5 种角色配置（旁白/老师/学生/小朋友/系统），不同角色有不同语速和音调
- **统一语速控制**：家长可在设置中统一调整语音速度（0.5x-1.5x）

#### 3.3.2 语音速度优先级
1. 显式传入的 rate 参数（向后兼容）
2. 统一设置中的 speechRate（家长全局设置）
3. 角色默认 rate

### 3.4 奖励系统

#### 3.4.1 双货币体系
- **星星**：日常学习奖励（完成课时、签到、答对题目）
- **钻石**：成就解锁奖励（解锁成就 +5 钻石）

#### 3.4.2 成就系统
内置 16 种成就，覆盖学习各个方面：
- 学习里程碑：初出茅庐、坚持不懈、星星收藏家
- 连续学习：三日连胜、周周不断
- 学科达人：数学小达人、语文小学者、英语小明星
- 特殊成就：零失误、闪电学习、完美一天、逆袭之星

#### 3.4.3 心愿商店
6 种心愿商品，孩子用星星兑换真实奖励（冰淇淋、动画片、公园、玩具等），实现"学习→奖励→动力"正循环。

### 3.5 进度管理

#### 3.5.1 星级评价
- ⭐⭐⭐ 三星：正确率 ≥ 95%
- ⭐⭐ 二星：正确率 ≥ 80%
- ⭐ 一星：正确率 ≥ 60%
- 无星：正确率 < 60%

#### 3.5.2 连续学习
自动追踪连续学习天数，激励孩子坚持。

#### 3.5.3 数据持久化
所有进度、奖励、设置通过 `localStorage` 持久化，关闭应用后数据不丢失。

### 3.6 家长中心

- **进度概览**：三科完成率、连续天数、累计星星
- **学科进度**：可视化进度条
- **语音速度设置**：统一调节拼音/中文/英文朗读速度，含预设和测试功能
- **孩子名字设置**：个性化称呼
- **家长小贴士**：辅导建议

---

## 四、设计亮点

### 4.1 教学法融入
- **CPA 教学法**：每节课的 content 和 iDo/weDo/youDo 都遵循 Concrete→Pictorial→Abstract
- **分层练习**：基础→提高→真题→复习，螺旋上升
- **知识点溯源**：练习题 hint 中标注 `[知识点]（课程-章节）`，支持错题回溯

### 4.2 儿童友好设计
- **暖色调主题**：橙色主色 + 青色辅色，温暖友好
- **圆润设计**：3xl 圆角卡片，符合儿童审美
- **大字体**：标题用 ZCOOL KuaiLe 字体，活泼可爱
- **emoji 图标**：大量使用 emoji 增加趣味性
- **底部导航**：5 个主要入口，拇指可达

### 4.3 离线优先
- 所有课程数据内置（~29,000 行 TypeScript 数据）
- TTS 使用系统语音，无需联网
- 打包为 Electron 桌面应用，完全离线运行
- 数据存储在本地 localStorage，隐私安全

### 4.4 跨平台
- Web 版：Vite 构建，可部署到任何静态服务器
- Windows 桌面版：Electron 打包，NSIS 安装包 + 便携版
- Android 版：Capacitor 打包（可选）

---

## 五、数据模型

### 5.1 核心类型

```
CourseMeta → Unit → Lesson → ContentBlock / PracticeQuestion
                                  │
                                  └── AnimationSceneConfig（14种动画配置）
```

### 5.2 ID 命名规范

| 实体 | 格式 | 示例 |
|------|------|------|
| 单元 | `{学科前缀}{年级}u{单元号}` | m1u5、c2u3、e3u8 |
| 课时 | `{单元ID}l{课时号}` | m1u5l3、c2u3l1 |
| 题目 | `{课时ID}q{题号}` | m1u5l3q1、c2u3l1q4 |

学科前缀：`m`=数学、`c`=语文、`e`=英语

---

## 六、构建与部署

### 6.1 开发环境

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器
npm run check        # TypeScript 类型检查
```

### 6.2 构建

```bash
npm run build                    # Web 版构建
npm run electron:build           # Windows 便携版（portable.exe）
npm run electron:build:installer # Windows NSIS 安装包
```

### 6.3 输出

- **NSIS 安装包**：`release/老甜甜和小甜甜的游戏屋-Setup-1.0.0.exe`
  - 支持自定义安装路径
  - 创建桌面快捷方式
  - 可在任何 Windows 电脑离线安装
- **便携版**：`release/老甜甜和小甜甜的游戏屋-1.0.0-portable.exe`
  - 单文件，无需安装，双击即用

---

## 七、已知限制与未来方向

### 7.1 当前限制
- 课程数据为静态内置，更新需重新打包
- 复习中心为简化版（模拟数据）
- 无云端同步，数据仅存本地
- 三年级数学内容密度低于一二年级

### 7.2 未来方向
- 引入云端数据同步
- 增加错题本智能复习算法（SM-2 间隔重复）
- 支持多孩子账号
- 增加语音识别，支持孩子口头回答
- iOS 版本支持
