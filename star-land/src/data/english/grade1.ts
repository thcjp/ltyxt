import type { Unit } from '@/types'

export const englishGrade1: Unit[] = [
  {
    id: 'e1u1',
    title: 'Hello!',
    subtitle: '学会打招呼，开启英语之旅',
    order: 1,
    lessons: [
      {
        id: 'e1u1l1',
        title: '打招呼',
        order: 1,
        teachingMethod: 'TPR全身反应法',
        iDo: '家长用夸张的动作和表情说"Hello! Hi!"，配合挥手、鞠躬等动作示范',
        weDo: '亲子一起边做动作边说"Hello!"，互相挥手打招呼，玩打招呼接龙游戏',
        youDo: '孩子独立对着镜子练习说"Hello! Hi!"，并用手偶和玩偶互相打招呼',
        parentTips: '鼓励孩子大声说出来，不要纠正小错误，重在建立开口自信',
        funElement: '唱《Hello Song》儿歌，配合拍手节奏，和玩偶一起唱跳',
        gsapAnimations: ['GSAP:挥手动画-bounce', 'GSAP:文字弹出-scaleIn'],
        images: ['IMG:打招呼场景插图', 'IMG:Hello单词卡'],
        content: [
          { type: 'text', content: 'Hello! 你好！这是英语中最常用的打招呼方式。当你见到朋友的时候，可以说"Hello!"', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Hello!\n小红: Hello! How are you?\n小明: I\'m fine, thank you!', label: '对话练习', animationType: 'reveal' },
          { type: 'example', content: 'Hello — 你好\nHi — 嗨（更随意）\nGood morning — 早上好', label: '打招呼用语', animationType: 'bounce' },
          { type: 'tip', content: '说Hello的时候，要面带微笑，看着对方的眼睛哦！这是礼貌的表现。', label: '文化小贴士', animationType: 'pulse' },
          { type: 'formula', content: '打招呼儿歌：Hello Hello 拍拍手，Hi Hi 挥挥手，Good morning 抬抬头，见到朋友笑悠悠！', label: '打招呼儿歌', animationType: 'typewriter' },
          { type: 'example', content: '英语小笑话：\n小明说"Hello!"，小猫回答"喵！"\n小明说"你说的不是英语！"\n小猫说"我是英国短毛猫，喵就是我的英语！"', label: '英语小笑话', animationType: 'bounce' },
          { type: 'animation', content: '两个小朋友挥手打招呼的动画，配合Hello语音', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u1l1q1',
            type: 'choice',
            question: '打招呼时应该说哪个词？',
            options: ['Hello', 'Goodbye', 'Sorry', 'Please'],
            answer: 'Hello',
            hint: '想一想我们见面时最先说的话',
            explanation: 'Hello是最常用的打招呼用语，表示你好'
          },
          {
            id: 'e1u1l1q2',
            type: 'flashcard',
            question: '看到图片，说出对应的英语',
            answer: 'Hi',
            hint: '和Hello意思一样，但更简短',
            explanation: 'Hi是Hello的简短说法，都表示你好'
          },
          {
            id: 'e1u1l1q3',
            type: 'fill',
            question: '完成打招呼：____! Nice to meet you!',
            answer: 'Hello',
            acceptableAnswers: ['Hi'],
            hint: '用我们学过的打招呼词填空',
            explanation: 'Hello是正式的打招呼用语，后面常接Nice to meet you'
          },
          {
            id: 'e1u1l1q4',
            type: 'choice',
            question: '早上见到老师应该说？',
            options: ['Good morning', 'Good night', 'Goodbye', 'Sorry'],
            answer: 'Good morning',
            hint: '早上的问候语',
            explanation: 'Good morning是早上好的意思，早上见面时使用'
          },
          {
            id: 'e1u1l1q5',
            type: 'fill',
            question: 'Hi和Hello意思相同，但Hi更____。',
            answer: 'short',
            acceptableAnswers: ['简短', 'shorter'],
            hint: 'Hi比Hello更简短',
            explanation: 'Hi比Hello更简短，朋友之间常用Hi打招呼'
          },
          {
            id: 'e1u1l1q6',
            type: 'choice',
            question: '小明在公园遇到新朋友，应该先说什么？',
            options: ['Hello! Nice to meet you!', 'Goodbye!', 'Sorry!', 'Thank you!'],
            answer: 'Hello! Nice to meet you!',
            hint: '第一次见面说什么？',
            explanation: 'Hello! Nice to meet you!是初次见面时的礼貌用语'
          },
          {
            id: 'e1u1l1q7',
            type: 'fill',
            question: '放学时对同学说"再见"：____!',
            answer: 'Goodbye',
            acceptableAnswers: ['Bye', 'Bye-bye'],
            hint: '[打招呼用语]（英语一年级-第1单元）',
            explanation: 'Goodbye是再见的意思，和Hello是一对反义问候语'
          }
        ]
      },
      {
        id: 'e1u1l2',
        title: '自我介绍',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do',
        iDo: '家长示范自我介绍"My name is..."，指着胸口慢慢说，表情自信',
        weDo: '亲子一起练习"My name is..."，互相介绍自己的名字，击掌庆祝',
        youDo: '孩子独立向家人或玩偶做自我介绍，说出自己的英文名',
        parentTips: '可以给孩子取一个简单的英文名，让自我介绍更有趣',
        funElement: '玩"名字传球"游戏，接到球就要说"My name is..."',
        gsapAnimations: ['GSAP:名字牌翻转-flip', 'GSAP:星星闪烁-twinkle'],
        images: ['IMG:自我介绍场景', 'IMG:名字牌卡片'],
        content: [
          { type: 'text', content: 'My name is... 我叫……这是英语中自我介绍的标准句型。告诉别人你的名字时，就说"My name is + 你的名字"', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Hello! My name is Xiaoming.\n小红: Hi! My name is Xiaohong. Nice to meet you!\n小明: Nice to meet you too!', label: '自我介绍对话', animationType: 'reveal' },
          { type: 'example', content: 'My name is Tom — 我叫汤姆\nMy name is Lily — 我叫莉莉\nMy name is Jack — 我叫杰克', label: '自我介绍例句', animationType: 'bounce' },
          { type: 'tip', content: 'name是"名字"的意思，My name is... 就是"我的名字是……"。说的时候指着胸口，更加自信哦！', label: '学习提示', animationType: 'pulse' },
          { type: 'animation', content: '名字牌翻转动画，翻转后显示英文名字，配合自我介绍语音', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u1l2q1',
            type: 'choice',
            question: '自我介绍时说"My ____ is Lily"?',
            options: ['name', 'age', 'book', 'cat'],
            answer: 'name',
            hint: '介绍名字用什么词？',
            explanation: 'My name is... 是自我介绍的标准句型，name表示名字'
          },
          {
            id: 'e1u1l2q2',
            type: 'fill',
            question: '自我介绍：My name ____ Tom.',
            answer: 'is',
            hint: 'name后面跟什么动词？',
            explanation: 'My name is... 中is是动词，表示"是"'
          },
          {
            id: 'e1u1l2q3',
            type: 'drag',
            question: '把正确的词拖到空格处：____ name is Amy.',
            answer: 'My',
            hint: '介绍自己的名字用什么代词？',
            explanation: 'My表示"我的"，自我介绍时用My name is...'
          },
          {
            id: 'e1u1l2q4',
            type: 'choice',
            question: '"My name is Tom"中name是什么意思？',
            options: ['名字', '年龄', '学校', '颜色'],
            answer: '名字',
            hint: 'My name is...介绍什么？',
            explanation: 'name是名字的意思，My name is...就是我的名字是...'
          },
          {
            id: 'e1u1l2q5',
            type: 'fill',
            question: 'Nice to ____ you!（遇见）',
            answer: 'meet',
            hint: '初次见面说什么？',
            explanation: 'Nice to meet you!表示很高兴认识你，meet是遇见'
          },
          {
            id: 'e1u1l2q6',
            type: 'choice',
            question: '小明自我介绍后，小红应该怎么回应？',
            options: ['Nice to meet you too!', 'Goodbye!', 'I am fine.', 'Thank you!'],
            answer: 'Nice to meet you too!',
            hint: '别人自我介绍后怎么回应？',
            explanation: 'Nice to meet you too!表示我也很高兴认识你，是礼貌的回应'
          },
          {
            id: 'e1u1l2q7',
            type: 'drag',
            question: '把词拖到正确位置：打招呼+自我介绍=____+My name is...',
            answer: 'Hello',
            hint: '[打招呼用语]（英语一年级-第1单元）',
            explanation: 'Hello是打招呼，My name is...是自我介绍，两个连用更礼貌'
          }
        ]
      },
      {
        id: 'e1u1l3',
        title: '课堂用语',
        order: 3,
        teachingMethod: '情景教学法',
        iDo: '家长扮演老师，示范说"Stand up! Sit down!"并做动作',
        weDo: '亲子一起玩"老师说"游戏，听到指令做动作，说"Thank you!"',
        youDo: '孩子独立听指令做动作，并尝试自己发出课堂指令',
        parentTips: '可以加快指令速度增加趣味性，但注意安全避免碰撞',
        funElement: '玩"Simon Says"游戏，只有听到Simon says才做动作',
        gsapAnimations: ['GSAP:起立坐下动画-slideUpDown', 'GSAP:指令文字弹跳-bounce'],
        images: ['IMG:课堂场景插图', 'IMG:Stand up/Sit down卡片'],
        content: [
          { type: 'text', content: '在英语课堂上，老师会说一些指令来引导大家。Stand up是"起立"，Sit down是"坐下"，Thank you是"谢谢"', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: Stand up, please!\n同学们: (站起来) Good morning, teacher!\n老师: Sit down, please.\n同学们: Thank you!', label: '课堂指令对话', animationType: 'reveal' },
          { type: 'example', content: 'Stand up — 起立\nSit down — 坐下\nThank you — 谢谢你\nPlease — 请', label: '课堂用语', animationType: 'bounce' },
          { type: 'tip', content: '说Stand up时可以站起来，说Sit down时可以坐下。用身体动作来记英语，记得更牢！', label: '学习提示', animationType: 'pulse' },
          { type: 'animation', content: '小朋友起立和坐下的动画，配合Stand up/Sit down语音', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u1l3q1',
            type: 'choice',
            question: '"起立"用英语怎么说？',
            options: ['Stand up', 'Sit down', 'Open up', 'Close down'],
            answer: 'Stand up',
            hint: '想一想从座位上站起来的动作',
            explanation: 'Stand up表示站起来，是课堂常用指令'
          },
          {
            id: 'e1u1l3q2',
            type: 'flashcard',
            question: '看动作图片，说出英语指令',
            answer: 'Sit down',
            hint: '坐下的动作怎么说？',
            explanation: 'Sit down表示坐下，和Stand up是一对反义词'
          },
          {
            id: 'e1u1l3q3',
            type: 'choice',
            question: '别人帮了你，应该说？',
            options: ['Thank you', 'Hello', 'Goodbye', 'Sorry'],
            answer: 'Thank you',
            hint: '表示感谢的礼貌用语',
            explanation: 'Thank you表示谢谢，是重要的礼貌用语'
          },
          {
            id: 'e1u1l3q4',
            type: 'choice',
            question: 'Stand up和Sit down是什么关系？',
            options: ['反义词', '同义词', '无关词', '近义词'],
            answer: '反义词',
            hint: '起立和坐下是什么关系？',
            explanation: 'Stand up起立和Sit down坐下是一对反义词'
          },
          {
            id: 'e1u1l3q5',
            type: 'fill',
            question: '别人帮了你，应该说____ you.（谢谢）',
            answer: 'Thank',
            hint: '表示礼貌的感谢',
            explanation: 'Thank you表示谢谢你，是重要的礼貌用语'
          },
          {
            id: 'e1u1l3q6',
            type: 'choice',
            question: '课堂上老师想让同学们安静，应该说什么？',
            options: ['Please be quiet', 'Stand up', 'Run please', 'Sing a song'],
            answer: 'Please be quiet',
            hint: '安静下来怎么说？',
            explanation: 'Please be quiet表示请安静，是课堂管理用语'
          },
          {
            id: 'e1u1l3q7',
            type: 'choice',
            question: 'Hello和Thank you都属于哪类用语？',
            options: ['礼貌用语', '运动用语', '天气用语', '颜色用语'],
            answer: '礼貌用语',
            hint: '[打招呼用语]（英语一年级-第1单元）',
            explanation: 'Hello和Thank you都是日常礼貌用语，是英语学习的基础'
          }
        ]
      }
    ,
      {
        id: 'e1u1l4',
        title: 'Hello! Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `让我们来回顾Hello单元学到的内容！打招呼用语Hello/Hi、自我介绍My name is...、课堂用语Stand up/Sit down/Thank you`, animationType: 'reveal' },
          { type: 'formula', content: `打招呼公式：Hello/Hi + My name is... + Nice to meet you!`, animationType: 'typewriter', label: '打招呼+自我介绍公式' },
          { type: 'animation', content: `三个场景回顾：打招呼、自我介绍、课堂指令`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u1l4q1',
            type: 'choice',
            question: '以下哪个是打招呼用语？',
            options: ['Hello', 'Red', 'Apple', 'Run'],
            answer: 'Hello',
            hint: '见面时说的话',
            explanation: 'Hello是打招呼用语，见面时说Hello表示你好'
          },
          {
            id: 'e1u1l4q2',
            type: 'fill',
            question: 'My ____ is Lily.（名字）',
            answer: 'name',
            hint: '自我介绍时说什么？',
            explanation: 'My name is...是自我介绍的标准句型'
          },
          {
            id: 'e1u1l4q3',
            type: 'choice',
            question: '老师想让全班起立，应该说什么？',
            options: ['Stand up, please', 'Sit down, please', 'Hello, please', 'Thank you, please'],
            answer: 'Stand up, please',
            hint: '起立的课堂指令',
            explanation: 'Stand up, please表示请起立，是课堂常用指令'
          },
          {
            id: 'e1u1l4q4',
            type: 'drag',
            question: '把反义词配对：Stand up ↔ ____',
            answer: 'Sit down',
            hint: '起立的反义词是什么？',
            explanation: 'Stand up和Sit down是一对反义词，起立和坐下'
          },
          {
            id: 'e1u1l4q5',
            type: 'choice',
            question: '【期末真题】当你第一次见到新同学时，应该说？',
            options: ['Nice to meet you!', 'Goodbye!', 'I am sorry.', 'Stand up!'],
            answer: 'Nice to meet you!',
            hint: '初次见面的礼貌用语',
            explanation: 'Nice to meet you!是初次见面时的标准礼貌用语'
          },
          {
            id: 'e1u1l4q6',
            type: 'fill',
            question: 'Hello! My name ____ Tom. Nice to meet you!',
            answer: 'is',
            hint: 'name后面跟什么动词？',
            explanation: 'My name is...中is是动词，表示"是"'
          },
          {
            id: 'e1u1l4q7',
            type: 'choice',
            question: '以下哪个不是礼貌用语？',
            options: ['Run fast', 'Hello', 'Thank you', 'Nice to meet you'],
            answer: 'Run fast',
            hint: '[礼貌用语]（英语一年级-第1单元）哪个不是日常礼貌表达？',
            explanation: 'Run fast是跑步快，不是礼貌用语；Hello、Thank you、Nice to meet you都是'
          },
        ]
      },
      {
        id: 'e1u1l5',
        title: 'Hello! in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `在日常生活中，我们随时随地都会用到打招呼和自我介绍！去学校、见朋友、认识新同学，都需要这些英语`, animationType: 'reveal' },
          { type: 'example', content: `场景1：上学路上遇到同学 → Hello! How are you?
场景2：新学期认识新朋友 → Hi! My name is... Nice to meet you!
场景3：课堂上 → Stand up! Good morning, teacher!`, animationType: 'bounce', label: '生活场景应用' },
          { type: 'tip', content: `英语就在生活中！每天至少用英语打一次招呼，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u1l5q1',
            type: 'choice',
            question: '上学路上遇到老师，应该说？',
            options: ['Good morning, teacher!', 'Goodbye!', 'Stand up!', 'Sit down!'],
            answer: 'Good morning, teacher!',
            hint: '早上见到老师怎么打招呼？',
            explanation: 'Good morning, teacher!是早上见到老师的礼貌问候'
          },
          {
            id: 'e1u1l5q2',
            type: 'fill',
            question: '新同学来了，你说：____! My name is Xiaoming.',
            answer: 'Hello',
            acceptableAnswers: ['Hi'],
            hint: '先打招呼再自我介绍',
            explanation: 'Hello! My name is...先打招呼再自我介绍，是最自然的顺序'
          },
          {
            id: 'e1u1l5q3',
            type: 'choice',
            question: '在超市遇到邻居阿姨，应该说？',
            options: ['Hello! How are you?', 'Stand up!', 'Good night!', 'I am sorry.'],
            answer: 'Hello! How are you?',
            hint: '日常见面怎么打招呼？',
            explanation: 'Hello! How are you?是日常见面时的友好问候'
          },
          {
            id: 'e1u1l5q4',
            type: 'drag',
            question: '把场景和用语配对：上课起立=____',
            answer: 'Stand up',
            hint: '课堂指令',
            explanation: 'Stand up是上课起立的指令，在课堂生活中经常使用'
          },
          {
            id: 'e1u1l5q5',
            type: 'choice',
            question: '【期末真题】小明转学到新学校，第一天应该对同学们说什么？',
            options: ['Hello! My name is Xiaoming. Nice to meet you!', 'Goodbye!', 'Stand up!', 'I don\'t know.'],
            answer: 'Hello! My name is Xiaoming. Nice to meet you!',
            hint: '新同学自我介绍怎么说？',
            explanation: 'Hello! My name is... Nice to meet you!是新同学自我介绍的最佳方式'
          },
          {
            id: 'e1u1l5q6',
            type: 'fill',
            question: '别人帮助了你，应该说：____ you!',
            answer: 'Thank',
            hint: '表示感谢',
            explanation: 'Thank you!表示谢谢你，生活中经常使用'
          },
          {
            id: 'e1u1l5q7',
            type: 'choice',
            question: '晚上睡觉前对爸爸妈妈说什么？',
            options: ['Good night!', 'Stand up!', 'Hello!', 'Nice to meet you!'],
            answer: 'Good night!',
            hint: '[告别用语]（英语一年级-第1单元）晚上的告别语',
            explanation: 'Good night!是晚安的意思，睡前对家人说'
          },
        ]
      }]
  },
  {
    id: 'e1u2',
    title: 'Colors',
    subtitle: '认识缤纷色彩，描绘美丽世界',
    order: 2,
    lessons: [
      {
        id: 'e1u2l1',
        title: '红黄蓝绿',
        order: 1,
        teachingMethod: '多感官教学法',
        iDo: '家长拿出彩色积木或卡片，指着颜色清晰说出"Red, Yellow, Blue, Green"',
        weDo: '亲子一起找家里对应颜色的物品，指认并说出颜色名称',
        youDo: '孩子独立找出指定颜色的物品，并说出颜色英语',
        parentTips: '利用身边的彩色物品随时练习，比如水果、衣服的颜色',
        funElement: '唱《I Can Sing a Rainbow》儿歌，边唱边指认颜色',
        gsapAnimations: ['GSAP:颜色渐变-colorShift', 'GSAP:彩色气球飘浮-float'],
        images: ['IMG:四种颜色卡片', 'IMG:彩色物品场景'],
        content: [
          { type: 'text', content: 'Red红色、Yellow黄色、Blue蓝色、Green绿色，这四种是最基本的颜色。我们身边到处都有这些颜色！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What color is it?\n小红: It\'s red! 苹果是红色的。\n小明: What color is the sky?\n小红: It\'s blue! 天空是蓝色的。', label: '颜色问答', animationType: 'reveal' },
          { type: 'example', content: 'Red — 红色（苹果、消防车）\nYellow — 黄色（香蕉、太阳）\nBlue — 蓝色（天空、大海）\nGreen — 绿色（草地、树叶）', label: '颜色词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Orange既是"橙色"又是"橘子"，一个词两个意思，是不是很有趣？', label: '趣味知识', animationType: 'pulse' },
          { type: 'animation', content: '彩色气球依次飘浮出现，每个气球显示一种颜色和对应英语单词', animationType: 'float' },
        ],
        practiceQuestions: [
          {
            id: 'e1u2l1q1',
            type: 'choice',
            question: '苹果通常是什么颜色？',
            options: ['Red', 'Blue', 'Green', 'Yellow'],
            answer: 'Red',
            hint: '想一想你吃过的苹果',
            explanation: 'Red表示红色，苹果最常见的颜色是红色'
          },
          {
            id: 'e1u2l1q2',
            type: 'drag',
            question: '把颜色词拖到对应的位置：天空是____的',
            answer: 'Blue',
            hint: '抬头看看天空',
            explanation: 'Blue表示蓝色，天空是蓝色的'
          },
          {
            id: 'e1u2l1q3',
            type: 'flashcard',
            question: '看颜色卡片，快速说出英语',
            answer: 'Green',
            hint: '草地和树叶的颜色',
            explanation: 'Green表示绿色，是植物最常见的颜色'
          },
          {
            id: 'e1u2l1q4',
            type: 'choice',
            question: '苹果和消防车有什么共同点？',
            options: ['都是红色', '都是蓝色', '都是绿色', '都是黄色'],
            answer: '都是红色',
            hint: '想一想它们的颜色',
            explanation: '苹果是红色，消防车也是红色，它们的共同点是都是红色'
          },
          {
            id: 'e1u2l1q5',
            type: 'fill',
            question: 'Bananas are ____.（黄色）',
            answer: 'Yellow',
            hint: '香蕉是什么颜色？',
            explanation: 'Bananas are yellow表示香蕉是黄色的'
          },
          {
            id: 'e1u2l1q6',
            type: 'choice',
            question: '红绿灯中，红色代表什么？',
            options: ['Stop停止', 'Go通行', 'Wait等待', 'Run跑步'],
            answer: 'Stop停止',
            hint: '红灯亮了要怎么做？',
            explanation: '红灯代表停止Stop，这是交通规则'
          },
          {
            id: 'e1u2l1q7',
            type: 'drag',
            question: '把颜色拖到正确位置：天空是____的',
            answer: 'Blue',
            hint: '[颜色混合]（英语一年级-第2单元）',
            explanation: '天空是蓝色的Blue，这是生活中最常见的蓝色事物'
          }
        ]
      },
      {
        id: 'e1u2l2',
        title: '颜色混合',
        order: 2,
        teachingMethod: '探究式学习法',
        iDo: '家长用颜料演示红色加黄色变成橙色，边做边说"Red and yellow make orange"',
        weDo: '亲子一起做颜色混合实验，说出混合后的颜色名称',
        youDo: '孩子独立说出颜色混合的结果，如"Blue and yellow make green"',
        parentTips: '可以用透明杯子装水加食用色素做实验，更有视觉效果',
        funElement: '玩"颜色魔法师"游戏，猜猜两种颜色混合会变成什么颜色',
        gsapAnimations: ['GSAP:颜色融合动画-morph', 'GSAP:魔法棒闪烁-sparkle'],
        images: ['IMG:颜色混合实验', 'IMG:调色板插图'],
        content: [
          { type: 'text', content: '颜色可以混合变成新颜色！Red红色和Yellow黄色混合变成Orange橙色，Blue蓝色和Yellow黄色混合变成Green绿色', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Red and yellow make...?\n小红: Orange! 橙色！\n小明: Blue and yellow make...?\n小红: Green! 绿色！', label: '颜色混合对话', animationType: 'reveal' },
          { type: 'example', content: 'Red + Yellow = Orange（红+黄=橙）\nBlue + Yellow = Green（蓝+黄=绿）\nRed + Blue = Purple（红+蓝=紫）', label: '颜色混合公式', animationType: 'typewriter' },
          { type: 'tip', content: 'make在这里是"变成"的意思。"A and B make C"就是"A和B混合变成C"', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '两种颜色颜料倒入碗中混合，变成新颜色的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u2l2q1',
            type: 'choice',
            question: '红色和黄色混合变成什么颜色？',
            options: ['Orange', 'Purple', 'Green', 'Pink'],
            answer: 'Orange',
            hint: '想想橙子的颜色',
            explanation: 'Red + Yellow = Orange，红色加黄色变成橙色'
          },
          {
            id: 'e1u2l2q2',
            type: 'fill',
            question: 'Blue and ____ make green.',
            answer: 'Yellow',
            hint: '什么颜色和蓝色混合变成绿色？',
            explanation: 'Blue + Yellow = Green，蓝色加黄色变成绿色'
          },
          {
            id: 'e1u2l2q3',
            type: 'drag',
            question: '把颜色拖到正确位置：Red + Blue = ____',
            answer: 'Purple',
            hint: '想想葡萄的颜色',
            explanation: 'Red + Blue = Purple，红色加蓝色变成紫色'
          },
          {
            id: 'e1u2l2q4',
            type: 'choice',
            question: '红色和蓝色混合变成什么颜色？',
            options: ['Purple', 'Orange', 'Green', 'Pink'],
            answer: 'Purple',
            hint: '想想葡萄的颜色',
            explanation: 'Red + Blue = Purple，红色加蓝色变成紫色'
          },
          {
            id: 'e1u2l2q5',
            type: 'fill',
            question: 'Red and yellow make ____.（橙色）',
            answer: 'Orange',
            hint: '红+黄=？',
            explanation: 'Red + Yellow = Orange，红色加黄色变成橙色'
          },
          {
            id: 'e1u2l2q6',
            type: 'choice',
            question: '小明想调出绿色，他需要哪两种颜色？',
            options: ['Blue and Yellow', 'Red and Yellow', 'Red and Blue', 'Red and Green'],
            answer: 'Blue and Yellow',
            hint: '绿色由哪两种颜色混合？',
            explanation: 'Blue + Yellow = Green，蓝色加黄色变成绿色'
          },
          {
            id: 'e1u2l2q7',
            type: 'choice',
            question: 'Orange既是颜色又是水果，这叫什么现象？',
            options: ['一词多义', '反义词', '同音词', '缩写词'],
            answer: '一词多义',
            hint: '[彩虹七色]（英语一年级-第2单元）',
            explanation: 'Orange既是橙色又是橘子，一个词有两个意思，叫一词多义'
          }
        ]
      },
      {
        id: 'e1u2l3',
        title: '彩虹歌',
        order: 3,
        teachingMethod: '音乐律动教学法',
        iDo: '家长唱彩虹歌，指着彩虹的每种颜色，节奏欢快',
        weDo: '亲子一起唱彩虹歌，每唱到一种颜色就举起对应颜色的卡片',
        youDo: '孩子独立唱完彩虹歌，并按顺序说出彩虹的七种颜色',
        parentTips: '可以画一道彩虹让孩子涂色，边涂边说颜色名称',
        funElement: '用身体摆出彩虹的弧形，边唱边做彩虹操',
        gsapAnimations: ['GSAP:彩虹弧线绘制-drawSVG', 'GSAP:颜色依次亮起-stagger'],
        images: ['IMG:彩虹插图', 'IMG:彩虹颜色卡片'],
        content: [
          { type: 'text', content: '彩虹有七种颜色，从外到内依次是：Red, Orange, Yellow, Green, Blue, Indigo, Violet。一起来唱彩虹歌吧！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I can sing a rainbow!\n小红: Red and yellow and pink and green...\n小明: Purple and orange and blue!\n小红: I can sing a rainbow, sing a rainbow too!', label: '彩虹歌', animationType: 'reveal' },
          { type: 'example', content: 'Red — 红色\nOrange — 橙色\nYellow — 黄色\nGreen — 绿色\nBlue — 蓝色\nIndigo — 靛蓝色\nViolet — 紫色', label: '彩虹七色', animationType: 'bounce' },
          { type: 'tip', content: '记住彩虹颜色顺序的小口诀：红橙黄绿蓝靛紫，就像从暖色到冷色排列！', label: '记忆小窍门', animationType: 'pulse' },
          { type: 'animation', content: '彩虹弧线从左到右逐渐绘制出现，每种颜色依次亮起', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u2l3q1',
            type: 'choice',
            question: '彩虹最外面的颜色是什么？',
            options: ['Red', 'Violet', 'Blue', 'Green'],
            answer: 'Red',
            hint: '彩虹的颜色从外到内排列',
            explanation: '彩虹从外到内依次是Red, Orange, Yellow, Green, Blue, Indigo, Violet'
          },
          {
            id: 'e1u2l3q2',
            type: 'fill',
            question: '彩虹歌：Red, Orange, ____, Green...',
            answer: 'Yellow',
            hint: '排在绿色前面的颜色',
            explanation: '彩虹颜色顺序：Red, Orange, Yellow, Green, Blue, Indigo, Violet'
          },
          {
            id: 'e1u2l3q3',
            type: 'flashcard',
            question: '看彩虹图片，说出紫色用英语怎么说',
            answer: 'Violet',
            hint: '彩虹中的紫色',
            explanation: 'Violet是紫罗兰色，是彩虹中最内侧的紫色'
          },
          {
            id: 'e1u2l3q4',
            type: 'choice',
            question: '彩虹中排在绿色后面的是什么颜色？',
            options: ['Blue', 'Red', 'Yellow', 'Orange'],
            answer: 'Blue',
            hint: '彩虹颜色顺序',
            explanation: '彩虹顺序：Red, Orange, Yellow, Green, Blue, Indigo, Violet'
          },
          {
            id: 'e1u2l3q5',
            type: 'fill',
            question: '彩虹最里面的颜色是____.（紫色）',
            answer: 'Violet',
            hint: '紫罗兰色',
            explanation: 'Violet是紫罗兰色，是彩虹最内侧的颜色'
          },
          {
            id: 'e1u2l3q6',
            type: 'choice',
            question: '【期末真题】下列哪种颜色不在彩虹中？',
            options: ['Pink', 'Red', 'Yellow', 'Blue'],
            answer: 'Pink',
            hint: '彩虹有七种颜色',
            explanation: '彩虹七色是红橙黄绿蓝靛紫，没有粉色Pink'
          },
          {
            id: 'e1u2l3q7',
            type: 'drag',
            question: '把颜色拖到正确位置：Red + Blue = ____',
            answer: 'Purple',
            hint: '[颜色混合]（英语一年级-第2单元）',
            explanation: '回顾颜色混合知识：Red + Blue = Purple'
          }
        ]
      }
    ,
      {
        id: 'e1u2l4',
        title: 'Colors Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Colors单元！我们学了四种基本颜色Red/Yellow/Blue/Green、颜色混合、彩虹七色`, animationType: 'reveal' },
          { type: 'formula', content: `颜色混合公式：
Red + Yellow = Orange
Blue + Yellow = Green
Red + Blue = Purple`, animationType: 'typewriter', label: '颜色混合公式' },
          { type: 'animation', content: `颜色卡片翻转回顾，颜色混合动画重现`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u2l4q1',
            type: 'choice',
            question: '草地是什么颜色？',
            options: ['Green', 'Red', 'Blue', 'Yellow'],
            answer: 'Green',
            hint: '植物的颜色',
            explanation: 'Green是绿色，草地和树叶都是绿色的'
          },
          {
            id: 'e1u2l4q2',
            type: 'fill',
            question: 'Blue and yellow make ____.（绿色）',
            answer: 'Green',
            hint: '颜色混合公式',
            explanation: 'Blue + Yellow = Green，蓝色加黄色变成绿色'
          },
          {
            id: 'e1u2l4q3',
            type: 'choice',
            question: '彩虹有几种颜色？',
            options: ['7种', '5种', '3种', '10种'],
            answer: '7种',
            hint: '红橙黄绿蓝靛紫',
            explanation: '彩虹有7种颜色：Red, Orange, Yellow, Green, Blue, Indigo, Violet'
          },
          {
            id: 'e1u2l4q4',
            type: 'drag',
            question: '把颜色拖到正确位置：Red + Yellow = ____',
            answer: 'Orange',
            hint: '红+黄=？',
            explanation: 'Red + Yellow = Orange，红色加黄色变成橙色'
          },
          {
            id: 'e1u2l4q5',
            type: 'choice',
            question: '【期末真题】太阳是什么颜色？',
            options: ['Yellow', 'Blue', 'Red', 'Green'],
            answer: 'Yellow',
            hint: '太阳的颜色',
            explanation: '太阳是黄色的Yellow，是彩虹颜色之一'
          },
          {
            id: 'e1u2l4q6',
            type: 'fill',
            question: 'Red and blue make ____.（紫色）',
            answer: 'Purple',
            hint: '红+蓝=？',
            explanation: 'Red + Blue = Purple，红色加蓝色变成紫色'
          },
          {
            id: 'e1u2l4q7',
            type: 'choice',
            question: '以下哪个既是颜色又是水果？',
            options: ['Orange', 'Red', 'Blue', 'Green'],
            answer: 'Orange',
            hint: '[颜色词汇]（英语一年级-第2单元）一词多义的颜色词',
            explanation: 'Orange既是橙色又是橘子，一个词两个意思'
          },
        ]
      },
      {
        id: 'e1u2l5',
        title: 'Colors in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `颜色在生活中无处不在！衣服的颜色、食物的颜色、交通灯的颜色……用英语说出你看到的颜色吧！`, animationType: 'reveal' },
          { type: 'example', content: `场景1：描述衣服 → I am wearing a red shirt.
场景2：描述水果 → The apple is red. The banana is yellow.
场景3：交通灯 → Red light, stop! Green light, go!`, animationType: 'bounce', label: '颜色在生活中的应用' },
          { type: 'tip', content: `每天找3样东西，用英语说出它们的颜色，坚持练习！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u2l5q1',
            type: 'choice',
            question: '树叶在秋天变成什么颜色？',
            options: ['Yellow', 'Blue', 'Red', 'Green'],
            answer: 'Yellow',
            hint: '秋天树叶变黄',
            explanation: '秋天树叶变成黄色Yellow，也有变成红色或橙色的'
          },
          {
            id: 'e1u2l5q2',
            type: 'fill',
            question: 'The sky is ____.（蓝色）',
            answer: 'Blue',
            hint: '天空的颜色',
            explanation: 'The sky is blue表示天空是蓝色的'
          },
          {
            id: 'e1u2l5q3',
            type: 'choice',
            question: '红绿灯中绿色代表什么？',
            options: ['Go通行', 'Stop停止', 'Wait等待', 'Run跑步'],
            answer: 'Go通行',
            hint: '绿灯亮了怎么做？',
            explanation: '绿灯代表通行Go，红灯代表停止Stop'
          },
          {
            id: 'e1u2l5q4',
            type: 'drag',
            question: '把颜色拖到正确位置：中国国旗是____的',
            answer: 'Red',
            hint: '五星红旗的颜色',
            explanation: '中国国旗是红色的Red，五星红旗'
          },
          {
            id: 'e1u2l5q5',
            type: 'choice',
            question: '【期末真题】小明穿了一件蓝色上衣和黄色裤子，看起来像什么水果？',
            options: ['Green apple（青苹果）', 'Orange（橘子）', 'Banana（香蕉）', 'Grape（葡萄）'],
            answer: 'Green apple（青苹果）',
            hint: 'Blue + Yellow = ?',
            explanation: '蓝色加黄色混合是绿色Green，像青苹果'
          },
          {
            id: 'e1u2l5q6',
            type: 'fill',
            question: 'I like ____ flowers.（红色的花）',
            answer: 'Red',
            hint: '花的颜色',
            explanation: 'Red flowers表示红色的花，用颜色描述事物'
          },
          {
            id: 'e1u2l5q7',
            type: 'choice',
            question: '大海是什么颜色？',
            options: ['Blue', 'Red', 'Yellow', 'Green'],
            answer: 'Blue',
            hint: '[颜色词汇]（英语一年级-第2单元）海水的颜色',
            explanation: '大海是蓝色的Blue，The ocean is blue'
          },
        ]
      }]
  },
  {
    id: 'e1u3',
    title: 'Numbers',
    subtitle: '从1数到10，数字真有趣',
    order: 3,
    lessons: [
      {
        id: 'e1u3l1',
        title: '1-10数字',
        order: 1,
        teachingMethod: '自然拼读Phonics',
        iDo: '家长用手指比划数字，清晰说出"One, Two, Three..."，语速缓慢',
        weDo: '亲子一起用手指比数字，边比边说，互相检查是否正确',
        youDo: '孩子独立用手指表示1-10，并说出对应英语',
        parentTips: '可以用数楼梯、数水果等生活场景练习数字',
        funElement: '玩"数字拍拍乐"，说到数字几就拍手几下',
        gsapAnimations: ['GSAP:数字跳动-bounce', 'GSAP:手指计数动画-countUp'],
        images: ['IMG:1-10数字卡片', 'IMG:手指计数图'],
        content: [
          { type: 'text', content: '让我们从1数到10！One一、Two二、Three三、Four四、Five五、Six六、Seven七、Eight八、Nine九、Ten十', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: Let\'s count! One, two, three...\n同学们: Four, five, six!\n老师: Seven, eight...\n同学们: Nine, ten!', label: '数数对话', animationType: 'reveal' },
          { type: 'example', content: '1 — One\n2 — Two\n3 — Three\n4 — Four\n5 — Five\n6 — Six\n7 — Seven\n8 — Eight\n9 — Nine\n10 — Ten', label: '1-10数字', animationType: 'bounce' },
          { type: 'tip', content: 'Three和Tree容易混淆，注意Three的th发音要轻轻咬舌尖哦！', label: '发音提示', animationType: 'pulse' },
          { type: 'animation', content: '数字1到10依次跳动出现，配合手指计数动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u3l1q1',
            type: 'choice',
            question: '数字5用英语怎么说？',
            options: ['Five', 'Four', 'Six', 'Three'],
            answer: 'Five',
            hint: '伸出一只手，有几根手指？',
            explanation: 'Five表示数字5，一只手有5根手指'
          },
          {
            id: 'e1u3l1q2',
            type: 'fill',
            question: '按顺序填空：Six, ____, Eight',
            answer: 'Seven',
            hint: '6和8中间的数字',
            explanation: 'Seven表示数字7，排在6和8之间'
          },
          {
            id: 'e1u3l1q3',
            type: 'drag',
            question: '把数字拖到正确位置：3 = ____',
            answer: 'Three',
            hint: '3的英语怎么拼？',
            explanation: 'Three表示数字3，注意th的发音'
          },
          {
            id: 'e1u3l1q4',
            type: 'choice',
            question: '双手共有几根手指？',
            options: ['Ten', 'Five', 'Eight', 'Six'],
            answer: 'Ten',
            hint: '两只手加起来',
            explanation: '双手共有10根手指，Ten表示10'
          },
          {
            id: 'e1u3l1q5',
            type: 'fill',
            question: 'One, two, ____, four.（三）',
            answer: 'Three',
            hint: '2和4中间的数字',
            explanation: 'Three表示3，排在2和4之间'
          },
          {
            id: 'e1u3l1q6',
            type: 'choice',
            question: '【期末真题】下列哪个数字的发音以"th"开头？',
            options: ['Three', 'Five', 'Seven', 'Nine'],
            answer: 'Three',
            hint: '注意th的发音',
            explanation: 'Three以th开头，发音时轻轻咬舌尖'
          },
          {
            id: 'e1u3l1q7',
            type: 'drag',
            question: '把数字拖到正确位置：一只手有____根手指',
            answer: 'Five',
            hint: '[数字歌]（英语一年级-第3单元）',
            explanation: '一只手有5根手指Five，回顾数字与生活联系'
          }
        ]
      },
      {
        id: 'e1u3l2',
        title: '数字歌',
        order: 2,
        teachingMethod: '音乐律动教学法',
        iDo: '家长唱《Ten Little Indians》，用手指表示数字，节奏欢快',
        weDo: '亲子一起唱数字歌，边唱边用手指比数字，做律动',
        youDo: '孩子独立唱数字歌，从1数到10再从10数回1',
        parentTips: '可以边走边唱，走几步就唱几，增加身体记忆',
        funElement: '玩"数字蹲"游戏，说到哪个数字就蹲几下',
        gsapAnimations: ['GSAP:数字音符跳动-noteJump', 'GSAP:数字依次出现-stagger'],
        images: ['IMG:数字歌场景', 'IMG:音符与数字插图'],
        content: [
          { type: 'text', content: '《Ten Little Indians》是一首经典的英语数字儿歌，从1数到10，再从10数回1，越唱越有趣！', animationType: 'reveal' },
          { type: 'dialogue', content: '合唱: One little, two little, three little Indians,\nFour little, five little, six little Indians,\nSeven little, eight little, nine little Indians,\nTen little Indian boys!', label: '数字儿歌', animationType: 'reveal' },
          { type: 'example', content: '1 — One little\n2 — Two little\n3 — Three little\n...依次到10 — Ten little', label: '歌曲节奏', animationType: 'typewriter' },
          { type: 'tip', content: '唱数字歌时可以用手指比数字，一边唱一边做动作，这样记得更牢！', label: '学习提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e1u3l2q1',
            type: 'choice',
            question: '数字歌中"Ten little..."后面是什么？',
            options: ['Indians', 'Ducks', 'Monkeys', 'Stars'],
            answer: 'Indians',
            hint: '经典数字儿歌的名字',
            explanation: '《Ten Little Indians》是经典的英语数字儿歌'
          },
          {
            id: 'e1u3l2q2',
            type: 'fill',
            question: '倒着数：Ten, Nine, ____, Seven',
            answer: 'Eight',
            hint: '9和7中间的数字',
            explanation: 'Eight表示数字8，倒着数时排在9和7之间'
          },
          {
            id: 'e1u3l2q3',
            type: 'flashcard',
            question: '看数字10的卡片，用英语说出来',
            answer: 'Ten',
            hint: '双手全部手指的数量',
            explanation: 'Ten表示数字10，双手共有10根手指'
          },
          {
            id: 'e1u3l2q4',
            type: 'choice',
            question: '数字歌从10倒数到1，9后面是？',
            options: ['Eight', 'Seven', 'Ten', 'Six'],
            answer: 'Eight',
            hint: '10, 9, ?',
            explanation: '倒数时9后面是8，Eight表示8'
          },
          {
            id: 'e1u3l2q5',
            type: 'fill',
            question: 'Ten little ____.（印第安男孩）',
            answer: 'Indians',
            hint: '歌曲名称',
            explanation: '《Ten Little Indians》是经典数字儿歌'
          },
          {
            id: 'e1u3l2q6',
            type: 'choice',
            question: '小明从5开始倒数，第三个数是什么？',
            options: ['Three', 'Four', 'Two', 'Six'],
            answer: 'Three',
            hint: '5, 4, 3...',
            explanation: '从5倒数：5, 4, 3，第三个数是3'
          },
          {
            id: 'e1u3l2q7',
            type: 'choice',
            question: '数字歌可以帮助我们做什么？',
            options: ['记住数字顺序', '学习颜色', '认识动物', '了解天气'],
            answer: '记住数字顺序',
            hint: '[数数游戏]（英语一年级-第3单元）',
            explanation: '数字歌帮助记住1-10的顺序，是学习数字的好方法'
          }
        ]
      },
      {
        id: 'e1u3l3',
        title: '数数游戏',
        order: 3,
        teachingMethod: '游戏化教学法',
        iDo: '家长拿出一些小物品，示范数数"How many? One, two, three..."',
        weDo: '亲子一起数家里的物品，如"How many apples?"，轮流数数',
        youDo: '孩子独立数物品并用英语回答数量，如"Five books"',
        parentTips: '用孩子喜欢的零食或玩具来数，更有动力',
        funElement: '玩"藏数游戏"，家长藏几个物品，孩子数出还剩几个',
        gsapAnimations: ['GSAP:物品计数动画-countPop', 'GSAP:数字旋转出现-spinIn'],
        images: ['IMG:数数游戏场景', 'IMG:How many卡片'],
        content: [
          { type: 'text', content: 'How many? 有多少个？这是用来询问数量的句子。数一数身边的东西，用英语回答吧！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: How many apples?\n小红: One, two, three... Five apples!\n小明: How many books?\n小红: Three books!', label: '数数对话', animationType: 'reveal' },
          { type: 'example', content: 'How many? — 有多少个？\nI have five pencils. — 我有5支铅笔。\nThree cats — 3只猫\nSeven dogs — 7只狗', label: '数量表达', animationType: 'bounce' },
          { type: 'tip', content: '数字+名词复数，如five pencils、three cats。大多数名词复数加s！', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '物品一个一个弹出，配合计数数字出现的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u3l3q1',
            type: 'choice',
            question: '"How many?"是什么意思？',
            options: ['有多少个？', '是什么？', '在哪里？', '是谁？'],
            answer: '有多少个？',
            hint: '问数量用什么句子？',
            explanation: 'How many? 用来询问数量，意思是"有多少个？"'
          },
          {
            id: 'e1u3l3q2',
            type: 'fill',
            question: '数一数：I have ____ pencils.（6支铅笔）',
            answer: 'Six',
            hint: '6的英语怎么说？',
            explanation: 'six表示6，I have six pencils表示我有6支铅笔'
          },
          {
            id: 'e1u3l3q3',
            type: 'drag',
            question: '把正确的数字拖到空格：Three cats and ____ dogs = 7',
            answer: 'Four',
            hint: '3 + ? = 7',
            explanation: '3 + 4 = 7，所以答案是Four'
          },
          {
            id: 'e1u3l3q4',
            type: 'choice',
            question: '老师问"How many pencils do you have?"，小明有3支铅笔，应该怎么回答？',
            options: ['Three pencils', 'I am fine', 'It is red', 'Yes, I do'],
            answer: 'Three pencils',
            hint: 'How many问数量，要回答数量',
            explanation: 'How many问数量，回答时要用"数字+名词"，3支铅笔是Three pencils'
          },
          {
            id: 'e1u3l3q5',
            type: 'fill',
            question: 'I have ____ pencils.（8支铅笔）',
            answer: 'Eight',
            hint: '8的英语',
            explanation: 'Eight表示8，I have eight pencils表示我有8支铅笔'
          },
          {
            id: 'e1u3l3q6',
            type: 'choice',
            question: '小明有3个苹果，小红给了他2个，现在有几个？',
            options: ['Five', 'Three', 'Two', 'Six'],
            answer: 'Five',
            hint: '3 + 2 = ?',
            explanation: '3 + 2 = 5，Five apples'
          },
          {
            id: 'e1u3l3q7',
            type: 'drag',
            question: '把数字拖到正确位置：2 + 3 = ____',
            answer: 'Five',
            hint: '[1-10数字]（英语一年级-第3单元）',
            explanation: '2 + 3 = 5，Five，回顾数字加法'
          }
        ]
      }
    ,
      {
        id: 'e1u3l4',
        title: 'Numbers Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Numbers单元！我们学了1-10的数字、数字歌、How many问数量`, animationType: 'reveal' },
          { type: 'formula', content: `数字表达公式：
How many + 名词复数？
数字 + 名词复数（如：Five books）
大多数名词复数加s`, animationType: 'typewriter', label: '数量表达公式' },
          { type: 'animation', content: `数字1-10跳动回顾，计数动画重现`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u3l4q1',
            type: 'choice',
            question: '数字6用英语怎么说？',
            options: ['Six', 'Seven', 'Five', 'Eight'],
            answer: 'Six',
            hint: '5后面的数字',
            explanation: 'Six表示6，排在5后面'
          },
          {
            id: 'e1u3l4q2',
            type: 'fill',
            question: 'How ____ apples do you have?（多少）',
            answer: 'many',
            hint: '问数量用什么词？',
            explanation: 'How many?问数量，How many apples?问有多少个苹果'
          },
          {
            id: 'e1u3l4q3',
            type: 'choice',
            question: '4 + 5 = ?',
            options: ['Nine', 'Eight', 'Seven', 'Ten'],
            answer: 'Nine',
            hint: '4加5等于几？',
            explanation: '4 + 5 = 9，Nine表示9'
          },
          {
            id: 'e1u3l4q4',
            type: 'drag',
            question: '把数字拖到正确位置：Ten - Three = ____',
            answer: 'Seven',
            hint: '10减3等于几？',
            explanation: '10 - 3 = 7，Seven表示7'
          },
          {
            id: 'e1u3l4q5',
            type: 'choice',
            question: '【期末真题】小明有4个橙子，妈妈又买了3个，现在一共有几个？',
            options: ['Seven', 'Six', 'Five', 'Eight'],
            answer: 'Seven',
            hint: '4 + 3 = ?',
            explanation: '4 + 3 = 7，Seven oranges'
          },
          {
            id: 'e1u3l4q6',
            type: 'fill',
            question: 'One, two, three, ____, five.（四）',
            answer: 'Four',
            hint: '3和5中间的数字',
            explanation: 'Four表示4，排在3和5之间'
          },
          {
            id: 'e1u3l4q7',
            type: 'choice',
            question: '以下哪个数字的拼写最长？',
            options: ['Seven', 'One', 'Two', 'Six'],
            answer: 'Seven',
            hint: '[数字词汇]（英语一年级-第3单元）数一数每个单词有几个字母',
            explanation: 'Seven有5个字母，是最长的数字单词'
          },
        ]
      },
      {
        id: 'e1u3l5',
        title: 'Numbers in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `数字在生活中非常重要！电话号码、年龄、时间、价格……到处都需要用数字！`, animationType: 'reveal' },
          { type: 'example', content: `场景1：告诉别人年龄 → I am seven years old.
场景2：数物品 → How many? One, two, three...
场景3：电话号码 → My number is 1-2-3-4-5`, animationType: 'bounce', label: '数字在生活中的应用' },
          { type: 'tip', content: `试着用英语说出你的年龄、家里的门牌号、电话号码！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u3l5q1',
            type: 'choice',
            question: '一年级小朋友通常几岁？',
            options: ['Seven', 'Ten', 'Three', 'Fifteen'],
            answer: 'Seven',
            hint: '一年级大约几岁？',
            explanation: '一年级小朋友通常7岁，I am seven years old'
          },
          {
            id: 'e1u3l5q2',
            type: 'fill',
            question: 'I have ____ eyes.（两只眼睛）',
            answer: 'Two',
            hint: '人有几只眼睛？',
            explanation: 'Two表示2，人有2只眼睛'
          },
          {
            id: 'e1u3l5q3',
            type: 'choice',
            question: '一周有几天？',
            options: ['Seven', 'Five', 'Six', 'Ten'],
            answer: 'Seven',
            hint: '星期一到星期日',
            explanation: '一周有7天，Seven days in a week'
          },
          {
            id: 'e1u3l5q4',
            type: 'drag',
            question: '把数字拖到正确位置：一只猫有____条腿',
            answer: 'Four',
            hint: '猫有几条腿？',
            explanation: '猫有4条腿，Four legs'
          },
          {
            id: 'e1u3l5q5',
            type: 'choice',
            question: '【期末真题】小明家有3口人，小红家有4口人，两家一共有几口人？',
            options: ['Seven', 'Five', 'Six', 'Eight'],
            answer: 'Seven',
            hint: '3 + 4 = ?',
            explanation: '3 + 4 = 7，Seven people'
          },
          {
            id: 'e1u3l5q6',
            type: 'fill',
            question: 'There are ____ months in a year.（12个月）',
            answer: 'Twelve',
            hint: '一年有几个月？',
            explanation: 'Twelve表示12，一年有12个月'
          },
          {
            id: 'e1u3l5q7',
            type: 'choice',
            question: '蜘蛛有几条腿？',
            options: ['Eight', 'Six', 'Four', 'Ten'],
            answer: 'Eight',
            hint: '[动物词汇]（英语-Animals-第1课）蜘蛛的腿比昆虫多',
            explanation: '蜘蛛有8条腿，Eight legs'
          },
        ]
      }]
  },
  {
    id: 'e1u4',
    title: 'Animals',
    subtitle: '认识可爱动物，听听它们的声音',
    order: 4,
    lessons: [
      {
        id: 'e1u4l1',
        title: '农场动物',
        order: 1,
        teachingMethod: 'TPR全身反应法',
        iDo: '家长模仿农场动物的动作和叫声，说"Cow! Moo!"，动作夸张有趣',
        weDo: '亲子一起模仿动物，一人做动作一人猜动物名称',
        youDo: '孩子独立模仿动物让家长猜，或看图说出动物英语名称',
        parentTips: '动物叫声是很好的记忆钩子，鼓励孩子模仿叫声',
        funElement: '唱《Old MacDonald Had a Farm》，模仿各种农场动物的叫声',
        gsapAnimations: ['GSAP:动物蹦跳动画-hop', 'GSAP:叫声气泡弹出-popIn'],
        images: ['IMG:农场场景插图', 'IMG:农场动物卡片'],
        content: [
          { type: 'text', content: '农场里有很多可爱的动物！Cow奶牛会发出Moo的叫声，Pig小猪会发出Oink的叫声，Duck鸭子会发出Quack的叫声', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What\'s this?\n小红: It\'s a cow! Moo!\n小明: And this?\n小红: It\'s a pig! Oink oink!', label: '农场动物对话', animationType: 'reveal' },
          { type: 'example', content: 'Cow — 奶牛（Moo）\nPig — 猪（Oink）\nSheep — 绵羊（Baa）\nDuck — 鸭子（Quack）\nChicken — 鸡（Cluck）', label: '农场动物及叫声', animationType: 'bounce' },
          { type: 'tip', content: '英语中动物的叫声和中文不一样哦！牛在英语里叫Moo，在中文里叫"哞"', label: '文化差异', animationType: 'pulse' },
          { type: 'animation', content: '农场动物依次蹦跳出场，每种动物配对应的叫声气泡', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u4l1q1',
            type: 'choice',
            question: '农场里"Moo Moo"叫的是哪种动物？',
            options: ['Cow', 'Pig', 'Sheep', 'Duck'],
            answer: 'Cow',
            hint: '想想哪种动物发出Moo的声音',
            explanation: 'Cow是奶牛，叫声是Moo'
          },
          {
            id: 'e1u4l1q2',
            type: 'flashcard',
            question: '看小猪的图片，说出英语名称',
            answer: 'Pig',
            hint: '粉色的小动物，叫声Oink',
            explanation: 'Pig是猪，叫声是Oink Oink'
          },
          {
            id: 'e1u4l1q3',
            type: 'fill',
            question: 'Old MacDonald had a ____.（鸭）',
            answer: 'Duck',
            hint: '嘎嘎叫的农场动物',
            explanation: 'Duck是鸭子，叫声是Quack Quack'
          },
          {
            id: 'e1u4l1q4',
            type: 'choice',
            question: '绵羊的叫声用英语怎么写？',
            options: ['Baa', 'Moo', 'Oink', 'Quack'],
            answer: 'Baa',
            hint: '白色毛茸茸的动物',
            explanation: 'Sheep绵羊的叫声是Baa'
          },
          {
            id: 'e1u4l1q5',
            type: 'fill',
            question: 'The chicken says ____.（咯咯）',
            answer: 'Cluck',
            hint: '鸡的叫声',
            explanation: 'Chicken鸡的叫声是Cluck'
          },
          {
            id: 'e1u4l1q6',
            type: 'choice',
            question: '以下哪种动物生活在水里？',
            options: ['Duck', 'Cow', 'Sheep', 'Chicken'],
            answer: 'Duck',
            hint: '哪种动物会游泳？',
            explanation: 'Duck鸭子生活在水边，会游泳'
          },
          {
            id: 'e1u4l1q7',
            type: 'drag',
            question: '把动物拖到正确位置：Moo是____的叫声',
            answer: 'Cow',
            hint: '[动物园]（英语一年级-第4单元）',
            explanation: 'Cow奶牛的叫声是Moo，回顾农场动物知识'
          }
        ]
      },
      {
        id: 'e1u4l2',
        title: '动物园',
        order: 2,
        teachingMethod: '情景教学法',
        iDo: '家长用图片展示动物园动物，说"Look! A lion! Roar!"，表情生动',
        weDo: '亲子一起玩"动物园导游"游戏，互相介绍动物',
        youDo: '孩子独立看图说出动物名称，并模仿动物特征',
        parentTips: '可以结合去动物园的经历，让孩子回忆见过的动物',
        funElement: '玩"动物猜猜猜"，用动作比划动物让对方猜英语名称',
        gsapAnimations: ['GSAP:动物出场动画-slideIn', 'GSAP:笼子打开-openGate'],
        images: ['IMG:动物园场景', 'IMG:野生动物卡片'],
        content: [
          { type: 'text', content: '动物园里有好多野生动物！Lion狮子是"万兽之王"，Elephant大象有长鼻子和大耳朵，Giraffe长颈鹿有长长的脖子', animationType: 'reveal' },
          { type: 'dialogue', content: '导游: Welcome to the zoo!\n小明: Look! A lion! Roar!\n小红: Wow! The elephant is so big!\n小明: The giraffe is so tall!', label: '动物园参观对话', animationType: 'reveal' },
          { type: 'example', content: 'Lion — 狮子（Roar）\nElephant — 大象\nGiraffe — 长颈鹿\nZebra — 斑马\nMonkey — 猴子\nBear — 熊', label: '动物园动物', animationType: 'bounce' },
          { type: 'tip', content: 'Lion和Tiger都是大猫，但Lion狮子有鬃毛，Tiger老虎有条纹！', label: '区分提示', animationType: 'pulse' },
          { type: 'animation', content: '动物园笼子依次打开，动物从笼中走出的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u4l2q1',
            type: 'choice',
            question: '"万兽之王"狮子用英语怎么说？',
            options: ['Lion', 'Tiger', 'Elephant', 'Bear'],
            answer: 'Lion',
            hint: '有鬃毛的大猫',
            explanation: 'Lion是狮子，被称为King of the Jungle'
          },
          {
            id: 'e1u4l2q2',
            type: 'drag',
            question: '把动物名称拖到正确位置：长鼻子大耳朵的动物是____',
            answer: 'Elephant',
            hint: '陆地上最大的动物',
            explanation: 'Elephant是大象，有长鼻子和大耳朵'
          },
          {
            id: 'e1u4l2q3',
            type: 'choice',
            question: '哪种动物身上有黑白条纹？',
            options: ['Zebra', 'Giraffe', 'Monkey', 'Panda'],
            answer: 'Zebra',
            hint: '看起来像穿着条纹衫的马',
            explanation: 'Zebra是斑马，身上有黑白条纹'
          },
          {
            id: 'e1u4l2q4',
            type: 'choice',
            question: '哪种动物有长脖子？',
            options: ['Giraffe', 'Elephant', 'Lion', 'Bear'],
            answer: 'Giraffe',
            hint: '动物园里最高的动物',
            explanation: 'Giraffe长颈鹿有很长的脖子'
          },
          {
            id: 'e1u4l2q5',
            type: 'fill',
            question: 'The ____ is the king of the jungle.（狮子）',
            answer: 'Lion',
            hint: '万兽之王',
            explanation: 'Lion狮子被称为万兽之王King of the Jungle'
          },
          {
            id: 'e1u4l2q6',
            type: 'choice',
            question: '【期末真题】大象最显著的特征是什么？',
            options: ['Long trunk and big ears', 'Black and white stripes', 'Long neck', 'Can fly'],
            answer: 'Long trunk and big ears',
            hint: '大象长什么样？',
            explanation: 'Elephant大象有长鼻子Long trunk和大耳朵Big ears'
          },
          {
            id: 'e1u4l2q7',
            type: 'choice',
            question: 'Lion和Tiger有什么区别？',
            options: ['Lion有鬃毛，Tiger有条纹', 'Lion小，Tiger大', 'Lion吃草，Tiger吃肉', '没有区别'],
            answer: 'Lion有鬃毛，Tiger有条纹',
            hint: '[宠物]（英语一年级-第4单元）',
            explanation: 'Lion狮子有鬃毛，Tiger老虎有条纹，这是它们的主要区别'
          }
        ]
      },
      {
        id: 'e1u4l3',
        title: '宠物',
        order: 3,
        teachingMethod: 'I Do→We Do→You Do',
        iDo: '家长展示宠物图片，说"I have a cat. It\'s cute!"，语气温柔',
        weDo: '亲子一起讨论喜欢的宠物，说"I like dogs/cats"',
        youDo: '孩子独立用英语介绍自己喜欢或想象的宠物',
        parentTips: '即使没有宠物，也可以让孩子想象一只理想中的宠物',
        funElement: '画一只自己想要的宠物，用英语介绍它的名字和颜色',
        gsapAnimations: ['GSAP:宠物爪印出现-pawPrint', 'GSAP:爱心飘浮-heartFloat'],
        images: ['IMG:宠物场景插图', 'IMG:猫狗卡片'],
        content: [
          { type: 'text', content: '你喜欢什么宠物？Cat猫咪喵喵叫，Dog狗狗汪汪叫，Fish小鱼水中游。I have a cat表示我有一只猫', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I have a cat. It\'s cute!\n小红: I like dogs. They are friendly!\n小明: Do you have a pet?\n小红: Yes! I have a fish!', label: '宠物对话', animationType: 'reveal' },
          { type: 'example', content: 'Cat — 猫（Meow）\nDog — 狗（Woof）\nFish — 鱼\nBird — 鸟\nRabbit — 兔子', label: '宠物词汇', animationType: 'bounce' },
          { type: 'tip', content: 'I like dogs用复数，表示"我喜欢狗"这一类动物，而不是某一只狗哦！', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '宠物爪印依次出现，最后爱心飘浮的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u4l3q1',
            type: 'choice',
            question: '"I have a ____"表示我有一只猫？',
            options: ['cat', 'dog', 'fish', 'bird'],
            answer: 'cat',
            hint: '喵喵叫的宠物',
            explanation: 'Cat是猫，I have a cat表示我有一只猫'
          },
          {
            id: 'e1u4l3q2',
            type: 'fill',
            question: 'I like ____.（狗）它们很可爱。',
            answer: 'dogs',
            hint: '汪汪叫的宠物',
            explanation: 'Dogs是狗的复数，I like dogs表示我喜欢狗'
          },
          {
            id: 'e1u4l3q3',
            type: 'flashcard',
            question: '看金鱼图片，说出英语名称',
            answer: 'Fish',
            hint: '水里游的宠物',
            explanation: 'Fish是鱼，是常见的小宠物'
          },
          {
            id: 'e1u4l3q4',
            type: 'choice',
            question: '"I like dogs"中dogs为什么加s？',
            options: ['表示一类动物', '表示很多只', '语法错误', '没有原因'],
            answer: '表示一类动物',
            hint: 'like后面用什么形式？',
            explanation: 'I like dogs用复数，表示喜欢狗这一类动物'
          },
          {
            id: 'e1u4l3q5',
            type: 'fill',
            question: 'I have a ____. It says "Meow".（猫）',
            answer: 'cat',
            hint: '喵喵叫的宠物',
            explanation: 'Cat猫的叫声是Meow'
          },
          {
            id: 'e1u4l3q6',
            type: 'choice',
            question: '以下哪种不是常见的宠物？',
            options: ['Lion', 'Cat', 'Dog', 'Fish'],
            answer: 'Lion',
            hint: '哪种动物不适合养在家里？',
            explanation: 'Lion狮子是野生动物，不适合当宠物'
          },
          {
            id: 'e1u4l3q7',
            type: 'drag',
            question: '把动物拖到正确位置：农场里产奶的是____',
            answer: 'Cow',
            hint: '[农场动物]（英语一年级-第4单元）',
            explanation: 'Cow奶牛产牛奶，回顾农场动物知识'
          }
        ]
      }
    ,
      {
        id: 'e1u4l4',
        title: 'Animals Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Animals单元！我们学了农场动物Cow/Pig/Sheep/Duck、动物园动物Lion/Elephant/Giraffe、宠物Cat/Dog/Fish`, animationType: 'reveal' },
          { type: 'formula', content: `动物分类：
农场动物：Cow, Pig, Sheep, Duck, Chicken
动物园动物：Lion, Elephant, Giraffe, Zebra, Monkey
宠物：Cat, Dog, Fish, Bird, Rabbit`, animationType: 'typewriter', label: '动物分类公式' },
          { type: 'animation', content: `动物分类卡片翻转，各类动物依次出场`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u4l4q1',
            type: 'choice',
            question: '哪种动物是"万兽之王"？',
            options: ['Lion', 'Elephant', 'Giraffe', 'Zebra'],
            answer: 'Lion',
            hint: '哪种动物最威风？',
            explanation: 'Lion狮子被称为King of the Jungle万兽之王'
          },
          {
            id: 'e1u4l4q2',
            type: 'fill',
            question: 'I like ____. They are friendly.（狗）',
            answer: 'dogs',
            hint: '用复数形式',
            explanation: 'I like dogs表示我喜欢狗，用复数表示一类动物'
          },
          {
            id: 'e1u4l4q3',
            type: 'choice',
            question: '哪种动物有黑白条纹？',
            options: ['Zebra', 'Giraffe', 'Elephant', 'Lion'],
            answer: 'Zebra',
            hint: '像穿条纹衫的马',
            explanation: 'Zebra斑马有黑白条纹'
          },
          {
            id: 'e1u4l4q4',
            type: 'drag',
            question: '把叫声拖到正确动物：Oink → ____',
            answer: 'Pig',
            hint: '哼哼叫的动物',
            explanation: 'Pig猪的叫声是Oink'
          },
          {
            id: 'e1u4l4q5',
            type: 'choice',
            question: '【期末真题】下列哪种动物是宠物？',
            options: ['Cat', 'Lion', 'Elephant', 'Cow'],
            answer: 'Cat',
            hint: '哪种可以养在家里？',
            explanation: 'Cat猫是常见宠物，Lion/Elephant/Cow都不是宠物'
          },
          {
            id: 'e1u4l4q6',
            type: 'fill',
            question: 'A ____ has a long neck.（长颈鹿）',
            answer: 'Giraffe',
            hint: '脖子最长的动物',
            explanation: 'Giraffe长颈鹿有很长的脖子'
          },
          {
            id: 'e1u4l4q7',
            type: 'choice',
            question: '农场动物和动物园动物最大的区别是什么？',
            options: ['农场动物可以被人类饲养，动物园动物是野生的', '农场动物更大', '动物园动物更少', '没有区别'],
            answer: '农场动物可以被人类饲养，动物园动物是野生的',
            hint: '[动物词汇]（英语一年级-第4单元）它们的生活方式不同',
            explanation: '农场动物Farm animals被人类饲养，动物园动物Zoo animals是野生动物'
          },
        ]
      },
      {
        id: 'e1u4l5',
        title: 'Animals in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `动物和我们的生活息息相关！农场给我们提供食物，动物园让我们认识野生动物，宠物给我们陪伴`, animationType: 'reveal' },
          { type: 'example', content: `场景1：参观农场 → I see a cow! It says Moo!
场景2：去动物园 → Look! The giraffe is so tall!
场景3：养宠物 → I have a cat. It is cute!`, animationType: 'bounce', label: '动物在生活中的应用' },
          { type: 'tip', content: `爱护动物，保护野生动物！We should protect animals!`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u4l5q1',
            type: 'choice',
            question: '我们去哪里看狮子和大象？',
            options: ['Zoo', 'Farm', 'Park', 'School'],
            answer: 'Zoo',
            hint: '野生动物在哪里？',
            explanation: 'Zoo动物园可以看到狮子和大象等野生动物'
          },
          {
            id: 'e1u4l5q2',
            type: 'fill',
            question: 'I drink ____ from the cow.（牛奶）',
            answer: 'milk',
            hint: '奶牛给我们什么？',
            explanation: 'Cow奶牛产牛奶milk，是农场的重要动物'
          },
          {
            id: 'e1u4l5q3',
            type: 'choice',
            question: '如果你想养一只宠物，以下哪个最合适？',
            options: ['Cat', 'Lion', 'Elephant', 'Bear'],
            answer: 'Cat',
            hint: '哪种动物适合家养？',
            explanation: 'Cat猫是最常见的家养宠物之一'
          },
          {
            id: 'e1u4l5q4',
            type: 'drag',
            question: '把动物拖到正确位置：会飞的宠物是____',
            answer: 'Bird',
            hint: '有翅膀的宠物',
            explanation: 'Bird鸟是会飞的宠物，可以在笼子里养'
          },
          {
            id: 'e1u4l5q5',
            type: 'choice',
            question: '【期末真题】小明去农场，他不可能看到哪种动物？',
            options: ['Lion', 'Cow', 'Pig', 'Duck'],
            answer: 'Lion',
            hint: '哪种不是农场动物？',
            explanation: 'Lion狮子是野生动物，不会出现在农场里'
          },
          {
            id: 'e1u4l5q6',
            type: 'fill',
            question: 'My pet ____ says "Woof woof".（狗）',
            answer: 'dog',
            hint: '汪汪叫的宠物',
            explanation: 'Dog狗的叫声是Woof woof'
          },
          {
            id: 'e1u4l5q7',
            type: 'choice',
            question: '我们应该怎样对待动物？',
            options: ['Protect and love them', 'Hurt them', 'Ignore them', 'Scare them'],
            answer: 'Protect and love them',
            hint: '[动物词汇]（英语-Animals-第1课）怎样对待动物才是对的？',
            explanation: '我们应该保护和爱护动物Protect and love animals'
          },
        ]
      }]
  },
  {
    id: 'e1u5',
    title: 'Family',
    subtitle: '我爱我的家，家人最温暖',
    order: 5,
    lessons: [
      {
        id: 'e1u5l1',
        title: '家庭成员',
        order: 1,
        teachingMethod: '实物展示教学法',
        iDo: '家长指着家庭照片，逐一介绍"This is my mom/dad/brother/sister"',
        weDo: '亲子一起看家庭照片，孩子跟着指认并说出家庭成员英语',
        youDo: '孩子独立拿出家庭照片，用英语介绍每位家庭成员',
        parentTips: '可以用全家福照片，让孩子有真实的情感连接',
        funElement: '唱《Finger Family》儿歌，用手指代表不同家庭成员',
        gsapAnimations: ['GSAP:家庭成员依次出现-stagger', 'GSAP:相框展开-frameOpen'],
        images: ['IMG:家庭照片插图', 'IMG:家庭成员卡片'],
        content: [
          { type: 'text', content: '让我们来认识家庭成员的英语名称！Mom妈妈、Dad爸爸、Brother兄弟、Sister姐妹、Grandpa爷爷、Grandma奶奶', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: This is my mom.\n小红: This is my dad.\n小明: This is my brother.\n小红: This is my sister!', label: '介绍家人对话', animationType: 'reveal' },
          { type: 'example', content: 'Mom — 妈妈（Mother）\nDad — 爸爸（Father）\nBrother — 兄弟\nSister — 姐妹\nGrandpa — 爷爷/外公\nGrandma — 奶奶/外婆', label: '家庭成员词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Mom和Dad是口语说法，更正式的说法是Mother和Father。和家人说话用Mom/Dad更亲切！', label: '用法提示', animationType: 'pulse' },
          { type: 'animation', content: '家庭相框展开，照片中家庭成员依次出现的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u5l1q1',
            type: 'choice',
            question: '"妈妈"用英语怎么说？',
            options: ['Mom', 'Dad', 'Sister', 'Brother'],
            answer: 'Mom',
            hint: '家里最温柔的人',
            explanation: 'Mom是妈妈，也可以说Mother'
          },
          {
            id: 'e1u5l1q2',
            type: 'fill',
            question: 'This is my ____.（爸爸）',
            answer: 'Dad',
            acceptableAnswers: ['Father'],
            hint: '家里最有力气的人',
            explanation: 'Dad是爸爸，也可以说Father'
          },
          {
            id: 'e1u5l1q3',
            type: 'drag',
            question: '把家庭成员拖到正确位置：爸爸的爸爸是____',
            answer: 'Grandpa',
            hint: '爷爷的英语怎么说？',
            explanation: 'Grandpa是爷爷/外公，Grandma是奶奶/外婆'
          },
          {
            id: 'e1u5l1q4',
            type: 'choice',
            question: 'Mom的正式说法是什么？',
            options: ['Mother', 'Father', 'Sister', 'Brother'],
            answer: 'Mother',
            hint: '更正式的称呼',
            explanation: 'Mom是口语，Mother是正式说法，都表示妈妈'
          },
          {
            id: 'e1u5l1q5',
            type: 'fill',
            question: 'This is my ____. She is my mom\'s mom.（奶奶/外婆）',
            answer: 'Grandma',
            acceptableAnswers: ['Grandmother'],
            hint: '妈妈的妈妈叫什么？',
            explanation: 'Grandma是奶奶/外婆，mom\'s mom就是Grandma'
          },
          {
            id: 'e1u5l1q6',
            type: 'choice',
            question: '【期末真题】"This is my brother"中brother是指？',
            options: ['兄弟', '姐妹', '妈妈', '爸爸'],
            answer: '兄弟',
            hint: 'brother是什么意思？',
            explanation: 'Brother是兄弟，是家庭中的男性兄弟姐妹'
          },
          {
            id: 'e1u5l1q7',
            type: 'drag',
            question: '把家庭成员拖到正确位置：爸爸的爸爸是____',
            answer: 'Grandpa',
            hint: '[家庭树]（英语一年级-第5单元）',
            explanation: '爸爸的爸爸是Grandpa爷爷，回顾家庭关系'
          }
        ]
      },
      {
        id: 'e1u5l2',
        title: '家庭树',
        order: 2,
        teachingMethod: '视觉化教学法',
        iDo: '家长画一棵家庭树，在树枝上贴家庭成员的照片和英语名称',
        weDo: '亲子一起制作家庭树，孩子贴照片并说出英语名称',
        youDo: '孩子独立向家人介绍家庭树上的每位成员',
        parentTips: '制作家庭树的过程本身就是很好的亲子互动',
        funElement: '用彩纸剪出树叶形状，每片树叶写一个家庭成员的英语名称',
        gsapAnimations: ['GSAP:树干生长-growTree', 'GSAP:树叶飘落-leafFall'],
        images: ['IMG:家庭树插图', 'IMG:制作家庭树场景'],
        content: [
          { type: 'text', content: '家庭树Family Tree可以帮我们看清家人之间的关系。树干上是爷爷奶奶，树枝上是爸爸妈妈，树叶上是孩子们', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: This is my family tree.\n小红: Who is this?\n小明: This is my grandpa and grandma.\n小红: And this is your uncle!', label: '家庭树对话', animationType: 'reveal' },
          { type: 'example', content: 'Grandpa + Grandma → Dad + Mom → Me\nUncle — 叔叔/舅舅\nAunt — 阿姨/姑姑\nCousin — 堂/表兄弟姐妹', label: '家庭关系词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Uncle可以指叔叔、舅舅、伯伯，Aunt可以指阿姨、姑姑、婶婶，英语用一个词表示多种关系！', label: '文化差异', animationType: 'pulse' },
          { type: 'animation', content: '家庭树从树干开始生长，枝叶逐渐展开的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u5l2q1',
            type: 'choice',
            question: '家庭树上，爸爸和妈妈的上方是谁？',
            options: ['Grandpa and Grandma', 'Brother and Sister', 'Uncle and Aunt', 'Mom and Dad'],
            answer: 'Grandpa and Grandma',
            hint: '爸爸的爸爸妈妈是谁？',
            explanation: '家庭树中，爷爷奶奶在爸爸妈妈的上方'
          },
          {
            id: 'e1u5l2q2',
            type: 'fill',
            question: 'My mom\'s sister is my ____.',
            answer: 'Aunt',
            hint: '妈妈的姐妹叫什么？',
            explanation: 'Aunt是阿姨/姑姑，妈妈的姐妹是aunt'
          },
          {
            id: 'e1u5l2q3',
            type: 'flashcard',
            question: '看家庭树图片，说出"叔叔"的英语',
            answer: 'Uncle',
            hint: '爸爸的兄弟叫什么？',
            explanation: 'Uncle是叔叔/舅舅，爸爸的兄弟是uncle'
          },
          {
            id: 'e1u5l2q4',
            type: 'choice',
            question: 'Uncle可以指哪些人？',
            options: ['叔叔、舅舅、伯伯', '只有叔叔', '只有舅舅', '只有伯伯'],
            answer: '叔叔、舅舅、伯伯',
            hint: 'Uncle包含哪些关系？',
            explanation: 'Uncle可以指叔叔、舅舅、伯伯，英语用一个词表示多种关系'
          },
          {
            id: 'e1u5l2q5',
            type: 'fill',
            question: 'My dad\'s brother is my ____.（叔叔）',
            answer: 'Uncle',
            hint: '爸爸的兄弟',
            explanation: 'Dad\'s brother爸爸的兄弟是Uncle叔叔'
          },
          {
            id: 'e1u5l2q6',
            type: 'choice',
            question: '在家庭树中，你和cousin是什么关系？',
            options: ['堂/表兄弟姐妹', '亲兄弟姐妹', '叔侄关系', '祖孙关系'],
            answer: '堂/表兄弟姐妹',
            hint: 'cousin是什么关系？',
            explanation: 'Cousin是堂/表兄弟姐妹，是Uncle/Aunt的孩子'
          },
          {
            id: 'e1u5l2q7',
            type: 'choice',
            question: '家庭树从下往上看，你上方的第一层是谁？',
            options: ['Mom and Dad', 'Grandpa and Grandma', 'Uncle and Aunt', 'Brother and Sister'],
            answer: 'Mom and Dad',
            hint: '[我爱我家]（英语一年级-第5单元）',
            explanation: '家庭树中，你上方的第一层是父母Mom and Dad'
          }
        ]
      },
      {
        id: 'e1u5l3',
        title: '我爱我家',
        order: 3,
        teachingMethod: '情感体验教学法',
        iDo: '家长拥抱孩子说"I love my family!"，表情温暖幸福',
        weDo: '亲子一起说"I love you, Mom/Dad!"，互相拥抱',
        youDo: '孩子独立用英语表达对家人的爱，画一幅全家福并配英语句子',
        parentTips: '鼓励孩子用英语表达爱意，这是最自然的语言输出',
        funElement: '制作英语爱心卡片，写上"I love you"送给家人',
        gsapAnimations: ['GSAP:爱心放大-heartBeat', 'GSAP:拥抱动画-hugEffect'],
        images: ['IMG:全家福场景', 'IMG:爱心卡片'],
        content: [
          { type: 'text', content: 'I love my family! 我爱我的家！用英语表达对家人的爱，让家人感受到温暖', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I love you, Mom!\n妈妈: I love you too!\n小明: I love my family!\n爸爸: We love you too!', label: '表达爱意对话', animationType: 'reveal' },
          { type: 'example', content: 'I love you — 我爱你\nI love my family — 我爱我的家\nI love my mom — 我爱妈妈\nI love my dad — 我爱爸爸', label: '爱的表达', animationType: 'bounce' },
          { type: 'tip', content: 'love是"爱"的意思，比like"喜欢"感情更深。对最亲近的人用love更温暖！', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '爱心从小到大跳动，最后变成大爱心包围全家人的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u5l3q1',
            type: 'choice',
            question: '"我爱我的家"用英语怎么说？',
            options: ['I love my family', 'I like my family', 'I see my family', 'I have my family'],
            answer: 'I love my family',
            hint: '表达爱用什么动词？',
            explanation: 'I love my family表示我爱我的家，love表达深深的爱'
          },
          {
            id: 'e1u5l3q2',
            type: 'fill',
            question: 'I love ____, Mom!（你）',
            answer: 'you',
            hint: '对妈妈说"我爱你"',
            explanation: 'I love you表示我爱你，you是"你"的意思'
          },
          {
            id: 'e1u5l3q3',
            type: 'drag',
            question: '把正确的词拖到空格：My ____ is happy.（家庭）',
            answer: 'family',
            hint: '全家人在一起叫什么？',
            explanation: 'Family表示家庭，My family is happy表示我的家庭很幸福'
          },
          {
            id: 'e1u5l3q4',
            type: 'choice',
            question: 'love和like有什么区别？',
            options: ['love感情更深', 'like感情更深', '没有区别', 'love只用于家人'],
            answer: 'love感情更深',
            hint: '哪个词表达的感情更强？',
            explanation: 'love爱比like喜欢感情更深，对最亲近的人用love'
          },
          {
            id: 'e1u5l3q5',
            type: 'fill',
            question: 'I love ____ family!（我的）',
            answer: 'my',
            hint: '用什么代词？',
            explanation: 'I love my family!我爱我的家！my表示我的'
          },
          {
            id: 'e1u5l3q6',
            type: 'choice',
            question: '以下哪句话最适合对妈妈说？',
            options: ['I love you, Mom!', 'I like you, Mom.', 'I see you, Mom.', 'I have you, Mom.'],
            answer: 'I love you, Mom!',
            hint: '对妈妈表达什么感情？',
            explanation: 'I love you, Mom!是对妈妈表达爱意的最温暖方式'
          },
          {
            id: 'e1u5l3q7',
            type: 'drag',
            question: '把词拖到正确位置：I love my ____!（家庭）',
            answer: 'family',
            hint: '[家庭成员]（英语一年级-第5单元）',
            explanation: 'I love my family!我爱我的家庭，回顾家庭词汇'
          }
        ]
      }
    ,
      {
        id: 'e1u5l4',
        title: 'Family Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Family单元！我们学了家庭成员Mom/Dad/Brother/Sister/Grandpa/Grandma、家庭树Family Tree、表达爱意I love my family`, animationType: 'reveal' },
          { type: 'formula', content: `家庭关系公式：
Mom + Dad = Parents（父母）
Grandpa + Grandma = Grandparents（祖父母）
Uncle/Aunt的孩子 = Cousin（堂/表兄弟姐妹）`, animationType: 'typewriter', label: '家庭关系公式' },
          { type: 'animation', content: `家庭树展开回顾，家庭成员依次出现`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u5l4q1',
            type: 'choice',
            question: 'Parents是指谁？',
            options: ['Mom and Dad', 'Grandpa and Grandma', 'Brother and Sister', 'Uncle and Aunt'],
            answer: 'Mom and Dad',
            hint: 'Parents是什么意思？',
            explanation: 'Parents是父母，指Mom妈妈和Dad爸爸'
          },
          {
            id: 'e1u5l4q2',
            type: 'fill',
            question: 'My mom\'s sister is my ____.（阿姨）',
            answer: 'Aunt',
            hint: '妈妈的姐妹',
            explanation: 'Aunt是阿姨/姑姑，mom\'s sister是Aunt'
          },
          {
            id: 'e1u5l4q3',
            type: 'choice',
            question: '家庭树中，Grandpa和Grandma在树的哪个位置？',
            options: ['最上面', '最下面', '中间', '旁边'],
            answer: '最上面',
            hint: '祖父母在家庭树的哪里？',
            explanation: '家庭树中，Grandpa和Grandma在最上面，是长辈'
          },
          {
            id: 'e1u5l4q4',
            type: 'drag',
            question: '把关系拖到正确位置：爸爸的姐妹叫____',
            answer: 'Aunt',
            hint: '姑姑用英语怎么说？',
            explanation: '爸爸的姐妹是Aunt姑姑'
          },
          {
            id: 'e1u5l4q5',
            type: 'choice',
            question: '【期末真题】在英语中，Uncle可以表示几种亲属关系？',
            options: ['3种以上（叔叔、舅舅、伯伯等）', '1种', '2种', '0种'],
            answer: '3种以上（叔叔、舅舅、伯伯等）',
            hint: '英语的Uncle包含哪些关系？',
            explanation: '英语Uncle可以指叔叔、舅舅、伯伯等3种以上关系'
          },
          {
            id: 'e1u5l4q6',
            type: 'fill',
            question: 'I love ____!（你）',
            answer: 'you',
            hint: '对家人说什么？',
            explanation: 'I love you!我爱你！是对家人最温暖的表达'
          },
          {
            id: 'e1u5l4q7',
            type: 'choice',
            question: '以下哪个不是家庭成员？',
            options: ['Teacher', 'Mom', 'Dad', 'Sister'],
            answer: 'Teacher',
            hint: '[家人词汇]（英语-Family-第1课）哪个不是家人？',
            explanation: 'Teacher老师不是家庭成员，Mom/Dad/Sister都是'
          },
        ]
      },
      {
        id: 'e1u5l5',
        title: 'Family in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `家庭是我们最温暖的港湾！用英语介绍家人、表达爱意，让家人感受到你的心意`, animationType: 'reveal' },
          { type: 'example', content: `场景1：介绍家人 → This is my mom. She is kind.
场景2：表达爱意 → I love you, Dad!
场景3：家庭活动 → My family is happy!`, animationType: 'bounce', label: '家庭英语在生活中的应用' },
          { type: 'tip', content: `每天对家人说一句英语，I love you, Mom/Dad! 简单又温暖！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u5l5q1',
            type: 'choice',
            question: '用英语介绍妈妈时说？',
            options: ['This is my mom', 'I am mom', 'She is me', 'Mom is I'],
            answer: 'This is my mom',
            hint: '介绍家人用什么句型？',
            explanation: 'This is my mom.这是我的妈妈，是介绍家人的标准句型'
          },
          {
            id: 'e1u5l5q2',
            type: 'fill',
            question: 'I love my ____! We are happy.（家庭）',
            answer: 'family',
            hint: '全家人',
            explanation: 'I love my family!我爱我的家庭！'
          },
          {
            id: 'e1u5l5q3',
            type: 'choice',
            question: '父亲节应该对爸爸说什么？',
            options: ['I love you, Dad!', 'Goodbye, Dad!', 'Stand up, Dad!', 'Hello, Dad!'],
            answer: 'I love you, Dad!',
            hint: '表达对爸爸的爱',
            explanation: 'I love you, Dad!是对爸爸表达爱意的最佳方式'
          },
          {
            id: 'e1u5l5q4',
            type: 'drag',
            question: '把称呼拖到正确位置：妈妈的妈妈=____',
            answer: 'Grandma',
            hint: '外婆用英语怎么说？',
            explanation: '妈妈的妈妈是Grandma外婆/奶奶'
          },
          {
            id: 'e1u5l5q5',
            type: 'choice',
            question: '【期末真题】小明指着家庭照片说"This is my father"，father是指？',
            options: ['爸爸', '妈妈', '爷爷', '兄弟'],
            answer: '爸爸',
            hint: 'father是什么意思？',
            explanation: 'Father是爸爸的正式说法，和Dad意思相同'
          },
          {
            id: 'e1u5l5q6',
            type: 'fill',
            question: 'My ____ is my mom\'s husband.（爸爸）',
            answer: 'Dad',
            acceptableAnswers: ['Father'],
            hint: '妈妈的丈夫是谁？',
            explanation: 'Dad爸爸是Mom妈妈的丈夫'
          },
          {
            id: 'e1u5l5q7',
            type: 'choice',
            question: '春节时全家团聚，你可以说？',
            options: ['My family is together and happy!', 'I am alone.', 'Goodbye family!', 'I don\'t like my family.'],
            answer: 'My family is together and happy!',
            hint: '[家人词汇]（英语-Family-第1课）全家团聚说什么？',
            explanation: 'My family is together and happy!我的家人在一起很幸福！'
          },
        ]
      }]
  },
  {
    id: 'e1u6',
    title: 'Food',
    subtitle: '美味食物，你最喜欢什么',
    order: 6,
    lessons: [
      {
        id: 'e1u6l1',
        title: '水果',
        order: 1,
        teachingMethod: '实物展示教学法',
        iDo: '家长拿出真实水果，举起来说"Apple! Banana!"，让孩子摸一摸闻一闻',
        weDo: '亲子一起品尝水果，边吃边说水果名称，描述味道',
        youDo: '孩子独立说出水果名称，并尝试用简单句子描述',
        parentTips: '用真实水果比图片效果好得多，可以调动多种感官',
        funElement: '玩"水果沙拉"游戏，说出水果名称才能加入沙拉碗',
        gsapAnimations: ['GSAP:水果弹跳-fruitBounce', 'GSAP:水果旋转入场-spinIn'],
        images: ['IMG:水果拼盘插图', 'IMG:各种水果卡片'],
        content: [
          { type: 'text', content: '水果不仅好吃，英语名字也很有趣！Apple苹果红又甜，Banana香蕉弯又黄，Orange橘子圆又鲜', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I like apples!\n小红: I like bananas!\n小明: What\'s this?\n小红: It\'s an orange! Yummy!', label: '水果对话', animationType: 'reveal' },
          { type: 'example', content: 'Apple — 苹果\nBanana — 香蕉\nOrange — 橘子/橙色\nGrape — 葡萄\nWatermelon — 西瓜\nStrawberry — 草莓', label: '水果词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Orange既是"橘子"又是"橙色"，一个词两个意思，是不是很神奇？', label: '趣味知识', animationType: 'pulse' },
          { type: 'animation', content: '水果依次弹跳入场，配合水果名称拼写的打字机效果', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u6l1q1',
            type: 'choice',
            question: '黄色弯弯的水果是什么？',
            options: ['Banana', 'Apple', 'Orange', 'Grape'],
            answer: 'Banana',
            hint: '猴子最喜欢的水果',
            explanation: 'Banana是香蕉，黄色弯弯的形状'
          },
          {
            id: 'e1u6l1q2',
            type: 'fill',
            question: 'I like ____.（苹果）它们又红又甜。',
            answer: 'apples',
            hint: '红色圆圈的水果',
            explanation: 'Apples是苹果的复数，I like apples表示我喜欢苹果'
          },
          {
            id: 'e1u6l1q3',
            type: 'flashcard',
            question: '看橘子的图片，说出英语名称',
            answer: 'Orange',
            hint: '和颜色同名的圆形水果',
            explanation: 'Orange既是橙色也是橘子，一个词两个意思'
          },
          {
            id: 'e1u6l1q4',
            type: 'choice',
            question: '哪种水果和颜色同名？',
            options: ['Orange', 'Apple', 'Banana', 'Grape'],
            answer: 'Orange',
            hint: '一个词两个意思',
            explanation: 'Orange既是橘子又是橙色，一词多义'
          },
          {
            id: 'e1u6l1q5',
            type: 'fill',
            question: 'Grapes are ____.（紫色）',
            answer: 'purple',
            hint: '葡萄的颜色',
            explanation: 'Grapes are purple表示葡萄是紫色的'
          },
          {
            id: 'e1u6l1q6',
            type: 'choice',
            question: '【期末真题】以下哪种水果是红色的？',
            options: ['Apple', 'Banana', 'Orange', 'Grape'],
            answer: 'Apple',
            hint: '哪种水果通常是红色的？',
            explanation: 'Apple苹果通常是红色的Red'
          },
          {
            id: 'e1u6l1q7',
            type: 'drag',
            question: '把水果拖到正确位置：猴子最喜欢____',
            answer: 'Banana',
            hint: '[食物]（英语一年级-第6单元）',
            explanation: 'Banana香蕉是猴子最喜欢的水果，回顾水果词汇'
          }
        ]
      },
      {
        id: 'e1u6l2',
        title: '食物',
        order: 2,
        teachingMethod: '情景教学法',
        iDo: '家长展示食物图片，说"Rice, bread, milk, egg"，模拟用餐场景',
        weDo: '亲子一起玩"餐厅点餐"游戏，用英语点想吃的食物',
        youDo: '孩子独立用英语说出常见食物名称，模拟点餐',
        parentTips: '吃饭时是练习食物英语的最佳时机',
        funElement: '玩"小厨师"游戏，用英语报菜名做菜',
        gsapAnimations: ['GSAP:餐盘出现-plateSlide', 'GSAP:食物落入碗中-dropIn'],
        images: ['IMG:餐桌场景插图', 'IMG:食物卡片'],
        content: [
          { type: 'text', content: '早餐吃什么？Milk牛奶、Bread面包、Egg鸡蛋、Rice米饭，这些都是常见的食物', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: What do you want for breakfast?\n小明: I want milk and bread, please!\n妈妈: Here you are!\n小明: Thank you, Mom!', label: '早餐对话', animationType: 'reveal' },
          { type: 'example', content: 'Milk — 牛奶\nBread — 面包\nEgg — 鸡蛋\nRice — 米饭\nNoodles — 面条\nCake — 蛋糕', label: '食物词汇', animationType: 'bounce' },
          { type: 'tip', content: 'I eat bread for breakfast表示我早餐吃面包，for breakfast是"作为早餐"的意思', label: '用法提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e1u6l2q1',
            type: 'choice',
            question: '早餐常喝的白色饮品是什么？',
            options: ['Milk', 'Juice', 'Water', 'Tea'],
            answer: 'Milk',
            hint: '奶牛产的白色饮品',
            explanation: 'Milk是牛奶，是早餐常见的健康饮品'
          },
          {
            id: 'e1u6l2q2',
            type: 'fill',
            question: 'I eat ____ for breakfast.（面包）',
            answer: 'bread',
            hint: '早餐常吃的烤的那个',
            explanation: 'Bread是面包，是常见的早餐食物'
          },
          {
            id: 'e1u6l2q3',
            type: 'drag',
            question: '把食物拖到正确位置：圆圆的早餐食物是____',
            answer: 'Egg',
            hint: '鸡下的那个',
            explanation: 'Egg是鸡蛋，是营养丰富的早餐食物'
          },
          {
            id: 'e1u6l2q4',
            type: 'choice',
            question: '中国人早餐常吃的食物是？',
            options: ['Rice/Noodles', 'Bread only', 'Cake only', 'Pizza'],
            answer: 'Rice/Noodles',
            hint: '中国早餐吃什么？',
            explanation: '中国人早餐常吃米饭Rice或面条Noodles'
          },
          {
            id: 'e1u6l2q5',
            type: 'fill',
            question: 'I eat ____ for breakfast.（鸡蛋）',
            answer: 'eggs',
            hint: '早餐常吃的圆的东西',
            explanation: 'eggs是鸡蛋的复数，I eat eggs for breakfast表示我早餐吃鸡蛋'
          },
          {
            id: 'e1u6l2q6',
            type: 'choice',
            question: '以下哪种食物是饮料？',
            options: ['Milk', 'Bread', 'Rice', 'Egg'],
            answer: 'Milk',
            hint: '哪种是喝的？',
            explanation: 'Milk牛奶是饮料，Bread/Rice/Egg是食物'
          },
          {
            id: 'e1u6l2q7',
            type: 'choice',
            question: 'for breakfast是什么意思？',
            options: ['作为早餐', '在早餐前', '不吃早餐', '做早餐'],
            answer: '作为早餐',
            hint: '[我喜欢]（英语一年级-第6单元）',
            explanation: 'for breakfast表示作为早餐，I eat bread for breakfast我早餐吃面包'
          }
        ]
      },
      {
        id: 'e1u6l3',
        title: '我喜欢',
        order: 3,
        teachingMethod: 'I Do→We Do→You Do',
        iDo: '家长示范说"I like apples! Yummy!"，做出好吃的表情',
        weDo: '亲子一起说出各自喜欢的食物"I like..."，互相分享',
        youDo: '孩子独立用"I like..."和"I don\'t like..."表达食物喜好',
        parentTips: '尊重孩子的喜好，鼓励用英语表达真实感受',
        funElement: '玩"食物投票"，用英语说出喜欢的食物并举手投票',
        gsapAnimations: ['GSAP:笑脸出现-smilePop', 'GSAP:竖起大拇指-thumbsUp'],
        images: ['IMG:我喜欢食物场景', 'IMG:Yummy/Yucky表情卡'],
        content: [
          { type: 'text', content: 'I like... 我喜欢…… I don\'t like... 我不喜欢……用这两个句型来表达你对食物的喜好吧！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I like apples! Yummy!\n小红: I don\'t like onions.\n小明: Do you like bananas?\n小红: Yes! I like bananas too!', label: '喜好表达对话', animationType: 'reveal' },
          { type: 'example', content: 'I like apples — 我喜欢苹果\nI don\'t like onions — 我不喜欢洋葱\nYummy! — 好吃！\nYuck! — 不好吃！', label: '喜好表达句型', animationType: 'bounce' },
          { type: 'tip', content: "don't是do not的缩写，I don't like表示我不喜欢。说的时候可以摇头，表达更生动！", label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '笑脸和哭脸交替出现，配合Yummy和Yuck的语音', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u6l3q1',
            type: 'choice',
            question: '"我喜欢香蕉"用英语怎么说？',
            options: ['I like bananas', 'I have bananas', 'I see bananas', 'I eat bananas'],
            answer: 'I like bananas',
            hint: '表达喜欢用什么词？',
            explanation: 'I like...表示我喜欢...，是表达喜好的基本句型'
          },
          {
            id: 'e1u6l3q2',
            type: 'fill',
            question: 'I ____ like onions.（我不喜欢洋葱）',
            answer: "don't",
            acceptableAnswers: ['do not'],
            hint: '否定句在like前面加什么？',
            explanation: "I don't like...表示我不喜欢...，don't是否定词"
          },
          {
            id: 'e1u6l3q3',
            type: 'flashcard',
            question: '看表情卡片，好吃的时候说哪个词？',
            answer: 'Yummy',
            hint: '吃到好吃的会说什么？',
            explanation: 'Yummy表示好吃，是小朋友常用的感叹词'
          },
          {
            id: 'e1u6l3q4',
            type: 'choice',
            question: 'don\'t是什么的缩写？',
            options: ['do not', 'does not', 'did not', 'are not'],
            answer: 'do not',
            hint: 'don\'t的完整形式',
            explanation: 'don\'t是do not的缩写，I don\'t like表示我不喜欢'
          },
          {
            id: 'e1u6l3q5',
            type: 'fill',
            question: 'I ____ apples! Yummy!（喜欢）',
            answer: 'like',
            hint: '表达喜欢用什么词？',
            explanation: 'I like apples!表示我喜欢苹果！好吃！'
          },
          {
            id: 'e1u6l3q6',
            type: 'choice',
            question: 'Yummy和Yuck分别表示什么？',
            options: ['好吃和不好吃', '好看和不好看', '好闻和不好闻', '好听和不好听'],
            answer: '好吃和不好吃',
            hint: '这两个词描述什么？',
            explanation: 'Yummy好吃！Yuck不好吃！是描述食物味道的感叹词'
          },
          {
            id: 'e1u6l3q7',
            type: 'drag',
            question: '把词拖到正确位置：I ____ like onions. Yuck!（不）',
            answer: 'don\'t',
            hint: '[食物]（英语一年级-第6单元）',
            explanation: 'I don\'t like onions. Yuck!我不喜欢洋葱。不好吃！回顾食物表达'
          }
        ]
      }
    ,
      {
        id: 'e1u6l4',
        title: 'Food Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Food单元！我们学了水果Apple/Banana/Orange、食物Milk/Bread/Egg/Rice、喜好表达I like/I don't like`, animationType: 'reveal' },
          { type: 'formula', content: `食物喜好公式：
I like + 食物（复数） → I like apples!
I don't like + 食物（复数） → I don't like onions.
Yummy! = 好吃！/ Yuck! = 不好吃！`, animationType: 'typewriter', label: '食物喜好公式' },
          { type: 'animation', content: `食物卡片翻转回顾，笑脸哭脸交替出现`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u6l4q1',
            type: 'choice',
            question: '哪种水果是黄色的？',
            options: ['Banana', 'Apple', 'Grape', 'Orange'],
            answer: 'Banana',
            hint: '弯弯的黄色水果',
            explanation: 'Banana香蕉是黄色的'
          },
          {
            id: 'e1u6l4q2',
            type: 'fill',
            question: 'I ____ milk for breakfast.（喝）',
            answer: 'drink',
            hint: '喝饮料用什么动词？',
            explanation: 'drink milk表示喝牛奶，drink是喝的意思'
          },
          {
            id: 'e1u6l4q3',
            type: 'choice',
            question: 'I don\'t like onions中don\'t是什么意思？',
            options: ['不', '很', '也', '都'],
            answer: '不',
            hint: 'don\'t是否定词',
            explanation: 'don\'t是否定词，I don\'t like表示我不喜欢'
          },
          {
            id: 'e1u6l4q4',
            type: 'drag',
            question: '把食物拖到正确位置：早餐喝的白色饮品是____',
            answer: 'Milk',
            hint: '奶牛产的饮品',
            explanation: 'Milk牛奶是早餐常喝的白色饮品'
          },
          {
            id: 'e1u6l4q5',
            type: 'choice',
            question: '【期末真题】"我喜欢苹果"的正确表达是？',
            options: ['I like apples', 'I like apple', 'I likes apples', 'I am like apples'],
            answer: 'I like apples',
            hint: '注意名词复数',
            explanation: 'I like apples用复数形式，表示喜欢苹果这一类水果'
          },
          {
            id: 'e1u6l4q6',
            type: 'fill',
            question: 'Yuck! I don\'t like ____.（洋葱）',
            answer: 'onions',
            hint: '不好吃的蔬菜',
            explanation: 'onions是洋葱的复数，I don\'t like onions表示我不喜欢洋葱'
          },
          {
            id: 'e1u6l4q7',
            type: 'choice',
            question: '以下哪种是健康食物？',
            options: ['Apple', 'Candy', 'Cake', 'Soda'],
            answer: 'Apple',
            hint: '[食物词汇]（英语-Food & Drink-第1课）哪种对身体好？',
            explanation: 'Apple苹果是健康食物，Candy/Cake/Soda不太健康'
          },
        ]
      },
      {
        id: 'e1u6l5',
        title: 'Food in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `食物是生活中最常见的话题！点餐、购物、描述喜好……都需要用英语说出食物名称`, animationType: 'reveal' },
          { type: 'example', content: `场景1：餐厅点餐 → I want rice and milk, please.
场景2：超市购物 → I need apples and bananas.
场景3：描述喜好 → I like apples! Yummy! I don't like onions.`, animationType: 'bounce', label: '食物在生活中的应用' },
          { type: 'tip', content: `吃饭时用英语说出食物名称，每天练习3种食物！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u6l5q1',
            type: 'choice',
            question: '在餐厅想点面包，应该说？',
            options: ['I want bread, please.', 'I don\'t like bread.', 'Bread is bad.', 'Give me bread!'],
            answer: 'I want bread, please.',
            hint: '礼貌地点餐',
            explanation: 'I want bread, please.请给我面包，是礼貌的点餐方式'
          },
          {
            id: 'e1u6l5q2',
            type: 'fill',
            question: 'I like ____! They are sweet and red.（苹果）',
            answer: 'apples',
            hint: '红色甜水果',
            explanation: 'apples是苹果的复数，I like apples!我喜欢苹果！'
          },
          {
            id: 'e1u6l5q3',
            type: 'choice',
            question: '去超市买水果，以下哪个不是水果？',
            options: ['Milk', 'Apple', 'Banana', 'Orange'],
            answer: 'Milk',
            hint: '哪个不是水果？',
            explanation: 'Milk牛奶是饮料，不是水果'
          },
          {
            id: 'e1u6l5q4',
            type: 'drag',
            question: '把食物拖到正确位置：早餐吃圆圆的食物是____',
            answer: 'Egg',
            hint: '鸡下的',
            explanation: 'Egg鸡蛋是圆圆的早餐食物'
          },
          {
            id: 'e1u6l5q5',
            type: 'choice',
            question: '【期末真题】小红说"I don\'t like bananas"，她不喜欢什么？',
            options: ['香蕉', '苹果', '橘子', '葡萄'],
            answer: '香蕉',
            hint: 'bananas是什么？',
            explanation: 'bananas是香蕉，I don\'t like bananas表示我不喜欢香蕉'
          },
          {
            id: 'e1u6l5q6',
            type: 'fill',
            question: 'We eat ____ on Spring Festival.（饺子）',
            answer: 'dumplings',
            hint: '春节传统食物',
            explanation: 'dumplings是饺子，春节吃饺子是传统'
          },
          {
            id: 'e1u6l5q7',
            type: 'choice',
            question: '哪种食物既健康又好吃？',
            options: ['Apple', 'Candy', 'Chips', 'Soda'],
            answer: 'Apple',
            hint: '[食物词汇]（英语-Food & Drink-第1课）哪种最有营养？',
            explanation: 'Apple苹果既健康又好吃，是最佳选择'
          },
        ]
      }]
  },
  {
    id: 'e1u7',
    title: 'Body',
    subtitle: '认识身体部位，动动更健康',
    order: 7,
    lessons: [
      {
        id: 'e1u7l1',
        title: '身体部位',
        order: 1,
        teachingMethod: 'TPR全身反应法',
        iDo: '家长指着自己的身体部位说"Head! Shoulders! Knees!"，动作清晰',
        weDo: '亲子一起玩"Simon Says touch your head"游戏，听指令摸身体部位',
        youDo: '孩子独立听指令指出身体部位，或自己说出身体部位名称',
        parentTips: '从大到小指认身体部位，先学大的部位再学小的',
        funElement: '唱《Head, Shoulders, Knees and Toes》，越唱越快',
        gsapAnimations: ['GSAP:身体部位高亮-highlight', 'GSAP:触摸动画-touchPulse'],
        images: ['IMG:身体部位图', 'IMG:小朋友指认身体插图'],
        content: [
          { type: 'text', content: 'Head头、Shoulders肩膀、Knees膝盖、Toes脚趾，这些是我们身体的重要部位！', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: Touch your head!\n同学们: (摸头) Head!\n老师: Touch your shoulders!\n同学们: (摸肩膀) Shoulders!', label: '身体部位指令对话', animationType: 'reveal' },
          { type: 'example', content: 'Head — 头\nShoulders — 肩膀\nKnees — 膝盖\nToes — 脚趾\nArms — 手臂\nFeet — 脚', label: '身体部位词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Foot是脚的单数，Feet是脚的复数。一只脚是one foot，两只脚是two feet！', label: '单复数提示', animationType: 'pulse' },
          { type: 'animation', content: '小朋友身体部位依次高亮闪烁，配合部位名称出现的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u7l1q1',
            type: 'choice',
            question: '"头"用英语怎么说？',
            options: ['Head', 'Hand', 'Foot', 'Arm'],
            answer: 'Head',
            hint: '身体最上面的部位',
            explanation: 'Head是头，是身体最上面的部位'
          },
          {
            id: 'e1u7l1q2',
            type: 'fill',
            question: 'Touch your ____.（肩膀）',
            answer: 'Shoulders',
            hint: '手臂和脖子之间的部位',
            explanation: 'Shoulders是肩膀，Touch your shoulders表示摸摸你的肩膀'
          },
          {
            id: 'e1u7l1q3',
            type: 'drag',
            question: '把身体部位拖到正确位置：走路用的脚是____',
            answer: 'Feet',
            hint: '脚的英语怎么说？',
            explanation: 'Feet是脚的复数，单数是Foot'
          },
          {
            id: 'e1u7l1q4',
            type: 'choice',
            question: 'Foot的复数形式是什么？',
            options: ['Feet', 'Foots', 'Footes', 'Foot'],
            answer: 'Feet',
            hint: 'foot是不规则变化',
            explanation: 'Foot的复数是Feet，是不规则变化'
          },
          {
            id: 'e1u7l1q5',
            type: 'fill',
            question: 'Touch your ____.（手臂）',
            answer: 'Arms',
            hint: '肩膀和手之间的部位',
            explanation: 'Arms是手臂，Touch your arms摸摸你的手臂'
          },
          {
            id: 'e1u7l1q6',
            type: 'choice',
            question: '【期末真题】以下哪个身体部位是复数形式？',
            options: ['Feet', 'Head', 'Nose', 'Mouth'],
            answer: 'Feet',
            hint: '哪个词是复数？',
            explanation: 'Feet是Foot的复数形式，是身体部位中的不规则复数'
          },
          {
            id: 'e1u7l1q7',
            type: 'drag',
            question: '把身体部位拖到正确位置：走路用____',
            answer: 'Feet',
            hint: '[头肩膀膝盖脚]（英语一年级-第7单元）',
            explanation: '走路用Feet脚，回顾身体部位功能'
          }
        ]
      },
      {
        id: 'e1u7l2',
        title: '头肩膀膝盖脚',
        order: 2,
        teachingMethod: '音乐律动教学法',
        iDo: '家长边唱边做动作"Head, shoulders, knees and toes, knees and toes"',
        weDo: '亲子一起唱跳，速度从慢到快，看谁跟得上',
        youDo: '孩子独立唱完整首歌，并按歌词顺序摸对应身体部位',
        parentTips: '加快速度时孩子可能会乱，这很正常，重在参与',
        funElement: '挑战"超快版"头肩膀膝盖脚歌，看谁最快不出错',
        gsapAnimations: ['GSAP:动作轨迹描绘-motionPath', 'GSAP:速度加快-accelerate'],
        images: ['IMG:唱跳场景插图', 'IMG:歌曲歌词卡'],
        content: [
          { type: 'text', content: '《Head, Shoulders, Knees and Toes》是一首经典的英语身体部位儿歌，边唱边摸身体部位，越唱越快！', animationType: 'reveal' },
          { type: 'dialogue', content: '合唱: Head, shoulders, knees and toes, knees and toes!\nHead, shoulders, knees and toes, knees and toes!\nAnd eyes and ears and mouth and nose,\nHead, shoulders, knees and toes, knees and toes!', label: '身体部位歌', animationType: 'reveal' },
          { type: 'example', content: 'Head → Shoulders → Knees → Toes\nEyes → Ears → Mouth → Nose', label: '歌曲顺序', animationType: 'typewriter' },
          { type: 'tip', content: '唱这首歌时，唱到哪个身体部位就用手摸那个部位，速度从慢到快，特别有趣！', label: '活动提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e1u7l2q1',
            type: 'choice',
            question: '歌曲中"Knees and toes"的toes是什么？',
            options: ['脚趾', '膝盖', '手指', '耳朵'],
            answer: '脚趾',
            hint: '脚上的小指头',
            explanation: 'Toes是脚趾，Knees and toes是膝盖和脚趾'
          },
          {
            id: 'e1u7l2q2',
            type: 'fill',
            question: 'Head, ____, knees and toes.',
            answer: 'Shoulders',
            hint: '第二个身体部位是什么？',
            explanation: '歌曲顺序：Head, Shoulders, Knees and Toes'
          },
          {
            id: 'e1u7l2q3',
            type: 'flashcard',
            question: '看膝盖的图片，说出英语',
            answer: 'Knees',
            hint: '腿弯曲的地方',
            explanation: 'Knees是膝盖，弯曲腿部时突出的部位'
          },
          {
            id: 'e1u7l2q4',
            type: 'choice',
            question: '歌曲中"Eyes and ears and mouth and nose"排在第一位的是？',
            options: ['Eyes', 'Ears', 'Mouth', 'Nose'],
            answer: 'Eyes',
            hint: '歌曲第二段的顺序',
            explanation: '歌曲第二段：And eyes and ears and mouth and nose'
          },
          {
            id: 'e1u7l2q5',
            type: 'fill',
            question: 'Head, shoulders, ____ and toes.',
            answer: 'Knees',
            hint: '膝盖的英语',
            explanation: 'Knees是膝盖，歌曲顺序：Head, Shoulders, Knees and Toes'
          },
          {
            id: 'e1u7l2q6',
            type: 'choice',
            question: '唱这首歌时，唱到toes应该摸哪里？',
            options: ['脚趾', '膝盖', '肩膀', '头'],
            answer: '脚趾',
            hint: 'toes是什么？',
            explanation: 'Toes是脚趾，唱到toes时应该摸脚趾'
          },
          {
            id: 'e1u7l2q7',
            type: 'choice',
            question: '这首歌帮我们记住了什么？',
            options: ['身体部位名称', '颜色名称', '动物名称', '数字名称'],
            answer: '身体部位名称',
            hint: '[五官]（英语一年级-第7单元）',
            explanation: '这首歌帮我们记住身体部位的英语名称'
          }
        ]
      },
      {
        id: 'e1u7l3',
        title: '五官',
        order: 3,
        teachingMethod: '多感官教学法',
        iDo: '家长指着自己的五官说"Eyes, ears, nose, mouth"，让孩子观察',
        weDo: '亲子一起画脸，边画边说五官的英语名称',
        youDo: '孩子独立指认五官并用英语说出名称，描述五官的功能',
        parentTips: '可以结合五官的功能来记忆，如"I see with my eyes"',
        funElement: '玩"蒙眼摸脸"游戏，闭眼摸五官说出英语名称',
        gsapAnimations: ['GSAP:五官依次出现-stagger', 'GSAP:眨眼动画-blink'],
        images: ['IMG:五官特写插图', 'IMG:画脸场景'],
        content: [
          { type: 'text', content: 'Eyes眼睛用来看、Ears耳朵用来听、Nose鼻子用来闻、Mouth嘴巴用来尝，五官各有各的用处！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I see with my eyes!\n小红: I hear with my ears!\n小明: I smell with my nose!\n小红: I taste with my mouth!', label: '五官功能对话', animationType: 'reveal' },
          { type: 'example', content: 'Eyes — 眼睛（看 see）\nEars — 耳朵（听 hear）\nNose — 鼻子（闻 smell）\nMouth — 嘴巴（尝 taste）', label: '五官及功能', animationType: 'bounce' },
          { type: 'tip', content: 'with是"用"的意思，I see with my eyes就是"我用眼睛看"', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '脸部五官依次出现并眨眼/动的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u7l3q1',
            type: 'choice',
            question: '我们用什么看东西？',
            options: ['Eyes', 'Ears', 'Nose', 'Mouth'],
            answer: 'Eyes',
            hint: '脸上的两个小窗户',
            explanation: 'Eyes是眼睛，我们用眼睛看东西：I see with my eyes'
          },
          {
            id: 'e1u7l3q2',
            type: 'fill',
            question: 'I smell with my ____.（鼻子）',
            answer: 'Nose',
            hint: '脸中间突出的部位',
            explanation: 'Nose是鼻子，我们用鼻子闻东西：I smell with my nose'
          },
          {
            id: 'e1u7l3q3',
            type: 'drag',
            question: '把五官拖到正确位置：听声音用____',
            answer: 'Ears',
            hint: '头两侧的部位',
            explanation: 'Ears是耳朵，我们用耳朵听声音：I hear with my ears'
          },
          {
            id: 'e1u7l3q4',
            type: 'choice',
            question: '"I smell with my nose"中with是什么意思？',
            options: ['用', '和', '在', '去'],
            answer: '用',
            hint: 'with在这里是什么意思？',
            explanation: 'with是"用"的意思，I smell with my nose我用鼻子闻'
          },
          {
            id: 'e1u7l3q5',
            type: 'fill',
            question: 'I taste with my ____.（嘴巴）',
            answer: 'Mouth',
            hint: '品尝食物用什么？',
            explanation: 'Mouth是嘴巴，I taste with my mouth我用嘴巴尝'
          },
          {
            id: 'e1u7l3q6',
            type: 'choice',
            question: '如果闭上眼睛，哪个感官不能用了？',
            options: ['Sight视觉', 'Hearing听觉', 'Smell嗅觉', 'Taste味觉'],
            answer: 'Sight视觉',
            hint: '眼睛用什么感官？',
            explanation: '闭上眼睛就不能看了，Sight视觉需要眼睛'
          },
          {
            id: 'e1u7l3q7',
            type: 'drag',
            question: '把五官拖到正确位置：闻味道用____',
            answer: 'Nose',
            hint: '[身体部位]（英语一年级-第7单元）',
            explanation: '闻味道用Nose鼻子，回顾五官功能'
          }
        ]
      }
    ,
      {
        id: 'e1u7l4',
        title: 'Body Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Body单元！我们学了身体部位Head/Shoulders/Knees/Toes、身体部位歌、五官Eyes/Ears/Nose/Mouth及功能`, animationType: 'reveal' },
          { type: 'formula', content: `五官功能公式：
I see with my eyes.（看）
I hear with my ears.（听）
I smell with my nose.（闻）
I taste with my mouth.（尝）`, animationType: 'typewriter', label: '五官功能公式' },
          { type: 'animation', content: `身体部位高亮回顾，五官功能动画重现`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u7l4q1',
            type: 'choice',
            question: '我们用什么听声音？',
            options: ['Ears', 'Eyes', 'Nose', 'Mouth'],
            answer: 'Ears',
            hint: '哪个器官负责听？',
            explanation: 'Ears耳朵用来听声音，I hear with my ears'
          },
          {
            id: 'e1u7l4q2',
            type: 'fill',
            question: 'I see with my ____.（眼睛）',
            answer: 'Eyes',
            hint: '看东西用什么？',
            explanation: 'Eyes是眼睛，I see with my eyes我用眼睛看'
          },
          {
            id: 'e1u7l4q3',
            type: 'choice',
            question: 'Foot的复数是什么？',
            options: ['Feet', 'Foot', 'Foots', 'Feets'],
            answer: 'Feet',
            hint: '不规则变化',
            explanation: 'Foot→Feet是不规则复数变化'
          },
          {
            id: 'e1u7l4q4',
            type: 'drag',
            question: '把身体部位拖到正确位置：肩膀=____',
            answer: 'Shoulders',
            hint: '手臂和脖子之间',
            explanation: 'Shoulders是肩膀，Touch your shoulders摸摸你的肩膀'
          },
          {
            id: 'e1u7l4q5',
            type: 'choice',
            question: '【期末真题】"I smell with my nose"意思是？',
            options: ['我用鼻子闻', '我用鼻子看', '我用鼻子听', '我用鼻子吃'],
            answer: '我用鼻子闻',
            hint: 'smell是什么意思？',
            explanation: 'smell是闻的意思，I smell with my nose我用鼻子闻'
          },
          {
            id: 'e1u7l4q6',
            type: 'fill',
            question: 'Head, ____, knees and toes.',
            answer: 'Shoulders',
            hint: '第二个身体部位',
            explanation: '歌曲顺序：Head, Shoulders, Knees and Toes'
          },
          {
            id: 'e1u7l4q7',
            type: 'choice',
            question: '以下哪个不是五官？',
            options: ['Arms', 'Eyes', 'Ears', 'Nose'],
            answer: 'Arms',
            hint: '[身体词汇]（英语-Body Parts-第1课）哪个不在脸上？',
            explanation: 'Arms手臂不是五官，Eyes/Ears/Nose都是五官'
          },
        ]
      },
      {
        id: 'e1u7l5',
        title: 'Body in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `身体部位在生活中经常用到！运动、看病、描述自己……都需要说出身体部位的英语`, animationType: 'reveal' },
          { type: 'example', content: `场景1：运动 → Touch your toes! Raise your arms!
场景2：看病 → My head hurts. I have a stomachache.
场景3：描述 → I have two eyes and one nose.`, animationType: 'bounce', label: '身体部位在生活中的应用' },
          { type: 'tip', content: `每天做一遍Head, Shoulders, Knees and Toes操，既锻炼身体又复习英语！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u7l5q1',
            type: 'choice',
            question: '体育课上老师说"Touch your head"，你应该？',
            options: ['摸头', '摸脚', '摸膝盖', '举手'],
            answer: '摸头',
            hint: 'Touch your head是什么意思？',
            explanation: 'Touch your head表示摸你的头'
          },
          {
            id: 'e1u7l5q2',
            type: 'fill',
            question: 'I can see with my ____.（眼睛）',
            answer: 'Eyes',
            hint: '看东西的器官',
            explanation: 'Eyes是眼睛，I can see with my eyes我用眼睛看'
          },
          {
            id: 'e1u7l5q3',
            type: 'choice',
            question: '头疼时应该怎么说？',
            options: ['My head hurts', 'My foot hurts', 'My hand hurts', 'I am happy'],
            answer: 'My head hurts',
            hint: '头疼怎么表达？',
            explanation: 'My head hurts表示我头疼'
          },
          {
            id: 'e1u7l5q4',
            type: 'drag',
            question: '把身体部位拖到正确位置：写字用手和____',
            answer: 'Fingers',
            hint: '手上的小指头',
            explanation: 'Fingers手指，写字需要用手指'
          },
          {
            id: 'e1u7l5q5',
            type: 'choice',
            question: '【期末真题】"I hear with my ears"是什么意思？',
            options: ['我用耳朵听', '我用耳朵看', '我用耳朵闻', '我用耳朵吃'],
            answer: '我用耳朵听',
            hint: 'hear是什么意思？',
            explanation: 'hear是听的意思，I hear with my ears我用耳朵听'
          },
          {
            id: 'e1u7l5q6',
            type: 'fill',
            question: 'I smell with my ____.（鼻子）',
            answer: 'Nose',
            hint: '闻味道的器官',
            explanation: 'Nose是鼻子，I smell with my nose我用鼻子闻'
          },
          {
            id: 'e1u7l5q7',
            type: 'choice',
            question: '做运动时，哪个身体部位最重要？',
            options: ['All of them are important', 'Only legs', 'Only arms', 'Only head'],
            answer: 'All of them are important',
            hint: '[身体词汇]（英语-Body Parts-第1课）每个部位都重要吗？',
            explanation: '每个身体部位都很重要，要爱护自己的身体！'
          },
        ]
      }]
  },
  {
    id: 'e1u8',
    title: 'Classroom',
    subtitle: '教室里的物品，学习好帮手',
    order: 8,
    lessons: [
      {
        id: 'e1u8l1',
        title: '文具',
        order: 1,
        teachingMethod: '实物展示教学法',
        iDo: '家长从文具盒里拿出文具，逐一展示说"Pen, pencil, ruler, eraser"',
        weDo: '亲子一起整理文具盒，边放边说文具的英语名称',
        youDo: '孩子独立拿出文具并用英语说出名称，模拟上课使用',
        parentTips: '每天整理书包时都可以练习文具的英语名称',
        funElement: '玩"文具商店"游戏，用英语买卖文具',
        gsapAnimations: ['GSAP:文具弹出-pencilPop', 'GSAP:文具盒打开-boxOpen'],
        images: ['IMG:文具盒插图', 'IMG:各种文具卡片'],
        content: [
          { type: 'text', content: '文具盒里有什么？Pen钢笔、Pencil铅笔、Ruler尺子、Eraser橡皮擦，这些都是学习的好帮手！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What\'s in your pencil case?\n小红: I have a pen, a pencil, a ruler, and an eraser.\n小明: I need a ruler. Can I borrow yours?\n小红: Sure! Here you are!', label: '文具对话', animationType: 'reveal' },
          { type: 'example', content: 'Pen — 钢笔\nPencil — 铅笔\nRuler — 尺子\nEraser — 橡皮擦\nPencil case — 文具盒\nBook — 书', label: '文具词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Pencil case是文具盒，case是"盒子"的意思。pencil + case = 铅笔的盒子 = 文具盒！', label: '构词提示', animationType: 'pulse' },
          { type: 'animation', content: '文具盒打开，文具依次弹出出现的动画', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u8l1q1',
            type: 'choice',
            question: '写字用的笔用英语怎么说？',
            options: ['Pen', 'Book', 'Bag', 'Desk'],
            answer: 'Pen',
            hint: '钢笔或圆珠笔',
            explanation: 'Pen是钢笔，Pencil是铅笔，都是写字的工具'
          },
          {
            id: 'e1u8l1q2',
            type: 'fill',
            question: 'I write with a ____.（铅笔）',
            answer: 'Pencil',
            hint: '可以擦掉的那种笔',
            explanation: 'Pencil是铅笔，写字画画常用的文具'
          },
          {
            id: 'e1u8l1q3',
            type: 'drag',
            question: '把文具拖到正确位置：擦掉错误用____',
            answer: 'Eraser',
            hint: '也叫橡皮',
            explanation: 'Eraser是橡皮擦，用来擦掉铅笔写的字'
          },
          {
            id: 'e1u8l1q4',
            type: 'choice',
            question: 'Pencil case是什么意思？',
            options: ['文具盒', '铅笔', '书包', '课桌'],
            answer: '文具盒',
            hint: 'pencil + case = ?',
            explanation: 'Pencil case是文具盒，pencil铅笔+case盒子'
          },
          {
            id: 'e1u8l1q5',
            type: 'fill',
            question: 'I write with a ____.（钢笔）',
            answer: 'Pen',
            hint: '不能擦掉的笔',
            explanation: 'Pen是钢笔，I write with a pen我用钢笔写字'
          },
          {
            id: 'e1u8l1q6',
            type: 'choice',
            question: '【期末真题】以下哪个是文具？',
            options: ['Eraser', 'Desk', 'Chair', 'Door'],
            answer: 'Eraser',
            hint: '哪个是学习用品？',
            explanation: 'Eraser橡皮擦是文具，Desk/Chair/Door是教室物品'
          },
          {
            id: 'e1u8l1q7',
            type: 'drag',
            question: '把文具拖到正确位置：画直线用____',
            answer: 'Ruler',
            hint: '[教室物品]（英语一年级-第8单元）',
            explanation: 'Ruler尺子用来画直线，回顾文具功能'
          }
        ]
      },
      {
        id: 'e1u8l2',
        title: '教室物品',
        order: 2,
        teachingMethod: '情景教学法',
        iDo: '家长模拟教室场景，指着物品说"Book, desk, chair, board"',
        weDo: '亲子一起在家里找类似的教室物品，说出英语名称',
        youDo: '孩子独立用英语说出教室里的物品名称',
        parentTips: '可以带孩子参观教室时实地练习',
        funElement: '玩"教室寻宝"游戏，找到物品说出英语名称得分',
        gsapAnimations: ['GSAP:教室场景展开-panorama', 'GSAP:物品标注浮现-labelFade'],
        images: ['IMG:教室场景插图', 'IMG:教室物品卡片'],
        content: [
          { type: 'text', content: '教室里有什么？Book书本、Desk课桌、Chair椅子、Board黑板，这些都是教室里常见的物品', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: What can you see in the classroom?\n小明: I can see a board!\n小红: I can see desks and chairs!\n老师: Very good!', label: '教室物品对话', animationType: 'reveal' },
          { type: 'example', content: 'Book — 书\nDesk — 课桌\nChair — 椅子\nBoard — 黑板/白板\nBag — 书包\nDoor — 门', label: '教室物品词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Desk是课桌，Table也是桌子，但Desk特指学习用的桌子！', label: '词汇辨析', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e1u8l2q1',
            type: 'choice',
            question: '我们坐在什么上面上课？',
            options: ['Chair', 'Desk', 'Board', 'Book'],
            answer: 'Chair',
            hint: '有靠背的座位',
            explanation: 'Chair是椅子，上课时坐在椅子上'
          },
          {
            id: 'e1u8l2q2',
            type: 'fill',
            question: 'The teacher writes on the ____.（黑板）',
            answer: 'Board',
            acceptableAnswers: ['Blackboard'],
            hint: '挂在墙上的大板子',
            explanation: 'Board是黑板/白板，老师在上面写字'
          },
          {
            id: 'e1u8l2q3',
            type: 'flashcard',
            question: '看课桌的图片，说出英语名称',
            answer: 'Desk',
            hint: '放书本的桌子',
            explanation: 'Desk是课桌，学生用来放书本和写字'
          },
          {
            id: 'e1u8l2q4',
            type: 'choice',
            question: 'Desk和Table的区别是什么？',
            options: ['Desk特指学习用的桌子', 'Desk更大', 'Table更贵', '没有区别'],
            answer: 'Desk特指学习用的桌子',
            hint: 'Desk和Table有什么不同？',
            explanation: 'Desk特指课桌/学习桌，Table是普通的桌子'
          },
          {
            id: 'e1u8l2q5',
            type: 'fill',
            question: 'Open the ____, please.（门）',
            answer: 'Door',
            hint: '进出教室要开什么？',
            explanation: 'Door是门，Open the door开门，是教室里的常见物品'
          },
          {
            id: 'e1u8l2q6',
            type: 'choice',
            question: '教室里学生坐在什么上面？',
            options: ['Chair', 'Board', 'Bag', 'Book'],
            answer: 'Chair',
            hint: '有靠背的座位',
            explanation: 'Chair是椅子，学生坐在椅子上上课'
          },
          {
            id: 'e1u8l2q7',
            type: 'choice',
            question: 'Board是什么意思？',
            options: ['黑板/白板', '书', '门', '椅子'],
            answer: '黑板/白板',
            hint: '[指令]（英语一年级-第8单元）',
            explanation: 'Board是黑板/白板，老师在Board上写字'
          }
        ]
      },
      {
        id: 'e1u8l3',
        title: '指令',
        order: 3,
        teachingMethod: 'TPR全身反应法',
        iDo: '家长发指令"Open your book! Close your book!"，同时做动作示范',
        weDo: '亲子一起听指令做动作，轮流当老师发指令',
        youDo: '孩子独立听指令做动作，并尝试自己发指令',
        parentTips: '指令练习可以培养孩子的英语听力和反应能力',
        funElement: '玩"快快慢慢"游戏，指令有时快有时慢，增加趣味',
        gsapAnimations: ['GSAP:书本翻页动画-pageFlip', 'GSAP:指令文字闪烁-blink'],
        images: ['IMG:课堂指令场景', 'IMG:Open/Close卡片'],
        content: [
          { type: 'text', content: 'Open打开、Close关闭、Raise举起，这些是课堂常用的指令动词。Open your book打开书，Close your book合上书', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: Open your book, please!\n同学们: (翻开书) OK!\n老师: Raise your hand!\n小明: (举手) Here!\n老师: Close your book. Thank you!', label: '课堂指令对话', animationType: 'reveal' },
          { type: 'example', content: 'Open your book — 打开你的书\nClose your book — 合上你的书\nRaise your hand — 举起你的手\nStand up — 起立\nSit down — 坐下', label: '课堂指令', animationType: 'bounce' },
          { type: 'tip', content: 'Open和Close是一对反义词，Open是打开，Close是关闭。记住一个就能记住另一个！', label: '记忆技巧', animationType: 'pulse' },
          { type: 'animation', content: '书本翻页打开和合上的动画，配合指令文字出现', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u8l3q1',
            type: 'choice',
            question: '"打开书"用英语怎么说？',
            options: ['Open your book', 'Close your book', 'Read your book', 'Write your book'],
            answer: 'Open your book',
            hint: 'Open是什么意思？',
            explanation: 'Open your book表示打开你的书，Open是打开'
          },
          {
            id: 'e1u8l3q2',
            type: 'fill',
            question: '____ your book.（合上书）',
            answer: 'Close',
            hint: '和Open相反的动作',
            explanation: 'Close your book表示合上你的书，Close是关闭/合上'
          },
          {
            id: 'e1u8l3q3',
            type: 'drag',
            question: '把指令拖到正确位置：举手 = ____ your hand',
            answer: 'Raise',
            hint: '把手举起来的动词',
            explanation: 'Raise your hand表示举手，Raise是举起'
          },
          {
            id: 'e1u8l3q4',
            type: 'choice',
            question: 'Open和Close是什么关系？',
            options: ['反义词', '同义词', '无关词', '近义词'],
            answer: '反义词',
            hint: '打开和关闭是什么关系？',
            explanation: 'Open打开和Close关闭是一对反义词'
          },
          {
            id: 'e1u8l3q5',
            type: 'fill',
            question: '____ your hand before you speak.（举起）',
            answer: 'Raise',
            hint: '发言前要做什么？',
            explanation: 'Raise your hand举手，发言前要先举手'
          },
          {
            id: 'e1u8l3q6',
            type: 'choice',
            question: '老师想让同学们打开课本，应该说什么？',
            options: ['Open your books', 'Close your books', 'Raise your hands', 'Stand up'],
            answer: 'Open your books',
            hint: '打开课本的指令',
            explanation: 'Open your books表示打开你们的书，是课堂指令'
          },
          {
            id: 'e1u8l3q7',
            type: 'drag',
            question: '把指令拖到正确位置：合上书=____ your book',
            answer: 'Close',
            hint: '[文具]（英语一年级-第8单元）',
            explanation: 'Close your book合上书，回顾课堂指令'
          }
        ]
      }
    ,
      {
        id: 'e1u8l4',
        title: 'Classroom Review',
        order: 4,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '回顾时不要只记单词，要回忆情境和用法',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Classroom单元！我们学了文具Pen/Pencil/Ruler/Eraser、教室物品Book/Desk/Chair/Board、指令Open/Close/Raise`, animationType: 'reveal' },
          { type: 'formula', content: `课堂指令公式：
Open your book — 打开书
Close your book — 合上书
Raise your hand — 举手
Stand up — 起立
Sit down — 坐下`, animationType: 'typewriter', label: '课堂指令公式' },
          { type: 'animation', content: `文具盒打开回顾，书本翻页动画重现`, animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e1u8l4q1',
            type: 'choice',
            question: '擦掉铅笔字用什么？',
            options: ['Eraser', 'Ruler', 'Pen', 'Book'],
            answer: 'Eraser',
            hint: '橡皮擦',
            explanation: 'Eraser是橡皮擦，用来擦掉铅笔写的字'
          },
          {
            id: 'e1u8l4q2',
            type: 'fill',
            question: 'I sit on a ____ in the classroom.（椅子）',
            answer: 'Chair',
            hint: '上课坐的',
            explanation: 'Chair是椅子，I sit on a chair我坐在椅子上'
          },
          {
            id: 'e1u8l4q3',
            type: 'choice',
            question: 'Open和Close是什么关系？',
            options: ['反义词', '同义词', '近义词', '无关'],
            answer: '反义词',
            hint: '打开和关闭',
            explanation: 'Open打开和Close关闭是一对反义词'
          },
          {
            id: 'e1u8l4q4',
            type: 'drag',
            question: '把文具拖到正确位置：画直线用____',
            answer: 'Ruler',
            hint: '尺子',
            explanation: 'Ruler尺子用来画直线'
          },
          {
            id: 'e1u8l4q5',
            type: 'choice',
            question: '【期末真题】老师想让同学们举手，应该说什么？',
            options: ['Raise your hand', 'Open your book', 'Close your book', 'Sit down'],
            answer: 'Raise your hand',
            hint: '举手的指令',
            explanation: 'Raise your hand表示举手，是课堂常用指令'
          },
          {
            id: 'e1u8l4q6',
            type: 'fill',
            question: 'Pencil + case = ____ case（文具盒）',
            answer: 'Pencil',
            hint: '铅笔+盒子=？',
            explanation: 'Pencil case是文具盒，pencil铅笔+case盒子'
          },
          {
            id: 'e1u8l4q7',
            type: 'choice',
            question: '以下哪个不是文具？',
            options: ['Desk', 'Pen', 'Pencil', 'Eraser'],
            answer: 'Desk',
            hint: '[学校词汇]（英语-School Things-第1课）哪个不是学习用品？',
            explanation: 'Desk课桌是教室家具，不是文具'
          },
        ]
      },
      {
        id: 'e1u8l5',
        title: 'Classroom in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `教室是我们学习的地方！每天都要用到文具、坐在椅子上、听老师的指令，用英语说出教室里的一切吧！`, animationType: 'reveal' },
          { type: 'example', content: `场景1：整理书包 → I have a pen, a pencil, and a ruler.
场景2：上课 → Open your book! Raise your hand!
场景3：借文具 → Can I borrow your eraser?`, animationType: 'bounce', label: '教室英语在生活中的应用' },
          { type: 'tip', content: `每天整理书包时用英语说出每件文具的名称！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e1u8l5q1',
            type: 'choice',
            question: '上学前整理书包，需要装什么？',
            options: ['Books and pencils', 'Toys and candy', 'TV and games', 'Pillow and blanket'],
            answer: 'Books and pencils',
            hint: '书包里装学习用品',
            explanation: 'Books书本和pencils铅笔是书包里的学习用品'
          },
          {
            id: 'e1u8l5q2',
            type: 'fill',
            question: 'I write with a ____ on the board.（粉笔）',
            answer: 'chalk',
            hint: '在黑板上写字的',
            explanation: 'chalk是粉笔，老师在黑板上用粉笔写字'
          },
          {
            id: 'e1u8l5q3',
            type: 'choice',
            question: '同学忘了带橡皮，你可以怎么说？',
            options: ['Can I borrow your eraser?', 'Give me your eraser!', 'I don\'t have eraser.', 'Eraser is bad.'],
            answer: 'Can I borrow your eraser?',
            hint: '礼貌地借东西',
            explanation: 'Can I borrow your eraser?我可以借你的橡皮吗？是礼貌的借物方式'
          },
          {
            id: 'e1u8l5q4',
            type: 'drag',
            question: '把物品拖到正确位置：上课看的是____',
            answer: 'Book',
            hint: '课本',
            explanation: 'Book是书，上课时打开书学习'
          },
          {
            id: 'e1u8l5q5',
            type: 'choice',
            question: '【期末真题】"Close your book"是什么意思？',
            options: ['合上你的书', '打开你的书', '举起你的书', '扔掉你的书'],
            answer: '合上你的书',
            hint: 'Close是什么意思？',
            explanation: 'Close your book表示合上你的书，Close是关闭/合上'
          },
          {
            id: 'e1u8l5q6',
            type: 'fill',
            question: 'I keep my pens in my ____ case.（文具盒）',
            answer: 'Pencil',
            hint: 'pencil + case',
            explanation: 'Pencil case是文具盒，I keep my pens in my pencil case我把笔放在文具盒里'
          },
          {
            id: 'e1u8l5q7',
            type: 'choice',
            question: '爱护教室环境，我们应该怎么做？',
            options: ['Keep the classroom clean', 'Throw trash on the floor', 'Write on the desk', 'Run in the classroom'],
            answer: 'Keep the classroom clean',
            hint: '[教室词汇]（英语一年级-第8单元）怎样爱护教室？',
            explanation: 'Keep the classroom clean保持教室干净，是爱护教室的好习惯'
          },
        ]
      }]
  }
]
