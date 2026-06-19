import type { Unit } from '@/types'

export const chineseGrade3: Unit[] = [
  {
    id: 'c3u1',
    title: '学校生活',
    subtitle: '感受校园的丰富多彩',
    order: 1,
    lessons: [
      {
        id: 'c3u1l1',
        title: '大青树下的小学',
        order: 1,
        content: [
                    { type: 'example', content: '坝(bà)\n偏旁：土\n本义：拦水的堤\n引申义：大坝、堤坝\n组词：大坝、堤坝\n儿歌：土贝为坝拦住水', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '飘(piāo)\n偏旁：风\n本义：随风飞动\n引申义：飘扬、飘动\n组词：飘扬、飘动\n儿歌：风票为飘随风舞', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '大青树\n释义：一种高大的常绿树\n网络用法：大青树下真凉快！\n典故：大青树是南方常见的树\n趣味表达：大青树是校园的保护伞', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '民族\n释义：有共同语言文化的群体\n网络用法：五十六个民族一家亲！\n典故：中国有五十六个民族\n趣味表达：民族是文化的大家庭', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '早晨，从山坡上，从坪坝里，从一条条开着绒球花和太阳花的小路上，走来了许多小学生', animationType: 'reveal' },
          { type: 'text', content: '这所小学真特别！有汉族、傣族、景颇族、阿昌族、德昂族等不同民族的同学，大家穿戴不同，语言不同，但都是好朋友', animationType: 'reveal' },
          { type: 'example', content: '课文描写的学校特色：\n穿戴不同——各民族服装各不相同\n语言不同——说不同的民族语言\n来到同一间教室——一起学习\n一起朗读——声音好听极了\n铜钟敲响——下课一起玩耍', label: '学校特色', animationType: 'bounce' },
          { type: 'tip', content: '细节品读法：关注课文中的细节描写，如"穿戴不同""语言不同"等，这些细节让文章更生动，也让我们感受到多元文化的魅力！', label: '阅读技巧', animationType: 'pulse' },
          { type: 'animation', content: '不同民族同学欢聚动画，各民族服装的小朋友一起上学', animationType: 'bounce' },
        ],
        teachingMethod: '细节品读法',
        iDo: '家长朗读课文，在描写学校特色的句子处停顿，引导孩子关注细节描写。',
        weDo: '亲子一起比较这所学校和自己学校的异同，说说各自学校的特色。',
        youDo: '孩子独立朗读课文，找出描写民族特色的句子并摘抄。',
        parentTips: '引导孩子关注课文中"穿戴不同""语言不同"等细节，感受多元文化。',
        funElement: '小游戏：学校大比拼！你的学校有什么特别的？大青树下的学校有不同民族的同学，你的学校有什么？🏫',
        gsapAnimations: ['GSAP: 不同民族同学欢聚动画'],
        images: ['IMG: 大青树下的小学场景图'],
        practiceQuestions: [
          {
            id: 'c3u1l1q1',
            type: 'choice',
            question: '大青树下的小学有什么特别之处？',
            options: ['学校很大', '有不同民族的同学', '有很多树'],
            answer: '有不同民族的同学',
            hint: '课文中反复提到什么',
            explanation: '这所小学有不同民族的同学一起上学，这是它最特别的地方。'
          },
          {
            id: 'c3u1l1q2',
            type: 'fill',
            question: '同学们穿戴___，来到学校',
            answer: '不同',
            hint: '每个民族的服装一样吗',
            explanation: '课文中写同学们穿戴不同，因为来自不同民族，服装各不相同。'
          },
          {
            id: 'c3u1l1q3',
            type: 'drag',
            question: '按课文顺序排列学校一天的活动',
            answer: '上学,上课,下课,放学',
            hint: '按照时间顺序',
            explanation: '课文按时间顺序描写：上学→上课→下课→放学。'
          }
        ,
          {
            id: 'c3u1l1q4',
            type: 'choice',
            question: '课文写同学们"穿戴不同""语言不同"却"一起朗读"，这说明了什么？',
            options: ["同学们关系紧张","不同民族的同学团结友爱","学校要求统一服装"],
            answer: '不同民族的同学团结友爱',
            hint: '从细节描写体会同学们的关系',
            explanation: '虽然各民族同学穿戴、语言不同，却能一起学习朗读，说明他们团结友爱，体现了多元文化的和谐。'
          },
          {
            id: 'c3u1l1q5',
            type: 'fill',
            question: '"大青树下的小学"中同学们在___下做游戏',
            answer: '大青树',
            hint: '学校里有什么特别的树',
            explanation: '同学们在大青树下做游戏，大青树是学校的标志。'
          },
          {
            id: 'c3u1l1q6',
            type: 'choice',
            question: '【期末真题】"大青树下的小学"表达了什么情感？',
            options: ["对学校的喜爱","对作业的讨厌","对假期的期待"],
            answer: '对学校的喜爱',
            hint: '课文整体的感情基调',
            explanation: '课文表达了对学校和校园生活的喜爱之情。这是期末常考题！'
          },
          {
            id: 'c3u1l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：寓言故事的特点是什么？',
            answer: '小故事大道理',
            hint: '[寓言故事]（语文二年级-第8单元）',
            explanation: '寓言故事通过短小的故事告诉我们深刻的道理，这是二年级学过的知识。'
          }]
      },
      {
        id: 'c3u1l2',
        title: '花的学校',
        order: 2,
        content: [
                    { type: 'example', content: '荒(huāng)\n偏旁：艹\n本义：荒芜\n引申义：荒野、荒凉\n组词：荒野、荒凉\n儿歌：草头芒为荒无人烟', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '笛(dí)\n偏旁：竹\n本义：管乐器\n引申义：笛子、竹笛\n组词：笛子、竹笛\n儿歌：竹由为笛声悠扬', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '花的学校\n释义：泰戈尔的诗歌\n网络用法：花也有学校太有趣了！\n典故：泰戈尔想象花的世界\n趣味表达：花的学校是自然的课堂', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '拟人\n释义：把事物当人来写\n网络用法：拟人让文章更生动！\n典故：拟人是常用的修辞手法\n趣味表达：拟人是给万物赋予灵魂', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '雷云在天上轰响，六月的阵雨落下的时候，一群一群的花从无人知道的地方突然跑出来，在绿草上跳着狂欢的舞', animationType: 'reveal' },
          { type: 'example', content: '泰戈尔的想象：\n花孩子们在地下学校上学——花在地下生长\n花孩子们关了门做功课——花蕾紧闭\n花孩子们放假了跑出来——花朵绽放\n花孩子们扬起双臂向妈妈——花朵向上开放', label: '想象解析', animationType: 'bounce' },
          { type: 'dialogue', content: '花孩子说："在地下学校好无聊啊！"\n雷云说："轰隆隆！放假啦！"\n花孩子们说："太好了！我们跑出去玩吧！"\n花妈妈说："孩子们，快回来！"', label: '花孩子对话', animationType: 'reveal' },
          { type: 'tip', content: '泰戈尔的散文诗充满想象力！他把花想象成在地底下的学校上课的孩子，下雨就是放假，花开了就是跑出来玩。你也来想象一下！', label: '想象阅读法', animationType: 'pulse' },
          { type: 'animation', content: '花朵从地下冒出绽放动画，花孩子们在绿草上跳舞', animationType: 'bounce' },
        ],
        teachingMethod: '想象阅读法',
        iDo: '家长朗读课文，用丰富的语气表现花孩子们在地下学校上课、下雨时跑出来的场景。',
        weDo: '亲子一起想象：如果你是花孩子，在地下学校会学什么？跑出来后会做什么？',
        youDo: '孩子独立朗读课文，找出自己最喜欢的想象句子并背诵。',
        parentTips: '泰戈尔的散文诗充满想象力，鼓励孩子也大胆想象。',
        funElement: '小游戏：花孩子放学啦！想象花孩子们从地下跑出来，在绿草上跳舞、狂欢！你来当一朵花，跳一跳！🌺',
        gsapAnimations: ['GSAP: 花朵从地下冒出绽放动画'],
        images: ['IMG: 花的学校意境图'],
        practiceQuestions: [
          {
            id: 'c3u1l2q1',
            type: 'choice',
            question: '"花的学校"的作者是谁？',
            options: ['冰心', '泰戈尔', '叶圣陶'],
            answer: '泰戈尔',
            hint: '这位诗人来自印度',
            explanation: '《花的学校》作者是印度诗人泰戈尔，他写过很多优美的诗歌。'
          },
          {
            id: 'c3u1l2q2',
            type: 'fill',
            question: '花孩子们在___学校上课',
            answer: '地下',
            hint: '花在地下做什么',
            explanation: '课文中想象花孩子们在地下学校上课，下雨时就跑出来玩。'
          },
          {
            id: 'c3u1l2q3',
            type: 'choice',
            question: '花孩子们什么时候跑出来？',
            options: ['太阳出来时', '下雨时', '天黑时'],
            answer: '下雨时',
            hint: '课文说花什么时候开了',
            explanation: '课文中写花孩子们在下雨时从地下学校跑出来，在绿草上跳舞。'
          }
        ,
          {
            id: 'c3u1l2q4',
            type: 'choice',
            question: '泰戈尔为什么把花想象成在地下学校上课的孩子？',
            options: ["因为花真的会读书","为了表现花像孩子一样可爱活泼","因为花长在地下"],
            answer: '为了表现花像孩子一样可爱活泼',
            hint: '想象的作用是什么',
            explanation: '泰戈尔用拟人手法把花想象成孩子，让诗歌更生动有趣，表现花的可爱活泼。'
          },
          {
            id: 'c3u1l2q5',
            type: 'fill',
            question: '"花的学校"中花儿在___里做功课',
            answer: '地下的学校',
            hint: '花儿在哪里学习',
            explanation: '诗中想象花儿在地下的学校里做功课。'
          },
          {
            id: 'c3u1l2q6',
            type: 'choice',
            question: '【期末真题】"花的学校"用了什么修辞手法？',
            options: ["拟人","夸张","排比"],
            answer: '拟人',
            hint: '花儿像什么',
            explanation: '课文把花儿拟人化，想象它们上学、做功课、放假。这是期末常考题！'
          },
          {
            id: 'c3u1l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：写日记的格式是什么？',
            answer: '日期天气正文',
            hint: '[日记格式]（语文三年级-第1单元）',
            explanation: '日记的格式是先写日期和天气，再写正文内容。'
          }
        ]
      },
      {
        id: 'c3u1l3',
        title: '不懂就要问',
        order: 3,
        content: [
                    { type: 'example', content: '诵(sòng)\n偏旁：讠\n本义：朗读\n引申义：背诵、诵读\n组词：背诵、诵读\n儿歌：言甬为诵大声读', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '例(lì)\n偏旁：亻\n本义：例子\n引申义：例子、例题\n组词：例子、例题\n儿歌：人列为例举一个', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '勤学好问\n释义：努力学习喜欢提问\n网络用法：不懂就要问，勤学好问！\n典故：孙中山勤学好问\n趣味表达：勤学好问是学习的金钥匙', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '私塾\n释义：旧时私人设立的教学处\n网络用法：古代的私塾好严格！\n典故：孙中山在私塾读书\n趣味表达：私塾是古代的学校', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '孙中山小时候在私塾读书。那时候，先生只让学生背诵，不讲解意思。同学们都只是跟着背，谁也不敢问', animationType: 'reveal' },
          { type: 'dialogue', content: '孙中山壮着胆子站起来问："先生，您刚才让我背的这段书是什么意思？请您给我讲讲吧！"\n先生愣住了，说："你想学知识，那就问吧！"\n同学们都吓了一跳，因为从来没有人敢问先生问题！', label: '孙中山提问', animationType: 'reveal' },
          { type: 'example', content: '孙中山的勤学精神：\n别人不敢问，他敢问\n别人只管背，他要理解\n学问学问，不懂就要问\n这种精神值得我们学习！', label: '勤学精神', animationType: 'bounce' },
          { type: 'tip', content: '思辨讨论：为什么不懂就要问？因为只有问才能理解，只有理解才能真正学会。不要害怕提问，提问是学习的好方法！', label: '思辨启示', animationType: 'pulse' },
          { type: 'animation', content: '举手提问动作动画，孙中山勇敢站起来问先生', animationType: 'bounce' },
        ],
        teachingMethod: '思辨讨论法',
        iDo: '家长朗读课文，重点讲解孙中山小时候勤学好问的故事。',
        weDo: '亲子一起讨论：为什么不懂就要问？你有没有因为不敢问而后悔的经历？',
        youDo: '孩子独立阅读课文，写一段话谈谈自己对"不懂就要问"的理解。',
        parentTips: '鼓励孩子在学习中大胆提问，不要害怕说"我不懂"。',
        funElement: '小游戏：提问大王！今天学习中有不懂的地方吗？大胆提出来！问得越多学得越多！🙋',
        gsapAnimations: ['GSAP: 举手提问动作动画'],
        images: ['IMG: 孙中山勤学插图'],
        practiceQuestions: [
          {
            id: 'c3u1l3q1',
            type: 'choice',
            question: '孙中山小时候做了什么让先生惊讶的事？',
            options: ['背书很快', '主动提问', '逃学'],
            answer: '主动提问',
            hint: '课文的主题是什么',
            explanation: '孙中山主动向先生提问，这在当时是很少见的，因为学生一般不敢问先生。'
          },
          {
            id: 'c3u1l3q2',
            type: 'fill',
            question: '学问学问，不懂就要___',
            answer: '问',
            hint: '不懂的时候应该怎么做',
            explanation: '"学问学问，不懂就要问"，学问就是在不断提问中获得的。'
          },
          {
            id: 'c3u1l3q3',
            type: 'choice',
            question: '这个故事告诉我们什么？',
            options: ['背书最重要', '要勤学好问', '先生很严厉'],
            answer: '要勤学好问',
            hint: '孙中山的精神是什么',
            explanation: '故事告诉我们要像孙中山一样勤学好问，不懂就大胆提问。'
          }
        ,
          {
            id: 'c3u1l3q4',
            type: 'choice',
            question: '为什么孙中山主动提问会让先生和同学们都惊讶？',
            options: ["因为问题太难","因为当时私塾里学生只背书不敢问","因为孙中山声音太大"],
            answer: '因为当时私塾里学生只背书不敢问',
            hint: '当时的私塾是怎样的',
            explanation: '当时私塾里先生只让学生背诵，不讲解意思，学生从来不敢问，所以孙中山主动提问让大家很惊讶。'
          },
          {
            id: 'c3u1l3q5',
            type: 'fill',
            question: '"不懂就要问"告诉我们学习要___',
            answer: '勤学好问',
            hint: '遇到不懂的怎么办',
            explanation: '遇到不懂的问题要大胆提问，勤学好问才能学得好。'
          },
          {
            id: 'c3u1l3q6',
            type: 'choice',
            question: '【期末真题】"不懂就要问"告诉我们什么？',
            options: ["背书最重要","要勤学好问","先生很严厉"],
            answer: '要勤学好问',
            hint: '课文的核心道理',
            explanation: '课文告诉我们要勤学好问，不懂就要大胆提问。这是期末常考题！'
          },
          {
            id: 'c3u1l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："咏鹅"的作者是谁？',
            answer: '骆宾王',
            hint: '[古诗作者]（语文三年级-第1单元）',
            explanation: '"咏鹅"是唐代诗人骆宾王七岁时写的诗。'
          }
        ]
      },
      {
        id: 'c3u1l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u1l4q1',
            type: 'choice',
            question: '本单元关于校园描写，第1课的重点知识是什么？',
            options: ['校园描写', '生字学习', '古诗背诵'],
            answer: '校园描写',
            hint: '想想本单元如何描写校园生活',
            explanation: '本单元第1课重点学习校园描写，学会用文字描绘校园场景。'
          },
          {
            id: 'c3u1l4q2',
            type: 'fill',
            question: '《花的学校》中，花儿在什么地方上课？___',
            answer: '地下',
            hint: '回顾本单元内容',
            explanation: '《花的学校》中，花儿在地下的学校里上课。'
          },
          {
            id: 'c3u1l4q3',
            type: 'choice',
            question: '本单元关于人物刻画，第3课的重点知识是什么？',
            options: ['人物刻画', '生字学习', '古诗背诵'],
            answer: '人物刻画',
            hint: '想想本单元如何描写人物',
            explanation: '本单元第3课重点学习人物刻画，学会描写校园中的人物形象。'
          },
          {
            id: 'c3u1l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u1l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['不懂就要问', '古诗背诵', '日记格式', '寓言故事的道理'],
            answer: '不懂就要问',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了校园生活的丰富多彩，以及不懂就要问的学习态度。'
          },
          {
            id: 'c3u1l4q6',
            type: 'choice',
            question: '【期末真题】本单元"学校生活"的学习重点是以下哪个？',
            options: ['感受校园的丰富多彩', '数学计算', '英语单词'],
            answer: '感受校园的丰富多彩',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是感受校园的丰富多彩，这是期末常考的内容！'
          },
          {
            id: 'c3u1l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："花的学校"中花儿在哪里上课？',
            answer: '地下',
            hint: '[课文内容]（语文三年级-第1单元）',
            explanation: '"花的学校"中，花儿在地下的学校里上课。'
          }
        ]
      },
      {
        id: 'c3u1l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"学校生活"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u1l5q1',
            type: 'choice',
            question: '本单元"学校生活"主要学习了什么？',
            options: ['感受校园的丰富多彩', '数学计算', '英语单词'],
            answer: '感受校园的丰富多彩',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u1l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u1l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u1l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u1l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['大青树下的小学真热闹', '霜叶红于二月花', '去年的树真让人感动', '司马光砸缸救了小朋友'],
            answer: '大青树下的小学真热闹',
            hint: '回顾本单元内容，找出与本单元课文相关的句子',
            explanation: '"大青树下的小学真热闹"使用了本单元《大青树下的小学》的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c3u1l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['感受校园的丰富多彩', '其他单元内容', '课外知识'],
            answer: '感受校园的丰富多彩',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是感受校园的丰富多彩，这是期末常考的内容！'
          },
          {
            id: 'c3u1l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：描写校园生活可以用什么写作方法？',
            answer: '按顺序描写',
            hint: '[写作方法]（语文三年级-第1单元）',
            explanation: '描写校园生活可以按时间顺序或空间顺序来写。'
          }
        ]
      }
    ]
  },
  {
    id: 'c3u2',
    title: '写景文章',
    subtitle: '品味写景古诗',
    order: 2,
    lessons: [
      {
        id: 'c3u2l1',
        title: '山行',
        order: 1,
        content: [
                    { type: 'example', content: '霜(shuāng)\n偏旁：雨\n本义：水汽凝结的白色晶体\n引申义：霜降、冰霜\n组词：霜降、冰霜\n儿歌：雨相为霜秋末白', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '径(jìng)\n偏旁：彳\n本义：小路\n引申义：路径、捷径\n组词：路径、捷径\n儿歌：彳巠为径山路弯', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '霜叶\n释义：经霜的枫叶\n网络用法：霜叶红于二月花！\n典故：杜牧写山行赞美秋景\n趣味表达：霜叶是秋天的火焰', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '寒山\n释义：深秋的山\n网络用法：寒山石径斜好美！\n典故：杜牧秋游寒山\n趣味表达：寒山是秋天的画布', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '山行\n【唐】杜牧\n\n远上寒山石径斜，\n白云生处有人家。\n停车坐爱枫林晚，\n霜叶红于二月花。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '弯弯曲曲的山路伸向远方，白云飘浮的地方有人家。停下车来，是因为喜爱这枫林晚景，经霜的红叶比二月的春花还要红艳', animationType: 'reveal' },
          { type: 'example', content: '"远上寒山石径斜"——山路弯弯曲曲伸向秋山\n"白云生处有人家"——白云深处有人居住\n"停车坐爱枫林晚"——停下车欣赏枫林晚景\n"霜叶红于二月花"——秋天的红叶比春天的花还美\n"于"=比，红叶比春花还红！', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '千古名句"霜叶红于二月花"：杜牧认为秋天的红叶比春天的花还美！这打破了"春花最美"的想法，表达了对秋天独特之美的赞美！', label: '名句赏析', animationType: 'pulse' },
          { type: 'animation', content: '秋山红叶层林尽染动画，山路蜿蜒、红叶似火', animationType: 'bounce' },
        ],
        teachingMethod: '画面还原法',
        iDo: '家长朗读古诗，逐句讲解画面：山路、人家、白云、红叶。',
        weDo: '亲子一起画一幅山行图，把诗中四个画面画出来。',
        youDo: '孩子独立背诵古诗，用自己的话描述诗中的秋景。',
        parentTips: '"霜叶红于二月花"是千古名句，杜牧认为秋天的红叶比春天的花还美。',
        funElement: '小游戏：秋色画家！杜牧说秋叶比春花还美，你画一幅秋景看看，是不是比春天还漂亮！🍁',
        gsapAnimations: ['GSAP: 秋山红叶层林尽染动画'],
        images: ['IMG: 山行秋景意境图'],
        practiceQuestions: [
          {
            id: 'c3u2l1q1',
            type: 'choice',
            question: '"霜叶红于二月花"中"于"是什么意思？',
            options: ['在', '比', '和'],
            answer: '比',
            hint: '红叶和春花比怎么样',
            explanation: '"于"是"比"的意思，"红于二月花"就是比二月的花还红。'
          },
          {
            id: 'c3u2l1q2',
            type: 'fill',
            question: '远上寒山石径___',
            answer: '斜',
            hint: '山路是什么样子的',
            explanation: '原诗"远上寒山石径斜"，山路弯弯曲曲向上延伸。'
          },
          {
            id: 'c3u2l1q3',
            type: 'choice',
            question: '这首诗描写的是哪个季节？',
            options: ['春天', '夏天', '秋天'],
            answer: '秋天',
            hint: '霜叶是什么时候的景色',
            explanation: '诗中"霜叶红于二月花"描写的是秋天经霜后的红叶。'
          }
        ,
          {
            id: 'c3u2l1q4',
            type: 'choice',
            question: '"霜叶红于二月花"用比较的方法想说明什么？',
            options: ["秋叶不如春花红","经霜的秋叶比春花还要红艳","二月的花最红"],
            answer: '经霜的秋叶比春花还要红艳',
            hint: '诗人用比较想赞美什么',
            explanation: '诗人用"于"（比）作比较，说明经霜的秋叶比二月的春花还要红艳，赞美了秋天的独特之美。'
          },
          {
            id: 'c3u2l1q5',
            type: 'fill',
            question: '"山行"中"停车坐爱枫林晚"的"坐"意思是___',
            answer: '因为',
            hint: '坐在这里不是坐下的意思',
            explanation: '"坐"在这里是"因为"的意思，停车是因为喜爱枫林晚景。'
          },
          {
            id: 'c3u2l1q6',
            type: 'choice',
            question: '【期末真题】"霜叶红于二月花"表达了什么？',
            options: ["秋天很冷","秋天的枫叶比春花更美","二月花最好看"],
            answer: '秋天的枫叶比春花更美',
            hint: '诗人想说什么',
            explanation: '诗人认为秋天的枫叶比春天的花更红更美，赞美了秋天的景色。这是期末常考题！'
          },
          {
            id: 'c3u2l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：写日记的格式是什么？',
            answer: '日期天气正文',
            hint: '[日记格式]（语文三年级-第1单元）',
            explanation: '日记的格式是先写日期和天气，再写正文内容。'
          }]
      },
      {
        id: 'c3u2l2',
        title: '赠刘景文',
        order: 2,
        content: [
                    { type: 'example', content: '赠(zèng)\n偏旁：贝\n本义：送\n引申义：赠送、赠品\n组词：赠送、赠品\n儿歌：贝曾为赠送给你', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '橙(chéng)\n偏旁：木\n本义：橙子\n引申义：橙子、橙黄\n组词：橙子、橙黄\n儿歌：木登为橙酸又甜', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '赠刘景文\n释义：苏轼赠诗给刘景文\n网络用法：赠诗给朋友真雅致！\n典故：苏轼写诗鼓励好友\n趣味表达：赠诗是古代的朋友圈点赞', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '橙黄橘绿\n释义：橙子黄了橘子绿了\n网络用法：橙黄橘绿好一派秋景！\n典故：秋末冬初的景色\n趣味表达：橙黄橘绿是秋天的调色板', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '赠刘景文\n【宋】苏轼\n\n荷尽已无擎雨盖，\n菊残犹有傲霜枝。\n一年好景君须记，\n最是橙黄橘绿时。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '荷花凋谢了，连遮雨的荷叶都枯萎了；菊花也快谢了，但还有傲然挺立的枝条。一年中最好的景色你要记住，就是橙子黄了橘子绿的时候', animationType: 'reveal' },
          { type: 'example', content: '"荷尽已无擎雨盖"——荷花凋谢，荷叶枯萎\n"菊残犹有傲霜枝"——菊花虽残，枝条依然傲立\n"一年好景君须记"——一年最好的景色要记住\n"最是橙黄橘绿时"——橙黄橘绿的初冬时节\n对比：荷尽菊残（衰败）vs 橙黄橘绿（丰收）', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '苏轼的深意：虽然荷花凋谢、菊花将残，但橙黄橘绿正是丰收时节！苏轼借初冬的美景鼓励刘景文：即使在人生的"初冬"，也要保持乐观！', label: '诗歌深意', animationType: 'pulse' },
          { type: 'animation', content: '荷尽菊残到橙黄橘绿的季节转换动画，从衰败到丰收', animationType: 'bounce' },
        ],
        teachingMethod: '对比赏析法',
        iDo: '家长朗读古诗，对比诗中"荷尽"和"菊残"与"橙黄橘绿"的不同景象。',
        weDo: '亲子一起讨论：苏轼为什么说"橙黄橘绿时"是最好的时节？',
        youDo: '孩子独立背诵古诗，说说诗中对比了哪些景象。',
        parentTips: '苏轼借初冬的橙橘赞美刘景文，鼓励他在人生"初冬"时保持乐观。',
        funElement: '笑话：荷花说"我谢了！"菊花说"我也快了！"橙子说"该我上场了！"——每个季节都有自己的主角！🍊',
        gsapAnimations: ['GSAP: 荷尽菊残到橙黄橘绿的季节转换动画'],
        images: ['IMG: 赠刘景文意境图'],
        practiceQuestions: [
          {
            id: 'c3u2l2q1',
            type: 'choice',
            question: '"荷尽已无擎雨盖"描写的是什么季节？',
            options: ['夏天', '初冬', '春天'],
            answer: '初冬',
            hint: '荷花什么时候凋谢',
            explanation: '荷花凋谢、菊花也快谢了，这是初冬的景象。'
          },
          {
            id: 'c3u2l2q2',
            type: 'fill',
            question: '一年好景君须记，最是橙黄___绿时',
            answer: '橘',
            hint: '橙子和什么水果',
            explanation: '原诗"最是橙黄橘绿时"，橙子黄了橘子绿了的时候是最好的时节。'
          },
          {
            id: 'c3u2l2q3',
            type: 'choice',
            question: '这首诗的作者是谁？',
            options: ['李白', '苏轼', '杜甫'],
            answer: '苏轼',
            hint: '这位诗人号"东坡居士"',
            explanation: '《赠刘景文》的作者是苏轼，宋代著名文学家。'
          }
        ,
          {
            id: 'c3u2l2q4',
            type: 'choice',
            question: '苏轼写"荷尽菊残"又写"橙黄橘绿"，这样对比想告诉刘景文什么？',
            options: ["冬天很冷","即使衰败也有丰收，要保持乐观","荷花菊花不好看"],
            answer: '即使衰败也有丰收，要保持乐观',
            hint: '对比衰败和丰收想鼓励什么',
            explanation: '苏轼用"荷尽菊残"和"橙黄橘绿"对比，告诉刘景文即使处于人生的"初冬"也要乐观，因为仍有丰收的美好。'
          },
          {
            id: 'c3u2l2q5',
            type: 'fill',
            question: '"赠刘景文"中"最是橙黄橘___时"',
            answer: '绿',
            hint: '最后一个字',
            explanation: '原诗"最是橙黄橘绿时"，描写秋天橙子黄橘子绿的景象。'
          },
          {
            id: 'c3u2l2q6',
            type: 'choice',
            question: '【期末真题】"赠刘景文"鼓励朋友要怎样？',
            options: ["悲伤消沉","乐观向上","不要出门"],
            answer: '乐观向上',
            hint: '诗人的态度是什么',
            explanation: '诗人鼓励朋友在秋末冬初也要乐观向上，珍惜美好时光。这是期末常考题！'
          },
          {
            id: 'c3u2l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："赠刘景文"描写的是哪个季节？',
            answer: '秋天',
            hint: '[古诗内容]（语文三年级-第2单元）',
            explanation: '"赠刘景文"描写的是秋天的景色，橙黄橘绿正是秋天的景象。'
          }
        ]
      },
      {
        id: 'c3u2l3',
        title: '夜书所见',
        order: 3,
        content: [
                    { type: 'example', content: '萧(xiāo)\n偏旁：艹\n本义：风声\n引申义：萧萧、萧条\n组词：萧萧、萧条\n儿歌：草头肃为萧风声', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '梧(wú)\n偏旁：木\n本义：梧桐\n引申义：梧桐、梧叶\n组词：梧桐、梧叶\n儿歌：木吾为梧秋风响', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '萧萧\n释义：风声\n网络用法：萧萧梧叶送寒声！\n典故：叶绍翁写夜书所见\n趣味表达：萧萧是秋天的背景音乐', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '促织\n释义：蟋蟀\n网络用法：促织就是蟋蟀呀！\n典故：古人叫蟋蟀为促织\n趣味表达：促织是蟋蟀的雅号', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '夜书所见\n【宋】叶绍翁\n\n萧萧梧叶送寒声，\n江上秋风动客情。\n知有儿童挑促织，\n夜深篱落一灯明。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '梧桐树叶在秋风中发出萧萧的声音，送来阵阵寒意。江上的秋风吹动了诗人的思乡之情。看到篱笆旁有小孩在捉蟋蟀，深夜里一盏灯火闪亮', animationType: 'reveal' },
          { type: 'example', content: '"萧萧梧叶送寒声"——梧桐叶在秋风中沙沙响\n"江上秋风动客情"——秋风吹起诗人的思乡之情\n"知有儿童挑促织"——知道有小孩在捉蟋蟀\n"夜深篱落一灯明"——深夜篱笆旁一盏灯亮着\n"促织"=蟋蟀，"挑"=用灯光引诱', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '情感共鸣法：诗人看到儿童挑促织，想起自己小时候也在篱笆旁捉蟋蟀，思乡之情油然而生。看到别人快乐，自己却更想家了！', label: '情感理解', animationType: 'pulse' },
          { type: 'animation', content: '秋夜灯火与促织动画，篱笆旁小孩捉蟋蟀', animationType: 'bounce' },
        ],
        teachingMethod: '情感共鸣法',
        iDo: '家长朗读古诗，营造安静氛围，让孩子感受诗人的思乡之情。',
        weDo: '亲子一起讨论：诗人在秋夜看到了什么？想到了什么？心情怎样？',
        youDo: '孩子独立背诵古诗，用自己的话说说诗人的心情。',
        parentTips: '叶绍翁看到儿童挑促织，想起自己小时候，这种思乡之情很动人。',
        funElement: '小游戏：秋夜观察家！晚上听听窗外有什么声音？蟋蟀叫？风吹树叶？像诗人一样感受秋夜！🌙',
        gsapAnimations: ['GSAP: 秋夜灯火与促织动画'],
        images: ['IMG: 夜书所见秋夜意境图'],
        practiceQuestions: [
          {
            id: 'c3u2l3q1',
            type: 'choice',
            question: '"挑促织"中"促织"是什么？',
            options: ['灯笼', '蟋蟀', '织布'],
            answer: '蟋蟀',
            hint: '促织是古代的叫法',
            explanation: '"促织"是蟋蟀的别称，儿童在篱笆旁用灯光捉蟋蟀。'
          },
          {
            id: 'c3u2l3q2',
            type: 'fill',
            question: '萧萧梧叶送___声',
            answer: '寒',
            hint: '秋风吹来什么感觉',
            explanation: '原诗"萧萧梧叶送寒声"，梧桐叶在秋风中发出寒冷的声音。'
          },
          {
            id: 'c3u2l3q3',
            type: 'choice',
            question: '诗人看到儿童挑促织时心情怎样？',
            options: ['开心', '思乡', '害怕'],
            answer: '思乡',
            hint: '看到孩子玩，诗人想到了什么',
            explanation: '诗人看到儿童玩耍，想起自己小时候和家乡，心中涌起思乡之情。'
          }
        ,
          {
            id: 'c3u2l3q4',
            type: 'choice',
            question: '诗人看到儿童挑促织，为什么会产生思乡之情？',
            options: ["因为蟋蟀很吵","因为想起自己小时候也这样玩","因为孩子很可爱"],
            answer: '因为想起自己小时候也这样玩',
            hint: '看到孩子玩让诗人想到了什么',
            explanation: '诗人看到儿童捉蟋蟀，想起自己童年时也在篱笆旁玩耍，触景生情，思乡之情油然而生。'
          },
          {
            id: 'c3u2l3q5',
            type: 'fill',
            question: '"夜书所见"中儿童挑促织，"促织"就是___',
            answer: '蟋蟀',
            hint: '促织是什么小动物',
            explanation: '"促织"就是蟋蟀，秋天孩子们喜欢捉蟋蟀玩。'
          },
          {
            id: 'c3u2l3q6',
            type: 'choice',
            question: '【期末真题】"夜书所见"表达了诗人什么情感？',
            options: ["开心","思乡","害怕"],
            answer: '思乡',
            hint: '诗人看到儿童玩蟋蟀想到了什么',
            explanation: '诗人看到儿童玩蟋蟀，想起了自己的童年和家乡，表达了思乡之情。这是期末常考题！'
          },
          {
            id: 'c3u2l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：写关于朋友的作文要注意什么？',
            answer: '写出真情实感',
            hint: '[写作技巧]（语文三年级-第2单元）',
            explanation: '写关于朋友的作文要写出真情实感，用具体事例表现友谊。'
          }
        ]
      },
      {
        id: 'c3u2l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u2l4q1',
            type: 'choice',
            question: '本单元关于友谊主题，第1课的重点知识是什么？',
            options: ['友谊主题', '生字学习', '古诗背诵'],
            answer: '友谊主题',
            hint: '想想本单元关于友谊的内容',
            explanation: '本单元第1课重点学习友谊主题，理解朋友之间的真挚情感。'
          },
          {
            id: 'c3u2l4q2',
            type: 'fill',
            question: '《赠刘景文》中，"最是橙黄橘绿时"描写的是哪个季节？___',
            answer: '秋天',
            hint: '回顾本单元内容',
            explanation: '《赠刘景文》描写的是秋天的景色，橙黄橘绿正是秋天的景象。'
          },
          {
            id: 'c3u2l4q3',
            type: 'choice',
            question: '本单元关于情感表达，第3课的重点知识是什么？',
            options: ['情感表达', '生字学习', '古诗背诵'],
            answer: '情感表达',
            hint: '想想本单元如何表达情感',
            explanation: '本单元第3课重点学习情感表达，学会用语言表达对朋友的情感。'
          },
          {
            id: 'c3u2l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u2l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['写景古诗的欣赏', '不懂就要问', '古诗背诵', '日记格式'],
            answer: '写景古诗的欣赏',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了写景古诗的欣赏，感受古诗中描写的美丽景色。'
          },
          {
            id: 'c3u2l4q6',
            type: 'choice',
            question: '【期末真题】本单元"写景文章"的学习重点是以下哪个？',
            options: ['品味写景古诗', '数学计算', '英语单词'],
            answer: '品味写景古诗',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是品味写景古诗，这是期末常考的内容！'
          },
          {
            id: 'c3u2l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："赠刘景文"的作者是谁？',
            answer: '苏轼',
            hint: '[古诗作者]（语文三年级-第2单元）',
            explanation: '"赠刘景文"是宋代诗人苏轼写的。'
          }
        ]
      },
      {
        id: 'c3u2l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"写景文章"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u2l5q1',
            type: 'choice',
            question: '本单元"写景文章"主要学习了什么？',
            options: ['品味写景古诗', '数学计算', '英语单词'],
            answer: '品味写景古诗',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u2l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u2l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u2l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u2l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['霜叶红于二月花', '大青树下的小学真热闹', '去年的树真让人感动', '司马光砸缸救了小朋友'],
            answer: '霜叶红于二月花',
            hint: '回顾本单元内容，找出与本单元古诗相关的句子',
            explanation: '"霜叶红于二月花"使用了本单元写景古诗的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c3u2l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['品味写景古诗', '其他单元内容', '课外知识'],
            answer: '品味写景古诗',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是品味写景古诗，这是期末常考的内容！'
          },
          {
            id: 'c3u2l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：怎样写好一封给朋友的信？',
            answer: '格式正确内容真诚',
            hint: '[书信格式]（语文三年级-第2单元）',
            explanation: '写信要注意格式正确，称呼、正文、祝语、署名和日期缺一不可。'
          }
        ]
      }
    ]
  },
  {
    id: 'c3u3',
    title: '童话故事',
    subtitle: '走进奇妙的童话世界',
    order: 3,
    lessons: [
      {
        id: 'c3u3l1',
        title: '去年的树',
        order: 1,
        content: [
                    { type: 'example', content: '柴(chái)\n偏旁：木\n本义：木柴\n引申义：柴火、柴门\n组词：柴火、柴门\n儿歌：木此为柴烧火用', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '伐(fá)\n偏旁：亻\n本义：砍\n引申义：砍伐、伐木\n组词：砍伐、伐木\n儿歌：人戈为伐砍树木', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '诚信\n释义：诚实守信\n网络用法：诚信是最重要的品质！\n典故：鸟儿信守承诺去找树\n趣味表达：诚信是友谊的基石', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '承诺\n释义：答应的事\n网络用法：承诺了就要做到！\n典故：鸟儿承诺给树唱歌\n趣味表达：承诺是心灵的契约', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '一棵树和一只鸟儿是好朋友。鸟儿站在树枝上，天天给树唱歌，树天天听着鸟儿唱', animationType: 'reveal' },
          { type: 'dialogue', content: '鸟儿对树说："我要飞去南方过冬了，明年春天我回来再给你唱歌。"\n树说："好的，我等你！"\n可是春天回来时，树不见了……\n鸟儿问树根："我的好朋友树去哪了？"\n树根说："被伐木人砍了，运到山谷去了。"', label: '鸟儿找树', animationType: 'reveal' },
          { type: 'text', content: '鸟儿找了树根、大门、小女孩，终于找到了——树变成了火柴，火柴点燃了灯火。鸟儿对着灯火，唱起了去年的歌', animationType: 'reveal' },
          { type: 'example', content: '鸟儿寻找路线：\n树根→大门→小女孩→灯火\n树的变化：大树→木条→火柴→灯火\n鸟儿的承诺：去年答应回来唱歌→今年对着灯火唱歌\n主题：诚信和友情', label: '故事线索', animationType: 'bounce' },
          { type: 'tip', content: '这篇童话最打动人的地方：鸟儿信守承诺，即使树已经不在了，它还是对着灯火唱了去年的歌。友情和诚信是最珍贵的！', label: '主题理解', animationType: 'pulse' },
          { type: 'animation', content: '鸟儿飞翔寻找大树动画，从树根到大门到灯火', animationType: 'bounce' },
        ],
        teachingMethod: '情感体验阅读法',
        iDo: '家长朗读课文，用不同语气表现鸟儿寻找大树时的焦急和失望。',
        weDo: '亲子一起讨论：鸟儿为什么要对着灯火唱歌？它心里在想什么？',
        youDo: '孩子独立朗读课文，写出鸟儿三次问话的对象和回答。',
        parentTips: '这篇童话的主题是诚信和友情，鸟儿信守承诺来唱歌，但树已经不在了。',
        funElement: '小游戏：友情承诺书！像鸟儿对树承诺一样，给好朋友写一个承诺，看你能做到吗？🐦',
        gsapAnimations: ['GSAP: 鸟儿飞翔寻找大树动画'],
        images: ['IMG: 去年的树故事场景图'],
        practiceQuestions: [
          {
            id: 'c3u3l1q1',
            type: 'choice',
            question: '鸟儿对着灯火唱歌是因为什么？',
            options: ['灯火很漂亮', '灯火是大树变成的', '它喜欢唱歌'],
            answer: '灯火是大树变成的',
            hint: '大树最后变成了什么',
            explanation: '大树被砍伐做成了火柴，火柴点燃了灯火，鸟儿对着灯火唱歌是信守对大树的承诺。'
          },
          {
            id: 'c3u3l1q2',
            type: 'fill',
            question: '鸟儿找大树时，先问了树根，又问了___，还问了小女孩',
            answer: '大门',
            hint: '鸟儿问了谁',
            explanation: '鸟儿依次问了树根、大门和小女孩，寻找大树的下落。'
          },
          {
            id: 'c3u3l1q3',
            type: 'choice',
            question: '这个故事的主题是什么？',
            options: ['保护环境', '诚信和友情', '不要砍树'],
            answer: '诚信和友情',
            hint: '鸟儿为什么一定要回来唱歌',
            explanation: '故事的主题是诚信和友情，鸟儿信守承诺回来唱歌，体现了珍贵的友情。'
          }
        ,
          {
            id: 'c3u3l1q4',
            type: 'choice',
            question: '鸟儿对着灯火唱去年的歌，这个行为体现了什么？',
            options: ["鸟儿喜欢唱歌","鸟儿信守对朋友的承诺","灯火很好看"],
            answer: '鸟儿信守对朋友的承诺',
            hint: '鸟儿为什么要回来唱歌',
            explanation: '鸟儿答应过树要回来唱歌，即使树变成了灯火，它依然信守承诺，体现了珍贵的友情和诚信。'
          },
          {
            id: 'c3u3l1q5',
            type: 'fill',
            question: '"去年的树"中鸟儿对着___唱歌',
            answer: '灯火',
            hint: '树变成了什么',
            explanation: '树被砍伐做成了火柴，鸟儿对着火柴点燃的灯火唱歌。'
          },
          {
            id: 'c3u3l1q6',
            type: 'choice',
            question: '【期末真题】"去年的树"告诉我们要怎样？',
            options: ["不要砍树","信守承诺珍惜友情","鸟儿很可怜"],
            answer: '信守承诺珍惜友情',
            hint: '鸟儿的行为告诉我们什么',
            explanation: '鸟儿信守承诺去给树唱歌，告诉我们要信守承诺、珍惜友情。这是期末常考题！'
          },
          {
            id: 'c3u3l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：写信时称呼写在什么位置？',
            answer: '左上角',
            hint: '[书信格式]（语文三年级-第2单元）',
            explanation: '写信时称呼写在信纸的左上角，顶格写，后面加冒号。'
          }]
      },
      {
        id: 'c3u3l2',
        title: '那一定会很好',
        order: 2,
        content: [
                    { type: 'example', content: '推(tuī)\n偏旁：扌\n本义：用力向前\n引申义：推动、推车\n组词：推动、推车\n儿歌：手隹为推向前走', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '椅(yǐ)\n偏旁：木\n本义：坐具\n引申义：椅子、座椅\n组词：椅子、座椅\n儿歌：木奇为椅坐一坐', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '变化\n释义：事物发生改变\n网络用法：种子的变化真奇妙！\n典故：种子变成树又变成手推车\n趣味表达：变化是生命的魔法', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '追求\n释义：努力争取\n网络用法：追求进步永不止步！\n典故：种子不断追求更好的状态\n趣味表达：追求是前进的动力', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '一粒种子被埋在泥土里，它想："我一定要站起来，那一定会很好！"', animationType: 'reveal' },
          { type: 'example', content: '种子的五次变化：\n1. 种子→大树："我一定要站起来！"\n2. 大树→手推车："我一定要跑起来！"\n3. 手推车→椅子："我一定要坐下来！"\n4. 椅子→木地板："我一定要躺下来！"\n每次变化都说"那一定会很好"！', label: '五次变化', animationType: 'bounce' },
          { type: 'dialogue', content: '种子说："站起来，那一定会很好！"→长成大树\n大树说："跑起来，那一定会很好！"→变成手推车\n手推车说："坐下来，那一定会很好！"→变成椅子\n椅子说："躺下来，那一定会很好！"→变成木地板\n木地板说："我现在觉得很好！"', label: '种子的心声', animationType: 'reveal' },
          { type: 'tip', content: '变化追踪法：画出种子的变化过程图，标注每次变化的原因和它说的话。这样能清楚地看到种子追求更好生活的过程！', label: '阅读技巧', animationType: 'pulse' },
          { type: 'animation', content: '种子五次变身动画，种子→大树→手推车→椅子→木地板', animationType: 'bounce' },
        ],
        teachingMethod: '变化追踪法',
        iDo: '家长朗读课文，画出种子从种子→大树→手推车→椅子→木地板的变化过程。',
        weDo: '亲子一起讨论：种子每次变化时说了什么？它为什么想变化？',
        youDo: '孩子独立画出种子的变化过程图，并写出每次变化的原因。',
        parentTips: '种子的每次变化都是追求更好的生活，引导孩子理解"追求"的意义。',
        funElement: '小游戏：变身大冒险！种子→大树→手推车→椅子→木地板，如果你是种子，还想变成什么？🌱➡️🪑',
        gsapAnimations: ['GSAP: 种子五次变身动画'],
        images: ['IMG: 种子变化过程图'],
        practiceQuestions: [
          {
            id: 'c3u3l2q1',
            type: 'choice',
            question: '种子第一次变成了什么？',
            options: ['大树', '手推车', '椅子'],
            answer: '大树',
            hint: '种子先长成什么',
            explanation: '种子先长成了一棵大树，因为它想"站起来看看世界"。'
          },
          {
            id: 'c3u3l2q2',
            type: 'fill',
            question: '大树被砍后做成了手推___',
            answer: '车',
            hint: '大树变成了什么交通工具',
            explanation: '大树被砍后做成了手推车，因为它想"跑一跑"。'
          },
          {
            id: 'c3u3l2q3',
            type: 'drag',
            question: '按顺序排列种子的变化过程',
            answer: '种子,大树,手推车,椅子,木地板',
            hint: '按照课文中的变化顺序',
            explanation: '种子变化顺序：种子→大树→手推车→椅子→木地板。'
          }
        ,
          {
            id: 'c3u3l2q4',
            type: 'choice',
            question: '种子每次变化时都说"那一定会很好"，这说明了种子怎样的品质？',
            options: ["不安分","不断追求更好的生活","不喜欢现在的样子"],
            answer: '不断追求更好的生活',
            hint: '种子为什么一直想变化',
            explanation: '种子每次变化都说"那一定会很好"，说明它有目标、不断追求更好的状态，体现了积极向上的品质。'
          },
          {
            id: 'c3u3l2q5',
            type: 'fill',
            question: '"那一定会很好"中种子的愿望是"那一定会很___"',
            answer: '好',
            hint: '种子的口头禅',
            explanation: '种子每次变化时都说"那一定会很好"，它一直在追求更好的状态。'
          },
          {
            id: 'c3u3l2q6',
            type: 'choice',
            question: '【期末真题】"那一定会很好"告诉我们什么？',
            options: ["不要变化","不断追求进步","做一棵树最好"],
            answer: '不断追求进步',
            hint: '种子为什么一直想变化',
            explanation: '种子不断追求变化和进步，告诉我们要有目标、不断努力。这是期末常考题！'
          },
          {
            id: 'c3u3l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：种子经历了哪些变化？写出一种',
            answer: '大树',
            hint: '[课文内容]（语文三年级-第3单元）',
            explanation: '种子先变成大树，再变成手推车，再变成椅子，最后变成木地板。'
          }
        ]
      },
      {
        id: 'c3u3l3',
        title: '在牛肚子里旅行',
        order: 3,
        content: [
                    { type: 'example', content: '胃(wèi)\n偏旁：月\n本义：消化器官\n引申义：胃口、胃肠\n组词：胃口、胃肠\n儿歌：田月为胃消化忙', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '救(jiù)\n偏旁：攵\n本义：帮助脱离危险\n引申义：救援、救命\n组词：救援、救命\n儿歌：求攵为救帮一把', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '旅行\n释义：到外地去\n网络用法：在牛肚子里旅行太惊险了！\n典故：红头在牛肚子里的历险\n趣味表达：旅行是探索未知的方式', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '反刍\n释义：牛把胃里的食物返回嘴里再嚼\n网络用法：牛的反刍真有趣！\n典故：牛有四个胃会反刍\n趣味表达：反刍是牛的二次品尝', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '两只蟋蟀——红头和青头在草地上玩捉迷藏。红头刚躲好，一头牛低头吃草，把红头和草一起卷到嘴里了！', animationType: 'reveal' },
          { type: 'example', content: '蟋蟀在牛肚子里的旅行路线：\n1. 被牛吞入第一个胃（瘤胃）\n2. 从第一个胃进入第二个胃（网胃）\n3. 牛反刍时，和草一起回到嘴里\n4. 趁机跳出来，得救了！\n牛有四个胃，会反刍——这就是蟋蟀能逃出来的原因！', label: '旅行路线', animationType: 'bounce' },
          { type: 'dialogue', content: '红头哭着说："我被牛吃了！"\n青头说："别怕！牛有四个胃，会反刍！你还有机会！"\n红头说："什么是反刍？"\n青头说："牛会把吃下去的草吐回嘴里重新嚼，你趁这个时候跳出来！"', label: '红头和青头', animationType: 'reveal' },
          { type: 'tip', content: '科学知识：牛是反刍动物，有四个胃。吃下去的草先到第一个胃，再到第二个胃，然后反刍回到嘴里重新咀嚼。蟋蟀就是靠这个科学知识逃出来的！', label: '科学知识', animationType: 'pulse' },
          { type: 'animation', content: '蟋蟀在牛肚子里旅行动画，经过四个胃再回到嘴里', animationType: 'bounce' },
        ],
        teachingMethod: '科学融合阅读法',
        iDo: '家长朗读课文，在牛的反刍过程处重点讲解科学知识。',
        weDo: '亲子一起画牛的消化系统简图，标注蟋蟀旅行的路线。',
        youDo: '孩子独立复述故事，说说蟋蟀是怎么从牛肚子里逃出来的。',
        parentTips: '牛有四个胃，会反刍（把吃下去的草吐回嘴里再嚼），蟋蟀就是靠这个逃出来的。',
        funElement: '笑话：蟋蟀说"我在牛肚子里旅行了一圈！"朋友说"什么旅行？明明是被吃掉了！"——这旅行太刺激了！🐄',
        gsapAnimations: ['GSAP: 蟋蟀在牛肚子里旅行动画'],
        images: ['IMG: 牛的消化系统与蟋蟀旅行路线图'],
        practiceQuestions: [
          {
            id: 'c3u3l3q1',
            type: 'choice',
            question: '蟋蟀是怎么从牛肚子里出来的？',
            options: ['牛打喷嚏喷出来', '牛反刍时和草一起回到嘴里', '从牛肚子挖出来'],
            answer: '牛反刍时和草一起回到嘴里',
            hint: '牛有什么特殊的消化方式',
            explanation: '牛会反刍，把胃里的草吐回嘴里重新咀嚼，蟋蟀就是趁反刍时和草一起回到嘴里逃出来的。'
          },
          {
            id: 'c3u3l3q2',
            type: 'fill',
            question: '牛有___个胃',
            answer: '四',
            hint: '牛的消化系统有几个胃',
            explanation: '牛有四个胃，这是反刍动物的特征。'
          },
          {
            id: 'c3u3l3q3',
            type: 'drag',
            question: '按顺序排列蟋蟀在牛肚子里的旅行路线',
            answer: '被吞入第一个胃,进入第二个胃,反刍回到嘴里,跳出来',
            hint: '按照课文描述的顺序',
            explanation: '蟋蟀旅行路线：被吞入第一个胃→进入第二个胃→反刍回到嘴里→跳出来。'
          }
        ,
          {
            id: 'c3u3l3q4',
            type: 'choice',
            question: '红头能从牛肚子里逃出来，最关键的原因是什么？',
            options: ["红头力气大","青头知道牛会反刍，让红头趁机跳出","牛主动把红头吐出来"],
            answer: '青头知道牛会反刍，让红头趁机跳出',
            hint: '青头用什么知识救了红头',
            explanation: '青头知道牛有四个胃会反刍，让红头趁牛把草吐回嘴里时跳出来，科学知识是逃生的关键。'
          },
          {
            id: 'c3u3l3q5',
            type: 'fill',
            question: '"在牛肚子里旅行"中牛有___个胃',
            answer: '四',
            hint: '牛的消化系统特点',
            explanation: '牛有四个胃，食物会从一个胃到另一个胃，这就是反刍。'
          },
          {
            id: 'c3u3l3q6',
            type: 'choice',
            question: '【期末真题】"在牛肚子里旅行"告诉我们什么？',
            options: ["不要靠近牛","遇到困难要冷静想办法","牛很可怕"],
            answer: '遇到困难要冷静想办法',
            hint: '红头是怎么出来的',
            explanation: '红头在牛肚子里冷静地等待机会，最终被牛吐了出来。这是期末常考题！'
          },
          {
            id: 'c3u3l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：中国有哪些传统节日？写出一个',
            answer: '春节',
            acceptableAnswers: ['春节', '元宵节', '端午节', '中秋节', '清明节', '重阳节'],
            hint: '[传统节日]（语文三年级-第3单元）',
            explanation: '中国的传统节日有春节、元宵节、端午节、中秋节等。'
          }
        ]
      },
      {
        id: 'c3u3l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u3l4q1',
            type: 'choice',
            question: '本单元关于文化常识，第1课的重点知识是什么？',
            options: ['文化常识', '生字学习', '古诗背诵'],
            answer: '文化常识',
            hint: '想想本单元学了哪些传统文化知识',
            explanation: '本单元第1课重点学习文化常识，了解中华传统文化的基本知识。'
          },
          {
            id: 'c3u3l4q2',
            type: 'fill',
            question: '《那一定会很好》中，种子先后变成了什么？先变成了___',
            answer: '大树',
            hint: '回顾本单元内容',
            explanation: '种子先变成大树，再变成手推车，再变成椅子，最后变成木地板。'
          },
          {
            id: 'c3u3l4q3',
            type: 'choice',
            question: '本单元关于传统习俗，第3课的重点知识是什么？',
            options: ['传统习俗', '生字学习', '古诗背诵'],
            answer: '传统习俗',
            hint: '想想本单元学了哪些传统习俗',
            explanation: '本单元第3课重点学习传统习俗，了解中国传统节日和民俗文化。'
          },
          {
            id: 'c3u3l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u3l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['童话的想象力', '写景古诗的欣赏', '不懂就要问', '古诗背诵'],
            answer: '童话的想象力',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了童话故事中丰富的想象力，感受童话的奇妙世界。'
          },
          {
            id: 'c3u3l4q6',
            type: 'choice',
            question: '【期末真题】本单元"童话故事"的学习重点是以下哪个？',
            options: ['走进奇妙的童话世界', '数学计算', '英语单词'],
            answer: '走进奇妙的童话世界',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是走进奇妙的童话世界，这是期末常考的内容！'
          },
          {
            id: 'c3u3l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：传统文化包括哪些内容？写出一个',
            answer: '古诗',
            acceptableAnswers: ['古诗', '成语', '节日习俗', '民间故事'],
            hint: '[传统文化]（语文三年级-第3单元）',
            explanation: '传统文化包括古诗、成语、节日习俗、民间故事等。'
          }
        ]
      },
      {
        id: 'c3u3l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"童话故事"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u3l5q1',
            type: 'choice',
            question: '本单元"童话故事"主要学习了什么？',
            options: ['走进奇妙的童话世界', '数学计算', '英语单词'],
            answer: '走进奇妙的童话世界',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u3l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u3l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u3l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u3l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['去年的树真让人感动', '大青树下的小学真热闹', '霜叶红于二月花', '司马光砸缸救了小朋友'],
            answer: '去年的树真让人感动',
            hint: '回顾本单元内容，找出与本单元童话相关的句子',
            explanation: '"去年的树真让人感动"使用了本单元童话故事的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c3u3l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['走进奇妙的童话世界', '其他单元内容', '课外知识'],
            answer: '走进奇妙的童话世界',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是走进奇妙的童话世界，这是期末常考的内容！'
          },
          {
            id: 'c3u3l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：写关于传统文化的作文要注意什么？',
            answer: '内容准确',
            hint: '[写作技巧]（语文三年级-第3单元）',
            explanation: '写关于传统文化的作文要注意内容准确，尊重传统文化。'
          }
        ]
      }
    ]
  },
  {
    id: 'c3u4',
    title: '阅读策略',
    subtitle: '学会高效阅读',
    order: 4,
    lessons: [
      {
        id: 'c3u4l1',
        title: '总也倒不了的老屋',
        order: 1,
        content: [
                    { type: 'example', content: '预(yù)\n偏旁：页\n本义：预先\n引申义：预测、预防\n组词：预测、预防\n儿歌：予页为预先知道', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '测(cè)\n偏旁：氵\n本义：测量\n引申义：测试、推测\n组词：测试、推测\n儿歌：水则测为量一量', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '预测\n释义：预先推测\n网络用法：预测阅读真有趣！\n典故：预测是重要的阅读策略\n趣味表达：预测是阅读的望远镜', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '线索\n释义：事情发展的脉络\n网络用法：找到线索就能预测了！\n典故：前文线索帮助预测\n趣味表达：线索是故事的导航仪', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '老屋已经一百多岁了，窗户变成了黑窟窿，门板也破了洞。它想倒下，可是总有人来请求帮助', animationType: 'reveal' },
          { type: 'dialogue', content: '老屋说："好了，我到了倒下的时候了！"\n小猫说："老屋老屋，外面下大雨了，我能进去躲雨吗？"\n老屋说："好吧，我就再站一个晚上。"\n老母鸡说："老屋老屋，我能进去孵小鸡吗？"\n老屋说："好吧，我就再站二十一天。"\n小蜘蛛说："老屋老屋，我能进去织网吗？"\n老屋说："好吧，我就再站一会儿。"', label: '老屋与小动物', animationType: 'reveal' },
          { type: 'example', content: '预测阅读：\n小猫来→预测老屋会帮忙→对了！\n老母鸡来→预测老屋会帮忙→对了！\n小蜘蛛来→预测老屋会帮忙→对了！\n每次预测都对，因为老屋很善良！', label: '预测练习', animationType: 'bounce' },
          { type: 'tip', content: '预测阅读法：在读故事时停下来猜一猜后面会发生什么。可以根据标题、插图、前文线索来预测。猜错了也没关系，重要的是思考过程！', label: '预测阅读技巧', animationType: 'pulse' },
          { type: 'animation', content: '老屋摇摇欲坠又稳住的动画，小动物们依次来求助', animationType: 'bounce' },
        ],
        teachingMethod: '预测阅读法',
        iDo: '家长朗读课文，在每个小动物来请求帮助时暂停，让孩子预测老屋会不会倒。',
        weDo: '亲子一起讨论：你猜老屋会不会倒？为什么？看看预测对不对。',
        youDo: '孩子独立阅读课文，在每个转折处写下自己的预测。',
        parentTips: '预测阅读能提高理解力，鼓励孩子大胆猜测，猜错也没关系。',
        funElement: '小游戏：故事预言家！读故事时停下来猜一猜后面会发生什么，看你的预言准不准！🔮',
        gsapAnimations: ['GSAP: 老屋摇摇欲坠又稳住的动画'],
        images: ['IMG: 总也倒不了的老屋场景图'],
        practiceQuestions: [
          {
            id: 'c3u4l1q1',
            type: 'choice',
            question: '老屋为什么总也倒不了？',
            options: ['老屋很坚固', '不断有小动物来请求帮助', '有人修好了老屋'],
            answer: '不断有小动物来请求帮助',
            hint: '每次老屋要倒时发生了什么',
            explanation: '每次老屋准备倒下时，都有小动物来请求帮助，老屋为了帮助它们一直坚持着。'
          },
          {
            id: 'c3u4l1q2',
            type: 'fill',
            question: '预测阅读就是在读故事时___后面会发生什么',
            answer: '猜测',
            hint: '预测就是什么',
            explanation: '预测阅读就是在阅读过程中猜测后面会发生什么，提高阅读理解能力。'
          },
          {
            id: 'c3u4l1q3',
            type: 'drag',
            question: '按顺序排列来请求帮助的小动物',
            answer: '小猫,老母鸡,小蜘蛛',
            hint: '按照课文中的顺序',
            explanation: '依次来请求帮助的是：小猫→老母鸡→小蜘蛛。'
          }
        ,
          {
            id: 'c3u4l1q4',
            type: 'choice',
            question: '老屋每次要倒下时都答应帮助小动物，这体现了老屋怎样的品质？',
            options: ["老屋很坚固","老屋善良有爱心","老屋不想倒"],
            answer: '老屋善良有爱心',
            hint: '老屋为什么一直坚持不倒',
            explanation: '老屋本想倒下，但为了帮助小猫、老母鸡、小蜘蛛，它一次次坚持站着，体现了善良有爱心的品质。'
          },
          {
            id: 'c3u4l1q5',
            type: 'fill',
            question: '预测阅读可以根据标题、插图和___来猜测',
            answer: '前文线索',
            hint: '读到哪里可以继续猜',
            explanation: '预测阅读可以根据标题、插图和前文线索来猜测后面的内容。'
          },
          {
            id: 'c3u4l1q6',
            type: 'choice',
            question: '【期末真题】预测阅读猜错了怎么办？',
            options: ["很丢人","没关系思考过程更重要","不要再预测"],
            answer: '没关系思考过程更重要',
            hint: '预测的目的不是猜对',
            explanation: '预测阅读猜错了没关系，重要的是思考的过程，这能帮助我们更好地理解文章。这是期末常考题！'
          },
          {
            id: 'c3u4l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：春节是农历几月几日？',
            answer: '正月初一',
            hint: '[传统节日]（语文三年级-第3单元）',
            explanation: '春节是农历正月初一，是中国最重要的传统节日。'
          }]
      },
      {
        id: 'c3u4l2',
        title: '预测阅读法',
        order: 2,
        content: [
                    { type: 'example', content: '洞(dòng)\n偏旁：氵\n本义：窟窿\n引申义：山洞、洞口\n组词：山洞、洞口\n儿歌：水同为洞深又暗', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '准(zhǔn)\n偏旁：冫\n本义：正确\n引申义：准备、准确\n组词：准备、准确\n儿歌：两点水隹为准', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '老屋\n释义：旧房子\n网络用法：总也倒不了的老屋真善良！\n典故：老屋帮助小动物的故事\n趣味表达：老屋是动物们的避风港', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '善良\n释义：心地好\n网络用法：善良的人最美丽！\n典故：老屋的善良感动了小动物\n趣味表达：善良是心灵最美的外衣', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '预测阅读就是在读故事时猜一猜后面会发生什么。这是一种很好的阅读方法，能让我们读得更认真、更有趣', animationType: 'typewriter' },
          { type: 'example', content: '预测阅读四步法：\n1. 看标题猜内容——"总也倒不了的老屋"会写什么？\n2. 看插图猜情节——图片上画了什么？\n3. 读前文猜后文——根据已有线索推测\n4. 验证预测——读下去看看猜对没有', label: '预测阅读步骤', animationType: 'bounce' },
          { type: 'text', content: '预测的依据：标题是线索，插图是证据，前文是提示。综合这些信息来猜测，准确率会更高！', animationType: 'typewriter' },
          { type: 'tip', content: '预测错了也没关系！重要的是在预测过程中积极思考，这能提高阅读理解能力。每次预测都是一次思考的锻炼！', label: '预测心态', animationType: 'pulse' },
          { type: 'animation', content: '预测与验证对比展示动画，猜测vs实际结果', animationType: 'bounce' },
        ],
        teachingMethod: '策略训练法',
        iDo: '家长示范预测阅读的过程：看标题→猜内容→读课文→验证预测。',
        weDo: '亲子一起用预测阅读法读一篇新短文，边读边预测。',
        youDo: '孩子独立用预测阅读法阅读一篇短文，记录预测和结果。',
        parentTips: '预测可以根据标题、插图、前文线索来猜，猜错也没关系，重要的是思考过程。',
        funElement: '小游戏：阅读侦探！标题是线索，插图是证据，前文是提示——你能猜出故事的结局吗？🕵️',
        gsapAnimations: ['GSAP: 预测与验证对比展示动画'],
        images: ['IMG: 预测阅读步骤图'],
        practiceQuestions: [
          {
            id: 'c3u4l2q1',
            type: 'choice',
            question: '预测阅读的第一步是什么？',
            options: ['直接读课文', '看标题猜内容', '看答案'],
            answer: '看标题猜内容',
            hint: '预测从哪里开始',
            explanation: '预测阅读第一步是看标题猜测内容，带着预测去阅读。'
          },
          {
            id: 'c3u4l2q2',
            type: 'fill',
            question: '预测可以根据标题、插图和___来猜测',
            answer: '前文线索',
            hint: '还有什么能帮助预测',
            explanation: '预测可以根据标题、插图和前文线索来猜测故事发展。'
          },
          {
            id: 'c3u4l2q3',
            type: 'choice',
            question: '预测错了怎么办？',
            options: ['很丢人', '没关系，思考过程更重要', '不要再预测了'],
            answer: '没关系，思考过程更重要',
            hint: '预测的价值在哪里',
            explanation: '预测错了没关系，重要的是在预测过程中积极思考，这能提高阅读理解能力。'
          }
        ,
          {
            id: 'c3u4l2q4',
            type: 'choice',
            question: '预测阅读时猜错了也有价值，是因为什么？',
            options: ["猜错很有趣","思考过程能提高理解能力","猜错下次就能猜对"],
            answer: '思考过程能提高理解能力',
            hint: '预测的真正价值在哪里',
            explanation: '预测阅读猜错了也没关系，因为在预测过程中积极思考，能锻炼思维能力，提高阅读理解水平。'
          },
          {
            id: 'c3u4l2q5',
            type: 'fill',
            question: '"总也倒不了的老屋"告诉我们要有___心',
            answer: '爱',
            hint: '老屋为什么帮助别人',
            explanation: '老屋有爱心，一直帮助需要帮助的小动物，所以总也倒不了。'
          },
          {
            id: 'c3u4l2q6',
            type: 'choice',
            question: '【期末真题】"总也倒不了的老屋"属于什么体裁？',
            options: ["说明文","童话","古诗"],
            answer: '童话',
            hint: '老屋会说话吗',
            explanation: '这是一篇童话故事，老屋会说话、会思考，有拟人的特点。这是期末常考题！'
          },
          {
            id: 'c3u4l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：预测阅读要根据什么来猜测？',
            answer: '文章线索',
            hint: '[阅读策略]（语文三年级-第4单元）',
            explanation: '预测阅读要根据文章的线索来猜测后面的内容。'
          }
        ]
      },
      {
        id: 'c3u4l3',
        title: '阅读笔记',
        order: 3,
        content: [
                    { type: 'example', content: '胡(hú)\n偏旁：月\n本义：胡子\n引申义：胡萝卜、胡说\n组词：胡萝卜、胡说\n儿歌：古月为胡长胡子', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '萝(luó)\n偏旁：艹\n本义：蔓生植物\n引申义：萝卜、藤萝\n组词：萝卜、藤萝\n儿歌：草头罗为萝绿油油', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '胡萝卜\n释义：一种根茎类蔬菜\n网络用法：胡萝卜先生的长胡子！\n典故：胡萝卜先生的长胡子故事\n趣味表达：胡萝卜是兔子的最爱', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '预测\n释义：预先推测\n网络用法：边读边预测真有趣！\n典故：预测是重要的阅读方法\n趣味表达：预测是阅读的冒险游戏', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '阅读笔记就是边读边记录，把好词好句和自己的感受写下来。养成做笔记的习惯，阅读效果会更好！', animationType: 'typewriter' },
          { type: 'example', content: '阅读笔记三要素：\n1. 摘抄好词好句——积累优美的语言\n2. 写感受——读完有什么想法\n3. 画思维导图——理清文章结构\n\n例：好词"金灿灿"、好句"秋天的树叶像金色的蝴蝶"、感受"这段描写让我也想去看红叶"', label: '笔记要素', animationType: 'bounce' },
          { type: 'text', content: '思维导图就是用图画和关键词把文章的主要内容连起来，让人一眼就能看懂文章的结构', animationType: 'typewriter' },
          { type: 'tip', content: '阅读笔记不用太复杂，关键是养成边读边思考的习惯。可以用不同颜色的笔：好词用红色，好句用蓝色，感受用绿色！', label: '笔记技巧', animationType: 'pulse' },
          { type: 'animation', content: '阅读笔记要素依次出现动画，摘抄→感受→思维导图', animationType: 'bounce' },
        ],
        teachingMethod: '笔记训练法',
        iDo: '家长示范做阅读笔记：摘抄好词好句、写感受、画思维导图。',
        weDo: '亲子一起读一篇短文，合作完成阅读笔记。',
        youDo: '孩子独立完成一篇阅读笔记，包含摘抄、感受和思维导图。',
        parentTips: '阅读笔记不用太复杂，关键是养成边读边思考的习惯。',
        funElement: '小游戏：笔记设计师！用彩色笔画思维导图，好词用红色，好句用蓝色，感受用绿色——你的笔记最漂亮！📝',
        gsapAnimations: ['GSAP: 阅读笔记要素依次出现动画'],
        images: ['IMG: 阅读笔记示例图'],
        practiceQuestions: [
          {
            id: 'c3u4l3q1',
            type: 'choice',
            question: '阅读笔记应该包含什么？',
            options: ['只抄好词', '摘抄、感受和思维导图', '只写感受'],
            answer: '摘抄、感受和思维导图',
            hint: '完整的阅读笔记有哪些部分',
            explanation: '完整的阅读笔记应包含摘抄好词好句、写自己的感受和画思维导图。'
          },
          {
            id: 'c3u4l3q2',
            type: 'fill',
            question: '做阅读笔记时，摘抄___词___句',
            answer: '好,好',
            hint: '要摘抄什么样的词句',
            explanation: '做阅读笔记时要摘抄好词好句，积累优美的语言表达。'
          },
          {
            id: 'c3u4l3q3',
            type: 'drag',
            question: '按顺序排列做阅读笔记的步骤',
            answer: '阅读文章,摘抄好词好句,写感受,画思维导图',
            hint: '先读后记',
            explanation: '做阅读笔记步骤：阅读文章→摘抄好词好句→写感受→画思维导图。'
          }
        ,
          {
            id: 'c3u4l3q4',
            type: 'choice',
            question: '做阅读笔记时画思维导图的好处是什么？',
            options: ["让笔记更好看","理清文章结构，帮助理解","可以少写字"],
            answer: '理清文章结构，帮助理解',
            hint: '思维导图的作用是什么',
            explanation: '思维导图用图画和关键词把文章主要内容连起来，能理清文章结构，让人一眼看懂文章的脉络。'
          },
          {
            id: 'c3u4l3q5',
            type: 'fill',
            question: '"胡萝卜先生的长胡子"中胡子被用来做___',
            answer: '风筝线',
            hint: '长胡子有什么用处',
            explanation: '长胡子被小男孩用来做风筝线，帮助了别人。'
          },
          {
            id: 'c3u4l3q6',
            type: 'choice',
            question: '【期末真题】"胡萝卜先生的长胡子"用了什么阅读策略？',
            options: ["精读","预测","略读"],
            answer: '预测',
            hint: '读课文时用什么方法',
            explanation: '这篇课文适合用预测的阅读策略，边读边猜后面会发生什么。这是期末常考题！'
          },
          {
            id: 'c3u4l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：观察事物时要注意什么？',
            answer: '按顺序观察',
            hint: '[观察方法]（语文三年级-第4单元）',
            explanation: '观察事物时要按顺序，从整体到局部，从上到下或从左到右。'
          }
        ]
      },
      {
        id: 'c3u4l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' },
        ],
        teachingMethod: '评价反馈法',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u4l4q1',
            type: 'choice',
            question: '本单元关于观察方法，第1课的重点知识是什么？',
            options: ['观察方法', '生字学习', '古诗背诵'],
            answer: '观察方法',
            hint: '想想本单元学了哪些观察方法',
            explanation: '本单元第1课重点学习观察方法，掌握科学观察事物的技巧。'
          },
          {
            id: 'c3u4l4q2',
            type: 'fill',
            question: '《预测阅读法》中，预测的依据是什么？___',
            answer: '线索',
            hint: '回顾本单元内容',
            explanation: '预测阅读要根据文章的线索来猜测后面的内容。'
          },
          {
            id: 'c3u4l4q3',
            type: 'choice',
            question: '本单元关于发现总结，第3课的重点知识是什么？',
            options: ['发现总结', '生字学习', '古诗背诵'],
            answer: '发现总结',
            hint: '想想本单元如何总结观察发现',
            explanation: '本单元第3课重点学习发现总结，学会将观察到的现象进行归纳总结。'
          },
          {
            id: 'c3u4l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u4l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['预测阅读法', '童话的想象力', '写景古诗的欣赏', '不懂就要问'],
            answer: '预测阅读法',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了预测阅读法，学会根据线索预测故事发展。'
          },
          {
            id: 'c3u4l4q6',
            type: 'choice',
            question: '【期末真题】本单元"阅读策略"的学习重点是以下哪个？',
            options: ['学会高效阅读', '数学计算', '英语单词'],
            answer: '学会高效阅读',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是学会高效阅读，这是期末常考的内容！'
          },
          {
            id: 'c3u4l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：写观察日记要记录什么？',
            answer: '观察到的变化',
            hint: '[观察记录]（语文三年级-第4单元）',
            explanation: '写观察日记要记录观察到的变化和自己的感受。'
          }
        ]
      },
      {
        id: 'c3u4l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"阅读策略"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u4l5q1',
            type: 'choice',
            question: '本单元"阅读策略"主要学习了什么？',
            options: ['学会高效阅读', '数学计算', '英语单词'],
            answer: '学会高效阅读',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u4l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u4l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u4l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u4l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['老屋总也倒不了', '大青树下的小学真热闹', '霜叶红于二月花', '司马光砸缸救了小朋友'],
            answer: '老屋总也倒不了',
            hint: '回顾本单元内容，找出与本单元预测阅读相关的句子',
            explanation: '"老屋总也倒不了"使用了本单元预测阅读法的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c3u4l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['学会高效阅读', '其他单元内容', '课外知识'],
            answer: '学会高效阅读',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是学会高效阅读，这是期末常考的内容！'
          },
          {
            id: 'c3u4l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：发现问题和解决问题是什么关系？',
            answer: '先发现问题再解决问题',
            hint: '[思维方法]（语文三年级-第4单元）',
            explanation: '发现问题是解决问题的前提，要善于观察和思考。'
          }
        ]
      }
    ]
  },
  {
    id: 'c3u5',
    title: '观察日记',
    subtitle: '学会观察与记录',
    order: 5,
    lessons: [
      {
        id: 'c3u5l1',
        title: '金色的草地',
        order: 1,
        content: [
                    { type: 'example', content: '翠(cuì)\n偏旁：羽\n本义：绿色\n引申义：翠绿、翠鸟\n组词：翠绿、翠鸟\n儿歌：羽卒为翠绿油油', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '捕(bǔ)\n偏旁：扌\n本义：捉\n引申义：捕捉、捕鱼\n组词：捕捉、捕鱼\n儿歌：手甫为捕抓鱼儿', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '翠鸟\n释义：一种颜色鲜艳的鸟\n网络用法：翠鸟捕鱼好快！\n典故：翠鸟是捕鱼高手\n趣味表达：翠鸟是水边的闪电', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '观察\n释义：仔细看\n网络用法：仔细观察才能发现美！\n典故：观察是写作的基础\n趣味表达：观察是发现美的眼睛', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '我们村子前面有一大片草地。早上，蒲公英的花瓣是合拢的，草地是绿色的；中午，蒲公英的花瓣张开了，草地变成金色的了！', animationType: 'reveal' },
          { type: 'example', content: '蒲公英的秘密：\n早上——花瓣合拢，草地绿色\n中午——花瓣张开，草地金色\n晚上——花瓣又合拢，草地又变绿色\n蒲公英就像人一样：白天"醒"了开花，晚上"睡"了合拢！', label: '蒲公英的规律', animationType: 'bounce' },
          { type: 'text', content: '作者是怎么发现这个秘密的？他不是一次就发现的，而是通过多次仔细观察才发现的。观察要持续、要细致！', animationType: 'typewriter' },
          { type: 'tip', content: '观察发现法：观察要细致、持续，不能只看一次。作者多次观察才发现蒲公英的张合规律。你也可以选择一个事物持续观察！', label: '观察技巧', animationType: 'pulse' },
          { type: 'animation', content: '蒲公英早晚张合变化动画，草地从绿色变金色再变回绿色', animationType: 'bounce' },
        ],
        teachingMethod: '观察发现法',
        iDo: '家长朗读课文，重点讲解作者发现蒲公英变化的观察过程。',
        weDo: '亲子一起讨论：作者是怎么发现蒲公英的秘密的？你观察过什么有趣的现象？',
        youDo: '孩子独立朗读课文，写出作者观察蒲公英的发现过程。',
        parentTips: '观察要细致、持续，作者多次观察才发现蒲公英的张合规律。',
        funElement: '小游戏：草地侦探！蒲公英早上张开、晚上合拢，你观察过其他植物的变化吗？向日葵跟着太阳转！🌻',
        gsapAnimations: ['GSAP: 蒲公英早晚张合变化动画'],
        images: ['IMG: 金色的草地与蒲公英图'],
        practiceQuestions: [
          {
            id: 'c3u5l1q1',
            type: 'choice',
            question: '蒲公英的花在什么时候合拢？',
            options: ['早上', '中午', '晚上'],
            answer: '晚上',
            hint: '蒲公英什么时候"睡觉"',
            explanation: '蒲公英的花早上张开，晚上合拢，就像人白天活动晚上睡觉一样。'
          },
          {
            id: 'c3u5l1q2',
            type: 'fill',
            question: '草地变成金色是因为蒲公英___了',
            answer: '开',
            hint: '蒲公英张开时草地什么颜色',
            explanation: '蒲公英花开时草地变成金色，合拢时草地变回绿色。'
          },
          {
            id: 'c3u5l1q3',
            type: 'choice',
            question: '作者为什么能发现蒲公英的秘密？',
            options: ['运气好', '仔细观察', '别人告诉的'],
            answer: '仔细观察',
            hint: '发现秘密靠什么',
            explanation: '作者通过仔细、持续的观察才发现了蒲公英早晚张合的秘密。'
          }
        ,
          {
            id: 'c3u5l1q4',
            type: 'choice',
            question: '蒲公英早晚张合的变化，让草地颜色发生了怎样的变化？',
            options: ["从金色变红色","从绿色变金色再变回绿色","一直是绿色"],
            answer: '从绿色变金色再变回绿色',
            hint: '蒲公英张合和草地颜色有什么关系',
            explanation: '早上花瓣合拢草地是绿色，中午花瓣张开草地变金色，晚上花瓣又合拢草地变回绿色。'
          },
          {
            id: 'c3u5l1q5',
            type: 'fill',
            question: '"金色的草地"中作者通过___观察才发现蒲公英的秘密',
            answer: '持续',
            hint: '只看一次能发现吗',
            explanation: '作者不是一次就发现的，而是通过持续多次仔细观察才发现蒲公英的张合规律。'
          },
          {
            id: 'c3u5l1q6',
            type: 'choice',
            question: '【期末真题】"金色的草地"中草地变金色是因为什么？',
            options: ["阳光照射","蒲公英花开","草地染色"],
            answer: '蒲公英花开',
            hint: '草地颜色和什么有关',
            explanation: '蒲公英花开时花瓣张开，草地变成金色；花合拢时草地变回绿色。这是期末常考题！'
          },
          {
            id: 'c3u5l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：观察事物可以用哪些方法？',
            answer: '看听摸闻',
            hint: '[观察方法]（语文三年级-第4单元）',
            explanation: '观察事物可以用看、听、摸、闻等多种方法，多角度观察更全面。'
          }]
      },
      {
        id: 'c3u5l2',
        title: '爬天都峰',
        order: 2,
        content: [
                    { type: 'example', content: '蒲(pú)\n偏旁：艹\n本义：蒲公英\n引申义：蒲公英、蒲草\n组词：蒲公英、蒲草\n儿歌：草头浦为蒲飘呀飘', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '英(yīng)\n偏旁：艹\n本义：花\n引申义：蒲公英、英雄\n组词：蒲公英、英雄\n儿歌：草头央为英花最美', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '蒲公英\n释义：一种随风传播种子的植物\n网络用法：蒲公英的种子像降落伞！\n典故：蒲公英早晚变化不同\n趣味表达：蒲公英是风的乘客', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '发现\n释义：找到以前不知道的事物\n网络用法：我发现蒲公英的秘密了！\n典故：作者发现蒲公英的秘密\n趣味表达：发现是好奇心的奖赏', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '天都峰又高又陡，"我"站在峰脚下想：这么高这么陡，我怎么爬得上去呢？', animationType: 'reveal' },
          { type: 'dialogue', content: '"我"说："这么高，我能爬上去吗？"\n老爷爷说："小朋友，你也来爬天都峰？"\n"我"说："老爷爷，您也来爬天都峰？"\n他们互相鼓励："咱们一起爬吧！"', label: '互相鼓励', animationType: 'reveal' },
          { type: 'example', content: '"我"的心理变化：\n爬之前——害怕想放弃\n遇到老爷爷——有了勇气\n互相鼓励——下定决心\n爬上峰顶——自豪开心\n勇气来自互相鼓励！', label: '心理变化', animationType: 'bounce' },
          { type: 'tip', content: '这个故事告诉我们：遇到困难不要怕，勇气来自互相鼓励！当你想放弃时，看看身边的人，互相打打气，就能克服困难！', label: '故事道理', animationType: 'pulse' },
          { type: 'animation', content: '攀登天都峰过程动画，从山脚到峰顶', animationType: 'bounce' },
        ],
        teachingMethod: '心理描写分析法',
        iDo: '家长朗读课文，重点分析"我"爬天都峰前后的心理变化。',
        weDo: '亲子一起讨论：你有没有遇到困难想放弃的时候？最后怎么克服的？',
        youDo: '孩子独立朗读课文，画出描写"我"心理变化的句子。',
        parentTips: '引导孩子理解"勇气来自互相鼓励"，老爷爷和"我"互相给了对方勇气。',
        funElement: '小游戏：勇气加油站！遇到困难时对自己说"我能行！"像爬天都峰一样，一步一步来！⛰️',
        gsapAnimations: ['GSAP: 攀登天都峰过程动画'],
        images: ['IMG: 天都峰攀登场景图'],
        practiceQuestions: [
          {
            id: 'c3u5l2q1',
            type: 'choice',
            question: '"我"爬天都峰前的心情是什么？',
            options: ['很兴奋', '害怕想放弃', '无所谓'],
            answer: '害怕想放弃',
            hint: '看到又高又陡的山峰时',
            explanation: '"我"看到天都峰又高又陡，心里害怕想放弃。'
          },
          {
            id: 'c3u5l2q2',
            type: 'fill',
            question: '老爷爷和"我"互相___，给了对方勇气',
            answer: '鼓励',
            hint: '他们之间做了什么',
            explanation: '老爷爷和"我"互相鼓励，给了对方爬上去的勇气。'
          },
          {
            id: 'c3u5l2q3',
            type: 'choice',
            question: '这个故事告诉我们什么？',
            options: ['山很高不要爬', '勇气来自互相鼓励', '老人爬不动山'],
            answer: '勇气来自互相鼓励',
            hint: '为什么"我"最后爬上去了',
            explanation: '故事告诉我们勇气来自互相鼓励，在困难面前互相打气就能克服。'
          }
        ,
          {
            id: 'c3u5l2q4',
            type: 'choice',
            question: '"我"和老爷爷互相鼓励后，"我"的心情发生了怎样的变化？',
            options: ["从害怕变成有勇气","从开心变成难过","一直很害怕"],
            answer: '从害怕变成有勇气',
            hint: '互相鼓励后"我"怎样了',
            explanation: '"我"原本害怕想放弃，和老爷爷互相鼓励后有了勇气，最终爬上了峰顶。'
          },
          {
            id: 'c3u5l2q5',
            type: 'fill',
            question: '"爬天都峰"告诉我们，勇气来自互相___',
            answer: '鼓励',
            hint: '老爷爷和"我"之间做了什么',
            explanation: '老爷爷和"我"互相鼓励，给了对方爬上去的勇气，说明勇气来自互相鼓励。'
          },
          {
            id: 'c3u5l2q6',
            type: 'choice',
            question: '【期末真题】"爬天都峰"告诉我们要怎样？',
            options: ["山太高不要爬","遇到困难互相鼓励","老人爬不动山"],
            answer: '遇到困难互相鼓励',
            hint: '故事的核心道理',
            explanation: '故事告诉我们遇到困难不要怕，互相鼓励就能克服困难。这是期末常考题！'
          },
          {
            id: 'c3u5l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："我"和谁一起爬上了天都峰？',
            answer: '老爷爷',
            hint: '[课文内容]（语文三年级-第5单元）',
            explanation: '"我"和一位老爷爷互相鼓励，一起爬上了天都峰。'
          }
        ]
      },
      {
        id: 'c3u5l3',
        title: '写观察日记',
        order: 3,
        content: [
                    { type: 'example', content: '察(chá)\n偏旁：宀\n本义：仔细看\n引申义：观察、察觉\n组词：观察、察觉\n儿歌：宀祭为察仔细看', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '记(jì)\n偏旁：讠\n本义：记录\n引申义：记录、日记\n组词：记录、日记\n儿歌：言己为记写下来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '观察日记\n释义：记录观察结果的日记\n网络用法：写观察日记真有趣！\n典故：观察日记培养科学精神\n趣味表达：观察日记是科学的笔记本', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '持续\n释义：不间断\n网络用法：持续观察才能发现变化！\n典故：持续观察是科学方法\n趣味表达：持续是时间的魔法师', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '观察日记就是把你持续观察某事物的变化过程记录下来。要写清时间、天气和观察对象的变化', animationType: 'typewriter' },
          { type: 'example', content: '观察日记四步法：\n1. 选择观察对象——如豆芽生长、天气变化\n2. 持续观察——每天定时观察记录\n3. 记录变化——用文字和图画记录\n4. 写出感受——观察中有什么发现和想法\n\n例：第一天泡豆子→第二天豆子膨胀→第三天长出小芽→第四天芽变长了', label: '观察日记写法', animationType: 'bounce' },
          { type: 'text', content: '观察日记最重要的是持续观察！不能只看一次就写，要连续观察几天，记录变化的过程', animationType: 'typewriter' },
          { type: 'tip', content: '写观察日记的窍门：用"时间+变化+感受"的格式来写。比如"第三天，豆芽长出了2厘米的小芽，我好开心！"简单又清楚！', label: '写作技巧', animationType: 'pulse' },
          { type: 'animation', content: '观察日记格式与内容展示动画，豆芽从豆子到豆芽的变化', animationType: 'bounce' },
        ],
        teachingMethod: '实践写作法',
        iDo: '家长示范写观察日记：选择观察对象→持续观察→记录变化→写出感受。',
        weDo: '亲子一起选择一个观察对象（如豆芽生长），开始连续观察并记录。',
        youDo: '孩子独立写一篇观察日记，记录某事物的变化过程。',
        parentTips: '观察日记要写清时间、天气、观察对象的变化和自己的感受。',
        funElement: '小游戏：小小科学家！泡一粒豆子，每天观察记录，看它怎么从豆子变成豆芽！记录你的发现！🔬',
        gsapAnimations: ['GSAP: 观察日记格式与内容展示动画'],
        images: ['IMG: 观察日记写作示例图'],
        practiceQuestions: [
          {
            id: 'c3u5l3q1',
            type: 'choice',
            question: '观察日记最重要的是什么？',
            options: ['写很多字', '持续观察并记录变化', '用华丽的词'],
            answer: '持续观察并记录变化',
            hint: '观察日记的"观察"是什么意思',
            explanation: '观察日记最重要的是持续观察并记录事物的变化过程。'
          },
          {
            id: 'c3u5l3q2',
            type: 'fill',
            question: '观察日记要写清时间、天气和___的变化',
            answer: '观察对象',
            hint: '你观察的东西发生了什么',
            explanation: '观察日记要写清时间、天气和观察对象的变化。'
          },
          {
            id: 'c3u5l3q3',
            type: 'drag',
            question: '按顺序排列写观察日记的步骤',
            answer: '选择观察对象,持续观察,记录变化,写出感受',
            hint: '先观察后记录',
            explanation: '写观察日记步骤：选择观察对象→持续观察→记录变化→写出感受。'
          }
        ,
          {
            id: 'c3u5l3q4',
            type: 'choice',
            question: '观察日记为什么要持续观察而不是只看一次？',
            options: ["一次看不完","只有持续观察才能发现事物的变化过程","因为老师要求"],
            answer: '只有持续观察才能发现事物的变化过程',
            hint: '事物的变化需要什么才能看到',
            explanation: '事物的变化是渐进的，只有持续观察才能发现完整的变化过程，只看一次看不到变化。'
          },
          {
            id: 'c3u5l3q5',
            type: 'fill',
            question: '观察日记要记录观察的___和发现',
            answer: '时间',
            hint: '每次观察要记什么',
            explanation: '观察日记要记录观察的时间和发现，这样才能看到变化。'
          },
          {
            id: 'c3u5l3q6',
            type: 'choice',
            question: '【期末真题】观察日记最重要的是什么？',
            options: ["写很多字","持续观察记录变化","用华丽的词"],
            answer: '持续观察记录变化',
            hint: '怎样写好观察日记',
            explanation: '观察日记最重要的是持续观察、记录变化，这是期末常考题！'
          },
          {
            id: 'c3u5l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：想象作文有什么特点？',
            answer: '大胆想象合理表达',
            hint: '[想象写作]（语文三年级-第5单元）',
            explanation: '想象作文要大胆想象，同时表达要合理，有逻辑。'
          }
        ]
      },
      {
        id: 'c3u5l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' },
        ],
        teachingMethod: '评价反馈法',

        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u5l4q1',
            type: 'choice',
            question: '本单元关于想象写作，第1课的重点知识是什么？',
            options: ['想象写作', '生字学习', '古诗背诵'],
            answer: '想象写作',
            hint: '想想本单元如何运用想象力写作',
            explanation: '本单元第1课重点学习想象写作，学会用丰富的想象力进行创作。'
          },
          {
            id: 'c3u5l4q2',
            type: 'fill',
            question: '《爬天都峰》中，"我"和谁一起爬上了天都峰？___',
            answer: '老爷爷',
            hint: '回顾本单元内容',
            explanation: '"我"和一位老爷爷互相鼓励，一起爬上了天都峰。'
          },
          {
            id: 'c3u5l4q3',
            type: 'choice',
            question: '本单元关于创意表达，第3课的重点知识是什么？',
            options: ['创意表达', '生字学习', '古诗背诵'],
            answer: '创意表达',
            hint: '想想本单元如何进行创意表达',
            explanation: '本单元第3课重点学习创意表达，学会用独特的方式表达自己的想法。'
          },
          {
            id: 'c3u5l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u5l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['观察日记的写法', '预测阅读法', '童话的想象力', '写景古诗的欣赏'],
            answer: '观察日记的写法',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了观察日记的写法，学会仔细观察并记录。'
          },
          {
            id: 'c3u5l4q6',
            type: 'choice',
            question: '【期末真题】本单元"观察日记"的学习重点是以下哪个？',
            options: ['学会观察与记录', '数学计算', '英语单词'],
            answer: '学会观察与记录',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是学会观察与记录，这是期末常考的内容！'
          },
          {
            id: 'c3u5l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：创造性的表达方式有哪些？写出一个',
            answer: '比喻',
            acceptableAnswers: ['比喻', '拟人', '夸张'],
            hint: '[修辞手法]（语文三年级-第5单元）',
            explanation: '创造性的表达方式有比喻、拟人、夸张等修辞手法。'
          }
        ]
      },
      {
        id: 'c3u5l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"观察日记"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u5l5q1',
            type: 'choice',
            question: '本单元"观察日记"主要学习了什么？',
            options: ['学会观察与记录', '数学计算', '英语单词'],
            answer: '学会观察与记录',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u5l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u5l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u5l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u5l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['金色的草地真美丽', '大青树下的小学真热闹', '霜叶红于二月花', '司马光砸缸救了小朋友'],
            answer: '金色的草地真美丽',
            hint: '回顾本单元内容，找出与本单元观察日记相关的句子',
            explanation: '"金色的草地真美丽"使用了本单元观察日记的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c3u5l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['学会观察与记录', '其他单元内容', '课外知识'],
            answer: '学会观察与记录',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是学会观察与记录，这是期末常考的内容！'
          },
          {
            id: 'c3u5l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：怎样让作文更有想象力？',
            answer: '多观察多联想',
            hint: '[写作技巧]（语文三年级-第5单元）',
            explanation: '让作文更有想象力要多观察生活，多联想，大胆想象。'
          }
        ]
      }
    ]
  },
  {
    id: 'c3u6',
    title: '习作训练',
    subtitle: '提升写作能力',
    order: 6,
    lessons: [
      {
        id: 'c3u6l1',
        title: '这儿真美',
        order: 1,
        content: [
                    { type: 'example', content: '景(jǐng)\n偏旁：日\n本义：日光\n引申义：风景、景色\n组词：景色、风景\n儿歌：日京为景真好看', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '描(miáo)\n偏旁：扌\n本义：描绘\n引申义：描写、描述\n组词：描写、描述\n儿歌：手苗为描画一画', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '写景\n释义：描写景色\n网络用法：写景作文像画画！\n典故：写景是重要的写作能力\n趣味表达：写景是文字的水彩画', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '总分总\n释义：先总后分再总结的结构\n网络用法：总分总结构最清晰！\n典故：总分总是常用的文章结构\n趣味表达：总分总是文章的三明治', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '写景作文就是描写一个美丽的地方。要用"总分总"结构，还要用多种感官来描写', animationType: 'typewriter' },
          { type: 'example', content: '五感写作法：\n看——颜色、形状、大小\n听——声音、旋律\n闻——气味、香味\n触——温度、质感\n想——感受、联想\n\n例："花园里开满了红色的玫瑰（看），蜜蜂嗡嗡地飞（听），空气中飘着甜甜的花香（闻），花瓣摸起来软软的（触），我觉得像在仙境里（想）"', label: '五感写作', animationType: 'bounce' },
          { type: 'text', content: '"总分总"结构：先总写"这儿真美"，再分写不同方面的美，最后总结"我爱这里的美"', animationType: 'typewriter' },
          { type: 'tip', content: '写景作文秘诀：1.用总分总结构；2.用五感描写；3.用比喻和拟人让语言更生动；4.按一定顺序写（从远到近、从上到下等）', label: '写景技巧', animationType: 'pulse' },
          { type: 'animation', content: '五种感官描写要素展示动画，看听闻触想依次出现', animationType: 'bounce' },
        ],
        teachingMethod: '描写训练法',
        iDo: '家长示范写一段景物描写，展示如何用"总分总"结构和感官描写。',
        weDo: '亲子一起选择一个美丽的地方，一人说一段描写，合作完成作文。',
        youDo: '孩子独立写一篇"这儿真美"的作文，用上感官描写。',
        parentTips: '写景作文要用"看听闻触想"五种感官来描写，让读者身临其境。',
        funElement: '小游戏：五感写作法！看（颜色）、听（声音）、闻（气味）、触（温度）、想（感受），五管齐下写美景！🌈',
        gsapAnimations: ['GSAP: 五种感官描写要素展示动画'],
        images: ['IMG: 美丽风景写作素材图'],
        practiceQuestions: [
          {
            id: 'c3u6l1q1',
            type: 'choice',
            question: '写景作文最好用什么结构？',
            options: ['只写一段', '总分总结构', '随便写'],
            answer: '总分总结构',
            hint: '先总写再分写最后总结',
            explanation: '写景作文用"总分总"结构最清晰：先总写美景，再分写不同方面，最后总结感受。'
          },
          {
            id: 'c3u6l1q2',
            type: 'fill',
            question: '写景时可以用看、听、闻、触和___五种感官',
            answer: '想',
            hint: '除了四种感官还有什么',
            explanation: '写景可以用看、听、闻、触、想五种感官来描写，让文章更生动。'
          },
          {
            id: 'c3u6l1q3',
            type: 'drag',
            question: '把感官和描写内容配对',
            answer: '看-颜色形状,听-声音,闻-气味,触-温度质感',
            hint: '每种感官描写什么',
            explanation: '看描写颜色形状，听描写声音，闻描写气味，触描写温度质感。'
          }
        ,
          {
            id: 'c3u6l1q4',
            type: 'choice',
            question: '叙事作文要写清几个要素？',
            options: ["三个","四个","六个"],
            answer: '六个',
            hint: '时间地点人物起因经过结果',
            explanation: '叙事作文要写清六要素：时间、地点、人物、起因、经过、结果。'
          },
          {
            id: 'c3u6l1q5',
            type: 'fill',
            question: '叙事作文六要素：时间、地点、人物、起因、经过和___',
            answer: '结果',
            hint: '最后一个要素',
            explanation: '叙事作文六要素中最后一个是结果，事情最后怎么样了。'
          },
          {
            id: 'c3u6l1q6',
            type: 'choice',
            question: '【期末真题】叙事作文最重要的是什么？',
            options: ["字数多","把事情写清楚","用很多成语"],
            answer: '把事情写清楚',
            hint: '叙事作文的核心要求',
            explanation: '叙事作文最重要的是把事情的经过写清楚，让读者明白发生了什么。这是期末常考题！'
          },
          {
            id: 'c3u6l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：比喻句用什么词连接？',
            answer: '像',
            hint: '[修辞手法]（语文三年级-第5单元）',
            explanation: '比喻句通常用"像"来连接本体和喻体，把一种事物比作另一种事物。'
          }]
      },
      {
        id: 'c3u6l2',
        title: '我有一个想法',
        order: 2,
        content: [
                    { type: 'example', content: '想(xiǎng)\n偏旁：心\n本义：思考\n引申义：想法、想象\n组词：想法、想象\n儿歌：相心为想动脑筋', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '法(fǎ)\n偏旁：氵\n本义：方法\n引申义：方法、法律\n组词：方法、法律\n儿歌：水去为法有规矩', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '想法\n释义：思考后产生的意见\n网络用法：我有一个好想法！\n典故：想法是创新的开始\n趣味表达：想法是大脑的小火花', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '建议\n释义：提出的主张或办法\n网络用法：好的建议能改变生活！\n典故：建议要具体可行\n趣味表达：建议是改善生活的钥匙', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '"我有一个想法"就是写你对生活中某个问题的观察和建议。先说现象，再说想法，最后提建议', animationType: 'typewriter' },
          { type: 'example', content: '写作三步法：\n1. 说现象——生活中你发现了什么问题？\n   例："我发现学校门口总有很多垃圾"\n2. 说想法——你觉得怎么样？\n   例："我觉得这样不好，影响环境美观"\n3. 提建议——你有什么好办法？\n   例："我建议在校门口多放几个垃圾桶"', label: '写作结构', animationType: 'bounce' },
          { type: 'text', content: '好的想法要有建设性——不只是抱怨问题，还要提出改善的建议。这样你的想法才有价值！', animationType: 'typewriter' },
          { type: 'tip', content: '写"我有一个想法"的秘诀：1.选择你真正关心的问题；2.用具体的事例说明；3.提出可行的建议；4.语言要积极正面！', label: '写作技巧', animationType: 'pulse' },
          { type: 'animation', content: '想法灯泡亮起动画，从问题到想法到建议', animationType: 'bounce' },
        ],
        teachingMethod: '观点表达法',
        iDo: '家长示范写"我有一个想法"，展示如何提出问题、分析原因、给出建议。',
        weDo: '亲子一起讨论生活中的问题，选择一个共同关注的话题。',
        youDo: '孩子独立写一篇"我有一个想法"的作文，提出自己的建议。',
        parentTips: '写作时要先说现象，再说想法，最后提建议，条理清楚。',
        funElement: '小游戏：点子大王！你有什么好点子让生活更美好？写下来，说不定真的能实现呢！💡',
        gsapAnimations: ['GSAP: 想法灯泡亮起动画'],
        images: ['IMG: 生活中的问题与想法图'],
        practiceQuestions: [
          {
            id: 'c3u6l2q1',
            type: 'choice',
            question: '"我有一个想法"作文应该先写什么？',
            options: ['直接写建议', '先说生活中的现象', '写很多道理'],
            answer: '先说生活中的现象',
            hint: '先让人知道你在说什么问题',
            explanation: '写作文应该先说生活中的现象或问题，让读者知道你在关注什么。'
          },
          {
            id: 'c3u6l2q2',
            type: 'fill',
            question: '写作文时要先说现象，再说想法，最后提___',
            answer: '建议',
            hint: '你的想法具体怎么做',
            explanation: '写作文结构：先说现象→再说想法→最后提建议。'
          },
          {
            id: 'c3u6l2q3',
            type: 'choice',
            question: '下面哪个是好的"想法"？',
            options: ['我不想上学', '学校可以增加阅读角', '作业太多了'],
            answer: '学校可以增加阅读角',
            hint: '好的想法应该有建设性',
            explanation: '好的想法应该有建设性，提出具体的改善建议，而不只是抱怨。'
          }
        ,
          {
            id: 'c3u6l2q4',
            type: 'choice',
            question: '写"我有一个想法"时，只抱怨问题不提建议好不好？为什么？',
            options: ["好，能表达情绪","不好，好的想法要有建设性，提出改善建议","无所谓"],
            answer: '不好，好的想法要有建设性，提出改善建议',
            hint: '好的想法应该怎样',
            explanation: '好的想法不只是抱怨问题，还要有建设性地提出可行的改善建议，这样才有价值。'
          },
          {
            id: 'c3u6l2q5',
            type: 'fill',
            question: '写"我有一个想法"时，要先说现象，再说想法，最后提___',
            answer: '建议',
            hint: '写作的三步结构',
            explanation: '写"我有一个想法"要按"说现象→说想法→提建议"的顺序来写，条理清楚。'
          },
          {
            id: 'c3u6l2q6',
            type: 'choice',
            question: '【期末真题】"我有一个想法"作文的关键是什么？',
            options: ["只写问题","提出建设性建议","字数多"],
            answer: '提出建设性建议',
            hint: '什么样的想法才有价值',
            explanation: '"我有一个想法"作文的关键是提出建设性的、可行的建议，而不只是抱怨问题。这是期末常考题！'
          },
          {
            id: 'c3u6l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：写想法时要写清楚什么？',
            answer: '想法和理由',
            hint: '[写作技巧]（语文三年级-第6单元）',
            explanation: '写想法时要写清楚自己的想法和理由，让读者明白你为什么这样想。'
          }
        ]
      },
      {
        id: 'c3u6l3',
        title: '那次玩得真高兴',
        order: 3,
        content: [
                    { type: 'example', content: '修(xiū)\n偏旁：亻\n本义：修理\n引申义：修改、修理\n组词：修改、修理\n儿歌：人攵为修改一改', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '改(gǎi)\n偏旁：攵\n本义：变更\n引申义：修改、改正\n组词：修改、改正\n儿歌：己攵为改变一变', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '修改\n释义：改正错误\n网络用法：好作文是改出来的！\n典故：修改是写作的重要环节\n趣味表达：修改是作文的美容师', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '具体\n释义：不抽象\n网络用法：内容要具体才生动！\n典故：具体描写让文章更生动\n趣味表达：具体是描写的放大镜', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '叙事作文就是写一件事情。要写清六要素：时间、地点、人物、起因、经过、结果', animationType: 'typewriter' },
          { type: 'example', content: '叙事六要素：\n时间——什么时候发生的？\n地点——在哪里发生的？\n人物——有谁参与？\n起因——为什么发生？\n经过——事情是怎样发展的？\n结果——最后怎么样了？\n\n例：上周日（时间），我在公园（地点）和小明（人物）放风筝。因为天气好（起因），我们跑啊跑（经过），风筝飞得好高，我们开心极了（结果）！', label: '叙事六要素', animationType: 'bounce' },
          { type: 'text', content: '叙事作文要按时间顺序来写，让读者清楚事情的发展过程。重点写"经过"，因为这是最精彩的部分！', animationType: 'typewriter' },
          { type: 'tip', content: '写"那次玩得真高兴"的秘诀：1.写清六要素；2.按时间顺序写；3.重点写玩的经过；4.写出高兴的心情；5.结尾点题"真高兴"！', label: '写作技巧', animationType: 'pulse' },
          { type: 'animation', content: '叙事六要素图示动画，时间地点人物起因经过结果', animationType: 'bounce' },
        ],
        teachingMethod: '叙事写作法',
        iDo: '家长示范写"那次玩得真高兴"，展示如何按时间顺序写清事情经过。',
        weDo: '亲子一起回忆一次开心的经历，互相补充细节。',
        youDo: '孩子独立写一篇"那次玩得真高兴"的作文，写清时间、地点、人物和经过。',
        parentTips: '叙事作文要写清六要素：时间、地点、人物、起因、经过、结果。',
        funElement: '小游戏：开心回忆录！闭上眼睛回忆最开心的一次玩耍，像放电影一样在脑海里播放！🎬',
        gsapAnimations: ['GSAP: 叙事六要素图示动画'],
        images: ['IMG: 开心玩耍场景图'],
        practiceQuestions: [
          {
            id: 'c3u6l3q1',
            type: 'choice',
            question: '叙事作文要写清几个要素？',
            options: ['三个', '四个', '六个'],
            answer: '六个',
            hint: '时间、地点、人物、起因、经过、结果',
            explanation: '叙事作文要写清六要素：时间、地点、人物、起因、经过、结果。'
          },
          {
            id: 'c3u6l3q2',
            type: 'fill',
            question: '叙事作文要按___顺序来写',
            answer: '时间',
            hint: '事情是按什么顺序发生的',
            explanation: '叙事作文要按时间顺序来写，让读者清楚事情的发展过程。'
          },
          {
            id: 'c3u6l3q3',
            type: 'drag',
            question: '把叙事六要素按顺序排列',
            answer: '时间,地点,人物,起因,经过,结果',
            hint: '写事时先交代什么',
            explanation: '叙事六要素顺序：时间→地点→人物→起因→经过→结果。'
          }
        ,
          {
            id: 'c3u6l3q4',
            type: 'choice',
            question: '写"那次玩得真高兴"时，为什么要重点写"经过"？',
            options: ['经过最精彩','经过是事情发展的核心，能体现高兴的心情','其他要素不重要'],
            answer: '经过是事情发展的核心，能体现高兴的心情',
            hint: '六要素中哪个最精彩',
            explanation: '叙事作文中"经过"是事情发展的核心部分，重点写经过才能体现玩得高兴的心情。'
          },
          {
            id: 'c3u6l3q5',
            type: 'fill',
            question: '"那次玩得真高兴"结尾要点题"真___"',
            answer: '高兴',
            hint: '作文的题目是什么',
            explanation: '写"那次玩得真高兴"结尾要点题，写出"真高兴"的心情，呼应题目。'
          },
          {
            id: 'c3u6l3q6',
            type: 'choice',
            question: '【期末真题】写记事作文最重要的是什么？',
            options: ["字数多","把事情的经过写清楚","用很多成语"],
            answer: '把事情的经过写清楚',
            hint: '记事作文的核心要求',
            explanation: '写记事作文最重要的是把事情的经过写清楚，让读者明白发生了什么。这是期末常考题！'
          },
          {
            id: 'c3u6l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：从故事中感悟道理的方法是什么？',
            answer: '联系生活实际',
            hint: '[阅读方法]（语文三年级-第6单元）',
            explanation: '从故事中感悟道理要联系生活实际，思考故事对我们的启发。'
          }
        ]
      },
      {
        id: 'c3u6l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' },
        ],
        teachingMethod: '评价反馈法',

        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u6l4q1',
            type: 'choice',
            question: '本单元关于品德修养，第1课的重点知识是什么？',
            options: ['品德修养', '生字学习', '古诗背诵'],
            answer: '品德修养',
            hint: '想想本单元学了哪些品德道理',
            explanation: '本单元第1课重点学习品德修养，理解做人做事的基本道理。'
          },
          {
            id: 'c3u6l4q2',
            type: 'fill',
            question: '《我有一个想法》中，写想法时要写清楚什么？___',
            answer: '理由',
            hint: '回顾本单元内容',
            explanation: '写想法时要写清楚自己的想法和理由，让读者明白你为什么这样想。'
          },
          {
            id: 'c3u6l4q3',
            type: 'choice',
            question: '本单元关于道理感悟，第3课的重点知识是什么？',
            options: ['道理感悟', '生字学习', '古诗背诵'],
            answer: '道理感悟',
            hint: '想想本单元从故事中感悟到什么道理',
            explanation: '本单元第3课重点学习道理感悟，从课文故事中领悟深刻的人生道理。'
          },
          {
            id: 'c3u6l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u6l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['习作方法', '观察日记的写法', '预测阅读法', '童话的想象力'],
            answer: '习作方法',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了习作方法，包括写美景、写想法和写活动的技巧。'
          },
          {
            id: 'c3u6l4q6',
            type: 'choice',
            question: '【期末真题】本单元"习作训练"的学习重点是以下哪个？',
            options: ['提升写作能力', '数学计算', '英语单词'],
            answer: '提升写作能力',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是提升写作能力，这是期末常考的内容！'
          },
          {
            id: 'c3u6l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："守株待兔"告诉我们什么道理？',
            answer: '不能不劳而获',
            hint: '[寓言道理]（语文三年级-第6单元）',
            explanation: '"守株待兔"告诉我们不能心存侥幸，不劳而获。'
          }
        ]
      },
      {
        id: 'c3u6l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"习作训练"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u6l5q1',
            type: 'choice',
            question: '本单元"习作训练"主要学习了什么？',
            options: ['提升写作能力', '数学计算', '英语单词'],
            answer: '提升写作能力',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u6l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u6l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u6l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u6l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['这儿真美啊', '大青树下的小学真热闹', '霜叶红于二月花', '司马光砸缸救了小朋友'],
            answer: '这儿真美啊',
            hint: '回顾本单元内容，找出与本单元习作方法相关的句子',
            explanation: '"这儿真美啊"使用了本单元习作方法的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c3u6l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['提升写作能力', '其他单元内容', '课外知识'],
            answer: '提升写作能力',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是提升写作能力，这是期末常考的内容！'
          },
          {
            id: 'c3u6l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：品德故事有什么共同特点？',
            answer: '讲述做人道理',
            hint: '[故事特点]（语文三年级-第6单元）',
            explanation: '品德故事的共同特点是通过故事讲述做人的道理。'
          }
        ]
      }
    ]
  },
  {
    id: 'c3u7',
    title: '文言文启蒙',
    subtitle: '走进文言文世界',
    order: 7,
    lessons: [
      {
        id: 'c3u7l1',
        title: '司马光',
        order: 1,
        content: [
                    { type: 'example', content: '守(shǒu)\n偏旁：宀\n本义：看守\n引申义：守护、守卫\n组词：守护、守卫\n儿歌：宀寸为守看住它', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '株(zhū)\n偏旁：木\n本义：树桩\n引申义：植株、株距\n组词：树桩、植株\n儿歌：木朱为株树桩子', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '守株待兔\n释义：不努力而想坐享其成\n网络用法：守株待兔太傻了！\n典故：守株待兔的寓言故事\n趣味表达：守株待兔是懒惰的代名词', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '文言文\n释义：用文言写的文章\n网络用法：文言文好简洁！\n典故：文言文是古人的书面语\n趣味表达：文言文是古人的短信体', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '司马光\n\n群儿戏于庭，一儿登瓮，足跌没水中。\n众皆弃去，光持石击瓮破之，\n水迸，儿得活。', label: '文言文原文', animationType: 'reveal' },
          { type: 'text', content: '翻译：一群小孩在院子里玩，一个小孩爬上水缸，失足掉进水里。其他小孩都吓跑了，司马光拿起石头砸破水缸，水流出来，小孩得救了', animationType: 'reveal' },
          { type: 'example', content: '古今对照：\n"群儿戏于庭"=一群小孩在院子里玩\n"一儿登瓮"=一个小孩爬上水缸\n"足跌没水中"=失足掉进水里\n"众皆弃去"=其他人都跑开了\n"光持石击瓮破之"=司马光拿石头砸破水缸\n"水迸，儿得活"=水流出来，小孩得救了', label: '古今翻译', animationType: 'typewriter' },
          { type: 'tip', content: '文言文学习要点：注意"于"="在"、"皆"="都"、"持"="拿"、"迸"="涌出"等古今不同的字词。先理解意思，再朗读背诵！', label: '文言文要点', animationType: 'pulse' },
          { type: 'animation', content: '古今文字对照展示动画，司马光砸缸救人的场景', animationType: 'bounce' },
        ],
        teachingMethod: '古今对照法',
        iDo: '家长朗读文言文，逐句翻译成现代汉语，让孩子对照理解。',
        weDo: '亲子一起比较文言文和现代文的区别，找出不同的表达方式。',
        youDo: '孩子独立朗读并背诵文言文，用自己的话复述故事。',
        parentTips: '文言文学习先理解意思，再朗读背诵，注意"群儿戏于庭"的语序和现代文不同。',
        funElement: '小游戏：古今翻译官！文言文"群儿戏于庭"=现代文"一群小孩在院子里玩"，你来当翻译官！📜',
        gsapAnimations: ['GSAP: 古今文字对照展示动画'],
        images: ['IMG: 司马光砸缸故事图'],
        practiceQuestions: [
          {
            id: 'c3u7l1q1',
            type: 'choice',
            question: '"群儿戏于庭"中"于"是什么意思？',
            options: ['对于', '在', '和'],
            answer: '在',
            hint: '孩子们在哪里玩',
            explanation: '"于"在这里是"在"的意思，"戏于庭"就是在院子里玩耍。'
          },
          {
            id: 'c3u7l1q2',
            type: 'fill',
            question: '司马光用___砸破了水缸',
            answer: '石头',
            hint: '司马光用什么救了落水的小孩',
            explanation: '司马光用石头砸破水缸，水流出来，落水的小孩得救了。'
          },
          {
            id: 'c3u7l1q3',
            type: 'choice',
            question: '其他小孩看到有人落水后做了什么？',
            options: ['一起砸缸', '吓得跑开了', '大声呼救'],
            answer: '吓得跑开了',
            hint: '课文中其他孩子的反应',
            explanation: '其他小孩都吓跑了，只有司马光冷静地用石头砸破了水缸。'
          }
        ,
          {
            id: 'c3u7l1q4',
            type: 'choice',
            question: '"众皆弃去"时司马光没有跑，而是"持石击瓮"，这说明司马光怎样？',
            options: ["胆子大不怕","遇事冷静能想办法","力气很大"],
            answer: '遇事冷静能想办法',
            hint: '别人跑了司马光怎样',
            explanation: '其他小孩都吓跑了，司马光却冷静地拿石头砸破水缸救人，说明他遇事冷静、能想办法。'
          },
          {
            id: 'c3u7l1q5',
            type: 'fill',
            question: '"司马光"中"水迸，儿得活"的意思是水流出来，小孩___了',
            answer: '得救',
            hint: '小孩最后怎么样了',
            explanation: '"水迸，儿得活"意思是水流出来，落水的小孩得救了。'
          },
          {
            id: 'c3u7l1q6',
            type: 'choice',
            question: '【期末真题】司马光砸缸救人，体现了他怎样的品质？',
            options: ["鲁莽冲动","冷静机智","胆小怕事"],
            answer: '冷静机智',
            hint: '司马光和其他孩子有什么不同',
            explanation: '司马光遇事不慌，冷静地用石头砸缸救人，体现了冷静机智的品质。这是期末常考题！'
          },
          {
            id: 'c3u7l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：寓言故事的作用是什么？',
            answer: '告诉我们道理',
            hint: '[寓言道理]（语文三年级-第6单元）',
            explanation: '寓言故事通过小故事告诉我们做人的道理，让人受到启发。'
          }]
      },
      {
        id: 'c3u7l2',
        title: '守株待兔',
        order: 2,
        content: [
                    { type: 'example', content: '司(sī)\n偏旁：口\n本义：管理\n引申义：司马、公司\n组词：司马、公司\n儿歌：口一为司管一管', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '缸(gāng)\n偏旁：缶\n本义：盛水的容器\n引申义：水缸、鱼缸\n组词：水缸、鱼缸\n儿歌：缶工为缸装满水', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '司马光\n释义：北宋名臣\n网络用法：司马光砸缸救人真勇敢！\n典故：司马光砸缸救人的故事\n趣味表达：司马光是古代的小英雄', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '冷静\n释义：不慌张\n网络用法：遇到危险要冷静！\n典故：司马光遇事冷静\n趣味表达：冷静是智慧的开关', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '守株待兔\n\n宋人有耕者。田中有株。\n兔走触株，折颈而死。\n因释其耒而守株，冀复得兔。\n兔不可复得，而身为宋国笑。', label: '文言文原文', animationType: 'reveal' },
          { type: 'text', content: '翻译：宋国有个农夫，田里有个树桩。一只兔子跑过来撞在树桩上，折断脖子死了。农夫于是放下农具守着树桩，希望再捡到兔子。兔子再也捡不到了，农夫成了宋国的笑柄', animationType: 'reveal' },
          { type: 'example', content: '古今对照：\n"走"=跑（不是走路）\n"因"=于是\n"释"=放下\n"耒"=农具\n"冀"=希望\n"身为宋国笑"=被宋国人嘲笑', label: '古今翻译', animationType: 'typewriter' },
          { type: 'tip', content: '守株待兔的寓意：心存侥幸、想不劳而获的人，最终只会一无所获，还被人嘲笑。成功要靠努力，不能靠运气！', label: '寓言寓意', animationType: 'pulse' },
          { type: 'animation', content: '兔子撞树桩动画，农夫守着树桩等兔子的滑稽场景', animationType: 'bounce' },
        ],
        teachingMethod: '寓言解读法',
        iDo: '家长朗读文言文，逐句翻译，讲解宋人为什么被嘲笑。',
        weDo: '亲子一起讨论：宋人错在哪里？这个故事讽刺了什么？',
        youDo: '孩子独立朗读并背诵文言文，用自己的话讲这个故事。',
        parentTips: '文言文中"因释其耒而守株"的"因"是"于是"的意思，"释"是"放下"的意思。',
        funElement: '笑话：宋人天天守着树桩等兔子，邻居说"你不如种地！"宋人说"种地太累，等兔子多轻松！"——结果饿肚子了！🐰',
        gsapAnimations: ['GSAP: 兔子撞树桩动画'],
        images: ['IMG: 守株待兔故事图'],
        practiceQuestions: [
          {
            id: 'c3u7l2q1',
            type: 'choice',
            question: '"因释其耒而守株"中"释"是什么意思？',
            options: ['解释', '放下', '释放'],
            answer: '放下',
            hint: '宋人放下了什么',
            explanation: '"释"是放下的意思，宋人放下了农具去守树桩。'
          },
          {
            id: 'c3u7l2q2',
            type: 'fill',
            question: '宋人因为一只兔子撞死在树桩上，就放下了___去守树桩',
            answer: '农具',
            hint: '他不再种地了',
            explanation: '宋人放下了农具（耒），不再种地，天天守着树桩等兔子。'
          },
          {
            id: 'c3u7l2q3',
            type: 'choice',
            question: '这个故事讽刺了什么？',
            options: ['兔子跑太快', '心存侥幸不劳而获', '种地太辛苦'],
            answer: '心存侥幸不劳而获',
            hint: '宋人的错误想法是什么',
            explanation: '故事讽刺了心存侥幸、想不劳而获的人，成功要靠努力不能靠运气。'
          }
        ,
          {
            id: 'c3u7l2q4',
            type: 'choice',
            question: '"宋人因释其耒而守株"的结果是什么？',
            options: ["又捡到兔子","兔子再也没捡到，被宋国人嘲笑","种地丰收"],
            answer: '兔子再也没捡到，被宋国人嘲笑',
            hint: '宋人最后怎样了',
            explanation: '宋人放下农具守树桩，兔子再也没来，地也荒了，最终成了宋国的笑柄。'
          },
          {
            id: 'c3u7l2q5',
            type: 'fill',
            question: '"守株待兔"比喻心存侥幸、不劳而___',
            answer: '获',
            hint: '守株待兔的教训',
            explanation: '"守株待兔"比喻心存侥幸、想不劳而获，最终一无所获。'
          },
          {
            id: 'c3u7l2q6',
            type: 'choice',
            question: '【期末真题】"守株待兔"告诉我们什么道理？',
            options: ["要努力不能心存侥幸","兔子跑太快","种地太辛苦"],
            answer: '要努力不能心存侥幸',
            hint: '寓言的寓意是什么',
            explanation: '"守株待兔"告诉我们不能心存侥幸、想不劳而获，成功要靠努力。这是期末常考题！'
          },
          {
            id: 'c3u7l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：描写四季可以用什么写作方法？',
            answer: '抓住季节特征',
            hint: '[写作方法]（语文三年级-第7单元）',
            explanation: '描写四季要抓住每个季节的特征，如春天花开、秋天落叶。'
          }
        ]
      },
      {
        id: 'c3u7l3',
        title: '文言文阅读方法',
        order: 3,
        content: [
                    { type: 'example', content: '文(wén)\n偏旁：文\n本义：文字\n引申义：文言、文化\n组词：文言、文化\n儿歌：交叉为文写文章', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '言(yán)\n偏旁：言\n本义：话\n引申义：语言、言论\n组词：语言、言论\n儿歌：口上为言说一说', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '文言文\n释义：古代的书面语言\n网络用法：文言文简洁又优美！\n典故：文言文是古代的书面语\n趣味表达：文言文是古人的精简版语言', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '翻译\n释义：把一种语言换成另一种\n网络用法：把文言文翻译成现代文！\n典故：翻译是理解文言文的桥梁\n趣味表达：翻译是语言的转换器', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '文言文是古人写的文章，和现代文有很多不同。学会阅读文言文，就能读懂古人的智慧！', animationType: 'typewriter' },
          { type: 'example', content: '文言文阅读四步法：\n1. 借助注释读原文——看注释理解关键词\n2. 对照翻译理解——逐句翻译成现代文\n3. 反复朗读——读出文言文的节奏感\n4. 理解背诵——在理解基础上背诵\n\n文言文特点：语言简洁、一字多义、语序不同', label: '四步阅读法', animationType: 'bounce' },
          { type: 'text', content: '文言文和现代文的不同：文言文更简洁，一个字往往等于现代文一个词；语序有时也不同，如"戏于庭"="在庭院里玩"', animationType: 'typewriter' },
          { type: 'tip', content: '学文言文要多读多背，语感培养很重要！不要死记硬背翻译，要先理解意思再背诵。读多了，自然就能读懂更多的文言文了！', label: '学习建议', animationType: 'pulse' },
          { type: 'animation', content: '文言文阅读四步法展示动画，注释→翻译→朗读→背诵', animationType: 'bounce' },
        ],
        teachingMethod: '方法指导法',
        iDo: '家长总结文言文阅读方法：借助注释→对照翻译→反复朗读→理解背诵。',
        weDo: '亲子一起用这个方法读一篇新的短小文言文。',
        youDo: '孩子独立用四步法阅读一篇文言文，写出翻译和感受。',
        parentTips: '文言文学习要多读多背，语感培养很重要，不要死记硬背翻译。',
        funElement: '小游戏：文言文闯关！第一关：借助注释读原文；第二关：对照翻译理解；第三关：流利朗读；第四关：背诵！闯关成功！🏆',
        gsapAnimations: ['GSAP: 文言文阅读四步法展示动画'],
        images: ['IMG: 文言文阅读方法步骤图'],
        practiceQuestions: [
          {
            id: 'c3u7l3q1',
            type: 'choice',
            question: '读文言文第一步应该做什么？',
            options: ['直接背', '借助注释读原文', '看翻译'],
            answer: '借助注释读原文',
            hint: '先自己试着读',
            explanation: '读文言文第一步是借助注释读原文，初步理解大意。'
          },
          {
            id: 'c3u7l3q2',
            type: 'fill',
            question: '文言文阅读四步法：借助注释、对照翻译、反复___、理解背诵',
            answer: '朗读',
            hint: '第三步是什么',
            explanation: '文言文阅读四步法：借助注释→对照翻译→反复朗读→理解背诵。'
          },
          {
            id: 'c3u7l3q3',
            type: 'drag',
            question: '按正确顺序排列文言文阅读步骤',
            answer: '借助注释读原文,对照翻译理解,反复朗读,理解背诵',
            hint: '从易到难',
            explanation: '文言文阅读步骤：借助注释读原文→对照翻译理解→反复朗读→理解背诵。'
          }
        ,
          {
            id: 'c3u7l3q4',
            type: 'choice',
            question: '文言文和现代文有什么区别？',
            options: ["没有区别","文言文更简练","现代文更短"],
            answer: '文言文更简练',
            hint: '文言文的语言特点',
            explanation: '文言文比现代文更简练，一个字往往代表现代文一个词的意思。'
          },
          {
            id: 'c3u7l3q5',
            type: 'fill',
            question: '学文言文要先理解___再背诵',
            answer: '意思',
            hint: '怎样学文言文最有效',
            explanation: '学文言文要先理解意思，再背诵，这样记得更牢。'
          },
          {
            id: 'c3u7l3q6',
            type: 'choice',
            question: '【期末真题】"群儿戏于庭"的正确翻译是？',
            options: ["一群孩子在院子里玩耍","孩子们在戏台上表演","一群人在庭院里说话"],
            answer: '一群孩子在院子里玩耍',
            hint: '逐字翻译',
            explanation: '"群儿"是一群孩子，"戏"是玩耍，"于庭"是在院子里。这是期末常考题！'
          },
          {
            id: 'c3u7l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：大自然中四季的变化规律是什么？',
            answer: '春夏秋冬循环',
            hint: '[自然规律]（语文三年级-第7单元）',
            explanation: '四季按春夏秋冬的顺序循环变化，每年如此。'
          }
        ]
      },
      {
        id: 'c3u7l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' },
        ],
        teachingMethod: '评价反馈法',

        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u7l4q1',
            type: 'choice',
            question: '本单元关于季节特征，第1课的重点知识是什么？',
            options: ['季节特征', '生字学习', '古诗背诵'],
            answer: '季节特征',
            hint: '想想本单元学了哪些关于四季的知识',
            explanation: '本单元第1课重点学习季节特征，了解不同季节的自然特点。'
          },
          {
            id: 'c3u7l4q2',
            type: 'fill',
            question: '《守株待兔》中，农夫为什么守着树桩？___',
            answer: '等兔子',
            hint: '回顾本单元内容',
            explanation: '农夫看到一只兔子撞死在树桩上，就每天守着树桩等兔子再来。'
          },
          {
            id: 'c3u7l4q3',
            type: 'choice',
            question: '本单元关于自然描写，第3课的重点知识是什么？',
            options: ['自然描写', '生字学习', '古诗背诵'],
            answer: '自然描写',
            hint: '想想本单元如何描写自然景色',
            explanation: '本单元第3课重点学习自然描写，学会用文字描绘四季的自然风光。'
          },
          {
            id: 'c3u7l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u7l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['文言文阅读方法', '习作方法', '观察日记的写法', '预测阅读法'],
            answer: '文言文阅读方法',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了文言文阅读方法，初步接触了文言文的世界。'
          },
          {
            id: 'c3u7l4q6',
            type: 'choice',
            question: '【期末真题】本单元"文言文启蒙"的学习重点是以下哪个？',
            options: ['走进文言文世界', '数学计算', '英语单词'],
            answer: '走进文言文世界',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是走进文言文世界，这是期末常考的内容！'
          },
          {
            id: 'c3u7l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："雪"字和"雨"字有什么共同偏旁？',
            answer: '雨',
            hint: '[偏旁识记]（语文三年级-第7单元）',
            explanation: '"雪"和"雨"都有雨字头，表示与天气降水有关。'
          }
        ]
      },
      {
        id: 'c3u7l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"文言文启蒙"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u7l5q1',
            type: 'choice',
            question: '本单元"文言文启蒙"主要学习了什么？',
            options: ['走进文言文世界', '数学计算', '英语单词'],
            answer: '走进文言文世界',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u7l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u7l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u7l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u7l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['司马光砸缸救了小朋友', '大青树下的小学真热闹', '霜叶红于二月花', '去年的树真让人感动'],
            answer: '司马光砸缸救了小朋友',
            hint: '回顾本单元内容，找出与本单元文言文相关的句子',
            explanation: '"司马光砸缸救了小朋友"使用了本单元文言文的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c3u7l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['走进文言文世界', '其他单元内容', '课外知识'],
            answer: '走进文言文世界',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是走进文言文世界，这是期末常考的内容！'
          },
          {
            id: 'c3u7l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：写自然景物的作文要注意什么？',
            answer: '抓住特点有序描写',
            hint: '[写作技巧]（语文三年级-第7单元）',
            explanation: '写自然景物要抓住特点，按一定顺序描写，融入自己的感受。'
          }
        ]
      }
    ]
  },
  {
    id: 'c3u8',
    title: '综合复习',
    subtitle: '巩固提升',
    order: 8,
    lessons: [
      {
        id: 'c3u8l1',
        title: '字词大闯关',
        order: 1,
        content: [
                    { type: 'example', content: '阅(yuè)\n偏旁：门\n本义：看\n引申义：阅读、阅览\n组词：阅读、阅览\n儿歌：门兑为阅读一读', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '读(dú)\n偏旁：讠\n本义：看书\n引申义：读书、阅读\n组词：读书、阅读\n儿歌：言卖为读念一念', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '阅读理解\n释义：读懂文章并回答问题\n网络用法：阅读理解要找依据！\n典故：阅读理解是重要的语文能力\n趣味表达：阅读理解是和作者的对话', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '依据\n释义：根据\n网络用法：答案要在文章中找依据！\n典故：依据是阅读理解的根基\n趣味表达：依据是答案的身份证', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '复习字词要分类整理，逐个攻克！易错字、多音字、形近字、同音字，每种都有攻克的方法', animationType: 'typewriter' },
          { type: 'example', content: '字词分类复习：\n易错字："安静"的"静"vs"干净"的"净"\n多音字："放假jià"vs"真假jiǎ"\n形近字："已、己、巳"——已(yǐ)经、自己(jǐ)、巳(sì)时\n同音字："做作业"vs"作文本"', label: '字词分类', animationType: 'bounce' },
          { type: 'text', content: '易错字要多写几遍，多音字要记住不同读音的组词，形近字要仔细区分偏旁，同音字要根据意思选择', animationType: 'typewriter' },
          { type: 'tip', content: '闯关复习法：第一关易错字，第二关多音字，第三关形近字，第四关成语！每关通过就给自己一颗星，集齐四颗星就是字词大王！', label: '复习方法', animationType: 'pulse' },
          { type: 'animation', content: '闯关进度条动画，从易错字到多音字到形近字到成语', animationType: 'bounce' },
        ],
        teachingMethod: '游戏复习法',
        iDo: '家长整理本学期重点字词，设计闯关游戏，从易到难。',
        weDo: '亲子一起玩字词闯关游戏，看谁能闯过所有关卡。',
        youDo: '孩子独立完成字词闯关练习，错的字词多写几遍。',
        parentTips: '复习字词要分类整理：易错字、多音字、形近字、同音字分别攻克。',
        funElement: '小游戏：字词大闯关！第一关：易错字；第二关：多音字；第三关：形近字；第四关：成语！你能通关吗？🎮',
        gsapAnimations: ['GSAP: 闯关进度条动画'],
        images: ['IMG: 字词闯关游戏界面图'],
        practiceQuestions: [
          {
            id: 'c3u8l1q1',
            type: 'choice',
            question: '"安静"的"静"和哪个字容易混淆？',
            options: ['净', '精', '睛'],
            answer: '净',
            hint: '哪个字和"静"长得很像',
            explanation: '"静"和"净"容易混淆，"安静"是静，"干净"是净。'
          },
          {
            id: 'c3u8l1q2',
            type: 'fill',
            question: '"假"是多音字，在"放假"中读___',
            answer: 'jià',
            hint: '放假时的读音',
            explanation: '"假"是多音字，"放假"读jià，"真假"读jiǎ。'
          },
          {
            id: 'c3u8l1q3',
            type: 'drag',
            question: '把形近字和正确的词配对',
            answer: '静-安静,净-干净,精-精神',
            hint: '根据意思选择正确的字',
            explanation: '安静用"静"，干净用"净"，精神用"精"，形近字要仔细区分。'
          }
        ,
          {
            id: 'c3u8l1q4',
            type: 'choice',
            question: '"已、己、巳"三个字容易混淆，区分它们的关键是什么？',
            options: ["记住笔画多少和封口情况","随便写","看拼音"],
            answer: '记住笔画多少和封口情况',
            hint: '三个字的形状有什么不同',
            explanation: '"已"半封口，"己"不封口，"巳"全封口，区分形近字要仔细看笔画和封口情况。'
          },
          {
            id: 'c3u8l1q5',
            type: 'fill',
            question: '多音字"假"在"真假"中读___',
            answer: 'jiǎ',
            hint: '真假时的读音',
            explanation: '"假"是多音字，"放假"读jià，"真假"读jiǎ，要根据意思选择读音。'
          },
          {
            id: 'c3u8l1q6',
            type: 'choice',
            question: '【期末真题】区分形近字最好的方法是？',
            options: ["仔细区分偏旁","多写几遍","猜着写"],
            answer: '仔细区分偏旁',
            hint: '形近字哪里不同',
            explanation: '区分形近字最好的方法是仔细区分偏旁部首，根据偏旁判断字义。这是期末常考题！'
          },
          {
            id: 'c3u8l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：写文章时总起句的作用是什么？',
            answer: '概括全文',
            hint: '[写作方法]（语文三年级-第7单元）',
            explanation: '总起句在文章开头，用来概括全文的主要内容，引出下文。'
          }]
      },
      {
        id: 'c3u8l2',
        title: '阅读理解训练',
        order: 2,
        content: [
                    { type: 'example', content: '复(fù)\n偏旁：夂\n本义：重复\n引申义：复习、复习\n组词：复习、重复\n儿歌：夂日为复再来一遍', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '习(xí)\n偏旁：乙\n本义：学习\n引申义：学习、练习\n组词：学习、练习\n儿歌：羽白为习练一练', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '复习\n释义：重新学习学过的知识\n网络用法：复习让知识更牢固！\n典故：温故而知新\n趣味表达：复习是知识的保鲜剂', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '查漏补缺\n释义：检查遗漏补上缺失\n网络用法：查漏补缺最有效！\n典故：查漏补缺是高效复习法\n趣味表达：查漏补缺是学习的修补匠', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '做阅读理解题有方法！先读文章了解大意，再看题目，然后回文找答案，最后组织语言回答', animationType: 'typewriter' },
          { type: 'example', content: '阅读理解答题四步法：\n1. 先读文章——了解大意，画出关键句\n2. 再看题目——明确要找什么信息\n3. 回文找答案——在文章中找到依据\n4. 组织语言——用完整句子回答\n\n关键：答案都在文章里！', label: '答题步骤', animationType: 'bounce' },
          { type: 'text', content: '回答阅读理解题要回文找依据，不能凭空想象。用笔划出关键句子，答案就在那里！', animationType: 'typewriter' },
          { type: 'tip', content: '阅读理解秘诀：1.答案在文章里；2.用笔划出关键句；3.用完整句子回答；4.不要只写几个字；5.检查有没有答偏题', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '阅读理解答题步骤动画，读文章→看题目→找答案→写回答', animationType: 'bounce' },
        ],
        teachingMethod: '策略复习法',
        iDo: '家长示范做阅读理解题：先读文章→再看题目→回文找答案→组织语言。',
        weDo: '亲子一起做一篇阅读理解，讨论答题技巧。',
        youDo: '孩子独立完成一篇阅读理解练习，注意答题规范。',
        parentTips: '阅读理解答案都在文章里，要回文找依据，不能凭空想象。',
        funElement: '小游戏：阅读寻宝！答案就藏在文章里，像寻宝一样找到它！用笔划出关键句子！🗺️',
        gsapAnimations: ['GSAP: 阅读理解答题步骤动画'],
        images: ['IMG: 阅读理解答题技巧图'],
        practiceQuestions: [
          {
            id: 'c3u8l2q1',
            type: 'choice',
            question: '做阅读理解题第一步是什么？',
            options: ['直接看题目', '先读文章', '看答案'],
            answer: '先读文章',
            hint: '先了解文章内容',
            explanation: '做阅读理解第一步是先读文章，了解大意后再看题目。'
          },
          {
            id: 'c3u8l2q2',
            type: 'fill',
            question: '阅读理解的答案要在___中找依据',
            answer: '文章',
            hint: '答案从哪里来',
            explanation: '阅读理解的答案要在文章中找依据，不能凭空想象。'
          },
          {
            id: 'c3u8l2q3',
            type: 'choice',
            question: '回答阅读理解题时应该怎样？',
            options: ['随便写几个字', '回文找依据，完整回答', '抄文章中的话'],
            answer: '回文找依据，完整回答',
            hint: '怎样回答最规范',
            explanation: '回答阅读理解题要回文找依据，用完整的句子回答问题。'
          }
        ,
          {
            id: 'c3u8l2q4',
            type: 'choice',
            question: '做阅读理解时为什么要先读文章再看题目？',
            options: ['浪费时间','先了解大意才能准确找答案','因为老师要求'],
            answer: '先了解大意才能准确找答案',
            hint: '先读文章有什么好处',
            explanation: '先读文章了解大意，再看题目时就知道答案大概在哪里，能更准确地回文找依据。'
          },
          {
            id: 'c3u8l2q5',
            type: 'fill',
            question: '回答阅读理解题要用___的句子回答',
            answer: '完整',
            hint: '怎样回答最规范',
            explanation: '回答阅读理解题要用完整的句子回答，不能只写几个字。'
          },
          {
            id: 'c3u8l2q6',
            type: 'choice',
            question: '【期末真题】做阅读理解题最重要的是？',
            options: ["快速读完","认真读文章找依据","只看问题"],
            answer: '认真读文章找依据',
            hint: '答案从哪里来',
            explanation: '做阅读理解题最重要的是认真读文章，在文章中找答案依据，不能凭空想象。这是期末常考题！'
          },
          {
            id: 'c3u8l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：本学期学到的关键词有哪些？写出一个',
            answer: '观察',
            acceptableAnswers: ['观察', '预测', '想象'],
            hint: '[关键词回顾]（语文三年级-第8单元）',
            explanation: '本学期学到了很多关键词，如观察、预测、想象等。'
          }
        ]
      },
      {
        id: 'c3u8l3',
        title: '作文提升',
        order: 3,
        content: [
                    { type: 'example', content: '考(kǎo)\n偏旁：老\n本义：测试\n引申义：考试、考核\n组词：考试、考核\n儿歌：老字为考测一测', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '试(shì)\n偏旁：讠\n本义：尝试\n引申义：考试、试验\n组词：考试、试验\n儿歌：言工为试做一做', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '考试\n释义：测试学习成果\n网络用法：考试不用怕，认真答题就行！\n典故：考试是检验学习的方式\n趣味表达：考试是学习的体检', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '策略\n释义：解决问题的方法\n网络用法：考试策略很重要！\n典故：好的策略帮助考试\n趣味表达：策略是考试的导航仪', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '好作文是改出来的！修改作文能让文章从普通变得优秀。修改时要关注内容、语言和结构', animationType: 'typewriter' },
          { type: 'example', content: '作文修改五步法：\n1. 读草稿——通读一遍，看看整体怎么样\n2. 检查内容——是否具体？有没有空洞的地方？\n3. 修改语言——用好词好句替换普通词句\n4. 调整结构——段落顺序合理吗？开头结尾好吗？\n5. 誊抄定稿——工整地抄写一遍\n\n例："花很好看"→"五颜六色的花在阳光下绽放，像一幅美丽的画"', label: '修改步骤', animationType: 'bounce' },
          { type: 'text', content: '修改时重点关注：内容是否具体、语言是否生动、结构是否清晰。三个维度都要检查！', animationType: 'typewriter' },
          { type: 'tip', content: '作文美容秘诀：1.加好词——把"好"变成"美丽、精彩、出色"；2.用好句——加比喻、拟人；3.调结构——总分总最清晰；4.查错字——别让错字影响印象！', label: '修改技巧', animationType: 'pulse' },
          { type: 'animation', content: '作文修改前后对比动画，普通句子变成优美句子', animationType: 'bounce' },
        ],
        teachingMethod: '修改提升法',
        iDo: '家长展示一篇作文的修改过程：从草稿到修改稿，标注修改原因。',
        weDo: '亲子一起修改孩子的一篇旧作文，讨论哪里可以写得更好。',
        youDo: '孩子独立修改一篇旧作文，至少做三处改进。',
        parentTips: '好作文是改出来的，修改时关注：内容是否具体、语言是否生动、结构是否清晰。',
        funElement: '小游戏：作文美容师！给作文"化妆"——加好词、用好句、调结构，让作文从"灰姑娘"变"公主"！👸',
        gsapAnimations: ['GSAP: 作文修改前后对比动画'],
        images: ['IMG: 作文修改示例图'],
        practiceQuestions: [
          {
            id: 'c3u8l3q1',
            type: 'choice',
            question: '修改作文时首先要关注什么？',
            options: ['字数够不够', '内容是否具体', '字写得好看'],
            answer: '内容是否具体',
            hint: '作文最重要的是什么',
            explanation: '修改作文首先要关注内容是否具体，空洞的内容再华丽的语言也没用。'
          },
          {
            id: 'c3u8l3q2',
            type: 'fill',
            question: '好作文是___出来的',
            answer: '改',
            hint: '作文需要反复做什么',
            explanation: '好作文是改出来的，修改能让作文从普通变得优秀。'
          },
          {
            id: 'c3u8l3q3',
            type: 'drag',
            question: '按顺序排列修改作文的步骤',
            answer: '读草稿,检查内容,修改语言,调整结构,誊抄定稿',
            hint: '从整体到细节',
            explanation: '修改作文步骤：读草稿→检查内容→修改语言→调整结构→誊抄定稿。'
          }
        ,
          {
            id: 'c3u8l3q4',
            type: 'choice',
            question: '修改作文时为什么要先检查内容再修改语言？',
            options: ['内容比语言重要','内容空洞再好的语言也没用，要先确保内容具体','随便改'],
            answer: '内容空洞再好的语言也没用，要先确保内容具体',
            hint: '内容和语言哪个优先',
            explanation: '修改作文要先确保内容具体，因为内容空洞时再华丽的语言也没有用，内容是文章的根本。'
          },
          {
            id: 'c3u8l3q5',
            type: 'fill',
            question: '修改作文时，要把"花很好看"改成"五颜六色的花在阳光下___"',
            answer: '绽放',
            hint: '怎样让句子更生动',
            explanation: '把"花很好看"改成"五颜六色的花在阳光下绽放"，加了修饰词和动词，句子更生动具体。'
          },
          {
            id: 'c3u8l3q6',
            type: 'choice',
            question: '【期末真题】修改作文时首先关注什么？',
            options: ["字数够不够","内容是否具体","字写得好不好"],
            answer: '内容是否具体',
            hint: '修改的优先级',
            explanation: '修改作文首先要关注内容是否具体，其次才是语言和格式。这是期末常考题！'
          },
          {
            id: 'c3u8l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：本学期学了哪些古诗？写出一首的名称',
            answer: '赠刘景文',
            hint: '[古诗回顾]（语文三年级-第8单元）',
            explanation: '本学期学了"赠刘景文"等古诗。'
          }
        ]
      },
      {
        id: 'c3u8l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' },
        ],
        teachingMethod: '评价反馈法',

        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '形成性评价的目的是发现薄弱点，不要给孩子压力，错了就再学一遍。',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c3u8l4q1',
            type: 'choice',
            question: '本单元关于知识综合，第1课的重点知识是什么？',
            options: ['知识综合', '生字学习', '古诗背诵'],
            answer: '知识综合',
            hint: '想想本学期学过的各类知识',
            explanation: '本单元第1课重点学习知识综合，将本学期所学知识进行整合复习。'
          },
          {
            id: 'c3u8l4q2',
            type: 'fill',
            question: '本学期你最喜欢哪篇课文？写出一个课文中的关键词___',
            answer: '观察',
            acceptableAnswers: ['观察', '预测', '想象'],
            hint: '回顾本学期内容',
            explanation: '本学期学到了很多关键词，如观察、预测、想象等，写出你印象最深的一个。'
          },
          {
            id: 'c3u8l4q3',
            type: 'choice',
            question: '本单元关于复习归纳，第3课的重点知识是什么？',
            options: ['复习归纳', '生字学习', '古诗背诵'],
            answer: '复习归纳',
            hint: '想想如何归纳总结本学期所学',
            explanation: '本单元第3课重点学习复习归纳，学会整理和总结所学知识。'
          },
          {
            id: 'c3u8l4q4',
            type: 'choice',
            question: '本单元哪个部分你还需要多练习？',
            options: ['生字认读', '课文理解', '都需要'],
            answer: '都需要',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u8l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['本学期所学知识', '文言文阅读方法', '习作方法', '观察日记的写法'],
            answer: '本学期所学知识',
            hint: '回顾本学期内容',
            explanation: '综合复习单元，回顾本学期所学的阅读、写作和古诗知识。'
          },
          {
            id: 'c3u8l4q6',
            type: 'choice',
            question: '【期末真题】本单元"综合复习"的学习重点是以下哪个？',
            options: ['巩固提升', '数学计算', '英语单词'],
            answer: '巩固提升',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是巩固提升，这是期末常考的内容！'
          },
          {
            id: 'c3u8l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：写读后感要注意什么？',
            answer: '写出真实感受',
            hint: '[写作技巧]（语文三年级-第8单元）',
            explanation: '写读后感要写出自己的真实感受，结合课文内容。'
          }
        ]
      },
      {
        id: 'c3u8l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"综合复习"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '综合复习要帮助孩子把零散的知识点串联起来，形成整体认识。',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c3u8l5q1',
            type: 'choice',
            question: '本单元"综合复习"主要学习了什么？',
            options: ['巩固提升', '数学计算', '英语单词'],
            answer: '巩固提升',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u8l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c3u8l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u8l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c3u8l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本学期的知识点？',
            options: ['我学会了预测阅读', '大青树下的小学真热闹', '霜叶红于二月花', '司马光砸缸救了小朋友'],
            answer: '我学会了预测阅读',
            hint: '回顾本学期内容，找出总结学习收获的句子',
            explanation: '"我学会了预测阅读"总结了本学期学到的预测阅读方法，其他句子来自具体单元。'
          },
          {
            id: 'c3u8l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['巩固提升', '其他单元内容', '课外知识'],
            answer: '巩固提升',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是巩固提升，这是期末常考的内容！'
          },
          {
            id: 'c3u8l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：本学期你最大的收获是什么？用一句话写出来',
            answer: '学会了观察',
            hint: '[学期总结]（语文三年级-第8单元）',
            explanation: '回顾本学期的学习，总结你最大的收获。'
          }
        ]
      }
    ]
  }
]
