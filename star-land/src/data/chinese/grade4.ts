import type { Unit } from '@/types'

export const chineseGrade4: Unit[] = [
  // ==================== 第一单元：词语拓展与归类 ====================
  {
    id: 'c4u1',
    title: '词语拓展与归类',
    subtitle: '近义词、反义词与词语归类',
    order: 1,
    lessons: [
      {
        id: 'c4u1l1',
        title: '近义词辨析',
        order: 1,
        teachingMethod: '对比辨析法',
        learningObjective: '我能辨析近义词的细微差别并正确使用',
        successCriteria: '①能说出近义词的意思差别 ②能在语境中正确选用',
        content: [
          { type: 'text', content: '我们在说话和写作时，常常会用意思相近的词，这就是"近义词"。比如"美丽"和"漂亮"都表示好看，但用起来却有细微的差别。学会辨析近义词，能让我们的语言更准确！', animationType: 'reveal' },
          { type: 'example', content: '美丽 vs 漂亮\n美丽：多形容风景、事物，侧重内在与外在的统一，语意较重。如：美丽的西湖。\n漂亮：多形容外貌、衣物，侧重外表好看，语意较轻。如：漂亮的裙子。', label: '近义词对比', animationType: 'bounce' },
          { type: 'tip', content: '近义词辨析三步法：第一步比语意轻重，第二步比适用范围，第三步比感情色彩。抓住这三点，近义词就能分清楚！', label: '辨析技巧', animationType: 'pulse' },
          { type: 'example', content: '常见近义词辨析：\n坚固（多指建筑物）—坚硬（多指物体表面）\n爱护（多指保护人或物）—爱惜（多指珍惜时间或物品）\n激动（情绪强烈）—感动（受外界触动）', label: '近义词辨析', animationType: 'bounce' },
          { type: 'animation', content: '两个近义词左右对比展示，分别列出适用对象和语意轻重，方便孩子观察差异', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '近义词对比：美丽 vs 漂亮',
              compareConfig: {
                leftItems: ['美丽', '形容风景、事物', '语意较重', '内外兼修'],
                rightItems: ['漂亮', '形容外貌、衣物', '语意较轻', '侧重外表'],
                result: 'close',
                resultText: '两个词意思相近，但适用对象和语意轻重不同',
              },
              ttsNarration: '美丽和漂亮是近义词，但美丽多形容风景，语意较重；漂亮多形容外貌，语意较轻。',
            },
          },
          { type: 'text', content: '写作时恰当地使用近义词，可以避免词语重复，让文章更生动。比如不要一直用"好看"，可以换成"美丽""漂亮""迷人"等。', animationType: 'reveal' },
          { type: 'tip', content: '记住口诀：近义词，要分清，比轻重，看范围，辨色彩，用得准！', label: '巧记口诀', animationType: 'pulse' },
        ],
        iDo: '家长对比"美丽"和"漂亮"两个词，示范用在不同句子里，让孩子听出语意的细微差别。',
        weDo: '亲子一起做近义词选词填空，互相讨论为什么这里用这个词更合适。',
        youDo: '孩子独立辨析三组近义词，分别造句体会它们的差别。',
        parentTips: '【家长预习】我们在说话和写作时，常常会用意思相近的词，这就是"近义词…\n共学四步：\n①对话出题：问孩子"下列哪组是近义词？"\n②孩子应答：美丽和漂亮都表示好看，意思相近，是近义词。美丽和丑陋是反义词。\n③答错引导：家长可以让孩子把两个词分别造句，用"造句对比法"——看哪个词用在哪个语境更合适\n④快速检测：下列哪组是近义词？、选词填空：西湖的风景真（　　）。、"坚固"多形容建筑物，"坚硬"多形容物体（  …',
        funElement: '歇后语：马尾穿豆腐——提不起来！小游戏：近义词碰碰车，把意思相近的词配成一对，看谁配得多！',
        gsapAnimations: [
          '[GSAP:compare|两个近义词左右对比展示|0.8s|页面加载|power2.out]',
          '[GSAP:highlight|近义词关键词高亮变色|0.5s|点击词语|power2.out]'
        ],
        images: [
          '[IMG:illustration|近义词对比表：美丽vs漂亮|500x300|教学风|png|对比表格]',
          '[IMG:illustration|近义词辨析三步法图|500x200|教学风|png|三步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u1l1q1',
            type: 'choice',
            question: '下列哪组是近义词？',
            options: ['美丽—丑陋', '美丽—漂亮', '美丽—高大'],
            answer: '美丽—漂亮',
            hint: '近义词是意思相近的词',
            explanation: '美丽和漂亮都表示好看，意思相近，是近义词。美丽和丑陋是反义词。'
          },
          {
            id: 'c4u1l1q2',
            type: 'choice',
            question: '选词填空：西湖的风景真（　　）。',
            options: ['美丽', '漂亮'],
            answer: '美丽',
            hint: '形容风景用哪个词更合适',
            explanation: '美丽多形容风景、事物，所以"西湖的风景真美丽"更恰当。漂亮多形容外貌、衣物。'
          },
          {
            id: 'c4u1l1q3',
            type: 'fill',
            question: '"坚固"多形容建筑物，"坚硬"多形容物体___（填"表面"或"结构"）。',
            answer: '表面',
            acceptableAnswers: ['表面', '物体的表面'],
            hint: '想想石头是坚固还是坚硬',
            explanation: '坚硬多形容物体表面硬，如"坚硬的石头"；坚固多形容建筑物牢固，如"坚固的城墙"。'
          },
          {
            id: 'c4u1l1q4',
            type: 'choice',
            question: '"爱护"和"爱惜"哪个更适合填在"（　　）时间"中？',
            options: ['爱护', '爱惜'],
            answer: '爱惜',
            hint: '时间是珍惜还是保护',
            explanation: '爱惜多指珍惜时间或物品，所以"爱惜时间"正确。爱护多指保护人或物，如"爱护公物"。'
          },
          {
            id: 'c4u1l1q5',
            type: 'drag',
            question: '将近义词配对：激动、爱护、坚固、美丽',
            answer: '兴奋,爱惜,牢固,漂亮',
            hint: '把意思相近的词排在一起',
            explanation: '激动—兴奋，爱护—爱惜，坚固—牢固，美丽—漂亮，这些都是近义词。'
          },
          {
            id: 'c4u1l1q6',
            type: 'choice',
            question: '【期末真题】下列句子中加点的近义词使用最恰当的一项是？',
            options: ['这件衣服很坚固', '这块石头很坚硬', '这堵墙很坚硬'],
            answer: '这块石头很坚硬',
            hint: '想想石头和墙分别用什么词',
            explanation: '坚硬形容物体表面硬，石头坚硬正确。坚固形容建筑物牢固，应该说"这堵墙很坚固"。这是期末常考题！'
          },
          {
            id: 'c4u1l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：意思相近的词叫___词。',
            answer: '近义',
            acceptableAnswers: ['近义', '近义词'],
            hint: '[近义词概念]（语文四年级-第1单元）',
            explanation: '意思相近的词叫近义词，如"美丽"和"漂亮"。这是本单元第一课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u1l2',
        title: '反义词与词语搭配',
        order: 2,
        teachingMethod: '游戏化：词语消消乐',
        learningObjective: '我能找出反义词并进行正确的词语搭配',
        successCriteria: '①能正确找出词语的反义词 ②能进行正确的词语搭配',
        content: [
          { type: 'text', content: '反义词就是意思相反的词，比如"大"和"小"、"高"和"矮"。掌握反义词，不仅能丰富词汇，还能帮我们理解词语的含义。', animationType: 'reveal' },
          { type: 'example', content: '常见反义词对：\n大—小　高—矮　长—短　粗—细\n光明—黑暗　成功—失败　善良—凶恶\n简单—复杂　安静—喧闹', label: '反义词对', animationType: 'bounce' },
          { type: 'tip', content: '找反义词小窍门：先想这个词的意思，再把意思反过来。比如"光明"反过来就是"黑暗"。有些反义词只在一定语境下成立哦！', label: '找反义词技巧', animationType: 'pulse' },
          { type: 'example', content: '词语搭配有规律：\n形容词+名词：美丽的花朵、高大的树木\n动词+名词：打扫教室、阅读书籍\n形容词+形容词：又大又圆、又香又甜', label: '词语搭配', animationType: 'bounce' },
          { type: 'text', content: '词语搭配就像给词语找朋友，搭配得当，句子才通顺、生动。比如可以说"明亮的教室"，但不能说"明亮的味道"。', animationType: 'reveal' },
          { type: 'animation', content: '词语卡片配对动画，反义词配对成功后卡片消失，展示词语消消乐效果', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '反义词消消乐',
              sequenceConfig: {
                items: ['大↔小', '高↔矮', '长↔短', '光明↔黑暗', '成功↔失败'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '反义词消消乐！大对小，高对矮，长对短，配对成功！',
            },
          },
          { type: 'tip', content: '搭配口诀：什么词配什么词，要看词性和意思。形容词修饰名词，动词搭配名词，记住了就不容易出错！', label: '搭配口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范反义词配对，说出一个词让孩子接反义词，比如家长说"大"，孩子说"小"。',
        weDo: '亲子一起玩词语消消乐游戏，配对反义词卡片，配对成功就消除。',
        youDo: '孩子独立完成词语搭配闯关，把合适的词语连起来。',
        parentTips: '【家长预习】反义词就是意思相反的词，比如"大"和"小"、"高"和"矮…\n共学四步：\n①对话出题：问孩子"光明"的反义词是？"\n②孩子应答：光明和黑暗意思相反，是反义词。明亮是近义词。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："光明"的反义词是？、下列哪个搭配不正确？、"成功"的反义词是（    ）。',
        funElement: '歇后语：哑巴吃黄连——有苦说不出！反义词笑话：胖子和瘦子比体重，胖子说"我重"，瘦子说"我轻"，结果秤坏了！',
        gsapAnimations: [
          '[GSAP:sequence|反义词配对卡片消失|0.5s|配对成功|power2.in]',
          '[GSAP:confetti|消消乐通关撒花|2s|全部配对成功|power1.out]'
        ],
        images: [
          '[IMG:illustration|词语消消乐游戏界面|600x400|游戏风|png|4x4词语网格]',
          '[IMG:illustration|反义词对比图|500x300|教学风|png|反义词对]'
        ],
        practiceQuestions: [
          {
            id: 'c4u1l2q1',
            type: 'choice',
            question: '"光明"的反义词是？',
            options: ['明亮', '黑暗', '清楚'],
            answer: '黑暗',
            hint: '光明的反面是什么',
            explanation: '光明和黑暗意思相反，是反义词。明亮是近义词。'
          },
          {
            id: 'c4u1l2q2',
            type: 'choice',
            question: '下列哪个搭配不正确？',
            options: ['明亮的教室', '美丽的花朵', '香甜的声音'],
            answer: '香甜的声音',
            hint: '声音能用香甜形容吗',
            explanation: '香甜一般形容食物的味道，不能形容声音。应该说"悦耳的声音"。'
          },
          {
            id: 'c4u1l2q3',
            type: 'fill',
            question: '"成功"的反义词是___。',
            answer: '失败',
            hint: '成功反过来是什么',
            explanation: '成功和失败意思相反，是反义词。'
          },
          {
            id: 'c4u1l2q4',
            type: 'choice',
            question: '"安静"的反义词是？',
            options: ['吵闹', '嘈杂', '热闹'],
            answer: '嘈杂',
            hint: '找意思相反的词',
            explanation: '安静和嘈杂是标准的反义词。嘈杂表示声音杂乱吵闹，与安静意思相反。'
          },
          {
            id: 'c4u1l2q5',
            type: 'drag',
            question: '把词语正确搭配：明亮、高大、阅读、打扫',
            answer: '教室,树木,书籍,房间',
            hint: '想想什么词配什么',
            explanation: '明亮的教室、高大的树木、阅读书籍、打扫房间，这些搭配都是正确的。'
          },
          {
            id: 'c4u1l2q6',
            type: 'choice',
            question: '【期末真题】下列反义词搭配正确的一项是？',
            options: ['简单—容易', '复杂—简单', '复杂—困难'],
            answer: '复杂—简单',
            hint: '找意思相反的一组',
            explanation: '复杂和简单意思相反，是反义词。简单和容易是近义词。这是期末常考题！'
          },
          {
            id: 'c4u1l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：意思相反的词叫___词。',
            answer: '反义',
            acceptableAnswers: ['反义', '反义词'],
            hint: '[反义词概念]（语文四年级-第1单元）',
            explanation: '意思相反的词叫反义词，如"大"和"小"。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u1l3',
        title: '词语归类——按类别分组',
        order: 3,
        teachingMethod: '支架式：分类归纳法',
        learningObjective: '我能按类别给词语正确分组',
        successCriteria: '①能按正确类别给词语分组 ②分组准确无遗漏',
        content: [
          { type: 'text', content: '我们认识了那么多词语，怎么管理它们呢？一个好办法就是"归类"。把同一类的词语放在一起，就像给书本分类放在书架上，用的时候一下子就能找到！', animationType: 'reveal' },
          { type: 'example', content: '按事物类别归类：\n水果类：苹果、香蕉、葡萄、橘子\n蔬菜类：白菜、萝卜、黄瓜、茄子\n动物类：老虎、兔子、大象、猴子\n文具类：铅笔、橡皮、尺子、本子', label: '类别归类', animationType: 'bounce' },
          { type: 'tip', content: '归类三步法：第一步看这些词语说的是什么，第二步找共同特点，第三步给它们起个类别名称。比如"苹果、香蕉"都是水果！', label: '归类方法', animationType: 'pulse' },
          { type: 'example', content: '按词语属性归类：\n表示动作的词：跑、跳、飞、游\n表示颜色的词：红、黄、蓝、绿\n表示心情的词：高兴、伤心、生气、激动\n表示天气的词：晴、阴、雨、雪', label: '属性归类', animationType: 'bounce' },
          { type: 'text', content: '归类时要注意：同一个词可能属于不同类别。比如"红花"既是颜色词又和植物有关，归类要看具体情境。', animationType: 'reveal' },
          { type: 'animation', content: '词语卡片按类别分组动画，水果类、蔬菜类、动物类分别归入不同的篮子', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '词语归类大挑战',
              sequenceConfig: {
                items: ['苹果→水果', '白菜→蔬菜', '老虎→动物', '香蕉→水果', '萝卜→蔬菜', '兔子→动物'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '词语归类！把水果放一起，蔬菜放一起，动物放一起！',
            },
          },
          { type: 'tip', content: '归类口诀：先观察，找特点，再分类，起名字。归类让词语变得有条理！', label: '归类口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范把一组词语归类，边分边说出归类的理由，让孩子明白怎么找共同特点。',
        weDo: '亲子一起给一组词语分类，互相讨论每个词应该放在哪一类。',
        youDo: '孩子独立把一组混合词语分成三类，并说出分类理由。',
        parentTips: '【家长预习】我们认识了那么多词语，怎么管理它们呢？一个好办法就是"归…\n共学四步：\n①对话出题：问孩子"苹果、香蕉、葡萄"属于哪一类？"\n②孩子应答：苹果、香蕉、葡萄都是水果，所以归为水果类。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："苹果、香蕉、葡萄"属于哪一类？、下列哪个词和其他不同类？、"跑、跳、飞、游"都是表示（    ）的词。（…',
        funElement: '小游戏：词语分家！把"苹果、老虎、白菜、香蕉、兔子、萝卜"分成三家人，看谁分得又快又准！',
        gsapAnimations: [
          '[GSAP:sequence|词语卡片按类别归入篮子|1s|点击分类|power2.out]',
          '[GSAP:highlight|同类词语高亮变色|0.5s|分类完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|词语归类篮子图|600x300|可爱卡通风|png|三个分类篮子]',
          '[IMG:illustration|分类归纳三步法|500x200|教学风|png|三步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u1l3q1',
            type: 'choice',
            question: '"苹果、香蕉、葡萄"属于哪一类？',
            options: ['蔬菜', '水果', '文具'],
            answer: '水果',
            hint: '它们都是树上结的能吃的',
            explanation: '苹果、香蕉、葡萄都是水果，所以归为水果类。'
          },
          {
            id: 'c4u1l3q2',
            type: 'choice',
            question: '下列哪个词和其他不同类？',
            options: ['铅笔', '橡皮', '尺子', '苹果'],
            answer: '苹果',
            hint: '找不属于同一类的',
            explanation: '铅笔、橡皮、尺子都是文具，苹果是水果，所以苹果不同类。'
          },
          {
            id: 'c4u1l3q3',
            type: 'fill',
            question: '"跑、跳、飞、游"都是表示___的词。（填"动作"或"颜色"）',
            answer: '动作',
            acceptableAnswers: ['动作', '动作的'],
            hint: '这些都是动词',
            explanation: '跑、跳、飞、游都表示动作，归为表示动作的词。'
          },
          {
            id: 'c4u1l3q4',
            type: 'choice',
            question: '"高兴、伤心、生气、激动"属于哪一类？',
            options: ['表示天气的词', '表示心情的词', '表示颜色的词'],
            answer: '表示心情的词',
            hint: '这些词和情绪有关',
            explanation: '高兴、伤心、生气、激动都表示心情，归为表示心情的词。'
          },
          {
            id: 'c4u1l3q5',
            type: 'drag',
            question: '把词语按类别排列：白菜、老虎、苹果、萝卜、兔子、香蕉',
            answer: '苹果,香蕉,白菜,萝卜,老虎,兔子',
            hint: '先水果再蔬菜再动物',
            explanation: '水果类：苹果、香蕉；蔬菜类：白菜、萝卜；动物类：老虎、兔子。按类别排好队。'
          },
          {
            id: 'c4u1l3q6',
            type: 'choice',
            question: '【期末真题】下列词语中，不同类的一个是？',
            options: ['晴', '阴', '雨', '红'],
            answer: '红',
            hint: '三个表示天气，一个表示颜色',
            explanation: '晴、阴、雨都表示天气，红表示颜色，所以红不同类。这是期末常考题！'
          },
          {
            id: 'c4u1l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：把同一类的词语放在一起叫___。',
            answer: '归类',
            acceptableAnswers: ['归类', '词语归类'],
            hint: '[词语归类]（语文四年级-第1单元）',
            explanation: '把同一类的词语放在一起叫归类，比如把苹果、香蕉归为水果类。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u1l4',
        title: 'AABB、ABCC等特殊词语形式',
        order: 4,
        teachingMethod: '情境式：词语变形记',
        learningObjective: '我能识别并运用AABB、ABAB等特殊词语形式',
        successCriteria: '①能识别AABB、ABAB等词语形式 ②能各举出3个例子',
        content: [
          { type: 'text', content: '汉语中有许多有趣的词语形式，比如"AABB"式、"ABCC"式、"AABC"式等。这些词语读起来朗朗上口，用在文章里特别生动！', animationType: 'reveal' },
          { type: 'example', content: 'AABB式（两个字重叠）：\n高高兴兴、开开心心、干干净净\n明明白白、整整齐齐、热热闹闹\n特点：表示程度加深或状态持续', label: 'AABB式词语', animationType: 'bounce' },
          { type: 'example', content: 'ABCC式（后面两个字重叠）：\n白雪皑皑、波光粼粼、得意洋洋\n小心翼翼、生机勃勃、议论纷纷\n特点：形容某种状态或样子', label: 'ABCC式词语', animationType: 'bounce' },
          { type: 'tip', content: '记住规律：AABB是"双双对对"，ABCC是"后面成双"，AABC是"前面成双"。看准重叠的位置就能分辨！', label: '分辨技巧', animationType: 'pulse' },
          { type: 'example', content: 'AABC式（前面两个字重叠）：\n津津有味、历历在目、亭亭玉立\n欣欣向荣、恋恋不舍、头头是道\n特点：表示程度或态度', label: 'AABC式词语', animationType: 'bounce' },
          { type: 'animation', content: '词语变形动画，一个词从原形变成AABB式，展示重叠的过程', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '词语变形记',
              sequenceConfig: {
                items: ['高兴→高高兴兴', '干净→干干净净', '明白→明明白白', '热闹→热热闹闹'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '词语变形记！高兴变成高高兴兴，干净变成干干净净！',
            },
          },
          { type: 'text', content: '这些特殊形式的词语用在哪里呢？比如写"他高高兴兴地跑回家"比"他高兴地跑回家"更生动，程度更深。写作时多用这些词，文章会更精彩！', animationType: 'reveal' },
          { type: 'tip', content: '运用口诀：AABB表程度，ABCC表样子，AABC表态度。用对形式，文章生动！', label: '运用口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范把"高兴"变成"高高兴兴"，让孩子感受重叠后语意的变化。',
        weDo: '亲子一起玩词语变形游戏，家长说原词，孩子变成AABB式。',
        youDo: '孩子独立把一组词语变成AABB或ABCC式，并造句运用。',
        parentTips: '【家长预习】汉语中有许多有趣的词语形式，比如"AABB"式、"ABC…\n共学四步：\n①对话出题：问孩子"高高兴兴"属于哪种形式？"\n②孩子应答：高高兴兴是"高兴"两个字都重叠，属于AABB式。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："高高兴兴"属于哪种形式？、"白雪皑皑"属于哪种形式？、"津津有味"属于（    ）式词语。（填"AA…',
        funElement: '词语笑话：AABB式大会！高高兴兴和开开心心吵架——"我比你高兴两倍！""我比你开心两倍！"ABCC式的白雪皑皑路过说："你们叠两次，我后面叠两次，不一样吗？"',
        gsapAnimations: [
          '[GSAP:sequence|词语重叠变形动画|0.8s|点击变形|power2.inOut]',
          '[GSAP:highlight|重叠部分高亮显示|0.4s|变形完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|特殊词语形式分类图|500x300|教学风|png|三种形式对比]',
          '[IMG:illustration|词语变形过程图|500x200|可爱卡通风|png|重叠过程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u1l4q1',
            type: 'choice',
            question: '"高高兴兴"属于哪种形式？',
            options: ['AABB式', 'ABCC式', 'AABC式'],
            answer: 'AABB式',
            hint: '看哪两个字重叠',
            explanation: '高高兴兴是"高兴"两个字都重叠，属于AABB式。'
          },
          {
            id: 'c4u1l4q2',
            type: 'choice',
            question: '"白雪皑皑"属于哪种形式？',
            options: ['AABB式', 'ABCC式', 'AABC式'],
            answer: 'ABCC式',
            hint: '看后面两个字',
            explanation: '白雪皑皑后面"皑皑"两个字重叠，属于ABCC式。'
          },
          {
            id: 'c4u1l4q3',
            type: 'fill',
            question: '"津津有味"属于___式词语。（填"AABC"或"ABCC"）',
            answer: 'AABC',
            hint: '看前面两个字',
            explanation: '津津有味前面"津津"两个字重叠，属于AABC式。'
          },
          {
            id: 'c4u1l4q4',
            type: 'choice',
            question: '下列哪个是ABCC式词语？',
            options: ['开开心心', '波光粼粼', '亭亭玉立'],
            answer: '波光粼粼',
            hint: '找后面两个字重叠的',
            explanation: '波光粼粼后面"粼粼"重叠，是ABCC式。开开心心是AABB式，亭亭玉立是AABC式。'
          },
          {
            id: 'c4u1l4q5',
            type: 'fill',
            question: '把"干净"变成AABB式：___',
            answer: '干干净净',
            hint: '两个字都重叠',
            explanation: '干净变成AABB式就是"干干净净"，表示很干净。'
          },
          {
            id: 'c4u1l4q6',
            type: 'choice',
            question: '【期末真题】下列句子中加点的词语使用正确的一项是？',
            options: ['他亭亭玉立地跑回家', '他高高兴兴地跑回家', '他白雪皑皑地跑回家'],
            answer: '他高高兴兴地跑回家',
            hint: '想想哪个词能形容跑回家的样子',
            explanation: '高高兴兴形容心情好地跑回家，正确。亭亭玉立形容女子身姿，白雪皑皑形容雪景，都不能形容跑。这是期末常考题！'
          },
          {
            id: 'c4u1l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："高高兴兴"这种两个词都重叠的形式叫___式。',
            answer: 'AABB',
            hint: '[AABB式词语]（语文四年级-第1单元）',
            explanation: '高高兴兴这种两个字都重叠的形式叫AABB式。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u1l5',
        title: '词语综合运用',
        order: 5,
        teachingMethod: '形成性评价+综合应用',
        learningObjective: '我能掌握本课字词知识并正确运用',
        successCriteria: '①能掌握本课字词知识 ②能正确运用到语境中',
        content: [
          { type: 'text', content: '前面我们学习了近义词、反义词、词语归类和特殊词语形式。现在把它们综合起来运用，让你的语言表达更上一层楼！', animationType: 'reveal' },
          { type: 'example', content: '综合运用示例：\n原句：花开了。\n扩展后：五颜六色的花朵竞相开放，开得热热闹闹。\n运用了：归类（五颜六色）、近义词（开放）、AABB式（热热闹闹）', label: '综合运用', animationType: 'bounce' },
          { type: 'tip', content: '综合运用三招：第一招用近义词避免重复，第二招用反义词形成对比，第三招用特殊形式增加生动。三招合用，文章精彩！', label: '运用三招', animationType: 'pulse' },
          { type: 'example', content: '对比效果：\n普通：天黑了，月亮出来了。\n精彩：夜幕降临，皎洁的月亮悄悄爬上树梢，星星也议论纷纷地探出头来。\n运用了：近义词（夜幕降临）、ABCC式（议论纷纷）、拟人', label: '对比效果', animationType: 'bounce' },
          { type: 'text', content: '写作时，先想好要表达什么，再选择合适的词语形式。不要为了用而用，要用得自然、恰当。', animationType: 'reveal' },
          { type: 'animation', content: '词语综合运用闯关动画，词语卡片组合成精彩句子的过程', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '词语大闯关',
              sequenceConfig: {
                items: ['选近义词', '配反义词', '归类别', '变AABB', '组精彩句'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '词语大闯关！综合运用近义词、反义词、归类和特殊形式，写出精彩句子！',
            },
          },
          { type: 'tip', content: '复习口诀：近义词分轻重，反义词找相反，归类看特点，重叠增生动。综合运用最精彩！', label: '复习口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范用近义词、反义词和特殊形式扩写一个简单句子，让孩子看到词语运用的效果。',
        weDo: '亲子一起用学过的词语方法编一个有趣的故事，互相补充。',
        youDo: '孩子独立完成词语综合运用练习，用三种方法扩写句子。',
        parentTips: '【家长预习】前面我们学习了近义词、反义词、词语归类和特殊词语形式。现…\n共学四步：\n①对话出题：问孩子"好看"的近义词是？"\n②孩子应答：好看和漂亮意思相近，是近义词。好看和丑陋是反义词。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："好看"的近义词是？、"安静"的反义词是？、把"高兴"变成AABB式：（    ）',
        funElement: '歇后语：芝麻开花——节节高！词语运用也是节节高，越用越精彩！小游戏：词语大闯关，连过五关就是词语大王！',
        gsapAnimations: [
          '[GSAP:sequence|词语卡片组合成精彩句子|1.2s|点击播放|power2.out]',
          '[GSAP:confetti|通关撒花|2s|正确率达标|power1.out]'
        ],
        images: [
          '[IMG:illustration|词语运用达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|词语综合运用流程图|500x300|教学风|png|四步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u1l5q1',
            type: 'choice',
            question: '"好看"的近义词是？',
            options: ['漂亮', '丑陋', '高大'],
            answer: '漂亮',
            hint: '找意思相近的词',
            explanation: '好看和漂亮意思相近，是近义词。好看和丑陋是反义词。'
          },
          {
            id: 'c4u1l5q2',
            type: 'choice',
            question: '"安静"的反义词是？',
            options: ['吵闹', '嘈杂', '热闹'],
            answer: '嘈杂',
            hint: '找意思相反的词',
            explanation: '安静和嘈杂意思相反，是反义词。'
          },
          {
            id: 'c4u1l5q3',
            type: 'fill',
            question: '把"高兴"变成AABB式：___',
            answer: '高高兴兴',
            hint: '两个字都重叠',
            explanation: '高兴变成AABB式就是"高高兴兴"。'
          },
          {
            id: 'c4u1l5q4',
            type: 'choice',
            question: '"铅笔、橡皮、尺子"应该归为哪一类？',
            options: ['水果', '文具', '动物'],
            answer: '文具',
            hint: '它们都是学习用品',
            explanation: '铅笔、橡皮、尺子都是文具，归为文具类。'
          },
          {
            id: 'c4u1l5q5',
            type: 'drag',
            question: '把下列词语按形式分类：开开心心、白雪皑皑、津津有味、干干净净',
            answer: '开开心心,干干净净,白雪皑皑,津津有味',
            hint: '先AABB再ABCC再AABC',
            explanation: 'AABB式：开开心心、干干净净；ABCC式：白雪皑皑；AABC式：津津有味。'
          },
          {
            id: 'c4u1l5q6',
            type: 'choice',
            question: '【期末真题】下列哪个句子运用词语最生动？',
            options: ['花开了', '花高兴地开了', '五颜六色的花竞相开放，开得热热闹闹'],
            answer: '五颜六色的花竞相开放，开得热热闹闹',
            hint: '找词语最丰富、最生动的',
            explanation: '第三句运用了成语（五颜六色）、拟人（竞相开放）和AABB叠词（热热闹闹），词语丰富最生动。这是期末常考题！'
          },
          {
            id: 'c4u1l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：综合运用近义词、反义词和特殊词语形式，能让文章更___。',
            answer: '生动',
            acceptableAnswers: ['生动', '精彩'],
            hint: '[词语综合运用]（语文四年级-第1单元）',
            explanation: '综合运用近义词、反义词和特殊词语形式，能让文章更生动精彩。这是本单元学过的知识。'
          }
        ]
      }
    ]
  },
  // ==================== 第二单元：成语故事与运用 ====================
  {
    id: 'c4u2',
    title: '成语故事与运用',
    subtitle: '听故事学成语，会运用',
    order: 2,
    lessons: [
      {
        id: 'c4u2l1',
        title: '数字成语入门',
        order: 1,
        teachingMethod: '情境式：成语故事会',
        learningObjective: '我能积累数字成语并理解其含义',
        successCriteria: '①能说出本课成语的意思 ②能用至少2个成语造句',
        content: [
          { type: 'text', content: '成语是汉语中的瑰宝，大多由四个字组成，背后都有一个有趣的故事。今天我们从"数字成语"开始，认识带数字的成语！', animationType: 'reveal' },
          { type: 'example', content: '一箭双雕：一枝箭射中两只雕，比喻做一件事达到两个目的。\n故事：古代有个神箭手，一箭射下两只大雕，大家都夸他厉害！', label: '数字成语故事', animationType: 'bounce' },
          { type: 'example', content: '三心二意：三颗心两条意，比喻心思不集中，做事不专一。\n故事：小猫钓鱼时一会儿捉蝴蝶，一会儿追蜻蜓，结果一条鱼也没钓到，这就是三心二意！', label: '数字成语故事', animationType: 'bounce' },
          { type: 'tip', content: '数字成语特点：成语中的数字不一定表示确数，常常表示"多"或"少"。比如"三心二意"不是说真的有三颗心，而是形容不专心。', label: '成语特点', animationType: 'pulse' },
          { type: 'animation', content: '成语故事四格连环画依次出现，展示"一箭双雕"的画面', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '一箭双雕的故事',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '神箭手张弓搭箭', emoji: '🏹', ttsNarration: '从前有个神箭手，他张弓搭箭，准备射击。' },
                  { id: 's2', text: '天上飞来两只大雕', emoji: '🦅', ttsNarration: '天上正好飞来两只大雕。' },
                  { id: 's3', text: '嗖！一箭射中两只雕', emoji: '➡️', ttsNarration: '嗖的一声，一枝箭射中了两只大雕！' },
                  { id: 's4', text: '一箭双雕——一举两得！', emoji: '🎉', ttsNarration: '这就是一箭双雕，比喻做一件事达到两个目的。' },
                ],
              },
              ttsNarration: '一箭双雕的故事：神箭手一箭射中两只雕，比喻做一件事达到两个目的。',
            },
          },
          { type: 'text', content: '常见的数字成语还有：四面八方（到处）、五颜六色（颜色多）、七上八下（心情不安）、九牛一毛（极少）。', animationType: 'reveal' },
          { type: 'tip', content: '运用口诀：数字成语要记牢，先懂故事再运用，用在句子里才生动！', label: '运用口诀', animationType: 'pulse' },
        ],
        iDo: '家长讲"一箭双雕"的故事，引出数字成语，让孩子感受成语的画面感。',
        weDo: '亲子一起收集数字成语，家长说数字，孩子说成语，比如家长说"三"，孩子说"三心二意"。',
        youDo: '孩子独立用数字成语造句，每个成语造一个句子。',
        parentTips: '【家长预习】成语是汉语中的瑰宝，大多由四个字组成，背后都有一个有趣的…\n共学四步：\n①对话出题：问孩子"一箭双雕"是什么意思？"\n②孩子应答：一箭双雕比喻做一件事达到两个目的，就像一枝箭射中两只雕一样。\n③答错引导：家长可以讲成语背后的故事，用"故事记忆法"——先听故事再理解意思\n④快速检测："一箭双雕"是什么意思？、"三心二意"形容什么样的人？、"四面（    ）方"表示到处都是。（填"八"…',
        funElement: '成语笑话：一箭双雕的小偷——偷了一只鸡还顺走一只鸭！歇后语：八仙过海——各显神通！',
        gsapAnimations: [
          '[GSAP:timeline|成语故事四格连环画依次出现|1.5s|点击播放|power2.inOut]',
          '[GSAP:cardReveal|数字成语卡片翻转揭示|0.6s|点击卡片|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|一箭双雕三心二意四面八方成语插画|600x300|水墨画风|png|3个成语配图]',
          '[IMG:illustration|数字成语汇总表|500x300|教学风|png|数字成语列表]'
        ],
        practiceQuestions: [
          {
            id: 'c4u2l1q1',
            type: 'choice',
            question: '"一箭双雕"是什么意思？',
            options: ['射中两只鸟', '做一件事达到两个目的', '有两个好朋友'],
            answer: '做一件事达到两个目的',
            hint: '想想一枝箭射中两只雕',
            explanation: '一箭双雕比喻做一件事达到两个目的，就像一枝箭射中两只雕一样。'
          },
          {
            id: 'c4u2l1q2',
            type: 'choice',
            question: '"三心二意"形容什么样的人？',
            options: ['很聪明的人', '做事不专心的人', '有三个朋友的人'],
            answer: '做事不专心的人',
            hint: '想想小猫钓鱼的故事',
            explanation: '三心二意形容做事不专心、心思不集中，就像小猫钓鱼时一会儿捉蝴蝶一会儿追蜻蜓。'
          },
          {
            id: 'c4u2l1q3',
            type: 'fill',
            question: '"四面___方"表示到处都是。（填"八"或"九"）',
            answer: '八',
            hint: '四个面配八个方',
            explanation: '四面八方表示到处、各个方向，四面是东南西北，每面又分两方，共八方。'
          },
          {
            id: 'c4u2l1q4',
            type: 'choice',
            question: '下列哪个成语形容颜色多？',
            options: ['七上八下', '五颜六色', '九牛一毛'],
            answer: '五颜六色',
            hint: '哪个成语和颜色有关',
            explanation: '五颜六色形容颜色很多很丰富。七上八下形容心情不安，九牛一毛形容极少。'
          },
          {
            id: 'c4u2l1q5',
            type: 'drag',
            question: '把数字成语和意思配对：一箭双雕、三心二意、五颜六色',
            answer: '一举两得,不专心,颜色多',
            hint: '想想每个成语的意思',
            explanation: '一箭双雕—一举两得，三心二意—不专心，五颜六色—颜色多。'
          },
          {
            id: 'c4u2l1q6',
            type: 'choice',
            question: '【期末真题】"他帮妈妈做家务，既打扫了房间又洗了碗，真是（　　）"横线处填什么成语最合适？',
            options: ['三心二意', '一箭双雕', '九牛一毛'],
            answer: '一箭双雕',
            hint: '做一件事达到两个目的',
            explanation: '做家务既打扫房间又洗碗，一件事达到两个目的，用"一箭双雕"最合适。这是期末常考题！'
          },
          {
            id: 'c4u2l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：成语大多由___个字组成。',
            answer: '四',
            acceptableAnswers: ['四', '4'],
            hint: '[成语特点]（语文四年级-第2单元）',
            explanation: '成语大多由四个字组成，如"一箭双雕"。这是本单元第一课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u2l2',
        title: '动物成语进阶',
        order: 2,
        teachingMethod: '语境化：动物成语归类',
        learningObjective: '我能积累动物成语并理解其含义',
        successCriteria: '①能说出本课成语的意思 ②能用至少2个成语造句',
        content: [
          { type: 'text', content: '动物成语是成语里最有趣的一类，因为它们大多藏着一个小动物！从动物身上，我们能学到很多道理。', animationType: 'reveal' },
          { type: 'example', content: '狐假虎威：狐狸借着老虎的威风吓唬别人，比喻倚仗别人的势力欺压人。\n故事：狐狸被老虎抓住，说"我是老天爷派来的百兽之王，你不信就跟在我后面走！"动物们看到老虎都跑了，老虎以为它们怕狐狸，其实是怕老虎自己！', label: '动物成语故事', animationType: 'bounce' },
          { type: 'example', content: '画蛇添足：画蛇时给它加上脚，比喻做多余的事反而不好。\n故事：几个人画蛇比赛，第一个画完的人觉得太简单，又给蛇画上脚，结果输了比赛。', label: '动物成语故事', animationType: 'bounce' },
          { type: 'tip', content: '动物成语记忆法：先记动物，再记故事，最后记道理。比如"狐假虎威"——狐狸+老虎+借威风=倚仗别人势力。', label: '记忆方法', animationType: 'pulse' },
          { type: 'animation', content: '动物成语卡片翻转揭示含义，正面是动物图案，翻转后显示成语和意思', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '动物成语卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '🦊🐯', back: '狐假虎威', ttsText: '狐假虎威，狐狸借老虎的威风，比喻倚仗别人势力欺压人。' },
                  { id: 'c1', front: '🐍✏️', back: '画蛇添足', ttsText: '画蛇添足，画蛇时加脚，比喻做多余的事反而不好。' },
                  { id: 'c2', front: '🐰🌳', back: '守株待兔', ttsText: '守株待兔，守在树桩旁等兔子，比喻不努力而希望得到意外收获。' },
                  { id: 'c3', front: '🐸☁️', back: '井底之蛙', ttsText: '井底之蛙，井底的青蛙，比喻见识短浅的人。' },
                ],
              },
              ttsNarration: '动物成语卡片翻转！正面是动物，翻转后看成语和意思。',
            },
          },
          { type: 'text', content: '更多动物成语：亡羊补牢（丢了羊再修羊圈，比喻出了问题再补救）、对牛弹琴（对牛弹琴白费力气，比喻对不懂的人说道理）。', animationType: 'reveal' },
          { type: 'tip', content: '动物成语往往用动物的特点来比喻人的行为。狐狸狡猾、蛇会爬行、兔子跑得快……想想动物特点就能记住成语！', label: '理解技巧', animationType: 'pulse' },
        ],
        iDo: '家长讲"狐假虎威"的故事，用夸张的语气表现狐狸的狡猾和老虎的糊涂。',
        weDo: '亲子一起做动物成语配对游戏，把动物和成语连起来。',
        youDo: '孩子独立用动物成语写句子，每个成语写一句。',
        parentTips: '【家长预习】动物成语是成语里最有趣的一类，因为它们大多藏着一个小动物…\n共学四步：\n①对话出题：问孩子"狐假虎威"中，动物们真正怕的是谁？"\n②孩子应答：动物们真正怕的是老虎，狐狸只是借了老虎的威风。所以"狐假虎威"比喻倚仗别人的…\n③答错引导：家长可以讲成语背后的故事，用"故事记忆法"——先听故事再理解意思\n④快速检测："狐假虎威"中，动物们真正怕的是谁？、"画蛇添足"告诉我们什么道理？、"守株待（    ）"比喻不努力而希望得到意外…',
        funElement: '成语笑话：画蛇添足的画家说——"我给蛇画脚是为了让它跑得快！"结果蛇说："我有脚还叫蛇吗？"',
        gsapAnimations: [
          '[GSAP:cardReveal|动物成语卡片翻转揭示含义|0.6s|点击卡片|power2.inOut]',
          '[GSAP:highlight|动物关键词高亮|0.5s|翻转完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|狐假虎威画蛇添足守株待兔动物成语图|600x300|可爱卡通风|png|3个动物成语]',
          '[IMG:illustration|动物成语分类表|500x300|教学风|png|动物分类]'
        ],
        practiceQuestions: [
          {
            id: 'c4u2l2q1',
            type: 'choice',
            question: '"狐假虎威"中，动物们真正怕的是谁？',
            options: ['狐狸', '老虎', '自己'],
            answer: '老虎',
            hint: '想想动物们为什么跑',
            explanation: '动物们真正怕的是老虎，狐狸只是借了老虎的威风。所以"狐假虎威"比喻倚仗别人的势力。'
          },
          {
            id: 'c4u2l2q2',
            type: 'choice',
            question: '"画蛇添足"告诉我们什么道理？',
            options: ['做事要多加东西', '做多余的事反而不好', '蛇有脚'],
            answer: '做多余的事反而不好',
            hint: '给蛇画脚是多此一举',
            explanation: '画蛇添足比喻做多余的事反而不好，蛇本来没有脚，画上脚反而输了比赛。'
          },
          {
            id: 'c4u2l2q3',
            type: 'fill',
            question: '"守株待___"比喻不努力而希望得到意外收获。（填动物名）',
            answer: '兔',
            hint: '在树桩旁等什么动物',
            explanation: '守株待兔，守在树桩旁等兔子撞上来，比喻不努力而希望得到意外收获。'
          },
          {
            id: 'c4u2l2q4',
            type: 'choice',
            question: '"井底之蛙"比喻什么样的人？',
            options: ['很厉害的人', '见识短浅的人', '喜欢井的人'],
            answer: '见识短浅的人',
            hint: '井底的青蛙能看到多大的天',
            explanation: '井底之蛙比喻见识短浅的人，因为井底的青蛙只能看到井口大的天空。'
          },
          {
            id: 'c4u2l2q5',
            type: 'drag',
            question: '把动物成语和意思配对：狐假虎威、画蛇添足、守株待兔、井底之蛙',
            answer: '借势欺人,多此一举,不劳而获,见识短浅',
            hint: '想想每个成语的道理',
            explanation: '狐假虎威—借势欺人，画蛇添足—多此一举，守株待兔—不劳而获，井底之蛙—见识短浅。'
          },
          {
            id: 'c4u2l2q6',
            type: 'choice',
            question: '【期末真题】下列哪个句子中成语使用正确？',
            options: ['他学习很努力，真是画蛇添足', '他总靠爸爸的关系欺负同学，真是狐假虎威', '他知识丰富，真是井底之蛙'],
            answer: '他总靠爸爸的关系欺负同学，真是狐假虎威',
            hint: '想想每个成语的意思',
            explanation: '狐假虎威比喻倚仗别人势力欺压人，靠爸爸关系欺负同学符合。画蛇添足是做多余的事，井底之蛙是见识短浅。这是期末常考题！'
          },
          {
            id: 'c4u2l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："画蛇添足"比喻做___的事反而不好。',
            answer: '多余',
            acceptableAnswers: ['多余', '多余无用'],
            hint: '[画蛇添足]（语文四年级-第2单元）',
            explanation: '画蛇添足比喻做多余的事反而不好。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u2l3',
        title: '寓言成语故事',
        order: 3,
        teachingMethod: '情境式：寓言故事剧场',
        learningObjective: '我能理解寓言成语故事的道理',
        successCriteria: '①能说出本课成语的意思 ②能用至少2个成语造句',
        content: [
          { type: 'text', content: '寓言成语来自寓言故事，用短小的故事讲深刻的道理。学会寓言成语，不仅能丰富词汇，还能明白做人做事的道理！', animationType: 'reveal' },
          { type: 'example', content: '拔苗助长：把禾苗拔高帮助它生长，比喻违反事物发展规律，急于求成反而坏事。\n故事：农夫嫌禾苗长得慢，把每棵都拔高一点，结果禾苗全枯死了。', label: '寓言成语', animationType: 'bounce' },
          { type: 'example', content: '掩耳盗铃：捂住耳朵偷铃铛，比喻自欺欺人。\n故事：小偷想偷铃铛，怕铃声响被人发现，就捂住自己耳朵，结果还是被抓住了。', label: '寓言成语', animationType: 'bounce' },
          { type: 'tip', content: '寓言成语特点：故事短小，道理深刻。每个寓言成语都藏着一个"不要这样做"的警示。读懂故事，就能明白道理！', label: '寓言特点', animationType: 'pulse' },
          { type: 'example', content: '刻舟求剑：在船上刻记号找掉进水里的剑，比喻办事刻板，不知道变通。\n故事：楚国人坐船掉剑入水，在船边刻记号，船到岸后再按记号下水找，当然找不到了。', label: '寓言成语', animationType: 'bounce' },
          { type: 'animation', content: '寓言成语卡片翻转，正面是故事场景，翻转后揭示成语道理', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '寓言成语翻翻卡',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '🌾👆', back: '拔苗助长', ttsText: '拔苗助长，拔高禾苗帮它长，比喻急于求成反而坏事。' },
                  { id: 'c1', front: '🙉🔔', back: '掩耳盗铃', ttsText: '掩耳盗铃，捂耳朵偷铃铛，比喻自欺欺人。' },
                  { id: 'c2', front: '🚢⚔️', back: '刻舟求剑', ttsText: '刻舟求剑，船边刻记号找剑，比喻刻板不知变通。' },
                  { id: 'c3', front: '🐸☁️', back: '坐井观天', ttsText: '坐井观天，坐在井里看天，比喻见识短浅。' },
                ],
              },
              ttsNarration: '寓言成语翻翻卡！翻开卡片，看看每个成语的道理。',
            },
          },
          { type: 'tip', content: '寓言成语道理总结：拔苗助长——不要急于求成；掩耳盗铃——不要自欺欺人；刻舟求剑——要懂得变通。', label: '道理总结', animationType: 'pulse' },
        ],
        iDo: '家长讲"拔苗助长"的故事，引导孩子思考农夫错在哪里。',
        weDo: '亲子一起演"掩耳盗铃"的故事剧场，分角色表演。',
        youDo: '孩子独立讲一个寓言成语故事，并说出它的道理。',
        parentTips: '【家长预习】寓言成语来自寓言故事，用短小的故事讲深刻的道理。学会寓言…\n共学四步：\n①对话出题：问孩子"拔苗助长"告诉我们什么道理？"\n②孩子应答：拔苗助长告诉我们不要急于求成，违反规律反而坏事，农夫拔苗后禾苗全枯死了。\n③答错引导：家长可以讲成语背后的故事，用"故事记忆法"——先听故事再理解意思\n④快速检测："拔苗助长"告诉我们什么道理？、"掩耳盗铃"比喻什么？、"刻舟求（    ）"比喻办事刻板，不知变通。…',
        funElement: '成语笑话：掩耳盗铃的小偷说——"我捂住耳朵就听不见铃声了！"路人说："你听不见，我们听得见啊！"',
        gsapAnimations: [
          '[GSAP:cardReveal|寓言成语卡片翻转揭示道理|0.6s|点击卡片|power2.inOut]',
          '[GSAP:timeline|寓言故事分步呈现|1.2s|点击播放|power2.out]'
        ],
        images: [
          '[IMG:illustration|拔苗助长掩耳盗铃刻舟求剑寓言图|600x300|水墨画风|png|3个寓言故事]',
          '[IMG:illustration|寓言成语道理总结图|500x300|思维导图风|png|道理归纳]'
        ],
        practiceQuestions: [
          {
            id: 'c4u2l3q1',
            type: 'choice',
            question: '"拔苗助长"告诉我们什么道理？',
            options: ['要帮助禾苗生长', '不要急于求成', '禾苗要常拔'],
            answer: '不要急于求成',
            hint: '农夫拔苗后禾苗怎么了',
            explanation: '拔苗助长告诉我们不要急于求成，违反规律反而坏事，农夫拔苗后禾苗全枯死了。'
          },
          {
            id: 'c4u2l3q2',
            type: 'choice',
            question: '"掩耳盗铃"比喻什么？',
            options: ['偷铃铛', '自欺欺人', '耳朵不好'],
            answer: '自欺欺人',
            hint: '捂住自己的耳朵别人就听不见吗',
            explanation: '掩耳盗铃比喻自欺欺人，小偷捂住自己耳朵以为别人也听不见，其实只是骗自己。'
          },
          {
            id: 'c4u2l3q3',
            type: 'fill',
            question: '"刻舟求___"比喻办事刻板，不知变通。（填"剑"或"船"）',
            answer: '剑',
            hint: '掉进水里的是什么',
            explanation: '刻舟求剑，在船上刻记号找掉水的剑，剑是掉进水里的东西。比喻办事刻板不知变通。'
          },
          {
            id: 'c4u2l3q4',
            type: 'choice',
            question: '下列哪个成语和"坐井观天"意思相近？',
            options: ['井底之蛙', '画蛇添足', '狐假虎威'],
            answer: '井底之蛙',
            hint: '都和见识短浅有关',
            explanation: '坐井观天和井底之蛙都比喻见识短浅，意思相近。'
          },
          {
            id: 'c4u2l3q5',
            type: 'drag',
            question: '把寓言成语和道理配对：拔苗助长、掩耳盗铃、刻舟求剑',
            answer: '急于求成,自欺欺人,不知变通',
            hint: '想想每个成语的道理',
            explanation: '拔苗助长—急于求成，掩耳盗铃—自欺欺人，刻舟求剑—不知变通。'
          },
          {
            id: 'c4u2l3q6',
            type: 'choice',
            question: '【期末真题】妈妈让小明每天做一百道题，结果小明累病了。这可以用哪个成语形容？',
            options: ['掩耳盗铃', '拔苗助长', '刻舟求剑'],
            answer: '拔苗助长',
            hint: '急于求成反而坏事',
            explanation: '每天做一百道题太急了，结果累病了，违反规律急于求成反而坏事，是拔苗助长。这是期末常考题！'
          },
          {
            id: 'c4u2l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："掩耳盗铃"比喻___人。',
            answer: '自欺欺',
            acceptableAnswers: ['自欺欺', '自欺欺人'],
            hint: '[掩耳盗铃]（语文四年级-第2单元）',
            explanation: '掩耳盗铃比喻自欺欺人，捂住自己耳朵以为别人听不见。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u2l4',
        title: '历史故事成语',
        order: 4,
        teachingMethod: '情境式：历史故事会',
        learningObjective: '我能积累历史故事成语并理解其含义',
        successCriteria: '①能说出本课成语的意思 ②能用至少2个成语造句',
        content: [
          { type: 'text', content: '有些成语来自真实的历史故事，记录了古人的智慧和精神。学习历史成语，就像穿越时空，和古人对话！', animationType: 'reveal' },
          { type: 'example', content: '卧薪尝胆：睡在柴草上尝苦胆，形容人刻苦自励、发奋图强。\n故事：越王勾践被吴国打败后，每天睡柴草、尝苦胆，提醒自己不忘耻辱，最终打败吴国。', label: '历史成语', animationType: 'bounce' },
          { type: 'example', content: '三顾茅庐：三次到草庐拜访，比喻诚心诚意地邀请人。\n故事：刘备三次到诸葛亮住的茅庐请他出山帮忙，终于感动了诸葛亮。', label: '历史成语', animationType: 'bounce' },
          { type: 'tip', content: '历史成语学习法：先了解历史背景，再读故事，最后记成语意思。比如"卧薪尝胆"要知道越国和吴国的故事。', label: '学习方法', animationType: 'pulse' },
          { type: 'example', content: '完璧归赵：把和氏璧完好地还给赵国，比喻把原物完好地归还本人。\n故事：蔺相如带着和氏璧去秦国，识破秦王的诡计，把璧完好带回赵国。', label: '历史成语', animationType: 'bounce' },
          { type: 'animation', content: '历史成语卡片翻转，正面是历史人物，翻转后显示成语和故事', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '历史成语翻翻卡',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '👑', back: '卧薪尝胆', ttsText: '卧薪尝胆，越王勾践睡柴草尝苦胆，形容刻苦自励发奋图强。' },
                  { id: 'c1', front: '🏠', back: '三顾茅庐', ttsText: '三顾茅庐，刘备三次拜访诸葛亮，比喻诚心诚意邀请人。' },
                  { id: 'c2', front: '💎', back: '完璧归赵', ttsText: '完璧归赵，蔺相如把和氏璧完好带回赵国，比喻原物完好归还。' },
                  { id: 'c3', front: '📖', back: '凿壁偷光', ttsText: '凿壁偷光，匡衡凿墙借光读书，形容刻苦学习。' },
                ],
              },
              ttsNarration: '历史成语翻翻卡！翻开卡片，认识历史人物和他们的故事。',
            },
          },
          { type: 'tip', content: '历史成语道理：卧薪尝胆——发奋图强；三顾茅庐——诚心诚意；完璧归赵——信守承诺；凿壁偷光——刻苦学习。', label: '道理总结', animationType: 'pulse' },
        ],
        iDo: '家长讲"卧薪尝胆"的历史故事，重点讲勾践如何刻苦自励。',
        weDo: '亲子一起讨论历史成语的道理，说说今天我们能学到什么。',
        youDo: '孩子独立用历史成语造句，并简单讲讲背后的故事。',
        parentTips: '【家长预习】有些成语来自真实的历史故事，记录了古人的智慧和精神。学习…\n共学四步：\n①对话出题：问孩子"卧薪尝胆"形容什么样的人？"\n②孩子应答：卧薪尝胆形容刻苦自励、发奋图强的人，越王勾践睡柴草尝苦胆最终打败吴国。\n③答错引导：家长可以讲成语背后的故事，用"故事记忆法"——先听故事再理解意思\n④快速检测："卧薪尝胆"形容什么样的人？、"三顾茅庐"比喻什么？、"完（    ）归赵"比喻把原物完好地归还原主…',
        funElement: '历史笑话：刘备三顾茅庐，第一次诸葛亮不在，第二次还不在，第三次刘备说："你再不来我就住这儿了！"诸葛亮赶紧出来了！',
        gsapAnimations: [
          '[GSAP:cardReveal|历史成语卡片翻转|0.6s|点击卡片|power2.inOut]',
          '[GSAP:timeline|历史故事时间线展开|1.5s|点击播放|power2.out]'
        ],
        images: [
          '[IMG:illustration|卧薪尝胆三顾茅庐完璧归赵历史图|600x300|水墨画风|png|3个历史故事]',
          '[IMG:illustration|历史成语人物卡片|500x300|可爱卡通风|png|人物卡片]'
        ],
        practiceQuestions: [
          {
            id: 'c4u2l4q1',
            type: 'choice',
            question: '"卧薪尝胆"形容什么样的人？',
            options: ['刻苦自励发奋图强的人', '喜欢吃苦的人', '睡不好的人'],
            answer: '刻苦自励发奋图强的人',
            hint: '想想越王勾践的故事',
            explanation: '卧薪尝胆形容刻苦自励、发奋图强的人，越王勾践睡柴草尝苦胆最终打败吴国。'
          },
          {
            id: 'c4u2l4q2',
            type: 'choice',
            question: '"三顾茅庐"比喻什么？',
            options: ['去草庐玩', '诚心诚意地邀请人', '盖茅草屋'],
            answer: '诚心诚意地邀请人',
            hint: '刘备去了几次',
            explanation: '三顾茅庐比喻诚心诚意地邀请人，刘备三次到茅庐请诸葛亮出山。'
          },
          {
            id: 'c4u2l4q3',
            type: 'fill',
            question: '"完___归赵"比喻把原物完好地归还原主。（填"璧"或"壁"）',
            answer: '璧',
            hint: '和氏什么',
            explanation: '完璧归赵，璧是和氏璧，一种玉器。蔺相如把和氏璧完好带回赵国。'
          },
          {
            id: 'c4u2l4q4',
            type: 'choice',
            question: '"凿壁偷光"形容什么？',
            options: ['偷东西', '刻苦学习', '破坏墙壁'],
            answer: '刻苦学习',
            hint: '匡衡为什么凿墙',
            explanation: '凿壁偷光形容刻苦学习，匡衡家穷买不起灯油，凿墙借邻居家的光读书。'
          },
          {
            id: 'c4u2l4q5',
            type: 'drag',
            question: '把历史成语和人物配对：卧薪尝胆、三顾茅庐、完璧归赵、凿壁偷光',
            answer: '勾践,刘备,蔺相如,匡衡',
            hint: '想想每个成语的主人公',
            explanation: '卧薪尝胆—勾践，三顾茅庐—刘备，完璧归赵—蔺相如，凿壁偷光—匡衡。'
          },
          {
            id: 'c4u2l4q6',
            type: 'choice',
            question: '【期末真题】为了请到人才，公司经理多次登门拜访，这可以用哪个成语形容？',
            options: ['卧薪尝胆', '三顾茅庐', '凿壁偷光'],
            answer: '三顾茅庐',
            hint: '多次诚心邀请',
            explanation: '多次登门拜访诚心邀请人才，用"三顾茅庐"最合适。这是期末常考题！'
          },
          {
            id: 'c4u2l4q7',
            type: 'fill',
            question: '回顾前面学过的知识："三顾茅庐"比喻___地邀请人。',
            answer: '诚心诚意',
            acceptableAnswers: ['诚心诚意', '真心诚意'],
            hint: '[三顾茅庐]（语文四年级-第2单元）',
            explanation: '三顾茅庐比喻诚心诚意地邀请人，刘备三次拜访诸葛亮。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u2l5',
        title: '成语综合运用',
        order: 5,
        teachingMethod: '形成性评价+综合应用',
        learningObjective: '我能正确运用本课成语造句',
        successCriteria: '①能说出本课成语的意思 ②能用至少2个成语造句',
        content: [
          { type: 'text', content: '我们学了不少成语，现在把它们综合运用起来！用成语写话、编故事，让语言更精彩！', animationType: 'reveal' },
          { type: 'example', content: '成语写段落示例：\n小明学习从不三心二意，总是聚精会神。遇到困难也不拔苗助长，而是一步一个脚印。同学们都说他将来一定大有作为！\n运用了：三心二意、聚精会神、拔苗助长、大有作为', label: '成语写话', animationType: 'bounce' },
          { type: 'tip', content: '成语运用三原则：第一用对意思，第二用对语境，第三不要堆砌。用得恰当，一个成语胜过千言万语！', label: '运用原则', animationType: 'pulse' },
          { type: 'example', content: '成语编故事示例：\n从前有只井底之蛙，想出去看看世界。它刻舟求剑般地记着回家的路，结果发现世界太大迷路了。最后靠狐假虎威才回了家，真是又好笑又可怜！\n运用了：井底之蛙、刻舟求剑、狐假虎威', label: '成语编故事', animationType: 'bounce' },
          { type: 'animation', content: '成语综合运用闯关动画，成语卡片组合成段落的动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '成语运用大闯关',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '❓', back: '选对成语', ttsText: '第一关：选对成语。' },
                  { id: 'c1', front: '❓', back: '理解意思', ttsText: '第二关：理解意思。' },
                  { id: 'c2', front: '❓', back: '造句运用', ttsText: '第三关：造句运用。' },
                  { id: 'c3', front: '❓', back: '编故事', ttsText: '第四关：用成语编故事。' },
                ],
              },
              ttsNarration: '成语运用大闯关！选对成语，理解意思，造句运用，编出精彩故事！',
            },
          },
          { type: 'tip', content: '复习口诀：成语故事要记牢，先懂故事再运用，语境恰当最精彩，不堆不砌自然好！', label: '复习口诀', animationType: 'pulse' },
          { type: 'text', content: '用成语写话时，可以先想一个主题，再挑选3-4个合适的成语，把它们自然地用在段落里。', animationType: 'reveal' },
        ],
        iDo: '家长示范用3个成语写一段话，让孩子看到成语如何让段落更精彩。',
        weDo: '亲子一起用成语编一个故事，互相补充情节。',
        youDo: '孩子独立完成成语运用测试，用成语写一段话。',
        parentTips: '【家长预习】我们学了不少成语，现在把它们综合运用起来！用成语写话、编…\n共学四步：\n①对话出题：问孩子"一箭双雕"的意思是？"\n②孩子应答：一箭双雕比喻做一件事达到两个目的。\n③答错引导：家长可以讲成语背后的故事，用"故事记忆法"——先听故事再理解意思\n④快速检测："一箭双雕"的意思是？、"狐假虎威"比喻什么？、"拔苗（    ）长"比喻急于求成反而坏事。',
        funElement: '成语接龙游戏：一箭双雕→雕虫小技→技高一筹→筹谋已久……看谁接得多！歇后语：关公面前耍大刀——自不量力！',
        gsapAnimations: [
          '[GSAP:cardReveal|成语运用闯关卡片翻转|0.6s|点击闯关|power2.inOut]',
          '[GSAP:confetti|通关撒花|2s|正确率达标|power1.out]'
        ],
        images: [
          '[IMG:illustration|成语达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|成语运用流程图|500x300|教学风|png|运用流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u2l5q1',
            type: 'choice',
            question: '"一箭双雕"的意思是？',
            options: ['射两只鸟', '做一件事达到两个目的', '有两个朋友'],
            answer: '做一件事达到两个目的',
            hint: '回忆第一课学的',
            explanation: '一箭双雕比喻做一件事达到两个目的。'
          },
          {
            id: 'c4u2l5q2',
            type: 'choice',
            question: '"狐假虎威"比喻什么？',
            options: ['狐狸和老虎', '倚仗别人势力欺压人', '动物成精'],
            answer: '倚仗别人势力欺压人',
            hint: '回忆第二课学的',
            explanation: '狐假虎威比喻倚仗别人的势力欺压人。'
          },
          {
            id: 'c4u2l5q3',
            type: 'fill',
            question: '"拔苗___长"比喻急于求成反而坏事。',
            answer: '助',
            hint: '帮助禾苗生长',
            explanation: '拔苗助长，把禾苗拔高帮助它生长，比喻急于求成反而坏事。'
          },
          {
            id: 'c4u2l5q4',
            type: 'choice',
            question: '"三顾茅庐"比喻什么？',
            options: ['去草庐玩', '诚心诚意邀请人', '盖房子'],
            answer: '诚心诚意邀请人',
            hint: '回忆第四课学的',
            explanation: '三顾茅庐比喻诚心诚意地邀请人。'
          },
          {
            id: 'c4u2l5q5',
            type: 'drag',
            question: '把成语和意思配对：一箭双雕、画蛇添足、卧薪尝胆、掩耳盗铃',
            answer: '一举两得,多此一举,发奋图强,自欺欺人',
            hint: '想想每个成语的意思',
            explanation: '一箭双雕—一举两得，画蛇添足—多此一举，卧薪尝胆—发奋图强，掩耳盗铃—自欺欺人。'
          },
          {
            id: 'c4u2l5q6',
            type: 'choice',
            question: '【期末真题】"这道题他不会做，却装作会做，真是（　　）"填什么成语？',
            options: ['一箭双雕', '掩耳盗铃', '卧薪尝胆'],
            answer: '掩耳盗铃',
            hint: '装作会做是自欺欺人',
            explanation: '不会做却装作会做，是自欺欺人，用"掩耳盗铃"最合适。这是期末常考题！'
          },
          {
            id: 'c4u2l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：运用成语要先懂___再运用。',
            answer: '故事',
            acceptableAnswers: ['故事', '意思'],
            hint: '[成语运用]（语文四年级-第2单元）',
            explanation: '运用成语要先懂故事和意思，再用在合适的语境中。这是本单元学过的知识。'
          }
        ]
      }
    ]
  },
  // ==================== 第三单元：阅读理解深化 ====================
  {
    id: 'c4u3',
    title: '阅读理解深化',
    subtitle: '概括段意与体会情感',
    order: 3,
    lessons: [
      {
        id: 'c4u3l1',
        title: '概括段意——找中心句',
        order: 1,
        teachingMethod: '支架式：段意概括三步法',
        learningObjective: '我能用找中心句的方法概括段落大意',
        successCriteria: '①能找出段落的中心句 ②能用自己的话概括段落大意',
        content: [
          { type: 'text', content: '阅读一篇文章，我们要学会概括每一段的意思。最简单的方法就是找"中心句"——能概括整段意思的那个句子！', animationType: 'reveal' },
          { type: 'example', content: '段落示例：\n春天来了，校园里到处生机勃勃。小草从泥土里探出头来，柳树抽出了嫩绿的枝条，桃花绽开了粉红的笑脸。同学们在操场上快乐地奔跑，笑声回荡在校园里。\n中心句：春天来了，校园里到处生机勃勃。（第一句，概括全段）', label: '找中心句', animationType: 'bounce' },
          { type: 'tip', content: '段意概括三步法：第一步读全段，第二步找中心句，第三步用自己的话说。中心句常在段首，有时在段尾，偶尔在段中。', label: '概括三步法', animationType: 'pulse' },
          { type: 'example', content: '中心句的位置：\n段首：春天来了，校园生机勃勃。（总起句）\n段尾：所以，我们要爱护校园。（总结句）\n段中：校园最美的是春天，因为……（过渡句）', label: '中心句位置', animationType: 'bounce' },
          { type: 'animation', content: '中心句在段落中高亮变色动画，点击句子高亮显示', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '中心句与支撑句对比',
              compareConfig: {
                leftItems: ['中心句', '概括全段', '常在段首或段尾', '一句话说清'],
                rightItems: ['支撑句', '具体描写', '围绕中心句展开', '补充说明'],
                result: 'close',
                resultText: '中心句概括全段，支撑句具体展开，两者配合让段落完整',
              },
              ttsNarration: '中心句概括全段意思，支撑句具体展开描写。找中心句就能概括段意！',
            },
          },
          { type: 'text', content: '有时候段落没有明显的中心句，就要自己概括。把几个关键意思合在一起，用一句话说出来就是段意。', animationType: 'reveal' },
          { type: 'tip', content: '概括口诀：读全段，找中心，自己说，要简练。一句话概括一段话，就是好段意！', label: '概括口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范找一段话的中心句，边找边说出判断的理由。',
        weDo: '亲子一起用三步法概括段意，互相检查找得对不对。',
        youDo: '孩子独立概括两段话的段意，找出中心句或自己概括。',
        parentTips: '【家长预习】阅读一篇文章，我们要学会概括每一段的意思。最简单的方法就…\n共学四步：\n①对话出题：问孩子"中心句常常在段落的什么位置？"\n②孩子应答：中心句常在段首（总起句）或段尾（总结句），有时也在段中。\n③答错引导：家长可以教孩子用"找中心句法"——读一段找一句最能概括整段的话，没有中心句就自己总结\n④快速检测：中心句常常在段落的什么位置？、"春天来了，校园里到处生机勃勃。"这句话在段落…、概括段意三步法：读全段→找（    ）句→用自…',
        funElement: '阅读小游戏：中心句捉迷藏！中心句藏在段落里，看谁能第一个找到它！歇后语：芝麻里挑西瓜——找大的！',
        gsapAnimations: [
          '[GSAP:highlight|中心句在段落中高亮变色|0.5s|点击句子|power2.out]',
          '[GSAP:compare|中心句与支撑句对比展示|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|段落结构图：中心句+支撑句|500x300|教学风|png|段落结构]',
          '[IMG:illustration|段意概括三步法图|500x200|教学风|png|三步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u3l1q1',
            type: 'choice',
            question: '中心句常常在段落的什么位置？',
            options: ['只在段中', '段首或段尾', '只在段尾'],
            answer: '段首或段尾',
            hint: '回想三步法',
            explanation: '中心句常在段首（总起句）或段尾（总结句），有时也在段中。'
          },
          {
            id: 'c4u3l1q2',
            type: 'choice',
            question: '"春天来了，校园里到处生机勃勃。"这句话在段落中是什么角色？',
            options: ['支撑句', '中心句', '过渡句'],
            answer: '中心句',
            hint: '它能概括全段吗',
            explanation: '这句话概括了全段"校园春天生机勃勃"的意思，是中心句。'
          },
          {
            id: 'c4u3l1q3',
            type: 'fill',
            question: '概括段意三步法：读全段→找___句→用自己的话说。',
            answer: '中心',
            hint: '要找什么句',
            explanation: '概括段意三步法：读全段→找中心句→用自己的话说。'
          },
          {
            id: 'c4u3l1q4',
            type: 'choice',
            question: '下列哪个句子最适合做"小草发芽、桃花开放、柳树抽枝"这段话的中心句？',
            options: ['春天真美啊', '校园里的花很多', '春天来了，万物复苏'],
            answer: '春天来了，万物复苏',
            hint: '哪个能概括小草发芽桃花开放',
            explanation: '"春天来了，万物复苏"能概括小草发芽、桃花开放、柳树抽枝等内容，最适合做中心句。'
          },
          {
            id: 'c4u3l1q5',
            type: 'drag',
            question: '按段意概括三步法排序：用自己的话说、读全段、找中心句',
            answer: '读全段,找中心句,用自己的话说',
            hint: '先做什么再做什么',
            explanation: '段意概括三步法顺序：读全段→找中心句→用自己的话说。'
          },
          {
            id: 'c4u3l1q6',
            type: 'choice',
            question: '【期末真题】一段话没有明显的中心句时，应该怎么做？',
            options: ['跳过这段', '自己把关键意思合在一起概括', '随便写一句'],
            answer: '自己把关键意思合在一起概括',
            hint: '没有中心句怎么办',
            explanation: '没有明显中心句时，要把几个关键意思合在一起，用一句话概括就是段意。这是期末常考题！'
          },
          {
            id: 'c4u3l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：能概括整段意思的句子叫___句。',
            answer: '中心',
            hint: '[中心句]（语文四年级-第3单元）',
            explanation: '能概括整段意思的句子叫中心句，常在段首或段尾。这是本单元第一课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u3l2',
        title: '概括主要内容——要素串联法',
        order: 2,
        teachingMethod: '支架式：六要素概括法',
        learningObjective: '我能用要素串联法概括课文主要内容',
        successCriteria: '①能用要素串联法概括主要内容 ②概括准确简洁',
        content: [
          { type: 'text', content: '概括一篇文章的主要内容，可以用"要素串联法"。把故事的六个要素串成一句话，就是主要内容！', animationType: 'reveal' },
          { type: 'example', content: '六要素：\n时间——什么时候\n地点——在哪里\n人物——谁\n起因——为什么\n经过——做了什么\n结果——怎么样', label: '六要素', animationType: 'bounce' },
          { type: 'tip', content: '要素串联法公式：谁+在什么时间+什么地点+因为什么+做了什么+结果怎样。把六个要素串起来，就是主要内容！', label: '串联公式', animationType: 'pulse' },
          { type: 'example', content: '概括示例：\n原文：《小马过河》\n主要内容：一天（时间），小马（人物）在去磨坊的路上（地点），因为要过河却不知道深浅（起因），听了老牛和松鼠不同的话后自己亲自试了试（经过），发现河水既不深也不浅（结果）。', label: '概括示例', animationType: 'bounce' },
          { type: 'animation', content: '六要素依次出现连成一句话的动画，展示要素串联的过程', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '六要素串联成主要内容',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '时间：一天', emoji: '🕐', ttsNarration: '第一步找时间：一天。' },
                  { id: 's2', text: '地点：去磨坊的路上', emoji: '📍', ttsNarration: '第二步找地点：去磨坊的路上。' },
                  { id: 's3', text: '人物：小马', emoji: '🐴', ttsNarration: '第三步找人物：小马。' },
                  { id: 's4', text: '起因：要过河不知深浅', emoji: '❓', ttsNarration: '第四步找起因：要过河不知深浅。' },
                  { id: 's5', text: '经过：自己亲自试了试', emoji: '🏃', ttsNarration: '第五步找经过：自己亲自试了试。' },
                  { id: 's6', text: '结果：河水不深也不浅', emoji: '✅', ttsNarration: '第六步找结果：河水不深也不浅。串联起来就是主要内容！' },
                ],
              },
              ttsNarration: '六要素串联法：时间、地点、人物、起因、经过、结果，串成一句话就是主要内容。',
            },
          },
          { type: 'tip', content: '概括时要简练，不必每个要素都写很长，抓住关键就行。一句话说清最重要！', label: '概括技巧', animationType: 'pulse' },
          { type: 'text', content: '注意：不是所有文章都有六个要素，比如写景的文章可能没有人物和经过。要根据文章类型灵活运用。', animationType: 'reveal' },
        ],
        iDo: '家长示范用要素串联法概括《小马过河》的主要内容，边说边指出六个要素。',
        weDo: '亲子一起用要素法概括一篇短文的主要内容，互相补充。',
        youDo: '孩子独立用要素串联法概括一篇文章的主要内容。',
        parentTips: '【家长预习】概括一篇文章的主要内容，可以用"要素串联法"。把故事的六…\n共学四步：\n①对话出题：问孩子"概括主要内容的"六要素"不包括下列哪一项？"\n②孩子应答：六要素是时间、地点、人物、起因、经过、结果，不包括天气。\n③答错引导：家长可以教孩子用"找中心句法"——读一段找一句最能概括整段的话，没有中心句就自己总结\n④快速检测：概括主要内容的"六要素"不包括下列哪一项？、"谁"属于六要素中的哪一项？、要素串联法公式：谁+时间+地点+起因+经过+（…',
        funElement: '阅读小游戏：要素六兄弟！时间、地点、人物、起因、经过、结果手拉手，站成一排就是主要内容！',
        gsapAnimations: [
          '[GSAP:timeline|六要素依次出现连成一句话|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|每个要素高亮显示|0.4s|要素出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|六要素思维导图|500x300|思维导图风|png|6个要素节点]',
          '[IMG:illustration|要素串联公式图|500x200|教学风|png|公式图示]'
        ],
        practiceQuestions: [
          {
            id: 'c4u3l2q1',
            type: 'choice',
            question: '概括主要内容的"六要素"不包括下列哪一项？',
            options: ['时间', '人物', '天气'],
            answer: '天气',
            hint: '六要素有哪些',
            explanation: '六要素是时间、地点、人物、起因、经过、结果，不包括天气。'
          },
          {
            id: 'c4u3l2q2',
            type: 'choice',
            question: '"谁"属于六要素中的哪一项？',
            options: ['时间', '人物', '地点'],
            answer: '人物',
            hint: '"谁"是人物吗',
            explanation: '"谁"指的就是故事中的人物，是六要素之一。'
          },
          {
            id: 'c4u3l2q3',
            type: 'fill',
            question: '要素串联法公式：谁+时间+地点+起因+经过+___。',
            answer: '结果',
            hint: '最后一个要素',
            explanation: '要素串联法公式：谁+时间+地点+起因+经过+结果，串成一句话就是主要内容。'
          },
          {
            id: 'c4u3l2q4',
            type: 'choice',
            question: '概括主要内容时应该怎样？',
            options: ['越长越好', '简练抓住关键', '照抄原文'],
            answer: '简练抓住关键',
            hint: '主要内容要详细还是简练',
            explanation: '概括主要内容要简练，抓住关键，一句话说清最重要，不必照抄原文。'
          },
          {
            id: 'c4u3l2q5',
            type: 'drag',
            question: '把六要素按公式顺序排列：人物、地点、结果、时间、起因、经过',
            answer: '时间,地点,人物,起因,经过,结果',
            hint: '回忆串联公式',
            explanation: '六要素公式顺序：时间+地点+人物+起因+经过+结果。'
          },
          {
            id: 'c4u3l2q6',
            type: 'choice',
            question: '【期末真题】《龟兔赛跑》中，"兔子骄傲睡着了"属于六要素中的哪一项？',
            options: ['起因', '经过', '结果'],
            answer: '经过',
            hint: '这是发生了什么',
            explanation: '"兔子骄傲睡着了"是比赛过程中发生的事，属于经过。这是期末常考题！'
          },
          {
            id: 'c4u3l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：把六个要素串成一句话概括文章内容的方法叫___法。',
            answer: '要素串联',
            acceptableAnswers: ['要素串联', '串联'],
            hint: '[要素串联法]（语文四年级-第3单元）',
            explanation: '把六个要素串成一句话概括文章内容的方法叫要素串联法。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u3l3',
        title: '体会情感——找关键语句',
        order: 3,
        teachingMethod: '多感官：情感色彩标注',
        learningObjective: '我能通过找关键语句体会作者表达的情感',
        successCriteria: '①能找出表达情感的关键语句 ②能说出作者的情感',
        content: [
          { type: 'text', content: '读文章不仅要读懂内容，还要体会作者的情感。怎么体会呢？一个好方法就是找"关键语句"——那些能表达情感的句子和词语。', animationType: 'reveal' },
          { type: 'example', content: '情感关键语句示例：\n喜悦：他高兴得跳了起来，脸上笑开了花。\n悲伤：她的眼泪像断了线的珠子，一颗颗滚落。\n生气：他气得满脸通红，拳头攥得紧紧的。', label: '情感语句', animationType: 'bounce' },
          { type: 'tip', content: '体会情感三招：第一招找直接抒情句（"我真高兴"），第二招找描写句（动作、神态），第三招找反复强调的词。', label: '体会三招', animationType: 'pulse' },
          { type: 'example', content: '标注情感色彩：\n用红笔标喜悦的词：高兴、快乐、兴奋\n用蓝笔标悲伤的词：难过、伤心、哭泣\n用黑笔标生气的词：愤怒、气恼、发火', label: '色彩标注', animationType: 'bounce' },
          { type: 'animation', content: '情感关键词脉冲闪烁动画，点击词语时脉冲高亮显示情感色彩', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '不同情感的对比',
              compareConfig: {
                leftItems: ['喜悦', '高兴、快乐', '笑开了花', '跳了起来'],
                rightItems: ['悲伤', '难过、伤心', '泪如珠落', '低下了头'],
                result: 'close',
                resultText: '不同情感用不同的词语和动作来表达',
              },
              ttsNarration: '喜悦用高兴、笑开了花表达，悲伤用难过、泪如珠落表达。找关键语句就能体会情感！',
            },
          },
          { type: 'text', content: '有时候作者不直接说情感，而是通过景物来表达。比如"落叶飘零"表达悲伤，"阳光灿烂"表达喜悦，这叫"借景抒情"。', animationType: 'reveal' },
          { type: 'tip', content: '体会口诀：找直接，看描写，抓反复，借景物。四种方法找情感，作者心思全明白！', label: '体会口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范用不同颜色标注喜怒哀乐语句，让孩子直观看到情感关键词。',
        weDo: '亲子一起标注一段话的情感语句，互相讨论为什么这样标。',
        youDo: '孩子独立标注情感语句并体会作者情感。',
        parentTips: '【家长预习】读文章不仅要读懂内容，还要体会作者的情感。怎么体会呢？一…\n共学四步：\n①对话出题：问孩子"她的眼泪像断了线的珠子"表达了什么情感？"\n②孩子应答：眼泪像断了线的珠子，形容流泪很多，表达悲伤的情感。\n③答错引导：家长可以教孩子用"找关键词法"——圈出表达情感的词语，连起来体会作者心情\n④快速检测："她的眼泪像断了线的珠子"表达了什么情感？、"他高兴得跳了起来"中，哪个词直接表达了情感？、用红笔标（    ）的词，用蓝笔标悲伤的词。（…',
        funElement: '阅读小游戏：情感调色盘！给段落里的词语涂上对应的情感颜色，红色喜悦、蓝色悲伤，看你的文章是什么颜色！',
        gsapAnimations: [
          '[GSAP:highlight|情感关键词脉冲闪烁|0.6s|点击词语|power2.out]',
          '[GSAP:compare|不同情感对比展示|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|情感色彩标注示意图|500x300|教学风|png|彩色标注段落]',
          '[IMG:illustration|四种情感表情图|500x200|可爱卡通风|png|喜怒哀乐]'
        ],
        practiceQuestions: [
          {
            id: 'c4u3l3q1',
            type: 'choice',
            question: '"她的眼泪像断了线的珠子"表达了什么情感？',
            options: ['喜悦', '悲伤', '生气'],
            answer: '悲伤',
            hint: '流泪是什么情感',
            explanation: '眼泪像断了线的珠子，形容流泪很多，表达悲伤的情感。'
          },
          {
            id: 'c4u3l3q2',
            type: 'choice',
            question: '"他高兴得跳了起来"中，哪个词直接表达了情感？',
            options: ['他', '高兴', '跳了起来'],
            answer: '高兴',
            hint: '哪个词直接说情感',
            explanation: '"高兴"直接表达了喜悦的情感，是直接抒情词。'
          },
          {
            id: 'c4u3l3q3',
            type: 'fill',
            question: '用红笔标___的词，用蓝笔标悲伤的词。（填情感）',
            answer: '喜悦',
            acceptableAnswers: ['喜悦', '高兴', '快乐'],
            hint: '红色代表什么情感',
            explanation: '用红笔标喜悦的词（高兴、快乐），用蓝笔标悲伤的词（难过、伤心）。'
          },
          {
            id: 'c4u3l3q4',
            type: 'choice',
            question: '"落叶飘零"常用来表达什么情感？',
            options: ['喜悦', '悲伤', '生气'],
            answer: '悲伤',
            hint: '落叶给人什么感觉',
            explanation: '"落叶飘零"通过景物表达悲伤的情感，这叫借景抒情。'
          },
          {
            id: 'c4u3l3q5',
            type: 'drag',
            question: '把情感和关键语句配对：喜悦、悲伤、生气',
            answer: '笑开了花,泪如珠落,满脸通红',
            hint: '想想每种情感的描写',
            explanation: '喜悦—笑开了花，悲伤—泪如珠落，生气—满脸通红。'
          },
          {
            id: 'c4u3l3q6',
            type: 'choice',
            question: '【期末真题】"阳光灿烂，鸟儿歌唱"这句景物描写表达了什么情感？',
            options: ['悲伤', '喜悦', '害怕'],
            answer: '喜悦',
            hint: '阳光灿烂鸟儿歌唱给人什么感觉',
            explanation: '阳光灿烂、鸟儿歌唱描写美好的景象，表达喜悦的情感，这是借景抒情。这是期末常考题！'
          },
          {
            id: 'c4u3l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：通过景物描写来表达情感的方法叫___抒情。',
            answer: '借景',
            hint: '[借景抒情]（语文四年级-第3单元）',
            explanation: '通过景物描写来表达情感的方法叫借景抒情，如"落叶飘零"表达悲伤。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u3l4',
        title: '体会人物——从动作语言看性格',
        order: 4,
        teachingMethod: 'EDI：示范→合作→独立',
        learningObjective: '我能从动作和语言描写中分析人物性格特点',
        successCriteria: '①能找出描写人物的动作和语言 ②能概括人物性格特点',
        content: [
          { type: 'text', content: '读故事时，我们要了解人物是什么样的人。怎么看呢？从人物"做什么"（动作）和"说什么"（语言）就能推断出人物的性格！', animationType: 'reveal' },
          { type: 'example', content: '从动作看性格：\n他轻轻地把摔倒的同学扶起来，还帮着拍掉身上的灰。——说明他善良、热心。\n他一把抢过玩具，转身就跑。——说明他自私、粗鲁。', label: '动作看性格', animationType: 'bounce' },
          { type: 'example', content: '从语言看性格：\n"没关系，我再试试！"他笑着说。——说明他乐观、坚强。\n"都怪你！都怪你！"他大喊大叫。——说明他爱推卸责任、脾气差。', label: '语言看性格', animationType: 'bounce' },
          { type: 'tip', content: '分析人物三步法：第一步找人物的动作和语言，第二步想想这些说明什么性格，第三步用词语概括性格特点。', label: '分析三步法', animationType: 'pulse' },
          { type: 'animation', content: '人物形象卡逐步构建动画，动作+语言逐步出现最后形成性格特点', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '动作语言推断性格',
              compareConfig: {
                leftItems: ['动作：轻轻扶起同学', '动作：帮拍灰尘', '说明善良热心'],
                rightItems: ['语言：我再试试', '语言：笑着说', '说明乐观坚强'],
                result: 'close',
                resultText: '从动作和语言两个角度分析，人物性格就清楚了',
              },
              ttsNarration: '从动作看，轻轻扶起同学说明善良；从语言看，说"我再试试"说明乐观。动作和语言共同展现人物性格！',
            },
          },
          { type: 'text', content: '分析人物时，要把动作、语言和具体情境结合起来。同样是"跑"，逃命时跑说明害怕，比赛时跑说明努力。', animationType: 'reveal' },
          { type: 'tip', content: '性格词语积累：善良、热心、勇敢、诚实、乐观、坚强、自私、粗鲁、胆小、懒惰。多用这些词概括性格！', label: '性格词语', animationType: 'pulse' },
        ],
        iDo: '家长示范从人物动作分析性格，边分析边说出推断过程。',
        weDo: '亲子一起分析一个人物，从动作和语言两方面推断性格。',
        youDo: '孩子独立分析一个人物的性格特点，写出依据。',
        parentTips: '【家长预习】读故事时，我们要了解人物是什么样的人。怎么看呢？从人物"…\n共学四步：\n①对话出题：问孩子"他轻轻地把摔倒的同学扶起来"说明他什么性格？"\n②孩子应答：轻轻扶起摔倒的同学，说明他善良、热心，愿意帮助别人。\n③答错引导：家长可以教孩子用"画人物卡片法"——写下人物做的事说的话，再总结性格\n④快速检测："他轻轻地把摔倒的同学扶起来"说明他什么性格？、"没关系，我再试试！"这句话说明人物什么性格？、分析人物要从人物的（    ）和语言两方面看。…',
        funElement: '阅读小游戏：人物性格侦探！给你一段描写，你来当侦探，从动作和语言里推断人物是什么样的人！',
        gsapAnimations: [
          '[GSAP:sceneBuild|人物形象卡逐步构建|1s|页面加载|power2.out]',
          '[GSAP:compare|动作与语言对比分析|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|人物分析卡：动作+语言→性格|500x350|思维导图风|png|人物分析模板]',
          '[IMG:illustration|性格词语汇总表|500x300|教学风|png|性格词语]'
        ],
        practiceQuestions: [
          {
            id: 'c4u3l4q1',
            type: 'choice',
            question: '"他轻轻地把摔倒的同学扶起来"说明他什么性格？',
            options: ['自私', '善良热心', '胆小'],
            answer: '善良热心',
            hint: '扶起同学说明什么',
            explanation: '轻轻扶起摔倒的同学，说明他善良、热心，愿意帮助别人。'
          },
          {
            id: 'c4u3l4q2',
            type: 'choice',
            question: '"没关系，我再试试！"这句话说明人物什么性格？',
            options: ['乐观坚强', '胆小怕事', '自私粗鲁'],
            answer: '乐观坚强',
            hint: '失败了还愿意再试',
            explanation: '"我再试试"说明遇到困难不放弃，性格乐观坚强。'
          },
          {
            id: 'c4u3l4q3',
            type: 'fill',
            question: '分析人物要从人物的___和语言两方面看。（填"动作"或"外貌"）',
            answer: '动作',
            hint: '做什么和说什么',
            explanation: '分析人物要从动作（做什么）和语言（说什么）两方面看，推断性格特点。'
          },
          {
            id: 'c4u3l4q4',
            type: 'choice',
            question: '"他一把抢过玩具，转身就跑"说明他什么性格？',
            options: ['善良', '自私粗鲁', '勇敢'],
            answer: '自私粗鲁',
            hint: '抢东西跑掉说明什么',
            explanation: '一把抢过玩具转身就跑，动作粗鲁，说明他自私、粗鲁。'
          },
          {
            id: 'c4u3l4q5',
            type: 'drag',
            question: '把描写和性格配对：轻轻扶人、抢玩具、说"我再试试"、大喊"都怪你"',
            answer: '善良,自私,乐观,推卸责任',
            hint: '想想每个描写说明什么',
            explanation: '轻轻扶人—善良，抢玩具—自私，说"我再试试"—乐观，大喊"都怪你"—推卸责任。'
          },
          {
            id: 'c4u3l4q6',
            type: 'choice',
            question: '【期末真题】分析人物性格时，最重要的是什么？',
            options: ['只看外貌', '从动作语言找依据', '凭感觉猜'],
            answer: '从动作语言找依据',
            hint: '分析要有依据',
            explanation: '分析人物性格要从动作和语言中找依据，不能只看外貌或凭感觉猜。这是期末常考题！'
          },
          {
            id: 'c4u3l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：从人物的"做什么"和"说什么"能推断人物的___。',
            answer: '性格',
            acceptableAnswers: ['性格', '性格特点'],
            hint: '[人物分析]（语文四年级-第3单元）',
            explanation: '从人物的"做什么"（动作）和"说什么"（语言）能推断人物的性格特点。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u3l5',
        title: '阅读理解综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        content: [
          { type: 'text', content: '前面我们学习了概括段意、概括主要内容、体会情感和分析人物。现在综合运用这些方法，完成阅读理解挑战！', animationType: 'reveal' },
          { type: 'example', content: '综合阅读步骤：\n第一遍读通——了解大意\n第二遍读懂——概括内容和段意\n第三遍读透——体会情感和分析人物\n这就是"三遍阅读法"！', label: '三遍阅读法', animationType: 'bounce' },
          { type: 'tip', content: '答题技巧：概括题用要素串联法，情感题找关键语句，人物题从动作语言分析。对症下药，答题不慌！', label: '答题技巧', animationType: 'pulse' },
          { type: 'example', content: '常见题型：\n1. 这段话的中心句是哪句？（找中心句）\n2. 概括文章主要内容。（要素串联法）\n3. 体会作者的情感。（找关键语句）\n4. 分析人物的性格特点。（动作+语言）', label: '常见题型', animationType: 'bounce' },
          { type: 'animation', content: '阅读理解综合检测动画，正确率滚动显示', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '阅读方法对比',
              compareConfig: {
                leftItems: ['概括段意', '找中心句', '三步法'],
                rightItems: ['体会情感', '找关键语句', '色彩标注'],
                result: 'close',
                resultText: '不同题型用不同方法，综合运用才能做好阅读理解',
              },
              ttsNarration: '概括段意找中心句，体会情感找关键语句，分析人物看动作语言。综合运用，阅读理解没问题！',
            },
          },
          { type: 'tip', content: '复习口诀：找中心概括段，用要素串内容，抓关键体会情，看动作析人物。四招在手，阅读无忧！', label: '复习口诀', animationType: 'pulse' },
          { type: 'text', content: '做阅读理解时，先通读全文了解大意，再带着问题回读找答案，最后检查答案是否完整。', animationType: 'reveal' },
        ],
        iDo: '家长示范完成一篇阅读理解题，边做边讲解思路。',
        weDo: '亲子一起做一篇阅读理解，讨论每道题的解题方法。',
        youDo: '孩子独立完成2篇阅读理解，正确率达到75%以上。',
        parentTips: '【家长预习】前面我们学习了概括段意、概括主要内容、体会情感和分析人物…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '阅读小游戏：阅读大闯关！过四关——概括关、内容关、情感关、人物关，全过就是阅读大王！歇后语：读书破万卷——下笔如有神！',
        gsapAnimations: [
          '[GSAP:highlight|阅读进度条|0.3s|自动播放|power1.inOut]',
          '[GSAP:confetti|通关撒花|2s|正确率达标|power1.out]'
        ],
        images: [
          '[IMG:illustration|阅读理解达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|三遍阅读法示意图|500x200|教学风|png|三步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u3l5q1',
            type: 'choice',
            question: '概括段意要用什么方法？',
            options: ['要素串联法', '找中心句三步法', '色彩标注法'],
            answer: '找中心句三步法',
            hint: '回忆第一课',
            explanation: '概括段意用找中心句三步法：读全段→找中心句→用自己的话说。'
          },
          {
            id: 'c4u3l5q2',
            type: 'choice',
            question: '概括主要内容用什么方法？',
            options: ['要素串联法', '找中心句', '借景抒情'],
            answer: '要素串联法',
            hint: '回忆第二课',
            explanation: '概括主要内容用要素串联法：时间+地点+人物+起因+经过+结果。'
          },
          {
            id: 'c4u3l5q3',
            type: 'fill',
            question: '体会情感要找___语句。',
            answer: '关键',
            hint: '回忆第三课',
            explanation: '体会情感要找关键语句，包括直接抒情句、描写句和反复强调的词。'
          },
          {
            id: 'c4u3l5q4',
            type: 'choice',
            question: '分析人物性格要从哪两方面看？',
            options: ['外貌和衣着', '动作和语言', '年龄和性别'],
            answer: '动作和语言',
            hint: '回忆第四课',
            explanation: '分析人物性格要从动作（做什么）和语言（说什么）两方面看。'
          },
          {
            id: 'c4u3l5q5',
            type: 'drag',
            question: '把题型和方法配对：概括段意、概括内容、体会情感、分析人物',
            answer: '找中心句,要素串联,找关键语句,看动作语言',
            hint: '回忆每课的方法',
            explanation: '概括段意—找中心句，概括内容—要素串联，体会情感—找关键语句，分析人物—看动作语言。'
          },
          {
            id: 'c4u3l5q6',
            type: 'choice',
            question: '【期末真题】做阅读理解时，应该先做什么？',
            options: ['直接看题目', '先通读全文了解大意', '随便翻翻'],
            answer: '先通读全文了解大意',
            hint: '先了解全文再答题',
            explanation: '做阅读理解要先通读全文了解大意，再带着问题回读找答案。这是期末常考题！'
          },
          {
            id: 'c4u3l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：先通读了解大意，再带着问题回读找答案的方法叫___阅读法。',
            answer: '三遍',
            hint: '[三遍阅读法]（语文四年级-第3单元）',
            explanation: '先读通、再读懂、最后读透的三遍阅读法，是做阅读理解的好方法。这是本单元学过的知识。'
          }
        ]
      }
    ]
  },
  // ==================== 第四单元：记叙文写作 ====================
  {
    id: 'c4u4',
    title: '记叙文写作',
    subtitle: '写事记叙文，把事情写清楚写生动',
    order: 4,
    lessons: [
      {
        id: 'c4u4l1',
        title: '记叙文六要素',
        order: 1,
        teachingMethod: '积木作文法升级版',
        learningObjective: '我能掌握记叙文六要素，把事情的起因经过结果写清楚',
        successCriteria: '①作文包含时间地点人物起因经过结果 ②事情经过写清楚',
        content: [
          { type: 'text', content: '写记叙文就像搭积木，要有六块"积木"才能搭出完整的故事。这六块积木就是"记叙文六要素"！', animationType: 'reveal' },
          { type: 'example', content: '记叙文六要素（六块积木）：\n时间——什么时候发生的\n地点——在哪里发生的\n人物——有谁参与\n起因——为什么发生\n经过——怎么发生的\n结果——最后怎么样了', label: '六要素积木', animationType: 'bounce' },
          { type: 'tip', content: '积木作文法：先搭框架再填内容。把六要素像积木一样叠起来，框架就有了，再往里面填细节就生动了！', label: '积木作文法', animationType: 'pulse' },
          { type: 'example', content: '框架示例：\n时间：上周六上午\n地点：公园里\n人物：我和爸爸\n起因：我们去放风筝\n经过：风筝飞得很高，线突然断了\n结果：风筝飞走了，但爸爸说下次再买一个', label: '作文框架', animationType: 'bounce' },
          { type: 'animation', content: '六块积木依次叠起构建记叙文框架的动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '记叙文六要素积木',
              sceneBuildConfig: {
                sceneName: '记叙文框架',
                elements: [
                  { text: '时间', x: 50, y: 15, animation: 'bounceIn', delay: 0, color: '#FF6B6B', ttsText: '第一块积木：时间。' },
                  { text: '地点', x: 50, y: 30, animation: 'bounceIn', delay: 0.25, color: '#4ECDC4', ttsText: '第二块积木：地点。' },
                  { text: '人物', x: 50, y: 45, animation: 'bounceIn', delay: 0.5, color: '#FFE66D', ttsText: '第三块积木：人物。' },
                  { text: '起因', x: 50, y: 60, animation: 'bounceIn', delay: 0.75, color: '#95E1D3', ttsText: '第四块积木：起因。' },
                  { text: '经过', x: 50, y: 75, animation: 'bounceIn', delay: 1, color: '#C9B1FF', ttsText: '第五块积木：经过。' },
                  { text: '结果', x: 50, y: 90, animation: 'bounceIn', delay: 1.25, color: '#FFB6C1', ttsText: '第六块积木：结果。六块积木叠好，框架就完成啦！' },
                ]
              },
              ttsNarration: '记叙文六要素：时间、地点、人物、起因、经过、结果。六块积木叠起来，故事框架就搭好了！',
            },
          },
          { type: 'text', content: '有了框架，再把每块积木"填满"——加上具体细节，比如时间可以写"阳光明媚的上周六上午"，比"上周六"更生动。', animationType: 'reveal' },
          { type: 'tip', content: '写作口诀：六块积木搭框架，时间地点和人物，起因经过加结果，先搭框架再填肉！', label: '写作口诀', animationType: 'pulse' },
        ],
        iDo: '家长用积木搭建"时间+地点+人物+起因+经过+结果"框架，示范先说后写。',
        weDo: '亲子一起搭框架，家长说一个要素，孩子接下一个。',
        youDo: '孩子独立搭一个记叙文框架，把六要素写下来。',
        parentTips: '【家长预习】写记叙文就像搭积木，要有六块"积木"才能搭出完整的故事。…\n共学四步：\n①对话出题：问孩子"记叙文六要素不包括下列哪一项？"\n②孩子应答：记叙文六要素是时间、地点、人物、起因、经过、结果，不包括天气。\n③答错引导：家长可以让孩子先列提纲再写，用"提纲引导法"——先写几个关键词，再扩展成句\n④快速检测：记叙文六要素不包括下列哪一项？、"我们去放风筝"属于六要素中的哪一项？、记叙文六要素：时间、地点、人物、起因、经过、（…',
        funElement: '写作小游戏：积木叠叠乐！六块积木叠起来，少一块故事就倒了！歇后语：万丈高楼平地起——从头来！',
        gsapAnimations: [
          '[GSAP:sceneBuild|六块积木依次叠起|1.5s|点击播放|bounce.out]',
          '[GSAP:timeline|六要素逐步构建框架|1.2s|框架完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|记叙文六要素积木图|500x300|教学风|png|6块彩色积木]',
          '[IMG:illustration|积木作文法流程图|500x200|教学风|png|框架流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u4l1q1',
            type: 'choice',
            question: '记叙文六要素不包括下列哪一项？',
            options: ['时间', '天气', '人物'],
            answer: '天气',
            hint: '六要素有哪些',
            explanation: '记叙文六要素是时间、地点、人物、起因、经过、结果，不包括天气。'
          },
          {
            id: 'c4u4l1q2',
            type: 'choice',
            question: '"我们去放风筝"属于六要素中的哪一项？',
            options: ['起因', '经过', '结果'],
            answer: '经过',
            hint: '这是事情的发展过程',
            explanation: '"我们去放风筝"是事情的发展过程，属于经过。'
          },
          {
            id: 'c4u4l1q3',
            type: 'fill',
            question: '记叙文六要素：时间、地点、人物、起因、经过、___。',
            answer: '结果',
            hint: '最后一个要素',
            explanation: '记叙文六要素：时间、地点、人物、起因、经过、结果。'
          },
          {
            id: 'c4u4l1q4',
            type: 'choice',
            question: '积木作文法的第一步是什么？',
            options: ['直接写全文', '搭框架', '写结尾'],
            answer: '搭框架',
            hint: '先搭什么',
            explanation: '积木作文法第一步是搭框架，把六要素像积木叠起来，再填细节。'
          },
          {
            id: 'c4u4l1q5',
            type: 'drag',
            question: '把六要素按写作顺序排列：结果、时间、经过、地点、起因、人物',
            answer: '时间,地点,人物,起因,经过,结果',
            hint: '回忆写作顺序',
            explanation: '六要素写作顺序：时间→地点→人物→起因→经过→结果。'
          },
          {
            id: 'c4u4l1q6',
            type: 'choice',
            question: '【期末真题】"阳光明媚的上周六上午"比"上周六"好在哪里？',
            options: ['字数多', '更具体生动', '更简单'],
            answer: '更具体生动',
            hint: '多了什么描写',
            explanation: '"阳光明媚的上周六上午"加了天气和时段描写，更具体生动。这是期末常考题！'
          },
          {
            id: 'c4u4l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：写记叙文要先搭___再填内容。',
            answer: '框架',
            hint: '[积木作文法]（语文四年级-第4单元）',
            explanation: '写记叙文要先搭框架（六要素），再填具体内容。这是积木作文法。本单元第一课学过。'
          }
        ]
      },
      {
        id: 'c4u4l2',
        title: '把事情写清楚——经过详写',
        order: 2,
        teachingMethod: '支架式：经过展开三问法',
        learningObjective: '我能把事情的经过写清楚，做到详略得当',
        successCriteria: '①经过部分详写，起因结果略写 ②叙事清楚完整',
        content: [
          { type: 'text', content: '记叙文中，"经过"是最重要的部分，要详细写。怎么把经过写清楚呢？用"经过展开三问法"！', animationType: 'reveal' },
          { type: 'example', content: '经过展开三问法：\n先做了什么？\n然后做了什么？\n最后做了什么？\n用"先→然后→最后"把经过一步一步写清楚。', label: '三问法', animationType: 'bounce' },
          { type: 'tip', content: '经过详写秘诀：经过是故事的"肉"，要写得多、写得细。起因和结果可以简略，经过一定要详细！', label: '详写秘诀', animationType: 'pulse' },
          { type: 'example', content: '经过展开示例：\n简单：我放风筝。\n详写：我先拿着线轴跑起来，然后一边跑一边放线，风筝慢慢飞了起来。最后我停下来，不停地拽线，风筝越飞越高！', label: '经过展开', animationType: 'bounce' },
          { type: 'animation', content: '经过三步骤依次出现的动画，先→然后→最后逐步展示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '经过展开三步',
              sceneBuildConfig: {
                sceneName: '放风筝经过',
                elements: [
                  { text: '先：拿着线轴跑起来', x: 20, y: 30, animation: 'slideIn', delay: 0, ttsText: '先：我拿着线轴跑起来。' },
                  { text: '然后：一边跑一边放线', x: 50, y: 50, animation: 'slideIn', delay: 0.5, ttsText: '然后：一边跑一边放线，风筝慢慢飞起来。' },
                  { text: '最后：停下拽线越飞越高', x: 80, y: 70, animation: 'slideIn', delay: 1, ttsText: '最后：停下来不停拽线，风筝越飞越高！' },
                ]
              },
              ttsNarration: '经过展开三问法：先做了什么，然后做了什么，最后做了什么。一步步写清楚经过！',
            },
          },
          { type: 'text', content: '写经过时，每一步都可以加细节。比如"跑起来"可以写"飞快地跑起来"，"放线"可以写"小心翼翼地放线"，让经过更生动。', animationType: 'reveal' },
          { type: 'tip', content: '经过口诀：先然后最后，三步写经过。每步加细节，经过才生动。详写经过，简写起因结果！', label: '经过口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范用"先→然后→最后"展开经过，边说边写出每一步。',
        weDo: '亲子一起展开一个经过，家长说第一步，孩子接第二步。',
        youDo: '孩子独立展开经过写一段话，用三问法。',
        parentTips: '【家长预习】记叙文中，"经过"是最重要的部分，要详细写。怎么把经过写…\n共学四步：\n①对话出题：问孩子"记叙文中哪个部分要详写？"\n②孩子应答：经过是故事的"肉"，要详写。起因和结果可以简略。\n③答错引导：家长可以让孩子先口头讲一遍事情经过，用"先讲后写法"——讲清楚再动笔\n④快速检测：记叙文中哪个部分要详写？、经过展开三问法用哪三个词连接？、经过展开三问法：先做了什么？（    ）做了什…',
        funElement: '写作小游戏：经过大展开！"我吃饭"太简单，用三问法展开成"我先拿起筷子，然后夹起一块肉，最后大口吃了起来"！',
        gsapAnimations: [
          '[GSAP:sceneBuild|经过三步骤依次出现|1s|点击播放|power2.out]',
          '[GSAP:timeline|经过展开流程|1s|步骤出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|经过展开流程图|500x200|教学风|png|先然后最后]',
          '[IMG:illustration|经过详写对比图|500x300|教学风|png|简单vs详写]'
        ],
        practiceQuestions: [
          {
            id: 'c4u4l2q1',
            type: 'choice',
            question: '记叙文中哪个部分要详写？',
            options: ['起因', '经过', '时间'],
            answer: '经过',
            hint: '哪部分是故事的肉',
            explanation: '经过是故事的"肉"，要详写。起因和结果可以简略。'
          },
          {
            id: 'c4u4l2q2',
            type: 'choice',
            question: '经过展开三问法用哪三个词连接？',
            options: ['因为所以虽然', '先然后最后', '虽然但是而且'],
            answer: '先然后最后',
            hint: '回忆三问法',
            explanation: '经过展开三问法用"先→然后→最后"连接，把经过一步步写清楚。'
          },
          {
            id: 'c4u4l2q3',
            type: 'fill',
            question: '经过展开三问法：先做了什么？___做了什么？最后做了什么？',
            answer: '然后',
            hint: '中间用什么词',
            explanation: '经过展开三问法：先做了什么？然后做了什么？最后做了什么？'
          },
          {
            id: 'c4u4l2q4',
            type: 'choice',
            question: '"我放风筝"展开后应该是？',
            options: ['我放了风筝', '我先拿着线轴跑起来，然后一边跑一边放线，最后风筝飞了起来', '风筝飞了'],
            answer: '我先拿着线轴跑起来，然后一边跑一边放线，最后风筝飞了起来',
            hint: '用三问法展开',
            explanation: '用三问法展开，先然后最后一步步写，比"我放风筝"详细生动得多。'
          },
          {
            id: 'c4u4l2q5',
            type: 'drag',
            question: '把放风筝经过按三问法排序：最后停下拽线、先拿着线轴跑、然后一边跑一边放线',
            answer: '先拿着线轴跑,然后一边跑一边放线,最后停下拽线',
            hint: '回忆三问法顺序',
            explanation: '经过顺序：先拿着线轴跑→然后一边跑一边放线→最后停下拽线。'
          },
          {
            id: 'c4u4l2q6',
            type: 'choice',
            question: '【期末真题】写经过时，"跑起来"怎样写更生动？',
            options: ['跑起来', '飞快地跑起来', '跑了'],
            answer: '飞快地跑起来',
            hint: '加什么词更生动',
            explanation: '加"飞快地"修饰，比"跑起来"更具体生动。写经过要加细节。这是期末常考题！'
          },
          {
            id: 'c4u4l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：用"先→然后→最后"展开经过的方法叫___法。',
            answer: '经过展开三问',
            acceptableAnswers: ['经过展开三问', '三问'],
            hint: '[经过展开三问法]（语文四年级-第4单元）',
            explanation: '用"先→然后→最后"展开经过的方法叫经过展开三问法。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u4l3',
        title: '把事情写生动——动作描写',
        order: 3,
        teachingMethod: '多感官：动作分解法',
        learningObjective: '我能用动作描写把事情经过写生动',
        successCriteria: '①至少使用3处动作描写 ②动作描写准确生动',
        content: [
          { type: 'text', content: '怎么把事情写得更生动？秘诀就是"动作描写"！把一个动作分解成几个小动作，就像慢镜头回放，让读者看得清清楚楚。', animationType: 'reveal' },
          { type: 'example', content: '动作分解法：\n简单：他跑了。\n分解：他猛地蹬地，双臂用力摆动，像箭一样冲了出去。\n把"跑"分解成"蹬地→摆臂→冲出"三个小动作。', label: '动作分解', animationType: 'bounce' },
          { type: 'tip', content: '动作分解法：把一个动作拆成3-5个小动作，用准确的动词，加上修饰词，动作就生动了！', label: '分解技巧', animationType: 'pulse' },
          { type: 'example', content: '更多动作分解：\n吃：拿起筷子→夹起菜→送进嘴里→细细咀嚼\n写：握紧铅笔→端正坐好→一笔一画地写\n跳：弯下膝盖→用力一蹬→腾空而起→稳稳落地', label: '动作分解示例', animationType: 'bounce' },
          { type: 'animation', content: '动作描写逐步展开动画，把"他跑了"分解成三个小动作', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '动作分解：跑步',
              sceneBuildConfig: {
                sceneName: '跑步动作分解',
                elements: [
                  { text: '猛地蹬地', x: 20, y: 30, animation: 'scaleIn', delay: 0, color: '#FF6B6B', ttsText: '第一步：他猛地蹬地。' },
                  { text: '双臂用力摆动', x: 50, y: 50, animation: 'scaleIn', delay: 0.5, color: '#4ECDC4', ttsText: '第二步：双臂用力摆动。' },
                  { text: '像箭一样冲出去', x: 80, y: 70, animation: 'scaleIn', delay: 1, color: '#FFE66D', ttsText: '第三步：像箭一样冲了出去！' },
                ]
              },
              ttsNarration: '动作分解法：把跑分解成蹬地、摆臂、冲出三个小动作，动作就生动了！',
            },
          },
          { type: 'text', content: '动作描写还要用准确的动词。比如"拿"可以说"捧、握、抓、捏"，每个词感觉不同。"捧"很小心，"抓"很急。', animationType: 'reveal' },
          { type: 'tip', content: '动作口诀：一个动作拆几个，准确动词加上去，修饰词儿来帮忙，慢镜头般真生动！', label: '动作口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范把"他跑了"分解为"他猛地蹬地，双臂用力摆动，像箭一样冲了出去"。',
        weDo: '亲子一起分解动作，家长说一个动作，孩子分解成小动作。',
        youDo: '孩子独立分解动作写一段话。',
        parentTips: '【家长预习】怎么把事情写得更生动？秘诀就是"动作描写"！把一个动作分…\n共学四步：\n①对话出题：问孩子"他跑了"用动作分解法应该怎么写更生动？"\n②孩子应答：动作分解法把"跑"分解成"蹬地→摆臂→冲出"三个小动作，更生动。\n③答错引导：家长可以让孩子先口头讲一遍事情经过，用"先讲后写法"——讲清楚再动笔\n④快速检测："他跑了"用动作分解法应该怎么写更生动？、动作分解法要把一个动作拆成几个小动作？、把"吃"分解：拿起筷子→夹起菜→送进嘴里→细细…',
        funElement: '写作小游戏：慢镜头回放！"他吃饭"太无聊，分解成"他拿起筷子，夹起一块红烧肉，送进嘴里，细细咀嚼，满意地点了点头"！',
        gsapAnimations: [
          '[GSAP:sceneBuild|动作描写逐步展开|0.8s|点击展开|power2.out]',
          '[GSAP:highlight|动词关键词高亮|0.4s|动作出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|动作分解图：跑步=蹬地+摆臂+冲出|500x200|可爱卡通风|png|3步分解]',
          '[IMG:illustration|准确动词对比表|500x300|教学风|png|动词对比]'
        ],
        practiceQuestions: [
          {
            id: 'c4u4l3q1',
            type: 'choice',
            question: '"他跑了"用动作分解法应该怎么写更生动？',
            options: ['他跑了', '他猛地蹬地，双臂用力摆动，像箭一样冲了出去', '他跑得快'],
            answer: '他猛地蹬地，双臂用力摆动，像箭一样冲了出去',
            hint: '把跑分解成小动作',
            explanation: '动作分解法把"跑"分解成"蹬地→摆臂→冲出"三个小动作，更生动。'
          },
          {
            id: 'c4u4l3q2',
            type: 'choice',
            question: '动作分解法要把一个动作拆成几个小动作？',
            options: ['1个', '3-5个', '10个'],
            answer: '3-5个',
            hint: '回忆分解技巧',
            explanation: '动作分解法把一个动作拆成3-5个小动作，用准确动词加修饰词。'
          },
          {
            id: 'c4u4l3q3',
            type: 'fill',
            question: '把"吃"分解：拿起筷子→夹起菜→送进嘴里→细细___。',
            answer: '咀嚼',
            hint: '吃最后一步',
            explanation: '把"吃"分解成：拿起筷子→夹起菜→送进嘴里→细细咀嚼。'
          },
          {
            id: 'c4u4l3q4',
            type: 'choice',
            question: '"捧"和"抓"哪个感觉更小心？',
            options: ['捧', '抓', '一样'],
            answer: '捧',
            hint: '想想捧东西和抓东西',
            explanation: '"捧"用双手小心地托着，感觉更小心；"抓"动作急促快速。'
          },
          {
            id: 'c4u4l3q5',
            type: 'drag',
            question: '把"跳"的动作按顺序分解：腾空而起、弯下膝盖、稳稳落地、用力一蹬',
            answer: '弯下膝盖,用力一蹬,腾空而起,稳稳落地',
            hint: '跳跃的顺序',
            explanation: '跳的动作顺序：弯下膝盖→用力一蹬→腾空而起→稳稳落地。'
          },
          {
            id: 'c4u4l3q6',
            type: 'choice',
            question: '【期末真题】下列哪句动作描写最生动？',
            options: ['他写字', '他握紧铅笔，端正坐好，一笔一画地写', '他在写'],
            answer: '他握紧铅笔，端正坐好，一笔一画地写',
            hint: '找分解最多最细的',
            explanation: '第二句把"写字"分解成握笔、坐好、一笔一画写，用了准确动词和修饰词，最生动。这是期末常考题！'
          },
          {
            id: 'c4u4l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：把一个动作拆成几个小动作的方法叫___法。',
            answer: '动作分解',
            acceptableAnswers: ['动作分解', '分解'],
            hint: '[动作分解法]（语文四年级-第4单元）',
            explanation: '把一个动作拆成3-5个小动作的方法叫动作分解法。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u4l4',
        title: '把事情写有趣——对话描写',
        order: 4,
        teachingMethod: '情境式：对话剧场',
        learningObjective: '我能用对话描写把事情写有趣',
        successCriteria: '①至少使用2处对话描写 ②对话格式正确，内容有趣',
        content: [
          { type: 'text', content: '写记叙文时，加上人物对话能让文章更生动有趣。对话怎么写呢？记住"提示语+说的话"的格式！', animationType: 'reveal' },
          { type: 'example', content: '对话格式：\n提示语在前：妈妈笑着说："今天吃什么？"\n提示语在后："今天吃什么？"妈妈笑着说。\n提示语在中："今天，"妈妈笑着说，"吃什么？"', label: '对话格式', animationType: 'bounce' },
          { type: 'tip', content: '对话三要素：提示语（谁说的+怎么说）+冒号或逗号+说的话（用引号引起来）。三个要素缺一不可！', label: '对话三要素', animationType: 'pulse' },
          { type: 'example', content: '对话描写示例：\n"太好了！"小明高兴地跳了起来，"明天去春游！"\n妈妈摸了摸我的头说："别忘了带水壶。"\n我大声回答："知道啦！"', label: '对话示例', animationType: 'bounce' },
          { type: 'animation', content: '对话气泡依次弹出动画，展示提示语+说的话的格式', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '对话气泡弹出',
              sceneBuildConfig: {
                sceneName: '对话场景',
                elements: [
                  { text: '"太好了！"小明高兴地跳了起来', x: 30, y: 30, animation: 'popIn', delay: 0, color: '#FF6B6B', ttsText: '小明说：太好了！' },
                  { text: '妈妈说："别忘了带水壶"', x: 60, y: 50, animation: 'popIn', delay: 0.5, color: '#4ECDC4', ttsText: '妈妈说：别忘了带水壶。' },
                  { text: '我回答："知道啦！"', x: 40, y: 70, animation: 'popIn', delay: 1, color: '#FFE66D', ttsText: '我回答：知道啦！' },
                ]
              },
              ttsNarration: '对话描写：提示语加说的话，用引号引起来。对话让文章更有趣！',
            },
          },
          { type: 'text', content: '写对话时，提示语要变化位置，不要每次都放在前面。可以前面、后面、中间交替使用，文章才不单调。', animationType: 'reveal' },
          { type: 'tip', content: '对话口诀：提示语加说的话，引号冒号不能少。提示语要换位置，前后中间轮流用！', label: '对话口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范写对话（提示语+说的话），用不同语气朗读对话。',
        weDo: '亲子一起演对话剧场，分角色演一段对话，然后写下来。',
        youDo: '孩子独立写一段对话，用三种提示语位置。',
        parentTips: '【家长预习】写记叙文时，加上人物对话能让文章更生动有趣。对话怎么写呢…\n共学四步：\n①对话出题：问孩子"对话描写的三要素是什么？"\n②孩子应答：对话三要素：提示语（谁说的+怎么说）+冒号或逗号+说的话（用引号引起来）。\n③答错引导：家长可以让孩子先口头讲一遍事情经过，用"先讲后写法"——讲清楚再动笔\n④快速检测：对话描写的三要素是什么？、"妈妈笑着说：今天吃什么？"这句对话中，"妈妈…、说的话要用（    ）号引起来。',
        funElement: '写作小游戏：对话剧场！和爸爸妈妈演一段对话，然后写下来。比比谁演得好、写得好！',
        gsapAnimations: [
          '[GSAP:sceneBuild|对话气泡依次弹出|0.5s|点击播放|bounce.out]',
          '[GSAP:highlight|提示语和引号高亮|0.4s|气泡出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|对话描写格式示意图|500x300|教学风|png|提示语+引号格式]',
          '[IMG:illustration|对话气泡场景图|500x200|可爱卡通风|png|对话气泡]'
        ],
        practiceQuestions: [
          {
            id: 'c4u4l4q1',
            type: 'choice',
            question: '对话描写的三要素是什么？',
            options: ['时间地点人物', '提示语+标点+说的话', '起因经过结果'],
            answer: '提示语+标点+说的话',
            hint: '回忆对话三要素',
            explanation: '对话三要素：提示语（谁说的+怎么说）+冒号或逗号+说的话（用引号引起来）。'
          },
          {
            id: 'c4u4l4q2',
            type: 'choice',
            question: '"妈妈笑着说：今天吃什么？"这句对话中，"妈妈笑着说"是什么？',
            options: ['说的话', '提示语', '结果'],
            answer: '提示语',
            hint: '提示语是什么',
            explanation: '"妈妈笑着说"是提示语，告诉读者谁说的、怎么说的。'
          },
          {
            id: 'c4u4l4q3',
            type: 'fill',
            question: '说的话要用___号引起来。',
            answer: '引',
            hint: '什么标点引住说的话',
            explanation: '说的话要用引号（""）引起来，这是对话描写的格式要求。'
          },
          {
            id: 'c4u4l4q4',
            type: 'choice',
            question: '写对话时，提示语的位置应该怎样？',
            options: ['只放前面', '前后中间轮流用', '只放后面'],
            answer: '前后中间轮流用',
            hint: '提示语要不要变化',
            explanation: '提示语要变化位置，前面、后面、中间交替使用，文章才不单调。'
          },
          {
            id: 'c4u4l4q5',
            type: 'drag',
            question: '把对话三要素按顺序排列：说的话、标点、提示语',
            answer: '提示语,标点,说的话',
            hint: '回忆对话格式',
            explanation: '对话三要素顺序：提示语→标点（冒号或逗号）→说的话（引号引起来）。'
          },
          {
            id: 'c4u4l4q6',
            type: 'choice',
            question: '【期末真题】下列对话描写格式正确的是？',
            options: ['妈妈说今天吃什么', '妈妈笑着说："今天吃什么？"', '妈妈说今天吃什么？'],
            answer: '妈妈笑着说："今天吃什么？"',
            hint: '找有提示语和引号的',
            explanation: '正确格式是"提示语+冒号+说的话（引号）"，所以"妈妈笑着说：今天吃什么？"正确。这是期末常考题！'
          },
          {
            id: 'c4u4l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：对话描写由提示语和说的话组成，说的话要用___号引起来。',
            answer: '引',
            hint: '[对话描写]（语文四年级-第4单元）',
            explanation: '对话描写中说的话要用引号引起来，格式为提示语+标点+说的话。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u4l5',
        title: '写事记叙文综合写作',
        order: 5,
        teachingMethod: '形成性评价+作品展示',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        content: [
          { type: 'text', content: '前面我们学习了六要素、经过详写、动作描写和对话描写。现在综合运用，独立写一篇写事记叙文！', animationType: 'reveal' },
          { type: 'example', content: '综合写作步骤：\n第一步搭框架——六要素\n第二步写经过——三问法详写\n第三步加动作——动作分解法\n第四步加对话——提示语+说的话\n四步完成，一篇好作文就出来了！', label: '写作步骤', animationType: 'bounce' },
          { type: 'tip', content: '好作文标准：六要素齐全、经过详写、有动作描写、有对话描写、语句通顺。达到这些就是好作文！', label: '好作文标准', animationType: 'pulse' },
          { type: 'example', content: '范文片段：\n上周六（时间），我和爸爸（人物）在公园里（地点）放风筝。我先拿着线轴飞快地跑起来，然后一边跑一边小心翼翼地放线，风筝慢慢飞了起来。"爸爸你看！"我高兴地喊道，"风筝飞得好高！""是啊，"爸爸笑着说，"你真厉害！"（经过详写+动作+对话）', label: '范文片段', animationType: 'bounce' },
          { type: 'animation', content: '写作完成撒花动画，提交作文后庆祝', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '作文完成啦',
              sceneBuildConfig: {
                sceneName: '写作完成',
                elements: [
                  { text: '六要素齐全', x: 25, y: 30, animation: 'bounceIn', delay: 0, color: '#FF6B6B', ttsText: '六要素齐全！' },
                  { text: '经过详写', x: 50, y: 30, animation: 'bounceIn', delay: 0.3, color: '#4ECDC4', ttsText: '经过详写！' },
                  { text: '动作生动', x: 75, y: 30, animation: 'bounceIn', delay: 0.6, color: '#FFE66D', ttsText: '动作生动！' },
                  { text: '对话有趣', x: 50, y: 60, animation: 'bounceIn', delay: 0.9, color: '#C9B1FF', ttsText: '对话有趣！作文完成啦！' },
                ]
              },
              ttsNarration: '六要素齐全，经过详写，动作生动，对话有趣。一篇好作文完成啦！',
            },
          },
          { type: 'tip', content: '复习口诀：搭框架六要素，详经过三问法，加动作分解写，加对话有提示。四步综合，作文出彩！', label: '复习口诀', animationType: 'pulse' },
          { type: 'text', content: '写完后要修改。先自己读一遍，看看语句通不通顺，再让爸爸妈妈帮忙看看。好作文是改出来的！', animationType: 'reveal' },
        ],
        iDo: '家长示范完成一篇写事记叙文，边写边讲解每一步用了什么方法。',
        weDo: '亲子一起修改一篇作文，互相提建议。',
        youDo: '孩子独立写一篇300字写事记叙文，包含六要素。',
        parentTips: '【家长预习】前面我们学习了六要素、经过详写、动作描写和对话描写。现在…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '写作小游戏：作文大比拼！用四步法写一篇作文，读给全家听，看谁写得最精彩！歇后语：铁杵磨成针——功到自然成！',
        gsapAnimations: [
          '[GSAP:sceneBuild|作文完成庆祝场景|1.5s|提交作文|power2.out]',
          '[GSAP:confetti|写作完成撒花|2s|提交作文|power1.out]'
        ],
        images: [
          '[IMG:illustration|写作小达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|四步写作法流程图|500x300|教学风|png|四步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u4l5q1',
            type: 'choice',
            question: '综合写作的第一步是什么？',
            options: ['写对话', '搭框架（六要素）', '加动作'],
            answer: '搭框架（六要素）',
            hint: '回忆写作步骤',
            explanation: '综合写作第一步是搭框架（六要素），然后写经过、加动作、加对话。'
          },
          {
            id: 'c4u4l5q2',
            type: 'choice',
            question: '写经过要用什么方法？',
            options: ['动作分解法', '三问法', '对话格式'],
            answer: '三问法',
            hint: '回忆第二课',
            explanation: '写经过要用经过展开三问法：先→然后→最后。'
          },
          {
            id: 'c4u4l5q3',
            type: 'fill',
            question: '写动作要用___法把动作分解成小动作。',
            answer: '动作分解',
            hint: '回忆第三课',
            explanation: '写动作要用动作分解法，把一个动作拆成3-5个小动作。'
          },
          {
            id: 'c4u4l5q4',
            type: 'choice',
            question: '写对话要包含什么？',
            options: ['只写说的话', '提示语+说的话', '只写提示语'],
            answer: '提示语+说的话',
            hint: '回忆第四课',
            explanation: '写对话要包含提示语和说的话，说的话用引号引起来。'
          },
          {
            id: 'c4u4l5q5',
            type: 'drag',
            question: '把综合写作步骤排序：加对话、搭框架、写经过、加动作',
            answer: '搭框架,写经过,加动作,加对话',
            hint: '回忆写作步骤',
            explanation: '综合写作步骤：搭框架→写经过→加动作→加对话。'
          },
          {
            id: 'c4u4l5q6',
            type: 'choice',
            question: '【期末真题】写完作文后应该怎么做？',
            options: ['直接交', '自己读一遍修改', '不管它'],
            answer: '自己读一遍修改',
            hint: '好作文是怎么来的',
            explanation: '写完后要自己读一遍，检查语句通不通顺，再修改。好作文是改出来的。这是期末常考题！'
          },
          {
            id: 'c4u4l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：写记叙文四步法是搭框架、写经过、加动作、加___。',
            answer: '对话',
            hint: '[写事记叙文]（语文四年级-第4单元）',
            explanation: '写记叙文四步法：搭框架（六要素）→写经过（三问法）→加动作（分解法）→加对话。这是本单元学过的知识。'
          }
        ]
      }
    ]
  },
  // ==================== 第五单元：说明文入门 ====================
  {
    id: 'c4u5',
    title: '说明文入门',
    subtitle: '事物说明，客观准确地介绍',
    order: 5,
    lessons: [
      {
        id: 'c4u5l1',
        title: '说明文特点——介绍一种物品',
        order: 1,
        teachingMethod: 'CPA·C→P：实物观察→图示→文字',
        learningObjective: '我能理解说明文的特点',
        successCriteria: '①能说出说明文的特点 ②能找出说明方法',
        content: [
          { type: 'text', content: '说明文和记叙文不同，它不讲故事，而是客观地介绍事物的特点。今天我们从一个苹果开始，学习怎么写说明文！', animationType: 'reveal' },
          { type: 'example', content: '用感官观察法介绍苹果：\n看：圆圆的，红色或绿色，表皮光滑\n摸：硬硬的，凉凉的，表面有一层蜡\n闻：有一股清香\n尝：甜中带酸，脆脆的，汁水多', label: '感官观察法', animationType: 'bounce' },
          { type: 'tip', content: '说明文特点：客观准确、条理清楚、语言简明。不夸张、不抒情，用事实说话。这就是说明文和记叙文的区别！', label: '说明文特点', animationType: 'pulse' },
          { type: 'example', content: '说明文片段：\n苹果是一种常见的水果。它的形状是圆的，直径约7-8厘米。成熟的苹果多为红色或黄色，表皮光滑。果肉脆甜多汁，含有丰富的维生素。', label: '说明文片段', animationType: 'bounce' },
          { type: 'animation', content: '苹果特征逐步出现动画，颜色、形状、味道依次展示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '苹果特征介绍',
              sceneBuildConfig: {
                sceneName: '苹果观察',
                elements: [
                  { text: '形状：圆形', x: 20, y: 25, animation: 'bounceIn', delay: 0, color: '#FF6B6B', ttsText: '看形状：苹果是圆的。' },
                  { text: '颜色：红或绿', x: 50, y: 25, animation: 'bounceIn', delay: 0.4, color: '#4ECDC4', ttsText: '看颜色：红色或绿色。' },
                  { text: '味道：甜脆多汁', x: 80, y: 25, animation: 'bounceIn', delay: 0.8, color: '#FFE66D', ttsText: '尝味道：甜脆多汁。' },
                  { text: '营养：含维生素', x: 50, y: 60, animation: 'bounceIn', delay: 1.2, color: '#C9B1FF', ttsText: '营养价值：含有丰富的维生素。' },
                ]
              },
              ttsNarration: '介绍苹果要从形状、颜色、味道和营养等方面客观准确地说明。',
            },
          },
          { type: 'text', content: '写说明文要用"感官观察法"：用眼睛看（颜色、形状），用手摸（质感），用鼻子闻（气味），用嘴尝（味道），把观察到的写下来。', animationType: 'reveal' },
          { type: 'tip', content: '观察口诀：眼看形色，手摸质感，鼻闻气味，嘴尝味道。多感官观察，说明才准确！', label: '观察口诀', animationType: 'pulse' },
        ],
        iDo: '家长拿一个苹果示范从颜色、形状、味道介绍，用感官观察法列出特征。',
        weDo: '亲子一起观察一个物品，列出它的特征。',
        youDo: '孩子独立介绍一种物品，用感官观察法。',
        parentTips: '【家长预习】说明文和记叙文不同，它不讲故事，而是客观地介绍事物的特点…\n共学四步：\n①对话出题：问孩子"说明文和记叙文最大的区别是什么？"\n②孩子应答：说明文客观准确地介绍事物，不夸张不抒情，这是和记叙文最大的区别。\n③答错引导：家长可以找生活中的说明书，用"实物对照法"——对照说明方法在生活中怎么用\n④快速检测：说明文和记叙文最大的区别是什么？、用感官观察法介绍苹果，不包括下列哪一项？、说明文的特点是客观准确、条理清楚、语言（   …',
        funElement: '写作小游戏：盲人摸象！闭上眼睛摸一个东西，猜猜是什么，再用感官观察法介绍它！',
        gsapAnimations: [
          '[GSAP:sceneBuild|苹果特征逐步出现|1s|点击|power2.out]',
          '[GSAP:highlight|感官关键词高亮|0.4s|特征出现|power2.out]'
        ],
        images: [
          '[IMG:photo|苹果实物照片配特征标注|500x300|实物摄影|png|5个特征标注]',
          '[IMG:illustration|感官观察法示意图|500x200|教学风|png|四种感官]'
        ],
        practiceQuestions: [
          {
            id: 'c4u5l1q1',
            type: 'choice',
            question: '说明文和记叙文最大的区别是什么？',
            options: ['说明文字数多', '说明文客观介绍不抒情', '说明文不写字'],
            answer: '说明文客观介绍不抒情',
            hint: '回忆说明文特点',
            explanation: '说明文客观准确地介绍事物，不夸张不抒情，这是和记叙文最大的区别。'
          },
          {
            id: 'c4u5l1q2',
            type: 'choice',
            question: '用感官观察法介绍苹果，不包括下列哪一项？',
            options: ['看颜色', '摸质感', '猜价格'],
            answer: '猜价格',
            hint: '感官观察有哪些',
            explanation: '感官观察法包括看、摸、闻、尝，不包括猜价格。'
          },
          {
            id: 'c4u5l1q3',
            type: 'fill',
            question: '说明文的特点是客观准确、条理清楚、语言___。',
            answer: '简明',
            hint: '说明文语言要怎样',
            explanation: '说明文特点是客观准确、条理清楚、语言简明，用事实说话。'
          },
          {
            id: 'c4u5l1q4',
            type: 'choice',
            question: '下列哪句是说明文的语言？',
            options: ['苹果真美啊我好喜欢', '苹果是圆形的，直径约7-8厘米', '苹果像红红的脸蛋'],
            answer: '苹果是圆形的，直径约7-8厘米',
            hint: '说明文要客观准确',
            explanation: '"苹果是圆形的，直径约7-8厘米"客观准确，是说明文语言。其他两句是抒情和比喻。'
          },
          {
            id: 'c4u5l1q5',
            type: 'drag',
            question: '把感官和观察内容配对：看、摸、闻、尝',
            answer: '颜色形状,质感,气味,味道',
            hint: '回忆感官观察法',
            explanation: '看—颜色形状，摸—质感，闻—气味，尝—味道。'
          },
          {
            id: 'c4u5l1q6',
            type: 'choice',
            question: '【期末真题】写说明文时应该怎样？',
            options: ['多用比喻抒情', '客观准确用事实说话', '编故事'],
            answer: '客观准确用事实说话',
            hint: '说明文要客观',
            explanation: '写说明文要客观准确，用事实说话，不夸张不抒情。这是期末常考题！'
          },
          {
            id: 'c4u5l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：用眼看、手摸、鼻闻、嘴尝观察事物的方法叫___观察法。',
            answer: '感官',
            hint: '[感官观察法]（语文四年级-第5单元）',
            explanation: '用眼看、手摸、鼻闻、嘴尝观察事物的方法叫感官观察法。这是本单元第一课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u5l2',
        title: '说明方法——列数字和作比较',
        order: 2,
        teachingMethod: 'EDI：示范→合作→独立',
        learningObjective: '我能运用列数字和作比较的说明方法',
        successCriteria: '①能判断列数字和作比较 ②能说出两种方法的作用',
        content: [
          { type: 'text', content: '写说明文时，要让介绍更准确，就要用"说明方法"。今天学习两种常用的说明方法：列数字和作比较！', animationType: 'reveal' },
          { type: 'example', content: '列数字：用具体数字说明事物特点。\n示例：文具盒长20厘米，宽8厘米，高3厘米。\n作用：让读者准确了解事物的大小。', label: '列数字', animationType: 'bounce' },
          { type: 'example', content: '作比较：把两种事物放在一起比较。\n示例：这个文具盒比铅笔盒大一点，但比书包小很多。\n作用：通过比较让读者更清楚事物的特点。', label: '作比较', animationType: 'bounce' },
          { type: 'tip', content: '列数字要准确，作比较要选熟悉的事物作参照。比如"大象重6吨"是列数字，"大象比汽车还重"是作比较。', label: '使用技巧', animationType: 'pulse' },
          { type: 'animation', content: '两种说明方法左右对比展示动画', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '列数字 vs 作比较',
              compareConfig: {
                leftItems: ['列数字', '用具体数字', '长20厘米', '准确量化'],
                rightItems: ['作比较', '和别的事物比', '比铅笔盒大', '对比突出'],
                result: 'close',
                resultText: '列数字准确量化，作比较对比突出，两种方法让说明更清楚',
              },
              ttsNarration: '列数字用具体数字准确说明，作比较通过对比突出特点。两种方法让说明更清楚！',
            },
          },
          { type: 'text', content: '两种方法可以一起用。比如"这只铅笔长18厘米，比我的手指长多了"，既有列数字（18厘米），又有作比较（比手指长）。', animationType: 'reveal' },
          { type: 'tip', content: '方法口诀：列数字要准确，作比较找参照。两种方法配合用，说明清楚又明了！', label: '方法口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范用列数字和作比较介绍文具盒，边说边指出用了哪种方法。',
        weDo: '亲子一起用说明方法介绍一个物品，互相检查。',
        youDo: '孩子独立用说明方法写一段话。',
        parentTips: '【家长预习】写说明文时，要让介绍更准确，就要用"说明方法"。今天学习…\n共学四步：\n①对话出题：问孩子"文具盒长20厘米"用了什么说明方法？"\n②孩子应答："长20厘米"用了具体数字，是列数字的说明方法。\n③答错引导：家长可以找生活中的说明书，用"实物对照法"——对照说明方法在生活中怎么用\n④快速检测："文具盒长20厘米"用了什么说明方法？、"这个文具盒比铅笔盒大一点"用了什么说明方法？、用具体数字说明事物特点的方法叫（    ）数字。',
        funElement: '写作小游戏：数字大侦探！找一找身边的数字——你的铅笔几厘米？你的书包几斤重？用列数字写下来！',
        gsapAnimations: [
          '[GSAP:compare|两种说明方法左右对比|0.8s|页面加载|power2.out]',
          '[GSAP:highlight|数字和比较词高亮|0.4s|点击句子|power2.out]'
        ],
        images: [
          '[IMG:illustration|列数字vs作比较对比图|500x300|教学风|png|两种方法]',
          '[IMG:illustration|文具盒尺寸标注图|500x200|教学风|png|尺寸标注]'
        ],
        practiceQuestions: [
          {
            id: 'c4u5l2q1',
            type: 'choice',
            question: '"文具盒长20厘米"用了什么说明方法？',
            options: ['作比较', '列数字', '打比方'],
            answer: '列数字',
            hint: '有没有数字',
            explanation: '"长20厘米"用了具体数字，是列数字的说明方法。'
          },
          {
            id: 'c4u5l2q2',
            type: 'choice',
            question: '"这个文具盒比铅笔盒大一点"用了什么说明方法？',
            options: ['列数字', '作比较', '举例子'],
            answer: '作比较',
            hint: '有没有比较',
            explanation: '"比铅笔盒大一点"把文具盒和铅笔盒比较，是作比较。'
          },
          {
            id: 'c4u5l2q3',
            type: 'fill',
            question: '用具体数字说明事物特点的方法叫___数字。',
            answer: '列',
            hint: '回忆说明方法',
            explanation: '用具体数字说明事物特点的方法叫列数字。'
          },
          {
            id: 'c4u5l2q4',
            type: 'choice',
            question: '"这只铅笔长18厘米，比我的手指长多了"用了哪两种方法？',
            options: ['只有列数字', '只有作比较', '列数字和作比较'],
            answer: '列数字和作比较',
            hint: '既有数字又有比较',
            explanation: '"长18厘米"是列数字，"比手指长多了"是作比较，两种方法都用了。'
          },
          {
            id: 'c4u5l2q5',
            type: 'drag',
            question: '把说明方法和例子配对：列数字、作比较',
            answer: '长20厘米,比铅笔盒大',
            hint: '回忆两种方法',
            explanation: '列数字—长20厘米（有数字），作比较—比铅笔盒大（有比较）。'
          },
          {
            id: 'c4u5l2q6',
            type: 'choice',
            question: '【期末真题】"一头大象重6吨"用了什么说明方法？',
            options: ['作比较', '列数字', '打比方'],
            answer: '列数字',
            hint: '6吨是数字吗',
            explanation: '"重6吨"用了具体数字6吨，是列数字。这是期末常考题！'
          },
          {
            id: 'c4u5l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：把两种事物放在一起比较的说明方法叫作___。',
            answer: '比较',
            acceptableAnswers: ['比较', '作比较'],
            hint: '[作比较]（语文四年级-第5单元）',
            explanation: '把两种事物放在一起比较的说明方法叫作比较。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u5l3',
        title: '说明方法——打比方和举例子',
        order: 3,
        teachingMethod: '支架式',
        learningObjective: '我能运用打比方和举例子的说明方法',
        successCriteria: '①能判断打比方和举例子 ②能说出两种方法的作用',
        content: [
          { type: 'text', content: '除了列数字和作比较，还有两种常用的说明方法：打比方和举例子。它们能让说明更生动、更具体！', animationType: 'reveal' },
          { type: 'example', content: '打比方：用比喻说明事物特点。\n示例：大象的耳朵像两把大扇子。\n作用：把不熟悉的事物比作熟悉的，让人容易理解。', label: '打比方', animationType: 'bounce' },
          { type: 'example', content: '举例子：举出具体例子说明。\n示例：猫喜欢吃鱼，比如小猫最爱吃小鱼干。\n作用：用具体例子让说明更有说服力。', label: '举例子', animationType: 'bounce' },
          { type: 'tip', content: '打比方和比喻句不同：打比方是为了说明事物特点，比喻是为了生动。打比方更客观准确！', label: '区别技巧', animationType: 'pulse' },
          { type: 'example', content: '综合运用：\n猫是一种可爱的动物。它的眼睛像两颗绿宝石（打比方）。猫喜欢吃鱼，比如我家的小花猫最爱吃小鱼干（举例子）。', label: '综合运用', animationType: 'bounce' },
          { type: 'animation', content: '打比方动画：大象耳朵变成扇子的变形过程', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '打比方：大象耳朵像扇子',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '大象的耳朵很大', emoji: '🐘', ttsNarration: '大象的耳朵很大。' },
                  { id: 's2', text: '像两把大扇子', emoji: '扇子', ttsNarration: '像两把大扇子。' },
                  { id: 's3', text: '这样比喻让人容易理解', emoji: '✅', ttsNarration: '这样打比方，把不熟悉的大象耳朵比作熟悉的扇子，让人容易理解。' },
                ],
              },
              ttsNarration: '打比方：大象的耳朵像两把大扇子，把不熟悉的事物比作熟悉的，让人容易理解。',
            },
          },
          { type: 'tip', content: '方法口诀：打比方找相似，举例子要具体。四种方法灵活用，说明生动又清楚！', label: '方法口诀', animationType: 'pulse' },
          { type: 'text', content: '到现在我们学了四种说明方法：列数字、作比较、打比方、举例子。写说明文时可以选2-3种配合使用。', animationType: 'reveal' },
        ],
        iDo: '家长示范用打比方和举例子介绍动物，边说边指出方法。',
        weDo: '亲子一起用说明方法介绍一种动物。',
        youDo: '孩子独立用说明方法写一段话。',
        parentTips: '【家长预习】除了列数字和作比较，还有两种常用的说明方法：打比方和举例…\n共学四步：\n①对话出题：问孩子"大象的耳朵像两把大扇子"用了什么说明方法？"\n②孩子应答："耳朵像扇子"用了比喻，是打比方的说明方法。\n③答错引导：家长可以找生活中的说明书，用"实物对照法"——对照说明方法在生活中怎么用\n④快速检测："大象的耳朵像两把大扇子"用了什么说明方法？、"猫喜欢吃鱼，比如我家小猫爱小鱼干"用了什么说…、用比喻说明事物特点的方法叫打（    ）。',
        funElement: '写作小游戏：打比方大王！大象耳朵像扇子，那长颈鹿的脖子像什么？松鼠的尾巴像什么？看谁打比方打得好！',
        gsapAnimations: [
          '[GSAP:timeline|打比方动画：大象耳朵→扇子变形|1s|点击播放|power2.inOut]',
          '[GSAP:highlight|比喻词和例子词高亮|0.4s|点击句子|power2.out]'
        ],
        images: [
          '[IMG:illustration|大象耳朵变扇子动画|500x300|可爱卡通风|png|变形过程]',
          '[IMG:illustration|四种说明方法汇总图|500x300|教学风|png|四种方法]'
        ],
        practiceQuestions: [
          {
            id: 'c4u5l3q1',
            type: 'choice',
            question: '"大象的耳朵像两把大扇子"用了什么说明方法？',
            options: ['列数字', '打比方', '举例子'],
            answer: '打比方',
            hint: '有没有比喻',
            explanation: '"耳朵像扇子"用了比喻，是打比方的说明方法。'
          },
          {
            id: 'c4u5l3q2',
            type: 'choice',
            question: '"猫喜欢吃鱼，比如我家小猫爱小鱼干"用了什么说明方法？',
            options: ['打比方', '举例子', '作比较'],
            answer: '举例子',
            hint: '有没有举具体例子',
            explanation: '"比如我家小猫爱小鱼干"举了具体例子，是举例子的说明方法。'
          },
          {
            id: 'c4u5l3q3',
            type: 'fill',
            question: '用比喻说明事物特点的方法叫打___。',
            answer: '比方',
            hint: '回忆说明方法',
            explanation: '用比喻说明事物特点的方法叫打比方。'
          },
          {
            id: 'c4u5l3q4',
            type: 'choice',
            question: '打比方和比喻句的区别是什么？',
            options: ['没有区别', '打比方用于说明文，比喻用于文学作品', '比喻句更准确'],
            answer: '打比方用于说明文，比喻用于文学作品',
            hint: '回忆区别技巧',
            explanation: '打比方和比喻本质相同，都是比喻修辞。区别在于使用语境：打比方用于说明文，比喻用于文学作品。'
          },
          {
            id: 'c4u5l3q5',
            type: 'drag',
            question: '把说明方法和例子配对：打比方、举例子、列数字、作比较',
            answer: '耳朵像扇子,比如小猫,长20厘米,比铅笔盒大',
            hint: '回忆四种方法',
            explanation: '打比方—耳朵像扇子，举例子—比如小猫，列数字—长20厘米，作比较—比铅笔盒大。'
          },
          {
            id: 'c4u5l3q6',
            type: 'choice',
            question: '【期末真题】"松鼠的尾巴像一把降落伞"用了什么说明方法？',
            options: ['举例子', '打比方', '列数字'],
            answer: '打比方',
            hint: '有没有比喻',
            explanation: '"尾巴像降落伞"用了比喻，是打比方。这是期末常考题！'
          },
          {
            id: 'c4u5l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：举出具体例子说明事物的方法叫举___。',
            answer: '例子',
            hint: '[举例子]（语文四年级-第5单元）',
            explanation: '举出具体例子说明事物的方法叫举例子。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u5l4',
        title: '说明文结构——总分总',
        order: 4,
        teachingMethod: '支架式：结构搭建法',
        learningObjective: '我能理解说明文总分总的结构',
        successCriteria: '①能画出总分总结构图 ②能说出各部分的作用',
        content: [
          { type: 'text', content: '写说明文要有清晰的结构。最常用的结构是"总分总"：先总述，再分述，最后总结。', animationType: 'reveal' },
          { type: 'example', content: '总分总结构：\n总：文具盒是我学习的好帮手。（总述）\n分1：它长20厘米，能装很多文具。（列数字）\n分2：它比以前的铅笔盒大，装得更多。（作比较）\n分3：它的图案像一幅画，很漂亮。（打比方）\n总：文具盒真是我的好伙伴。（总结）', label: '总分总结构', animationType: 'bounce' },
          { type: 'tip', content: '总分总三步：总述（一句话概括）→分述（分几个方面具体说）→总结（一句话收尾）。中间分述可以用说明方法！', label: '结构技巧', animationType: 'pulse' },
          { type: 'example', content: '分述的角度：\n介绍物品可以从这些方面分述：\n外观：颜色、形状、大小\n功能：能做什么、怎么用\n特点：有什么特别之处', label: '分述角度', animationType: 'bounce' },
          { type: 'animation', content: '总分总结构三步展开动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '总分总结构展开',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '总：文具盒是好帮手', emoji: '📦', ttsNarration: '第一步总述：文具盒是我学习的好帮手。' },
                  { id: 's2', text: '分：大小、功能、外观', emoji: '📋', ttsNarration: '第二步分述：从大小、功能、外观三个方面介绍。' },
                  { id: 's3', text: '总：文具盒是好伙伴', emoji: '✅', ttsNarration: '第三步总结：文具盒真是我的好伙伴。总分总结构完成！' },
                ],
              },
              ttsNarration: '总分总结构：先总述，再分述，最后总结。三步让说明文条理清楚！',
            },
          },
          { type: 'text', content: '除了总分总，还有"总分"和"分总"结构。总分总最完整，初学写说明文建议用总分总。', animationType: 'reveal' },
          { type: 'tip', content: '结构口诀：总分总，三步走。先概括，再分说，后总结。条理清楚好文章！', label: '结构口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范用总分总结构介绍文具，边写边指出三部分。',
        weDo: '亲子一起搭总分总结构，家长说总述，孩子说分述。',
        youDo: '孩子独立用总分总结构写一段话。',
        parentTips: '【家长预习】写说明文要有清晰的结构。最常用的结构是"总分总"：先总述…\n共学四步：\n①对话出题：问孩子"总分总结构的三个部分是什么？"\n②孩子应答：总分总结构：先总述（概括）→再分述（具体说）→最后总结（收尾）。\n③答错引导：家长可以找生活中的说明书，用"实物对照法"——对照说明方法在生活中怎么用\n④快速检测：总分总结构的三个部分是什么？、"文具盒是我学习的好帮手"属于总分总结构的哪一…、总分总结构：先（    ）述，再分述，最后总结。',
        funElement: '写作小游戏：结构搭搭乐！总分总像三明治——上面面包（总），中间肉菜（分），下面面包（总）。搭一个说明文三明治！',
        gsapAnimations: [
          '[GSAP:timeline|总分总结构三步展开|1.2s|点击播放|power2.out]',
          '[GSAP:sceneBuild|结构框架搭建|1s|结构出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|总分总结构图|500x300|思维导图风|png|结构示意图]',
          '[IMG:illustration|三明治结构比喻图|500x200|可爱卡通风|png|三明治比喻]'
        ],
        practiceQuestions: [
          {
            id: 'c4u5l4q1',
            type: 'choice',
            question: '总分总结构的三个部分是什么？',
            options: ['时间地点人物', '总述→分述→总结', '起因经过结果'],
            answer: '总述→分述→总结',
            hint: '回忆总分总结构',
            explanation: '总分总结构：先总述（概括）→再分述（具体说）→最后总结（收尾）。'
          },
          {
            id: 'c4u5l4q2',
            type: 'choice',
            question: '"文具盒是我学习的好帮手"属于总分总结构的哪一部分？',
            options: ['分述', '总述', '总结'],
            answer: '总述',
            hint: '这是开头还是中间',
            explanation: '"文具盒是我学习的好帮手"是开头概括，属于总述。'
          },
          {
            id: 'c4u5l4q3',
            type: 'fill',
            question: '总分总结构：先___述，再分述，最后总结。',
            answer: '总',
            hint: '回忆结构',
            explanation: '总分总结构：先总述，再分述，最后总结。'
          },
          {
            id: 'c4u5l4q4',
            type: 'choice',
            question: '分述部分可以从哪些角度介绍物品？',
            options: ['只写颜色', '外观、功能、特点', '只写价格'],
            answer: '外观、功能、特点',
            hint: '回忆分述角度',
            explanation: '分述可以从外观（颜色形状大小）、功能（能做什么）、特点（特别之处）等角度介绍。'
          },
          {
            id: 'c4u5l4q5',
            type: 'drag',
            question: '把总分总结构按顺序排列：总结、总述、分述',
            answer: '总述,分述,总结',
            hint: '回忆结构顺序',
            explanation: '总分总结构顺序：总述→分述→总结。'
          },
          {
            id: 'c4u5l4q6',
            type: 'choice',
            question: '【期末真题】"文具盒真是我的好伙伴"属于总分总结构的哪一部分？',
            options: ['总述', '分述', '总结'],
            answer: '总结',
            hint: '这是结尾还是开头',
            explanation: '"文具盒真是我的好伙伴"是结尾收束，属于总结。这是期末常考题！'
          },
          {
            id: 'c4u5l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：先总述、再分述、最后总结的说明文结构叫___分总。',
            answer: '总',
            hint: '[总分总结构]（语文四年级-第5单元）',
            explanation: '先总述、再分述、最后总结的说明文结构叫总分总。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u5l5',
        title: '说明文综合写作',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        content: [
          { type: 'text', content: '我们学习了说明文的特点、说明方法和总分总结构。现在综合运用，独立写一篇事物说明文！', animationType: 'reveal' },
          { type: 'example', content: '综合写作步骤：\n第一步选物品——选一个熟悉的物品\n第二步搭结构——总分总\n第三步用方法——列数字、作比较、打比方、举例子\n第四步写下来——客观准确、条理清楚', label: '写作步骤', animationType: 'bounce' },
          { type: 'tip', content: '好说明文标准：结构是总分总、至少用2种说明方法、客观准确、条理清楚、200字以上。', label: '好说明文标准', animationType: 'pulse' },
          { type: 'example', content: '范文：《我的书包》\n我的书包是我上学的好伙伴（总述）。它长35厘米，宽25厘米，能装下我所有的课本（列数字）。它比同桌的书包大一些，装得更多（作比较）。书包的图案像一幅美丽的画，特别好看（打比方）。比如它的拉链很顺滑，用起来很方便（举例子）（分述）。我的书包真是我的好帮手（总结）。', label: '范文', animationType: 'bounce' },
          { type: 'animation', content: '说明文评分滚动动画，提交后展示评分', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '说明文完成',
              sceneBuildConfig: {
                sceneName: '写作完成',
                elements: [
                  { text: '总分总结构', x: 25, y: 30, animation: 'bounceIn', delay: 0, color: '#FF6B6B', ttsText: '总分总结构完整！' },
                  { text: '说明方法2种', x: 50, y: 30, animation: 'bounceIn', delay: 0.3, color: '#4ECDC4', ttsText: '用了2种说明方法！' },
                  { text: '客观准确', x: 75, y: 30, animation: 'bounceIn', delay: 0.6, color: '#FFE66D', ttsText: '语言客观准确！' },
                  { text: '说明文完成！', x: 50, y: 60, animation: 'bounceIn', delay: 0.9, color: '#C9B1FF', ttsText: '说明文完成！你是说明文小达人！' },
                ]
              },
              ttsNarration: '总分总结构完整，用了2种说明方法，语言客观准确。说明文完成！',
            },
          },
          { type: 'tip', content: '复习口诀：选物品搭结构，总分总三步走。用方法列比打举，客观准确条理清。200字以上好说明！', label: '复习口诀', animationType: 'pulse' },
          { type: 'text', content: '写说明文和记叙文不同：说明文不编故事、不抒情，只客观地介绍事物的特点。记住这个区别！', animationType: 'reveal' },
        ],
        iDo: '家长示范写一篇说明文，边写边指出结构和说明方法。',
        weDo: '亲子一起修改一篇说明文，检查结构和说明方法。',
        youDo: '孩子独立写一篇200字事物说明文，至少用2种说明方法。',
        parentTips: '【家长预习】我们学习了说明文的特点、说明方法和总分总结构。现在综合运…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '写作小游戏：说明文大比拼！选一个你最熟悉的物品，用总分总结构写下来，看谁写得最清楚！歇后语：竹篮打水——一场空，说明文可不能空哦！',
        gsapAnimations: [
          '[GSAP:sceneBuild|说明文完成庆祝|1.5s|提交|power2.out]',
          '[GSAP:confetti|通关撒花|2s|正确率达标|power1.out]'
        ],
        images: [
          '[IMG:illustration|说明文小达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|说明文写作流程图|500x300|教学风|png|四步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u5l5q1',
            type: 'choice',
            question: '写说明文综合写作的第一步是什么？',
            options: ['用说明方法', '选物品', '搭结构'],
            answer: '选物品',
            hint: '回忆写作步骤',
            explanation: '综合写作第一步是选一个熟悉的物品，然后搭结构、用方法、写下来。'
          },
          {
            id: 'c4u5l5q2',
            type: 'choice',
            question: '说明文应该用什么结构？',
            options: ['六要素', '总分总', '对话格式'],
            answer: '总分总',
            hint: '回忆第四课',
            explanation: '说明文常用总分总结构：总述→分述→总结。'
          },
          {
            id: 'c4u5l5q3',
            type: 'fill',
            question: '写说明文至少要用___种说明方法。',
            answer: '2',
            acceptableAnswers: ['2', '两', '二'],
            hint: '回忆好说明文标准',
            explanation: '好说明文至少要用2种说明方法（列数字、作比较、打比方、举例子中选）。'
          },
          {
            id: 'c4u5l5q4',
            type: 'choice',
            question: '说明文和记叙文的区别是什么？',
            options: ['说明文编故事', '说明文客观介绍不抒情', '说明文字数少'],
            answer: '说明文客观介绍不抒情',
            hint: '回忆说明文特点',
            explanation: '说明文客观准确地介绍事物，不编故事不抒情，这是和记叙文的区别。'
          },
          {
            id: 'c4u5l5q5',
            type: 'drag',
            question: '把说明文写作步骤排序：用方法、选物品、写下来、搭结构',
            answer: '选物品,搭结构,用方法,写下来',
            hint: '回忆写作步骤',
            explanation: '说明文写作步骤：选物品→搭结构→用方法→写下来。'
          },
          {
            id: 'c4u5l5q6',
            type: 'choice',
            question: '【期末真题】下列哪个句子适合用在说明文中？',
            options: ['我的书包太可爱了我好喜欢', '书包长35厘米，宽25厘米', '书包像我的好朋友一样陪伴我'],
            answer: '书包长35厘米，宽25厘米',
            hint: '说明文要客观准确',
            explanation: '"书包长35厘米，宽25厘米"客观准确用了列数字，适合说明文。其他两句是抒情和比喻。这是期末常考题！'
          },
          {
            id: 'c4u5l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：说明文常用的四种说明方法是列数字、作比较、打比方、举___。',
            answer: '例子',
            hint: '[说明方法]（语文四年级-第5单元）',
            explanation: '说明文四种常用说明方法：列数字、作比较、打比方、举例子。这是本单元学过的知识。'
          }
        ]
      }
    ]
  },
  // ==================== 第六单元：古诗词理解 ====================
  {
    id: 'c4u6',
    title: '古诗词理解',
    subtitle: '意境与情感，诗中有画',
    order: 6,
    lessons: [
      {
        id: 'c4u6l1',
        title: '《望庐山瀑布》——想象画面',
        order: 1,
        teachingMethod: '多感官：诗画结合',
        learningObjective: '我能背诵古诗《望庐山瀑布》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《望庐山瀑布》全诗 ②能说出诗句的意思和诗人表达的情感',
        content: [
          { type: 'text', content: '古诗不仅能读，还能"画"！今天我们学习李白的《望庐山瀑布》，用画面的方式来理解诗歌的意境。', animationType: 'reveal' },
          { type: 'poem', content: '望庐山瀑布\n唐·李白\n日照香炉生紫烟，\n遥看瀑布挂前川。\n飞流直下三千尺，\n疑是银河落九天。', label: '古诗原文', animationType: 'reveal' },
          { type: 'example', content: '诗句画面解读：\n日照香炉生紫烟——太阳照在香炉峰上，升起紫色云烟\n遥看瀑布挂前川——远远望去，瀑布像挂在山前\n飞流直下三千尺——水流飞速直下，仿佛有三千尺长\n疑是银河落九天——怀疑是银河从九天之上落下来', label: '画面解读', animationType: 'bounce' },
          { type: 'tip', content: '诗画结合法：读一句诗，想一幅画。把文字变成画面，就能理解诗的意境！李白写瀑布用"银河落九天"的想象，多么壮观！', label: '诗画结合法', animationType: 'pulse' },
          { type: 'animation', content: '瀑布场景逐步构建动画：山+瀑布+紫烟依次出现', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '望庐山瀑布意境',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '日照香炉生紫烟', emoji: '🏔️', ttsNarration: '太阳照在香炉峰上，升起紫色云烟。' },
                  { id: 's2', text: '遥看瀑布挂前川', emoji: '💦', ttsNarration: '远远望去，瀑布像挂在山前。' },
                  { id: 's3', text: '飞流直下三千尺', emoji: '🌊', ttsNarration: '水流飞速直下，仿佛有三千尺长。' },
                  { id: 's4', text: '疑是银河落九天', emoji: '✨', ttsNarration: '怀疑是银河从九天之上落下来，多么壮观！' },
                ],
              },
              ttsNarration: '望庐山瀑布：日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
            },
          },
          { type: 'text', content: '"飞流直下三千尺"用了夸张的手法，瀑布不可能真有三千尺，但这样写让我们感受到瀑布的壮观。这就是古诗的魅力！', animationType: 'reveal' },
          { type: 'tip', content: '理解古诗口诀：读诗句，想画面，抓想象，品意境。把诗变成画，意境自然来！', label: '理解口诀', animationType: 'pulse' },
        ],
        iDo: '家长朗读诗歌并画瀑布图，边读边画，把文字变成画面。',
        weDo: '亲子一起画诗中画面，家长读一句，孩子画一幅。',
        youDo: '孩子独立画画面并背诵诗歌。',
        parentTips: '【家长预习】古诗不仅能读，还能"画"！今天我们学习李白的《望庐山瀑布…\n共学四步：\n①对话出题：问孩子"《望庐山瀑布》的作者是谁？"\n②孩子应答：《望庐山瀑布》是唐代诗人李白写的，李白被称为"诗仙"。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测：《望庐山瀑布》的作者是谁？、"飞流直下三千尺"描写的是什么？、"疑是（    ）落九天"填诗中原文。',
        funElement: '古诗小游戏：诗中画画画中诗！读一句画一幅，把《望庐山瀑布》画成四格漫画！歇后语：飞流直下——一泻千里！',
        gsapAnimations: [
          '[GSAP:timeline|瀑布场景逐步构建（山+瀑布+紫烟）|2s|点击播放|power2.out]',
          '[GSAP:highlight|诗句关键词高亮|0.5s|诗句出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|望庐山瀑布诗意画|600x300|水墨画风|png|山+瀑布+紫烟]',
          '[IMG:illustration|银河落九天想象图|500x300|水墨画风|png|银河瀑布]'
        ],
        practiceQuestions: [
          {
            id: 'c4u6l1q1',
            type: 'choice',
            question: '《望庐山瀑布》的作者是谁？',
            options: ['杜甫', '李白', '王维'],
            answer: '李白',
            hint: '诗仙是谁',
            explanation: '《望庐山瀑布》是唐代诗人李白写的，李白被称为"诗仙"。'
          },
          {
            id: 'c4u6l1q2',
            type: 'choice',
            question: '"飞流直下三千尺"描写的是什么？',
            options: ['云烟', '瀑布', '银河'],
            answer: '瀑布',
            hint: '什么飞流直下',
            explanation: '"飞流直下三千尺"描写的是瀑布飞速流下的壮观景象。'
          },
          {
            id: 'c4u6l1q3',
            type: 'fill',
            question: '"疑是___落九天"填诗中原文。',
            answer: '银河',
            hint: '什么从天上落下来',
            explanation: '原句是"疑是银河落九天"，诗人怀疑瀑布是银河从天上落下来。'
          },
          {
            id: 'c4u6l1q4',
            type: 'choice',
            question: '"飞流直下三千尺"用了什么修辞手法？',
            options: ['比喻', '夸张', '拟人'],
            answer: '夸张',
            hint: '三千尺是真的吗',
            explanation: '瀑布不可能真有三千尺，用"三千尺"是夸张手法，突出瀑布的壮观。'
          },
          {
            id: 'c4u6l1q5',
            type: 'drag',
            question: '把诗句和画面配对：日照香炉生紫烟、遥看瀑布挂前川、飞流直下三千尺、疑是银河落九天',
            answer: '紫色云烟,瀑布挂山前,水流飞速直下,银河从天落',
            hint: '想想每句诗的画面',
            explanation: '日照香炉生紫烟—紫色云烟，遥看瀑布挂前川—瀑布挂山前，飞流直下三千尺—水流飞速直下，疑是银河落九天—银河从天落。'
          },
          {
            id: 'c4u6l1q6',
            type: 'choice',
            question: '【期末真题】"日照香炉生紫烟"中"香炉"指的是什么？',
            options: ['烧香的炉子', '香炉峰', '一座庙'],
            answer: '香炉峰',
            hint: '香炉是山名吗',
            explanation: '"香炉"指庐山的香炉峰，是一座山峰的名字，不是烧香的炉子。这是期末常考题！'
          },
          {
            id: 'c4u6l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：读一句诗想一幅画理解古诗的方法叫诗___结合法。',
            answer: '画',
            hint: '[诗画结合法]（语文四年级-第6单元）',
            explanation: '读一句诗想一幅画理解古诗的方法叫诗画结合法。这是本单元第一课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u6l2',
        title: '《山行》——体会情感',
        order: 2,
        teachingMethod: '语境化：情感线索追踪',
        learningObjective: '我能背诵古诗《山行》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《山行》全诗 ②能说出诗句的意思和诗人表达的情感',
        content: [
          { type: 'text', content: '古诗不仅有画面，还有情感。今天学习杜牧的《山行》，通过找情感词来体会诗人的感情！', animationType: 'reveal' },
          { type: 'poem', content: '山行\n唐·杜牧\n远上寒山石径斜，\n白云生处有人家。\n停车坐爱枫林晚，\n霜叶红于二月花。', label: '古诗原文', animationType: 'reveal' },
          { type: 'example', content: '情感线索：\n远上寒山——山路远而凉（平静）\n白云人家——山高处有人家（惊喜）\n停车坐爱——停下马车因为喜爱（热爱）\n霜叶红于二月花——秋叶比春花还红（赞美）\n情感词："爱"字是全诗的情感核心！', label: '情感线索', animationType: 'bounce' },
          { type: 'tip', content: '情感线索追踪法：找诗中的情感词，顺着情感词追踪诗人的感情变化。这首诗的"爱"字就是钥匙！', label: '追踪法', animationType: 'pulse' },
          { type: 'animation', content: '山行诗意时间线动画：山路→白云人家→停车爱枫林→霜叶红于二月花', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '山行情感追踪',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '远上寒山石径斜', emoji: '⛰️', ttsNarration: '远远走上寒山，石径弯弯。' },
                  { id: 's2', text: '白云生处有人家', emoji: '☁️', ttsNarration: '白云深处竟有人家，真惊喜！' },
                  { id: 's3', text: '停车坐爱枫林晚', emoji: '🍁', ttsNarration: '停下马车，因为太爱这傍晚的枫林。' },
                  { id: 's4', text: '霜叶红于二月花', emoji: '🌸', ttsNarration: '经霜的枫叶比二月的春花还红，太美了！' },
                ],
              },
              ttsNarration: '山行：远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。情感核心是爱字！',
            },
          },
          { type: 'text', content: '"停车坐爱枫林晚"中的"坐"不是"坐下"，而是"因为"的意思。诗人因为爱枫林晚景而停车，表达了对秋天美景的喜爱。', animationType: 'reveal' },
          { type: 'tip', content: '古字新解：古诗中有些字和现在意思不同。"坐"在诗中是"因为"，要结合上下文理解！', label: '古字新解', animationType: 'pulse' },
        ],
        iDo: '家长示范找情感关键词"爱"，引导孩子追踪情感线索。',
        weDo: '亲子一起追踪情感线索，从平静到惊喜到热爱到赞美。',
        youDo: '孩子独立找情感词并体会诗人感情。',
        parentTips: '【家长预习】古诗不仅有画面，还有情感。今天学习杜牧的《山行》，通过找…\n共学四步：\n①对话出题：问孩子"《山行》中表达诗人情感的关键词是？"\n②孩子应答："停车坐爱枫林晚"中的"爱"字直接表达了诗人对枫林晚景的喜爱，是情感核心。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测：《山行》中表达诗人情感的关键词是？、"停车坐爱枫林晚"中"坐"的意思是？、"霜叶红于（    ）月花"填诗中原文。',
        funElement: '古诗小游戏：枫叶红于二月花！秋天的枫叶为什么比春天的花还红？因为霜给了它颜色！',
        gsapAnimations: [
          '[GSAP:highlight|情感词"爱"高亮闪烁|0.6s|点击词语|power2.out]',
          '[GSAP:timeline|山行诗意时间线|1.5s|点击播放|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|山行诗意画：枫叶+山路|600x300|水墨画风|png|秋山红叶]',
          '[IMG:illustration|情感线索追踪图|500x200|思维导图风|png|情感变化]'
        ],
        practiceQuestions: [
          {
            id: 'c4u6l2q1',
            type: 'choice',
            question: '《山行》中表达诗人情感的关键词是？',
            options: ['寒', '爱', '红'],
            answer: '爱',
            hint: '哪个字直接表达情感',
            explanation: '"停车坐爱枫林晚"中的"爱"字直接表达了诗人对枫林晚景的喜爱，是情感核心。'
          },
          {
            id: 'c4u6l2q2',
            type: 'choice',
            question: '"停车坐爱枫林晚"中"坐"的意思是？',
            options: ['坐下', '因为', '坐着'],
            answer: '因为',
            hint: '古字新解',
            explanation: '"坐"在诗中是"因为"的意思，诗人因为爱枫林晚景而停车。'
          },
          {
            id: 'c4u6l2q3',
            type: 'fill',
            question: '"霜叶红于___月花"填诗中原文。',
            answer: '二',
            hint: '几月的花',
            explanation: '原句是"霜叶红于二月花"，经霜的枫叶比二月的春花还红。'
          },
          {
            id: 'c4u6l2q4',
            type: 'choice',
            question: '"霜叶红于二月花"表达了诗人什么情感？',
            options: ['悲伤', '赞美喜爱', '害怕'],
            answer: '赞美喜爱',
            hint: '把秋叶比春花说明什么',
            explanation: '把经霜的枫叶比作比春花还红，表达了诗人对秋天美景的赞美和喜爱。'
          },
          {
            id: 'c4u6l2q5',
            type: 'drag',
            question: '把诗句和情感配对：远上寒山、白云人家、停车坐爱、霜叶红于二月花',
            answer: '平静,惊喜,热爱,赞美',
            hint: '追踪情感变化',
            explanation: '远上寒山—平静，白云人家—惊喜，停车坐爱—热爱，霜叶红于二月花—赞美。'
          },
          {
            id: 'c4u6l2q6',
            type: 'choice',
            question: '【期末真题】"白云生处有人家"表达了诗人什么心情？',
            options: ['害怕', '惊喜', '悲伤'],
            answer: '惊喜',
            hint: '高山深处有人家让人怎样',
            explanation: '在白云深处的高山上竟然有人家，出乎意料，表达了惊喜之情。这是期末常考题！'
          },
          {
            id: 'c4u6l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：找诗中情感词追踪诗人感情的方法叫___追踪法。',
            answer: '情感线索',
            acceptableAnswers: ['情感线索', '线索'],
            hint: '[情感线索追踪法]（语文四年级-第6单元）',
            explanation: '找诗中情感词追踪诗人感情的方法叫情感线索追踪法。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u6l3',
        title: '古诗意象——月与思乡',
        order: 3,
        teachingMethod: '情境式：意象专题',
        learningObjective: '我能背诵古诗《古诗意象》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《古诗意象》全诗 ②能说出诗句的意思和诗人表达的情感',
        content: [
          { type: 'text', content: '古诗中有些事物经常出现，它们不只是事物，还代表一种含义，这就是"意象"。今天我们认识最常见的意象——月亮！', animationType: 'reveal' },
          { type: 'example', content: '月亮意象：\n在古诗中，月亮常常代表"思乡"之情。\n因为不管在哪里，大家看到的月亮是同一个，所以看到月亮就会想起家乡的亲人。', label: '月亮意象', animationType: 'bounce' },
          { type: 'poem', content: '静夜思\n唐·李白\n床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。', label: '含月思乡诗', animationType: 'reveal' },
          { type: 'tip', content: '意象理解法：看到月亮就想思乡，看到柳树就想离别，看到菊花就想坚强。意象是古诗的"密码"，破解了就懂了！', label: '意象理解法', animationType: 'pulse' },
          { type: 'example', content: '更多含月诗：\n"举头望明月，低头思故乡"——李白（思乡）\n"海上生明月，天涯共此时"——张九龄（思念远方亲人）\n"但愿人长久，千里共婵娟"——苏轼（思念亲人，婵娟指月亮）', label: '含月诗汇总', animationType: 'bounce' },
          { type: 'animation', content: '月亮升起→诗人望月→思念故乡的时间线动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '月夜思乡意境',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '月亮升起', emoji: '🌙', ttsNarration: '夜晚，一轮明月升起。' },
                  { id: 's2', text: '诗人望月', emoji: '👨', ttsNarration: '诗人抬头望着明月。' },
                  { id: 's3', text: '思念故乡', emoji: '🏡', ttsNarration: '看到月亮，想起了远方的故乡和亲人。' },
                ],
              },
              ttsNarration: '月亮在古诗中代表思乡。看到月亮，诗人就想起远方的故乡。',
            },
          },
          { type: 'text', content: '除了月亮，古诗中还有很多意象：柳树代表离别（"留"的谐音），菊花代表坚强，梅花代表高洁。多积累意象，读诗更轻松！', animationType: 'reveal' },
          { type: 'tip', content: '意象口诀：月亮思乡柳离别，菊花坚强梅高洁。记住意象破密码，古诗理解不费力！', label: '意象口诀', animationType: 'pulse' },
        ],
        iDo: '家长讲"月亮=思乡"意象，举例《静夜思》让孩子感受。',
        weDo: '亲子一起找含月意象的诗，互相朗读分享。',
        youDo: '孩子独立背诵一首含月诗。',
        parentTips: '【家长预习】古诗中有些事物经常出现，它们不只是事物，还代表一种含义，…\n共学四步：\n①对话出题：问孩子"在古诗中，月亮通常代表什么？"\n②孩子应答：在古诗中，月亮通常代表思乡之情，因为大家看到的月亮是同一个。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测：在古诗中，月亮通常代表什么？、"举头望明月，低头思故乡"出自哪首诗？、古诗中代表思乡的意象是（    ）。',
        funElement: '古诗小游戏：意象密码本！月亮=思乡，那柳树=？菊花=？梅花=？来破解古诗密码吧！',
        gsapAnimations: [
          '[GSAP:timeline|月亮升起→诗人望月→思念故乡|1.5s|点击播放|power2.inOut]',
          '[GSAP:highlight|月亮意象关键词高亮|0.5s|月亮出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|月亮+诗人望月图|500x300|水墨画风|png|月夜思乡]',
          '[IMG:illustration|古诗意象汇总表|500x300|教学风|png|意象对照]'
        ],
        practiceQuestions: [
          {
            id: 'c4u6l3q1',
            type: 'choice',
            question: '在古诗中，月亮通常代表什么？',
            options: ['快乐', '思乡', '生气'],
            answer: '思乡',
            hint: '回忆意象知识',
            explanation: '在古诗中，月亮通常代表思乡之情，因为大家看到的月亮是同一个。'
          },
          {
            id: 'c4u6l3q2',
            type: 'choice',
            question: '"举头望明月，低头思故乡"出自哪首诗？',
            options: ['《望庐山瀑布》', '《静夜思》', '《山行》'],
            answer: '《静夜思》',
            hint: '思乡的是哪首',
            explanation: '"举头望明月，低头思故乡"出自李白的《静夜思》，是最经典的思乡诗。'
          },
          {
            id: 'c4u6l3q3',
            type: 'fill',
            question: '古诗中代表思乡的意象是___。',
            answer: '月亮',
            acceptableAnswers: ['月亮', '月'],
            hint: '什么天体代表思乡',
            explanation: '古诗中代表思乡的意象是月亮，看到月亮就想起故乡。'
          },
          {
            id: 'c4u6l3q4',
            type: 'choice',
            question: '古诗中"柳树"通常代表什么？',
            options: ['思乡', '离别', '坚强'],
            answer: '离别',
            hint: '柳和留谐音',
            explanation: '古诗中柳树代表离别，"柳"和"留"谐音，折柳送别是古人的习俗。'
          },
          {
            id: 'c4u6l3q5',
            type: 'drag',
            question: '把意象和含义配对：月亮、柳树、菊花、梅花',
            answer: '思乡,离别,坚强,高洁',
            hint: '回忆意象口诀',
            explanation: '月亮—思乡，柳树—离别，菊花—坚强，梅花—高洁。'
          },
          {
            id: 'c4u6l3q6',
            type: 'choice',
            question: '【期末真题】"但愿人长久，千里共婵娟"中"婵娟"指的是什么？',
            options: ['美女', '月亮', '花朵'],
            answer: '月亮',
            hint: '共婵娟是共看什么',
            explanation: '"婵娟"在诗中指月亮，"千里共婵娟"意思是相隔千里共同望着月亮，表达思念。这是期末常考题！'
          },
          {
            id: 'c4u6l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：古诗中代表某种含义的事物叫___。',
            answer: '意象',
            hint: '[古诗意象]（语文四年级-第6单元）',
            explanation: '古诗中代表某种含义的事物叫意象，如月亮代表思乡。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u6l4',
        title: '古诗对比阅读',
        order: 4,
        teachingMethod: '对比辨析法',
        learningObjective: '我能背诵古诗《古诗对比阅读》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《古诗对比阅读》全诗 ②能说出诗句的意思和诗人表达的情感',
        content: [
          { type: 'text', content: '同一主题的诗，不同诗人写出来也不同。今天我们对比阅读两首写景诗，看看它们有什么异同！', animationType: 'reveal' },
          { type: 'poem', content: '对比一：《望庐山瀑布》李白\n日照香炉生紫烟，遥看瀑布挂前川。\n飞流直下三千尺，疑是银河落九天。\n\n对比二：《望天门山》李白\n天门中断楚江开，碧水东流至此回。\n两岸青山相对出，孤帆一片日边来。', label: '两首写景诗', animationType: 'reveal' },
          { type: 'example', content: '相同点：\n都是李白写的\n都是写景诗\n都用了想象和夸张\n都表达对自然美景的赞美\n\n不同点：\n《望庐山瀑布》写瀑布——壮观雄伟\n《望天门山》写江和山——开阔辽远', label: '异同对比', animationType: 'bounce' },
          { type: 'tip', content: '对比阅读三步法：第一步找相同点，第二步找不同点，第三步总结特点。对比着读，理解更深刻！', label: '对比三步法', animationType: 'pulse' },
          { type: 'animation', content: '两首诗左右对比展示动画', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '两首写景诗对比',
              compareConfig: {
                leftItems: ['望庐山瀑布', '写瀑布', '壮观雄伟', '银河落九天'],
                rightItems: ['望天门山', '写江和山', '开阔辽远', '孤帆日边来'],
                result: 'close',
                resultText: '两首都是李白写的景诗，但写的景物和感受不同',
              },
              ttsNarration: '望庐山瀑布写瀑布壮观雄伟，望天门山写江和山开阔辽远。两首都是李白的写景诗！',
            },
          },
          { type: 'text', content: '对比阅读时，可以从作者、主题、写法、情感等方面比较。找异同的过程，就是深入理解诗歌的过程。', animationType: 'reveal' },
          { type: 'tip', content: '对比口诀：找相同，找不同，总结特点。三步对比阅读，诗歌理解更深！', label: '对比口诀', animationType: 'pulse' },
        ],
        iDo: '家长对比两首写景诗，引导孩子找出相同点和不同点。',
        weDo: '亲子一起对比分析两首诗，互相补充。',
        youDo: '孩子独立对比两首诗的异同。',
        parentTips: '【家长预习】同一主题的诗，不同诗人写出来也不同。今天我们对比阅读两首…\n共学四步：\n①对话出题：问孩子"《望庐山瀑布》和《望天门山》的相同点是？"\n②孩子应答：两首诗都是李白写的，都是写景诗，都用了想象和夸张。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测：《望庐山瀑布》和《望天门山》的相同点是？、《望庐山瀑布》主要写什么景物？、古诗对比阅读三步法：找相同、找不同、（    …',
        funElement: '古诗小游戏：找茬大比拼！两首诗放在一起，找相同找不同，看谁找得多！',
        gsapAnimations: [
          '[GSAP:compare|两首诗左右对比展示|0.8s|页面加载|power2.out]',
          '[GSAP:highlight|异同点高亮|0.5s|点击要点|power2.out]'
        ],
        images: [
          '[IMG:illustration|两首诗对比表格|500x300|教学风|png|对比表格]',
          '[IMG:illustration|对比阅读三步法|500x200|教学风|png|三步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u6l4q1',
            type: 'choice',
            question: '《望庐山瀑布》和《望天门山》的相同点是？',
            options: ['都是杜甫写的', '都是李白写的', '都是写月亮的'],
            answer: '都是李白写的',
            hint: '回忆对比分析',
            explanation: '两首诗都是李白写的，都是写景诗，都用了想象和夸张。'
          },
          {
            id: 'c4u6l4q2',
            type: 'choice',
            question: '《望庐山瀑布》主要写什么景物？',
            options: ['江和山', '瀑布', '月亮'],
            answer: '瀑布',
            hint: '题目说的是什么',
            explanation: '《望庐山瀑布》主要写庐山的瀑布，突出瀑布的壮观雄伟。'
          },
          {
            id: 'c4u6l4q3',
            type: 'fill',
            question: '古诗对比阅读三步法：找相同、找不同、___特点。',
            answer: '总结',
            hint: '回忆对比三步法',
            explanation: '古诗对比阅读三步法：找相同点→找不同点→总结特点。'
          },
          {
            id: 'c4u6l4q4',
            type: 'choice',
            question: '《望天门山》主要写什么景物？',
            options: ['瀑布', '江和山', '枫叶'],
            answer: '江和山',
            hint: '回忆对比分析',
            explanation: '《望天门山》主要写长江和两岸的青山，突出开阔辽远的感觉。'
          },
          {
            id: 'c4u6l4q5',
            type: 'drag',
            question: '把诗和特点配对：望庐山瀑布、望天门山',
            answer: '壮观雄伟,开阔辽远',
            hint: '回忆不同点',
            explanation: '望庐山瀑布—壮观雄伟（写瀑布），望天门山—开阔辽远（写江和山）。'
          },
          {
            id: 'c4u6l4q6',
            type: 'choice',
            question: '【期末真题】古诗对比阅读时，可以从哪些方面比较？',
            options: ['只看字数', '作者、主题、写法、情感', '只看题目'],
            answer: '作者、主题、写法、情感',
            hint: '回忆对比角度',
            explanation: '古诗对比阅读可以从作者、主题、写法、情感等方面比较。这是期末常考题！'
          },
          {
            id: 'c4u6l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：找相同、找不同、总结特点的古诗阅读方法叫___阅读法。',
            answer: '对比',
            hint: '[对比阅读法]（语文四年级-第6单元）',
            explanation: '找相同、找不同、总结特点的古诗阅读方法叫对比阅读法。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u6l5',
        title: '古诗词综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        content: [
          { type: 'text', content: '我们学习了诗画结合、情感追踪、意象理解和对比阅读。现在综合检测，看看你对古诗词的理解！', animationType: 'reveal' },
          { type: 'example', content: '古诗理解四招：\n第一招诗画结合——读诗想画面\n第二招情感追踪——找情感词\n第三招意象理解——破解意象密码\n第四招对比阅读——找异同总结', label: '理解四招', animationType: 'bounce' },
          { type: 'tip', content: '古诗学习要背诵和理解并重。背得熟，理解深，才能体会古诗的美！', label: '学习要点', animationType: 'pulse' },
          { type: 'example', content: '背诵技巧：\n1. 理解意思再背，不要死记硬背\n2. 想象画面帮助记忆\n3. 多读多念，读出节奏\n4. 一句一句背，再连起来', label: '背诵技巧', animationType: 'bounce' },
          { type: 'animation', content: '古诗理解通关动画，正确率达标撒花', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '古诗达人通关',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '诗画结合', emoji: '🎨', ttsNarration: '第一关：诗画结合。' },
                  { id: 's2', text: '情感追踪', emoji: '💖', ttsNarration: '第二关：情感追踪。' },
                  { id: 's3', text: '意象理解', emoji: '🌙', ttsNarration: '第三关：意象理解。' },
                  { id: 's4', text: '对比阅读', emoji: '⚖️', ttsNarration: '第四关：对比阅读。恭喜成为古诗达人！' },
                ],
              },
              ttsNarration: '古诗理解四关：诗画结合、情感追踪、意象理解、对比阅读。全部通关就是古诗达人！',
            },
          },
          { type: 'tip', content: '复习口诀：诗画结合想画面，情感追踪找词眼，意象理解破密码，对比阅读找异同。四招在手，古诗无忧！', label: '复习口诀', animationType: 'pulse' },
          { type: 'text', content: '古诗是中华文化的瑰宝，多读多背多理解，你会发现古诗的世界真美妙！', animationType: 'reveal' },
        ],
        iDo: '家长示范古诗理解题，边做边讲解思路。',
        weDo: '亲子一起做古诗理解题，互相讨论。',
        youDo: '孩子独立完成古诗理解测试，背诵2首。',
        parentTips: '【家长预习】我们学习了诗画结合、情感追踪、意象理解和对比阅读。现在综…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '古诗小游戏：古诗接龙！飞流直下三千尺→尺有所短→短小精悍……看谁接得多！歇后语：熟读唐诗三百首——不会作诗也会吟！',
        gsapAnimations: [
          '[GSAP:timeline|古诗理解通关动画|1.5s|通关|power2.out]',
          '[GSAP:confetti|通关撒花|2s|正确率达标|power1.out]'
        ],
        images: [
          '[IMG:illustration|古诗达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|古诗理解四招图|500x300|思维导图风|png|四招总结]'
        ],
        practiceQuestions: [
          {
            id: 'c4u6l5q1',
            type: 'choice',
            question: '读诗想画面理解古诗的方法叫什么？',
            options: ['情感追踪法', '诗画结合法', '对比阅读法'],
            answer: '诗画结合法',
            hint: '回忆第一课',
            explanation: '读一句诗想一幅画理解古诗的方法叫诗画结合法。'
          },
          {
            id: 'c4u6l5q2',
            type: 'choice',
            question: '找诗中情感词追踪诗人感情的方法叫什么？',
            options: ['诗画结合法', '情感线索追踪法', '意象理解法'],
            answer: '情感线索追踪法',
            hint: '回忆第二课',
            explanation: '找诗中情感词追踪诗人感情的方法叫情感线索追踪法。'
          },
          {
            id: 'c4u6l5q3',
            type: 'fill',
            question: '古诗中月亮代表___之情。',
            answer: '思乡',
            hint: '回忆第三课',
            explanation: '古诗中月亮代表思乡之情，看到月亮就想起故乡。'
          },
          {
            id: 'c4u6l5q4',
            type: 'choice',
            question: '找相同、找不同、总结特点的方法叫什么？',
            options: ['对比阅读法', '诗画结合法', '情感追踪法'],
            answer: '对比阅读法',
            hint: '回忆第四课',
            explanation: '找相同、找不同、总结特点的方法叫对比阅读法。'
          },
          {
            id: 'c4u6l5q5',
            type: 'drag',
            question: '把方法和作用配对：诗画结合、情感追踪、意象理解、对比阅读',
            answer: '想画面,找词眼,破密码,找异同',
            hint: '回忆四招',
            explanation: '诗画结合—想画面，情感追踪—找词眼，意象理解—破密码，对比阅读—找异同。'
          },
          {
            id: 'c4u6l5q6',
            type: 'choice',
            question: '【期末真题】背诵古诗时，最好的方法是？',
            options: ['死记硬背', '理解意思再背', '只读不背'],
            answer: '理解意思再背',
            hint: '怎样背效果好',
            explanation: '背诵古诗要先理解意思再背，不要死记硬背，这样记得更牢。这是期末常考题！'
          },
          {
            id: 'c4u6l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：古诗理解四招是诗画结合、情感追踪、意象理解和___阅读。',
            answer: '对比',
            hint: '[古诗理解]（语文四年级-第6单元）',
            explanation: '古诗理解四招：诗画结合、情感追踪、意象理解、对比阅读。这是本单元学过的知识。'
          }
        ]
      }
    ]
  },
  // ==================== 第七单元：现代诗歌欣赏 ====================
  {
    id: 'c4u7',
    title: '现代诗歌欣赏',
    subtitle: '朗读与创作，感受诗的美',
    order: 7,
    lessons: [
      {
        id: 'c4u7l1',
        title: '诗歌的节奏与韵律',
        order: 1,
        teachingMethod: '多感官：拍手打节拍',
        learningObjective: '我能感受诗歌的节奏与韵律之美',
        successCriteria: '①能标出诗歌的节奏 ②能说出诗歌的韵脚',
        content: [
          { type: 'text', content: '现代诗和古诗不同，它不用押韵，但同样有节奏。读诗就像唱歌，要有快有慢，有高有低。今天我们感受诗歌的节奏！', animationType: 'reveal' },
          { type: 'poem', content: '纸船\n——冰心\n我从不肯妄弃了一张纸，\n总是留着——留着，\n叠成一只一只很小的船儿，\n从舟上抛下在海里。', label: '现代诗示例', animationType: 'reveal' },
          { type: 'example', content: '节奏标记：\n我从不肯/妄弃了/一张纸，（2-3-3）\n总是/留着——留着，（2-2）\n叠成/一只一只/很小的/船儿，（2-4-3-2）\n从舟上/抛下/在海里。（3-2-3）\n用"／"标出停顿，读出节奏感。', label: '节奏标记', animationType: 'bounce' },
          { type: 'tip', content: '诗歌节奏三步读：第一步找停顿（／），第二步定快慢，第三步读出感情。节奏对了，诗就活了！', label: '节奏三步读', animationType: 'pulse' },
          { type: 'animation', content: '诗歌节奏可视化动画，拍手打节拍', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '拍手打节拍',
              sequenceConfig: {
                items: ['我从不肯／拍', '妄弃了／拍', '一张纸／拍拍', '总是／拍', '留着——留着／拍拍'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '读诗要打节拍！我从不肯，拍！妄弃了，拍！一张纸，拍拍！节奏对了诗就美了！',
            },
          },
          { type: 'text', content: '现代诗的韵律不靠押韵，而靠重复和节奏。比如"留着——留着"重复两次，就形成了韵律感，读起来很有味道。', animationType: 'reveal' },
          { type: 'tip', content: '朗读口诀：找停顿，定快慢，读感情。拍手打节拍，诗歌读出来！', label: '朗读口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范朗读诗歌，拍手打节拍，让孩子听出节奏。',
        weDo: '亲子一起拍手读诗，家长读一句，孩子跟读打节拍。',
        youDo: '孩子独立朗读诗歌并标注节奏。',
        parentTips: '【家长预习】现代诗和古诗不同，它不用押韵，但同样有节奏。读诗就像唱歌…\n共学四步：\n①对话出题：问孩子"现代诗和古诗的一个区别是？"\n②孩子应答：现代诗不用像古诗那样押韵，但同样有节奏，通过停顿和重复形成韵律。\n③答错引导：家长可以和孩子一起朗读，用"朗读感受法"——多读几遍，感受节奏和画面\n④快速检测：现代诗和古诗的一个区别是？、诗歌节奏三步读的第一步是什么？、读诗时用"（    ）"标出停顿的地方。',
        funElement: '诗歌小游戏：节奏拍拍拍！读一句诗拍一下手，像打鼓一样，把诗读成一首歌！',
        gsapAnimations: [
          '[GSAP:sequence|诗歌节奏可视化拍手动画|0.5s|每个节拍|bounce.out]',
          '[GSAP:highlight|停顿符号高亮|0.4s|节拍出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|诗歌节奏标记图|500x300|教学风|png|节奏符号]',
          '[IMG:illustration|拍手打节拍示意图|500x200|可爱卡通风|png|拍手图标]'
        ],
        practiceQuestions: [
          {
            id: 'c4u7l1q1',
            type: 'choice',
            question: '现代诗和古诗的一个区别是？',
            options: ['现代诗必须押韵', '现代诗不用押韵但有节奏', '现代诗没有节奏'],
            answer: '现代诗不用押韵但有节奏',
            hint: '回忆现代诗特点',
            explanation: '现代诗不用像古诗那样押韵，但同样有节奏，通过停顿和重复形成韵律。'
          },
          {
            id: 'c4u7l1q2',
            type: 'choice',
            question: '诗歌节奏三步读的第一步是什么？',
            options: ['定快慢', '找停顿', '读感情'],
            answer: '找停顿',
            hint: '回忆三步读',
            explanation: '诗歌节奏三步读：第一步找停顿，第二步定快慢，第三步读感情。'
          },
          {
            id: 'c4u7l1q3',
            type: 'fill',
            question: '读诗时用"___"标出停顿的地方。',
            answer: '／',
            acceptableAnswers: ['／', '斜线', '停顿号'],
            hint: '用什么符号标停顿',
            explanation: '读诗时用"／"标出停顿的地方，帮助读出节奏感。'
          },
          {
            id: 'c4u7l1q4',
            type: 'choice',
            question: '"留着——留着"重复两次的作用是？',
            options: ['凑字数', '形成韵律感', '没有作用'],
            answer: '形成韵律感',
            hint: '重复有什么效果',
            explanation: '"留着——留着"重复两次形成了韵律感，读起来更有味道。'
          },
          {
            id: 'c4u7l1q5',
            type: 'drag',
            question: '把节奏三步读按顺序排列：定快慢、读感情、找停顿',
            answer: '找停顿,定快慢,读感情',
            hint: '回忆三步顺序',
            explanation: '节奏三步读顺序：找停顿→定快慢→读感情。'
          },
          {
            id: 'c4u7l1q6',
            type: 'choice',
            question: '【期末真题】朗读现代诗时最重要的是什么？',
            options: ['读得越快越好', '读出节奏和感情', '声音越大越好'],
            answer: '读出节奏和感情',
            hint: '朗读要注意什么',
            explanation: '朗读现代诗要读出节奏和感情，不是越快越好或越大声越好。这是期末常考题！'
          },
          {
            id: 'c4u7l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：读诗要找停顿、定快慢、读___。',
            answer: '感情',
            hint: '[诗歌节奏]（语文四年级-第7单元）',
            explanation: '读诗节奏三步：找停顿、定快慢、读感情。这是本单元第一课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u7l2',
        title: '诗歌的意象与画面感',
        order: 2,
        teachingMethod: '情境式：意象画面',
        learningObjective: '我能找出诗歌中的意象并感受画面感',
        successCriteria: '①能找出诗中的意象 ②能描述意象构成的画面',
        content: [
          { type: 'text', content: '现代诗也用"意象"来表情达意。一个意象就是一幅画，读诗时在脑海中画出来，就能感受诗的美！', animationType: 'reveal' },
          { type: 'poem', content: '繁星（一三一）\n——冰心\n大海啊！\n哪一颗星没有光？\n哪一朵花没有香？\n哪一次我的思潮里\n没有你波涛的清响？', label: '现代诗示例', animationType: 'reveal' },
          { type: 'example', content: '意象分析：\n大海——广阔、深沉\n星星——光明、希望\n花朵——美好、芬芳\n波涛——声音、力量\n这些意象组合起来，表达了诗人对大海的热爱和思念。', label: '意象分析', animationType: 'bounce' },
          { type: 'tip', content: '意象画面法：读到意象，就在脑海中画一幅画。大海+星星+花朵+波涛，就是一幅壮美的海景图！', label: '意象画面法', animationType: 'pulse' },
          { type: 'animation', content: '海景意象逐步出现动画：海+星星+花朵+波涛', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '繁星意象画面',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '大海', emoji: '🌊', ttsNarration: '广阔的大海。' },
                  { id: 's2', text: '星星', emoji: '⭐', ttsNarration: '闪烁的星星，带来光明和希望。' },
                  { id: 's3', text: '花朵', emoji: '🌸', ttsNarration: '芬芳的花朵，带来美好。' },
                  { id: 's4', text: '波涛', emoji: '🌊', ttsNarration: '波涛的清响，带来力量。这些意象组合成壮美的海景图！' },
                ],
              },
              ttsNarration: '大海、星星、花朵、波涛，这些意象组合成一幅壮美的海景图，表达诗人对大海的热爱。',
            },
          },
          { type: 'text', content: '这首诗用了三个排比问句："哪一颗星没有光？哪一朵花没有香？哪一次我的思潮里没有你波涛的清响？"层层递进，表达了对大海的深情。', animationType: 'reveal' },
          { type: 'tip', content: '画面口诀：读意象，想画面，组合起来品情感。意象是诗的画笔，画出发自内心的美！', label: '画面口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范读意象后在脑海中画面，边读边描述画面。',
        weDo: '亲子一起找意象画画面，互相分享自己想象的画面。',
        youDo: '孩子独立找意象并描述画面。',
        parentTips: '【家长预习】现代诗也用"意象"来表情达意。一个意象就是一幅画，读诗时…\n共学四步：\n①对话出题：问孩子"《繁星（一三一）》中"大海"表达了诗人什么情感？"\n②孩子应答：诗中通过大海、星星、花朵等意象，表达了诗人对大海的热爱和思念。\n③答错引导：家长可以和孩子一起朗读，用"朗读感受法"——多读几遍，感受节奏和画面\n④快速检测：《繁星（一三一）》中"大海"表达了诗人什么情感？、"哪一颗星没有光？"这种句子叫什么？、读到意象在脑海中画一幅画的方法叫（    ）画…',
        funElement: '诗歌小游戏：意象画家！读一首诗，把你想象的画面画下来，看谁画得最美！',
        gsapAnimations: [
          '[GSAP:timeline|海景意象逐步出现（海+星星+花朵+波涛）|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|意象关键词高亮|0.5s|意象出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|繁星海景意象画|600x300|水彩画风|png|海+星+花+波涛]',
          '[IMG:illustration|意象画面法示意图|500x200|教学风|png|意象到画面]'
        ],
        practiceQuestions: [
          {
            id: 'c4u7l2q1',
            type: 'choice',
            question: '《繁星（一三一）》中"大海"表达了诗人什么情感？',
            options: ['害怕大海', '热爱和思念大海', '讨厌大海'],
            answer: '热爱和思念大海',
            hint: '从诗中感受',
            explanation: '诗中通过大海、星星、花朵等意象，表达了诗人对大海的热爱和思念。'
          },
          {
            id: 'c4u7l2q2',
            type: 'choice',
            question: '"哪一颗星没有光？"这种句子叫什么？',
            options: ['陈述句', '排比问句', '感叹句'],
            answer: '排比问句',
            hint: '有几个相似问句',
            explanation: '诗中三个相似的问句"哪一颗星……哪一朵花……哪一次……"是排比问句，层层递进。'
          },
          {
            id: 'c4u7l2q3',
            type: 'fill',
            question: '读到意象在脑海中画一幅画的方法叫___画面法。',
            answer: '意象',
            hint: '回忆方法名',
            explanation: '读到意象在脑海中画一幅画的方法叫意象画面法。'
          },
          {
            id: 'c4u7l2q4',
            type: 'choice',
            question: '诗中"星星"这个意象通常代表什么？',
            options: ['黑暗', '光明和希望', '害怕'],
            answer: '光明和希望',
            hint: '星星给人什么感觉',
            explanation: '星星发出光芒，通常代表光明和希望。'
          },
          {
            id: 'c4u7l2q5',
            type: 'drag',
            question: '把意象和感受配对：大海、星星、花朵、波涛',
            answer: '广阔深沉,光明希望,美好芬芳,声音力量',
            hint: '回忆意象分析',
            explanation: '大海—广阔深沉，星星—光明希望，花朵—美好芬芳，波涛—声音力量。'
          },
          {
            id: 'c4u7l2q6',
            type: 'choice',
            question: '【期末真题】现代诗中的"意象"是指什么？',
            options: ['诗中的人物', '诗中代表某种含义的事物', '诗的题目'],
            answer: '诗中代表某种含义的事物',
            hint: '回忆意象定义',
            explanation: '意象是诗中代表某种含义的事物，如大海代表广阔深沉。这是期末常考题！'
          },
          {
            id: 'c4u7l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：现代诗中代表某种含义的事物叫___。',
            answer: '意象',
            hint: '[诗歌意象]（语文四年级-第7单元）',
            explanation: '现代诗中代表某种含义的事物叫意象，如大海代表广阔深沉。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u7l3',
        title: '诗歌仿写',
        order: 3,
        teachingMethod: '支架式：诗歌仿写',
        learningObjective: '我能模仿诗歌的写法进行仿写',
        successCriteria: '①仿写句式与原诗一致 ②意象合理，画面感强',
        content: [
          { type: 'text', content: '学会了欣赏诗歌，现在我们来"仿写"！仿写就是照着原诗的格式，换上新的内容，写出一首属于自己的诗！', animationType: 'reveal' },
          { type: 'poem', content: '原诗：\n大海啊！\n哪一颗星没有光？\n哪一朵花没有香？\n哪一次我的思潮里\n没有你波涛的清响？', label: '原诗', animationType: 'reveal' },
          { type: 'example', content: '仿写示例：\n天空啊！\n哪一朵云没有影？\n哪一阵风没有声？\n哪一次我的梦境里\n没有你彩虹的微笑？\n保留格式："事物啊！哪一……没有……？"换新意象：天空、云、风、彩虹', label: '仿写示例', animationType: 'bounce' },
          { type: 'tip', content: '仿写三步法：第一步读原诗找格式，第二步定新主题换意象，第三步按格式填新内容。保留格式是关键！', label: '仿写三步法', animationType: 'pulse' },
          { type: 'example', content: '更多仿写示例：\n原诗：风儿吹，树叶飞\n仿写：雨儿落，花瓣飞\n\n原诗：春天的花真美\n仿写：秋天的叶真红\n规律：保留"什么的什么真怎样"的格式', label: '仿写规律', animationType: 'bounce' },
          { type: 'animation', content: '仿写框架高亮动画，原诗格式逐步替换为新内容', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '诗歌仿写框架',
              sceneBuildConfig: {
                sceneName: '仿写过程',
                elements: [
                  { text: '原诗格式：事物啊！哪一…没有…？', x: 50, y: 25, animation: 'bounceIn', delay: 0, color: '#FF6B6B', ttsText: '第一步找格式：事物啊！哪一什么没有什么？' },
                  { text: '换意象：大海→天空，星星→白云', x: 50, y: 50, animation: 'bounceIn', delay: 0.5, color: '#4ECDC4', ttsText: '第二步换意象：大海换成天空，星星换成白云。' },
                  { text: '填新内容：天空啊！哪一朵云没有影？', x: 50, y: 75, animation: 'bounceIn', delay: 1, color: '#FFE66D', ttsText: '第三步填新内容：天空啊！哪一朵云没有影？仿写完成！' },
                ]
              },
              ttsNarration: '诗歌仿写三步：找格式、换意象、填新内容。保留格式换内容，仿写就成功了！',
            },
          },
          { type: 'tip', content: '仿写口诀：读原诗找格式，定主题换意象，按格式填内容。三步仿写，你也是小诗人！', label: '仿写口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范仿写，用原诗格式填新内容。',
        weDo: '亲子一起仿写一首诗，家长写一句，孩子接一句。',
        youDo: '孩子独立仿写一首短诗。',
        parentTips: '【家长预习】学会了欣赏诗歌，现在我们来"仿写"！仿写就是照着原诗的格…\n共学四步：\n①对话出题：问孩子"诗歌仿写的关键是什么？"\n②孩子应答：诗歌仿写要保留原诗的格式和句式，换上新的意象和内容。\n③答错引导：家长可以和孩子一起朗读，用"朗读感受法"——多读几遍，感受节奏和画面\n④快速检测：诗歌仿写的关键是什么？、仿写"大海啊！哪一颗星没有光？"时，下列哪个最…、仿写要保留原诗的格式和（    ）式。',
        funElement: '诗歌小游戏：诗歌变变变！把"大海"换成"天空"，把"星星"换成"白云"，看你的诗变成什么样！',
        gsapAnimations: [
          '[GSAP:highlight|仿写框架高亮|0.5s|框架出现|power2.out]',
          '[GSAP:sceneBuild|诗歌仿写场景构建|0.8s|仿写完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|诗歌仿写框架图|500x300|教学风|png|仿写框架]',
          '[IMG:illustration|仿写示例对比图|500x200|教学风|png|原诗vs仿写]'
        ],
        practiceQuestions: [
          {
            id: 'c4u7l3q1',
            type: 'choice',
            question: '诗歌仿写的关键是什么？',
            options: ['完全照抄', '保留格式换新内容', '随便写'],
            answer: '保留格式换新内容',
            hint: '回忆仿写方法',
            explanation: '诗歌仿写要保留原诗的格式和句式，换上新的意象和内容。'
          },
          {
            id: 'c4u7l3q2',
            type: 'choice',
            question: '仿写"大海啊！哪一颗星没有光？"时，下列哪个最合适？',
            options: ['天空啊！哪一朵云没有影？', '大海啊！哪一颗星没有光？', '今天天气真好'],
            answer: '天空啊！哪一朵云没有影？',
            hint: '保留格式换内容',
            explanation: '"天空啊！哪一朵云没有影？"保留了原诗格式（事物啊！哪一……没有……？），换上了新内容。'
          },
          {
            id: 'c4u7l3q3',
            type: 'fill',
            question: '仿写要保留原诗的格式和___式。',
            answer: '句',
            hint: '保留什么',
            explanation: '仿写要保留原诗的格式和句式，只换新的意象和内容。'
          },
          {
            id: 'c4u7l3q4',
            type: 'choice',
            question: '仿写诗歌时，意象应该怎样选择？',
            options: ['必须和原诗一样', '可以换新的意象', '不用意象'],
            answer: '可以换新的意象',
            hint: '回忆仿写示例',
            explanation: '仿写时可以换新的意象，比如把"大海"换成"天空"，"星星"换成"白云"。'
          },
          {
            id: 'c4u7l3q5',
            type: 'drag',
            question: '把仿写步骤排序：填新内容、保留格式、定主题',
            answer: '定主题,保留格式,填新内容',
            hint: '回忆仿写步骤',
            explanation: '仿写步骤：定主题→保留格式→填新内容。'
          },
          {
            id: 'c4u7l3q6',
            type: 'choice',
            question: '【期末真题】下列哪句是"大海啊！哪一颗星没有光？"的正确仿写？',
            options: ['大海啊！星星真亮！', '春天啊！哪一朵花没有香？', '大海很大'],
            answer: '春天啊！哪一朵花没有香？',
            hint: '找格式相同的',
            explanation: '"春天啊！哪一朵花没有香？"保留了原诗格式（事物啊！哪一……没有……？），是正确仿写。这是期末常考题！'
          },
          {
            id: 'c4u7l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：保留原诗格式、换新内容的写诗方法叫___。',
            answer: '仿写',
            hint: '[诗歌仿写]（语文四年级-第7单元）',
            explanation: '保留原诗格式、换新内容的写诗方法叫仿写。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u7l4',
        title: '诗歌自由创作',
        order: 4,
        teachingMethod: '支架式：灵感激发',
        learningObjective: '我能独立创作一首诗歌',
        successCriteria: '①诗歌主题明确 ②至少运用2种表现手法',
        content: [
          { type: 'text', content: '学完仿写，现在我们自由创作！写诗其实很简单——把心里的感受，用最美的语言写出来就是诗！', animationType: 'reveal' },
          { type: 'example', content: '自由创作三步法：\n第一步找灵感——看到什么想到什么\n第二步选意象——用事物表达感受\n第三步写下来——分行写，注意节奏\n灵感来源：大自然、生活小事、心中的感受', label: '创作三步法', animationType: 'bounce' },
          { type: 'tip', content: '写诗秘诀：诗是心里的话。看到落叶感到秋天，看到月亮想起故乡，把这些感受写下来就是诗！', label: '写诗秘诀', animationType: 'pulse' },
          { type: 'example', content: '学生创作示例：\n《秋天的信》\n风儿摘下一片树叶，\n轻轻放在我的窗前。\n我知道，\n这是秋天写给我的信，\n告诉我——冬天快要来了。', label: '学生作品', animationType: 'bounce' },
          { type: 'animation', content: '诗歌创作场景构建动画，灵感→意象→诗句逐步出现', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '诗歌创作场景',
              sceneBuildConfig: {
                sceneName: '创作过程',
                elements: [
                  { text: '灵感：看到落叶', x: 20, y: 30, animation: 'bounceIn', delay: 0, color: '#FF6B6B', ttsText: '第一步找灵感：看到落叶想到秋天。' },
                  { text: '意象：树叶=秋天的信', x: 50, y: 50, animation: 'bounceIn', delay: 0.5, color: '#4ECDC4', ttsText: '第二步选意象：树叶是秋天的信。' },
                  { text: '写诗：分行写注意节奏', x: 80, y: 70, animation: 'bounceIn', delay: 1, color: '#FFE66D', ttsText: '第三步写下来：分行写，注意节奏。诗就完成啦！' },
                ]
              },
              ttsNarration: '诗歌创作三步：找灵感、选意象、写下来。把心里的感受用最美的语言写出来就是诗！',
            },
          },
          { type: 'text', content: '写诗没有标准答案，每个人写的诗都是独一无二的。大胆写，写出你心里的感受，就是好诗！', animationType: 'reveal' },
          { type: 'tip', content: '创作口诀：找灵感，选意象，分行写，出节奏。心里话用诗写，你就是小诗人！', label: '创作口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范从灵感到成诗的过程，边想边写给孩子看。',
        weDo: '亲子一起创作一首诗，互相激发灵感。',
        youDo: '孩子独立创作一首短诗。',
        parentTips: '【家长预习】学完仿写，现在我们自由创作！写诗其实很简单——把心里的感…\n共学四步：\n①对话出题：问孩子"诗歌自由创作的第一步是什么？"\n②孩子应答：自由创作三步法：第一步找灵感，第二步选意象，第三步写下来。\n③答错引导：家长可以和孩子一起朗读，用"朗读感受法"——多读几遍，感受节奏和画面\n④快速检测：诗歌自由创作的第一步是什么？、写诗的灵感可以从哪里来？、诗歌创作三步法：找灵感→选（    ）→写下来。',
        funElement: '诗歌小游戏：灵感转盘！转到"雨"就写雨，转到"风"就写风，转到"星星"就写星星。看你的灵感能变成什么诗！',
        gsapAnimations: [
          '[GSAP:sceneBuild|诗歌创作场景构建（灵感→意象→诗句）|1s|点击播放|power2.out]',
          '[GSAP:confetti|创作完成撒花|2s|完成创作|power1.out]'
        ],
        images: [
          '[IMG:illustration|诗歌创作灵感图|500x300|水彩画风|png|落叶+窗前]',
          '[IMG:illustration|创作三步法流程图|500x200|教学风|png|三步流程]'
        ],
        practiceQuestions: [
          {
            id: 'c4u7l4q1',
            type: 'choice',
            question: '诗歌自由创作的第一步是什么？',
            options: ['写下来', '找灵感', '选意象'],
            answer: '找灵感',
            hint: '回忆创作三步法',
            explanation: '自由创作三步法：第一步找灵感，第二步选意象，第三步写下来。'
          },
          {
            id: 'c4u7l4q2',
            type: 'choice',
            question: '写诗的灵感可以从哪里来？',
            options: ['只能看书', '大自然、生活、感受', '只能做梦'],
            answer: '大自然、生活、感受',
            hint: '回忆灵感来源',
            explanation: '灵感来源很广：大自然（落叶、月亮）、生活小事、心中的感受，都可以变成诗。'
          },
          {
            id: 'c4u7l4q3',
            type: 'fill',
            question: '诗歌创作三步法：找灵感→选___→写下来。',
            answer: '意象',
            hint: '第二步做什么',
            explanation: '诗歌创作三步法：找灵感→选意象→写下来。'
          },
          {
            id: 'c4u7l4q4',
            type: 'choice',
            question: '写诗时应该怎样？',
            options: ['必须和别人一样', '写出自己心里的感受', '字越多越好'],
            answer: '写出自己心里的感受',
            hint: '回忆写诗秘诀',
            explanation: '写诗要写出自己心里的感受，每个人写的诗都是独一无二的。'
          },
          {
            id: 'c4u7l4q5',
            type: 'drag',
            question: '把创作步骤排序：写下来、找灵感、选意象',
            answer: '找灵感,选意象,写下来',
            hint: '回忆创作三步法',
            explanation: '创作步骤：找灵感→选意象→写下来。'
          },
          {
            id: 'c4u7l4q6',
            type: 'choice',
            question: '【期末真题】下列哪个最适合作为写诗的灵感？',
            options: ['看到落叶想到秋天', '数学题的答案', '字典的页码'],
            answer: '看到落叶想到秋天',
            hint: '哪个有感受和画面',
            explanation: '看到落叶想到秋天，有感受有画面，最适合作为写诗的灵感。这是期末常考题！'
          },
          {
            id: 'c4u7l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：把心里感受用最美语言分行写出来就是___。',
            answer: '诗',
            acceptableAnswers: ['诗', '诗歌'],
            hint: '[诗歌创作]（语文四年级-第7单元）',
            explanation: '把心里感受用最美语言分行写出来就是诗。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u7l5',
        title: '诗歌朗诵会',
        order: 5,
        teachingMethod: '形成性评价+展示',
        learningObjective: '我能有感情地朗诵诗歌并参与朗诵会',
        successCriteria: '①能正确流利朗诵 ②朗诵有感情，节奏得当',
        content: [
          { type: 'text', content: '学了节奏、意象、仿写和创作，现在举办一场"诗歌朗诵会"！把你最喜欢的诗朗诵出来，展示你的风采！', animationType: 'reveal' },
          { type: 'example', content: '朗诵技巧：\n1. 站姿端正，面带微笑\n2. 声音洪亮，吐字清晰\n3. 注意停顿，读出节奏\n4. 带着感情，感染观众\n5. 眼神交流，自信大方', label: '朗诵技巧', animationType: 'bounce' },
          { type: 'tip', content: '朗诵五要素：站姿、声音、停顿、感情、眼神。五个方面都做好，朗诵就精彩！', label: '朗诵五要素', animationType: 'pulse' },
          { type: 'example', content: '朗诵评分标准：\n声音洪亮（20分）\n节奏正确（20分）\n感情充沛（20分）\n吐字清晰（20分）\n仪态大方（20分）\n总分100分，80分以上就是优秀！', label: '评分标准', animationType: 'bounce' },
          { type: 'animation', content: '朗诵会舞台灯光效果动画', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '诗歌朗诵会',
              sequenceConfig: {
                items: ['灯光亮起', '小诗人登场', '深情朗诵', '掌声雷动'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '诗歌朗诵会开始！灯光亮起，小诗人登场，深情朗诵，掌声雷动！',
            },
          },
          { type: 'tip', content: '朗诵口诀：站姿正，声音亮，停顿准，感情足，眼神活。五要素全做好，朗诵精彩人人夸！', label: '朗诵口诀', animationType: 'pulse' },
          { type: 'text', content: '朗诵不仅是读诗，更是把诗的美传递给观众。用心去感受诗，用声音去表达诗，你就是最棒的小诗人！', animationType: 'reveal' },
        ],
        iDo: '家长示范朗诵一首诗，展示站姿、声音、感情。',
        weDo: '亲子一起举办家庭朗诵会，互相朗诵打分。',
        youDo: '孩子独立朗诵一首诗（原创或喜欢的），录音展示。',
        parentTips: '【家长预习】学了节奏、意象、仿写和创作，现在举办一场"诗歌朗诵会"！…\n共学四步：\n①对话出题：问孩子"朗诵诗歌时声音应该怎样？"\n②孩子应答：朗诵时声音要洪亮、吐字清晰，让每个观众都能听清。\n③答错引导：家长可以和孩子一起排练，用"模拟练习法"——在家先演练一遍\n④快速检测：朗诵诗歌时声音应该怎样？、朗诵五要素不包括下列哪一项？、朗诵五要素：站姿、声音、停顿、感情、（    ）。',
        funElement: '诗歌小游戏：家庭朗诵会！全家围坐，每人朗诵一首诗，当评委打分，看谁是最佳朗诵家！歇后语：台上三分钟——台下十年功！',
        gsapAnimations: [
          '[GSAP:sequence|朗诵会舞台灯光效果|0.8s|点击播放|power2.out]',
          '[GSAP:confetti|朗诵完成撒花|2s|朗诵结束|power1.out]'
        ],
        images: [
          '[IMG:illustration|诗歌朗诵会舞台|500x300|可爱卡通风|png|舞台+灯光]',
          '[IMG:illustration|朗诵五要素图|500x200|教学风|png|五要素]'
        ],
        practiceQuestions: [
          {
            id: 'c4u7l5q1',
            type: 'choice',
            question: '朗诵诗歌时声音应该怎样？',
            options: ['越小越好', '洪亮清晰', '越快越好'],
            answer: '洪亮清晰',
            hint: '回忆朗诵技巧',
            explanation: '朗诵时声音要洪亮、吐字清晰，让每个观众都能听清。'
          },
          {
            id: 'c4u7l5q2',
            type: 'choice',
            question: '朗诵五要素不包括下列哪一项？',
            options: ['站姿', '声音', '跳舞'],
            answer: '跳舞',
            hint: '回忆五要素',
            explanation: '朗诵五要素：站姿、声音、停顿、感情、眼神，不包括跳舞。'
          },
          {
            id: 'c4u7l5q3',
            type: 'fill',
            question: '朗诵五要素：站姿、声音、停顿、感情、___。',
            answer: '眼神',
            hint: '回忆五要素',
            explanation: '朗诵五要素：站姿、声音、停顿、感情、眼神。'
          },
          {
            id: 'c4u7l5q4',
            type: 'choice',
            question: '朗诵时除了声音，还要注意什么？',
            options: ['只管声音', '感情和眼神', '不用管其他'],
            answer: '感情和眼神',
            hint: '回忆五要素',
            explanation: '朗诵不仅声音要好，还要有感情，和观众眼神交流。'
          },
          {
            id: 'c4u7l5q5',
            type: 'drag',
            question: '把朗诵五要素排列：感情、站姿、眼神、声音、停顿',
            answer: '站姿,声音,停顿,感情,眼神',
            hint: '回忆朗诵口诀',
            explanation: '朗诵口诀：站姿正，声音亮，停顿准，感情足，眼神活。'
          },
          {
            id: 'c4u7l5q6',
            type: 'choice',
            question: '【期末真题】诗歌朗诵最重要的是什么？',
            options: ['背得快', '带着感情感染观众', '声音最大'],
            answer: '带着感情感染观众',
            hint: '朗诵的灵魂是什么',
            explanation: '诗歌朗诵最重要的是带着感情，把诗的美传递给观众，感染观众。这是期末常考题！'
          },
          {
            id: 'c4u7l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：朗诵五要素是站姿、声音、停顿、感情和___。',
            answer: '眼神',
            hint: '[诗歌朗诵]（语文四年级-第7单元）',
            explanation: '朗诵五要素：站姿、声音、停顿、感情、眼神。这是本单元学过的知识。'
          }
        ]
      }
    ]
  },
  // ==================== 第八单元：综合性学习与测评 ====================
  {
    id: 'c4u8',
    title: '综合性学习与测评',
    subtitle: '研究报告与学期综合测评',
    order: 8,
    lessons: [
      {
        id: 'c4u8l1',
        title: '研究主题选择——提出问题',
        order: 1,
        teachingMethod: 'PBL：项目驱动',
        learningObjective: '我能提出有意义的研究主题和问题',
        successCriteria: '①能提出明确的研究问题 ②能说出研究的基本步骤',
        content: [
          { type: 'text', content: '综合性学习就是用语文知识解决实际问题。这单元我们来学做"研究报告"！第一步就是选一个感兴趣的主题，提出一个好问题。', animationType: 'reveal' },
          { type: 'example', content: '好问题的特点：\n1. 自己感兴趣的——喜欢才能坚持\n2. 能找到资料的——图书馆、网络能查到\n3. 范围不太大的——太大做不完\n比如："我们学校的树有多少种？"就比"中国的树有多少种？"好做。', label: '好问题标准', animationType: 'bounce' },
          { type: 'tip', content: '选题三问法：第一问我感兴趣什么？第二问能找到资料吗？第三问范围合适吗？三个都"是"就是好主题！', label: '选题三问法', animationType: 'pulse' },
          { type: 'example', content: '研究主题示例：\n校园类：我们学校有多少种树？同学们最爱看什么书？\n生活类：我家一周用多少水？超市里哪种水果最畅销？\n文化类：春节有哪些习俗？古诗里的月亮有什么含义？', label: '主题示例', animationType: 'bounce' },
          { type: 'animation', content: '研究主题选择动画，问题气泡逐步出现', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '选择研究主题',
              sceneBuildConfig: {
                sceneName: '选题过程',
                elements: [
                  { text: '我感兴趣什么？', x: 30, y: 30, animation: 'popIn', delay: 0, color: '#FF6B6B', ttsText: '第一问：我感兴趣什么？' },
                  { text: '能找到资料吗？', x: 60, y: 50, animation: 'popIn', delay: 0.4, color: '#4ECDC4', ttsText: '第二问：能找到资料吗？' },
                  { text: '范围合适吗？', x: 40, y: 70, animation: 'popIn', delay: 0.8, color: '#FFE66D', ttsText: '第三问：范围合适吗？三个都是，就是好主题！' },
                ]
              },
              ttsNarration: '选题三问法：感兴趣、能找到资料、范围合适。三个条件都满足就是好主题！',
            },
          },
          { type: 'text', content: '选定主题后，要把问题写清楚。比如"研究校园的树"可以具体化为"我们学校有几棵银杏树？它们有多高？什么时候变黄？"', animationType: 'reveal' },
          { type: 'tip', content: '选题口诀：感兴趣，有资料，范围小。三问选题法，选出好主题！', label: '选题口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范提出一个研究问题，用三问法检验是否合适。',
        weDo: '亲子一起讨论，用三问法选定一个研究主题。',
        youDo: '孩子独立提出一个研究问题并用三问法检验。',
        parentTips: '【家长预习】综合性学习就是用语文知识解决实际问题。这单元我们来学做"…\n共学四步：\n①对话出题：问孩子"选题三问法不包括下列哪一项？"\n②孩子应答：选题三问法：感兴趣吗？能找到资料吗？范围合适吗？不包括题目长不长。\n③答错引导：家长可以帮孩子缩小范围，用"提问缩小法"——把大问题拆成几个小问题逐个解决\n④快速检测：选题三问法不包括下列哪一项？、下列哪个是更好的研究主题？、选题三问法：感兴趣、有资料、范围（    ）。',
        funElement: '学习小游戏：问题泡泡！把你的好奇心变成一个个问题泡泡，戳破不合适的，留下最棒的那个！',
        gsapAnimations: [
          '[GSAP:sceneBuild|研究主题选择动画（问题气泡逐步出现）|1s|点击|power2.out]',
          '[GSAP:highlight|选题三问高亮|0.5s|问题出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|研究主题选择思维导图|500x300|思维导图风|png|选题三问]',
          '[IMG:illustration|问题气泡图|500x200|可爱卡通风|png|问题气泡]'
        ],
        practiceQuestions: [
          {
            id: 'c4u8l1q1',
            type: 'choice',
            question: '选题三问法不包括下列哪一项？',
            options: ['我感兴趣什么', '能找到资料吗', '题目长不长'],
            answer: '题目长不长',
            hint: '回忆三问法',
            explanation: '选题三问法：感兴趣吗？能找到资料吗？范围合适吗？不包括题目长不长。'
          },
          {
            id: 'c4u8l1q2',
            type: 'choice',
            question: '下列哪个是更好的研究主题？',
            options: ['中国的树有多少种', '我们学校有多少种树', '全世界的树'],
            answer: '我们学校有多少种树',
            hint: '范围小且能做',
            explanation: '"我们学校有多少种树"范围合适、能实地调查、自己感兴趣，是最好的研究主题。'
          },
          {
            id: 'c4u8l1q3',
            type: 'fill',
            question: '选题三问法：感兴趣、有资料、范围___。',
            answer: '合适',
            hint: '回忆三问法',
            explanation: '选题三问法：感兴趣吗？能找到资料吗？范围合适吗？'
          },
          {
            id: 'c4u8l1q4',
            type: 'choice',
            question: '好的研究主题应该怎样？',
            options: ['越大越好', '自己感兴趣且能做', '越难越好'],
            answer: '自己感兴趣且能做',
            hint: '回忆好问题标准',
            explanation: '好的研究主题应该自己感兴趣、能找到资料、范围合适，不是越大越难越好。'
          },
          {
            id: 'c4u8l1q5',
            type: 'drag',
            question: '把选题三问按顺序排列：范围合适吗、感兴趣什么、能找到资料吗',
            answer: '感兴趣什么,能找到资料吗,范围合适吗',
            hint: '回忆三问顺序',
            explanation: '选题三问顺序：感兴趣什么→能找到资料吗→范围合适吗。'
          },
          {
            id: 'c4u8l1q6',
            type: 'choice',
            question: '【期末真题】做研究时，第一步应该做什么？',
            options: ['直接写报告', '选定一个感兴趣的主题', '随便选一个'],
            answer: '选定一个感兴趣的主题',
            hint: '研究从哪里开始',
            explanation: '做研究第一步是选定一个自己感兴趣、能找到资料、范围合适的主题。这是期末常考题！'
          },
          {
            id: 'c4u8l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：用三问法选研究主题的方法叫___三问法。',
            answer: '选题',
            hint: '[选题三问法]（语文四年级-第8单元）',
            explanation: '用三问法选研究主题的方法叫选题三问法。这是本单元第一课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u8l2',
        title: '资料收集与整理',
        order: 2,
        teachingMethod: 'PBL：项目驱动',
        learningObjective: '我能收集和整理研究资料',
        successCriteria: '①能提出明确的研究问题 ②能说出研究的基本步骤',
        content: [
          { type: 'text', content: '选定主题后，就要收集资料。资料从哪里来？怎么整理？今天我们学习资料收集与整理的方法！', animationType: 'reveal' },
          { type: 'example', content: '资料来源：\n1. 实地观察——去现场看和记\n2. 书籍查阅——图书馆查相关书\n3. 网络搜索——上网查资料\n4. 采访调查——问老师、同学、家人\n5. 问卷调查——设计问卷收集数据', label: '资料来源', animationType: 'bounce' },
          { type: 'tip', content: '收集资料三原则：第一多渠道（不止一种来源），第二记来源（谁说的、哪本书），第三辨真假（资料是否可靠）。', label: '收集三原则', animationType: 'pulse' },
          { type: 'example', content: '资料整理方法：\n1. 分类整理——按类别分好\n2. 制作表格——用表格记录数据\n3. 做笔记——用自己的话记录\n比如研究校园的树，可以按"树名、数量、位置、特点"分类列表格。', label: '整理方法', animationType: 'bounce' },
          { type: 'animation', content: '资料收集与整理流程动画：收集→分类→表格', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '资料收集整理流程',
              sequenceConfig: {
                items: ['实地观察', '书籍查阅', '网络搜索', '分类整理', '制作表格'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '资料收集整理：实地观察、书籍查阅、网络搜索，然后分类整理、制作表格。',
            },
          },
          { type: 'text', content: '记录资料时要用表格会更清楚。比如研究校园的树，可以做这样的表格：树名|数量|位置|特点。一目了然！', animationType: 'reveal' },
          { type: 'tip', content: '整理口诀：多渠道，记来源，辨真假。分类列，做表格，记笔记。资料整理好，研究才可靠！', label: '整理口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范收集和整理资料，用表格记录观察结果。',
        weDo: '亲子一起收集一个主题的资料，分类整理成表格。',
        youDo: '孩子独立收集和整理一个主题的资料。',
        parentTips: '【家长预习】选定主题后，就要收集资料。资料从哪里来？怎么整理？今天我…\n共学四步：\n①对话出题：问孩子"资料收集的来源不包括下列哪一项？"\n②孩子应答：资料来源包括实地观察、书籍查阅、网络搜索、采访调查、问卷调查，不包括做梦。\n③答错引导：家长可以帮孩子缩小范围，用"提问缩小法"——把大问题拆成几个小问题逐个解决\n④快速检测：资料收集的来源不包括下列哪一项？、收集资料三原则不包括下列哪一项？、收集资料要记（    ），知道资料是谁说的、哪…',
        funElement: '学习小游戏：资料小侦探！像侦探一样收集线索（资料），分类整理，最后拼出真相（结论）！',
        gsapAnimations: [
          '[GSAP:sequence|资料收集整理流程动画|1s|点击播放|power2.out]',
          '[GSAP:highlight|资料来源高亮|0.5s|来源出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|资料来源汇总图|500x300|教学风|png|五种来源]',
          '[IMG:illustration|资料整理表格示例|500x200|教学风|png|分类表格]'
        ],
        practiceQuestions: [
          {
            id: 'c4u8l2q1',
            type: 'choice',
            question: '资料收集的来源不包括下列哪一项？',
            options: ['实地观察', '书籍查阅', '做梦梦到'],
            answer: '做梦梦到',
            hint: '回忆资料来源',
            explanation: '资料来源包括实地观察、书籍查阅、网络搜索、采访调查、问卷调查，不包括做梦。'
          },
          {
            id: 'c4u8l2q2',
            type: 'choice',
            question: '收集资料三原则不包括下列哪一项？',
            options: ['多渠道', '记来源', '越多越好'],
            answer: '越多越好',
            hint: '回忆三原则',
            explanation: '收集资料三原则：多渠道、记来源、辨真假，不是越多越好，要可靠。'
          },
          {
            id: 'c4u8l2q3',
            type: 'fill',
            question: '收集资料要记___，知道资料是谁说的、哪本书来的。',
            answer: '来源',
            hint: '回忆三原则',
            explanation: '收集资料要记来源，知道资料是谁说的、哪本书来的，这样才可靠。'
          },
          {
            id: 'c4u8l2q4',
            type: 'choice',
            question: '整理资料时用什么方法更清楚？',
            options: ['随便写', '制作表格', '不整理'],
            answer: '制作表格',
            hint: '回忆整理方法',
            explanation: '整理资料用制作表格的方法更清楚，按类别分好一目了然。'
          },
          {
            id: 'c4u8l2q5',
            type: 'drag',
            question: '把资料整理步骤排序：制作表格、收集资料、分类整理',
            answer: '收集资料,分类整理,制作表格',
            hint: '回忆整理流程',
            explanation: '资料整理步骤：收集资料→分类整理→制作表格。'
          },
          {
            id: 'c4u8l2q6',
            type: 'choice',
            question: '【期末真题】收集资料时，下列哪种做法最好？',
            options: ['只听一个人的', '多渠道收集并辨真假', '随便网上抄'],
            answer: '多渠道收集并辨真假',
            hint: '回忆三原则',
            explanation: '收集资料要多渠道收集、记来源、辨真假，不能只听一个人的或随便抄。这是期末常考题！'
          },
          {
            id: 'c4u8l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：收集资料要多渠道、记来源、辨___。',
            answer: '真假',
            hint: '[资料收集]（语文四年级-第8单元）',
            explanation: '收集资料三原则：多渠道、记来源、辨真假。这是本单元第二课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u8l3',
        title: '研究报告撰写与展示',
        order: 3,
        teachingMethod: 'PBL：项目驱动',
        learningObjective: '我能撰写简单的研究报告并展示研究成果',
        successCriteria: '①报告结构完整（引言、正文、结论） ②能清晰展示研究发现',
        content: [
          { type: 'text', content: '收集整理好资料后，就要写研究报告了！研究报告就是把你的研究过程和结果写下来，让大家都知道你发现了什么。', animationType: 'reveal' },
          { type: 'example', content: '研究报告结构：\n一、研究题目——研究什么\n二、研究目的——为什么研究\n三、研究方法——怎么研究的\n四、研究过程——做了什么\n五、研究结果——发现了什么\n六、研究结论——得出什么结论', label: '报告结构', animationType: 'bounce' },
          { type: 'tip', content: '研究报告六部分：题目、目的、方法、过程、结果、结论。六部分齐全就是完整的研究报告！', label: '报告六部分', animationType: 'pulse' },
          { type: 'example', content: '研究报告示例：《我们学校有多少种树》\n题目：我们学校有多少种树\n目的：了解校园绿化情况\n方法：实地观察+查阅资料\n过程：用一周时间观察记录校园里的树\n结果：共发现12种树，最多的是银杏树\n结论：校园绿化好，建议多种开花树', label: '报告示例', animationType: 'bounce' },
          { type: 'animation', content: '研究报告六部分逐步构建动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '研究报告结构',
              sceneBuildConfig: {
                sceneName: '报告搭建',
                elements: [
                  { text: '一、研究题目', x: 50, y: 15, animation: 'bounceIn', delay: 0, color: '#FF6B6B', ttsText: '第一部分：研究题目。' },
                  { text: '二、研究目的', x: 50, y: 28, animation: 'bounceIn', delay: 0.2, color: '#4ECDC4', ttsText: '第二部分：研究目的。' },
                  { text: '三、研究方法', x: 50, y: 41, animation: 'bounceIn', delay: 0.4, color: '#FFE66D', ttsText: '第三部分：研究方法。' },
                  { text: '四、研究过程', x: 50, y: 54, animation: 'bounceIn', delay: 0.6, color: '#C9B1FF', ttsText: '第四部分：研究过程。' },
                  { text: '五、研究结果', x: 50, y: 67, animation: 'bounceIn', delay: 0.8, color: '#95E1D3', ttsText: '第五部分：研究结果。' },
                  { text: '六、研究结论', x: 50, y: 80, animation: 'bounceIn', delay: 1, color: '#FFB6C1', ttsText: '第六部分：研究结论。六部分齐全，报告完成！' },
                ]
              },
              ttsNarration: '研究报告六部分：题目、目的、方法、过程、结果、结论。六部分齐全就是完整的研究报告！',
            },
          },
          { type: 'text', content: '写完报告还要展示！可以用手抄报、PPT或口头汇报的方式，把你的研究成果分享给大家。', animationType: 'reveal' },
          { type: 'tip', content: '报告口诀：题目目的方法，过程结果结论。六部分写清楚，研究报告就完成！', label: '报告口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范写一份简单的研究报告，展示六部分结构。',
        weDo: '亲子一起写研究报告，家长写一部分，孩子写一部分。',
        youDo: '孩子独立写一份简单的研究报告。',
        parentTips: '【家长预习】收集整理好资料后，就要写研究报告了！研究报告就是把你的研…\n共学四步：\n①对话出题：问孩子"研究报告的第一部分是什么？"\n②孩子应答：研究报告第一部分是研究题目，说明研究什么。\n③答错引导：家长可以让孩子先列提纲再写，用"提纲引导法"——先写几个关键词，再扩展成句\n④快速检测：研究报告的第一部分是什么？、研究报告共几部分？、研究报告六部分：题目、目的、方法、过程、结果、…',
        funElement: '学习小游戏：报告搭搭乐！六块积木搭一份研究报告，少了哪块都不完整！展示时像科学家一样发言！',
        gsapAnimations: [
          '[GSAP:sceneBuild|研究报告六部分逐步构建|1.5s|点击播放|power2.out]',
          '[GSAP:confetti|报告完成庆祝|2s|报告完成|power1.out]'
        ],
        images: [
          '[IMG:illustration|研究报告结构图|500x350|思维导图风|png|六部分结构]',
          '[IMG:illustration|研究报告展示场景|500x200|可爱卡通风|png|展示场景]'
        ],
        practiceQuestions: [
          {
            id: 'c4u8l3q1',
            type: 'choice',
            question: '研究报告的第一部分是什么？',
            options: ['研究结论', '研究题目', '研究方法'],
            answer: '研究题目',
            hint: '回忆报告结构',
            explanation: '研究报告第一部分是研究题目，说明研究什么。'
          },
          {
            id: 'c4u8l3q2',
            type: 'choice',
            question: '研究报告共几部分？',
            options: ['3部分', '6部分', '10部分'],
            answer: '6部分',
            hint: '回忆报告六部分',
            explanation: '研究报告六部分：题目、目的、方法、过程、结果、结论。'
          },
          {
            id: 'c4u8l3q3',
            type: 'fill',
            question: '研究报告六部分：题目、目的、方法、过程、结果、___。',
            answer: '结论',
            hint: '最后一部分',
            explanation: '研究报告六部分：题目、目的、方法、过程、结果、结论。'
          },
          {
            id: 'c4u8l3q4',
            type: 'choice',
            question: '"共发现12种树"属于研究报告的哪一部分？',
            options: ['研究目的', '研究结果', '研究方法'],
            answer: '研究结果',
            hint: '这是发现了什么',
            explanation: '"共发现12种树"是研究发现的，属于研究结果部分。'
          },
          {
            id: 'c4u8l3q5',
            type: 'drag',
            question: '把研究报告六部分按顺序排列：结论、题目、方法、目的、结果、过程',
            answer: '题目,目的,方法,过程,结果,结论',
            hint: '回忆报告结构',
            explanation: '研究报告顺序：题目→目的→方法→过程→结果→结论。'
          },
          {
            id: 'c4u8l3q6',
            type: 'choice',
            question: '【期末真题】写研究报告时，"为什么研究"属于哪一部分？',
            options: ['研究目的', '研究结果', '研究结论'],
            answer: '研究目的',
            hint: '为什么研究是什么',
            explanation: '"为什么研究"说明研究的目的，属于研究目的部分。这是期末常考题！'
          },
          {
            id: 'c4u8l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：研究报告由题目、目的、方法、过程、结果和___六部分组成。',
            answer: '结论',
            hint: '[研究报告]（语文四年级-第8单元）',
            explanation: '研究报告六部分：题目、目的、方法、过程、结果、结论。这是本单元第三课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u8l4',
        title: '词语与阅读总复习',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        content: [
          { type: 'text', content: '学期快结束了，我们来总复习！这节课复习词语和阅读理解两大板块，把学过的知识串起来！', animationType: 'reveal' },
          { type: 'example', content: '词语板块复习：\n第一单元：近义词、反义词、词语归类、AABB式\n第二单元：数字成语、动物成语、寓言成语、历史成语\n口诀：近反归类特殊词，成语故事会运用', label: '词语复习', animationType: 'bounce' },
          { type: 'tip', content: '复习方法：不要从头到尾看一遍，要用"查漏补缺法"——做几道题，发现哪里不会就重点复习哪里！', label: '复习方法', animationType: 'pulse' },
          { type: 'example', content: '阅读板块复习：\n第三单元：概括段意、概括内容、体会情感、分析人物\n方法：找中心句、要素串联、找关键语句、看动作语言\n口诀：概括找中心，内容串要素，情感找关键，人物看言行', label: '阅读复习', animationType: 'bounce' },
          { type: 'animation', content: '总复习知识树动画，各单元知识点逐一亮起', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '知识总复习',
              sequenceConfig: {
                items: ['词语拓展', '成语运用', '阅读理解', '概括与体会', '综合复习'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '总复习！词语拓展、成语运用、阅读理解、概括与体会，把知识串起来！',
            },
          },
          { type: 'tip', content: '总复习口诀：词语近反归特殊，成语故事会运用。阅读概括找中心，体会情感看言行。知识串联记牢固！', label: '总复习口诀', animationType: 'pulse' },
          { type: 'text', content: '复习时可以做一个"知识卡片"，正面写问题，背面写答案。自己考自己，比单纯看书效果好！', animationType: 'reveal' },
        ],
        iDo: '家长示范用查漏补缺法复习，做题发现不会的再重点看。',
        weDo: '亲子一起做复习题，互相出题考对方。',
        youDo: '孩子独立完成词语和阅读复习题。',
        parentTips: '【家长预习】学期快结束了，我们来总复习！这节课复习词语和阅读理解两大…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '复习小游戏：知识大闯关！过词语关、成语关、阅读关，全过就是知识大王！歇后语：温故而知新——可以为师矣！',
        gsapAnimations: [
          '[GSAP:sequence|总复习知识树动画|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|各单元知识点逐一亮起|0.4s|知识点出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|知识总复习树|500x350|思维导图风|png|知识树]',
          '[IMG:illustration|查漏补缺法示意图|500x200|教学风|png|复习方法]'
        ],
        practiceQuestions: [
          {
            id: 'c4u8l4q1',
            type: 'choice',
            question: '"美丽"和"漂亮"是什么关系？',
            options: ['反义词', '近义词', '同音词'],
            answer: '近义词',
            hint: '回忆第一单元',
            explanation: '美丽和漂亮意思相近，是近义词。这是第一单元学过的知识。'
          },
          {
            id: 'c4u8l4q2',
            type: 'choice',
            question: '"狐假虎威"比喻什么？',
            options: ['狐狸和老虎', '倚仗别人势力欺压人', '动物成精'],
            answer: '倚仗别人势力欺压人',
            hint: '回忆第二单元',
            explanation: '狐假虎威比喻倚仗别人的势力欺压人。这是第二单元学过的知识。'
          },
          {
            id: 'c4u8l4q3',
            type: 'fill',
            question: '概括段意要找___句。',
            answer: '中心',
            hint: '回忆第三单元',
            explanation: '概括段意要找中心句。这是第三单元学过的知识。'
          },
          {
            id: 'c4u8l4q4',
            type: 'choice',
            question: '概括主要内容用什么方法？',
            options: ['找中心句', '要素串联法', '色彩标注法'],
            answer: '要素串联法',
            hint: '回忆第三单元',
            explanation: '概括主要内容用要素串联法：时间+地点+人物+起因+经过+结果。'
          },
          {
            id: 'c4u8l4q5',
            type: 'drag',
            question: '把复习板块和方法配对：词语、成语、概括段意、概括内容',
            answer: '近反归类,故事运用,找中心句,要素串联',
            hint: '回忆各单元知识',
            explanation: '词语—近反归类，成语—故事运用，概括段意—找中心句，概括内容—要素串联。'
          },
          {
            id: 'c4u8l4q6',
            type: 'choice',
            question: '【期末真题】用查漏补缺法复习时应该怎样？',
            options: ['从头到尾看一遍', '做题发现不会的再重点复习', '只看会的'],
            answer: '做题发现不会的再重点复习',
            hint: '回忆复习方法',
            explanation: '查漏补缺法是做题发现哪里不会就重点复习哪里，比从头看到尾有效。这是期末常考题！'
          },
          {
            id: 'c4u8l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：复习时做题发现不会的再重点复习的方法叫___补缺法。',
            answer: '查漏',
            hint: '[复习方法]（语文四年级-第8单元）',
            explanation: '做题发现不会的再重点复习的方法叫查漏补缺法。这是本单元第四课学过的知识。'
          }
        ]
      },
      {
        id: 'c4u8l5',
        title: '学期综合测评',
        order: 5,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        content: [
          { type: 'text', content: '这是本学期的最后一课！让我们用一份综合测评，检验这学期的学习成果。加油，你一定行！', animationType: 'reveal' },
          { type: 'example', content: '本学期学习回顾：\n第一单元：词语拓展与归类\n第二单元：成语故事与运用\n第三单元：阅读理解深化\n第四单元：记叙文写作\n第五单元：说明文入门\n第六单元：古诗词理解\n第七单元：现代诗歌欣赏\n第八单元：综合性学习', label: '学期回顾', animationType: 'bounce' },
          { type: 'tip', content: '测评技巧：先易后难，遇到不会的先跳过，最后再回来做。认真审题，仔细检查！', label: '测评技巧', animationType: 'pulse' },
          { type: 'example', content: '测评题型：\n1. 词语题——近义词、反义词、成语\n2. 阅读题——概括段意、体会情感\n3. 写作题——记叙文或说明文\n4. 古诗题——背诵和理解\n5. 诗歌题——节奏和意象', label: '测评题型', animationType: 'bounce' },
          { type: 'animation', content: '学期测评通关动画，八单元逐一通过', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '学期测评通关',
              timelineConfig: {
                steps: [
                  { id: 's1', text: '词语关', emoji: '📝', ttsNarration: '第一关：词语关。' },
                  { id: 's2', text: '成语关', emoji: '📚', ttsNarration: '第二关：成语关。' },
                  { id: 's3', text: '阅读关', emoji: '📖', ttsNarration: '第三关：阅读关。' },
                  { id: 's4', text: '写作关', emoji: '✏️', ttsNarration: '第四关：写作关。' },
                  { id: 's5', text: '古诗关', emoji: '🎨', ttsNarration: '第五关：古诗关。' },
                  { id: 's6', text: '诗歌关', emoji: '🌟', ttsNarration: '第六关：诗歌关。恭喜通关，你是语文小达人！' },
                ],
              },
              ttsNarration: '学期综合测评：词语、成语、阅读、写作、古诗、诗歌，六关全过就是语文小达人！',
            },
          },
          { type: 'tip', content: '学期口诀：词语成语打基础，阅读写作展能力，古诗诗歌品文化，综合学习用语文。四年级语文，收获满满！', label: '学期口诀', animationType: 'pulse' },
          { type: 'text', content: '不管测评结果如何，重要的是这学期你学到了很多知识，变得更厉害了！继续加油，五年级见！', animationType: 'reveal' },
        ],
        iDo: '家长讲解测评技巧，鼓励孩子自信应考。',
        weDo: '亲子一起回顾本学期学过的知识，互相提问。',
        youDo: '孩子独立完成学期综合测评，正确率达标。',
        parentTips: '【家长预习】这是本学期的最后一课！让我们用一份综合测评，检验这学期的…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '学期大游戏：语文大冒险！过六关——词语、成语、阅读、写作、古诗、诗歌，全过就是四年级语文大王！歇后语：百尺竿头——更进一步！',
        gsapAnimations: [
          '[GSAP:timeline|学期测评通关动画|2s|通关|power2.out]',
          '[GSAP:confetti|学期完成庆祝|3s|全部通关|power1.out]'
        ],
        images: [
          '[IMG:illustration|语文小达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|学期学习回顾图|500x300|思维导图风|png|八单元总结]'
        ],
        practiceQuestions: [
          {
            id: 'c4u8l5q1',
            type: 'choice',
            question: '"高高兴兴"属于哪种词语形式？',
            options: ['AABB式', 'ABCC式', 'AABC式'],
            answer: 'AABB式',
            hint: '回忆第一单元',
            explanation: '高高兴兴是两个字都重叠的AABB式。这是第一单元学过的知识。'
          },
          {
            id: 'c4u8l5q2',
            type: 'choice',
            question: '"拔苗助长"告诉我们什么道理？',
            options: ['要帮助禾苗', '不要急于求成', '禾苗要常拔'],
            answer: '不要急于求成',
            hint: '回忆第二单元',
            explanation: '拔苗助长告诉我们不要急于求成，违反规律反而坏事。这是第二单元学过的知识。'
          },
          {
            id: 'c4u8l5q3',
            type: 'fill',
            question: '分析人物要从动作和___两方面看。',
            answer: '语言',
            hint: '回忆第三单元',
            explanation: '分析人物要从动作（做什么）和语言（说什么）两方面看。这是第三单元学过的知识。'
          },
          {
            id: 'c4u8l5q4',
            type: 'choice',
            question: '记叙文写作四步法的第二步是什么？',
            options: ['搭框架', '写经过', '加对话'],
            answer: '写经过',
            hint: '回忆第四单元',
            explanation: '记叙文写作四步法：搭框架→写经过→加动作→加对话。第二步是写经过。'
          },
          {
            id: 'c4u8l5q5',
            type: 'drag',
            question: '把本学期单元和主题配对：第一单元、第三单元、第五单元、第六单元',
            answer: '词语拓展,阅读理解,说明文,古诗词',
            hint: '回忆各单元主题',
            explanation: '第一单元—词语拓展，第三单元—阅读理解，第五单元—说明文，第六单元—古诗词。'
          },
          {
            id: 'c4u8l5q6',
            type: 'choice',
            question: '【期末真题】本学期学了四种说明方法，下列哪个不是？',
            options: ['列数字', '作比较', '排比句'],
            answer: '排比句',
            hint: '回忆第五单元',
            explanation: '四种说明方法是列数字、作比较、打比方、举例子。排比句是修辞手法，不是说明方法。这是期末常考题！'
          },
          {
            id: 'c4u8l5q7',
            type: 'fill',
            question: '回顾本学期学过的知识：古诗理解四招是诗画结合、情感追踪、意象理解和___阅读。',
            answer: '对比',
            hint: '[古诗理解四招]（语文四年级-第6单元）',
            explanation: '古诗理解四招：诗画结合、情感追踪、意象理解、对比阅读。这是本学期第六单元学过的知识。'
          }
        ]
      }
    ]
  }
]
