import type { Unit } from '@/types'

export const englishGrade3: Unit[] = [
  {
    id: 'e3u1',
    title: 'Back to School',
    subtitle: '新学期新开始，加油向前冲',
    order: 1,
    lessons: [
      {
        id: 'e3u1l1',
        title: '新学期',
        order: 1,
        teachingMethod: '情境教学法',
        learningObjective: '我能用I am in Grade 3/I have new textbooks介绍新学期',
        successCriteria: '①能说出I am in Grade 3的完整句子 ②能说出至少2个新学期事物的英语',
        iDo: '家长模拟开学场景，说"New term begins! I am in Grade 3 now! I have new books" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起讨论新学期的期待，用英语说出目标和愿望 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语介绍自己新学期的变化和目标【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：新学期表达I am in Grade 3 now!（我三年级了）、I have new textbooks（我有新课本）。\n共学四步：\n①对话出题：家长问开学了你几年级了？并说Are you in Grade 3?。\n②孩子应答：孩子应说I am in Grade 3!。\n③答错引导：若孩子说不出，家长当同学一起练！扫描课时发音动画听发音；让孩子点读课件句子卡；家长指着课本边说I have new textbooks，用实物配合。\n④快速检测：1.孩子说I am in Grade 3；2.说I have new textbooks；3.说出2个新学期事物。',
        funElement: '制作"新学期愿望卡"，用英语写下3个新学期目标',
        gsapAnimations: ['GSAP:书包拉开-zipOpen', 'GSAP:新书本弹出-bookPop'],
        images: ['IMG:开学场景插图', 'IMG:新学期卡片'],
        content: [
          { type: 'text', content: 'New term begins! 新学期开始了！I am in Grade 3 now! 我现在三年级了！I have new textbooks我有新课本', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: Welcome back! How was your holiday?\n小明: It was great! I am in Grade 3 now!\n老师: What\'s new this term?\n小明: I have new textbooks and new friends!', label: '新学期对话', animationType: 'reveal' },
          { type: 'example', content: 'I am in Grade 3 — 我在三年级\nNew term — 新学期\nTextbooks — 课本\nNew friends — 新朋友\nStudy hard — 努力学习', label: '新学期词汇', animationType: 'bounce' },
          { type: 'tip', content: 'I am in Grade + 数字表示在哪个年级，注意Grade首字母大写！', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '书包拉开，新书本弹出的开学动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Back to School', sceneBuildConfig: { sceneName: 'Back to School', elements: [ { id: 'el-0', text: 'Schoolbag', emoji: '🎒', delay: 0, animation: 'bounceIn', ttsText: 'Schoolbag' }, { id: 'el-1', text: 'Book', emoji: '📚', delay: 0.4, animation: 'popIn', ttsText: 'Book' }, { id: 'el-2', text: 'Pencil', emoji: '✏️', delay: 0.8, animation: 'slideIn', ttsText: 'Pencil' }, { id: 'el-3', text: 'Eraser', emoji: '🧽', delay: 1.2, animation: 'scaleIn', ttsText: 'Eraser' } ] }, ttsNarration: '开学：书包、书本、铅笔、橡皮' } },
          { type: 'tip', content: '本课主要使用情境教学法：创设真实生活情境，在情境中自然学习', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u1l1q1',
            type: 'choice',
            question: '"我现在三年级了"用英语怎么说？',
            options: ['I am in Grade 3 now', 'I am 3 years old', 'I have 3 books', 'I like Grade 3'],
            answer: 'I am in Grade 3 now',
            hint: '表达在哪个年级用什么句型？',
            explanation: 'I am in Grade 3表示我在三年级，in Grade + 数字表示年级做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l1q2',
            type: 'fill',
            question: 'New ____ begins! Let\'s study hard!（学期）',
            answer: 'term',
            acceptableAnswers: ['semester'],
            hint: '学期用英语怎么说？',
            explanation: 'New term begins表示新学期开始了，term是学期做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l1q3',
            type: 'drag',
            question: '把词拖到正确位置：I have new ____ for the new term.（课本）',
            answer: 'textbooks',
            hint: '新学期的书',
            explanation: 'textbooks是课本，新学期有新课本做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l1q4',
            type: 'choice',
            question: '小明升入了三年级，他应该说？',
            options: ['I am in Grade 3 now', 'I am 3 years old', 'I have 3 friends', 'I like number 3'],
            answer: 'I am in Grade 3 now',
            hint: '表达在哪个年级用什么句型？',
            explanation: 'I am in Grade 3表示我在三年级，用in Grade + 数字表达年级做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l1q5',
            type: 'fill',
            question: 'New term begins! I have new ____ for this term.（课本）',
            answer: 'textbooks',
            hint: '新学期用的书叫什么？',
            explanation: 'textbooks是课本，New term begins时会有新课本做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l1q6',
            type: 'choice',
            question: '【期末真题】"I am in Grade 3."中Grade首字母必须大写，因为？',
            options: ['It is part of a proper name', 'All words must be capitalized', 'Grade is a verb', 'The number 3 must be capitalized'],
            answer: 'It is part of a proper name',
            hint: '想想Grade在这里是什么词性？',
            explanation: 'Grade在I am in Grade 3中是专有名词，表示年级名称，首字母必须大写做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：I study hard every ____.（天）',
            answer: 'day',
            hint: '[Back to School]（英语二年级-回顾）',
            explanation: '回顾已学：every day表示每天，I study hard every day表示我每天努力学习做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u1l2',
        title: '课程表',
        order: 2,
        teachingMethod: '视觉化教学法',
        learningObjective: '我能用On Monday, I have...说出课程表',
        successCriteria: '①能说出星期一到星期五的英语 ②能用On...I have...说一天的课',
        iDo: '家长展示课程表，说"On Monday, I have English, Math, and Chinese" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起制作英语课程表，用英语标注科目和时间 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出自己一周的课程安排【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：课程表On Monday, I have English, Math, and Chinese.（星期一我有英语数学语文）。\n共学四步：\n①对话出题：家长问星期一你有什么课？并说On Monday, I have...。\n②孩子应答：孩子应说On Monday, I have English and Math.。\n③答错引导：若孩子说不出，家长当同学一起看课表！扫描课时发音动画听发音；让孩子点读课件句子卡；家长拿真实课程表边指边说英语。\n④快速检测：1.孩子说出星期一到星期五；2.用On...I have...说一天的课；3.说出3个学科英语。',
        funElement: '设计一张漂亮的英语课程表，画上每个科目的图标',
        gsapAnimations: ['GSAP:课程表展开-scheduleExpand', 'GSAP:科目图标依次出现-stagger'],
        images: ['IMG:课程表示例', 'IMG:科目词汇卡片'],
        content: [
          { type: 'text', content: 'On Monday, I have English, Math, and Chinese. 星期一我有英语、数学和语文课。学会用英语说出你的课程表！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What classes do you have on Monday?\n小红: I have English, Math, and Chinese.\n小明: What\'s your favorite subject?\n小红: My favorite subject is Science!', label: '课程表对话', animationType: 'reveal' },
          { type: 'example', content: 'English — 英语\nMath — 数学\nChinese — 语文\nScience — 科学\nPE (Physical Education) — 体育\nMusic — 音乐\nArt — 美术', label: '科目词汇', animationType: 'bounce' },
          { type: 'tip', content: '星期几前面用介词on！On Monday在星期一，On Tuesday在星期二', label: '语法提示', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用视觉化教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u1l2q1',
            type: 'choice',
            question: '"星期一我有英语课"用英语怎么说？',
            options: ['On Monday, I have English', 'In Monday, I have English', 'At Monday, I have English', 'Monday I have English'],
            answer: 'On Monday, I have English',
            hint: '星期几前面用什么介词？',
            explanation: 'On Monday表示在星期一，星期几前面用介词on做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l2q2',
            type: 'fill',
            question: 'My favorite subject is ____.（科学）',
            answer: 'Science',
            hint: '做实验的科目',
            explanation: 'Science是科学，是一门有趣的学科做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l2q3',
            type: 'drag',
            question: '把科目拖到正确位置：PE = Physical ____',
            answer: 'Education',
            hint: '体育课的全称',
            explanation: 'PE是Physical Education的缩写，表示体育课做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l2q4',
            type: 'choice',
            question: '"星期三我有数学课"用英语怎么说？',
            options: ['On Wednesday, I have Math', 'In Wednesday, I have Math', 'At Wednesday, I have Math', 'Wednesday I have Math'],
            answer: 'On Wednesday, I have Math',
            hint: '星期几前面用什么介词？',
            explanation: 'On Wednesday表示在星期三，星期几前面必须用介词on做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l2q5',
            type: 'fill',
            question: 'My favorite subject is ____. I like singing and playing instruments.（音乐）',
            answer: 'Music',
            hint: '唱歌和演奏乐器的科目',
            explanation: 'Music是音乐课，喜欢唱歌和演奏乐器的科目做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l2q6',
            type: 'choice',
            question: '【期末真题】"On Friday, I have PE."中PE的全称是？',
            options: ['Physical Education', 'Primary English', 'Public English', 'Personal Exercise'],
            answer: 'Physical Education',
            hint: 'PE是哪个词组的缩写？',
            explanation: 'PE是Physical Education的缩写，表示体育课做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：I am in Grade 3 ____.（现在）',
            answer: 'now',
            hint: '[Back to School-新学期]（英语三年级-第1单元）',
            explanation: '回顾l1所学：I am in Grade 3 now表示我现在三年级了做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u1l3',
        title: '学校规则',
        order: 3,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用Don\'t.../Be.../Raise...说出学校规则',
        successCriteria: '①能说出3条学校规则的英语 ②能用Don\'t...说出禁止做的事',
        iDo: '家长示范说学校规则"Don\'t run in the hallway. Be quiet in the library. Raise your hand" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起讨论学校规则，用英语说出应该和不应该做的事 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出3-5条学校规则【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：学校规则Don\'t run!（不要跑）、Be quiet!（保持安静）、Raise your hand!（举手）。\n共学四步：\n①对话出题：家长问走廊里不能做什么？并说Don\'t run!。\n②孩子应答：孩子应说Don\'t run!。\n③答错引导：若孩子说不出，家长当同学一起定规则！扫描课时发音动画听发音；让孩子点读课件规则卡；家长边做手势边说英语，用动作配合。\n④快速检测：1.孩子说Don\'t run；2.说Be quiet；3.说Raise your hand。',
        funElement: '玩"规则小卫士"游戏，找出违反规则的行为并用英语纠正',
        gsapAnimations: ['GSAP:规则标牌出现-signPost', 'GSAP:禁止符号闪烁-noFlash'],
        images: ['IMG:学校规则场景', 'IMG:规则卡片'],
        content: [
          { type: 'text', content: 'Don\'t run in the hallway! 不要在走廊里跑！Be quiet in the library! 在图书馆保持安静！Raise your hand! 举手！', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: What are the school rules?\n小明: Don\'t run in the hallway!\n小红: Be quiet in the library!\n小明: Raise your hand before you speak!', label: '学校规则对话', animationType: 'reveal' },
          { type: 'example', content: 'Don\'t run — 不要跑\nDon\'t shout — 不要喊\nBe quiet — 保持安静\nRaise your hand — 举手\nListen to the teacher — 听老师讲', label: '规则用语', animationType: 'bounce' },
          { type: 'tip', content: 'Don\'t + 动词原形 = 不要做某事，这是祈使句的否定形式，用来表达规则和禁止！', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '规则标牌出现，禁止符号闪烁的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'School Rules', sceneBuildConfig: { sceneName: 'School Rules', elements: [ { id: 'el-0', text: 'No running', emoji: '🚫', delay: 0, animation: 'popIn', ttsText: 'No running' }, { id: 'el-1', text: 'No eating', emoji: '🚫', delay: 0.4, animation: 'popIn', ttsText: 'No eating' }, { id: 'el-2', text: 'Be quiet', emoji: '🤫', delay: 0.8, animation: 'fadeIn', ttsText: 'Be quiet' }, { id: 'el-3', text: 'Keep clean', emoji: '🧹', delay: 1.2, animation: 'scaleIn', ttsText: 'Keep clean' } ] }, ttsNarration: '学校规则：不要跑、不要吃、保持安静、保持清洁' } },
          { type: 'tip', content: '本课主要使用EDI直接教学：家长示范-亲子共练-孩子独立完成三步闭环', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u1l3q1',
            type: 'choice',
            question: '"不要在走廊里跑"用英语怎么说？',
            options: ["Don't run in the hallway", "Don't walk in the hallway", "Run in the hallway", "Please run in the hallway"],
            answer: "Don't run in the hallway",
            hint: '禁止做某事用什么句型？',
            explanation: "Don't + 动词原形表示不要做某事，是祈使句的否定形式做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u1l3q2',
            type: 'fill',
            question: '____ quiet in the library.（保持安静）',
            answer: 'Be',
            acceptableAnswers: ['Keep'],
            hint: '保持安静用什么动词？',
            explanation: 'Be quiet表示保持安静，Be是祈使句的动词做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l3q3',
            type: 'drag',
            question: '把规则拖到正确位置：举手 = ____ your hand',
            answer: 'Raise',
            hint: '发言前要做什么？',
            explanation: 'Raise your hand表示举手，发言前要先举手做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l3q4',
            type: 'choice',
            question: '在图书馆里，你应该遵守哪条规则？',
            options: ['Be quiet', 'Run fast', 'Shout loudly', 'Eat snacks'],
            answer: 'Be quiet',
            hint: '图书馆里需要怎样？',
            explanation: 'Be quiet表示保持安静，在图书馆里需要保持安静做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l3q5',
            type: 'fill',
            question: '____ your hand before you speak in class.（举起）',
            answer: 'Raise',
            acceptableAnswers: ['Put up'],
            hint: '发言前要做什么？',
            explanation: 'Raise your hand表示举手，上课发言前要先举手做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l3q6',
            type: 'choice',
            question: '【期末真题】"Don\'t run in the hallway."是什么句型？',
            options: ['Negative imperative', 'Interrogative', 'Exclamatory', 'Declarative'],
            answer: 'Negative imperative',
            hint: 'Don\'t开头的句子是什么类型？',
            explanation: "Don't + 动词原形是祈使句的否定形式，用来表达禁止和规则做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u1l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：On ____, I have English and Math.（星期一）',
            answer: 'Monday',
            hint: '[Back to School-课程表]（英语三年级-第1单元）',
            explanation: '回顾l2所学：On Monday表示在星期一，星期几前面用on做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u1l4',
        title: 'Back to School Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用Back to School单元的课程表和规则表达',
        successCriteria: '①能说出5个学科英语 ②能说出3条学校规则',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾Back to School单元：新学期I am in Grade 3、课程表On Monday I have English、学校规则Don\'t run/Be quiet/Raise your hand。\n共学四步：\n①对话出题：家长问用英语说你的课程表。。\n②孩子应答：孩子应说On Monday, I have English.等。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子说出5个学科；2.说3条学校规则；3.说I am in Grade 3。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Back to School单元！我们学了新学期I am in Grade 3、课程表On Monday I have English、学校规则Don't run/Be quiet/Raise your hand`, animationType: 'reveal' },
          { type: 'formula', content: `学校表达公式：
I am in Grade + 数字 → I am in Grade 3.
On + 星期几 + I have + 科目
Don't + 动词原形 → Don't run.`, animationType: 'typewriter', label: 'Back to School公式' },
          { type: 'animation', content: `Back to School单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Back to School Review', cardRevealConfig: { cards: [ { front: 'Schoolbag', back: '🎒', ttsText: 'Schoolbag' }, { front: 'Book', back: '📚', ttsText: 'Book' }, { front: 'Pencil', back: '✏️', ttsText: 'Pencil' }, { front: 'Ruler', back: '📏', ttsText: 'Ruler' } ] }, ttsNarration: 'Back to School单元回顾：书包、书本、铅笔、尺子' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u1l4q1',
            type: 'choice',
            question: '本单元"Back to School"学了三个主题，以下哪个不属于？',
            options: ['I am in Grade 3', 'On Monday, I have English', "Don't run in the hallway", 'She is tall and thin'],
            answer: 'She is tall and thin',
            hint: '哪个不是本单元学的？',
            explanation: 'She is tall and thin属于My Friends单元，不属于Back to School做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l4q2',
            type: 'fill',
            question: 'I am in Grade 3. I have new ____ for the new term.（课本）',
            answer: 'textbooks',
            hint: '新学期有什么？',
            explanation: 'textbooks是课本，新学期有新课本做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l4q3',
            type: 'choice',
            question: '"Don\'t shout"和"Be quiet"都是学校规则，它们的关系是？',
            options: ['They have similar meanings', 'They have opposite meanings', 'One is for classroom, one for playground', 'They are not related'],
            answer: 'They have similar meanings',
            hint: '两条规则的共同目的是什么？',
            explanation: "Don't shout不要喊叫和Be quiet保持安静，都要求保持安静做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u1l4q4',
            type: 'drag',
            question: '把科目拖到正确位置：I like doing experiments. My favorite subject is ____.',
            answer: 'Science',
            hint: '做实验是什么课？',
            explanation: 'Science是科学课，做实验是科学课的活动做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l4q5',
            type: 'choice',
            question: '【期末真题】选出语法正确的句子？',
            options: ['On Tuesday, I have Chinese.', 'In Tuesday, I have Chinese.', 'At Tuesday, I have Chinese.', 'Tuesday, I have Chinese.'],
            answer: 'On Tuesday, I have Chinese.',
            hint: '星期几前面用什么介词？',
            explanation: '星期几前面必须用介词on，On Tuesday是正确表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l4q6',
            type: 'fill',
            question: '____ run in the hallway! It\'s a school rule.（不要）',
            answer: "Don't",
            acceptableAnswers: ['Do not'],
            hint: '禁止做某事用什么？',
            explanation: "Don't run表示不要跑，是学校规则的表达方式做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u1l4q7',
            type: 'choice',
            question: '回顾已学：以下哪个是二年级学过的表达？',
            options: ['Good morning', 'I am in Grade 3', "Don't run", 'On Monday'],
            answer: 'Good morning',
            hint: '[Greetings]（英语二年级-回顾）',
            explanation: 'Good morning是二年级学过的问候语，其他都是三年级新学内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      },
      {
        id: 'e3u1l5',
        title: 'Back to School in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在学校生活中用英语说课程表和规则',
        successCriteria: '①能用英语说一天的课程 ②能说出学校的规则',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把校园生活化：用英语说课程表和学校规则。\n共学四步：\n①对话出题：家长问今天有什么课？用英语说。。\n②孩子应答：孩子应说I have English and Math.。\n③答错引导：若孩子说不出，家长当同学一起说！扫描课时发音动画复习；让孩子点读课件情景卡；家长看真实课程表边指边说。\n④快速检测：1.孩子说今天的课；2.说一条学校规则；3.说I am in Grade 3。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `新学期新开始！用英语说出你的课程表和学校规则`, animationType: 'reveal' },
          { type: 'example', content: `场景1：介绍年级 → I am in Grade 3 now!
场景2：课程表 → On Monday, I have English and Math.
场景3：学校规则 → Don't run in the hallway!`, animationType: 'bounce', label: 'Back to School在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u1l5q1',
            type: 'choice',
            question: '开学第一天，你向新同学介绍自己的年级，应该说？',
            options: ['I am in Grade 3 now', 'I am 3 years old', 'I have 3 books', 'I like 3'],
            answer: 'I am in Grade 3 now',
            hint: '怎样告诉别人你在三年级？',
            explanation: 'I am in Grade 3 now表示我现在三年级了，是介绍年级的正确说法做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l5q2',
            type: 'fill',
            question: 'Mom: What classes do you have today? You: ____ Tuesday, I have English and Math.',
            answer: 'On',
            hint: '星期几前面用什么介词？',
            explanation: 'On Tuesday表示在星期二，用介词on加星期几做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l5q3',
            type: 'choice',
            question: '在走廊里看到同学在跑，你应该用英语提醒他？',
            options: ["Don't run in the hallway!", "Run faster!", "Be loud!", "It's OK"],
            answer: "Don't run in the hallway!",
            hint: '怎样用英语提醒同学遵守规则？',
            explanation: "Don't run in the hallway!表示不要在走廊里跑，是提醒同学遵守规则做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u1l5q4',
            type: 'drag',
            question: '把词拖到正确位置：New term begins! I have new ____ and new friends.',
            answer: 'textbooks',
            hint: '新学期有什么新的？',
            explanation: 'New term begins时会有新课本textbooks和新朋友做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l5q5',
            type: 'choice',
            question: '【期末真题】小明去医院看病，医生问他几年级，他应该回答？',
            options: ['I am in Grade 3', 'I am in Class 3', 'I am 3', 'I have Grade 3'],
            answer: 'I am in Grade 3',
            hint: '回答在哪个年级用什么句型？',
            explanation: 'I am in Grade 3表示我在三年级，用in Grade + 数字回答年级做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l5q6',
            type: 'fill',
            question: 'In the library, we should ____ quiet.（保持）',
            answer: 'Be',
            acceptableAnswers: ['Keep'],
            hint: '图书馆里要怎样？',
            explanation: 'Be quiet表示保持安静，在图书馆里应该保持安静做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u1l5q7',
            type: 'choice',
            question: '结合本单元所学，开学时你需要同时用到哪两个表达？',
            options: ['I am in Grade 3 + On Monday, I have English', 'I am in Grade 3 + She is tall', "Don't run + She is kind", 'New term + She is funny'],
            answer: 'I am in Grade 3 + On Monday, I have English',
            hint: '[Back to School]（英语三年级-第1单元）',
            explanation: '开学时既要介绍年级I am in Grade 3，又要说课程表On Monday, I have English做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  },
  {
    id: 'e3u2',
    title: 'My Friends',
    subtitle: '好朋友在一起，快乐又温暖',
    order: 2,
    lessons: [
      {
        id: 'e3u2l1',
        title: '描述朋友',
        order: 1,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用tall/long hair/kind描述朋友的外貌和性格',
        successCriteria: '①能说出3个描述外貌性格的词 ②能用My friend is...描述朋友',
        iDo: '家长描述朋友"My friend is tall. She has long hair. She is kind and funny" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起描述彼此的外貌和性格，用英语说出特点 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语描述一个好朋友的外貌和性格【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：描述朋友My friend is tall. She has long hair. She is kind and funny.。\n共学四步：\n①对话出题：家长问你的朋友长什么样？并说My friend is tall.。\n②孩子应答：孩子应说My friend is tall. She has long hair.。\n③答错引导：若孩子说不出，家长当同学一起描述！扫描课时发音动画听发音；让孩子点读课件词汇卡；家长指家人照片边描述边说英语。\n④快速检测：1.孩子说出3个描述词；2.用My friend is...造句；3.描述一个朋友。',
        funElement: '玩"猜猜是谁"游戏，用英语描述同学让大家猜',
        gsapAnimations: ['GSAP:人物轮廓描绘-silhouette', 'GSAP:特征标签弹出-tagPop'],
        images: ['IMG:朋友描述场景', 'IMG:外貌性格词汇卡'],
        content: [
          { type: 'text', content: 'My friend is tall. She has long hair. She is kind and funny. 我的朋友很高，她有长头发，她善良又有趣', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Tell me about your friend.\n小红: She is tall and thin. She has long hair.\n小明: What is she like?\n小红: She is kind and funny!', label: '描述朋友对话', animationType: 'reveal' },
          { type: 'example', content: 'Tall — 高的 / Short — 矮的\nThin — 瘦的 / Strong — 强壮的\nLong hair — 长头发\nKind — 善良的\nFunny — 有趣的\nSmart — 聪明的', label: '外貌性格词汇', animationType: 'bounce' },
          { type: 'tip', content: '描述外貌用is + 形容词，描述特征用has + 名词，如She is tall / She has long hair', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '人物轮廓描绘，特征标签弹出的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'My Friend', sceneBuildConfig: { sceneName: 'My Friend', elements: [ { id: 'el-0', text: 'Tall', emoji: '🧍', delay: 0, animation: 'bounceIn', ttsText: 'Tall' }, { id: 'el-1', text: 'Short', emoji: '🧒', delay: 0.4, animation: 'popIn', ttsText: 'Short' }, { id: 'el-2', text: 'Big eyes', emoji: '👁', delay: 0.8, animation: 'scaleIn', ttsText: 'Big eyes' }, { id: 'el-3', text: 'Long hair', emoji: '💇', delay: 1.2, animation: 'slideIn', ttsText: 'Long hair' } ] }, ttsNarration: '外貌特征：高、矮、大眼睛、长头发' } },
          { type: 'tip', content: '本课主要使用EDI直接教学：家长示范-亲子共练-孩子独立完成三步闭环', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u2l1q1',
            type: 'choice',
            question: '"她又高又瘦"用英语怎么说？',
            options: ['She is tall and thin', 'She is short and fat', 'She is tall and kind', 'She is thin and funny'],
            answer: 'She is tall and thin',
            hint: '描述外貌用什么形容词？',
            explanation: 'tall高、thin瘦，She is tall and thin描述外貌做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l1q2',
            type: 'fill',
            question: 'My friend ____ long hair.（有）',
            answer: 'has',
            hint: '描述有什么特征用什么动词？',
            explanation: 'has表示有/拥有，She has long hair表示她有长头发做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l1q3',
            type: 'flashcard',
            question: '看友善的图片，说出性格形容词',
            answer: 'Kind',
            hint: '对人好的性格',
            explanation: 'Kind表示友善的/善良的，是描述性格的常用词做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l1q4',
            type: 'choice',
            question: '描述朋友的性格时，以下哪个是性格形容词？',
            options: ['Kind', 'Tall', 'Long hair', 'Blue eyes'],
            answer: 'Kind',
            hint: '哪个词描述的是内心品质？',
            explanation: 'Kind善良的是性格形容词，tall是外貌形容词，long hair和blue eyes是外貌特征做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l1q5',
            type: 'fill',
            question: 'She ____ long hair and big eyes. She is very pretty.（有）',
            answer: 'has',
            hint: '描述拥有什么特征用什么动词？',
            explanation: 'has表示有/拥有，She has long hair表示她有长头发做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l1q6',
            type: 'choice',
            question: '【期末真题】"She is tall."和"She has long hair."分别用了什么动词？',
            options: ['is and has', 'has and is', 'is and is', 'has and has'],
            answer: 'is and has',
            hint: '描述外貌用is还是has？',
            explanation: '描述外貌特征用is + 形容词，描述拥有什么用has + 名词做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：I am in ____ 3 now.（年级）',
            answer: 'Grade',
            hint: '[Back to School]（英语三年级-第1单元）',
            explanation: '回顾u1所学：I am in Grade 3表示我在三年级做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u2l2',
        title: '比较级',
        order: 2,
        teachingMethod: '对比辨析法',
        learningObjective: '我能用比较级taller/shorter/bigger比较两个事物',
        successCriteria: '①能说出比较级的构成形容词+er ②能用比较级造句',
        iDo: '家长对比两个物品"This pen is long. That pen is longer. This book is big. That book is bigger" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起比较身边物品，用比较级描述差异 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用比较级比较两个朋友或物品【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：比较级tall→taller（更高）、short→shorter（更矮）、big→bigger（更大），形容词+er。\n共学四步：\n①对话出题：家长比身高问谁更高？并说You are taller.。\n②孩子应答：孩子应说I am taller!。\n③答错引导：若孩子说不出，家长当同学一起比！扫描课时发音动画听发音；让孩子点读课件词汇卡；家长用真实比身高边比边说英语。\n④快速检测：1.孩子说出比较级构成；2.用taller造句；3.用bigger造句。',
        funElement: '玩"谁更..."游戏，比较两个朋友的特征',
        gsapAnimations: ['GSAP:天平倾斜-scaleTip', 'GSAP:比较箭头出现-compareArrow'],
        images: ['IMG:比较级对比图', 'IMG:比较级规则卡片'],
        content: [
          { type: 'text', content: '比较级用来比较两个事物：tall→taller更高、short→shorter更矮、big→bigger更大。形容词+er = 比较级', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Tom is tall. But Jerry is taller!\n小红: This book is big. That book is bigger!\n小明: My bag is heavy. Your bag is heavier!', label: '比较级对话', animationType: 'reveal' },
          { type: 'example', content: 'tall → taller — 更高\nshort → shorter — 更矮\nbig → bigger — 更大\nsmall → smaller — 更小\nlong → longer — 更长\nold → older — 更老/更大', label: '比较级变化', animationType: 'typewriter' },
          { type: 'tip', content: '比较级规则：一般加er，以e结尾加r，重读闭音节双写末尾辅音加er，如big→bigger', label: '语法规则', animationType: 'pulse' },
          { type: 'animation', content: '天平倾斜，比较箭头出现的动画', animationType: 'bounce', animationConfig: { sceneType: 'compare', title: 'Compare', compareConfig: { leftItems: ['🧍', '🧍', '🧍'], rightItems: ['🧍', '🧍', '🧍', '🧍', '🧍'], result: 'right', resultText: '右边多！Right is more!' }, ttsNarration: '比较：左边3个，右边5个，右边更多' } },
          { type: 'tip', content: '本课主要使用对比辨析法：通过对比辨析易混淆的知识点', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u2l2q1',
            type: 'choice',
            question: '"更高"用英语怎么说？',
            options: ['Taller', 'Tallest', 'Tall', 'More tall'],
            answer: 'Taller',
            hint: '比较级怎么变？',
            explanation: 'tall的比较级是taller，形容词+er表示更...做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l2q2',
            type: 'fill',
            question: 'Tom is ____ than Jerry.（更矮）',
            answer: 'shorter',
            hint: 'short的比较级',
            explanation: 'shorter是short的比较级，表示更矮/更短做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l2q3',
            type: 'drag',
            question: '把比较级拖到正确位置：This box is ____ than that one.（更大）',
            answer: 'bigger',
            hint: 'big的比较级双写g加er',
            explanation: 'bigger是big的比较级，双写辅音字母加er做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l2q4',
            type: 'choice',
            question: 'big的比较级是bigger，这里双写g的原因是？',
            options: ['big is a stressed closed syllable word', 'All adjectives double the last letter', 'big ends with g', 'bigger sounds better'],
            answer: 'big is a stressed closed syllable word',
            hint: '比较级双写规则是什么？',
            explanation: '重读闭音节词变比较级时双写末尾辅音字母再加er，如big→bigger做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l2q5',
            type: 'fill',
            question: 'My bag is ____, but your bag is heavier.（重的）',
            answer: 'heavy',
            hint: 'heavy的比较级是heavier',
            explanation: 'heavy是重的，heavier是更重的，比较级中y变i加er做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l2q6',
            type: 'choice',
            question: '【期末真题】"Tom is taller than Jerry."中than的意思是？',
            options: ['比', '和', '的', '在'],
            answer: '比',
            hint: '比较级句子中than起什么作用？',
            explanation: 'than表示比，用于比较级句子中连接两个比较对象做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：She ____ long hair and big eyes.（有）',
            answer: 'has',
            hint: '[My Friends-描述朋友]（英语三年级-第2单元）',
            explanation: '回顾l1所学：She has long hair表示她有长头发，用has描述拥有做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u2l3',
        title: '友谊',
        order: 3,
        teachingMethod: '情感体验教学法',
        learningObjective: '我能用A good friend shares/helps/listens描述好朋友',
        successCriteria: '①能说出3句关于友谊的英语 ②能用A good friend...造句',
        iDo: '家长说"A good friend shares with you. A good friend helps you. A good friend listens to you" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起讨论什么是好朋友，用英语说出友谊的意义 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语写一段关于友谊的话【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：友谊A good friend shares with you.（分享）、helps you.（帮助）、listens to you.（倾听）。\n共学四步：\n①对话出题：家长问好朋友会做什么？并说A good friend shares.。\n②孩子应答：孩子应说A good friend helps me.。\n③答错引导：若孩子说不出，家长当同学一起聊友谊！扫描课时发音动画听发音；让孩子点读课件句子卡；家长结合孩子和朋友的事边说边聊。\n④快速检测：1.孩子说出3句友谊表达；2.用A good friend...造句；3.说出好朋友的一个优点。',
        funElement: '制作"友谊手链"，每颗珠子上写一个关于友谊的英语词',
        gsapAnimations: ['GSAP:握手动画-handshake', 'GSAP:友谊心连心-heartLink'],
        images: ['IMG:友谊场景插图', 'IMG:友谊词汇卡片'],
        content: [
          { type: 'text', content: 'A good friend shares with you. 好朋友会和你分享。A good friend helps you. 好朋友会帮助你。A good friend listens to you. 好朋友会倾听你', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What makes a good friend?\n小红: A good friend shares with you.\n小明: A good friend helps you too!\n小红: And a good friend listens to you!', label: '友谊对话', animationType: 'reveal' },
          { type: 'example', content: 'Share — 分享\nHelp — 帮助\nListen — 倾听\nTrust — 信任\nCare — 关心\nBest friends — 最好的朋友', label: '友谊词汇', animationType: 'bounce' },
          { type: 'tip', content: 'We are best friends! 我们是最好的朋友！用英语表达友谊，让朋友感受到你的真心！', label: '表达提示', animationType: 'pulse' },
          { type: 'animation', content: '握手动画，友谊心连心的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Friendship', sceneBuildConfig: { sceneName: 'Friendship', elements: [ { id: 'el-0', text: 'Handshake', emoji: '🤝', delay: 0, animation: 'bounceIn', ttsText: 'Handshake' }, { id: 'el-1', text: 'Heart', emoji: '❤️', delay: 0.4, animation: 'popIn', ttsText: 'Heart' }, { id: 'el-2', text: 'Friend', emoji: '👫', delay: 0.8, animation: 'scaleIn', ttsText: 'Friend' } ] }, ttsNarration: '友谊：握手、爱心、朋友' } },
          { type: 'tip', content: '本课主要使用情感体验教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u2l3q1',
            type: 'choice',
            question: '"好朋友会和你分享"用英语怎么说？',
            options: ['A good friend shares with you', 'A good friend runs with you', 'A good friend eats with you', 'A good friend plays with you'],
            answer: 'A good friend shares with you',
            hint: '分享用什么动词？',
            explanation: 'share表示分享，A good friend shares with you表示好朋友会和你分享做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l3q2',
            type: 'fill',
            question: 'A good friend ____ you when you need help.（帮助）',
            answer: 'helps',
            hint: '帮助用什么动词？',
            explanation: 'helps表示帮助，A good friend helps you表示好朋友会帮助你做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l3q3',
            type: 'drag',
            question: '把词拖到正确位置：We are best ____!（朋友）',
            answer: 'friends',
            hint: '最好的朋友',
            explanation: 'best friends表示最好的朋友，friend的复数加s做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l3q4',
            type: 'choice',
            question: '以下哪个行为体现了"share"？',
            options: ['把零食分给朋友', '独自吃零食', '抢朋友的零食', '扔掉零食'],
            answer: '把零食分给朋友',
            hint: 'share是什么意思？',
            explanation: 'share表示分享，把零食分给朋友体现了分享的精神做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l3q5',
            type: 'fill',
            question: 'A good friend ____ to you when you are sad.（倾听）',
            answer: 'listens',
            hint: '好朋友在你难过时会怎样？',
            explanation: 'listens表示倾听，A good friend listens to you表示好朋友会倾听你做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l3q6',
            type: 'choice',
            question: '【期末真题】"A good friend shares with you."中shares是第几人称单数形式？',
            options: ['Third person singular', 'First person singular', 'Second person singular', 'Plural form'],
            answer: 'Third person singular',
            hint: 'A good friend相当于什么代词？',
            explanation: 'A good friend相当于he/she，是第三人称单数，动词加s做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Jerry is ____ than Tom.（更高）',
            answer: 'taller',
            hint: '[My Friends-比较级]（英语三年级-第2单元）',
            explanation: '回顾l2所学：taller是tall的比较级，表示更高的做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u2l4',
        title: 'My Friends Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用My Friends单元的描述词、比较级和友谊表达',
        successCriteria: '①能说出5个描述词 ②能用比较级造句',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾My Friends单元：描述朋友tall/thin/long hair/kind/funny、比较级taller/shorter/bigger、友谊share/help/listen。\n共学四步：\n①对话出题：家长问用英语描述你的好朋友。。\n②孩子应答：孩子应说My friend is tall and kind.。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛描述。\n④快速检测：1.孩子说出5个描述词；2.用比较级造句；3.说一句友谊表达。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾My Friends单元！我们学了描述朋友tall/thin/long hair/kind/funny、比较级taller/shorter/bigger、友谊share/help/listen`, animationType: 'reveal' },
          { type: 'formula', content: `朋友表达公式：
She is + 形容词 → She is tall.
She has + 名词 → She has long hair.
比较级：形容词+er → taller, shorter, bigger`, animationType: 'typewriter', label: 'My Friends公式' },
          { type: 'animation', content: `My Friends单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'My Friends Review', cardRevealConfig: { cards: [ { front: 'Friend', back: '👫', ttsText: 'Friend' }, { front: 'Handshake', back: '🤝', ttsText: 'Handshake' }, { front: 'Heart', back: '❤️', ttsText: 'Heart' }, { front: 'Smile', back: '😊', ttsText: 'Smile' } ] }, ttsNarration: 'My Friends单元回顾：朋友、握手、爱心、微笑' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u2l4q1',
            type: 'choice',
            question: '本单元"My Friends"学了三个主题，以下哪个不属于？',
            options: ['She is tall and kind', 'Tom is taller than Jerry', 'A good friend shares', "Don't run in the hallway"],
            answer: "Don't run in the hallway",
            hint: '哪个不是本单元学的？',
            explanation: "Don't run in the hallway属于Back to School单元的学校规则做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u2l4q2',
            type: 'fill',
            question: 'She is kind and ____. She always makes us laugh.（有趣的）',
            answer: 'funny',
            acceptableAnswers: ['fun', 'interesting'],
            hint: '让人开心的性格',
            explanation: 'funny是有趣的，She is kind and funny表示她善良又有趣做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l4q3',
            type: 'choice',
            question: '"She is tall"和"She has long hair"的区别是？',
            options: ['is goes with adjectives, has goes with nouns', 'is goes with nouns, has goes with adjectives', 'There is no difference', 'is and has can be swapped'],
            answer: 'is goes with adjectives, has goes with nouns',
            hint: 'is和has后面分别接什么？',
            explanation: 'is + 形容词描述状态，has + 名词描述拥有，两者不能互换做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l4q4',
            type: 'drag',
            question: '把比较级拖到正确位置：small → ____',
            answer: 'smaller',
            hint: 'small的比较级怎么变？',
            explanation: 'smaller是small的比较级，一般形容词直接加er做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l4q5',
            type: 'choice',
            question: '【期末真题】选出语法正确的句子？',
            options: ['She has long hair.', 'She is long hair.', 'She have long hair.', 'She has a long hair.'],
            answer: 'She has long hair.',
            hint: '描述拥有什么特征用什么动词？',
            explanation: 'She has long hair正确，用has + 名词描述拥有，hair不可数不用a做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l4q6',
            type: 'fill',
            question: 'A good friend ____ with you and helps you.（分享）',
            answer: 'shares',
            hint: '好朋友会怎样？',
            explanation: 'shares表示分享，A good friend shares with you表示好朋友会和你分享做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l4q7',
            type: 'choice',
            question: '回顾已学：以下哪个是第1单元"Back to School"学的内容？',
            options: ['On Monday, I have English', 'She is tall and kind', 'Tom is taller', 'A good friend shares'],
            answer: 'On Monday, I have English',
            hint: '[Back to School]（英语三年级-第1单元）',
            explanation: 'On Monday, I have English是第1单元课程表的内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      },
      {
        id: 'e3u2l5',
        title: 'My Friends in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在生活中用英语描述朋友和友谊',
        successCriteria: '①能描述一个朋友 ②能说出好朋友会做什么',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把朋友生活化：用英语描述你的好朋友。\n共学四步：\n①对话出题：家长问介绍一个你的好朋友。。\n②孩子应答：孩子应说My friend is... She is kind.。\n③答错引导：若孩子说不出，家长当同学一起描述！扫描课时发音动画复习；让孩子点读课件情景卡；家长指朋友照片边说边描述。\n④快速检测：1.孩子描述一个朋友；2.用比较级说一句；3.说朋友会做什么。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `朋友是生活中最重要的人！用英语描述你的好朋友`, animationType: 'reveal' },
          { type: 'example', content: `场景1：描述朋友 → My friend is tall and kind.
场景2：比较 → Tom is taller than Jerry.
场景3：友谊 → A good friend shares with you.`, animationType: 'bounce', label: 'My Friends在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u2l5q1',
            type: 'choice',
            question: '向妈妈介绍新朋友的外貌，你应该说？',
            options: ['She is tall and has long hair', 'She is a hair', 'She has tall', 'She is long hair'],
            answer: 'She is tall and has long hair',
            hint: '描述外貌用is还是has？',
            explanation: 'She is tall用is+形容词，She has long hair用has+名词，两者结合描述外貌做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l5q2',
            type: 'fill',
            question: 'My brother is ____ than me. He is 10 and I am 8.（更大）',
            answer: 'older',
            acceptableAnswers: ['elder'],
            hint: 'old的比较级',
            explanation: 'older是old的比较级，表示更大/更老的做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l5q3',
            type: 'choice',
            question: '朋友遇到困难时，你应该怎样做？',
            options: ['Help your friend', 'Run away', 'Laugh at your friend', 'Do nothing'],
            answer: 'Help your friend',
            hint: '好朋友应该怎样？',
            explanation: 'A good friend helps you，好朋友应该帮助朋友做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l5q4',
            type: 'drag',
            question: '把词拖到正确位置：I share my toys ____ my friends.（和）',
            answer: 'with',
            hint: '和某人分享用什么介词？',
            explanation: 'share with表示和……分享，I share my toys with my friends做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l5q5',
            type: 'choice',
            question: '【期末真题】小明想告诉别人"我的书包比你的大"，他应该说？',
            options: ['My bag is bigger than yours', 'My bag is big than yours', 'My bag is biggest', 'Your bag is bigger'],
            answer: 'My bag is bigger than yours',
            hint: '比较级用什么句型？',
            explanation: '比较级用形容词+er+than，My bag is bigger than yours正确做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l5q6',
            type: 'fill',
            question: 'We are best ____! We play and study together every day.（朋友）',
            answer: 'friends',
            hint: '最好的朋友',
            explanation: 'best friends表示最好的朋友，friend的复数加s做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u2l5q7',
            type: 'choice',
            question: '结合"Back to School"和"My Friends"，开学时怎样用英语介绍新朋友？',
            options: ['This is my friend. She is in Grade 3 too.', 'This is Grade 3.', 'She is taller.', 'We are friends.'],
            answer: 'This is my friend. She is in Grade 3 too.',
            hint: '[Back to School]（英语三年级-第1单元）',
            explanation: '介绍新朋友时结合两个单元：This is my friend + She is in Grade 3 too做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  },
  {
    id: 'e3u3',
    title: 'Healthy Life',
    subtitle: '健康生活每一天，身体棒棒的',
    order: 3,
    lessons: [
      {
        id: 'e3u3l1',
        title: '健康饮食',
        order: 1,
        teachingMethod: '探究式学习法',
        learningObjective: '我能用Eat more.../Drink.../Eat less...说健康饮食建议',
        successCriteria: '①能说出3条健康饮食建议 ②能用Eat more/less造句',
        iDo: '家长展示健康饮食金字塔，说"Eat more vegetables and fruits. Drink water every day" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起分类健康和不健康食物，用英语讨论饮食 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出健康饮食的建议【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：健康饮食Eat more vegetables（多吃蔬菜）、Drink water（喝水）、Eat less junk food（少吃垃圾食品）。\n共学四步：\n①对话出题：家长吃饭时问该多吃什么？并说Eat more vegetables!。\n②孩子应答：孩子应说Eat more vegetables!。\n③答错引导：若孩子说不出，家长当同学一起吃！扫描课时发音动画听发音；让孩子点读课件句子卡；家长吃饭时边指食物边说英语。\n④快速检测：1.孩子说出3条饮食建议；2.用Eat more造句；3.说少吃什么。',
        funElement: '制作"健康餐盘"，用英语标注每种食物类别',
        gsapAnimations: ['GSAP:食物金字塔构建-pyramidBuild', 'GSAP:健康标记闪烁-healthTag'],
        images: ['IMG:健康饮食金字塔', 'IMG:健康食物卡片'],
        content: [
          { type: 'text', content: 'Eat more vegetables and fruits! 多吃蔬菜和水果！Drink water every day! 每天喝水！Eat less junk food! 少吃垃圾食品！', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: What should we eat to stay healthy?\n小明: Eat more vegetables and fruits!\n妈妈: What about junk food?\n小明: Eat less junk food! Drink more water!', label: '健康饮食对话', animationType: 'reveal' },
          { type: 'example', content: 'Eat more vegetables — 多吃蔬菜\nEat more fruits — 多吃水果\nDrink water — 喝水\nEat less junk food — 少吃垃圾食品\nEat less candy — 少吃糖果', label: '健康饮食建议', animationType: 'bounce' },
          { type: 'tip', content: 'more是"更多"，less是"更少"。Eat more...多吃……，Eat less...少吃……', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '食物金字塔构建，健康标记闪烁的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Food Pyramid', sceneBuildConfig: { sceneName: 'Food Pyramid', elements: [ { id: 'el-0', text: 'Grains', emoji: '🍚', delay: 0, animation: 'bounceIn', ttsText: 'Grains' }, { id: 'el-1', text: 'Vegetables', emoji: '🥦', delay: 0.4, animation: 'popIn', ttsText: 'Vegetables' }, { id: 'el-2', text: 'Fruits', emoji: '🍎', delay: 0.8, animation: 'scaleIn', ttsText: 'Fruits' }, { id: 'el-3', text: 'Meat', emoji: '🍖', delay: 1.2, animation: 'slideIn', ttsText: 'Meat' } ] }, ttsNarration: '食物金字塔：谷物、蔬菜、水果、肉类' } },
          { type: 'tip', content: '本课主要使用探究式学习法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u3l1q1',
            type: 'choice',
            question: '"多吃蔬菜和水果"用英语怎么说？',
            options: ['Eat more vegetables and fruits', 'Eat more candy and cake', 'Drink more soda', 'Eat less vegetables'],
            answer: 'Eat more vegetables and fruits',
            hint: '健康饮食的建议',
            explanation: 'Eat more vegetables and fruits表示多吃蔬菜和水果，是健康饮食建议做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l1q2',
            type: 'fill',
            question: '____ water every day to stay healthy.（喝）',
            answer: 'Drink',
            hint: '喝水用什么动词？',
            explanation: 'Drink water表示喝水，每天喝水保持健康做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l1q3',
            type: 'drag',
            question: '把建议拖到正确位置：Eat ____ junk food.（少吃）',
            answer: 'less',
            hint: '少吃垃圾食品',
            explanation: 'Eat less junk food表示少吃垃圾食品，less表示更少做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l1q4',
            type: 'choice',
            question: '"Eat more vegetables"和"Eat less junk food"中more和less的意思分别是？',
            options: ['更多和更少', '更少和更多', '更好和更差', '更快和更慢'],
            answer: '更多和更少',
            hint: 'more和less分别是什么意思？',
            explanation: 'more表示更多，less表示更少，Eat more健康食物，Eat less不健康食物做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l1q5',
            type: 'fill',
            question: 'We should eat ____ candy to stay healthy.（更少的）',
            answer: 'less',
            hint: '糖果应该多吃还是少吃？',
            explanation: 'less表示更少的，Eat less candy表示少吃糖果做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l1q6',
            type: 'choice',
            question: '【期末真题】"Eat more vegetables and fruits."中vegetables是可数名词复数，以下哪个也是可数名词复数？',
            options: ['fruits', 'water', 'milk', 'rice'],
            answer: 'fruits',
            hint: '哪个词可以数数量？',
            explanation: 'fruits是可数名词复数，water/milk/rice是不可数名词做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：She ____ long hair and big eyes.（有）',
            answer: 'has',
            hint: '[My Friends]（英语三年级-第2单元）',
            explanation: '回顾u2所学：She has long hair表示她有长头发做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u3l2',
        title: '运动',
        order: 2,
        teachingMethod: 'TPR全身反应法',
        learningObjective: '我能用I play basketball/ride a bike说运动',
        successCriteria: '①能说出3项运动的英语 ②能用I play/ride...说运动',
        iDo: '家长边做运动动作边说"I play basketball. I ride a bike. I do jumping jacks" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起做运动，边做边说出运动名称 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出自己喜欢的运动和运动频率【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：运动I play basketball.（打篮球）、I ride a bike.（骑车）、I do jumping jacks.（开合跳）。\n共学四步：\n①对话出题：家长问你喜欢什么运动？并说I play basketball.。\n②孩子应答：孩子应说I ride a bike.等。\n③答错引导：若孩子说不出，家长当同学一起动！扫描课时发音动画听发音；让孩子点读课件句子卡；家长边做运动动作边说英语。\n④快速检测：1.孩子说出3项运动；2.用I play...造句；3.说出喜欢的运动。',
        funElement: '玩"运动模仿秀"，看谁能做出最多的运动动作并说出英语',
        gsapAnimations: ['GSAP:运动人物动画-sportFigure', 'GSAP:汗水飞溅-sweatDrop'],
        images: ['IMG:各种运动场景', 'IMG:运动词汇卡片'],
        content: [
          { type: 'text', content: 'I play basketball. 我打篮球。I ride a bike. 我骑自行车。I do jumping jacks. 我做开合跳。运动让身体更健康！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What sports do you like?\n小红: I like playing basketball!\n小明: I ride a bike every day.\n小红: Let\'s do sports together!', label: '运动对话', animationType: 'reveal' },
          { type: 'example', content: 'Play basketball — 打篮球\nPlay football — 踢足球\nRide a bike — 骑自行车\nJump rope — 跳绳\nDo sports — 做运动\nSwim — 游泳', label: '运动词汇', animationType: 'bounce' },
          { type: 'tip', content: '球类运动用play + 球名，如play basketball，注意球类前面不加the！', label: '语法提示', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用TPR全身反应法：用身体动作配合语言，边做边说加深记忆', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u3l2q1',
            type: 'choice',
            question: '"打篮球"用英语怎么说？',
            options: ['Play basketball', 'Play football', 'Play tennis', 'Play volleyball'],
            answer: 'Play basketball',
            hint: '用手投球进篮筐的运动',
            explanation: 'Play basketball表示打篮球，basketball是篮球做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l2q2',
            type: 'fill',
            question: 'I ____ sports every day.（做运动）',
            answer: 'do',
            acceptableAnswers: ['play'],
            hint: '做运动用什么动词？',
            explanation: 'do sports表示做运动，do是做的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l2q3',
            type: 'flashcard',
            question: '看跳绳的图片，说出英语',
            answer: 'Jump rope',
            hint: '摇绳子跳过去',
            explanation: 'Jump rope表示跳绳，是很好的有氧运动做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l2q4',
            type: 'choice',
            question: '"play basketball"中basketball前面不加the，因为？',
            options: ['球类运动前不加the', '所有名词前都不加the', 'basketball是专有名词', 'play后面不加the'],
            answer: '球类运动前不加the',
            hint: '球类运动的冠词规则是什么？',
            explanation: '球类运动前用play + 球名，不加the，如play basketball/football做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l2q5',
            type: 'fill',
            question: 'I ____ a bike to school every day. It\'s good exercise.（骑）',
            answer: 'ride',
            hint: '骑自行车用什么动词？',
            explanation: 'ride a bike表示骑自行车，ride是骑的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l2q6',
            type: 'choice',
            question: '【期末真题】"I play football every day."中every day的意思是？',
            options: ['每天', '某一天', '一天', '那一天'],
            answer: '每天',
            hint: 'every day是什么意思？',
            explanation: 'every day表示每天，表示经常性的动作做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Eat ____ vegetables to stay healthy.（更多的）',
            answer: 'more',
            hint: '[Healthy Life-健康饮食]（英语三年级-第3单元）',
            explanation: '回顾l1所学：Eat more vegetables表示多吃蔬菜保持健康做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u3l3',
        title: '好习惯',
        order: 3,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用I brush.../wash.../sleep...说健康好习惯',
        successCriteria: '①能说出3个好习惯的英语 ②能用I...说自己的好习惯',
        iDo: '家长说"I brush my teeth twice a day. I wash my hands before meals. I sleep early" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起列出好习惯清单，用英语说出每条好习惯 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出自己的好习惯，并制定改进计划【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：好习惯I brush my teeth twice a day.（每天刷两次牙）、I wash my hands before meals.（饭前洗手）、I sleep early.（早睡）。\n共学四步：\n①对话出题：家长问饭前要做什么？并说I wash my hands.。\n②孩子应答：孩子应说I wash my hands before meals.。\n③答错引导：若孩子说不出，家长当同学一起做！扫描课时发音动画听发音；让孩子点读课件句子卡；家长边做洗手刷牙动作边说英语。\n④快速检测：1.孩子说出3个好习惯；2.用I...造句；3.说一个自己的好习惯。',
        funElement: '制作"好习惯打卡表"，每天用英语勾选完成的好习惯',
        gsapAnimations: ['GSAP:打卡勾选-checkMark', 'GSAP:习惯星星累积-starStack'],
        images: ['IMG:好习惯场景', 'IMG:好习惯打卡表'],
        content: [
          { type: 'text', content: 'I brush my teeth twice a day. 我每天刷两次牙。I wash my hands before meals. 我饭前洗手。I sleep early. 我早睡。', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: What good habits do you have?\n小明: I brush my teeth twice a day!\n妈妈: Good! What else?\n小明: I wash my hands before meals and go to bed early!', label: '好习惯对话', animationType: 'reveal' },
          { type: 'example', content: 'Brush teeth twice a day — 每天刷两次牙\nWash hands before meals — 饭前洗手\nGo to bed early — 早睡\nEat breakfast — 吃早餐\nExercise every day — 每天运动', label: '好习惯表达', animationType: 'bounce' },
          { type: 'tip', content: 'twice a day一天两次，once a day一天一次。频率表达很重要！', label: '词汇提示', animationType: 'pulse' },
          { type: 'animation', content: '打卡勾选，习惯星星累积的动画', animationType: 'bounce', animationConfig: { sceneType: 'timeline', title: 'Good Habits', timelineConfig: { steps: [ { text: '1. Brush teeth', emoji: '🪥', ttsText: 'Brush teeth', duration: 1.2 }, { text: '2. Eat well', emoji: '🥗', ttsText: 'Eat well', duration: 1.2 }, { text: '3. Exercise', emoji: '🏃', ttsText: 'Exercise', duration: 1.2 }, { text: '4. Sleep early', emoji: '😴', ttsText: 'Sleep early', duration: 1.2 } ] }, ttsNarration: '好习惯：刷牙、好好吃饭、运动、早睡' } },
          { type: 'tip', content: '本课主要使用EDI直接教学：家长示范-亲子共练-孩子独立完成三步闭环', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u3l3q1',
            type: 'choice',
            question: '"饭前洗手"用英语怎么说？',
            options: ['Wash hands before meals', 'Wash hands after meals', 'Don\'t wash hands', 'Wash face before meals'],
            answer: 'Wash hands before meals',
            hint: '什么时候洗手？',
            explanation: 'Wash hands before meals表示饭前洗手，before meals是饭前做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l3q2',
            type: 'fill',
            question: 'I brush my teeth ____ a day.（两次）',
            answer: 'twice',
            acceptableAnswers: ['two times'],
            hint: '一天刷两次牙',
            explanation: 'twice a day表示一天两次，once a day是一次做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l3q3',
            type: 'drag',
            question: '把习惯拖到正确位置：早睡 = Go to bed ____',
            answer: 'early',
            hint: '早睡的"早"',
            explanation: 'Go to bed early表示早睡，early是早的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l3q4',
            type: 'choice',
            question: '"twice a day"和"once a day"分别表示？',
            options: ['一天两次和一天一次', '一天一次和一天两次', '两天一次和一天一次', '一天两次和两天一次'],
            answer: '一天两次和一天一次',
            hint: 'twice和once分别是什么意思？',
            explanation: 'twice表示两次，once表示一次，twice a day一天两次，once a day一天一次做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l3q5',
            type: 'fill',
            question: 'I wash my hands ____ meals every day.（在……之前）',
            answer: 'before',
            hint: '饭前洗手，"之前"用什么词？',
            explanation: 'before表示在……之前，Wash hands before meals表示饭前洗手做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l3q6',
            type: 'choice',
            question: '【期末真题】"I brush my teeth twice a day."中twice a day表示刷牙的？',
            options: ['frequency', 'time', 'place', 'method'],
            answer: 'frequency',
            hint: 'twice a day描述的是什么？',
            explanation: 'twice a day表示一天两次，描述的是动作发生的频率做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：I ____ basketball every day.（打）',
            answer: 'play',
            hint: '[Healthy Life-运动]（英语三年级-第3单元）',
            explanation: '回顾l2所学：play basketball表示打篮球，球类运动用play做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u3l4',
        title: 'Healthy Life Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用Healthy Life单元的饮食、运动和好习惯表达',
        successCriteria: '①能说出6条健康生活建议 ②能说出3项运动',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾Healthy Life单元：饮食Eat more vegetables/Drink water、运动Play basketball/Ride a bike、好习惯Brush teeth/Wash hands/Go to bed early。\n共学四步：\n①对话出题：家长问怎样才健康？用英语说几条。。\n②孩子应答：孩子应说Eat more vegetables. Drink water.。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子说出6条建议；2.说3项运动；3.说一个好习惯。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Healthy Life单元！我们学了健康饮食Eat more vegetables/Drink water/Eat less junk food、运动Play basketball/Ride a bike、好习惯Brush teeth twice a day/Wash hands/Go to bed early`, animationType: 'reveal' },
          { type: 'formula', content: `健康表达公式：
Eat more + 健康食物 → Eat more vegetables.
Eat less + 不健康食物 → Eat less junk food.
频率：twice a day一天两次`, animationType: 'typewriter', label: 'Healthy Life公式' },
          { type: 'animation', content: `Healthy Life单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Healthy Life Review', cardRevealConfig: { cards: [ { front: 'Healthy', back: '💪', ttsText: 'Healthy' }, { front: 'Eat well', back: '🥗', ttsText: 'Eat well' }, { front: 'Exercise', back: '🏃', ttsText: 'Exercise' }, { front: 'Sleep', back: '😴', ttsText: 'Sleep' } ] }, ttsNarration: 'Healthy Life单元回顾：健康、饮食、运动、睡眠' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u3l4q1',
            type: 'choice',
            question: '本单元"Healthy Life"学了三个主题，以下哪个不属于？',
            options: ['Eat more vegetables', 'Play basketball', 'Brush teeth twice a day', 'I am in Grade 3'],
            answer: 'I am in Grade 3',
            hint: '哪个不是本单元学的？',
            explanation: 'I am in Grade 3属于Back to School单元，不属于Healthy Life做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l4q2',
            type: 'fill',
            question: 'To stay healthy, we should ____ water every day.（喝）',
            answer: 'Drink',
            hint: '每天喝什么保持健康？',
            explanation: 'Drink water every day表示每天喝水，保持健康做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l4q3',
            type: 'choice',
            question: '"Eat more vegetables"和"Play basketball"都属于健康生活，因为？',
            options: ['Both make the body healthier', 'Both are about eating', 'Both are about sports', 'They are not related'],
            answer: 'Both make the body healthier',
            hint: '它们的共同目的是什么？',
            explanation: '健康饮食和运动都让身体更健康，是健康生活的两个方面做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l4q4',
            type: 'drag',
            question: '把词拖到正确位置：I brush my teeth ____ a day.（两次）',
            answer: 'twice',
            hint: '一天刷几次牙？',
            explanation: 'twice a day表示一天两次，每天刷两次牙是好习惯做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l4q5',
            type: 'choice',
            question: '【期末真题】选出语法正确的句子？',
            options: ['I play basketball every day.', 'I play the basketball every day.', 'I play a basketball every day.', 'I playing basketball every day.'],
            answer: 'I play basketball every day.',
            hint: '球类运动前面加不加冠词？',
            explanation: '球类运动前用play + 球名，不加the或a，I play basketball正确做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l4q6',
            type: 'fill',
            question: 'Go to bed ____ and get up early is a good habit.（早）',
            answer: 'early',
            hint: '早睡早起是什么习惯？',
            explanation: 'Go to bed early表示早睡，早睡早起是好习惯做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l4q7',
            type: 'choice',
            question: '回顾已学：以下哪个是第2单元"My Friends"学的内容？',
            options: ['Tom is taller than Jerry', 'Eat more vegetables', 'Play basketball', 'Brush teeth twice a day'],
            answer: 'Tom is taller than Jerry',
            hint: '[My Friends]（英语三年级-第2单元）',
            explanation: 'Tom is taller than Jerry是比较级，属于My Friends单元做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      },
      {
        id: 'e3u3l5',
        title: 'Healthy Life in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在生活中用英语说健康饮食和好习惯',
        successCriteria: '①能说出健康饮食建议 ②能说出自己的好习惯',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把健康生活化：用英语说出你的健康生活方式。\n共学四步：\n①对话出题：家长问你的健康好习惯是什么？。\n②孩子应答：孩子应说I brush my teeth twice a day.等。\n③答错引导：若孩子说不出，家长当同学一起说！扫描课时发音动画复习；让孩子点读课件情景卡；家长结合孩子生活习惯边说边做。\n④快速检测：1.孩子说饮食建议；2.说好习惯；3.说喜欢的运动。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `健康生活从好习惯开始！用英语说出你的健康生活方式`, animationType: 'reveal' },
          { type: 'example', content: `场景1：健康饮食 → Eat more vegetables! Drink water!
场景2：运动 → I play basketball every day.
场景3：好习惯 → I brush my teeth twice a day.`, animationType: 'bounce', label: 'Healthy Life在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u3l5q1',
            type: 'choice',
            question: '在餐厅点餐时，想选择健康的食物，你应该说？',
            options: ['I\'d like some vegetables and fruits', 'I\'d like junk food', 'I\'d like candy', 'I don\'t want food'],
            answer: 'I\'d like some vegetables and fruits',
            hint: '怎样用英语点健康食物？',
            explanation: 'I\'d like some vegetables and fruits表示我想要蔬菜和水果，是健康选择做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l5q2',
            type: 'fill',
            question: 'Every morning, I ____ my teeth before breakfast.（刷）',
            answer: 'brush',
            hint: '早上起来先做什么？',
            explanation: 'brush my teeth表示刷牙，每天早上饭前刷牙是好习惯做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l5q3',
            type: 'choice',
            question: '朋友想喝可乐，你建议他喝更健康的水，应该说？',
            options: ['Drink water! It\'s healthier.', 'Drink cola! It\'s good.', 'Don\'t drink anything.', 'I don\'t care.'],
            answer: 'Drink water! It\'s healthier.',
            hint: '怎样用英语建议健康选择？',
            explanation: 'Drink water! It\'s healthier.表示喝水更健康，是给朋友的健康建议做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l5q4',
            type: 'drag',
            question: '把词拖到正确位置：I ride a ____ to school. It\'s good exercise.（自行车）',
            answer: 'bike',
            hint: '骑什么上学？',
            explanation: 'ride a bike表示骑自行车，是很好的运动方式做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l5q5',
            type: 'choice',
            question: '【期末真题】妈妈问你每天刷几次牙，你应该回答？',
            options: ['I brush my teeth twice a day', 'I brush my tooth two a day', 'I brush my teeth two a day', 'I brush my teeth twice everyday'],
            answer: 'I brush my teeth twice a day',
            hint: '频率表达用什么？',
            explanation: 'twice a day表示一天两次，是正确的频率表达方式做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l5q6',
            type: 'fill',
            question: 'We should eat ____ junk food. It\'s bad for our health.（更少的）',
            answer: 'less',
            hint: '垃圾食品应该怎样？',
            explanation: 'eat less junk food表示少吃垃圾食品，对健康不好做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u3l5q7',
            type: 'choice',
            question: '结合"My Friends"和"Healthy Life"，怎样用英语邀请朋友一起运动？',
            options: ['Let\'s play basketball together! It\'s healthy.', 'You are taller than me.', 'Eat more vegetables.', 'She is kind.'],
            answer: 'Let\'s play basketball together! It\'s healthy.',
            hint: '[My Friends]（英语三年级-第2单元）',
            explanation: '邀请朋友一起运动结合了友谊和健康：Let\'s play basketball + It\'s healthy做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  },
  {
    id: 'e3u4',
    title: 'Nature',
    subtitle: '美丽的大自然，我们要保护',
    order: 4,
    lessons: [
      {
        id: 'e3u4l1',
        title: '自然景观',
        order: 1,
        teachingMethod: '视觉化教学法',
        learningObjective: '我能说出Mountains/Rivers/Forests/Oceans等自然景观',
        successCriteria: '①能说出4个自然景观英语 ②能说出地球Earth',
        iDo: '家长展示自然景观图片，说"Mountains, rivers, forests, oceans — our beautiful Earth" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起欣赏自然景观图片，用英语描述看到的景色 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语描述一种自然景观【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：自然景观Mountains（山脉）、Rivers（河流）、Forests（森林）、Oceans（海洋）、Earth（地球）。\n共学四步：\n①对话出题：家长问地球有哪些自然景观？并说Mountains!。\n②孩子应答：孩子应说Mountains, rivers!。\n③答错引导：若孩子说不出，家长当同学一起看图！扫描课时发音动画听发音；让孩子点读课件词汇卡；家长结合图片或纪录片边指边说英语。\n④快速检测：1.孩子说出4个景观；2.说地球英语；3.说最喜欢的景观。',
        funElement: '画"自然长卷"，用英语标注山川河流',
        gsapAnimations: ['GSAP:山峦层叠-mountainStack', 'GSAP:河流流淌-riverFlow'],
        images: ['IMG:自然景观插图', 'IMG:自然词汇卡片'],
        content: [
          { type: 'text', content: 'Mountains山脉、Rivers河流、Forests森林、Oceans海洋——这是我们美丽的地球Earth！大自然真壮观！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Have you seen the mountains?\n小红: Yes! They are so tall and beautiful!\n小明: I love the ocean. It\'s so big and blue.\n小红: The forest is full of trees!', label: '自然景观对话', animationType: 'reveal' },
          { type: 'example', content: 'Mountains — 山脉\nRivers — 河流\nForests — 森林\nOceans — 海洋\nEarth — 地球\nSky — 天空', label: '自然景观词汇', animationType: 'bounce' },
          { type: 'tip', content: 'ocean是海洋，比sea海更大。太平洋是ocean，近海是sea！', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '山峦层叠，河流流淌的自然景观动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Nature', sceneBuildConfig: { sceneName: 'Nature', elements: [ { id: 'el-0', text: 'Mountain', emoji: '⛰️', delay: 0, animation: 'bounceIn', ttsText: 'Mountain' }, { id: 'el-1', text: 'River', emoji: '🏞️', delay: 0.4, animation: 'slideIn', ttsText: 'River' }, { id: 'el-2', text: 'Forest', emoji: '🌳', delay: 0.8, animation: 'scaleIn', ttsText: 'Forest' }, { id: 'el-3', text: 'Sky', emoji: '☁️', delay: 1.2, animation: 'fadeIn', ttsText: 'Sky' } ] }, ttsNarration: '自然景观：山、河、森林、天空' } },
          { type: 'tip', content: '本课主要使用视觉化教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u4l1q1',
            type: 'choice',
            question: '"山脉"用英语怎么说？',
            options: ['Mountains', 'Rivers', 'Forests', 'Oceans'],
            answer: 'Mountains',
            hint: '高高的自然地形',
            explanation: 'Mountains是山脉，高耸的自然地形做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l1q2',
            type: 'fill',
            question: 'The ____ is very deep and blue.（海洋）',
            answer: 'ocean',
            acceptableAnswers: ['sea'],
            hint: '最大的水域',
            explanation: 'ocean是海洋，地球上最大的水域做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l1q3',
            type: 'flashcard',
            question: '看森林的图片，说出英语名称',
            answer: 'Forest',
            hint: '很多树的地方',
            explanation: 'Forest是森林，有很多树木的地方做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l1q4',
            type: 'choice',
            question: 'ocean和sea的区别是？',
            options: ['ocean比sea更大', 'sea比ocean更大', '它们完全一样', 'ocean是河sea是湖'],
            answer: 'ocean比sea更大',
            hint: '哪个水域更大？',
            explanation: 'ocean是海洋，比sea海更大，太平洋是ocean，近海是sea做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l1q5',
            type: 'fill',
            question: 'The ____ is full of tall trees and animals. It\'s green and beautiful.（森林）',
            answer: 'forest',
            acceptableAnswers: ['woods'],
            hint: '很多树的地方',
            explanation: 'forest是森林，full of tall trees and animals表示充满高大的树木和动物做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l1q6',
            type: 'choice',
            question: '【期末真题】"Mountains, rivers, forests, oceans"都属于哪一类词汇？',
            options: ['自然景观', '职业', '食物', '学校用品'],
            answer: '自然景观',
            hint: '它们描述的是什么？',
            explanation: 'Mountains山脉、Rivers河流、Forests森林、Oceans海洋都属于自然景观做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Eat ____ vegetables to stay healthy.（更多的）',
            answer: 'more',
            hint: '[Healthy Life]（英语三年级-第3单元）',
            explanation: '回顾u3所学：Eat more vegetables表示多吃蔬菜保持健康做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u4l2',
        title: '环境保护',
        order: 2,
        teachingMethod: '探究式学习法',
        learningObjective: '我能用Don\'t litter/Save water/Plant trees说环保行动',
        successCriteria: '①能说出3个环保行动的英语 ②能用Don\'t...说环保建议',
        iDo: '家长说"We should protect the Earth. Don\'t litter. Save water. Plant trees" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起讨论环保行动，用英语说出保护环境的方法 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出3种保护环境的方法【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：环保Don\'t litter（不要乱扔垃圾）、Save water（节约用水）、Plant trees（种树）。\n共学四步：\n①对话出题：家长问怎么保护地球？并说Don\'t litter!。\n②孩子应答：孩子应说Don\'t litter! Save water!。\n③答错引导：若孩子说不出，家长当同学一起做环保！扫描课时发音动画听发音；让孩子点读课件句子卡；家长结合生活环保行为边做边说。\n④快速检测：1.孩子说出3个环保行动；2.用Don\'t...造句；3.说Save water。',
        funElement: '制作"环保小卫士"徽章，用英语写环保口号',
        gsapAnimations: ['GSAP:地球旋转-earthSpin', 'GSAP:回收标志旋转-recycleSpin'],
        images: ['IMG:环保场景插图', 'IMG:环保行动卡片'],
        content: [
          { type: 'text', content: 'We should protect the Earth! 我们应该保护地球！Don\'t litter不要乱扔垃圾，Save water节约用水，Plant trees种树', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: How can we protect the Earth?\n小红: Don\'t litter! Put trash in the bin.\n小明: Save water! Turn off the tap.\n小红: Plant trees! Trees make the air clean.', label: '环保对话', animationType: 'reveal' },
          { type: 'example', content: 'Don\'t litter — 不要乱扔垃圾\nSave water — 节约用水\nPlant trees — 种树\nRecycle — 回收\nTurn off the tap — 关水龙头\nProtect the Earth — 保护地球', label: '环保行动词汇', animationType: 'bounce' },
          { type: 'tip', content: 'protect是"保护"的意思，protect the Earth保护地球，我们每个人都能做到！', label: '词汇提示', animationType: 'pulse' },
          { type: 'animation', content: '地球旋转，回收标志旋转的环保动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Protect Earth', sceneBuildConfig: { sceneName: 'Protect Earth', elements: [ { id: 'el-0', text: 'Earth', emoji: '🌍', delay: 0, animation: 'scaleIn', ttsText: 'Earth' }, { id: 'el-1', text: 'Recycle', emoji: '♻️', delay: 0.4, animation: 'popIn', ttsText: 'Recycle' }, { id: 'el-2', text: 'Tree', emoji: '🌳', delay: 0.8, animation: 'bounceIn', ttsText: 'Tree' }, { id: 'el-3', text: 'Water', emoji: '💧', delay: 1.2, animation: 'fadeIn', ttsText: 'Water' } ] }, ttsNarration: '环保：地球、回收、树木、水' } },
          { type: 'tip', content: '本课主要使用探究式学习法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u4l2q1',
            type: 'choice',
            question: '"不要乱扔垃圾"用英语怎么说？',
            options: ["Don't litter", "Don't run", "Don't talk", "Don't eat"],
            answer: "Don't litter",
            hint: '乱扔垃圾用哪个词？',
            explanation: "Don't litter表示不要乱扔垃圾，litter是乱扔垃圾做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u4l2q2',
            type: 'fill',
            question: '____ water, save the Earth!（节约）',
            answer: 'Save',
            hint: '节约用水怎么说？',
            explanation: 'Save water表示节约用水，save是节约/拯救做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l2q3',
            type: 'drag',
            question: '把行动拖到正确位置：种树 = ____ trees',
            answer: 'Plant',
            hint: '种树用什么动词？',
            explanation: 'Plant trees表示种树，plant是种植的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l2q4',
            type: 'choice',
            question: '"Don\'t litter"和"Save water"都是环保行动，它们的共同点是？',
            options: ['都是保护地球的行动', '都是关于水的', '都是关于树的', '没有共同点'],
            answer: '都是保护地球的行动',
            hint: '它们的共同目的是什么？',
            explanation: "Don't litter不乱扔垃圾和Save water节约用水都是保护地球的行动做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u4l2q5',
            type: 'fill',
            question: '____ off the tap when you brush your teeth.（关）',
            answer: 'Turn',
            hint: '关水龙头用什么动词？',
            explanation: 'Turn off the tap表示关水龙头，节约用水从身边做起做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l2q6',
            type: 'choice',
            question: '【期末真题】"We should protect the Earth."中should的意思是？',
            options: ['应该', '想要', '能', '必须'],
            answer: '应该',
            hint: 'should是什么情态动词？',
            explanation: 'should表示应该，We should protect the Earth表示我们应该保护地球做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Mountains and ____ are beautiful natural landscapes.（河流）',
            answer: 'Rivers',
            hint: '[Nature-自然景观]（英语三年级-第4单元）',
            explanation: '回顾l1所学：Mountains and Rivers是山脉和河流，都是自然景观做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u4l3',
        title: '植物生长',
        order: 3,
        teachingMethod: '探究式学习法',
        learningObjective: '我能用seed/sprout/plant/flower说出植物生长过程',
        successCriteria: '①能说出4个生长阶段英语 ②能按顺序说植物生长',
        iDo: '家长展示植物生长过程，说"A seed grows into a sprout, then a plant, then a flower" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起种一颗种子，用英语描述植物生长的过程 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出植物生长的步骤【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：植物生长seed（种子）→sprout（发芽）→plant（植物）→flower（花），需要水和阳光。\n共学四步：\n①对话出题：家长问种子怎么变成花？并说A seed grows into a sprout.。\n②孩子应答：孩子应说Then a plant, then a flower.。\n③答错引导：若孩子说不出，家长当同学一起种！扫描课时发音动画听发音；让孩子点读课件词汇卡；家长结合种花经历边说边比划。\n④快速检测：1.孩子说出4个生长阶段；2.按顺序说生长过程；3.说植物需要什么。',
        funElement: '画"植物生长日记"，用英语标注每个阶段',
        gsapAnimations: ['GSAP:种子发芽-sproutGrow', 'GSAP:花朵绽放-flowerBloom'],
        images: ['IMG:植物生长过程图', 'IMG:植物生长卡片'],
        content: [
          { type: 'text', content: 'A seed grows into a sprout, then a plant, then a flower. 种子发芽，长成植物，然后开花。植物生长需要种子、水和阳光！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: How does a plant grow?\n小红: First, you need a seed.\n小明: Then?\n小红: Add water and sunlight. It grows into a sprout, then a plant, then a flower!', label: '植物生长对话', animationType: 'reveal' },
          { type: 'example', content: 'Seed — 种子\nSprout — 芽/幼苗\nPlant — 植物\nFlower — 花\nWater — 水\nSunlight — 阳光', label: '植物生长词汇', animationType: 'bounce' },
          { type: 'tip', content: 'grows into表示"长成"，A grows into B就是A长成B的意思', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '种子发芽，花朵绽放的植物生长动画', animationType: 'bounce', animationConfig: { sceneType: 'timeline', title: 'Plant Growth', timelineConfig: { steps: [ { text: '1. Seed', emoji: '🌱', ttsText: 'Seed', duration: 1.5 }, { text: '2. Sprout', emoji: '🌿', ttsText: 'Sprout', duration: 1.5 }, { text: '3. Flower', emoji: '🌸', ttsText: 'Flower', duration: 1.5 } ] }, ttsNarration: '植物生长：种子、发芽、开花' } },
          { type: 'tip', content: '本课主要使用探究式学习法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u4l3q1',
            type: 'choice',
            question: '植物生长首先需要什么？',
            options: ['Seed, water, and sunlight', 'Candy and toys', 'Books and pencils', 'TV and games'],
            answer: 'Seed, water, and sunlight',
            hint: '植物生长的三要素',
            explanation: '植物生长需要种子seed、水water和阳光sunlight做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l3q2',
            type: 'fill',
            question: 'A ____ grows into a plant.（种子）',
            answer: 'seed',
            hint: '种在土里的小东西',
            explanation: 'seed是种子，种子在土里发芽长成植物做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l3q3',
            type: 'drag',
            question: '把阶段拖到正确位置：种子→发芽→长叶→____',
            answer: 'Flower',
            hint: '植物最后开出什么？',
            explanation: '植物生长过程：种子seed→发芽sprout→长叶leaves→开花flower做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l3q4',
            type: 'choice',
            question: '"A seed grows into a sprout."中grows into的意思是？',
            options: ['长成', '变成', '看起来像', '属于'],
            answer: '长成',
            hint: 'grows into表示什么？',
            explanation: 'grows into表示长成，A grows into B就是A长成B的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l3q5',
            type: 'fill',
            question: 'Plants need ____, water, and sunlight to grow.（种子）',
            answer: 'seeds',
            hint: '植物生长首先需要什么？',
            explanation: 'seeds是种子，植物生长需要种子、水和阳光做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l3q6',
            type: 'choice',
            question: '【期末真题】植物生长的正确顺序是？',
            options: ['Seed → Sprout → Plant → Flower', 'Flower → Seed → Sprout → Plant', 'Sprout → Seed → Flower → Plant', 'Plant → Flower → Seed → Sprout'],
            answer: 'Seed → Sprout → Plant → Flower',
            hint: '植物从什么开始生长？',
            explanation: '植物生长顺序：种子seed→发芽sprout→长成植物plant→开花flower做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Don\'t ____! Put trash in the bin.（乱扔垃圾）',
            answer: 'litter',
            hint: '[Nature-环境保护]（英语三年级-第4单元）',
            explanation: '回顾l2所学：Don\'t litter表示不要乱扔垃圾做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u4l4',
        title: 'Nature Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用Nature单元的自然景观、环保和植物生长',
        successCriteria: '①能说出4个自然景观 ②能说出3个环保行动',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾Nature单元：自然景观Mountains/Rivers/Forests/Oceans、环保Don\'t litter/Save water/Plant trees、植物生长Seed/Sprout/Flower。\n共学四步：\n①对话出题：家长问用英语说几个自然景观。。\n②孩子应答：孩子应说Mountains and rivers!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子说出4个景观；2.说3个环保行动；3.说植物生长过程。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Nature单元！我们学了自然景观Mountains/Rivers/Forests/Oceans、环境保护Don't litter/Save water/Plant trees、植物生长Seed/Sprout/Flower`, animationType: 'reveal' },
          { type: 'formula', content: `自然表达公式：
We should protect the Earth.
Don't litter! Save water! Plant trees!
A seed grows into a sprout, then a plant, then a flower.`, animationType: 'typewriter', label: 'Nature公式' },
          { type: 'animation', content: `Nature单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Nature Review', cardRevealConfig: { cards: [ { front: 'Mountain', back: '⛰️', ttsText: 'Mountain' }, { front: 'River', back: '🏞️', ttsText: 'River' }, { front: 'Tree', back: '🌳', ttsText: 'Tree' }, { front: 'Earth', back: '🌍', ttsText: 'Earth' } ] }, ttsNarration: 'Nature单元回顾：山、河、树、地球' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u4l4q1',
            type: 'choice',
            question: '本单元"Nature"学了三个主题，以下哪个不属于？',
            options: ['Mountains and Rivers', "Don't litter", 'Seed grows into a flower', 'She is tall and kind'],
            answer: 'She is tall and kind',
            hint: '哪个不是本单元学的？',
            explanation: 'She is tall and kind属于My Friends单元，不属于Nature做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l4q2',
            type: 'fill',
            question: 'We should ____ the Earth. It\'s our home.（保护）',
            answer: 'protect',
            hint: '保护地球用什么动词？',
            explanation: 'protect the Earth表示保护地球，protect是保护的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l4q3',
            type: 'choice',
            question: '"Don\'t litter"和"Plant trees"都属于环保行动，因为？',
            options: ['Both protect the natural environment', 'Both are about plants', 'Both are about water', 'They are not related'],
            answer: 'Both protect the natural environment',
            hint: '它们的共同目的是什么？',
            explanation: "Don't litter不乱扔垃圾和Plant trees种树都保护了自然环境做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u4l4q4',
            type: 'drag',
            question: '把词拖到正确位置：A seed grows into a ____, then a plant, then a flower.（幼苗）',
            answer: 'sprout',
            hint: '种子发芽后叫什么？',
            explanation: 'sprout是幼苗/芽，种子发芽后先长成幼苗做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l4q5',
            type: 'choice',
            question: '【期末真题】选出语法正确的句子？',
            options: ['We should protect the Earth.', 'We should protects the Earth.', 'We should protecting the Earth.', 'We should protected the Earth.'],
            answer: 'We should protect the Earth.',
            hint: 'should后面跟什么形式？',
            explanation: 'should后面跟动词原形，We should protect正确做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l4q6',
            type: 'fill',
            question: 'Save ____! Turn off the tap when you don\'t need water.（水）',
            answer: 'water',
            hint: '节约什么资源？',
            explanation: 'Save water表示节约用水，关水龙头是节约用水的好方法做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l4q7',
            type: 'choice',
            question: '回顾已学：以下哪个是第3单元"Healthy Life"学的内容？',
            options: ['Eat more vegetables', 'Mountains and Rivers', "Don't litter", 'Seed and sprout'],
            answer: 'Eat more vegetables',
            hint: '[Healthy Life]（英语三年级-第3单元）',
            explanation: 'Eat more vegetables是第3单元健康饮食的内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      },
      {
        id: 'e3u4l5',
        title: 'Nature in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在生活中用英语说自然景观和环保行动',
        successCriteria: '①能说出自然景观 ②能说出环保行动',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把自然生活化：保护环境，从身边小事做起。\n共学四步：\n①对话出题：家长问你能为地球做什么？。\n②孩子应答：孩子应说I can save water.等。\n③答错引导：若孩子说不出，家长当同学一起做！扫描课时发音动画复习；让孩子点读课件情景卡；家长结合生活环保行为边做边说。\n④快速检测：1.孩子说自然景观；2.说环保行动；3.说Save water。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `大自然是我们的家园！保护环境，从身边小事做起`, animationType: 'reveal' },
          { type: 'example', content: `场景1：自然景观 → Mountains are tall and beautiful!
场景2：环保 → Don't litter! Save water! Plant trees!
场景3：植物生长 → A seed grows into a flower.`, animationType: 'bounce', label: 'Nature在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u4l5q1',
            type: 'choice',
            question: '在公园看到有人乱扔垃圾，你应该用英语提醒他？',
            options: ["Don't litter! Put trash in the bin.", "Throw it anywhere.", "That's OK.", "Pick it up later."],
            answer: "Don't litter! Put trash in the bin.",
            hint: '怎样用英语提醒别人不要乱扔垃圾？',
            explanation: "Don't litter! Put trash in the bin.表示不要乱扔垃圾，把垃圾扔进垃圾桶做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u4l5q2',
            type: 'fill',
            question: 'I ____ trees every spring. It makes the air clean.（种）',
            answer: 'plant',
            hint: '种树用什么动词？',
            explanation: 'plant trees表示种树，每年春天种树让空气更清新做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l5q3',
            type: 'choice',
            question: '和家人去爬山，你想用英语感叹山的壮观，应该说？',
            options: ['The mountains are so tall and beautiful!', 'The mountains are small.', 'I don\'t like mountains.', 'Mountains are boring.'],
            answer: 'The mountains are so tall and beautiful!',
            hint: '怎样用英语赞美自然景观？',
            explanation: 'The mountains are so tall and beautiful!表示山又高又美，是赞美自然景观做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l5q4',
            type: 'drag',
            question: '把词拖到正确位置：A seed needs ____ and sunlight to grow.（水）',
            answer: 'water',
            hint: '植物生长需要什么？',
            explanation: '植物生长需要水water和阳光sunlight做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l5q5',
            type: 'choice',
            question: '【期末真题】洗手后忘记关水龙头，妈妈会提醒你？',
            options: ['Turn off the tap! Save water!', 'Turn on the tap!', 'Don\'t wash your hands.', 'It doesn\'t matter.'],
            answer: 'Turn off the tap! Save water!',
            hint: '节约用水怎么说？',
            explanation: 'Turn off the tap! Save water!表示关水龙头，节约用水做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l5q6',
            type: 'fill',
            question: 'The ocean is very big and ____. I love swimming in it.（蓝色的）',
            answer: 'blue',
            hint: '海洋是什么颜色的？',
            explanation: 'blue是蓝色的，The ocean is big and blue表示海洋又大又蓝做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u4l5q7',
            type: 'choice',
            question: '结合"Healthy Life"和"Nature"，怎样用英语表达"多种树让空气更清新"？',
            options: ['Plant trees! They make the air clean.', 'Eat more vegetables!', 'Play basketball!', 'Brush your teeth!'],
            answer: 'Plant trees! They make the air clean.',
            hint: '[Healthy Life]（英语三年级-第3单元）',
            explanation: '种树让空气清新结合了环保和健康：Plant trees + make the air clean做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  },
  {
    id: 'e3u5',
    title: 'Jobs',
    subtitle: '长大后做什么，梦想职业多',
    order: 5,
    lessons: [
      {
        id: 'e3u5l1',
        title: '职业词汇',
        order: 1,
        teachingMethod: '视觉化教学法',
        learningObjective: '我能说出Doctor/Teacher/Firefighter等职业词汇',
        successCriteria: '①能说出5个职业英语 ②能说出职业的作用',
        iDo: '家长展示职业图片，说"Doctor, teacher, firefighter, police officer, pilot, chef" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起讨论各种职业，用英语说出职业名称和工作内容 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出至少6种职业名称【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：职业Doctor（医生）、Teacher（老师）、Firefighter（消防员）、Police officer（警察）、Pilot（飞行员）、Chef（厨师）。\n共学四步：\n①对话出题：家长问治病的是谁？并说Doctor!。\n②孩子应答：孩子应说Doctor!。\n③答错引导：若孩子说不出，家长当同学一起认职业！扫描课时发音动画听发音；让孩子点读课件职业卡；家长结合身边的人边说边比划。\n④快速检测：1.孩子说出5个职业；2.说老师英语；3.说一个职业的作用。',
        funElement: '玩"职业猜猜猜"，用动作比划职业让对方猜英语名称',
        gsapAnimations: ['GSAP:职业人物出场-jobFigure', 'GSAP:工具图标弹出-toolPop'],
        images: ['IMG:各种职业插图', 'IMG:职业词汇卡片'],
        content: [
          { type: 'text', content: 'Doctor医生治病、Teacher老师教书、Firefighter消防员灭火、Police officer警察保护安全、Pilot飞行员开飞机、Chef厨师做美食', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What does a doctor do?\n小红: A doctor helps sick people.\n小明: What about a firefighter?\n小红: A firefighter puts out fires!', label: '职业对话', animationType: 'reveal' },
          { type: 'example', content: 'Doctor — 医生\nTeacher — 老师\nFirefighter — 消防员\nPolice officer — 警察\nPilot — 飞行员\nChef — 厨师', label: '职业词汇', animationType: 'bounce' },
          { type: 'tip', content: 'firefighter是消防员，fire火+fighter战斗者=和火战斗的人！', label: '构词提示', animationType: 'pulse' },
          { type: 'animation', content: '职业人物场景动画：消防员🧑‍🚒+灭火器🧯+灭火🔥 | 医生👨‍⚕️+听诊器🩺+治病💊 | 老师👩‍🏫+书本📚+教书✏️ | 警察👮+徽章🎖️+保护安全🛡️', animationType: 'sceneBuild', animationConfig: {"sceneType":"sceneBuild","title":"Jobs Scene","sceneBuildConfig":{"sceneName":"Jobs Scene","elements":[{"id":"firefighter","emoji":"🧑‍🚒","text":"Firefighter","x":20,"y":30,"size":"lg","delay":0,"animation":"bounceIn","ttsText":"Firefighter! A firefighter puts out fires.","group":"A"},{"id":"fire-extinguisher","emoji":"🧯","text":"Fire Extinguisher","x":20,"y":60,"size":"sm","delay":0.5,"animation":"popIn","ttsText":"Fire extinguisher!","group":"A"},{"id":"fire-action","emoji":"🔥","text":"Put out fires","x":20,"y":80,"size":"sm","delay":1,"animation":"scaleIn","ttsText":"Put out fires!","group":"A"},{"id":"doctor","emoji":"👨‍⚕️","text":"Doctor","x":40,"y":30,"size":"lg","delay":1.5,"animation":"bounceIn","ttsText":"Doctor! A doctor helps sick people.","group":"A"},{"id":"stethoscope","emoji":"🩺","text":"Stethoscope","x":40,"y":60,"size":"sm","delay":2,"animation":"popIn","ttsText":"Stethoscope!","group":"A"},{"id":"doctor-action","emoji":"💊","text":"Help sick people","x":40,"y":80,"size":"sm","delay":2.5,"animation":"scaleIn","ttsText":"Help sick people!","group":"A"},{"id":"teacher","emoji":"👩‍🏫","text":"Teacher","x":60,"y":30,"size":"lg","delay":3,"animation":"bounceIn","ttsText":"Teacher! A teacher teaches students.","group":"A"},{"id":"book-tool","emoji":"📚","text":"Books","x":60,"y":60,"size":"sm","delay":3.5,"animation":"popIn","ttsText":"Books!","group":"A"},{"id":"teacher-action","emoji":"✏️","text":"Teach students","x":60,"y":80,"size":"sm","delay":4,"animation":"scaleIn","ttsText":"Teach students!","group":"A"},{"id":"police","emoji":"👮","text":"Police Officer","x":80,"y":30,"size":"lg","delay":4.5,"animation":"bounceIn","ttsText":"Police officer! A police officer keeps us safe.","group":"A"},{"id":"badge","emoji":"🎖️","text":"Badge","x":80,"y":60,"size":"sm","delay":5,"animation":"popIn","ttsText":"Badge!","group":"A"},{"id":"police-action","emoji":"🛡️","text":"Keep us safe","x":80,"y":80,"size":"sm","delay":5.5,"animation":"scaleIn","ttsText":"Keep us safe!","group":"A"}]}} },
          { type: 'tip', content: '本课主要使用视觉化教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u5l1q1',
            type: 'choice',
            question: '"医生"用英语怎么说？',
            options: ['Doctor', 'Teacher', 'Nurse', 'Driver'],
            answer: 'Doctor',
            hint: '在医院给病人看病的',
            explanation: 'Doctor是医生，在医院给病人看病做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l1q2',
            type: 'fill',
            question: 'A ____ puts out fires.（消防员）',
            answer: 'firefighter',
            acceptableAnswers: ['fireman'],
            hint: '灭火的英雄',
            explanation: 'firefighter是消防员，负责灭火和救援做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l1q3',
            type: 'flashcard',
            question: '看厨师做饭的图片，说出英语职业名称',
            answer: 'Chef',
            hint: '在厨房做美食的人',
            explanation: 'Chef是厨师，在厨房烹饪美食的人做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l1q4',
            type: 'choice',
            question: '"A doctor helps sick people."中sick的意思是？',
            options: ['生病的', '健康的', '快乐的', '悲伤的'],
            answer: '生病的',
            hint: '医生帮助什么样的人？',
            explanation: 'sick表示生病的，A doctor helps sick people表示医生帮助生病的人做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l1q5',
            type: 'fill',
            question: 'A ____ puts out fires. He is very brave.（消防员）',
            answer: 'firefighter',
            acceptableAnswers: ['fireman'],
            hint: '灭火的英雄是谁？',
            explanation: 'firefighter是消防员，A firefighter puts out fires表示消防员灭火做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l1q6',
            type: 'choice',
            question: '【期末真题】"firefighter"由fire和fighter组成，这种构词方式叫？',
            options: ['compound word', 'derived word', 'abbreviation', 'borrowed word'],
            answer: 'compound word',
            hint: 'fire+fighter是什么构词方式？',
            explanation: 'firefighter由fire火+fighter战斗者合成，是合成词做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：We should ____ the Earth.（保护）',
            answer: 'protect',
            hint: '[Nature]（英语三年级-第4单元）',
            explanation: '回顾u4所学：We should protect the Earth表示我们应该保护地球做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u5l2',
        title: 'want to be',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用I want to be a...表达梦想职业',
        successCriteria: '①能用I want to be a...造句 ②能说出自己的梦想职业',
        iDo: '家长说"When I was young, I wanted to be a teacher. What do you want to be?" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起分享梦想职业，用"I want to be a..."表达 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语说出自己想成为什么职业，并说明原因【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：梦想职业I want to be a teacher.（我想当老师）、I want to be a doctor.。\n共学四步：\n①对话出题：家长问你长大想当什么？并说I want to be a teacher.。\n②孩子应答：孩子应说I want to be a doctor.等。\n③答错引导：若孩子说不出，家长当同学一起说梦想！扫描课时发音动画听发音；让孩子点读课件句子卡；家长先说自己的梦想示范，再问孩子。\n④快速检测：1.孩子用I want to be a...造句；2.说梦想职业；3.说出该职业的作用。',
        funElement: '画"未来的我"自画像，旁边用英语写出梦想职业',
        gsapAnimations: ['GSAP:梦想气泡飘浮-dreamBubble', 'GSAP:星星轨迹-starTrail'],
        images: ['IMG:梦想职业场景', 'IMG:want to be句型卡'],
        content: [
          { type: 'text', content: 'I want to be a teacher. 我想当老师。I want to be a doctor. 我想当医生。用I want to be a...来表达你的梦想职业！', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: What do you want to be?\n小明: I want to be a pilot! I like flying.\n小红: I want to be a doctor. I want to help people.\n老师: Great dreams!', label: '梦想职业对话', animationType: 'reveal' },
          { type: 'example', content: 'I want to be a teacher — 我想当老师\nI want to be a doctor — 我想当医生\nI want to be a pilot — 我想当飞行员\nI want to be a chef — 我想当厨师', label: 'want to be句型', animationType: 'bounce' },
          { type: 'tip', content: 'want to be表示"想成为"，to后面跟动词原形be。职业前面用a/an！', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '梦想气泡飘浮，星星轨迹的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'My Dream', sceneBuildConfig: { sceneName: 'My Dream', elements: [ { id: 'el-0', text: 'Dream', emoji: '💭', delay: 0, animation: 'popIn', ttsText: 'Dream' }, { id: 'el-1', text: 'Star', emoji: '⭐', delay: 0.4, animation: 'scaleIn', ttsText: 'Star' }, { id: 'el-2', text: 'Rocket', emoji: '🚀', delay: 0.8, animation: 'slideIn', ttsText: 'Rocket' }, { id: 'el-3', text: 'Future', emoji: '🌈', delay: 1.2, animation: 'fadeIn', ttsText: 'Future' } ] }, ttsNarration: '梦想：梦想、星星、火箭、未来' } },
          { type: 'tip', content: '本课主要使用EDI直接教学：家长示范-亲子共练-孩子独立完成三步闭环', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u5l2q1',
            type: 'choice',
            question: '"我想当老师"用英语怎么说？',
            options: ['I want to be a teacher', 'I am a teacher', 'I like a teacher', 'I have a teacher'],
            answer: 'I want to be a teacher',
            hint: '表达梦想职业用什么句型？',
            explanation: 'I want to be a...表示我想成为...，是表达梦想职业的句型做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l2q2',
            type: 'fill',
            question: 'She wants to ____ a doctor.（成为）',
            answer: 'be',
            hint: 'want to后面跟什么？',
            explanation: 'want to be表示想成为，to后面跟动词原形be做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l2q3',
            type: 'drag',
            question: '把词拖到正确位置：I want to be a ____ because I like flying.（飞行员）',
            answer: 'pilot',
            hint: '开飞机的人',
            explanation: 'pilot是飞行员，I want to be a pilot表示我想当飞行员做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l2q4',
            type: 'choice',
            question: '"I want to be a pilot."中a可以换成an吗？',
            options: ['No, pilot starts with a consonant sound', 'Yes, they are the same', 'You must use an', 'Neither is needed'],
            answer: 'No, pilot starts with a consonant sound',
            hint: 'a和an的区别是什么？',
            explanation: 'pilot以辅音音素/p/开头，用a不用an，职业前用a/an取决于发音做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l2q5',
            type: 'fill',
            question: 'She wants to be ____ engineer. She likes building things.（一个）',
            answer: 'an',
            hint: 'engineer前面用a还是an？',
            explanation: 'engineer以元音音素/e/开头，用an不用a，an engineer做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l2q6',
            type: 'choice',
            question: '【期末真题】"I want to be a teacher."中want to be表示？',
            options: ['想成为', '已经是', '不喜欢', '曾经是'],
            answer: '想成为',
            hint: 'want to be是什么意思？',
            explanation: 'want to be表示想成为，I want to be a teacher表示我想当老师做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：A ____ helps sick people.（医生）',
            answer: 'doctor',
            hint: '[Jobs-职业词汇]（英语三年级-第5单元）',
            explanation: '回顾l1所学：A doctor helps sick people表示医生帮助生病的人做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u5l3',
        title: '社区服务',
        order: 3,
        teachingMethod: '情境教学法',
        learningObjective: '我能用英语说出警察、邮递员、清洁工等社区服务职业',
        successCriteria: '①能说出3个社区服务职业 ②能说出他们的作用',
        iDo: '家长介绍社区服务者"Police officers keep us safe. Mail carriers deliver letters. Cleaners keep our city clean" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起讨论社区中的服务者，用英语说出他们的贡献 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语介绍一个社区服务者的工作【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：社区服务Police officers keep us safe.（警察保护安全）、Mail carriers deliver letters.（邮递员送信）、Cleaners keep our city clean.（清洁工保持干净）。\n共学四步：\n①对话出题：家长问谁保护我们安全？并说Police officers!。\n②孩子应答：孩子应说Police officers keep us safe.。\n③答错引导：若孩子说不出，家长当同学一起找！扫描课时发音动画听发音；让孩子点读课件句子卡；家长结合社区见闻边说边比划。\n④快速检测：1.孩子说出3个社区职业；2.说清洁工的作用；3.说邮递员的作用。',
        funElement: '制作"感谢卡"，用英语写给社区服务者',
        gsapAnimations: ['GSAP:社区地图展开-mapExpand', 'GSAP:服务者巡逻-patrolMove'],
        images: ['IMG:社区服务场景', 'IMG:社区服务者卡片'],
        content: [
          { type: 'text', content: 'Police officers keep us safe. 警察保护我们的安全。Mail carriers deliver letters. 邮递员送信。Cleaners keep our city clean. 清洁工保持城市干净', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Who helps our community?\n小红: Police officers keep us safe!\n小明: Mail carriers deliver letters.\n小红: Cleaners keep our city clean. Thank them!', label: '社区服务对话', animationType: 'reveal' },
          { type: 'example', content: 'Police officers — 警察（保护安全）\nMail carriers — 邮递员（送信）\nCleaners — 清洁工（保持清洁）\nNurses — 护士（照顾病人）\nBus drivers — 公交司机（开车）', label: '社区服务者', animationType: 'bounce' },
          { type: 'tip', content: 'keep us safe保护我们安全，keep our city clean保持城市干净。keep + 宾语 + 形容词表示"保持……"', label: '语法提示', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用情境教学法：创设真实生活情境，在情境中自然学习', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u5l3q1',
            type: 'choice',
            question: '谁保护我们的安全？',
            options: ['Police officers', 'Chefs', 'Pilots', 'Artists'],
            answer: 'Police officers',
            hint: '穿制服巡逻的人',
            explanation: 'Police officers是警察，保护社区安全做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l3q2',
            type: 'fill',
            question: 'Mail ____ deliver letters to our homes.（邮递员）',
            answer: 'carriers',
            hint: '送信的人',
            explanation: 'Mail carriers是邮递员，负责送信和包裹做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l3q3',
            type: 'drag',
            question: '把服务者拖到正确位置：保持城市清洁的是____',
            answer: 'Cleaners',
            hint: '打扫卫生的人',
            explanation: 'Cleaners是清洁工，保持城市干净整洁做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l3q4',
            type: 'choice',
            question: '"Police officers keep us safe."中keep us safe的结构是？',
            options: ['keep + object + adjective', 'keep + verb + noun', 'keep + adverb + verb', 'keep + noun + noun'],
            answer: 'keep + object + adjective',
            hint: 'keep后面接什么结构？',
            explanation: 'keep + 宾语 + 形容词表示保持……，keep us safe保护我们安全做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l3q5',
            type: 'fill',
            question: 'Cleaners keep our city ____. We should thank them.（干净的）',
            answer: 'clean',
            hint: '清洁工保持城市怎样？',
            explanation: 'keep our city clean表示保持城市干净，clean是干净的做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l3q6',
            type: 'choice',
            question: '【期末真题】"Mail carriers deliver letters."中deliver的意思是？',
            options: ['递送', '写', '读', '撕'],
            answer: '递送',
            hint: '邮递员的工作是什么？',
            explanation: 'deliver表示递送/投递，Mail carriers deliver letters邮递员送信做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：I want to ____ a doctor when I grow up.（成为）',
            answer: 'be',
            hint: '[Jobs-want to be]（英语三年级-第5单元）',
            explanation: '回顾l2所学：want to be表示想成为，I want to be a doctor表示我想当医生做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u5l4',
        title: 'Jobs Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用Jobs单元的职业词汇和梦想表达',
        successCriteria: '①能说出6个职业英语 ②能用I want to be...造句',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾Jobs单元：职业Doctor/Teacher/Firefighter/Police officer/Pilot/Chef、梦想I want to be a...、社区服务。\n共学四步：\n①对话出题：家长问用英语说几个职业。。\n②孩子应答：孩子应说Doctor, teacher!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说职业。\n④快速检测：1.孩子说出6个职业；2.用I want to be...造句；3.说一个社区服务职业。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Jobs单元！我们学了职业Doctor/Teacher/Firefighter/Police officer/Pilot/Chef、梦想I want to be a...、社区服务Police officers/Mail carriers/Cleaners`, animationType: 'reveal' },
          { type: 'formula', content: `职业表达公式：
I want to be a + 职业 → I want to be a doctor.
A + 职业 + 动作 → A firefighter puts out fires.
keep us safe / keep our city clean`, animationType: 'typewriter', label: 'Jobs公式' },
          { type: 'animation', content: `Jobs单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Jobs Review', cardRevealConfig: { cards: [ { front: 'Firefighter', back: '🧑‍🚒', ttsText: 'Firefighter' }, { front: 'Doctor', back: '👨‍⚕️', ttsText: 'Doctor' }, { front: 'Teacher', back: '👩‍🏫', ttsText: 'Teacher' }, { front: 'Police', back: '👮', ttsText: 'Police' } ] }, ttsNarration: 'Jobs单元回顾：消防员、医生、老师、警察' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u5l4q1',
            type: 'choice',
            question: '本单元"Jobs"学了三个主题，以下哪个不属于？',
            options: ['Doctor and Teacher', 'I want to be a pilot', 'Police officers keep us safe', 'Mountains and Rivers'],
            answer: 'Mountains and Rivers',
            hint: '哪个不是本单元学的？',
            explanation: 'Mountains and Rivers属于Nature单元，不属于Jobs做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l4q2',
            type: 'fill',
            question: 'I want to ____ a chef. I like cooking delicious food.（成为）',
            answer: 'be',
            hint: '想成为用什么表达？',
            explanation: 'want to be表示想成为，I want to be a chef表示我想当厨师做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l4q3',
            type: 'choice',
            question: '"A firefighter puts out fires"和"Police officers keep us safe"的共同点是？',
            options: ['都是社区服务者保护我们', '都关于火', '都关于信', '没有共同点'],
            answer: '都是社区服务者保护我们',
            hint: '他们的共同角色是什么？',
            explanation: '消防员和警察都是社区服务者，他们的工作是保护我们的安全做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l4q4',
            type: 'drag',
            question: '把词拖到正确位置：Mail carriers ____ letters to our homes.（递送）',
            answer: 'deliver',
            hint: '邮递员做什么？',
            explanation: 'deliver letters表示送信，Mail carriers deliver letters邮递员送信做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l4q5',
            type: 'choice',
            question: '【期末真题】选出语法正确的句子？',
            options: ['I want to be a teacher.', 'I want be a teacher.', 'I want to a teacher.', 'I want to being a teacher.'],
            answer: 'I want to be a teacher.',
            hint: 'want to后面跟什么？',
            explanation: 'want to + 动词原形，I want to be a teacher正确做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l4q6',
            type: 'fill',
            question: 'A ____ flies an airplane. It\'s a cool job!（飞行员）',
            answer: 'pilot',
            hint: '开飞机的人',
            explanation: 'pilot是飞行员，A pilot flies an airplane飞行员开飞机做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l4q7',
            type: 'choice',
            question: '回顾已学：以下哪个是第4单元"Nature"学的内容？',
            options: ["Don't litter! Save water!", 'I want to be a doctor', 'A firefighter puts out fires', 'Police officers keep us safe'],
            answer: "Don't litter! Save water!",
            hint: '[Nature]（英语三年级-第4单元）',
            explanation: "Don't litter! Save water!是第4单元Nature的环保内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
        ]
      },
      {
        id: 'e3u5l5',
        title: 'Jobs in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在生活中用英语说职业和梦想',
        successCriteria: '①能说出身边人的职业 ②能说出自己的梦想职业',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把职业生活化：用英语说出你梦想的职业。\n共学四步：\n①对话出题：家长问爸爸妈妈做什么工作？用英语说。。\n②孩子应答：孩子应说My mom is a teacher.等。\n③答错引导：若孩子说不出，家长当同学一起说！扫描课时发音动画复习；让孩子点读课件情景卡；家长结合家人职业边说边聊。\n④快速检测：1.孩子说家人职业；2.说梦想职业；3.用I want to be...造句。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `职业让社会运转！用英语说出你梦想的职业`, animationType: 'reveal' },
          { type: 'example', content: `场景1：职业 → A doctor helps sick people.
场景2：梦想 → I want to be a pilot!
场景3：社区服务 → Police officers keep us safe.`, animationType: 'bounce', label: 'Jobs在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'animation', content: `职业人物场景动画：消防员🧑‍🚒+灭火器🧯+灭火🔥 | 医生👨‍⚕️+听诊器🩺+治病💊 | 老师👩‍🏫+书本📚+教书✏️ | 警察👮+徽章🎖️+保护安全🛡️`, animationType: 'sceneBuild', animationConfig: {"sceneType":"sceneBuild","title":"Jobs Scene","sceneBuildConfig":{"sceneName":"Jobs Scene","elements":[{"id":"firefighter","emoji":"🧑‍🚒","text":"Firefighter","x":20,"y":30,"size":"lg","delay":0,"animation":"bounceIn","ttsText":"Firefighter! A firefighter puts out fires.","group":"A"},{"id":"fire-extinguisher","emoji":"🧯","text":"Fire Extinguisher","x":20,"y":60,"size":"sm","delay":0.5,"animation":"popIn","ttsText":"Fire extinguisher!","group":"A"},{"id":"fire-action","emoji":"🔥","text":"Put out fires","x":20,"y":80,"size":"sm","delay":1,"animation":"scaleIn","ttsText":"Put out fires!","group":"A"},{"id":"doctor","emoji":"👨‍⚕️","text":"Doctor","x":40,"y":30,"size":"lg","delay":1.5,"animation":"bounceIn","ttsText":"Doctor! A doctor helps sick people.","group":"A"},{"id":"stethoscope","emoji":"🩺","text":"Stethoscope","x":40,"y":60,"size":"sm","delay":2,"animation":"popIn","ttsText":"Stethoscope!","group":"A"},{"id":"doctor-action","emoji":"💊","text":"Help sick people","x":40,"y":80,"size":"sm","delay":2.5,"animation":"scaleIn","ttsText":"Help sick people!","group":"A"},{"id":"teacher","emoji":"👩‍🏫","text":"Teacher","x":60,"y":30,"size":"lg","delay":3,"animation":"bounceIn","ttsText":"Teacher! A teacher teaches students.","group":"A"},{"id":"book-tool","emoji":"📚","text":"Books","x":60,"y":60,"size":"sm","delay":3.5,"animation":"popIn","ttsText":"Books!","group":"A"},{"id":"teacher-action","emoji":"✏️","text":"Teach students","x":60,"y":80,"size":"sm","delay":4,"animation":"scaleIn","ttsText":"Teach students!","group":"A"},{"id":"police","emoji":"👮","text":"Police Officer","x":80,"y":30,"size":"lg","delay":4.5,"animation":"bounceIn","ttsText":"Police officer! A police officer keeps us safe.","group":"A"},{"id":"badge","emoji":"🎖️","text":"Badge","x":80,"y":60,"size":"sm","delay":5,"animation":"popIn","ttsText":"Badge!","group":"A"},{"id":"police-action","emoji":"🛡️","text":"Keep us safe","x":80,"y":80,"size":"sm","delay":5.5,"animation":"scaleIn","ttsText":"Keep us safe!","group":"A"}]}} },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u5l5q1',
            type: 'choice',
            question: '有人问你长大后想做什么，你应该说？',
            options: ['I want to be a doctor', 'I am a doctor', 'I have a doctor', 'I see a doctor'],
            answer: 'I want to be a doctor',
            hint: '怎样用英语表达梦想职业？',
            explanation: 'I want to be a...表示我想成为……，是表达梦想职业的句型做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l5q2',
            type: 'fill',
            question: 'Thank you, police officers! You keep ____ safe.（我们）',
            answer: 'us',
            hint: '警察保护谁的安全？',
            explanation: 'keep us safe表示保护我们的安全，us是我们的宾格做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l5q3',
            type: 'choice',
            question: '在医院看到穿白大褂的人，你知道他是？',
            options: ['A doctor', 'A chef', 'A pilot', 'A firefighter'],
            answer: 'A doctor',
            hint: '在医院穿白大褂的是什么职业？',
            explanation: 'A doctor是医生，在医院穿白大褂给病人看病做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l5q4',
            type: 'drag',
            question: '把词拖到正确位置：I want to be a ____ because I like cooking.（厨师）',
            answer: 'chef',
            hint: '喜欢做饭想当什么？',
            explanation: 'chef是厨师，I want to be a chef because I like cooking做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l5q5',
            type: 'choice',
            question: '【期末真题】小明想告诉别人"我妈妈是老师"，他应该说？',
            options: ['My mom is a teacher', 'My mom wants to be a teacher', 'My mom has a teacher', 'My mom likes teacher'],
            answer: 'My mom is a teacher',
            hint: '描述某人的职业用什么句型？',
            explanation: '描述某人的职业用主语 + is + a/an + 职业，My mom is a teacher正确做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l5q6',
            type: 'fill',
            question: 'Mail carriers ____ letters and packages to our homes.（递送）',
            answer: 'deliver',
            hint: '邮递员做什么？',
            explanation: 'deliver表示递送，Mail carriers deliver letters邮递员送信做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u5l5q7',
            type: 'choice',
            question: '结合"Nature"和"Jobs"，怎样用英语说"我想当环保工作者保护地球"？',
            options: ['I want to protect the Earth like a cleaner.', 'I want to be a doctor.', 'Plant trees!', 'Save water!'],
            answer: 'I want to protect the Earth like a cleaner.',
            hint: '[Nature]（英语三年级-第4单元）',
            explanation: '结合职业和环保：I want to protect the Earth + like a cleaner做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  },
  {
    id: 'e3u6',
    title: 'Stories',
    subtitle: '听故事学英语，越听越有趣',
    order: 6,
    lessons: [
      {
        id: 'e3u6l1',
        title: '寓言故事',
        order: 1,
        teachingMethod: '故事教学法',
        learningObjective: '我能理解《龟兔赛跑》并用Slow and steady wins表达寓意',
        successCriteria: '①能说出龟兔赛跑的主要角色 ②能说出故事寓意',
        iDo: '家长用英语讲《龟兔赛跑》"The tortoise is slow. The hare is fast. But the tortoise wins!" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起读寓言故事，讨论故事的含义 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语复述一个寓言故事的大意【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：寓言《龟兔赛跑》The Tortoise and the Hare，寓意Slow and steady wins the race.（稳扎稳打赢得比赛）。\n共学四步：\n①对话出题：家长问龟兔赛跑谁赢了？并说The tortoise!。\n②孩子应答：孩子应说The tortoise won!。\n③答错引导：若孩子说不出，家长当同学一起讲故事！扫描课时发音动画听发音；让孩子点读课件故事卡；家长边讲边比划，用动作帮孩子理解。\n④快速检测：1.孩子说出龟兔英语；2.说故事寓意；3.复述故事一句话。',
        funElement: '用手指偶表演寓言故事，边演边说英语',
        gsapAnimations: ['GSAP:故事书翻开-bookOpen', 'GSAP:角色出场-characterIn'],
        images: ['IMG:寓言故事插图', 'IMG:故事角色卡片'],
        content: [
          { type: 'text', content: '《龟兔赛跑》The Tortoise and the Hare——The tortoise is slow but never stops. The hare is fast but takes a nap. Slow and steady wins the race!', animationType: 'reveal' },
          { type: 'dialogue', content: '旁白: The hare runs fast. He is proud.\n兔子: I am fast! I will take a nap.\n旁白: The tortoise walks slowly but never stops.\n乌龟: I will keep going!\n旁白: The tortoise wins!', label: '龟兔赛跑故事', animationType: 'reveal' },
          { type: 'example', content: 'Tortoise — 乌龟（慢但坚持）\nHare — 野兔（快但骄傲）\nSlow and steady — 稳扎稳打\nWin — 赢\nRace — 比赛\nProud — 骄傲的', label: '故事关键词', animationType: 'bounce' },
          { type: 'tip', content: 'Slow and steady wins the race! 稳扎稳打才能赢！这是龟兔赛跑教给我们的道理', label: '故事寓意', animationType: 'pulse' },
          { type: 'animation', content: '故事书翻开，角色出场的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Storybook', sceneBuildConfig: { sceneName: 'Storybook', elements: [ { id: 'el-0', text: 'Book', emoji: '📖', delay: 0, animation: 'bounceIn', ttsText: 'Storybook' }, { id: 'el-1', text: 'Hero', emoji: '🦸', delay: 0.4, animation: 'popIn', ttsText: 'Hero' }, { id: 'el-2', text: 'Princess', emoji: '👸', delay: 0.8, animation: 'scaleIn', ttsText: 'Princess' }, { id: 'el-3', text: 'Animal', emoji: '🐰', delay: 1.2, animation: 'slideIn', ttsText: 'Animal' } ] }, ttsNarration: '故事书：书本、英雄、公主、动物' } },
          { type: 'tip', content: '本课主要使用故事教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u6l1q1',
            type: 'choice',
            question: '《龟兔赛跑》告诉我们什么道理？',
            options: ['Slow and steady wins the race', 'Fast is always better', 'Sleeping is good', 'Running is bad'],
            answer: 'Slow and steady wins the race',
            hint: '乌龟为什么赢了？',
            explanation: 'Slow and steady wins the race表示稳扎稳打才能赢，是龟兔赛跑的道理做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l1q2',
            type: 'fill',
            question: 'The ____ is slow but he never stops.（乌龟）',
            answer: 'tortoise',
            acceptableAnswers: ['turtle'],
            hint: '背着壳慢慢走的动物',
            explanation: 'tortoise是乌龟，虽然慢但坚持不懈做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l1q3',
            type: 'flashcard',
            question: '看兔子的图片，说出英语名称',
            answer: 'Hare',
            hint: '跑得很快的动物',
            explanation: 'Hare是野兔，跑得快但骄傲自大做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l1q4',
            type: 'choice',
            question: '"Slow and steady wins the race"告诉我们什么道理？',
            options: ['Persistence is more important than speed', 'You must run fast to win', 'Sleeping is fine', 'Races are not important'],
            answer: 'Persistence is more important than speed',
            hint: '乌龟为什么赢了兔子？',
            explanation: 'Slow and steady wins the race表示稳扎稳打才能赢，坚持比速度更重要做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l1q5',
            type: 'fill',
            question: 'The hare is ____ but the tortoise is slow.（快的）',
            answer: 'fast',
            acceptableAnswers: ['quick'],
            hint: '兔子跑得怎样？',
            explanation: 'fast是快的，The hare is fast but the tortoise is slow兔子快但乌龟慢做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l1q6',
            type: 'choice',
            question: '【期末真题】"The tortoise is slow but never stops."中but表示什么关系？',
            options: ['转折关系', '因果关系', '并列关系', '递进关系'],
            answer: '转折关系',
            hint: 'but和and的区别是什么？',
            explanation: 'but表示转折关系，乌龟慢但是不停下，是转折做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：I want to ____ a firefighter.（成为）',
            answer: 'be',
            hint: '[Jobs]（英语三年级-第5单元）',
            explanation: '回顾u5所学：want to be表示想成为，I want to be a firefighter做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u6l2',
        title: '故事复述',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用First/Then/Finally复述故事',
        successCriteria: '①能用First/Then/Finally连接 ②能复述一个故事',
        iDo: '家长示范复述故事"First, the hare ran fast. Then, he slept under a tree. Finally, the tortoise won" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起用"First... Then... Finally..."复述故事 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语复述一个故事，使用连接词【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：故事复述用First（首先）、Then（然后）、Finally（最后）连接事件顺序。\n共学四步：\n①对话出题：家长问复述故事用什么词连接？并说First...。\n②孩子应答：孩子应说First, then, finally!。\n③答错引导：若孩子说不出，家长当同学一起复述！扫描课时发音动画听发音；让孩子点读课件句子卡；家长边讲边用手势表示顺序。\n④快速检测：1.孩子说出3个连接词；2.用First/Then/Finally造句；3.复述龟兔赛跑。',
        funElement: '画"故事连环画"，每幅画配一句英语描述',
        gsapAnimations: ['GSAP:时间线展开-timeline', 'GSAP:故事节点闪烁-nodeGlow'],
        images: ['IMG:故事复述场景', 'IMG:连接词卡片'],
        content: [
          { type: 'text', content: '复述故事时，用First首先、Then然后、Finally最后来连接。First, the hare ran fast. Then, he slept. Finally, the tortoise won!', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Tell me the story!\n小红: First, the hare ran very fast.\n小明: Then?\n小红: Then, he slept under a tree.\n小明: And?\n小红: Finally, the tortoise won the race!', label: '故事复述对话', animationType: 'reveal' },
          { type: 'example', content: 'First — 首先（故事开始）\nThen — 然后（故事发展）\nNext — 接下来（故事继续）\nFinally — 最后（故事结局）\nAfter that — 在那之后', label: '连接词', animationType: 'typewriter' },
          { type: 'tip', content: 'First/Then/Finally是复述故事的好帮手，让故事更有条理！', label: '写作提示', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用EDI直接教学：家长示范-亲子共练-孩子独立完成三步闭环', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u6l2q1',
            type: 'choice',
            question: '复述故事时"首先"用英语怎么说？',
            options: ['First', 'Then', 'Finally', 'Next'],
            answer: 'First',
            hint: '故事开始的标志词',
            explanation: 'First表示首先，用于复述故事的开头做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l2q2',
            type: 'fill',
            question: '____, the hare slept under a tree.（然后）',
            answer: 'Then',
            acceptableAnswers: ['Next'],
            hint: '表示接下来发生的事',
            explanation: 'Then表示然后，用于连接故事的中间部分做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l2q3',
            type: 'drag',
            question: '把词拖到正确位置：____, the tortoise won the race!（最后）',
            answer: 'Finally',
            hint: '故事的结局用什么词？',
            explanation: 'Finally表示最后，用于复述故事的结尾做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l2q4',
            type: 'choice',
            question: '复述故事时，"接下来"用哪个连接词？',
            options: ['Next', 'First', 'Finally', 'But'],
            answer: 'Next',
            hint: 'First之后用什么词？',
            explanation: 'Next表示接下来，用于复述故事的中间发展部分做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l2q5',
            type: 'fill',
            question: '____, the tortoise won the race! Everyone was surprised.（最后）',
            answer: 'Finally',
            acceptableAnswers: ['At last', 'Lastly'],
            hint: '故事的结局用什么词开头？',
            explanation: 'Finally表示最后，用于复述故事的结尾做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l2q6',
            type: 'choice',
            question: '【期末真题】"First, Then, Finally"这三个词的作用是？',
            options: ['To organize a story in order', 'To make a story longer', 'To make a story funnier', 'They have no function'],
            answer: 'To organize a story in order',
            hint: '连接词对故事有什么帮助？',
            explanation: 'First/Then/Finally让故事更有条理，按时间顺序讲述做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Slow and ____ wins the race.（稳扎稳打）',
            answer: 'steady',
            hint: '[Stories-寓言故事]（英语三年级-第6单元）',
            explanation: '回顾l1所学：Slow and steady wins the race表示稳扎稳打才能赢做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u6l3',
        title: '角色扮演',
        order: 3,
        teachingMethod: '角色扮演法',
        learningObjective: '我能通过角色扮演用不同声音说台词演绎故事',
        successCriteria: '①能扮演一个故事角色 ②能用英语说角色台词',
        iDo: '家长扮演故事角色，用不同声音说"I am the big bad wolf! I will huff and puff!" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起角色扮演故事，分配角色用英语表演 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立选择一个角色，用英语表演故事片段【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：角色扮演Role Play，扮演三只小猪等角色，用不同声音说台词。\n共学四步：\n①对话出题：家长说我们来演三只小猪，你演小猪。并说I built my house with straw!。\n②孩子应答：孩子应扮演角色说台词。\n③答错引导：若孩子不敢演，家长当同学一起演！扫描课时发音动画听发音；让孩子点读课件台词卡；家长带头夸张表演，降低孩子紧张感。\n④快速检测：1.孩子扮演一个角色；2.说一句台词；3.说出三只小猪的房材料。',
        funElement: '举办"家庭小剧场"，用英语表演完整故事',
        gsapAnimations: ['GSAP:角色面具切换-maskSwitch', 'GSAP:舞台幕布拉开-curtainOpen'],
        images: ['IMG:角色扮演场景', 'IMG:故事角色面具'],
        content: [
          { type: 'text', content: '角色扮演Role Play是练习英语的好方法！扮演故事中的角色，用不同的声音说台词，让故事活起来！', animationType: 'reveal' },
          { type: 'dialogue', content: '大灰狼: I am the big bad wolf! I will huff and puff!\n小猪1: My house is made of straw!\n小猪2: My house is made of sticks!\n小猪3: My house is made of bricks! You can\'t blow it down!', label: '三只小猪角色扮演', animationType: 'reveal' },
          { type: 'example', content: 'Straw — 稻草\nSticks — 树枝\nBricks — 砖头\nHuff and puff — 使劲吹\nBlow down — 吹倒\nBig bad wolf — 大灰狼', label: '故事词汇', animationType: 'bounce' },
          { type: 'tip', content: 'made of表示"由……制成"，made of bricks就是用砖头建造的！', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '角色面具切换，舞台幕布拉开的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Stage Show', sceneBuildConfig: { sceneName: 'Stage Show', elements: [ { id: 'el-0', text: 'Mask', emoji: '🎭', delay: 0, animation: 'popIn', ttsText: 'Mask' }, { id: 'el-1', text: 'Stage', emoji: '🎪', delay: 0.4, animation: 'scaleIn', ttsText: 'Stage' }, { id: 'el-2', text: 'Curtain', emoji: '🎬', delay: 0.8, animation: 'slideIn', ttsText: 'Curtain' }, { id: 'el-3', text: 'Actor', emoji: '🧑‍🎤', delay: 1.2, animation: 'bounceIn', ttsText: 'Actor' } ] }, ttsNarration: '舞台表演：面具、舞台、幕布、演员' } },
          { type: 'tip', content: '本课主要使用角色扮演法：通过角色扮演沉浸式体验学习', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u6l3q1',
            type: 'choice',
            question: '《三只小猪》中谁最聪明？',
            options: ['The third pig', 'The wolf', 'The first pig', 'The second pig'],
            answer: 'The third pig',
            hint: '谁的房子最结实？',
            explanation: 'The third pig用砖头盖房子最结实，最聪明做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l3q2',
            type: 'fill',
            question: 'I\'ll huff and I\'ll ____!（吹）',
            answer: 'puff',
            hint: '大灰狼吹房子的台词',
            explanation: "huff and puff表示使劲吹，是大灰狼的经典台词做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u6l3q3',
            type: 'drag',
            question: '把材料拖到正确位置：最结实的房子用____建造',
            answer: 'Bricks',
            hint: '第三只小猪用什么盖房？',
            explanation: 'Bricks是砖头，第三只小猪用砖头盖的房子最结实做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l3q4',
            type: 'choice',
            question: '"My house is made of bricks."中made of的意思是？',
            options: ['由...制成', '由...制作', '看起来像', '属于'],
            answer: '由...制成',
            hint: 'made of表示什么？',
            explanation: 'made of表示由……制成，made of bricks表示用砖头建造的做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l3q5',
            type: 'fill',
            question: 'The big bad wolf will huff and ____!（吹）',
            answer: 'puff',
            hint: '大灰狼的经典台词',
            explanation: 'huff and puff表示使劲吹，是大灰狼的经典台词做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l3q6',
            type: 'choice',
            question: '【期末真题】《三只小猪》中哪种材料的房子最结实？',
            options: ['Bricks', 'Straw', 'Sticks', 'Paper'],
            answer: 'Bricks',
            hint: '第三只小猪用什么盖房？',
            explanation: 'Bricks砖头最结实，大灰狼吹不倒砖头房子做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：____, the hare ran fast. Then, he slept.（首先）',
            answer: 'First',
            hint: '[Stories-故事复述]（英语三年级-第6单元）',
            explanation: '回顾l2所学：First表示首先，用于复述故事的开头做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u6l4',
        title: 'Stories Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用Stories单元的故事、复述和角色扮演',
        successCriteria: '①能说出故事寓意 ②能用First/Then/Finally复述',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾Stories单元：寓言龟兔赛跑、故事复述First/Then/Finally、角色扮演三只小猪。\n共学四步：\n①对话出题：家长问龟兔赛跑的寓意是什么？。\n②孩子应答：孩子应说Slow and steady wins!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛复述。\n④快速检测：1.孩子说故事寓意；2.用First/Then/Finally复述；3.说一个角色台词。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Stories单元！我们学了寓言故事龟兔赛跑Tortoise and Hare/Slow and steady、故事复述First/Then/Finally、角色扮演三只小猪Straw/Sticks/Bricks`, animationType: 'reveal' },
          { type: 'formula', content: `故事表达公式：
First... Then... Finally... → 复述故事
made of + 材料 → made of bricks
Slow and steady wins the race!`, animationType: 'typewriter', label: 'Stories公式' },
          { type: 'animation', content: `Stories单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Stories Review', cardRevealConfig: { cards: [ { front: 'Story', back: '📖', ttsText: 'Story' }, { front: 'Hero', back: '🦸', ttsText: 'Hero' }, { front: 'Stage', back: '🎪', ttsText: 'Stage' }, { front: 'Mask', back: '🎭', ttsText: 'Mask' } ] }, ttsNarration: 'Stories单元回顾：故事、英雄、舞台、面具' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u6l4q1',
            type: 'choice',
            question: '本单元"Stories"学了三个主题，以下哪个不属于？',
            options: ['Tortoise and Hare', 'First, Then, Finally', 'Three Little Pigs', 'I want to be a pilot'],
            answer: 'I want to be a pilot',
            hint: '哪个不是本单元学的？',
            explanation: 'I want to be a pilot属于Jobs单元，不属于Stories做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l4q2',
            type: 'fill',
            question: 'Slow and ____ wins the race! This is the lesson from the story.（稳扎稳打）',
            answer: 'steady',
            hint: '龟兔赛跑告诉我们什么？',
            explanation: 'Slow and steady wins the race表示稳扎稳打才能赢做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l4q3',
            type: 'choice',
            question: '"First, Then, Finally"和"made of bricks"分别来自哪个课时？',
            options: ['Story retelling and role play', 'Fable and story retelling', 'Role play and fable', 'Both are fables'],
            answer: 'Story retelling and role play',
            hint: '它们分别在哪课时学的？',
            explanation: 'First/Then/Finally是l2故事复述学的，made of bricks是l3角色扮演学的做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l4q4',
            type: 'drag',
            question: '把词拖到正确位置：My house is made of ____. The wolf can\'t blow it down.（砖头）',
            answer: 'bricks',
            hint: '什么材料的房子最结实？',
            explanation: 'bricks是砖头，made of bricks表示用砖头建造的，最结实做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l4q5',
            type: 'choice',
            question: '【期末真题】选出语法正确的句子？',
            options: ['My house is made of bricks.', 'My house made of bricks.', 'My house is make of bricks.', 'My house is making of bricks.'],
            answer: 'My house is made of bricks.',
            hint: 'made of前面需要什么？',
            explanation: 'be made of表示由……制成，My house is made of bricks正确做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l4q6',
            type: 'fill',
            question: '____, the hare ran fast. Then, he slept under a tree.（首先）',
            answer: 'First',
            acceptableAnswers: ['Firstly'],
            hint: '故事开头用什么词？',
            explanation: 'First表示首先，用于复述故事的开头做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l4q7',
            type: 'choice',
            question: '回顾已学：以下哪个是第5单元"Jobs"学的内容？',
            options: ['I want to be a doctor', 'Slow and steady', 'First, Then, Finally', 'Made of bricks'],
            answer: 'I want to be a doctor',
            hint: '[Jobs]（英语三年级-第5单元）',
            explanation: 'I want to be a doctor是第5单元Jobs的want to be句型做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      },
      {
        id: 'e3u6l5',
        title: 'Stories in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在生活中用英语复述最喜欢的故事',
        successCriteria: '①能复述一个故事 ②能说出故事寓意',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把故事生活化：用英语复述你最喜欢的故事。\n共学四步：\n①对话出题：家长问用英语复述一个你喜欢的故事。。\n②孩子应答：孩子应说First... Then... Finally...。\n③答错引导：若孩子说不出，家长当同学一起讲！扫描课时发音动画复习；让孩子点读课件情景卡；家长边听边鼓励，用问题引导。\n④快速检测：1.孩子复述一个故事；2.用连接词；3.说故事寓意。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `故事是学习英语的好方法！用英语复述你最喜欢的故事`, animationType: 'reveal' },
          { type: 'example', content: `场景1：龟兔赛跑 → Slow and steady wins the race!
场景2：复述故事 → First, the hare ran fast. Then, he slept. Finally, the tortoise won!
场景3：三只小猪 → My house is made of bricks!`, animationType: 'bounce', label: 'Stories在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u6l5q1',
            type: 'choice',
            question: '在生活中，什么时候会用到"Tortoise"？',
            options: ['When telling fables or stories', 'When eating', 'When sleeping', 'When exercising'],
            answer: 'When telling fables or stories',
            hint: '这个表达在什么场景使用？',
            explanation: 'Tortoise在Stories相关的日常场景中使用做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l5q2',
            type: 'fill',
            question: 'Slow and ____ wins the race! This lesson helps me in life.（稳扎稳打）',
            answer: 'steady',
            hint: '龟兔赛跑教给我们的道理',
            explanation: 'Slow and steady wins the race表示稳扎稳打才能赢，在生活中遇到困难也要坚持做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l5q3',
            type: 'choice',
            question: '在生活中遇到困难想放弃时，应该想起龟兔赛跑教给我们的什么道理？',
            options: ['Slow and steady wins the race', 'Take a nap like the hare', 'Give up when it is hard', 'Be proud like the hare'],
            answer: 'Slow and steady wins the race',
            hint: '乌龟为什么能赢兔子？',
            explanation: 'Slow and steady wins the race告诉我们坚持比速度更重要，遇到困难不要放弃做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l5q4',
            type: 'drag',
            question: '把词拖到正确位置：My house is made of ____. The wolf can\'t blow it down.（砖头）',
            answer: 'bricks',
            hint: '三只小猪中哪种材料最结实？',
            explanation: 'bricks是砖头，made of bricks表示用砖头建造的房子最结实，大灰狼吹不倒做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l5q5',
            type: 'choice',
            question: '【期末真题】复述故事时，"最后乌龟赢了"用英语怎么说？',
            options: ['Finally, the tortoise won', 'First, the tortoise won', 'Then, the tortoise won', 'The tortoise is slow'],
            answer: 'Finally, the tortoise won',
            hint: '故事的结局用什么连接词？',
            explanation: 'Finally表示最后，用于复述故事的结尾，Finally, the tortoise won表示最后乌龟赢了做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l5q6',
            type: 'fill',
            question: '____, the hare ran fast. Then, he slept. Finally, the tortoise won.（首先）',
            answer: 'First',
            acceptableAnswers: ['Firstly'],
            hint: '故事开头用什么词？',
            explanation: 'First表示首先，用于复述故事的开头，让故事更有条理做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u6l5q7',
            type: 'choice',
            question: '结合"Jobs"和"Stories"，怎样用英语说"我想当讲故事的人"？',
            options: ['I want to be a storyteller', 'I am a tortoise', 'Slow and steady', 'Made of bricks'],
            answer: 'I want to be a storyteller',
            hint: '[Jobs]（英语三年级-第5单元）',
            explanation: '结合职业句型和故事主题：I want to be a + storyteller讲故事的人做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  },
  {
    id: 'e3u7',
    title: 'Communication',
    subtitle: '学会沟通，连接世界',
    order: 7,
    lessons: [
      {
        id: 'e3u7l1',
        title: '电话用语',
        order: 1,
        teachingMethod: '角色扮演法',
        learningObjective: '我能用This is.../May I speak to...?打电话',
        successCriteria: '①能说出电话自我介绍This is... ②能用May I speak to...?找人',
        iDo: '家长模拟打电话"Hello? This is Mom. May I speak to Lily, please?" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起用玩具电话练习打电话对话 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成一次英语电话对话【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：电话用语This is...（我是……，不用I am）、May I speak to...?（请找……接电话）、Hold on（稍等）。\n共学四步：\n①对话出题：家长假装打电话说Hello, this is Mom. May I speak to...?。\n②孩子应答：孩子应说This is... Speaking!。\n③答错引导：若孩子说不出，家长当同学一起打电话！扫描课时发音动画听发音；让孩子点读课件对话卡；家长用玩具电话边演边说。\n④快速检测：1.孩子说This is...；2.说May I speak to...?；3.说Hold on。',
        funElement: '用纸杯做"电话"，练习英语通话',
        gsapAnimations: ['GSAP:电话铃声响起-phoneRing', 'GSAP:通话气泡弹出-speechBubble'],
        images: ['IMG:打电话场景', 'IMG:电话用语卡片'],
        content: [
          { type: 'text', content: '打电话时说This is...而不是I am...这是英语电话礼仪！May I speak to...? 请找……接电话', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Hello? This is Xiaoming.\n小红: Hi, Xiaoming! This is Xiaohong.\n小明: May I speak to Lily, please?\n小红: Hold on, please. Lily! It\'s for you!', label: '电话对话', animationType: 'reveal' },
          { type: 'example', content: 'This is... — 我是……（电话中）\nMay I speak to...? — 请找……接电话？\nHold on, please — 请稍等\nIt\'s for you — 找你的\nCan I leave a message? — 我能留言吗？', label: '电话用语', animationType: 'bounce' },
          { type: 'tip', content: '电话中说"我是……"用This is...不用I am...，这是英语电话礼仪，要记住哦！', label: '文化提示', animationType: 'pulse' },
          { type: 'animation', content: '电话铃声响起，通话气泡弹出的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Phone Call', sceneBuildConfig: { sceneName: 'Phone Call', elements: [ { id: 'el-0', text: 'Phone', emoji: '📞', delay: 0, animation: 'bounceIn', ttsText: 'Phone' }, { id: 'el-1', text: 'Hello', emoji: '💬', delay: 0.4, animation: 'popIn', ttsText: 'Hello' }, { id: 'el-2', text: 'Talk', emoji: '🗣', delay: 0.8, animation: 'scaleIn', ttsText: 'Talk' } ] }, ttsNarration: '打电话：电话、你好、交谈' } },
          { type: 'tip', content: '本课主要使用角色扮演法：通过角色扮演沉浸式体验学习', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u7l1q1',
            type: 'choice',
            question: '打电话时"我是..."用英语怎么说？',
            options: ['This is...', 'I am...', 'My name is...', 'You are...'],
            answer: 'This is...',
            hint: '电话中介绍自己和面对面不同',
            explanation: '电话中用This is...而不是I am...，这是英语电话礼仪做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l1q2',
            type: 'fill',
            question: 'May I ____ to Lily, please?（通话）',
            answer: 'speak',
            acceptableAnswers: ['talk'],
            hint: '请找某人接电话用什么词？',
            explanation: 'May I speak to...?表示请找...接电话，是礼貌的电话用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l1q3',
            type: 'drag',
            question: '把用语拖到正确位置：请稍等 = ____ on, please',
            answer: 'Hold',
            hint: '让对方等一下',
            explanation: 'Hold on, please表示请稍等，是电话中常用的礼貌用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l1q4',
            type: 'choice',
            question: '电话中对方要找的人不在，你应该怎么说？',
            options: ['Can I take a message?', 'I am not here', 'Go away please', 'He is not a person'],
            answer: 'Can I take a message?',
            hint: '礼貌地让对方留言',
            explanation: 'Can I take a message?表示我能留言吗？是电话中对方不在时的礼貌用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l1q5',
            type: 'fill',
            question: 'It\'s ____ you! Lily, pick up the phone.（给）',
            answer: 'for',
            hint: '电话中告诉对方"找你的"',
            explanation: "It's for you表示找你的，是电话中转接电话给对方的常用表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u7l1q6',
            type: 'choice',
            question: '【期末真题】电话中说"我是小明"，正确的英语表达是？',
            options: ['This is Xiaoming', 'I am Xiaoming', 'My name is Xiaoming', 'You are Xiaoming'],
            answer: 'This is Xiaoming',
            hint: '电话中介绍自己用什么句型？',
            explanation: '电话中用This is...而不是I am...，这是英语电话礼仪，This is Xiaoming是正确表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Slow and ____ wins the race.（稳扎稳打）',
            answer: 'steady',
            hint: '[Stories]（英语三年级-第6单元）',
            explanation: '回顾u6所学：Slow and steady wins the race表示稳扎稳打才能赢做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u7l2',
        title: '邮件格式',
        order: 2,
        teachingMethod: '视觉化教学法',
        learningObjective: '我能写出包含Dear/Best wishes的英语邮件格式',
        successCriteria: '①能说出邮件的5个部分 ②能写一封简单邮件',
        iDo: '家长展示邮件格式"Dear friend, How are you? ... Best wishes, Lily"，标注各部分 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起写一封简短的英语邮件给对方 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立写一封简短的英语邮件【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：邮件格式Dear...（称呼）+How are you?（问候）+正文+Best wishes（祝福）+署名。\n共学四步：\n①对话出题：家长问邮件开头怎么称呼？并说Dear...。\n②孩子应答：孩子应说Dear Mom, How are you?。\n③答错引导：若孩子说不出，家长当同学一起写！扫描课时发音动画听发音；让孩子点读课件格式卡；家长和孩子一起写一封邮件边写边说。\n④快速检测：1.孩子说出邮件5部分；2.说Dear和Best wishes；3.写一封简单邮件。',
        funElement: '制作"英语邮箱"，家人之间用英语邮件交流',
        gsapAnimations: ['GSAP:信封打开-envelopeOpen', 'GSAP:邮件发送动画-sendMail'],
        images: ['IMG:邮件格式示例', 'IMG:邮件写作卡片'],
        content: [
          { type: 'text', content: '英语邮件格式：Dear...称呼 + How are you?问候 + 正文 + Best wishes结尾祝福 + 署名。简单明了！', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: Let\'s write an email!\n小明: Dear friend, How are you?\n小红: I am fine. I like playing football.\n小明: Best wishes, Xiaoming.\n老师: Great job!', label: '邮件写作对话', animationType: 'reveal' },
          { type: 'example', content: 'Dear... — 亲爱的……（称呼）\nHow are you? — 你好吗？（问候）\nBest wishes — 最美好的祝愿（结尾）\nYours — 你的（署名前）\nFrom — 来自（署名前）', label: '邮件格式词汇', animationType: 'typewriter' },
          { type: 'tip', content: 'Dear是邮件的正式称呼，朋友之间也可以用Hi开头，更亲切！', label: '写作提示', animationType: 'pulse' },
          { type: 'animation', content: '信封打开，邮件发送的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Letter', sceneBuildConfig: { sceneName: 'Letter', elements: [ { id: 'el-0', text: 'Envelope', emoji: '✉️', delay: 0, animation: 'bounceIn', ttsText: 'Envelope' }, { id: 'el-1', text: 'Letter', emoji: '📝', delay: 0.4, animation: 'popIn', ttsText: 'Letter' }, { id: 'el-2', text: 'Mail', emoji: '📮', delay: 0.8, animation: 'slideIn', ttsText: 'Mail' } ] }, ttsNarration: '信件：信封、信、邮箱' } },
          { type: 'tip', content: '本课主要使用视觉化教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u7l2q1',
            type: 'choice',
            question: '邮件开头用什么称呼？',
            options: ['Dear...', 'Hello!', 'Hey!', 'Hi!'],
            answer: 'Dear...',
            hint: '正式的邮件称呼',
            explanation: 'Dear...是邮件的正式称呼，后面跟收件人的名字做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l2q2',
            type: 'fill',
            question: 'Best ____, Lily.（祝愿）',
            answer: 'wishes',
            hint: '邮件结尾的祝福语',
            explanation: 'Best wishes表示最美好的祝愿，是邮件常用的结尾做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l2q3',
            type: 'drag',
            question: '把问候语拖到正确位置：你好吗？= ____ are you?',
            answer: 'How',
            hint: '问对方近况',
            explanation: 'How are you?表示你好吗？，是邮件常用的问候语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l2q4',
            type: 'choice',
            question: '邮件结尾祝福语"Best wishes"后面通常接什么？',
            options: ['署名', '称呼', '正文', '问候'],
            answer: '署名',
            hint: 'Best wishes后面跟谁的名字？',
            explanation: 'Best wishes后面接发件人的署名，如Best wishes, Lily，Lily是署名做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l2q5',
            type: 'fill',
            question: '____ friend, How are you? I miss you very much.（亲爱的）',
            answer: 'Dear',
            hint: '邮件开头的称呼用什么词？',
            explanation: 'Dear表示亲爱的，是邮件开头的正式称呼，Dear friend表示亲爱的朋友做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l2q6',
            type: 'choice',
            question: '【期末真题】写邮件时，"Dear Tom"中Dear的作用是？',
            options: ['称呼收件人', '结束邮件', '写正文内容', '表示署名'],
            answer: '称呼收件人',
            hint: 'Dear在邮件开头的作用是什么？',
            explanation: 'Dear在邮件开头用来称呼收件人，Dear Tom表示亲爱的Tom，是邮件的称呼部分做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：May I ____ to Lily, please?（通话）',
            answer: 'speak',
            hint: '[Communication-电话用语]（英语三年级-第7单元）',
            explanation: '回顾l1所学：May I speak to...?表示请找...接电话，是电话用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u7l3',
        title: '邀请函',
        order: 3,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能写出包含When/Where的邀请函',
        successCriteria: '①能说出邀请函3要素 ②能写一封简单邀请函',
        iDo: '家长展示邀请函"You\'re invited to my birthday party! When: Saturday 3pm. Where: My home" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起制作一张英语邀请函 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立制作一张英语邀请函，包含时间、地点和活动【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：邀请函You\'re invited to my party!包含When（时间）、Where（地点）、What（活动）。\n共学四步：\n①对话出题：家长问邀请函要写什么？并说When and where!。\n②孩子应答：孩子应说When, where, what!。\n③答错引导：若孩子说不出，家长当同学一起写！扫描课时发音动画听发音；让孩子点读课件格式卡；家长模拟生日派对边说边写邀请函。\n④快速检测：1.孩子说出邀请函3要素；2.说You\'re invited；3.写一封简单邀请函。',
        funElement: '设计一张漂亮的英语生日邀请函，画上装饰',
        gsapAnimations: ['GSAP:邀请函展开-inviteOpen', 'GSAP:彩带飘落-confettiFall'],
        images: ['IMG:邀请函示例', 'IMG:邀请函模板'],
        content: [
          { type: 'text', content: 'You\'re invited to my birthday party! 你被邀请参加我的生日派对！邀请函要包含When时间、Where地点、What活动', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: You\'re invited to my party!\n小红: When is the party?\n小明: On Saturday at 3pm.\n小红: Where?\n小明: At my home! Please come!', label: '邀请函对话', animationType: 'reveal' },
          { type: 'example', content: 'When — 什么时候（时间）\nWhere — 在哪里（地点）\nWhat — 什么（活动）\nYou\'re invited — 你被邀请了\nPlease come — 请来参加\nRSVP — 请回复', label: '邀请函要素', animationType: 'bounce' },
          { type: 'tip', content: '邀请函三要素：When时间、Where地点、What活动。写全了才能让客人准时到达！', label: '写作提示', animationType: 'pulse' },
          { type: 'animation', content: '邀请函展开，彩带飘落的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Invitation', sceneBuildConfig: { sceneName: 'Invitation', elements: [ { id: 'el-0', text: 'Invitation', emoji: '💌', delay: 0, animation: 'bounceIn', ttsText: 'Invitation' }, { id: 'el-1', text: 'Ribbon', emoji: '🎀', delay: 0.4, animation: 'popIn', ttsText: 'Ribbon' }, { id: 'el-2', text: 'Balloon', emoji: '🎈', delay: 0.8, animation: 'scaleIn', ttsText: 'Balloon' }, { id: 'el-3', text: 'Party', emoji: '🎉', delay: 1.2, animation: 'fadeIn', ttsText: 'Party' } ] }, ttsNarration: '邀请函：邀请、彩带、气球、派对' } },
          { type: 'tip', content: '本课主要使用EDI直接教学：家长示范-亲子共练-孩子独立完成三步闭环', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u7l3q1',
            type: 'choice',
            question: '邀请函中"时间"用哪个词？',
            options: ['When', 'Where', 'What', 'Who'],
            answer: 'When',
            hint: '什么时候举办？',
            explanation: 'When表示什么时候，邀请函中标注活动时间做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l3q2',
            type: 'fill',
            question: 'You\'re ____ to my party!（被邀请）',
            answer: 'invited',
            hint: '邀请的被动形式',
            explanation: "You're invited表示你被邀请了，是邀请函的常用开头做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u7l3q3',
            type: 'drag',
            question: '把信息拖到正确位置：活动地点 = ____',
            answer: 'Where',
            hint: '在哪里举办？',
            explanation: 'Where表示在哪里，邀请函中标注活动地点做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l3q4',
            type: 'choice',
            question: '邀请函中"What"表示什么信息？',
            options: ['活动内容', '活动时间', '活动地点', '活动人数'],
            answer: '活动内容',
            hint: 'What在邀请函中指什么？',
            explanation: 'What表示什么，在邀请函中标注活动内容，如生日派对、野餐等做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l3q5',
            type: 'fill',
            question: 'Please ____ to my birthday party! It will be fun!（来）',
            answer: 'come',
            hint: '邀请别人来参加用什么动词？',
            explanation: 'Please come to my party表示请来参加我的派对，come是来的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l3q6',
            type: 'choice',
            question: '【期末真题】"You\'re invited to my party."中invited的意思是？',
            options: ['被邀请', '邀请别人', '拒绝邀请', '取消邀请'],
            answer: '被邀请',
            hint: "You're invited是主动还是被动？",
            explanation: "invited是invite的过去分词，You're invited表示你被邀请了，是被动语态做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u7l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：____ on, please. Lily! It\'s for you!（稍等）',
            answer: 'Hold',
            hint: '[Communication-电话用语]（英语三年级-第7单元）',
            explanation: '回顾l1所学：Hold on, please表示请稍等，是电话中转接时的礼貌用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u7l4',
        title: 'Communication Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用Communication单元的电话、邮件和邀请函',
        successCriteria: '①能说出电话用语 ②能说出邮件格式',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾Communication单元：电话This is.../May I speak to、邮件Dear/Best wishes、邀请函When/Where/You\'re invited。\n共学四步：\n①对话出题：家长问打电话怎么说我是？。\n②孩子应答：孩子应说This is...。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子说电话用语；2.说邮件格式；3.说邀请函要素。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Communication单元！我们学了电话用语This is.../May I speak to/Hold on、邮件格式Dear/Best wishes、邀请函When/Where/You're invited`, animationType: 'reveal' },
          { type: 'formula', content: `沟通表达公式：
电话：This is... (不是I am...)
邮件：Dear + 名字 ... Best wishes, + 署名
邀请函：When + Where + What`, animationType: 'typewriter', label: 'Communication公式' },
          { type: 'animation', content: `Communication单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Communication Review', cardRevealConfig: { cards: [ { front: 'Phone', back: '📞', ttsText: 'Phone' }, { front: 'Letter', back: '✉️', ttsText: 'Letter' }, { front: 'Email', back: '📧', ttsText: 'Email' }, { front: 'Message', back: '💬', ttsText: 'Message' } ] }, ttsNarration: 'Communication单元回顾：电话、信件、邮件、消息' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u7l4q1',
            type: 'choice',
            question: '本单元"Communication"的核心词汇是？',
            options: ['This is...', 'Dear', 'When', 'You\'re invited'],
            answer: 'This is...',
            hint: '回顾本单元学的第一个关键词',
            explanation: 'This is...是Communication单元的核心词汇做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l4q2',
            type: 'fill',
            question: 'May I speak ____ Lily, please?（给/对）',
            answer: 'to',
            hint: 'speak to表示对...说话',
            explanation: 'speak to表示对...说话，May I speak to Lily表示请找Lily接电话做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l4q3',
            type: 'choice',
            question: '以下哪个表达属于"Communication"主题？',
            options: ['Hold on', 'Good morning', 'One two three', 'Red and blue'],
            answer: 'Hold on',
            hint: '哪个和本单元主题相关？',
            explanation: 'Hold on是Communication单元的重要表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l4q4',
            type: 'drag',
            question: '把词拖到正确位置：邮件结尾祝福：Best ____, Lily（祝愿）',
            answer: 'wishes',
            hint: '邮件结尾的祝福语',
            explanation: 'Best wishes表示最美好的祝愿，是邮件常用的结尾祝福语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l4q5',
            type: 'choice',
            question: '【期末真题】"This is..."和"May I speak to"有什么共同点？',
            options: ['Both are used for phone calls', 'Both are color words', 'Both are number words', 'They have nothing in common'],
            answer: 'Both are used for phone calls',
            hint: '它们属于哪个单元？',
            explanation: 'This is...和May I speak to都属于Communication单元的主题内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l4q6',
            type: 'fill',
            question: 'You\'re ____ to my party! When: Saturday. Where: My home.（被邀请）',
            answer: 'invited',
            hint: '邀请函的常用开头',
            explanation: "You're invited表示你被邀请了，是邀请函的常用开头表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u7l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Stories"学的内容？',
            options: ['Tortoise', 'This is...', 'May I speak to', 'Goodbye'],
            answer: 'Tortoise',
            hint: '[Stories]（英语三年级-第6单元）',
            explanation: 'Tortoise是上一单元"Stories"的核心内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      },
      {
        id: 'e3u7l5',
        title: 'Communication in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在生活中用英语打电话、写邮件和发邀请',
        successCriteria: '①能模拟打电话 ②能写简单邮件或邀请函',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把沟通生活化：用英语打电话、写邮件、发邀请。\n共学四步：\n①对话出题：家长说我们模拟打电话，你找妈妈。。\n②孩子应答：孩子应说May I speak to Mom?。\n③答错引导：若孩子说不出，家长当同学一起打！扫描课时发音动画复习；让孩子点读课件情景卡；家长用电话模拟场景边演边说。\n④快速检测：1.孩子模拟打电话；2.写邮件开头；3.说邀请函要素。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `沟通连接世界！用英语打电话、写邮件、发邀请`, animationType: 'reveal' },
          { type: 'example', content: `场景1：打电话 → Hello? This is Xiaoming. May I speak to Lily?
场景2：写邮件 → Dear friend, How are you? Best wishes, Lily.
场景3：邀请 → You're invited to my party! When: Saturday.`, animationType: 'bounce', label: 'Communication在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u7l5q1',
            type: 'choice',
            question: '在生活中，什么时候会用到"This is..."？',
            options: ['When making a phone call', 'When eating', 'When sleeping', 'When exercising'],
            answer: 'When making a phone call',
            hint: '这个表达在什么场景使用？',
            explanation: 'This is...在Communication相关的日常场景中使用做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l5q2',
            type: 'fill',
            question: '打电话时说：____ I speak to Lily, please?（可以）',
            answer: 'May',
            acceptableAnswers: ['Can'],
            hint: '礼貌地请求找某人接电话',
            explanation: 'May I speak to...?表示请找...接电话，May表示可以/能，是礼貌的请求做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l5q3',
            type: 'choice',
            question: '小明打电话时想让对方稍等，他应该怎么说？',
            options: ['Hold on, please', 'Dear friend', 'Best wishes', 'You\'re invited'],
            answer: 'Hold on, please',
            hint: '让对方等一下用什么表达？',
            explanation: 'Hold on, please表示请稍等，是电话中让对方等待的礼貌用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l5q4',
            type: 'drag',
            question: '把词拖到正确位置：写邮件给朋友：____ Tom, How are you?（亲爱的）',
            answer: 'Dear',
            hint: '邮件开头的称呼',
            explanation: 'Dear表示亲爱的，是邮件开头的称呼，Dear Tom表示亲爱的Tom做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l5q5',
            type: 'choice',
            question: '【期末真题】在生活中遇到以下情况，应该用哪个英语表达？写信给朋友问候',
            options: ['Dear... How are you?', 'This is...', 'Hold on', 'You\'re invited'],
            answer: 'Dear... How are you?',
            hint: '写信问候用什么表达？',
            explanation: '写信问候用Dear...称呼加How are you?问候，是邮件的标准开头做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u7l5q6',
            type: 'fill',
            question: '邀请朋友参加派对：You\'re ____ to my birthday party!（被邀请）',
            answer: 'invited',
            hint: '邀请函的常用开头',
            explanation: "You're invited表示你被邀请了，是邀请朋友参加派对的常用表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。"
          },
          {
            id: 'e3u7l5q7',
            type: 'choice',
            question: '结合"Stories"和"Communication"，怎样用英语打电话邀请朋友听故事？',
            options: ['May I speak to Tom? I want to tell you a story.', 'Tortoise and Hare', 'This is a story', 'Hold on the story'],
            answer: 'May I speak to Tom? I want to tell you a story.',
            hint: '[Stories]（英语三年级-第6单元）',
            explanation: '结合电话用语和故事主题：May I speak to Tom? + I want to tell you a story做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  },
  {
    id: 'e3u8',
    title: 'Review & Show',
    subtitle: '学期总结，展示你的英语',
    order: 8,
    lessons: [
      {
        id: 'e3u8l1',
        title: '学期回顾',
        order: 1,
        teachingMethod: '思维导图法',
        learningObjective: '我能用英语回顾这学期学过的6个主题',
        successCriteria: '①能说出6个主题英语 ②能用英语总结一学期学习',
        iDo: '家长画思维导图，回顾本学期内容"This term we learned about friends, health, nature, jobs..." 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成思维导图，用英语说出每个单元的关键词 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用英语回顾本学期学到的内容【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：学期回顾friends/health/nature/jobs/stories/communication六大主题。\n共学四步：\n①对话出题：家长问这学期学了哪些主题？并说Friends!。\n②孩子应答：孩子应说Friends, health, nature!。\n③答错引导：若孩子说不出，家长当同学一起回顾！扫描课时发音动画听发音；让孩子点读课件主题卡；家长当同学一起想，用问题引导。\n④快速检测：1.孩子说出6个主题；2.说一个主题内容；3.用英语总结一句。',
        funElement: '玩"知识大转盘"，转到哪个单元就说出3个关键词',
        gsapAnimations: ['GSAP:思维导图展开-mindMap', 'GSAP:知识节点亮起-nodeLight'],
        images: ['IMG:学期回顾思维导图', 'IMG:各单元关键词卡'],
        content: [
          { type: 'text', content: 'This term we learned about friends, health, nature, jobs, stories, and communication! 这学期我们学了朋友、健康、自然、职业、故事和沟通！', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: What did we learn this term?\n小明: We learned about friends! She is tall and kind.\n小红: We learned about health! Eat more vegetables!\n小明: We learned I want to be a pilot!', label: '学期回顾对话', animationType: 'reveal' },
          { type: 'example', content: 'Friends — 朋友（比较级）\nHealth — 健康（好习惯）\nNature — 自然（环保）\nJobs — 职业（want to be）\nStories — 故事（First/Then/Finally）\nCommunication — 沟通（电话/邮件）', label: '学期知识要点', animationType: 'bounce' },
          { type: 'tip', content: '回顾时不要只记单词，要回忆情境和用法！用思维导图整理更清晰', label: '复习提示', animationType: 'pulse' },
          { type: 'animation', content: '思维导图展开，知识节点亮起的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Mind Map', sceneBuildConfig: { sceneName: 'Mind Map', elements: [ { id: 'el-0', text: 'Mind Map', emoji: '🧠', delay: 0, animation: 'bounceIn', ttsText: 'Mind map' }, { id: 'el-1', text: 'Node', emoji: '🔵', delay: 0.4, animation: 'popIn', ttsText: 'Node' }, { id: 'el-2', text: 'Knowledge', emoji: '💡', delay: 0.8, animation: 'scaleIn', ttsText: 'Knowledge' }, { id: 'el-3', text: 'Connect', emoji: '🔗', delay: 1.2, animation: 'fadeIn', ttsText: 'Connect' } ] }, ttsNarration: '思维导图：脑图、节点、知识、连接' } },
          { type: 'tip', content: '本课主要使用思维导图法：用思维导图梳理知识结构加深理解', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u8l1q1',
            type: 'choice',
            question: '本学期我们学了哪个关于职业的句型？',
            options: ['I want to be a...', 'I have a...', 'I like a...', 'I see a...'],
            answer: 'I want to be a...',
            hint: '表达梦想职业的句型',
            explanation: 'I want to be a...是表达梦想职业的句型，在Jobs单元学的做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l1q2',
            type: 'fill',
            question: 'We learned about ____ in Unit 4.（自然）',
            answer: 'Nature',
            hint: '第4单元的主题',
            explanation: 'Unit 4的主题是Nature，学了自然景观和环境保护做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l1q3',
            type: 'flashcard',
            question: '看比较级卡片，说出规则',
            answer: '形容词+er',
            hint: '比较级的变化规则',
            explanation: '比较级的基本规则是形容词+er，如tall→taller做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l1q4',
            type: 'choice',
            question: '回顾本学期，"I want to be a pilot"属于哪个单元的主题？',
            options: ['Jobs', 'Nature', 'Stories', 'Communication'],
            answer: 'Jobs',
            hint: 'want to be a...是哪个单元学的句型？',
            explanation: 'I want to be a pilot是Jobs单元学的梦想职业句型，pilot是飞行员做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l1q5',
            type: 'fill',
            question: 'I am ____ than my brother.（更高）',
            answer: 'taller',
            hint: '根据上下文填入正确的词',
            explanation: 'I am taller than my brother表示我比我哥哥更高做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l1q6',
            type: 'choice',
            question: '【期末真题】"I want to be a teacher."这句话用来表达什么？',
            options: ['A future career wish', 'A current job', 'A past experience', 'A hobby'],
            answer: 'A future career wish',
            hint: '结合生活场景思考',
            explanation: 'I want to be a在特定场景中使用，要理解其含义和用法做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l1q7',
            type: 'drag',
            question: '把正确的词拖到空格处：I want to be a ____.（老师）',
            answer: 'teacher',
            hint: '[Community Helpers]（英语三年级-第5单元）',
            explanation: '回顾已学知识：I want to be a teacher表示我想当老师做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u8l2',
        title: '才艺展示',
        order: 2,
        teachingMethod: '展示教学法',
        learningObjective: '我能用Hello everyone/Let me show you做才艺展示',
        successCriteria: '①能用英语开场介绍 ②能用英语展示一项才艺',
        iDo: '家长示范展示"Hello everyone! I can sing an English song. Let me show you!" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起准备英语才艺展示节目 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立准备并展示一个英语才艺（唱歌/讲故事/对话）【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：才艺展示Hello everyone!（大家好）、Let me show you.（让我展示给你看），唱歌讲故事或表演。\n共学四步：\n①对话出题：家长说展示你的才艺吧，先怎么开场？并说Hello everyone!。\n②孩子应答：孩子应说Hello everyone! Let me show you.。\n③答错引导：若孩子不敢展示，家长当同学一起演！扫描课时发音动画听发音；让孩子点读课件句子卡；家长带头展示，降低孩子紧张感。\n④快速检测：1.孩子说开场白；2.说Let me show you；3.展示一项才艺。',
        funElement: '举办"家庭英语才艺秀"，全家人一起展示',
        gsapAnimations: ['GSAP:舞台灯光-spotlight', 'GSAP:掌声动画-applause'],
        images: ['IMG:才艺展示场景', 'IMG:展示节目单'],
        content: [
          { type: 'text', content: 'Hello everyone! 大家好！才艺展示是检验学习成果的好方式。你可以唱歌、讲故事或表演对话！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Hello everyone! I can sing an English song.\n观众: Great!\n小明: Let me show you! ♪ Twinkle twinkle little star... ♪\n观众: Wonderful! Thank you, everyone!', label: '才艺展示对话', animationType: 'reveal' },
          { type: 'example', content: 'Hello everyone! — 大家好！\nLet me show you — 让我展示给你看\nI can sing — 我会唱歌\nI can tell a story — 我会讲故事\nThank you, everyone! — 谢谢大家！', label: '展示用语', animationType: 'bounce' },
          { type: 'tip', content: '展示时声音要大，表情要自信！Let me show you让我展示给你看', label: '表演提示', animationType: 'pulse' },
          { type: 'animation', content: '舞台灯光，掌声动画的才艺秀动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Talent Show', sceneBuildConfig: { sceneName: 'Talent Show', elements: [ { id: 'el-0', text: 'Stage', emoji: '🎪', delay: 0, animation: 'bounceIn', ttsText: 'Stage' }, { id: 'el-1', text: 'Light', emoji: '💡', delay: 0.4, animation: 'popIn', ttsText: 'Light' }, { id: 'el-2', text: 'Applause', emoji: '👏', delay: 0.8, animation: 'scaleIn', ttsText: 'Applause' }, { id: 'el-3', text: 'Star', emoji: '⭐', delay: 1.2, animation: 'fadeIn', ttsText: 'Star' } ] }, ttsNarration: '才艺秀：舞台、灯光、掌声、星星' } },
          { type: 'tip', content: '本课主要使用展示教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u8l2q1',
            type: 'choice',
            question: '才艺展示开场怎么说？',
            options: ['Hello everyone!', 'Goodbye!', 'Thank you!', 'See you!'],
            answer: 'Hello everyone!',
            hint: '向观众打招呼',
            explanation: 'Hello everyone!表示大家好！，是展示的开场问候做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l2q2',
            type: 'fill',
            question: 'Let me ____ you a story.（给...讲）',
            answer: 'tell',
            hint: '讲故事用什么动词？',
            explanation: 'tell a story表示讲故事，tell是讲述的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l2q3',
            type: 'drag',
            question: '把句子拖到正确位置：谢谢大家 = ____ you, everyone!',
            answer: 'Thank',
            hint: '展示结束说什么？',
            explanation: 'Thank you, everyone!表示谢谢大家，是展示的结束语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l2q4',
            type: 'choice',
            question: '才艺展示时，"让我展示给你看"用英语怎么说？',
            options: ['Let me show you', 'I want to be a', 'Eat more vegetables', 'Don\'t litter'],
            answer: 'Let me show you',
            hint: '展示才艺时说什么？',
            explanation: 'Let me show you表示让我展示给你看，是才艺展示时的常用表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l2q5',
            type: 'fill',
            question: 'I can ____ an English song. Let me show you!（唱）',
            answer: 'sing',
            hint: '唱歌用什么动词？',
            explanation: 'sing a song表示唱歌，I can sing an English song表示我会唱英文歌做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l2q6',
            type: 'choice',
            question: '【期末真题】才艺展示结束时，应该对观众说什么？',
            options: ['Thank you, everyone!', 'I want to be a', 'Hello everyone', 'See you tomorrow'],
            answer: 'Thank you, everyone!',
            hint: '展示结束要感谢谁？',
            explanation: 'Thank you, everyone!表示谢谢大家，是才艺展示结束时的礼貌用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l2q7',
            type: 'drag',
            question: '把正确的词拖到空格处：May I ____ to Lily, please?（通话）',
            answer: 'speak',
            hint: '[Communication]（英语三年级-第7单元）',
            explanation: '回顾u7所学：May I speak to...?表示请找...接电话，是电话用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'e3u8l3',
        title: '英语角',
        order: 3,
        teachingMethod: '交际教学法',
        learningObjective: '我能用What\'s your favorite...?/How about you?在英语角对话',
        successCriteria: '①能用What\'s your favorite...?提问 ②能回应How about you?',
        iDo: '家长模拟英语角场景，示范自由对话"What\'s your favorite color? I like blue. How about you?" 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起进行英语自由对话，围绕感兴趣的话题 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立参与英语对话，能就一个话题交流3-5句【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课核心：英语角对话What\'s your favorite color?（你最喜欢的颜色）、How about you?（你呢）。\n共学四步：\n①对话出题：家长问What\'s your favorite color?。\n②孩子应答：孩子应说I like blue. How about you?。\n③答错引导：若孩子说不出，家长当同学一起聊！扫描课时发音动画听发音；让孩子点读课件对话卡；家长模拟英语角边问边答。\n④快速检测：1.孩子用What\'s your favorite...?提问；2.回应How about you?；3.完成一次对话。',
        funElement: '举办"家庭英语角"，每周固定时间用英语聊天',
        gsapAnimations: ['GSAP:对话气泡交替-chatBubble', 'GSAP:话题标签旋转-topicSpin'],
        images: ['IMG:英语角场景', 'IMG:对话话题卡片'],
        content: [
          { type: 'text', content: '英语角English Corner是练习英语对话的好地方！What\'s your favorite color? I like blue. How about you? 你呢？', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What\'s your favorite color?\n小红: I like blue. How about you?\n小明: I like green! Do you like English?\n小红: Yes, I do! English is fun!', label: '英语角对话', animationType: 'reveal' },
          { type: 'example', content: 'What\'s your favorite...? — 你最喜欢什么？\nHow about you? — 你呢？\nI like... — 我喜欢……\nDo you like...? — 你喜欢……吗？\nYes, I do! — 是的！\nNo, I don\'t. — 不，我不喜欢。', label: '对话用语', animationType: 'bounce' },
          { type: 'tip', content: 'How about you? 你呢？是对话中反问对方的好方法，让对话继续下去！', label: '对话技巧', animationType: 'pulse' },
          { type: 'animation', content: '对话气泡交替，话题标签旋转的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Conversation', sceneBuildConfig: { sceneName: 'Conversation', elements: [ { id: 'el-0', text: 'Speech', emoji: '💬', delay: 0, animation: 'popIn', ttsText: 'Speech' }, { id: 'el-1', text: 'Topic', emoji: '🏷', delay: 0.4, animation: 'scaleIn', ttsText: 'Topic' }, { id: 'el-2', text: 'Chat', emoji: '🗣', delay: 0.8, animation: 'bounceIn', ttsText: 'Chat' }, { id: 'el-3', text: 'Listen', emoji: '👂', delay: 1.2, animation: 'fadeIn', ttsText: 'Listen' } ] }, ttsNarration: '对话：发言、话题、聊天、倾听' } },
          { type: 'tip', content: '本课主要使用交际教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u8l3q1',
            type: 'choice',
            question: '英语角中"你呢？"用英语怎么说？',
            options: ['How about you?', 'What are you?', 'Who are you?', 'Where are you?'],
            answer: 'How about you?',
            hint: '把问题抛给对方',
            explanation: 'How about you?表示你呢？/你怎么样？，用于对话中反问对方做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l3q2',
            type: 'fill',
            question: 'What\'s your ____ color?（最喜欢的）',
            answer: 'favorite',
            acceptableAnswers: ['favourite'],
            hint: '最喜欢的是什么？',
            explanation: 'favorite表示最喜欢的，What\'s your favorite...?用来询问偏好做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l3q3',
            type: 'drag',
            question: '把回答拖到正确位置：Do you like English? - ____, I do!',
            answer: 'Yes',
            hint: '肯定回答',
            explanation: 'Yes, I do!表示是的，我喜欢！，是Do you...?的肯定回答做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l3q4',
            type: 'choice',
            question: '英语角中，"你喜欢英语吗？"用英语怎么说？',
            options: ['Do you like English?', 'I want to be a', 'Eat more vegetables', 'Don\'t litter'],
            answer: 'Do you like English?',
            hint: '问别人喜欢什么用什么句型？',
            explanation: 'Do you like...?表示你喜欢...吗？，是英语角中询问爱好的常用句型做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l3q5',
            type: 'fill',
            question: 'I like blue. How ____ you?（关于）',
            answer: 'about',
            hint: '反问对方"你呢"用什么表达？',
            explanation: 'How about you?表示你呢？，用于对话中反问对方，让对话继续做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l3q6',
            type: 'choice',
            question: '【期末真题】"How about you?"在对话中的作用是？',
            options: ['反问对方，让对话继续', '结束对话', '表示不喜欢', '表示同意'],
            answer: '反问对方，让对话继续',
            hint: 'How about you?让对话怎样发展？',
            explanation: 'How about you?表示你呢？，用于反问对方，让对话继续下去，是英语角的重要技巧做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l3q7',
            type: 'drag',
            question: '把正确的词拖到空格处：Let me ____ you a story.（给...讲）',
            answer: 'tell',
            hint: '[Review & Show-才艺展示]（英语三年级-第8单元）',
            explanation: '回顾l2所学：tell a story表示讲故事，tell是讲述的意思做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
      {
        id: 'e3u8l4',
        title: 'Review & Show Review',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能回顾并运用Review & Show单元的回顾和展示表达',
        successCriteria: '①能说出6个主题 ②能用英语做展示开场',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起完成回顾练习，互相检查掌握情况 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成所有回顾题目，检验学习效果【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课回顾Review & Show单元：学期回顾friends/health/nature/jobs/stories/communication、才艺展示Hello everyone/Let me show you、英语角How about you/favorite。\n共学四步：\n①对话出题：家长问才艺展示怎么开场？。\n②孩子应答：孩子应说Hello everyone!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子说出6个主题；2.说展示开场；3.说英语角对话。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Review & Show单元！我们学了学期回顾friends/health/nature/jobs/stories/communication、才艺展示Hello everyone/Let me show you、英语角How about you/favorite`, animationType: 'reveal' },
          { type: 'formula', content: `总结公式：
回顾：What did we learn? We learned about...
展示：Hello everyone! Let me show you!
对话：How about you? / What's your favorite...?`, animationType: 'typewriter', label: 'Review & Show公式' },
          { type: 'animation', content: `Review & Show单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Review & Show', cardRevealConfig: { cards: [ { front: 'Review', back: '📚', ttsText: 'Review' }, { front: 'Show', back: '🎤', ttsText: 'Show' }, { front: 'Talent', back: '⭐', ttsText: 'Talent' }, { front: 'Great!', back: '🎉', ttsText: 'Great job!' } ] }, ttsNarration: 'Review & Show单元回顾：复习、展示、才艺、棒极了' } },
          { type: 'tip', content: '本课主要使用形成性评价：通过即时检测反馈调整学习策略', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u8l4q1',
            type: 'choice',
            question: '本单元"Review & Show"的核心词汇是？',
            options: ['Hello everyone', 'I want to be a', 'Don\'t litter', 'Mountains'],
            answer: 'Hello everyone',
            hint: '回顾本单元学的第一个关键词',
            explanation: 'Hello everyone是Review & Show单元才艺展示的核心开场用语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l4q2',
            type: 'fill',
            question: 'I want to be a ____ when I grow up.（老师）',
            answer: 'teacher',
            hint: '和第一个关键词搭配的词',
            explanation: 'I want to be a teacher表示我想成为一名老师做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l4q3',
            type: 'choice',
            question: '以下哪个表达属于"Review & Show"主题？',
            options: ['How about you?', 'Don\'t litter', 'I want to be a', 'Mountains and Rivers'],
            answer: 'How about you?',
            hint: '哪个和本单元主题相关？',
            explanation: 'How about you?是Review & Show单元英语角的重要表达，用于反问对方做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l4q4',
            type: 'drag',
            question: '把词拖到正确位置：I want to be a ____ when I grow up.（老师）',
            answer: 'teacher',
            hint: '完成本单元的核心表达',
            explanation: 'I want to be a teacher是本单元需要掌握的核心内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l4q5',
            type: 'choice',
            question: '【期末真题】"Hello everyone!"和"How about you?"有什么共同点？',
            options: ['Both are used in Review & Show unit', 'Both are color words', 'Both are number words', 'They have nothing in common'],
            answer: 'Both are used in Review & Show unit',
            hint: '它们属于哪个单元？',
            explanation: 'Hello everyone!和How about you?都属于Review & Show单元的主题内容，分别用于才艺展示和英语角做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l4q6',
            type: 'fill',
            question: 'What\'s your ____ color? I like blue.（最喜欢的）',
            answer: 'favorite',
            acceptableAnswers: ['favourite'],
            hint: '英语角中询问偏好的词',
            explanation: 'favorite表示最喜欢的，What\'s your favorite...?用来询问偏好，是英语角的常用句型做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Communication"学的内容？',
            options: ['This is...', 'I want to be a', 'taller', 'Goodbye'],
            answer: 'This is...',
            hint: '[Communication]（英语三年级-第7单元）',
            explanation: 'This is...是上一单元"Communication"的核心内容做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      },
      {
        id: 'e3u8l5',
        title: 'Review & Show in Life',
        order: 5,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能在生活中用英语展示学习成果和交流',
        successCriteria: '①能用英语做展示 ②能用英语角句型交流',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话 【CFU检查理解】家长问"What does this word mean?"',
        weDo: '【引导式】亲子一起在生活中实践英语，模拟真实场景 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中运用英语，完成实际任务【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课把展示生活化：用英语展示你的学习成果。\n共学四步：\n①对话出题：家长说用英语展示你这学期学到的。。\n②孩子应答：孩子应说Hello everyone! Let me show you...。\n③答错引导：若孩子说不出，家长当同学一起展示！扫描课时发音动画复习；让孩子点读课件情景卡；家长当观众鼓励孩子展示。\n④快速检测：1.孩子做展示开场；2.用英语角句型提问；3.说一个主题内容。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `学以致用！用英语展示你的学习成果`, animationType: 'reveal' },
          { type: 'example', content: `场景1：回顾 → We learned about friends, health, and nature!
场景2：展示 → Hello everyone! I can sing an English song.
场景3：对话 → What's your favorite color? I like blue.`, animationType: 'bounce', label: 'Review & Show在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
          { type: 'tip', content: '本课主要使用综合应用教学法：通过科学方法提升学习效果', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e3u8l5q1',
            type: 'choice',
            question: '在生活中，什么时候会用到"I want to be a"？',
            options: ['When talking about future dreams', 'When eating', 'When sleeping', 'When exercising'],
            answer: 'When talking about future dreams',
            hint: '这个表达在什么场景使用？',
            explanation: 'I want to be a在Review & Show相关的日常场景中使用做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l5q2',
            type: 'fill',
            question: 'I want to be a ____ when I grow up.（老师）',
            answer: 'teacher',
            hint: '完成日常表达',
            explanation: 'I want to be a teacher表示我想成为一名老师做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l5q3',
            type: 'choice',
            question: '小明在英语角想问别人"你呢？"，他应该怎么说？',
            options: ['How about you?', 'Eat more vegetables', 'I want to be a', 'I don\'t know'],
            answer: 'How about you?',
            hint: '反问对方用什么表达？',
            explanation: 'How about you?表示你呢？，是英语角中反问对方让对话继续的表达做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l5q4',
            type: 'drag',
            question: '把表达拖到正确场景：I want to be a teacher → ____',
            answer: 'talking about future dreams',
            hint: '在什么场景下使用？',
            explanation: 'I want to be a teacher在谈论未来梦想的场景中使用做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l5q5',
            type: 'choice',
            question: '【期末真题】在生活中遇到以下情况，应该用哪个英语表达？参加英语角和外国朋友交流',
            options: ['What\'s your favorite color? How about you?', 'I want to be a', 'taller', 'Eat more vegetables'],
            answer: 'What\'s your favorite color? How about you?',
            hint: '英语角交流用什么句型？',
            explanation: 'What\'s your favorite...? How about you?是英语角交流的常用句型，询问偏好并反问对方做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l5q6',
            type: 'fill',
            question: 'Hello ____! Let me show you my talent!（大家）',
            answer: 'everyone',
            acceptableAnswers: ['everybody'],
            hint: '才艺展示的开场问候',
            explanation: 'Hello everyone!表示大家好，是才艺展示的开场问候语做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'e3u8l5q7',
            type: 'choice',
            question: '结合"Communication"和"Review & Show"，怎样用英语在英语角打电话邀请朋友？',
            options: ['May I speak to Tom? Let\'s practice English at the English corner.', 'I want to be a', 'This is...', 'None'],
            answer: 'May I speak to Tom? Let\'s practice English at the English corner.',
            hint: '[Communication]（英语三年级-第7单元）',
            explanation: '结合电话用语和英语角主题：May I speak to Tom? + Let\'s practice English at the English corner做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
        ]
      }]
  }
]
