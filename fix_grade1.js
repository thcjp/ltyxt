// 修复 grade1.ts 中 c1u4 的跨年级越级问题
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'star-land', 'src', 'data', 'chinese', 'grade1.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// ========== 替换 c1u4l1 的 content 数组 ==========
const oldL1Content = `        content: [
          { type: 'example', content: '池(chí)\\n偏旁：氵\\n本义：水塘\\n引申义：水池、池塘、城池\\n组词：池塘、水池\\n儿歌：水也是池水满塘', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '蛙(wā)\\n偏旁：虫\\n本义：两栖动物\\n引申义：青蛙、蛙类\\n组词：青蛙、蛙声\\n儿歌：虫圭合蛙叫呱呱', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '池塘\\n释义：蓄水的小湖\\n网络用法：池塘里的水真清啊！\\n典故：古人挖塘蓄水养鱼\\n趣味表达：池塘是小动物的游乐场', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '尾巴\\n释义：动物身体末端的部位\\n网络用法：小蝌蚪的尾巴不见了！\\n典故：有些动物用尾巴保持平衡\\n趣味表达：尾巴是动物的第五条腿', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '池塘里有一群小蝌蚪，大大的脑袋，黑灰色的身子，甩着长长的尾巴，快活地游来游去', animationType: 'reveal' },
          { type: 'dialogue', content: '小蝌蚪问鲤鱼妈妈："鲤鱼阿姨，我们的妈妈在哪里？"\\n鲤鱼妈妈说："你们的妈妈四条腿，宽嘴巴。你们到那边去找吧！"', label: '小蝌蚪与鲤鱼', animationType: 'reveal' },
          { type: 'dialogue', content: '小蝌蚪看见乌龟，追上去喊："妈妈，妈妈！"\\n乌龟说："我不是你们的妈妈，你们的妈妈头顶有大眼睛，披着绿衣裳。"', label: '小蝌蚪与乌龟', animationType: 'reveal' },
          { type: 'example', content: '小蝌蚪变青蛙的过程：\\n1. 大脑袋长尾巴的小蝌蚪\\n2. 长出两条后腿\\n3. 长出两条前腿\\n4. 尾巴变短变没\\n5. 变成小青蛙！', label: '蝌蚪变青蛙', animationType: 'bounce' },
          { type: 'tip', content: '读故事要按顺序：小蝌蚪先遇到谁？后遇到谁？最后找到妈妈了吗？按顺序读，故事就清楚了！', label: '阅读技巧', animationType: 'pulse' },
          { type: 'example', content: '课外阅读推荐：《小蝌蚪找妈妈》是科学童话，还想了解更多动物成长故事？\\n1.《好饿的毛毛虫》——毛毛虫变蝴蝶\\n2.《小蝌蚪的诺言》——蝌蚪和毛虫的约定\\n3.《池塘里的故事》——水生动物大揭秘', label: '课外阅读', animationType: 'bounce' },
          { type: 'tip', content: '思维训练：小蝌蚪为什么每次都认错妈妈？因为它们只注意了一个特征（四条腿、宽嘴巴），没有把所有特征合在一起想。读故事要学会"综合思考"——把所有线索放在一起才能找到正确答案！', label: '思维引导', animationType: 'pulse' },
          { type: 'animation', content: '小蝌蚪游动变身青蛙动画，展示蝌蚪变青蛙的完整过程', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '小蝌蚪找妈妈',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '小蝌蚪', emoji: '🖤', ttsText: '小蝌蚪，黑黑的，大大的脑袋，长长的尾巴' },
                  { id: 's1', text: '长后腿', emoji: '🐸', ttsText: '过了几天，长出了两条后腿' },
                  { id: 's2', text: '长前腿', emoji: '🐸', ttsText: '又过了几天，长出了两条前腿' },
                  { id: 's3', text: '尾巴消失', emoji: '🐸', ttsText: '尾巴变短了，最后不见了' },
                  { id: 's4', text: '青蛙', emoji: '🐸', ttsText: '变成了一只小青蛙！' },
                ],
              },
              ttsNarration: '小蝌蚪先长后腿，再长前腿，尾巴慢慢消失，变成了小青蛙！',
            },
          },
        ],
        teachingMethod: '故事情境识字法',
        iDo: '家长声情并茂地讲述小蝌蚪找妈妈的故事，在关键词处停顿让孩子跟读。',
        weDo: '亲子一起分角色朗读，家长读旁白，孩子读小蝌蚪的对话。',
        youDo: '孩子独立复述故事，并认读课文中的生字。',
        parentTips: '读故事时可以配合动作，让识字过程更生动有趣。',
        funElement: '笑话：小蝌蚪问鲤鱼"你是我妈妈吗？"鲤鱼说"我可比你妈妈瘦多了！"🐸',
        gsapAnimations: ['GSAP: 小蝌蚪游动变身青蛙动画'],
        images: ['IMG: 小蝌蚪变青蛙过程图'],
        practiceQuestions: [
          {
            id: 'c1u4l1q1',
            type: 'choice',
            question: '小蝌蚪的妈妈是谁？',
            options: ['鲤鱼', '青蛙', '乌龟'],
            answer: '青蛙',
            hint: '想想小蝌蚪长大后变成什么',
            explanation: '小蝌蚪长大后变成青蛙，所以它的妈妈是青蛙。'
          },
          {
            id: 'c1u4l1q2',
            type: 'fill',
            question: '小蝌蚪先长出后腿，再长出___腿',
            answer: '前',
            hint: '想想青蛙的腿哪个先长出来',
            explanation: '小蝌蚪的发育过程是先长后腿，再长前腿，最后尾巴消失变成青蛙。'
          },
          {
            id: 'c1u4l1q3',
            type: 'drag',
            question: '按顺序排列小蝌蚪变青蛙的过程',
            answer: '蝌蚪,长后腿,长前腿,尾巴变短,变成青蛙',
            hint: '按照课文描述的顺序',
            explanation: '小蝌蚪变青蛙的顺序：蝌蚪→长后腿→长前腿→尾巴变短→变成青蛙。'
          },
          {
            id: 'c1u4l1q4',
            type: 'choice',
            question: '小蝌蚪为什么每次都认错妈妈？',
            options: ["它太笨了","它只注意了一个特征","它不想找妈妈"],
            answer: '它只注意了一个特征',
            hint: '小蝌蚪是怎么认妈妈的',
            explanation: '小蝌蚪只注意了一个特征（四条腿、宽嘴巴），没有把所有特征合在一起想。'
          },
          {
            id: 'c1u4l1q5',
            type: 'fill',
            question: '小蝌蚪变青蛙，先长___腿，再长前腿',
            answer: '后',
            hint: '哪条腿先长出来',
            explanation: '小蝌蚪先长后腿，再长前腿，最后尾巴消失变成青蛙。'
          },
          {
            id: 'c1u4l1q6',
            type: 'choice',
            question: '【期末真题】小蝌蚪的妈妈有什么特征？',
            options: ["四条腿、宽嘴巴","两条腿、尖嘴巴","没有腿"],
            answer: '四条腿、宽嘴巴',
            hint: '青蛙妈妈长什么样',
            explanation: '青蛙妈妈有四条腿、宽嘴巴、头顶大眼睛、披着绿衣裳。这是期末常考题！'
          }
        ]`;

const newL1Content = `        content: [
          { type: 'example', content: '日(rì)\\n偏旁：日\\n本义：太阳\\n引申义：白天、日子\\n组词：日出、日子\\n儿歌：一轮红日挂天上', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '月(yuè)\\n偏旁：月\\n本义：月亮\\n引申义：月份\\n组词：月亮、月份\\n儿歌：弯弯月亮像小船', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '日出\\n释义：太阳升起来\\n网络用法：日出真美啊！\\n典故：古人日出而作日落而息\\n趣味表达：日出是大自然的闹钟', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '山水\\n释义：山和水的风景\\n网络用法：这里的山水真漂亮！\\n典故：山水画是中国传统绘画\\n趣味表达：山水是大自然的画', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '日、月、水、火、山、石、田、禾，这些字都是古人照着事物的样子画出来的，叫做象形字', animationType: 'reveal' },
          { type: 'example', content: '象形字小知识：\\n日——像圆圆的太阳 ☀️\\n月——像弯弯的月亮 🌙\\n水——像流动的河水 💧\\n火——像跳动的火焰 🔥\\n山——像高高的山峰 ⛰️\\n石——像一块大石头 🪨\\n田——像一块块农田 🌾\\n禾——像一棵小禾苗 🌱', label: '象形字', animationType: 'bounce' },
          { type: 'dialogue', content: '日说："我最亮，白天挂天上！"\\n月说："我最美，晚上挂天上！"\\n水说："我最柔，到处都能流！"\\n火说："我最热，冬天暖洋洋！"', label: '自然现象对话', animationType: 'reveal' },
          { type: 'tip', content: '识字小窍门：象形字就像画画一样，看到字形就能想到它画的是什么。记住事物的样子，就能记住这些字！', label: '识字技巧', animationType: 'pulse' },
          { type: 'animation', content: '象形字演变动画，从图画变成汉字', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '象形字的由来',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '日', emoji: '☀️', ttsText: '日，像圆圆的太阳' },
                  { id: 's1', text: '月', emoji: '🌙', ttsText: '月，像弯弯的月亮' },
                  { id: 's2', text: '水', emoji: '💧', ttsText: '水，像流动的河水' },
                  { id: 's3', text: '火', emoji: '🔥', ttsText: '火，像跳动的火焰' },
                  { id: 's4', text: '山', emoji: '⛰️', ttsText: '山，像高高的山峰' },
                ],
              },
              ttsNarration: '古人照着事物的样子画出来的字，就是象形字！',
            },
          },
        ],
        teachingMethod: '象形识字法',
        iDo: '家长展示象形字卡片，让孩子观察字形和图画的对应关系。',
        weDo: '亲子一起玩"看图猜字"游戏，家长画图画，孩子猜对应的汉字。',
        youDo: '孩子独立认读八个象形字，并尝试画出对应的图画。',
        parentTips: '可以和孩子一起观察生活中的自然现象，加深对字义的理解。',
        funElement: '小游戏：象形字变变变！看看图画变成汉字，猜猜是哪个字？🎨',
        gsapAnimations: ['GSAP: 象形字演变动画'],
        images: ['IMG: 象形字对照图'],
        practiceQuestions: [
          {
            id: 'c1u4l1q1',
            type: 'choice',
            question: '"日"字像什么？',
            options: ['月亮', '太阳', '星星'],
            answer: '太阳',
            hint: '想想"日"字的样子',
            explanation: '"日"字是象形字，像圆圆的太阳。'
          },
          {
            id: 'c1u4l1q2',
            type: 'fill',
            question: '山上有石头，田里种___',
            answer: '禾',
            hint: '田里种的是什么',
            explanation: '田里种的是禾苗，"禾"指庄稼的幼苗。'
          },
          {
            id: 'c1u4l1q3',
            type: 'drag',
            question: '把象形字和对应的事物连起来',
            answer: '日-太阳,月-月亮,水-河流,火-火焰',
            hint: '每个字像什么',
            explanation: '日像太阳、月像月亮、水像河流、火像火焰，它们都是象形字。'
          },
          {
            id: 'c1u4l1q4',
            type: 'choice',
            question: '下面哪个字是象形字？',
            options: ["他", "山", "的"],
            answer: '山',
            hint: '哪个字像事物的样子',
            explanation: '"山"字像高高的山峰，是象形字。"他"和"的"不是象形字。'
          },
          {
            id: 'c1u4l1q5',
            type: 'fill',
            question: '"月"可以组词为___',
            answer: '月亮',
            hint: '晚上天上有什么',
            explanation: '"月"可以组词为月亮、月份等。'
          },
          {
            id: 'c1u4l1q6',
            type: 'choice',
            question: '【期末真题】"禾"字的本义是什么？',
            options: ["树木", "禾苗", "花朵"],
            answer: '禾苗',
            hint: '田里种的庄稼',
            explanation: '"禾"字的本义是禾苗，指庄稼的幼苗。这是期末常考题！'
          }
        ]`;

if (!content.includes(oldL1Content)) {
  console.error('ERROR: Could not find old c1u4l1 content');
  console.log('Looking for first 100 chars:', oldL1Content.substring(0, 100));
  process.exit(1);
}
content = content.replace(oldL1Content, newL1Content);
console.log('c1u4l1 content replaced successfully');

// ========== 替换 c1u4l2 的 content 数组 ==========
const oldL2Content = `        content: [
          { type: 'example', content: '植(zhí)\\n偏旁：木\\n本义：栽种\\n引申义：种植、植物\\n组词：植物、种植\\n儿歌：木直为植栽种忙', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '种(zhǒng)\\n偏旁：禾\\n本义：种子\\n引申义：种类、种族\\n组词：种子、种类\\n儿歌：禾中为种播希望', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '种子\\n释义：植物的繁殖体\\n网络用法：种子宝宝去旅行啦！\\n典故：古人选种育种传千年\\n趣味表达：种子是植物的行李箱', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '传播\\n释义：广泛散布\\n网络用法：蒲公英传播种子真厉害！\\n典故：古人学会了播种传播技术\\n趣味表达：传播是种子的旅行方式', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '植物妈妈们可聪明了！她们各有各的办法，把种子宝宝送到远方去安家', animationType: 'reveal' },
          { type: 'example', content: '蒲公英妈妈准备了降落伞——风一吹，种子就飘走了\\n苍耳妈妈给孩子穿上铠甲——粘在动物身上，免费旅行\\n豌豆妈妈让豆荚晒太阳——啪！种子弹射出去', label: '三种传播方式', animationType: 'bounce' },
          { type: 'dialogue', content: '蒲公英种子说："我坐风车走！"\\n苍耳种子说："我坐动物出租车走！"\\n豌豆种子说："我自己弹射走！"\\n植物妈妈说："孩子们，勇敢地去远方安家吧！"', label: '种子对话', animationType: 'reveal' },
          { type: 'tip', content: '植物传播种子的方式还有很多：椰子靠海水漂流、凤仙花靠弹射、樱桃靠小鸟吃果后排便传播……大自然真奇妙！', label: '更多传播方式', animationType: 'pulse' },
          { type: 'animation', content: '种子飘散传播动画，蒲公英随风飘、苍耳粘动物、豌豆弹射', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '植物妈妈有办法',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '蒲公英', emoji: '🌾', ttsText: '蒲公英妈妈准备了降落伞，风一吹就飘走了' },
                  { id: 's1', text: '苍耳', emoji: '🌿', ttsText: '苍耳妈妈给孩子穿上带刺的铠甲，粘住动物就出发' },
                  { id: 's2', text: '豌豆', emoji: '🫛', ttsText: '豌豆妈妈让豆荚晒在太阳下，啪的一声豆子弹出去' },
                ],
              },
              ttsNarration: '植物妈妈各有办法，让种子去远方安家！',
            },
          },
        ],
        teachingMethod: '探究式阅读法',
        iDo: '家长朗读课文，在每种植物传播种子的方法处重点讲解。',
        weDo: '亲子一起讨论其他植物传播种子的方法，互相分享知道的例子。',
        youDo: '孩子独立阅读课文，完成生字认读和课后练习。',
        parentTips: '可以带孩子去户外观察植物的种子，增加直观体验。',
        funElement: '小游戏：种子旅行记！蒲公英坐"降落伞"，苍耳坐"出租车"（粘动物身上），你还能想到什么？🌱',
        gsapAnimations: ['GSAP: 种子飘散传播动画'],
        images: ['IMG: 植物传播种子方式图'],
        practiceQuestions: [
          {
            id: 'c1u4l2q1',
            type: 'choice',
            question: '蒲公英靠什么传播种子？',
            options: ['风', '水', '动物'],
            answer: '风',
            hint: '想想蒲公英的种子像什么',
            explanation: '蒲公英的种子有白色绒毛，像降落伞一样随风飘散传播。'
          },
          {
            id: 'c1u4l2q2',
            type: 'fill',
            question: '苍耳靠___传播种子',
            answer: '动物',
            hint: '苍耳会粘在什么上面',
            explanation: '苍耳表面有钩刺，能粘在路过的动物皮毛上，被带到远方。'
          },
          {
            id: 'c1u4l2q3',
            type: 'choice',
            question: '豌豆传播种子的方式是什么？',
            options: ['太阳晒炸开', '风吹走', '水流走'],
            answer: '太阳晒炸开',
            hint: '想想豌豆荚在太阳下的变化',
            explanation: '豌豆荚在太阳下晒干后会炸开，把种子弹射出去。'
          },
          {
            id: 'c1u4l2q4',
            type: 'choice',
            question: '下面哪种植物传播种子的方式和苍耳一样？',
            options: ["蒲公英","鬼针草","豌豆"],
            answer: '鬼针草',
            hint: '也是粘在动物身上',
            explanation: '鬼针草和苍耳一样，也是靠粘在动物身上传播种子。'
          },
          {
            id: 'c1u4l2q5',
            type: 'fill',
            question: '植物传播种子有三种方式：风传播、动物传播和___传播',
            answer: '弹射',
            hint: '豌豆靠什么传播',
            explanation: '植物传播种子的方式有风传播、动物传播和弹射传播。'
          },
          {
            id: 'c1u4l2q6',
            type: 'choice',
            question: '【期末真题】"植物妈妈有办法"告诉我们什么？',
            options: ["植物很聪明","大自然很奇妙","植物不会动"],
            answer: '大自然很奇妙',
            hint: '课文的中心意思',
            explanation: '课文告诉我们大自然很奇妙，植物各有各的办法传播种子。这是期末常考题！'
          }
        ]`;

const newL2Content = `        content: [
          { type: 'example', content: '牛(niú)\\n偏旁：牛\\n本义：一种家畜\\n引申义：固执、厉害\\n组词：水牛、牛奶\\n儿歌：牛字像牛头长角', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '羊(yáng)\\n偏旁：羊\\n本义：一种家畜\\n引申义：温和\\n组词：小羊、山羊\\n儿歌：羊字像羊头弯角', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '小羊\\n释义：年幼的羊\\n网络用法：小羊咩咩叫！\\n典故：古人养羊取毛取奶\\n趣味表达：小羊是草原的白棉花', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '花草\\n释义：花和草的统称\\n网络用法：公园里的花草真美！\\n典故：古人种花养草怡情\\n趣味表达：花草是大地的衣裳', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '牛、羊、马、鸟、鱼、虫、草、花，这些字和我们身边的动物植物有关，一起来认识它们吧', animationType: 'reveal' },
          { type: 'example', content: '动物字小知识：\\n牛——像牛的头和角 🐄\\n羊——像羊的头和弯角 🐑\\n马——像马的形状 🐴\\n鸟——像鸟的样子 🐦\\n鱼——像鱼的体形 🐟\\n虫——像小虫子 🐛\\n草——草字头加早 🌿\\n花——草字头加化 🌸', label: '动物植物字', animationType: 'bounce' },
          { type: 'dialogue', content: '牛说："我力气大，能耕田！"\\n马说："我跑得快，能赶路！"\\n鸟说："我有翅膀，能飞翔！"\\n鱼说："我会游泳，水里最欢！"', label: '动物对话', animationType: 'reveal' },
          { type: 'tip', content: '识字小窍门：草字头的字大多和植物有关，比如草、花、菜、茶。看到草字头，就想到绿色的植物！', label: '识字技巧', animationType: 'pulse' },
          { type: 'animation', content: '动物植物字演变动画，从图画变成汉字', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '动物植物字',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '牛', emoji: '🐄', ttsText: '牛，像牛的头和角' },
                  { id: 's1', text: '马', emoji: '🐴', ttsText: '马，像马的形状' },
                  { id: 's2', text: '鸟', emoji: '🐦', ttsText: '鸟，像鸟的样子' },
                  { id: 's3', text: '鱼', emoji: '🐟', ttsText: '鱼，像鱼的体形' },
                  { id: 's4', text: '花', emoji: '🌸', ttsText: '花，草字头加化，和植物有关' },
                ],
              },
              ttsNarration: '这些字和动物植物有关，真有趣！',
            },
          },
        ],
        teachingMethod: '归类识字法',
        iDo: '家长展示动物和植物的图片，让孩子观察并认读对应的汉字。',
        weDo: '亲子一起玩"动物植物分类"游戏，把字卡分成动物类和植物类。',
        youDo: '孩子独立认读八个字，并试着给每个字组一个词。',
        parentTips: '可以带孩子去动物园或公园，看到动物和植物时认读对应的汉字。',
        funElement: '小游戏：动物植物大分类！把字卡分成两队，动物队和植物队，看谁分得又快又准！🐾🌿',
        gsapAnimations: ['GSAP: 动物植物字演变动画'],
        images: ['IMG: 动物植物字对照图'],
        practiceQuestions: [
          {
            id: 'c1u4l2q1',
            type: 'choice',
            question: '下面哪个字表示会飞的动物？',
            options: ['鱼', '鸟', '虫'],
            answer: '鸟',
            hint: '哪个动物有翅膀',
            explanation: '"鸟"字表示有翅膀会飞的动物。'
          },
          {
            id: 'c1u4l2q2',
            type: 'fill',
            question: '草地上开满了___',
            answer: '花',
            hint: '草地上有什么颜色',
            explanation: '草地上开满了花，"花"是草字头的字，和植物有关。'
          },
          {
            id: 'c1u4l2q3',
            type: 'drag',
            question: '把字分成动物和植物两类',
            answer: '牛-动物,羊-动物,草-植物,花-植物',
            hint: '哪些是动物，哪些是植物',
            explanation: '牛和羊是动物，草和花是植物。'
          },
          {
            id: 'c1u4l2q4',
            type: 'choice',
            question: '下面哪个字有草字头？',
            options: ["牛", "花", "马"],
            answer: '花',
            hint: '哪个字和植物有关',
            explanation: '"花"字有草字头，和植物有关。"牛"和"马"没有草字头。'
          },
          {
            id: 'c1u4l2q5',
            type: 'fill',
            question: '"马"可以组词为___',
            answer: '小马',
            hint: '马的宝宝叫什么',
            explanation: '"马"可以组词为小马、马车、马路等。'
          },
          {
            id: 'c1u4l2q6',
            type: 'choice',
            question: '【期末真题】"虫"字偏旁是什么？',
            options: ["虫字旁", "草字头", "木字旁"],
            answer: '虫字旁',
            hint: '"虫"字本身是什么偏旁',
            explanation: '"虫"字本身是虫字旁，和昆虫有关。这是期末常考题！'
          }
        ]`;

if (!content.includes(oldL2Content)) {
  console.error('ERROR: Could not find old c1u4l2 content');
  process.exit(1);
}
content = content.replace(oldL2Content, newL2Content);
console.log('c1u4l2 content replaced successfully');

// ========== 替换 c1u4l3 的 content 数组 ==========
const oldL3Content = `        content: [
          { type: 'example', content: '冰(bīng)\\n偏旁：冫\\n本义：水凝固成的固体\\n引申义：冰冷、冰凉\\n组词：冰块、结冰\\n儿歌：两点水加水成冰', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '汽(qì)\\n偏旁：氵\\n本义：水蒸气\\n引申义：蒸汽、汽油\\n组词：水汽、汽车\\n儿歌：水气为汽飘上天', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '水蒸气\\n释义：水的气态形式\\n网络用法：水蒸气看不见但摸得着！\\n典故：古人烧水发现水蒸气\\n趣味表达：水蒸气是水的隐身术', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '变化\\n释义：事物发生改变\\n网络用法：水的变化真神奇！\\n典故：古人观察自然变化\\n趣味表达：变化是大自然的魔术', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '我会变！太阳一晒，我就变成水蒸气，升到天空变成云。遇到冷风，我又变成雨落下来', animationType: 'reveal' },
          { type: 'example', content: '水的三种形态：\\n固态——冰：硬邦邦的，像石头\\n液态——水：流动的，可以喝\\n气态——水蒸气：看不见，但能让玻璃变模糊', label: '水的三态', animationType: 'bounce' },
          { type: 'dialogue', content: '冰说："我最硬！零度以下我就出现！"\\n水说："我最常见！常温下就是我！"\\n水蒸气说："我最自由！加热后我就飞上天！"', label: '水的三态对话', animationType: 'reveal' },
          { type: 'text', content: '水有时候很温和，灌溉田地、给人们喝水；有时候很暴躁，淹没庄稼、冲毁房屋', animationType: 'typewriter' },
          { type: 'tip', content: '水的循环：冰→水→水蒸气→云→雨→水。水在大自然中不停地循环变化，永远也不会消失！', label: '水的循环', animationType: 'pulse' },
          { type: 'animation', content: '水的三态变化循环动画，冰融化成水、水蒸发成水蒸气、水蒸气凝结成云', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '水的三态变化',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '冰', emoji: '🧊', ttsText: '冰是固态的水，很冷很硬' },
                  { id: 's1', text: '水', emoji: '💧', ttsText: '冰融化变成了水，可以流动' },
                  { id: 's2', text: '水蒸气', emoji: '♨️', ttsText: '水加热变成了水蒸气，看不见摸不着' },
                  { id: 's3', text: '云', emoji: '☁️', ttsText: '水蒸气升到天上变成云' },
                ],
              },
              ttsNarration: '冰变成水，水变成水蒸气，水蒸气变成云，大自然真奇妙！',
            },
          },
        ],
        teachingMethod: '科学融合阅读法',
        iDo: '家长朗读课文，用实物或图片展示水的不同形态变化。',
        weDo: '亲子一起做"水变变变"实验——观察冰融化成水、水加热变成水蒸气。',
        youDo: '孩子独立阅读课文，画出水的形态变化图。',
        parentTips: '结合生活经验理解水的三态变化，如冰箱里的冰、烧开的水等。',
        funElement: '笑话：水说"我会变魔术！变成云飘上天，变成雨落下来，变成冰硬邦邦！"——水是大自然最厉害的魔术师！💧',
        gsapAnimations: ['GSAP: 水的三态变化循环动画'],
        images: ['IMG: 水的三态变化示意图'],
        practiceQuestions: [
          {
            id: 'c1u4l3q1',
            type: 'choice',
            question: '水变成气体叫什么？',
            options: ['水蒸气', '冰', '云'],
            answer: '水蒸气',
            hint: '水加热后会变成什么',
            explanation: '水加热后会变成水蒸气，这是水的气态形式。'
          },
          {
            id: 'c1u4l3q2',
            type: 'fill',
            question: '水遇冷变成___',
            answer: '冰',
            hint: '冰箱里的水变成了什么',
            explanation: '水在零度以下会凝固变成冰，这是水的固态形式。'
          },
          {
            id: 'c1u4l3q3',
            type: 'drag',
            question: '把水的形态变化拖到正确的过程',
            answer: '冰变水-融化,水变水蒸气-蒸发,水蒸气变云-凝结,云变雨-降落',
            hint: '想想水是怎么变化的',
            explanation: '冰融化成水，水蒸发成水蒸气；水蒸气升空成云，云凝结成雨。'
          },
          {
            id: 'c1u4l3q4',
            type: 'choice',
            question: '水在什么条件下会变成水蒸气？',
            options: ["遇冷","加热","不变"],
            answer: '加热',
            hint: '烧开的水会怎样',
            explanation: '水加热后会变成水蒸气，这是蒸发过程。'
          },
          {
            id: 'c1u4l3q5',
            type: 'fill',
            question: '水的循环过程：冰→水→水蒸气→___→雨',
            answer: '云',
            hint: '水蒸气升到天上变成什么',
            explanation: '水蒸气升到高空变成云，云凝结成雨落下来。'
          },
          {
            id: 'c1u4l3q6',
            type: 'choice',
            question: '【期末真题】"我是什么"这篇课文中，"我"指的是什么？',
            options: ["风","水","云"],
            answer: '水',
            hint: '什么会变成冰、水和水蒸气',
            explanation: '课文中的"我"指的是水，水会变成冰、水和水蒸气。这是期末常考题！'
          }
        ]`;

const newL3Content = `        content: [
          { type: 'example', content: '口(kǒu)\\n偏旁：口\\n本义：嘴巴\\n引申义：入口、人口\\n组词：口水、门口\\n儿歌：口字方方像嘴巴', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '耳(ěr)\\n偏旁：耳\\n本义：耳朵\\n引申义：耳旁、木耳\\n组词：耳朵、木耳\\n儿歌：耳朵弯弯听声音', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '耳朵\\n释义：听觉器官\\n网络用法：竖起耳朵认真听！\\n典故：古人说"兼听则明"\\n趣味表达：耳朵是脑袋的天线', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '力量\\n释义：力气、能力\\n网络用法：我的力量变大了！\\n典故：古人以力为美\\n趣味表达：力量是身体的发动机', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '口、耳、目、手、足、头、心、力，这些字都和我们自己的身体有关，一起来认识它们吧', animationType: 'reveal' },
          { type: 'example', content: '身体字小知识：\\n口——像张开的嘴巴 👄\\n耳——像耳朵的形状 👂\\n目——像眼睛的样子 👁️\\n手——像伸开的手掌 ✋\\n足——像脚的形状 🦶\\n头——头的意思 🗣️\\n心——像心脏的形状 ❤️\\n力——像手臂用力 💪', label: '身体字', animationType: 'bounce' },
          { type: 'dialogue', content: '口说："我能说话和吃饭！"\\n耳说："我能听声音！"\\n目说："我能看东西！"\\n手说："我能写字和画画！"', label: '身体对话', animationType: 'reveal' },
          { type: 'tip', content: '识字小窍门：口字旁的字大多和嘴巴有关，比如吃、喝、唱、叫。看到口字旁，就想到嘴巴！', label: '识字技巧', animationType: 'pulse' },
          { type: 'animation', content: '身体字演变动画，从图画变成汉字', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '身体字',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '口', emoji: '👄', ttsText: '口，像张开的嘴巴' },
                  { id: 's1', text: '目', emoji: '👁️', ttsText: '目，就是眼睛的意思' },
                  { id: 's2', text: '手', emoji: '✋', ttsText: '手，像伸开的手掌' },
                  { id: 's3', text: '足', emoji: '🦶', ttsText: '足，就是脚的意思' },
                  { id: 's4', text: '心', emoji: '❤️', ttsText: '心，像心脏的形状' },
                ],
              },
              ttsNarration: '这些字都和我们自己的身体有关，真有趣！',
            },
          },
        ],
        teachingMethod: '身体体验识字法',
        iDo: '家长指着自己身体的部位，让孩子认读对应的汉字。',
        weDo: '亲子一起玩"指指说说"游戏，家长指身体部位，孩子说出对应的字。',
        youDo: '孩子独立认读八个身体字，并试着用手指着身体部位读出字来。',
        parentTips: '可以和孩子一起做身体操，边做动作边认字，加深记忆。',
        funElement: '小游戏：身体部位点名！家长说字，孩子指身体部位，看谁反应最快！🏃',
        gsapAnimations: ['GSAP: 身体字演变动画'],
        images: ['IMG: 身体字对照图'],
        practiceQuestions: [
          {
            id: 'c1u4l3q1',
            type: 'choice',
            question: '"目"是指什么？',
            options: ['嘴巴', '眼睛', '耳朵'],
            answer: '眼睛',
            hint: '"目"是哪个身体部位',
            explanation: '"目"字的本义是眼睛。'
          },
          {
            id: 'c1u4l3q2',
            type: 'fill',
            question: '用___写字',
            answer: '手',
            hint: '写字用什么',
            explanation: '我们用手写字，"手"是身体部位。'
          },
          {
            id: 'c1u4l3q3',
            type: 'drag',
            question: '把身体字和对应的部位连起来',
            answer: '口-嘴巴,目-眼睛,足-脚,手-手',
            hint: '每个字对应哪个身体部位',
            explanation: '口是嘴巴，目是眼睛，足是脚，手是手。'
          },
          {
            id: 'c1u4l3q4',
            type: 'choice',
            question: '"力"字的意思是？',
            options: ["力气", "美丽", "厉害"],
            answer: '力气',
            hint: '"力"是什么意思',
            explanation: '"力"字的意思是力气、力量。'
          },
          {
            id: 'c1u4l3q5',
            type: 'fill',
            question: '"足"就是___的意思',
            answer: '脚',
            hint: '"足"是哪个身体部位',
            explanation: '"足"就是脚的意思，比如"手足"就是手和脚。'
          },
          {
            id: 'c1u4l3q6',
            type: 'choice',
            question: '【期末真题】"口"字旁的字大多和什么有关？',
            options: ["眼睛", "嘴巴", "脚"],
            answer: '嘴巴',
            hint: '口字旁和什么有关',
            explanation: '"口"字旁的字大多和嘴巴有关，比如吃、喝、唱、叫。这是期末常考题！'
          }
        ]`;

if (!content.includes(oldL3Content)) {
  console.error('ERROR: Could not find old c1u4l3 content');
  process.exit(1);
}
content = content.replace(oldL3Content, newL3Content);
console.log('c1u4l3 content replaced successfully');

// ========== 替换 c1u4l4 的练习题 ==========
const oldL4Questions = `        practiceQuestions: [
          {
            id: 'c1u4l4q1',
            type: 'choice',
            question: '小蝌蚪变青蛙的过程，正确顺序是？',
            options: ["先长前腿再长后腿","先长后腿再长前腿","前后腿同时长"],
            answer: '先长后腿再长前腿',
            hint: '回忆课文内容',
            explanation: '小蝌蚪先长后腿，再长前腿，最后尾巴消失变成青蛙。'
          },
          {
            id: 'c1u4l4q2',
            type: 'fill',
            question: '蒲公英靠___传播种子',
            answer: '风',
            hint: '蒲公英的种子像什么',
            explanation: '蒲公英的种子像降落伞，随风飘散传播。'
          },
          {
            id: 'c1u4l4q3',
            type: 'choice',
            question: '水的三态不包括以下哪个？',
            options: ["冰","水蒸气","石头"],
            answer: '石头',
            hint: '水能变成什么',
            explanation: '水的三态是固态（冰）、液态（水）、气态（水蒸气），石头不是水的形态。'
          },
          {
            id: 'c1u4l4q4',
            type: 'fill',
            question: '苍耳靠___传播种子',
            answer: '动物',
            hint: '苍耳会粘在什么上面',
            explanation: '苍耳表面有钩刺，能粘在动物皮毛上传播。'
          },
          {
            id: 'c1u4l4q5',
            type: 'choice',
            question: '下面哪个故事告诉我们"遇到困难要想办法"？',
            options: ["小蝌蚪找妈妈","乌鸦喝水","植物妈妈有办法"],
            answer: '乌鸦喝水',
            hint: '哪个故事是关于解决问题的',
            explanation: '乌鸦喝水的故事告诉我们遇到困难要动脑筋想办法。'
          },
          {
            id: 'c1u4l4q6',
            type: 'choice',
            question: '【期末真题】"水蒸气"是水的哪种形态？',
            options: ["固态","液态","气态"],
            answer: '气态',
            hint: '水蒸气是气体还是液体',
            explanation: '水蒸气是水的气态形式，这是期末常考的科学常识题！'
          }
        ]`;

const newL4Questions = `        practiceQuestions: [
          {
            id: 'c1u4l4q1',
            type: 'choice',
            question: '"日"字是什么类型的字？',
            options: ["象形字", "形声字", "会意字"],
            answer: '象形字',
            hint: '想想"日"字像什么',
            explanation: '"日"字是象形字，像圆圆的太阳。'
          },
          {
            id: 'c1u4l4q2',
            type: 'fill',
            question: '草字头的字大多和___有关',
            answer: '植物',
            hint: '草字头和什么有关',
            explanation: '草字头的字大多和植物有关，比如草、花、菜。'
          },
          {
            id: 'c1u4l4q3',
            type: 'choice',
            question: '"目"字的意思是？',
            options: ["嘴巴", "眼睛", "耳朵"],
            answer: '眼睛',
            hint: '"目"是哪个身体部位',
            explanation: '"目"字的意思是眼睛。'
          },
          {
            id: 'c1u4l4q4',
            type: 'fill',
            question: '"足"就是___的意思',
            answer: '脚',
            hint: '"足"是哪个身体部位',
            explanation: '"足"就是脚的意思。'
          },
          {
            id: 'c1u4l4q5',
            type: 'choice',
            question: '下面哪个字和动物有关？',
            options: ["花", "牛", "田"],
            answer: '牛',
            hint: '哪个字是动物',
            explanation: '"牛"是动物，"花"是植物，"田"是自然现象。'
          },
          {
            id: 'c1u4l4q6',
            type: 'choice',
            question: '【期末真题】"口"字旁的字大多和什么有关？',
            options: ["耳朵", "嘴巴", "手"],
            answer: '嘴巴',
            hint: '口字旁和什么有关',
            explanation: '"口"字旁的字大多和嘴巴有关，比如吃、喝、唱。这是期末常考题！'
          }
        ]`;

if (!content.includes(oldL4Questions)) {
  console.error('ERROR: Could not find old c1u4l4 practice questions');
  process.exit(1);
}
content = content.replace(oldL4Questions, newL4Questions);
console.log('c1u4l4 practice questions replaced successfully');

// ========== 替换 c1u4l5 的内容和练习题 ==========
const oldL5Content = `          { type: 'text', content: '学完了"识字天地（二）"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },`;

const newL5Content = `          { type: 'text', content: '学完了"识字天地"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },`;

if (!content.includes(oldL5Content)) {
  console.error('ERROR: Could not find old c1u4l5 content text');
  process.exit(1);
}
content = content.replace(oldL5Content, newL5Content);
console.log('c1u4l5 content text replaced successfully');

const oldL5Questions = `        practiceQuestions: [
          {
            id: 'c1u4l5q1',
            type: 'choice',
            question: '本单元的三个故事有什么共同点？',
            options: ["都是关于变化的","都是关于动物的","都是关于植物的"],
            answer: '都是关于变化的',
            hint: '蝌蚪变青蛙、种子传播、水变形态',
            explanation: '三个故事都和变化有关：蝌蚪变青蛙、种子传播方式、水的三态变化。'
          },
          {
            id: 'c1u4l5q2',
            type: 'fill',
            question: '小蝌蚪找妈妈的故事中，小蝌蚪先遇到了___妈妈',
            answer: '鲤鱼',
            hint: '第一个遇到谁',
            explanation: '小蝌蚪先遇到鲤鱼妈妈，问她是不是自己的妈妈。'
          },
          {
            id: 'c1u4l5q3',
            type: 'drag',
            question: '把植物和传播方式配对',
            answer: '蒲公英-风,苍耳-动物,豌豆-弹射',
            hint: '每种植物靠什么传播',
            explanation: '蒲公英靠风，苍耳靠动物，豌豆靠弹射传播种子。'
          },
          {
            id: 'c1u4l5q4',
            type: 'choice',
            question: '水变成冰需要什么条件？',
            options: ["加热","遇冷","太阳晒"],
            answer: '遇冷',
            hint: '冰箱里的水变成了什么',
            explanation: '水遇冷（零度以下）会凝固变成冰。'
          },
          {
            id: 'c1u4l5q5',
            type: 'fill',
            question: '用"变化"造一个句子：___',
            answer: '秋天的天气变化很大',
            hint: '什么东西会变化',
            explanation: '生活中有很多变化，比如天气变化、季节变化等。'
          },
          {
            id: 'c1u4l5q6',
            type: 'choice',
            question: '【期末真题】"植物妈妈有办法"中，豌豆传播种子的方式是？',
            options: ["随风飘","豆荚晒裂弹射","粘在动物身上"],
            answer: '豆荚晒裂弹射',
            hint: '豌豆荚在太阳下会怎样',
            explanation: '豌豆荚在太阳下晒干后会炸裂，把种子弹射出去。这是期末常考题！'
          }
        ]`;

const newL5Questions = `        practiceQuestions: [
          {
            id: 'c1u4l5q1',
            type: 'choice',
            question: '本单元学了哪三类汉字？',
            options: ["自然现象、动物植物、身体", "故事、诗歌、散文", "数字、颜色、形状"],
            answer: '自然现象、动物植物、身体',
            hint: '回顾三课的内容',
            explanation: '本单元学了自然现象（日月水火等）、动物植物（牛羊马鸟等）、身体（口耳目手等）三类汉字。'
          },
          {
            id: 'c1u4l5q2',
            type: 'fill',
            question: '象形字是古人照着事物的___画出来的',
            answer: '样子',
            hint: '象形字像什么',
            explanation: '象形字是古人照着事物的样子画出来的字，如日像太阳、月像月亮。'
          },
          {
            id: 'c1u4l5q3',
            type: 'drag',
            question: '把字和类别配对',
            answer: '日-自然现象,牛-动物,花-植物,手-身体',
            hint: '每个字属于哪一类',
            explanation: '日是自然现象，牛是动物，花是植物，手是身体部位。'
          },
          {
            id: 'c1u4l5q4',
            type: 'choice',
            question: '下面哪个字是身体部位的字？',
            options: ["山", "耳", "鱼"],
            answer: '耳',
            hint: '哪个字是身体部位',
            explanation: '"耳"是身体部位的字，"山"是自然现象，"鱼"是动物。'
          },
          {
            id: 'c1u4l5q5',
            type: 'fill',
            question: '用"山水"造一个句子：___',
            answer: '这里的山水真美',
            hint: '山水是什么',
            explanation: '山水指山和水的风景，可以造句如"这里的山水真美"。'
          },
          {
            id: 'c1u4l5q6',
            type: 'choice',
            question: '【期末真题】象形字的特点是什么？',
            options: ["字形像事物的样子", "字很多笔画", "字很难写"],
            answer: '字形像事物的样子',
            hint: '象形字为什么叫象形字',
            explanation: '象形字的特点是字形像事物的样子，如"日"像太阳、"山"像山峰。这是期末常考题！'
          }
        ]`;

if (!content.includes(oldL5Questions)) {
  console.error('ERROR: Could not find old c1u4l5 practice questions');
  process.exit(1);
}
content = content.replace(oldL5Questions, newL5Questions);
console.log('c1u4l5 practice questions replaced successfully');

// 写回文件
fs.writeFileSync(filePath, content, 'utf-8');
console.log('All replacements done successfully!');
