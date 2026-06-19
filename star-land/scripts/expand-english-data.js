/**
 * 英语课程数据扩充脚本
 * 功能：
 * 1. 现有3课时每课时从3题扩充到7题（+4题：提高2+挑战2+回溯1）
 * 2. 每单元新增第4课（形成性评价）和第5课（综合应用）
 * 3. 每单元至少1道【期末真题】
 * 4. e3u5(Jobs)添加sceneBuild动画
 */

const fs = require('fs');
const path = require('path');

// ========== 各年级各单元的题目数据 ==========

// 一年级题目数据
const grade1Data = {
  e1u1: { // Hello!
    title: 'Hello!',
    reviewTitle: 'Hello! Review',
    lifeTitle: 'Hello! in Life',
    lessons: [
      { // l1 打招呼
        extra: [
          { id: 'e1u1l1q4', type: 'choice', question: '早上见到老师应该说？', options: ['Good morning', 'Good night', 'Goodbye', 'Sorry'], answer: 'Good morning', hint: '早上的问候语', explanation: 'Good morning是早上好的意思，早上见面时使用' },
          { id: 'e1u1l1q5', type: 'fill', question: 'Hi和Hello意思相同，但Hi更____。', answer: '随意', hint: '哪个更简短？', explanation: 'Hi比Hello更简短随意，朋友之间常用' },
          { id: 'e1u1l1q6', type: 'choice', question: '小明在公园遇到新朋友，应该先说什么？', options: ['Hello! Nice to meet you!', 'Goodbye!', 'Sorry!', 'Thank you!'], answer: 'Hello! Nice to meet you!', hint: '第一次见面说什么？', explanation: 'Hello! Nice to meet you!是初次见面时的礼貌用语' },
          { id: 'e1u1l1q7', type: 'fill', question: '放学时对同学说"再见"：____!', answer: 'Goodbye', hint: '[打招呼用语]（英语一年级-第1单元）', explanation: 'Goodbye是再见的意思，和Hello是一对反义问候语' },
        ]
      },
      { // l2 自我介绍
        extra: [
          { id: 'e1u1l2q4', type: 'choice', question: '"My name is Tom"中name是什么意思？', options: ['名字', '年龄', '学校', '颜色'], answer: '名字', hint: 'My name is...介绍什么？', explanation: 'name是名字的意思，My name is...就是我的名字是...' },
          { id: 'e1u1l2q5', type: 'fill', question: 'Nice to ____ you!（遇见）', answer: 'meet', hint: '初次见面说什么？', explanation: 'Nice to meet you!表示很高兴认识你，meet是遇见' },
          { id: 'e1u1l2q6', type: 'choice', question: '小明自我介绍后，小红应该怎么回应？', options: ['Nice to meet you too!', 'Goodbye!', 'I am fine.', 'Thank you!'], answer: 'Nice to meet you too!', hint: '别人自我介绍后怎么回应？', explanation: 'Nice to meet you too!表示我也很高兴认识你，是礼貌的回应' },
          { id: 'e1u1l2q7', type: 'drag', question: '把词拖到正确位置：打招呼+自我介绍=____+My name is...', answer: 'Hello', hint: '[打招呼用语]（英语一年级-第1单元）', explanation: 'Hello是打招呼，My name is...是自我介绍，两个连用更礼貌' },
        ]
      },
      { // l3 课堂用语
        extra: [
          { id: 'e1u1l3q4', type: 'choice', question: 'Stand up和Sit down是什么关系？', options: ['反义词', '同义词', '无关词', '近义词'], answer: '反义词', hint: '起立和坐下是什么关系？', explanation: 'Stand up起立和Sit down坐下是一对反义词' },
          { id: 'e1u1l3q5', type: 'fill', question: '别人帮了你，应该说____ you.（谢谢）', answer: 'Thank', hint: '表示礼貌的感谢', explanation: 'Thank you表示谢谢你，是重要的礼貌用语' },
          { id: 'e1u1l3q6', type: 'choice', question: '课堂上老师想让同学们安静，应该说什么？', options: ['Please be quiet', 'Stand up', 'Run please', 'Sing a song'], answer: 'Please be quiet', hint: '安静下来怎么说？', explanation: 'Please be quiet表示请安静，是课堂管理用语' },
          { id: 'e1u1l3q7', type: 'choice', question: 'Hello和Thank you都属于哪类用语？', options: ['礼貌用语', '运动用语', '天气用语', '颜色用语'], answer: '礼貌用语', hint: '[打招呼用语]（英语一年级-第1单元）', explanation: 'Hello和Thank you都是日常礼貌用语，是英语学习的基础' },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '让我们来回顾Hello单元学到的内容！打招呼用语Hello/Hi、自我介绍My name is...、课堂用语Stand up/Sit down/Thank you', animationType: 'reveal' },
        { type: 'formula', content: '打招呼公式：Hello/Hi + My name is... + Nice to meet you!', label: '打招呼+自我介绍公式', animationType: 'typewriter' },
        { type: 'animation', content: '三个场景回顾：打招呼、自我介绍、课堂指令', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u1l4q1', type: 'choice', question: '以下哪个是打招呼用语？', options: ['Hello', 'Red', 'Apple', 'Run'], answer: 'Hello', hint: '见面时说的话', explanation: 'Hello是打招呼用语，见面时说Hello表示你好' },
        { id: 'e1u1l4q2', type: 'fill', question: 'My ____ is Lily.（名字）', answer: 'name', hint: '自我介绍时说什么？', explanation: 'My name is...是自我介绍的标准句型' },
        { id: 'e1u1l4q3', type: 'choice', question: '老师想让全班起立，应该说什么？', options: ['Stand up, please', 'Sit down, please', 'Hello, please', 'Thank you, please'], answer: 'Stand up, please', hint: '起立的课堂指令', explanation: 'Stand up, please表示请起立，是课堂常用指令' },
        { id: 'e1u1l4q4', type: 'drag', question: '把反义词配对：Stand up ↔ ____', answer: 'Sit down', hint: '起立的反义词是什么？', explanation: 'Stand up和Sit down是一对反义词，起立和坐下' },
        { id: 'e1u1l4q5', type: 'choice', question: '【期末真题】当你第一次见到新同学时，应该说？', options: ['Nice to meet you!', 'Goodbye!', 'I am sorry.', 'Stand up!'], answer: 'Nice to meet you!', hint: '初次见面的礼貌用语', explanation: 'Nice to meet you!是初次见面时的标准礼貌用语' },
        { id: 'e1u1l4q6', type: 'fill', question: 'Hello! My name ____ Tom. Nice to meet you!', answer: 'is', hint: 'name后面跟什么动词？', explanation: 'My name is...中is是动词，表示"是"' },
        { id: 'e1u1l4q7', type: 'choice', question: '以下哪个不是礼貌用语？', options: ['Run fast', 'Hello', 'Thank you', 'Nice to meet you'], answer: 'Run fast', hint: '哪个不是日常礼貌表达？', explanation: 'Run fast是跑步快，不是礼貌用语；Hello、Thank you、Nice to meet you都是' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '在日常生活中，我们随时随地都会用到打招呼和自我介绍！去学校、见朋友、认识新同学，都需要这些英语', animationType: 'reveal' },
        { type: 'example', content: '场景1：上学路上遇到同学 → Hello! How are you?\n场景2：新学期认识新朋友 → Hi! My name is... Nice to meet you!\n场景3：课堂上 → Stand up! Good morning, teacher!', label: '生活场景应用', animationType: 'bounce' },
        { type: 'tip', content: '英语就在生活中！每天至少用英语打一次招呼，坚持下来你会越来越自信！', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u1l5q1', type: 'choice', question: '上学路上遇到老师，应该说？', options: ['Good morning, teacher!', 'Goodbye!', 'Stand up!', 'Sit down!'], answer: 'Good morning, teacher!', hint: '早上见到老师怎么打招呼？', explanation: 'Good morning, teacher!是早上见到老师的礼貌问候' },
        { id: 'e1u1l5q2', type: 'fill', question: '新同学来了，你说：____! My name is Xiaoming.', answer: 'Hello', hint: '先打招呼再自我介绍', explanation: 'Hello! My name is...先打招呼再自我介绍，是最自然的顺序' },
        { id: 'e1u1l5q3', type: 'choice', question: '在超市遇到邻居阿姨，应该说？', options: ['Hello! How are you?', 'Stand up!', 'Good night!', 'I am sorry.'], answer: 'Hello! How are you?', hint: '日常见面怎么打招呼？', explanation: 'Hello! How are you?是日常见面时的友好问候' },
        { id: 'e1u1l5q4', type: 'drag', question: '把场景和用语配对：上课起立=____', answer: 'Stand up', hint: '课堂指令', explanation: 'Stand up是上课起立的指令，在课堂生活中经常使用' },
        { id: 'e1u1l5q5', type: 'choice', question: '【期末真题】小明转学到新学校，第一天应该对同学们说什么？', options: ['Hello! My name is Xiaoming. Nice to meet you!', 'Goodbye!', 'Stand up!', 'I don\'t know.'], answer: 'Hello! My name is Xiaoming. Nice to meet you!', hint: '新同学自我介绍怎么说？', explanation: 'Hello! My name is... Nice to meet you!是新同学自我介绍的最佳方式' },
        { id: 'e1u1l5q6', type: 'fill', question: '别人帮助了你，应该说：____ you!', answer: 'Thank', hint: '表示感谢', explanation: 'Thank you!表示谢谢你，生活中经常使用' },
        { id: 'e1u1l5q7', type: 'choice', question: '晚上睡觉前对爸爸妈妈说什么？', options: ['Good night!', 'Stand up!', 'Hello!', 'Nice to meet you!'], answer: 'Good night!', hint: '晚上的告别语', explanation: 'Good night!是晚安的意思，睡前对家人说' },
      ]
    }
  },
  e1u2: { // Colors
    title: 'Colors',
    reviewTitle: 'Colors Review',
    lifeTitle: 'Colors in Life',
    lessons: [
      {
        extra: [
          { id: 'e1u2l1q4', type: 'choice', question: '消防车是什么颜色？', options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 'Red', hint: '消防车的颜色很醒目', explanation: '消防车是红色的Red，红色很醒目容易看到' },
          { id: 'e1u2l1q5', type: 'fill', question: 'Bananas are ____.（黄色）', answer: 'Yellow', hint: '香蕉是什么颜色？', explanation: 'Bananas are yellow表示香蕉是黄色的' },
          { id: 'e1u2l1q6', type: 'choice', question: '红绿灯中，红色代表什么？', options: ['Stop停止', 'Go通行', 'Wait等待', 'Run跑步'], answer: 'Stop停止', hint: '红灯亮了要怎么做？', explanation: '红灯代表停止Stop，这是交通规则' },
          { id: 'e1u2l1q7', type: 'drag', question: '把颜色拖到正确位置：天空是____的', answer: 'Blue', hint: '[颜色混合]（英语一年级-第2单元）', explanation: '天空是蓝色的Blue，这是生活中最常见的蓝色事物' },
        ]
      },
      {
        extra: [
          { id: 'e1u2l2q4', type: 'choice', question: '红色和蓝色混合变成什么颜色？', options: ['Purple', 'Orange', 'Green', 'Pink'], answer: 'Purple', hint: '想想葡萄的颜色', explanation: 'Red + Blue = Purple，红色加蓝色变成紫色' },
          { id: 'e1u2l2q5', type: 'fill', question: 'Red and yellow make ____.（橙色）', answer: 'Orange', hint: '红+黄=？', explanation: 'Red + Yellow = Orange，红色加黄色变成橙色' },
          { id: 'e1u2l2q6', type: 'choice', question: '小明想调出绿色，他需要哪两种颜色？', options: ['Blue and Yellow', 'Red and Yellow', 'Red and Blue', 'Red and Green'], answer: 'Blue and Yellow', hint: '绿色由哪两种颜色混合？', explanation: 'Blue + Yellow = Green，蓝色加黄色变成绿色' },
          { id: 'e1u2l2q7', type: 'choice', question: 'Orange既是颜色又是水果，这叫什么现象？', options: ['一词多义', '反义词', '同音词', '缩写词'], hint: '[彩虹七色]（英语一年级-第2单元）', answer: '一词多义', explanation: 'Orange既是橙色又是橘子，一个词有两个意思，叫一词多义' },
        ]
      },
      {
        extra: [
          { id: 'e1u2l3q4', type: 'choice', question: '彩虹中排在绿色后面的是什么颜色？', options: ['Blue', 'Red', 'Yellow', 'Orange'], answer: 'Blue', hint: '彩虹颜色顺序', explanation: '彩虹顺序：Red, Orange, Yellow, Green, Blue, Indigo, Violet' },
          { id: 'e1u2l3q5', type: 'fill', question: '彩虹最里面的颜色是____.（紫色）', answer: 'Violet', hint: '紫罗兰色', explanation: 'Violet是紫罗兰色，是彩虹最内侧的颜色' },
          { id: 'e1u2l3q6', type: 'choice', question: '【期末真题】下列哪种颜色不在彩虹中？', options: ['Pink', 'Red', 'Yellow', 'Blue'], answer: 'Pink', hint: '彩虹有七种颜色', explanation: '彩虹七色是红橙黄绿蓝靛紫，没有粉色Pink' },
          { id: 'e1u2l3q7', type: 'drag', question: '把颜色拖到正确位置：Red + Blue = ____', answer: 'Purple', hint: '[颜色混合]（英语一年级-第2单元）', explanation: '回顾颜色混合知识：Red + Blue = Purple' },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '回顾Colors单元！我们学了四种基本颜色Red/Yellow/Blue/Green、颜色混合、彩虹七色', animationType: 'reveal' },
        { type: 'formula', content: '颜色混合公式：\nRed + Yellow = Orange\nBlue + Yellow = Green\nRed + Blue = Purple', label: '颜色混合公式', animationType: 'typewriter' },
        { type: 'animation', content: '颜色卡片翻转回顾，颜色混合动画重现', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u2l4q1', type: 'choice', question: '草地是什么颜色？', options: ['Green', 'Red', 'Blue', 'Yellow'], answer: 'Green', hint: '植物的颜色', explanation: 'Green是绿色，草地和树叶都是绿色的' },
        { id: 'e1u2l4q2', type: 'fill', question: 'Blue and yellow make ____.（绿色）', answer: 'Green', hint: '颜色混合公式', explanation: 'Blue + Yellow = Green，蓝色加黄色变成绿色' },
        { id: 'e1u2l4q3', type: 'choice', question: '彩虹有几种颜色？', options: ['7种', '5种', '3种', '10种'], answer: '7种', hint: '红橙黄绿蓝靛紫', explanation: '彩虹有7种颜色：Red, Orange, Yellow, Green, Blue, Indigo, Violet' },
        { id: 'e1u2l4q4', type: 'drag', question: '把颜色拖到正确位置：Red + Yellow = ____', answer: 'Orange', hint: '红+黄=？', explanation: 'Red + Yellow = Orange，红色加黄色变成橙色' },
        { id: 'e1u2l4q5', type: 'choice', question: '【期末真题】太阳是什么颜色？', options: ['Yellow', 'Blue', 'Red', 'Green'], answer: 'Yellow', hint: '太阳的颜色', explanation: '太阳是黄色的Yellow，是彩虹颜色之一' },
        { id: 'e1u2l4q6', type: 'fill', question: 'Red and blue make ____.（紫色）', answer: 'Purple', hint: '红+蓝=？', explanation: 'Red + Blue = Purple，红色加蓝色变成紫色' },
        { id: 'e1u2l4q7', type: 'choice', question: '以下哪个既是颜色又是水果？', options: ['Orange', 'Red', 'Blue', 'Green'], answer: 'Orange', hint: '一词多义的颜色词', explanation: 'Orange既是橙色又是橘子，一个词两个意思' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '颜色在生活中无处不在！衣服的颜色、食物的颜色、交通灯的颜色……用英语说出你看到的颜色吧！', animationType: 'reveal' },
        { type: 'example', content: '场景1：描述衣服 → I am wearing a red shirt.\n场景2：描述水果 → The apple is red. The banana is yellow.\n场景3：交通灯 → Red light, stop! Green light, go!', label: '颜色在生活中的应用', animationType: 'bounce' },
        { type: 'tip', content: '每天找3样东西，用英语说出它们的颜色，坚持练习！', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u2l5q1', type: 'choice', question: '树叶在秋天变成什么颜色？', options: ['Yellow', 'Blue', 'Red', 'Green'], answer: 'Yellow', hint: '秋天树叶变黄', explanation: '秋天树叶变成黄色Yellow，也有变成红色或橙色的' },
        { id: 'e1u2l5q2', type: 'fill', question: 'The sky is ____.（蓝色）', answer: 'Blue', hint: '天空的颜色', explanation: 'The sky is blue表示天空是蓝色的' },
        { id: 'e1u2l5q3', type: 'choice', question: '红绿灯中绿色代表什么？', options: ['Go通行', 'Stop停止', 'Wait等待', 'Run跑步'], answer: 'Go通行', hint: '绿灯亮了怎么做？', explanation: '绿灯代表通行Go，红灯代表停止Stop' },
        { id: 'e1u2l5q4', type: 'drag', question: '把颜色拖到正确位置：中国国旗是____的', answer: 'Red', hint: '五星红旗的颜色', explanation: '中国国旗是红色的Red，五星红旗' },
        { id: 'e1u2l5q5', type: 'choice', question: '【期末真题】小明穿了一件蓝色上衣和黄色裤子，看起来像什么水果？', options: ['Green apple（青苹果）', 'Orange（橘子）', 'Banana（香蕉）', 'Grape（葡萄）'], answer: 'Green apple（青苹果）', hint: 'Blue + Yellow = ?', explanation: '蓝色加黄色混合是绿色Green，像青苹果' },
        { id: 'e1u2l5q6', type: 'fill', question: 'I like ____ flowers.（红色的花）', answer: 'Red', hint: '花的颜色', explanation: 'Red flowers表示红色的花，用颜色描述事物' },
        { id: 'e1u2l5q7', type: 'choice', question: '大海是什么颜色？', options: ['Blue', 'Red', 'Yellow', 'Green'], answer: 'Blue', hint: '海水的颜色', explanation: '大海是蓝色的Blue，The ocean is blue' },
      ]
    }
  },
  e1u3: { // Numbers
    title: 'Numbers',
    reviewTitle: 'Numbers Review',
    lifeTitle: 'Numbers in Life',
    lessons: [
      {
        extra: [
          { id: 'e1u3l1q4', type: 'choice', question: '双手共有几根手指？', options: ['Ten', 'Five', 'Eight', 'Six'], answer: 'Ten', hint: '两只手加起来', explanation: '双手共有10根手指，Ten表示10' },
          { id: 'e1u3l1q5', type: 'fill', question: 'One, two, ____, four.（三）', answer: 'Three', hint: '2和4中间的数字', explanation: 'Three表示3，排在2和4之间' },
          { id: 'e1u3l1q6', type: 'choice', question: '【期末真题】下列哪个数字的发音以"th"开头？', options: ['Three', 'Five', 'Seven', 'Nine'], answer: 'Three', hint: '注意th的发音', explanation: 'Three以th开头，发音时轻轻咬舌尖' },
          { id: 'e1u3l1q7', type: 'drag', question: '把数字拖到正确位置：一只手有____根手指', answer: 'Five', hint: '[数字歌]（英语一年级-第3单元）', explanation: '一只手有5根手指Five，回顾数字与生活联系' },
        ]
      },
      {
        extra: [
          { id: 'e1u3l2q4', type: 'choice', question: '数字歌从10倒数到1，9后面是？', options: ['Eight', 'Seven', 'Ten', 'Six'], answer: 'Eight', hint: '10, 9, ?', explanation: '倒数时9后面是8，Eight表示8' },
          { id: 'e1u3l2q5', type: 'fill', question: 'Ten little ____.（印第安男孩）', answer: 'Indians', hint: '歌曲名称', explanation: '《Ten Little Indians》是经典数字儿歌' },
          { id: 'e1u3l2q6', type: 'choice', question: '小明从5开始倒数，第三个数是什么？', options: ['Three', 'Four', 'Two', 'Six'], answer: 'Three', hint: '5, 4, 3...', explanation: '从5倒数：5, 4, 3，第三个数是3' },
          { id: 'e1u3l2q7', type: 'choice', question: '数字歌可以帮助我们做什么？', options: ['记住数字顺序', '学习颜色', '认识动物', '了解天气'], hint: '[数数游戏]（英语一年级-第3单元）', answer: '记住数字顺序', explanation: '数字歌帮助记住1-10的顺序，是学习数字的好方法' },
        ]
      },
      {
        extra: [
          { id: 'e1u3l3q4', type: 'choice', question: '"How many books?"是在问什么？', options: ['有多少本书', '书是什么颜色', '书在哪里', '谁有书'], answer: '有多少本书', hint: 'How many问什么？', explanation: 'How many?问数量，How many books?问有多少本书' },
          { id: 'e1u3l3q5', type: 'fill', question: 'I have ____ pencils.（8支铅笔）', answer: 'Eight', hint: '8的英语', explanation: 'Eight表示8，I have eight pencils表示我有8支铅笔' },
          { id: 'e1u3l3q6', type: 'choice', question: '小明有3个苹果，小红给了他2个，现在有几个？', options: ['Five', 'Three', 'Two', 'Six'], answer: 'Five', hint: '3 + 2 = ?', explanation: '3 + 2 = 5，Five apples' },
          { id: 'e1u3l3q7', type: 'drag', question: '把数字拖到正确位置：2 + 3 = ____', answer: 'Five', hint: '[1-10数字]（英语一年级-第3单元）', explanation: '2 + 3 = 5，Five，回顾数字加法' },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '回顾Numbers单元！我们学了1-10的数字、数字歌、How many问数量', animationType: 'reveal' },
        { type: 'formula', content: '数字表达公式：\nHow many + 名词复数？\n数字 + 名词复数（如：Five books）\n大多数名词复数加s', label: '数量表达公式', animationType: 'typewriter' },
        { type: 'animation', content: '数字1-10跳动回顾，计数动画重现', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u3l4q1', type: 'choice', question: '数字6用英语怎么说？', options: ['Six', 'Seven', 'Five', 'Eight'], answer: 'Six', hint: '5后面的数字', explanation: 'Six表示6，排在5后面' },
        { id: 'e1u3l4q2', type: 'fill', question: 'How ____ apples do you have?（多少）', answer: 'many', hint: '问数量用什么词？', explanation: 'How many?问数量，How many apples?问有多少个苹果' },
        { id: 'e1u3l4q3', type: 'choice', question: '4 + 5 = ?', options: ['Nine', 'Eight', 'Seven', 'Ten'], answer: 'Nine', hint: '4加5等于几？', explanation: '4 + 5 = 9，Nine表示9' },
        { id: 'e1u3l4q4', type: 'drag', question: '把数字拖到正确位置：Ten - Three = ____', answer: 'Seven', hint: '10减3等于几？', explanation: '10 - 3 = 7，Seven表示7' },
        { id: 'e1u3l4q5', type: 'choice', question: '【期末真题】小明有4个橙子，妈妈又买了3个，现在一共有几个？', options: ['Seven', 'Six', 'Five', 'Eight'], answer: 'Seven', hint: '4 + 3 = ?', explanation: '4 + 3 = 7，Seven oranges' },
        { id: 'e1u3l4q6', type: 'fill', question: 'One, two, three, ____, five.（四）', answer: 'Four', hint: '3和5中间的数字', explanation: 'Four表示4，排在3和5之间' },
        { id: 'e1u3l4q7', type: 'choice', question: '以下哪个数字的拼写最长？', options: ['Seven', 'One', 'Two', 'Six'], answer: 'Seven', hint: '数一数每个单词有几个字母', explanation: 'Seven有5个字母，是最长的数字单词' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '数字在生活中非常重要！电话号码、年龄、时间、价格……到处都需要用数字！', animationType: 'reveal' },
        { type: 'example', content: '场景1：告诉别人年龄 → I am seven years old.\n场景2：数物品 → How many? One, two, three...\n场景3：电话号码 → My number is 1-2-3-4-5', label: '数字在生活中的应用', animationType: 'bounce' },
        { type: 'tip', content: '试着用英语说出你的年龄、家里的门牌号、电话号码！', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u3l5q1', type: 'choice', question: '一年级小朋友通常几岁？', options: ['Seven', 'Ten', 'Three', 'Fifteen'], answer: 'Seven', hint: '一年级大约几岁？', explanation: '一年级小朋友通常7岁，I am seven years old' },
        { id: 'e1u3l5q2', type: 'fill', question: 'I have ____ eyes.（两只眼睛）', answer: 'Two', hint: '人有几只眼睛？', explanation: 'Two表示2，人有2只眼睛' },
        { id: 'e1u3l5q3', type: 'choice', question: '一周有几天？', options: ['Seven', 'Five', 'Six', 'Ten'], answer: 'Seven', hint: '星期一到星期日', explanation: '一周有7天，Seven days in a week' },
        { id: 'e1u3l5q4', type: 'drag', question: '把数字拖到正确位置：一只猫有____条腿', answer: 'Four', hint: '猫有几条腿？', explanation: '猫有4条腿，Four legs' },
        { id: 'e1u3l5q5', type: 'choice', question: '【期末真题】小明家有3口人，小红家有4口人，两家一共有几口人？', options: ['Seven', 'Five', 'Six', 'Eight'], answer: 'Seven', hint: '3 + 4 = ?', explanation: '3 + 4 = 7，Seven people' },
        { id: 'e1u3l5q6', type: 'fill', question: 'There are ____ months in a year.（12个月）', answer: 'Twelve', hint: '一年有几个月？', explanation: 'Twelve表示12，一年有12个月' },
        { id: 'e1u3l5q7', type: 'choice', question: '蜘蛛有几条腿？', options: ['Eight', 'Six', 'Four', 'Ten'], answer: 'Eight', hint: '蜘蛛的腿比昆虫多', explanation: '蜘蛛有8条腿，Eight legs' },
      ]
    }
  },
  e1u4: { // Animals
    title: 'Animals',
    reviewTitle: 'Animals Review',
    lifeTitle: 'Animals in Life',
    lessons: [
      {
        extra: [
          { id: 'e1u4l1q4', type: 'choice', question: '绵羊的叫声用英语怎么写？', options: ['Baa', 'Moo', 'Oink', 'Quack'], answer: 'Baa', hint: '白色毛茸茸的动物', explanation: 'Sheep绵羊的叫声是Baa' },
          { id: 'e1u4l1q5', type: 'fill', question: 'The chicken says ____.（咯咯）', answer: 'Cluck', hint: '鸡的叫声', explanation: 'Chicken鸡的叫声是Cluck' },
          { id: 'e1u4l1q6', type: 'choice', question: '以下哪种动物生活在水里？', options: ['Duck', 'Cow', 'Sheep', 'Chicken'], answer: 'Duck', hint: '哪种动物会游泳？', explanation: 'Duck鸭子生活在水边，会游泳' },
          { id: 'e1u4l1q7', type: 'drag', question: '把动物拖到正确位置：Moo是____的叫声', answer: 'Cow', hint: '[动物园]（英语一年级-第4单元）', explanation: 'Cow奶牛的叫声是Moo，回顾农场动物知识' },
        ]
      },
      {
        extra: [
          { id: 'e1u4l2q4', type: 'choice', question: '哪种动物有长脖子？', options: ['Giraffe', 'Elephant', 'Lion', 'Bear'], answer: 'Giraffe', hint: '动物园里最高的动物', explanation: 'Giraffe长颈鹿有很长的脖子' },
          { id: 'e1u4l2q5', type: 'fill', question: 'The ____ is the king of the jungle.（狮子）', answer: 'Lion', hint: '万兽之王', explanation: 'Lion狮子被称为万兽之王King of the Jungle' },
          { id: 'e1u4l2q6', type: 'choice', question: '【期末真题】大象最显著的特征是什么？', options: ['Long trunk and big ears', 'Black and white stripes', 'Long neck', 'Can fly'], answer: 'Long trunk and big ears', hint: '大象长什么样？', explanation: 'Elephant大象有长鼻子Long trunk和大耳朵Big ears' },
          { id: 'e1u4l2q7', type: 'choice', question: 'Lion和Tiger有什么区别？', hint: '[宠物]（英语一年级-第4单元）', options: ['Lion有鬃毛，Tiger有条纹', 'Lion小，Tiger大', 'Lion吃草，Tiger吃肉', '没有区别'], answer: 'Lion有鬃毛，Tiger有条纹', explanation: 'Lion狮子有鬃毛，Tiger老虎有条纹，这是它们的主要区别' },
        ]
      },
      {
        extra: [
          { id: 'e1u4l3q4', type: 'choice', question: '"I like dogs"中dogs为什么加s？', options: ['表示一类动物', '表示很多只', '语法错误', '没有原因'], answer: '表示一类动物', hint: 'like后面用什么形式？', explanation: 'I like dogs用复数，表示喜欢狗这一类动物' },
          { id: 'e1u4l3q5', type: 'fill', question: 'I have a ____. It says "Meow".（猫）', answer: 'cat', hint: '喵喵叫的宠物', explanation: 'Cat猫的叫声是Meow' },
          { id: 'e1u4l3q6', type: 'choice', question: '以下哪种不是常见的宠物？', options: ['Lion', 'Cat', 'Dog', 'Fish'], answer: 'Lion', hint: '哪种动物不适合养在家里？', explanation: 'Lion狮子是野生动物，不适合当宠物' },
          { id: 'e1u4l3q7', type: 'drag', question: '把动物拖到正确位置：农场里产奶的是____', answer: 'Cow', hint: '[农场动物]（英语一年级-第4单元）', explanation: 'Cow奶牛产牛奶，回顾农场动物知识' },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '回顾Animals单元！我们学了农场动物Cow/Pig/Sheep/Duck、动物园动物Lion/Elephant/Giraffe、宠物Cat/Dog/Fish', animationType: 'reveal' },
        { type: 'formula', content: '动物分类：\n农场动物：Cow, Pig, Sheep, Duck, Chicken\n动物园动物：Lion, Elephant, Giraffe, Zebra, Monkey\n宠物：Cat, Dog, Fish, Bird, Rabbit', label: '动物分类公式', animationType: 'typewriter' },
        { type: 'animation', content: '动物分类卡片翻转，各类动物依次出场', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u4l4q1', type: 'choice', question: '哪种动物是"万兽之王"？', options: ['Lion', 'Elephant', 'Giraffe', 'Zebra'], answer: 'Lion', hint: '哪种动物最威风？', explanation: 'Lion狮子被称为King of the Jungle万兽之王' },
        { id: 'e1u4l4q2', type: 'fill', question: 'I like ____. They are friendly.（狗）', answer: 'dogs', hint: '用复数形式', explanation: 'I like dogs表示我喜欢狗，用复数表示一类动物' },
        { id: 'e1u4l4q3', type: 'choice', question: '哪种动物有黑白条纹？', options: ['Zebra', 'Giraffe', 'Elephant', 'Lion'], answer: 'Zebra', hint: '像穿条纹衫的马', explanation: 'Zebra斑马有黑白条纹' },
        { id: 'e1u4l4q4', type: 'drag', question: '把叫声拖到正确动物：Oink → ____', answer: 'Pig', hint: '哼哼叫的动物', explanation: 'Pig猪的叫声是Oink' },
        { id: 'e1u4l4q5', type: 'choice', question: '【期末真题】下列哪种动物是宠物？', options: ['Cat', 'Lion', 'Elephant', 'Cow'], answer: 'Cat', hint: '哪种可以养在家里？', explanation: 'Cat猫是常见宠物，Lion/Elephant/Cow都不是宠物' },
        { id: 'e1u4l4q6', type: 'fill', question: 'A ____ has a long neck.（长颈鹿）', answer: 'Giraffe', hint: '脖子最长的动物', explanation: 'Giraffe长颈鹿有很长的脖子' },
        { id: 'e1u4l4q7', type: 'choice', question: '农场动物和动物园动物最大的区别是什么？', options: ['农场动物可以被人类饲养，动物园动物是野生的', '农场动物更大', '动物园动物更少', '没有区别'], answer: '农场动物可以被人类饲养，动物园动物是野生的', hint: '它们的生活方式不同', explanation: '农场动物Farm animals被人类饲养，动物园动物Zoo animals是野生动物' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '动物和我们的生活息息相关！农场给我们提供食物，动物园让我们认识野生动物，宠物给我们陪伴', animationType: 'reveal' },
        { type: 'example', content: '场景1：参观农场 → I see a cow! It says Moo!\n场景2：去动物园 → Look! The giraffe is so tall!\n场景3：养宠物 → I have a cat. It is cute!', label: '动物在生活中的应用', animationType: 'bounce' },
        { type: 'tip', content: '爱护动物，保护野生动物！We should protect animals!', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u4l5q1', type: 'choice', question: '我们去哪里看狮子和大象？', options: ['Zoo', 'Farm', 'Park', 'School'], answer: 'Zoo', hint: '野生动物在哪里？', explanation: 'Zoo动物园可以看到狮子和大象等野生动物' },
        { id: 'e1u4l5q2', type: 'fill', question: 'I drink ____ from the cow.（牛奶）', answer: 'milk', hint: '奶牛给我们什么？', explanation: 'Cow奶牛产牛奶milk，是农场的重要动物' },
        { id: 'e1u4l5q3', type: 'choice', question: '如果你想养一只宠物，以下哪个最合适？', options: ['Cat', 'Lion', 'Elephant', 'Bear'], answer: 'Cat', hint: '哪种动物适合家养？', explanation: 'Cat猫是最常见的家养宠物之一' },
        { id: 'e1u4l5q4', type: 'drag', question: '把动物拖到正确位置：会飞的宠物是____', answer: 'Bird', hint: '有翅膀的宠物', explanation: 'Bird鸟是会飞的宠物，可以在笼子里养' },
        { id: 'e1u4l5q5', type: 'choice', question: '【期末真题】小明去农场，他不可能看到哪种动物？', options: ['Lion', 'Cow', 'Pig', 'Duck'], answer: 'Lion', hint: '哪种不是农场动物？', explanation: 'Lion狮子是野生动物，不会出现在农场里' },
        { id: 'e1u4l5q6', type: 'fill', question: 'My pet ____ says "Woof woof".（狗）', answer: 'dog', hint: '汪汪叫的宠物', explanation: 'Dog狗的叫声是Woof woof' },
        { id: 'e1u4l5q7', type: 'choice', question: '我们应该怎样对待动物？', options: ['Protect and love them', 'Hurt them', 'Ignore them', 'Scare them'], answer: 'Protect and love them', hint: '怎样对待动物才是对的？', explanation: '我们应该保护和爱护动物Protect and love animals' },
      ]
    }
  },
  e1u5: { // Family
    title: 'Family',
    reviewTitle: 'Family Review',
    lifeTitle: 'Family in Life',
    lessons: [
      {
        extra: [
          { id: 'e1u5l1q4', type: 'choice', question: 'Mom的正式说法是什么？', options: ['Mother', 'Father', 'Sister', 'Brother'], answer: 'Mother', hint: '更正式的称呼', explanation: 'Mom是口语，Mother是正式说法，都表示妈妈' },
          { id: 'e1u5l1q5', type: 'fill', question: 'This is my ____. She is my mom\'s mom.（奶奶/外婆）', answer: 'Grandma', hint: '妈妈的妈妈叫什么？', explanation: 'Grandma是奶奶/外婆，mom\'s mom就是Grandma' },
          { id: 'e1u5l1q6', type: 'choice', question: '【期末真题】"This is my brother"中brother是指？', options: ['兄弟', '姐妹', '妈妈', '爸爸'], answer: '兄弟', hint: 'brother是什么意思？', explanation: 'Brother是兄弟，是家庭中的男性兄弟姐妹' },
          { id: 'e1u5l1q7', type: 'drag', question: '把家庭成员拖到正确位置：爸爸的爸爸是____', answer: 'Grandpa', hint: '[家庭树]（英语一年级-第5单元）', explanation: '爸爸的爸爸是Grandpa爷爷，回顾家庭关系' },
        ]
      },
      {
        extra: [
          { id: 'e1u5l2q4', type: 'choice', question: 'Uncle可以指哪些人？', options: ['叔叔、舅舅、伯伯', '只有叔叔', '只有舅舅', '只有伯伯'], answer: '叔叔、舅舅、伯伯', hint: 'Uncle包含哪些关系？', explanation: 'Uncle可以指叔叔、舅舅、伯伯，英语用一个词表示多种关系' },
          { id: 'e1u5l2q5', type: 'fill', question: 'My dad\'s brother is my ____.（叔叔）', answer: 'Uncle', hint: '爸爸的兄弟', explanation: 'Dad\'s brother爸爸的兄弟是Uncle叔叔' },
          { id: 'e1u5l2q6', type: 'choice', question: '在家庭树中，你和cousin是什么关系？', options: ['堂/表兄弟姐妹', '亲兄弟姐妹', '叔侄关系', '祖孙关系'], answer: '堂/表兄弟姐妹', hint: 'cousin是什么关系？', explanation: 'Cousin是堂/表兄弟姐妹，是Uncle/Aunt的孩子' },
          { id: 'e1u5l2q7', type: 'choice', question: '家庭树从下往上看，你上方的第一层是谁？', hint: '[我爱我家]（英语一年级-第5单元）', options: ['Mom and Dad', 'Grandpa and Grandma', 'Uncle and Aunt', 'Brother and Sister'], answer: 'Mom and Dad', explanation: '家庭树中，你上方的第一层是父母Mom and Dad' },
        ]
      },
      {
        extra: [
          { id: 'e1u5l3q4', type: 'choice', question: 'love和like有什么区别？', options: ['love感情更深', 'like感情更深', '没有区别', 'love只用于家人'], answer: 'love感情更深', hint: '哪个词表达的感情更强？', explanation: 'love爱比like喜欢感情更深，对最亲近的人用love' },
          { id: 'e1u5l3q5', type: 'fill', question: 'I love ____ family!（我的）', answer: 'my', hint: '用什么代词？', explanation: 'I love my family!我爱我的家！my表示我的' },
          { id: 'e1u5l3q6', type: 'choice', question: '以下哪句话最适合对妈妈说？', options: ['I love you, Mom!', 'I like you, Mom.', 'I see you, Mom.', 'I have you, Mom.'], answer: 'I love you, Mom!', hint: '对妈妈表达什么感情？', explanation: 'I love you, Mom!是对妈妈表达爱意的最温暖方式' },
          { id: 'e1u5l3q7', type: 'drag', question: '把词拖到正确位置：I love my ____!（家庭）', answer: 'family', hint: '[家庭成员]（英语一年级-第5单元）', explanation: 'I love my family!我爱我的家庭，回顾家庭词汇' },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '回顾Family单元！我们学了家庭成员Mom/Dad/Brother/Sister/Grandpa/Grandma、家庭树Family Tree、表达爱意I love my family', animationType: 'reveal' },
        { type: 'formula', content: '家庭关系公式：\nMom + Dad = Parents（父母）\nGrandpa + Grandma = Grandparents（祖父母）\nUncle/Aunt的孩子 = Cousin（堂/表兄弟姐妹）', label: '家庭关系公式', animationType: 'typewriter' },
        { type: 'animation', content: '家庭树展开回顾，家庭成员依次出现', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u5l4q1', type: 'choice', question: 'Parents是指谁？', options: ['Mom and Dad', 'Grandpa and Grandma', 'Brother and Sister', 'Uncle and Aunt'], answer: 'Mom and Dad', hint: 'Parents是什么意思？', explanation: 'Parents是父母，指Mom妈妈和Dad爸爸' },
        { id: 'e1u5l4q2', type: 'fill', question: 'My mom\'s sister is my ____.（阿姨）', answer: 'Aunt', hint: '妈妈的姐妹', explanation: 'Aunt是阿姨/姑姑，mom\'s sister是Aunt' },
        { id: 'e1u5l4q3', type: 'choice', question: '家庭树中，Grandpa和Grandma在树的哪个位置？', options: ['最上面', '最下面', '中间', '旁边'], answer: '最上面', hint: '祖父母在家庭树的哪里？', explanation: '家庭树中，Grandpa和Grandma在最上面，是长辈' },
        { id: 'e1u5l4q4', type: 'drag', question: '把关系拖到正确位置：爸爸的姐妹的叫____', answer: 'Aunt', hint: '姑姑用英语怎么说？', explanation: '爸爸的姐妹是Aunt姑姑' },
        { id: 'e1u5l4q5', type: 'choice', question: '【期末真题】在英语中，Uncle可以表示几种亲属关系？', options: ['3种以上（叔叔、舅舅、伯伯等）', '1种', '2种', '0种'], answer: '3种以上（叔叔、舅舅、伯伯等）', hint: '英语的Uncle包含哪些关系？', explanation: '英语Uncle可以指叔叔、舅舅、伯伯等3种以上关系' },
        { id: 'e1u5l4q6', type: 'fill', question: 'I love ____!（你）', answer: 'you', hint: '对家人说什么？', explanation: 'I love you!我爱你！是对家人最温暖的表达' },
        { id: 'e1u5l4q7', type: 'choice', question: '以下哪个不是家庭成员？', options: ['Teacher', 'Mom', 'Dad', 'Sister'], answer: 'Teacher', hint: '哪个不是家人？', explanation: 'Teacher老师不是家庭成员，Mom/Dad/Sister都是' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '家庭是我们最温暖的港湾！用英语介绍家人、表达爱意，让家人感受到你的心意', animationType: 'reveal' },
        { type: 'example', content: '场景1：介绍家人 → This is my mom. She is kind.\n场景2：表达爱意 → I love you, Dad!\n场景3：家庭活动 → My family is happy!', label: '家庭英语在生活中的应用', animationType: 'bounce' },
        { type: 'tip', content: '每天对家人说一句英语，I love you, Mom/Dad! 简单又温暖！', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u5l5q1', type: 'choice', question: '用英语介绍妈妈时说？', options: ['This is my mom', 'I am mom', 'She is me', 'Mom is I'], answer: 'This is my mom', hint: '介绍家人用什么句型？', explanation: 'This is my mom.这是我的妈妈，是介绍家人的标准句型' },
        { id: 'e1u5l5q2', type: 'fill', question: 'I love my ____! We are happy.（家庭）', answer: 'family', hint: '全家人', explanation: 'I love my family!我爱我的家庭！' },
        { id: 'e1u5l5q3', type: 'choice', question: '父亲节应该对爸爸说什么？', options: ['I love you, Dad!', 'Goodbye, Dad!', 'Stand up, Dad!', 'Hello, Dad!'], answer: 'I love you, Dad!', hint: '表达对爸爸的爱', explanation: 'I love you, Dad!是对爸爸表达爱意的最佳方式' },
        { id: 'e1u5l5q4', type: 'drag', question: '把称呼拖到正确位置：妈妈的妈妈=____', answer: 'Grandma', hint: '外婆用英语怎么说？', explanation: '妈妈的妈妈是Grandma外婆/奶奶' },
        { id: 'e1u5l5q5', type: 'choice', question: '【期末真题】小明指着家庭照片说"This is my father"，father是指？', options: ['爸爸', '妈妈', '爷爷', '兄弟'], answer: '爸爸', hint: 'father是什么意思？', explanation: 'Father是爸爸的正式说法，和Dad意思相同' },
        { id: 'e1u5l5q6', type: 'fill', question: 'My ____ is my mom\'s husband.（爸爸）', answer: 'Dad', hint: '妈妈的丈夫是谁？', explanation: 'Dad爸爸是Mom妈妈的丈夫' },
        { id: 'e1u5l5q7', type: 'choice', question: '春节时全家团聚，你可以说？', options: ['My family is together and happy!', 'I am alone.', 'Goodbye family!', 'I don\'t like my family.'], answer: 'My family is together and happy!', hint: '全家团聚说什么？', explanation: 'My family is together and happy!我的家人在一起很幸福！' },
      ]
    }
  },
  e1u6: { // Food
    title: 'Food',
    reviewTitle: 'Food Review',
    lifeTitle: 'Food in Life',
    lessons: [
      {
        extra: [
          { id: 'e1u6l1q4', type: 'choice', question: '哪种水果和颜色同名？', options: ['Orange', 'Apple', 'Banana', 'Grape'], answer: 'Orange', hint: '一个词两个意思', explanation: 'Orange既是橘子又是橙色，一词多义' },
          { id: 'e1u6l1q5', type: 'fill', question: 'Grapes are ____.（紫色）', answer: 'Purple', hint: '葡萄的颜色', explanation: 'Grapes are purple表示葡萄是紫色的' },
          { id: 'e1u6l1q6', type: 'choice', question: '【期末真题】以下哪种水果是红色的？', options: ['Apple', 'Banana', 'Orange', 'Grape'], answer: 'Apple', hint: '哪种水果通常是红色的？', explanation: 'Apple苹果通常是红色的Red' },
          { id: 'e1u6l1q7', type: 'drag', question: '把水果拖到正确位置：猴子最喜欢____', answer: 'Banana', hint: '[食物]（英语一年级-第6单元）', explanation: 'Banana香蕉是猴子最喜欢的水果，回顾水果词汇' },
        ]
      },
      {
        extra: [
          { id: 'e1u6l2q4', type: 'choice', question: '中国人早餐常吃的食物是？', options: ['Rice/Noodles', 'Bread only', 'Cake only', 'Pizza'], answer: 'Rice/Noodles', hint: '中国早餐吃什么？', explanation: '中国人早餐常吃米饭Rice或面条Noodles' },
          { id: 'e1u6l2q5', type: 'fill', question: 'I eat ____ for breakfast.（鸡蛋）', answer: 'eggs', hint: '早餐常吃的圆的东西', explanation: 'eggs是鸡蛋的复数，I eat eggs for breakfast表示我早餐吃鸡蛋' },
          { id: 'e1u6l2q6', type: 'choice', question: '以下哪种食物是饮料？', options: ['Milk', 'Bread', 'Rice', 'Egg'], answer: 'Milk', hint: '哪种是喝的？', explanation: 'Milk牛奶是饮料，Bread/Rice/Egg是食物' },
          { id: 'e1u6l2q7', type: 'choice', question: 'for breakfast是什么意思？', hint: '[我喜欢]（英语一年级-第6单元）', options: ['作为早餐', '在早餐前', '不吃早餐', '做早餐'], answer: '作为早餐', explanation: 'for breakfast表示作为早餐，I eat bread for breakfast我早餐吃面包' },
        ]
      },
      {
        extra: [
          { id: 'e1u6l3q4', type: 'choice', question: "don't是什么的缩写？", options: ['do not', 'does not', 'did not', 'are not'], answer: 'do not', hint: "don't的完整形式", explanation: "don't是do not的缩写，I don't like表示我不喜欢" },
          { id: 'e1u6l3q5', type: 'fill', question: 'I ____ apples! Yummy!（喜欢）', answer: 'like', hint: '表达喜欢用什么词？', explanation: 'I like apples!表示我喜欢苹果！好吃！' },
          { id: 'e1u6l3q6', type: 'choice', question: 'Yummy和Yuck分别表示什么？', options: ['好吃和不好吃', '好看和不好看', '好闻和不好闻', '好听和不好听'], answer: '好吃和不好吃', hint: '这两个词描述什么？', explanation: 'Yummy好吃！Yuck不好吃！是描述食物味道的感叹词' },
          { id: 'e1u6l3q7', type: 'drag', question: '把词拖到正确位置：I ____ like onions. Yuck!（不）', answer: "don't", hint: '[食物]（英语一年级-第6单元）', explanation: "I don't like onions. Yuck!我不喜欢洋葱。不好吃！回顾食物表达" },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '回顾Food单元！我们学了水果Apple/Banana/Orange、食物Milk/Bread/Egg/Rice、喜好表达I like/I don\'t like', animationType: 'reveal' },
        { type: 'formula', content: '食物喜好公式：\nI like + 食物（复数） → I like apples!\nI don\'t like + 食物（复数） → I don\'t like onions.\nYummy! = 好吃！/ Yuck! = 不好吃！', label: '食物喜好公式', animationType: 'typewriter' },
        { type: 'animation', content: '食物卡片翻转回顾，笑脸哭脸交替出现', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u6l4q1', type: 'choice', question: '哪种水果是黄色的？', options: ['Banana', 'Apple', 'Grape', 'Orange'], answer: 'Banana', hint: '弯弯的黄色水果', explanation: 'Banana香蕉是黄色的' },
        { id: 'e1u6l4q2', type: 'fill', question: 'I ____ milk for breakfast.（喝）', answer: 'drink', hint: '喝饮料用什么动词？', explanation: 'drink milk表示喝牛奶，drink是喝的意思' },
        { id: 'e1u6l4q3', type: 'choice', question: 'I don\'t like onions中don\'t是什么意思？', options: ['不', '很', '也', '都'], answer: '不', hint: 'don\'t是否定词', explanation: "don't是否定词，I don't like表示我不喜欢" },
        { id: 'e1u6l4q4', type: 'drag', question: '把食物拖到正确位置：早餐喝的白色饮品是____', answer: 'Milk', hint: '奶牛产的饮品', explanation: 'Milk牛奶是早餐常喝的白色饮品' },
        { id: 'e1u6l4q5', type: 'choice', question: '【期末真题】"我喜欢苹果"的正确表达是？', options: ['I like apples', 'I like apple', 'I likes apples', 'I am like apples'], answer: 'I like apples', hint: '注意名词复数', explanation: 'I like apples用复数形式，表示喜欢苹果这一类水果' },
        { id: 'e1u6l4q6', type: 'fill', question: 'Yuck! I don\'t like ____.（洋葱）', answer: 'onions', hint: '不好吃的蔬菜', explanation: "onions是洋葱的复数，I don't like onions表示我不喜欢洋葱" },
        { id: 'e1u6l4q7', type: 'choice', question: '以下哪种是健康食物？', options: ['Apple', 'Candy', 'Cake', 'Soda'], answer: 'Apple', hint: '哪种对身体好？', explanation: 'Apple苹果是健康食物，Candy/Cake/Soda不太健康' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '食物是生活中最常见的话题！点餐、购物、描述喜好……都需要用英语说出食物名称', animationType: 'reveal' },
        { type: 'example', content: '场景1：餐厅点餐 → I want rice and milk, please.\n场景2：超市购物 → I need apples and bananas.\n场景3：描述喜好 → I like apples! Yummy! I don\'t like onions.', label: '食物在生活中的应用', animationType: 'bounce' },
        { type: 'tip', content: '吃饭时用英语说出食物名称，每天练习3种食物！', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u6l5q1', type: 'choice', question: '在餐厅想点面包，应该说？', options: ['I want bread, please.', 'I don\'t like bread.', 'Bread is bad.', 'Give me bread!'], answer: 'I want bread, please.', hint: '礼貌地点餐', explanation: 'I want bread, please.请给我面包，是礼貌的点餐方式' },
        { id: 'e1u6l5q2', type: 'fill', question: 'I like ____! They are sweet and red.（苹果）', answer: 'apples', hint: '红色甜水果', explanation: 'apples是苹果的复数，I like apples!我喜欢苹果！' },
        { id: 'e1u6l5q3', type: 'choice', question: '去超市买水果，以下哪个不是水果？', options: ['Milk', 'Apple', 'Banana', 'Orange'], answer: 'Milk', hint: '哪个不是水果？', explanation: 'Milk牛奶是饮料，不是水果' },
        { id: 'e1u6l5q4', type: 'drag', question: '把食物拖到正确位置：早餐吃圆圆的食物是____', answer: 'Egg', hint: '鸡下的', explanation: 'Egg鸡蛋是圆圆的早餐食物' },
        { id: 'e1u6l5q5', type: 'choice', question: '【期末真题】小红说"I don\'t like bananas"，她不喜欢什么？', options: ['香蕉', '苹果', '橘子', '葡萄'], answer: '香蕉', hint: 'bananas是什么？', explanation: "bananas是香蕉，I don't like bananas表示我不喜欢香蕉" },
        { id: 'e1u6l5q6', type: 'fill', question: 'We eat ____ on Spring Festival.（饺子）', answer: 'dumplings', hint: '春节传统食物', explanation: 'dumplings是饺子，春节吃饺子是传统' },
        { id: 'e1u6l5q7', type: 'choice', question: '哪种食物既健康又好吃？', options: ['Apple', 'Candy', 'Chips', 'Soda'], answer: 'Apple', hint: '哪种最有营养？', explanation: 'Apple苹果既健康又好吃，是最佳选择' },
      ]
    }
  },
  e1u7: { // Body
    title: 'Body',
    reviewTitle: 'Body Review',
    lifeTitle: 'Body in Life',
    lessons: [
      {
        extra: [
          { id: 'e1u7l1q4', type: 'choice', question: 'Foot的复数形式是什么？', options: ['Feet', 'Foots', 'Footes', 'Foot'], answer: 'Feet', hint: 'foot是不规则变化', explanation: 'Foot的复数是Feet，是不规则变化' },
          { id: 'e1u7l1q5', type: 'fill', question: 'Touch your ____.（手臂）', answer: 'Arms', hint: '肩膀和手之间的部位', explanation: 'Arms是手臂，Touch your arms摸摸你的手臂' },
          { id: 'e1u7l1q6', type: 'choice', question: '【期末真题】以下哪个身体部位是复数形式？', options: ['Feet', 'Head', 'Nose', 'Mouth'], answer: 'Feet', hint: '哪个词是复数？', explanation: 'Feet是Foot的复数形式，是身体部位中的不规则复数' },
          { id: 'e1u7l1q7', type: 'drag', question: '把身体部位拖到正确位置：走路用____', answer: 'Feet', hint: '[头肩膀膝盖脚]（英语一年级-第7单元）', explanation: '走路用Feet脚，回顾身体部位功能' },
        ]
      },
      {
        extra: [
          { id: 'e1u7l2q4', type: 'choice', question: '歌曲中"Eyes and ears and mouth and nose"排在第一位的是？', options: ['Eyes', 'Ears', 'Mouth', 'Nose'], answer: 'Eyes', hint: '歌曲第二段的顺序', explanation: '歌曲第二段：And eyes and ears and mouth and nose' },
          { id: 'e1u7l2q5', type: 'fill', question: 'Head, shoulders, ____ and toes.', answer: 'Knees', hint: '膝盖的英语', explanation: 'Knees是膝盖，歌曲顺序：Head, Shoulders, Knees and Toes' },
          { id: 'e1u7l2q6', type: 'choice', question: '唱这首歌时，唱到toes应该摸哪里？', options: ['脚趾', '膝盖', '肩膀', '头'], answer: '脚趾', hint: 'toes是什么？', explanation: 'Toes是脚趾，唱到toes时应该摸脚趾' },
          { id: 'e1u7l2q7', type: 'choice', question: '这首歌帮我们记住了什么？', hint: '[五官]（英语一年级-第7单元）', options: ['身体部位名称', '颜色名称', '动物名称', '数字名称'], answer: '身体部位名称', explanation: '这首歌帮我们记住身体部位的英语名称' },
        ]
      },
      {
        extra: [
          { id: 'e1u7l3q4', type: 'choice', question: '"I smell with my nose"中with是什么意思？', options: ['用', '和', '在', '去'], answer: '用', hint: 'with在这里是什么意思？', explanation: 'with是"用"的意思，I smell with my nose我用鼻子闻' },
          { id: 'e1u7l3q5', type: 'fill', question: 'I taste with my ____.（嘴巴）', answer: 'Mouth', hint: '品尝食物用什么？', explanation: 'Mouth是嘴巴，I taste with my mouth我用嘴巴尝' },
          { id: 'e1u7l3q6', type: 'choice', question: '如果闭上眼睛，哪个感官不能用了？', options: ['Sight视觉', 'Hearing听觉', 'Smell嗅觉', 'Taste味觉'], answer: 'Sight视觉', hint: '眼睛用什么感官？', explanation: '闭上眼睛就不能看了，Sight视觉需要眼睛' },
          { id: 'e1u7l3q7', type: 'drag', question: '把五官拖到正确位置：闻味道用____', answer: 'Nose', hint: '[身体部位]（英语一年级-第7单元）', explanation: '闻味道用Nose鼻子，回顾五官功能' },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '回顾Body单元！我们学了身体部位Head/Shoulders/Knees/Toes、身体部位歌、五官Eyes/Ears/Nose/Mouth及功能', animationType: 'reveal' },
        { type: 'formula', content: '五官功能公式：\nI see with my eyes.（看）\nI hear with my ears.（听）\nI smell with my nose.（闻）\nI taste with my mouth.（尝）', label: '五官功能公式', animationType: 'typewriter' },
        { type: 'animation', content: '身体部位高亮回顾，五官功能动画重现', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u7l4q1', type: 'choice', question: '我们用什么听声音？', options: ['Ears', 'Eyes', 'Nose', 'Mouth'], answer: 'Ears', hint: '哪个器官负责听？', explanation: 'Ears耳朵用来听声音，I hear with my ears' },
        { id: 'e1u7l4q2', type: 'fill', question: 'I see with my ____.（眼睛）', answer: 'Eyes', hint: '看东西用什么？', explanation: 'Eyes是眼睛，I see with my eyes我用眼睛看' },
        { id: 'e1u7l4q3', type: 'choice', question: 'Foot的复数是什么？', options: ['Feet', 'Foots', 'Footes', 'Foots'], answer: 'Feet', hint: '不规则变化', explanation: 'Foot→Feet是不规则复数变化' },
        { id: 'e1u7l4q4', type: 'drag', question: '把身体部位拖到正确位置：肩膀=____', answer: 'Shoulders', hint: '手臂和脖子之间', explanation: 'Shoulders是肩膀，Touch your shoulders摸摸你的肩膀' },
        { id: 'e1u7l4q5', type: 'choice', question: '【期末真题】"I smell with my nose"意思是？', options: ['我用鼻子闻', '我用鼻子看', '我用鼻子听', '我用鼻子吃'], answer: '我用鼻子闻', hint: 'smell是什么意思？', explanation: 'smell是闻的意思，I smell with my nose我用鼻子闻' },
        { id: 'e1u7l4q6', type: 'fill', question: 'Head, ____, knees and toes.', answer: 'Shoulders', hint: '第二个身体部位', explanation: '歌曲顺序：Head, Shoulders, Knees and Toes' },
        { id: 'e1u7l4q7', type: 'choice', question: '以下哪个不是五官？', options: ['Arms', 'Eyes', 'Ears', 'Nose'], answer: 'Arms', hint: '哪个不在脸上？', explanation: 'Arms手臂不是五官，Eyes/Ears/Nose都是五官' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '身体部位在生活中经常用到！运动、看病、描述自己……都需要说出身体部位的英语', animationType: 'reveal' },
        { type: 'example', content: '场景1：运动 → Touch your toes! Raise your arms!\n场景2：看病 → My head hurts. I have a stomachache.\n场景3：描述 → I have two eyes and one nose.', label: '身体部位在生活中的应用', animationType: 'bounce' },
        { type: 'tip', content: '每天做一遍Head, Shoulders, Knees and Toes操，既锻炼身体又复习英语！', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u7l5q1', type: 'choice', question: '体育课上老师说"Touch your head"，你应该？', options: ['摸头', '摸脚', '摸膝盖', '举手'], answer: '摸头', hint: 'Touch your head是什么意思？', explanation: 'Touch your head表示摸你的头' },
        { id: 'e1u7l5q2', type: 'fill', question: 'I can see with my ____.（眼睛）', answer: 'Eyes', hint: '看东西的器官', explanation: 'Eyes是眼睛，I can see with my eyes我用眼睛看' },
        { id: 'e1u7l5q3', type: 'choice', question: '头疼时应该怎么说？', options: ['My head hurts', 'My foot hurts', 'My hand hurts', 'I am happy'], answer: 'My head hurts', hint: '头疼怎么表达？', explanation: 'My head hurts表示我头疼' },
        { id: 'e1u7l5q4', type: 'drag', question: '把身体部位拖到正确位置：写字用手和____', answer: 'Fingers', hint: '手上的小指头', explanation: 'Fingers手指，写字需要用手指' },
        { id: 'e1u7l5q5', type: 'choice', question: '【期末真题】"I hear with my ears"是什么意思？', options: ['我用耳朵听', '我用耳朵看', '我用耳朵闻', '我用耳朵吃'], answer: '我用耳朵听', hint: 'hear是什么意思？', explanation: 'hear是听的意思，I hear with my ears我用耳朵听' },
        { id: 'e1u7l5q6', type: 'fill', question: 'I smell with my ____.（鼻子）', answer: 'Nose', hint: '闻味道的器官', explanation: 'Nose是鼻子，I smell with my nose我用鼻子闻' },
        { id: 'e1u7l5q7', type: 'choice', question: '做运动时，哪个身体部位最重要？', options: ['All of them are important', 'Only legs', 'Only arms', 'Only head'], answer: 'All of them are important', hint: '每个部位都重要吗？', explanation: '每个身体部位都很重要，要爱护自己的身体！' },
      ]
    }
  },
  e1u8: { // Classroom
    title: 'Classroom',
    reviewTitle: 'Classroom Review',
    lifeTitle: 'Classroom in Life',
    lessons: [
      {
        extra: [
          { id: 'e1u8l1q4', type: 'choice', question: 'Pencil case是什么意思？', options: ['文具盒', '铅笔', '书包', '课桌'], answer: '文具盒', hint: 'pencil + case = ?', explanation: 'Pencil case是文具盒，pencil铅笔+case盒子' },
          { id: 'e1u8l1q5', type: 'fill', question: 'I write with a ____.（钢笔）', answer: 'Pen', hint: '不能擦掉的笔', explanation: 'Pen是钢笔，I write with a pen我用钢笔写字' },
          { id: 'e1u8l1q6', type: 'choice', question: '【期末真题】以下哪个是文具？', options: ['Eraser', 'Desk', 'Chair', 'Door'], answer: 'Eraser', hint: '哪个是学习用品？', explanation: 'Eraser橡皮擦是文具，Desk/Chair/Door是教室物品' },
          { id: 'e1u8l1q7', type: 'drag', question: '把文具拖到正确位置：画直线用____', answer: 'Ruler', hint: '[教室物品]（英语一年级-第8单元）', explanation: 'Ruler尺子用来画直线，回顾文具功能' },
        ]
      },
      {
        extra: [
          { id: 'e1u8l2q4', type: 'choice', question: 'Desk和Table的区别是什么？', options: ['Desk特指学习用的桌子', 'Desk更大', 'Table更贵', '没有区别'], answer: 'Desk特指学习用的桌子', hint: 'Desk和Table有什么不同？', explanation: 'Desk特指课桌/学习桌，Table是普通的桌子' },
          { id: 'e1u8l2q5', type: 'fill', question: 'The teacher writes on the ____.（黑板）', answer: 'Board', hint: '挂在墙上的大板子', explanation: 'Board是黑板/白板，老师在上面写字' },
          { id: 'e1u8l2q6', type: 'choice', question: '教室里学生坐在什么上面？', options: ['Chair', 'Board', 'Bag', 'Book'], answer: 'Chair', hint: '有靠背的座位', explanation: 'Chair是椅子，学生坐在椅子上上课' },
          { id: 'e1u8l2q7', type: 'choice', question: 'Board是什么意思？', hint: '[指令]（英语一年级-第8单元）', options: ['黑板/白板', '书', '门', '椅子'], answer: '黑板/白板', explanation: 'Board是黑板/白板，老师在Board上写字' },
        ]
      },
      {
        extra: [
          { id: 'e1u8l3q4', type: 'choice', question: 'Open和Close是什么关系？', options: ['反义词', '同义词', '无关词', '近义词'], answer: '反义词', hint: '打开和关闭是什么关系？', explanation: 'Open打开和Close关闭是一对反义词' },
          { id: 'e1u8l3q5', type: 'fill', question: '____ your hand before you speak.（举起）', answer: 'Raise', hint: '发言前要做什么？', explanation: 'Raise your hand举手，发言前要先举手' },
          { id: 'e1u8l3q6', type: 'choice', question: '老师想让同学们打开课本，应该说什么？', options: ['Open your books', 'Close your books', 'Raise your hands', 'Stand up'], answer: 'Open your books', hint: '打开课本的指令', explanation: 'Open your books表示打开你们的书，是课堂指令' },
          { id: 'e1u8l3q7', type: 'drag', question: '把指令拖到正确位置：合上书=____ your book', answer: 'Close', hint: '[文具]（英语一年级-第8单元）', explanation: 'Close your book合上书，回顾课堂指令' },
        ]
      }
    ],
    l4: {
      content: [
        { type: 'text', content: '回顾Classroom单元！我们学了文具Pen/Pencil/Ruler/Eraser、教室物品Book/Desk/Chair/Board、指令Open/Close/Raise', animationType: 'reveal' },
        { type: 'formula', content: '课堂指令公式：\nOpen your book — 打开书\nClose your book — 合上书\nRaise your hand — 举手\nStand up — 起立\nSit down — 坐下', label: '课堂指令公式', animationType: 'typewriter' },
        { type: 'animation', content: '文具盒打开回顾，书本翻页动画重现', animationType: 'cpaTransition' },
      ],
      questions: [
        { id: 'e1u8l4q1', type: 'choice', question: '擦掉铅笔字用什么？', options: ['Eraser', 'Ruler', 'Pen', 'Book'], answer: 'Eraser', hint: '橡皮擦', explanation: 'Eraser是橡皮擦，用来擦掉铅笔写的字' },
        { id: 'e1u8l4q2', type: 'fill', question: 'I sit on a ____ in the classroom.（椅子）', answer: 'Chair', hint: '上课坐的', explanation: 'Chair是椅子，I sit on a chair我坐在椅子上' },
        { id: 'e1u8l4q3', type: 'choice', question: 'Open和Close是什么关系？', options: ['反义词', '同义词', '近义词', '无关'], answer: '反义词', hint: '打开和关闭', explanation: 'Open打开和Close关闭是一对反义词' },
        { id: 'e1u8l4q4', type: 'drag', question: '把文具拖到正确位置：画直线用____', answer: 'Ruler', hint: '尺子', explanation: 'Ruler尺子用来画直线' },
        { id: 'e1u8l4q5', type: 'choice', question: '【期末真题】老师想让同学们举手，应该说什么？', options: ['Raise your hand', 'Open your book', 'Close your book', 'Sit down'], answer: 'Raise your hand', hint: '举手的指令', explanation: 'Raise your hand表示举手，是课堂常用指令' },
        { id: 'e1u8l4q6', type: 'fill', question: 'Pencil + case = ____ case（文具盒）', answer: 'Pencil', hint: '铅笔+盒子=？', explanation: 'Pencil case是文具盒，pencil铅笔+case盒子' },
        { id: 'e1u8l4q7', type: 'choice', question: '以下哪个不是文具？', options: ['Desk', 'Pen', 'Pencil', 'Eraser'], answer: 'Desk', hint: '哪个不是学习用品？', explanation: 'Desk课桌是教室家具，不是文具' },
      ]
    },
    l5: {
      content: [
        { type: 'text', content: '教室是我们学习的地方！每天都要用到文具、坐在椅子上、听老师的指令，用英语说出教室里的一切吧！', animationType: 'reveal' },
        { type: 'example', content: '场景1：整理书包 → I have a pen, a pencil, and a ruler.\n场景2：上课 → Open your book! Raise your hand!\n场景3：借文具 → Can I borrow your eraser?', label: '教室英语在生活中的应用', animationType: 'bounce' },
        { type: 'tip', content: '每天整理书包时用英语说出每件文具的名称！', label: '生活提示', animationType: 'pulse' },
      ],
      questions: [
        { id: 'e1u8l5q1', type: 'choice', question: '上学前整理书包，需要装什么？', options: ['Books and pencils', 'Toys and candy', 'TV and games', 'Pillow and blanket'], answer: 'Books and pencils', hint: '书包里装学习用品', explanation: 'Books书本和pencils铅笔是书包里的学习用品' },
        { id: 'e1u8l5q2', type: 'fill', question: 'I write with a ____ on the board.（粉笔）', answer: 'chalk', hint: '在黑板上写字的', explanation: 'chalk是粉笔，老师在黑板上用粉笔写字' },
        { id: 'e1u8l5q3', type: 'choice', question: '同学忘了带橡皮，你可以怎么说？', options: ['Can I borrow your eraser?', 'Give me your eraser!', 'I don\'t have eraser.', 'Eraser is bad.'], answer: 'Can I borrow your eraser?', hint: '礼貌地借东西', explanation: 'Can I borrow your eraser?我可以借你的橡皮吗？是礼貌的借物方式' },
        { id: 'e1u8l5q4', type: 'drag', question: '把物品拖到正确位置：上课看的是____', answer: 'Book', hint: '课本', explanation: 'Book是书，上课时打开书学习' },
        { id: 'e1u8l5q5', type: 'choice', question: '【期末真题】"Close your book"是什么意思？', options: ['合上你的书', '打开你的书', '举起你的书', '扔掉你的书'], answer: '合上你的书', hint: 'Close是什么意思？', explanation: 'Close your book表示合上你的书，Close是关闭/合上' },
        { id: 'e1u8l5q6', type: 'fill', question: 'I keep my pens in my ____ case.（文具盒）', answer: 'Pencil', hint: 'pencil + case', explanation: 'Pencil case是文具盒，I keep my pens in my pencil case我把笔放在文具盒里' },
        { id: 'e1u8l5q7', type: 'choice', question: '爱护教室环境，我们应该怎么做？', options: ['Keep the classroom clean', 'Throw trash on the floor', 'Write on the desk', 'Run in the classroom'], answer: 'Keep the classroom clean', hint: '怎样爱护教室？', explanation: 'Keep the classroom clean保持教室干净，是爱护教室的好习惯' },
      ]
    }
  }
};

// 由于文件太长，将二年级和三年级数据也按同样结构定义
// 这里先处理grade1，然后逐步处理grade2和grade3

// 导出
module.exports = { grade1Data };
