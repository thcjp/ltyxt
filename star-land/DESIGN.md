# 老田和小甜甜的游戏屋 — 项目设计文档

> 面向小学一至三年级（语数英三科）的离线亲子共学补救学习系统，以游戏化、动画化、家长可参与为核心特色。

---

## 一、项目定位与价值

### 1.1 项目目标
为小学低年级（1-3 年级）学生提供一套**完整、离线可用、家长可参与**的语数英三科补习学习系统，解决以下痛点：

- **教育资源不均衡**：偏远地区或家庭无法获得优质补习资源
- **家长辅导困难**：家长不知道怎么教、教什么、孩子学到哪
- **孩子学习兴趣低**：传统补习枯燥，孩子注意力难以集中
- **学习数据缺失**：缺乏系统化的学习进度跟踪与薄弱点分析

### 1.2 核心价值
- **离线运行**：单文件打包（vite-plugin-singlefile）+ 哈希路由自适应，支持 `file://` 协议直接打开，无需联网即可使用，适合任何环境
- **游戏化学习**：星星货币、钻石奖励、成就系统、心愿商店+钻石商店（含库存系统），让孩子在游戏中学习
- **CPA 教学法**：每节课遵循 Concrete（实物）→ Pictorial（图示）→ Abstract（符号）三阶段，符合低年级认知规律
- **智能动画推断**：根据课文内容自动选择最合适的动画场景（9 大英语主题+中文过程类+智能兜底），无需手动配置
- **精准网课匹配**：每个课时动态生成 3 个免费视频搜索链接（国家智慧教育平台/B站/网易公开课），稳定不失效
- **家长可参与**：家长中心可查看进度、调整语音速度、手动加分、管理心愿/钻石商店商品（PIN 验证）
- **完整课程体系**：3 学科 × 3 年级 × 8 单元 × 5 课时 = **360 节完整课时**，**2520 道练习题**

---

## 二、技术架构

### 2.1 技术栈

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| 前端框架 | Vue 3.4 + TypeScript 5.3 | 组合式 API + `<script setup>` |
| 构建工具 | Vite 5.0 | 极速 HMR 与构建 |
| 状态管理 | Pinia 2.1 | 轻量、类型友好 |
| 路由 | Vue Router 4.2 | `file://` 协议下自动切换为 hash 模式（createWebHashHistory），Web 开发用 history 模式 |
| 动画引擎 | GSAP 3.12 | 专业级 Web 动画 |
| 样式 | Tailwind CSS 3.4 | 原子化 CSS + 自定义主题 |
| 图标 | Lucide Vue Next | 现代化 SVG 图标库 |
| 单文件打包 | vite-plugin-singlefile 2.3 | 构建产物合并为单个 HTML，支持 `file://` 协议离线运行 |
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
│   ├── router/index.ts       # 路由配置（9 个页面，file:// 下用 hash 路由）
│   ├── types/index.ts        # 全局 TypeScript 类型定义
│   ├── stores/               # Pinia 状态管理
│   │   ├── course.ts         # 课程数据 store
│   │   ├── progress.ts       # 学习进度 store（localStorage 持久化）
│   │   ├── reward.ts         # 奖励/成就/心愿/钻石商店 store（含库存系统，localStorage 持久化）
│   │   ├── settings.ts       # 用户设置 store（含语音速度）
│   │   └── study.ts          # 学习日志 store
│   ├── composables/          # 组合式函数
│   │   ├── useGsap.ts        # GSAP 动画封装
│   │   ├── useSpeech.ts      # TTS 语音合成（含拼音转中文+emoji 清洗）
│   │   ├── useCourseProgress.ts # 课程进度计算
│   │   ├── useRewardSystem.ts   # 奖励系统逻辑
│   │   └── useTheme.ts       # 主题管理
│   ├── components/animation/ # 动画组件
│   │   ├── ContentBlockRenderer.vue # 内容块渲染器（含智能动画推断 inferAnimationConfig）
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
│   │   ├── videoDirectLinks.ts      # 视频资源动态生成（搜索链接，3 个免费渠道）
│   │   └── videoResourceGenerator.ts # 视频资源生成器（回退方案）
│   ├── pages/                # 页面组件
│   │   ├── HomePage.vue      # 首页（签到、学科入口、今日任务）
│   │   ├── CoursesPage.vue   # 课程总览
│   │   ├── SubjectPage.vue   # 学科页（选择年级）
│   │   ├── GradePage.vue     # 年级页（选择单元）
│   │   ├── UnitPage.vue      # 单元页（选择课时）
│   │   ├── LessonPage.vue    # 课时学习页（核心：内容+练习+视频）
│   │   ├── RewardsPage.vue   # 奖励中心（货币+成就+心愿商店+钻石商店+库存）
│   │   ├── ReviewPage.vue    # 复习中心
│   │   └── ParentPage.vue    # 家长中心（进度+设置+语音速度+商品管理）
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
   │         ├──► localStorage（持久化：进度、奖励、设置、交易历史）
   │         │
   │         └──► 课程数据 (data/*.ts，静态导入)
   │
   ├──► Composables (useSpeech/useGsap/useRewardSystem)
   │         │
   │         ├──► Web Speech API（TTS 语音合成+拼音转换+emoji 清洗）
   │         ├──► GSAP（动画引擎）
   │         └──► Store 交互（奖励发放、进度更新、库存扣减）
   │
   └──► Router（页面导航，file:// 下用 hash 路由）
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
  videoResources?: VideoResource[]      // 辅助学习视频（动态生成搜索链接）
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

#### 3.2.3 智能动画推断系统

`ContentBlockRenderer.vue` 中的 `inferAnimationConfig(content)` 函数根据课文内容文本自动推断最合适的动画场景配置，无需手动为每个内容块配置动画。

**推断流程（按优先级顺序匹配，命中即返回）：**

1. **数数/计数类**（中文）：匹配"数字/数数/计数/从X数到Y"→ `numberCount`
2. **英语数字类**：匹配 one~ten + number/count → `numberCount`
3. **合并/加法类**：匹配"合并/加法/+等于"→ `merge`
4. **分离/减法类**：匹配"消失/拿走/减法/还剩"→ `separate`
5. **拼音/字母类**（中文）：匹配"拼音/声母/韵母"→ `pinyin`
6. **英语字母类**：匹配 alphabet/ABC → `sequence`
7. **颜色混合类**：匹配"颜色混合/Red Yellow"→ `colorMix`
8. **英语颜色类**：匹配 red/blue/green 等 → `cardReveal`
9. **排序类**：匹配"排队/排序/从小到大"→ `sequence`
10. **比较类**：匹配"比较/一一对应/比多少"→ `compare`
11. **图形绘制类**：匹配"描边/绘制/长方形/三角形"→ `shapeDraw`
12. **英语问候类**：匹配 hello/hi/good morning → `cardReveal`
13. **英语家庭成员类**：匹配 father/mother/family → `sceneBuild`
14. **英语动物类**：匹配 cat/dog/bird 等 → `sceneBuild`
15. **英语水果类**：匹配 apple/banana/orange 等 → `sceneBuild`
16. **英语身体部位类**：匹配 head/eye/ear 等 → `sceneBuild`
17. **英语日常动作类**：匹配 brush/wash/eat/sleep 等 → `timeline`
18. **中文过程/变化类**：匹配"变成/变化/变态/循环/过程/步骤/生长"→ `timeline`，含 50+ 阶段关键词→emoji 映射（蝌蚪/青蛙/蒸发/凝结/种子/发芽/开花/春夏秋冬等）
19. **默认兜底**：`buildSmartSceneBuild(content)` 智能场景构建

**智能场景构建兜底（`buildSmartSceneBuild`）：**

- **Emoji 提取**：用正则 `/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/gu` 从内容中直接提取已有 emoji
- **100+ 关键词→emoji 主题映射表**：覆盖学校/动物/水果/天气/交通/食物/家具/文具/自然/身体等主题，按内容关键词匹配对应 emoji
- **动画效果轮换**：`pickAnimation(i)` 按索引轮换使用 `bounceIn`/`scaleIn`/`slideIn`/`popIn`/`fadeIn`，避免单调
- **无纸箱占位符**：未匹配到主题时使用 `✨` 而非 `📦`，视觉更友好
- 内容切分：按中文标点（，、；）或空格切分为多个元素，每个元素配 emoji + 动画 + TTS 文本

### 3.3 语音系统（TTS）

#### 3.3.1 核心特性
- 基于 **Web Speech API**（`speechSynthesis`），无需联网，使用系统自带语音
- **拼音智能转换**：内置完整拼音音节映射表（PINYIN_MAP），将拼音自动转为中文读音
  - 例如：`b-a-ba` → `波-啊-巴`，避免拼音被读成英文字母
  - 覆盖所有声母、韵母、整体认读音节、四声调
- **TTS 表情清洗**（`cleanEmojiForTTS`）：智能处理文本中的 emoji，避免 TTS 逐个朗读
  - 连续重复的 emoji 聚合为"X颗星星""X朵花"等格式（含量词映射）
  - 正则覆盖范围：`\u{1F300}-\u{1F9FF}`、`\u{2600}-\u{27BF}`、**`\u{2B00}-\u{2BFF}`（含 ⭐ U+2B50 星星）**
  - 按 Unicode 码点计数（`[...match].filter(c => c === emoji).length`），避免 UTF-16 代理对导致非 BMP emoji 计数翻倍
  - 正确处理变体选择符 U+FE0F（emoji 后常跟，如 ⭐️）
  - 单个 emoji 替换为中文名称或移除
- **角色化语音**：7 种角色配置（旁白/老师/学生/小朋友/妈妈/爸爸/系统），不同角色有不同语速和音调，按性别自动匹配不同人声
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

#### 3.4.3 库存经济系统

心愿商店（星星兑换）与钻石商店均支持基于库存的商品管理，模拟真实稀缺感，培养孩子延迟满足能力。

**库存字段设计（`stock`）：**

| 值 | 含义 | 行为 |
|----|------|------|
| `-1` | 无限库存 | 不限兑换次数，不递减 |
| `0` | 售罄 | 不可兑换，UI 置灰 |
| `>0` | 可用数量 | 兑换后递减，减到 0 则售罄 |

**兑换流程（`redeemWish` / `redeemDiamondItem`）：**
1. 校验商品存在性
2. 校验库存（`stock === 0` 返回 false）
3. 校验货币余额（星星/钻石是否足够）
4. 扣减货币，记录变动历史
5. 有限库存（`stock > 0`）则 `stock--`
6. 标记 `purchased = true`，持久化到 localStorage

**家长管理（PIN 验证后）：**

| 操作 | 心愿商店函数 | 钻石商店函数 | 说明 |
|------|-------------|-------------|------|
| 新增 | `addWishItem` | `addDiamondItem` | 自定义商品（`custom: true`） |
| 编辑 | `updateWishItem` | `updateDiamondItem` | 修改名称/描述/价格/图标/库存 |
| 补货 | `restockWishItem` | `restockDiamondItem` | 重置库存，清除 purchased 标记 |
| 删除 | `removeWishItem` | `removeDiamondItem` | 仅可删除 `custom: true` 的商品 |

**交易历史持久化：**
- `starHistory`：星星变动记录（来源/金额/原因/时间戳），保留最近 100 条
- `diamondHistory`：钻石变动记录，保留最近 100 条
- 来源类型：`lesson`（学习）/ `achievement`（成就）/ `redeem`（兑换）/ `parent`（家长手动）

**旧数据向后兼容迁移（`loadFromStorage`）：**
加载 localStorage 数据时，对 `wishItems` 和 `diamondItems` 逐项检查 `stock` 字段：
- 若 `stock` 已存在，保留原值
- 若 `stock` 不存在（旧数据），按 `purchased` 状态补默认值：已购→`0`，未购→`5`（心愿）/`3`（钻石）

#### 3.4.4 心愿商店与钻石商店
- **心愿商店**：6 种预置商品（冰淇淋/动画片/公园/玩具/故事书/贴纸），用星星兑换
- **钻石商店**：6 种预置商品（看电影/大玩具/旅行/游戏时间/晚睡特权/作业减免），用钻石兑换
- 两个商店均支持家长自定义新增商品，实现"学习→奖励→动力"正循环

### 3.5 视频资源系统

#### 3.5.1 设计理念
早期版本维护 360 条硬编码视频直链，存在易失效（视频下架/链接变更）的严重问题。重构为**动态搜索链接生成**架构，搜索链接稳定可靠，不会因单个视频下架而失效。

#### 3.5.2 动态生成架构

```
课时学习页 (LessonPage)
   │
   ├── 调用 generateVideoResources(subject, grade, lessonId, lessonTitle)
   │
   ▼
videoResourceGenerator.ts (入口)
   │
   ├── 优先调用 getDirectLinkResource(lessonId, lessonTitle)
   │   │
   │   ▼
   │   videoDirectLinks.ts
   │   ├── parseLessonId(lessonId)  → 解析学科(mce)+年级
   │   ├── 构建搜索关键词：年级 + 学科 + 课时标题
   │   └── 生成 3 个渠道的搜索链接
   │
   └── 无匹配时回退：生成网易公开课搜索链接
```

#### 3.5.3 三大免费视频渠道

| 渠道 | 平台 | URL 生成函数 | 特点 | matchScore |
|------|------|-------------|------|-----------|
| 国家中小学智慧教育平台 | zxx.edu.cn | `buildSmartEduSearchUrl` | 教育部官方，免费同步课程，最权威 | 5 |
| Bilibili | search.bilibili.com | `buildBilibiliSearchUrl` | 内容丰富，名师讲解+动画教学 | 4 |
| 网易公开课 | open.163.com | `build163SearchUrl` | 免费系统课程 | 4 |

**搜索关键词策略：**
- 完整关键词：`{年级}{学科} {课时标题}`（如"一年级数学 减法初体验"），用于官方平台和网易公开课
- 简短关键词：`{年级}{学科}{课时标题}`（无空格），用于 B 站，避免过长导致搜索结果太少

#### 3.5.4 课时 ID 解析
课时 ID 格式：`{学科前缀}{年级}u{单元号}l{课时号}`，如 `m1u2l3` = 数学一年级第2单元第3课
- 学科前缀：`m`=数学、`c`=语文、`e`=英语
- 正则：`/^([mce])(\d)u\d+l\d+$/`

### 3.6 进度管理

#### 3.6.1 星级评价
- ⭐⭐⭐ 三星：正确率 ≥ 95%
- ⭐⭐ 二星：正确率 ≥ 80%
- ⭐ 一星：正确率 ≥ 60%
- 无星：正确率 < 60%

#### 3.6.2 连续学习
自动追踪连续学习天数，激励孩子坚持。

#### 3.6.3 数据持久化
所有进度、奖励、设置通过 `localStorage` 持久化，关闭应用后数据不丢失。

### 3.7 家长中心

- **进度概览**：三科完成率、连续天数、累计星星
- **学科进度**：可视化进度条
- **语音速度设置**：统一调节拼音/中文/英文朗读速度，含预设和测试功能
- **孩子名字设置**：个性化称呼
- **家长小贴士**：辅导建议
- **商品管理**：PIN 验证后管理心愿商店与钻石商店商品（新增/编辑/补货/删除）
- **家长加分**：PIN 验证后可手动给孩子加星星/钻石（奖励额外表现）

### 3.8 家长批改功能

针对填空题和闪卡题标准答案过于死板的问题，引入家长主观批改机制：

- **触发条件**：系统判定孩子答错时，出现"家长批改"按钮
- **批改流程**：家长查看孩子答案 vs 参考答案 → 主观判断是否算对 → PIN 验证确认
- **批改后处理**：若家长判对，则按答对处理（计正确率、发星星）；防止重复批改
- **设计意图**：
  - 解决标准答案死板问题（如"b"和"d"方向题、近义词填空等）
  - 强制家长参与学习过程（只有家长才能判断答案合理性）
  - 符合补救教学"因材施教"理念，避免 rigid memorization

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
- **单文件打包**（vite-plugin-singlefile）：构建产物合并为单个 HTML 文件，支持 `file://` 协议直接双击打开
- **哈希路由自适应**：`file://` 协议下自动启用 `createWebHashHistory`，Web 开发服务器用 `createWebHistory`，避免刷新 404
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

- **NSIS 安装包**：`release/老田和小甜甜的游戏屋-Setup-1.0.0.exe`
  - 支持自定义安装路径
  - 创建桌面快捷方式
  - 可在任何 Windows 电脑离线安装
- **便携版**：`release/老田和小甜甜的游戏屋-1.0.0-portable.exe`
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
