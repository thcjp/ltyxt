import type { Unit } from '@/types'

export const chineseGrade2: Unit[] = [
  {
    id: 'c2u1',
    title: '课文精读（一）',
    subtitle: '走进有趣的课文',
    order: 1,
    lessons: [
      {
        id: 'c2u1l1',
        title: '小蝌蚪找妈妈',
        order: 1,
        content: [
                    { type: 'example', content: '蝌(kē)\n偏旁：虫\n本义：蝌蚪\n引申义：蝌蚪、蝌子\n组词：蝌蚪\n儿歌：虫科为蝌小蝌蚪', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '蛙(wā)\n偏旁：虫\n本义：两栖动物\n引申义：青蛙、蛙类\n组词：青蛙、蛙声\n儿歌：虫圭合蛙叫呱呱', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '蝌蚪\n释义：蛙或蟾蜍的幼体\n网络用法：小蝌蚪找妈妈太可爱了！\n典故：古人观察蝌蚪变青蛙\n趣味表达：蝌蚪是青蛙的宝宝', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '迎接\n释义：向前接住来的人\n网络用法：热烈欢迎迎接你！\n典故：古人出城迎接贵客\n趣味表达：迎接是给客人最好的礼物', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '池塘里有一群小蝌蚪，大大的脑袋，黑灰色的身子，甩着长长的尾巴，快活地游来游去', animationType: 'reveal' },
          { type: 'dialogue', content: '小蝌蚪问鲤鱼妈妈："鲤鱼阿姨，我们的妈妈在哪里？"\n鲤鱼妈妈说："你们的妈妈四条腿，宽嘴巴。"\n小蝌蚪看见乌龟喊："妈妈！"\n乌龟说："我不是你们妈妈，你们妈妈头顶大眼睛，披着绿衣裳。"', label: '课文对话', animationType: 'reveal' },
          { type: 'example', content: '小蝌蚪的变化过程：\n1. 大脑袋、长尾巴的小蝌蚪\n2. 长出两条后腿\n3. 长出两条前腿\n4. 尾巴变短了\n5. 尾巴消失了，变成小青蛙！', label: '蝌蚪变青蛙', animationType: 'bounce' },
          { type: 'text', content: '这个故事告诉我们：小蝌蚪在成长过程中身体会发生变化，最后变成青蛙。动物的成长过程真奇妙！', animationType: 'typewriter' },
          { type: 'tip', content: '二年级阅读重点：关注故事发展顺序，找出描写小蝌蚪变化的关键句子，用笔画出来！', label: '阅读技巧', animationType: 'pulse' },
          { type: 'animation', content: '蝌蚪变青蛙分阶段动画，展示完整的变态发育过程', animationType: 'bounce' },
        ],
        teachingMethod: '角色扮演阅读法',
        learningObjective: '我能流利朗读课文《小蝌蚪找妈妈》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长分角色朗读课文，用不同声音演绎小蝌蚪、鲤鱼妈妈和青蛙妈妈。',
        weDo: '亲子一起分角色表演故事，加上动作和表情，让故事活起来。',
        youDo: '孩子独立朗读课文，找出描写小蝌蚪变化的句子并画线标注。',
        parentTips: '【家长预习】蝌(kē)偏旁：虫本义：蝌蚪引申义：蝌蚪、蝌子组词：蝌蚪…\n共学四步：\n①对话出题：问孩子"小蝌蚪先遇到谁？"\n②孩子应答：小蝌蚪先遇到鲤鱼妈妈，问她是不是自己的妈妈。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：小蝌蚪先遇到谁？、小蝌蚪的尾巴最后（    ）了、按课文顺序排列小蝌蚪遇到的角色',
        funElement: '小游戏：变身记录员！画出小蝌蚪变青蛙的四个阶段，像拍照一样记录每次变化！📸',
        gsapAnimations: ['GSAP: 蝌蚪变青蛙分阶段动画'],
        images: ['IMG: 小蝌蚪找妈妈故事场景图'],
        practiceQuestions: [
          {
            id: 'c2u1l1q1',
            type: 'choice',
            question: '小蝌蚪先遇到谁？',
            options: ['鲤鱼妈妈', '乌龟', '青蛙'],
            answer: '鲤鱼妈妈',
            hint: '回忆故事中小蝌蚪找妈妈的顺序',
            explanation: '小蝌蚪先遇到鲤鱼妈妈，问她是不是自己的妈妈。'
          },
          {
            id: 'c2u1l1q2',
            type: 'fill',
            question: '小蝌蚪的尾巴最后___了',
            answer: '消失',
            acceptableAnswers: ['消失', '不见了', '没了', '退化'],
            hint: '变成青蛙后尾巴怎么样了',
            explanation: '小蝌蚪变成青蛙后，尾巴逐渐变短最后消失了。'
          },
          {
            id: 'c2u1l1q3',
            type: 'drag',
            question: '按课文顺序排列小蝌蚪遇到的角色',
            answer: '鲤鱼妈妈,乌龟,青蛙妈妈',
            hint: '按照故事发展的顺序',
            explanation: '小蝌蚪依次遇到：鲤鱼妈妈→乌龟→最后找到青蛙妈妈。'
          }
        ,
          {
            id: 'c2u1l1q4',
            type: 'choice',
            question: '小蝌蚪为什么每次都认错妈妈？',
            options: ["它太笨了","它只注意了一个特征","它不想找妈妈"],
            answer: '它只注意了一个特征',
            hint: '小蝌蚪是怎么认妈妈的',
            explanation: '小蝌蚪只注意了一个特征，没有把所有特征合在一起想。'
          },
          {
            id: 'c2u1l1q5',
            type: 'fill',
            question: '小蝌蚪变青蛙，先长___腿，再长前腿',
            answer: '后',
            hint: '哪条腿先长出来',
            explanation: '小蝌蚪先长后腿，再长前腿，最后尾巴消失变成青蛙。'
          },
          {
            id: 'c2u1l1q6',
            type: 'choice',
            question: '【期末真题】小蝌蚪的妈妈有什么特征？',
            options: ["四条腿、宽嘴巴","两条腿、尖嘴巴","没有腿"],
            answer: '四条腿、宽嘴巴',
            hint: '青蛙妈妈长什么样',
            explanation: '青蛙妈妈有四条腿、宽嘴巴、头顶大眼睛、披着绿衣裳。这是期末常考题！'
          },
          {
            id: 'c2u1l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：《静夜思》的作者是谁？',
            answer: '李白',
            hint: '[古诗作者]（语文一年级-第8单元）',
            explanation: '《静夜思》是唐代诗人李白写的，表达思乡之情。'
          }]
      },
      {
        id: 'c2u1l2',
        title: '我是什么',
        order: 2,
        content: [
                    { type: 'example', content: '冰(bīng)\n偏旁：冫\n本义：水凝固成的固体\n引申义：冰冷、冰凉\n组词：冰块、结冰\n儿歌：两点水加水成冰', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '蒸(zhēng)\n偏旁：艹\n本义：水受热变成气体\n引申义：蒸发、蒸气\n组词：蒸发、蒸气\n儿歌：草头丞底四点蒸', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '水蒸气\n释义：水的气态形式\n网络用法：水蒸气看不见但摸得着！\n典故：古人烧水发现水蒸气\n趣味表达：水蒸气是水的隐身术', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '变化\n释义：事物发生改变\n网络用法：水的变化真神奇！\n典故：古人观察自然变化\n趣味表达：变化是大自然的魔术', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '我会变！太阳一晒，我就变成水蒸气飘上去。遇到冷风，我就变成小雨滴落下来', animationType: 'reveal' },
          { type: 'example', content: '水的三态变化：\n冰→水（融化）：冰遇热变成水\n水→水蒸气（蒸发）：水加热变成水蒸气\n水蒸气→云（凝结）：水蒸气遇冷变成小水滴\n云→雨（降水）：小水滴越聚越多变成雨落下', label: '水的循环', animationType: 'bounce' },
          { type: 'dialogue', content: '水说："我有时候很温柔，灌溉田地、给人们喝！"\n水又说："我有时候很凶猛，淹没庄稼、冲毁房屋！"\n小朋友说："我们要节约用水，还要防范洪水！"', label: '水的两面性', animationType: 'reveal' },
          { type: 'tip', content: '理解课文的关键：抓住"变"字！水在不同条件下会变成不同的形态，这就是水的三态变化。联系生活想想：冰箱里的冰、烧开的水蒸气！', label: '理解技巧', animationType: 'pulse' },
          { type: 'animation', content: '水循环过程动态图，展示蒸发、凝结、降水的完整循环', animationType: 'bounce' },
        ],
        teachingMethod: '科学探究阅读法',
        learningObjective: '我能流利朗读课文《我是什么》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，用图示展示水的循环过程，帮助孩子理解课文内容。',
        weDo: '亲子一起画水的循环图，标注每个变化过程和条件。',
        youDo: '孩子独立阅读课文，用自己的话复述水的三态变化过程。',
        parentTips: '【家长预习】冰(bīng)偏旁：冫本义：水凝固成的固体引申义：冰冷、…\n共学四步：\n①对话出题：问孩子"水在什么条件下会变成冰？"\n②孩子应答：水遇冷（温度降到零度以下）会凝固变成冰。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：水在什么条件下会变成冰？、水蒸气升到天上变成（    ）、课文中水说自己会做什么坏事？',
        funElement: '笑话：水说"我有时候很温柔，变成雨浇花；有时候很凶猛，变成洪水冲房子！"——水也有两面性！💧',
        gsapAnimations: ['GSAP: 水循环过程动态图'],
        images: ['IMG: 水的三态与循环示意图'],
        practiceQuestions: [
          {
            id: 'c2u1l2q1',
            type: 'choice',
            question: '水在什么条件下会变成冰？',
            options: ['加热', '遇冷', '太阳晒'],
            answer: '遇冷',
            hint: '冰箱里为什么有冰',
            explanation: '水遇冷（温度降到零度以下）会凝固变成冰。'
          },
          {
            id: 'c2u1l2q2',
            type: 'fill',
            question: '水蒸气升到天上变成___',
            answer: '云',
            hint: '天上的白云是怎么来的',
            explanation: '水蒸气升到高空遇冷凝结成小水滴，聚在一起就变成云。'
          },
          {
            id: 'c2u1l2q3',
            type: 'choice',
            question: '课文中水说自己会做什么坏事？',
            options: ['淹没庄稼', '让花枯萎', '让鱼生病'],
            answer: '淹没庄稼',
            hint: '想想洪水会怎样',
            explanation: '课文中说水有时候会淹没庄稼，给人们带来灾害。'
          }
        ,
          {
            id: 'c2u1l2q4',
            type: 'choice',
            question: '水在什么条件下会变成水蒸气？',
            options: ["遇冷","加热","不变"],
            answer: '加热',
            hint: '烧开的水会怎样',
            explanation: '水加热后会变成水蒸气，这是蒸发过程。'
          },
          {
            id: 'c2u1l2q5',
            type: 'fill',
            question: '水的循环过程：冰→水→水蒸气→___→雨',
            answer: '云',
            hint: '水蒸气升到天上变成什么',
            explanation: '水蒸气升到高空变成云，云凝结成雨落下来。'
          },
          {
            id: 'c2u1l2q6',
            type: 'choice',
            question: '【期末真题】"我是什么"这篇课文中，"我"指的是什么？',
            options: ["风","水","云"],
            answer: '水',
            hint: '什么会变成冰、水和水蒸气',
            explanation: '课文中的"我"指的是水，水会变成冰、水和水蒸气。这是期末常考题！'
          },
          {
            id: 'c2u1l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："大"的反义词是什么？',
            answer: '小',
            hint: '[反义词]（语文一年级-第7单元）',
            explanation: '"大"和"小"是一对反义词，这是一年级学过的字词知识。'
          }
        ]
      },
      {
        id: 'c2u1l3',
        title: '植物妈妈有办法',
        order: 3,
        content: [
                    { type: 'example', content: '植(zhí)\n偏旁：木\n本义：栽种\n引申义：种植、植物\n组词：植物、种植\n儿歌：木直为植栽种忙', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '降(jiàng)\n偏旁：阝\n本义：落下\n引申义：降落、下降\n组词：降落、降温\n儿歌：耳夅为降从天落', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '植物\n释义：能进行光合作用的生物\n网络用法：植物妈妈真有办法！\n典故：古人观察植物传播种子\n趣味表达：植物是大自然的花园', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '传播\n释义：广泛散布\n网络用法：蒲公英传播种子真厉害！\n典故：古人学会了播种传播技术\n趣味表达：传播是种子的旅行方式', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '孩子如果已经长大，就得告别妈妈，四海为家。植物妈妈们各有各的办法送孩子去远方', animationType: 'reveal' },
          { type: 'example', content: '蒲公英——靠风传播：准备了降落伞，风一吹就飘走\n苍耳——靠动物传播：穿上带刺的铠甲，粘在动物皮毛上\n豌豆——靠弹射传播：豆荚晒太阳炸开，种子弹射出去\n椰子——靠水传播：落入海中漂流到远方', label: '四种传播方式', animationType: 'bounce' },
          { type: 'dialogue', content: '蒲公英说："我的孩子坐风车走！"\n苍耳说："我的孩子坐动物出租车走！"\n豌豆说："我的孩子自己弹射走！"\n植物妈妈们说："各有各的办法，只要能到远方安家就好！"', label: '植物妈妈对话', animationType: 'reveal' },
          { type: 'tip', content: '比较阅读法：把三种植物的传播方式放在一起比较，找出相同点和不同点。相同：都是把种子送到远方；不同：方式不一样！', label: '比较阅读技巧', animationType: 'pulse' },
          { type: 'animation', content: '三种种子传播方式对比动画，蒲公英飘、苍耳粘、豌豆弹', animationType: 'bounce' },
        ],
        teachingMethod: '比较阅读法',
        learningObjective: '我能流利朗读课文《植物妈妈有办法》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，对比三种植物传播种子的不同方法，制作对比表格。',
        weDo: '亲子一起讨论更多植物传播种子的方法，补充到对比表中。',
        youDo: '孩子独立完成课后练习，选择一种植物详细写出它的传播方式。',
        parentTips: '【家长预习】植(zhí)偏旁：木本义：栽种引申义：种植、植物组词：植…\n共学四步：\n①对话出题：问孩子"豌豆传播种子的方式是什么？"\n②孩子应答：豌豆荚在太阳下晒干后会炸裂，把种子弹射出去。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：豌豆传播种子的方式是什么？、蒲公英的种子像（    ），随风飘走、把植物和传播方式配对',
        funElement: '小游戏：种子运动会！蒲公英参加跳伞比赛，苍耳参加攀岩比赛，豌豆参加射击比赛——谁会赢？🏅',
        gsapAnimations: ['GSAP: 三种种子传播方式对比动画'],
        images: ['IMG: 植物种子传播对比图'],
        practiceQuestions: [
          {
            id: 'c2u1l3q1',
            type: 'choice',
            question: '豌豆传播种子的方式是什么？',
            options: ['随风飘', '粘动物', '豆荚晒裂弹射'],
            answer: '豆荚晒裂弹射',
            hint: '豌豆荚在太阳下会怎样',
            explanation: '豌豆荚在太阳下晒干后会炸裂，把种子弹射出去。'
          },
          {
            id: 'c2u1l3q2',
            type: 'fill',
            question: '蒲公英的种子像___，随风飘走',
            answer: '降落伞',
            hint: '蒲公英种子有白色的什么',
            explanation: '蒲公英种子有白色绒毛，像降落伞一样随风飘散。'
          },
          {
            id: 'c2u1l3q3',
            type: 'drag',
            question: '把植物和传播方式配对',
            answer: '蒲公英-风,苍耳-动物,豌豆-弹射',
            hint: '每种植物靠什么传播',
            explanation: '蒲公英靠风传播，苍耳靠动物传播，豌豆靠豆荚弹射传播。'
          }
        ,
          {
            id: 'c2u1l3q4',
            type: 'choice',
            question: '下面哪种植物传播种子的方式和苍耳一样？',
            options: ["蒲公英","鬼针草","豌豆"],
            answer: '鬼针草',
            hint: '也是粘在动物身上',
            explanation: '鬼针草和苍耳一样，也是靠粘在动物身上传播种子。'
          },
          {
            id: 'c2u1l3q5',
            type: 'fill',
            question: '植物传播种子有三种方式：风传播、动物传播和___传播',
            answer: '弹射',
            hint: '豌豆靠什么传播',
            explanation: '植物传播种子的方式有风传播、动物传播和弹射传播。'
          },
          {
            id: 'c2u1l3q6',
            type: 'choice',
            question: '【期末真题】"植物妈妈有办法"告诉我们什么？',
            options: ["植物很聪明","大自然很奇妙","植物不会动"],
            answer: '大自然很奇妙',
            hint: '课文的中心意思',
            explanation: '课文告诉我们大自然很奇妙，植物各有各的办法传播种子。这是期末常考题！'
          },
          {
            id: 'c2u1l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：六个单韵母按顺序是什么？',
            answer: 'a,o,e,i,u,ü',
            hint: '[单韵母顺序]（语文一年级-第1单元）',
            explanation: '六个单韵母的标准顺序是a、o、e、i、u、ü。'
          }
        ]
      },
      {
        id: 'c2u1l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u1l4q1',
            type: 'choice',
            question: '本单元关于动物成长，第1课《小蝌蚪找妈妈》的重点知识是什么？',
            options: ['动物成长', '生字学习', '古诗背诵'],
            answer: '动物成长',
            hint: '想想小蝌蚪的变化',
            explanation: '本单元第1课重点学习动物成长过程，了解小蝌蚪变成青蛙的变化。'
          },
          {
            id: 'c2u1l4q2',
            type: 'fill',
            question: '《我是什么》中，水可以变成什么？请写出一个___',
            answer: '云',
            acceptableAnswers: ['云', '雨', '雹子', '雪'],
            hint: '回顾本单元内容，常见答案：云、雨、雹子、雪均可',
            explanation: '水可以变成云、雨、雹子、雪等不同形态。本题填写"云""雨""雹子""雪"中任意一个均算正确。'
          },
          {
            id: 'c2u1l4q3',
            type: 'choice',
            question: '本单元关于植物观察，第3课的重点知识是什么？',
            options: ['植物观察', '生字学习', '古诗背诵'],
            answer: '植物观察',
            hint: '想想本单元学了哪些植物知识',
            explanation: '本单元第3课重点学习植物观察，认识不同植物的特征。'
          },
          {
            id: 'c2u1l4q4',
            type: 'choice',
            question: '本单元哪篇课文讲述了水的变化？',
            options: ['《小蝌蚪找妈妈》', '《我是什么》', '《植物妈妈有办法》', '《曹冲称象》'],
            answer: '《我是什么》',
            hint: '回顾本单元课文',
            explanation: '《我是什么》讲述了水变成云、雨、雹子、雪等不同形态的故事。'
          },
          {
            id: 'c2u1l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['植物传播种子的方法', '加减法运算', '英语单词拼写', '古诗默写'],
            answer: '植物传播种子的方法',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了植物传播种子的方法，如蒲公英靠风传播、苍耳靠动物传播。'
          },
          {
            id: 'c2u1l4q6',
            type: 'choice',
            question: '【期末真题】本单元"课文精读（一）"的学习重点是以下哪个？',
            options: ['走进有趣的课文', '数学计算', '英语单词'],
            answer: '走进有趣的课文',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是走进有趣的课文，这是期末常考的内容！'
          },
          {
            id: 'c2u1l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："秋"字的偏旁是什么？',
            answer: '禾',
            hint: '[偏旁识记]（语文一年级-第3单元）',
            explanation: '"秋"字左边是禾字旁，表示与庄稼有关。'
          }
        ]
      },
      {
        id: 'c2u1l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"课文精读（一）"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"课文精读（一）"这个单元，让我们把所有知识综合起…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u1l5q1',
            type: 'choice',
            question: '本单元"课文精读（一）"主要学习了什么？',
            options: ['走进有趣的课文', '数学计算', '英语单词'],
            answer: '走进有趣的课文',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u1l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u1l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u1l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u1l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['小蝌蚪长成了青蛙', '杨树高榕树壮', '寒号鸟总说明天再垒窝', '夜宿山寺危楼高'],
            answer: '小蝌蚪长成了青蛙',
            hint: '回顾本单元内容，找出与本单元课文相关的句子',
            explanation: '"小蝌蚪长成了青蛙"使用了本单元《小蝌蚪找妈妈》的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u1l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['走进有趣的课文', '其他单元内容', '课外知识'],
            answer: '走进有趣的课文',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是走进有趣的课文，这是期末常考的内容！'
          },
          {
            id: 'c2u1l5q7',
            type: 'fill',
            question: '回顾前面学过的知识："一只猫"中"只"是什么词？',
            answer: '量词',
            hint: '[量词]（语文一年级-第7单元）',
            explanation: '"只"是量词，用来计量动物的数量。'
          }
        ]
      }
    ]
  },
  {
    id: 'c2u2',
    title: '识字方法',
    subtitle: '学习多种识字方法',
    order: 2,
    lessons: [
      {
        id: 'c2u2l1',
        title: '场景识字',
        order: 1,
        content: [
                    { type: 'example', content: '滩(tān)\n偏旁：氵\n本义：水边泥沙地\n引申义：沙滩、河滩\n组词：沙滩、河滩\n儿歌：水难为滩沙软软', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '帆(fān)\n偏旁：巾\n本义：船上的布篷\n引申义：帆船、风帆\n组词：帆船、风帆\n儿歌：巾凡为帆风推动', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '沙滩\n释义：水边由沙子形成的平地\n网络用法：沙滩上堆城堡真好玩！\n典故：古人用沙滩晒盐\n趣味表达：沙滩是大海的画布', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '帆船\n释义：用帆借助风力航行的船\n网络用法：帆船靠风力航行真酷！\n典故：古人发明帆船远航\n趣味表达：帆船是风的水上出租车', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '生活中到处都有汉字！超市的招牌、公园的标识、街道的路牌……只要留心观察，到处都能识字', animationType: 'typewriter' },
          { type: 'example', content: '超市里的字：入口、出口、收银台、蔬菜区、水果区\n公园里的字：禁止践踏、爱护花草、入口、出口\n街道上的字：站牌、路名、斑马线、红绿灯', label: '场景中的汉字', animationType: 'bounce' },
          { type: 'dialogue', content: '小朋友说："超市里好多字我不认识！"\n妈妈说："没关系，我们一个一个来认！"\n小朋友说："出口就是走出去的地方！"\n妈妈说："对！生活就是最好的识字课堂！"', label: '识字对话', animationType: 'reveal' },
          { type: 'tip', content: '场景识字三步法：1.看到不认识的字先猜一猜；2.结合场景理解字义；3.多看几遍就记住了。出门时多留意身边的字！', label: '场景识字法', animationType: 'pulse' },
          { type: 'animation', content: '场景中汉字高亮闪烁动画，超市、公园、街道场景切换', animationType: 'bounce' },
        ],
        teachingMethod: '情境沉浸识字法',
        learningObjective: '我能在生活场景中认字组词',
        successCriteria: '①能在场景中认出本课生字 ②能用生字组词',
        iDo: '家长带孩子到不同场景（超市、公园、街道）认读标识和招牌上的字。',
        weDo: '亲子一起玩"识字寻宝"游戏，在指定场景中找到并认读5个生字。',
        youDo: '孩子独立在课本场景图中认读生字，并给每个字组一个词。',
        parentTips: '【家长预习】滩(tān)偏旁：氵本义：水边泥沙地引申义：沙滩、河滩组…\n共学四步：\n①对话出题：问孩子"在超市里，"出口"的"出"是什么意思？"\n②孩子应答："出"是出来的意思，"出口"就是走出去的通道。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测：在超市里，"出口"的"出"是什么意思？、公园里常见的标识"禁止（    ）踏"、看场景图片快速认读汉字',
        funElement: '小游戏：超市识字大冒险！在超市里找到5个你不认识的字，看谁找得又多又准！🛒',
        gsapAnimations: ['GSAP: 场景中汉字高亮闪烁动画'],
        images: ['IMG: 不同场景中的汉字图'],
        practiceQuestions: [
          {
            id: 'c2u2l1q1',
            type: 'choice',
            question: '在超市里，"出口"的"出"是什么意思？',
            options: ['进去', '出来', '停留'],
            answer: '出来',
            hint: '出口是走出去的地方',
            explanation: '"出"是出来的意思，"出口"就是走出去的通道。'
          },
          {
            id: 'c2u2l1q2',
            type: 'fill',
            question: '公园里常见的标识"禁止___踏"',
            answer: '践',
            hint: '不要踩踏草坪',
            explanation: '"禁止践踏"是公园里常见的标识，"践"是踩踏的意思。'
          },
          {
            id: 'c2u2l1q3',
            type: 'flashcard',
            question: '看场景图片快速认读汉字',
            answer: '站',
            hint: '公交站牌上的字',
            explanation: '公交站牌上的"站"字表示停车的地点。'
          }
        ,
          {
            id: 'c2u2l1q4',
            type: 'choice',
            question: '"场景歌"中"一方鱼塘"的"方"是什么词？',
            options: ["名词","量词","动词"],
            answer: '量词',
            hint: '在名词前面表示数量',
            explanation: '"方"是量词，用在名词前面表示数量。'
          },
          {
            id: 'c2u2l1q5',
            type: 'fill',
            question: '用"一方"造一个短语：一方___',
            answer: '鱼塘',
            hint: '什么用"方"作量词',
            explanation: '"一方鱼塘"是正确的量词搭配。'
          },
          {
            id: 'c2u2l1q6',
            type: 'choice',
            question: '【期末真题】"一座石桥"中"座"是什么词？',
            options: ["名词","动词","量词"],
            answer: '量词',
            hint: '在名词前面表示什么',
            explanation: '"座"是量词，用于大的建筑物或山。这是期末常考题！'
          },
          {
            id: 'c2u2l1q7',
            type: 'fill',
            question: '回顾前面学过的知识："大"的反义词是什么？',
            answer: '小',
            hint: '[反义词]（语文一年级）',
            explanation: '"大"和"小"是一对反义词，表示相反的意思。'
          }]
      },
      {
        id: 'c2u2l2',
        title: '树之歌',
        order: 2,
        content: [
                    { type: 'example', content: '梧(wú)\n偏旁：木\n本义：梧桐树\n引申义：梧桐\n组词：梧桐、梧叶\n儿歌：木吾为梧叶如掌', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '掌(zhǎng)\n偏旁：手\n本义：手心\n引申义：手掌、掌握\n组词：手掌、掌心\n儿歌：手尚为掌五指合', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '梧桐\n释义：一种落叶乔木\n网络用法：梧桐叶子像手掌！\n典故：古人说凤栖梧桐\n趣味表达：梧桐是凤凰最喜欢的树', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '木棉\n释义：一种开红花的树\n网络用法：木棉花红得像火！\n典故：木棉是南方特有的树\n趣味表达：木棉是树中的火焰', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '树之歌\n\n杨树高，榕树壮，\n梧桐树叶像手掌。\n枫树秋天叶儿红，\n松柏四季披绿装。\n木棉喜暖在南方，\n桦树耐寒守北疆。\n银杏水杉活化石，\n香樟开花满院香。', label: '课文原文', animationType: 'reveal' },
          { type: 'example', content: '杨树——高：长得又高又直\n榕树——壮：树干粗壮，树冠很大\n梧桐——叶像手掌：叶子又大又圆\n枫树——秋天叶红：秋天叶子变红\n松柏——四季常绿：冬天也不落叶\n木棉——喜暖南方：喜欢温暖的南方\n桦树——耐寒北疆：不怕冷，长在北方\n银杏水杉——活化石：非常古老的树种', label: '树木特征', animationType: 'bounce' },
          { type: 'tip', content: '归类识字法：把树按特征分类——按形状分（高、壮）、按颜色分（红、绿）、按地域分（南方、北方）、按历史分（活化石）。分类记忆更有效！', label: '归类识字技巧', animationType: 'pulse' },
          { type: 'animation', content: '不同树木依次生长动画，杨树长高、榕树变壮、枫叶变红', animationType: 'bounce' },
        ],
        teachingMethod: '归类识字法',
        learningObjective: '我能流利朗读课文《树之歌》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读树之歌，展示不同树木的图片，讲解每种树的特征。',
        weDo: '亲子一起去户外认树，对照课文看看能认出几种树。',
        youDo: '孩子独立朗读课文，背诵树之歌，并给每种树画一幅简笔画。',
        parentTips: '【家长预习】梧(wú)偏旁：木本义：梧桐树引申义：梧桐组词：梧桐、梧…\n共学四步：\n①对话出题：问孩子"哪种树像绿色的宝塔？"\n②孩子应答：课文中说柏树像绿色的宝塔，因为柏树是尖尖的锥形。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：哪种树像绿色的宝塔？、杨树（    ），榕树壮、把树和特征配对',
        funElement: '笑话：杨树说"我长得高！"榕树说"我长得壮！"柳树说"我头发长！"——每棵树都有自己的骄傲！🌳',
        gsapAnimations: ['GSAP: 不同树木依次生长动画'],
        images: ['IMG: 各种树木对比图'],
        practiceQuestions: [
          {
            id: 'c2u2l2q1',
            type: 'choice',
            question: '哪种树像绿色的宝塔？',
            options: ['柳树', '柏树', '枫树'],
            answer: '柏树',
            hint: '想想宝塔的形状',
            explanation: '课文中说柏树像绿色的宝塔，因为柏树是尖尖的锥形。'
          },
          {
            id: 'c2u2l2q2',
            type: 'fill',
            question: '杨树___，榕树壮',
            answer: '高',
            hint: '杨树的特点是什么',
            explanation: '课文原句"杨树高，榕树壮"，杨树的特点是高大。'
          },
          {
            id: 'c2u2l2q3',
            type: 'drag',
            question: '把树和特征配对',
            answer: '杨树-高,榕树-壮,柳树-柔',
            hint: '每种树最突出的特点',
            explanation: '杨树高大、榕树粗壮、柳树柔软，各有各的特点。'
          }
        ,
          {
            id: 'c2u2l2q4',
            type: 'choice',
            question: '"树之歌"中描写了哪种树的叶子像手掌？',
            options: ["松树","梧桐树","柏树"],
            answer: '梧桐树',
            hint: '哪种树的叶子最大',
            explanation: '梧桐树的叶子像手掌，又大又宽。'
          },
          {
            id: 'c2u2l2q5',
            type: 'fill',
            question: '"树之歌"中"木棉"生长在___方',
            answer: '南',
            hint: '木棉喜欢温暖还是寒冷',
            explanation: '木棉生长在南方，因为南方温暖适合它生长。'
          },
          {
            id: 'c2u2l2q6',
            type: 'choice',
            question: '【期末真题】"树之歌"属于什么体裁？',
            options: ["童话","儿歌","说明文"],
            answer: '儿歌',
            hint: '读起来像什么',
            explanation: '"树之歌"是一首儿歌，用押韵的方式介绍不同的树。这是期末常考题！'
          },
          {
            id: 'c2u2l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：什么是象形字？',
            answer: '像事物形状的字',
            hint: '[象形字]（语文一年级-第3单元）',
            explanation: '象形字是模仿事物的形状造出来的汉字。'
          }
        ]
      },
      {
        id: 'c2u2l3',
        title: '拍手歌',
        order: 3,
        content: [
                    { type: 'example', content: '雁(yàn)\n偏旁：隹\n本义：候鸟\n引申义：大雁、雁群\n组词：大雁、雁群\n儿歌：厂人隹为雁排成行', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '猛(měng)\n偏旁：犭\n本义：凶猛\n引申义：猛烈、勇猛\n组词：凶猛、猛虎\n儿歌：犭孟为猛力大无穷', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '飞翔\n释义：在空中飞\n网络用法：鸟儿自由飞翔真美！\n典故：古人梦想像鸟一样飞翔\n趣味表达：飞翔是鸟儿的超能力', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '保护\n释义：照顾使不受伤害\n网络用法：我们要保护小动物！\n典故：古人制定保护动物的规定\n趣味表达：保护是给动物的安全帽', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '拍手歌\n\n你拍一，我拍一，保护动物要牢记。\n你拍二，我拍二，孔雀锦鸡是伙伴。\n你拍三，我拍三，雄鹰飞翔云彩间。\n你拍四，我拍四，天空雁群会写字。\n你拍五，我拍五，丛林深处有猛虎。\n你拍六，我拍六，黄鹂百灵唱不休。\n你拍七，我拍七，竹林熊猫在嬉戏。\n你拍八，我拍八，大小动物都有家。\n你拍九，我拍九，人和动物是朋友。\n你拍十，我拍十，保护动物是大事。', label: '课文原文', animationType: 'reveal' },
          { type: 'text', content: '拍手歌用拍手的方式读，一边拍手一边念，节奏感特别强！每一段都介绍一种动物，告诉我们保护动物很重要', animationType: 'reveal' },
          { type: 'example', content: '孔雀——有漂亮的尾羽\n锦鸡——羽毛色彩鲜艳\n雄鹰——在高空飞翔\n大雁——排成字飞行\n猛虎——丛林之王\n黄鹂百灵——唱歌好听\n熊猫——国宝，爱吃竹子', label: '动物特征', animationType: 'bounce' },
          { type: 'tip', content: '节奏诵读识字法：拍一下读一个字，节奏感帮你记住生字！多拍多读，生字自然就记住了。还可以和爸爸妈妈一起拍手读！', label: '诵读技巧', animationType: 'pulse' },
          { type: 'animation', content: '拍手节奏与文字同步高亮动画，配合各种动物插图', animationType: 'bounce' },
        ],
        teachingMethod: '节奏诵读识字法',
        learningObjective: '我能流利朗读课文《拍手歌》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长边拍手边朗读拍手歌，示范节奏和韵律。',
        weDo: '亲子一起拍手读拍手歌，边拍边读，感受节奏的乐趣。',
        youDo: '孩子独立朗读拍手歌，并认读课文中的生字。',
        parentTips: '【家长预习】雁(yàn)偏旁：隹本义：候鸟引申义：大雁、雁群组词：大…\n共学四步：\n①对话出题：问孩子"拍手歌中"你拍一，我拍一"保护的是什么？"\n②孩子应答：拍手歌的主题是保护动物，每段都介绍一种动物。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：拍手歌中"你拍一，我拍一"保护的是什么？、你拍二，我拍二，孔雀（    ）是伙伴、看动物图片快速说出名称',
        funElement: '小游戏：拍手识字大赛！拍一下读一个字，看谁拍得准读得快！节奏乱了就重来！👏',
        gsapAnimations: ['GSAP: 拍手节奏与文字同步高亮动画'],
        images: ['IMG: 拍手歌动物插图'],
        practiceQuestions: [
          {
            id: 'c2u2l3q1',
            type: 'choice',
            question: '拍手歌中"你拍一，我拍一"保护的是什么？',
            options: ['保护植物', '保护动物', '保护环境'],
            answer: '保护动物',
            hint: '拍手歌的主题是什么',
            explanation: '拍手歌的主题是保护动物，每段都介绍一种动物。'
          },
          {
            id: 'c2u2l3q2',
            type: 'fill',
            question: '你拍二，我拍二，孔雀___是伙伴',
            answer: '锦鸡',
            hint: '一种漂亮的鸟',
            explanation: '原句"你拍二，我拍二，孔雀锦鸡是伙伴"。'
          },
          {
            id: 'c2u2l3q3',
            type: 'flashcard',
            question: '看动物图片快速说出名称',
            answer: '锦鸡',
            hint: '一种羽毛漂亮的鸟',
            explanation: '锦鸡是一种羽毛色彩鲜艳的鸟类，在拍手歌中出现。'
          }
        ,
          {
            id: 'c2u2l3q4',
            type: 'choice',
            question: '"拍手歌"中"你拍一我拍一"用了什么修辞？',
            options: ["比喻","拟人","排比"],
            answer: '排比',
            hint: '句式有什么特点',
            explanation: '"你拍一我拍一""你拍二我拍二"句式相同，是排比的修辞手法。'
          },
          {
            id: 'c2u2l3q5',
            type: 'fill',
            question: '"拍手歌"中保护动物要牢记，动物是我们的___',
            answer: '朋友',
            hint: '人类和动物是什么关系',
            explanation: '动物是人类的朋友，我们要保护它们。'
          },
          {
            id: 'c2u2l3q6',
            type: 'choice',
            question: '【期末真题】"拍手歌"的主要目的是什么？',
            options: ["教数数","认识动物保护动物","学唱歌"],
            answer: '认识动物保护动物',
            hint: '歌里写了什么内容',
            explanation: '"拍手歌"通过儿歌形式让我们认识动物、保护动物。这是期末常考题！'
          },
          {
            id: 'c2u2l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："木"字做偏旁时通常表示什么？',
            answer: '与树木有关',
            hint: '[偏旁含义]（语文一年级-第3单元）',
            explanation: '木字旁通常表示与树木、植物有关的意思。'
          }
        ]
      },
      {
        id: 'c2u2l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u2l4q1',
            type: 'choice',
            question: '本单元关于偏旁识记，第1课的重点知识是什么？',
            options: ['偏旁识记', '生字学习', '古诗背诵'],
            answer: '偏旁识记',
            hint: '想想本单元学了哪些偏旁',
            explanation: '本单元第1课重点学习偏旁识记，通过偏旁认识更多汉字。'
          },
          {
            id: 'c2u2l4q2',
            type: 'fill',
            question: '《树之歌》中，哪种树被称为"活化石"？___',
            answer: '银杏',
            hint: '回顾本单元内容',
            explanation: '《树之歌》中写道"银杏水杉活化石"，银杏被称为活化石。'
          },
          {
            id: 'c2u2l4q3',
            type: 'choice',
            question: '本单元关于动物保护，第3课《拍手歌》的重点知识是什么？',
            options: ['动物保护', '生字学习', '古诗背诵'],
            answer: '动物保护',
            hint: '想想拍手歌的内容',
            explanation: '本单元第3课重点学习动物保护，通过拍手歌了解保护动物的重要性。'
          },
          {
            id: 'c2u2l4q4',
            type: 'choice',
            question: '本单元学到了哪些识字方法？',
            options: ['部首识字', '拼音识字', '字理识字', '以上都是'],
            answer: '以上都是',
            hint: '回顾本单元识字方法',
            explanation: '本单元学习了部首识字、拼音识字、字理识字等多种识字方法。'
          },
          {
            id: 'c2u2l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['识字方法', '加减法运算', '英语对话', '体育技能'],
            answer: '识字方法',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了场景识字、儿歌识字等多种识字方法。'
          },
          {
            id: 'c2u2l4q6',
            type: 'choice',
            question: '【期末真题】本单元"识字方法"的学习重点是以下哪个？',
            options: ['学习多种识字方法', '数学计算', '英语单词'],
            answer: '学习多种识字方法',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是学习多种识字方法，这是期末常考的内容！'
          },
          {
            id: 'c2u2l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："树之歌"中银杏被称为什么？',
            answer: '活化石',
            hint: '[课文内容]（语文二年级-第2单元）',
            explanation: '《树之歌》中写道"银杏水杉活化石"。'
          }
        ]
      },
      {
        id: 'c2u2l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"识字方法"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"识字方法"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u2l5q1',
            type: 'choice',
            question: '本单元"识字方法"主要学习了什么？',
            options: ['学习多种识字方法', '数学计算', '英语单词'],
            answer: '学习多种识字方法',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u2l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u2l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u2l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u2l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['杨树高榕树壮', '小蝌蚪长成了青蛙', '寒号鸟总说明天再垒窝', '夜宿山寺危楼高'],
            answer: '杨树高榕树壮',
            hint: '回顾本单元内容，找出与本单元课文相关的句子',
            explanation: '"杨树高榕树壮"使用了本单元《树之歌》的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u2l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['学习多种识字方法', '其他单元内容', '课外知识'],
            answer: '学习多种识字方法',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是学习多种识字方法，这是期末常考的内容！'
          },
          {
            id: 'c2u2l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：写出"多"的反义词',
            answer: '少',
            hint: '[反义词]（语文一年级-第7单元）',
            explanation: '"多"和"少"是一对反义词。'
          }
        ]
      }
    ]
  },
  {
    id: 'c2u3',
    title: '课文精读（二）',
    subtitle: '理解与思考',
    order: 3,
    lessons: [
      {
        id: 'c2u3l1',
        title: '曹冲称象',
        order: 1,
        content: [
                    { type: 'example', content: '曹(cáo)\n偏旁：曰\n本义：姓氏\n引申义：曹操、曹冲\n组词：曹冲、曹操\n儿歌：曰曲为曹姓一家', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '称(chēng)\n偏旁：禾\n本义：测量重量\n引申义：称重、称赞\n组词：称重、称赞\n儿歌：禾尔为称量轻重', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '称象\n释义：称量大象的重量\n网络用法：曹冲称象真聪明！\n典故：曹冲七岁想出称象办法\n趣味表达：称象是古代的智力挑战', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '重量\n释义：物体受到的重力\n网络用法：大象的重量好大啊！\n典故：古人用秤称重量\n趣味表达：重量是物体的体重', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '有人送给曹操一头大象，曹操想知道大象有多重，可是没有那么大的秤，怎么办呢？', animationType: 'reveal' },
          { type: 'dialogue', content: '大臣们说："造一杆大秤！"\n有人说："把大象切成块称！"\n曹操摇摇头："都不行！"\n7岁的曹冲站出来说："我有办法！"', label: '谁有好办法', animationType: 'reveal' },
          { type: 'example', content: '曹冲称象的步骤：\n1. 把大象赶上船，在船舷上画水位线\n2. 把大象赶下船\n3. 往船上装石头，直到水位线和刚才一样\n4. 称一称船上的石头有多重\n5. 石头的重量就是大象的重量！', label: '称象步骤', animationType: 'bounce' },
          { type: 'text', content: '曹冲的办法真聪明！他用石头代替大象来称重，这就是"替换思维"——当直接做不行时，找个等量的东西代替', animationType: 'typewriter' },
          { type: 'tip', content: '理解曹冲称象的关键：为什么石头和大象一样重？因为它们让船沉到同样的深度！水位线相同，说明重量相同。这就是"等量替换"！', label: '理解关键', animationType: 'pulse' },
          { type: 'animation', content: '曹冲称象步骤演示动画，大象上船→画线→装石头→称石头', animationType: 'bounce' },
        ],
        teachingMethod: '逻辑推理阅读法',
        learningObjective: '我能流利朗读课文《曹冲称象》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，在关键步骤处暂停，让孩子先猜测曹冲的办法。',
        weDo: '亲子一起画曹冲称象的步骤图，理解"以石代象"的逻辑。',
        youDo: '孩子独立复述曹冲称象的过程，按步骤说出每一步。',
        parentTips: '【家长预习】曹(cáo)偏旁：曰本义：姓氏引申义：曹操、曹冲组词：曹…\n共学四步：\n①对话出题：问孩子"曹冲称象的关键步骤是什么？"\n②孩子应答：曹冲把大象赶上船画水位线，再往船上装石头到同一水位线，称石头重量就是大象重量。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：曹冲称象的关键步骤是什么？、在船舷上画（    ）线来标记水位、按正确顺序排列曹冲称象的步骤',
        funElement: '小游戏：小小发明家！除了用石头，还能用什么代替大象？用水？用人？想想看！🐘➡️🪨',
        gsapAnimations: ['GSAP: 曹冲称象步骤演示动画'],
        images: ['IMG: 曹冲称象过程示意图'],
        practiceQuestions: [
          {
            id: 'c2u3l1q1',
            type: 'choice',
            question: '曹冲称象的关键步骤是什么？',
            options: ['直接把象放秤上', '用石头代替象的重量', '把象切成块称'],
            answer: '用石头代替象的重量',
            hint: '曹冲的聪明办法',
            explanation: '曹冲把大象赶上船画水位线，再往船上装石头到同一水位线，称石头重量就是大象重量。'
          },
          {
            id: 'c2u3l1q2',
            type: 'fill',
            question: '在船舷上画___线来标记水位',
            answer: '吃水',
            hint: '船沉到水里的位置',
            explanation: '在船舷上画吃水线，标记大象在船上时水面的位置。'
          },
          {
            id: 'c2u3l1q3',
            type: 'drag',
            question: '按正确顺序排列曹冲称象的步骤',
            answer: '赶象上船,画水位线,赶象下船,装石头到水位线,称石头重量',
            hint: '按照课文描述的步骤',
            explanation: '步骤：赶象上船→画水位线→赶象下船→装石头到水位线→称石头重量。'
          }
        ,
          {
            id: 'c2u3l1q4',
            type: 'choice',
            question: '为什么用石头代替大象能称出大象的重量？',
            options: ["石头和大象一样大","水位线相同说明重量相同","石头比大象重"],
            answer: '水位线相同说明重量相同',
            hint: '想想船沉到水面下的深度和重量的关系',
            explanation: '曹冲在船舷上画水位线，石头让船沉到和大象相同的水位线，说明石头和大象的重量相同，这就是等量替换的原理。'
          },
          {
            id: 'c2u3l1q5',
            type: 'fill',
            question: '曹冲称象时，在船上画___线标记水位',
            answer: '吃水',
            hint: '大象和石头的水位要怎样',
            explanation: '曹冲在船舷上画吃水线，标记大象在船上时的水位。'
          },
          {
            id: 'c2u3l1q6',
            type: 'choice',
            question: '【期末真题】"曹冲称象"告诉我们什么道理？',
            options: ["大象很重","遇到问题要动脑筋","石头可以称重"],
            answer: '遇到问题要动脑筋',
            hint: '曹冲的精神是什么',
            explanation: '故事告诉我们遇到问题要动脑筋想办法，不能被困难吓倒。这是期末常考题！'
          },
          {
            id: 'c2u3l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：什么是象形字？',
            answer: '像事物形状的字',
            hint: '[象形字]（语文一年级）',
            explanation: '象形字是模仿事物的形状造出来的汉字。'
          }]
      },
      {
        id: 'c2u3l2',
        title: '玲玲的画',
        order: 2,
        content: [
                    { type: 'example', content: '玲(líng)\n偏旁：王\n本义：玉石相击的声音\n引申义：玲珑、玲玲（人名）\n组词：玲珑、玲玲\n儿歌：王令为玲玉声清', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '画(huà)\n偏旁：田\n本义：描绘\n引申义：图画、画画\n组词：画画、图画\n儿歌：田框为画绘美景', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '弄脏\n释义：把东西弄得不干净\n网络用法：不小心把画弄脏了！\n典故：玲玲不小心把画弄脏了\n趣味表达：弄脏是画画的意外', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '画笔\n释义：画画的笔\n网络用法：画笔一挥画就活了！\n典故：玲玲用画笔在弄脏的地方画小狗\n趣味表达：画笔是画家的魔法棒', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '玲玲画了一幅画，准备参加比赛。可是她不小心把画弄脏了，伤心地哭了起来', animationType: 'reveal' },
          { type: 'dialogue', content: '玲玲哭着说："我的画弄脏了！"\n爸爸看了看说："在这儿画点什么，不是很好吗？"\n玲玲想了想，在弄脏的地方画了一只小狗\n玲玲开心地说："爸爸，你看，画更好看了！"', label: '坏事变好事', animationType: 'reveal' },
          { type: 'example', content: '坏事变好事的例子：\n画弄脏了→画一只小狗，画更好看了\n写错字→改成一幅画，作业更有创意了\n下雨不能出去玩→在家看书，学到了新知识', label: '坏事变好事', animationType: 'bounce' },
          { type: 'tip', content: '这个故事告诉我们：遇到不好的事情不要灰心，动动脑筋，坏事也能变好事！关键是要有积极的心态！', label: '故事道理', animationType: 'pulse' },
          { type: 'animation', content: '画中错误变成新图案动画，脏的地方变成可爱的小狗', animationType: 'bounce' },
        ],
        teachingMethod: '情感体验阅读法',
        learningObjective: '我能流利朗读课文《玲玲的画》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，重点讲解玲玲从失望到开心的心情变化。',
        weDo: '亲子一起讨论：玲玲为什么又开心了？遇到不好的事情怎么变好？',
        youDo: '孩子独立阅读课文，说说自己有没有类似的经历。',
        parentTips: '【家长预习】玲(líng)偏旁：王本义：玉石相击的声音引申义：玲珑、…\n共学四步：\n①对话出题：问孩子"玲玲的画弄脏后，爸爸是怎么说的？"\n②孩子应答：爸爸说"在这儿画点什么"，引导玲玲把弄脏的地方变成画的一部分。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：玲玲的画弄脏后，爸爸是怎么说的？、玲玲在弄脏的地方画了一只（    ）、这个故事告诉我们什么道理？',
        funElement: '小游戏：画笔魔法师！画错了不要擦，看看能不能把错误变成画的一部分！一只多余的线变成小鸟？🎨',
        gsapAnimations: ['GSAP: 画中错误变成新图案动画'],
        images: ['IMG: 玲玲的画变化对比图'],
        practiceQuestions: [
          {
            id: 'c2u3l2q1',
            type: 'choice',
            question: '玲玲的画弄脏后，爸爸是怎么说的？',
            options: ['重新画一张', '在这儿画点什么', '没关系不用管'],
            answer: '在这儿画点什么',
            hint: '爸爸教玲玲什么方法',
            explanation: '爸爸说"在这儿画点什么"，引导玲玲把弄脏的地方变成画的一部分。'
          },
          {
            id: 'c2u3l2q2',
            type: 'fill',
            question: '玲玲在弄脏的地方画了一只___',
            answer: '小狗',
            hint: '她把脏的地方变成了什么',
            explanation: '玲玲在弄脏的地方画了一只小狗，让画变得更好看了。'
          },
          {
            id: 'c2u3l2q3',
            type: 'choice',
            question: '这个故事告诉我们什么道理？',
            options: ['画画要认真', '坏事可以变好事', '不要弄脏画'],
            answer: '坏事可以变好事',
            hint: '想想故事的中心意思',
            explanation: '故事告诉我们遇到不好的事情不要灰心，动脑筋可以把坏事变成好事。'
          }
        ,
          {
            id: 'c2u3l2q4',
            type: 'choice',
            question: '玲玲的画弄脏后心情是怎样的？',
            options: ["很开心","很伤心","很生气"],
            answer: '很伤心',
            hint: '玲玲弄脏画后哭了',
            explanation: '玲玲不小心把画弄脏了，伤心地哭了起来。'
          },
          {
            id: 'c2u3l2q5',
            type: 'fill',
            question: '玲玲在弄脏的地方画了一只小狗，画变得更___了',
            answer: '好看',
            hint: '爸爸的建议让画怎么样了',
            explanation: '玲玲在弄脏的地方画了一只小狗，画变得更好看了。'
          },
          {
            id: 'c2u3l2q6',
            type: 'choice',
            question: '【期末真题】玲玲的画告诉我们什么道理？',
            options: ["画画要认真","坏事可以变好事","不要参加比赛"],
            answer: '坏事可以变好事',
            hint: '想想爸爸教玲玲做了什么',
            explanation: '故事告诉我们遇到不好的事情不要灰心，动动脑筋，坏事也能变好事。这是期末常考题！'
          },
          {
            id: 'c2u3l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："小蝌蚪找妈妈"告诉我们什么道理？',
            answer: '坚持不懈',
            hint: '[课文道理]（语文二年级-第1单元）',
            explanation: '"小蝌蚪找妈妈"告诉我们遇到困难要坚持不懈，最终一定能找到答案。'
          }
        ]
      },
      {
        id: 'c2u3l3',
        title: '一封信',
        order: 3,
        content: [
                    { type: 'example', content: '信(xìn)\n偏旁：亻\n本义：诚实\n引申义：信件、相信\n组词：信件、相信\n儿歌：人言为信真可靠', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '封(fēng)\n偏旁：寸\n本义：封闭\n引申义：信封、封口\n组词：信封、封口\n儿歌：寸圭为封封起来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '一封信\n释义：一封书信\n网络用法：给爸爸写一封信！\n典故：露西给爸爸写信的故事\n趣味表达：一封信是纸上的思念', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '冷清\n释义：冷落、清静\n网络用法：爸爸不在家很冷清\n典故：露西第一封信写家里冷清\n趣味表达：冷清是没有人气的安静', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '露西的爸爸出国了，要过半年才能回来。露西想给爸爸写一封信', animationType: 'reveal' },
          { type: 'dialogue', content: '第一封信：露西写道："爸爸不在家，很不开心。台灯坏了，没人修。家里很冷清……"\n妈妈说："写得不太好吧？重写一封吧。"\n第二封信：露西写道："爸爸，我们过得挺好的。太阳出来了，我和妈妈去公园了。我们想你！"', label: '两封信对比', animationType: 'reveal' },
          { type: 'example', content: '第一封信——不开心：写了很多不开心的事\n第二封信——开心：只写好的事情，让爸爸放心\n区别：同样的事情，用不同的语言表达，效果完全不同！', label: '两封信的区别', animationType: 'bounce' },
          { type: 'tip', content: '写信时要用积极的语言，让读信的人感到温暖和开心。不要只写不开心的事，也要分享快乐的事情！', label: '写信技巧', animationType: 'pulse' },
          { type: 'animation', content: '两封信对比展示动画，不开心的信变成开心的信', animationType: 'bounce' },
        ],
        teachingMethod: '对比阅读法',
        learningObjective: '我能流利朗读课文《一封信》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读露西写的两封信，对比两封信的不同语气和内容。',
        weDo: '亲子一起讨论：为什么第二封信比第一封好？怎样写信让人开心？',
        youDo: '孩子独立阅读课文，试着给家人写一封开心的信。',
        parentTips: '【家长预习】信(xìn)偏旁：亻本义：诚实引申义：信件、相信组词：信…\n共学四步：\n①对话出题：问孩子"露西的第一封信是什么语气？"\n②孩子应答：露西第一封信写了不开心的事，语气比较消极。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：露西的第一封信是什么语气？、露西重写了一封（    ）的信、写信时应该怎样表达？',
        funElement: '小游戏：开心信使！写一封信给妈妈，只写开心的事，看妈妈读到后笑得多甜！✉️😊',
        gsapAnimations: ['GSAP: 两封信对比展示动画'],
        images: ['IMG: 露西写信场景图'],
        practiceQuestions: [
          {
            id: 'c2u3l3q1',
            type: 'choice',
            question: '露西的第一封信是什么语气？',
            options: ['开心的', '不开心的', '生气的'],
            answer: '不开心的',
            hint: '第一封信写了什么',
            explanation: '露西第一封信写了不开心的事，语气比较消极。'
          },
          {
            id: 'c2u3l3q2',
            type: 'fill',
            question: '露西重写了一封___的信',
            answer: '开心',
            hint: '第二封信的语气',
            explanation: '露西在妈妈帮助下重写了一封开心的信，只写好的事情。'
          },
          {
            id: 'c2u3l3q3',
            type: 'choice',
            question: '写信时应该怎样表达？',
            options: ['只写不开心的事', '用积极的语言表达', '不用写真实感受'],
            answer: '用积极的语言表达',
            hint: '第二封信为什么更好',
            explanation: '写信应该用积极的语言表达，让读信的人感到温暖和开心。'
          }
        ,
          {
            id: 'c2u3l3q4',
            type: 'choice',
            question: '露西为什么要给爸爸写信？',
            options: ["爸爸出国了要过半年才回来","老师布置的作业","爸爸过生日"],
            answer: '爸爸出国了要过半年才回来',
            hint: '想想露西写信的原因',
            explanation: '露西的爸爸出国了，要过半年才能回来，所以露西想给爸爸写一封信。'
          },
          {
            id: 'c2u3l3q5',
            type: 'fill',
            question: '露西的第一封信写的是___的事',
            answer: '不开心',
            hint: '第一封信的语气是怎样的',
            explanation: '露西第一封信写了不开心的事，如台灯坏了、家里很冷清。'
          },
          {
            id: 'c2u3l3q6',
            type: 'choice',
            question: '【期末真题】露西的两封信告诉我们什么？',
            options: ["写信要写长一点","同样的事用不同语言表达效果不同","不要给爸爸写信"],
            answer: '同样的事用不同语言表达效果不同',
            hint: '两封信有什么不同',
            explanation: '露西的两封信说明同样的事情，用积极的语言表达效果更好，让人感到温暖。这是期末常考题！'
          },
          {
            id: 'c2u3l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："玲玲的画"中玲玲在弄脏的地方画了什么？',
            answer: '小狗',
            hint: '[课文内容]（语文二年级-第3单元）',
            explanation: '玲玲在弄脏的地方画了一只小狗，画变得更好看了。'
          }
        ]
      },
      {
        id: 'c2u3l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u3l4q1',
            type: 'choice',
            question: '本单元关于故事理解，第1课《曹冲称象》的重点知识是什么？',
            options: ['故事理解', '生字学习', '古诗背诵'],
            answer: '故事理解',
            hint: '想想曹冲称象的故事',
            explanation: '本单元第1课《曹冲称象》重点学习故事理解，理解曹冲称象的故事内容。'
          },
          {
            id: 'c2u3l4q2',
            type: 'fill',
            question: '《玲玲的画》中，玲玲在弄脏的地方画了什么？___',
            answer: '小狗',
            hint: '回顾本单元内容',
            explanation: '玲玲在弄脏的地方画了一只小狗，画变得更好看了。'
          },
          {
            id: 'c2u3l4q3',
            type: 'choice',
            question: '本单元关于故事感悟，第3课的重点知识是什么？',
            options: ['故事感悟', '生字学习', '古诗背诵'],
            answer: '故事感悟',
            hint: '想想一封信告诉我们的道理',
            explanation: '本单元第3课重点学习故事感悟，从《一封信》等故事中体会生活道理。'
          },
          {
            id: 'c2u3l4q4',
            type: 'choice',
            question: '本单元主要学习什么技能？',
            options: ['识字方法', '课文精读理解', '古诗背诵', '写话练习'],
            answer: '课文精读理解',
            hint: '回顾本单元主题',
            explanation: '本单元是课文精读（二），主要学习课文理解与思考。'
          },
          {
            id: 'c2u3l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['坏事可以变好事', '识字方法', '加减法运算', '英语单词'],
            answer: '坏事可以变好事',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了"坏事可以变好事"的道理，以及用积极语言表达的重要性。'
          },
          {
            id: 'c2u3l4q6',
            type: 'choice',
            question: '【期末真题】本单元"课文精读（二）"的学习重点是以下哪个？',
            options: ['理解与思考', '数学计算', '英语单词'],
            answer: '理解与思考',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是理解与思考，这是期末常考的内容！'
          },
          {
            id: 'c2u3l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：《曹冲称象》中曹冲用什么办法称象？',
            answer: '石头',
            hint: '[故事内容]（语文二年级-第3单元）',
            explanation: '曹冲用石头代替大象，通过船的吃水线来称量大象的重量。'
          }
        ]
      },
      {
        id: 'c2u3l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"课文精读（二）"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"课文精读（二）"这个单元，让我们把所有知识综合起…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u3l5q1',
            type: 'choice',
            question: '本单元"课文精读（二）"主要学习了什么？',
            options: ['理解与思考', '数学计算', '英语单词'],
            answer: '理解与思考',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u3l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u3l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u3l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u3l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['坏事可以变好事', '小蝌蚪长成了青蛙', '杨树高榕树壮', '夜宿山寺危楼高'],
            answer: '坏事可以变好事',
            hint: '回顾本单元内容，找出与本单元课文相关的句子',
            explanation: '"坏事可以变好事"使用了本单元的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u3l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['理解与思考', '其他单元内容', '课外知识'],
            answer: '理解与思考',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是理解与思考，这是期末常考的内容！'
          },
          {
            id: 'c2u3l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：《一封信》中露西写了几封信？',
            answer: '两',
            hint: '[故事内容]（语文二年级-第3单元）',
            explanation: '露西给爸爸写了两封信，第二封信比第一封更积极乐观。'
          }
        ]
      }
    ]
  },
  {
    id: 'c2u4',
    title: '祖国山河',
    subtitle: '感受祖国之美',
    order: 4,
    lessons: [
      {
        id: 'c2u4l1',
        title: '登鹳雀楼',
        order: 1,
        content: [
                    { type: 'example', content: '楼(lóu)\n偏旁：木\n本义：多层建筑\n引申义：楼房、楼梯\n组词：楼房、楼梯\n儿歌：木娄为楼层层高', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '穷(qióng)\n偏旁：穴\n本义：尽头\n引申义：贫穷、穷尽\n组词：穷尽、无穷\n儿歌：穴力为穷到尽头', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '登楼\n释义：爬上楼\n网络用法：登楼望远风景好！\n典故：古人登楼赋诗\n趣味表达：登楼是古代的观景台', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '千里\n释义：很远的距离\n网络用法：千里之行始于足下！\n典故：千里马的故事\n趣味表达：千里是古人的超远距离', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '登鹳雀楼\n【唐】王之涣\n\n白日依山尽，\n黄河入海流。\n欲穷千里目，\n更上一层楼。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '太阳沿着山慢慢落下去，黄河水滚滚流向大海。想要看到更远的风景，就要再往高处走一层楼', animationType: 'reveal' },
          { type: 'example', content: '"白日依山尽"——太阳靠着山慢慢落下去了\n"黄河入海流"——黄河水向大海流去\n"欲穷千里目"——想要看到千里之外的风景\n"更上一层楼"——就要再上一层楼\n站得越高，看得越远！', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '"更上一层楼"现在常用来比喻：要想取得更大的进步，就要更加努力！学习也是一样，不断努力才能不断进步！', label: '诗句引申义', animationType: 'pulse' },
          { type: 'animation', content: '登楼远眺视角扩展动画，每上一层看到更远的风景', animationType: 'bounce' },
        ],
        teachingMethod: '古诗意境法',
        learningObjective: '我能背诵古诗《登鹳雀楼》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《登鹳雀楼》全诗 ②能说出诗句的意思和诗人表达的情感',
        iDo: '家长朗读古诗，配合图片展示鹳雀楼的壮丽景色。',
        weDo: '亲子一起讨论"欲穷千里目，更上一层楼"的含义，说说自己的理解。',
        youDo: '孩子独立背诵古诗，用自己的话解释"更上一层楼"的意思。',
        parentTips: '【家长预习】楼(lóu)偏旁：木本义：多层建筑引申义：楼房、楼梯组词…\n共学四步：\n①对话出题：问孩子"白日依山尽"中"依"是什么意思？"\n②孩子应答："依"在这里是依傍、靠着山的意思，太阳依傍着山慢慢落下去了。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测："白日依山尽"中"依"是什么意思？、欲穷千里目，更上（    ）层楼、"更上一层楼"现在常用来比喻什么？',
        funElement: '小游戏：登楼望远！想象你站在高楼上看风景，每上一层看到更远的地方，看到什么了？🏯',
        gsapAnimations: ['GSAP: 登楼远眺视角扩展动画'],
        images: ['IMG: 鹳雀楼远景图'],
        practiceQuestions: [
          {
            id: 'c2u4l1q1',
            type: 'choice',
            question: '"白日依山尽"中"依"是什么意思？',
            options: ['依靠', '沿着', '远离'],
            answer: '依靠',
            hint: '太阳靠着山落下去',
            explanation: '"依"在这里是依傍、靠着山的意思，太阳依傍着山慢慢落下去了。'
          },
          {
            id: 'c2u4l1q2',
            type: 'fill',
            question: '欲穷千里目，更上___层楼',
            answer: '一',
            hint: '要再上几层楼',
            explanation: '原诗"欲穷千里目，更上一层楼"，想要看得更远就要再上一层楼。'
          },
          {
            id: 'c2u4l1q3',
            type: 'choice',
            question: '"更上一层楼"现在常用来比喻什么？',
            options: ['爬楼梯', '再努力提高', '盖新楼'],
            answer: '再努力提高',
            hint: '这句话的引申义',
            explanation: '"更上一层楼"现在常用来比喻要再努力才能达到更高的境界。'
          }
        ,
          {
            id: 'c2u4l1q4',
            type: 'choice',
            question: '"登鹳雀楼"中"欲穷千里目"的"穷"是什么意思？',
            options: ["贫穷","尽、看尽","没有"],
            answer: '尽、看尽',
            hint: '想要看尽远方的风景',
            explanation: '"穷"在这里是"尽"的意思，想要看尽千里之外的风景。'
          },
          {
            id: 'c2u4l1q5',
            type: 'fill',
            question: '"欲穷千里目，更上一层___"',
            answer: '楼',
            hint: '要看到更远要怎样',
            explanation: '想要看到更远的风景，就要再上一层楼。'
          },
          {
            id: 'c2u4l1q6',
            type: 'choice',
            question: '【期末真题】"更上一层楼"现在常用来比喻什么？',
            options: ["爬楼梯","再努力提高","盖新楼"],
            answer: '再努力提高',
            hint: '这句话的引申义',
            explanation: '"更上一层楼"现在常用来比喻再努力提高，争取更好的成绩。这是期末常考题！'
          },
          {
            id: 'c2u4l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：寓言故事一般告诉我们什么？',
            answer: '一个道理',
            hint: '[寓言道理]（语文二年级-第6单元）',
            explanation: '寓言故事通过小故事告诉我们一个深刻的道理。'
          }]
      },
      {
        id: 'c2u4l2',
        title: '望庐山瀑布',
        order: 2,
        content: [
                    { type: 'example', content: '瀑(pù)\n偏旁：氵\n本义：从高处流下的水\n引申义：瀑布\n组词：瀑布、飞瀑\n儿歌：水暴为瀑水飞流', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '炉(lú)\n偏旁：火\n本义：烧火的器具\n引申义：火炉、香炉\n组词：火炉、香炉\n儿歌：火户为炉暖洋洋', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '瀑布\n释义：从高处流下的水流\n网络用法：瀑布太壮观了！\n典故：李白写望庐山瀑布\n趣味表达：瀑布是大自然的水帘洞', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '银河\n释义：天空中的一条光带\n网络用法：银河像一条闪亮的河！\n典故：牛郎织女银河相会\n趣味表达：银河是天空的发光丝带', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '望庐山瀑布\n【唐】李白\n\n日照香炉生紫烟，\n遥看瀑布挂前川。\n飞流直下三千尺，\n疑是银河落九天。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '太阳照在香炉峰上，升起紫色的烟雾。远远望去，瀑布像白布挂在山前。水流飞快地直冲下来，好像银河从天上落下来一样', animationType: 'reveal' },
          { type: 'example', content: '"飞流直下三千尺"——夸张手法，形容瀑布非常高\n"疑是银河落九天"——比喻手法，把瀑布比作银河从天上落下\n李白最爱用夸张和比喻，让诗更加壮观！', label: '修辞手法', animationType: 'bounce' },
          { type: 'tip', content: '李白的诗特点：想象力丰富、气势磅礴！他常把普通景物写得非常壮观。读李白的诗要感受那种豪迈的气势！', label: '李白诗歌特点', animationType: 'pulse' },
          { type: 'animation', content: '瀑布飞流直下动画，水流从高处倾泻，如银河从天而降', animationType: 'bounce' },
        ],
        teachingMethod: '画面想象法',
        learningObjective: '我能背诵古诗《望庐山瀑布》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《望庐山瀑布》全诗 ②能说出诗句的意思和诗人表达的情感',
        iDo: '家长朗读古诗，用图片或视频展示庐山瀑布的壮观景象。',
        weDo: '亲子一起讨论：李白为什么说瀑布像银河落下来？这个比喻好在哪里？',
        youDo: '孩子独立背诵古诗，画出自己想象中的庐山瀑布。',
        parentTips: '【家长预习】瀑(pù)偏旁：氵本义：从高处流下的水引申义：瀑布组词：…\n共学四步：\n①对话出题：问孩子"疑是银河落九天"用了什么修辞手法？"\n②孩子应答：把瀑布比作银河从天上落下来，这是比喻的手法。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测："疑是银河落九天"用了什么修辞手法？、飞流直下（    ）尺、这首诗的作者是谁？',
        funElement: '笑话：李白说"飞流直下三千尺"，瀑布说"我哪有那么长！你夸张了！"——诗人就是爱夸张！🌊',
        gsapAnimations: ['GSAP: 瀑布飞流直下动画'],
        images: ['IMG: 庐山瀑布壮观图'],
        practiceQuestions: [
          {
            id: 'c2u4l2q1',
            type: 'choice',
            question: '"疑是银河落九天"用了什么修辞手法？',
            options: ['拟人', '比喻', '排比'],
            answer: '比喻',
            hint: '把瀑布比作什么',
            explanation: '把瀑布比作银河从天上落下来，这是比喻的手法。'
          },
          {
            id: 'c2u4l2q2',
            type: 'fill',
            question: '飞流直下___尺',
            answer: '三千',
            hint: '李白说瀑布有多高',
            explanation: '原诗"飞流直下三千尺"，用夸张的手法形容瀑布非常高。'
          },
          {
            id: 'c2u4l2q3',
            type: 'choice',
            question: '这首诗的作者是谁？',
            options: ['杜甫', '李白', '王之涣'],
            answer: '李白',
            hint: '被称为"诗仙"的诗人',
            explanation: '《望庐山瀑布》的作者是李白，他的诗想象力丰富、气势磅礴。'
          }
        ,
          {
            id: 'c2u4l2q4',
            type: 'choice',
            question: '"望庐山瀑布"中"飞流直下三千尺"用了什么修辞？',
            options: ["比喻","夸张","拟人"],
            answer: '夸张',
            hint: '三千尺是真的吗',
            explanation: '"三千尺"是夸张的写法，形容瀑布很高很长。'
          },
          {
            id: 'c2u4l2q5',
            type: 'fill',
            question: '"望庐山瀑布"的作者是___',
            answer: '李白',
            hint: '唐代大诗人',
            explanation: '《望庐山瀑布》的作者是唐代大诗人李白。'
          },
          {
            id: 'c2u4l2q6',
            type: 'choice',
            question: '【期末真题】"疑是银河落九天"中"银河"指的是什么？',
            options: ["真的银河","瀑布像银河","天上的星星"],
            answer: '瀑布像银河',
            hint: '诗人把瀑布比作什么',
            explanation: '诗人把瀑布比作银河从天上落下来，这是比喻的写法。这是期末常考题！'
          },
          {
            id: 'c2u4l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：什么是寓言？',
            answer: '通过故事讲道理',
            hint: '[寓言定义]（语文二年级-第6单元）',
            explanation: '寓言是通过短小的故事讲述深刻道理的文学体裁。'
          }
        ]
      },
      {
        id: 'c2u4l3',
        title: '黄山奇石',
        order: 3,
        content: [
                    { type: 'example', content: '奇(qí)\n偏旁：大\n本义：特别\n引申义：奇特、好奇\n组词：奇特、好奇\n儿歌：大可为奇真特别', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '石(shí)\n偏旁：石\n本义：矿物\n引申义：石头、石桥\n组词：石头、石桥\n儿歌：厂口为石硬邦邦', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '奇石\n释义：形状特别的石头\n网络用法：黄山的奇石真神奇！\n典故：黄山奇石闻名天下\n趣味表达：奇石是大自然的雕塑', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '闻名\n释义：很有名\n网络用法：黄山闻名天下！\n典故：黄山以奇松怪石闻名\n趣味表达：闻名是名声的翅膀', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '黄山的石头真奇啊！有的像猴子，有的像仙人，有的像公鸡……千姿百态，有趣极了', animationType: 'reveal' },
          { type: 'example', content: '"猴子观海"——像猴子蹲在山顶看云海\n"仙人指路"——像仙人伸手指着远方\n"金鸡叫天都"——像公鸡对着天都峰叫\n"狮子抢球"——像两只狮子在抢球\n每块石头都有一个有趣的名字！', label: '奇石名称', animationType: 'bounce' },
          { type: 'dialogue', content: '游客说："这块石头像猴子！"\n导游说："它叫猴子观海！"\n游客说："那块像仙人！"\n导游说："它叫仙人指路！"\n大自然说："我才是最厉害的雕塑家！"', label: '奇石对话', animationType: 'reveal' },
          { type: 'tip', content: '图文结合阅读法：先看图片猜石头像什么，再读课文验证。这样读课文更有趣，也能锻炼观察力和想象力！', label: '阅读技巧', animationType: 'pulse' },
          { type: 'animation', content: '奇石形状渐变展示动画，石头变成猴子、仙人、公鸡', animationType: 'bounce' },
        ],
        teachingMethod: '图文结合阅读法',
        learningObjective: '我能流利朗读课文《黄山奇石》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，展示黄山奇石的图片，让孩子对照文字看图片。',
        weDo: '亲子一起观察图片，给每块奇石起名字，看看和课文中的一样不一样。',
        youDo: '孩子独立阅读课文，选择一块奇石用自己的话描述。',
        parentTips: '【家长预习】奇(qí)偏旁：大本义：特别引申义：奇特、好奇组词：奇特…\n共学四步：\n①对话出题：问孩子"猴子观海"中的"海"指的是什么？"\n②孩子应答：黄山顶上的"海"指的是云海，不是真正的大海。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测："猴子观海"中的"海"指的是什么？、黄山奇石以"（    ）"闻名中外、把奇石和名称配对',
        funElement: '小游戏：石头命名师！看黄山的石头像什么？像猴子？像仙人？你来给它取个名字！🪨',
        gsapAnimations: ['GSAP: 奇石形状渐变展示动画'],
        images: ['IMG: 黄山奇石景观图'],
        practiceQuestions: [
          {
            id: 'c2u4l3q1',
            type: 'choice',
            question: '"猴子观海"中的"海"指的是什么？',
            options: ['大海', '云海', '湖'],
            answer: '云海',
            hint: '黄山高处的"海"是什么',
            explanation: '黄山顶上的"海"指的是云海，不是真正的大海。'
          },
          {
            id: 'c2u4l3q2',
            type: 'fill',
            question: '黄山奇石以"___"闻名中外',
            answer: '奇',
            hint: '黄山奇石最大的特点',
            explanation: '黄山奇石以"奇"闻名中外，形状奇特、千姿百态。'
          },
          {
            id: 'c2u4l3q3',
            type: 'drag',
            question: '把奇石和名称配对',
            answer: '猴子-猴子观海,仙人-仙人指路,金鸡-金鸡叫天都',
            hint: '根据石头形状匹配名称',
            explanation: '猴子观海像猴子看云海，仙人指路像仙人指方向，金鸡叫天都像公鸡对着天都峰叫。'
          }
        ,
          {
            id: 'c2u4l3q4',
            type: 'choice',
            question: '"黄山奇石"中"奇"是什么意思？',
            options: ["奇怪","奇特、特别","不好看"],
            answer: '奇特、特别',
            hint: '黄山的石头有什么特别',
            explanation: '"奇"是奇特、特别的意思，黄山的石头形状特别，像各种东西。'
          },
          {
            id: 'c2u4l3q5',
            type: 'fill',
            question: '"黄山奇石"中"猴子观海"像一只___在看云海',
            answer: '猴子',
            hint: '哪块石头像什么动物',
            explanation: '"猴子观海"是一块像猴子坐在山顶看云海的奇石。'
          },
          {
            id: 'c2u4l3q6',
            type: 'choice',
            question: '【期末真题】"黄山奇石"主要用了什么写作手法？',
            options: ["拟人","比喻想象","排比"],
            answer: '比喻想象',
            hint: '石头像什么',
            explanation: '课文用比喻和想象的手法，把石头比作各种动物和人物。这是期末常考题！'
          },
          {
            id: 'c2u4l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："望庐山瀑布"的作者是谁？',
            answer: '李白',
            hint: '[古诗作者]（语文二年级-第4单元）',
            explanation: '"望庐山瀑布"是唐代诗人李白写的。'
          }
        ]
      },
      {
        id: 'c2u4l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u4l4q1',
            type: 'choice',
            question: '本单元关于古诗赏析，第1课《登鹳雀楼》的重点知识是什么？',
            options: ['古诗赏析', '生字学习', '古诗背诵'],
            answer: '古诗赏析',
            hint: '想想登鹳雀楼这首古诗',
            explanation: '本单元第1课《登鹳雀楼》重点学习古诗赏析，理解古诗的意思和意境。'
          },
          {
            id: 'c2u4l4q2',
            type: 'fill',
            question: '《望庐山瀑布》的作者是谁？___',
            answer: '李白',
            hint: '回顾本单元内容',
            explanation: '《望庐山瀑布》是唐代诗人李白写的。'
          },
          {
            id: 'c2u4l4q3',
            type: 'choice',
            question: '本单元关于景物描写，第3课《黄山奇石》的重点知识是什么？',
            options: ['景物描写', '生字学习', '古诗背诵'],
            answer: '景物描写',
            hint: '想想黄山奇石描写的景色',
            explanation: '本单元第3课《黄山奇石》重点学习景物描写，感受黄山的奇石之美。'
          },
          {
            id: 'c2u4l4q4',
            type: 'choice',
            question: '本单元的学习主题是什么？',
            options: ['动物世界', '祖国山河', '科学知识', '成语故事'],
            answer: '祖国山河',
            hint: '回顾本单元主题',
            explanation: '本单元学习主题是"祖国山河"，感受祖国之美。'
          },
          {
            id: 'c2u4l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['祖国山河之美', '坏事可以变好事', '识字方法', '加减法运算'],
            answer: '祖国山河之美',
            hint: '回顾本单元内容',
            explanation: '本单元重点感受了祖国山河之美，学习了描写风景的古诗和课文。'
          },
          {
            id: 'c2u4l4q6',
            type: 'choice',
            question: '【期末真题】本单元"祖国山河"的学习重点是以下哪个？',
            options: ['感受祖国之美', '数学计算', '英语单词'],
            answer: '感受祖国之美',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是感受祖国之美，这是期末常考的内容！'
          },
          {
            id: 'c2u4l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：写出"冷"的反义词',
            answer: '热',
            hint: '[反义词]（语文一年级-第7单元）',
            explanation: '"冷"和"热"是一对反义词。'
          }
        ]
      },
      {
        id: 'c2u4l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"祖国山河"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"祖国山河"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u4l5q1',
            type: 'choice',
            question: '本单元"祖国山河"主要学习了什么？',
            options: ['感受祖国之美', '数学计算', '英语单词'],
            answer: '感受祖国之美',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u4l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u4l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u4l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u4l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['黄山奇石真奇妙', '小蝌蚪长成了青蛙', '杨树高榕树壮', '夜宿山寺危楼高'],
            answer: '黄山奇石真奇妙',
            hint: '回顾本单元内容，找出与本单元课文相关的句子',
            explanation: '"黄山奇石真奇妙"使用了本单元《黄山奇石》的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u4l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['感受祖国之美', '其他单元内容', '课外知识'],
            answer: '感受祖国之美',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是感受祖国之美，这是期末常考的内容！'
          },
          {
            id: 'c2u4l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：《登鹳雀楼》中"欲穷千里目"的下一句是什么？',
            answer: '更上一层楼',
            hint: '[古诗背诵]（语文二年级-第4单元）',
            explanation: '"欲穷千里目，更上一层楼"是《登鹳雀楼》中的名句。'
          }
        ]
      }
    ]
  },
  {
    id: 'c2u5',
    title: '词语积累',
    subtitle: '丰富词汇宝库',
    order: 5,
    lessons: [
      {
        id: 'c2u5l1',
        title: '成语故事',
        order: 1,
        content: [
                    { type: 'example', content: '洪(hóng)\n偏旁：氵\n本义：大水\n引申义：洪水、洪大\n组词：洪水、洪灾\n儿歌：水共为洪大水来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '灾(zāi)\n偏旁：宀\n本义：祸害\n引申义：灾害、火灾\n组词：灾害、火灾\n儿歌：宀火为灾要小心', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '洪水\n释义：泛滥成灾的大水\n网络用法：洪水太可怕了！\n典故：大禹治水的故事\n趣味表达：洪水是河流发脾气', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '疏导\n释义：引导使之通畅\n网络用法：疏导比堵更有效！\n典故：大禹用疏导法治水\n趣味表达：疏导是给水指路', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '成语是汉语的精华！每个成语背后都有一个有趣的故事，记住故事就记住了成语', animationType: 'reveal' },
          { type: 'example', content: '守株待兔——宋国有个农夫，看到一只兔子撞死在树桩上。从此他每天守着树桩等兔子，再也不种地了。结果什么也没等到，田地也荒废了', label: '守株待兔', animationType: 'bounce' },
          { type: 'dialogue', content: '农夫说："又有一只兔子来了吧？"\n邻居说："别等了，快去种地吧！"\n农夫说："种地太累了，等兔子多轻松！"\n结果：兔子没来，庄稼也没了，农夫饿肚子了', label: '农夫与邻居', animationType: 'reveal' },
          { type: 'tip', content: '学成语三步法：1.读故事理解意思；2.记住成语和含义；3.学会在生活中使用。守株待兔=心存侥幸，想不劳而获', label: '学成语方法', animationType: 'pulse' },
          { type: 'animation', content: '成语故事场景演绎动画，农夫守着树桩等兔子', animationType: 'bounce' },
        ],
        teachingMethod: '故事理解法',
        learningObjective: '我能正确运用本课成语造句',
        successCriteria: '①能说出本课成语的意思 ②能用至少2个成语造句',
        iDo: '家长讲述成语故事，用生动的语言和表情让故事更吸引人。',
        weDo: '亲子一起表演成语故事，理解成语的意思和用法。',
        youDo: '孩子独立用学到的成语造句，每个成语造一个句子。',
        parentTips: '【家长预习】洪(hóng)偏旁：氵本义：大水引申义：洪水、洪大组词：…\n共学四步：\n①对话出题：问孩子"守株待兔"告诉我们什么道理？"\n②孩子应答：守株待兔告诉我们不能心存侥幸靠运气，要靠自己努力才能成功。\n③答错引导：家长可以讲成语背后的故事，用"故事记忆法"——先听故事再理解意思\n④快速检测："守株待兔"告诉我们什么道理？、守株待兔中，农夫每天守在树桩旁等（    ）、下面哪个成语和"守株待兔"意思相近？',
        funElement: '小游戏：成语接龙！守株待兔→兔死狐悲→悲喜交加→加油添醋……看谁接得长！🐉',
        gsapAnimations: ['GSAP: 成语故事场景演绎动画'],
        images: ['IMG: 成语故事插图'],
        practiceQuestions: [
          {
            id: 'c2u5l1q1',
            type: 'choice',
            question: '"守株待兔"告诉我们什么道理？',
            options: ['兔子很可爱', '不能靠运气，要自己努力', '种田很辛苦'],
            answer: '不能靠运气，要自己努力',
            hint: '农夫为什么最后什么也没得到',
            explanation: '守株待兔告诉我们不能心存侥幸靠运气，要靠自己努力才能成功。'
          },
          {
            id: 'c2u5l1q2',
            type: 'fill',
            question: '守株待兔中，农夫每天守在树桩旁等___',
            answer: '兔子',
            hint: '他在等什么来撞树桩',
            explanation: '农夫看到一只兔子撞死在树桩上，就每天守着等更多兔子来。'
          },
          {
            id: 'c2u5l1q3',
            type: 'choice',
            question: '下面哪个成语和"守株待兔"意思相近？',
            options: ['刻舟求剑', '亡羊补牢', '画蛇添足'],
            answer: '刻舟求剑',
            hint: '哪个成语也是做事方法不对',
            explanation: '刻舟求剑和守株待兔都是讽刺做事方法不对、不知变通。'
          }
        ,
          {
            id: 'c2u5l1q4',
            type: 'choice',
            question: '"大禹治水"中大禹用什么方法治水？',
            options: ["堵住洪水","疏导洪水","不管洪水"],
            answer: '疏导洪水',
            hint: '大禹和鲧的方法有什么不同',
            explanation: '大禹用疏导的方法，挖渠引水入海，而不是像他父亲鲧那样堵水。'
          },
          {
            id: 'c2u5l1q5',
            type: 'fill',
            question: '大禹治水"三过家门而不___"',
            answer: '入',
            hint: '大禹经过家门做了什么',
            explanation: '大禹三次经过家门都没有进去，一心治水。'
          },
          {
            id: 'c2u5l1q6',
            type: 'choice',
            question: '【期末真题】"大禹治水"告诉我们什么精神？',
            options: ["自私自利","大公无私","害怕困难"],
            answer: '大公无私',
            hint: '大禹三过家门不入说明什么',
            explanation: '大禹三过家门不入，一心为百姓治水，体现了大公无私的精神。这是期末常考题！'
          },
          {
            id: 'c2u5l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：成语一般由几个字组成？',
            answer: '四个字',
            hint: '[成语故事]（语文二年级-第5单元）',
            explanation: '成语大多由四个字组成，背后往往有一个故事。'
          }]
      },
      {
        id: 'c2u5l2',
        title: 'AABB/ABAB词语',
        order: 2,
        content: [
                    { type: 'example', content: '兴(xìng)\n偏旁：八\n本义：起来\n引申义：高兴、兴趣\n组词：高兴、兴趣\n儿歌：八字头兴高兴起', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '净(jìng)\n偏旁：冫\n本义：干净\n引申义：干净、净化\n组词：干净、净化\n儿歌：两点水争为净', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '高高兴兴\n释义：AABB型词语，表示非常高兴\n网络用法：高高兴兴上学去！\n典故：AABB词语强调程度\n趣味表达：高高兴兴比高兴更高兴', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '商量商量\n释义：ABAB型词语，表示再商量一下\n网络用法：这事我们商量商量！\n典故：ABAB词语表示重复动作\n趣味表达：商量商量就是再想想', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: 'AABB和ABAB是两种有趣的词语格式！AABB是前两字相同后两字也相同，ABAB是两个字重复一遍', animationType: 'typewriter' },
          { type: 'example', content: 'AABB型词语（强调程度）：\n高高兴兴、干干净净、红红火火\n明明白白、快快乐乐、安安静静\n\nABAB型词语（表示重复动作）：\n研究研究、商量商量、讨论讨论\n打扫打扫、整理整理、锻炼锻炼', label: '两种词语格式', animationType: 'bounce' },
          { type: 'dialogue', content: 'AABB说："我把程度加深了！高高兴兴比高兴更高兴！"\nABAB说："我把动作重复了！研究研究就是再研究一下！"\n老师说："AABB强调感受，ABAB表示重复，用法不一样哦！"', label: '词语对话', animationType: 'reveal' },
          { type: 'tip', content: '变形小窍门：高兴→高高兴兴（AABB），讨论→讨论讨论（ABAB）。试着把更多词语变形，看谁变得快！', label: '变形技巧', animationType: 'pulse' },
          { type: 'animation', content: '词语AABB/ABAB变形动画，高兴变成高高兴兴', animationType: 'bounce' },
        ],
        teachingMethod: '规律发现法',
        learningObjective: '我能识别并运用AABB、ABAB等特殊词语形式',
        successCriteria: '①能识别AABB、ABAB等词语形式 ②能各举出3个例子',
        iDo: '家长写出AABB和ABAB两组词语，让孩子观察规律。',
        weDo: '亲子一起找更多的AABB和ABAB词语，看谁找得多。',
        youDo: '孩子独立写出5个AABB词语和5个ABAB词语，并各用两个造句。',
        parentTips: '【家长预习】兴(xìng)偏旁：八本义：起来引申义：高兴、兴趣组词：…\n共学四步：\n①对话出题：问孩子"高高兴兴"是什么类型的词语？"\n②孩子应答："高高兴兴"是AABB型词语，前两个字相同，后两个字相同。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："高高兴兴"是什么类型的词语？、"研究研究"是（    ）型词语、把词语分到AABB和ABAB两组',
        funElement: '小游戏：词语变形金刚！高兴→高高兴兴（AABB），讨论→讨论讨论（ABAB），看谁变得快！🤖',
        gsapAnimations: ['GSAP: 词语AABB/ABAB变形动画'],
        images: ['IMG: AABB和ABAB词语对比图'],
        practiceQuestions: [
          {
            id: 'c2u5l2q1',
            type: 'choice',
            question: '"高高兴兴"是什么类型的词语？',
            options: ['AABB', 'ABAB', 'ABCC'],
            answer: 'AABB',
            hint: '看看字的排列规律',
            explanation: '"高高兴兴"是AABB型词语，前两个字相同，后两个字相同。'
          },
          {
            id: 'c2u5l2q2',
            type: 'fill',
            question: '"研究研究"是___型词语',
            answer: 'ABAB',
            hint: '看看字的排列方式',
            explanation: '"研究研究"是ABAB型词语，两个字重复一遍。'
          },
          {
            id: 'c2u5l2q3',
            type: 'drag',
            question: '把词语分到AABB和ABAB两组',
            answer: 'AABB:干干净净,红红火火;ABAB:商量商量,打扫打扫',
            hint: '看字的排列规律',
            explanation: '干干净净、红红火火是AABB型；商量商量、打扫打扫是ABAB型。'
          }
        ,
          {
            id: 'c2u5l2q4',
            type: 'choice',
            question: '下列哪个是AABB式词语？',
            options: ["干干净净","商量商量","绿油油"],
            answer: '干干净净',
            hint: '看看字的排列规律',
            explanation: '"干干净净"是AABB式词语，前两个字相同，后两个字相同。'
          },
          {
            id: 'c2u5l2q5',
            type: 'fill',
            question: 'AABB式词语"开开心心"，再写一个类似的___',
            answer: '快快乐乐',
            hint: '想想还有哪些AABB式词语',
            explanation: '"快快乐乐"是AABB式词语，和"开开心心"结构相同。'
          },
          {
            id: 'c2u5l2q6',
            type: 'choice',
            question: '【期末真题】"打扫打扫"是什么类型的词语？',
            options: ["AABB式","ABAB式","ABB式"],
            answer: 'ABAB式',
            hint: '看看字的排列规律',
            explanation: '"打扫打扫"是ABAB式词语，两个字重复一遍。这是期末常考题！'
          },
          {
            id: 'c2u5l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："悯农"的作者是谁？',
            answer: '李绅',
            hint: '[古诗作者]（语文一年级-第8单元）',
            explanation: '"悯农"是唐代诗人李绅写的。'
          }
        ]
      },
      {
        id: 'c2u5l3',
        title: '近义词反义词',
        order: 3,
        content: [
                    { type: 'example', content: '近(jìn)\n偏旁：辶\n本义：距离短\n引申义：附近、近义\n组词：附近、近义\n儿歌：走斤为近距离短', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '反(fǎn)\n偏旁：又\n本义：翻转\n引申义：相反、反面\n组词：相反、反面\n儿歌：又厂为反翻过来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '近义词\n释义：意思相近的词\n网络用法：美丽和漂亮是近义词！\n典故：近义词像好朋友手拉手\n趣味表达：近义词是意思相近的好朋友', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '反义词\n释义：意思相反的词\n网络用法：大和小是反义词！\n典故：反义词像对手面对面\n趣味表达：反义词是意思相反的对头', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '近义词是意思相近的词，像好朋友手拉手；反义词是意思相反的词，像对手面对面', animationType: 'typewriter' },
          { type: 'example', content: '近义词（意思相近）：\n美丽—漂亮、快乐—高兴、开心—欢乐\n仔细—认真、急忙—连忙、温暖—暖和\n\n反义词（意思相反）：\n大—小、高—低、黑—白\n黑暗—光明、快乐—伤心、热闹—冷清', label: '近义词与反义词', animationType: 'bounce' },
          { type: 'dialogue', content: '近义词说："我们意思差不多，是好朋友！"\n反义词说："我们意思相反，是对手！"\n老师说："近义词有细微差别，要注意区分；反义词意思完全相反，容易辨认！"', label: '近义反义对话', animationType: 'reveal' },
          { type: 'tip', content: '区分近义词的小窍门：放到句子里比较！"美丽的花"和"漂亮的花"都能说，但"美丽的心灵"比"漂亮的心灵"更合适', label: '区分技巧', animationType: 'pulse' },
          { type: 'animation', content: '近义词手拉手、反义词对对碰动画', animationType: 'bounce' },
        ],
        teachingMethod: '对比归类法',
        learningObjective: '我能辨析近义词的细微差别并正确使用',
        successCriteria: '①能说出近义词的意思差别 ②能在语境中正确选用',
        iDo: '家长举例讲解近义词和反义词的区别，如"美丽-漂亮"是近义词，"大-小"是反义词。',
        weDo: '亲子一起玩"词语找朋友"游戏——近义词是好朋友，反义词是对手。',
        youDo: '孩子独立完成近义词和反义词的配对练习。',
        parentTips: '【家长预习】近(jìn)偏旁：辶本义：距离短引申义：附近、近义组词：…\n共学四步：\n①对话出题：问孩子"快乐"的近义词是哪个？"\n②孩子应答："快乐"和"高兴"意思相近，是近义词。\n③答错引导：家长可以让孩子把两个词分别造句，用"造句对比法"——看哪个词用在哪个语境更合适\n④快速检测："快乐"的近义词是哪个？、"黑暗"的反义词是（    ）、把词语分到近义词和反义词两组',
        funElement: '小游戏：词语运动会！近义词手拉手跑接力，反义词面对面拔河！看哪队赢！🏃‍♀️',
        gsapAnimations: ['GSAP: 近义词手拉手、反义词对对碰动画'],
        images: ['IMG: 近义词反义词对比图'],
        practiceQuestions: [
          {
            id: 'c2u5l3q1',
            type: 'choice',
            question: '"快乐"的近义词是哪个？',
            options: ['伤心', '高兴', '生气'],
            answer: '高兴',
            hint: '哪个词和快乐意思相近',
            explanation: '"快乐"和"高兴"意思相近，是近义词。'
          },
          {
            id: 'c2u5l3q2',
            type: 'fill',
            question: '"黑暗"的反义词是___',
            answer: '光明',
            hint: '和黑暗相反',
            explanation: '"黑暗"的反义词是"光明"，它们意思相反。'
          },
          {
            id: 'c2u5l3q3',
            type: 'drag',
            question: '把词语分到近义词和反义词两组',
            answer: '近义:美丽-漂亮,开心-快乐;反义:大-小,高-低',
            hint: '意思相近还是相反',
            explanation: '美丽和漂亮、开心和快乐是近义词；大和小、高和低是反义词。'
          }
        ,
          {
            id: 'c2u5l3q4',
            type: 'choice',
            question: '"难忘的泼水节"中和谁一起泼水？',
            options: ["老师和同学","周总理","爸爸妈妈"],
            answer: '周总理',
            hint: '这个泼水节特别在哪里',
            explanation: '傣族人民和周总理一起过泼水节，非常难忘。'
          },
          {
            id: 'c2u5l3q5',
            type: 'fill',
            question: '"美丽"的近义词是___',
            answer: '漂亮',
            hint: '哪个词和美丽意思相近',
            explanation: '"美丽"和"漂亮"意思相近，是近义词。'
          },
          {
            id: 'c2u5l3q6',
            type: 'choice',
            question: '【期末真题】下列哪组是反义词？',
            options: ["美丽—漂亮","大—小","开心—快乐"],
            answer: '大—小',
            hint: '哪组词意思相反',
            explanation: '"大"和"小"意思相反，是反义词；"美丽—漂亮"和"开心—快乐"是近义词。这是期末常考题！'
          },
          {
            id: 'c2u5l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：AABB式的词语有什么特点？',
            answer: '前后两字相同',
            hint: '[词语格式]（语文二年级-第5单元）',
            explanation: 'AABB式词语如"高高兴兴""快快乐乐"，前后两字分别相同。'
          }
        ]
      },
      {
        id: 'c2u5l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u5l4q1',
            type: 'choice',
            question: '本单元关于成语故事，第1课的重点知识是什么？',
            options: ['成语故事', '生字学习', '古诗背诵'],
            answer: '成语故事',
            hint: '想想本单元学了哪些成语故事',
            explanation: '本单元第1课重点学习成语故事，了解成语的含义和用法。'
          },
          {
            id: 'c2u5l4q2',
            type: 'fill',
            question: 'AABB式的词语，如"高高兴兴"，再写一个___',
            answer: '快快乐乐',
            hint: '回顾本单元内容',
            explanation: 'AABB式词语有高高兴兴、快快乐乐、开开心心等。'
          },
          {
            id: 'c2u5l4q3',
            type: 'choice',
            question: '本单元关于近义词反义词，第3课的重点知识是什么？',
            options: ['近义词反义词', '生字学习', '古诗背诵'],
            answer: '近义词反义词',
            hint: '想想近义词和反义词的区别',
            explanation: '本单元第3课重点学习近义词反义词，掌握意思相近和相反的词语。'
          },
          {
            id: 'c2u5l4q4',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['课文朗读', '词语积累', '古诗背诵', '看图写话'],
            answer: '词语积累',
            hint: '回顾本单元主题',
            explanation: '本单元学习重点是"词语积累"，丰富词汇宝库。'
          },
          {
            id: 'c2u5l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['近义词和反义词', '祖国山河之美', '坏事可以变好事', '识字方法'],
            answer: '近义词和反义词',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了近义词和反义词，以及AABB、ABAB式词语的积累。'
          },
          {
            id: 'c2u5l4q6',
            type: 'choice',
            question: '【期末真题】本单元"词语积累"的学习重点是以下哪个？',
            options: ['丰富词汇宝库', '数学计算', '英语单词'],
            answer: '丰富词汇宝库',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是丰富词汇宝库，这是期末常考的内容！'
          },
          {
            id: 'c2u5l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：古诗一般有几行？',
            answer: '四行',
            hint: '[古诗格式]（语文二年级-第4单元）',
            explanation: '绝句是四行诗，律诗是八行诗，小学主要学绝句。'
          }
        ]
      },
      {
        id: 'c2u5l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"词语积累"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"词语积累"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u5l5q1',
            type: 'choice',
            question: '本单元"词语积累"主要学习了什么？',
            options: ['丰富词汇宝库', '数学计算', '英语单词'],
            answer: '丰富词汇宝库',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u5l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u5l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u5l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u5l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['高高兴兴地走在路上', '小蝌蚪长成了青蛙', '杨树高榕树壮', '夜宿山寺危楼高'],
            answer: '高高兴兴地走在路上',
            hint: '回顾本单元内容，找出与本单元AABB词语相关的句子',
            explanation: '"高高兴兴地走在路上"使用了本单元AABB式词语的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u5l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['丰富词汇宝库', '其他单元内容', '课外知识'],
            answer: '丰富词汇宝库',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是丰富词汇宝库，这是期末常考的内容！'
          },
          {
            id: 'c2u5l5q7',
            type: 'fill',
            question: '回顾前面学过的知识："咏鹅"中鹅的毛是什么颜色？',
            answer: '白',
            hint: '[古诗内容]（语文一年级-第8单元）',
            explanation: '"咏鹅"中写道"白毛浮绿水"，鹅的毛是白色的。'
          }
        ]
      }
    ]
  },
  {
    id: 'c2u6',
    title: '课文精读（三）',
    subtitle: '寓言故事阅读',
    order: 6,
    lessons: [
      {
        id: 'c2u6l1',
        title: '坐井观天',
        order: 1,
        content: [
                    { type: 'example', content: '井(jǐng)\n偏旁：二\n本义：水井\n引申义：水井、井口、形状像井的\n组词：水井、井口\n儿歌：二竖为井四方方', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '观(guān)\n偏旁：见\n本义：看\n引申义：观察、观看\n组词：观察、观看\n儿歌：又见为观仔细看', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '答(dá)\n偏旁：竹\n本义：回答\n引申义：答案、回答\n组词：答案、回答\n儿歌：竹合为答开口应', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '渴(kě)\n偏旁：氵\n本义：口干想喝水\n引申义：渴望、渴求\n组词：渴望、渴求\n儿歌：水曷为渴口干急', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '井沿\n释义：井的边缘\n网络用法：青蛙坐在井沿上看天！\n典故：坐井观天的故事\n趣味表达：井沿是井口的边边', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '无边无际\n释义：没有边际，形容非常大\n网络用法：天无边无际大得很！\n典故：小鸟说天无边无际\n趣味表达：无边无际是大到看不到头', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '青蛙坐在井底，抬头看天，以为天只有井口那么大。小鸟飞来告诉它，天无边无际，大得很呢！', animationType: 'reveal' },
          { type: 'dialogue', content: '青蛙说："天不过井口那么大，还用飞那么远吗？"\n小鸟说："你弄错了，天无边无际，大得很哪！"\n青蛙说："我天天坐在井里，一抬头就看见天，我不会弄错的！"\n小鸟说："你跳出井口来看一看吧！"', label: '青蛙与小鸟', animationType: 'reveal' },
          { type: 'example', content: '坐井观天的寓意：\n青蛙——眼界狭小，只看到井口大的天\n小鸟——见多识广，知道天很大\n寓意：不要像井底之蛙，要开阔眼界！', label: '寓言寓意', animationType: 'bounce' },
          { type: 'tip', content: '理解寓言的方法：1.读故事了解情节；2.分析角色特点；3.思考故事告诉我们什么道理。坐井观天=眼界狭小、见识有限', label: '理解寓言方法', animationType: 'pulse' },
          { type: 'animation', content: '井底视角与天空全景切换动画，青蛙抬头看井口大的天', animationType: 'bounce' },
        ],
        teachingMethod: '寓言探究法',
        learningObjective: '我能流利朗读课文《坐井观天》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，用纸筒模拟井口，让孩子从纸筒里看天，体验青蛙的视角。',
        weDo: '亲子一起讨论：青蛙为什么觉得天只有井口大？小鸟说的对吗？',
        youDo: '孩子独立朗读课文，说说"坐井观天"这个成语的意思。',
        parentTips: '【家长预习】井(jǐng)偏旁：二本义：水井引申义：水井、井口、形状…\n共学四步：\n①对话出题：问孩子"青蛙为什么觉得天只有井口大？"\n②孩子应答：青蛙一直住在井里，只能看到井口那么大的天空，所以以为天只有井口大。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：青蛙为什么觉得天只有井口大？、坐井观天比喻眼界（    ）、见识有限、这个故事告诉我们什么？',
        funElement: '小游戏：视角大不同！用纸筒看世界，再拿掉纸筒看世界——同一个世界，不同视角看到的不一样！🔭',
        gsapAnimations: ['GSAP: 井底视角与天空全景切换动画'],
        images: ['IMG: 坐井观天场景图'],
        practiceQuestions: [
          {
            id: 'c2u6l1q1',
            type: 'choice',
            question: '青蛙为什么觉得天只有井口大？',
            options: ['天真的只有井口大', '它一直住在井里没出去过', '它的眼睛有问题'],
            answer: '它一直住在井里没出去过',
            hint: '青蛙住在哪里',
            explanation: '青蛙一直住在井里，只能看到井口那么大的天空，所以以为天只有井口大。'
          },
          {
            id: 'c2u6l1q2',
            type: 'fill',
            question: '坐井观天比喻眼界___、见识有限',
            answer: '狭小',
            hint: '像井口一样小的视野',
            explanation: '坐井观天比喻眼界狭小、见识有限，看不到更广阔的世界。'
          },
          {
            id: 'c2u6l1q3',
            type: 'choice',
            question: '这个故事告诉我们什么？',
            options: ['井里很舒服', '不要做井底之蛙，要开阔眼界', '小鸟比青蛙聪明'],
            answer: '不要做井底之蛙，要开阔眼界',
            hint: '寓言的寓意是什么',
            explanation: '故事告诉我们不要像井底之蛙一样眼界狭小，要多出去看看，开阔眼界。'
          }
        ,
          {
            id: 'c2u6l1q4',
            type: 'choice',
            question: '如果青蛙跳出井口，它最可能发现什么？',
            options: ["天还是井口那么大","天无边无际","天变小了"],
            answer: '天无边无际',
            hint: '青蛙跳出井后视角会发生什么变化',
            explanation: '青蛙跳出井口后，视角不再被井壁限制，就会看到天是无边无际的，从而明白自己以前错了。'
          },
          {
            id: 'c2u6l1q5',
            type: 'fill',
            question: '青蛙和小鸟对天的大小看法不同，是因为它们看的___不同',
            answer: '角度',
            hint: '青蛙在井底，小鸟在天上飞',
            explanation: '青蛙在井底只能看到井口大的天，小鸟在天上飞能看到无边无际的天，它们看天的角度不同，所以看法不同。'
          },
          {
            id: 'c2u6l1q6',
            type: 'choice',
            question: '【期末真题】"坐井观天"告诉我们什么道理？',
            options: ["井里很凉快","不要目光短浅，要开阔眼界","青蛙比小鸟聪明"],
            answer: '不要目光短浅，要开阔眼界',
            hint: '青蛙为什么会认为天只有井口大',
            explanation: '"坐井观天"告诉我们不要像青蛙一样目光短浅，要走出去多看看，开阔眼界。这是期末常考题！'
          },
          {
            id: 'c2u6l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：《望庐山瀑布》的作者是谁？',
            answer: '李白',
            hint: '[古诗作者]（语文二年级-第4单元）',
            explanation: '《望庐山瀑布》是唐代诗人李白写的，描写了庐山瀑布的壮观。'
          }]
      },
      {
        id: 'c2u6l2',
        title: '寒号鸟',
        order: 2,
        content: [
                    { type: 'example', content: '号(háo)\n偏旁：口\n本义：大声呼叫\n引申义：号叫、哀号\n组词：号叫、哀号\n儿歌：口丂为号大声喊', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '当(dāng)\n偏旁：彐\n本义：担任\n引申义：当作、当时\n组词：当作、当时\n儿歌：彐田为当担起来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '堵(dǔ)\n偏旁：土\n本义：墙\n引申义：堵住、堵车\n组词：堵住、堵车\n儿歌：土者为堵挡住路', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '缝(fèng)\n偏旁：纟\n本义：裂痕\n引申义：缝隙、门缝\n组词：缝隙、门缝\n儿歌：丝逢为缝有裂痕', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '寒号鸟\n释义：一种传说中懒惰的鸟\n网络用法：寒号鸟太懒了！\n典故：寒号鸟的故事教育人\n趣味表达：寒号鸟是拖延症的代言人', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '勤劳\n释义：努力劳动\n网络用法：勤劳的人最可爱！\n典故：勤劳是中华民族美德\n趣味表达：勤劳是幸福的密码', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '秋天到了，喜鹊忙着衔草做窝，准备过冬。寒号鸟却整天玩耍，不做窝', animationType: 'reveal' },
          { type: 'dialogue', content: '喜鹊说："寒号鸟，别睡了，大好晴天，赶快做窝！"\n寒号鸟说："傻喜鹊，不要吵，太阳高照，正好睡觉！"\n冬天到了，寒号鸟冻得直叫："哆啰啰，哆啰啰，寒风冻死我，明天就做窝！"\n第二天，寒号鸟又说："得过且过，明天再做窝！"', label: '喜鹊与寒号鸟', animationType: 'reveal' },
          { type: 'example', content: '喜鹊——勤劳：秋天做窝，冬天暖和\n寒号鸟——懒惰：一直拖延，冬天挨冻\n对比：勤劳的人有准备，懒惰的人吃苦头', label: '角色对比', animationType: 'bounce' },
          { type: 'tip', content: '这个故事告诉我们：今日事今日毕！不能像寒号鸟一样"明天再做"，明天复明天，明天何其多！要做勤劳的人！', label: '故事道理', animationType: 'pulse' },
          { type: 'animation', content: '喜鹊做窝与寒号鸟挨冻对比动画，秋天准备vs冬天受苦', animationType: 'bounce' },
        ],
        teachingMethod: '对比分析法',
        learningObjective: '我能流利朗读课文《寒号鸟》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，对比喜鹊和寒号鸟的不同做法和结果。',
        weDo: '亲子一起制作对比表，列出喜鹊和寒号鸟在秋天和冬天的不同表现。',
        youDo: '孩子独立阅读课文，说说寒号鸟最后为什么会冻死。',
        parentTips: '【家长预习】号(háo)偏旁：口本义：大声呼叫引申义：号叫、哀号组词…\n共学四步：\n①对话出题：问孩子"喜鹊在秋天做了什么？"\n②孩子应答：喜鹊在秋天忙着衔草做窝，为冬天做准备。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：喜鹊在秋天做了什么？、寒号鸟总说"明天再（    ）"、这个故事告诉我们什么道理？',
        funElement: '笑话：寒号鸟说"明天就做窝！"第二天又说"明天就做窝！"——明天复明天，明天何其多！🐦‍⬛',
        gsapAnimations: ['GSAP: 喜鹊做窝与寒号鸟挨冻对比动画'],
        images: ['IMG: 喜鹊和寒号鸟对比图'],
        practiceQuestions: [
          {
            id: 'c2u6l2q1',
            type: 'choice',
            question: '喜鹊在秋天做了什么？',
            options: ['玩耍', '衔草做窝', '睡觉'],
            answer: '衔草做窝',
            hint: '喜鹊为冬天做了什么准备',
            explanation: '喜鹊在秋天忙着衔草做窝，为冬天做准备。'
          },
          {
            id: 'c2u6l2q2',
            type: 'fill',
            question: '寒号鸟总说"明天再___"',
            answer: '做',
            hint: '寒号鸟一直拖延什么',
            explanation: '寒号鸟总是说"明天再做窝"，一直拖延到冬天也没做。'
          },
          {
            id: 'c2u6l2q3',
            type: 'choice',
            question: '这个故事告诉我们什么道理？',
            options: ['冬天很冷', '要做勤劳的人，不能拖延', '鸟要做窝'],
            answer: '要做勤劳的人，不能拖延',
            hint: '喜鹊和寒号鸟的对比说明了什么',
            explanation: '故事告诉我们要像喜鹊一样勤劳，提前准备，不能像寒号鸟一样拖延。'
          }
        ,
          {
            id: 'c2u6l2q4',
            type: 'choice',
            question: '寒号鸟在冬天冻得直叫时说"明天就做窝"，它第二天真的做了吗？',
            options: ["做了窝","没做窝，继续拖延","飞走了"],
            answer: '没做窝，继续拖延',
            hint: '寒号鸟第二天又说了什么',
            explanation: '寒号鸟第二天又说"得过且过，明天再做窝"，一直拖延，最后冻死了。'
          },
          {
            id: 'c2u6l2q5',
            type: 'fill',
            question: '寒号鸟和喜鹊的最大区别是一个勤劳一个___',
            answer: '懒惰',
            hint: '寒号鸟总是拖延',
            explanation: '喜鹊勤劳，秋天就做窝准备过冬；寒号鸟懒惰，一直拖延不做窝，最后冻死了。'
          },
          {
            id: 'c2u6l2q6',
            type: 'choice',
            question: '【期末真题】"寒号鸟"的故事告诉我们什么道理？',
            options: ["冬天很冷","今日事今日毕，不能拖延","鸟要做窝"],
            answer: '今日事今日毕，不能拖延',
            hint: '寒号鸟因为什么冻死了',
            explanation: '"寒号鸟"告诉我们要今日事今日毕，不能像寒号鸟一样拖延，要做勤劳的人。这是期末常考题！'
          },
          {
            id: 'c2u6l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：观察事物可以用哪些感官？写出一个',
            answer: '眼睛',
            acceptableAnswers: ['眼睛', '耳朵', '鼻子', '手'],
            hint: '[观察方法]（语文二年级-第5单元）',
            explanation: '观察事物可以用眼睛看、耳朵听、鼻子闻、手摸等多种感官。'
          }
        ]
      },
      {
        id: 'c2u6l3',
        title: '我要的是葫芦',
        order: 3,
        content: [
                    { type: 'example', content: '葫(hú)\n偏旁：艹\n本义：葫芦\n引申义：葫芦\n组词：葫芦、水葫芦\n儿歌：草胡为葫藤上挂', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '芦(lú)\n偏旁：艹\n本义：芦苇\n引申义：芦苇、葫芦\n组词：芦苇、葫芦\n儿歌：草户为芦水边生', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '藤(téng)\n偏旁：艹\n本义：藤蔓\n引申义：藤条、藤蔓\n组词：藤蔓、藤条\n儿歌：草滕为藤爬满架', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '哇(wā)\n偏旁：口\n本义：语气词\n引申义：语气词、感叹\n组词：好哇、走哇\n儿歌：口圭为哇表感叹', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '葫芦\n释义：一种藤本植物，果实可做容器\n网络用法：小葫芦真可爱！\n典故：我要的是葫芦的故事\n趣味表达：葫芦是藤上的小娃娃', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '蚜虫\n释义：一种吸食植物汁液的害虫\n网络用法：蚜虫把叶子都吃光了！\n典故：种葫芦的人不治蚜虫\n趣味表达：蚜虫是叶子的坏邻居', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '一个人种了一棵葫芦，藤上长满了绿叶，开出了雪白的小花，花谢以后藤上挂了小葫芦，多可爱啊！', animationType: 'reveal' },
          { type: 'dialogue', content: '邻居说："叶子上长了蚜虫，快治一治吧！"\n种葫芦的人说："什么？叶子上的虫还用治？我要的是葫芦！"\n结果：叶子被蚜虫吃光了，小葫芦也一个一个落了', label: '种葫芦的人与邻居', animationType: 'reveal' },
          { type: 'example', content: '因果关系链：\n蚜虫吃叶子→叶子枯萎→葫芦得不到营养→葫芦落了\n叶子和葫芦是连在一起的！没有叶子就没有葫芦！', label: '因果关系', animationType: 'bounce' },
          { type: 'tip', content: '这个故事告诉我们：事物之间是相互联系的，不能只看结果不管过程！叶子和葫芦虽然看起来没关系，但其实是好朋友！', label: '故事道理', animationType: 'pulse' },
          { type: 'animation', content: '葫芦从藤上掉落动画，蚜虫吃叶子→叶子枯萎→葫芦掉落', animationType: 'bounce' },
        ],
        teachingMethod: '因果推理法',
        learningObjective: '我能流利朗读课文《我要的是葫芦》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，引导孩子思考：葫芦和叶子有什么关系？为什么葫芦会落？',
        weDo: '亲子一起画因果关系图：蚜虫→叶子被吃→葫芦得不到营养→葫芦落了。',
        youDo: '孩子独立阅读课文，用自己的话说说种葫芦的人错在哪里。',
        parentTips: '【家长预习】葫(hú)偏旁：艹本义：葫芦引申义：葫芦组词：葫芦、水葫…\n共学四步：\n①对话出题：问孩子"葫芦为什么会落？"\n②孩子应答：叶子上长了蚜虫，叶子被蚜虫吃掉，葫芦得不到营养就落了。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：葫芦为什么会落？、种葫芦的人只关心（    ），不关心叶子、这个故事告诉我们什么？',
        funElement: '笑话：种葫芦的人说"我只要葫芦，不要叶子！"葫芦说"没有叶子我活不了啊！"——它们是好朋友！🌱',
        gsapAnimations: ['GSAP: 葫芦从藤上掉落动画'],
        images: ['IMG: 葫芦与叶子的关系图'],
        practiceQuestions: [
          {
            id: 'c2u6l3q1',
            type: 'choice',
            question: '葫芦为什么会落？',
            options: ['风太大', '叶子上长了蚜虫', '葫芦太重了'],
            answer: '叶子上长了蚜虫',
            hint: '叶子和葫芦有什么关系',
            explanation: '叶子上长了蚜虫，叶子被蚜虫吃掉，葫芦得不到营养就落了。'
          },
          {
            id: 'c2u6l3q2',
            type: 'fill',
            question: '种葫芦的人只关心___，不关心叶子',
            answer: '葫芦',
            hint: '他想要什么',
            explanation: '种葫芦的人只关心葫芦，不关心叶子上的蚜虫，所以葫芦最后落了。'
          },
          {
            id: 'c2u6l3q3',
            type: 'choice',
            question: '这个故事告诉我们什么？',
            options: ['葫芦不好吃', '事物之间有联系，不能只看一部分', '蚜虫很可怕'],
            answer: '事物之间有联系，不能只看一部分',
            hint: '叶子和葫芦的关系说明了什么',
            explanation: '故事告诉我们事物之间是相互联系的，叶子和葫芦不能分开，要全面看问题。'
          }
        ,
          {
            id: 'c2u6l3q4',
            type: 'choice',
            question: '种葫芦的人错在哪里？',
            options: ["不该种葫芦","只关心葫芦，不治叶子上的蚜虫","不该听邻居的话"],
            answer: '只关心葫芦，不治叶子上的蚜虫',
            hint: '叶子和葫芦有什么关系',
            explanation: '种葫芦的人只关心葫芦，不知道叶子和葫芦是连在一起的，不治蚜虫导致叶子被吃光，葫芦也落了。'
          },
          {
            id: 'c2u6l3q5',
            type: 'fill',
            question: '叶子上长了蚜虫，葫芦得不到___就落了',
            answer: '营养',
            hint: '叶子对葫芦有什么作用',
            explanation: '叶子被蚜虫吃光后，葫芦得不到营养，所以就一个一个落了。'
          },
          {
            id: 'c2u6l3q6',
            type: 'choice',
            question: '【期末真题】"我要的是葫芦"告诉我们什么道理？',
            options: ["葫芦不好吃","事物之间是相互联系的，不能只看一部分","蚜虫很可怕"],
            answer: '事物之间是相互联系的，不能只看一部分',
            hint: '叶子和葫芦的关系说明了什么',
            explanation: '"我要的是葫芦"告诉我们事物之间是相互联系的，叶子和葫芦不能分开，要全面看问题。这是期末常考题！'
          },
          {
            id: 'c2u6l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：《坐井观天》中青蛙认为天有多大？',
            answer: '井口那么大',
            hint: '[寓言故事]（语文二年级-第6单元）',
            explanation: '青蛙坐在井里，认为天只有井口那么大，告诉我们看问题要全面。'
          }
        ]
      },
      {
        id: 'c2u6l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u6l4q1',
            type: 'choice',
            question: '本单元关于寓言故事，第1课《坐井观天》的重点知识是什么？',
            options: ['寓言故事', '生字学习', '古诗背诵'],
            answer: '寓言故事',
            hint: '想想坐井观天的故事道理',
            explanation: '本单元第1课《坐井观天》重点学习寓言故事，理解寓言中蕴含的道理。'
          },
          {
            id: 'c2u6l4q2',
            type: 'fill',
            question: '《寒号鸟》中，寒号鸟为什么冻死了？___',
            answer: '懒惰',
            hint: '回顾本单元内容',
            explanation: '寒号鸟因为懒惰不垒窝，总说明天再做，最后冻死了。'
          },
          {
            id: 'c2u6l4q3',
            type: 'choice',
            question: '本单元关于寓言道理，第3课《我要的是葫芦》的重点知识是什么？',
            options: ['寓言道理', '生字学习', '古诗背诵'],
            answer: '寓言道理',
            hint: '想想我要的是葫芦告诉我们什么道理',
            explanation: '本单元第3课《我要的是葫芦》重点学习寓言道理，理解事物之间的联系。'
          },
          {
            id: 'c2u6l4q4',
            type: 'choice',
            question: '本单元主要学习什么类型的课文？',
            options: ['科普文章', '寓言故事', '古诗', '写话'],
            answer: '寓言故事',
            hint: '回顾本单元主题',
            explanation: '本单元是课文精读（三），主要学习寓言故事阅读。'
          },
          {
            id: 'c2u6l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['寓言故事的道理', '近义词和反义词', '祖国山河之美', '坏事可以变好事'],
            answer: '寓言故事的道理',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了寓言故事告诉我们的道理，如坐井观天要开阔眼界、寒号鸟要勤劳不拖延。'
          },
          {
            id: 'c2u6l4q6',
            type: 'choice',
            question: '【期末真题】本单元"课文精读（三）"的学习重点是以下哪个？',
            options: ['寓言故事阅读', '数学计算', '英语单词'],
            answer: '寓言故事阅读',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是寓言故事阅读，这是期末常考的内容！'
          },
          {
            id: 'c2u6l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："寒号鸟"因为什么冻死了？',
            answer: '懒惰不垒窝',
            hint: '[课文内容]（语文二年级-第6单元）',
            explanation: '寒号鸟因为懒惰不垒窝，总说明天再做，最后冻死了。'
          }
        ]
      },
      {
        id: 'c2u6l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"课文精读（三）"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"课文精读（三）"这个单元，让我们把所有知识综合起…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u6l5q1',
            type: 'choice',
            question: '本单元"课文精读（三）"主要学习了什么？',
            options: ['寓言故事阅读', '数学计算', '英语单词'],
            answer: '寓言故事阅读',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u6l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u6l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u6l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u6l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['寒号鸟总说明天再垒窝', '小蝌蚪长成了青蛙', '杨树高榕树壮', '夜宿山寺危楼高'],
            answer: '寒号鸟总说明天再垒窝',
            hint: '回顾本单元内容，找出与本单元寓言故事相关的句子',
            explanation: '"寒号鸟总说明天再垒窝"使用了本单元《寒号鸟》的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u6l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['寓言故事阅读', '其他单元内容', '课外知识'],
            answer: '寓言故事阅读',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是寓言故事阅读，这是期末常考的内容！'
          },
          {
            id: 'c2u6l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：《树之歌》中"杨树高"的下一句是什么？',
            answer: '榕树壮',
            hint: '[识字课文]（语文二年级-第2单元）',
            explanation: '课文原句"杨树高，榕树壮"。'
          }
        ]
      }
    ]
  },
  {
    id: 'c2u7',
    title: '写话入门',
    subtitle: '开始学习写话',
    order: 7,
    lessons: [
      {
        id: 'c2u7l1',
        title: '看图写话',
        order: 1,
        content: [
                    { type: 'example', content: '图(tú)\n偏旁：口\n本义：图画\n引申义：图画、地图\n组词：图画、地图\n儿歌：口冬为图画画看', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '话(huà)\n偏旁：讠\n本义：语言\n引申义：说话、对话\n组词：说话、对话\n儿歌：言舌为话开口说', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '看图写话\n释义：看图画写一段话\n网络用法：看图写话真有趣！\n典故：看图写话是写作入门\n趣味表达：看图写话是作文的起跑线', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '观察\n释义：仔细看\n网络用法：仔细观察很重要！\n典故：观察是学习的第一步\n趣味表达：观察是发现的放大镜', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '看图写话就是看着图片写一段话。先仔细看图，再按顺序说，最后写下来', animationType: 'typewriter' },
          { type: 'example', content: '看图写话四步法：\n1. 观察图片——看整体，再看细节\n2. 按顺序说——谁在做什么？在哪里？什么时间？\n3. 写下来——用完整的句子写\n4. 检查修改——读一遍，看看有没有错', label: '写话步骤', animationType: 'bounce' },
          { type: 'text', content: '5W法帮你把话说完整：谁（Who）、在哪里（Where）、什么时间（When）、做什么（What）、为什么（Why）', animationType: 'typewriter' },
          { type: 'tip', content: '看图写话最重要的是：先说后写！说清楚了再动笔，不要着急。可以用5W法帮助自己把话说完整！', label: '写话技巧', animationType: 'pulse' },
          { type: 'animation', content: '图片细节逐个放大展示动画，5W要素依次出现', animationType: 'bounce' },
        ],
        teachingMethod: '观察表达法',
        learningObjective: '我能看懂图意，用通顺的语句写几句完整的话',
        successCriteria: '①能看懂图意并写出完整的句子 ②语句通顺，无错别字',
        iDo: '家长示范看图写话的过程：先看整体→再看细节→按顺序说→写下来。',
        weDo: '亲子一起观察图片，一人说一句，合作完成看图写话。',
        youDo: '孩子独立完成看图写话，写出3-5句话。',
        parentTips: '【家长预习】图(tú)偏旁：口本义：图画引申义：图画、地图组词：图画…\n共学四步：\n①对话出题：问孩子"看图写话第一步应该做什么？"\n②孩子应答：看图写话第一步是仔细观察图片，看清楚图上画了什么。\n③答错引导：家长可以先让孩子口头说一遍要写的内容，用"先说后写法"——说清楚再动笔，写不出的字用拼音代替\n④快速检测：看图写话第一步应该做什么？、看图写话可以用5W法：谁、在哪、什么（    …、按正确顺序排列看图写话的步骤',
        funElement: '小游戏：图片侦探！看图片找线索，谁在做什么？在哪里？什么时间？为什么？5W大法！🔍',
        gsapAnimations: ['GSAP: 图片细节逐个放大展示动画'],
        images: ['IMG: 看图写话示例图片'],
        practiceQuestions: [
          {
            id: 'c2u7l1q1',
            type: 'choice',
            question: '看图写话第一步应该做什么？',
            options: ['直接写', '观察图片', '查字典'],
            answer: '观察图片',
            hint: '先看再写',
            explanation: '看图写话第一步是仔细观察图片，看清楚图上画了什么。'
          },
          {
            id: 'c2u7l1q2',
            type: 'fill',
            question: '看图写话可以用5W法：谁、在哪、什么___、做什么、为什么',
            answer: '时间',
            hint: '5W中还有一个重要的要素',
            explanation: '5W法包括：谁（Who）、在哪（Where）、什么时间（When）、做什么（What）、为什么（Why）。'
          },
          {
            id: 'c2u7l1q3',
            type: 'drag',
            question: '按正确顺序排列看图写话的步骤',
            answer: '观察图片,按顺序说,写下来,检查修改',
            hint: '先看后说再写',
            explanation: '看图写话步骤：观察图片→按顺序说→写下来→检查修改。'
          }
        ,
          {
            id: 'c2u7l1q4',
            type: 'choice',
            question: '看图写话时，为什么要先观察图片再动笔写？',
            options: ["看清楚才能写清楚不漏内容","写得更快","字数会更多"],
            answer: '看清楚才能写清楚不漏内容',
            hint: '观察和写作有什么关系',
            explanation: '先观察清楚图片内容，才能把图上的时间、地点、人物、事件写清楚、写完整，不会漏掉重要信息。'
          },
          {
            id: 'c2u7l1q5',
            type: 'fill',
            question: '看图写话要说清时间、地点、人物和___',
            answer: '事件',
            hint: '写话要写哪些要素',
            explanation: '看图写话要说清时间、地点、人物和事件四个要素。'
          },
          {
            id: 'c2u7l1q6',
            type: 'choice',
            question: '【期末真题】看图写话最重要的是？',
            options: ["先说后写","直接写","不用观察"],
            answer: '先说后写',
            hint: '怎样写话最有效',
            explanation: '看图写话最重要的是先说后写，先想清楚再说出来，最后写下来。这是期末常考题！'
          },
          {
            id: 'c2u7l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：写日记先写什么？',
            answer: '日期和天气',
            hint: '[日记格式]（语文二年级-第7单元）',
            explanation: '日记的格式是先写日期和天气，再写正文内容。'
          }]
      },
      {
        id: 'c2u7l2',
        title: '续写故事',
        order: 2,
        content: [
                    { type: 'example', content: '续(xù)\n偏旁：纟\n本义：继续\n引申义：继续、连续\n组词：继续、连续\n儿歌：丝卖为续接上去', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '编(biān)\n偏旁：纟\n本义：编织\n引申义：编写、编故事\n组词：编写、编故事\n儿歌：丝扁为编织起来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '想(xiǎng)\n偏旁：心\n本义：思考\n引申义：想象、想法\n组词：想象、想法\n儿歌：心相为想动脑筋', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '创(chuàng)\n偏旁：刂\n本义：创造\n引申义：创造、创新\n组词：创造、创新\n儿歌：仓刀为创新东西', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '续写\n释义：接着别人的故事往下写\n网络用法：续写故事真有趣！\n典故：续写是写作练习的方法\n趣味表达：续写是给故事续命', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '想象\n释义：想出不在眼前的事物\n网络用法：发挥想象编故事！\n典故：想象是创作的翅膀\n趣味表达：想象是大脑的魔法棒', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '续写故事就是接着别人的故事往下编。要注意和前面的内容衔接自然，不能前后矛盾', animationType: 'typewriter' },
          { type: 'example', content: '续写三步法：\n1. 读懂开头——了解人物、时间、地点\n2. 想象发展——接下来会发生什么？\n3. 顺理成章——让故事发展合情合理\n\n例：小兔子发现了一扇门，打开门……（你来续写！）', label: '续写方法', animationType: 'bounce' },
          { type: 'dialogue', content: '小朋友说："续写就是接着编故事！"\n老师说："对，但要注意和前面衔接自然！"\n小朋友说："我可以让故事变得更精彩！"\n老师说："发挥想象力，但不要前后矛盾哦！"', label: '续写对话', animationType: 'reveal' },
          { type: 'tip', content: '续写秘诀：1.顺着故事发展继续写；2.人物性格要一致；3.想象要合理，不能太离谱；4.结尾要有意思！', label: '续写技巧', animationType: 'pulse' },
          { type: 'animation', content: '故事续写内容渐现动画，门打开后出现奇妙世界', animationType: 'bounce' },
        ],
        teachingMethod: '想象创作法',
        learningObjective: '我能根据故事开头合理续写故事内容',
        successCriteria: '①续写内容与原文衔接自然 ②故事情节合理完整',
        iDo: '家长读一个故事开头，示范如何续写，展示想象的过程。',
        weDo: '亲子一起续编故事，一人说一段，看故事能编多有趣。',
        youDo: '孩子独立续写一个故事，写出故事的后续发展。',
        parentTips: '【家长预习】续(xù)偏旁：纟本义：继续引申义：继续、连续组词：继续…\n共学四步：\n①对话出题：问孩子"续写故事最重要的是什么？"\n②孩子应答：续写最重要的是和前面的内容衔接自然，不能前后矛盾。\n③答错引导：家长可以先让孩子口头说一遍要写的内容，用"先说后写法"——说清楚再动笔，写不出的字用拼音代替\n④快速检测：续写故事最重要的是什么？、续写时要发挥（    ），让故事更有趣、下面哪个续写方向最好？',
        funElement: '小游戏：故事接龙！小兔子在森林里发现了一扇门，打开门……你来接着编！🚪',
        gsapAnimations: ['GSAP: 故事续写内容渐现动画'],
        images: ['IMG: 续写故事场景图'],
        practiceQuestions: [
          {
            id: 'c2u7l2q1',
            type: 'choice',
            question: '续写故事最重要的是什么？',
            options: ['写得越长越好', '和前面内容衔接自然', '用很多好词'],
            answer: '和前面内容衔接自然',
            hint: '续写要和原文保持一致',
            explanation: '续写最重要的是和前面的内容衔接自然，不能前后矛盾。'
          },
          {
            id: 'c2u7l2q2',
            type: 'fill',
            question: '续写时要发挥___，让故事更有趣',
            answer: '想象',
            hint: '续写需要什么能力',
            explanation: '续写时要发挥想象力，让故事发展更有创意和趣味。'
          },
          {
            id: 'c2u7l2q3',
            type: 'choice',
            question: '下面哪个续写方向最好？',
            options: ['完全改变故事主题', '顺着故事发展继续写', '重新写一个故事'],
            answer: '顺着故事发展继续写',
            hint: '续写的"续"是什么意思',
            explanation: '续写要顺着原来的故事发展继续写，保持故事的一致性。'
          }
        ,
          {
            id: 'c2u7l2q4',
            type: 'choice',
            question: '续写故事时，如果原文主人公胆小怕事，下面哪种续写最合理？',
            options: ["主人公突然变得勇敢无畏","主人公依然胆小但慢慢成长","完全换成另一个主人公"],
            answer: '主人公依然胆小但慢慢成长',
            hint: '人物性格要和原文保持一致',
            explanation: '续写要保持人物性格的一致性，主人公可以成长变化，但不能突然变成完全不同的人，否则就前后矛盾了。'
          },
          {
            id: 'c2u7l2q5',
            type: 'fill',
            question: '续写故事要做到和前面内容衔接___',
            answer: '自然',
            hint: '续写不能前后矛盾',
            explanation: '续写故事要做到和前面内容衔接自然，不能前后矛盾。'
          },
          {
            id: 'c2u7l2q6',
            type: 'choice',
            question: '【期末真题】续写故事最关键的一点是什么？',
            options: ["字数要超过原文","顺着原文合理想象","完全重写一个新故事"],
            answer: '顺着原文合理想象',
            hint: '续写要在原文基础上发展',
            explanation: '续写最关键的是顺着原文的故事发展，发挥合理想象继续写，不能脱离原文另起炉灶。这是期末常考题！'
          },
          {
            id: 'c2u7l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：水可以变成什么形态？写出一个',
            answer: '云',
            acceptableAnswers: ['云', '雨', '雹子', '雪'],
            hint: '[自然现象]（语文二年级-第1单元）',
            explanation: '水可以变成云、雨、雹子、雪等不同形态。'
          }
        ]
      },
      {
        id: 'c2u7l3',
        title: '日记格式',
        order: 3,
        content: [
                    { type: 'example', content: '日(rì)\n偏旁：日\n本义：太阳\n引申义：日期、日记\n组词：日记、日期\n儿歌：方框一横日头明', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '记(jì)\n偏旁：讠\n本义：记录\n引申义：日记、记忆\n组词：日记、记录\n儿歌：言己为记写下来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '格(gé)\n偏旁：木\n本义：树木的长枝条\n引申义：格式、规格\n组词：格式、规格\n儿歌：木各为格有规矩', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '式(shì)\n偏旁：弋\n本义：法度、规范\n引申义：格式、方式\n组词：格式、方式\n儿歌：工弋为式定规矩', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '日记\n释义：每天记录的文字\n网络用法：写日记记录美好生活！\n典故：日记是和自己对话\n趣味表达：日记是时间的存钱罐', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '天气\n释义：大气的变化状况\n网络用法：今天天气真好！\n典故：日记开头要写天气\n趣味表达：天气是天空的心情', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '日记就是每天记录自己生活中发生的事情。写日记能帮我们记住美好的时光！', animationType: 'typewriter' },
          { type: 'example', content: '日记格式：\n第一行：6月15日 星期日 晴\n第二行空两格开始写正文\n\n6月15日 星期日 晴\n今天我和妈妈去公园玩了。我看到了很多花，还喂了小鱼。我玩得很开心！', label: '日记格式示例', animationType: 'bounce' },
          { type: 'text', content: '日记三要素：日期（几月几日）、星期（星期几）、天气（晴/阴/雨）。正文每段开头空两格', animationType: 'typewriter' },
          { type: 'tip', content: '写日记小窍门：不用写很长，把今天最有趣或最有意义的一件事写下来就好。坚持每天写，你会越来越棒！', label: '写日记技巧', animationType: 'pulse' },
          { type: 'animation', content: '日记格式标注动画，日期、星期、天气、正文依次出现', animationType: 'bounce' },
        ],
        teachingMethod: '格式示范法',
        learningObjective: '我能掌握日记格式，用日记记录一天中有意义的事',
        successCriteria: '①日记格式正确（日期、天气） ②内容清楚，语句通顺',
        iDo: '家长在纸上示范日记的正确格式：日期、星期、天气、正文。',
        weDo: '亲子一起写一篇日记，家长指导格式，孩子写内容。',
        youDo: '孩子独立写一篇日记，注意格式正确。',
        parentTips: '【家长预习】日(rì)偏旁：日本义：太阳引申义：日期、日记组词：日记…\n共学四步：\n①对话出题：问孩子"日记第一行要写什么？"\n②孩子应答：日记第一行要写日期、星期和天气，这是日记的格式要求。\n③答错引导：家长可以先让孩子口头说一遍要写的内容，用"先说后写法"——说清楚再动笔，写不出的字用拼音代替\n④快速检测：日记第一行要写什么？、日记正文每段开头要空（    ）格、按正确顺序排列日记的组成部分',
        funElement: '小游戏：小小日记家！今天发生了什么有趣的事？用日记记录下来，将来翻看一定很开心！📖',
        gsapAnimations: ['GSAP: 日记格式标注动画'],
        images: ['IMG: 日记格式示例图'],
        practiceQuestions: [
          {
            id: 'c2u7l3q1',
            type: 'choice',
            question: '日记第一行要写什么？',
            options: ['正文', '日期、星期和天气', '标题'],
            answer: '日期、星期和天气',
            hint: '日记开头有什么特别的',
            explanation: '日记第一行要写日期、星期和天气，这是日记的格式要求。'
          },
          {
            id: 'c2u7l3q2',
            type: 'fill',
            question: '日记正文每段开头要空___格',
            answer: '两',
            hint: '和写作文一样',
            explanation: '日记正文每段开头要空两格，这是中文写作的基本格式。'
          },
          {
            id: 'c2u7l3q3',
            type: 'drag',
            question: '按正确顺序排列日记的组成部分',
            answer: '日期,星期,天气,正文',
            hint: '日记的格式顺序',
            explanation: '日记格式顺序：日期→星期→天气→正文。'
          }
        ,
          {
            id: 'c2u7l3q4',
            type: 'choice',
            question: '写留言条要先写什么？',
            options: ["正文","称呼","日期"],
            answer: '称呼',
            hint: '留言条是给谁看的',
            explanation: '写留言条要先写称呼，告诉对方这是给谁的留言。'
          },
          {
            id: 'c2u7l3q5',
            type: 'fill',
            question: '留言条最后要写___和日期',
            answer: '署名',
            hint: '让别人知道是谁写的',
            explanation: '留言条最后要署名和写日期，让别人知道是谁在什么时候留的言。'
          },
          {
            id: 'c2u7l3q6',
            type: 'choice',
            question: '【期末真题】留言条的格式包括以下哪项？',
            options: ["只要正文","称呼、正文、署名、日期","只要署名"],
            answer: '称呼、正文、署名、日期',
            hint: '留言条有哪些部分',
            explanation: '留言条包括称呼、正文、署名和日期四个部分。这是期末常考题！'
          },
          {
            id: 'c2u7l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：续写故事要注意什么？',
            answer: '合理想象',
            hint: '[写作技巧]（语文二年级-第7单元）',
            explanation: '续写故事要注意合理想象，让故事情节自然发展。'
          }
        ]
      },
      {
        id: 'c2u7l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u7l4q1',
            type: 'choice',
            question: '本单元关于看图写话，第1课的重点知识是什么？',
            options: ['看图写话', '生字学习', '古诗背诵'],
            answer: '看图写话',
            hint: '想想看图写话的方法',
            explanation: '本单元第1课重点学习看图写话，掌握观察图片和写话的基本方法。'
          },
          {
            id: 'c2u7l4q2',
            type: 'fill',
            question: '《续写故事》中，续写要注意什么？___',
            answer: '合理想象',
            hint: '回顾本单元内容',
            explanation: '续写故事要注意合理想象，让故事情节自然发展。'
          },
          {
            id: 'c2u7l4q3',
            type: 'choice',
            question: '本单元关于日记格式，第3课的重点知识是什么？',
            options: ['日记格式', '生字学习', '古诗背诵'],
            answer: '日记格式',
            hint: '想想日记的格式要求',
            explanation: '本单元第3课重点学习日记格式，掌握日记的正确写法。'
          },
          {
            id: 'c2u7l4q4',
            type: 'choice',
            question: '本单元学习的新技能是什么？',
            options: ['识字方法', '写话入门', '古诗背诵', '词语积累'],
            answer: '写话入门',
            hint: '回顾本单元主题',
            explanation: '本单元学习的新技能是"写话入门"，开始学习写话。'
          },
          {
            id: 'c2u7l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['日记格式', '寓言故事的道理', '近义词和反义词', '祖国山河之美'],
            answer: '日记格式',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了看图写话、续写故事和日记格式等写话入门知识。'
          },
          {
            id: 'c2u7l4q6',
            type: 'choice',
            question: '【期末真题】本单元"写话入门"的学习重点是以下哪个？',
            options: ['开始学习写话', '数学计算', '英语单词'],
            answer: '开始学习写话',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是开始学习写话，这是期末常考的内容！'
          },
          {
            id: 'c2u7l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："雪"字的偏旁是什么？',
            answer: '雨',
            hint: '[偏旁识记]（语文一年级-第3单元）',
            explanation: '"雪"字的偏旁是雨字头，表示与天气降水有关。'
          }
        ]
      },
      {
        id: 'c2u7l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"写话入门"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"写话入门"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u7l5q1',
            type: 'choice',
            question: '本单元"写话入门"主要学习了什么？',
            options: ['开始学习写话', '数学计算', '英语单词'],
            answer: '开始学习写话',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u7l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u7l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u7l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u7l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['今天天气真好啊', '小蝌蚪长成了青蛙', '杨树高榕树壮', '夜宿山寺危楼高'],
            answer: '今天天气真好啊',
            hint: '回顾本单元内容，找出与本单元写话知识相关的句子',
            explanation: '"今天天气真好啊"使用了本单元写话入门的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u7l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['开始学习写话', '其他单元内容', '课外知识'],
            answer: '开始学习写话',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是开始学习写话，这是期末常考的内容！'
          },
          {
            id: 'c2u7l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：科普课文有什么特点？',
            answer: '介绍科学知识',
            hint: '[科普特点]（语文二年级-第1单元）',
            explanation: '科普课文的特点是用通俗易懂的语言介绍科学知识。'
          }
        ]
      }
    ]
  },
  {
    id: 'c2u8',
    title: '古诗积累',
    subtitle: '感受古诗之美',
    order: 8,
    lessons: [
      {
        id: 'c2u8l1',
        title: '夜宿山寺',
        order: 1,
        content: [
                    { type: 'example', content: '宿(sù)\n偏旁：宀\n本义：住宿\n引申义：住宿、宿舍\n组词：住宿、宿舍\n儿歌：宀佰为宿住一晚', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '寺(sì)\n偏旁：寸\n本义：寺庙\n引申义：寺庙、寺院\n组词：寺庙、寺院\n儿歌：土寸为寺和尚住', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '夜宿\n释义：夜晚住宿\n网络用法：夜宿山寺好高啊！\n典故：李白夜宿山寺写诗\n趣味表达：夜宿是古代的住酒店', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '夸张\n释义：言过其实\n网络用法：这首诗用了夸张手法！\n典故：夸张是古诗常用的修辞\n趣味表达：夸张是语言的放大镜', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '夜宿山寺\n【唐】李白\n\n危楼高百尺，\n手可摘星辰。\n不敢高声语，\n恐惊天上人。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '山上有一座高楼，有一百尺那么高！站在楼上伸手就能摘到星星。不敢大声说话，怕惊动了天上的仙人', animationType: 'reveal' },
          { type: 'example', content: '"危楼高百尺"——危=高，高楼有一百尺那么高（夸张）\n"手可摘星辰"——伸手就能摘到星星（夸张）\n"不敢高声语"——不敢大声说话\n"恐惊天上人"——怕惊动天上的仙人（夸张）\n全诗都在用夸张手法写楼之高！', label: '夸张手法分析', animationType: 'bounce' },
          { type: 'tip', content: '李白的夸张手法：一百尺不是真的有一百尺，天上也没有仙人。但这样写让我们感受到楼非常高！这就是夸张的魅力！', label: '夸张赏析', animationType: 'pulse' },
          { type: 'animation', content: '山寺高耸入云动画，站在楼上伸手摘星星', animationType: 'bounce' },
        ],
        teachingMethod: '夸张赏析法',
        learningObjective: '我能背诵古诗《夜宿山寺》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《夜宿山寺》全诗 ②能说出诗句的意思和诗人表达的情感',
        iDo: '家长朗读古诗，讲解李白用夸张手法描写山寺之高。',
        weDo: '亲子一起讨论：诗中哪些是夸张的描写？为什么要夸张？',
        youDo: '孩子独立背诵古诗，找出诗中的夸张句。',
        parentTips: '【家长预习】宿(sù)偏旁：宀本义：住宿引申义：住宿、宿舍组词：住宿…\n共学四步：\n①对话出题：问孩子"危楼高百尺"中"危"是什么意思？"\n②孩子应答："危"在古诗中是"高"的意思，"危楼"就是高楼。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测："危楼高百尺"中"危"是什么意思？、不敢高声语，恐惊（    ）上人、这首诗用了什么修辞手法？',
        funElement: '小游戏：夸张大师！"我饿得能吃下一头牛！""我困得能睡一百年！"——你也来试试夸张句！🏔️',
        gsapAnimations: ['GSAP: 山寺高耸入云动画'],
        images: ['IMG: 夜宿山寺意境图'],
        practiceQuestions: [
          {
            id: 'c2u8l1q1',
            type: 'choice',
            question: '"危楼高百尺"中"危"是什么意思？',
            options: ['危险', '高', '害怕'],
            answer: '高',
            hint: '在古诗中"危"有不同的意思',
            explanation: '"危"在古诗中是"高"的意思，"危楼"就是高楼。'
          },
          {
            id: 'c2u8l1q2',
            type: 'fill',
            question: '不敢高声语，恐惊___上人',
            answer: '天',
            hint: '怕惊动天上谁',
            explanation: '原诗"不敢高声语，恐惊天上人"，怕说话声太大惊动天上的仙人。'
          },
          {
            id: 'c2u8l1q3',
            type: 'choice',
            question: '这首诗用了什么修辞手法？',
            options: ['拟人', '夸张', '排比'],
            answer: '夸张',
            hint: '百尺高楼是真的有一百尺吗',
            explanation: '诗中"危楼高百尺""恐惊天上人"都是夸张手法，突出山寺之高。'
          }
        ,
          {
            id: 'c2u8l1q4',
            type: 'choice',
            question: '诗人为什么说"手可摘星辰"？',
            options: ["楼真的能摘到星星","用夸张手法突出楼非常高","星星离楼很近"],
            answer: '用夸张手法突出楼非常高',
            hint: '想想这句诗用了什么修辞手法',
            explanation: '诗人用夸张的手法，说站在楼上伸手就能摘到星星，是为了突出楼非常高。'
          },
          {
            id: 'c2u8l1q5',
            type: 'fill',
            question: '"夜宿山寺"的作者是___',
            answer: '李白',
            hint: '唐代大诗人',
            explanation: '《夜宿山寺》的作者是唐代大诗人李白。'
          },
          {
            id: 'c2u8l1q6',
            type: 'choice',
            question: '【期末真题】"夜宿山寺"用了什么修辞手法？',
            options: ["拟人","夸张","排比"],
            answer: '夸张',
            hint: '"高百尺"是真的吗',
            explanation: '"高百尺"是夸张的写法，形容楼非常高。这是期末常考题！'
          },
          {
            id: 'c2u8l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：雨是怎么形成的？',
            answer: '水蒸气遇冷凝结',
            hint: '[自然现象]（语文二年级-第1单元）',
            explanation: '水蒸气升到高空遇冷凝结成小水滴，聚多了就变成雨落下来。'
          }]
      },
      {
        id: 'c2u8l2',
        title: '敕勒歌',
        order: 2,
        content: [
                    { type: 'example', content: '敕(chì)\n偏旁：攵\n本义：皇帝的命令\n引申义：敕勒、敕令\n组词：敕勒、敕令\n儿歌：束攵为敕皇命令', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '勒(lè)\n偏旁：革\n本义：带嚼子的马笼头\n引申义：勒住、勒索\n组词：敕勒、勒住\n儿歌：革力为勒拉住马', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '敕勒\n释义：古代北方民族名\n网络用法：敕勒川真辽阔！\n典故：敕勒族生活在北方草原\n趣味表达：敕勒是草原上的古老民族', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '穹庐\n释义：蒙古包\n网络用法：穹庐像圆圆的帽子！\n典故：游牧民族住穹庐\n趣味表达：穹庐是草原上的移动城堡', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '敕勒歌\n北朝民歌\n\n敕勒川，阴山下，\n天似穹庐，笼盖四野。\n天苍苍，野茫茫，\n风吹草低见牛羊。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '敕勒川在阴山脚下，天空像圆圆的帐篷，笼罩着大地。蓝蓝的天，辽阔的草原，风吹过草丛，露出里面的牛羊', animationType: 'reveal' },
          { type: 'example', content: '"天似穹庐"——天空像圆圆的蒙古包\n"天苍苍"——天空蓝蓝的\n"野茫茫"——草原辽阔无边\n"风吹草低见牛羊"——风吹过草丛，露出藏在里面的牛和羊\n这是北方草原的壮美画面！', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '感受古诗意境：闭上眼睛想象——蓝天、绿草、牛羊、蒙古包……这就是北方草原的壮美！读这首诗要读出辽阔的感觉！', label: '意境感受', animationType: 'pulse' },
          { type: 'animation', content: '草原全景展开动画，蓝天绿草、牛羊成群', animationType: 'bounce' },
        ],
        teachingMethod: '意境感受法',
        learningObjective: '我能背诵古诗《敕勒歌》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《敕勒歌》全诗 ②能说出诗句的意思和诗人表达的情感',
        iDo: '家长朗读古诗，用图片或视频展示草原的辽阔壮美。',
        weDo: '亲子一起讨论：诗中描绘了怎样的草原景象？你最喜欢哪一句？',
        youDo: '孩子独立背诵古诗，用自己的话描述诗中的画面。',
        parentTips: '【家长预习】敕(chì)偏旁：攵本义：皇帝的命令引申义：敕勒、敕令组…\n共学四步：\n①对话出题：问孩子"天苍苍，野茫茫"描写的是什么？"\n②孩子应答："天苍苍"描写蓝蓝的天空，"野茫茫"描写辽阔的草原。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测："天苍苍，野茫茫"描写的是什么？、风吹草低见（    ）羊、敕勒歌描写的是哪里的风光？',
        funElement: '小游戏：草原旅行家！闭上眼睛想象：蓝天、绿草、牛羊、蒙古包……你看到了什么？🐎',
        gsapAnimations: ['GSAP: 草原全景展开动画'],
        images: ['IMG: 敕勒川草原风光图'],
        practiceQuestions: [
          {
            id: 'c2u8l2q1',
            type: 'choice',
            question: '"天苍苍，野茫茫"描写的是什么？',
            options: ['天空和大海', '天空和草原', '天空和森林'],
            answer: '天空和草原',
            hint: '敕勒川在哪里',
            explanation: '"天苍苍"描写蓝蓝的天空，"野茫茫"描写辽阔的草原。'
          },
          {
            id: 'c2u8l2q2',
            type: 'fill',
            question: '风吹草低见___羊',
            answer: '牛',
            hint: '草原上除了羊还有什么',
            explanation: '原诗"风吹草低见牛羊"，风吹过草丛露出里面的牛和羊。'
          },
          {
            id: 'c2u8l2q3',
            type: 'choice',
            question: '敕勒歌描写的是哪里的风光？',
            options: ['南方水乡', '北方草原', '西部沙漠'],
            answer: '北方草原',
            hint: '敕勒川在北方',
            explanation: '敕勒歌描写的是北方草原的壮美风光。'
          }
        ,
          {
            id: 'c2u8l2q4',
            type: 'choice',
            question: '"风吹草低见牛羊"从侧面说明了草有什么特点？',
            options: ["草很矮","草很高很密","草都枯黄了"],
            answer: '草很高很密',
            hint: '为什么要风吹草低才能看到牛羊',
            explanation: '"风吹草低见牛羊"说明草很高很密，牛羊藏在草丛里看不见，只有风把草吹低时才能看到它们，侧面写出了草原的茂盛。'
          },
          {
            id: 'c2u8l2q5',
            type: 'fill',
            question: '"天苍苍，野茫茫，风吹草低见___"',
            answer: '牛羊',
            hint: '草丛里藏着什么',
            explanation: '"风吹草低见牛羊"，风吹过草原，露出了一群群牛羊。'
          },
          {
            id: 'c2u8l2q6',
            type: 'choice',
            question: '【期末真题】"敕勒歌"中"天似穹庐"的"穹庐"指的是什么？',
            options: ["宫殿","蒙古包","城墙"],
            answer: '蒙古包',
            hint: '穹庐是什么形状',
            explanation: '"穹庐"指的是蒙古包，天像蒙古包一样笼罩着大地。这是期末常考题！'
          },
          {
            id: 'c2u8l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："敕勒歌"描写的是什么地方的景色？',
            answer: '草原',
            hint: '[古诗内容]（语文二年级-第8单元）',
            explanation: '"敕勒歌"描写的是草原的辽阔景象。'
          }
        ]
      },
      {
        id: 'c2u8l3',
        title: '梅花',
        order: 3,
        content: [
                    { type: 'example', content: '梅(méi)\n偏旁：木\n本义：梅花\n引申义：梅花、梅子\n组词：梅花、梅子\n儿歌：木每为梅冬天开', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '凌(líng)\n偏旁：冫\n本义：冰\n引申义：凌寒、凌云\n组词：凌寒、凌云\n儿歌：两点水夌为凌冰', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '梅花\n释义：冬天开放的花\n网络用法：梅花不怕冷真勇敢！\n典故：王安石写梅花诗\n趣味表达：梅花是冬天的勇士', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '凌寒\n释义：冒着寒冷\n网络用法：凌寒独自开真坚强！\n典故：梅花凌寒开放象征坚韧\n趣味表达：凌寒是勇敢者的通行证', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '梅花\n【宋】王安石\n\n墙角数枝梅，\n凌寒独自开。\n遥知不是雪，\n为有暗香来。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '墙角有几枝梅花，冒着严寒独自开放。远远看去像雪一样白，但知道那不是雪，因为有淡淡的清香飘来', animationType: 'reveal' },
          { type: 'example', content: '"凌寒独自开"——冒着寒冷独自开放，别的花都不敢开\n"遥知不是雪"——远远看去像雪一样白\n"为有暗香来"——但有淡淡的香味，所以知道是梅花\n梅花的特点：冬天开放、白色如雪、有清香', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '梅花象征坚强不屈的品格！在寒冷的冬天，别的花都凋谢了，只有梅花勇敢地开放。我们要学习梅花不怕困难的精神！', label: '梅花品格', animationType: 'pulse' },
          { type: 'animation', content: '梅花在雪中绽放动画，白雪中梅花傲然开放', animationType: 'bounce' },
        ],
        teachingMethod: '品格感悟法',
        learningObjective: '我能背诵古诗《梅花》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《梅花》全诗 ②能说出诗句的意思和诗人表达的情感',
        iDo: '家长朗读古诗，讲解梅花在冬天开放的特点和它象征的品格。',
        weDo: '亲子一起讨论：梅花为什么在冬天开？它代表了什么精神？',
        youDo: '孩子独立背诵古诗，说说梅花最让你佩服的地方。',
        parentTips: '【家长预习】梅(méi)偏旁：木本义：梅花引申义：梅花、梅子组词：梅…\n共学四步：\n①对话出题：问孩子"凌寒独自开"中"凌寒"是什么意思？"\n②孩子应答："凌寒"是冒着寒冷的意思，梅花在寒冷的冬天独自开放。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测："凌寒独自开"中"凌寒"是什么意思？、墙角数枝梅，凌寒（    ）自开、梅花象征什么品格？',
        funElement: '小游戏：花朵品格榜！梅花最勇敢（冬天开），荷花最干净（出淤泥不染），你最喜欢哪种花？🌸',
        gsapAnimations: ['GSAP: 梅花在雪中绽放动画'],
        images: ['IMG: 梅花傲雪图'],
        practiceQuestions: [
          {
            id: 'c2u8l3q1',
            type: 'choice',
            question: '"凌寒独自开"中"凌寒"是什么意思？',
            options: ['害怕寒冷', '冒着寒冷', '没有寒冷'],
            answer: '冒着寒冷',
            hint: '梅花在什么天气开放',
            explanation: '"凌寒"是冒着寒冷的意思，梅花在寒冷的冬天独自开放。'
          },
          {
            id: 'c2u8l3q2',
            type: 'fill',
            question: '墙角数枝梅，凌寒___自开',
            answer: '独',
            hint: '只有梅花在冬天开',
            explanation: '原诗"墙角数枝梅，凌寒独自开"，只有梅花在冬天独自开放。'
          },
          {
            id: 'c2u8l3q3',
            type: 'choice',
            question: '梅花象征什么品格？',
            options: ['温柔善良', '坚强不屈', '活泼开朗'],
            answer: '坚强不屈',
            hint: '在寒冷中开放代表什么',
            explanation: '梅花在寒冷的冬天开放，象征坚强不屈、不畏困难的品格。'
          }
        ,
          {
            id: 'c2u8l3q4',
            type: 'choice',
            question: '"梅花"在什么季节开放？',
            options: ["春天","夏天","冬天"],
            answer: '冬天',
            hint: '什么花在寒冷时开',
            explanation: '梅花在冬天开放，不怕寒冷，所以叫"凌寒独自开"。'
          },
          {
            id: 'c2u8l3q5',
            type: 'fill',
            question: '"凌寒独自开"中"凌寒"的意思是___',
            answer: '冒着寒冷',
            hint: '凌是什么意思',
            explanation: '"凌寒"是冒着寒冷的意思，梅花不怕冷在冬天开放。'
          },
          {
            id: 'c2u8l3q6',
            type: 'choice',
            question: '【期末真题】"墙角数枝梅"中"数枝"是什么意思？',
            options: ["很多枝","几枝","一枝"],
            answer: '几枝',
            hint: '数在这里是什么意思',
            explanation: '"数枝"是几枝的意思，墙角有几枝梅花在开放。这是期末常考题！'
          },
          {
            id: 'c2u8l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：本学期学了哪些寓言故事？写出一篇',
            answer: '坐井观天',
            hint: '[寓言故事]（语文二年级-第6单元）',
            explanation: '本学期学了"坐井观天""寒号鸟"等寓言故事。'
          }
        ]
      },
      {
        id: 'c2u8l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c2u8l4q1',
            type: 'choice',
            question: '本单元关于古诗积累，第1课《夜宿山寺》的重点知识是什么？',
            options: ['古诗积累', '生字学习', '古诗背诵'],
            answer: '古诗积累',
            hint: '想想夜宿山寺这首古诗',
            explanation: '本单元第1课《夜宿山寺》重点学习古诗积累，感受古诗的意境之美。'
          },
          {
            id: 'c2u8l4q2',
            type: 'fill',
            question: '《敕勒歌》中，"天苍苍，野茫茫"描写的是哪里？___',
            answer: '草原',
            hint: '回顾本单元内容',
            explanation: '《敕勒歌》描写的是草原的辽阔景象。'
          },
          {
            id: 'c2u8l4q3',
            type: 'choice',
            question: '本单元关于古诗赏析，第3课《梅花》的重点知识是什么？',
            options: ['古诗赏析', '生字学习', '古诗背诵'],
            answer: '古诗赏析',
            hint: '想想梅花这首古诗',
            explanation: '本单元第3课《梅花》重点学习古诗赏析，理解古诗的意思和意境。'
          },
          {
            id: 'c2u8l4q4',
            type: 'choice',
            question: '本单元的学习主题是什么？',
            options: ['识字方法', '写话练习', '古诗积累', '词语积累'],
            answer: '古诗积累',
            hint: '回顾本单元主题',
            explanation: '本单元学习主题是"古诗积累"，感受古诗之美。'
          },
          {
            id: 'c2u8l4q5',
            type: 'choice',
            question: '本单元的学习重点是什么？',
            options: ['古诗背诵', '日记格式', '寓言故事的道理', '近义词和反义词'],
            answer: '古诗背诵',
            hint: '回顾本单元内容',
            explanation: '本单元重点学习了古诗的背诵和欣赏，感受古诗之美。'
          },
          {
            id: 'c2u8l4q6',
            type: 'choice',
            question: '【期末真题】本单元"古诗积累"的学习重点是以下哪个？',
            options: ['感受古诗之美', '数学计算', '英语单词'],
            answer: '感受古诗之美',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是感受古诗之美，这是期末常考的内容！'
          },
          {
            id: 'c2u8l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：写出"高"的反义词',
            answer: '低',
            hint: '[反义词]（语文一年级-第7单元）',
            explanation: '"高"和"低"是一对反义词。'
          }
        ]
      },
      {
        id: 'c2u8l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"古诗积累"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"古诗积累"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c2u8l5q1',
            type: 'choice',
            question: '本单元"古诗积累"主要学习了什么？',
            options: ['感受古诗之美', '数学计算', '英语单词'],
            answer: '感受古诗之美',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u8l5q2',
            type: 'choice',
            question: '本单元一共有几课？',
            options: ['3课', '4课', '5课', '6课'],
            answer: '5课',
            hint: '回顾本单元内容，数一数共有几课',
            explanation: '每个单元都有5课：核心知识讲解、知识深化、应用拓展、形成性评价、综合应用。'
          },
          {
            id: 'c2u8l5q3',
            type: 'drag',
            question: '把本单元的知识点按学习顺序排列',
            answer: '第一课,第二课,第三课,第四课,第五课',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u8l5q4',
            type: 'choice',
            question: '学完本单元后，你应该能做到以下哪项？',
            options: ['只记住生字', '理解课文并学会应用', '什么都不用做'],
            answer: '理解课文并学会应用',
            hint: '回顾本单元内容',
            explanation: '回顾本单元内容，巩固所学知识。'
          },
          {
            id: 'c2u8l5q5',
            type: 'choice',
            question: '下面哪个句子正确使用了本单元的知识点？',
            options: ['夜宿山寺危楼高', '小蝌蚪长成了青蛙', '杨树高榕树壮', '寒号鸟总说明天再垒窝'],
            answer: '夜宿山寺危楼高',
            hint: '回顾本单元内容，找出与本单元古诗相关的句子',
            explanation: '"夜宿山寺危楼高"使用了本单元古诗的知识点，其他句子来自其他单元。'
          },
          {
            id: 'c2u8l5q6',
            type: 'choice',
            question: '【期末真题】本单元中，以下哪个是学习重点？',
            options: ['感受古诗之美', '其他单元内容', '课外知识'],
            answer: '感受古诗之美',
            hint: '这是期末常考题',
            explanation: '本单元的学习重点是感受古诗之美，这是期末常考的内容！'
          },
          {
            id: 'c2u8l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：本学期你最喜欢哪篇课文？写出它的名称',
            answer: '坐井观天',
            hint: '[课文回顾]（语文二年级-第8单元）',
            explanation: '回顾本学期学过的课文，选择你最喜欢的一篇。'
          }
        ]
      }
    ]
  }
]
