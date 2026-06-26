import type { Unit } from '@/types'

export const englishGrade2: Unit[] = [
  {
    id: 'e2u1',
    title: 'My Day',
    subtitle: '我的一天，充实又快乐',
    order: 1,
    lessons: [
      {
        id: 'e2u1l1',
        title: '早晨日常',
        order: 1,
        teachingMethod: '情景教学法',
        learningObjective: '我能用I wake up/brush my teeth/eat breakfast描述早晨日常活动',
        successCriteria: '①能说出至少3个早晨活动的英语短语 ②能用I...句型描述自己的早晨',
        iDo: '家长模拟早晨起床场景，边做动作边说"I wake up. I brush my teeth. I eat breakfast"',
        weDo: '亲子一起表演早晨日常，轮流说出每个动作的英语',
        youDo: '孩子独立用英语描述自己的早晨日常，按顺序说出3-5个动作',
        parentTips: '【家长预习】本课核心：早晨日常I wake up（起床）、I brush my teeth（刷牙）、I eat breakfast（吃早餐）。\n共学四步：\n①对话出题：家长早上叫孩子起床说It\'s morning! What do you do?并示范I wake up.。\n②孩子应答：孩子应说I wake up. I brush my teeth.。\n③答错引导：若孩子说不出，家长当同学一起做早晨动作！扫描课时发音动画听发音；让孩子点读课件短语卡；家长边做起床刷牙动作边说英语，用TPR全身反应法。\n④快速检测：1.孩子说出3个早晨活动；2.边做动作边说I brush my teeth；3.描述自己的早晨日常。',
        funElement: '玩"早晨接力赛"，快速说出早晨做的事，看谁说得又多又快',
        gsapAnimations: ['GSAP:太阳升起-sunrise', 'GSAP:时钟转动-clockTick'],
        images: ['IMG:早晨起床场景', 'IMG:早晨日常卡片'],
        content: [
          { type: 'text', content: '每天早晨我们做很多事情：I wake up我起床、I brush my teeth我刷牙、I eat breakfast我吃早餐。用英语说出你的早晨日常吧！', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: Good morning! Time to wake up!\n小明: I wake up! I brush my teeth!\n妈妈: What do you eat for breakfast?\n小明: I eat bread and drink milk!', label: '早晨日常对话', animationType: 'reveal' },
          { type: 'example', content: 'I wake up — 我起床\nI brush my teeth — 我刷牙\nI eat breakfast — 我吃早餐\nI wash my face — 我洗脸\nI get dressed — 我穿衣服', label: '早晨日常表达', animationType: 'bounce' },
          { type: 'tip', content: 'brush是"刷"的意思，brush my teeth刷牙，brush my hair梳头，都是日常动作！', label: '用法提示', animationType: 'pulse' },
          { type: 'animation', content: '太阳升起，时钟转动，小朋友起床做早晨日常的动画', animationType: 'bounce', animationConfig: { sceneType: 'timeline', title: 'Morning Routine', timelineConfig: { steps: [ { text: '1. Wake up', emoji: '⏰', ttsText: 'I wake up', duration: 1.2 }, { text: '2. Brush teeth', emoji: '🪥', ttsText: 'I brush my teeth', duration: 1.2 }, { text: '3. Eat breakfast', emoji: '🍞', ttsText: 'I eat breakfast', duration: 1.2 }, { text: '4. Go to school', emoji: '🏫', ttsText: 'I go to school', duration: 1.2 } ] }, ttsNarration: '早晨日常：起床、刷牙、吃早餐、上学' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u1l1q1',
            type: 'choice',
            question: '"我起床了"用英语怎么说？',
            options: ['I wake up', 'I go to bed', 'I go home', 'I go out'],
            answer: 'I wake up',
            hint: '早上睁开眼睛做的第一件事',
            explanation: 'I wake up表示我起床了，wake up是醒来的意思'
          },
          {
            id: 'e2u1l1q2',
            type: 'fill',
            question: 'I ____ my teeth every morning.（刷牙）',
            answer: 'brush',
            hint: '刷牙用的动词',
            explanation: 'brush my teeth表示刷牙，brush是刷的意思'
          },
          {
            id: 'e2u1l1q3',
            type: 'drag',
            question: '把动作拖到正确位置：吃早餐 = ____ breakfast',
            answer: 'eat',
            hint: '和食物搭配的动词',
            explanation: 'eat breakfast表示吃早餐，eat是吃的意思'
          },
          {
            id: 'e2u1l1q4',
            type: 'choice',
            question: '早晨起床后，接下来通常会做什么？',
            options: ['I brush my teeth', 'I go to bed', 'I eat dinner', 'I take a bath'],
            answer: 'I brush my teeth',
            hint: '起床后先做什么清洁？',
            explanation: '早晨起床后通常会先刷牙，I brush my teeth表示我刷牙'
          },
          {
            id: 'e2u1l1q5',
            type: 'fill',
            question: 'I get ____ every morning. I put on my clothes.（穿衣服）',
            answer: 'dressed',
            hint: '穿衣服用哪个表达？',
            explanation: 'I get dressed表示我穿好衣服，get dressed是穿衣服的意思'
          },
          {
            id: 'e2u1l1q6',
            type: 'choice',
            question: '【期末真题】下列哪个动作属于早晨日常？',
            options: ['I eat breakfast', 'I eat dinner', 'I take a bath', 'I go to bed'],
            answer: 'I eat breakfast',
            hint: '哪个是早上做的事？',
            explanation: 'I eat breakfast吃早餐是早晨日常，其他都是晚间活动'
          },
          {
            id: 'e2u1l1q7',
            type: 'drag',
            question: '把词拖到正确位置：Good ____! 早上好！',
            answer: 'morning',
            hint: '[Daily English]（英语一年级-日常问候）',
            explanation: 'Good morning!是早上好的意思，回顾一年级学过的问候语'
          }
        ]
      },
      {
        id: 'e2u1l2',
        title: '学校生活',
        order: 2,
        teachingMethod: '角色扮演法',
        learningObjective: '我能用I go to school/read books描述学校生活',
        successCriteria: '①能说出至少3个学校活动的英语 ②能用I...句型描述学校生活',
        iDo: '家长模拟上学场景，说"I go to school. I read books. I play with friends"',
        weDo: '亲子一起角色扮演学校生活，用英语说出学校活动',
        youDo: '孩子独立用英语描述在学校的一天，说出3-5个活动',
        parentTips: '【家长预习】本课核心：学校生活I go to school（上学）、I read books（读书）、I play with friends（和朋友玩）。\n共学四步：\n①对话出题：家长问What do you do at school?并说I read books.。\n②孩子应答：孩子应说I read books. I play with friends.。\n③答错引导：若孩子说不出，家长当同学一起回忆学校！扫描课时发音动画听发音；让孩子点读课件短语卡；家长结合孩子在校经历边说边比划。\n④快速检测：1.孩子说出3个学校活动；2.用I...描述学校生活；3.说出最喜欢的一项学校活动。',
        funElement: '玩"学校小剧场"，用玩偶表演学校生活并配音',
        gsapAnimations: ['GSAP:校车行驶-busMove', 'GSAP:书本翻页-pageFlip'],
        images: ['IMG:学校生活场景', 'IMG:学校活动卡片'],
        content: [
          { type: 'text', content: '在学校里我们做很多事情：I go to school我去上学、I read books我读书、I play with friends我和朋友玩耍', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I go to school every day.\n小红: Me too! I read books at school.\n小明: I play with my friends!\n小红: School is fun!', label: '学校生活对话', animationType: 'reveal' },
          { type: 'example', content: 'I go to school — 我去上学\nI read books — 我读书\nI play with friends — 我和朋友玩\nI write — 我写字\nI draw — 我画画', label: '学校活动表达', animationType: 'bounce' },
          { type: 'tip', content: 'play with表示"和……一起玩"，play with friends就是和朋友一起玩！', label: '用法提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u1l2q1',
            type: 'choice',
            question: '"我去上学"用英语怎么说？',
            options: ['I go to school', 'I go to bed', 'I go home', 'I go shopping'],
            answer: 'I go to school',
            hint: '每天早上出门去哪里？',
            explanation: 'I go to school表示我去上学，school是学校'
          },
          {
            id: 'e2u1l2q2',
            type: 'fill',
            question: 'I ____ with my friends at school.（玩耍）',
            answer: 'play',
            hint: '和同学一起做什么？',
            explanation: 'play with friends表示和朋友玩耍，play是玩'
          },
          {
            id: 'e2u1l2q3',
            type: 'flashcard',
            question: '看读书的图片，用英语说出动作',
            answer: 'Read books',
            hint: '看着文字做什么？',
            explanation: 'Read books表示读书，read是阅读的意思'
          },
          {
            id: 'e2u1l2q4',
            type: 'choice',
            question: '在学校里，如果你想看书，应该怎么说？',
            options: ['I read books', 'I play with friends', 'I go to bed', 'I take a bath'],
            answer: 'I read books',
            hint: '看书的英语表达是什么？',
            explanation: 'I read books表示我读书，read是阅读的意思'
          },
          {
            id: 'e2u1l2q5',
            type: 'fill',
            question: 'I ____ pictures at school. I use colors.（画画）',
            answer: 'draw',
            acceptableAnswers: ['paint'],
            hint: '用笔画画的动词',
            explanation: 'I draw pictures表示我画画，draw是画画的意思'
          },
          {
            id: 'e2u1l2q6',
            type: 'choice',
            question: '【期末真题】哪个活动是在学校做的？',
            options: ['I read books', 'I take a bath', 'I eat dinner', 'I go to bed'],
            answer: 'I read books',
            hint: '学校里做什么？',
            explanation: 'I read books读书是在学校做的活动，其他都是在家做的'
          },
          {
            id: 'e2u1l2q7',
            type: 'drag',
            question: '把词拖到正确位置：I go to school every ____.（每天）',
            answer: 'day',
            hint: '[My Day-早晨日常]（英语二年级-第1单元）',
            explanation: 'every day表示每天，回顾早晨日常中学过的表达'
          }
        ]
      },
      {
        id: 'e2u1l3',
        title: '晚间日常',
        order: 3,
        teachingMethod: 'I Do→We Do→You Do',
        learningObjective: '我能用I eat dinner/take a bath/go to bed描述晚间日常',
        successCriteria: '①能说出3个晚间活动的英语 ②能按顺序描述晚上做的事',
        iDo: '家长模拟晚间场景，说"I eat dinner. I take a bath. I go to bed"',
        weDo: '亲子一起表演晚间日常，互相说出正在做的事情',
        youDo: '孩子独立用英语描述晚间日常，从晚饭到睡觉',
        parentTips: '【家长预习】本课核心：晚间日常I eat dinner（吃晚饭）、I take a bath（洗澡）、I go to bed（睡觉）。\n共学四步：\n①对话出题：家长晚上问What do you do at night?并说I eat dinner.。\n②孩子应答：孩子应说I eat dinner. I go to bed.。\n③答错引导：若孩子说不出，家长当同学一起做晚间动作！扫描课时发音动画听发音；让孩子点读课件短语卡；家长边做吃饭洗澡动作边说英语。\n④快速检测：1.孩子说出3个晚间活动；2.按顺序说晚上做的事；3.边做动作边说I go to bed。',
        funElement: '唱《This Is the Way》儿歌，配合晚间活动动作',
        gsapAnimations: ['GSAP:月亮升起-moonrise', 'GSAP:星星闪烁-twinkle'],
        images: ['IMG:晚间日常场景', 'IMG:晚间活动卡片'],
        content: [
          { type: 'text', content: '晚上我们也有很多事情要做：I eat dinner我吃晚饭、I take a bath我洗澡、I go to bed我上床睡觉', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: What do you do in the evening?\n小明: I eat dinner. Then I take a bath.\n妈妈: What time do you go to bed?\n小明: I go to bed at nine!', label: '晚间日常对话', animationType: 'reveal' },
          { type: 'example', content: 'I eat dinner — 我吃晚饭\nI take a bath — 我洗澡\nI go to bed — 我上床睡觉\nI read a story — 我读故事\nI say good night — 我说晚安', label: '晚间日常表达', animationType: 'bounce' },
          { type: 'tip', content: 'take a bath是盆浴，take a shower是淋浴。两个都是洗澡，但方式不同哦！', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '月亮升起，星星闪烁，小朋友做晚间日常的动画', animationType: 'bounce', animationConfig: { sceneType: 'timeline', title: 'Night Routine', timelineConfig: { steps: [ { text: '1. Eat dinner', emoji: '🍽', ttsText: 'I eat dinner', duration: 1.2 }, { text: '2. Take a bath', emoji: '🛁', ttsText: 'I take a bath', duration: 1.2 }, { text: '3. Go to bed', emoji: '🛏', ttsText: 'I go to bed', duration: 1.2 } ] }, ttsNarration: '晚间日常：吃晚餐、洗澡、睡觉' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u1l3q1',
            type: 'choice',
            question: '"我上床睡觉了"用英语怎么说？',
            options: ['I go to bed', 'I wake up', 'I go out', 'I stand up'],
            answer: 'I go to bed',
            hint: '晚上最后做的事',
            explanation: 'I go to bed表示我上床睡觉了，go to bed是睡觉'
          },
          {
            id: 'e2u1l3q2',
            type: 'fill',
            question: 'I ____ a bath before bed.（洗澡）',
            answer: 'take',
            acceptableAnswers: ['have'],
            hint: '洗澡用什么动词？',
            explanation: 'take a bath表示洗澡，take a shower是淋浴'
          },
          {
            id: 'e2u1l3q3',
            type: 'drag',
            question: '把活动拖到正确位置：吃晚饭 = ____ dinner',
            answer: 'eat',
            hint: '和breakfast一样的动词',
            explanation: 'eat dinner表示吃晚饭，和eat breakfast结构相同'
          },
          {
            id: 'e2u1l3q4',
            type: 'choice',
            question: '晚上睡觉前，小明通常会做什么？',
            options: ['I take a bath', 'I wake up', 'I go to school', 'I eat breakfast'],
            answer: 'I take a bath',
            hint: '睡前做什么清洁？',
            explanation: 'I take a bath表示我洗澡，晚上睡觉前通常会洗澡'
          },
          {
            id: 'e2u1l3q5',
            type: 'fill',
            question: 'I say good ____ to Mom before sleep.（晚安）',
            answer: 'night',
            hint: '睡前说什么？',
            explanation: 'I say good night表示我说晚安，good night是晚安的意思'
          },
          {
            id: 'e2u1l3q6',
            type: 'choice',
            question: '【期末真题】下列哪个动作属于晚间日常？',
            options: ['I go to bed', 'I wake up', 'I eat breakfast', 'I go to school'],
            answer: 'I go to bed',
            hint: '哪个是晚上做的事？',
            explanation: 'I go to bed上床睡觉是晚间日常，其他都是早晨活动'
          },
          {
            id: 'e2u1l3q7',
            type: 'drag',
            question: '把词拖到正确位置：I ____ my teeth in the morning and at night.（刷牙）',
            answer: 'brush',
            hint: '[My Day-早晨日常]（英语二年级-第1单元）',
            explanation: 'I brush my teeth我刷牙，早晚都要刷牙，回顾早晨日常学过的表达'
          }
        ]
      }
    ,
      {
        id: 'e2u1l4',
        title: 'My Day Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用My Day单元的日常活动表达',
        successCriteria: '①能说出6个日常活动英语 ②能描述从早到晚的一天',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾My Day单元：早晨wake up/brush teeth/eat breakfast、学校go to school/read books、晚间eat dinner/take a bath/go to bed。\n共学四步：\n①对话出题：家长问早上起床后做什么？用英语说。。\n②孩子应答：孩子应说I wake up. I brush my teeth.。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说日常活动。\n④快速检测：1.孩子说出6个日常活动；2.描述早晨做的事；3.描述晚上做的事。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾My Day单元！我们学了早晨日常wake up/brush teeth/eat breakfast、学校生活go to school/read books/play、晚间日常eat dinner/take a bath/go to bed`, animationType: 'reveal' },
          { type: 'formula', content: `日常活动公式：
I + 动词 + 宾语 → I brush my teeth.
I + 动词 + 介词 + 名词 → I go to school.
频率词：every day每天`, animationType: 'typewriter', label: 'My Day公式' },
          { type: 'animation', content: `My Day单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'My Day Review', cardRevealConfig: { cards: [ { front: 'Morning', back: '🌅', ttsText: 'Morning' }, { front: 'Afternoon', back: '☀️', ttsText: 'Afternoon' }, { front: 'Evening', back: '🌆', ttsText: 'Evening' }, { front: 'Night', back: '🌙', ttsText: 'Night' } ] }, ttsNarration: 'My Day单元回顾：早晨、下午、晚上、夜晚' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u1l4q1',
            type: 'choice',
            question: '早晨起床用英语怎么说？',
            options: ['I wake up', 'I go to bed', 'I go to school', 'I eat dinner'],
            answer: 'I wake up',
            hint: '早上睁开眼睛做的第一件事',
            explanation: 'I wake up表示我起床，是早晨日常的第一个动作'
          },
          {
            id: 'e2u1l4q2',
            type: 'fill',
            question: 'I ____ to school every day.（去上学）',
            answer: 'go',
            hint: '去某地用什么动词？',
            explanation: 'I go to school表示我去上学，go是去的意思'
          },
          {
            id: 'e2u1l4q3',
            type: 'choice',
            question: '晚上最后做的一件事是什么？',
            options: ['I go to bed', 'I wake up', 'I eat breakfast', 'I read books'],
            answer: 'I go to bed',
            hint: '一天结束前做什么？',
            explanation: 'I go to bed上床睡觉是一天中最后做的事'
          },
          {
            id: 'e2u1l4q4',
            type: 'drag',
            question: '把活动拖到正确时间：eat dinner属于____',
            answer: 'evening',
            hint: 'dinner是哪一餐？',
            explanation: 'eat dinner吃晚饭是晚上的活动，evening是晚上'
          },
          {
            id: 'e2u1l4q5',
            type: 'choice',
            question: '【期末真题】I eat ____ in the morning.',
            options: ['breakfast', 'dinner', 'lunch', 'supper'],
            answer: 'breakfast',
            hint: '早上吃的那顿饭叫什么？',
            explanation: 'breakfast是早餐，早上吃的饭；dinner是晚餐，晚上吃的饭'
          },
          {
            id: 'e2u1l4q6',
            type: 'fill',
            question: 'I take a ____ before bed. Then I go to sleep.（洗澡）',
            answer: 'bath',
            acceptableAnswers: ['shower'],
            hint: '洗澡用什么表达？',
            explanation: 'I take a bath表示我洗澡，是晚间日常的重要活动'
          },
          {
            id: 'e2u1l4q7',
            type: 'drag',
            question: '把词拖到正确位置：I ____ my teeth every morning and night.',
            answer: 'brush',
            hint: '[My Day]（英语二年级-第1单元）',
            explanation: 'I brush my teeth我刷牙，是早晚都要做的重要日常活动'
          },
        ]
      },
      {
        id: 'e2u1l5',
        title: 'My Day in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在生活中用英语描述一天的日常活动',
        successCriteria: '①能说出从早到晚至少5个活动 ②能在做事情时说出对应英语',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把日常活动生活化：从早到晚做的每件事都可以用英语说。\n共学四步：\n①对话出题：家长问一天里你做了哪些事？用英语说几个。。\n②孩子应答：孩子应说I wake up. I go to school.等。\n③答错引导：若孩子说不出，家长当同学一起过一天！扫描课时发音动画复习；让孩子点读课件情景卡；家长按时间顺序带孩子边做边说英语。\n④快速检测：1.孩子说出5个日常活动；2.描述早晨；3.描述晚上。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `日常活动在生活中无处不在！从早到晚，我们做的每件事都可以用英语说出来`, animationType: 'reveal' },
          { type: 'example', content: `场景1：早晨 → I wake up. I brush my teeth. I eat breakfast.
场景2：学校 → I go to school. I read books.
场景3：晚上 → I eat dinner. I take a bath. I go to bed.`, animationType: 'bounce', label: 'My Day在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u1l5q1',
            type: 'choice',
            question: '早上闹钟响了，你应该说什么？',
            options: ['I wake up', 'I go to bed', 'I eat dinner', 'I take a bath'],
            answer: 'I wake up',
            hint: '闹钟响了代表什么？',
            explanation: '闹钟响了代表该起床了，I wake up表示我起床'
          },
          {
            id: 'e2u1l5q2',
            type: 'fill',
            question: 'Mom says: "____ your teeth!" before school.（刷牙）',
            answer: 'Brush',
            hint: '妈妈让你做什么？',
            explanation: 'Brush your teeth!表示刷牙！上学前要刷牙'
          },
          {
            id: 'e2u1l5q3',
            type: 'choice',
            question: '放学回家后，你想说"我吃晚饭了"，应该怎么说？',
            options: ['I eat dinner', 'I eat breakfast', 'I wake up', 'I go to school'],
            answer: 'I eat dinner',
            hint: '晚饭用英语怎么说？',
            explanation: 'I eat dinner表示我吃晚饭，dinner是晚餐'
          },
          {
            id: 'e2u1l5q4',
            type: 'drag',
            question: '把表达拖到正确场景：睡前要说____ night',
            answer: 'good',
            hint: '睡前说什么告别语？',
            explanation: 'Good night!是晚安，睡前对家人说晚安'
          },
          {
            id: 'e2u1l5q5',
            type: 'choice',
            question: '【期末真题】小明早上7点起床，9点上学，晚上9点睡觉。哪个表达描述他早上7点的状态？',
            options: ['I wake up', 'I go to school', 'I go to bed', 'I eat dinner'],
            answer: 'I wake up',
            hint: '7点起床对应哪个表达？',
            explanation: '7点起床对应I wake up，9点上学对应I go to school，9点睡觉对应I go to bed'
          },
          {
            id: 'e2u1l5q6',
            type: 'fill',
            question: 'After school, I ____ with my friends in the park.（玩耍）',
            answer: 'play',
            hint: '和朋友一起做什么？',
            explanation: 'I play with my friends表示我和朋友玩耍，放学后在公园玩'
          },
          {
            id: 'e2u1l5q7',
            type: 'choice',
            question: '结合早晨和晚间日常，哪个表达连接了一天开始和结束？',
            options: ['I wake up and I go to bed', 'I eat breakfast and I eat breakfast', 'I brush my teeth and I brush my teeth', 'I go to school and I go to school'],
            answer: 'I wake up and I go to bed',
            hint: '[My Day]（英语二年级-第1单元）',
            explanation: 'I wake up起床是一天的开始，I go to bed睡觉是一天的结束，两个表达连接了一天的首尾'
          },
        ]
      }]
  },
  {
    id: 'e2u2',
    title: 'Weather',
    subtitle: '今天天气怎么样',
    order: 2,
    lessons: [
      {
        id: 'e2u2l1',
        title: '天气词汇',
        order: 1,
        teachingMethod: '多感官教学法',
        learningObjective: '我能用It\'s sunny/rainy描述天气',
        successCriteria: '①能说出5种天气的英语 ②能用It\'s+形容词描述当天天气',
        iDo: '家长指着窗外说"It\'s sunny today!"，用动作表示阳光、下雨等天气',
        weDo: '亲子一起看天气图片，说出对应天气的英语，做天气手势',
        youDo: '孩子独立看窗外天气并用英语描述，如"It\'s cloudy"',
        parentTips: '【家长预习】本课核心：天气It\'s sunny（晴天）、It\'s rainy（雨天）、cloudy/snowy/windy。\n共学四步：\n①对话出题：家长看窗外问How\'s the weather?并说It\'s sunny.。\n②孩子应答：孩子应说It\'s sunny!。\n③答错引导：若孩子说不出，家长当同学一起看天气！扫描课时发音动画听发音；让孩子点读课件天气卡；家长带孩子看窗外真实天气边指边说英语。\n④快速检测：1.孩子说出3种天气；2.用It\'s...描述今天天气；3.家长说天气孩子指窗外。',
        funElement: '玩"天气播报员"游戏，孩子当播报员报告天气',
        gsapAnimations: ['GSAP:太阳光芒放射-sunRay', 'GSAP:雨滴落下-rainDrop'],
        images: ['IMG:各种天气插图', 'IMG:天气词汇卡片'],
        content: [
          { type: 'text', content: 'It\'s sunny! 今天是晴天！It\'s rainy! 今天是雨天！学会用It\'s + 天气形容词来描述天气吧', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What\'s the weather like today?\n小红: It\'s sunny! Let\'s go out!\n小明: How about tomorrow?\n小红: It\'s rainy. Take an umbrella!', label: '天气对话', animationType: 'reveal' },
          { type: 'example', content: 'It\'s sunny — 晴天\nIt\'s rainy — 雨天\nIt\'s cloudy — 多云\nIt\'s snowy — 下雪\nIt\'s windy — 刮风\nIt\'s hot — 很热', label: '天气词汇', animationType: 'bounce' },
          { type: 'tip', content: 'What\'s the weather like? 是问天气的常用句型，like在这里不是"喜欢"的意思哦！', label: '句型提示', animationType: 'pulse' },
          { type: 'animation', content: '太阳、雨滴、云朵、雪花依次出现的天气动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Weather', sceneBuildConfig: { sceneName: 'Weather', elements: [ { id: 'el-0', text: 'Sun', emoji: '☀️', delay: 0, animation: 'popIn', ttsText: 'Sun' }, { id: 'el-1', text: 'Rain', emoji: '🌧️', delay: 0.4, animation: 'slideIn', ttsText: 'Rain' }, { id: 'el-2', text: 'Cloud', emoji: '☁️', delay: 0.8, animation: 'fadeIn', ttsText: 'Cloud' }, { id: 'el-3', text: 'Snow', emoji: '❄️', delay: 1.2, animation: 'scaleIn', ttsText: 'Snow' } ] }, ttsNarration: '天气：太阳、雨、云、雪' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u2l1q1',
            type: 'choice',
            question: '"今天晴天"用英语怎么说？',
            options: ["It's sunny", "It's rainy", "It's cloudy", "It's snowy"],
            answer: "It's sunny",
            hint: '太阳出来了的天气',
            explanation: "It's sunny表示晴天，sunny是阳光充足的"
          },
          {
            id: 'e2u2l1q2',
            type: 'fill',
            question: 'It\'s ____ today. Take an umbrella!（下雨）',
            answer: 'rainy',
            acceptableAnswers: ['raining'],
            hint: '需要打伞的天气',
            explanation: "It's rainy表示下雨天，rainy是多雨的"
          },
          {
            id: 'e2u2l1q3',
            type: 'flashcard',
            question: '看下雪的图片，用英语描述天气',
            answer: "It's snowy",
            hint: '白色的冬天天气',
            explanation: "It's snowy表示下雪天，snowy是下雪的"
          },
          {
            id: 'e2u2l1q4',
            type: 'choice',
            question: '出门看到天空布满云，应该怎么说？',
            options: ["It's cloudy", "It's sunny", "It's snowy", "It's hot"],
            answer: "It's cloudy",
            hint: '云很多的时候天气怎么说？',
            explanation: "It's cloudy表示多云，cloudy是多云的"
          },
          {
            id: 'e2u2l1q5',
            type: 'fill',
            question: "It's ____ today. The wind is very strong.（刮风）",
            answer: 'windy',
            hint: '风很大的时候天气怎么说？',
            explanation: "It's windy表示刮风天，windy是有风的"
          },
          {
            id: 'e2u2l1q6',
            type: 'choice',
            question: '【期末真题】夏天很热，用英语怎么说？',
            options: ["It's hot", "It's cold", "It's rainy", "It's windy"],
            answer: "It's hot",
            hint: '热用哪个形容词？',
            explanation: "It's hot表示很热，hot是热的，夏天常用的天气表达"
          },
          {
            id: 'e2u2l1q7',
            type: 'drag',
            question: '把词拖到正确位置：What\'s the ____ like today?（天气）',
            answer: 'weather',
            hint: '[My Day]（英语二年级-第1单元）',
            explanation: "What's the weather like?是问天气的常用句型，回顾日常表达"
          }
        ]
      },
      {
        id: 'e2u2l2',
        title: '四季',
        order: 2,
        teachingMethod: '视觉化教学法',
        learningObjective: '我能说出Spring/Summer/Autumn/Winter四季名称及特点',
        successCriteria: '①能说出4个季节的英语 ②能说出每个季节的一个特点',
        iDo: '家长展示四季图片，说"Spring, Summer, Autumn, Winter"，描述每个季节特点',
        weDo: '亲子一起讨论每个季节的特点，用英语说出喜欢的季节',
        youDo: '孩子独立用英语描述四季的特点和自己的喜好',
        parentTips: '【家长预习】本课核心：四季Spring（春）、Summer（夏）、Autumn（秋）、Winter（冬）及特点。\n共学四步：\n①对话出题：家长问一年有几个季节？并说Spring, Summer...。\n②孩子应答：孩子应说Autumn, Winter!。\n③答错引导：若孩子记不住，家长当同学一起想季节！扫描课时发音动画听发音；让孩子点读课件季节卡；家长结合季节特点（花开、炎热）边说边比划。\n④快速检测：1.孩子说出4个季节；2.说出春天特点；3.说出最喜欢的季节。',
        funElement: '画四季树，每棵树表现一个季节的特征，用英语标注',
        gsapAnimations: ['GSAP:季节轮转-seasonWheel', 'GSAP:树叶变色-leafColor'],
        images: ['IMG:四季对比插图', 'IMG:四季特征卡片'],
        content: [
          { type: 'text', content: '一年有四个季节：Spring春天花开、Summer夏天炎热、Autumn秋天落叶、Winter冬天飘雪', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Which season do you like?\n小红: I like summer! I can swim!\n小明: I like spring. Flowers are beautiful!\n小红: Autumn is nice too. Leaves are colorful!', label: '四季对话', animationType: 'reveal' },
          { type: 'example', content: 'Spring — 春天（花开）\nSummer — 夏天（游泳）\nAutumn/Fall — 秋天（落叶）\nWinter — 冬天（下雪）', label: '四季词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Autumn和Fall都是"秋天"的意思，Autumn是英式英语，Fall是美式英语！', label: '文化知识', animationType: 'pulse' },
          { type: 'animation', content: '四季轮转动画，每个季节展示对应景色', animationType: 'bounce', animationConfig: { sceneType: 'timeline', title: 'Four Seasons', timelineConfig: { steps: [ { text: '1. Spring', emoji: '🌸', ttsText: 'Spring', duration: 1.5 }, { text: '2. Summer', emoji: '☀️', ttsText: 'Summer', duration: 1.5 }, { text: '3. Autumn', emoji: '🍂', ttsText: 'Autumn', duration: 1.5 }, { text: '4. Winter', emoji: '⛄', ttsText: 'Winter', duration: 1.5 } ] }, ttsNarration: '四季：春、夏、秋、冬' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u2l2q1',
            type: 'choice',
            question: '春天用英语怎么说？',
            options: ['Spring', 'Summer', 'Autumn', 'Winter'],
            answer: 'Spring',
            hint: '花开了的季节',
            explanation: 'Spring是春天，万物复苏的季节'
          },
          {
            id: 'e2u2l2q2',
            type: 'fill',
            question: '冬天用英语怎么说？',
            answer: 'Winter',
            hint: '下雪的季节',
            explanation: 'Winter是冬天，寒冷飘雪的季节'
          },
          {
            id: 'e2u2l2q3',
            type: 'choice',
            question: 'Leaves fall in ____.（秋天落叶）',
            options: ['Spring', 'Summer', 'Autumn', 'Winter'],
            answer: 'Autumn',
            hint: '落叶是哪个季节的特征？',
            explanation: 'Autumn秋天树叶变黄掉落，Leaves fall in Autumn'
          },
          {
            id: 'e2u2l2q4',
            type: 'choice',
            question: '哪个季节可以游泳？',
            options: ['Summer', 'Winter', 'Autumn', 'Spring'],
            answer: 'Summer',
            hint: '最热的季节做什么运动？',
            explanation: 'Summer夏天最热，可以游泳，I can swim in summer'
          },
          {
            id: 'e2u2l2q5',
            type: 'fill',
            question: 'Flowers bloom in ____.（春天花开）',
            answer: 'Spring',
            hint: '花在哪个季节开放？',
            explanation: 'Spring春天万物复苏，花朵开放，Flowers bloom in Spring'
          },
          {
            id: 'e2u2l2q6',
            type: 'choice',
            question: '【期末真题】Which word means the same as "Fall"?',
            options: ['Autumn', 'Spring', 'Summer', 'Winter'],
            answer: 'Autumn',
            hint: 'Fall和哪个季节是同一个意思？',
            explanation: 'Autumn和Fall都是秋天的意思，Autumn是英式英语，Fall是美式英语'
          },
          {
            id: 'e2u2l2q7',
            type: 'drag',
            question: '把词拖到正确位置：It\'s ____ in winter. We can make a snowman.（下雪）',
            answer: 'snowy',
            hint: '[Weather-天气词汇]（英语二年级-第2单元）',
            explanation: "It's snowy in winter冬天会下雪，回顾天气词汇中学过的表达"
          }
        ]
      },
      {
        id: 'e2u2l3',
        title: '穿衣搭配',
        order: 3,
        teachingMethod: '情景教学法',
        learningObjective: '我能根据天气用I wear...说穿衣搭配',
        successCriteria: '①能说出3种衣物英语 ②能用It\'s...I wear...根据天气说穿衣',
        iDo: '家长根据天气搭配衣服，说"It\'s cold. I wear a coat. It\'s hot. I wear a T-shirt"',
        weDo: '亲子一起根据天气选择衣服，用英语说出搭配理由',
        youDo: '孩子独立根据天气用英语说出应该穿什么衣服',
        parentTips: '【家长预习】本课核心：根据天气穿衣It\'s cold. I wear a coat.（天冷穿外套）、It\'s hot. I wear a T-shirt.。\n共学四步：\n①对话出题：家长问下雨天穿什么？并说It\'s rainy. I wear a raincoat.。\n②孩子应答：孩子应说I wear a raincoat.。\n③答错引导：若孩子说不出，家长当同学一起挑衣服！扫描课时发音动画听发音；让孩子点读课件衣物卡；家长拿真实衣服边穿边说英语。\n④快速检测：1.孩子说出3种衣物；2.说冷天穿什么；3.说热天穿什么。',
        funElement: '玩"天气衣橱"游戏，给纸娃娃根据天气搭配衣服',
        gsapAnimations: ['GSAP:衣橱打开-wardrobeOpen', 'GSAP:衣服飘落-clothFall'],
        images: ['IMG:穿衣搭配场景', 'IMG:天气与服装卡片'],
        content: [
          { type: 'text', content: '不同天气穿不同的衣服！It\'s cold. I wear a coat. 天冷穿外套。It\'s hot. I wear a T-shirt. 天热穿T恤', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: It\'s cold today. Put on your coat!\n小明: OK! I wear a coat and a hat.\n妈妈: Don\'t forget your scarf!\n小明: Thank you, Mom!', label: '穿衣搭配对话', animationType: 'reveal' },
          { type: 'example', content: 'Coat — 外套（冷天穿）\nT-shirt — T恤（热天穿）\nRaincoat — 雨衣（雨天穿）\nScarf — 围巾\nHat — 帽子\nShorts — 短裤', label: '服装与天气', animationType: 'bounce' },
          { type: 'tip', content: 'wear是"穿"的意思，不管穿什么衣服都用wear！I wear a coat / I wear a hat', label: '用法提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u2l3q1',
            type: 'choice',
            question: '下雪天应该穿什么？',
            options: ['Coat', 'T-shirt', 'Shorts', 'Dress'],
            answer: 'Coat',
            hint: '冬天保暖的衣服',
            explanation: 'Coat是外套，下雪天需要穿外套保暖'
          },
          {
            id: 'e2u2l3q2',
            type: 'fill',
            question: 'It\'s hot. I wear a ____-shirt.（T恤）',
            answer: 'T',
            hint: '短袖衣服的简称',
            explanation: 'T-shirt是T恤衫，夏天常穿的衣服'
          },
          {
            id: 'e2u2l3q3',
            type: 'drag',
            question: '把衣物拖到正确位置：下雨天需要____',
            answer: 'Raincoat',
            hint: '防雨的衣服',
            explanation: 'Raincoat是雨衣，下雨天穿雨衣防雨'
          },
          {
            id: 'e2u2l3q4',
            type: 'choice',
            question: 'It\'s hot outside. What should I wear?',
            options: ['A T-shirt', 'A coat', 'A scarf', 'A raincoat'],
            answer: 'A T-shirt',
            hint: '天热穿什么？',
            explanation: "It's hot天热应该穿T恤，T-shirt是短袖衣服"
          },
          {
            id: 'e2u2l3q5',
            type: 'fill',
            question: 'I wear a ____ around my neck in winter.（围巾）',
            answer: 'scarf',
            hint: '冬天脖子上围什么？',
            explanation: 'scarf是围巾，冬天围在脖子上保暖'
          },
          {
            id: 'e2u2l3q6',
            type: 'choice',
            question: '【期末真题】下雨天应该穿什么？',
            options: ['A raincoat', 'A T-shirt', 'A hat', 'Shorts'],
            answer: 'A raincoat',
            hint: '什么衣服可以防雨？',
            explanation: 'Raincoat是雨衣，下雨天穿雨衣可以防雨'
          },
          {
            id: 'e2u2l3q7',
            type: 'drag',
            question: '把词拖到正确位置：I wear a coat because it\'s ____ outside.（冷）',
            answer: 'cold',
            hint: '[Weather-天气词汇]（英语二年级-第2单元）',
            explanation: "It's cold outside外面很冷，所以要穿外套，回顾天气词汇"
          }
        ]
      }
    ,
      {
        id: 'e2u2l4',
        title: 'Weather Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用Weather单元的天气词汇和穿衣表达',
        successCriteria: '①能说出5种天气英语 ②能根据天气说穿衣',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾Weather单元：天气sunny/rainy/cloudy/snowy/windy、四季、穿衣搭配coat/T-shirt/raincoat。\n共学四步：\n①对话出题：家长问今天天气怎么样？用英语说。。\n②孩子应答：孩子应说It\'s sunny!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说天气。\n④快速检测：1.孩子说出5种天气；2.说出四季；3.说冷天穿什么。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Weather单元！我们学了天气词汇sunny/rainy/cloudy/snowy/windy、四季Spring/Summer/Autumn/Winter、穿衣搭配coat/T-shirt/raincoat`, animationType: 'reveal' },
          { type: 'formula', content: `天气表达公式：
It's + 天气形容词 → It's sunny!
What's the weather like? → 问天气
I wear + 服装 → I wear a coat.`, animationType: 'typewriter', label: 'Weather公式' },
          { type: 'animation', content: `Weather单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Weather Review', cardRevealConfig: { cards: [ { front: 'Sunny', back: '☀️', ttsText: 'Sunny' }, { front: 'Rainy', back: '🌧️', ttsText: 'Rainy' }, { front: 'Cloudy', back: '☁️', ttsText: 'Cloudy' }, { front: 'Snowy', back: '❄️', ttsText: 'Snowy' } ] }, ttsNarration: 'Weather单元回顾：晴、雨、云、雪' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u2l4q1',
            type: 'choice',
            question: '晴天用英语怎么说？',
            options: ["It's sunny", "It's rainy", "It's cloudy", "It's snowy"],
            answer: "It's sunny",
            hint: '太阳出来的天气',
            explanation: "It's sunny表示晴天，sunny是阳光充足的"
          },
          {
            id: 'e2u2l4q2',
            type: 'fill',
            question: 'I like ____ because I can swim.（夏天）',
            answer: 'Summer',
            hint: '最热的季节',
            explanation: 'Summer是夏天，可以游泳的季节'
          },
          {
            id: 'e2u2l4q3',
            type: 'choice',
            question: '冬天穿什么保暖？',
            options: ['A coat', 'A T-shirt', 'Shorts', 'A raincoat'],
            answer: 'A coat',
            hint: '冬天穿什么厚衣服？',
            explanation: 'Coat是外套，冬天穿外套保暖'
          },
          {
            id: 'e2u2l4q4',
            type: 'drag',
            question: '把季节拖到正确位置：落叶的季节是____',
            answer: 'Autumn',
            hint: '也叫Fall',
            explanation: 'Autumn是秋天，也叫Fall，落叶的季节'
          },
          {
            id: 'e2u2l4q5',
            type: 'choice',
            question: '【期末真题】哪个句子正确描述了天气和穿衣的关系？',
            options: ["It's cold. I wear a coat.", "It's hot. I wear a coat.", "It's rainy. I wear shorts.", "It's snowy. I wear a T-shirt."],
            answer: "It's cold. I wear a coat.",
            hint: '天气和穿衣要匹配',
            explanation: "It's cold天冷穿外套coat，天气和穿衣要对应"
          },
          {
            id: 'e2u2l4q6',
            type: 'fill',
            question: 'It\'s rainy. Take an ____!（雨伞）',
            answer: 'umbrella',
            hint: '下雨天需要什么？',
            explanation: 'umbrella是雨伞，下雨天要带雨伞'
          },
          {
            id: 'e2u2l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"My Day"学的内容？',
            options: ['I wake up', "It's sunny", "It's rainy", 'Goodbye'],
            answer: 'I wake up',
            hint: '[My Day]（英语二年级-第1单元）',
            explanation: 'I wake up起床是上一单元My Day的核心内容'
          },
        ]
      },
      {
        id: 'e2u2l5',
        title: 'Weather in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在生活中用英语看天气决定穿衣和活动',
        successCriteria: '①能描述当天天气 ②能根据天气说穿什么做什么',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把天气生活化：出门前看天气，决定穿什么、做什么活动。\n共学四步：\n①对话出题：家长出门前问今天天气怎样？穿什么？。\n②孩子应答：孩子应说It\'s sunny. I wear a T-shirt.。\n③答错引导：若孩子说不出，家长当同学一起出门！扫描课时发音动画复习；让孩子点读课件情景卡；家长出门前真实看天气边说边选衣服。\n④快速检测：1.孩子描述今天天气；2.说穿什么；3.说适合做什么活动。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `天气影响我们的日常生活！出门前看天气，决定穿什么衣服，做什么活动`, animationType: 'reveal' },
          { type: 'example', content: `场景1：看天气 → What's the weather like? It's sunny!
场景2：选衣服 → It's cold. I wear a coat.
场景3：选活动 → It's rainy. Let's stay home.`, animationType: 'bounce', label: 'Weather在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u2l5q1',
            type: 'choice',
            question: '出门前想问今天天气如何，应该怎么说？',
            options: ["What's the weather like?", "What's your name?", "How old are you?", "What time is it?"],
            answer: "What's the weather like?",
            hint: '问天气用什么句型？',
            explanation: "What's the weather like?是问天气的常用句型"
          },
          {
            id: 'e2u2l5q2',
            type: 'fill',
            question: 'It\'s raining. I need a ____.（雨衣）',
            answer: 'raincoat',
            hint: '下雨天穿什么？',
            explanation: 'raincoat是雨衣，下雨天需要穿雨衣出门'
          },
          {
            id: 'e2u2l5q3',
            type: 'choice',
            question: '夏天很热，小明想穿短裤，应该怎么说？',
            options: ['I wear shorts', 'I wear a coat', 'I wear a scarf', 'I wear a raincoat'],
            answer: 'I wear shorts',
            hint: '短裤用英语怎么说？',
            explanation: 'I wear shorts表示我穿短裤，Shorts是短裤'
          },
          {
            id: 'e2u2l5q4',
            type: 'drag',
            question: '把表达拖到正确场景：冬天出门要穿____ coat',
            answer: 'a',
            hint: '穿一件外套',
            explanation: 'I wear a coat穿一件外套，冬天出门要穿外套'
          },
          {
            id: 'e2u2l5q5',
            type: 'choice',
            question: '【期末真题】今天多云，你想告诉朋友，应该怎么说？',
            options: ["It's cloudy", "It's sunny", "It's hot", "It's cold"],
            answer: "It's cloudy",
            hint: '多云用哪个词？',
            explanation: "It's cloudy表示多云，cloudy是多云的"
          },
          {
            id: 'e2u2l5q6',
            type: 'fill',
            question: 'In ____, leaves turn yellow and fall.（秋天）',
            answer: 'Autumn',
            acceptableAnswers: ['Fall'],
            hint: '落叶的季节',
            explanation: 'In Autumn在秋天，树叶变黄并落下'
          },
          {
            id: 'e2u2l5q7',
            type: 'choice',
            question: '结合"My Day"和"Weather"，哪个句子把两个主题联系起来？',
            options: ['I wake up and look at the weather', "I wake up and It's sunny", 'I eat dinner and It\'s cold', 'I go to school and It\'s rainy'],
            answer: 'I wake up and look at the weather',
            hint: '[My Day]（英语二年级-第1单元）',
            explanation: '起床后看天气，把日常和天气两个主题联系起来'
          },
        ]
      }]
  },
  {
    id: 'e2u3',
    title: 'Places',
    subtitle: '我们去哪里，认识各种场所',
    order: 3,
    lessons: [
      {
        id: 'e2u3l1',
        title: '房间',
        order: 1,
        teachingMethod: '实物展示教学法',
        learningObjective: '我能说出Bedroom/Kitchen/Bathroom等房间名称及功能',
        successCriteria: '①能说出4个房间的英语 ②能说出每个房间的功能',
        iDo: '家长指着家里的房间说"This is the bedroom. This is the kitchen. This is the bathroom"',
        weDo: '亲子一起在家里走动，走到每个房间说出英语名称',
        youDo: '孩子独立说出家里每个房间的英语名称，描述房间里的物品',
        parentTips: '【家长预习】本课核心：房间Bedroom（卧室）、Kitchen（厨房）、Bathroom（浴室）、Living room（客厅）。\n共学四步：\n①对话出题：家长指卧室问What room is this?并说Bedroom?。\n②孩子应答：孩子应说Bedroom!。\n③答错引导：若孩子说不出，家长当同学一起逛家！扫描课时发音动画听发音；让孩子点读课件房间卡；家长带孩子在家边走边指房间说英语。\n④快速检测：1.孩子说出4个房间；2.说出厨房功能；3.家长指房间孩子说英语。',
        funElement: '玩"房间寻宝"游戏，在指定房间找到物品得分',
        gsapAnimations: ['GSAP:房门打开-doorOpen', 'GSAP:房间全景展开-panorama'],
        images: ['IMG:家庭房间布局图', 'IMG:各房间卡片'],
        content: [
          { type: 'text', content: '家里有不同的房间：Bedroom卧室睡觉、Kitchen厨房做饭、Bathroom浴室洗澡、Living room客厅看电视', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: This is my bedroom.\n小红: It\'s nice! Where is the kitchen?\n小明: The kitchen is next to the living room.\n小红: And the bathroom?', label: '房间介绍对话', animationType: 'reveal' },
          { type: 'example', content: 'Bedroom — 卧室（bed床+room房间）\nKitchen — 厨房\nBathroom — 浴室（bath洗澡+room房间）\nLiving room — 客厅', label: '房间词汇', animationType: 'bounce' },
          { type: 'tip', content: '很多房间名称都含有room！bed+room=卧室，bath+room=浴室，room就是"房间"的意思', label: '构词提示', animationType: 'pulse' },
          { type: 'animation', content: '房门依次打开，展示每个房间内部的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Rooms', sceneBuildConfig: { sceneName: 'My Home', elements: [ { id: 'el-0', text: 'Bedroom', emoji: '🛏', delay: 0, animation: 'bounceIn', ttsText: 'Bedroom' }, { id: 'el-1', text: 'Kitchen', emoji: '🍳', delay: 0.4, animation: 'popIn', ttsText: 'Kitchen' }, { id: 'el-2', text: 'Living room', emoji: '🛋', delay: 0.8, animation: 'slideIn', ttsText: 'Living room' }, { id: 'el-3', text: 'Bathroom', emoji: '🚿', delay: 1.2, animation: 'scaleIn', ttsText: 'Bathroom' } ] }, ttsNarration: '房间：卧室、厨房、客厅、浴室' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u3l1q1',
            type: 'choice',
            question: '"卧室"用英语怎么说？',
            options: ['Bedroom', 'Bathroom', 'Kitchen', 'Living room'],
            answer: 'Bedroom',
            hint: '睡觉的房间',
            explanation: 'Bedroom是卧室，bed床+room房间'
          },
          {
            id: 'e2u3l1q2',
            type: 'fill',
            question: 'We cook in the ____.（厨房）',
            answer: 'Kitchen',
            hint: '做饭的地方',
            explanation: 'Kitchen是厨房，做饭的地方'
          },
          {
            id: 'e2u3l1q3',
            type: 'flashcard',
            question: '看客厅的图片，说出英语名称',
            answer: 'Living room',
            hint: '一家人坐在一起看电视的房间',
            explanation: 'Living room是客厅，家人活动的房间'
          },
          {
            id: 'e2u3l1q4',
            type: 'choice',
            question: '妈妈在做饭，她在哪个房间？',
            options: ['Kitchen', 'Bedroom', 'Bathroom', 'Living room'],
            answer: 'Kitchen',
            hint: '做饭在哪个房间？',
            explanation: 'Kitchen是厨房，做饭的地方'
          },
          {
            id: 'e2u3l1q5',
            type: 'fill',
            question: 'I take a bath in the ____.（浴室）',
            answer: 'Bathroom',
            hint: '洗澡在哪个房间？',
            explanation: 'Bathroom是浴室，洗澡的地方，bath+room=浴室'
          },
          {
            id: 'e2u3l1q6',
            type: 'choice',
            question: '【期末真题】Bedroom是由哪两个词组成的？',
            options: ['bed + room', 'bath + room', 'cook + room', 'live + room'],
            answer: 'bed + room',
            hint: 'Bedroom的字面意思是什么？',
            explanation: 'Bedroom = bed床 + room房间，卧室就是有床的房间'
          },
          {
            id: 'e2u3l1q7',
            type: 'drag',
            question: '把词拖到正确位置：I watch TV in the ____ room.（客厅）',
            answer: 'Living',
            hint: '[Weather]（英语二年级-第2单元）',
            explanation: 'Living room是客厅，家人一起看电视的地方'
          }
        ]
      },
      {
        id: 'e2u3l2',
        title: '公园',
        order: 2,
        teachingMethod: '情景教学法',
        learningObjective: '我能用I can see...描述在公园看到的事物',
        successCriteria: '①能说出公园里3样事物的英语 ②能用I can see...造句',
        iDo: '家长描述公园场景"I see trees, flowers, a lake in the park"，配合图片',
        weDo: '亲子一起讨论公园里能看到的和能做的事，用英语表达',
        youDo: '孩子独立用英语描述公园场景和自己在公园的活动',
        parentTips: '【家长预习】本课核心：公园Park，句型I can see trees and flowers.（我能看到树和花）。\n共学四步：\n①对话出题：家长问在公园能看到什么？并说I can see trees.。\n②孩子应答：孩子应说I can see flowers.。\n③答错引导：若孩子说不出，家长当同学一起逛公园！扫描课时发音动画听发音；让孩子点读课件情景卡；家长结合逛公园经历边回忆边说英语。\n④快速检测：1.孩子说出公园里3样事物；2.用I can see...造句；3.说出喜欢公园的什么。',
        funElement: '画一幅公园地图，用英语标注各个区域',
        gsapAnimations: ['GSAP:树木摇曳-treeSway', 'GSAP:蝴蝶飞舞-butterflyFly'],
        images: ['IMG:公园场景插图', 'IMG:公园活动卡片'],
        content: [
          { type: 'text', content: '公园是玩耍的好地方！I can see trees and flowers in the park. 在公园里我可以看到树和花', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Let\'s go to the park!\n小红: Great! I can play on the swing!\n小明: Look! I can see a lake!\n小红: And beautiful flowers!', label: '公园对话', animationType: 'reveal' },
          { type: 'example', content: 'Park — 公园\nTree — 树\nFlower — 花\nLake — 湖\nSwing — 秋千\nSlide — 滑梯', label: '公园词汇', animationType: 'bounce' },
          { type: 'tip', content: 'I can see... 我能看到……用这个句型来描述你看到的东西吧！', label: '句型提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u3l2q1',
            type: 'choice',
            question: '公园里可以做什么？',
            options: ['Play on the swing', 'Cook dinner', 'Take a bath', 'Go to bed'],
            answer: 'Play on the swing',
            hint: '公园里好玩的设施',
            explanation: 'Play on the swing表示荡秋千，是公园常见的活动'
          },
          {
            id: 'e2u3l2q2',
            type: 'fill',
            question: 'I can see ____ in the park.（花）',
            answer: 'flowers',
            hint: '五颜六色的植物',
            explanation: 'flowers是花，公园里常见的美丽植物'
          },
          {
            id: 'e2u3l2q3',
            type: 'drag',
            question: '把场所拖到正确位置：有湖和树的地方是____',
            answer: 'Park',
            hint: '散步和玩耍的地方',
            explanation: 'Park是公园，有树木、花草和游乐设施'
          },
          {
            id: 'e2u3l2q4',
            type: 'choice',
            question: '在公园里可以看到什么？',
            options: ['Trees and flowers', 'Beds and sofas', 'Pots and pans', 'Showers and baths'],
            answer: 'Trees and flowers',
            hint: '公园里有什么植物？',
            explanation: 'Trees and flowers树和花，是公园里常见的植物'
          },
          {
            id: 'e2u3l2q5',
            type: 'fill',
            question: 'I can play on the ____ in the park.（秋千）',
            answer: 'swing',
            hint: '公园里可以荡什么？',
            explanation: 'swing是秋千，play on the swing表示荡秋千'
          },
          {
            id: 'e2u3l2q6',
            type: 'choice',
            question: '【期末真题】Where can you play on a swing?',
            options: ['In the park', 'In the bedroom', 'In the bathroom', 'In the kitchen'],
            answer: 'In the park',
            hint: '公园和房间的位置有什么区别？',
            explanation: 'Park公园在室外，有秋千可以玩耍；Bedroom等房间在室内'
          },
          {
            id: 'e2u3l2q7',
            type: 'drag',
            question: '把词拖到正确位置：I can ____ a lake in the park.（看到）',
            answer: 'see',
            hint: '[Places-房间]（英语二年级-第3单元）',
            explanation: 'I can see a lake我能看到湖，回顾I can see句型'
          }
        ]
      },
      {
        id: 'e2u3l3',
        title: '超市',
        order: 3,
        teachingMethod: '角色扮演法',
        learningObjective: '我能用I buy...描述在超市买东西',
        successCriteria: '①能说出超市里3样商品的英语 ②能用I buy...造句',
        iDo: '家长模拟超市购物"I go to the supermarket. I buy apples and milk"，拿实物演示',
        weDo: '亲子一起玩"超市购物"游戏，用英语说出要买的东西',
        youDo: '孩子独立用英语列出购物清单，模拟超市购物对话',
        parentTips: '【家长预习】本课核心：超市Supermarket，句型I buy apples and milk.（我买苹果和牛奶）。\n共学四步：\n①对话出题：家长问去超市买什么？并说I buy apples.。\n②孩子应答：孩子应说I buy milk.。\n③答错引导：若孩子说不出，家长当同学一起逛超市！扫描课时发音动画听发音；让孩子点读课件情景卡；家长带孩子真逛超市边指商品边说英语。\n④快速检测：1.孩子说出3样商品；2.用I buy...造句；3.说出想买的东西。',
        funElement: '玩"收银员"游戏，用英语说出价格和商品名称',
        gsapAnimations: ['GSAP:购物车滑动-cartSlide', 'GSAP:商品扫描-scanBeep'],
        images: ['IMG:超市场景插图', 'IMG:购物清单卡片'],
        content: [
          { type: 'text', content: '超市Supermarket是买东西的地方。I go to the supermarket. I buy apples and milk. 我去超市买苹果和牛奶', animationType: 'reveal' },
          { type: 'dialogue', content: '店员: Can I help you?\n小明: I want to buy some apples, please.\n店员: Here you are. Anything else?\n小明: And some milk, please!', label: '超市购物对话', animationType: 'reveal' },
          { type: 'example', content: 'Supermarket — 超市\nbuy — 买\nshopping list — 购物清单\nHow much? — 多少钱？\nHere you are — 给你', label: '购物词汇', animationType: 'bounce' },
          { type: 'tip', content: 'super是"超级"的意思，super + market市场 = supermarket超市，超级大的市场！', label: '构词提示', animationType: 'pulse' },
          { type: 'animation', content: '购物车滑动，商品扫描的超市购物动画', animationType: 'bounce', animationConfig: { sceneType: 'timeline', title: 'Shopping', timelineConfig: { steps: [ { text: '1. Push the cart', emoji: '🛒', ttsText: 'Push the cart', duration: 1.2 }, { text: '2. Scan items', emoji: '📦', ttsText: 'Scan items', duration: 1.2 }, { text: '3. Pay', emoji: '💳', ttsText: 'Pay', duration: 1.2 }, { text: '4. Bag it up', emoji: '🛍', ttsText: 'Bag it up', duration: 1.2 } ] }, ttsNarration: '超市购物：推车、扫描、付款、装袋' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u3l3q1',
            type: 'choice',
            question: '"超市"用英语怎么说？',
            options: ['Supermarket', 'Park', 'School', 'Hospital'],
            answer: 'Supermarket',
            hint: '买食物和日用品的地方',
            explanation: 'Supermarket是超市，super超级+market市场'
          },
          {
            id: 'e2u3l3q2',
            type: 'fill',
            question: 'I ____ apples at the supermarket.（买）',
            answer: 'buy',
            hint: '购物时做什么？',
            explanation: 'buy表示买，I buy apples表示我买苹果'
          },
          {
            id: 'e2u3l3q3',
            type: 'drag',
            question: '把场所拖到正确位置：买面包和牛奶去____',
            answer: 'Supermarket',
            hint: '大型购物场所',
            explanation: 'Supermarket是超市，可以买到各种食物和日用品'
          },
          {
            id: 'e2u3l3q4',
            type: 'choice',
            question: '在超市想问价格，应该怎么说？',
            options: ['How much is it?', "What's the weather like?", 'How old are you?', 'What time is it?'],
            answer: 'How much is it?',
            hint: '问价格用什么句子？',
            explanation: 'How much is it?表示多少钱，用来询问价格'
          },
          {
            id: 'e2u3l3q5',
            type: 'fill',
            question: 'I want to ____ some milk at the supermarket.（买）',
            answer: 'buy',
            hint: '购物时做什么？',
            explanation: 'I want to buy some milk表示我想买牛奶，buy是买'
          },
          {
            id: 'e2u3l3q6',
            type: 'choice',
            question: '【期末真题】Supermarket由哪两个词组成？',
            options: ['super + market', 'super + room', 'super + park', 'super + shop'],
            answer: 'super + market',
            hint: 'Supermarket的字面意思是什么？',
            explanation: 'Supermarket = super超级 + market市场，超级大的市场就是超市'
          },
          {
            id: 'e2u3l3q7',
            type: 'drag',
            question: '把词拖到正确位置：Can I help ____?（你）',
            answer: 'you',
            hint: '[Places-房间]（英语二年级-第3单元）',
            explanation: 'Can I help you?是我能帮你吗，店员的常用问候语'
          }
        ]
      }
    ,
      {
        id: 'e2u3l4',
        title: 'Places Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用Places单元的场所词汇和句型',
        successCriteria: '①能说出6个场所或房间英语 ②能用I can see/I buy造句',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾Places单元：房间Bedroom/Kitchen/Bathroom/Living room、公园Park、超市Supermarket。\n共学四步：\n①对话出题：家长问家里有哪些房间？用英语说。。\n②孩子应答：孩子应说Bedroom, kitchen!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说场所。\n④快速检测：1.孩子说出6个场所；2.用I can see...造句；3.说去超市买什么。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Places单元！我们学了房间Bedroom/Kitchen/Bathroom/Living room、公园Park、超市Supermarket`, animationType: 'reveal' },
          { type: 'formula', content: `场所表达公式：
room结尾的房间：bed+room, bath+room
I go to + 场所 → I go to the supermarket.
I buy + 物品 → I buy apples.`, animationType: 'typewriter', label: 'Places公式' },
          { type: 'animation', content: `Places单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Places Review', cardRevealConfig: { cards: [ { front: 'Home', back: '🏠', ttsText: 'Home' }, { front: 'School', back: '🏫', ttsText: 'School' }, { front: 'Shop', back: '🏪', ttsText: 'Shop' }, { front: 'Park', back: '🏞️', ttsText: 'Park' } ] }, ttsNarration: 'Places单元回顾：家、学校、商店、公园' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u3l4q1',
            type: 'choice',
            question: '睡觉在哪个房间？',
            options: ['Bedroom', 'Kitchen', 'Bathroom', 'Park'],
            answer: 'Bedroom',
            hint: '有床的房间',
            explanation: 'Bedroom是卧室，有床可以睡觉'
          },
          {
            id: 'e2u3l4q2',
            type: 'fill',
            question: 'I buy apples at the ____.（超市）',
            answer: 'Supermarket',
            hint: '买东西去哪里？',
            explanation: 'Supermarket是超市，可以买到各种食物'
          },
          {
            id: 'e2u3l4q3',
            type: 'choice',
            question: '荡秋千去哪里？',
            options: ['Park', 'Kitchen', 'Bedroom', 'Supermarket'],
            answer: 'Park',
            hint: '哪里有秋千？',
            explanation: 'Park公园里有秋千，可以play on the swing'
          },
          {
            id: 'e2u3l4q4',
            type: 'drag',
            question: '把词拖到正确位置：Bathroom = ____ + room',
            answer: 'bath',
            hint: 'Bathroom由哪两个词组成？',
            explanation: 'Bathroom = bath洗澡 + room房间，浴室就是洗澡的房间'
          },
          {
            id: 'e2u3l4q5',
            type: 'choice',
            question: '【期末真题】哪个句子正确描述了场所和活动的关系？',
            options: ['I cook in the kitchen.', 'I sleep in the kitchen.', 'I cook in the bedroom.', 'I sleep in the bathroom.'],
            answer: 'I cook in the kitchen.',
            hint: '场所和活动要匹配',
            explanation: 'I cook in the kitchen我在厨房做饭，场所和活动要对应'
          },
          {
            id: 'e2u3l4q6',
            type: 'fill',
            question: 'Can I ____ you? I want a skirt.（帮助）',
            answer: 'help',
            hint: '店员怎么问候顾客？',
            explanation: 'Can I help you?是我能帮你吗，购物时的常用对话'
          },
          {
            id: 'e2u3l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Weather"学的内容？',
            options: ["It's sunny", 'Bedroom', 'Kitchen', 'Goodbye'],
            answer: "It's sunny",
            hint: '[Weather]（英语二年级-第2单元）',
            explanation: "It's sunny晴天是上一单元Weather的核心内容"
          },
        ]
      },
      {
        id: 'e2u3l5',
        title: 'Places in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在生活中用英语描述家里的房间和社区场所',
        successCriteria: '①能说出家里的房间 ②能描述去公园或超市做什么',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把场所生活化：家里每个房间、社区公园和超市都可以用英语描述。\n共学四步：\n①对话出题：家长问你在哪个房间睡觉？。\n②孩子应答：孩子应说I sleep in the bedroom.。\n③答错引导：若孩子说不出，家长当同学一起指认！扫描课时发音动画复习；让孩子点读课件情景卡；家长在家边走边说房间英语。\n④快速检测：1.孩子说出家里房间；2.说去公园做什么；3.说去超市买什么。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `场所是我们生活的空间！家里的每个房间、社区的公园和超市，都可以用英语描述`, animationType: 'reveal' },
          { type: 'example', content: `场景1：介绍房间 → This is my bedroom.
场景2：去公园 → I play on the swing in the park.
场景3：逛超市 → I buy milk at the supermarket.`, animationType: 'bounce', label: 'Places在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u3l5q1',
            type: 'choice',
            question: '家里来了客人，你想介绍客厅，应该怎么说？',
            options: ['This is the living room', 'This is the bathroom', 'This is the kitchen', 'This is the bedroom'],
            answer: 'This is the living room',
            hint: '客人坐的地方是哪个房间？',
            explanation: 'This is the living room这是客厅，客人通常在客厅活动'
          },
          {
            id: 'e2u3l5q2',
            type: 'fill',
            question: 'Let\'s go to the ____! I want to play on the swing.（公园）',
            answer: 'Park',
            hint: '有秋千的地方',
            explanation: 'Park是公园，有秋千可以玩耍'
          },
          {
            id: 'e2u3l5q3',
            type: 'choice',
            question: '在超市买东西，店员问你Can I help you?你应该怎么回答？',
            options: ['I want some apples, please.', 'I am fine.', 'How much is it?', 'Goodbye.'],
            answer: 'I want some apples, please.',
            hint: '告诉店员你想买什么',
            explanation: 'I want some apples, please.表示我想要一些苹果，礼貌地回答店员'
          },
          {
            id: 'e2u3l5q4',
            type: 'drag',
            question: '把词拖到正确场景：I take a bath in the ____',
            answer: 'Bathroom',
            hint: '洗澡在哪个房间？',
            explanation: 'I take a bath in the Bathroom我在浴室洗澡'
          },
          {
            id: 'e2u3l5q5',
            type: 'choice',
            question: '【期末真题】Mom says "Go to your bedroom and sleep." Where should you go?',
            options: ['Bedroom', 'Kitchen', 'Bathroom', 'Living room'],
            answer: 'Bedroom',
            hint: 'Bedroom是什么房间？',
            explanation: 'Bedroom是卧室，Go to your bedroom去你的卧室睡觉'
          },
          {
            id: 'e2u3l5q6',
            type: 'fill',
            question: 'We eat dinner in the ____ room.（客厅/餐厅）',
            answer: 'living',
            acceptableAnswers: ['dining'],
            hint: '家人一起吃饭的地方',
            explanation: 'living room是客厅，家人一起吃饭和活动的地方'
          },
          {
            id: 'e2u3l5q7',
            type: 'choice',
            question: '结合"Weather"和"Places"，哪个句子把两个主题联系起来？',
            options: ["It's rainy. Let's stay in the living room.", "It's sunny and Bedroom", 'Bedroom and Kitchen', 'None'],
            answer: "It's rainy. Let's stay in the living room.",
            hint: '[Weather]（英语二年级-第2单元）',
            explanation: "下雨天待在客厅，把天气和场所两个主题联系起来"
          },
        ]
      }]
  },
  {
    id: 'e2u4',
    title: 'Actions',
    subtitle: '动起来，用英语说动作',
    order: 4,
    lessons: [
      {
        id: 'e2u4l1',
        title: '动词学习',
        order: 1,
        teachingMethod: 'TPR全身反应法',
        learningObjective: '我能说出Run/Jump/Swim/Dance等动作动词',
        successCriteria: '①能说出至少4个动作动词 ②听到动词能做出对应动作',
        iDo: '家长边做动作边说"Run! Jump! Swim! Dance!"，动作夸张有力',
        weDo: '亲子一起做动作说动词，一人说一人做，然后互换',
        youDo: '孩子独立听到动词就做动作，或看到动作说出动词',
        parentTips: '【家长预习】本课核心：动作动词Run（跑）、Jump（跳）、Swim（游泳）、Dance（跳舞）。\n共学四步：\n①对话出题：家长做跑步动作问What am I doing?并说Run?。\n②孩子应答：孩子应说Run!。\n③答错引导：若孩子说不出，家长当同学一起做动作！扫描课时发音动画听发音；让孩子点读课件动词卡；家长边做动作边说英语，用TPR全身反应法。\n④快速检测：1.家长做动作孩子说英语；2.家长说动词孩子做动作；3.孩子说出4个动词。',
        funElement: '玩"动词接力"，做上一个动作的同时说下一个动词',
        gsapAnimations: ['GSAP:人物跑步动画-run', 'GSAP:人物跳跃动画-jump'],
        images: ['IMG:各种动作插图', 'IMG:动词卡片'],
        content: [
          { type: 'text', content: 'Run跑步、Jump跳跃、Swim游泳、Dance跳舞，这些是常见的动作动词。边做动作边说英语，记得更牢！', animationType: 'reveal' },
          { type: 'dialogue', content: '老师: Run!\n同学们: (跑步) Run, run, run!\n老师: Jump!\n同学们: (跳跃) Jump, jump, jump!\n老师: Dance!\n同学们: (跳舞) Dance, dance!', label: '动作指令对话', animationType: 'reveal' },
          { type: 'example', content: 'Run — 跑步\nWalk — 走路\nJump — 跳跃\nSwim — 游泳\nDance — 跳舞\nSing — 唱歌', label: '动作动词', animationType: 'bounce' },
          { type: 'tip', content: 'Run是跑步，Walk是走路。Run比Walk快，记住这个区别！', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '小人做跑步、跳跃、游泳、跳舞的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Actions', sceneBuildConfig: { sceneName: 'Actions', elements: [ { id: 'el-0', text: 'Run', emoji: '🏃', delay: 0, animation: 'bounceIn', ttsText: 'Run' }, { id: 'el-1', text: 'Jump', emoji: '🤸', delay: 0.4, animation: 'popIn', ttsText: 'Jump' }, { id: 'el-2', text: 'Swim', emoji: '🏊', delay: 0.8, animation: 'slideIn', ttsText: 'Swim' }, { id: 'el-3', text: 'Dance', emoji: '💃', delay: 1.2, animation: 'scaleIn', ttsText: 'Dance' } ] }, ttsNarration: '动作：跑、跳、游泳、跳舞' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u4l1q1',
            type: 'choice',
            question: '"跑步"用英语怎么说？',
            options: ['Run', 'Walk', 'Sit', 'Stand'],
            answer: 'Run',
            hint: '比走路快的动作',
            explanation: 'Run是跑步，比walk走路快'
          },
          {
            id: 'e2u4l1q2',
            type: 'fill',
            question: 'I can ____ in the water.（游泳）',
            answer: 'swim',
            hint: '在水里做的运动',
            explanation: 'swim是游泳，在水中做的运动'
          },
          {
            id: 'e2u4l1q3',
            type: 'flashcard',
            question: '看跳舞的图片，说出英语动词',
            answer: 'Dance',
            hint: '跟着音乐摆动身体',
            explanation: 'Dance是跳舞，跟着音乐节奏活动身体'
          },
          {
            id: 'e2u4l1q4',
            type: 'choice',
            question: 'Which is faster, Run or Walk?',
            options: ['Run', 'Walk', 'They are the same', 'Walk is faster'],
            answer: 'Run',
            hint: '跑步和走路哪个更快？',
            explanation: 'Run跑步比Walk走路快，这是两个动作的重要区别'
          },
          {
            id: 'e2u4l1q5',
            type: 'fill',
            question: 'I like ____ to music.（唱歌）',
            answer: 'singing',
            acceptableAnswers: [],
            hint: 'sing的ing形式',
            explanation: 'I like singing to music表示我喜欢跟着音乐唱歌'
          },
          {
            id: 'e2u4l1q6',
            type: 'choice',
            question: '【期末真题】哪个动作是在水里做的？',
            options: ['Swim', 'Run', 'Jump', 'Walk'],
            answer: 'Swim',
            hint: '哪个动作需要水？',
            explanation: 'Swim游泳是在水里做的运动，其他都在陆地上'
          },
          {
            id: 'e2u4l1q7',
            type: 'drag',
            question: '把词拖到正确位置：I can ____ books at school.（读）',
            answer: 'read',
            hint: '[Places-学校]（英语二年级-第3单元）',
            explanation: 'I can read books我会读书，回顾学校生活中学过的表达'
          }
        ]
      },
      {
        id: 'e2u4l2',
        title: 'can/can\'t',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do',
        learningObjective: '我能用I can.../I can\'t...表达会做什么和不会做什么',
        successCriteria: '①能用I can...说自己会做的事 ②能用I can\'t...说自己不会的',
        iDo: '家长示范"I can run! I can\'t fly!"，做出能做和不能做的对比动作',
        weDo: '亲子一起说"I can..."和"I can\'t..."，互相分享能力和愿望',
        youDo: '孩子独立用"I can/can\'t"说出自己能做和不能做的事',
        parentTips: '【家长预习】本课核心：can表示能/会，can\'t表示不能/不会，如I can swim. I can\'t fly.。\n共学四步：\n①对话出题：家长问你会游泳吗？并说Can you swim?。\n②孩子应答：孩子应说I can swim.或I can\'t swim.。\n③答错引导：若孩子说不出，家长当同学一起聊能力！扫描课时发音动画听发音；让孩子点读课件句子卡；家长先说自己会什么示范，再问孩子。\n④快速检测：1.孩子用I can...说一项能力；2.用I can\'t...说一项；3.家长问Can you...?孩子回答。',
        funElement: '玩"超能力游戏"，说出"I can fly!"等有趣的句子',
        gsapAnimations: ['GSAP:能力星星闪烁-starPower', 'GSAP:禁止符号出现-noCan'],
        images: ['IMG:can/can\'t对比图', 'IMG:能力表达卡片'],
        content: [
          { type: 'text', content: 'I can swim! 我会游泳！I can\'t fly! 我不会飞！can表示"能/会"，can\'t表示"不能/不会"', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I can run! I can jump!\n小红: I can swim! But I can\'t fly!\n小明: Can you dance?\n小红: Yes, I can! I can dance!', label: '能力表达对话', animationType: 'reveal' },
          { type: 'example', content: 'I can run — 我会跑步\nI can swim — 我会游泳\nI can\'t fly — 我不会飞\nI can\'t drive — 我不会开车\nCan you...? — 你会……吗？', label: 'can/can\'t句型', animationType: 'bounce' },
          { type: 'tip', content: "can't是cannot的缩写，读作/cɑːnt/。can后面直接加动词原形，不需要加to！", label: '语法提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u4l2q1',
            type: 'choice',
            question: '"我会游泳"用英语怎么说？',
            options: ['I can swim', 'I can\'t swim', 'I like swim', 'I want swim'],
            answer: 'I can swim',
            hint: '表示能力用什么词？',
            explanation: 'I can swim表示我会游泳，can表示能力'
          },
          {
            id: 'e2u4l2q2',
            type: 'fill',
            question: 'I ____ fly like a bird.（不能）',
            answer: "can't",
            acceptableAnswers: ['cannot', 'can not'],
            hint: '人会飞吗？',
            explanation: "I can't fly表示我不会飞，can't表示不能"
          },
          {
            id: 'e2u4l2q3',
            type: 'drag',
            question: '把词拖到正确位置：Birds ____ fly.',
            answer: 'can',
            hint: '鸟会飞吗？',
            explanation: 'Birds can fly表示鸟会飞，can表示能够'
          },
          {
            id: 'e2u4l2q4',
            type: 'choice',
            question: 'Fish can swim. 鱼会游泳。那么鸟会什么？',
            options: ['Birds can fly.', 'Birds can swim.', 'Birds can run.', 'Birds can drive.'],
            answer: 'Birds can fly.',
            hint: '鸟最特别的能力是什么？',
            explanation: 'Birds can fly.鸟会飞，can表示能力'
          },
          {
            id: 'e2u4l2q5',
            type: 'fill',
            question: 'I ____ play the piano. I am still learning.（还不会）',
            answer: "can't",
            acceptableAnswers: ['cannot', 'can not'],
            hint: '还在学说明现在还不能？',
            explanation: "I can't play the piano我还不会弹钢琴，can't表示不能/不会"
          },
          {
            id: 'e2u4l2q6',
            type: 'choice',
            question: '【期末真题】哪个句子正确使用了can？',
            options: ['I can swim.', 'I can swimming.', 'I can swims.', 'I can to swim.'],
            answer: 'I can swim.',
            hint: 'can后面接什么形式的动词？',
            explanation: 'can后面接动词原形，I can swim是正确的'
          },
          {
            id: 'e2u4l2q7',
            type: 'drag',
            question: '把词拖到正确位置：I ____ up at 7 o\'clock every morning.（起床）',
            answer: 'wake',
            hint: '[My Day]（英语二年级-第1单元）',
            explanation: 'I wake up at 7 o\'clock我7点起床，回顾My Day学过的表达'
          }
        ]
      },
      {
        id: 'e2u4l3',
        title: '现在进行时',
        order: 3,
        teachingMethod: '情景教学法',
        learningObjective: '我能用现在进行时am/is/are+doing描述正在做的事',
        successCriteria: '①能说出现在进行时的结构 ②能用I am...ing描述正在做的事',
        iDo: '家长边做动作边说"I am running. I am jumping"，强调正在进行的动作',
        weDo: '亲子一起做动作，一人做一人描述"I am..."，然后互换',
        youDo: '孩子独立用现在进行时描述自己正在做的动作',
        parentTips: '【家长预习】本课核心：现在进行时表示正在做，结构am/is/are+动词ing，如I am running.。\n共学四步：\n①对话出题：家长做跑步动作问What are you doing?并说I am running.。\n②孩子应答：孩子应说I am running.。\n③答错引导：若孩子说不出，家长当同学一起做动作！扫描课时发音动画听发音；让孩子点读课件句子卡；家长边做动作边说I am...ing，用TPR法。\n④快速检测：1.孩子说出进行时结构；2.用I am...ing造句；3.家长做动作孩子描述。',
        funElement: '玩"定格游戏"，音乐停时说出"I am doing..."',
        gsapAnimations: ['GSAP:动作进行中指示器-progressBar', 'GSAP:ing后缀弹入-ingBounce'],
        images: ['IMG:现在进行时场景', 'IMG:ing动词卡片'],
        content: [
          { type: 'text', content: '现在进行时表示正在做的事情：I am running我正在跑步、She is dancing她正在跳舞。结构是am/is/are + 动词ing', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What are you doing?\n小红: I am reading a book.\n小明: What is he doing?\n小红: He is running!', label: '现在进行时对话', animationType: 'reveal' },
          { type: 'example', content: 'I am running — 我正在跑步\nShe is dancing — 她正在跳舞\nHe is reading — 他正在读书\nThey are playing — 他们正在玩耍', label: '现在进行时句型', animationType: 'typewriter' },
          { type: 'tip', content: '动词加ing的规则：一般直接加ing，如run→running；以e结尾去e加ing，如dance→dancing', label: '语法规则', animationType: 'pulse' },
          { type: 'animation', content: '动作进行中指示器，ing后缀弹入的动画', animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'ing Actions', cardRevealConfig: { cards: [ { front: 'Running', back: '🏃', ttsText: 'Running' }, { front: 'Jumping', back: '🤸', ttsText: 'Jumping' }, { front: 'Swimming', back: '🏊', ttsText: 'Swimming' }, { front: 'Dancing', back: '💃', ttsText: 'Dancing' } ] }, ttsNarration: '进行时：Running、Jumping、Swimming、Dancing' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u4l3q1',
            type: 'choice',
            question: '"我正在跑步"用英语怎么说？',
            options: ['I am running', 'I run', 'I can run', 'I like running'],
            answer: 'I am running',
            hint: '正在进行的动作用什么时态？',
            explanation: 'I am running表示我正在跑步，am + running是现在进行时'
          },
          {
            id: 'e2u4l3q2',
            type: 'fill',
            question: 'She is _____.（正在跳舞）',
            answer: 'dancing',
            hint: 'dance的ing形式是什么？',
            explanation: 'She is dancing表示她正在跳舞，dance去e加ing'
          },
          {
            id: 'e2u4l3q3',
            type: 'drag',
            question: '把动词拖到正确位置：He is ____ a book.（正在读）',
            answer: 'reading',
            hint: 'read的ing形式',
            explanation: 'He is reading a book表示他正在读书'
          },
          {
            id: 'e2u4l3q4',
            type: 'choice',
            question: 'dance变成现在进行时要怎么写？',
            options: ['dancing', 'danceing', 'dancding', 'danceed'],
            answer: 'dancing',
            hint: '以e结尾的动词怎么加ing？',
            explanation: 'dance以e结尾，去e加ing变成dancing'
          },
          {
            id: 'e2u4l3q5',
            type: 'fill',
            question: 'They are ____ in the park.（正在玩耍）',
            answer: 'playing',
            hint: 'play的ing形式',
            explanation: 'They are playing他们正在玩耍，play直接加ing'
          },
          {
            id: 'e2u4l3q6',
            type: 'choice',
            question: '【期末真题】哪个句子是现在进行时？',
            options: ['I am running.', 'I can run.', 'I like running.', 'I run every day.'],
            answer: 'I am running.',
            hint: '哪个句子表示正在做？',
            explanation: 'I am running我正在跑步，am + running是现在进行时'
          },
          {
            id: 'e2u4l3q7',
            type: 'drag',
            question: '把词拖到正确位置：It\'s rainy. I wear a ____.（雨衣）',
            answer: 'raincoat',
            hint: '[Weather-穿衣搭配]（英语二年级-第2单元）',
            explanation: "下雨天穿雨衣，回顾Weather单元穿衣搭配学过的表达"
          }
        ]
      }
    ,
      {
        id: 'e2u4l4',
        title: 'Actions Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用Actions单元的动词和现在进行时',
        successCriteria: '①能说出6个动作动词 ②能用现在进行时描述动作',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾Actions单元：动词Run/Walk/Jump/Swim/Dance、can/can\'t、现在进行时am/is/are+doing。\n共学四步：\n①对话出题：家长做动作问用英语怎么说？并做跑的动作。\n②孩子应答：孩子应说Run!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长边做动作边复习动词。\n④快速检测：1.孩子说出6个动词；2.用I am...ing造句；3.用I can...造句。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Actions单元！我们学了动词Run/Walk/Jump/Swim/Dance、can/can't表达、现在进行时am/is/are+doing`, animationType: 'reveal' },
          { type: 'formula', content: `动作表达公式：
I can + 动词原形 → I can swim.
I can't + 动词原形 → I can't fly.
现在进行时：I am + 动词ing → I am running.`, animationType: 'typewriter', label: 'Actions公式' },
          { type: 'animation', content: `Actions单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Actions Review', cardRevealConfig: { cards: [ { front: 'Run', back: '🏃', ttsText: 'Run' }, { front: 'Jump', back: '🤸', ttsText: 'Jump' }, { front: 'Swim', back: '🏊', ttsText: 'Swim' }, { front: 'Dance', back: '💃', ttsText: 'Dance' } ] }, ttsNarration: 'Actions单元回顾：跑、跳、游泳、跳舞' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u4l4q1',
            type: 'choice',
            question: 'What does "I can swim" mean?',
            options: ['I am able to swim.', 'I am swimming now.', 'I like swimming.', 'I want to swim.'],
            answer: 'I am able to swim.',
            hint: 'can表示什么？',
            explanation: 'I can swim表示我会游泳，can表示能力'
          },
          {
            id: 'e2u4l4q2',
            type: 'fill',
            question: 'She is ____ a book now.（正在读）',
            answer: 'reading',
            hint: 'read的ing形式',
            explanation: 'She is reading a book她正在读书，现在进行时'
          },
          {
            id: 'e2u4l4q3',
            type: 'choice',
            question: '哪个句子表示"我不会飞"？',
            options: ["I can't fly.", 'I can fly.', 'I am flying.', 'I like flying.'],
            answer: "I can't fly.",
            hint: "can't表示什么？",
            explanation: "I can't fly表示我不会飞，can't表示不能/不会"
          },
          {
            id: 'e2u4l4q4',
            type: 'drag',
            question: '把动词拖到正确位置：run → ____（ing形式）',
            answer: 'running',
            hint: 'run怎么加ing？',
            explanation: 'run加ing要双写n变成running'
          },
          {
            id: 'e2u4l4q5',
            type: 'choice',
            question: '【期末真题】Which sentence means "I am running now"?',
            options: ['I am running.', 'I can run.', 'I like running.', 'I run every day.'],
            answer: 'I am running.',
            hint: 'can和am+ing有什么区别？',
            explanation: 'can表示能力，am + doing表示正在进行的动作'
          },
          {
            id: 'e2u4l4q6',
            type: 'fill',
            question: 'I ____ jump very high. I practice every day.（能）',
            answer: 'can',
            hint: '表示能力用什么词？',
            explanation: 'I can jump very high我能跳很高，can表示能力'
          },
          {
            id: 'e2u4l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Places"学的内容？',
            options: ['Bedroom', 'Run', 'Walk', 'Goodbye'],
            answer: 'Bedroom',
            hint: '[Places]（英语二年级-第3单元）',
            explanation: 'Bedroom卧室是上一单元Places的核心内容'
          },
        ]
      },
      {
        id: 'e2u4l5',
        title: 'Actions in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在生活中用英语描述运动和动作',
        successCriteria: '①能说出运动用到的动作 ②能用现在进行时描述正在做的事',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把动作生活化：运动、玩耍、做家务每个动作都可以用英语表达。\n共学四步：\n①对话出题：家长问你现在在做什么？。\n②孩子应答：孩子应说I am reading.等。\n③答错引导：若孩子说不出，家长当同学一起做！扫描课时发音动画复习；让孩子点读课件情景卡；家长边做动作边说英语。\n④快速检测：1.孩子说出运动动作；2.用I am...ing描述；3.用I can...说能力。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `动作是生活的基础！运动、玩耍、做家务……每个动作都可以用英语表达`, animationType: 'reveal' },
          { type: 'example', content: `场景1：运动 → I can run! I can jump!
场景2：描述正在做 → I am reading a book.
场景3：能力表达 → I can swim. But I can't fly!`, animationType: 'bounce', label: 'Actions在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u4l5q1',
            type: 'choice',
            question: 'In PE class, the teacher says "Run!" What should you do?',
            options: ['Run', 'Walk', 'Sit down', 'Dance'],
            answer: 'Run',
            hint: 'Run是什么意思？',
            explanation: 'Run是跑步的意思，老师说Run就应该跑步'
          },
          {
            id: 'e2u4l5q2',
            type: 'fill',
            question: 'Look! The children are ____ in the pool.（正在游泳）',
            answer: 'swimming',
            hint: 'swim的ing形式',
            explanation: 'The children are swimming孩子们正在游泳，swim双写m加ing'
          },
          {
            id: 'e2u4l5q3',
            type: 'choice',
            question: '你想告诉朋友你会跳绳，应该怎么说？',
            options: ['I can jump rope.', 'I jump rope.', 'I am jumping rope.', "I can't jump rope."],
            answer: 'I can jump rope.',
            hint: '表达能力用什么？',
            explanation: 'I can jump rope.表示我会跳绳，can表示能力'
          },
          {
            id: 'e2u4l5q4',
            type: 'drag',
            question: '把词拖到正确场景：She is ____ a song.（正在唱）',
            answer: 'singing',
            hint: 'sing的ing形式',
            explanation: 'She is singing a song她正在唱歌，现在进行时'
          },
          {
            id: 'e2u4l5q5',
            type: 'choice',
            question: '【期末真题】小明正在操场上跑步，怎么用英语描述？',
            options: ['He is running on the playground.', 'He can run on the playground.', 'He runs on the playground.', 'He like running.'],
            answer: 'He is running on the playground.',
            hint: '正在做用什么时态？',
            explanation: 'He is running他正在跑步，现在进行时描述正在做的动作'
          },
          {
            id: 'e2u4l5q6',
            type: 'fill',
            question: 'I ____ walk but I can\'t fly.（能）',
            answer: 'can',
            hint: '表示能力用什么？',
            explanation: 'I can walk我会走路，但I can\'t fly我不会飞'
          },
          {
            id: 'e2u4l5q7',
            type: 'choice',
            question: '结合"Places"和"Actions"，哪个句子把两个主题联系起来？',
            options: ['I am running in the park.', 'I am running and Bedroom', 'Park and Run', 'None'],
            answer: 'I am running in the park.',
            hint: '[Places]（英语二年级-第3单元）',
            explanation: 'I am running in the park我正在公园跑步，把场所和动作联系起来'
          },
        ]
      }]
  },
  {
    id: 'e2u5',
    title: 'Clothes',
    subtitle: '穿什么好看，学会搭配衣服',
    order: 5,
    lessons: [
      {
        id: 'e2u5l1',
        title: '服装词汇',
        order: 1,
        teachingMethod: '实物展示教学法',
        learningObjective: '我能说出Shirt/Skirt/Dress等服装词汇',
        successCriteria: '①能说出至少4种服装英语 ②能指认衣服说英语',
        iDo: '家长拿出衣服实物，展示说"Shirt, skirt, dress, pants, hat, shoes"',
        weDo: '亲子一起整理衣柜，边拿衣服边说英语名称',
        youDo: '孩子独立指着衣服说出英语名称，分类整理',
        parentTips: '【家长预习】本课核心：服装Shirt（衬衫）、Skirt（短裙）、Dress（连衣裙）、Pants（裤子）、Hat（帽子）、Shoes（鞋子）。\n共学四步：\n①对话出题：家长拿衬衫问What\'s this?并说Shirt?。\n②孩子应答：孩子应说Shirt!。\n③答错引导：若孩子说不出，家长当同学一起挑衣服！扫描课时发音动画听发音；让孩子点读课件服装卡；家长拿真实衣服边指边说英语。\n④快速检测：1.孩子说出4种服装；2.家长指衣服孩子说英语；3.孩子说出身上穿的衣服。',
        funElement: '玩"时装秀"，穿上衣服走台步说出服装英语名称',
        gsapAnimations: ['GSAP:衣服旋转展示-rotateShow', 'GSAP:衣架滑动-hangerSlide'],
        images: ['IMG:各种服装插图', 'IMG:服装词汇卡片'],
        content: [
          { type: 'text', content: 'Shirt衬衫、Skirt短裙、Dress连衣裙、Pants裤子、Hat帽子、Shoes鞋子，学会这些服装词汇，搭配衣服更自信！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What are you wearing today?\n小红: I\'m wearing a dress and shoes.\n小明: I\'m wearing a shirt and pants.\n小红: Nice! I like your hat!', label: '服装对话', animationType: 'reveal' },
          { type: 'example', content: 'Shirt — 衬衫\nSkirt — 短裙\nDress — 连衣裙\nPants — 裤子\nHat — 帽子\nShoes — 鞋子', label: '服装词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Skirt是半身短裙，Dress是连衣裙。Skirt只有下面，Dress上面下面连在一起！', label: '词汇辨析', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u5l1q1',
            type: 'choice',
            question: '"裙子"用英语怎么说？',
            options: ['Skirt', 'Shirt', 'Dress', 'Pants'],
            answer: 'Skirt',
            hint: '下半身穿的短裙',
            explanation: 'Skirt是短裙，Dress是连衣裙'
          },
          {
            id: 'e2u5l1q2',
            type: 'fill',
            question: 'I wear a ____ on my head.（帽子）',
            answer: 'hat',
            acceptableAnswers: ['cap'],
            hint: '戴在头上的',
            explanation: 'hat是帽子，戴在头上保暖或装饰'
          },
          {
            id: 'e2u5l1q3',
            type: 'flashcard',
            question: '看连衣裙的图片，说出英语名称',
            answer: 'Dress',
            hint: '连体的裙子',
            explanation: 'Dress是连衣裙，上半身和裙摆连在一起的衣服'
          },
          {
            id: 'e2u5l1q4',
            type: 'choice',
            question: 'Which is a one-piece dress?',
            options: ['Dress', 'Skirt', 'Shirt', 'Pants'],
            answer: 'Dress',
            hint: 'Skirt和Dress的形状有什么区别？',
            explanation: 'Skirt只有下半身，Dress上半身和下半身连在一起'
          },
          {
            id: 'e2u5l1q5',
            type: 'fill',
            question: 'I wear ____ on my feet.（鞋子）',
            answer: 'shoes',
            hint: '穿在脚上的是什么？',
            explanation: 'shoes是鞋子，穿在脚上'
          },
          {
            id: 'e2u5l1q6',
            type: 'choice',
            question: '【期末真题】哪个是穿在上半身的衣服？',
            options: ['Shirt', 'Skirt', 'Pants', 'Shoes'],
            answer: 'Shirt',
            hint: '衬衫穿在哪里？',
            explanation: 'Shirt衬衫穿在上半身，Skirt和Pants穿在下半身'
          },
          {
            id: 'e2u5l1q7',
            type: 'drag',
            question: '把词拖到正确位置：I can ____ in the water.（游泳）',
            answer: 'swim',
            hint: '[Actions-动词]（英语二年级-第4单元）',
            explanation: 'I can swim我会游泳，回顾Actions单元学过的动词'
          }
        ]
      },
      {
        id: 'e2u5l2',
        title: '穿脱表达',
        order: 2,
        teachingMethod: 'TPR全身反应法',
        learningObjective: '我能用Put on/Take off表达穿脱衣服',
        successCriteria: '①能用Put on...说穿衣服 ②能用Take off...说脱衣服',
        iDo: '家长边穿脱衣服边说"Put on your coat. Take off your shoes"，动作清晰',
        weDo: '亲子一起听指令穿脱衣服，用英语说出动作',
        youDo: '孩子独立用英语表达穿脱衣服的动作',
        parentTips: '【家长预习】本课核心：穿脱表达Put on（穿上）、Take off（脱下），如Put on your coat. Take off your shoes.。\n共学四步：\n①对话出题：家长说Put on your coat!（穿上外套），看孩子反应。\n②孩子应答：孩子应穿外套，或说Put on your coat.。\n③答错引导：若孩子没反应，家长当同学带头做！扫描课时发音动画听发音；让孩子点读课件短语卡；家长边穿衣边说Put on，用动作配合。\n④快速检测：1.家长说Put on孩子穿；2.说Take off孩子脱；3.孩子用Put on造句。',
        funElement: '玩"快速穿衣"比赛，边穿边说英语',
        gsapAnimations: ['GSAP:穿衣动画-putOn', 'GSAP:脱衣动画-takeOff'],
        images: ['IMG:穿脱衣服场景', 'IMG:Put on/Take off卡片'],
        content: [
          { type: 'text', content: 'Put on穿上、Take off脱下，这两个短语是穿脱衣服的常用表达。Put on your coat穿上外套，Take off your shoes脱下鞋子', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: Put on your coat. It\'s cold!\n小明: OK! I put on my coat.\n妈妈: Take off your shoes before you come in.\n小明: I take off my shoes!', label: '穿脱表达对话', animationType: 'reveal' },
          { type: 'example', content: 'Put on your coat — 穿上外套\nPut on your hat — 戴上帽子\nTake off your shoes — 脱下鞋子\nTake off your jacket — 脱下夹克', label: '穿脱表达', animationType: 'bounce' },
          { type: 'tip', content: 'Put on和Take off是一对反义短语，Put on是穿上，Take off是脱下。记住一个就能记住另一个！', label: '记忆技巧', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u5l2q1',
            type: 'choice',
            question: '"穿上外套"用英语怎么说？',
            options: ['Put on your coat', 'Take off your coat', 'Open your coat', 'Close your coat'],
            answer: 'Put on your coat',
            hint: '穿上用什么短语？',
            explanation: 'Put on表示穿上，Put on your coat表示穿上你的外套'
          },
          {
            id: 'e2u5l2q2',
            type: 'fill',
            question: '____ off your shoes before you come in.（脱下）',
            answer: 'Take',
            hint: '脱下和穿上相反',
            explanation: 'Take off表示脱下，Take off your shoes表示脱下你的鞋子'
          },
          {
            id: 'e2u5l2q3',
            type: 'drag',
            question: '把短语拖到正确位置：出门前要____ your hat',
            answer: 'Put on',
            hint: '戴帽子用什么短语？',
            explanation: 'Put on your hat表示戴上你的帽子'
          },
          {
            id: 'e2u5l2q4',
            type: 'choice',
            question: 'It\'s hot. You should ____ your coat.',
            options: ['take off', 'put on', 'wear', 'buy'],
            answer: 'take off',
            hint: '它们是一对什么词？',
            explanation: 'Put on穿上和Take off脱下是一对反义短语'
          },
          {
            id: 'e2u5l2q5',
            type: 'fill',
            question: 'It\'s cold. ____ on your hat!（戴上）',
            answer: 'Put',
            hint: '戴上帽子用什么短语？',
            explanation: 'Put on your hat!戴上你的帽子！Put on表示穿上/戴上'
          },
          {
            id: 'e2u5l2q6',
            type: 'choice',
            question: '【期末真题】回家后脱鞋子，应该怎么说？',
            options: ['Take off your shoes.', 'Put on your shoes.', 'Take off your hat.', 'Put on your coat.'],
            answer: 'Take off your shoes.',
            hint: '脱下鞋子用什么短语？',
            explanation: 'Take off your shoes脱下你的鞋子，Take off表示脱下'
          },
          {
            id: 'e2u5l2q7',
            type: 'drag',
            question: '把词拖到正确位置：I wear a ____ on my head.（帽子）',
            answer: 'hat',
            hint: '[Clothes-服装词汇]（英语二年级-第5单元）',
            explanation: 'I wear a hat on my head我头上戴帽子，回顾服装词汇'
          }
        ]
      },
      {
        id: 'e2u5l3',
        title: '购物对话',
        order: 3,
        teachingMethod: '角色扮演法',
        learningObjective: '我能用Can I help you?/I want...进行购物对话',
        successCriteria: '①能说出购物常用对话 ②能模拟购物场景对话',
        iDo: '家长扮演店员和顾客，示范购物对话"Can I help you? I want a dress, please"',
        weDo: '亲子一起角色扮演购物场景，练习购物对话',
        youDo: '孩子独立完成一次购物对话，扮演顾客或店员',
        parentTips: '【家长预习】本课核心：购物对话Can I help you?（我能帮你吗）、I want a dress, please.（我想要一条连衣裙）。\n共学四步：\n①对话出题：家长当店员说Can I help you?，看孩子怎么答。\n②孩子应答：孩子应说I want a dress, please.。\n③答错引导：若孩子说不出，家长当同学一起演！扫描课时发音动画听发音；让孩子点读课件对话卡；家长模拟服装店场景边演边说英语。\n④快速检测：1.孩子回应Can I help you?；2.说I want...；3.模拟一次购物对话。',
        funElement: '用家里的衣服布置一个"服装店"，进行购物对话',
        gsapAnimations: ['GSAP:价格标签弹出-priceTag', 'GSAP:购物袋晃动-bagSwing'],
        images: ['IMG:服装店场景', 'IMG:购物对话卡片'],
        content: [
          { type: 'text', content: '在服装店购物时，店员会问Can I help you? 我能帮你吗？你可以回答I want a dress, please. 我想要一条连衣裙', animationType: 'reveal' },
          { type: 'dialogue', content: '店员: Can I help you?\n小红: I want a skirt, please.\n店员: What color?\n小红: Blue, please. How much is it?\n店员: It\'s 50 yuan.', label: '购物对话', animationType: 'reveal' },
          { type: 'example', content: 'Can I help you? — 我能帮你吗？\nI want a... — 我想要一个……\nHow much is it? — 多少钱？\nIt\'s 50 yuan. — 50元。', label: '购物用语', animationType: 'bounce' },
          { type: 'tip', content: 'How much is it?用来问价格，回答用It\'s + 数字 + yuan/dollars', label: '句型提示', animationType: 'pulse' },
          { type: 'animation', content: '价格标签弹出，购物袋晃动的服装店动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Clothes Shop', sceneBuildConfig: { sceneName: 'Clothes Shop', elements: [ { id: 'el-0', text: 'Shirt', emoji: '👕', delay: 0, animation: 'bounceIn', ttsText: 'Shirt' }, { id: 'el-1', text: 'Pants', emoji: '👖', delay: 0.4, animation: 'popIn', ttsText: 'Pants' }, { id: 'el-2', text: 'Dress', emoji: '👗', delay: 0.8, animation: 'scaleIn', ttsText: 'Dress' }, { id: 'el-3', text: 'Shoes', emoji: '👟', delay: 1.2, animation: 'slideIn', ttsText: 'Shoes' } ] }, ttsNarration: '服装店：衬衫、裤子、裙子、鞋子' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u5l3q1',
            type: 'choice',
            question: '店员问"Can I help you?"应该怎么回答？',
            options: ['I want a skirt, please', 'I am fine', 'Thank you', 'Goodbye'],
            answer: 'I want a skirt, please',
            hint: '说出你想买什么',
            explanation: 'Can I help you?是店员的问候语，回答说出想买的东西'
          },
          {
            id: 'e2u5l3q2',
            type: 'fill',
            question: 'How ____ is this dress?（多少钱）',
            answer: 'much',
            hint: '问价格用什么词？',
            explanation: 'How much is...?表示...多少钱，用来询问价格'
          },
          {
            id: 'e2u5l3q3',
            type: 'drag',
            question: '把句子拖到正确位置：我想买一件衬衫 = I ____ a shirt',
            answer: 'want',
            hint: '想要什么用什么动词？',
            explanation: 'I want a shirt表示我想买一件衬衫，want是想要'
          },
          {
            id: 'e2u5l3q4',
            type: 'choice',
            question: '在服装店，店员通常先说什么？',
            options: ['Can I help you?', 'How much is it?', 'I want a dress.', 'Goodbye.'],
            answer: 'Can I help you?',
            hint: '店员怎么问候顾客？',
            explanation: 'Can I help you?是我能帮你吗，店员常用的问候语'
          },
          {
            id: 'e2u5l3q5',
            type: 'fill',
            question: 'I want a skirt, ____.（请）',
            answer: 'please',
            hint: '礼貌用语怎么说？',
            explanation: 'I want a skirt, please.我想要一条裙子，please表示请'
          },
          {
            id: 'e2u5l3q6',
            type: 'choice',
            question: '【期末真题】You want to know the price. What do you say?',
            options: ['How much is it?', 'How many is it?', 'How are you?', 'Where is it?'],
            answer: 'How much is it?',
            hint: 'How much问的是什么？',
            explanation: 'How much is it?表示多少钱，用来询问价格'
          },
          {
            id: 'e2u5l3q7',
            type: 'drag',
            question: '把词拖到正确位置：____ off your coat. It\'s hot!（脱下）',
            answer: 'Take',
            hint: '[Clothes-穿脱表达]（英语二年级-第5单元）',
            explanation: 'Take off your coat脱下你的外套，回顾穿脱表达'
          }
        ]
      }
    ,
      {
        id: 'e2u5l4',
        title: 'Clothes Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用Clothes单元的服装词汇和购物对话',
        successCriteria: '①能说出6种服装英语 ②能完成购物对话',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾Clothes单元：服装Shirt/Skirt/Dress/Pants/Hat/Shoes、穿脱Put on/Take off、购物Can I help you/How much。\n共学四步：\n①对话出题：家长问衣服用英语怎么说？指衬衫。。\n②孩子应答：孩子应说Shirt!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长拿衣服边指边复习。\n④快速检测：1.孩子说出6种服装；2.用Put on造句；3.模拟购物对话。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Clothes单元！我们学了服装Shirt/Skirt/Dress/Pants/Hat/Shoes、穿脱Put on/Take off、购物对话Can I help you/How much`, animationType: 'reveal' },
          { type: 'formula', content: `服装表达公式：
Put on + 服装 → Put on your coat.
Take off + 服装 → Take off your shoes.
购物：Can I help you? → I want a...`, animationType: 'typewriter', label: 'Clothes公式' },
          { type: 'animation', content: `Clothes单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Clothes Review', cardRevealConfig: { cards: [ { front: 'Shirt', back: '👕', ttsText: 'Shirt' }, { front: 'Pants', back: '👖', ttsText: 'Pants' }, { front: 'Dress', back: '👗', ttsText: 'Dress' }, { front: 'Shoes', back: '👟', ttsText: 'Shoes' } ] }, ttsNarration: 'Clothes单元回顾：衬衫、裤子、裙子、鞋子' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u5l4q1',
            type: 'choice',
            question: '穿上外套用英语怎么说？',
            options: ['Put on your coat', 'Take off your coat', 'Put on your shoes', 'Take off your shoes'],
            answer: 'Put on your coat',
            hint: '穿上用什么短语？',
            explanation: 'Put on your coat穿上你的外套，Put on表示穿上'
          },
          {
            id: 'e2u5l4q2',
            type: 'fill',
            question: 'I want a dress, ____.（请）',
            answer: 'please',
            hint: '礼貌用语',
            explanation: 'I want a dress, please.我想要一条连衣裙，please表示请'
          },
          {
            id: 'e2u5l4q3',
            type: 'choice',
            question: '哪个是穿在脚上的？',
            options: ['Shoes', 'Hat', 'Shirt', 'Dress'],
            answer: 'Shoes',
            hint: '什么穿在脚上？',
            explanation: 'Shoes鞋子穿在脚上'
          },
          {
            id: 'e2u5l4q4',
            type: 'drag',
            question: '把词拖到正确位置：How ____ is this dress?（多少）',
            answer: 'much',
            hint: '问价格用什么词？',
            explanation: 'How much is this dress?这条连衣裙多少钱？'
          },
          {
            id: 'e2u5l4q5',
            type: 'choice',
            question: '【期末真题】It\'s cold. You should ____ your coat.',
            options: ['put on', 'take off', 'wear', 'buy'],
            answer: 'put on',
            hint: '它们是一对什么词？',
            explanation: 'Put on穿上和Take off脱下是一对反义短语'
          },
          {
            id: 'e2u5l4q6',
            type: 'fill',
            question: 'Can I ____ you? I want a shirt.（帮助）',
            answer: 'help',
            hint: '店员怎么问候？',
            explanation: 'Can I help you?我能帮你吗，购物对话的常用句型'
          },
          {
            id: 'e2u5l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Actions"学的内容？',
            options: ['I can run', 'Shirt', 'Skirt', 'Goodbye'],
            answer: 'I can run',
            hint: '[Actions]（英语二年级-第4单元）',
            explanation: 'I can run我会跑步，是上一单元Actions的核心内容'
          },
        ]
      },
      {
        id: 'e2u5l5',
        title: 'Clothes in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在生活中用英语说穿脱衣服和购物',
        successCriteria: '①能说出每天穿的服装 ②能在购物时用英语对话',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把服装生活化：每天穿脱衣服、买衣服、搭配衣服都可以用英语表达。\n共学四步：\n①对话出题：家长问今天穿了什么？用英语说。。\n②孩子应答：孩子应说I wear a shirt and pants.。\n③答错引导：若孩子说不出，家长当同学一起说！扫描课时发音动画复习；让孩子点读课件情景卡；家长边穿衣边说英语。\n④快速检测：1.孩子说出今天穿的衣服；2.用Put on造句；3.模拟买衣服对话。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `衣服是生活的必需品！每天穿脱衣服、买衣服、搭配衣服，都可以用英语表达`, animationType: 'reveal' },
          { type: 'example', content: `场景1：穿衣服 → Put on your coat. It's cold!
场景2：脱衣服 → Take off your shoes before you come in.
场景3：买衣服 → Can I help you? I want a skirt.`, animationType: 'bounce', label: 'Clothes在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u5l5q1',
            type: 'choice',
            question: 'Mom says "Put on your coat." What should you do?',
            options: ['Put on the coat', 'Take off the coat', 'Buy a coat', 'Wash the coat'],
            answer: 'Put on the coat',
            hint: 'Put on是什么意思？',
            explanation: 'Put on your coat穿上你的外套，Put on表示穿上'
          },
          {
            id: 'e2u5l5q2',
            type: 'fill',
            question: 'I want to buy a hat. How ____ is it?（多少）',
            answer: 'much',
            hint: '问价格用什么词？',
            explanation: 'How much is it?多少钱？购物时问价格的常用句型'
          },
          {
            id: 'e2u5l5q3',
            type: 'choice',
            question: '在服装店，你想买一条裙子，应该怎么说？',
            options: ['I want a skirt, please.', 'I want a shirt, please.', 'How much is it?', 'Can I help you?'],
            answer: 'I want a skirt, please.',
            hint: '告诉店员你想买什么',
            explanation: 'I want a skirt, please.我想要一条裙子，礼貌地表达需求'
          },
          {
            id: 'e2u5l5q4',
            type: 'drag',
            question: '把词拖到正确场景：回家后要____ off your shoes',
            answer: 'Take',
            hint: '回家脱鞋用什么短语？',
            explanation: 'Take off your shoes脱下你的鞋子，回家要脱鞋'
          },
          {
            id: 'e2u5l5q5',
            type: 'choice',
            question: '【期末真题】今天很冷，你应该穿什么？',
            options: ['A coat', 'A T-shirt', 'Shorts', 'A raincoat'],
            answer: 'A coat',
            hint: '冷天穿什么保暖？',
            explanation: 'A coat外套，天冷穿外套保暖'
          },
          {
            id: 'e2u5l5q6',
            type: 'fill',
            question: 'I wear a ____ on my head when it\'s sunny.（帽子）',
            answer: 'hat',
            acceptableAnswers: ['cap'],
            hint: '晴天头上戴什么？',
            explanation: 'I wear a hat on my head晴天戴帽子遮阳'
          },
          {
            id: 'e2u5l5q7',
            type: 'choice',
            question: '结合"Actions"和"Clothes"，哪个句子把两个主题联系起来？',
            options: ['I am putting on my coat.', 'I am running and Shirt', 'Shirt and Run', 'None'],
            answer: 'I am putting on my coat.',
            hint: '[Actions]（英语二年级-第4单元）',
            explanation: 'I am putting on my coat我正在穿外套，把动作和服装联系起来'
          },
        ]
      }]
  },
  {
    id: 'e2u6',
    title: 'Transport',
    subtitle: '交通工具大集合，出行方式多',
    order: 6,
    lessons: [
      {
        id: 'e2u6l1',
        title: '交通工具',
        order: 1,
        teachingMethod: '多感官教学法',
        learningObjective: '我能说出Bus/Car/Train/Bike/Plane等交通工具',
        successCriteria: '①能说出至少4种交通工具 ②能指认交通工具说英语',
        iDo: '家长展示交通工具图片，模仿声音说"Car! Beep beep! Train! Choo choo!"',
        weDo: '亲子一起模仿交通工具的声音和动作，说出英语名称',
        youDo: '孩子独立看图说出交通工具的英语名称，并模仿声音',
        parentTips: '【家长预习】本课核心：交通工具Bus（公交）、Car（汽车）、Train（火车）、Bike（自行车）、Plane（飞机）。\n共学四步：\n①对话出题：家长指公交车问What\'s this?并说Bus?。\n②孩子应答：孩子应说Bus!。\n③答错引导：若孩子说不出，家长当同学一起认车！扫描课时发音动画听发音；让孩子点读课件交通卡；家长在路上边指车边说英语。\n④快速检测：1.孩子说出4种交通工具；2.家长指车孩子说英语；3.孩子说出坐过的交通工具。',
        funElement: '唱《The Wheels on the Bus》儿歌，做动作',
        gsapAnimations: ['GSAP:汽车行驶-carMove', 'GSAP:飞机飞行-planeFly'],
        images: ['IMG:各种交通工具插图', 'IMG:交通工具卡片'],
        content: [
          { type: 'text', content: 'Bus公交车、Car小汽车、Train火车、Bike自行车、Plane飞机，这些是常见的交通工具！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: How do you go to school?\n小红: I go to school by bus!\n小明: I go by bike!\n小红: My dad goes by car.', label: '交通工具对话', animationType: 'reveal' },
          { type: 'example', content: 'Bus — 公交车（Beep beep）\nCar — 小汽车\nTrain — 火车（Choo choo）\nBike — 自行车\nPlane — 飞机\nSubway — 地铁', label: '交通工具词汇', animationType: 'bounce' },
          { type: 'tip', content: 'by + 交通工具表示出行方式：by bus坐公交、by bike骑自行车、by car开车', label: '用法提示', animationType: 'pulse' },
          { type: 'animation', content: '各种交通工具行驶的动画，配合对应的声音效果', animationType: 'bounce' },
        ],
        practiceQuestions: [
          {
            id: 'e2u6l1q1',
            type: 'choice',
            question: '"公交车"用英语怎么说？',
            options: ['Bus', 'Car', 'Train', 'Bike'],
            answer: 'Bus',
            hint: '很多人一起坐的大车',
            explanation: 'Bus是公交车，可以载很多乘客'
          },
          {
            id: 'e2u6l1q2',
            type: 'fill',
            question: 'I go to school by ____.（自行车）',
            answer: 'bike',
            acceptableAnswers: ['bicycle'],
            hint: '两个轮子骑的',
            explanation: 'bike是自行车，by bike表示骑自行车'
          },
          {
            id: 'e2u6l1q3',
            type: 'flashcard',
            question: '看飞机的图片，说出英语名称',
            answer: 'Plane',
            hint: '在天上飞的交通工具',
            explanation: 'Plane是飞机，也叫Airplane'
          },
          {
            id: 'e2u6l1q4',
            type: 'choice',
            question: '哪种交通工具在天上飞？',
            options: ['Plane', 'Bus', 'Train', 'Bike'],
            answer: 'Plane',
            hint: '哪个在天上飞？',
            explanation: 'Plane飞机在天上飞，其他都在地上跑'
          },
          {
            id: 'e2u6l1q5',
            type: 'fill',
            question: 'I go to school by ____. It has two wheels.（自行车）',
            answer: 'bike',
            acceptableAnswers: ['bicycle'],
            hint: '两个轮子骑的是什么？',
            explanation: 'by bike骑自行车，bike是自行车，有两个轮子'
          },
          {
            id: 'e2u6l1q6',
            type: 'choice',
            question: '【期末真题】Which means "坐公交车"?',
            options: ['By bus', 'By car', 'By train', 'By bike'],
            answer: 'By bus',
            hint: 'by + 交通工具表示什么？',
            explanation: 'by bus表示坐公交车，by + 交通工具表示出行方式'
          },
          {
            id: 'e2u6l1q7',
            type: 'drag',
            question: '把词拖到正确位置：I wear a ____ on my head.（帽子）',
            answer: 'hat',
            hint: '[Clothes-服装词汇]（英语二年级-第5单元）',
            explanation: 'I wear a hat on my head我头上戴帽子，回顾服装词汇'
          }
        ]
      },
      {
        id: 'e2u6l2',
        title: '出行方式',
        order: 2,
        teachingMethod: '情景教学法',
        learningObjective: '我能用I go by...表达出行方式',
        successCriteria: '①能用I go by...说出行方式 ②能说出3种出行方式',
        iDo: '家长说"I go to school by bus. I go to Beijing by train"，用地图辅助',
        weDo: '亲子一起讨论去不同地方的出行方式，用"by + 交通工具"表达',
        youDo: '孩子独立用英语说出自己去不同地方的出行方式',
        parentTips: '【家长预习】本课核心：出行方式by+交通工具，如I go by bus.（我坐公交去）、I go by plane.。\n共学四步：\n①对话出题：家长问你去学校怎么去？并说I go by bus.。\n②孩子应答：孩子应说I go by bike.等。\n③答错引导：若孩子说不出，家长当同学一起说出行！扫描课时发音动画听发音；让孩子点读课件句子卡；家长结合出行经历边说边比划。\n④快速检测：1.孩子用I go by...说出行方式；2.说出坐飞机怎么说；3.说出3种出行方式。',
        funElement: '玩"旅行规划师"游戏，用英语说出旅行路线和交通工具',
        gsapAnimations: ['GSAP:路线描绘-drawPath', 'GSAP:交通工具切换-switchVehicle'],
        images: ['IMG:出行方式场景', 'IMG:by+交通工具卡片'],
        content: [
          { type: 'text', content: 'I go by bus我坐公交去、I go by train我坐火车去、I go by plane我坐飞机去。by + 交通工具 = 出行方式', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: How do you go to Beijing?\n小红: I go by train!\n小明: How about Shanghai?\n小红: I go by plane! It\'s fast!', label: '出行方式对话', animationType: 'reveal' },
          { type: 'example', content: 'by bus — 坐公交\nby car — 开车/坐车\nby bike — 骑自行车\nby train — 坐火车\nby plane — 坐飞机\nby subway — 坐地铁', label: '出行方式表达', animationType: 'typewriter' },
          { type: 'tip', content: '走路去怎么说？On foot! 不是by foot哦，要记住！', label: '特殊表达', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u6l2q1',
            type: 'choice',
            question: '"我坐地铁去"用英语怎么说？',
            options: ['I go by subway', 'I go by bus', 'I go by car', 'I go by bike'],
            answer: 'I go by subway',
            hint: '地下跑的交通工具',
            explanation: 'by subway表示坐地铁，subway是地铁'
          },
          {
            id: 'e2u6l2q2',
            type: 'fill',
            question: 'She goes to work ____ car.（开车）',
            answer: 'by',
            hint: '表示出行方式的介词',
            explanation: 'by car表示开车/坐车，by是表示方式的介词'
          },
          {
            id: 'e2u6l2q3',
            type: 'drag',
            question: '把出行方式拖到正确位置：去美国要坐____',
            answer: 'Plane',
            hint: '跨洋旅行坐什么？',
            explanation: '去美国要坐飞机，by plane表示坐飞机'
          },
          {
            id: 'e2u6l2q4',
            type: 'choice',
            question: '去北京旅行，远距离出行最好坐什么？',
            options: ['By train', 'By bike', 'On foot', 'By bus'],
            answer: 'By train',
            hint: '远距离出行坐什么最快？',
            explanation: 'By train坐火车，远距离出行火车比自行车和走路快'
          },
          {
            id: 'e2u6l2q5',
            type: 'fill',
            question: 'I go to school on ____. I walk!（走路）',
            answer: 'foot',
            hint: '走路去用什么表达？',
            explanation: 'on foot走路去，注意不是by foot哦！'
          },
          {
            id: 'e2u6l2q6',
            type: 'choice',
            question: '【期末真题】哪个表达是错误的？',
            options: ['by foot', 'by bus', 'by train', 'by bike'],
            answer: 'by foot',
            hint: '走路去的正确表达是什么？',
            explanation: '走路去应该用on foot，不是by foot，这是特殊表达'
          },
          {
            id: 'e2u6l2q7',
            type: 'drag',
            question: '把词拖到正确位置：Put ____ your coat. It\'s cold!（穿上）',
            answer: 'on',
            hint: '[Clothes-穿脱表达]（英语二年级-第5单元）',
            explanation: 'Put on your coat穿上你的外套，回顾穿脱表达'
          }
        ]
      },
      {
        id: 'e2u6l3',
        title: '交通规则',
        order: 3,
        teachingMethod: '情景教学法',
        learningObjective: '我能用英语说出交通灯规则Red light stop/Green light go',
        successCriteria: '①能说出3种交通灯的含义 ②能说出红灯绿灯该怎么做',
        iDo: '家长展示红绿灯图片，说"Red light, stop! Yellow light, wait! Green light, go!"',
        weDo: '亲子一起玩"红绿灯"游戏，听指令做动作',
        youDo: '孩子独立说出交通规则，用英语描述红绿灯的含义',
        parentTips: '【家长预习】本课核心：交通规则Red light, stop!（红灯停）、Yellow light, wait!（黄灯等）、Green light, go!（绿灯行）。\n共学四步：\n①对话出题：家长问红灯怎么办？并说Red light, stop!。\n②孩子应答：孩子应说Red light, stop!。\n③答错引导：若孩子说不出，家长当同学一起看灯！扫描课时发音动画听发音；让孩子点读课件规则卡；家长带孩子看真实交通灯边指边说英语。\n④快速检测：1.孩子说出红灯规则；2.说出绿灯规则；3.说出3种灯的含义。',
        funElement: '玩"红绿灯木头人"游戏，红灯停绿灯行',
        gsapAnimations: ['GSAP:红绿灯切换-trafficLight', 'GSAP:行人过马路-crossRoad'],
        images: ['IMG:交通规则场景', 'IMG:红绿灯卡片'],
        content: [
          { type: 'text', content: 'Red light, stop! 红灯停！Yellow light, wait! 黄灯等！Green light, go! 绿灯行！交通安全很重要！', animationType: 'reveal' },
          { type: 'dialogue', content: '妈妈: Look! Red light!\n小明: Stop! 红灯停！\n妈妈: Now it\'s green!\n小明: Green light, go! 绿灯行！', label: '交通规则对话', animationType: 'reveal' },
          { type: 'example', content: 'Red light, stop — 红灯停\nYellow light, wait — 黄灯等\nGreen light, go — 绿灯行\nCrosswalk — 斑马线\nTraffic light — 红绿灯', label: '交通规则用语', animationType: 'bounce' },
          { type: 'tip', content: '过马路要走斑马线crosswalk，先看左边再看右边，安全第一！', label: '安全提示', animationType: 'pulse' },
          { type: 'animation', content: '红绿灯切换动画，行人过马路的动画', animationType: 'bounce', animationConfig: { sceneType: 'sequence', title: 'Traffic Light', sequenceConfig: { items: ['Red', 'Yellow', 'Green'], order: 'custom', itemType: 'word' }, ttsNarration: '红绿灯：红灯停、黄灯等、绿灯行' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u6l3q1',
            type: 'choice',
            question: '红灯亮了应该怎么做？',
            options: ['Stop', 'Go', 'Wait', 'Run'],
            answer: 'Stop',
            hint: '红灯代表什么？',
            explanation: 'Red light, stop! 红灯停，这是重要的交通规则'
          },
          {
            id: 'e2u6l3q2',
            type: 'fill',
            question: '____ light, go!（绿灯）',
            answer: 'Green',
            hint: '可以通行的灯是什么颜色？',
            explanation: 'Green light, go! 绿灯行，绿灯可以通行'
          },
          {
            id: 'e2u6l3q3',
            type: 'drag',
            question: '把规则拖到正确位置：过马路要走____',
            answer: 'Crosswalk',
            hint: '斑马线用英语怎么说？',
            explanation: 'Crosswalk是斑马线/人行横道，过马路要走斑马线'
          },
          {
            id: 'e2u6l3q4',
            type: 'choice',
            question: '黄灯亮了应该怎么做？',
            options: ['Wait', 'Go', 'Stop', 'Run'],
            answer: 'Wait',
            hint: '黄灯代表什么？',
            explanation: 'Yellow light, wait!黄灯等一等，等绿灯再走'
          },
          {
            id: 'e2u6l3q5',
            type: 'fill',
            question: '____ light, stop! 红灯停！（红色）',
            answer: 'Red',
            hint: '红灯是什么颜色？',
            explanation: 'Red light, stop!红灯停，Red是红色'
          },
          {
            id: 'e2u6l3q6',
            type: 'choice',
            question: '【期末真题】过马路应该走哪里？',
            options: ['Crosswalk', 'Anywhere', 'Road', 'Park'],
            answer: 'Crosswalk',
            hint: '安全过马路走什么线？',
            explanation: 'Crosswalk是斑马线/人行横道，过马路要走斑马线'
          },
          {
            id: 'e2u6l3q7',
            type: 'drag',
            question: '把词拖到正确位置：I go to school ____ bus.（坐公交）',
            answer: 'by',
            hint: '[Transport-出行方式]（英语二年级-第6单元）',
            explanation: 'I go to school by bus我坐公交上学，回顾出行方式表达'
          }
        ]
      }
    ,
      {
        id: 'e2u6l4',
        title: 'Transport Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用Transport单元的交通工具和规则',
        successCriteria: '①能说出5种交通工具 ②能说出交通灯规则',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾Transport单元：交通工具Bus/Car/Train/Bike/Plane、出行by+交通工具、交通规则Red light stop/Green light go。\n共学四步：\n①对话出题：家长问交通工具用英语说几个。。\n②孩子应答：孩子应说Bus, car, train!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说交通工具。\n④快速检测：1.孩子说出5种交通工具；2.用I go by...造句；3.说出交通灯规则。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Transport单元！我们学了交通工具Bus/Car/Train/Bike/Plane、出行方式by+交通工具、交通规则Red light stop/Green light go`, animationType: 'reveal' },
          { type: 'formula', content: `交通表达公式：
by + 交通工具 → I go by bus.
On foot → 走路去
Red light, stop! / Green light, go!`, animationType: 'typewriter', label: 'Transport公式' },
          { type: 'animation', content: `Transport单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Transport Review', cardRevealConfig: { cards: [ { front: 'Car', back: '🚗', ttsText: 'Car' }, { front: 'Bus', back: '🚌', ttsText: 'Bus' }, { front: 'Train', back: '🚂', ttsText: 'Train' }, { front: 'Plane', back: '✈️', ttsText: 'Plane' } ] }, ttsNarration: 'Transport单元回顾：汽车、公交、火车、飞机' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u6l4q1',
            type: 'choice',
            question: '坐公交车用英语怎么说？',
            options: ['By bus', 'By bike', 'By train', 'On foot'],
            answer: 'By bus',
            hint: '公交车的出行方式',
            explanation: 'By bus坐公交车，by + 交通工具表示出行方式'
          },
          {
            id: 'e2u6l4q2',
            type: 'fill',
            question: 'Red light, ____! 红灯停！（停）',
            answer: 'stop',
            hint: '红灯要做什么？',
            explanation: 'Red light, stop!红灯停，重要的交通规则'
          },
          {
            id: 'e2u6l4q3',
            type: 'choice',
            question: '哪种出行方式最环保？',
            options: ['By bike', 'By car', 'By plane', 'By train'],
            answer: 'By bike',
            hint: '哪种方式不排放尾气？',
            explanation: 'By bike骑自行车最环保，不排放尾气'
          },
          {
            id: 'e2u6l4q4',
            type: 'drag',
            question: '把词拖到正确位置：Green light, ____! 绿灯行！',
            answer: 'go',
            hint: '绿灯可以做什么？',
            explanation: 'Green light, go!绿灯行，绿灯可以通行'
          },
          {
            id: 'e2u6l4q5',
            type: 'choice',
            question: '【期末真题】How do you go to school if you walk?',
            options: ['On foot', 'By bus', 'By car', 'By bike'],
            answer: 'On foot',
            hint: '两种出行方式有什么区别？',
            explanation: 'by bus坐公交车，on foot走路，是不同的出行方式'
          },
          {
            id: 'e2u6l4q6',
            type: 'fill',
            question: 'I go to Beijing by ____. It goes very fast on tracks.（火车）',
            answer: 'train',
            hint: '在铁轨上跑的交通工具',
            explanation: 'by train坐火车，train在铁轨上跑得很快'
          },
          {
            id: 'e2u6l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Clothes"学的内容？',
            options: ['Put on your coat', 'Bus', 'Car', 'Goodbye'],
            answer: 'Put on your coat',
            hint: '[Clothes]（英语二年级-第5单元）',
            explanation: 'Put on your coat穿上外套，是上一单元Clothes的核心内容'
          },
        ]
      },
      {
        id: 'e2u6l5',
        title: 'Transport in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在出行中用英语说交通工具和方式',
        successCriteria: '①能说出出行用的交通工具 ②能说出交通灯规则',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把交通生活化：上学、旅行、出行都要选择合适交通工具。\n共学四步：\n①对话出题：家长问去旅行坐什么？用英语说。。\n②孩子应答：孩子应说I go by plane.。\n③答错引导：若孩子说不出，家长当同学一起计划出行！扫描课时发音动画复习；让孩子点读课件情景卡；家长结合出行经历边说边比划。\n④快速检测：1.孩子说出旅行交通工具；2.用I go by...造句；3.说出交通灯规则。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `交通工具连接我们的生活！上学、旅行、出行……选择合适的交通工具很重要`, animationType: 'reveal' },
          { type: 'example', content: `场景1：上学 → I go to school by bus.
场景2：旅行 → I go to Beijing by train.
场景3：交通规则 → Red light, stop! Green light, go!`, animationType: 'bounce', label: 'Transport在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u6l5q1',
            type: 'choice',
            question: '上学快迟到了，最快的出行方式是什么？',
            options: ['By car', 'On foot', 'By bike', 'By bus'],
            answer: 'By car',
            hint: '哪种方式最快？',
            explanation: 'By car坐车最快，不会堵车的话比公交和走路都快'
          },
          {
            id: 'e2u6l5q2',
            type: 'fill',
            question: 'I go to the park on ____. I walk there.（走路）',
            answer: 'foot',
            hint: '走路去怎么说？',
            explanation: 'on foot走路去，公园不远可以走路'
          },
          {
            id: 'e2u6l5q3',
            type: 'choice',
            question: '过马路时看到红灯，应该怎么做？',
            options: ['Stop and wait', 'Run quickly', 'Keep walking', 'Close eyes'],
            answer: 'Stop and wait',
            hint: '红灯要做什么？',
            explanation: 'Red light, stop!红灯停，过马路要遵守交通规则'
          },
          {
            id: 'e2u6l5q4',
            type: 'drag',
            question: '把词拖到正确场景：I go to Shanghai by ____（飞机）',
            answer: 'plane',
            hint: '远距离出行坐什么？',
            explanation: 'I go to Shanghai by plane我坐飞机去上海'
          },
          {
            id: 'e2u6l5q5',
            type: 'choice',
            question: '【期末真题】小明家离学校很近，他应该怎么上学？',
            options: ['On foot', 'By plane', 'By train', 'By subway'],
            answer: 'On foot',
            hint: '很近的话怎么去最方便？',
            explanation: 'On foot走路去，家近的话走路最方便'
          },
          {
            id: 'e2u6l5q6',
            type: 'fill',
            question: 'Yellow light, ____! 黄灯等一等！（等待）',
            answer: 'wait',
            hint: '黄灯要做什么？',
            explanation: 'Yellow light, wait!黄灯等一等，等绿灯再走'
          },
          {
            id: 'e2u6l5q7',
            type: 'choice',
            question: '结合"Clothes"和"Transport"，哪个句子把两个主题联系起来？',
            options: ['I put on my coat and go by bus.', 'I put on my coat and Shirt', 'Bus and Coat', 'None'],
            answer: 'I put on my coat and go by bus.',
            hint: '[Clothes]（英语二年级-第5单元）',
            explanation: 'I put on my coat and go by bus我穿上外套坐公交，把服装和交通联系起来'
          },
        ]
      }]
  },
  {
    id: 'e2u7',
    title: 'Hobbies',
    subtitle: '我的爱好，我喜欢做的事',
    order: 7,
    lessons: [
      {
        id: 'e2u7l1',
        title: '爱好表达',
        order: 1,
        teachingMethod: 'I Do→We Do→You Do',
        learningObjective: '我能用I like+doing表达自己的爱好',
        successCriteria: '①能用I like+doing说一项爱好 ②能说出3种爱好的英语',
        iDo: '家长展示自己的爱好"I like reading. I like cooking. I like singing"',
        weDo: '亲子一起分享各自的爱好，用"I like..."表达',
        youDo: '孩子独立用英语说出自己的爱好，至少3个',
        parentTips: '【家长预习】本课核心：爱好表达I like reading.（我喜欢读书）、I like singing.（我喜欢唱歌），I like+doing。\n共学四步：\n①对话出题：家长问你的爱好是什么？并说I like reading.。\n②孩子应答：孩子应说I like singing.等。\n③答错引导：若孩子说不出，家长当同学一起说爱好！扫描课时发音动画听发音；让孩子点读课件句子卡；家长先说自己的爱好示范，再问孩子。\n④快速检测：1.孩子用I like+doing说爱好；2.说出3种爱好；3.家长说爱好孩子跟读。',
        funElement: '画"爱好树"，每个树枝上画一个爱好并写英语名称',
        gsapAnimations: ['GSAP:爱好图标弹出-hobbyPop', 'GSAP:爱心飘浮-heartFloat'],
        images: ['IMG:各种爱好插图', 'IMG:爱好词汇卡片'],
        content: [
          { type: 'text', content: 'I like reading. 我喜欢读书。I like singing. 我喜欢唱歌。用I like + doing来表达你的爱好吧！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What do you like?\n小红: I like drawing. And you?\n小明: I like reading books!\n小红: That\'s great! I like singing too!', label: '爱好表达对话', animationType: 'reveal' },
          { type: 'example', content: 'I like reading — 我喜欢读书\nI like drawing — 我喜欢画画\nI like singing — 我喜欢唱歌\nI like swimming — 我喜欢游泳\nI like dancing — 我喜欢跳舞\nI like playing the piano — 我喜欢弹钢琴', label: '爱好表达', animationType: 'bounce' },
          { type: 'tip', content: '表达爱好用I like + 动词ing，如I like reading。注意乐器前要加the，如playing the piano！', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '爱好图标依次弹出，爱心飘浮的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Hobbies', sceneBuildConfig: { sceneName: 'Hobbies', elements: [ { id: 'el-0', text: 'Read', emoji: '📖', delay: 0, animation: 'bounceIn', ttsText: 'Read' }, { id: 'el-1', text: 'Draw', emoji: '🎨', delay: 0.4, animation: 'popIn', ttsText: 'Draw' }, { id: 'el-2', text: 'Sing', emoji: '🎤', delay: 0.8, animation: 'scaleIn', ttsText: 'Sing' }, { id: 'el-3', text: 'Dance', emoji: '💃', delay: 1.2, animation: 'slideIn', ttsText: 'Dance' }, { id: 'el-4', text: 'Play', emoji: '🎮', delay: 1.6, animation: 'fadeIn', ttsText: 'Play' } ] }, ttsNarration: '爱好：阅读、画画、唱歌、跳舞、玩耍' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u7l1q1',
            type: 'choice',
            question: '"我喜欢画画"用英语怎么说？',
            options: ['I like drawing', 'I can drawing', 'I am drawing', 'I have drawing'],
            answer: 'I like drawing',
            hint: '表达喜欢用什么句型？',
            explanation: 'I like drawing表示我喜欢画画，like + doing表示喜欢做某事'
          },
          {
            id: 'e2u7l1q2',
            type: 'fill',
            question: 'I like ____ books.（读书）',
            answer: 'reading',
            hint: 'read的ing形式',
            explanation: 'I like reading books表示我喜欢读书'
          },
          {
            id: 'e2u7l1q3',
            type: 'flashcard',
            question: '看弹钢琴的图片，用英语说出爱好',
            answer: 'Playing the piano',
            hint: '弹奏乐器怎么说？',
            explanation: 'Playing the piano表示弹钢琴，乐器前要加the'
          },
          {
            id: 'e2u7l1q4',
            type: 'choice',
            question: 'I like ____. Which is correct?',
            options: ['reading', 'read', 'reads', 'to reading'],
            answer: 'reading',
            hint: 'I like reading中reading是什么形式？',
            explanation: 'I like + 动词ing表达爱好，如I like reading我喜欢读书'
          },
          {
            id: 'e2u7l1q5',
            type: 'fill',
            question: 'I like ____ the piano. 乐器前要加the.（弹）',
            answer: 'playing',
            hint: 'play的ing形式',
            explanation: 'I like playing the piano我喜欢弹钢琴，乐器前要加the'
          },
          {
            id: 'e2u7l1q6',
            type: 'choice',
            question: '【期末真题】哪个句子正确表达了爱好？',
            options: ['I like swimming.', 'I like swim.', 'I like swims.', 'I like to swimming.'],
            answer: 'I like swimming.',
            hint: 'like后面接什么？',
            explanation: 'I like swimming.我喜欢游泳，like + 动词ing表达爱好'
          },
          {
            id: 'e2u7l1q7',
            type: 'drag',
            question: '把词拖到正确位置：I go to school ____ bus.（坐公交）',
            answer: 'by',
            hint: '[Transport-出行方式]（英语二年级-第6单元）',
            explanation: 'I go to school by bus我坐公交上学，回顾出行方式表达'
          }
        ]
      },
      {
        id: 'e2u7l2',
        title: 'like/like doing',
        order: 2,
        teachingMethod: '对比教学法',
        learningObjective: '我能区分like+名词和like+doing两种用法',
        successCriteria: '①能用like+名词造句 ②能用like+doing造句',
        iDo: '家长对比"I like cats"和"I like playing with cats"，说明两种用法',
        weDo: '亲子一起练习，一人说"I like + 名词"，一人说"I like + doing"',
        youDo: '孩子独立用两种方式表达喜好，正确使用like',
        parentTips: '【家长预习】本课核心：like两种用法——like+名词（I like cats）、like+doing（I like playing with cats）。\n共学四步：\n①对话出题：家长问你喜欢什么动物？并说I like cats.，再问喜欢做什么？说I like playing.。\n②孩子应答：孩子应说I like dogs. I like drawing.。\n③答错引导：若孩子搞混，家长当同学一起练！扫描课时发音动画听发音；让孩子点读课件句子卡；家长用孩子喜欢的东西举例边说边比划。\n④快速检测：1.孩子用like+名词造句；2.用like+doing造句；3.说出喜欢的动物和爱好。',
        funElement: '玩"喜好接龙"，用like的不同用法轮流说句子',
        gsapAnimations: ['GSAP:名词/动词对比-splitCompare', 'GSAP:句型框架搭建-frameBuild'],
        images: ['IMG:like用法对比图', 'IMG:like句型卡片'],
        content: [
          { type: 'text', content: 'like有两种用法：I like cats我喜欢猫（like + 名词），I like playing with cats我喜欢和猫玩（like + doing）', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: I like music.\n小红: I like listening to music!\n小明: I like ice cream.\n小红: I like eating ice cream! Both are correct!', label: 'like两种用法对话', animationType: 'reveal' },
          { type: 'example', content: 'I like cats — 我喜欢猫（+名词）\nI like playing with cats — 我喜欢和猫玩（+doing）\nI like music — 我喜欢音乐（+名词）\nI like playing football — 我喜欢踢足球（+doing）', label: 'like两种用法', animationType: 'typewriter' },
          { type: 'tip', content: 'like + 名词 = 喜欢某物，like + 动词ing = 喜欢做某事。两种说法都正确！', label: '语法提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'e2u7l2q1',
            type: 'choice',
            question: '"我喜欢冰淇淋"用哪种like句型？',
            options: ['I like ice cream', 'I like eating ice cream', 'Both are correct', 'Neither is correct'],
            answer: 'Both are correct',
            hint: '两种说法都可以吗？',
            explanation: 'I like ice cream和I like eating ice cream都正确，前者喜欢东西，后者喜欢做某事'
          },
          {
            id: 'e2u7l2q2',
            type: 'fill',
            question: 'I like ____ football.（踢足球）',
            answer: 'playing',
            hint: 'play的ing形式',
            explanation: 'I like playing football表示我喜欢踢足球，like + doing'
          },
          {
            id: 'e2u7l2q3',
            type: 'drag',
            question: '把词拖到正确位置：I like ____（音乐）',
            answer: 'music',
            hint: 'like后面直接加名词',
            explanation: 'I like music表示我喜欢音乐，like后面直接加名词'
          },
          {
            id: 'e2u7l2q4',
            type: 'choice',
            question: 'Which sentence means you enjoy the animal itself?',
            options: ['I like cats.', 'I like playing with cats.', 'I like to cats.', 'I like plays with cats.'],
            answer: 'I like cats.',
            hint: 'like + 名词和like + doing有什么区别？',
            explanation: 'I like cats喜欢猫（like + 名词），I like playing with cats喜欢和猫玩（like + doing）'
          },
          {
            id: 'e2u7l2q5',
            type: 'fill',
            question: 'I like ____ ice cream. I like eating it!（吃冰淇淋）',
            answer: 'eating',
            hint: 'eat的ing形式',
            explanation: 'I like eating ice cream我喜欢吃冰淇淋，like + doing'
          },
          {
            id: 'e2u7l2q6',
            type: 'choice',
            question: '【期末真题】哪个句子用了like + 名词？',
            options: ['I like music.', 'I like reading.', 'I like swimming.', 'I like dancing.'],
            answer: 'I like music.',
            hint: '哪个like后面是名词？',
            explanation: 'I like music.我喜欢音乐，music是名词，like + 名词'
          },
          {
            id: 'e2u7l2q7',
            type: 'drag',
            question: '把词拖到正确位置：Red light, ____! 红灯停！（停）',
            answer: 'stop',
            hint: '[Transport-交通规则]（英语二年级-第6单元）',
            explanation: 'Red light, stop!红灯停，回顾交通规则'
          }
        ]
      },
      {
        id: 'e2u7l3',
        title: '周末计划',
        order: 3,
        teachingMethod: '情景教学法',
        learningObjective: '我能用On Saturday/Sunday, I will...说周末计划',
        successCriteria: '①能用I will...说周末计划 ②能说出周末2天的安排',
        iDo: '家长说"On Saturday, I will go to the park. On Sunday, I will read books"',
        weDo: '亲子一起讨论周末计划，用英语说出想做的事',
        youDo: '孩子独立用英语说出自己的周末计划',
        parentTips: '【家长预习】本课核心：周末计划On Saturday, I will go to the park.（星期六我要去公园）。\n共学四步：\n①对话出题：家长问周末打算做什么？并说On Saturday, I will read books.。\n②孩子应答：孩子应说On Sunday, I will play.等。\n③答错引导：若孩子说不出，家长当同学一起计划！扫描课时发音动画听发音；让孩子点读课件句子卡；家长和孩子一起计划周末边说边写。\n④快速检测：1.孩子用I will...说计划；2.说星期六的安排；3.说星期天的安排。',
        funElement: '制作"周末计划表"，用英语和图画列出活动',
        gsapAnimations: ['GSAP:日历翻页-calendarFlip', 'GSAP:计划勾选-checkMark'],
        images: ['IMG:周末计划场景', 'IMG:星期词汇卡片'],
        content: [
          { type: 'text', content: 'On Saturday, I will go to the park. 星期六我要去公园。On Sunday, I will read books. 星期天我要读书', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What will you do on Saturday?\n小红: I will go swimming!\n小明: On Sunday, I will visit my grandma.\n小红: That sounds nice!', label: '周末计划对话', animationType: 'reveal' },
          { type: 'example', content: 'Monday — 星期一\nTuesday — 星期二\nWednesday — 星期三\nThursday — 星期四\nFriday — 星期五\nSaturday — 星期六\nSunday — 星期天', label: '星期词汇', animationType: 'bounce' },
          { type: 'tip', content: '星期几前面用介词on！on Monday在星期一，on Saturday在星期六', label: '语法提示', animationType: 'pulse' },
          { type: 'animation', content: '日历翻页动画，周末日期高亮的动画', animationType: 'bounce', animationConfig: { sceneType: 'timeline', title: 'Days of Week', timelineConfig: { steps: [ { text: '1. Monday', emoji: '📅', ttsText: 'Monday', duration: 1.0 }, { text: '2. Tuesday', emoji: '📅', ttsText: 'Tuesday', duration: 1.0 }, { text: '3. Wednesday', emoji: '📅', ttsText: 'Wednesday', duration: 1.0 }, { text: '4. Thursday', emoji: '📅', ttsText: 'Thursday', duration: 1.0 }, { text: '5. Friday', emoji: '📅', ttsText: 'Friday', duration: 1.0 }, { text: '6. Weekend', emoji: '🎉', ttsText: 'Weekend', duration: 1.0 } ] }, ttsNarration: '一周七天：周一到周五上课，周末休息' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u7l3q1',
            type: 'choice',
            question: '"星期六"用英语怎么说？',
            options: ['Saturday', 'Sunday', 'Monday', 'Friday'],
            answer: 'Saturday',
            hint: '周末的第一天',
            explanation: 'Saturday是星期六，周末的第一天'
          },
          {
            id: 'e2u7l3q2',
            type: 'fill',
            question: 'On ____, I will go swimming.（星期天）',
            answer: 'Sunday',
            hint: '周末的最后一天',
            explanation: 'Sunday是星期天，周末的最后一天'
          },
          {
            id: 'e2u7l3q3',
            type: 'drag',
            question: '把时间拖到正确位置：I will visit grandma ____ Saturday.',
            answer: 'on',
            hint: '星期几前面用什么介词？',
            explanation: 'on Saturday表示在星期六，星期几前面用on'
          },
          {
            id: 'e2u7l3q4',
            type: 'choice',
            question: '星期几前面用什么介词？',
            options: ['on', 'in', 'at', 'by'],
            answer: 'on',
            hint: 'on Monday中用了什么介词？',
            explanation: '星期几前面用介词on，如on Saturday在星期六'
          },
          {
            id: 'e2u7l3q5',
            type: 'fill',
            question: 'On ____, I will visit my grandma.（星期天）',
            answer: 'Sunday',
            hint: '周末的最后一天',
            explanation: 'On Sunday在星期天，I will visit my grandma我要去看奶奶'
          },
          {
            id: 'e2u7l3q6',
            type: 'choice',
            question: '【期末真题】Which word shows a future plan?',
            options: ['will', 'am', 'did', 'can'],
            answer: 'will',
            hint: 'will表示什么时间？',
            explanation: 'will表示将要，I will go swimming我将要去游泳'
          },
          {
            id: 'e2u7l3q7',
            type: 'drag',
            question: '把词拖到正确位置：I like ____ books on weekends.（读）',
            answer: 'reading',
            hint: '[Hobbies-爱好表达]（英语二年级-第7单元）',
            explanation: 'I like reading books on weekends我喜欢周末读书，回顾爱好表达'
          }
        ]
      }
    ,
      {
        id: 'e2u7l4',
        title: 'Hobbies Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用Hobbies单元的爱好表达和周末计划',
        successCriteria: '①能用I like+doing说爱好 ②能用I will...说计划',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾Hobbies单元：爱好I like reading/drawing/singing、like两种用法、周末计划on Saturday/Sunday。\n共学四步：\n①对话出题：家长问用英语说你的爱好。。\n②孩子应答：孩子应说I like drawing.。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说爱好。\n④快速检测：1.孩子用I like+doing说爱好；2.用I will...说计划；3.区分like两种用法。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Hobbies单元！我们学了爱好表达I like reading/drawing/singing、like两种用法like+名词/like+doing、周末计划on Saturday/Sunday`, animationType: 'reveal' },
          { type: 'formula', content: `爱好表达公式：
I like + 名词 → I like music.
I like + 动词ing → I like reading.
周末：On Saturday, I will...`, animationType: 'typewriter', label: 'Hobbies公式' },
          { type: 'animation', content: `Hobbies单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Hobbies Review', cardRevealConfig: { cards: [ { front: 'Read', back: '📖', ttsText: 'Read' }, { front: 'Draw', back: '🎨', ttsText: 'Draw' }, { front: 'Sing', back: '🎤', ttsText: 'Sing' }, { front: 'Dance', back: '💃', ttsText: 'Dance' } ] }, ttsNarration: 'Hobbies单元回顾：阅读、画画、唱歌、跳舞' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u7l4q1',
            type: 'choice',
            question: 'Which is the correct form after "like"?',
            options: ['reading', 'read', 'reads', 'to reading'],
            answer: 'reading',
            hint: 'reading是什么形式？',
            explanation: 'I like + 动词ing表达爱好，reading是read的ing形式'
          },
          {
            id: 'e2u7l4q2',
            type: 'fill',
            question: 'I like ____ football with my friends.（踢足球）',
            answer: 'playing',
            hint: 'play的ing形式',
            explanation: 'I like playing football我喜欢踢足球，like + doing'
          },
          {
            id: 'e2u7l4q3',
            type: 'choice',
            question: 'Which sentence means you enjoy the activity of hearing songs?',
            options: ['I like listening to music.', 'I like music.', 'I like to music.', 'I like listen to music.'],
            answer: 'I like listening to music.',
            hint: 'like + 名词和like + doing的区别',
            explanation: 'I like music喜欢音乐（like + 名词），I like listening to music喜欢听音乐（like + doing）'
          },
          {
            id: 'e2u7l4q4',
            type: 'drag',
            question: '把词拖到正确位置：On ____, I will go swimming.（星期六）',
            answer: 'Saturday',
            hint: '周末第一天',
            explanation: 'On Saturday在星期六，I will go swimming我将去游泳'
          },
          {
            id: 'e2u7l4q5',
            type: 'choice',
            question: '【期末真题】哪个句子正确使用了like？',
            options: ['I like drawing.', 'I like draw.', 'I like draws.', 'I like to drawing.'],
            answer: 'I like drawing.',
            hint: 'like后面接什么？',
            explanation: 'I like drawing.我喜欢画画，like + 动词ing表达爱好'
          },
          {
            id: 'e2u7l4q6',
            type: 'fill',
            question: 'I like playing ____ piano. 乐器前要加the.（定冠词）',
            answer: 'the',
            hint: '弹钢琴怎么说？',
            explanation: 'I like playing the piano我喜欢弹钢琴，乐器前要加the'
          },
          {
            id: 'e2u7l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Transport"学的内容？',
            options: ['By bus', 'I like reading', 'I like drawing', 'Goodbye'],
            answer: 'By bus',
            hint: '[Transport]（英语二年级-第6单元）',
            explanation: 'By bus坐公交车，是上一单元Transport的核心内容'
          },
        ]
      },
      {
        id: 'e2u7l5',
        title: 'Hobbies in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在生活中用英语说爱好和周末计划',
        successCriteria: '①能说出自己的爱好 ②能说出周末计划',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把爱好生活化：用英语说出爱好，和朋友分享快乐。\n共学四步：\n①对话出题：家长问周末想做什么？用英语说。。\n②孩子应答：孩子应说I will go to the park.等。\n③答错引导：若孩子说不出，家长当同学一起聊！扫描课时发音动画复习；让孩子点读课件情景卡；家长结合孩子真实爱好边说边做。\n④快速检测：1.孩子说出爱好；2.说周末计划；3.用I like+doing造句。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `爱好让生活更丰富！用英语说出你的爱好，和朋友们分享快乐`, animationType: 'reveal' },
          { type: 'example', content: `场景1：分享爱好 → I like reading. What about you?
场景2：like两种用法 → I like cats. / I like playing with cats.
场景3：周末计划 → On Saturday, I will go swimming.`, animationType: 'bounce', label: 'Hobbies在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u7l5q1',
            type: 'choice',
            question: '朋友问你What do you like?你应该怎么回答？',
            options: ['I like reading.', 'I am reading.', 'I can read.', 'I read books.'],
            answer: 'I like reading.',
            hint: '问你的爱好怎么回答？',
            explanation: 'I like reading.我喜欢读书，用I like + doing回答爱好'
          },
          {
            id: 'e2u7l5q2',
            type: 'fill',
            question: 'On Saturday, I will go ____ in the pool.（游泳）',
            answer: 'swimming',
            hint: 'swim的ing形式',
            explanation: 'I will go swimming我将去游泳，go + doing表示去做某事'
          },
          {
            id: 'e2u7l5q3',
            type: 'choice',
            question: '你想说"我喜欢画画"，应该怎么说？',
            options: ['I like drawing.', 'I can drawing.', 'I am drawing.', 'I like draw.'],
            answer: 'I like drawing.',
            hint: '表达爱好用什么句型？',
            explanation: 'I like drawing.我喜欢画画，like + 动词ing表达爱好'
          },
          {
            id: 'e2u7l5q4',
            type: 'drag',
            question: '把词拖到正确场景：I like ____ to music.（听）',
            answer: 'listening',
            hint: 'listen的ing形式',
            explanation: 'I like listening to music我喜欢听音乐，listen加ing'
          },
          {
            id: 'e2u7l5q5',
            type: 'choice',
            question: '【期末真题】周末小明想告诉妈妈他的计划，应该怎么说？',
            options: ['I will go to the park on Saturday.', 'I like the park.', 'I can go to the park.', 'I go to the park.'],
            answer: 'I will go to the park on Saturday.',
            hint: '计划用什么时态？',
            explanation: 'I will go to the park on Saturday.星期六我将去公园，用will表达计划'
          },
          {
            id: 'e2u7l5q6',
            type: 'fill',
            question: 'I like cats. I like ____ with cats too!（玩）',
            answer: 'playing',
            hint: 'play的ing形式',
            explanation: 'I like playing with cats我喜欢和猫玩，like + doing'
          },
          {
            id: 'e2u7l5q7',
            type: 'choice',
            question: '结合"Transport"和"Hobbies"，哪个句子把两个主题联系起来？',
            options: ['I like riding a bike to the park.', 'I like reading and Bus', 'Bus and reading', 'None'],
            answer: 'I like riding a bike to the park.',
            hint: '[Transport]（英语二年级-第6单元）',
            explanation: 'I like riding a bike to the park我喜欢骑车去公园，把交通和爱好联系起来'
          },
        ]
      }]
  },
  {
    id: 'e2u8',
    title: 'Festival',
    subtitle: '快乐的节日，一起庆祝吧',
    order: 8,
    lessons: [
      {
        id: 'e2u8l1',
        title: '节日词汇',
        order: 1,
        teachingMethod: '视觉化教学法',
        learningObjective: '我能说出Christmas/New Year/Spring Festival等节日名称',
        successCriteria: '①能说出4个节日的英语 ②能说出每个节日的一个特点',
        iDo: '家长展示节日图片，说"Christmas, New Year, Mid-Autumn Festival, Spring Festival"',
        weDo: '亲子一起看节日图片，说出英语名称，讨论节日特色',
        youDo: '孩子独立说出主要节日的英语名称，描述节日特色',
        parentTips: '【家长预习】本课核心：节日Christmas（圣诞节）、New Year（新年）、Mid-Autumn Festival（中秋节）、Spring Festival（春节）。\n共学四步：\n①对话出题：家长问你知道哪些节日？并说Christmas!。\n②孩子应答：孩子应说Christmas, New Year!等。\n③答错引导：若孩子说不出，家长当同学一起想节日！扫描课时发音动画听发音；让孩子点读课件节日卡；家长结合过节经历边说边比划。\n④快速检测：1.孩子说出4个节日；2.说出春节特点；3.说出最喜欢的节日。',
        funElement: '制作"节日日历"，标注每个节日的英语名称',
        gsapAnimations: ['GSAP:烟花绽放-firework', 'GSAP:灯笼摇曳-lanternSway'],
        images: ['IMG:各种节日插图', 'IMG:节日词汇卡片'],
        content: [
          { type: 'text', content: 'Christmas圣诞节、New Year新年、Mid-Autumn Festival中秋节、Spring Festival春节，每个节日都有特别的庆祝方式！', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: What\'s your favorite festival?\n小红: I like Christmas! We get gifts!\n小明: I like Spring Festival! We eat dumplings!\n小红: Happy New Year!', label: '节日对话', animationType: 'reveal' },
          { type: 'example', content: 'Christmas — 圣诞节\nNew Year — 新年\nMid-Autumn Festival — 中秋节\nSpring Festival — 春节\nDragon Boat Festival — 端午节\nHalloween — 万圣节', label: '节日词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Festival是"节日"的意思，中国节日通常用Festival结尾，如Spring Festival春节', label: '构词提示', animationType: 'pulse' },
          { type: 'animation', content: '烟花绽放、灯笼摇曳的节日动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Festival', sceneBuildConfig: { sceneName: 'Festival', elements: [ { id: 'el-0', text: 'Fireworks', emoji: '🎆', delay: 0, animation: 'popIn', ttsText: 'Fireworks' }, { id: 'el-1', text: 'Lantern', emoji: '🏮', delay: 0.4, animation: 'bounceIn', ttsText: 'Lantern' }, { id: 'el-2', text: 'Festival', emoji: '🎉', delay: 0.8, animation: 'scaleIn', ttsText: 'Festival' } ] }, ttsNarration: '节日：烟花、灯笼、庆祝' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u8l1q1',
            type: 'choice',
            question: '"圣诞节"用英语怎么说？',
            options: ['Christmas', 'Easter', 'Halloween', 'Thanksgiving'],
            answer: 'Christmas',
            hint: '12月25日的节日',
            explanation: 'Christmas是圣诞节，12月25日，有圣诞树和礼物'
          },
          {
            id: 'e2u8l1q2',
            type: 'fill',
            question: 'Happy ____ Year!（新年）',
            answer: 'New',
            hint: '新年快乐的英语',
            explanation: 'Happy New Year!表示新年快乐'
          },
          {
            id: 'e2u8l1q3',
            type: 'flashcard',
            question: '看中秋节图片，说出英语名称',
            answer: 'Mid-Autumn Festival',
            hint: '吃月饼赏月的节日',
            explanation: 'Mid-Autumn Festival是中秋节，吃月饼赏月'
          },
          {
            id: 'e2u8l1q4',
            type: 'choice',
            question: '哪个节日会收到礼物？',
            options: ['Christmas', 'Mid-Autumn Festival', 'Dragon Boat Festival', 'Spring Festival'],
            answer: 'Christmas',
            hint: '哪个节日有圣诞老人送礼物？',
            explanation: 'Christmas圣诞节，Santa Claus圣诞老人会送礼物'
          },
          {
            id: 'e2u8l1q5',
            type: 'fill',
            question: 'Happy ____ Year! 新年快乐！（新）',
            answer: 'New',
            hint: '新年快乐的英语',
            explanation: 'Happy New Year!新年快乐，New是新'
          },
          {
            id: 'e2u8l1q6',
            type: 'choice',
            question: '【期末真题】哪个是中国传统节日？',
            options: ['Spring Festival', 'Christmas', 'Halloween', 'Thanksgiving'],
            answer: 'Spring Festival',
            hint: '哪个节日是中国特有的？',
            explanation: 'Spring Festival春节是中国传统节日，其他是西方节日'
          },
          {
            id: 'e2u8l1q7',
            type: 'drag',
            question: '把词拖到正确位置：I like ____ football on weekends.（踢）',
            answer: 'playing',
            hint: '[Hobbies-爱好表达]（英语二年级-第7单元）',
            explanation: 'I like playing football我喜欢踢足球，回顾爱好表达'
          }
        ]
      },
      {
        id: 'e2u8l2',
        title: '圣诞新年',
        order: 2,
        teachingMethod: '文化体验教学法',
        learningObjective: '我能用Merry Christmas!表达圣诞祝福并说出圣诞元素',
        successCriteria: '①能说Merry Christmas! ②能说出3个圣诞元素英语',
        iDo: '家长介绍圣诞和新年习俗，说"We decorate the tree. We give gifts. We sing songs"',
        weDo: '亲子一起制作圣诞贺卡，用英语写祝福语',
        youDo: '孩子独立用英语说出圣诞和新年习俗，写一张英语贺卡',
        parentTips: '【家长预习】本课核心：圣诞Merry Christmas!（圣诞快乐）、Santa Claus（圣诞老人）、Christmas Tree（圣诞树）。\n共学四步：\n①对话出题：家长说Merry Christmas!，看孩子怎么回应。\n②孩子应答：孩子应说Merry Christmas!。\n③答错引导：若孩子说不出，家长当同学一起庆祝！扫描课时发音动画听发音；让孩子点读课件词汇卡；家长结合圣诞装饰边指边说英语。\n④快速检测：1.孩子说Merry Christmas!；2.说出圣诞老人英语；3.说出3个圣诞元素。',
        funElement: '唱《Jingle Bells》和《We Wish You a Merry Christmas》',
        gsapAnimations: ['GSAP:圣诞树装饰-decorateTree', 'GSAP:礼物打开-giftOpen'],
        images: ['IMG:圣诞新年场景', 'IMG:圣诞贺卡模板'],
        content: [
          { type: 'text', content: 'Merry Christmas! 圣诞快乐！Santa Claus圣诞老人会送礼物，Christmas Tree圣诞树闪闪发光', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Merry Christmas!\n小红: Merry Christmas! Here\'s a gift for you!\n小明: Thank you! I love it!\n小红: Let\'s sing Jingle Bells!', label: '圣诞对话', animationType: 'reveal' },
          { type: 'example', content: 'Merry Christmas — 圣诞快乐\nSanta Claus — 圣诞老人\nChristmas tree — 圣诞树\nGift/Present — 礼物\nJingle Bells — 铃儿响叮当', label: '圣诞词汇', animationType: 'bounce' },
          { type: 'tip', content: 'Merry Christmas和Happy New Year都是节日祝福语，Merry用于圣诞，Happy用于新年！', label: '用法提示', animationType: 'pulse' },
          { type: 'animation', content: '圣诞树装饰、礼物打开的动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Christmas', sceneBuildConfig: { sceneName: 'Christmas', elements: [ { id: 'el-0', text: 'Christmas Tree', emoji: '🎄', delay: 0, animation: 'scaleIn', ttsText: 'Christmas tree' }, { id: 'el-1', text: 'Gift', emoji: '🎁', delay: 0.4, animation: 'popIn', ttsText: 'Gift' }, { id: 'el-2', text: 'Santa', emoji: '🎅', delay: 0.8, animation: 'bounceIn', ttsText: 'Santa' } ] }, ttsNarration: '圣诞节：圣诞树、礼物、圣诞老人' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u8l2q1',
            type: 'choice',
            question: '圣诞老人用英语怎么说？',
            options: ['Santa Claus', 'Christmas tree', 'Reindeer', 'Snowman'],
            answer: 'Santa Claus',
            hint: '穿红衣服送礼物的人',
            explanation: 'Santa Claus是圣诞老人，也叫Father Christmas'
          },
          {
            id: 'e2u8l2q2',
            type: 'fill',
            question: 'Merry ____!（圣诞快乐）',
            answer: 'Christmas',
            hint: '圣诞快乐的英语',
            explanation: 'Merry Christmas!表示圣诞快乐'
          },
          {
            id: 'e2u8l2q3',
            type: 'drag',
            question: '把词汇拖到正确位置：圣诞树 = Christmas ____',
            answer: 'Tree',
            hint: '圣诞节的树',
            explanation: 'Christmas Tree是圣诞树，圣诞节的重要装饰'
          },
          {
            id: 'e2u8l2q4',
            type: 'choice',
            question: 'Which greeting is for Christmas?',
            options: ['Merry Christmas', 'Happy New Year', 'Happy Birthday', 'Merry New Year'],
            answer: 'Merry Christmas',
            hint: 'Merry和Happy分别用于哪个节日？',
            explanation: 'Merry用于圣诞Merry Christmas，Happy用于新年Happy New Year'
          },
          {
            id: 'e2u8l2q5',
            type: 'fill',
            question: 'We decorate the Christmas ____ with lights.（树）',
            answer: 'Tree',
            hint: '圣诞节装饰什么？',
            explanation: 'Christmas Tree圣诞树，用灯装饰圣诞树'
          },
          {
            id: 'e2u8l2q6',
            type: 'choice',
            question: '【期末真题】圣诞老人用英语怎么说？',
            options: ['Santa Claus', 'Christmas Tree', 'Gift', 'Snowman'],
            answer: 'Santa Claus',
            hint: '穿红衣服送礼物的人叫什么？',
            explanation: 'Santa Claus是圣诞老人，也叫Father Christmas'
          },
          {
            id: 'e2u8l2q7',
            type: 'drag',
            question: '把词拖到正确位置：Which ____ do you like?（季节）',
            answer: 'season',
            hint: '[Weather-四季]（英语二年级-第2单元）',
            explanation: 'Which season do you like?你喜欢哪个季节？回顾四季表达'
          }
        ]
      },
      {
        id: 'e2u8l3',
        title: '中国节日',
        order: 3,
        teachingMethod: '文化对比教学法',
        learningObjective: '我能用英语介绍春节及吃饺子发红包等习俗',
        successCriteria: '①能说Spring Festival ②能说出2个春节习俗的英语',
        iDo: '家长介绍中国节日，说"Spring Festival is Chinese New Year. We eat dumplings"',
        weDo: '亲子一起对比中西节日，用英语描述中国节日习俗',
        youDo: '孩子独立用英语介绍一个中国节日的习俗',
        parentTips: '【家长预习】本课核心：春节Spring Festival is Chinese New Year! We eat dumplings.（吃饺子）We give red envelopes.（发红包）。\n共学四步：\n①对话出题：家长问春节吃什么？并说We eat dumplings.。\n②孩子应答：孩子应说We eat dumplings!。\n③答错引导：若孩子说不出，家长当同学一起回忆春节！扫描课时发音动画听发音；让孩子点读课件词汇卡；家长结合过春节经历边说边比划。\n④快速检测：1.孩子说Spring Festival；2.说出吃饺子英语；3.说出红包英语。',
        funElement: '画"中国节日长卷"，用英语标注每个节日的特色',
        gsapAnimations: ['GSAP:春联展开-scrollOpen', 'GSAP:红包打开-redEnvelope'],
        images: ['IMG:中国节日场景', 'IMG:春节习俗卡片'],
        content: [
          { type: 'text', content: 'Spring Festival is Chinese New Year! 春节就是中国新年！We eat dumplings我们吃饺子，We give red envelopes我们发红包', animationType: 'reveal' },
          { type: 'dialogue', content: '小明: Happy Spring Festival!\n小红: Happy Chinese New Year!\n小明: We eat dumplings!\n小红: I got a red envelope!', label: '春节对话', animationType: 'reveal' },
          { type: 'example', content: 'Spring Festival — 春节\nDumplings — 饺子\nRed envelope — 红包\nDragon Boat Festival — 端午节\nMid-Autumn Festival — 中秋节\nMooncake — 月饼', label: '中国节日词汇', animationType: 'bounce' },
          { type: 'tip', content: '用英语介绍中国节日，让世界了解我们的文化！Spring Festival = Chinese New Year', label: '文化自信', animationType: 'pulse' },
          { type: 'animation', content: '春联展开、红包打开的中国节日动画', animationType: 'bounce', animationConfig: { sceneType: 'sceneBuild', title: 'Chinese Festival', sceneBuildConfig: { sceneName: 'Chinese Festival', elements: [ { id: 'el-0', text: 'Couplet', emoji: '🧧', delay: 0, animation: 'slideIn', ttsText: 'Couplet' }, { id: 'el-1', text: 'Red Envelope', emoji: '🧧', delay: 0.4, animation: 'popIn', ttsText: 'Red envelope' }, { id: 'el-2', text: 'Firecracker', emoji: '🧨', delay: 0.8, animation: 'bounceIn', ttsText: 'Firecracker' } ] }, ttsNarration: '中国节日：春联、红包、鞭炮' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u8l3q1',
            type: 'choice',
            question: '"春节"用英语怎么说？',
            options: ['Spring Festival', 'Mid-Autumn Festival', 'Dragon Boat Festival', 'Lantern Festival'],
            answer: 'Spring Festival',
            hint: '中国最重要的节日',
            explanation: 'Spring Festival是春节，也叫Chinese New Year'
          },
          {
            id: 'e2u8l3q2',
            type: 'fill',
            question: 'We eat ____ on Spring Festival.（饺子）',
            answer: 'dumplings',
            hint: '春节吃的传统食物',
            explanation: 'dumplings是饺子，春节的传统食物'
          },
          {
            id: 'e2u8l3q3',
            type: 'drag',
            question: '把节日拖到正确位置：端午节 = Dragon ____ Festival',
            answer: 'Boat',
            hint: '赛什么的节日？',
            explanation: 'Dragon Boat Festival是端午节，有赛龙舟的习俗'
          },
          {
            id: 'e2u8l3q4',
            type: 'choice',
            question: '春节又叫什么？',
            options: ['Chinese New Year', 'Chinese Christmas', 'Chinese Halloween', 'Chinese Festival'],
            answer: 'Chinese New Year',
            hint: 'Spring Festival的另一个名字',
            explanation: 'Spring Festival春节也叫Chinese New Year中国新年'
          },
          {
            id: 'e2u8l3q5',
            type: 'fill',
            question: 'We light ____ to celebrate Spring Festival.（鞭炮）',
            answer: 'firecrackers',
            hint: '春节放什么庆祝？',
            explanation: 'firecrackers是鞭炮，春节放鞭炮是传统习俗'
          },
          {
            id: 'e2u8l3q6',
            type: 'choice',
            question: '【期末真题】哪个食物是中秋节的特色？',
            options: ['Mooncake', 'Dumplings', 'Rice', 'Bread'],
            answer: 'Mooncake',
            hint: '中秋节吃什么？',
            explanation: 'Mooncake月饼是中秋节的特色食物'
          },
          {
            id: 'e2u8l3q7',
            type: 'drag',
            question: '把词拖到正确位置：I got a red ____ on Spring Festival!（红包）',
            answer: 'envelope',
            hint: '[Festival-节日词汇]（英语二年级-第8单元）',
            explanation: 'I got a red envelope我收到了红包，回顾节日词汇'
          }
        ]
      }
    ,
      {
        id: 'e2u8l4',
        title: 'Festival Review',
        order: 4,
        teachingMethod: '形成性评价法',
        learningObjective: '我能回顾并运用Festival单元的节日词汇和习俗',
        successCriteria: '①能说出4个节日英语 ②能说出春节的习俗',
        iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
        weDo: '亲子一起完成回顾练习，互相检查掌握情况',
        youDo: '孩子独立完成所有回顾题目，检验学习效果',
        parentTips: '【家长预习】本课回顾Festival单元：节日Christmas/New Year/Mid-Autumn Festival/Spring Festival、圣诞Merry Christmas/Santa Claus、中国节日Spring Festival/dumplings/red envelope。\n共学四步：\n①对话出题：家长问用英语说几个节日。。\n②孩子应答：孩子应说Christmas, Spring Festival!。\n③答错引导：若孩子忘记，家长当同学一起复习！扫描课时发音动画回顾；让孩子点读课件复习卡；家长当同学假装忘了，和孩子比赛说节日。\n④快速检测：1.孩子说出4个节日；2.说圣诞祝福；3.说春节习俗。',
        funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
        gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
        images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
        content: [
          { type: 'text', content: `回顾Festival单元！我们学了节日词汇Christmas/New Year/Mid-Autumn Festival/Spring Festival、圣诞新年Merry Christmas/Santa Claus、中国节日Spring Festival/dumplings/red envelope`, animationType: 'reveal' },
          { type: 'formula', content: `节日表达公式：
Merry Christmas! / Happy New Year!
Happy Spring Festival! / We eat dumplings.`, animationType: 'typewriter', label: 'Festival公式' },
          { type: 'animation', content: `Festival单元回顾动画`, animationType: 'bounce', animationConfig: { sceneType: 'cardReveal', title: 'Festival Review', cardRevealConfig: { cards: [ { front: 'Fireworks', back: '🎆', ttsText: 'Fireworks' }, { front: 'Lantern', back: '🏮', ttsText: 'Lantern' }, { front: 'Christmas', back: '🎄', ttsText: 'Christmas' }, { front: 'Gift', back: '🎁', ttsText: 'Gift' } ] }, ttsNarration: 'Festival单元回顾：烟花、灯笼、圣诞、礼物' } },
        ],
        practiceQuestions: [
          {
            id: 'e2u8l4q1',
            type: 'choice',
            question: '圣诞节用英语怎么说？',
            options: ['Christmas', 'Spring Festival', 'Mid-Autumn Festival', 'Dragon Boat Festival'],
            answer: 'Christmas',
            hint: '12月25日的节日',
            explanation: 'Christmas是圣诞节，12月25日'
          },
          {
            id: 'e2u8l4q2',
            type: 'fill',
            question: 'Merry ____! 圣诞快乐！（圣诞）',
            answer: 'Christmas',
            hint: '圣诞快乐怎么说？',
            explanation: 'Merry Christmas!圣诞快乐'
          },
          {
            id: 'e2u8l4q3',
            type: 'choice',
            question: '春节吃什么传统食物？',
            options: ['Dumplings', 'Mooncakes', 'Turkey', 'Bread'],
            answer: 'Dumplings',
            hint: '春节吃什么？',
            explanation: 'Dumplings饺子，春节吃饺子是传统习俗'
          },
          {
            id: 'e2u8l4q4',
            type: 'drag',
            question: '把词拖到正确位置：Happy New ____! 新年快乐！（年）',
            answer: 'Year',
            hint: '新年快乐的英语',
            explanation: 'Happy New Year!新年快乐'
          },
          {
            id: 'e2u8l4q5',
            type: 'choice',
            question: '【期末真题】Which greeting is for New Year?',
            options: ['Happy New Year', 'Merry Christmas', 'Merry New Year', 'Happy Christmas'],
            answer: 'Happy New Year',
            hint: 'Merry和Happy分别用于哪个节日？',
            explanation: 'Merry Christmas圣诞快乐，Happy New Year新年快乐，搭配不同'
          },
          {
            id: 'e2u8l4q6',
            type: 'fill',
            question: 'I got a red ____ on Spring Festival.（红包）',
            answer: 'envelope',
            hint: '红包用英语怎么说？',
            explanation: 'red envelope是红包，春节收红包是传统习俗'
          },
          {
            id: 'e2u8l4q7',
            type: 'choice',
            question: '以下哪个是上一单元"Hobbies"学的内容？',
            options: ['I like reading', 'Christmas', 'New Year', 'Goodbye'],
            answer: 'I like reading',
            hint: '[Hobbies]（英语二年级-第7单元）',
            explanation: 'I like reading我喜欢读书，是上一单元Hobbies的核心内容'
          },
        ]
      },
      {
        id: 'e2u8l5',
        title: 'Festival in Life',
        order: 5,
        teachingMethod: '综合应用教学法',
        learningObjective: '我能在过节时用英语介绍中国节日和习俗',
        successCriteria: '①能用英语介绍一个中国节日 ②能说出节日的习俗',
        iDo: '家长示范在生活中运用本单元英语，说出场景对话',
        weDo: '亲子一起在生活中实践英语，模拟真实场景',
        youDo: '孩子独立在生活中运用英语，完成实际任务',
        parentTips: '【家长预习】本课把节日生活化：用英语介绍中国节日，让世界了解我们的文化。\n共学四步：\n①对话出题：家长问怎么用英语介绍春节？。\n②孩子应答：孩子应说Spring Festival is Chinese New Year.等。\n③答错引导：若孩子说不出，家长当同学一起介绍！扫描课时发音动画复习；让孩子点读课件情景卡；家长结合过节真实经历边说边比划。\n④快速检测：1.孩子介绍一个节日；2.说出节日习俗；3.说Merry Christmas。',
        funElement: '举办"英语生活秀"，用英语完成一个生活任务',
        gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
        images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
        content: [
          { type: 'text', content: `节日是文化的体现！用英语介绍中国节日，让世界了解我们的文化`, animationType: 'reveal' },
          { type: 'example', content: `场景1：圣诞节 → Merry Christmas! Here's a gift for you!
场景2：新年 → Happy New Year!
场景3：春节 → Happy Spring Festival! We eat dumplings!`, animationType: 'bounce', label: 'Festival在生活中的应用' },
          { type: 'tip', content: `每天在生活中运用英语，坚持下来你会越来越自信！`, animationType: 'pulse', label: '生活提示' },
        ],
        practiceQuestions: [
          {
            id: 'e2u8l5q1',
            type: 'choice',
            question: '圣诞节见到朋友，应该说什么祝福语？',
            options: ['Merry Christmas!', 'Happy Spring Festival!', 'Good morning!', 'Goodbye!'],
            answer: 'Merry Christmas!',
            hint: '圣诞节的祝福语是什么？',
            explanation: 'Merry Christmas!圣诞快乐，是圣诞节的祝福语'
          },
          {
            id: 'e2u8l5q2',
            type: 'fill',
            question: 'We eat ____ on Spring Festival. 我们春节吃饺子。（饺子）',
            answer: 'dumplings',
            hint: '春节吃的传统食物',
            explanation: 'dumplings是饺子，春节吃饺子是传统习俗'
          },
          {
            id: 'e2u8l5q3',
            type: 'choice',
            question: '中秋节你想用英语介绍月饼，应该怎么说？',
            options: ['This is a mooncake.', 'This is a dumpling.', 'This is a red envelope.', 'This is a gift.'],
            answer: 'This is a mooncake.',
            hint: '月饼用英语怎么说？',
            explanation: 'This is a mooncake.这是月饼，mooncake是月饼'
          },
          {
            id: 'e2u8l5q4',
            type: 'drag',
            question: '把词拖到正确场景：Happy ____ Year! 新年快乐！（新）',
            answer: 'New',
            hint: '新年快乐怎么说？',
            explanation: 'Happy New Year!新年快乐'
          },
          {
            id: 'e2u8l5q5',
            type: 'choice',
            question: '【期末真题】用英语向外国朋友介绍春节，应该怎么说？',
            options: ['Spring Festival is Chinese New Year.', 'Christmas is Chinese New Year.', 'Spring Festival is Christmas.', 'Chinese New Year is Halloween.'],
            answer: 'Spring Festival is Chinese New Year.',
            hint: '春节用英语怎么介绍？',
            explanation: 'Spring Festival is Chinese New Year.春节就是中国新年'
          },
          {
            id: 'e2u8l5q6',
            type: 'fill',
            question: 'Santa Claus gives ____ to children on Christmas.（礼物）',
            answer: 'gifts',
            hint: '圣诞老人送什么？',
            explanation: 'Santa Claus gives gifts圣诞老人送礼物，gifts是礼物'
          },
          {
            id: 'e2u8l5q7',
            type: 'choice',
            question: '结合"Hobbies"和"Festival"，哪个句子把两个主题联系起来？',
            options: ['I like singing Christmas songs.', 'I like reading and Christmas', 'Christmas and reading', 'None'],
            answer: 'I like singing Christmas songs.',
            hint: '[Hobbies]（英语二年级-第7单元）',
            explanation: 'I like singing Christmas songs.我喜欢唱圣诞歌，把爱好和节日联系起来'
          },
        ]
      }]
  }
]
