import type { Unit } from '@/types'

export const englishGrade5: Unit[] = [
  // ==================== 第一单元：My New Teachers ====================
  {
    id: 'e5u1',
    title: 'My New Teachers',
    subtitle: '描述老师性格与外貌，Who\'s your...?句型',
    order: 1,
    lessons: [
      {
        id: 'e5u1l1',
        title: '性格词汇：kind/funny/strict/quiet',
        order: 1,
        teachingMethod: 'TPR全身反应法+表情演绎',
        learningObjective: '我能用kind/funny/strict/quiet描述老师性格',
        successCriteria: '①能说出4个性格形容词 ②能用He/She is...描述老师性格',
        iDo: '家长用表情和动作演绎性格词汇：kind（微笑）、funny（做鬼脸）、strict（严肃表情）、quiet（竖手指）',
        weDo: '亲子一起做表情演绎游戏，家长说单词孩子做表情，再互换角色，比比谁演得最像',
        youDo: '孩子独立看性格词汇卡，读出单词并做出对应表情，用词汇描述自己的一位老师',
        parentTips: '【家长预习】本课核心：性格词汇kind（和蔼）、funny（有趣）、strict（严格）、quiet（安静），句型He/She is kind.。\n共学四步：\n①对话出题：家长做微笑表情问What is Mr. Li like?并说He is kind.。\n②孩子应答：孩子应说He is kind.或He is funny.。\n③答错引导：若孩子说不出，家长当同学一起演！扫描课时发音动画听发音；让孩子点读课件表情卡；家长做夸张表情配合英语，用TPR法帮孩子记。\n④快速检测：1.孩子说出4个性格词；2.用He/She is...造句；3.描述一位老师的性格。',
        funElement: '玩"表情猜猜猜"游戏，孩子做表情，家长猜对应的性格词汇，再互换角色',
        gsapAnimations: ['GSAP:性格表情卡翻转-cardReveal', 'GSAP:单词逐个弹出-stagger', 'GSAP:表情图标缩放出现-starFlyIn'],
        images: ['IMG:性格表情图', 'IMG:kind/funny/strict/quiet词汇卡'],
        content: [
          { type: 'text', content: 'New term begins! We have new teachers. Today let\'s learn words to describe teachers\' personality: kind, funny, strict, quiet.', animationType: 'reveal' },
          { type: 'example', content: 'kind — 和蔼的、善良的\nfunny — 有趣的、好笑的\nstrict — 严格的\nquiet — 安静的', label: '性格词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Who is your new teacher?\nAmy: Mr. Li. He is very kind.\nTom: Is he funny?\nAmy: Yes, he is very funny. We all like him.', label: '谈论老师性格', animationType: 'timeline' },
          { type: 'tip', content: '这些词都是形容词，用来描述人的性格特点。放在be动词后面：He is kind. She is funny. 也可以放在名词前面：a kind teacher.', label: '形容词用法', animationType: 'pulse' },
          { type: 'example', content: 'Mr. Li is kind. 李老师很和蔼。\nMiss Wang is funny. 王老师很有趣。\nMr. Zhang is strict. 张老师很严格。\nMiss Chen is quiet. 陈老师很安静。', label: '描述老师性格', animationType: 'sequence' },
          { type: 'tip', content: 'strict不一定是坏事，严格的老师能帮助我们养成好习惯。kind和nice意思相近，都表示友好善良。', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '性格表情卡翻转动画，翻转后揭示性格词汇和对应的表情', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Personality Words', cardRevealConfig: { cards: [ { front: 'kind', back: '😊', ttsText: 'kind, 和蔼的' }, { front: 'funny', back: '😄', ttsText: 'funny, 有趣的' }, { front: 'strict', back: '😐', ttsText: 'strict, 严格的' }, { front: 'quiet', back: '🤫', ttsText: 'quiet, 安静的' } ] }, ttsNarration: '性格词汇：和蔼的、有趣的、严格的、安静的' } },
          {
            type: 'tip',
            content: '后缀-y记忆法：名词+y可以变成形容词！sun（太阳）+y=sunny（晴朗的），fun（乐趣）+y=funny（有趣的），rain（雨）+y=rainy（下雨的）。记住fun就记住了funny！同理quiet加ly变成quietly（安静地），ly把形容词变成副词。',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u1l1q1',
            type: 'choice',
            question: 'Which word means "kind and friendly to others"?',
            options: ['kind', 'strict', 'quiet', 'tall'],
            answer: 'kind',
            hint: '表示对人和善、友好的词',
            explanation: 'kind是和蔼的、善良的意思，形容对人友善友好的老师'
          },
          {
            id: 'e5u1l1q2',
            type: 'choice',
            question: 'Mr. Zhang never smiles and has many rules. He is ____.',
            options: ['funny', 'strict', 'quiet', 'kind'],
            answer: 'strict',
            hint: '规则很多、不苟言笑的老师是怎样的？',
            explanation: 'strict是严格的意思，规则多、要求高的老师就是strict'
          },
          {
            id: 'e5u1l1q3',
            type: 'fill',
            question: 'Miss Chen doesn\'t talk much. She is very ____.',
            answer: 'quiet',
            acceptableAnswers: ['Quiet'],
            hint: '不喜欢说话、很安静的老师用什么词？',
            explanation: 'quiet是安静的意思，不太说话的老师可以用quiet来形容'
          },
          {
            id: 'e5u1l1q4',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['He is kind.', 'He kind is.', 'Is he kind.', 'Kind he is.'],
            answer: 'He is kind.',
            hint: '形容词放在be动词后面',
            explanation: '形容词描述性格时放在be动词后面：He is kind. 主语+be+形容词'
          },
          {
            id: 'e5u1l1q5',
            type: 'choice',
            question: 'Which word is NOT a personality word?',
            options: ['tall', 'kind', 'funny', 'strict'],
            answer: 'tall',
            hint: '【期末真题】哪个词描述的是外貌而不是性格？',
            explanation: 'tall是高的，描述外貌；kind/funny/strict都是描述性格的词'
          },
          {
            id: 'e5u1l1q6',
            type: 'fill',
            question: 'My teacher is very ____. She always tells jokes. (有趣的)',
            answer: 'funny',
            acceptableAnswers: ['Funny'],
            hint: '总是讲笑话的老师是什么性格？',
            explanation: 'funny是有趣的意思，总讲笑话的老师可以用funny来形容'
          },
          {
            id: 'e5u1l1q7',
            type: 'fill',
            question: 'When you meet your new teacher, you should say "____!" (打招呼)',
            answer: 'Hello',
            acceptableAnswers: ['Hi'],
            hint: '[打招呼用语]（英语一年级-第1单元）',
            explanation: '见到新老师要打招呼说Hello，这是基本的礼貌用语'
          }
        ]
      },
      {
        id: 'e5u1l2',
        title: 'Who is your... teacher? 句型',
        order: 2,
        teachingMethod: '情境对话法',
        learningObjective: '我能用Who is your...teacher?询问并回答各科老师',
        successCriteria: '①能用Who is your...teacher?提问 ②能回答老师姓名',
        iDo: '家长示范问答："Who is your maths teacher?" "Mr. Li." 配合指认动作',
        weDo: '亲子一起做问答练习，家长问科目老师，孩子回答老师姓名，互换角色',
        youDo: '孩子独立用Who is your...teacher?句型询问家人或玩偶的各科老师',
        parentTips: '【家长预习】本课核心：句型Who is your maths teacher?（你的数学老师是谁），回答Mr. Li.。\n共学四步：\n①对话出题：家长指课程表问Who is your English teacher?。\n②孩子应答：孩子应说Miss Wang.。\n③答错引导：若孩子说不出，家长当同学一起查！扫描课时发音动画听发音；让孩子点读课件对话卡；家长用课程表边指边问。\n④快速检测：1.孩子用Who is your...?提问；2.回答3科老师；3.问答互换。',
        funElement: '玩"老师接龙"游戏，一人问Who is your...teacher?另一人回答，越快越好',
        gsapAnimations: ['GSAP:问答对话展开-timeline', 'GSAP:对话气泡弹出-stagger', 'GSAP:问答配对高亮-highlight'],
        images: ['IMG:师生对话场景', 'IMG:科目老师配对图'],
        content: [
          { type: 'text', content: 'Who is your...teacher? 用来询问某科的老师是谁。回答时用Mr./Miss/Mrs. + 姓氏。', animationType: 'reveal' },
          { type: 'example', content: 'Who is your maths teacher? — 你的数学老师是谁？\nMr. Li. — 李老师。\nWho is your English teacher? — 你的英语老师是谁？\nMiss Wang. — 王老师。', label: '问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Who is your Chinese teacher?\nAmy: Miss Chen.\nTom: Is she kind?\nAmy: Yes, she is very kind. She helps us a lot.', label: '询问老师对话', animationType: 'timeline' },
          { type: 'tip', content: 'Mr.用于男老师，Miss用于未婚女老师，Mrs.用于已婚女老师。后面跟姓氏，不跟全名。', label: '称呼用法', animationType: 'pulse' },
          { type: 'example', content: 'maths — 数学\nEnglish — 英语\nChinese — 语文\nPE — 体育\nart — 美术\nmusic — 音乐', label: '科目词汇', animationType: 'sequence' },
          { type: 'tip', content: 'Who is...?回答时不用He/She is...，而是直接说Mr./Miss + 姓氏，这是英语的习惯表达。', label: '回答技巧', animationType: 'pulse' },
          { type: 'animation', content: '问答对话逐步展开动画，配合时间线展示问答过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Who is your teacher?', timelineConfig: { steps: [ { text: 'Who is your maths teacher?', ttsNarration: 'Who is your maths teacher?' }, { text: 'Mr. Li.', ttsNarration: 'Mr. Li.' }, { text: 'Who is your English teacher?', ttsNarration: 'Who is your English teacher?' }, { text: 'Miss Wang.', ttsNarration: 'Miss Wang.' } ] }, ttsNarration: '询问老师：你的数学老师是谁？李老师。你的英语老师是谁？王老师。' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u1l2q1',
            type: 'choice',
            question: 'How do you ask about someone\'s English teacher?',
            options: ['Who is your English teacher?', 'What is your English teacher?', 'Where is your English teacher?', 'How is your English teacher?'],
            answer: 'Who is your English teacher?',
            hint: '询问"谁"用哪个疑问词？',
            explanation: '询问某科老师是谁，用Who is your...teacher?句型'
          },
          {
            id: 'e5u1l2q2',
            type: 'fill',
            question: '— Who is your maths teacher? — ____ Li. (李老师)',
            answer: 'Mr.',
            acceptableAnswers: ['Mr', 'Mr. '],
            hint: '男老师用什么称呼？',
            explanation: '男老师用Mr. + 姓氏，Mr. Li表示李老师（男）'
          },
          {
            id: 'e5u1l2q3',
            type: 'choice',
            question: 'Your friend asks "Who is your PE teacher?" You should answer ____.',
            options: ['Mr. Zhang', 'He is tall', 'Yes, he is', 'I like PE'],
            answer: 'Mr. Zhang',
            hint: '回答Who is...?应该直接说什么？',
            explanation: '回答Who is your...teacher?时直接说称呼+姓氏，如Mr. Zhang'
          },
          {
            id: 'e5u1l2q4',
            type: 'fill',
            question: '____ is your music teacher? (谁)',
            answer: 'Who',
            hint: '询问"谁"的疑问词',
            explanation: 'Who意为"谁"，用于询问人的身份。Who is your music teacher?你的音乐老师是谁？'
          },
          {
            id: 'e5u1l2q5',
            type: 'choice',
            question: 'Which is the correct way to call a female teacher named Wang?',
            options: ['Miss Wang', 'Mr. Wang', 'Miss Wang Teacher', 'Wang Miss'],
            answer: 'Miss Wang',
            hint: '未婚女老师的称呼放在姓氏前面',
            explanation: '未婚女老师用Miss + 姓氏，Miss Wang表示王老师（女）'
          },
          {
            id: 'e5u1l2q6',
            type: 'fill',
            question: '— Who is your Chinese teacher? — Miss ____. (陈老师)',
            answer: 'Chen',
            acceptableAnswers: ['chen'],
            hint: '回答时说Miss加上老师的姓氏',
            explanation: 'Miss Chen表示陈老师（女），Miss后跟姓氏'
          },
          {
            id: 'e5u1l2q7',
            type: 'choice',
            question: 'When you meet a new teacher, what should you say first?',
            options: ['Hello! Nice to meet you!', 'Who are you?', 'Goodbye!', 'I am fine.'],
            answer: 'Hello! Nice to meet you!',
            hint: '[打招呼用语]（英语一年级-第1单元）',
            explanation: '见到新老师应先打招呼说Hello! Nice to meet you!这是基本的礼貌'
          }
        ]
      },
      {
        id: 'e5u1l3',
        title: 'What\'s he/she like? 描述外貌',
        order: 3,
        teachingMethod: '情境式教学法',
        learningObjective: '我能用What\'s he/she like?及外貌词描述老师',
        successCriteria: '①能用What\'s he/she like?提问 ②能用tall/short等描述外貌',
        iDo: '家长示范描述老师："He is tall and kind. She is short and funny." 配合手势比划高矮',
        weDo: '亲子一起描述老师，家长说一句孩子跟一句，然后互换角色描述不同的老师',
        youDo: '孩子独立描述自己的一位老师，用至少两个形容词描述外貌和性格',
        parentTips: '【家长预习】本课核心：句型What\'s he/she like?（他/她长什么样），回答He is tall and kind.。\n共学四步：\n①对话出题：家长问What\'s your maths teacher like?并说He is tall.。\n②孩子应答：孩子应说He is tall and kind.。\n③答错引导：若孩子说不出，家长当同学一起描述！扫描课时发音动画听发音；让孩子点读课件词汇卡；家长用手势比划高矮边比边说。\n④快速检测：1.孩子用What\'s...like?提问；2.用2个词描述老师；3.描述一位老师外貌。',
        funElement: '玩"老师画像"游戏，一人描述老师外貌，另一人画出来，看画得像不像',
        gsapAnimations: ['GSAP:老师形象逐步构建-sceneBuild', 'GSAP:外貌词汇弹出-stagger', 'GSAP:描述高亮-highlight'],
        images: ['IMG:老师形象图', 'IMG:外貌特征对比图'],
        content: [
          { type: 'text', content: 'What\'s he/she like? 用来询问一个人的外貌或性格特点。回答时用He/She is + 形容词。', animationType: 'reveal' },
          { type: 'example', content: 'tall — 高的\nshort — 矮的\nthin — 瘦的\nstrong — 强壮的\nyoung — 年轻的\nold — 年老的', label: '外貌词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s Mr. Li like?\nAmy: He is tall and strong. He is very kind, too.\nTom: What about Miss Wang?\nAmy: She is short and thin. She is very funny.', label: '描述老师对话', animationType: 'timeline' },
          { type: 'tip', content: 'What\'s...like?是固定句型，用来问外貌或性格。不要说What is...?而要说What\'s...like?', label: '句型辨析', animationType: 'pulse' },
          { type: 'example', content: 'He is tall and kind. 他又高又和蔼。\nShe is short and funny. 她又矮又有趣。\nHe is young and strict. 他又年轻又严格。\nShe is old and quiet. 她又年老又安静。', label: '综合描述例句', animationType: 'sequence' },
          { type: 'tip', content: '描述人时可以用and连接多个形容词：He is tall and strong and kind. 但通常用两个最好。', label: '连词用法', animationType: 'pulse' },
          { type: 'animation', content: '老师形象逐步构建动画，先出现轮廓，再添加外貌特征和性格标签', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'Teacher Description', sceneBuildConfig: { sceneName: 'Teacher', elements: [ { id: 'el-0', text: 'tall', emoji: '🧍', delay: 0, animation: 'bounceIn', ttsText: 'tall, 高的' }, { id: 'el-1', text: 'strong', emoji: '💪', delay: 0.4, animation: 'popIn', ttsText: 'strong, 强壮的' }, { id: 'el-2', text: 'kind', emoji: '😊', delay: 0.8, animation: 'scaleIn', ttsText: 'kind, 和蔼的' }, { id: 'el-3', text: 'young', emoji: '👨‍🏫', delay: 1.2, animation: 'fadeIn', ttsText: 'young, 年轻的' } ] }, ttsNarration: '描述老师：高高的、强壮的、和蔼的、年轻的' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u1l3q1',
            type: 'choice',
            question: 'How do you ask about someone\'s appearance?',
            options: ['What\'s he like?', 'What is he?', 'How he is?', 'Where is he?'],
            answer: 'What\'s he like?',
            hint: '询问外貌/性格用哪个固定句型？',
            explanation: 'What\'s he/she like?是固定句型，用来询问外貌或性格特点'
          },
          {
            id: 'e5u1l3q2',
            type: 'fill',
            question: 'She is very ____. She is 175cm. (高的)',
            answer: 'tall',
            hint: '175cm的人怎么形容？',
            explanation: 'tall是高的，用来形容身高很高的人'
          },
          {
            id: 'e5u1l3q3',
            type: 'choice',
            question: 'Mr. Li is 25 years old. He is ____.',
            options: ['young', 'old', 'tall', 'short'],
            answer: 'young',
            hint: '25岁是很年轻的',
            explanation: 'young是年轻的意思，25岁的老师可以用young来形容'
          },
          {
            id: 'e5u1l3q4',
            type: 'fill',
            question: '— What\'s Miss Wang ____? — She is short and funny. (像...一样)',
            answer: 'like',
            hint: 'What\'s...____?是固定搭配',
            explanation: 'What\'s...like?是固定句型，like在这里是介词，意为"像...一样"'
          },
          {
            id: 'e5u1l3q5',
            type: 'choice',
            question: 'Which sentence describes BOTH appearance and personality?',
            options: ['He is tall and kind.', 'He is tall.', 'He is kind.', 'He is a teacher.'],
            answer: 'He is tall and kind.',
            hint: '哪个句子既有外貌词又有性格词？',
            explanation: 'tall是外貌词，kind是性格词，He is tall and kind.同时描述了外貌和性格'
          },
          {
            id: 'e5u1l3q6',
            type: 'fill',
            question: 'My PE teacher is very ____. He can carry heavy things. (强壮的)',
            answer: 'strong',
            hint: '能搬重物的老师用什么词？',
            explanation: 'strong是强壮的意思，力气大、肌肉多的老师可以用strong来形容'
          },
          {
            id: 'e5u1l3q7',
            type: 'choice',
            question: 'Which word can describe a teacher\'s personality?',
            options: ['kind', 'tall', 'short', 'young'],
            answer: 'kind',
            hint: '[性格词汇]（英语五年级-第1单元）',
            explanation: 'kind是性格词（和蔼的），tall/short/young都是外貌词'
          }
        ]
      },
      {
        id: 'e5u1l4',
        title: 'My Favourite Teacher 综合描述',
        order: 4,
        teachingMethod: '项目式学习：制作老师卡',
        learningObjective: '我能综合运用性格、外貌词汇制作老师卡并描述',
        successCriteria: '①能写出老师的科目+姓名+外貌+性格 ②能用完整句子描述老师',
        iDo: '家长示范制作老师卡：科目+姓名+外貌+性格，一边写一边用英语描述',
        weDo: '亲子一起制作老师卡，共同讨论要写什么内容，用英语描述老师',
        youDo: '孩子独立制作一张老师卡，用英语写出老师的科目、姓名、外貌和性格',
        parentTips: '【家长预习】本课核心：综合描述老师，科目+姓名+外貌+性格，如My maths teacher is Mr. Li. He is tall and kind.。\n共学四步：\n①对话出题：家长说介绍你最喜欢的老师。并示范My English teacher is Miss Wang. She is short and funny.。\n②孩子应答：孩子应说My maths teacher is Mr. Li. He is tall and kind.。\n③答错引导：若孩子说不出，家长当同学一起做！扫描课时发音动画复习；让孩子点读课件句型卡；家长当同学一起做老师卡，互相介绍。\n④快速检测：1.孩子写老师卡4项信息；2.用完整句子描述；3.介绍2位老师。',
        funElement: '制作"老师名片"卡片，配上简笔画和英语描述，展示给家人看',
        gsapAnimations: ['GSAP:老师卡信息填入-timeline', 'GSAP:卡片元素逐步出现-stagger', 'GSAP:完成撒花-confetti'],
        images: ['IMG:老师介绍卡模板', 'IMG:老师名片成品图'],
        content: [
          { type: 'text', content: 'Let\'s make a teacher card! Write the subject, name, appearance and personality of your favourite teacher.', animationType: 'reveal' },
          { type: 'example', content: 'Teacher Card:\nSubject: Maths\nName: Mr. Li\nAppearance: tall and strong\nPersonality: kind and strict\nSentence: Mr. Li is my maths teacher. He is tall and strong. He is kind but strict.', label: '老师卡模板', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Who is your favourite teacher?\nAmy: My favourite teacher is Miss Wang.\nTom: What\'s she like?\nAmy: She is short and thin. She is very funny. She tells great stories.', label: '介绍喜欢的老师', animationType: 'timeline' },
          { type: 'tip', content: '描述老师时可以按顺序：先说科目和姓名，再说外貌，最后说性格。用but连接相反的特点：kind but strict.', label: '写作技巧', animationType: 'pulse' },
          { type: 'example', content: 'My favourite teacher is Mr. Li.\nHe is my maths teacher.\nHe is tall and strong.\nHe is kind but strict.\nI like him very much.', label: '完整描述范文', animationType: 'sequence' },
          { type: 'tip', content: 'but表示转折，连接两个不同甚至相反的特点：He is strict but kind. 他严格但和蔼。', label: '连词but用法', animationType: 'pulse' },
          { type: 'animation', content: '老师卡信息逐步填入动画，配合时间线展示卡片完成过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'My Teacher Card', timelineConfig: { steps: [ { text: 'Subject: Maths', ttsNarration: 'Subject: Maths' }, { text: 'Name: Mr. Li', ttsNarration: 'Name: Mr. Li' }, { text: 'Appearance: tall and strong', ttsNarration: 'Appearance: tall and strong' }, { text: 'Personality: kind and strict', ttsNarration: 'Personality: kind and strict' } ] }, ttsNarration: '老师卡：科目数学、姓名李老师、外貌高而强壮、性格和蔼而严格' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u1l4q1',
            type: 'choice',
            question: 'Which is a complete teacher card description?',
            options: ['Mr. Li is my maths teacher. He is tall and kind.', 'Mr. Li tall kind.', 'Maths Mr. Li.', 'He teacher maths tall.'],
            answer: 'Mr. Li is my maths teacher. He is tall and kind.',
            hint: '完整的描述应该有主语、谓语和形容词',
            explanation: '完整的老师描述包括：姓名+科目+外貌+性格，用完整句子表达'
          },
          {
            id: 'e5u1l4q2',
            type: 'fill',
            question: 'My favourite ____ is Miss Wang. She teaches English. (老师)',
            answer: 'teacher',
            hint: '最喜欢的人是什么身份？',
            explanation: 'teacher是老师，my favourite teacher表示我最喜欢的老师'
          },
          {
            id: 'e5u1l4q3',
            type: 'choice',
            question: 'He is strict ____ kind. (用连词连接相反特点)',
            options: ['but', 'and', 'or', 'with'],
            answer: 'but',
            hint: '严格和和蔼是不同特点，用什么连词？',
            explanation: 'but表示转折，连接不同或相反的特点：He is strict but kind.他严格但和蔼'
          },
          {
            id: 'e5u1l4q4',
            type: 'fill',
            question: 'Miss Wang is short ____ thin. (又矮又瘦，用并列连词)',
            answer: 'and',
            hint: '两个并列的特点用什么连词？',
            explanation: 'and连接并列的特点：She is short and thin.她又矮又瘦'
          },
          {
            id: 'e5u1l4q5',
            type: 'choice',
            question: 'Which sentence uses "but" correctly?',
            options: ['He is strict but kind.', 'He is but strict kind.', 'But he is strict kind.', 'He kind but is strict.'],
            answer: 'He is strict but kind.',
            hint: 'but放在两个形容词之间',
            explanation: 'but放在两个形容词之间连接转折关系：He is strict but kind.'
          },
          {
            id: 'e5u1l4q6',
            type: 'fill',
            question: 'I like ____ very much. (他，宾格)',
            answer: 'him',
            hint: 'like后面接人称代词宾格',
            explanation: 'like后面接宾格，he的宾格是him。I like him very much.我非常喜欢他'
          },
          {
            id: 'e5u1l4q7',
            type: 'fill',
            question: '— What\'s your English teacher like? — She is ____ and kind. (高的)',
            answer: 'tall',
            hint: '[外貌描述]（英语五年级-第1单元）',
            explanation: 'tall是高的，用来描述老师的外貌特征'
          }
        ]
      },
      {
        id: 'e5u1l5',
        title: '第一单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能通过第一单元综合检测，巩固性格、外貌词汇和描述句型',
        successCriteria: '①能完成词汇题 ②能完成句型和描述题',
        iDo: '家长示范检测流程，讲解题型和要求，示范答题方法',
        weDo: '亲子一起练习几道样题，家长引导孩子分析题目',
        youDo: '孩子独立完成单元检测，包括词汇、句型和描述题',
        parentTips: '【家长预习】本课核心：第一单元综合检测，包括性格词汇、外貌词汇、Who/What句型、综合描述。\n共学四步：\n①对话出题：家长说我们来做第一单元检测，先复习一下。。\n②孩子应答：孩子应说kind, funny, strict, quiet!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子完成单元检测；2.正确率达80%；3.错题订正。',
        funElement: '通关后获得Teachers达人徽章，庆祝学习成果',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:答题反馈-stagger', 'GSAP:徽章飞入-starFlyIn'],
        images: ['IMG:Teachers达人徽章', 'IMG:综合检测场景图'],
        content: [
          { type: 'text', content: 'Time for the Unit 1 test! Let\'s review what we learned: personality words, Who is your...teacher?, What\'s he/she like?, and describing teachers.', animationType: 'reveal' },
          { type: 'example', content: 'Review List:\n1. Personality: kind, funny, strict, quiet\n2. Question: Who is your...teacher? / What\'s he/she like?\n3. Description: He/She is + adjective\n4. Connection: and (并列), but (转折)', label: '单元复习要点', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Who is your new maths teacher?\nAmy: Mr. Li.\nTom: What\'s he like?\nAmy: He is tall and strong. He is kind but strict.\nTom: Sounds great! I want to meet him.', label: '综合对话复习', animationType: 'timeline' },
          { type: 'tip', content: '检测重点：1.能认读性格和外貌词汇 2.能用Who/What句型问答 3.能综合描述一位老师', label: '检测要点', animationType: 'pulse' },
          { type: 'example', content: 'Key Sentences:\nWho is your English teacher?\nMiss Wang.\nWhat\'s she like?\nShe is short and funny. She is very kind.', label: '核心句型复习', animationType: 'sequence' },
          { type: 'tip', content: '答题技巧：选择题先看选项再读题，填空题注意首字母大小写，描述题用完整句子。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '检测通关撒花动画，配合徽章出现', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Teachers Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Test complete' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Badge', back: '🏅', ttsText: 'Teachers badge earned' } ] }, ttsNarration: '检测完成，恭喜通关，获得Teachers达人徽章' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u1l5q1',
            type: 'choice',
            question: 'Which word describes a teacher who makes you laugh?',
            options: ['funny', 'strict', 'quiet', 'tall'],
            answer: 'funny',
            hint: '让人笑的老师是什么性格？',
            explanation: 'funny是有趣的意思，让人发笑的老师就是funny'
          },
          {
            id: 'e5u1l5q2',
            type: 'fill',
            question: '— Who is your Chinese teacher? — ____ Chen. (陈老师，女)',
            answer: 'Miss',
            hint: '女老师用什么称呼？',
            explanation: '未婚女老师用Miss + 姓氏，Miss Chen表示陈老师（女）'
          },
          {
            id: 'e5u1l5q3',
            type: 'choice',
            question: 'What\'s your art teacher ____? — She is young and kind.',
            options: ['like', 'likes', 'liking', 'liked'],
            answer: 'like',
            hint: 'What\'s...____?是固定搭配',
            explanation: 'What\'s...like?是固定句型，like是介词，不用变形'
          },
          {
            id: 'e5u1l5q4',
            type: 'fill',
            question: 'Mr. Zhang is strict ____ kind. We all like him. (用转折连词)',
            answer: 'but',
            hint: '严格和和蔼是不同特点',
            explanation: 'but表示转折，连接不同特点：strict but kind严格但和蔼'
          },
          {
            id: 'e5u1l5q5',
            type: 'choice',
            question: 'Choose the correct description for a tall, kind, male teacher named Li.',
            options: ['Mr. Li is tall and kind.', 'Miss Li is tall and kind.', 'Mr. Li is short and strict.', 'Li Mr. is tall kind.'],
            answer: 'Mr. Li is tall and kind.',
            hint: '注意称呼、外貌和性格的搭配',
            explanation: '男老师用Mr. Li，高而和蔼用tall and kind，正确的完整描述是Mr. Li is tall and kind.'
          },
          {
            id: 'e5u1l5q6',
            type: 'fill',
            question: 'My maths teacher is 60 years old. He is ____. (年老的)',
            answer: 'old',
            hint: '60岁的老师怎么形容？',
            explanation: 'old是年老的意思，60岁的老师可以用old来形容'
          },
          {
            id: 'e5u1l5q7',
            type: 'choice',
            question: 'Which question asks about a teacher\'s personality?',
            options: ['What\'s he like?', 'Who is he?', 'Where is he?', 'How old is he?'],
            answer: 'What\'s he like?',
            hint: '[描述句型]（英语五年级-第1单元）',
            explanation: 'What\'s he like?用来询问外貌或性格特点，其他选项分别问身份、位置和年龄'
          }
        ]
      }
    ]
  },
  // ==================== 第二单元：My Days of Week ====================
  {
    id: 'e5u2',
    title: 'My Days of Week',
    subtitle: '星期词汇与课程，What do you have on...?句型',
    order: 2,
    lessons: [
      {
        id: 'e5u2l1',
        title: '星期词汇：Monday-Sunday',
        order: 1,
        teachingMethod: '歌谣韵律法',
        learningObjective: '我能说出Monday到Sunday七个星期词汇并按顺序排列',
        successCriteria: '①能说出7个星期词汇 ②能按顺序排列Monday到Sunday',
        iDo: '家长唱Days of Week歌谣，配合手指从1数到7，每说一天竖起一根手指',
        weDo: '亲子一起唱Days of Week歌谣，边唱边做动作，家长说前半句孩子接后半句',
        youDo: '孩子独立唱出星期歌谣并认读七个星期单词，能按顺序说出Monday到Sunday',
        parentTips: '【家长预习】本课核心：星期词汇Monday（一）到Sunday（日），句型What day is it today? It\'s Monday.。\n共学四步：\n①对话出题：家长指日历问What day is it today?并说It\'s Monday.。\n②孩子应答：孩子应说It\'s Monday!。\n③答错引导：若孩子说不出，家长当同学一起唱！扫描课时发音动画听发音；让孩子点读课件星期卡；家长唱Days of Week歌谣，边唱边指日历。\n④快速检测：1.孩子说出7个星期词；2.按顺序排列；3.用What day is it today?问答。',
        funElement: '唱《Days of Week》歌谣，配合拍手节奏，一边唱一边指着日历',
        gsapAnimations: ['GSAP:星期卡片翻转-cardReveal', 'GSAP:星期逐个出现-sequence', 'GSAP:词汇高亮-highlight'],
        images: ['IMG:星期日历图', 'IMG:Monday-Sunday词汇卡'],
        content: [
          { type: 'text', content: 'There are seven days in a week. Let\'s learn them: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.', animationType: 'reveal' },
          { type: 'example', content: 'Monday — 星期一\nTuesday — 星期二\nWednesday — 星期三\nThursday — 星期四\nFriday — 星期五\nSaturday — 星期六\nSunday — 星期日', label: '星期词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What day is it today?\nAmy: It\'s Monday.\nTom: Do you like Monday?\nAmy: No, I like Friday. We have PE on Friday.', label: '谈论星期', animationType: 'timeline' },
          { type: 'tip', content: '星期单词首字母必须大写！Monday不是monday。星期一到星期五是工作日（weekdays），星期六和星期日是周末（weekend）。', label: '书写规范', animationType: 'pulse' },
          { type: 'example', content: 'Days of Week Song:\nMonday, Monday, it\'s Monday.\nTuesday, Tuesday, it\'s Tuesday.\nWednesday, Thursday, Friday too.\nSaturday, Sunday, yay for you!\nSeven days, seven days, in a week!', label: '星期歌谣', animationType: 'sequence' },
          { type: 'tip', content: 'Wednesday的发音是"WENS-day"，d不发音。Thursday的发音是"THURZ-day"，注意th的咬舌音。', label: '发音提示', animationType: 'pulse' },
          { type: 'animation', content: '星期卡片翻转动画，逐一揭示七天的英文单词', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Days of Week', cardRevealConfig: { cards: [ { front: 'Monday', back: '📅', ttsText: 'Monday, 星期一' }, { front: 'Tuesday', back: '📅', ttsText: 'Tuesday, 星期二' }, { front: 'Wednesday', back: '📅', ttsText: 'Wednesday, 星期三' }, { front: 'Thursday', back: '📅', ttsText: 'Thursday, 星期四' }, { front: 'Friday', back: '📅', ttsText: 'Friday, 星期五' }, { front: 'Saturday', back: '📅', ttsText: 'Saturday, 星期六' }, { front: 'Sunday', back: '📅', ttsText: 'Sunday, 星期日' } ] }, ttsNarration: '星期词汇：星期一到星期日' } },
          {
            type: 'tip',
            content: '合成词记忆法：星期单词都是合成词！Monday=Moon（月亮）+day（天），Sunday=Sun（太阳）+day（天），Saturday=Saturn（土星）+day（天）。所有星期都以day结尾，记住day就记住了一半！Tuesday到Friday以北欧神命名，不用死记来历，按顺序唱出来最有效。',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u2l1q1',
            type: 'choice',
            question: 'Which day comes after Monday?',
            options: ['Tuesday', 'Sunday', 'Friday', 'Wednesday'],
            answer: 'Tuesday',
            hint: '星期一后面是哪一天？',
            explanation: 'Monday后面是Tuesday（星期二），一周的顺序是Monday到Sunday'
          },
          {
            id: 'e5u2l1q2',
            type: 'fill',
            question: 'The first day of the school week is ____. (星期一)',
            answer: 'Monday',
            hint: '上学第一天是星期几？',
            explanation: 'Monday是星期一，是学校一周学习的第一天'
          },
          {
            id: 'e5u2l1q3',
            type: 'choice',
            question: 'Which two days are the weekend?',
            options: ['Saturday and Sunday', 'Monday and Tuesday', 'Wednesday and Thursday', 'Friday and Saturday'],
            answer: 'Saturday and Sunday',
            hint: '周末是哪两天？',
            explanation: 'Saturday（星期六）和Sunday（星期日）是周末weekend'
          },
          {
            id: 'e5u2l1q4',
            type: 'fill',
            question: '____ is the day before Monday. (星期日)',
            answer: 'Sunday',
            hint: '星期一的前一天是星期几？',
            explanation: 'Sunday是星期日，在Monday之前，是一周的最后一天'
          },
          {
            id: 'e5u2l1q5',
            type: 'choice',
            question: 'Which spelling is correct?',
            options: ['Wednesday', 'Wendsday', 'Wenesday', 'Wednesdey'],
            answer: 'Wednesday',
            hint: '【期末真题】注意星期三的拼写，d不发音但要写',
            explanation: 'Wednesday是正确拼写，注意中间有d字母，虽然发音时d不发音'
          },
          {
            id: 'e5u2l1q6',
            type: 'fill',
            question: 'We don\'t go to school on ____ and Sunday. (星期六)',
            answer: 'Saturday',
            hint: '不上学的两天是星期六和星期日',
            explanation: 'Saturday是星期六，和Sunday一样属于周末，不用上学'
          },
          {
            id: 'e5u2l1q7',
            type: 'choice',
            question: 'How do you spell the fourth day of the week?',
            options: ['Thursday', 'Tuseday', 'Thurseday', 'Thirsday'],
            answer: 'Thursday',
            hint: '[星期词汇]（英语五年级-第2单元）',
            explanation: 'Thursday是星期四的正确拼写，注意Thur的组合'
          }
        ]
      },
      {
        id: 'e5u2l2',
        title: 'What day is it today? 句型',
        order: 2,
        teachingMethod: '情境对话法',
        learningObjective: '我能用What day is it today?/It\'s...进行问答',
        successCriteria: '①能用What day is it today?提问 ②能用It\'s...回答',
        iDo: '家长示范问答："What day is it today?" "It\'s Monday." 配合日历指认',
        weDo: '亲子一起做问答练习，家长指日历问今天星期几，孩子回答，互换角色',
        youDo: '孩子独立用What day is it today?句型询问家人，并正确回答',
        parentTips: '【家长预习】本课核心：句型What day is it today?（今天星期几），回答It\'s Monday.。\n共学四步：\n①对话出题：家长指日历问What day is it today?。\n②孩子应答：孩子应说It\'s Tuesday.。\n③答错引导：若孩子说不出，家长当同学一起查！扫描课时发音动画听发音；让孩子点读课件对话卡；家长每天早上问What day is it today?。\n④快速检测：1.孩子用What day...?提问；2.用It\'s...回答；3.问答互换。',
        funElement: '玩"日历翻页"游戏，翻到哪一天就用英语说出星期几',
        gsapAnimations: ['GSAP:日历翻页问答-timeline', 'GSAP:日期高亮-highlight', 'GSAP:问答弹出-stagger'],
        images: ['IMG:日历翻页图', 'IMG:星期问答场景'],
        content: [
          { type: 'text', content: 'What day is it today? 用来问今天是星期几。回答用It\'s + 星期。', animationType: 'reveal' },
          { type: 'example', content: 'What day is it today? — 今天星期几？\nIt\'s Monday. — 今天星期一。\nWhat day is it tomorrow? — 明天星期几？\nIt\'s Tuesday. — 明天星期二。', label: '问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What day is it today?\nAmy: It\'s Wednesday.\nTom: What day is it tomorrow?\nAmy: It\'s Thursday. We have English tomorrow.\nTom: Great! I like English.', label: '询问星期对话', animationType: 'timeline' },
          { type: 'tip', content: 'It\'s = It is的缩写。口语中通常用It\'s，书面语可以写It is。回答时星期首字母要大写。', label: '缩写用法', animationType: 'pulse' },
          { type: 'example', content: 'today — 今天\ntomorrow — 明天\nyesterday — 昨天\nWhat day is it today? — 今天星期几？\nIt\'s Friday. — 今天星期五。', label: '时间词汇', animationType: 'sequence' },
          { type: 'tip', content: '问明天用What day is it tomorrow?问昨天用What day was it yesterday?注意was是is的过去式。', label: '时态变化', animationType: 'pulse' },
          { type: 'animation', content: '日历翻页配合问答对话逐步展开动画', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'What day is it today?', timelineConfig: { steps: [ { text: 'What day is it today?', ttsNarration: 'What day is it today?' }, { text: 'It\'s Monday.', ttsNarration: 'It\'s Monday.' }, { text: 'What day is it tomorrow?', ttsNarration: 'What day is it tomorrow?' }, { text: 'It\'s Tuesday.', ttsNarration: 'It\'s Tuesday.' } ] }, ttsNarration: '问答对话：今天星期几？星期一。明天星期几？星期二。' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u2l2q1',
            type: 'choice',
            question: 'How do you ask what day it is today?',
            options: ['What day is it today?', 'What is day today?', 'What today is day?', 'Day what is today?'],
            answer: 'What day is it today?',
            hint: '询问今天星期几的固定句型',
            explanation: 'What day is it today?是询问今天星期几的标准句型'
          },
          {
            id: 'e5u2l2q2',
            type: 'fill',
            question: '— What day is it today? — ____ Friday. (今天是星期五)',
            answer: 'It\'s',
            acceptableAnswers: ['It is', "It's"],
            hint: '回答用It\'s + 星期',
            explanation: '回答What day is it today?用It\'s + 星期，It\'s Friday.表示今天是星期五'
          },
          {
            id: 'e5u2l2q3',
            type: 'choice',
            question: 'Today is Monday. What day is it tomorrow?',
            options: ['Tuesday', 'Sunday', 'Wednesday', 'Friday'],
            answer: 'Tuesday',
            hint: '星期一后面是哪一天？',
            explanation: 'Monday后面是Tuesday，所以明天是Tuesday'
          },
          {
            id: 'e5u2l2q4',
            type: 'fill',
            question: '____ day is it tomorrow? (什么)',
            answer: 'What',
            hint: '询问"什么"的疑问词',
            explanation: 'What意为"什么"，What day is it tomorrow?询问明天星期几'
          },
          {
            id: 'e5u2l2q5',
            type: 'choice',
            question: 'Which answer is correct for "What day is it today?"',
            options: ['It\'s Thursday.', 'It Thursday.', 'Is Thursday.', 'Thursday it\'s.'],
            answer: 'It\'s Thursday.',
            hint: '回答需要主语和be动词',
            explanation: '回答用It\'s + 星期，It\'s Thursday.表示今天是星期四'
          },
          {
            id: 'e5u2l2q6',
            type: 'fill',
            question: 'Today is Friday. Tomorrow is ____. (星期六)',
            answer: 'Saturday',
            hint: '星期五后面是星期几？',
            explanation: 'Friday后面是Saturday，所以明天是Saturday'
          },
          {
            id: 'e5u2l2q7',
            type: 'choice',
            question: 'Which sentence asks about tomorrow?',
            options: ['What day is it tomorrow?', 'What day is it today?', 'What day was it yesterday?', 'What is tomorrow day?'],
            answer: 'What day is it tomorrow?',
            hint: '[星期句型]（英语五年级-第2单元）',
            explanation: 'What day is it tomorrow?询问明天星期几，用is（现在时）因为明天还未到'
          }
        ]
      },
      {
        id: 'e5u2l3',
        title: '课程词汇：maths/English/Chinese/PE',
        order: 3,
        teachingMethod: '情境式：课程表',
        learningObjective: '我能说出maths/English/Chinese/PE等课程词汇',
        successCriteria: '①能说出6个课程词汇 ②能用We have...说课程',
        iDo: '家长出示英文课程表，指着每个科目说单词：maths, English, Chinese, PE, art, music',
        weDo: '亲子一起认读课程表上的科目词汇，家长说中文孩子说英文，再互换',
        youDo: '孩子独立辨认课程表上的英文科目词汇，读出并说出中文意思',
        parentTips: '【家长预习】本课核心：课程词汇maths（数学）、English（英语）、Chinese（语文）、PE（体育）、art（美术）、music（音乐）。\n共学四步：\n①对话出题：家长指课程表问What subject is this?并说Maths!。\n②孩子应答：孩子应说English!。\n③答错引导：若孩子说不出，家长当同学一起认！扫描课时发音动画听发音；让孩子点读课件课程卡；家长用课程表边指边说英语。\n④快速检测：1.孩子说出6个课程词；2.用We have...造句；3.说出今天有什么课。',
        funElement: '玩"课程表连连看"游戏，把英文科目和中文意思配对',
        gsapAnimations: ['GSAP:课程表逐步填入-sceneBuild', 'GSAP:科目卡片弹出-cardReveal', 'GSAP:科目高亮-highlight'],
        images: ['IMG:英文课程表', 'IMG:科目词汇图'],
        content: [
          { type: 'text', content: 'Look at the timetable! We have many subjects: maths, English, Chinese, PE, art, music, science.', animationType: 'reveal' },
          { type: 'example', content: 'maths — 数学\nEnglish — 英语\nChinese — 语文\nPE (Physical Education) — 体育\nart — 美术\nmusic — 音乐\nscience — 科学', label: '科目词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What do you have on Monday?\nAmy: We have Chinese, maths and English.\nTom: Do you have PE today?\nAmy: No, we have PE on Friday.', label: '谈论课程', animationType: 'timeline' },
          { type: 'tip', content: 'PE是Physical Education的缩写，读作P-E。科目词汇首字母要大写：English, Chinese。', label: '缩写与大小写', animationType: 'pulse' },
          { type: 'example', content: 'Monday: Chinese, maths, English\nTuesday: maths, art, PE\nWednesday: English, music, science\nThursday: Chinese, maths, PE\nFriday: English, art, Chinese', label: '英文课程表', animationType: 'sequence' },
          { type: 'tip', content: '注意maths是英式拼写，美式拼写为math。在中国教材中通常用maths。', label: '拼写差异', animationType: 'pulse' },
          { type: 'animation', content: '课程表逐步填入科目词汇动画', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'My Timetable', sceneBuildConfig: { sceneName: 'Timetable', elements: [ { id: 'el-0', text: 'maths', emoji: '🔢', delay: 0, animation: 'bounceIn', ttsText: 'maths, 数学' }, { id: 'el-1', text: 'English', emoji: '🔤', delay: 0.4, animation: 'popIn', ttsText: 'English, 英语' }, { id: 'el-2', text: 'Chinese', emoji: '📖', delay: 0.8, animation: 'scaleIn', ttsText: 'Chinese, 语文' }, { id: 'el-3', text: 'PE', emoji: '⚽', delay: 1.2, animation: 'fadeIn', ttsText: 'PE, 体育' } ] }, ttsNarration: '课程词汇：数学、英语、语文、体育' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u2l3q1',
            type: 'choice',
            question: 'In which subject do you learn numbers and calculations?',
            options: ['maths', 'music', 'art', 'PE'],
            answer: 'maths',
            hint: '学数字和计算的科目',
            explanation: 'maths是数学，学习数字和计算的科目'
          },
          {
            id: 'e5u2l3q2',
            type: 'fill',
            question: 'We run and play sports in ____ class. (体育)',
            answer: 'PE',
            acceptableAnswers: ['P.E.', 'P E'],
            hint: '跑步和运动的科目',
            explanation: 'PE是Physical Education的缩写，体育课跑步和做运动'
          },
          {
            id: 'e5u2l3q3',
            type: 'choice',
            question: 'PE stands for ____.',
            options: ['Physical Education', 'Physical English', 'Primary English', 'Personal Education'],
            answer: 'Physical Education',
            hint: 'PE是哪两个词的缩写？',
            explanation: 'PE是Physical Education的缩写，意为体育'
          },
          {
            id: 'e5u2l3q4',
            type: 'fill',
            question: 'We sing songs in ____ class. (音乐)',
            answer: 'music',
            hint: '唱歌的科目',
            explanation: 'music是音乐课，在音乐课上唱歌'
          },
          {
            id: 'e5u2l3q5',
            type: 'choice',
            question: 'Which subject should be written with a capital letter?',
            options: ['English', 'maths', 'art', 'music'],
            answer: 'English',
            hint: '哪个科目来自专有名词，首字母要大写？',
            explanation: 'English来自English（英国的），是专有名词，首字母必须大写'
          },
          {
            id: 'e5u2l3q6',
            type: 'fill',
            question: 'We draw and paint in ____ class. (美术)',
            answer: 'art',
            hint: '画画和涂色的科目',
            explanation: 'art是美术课，在美术课上画画和涂色'
          },
          {
            id: 'e5u2l3q7',
            type: 'choice',
            question: 'What do you have on Monday? — We have ____, maths and English.',
            options: ['Chinese', 'Monday', 'teacher', 'kind'],
            answer: 'Chinese',
            hint: '[课程词汇]（英语五年级-第2单元）',
            explanation: 'Chinese是语文，与maths和English一样都是科目，可以出现在课程表中'
          }
        ]
      },
      {
        id: 'e5u2l4',
        title: 'What do you have on Mondays? 课程问答',
        order: 4,
        teachingMethod: '情境对话法',
        learningObjective: '我能用What do you have on...?询问并回答课程安排',
        successCriteria: '①能用What do you have on...?提问 ②能用We have...回答',
        iDo: '家长示范课程问答："What do you have on Mondays?" "We have English and maths." 配合课程表',
        weDo: '亲子一起看课程表做问答，家长问某天有什么课，孩子回答，互换角色',
        youDo: '孩子独立用What do you have on...?句型询问同学或家人的课程安排',
        parentTips: '【家长预习】本课核心：句型What do you have on Mondays?（星期一有什么课），回答We have English and maths.。\n共学四步：\n①对话出题：家长指课程表问What do you have on Mondays?。\n②孩子应答：孩子应说We have English and maths.。\n③答错引导：若孩子说不出，家长当同学一起查！扫描课时发音动画听发音；让孩子点读课件对话卡；家长用课程表边指边问。\n④快速检测：1.孩子用What do you have on...?提问；2.用We have...回答；3.说出3天的课程。',
        funElement: '玩"课程猜猜猜"游戏，一人描述课程另一人猜是星期几',
        gsapAnimations: ['GSAP:课程问答展开-timeline', 'GSAP:课程表高亮-highlight', 'GSAP:科目图标弹出-stagger'],
        images: ['IMG:课程问答场景', 'IMG:课程表与对话图'],
        content: [
          { type: 'text', content: 'What do you have on Mondays? 用来问每周一有什么课。回答用We have + 科目。注意on Mondays用复数表示"每个星期一"。', animationType: 'reveal' },
          { type: 'example', content: 'What do you have on Mondays? — 你们星期一有什么课？\nWe have Chinese, maths and English. — 我们有语文、数学和英语。\nWhat do you have on Fridays? — 你们星期五有什么课？\nWe have PE and art. — 我们有体育和美术。', label: '课程问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What do you have on Mondays?\nAmy: We have Chinese, maths and PE.\nTom: What do you have on Wednesdays?\nAmy: We have English, science and music.\nTom: Wow, you have many subjects!', label: '课程安排对话', animationType: 'timeline' },
          { type: 'tip', content: 'on Mondays用复数表示"每个星期一"的习惯。如果说具体某一天用单数：on Monday（在那个星期一）。', label: '单复数区别', animationType: 'pulse' },
          { type: 'example', content: 'on Monday — 在星期一（具体某天）\non Mondays — 每个星期一（习惯性）\non Friday — 在星期五\non Fridays — 每个星期五', label: '介词on用法', animationType: 'sequence' },
          { type: 'tip', content: '回答What do you have?用We have...（我们有...），不用There are...。have表示"有（课程）"。', label: '回答技巧', animationType: 'pulse' },
          { type: 'animation', content: '课程问答对话逐步展开动画，配合课程表高亮', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'What do you have on Mondays?', timelineConfig: { steps: [ { text: 'What do you have on Mondays?', ttsNarration: 'What do you have on Mondays?' }, { text: 'We have Chinese and maths.', ttsNarration: 'We have Chinese and maths.' }, { text: 'What do you have on Fridays?', ttsNarration: 'What do you have on Fridays?' }, { text: 'We have PE and art.', ttsNarration: 'We have PE and art.' } ] }, ttsNarration: '课程问答：星期一有什么课？语文和数学。星期五有什么课？体育和美术。' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u2l4q1',
            type: 'choice',
            question: 'How do you ask about classes on every Monday?',
            options: ['What do you have on Mondays?', 'What do you have on Monday?', 'What you have on Mondays?', 'What have you on Monday?'],
            answer: 'What do you have on Mondays?',
            hint: '问每个星期一的课程用复数Mondays',
            explanation: 'What do you have on Mondays?用复数Mondays表示"每个星期一"的习惯性课程'
          },
          {
            id: 'e5u2l4q2',
            type: 'fill',
            question: '— What do you have on Mondays? — We ____ Chinese and maths. (有)',
            answer: 'have',
            hint: '回答用We have + 科目',
            explanation: '回答用We have + 科目，have表示"有（课程）"'
          },
          {
            id: 'e5u2l4q3',
            type: 'choice',
            question: 'We have PE ____ Fridays. (在每周五)',
            options: ['on', 'in', 'at', 'to'],
            answer: 'on',
            hint: '星期几前面用什么介词？',
            explanation: 'on用于星期几前面，on Fridays表示在每个星期五'
          },
          {
            id: 'e5u2l4q4',
            type: 'fill',
            question: 'What do you have on ____? (星期三，复数形式表示每周)',
            answer: 'Wednesdays',
            hint: '表示每周三用复数',
            explanation: 'Wednesdays是复数形式，表示"每个星期三"的习惯性课程安排'
          },
          {
            id: 'e5u2l4q5',
            type: 'choice',
            question: 'Which sentence means "每个星期四我们有英语和音乐"?',
            options: ['We have English and music on Thursdays.', 'We have English and music on Thursday.', 'We has English and music on Thursdays.', 'We having English and music on Thursdays.'],
            answer: 'We have English and music on Thursdays.',
            hint: '注意复数和动词形式',
            explanation: '每个星期四用on Thursdays（复数），动词用have（不用has）'
          },
          {
            id: 'e5u2l4q6',
            type: 'fill',
            question: '— What do you have on Tuesdays? — We have art ____ science. (和)',
            answer: 'and',
            hint: '连接两个科目用什么词？',
            explanation: 'and连接并列的科目：We have art and science.我们有美术和科学'
          },
          {
            id: 'e5u2l4q7',
            type: 'choice',
            question: 'Today is ____. We have Chinese, maths and English. (星期一)',
            options: ['Monday', 'Monday\'s', 'Mondays', 'the Monday'],
            answer: 'Monday',
            hint: '[星期词汇]（英语五年级-第2单元）',
            explanation: '具体某一天用单数Monday，不用复数Mondays（复数表示每周的习惯）'
          }
        ]
      },
      {
        id: 'e5u2l5',
        title: '第二单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能通过第二单元综合检测，巩固星期、课程词汇和句型',
        successCriteria: '①能完成星期和课程词汇题 ②能完成句型问答题',
        iDo: '家长示范检测流程，讲解题型和要求，示范答题方法',
        weDo: '亲子一起练习几道样题，家长引导孩子分析题目',
        youDo: '孩子独立完成单元检测，包括星期、课程和句型题',
        parentTips: '【家长预习】本课核心：第二单元综合检测，包括星期词汇、课程词汇、What day/What do you have句型。\n共学四步：\n①对话出题：家长说我们来做第二单元检测，先复习一下。。\n②孩子应答：孩子应说Monday to Sunday!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子完成单元检测；2.正确率达80%；3.错题订正。',
        funElement: '通关后获得Week达人徽章，庆祝学习成果',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:答题反馈-stagger', 'GSAP:徽章飞入-starFlyIn'],
        images: ['IMG:Week达人徽章', 'IMG:综合检测场景图'],
        content: [
          { type: 'text', content: 'Time for the Unit 2 test! Let\'s review: days of week, subjects, What day is it today?, and What do you have on...?', animationType: 'reveal' },
          { type: 'example', content: 'Review List:\n1. Days: Monday to Sunday\n2. Subjects: maths, English, Chinese, PE, art, music\n3. Questions: What day is it today? / What do you have on...?\n4. Answers: It\'s Monday. / We have English and maths.', label: '单元复习要点', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What day is it today?\nAmy: It\'s Wednesday.\nTom: What do you have on Wednesdays?\nAmy: We have English, maths and PE.\nTom: Do you like Wednesdays?\nAmy: Yes, I like PE!', label: '综合对话复习', animationType: 'timeline' },
          { type: 'tip', content: '检测重点：1.能认读星期和课程词汇 2.能用What day/What do you have句型问答 3.注意on+星期复数用法', label: '检测要点', animationType: 'pulse' },
          { type: 'example', content: 'Key Sentences:\nWhat day is it today? It\'s Friday.\nWhat do you have on Mondays? We have Chinese and maths.\nDo you have PE on Tuesdays? Yes, we do.', label: '核心句型复习', animationType: 'sequence' },
          { type: 'tip', content: '答题技巧：星期首字母大写，on+星期复数表示每周，We have+科目回答课程问题。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '检测通关撒花动画，配合徽章出现', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Week Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Test complete' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Badge', back: '🏅', ttsText: 'Week badge earned' } ] }, ttsNarration: '检测完成，恭喜通关，获得Week达人徽章' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u2l5q1',
            type: 'choice',
            question: 'Which day is the first day of the school week?',
            options: ['Monday', 'Sunday', 'Friday', 'Saturday'],
            answer: 'Monday',
            hint: '学校一周的第一天',
            explanation: 'Monday是星期一，通常是一周学习的第一天'
          },
          {
            id: 'e5u2l5q2',
            type: 'fill',
            question: '— What day is it today? — ____ Thursday. (今天是星期四)',
            answer: 'It\'s',
            acceptableAnswers: ['It is', "It's"],
            hint: '回答用It\'s + 星期',
            explanation: '回答What day is it today?用It\'s + 星期'
          },
          {
            id: 'e5u2l5q3',
            type: 'choice',
            question: 'What do you have ____ Mondays? — We have Chinese and English.',
            options: ['on', 'in', 'at', 'for'],
            answer: 'on',
            hint: '星期几前面用什么介词？',
            explanation: 'on用于星期几前面，on Mondays表示每个星期一'
          },
          {
            id: 'e5u2l5q4',
            type: 'fill',
            question: 'We have ____ and PE on Fridays. We run and play sports. (数学)',
            answer: 'maths',
            hint: '和体育一起上的科目',
            explanation: 'maths是数学，We have maths and PE.表示我们有数学和体育'
          },
          {
            id: 'e5u2l5q5',
            type: 'choice',
            question: 'Today is Friday. What day was it yesterday?',
            options: ['Thursday', 'Saturday', 'Monday', 'Wednesday'],
            answer: 'Thursday',
            hint: '星期五的前一天是星期几？',
            explanation: 'Friday的前一天是Thursday（星期四），yesterday表示昨天'
          },
          {
            id: 'e5u2l5q6',
            type: 'fill',
            question: 'PE stands for Physical ____. (教育)',
            answer: 'Education',
            acceptableAnswers: ['education'],
            hint: 'PE是哪两个词的缩写？',
            explanation: 'PE是Physical Education的缩写，Education意为教育'
          },
          {
            id: 'e5u2l5q7',
            type: 'choice',
            question: 'Which sentence asks about the subjects on every Tuesday?',
            options: ['What do you have on Tuesdays?', 'What day is it on Tuesday?', 'Do you like Tuesday?', 'Is it Tuesday today?'],
            answer: 'What do you have on Tuesdays?',
            hint: '[课程句型]（英语五年级-第2单元）',
            explanation: 'What do you have on Tuesdays?询问每个星期二有什么课，用复数Tuesdays表示每周'
          }
        ]
      }
    ]
  },
  // ==================== 第三单元：Favourite Food ====================
  {
    id: 'e5u3',
    title: 'Favourite Food',
    subtitle: '食物偏好与喜好表达，What\'s your favourite...?句型',
    order: 3,
    lessons: [
      {
        id: 'e5u3l1',
        title: '食物词汇：rice/noodles/fish/vegetable',
        order: 1,
        teachingMethod: 'TPR全身反应法+实物指认',
        learningObjective: '我能说出rice/noodles/fish/vegetable等食物词汇',
        successCriteria: '①能说出至少6个食物词汇 ②能用What do you eat?回答',
        iDo: '家长拿食物图片说单词：rice, noodles, fish, vegetable，配合吃饭的动作',
        weDo: '亲子一起看食物图片说单词，家长说中文孩子说英文，再互换角色',
        youDo: '孩子独立辨认食物图片，读出英文单词并说出中文意思',
        parentTips: '【家长预习】本课核心：食物词汇rice（米饭）、noodles（面条）、fish（鱼）、vegetable（蔬菜）、meat（肉）、fruit（水果）。\n共学四步：\n①对话出题：家长吃饭时问What do you eat for lunch?并说I eat rice.。\n②孩子应答：孩子应说I eat noodles and fish.。\n③答错引导：若孩子说不出，家长当同学一起认！扫描课时发音动画听发音；让孩子点读课件食物卡；家长吃饭时边指食物边说英语。\n④快速检测：1.孩子说出6个食物词；2.用I eat...造句；3.说出午餐吃的食物。',
        funElement: '玩"食物 Bingo"游戏，画一个3x3格子，填入食物单词，家长说单词孩子圈',
        gsapAnimations: ['GSAP:食物卡片翻转-cardReveal', 'GSAP:食物图标弹出-stagger', 'GSAP:词汇高亮-highlight'],
        images: ['IMG:食物词汇图', 'IMG:rice/noodles/fish/vegetable卡片'],
        content: [
          { type: 'text', content: 'Let\'s learn food words! We eat many things every day: rice, noodles, fish, vegetable, meat, fruit.', animationType: 'reveal' },
          { type: 'example', content: 'rice — 米饭\nnoodles — 面条\nfish — 鱼\nvegetable — 蔬菜\nmeat — 肉\nfruit — 水果\nbread — 面包\negg — 鸡蛋', label: '食物词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What do you eat for lunch?\nAmy: I eat rice and fish.\nTom: Do you like noodles?\nAmy: Yes, I like noodles very much.\nTom: What about vegetables?\nAmy: I don\'t like vegetables.', label: '谈论食物', animationType: 'timeline' },
          { type: 'tip', content: 'vegetable是可数名词，通常用复数vegetables。fish表示"鱼肉"时不可数，表示"鱼"时可数。', label: '名词用法', animationType: 'pulse' },
          { type: 'example', content: 'I eat rice every day. 我每天吃米饭。\nShe likes noodles. 她喜欢面条。\nFish is good for you. 鱼肉对你好。\nEat more vegetables! 多吃蔬菜！', label: '食物例句', animationType: 'sequence' },
          { type: 'tip', content: 'rice和noodles通常用复数形式表示种类：different rices（不同种米），但日常用单数即可。', label: '单复数提示', animationType: 'pulse' },
          { type: 'animation', content: '食物卡片翻转动画，翻转后揭示食物词汇和对应的图片', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Food Words', cardRevealConfig: { cards: [ { front: 'rice', back: '🍚', ttsText: 'rice, 米饭' }, { front: 'noodles', back: '🍜', ttsText: 'noodles, 面条' }, { front: 'fish', back: '🐟', ttsText: 'fish, 鱼' }, { front: 'vegetable', back: '🥬', ttsText: 'vegetable, 蔬菜' } ] }, ttsNarration: '食物词汇：米饭、面条、鱼、蔬菜' } },
          {
            type: 'tip',
            content: '分类记忆法：把食物分类记更清楚！主食类：rice（米饭）、noodles（面条）、bread（面包）；肉类：fish（鱼）、meat（肉）；蔬菜类：vegetable（蔬菜）；水果类：fruit（水果）。在脑中画一张"餐桌图"，把单词放进对应位置，分类记忆效率更高。小贴士：vegetable可数，通常用复数vegetables。',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u3l1q1',
            type: 'choice',
            question: 'Which food is made from flour and water, long and thin?',
            options: ['noodles', 'fish', 'rice', 'egg'],
            answer: 'noodles',
            hint: '用面粉做的长条形食物',
            explanation: 'noodles是面条，用面粉和水做成，长而细'
          },
          {
            id: 'e5u3l1q2',
            type: 'fill',
            question: 'Chinese people usually eat ____ for lunch. (米饭)',
            answer: 'rice',
            hint: '中国人午餐通常吃什么？',
            explanation: 'rice是米饭，中国人通常午餐吃米饭'
          },
          {
            id: 'e5u3l1q3',
            type: 'choice',
            question: 'Which food comes from the sea and is good for your brain?',
            options: ['fish', 'rice', 'bread', 'noodles'],
            answer: 'fish',
            hint: '来自大海、对大脑好的食物',
            explanation: 'fish是鱼，来自大海，富含蛋白质，对大脑发育有益'
          },
          {
            id: 'e5u3l1q4',
            type: 'fill',
            question: 'Eat more ____! They are good for your health. (蔬菜)',
            answer: 'vegetables',
            acceptableAnswers: ['vegetable'],
            hint: '对健康好的绿色食物',
            explanation: 'vegetables是蔬菜，多吃蔬菜对健康有益，通常用复数形式'
          },
          {
            id: 'e5u3l1q5',
            type: 'choice',
            question: 'Which word is NOT a food?',
            options: ['kind', 'rice', 'fish', 'bread'],
            answer: 'kind',
            hint: '【期末真题】哪个词不是食物？',
            explanation: 'kind是和蔼的（形容词），不是食物。rice/fish/bread都是食物'
          },
          {
            id: 'e5u3l1q6',
            type: 'fill',
            question: 'I have an ____ for breakfast. It\'s from chickens. (鸡蛋)',
            answer: 'egg',
            hint: '母鸡下的、早餐常吃的食物',
            explanation: 'egg是鸡蛋，来自母鸡，早餐常吃鸡蛋'
          },
          {
            id: 'e5u3l1q7',
            type: 'choice',
            question: 'What do you have for lunch? — I have ____ and fish.',
            options: ['rice', 'Monday', 'strict', 'tall'],
            answer: 'rice',
            hint: '[食物词汇]（英语五年级-第3单元）',
            explanation: 'rice是米饭，与fish搭配是常见的午餐组合'
          }
        ]
      },
      {
        id: 'e5u3l2',
        title: 'What\'s your favourite food? 句型',
        order: 2,
        teachingMethod: '情境对话法',
        learningObjective: '我能用What\'s your favourite food?/I like...进行问答',
        successCriteria: '①能用What\'s your favourite food?提问 ②能用I like...回答',
        iDo: '家长示范问答："What\'s your favourite food?" "I like fish." 配合食物图片',
        weDo: '亲子一起做问答练习，家长问喜欢的食物，孩子回答，互换角色',
        youDo: '孩子独立用What\'s your favourite food?句型询问家人或朋友',
        parentTips: '【家长预习】本课核心：句型What\'s your favourite food?（你最喜欢的食物是什么），回答I like fish.。\n共学四步：\n①对话出题：家长问What\'s your favourite food?并说I like rice.。\n②孩子应答：孩子应说I like noodles.。\n③答错引导：若孩子说不出，家长当同学一起聊！扫描课时发音动画听发音；让孩子点读课件对话卡；家长结合吃饭边问边答。\n④快速检测：1.孩子用What\'s your favourite...?提问；2.用I like...回答；3.问答互换。',
        funElement: '玩"食物采访"游戏，孩子拿着玩具话筒采访家人最喜欢的食物',
        gsapAnimations: ['GSAP:食物对话展开-timeline', 'GSAP:对话气泡弹出-stagger', 'GSAP:食物图标高亮-highlight'],
        images: ['IMG:食物对话场景', 'IMG:食物喜好对话图'],
        content: [
          { type: 'text', content: 'What\'s your favourite food? 用来问最喜欢的食物。回答用I like + 食物。favourite = favorite（美式拼写）。', animationType: 'reveal' },
          { type: 'example', content: 'What\'s your favourite food? — 你最喜欢的食物是什么？\nI like fish. — 我喜欢鱼。\nWhat\'s your favourite fruit? — 你最喜欢的水果是什么？\nI like apples. — 我喜欢苹果。', label: '问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s your favourite food, Amy?\nAmy: My favourite food is noodles. What about you?\nTom: I like rice and fish.\nAmy: Do you like vegetables?\nTom: Yes, I like tomatoes.', label: '谈论喜好对话', animationType: 'timeline' },
          { type: 'tip', content: 'favourite意为"最喜欢的"。可以说My favourite food is...或直接说I like...来回答。', label: 'favourite用法', animationType: 'pulse' },
          { type: 'example', content: 'My favourite food is rice. 我最喜欢的食物是米饭。\nMy favourite fruit is apples. 我最喜欢的水果是苹果。\nMy favourite colour is blue. 我最喜欢的颜色是蓝色。\nMy favourite subject is English. 我最喜欢的科目是英语。', label: 'favourite扩展用法', animationType: 'sequence' },
          { type: 'tip', content: 'favourite可以搭配很多东西：food（食物）、fruit（水果）、colour（颜色）、subject（科目）、animal（动物）等。', label: '搭配拓展', animationType: 'pulse' },
          { type: 'animation', content: '食物喜好对话逐步展开动画，配合食物图标出现', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Favourite Food', timelineConfig: { steps: [ { text: 'What\'s your favourite food?', ttsNarration: 'What\'s your favourite food?' }, { text: 'I like fish.', ttsNarration: 'I like fish.' }, { text: 'What\'s your favourite fruit?', ttsNarration: 'What\'s your favourite fruit?' }, { text: 'I like apples.', ttsNarration: 'I like apples.' } ] }, ttsNarration: '喜好问答：你最喜欢的食物是什么？我喜欢鱼。你最喜欢的水果是什么？我喜欢苹果。' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u3l2q1',
            type: 'choice',
            question: 'How do you ask about someone\'s favourite food?',
            options: ['What\'s your favourite food?', 'What food you like?', 'What is food favourite?', 'Which food favourite?'],
            answer: 'What\'s your favourite food?',
            hint: '询问最喜欢的食物用什么句型？',
            explanation: 'What\'s your favourite food?是询问最喜欢的食物的标准句型'
          },
          {
            id: 'e5u3l2q2',
            type: 'fill',
            question: '— What\'s your favourite food? — I ____ noodles. (喜欢)',
            answer: 'like',
            hint: '回答用I like + 食物',
            explanation: '回答favourite food用I like + 食物，I like noodles.表示我喜欢面条'
          },
          {
            id: 'e5u3l2q3',
            type: 'choice',
            question: '— What\'s your favourite food? — My ____ food is rice.',
            options: ['favourite', 'like', 'good', 'best'],
            answer: 'favourite',
            hint: '填入表示"最喜欢的"的词',
            explanation: 'My favourite food is rice.表示我最喜欢的食物是米饭'
          },
          {
            id: 'e5u3l2q4',
            type: 'fill',
            question: 'My favourite ____ is blue. I like the sky. (颜色)',
            answer: 'colour',
            acceptableAnswers: ['color'],
            hint: 'favourite不仅可以搭配食物',
            explanation: 'favourite可以搭配colour，My favourite colour is blue.表示我最喜欢的颜色是蓝色'
          },
          {
            id: 'e5u3l2q5',
            type: 'choice',
            question: 'Which is the correct way to answer "What\'s your favourite fruit?"',
            options: ['I like apples.', 'I am apples.', 'Apples like I.', 'Like I apples.'],
            answer: 'I like apples.',
            hint: '回答用I like + 水果',
            explanation: '回答favourite fruit用I like + 水果，I like apples.表示我喜欢苹果'
          },
          {
            id: 'e5u3l2q6',
            type: 'fill',
            question: '— What\'s your favourite ____? — English. I love English class. (科目)',
            answer: 'subject',
            hint: '最喜欢的科目用什么词？',
            explanation: 'subject是科目，My favourite subject is English.表示我最喜欢的科目是英语'
          },
          {
            id: 'e5u3l2q7',
            type: 'choice',
            question: 'Which question asks about food preference?',
            options: ['What\'s your favourite food?', 'What day is it today?', 'Who is your teacher?', 'What do you have on Mondays?'],
            answer: 'What\'s your favourite food?',
            hint: '[食物句型]（英语五年级-第3单元）',
            explanation: 'What\'s your favourite food?询问最喜欢的食物，其他选项分别问星期、老师和课程'
          }
        ]
      },
      {
        id: 'e5u3l3',
        title: '喜好表达：like/don\'t like',
        order: 3,
        teachingMethod: '情境式教学法',
        learningObjective: '我能用I like.../I don\'t like...表达食物喜好',
        successCriteria: '①能用I like...说喜欢的食物 ②能用I don\'t like...说不喜欢的',
        iDo: '家长示范表达喜好："I like fish. I don\'t like onions." 配合表情（喜欢微笑，不喜欢皱眉）',
        weDo: '亲子一起表达喜好，家长说一种食物孩子说喜欢或不喜欢，互换角色',
        youDo: '孩子独立用I like/I don\'t like句型表达自己对各种食物的喜好',
        parentTips: '【家长预习】本课核心：喜好表达I like fish.（我喜欢鱼）、I don\'t like onions.（我不喜欢洋葱）。\n共学四步：\n①对话出题：家长问Do you like fish?并说I like fish.。\n②孩子应答：孩子应说I like fish!或I don\'t like fish.。\n③答错引导：若孩子说不出，家长当同学一起说喜好！扫描课时发音动画听发音；让孩子点读课件句子卡；家长尊重孩子喜好边说边示范。\n④快速检测：1.孩子用I like...造句；2.用I don\'t like...造句；3.说出喜欢和不喜欢的食物。',
        funElement: '玩"喜欢不喜欢"游戏，举绿牌表示喜欢，举红牌表示不喜欢，说出英语句子',
        gsapAnimations: ['GSAP:like vs don\'t like对比-compare', 'GSAP:表情图标弹出-stagger', 'GSAP:喜好句子高亮-highlight'],
        images: ['IMG:喜好对比图', 'IMG:like/don\'t like场景图'],
        content: [
          { type: 'text', content: 'I like... 表示喜欢某物。I don\'t like... 表示不喜欢某物。don\'t = do not。', animationType: 'reveal' },
          { type: 'example', content: 'I like rice. — 我喜欢米饭。\nI don\'t like onions. — 我不喜欢洋葱。\nShe likes fish. — 她喜欢鱼。\nShe doesn\'t like meat. — 她不喜欢肉。', label: '喜好表达句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Do you like vegetables?\nAmy: Yes, I like carrots. But I don\'t like onions.\nTom: I don\'t like onions either. I like tomatoes.\nAmy: Tomatoes are delicious! I like them too.', label: '喜好对话', animationType: 'timeline' },
          { type: 'tip', content: '第三人称单数用likes/doesn\'t like：He likes rice. He doesn\'t like fish. 注意动词加s。', label: '第三人称变化', animationType: 'pulse' },
          { type: 'example', content: 'I like apples. → I don\'t like apples.\nHe likes fish. → He doesn\'t like fish.\nWe like noodles. → We don\'t like noodles.\nThey like rice. → They don\'t like rice.', label: '肯定变否定', animationType: 'sequence' },
          { type: 'tip', content: 'either用于否定句表示"也（不）"：I don\'t like onions either. 我也不喜欢洋葱。too用于肯定句表示"也"。', label: 'either/too用法', animationType: 'pulse' },
          { type: 'animation', content: 'like和don\'t like对比动画，左边笑脸表示喜欢，右边皱眉表示不喜欢', animationType: 'compare', animationConfig: { sceneType: 'compare', title: 'Like vs Don\'t Like', compareConfig: { leftItems: ['😊 I like rice', '😊 I like fish', '😊 I like fruit'], rightItems: ['😐 I don\'t like onions', '😐 I don\'t like peppers', '😐 I don\'t like bitter melon'], result: 'close', resultText: 'Everyone has different preferences' }, ttsNarration: '喜好对比：我喜欢米饭、鱼和水果；我不喜欢洋葱、辣椒和苦瓜' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u3l3q1',
            type: 'choice',
            question: 'How do you say "我不喜欢洋葱" in English?',
            options: ['I don\'t like onions.', 'I no like onions.', 'I not like onions.', 'I don\'t likes onions.'],
            answer: 'I don\'t like onions.',
            hint: '否定用don\'t like',
            explanation: 'I don\'t like onions.表示我不喜欢洋葱。don\'t = do not'
          },
          {
            id: 'e5u3l3q2',
            type: 'fill',
            question: 'I ____ fish. It\'s my favourite food! (喜欢)',
            answer: 'like',
            hint: '表示喜欢用什么动词？',
            explanation: 'like表示喜欢，I like fish.表示我喜欢鱼'
          },
          {
            id: 'e5u3l3q3',
            type: 'choice',
            question: 'She ____ rice. She eats it every day.',
            options: ['likes', 'like', 'liking', 'liked'],
            answer: 'likes',
            hint: '第三人称单数动词要加s',
            explanation: 'She是第三人称单数，动词like要加s变成likes'
          },
          {
            id: 'e5u3l3q4',
            type: 'fill',
            question: 'He doesn\'t ____ onions. He never eats them. (喜欢)',
            answer: 'like',
            hint: 'doesn\'t后面动词用原形',
            explanation: 'doesn\'t后动词用原形，He doesn\'t like onions.他不喜欢洋葱'
          },
          {
            id: 'e5u3l3q5',
            type: 'choice',
            question: 'Which sentence means "他也不喜欢鱼"?',
            options: ['He doesn\'t like fish either.', 'He doesn\'t like fish too.', 'He no like fish either.', 'He don\'t like fish too.'],
            answer: 'He doesn\'t like fish either.',
            hint: '否定句中"也"用either',
            explanation: '否定句中"也"用either，He doesn\'t like fish either.表示他也不喜欢鱼'
          },
          {
            id: 'e5u3l3q6',
            type: 'fill',
            question: 'I like tomatoes. I like them ____. (也，肯定句)',
            answer: 'too',
            hint: '肯定句中"也"用什么词？',
            explanation: '肯定句中"也"用too，I like them too.表示我也喜欢它们'
          },
          {
            id: 'e5u3l3q7',
            type: 'choice',
            question: 'Which is the correct negative form of "I like rice"?',
            options: ['I don\'t like rice.', 'I doesn\'t like rice.', 'I not like rice.', 'I am not like rice.'],
            answer: 'I don\'t like rice.',
            hint: '[喜好表达]（英语五年级-第3单元）',
            explanation: 'I的否定用don\'t，I don\'t like rice.表示我不喜欢米饭'
          }
        ]
      },
      {
        id: 'e5u3l4',
        title: '健康饮食——Food Pyramid',
        order: 4,
        teachingMethod: '跨学科：健康+英语',
        learningObjective: '我能用英语说出食物金字塔各层的食物并理解健康饮食',
        successCriteria: '①能说出食物金字塔5层 ②能用英语说出每层食物',
        iDo: '家长介绍食物金字塔：谷物/蔬菜/水果/肉类/油脂，用英语说出每层的食物',
        weDo: '亲子一起分类食物，把食物图片放到金字塔的正确位置，用英语说出名称',
        youDo: '孩子独立用英语描述健康饮食，说出哪些食物应该多吃、少吃',
        parentTips: '【家长预习】本课核心：食物金字塔Food Pyramid，谷物层/蔬菜水果层/肉类层/油脂层，用英语说出每层食物。\n共学四步：\n①对话出题：家长问What should we eat every day?并说We should eat rice and vegetables.。\n②孩子应答：孩子应说We should eat fruit and vegetables.。\n③答错引导：若孩子说不出，家长当同学一起画！扫描课时发音动画听发音；让孩子点读课件金字塔卡；家长画金字塔边画边说英语。\n④快速检测：1.孩子说出金字塔5层；2.每层说2个食物；3.用We should eat...造句。',
        funElement: '制作"健康饮食盘"，画出食物金字塔，用英语标注每种食物',
        gsapAnimations: ['GSAP:食物金字塔逐步构建-sceneBuild', 'GSAP:食物分类弹出-stagger', 'GSAP:金字塔层级高亮-highlight'],
        images: ['IMG:食物金字塔', 'IMG:健康饮食盘图'],
        content: [
          { type: 'text', content: 'A Food Pyramid helps us eat healthy! From bottom to top: grains, vegetables, fruit, meat, oils. Eat more grains and vegetables, eat less oils.', animationType: 'reveal' },
          { type: 'example', content: 'Food Pyramid (bottom to top):\n1. Grains: rice, bread, noodles — 谷物（多吃）\n2. Vegetables: carrots, tomatoes — 蔬菜（多吃）\n3. Fruit: apples, bananas — 水果（多吃）\n4. Meat & Fish: chicken, fish — 肉类（适量）\n5. Oils & Sweets: oil, sugar — 油脂甜食（少吃）', label: '食物金字塔', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What should we eat more?\nAmy: We should eat more rice, vegetables and fruit.\nTom: What should we eat less?\nAmy: We should eat less oil and sugar.\nTom: Is fish good for us?\nAmy: Yes, fish is good. We should eat some fish.', label: '健康饮食对话', animationType: 'timeline' },
          { type: 'tip', content: 'should表示"应该"，shouldn\'t表示"不应该"。We should eat more vegetables. We shouldn\'t eat too much sugar.', label: 'should用法', animationType: 'pulse' },
          { type: 'example', content: 'We should eat more vegetables. 我们应该多吃蔬菜。\nWe should eat some fish. 我们应该吃一些鱼。\nWe shouldn\'t eat too much sugar. 我们不应该吃太多糖。\nWe shouldn\'t eat too much oil. 我们不应该吃太多油。', label: '健康饮食建议', animationType: 'sequence' },
          { type: 'tip', content: 'too much修饰不可数名词（too much sugar），too many修饰可数名词复数（too many sweets）。', label: 'too much/too many', animationType: 'pulse' },
          { type: 'animation', content: '食物金字塔逐步构建动画，从底层到顶层逐层出现', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'Food Pyramid', sceneBuildConfig: { sceneName: 'Food Pyramid', elements: [ { id: 'el-0', text: 'grains', emoji: '🌾', delay: 0, animation: 'bounceIn', ttsText: 'grains, 谷物' }, { id: 'el-1', text: 'vegetables', emoji: '🥕', delay: 0.4, animation: 'popIn', ttsText: 'vegetables, 蔬菜' }, { id: 'el-2', text: 'fruit', emoji: '🍎', delay: 0.8, animation: 'scaleIn', ttsText: 'fruit, 水果' }, { id: 'el-3', text: 'meat', emoji: '🍗', delay: 1.2, animation: 'fadeIn', ttsText: 'meat, 肉类' }, { id: 'el-4', text: 'oils', emoji: '🫒', delay: 1.6, animation: 'fadeIn', ttsText: 'oils, 油脂' } ] }, ttsNarration: '食物金字塔：谷物、蔬菜、水果、肉类、油脂' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u3l4q1',
            type: 'choice',
            question: 'According to the Food Pyramid, what should we eat the most?',
            options: ['grains', 'oils', 'meat', 'sweets'],
            answer: 'grains',
            hint: '金字塔最底层、应该多吃的食物',
            explanation: 'grains（谷物）在金字塔最底层，应该多吃，如米饭、面包、面条'
          },
          {
            id: 'e5u3l4q2',
            type: 'fill',
            question: 'We ____ eat more vegetables. They are good for us. (应该)',
            answer: 'should',
            hint: '表示"应该"用什么词？',
            explanation: 'should表示应该，We should eat more vegetables.表示我们应该多吃蔬菜'
          },
          {
            id: 'e5u3l4q3',
            type: 'choice',
            question: 'We shouldn\'t eat ____ sugar. It\'s bad for our teeth.',
            options: ['too much', 'too many', 'much too', 'many too'],
            answer: 'too much',
            hint: 'sugar是不可数名词',
            explanation: 'sugar是不可数名词，用too much修饰，too much sugar表示太多糖'
          },
          {
            id: 'e5u3l4q4',
            type: 'fill',
            question: 'We shouldn\'t eat too ____ sweets. They are not healthy. (多，修饰可数名词)',
            answer: 'many',
            hint: 'sweets是可数名词复数',
            explanation: 'sweets是可数名词复数，用too many修饰，too many sweets表示太多甜食'
          },
          {
            id: 'e5u3l4q5',
            type: 'choice',
            question: 'Which food is in the "eat less" group?',
            options: ['oil', 'rice', 'vegetables', 'fruit'],
            answer: 'oil',
            hint: '哪种食物应该少吃？',
            explanation: 'oil（油脂）在金字塔顶层，应该少吃。rice/vegetables/fruit都应该多吃'
          },
          {
            id: 'e5u3l4q6',
            type: 'fill',
            question: 'Fish is ____ for us. We should eat some fish. (好)',
            answer: 'good',
            hint: '表示"对...有益"用什么词？',
            explanation: 'good for表示对...有益，Fish is good for us.表示鱼对我们有益'
          },
          {
            id: 'e5u3l4q7',
            type: 'choice',
            question: 'Which sentence gives healthy eating advice?',
            options: ['We should eat more vegetables.', 'We should eat more oil.', 'We shouldn\'t eat fruit.', 'We should eat too much sugar.'],
            answer: 'We should eat more vegetables.',
            hint: '[健康饮食]（英语五年级-第3单元）',
            explanation: 'We should eat more vegetables.是正确的健康饮食建议，多吃蔬菜有益健康'
          }
        ]
      },
      {
        id: 'e5u3l5',
        title: '第三单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能通过第三单元综合检测，巩固食物词汇和喜好表达',
        successCriteria: '①能完成食物词汇题 ②能完成喜好表达和句型题',
        iDo: '家长示范检测流程，讲解题型和要求，示范答题方法',
        weDo: '亲子一起练习几道样题，家长引导孩子分析题目',
        youDo: '孩子独立完成单元检测，包括食物词汇、喜好句型和健康饮食题',
        parentTips: '【家长预习】本课核心：第三单元综合检测，包括食物词汇、favourite句型、like/don\'t like表达。\n共学四步：\n①对话出题：家长说我们来做第三单元检测，先复习一下。。\n②孩子应答：孩子应说rice, noodles, fish, vegetable!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子完成单元检测；2.正确率达80%；3.错题订正。',
        funElement: '通关后获得Food达人徽章，庆祝学习成果',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:答题反馈-stagger', 'GSAP:徽章飞入-starFlyIn'],
        images: ['IMG:Food达人徽章', 'IMG:综合检测场景图'],
        content: [
          { type: 'text', content: 'Time for the Unit 3 test! Let\'s review: food words, What\'s your favourite food?, like/don\'t like, and the Food Pyramid.', animationType: 'reveal' },
          { type: 'example', content: 'Review List:\n1. Food: rice, noodles, fish, vegetable, meat, fruit\n2. Question: What\'s your favourite food? / I like...\n3. Preference: I like... / I don\'t like... / He likes... / She doesn\'t like...\n4. Health: should / shouldn\'t, too much / too many', label: '单元复习要点', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s your favourite food?\nAmy: My favourite food is noodles. I like fish too.\nTom: Do you like vegetables?\nAmy: I like carrots, but I don\'t like onions.\nTom: We should eat more vegetables and less sugar.\nAmy: You\'re right! Healthy eating is important.', label: '综合对话复习', animationType: 'timeline' },
          { type: 'tip', content: '检测重点：1.能认读食物词汇 2.能用favourite句型问答 3.能用like/don\'t like表达喜好 4.能说健康饮食建议', label: '检测要点', animationType: 'pulse' },
          { type: 'example', content: 'Key Sentences:\nWhat\'s your favourite food? I like fish.\nI don\'t like onions. He likes rice.\nWe should eat more vegetables.\nWe shouldn\'t eat too much sugar.', label: '核心句型复习', animationType: 'sequence' },
          { type: 'tip', content: '答题技巧：第三人称单数动词加s（likes），否定用doesn\'t like，不可数名词用too much，可数名词复数用too many。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '检测通关撒花动画，配合徽章出现', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Food Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Test complete' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Badge', back: '🏅', ttsText: 'Food badge earned' } ] }, ttsNarration: '检测完成，恭喜通关，获得Food达人徽章' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u3l5q1',
            type: 'choice',
            question: 'Which food is a kind of grain?',
            options: ['rice', 'fish', 'apple', 'oil'],
            answer: 'rice',
            hint: '哪种食物属于谷物？',
            explanation: 'rice（米饭）属于谷物grain，在食物金字塔最底层'
          },
          {
            id: 'e5u3l5q2',
            type: 'fill',
            question: '— What\'s your favourite food? — I ____ noodles. (喜欢)',
            answer: 'like',
            hint: '回答用I like + 食物',
            explanation: '回答favourite food用I like + 食物，I like noodles.表示我喜欢面条'
          },
          {
            id: 'e5u3l5q3',
            type: 'choice',
            question: 'She ____ fish. She eats it every Friday.',
            options: ['likes', 'like', 'liking', 'liked'],
            answer: 'likes',
            hint: '第三人称单数动词加s',
            explanation: 'She是第三人称单数，like要加s变成likes'
          },
          {
            id: 'e5u3l5q4',
            type: 'fill',
            question: 'We shouldn\'t eat too ____ oil. (多，修饰不可数名词)',
            answer: 'much',
            hint: 'oil是不可数名词',
            explanation: 'oil是不可数名词，用too much修饰，too much oil表示太多油'
          },
          {
            id: 'e5u3l5q5',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['I don\'t like onions either.', 'I don\'t like onions too.', 'I doesn\'t like onions either.', 'I not like onions too.'],
            answer: 'I don\'t like onions either.',
            hint: '否定句中"也"用either，don\'t后用原形',
            explanation: '否定句中"也"用either，I用don\'t，I don\'t like onions either.我也不喜欢洋葱'
          },
          {
            id: 'e5u3l5q6',
            type: 'fill',
            question: 'We ____ eat more vegetables and fruit. They are healthy. (应该)',
            answer: 'should',
            hint: '表示"应该"用什么词？',
            explanation: 'should表示应该，We should eat more vegetables and fruit.表示我们应该多吃蔬菜和水果'
          },
          {
            id: 'e5u3l5q7',
            type: 'choice',
            question: 'What\'s your favourite ____? — I like blue. It\'s the colour of the sky.',
            options: ['colour', 'food', 'day', 'teacher'],
            answer: 'colour',
            hint: '[喜好句型]（英语五年级-第3单元）',
            explanation: 'blue是颜色，所以问的是favourite colour。favourite可以搭配不同的名词'
          }
        ]
      }
    ]
  },
  // ==================== 第四单元：What Can You Do ====================
  {
    id: 'e5u4',
    title: 'What Can You Do',
    subtitle: '能力表达与才艺展示，can/can\'t句型',
    order: 4,
    lessons: [
      {
        id: 'e5u4l1',
        title: '才艺词汇：sing/dance/swim/cook',
        order: 1,
        teachingMethod: 'TPR全身反应法+动作模仿',
        learningObjective: '我能说出sing/dance/swim/cook等才艺词汇并用动作演绎',
        successCriteria: '①能说出6个才艺词汇 ②能用动作配合说单词',
        iDo: '家长做动作说单词：sing（唱歌动作）、dance（跳舞动作）、swim（游泳动作）、cook（炒菜动作）',
        weDo: '亲子一起做动作说单词，家长做动作孩子说英文，再互换角色',
        youDo: '孩子独立做动作说出对应的英文单词，并用词汇描述自己的才艺',
        parentTips: '【家长预习】本课核心：才艺词汇sing（唱歌）、dance（跳舞）、swim（游泳）、cook（做饭）、draw（画画）、play basketball（打篮球）。\n共学四步：\n①对话出题：家长做唱歌动作问What can you do?并说I can sing.。\n②孩子应答：孩子应说I can dance!。\n③答错引导：若孩子说不出，家长当同学一起演！扫描课时发音动画听发音；让孩子点读课件动作卡；家长边做动作边说英语，用TPR法帮孩子记。\n④快速检测：1.孩子说出6个才艺词；2.做动作说单词；3.用I can...造句。',
        funElement: '玩"才艺模仿秀"游戏，一人做动作另一人猜英文单词',
        gsapAnimations: ['GSAP:才艺动作卡翻转-cardReveal', 'GSAP:动作图标弹出-stagger', 'GSAP:词汇高亮-highlight'],
        images: ['IMG:才艺动作图', 'IMG:sing/dance/swim/cook词汇卡'],
        content: [
          { type: 'text', content: 'What can you do? Let\'s learn ability words: sing, dance, swim, cook, draw, play basketball.', animationType: 'reveal' },
          { type: 'example', content: 'sing — 唱歌\ndance — 跳舞\nswim — 游泳\ncook — 做饭\ndraw — 画画\nplay basketball — 打篮球\nplay the piano — 弹钢琴\nrun — 跑步', label: '才艺词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What can you do, Amy?\nAmy: I can sing and dance. What about you?\nTom: I can swim and play basketball.\nAmy: Can you cook?\nTom: No, I can\'t. But I can draw.', label: '谈论才艺', animationType: 'timeline' },
          { type: 'tip', content: 'play + 球类运动不加the：play basketball。play + 乐器要加the：play the piano。', label: 'play用法区别', animationType: 'pulse' },
          { type: 'example', content: 'I can sing. 我会唱歌。\nShe can dance. 她会跳舞。\nHe can swim. 他会游泳。\nThey can cook. 他们会做饭。', label: '才艺例句', animationType: 'sequence' },
          { type: 'tip', content: 'can后面直接加动词原形，不需要to：I can sing.（不是I can to sing.）', label: 'can用法', animationType: 'pulse' },
          { type: 'animation', content: '才艺动作卡翻转动画，翻转后揭示才艺词汇和对应的动作图标', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Ability Words', cardRevealConfig: { cards: [ { front: 'sing', back: '🎤', ttsText: 'sing, 唱歌' }, { front: 'dance', back: '💃', ttsText: 'dance, 跳舞' }, { front: 'swim', back: '🏊', ttsText: 'swim, 游泳' }, { front: 'cook', back: '🍳', ttsText: 'cook, 做饭' } ] }, ttsNarration: '才艺词汇：唱歌、跳舞、游泳、做饭' } },
          {
            type: 'tip',
            content: '后缀-er记忆法：-er可以表示"做某事的人"。sing（唱歌）+er=singer（歌手），dance（跳舞）+er=dancer（舞者），swim（游泳）+er=swimmer（游泳者，双写m再加er）。特别注意：cook本身就是"厨师"的意思，cooker是"炊具/炉具"不是厨师！记住这个区别考试不丢分。',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u4l1q1',
            type: 'choice',
            question: 'Which word means making food in the kitchen?',
            options: ['cook', 'sing', 'swim', 'draw'],
            answer: 'cook',
            hint: '在厨房做食物的动作',
            explanation: 'cook是做饭，在厨房制作食物的动作'
          },
          {
            id: 'e5u4l1q2',
            type: 'fill',
            question: 'I can ____. I sing songs every day. (唱歌)',
            answer: 'sing',
            hint: '每天唱歌的才艺',
            explanation: 'sing是唱歌，I can sing.表示我会唱歌'
          },
          {
            id: 'e5u4l1q3',
            type: 'choice',
            question: 'Which one needs a pool or the sea?',
            options: ['swim', 'sing', 'cook', 'draw'],
            answer: 'swim',
            hint: '需要水池或大海的活动',
            explanation: 'swim是游泳，需要在游泳池或大海中进行'
          },
          {
            id: 'e5u4l1q4',
            type: 'fill',
            question: 'She can ____. She moves beautifully to music. (跳舞)',
            answer: 'dance',
            hint: '跟着音乐优美地移动',
            explanation: 'dance是跳舞，跟着音乐节奏优美地移动身体'
          },
          {
            id: 'e5u4l1q5',
            type: 'choice',
            question: 'Which is correct?',
            options: ['play the piano', 'play piano', 'play a piano', 'play pianos'],
            answer: 'play the piano',
            hint: '【期末真题】play + 乐器要加the',
            explanation: 'play + 乐器要加the，play the piano表示弹钢琴'
          },
          {
            id: 'e5u4l1q6',
            type: 'fill',
            question: 'He can play ____ basketball. He is very tall. (打篮球)',
            answer: 'basketball',
            hint: 'play + 球类不加the',
            explanation: 'play basketball是打篮球，play + 球类运动不加the'
          },
          {
            id: 'e5u4l1q7',
            type: 'choice',
            question: 'What can you do? — I can ____ and dance.',
            options: ['sing', 'rice', 'Monday', 'kind'],
            answer: 'sing',
            hint: '[才艺词汇]（英语五年级-第4单元）',
            explanation: 'sing是唱歌，与dance搭配都是才艺，I can sing and dance.表示我会唱歌和跳舞'
          }
        ]
      },
      {
        id: 'e5u4l2',
        title: 'I can... 能力表达',
        order: 2,
        teachingMethod: '情境对话法',
        learningObjective: '我能用I can...表达自己的才艺和能力',
        successCriteria: '①能用I can...造句 ②能说出3个自己的才艺',
        iDo: '家长示范I can句型："I can sing." "I can dance." 配合做动作',
        weDo: '亲子一起练习I can句型，家长说一句孩子跟一句，然后各自说出自己的能力',
        youDo: '孩子独立用I can...句型描述自己的能力，至少说出三种',
        parentTips: '【家长预习】本课核心：句型I can sing.（我会唱歌）、I can dance.（我会跳舞），can后加动词原形。\n共学四步：\n①对话出题：家长做动作说I can swim.，问孩子What can you do?。\n②孩子应答：孩子应说I can sing and dance.。\n③答错引导：若孩子说不出，家长当同学一起说！扫描课时发音动画听发音；让孩子点读课件句子卡；家长做动作边说边展示。\n④快速检测：1.孩子用I can...造句；2.说3个才艺；3.做动作配合说。',
        funElement: '玩"我能行"游戏，每人说一个I can...句型，不能重复',
        gsapAnimations: ['GSAP:能力表达对话展开-timeline', 'GSAP:动作图标弹出-stagger', 'GSAP:句子高亮-highlight'],
        images: ['IMG:能力表达场景', 'IMG:I can句型图'],
        content: [
          { type: 'text', content: 'I can + 动词 = 我会做某事。can是情态动词，后面加动词原形。can没有单复数变化。', animationType: 'reveal' },
          { type: 'example', content: 'I can sing. — 我会唱歌。\nI can dance. — 我会跳舞。\nI can swim. — 我会游泳。\nI can cook. — 我会做饭。\nI can draw. — 我会画画。\nI can play basketball. — 我会打篮球。', label: 'I can句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: I can sing. What can you do?\nAmy: I can dance and swim.\nTom: Can you cook?\nAmy: Yes, I can cook noodles.\nTom: Great! I can\'t cook.', label: '能力表达对话', animationType: 'timeline' },
          { type: 'tip', content: 'can没有人称和数的变化：I can / He can / She can / They can。不用加s。', label: 'can的用法', animationType: 'pulse' },
          { type: 'example', content: 'I can sing. → Can you sing?\nHe can swim. → Can he swim?\nThey can cook. → Can they cook?\nShe can dance. → Can she dance?', label: '陈述变疑问', animationType: 'sequence' },
          { type: 'tip', content: '变疑问句时把can提前：Can you sing? 肯定回答Yes, I can. 否定回答No, I can\'t.', label: '疑问句变化', animationType: 'pulse' },
          { type: 'animation', content: '能力表达对话逐步展开动画，配合动作图标出现', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'I Can...', timelineConfig: { steps: [ { text: 'I can sing.', ttsNarration: 'I can sing.' }, { text: 'I can dance.', ttsNarration: 'I can dance.' }, { text: 'I can swim.', ttsNarration: 'I can swim.' }, { text: 'I can cook.', ttsNarration: 'I can cook.' } ] }, ttsNarration: '能力表达：我会唱歌、跳舞、游泳、做饭' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u4l2q1',
            type: 'choice',
            question: 'Which sentence means "我会游泳"?',
            options: ['I can swim.', 'I swim can.', 'Can I swim.', 'I swimming can.'],
            answer: 'I can swim.',
            hint: 'I can + 动词原形',
            explanation: 'I can swim.表示我会游泳。can后面加动词原形'
          },
          {
            id: 'e5u4l2q2',
            type: 'fill',
            question: 'I ____ sing. I sing every morning. (会/能)',
            answer: 'can',
            hint: '表示"会、能"的情态动词',
            explanation: 'can表示"会、能"，I can sing.表示我会唱歌'
          },
          {
            id: 'e5u4l2q3',
            type: 'choice',
            question: 'He ____ play basketball. He is very good at it.',
            options: ['can', 'cans', 'canning', 'can to'],
            answer: 'can',
            hint: 'can没有人称变化',
            explanation: 'can没有人称和数的变化，He can play basketball.不用加s'
          },
          {
            id: 'e5u4l2q4',
            type: 'fill',
            question: 'I can ____ pictures. I use pencils and colours. (画)',
            answer: 'draw',
            hint: 'can后面加动词原形',
            explanation: 'can后面加动词原形draw，I can draw pictures.表示我会画画'
          },
          {
            id: 'e5u4l2q5',
            type: 'choice',
            question: 'Which is the correct question form of "I can sing"?',
            options: ['Can you sing?', 'You can sing?', 'Do you can sing?', 'Can you to sing?'],
            answer: 'Can you sing?',
            hint: '疑问句把can提前',
            explanation: '变疑问句时把can提前到主语前，Can you sing?你会唱歌吗？'
          },
          {
            id: 'e5u4l2q6',
            type: 'fill',
            question: '— Can you dance? — Yes, I ____. (能)',
            answer: 'can',
            hint: '肯定回答用Yes, I can.',
            explanation: 'Can you...?的肯定回答是Yes, I can.否定回答是No, I can\'t.'
          },
          {
            id: 'e5u4l2q7',
            type: 'choice',
            question: 'Which sentence describes an ability?',
            options: ['I can swim.', 'I like fish.', 'It\'s Monday.', 'He is tall.'],
            answer: 'I can swim.',
            hint: '[能力句型]（英语五年级-第4单元）',
            explanation: 'I can swim.描述能力（我会游泳），其他选项分别说喜好、星期和外貌'
          }
        ]
      },
      {
        id: 'e5u4l3',
        title: 'Can you...? 能力问答',
        order: 3,
        teachingMethod: '情境对话法',
        learningObjective: '我能用Can you...?/Yes, I can./No, I can\'t.进行能力问答',
        successCriteria: '①能用Can you...?提问 ②能用Yes, I can./No, I can\'t.回答',
        iDo: '家长示范问答："Can you swim?" "Yes, I can." / "No, I can\'t." 配合表情',
        weDo: '亲子一起做问答练习，家长问能力问题孩子回答，互换角色',
        youDo: '孩子独立用Can you...?句型询问家人或朋友的能力',
        parentTips: '【家长预习】本课核心：能力问答Can you swim?（你会游泳吗），回答Yes, I can./No, I can\'t.。\n共学四步：\n①对话出题：家长问Can you swim?。\n②孩子应答：孩子应说Yes, I can.或No, I can\'t.。\n③答错引导：若孩子说不出，家长当同学一起问！扫描课时发音动画听发音；让孩子点读课件对话卡；家长做动作边问边答。\n④快速检测：1.孩子用Can you...?提问；2.回答Yes, I can；3.回答No, I can\'t。',
        funElement: '玩"才艺大调查"游戏，调查家人的才艺，记录下来',
        gsapAnimations: ['GSAP:Yes/No对比-compare', 'GSAP:问答对话展开-timeline', 'GSAP:答案高亮-highlight'],
        images: ['IMG:能力问答图', 'IMG:肯定否定回答对比图'],
        content: [
          { type: 'text', content: 'Can you...? 用来询问对方的能力。肯定回答Yes, I can. 否定回答No, I can\'t. can\'t = cannot。', animationType: 'reveal' },
          { type: 'example', content: 'Can you swim? — 你会游泳吗？\nYes, I can. — 是的，我会。\nNo, I can\'t. — 不，我不会。\nCan you cook? — 你会做饭吗？\nYes, I can. — 是的，我会。\nNo, I can\'t. — 不，我不会。', label: '能力问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Can you swim, Amy?\nAmy: Yes, I can. I swim on weekends.\nTom: Can you cook?\nAmy: No, I can\'t. But I can make sandwiches.\nTom: Can your sister sing?\nAmy: Yes, she can sing very well.', label: '能力问答对话', animationType: 'timeline' },
          { type: 'tip', content: 'can\'t是can not的缩写，读作"can\'t"（美式）或"cahn\'t"（英式）。否定回答要简短：No, I can\'t.', label: 'can\'t缩写', animationType: 'pulse' },
          { type: 'example', content: 'Can you sing? Yes, I can. / No, I can\'t.\nCan he swim? Yes, he can. / No, he can\'t.\nCan she dance? Yes, she can. / No, she can\'t.\nCan they cook? Yes, they can. / No, they can\'t.', label: '各种人称问答', animationType: 'sequence' },
          { type: 'tip', content: '回答时主语和can要与问句一致。问Can you...?回答I can/can\'t。问Can he...?回答he can/can\'t。', label: '回答一致性', animationType: 'pulse' },
          { type: 'animation', content: 'Yes, I can和No, I can\'t对比动画，肯定否定并列展示', animationType: 'compare', animationConfig: { sceneType: 'compare', title: 'Yes I Can vs No I Can\'t', compareConfig: { leftItems: ['✅ Yes, I can sing.', '✅ Yes, I can swim.', '✅ Yes, I can dance.'], rightItems: ['❌ No, I can\'t cook.', '❌ No, I can\'t draw.', '❌ No, I can\'t ski.'], result: 'close', resultText: 'Everyone has different abilities' }, ttsNarration: '能力对比：我会唱歌、游泳和跳舞；我不会做饭、画画和滑雪' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u4l3q1',
            type: 'choice',
            question: 'How do you ask if someone can swim?',
            options: ['Can you swim?', 'Do you swim?', 'Are you swim?', 'You can swim?'],
            answer: 'Can you swim?',
            hint: '询问能力用什么句型？',
            explanation: 'Can you swim?询问对方是否会游泳，用Can引导疑问句'
          },
          {
            id: 'e5u4l3q2',
            type: 'fill',
            question: '— Can you cook? — Yes, I ____. (能)',
            answer: 'can',
            hint: '肯定回答用Yes, I can.',
            explanation: 'Can you...?的肯定回答是Yes, I can.'
          },
          {
            id: 'e5u4l3q3',
            type: 'choice',
            question: '— Can you ski? — No, I ____.',
            options: ['can\'t', 'don\'t', 'am not', 'not'],
            answer: 'can\'t',
            hint: '否定回答用No, I can\'t.',
            explanation: 'Can you...?的否定回答是No, I can\'t. can\'t = cannot'
          },
          {
            id: 'e5u4l3q4',
            type: 'fill',
            question: '— Can she dance? — Yes, she ____. (能)',
            answer: 'can',
            hint: '回答要与问句的主语一致',
            explanation: '问Can she...?回答she can/can\'t。Yes, she can.'
          },
          {
            id: 'e5u4l3q5',
            type: 'choice',
            question: 'can\'t is short for ____.',
            options: ['can not', 'could not', 'do not', 'will not'],
            answer: 'can not',
            hint: 'can\'t是哪两个词的缩写？',
            explanation: 'can\'t是can not的缩写，表示"不能、不会"'
          },
          {
            id: 'e5u4l3q6',
            type: 'fill',
           question: '— Can they speak English? — No, they ____. (不能)',
            answer: 'can\'t',
            acceptableAnswers: ['cannot', 'cant'],
            hint: '否定回答与问句主语一致',
            explanation: '问Can they...?否定回答they can\'t。No, they can\'t.'
          },
          {
            id: 'e5u4l3q7',
            type: 'choice',
            question: 'Which is the correct negative answer to "Can you sing?"',
            options: ['No, I can\'t.', 'No, I don\'t.', 'No, I isn\'t.', 'No, I not.'],
            answer: 'No, I can\'t.',
            hint: '[能力问答]（英语五年级-第4单元）',
            explanation: 'Can you...?的否定回答是No, I can\'t.用can\'t回答'
          }
        ]
      },
      {
        id: 'e5u4l4',
        title: '才艺展示会——I Can Show!',
        order: 4,
        teachingMethod: '综合展示法',
        learningObjective: '我能综合运用才艺词汇和I can句型展示自己的才艺',
        successCriteria: '①能用I can...介绍才艺 ②能展示一个才艺并描述',
        iDo: '家长示范展示才艺并描述："I can sing. Let me show you!" 唱一小段歌',
        weDo: '亲子一起练习展示才艺，互相用英语介绍并展示一项才艺',
        youDo: '孩子独立用英语介绍并展示一项才艺，用I can...句型描述',
        parentTips: '【家长预习】本课核心：才艺展示I can sing. Let me show you!（我会唱歌，让我展示给你看）。\n共学四步：\n①对话出题：家长说I can sing. Let me show you!并唱一小段，问孩子Show me your talent!。\n②孩子应答：孩子应说I can dance. Let me show you!。\n③答错引导：若孩子说不出，家长当同学一起演！扫描课时发音动画复习；让孩子点读课件情景卡；家长当同学一起展示，互相鼓励。\n④快速检测：1.孩子用I can...介绍才艺；2.展示一个才艺；3.说Let me show you!。',
        funElement: '举办"家庭才艺秀"，每人展示一项才艺并用英语介绍',
        gsapAnimations: ['GSAP:展示完成撒花-confetti', 'GSAP:才艺图标弹出-stagger', 'GSAP:展示步骤展开-timeline'],
        images: ['IMG:才艺展示舞台', 'IMG:I Can Show场景图'],
        content: [
          { type: 'text', content: 'It\'s time for the Talent Show! Use "I can..." to introduce your talent, then show it to everyone!', animationType: 'reveal' },
          { type: 'example', content: 'Talent Show Introduction:\nHello, everyone! My name is Tom.\nI can sing.\nLet me show you! 🎤\n(sings a song)\nThank you!', label: '才艺展示模板', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Host: Welcome to our Talent Show! Tom, what can you do?\nTom: I can sing. Let me show you!\nHost: Great! Amy, what about you?\nAmy: I can dance. Watch me!\nHost: Wonderful! Can anyone cook?\nTom: I can\'t cook, but I can make fruit salad.', label: '才艺展示会对话', animationType: 'timeline' },
          { type: 'tip', content: '展示才艺时说Let me show you!（让我展示给你看！）Watch me!（看我！）来引起注意。', label: '展示用语', animationType: 'pulse' },
          { type: 'example', content: 'Let me show you! — 让我展示给你看！\nWatch me! — 看我！\nLook at this! — 看这个！\nHere I go! — 我开始啦！\nThank you! — 谢谢！', label: '展示常用语', animationType: 'sequence' },
          { type: 'tip', content: '展示结束后要说Thank you!感谢观众。如果不会某项才艺可以说I can\'t...but I can...来转折。', label: '礼仪与转折', animationType: 'pulse' },
          { type: 'animation', content: '才艺展示会场景动画，配合撒花效果', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Talent Show', cardRevealConfig: { cards: [ { front: 'Sing', back: '🎤', ttsText: 'I can sing. Let me show you!' }, { front: 'Dance', back: '💃', ttsText: 'I can dance. Watch me!' }, { front: 'Swim', back: '🏊', ttsText: 'I can swim. Look at me!' }, { front: 'Cook', back: '🍳', ttsText: 'I can cook. Here I go!' } ] }, ttsNarration: '才艺展示：我会唱歌、跳舞、游泳、做饭' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u4l4q1',
            type: 'choice',
            question: 'What do you say before showing your talent?',
            options: ['Let me show you!', 'Goodbye!', 'I can\'t.', 'Who are you?'],
            answer: 'Let me show you!',
            hint: '展示才艺前引起注意的话',
            explanation: 'Let me show you!表示"让我展示给你看！"是展示才艺前的常用语'
          },
          {
            id: 'e5u4l4q2',
            type: 'fill',
            question: 'After the show, you should say "____ you!" (谢谢)',
            answer: 'Thank',
            hint: '展示结束后要感谢观众',
            explanation: 'Thank you!表示感谢，展示才艺后要礼貌地说Thank you!'
          },
          {
            id: 'e5u4l4q3',
            type: 'choice',
            question: 'I can\'t cook, ____ I can make sandwiches. (用转折连词)',
            options: ['but', 'and', 'or', 'so'],
            answer: 'but',
            hint: '不会做饭但会做三明治，用什么连词？',
            explanation: 'but表示转折，I can\'t cook, but I can make sandwiches.我不会做饭但会做三明治'
          },
          {
            id: 'e5u4l4q4',
            type: 'fill',
            question: '____ me! I can dance. (看)',
            answer: 'Watch',
            hint: '让人看你的才艺',
            explanation: 'Watch me!表示"看我！"是展示才艺时引起注意的用语'
          },
          {
            id: 'e5u4l4q5',
            type: 'choice',
            question: 'Which is a complete talent show introduction?',
            options: ['Hello! I can sing. Let me show you!', 'Sing I can.', 'I sing can show.', 'Can sing I show.'],
            answer: 'Hello! I can sing. Let me show you!',
            hint: '完整的介绍包括打招呼、说才艺和展示',
            explanation: '完整的才艺介绍：Hello! + I can... + Let me show you!'
          },
          {
            id: 'e5u4l4q6',
            type: 'fill',
            question: 'Here I ____! Let me dance for you. (去/开始)',
            answer: 'go',
            hint: '表示"我开始啦"',
            explanation: 'Here I go!表示"我开始啦！"是展示才艺前的用语'
          },
          {
            id: 'e5u4l4q7',
            type: 'choice',
            question: '— Can you swim? — Yes, I ____. Let me show you!',
            options: ['can', 'do', 'am', 'have'],
            answer: 'can',
            hint: '[能力问答]（英语五年级-第4单元）',
            explanation: 'Can you...?的肯定回答用can，Yes, I can. Let me show you!'
          }
        ]
      },
      {
        id: 'e5u4l5',
        title: '第四单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能通过第四单元综合检测，巩固才艺词汇和can句型',
        successCriteria: '①能完成才艺词汇题 ②能完成can句型问答题',
        iDo: '家长示范检测流程，讲解题型和要求，示范答题方法',
        weDo: '亲子一起练习几道样题，家长引导孩子分析题目',
        youDo: '孩子独立完成单元检测，包括才艺词汇、can句型和问答题',
        parentTips: '【家长预习】本课核心：第四单元综合检测，包括才艺词汇、I can句型、Can you问答。\n共学四步：\n①对话出题：家长说我们来做第四单元检测，先复习一下。。\n②孩子应答：孩子应说sing, dance, swim, cook!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子完成单元检测；2.正确率达80%；3.错题订正。',
        funElement: '通关后获得Ability达人徽章，庆祝学习成果',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:答题反馈-stagger', 'GSAP:徽章飞入-starFlyIn'],
        images: ['IMG:Ability达人徽章', 'IMG:综合检测场景图'],
        content: [
          { type: 'text', content: 'Time for the Unit 4 test! Let\'s review: ability words, I can..., Can you...?, and the Talent Show.', animationType: 'reveal' },
          { type: 'example', content: 'Review List:\n1. Abilities: sing, dance, swim, cook, draw, play basketball\n2. Pattern: I can + verb (can没有人称变化)\n3. Question: Can you...? Yes, I can. / No, I can\'t.\n4. Show: Let me show you! / Watch me! / Thank you!', label: '单元复习要点', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What can you do?\nAmy: I can sing and dance. Can you swim?\nTom: Yes, I can. I can also play basketball.\nAmy: Can you cook?\nTom: No, I can\'t. But I can draw.\nAmy: Let\'s have a Talent Show!\nTom: Great idea!', label: '综合对话复习', animationType: 'timeline' },
          { type: 'tip', content: '检测重点：1.能认读才艺词汇 2.能用I can句型表达 3.能用Can you问答 4.能做才艺展示介绍', label: '检测要点', animationType: 'pulse' },
          { type: 'example', content: 'Key Sentences:\nI can sing. / I can\'t cook.\nCan you swim? Yes, I can.\nCan she dance? No, she can\'t.\nLet me show you! Thank you!', label: '核心句型复习', animationType: 'sequence' },
          { type: 'tip', content: '答题技巧：can后加动词原形，can\'t = can not，疑问句把can提前，回答主语与问句一致。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '检测通关撒花动画，配合徽章出现', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Ability Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Test complete' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Badge', back: '🏅', ttsText: 'Ability badge earned' } ] }, ttsNarration: '检测完成，恭喜通关，获得Ability达人徽章' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u4l5q1',
            type: 'choice',
            question: 'Which word means moving your body to music?',
            options: ['dance', 'cook', 'swim', 'sing'],
            answer: 'dance',
            hint: '跟着音乐移动身体的才艺',
            explanation: 'dance是跳舞，跟着音乐节奏移动身体的才艺'
          },
          {
            id: 'e5u4l5q2',
            type: 'fill',
            question: 'I ____ play the piano. I practice every day. (会/能)',
            answer: 'can',
            hint: '表示"会、能"的情态动词',
            explanation: 'can表示"会、能"，I can play the piano.表示我会弹钢琴'
          },
          {
            id: 'e5u4l5q3',
            type: 'choice',
            question: '— Can you cook? — No, I ____.',
            options: ['can\'t', 'don\'t', 'am not', 'not can'],
            answer: 'can\'t',
            hint: 'Can you...?的否定回答',
            explanation: 'Can you...?的否定回答是No, I can\'t.'
          },
          {
            id: 'e5u4l5q4',
            type: 'fill',
            question: 'Can he swim? Yes, he ____. (能)',
            answer: 'can',
            hint: '回答与问句主语一致',
            explanation: '问Can he...?肯定回答he can。Yes, he can.'
          },
          {
            id: 'e5u4l5q5',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['She can sing.', 'She cans sing.', 'She can sings.', 'She can to sing.'],
            answer: 'She can sing.',
            hint: 'can后加动词原形，can不加s',
            explanation: 'can后加动词原形sing，can没有人称变化不加s，She can sing.'
          },
          {
            id: 'e5u4l5q6',
            type: 'fill',
            question: 'I can\'t cook, ____ I can make sandwiches. (但是)',
            answer: 'but',
            hint: '表示转折的连词',
            explanation: 'but表示转折，I can\'t cook, but I can make sandwiches.我不会做饭但会做三明治'
          },
          {
            id: 'e5u4l5q7',
            type: 'choice',
            question: 'What do you say to start your talent show?',
            options: ['Let me show you!', 'I don\'t know.', 'Who is he?', 'What day is it?'],
            answer: 'Let me show you!',
            hint: '[才艺展示]（英语五年级-第4单元）',
            explanation: 'Let me show you!是展示才艺时的常用语，表示"让我展示给你看！"'
          }
        ]
      }
    ]
  },
  // ==================== 第五单元：My New Room ====================
  {
    id: 'e5u5',
    title: 'My New Room',
    subtitle: '房间物品与位置，There is/are...句型',
    order: 5,
    lessons: [
      {
        id: 'e5u5l1',
        title: '家具词汇：bed/desk/chair/closet',
        order: 1,
        teachingMethod: '情境式：房间布置',
        learningObjective: '我能说出bed/desk/chair/closet等家具词汇',
        successCriteria: '①能说出6个家具词汇 ②能用This is my...介绍家具',
        iDo: '家长出示房间图，指着家具说单词：bed, desk, chair, closet, lamp, bookshelf',
        weDo: '亲子一起认读家具词汇，家长说中文孩子指物说英文，再互换',
        youDo: '孩子独立辨认房间里的家具，说出英文单词和中文意思',
        parentTips: '【家长预习】本课核心：家具词汇bed（床）、desk（书桌）、chair（椅子）、closet（衣柜）、lamp（台灯）、bookshelf（书架）。\n共学四步：\n①对话出题：家长指床问What\'s this?并说It\'s a bed.。\n②孩子应答：孩子应说It\'s a desk!。\n③答错引导：若孩子说不出，家长当同学一起认！扫描课时发音动画听发音；让孩子点读课件家具卡；家长指房间家具边指边说英语。\n④快速检测：1.孩子说出6个家具词；2.用This is my...造句；3.说出房间里的家具。',
        funElement: '玩"房间寻宝"游戏，找到家具大声说出英文单词',
        gsapAnimations: ['GSAP:房间家具逐步出现-sceneBuild', 'GSAP:家具卡片弹出-cardReveal', 'GSAP:词汇高亮-highlight'],
        images: ['IMG:房间家具图', 'IMG:bed/desk/chair/closet词汇卡'],
        content: [
          { type: 'text', content: 'Welcome to my new room! Let\'s learn furniture words: bed, desk, chair, closet, lamp, bookshelf.', animationType: 'reveal' },
          { type: 'example', content: 'bed — 床\ndesk — 书桌\nchair — 椅子\ncloset — 衣柜\nlamp — 台灯\nbookshelf — 书架\nwindow — 窗户\ndoor — 门', label: '家具词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Is this your new room?\nAmy: Yes! Look, there is a bed and a desk.\nTom: I see a chair and a closet too.\nAmy: And there is a lamp on the desk.\nTom: Your room is nice!', label: '参观房间对话', animationType: 'timeline' },
          { type: 'tip', content: 'closet是美式英语（衣柜），英式英语用wardrobe。bookshelf是书架，也可以说bookcase。', label: '词汇拓展', animationType: 'pulse' },
          { type: 'example', content: 'This is my bed. 这是我的床。\nI study at my desk. 我在书桌前学习。\nI sit on my chair. 我坐在椅子上。\nMy clothes are in the closet. 我的衣服在衣柜里。', label: '家具例句', animationType: 'sequence' },
          { type: 'tip', content: '注意介词搭配：on the desk（在桌上），in the closet（在衣柜里），on the bed（在床上）。', label: '介词搭配', animationType: 'pulse' },
          { type: 'animation', content: '房间家具逐步出现动画，构建完整房间场景', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'My New Room', sceneBuildConfig: { sceneName: 'Room', elements: [ { id: 'el-0', text: 'bed', emoji: '🛏', delay: 0, animation: 'bounceIn', ttsText: 'bed, 床' }, { id: 'el-1', text: 'desk', emoji: ' desk', delay: 0.4, animation: 'popIn', ttsText: 'desk, 书桌' }, { id: 'el-2', text: 'chair', emoji: '🪑', delay: 0.8, animation: 'scaleIn', ttsText: 'chair, 椅子' }, { id: 'el-3', text: 'closet', emoji: '🚪', delay: 1.2, animation: 'fadeIn', ttsText: 'closet, 衣柜' }, { id: 'el-4', text: 'lamp', emoji: '💡', delay: 1.6, animation: 'popIn', ttsText: 'lamp, 台灯' } ] }, ttsNarration: '家具词汇：床、书桌、椅子、衣柜、台灯' } },
          {
            type: 'tip',
            content: '合成词记忆法：家具里也有合成词！book（书）+shelf（架子）=bookshelf（书架），book（书）+case（箱子）=bookcase（书柜）。遇到长单词试着拆开看，意思就猜出来啦！closet（衣柜）和close（关闭）有关——衣柜是可以关闭的柜子。',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u5l1q1',
            type: 'choice',
            question: 'Where do you sleep at night?',
            options: ['bed', 'desk', 'chair', 'closet'],
            answer: 'bed',
            hint: '晚上睡觉的地方',
            explanation: 'bed是床，晚上在床上睡觉'
          },
          {
            id: 'e5u5l1q2',
            type: 'fill',
            question: 'I do my homework at my ____. (书桌)',
            answer: 'desk',
            hint: '做作业的地方',
            explanation: 'desk是书桌，在书桌前做作业'
          },
          {
            id: 'e5u5l1q3',
            type: 'choice',
            question: 'Where do you keep your clothes?',
            options: ['closet', 'bed', 'desk', 'chair'],
            answer: 'closet',
            hint: '放衣服的家具',
            explanation: 'closet是衣柜，用来存放衣服'
          },
          {
            id: 'e5u5l1q4',
            type: 'fill',
            question: 'I sit on a ____ to read books. (椅子)',
            answer: 'chair',
            hint: '坐着读书的家具',
            explanation: 'chair是椅子，坐在椅子上面读书'
          },
          {
            id: 'e5u5l1q5',
            type: 'choice',
            question: 'Which item gives light for reading?',
            options: ['lamp', 'bed', 'chair', 'closet'],
            answer: 'lamp',
            hint: '【期末真题】提供光线方便阅读的物品',
            explanation: 'lamp是台灯，提供光线方便阅读'
          },
          {
            id: 'e5u5l1q6',
            type: 'fill',
            question: 'My books are on the ____. It has many shelves. (书架)',
            answer: 'bookshelf',
            acceptableAnswers: ['bookcase'],
            hint: '放书的家具，有很多层',
            explanation: 'bookshelf是书架，有很多层隔板用来放书'
          },
          {
            id: 'e5u5l1q7',
            type: 'choice',
            question: 'Which word is a piece of furniture?',
            options: ['bed', 'sing', 'Monday', 'kind'],
            answer: 'bed',
            hint: '[家具词汇]（英语五年级-第5单元）',
            explanation: 'bed是床，属于家具。sing是才艺，Monday是星期，kind是性格词'
          }
        ]
      },
      {
        id: 'e5u5l2',
        title: 'There is/are... 存在句型',
        order: 2,
        teachingMethod: '情境式教学法',
        learningObjective: '我能用There is/There are描述房间里有什么',
        successCriteria: '①能区分There is和There are ②能用There is/are描述房间',
        iDo: '家长示范There is/are句型："There is a bed. There are two chairs." 配合指物',
        weDo: '亲子一起用There is/are描述房间，家长说一句孩子跟一句，互换角色',
        youDo: '孩子独立用There is/are句型描述自己的房间',
        parentTips: '【家长预习】本课核心：There be句型There is a bed.（有一张床）、There are two chairs.（有两把椅子），单数is复数are。\n共学四步：\n①对话出题：家长指床说There is a bed.，问孩子What\'s in your room?。\n②孩子应答：孩子应说There is a desk. There are chairs.。\n③答错引导：若孩子说不出，家长当同学一起说！扫描课时发音动画听发音；让孩子点读课件句子卡；家长指房间物品边说边比划。\n④快速检测：1.孩子区分is/are；2.用There is造句；3.用There are造句。',
        funElement: '玩"找不同"游戏，看两张房间图找不同，用There is/are描述',
        gsapAnimations: ['GSAP:房间物品逐一出现-timeline', 'GSAP:句子高亮-highlight', 'GSAP:物品图标弹出-stagger'],
        images: ['IMG:There is/are句型图', 'IMG:单数vs复数对比图'],
        content: [
          { type: 'text', content: 'There is + 单数名词 = 有一个... There are + 复数名词 = 有一些... 用来描述某处有什么。', animationType: 'reveal' },
          { type: 'example', content: 'There is a bed. — 有一张床。\nThere is a desk. — 有一张书桌。\nThere are two chairs. — 有两把椅子。\nThere are three books. — 有三本书。\nThere is a lamp on the desk. — 桌上有一盏台灯。', label: 'There is/are句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s in your room?\nAmy: There is a bed and a desk. There are two chairs.\nTom: Is there a closet?\nAmy: Yes, there is a big closet.\nTom: Are there any books?\nAmy: Yes, there are many books on the bookshelf.', label: '描述房间对话', animationType: 'timeline' },
          { type: 'tip', content: '单数用There is a...，复数用There are...（数字+复数名词）。注意a/an的选择：There is an apple.', label: '单复数规则', animationType: 'pulse' },
          { type: 'example', content: 'There is a bed. → Is there a bed? Yes, there is.\nThere are chairs. → Are there chairs? Yes, there are.\nThere is a lamp. → Is there a lamp? No, there isn\'t.\nThere are books. → Are there books? No, there aren\'t.', label: '陈述变疑问', animationType: 'sequence' },
          { type: 'tip', content: '疑问句把is/are提前：Is there...? / Are there...? 肯定回答Yes, there is/are. 否定回答No, there isn\'t/aren\'t.', label: '疑问句变化', animationType: 'pulse' },
          { type: 'animation', content: '房间物品逐一出现配合There is/are句子动画', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'There is/are...', timelineConfig: { steps: [ { text: 'There is a bed.', ttsNarration: 'There is a bed.' }, { text: 'There is a desk.', ttsNarration: 'There is a desk.' }, { text: 'There are two chairs.', ttsNarration: 'There are two chairs.' }, { text: 'There are three books.', ttsNarration: 'There are three books.' } ] }, ttsNarration: '存在句型：有一张床、一张书桌、两把椅子、三本书' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u5l2q1',
            type: 'choice',
            question: '____ a bed in my room.',
            options: ['There is', 'There are', 'There has', 'There have'],
            answer: 'There is',
            hint: 'bed是单数，用什么句型？',
            explanation: 'bed是单数名词，用There is a bed.表示有一张床'
          },
          {
            id: 'e5u5l2q2',
            type: 'fill',
            question: 'There ____ two chairs in the room. (are/is)',
            answer: 'are',
            hint: 'two chairs是复数',
            explanation: 'two chairs是复数，用There are。There are two chairs.有两把椅子'
          },
          {
            id: 'e5u5l2q3',
            type: 'choice',
            question: '____ there a lamp on the desk? — Yes, there is.',
            options: ['Is', 'Are', 'Do', 'Does'],
            answer: 'Is',
            hint: 'lamp是单数',
            explanation: 'lamp是单数，疑问句用Is there...? Is there a lamp on the desk?桌上有一盏台灯吗？'
          },
          {
            id: 'e5u5l2q4',
            type: 'fill',
            question: '— Are there any books? — Yes, there ____. (are/is)',
            answer: 'are',
            hint: 'books是复数',
            explanation: 'books是复数，肯定回答用Yes, there are.'
          },
          {
            id: 'e5u5l2q5',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['There are three books on the desk.', 'There is three books on the desk.', 'There has three books on the desk.', 'There three books on the desk.'],
            answer: 'There are three books on the desk.',
            hint: 'three books是复数',
            explanation: 'three books是复数，用There are。There are three books on the desk.'
          },
          {
            id: 'e5u5l2q6',
            type: 'fill',
            question: 'There is ____ apple on the table. (用a或an)',
            answer: 'an',
            hint: 'apple以元音音素开头',
            explanation: 'apple以元音音素开头，用an。There is an apple.有一个苹果'
          },
          {
            id: 'e5u5l2q7',
            type: 'choice',
            question: '— Is there a closet in your room? — Yes, ____.',
            options: ['there is', 'there are', 'it is', 'there has'],
            answer: 'there is',
            hint: '[存在句型]（英语五年级-第5单元）',
            explanation: 'Is there...?的肯定回答是Yes, there is.保持is不变'
          }
        ]
      },
      {
        id: 'e5u5l3',
        title: '位置介词：in front of/behind/beside',
        order: 3,
        teachingMethod: 'TPR全身反应法+实物演示',
        learningObjective: '我能用in front of/behind/beside等介词描述位置',
        successCriteria: '①能说出3个位置介词 ②能用The...is...描述位置',
        iDo: '家长放物品在不同位置说介词：in front of（前面）、behind（后面）、beside（旁边）',
        weDo: '亲子一起放物品在不同位置，说出位置介词，互换角色',
        youDo: '孩子独立描述物品的位置，用正确的位置介词',
        parentTips: '【家长预习】本课核心：位置介词in front of（前面）、behind（后面）、beside（旁边），句型The bed is beside the desk.。\n共学四步：\n①对话出题：家长把书放桌前问Where is the book?并说It\'s in front of the desk.。\n②孩子应答：孩子应说It\'s behind the desk.。\n③答错引导：若孩子说不出，家长当同学一起摆！扫描课时发音动画听发音；让孩子点读课件介词卡；家长用真实物品边摆边说位置。\n④快速检测：1.孩子说出3个介词；2.用in front of造句；3.用behind造句。',
        funElement: '玩"机器人指令"游戏，一人说位置指令另一人把物品放到对应位置',
        gsapAnimations: ['GSAP:物品在不同位置出现-sceneBuild', 'GSAP:位置标签弹出-stagger', 'GSAP:介词高亮-highlight'],
        images: ['IMG:位置介词图', 'IMG:in front of/behind/beside示意图'],
        content: [
          { type: 'text', content: 'Let\'s learn position words: in front of (在...前面), behind (在...后面), beside (在...旁边), on (在...上面), under (在...下面).', animationType: 'reveal' },
          { type: 'example', content: 'in front of — 在...前面\nbehind — 在...后面\nbeside — 在...旁边/ next to\non — 在...上面\nunder — 在...下面\nbetween — 在...之间', label: '位置介词', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Where is your bed?\nAmy: The bed is in front of the window.\nTom: Where is the desk?\nAmy: The desk is beside the bed.\nTom: What\'s behind the door?\nAmy: There is a closet behind the door.\nTom: Is the lamp on the desk?\nAmy: Yes, it\'s on the desk.', label: '描述位置对话', animationType: 'timeline' },
          { type: 'tip', content: 'beside和next to意思相近，都表示"在...旁边"。between表示"在两者之间"：between A and B.', label: '介词辨析', animationType: 'pulse' },
          { type: 'example', content: 'The bed is in front of the window. 床在窗前面。\nThe desk is behind the door. 书桌在门后面。\nThe lamp is beside the computer. 台灯在电脑旁边。\nThe cat is under the bed. 猫在床下面。\nThe ball is between the chairs. 球在两把椅子之间。', label: '位置例句', animationType: 'sequence' },
          { type: 'tip', content: '描述位置的句型：A is + 位置介词 + B. 如：The book is on the desk. 书在桌上。', label: '位置句型', animationType: 'pulse' },
          { type: 'animation', content: '物品在不同位置出现动画，配合位置介词标签', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'Position Words', sceneBuildConfig: { sceneName: 'Positions', elements: [ { id: 'el-0', text: 'in front of', emoji: '⬆️', delay: 0, animation: 'bounceIn', ttsText: 'in front of, 在前面' }, { id: 'el-1', text: 'behind', emoji: '⬇️', delay: 0.4, animation: 'popIn', ttsText: 'behind, 在后面' }, { id: 'el-2', text: 'beside', emoji: '↔️', delay: 0.8, animation: 'scaleIn', ttsText: 'beside, 在旁边' }, { id: 'el-3', text: 'on', emoji: '🔝', delay: 1.2, animation: 'fadeIn', ttsText: 'on, 在上面' }, { id: 'el-4', text: 'under', emoji: '🔽', delay: 1.6, animation: 'popIn', ttsText: 'under, 在下面' } ] }, ttsNarration: '位置介词：前面、后面、旁边、上面、下面' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u5l3q1',
            type: 'choice',
            question: 'The cat is ____ the bed. You can\'t see it because the bed covers it.',
            options: ['under', 'on', 'in front of', 'beside'],
            answer: 'under',
            hint: '看不见说明在床的什么位置？',
            explanation: 'under是在...下面，猫在床下面所以看不见'
          },
          {
            id: 'e5u5l3q2',
            type: 'fill',
            question: 'The desk is ____ the window. You can see the garden when you study. (在...前面)',
            answer: 'in front of',
            hint: '能看到窗外的位置',
            explanation: 'in front of是在...前面，书桌在窗前面可以看到花园'
          },
          {
            id: 'e5u5l3q3',
            type: 'choice',
            question: 'The closet is ____ the door. You can\'t see it from here.',
            options: ['behind', 'on', 'under', 'in front of'],
            answer: 'behind',
            hint: '看不见说明在门的什么位置？',
            explanation: 'behind是在...后面，衣柜在门后面所以从这里看不见'
          },
          {
            id: 'e5u5l3q4',
            type: 'fill',
            question: 'The lamp is ____ the desk. It gives light for reading. (在...上面)',
            answer: 'on',
            hint: '台灯在书桌的什么位置？',
            explanation: 'on是在...上面，台灯在书桌上面'
          },
          {
            id: 'e5u5l3q5',
            type: 'choice',
            question: 'The chair is ____ the desk. They are next to each other.',
            options: ['beside', 'under', 'behind', 'between'],
            answer: 'beside',
            hint: '紧挨着、在旁边的位置',
            explanation: 'beside是在...旁边，椅子和书桌紧挨着'
          },
          {
            id: 'e5u5l3q6',
            type: 'fill',
            question: 'The ball is ____ the two chairs. (在...之间)',
            answer: 'between',
            hint: '在两个物品中间',
            explanation: 'between表示在两者之间，The ball is between the two chairs.球在两把椅子之间'
          },
          {
            id: 'e5u5l3q7',
            type: 'choice',
            question: 'Where is the book? — It is ____ the desk.',
            options: ['on', 'Monday', 'kind', 'sing'],
            answer: 'on',
            hint: '[位置介词]（英语五年级-第5单元）',
            explanation: 'on是位置介词（在...上面），其他选项分别是星期、性格词和才艺词'
          }
        ]
      },
      {
        id: 'e5u5l4',
        title: 'My Dream Room——描述理想房间',
        order: 4,
        teachingMethod: '项目式学习',
        learningObjective: '我能综合运用家具词汇、There be和介词描述理想房间',
        successCriteria: '①能用There be描述房间 ②能用介词说物品位置',
        iDo: '家长示范描述理想房间："In my dream room, there is a big bed..."',
        weDo: '亲子一起描述理想房间，共同讨论有什么家具和布局',
        youDo: '孩子独立描述自己的理想房间，用There is/are和位置介词',
        parentTips: '【家长预习】本课核心：描述理想房间In my dream room, there is a big bed. There is a lamp beside the bed.。\n共学四步：\n①对话出题：家长说In my dream room, there is a big bed.，问孩子What\'s in your dream room?。\n②孩子应答：孩子应说In my dream room, there is a desk and a lamp.。\n③答错引导：若孩子说不出，家长当同学一起画！扫描课时发音动画复习；让孩子点读课件情景卡；家长画理想房间边画边说。\n④快速检测：1.孩子用There be描述房间；2.用介词说位置；3.说3句以上。',
        funElement: '画"梦想房间"设计图，用英语标注家具和位置',
        gsapAnimations: ['GSAP:理想房间逐步构建-timeline', 'GSAP:家具图标弹出-stagger', 'GSAP:描述高亮-highlight'],
        images: ['IMG:理想房间模板', 'IMG:梦想房间设计图'],
        content: [
          { type: 'text', content: 'Let\'s describe our dream room! Use There is/are and position words to describe your ideal room.', animationType: 'reveal' },
          { type: 'example', content: 'My Dream Room:\nIn my dream room, there is a big bed.\nThere is a desk beside the window.\nThere are two chairs in front of the desk.\nThere is a bookshelf behind the door.\nThere is a lamp on the desk.\nI love my dream room!', label: '理想房间范文', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s in your dream room?\nAmy: In my dream room, there is a big bed and a pink desk.\nTom: Where is the desk?\nAmy: The desk is beside the window. There are flowers on it.\nTom: Is there a bookshelf?\nAmy: Yes, there is a bookshelf behind the door. There are many books on it.\nTom: Your dream room sounds wonderful!', label: '描述理想房间对话', animationType: 'timeline' },
          { type: 'tip', content: '描述房间时按顺序：先说有什么（There is/are），再说位置（位置介词），最后说感受。', label: '描述顺序', animationType: 'pulse' },
          { type: 'example', content: 'There is a big bed in my room.\nThe bed is in front of the window.\nThere are two chairs beside the desk.\nThere is a lamp on the desk.\nI love my room!', label: '描述模板', animationType: 'sequence' },
          { type: 'tip', content: '可以用形容词让描述更生动：a big bed（大床），a pink desk（粉色书桌），a nice lamp（好看的台灯）。', label: '添加形容词', animationType: 'pulse' },
          { type: 'animation', content: '理想房间逐步构建动画，家具逐一出现并标注位置', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'My Dream Room', timelineConfig: { steps: [ { text: 'There is a big bed.', ttsNarration: 'There is a big bed.' }, { text: 'The desk is beside the window.', ttsNarration: 'The desk is beside the window.' }, { text: 'There are two chairs.', ttsNarration: 'There are two chairs.' }, { text: 'There is a lamp on the desk.', ttsNarration: 'There is a lamp on the desk.' } ] }, ttsNarration: '理想房间：有一张大床、书桌在窗旁、两把椅子、桌上有一盏台灯' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u5l4q1',
            type: 'choice',
            question: 'Which sentence correctly describes a room?',
            options: ['There is a bed and a desk in my room.', 'Bed desk my room.', 'Is bed desk room.', 'My room bed desk has.'],
            answer: 'There is a bed and a desk in my room.',
            hint: '用There is句型描述',
            explanation: '用There is句型描述房间，There is a bed and a desk in my room.我的房间里有一张床和一张书桌'
          },
          {
            id: 'e5u5l4q2',
            type: 'fill',
            question: 'The desk is ____ the window. I can see the garden. (在...旁边)',
            answer: 'beside',
            acceptableAnswers: ['next to'],
            hint: '在窗户旁边',
            explanation: 'beside表示在...旁边，The desk is beside the window.书桌在窗户旁边'
          },
          {
            id: 'e5u5l4q3',
            type: 'choice',
            question: 'There ____ many books on the bookshelf.',
            options: ['are', 'is', 'has', 'have'],
            answer: 'are',
            hint: 'many books是复数',
            explanation: 'many books是复数，用There are。There are many books on the bookshelf.'
          },
          {
            id: 'e5u5l4q4',
            type: 'fill',
            question: 'There is a lamp ____ the desk. It helps me read. (在...上面)',
            answer: 'on',
            hint: '台灯在书桌上面',
            explanation: 'on表示在...上面，There is a lamp on the desk.桌上有一盏台灯'
          },
          {
            id: 'e5u5l4q5',
            type: 'choice',
            question: 'Which description uses both There is/are and a position word?',
            options: ['There is a bed beside the window.', 'There is a bed.', 'The bed is nice.', 'I have a bed.'],
            answer: 'There is a bed beside the window.',
            hint: '既用了There is又用了位置词',
            explanation: 'There is a bed beside the window.既用了There is句型又用了beside位置介词'
          },
          {
            id: 'e5u5l4q6',
            type: 'fill',
            question: 'In my ____ room, there is a big bed and a nice desk. (理想的/梦想的)',
            answer: 'dream',
            hint: '表示"梦想的"用什么词？',
            explanation: 'dream表示梦想的，my dream room表示我的梦想房间'
          },
          {
            id: 'e5u5l4q7',
            type: 'choice',
            question: '— Are there chairs in your room? — Yes, ____.',
            options: ['there are', 'there is', 'they are', 'it is'],
            answer: 'there are',
            hint: '[存在句型]（英语五年级-第5单元）',
            explanation: 'Are there...?的肯定回答是Yes, there are.保持are不变'
          }
        ]
      },
      {
        id: 'e5u5l5',
        title: '第五单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能通过第五单元综合检测，巩固家具词汇、There be和介词',
        successCriteria: '①能完成家具词汇题 ②能完成There be和介词句型题',
        iDo: '家长示范检测流程，讲解题型和要求，示范答题方法',
        weDo: '亲子一起练习几道样题，家长引导孩子分析题目',
        youDo: '孩子独立完成单元检测，包括家具词汇、There is/are和位置介题',
        parentTips: '【家长预习】本课核心：第五单元综合检测，包括家具词汇、There is/are句型、位置介词。\n共学四步：\n①对话出题：家长说我们来做第五单元检测，先复习一下。。\n②孩子应答：孩子应说bed, desk, chair, closet!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子完成单元检测；2.正确率达80%；3.错题订正。',
        funElement: '通关后获得Room达人徽章，庆祝学习成果',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:答题反馈-stagger', 'GSAP:徽章飞入-starFlyIn'],
        images: ['IMG:Room达人徽章', 'IMG:综合检测场景图'],
        content: [
          { type: 'text', content: 'Time for the Unit 5 test! Let\'s review: furniture words, There is/are..., position words, and describing a room.', animationType: 'reveal' },
          { type: 'example', content: 'Review List:\n1. Furniture: bed, desk, chair, closet, lamp, bookshelf\n2. Pattern: There is + 单数 / There are + 复数\n3. Position: in front of, behind, beside, on, under, between\n4. Description: There is a bed beside the window.', label: '单元复习要点', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s in your room?\nAmy: There is a bed, a desk and a closet.\nTom: Where is the desk?\nAmy: The desk is beside the window. There is a lamp on it.\nTom: Are there any chairs?\nAmy: Yes, there are two chairs in front of the desk.\nTom: Your room is great!', label: '综合对话复习', animationType: 'timeline' },
          { type: 'tip', content: '检测重点：1.能认读家具词汇 2.能用There is/are描述 3.能用位置介词描述位置 4.能综合描述房间', label: '检测要点', animationType: 'pulse' },
          { type: 'example', content: 'Key Sentences:\nThere is a bed in my room.\nThere are two chairs.\nThe desk is beside the window.\nIs there a lamp? Yes, there is.\nAre there books? Yes, there are.', label: '核心句型复习', animationType: 'sequence' },
          { type: 'tip', content: '答题技巧：单数用There is/Is there，复数用There are/Are there。位置介词后接名词或代词。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '检测通关撒花动画，配合徽章出现', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Room Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Test complete' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Badge', back: '🏅', ttsText: 'Room badge earned' } ] }, ttsNarration: '检测完成，恭喜通关，获得Room达人徽章' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u5l5q1',
            type: 'choice',
            question: 'Where do you keep your clothes?',
            options: ['closet', 'desk', 'chair', 'lamp'],
            answer: 'closet',
            hint: '放衣服的家具',
            explanation: 'closet是衣柜，用来存放衣服'
          },
          {
            id: 'e5u5l5q2',
            type: 'fill',
            question: 'There ____ a bed in my room. (is/are)',
            answer: 'is',
            hint: 'a bed是单数',
            explanation: 'a bed是单数，用There is。There is a bed in my room.'
          },
          {
            id: 'e5u5l5q3',
            type: 'choice',
            question: 'The cat is ____ the bed. We can\'t see it.',
            options: ['under', 'on', 'beside', 'in front of'],
            answer: 'under',
            hint: '看不见说明在床下',
            explanation: 'under是在...下面，猫在床下面所以看不见'
          },
          {
            id: 'e5u5l5q4',
            type: 'fill',
            question: '— Is there a lamp on the desk? — Yes, there ____. (is/are)',
            answer: 'is',
            hint: 'lamp是单数',
            explanation: 'Is there...?的肯定回答是Yes, there is.'
          },
          {
            id: 'e5u5l5q5',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['There are three chairs in the room.', 'There is three chairs in the room.', 'There has three chairs in the room.', 'There three chairs in the room.'],
            answer: 'There are three chairs in the room.',
            hint: 'three chairs是复数',
            explanation: 'three chairs是复数，用There are。There are three chairs in the room.'
          },
          {
            id: 'e5u5l5q6',
            type: 'fill',
            question: 'The desk is ____ front of the window. (在...前面)',
            answer: 'in',
            hint: 'in front of是固定搭配',
            explanation: 'in front of是固定搭配，in表示在...内部/范围内'
          },
          {
            id: 'e5u5l5q7',
            type: 'choice',
            question: '— Where is your bookshelf? — It is ____ the door.',
            options: ['behind', 'Monday', 'kind', 'sing'],
            answer: 'behind',
            hint: '[位置介词]（英语五年级-第5单元）',
            explanation: 'behind是位置介词（在...后面），其他选项不是位置介词'
          }
        ]
      }
    ]
  },
  // ==================== 第六单元：Nature Park ====================
  {
    id: 'e5u6',
    title: 'Nature Park',
    subtitle: '自然景观与环保，Is there...?/Are there...?句型',
    order: 6,
    lessons: [
      {
        id: 'e5u6l1',
        title: '自然词汇：river/lake/forest/mountain',
        order: 1,
        teachingMethod: '情境式：公园游览',
        learningObjective: '我能说出river/lake/forest/mountain等自然词汇',
        successCriteria: '①能说出6个自然词汇 ②能用There is a...描述景观',
        iDo: '家长出示公园图说词汇：river, lake, forest, mountain, sky, cloud',
        weDo: '亲子一起认读自然词汇，家长说中文孩子说英文，再互换',
        youDo: '孩子独立辨认自然景观，说出英文单词和中文意思',
        parentTips: '【家长预习】本课核心：自然词汇river（河流）、lake（湖泊）、forest（森林）、mountain（山）、sky（天空）、cloud（云）。\n共学四步：\n①对话出题：家长指图片问What can you see?并说I can see a river.。\n②孩子应答：孩子应说I can see a mountain!。\n③答错引导：若孩子说不出，家长当同学一起认！扫描课时发音动画听发音；让孩子点读课件景观卡；家长结合户外游玩经历边说边比划。\n④快速检测：1.孩子说出6个自然词；2.用There is a...造句；3.描述一个公园景观。',
        funElement: '玩"自然拼图"游戏，把景观图片和英文单词配对',
        gsapAnimations: ['GSAP:公园景观逐步出现-sceneBuild', 'GSAP:景观卡片弹出-cardReveal', 'GSAP:词汇高亮-highlight'],
        images: ['IMG:自然公园图', 'IMG:river/lake/forest/mountain词汇卡'],
        content: [
          { type: 'text', content: 'Welcome to the Nature Park! Let\'s learn nature words: river, lake, forest, mountain, sky, cloud, hill, flower.', animationType: 'reveal' },
          { type: 'example', content: 'river — 河流\nlake — 湖泊\nforest — 森林\nmountain — 山\nhill — 小山\nsky — 天空\ncloud — 云\nflower — 花\ntree — 树\ngrass — 草', label: '自然词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Look at the nature park!\nAmy: Wow! There is a big river and a lake.\nTom: I can see a forest on the mountain.\nAmy: The sky is blue with white clouds.\nTom: There are many flowers in the grass.\nAmy: It\'s so beautiful here!', label: '游览公园对话', animationType: 'timeline' },
          { type: 'tip', content: 'river是河流（流动的水），lake是湖泊（静止的水）。mountain是大山，hill是小山。', label: '词汇辨析', animationType: 'pulse' },
          { type: 'example', content: 'There is a river in the park. 公园里有一条河。\nThere is a lake near the mountain. 山附近有一个湖。\nThere is a forest on the hill. 小山上有一片森林。\nThere are clouds in the sky. 天空中有云。', label: '自然例句', animationType: 'sequence' },
          { type: 'tip', content: '描述自然景观常用There is/are句型：There is a river. There are trees. 与Unit 5的There is/are句型一致。', label: '句型回顾', animationType: 'pulse' },
          { type: 'animation', content: '公园景观逐步出现动画，构建自然公园场景', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'Nature Park', sceneBuildConfig: { sceneName: 'Nature Park', elements: [ { id: 'el-0', text: 'mountain', emoji: '⛰️', delay: 0, animation: 'bounceIn', ttsText: 'mountain, 山' }, { id: 'el-1', text: 'river', emoji: '🏞️', delay: 0.4, animation: 'popIn', ttsText: 'river, 河流' }, { id: 'el-2', text: 'forest', emoji: '🌲', delay: 0.8, animation: 'scaleIn', ttsText: 'forest, 森林' }, { id: 'el-3', text: 'lake', emoji: '🏞️', delay: 1.2, animation: 'fadeIn', ttsText: 'lake, 湖泊' }, { id: 'el-4', text: 'sky', emoji: '☁️', delay: 1.6, animation: 'popIn', ttsText: 'sky, 天空' } ] }, ttsNarration: '自然景观：山、河流、森林、湖泊、天空' } },
          {
            type: 'tip',
            content: '分类记忆法：自然景观分类记更清楚！水景类：river（河流，流动的水）、lake（湖泊，静止的水）；陆景类：mountain（大山）、hill（小山）、forest（森林）；天空类：sky（天空）、cloud（云）。想象一幅风景画，把词汇放进画中对应位置，画面感帮助记忆。mountain和hill的区别：mountain是大山，hill是小山。',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u6l1q1',
            type: 'choice',
            question: 'What is a large area of water surrounded by land?',
            options: ['lake', 'mountain', 'forest', 'sky'],
            answer: 'lake',
            hint: '被陆地包围的大片水域',
            explanation: 'lake是湖泊，被陆地包围的大片静止水域'
          },
          {
            id: 'e5u6l1q2',
            type: 'fill',
            question: 'A ____ flows from the mountain to the sea. (河流)',
            answer: 'river',
            hint: '从山流向海的水',
            explanation: 'river是河流，从山上流向大海的流动水域'
          },
          {
            id: 'e5u6l1q3',
            type: 'choice',
            question: 'What is a large area covered with trees?',
            options: ['forest', 'river', 'cloud', 'flower'],
            answer: 'forest',
            hint: '被树木覆盖的大片区域',
            explanation: 'forest是森林，被大量树木覆盖的大片区域'
          },
          {
            id: 'e5u6l1q4',
            type: 'fill',
            question: 'The ____ is very high. We can climb it. (山)',
            answer: 'mountain',
            hint: '很高、可以攀登的自然景观',
            explanation: 'mountain是山，很高大的自然地貌，可以攀登'
          },
          {
            id: 'e5u6l1q5',
            type: 'choice',
            question: 'Which is NOT a nature word?',
            options: ['desk', 'river', 'mountain', 'forest'],
            answer: 'desk',
            hint: '【期末真题】哪个不是自然景观？',
            explanation: 'desk是书桌（家具），不是自然景观。river/mountain/forest都是自然景观'
          },
          {
            id: 'e5u6l1q6',
            type: 'fill',
            question: 'There are white ____ in the blue sky. (云)',
            answer: 'clouds',
            acceptableAnswers: ['cloud'],
            hint: '天空中白色的东西',
            explanation: 'clouds是云，There are clouds in the sky.天空中有云'
          },
          {
            id: 'e5u6l1q7',
            type: 'choice',
            question: 'There is a ____ in the park. We can see fish in it.',
            options: ['river', 'Monday', 'kind', 'sing'],
            answer: 'river',
            hint: '[自然词汇]（英语五年级-第6单元）',
            explanation: 'river是河流，河里可以看到鱼。其他选项不是自然景观'
          }
        ]
      },
      {
        id: 'e5u6l2',
        title: 'Is there...? Are there any...?',
        order: 2,
        teachingMethod: '情境对话法',
        learningObjective: '我能用Is there...?/Are there...?询问并回答自然景观',
        successCriteria: '①能用Is there...?提问 ②能用Yes, there is./No回答',
        iDo: '家长示范问答："Is there a river? Yes, there is." "Are there any fish? Yes, there are."',
        weDo: '亲子一起做问答练习，家长问公园里有什么，孩子回答，互换角色',
        youDo: '孩子独立用Is there/Are there句型询问公园里的自然景观',
        parentTips: '【家长预习】本课核心：疑问句Is there a river?（有河吗）、Are there any fish?（有鱼吗），回答Yes, there is/are. No, there isn\'t/aren\'t.。\n共学四步：\n①对话出题：家长指图片问Is there a river?。\n②孩子应答：孩子应说Yes, there is.或No, there isn\'t.。\n③答错引导：若孩子说不出，家长当同学一起问！扫描课时发音动画听发音；让孩子点读课件对话卡；家长指图片边问边答。\n④快速检测：1.孩子用Is there...?提问；2.回答Yes, there is；3.用Are there...?提问。',
        funElement: '玩"公园探险"游戏，一人问Is there/Are there另一人回答',
        gsapAnimations: ['GSAP:问答对话展开-timeline', 'GSAP:答案高亮-highlight', 'GSAP:景观图标弹出-stagger'],
        images: ['IMG:公园问答场景', 'IMG:Is there/Are there对话图'],
        content: [
          { type: 'text', content: 'Is there a...? 询问单数物品是否存在。Are there any...? 询问复数物品是否存在。用any表示"一些"（用于疑问和否定句）。', animationType: 'reveal' },
          { type: 'example', content: 'Is there a river? — 有河吗？\nYes, there is. — 有。\nNo, there isn\'t. — 没有。\nAre there any fish? — 有鱼吗？\nYes, there are. — 有。\nNo, there aren\'t. — 没有。', label: 'Is/Are there句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Is there a river in the park?\nAmy: Yes, there is. It\'s very long.\nTom: Are there any fish in the river?\nAmy: Yes, there are many fish.\nTom: Is there a forest?\nAmy: Yes, there is a forest on the mountain.\nTom: Are there any flowers?\nAmy: Yes, there are beautiful flowers everywhere.', label: '公园问答对话', animationType: 'timeline' },
          { type: 'tip', content: '疑问句中复数名词前用any：Are there any fish? 肯定句中用some：There are some fish. 但any也可用于肯定句表示"任何"。', label: 'some/any用法', animationType: 'pulse' },
          { type: 'example', content: 'Is there a mountain? Yes, there is.\nIs there a lake? No, there isn\'t.\nAre there any trees? Yes, there are.\nAre there any birds? No, there aren\'t.', label: '单复数问答', animationType: 'sequence' },
          { type: 'tip', content: 'fish单复数同形：one fish, two fish。但说不同种类的鱼可用fishes（较少见）。', label: 'fish单复数', animationType: 'pulse' },
          { type: 'animation', content: '问答对话逐步展开动画，配合景观图标出现', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Is there...? Are there...?', timelineConfig: { steps: [ { text: 'Is there a river? Yes, there is.', ttsNarration: 'Is there a river? Yes, there is.' }, { text: 'Are there any fish? Yes, there are.', ttsNarration: 'Are there any fish? Yes, there are.' }, { text: 'Is there a forest? Yes, there is.', ttsNarration: 'Is there a forest? Yes, there is.' }, { text: 'Are there any flowers? Yes, there are.', ttsNarration: 'Are there any flowers? Yes, there are.' } ] }, ttsNarration: '公园问答：有河吗？有。有鱼吗？有。有森林吗？有。有花吗？有。' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u6l2q1',
            type: 'choice',
            question: '____ there a lake in the park? — Yes, there is.',
            options: ['Is', 'Are', 'Do', 'Does'],
            answer: 'Is',
            hint: 'a lake是单数',
            explanation: 'a lake是单数，用Is there...? Is there a lake in the park?公园里有湖吗？'
          },
          {
            id: 'e5u6l2q2',
            type: 'fill',
            question: '— Are there ____ fish in the river? — Yes, there are. (一些，疑问句)',
            answer: 'any',
            hint: '疑问句中复数名词前用什么词？',
            explanation: '疑问句中复数名词前用any，Are there any fish?有鱼吗？'
          },
          {
            id: 'e5u6l2q3',
            type: 'choice',
            question: '— Is there a forest? — No, there ____.',
            options: ['isn\'t', 'aren\'t', 'don\'t', 'doesn\'t'],
            answer: 'isn\'t',
            hint: 'Is there的否定回答',
            explanation: 'Is there...?的否定回答是No, there isn\'t.'
          },
          {
            id: 'e5u6l2q4',
            type: 'fill',
            question: '— Are there any birds? — Yes, there ____. (are/is)',
            answer: 'are',
            hint: 'birds是复数',
            explanation: 'birds是复数，Are there...?的肯定回答是Yes, there are.'
          },
          {
            id: 'e5u6l2q5',
            type: 'choice',
            question: 'Which question is correct for asking about multiple trees?',
            options: ['Are there any trees?', 'Is there any trees?', 'Are there a trees?', 'Is there trees?'],
            answer: 'Are there any trees?',
            hint: 'trees是复数，用Are there any...?',
            explanation: 'trees是复数，用Are there any trees?有树吗？'
          },
          {
            id: 'e5u6l2q6',
            type: 'fill',
            question: '— Is there a mountain? — Yes, there ____. (is/are)',
            answer: 'is',
            hint: 'mountain是单数',
            explanation: 'mountain是单数，Is there...?的肯定回答是Yes, there is.'
          },
          {
            id: 'e5u6l2q7',
            type: 'choice',
            question: '— Are there any flowers in the park? — Yes, ____.',
            options: ['there are', 'there is', 'they are', 'it is'],
            answer: 'there are',
            hint: '[存在句型]（英语五年级-第6单元）',
            explanation: 'Are there...?的肯定回答是Yes, there are.复数用are'
          }
        ]
      },
      {
        id: 'e5u6l3',
        title: '自然景观描述——短文阅读',
        order: 3,
        teachingMethod: '分级阅读法',
        learningObjective: '我能阅读自然景观短文并理解大意和细节',
        successCriteria: '①能读懂短文大意 ②能找出文中细节信息',
        iDo: '家长示范读短文，逐句翻译，用手指指读示范',
        weDo: '亲子一起读短文，家长读一句孩子跟一句，讨论短文内容',
        youDo: '孩子独立读短文并回答问题，用There is/are描述',
        parentTips: '【家长预习】本课核心：阅读自然景观短文，用There is/are描述公园，找出细节信息。\n共学四步：\n①对话出题：家长说我们一起读一篇关于公园的短文。并读第一句。\n②孩子应答：孩子应跟读并说出大意。\n③答错引导：若孩子读不出，家长当同学一起读！扫描课时发音动画听发音；让孩子点读课件短文卡；家长逐句带孩子读，用手指指读。\n④快速检测：1.孩子读短文；2.说出大意；3.找2个细节。',
        funElement: '读"自然公园"短文后画一幅画，把短文中的景观画出来',
        gsapAnimations: ['GSAP:短文逐句高亮-highlight', 'GSAP:句子逐个出现-stagger', 'GSAP:关键词弹出-cardReveal'],
        images: ['IMG:自然短文配图', 'IMG:阅读理解场景图'],
        content: [
          { type: 'text', content: 'Let\'s read a short passage about a nature park! Practice reading and understanding.', animationType: 'reveal' },
          { type: 'example', content: 'Reading Passage:\nThis is a nature park. It is very big and beautiful. There is a long river in the park. There is a lake near the mountain. There are many trees in the forest. There are some fish in the river. There are beautiful flowers everywhere. I love this nature park!', label: '自然公园短文', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s in the nature park?\nAmy: There is a river and a lake.\nTom: Are there any fish?\nAmy: Yes, there are some fish in the river.\nTom: Is there a forest?\nAmy: Yes, there is a forest with many trees.\nTom: It sounds beautiful!\nAmy: Yes, there are flowers everywhere.', label: '讨论短文内容', animationType: 'timeline' },
          { type: 'tip', content: '阅读技巧：先通读全文了解大意，再带着问题找细节。用There is/are找文中描述的景观。', label: '阅读策略', animationType: 'pulse' },
          { type: 'example', content: 'Reading Questions:\n1. What is in the park? (a river and a lake)\n2. Are there fish? (Yes, there are.)\n3. Where is the lake? (near the mountain)\n4. Are there flowers? (Yes, everywhere.)', label: '阅读理解题', animationType: 'sequence' },
          { type: 'tip', content: '回答阅读理解题时，在短文中找到原句再回答。注意some用于肯定句，any用于疑问和否定句。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '短文逐句高亮动画，配合阅读进度', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Nature Park Reading', cardRevealConfig: { cards: [ { front: 'river', back: '🏞️', ttsText: 'There is a long river in the park.' }, { front: 'lake', back: '🏞️', ttsText: 'There is a lake near the mountain.' }, { front: 'forest', back: '🌲', ttsText: 'There are many trees in the forest.' }, { front: 'flowers', back: '🌸', ttsText: 'There are beautiful flowers everywhere.' } ] }, ttsNarration: '自然公园短文阅读：河流、湖泊、森林、花朵' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u6l3q1',
            type: 'choice',
            question: 'According to the passage, what is in the nature park?',
            options: ['A river and a lake', 'A bed and a desk', 'A school and a shop', 'A car and a bus'],
            answer: 'A river and a lake',
            hint: '在短文中找自然景观',
            explanation: '短文中说There is a long river和There is a lake，所以公园里有河和湖'
          },
          {
            id: 'e5u6l3q2',
            type: 'fill',
            question: 'The lake is near the ____ according to the passage. (山)',
            answer: 'mountain',
            hint: '在短文中找湖的位置',
            explanation: '短文说There is a lake near the mountain.湖在山附近'
          },
          {
            id: 'e5u6l3q3',
            type: 'choice',
            question: 'Are there fish in the river?',
            options: ['Yes, there are.', 'No, there aren\'t.', 'Yes, there is.', 'No, there isn\'t.'],
            answer: 'Yes, there are.',
            hint: 'fish是复数',
            explanation: '短文说There are some fish in the river.所以回答Yes, there are.'
          },
          {
            id: 'e5u6l3q4',
            type: 'fill',
            question: 'There are many ____ in the forest. (树)',
            answer: 'trees',
            hint: '在短文中找森林里有什么',
            explanation: '短文说There are many trees in the forest.森林里有很多树'
          },
          {
            id: 'e5u6l3q5',
            type: 'choice',
            question: 'Where are the flowers according to the passage?',
            options: ['Everywhere', 'Only in the river', 'Only on the mountain', 'Only in the forest'],
            answer: 'Everywhere',
            hint: '在短文中找花的位置',
            explanation: '短文说There are beautiful flowers everywhere.花到处都是'
          },
          {
            id: 'e5u6l3q6',
            type: 'fill',
            question: 'The nature park is very big and ____. (美丽的)',
            answer: 'beautiful',
            hint: '在短文开头找描述公园的词',
            explanation: '短文开头说It is very big and beautiful.公园又大又美丽'
          },
          {
            id: 'e5u6l3q7',
            type: 'choice',
            question: '— Is there a river in the park? — Yes, ____.',
            options: ['there is', 'there are', 'it is', 'there has'],
            answer: 'there is',
            hint: '[存在句型]（英语五年级-第6单元）',
            explanation: 'Is there...?的肯定回答是Yes, there is.river是单数'
          }
        ]
      },
      {
        id: 'e5u6l4',
        title: '保护环境——Let\'s Protect Nature',
        order: 4,
        teachingMethod: '跨学科：环保+英语',
        learningObjective: '我能用英语表达环保建议并理解保护自然的重要性',
        successCriteria: '①能说出3条环保建议 ②能用We should...造句',
        iDo: '家长介绍环保：We should protect nature. Don\'t litter. Plant more trees.',
        weDo: '亲子一起讨论环保方法，用英语说出保护环境的行为',
        youDo: '孩子独立用英语说环保建议，如don\'t litter, plant trees等',
        parentTips: '【家长预习】本课核心：环保表达We should protect nature.（我们应该保护自然）、Don\'t litter.（不要乱扔垃圾）、Plant more trees.（多种树）。\n共学四步：\n①对话出题：家长说We should protect nature.问孩子What should we do?。\n②孩子应答：孩子应说We should plant more trees.。\n③答错引导：若孩子说不出，家长当同学一起想！扫描课时发音动画听发音；让孩子点读课件句子卡；家长结合环保行动边说边做。\n④快速检测：1.孩子说出3条建议；2.用We should...造句；3.用Don\'t...造句。',
        funElement: '制作"环保小卫士"海报，用英语写环保标语',
        gsapAnimations: ['GSAP:环保场景构建-sceneBuild', 'GSAP:环保标语弹出-stagger', 'GSAP:关键句高亮-highlight'],
        images: ['IMG:环保场景图', 'IMG:环保行为图'],
        content: [
          { type: 'text', content: 'We should protect nature! Don\'t litter. Plant more trees. Save water. Love animals. Let\'s keep our nature park clean and beautiful!', animationType: 'reveal' },
          { type: 'example', content: 'protect nature — 保护自然\ndon\'t litter — 不要乱扔垃圾\nplant trees — 种树\nsave water — 节约用水\nlove animals — 爱护动物\nkeep clean — 保持清洁', label: '环保词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: The nature park is so beautiful!\nAmy: Yes, we should protect it.\nTom: What should we do?\nAmy: Don\'t litter. Put trash in the bin.\nTom: Should we plant trees?\nAmy: Yes! Plant more trees. And save water too.\nTom: Let\'s be nature protectors!', label: '环保对话', animationType: 'timeline' },
          { type: 'tip', content: 'Don\'t + 动词原形 = 不要做某事。Don\'t litter. 不要乱扔垃圾。Don\'t run. 不要跑。', label: 'Don\'t用法', animationType: 'pulse' },
          { type: 'example', content: 'We should protect nature. 我们应该保护自然。\nDon\'t litter! 不要乱扔垃圾！\nPlant more trees. 多种树。\nSave water. 节约用水。\nKeep the park clean. 保持公园清洁。', label: '环保建议', animationType: 'sequence' },
          { type: 'tip', content: 'should表示"应该"（建议），shouldn\'t表示"不应该"。Don\'t是祈使句的否定形式，语气更强。', label: 'should vs Don\'t', animationType: 'pulse' },
          { type: 'animation', content: '环保场景构建动画，展示种树、捡垃圾等环保行为', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'Protect Nature', sceneBuildConfig: { sceneName: 'Protect Nature', elements: [ { id: 'el-0', text: 'Don\'t litter', emoji: '🗑️', delay: 0, animation: 'bounceIn', ttsText: 'Don\'t litter. 不要乱扔垃圾' }, { id: 'el-1', text: 'Plant trees', emoji: '🌳', delay: 0.4, animation: 'popIn', ttsText: 'Plant trees. 种树' }, { id: 'el-2', text: 'Save water', emoji: '💧', delay: 0.8, animation: 'scaleIn', ttsText: 'Save water. 节约用水' }, { id: 'el-3', text: 'Love animals', emoji: '🐰', delay: 1.2, animation: 'fadeIn', ttsText: 'Love animals. 爱护动物' } ] }, ttsNarration: '保护环境：不乱扔垃圾、种树、节约用水、爱护动物' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u6l4q1',
            type: 'choice',
            question: 'What should we do to protect nature?',
            options: ['Plant more trees', 'Cut all trees', 'Litter everywhere', 'Waste water'],
            answer: 'Plant more trees',
            hint: '哪种行为是保护环境？',
            explanation: 'Plant more trees（多种树）是保护环境的行为'
          },
          {
            id: 'e5u6l4q2',
            type: 'fill',
            question: '____ litter! Put trash in the bin. (不要)',
            answer: 'Don\'t',
            acceptableAnswers: ['Do not'],
            hint: '祈使句的否定形式',
            explanation: 'Don\'t litter!不要乱扔垃圾。Don\'t + 动词原形构成否定祈使句'
          },
          {
            id: 'e5u6l4q3',
            type: 'choice',
            question: 'We ____ save water. It\'s important.',
            options: ['should', 'shouldn\'t', 'can\'t', 'don\'t'],
            answer: 'should',
            hint: '表示"应该"节约用水',
            explanation: 'should表示应该，We should save water.我们应该节约用水'
          },
          {
            id: 'e5u6l4q4',
            type: 'fill',
            question: 'We should ____ nature. It\'s our home. (保护)',
            answer: 'protect',
            hint: '表示"保护"的动词',
            explanation: 'protect是保护，We should protect nature.我们应该保护自然'
          },
          {
            id: 'e5u6l4q5',
            type: 'choice',
            question: 'Which is NOT good for the environment?',
            options: ['Litter everywhere', 'Plant trees', 'Save water', 'Love animals'],
            answer: 'Litter everywhere',
            hint: '哪种行为对环境不好？',
            explanation: 'Litter everywhere（到处乱扔垃圾）对环境不好，其他都是环保行为'
          },
          {
            id: 'e5u6l4q6',
            type: 'fill',
            question: 'Keep the park ____. Don\'t throw trash on the ground. (清洁)',
            answer: 'clean',
            hint: '表示"清洁的"的形容词',
            explanation: 'clean是清洁的，Keep the park clean.保持公园清洁'
          },
          {
            id: 'e5u6l4q7',
            type: 'choice',
            question: '— Are there any trees in the forest? — Yes, ____.',
            options: ['there are', 'there is', 'they are', 'it is'],
            answer: 'there are',
            hint: '[存在句型]（英语五年级-第6单元）',
            explanation: 'Are there...?的肯定回答是Yes, there are.trees是复数用are'
          }
        ]
      },
      {
        id: 'e5u6l5',
        title: '第六单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能通过第六单元综合检测，巩固自然词汇和There be疑问句',
        successCriteria: '①能完成自然词汇题 ②能完成There be疑问句型题',
        iDo: '家长示范检测流程，讲解题型和要求，示范答题方法',
        weDo: '亲子一起练习几道样题，家长引导孩子分析题目',
        youDo: '孩子独立完成单元检测，包括自然词汇、Is/Are there句型和阅读题',
        parentTips: '【家长预习】本课核心：第六单元综合检测，包括自然词汇、Is/Are there疑问句、短文阅读。\n共学四步：\n①对话出题：家长说我们来做第六单元检测，先复习一下。。\n②孩子应答：孩子应说river, lake, forest, mountain!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说。\n④快速检测：1.孩子完成单元检测；2.正确率达80%；3.错题订正。',
        funElement: '通关后获得Nature达人徽章，庆祝学习成果',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:答题反馈-stagger', 'GSAP:徽章飞入-starFlyIn'],
        images: ['IMG:Nature达人徽章', 'IMG:综合检测场景图'],
        content: [
          { type: 'text', content: 'Time for the Unit 6 test! Let\'s review: nature words, Is there...?/Are there...?, reading, and protecting nature.', animationType: 'reveal' },
          { type: 'example', content: 'Review List:\n1. Nature: river, lake, forest, mountain, sky, cloud, tree, flower\n2. Question: Is there a...? / Are there any...?\n3. Answer: Yes, there is/are. / No, there isn\'t/aren\'t.\n4. Environment: Don\'t litter, plant trees, save water', label: '单元复习要点', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Is there a river in the nature park?\nAmy: Yes, there is. There are fish in it.\nTom: Are there any flowers?\nAmy: Yes, there are flowers everywhere.\nTom: We should protect nature.\nAmy: Yes! Don\'t litter. Plant more trees.\nTom: Let\'s keep the park clean!\nAmy: Great idea!', label: '综合对话复习', animationType: 'timeline' },
          { type: 'tip', content: '检测重点：1.能认读自然词汇 2.能用Is/Are there问答 3.能读短文回答问题 4.能说环保建议', label: '检测要点', animationType: 'pulse' },
          { type: 'example', content: 'Key Sentences:\nIs there a lake? Yes, there is.\nAre there any fish? Yes, there are.\nThere is a forest on the mountain.\nDon\'t litter! We should protect nature.', label: '核心句型复习', animationType: 'sequence' },
          { type: 'tip', content: '答题技巧：单数用Is there，复数用Are there any。some用于肯定句，any用于疑问/否定句。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '检测通关撒花动画，配合徽章出现', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Nature Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Test complete' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Badge', back: '🏅', ttsText: 'Nature badge earned' } ] }, ttsNarration: '检测完成，恭喜通关，获得Nature达人徽章' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u6l5q1',
            type: 'choice',
            question: 'Which is a body of water that flows?',
            options: ['river', 'mountain', 'forest', 'sky'],
            answer: 'river',
            hint: '流动的水体',
            explanation: 'river是河流，流动的水体。mountain是山，forest是森林，sky是天空'
          },
          {
            id: 'e5u6l5q2',
            type: 'fill',
            question: '— Is there a mountain? — Yes, there ____. (is/are)',
            answer: 'is',
            hint: 'mountain是单数',
            explanation: 'mountain是单数，Is there...?的肯定回答是Yes, there is.'
          },
          {
            id: 'e5u6l5q3',
            type: 'choice',
            question: '— Are there any fish in the lake? — Yes, ____.',
            options: ['there are', 'there is', 'they are', 'it is'],
            answer: 'there are',
            hint: 'fish是复数',
            explanation: 'Are there...?的肯定回答是Yes, there are.'
          },
          {
            id: 'e5u6l5q4',
            type: 'fill',
            question: '____ litter! Put trash in the bin. (不要)',
            answer: 'Don\'t',
            acceptableAnswers: ['Do not'],
            hint: '否定祈使句',
            explanation: 'Don\'t litter!不要乱扔垃圾。Don\'t + 动词原形'
          },
          {
            id: 'e5u6l5q5',
            type: 'choice',
            question: 'Which question uses "any" correctly?',
            options: ['Are there any trees?', 'Is there any trees?', 'Are there a trees?', 'Is there a trees?'],
            answer: 'Are there any trees?',
            hint: 'any用于复数疑问句',
            explanation: 'trees是复数，疑问句用Are there any trees?有树吗？'
          },
          {
            id: 'e5u6l5q6',
            type: 'fill',
            question: 'We should ____ nature. It\'s our home. (保护)',
            answer: 'protect',
            hint: '表示"保护"的动词',
            explanation: 'protect是保护，We should protect nature.我们应该保护自然'
          },
          {
            id: 'e5u6l5q7',
            type: 'choice',
            question: '— Is there a forest on the mountain? — Yes, ____.',
            options: ['there is', 'there are', 'they are', 'it is'],
            answer: 'there is',
            hint: '[存在句型]（英语五年级-第6单元）',
            explanation: 'Is there...?的肯定回答是Yes, there is.forest是单数'
          }
        ]
      }
    ]
  },
  // ==================== 第七单元：阅读理解进阶 ====================
  {
    id: 'e5u7',
    title: '阅读理解进阶',
    subtitle: '短文阅读理解与推理判断',
    order: 7,
    lessons: [
      {
        id: 'e5u7l1',
        title: '阅读策略——预测与确认',
        order: 1,
        teachingMethod: '支架式：阅读策略',
        learningObjective: '我能运用预测策略，看标题和图片猜测短文内容',
        successCriteria: '①能看标题预测内容 ②能读后确认预测是否正确',
        iDo: '家长示范看标题预测内容，先说"我觉得这篇文章讲..."再读确认',
        weDo: '亲子一起看标题预测，读后确认预测是否正确',
        youDo: '孩子独立看标题预测内容，阅读后确认预测',
        parentTips: '【家长预习】本课核心：阅读策略——预测与确认，看标题和图片猜内容，读后确认，用I think...表达预测。\n共学四步：\n①对话出题：家长指标题问What do you think this story is about?并说I think it\'s about a teacher.。\n②孩子应答：孩子应说I think it\'s about a park.。\n③答错引导：若孩子说不出，家长当同学一起猜！扫描课时发音动画听发音；让孩子点读课件预测卡；家长当同学一起猜，没有标准答案。\n④快速检测：1.孩子看标题预测；2.用I think...表达；3.读后确认预测。',
        funElement: '玩"预测大师"游戏，看标题猜内容，读完看谁猜得准',
        gsapAnimations: ['GSAP:预测卡片翻转揭示-cardReveal', 'GSAP:关键词高亮-highlight', 'GSAP:预测步骤展开-timeline'],
        images: ['IMG:预测阅读图', 'IMG:阅读策略图'],
        content: [
          { type: 'text', content: 'Good readers predict before reading! Look at the title and pictures, guess what the story is about, then read to confirm.', animationType: 'reveal' },
          { type: 'example', content: 'Predicting Strategy:\n1. Look at the title: "My Favourite Teacher"\n2. Predict: I think this is about a teacher the writer likes.\n3. Read the passage.\n4. Confirm: Was my prediction correct?', label: '预测策略', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Let\'s read this story. The title is "A Day at the Park".\nAmy: I predict it\'s about someone playing in a park.\nTom: Let\'s read and check.\nAmy: (reads) Yes! It\'s about a boy playing at the park.\nTom: Your prediction was right!', label: '预测与确认对话', animationType: 'timeline' },
          { type: 'tip', content: '预测不需要100%正确。预测的目的是让大脑做好准备，带着问题去阅读，理解更深刻。', label: '预测技巧', animationType: 'pulse' },
          { type: 'example', content: 'Title: "My New Friend"\nPredict: I think this is about meeting a new friend.\nTitle: "The Hungry Cat"\nPredict: I think this is about a cat looking for food.\nTitle: "Rainy Day Fun"\nPredict: I think this is about playing inside on a rainy day.', label: '预测练习', animationType: 'sequence' },
          { type: 'tip', content: '预测时可以用I think... / I guess... / Maybe... 等句型表达预测。', label: '预测句型', animationType: 'pulse' },
          { type: 'animation', content: '预测卡片翻转动画，翻转后揭示预测内容是否正确', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Predict and Confirm', cardRevealConfig: { cards: [ { front: 'Title: My Pet', back: '🐶', ttsText: 'I think it\'s about a pet animal.' }, { front: 'Title: Lunch Time', back: '🍽️', ttsText: 'I think it\'s about eating lunch.' }, { front: 'Title: The Big Game', back: '⚽', ttsText: 'I think it\'s about a sports game.' }, { front: 'Title: Rainy Day', back: '🌧️', ttsText: 'I think it\'s about a rainy day.' } ] }, ttsNarration: '预测练习：我的宠物、午餐时间、大赛、雨天' } },
          {
            type: 'tip',
            content: '前缀pre-记忆法：pre-表示"在...之前、提前"。pre（提前）+dict（说）=predict（预测，提前说出来），pre（提前）+view（看）=preview（预习/预告，提前看）。阅读策略中的predict就是"提前说"——在读之前先猜内容！记住pre-，遇到pre开头的词就能猜到和"提前"有关。',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u7l1q1',
            type: 'choice',
            question: 'What should you do BEFORE reading a passage?',
            options: ['Predict what it\'s about', 'Write a summary', 'Answer questions', 'Close the book'],
            answer: 'Predict what it\'s about',
            hint: '阅读前应该先做什么？',
            explanation: '阅读前应该先预测内容，看标题和图片猜文章讲什么'
          },
          {
            id: 'e5u7l1q2',
            type: 'fill',
            question: 'I ____ this story is about a dog. (认为/预测)',
            answer: 'think',
            acceptableAnswers: ['guess', 'predict'],
            hint: '表达预测用什么词？',
            explanation: '用I think...表达预测，I think this story is about a dog.我觉得这个故事是关于一只狗的'
          },
          {
            id: 'e5u7l1q3',
            type: 'choice',
            question: 'The title is "The Hungry Cat". What is the best prediction?',
            options: ['A cat looking for food', 'A cat sleeping all day', 'A cat playing with a ball', 'A cat going to school'],
            answer: 'A cat looking for food',
            hint: 'hungry和什么有关？',
            explanation: 'hungry是饿的，所以预测The Hungry Cat是关于一只饿猫找食物的故事'
          },
          {
            id: 'e5u7l1q4',
            type: 'fill',
            question: 'After reading, we should ____ our prediction. (确认)',
            answer: 'confirm',
            hint: '读完后要做什么？',
            explanation: '读完后要确认预测是否正确，confirm意为确认'
          },
          {
            id: 'e5u7l1q5',
            type: 'choice',
            question: 'Which helps you predict what a passage is about?',
            options: ['The title and pictures', 'The page number', 'The book cover color', 'The font size'],
            answer: 'The title and pictures',
            hint: '【期末真题】什么信息帮助预测？',
            explanation: '标题和图片帮助预测内容，它们提供了文章主题的线索'
          },
          {
            id: 'e5u7l1q6',
            type: 'fill',
            question: '____ the story is about a rainy day. I see an umbrella on the cover. (也许)',
            answer: 'Maybe',
            acceptableAnswers: ['Perhaps'],
            hint: '表达不确定的预测',
            explanation: 'Maybe表示也许，Maybe the story is about a rainy day.也许这个故事是关于雨天的'
          },
          {
            id: 'e5u7l1q7',
            type: 'choice',
            question: '— Is there a river in the park? — Yes, ____.',
            options: ['there is', 'there are', 'they are', 'it is'],
            answer: 'there is',
            hint: '[存在句型]（英语五年级-第6单元）',
            explanation: 'Is there...?的肯定回答是Yes, there is.回顾第6单元的There is/are句型'
          }
        ]
      },
      {
        id: 'e5u7l2',
        title: '阅读策略——找细节与概括',
        order: 2,
        teachingMethod: '支架式教学法',
        learningObjective: '我能运用找细节和概括策略理解短文',
        successCriteria: '①能找出文中细节信息 ②能用一句话概括大意',
        iDo: '家长示范找细节和概括：先找文中具体信息，再用一句话概括大意',
        weDo: '亲子一起读短文找细节，一起讨论概括大意',
        youDo: '孩子独立读短文，找关键细节并用一句话概括',
        parentTips: '【家长预习】本课核心：阅读策略——找细节与概括，找文中具体信息，用一句话概括大意。\n共学四步：\n①对话出题：家长读短文后问What does Tom do?并说He plays in the park.。\n②孩子应答：孩子应说He plays with his friends.。\n③答错引导：若孩子找不出，家长当同学一起找！扫描课时发音动画听发音；让孩子点读课件短文卡；家长用手指指读，帮孩子定位细节。\n④快速检测：1.孩子找2个细节；2.用一句话概括；3.说出故事大意。',
        funElement: '玩"细节侦探"游戏，读短文后比赛谁找到的细节多',
        gsapAnimations: ['GSAP:关键细节高亮-highlight', 'GSAP:句子逐个出现-stagger', 'GSAP:概括卡片翻转-cardReveal'],
        images: ['IMG:阅读策略图', 'IMG:细节与概括图'],
        content: [
          { type: 'text', content: 'Finding details: look for specific information in the text. Summarising: tell the main idea in your own words.', animationType: 'reveal' },
          { type: 'example', content: 'Passage: "Tom is a student. He is 11 years old. He likes English and PE. His English teacher is Miss Wang. She is kind and funny."\n\nDetails:\n- Tom is 11 years old.\n- He likes English and PE.\n- His English teacher is Miss Wang.\n\nSummary: Tom is a student who likes English and PE. His English teacher is kind and funny.', label: '细节与概括', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: How do you find details in a passage?\nAmy: I read carefully and look for specific information.\nTom: Like what?\nAmy: Like names, ages, numbers, and descriptions.\nTom: And how do you summarise?\nAmy: I tell the main idea in one or two sentences.', label: '阅读策略对话', animationType: 'timeline' },
          { type: 'tip', content: '找细节时用who（谁）、what（什么）、where（哪里）、when（何时）、why（为什么）来提问。', label: '5W提问法', animationType: 'pulse' },
          { type: 'example', content: 'Who is Tom? — A student.\nHow old is he? — 11 years old.\nWhat does he like? — English and PE.\nWho is his teacher? — Miss Wang.\nWhat\'s she like? — Kind and funny.', label: '细节提问', animationType: 'sequence' },
          { type: 'tip', content: '概括大意时不要照抄原文，要用自己的话简洁地总结最重要的信息。', label: '概括技巧', animationType: 'pulse' },
          { type: 'animation', content: '关键细节高亮动画，配合5W提问法', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Find Details', cardRevealConfig: { cards: [ { front: 'Who?', back: '👤', ttsText: 'Who is the character?' }, { front: 'What?', back: '❓', ttsText: 'What happened?' }, { front: 'Where?', back: '📍', ttsText: 'Where did it happen?' }, { front: 'When?', back: '⏰', ttsText: 'When did it happen?' } ] }, ttsNarration: '5W提问法：谁、什么、哪里、何时、为什么' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u7l2q1',
            type: 'choice',
            question: 'Read: "Amy is 10. She likes music." How old is Amy?',
            options: ['10', '11', '12', '9'],
            answer: '10',
            hint: '在句中找年龄',
            explanation: '句中说Amy is 10.所以Amy 10岁'
          },
          {
            id: 'e5u7l2q2',
            type: 'fill',
            question: 'Read: "Tom likes English and PE." Tom likes English and ____. (体育)',
            answer: 'PE',
            hint: '在句中找Tom喜欢的科目',
            explanation: '句中说Tom likes English and PE.所以Tom喜欢英语和体育'
          },
          {
            id: 'e5u7l2q3',
            type: 'choice',
            question: 'What do you use to find details in a passage?',
            options: ['Who, what, where, when, why', 'Title and pictures only', 'Random guessing', 'Counting words'],
            answer: 'Who, what, where, when, why',
            hint: '用什么方法找细节？',
            explanation: '用5W（who/what/where/when/why）提问来找文中的细节信息'
          },
          {
            id: 'e5u7l2q4',
            type: 'fill',
            question: 'Read: "Miss Wang is kind and funny." Miss Wang is kind and ____. (有趣的)',
            answer: 'funny',
            hint: '在句中找Miss Wang的性格',
            explanation: '句中说Miss Wang is kind and funny.所以她既和蔼又有趣'
          },
          {
            id: 'e5u7l2q5',
            type: 'choice',
            question: 'Read: "Tom is a student. He is 11. He likes English." What is the best summary?',
            options: ['Tom is a student who likes English.', 'Tom is 11 years old.', 'Tom has a teacher.', 'Tom is a boy.'],
            answer: 'Tom is a student who likes English.',
            hint: '哪个概括最完整？',
            explanation: 'Tom is a student who likes English.包含了最重要的信息：身份和喜好'
          },
          {
            id: 'e5u7l2q6',
            type: 'fill',
            question: 'When we summarise, we should tell the main idea in our ____ words. (自己的)',
            answer: 'own',
            hint: '概括时用自己的话',
            explanation: '概括时用自己的话in our own words，不要照抄原文'
          },
          {
            id: 'e5u7l2q7',
            type: 'choice',
            question: 'Read: "There is a big forest on the mountain." Where is the forest?',
            options: ['On the mountain', 'In the river', 'In the lake', 'In the sky'],
            answer: 'On the mountain',
            hint: '[阅读理解]（英语五年级-第6单元）',
            explanation: '句中说There is a big forest on the mountain.森林在山上。回顾第6单元的自然词汇'
          }
        ]
      },
      {
        id: 'e5u7l3',
        title: '阅读理解——叙事短文',
        order: 3,
        teachingMethod: '分级阅读法',
        learningObjective: '我能阅读叙事短文并用5W法分析故事要素',
        successCriteria: '①能说出故事的5W要素 ②能复述故事大意',
        iDo: '家长示范读叙事短文，用5W提问法分析故事要素',
        weDo: '亲子一起读叙事短文，讨论故事的人物、时间、地点、事件',
        youDo: '孩子独立读叙事短文并回答问题',
        parentTips: '【家长预习】本课核心：叙事短文阅读，用5W法（Who/When/Where/What/Why）分析故事要素。\n共学四步：\n①对话出题：家长读短文后问Who is in the story?并说Tom.。\n②孩子应答：孩子应说Tom and Amy.。\n③答错引导：若孩子说不出，家长当同学一起读！扫描课时发音动画听发音；让孩子点读课件短文卡；家长逐句带孩子读，用5W提问引导。\n④快速检测：1.孩子说出5W要素；2.复述故事；3.回答3个细节问题。',
        funElement: '读故事后画"故事地图"，标注人物、时间、地点和事件',
        gsapAnimations: ['GSAP:五要素高亮-highlight', 'GSAP:故事要素逐个出现-stagger', 'GSAP:要素卡片翻转-cardReveal'],
        images: ['IMG:叙事短文配图', 'IMG:故事五要素图'],
        content: [
          { type: 'text', content: 'A narrative story has five elements: Who (character), When (time), Where (place), What (event), Why (reason).', animationType: 'reveal' },
          { type: 'example', content: 'Story: "Last Sunday, Amy went to the park with her mother. They had a picnic under a big tree. Amy ate sandwiches and played with her dog. She was very happy because it was a sunny day."\n\n5 Elements:\n- Who: Amy and her mother\n- When: Last Sunday\n- Where: The park\n- What: Had a picnic\n- Why: It was a sunny day', label: '叙事短文分析', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Let\'s analyse this story. Who is in it?\nAmy: Amy and her mother.\nTom: When did it happen?\nAmy: Last Sunday.\nTom: Where did they go?\nAmy: To the park.\nTom: What did they do?\nAmy: They had a picnic.\nTom: Why was Amy happy?\nAmy: Because it was a sunny day.', label: '故事分析对话', animationType: 'timeline' },
          { type: 'tip', content: 'last Sunday = 上周日。last表示"上一个"，如last week上周，last month上个月，last year去年。', label: '时间表达', animationType: 'pulse' },
          { type: 'example', content: 'Who — Amy and her mother\nWhen — Last Sunday\nWhere — The park\nWhat — Had a picnic, ate sandwiches, played with dog\nWhy — It was a sunny day', label: '五要素总结', animationType: 'sequence' },
          { type: 'tip', content: '回答Why的问题用Because...：Why was Amy happy? Because it was a sunny day.', label: 'because用法', animationType: 'pulse' },
          { type: 'animation', content: '故事五要素逐个高亮动画', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Story Elements', cardRevealConfig: { cards: [ { front: 'Who?', back: '👧', ttsText: 'Who: Amy and her mother' }, { front: 'When?', back: '📅', ttsText: 'When: Last Sunday' }, { front: 'Where?', back: '🌳', ttsText: 'Where: The park' }, { front: 'What?', back: '🧺', ttsText: 'What: Had a picnic' }, { front: 'Why?', back: '☀️', ttsText: 'Why: A sunny day' } ] }, ttsNarration: '故事五要素：人物、时间、地点、事件、原因' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u7l3q1',
            type: 'choice',
            question: 'Read: "Last Sunday, Amy went to the park." When did Amy go to the park?',
            options: ['Last Sunday', 'Last Monday', 'Last Friday', 'Last Saturday'],
            answer: 'Last Sunday',
            hint: '在句中找时间',
            explanation: '句中说Last Sunday, Amy went to the park.所以是上周日去的'
          },
          {
            id: 'e5u7l3q2',
            type: 'fill',
            question: 'Read: "Amy went to the park with her ____." (妈妈)',
            answer: 'mother',
            acceptableAnswers: ['mom', 'mum'],
            hint: '在句中找Amy和谁一起',
            explanation: '句中说Amy went to the park with her mother.所以是和妈妈一起去的'
          },
          {
            id: 'e5u7l3q3',
            type: 'choice',
            question: 'Read: "They had a picnic under a big tree." What did they do?',
            options: ['Had a picnic', 'Played football', 'Went swimming', 'Read books'],
            answer: 'Had a picnic',
            hint: '在句中找他们做了什么',
            explanation: '句中说They had a picnic.所以他们野餐了'
          },
          {
            id: 'e5u7l3q4',
            type: 'fill',
            question: 'Read: "Amy was happy because it was a ____ day." (晴朗的)',
            answer: 'sunny',
            hint: '在句中找Amy高兴的原因',
            explanation: '句中说because it was a sunny day.因为是晴天所以Amy很高兴'
          },
          {
            id: 'e5u7l3q5',
            type: 'choice',
            question: 'How many elements does a narrative story have?',
            options: ['Five', 'Three', 'Two', 'Seven'],
            answer: 'Five',
            hint: '叙事短文有几个要素？',
            explanation: '叙事短文有五要素：Who/When/Where/What/Why'
          },
          {
            id: 'e5u7l3q6',
            type: 'fill',
            question: 'We answer "Why" questions with "____". (因为)',
            answer: 'Because',
            hint: '回答why用什么词开头？',
            explanation: '回答why问题用Because开头，Because it was a sunny day.'
          },
          {
            id: 'e5u7l3q7',
            type: 'choice',
            question: 'Read: "There is a big forest." This sentence uses which pattern?',
            options: ['There is', 'There are', 'I can', 'I like'],
            answer: 'There is',
            hint: '[存在句型]（英语五年级-第5单元）',
            explanation: 'There is a big forest.使用了There is句型，回顾第5单元学的There is/are句型'
          }
        ]
      },
      {
        id: 'e5u7l4',
        title: '阅读理解——说明短文',
        order: 4,
        teachingMethod: '分级阅读法',
        learningObjective: '我能阅读说明短文并找出特征和说明方法',
        successCriteria: '①能找出说明文特征 ②能说出说明方法',
        iDo: '家长示范读说明短文，找特征和说明方法',
        weDo: '亲子一起读说明短文，讨论文章介绍了什么',
        youDo: '孩子独立读说明短文并回答问题',
        parentTips: '【家长预习】本课核心：说明短文阅读，找事物特征和说明方法（举例、列数字、比较）。\n共学四步：\n①对话出题：家长读短文后问What is this about?并说It\'s about rivers.。\n②孩子应答：孩子应说It\'s about mountains.。\n③答错引导：若孩子说不出，家长当同学一起读！扫描课时发音动画听发音；让孩子点读课件短文卡；家长逐句带孩子读，找关键词。\n④快速检测：1.孩子说出主题；2.找2个特征；3.说出说明方法。',
        funElement: '读说明短文后画思维导图，标注事物特征',
        gsapAnimations: ['GSAP:说明特征高亮-highlight', 'GSAP:特征逐个出现-stagger', 'GSAP:特征卡片翻转-cardReveal'],
        images: ['IMG:说明短文配图', 'IMG:思维导图模板'],
        content: [
          { type: 'text', content: 'An information text gives facts about a topic. Look for features and details that describe the subject.', animationType: 'reveal' },
          { type: 'example', content: 'Passage: "Dolphins are sea animals. They are grey and very smart. They can swim fast and jump high. They live in the ocean. They eat fish."\n\nFeatures:\n- Colour: grey\n- Ability: smart, swim fast, jump high\n- Home: the ocean\n- Food: fish', label: '说明短文分析', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What is this text about?\nAmy: It\'s about dolphins.\nTom: What colour are they?\nAmy: They are grey.\nTom: What can they do?\nAmy: They can swim fast and jump high.\nTom: Where do they live?\nAmy: In the ocean.\nTom: What do they eat?\nAmy: They eat fish.', label: '说明文问答对话', animationType: 'timeline' },
          { type: 'tip', content: '说明短文用事实描述事物，包括外貌、能力、栖息地和食物等特征。', label: '说明文特点', animationType: 'pulse' },
          { type: 'example', content: 'Dolphins are grey. — 外貌\nThey can swim fast. — 能力\nThey live in the ocean. — 栖息地\nThey eat fish. — 食物\nThey are very smart. — 特征', label: '说明文要素', animationType: 'sequence' },
          { type: 'tip', content: '回答说明文问题时，在文中找到原句再回答。注意用完整句子回答。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '说明特征逐个高亮动画，配合海豚特征展示', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Dolphin Facts', cardRevealConfig: { cards: [ { front: 'grey', back: '🐬', ttsText: 'Dolphins are grey.' }, { front: 'smart', back: '🧠', ttsText: 'They are very smart.' }, { front: 'swim fast', back: '🏊', ttsText: 'They can swim fast.' }, { front: 'eat fish', back: '🐟', ttsText: 'They eat fish.' } ] }, ttsNarration: '海豚特征：灰色、聪明、游泳快、吃鱼' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u7l4q1',
            type: 'choice',
            question: 'Read: "Dolphins are grey and very smart." What colour are dolphins?',
            options: ['grey', 'blue', 'white', 'black'],
            answer: 'grey',
            hint: '在句中找海豚的颜色',
            explanation: '句中说Dolphins are grey.所以海豚是灰色的'
          },
          {
            id: 'e5u7l4q2',
            type: 'fill',
            question: 'Read: "They live in the ____." Dolphins live there. (海洋)',
            answer: 'ocean',
            acceptableAnswers: ['sea'],
            hint: '在句中找海豚住在哪里',
            explanation: '句中说They live in the ocean.所以海豚住在海洋里'
          },
          {
            id: 'e5u7l4q3',
            type: 'choice',
            question: 'Read: "They can swim fast and jump high." What can dolphins do?',
            options: ['Swim fast and jump high', 'Fly and run', 'Cook and sing', 'Draw and dance'],
            answer: 'Swim fast and jump high',
            hint: '在句中找海豚的能力',
            explanation: '句中说They can swim fast and jump high.海豚能快速游泳和跳得很高'
          },
          {
            id: 'e5u7l4q4',
            type: 'fill',
            question: 'Read: "They eat ____." Dolphins eat them. (鱼)',
            answer: 'fish',
            hint: '在句中找海豚吃什么',
            explanation: '句中说They eat fish.所以海豚吃鱼'
          },
          {
            id: 'e5u7l4q5',
            type: 'choice',
            question: 'What type of text gives facts about a topic?',
            options: ['Information text', 'Fairy tale', 'Poem', 'Joke'],
            answer: 'Information text',
            hint: '哪种文体用事实描述事物？',
            explanation: '说明文（information text）用事实描述事物的特征'
          },
          {
            id: 'e5u7l4q6',
            type: 'fill',
            question: 'Dolphins are very ____. They can learn tricks. (聪明的)',
            answer: 'smart',
            acceptableAnswers: ['clever', 'intelligent'],
            hint: '在句中找描述海豚的词',
            explanation: '句中说Dolphins are very smart.海豚很聪明'
          },
          {
            id: 'e5u7l4q7',
            type: 'choice',
            question: 'Read: "They can swim fast." This sentence uses which pattern?',
            options: ['can', 'should', 'There is', 'I like'],
            answer: 'can',
            hint: '[能力句型]（英语五年级-第4单元）',
            explanation: 'They can swim fast.使用了can句型，回顾第4单元学的can/can\'t能力表达'
          }
        ]
      },
      {
        id: 'e5u7l5',
        title: '阅读理解综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能通过阅读理解综合检测，巩固预测、找细节和概括策略',
        successCriteria: '①能完成预测题 ②能完成细节和概括题',
        iDo: '家长示范检测流程，讲解题型和要求，示范答题方法',
        weDo: '亲子一起练习几道样题，家长引导孩子分析题目',
        youDo: '孩子独立完成2篇阅读理解，包括叙事和说明短文',
        parentTips: '【家长预习】本课核心：阅读理解综合检测，包括预测、找细节、概括、叙事和说明短文。\n共学四步：\n①对话出题：家长说我们来做阅读理解检测，先复习策略。。\n②孩子应答：孩子应说Predict, find details, summarize!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学一起回顾策略。\n④快速检测：1.孩子完成检测；2.正确率达80%；3.错题订正。',
        funElement: '通关后获得阅读达人徽章，庆祝阅读能力提升',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:答题反馈-stagger', 'GSAP:徽章飞入-starFlyIn'],
        images: ['IMG:阅读达人徽章', 'IMG:阅读检测场景图'],
        content: [
          { type: 'text', content: 'Time for the reading test! Read two passages and answer questions. Use prediction, finding details, and summarising strategies.', animationType: 'reveal' },
          { type: 'example', content: 'Test Tips:\n1. Read the title and predict first\n2. Read carefully and find details\n3. Use 5W to answer questions\n4. Write summaries in your own words\n5. Check your answers', label: '检测要点', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: I\'m ready for the reading test!\nAmy: Remember to predict first.\nTom: Then find details with 5W questions.\nAmy: And summarise in your own words.\nTom: I\'ll read carefully.\nAmy: You can do it! Good luck!', label: '考前准备对话', animationType: 'timeline' },
          { type: 'tip', content: '检测重点：1.能预测文章内容 2.能找细节回答问题 3.能概括大意 4.能理解叙事和说明短文', label: '检测重点', animationType: 'pulse' },
          { type: 'example', content: 'Reading Strategies:\n1. Predict: I think...\n2. Find details: Who/What/Where/When/Why\n3. Summarise: The main idea is...\n4. Confirm: Was my prediction correct?', label: '阅读策略复习', animationType: 'sequence' },
          { type: 'tip', content: '答题技巧：先看问题再读文章，带着问题找答案。注意问题中的关键词。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '检测通关撒花动画，配合徽章出现', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Reading Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Test complete' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Badge', back: '🏅', ttsText: 'Reading badge earned' } ] }, ttsNarration: '检测完成，恭喜通关，获得阅读达人徽章' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u7l5q1',
            type: 'choice',
            question: 'Read: "Tom is 10. He likes music." What does Tom like?',
            options: ['music', 'art', 'PE', 'maths'],
            answer: 'music',
            hint: '在句中找Tom喜欢的科目',
            explanation: '句中说He likes music.所以Tom喜欢音乐'
          },
          {
            id: 'e5u7l5q2',
            type: 'fill',
            question: 'Read: "Amy went to the park last ____." (星期天)',
            answer: 'Sunday',
            hint: '在句中找时间',
            explanation: '句中说Amy went to the park last Sunday.所以是上周日'
          },
          {
            id: 'e5u7l5q3',
            type: 'choice',
            question: 'Read: "Dolphins are very smart." What are dolphins?',
            options: ['Very smart', 'Very tall', 'Very strict', 'Very funny'],
            answer: 'Very smart',
            hint: '在句中找描述海豚的词',
            explanation: '句中说Dolphins are very smart.海豚非常聪明'
          },
          {
            id: 'e5u7l5q4',
            type: 'fill',
            question: 'Read: "They eat ____." Dolphins eat this. (鱼)',
            answer: 'fish',
            hint: '在句中找海豚的食物',
            explanation: '句中说They eat fish.海豚吃鱼'
          },
          {
            id: 'e5u7l5q5',
            type: 'choice',
            question: 'Which strategy helps you understand a passage better?',
            options: ['Predict, find details, and summarise', 'Only look at pictures', 'Read as fast as possible', 'Skip difficult words'],
            answer: 'Predict, find details, and summarise',
            hint: '哪种策略帮助理解文章？',
            explanation: '预测、找细节和概括三大策略帮助深入理解文章'
          },
          {
            id: 'e5u7l5q6',
            type: 'fill',
            question: 'Read: "Amy was happy ____ it was a sunny day." (因为)',
            answer: 'because',
            hint: '表示原因的连词',
            explanation: 'because表示因为，Amy was happy because it was a sunny day.因为晴天所以Amy高兴'
          },
          {
            id: 'e5u7l5q7',
            type: 'choice',
            question: 'Read: "Dolphins can swim fast." What can dolphins do?',
            options: ['Swim fast', 'Fly high', 'Cook well', 'Sing songs'],
            answer: 'Swim fast',
            hint: '[能力表达]（英语五年级-第4单元）',
            explanation: '句中说Dolphins can swim fast.海豚能快速游泳。回顾第4单元can句型'
          }
        ]
      }
    ]
  },
  // ==================== 第八单元：综合测评 ====================
  {
    id: 'e5u8',
    title: '综合测评',
    subtitle: '学期综合复习',
    order: 8,
    lessons: [
      // --- Lesson 1: 词汇总复习 ---
      {
        id: 'e5u8l1',
        title: '词汇总复习：分类回顾全学期词汇',
        order: 1,
        teachingMethod: '词汇归类复习法',
        learningObjective: '我能按主题分类回顾全学期六大主题词汇',
        successCriteria: '①能说出6个主题 ②每主题说3个词汇',
        iDo: '家长带孩子回顾本学期六大主题词汇：老师、星期、食物、能力、房间、自然，每个主题说出5个词',
        weDo: '亲子一起玩"词汇接龙"游戏，家长说一个主题，孩子说出相关词汇，再互换角色',
        youDo: '孩子独立完成词汇分类练习，将词汇按主题归类，并用每个词造一个简单句子',
        parentTips: '【家长预习】本课核心：词汇总复习，按主题分类回顾——老师、星期、食物、能力、房间、自然六大主题。\n共学四步：\n①对话出题：家长问这学期学了哪些主题的词?并说Teachers!。\n②孩子应答：孩子应说Teachers, days, food, abilities, room, nature!。\n③答错引导：若孩子说不出，家长当同学一起回顾！扫描课时发音动画听发音；让孩子点读课件主题卡；家长当同学一起想，用问题引导。\n④快速检测：1.孩子说出6主题；2.每主题说3词；3.用词汇造一句。',
        funElement: '玩"词汇 Bingo"游戏，家长说中文孩子圈英文，连成一线就喊Bingo',
        gsapAnimations: ['GSAP:词汇卡片翻转复习-cardReveal', 'GSAP:词汇逐个弹出-stagger', 'GSAP:关键词高亮-highlight'],
        images: ['IMG:词汇思维导图', 'IMG:六大主题词汇分类图'],
        content: [
          { type: 'text', content: 'Welcome to the vocabulary review! This semester we learned six topics: teachers, days of week, food, abilities, room, and nature. Let\'s review them all!', animationType: 'reveal' },
          { type: 'example', content: 'Teachers: kind, funny, strict, quiet, young\nDays: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\nFood: rice, fish, fruit, vegetable, noodles, hamburger\nAbilities: sing, swim, dance, cook, draw, play football\nRoom: bed, desk, lamp, closet, mirror, curtain\nNature: mountain, river, forest, lake, flower, grass', label: '六大主题词汇', animationType: 'cardReveal' },
          { type: 'tip', content: '按主题分类记词汇是最有效的方法。每组词汇关联同一个场景，回忆时先想场景再想词汇，记忆更牢固。', label: '分类记忆法', animationType: 'pulse' },
          { type: 'dialogue', content: 'Mum: Let\'s review! Tell me five teacher words.\nChild: kind, funny, strict, quiet, young!\nMum: Great! Now five food words.\nChild: rice, fish, fruit, vegetable, noodles!\nMum: Excellent! You remember them all!', label: '词汇复习对话', animationType: 'timeline' },
          { type: 'tip', content: '易混淆词汇：quiet（安静的）和quite（相当）拼写相似但意思完全不同；forest（森林）和fruit（水果）不要搞混。', label: '易混淆词汇', animationType: 'pulse' },
          { type: 'example', content: 'Word families:\nsing — singer — singing\ndance — dancer — dancing\ncook — cook — cooking（注意：cooker意为炉具/炊具，非厨师；厨师是cook）\ndraw — drawer — drawing', label: '词族拓展', animationType: 'sequence' },
          { type: 'animation', content: '六大主题词汇卡片翻转复习动画，逐一揭示每个主题的核心词汇', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Vocabulary Review', cardRevealConfig: { cards: [ { front: 'Teachers', back: '👩‍🏫', ttsText: 'Teachers: kind, funny, strict, quiet' }, { front: 'Days', back: '📅', ttsText: 'Days: Monday to Sunday' }, { front: 'Food', back: '🍎', ttsText: 'Food: rice, fish, fruit, vegetable' }, { front: 'Abilities', back: '🏊', ttsText: 'Abilities: sing, swim, dance, cook' }, { front: 'Room', back: '🛏️', ttsText: 'Room: bed, desk, lamp, closet' }, { front: 'Nature', back: '🌳', ttsText: 'Nature: mountain, river, forest, lake' } ] }, ttsNarration: '六大主题词汇复习：老师、星期、食物、能力、房间、自然' } },
          {
            type: 'tip',
            content: '词汇记忆大总结：本学期学过五种好方法——①后缀-y：fun→funny（名词变形容词）；②合成词：Moon+day=Monday（两个词拼成新词）；③后缀-er：sing→singer（做某事的人）；④前缀pre-：predict（提前说=预测）；⑤分类记忆：按主题归类。复习时多用这些方法拆词、联想，单词记得更牢固！',
            animationType: 'pulse',
            label: '词汇记忆'
          }
        ],
        practiceQuestions: [
          {
            id: 'e5u8l1q1',
            type: 'choice',
            question: 'Which word describes a teacher\'s personality?',
            options: ['kind', 'Monday', 'rice', 'bed'],
            answer: 'kind',
            hint: '哪个词描述老师的性格？',
            explanation: 'kind是和蔼的，属于老师性格类词汇；Monday是星期，rice是食物，bed是房间物品'
          },
          {
            id: 'e5u8l1q2',
            type: 'fill',
            question: 'The day after Monday is ____.',
            answer: 'Tuesday',
            acceptableAnswers: ['tuesday'],
            hint: '星期一后面的那一天',
            explanation: 'Monday（星期一）后面是Tuesday（星期二）'
          },
          {
            id: 'e5u8l1q3',
            type: 'choice',
            question: 'Which word does NOT belong to the food group?',
            options: ['mirror', 'rice', 'fish', 'fruit'],
            answer: 'mirror',
            hint: '哪个词不是食物类？',
            explanation: 'mirror是镜子，属于房间物品；rice/fish/fruit都是食物类词汇'
          },
          {
            id: 'e5u8l1q4',
            type: 'fill',
            question: 'There ___ a lamp on the desk. (用is或are填空)',
            answer: 'is',
            hint: 'a lamp是单数，用哪个be动词？',
            explanation: 'a lamp是单数，所以用is。There is a lamp on the desk.桌上有盏灯'
          },
          {
            id: 'e5u8l1q5',
            type: 'choice',
            question: 'Which word is spelled correctly?',
            options: ['Wednesday', 'Wensday', 'Wednsday', 'Wedsday'],
            answer: 'Wednesday',
            hint: '【期末真题】星期三的正确拼写',
            explanation: 'Wednesday是正确拼写，注意中间的d不发音，但拼写时要写'
          },
          {
            id: 'e5u8l1q6',
            type: 'fill',
            question: 'Can you ___? Yes, I can sing and dance. (用能力动词填空)',
            answer: 'sing',
            acceptableAnswers: ['dance', 'Sing', 'Dance'],
            hint: '后文提到了sing和dance，填一个能力动词',
            explanation: '从答句"Yes, I can sing and dance"可知问的是sing或dance等能力动词'
          },
          {
            id: 'e5u8l1q7',
            type: 'choice',
            question: 'Which word means "a large area with many trees"?',
            options: ['forest', 'river', 'mountain', 'lake'],
            answer: 'forest',
            hint: '[自然景观词汇]（英语五年级-第6单元）',
            explanation: 'forest是森林，指有很多树的大区域。回顾第6单元Nature Park的自然景观词汇'
          }
        ]
      },
      // --- Lesson 2: 句型总复习 ---
      {
        id: 'e5u8l2',
        title: '句型总复习：六大核心句型回顾',
        order: 2,
        teachingMethod: '句型操练法',
        learningObjective: '我能回顾并运用全学期六大核心句型',
        successCriteria: '①能说出6个核心句型 ②能用句型造句',
        iDo: '家长列出本学期六大句型，逐一示范造句：Who\'s your...? / What do you have on...? / What\'s your favourite...? / Can you...? / There is/are... / Is there...?',
        weDo: '亲子一起玩"句型转盘"游戏，转到哪个句型就用它造一个句子',
        youDo: '孩子独立完成句型填空练习，每个句型造两个句子',
        parentTips: '【家长预习】本课核心：句型总复习，Who\'s your...?/What day...?/What\'s your favourite...?/Can you...?/There is/are.../Is there...?六大句型。\n共学四步：\n①对话出题：家长问怎么用英语问今天星期几?并说What day is it today?。\n②孩子应答：孩子应说What day is it today?。\n③答错引导：若孩子说不出，家长当同学一起复习！扫描课时发音动画听发音；让孩子点读课件句型卡；家长当同学一起想，用问题引导。\n④快速检测：1.孩子说出6句型；2.用There be造句；3.用Can you...?造句。',
        funElement: '玩"句型接龙"游戏，家长问句型A，孩子回答并问句型B，依次接龙',
        gsapAnimations: ['GSAP:句型逐一弹出-stagger', 'GSAP:关键句型高亮-highlight', 'GSAP:肯定否定对比-compare'],
        images: ['IMG:六大句型总结图', 'IMG:句型操练卡'],
        content: [
          { type: 'text', content: 'Let\'s review the six key sentence patterns from this semester! Master these patterns and you can express yourself in many situations.', animationType: 'reveal' },
          { type: 'example', content: '1. Who\'s your...? — Who\'s your maths teacher?\n2. What do you have on...? — What do you have on Mondays?\n3. What\'s your favourite...? — What\'s your favourite food?\n4. Can you...? — Can you swim?\n5. There is/are... — There is a bed in my room.\n6. Is there...? / Are there...? — Is there a lake in the park?', label: '六大核心句型', animationType: 'cardReveal' },
          { type: 'tip', content: '句型选择有技巧：问人用Who，问事物用What，问能力用Can，问存在用Is/Are there。根据想问的内容选择正确的疑问词。', label: '句型选择技巧', animationType: 'pulse' },
          { type: 'animation', content: '六大句型逐步展示动画，配合时间线呈现每个句型的问答过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Six Sentence Patterns', timelineConfig: { steps: [ { text: 'Who is your English teacher?', ttsNarration: 'Who is your English teacher?' }, { text: 'What do you have on Mondays?', ttsNarration: 'What do you have on Mondays?' }, { text: 'What is your favourite food?', ttsNarration: 'What is your favourite food?' }, { text: 'Can you swim?', ttsNarration: 'Can you swim?' }, { text: 'There is a bed in my room.', ttsNarration: 'There is a bed in my room.' }, { text: 'Is there a lake in the park?', ttsNarration: 'Is there a lake in the park?' } ] }, ttsNarration: '六大句型复习：你的英语老师是谁？星期一有什么课？你最喜欢的食物是什么？你会游泳吗？我房间里有张床。公园里有湖吗？' } },
          { type: 'dialogue', content: 'Tom: Who\'s your new teacher?\nAmy: Miss Wang. She is kind.\nTom: What do you have on Mondays?\nAmy: We have English and maths.\nTom: What\'s your favourite food?\nAmy: My favourite food is fish.\nTom: Can you cook?\nAmy: No, I can\'t. But I can dance!', label: '综合对话', animationType: 'timeline' },
          { type: 'tip', content: '常见错误：What do you have on Monday?（错）→ What do you have on Mondays?（对）星期几要用复数形式表示"每个星期几"。', label: '常见错误', animationType: 'pulse' },
          { type: 'animation', content: 'There is和There are对比动画，单数和复数用法并列展示', animationType: 'compare', animationConfig: { sceneType: 'compare', title: 'There is vs There are', compareConfig: { leftItems: ['There is a bed.', 'There is a lamp.', 'There is a mirror.'], rightItems: ['There are two beds.', 'There are three lamps.', 'There are some mirrors.'], result: 'close', resultText: 'Singular uses is, plural uses are' }, ttsNarration: '对比：单数用There is，复数用There are' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u8l2q1',
            type: 'choice',
            question: '____ your English teacher?',
            options: ['Who\'s', 'What\'s', 'Can', 'Is there'],
            answer: 'Who\'s',
            hint: '问老师是谁，用哪个疑问词？',
            explanation: '问人是谁用Who，Who\'s your English teacher? 你的英语老师是谁？'
          },
          {
            id: 'e5u8l2q2',
            type: 'fill',
            question: 'What do you have ___ Mondays? (用介词填空)',
            answer: 'on',
            hint: '星期几前面用哪个介词？',
            explanation: '星期几前面用介词on：on Mondays，在星期一'
          },
          {
            id: 'e5u8l2q3',
            type: 'choice',
            question: '____ your favourite food?',
            options: ['What\'s', 'Who\'s', 'Can', 'Is there'],
            answer: 'What\'s',
            hint: '问最喜欢的食物，用哪个疑问词？',
            explanation: '问事物用What，What\'s your favourite food? 你最喜欢的食物是什么？'
          },
          {
            id: 'e5u8l2q4',
            type: 'fill',
            question: 'Can you swim? Yes, I ___. (用can或can\'t填空)',
            answer: 'can',
            hint: '肯定回答用哪个词？',
            explanation: 'Can you...?的肯定回答是Yes, I can.否定回答是No, I can\'t.'
          },
          {
            id: 'e5u8l2q5',
            type: 'choice',
            question: '____ there a lake in the park?',
            options: ['Is', 'Are', 'Can', 'What'],
            answer: 'Is',
            hint: 'a lake是单数，用Is还是Are？',
            explanation: 'a lake是单数，用Is。Is there a lake in the park? 公园里有湖吗？'
          },
          {
            id: 'e5u8l2q6',
            type: 'fill',
            question: 'There ___ many books on the shelf. (用is或are填空)',
            answer: 'are',
            hint: 'many books是复数，用哪个be动词？',
            explanation: 'many books是复数，用are。There are many books on the shelf.书架上有许多书'
          },
          {
            id: 'e5u8l2q7',
            type: 'choice',
            question: 'Which question asks about someone\'s ability?',
            options: ['Can you swim?', 'What\'s your name?', 'Who is he?', 'Is there a park?'],
            answer: 'Can you swim?',
            hint: '[能力表达句型]（英语五年级-第4单元）',
            explanation: 'Can you swim?问的是能力，用can句型。回顾第4单元What Can You Do的能力表达'
          }
        ]
      },
      // --- Lesson 3: 阅读与写作总复习 ---
      {
        id: 'e5u8l3',
        title: '阅读与写作总复习：短文理解与仿写',
        order: 3,
        teachingMethod: '读写结合法',
        learningObjective: '我能阅读短文并仿写一段话',
        successCriteria: '①能读懂短文 ②能仿写3句话',
        iDo: '家长示范阅读一篇短文，边读边标注关键信息（谁、做什么、在哪），然后示范仿写一段话',
        weDo: '亲子一起阅读短文，家长提问孩子回答，然后一起讨论如何仿写',
        youDo: '孩子独立阅读短文并回答问题，然后仿写一段介绍自己一周生活的短文',
        parentTips: '【家长预习】本课核心：阅读与写作总复习，读短文标注关键信息，仿写一段话。\n共学四步：\n①对话出题：家长说我们一起读短文，然后仿写一段。并读第一句。\n②孩子应答：孩子应跟读并标注关键信息。\n③答错引导：若孩子读不出，家长当同学一起读！扫描课时发音动画听发音；让孩子点读课件短文卡；家长逐句带孩子读，帮标注信息。\n④快速检测：1.孩子读短文；2.标注关键信息；3.仿写3句。',
        funElement: '玩"故事接龙"游戏，家长写第一句，孩子接第二句，合作完成一个故事',
        gsapAnimations: ['GSAP:阅读关键信息高亮-highlight', 'GSAP:写作步骤时间线-timeline', 'GSAP:关键句型高亮-highlight'],
        images: ['IMG:阅读理解策略图', 'IMG:写作模板图'],
        content: [
          { type: 'text', content: 'Reading and writing review! Let\'s practise reading short passages and writing about our own life.', animationType: 'reveal' },
          { type: 'example', content: 'Read this passage:\n"My name is Tom. I am ten years old. I go to school from Monday to Friday. My favourite day is Friday because we have PE. My favourite food is fish. I can swim and play football. I can\'t cook. There is a small park near my home. I often play there on weekends."', label: '阅读短文', animationType: 'sequence' },
          { type: 'tip', content: '阅读三步法：1.先通读了解大意 2.带着问题找关键信息 3.检查答案是否合理。标注人物、时间、地点等关键信息。', label: '阅读策略', animationType: 'pulse' },
          { type: 'animation', content: '阅读理解步骤时间线动画，逐步展示通读、找信息、答题三步骤', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Reading Steps', timelineConfig: { steps: [ { text: 'Step 1: Read the whole passage.', ttsNarration: 'Step 1: Read the whole passage.' }, { text: 'Step 2: Find key information.', ttsNarration: 'Step 2: Find key information.' }, { text: 'Step 3: Answer the questions.', ttsNarration: 'Step 3: Answer the questions.' }, { text: 'Step 4: Check your answers.', ttsNarration: 'Step 4: Check your answers.' } ] }, ttsNarration: '阅读四步法：通读全文、找关键信息、回答问题、检查答案' } },
          { type: 'dialogue', content: 'Mum: What is Tom\'s favourite day?\nChild: Friday!\nMum: Why does he like Friday?\nChild: Because they have PE.\nMum: What can Tom do?\nChild: He can swim and play football.\nMum: Can he cook?\nChild: No, he can\'t!', label: '阅读理解问答', animationType: 'timeline' },
          { type: 'tip', content: '写作小技巧：用本学期学过的句型来写——My name is... / I go to school... / My favourite... is... / I can... / I can\'t... / There is/are... in my...', label: '写作技巧', animationType: 'pulse' },
          { type: 'example', content: 'Writing example:\n"My name is Lily. I am eleven. My favourite day is Wednesday because we have English. My favourite food is fruit. I can sing and dance. I can\'t swim. There is a big desk in my room. There are many books on it."', label: '仿写范例', animationType: 'sequence' }
        ],
        practiceQuestions: [
          {
            id: 'e5u8l3q1',
            type: 'choice',
            question: 'Read: "Tom\'s favourite day is Friday." Why does Tom like Friday?',
            options: ['Because they have PE', 'Because they have English', 'Because it is the weekend', 'Because he can cook'],
            answer: 'Because they have PE',
            hint: '在短文中找Tom喜欢Friday的原因',
            explanation: '短文说"My favourite day is Friday because we have PE"，Tom喜欢Friday因为有体育课'
          },
          {
            id: 'e5u8l3q2',
            type: 'fill',
            question: 'Read: "Tom can swim and play football. He can\'t ___."',
            answer: 'cook',
            acceptableAnswers: ['Cook'],
            hint: '短文中Tom不会做什么？',
            explanation: '短文说"I can\'t cook"，Tom不会做饭'
          },
          {
            id: 'e5u8l3q3',
            type: 'choice',
            question: 'Read: "There is a small park near my home." Where is the park?',
            options: ['Near Tom\'s home', 'In the school', 'Near the lake', 'In the forest'],
            answer: 'Near Tom\'s home',
            hint: '公园在哪里？',
            explanation: '短文说"There is a small park near my home"，公园在Tom家附近'
          },
          {
            id: 'e5u8l3q4',
            type: 'fill',
            question: 'Read: "Tom goes to school from Monday to ___."',
            answer: 'Friday',
            acceptableAnswers: ['friday'],
            hint: 'Tom从星期一上到星期几？',
            explanation: '短文说"I go to school from Monday to Friday"，Tom从星期一到星期五上学'
          },
          {
            id: 'e5u8l3q5',
            type: 'choice',
            question: 'Which sentence can you use to start writing about yourself?',
            options: ['My name is...', 'Your name is...', 'He name is...', 'Name my is...'],
            answer: 'My name is...',
            hint: '介绍自己时第一句怎么说？',
            explanation: '介绍自己用My name is...开头，是正确的自我介绍句型'
          },
          {
            id: 'e5u8l3q6',
            type: 'fill',
            question: 'Write about your room: There ___ a bed and a desk in my room. (用is或are填空)',
            answer: 'is',
            hint: 'a bed and a desk，就近原则看哪个？',
            explanation: 'There be句型就近原则，靠近be动词的是a bed（单数），所以用is'
          },
          {
            id: 'e5u8l3q7',
            type: 'choice',
            question: 'Which strategy helps you understand a reading passage better?',
            options: ['Read first, then find details, then check', 'Only look at pictures', 'Read as fast as possible', 'Skip all difficult words'],
            answer: 'Read first, then find details, then check',
            hint: '[阅读策略]（英语五年级-第7单元）',
            explanation: '先通读、再找细节、最后检查是有效的阅读策略。回顾第7单元阅读进阶的策略'
          }
        ]
      },
      // --- Lesson 4: 对话与表达总复习 ---
      {
        id: 'e5u8l4',
        title: '对话与表达总复习：情景交际',
        order: 4,
        teachingMethod: '角色扮演法',
        learningObjective: '我能在不同情景中用英语进行对话交际',
        successCriteria: '①能完成2个情景对话 ②能用学过的句型交流',
        iDo: '家长示范不同情景的对话：在学校介绍老师、谈论课程表、在餐厅点餐、展示才艺、介绍房间、游公园',
        weDo: '亲子一起分角色扮演不同情景对话，家长当A孩子当B，再互换角色',
        youDo: '孩子独立选择一个情景，完成完整的对话，注意使用正确的句型和礼貌用语',
        parentTips: '【家长预习】本课核心：对话与表达总复习，情景交际——介绍老师、谈论课程、点餐、展示才艺、介绍房间、游公园。\n共学四步：\n①对话出题：家长说我们模拟介绍你的老师。并示范Who is your English teacher?。\n②孩子应答：孩子应说My English teacher is Miss Wang.。\n③答错引导：若孩子说不出，家长当同学一起演！扫描课时发音动画听发音；让孩子点读课件情景卡；家长模拟场景边演边说。\n④快速检测：1.孩子完成2个情景对话；2.用学过句型；3.问答互换。',
        funElement: '玩"情景卡片"游戏，抽到什么情景就即兴表演一段对话',
        gsapAnimations: ['GSAP:对话时间线-timeline', 'GSAP:角色卡片翻转-cardReveal', 'GSAP:对话高亮-highlight'],
        images: ['IMG:六大情景对话图', 'IMG:角色扮演卡'],
        content: [
          { type: 'text', content: 'Dialogue and expression review! Let\'s practise conversations in different real-life situations.', animationType: 'reveal' },
          { type: 'example', content: 'Situation 1: At school\n— Who\'s your new teacher?\n— Mr. Li. He is kind and funny.\nSituation 2: Talking about timetable\n— What do you have on Mondays?\n— We have Chinese, maths and English.\nSituation 3: At a restaurant\n— What\'s your favourite food?\n— My favourite food is fish. I don\'t like peppers.', label: '情景对话', animationType: 'cardReveal' },
          { type: 'tip', content: '对话三要素：1.听清对方问什么 2.用正确的句型回答 3.可以追问或补充信息让对话更自然。', label: '对话技巧', animationType: 'pulse' },
          { type: 'animation', content: '情景对话时间线动画，逐步展示不同场景的对话过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Situation Dialogues', timelineConfig: { steps: [ { text: 'A: Can you swim?', ttsNarration: 'A: Can you swim?' }, { text: 'B: Yes, I can. Can you?', ttsNarration: 'B: Yes, I can. Can you?' }, { text: 'A: No, I can\'t. But I can dance.', ttsNarration: 'A: No, I can\'t. But I can dance.' }, { text: 'B: That\'s great! Can you teach me?', ttsNarration: 'B: That\'s great! Can you teach me?' } ] }, ttsNarration: '能力对话：你会游泳吗？会，你呢？我不会，但我会跳舞。太棒了，你能教我吗？' } },
          { type: 'dialogue', content: 'Amy: Welcome to my new room!\nTom: Wow, it\'s nice! Is there a bed?\nAmy: Yes, there is. There is a big bed near the window.\nTom: Are there any books?\nAmy: Yes, there are many books on the desk.\nTom: Is there a computer?\nAmy: No, there isn\'t. But there is a lamp.', label: '房间介绍对话', animationType: 'timeline' },
          { type: 'tip', content: '礼貌用语很重要：打招呼用Hello/Hi，感谢用Thank you，请求用Can you...? / Could you...?，告别用Goodbye/See you。', label: '礼貌用语', animationType: 'pulse' },
          { type: 'animation', content: '角色卡片翻转动画，展示不同情景下的角色和对话要点', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Role Play Cards', cardRevealConfig: { cards: [ { front: 'At School', back: '🏫', ttsText: 'At school: talk about teachers and subjects' }, { front: 'At Home', back: '🏠', ttsText: 'At home: talk about room and family' }, { front: 'At Park', back: '🌳', ttsText: 'At park: talk about nature and abilities' }, { front: 'At Restaurant', back: '🍽️', ttsText: 'At restaurant: talk about food and preferences' } ] }, ttsNarration: '角色扮演卡：在学校、在家、在公园、在餐厅四种情景对话' } }
        ],
        practiceQuestions: [
          {
            id: 'e5u8l4q1',
            type: 'choice',
            question: 'Someone asks "Who\'s your English teacher?" What do you say?',
            options: ['Miss Wang. She is kind.', 'I am fine.', 'It is Monday.', 'Yes, I can.'],
            answer: 'Miss Wang. She is kind.',
            hint: '问你的英语老师是谁，怎么回答？',
            explanation: '问Who\'s your...?应回答老师名字加描述：Miss Wang. She is kind.'
          },
          {
            id: 'e5u8l4q2',
            type: 'fill',
            question: 'A: Can you swim? B: Yes, I ___.',
            answer: 'can',
            hint: '肯定回答Can you...?',
            explanation: 'Can you...?的肯定回答是Yes, I can.'
          },
          {
            id: 'e5u8l4q3',
            type: 'choice',
            question: 'You want to know your friend\'s favourite food. What do you ask?',
            options: ['What\'s your favourite food?', 'Who\'s your favourite food?', 'Can your favourite food?', 'Is there your favourite food?'],
            answer: 'What\'s your favourite food?',
            hint: '问最喜欢的食物用什么句型？',
            explanation: '问最喜欢的事物用What\'s your favourite...?句型'
          },
          {
            id: 'e5u8l4q4',
            type: 'fill',
            question: 'A: Is there a lake in the park? B: Yes, there ___.',
            answer: 'is',
            hint: 'Is there...?的肯定回答',
            explanation: 'Is there...?的肯定回答是Yes, there is.否定回答是No, there isn\'t.'
          },
          {
            id: 'e5u8l4q5',
            type: 'choice',
            question: 'Your friend says "Welcome to my room!" What is the best response?',
            options: ['Thank you! It\'s nice!', 'Goodbye!', 'I don\'t know.', 'No, thank you.'],
            answer: 'Thank you! It\'s nice!',
            hint: '别人欢迎你来参观，应该怎么回应？',
            explanation: '别人说Welcome to...时，应表示感谢并赞美：Thank you! It\'s nice!'
          },
          {
            id: 'e5u8l4q6',
            type: 'fill',
            question: 'A: Are there ___ books on the desk? B: Yes, there are many. (用some或any填空)',
            answer: 'any',
            acceptableAnswers: ['Any'],
            hint: '疑问句中用some还是any？',
            explanation: '疑问句和否定句中用any：Are there any books? 肯定句用some：There are some books.'
          },
          {
            id: 'e5u8l4q7',
            type: 'choice',
            question: 'Which is a polite way to ask for help?',
            options: ['Can you help me, please?', 'Help me now!', 'You must help me.', 'I want help.'],
            answer: 'Can you help me, please?',
            hint: '[礼貌用语]（英语五年级-第1单元）',
            explanation: '礼貌请求帮助用Can you...please?句型。回顾第1单元学习的礼貌交际表达'
          }
        ]
      },
      // --- Lesson 5: 学期综合测评 ---
      {
        id: 'e5u8l5',
        title: '学期综合测评：全学期知识检测',
        order: 5,
        teachingMethod: '综合测评法',
        learningObjective: '我能通过学期综合测评，检测全学期知识掌握情况',
        successCriteria: '①能完成综合测评 ②正确率达80%以上',
        iDo: '家长说明测评规则：共7道题涵盖词汇、句型、阅读、对话，限时完成，完成后一起订正',
        weDo: '亲子一起分析错题，找出薄弱环节，制定暑期复习计划',
        youDo: '孩子独立完成综合测评，不翻看书本，完成后自查再由家长批改',
        parentTips: '【家长预习】本课核心：学期综合测评，涵盖词汇、句型、阅读、对话，检测全学期学习成果。\n共学四步：\n①对话出题：家长说我们来做学期综合测评，检测这学期的学习。。\n②孩子应答：孩子应说Let\'s go!。\n③答错引导：若孩子遇到困难，家长当同学一起想！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学一起回顾，帮孩子分析。\n④快速检测：1.孩子完成测评；2.正确率达80%；3.错题订正。',
        funElement: '完成测评后获得"学期之星"勋章，根据得分获得不同等级的星星奖励',
        gsapAnimations: ['GSAP:星星飞入庆祝-starFlyIn', 'GSAP:通关撒花-confetti', 'GSAP:题目逐个弹出-stagger'],
        images: ['IMG:综合测评卷', 'IMG:学期之星勋章'],
        content: [
          { type: 'text', content: 'Final test time! This test covers everything we learned this semester. Take your time and do your best!', animationType: 'reveal' },
          { type: 'example', content: 'Test areas:\n1. Vocabulary — teachers, days, food, abilities, room, nature\n2. Sentence patterns — 6 key patterns\n3. Reading — short passage comprehension\n4. Writing — write about yourself\n5. Dialogue — situational conversations', label: '测评范围', animationType: 'cardReveal' },
          { type: 'tip', content: '答题技巧：选择题先排除明显错误选项；填空题注意大小写和拼写；阅读题先看问题再回原文找答案。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '测评通关徽章出现动画，翻转揭示学期之星勋章', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Semester Star Badge', cardRevealConfig: { cards: [ { front: 'Test', back: '📝', ttsText: 'Final test' }, { front: 'Pass', back: '⭐', ttsText: 'You passed' }, { front: 'Star', back: '🌟', ttsText: 'Semester Star earned' } ] }, ttsNarration: '综合测评完成，恭喜通关，获得学期之星勋章' } },
          { type: 'dialogue', content: 'Mum: Test time! Are you ready?\nChild: Yes, I\'m ready!\nMum: Question 1: What day comes after Tuesday?\nChild: Wednesday!\nMum: Correct! Question 2: Is there a bed in your room?\nChild: Yes, there is!\nMum: Great! You\'re doing well!', label: '测评对话', animationType: 'timeline' },
          { type: 'tip', content: '时间管理：基础题快速完成，难题多花时间思考。如果某题卡住，先跳过做完后面的再回来。', label: '时间管理', animationType: 'pulse' },
          { type: 'example', content: 'Score guide:\n7/7 — Excellent! You mastered everything!\n5-6/7 — Great job! Review the mistakes.\n3-4/7 — Good effort! Practise more.\n0-2/7 — Don\'t worry! Let\'s review together.', label: '评分标准', animationType: 'sequence' }
        ],
        practiceQuestions: [
          {
            id: 'e5u8l5q1',
            type: 'choice',
            question: 'Which is a day of the week?',
            options: ['Wednesday', 'January', 'Spring', 'Morning'],
            answer: 'Wednesday',
            hint: '哪个是星期几？',
            explanation: 'Wednesday是星期三，属于星期词汇；January是月份，Spring是季节，Morning是时段'
          },
          {
            id: 'e5u8l5q2',
            type: 'fill',
            question: 'My favourite ___ is fish. (填food或day)',
            answer: 'food',
            acceptableAnswers: ['Food'],
            hint: 'fish是一种什么？',
            explanation: 'fish是鱼，属于食物，所以用food：My favourite food is fish.'
          },
          {
            id: 'e5u8l5q3',
            type: 'choice',
            question: 'Choose the correct sentence.',
            options: ['There are two beds in my room.', 'There is two beds in my room.', 'There two beds in my room.', 'Two beds there is in my room.'],
            answer: 'There are two beds in my room.',
            hint: 'two beds是复数，用哪个be动词？',
            explanation: 'two beds是复数，用There are。There are two beds in my room.我房间有两张床'
          },
          {
            id: 'e5u8l5q4',
            type: 'fill',
            question: '___ you play football? Yes, I can. (用Can或Do填空)',
            answer: 'Can',
            acceptableAnswers: ['can'],
            hint: '回答是Yes, I can，问句用什么？',
            explanation: '回答是Yes, I can，所以问句用Can：Can you play football?你会踢足球吗？'
          },
          {
            id: 'e5u8l5q5',
            type: 'choice',
            question: 'Read: "Amy likes Mondays. She has English on Mondays." What does Amy like?',
            options: ['Mondays', 'Fridays', 'PE', 'Cooking'],
            answer: 'Mondays',
            hint: '短文中Amy喜欢什么？',
            explanation: '短文说"Amy likes Mondays"，Amy喜欢星期一，因为星期一有英语课'
          },
          {
            id: 'e5u8l5q6',
            type: 'fill',
            question: 'What ___ you have on Fridays? We have PE and art. (用do或are填空)',
            answer: 'do',
            acceptableAnswers: ['Do'],
            hint: '问星期几有什么课，用什么疑问词？',
            explanation: '问课程用What do you have on...?句型，用do：What do you have on Fridays?'
          },
          {
            id: 'e5u8l5q7',
            type: 'choice',
            question: 'Which sentence correctly describes a park?',
            options: ['There is a lake and many trees in the park.', 'There is a desk and a bed in the park.', 'There is a Monday in the park.', 'There is a kind in the park.'],
            answer: 'There is a lake and many trees in the park.',
            hint: '[自然景观描述]（英语五年级-第6单元）',
            explanation: '公园里应该有自然景观如湖和树：There is a lake and many trees in the park.回顾第6单元Nature Park'
          }
        ]
      }
    ]
  }
]
