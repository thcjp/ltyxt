import type { Unit } from '@/types'

export const englishGrade6: Unit[] = [
  // ==================== 第一单元：How Do You Go There ====================
  {
    id: 'e6u1',
    title: 'How Do You Go There',
    subtitle: '交通方式词汇与How do you go to...?句型',
    order: 1,
    lessons: [
      {
        id: 'e6u1l1',
        title: '交通方式词汇：bus/subway/bike/walk',
        order: 1,
        teachingMethod: 'TPR全身反应法+图片指示',
        iDo: '家长出示交通工具图片说单词："This is a bus. This is a subway. I go by bike. I walk to school."配合手势做动作',
        weDo: '亲子一起看图说词，家长说中文孩子说英文，再互换角色，玩"交通方式猜猜猜"游戏',
        youDo: '孩子独立辨认交通方式词汇，看图说词并造简单句子',
        parentTips: '共学四步（家长当陪练，不当老师）：①对话出题：家长指窗外问“How do you go to school?”②孩子应答：“I go to school by bus.”③答错引导：若孩子说不出交通工具词，家长先教by bus/car/bike/subway，再问“by什么”。④快速听写：路上看到车就问“英语怎么说”，孩子抢答。',
        funElement: '玩"交通达人"游戏，家长做动作（踩踏板/握方向盘/起步），孩子快速说出对应的交通方式英语',
        gsapAnimations: ['GSAP:交通工具卡片翻转-cardReveal', 'GSAP:单词逐个弹出-stagger', 'GSAP:图标缩放出现-starFlyIn'],
        images: ['IMG:illustration|交通工具图|500x300|可爱卡通风|png|4种交通', 'IMG:illustration|上学交通场景|500x300|可爱卡通风|png|上学路线'],
        content: [
          { type: 'text', content: '每天我们都要出门，去学校、去公园、去医院。你用什么交通工具呢？今天来学习交通方式的英文：bus（公交车）、subway（地铁）、bike（自行车）、walk（步行）。', animationType: 'reveal' },
          { type: 'example', content: 'bus — 公交车\nsubway — 地铁\nbike — 自行车\nwalk — 步行', label: '交通方式词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: How do you go to school?\nAmy: I go by bus. How about you?\nTom: I go by bike.\nAmy: Wow, that\'s cool!', label: '上学交通对话', animationType: 'timeline' },
          { type: 'tip', content: 'by表示"乘坐"，后面直接加交通工具：by bus（坐公交）、by subway（坐地铁）、by bike（骑自行车）。walk前面不用by，直接说I walk（我步行）。', label: 'by的用法', animationType: 'pulse' },
          { type: 'example', content: 'I go by bus. 我坐公交车去。\nI go by subway. 我坐地铁去。\nI go by bike. 我骑自行车去。\nI walk. 我步行去。', label: '句型操练', animationType: 'sequence' },
          { type: 'tip', content: 'by后面加交通工具表示方式，不加冠词the/a。by bus（正确），by a bus（错误）。但walk是动词，直接作谓语。', label: '语法辨析', animationType: 'pulse' },
          { type: 'animation', content: '交通工具卡片翻转动画，翻转后揭示交通方式词汇和对应emoji', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Transportation', cardRevealConfig: { cards: [ { front: 'bus', back: '🚌', ttsText: 'bus, 公交车' }, { front: 'subway', back: '🚇', ttsText: 'subway, 地铁' }, { front: 'bike', back: '🚲', ttsText: 'bike, 自行车' }, { front: 'walk', back: '🚶', ttsText: 'walk, 步行' } ] }, ttsNarration: '交通方式：公交车、地铁、自行车、步行' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u1l1q1',
            type: 'choice',
            question: 'I go to school by ____. (a big vehicle with many seats)',
            options: ['bus', 'bike', 'book', 'bag'],
            answer: 'bus',
            hint: '有很多座位的大车',
            explanation: 'bus是公交车，有很多座位的大型交通工具，I go by bus表示坐公交车去'
          },
          {
            id: 'e6u1l1q2',
            type: 'choice',
            question: 'I go by ____. (an underground train)',
            options: ['subway', 'walk', 'sun', 'sky'],
            answer: 'subway',
            hint: '地下跑的火车',
            explanation: 'subway是地铁，地下运行的火车，I go by subway表示坐地铁去'
          },
          {
            id: 'e6u1l1q3',
            type: 'fill',
            question: 'I ____ to school. (on foot, not by bus)',
            answer: 'walk',
            acceptableAnswers: ['Walk'],
            hint: '用脚走路，不用by',
            explanation: 'walk是步行，表示走路去某地。walk前面不用by，直接说I walk'
          },
          {
            id: 'e6u1l1q4',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['I go by bus.', 'I go by a bus.', 'I go by the bus.', 'I walk by foot.'],
            answer: 'I go by bus.',
            hint: 'by后面直接加交通工具，不加冠词；步行不说by foot',
            explanation: 'by + 交通工具，中间不加the/a，所以by bus正确。步行用I walk，不用by foot'
          },
          {
            id: 'e6u1l1q5',
            type: 'choice',
            question: 'Which one does NOT use "by" before it?',
            options: ['walk', 'bus', 'subway', 'bike'],
            answer: 'walk',
            hint: '哪个词前面不加by？',
            explanation: 'walk是动词，直接作谓语说I walk；bus/subway/bike是交通工具名词，前面用by表示乘坐'
          },
          {
            id: 'e6u1l1q6',
            type: 'fill',
            question: 'I go to school by ____. (two wheels, you ride it)',
            answer: 'bike',
            acceptableAnswers: ['Bike', 'bicycle'],
            hint: '两个轮子、你骑着走的交通工具',
            explanation: 'bike是自行车，两个轮子靠骑行，I go by bike表示骑自行车去'
          },
          {
            id: 'e6u1l1q7',
            type: 'fill',
            question: 'A ____ has two wheels. You ride it to school. (bike)',
            answer: 'bike',
            acceptableAnswers: ['Bike'],
            hint: '[交通工具词汇]（英语二年级-第6单元）',
            explanation: 'bike是自行车，有两个轮子靠骑行，是二年级Transport单元学过的交通工具词汇'
          }
        ]
      },
      {
        id: 'e6u1l2',
        title: 'How do you go to school? 句型',
        order: 2,
        teachingMethod: '情境对话法',
        iDo: '家长示范问答："How do you go to school?" "I go by bus."配合指认动作和交通工具卡片',
        weDo: '亲子一起做问答练习，家长问孩子答，再互换角色，玩"交通问答接龙"游戏',
        youDo: '孩子独立用How do you go to...?句型询问家人或玩偶的出行方式',
        parentTips: '可以用家里的地图或上学路线来练习，指着地点问How do you go to...?',
        funElement: '玩"问答接力"游戏，一人问How do you go to...?另一人回答，越快越好',
        gsapAnimations: ['GSAP:交通问答展开-timeline', 'GSAP:对话气泡弹出-stagger', 'GSAP:问答配对高亮-highlight'],
        images: ['IMG:illustration|上学交通场景|500x300|可爱卡通风|png|上学路线', 'IMG:illustration|问答对话气泡|500x300|可爱卡通风|png|对话气泡'],
        content: [
          { type: 'text', content: 'How do you go to school? 用来询问对方怎样去某地。回答时用I go by + 交通工具，或I walk。', animationType: 'reveal' },
          { type: 'example', content: 'How do you go to school? — 你怎样去上学？\nI go by bus. — 我坐公交去。\nHow do you go to the park? — 你怎样去公园？\nI go by bike. — 我骑自行车去。', label: '问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: How do you go to school, Amy?\nAmy: I go by subway. And you?\nTom: I walk. My home is near.\nAmy: That\'s good exercise!', label: '询问出行方式', animationType: 'timeline' },
          { type: 'tip', content: 'How do you go to + 地点？用来问去某地的方式。回答可以用I go by...或I walk。地点是school时，to不能省略。', label: '句型结构', animationType: 'pulse' },
          { type: 'example', content: 'How do you go to school? I go by bus.\nHow do you go to the zoo? I go by subway.\nHow do you go to the hospital? I walk.', label: '句型操练', animationType: 'sequence' },
          { type: 'tip', content: '问"你"用How do you...？问"他/她"用How does he/she...？第三人称要用does，动词用原形go。', label: '人称变化', animationType: 'pulse' },
          { type: 'animation', content: '交通问答逐步展开动画，配合时间线展示问答过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'How do you go to school?', timelineConfig: { steps: [ { text: 'How do you go to school?', ttsNarration: 'How do you go to school?' }, { text: 'I go by bus.', ttsNarration: 'I go by bus.' }, { text: 'How do you go to the park?', ttsNarration: 'How do you go to the park?' }, { text: 'I go by bike.', ttsNarration: 'I go by bike.' } ] }, ttsNarration: '询问出行：你怎样去上学？我坐公交。你怎样去公园？我骑自行车。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u1l2q1',
            type: 'choice',
            question: 'How do you go to school? — I go ____ bus.',
            options: ['by', 'on', 'in', 'at'],
            answer: 'by',
            hint: '表示乘坐交通工具用哪个介词？',
            explanation: '表示乘坐交通工具用by，by bus表示坐公交车'
          },
          {
            id: 'e6u1l2q2',
            type: 'choice',
            question: 'How do you go to the park? — I ____.',
            options: ['walk', 'walking', 'walks', 'to walk'],
            answer: 'walk',
            hint: '主语I后面用什么形式的动词？',
            explanation: '主语I后面用动词原形walk，I walk表示我步行去'
          },
          {
            id: 'e6u1l2q3',
            type: 'fill',
            question: '____ do you go to school? — I go by subway.',
            answer: 'How',
            hint: '询问出行方式的疑问词',
            explanation: 'How用来询问方式，How do you go to school?问你怎样去上学'
          },
          {
            id: 'e6u1l2q4',
            type: 'choice',
            question: 'How ____ she go to school? — She goes by bike.',
            options: ['does', 'do', 'is', 'are'],
            answer: 'does',
            hint: '主语是she（第三人称单数），用哪个助动词？',
            explanation: '主语是she第三人称单数，疑问句用does，动词用原形go：How does she go to school?'
          },
          {
            id: 'e6u1l2q5',
            type: 'fill',
            question: 'How do you go to ____ zoo? — I go by subway.',
            answer: 'the',
            acceptableAnswers: ['The'],
            hint: 'zoo是特定地点，前面要加什么？',
            explanation: 'the zoo是特指那个动物园，用定冠词the。How do you go to the zoo?'
          },
          {
            id: 'e6u1l2q6',
            type: 'choice',
            question: 'Tom asks Amy about her way to school. Which is the BEST question?',
            options: ['How do you go to school?', 'What do you go to school?', 'Where do you go to school?', 'Do you go to school?'],
            answer: 'How do you go to school?',
            hint: '要问"怎样"去，用哪个疑问词？',
            explanation: '询问出行方式用How，How do you go to school?问的是怎样去上学'
          },
          {
            id: 'e6u1l2q7',
            type: 'fill',
            question: 'I go to school from Monday to ____. (星期五)',
            answer: 'Friday',
            acceptableAnswers: ['friday'],
            hint: '[星期词汇]（英语五年级-第2单元）',
            explanation: '上学通常从星期一Monday到星期五Friday，星期词汇是五年级My Days of Week单元学的'
          }
        ]
      },
      {
        id: 'e6u1l3',
        title: '频率副词：usually/sometimes/never',
        order: 3,
        teachingMethod: '支架式教学法',
        iDo: '家长示范用频率副词："I usually go by bus. I sometimes walk. I never go by subway."配合手势表示频率高低',
        weDo: '亲子一起用频率副词造句，家长说中文孩子说英文，再互换角色',
        youDo: '孩子独立用频率副词描述自己的出行习惯',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“频率副词从高到低怎么排？”②孩子应答：“usually > often > sometimes > never。”③答错引导：若孩子排错，家长用手势比划——usually几乎总做、never从不做，让孩子对应排序。④快速出题：家长说一个活动如“吃冰淇淋”，孩子用4个频率词各造一句。',
        funElement: '玩"频率排序"游戏，把频率副词卡片从高到低排列，说句子比赛',
        gsapAnimations: ['GSAP:频率副词排列-timeline', 'GSAP:频率条出现-sequence', 'GSAP:副词高亮-highlight'],
        images: ['IMG:illustration|频率副词图|500x200|教学风|png|频率条', 'IMG:illustration|出行频率场景|500x300|可爱卡通风|png|频率场景'],
        content: [
          { type: 'text', content: '频率副词告诉我们做某事的频繁程度：usually（通常）、often（经常）、sometimes（有时）、never（从不）。它们放在动词前面。', animationType: 'reveal' },
          { type: 'example', content: 'usually — 通常（约80%）\noften — 经常（约60%）\nsometimes — 有时（约30%）\nnever — 从不（0%）', label: '频率副词（从高到低）', animationType: 'sequence' },
          { type: 'dialogue', content: 'Tom: How do you usually go to school?\nAmy: I usually go by bus. Sometimes I walk.\nTom: Do you ever go by subway?\nAmy: No, I never go by subway.', label: '谈论出行频率', animationType: 'timeline' },
          { type: 'tip', content: '频率副词放在实义动词前面：I usually go by bus.放在be动词后面：She is usually kind.位置要记牢。', label: '副词位置', animationType: 'pulse' },
          { type: 'example', content: 'I usually go by bus. 我通常坐公交去。\nI often ride a bike. 我经常骑自行车。\nI sometimes walk. 我有时步行。\nI never go by subway. 我从不坐地铁。', label: '频率副词造句', animationType: 'sequence' },
          { type: 'tip', content: 'never表示从不，本身已是否定意思，后面不用not。I never go（正确），I never don\'t go（错误）。', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '频率副词从高到低排列动画，配合时间线展示频率递减', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Frequency Adverbs', timelineConfig: { steps: [ { text: 'usually 通常', ttsNarration: 'usually, 通常' }, { text: 'often 经常', ttsNarration: 'often, 经常' }, { text: 'sometimes 有时', ttsNarration: 'sometimes, 有时' }, { text: 'never 从不', ttsNarration: 'never, 从不' } ] }, ttsNarration: '频率副词从高到低：通常、经常、有时、从不' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u1l3q1',
            type: 'choice',
            question: 'I ____ go to school by bus. (about 80% of the time)',
            options: ['usually', 'sometimes', 'never', 'rarely'],
            answer: 'usually',
            hint: '约80%的频率，表示"通常"',
            explanation: 'usually表示通常，约80%的频率，是最高的频率副词'
          },
          {
            id: 'e6u1l3q2',
            type: 'choice',
            question: 'I ____ go by subway. (0% of the time)',
            options: ['never', 'usually', 'always', 'often'],
            answer: 'never',
            hint: '0%的频率，表示"从不"',
            explanation: 'never表示从不，频率为0%，表示从来不做某事'
          },
          {
            id: 'e6u1l3q3',
            type: 'fill',
            question: 'I ____ walk to school. (about 30% of the time, 有时)',
            answer: 'sometimes',
            acceptableAnswers: ['Sometimes'],
            hint: '约30%的频率，表示"有时"',
            explanation: 'sometimes表示有时，约30%的频率，介于经常和从不之间'
          },
          {
            id: 'e6u1l3q4',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['I usually go by bus.', 'I go usually by bus.', 'Usually I go by bus is.', 'I go by bus usually always.'],
            answer: 'I usually go by bus.',
            hint: '频率副词放在实义动词的什么位置？',
            explanation: '频率副词放在实义动词前面，所以I usually go by bus正确'
          },
          {
            id: 'e6u1l3q5',
            type: 'choice',
            question: 'Put the adverbs in order from MOST to LEAST frequent.',
            options: ['usually > often > sometimes > never', 'never > sometimes > often > usually', 'sometimes > usually > never > often', 'often > never > usually > sometimes'],
            answer: 'usually > often > sometimes > never',
            hint: '从最高频率到最低频率排列',
            explanation: '频率从高到低：usually(通常) > often(经常) > sometimes(有时) > never(从不)'
          },
          {
            id: 'e6u1l3q6',
            type: 'fill',
            question: 'I ____ go by subway. (从不) I don\'t like it.',
            answer: 'never',
            acceptableAnswers: ['Never'],
            hint: '表示"从不"，本身已是否定，后面不加not',
            explanation: 'never表示从不，本身已含否定意义，直接说I never go by subway'
          },
          {
            id: 'e6u1l3q7',
            type: 'choice',
            question: 'Which day comes right after Monday?',
            options: ['Tuesday', 'Sunday', 'Friday', 'Wednesday'],
            answer: 'Tuesday',
            hint: '[星期顺序]（英语五年级-第2单元）',
            explanation: 'Monday星期一后面是Tuesday星期二，星期顺序是五年级My Days of Week单元学的知识点'
          }
        ]
      },
      {
        id: 'e6u1l4',
        title: '交通安全——Stop and wait',
        order: 4,
        teachingMethod: '跨学科：安全+英语',
        iDo: '家长介绍交通规则："Stop at a red light. Wait at a yellow light. Go at a green light."配合红绿灯道具演示',
        weDo: '亲子一起演交通规则情景剧，家长举灯孩子说英语做动作',
        youDo: '孩子独立用英语说出交通规则并做对应动作',
        parentTips: '结合真实过马路场景练习，红灯停、黄灯等、绿灯行，把安全和英语结合',
        funElement: '玩"红绿灯"游戏，家长说灯的颜色，孩子说英语并做停/等/行动作',
        gsapAnimations: ['GSAP:红绿灯场景构建-sceneBuild', 'GSAP:交通规则步骤-timeline', 'GSAP:规则高亮-highlight'],
        images: ['IMG:illustration|交通信号灯|500x300|可爱卡通风|png|红黄绿灯', 'IMG:illustration|过马路场景|500x300|可爱卡通风|png|安全过马路'],
        content: [
          { type: 'text', content: '过马路要注意交通安全。Stop at a red light.（红灯停）Wait at a yellow light.（黄灯等）Go at a green light.（绿灯行）', animationType: 'reveal' },
          { type: 'example', content: 'Stop at a red light. — 红灯停\nWait at a yellow light. — 黄灯等\nGo at a green light. — 绿灯行', label: '交通规则', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Mum: Look! The light is red.\nTom: Stop at a red light.\nMum: Now it\'s yellow.\nTom: Wait at a yellow light.\nMum: Green! We can go.\nTom: Go at a green light!', label: '过马路对话', animationType: 'timeline' },
          { type: 'tip', content: 'Stop/Wait/Go都是动词，表示动作。at a ... light表示"在...灯时"。red/yellow/green是颜色，修饰light。', label: '句型结构', animationType: 'pulse' },
          { type: 'example', content: 'red — 红色\nyellow — 黄色\ngreen — 绿色\nlight — 灯', label: '颜色与灯', animationType: 'sequence' },
          { type: 'tip', content: '交通安全很重要！记住：红灯停、黄灯等、绿灯行。还要走斑马线（crosswalk），左右看（look left and right）。', label: '安全小贴士', animationType: 'pulse' },
          { type: 'animation', content: '红绿灯场景逐步构建动画，红黄绿灯依次出现并配规则', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'Traffic Lights', sceneBuildConfig: { sceneName: 'Traffic Safety', elements: [ { id: 'el-0', text: 'red', emoji: '🔴', delay: 0, animation: 'bounceIn', ttsText: 'red light, stop' }, { id: 'el-1', text: 'yellow', emoji: '🟡', delay: 0.5, animation: 'bounceIn', ttsText: 'yellow light, wait' }, { id: 'el-2', text: 'green', emoji: '🟢', delay: 1, animation: 'bounceIn', ttsText: 'green light, go' } ] }, ttsNarration: '交通规则：红灯停、黄灯等、绿灯行' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u1l4q1',
            type: 'choice',
            question: '____ at a red light.',
            options: ['Stop', 'Go', 'Wait', 'Run'],
            answer: 'Stop',
            hint: '红灯要做什么？',
            explanation: '红灯要停下，Stop at a red light.红灯停'
          },
          {
            id: 'e6u1l4q2',
            type: 'choice',
            question: 'Go at a ____ light.',
            options: ['green', 'red', 'yellow', 'blue'],
            answer: 'green',
            hint: '什么灯可以走？',
            explanation: '绿灯可以走，Go at a green light.绿灯行'
          },
          {
            id: 'e6u1l4q3',
            type: 'fill',
            question: '____ at a yellow light. (等)',
            answer: 'Wait',
            acceptableAnswers: ['wait'],
            hint: '黄灯要做什么？',
            explanation: '黄灯要等一等，Wait at a yellow light.黄灯等'
          },
          {
            id: 'e6u1l4q4',
            type: 'choice',
            question: 'Which is the RIGHT order of traffic rules?',
            options: ['Stop at red, wait at yellow, go at green.', 'Go at red, stop at yellow, wait at green.', 'Wait at red, go at yellow, stop at green.', 'Stop at green, wait at red, go at yellow.'],
            answer: 'Stop at red, wait at yellow, go at green.',
            hint: '红灯停、黄灯等、绿灯行',
            explanation: '正确顺序：红灯停Stop at red，黄灯等Wait at yellow，绿灯行Go at green'
          },
          {
            id: 'e6u1l4q5',
            type: 'choice',
            question: 'The light is green. What should you do?',
            options: ['Go at a green light.', 'Stop at a green light.', 'Wait at a green light.', 'Run at a green light.'],
            answer: 'Go at a green light.',
            hint: '绿灯亮了应该做什么？',
            explanation: '绿灯行，绿灯亮了应该走，Go at a green light'
          },
          {
            id: 'e6u1l4q6',
            type: 'fill',
            question: 'Stop ____ a red light. (在...时)',
            answer: 'at',
            acceptableAnswers: ['At'],
            hint: '表示"在...灯时"用哪个介词？',
            explanation: 'at a ... light表示"在...灯时"，at是介词，Stop at a red light'
          },
          {
            id: 'e6u1l4q7',
            type: 'choice',
            question: 'It runs on roads and stops at bus stops. What is it?',
            options: ['bus', 'train', 'plane', 'ship'],
            answer: 'bus',
            hint: '[交通工具词汇]（英语二年级-第6单元）',
            explanation: 'bus公交车在公路上跑并在公交站停靠，是二年级Transport单元学的交通工具词汇'
          }
        ]
      },
      {
        id: 'e6u1l5',
        title: '第一单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        iDo: '家长示范检测题型，讲解交通词汇、句型、频率副词、交通安全四类题的解题方法',
        weDo: '亲子一起做练习题，家长引导孩子分析题目，讨论答案',
        youDo: '孩子独立完成综合检测，目标正确率≥80%',
        parentTips: '检测覆盖交通+句型+频率+安全四方面，错题要分析原因并复习对应课时',
        funElement: '通关后撒花庆祝，获得"Transport达人"徽章',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:题目逐个出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|Transport达人徽章|300x300|可爱卡通风|png|金色徽章', 'IMG:illustration|交通综合场景|500x300|可爱卡通风|png|综合交通'],
        content: [
          { type: 'text', content: '本单元我们学习了交通方式词汇（bus/subway/bike/walk）、How do you go to...?句型、频率副词（usually/sometimes/never）和交通安全规则。现在来做综合检测吧！', animationType: 'reveal' },
          { type: 'example', content: '交通词汇：bus, subway, bike, walk\n句型：How do you go to...? I go by...\n频率副词：usually, often, sometimes, never\n交通规则：Stop/Wait/Go at a ... light', label: '本单元知识梳理', animationType: 'cardReveal' },
          { type: 'tip', content: '做题时先看清题目要求，选择题选最合适的答案，填空题注意大小写和拼写。遇到不会的题先跳过，最后再回头做。', label: '检测技巧', animationType: 'pulse' },
          { type: 'dialogue', content: 'Tom: How do you usually go to school?\nAmy: I usually go by subway. Sometimes I walk. I never go by bus.\nTom: Remember: stop at a red light!\nAmy: Yes, safety first!', label: '综合对话', animationType: 'timeline' },
          { type: 'example', content: '易错点1：by bus（正确）/ by a bus（错误）\n易错点2：I walk（正确）/ I by walk（错误）\n易错点3：How does she go?（正确）/ How do she go?（错误）', label: '易错点提醒', animationType: 'sequence' },
          { type: 'tip', content: '检测不是考试，是帮我们查漏补缺。做错的题要弄懂原因，找到对应课时复习巩固。', label: '学习心态', animationType: 'pulse' },
          { type: 'animation', content: '通关撒花动画，正确率达到80%触发庆祝特效', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Transport Star', cardRevealConfig: { cards: [ { front: 'bus', back: '🚌', ttsText: 'bus' }, { front: 'subway', back: '🚇', ttsText: 'subway' }, { front: 'bike', back: '🚲', ttsText: 'bike' }, { front: 'walk', back: '🚶', ttsText: 'walk' } ] }, ttsNarration: '交通达人通关庆祝！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u1l5q1',
            type: 'choice',
            question: 'How do you go to the zoo? — I go ____ subway.',
            options: ['by', 'on', 'with', 'at'],
            answer: 'by',
            hint: '乘坐交通工具用哪个介词？',
            explanation: '乘坐交通工具用by，by subway表示坐地铁'
          },
          {
            id: 'e6u1l5q2',
            type: 'choice',
            question: 'I ____ go to school by bike. (about 80%)',
            options: ['usually', 'never', 'sometimes', 'rarely'],
            answer: 'usually',
            hint: '约80%的频率用哪个副词？',
            explanation: 'usually表示通常，约80%的频率，是高频副词'
          },
          {
            id: 'e6u1l5q3',
            type: 'fill',
            question: '____ at a red light. (停)',
            answer: 'Stop',
            acceptableAnswers: ['stop'],
            hint: '红灯亮了要做什么？',
            explanation: '红灯要停下，Stop at a red light.红灯停'
          },
          {
            id: 'e6u1l5q4',
            type: 'choice',
            question: 'How ____ your father go to work? — He goes by bus.',
            options: ['does', 'do', 'is', 'goes'],
            answer: 'does',
            hint: '主语是第三人称单数your father，用哪个助动词？',
            explanation: '主语是第三人称单数，疑问句用does，动词用原形go：How does your father go to work?'
          },
          {
            id: 'e6u1l5q5',
            type: 'choice',
            question: '【期末真题】Which sentence is grammatically correct?',
            options: ['I sometimes walk to school.', 'I walk sometimes to school.', 'Sometimes I walk to school is good.', 'I to school sometimes walk.'],
            answer: 'I sometimes walk to school.',
            hint: '频率副词放在实义动词前面',
            explanation: '频率副词sometimes放在实义动词walk前面，I sometimes walk to school.语序正确'
          },
          {
            id: 'e6u1l5q6',
            type: 'fill',
            question: 'The light is yellow. We should ____. (等)',
            answer: 'wait',
            acceptableAnswers: ['Wait'],
            hint: '黄灯要做什么？',
            explanation: '黄灯要等一等，Wait at a yellow light.黄灯等'
          },
          {
            id: 'e6u1l5q7',
            type: 'choice',
            question: 'Which one is a kind of transport?',
            options: ['subway', 'apple', 'desk', 'ruler'],
            answer: 'subway',
            hint: '[交通工具词汇]（英语二年级-第6单元）',
            explanation: 'subway是地铁，属于交通工具，apple/desk/ruler都不是交通工具，是二年级Transport单元学的词汇'
          }
        ]
      }
    ]
  },
  // ==================== 第二单元：Where Is the Museum ====================
  {
    id: 'e6u2',
    title: 'Where Is the Museum',
    subtitle: '问路指路词汇与Where is...?/Turn left/right句型',
    order: 2,
    lessons: [
      {
        id: 'e6u2l1',
        title: '方位词汇：next to/in front of/behind',
        order: 1,
        teachingMethod: 'TPR全身反应法+实物指示',
        iDo: '家长用实物演示方位：把书放在不同位置说"next to/in front of/behind"，配合手势',
        weDo: '亲子一起放物品在不同方位，家长说英语孩子摆，再互换角色',
        youDo: '孩子独立用方位词描述物品位置',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长把书放桌上问“Where is the book?”②孩子应答：“It is on the desk.”③答错引导：若孩子混淆on/in/under，家长把书放桌上(on)、抽屉里(in)、桌下(under)各演示一遍，让孩子跟着说。④快速出题：家长藏一个玩具，孩子用Where is...?找并用方位词回答。',
        funElement: '玩"藏宝图"游戏，家长用方位词描述宝藏位置，孩子去找',
        gsapAnimations: ['GSAP:物品方位出现-sceneBuild', 'GSAP:方位词卡片-cardReveal', 'GSAP:方位高亮-highlight'],
        images: ['IMG:illustration|方位词汇图|500x300|可爱卡通风|png|3种方位', 'IMG:illustration|物品方位场景|500x300|可爱卡通风|png|方位摆放'],
        content: [
          { type: 'text', content: '要描述物品的位置，我们需要方位词：next to（在...旁边）、in front of（在...前面）、behind（在...后面）。它们后面接名词。', animationType: 'reveal' },
          { type: 'example', content: 'next to — 在...旁边\nin front of — 在...前面\nbehind — 在...后面', label: '方位词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Where is the cat?\nAmy: It\'s next to the box.\nTom: Where is the dog?\nAmy: It\'s in front of the house.', label: '描述位置对话', animationType: 'timeline' },
          { type: 'tip', content: '方位词后面接名词或代词：next to the park, in front of me。注意in front of是固定搭配，不能分开。', label: '方位词用法', animationType: 'pulse' },
          { type: 'example', content: 'The bank is next to the school. 银行在学校旁边。\nThe car is in front of the house. 车子在房子前面。\nThe cat is behind the door. 猫在门后面。', label: '方位词造句', animationType: 'sequence' },
          { type: 'tip', content: 'next to和near意思相近，但next to表示紧挨着，距离更近。behind是in front of的反义词。', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '物品方位逐一出现动画，展示三种方位关系', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'Position Words', sceneBuildConfig: { sceneName: 'Positions', elements: [ { id: 'el-0', text: 'next to', emoji: '↔️', delay: 0, animation: 'bounceIn', ttsText: 'next to, 在旁边' }, { id: 'el-1', text: 'in front of', emoji: '⬆️', delay: 0.5, animation: 'bounceIn', ttsText: 'in front of, 在前面' }, { id: 'el-2', text: 'behind', emoji: '⬇️', delay: 1, animation: 'bounceIn', ttsText: 'behind, 在后面' } ] }, ttsNarration: '方位词：在旁边、在前面、在后面' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u2l1q1',
            type: 'choice',
            question: 'The book is ____ the pen. (just beside it)',
            options: ['next to', 'behind', 'in', 'on'],
            answer: 'next to',
            hint: '紧挨着、在旁边',
            explanation: 'next to表示在...旁边、紧挨着，The book is next to the pen.书在笔旁边'
          },
          {
            id: 'e6u2l1q2',
            type: 'choice',
            question: 'The car is ____ the house. (you can see it before the house)',
            options: ['in front of', 'behind', 'next to', 'under'],
            answer: 'in front of',
            hint: '在房子前面能看到',
            explanation: 'in front of表示在...前面，The car is in front of the house.车在房子前面'
          },
          {
            id: 'e6u2l1q3',
            type: 'fill',
            question: 'The cat is ____ the door. (在...后面，你看不到它)',
            answer: 'behind',
            acceptableAnswers: ['Behind'],
            hint: '在门后面看不到',
            explanation: 'behind表示在...后面，The cat is behind the door.猫在门后面'
          },
          {
            id: 'e6u2l1q4',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['The bank is next to the school.', 'The bank next to is the school.', 'Next to the bank is school the.', 'The bank is the school next to.'],
            answer: 'The bank is next to the school.',
            hint: '主语+be+方位词+名词',
            explanation: '句型：主语+be动词+方位词+名词，The bank is next to the school.语序正确'
          },
          {
            id: 'e6u2l1q5',
            type: 'choice',
            question: '"behind" is the opposite (反义词) of ____.',
            options: ['in front of', 'next to', 'under', 'on'],
            answer: 'in front of',
            hint: '在后面和在前面是反义关系',
            explanation: 'behind（在后面）和in front of（在前面）是反义词，表示相反的方位'
          },
          {
            id: 'e6u2l1q6',
            type: 'fill',
            question: 'The park is ____ to the hospital. (在...旁边)',
            answer: 'next',
            acceptableAnswers: ['Next'],
            hint: '在旁边用哪个方位词？',
            explanation: 'next to表示在旁边，The park is next to the hospital.公园在医院旁边'
          },
          {
            id: 'e6u2l1q7',
            type: 'fill',
            question: 'A ____ is a place where children play and have fun. (park)',
            answer: 'park',
            acceptableAnswers: ['Park'],
            hint: '[场所词汇]（英语二年级-第3单元）',
            explanation: 'park是公园，孩子们玩耍的地方，是二年级Places单元学过的场所词汇'
          }
        ]
      },
      {
        id: 'e6u2l2',
        title: 'Where is the...? 问路句型',
        order: 2,
        teachingMethod: '情境对话法：模拟问路',
        iDo: '家长模拟问路："Where is the museum? It\'s next to the park."配合地图道具演示',
        weDo: '亲子一起演问路情景剧，家长问孩子答，再互换角色',
        youDo: '孩子独立用Where is...?句型问路并回答方位',
        parentTips: '用城市地图或自画地图练习问路，指着地点问Where is...?',
        funElement: '玩"小导游"游戏，孩子当导游，家长当游客问路',
        gsapAnimations: ['GSAP:问路对话展开-timeline', 'GSAP:地点卡片-cardReveal', 'GSAP:问答高亮-highlight'],
        images: ['IMG:illustration|问路场景|500x300|可爱卡通风|png|地图+对话', 'IMG:illustration|城市地图|500x300|可爱卡通风|png|地点标注'],
        content: [
          { type: 'text', content: 'Where is the...? 用来问某地在哪儿。回答可以用It\'s next to/in front of/behind + 地点。', animationType: 'reveal' },
          { type: 'example', content: 'Where is the museum? — 博物馆在哪儿？\nIt\'s next to the park. — 在公园旁边。\nWhere is the hospital? — 医院在哪儿？\nIt\'s in front of the school. — 在学校前面。', label: '问路句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Excuse me, where is the museum?\nAmy: It\'s next to the park.\nTom: Thank you!\nAmy: You\'re welcome.', label: '问路对话', animationType: 'timeline' },
          { type: 'tip', content: '问路时先说Excuse me（打扰一下）表示礼貌。Where is...?回答用It\'s...，It指代问的地方。', label: '礼貌用语', animationType: 'pulse' },
          { type: 'example', content: 'Where is the zoo? It\'s next to the park.\nWhere is the bank? It\'s behind the school.\nWhere is the hospital? It\'s in front of the hotel.', label: '问路操练', animationType: 'sequence' },
          { type: 'tip', content: '感谢别人指路后要说Thank you!对方回答You\'re welcome.（不客气）。这是礼貌的应答。', label: '感谢应答', animationType: 'pulse' },
          { type: 'animation', content: '问路对话逐步展开动画，配合时间线展示问路过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Asking the Way', timelineConfig: { steps: [ { text: 'Excuse me, where is the museum?', ttsNarration: 'Excuse me, where is the museum?' }, { text: 'It\'s next to the park.', ttsNarration: 'It is next to the park.' }, { text: 'Thank you!', ttsNarration: 'Thank you!' }, { text: 'You\'re welcome.', ttsNarration: 'You are welcome.' } ] }, ttsNarration: '问路：打扰一下，博物馆在哪儿？在公园旁边。谢谢！不客气。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u2l2q1',
            type: 'choice',
            question: '____ is the museum? — It\'s next to the park.',
            options: ['Where', 'What', 'How', 'Who'],
            answer: 'Where',
            hint: '问地点用哪个疑问词？',
            explanation: 'Where用来问地点，Where is the museum?问博物馆在哪儿'
          },
          {
            id: 'e6u2l2q2',
            type: 'choice',
            question: 'Where is the hospital? — ____ next to the school.',
            options: ['It\'s', 'They\'re', 'He\'s', 'She\'s'],
            answer: 'It\'s',
            hint: '指代the hospital（单数地点）用什么代词？',
            explanation: '指代单数地点the hospital用It，It\'s next to the school.它在学校旁边'
          },
          {
            id: 'e6u2l2q3',
            type: 'fill',
            question: '____ me, where is the zoo? (打扰一下)',
            answer: 'Excuse',
            acceptableAnswers: ['excuse'],
            hint: '问路前礼貌地说"打扰一下"',
            explanation: 'Excuse me表示打扰一下，问路时先说Excuse me表示礼貌'
          },
          {
            id: 'e6u2l2q4',
            type: 'choice',
            question: 'Someone says "Thank you!" You should answer ____.',
            options: ['You\'re welcome.', 'I\'m fine.', 'Goodbye.', 'Sorry.'],
            answer: 'You\'re welcome.',
            hint: '别人感谢你，你怎么回应？',
            explanation: '别人说Thank you，你要回应You\'re welcome.表示不客气'
          },
          {
            id: 'e6u2l2q5',
            type: 'choice',
            question: 'Where is the bank? — It\'s ____ the hospital. (you see it after the hospital)',
            options: ['behind', 'next', 'where', 'how'],
            answer: 'behind',
            hint: '在医院后面看不到',
            explanation: 'behind表示在后面，It\'s behind the hospital.它在医院后面'
          },
          {
            id: 'e6u2l2q6',
            type: 'fill',
            question: '— Where is the park? — ____ next to the school. (它)',
            answer: 'It\'s',
            acceptableAnswers: ['It is', "It's"],
            hint: '指代the park用It，缩写形式',
            explanation: '指代the park用It，It\'s = It is，It\'s next to the school.它在公园旁边'
          },
          {
            id: 'e6u2l2q7',
            type: 'choice',
            question: 'Where is the book? — It\'s ____ the desk. (在...上面)',
            options: ['on', 'at', 'of', 'by'],
            answer: 'on',
            hint: '[方位介词on/in/under]（英语四年级-第1单元）',
            explanation: 'on表示在...上面，四年级My Classroom单元学过on/in/under方位介词'
          }
        ]
      },
      {
        id: 'e6u2l3',
        title: '指路句型：Turn left/right. Go straight.',
        order: 3,
        teachingMethod: '情境式教学法',
        iDo: '家长示范指路："Turn left. Turn right. Go straight. It\'s on your left."配合手势和地图',
        weDo: '亲子一起演指路情景剧，家长指路孩子走，再互换角色',
        youDo: '孩子独立用指路句型给别人指路',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长喊“Turn left!”②孩子应答并做动作：向左转，说“I turn left。”③答错引导：若孩子转错方向，家长让孩子先举起左手确认left，再转身，反复练Turn left/Turn right。④快速出题：家长连续喊left/right指令，孩子快速转向，像“萝卜蹲”游戏。',
        funElement: '玩"蒙眼导航"游戏，孩子蒙眼，家长用英语指路引导到达终点',
        gsapAnimations: ['GSAP:路线指引动画-timeline', 'GSAP:方向箭头出现-sceneBuild', 'GSAP:指路步骤高亮-highlight'],
        images: ['IMG:illustration|指路路线图|500x300|可爱卡通风|png|路线+箭头', 'IMG:illustration|左右转场景|500x300|可爱卡通风|png|方向指示'],
        content: [
          { type: 'text', content: '给別人指路时用：Turn left（向左转）、Turn right（向右转）、Go straight（直走）、It\'s on your left/right（在你的左/右边）。', animationType: 'reveal' },
          { type: 'example', content: 'Turn left. — 向左转\nTurn right. — 向右转\nGo straight. — 直走\nIt\'s on your left. — 在你的左边', label: '指路句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: How can I get to the museum?\nAmy: Go straight. Then turn left. It\'s on your right.\nTom: Go straight, turn left, on my right. Thank you!\nAmy: You\'re welcome.', label: '指路对话', animationType: 'timeline' },
          { type: 'tip', content: 'Turn left/right是祈使句，表示指令。on your left/right表示在你的左/右边。get to表示到达某地。', label: '句型结构', animationType: 'pulse' },
          { type: 'example', content: 'Go straight and turn right. 直走然后右转。\nTurn left at the park. 在公园处左转。\nIt\'s on your left. 它在你的左边。', label: '指路操练', animationType: 'sequence' },
          { type: 'tip', content: 'left是左，right是右。记住：写字的手是right（右），另一只手是left（左）。on your left在左边，on your right在右边。', label: '左右辨析', animationType: 'pulse' },
          { type: 'animation', content: '路线指引动画，箭头按步骤出现展示指路过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Giving Directions', timelineConfig: { steps: [ { text: 'Go straight.', ttsNarration: 'Go straight.' }, { text: 'Turn left.', ttsNarration: 'Turn left.' }, { text: 'Turn right.', ttsNarration: 'Turn right.' }, { text: 'It\'s on your left.', ttsNarration: 'It is on your left.' } ] }, ttsNarration: '指路：直走、左转、右转、在你的左边' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u2l3q1',
            type: 'choice',
            question: '____ left at the park. (向左转)',
            options: ['Turn', 'Go', 'Stop', 'Walk'],
            answer: 'Turn',
            hint: '转向用哪个动词？',
            explanation: 'Turn表示转向，Turn left向左转，Turn left at the park在公园处左转'
          },
          {
            id: 'e6u2l3q2',
            type: 'choice',
            question: '____ straight, then turn right. (直走)',
            options: ['Go', 'Turn', 'Stop', 'Look'],
            answer: 'Go',
            hint: '直走用哪个动词？',
            explanation: 'Go straight表示直走，Go straight then turn right直走然后右转'
          },
          {
            id: 'e6u2l3q3',
            type: 'fill',
            question: 'It\'s on your ____. (右边)',
            answer: 'right',
            acceptableAnswers: ['Right'],
            hint: '在右边用哪个词？',
            explanation: 'right表示右，It\'s on your right.它在你右边'
          },
          {
            id: 'e6u2l3q4',
            type: 'choice',
            question: 'How can I ____ to the museum? (到达)',
            options: ['get', 'go', 'turn', 'come'],
            answer: 'get',
            hint: '表示到达某地用哪个词？',
            explanation: 'get to表示到达，How can I get to the museum?我怎样能到博物馆？'
          },
          {
            id: 'e6u2l3q5',
            type: 'choice',
            question: 'Which means "向右转"?',
            options: ['Turn right.', 'Turn left.', 'Go straight.', 'Stop right.'],
            answer: 'Turn right.',
            hint: '向右转怎么说？',
            explanation: 'Turn right表示向右转，Turn是转向，right是右'
          },
          {
            id: 'e6u2l3q6',
            type: 'fill',
            question: 'Go straight and turn ____. (左) The museum is on your left.',
            answer: 'left',
            acceptableAnswers: ['Left'],
            hint: '博物馆在左边，应该往哪转？',
            explanation: '博物馆在左边，要左转，turn left向左转，博物馆就在左边'
          },
          {
            id: 'e6u2l3q7',
            type: 'choice',
            question: 'You can buy food and things at the ____.',
            options: ['supermarket', 'hospital', 'park', 'zoo'],
            answer: 'supermarket',
            hint: '[场所词汇]（英语二年级-第3单元）',
            explanation: 'supermarket是超市，可以买东西，是二年级Places单元学过的场所词汇'
          }
        ]
      },
      {
        id: 'e6u2l4',
        title: '城市建筑词汇：hospital/post office/bookstore',
        order: 4,
        teachingMethod: '情境式：城市地图',
        iDo: '家长出示城市地图说建筑词汇："hospital/post office/bookstore"，指认位置',
        weDo: '亲子一起看地图说建筑词汇，家长说中文孩子说英文，再互换角色',
        youDo: '孩子独立辨认城市建筑词汇并描述位置',
        parentTips: '用城市地图学建筑词汇，结合问路指路句型综合练习',
        funElement: '玩"城市规划师"游戏，孩子在地图上摆放建筑并用英语描述位置',
        gsapAnimations: ['GSAP:城市地图建筑出现-sceneBuild', 'GSAP:建筑卡片-cardReveal', 'GSAP:建筑分类-stagger'],
        images: ['IMG:illustration|城市地图|500x300|可爱卡通风|png|建筑标注', 'IMG:illustration|城市建筑图|500x300|可爱卡通风|png|各种建筑'],
        content: [
          { type: 'text', content: '城市里有很多建筑：hospital（医院）、post office（邮局）、bookstore（书店）、bank（银行）、museum（博物馆）。今天来学习它们。', animationType: 'reveal' },
          { type: 'example', content: 'hospital — 医院\npost office — 邮局\nbookstore — 书店\nbank — 银行\nmuseum — 博物馆', label: '城市建筑词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Where is the hospital?\nAmy: It\'s next to the bookstore.\nTom: Where is the post office?\nAmy: It\'s behind the bank.', label: '描述建筑位置', animationType: 'timeline' },
          { type: 'tip', content: '这些建筑名词都是单数可数名词，前面要加the/a。the hospital特指那家医院，a bookstore泛指一家书店。', label: '名词用法', animationType: 'pulse' },
          { type: 'example', content: 'The hospital is next to the park. 医院在公园旁边。\nThe bookstore is in front of the bank. 书店在银行前面。\nThe post office is behind the school. 邮局在学校后面。', label: '建筑位置造句', animationType: 'sequence' },
          { type: 'tip', content: 'bookstore是book（书）+store（商店）合成的词，叫合成词。类似还有post office（post邮+office办公室）。', label: '词汇构成', animationType: 'pulse' },
          { type: 'animation', content: '城市地图逐步出现建筑动画，建筑卡片依次揭示', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: 'City Buildings', sceneBuildConfig: { sceneName: 'City Map', elements: [ { id: 'el-0', text: 'hospital', emoji: '🏥', delay: 0, animation: 'bounceIn', ttsText: 'hospital, 医院' }, { id: 'el-1', text: 'post office', emoji: '🏤', delay: 0.4, animation: 'bounceIn', ttsText: 'post office, 邮局' }, { id: 'el-2', text: 'bookstore', emoji: '📚', delay: 0.8, animation: 'bounceIn', ttsText: 'bookstore, 书店' }, { id: 'el-3', text: 'bank', emoji: '🏦', delay: 1.2, animation: 'bounceIn', ttsText: 'bank, 银行' } ] }, ttsNarration: '城市建筑：医院、邮局、书店、银行' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u2l4q1',
            type: 'choice',
            question: 'You are sick. You should go to the ____.',
            options: ['hospital', 'bookstore', 'post office', 'park'],
            answer: 'hospital',
            hint: '生病要去哪里？',
            explanation: 'hospital是医院，生病了要去医院看医生'
          },
          {
            id: 'e6u2l4q2',
            type: 'choice',
            question: 'You want to buy a book. You go to the ____.',
            options: ['bookstore', 'hospital', 'bank', 'zoo'],
            answer: 'bookstore',
            hint: '买书去哪里？',
            explanation: 'bookstore是书店，买书要去书店'
          },
          {
            id: 'e6u2l4q3',
            type: 'fill',
            question: 'You want to send a letter. You go to the ____ office. (邮局)',
            answer: 'post',
            acceptableAnswers: ['Post'],
            hint: '寄信去邮局，邮局叫什么？',
            explanation: 'post office是邮局，寄信要去邮局'
          },
          {
            id: 'e6u2l4q4',
            type: 'choice',
            question: 'Where is the bank? — It\'s ____ the hospital. (just beside it)',
            options: ['next to', 'where', 'how', 'who'],
            answer: 'next to',
            hint: '紧挨着、在旁边',
            explanation: 'next to表示在旁边，It\'s next to the hospital.它在医院旁边'
          },
          {
            id: 'e6u2l4q5',
            type: 'choice',
            question: '"bookstore" is made of two words: book + ____.',
            options: ['store', 'office', 'house', 'room'],
            answer: 'store',
            hint: 'bookstore是合成词，store是什么意思？',
            explanation: 'bookstore = book（书）+ store（商店），是合成词，表示书店'
          },
          {
            id: 'e6u2l4q6',
            type: 'fill',
            question: 'The ____ is behind the school. (博物馆) You can see old things there.',
            answer: 'museum',
            acceptableAnswers: ['Museum'],
            hint: '能看到古老东西的地方',
            explanation: 'museum是博物馆，可以看到古老的展品，The museum is behind the school.'
          },
          {
            id: 'e6u2l4q7',
            type: 'choice',
            question: 'The cat is ____ the box. (在...里面)',
            options: ['in', 'on', 'under', 'behind'],
            answer: 'in',
            hint: '[方位介词on/in/under]（英语四年级-第1单元）',
            explanation: 'in表示在...里面，四年级My Classroom单元学过in/on/under方位介词'
          }
        ]
      },
      {
        id: 'e6u2l5',
        title: '第二单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        iDo: '家长示范检测题型，讲解方位、问路、指路、建筑四类题的解题方法',
        weDo: '亲子一起做练习题，家长引导孩子分析题目，讨论答案',
        youDo: '孩子独立完成综合检测，目标正确率≥80%',
        parentTips: '检测覆盖方位+问路+指路+建筑四方面，错题要分析原因并复习对应课时',
        funElement: '通关后撒花庆祝，获得"Direction达人"徽章',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:题目逐个出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|Direction达人徽章|300x300|可爱卡通风|png|金色徽章', 'IMG:illustration|问路综合场景|500x300|可爱卡通风|png|综合问路'],
        content: [
          { type: 'text', content: '本单元我们学习了方位词汇（next to/in front of/behind）、Where is...?问路句型、Turn left/right指路句型和城市建筑词汇。现在来做综合检测！', animationType: 'reveal' },
          { type: 'example', content: '方位词：next to, in front of, behind\n问路：Where is...? It\'s...\n指路：Turn left/right. Go straight.\n建筑：hospital, post office, bookstore, bank', label: '本单元知识梳理', animationType: 'cardReveal' },
          { type: 'tip', content: '问路先说Excuse me，指路用Turn/Go straight，描述位置用方位词。礼貌用语要记牢：Thank you! You\'re welcome.', label: '综合技巧', animationType: 'pulse' },
          { type: 'dialogue', content: 'Tom: Excuse me, where is the hospital?\nAmy: Go straight. Turn left. It\'s next to the bookstore.\nTom: Thank you!\nAmy: You\'re welcome.', label: '综合问路对话', animationType: 'timeline' },
          { type: 'example', content: '易错点1：Where is...?（正确）/ Where ... is?（错误）\n易错点2：Turn left（正确）/ Turn to left（错误）\n易错点3：next to（正确）/ next of（错误）', label: '易错点提醒', animationType: 'sequence' },
          { type: 'tip', content: '问路指路是生活常用技能，多在生活中练习，去商场、公园时试着用英语问路指路。', label: '生活应用', animationType: 'pulse' },
          { type: 'animation', content: '通关撒花动画，正确率达到80%触发庆祝特效', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Direction Star', cardRevealConfig: { cards: [ { front: 'left', back: '⬅️', ttsText: 'left, 左' }, { front: 'right', back: '➡️', ttsText: 'right, 右' }, { front: 'straight', back: '⬆️', ttsText: 'straight, 直' } ] }, ttsNarration: '方向达人通关庆祝！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u2l5q1',
            type: 'choice',
            question: '____ is the hospital? — It\'s next to the bank.',
            options: ['Where', 'What', 'How', 'Who'],
            answer: 'Where',
            hint: '问地点用哪个疑问词？',
            explanation: 'Where问地点，Where is the hospital?问医院在哪儿'
          },
          {
            id: 'e6u2l5q2',
            type: 'choice',
            question: 'Go straight and turn ____. (左) The museum is on your left.',
            options: ['left', 'right', 'up', 'down'],
            answer: 'left',
            hint: '博物馆在左边，往哪转？',
            explanation: '博物馆在左边要左转，turn left向左转，博物馆就在左边'
          },
          {
            id: 'e6u2l5q3',
            type: 'fill',
            question: '____ me, where is the post office? (打扰一下)',
            answer: 'Excuse',
            acceptableAnswers: ['excuse'],
            hint: '问路前礼貌地说"打扰一下"',
            explanation: 'Excuse me表示打扰一下，问路时先说Excuse me表示礼貌'
          },
          {
            id: 'e6u2l5q4',
            type: 'choice',
            question: '【期末真题】The bookstore is ____ the hospital. You can\'t see it. (在后面)',
            options: ['behind', 'next to', 'in front of', 'where'],
            answer: 'behind',
            hint: '看不到说明在后面',
            explanation: 'behind表示在后面，看不到说明书店在医院后面'
          },
          {
            id: 'e6u2l5q5',
            type: 'choice',
            question: 'Someone helps you find the way. You say "____!"',
            options: ['Thank you', 'Sorry', 'Goodbye', 'Hello'],
            answer: 'Thank you',
            hint: '别人帮助你，要说什么？',
            explanation: '别人帮你指路要说Thank you表示感谢'
          },
          {
            id: 'e6u2l5q6',
            type: 'fill',
            question: 'You are sick. You should go to the ____. (医院)',
            answer: 'hospital',
            acceptableAnswers: ['Hospital'],
            hint: '生病要去哪里？',
            explanation: 'hospital是医院，生病了要去医院看医生'
          },
          {
            id: 'e6u2l5q7',
            type: 'choice',
            question: 'Which one is a place (场所)?',
            options: ['school', 'run', 'blue', 'happy'],
            answer: 'school',
            hint: '[场所词汇]（英语二年级-第3单元）',
            explanation: 'school是学校，属于场所，run/blue/happy都不是场所，是二年级Places单元学的词汇'
          }
        ]
      }
    ]
  },
  // ==================== 第三单元：What Are You Going to Do ====================
  {
    id: 'e6u3',
    title: 'What Are You Going to Do',
    subtitle: '未来计划与be going to句型',
    order: 3,
    lessons: [
      {
        id: 'e6u3l1',
        title: '将来时be going to',
        order: 1,
        teachingMethod: '支架式：时态入门',
        iDo: '家长示范be going to表示计划："I am going to read a book. He is going to play football."配合日历道具',
        weDo: '亲子一起用be going to造句，家长说中文孩子说英文，再互换角色',
        youDo: '孩子独立用be going to造句表达自己的计划',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“What are you going to do tomorrow?用be going to回答”②孩子应答：“I am going to read a book.”③答错引导：若孩子忘了be随主语变，家长强调口诀“I用am、He/She用is、They用are”，再让用He造一句。④快速听写：家长说主语(I/He/They)，孩子说出对应be动词并接going to。',
        funElement: '玩"计划大师"游戏，抽活动卡片用be going to说计划',
        gsapAnimations: ['GSAP:be going to句型构建-timeline', 'GSAP:句型结构出现-cardReveal', 'GSAP:关键词高亮-highlight'],
        images: ['IMG:illustration|将来时句型图|500x300|教学风|png|句型结构', 'IMG:illustration|计划日历|500x300|可爱卡通风|png|日历计划'],
        content: [
          { type: 'text', content: 'be going to表示"打算做某事"，用来谈论未来的计划。结构是：主语 + be going to + 动词原形。be动词随主语变化。', animationType: 'reveal' },
          { type: 'example', content: 'I am going to read a book. 我打算读书。\nHe is going to play football. 他打算踢足球。\nThey are going to swim. 他们打算游泳。', label: 'be going to句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What are you going to do?\nAmy: I am going to visit my grandma.\nTom: Is she going to cook?\nAmy: Yes, she is going to make dumplings.', label: '谈论计划对话', animationType: 'timeline' },
          { type: 'tip', content: 'be动词随主语变化：I用am，he/she/it用is，we/you/they用are。going to后面接动词原形，不加to。', label: 'be动词变化', animationType: 'pulse' },
          { type: 'example', content: 'I am going to + 动词原形\nYou are going to + 动词原形\nHe/She is going to + 动词原形\nThey are going to + 动词原形', label: '人称变化表', animationType: 'sequence' },
          { type: 'tip', content: 'be going to也可以表示根据迹象推测将要发生的事：Look at the clouds. It is going to rain.看那些云，要下雨了。', label: '拓展用法', animationType: 'pulse' },
          { type: 'animation', content: 'be going to句型构建动画，主语+be+going to+动词逐步出现', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'be going to', timelineConfig: { steps: [ { text: 'I', ttsNarration: 'I' }, { text: 'am', ttsNarration: 'am' }, { text: 'going to', ttsNarration: 'going to' }, { text: 'read a book.', ttsNarration: 'read a book.' } ] }, ttsNarration: 'be going to句型：我打算读书' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u3l1q1',
            type: 'choice',
            question: 'I ____ going to read a book.',
            options: ['am', 'is', 'are', 'be'],
            answer: 'am',
            hint: '主语I用哪个be动词？',
            explanation: '主语I用am，I am going to read a book.我打算读书'
          },
          {
            id: 'e6u3l1q2',
            type: 'choice',
            question: 'He ____ going to play football.',
            options: ['is', 'am', 'are', 'be'],
            answer: 'is',
            hint: '主语He用哪个be动词？',
            explanation: '主语He第三人称单数用is，He is going to play football.他打算踢足球'
          },
          {
            id: 'e6u3l1q3',
            type: 'fill',
            question: 'They ____ going to swim. (are)',
            answer: 'are',
            acceptableAnswers: ['Are'],
            hint: '主语They用哪个be动词？',
            explanation: '主语They复数用are，They are going to swim.他们打算游泳'
          },
          {
            id: 'e6u3l1q4',
            type: 'choice',
            question: 'She is going to ____ a song. (唱)',
            options: ['sing', 'singing', 'sings', 'to sing'],
            answer: 'sing',
            hint: 'be going to后面接什么形式的动词？',
            explanation: 'be going to后面接动词原形，She is going to sing a song.她打算唱歌'
          },
          {
            id: 'e6u3l1q5',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['I am going to read a book.', 'I am going read a book.', 'I going to read a book.', 'I am going to reading a book.'],
            answer: 'I am going to read a book.',
            hint: 'be going to + 动词原形',
            explanation: 'be going to + 动词原形，I am going to read a book.结构完整正确'
          },
          {
            id: 'e6u3l1q6',
            type: 'fill',
            question: 'Look at the clouds. It is going to ____. (下雨)',
            answer: 'rain',
            acceptableAnswers: ['Rain'],
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形rain，It is going to rain.要下雨了'
          },
          {
            id: 'e6u3l1q7',
            type: 'fill',
            question: 'I ____ swim. I am good at it. (can)',
            answer: 'can',
            acceptableAnswers: ['Can'],
            hint: '[can/can\'t能力表达]（英语五年级-第4单元）',
            explanation: 'can表示能、会，五年级What Can You Do单元学过用can/can\'t表达能力'
          }
        ]
      },
      {
        id: 'e6u3l2',
        title: 'What are you going to do? 问计划',
        order: 2,
        teachingMethod: '情境对话法',
        iDo: '家长示范问答计划："What are you going to do tomorrow? I\'m going to read a book."配合日历',
        weDo: '亲子一起问答计划，家长问孩子答，再互换角色',
        youDo: '孩子独立用What are you going to do?询问并回答计划',
        parentTips: '用日历或计划表练习，指着日期问What are you going to do...?',
        funElement: '玩"计划采访"游戏，孩子当记者采访家人的周末计划',
        gsapAnimations: ['GSAP:计划对话展开-timeline', 'GSAP:对话气泡弹出-stagger', 'GSAP:问答高亮-highlight'],
        images: ['IMG:illustration|计划对话场景|500x300|可爱卡通风|png|日历+对话', 'IMG:illustration|周末计划表|500x300|可爱卡通风|png|计划表'],
        content: [
          { type: 'text', content: 'What are you going to do? 用来问对方打算做什么。回答用I\'m going to + 动词原形。可以加时间词。', animationType: 'reveal' },
          { type: 'example', content: 'What are you going to do tomorrow? — 你明天打算做什么？\nI\'m going to read a book. — 我打算读书。\nWhat is he going to do? — 他打算做什么？\nHe\'s going to play football. — 他打算踢足球。', label: '问计划句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What are you going to do this weekend?\nAmy: I\'m going to visit my grandma. What about you?\nTom: I\'m going to play football with my friends.\nAmy: Sounds fun!', label: '询问周末计划', animationType: 'timeline' },
          { type: 'tip', content: '问"你"用What are you going to do?问"他/她"用What is he/she going to do?回答用I\'m/He\'s going to...', label: '人称变化', animationType: 'pulse' },
          { type: 'example', content: 'What are you going to do? I\'m going to read.\nWhat is she going to do? She\'s going to dance.\nWhat are they going to do? They\'re going to swim.', label: '问答操练', animationType: 'sequence' },
          { type: 'tip', content: 'I\'m = I am，He\'s = He is，They\'re = They are。口语中常用缩写形式，更自然流畅。', label: '缩写形式', animationType: 'pulse' },
          { type: 'animation', content: '计划对话逐步展开动画，配合时间线展示问答过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Weekend Plan', timelineConfig: { steps: [ { text: 'What are you going to do this weekend?', ttsNarration: 'What are you going to do this weekend?' }, { text: 'I\'m going to visit my grandma.', ttsNarration: 'I am going to visit my grandma.' }, { text: 'What about you?', ttsNarration: 'What about you?' }, { text: 'I\'m going to play football.', ttsNarration: 'I am going to play football.' } ] }, ttsNarration: '周末计划：你周末打算做什么？我打算去看奶奶。你呢？我打算踢足球。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u3l2q1',
            type: 'choice',
            question: '____ are you going to do tomorrow? — I\'m going to read a book.',
            options: ['What', 'Where', 'How', 'Who'],
            answer: 'What',
            hint: '问"做什么"用哪个疑问词？',
            explanation: 'What问做什么，What are you going to do?你打算做什么？'
          },
          {
            id: 'e6u3l2q2',
            type: 'choice',
            question: 'What is she going to do? — ____ going to dance.',
            options: ['She\'s', 'She', 'Her', 'Hers'],
            answer: 'She\'s',
            hint: '主语she用is，缩写形式',
            explanation: 'She\'s = She is，She\'s going to dance.她打算跳舞'
          },
          {
            id: 'e6u3l2q3',
            type: 'fill',
            question: 'What ____ you going to do? (are)',
            answer: 'are',
            acceptableAnswers: ['Are'],
            hint: '主语you用哪个be动词？',
            explanation: '主语you用are，What are you going to do?你打算做什么？'
          },
          {
            id: 'e6u3l2q4',
            type: 'choice',
            question: 'What are they going to do? — They\'re going to ____.',
            options: ['swim', 'swims', 'swimming', 'to swim'],
            answer: 'swim',
            hint: 'be going to后面接什么形式的动词？',
            explanation: 'be going to + 动词原形，They\'re going to swim.他们打算游泳'
          },
          {
            id: 'e6u3l2q5',
            type: 'choice',
            question: 'Tom asks Amy about her plan. Which question is correct?',
            options: ['What are you going to do?', 'What you are going to do?', 'What do you going to?', 'What are you going do?'],
            answer: 'What are you going to do?',
            hint: '疑问句语序：What + be + 主语 + going to do?',
            explanation: '疑问句语序What + are + you + going to do?所以What are you going to do?正确'
          },
          {
            id: 'e6u3l2q6',
            type: 'fill',
            question: '— What is he going to do? — ____ going to play football. (他是)',
            answer: 'He\'s',
            acceptableAnswers: ['He is', "He's"],
            hint: '主语he用is，缩写形式',
            explanation: 'He\'s = He is，He\'s going to play football.他打算踢足球'
          },
          {
            id: 'e6u3l2q7',
            type: 'choice',
            question: '—What can you do? —I ____ draw pictures.',
            options: ['can', 'am', 'do', 'have'],
            answer: 'can',
            hint: '[can/can\'t能力表达]（英语五年级-第4单元）',
            explanation: '询问能力用What can you do?回答用I can...，是五年级What Can You Do单元学的句型'
          }
        ]
      },
      {
        id: 'e6u3l3',
        title: '时间表达：tomorrow/next week/this weekend',
        order: 3,
        teachingMethod: '支架式教学法',
        iDo: '家长示范时间表达："tomorrow/next week/this weekend"，配合日历指出时间',
        weDo: '亲子一起用时间表达造句，家长说时间孩子说计划，再互换角色',
        youDo: '孩子独立用时间表达加be going to造句',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“将来时间词有哪些？”②孩子应答：“tomorrow、next week、this weekend。”③答错引导：若孩子放错位置，家长强调时间词放句末，如“I am going to swim tomorrow”，让孩子仿说。④快速出题：家长说一个活动，孩子加时间词造一句be going to。',
        funElement: '玩"时间机器"游戏，抽时间卡片用be going to说计划',
        gsapAnimations: ['GSAP:时间词汇出现-timeline', 'GSAP:时间轴展示-sequence', 'GSAP:时间词高亮-highlight'],
        images: ['IMG:illustration|将来时间图|500x200|教学风|png|时间轴', 'IMG:illustration|日历时间表|500x300|可爱卡通风|png|日历'],
        content: [
          { type: 'text', content: '表示将来的时间词有：tomorrow（明天）、next week（下周）、this weekend（这周末）、next month（下月）。它们放在句末。', animationType: 'reveal' },
          { type: 'example', content: 'tomorrow — 明天\nnext week — 下周\nthis weekend — 这周末\nnext month — 下个月', label: '将来时间词', animationType: 'sequence' },
          { type: 'dialogue', content: 'Tom: What are you going to do tomorrow?\nAmy: I\'m going to visit the museum.\nTom: What about next week?\nAmy: I\'m going to have a test.', label: '谈论将来时间', animationType: 'timeline' },
          { type: 'tip', content: '时间词放在句末：I\'m going to read a book tomorrow.（正确）/ Tomorrow I\'m going to...（也可，强调时间）。一般放句末。', label: '时间词位置', animationType: 'pulse' },
          { type: 'example', content: 'I\'m going to swim tomorrow. 我明天打算游泳。\nShe\'s going to dance next week. 她下周打算跳舞。\nThey\'re going to travel this weekend. 他们这周末打算旅行。', label: '时间词造句', animationType: 'sequence' },
          { type: 'tip', content: 'next + 周/月/年表示"下一个"：next week下周、next month下月、next year明年。this + weekend/morning表示"这个"。', label: '词汇构成', animationType: 'pulse' },
          { type: 'animation', content: '时间词汇出现动画，配合时间轴展示将来时间', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Future Time', timelineConfig: { steps: [ { text: 'tomorrow 明天', ttsNarration: 'tomorrow, 明天' }, { text: 'next week 下周', ttsNarration: 'next week, 下周' }, { text: 'this weekend 这周末', ttsNarration: 'this weekend, 这周末' }, { text: 'next month 下个月', ttsNarration: 'next month, 下个月' } ] }, ttsNarration: '将来时间词：明天、下周、这周末、下个月' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u3l3q1',
            type: 'choice',
            question: 'I\'m going to read a book ____. (明天)',
            options: ['tomorrow', 'yesterday', 'today', 'now'],
            answer: 'tomorrow',
            hint: '表示将来的"明天"',
            explanation: 'tomorrow是明天，表示将来时间，I\'m going to read a book tomorrow.我明天打算读书'
          },
          {
            id: 'e6u3l3q2',
            type: 'choice',
            question: 'We are going to travel ____ week. (下)',
            options: ['next', 'this', 'last', 'every'],
            answer: 'next',
            hint: '"下周"用哪个词？',
            explanation: 'next week表示下周，We are going to travel next week.我们下周打算旅行'
          },
          {
            id: 'e6u3l3q3',
            type: 'fill',
            question: 'They\'re going to swim this ____. (周末)',
            answer: 'weekend',
            acceptableAnswers: ['Weekend'],
            hint: '"这周末"用哪个词？',
            explanation: 'this weekend表示这周末，They\'re going to swim this weekend.他们这周末打算游泳'
          },
          {
            id: 'e6u3l3q4',
            type: 'choice',
            question: 'Which time word is for the FUTURE (将来)?',
            options: ['tomorrow', 'yesterday', 'last week', 'before'],
            answer: 'tomorrow',
            hint: '哪个词表示将来时间？',
            explanation: 'tomorrow明天表示将来；yesterday昨天、last week上周、before之前都表示过去'
          },
          {
            id: 'e6u3l3q5',
            type: 'choice',
            question: 'Where should the time word go? I\'m going to read a book ___.',
            options: ['tomorrow', 'going', 'I\'m', 'read'],
            answer: 'tomorrow',
            hint: '时间词放在句子什么位置？',
            explanation: '时间词一般放在句末，I\'m going to read a book tomorrow.时间词tomorrow放句末'
          },
          {
            id: 'e6u3l3q6',
            type: 'fill',
            question: 'She is going to dance next ____. (月)',
            answer: 'month',
            acceptableAnswers: ['Month'],
            hint: '"下个月"用哪个词？',
            explanation: 'next month表示下个月，She is going to dance next month.她下个月打算跳舞'
          },
          {
            id: 'e6u3l3q7',
            type: 'choice',
            question: 'In the morning, I usually ____ my teeth.',
            options: ['brush', 'wash', 'clean', 'make'],
            answer: 'brush',
            hint: '[日常活动]（英语二年级-第1单元）',
            explanation: 'brush my teeth刷牙，是二年级My Day单元学过的早晨日常活动'
          }
        ]
      },
      {
        id: 'e6u3l4',
        title: '周末计划——My weekend plan',
        order: 4,
        teachingMethod: '项目式学习',
        iDo: '家长示范写周末计划："This weekend, I\'m going to..."列出5个计划',
        weDo: '亲子一起讨论并写周末计划，互相分享计划',
        youDo: '孩子独立用be going to写5句周末计划',
        parentTips: '用be going to写5句周末计划，结合时间词和动词短语',
        funElement: '玩"计划设计师"游戏，设计最有趣的周末计划并分享',
        gsapAnimations: ['GSAP:计划逐条出现-stagger', 'GSAP:计划步骤-timeline', 'GSAP:计划完成高亮-highlight'],
        images: ['IMG:illustration|周末计划模板|400x300|可爱卡通风|png|计划模板', 'IMG:illustration|周末活动图|500x300|可爱卡通风|png|周末活动'],
        content: [
          { type: 'text', content: '让我们用be going to写周末计划吧！结合时间词this weekend和动词短语，写出5个有趣的计划。', animationType: 'reveal' },
          { type: 'example', content: 'This weekend, I\'m going to:\n1. read a book\n2. play football\n3. visit my grandma\n4. clean my room\n5. watch a movie', label: '周末计划范例', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s your weekend plan?\nAmy: I\'m going to read a book and visit my grandma.\nTom: Sounds great!\nAmy: What about you?\nTom: I\'m going to play football and watch a movie.', label: '分享周末计划', animationType: 'timeline' },
          { type: 'tip', content: '写计划时先写时间This weekend, 再用I\'m going to + 动词短语。动词短语如：read a book, play football, visit grandma.', label: '写作技巧', animationType: 'pulse' },
          { type: 'example', content: 'I\'m going to read a book this weekend.\nI\'m going to play football on Sunday.\nI\'m going to visit my grandma on Saturday.\nI\'m going to clean my room.', label: '计划句型操练', animationType: 'sequence' },
          { type: 'tip', content: '动词短语要记牢：read a book读书、play football踢球、watch TV看电视、clean the room打扫房间、do homework做作业。', label: '动词短语', animationType: 'pulse' },
          { type: 'animation', content: '周末计划逐条出现动画，配合时间线展示计划步骤', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'My Weekend Plan', timelineConfig: { steps: [ { text: '1. I\'m going to read a book.', ttsNarration: 'I am going to read a book.' }, { text: '2. I\'m going to play football.', ttsNarration: 'I am going to play football.' }, { text: '3. I\'m going to visit my grandma.', ttsNarration: 'I am going to visit my grandma.' }, { text: '4. I\'m going to clean my room.', ttsNarration: 'I am going to clean my room.' } ] }, ttsNarration: '周末计划：读书、踢球、看奶奶、打扫房间' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u3l4q1',
            type: 'choice',
            question: 'This weekend, I\'m going to ____ a book. (读)',
            options: ['read', 'reading', 'reads', 'to read'],
            answer: 'read',
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形read，I\'m going to read a book.我打算读书'
          },
          {
            id: 'e6u3l4q2',
            type: 'choice',
            question: 'I\'m going to ____ football this weekend. (踢)',
            options: ['play', 'playing', 'plays', 'to play'],
            answer: 'play',
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形play，I\'m going to play football.我打算踢足球'
          },
          {
            id: 'e6u3l4q3',
            type: 'fill',
            question: 'I\'m going to ____ my grandma this weekend. (看望)',
            answer: 'visit',
            acceptableAnswers: ['Visit'],
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形visit，I\'m going to visit my grandma.我打算看望奶奶'
          },
          {
            id: 'e6u3l4q4',
            type: 'choice',
            question: 'Which is a good weekend plan sentence?',
            options: ['I\'m going to clean my room this weekend.', 'I clean my room yesterday.', 'I cleaning my room now.', 'I cleans my room.'],
            answer: 'I\'m going to clean my room this weekend.',
            hint: '周末计划用be going to + 动词原形 + 时间词',
            explanation: '周末计划用be going to结构，I\'m going to clean my room this weekend.结构正确'
          },
          {
            id: 'e6u3l4q5',
            type: 'choice',
            question: 'I\'m going to watch a ____ this weekend. (电影)',
            options: ['movie', 'book', 'song', 'food'],
            answer: 'movie',
            hint: 'watch a movie表示看电影',
            explanation: 'watch a movie表示看电影，watch搭配movie，I\'m going to watch a movie.'
          },
          {
            id: 'e6u3l4q6',
            type: 'fill',
            question: 'I\'m going to ____ my room this weekend. (打扫)',
            answer: 'clean',
            acceptableAnswers: ['Clean'],
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形clean，I\'m going to clean my room.我打算打扫房间'
          },
          {
            id: 'e6u3l4q7',
            type: 'fill',
            question: 'I ____ dinner at 7 o\'clock in the evening. (吃)',
            answer: 'eat',
            acceptableAnswers: ['Eat', 'have', 'Have'],
            hint: '[日常活动]（英语二年级-第1单元）',
            explanation: 'eat dinner吃晚餐，是二年级My Day单元学过的晚间日常活动'
          }
        ]
      },
      {
        id: 'e6u3l5',
        title: '第三单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        iDo: '家长示范检测题型，讲解be going to、问计划、时间词、周末计划四类题',
        weDo: '亲子一起做练习题，家长引导孩子分析题目，讨论答案',
        youDo: '孩子独立完成综合检测，目标正确率≥80%',
        parentTips: '检测覆盖将来时+句型+时间+计划四方面，错题要分析原因并复习对应课时',
        funElement: '通关后撒花庆祝，获得"Plan达人"徽章',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:题目逐个出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|Plan达人徽章|300x300|可爱卡通风|png|金色徽章', 'IMG:illustration|计划综合场景|500x300|可爱卡通风|png|综合计划'],
        content: [
          { type: 'text', content: '本单元我们学习了be going to将来时、What are you going to do?问计划句型、时间词（tomorrow/next week/this weekend）和周末计划写作。现在来做综合检测！', animationType: 'reveal' },
          { type: 'example', content: '将来时：be going to + 动词原形\n问计划：What are you going to do?\n时间词：tomorrow, next week, this weekend\n写作：I\'m going to... this weekend.', label: '本单元知识梳理', animationType: 'cardReveal' },
          { type: 'tip', content: 'be going to的be随主语变化：I am/He is/They are。going to后面接动词原形，时间词放句末。', label: '重点回顾', animationType: 'pulse' },
          { type: 'dialogue', content: 'Tom: What are you going to do this weekend?\nAmy: I\'m going to visit the museum. What about you?\nTom: I\'m going to play football tomorrow.\nAmy: Have fun!', label: '综合计划对话', animationType: 'timeline' },
          { type: 'example', content: '易错点1：He is going to（正确）/ He going to（错误）\n易错点2：going to read（正确）/ going to reading（错误）\n易错点3：tomorrow放句末（正确）', label: '易错点提醒', animationType: 'sequence' },
          { type: 'tip', content: '写计划要具体，用be going to + 动词短语 + 时间。计划要合理安排，劳逸结合。', label: '写作建议', animationType: 'pulse' },
          { type: 'animation', content: '通关撒花动画，正确率达到80%触发庆祝特效', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Plan Star', cardRevealConfig: { cards: [ { front: 'tomorrow', back: '📅', ttsText: 'tomorrow' }, { front: 'next week', back: '🗓', ttsText: 'next week' }, { front: 'weekend', back: '🌟', ttsText: 'weekend' } ] }, ttsNarration: '计划达人通关庆祝！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u3l5q1',
            type: 'choice',
            question: 'She ____ going to dance tomorrow.',
            options: ['is', 'am', 'are', 'be'],
            answer: 'is',
            hint: '主语She用哪个be动词？',
            explanation: '主语She第三人称单数用is，She is going to dance tomorrow.她明天打算跳舞'
          },
          {
            id: 'e6u3l5q2',
            type: 'choice',
            question: 'What are you going to do ____? (这周末)',
            options: ['this weekend', 'yesterday', 'last week', 'before'],
            answer: 'this weekend',
            hint: '哪个表示将来的"这周末"？',
            explanation: 'this weekend表示这周末，是将来时间，What are you going to do this weekend?'
          },
          {
            id: 'e6u3l5q3',
            type: 'fill',
            question: 'I\'m going to ____ a book this weekend. (读)',
            answer: 'read',
            acceptableAnswers: ['Read'],
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形read，I\'m going to read a book.我打算读书'
          },
          {
            id: 'e6u3l5q4',
            type: 'choice',
            question: '【期末真题】They are going to ____ tomorrow.',
            options: ['swim', 'swims', 'swimming', 'to swim'],
            answer: 'swim',
            hint: 'be going to后面接什么形式的动词？',
            explanation: 'be going to + 动词原形，They are going to swim tomorrow.他们明天打算游泳'
          },
          {
            id: 'e6u3l5q5',
            type: 'choice',
            question: '____ are you going to do next week? — I\'m going to travel.',
            options: ['What', 'Where', 'How', 'Who'],
            answer: 'What',
            hint: '问"做什么"用哪个疑问词？',
            explanation: 'What问做什么，What are you going to do next week?你下周打算做什么？'
          },
          {
            id: 'e6u3l5q6',
            type: 'fill',
            question: 'We are going to travel next ____. (周)',
            answer: 'week',
            acceptableAnswers: ['Week'],
            hint: '"下周"用哪个词？',
            explanation: 'next week表示下周，We are going to travel next week.我们下周打算旅行'
          },
          {
            id: 'e6u3l5q7',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['I can play the piano.', 'I can plays the piano.', 'I can playing the piano.', 'I can to play the piano.'],
            answer: 'I can play the piano.',
            hint: '[can/can\'t能力表达]（英语五年级-第4单元）',
            explanation: 'can后面接动词原形，所以是I can play the piano.是五年级What Can You Do单元学的句型'
          }
        ]
      }
    ]
  },
  // ==================== 第四单元：I Have a Pen Pal ====================
  {
    id: 'e6u4',
    title: 'I Have a Pen Pal',
    subtitle: '兴趣爱好词汇与What are your hobbies?句型',
    order: 4,
    lessons: [
      {
        id: 'e6u4l1',
        title: '爱好词汇：reading/swimming/collecting stamps',
        order: 1,
        teachingMethod: 'TPR全身反应法+图片指示',
        iDo: '家长做动作说爱好词汇："reading/swimming/collecting stamps/drawing"，配合夸张动作',
        weDo: '亲子一起做动作说爱好，家长说中文孩子说英文，再互换角色',
        youDo: '孩子独立辨认爱好词汇并做动作',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长做游泳动作问“What is my hobby?”②孩子应答：“Your hobby is swimming.”③答错引导：若孩子不会动词ing形式，家长先教swimming/reading/dancing，强调爱好用动词ing。④快速出题：家长比划一个动作，孩子用I like + ing回答。',
        funElement: '玩"爱好猜猜猜"游戏，孩子做动作家长猜爱好词汇',
        gsapAnimations: ['GSAP:爱好卡片翻转-cardReveal', 'GSAP:爱好动作出现-stagger', 'GSAP:爱好图标-starFlyIn'],
        images: ['IMG:illustration|爱好图|500x300|可爱卡通风|png|4种爱好', 'IMG:illustration|爱好动作图|500x300|可爱卡通风|png|爱好动作'],
        content: [
          { type: 'text', content: '每个人都有爱好。常见的爱好有：reading（阅读）、swimming（游泳）、collecting stamps（集邮）、drawing（画画）。爱好用动词ing形式表示。', animationType: 'reveal' },
          { type: 'example', content: 'reading — 阅读\nswimming — 游泳\ncollecting stamps — 集邮\ndrawing — 画画', label: '爱好词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What do you like?\nAmy: I like reading. How about you?\nTom: I like swimming.\nAmy: Cool! I also like drawing.', label: '谈论爱好', animationType: 'timeline' },
          { type: 'tip', content: '表示爱好用like + 动词ing形式：like reading, like swimming。动词ing形式叫动名词，表示活动。', label: '动名词用法', animationType: 'pulse' },
          { type: 'example', content: 'I like reading. 我喜欢阅读。\nI like swimming. 我喜欢游泳。\nI like collecting stamps. 我喜欢集邮。\nI like drawing. 我喜欢画画。', label: '爱好造句', animationType: 'sequence' },
          { type: 'tip', content: 'collecting stamps是collect（收集）+ ing + stamps（邮票）。类似的还有collecting coins（收集硬币）、collecting shells（收集贝壳）。', label: '词汇拓展', animationType: 'pulse' },
          { type: 'animation', content: '爱好卡片翻转动画，翻转后揭示爱好词汇和对应emoji', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Hobbies', cardRevealConfig: { cards: [ { front: 'reading', back: '📖', ttsText: 'reading, 阅读' }, { front: 'swimming', back: '🏊', ttsText: 'swimming, 游泳' }, { front: 'collecting stamps', back: '📮', ttsText: 'collecting stamps, 集邮' }, { front: 'drawing', back: '🎨', ttsText: 'drawing, 画画' } ] }, ttsNarration: '爱好：阅读、游泳、集邮、画画' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u4l1q1',
            type: 'choice',
            question: 'I like ____. (reading books)',
            options: ['reading', 'read', 'reads', 'to reading'],
            answer: 'reading',
            hint: 'like后面接动词什么形式？',
            explanation: 'like + 动词ing形式，I like reading.我喜欢阅读'
          },
          {
            id: 'e6u4l1q2',
            type: 'choice',
            question: 'I like ____ in the pool. (游泳)',
            options: ['swimming', 'swim', 'swims', 'to swim'],
            answer: 'swimming',
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式swimming，I like swimming.我喜欢游泳'
          },
          {
            id: 'e6u4l1q3',
            type: 'fill',
            question: 'I like ____ stamps. (收集) It\'s fun!',
            answer: 'collecting',
            acceptableAnswers: ['Collecting'],
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式collecting，I like collecting stamps.我喜欢集邮'
          },
          {
            id: 'e6u4l1q4',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['I like drawing.', 'I like draw.', 'I like to drawing.', 'I likes drawing.'],
            answer: 'I like drawing.',
            hint: 'like + 动词ing形式，主语I用like',
            explanation: 'like + 动词ing形式drawing，主语I用like，I like drawing.我喜欢画画'
          },
          {
            id: 'e6u4l1q5',
            type: 'choice',
            question: 'Which is a hobby (爱好)?',
            options: ['swimming', 'apple', 'red', 'tall'],
            answer: 'swimming',
            hint: '哪个词表示一项爱好活动？',
            explanation: 'swimming游泳是爱好活动；apple是苹果、red是红色、tall是高的，都不是爱好'
          },
          {
            id: 'e6u4l1q6',
            type: 'fill',
            question: 'I like ____. (画画) I draw pictures every day.',
            answer: 'drawing',
            acceptableAnswers: ['Drawing'],
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式drawing，I like drawing.我喜欢画画'
          },
          {
            id: 'e6u4l1q7',
            type: 'fill',
            question: 'Drawing and reading are my ____. (爱好)',
            answer: 'hobbies',
            acceptableAnswers: ['Hobbies'],
            hint: '[爱好词汇]（英语二年级-第7单元）',
            explanation: 'hobbies是爱好的复数，drawing画画和reading阅读都是爱好，是二年级Hobbies单元学的词汇'
          }
        ]
      },
      {
        id: 'e6u4l2',
        title: '一般现在时——第三人称单数',
        order: 2,
        teachingMethod: '支架式：时态进阶',
        iDo: '家长示范第三人称单数："I like reading. He likes swimming. She likes drawing."强调动词加s',
        weDo: '亲子一起造句，家长说I句型孩子改成He/She句型，再互换角色',
        youDo: '孩子独立用第三人称单数造句',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“He like还是He likes？”②孩子应答：“He likes，he/she/it后动词加s。”③答错引导：若孩子忘加s，家长强调口诀“他她它，动词加s/es”，并练watch→watches(加es)特例。④快速听写：家长报动词(like/swim/watch)，孩子说三单形式。',
        funElement: '玩"变身游戏"，把I句型变成He/She句型，比比谁变得快',
        gsapAnimations: ['GSAP:第三人称变化动画-timeline', 'GSAP:动词变化-cardReveal', 'GSAP:变化规则高亮-highlight'],
        images: ['IMG:illustration|第三人称变化图|500x300|教学风|png|变化规则', 'IMG:illustration|人称代词图|500x300|教学风|png|人称代词'],
        content: [
          { type: 'text', content: '一般现在时中，主语是第三人称单数（he/she/it）时，动词要加s或es。如：I like → He likes, I swim → She swims。', animationType: 'reveal' },
          { type: 'example', content: 'I like reading. → He likes reading.\nI swim. → She swims.\nI watch TV. → He watches TV.\nI go to school. → She goes to school.', label: '第三人称变化', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: I like reading. What about you?\nAmy: I like swimming. My brother likes drawing.\nTom: Does he like reading too?\nAmy: No, he doesn\'t. He only likes drawing.', label: '第三人称对话', animationType: 'timeline' },
          { type: 'tip', content: '动词变化规则：一般加s（like→likes）；以s/x/ch/sh/o结尾加es（watch→watches, go→goes）；辅音+y变y为i加es（study→studies）。', label: '变化规则', animationType: 'pulse' },
          { type: 'example', content: 'like → likes\nswim → swims\nwatch → watches\ngo → goes\nstudy → studies', label: '动词变化表', animationType: 'sequence' },
          { type: 'tip', content: 'have的第三人称单数是has（特殊变化）：I have → He has。be动词的第三人称单数是is：I am → She is。', label: '特殊变化', animationType: 'pulse' },
          { type: 'animation', content: '第三人称变化动画，主语变化导致动词加s/es', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Third Person Singular', timelineConfig: { steps: [ { text: 'I like reading.', ttsNarration: 'I like reading.' }, { text: 'He likes reading.', ttsNarration: 'He likes reading.' }, { text: 'I watch TV.', ttsNarration: 'I watch TV.' }, { text: 'She watches TV.', ttsNarration: 'She watches TV.' } ] }, ttsNarration: '第三人称单数：主语he/she，动词加s/es' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u4l2q1',
            type: 'choice',
            question: 'He ____ reading. (like)',
            options: ['likes', 'like', 'liking', 'to like'],
            answer: 'likes',
            hint: '主语He第三人称单数，动词怎么变？',
            explanation: '主语He第三人称单数，动词like加s变likes，He likes reading.他喜欢阅读'
          },
          {
            id: 'e6u4l2q2',
            type: 'choice',
            question: 'She ____ to school every day. (go)',
            options: ['goes', 'go', 'going', 'to go'],
            answer: 'goes',
            hint: 'go以o结尾，第三人称单数怎么变？',
            explanation: 'go以o结尾，第三人称单数加es变goes，She goes to school.她去上学'
          },
          {
            id: 'e6u4l2q3',
            type: 'fill',
            question: 'He ____ TV every evening. (watch) 加es',
            answer: 'watches',
            acceptableAnswers: ['Watches'],
            hint: 'watch以ch结尾，第三人称单数加es',
            explanation: 'watch以ch结尾，第三人称单数加es变watches，He watches TV.他看电视'
          },
          {
            id: 'e6u4l2q4',
            type: 'choice',
            question: 'I have a pen. → She ____ a pen.',
            options: ['has', 'have', 'having', 'to have'],
            answer: 'has',
            hint: 'have的第三人称单数是特殊变化',
            explanation: 'have的第三人称单数是特殊变化has，She has a pen.她有一支笔'
          },
          {
            id: 'e6u4l2q5',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['He likes swimming.', 'He like swimming.', 'He liking swimming.', 'He to like swimming.'],
            answer: 'He likes swimming.',
            hint: '主语He第三人称单数，动词加s',
            explanation: '主语He第三人称单数，动词like加s变likes，He likes swimming.他喜欢游泳'
          },
          {
            id: 'e6u4l2q6',
            type: 'fill',
            question: 'She ____ English every day. (study) 变y为i加es',
            answer: 'studies',
            acceptableAnswers: ['Studies'],
            hint: 'study以辅音+y结尾，变y为i加es',
            explanation: 'study以辅音+y结尾，变y为i加es变studies，She studies English.她学英语'
          },
          {
            id: 'e6u4l2q7',
            type: 'choice',
            question: 'She ____ long hair. (have/has)',
            options: ['has', 'have', 'is', 'are'],
            answer: 'has',
            hint: '[描述朋友外貌]（英语三年级-第2单元）',
            explanation: '主语she第三人称单数，用has，三年级My Friends单元学过用has描述朋友外貌'
          }
        ]
      },
      {
        id: 'e6u4l3',
        title: 'What\'s your hobby? 句型',
        order: 3,
        teachingMethod: '情境对话法',
        iDo: '家长示范问答爱好："What\'s your hobby? I like reading. He likes swimming."',
        weDo: '亲子一起问答爱好，家长问孩子答，再互换角色',
        youDo: '孩子独立用What\'s your hobby?询问并回答爱好',
        parentTips: 'What\'s your hobby?问爱好，回答用I like + 动词ing。问别人用What does he/she like?',
        funElement: '玩"爱好采访"游戏，孩子当记者采访家人的爱好',
        gsapAnimations: ['GSAP:爱好问答展开-timeline', 'GSAP:对话气泡弹出-stagger', 'GSAP:问答高亮-highlight'],
        images: ['IMG:illustration|爱好对话场景|500x300|可爱卡通风|png|对话气泡', 'IMG:illustration|爱好采访图|500x300|可爱卡通风|png|采访场景'],
        content: [
          { type: 'text', content: 'What\'s your hobby? 用来问对方的爱好。回答用I like + 动词ing形式。问第三人称用What does he/she like?', animationType: 'reveal' },
          { type: 'example', content: 'What\'s your hobby? — 你的爱好是什么？\nI like reading. — 我喜欢阅读。\nWhat does he like? — 他喜欢什么？\nHe likes swimming. — 他喜欢游泳。', label: '问爱好句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s your hobby, Amy?\nAmy: I like collecting stamps. What about you?\nTom: I like drawing.\nAmy: What does your brother like?\nTom: He likes swimming.', label: '询问爱好对话', animationType: 'timeline' },
          { type: 'tip', content: 'What\'s = What is。问"你"用What\'s your hobby?问"他/她"用What does he/she like?注意第三人称用does。', label: '人称变化', animationType: 'pulse' },
          { type: 'example', content: 'What\'s your hobby? I like reading.\nWhat does she like? She likes dancing.\nWhat do they like? They like playing football.', label: '问答操练', animationType: 'sequence' },
          { type: 'tip', content: 'hobby是可数名词，复数是hobbies（变y为i加es）。My hobbies are reading and swimming.我的爱好是阅读和游泳。', label: 'hobby复数', animationType: 'pulse' },
          { type: 'animation', content: '爱好问答逐步展开动画，配合时间线展示问答过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Hobbies Q&A', timelineConfig: { steps: [ { text: 'What\'s your hobby?', ttsNarration: 'What is your hobby?' }, { text: 'I like reading.', ttsNarration: 'I like reading.' }, { text: 'What does he like?', ttsNarration: 'What does he like?' }, { text: 'He likes swimming.', ttsNarration: 'He likes swimming.' } ] }, ttsNarration: '问爱好：你的爱好是什么？我喜欢阅读。他喜欢什么？他喜欢游泳。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u4l3q1',
            type: 'choice',
            question: '____ your hobby? — I like reading.',
            options: ['What\'s', 'Where\'s', 'How\'s', 'Who\'s'],
            answer: 'What\'s',
            hint: '问爱好用哪个疑问词？',
            explanation: 'What问什么，What\'s your hobby?你的爱好是什么？'
          },
          {
            id: 'e6u4l3q2',
            type: 'choice',
            question: 'What does he like? — He ____ swimming.',
            options: ['likes', 'like', 'liking', 'to like'],
            answer: 'likes',
            hint: '主语He第三人称单数，动词怎么变？',
            explanation: '主语He第三人称单数，动词like加s变likes，He likes swimming.他喜欢游泳'
          },
          {
            id: 'e6u4l3q3',
            type: 'fill',
            question: 'What\'s ____ hobby? (你的) — I like drawing.',
            answer: 'your',
            acceptableAnswers: ['Your'],
            hint: '问对方的爱好用什么代词？',
            explanation: '问对方的爱好用your，What\'s your hobby?你的爱好是什么？'
          },
          {
            id: 'e6u4l3q4',
            type: 'choice',
            question: 'What does she like? — She likes ____.',
            options: ['dancing', 'dance', 'dances', 'to dancing'],
            answer: 'dancing',
            hint: 'like后面接动词什么形式？',
            explanation: 'like + 动词ing形式dancing，She likes dancing.她喜欢跳舞'
          },
          {
            id: 'e6u4l3q5',
            type: 'choice',
            question: 'The plural (复数) of "hobby" is ____.',
            options: ['hobbies', 'hobbys', 'hobbyes', 'hobies'],
            answer: 'hobbies',
            hint: '以辅音+y结尾的名词复数怎么变？',
            explanation: 'hobby以辅音+y结尾，复数变y为i加es变hobbies'
          },
          {
            id: 'e6u4l3q6',
            type: 'fill',
            question: '— What do ____ like? — They like playing football. (他们)',
            answer: 'they',
            acceptableAnswers: ['They'],
            hint: '问"他们"的爱好用什么代词？',
            explanation: '问他们的爱好用they，What do they like?他们喜欢什么？'
          },
          {
            id: 'e6u4l3q7',
            type: 'fill',
            question: 'I like ____ pictures. It is fun. (画)',
            answer: 'drawing',
            acceptableAnswers: ['Drawing'],
            hint: '[爱好词汇]（英语二年级-第7单元）',
            explanation: 'like后面接动词ing，drawing是画画，是二年级Hobbies单元学过的爱好词汇'
          }
        ]
      },
      {
        id: 'e6u4l4',
        title: 'My pen pal——介绍笔友',
        order: 4,
        teachingMethod: '项目式学习',
        iDo: '家长示范介绍笔友："I have a pen pal. His name is Tom. He likes swimming."',
        weDo: '亲子一起讨论并写一段介绍笔友的话，互相分享',
        youDo: '孩子独立用一般现在时写一段介绍笔友的话',
        parentTips: '用一般现在时介绍笔友的爱好和生活，注意第三人称单数动词变化',
        funElement: '玩"笔友卡片"游戏，制作笔友信息卡并分享',
        gsapAnimations: ['GSAP:笔友信息逐步出现-timeline', 'GSAP:信息卡片-stagger', 'GSAP:关键词高亮-highlight'],
        images: ['IMG:illustration|笔友介绍卡|400x300|可爱卡通风|png|卡片模板', 'IMG:illustration|笔友通信图|500x300|可爱卡通风|png|笔友通信'],
        content: [
          { type: 'text', content: '笔友是用书信交流的朋友。让我们用一般现在时介绍笔友吧！包括姓名、年龄、住址、爱好等信息。', animationType: 'reveal' },
          { type: 'example', content: 'I have a pen pal. His name is Tom. He is 12. He lives in London. He likes swimming and reading.', label: '笔友介绍范例', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Do you have a pen pal?\nAmy: Yes, I have a pen pal in Canada.\nTom: What does she like?\nAmy: She likes drawing and collecting stamps.', label: '谈论笔友', animationType: 'timeline' },
          { type: 'tip', content: '介绍笔友用一般现在时，注意第三人称单数：He lives（不是live）、She likes（不是like）、He has（不是have）。', label: '时态提醒', animationType: 'pulse' },
          { type: 'example', content: 'His name is Tom. 他叫汤姆。\nHe lives in London. 他住在伦敦。\nHe likes swimming. 他喜欢游泳。\nHe goes to school by bus. 他坐公交上学。', label: '介绍笔友句型', animationType: 'sequence' },
          { type: 'tip', content: 'pen pal = pen（笔）+ pal（朋友），即笔友。也可以说pen friend。介绍时要包含基本信息和爱好。', label: '词汇构成', animationType: 'pulse' },
          { type: 'animation', content: '笔友信息逐步出现动画，配合时间线展示介绍过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'My Pen Pal', timelineConfig: { steps: [ { text: 'I have a pen pal.', ttsNarration: 'I have a pen pal.' }, { text: 'His name is Tom.', ttsNarration: 'His name is Tom.' }, { text: 'He lives in London.', ttsNarration: 'He lives in London.' }, { text: 'He likes swimming.', ttsNarration: 'He likes swimming.' } ] }, ttsNarration: '我的笔友：我有个笔友。他叫汤姆。他住在伦敦。他喜欢游泳。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u4l4q1',
            type: 'choice',
            question: 'I have a pen pal. ____ name is Tom.',
            options: ['His', 'He', 'She', 'Her'],
            answer: 'His',
            hint: '指代男性笔友的"他的"用什么代词？',
            explanation: '指代男性笔友的"他的"用His，His name is Tom.他叫汤姆'
          },
          {
            id: 'e6u4l4q2',
            type: 'choice',
            question: 'He ____ in London. (live) 第三人称单数',
            options: ['lives', 'live', 'living', 'to live'],
            answer: 'lives',
            hint: '主语He第三人称单数，动词怎么变？',
            explanation: '主语He第三人称单数，动词live加s变lives，He lives in London.他住在伦敦'
          },
          {
            id: 'e6u4l4q3',
            type: 'fill',
            question: 'He ____ swimming and reading. (like) 加s',
            answer: 'likes',
            acceptableAnswers: ['Likes'],
            hint: '主语He第三人称单数，动词加s',
            explanation: '主语He第三人称单数，动词like加s变likes，He likes swimming and reading.'
          },
          {
            id: 'e6u4l4q4',
            type: 'choice',
            question: 'Which sentence about a pen pal is correct?',
            options: ['He goes to school by bus.', 'He go to school by bus.', 'He going to school by bus.', 'He to go school by bus.'],
            answer: 'He goes to school by bus.',
            hint: '主语He第三人称单数，go怎么变？',
            explanation: '主语He第三人称单数，go加es变goes，He goes to school by bus.他坐公交上学'
          },
          {
            id: 'e6u4l4q5',
            type: 'choice',
            question: 'pen pal = pen + ____. (朋友)',
            options: ['pal', 'pen', 'pan', 'pet'],
            answer: 'pal',
            hint: 'pen pal是笔友，pal是什么意思？',
            explanation: 'pen pal = pen（笔）+ pal（朋友），表示笔友，pal是朋友的意思'
          },
          {
            id: 'e6u4l4q6',
            type: 'fill',
            question: 'She ____ drawing and collecting stamps. (like) 加s',
            answer: 'likes',
            acceptableAnswers: ['Likes'],
            hint: '主语She第三人称单数，动词加s',
            explanation: '主语She第三人称单数，动词like加s变likes，She likes drawing and collecting stamps.'
          },
          {
            id: 'e6u4l4q7',
            type: 'choice',
            question: 'My friend is tall and ____. He is very strong.',
            options: ['strong', 'sad', 'tired', 'hungry'],
            answer: 'strong',
            hint: '[描述朋友外貌]（英语三年级-第2单元）',
            explanation: 'strong是强壮的，三年级My Friends单元学过用tall/strong描述朋友外貌'
          }
        ]
      },
      {
        id: 'e6u4l5',
        title: '第四单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        iDo: '家长示范检测题型，讲解爱好、一般现在时、句型、笔友介绍四类题',
        weDo: '亲子一起做练习题，家长引导孩子分析题目，讨论答案',
        youDo: '孩子独立完成综合检测，目标正确率≥80%',
        parentTips: '检测覆盖爱好+一般现在时+句型+笔友四方面，错题要分析原因并复习对应课时',
        funElement: '通关后撒花庆祝，获得"PenPal达人"徽章',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:题目逐个出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|PenPal达人徽章|300x300|可爱卡通风|png|金色徽章', 'IMG:illustration|笔友综合场景|500x300|可爱卡通风|png|综合笔友'],
        content: [
          { type: 'text', content: '本单元我们学习了爱好词汇、一般现在时第三人称单数、What\'s your hobby?句型和笔友介绍。现在来做综合检测！', animationType: 'reveal' },
          { type: 'example', content: '爱好：reading, swimming, collecting stamps, drawing\n一般现在时：he/she + 动词s/es\n句型：What\'s your hobby? I like...\n笔友：He lives in... He likes...', label: '本单元知识梳理', animationType: 'cardReveal' },
          { type: 'tip', content: 'like + 动词ing形式表示爱好。第三人称单数动词加s/es。介绍笔友用一般现在时。', label: '重点回顾', animationType: 'pulse' },
          { type: 'dialogue', content: 'Tom: What\'s your hobby?\nAmy: I like collecting stamps. My pen pal likes drawing.\nTom: Where does he live?\nAmy: He lives in London.', label: '综合笔友对话', animationType: 'timeline' },
          { type: 'example', content: '易错点1：He likes（正确）/ He like（错误）\n易错点2：like reading（正确）/ like read（错误）\n易错点3：He goes（正确）/ He go（错误）', label: '易错点提醒', animationType: 'sequence' },
          { type: 'tip', content: '介绍笔友要包含姓名、年龄、住址、爱好等信息，用一般现在时，注意第三人称单数。', label: '写作建议', animationType: 'pulse' },
          { type: 'animation', content: '通关撒花动画，正确率达到80%触发庆祝特效', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'PenPal Star', cardRevealConfig: { cards: [ { front: 'reading', back: '📖', ttsText: 'reading' }, { front: 'swimming', back: '🏊', ttsText: 'swimming' }, { front: 'drawing', back: '🎨', ttsText: 'drawing' } ] }, ttsNarration: '笔友达人通关庆祝！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u4l5q1',
            type: 'choice',
            question: 'I like ____ stamps. (收集)',
            options: ['collecting', 'collect', 'collects', 'to collecting'],
            answer: 'collecting',
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式collecting，I like collecting stamps.我喜欢集邮'
          },
          {
            id: 'e6u4l5q2',
            type: 'choice',
            question: 'He ____ swimming every weekend. (like) 第三人称单数',
            options: ['likes', 'like', 'liking', 'to like'],
            answer: 'likes',
            hint: '主语He第三人称单数，动词加s',
            explanation: '主语He第三人称单数，动词like加s变likes，He likes swimming.他喜欢游泳'
          },
          {
            id: 'e6u4l5q3',
            type: 'fill',
            question: '____ your hobby? — I like reading. (什么是)',
            answer: 'What\'s',
            acceptableAnswers: ['What is', "What's"],
            hint: '问爱好用哪个疑问词？',
            explanation: 'What问什么，What\'s your hobby?你的爱好是什么？'
          },
          {
            id: 'e6u4l5q4',
            type: 'choice',
            question: '【期末真题】She ____ in London with her family. (live)',
            options: ['lives', 'live', 'living', 'to live'],
            answer: 'lives',
            hint: '主语She第三人称单数，动词怎么变？',
            explanation: '主语She第三人称单数，动词live加s变lives，She lives in London.她住在伦敦'
          },
          {
            id: 'e6u4l5q5',
            type: 'choice',
            question: 'What does he like? — He likes ____.',
            options: ['drawing', 'draw', 'draws', 'to drawing'],
            answer: 'drawing',
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式drawing，He likes drawing.他喜欢画画'
          },
          {
            id: 'e6u4l5q6',
            type: 'fill',
            question: 'He ____ to school by bus every day. (go) 加es',
            answer: 'goes',
            acceptableAnswers: ['Goes'],
            hint: 'go以o结尾，第三人称单数加es',
            explanation: 'go以o结尾，第三人称单数加es变goes，He goes to school by bus.他坐公交上学'
          },
          {
            id: 'e6u4l5q7',
            type: 'choice',
            question: 'Which one is a hobby (爱好)?',
            options: ['swimming', 'blue', 'Monday', 'desk'],
            answer: 'swimming',
            hint: '[爱好词汇]（英语二年级-第7单元）',
            explanation: 'swimming游泳是爱好，是二年级Hobbies单元学的词汇，blue/Monday/desk都不是爱好'
          }
        ]
      }
    ]
  },
  // ==================== 第五单元：What Does She Do ====================
  {
    id: 'e6u5',
    title: 'What Does She Do',
    subtitle: '职业词汇与What does...do?句型',
    order: 5,
    lessons: [
      {
        id: 'e6u5l1',
        title: '职业词汇：teacher/doctor/engineer/pilot',
        order: 1,
        teachingMethod: 'TPR全身反应法+角色扮演',
        iDo: '家长模仿职业动作说单词："teacher/doctor/engineer/pilot"，配合夸张动作',
        weDo: '亲子一起演职业，家长做动作孩子猜单词，再互换角色',
        youDo: '孩子独立模仿职业动作并说出对应单词',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长做写字动作问“What do I do?”②孩子应答：“You are a teacher.”③答错引导：若孩子说不全职业词，家长先教teacher/doctor/driver/police，再演一个让孩子猜。④快速出题：家长演职业动作，孩子用He/She is a...猜。',
        funElement: '玩"职业模仿秀"游戏，孩子演职业，家长猜，再互换角色',
        gsapAnimations: ['GSAP:职业卡片翻转-cardReveal', 'GSAP:职业人物出现-stagger', 'GSAP:职业图标-starFlyIn'],
        images: ['IMG:illustration|职业人物图|500x300|可爱卡通风|png|4种职业', 'IMG:illustration|职业工具图|500x300|可爱卡通风|png|职业工具'],
        content: [
          { type: 'text', content: '每个人都有自己的职业。常见的职业有：teacher（老师）、doctor（医生）、engineer（工程师）、pilot（飞行员）。今天来学习它们。', animationType: 'reveal' },
          { type: 'example', content: 'teacher — 老师\ndoctor — 医生\nengineer — 工程师\npilot — 飞行员', label: '职业词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What does your mother do?\nAmy: She is a doctor. She helps sick people.\nTom: What does your father do?\nAmy: He is an engineer. He builds bridges.', label: '谈论职业', animationType: 'timeline' },
          { type: 'tip', content: '职业名词前用a/an：a teacher, a doctor, an engineer, a pilot。engineer以元音音素开头用an。', label: '冠词用法', animationType: 'pulse' },
          { type: 'example', content: 'She is a teacher. 她是老师。\nHe is a doctor. 他是医生。\nHe is an engineer. 他是工程师。\nShe is a pilot. 她是飞行员。', label: '职业造句', animationType: 'sequence' },
          { type: 'tip', content: '职业词汇常以-er或-or结尾：teach（教）→teacher（老师），work（工作）→worker（工人），act（表演）→actor（演员）。', label: '词汇构成', animationType: 'pulse' },
          { type: 'animation', content: '职业卡片翻转动画，翻转后揭示职业词汇和对应emoji', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Jobs', cardRevealConfig: { cards: [ { front: 'teacher', back: '👩‍🏫', ttsText: 'teacher, 老师' }, { front: 'doctor', back: '👨‍⚕️', ttsText: 'doctor, 医生' }, { front: 'engineer', back: '👷', ttsText: 'engineer, 工程师' }, { front: 'pilot', back: '✈️', ttsText: 'pilot, 飞行员' } ] }, ttsNarration: '职业：老师、医生、工程师、飞行员' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u5l1q1',
            type: 'choice',
            question: 'My mother is a ____. She helps sick people. (医生)',
            options: ['doctor', 'teacher', 'pilot', 'farmer'],
            answer: 'doctor',
            hint: '帮助病人的职业',
            explanation: 'doctor是医生，帮助病人，My mother is a doctor.我妈妈是医生'
          },
          {
            id: 'e6u5l1q2',
            type: 'choice',
            question: 'He is an ____. He builds bridges. (工程师)',
            options: ['engineer', 'teacher', 'doctor', 'singer'],
            answer: 'engineer',
            hint: '建造桥梁的职业',
            explanation: 'engineer是工程师，建造桥梁等工程，He is an engineer.他是工程师'
          },
          {
            id: 'e6u5l1q3',
            type: 'fill',
            question: 'She is a ____. She teaches students. (老师)',
            answer: 'teacher',
            acceptableAnswers: ['Teacher'],
            hint: '教学生的职业',
            explanation: 'teacher是老师，教学生，She is a teacher.她是老师'
          },
          {
            id: 'e6u5l1q4',
            type: 'choice',
            question: 'He is ____ engineer. (选冠词)',
            options: ['an', 'a', 'the', 'no'],
            answer: 'an',
            hint: 'engineer以元音音素开头，用哪个冠词？',
            explanation: 'engineer以元音音素开头，用an，He is an engineer.他是工程师'
          },
          {
            id: 'e6u5l1q5',
            type: 'choice',
            question: 'A ____ flies a plane in the sky. (飞行员)',
            options: ['pilot', 'doctor', 'teacher', 'farmer'],
            answer: 'pilot',
            hint: '在天上开飞机的职业',
            explanation: 'pilot是飞行员，驾驶飞机，A pilot flies a plane.飞行员开飞机'
          },
          {
            id: 'e6u5l1q6',
            type: 'fill',
            question: 'teach + er = ____ (老师)',
            answer: 'teacher',
            acceptableAnswers: ['Teacher'],
            hint: 'teach加er表示"做...的人"',
            explanation: 'teach（教）+ er = teacher（老师），-er表示做某事的人'
          },
          {
            id: 'e6u5l1q7',
            type: 'choice',
            question: 'A ____ helps sick people in the hospital.',
            options: ['doctor', 'teacher', 'pilot', 'farmer'],
            answer: 'doctor',
            hint: '[职业词汇]（英语三年级-第5单元）',
            explanation: 'doctor医生在医院帮助病人，是三年级Jobs单元学过的职业词汇'
          }
        ]
      },
      {
        id: 'e6u5l2',
        title: 'What does...do? 职业问答',
        order: 2,
        teachingMethod: '情境对话法',
        iDo: '家长示范问答职业："What does your mother do? She is a doctor."',
        weDo: '亲子一起问答职业，家长问孩子答，再互换角色',
        youDo: '孩子独立用What does...do?询问并回答职业',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“What does your father do?”②孩子应答：“He is a doctor.”③答错引导：若孩子用What do问三单，家长强调“问第三人称用does不是do”，再练What does she do?。④快速出题：家长说家人身份，孩子用What does...do?提问并回答。',
        funElement: '玩"职业猜猜猜"游戏，一人描述职业特征，另一人猜职业',
        gsapAnimations: ['GSAP:职业问答展开-timeline', 'GSAP:对话气泡弹出-stagger', 'GSAP:问答高亮-highlight'],
        images: ['IMG:illustration|职业对话场景|500x300|可爱卡通风|png|对话气泡', 'IMG:illustration|职业问答图|500x300|可爱卡通风|png|职业问答'],
        content: [
          { type: 'text', content: 'What does...do? 用来询问某人的职业。回答用He/She is a/an + 职业。问第三人称用does。', animationType: 'reveal' },
          { type: 'example', content: 'What does your mother do? — 你妈妈做什么工作？\nShe is a doctor. — 她是医生。\nWhat does your father do? — 你爸爸做什么工作？\nHe is an engineer. — 他是工程师。', label: '职业问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What does your mother do?\nAmy: She is a teacher. She teaches English.\nTom: What does your father do?\nAmy: He is a pilot. He flies planes.', label: '询问职业对话', animationType: 'timeline' },
          { type: 'tip', content: '问"你妈妈/爸爸"用What does your mother/father do?回答用She/He is a/an + 职业。does是第三人称助动词。', label: '句型结构', animationType: 'pulse' },
          { type: 'example', content: 'What does she do? She is a doctor.\nWhat does he do? He is an engineer.\nWhat do you do? I am a student.', label: '问答操练', animationType: 'sequence' },
          { type: 'tip', content: '问"你"用What do you do?问"他/她"用What does he/she do?注意do和does的区别。', label: '人称区别', animationType: 'pulse' },
          { type: 'animation', content: '职业问答逐步展开动画，配合时间线展示问答过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Jobs Q&A', timelineConfig: { steps: [ { text: 'What does your mother do?', ttsNarration: 'What does your mother do?' }, { text: 'She is a doctor.', ttsNarration: 'She is a doctor.' }, { text: 'What does your father do?', ttsNarration: 'What does your father do?' }, { text: 'He is an engineer.', ttsNarration: 'He is an engineer.' } ] }, ttsNarration: '职业问答：你妈妈做什么工作？她是医生。你爸爸呢？他是工程师。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u5l2q1',
            type: 'choice',
            question: '____ does your mother do? — She is a doctor.',
            options: ['What', 'Where', 'How', 'Who'],
            answer: 'What',
            hint: '问职业用哪个疑问词？',
            explanation: 'What问做什么工作，What does your mother do?你妈妈做什么工作？'
          },
          {
            id: 'e6u5l2q2',
            type: 'choice',
            question: 'What does your father do? — ____ is an engineer.',
            options: ['He', 'She', 'His', 'Her'],
            answer: 'He',
            hint: '指代father用什么代词？',
            explanation: 'father是男性，用He，He is an engineer.他是工程师'
          },
          {
            id: 'e6u5l2q3',
            type: 'fill',
            question: 'What ____ she do? — She is a teacher. (does)',
            answer: 'does',
            acceptableAnswers: ['Does'],
            hint: '主语she第三人称单数，用哪个助动词？',
            explanation: '主语she第三人称单数，用does，What does she do?她做什么工作？'
          },
          {
            id: 'e6u5l2q4',
            type: 'choice',
            question: 'What does he do? — He is ____ pilot.',
            options: ['a', 'an', 'the', 'no'],
            answer: 'a',
            hint: 'pilot以辅音音素开头，用哪个冠词？',
            explanation: 'pilot以辅音音素开头，用a，He is a pilot.他是飞行员'
          },
          {
            id: 'e6u5l2q5',
            type: 'choice',
            question: 'Which question is correct?',
            options: ['What does she do?', 'What do she do?', 'What does she does?', 'What she does do?'],
            answer: 'What does she do?',
            hint: '第三人称疑问句：What + does + 主语 + 动词原形?',
            explanation: '第三人称疑问句用What + does + she + do?所以What does she do?正确'
          },
          {
            id: 'e6u5l2q6',
            type: 'fill',
            question: '— What do ____ do? — I am a student. (你)',
            answer: 'you',
            acceptableAnswers: ['You'],
            hint: '问"你"用什么代词？',
            explanation: '问"你"用you，What do you do?你做什么工作？回答I am a student.'
          },
          {
            id: 'e6u5l2q7',
            type: 'choice',
            question: '—How many people are there in your family? —____ five.',
            options: ['There are', 'There is', 'They are', 'It is'],
            answer: 'There are',
            hint: '[How many句型]（英语四年级-第6单元）',
            explanation: '询问数量用How many，回答用There are+复数，是四年级Meet My Family单元学的句型'
          }
        ]
      },
      {
        id: 'e6u5l3',
        title: 'Where does...work? 工作地点',
        order: 3,
        teachingMethod: '情境式教学法',
        iDo: '家长示范问答工作地点："Where does she work? She works in a hospital."',
        weDo: '亲子一起问答工作地点，家长问孩子答，再互换角色',
        youDo: '孩子独立用Where does...work?询问并回答工作地点',
        parentTips: 'Where does...work?问工作地点，回答用He/She works in + 地点',
        funElement: '玩"工作地点配对"游戏，把职业和工作地点配对',
        gsapAnimations: ['GSAP:工作场所出现-sceneBuild', 'GSAP:地点职业配对-compare', 'GSAP:配对高亮-highlight'],
        images: ['IMG:illustration|工作场所图|500x300|可爱卡通风|png|医院/学校', 'IMG:illustration|职业地点配对|500x300|可爱卡通风|png|配对图'],
        content: [
          { type: 'text', content: 'Where does...work? 用来问某人在哪里工作。回答用He/She works in + 地点。不同职业在不同地方工作。', animationType: 'reveal' },
          { type: 'example', content: 'Where does she work? — 她在哪儿工作？\nShe works in a hospital. — 她在医院工作。\nWhere does he work? — 他在哪儿工作？\nHe works in a school. — 他在学校工作。', label: '工作地点句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Where does your mother work?\nAmy: She works in a hospital.\nTom: Where does your father work?\nAmy: He works at an airport. He is a pilot.', label: '询问工作地点', animationType: 'timeline' },
          { type: 'tip', content: 'work in + 大地点（hospital, school），work at + 具体地点（airport, office）。works是work的第三人称单数形式。', label: '介词用法', animationType: 'pulse' },
          { type: 'example', content: 'A doctor works in a hospital. 医生在医院工作。\nA teacher works in a school. 老师在学校工作。\nA pilot works at an airport. 飞行员在机场工作。\nA farmer works on a farm. 农民在农场工作。', label: '职业与地点', animationType: 'sequence' },
          { type: 'tip', content: '第三人称单数动词work要加s变works：She works（正确）/ She work（错误）。这是第三人称单数规则。', label: '动词变化', animationType: 'pulse' },
          { type: 'animation', content: '工作场所逐步出现动画，展示职业与工作地点的对应关系', animationType: 'compare', animationConfig: { sceneType: 'compare', title: 'Jobs & Places', compareConfig: { leftItems: ['doctor', 'teacher', 'pilot'], rightItems: ['hospital', 'school', 'airport'], result: 'equal', resultText: '职业与工作地点对应' }, ttsNarration: '职业与工作地点：医生在医院，老师在学校，飞行员在机场' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u5l3q1',
            type: 'choice',
            question: '____ does she work? — She works in a hospital.',
            options: ['Where', 'What', 'How', 'Who'],
            answer: 'Where',
            hint: '问地点用哪个疑问词？',
            explanation: 'Where问地点，Where does she work?她在哪儿工作？'
          },
          {
            id: 'e6u5l3q2',
            type: 'choice',
            question: 'A doctor works in a ____.',
            options: ['hospital', 'school', 'farm', 'airport'],
            answer: 'hospital',
            hint: '医生在哪里工作？',
            explanation: '医生在医院工作，A doctor works in a hospital.'
          },
          {
            id: 'e6u5l3q3',
            type: 'fill',
            question: 'She ____ in a school. (work) 加s',
            answer: 'works',
            acceptableAnswers: ['Works'],
            hint: '主语She第三人称单数，动词加s',
            explanation: '主语She第三人称单数，动词work加s变works，She works in a school.'
          },
          {
            id: 'e6u5l3q4',
            type: 'choice',
            question: 'A teacher works in a ____.',
            options: ['school', 'hospital', 'airport', 'farm'],
            answer: 'school',
            hint: '老师在哪里工作？',
            explanation: '老师在学校工作，A teacher works in a school.'
          },
          {
            id: 'e6u5l3q5',
            type: 'choice',
            question: 'A pilot works ____ an airport.',
            options: ['at', 'in', 'on', 'of'],
            answer: 'at',
            hint: 'airport是具体地点，用哪个介词？',
            explanation: '具体地点airport用at，A pilot works at an airport.飞行员在机场工作'
          },
          {
            id: 'e6u5l3q6',
            type: 'fill',
            question: 'A farmer works on a ____. (农场)',
            answer: 'farm',
            acceptableAnswers: ['Farm'],
            hint: '农民在哪里工作？',
            explanation: '农民在农场工作，A farmer works on a farm.'
          },
          {
            id: 'e6u5l3q7',
            type: 'choice',
            question: 'A ____ works at a school and teaches students.',
            options: ['teacher', 'doctor', 'pilot', 'cook'],
            answer: 'teacher',
            hint: '[职业词汇]（英语三年级-第5单元）',
            explanation: 'teacher老师在学校教书，是三年级Jobs单元学过的职业词汇'
          }
        ]
      },
      {
        id: 'e6u5l4',
        title: 'My dream——我的梦想',
        order: 4,
        teachingMethod: '项目式学习',
        iDo: '家长示范描述梦想："I want to be a teacher because I like helping children."',
        weDo: '亲子一起讨论并描述梦想，互相分享',
        youDo: '孩子独立写一段描述自己梦想的话',
        parentTips: '用I want to be a... because...描述梦想，说明原因',
        funElement: '玩"梦想卡片"游戏，制作梦想卡并分享',
        gsapAnimations: ['GSAP:梦想逐条出现-stagger', 'GSAP:梦想步骤-timeline', 'GSAP:关键词高亮-highlight'],
        images: ['IMG:illustration|梦想卡模板|400x300|可爱卡通风|png|梦想模板', 'IMG:illustration|梦想职业图|500x300|可爱卡通风|png|梦想职业'],
        content: [
          { type: 'text', content: '每个人都有梦想。用I want to be a... because...来描述你的梦想吧！说明你想成为什么职业及原因。', animationType: 'reveal' },
          { type: 'example', content: 'I want to be a teacher because I like helping children.\nI want to be a doctor because I want to help sick people.\nI want to be a pilot because I like flying.', label: '梦想描述范例', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What do you want to be?\nAmy: I want to be a doctor because I want to help people. What about you?\nTom: I want to be a pilot. I like flying in the sky.\nAmy: That\'s a great dream!', label: '分享梦想', animationType: 'timeline' },
          { type: 'tip', content: 'I want to be + 职业，表示"我想成为..."。because接原因从句，说明为什么有这个梦想。', label: '句型结构', animationType: 'pulse' },
          { type: 'example', content: 'I want to be a teacher. 我想当老师。\nI want to be a doctor. 我想当医生。\nI want to be an engineer. 我想当工程师。\nI want to be a pilot. 我想当飞行员。', label: '梦想句型操练', animationType: 'sequence' },
          { type: 'tip', content: '描述梦想要有职业和原因。原因可以是爱好（I like...）或愿望（I want to help...）。梦想要积极向上。', label: '写作技巧', animationType: 'pulse' },
          { type: 'animation', content: '梦想描述逐步出现动画，配合时间线展示梦想过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'My Dream', timelineConfig: { steps: [ { text: 'I want to be a teacher.', ttsNarration: 'I want to be a teacher.' }, { text: 'because I like helping children.', ttsNarration: 'because I like helping children.' }, { text: 'I want to be a doctor.', ttsNarration: 'I want to be a doctor.' }, { text: 'because I want to help people.', ttsNarration: 'because I want to help people.' } ] }, ttsNarration: '我的梦想：我想当老师因为我喜欢帮助孩子。我想当医生因为我想帮助别人。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u5l4q1',
            type: 'choice',
            question: 'I want to ____ a teacher. (成为)',
            options: ['be', 'is', 'am', 'are'],
            answer: 'be',
            hint: 'want to后面接动词原形',
            explanation: 'want to + 动词原形be，I want to be a teacher.我想当老师'
          },
          {
            id: 'e6u5l4q2',
            type: 'choice',
            question: 'I want to be a doctor ____ I want to help people. (因为)',
            options: ['because', 'so', 'but', 'and'],
            answer: 'because',
            hint: '说明原因用哪个连词？',
            explanation: 'because表示因为，说明原因，I want to be a doctor because I want to help people.'
          },
          {
            id: 'e6u5l4q3',
            type: 'fill',
            question: 'I want to be a ____ because I like flying. (飞行员)',
            answer: 'pilot',
            acceptableAnswers: ['Pilot'],
            hint: '喜欢飞行的职业',
            explanation: 'pilot是飞行员，I want to be a pilot because I like flying.我想当飞行员因为我喜欢飞行'
          },
          {
            id: 'e6u5l4q4',
            type: 'choice',
            question: 'Which sentence about a dream is correct?',
            options: ['I want to be an engineer.', 'I want to is an engineer.', 'I want be a engineer.', 'I want to are engineer.'],
            answer: 'I want to be an engineer.',
            hint: 'want to + be + an + 元音开头职业',
            explanation: 'want to + 动词原形be，engineer用an，I want to be an engineer.我想当工程师'
          },
          {
            id: 'e6u5l4q5',
            type: 'choice',
            question: 'I want to be a teacher ____ I like children. (因为)',
            options: ['because', 'or', 'but', 'so'],
            answer: 'because',
            hint: '说明喜欢孩子的原因',
            explanation: 'because表示因为，I want to be a teacher because I like children.'
          },
          {
            id: 'e6u5l4q6',
            type: 'fill',
            question: 'I want to ____ a doctor because I want to help sick people. (成为)',
            answer: 'be',
            acceptableAnswers: ['Be'],
            hint: 'want to后面接动词原形',
            explanation: 'want to + 动词原形be，I want to be a doctor.我想当医生'
          },
          {
            id: 'e6u5l4q7',
            type: 'fill',
            question: 'My father and my ____ are my parents. (妈妈)',
            answer: 'mother',
            acceptableAnswers: ['Mother'],
            hint: '[家庭成员词汇]（英语四年级-第6单元）',
            explanation: 'mother妈妈，father和mother合称parents父母，是四年级Meet My Family单元学的家庭成员词汇'
          }
        ]
      },
      {
        id: 'e6u5l5',
        title: '第五单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        iDo: '家长示范检测题型，讲解职业、问答、地点、梦想四类题',
        weDo: '亲子一起做练习题，家长引导孩子分析题目，讨论答案',
        youDo: '孩子独立完成综合检测，目标正确率≥80%',
        parentTips: '检测覆盖职业+句型+地点+梦想四方面，错题要分析原因并复习对应课时',
        funElement: '通关后撒花庆祝，获得"Dream达人"徽章',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:题目逐个出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|Dream达人徽章|300x300|可爱卡通风|png|金色徽章', 'IMG:illustration|职业综合场景|500x300|可爱卡通风|png|综合职业'],
        content: [
          { type: 'text', content: '本单元我们学习了职业词汇、What does...do?职业问答、Where does...work?工作地点和梦想描述。现在来做综合检测！', animationType: 'reveal' },
          { type: 'example', content: '职业：teacher, doctor, engineer, pilot\n问答：What does...do? He/She is a/an...\n地点：Where does...work? He/She works in...\n梦想：I want to be a... because...', label: '本单元知识梳理', animationType: 'cardReveal' },
          { type: 'tip', content: '问职业用What does...do?问地点用Where does...work?第三人称动词加s。描述梦想用I want to be...because...', label: '重点回顾', animationType: 'pulse' },
          { type: 'dialogue', content: 'Tom: What does your mother do?\nAmy: She is a doctor. She works in a hospital.\nTom: What do you want to be?\nAmy: I want to be a teacher because I like children.', label: '综合职业对话', animationType: 'timeline' },
          { type: 'example', content: '易错点1：an engineer（正确）/ a engineer（错误）\n易错点2：She works（正确）/ She work（错误）\n易错点3：want to be（正确）/ want be（错误）', label: '易错点提醒', animationType: 'sequence' },
          { type: 'tip', content: '描述梦想要包含职业和原因，用I want to be...because...。梦想要积极向上，努力学习实现梦想。', label: '写作建议', animationType: 'pulse' },
          { type: 'animation', content: '通关撒花动画，正确率达到80%触发庆祝特效', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Dream Star', cardRevealConfig: { cards: [ { front: 'teacher', back: '👩‍🏫', ttsText: 'teacher' }, { front: 'doctor', back: '👨‍⚕️', ttsText: 'doctor' }, { front: 'pilot', back: '✈️', ttsText: 'pilot' } ] }, ttsNarration: '梦想达人通关庆祝！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u5l5q1',
            type: 'choice',
            question: '____ does your father do? — He is an engineer.',
            options: ['What', 'Where', 'How', 'Who'],
            answer: 'What',
            hint: '问职业用哪个疑问词？',
            explanation: 'What问职业，What does your father do?你爸爸做什么工作？'
          },
          {
            id: 'e6u5l5q2',
            type: 'choice',
            question: 'A doctor works in a ____.',
            options: ['hospital', 'school', 'farm', 'airport'],
            answer: 'hospital',
            hint: '医生在哪里工作？',
            explanation: '医生在医院工作，A doctor works in a hospital.'
          },
          {
            id: 'e6u5l5q3',
            type: 'fill',
            question: 'She ____ in a school. (work) 第三人称单数',
            answer: 'works',
            acceptableAnswers: ['Works'],
            hint: '主语She第三人称单数，动词加s',
            explanation: '主语She第三人称单数，动词work加s变works，She works in a school.'
          },
          {
            id: 'e6u5l5q4',
            type: 'choice',
            question: '【期末真题】I want to be ____ engineer because I like building things.',
            options: ['an', 'a', 'the', 'no'],
            answer: 'an',
            hint: 'engineer以元音音素开头，用哪个冠词？',
            explanation: 'engineer以元音音素开头，用an，I want to be an engineer.我想当工程师'
          },
          {
            id: 'e6u5l5q5',
            type: 'choice',
            question: 'I want to be a pilot ____ I like flying.',
            options: ['because', 'but', 'or', 'so'],
            answer: 'because',
            hint: '说明原因用哪个连词？',
            explanation: 'because表示因为，I want to be a pilot because I like flying.'
          },
          {
            id: 'e6u5l5q6',
            type: 'fill',
            question: 'I want to ____ a teacher because I like children. (成为)',
            answer: 'be',
            acceptableAnswers: ['Be'],
            hint: 'want to后面接动词原形',
            explanation: 'want to + 动词原形be，I want to be a teacher.我想当老师'
          },
          {
            id: 'e6u5l5q7',
            type: 'choice',
            question: 'Which one is a job (职业)?',
            options: ['chef', 'apple', 'run', 'Monday'],
            answer: 'chef',
            hint: '[职业词汇]（英语三年级-第5单元）',
            explanation: 'chef是厨师，属于职业，apple/run/Monday都不是职业，是三年级Jobs单元学的词汇'
          }
        ]
      }
    ]
  },
  // ==================== 第六单元：The Story of Rain ====================
  {
    id: 'e6u6',
    title: 'The Story of Rain',
    subtitle: '自然科学词汇与水循环过程',
    order: 6,
    lessons: [
      {
        id: 'e6u6l1',
        title: '自然科学词汇：rain/cloud/sun/water cycle',
        order: 1,
        teachingMethod: '情境式：科学实验',
        iDo: '家长演示水循环实验，说词汇："rain/cloud/sun/water cycle"，配合道具',
        weDo: '亲子一起观察水循环实验，家长说英语孩子指认',
        youDo: '孩子独立说水循环过程和相关词汇',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“水循环分哪三步？英语怎么说？”②孩子应答：“evaporation→condensation→precipitation。”③答错引导：若孩子记不住，家长烧水演示蒸发(水变水汽)、盖盖子演示凝结(水汽变水滴)，边演边说英文。④快速听写：家长说中文步骤，孩子说英文词。',
        funElement: '玩"水循环小实验"游戏，用热水和冰块演示水循环',
        gsapAnimations: ['GSAP:水循环动画-timeline', 'GSAP:自然词汇出现-sequence', 'GSAP:循环过程高亮-highlight'],
        images: ['IMG:illustration|水循环图|500x300|水彩画风|png|循环过程', 'IMG:illustration|自然现象图|500x300|水彩画风|png|雨云太阳'],
        content: [
          { type: 'text', content: '水在自然界中不断循环。水循环water cycle包括：sun（太阳）晒热水面，水蒸发成cloud（云），云变重就下rain（雨）。', animationType: 'reveal' },
          { type: 'example', content: 'rain — 雨\ncloud — 云\nsun — 太阳\nwater cycle — 水循环', label: '自然词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Where does rain come from?\nAmy: It comes from clouds.\nTom: Where do clouds come from?\nAmy: The sun heats water and it goes up to make clouds.', label: '谈论水循环', animationType: 'timeline' },
          { type: 'tip', content: '水循环三步：蒸发evaporation（水变水蒸气上升）→凝结condensation（水蒸气变云）→降水precipitation（云变雨落下）。', label: '水循环过程', animationType: 'pulse' },
          { type: 'example', content: 'The sun heats the water. 太阳晒热水。\nWater goes up and makes clouds. 水上升变成云。\nClouds make rain. 云变成雨。\nRain falls down. 雨落下来。', label: '水循环过程描述', animationType: 'sequence' },
          { type: 'tip', content: '水循环是大自然的奇妙过程。水从地面到天空再回到地面，循环往复，永不停歇。', label: '科学小知识', animationType: 'pulse' },
          { type: 'animation', content: '水循环动画，太阳晒水→蒸发成云→下雨的过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Water Cycle', timelineConfig: { steps: [ { text: 'The sun heats the water.', ttsNarration: 'The sun heats the water.' }, { text: 'Water goes up and makes clouds.', ttsNarration: 'Water goes up and makes clouds.' }, { text: 'Clouds make rain.', ttsNarration: 'Clouds make rain.' }, { text: 'Rain falls down.', ttsNarration: 'Rain falls down.' } ] }, ttsNarration: '水循环：太阳晒热水，水上升变成云，云变成雨，雨落下来' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u6l1q1',
            type: 'choice',
            question: 'Rain comes from the ____. (云)',
            options: ['clouds', 'sun', 'tree', 'river'],
            answer: 'clouds',
            hint: '雨从哪里来？',
            explanation: '雨来自云，Rain comes from the clouds.雨来自云'
          },
          {
            id: 'e6u6l1q2',
            type: 'choice',
            question: 'The ____ heats the water in the water cycle. (太阳)',
            options: ['sun', 'cloud', 'rain', 'moon'],
            answer: 'sun',
            hint: '水循环中什么晒热水？',
            explanation: '太阳晒热水，The sun heats the water.太阳晒热水'
          },
          {
            id: 'e6u6l1q3',
            type: 'fill',
            question: 'Water goes up and makes ____. (云)',
            answer: 'clouds',
            acceptableAnswers: ['cloud', 'Clouds', 'Cloud'],
            hint: '水上升变成什么？',
            explanation: '水上升变成云，Water goes up and makes clouds.水上升变成云'
          },
          {
            id: 'e6u6l1q4',
            type: 'choice',
            question: 'What is "水循环" in English?',
            options: ['water cycle', 'water circle', 'water round', 'water loop'],
            answer: 'water cycle',
            hint: '水循环的英文怎么说？',
            explanation: '水循环是water cycle，cycle表示循环'
          },
          {
            id: 'e6u6l1q5',
            type: 'choice',
            question: 'Which is the RIGHT order of the water cycle?',
            options: ['Sun heats water → clouds form → rain falls.', 'Rain falls → sun heats water → clouds form.', 'Clouds form → rain falls → sun heats water.', 'Sun heats water → rain falls → clouds form.'],
            answer: 'Sun heats water → clouds form → rain falls.',
            hint: '水循环的正确顺序',
            explanation: '水循环顺序：太阳晒热水→水蒸发成云→云变雨落下'
          },
          {
            id: 'e6u6l1q6',
            type: 'fill',
            question: '____ falls down from the clouds. (雨)',
            answer: 'Rain',
            acceptableAnswers: ['rain'],
            hint: '从云里落下来的是什么？',
            explanation: '雨从云里落下来，Rain falls down from the clouds.'
          },
          {
            id: 'e6u6l1q7',
            type: 'fill',
            question: 'A ____ has many trees. Animals live there. (森林)',
            answer: 'forest',
            acceptableAnswers: ['Forest'],
            hint: '[自然景观词汇]（英语三年级-第4单元）',
            explanation: 'forest森林有很多树，动物栖息其中，是三年级Nature单元学过的自然景观词汇'
          }
        ]
      },
      {
        id: 'e6u6l2',
        title: 'Where does...come from? 来源问答',
        order: 2,
        teachingMethod: '情境对话法',
        iDo: '家长示范问答来源："Where does rain come from? It comes from clouds."',
        weDo: '亲子一起问答来源，家长问孩子答，再互换角色',
        youDo: '孩子独立用Where does...come from?询问并回答来源',
        parentTips: 'Where does...come from?问来源，回答用It comes from...',
        funElement: '玩"来源探秘"游戏，问各种东西的来源',
        gsapAnimations: ['GSAP:来源问答展开-timeline', 'GSAP:对话气泡弹出-stagger', 'GSAP:问答高亮-highlight'],
        images: ['IMG:illustration|来源问答图|500x300|可爱卡通风|png|对话气泡', 'IMG:illustration|来源关系图|500x300|可爱卡通风|png|来源关系'],
        content: [
          { type: 'text', content: 'Where does...come from? 用来问某物来自哪里。回答用It comes from...。可以问雨的来源、食物的来源等。', animationType: 'reveal' },
          { type: 'example', content: 'Where does rain come from? — 雨来自哪里？\nIt comes from clouds. — 它来自云。\nWhere does milk come from? — 牛奶来自哪里？\nIt comes from cows. — 它来自奶牛。', label: '来源问答句型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Where does rain come from?\nAmy: It comes from clouds.\nTom: Where do clouds come from?\nAmy: They come from water. The sun heats water.', label: '询问来源对话', animationType: 'timeline' },
          { type: 'tip', content: 'come from表示来自。问单数用Where does it come from?问复数用Where do they come from?回答用comes from/come from。', label: '句型结构', animationType: 'pulse' },
          { type: 'example', content: 'Where does rain come from? It comes from clouds.\nWhere does milk come from? It comes from cows.\nWhere do apples come from? They come from trees.', label: '来源问答操练', animationType: 'sequence' },
          { type: 'tip', content: 'comes from是come from的第三人称单数形式。It comes from...（单数），They come from...（复数）。', label: '动词变化', animationType: 'pulse' },
          { type: 'animation', content: '来源问答逐步展开动画，配合时间线展示问答过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Where does it come from?', timelineConfig: { steps: [ { text: 'Where does rain come from?', ttsNarration: 'Where does rain come from?' }, { text: 'It comes from clouds.', ttsNarration: 'It comes from clouds.' }, { text: 'Where does milk come from?', ttsNarration: 'Where does milk come from?' }, { text: 'It comes from cows.', ttsNarration: 'It comes from cows.' } ] }, ttsNarration: '来源问答：雨来自哪里？来自云。牛奶来自哪里？来自奶牛。' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u6l2q1',
            type: 'choice',
            question: '____ does rain come from? — It comes from clouds.',
            options: ['Where', 'What', 'How', 'Who'],
            answer: 'Where',
            hint: '问来源用哪个疑问词？',
            explanation: 'Where问来自哪里，Where does rain come from?雨来自哪里？'
          },
          {
            id: 'e6u6l2q2',
            type: 'choice',
            question: 'Where does rain come from? — It ____ from clouds.',
            options: ['comes', 'come', 'coming', 'to come'],
            answer: 'comes',
            hint: '主语It第三人称单数，动词怎么变？',
            explanation: '主语It第三人称单数，动词come加s变comes，It comes from clouds.'
          },
          {
            id: 'e6u6l2q3',
            type: 'fill',
            question: 'It comes ____ clouds. (来自)',
            answer: 'from',
            acceptableAnswers: ['From'],
            hint: '表示"来自"用哪个介词？',
            explanation: 'come from表示来自，It comes from clouds.它来自云'
          },
          {
            id: 'e6u6l2q4',
            type: 'choice',
            question: 'Where does milk come from? — It comes from ____.',
            options: ['cows', 'clouds', 'trees', 'sun'],
            answer: 'cows',
            hint: '牛奶来自哪里？',
            explanation: '牛奶来自奶牛，It comes from cows.它来自奶牛'
          },
          {
            id: 'e6u6l2q5',
            type: 'choice',
            question: 'Where do apples come from? — They ____ from trees.',
            options: ['come', 'comes', 'coming', 'to come'],
            answer: 'come',
            hint: '主语They复数，动词用什么形式？',
            explanation: '主语They复数，动词用原形come，They come from trees.它们来自树'
          },
          {
            id: 'e6u6l2q6',
            type: 'fill',
            question: 'Where ____ rain come from? (does) 第三人称单数',
            answer: 'does',
            acceptableAnswers: ['Does'],
            hint: 'rain是第三人称单数，用哪个助动词？',
            explanation: 'rain是第三人称单数，用does，Where does rain come from?雨来自哪里？'
          },
          {
            id: 'e6u6l2q7',
            type: 'choice',
            question: '____ there a river in the park? — Yes, there is.',
            options: ['Is', 'Are', 'Do', 'Does'],
            answer: 'Is',
            hint: '[Is there/Are there句型]（英语五年级-第6单元）',
            explanation: '单数名词river前用Is there...?，是五年级Nature Park单元学的Is there/Are there句型'
          }
        ]
      },
      {
        id: 'e6u6l3',
        title: '科学短文阅读——水的故事',
        order: 3,
        teachingMethod: '分级阅读',
        iDo: '家长示范读科学短文，停顿讲解关键词和句子',
        weDo: '亲子一起读科学短文，家长引导孩子理解',
        youDo: '孩子独立读科学短文并回答问题',
        parentTips: '科学短文描述水循环过程，阅读时抓住关键词：sun, cloud, rain, water cycle',
        funElement: '玩"科学小读者"游戏，读完短文回答问题得星星',
        gsapAnimations: ['GSAP:短文关键句高亮-highlight', 'GSAP:阅读进度-timeline', 'GSAP:关键词出现-stagger'],
        images: ['IMG:illustration|水的故事配图|500x300|水彩画风|png|短文+图', 'IMG:illustration|阅读场景|500x300|可爱卡通风|png|阅读'],
        content: [
          { type: 'text', content: '阅读科学短文《水的故事》。The Story of Water: Water is everywhere. The sun heats the water in rivers and seas. The water goes up and makes clouds. Clouds get heavy and rain falls. Rain goes back to rivers. This is the water cycle.', animationType: 'reveal' },
          { type: 'example', content: '关键词：\nwater everywhere 水无处不在\nsun heats water 太阳晒热水\ngo up and make clouds 上升变成云\nrain falls 雨落下\nwater cycle 水循环', label: '阅读关键词', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What is the story about?\nAmy: It\'s about the water cycle.\nTom: What does the sun do?\nAmy: It heats the water.\nTom: What happens next?\nAmy: Water goes up and makes clouds.', label: '阅读理解对话', animationType: 'timeline' },
          { type: 'tip', content: '阅读科学短文要抓住关键信息：谁做了什么，过程怎样。用who/what/how提问帮助理解。', label: '阅读策略', animationType: 'pulse' },
          { type: 'example', content: 'The sun heats the water. 太阳晒热水。\nWater goes up and makes clouds. 水上升变成云。\nRain falls down. 雨落下来。\nRain goes back to rivers. 雨回到河里。', label: '短文关键句', animationType: 'sequence' },
          { type: 'tip', content: '水循环是一个循环过程，水从地面到天空再回到地面，周而复始。理解循环概念很重要。', label: '科学概念', animationType: 'pulse' },
          { type: 'animation', content: '短文关键句高亮动画，配合时间线展示阅读进度', animationType: 'sequence', animationConfig: { sceneType: 'sequence', title: 'Story of Water', sequenceConfig: { items: ['The sun heats water.', 'Water makes clouds.', 'Rain falls down.', 'Water cycle.'], order: 'custom', itemType: 'word' }, ttsNarration: '水的故事：太阳晒热水，水变成云，雨落下，这是水循环' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u6l3q1',
            type: 'choice',
            question: 'What is the story about?',
            options: ['The water cycle.', 'The sun.', 'The clouds.', 'The rain.'],
            answer: 'The water cycle.',
            hint: '文章主要讲什么？',
            explanation: '文章主要讲水循环The water cycle，描述水从地面到天空再回地面的过程'
          },
          {
            id: 'e6u6l3q2',
            type: 'choice',
            question: 'What does the sun do in the story?',
            options: ['It heats the water.', 'It makes rain.', 'It makes clouds.', 'It falls down.'],
            answer: 'It heats the water.',
            hint: '太阳在故事里做什么？',
            explanation: '太阳晒热水，It heats the water.太阳晒热水'
          },
          {
            id: 'e6u6l3q3',
            type: 'fill',
            question: 'Water goes up and makes ____. (云)',
            answer: 'clouds',
            acceptableAnswers: ['cloud', 'Clouds', 'Cloud'],
            hint: '水上升变成什么？',
            explanation: '水上升变成云，Water goes up and makes clouds.'
          },
          {
            id: 'e6u6l3q4',
            type: 'choice',
            question: 'What happens when clouds get heavy?',
            options: ['Rain falls.', 'Sun heats water.', 'Water goes up.', 'Clouds disappear.'],
            answer: 'Rain falls.',
            hint: '云变重了会怎样？',
            explanation: '云变重了就下雨，Rain falls.雨落下'
          },
          {
            id: 'e6u6l3q5',
            type: 'choice',
            question: 'Where does rain go back to?',
            options: ['Rivers.', 'The sun.', 'The sky.', 'Trees.'],
            answer: 'Rivers.',
            hint: '雨回到哪里？',
            explanation: '雨回到河里，Rain goes back to rivers.雨回到河里'
          },
          {
            id: 'e6u6l3q6',
            type: 'fill',
            question: 'This is the water ____. (循环)',
            answer: 'cycle',
            acceptableAnswers: ['Cycle'],
            hint: '水循环的英文',
            explanation: '水循环是water cycle，cycle表示循环，This is the water cycle.'
          },
          {
            id: 'e6u6l3q7',
            type: 'choice',
            question: 'Which one is a natural landscape (自然景观)?',
            options: ['mountain', 'desk', 'ruler', 'school'],
            answer: 'mountain',
            hint: '[自然景观词汇]（英语三年级-第4单元）',
            explanation: 'mountain山是自然景观，是三年级Nature单元学过的词汇，desk/ruler/school都不是自然景观'
          }
        ]
      },
      {
        id: 'e6u6l4',
        title: '描述过程——First...Then...Finally',
        order: 4,
        teachingMethod: '支架式教学法',
        iDo: '家长示范用顺序词描述过程："First, the sun heats water. Then, water makes clouds. Finally, rain falls."',
        weDo: '亲子一起用顺序词描述水循环过程，互相补充',
        youDo: '孩子独立用顺序词描述水循环过程',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“表示过程顺序的词有哪些？”②孩子应答：“First, Then, Next, Finally。”③答错引导：若孩子顺序乱，家长用做三明治为例——First拿面包、Then放肉、Next放菜、Finally盖一片，让孩子用顺序词描述。④快速出题：家长说一个流程(如刷牙)，孩子用4个顺序词描述。',
        funElement: '玩"过程讲解员"游戏，用顺序词讲解水循环过程',
        gsapAnimations: ['GSAP:顺序步骤展开-timeline', 'GSAP:顺序词出现-sequence', 'GSAP:步骤高亮-highlight'],
        images: ['IMG:illustration|过程描述图|500x300|教学风|png|顺序词', 'IMG:illustration|水循环步骤|500x300|水彩画风|png|循环步骤'],
        content: [
          { type: 'text', content: '描述过程要用顺序词：First（首先）、Then（然后）、Next（接着）、Finally（最后）。它们让描述更有条理。', animationType: 'reveal' },
          { type: 'example', content: 'First — 首先\nThen — 然后\nNext — 接着\nFinally — 最后', label: '顺序词', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Tell me about the water cycle.\nAmy: First, the sun heats water. Then, water goes up. Next, it makes clouds. Finally, rain falls.', label: '描述水循环过程', animationType: 'timeline' },
          { type: 'tip', content: '顺序词放在句首，后面加逗号：First, ... Then, ... Next, ... Finally, ...让过程描述清晰有序。', label: '顺序词用法', animationType: 'pulse' },
          { type: 'example', content: 'First, the sun heats water. 首先，太阳晒热水。\nThen, water goes up. 然后，水上升。\nNext, it makes clouds. 接着，它变成云。\nFinally, rain falls. 最后，雨落下。', label: '过程描述范例', animationType: 'sequence' },
          { type: 'tip', content: '顺序词不仅用于水循环，也用于描述做菜、做实验、一天生活等任何有顺序的过程。', label: '拓展应用', animationType: 'pulse' },
          { type: 'animation', content: '顺序步骤展开动画，配合时间线展示水循环过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Process Description', timelineConfig: { steps: [ { text: 'First, the sun heats water.', ttsNarration: 'First, the sun heats water.' }, { text: 'Then, water goes up.', ttsNarration: 'Then, water goes up.' }, { text: 'Next, it makes clouds.', ttsNarration: 'Next, it makes clouds.' }, { text: 'Finally, rain falls.', ttsNarration: 'Finally, rain falls.' } ] }, ttsNarration: '过程描述：首先太阳晒热水，然后水上升，接着变成云，最后雨落下' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u6l4q1',
            type: 'choice',
            question: '____, the sun heats water. (首先)',
            options: ['First', 'Then', 'Next', 'Finally'],
            answer: 'First',
            hint: '表示"首先"的顺序词',
            explanation: 'First表示首先，用于过程的第一步，First, the sun heats water.'
          },
          {
            id: 'e6u6l4q2',
            type: 'choice',
            question: 'First, the sun heats water. ____, water goes up. (然后)',
            options: ['Then', 'First', 'Finally', 'Before'],
            answer: 'Then',
            hint: '表示"然后"的顺序词',
            explanation: 'Then表示然后，用于过程的第二步，Then, water goes up.'
          },
          {
            id: 'e6u6l4q3',
            type: 'fill',
            question: '____, rain falls down. (最后)',
            answer: 'Finally',
            acceptableAnswers: ['finally'],
            hint: '表示"最后"的顺序词',
            explanation: 'Finally表示最后，用于过程的最后一步，Finally, rain falls down.'
          },
          {
            id: 'e6u6l4q4',
            type: 'choice',
            question: 'Which order is correct for the water cycle?',
            options: ['First, sun heats water. Then, water makes clouds. Finally, rain falls.', 'First, rain falls. Then, sun heats water. Finally, water makes clouds.', 'Finally, sun heats water. First, rain falls. Then, water makes clouds.', 'Then, sun heats water. Finally, rain falls. First, water makes clouds.'],
            answer: 'First, sun heats water. Then, water makes clouds. Finally, rain falls.',
            hint: '水循环的正确顺序',
            explanation: '水循环顺序：首先太阳晒热水，然后水变成云，最后雨落下'
          },
          {
            id: 'e6u6l4q5',
            type: 'choice',
            question: 'We use "____" to show the last step. (最后)',
            options: ['Finally', 'First', 'Then', 'Next'],
            answer: 'Finally',
            hint: '表示最后一步的顺序词',
            explanation: 'Finally表示最后，用于过程的最后一步'
          },
          {
            id: 'e6u6l4q6',
            type: 'fill',
            question: '____, it makes clouds. (接着) After "Then".',
            answer: 'Next',
            acceptableAnswers: ['next'],
            hint: '表示"接着"的顺序词，在Then之后',
            explanation: 'Next表示接着，用于过程的中间步骤，Next, it makes clouds.'
          },
          {
            id: 'e6u6l4q7',
            type: 'fill',
            question: '____ there any flowers in the park? — Yes, there are.',
            answer: 'Are',
            acceptableAnswers: ['are'],
            hint: '[Is there/Are there句型]（英语五年级-第6单元）',
            explanation: '复数名词flowers前用Are there...?，是五年级Nature Park单元学的Is there/Are there句型'
          }
        ]
      },
      {
        id: 'e6u6l5',
        title: '第六单元综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        iDo: '家长示范检测题型，讲解词汇、句型、阅读、描述四类题',
        weDo: '亲子一起做练习题，家长引导孩子分析题目，讨论答案',
        youDo: '孩子独立完成综合检测，目标正确率≥80%',
        parentTips: '检测覆盖词汇+句型+阅读+描述四方面，错题要分析原因并复习对应课时',
        funElement: '通关后撒花庆祝，获得"Nature达人"徽章',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:题目逐个出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|Nature达人徽章|300x300|可爱卡通风|png|金色徽章', 'IMG:illustration|自然综合场景|500x300|水彩画风|png|综合自然'],
        content: [
          { type: 'text', content: '本单元我们学习了自然词汇、Where does...come from?来源问答、水循环阅读和First...Then...Finally过程描述。现在来做综合检测！', animationType: 'reveal' },
          { type: 'example', content: '词汇：rain, cloud, sun, water cycle\n句型：Where does...come from? It comes from...\n阅读：水循环过程\n描述：First...Then...Next...Finally...', label: '本单元知识梳理', animationType: 'cardReveal' },
          { type: 'tip', content: '水循环：太阳晒水→蒸发成云→下雨。用顺序词First...Then...Finally描述过程更清晰。', label: '重点回顾', animationType: 'pulse' },
          { type: 'dialogue', content: 'Tom: Where does rain come from?\nAmy: It comes from clouds. First, the sun heats water. Then, water makes clouds. Finally, rain falls.', label: '综合自然对话', animationType: 'timeline' },
          { type: 'example', content: '易错点1：It comes from（正确）/ It come from（错误）\n易错点2：First, ...（逗号）\n易错点3：water cycle（正确）/ water circle（错误）', label: '易错点提醒', animationType: 'sequence' },
          { type: 'tip', content: '描述过程要有顺序，用First...Then...Next...Finally...让描述清晰。科学阅读要抓关键词。', label: '学习建议', animationType: 'pulse' },
          { type: 'animation', content: '通关撒花动画，正确率达到80%触发庆祝特效', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Nature Star', cardRevealConfig: { cards: [ { front: 'rain', back: '🌧', ttsText: 'rain' }, { front: 'cloud', back: '☁️', ttsText: 'cloud' }, { front: 'sun', back: '☀️', ttsText: 'sun' } ] }, ttsNarration: '自然达人通关庆祝！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u6l5q1',
            type: 'choice',
            question: 'Rain comes from the ____.',
            options: ['clouds', 'sun', 'moon', 'trees'],
            answer: 'clouds',
            hint: '雨来自哪里？',
            explanation: '雨来自云，Rain comes from the clouds.雨来自云'
          },
          {
            id: 'e6u6l5q2',
            type: 'choice',
            question: 'Where does rain come from? — It ____ from clouds.',
            options: ['comes', 'come', 'coming', 'to come'],
            answer: 'comes',
            hint: '主语It第三人称单数，动词怎么变？',
            explanation: '主语It第三人称单数，动词come加s变comes，It comes from clouds.'
          },
          {
            id: 'e6u6l5q3',
            type: 'fill',
            question: '____, the sun heats water. (首先)',
            answer: 'First',
            acceptableAnswers: ['first'],
            hint: '表示"首先"的顺序词',
            explanation: 'First表示首先，First, the sun heats water.首先太阳晒热水'
          },
          {
            id: 'e6u6l5q4',
            type: 'choice',
            question: '【期末真题】What is "水循环" in English?',
            options: ['water cycle', 'water circle', 'water round', 'water loop'],
            answer: 'water cycle',
            hint: '水循环的英文',
            explanation: '水循环是water cycle，cycle表示循环'
          },
          {
            id: 'e6u6l5q5',
            type: 'choice',
            question: '____, rain falls down. (最后)',
            options: ['Finally', 'First', 'Then', 'Next'],
            answer: 'Finally',
            hint: '表示"最后"的顺序词',
            explanation: 'Finally表示最后，Finally, rain falls down.最后雨落下'
          },
          {
            id: 'e6u6l5q6',
            type: 'fill',
            question: 'It comes ____ clouds. (来自)',
            answer: 'from',
            acceptableAnswers: ['From'],
            hint: '表示"来自"用哪个介词？',
            explanation: 'come from表示来自，It comes from clouds.它来自云'
          },
          {
            id: 'e6u6l5q7',
            type: 'choice',
            question: 'Water falls from the sky as ____.',
            options: ['rain', 'sand', 'rock', 'wood'],
            answer: 'rain',
            hint: '[自然景观词汇]（英语三年级-第4单元）',
            explanation: 'rain雨从天空落下，是三年级Nature单元学过的自然景观词汇'
          }
        ]
      }
    ]
  },
  // ==================== 第七单元：阅读与写作综合 ====================
  {
    id: 'e6u7',
    title: '阅读与写作综合',
    subtitle: '综合阅读理解与写作训练',
    order: 7,
    lessons: [
      {
        id: 'e6u7l1',
        title: '阅读策略——推理与概括',
        order: 1,
        teachingMethod: '支架式教学法',
        iDo: '家长示范推理和概括："从文中信息推断，用自己的话概括"',
        weDo: '亲子一起做阅读推理练习，家长引导孩子找线索',
        youDo: '孩子独立推理并概括短文内容',
        parentTips: '推理：从文中信息推断；概括：用自己的话说主要内容',
        funElement: '玩"小侦探"游戏，从文中线索推断答案',
        gsapAnimations: ['GSAP:推理线索高亮-highlight', 'GSAP:推理步骤-timeline', 'GSAP:线索出现-stagger'],
        images: ['IMG:illustration|阅读策略图|500x300|教学风|png|推理+概括', 'IMG:illustration|阅读场景|500x300|可爱卡通风|png|阅读'],
        content: [
          { type: 'text', content: '阅读策略很重要。推理是从文中信息推断出没有直接说的内容；概括是用自己的话说出主要内容。', animationType: 'reveal' },
          { type: 'example', content: '推理：Tom took an umbrella. → 推断：It may rain.（可能下雨）\n概括：短文讲了水循环过程。 → 用自己的话概括主要内容', label: '阅读策略', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Tom took his umbrella this morning.\nAmy: It may rain today.\nTom: How do you know?\nAmy: I infer from the umbrella. People take umbrellas when it may rain.', label: '推理练习', animationType: 'timeline' },
          { type: 'tip', content: '推理要找线索：从人物动作、天气、时间等信息推断。概括要抓主要人物和事件，忽略细节。', label: '策略技巧', animationType: 'pulse' },
          { type: 'example', content: '线索：He wore a coat. → 推断：It was cold.\n线索：She smiled. → 推断：She was happy.\n线索：They ran fast. → 推断：They were late.', label: '推理示例', animationType: 'sequence' },
          { type: 'tip', content: '概括用一句话说主要内容：谁+做了什么。如"短文讲了Tom上学的交通方式"。', label: '概括方法', animationType: 'pulse' },
          { type: 'animation', content: '推理线索高亮动画，配合时间线展示推理过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Reading Strategy', timelineConfig: { steps: [ { text: 'Clue: Tom took an umbrella.', ttsNarration: 'Clue: Tom took an umbrella.' }, { text: 'Infer: It may rain.', ttsNarration: 'Infer: It may rain.' }, { text: 'Summarize: Tom is ready for rain.', ttsNarration: 'Summarize: Tom is ready for rain.' } ] }, ttsNarration: '阅读策略：线索、推理、概括' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u7l1q1',
            type: 'choice',
            question: 'Tom took an umbrella. What can you infer (推断)?',
            options: ['It may rain.', 'It is sunny.', 'It is cold.', 'It is night.'],
            answer: 'It may rain.',
            hint: '带伞说明什么？',
            explanation: '带伞推断可能下雨，It may rain.从带伞这个线索推断出可能下雨'
          },
          {
            id: 'e6u7l1q2',
            type: 'choice',
            question: 'She wore a thick coat. What can you infer?',
            options: ['It was cold.', 'It was hot.', 'It was raining.', 'It was windy day.'],
            answer: 'It was cold.',
            hint: '穿厚外套说明什么？',
            explanation: '穿厚外套推断天气冷，It was cold.从穿厚外套推断出天气冷'
          },
          {
            id: 'e6u7l1q3',
            type: 'fill',
            question: 'He smiled. We can infer he was ____. (开心)',
            answer: 'happy',
            acceptableAnswers: ['Happy', 'glad', 'Glad'],
            hint: '微笑说明什么心情？',
            explanation: '微笑推断开心，He was happy.从微笑推断出他开心'
          },
          {
            id: 'e6u7l1q4',
            type: 'choice',
            question: 'A story is about Tom going to school by bus. What is the BEST summary (概括)?',
            options: ['The story is about Tom\'s way to school.', 'The story is about buses.', 'The story is about school.', 'The story is about Tom.'],
            answer: 'The story is about Tom\'s way to school.',
            hint: '概括要包含主要人物和事件',
            explanation: '概括要包含主要人物和事件，The story is about Tom\'s way to school.最全面'
          },
          {
            id: 'e6u7l1q5',
            type: 'choice',
            question: 'They ran fast to school. What can you infer?',
            options: ['They were late.', 'They were tired.', 'They were happy.', 'They were cold.'],
            answer: 'They were late.',
            hint: '跑着上学说明什么？',
            explanation: '跑着上学推断迟到了，They were late.从跑着上学推断出他们迟到了'
          },
          {
            id: 'e6u7l1q6',
            type: 'fill',
            question: 'Reading strategy: infer from clues and ____. (概括)',
            answer: 'summarize',
            acceptableAnswers: ['Summarize'],
            hint: '阅读策略包括推理和什么？',
            explanation: '阅读策略包括推理infer和概括summarize，summarize表示概括'
          },
          {
            id: 'e6u7l1q7',
            type: 'choice',
            question: 'When you read, what helps you guess a new word\'s meaning?',
            options: ['Context clues in the sentence', 'Close your eyes', 'Skip the whole text', 'Read only the title'],
            answer: 'Context clues in the sentence',
            hint: '[阅读理解策略]（英语五年级-第7单元）',
            explanation: '上下文线索能帮助猜测生词含义，是五年级阅读理解进阶单元学过的阅读策略'
          }
        ]
      },
      {
        id: 'e6u7l2',
        title: '阅读理解——综合短文',
        order: 2,
        teachingMethod: '分级阅读',
        iDo: '家长示范读综合短文，停顿讲解，回答问题',
        weDo: '亲子一起读综合短文，家长引导孩子理解并回答',
        youDo: '孩子独立读综合短文并回答问题',
        parentTips: '综合短文：叙事+说明+对话，阅读时抓住人物、事件、时间',
        funElement: '玩"阅读挑战"游戏，读短文回答问题得星星',
        gsapAnimations: ['GSAP:阅读进度条-highlight', 'GSAP:短文关键句-timeline', 'GSAP:关键词出现-stagger'],
        images: ['IMG:illustration|综合短文配图|500x300|可爱卡通风|png|短文+图', 'IMG:illustration|阅读理解图|500x300|可爱卡通风|png|阅读理解'],
        content: [
          { type: 'text', content: '阅读综合短文：Tom is a student. He goes to school by bus every day. His mother is a doctor. She works in a hospital. Tom likes reading. His hobby is collecting stamps. He has a pen pal in London.', animationType: 'reveal' },
          { type: 'example', content: '关键信息：\nTom是学生，坐公交上学\n妈妈是医生，在医院工作\nTom喜欢阅读和集邮\n有伦敦的笔友', label: '短文关键信息', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: I go to school by bus.\nAmy: What does your mother do?\nTom: She is a doctor. She works in a hospital.\nAmy: What\'s your hobby?\nTom: I like reading and collecting stamps.', label: '短文内容对话', animationType: 'timeline' },
          { type: 'tip', content: '阅读理解要找关键信息：人物是谁、做什么、在哪里、喜欢什么。用who/what/where提问帮助理解。', label: '阅读策略', animationType: 'pulse' },
          { type: 'example', content: 'Who is Tom? He is a student.\nHow does he go to school? By bus.\nWhat does his mother do? She is a doctor.\nWhat\'s his hobby? Reading and collecting stamps.', label: '问答示例', animationType: 'sequence' },
          { type: 'tip', content: '回答阅读理解题要回到原文找答案，不要凭空想象。划出关键句帮助答题。', label: '答题技巧', animationType: 'pulse' },
          { type: 'animation', content: '阅读进度条动画，配合时间线展示短文关键句', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Reading Comprehension', timelineConfig: { steps: [ { text: 'Tom is a student.', ttsNarration: 'Tom is a student.' }, { text: 'He goes to school by bus.', ttsNarration: 'He goes to school by bus.' }, { text: 'His mother is a doctor.', ttsNarration: 'His mother is a doctor.' }, { text: 'He likes reading and collecting stamps.', ttsNarration: 'He likes reading and collecting stamps.' } ] }, ttsNarration: '阅读理解：Tom是学生，坐公交上学，妈妈是医生，他喜欢阅读和集邮' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u7l2q1',
            type: 'choice',
            question: 'Who is Tom?',
            options: ['A student.', 'A doctor.', 'A teacher.', 'A pilot.'],
            answer: 'A student.',
            hint: 'Tom是什么身份？',
            explanation: 'Tom是学生，Tom is a student.从短文可知Tom是学生'
          },
          {
            id: 'e6u7l2q2',
            type: 'choice',
            question: 'How does Tom go to school?',
            options: ['By bus.', 'By bike.', 'By subway.', 'On foot.'],
            answer: 'By bus.',
            hint: 'Tom怎样上学？',
            explanation: 'Tom坐公交上学，He goes to school by bus.从短文可知Tom坐公交上学'
          },
          {
            id: 'e6u7l2q3',
            type: 'fill',
            question: 'Tom\'s mother is a ____. (医生) She works in a hospital.',
            answer: 'doctor',
            acceptableAnswers: ['Doctor'],
            hint: 'Tom妈妈做什么工作？',
            explanation: 'Tom妈妈是医生，His mother is a doctor.从短文可知妈妈是医生'
          },
          {
            id: 'e6u7l2q4',
            type: 'choice',
            question: 'What is Tom\'s hobby?',
            options: ['Reading and collecting stamps.', 'Swimming.', 'Drawing.', 'Flying.'],
            answer: 'Reading and collecting stamps.',
            hint: 'Tom的爱好是什么？',
            explanation: 'Tom喜欢阅读和集邮，His hobby is reading and collecting stamps.'
          },
          {
            id: 'e6u7l2q5',
            type: 'choice',
            question: 'Where does Tom\'s pen pal live?',
            options: ['In London.', 'In a hospital.', 'In a school.', 'On a farm.'],
            answer: 'In London.',
            hint: 'Tom的笔友住在哪里？',
            explanation: 'Tom的笔友住在伦敦，He has a pen pal in London.从短文可知笔友在伦敦'
          },
          {
            id: 'e6u7l2q6',
            type: 'fill',
            question: 'Tom goes to school by ____. (公交)',
            answer: 'bus',
            acceptableAnswers: ['Bus'],
            hint: 'Tom坐什么上学？',
            explanation: 'Tom坐公交上学，He goes to school by bus.从短文可知坐公交'
          },
          {
            id: 'e6u7l2q7',
            type: 'choice',
            question: 'What is the first thing you do when you read a story?',
            options: ['Read the title and pictures', 'Eat a snack', 'Go to sleep', 'Sing a song'],
            answer: 'Read the title and pictures',
            hint: '[阅读故事方法]（英语三年级-第6单元）',
            explanation: '读故事先看标题和图片了解大意，是三年级Stories单元学过的阅读方法'
          }
        ]
      },
      {
        id: 'e6u7l3',
        title: '写作——My favourite...',
        order: 3,
        teachingMethod: '支架式：写作模板',
        iDo: '家长示范写My favourite..."My favourite colour is blue because..."',
        weDo: '亲子一起讨论并写My favourite...，互相分享',
        youDo: '孩子独立用模板写5句话',
        parentTips: 'My favourite...is...because...句型，写最喜欢的颜色/食物/科目等',
        funElement: '玩"最爱分享"游戏，写并分享自己最喜欢的东西',
        gsapAnimations: ['GSAP:作文逐条出现-stagger', 'GSAP:写作步骤-timeline', 'GSAP:关键词高亮-highlight'],
        images: ['IMG:illustration|写作模板|400x300|教学风|png|模板', 'IMG:illustration|最爱分享图|500x300|可爱卡通风|png|最爱分享'],
        content: [
          { type: 'text', content: '用My favourite...is...because...写你最喜欢的东西吧！可以是颜色、食物、科目、动物等。', animationType: 'reveal' },
          { type: 'example', content: 'My favourite colour is blue because it is the colour of the sky.\nMy favourite food is noodles because they are delicious.\nMy favourite subject is English because it is fun.', label: '写作范例', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What\'s your favourite colour?\nAmy: My favourite colour is blue. What about you?\nTom: My favourite colour is green.\nAmy: Why?\nTom: Because it is the colour of trees.', label: '分享最爱', animationType: 'timeline' },
          { type: 'tip', content: '写作模板：My favourite + 名词 + is + 内容 + because + 原因。because说明为什么喜欢。', label: '写作模板', animationType: 'pulse' },
          { type: 'example', content: 'My favourite colour is blue.\nMy favourite food is noodles.\nMy favourite animal is dog.\nMy favourite subject is English.', label: 'favourite句型', animationType: 'sequence' },
          { type: 'tip', content: 'favourite是英式拼写，美式拼写是favorite。意思都是"最喜欢的"。写作要具体说明原因。', label: '词汇辨析', animationType: 'pulse' },
          { type: 'animation', content: '作文逐条出现动画，配合时间线展示写作过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'My Favourite', timelineConfig: { steps: [ { text: 'My favourite colour is blue.', ttsNarration: 'My favourite colour is blue.' }, { text: 'because it is the colour of the sky.', ttsNarration: 'because it is the colour of the sky.' }, { text: 'My favourite food is noodles.', ttsNarration: 'My favourite food is noodles.' }, { text: 'because they are delicious.', ttsNarration: 'because they are delicious.' } ] }, ttsNarration: '我的最爱：最喜欢的颜色是蓝色因为它是天空的颜色。最喜欢的食物是面条因为很美味' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u7l3q1',
            type: 'choice',
            question: 'My favourite ____ is blue. (颜色)',
            options: ['colour', 'food', 'animal', 'subject'],
            answer: 'colour',
            hint: 'blue是颜色，用什么词？',
            explanation: 'blue是颜色，用colour，My favourite colour is blue.我最喜欢的颜色是蓝色'
          },
          {
            id: 'e6u7l3q2',
            type: 'choice',
            question: 'My favourite food is noodles ____ they are delicious.',
            options: ['because', 'but', 'or', 'so'],
            answer: 'because',
            hint: '说明原因用哪个连词？',
            explanation: 'because表示因为，说明原因，My favourite food is noodles because they are delicious.'
          },
          {
            id: 'e6u7l3q3',
            type: 'fill',
            question: 'My favourite ____ is English because it is fun. (科目)',
            answer: 'subject',
            acceptableAnswers: ['Subject'],
            hint: 'English是科目，用什么词？',
            explanation: 'English是科目，用subject，My favourite subject is English.'
          },
          {
            id: 'e6u7l3q4',
            type: 'choice',
            question: 'Which sentence is correct?',
            options: ['My favourite animal is a dog.', 'My favourite animal a dog is.', 'My favourite is animal a dog.', 'A dog my favourite animal is.'],
            answer: 'My favourite animal is a dog.',
            hint: '句型：My favourite + 名词 + is + 内容',
            explanation: '句型My favourite + animal + is + a dog，My favourite animal is a dog.语序正确'
          },
          {
            id: 'e6u7l3q5',
            type: 'choice',
            question: '"favourite" 的美式拼写是 ____.',
            options: ['favorite', 'favourit', 'favrite', 'faverite'],
            answer: 'favorite',
            hint: '美式英语去掉u',
            explanation: 'favourite是英式拼写，美式拼写是favorite，去掉u'
          },
          {
            id: 'e6u7l3q6',
            type: 'fill',
            question: 'My favourite colour is blue ____ it is the colour of the sky. (因为)',
            answer: 'because',
            acceptableAnswers: ['Because'],
            hint: '说明原因用哪个连词？',
            explanation: 'because表示因为，My favourite colour is blue because it is the colour of the sky.'
          },
          {
            id: 'e6u7l3q7',
            type: 'fill',
            question: 'My favourite ____ is blue. (颜色)',
            answer: 'color',
            acceptableAnswers: ['Color', 'colour', 'Colour'],
            hint: '[喜好表达句型]（英语五年级-第3单元）',
            explanation: 'My favourite...句型用来表达喜好，是五年级Favourite Food单元学过的喜好表达句型'
          }
        ]
      },
      {
        id: 'e6u7l4',
        title: '写作——A day in my life',
        order: 4,
        teachingMethod: '项目式学习',
        iDo: '家长示范写一天的生活："I get up at 7. I go to school by bus..."',
        weDo: '亲子一起讨论并写一天的生活，互相分享',
        youDo: '孩子独立用一般现在时写8句话描述一天',
        parentTips: '用一般现在时描述一天生活，按时间顺序写',
        funElement: '玩"一天时间线"游戏，画出一天时间线并分享',
        gsapAnimations: ['GSAP:一天时间线展开-timeline', 'GSAP:活动出现-stagger', 'GSAP:时间高亮-highlight'],
        images: ['IMG:illustration|一天时间线图|500x300|可爱卡通风|png|时间轴', 'IMG:illustration|一天生活图|500x300|可爱卡通风|png|一天生活'],
        content: [
          { type: 'text', content: '用一般现在时描述你一天的生活吧！按时间顺序写，从起床到睡觉。用First...Then...等顺序词。', animationType: 'reveal' },
          { type: 'example', content: 'I get up at 7:00. I have breakfast at 7:30. I go to school by bus. I have lunch at 12:00. I go home at 5:00. I do my homework. I have dinner at 6:30. I go to bed at 9:00.', label: '一天生活范例', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: What time do you get up?\nAmy: I get up at 7:00. Then I have breakfast.\nTom: How do you go to school?\nAmy: I go to school by bus.\nTom: What do you do in the evening?\nAmy: I do my homework and read books.', label: '谈论一天生活', animationType: 'timeline' },
          { type: 'tip', content: '描述一天用一般现在时，按时间顺序。用First, Then, Next, Finally让文章有条理。', label: '写作技巧', animationType: 'pulse' },
          { type: 'example', content: 'I get up at 7:00. 我7点起床。\nI go to school by bus. 我坐公交上学。\nI have lunch at 12:00. 我12点吃午饭。\nI go to bed at 9:00. 我9点睡觉。', label: '一天生活句型', animationType: 'sequence' },
          { type: 'tip', content: '表达时间用at + 时间：at 7:00, at 12:00。描述一天要包含起床、上学、吃饭、作业、睡觉等。', label: '时间表达', animationType: 'pulse' },
          { type: 'animation', content: '一天时间线展开动画，配合时间线展示一天活动', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'A Day in My Life', timelineConfig: { steps: [ { text: 'I get up at 7:00.', ttsNarration: 'I get up at 7:00.' }, { text: 'I go to school by bus.', ttsNarration: 'I go to school by bus.' }, { text: 'I have lunch at 12:00.', ttsNarration: 'I have lunch at 12:00.' }, { text: 'I go to bed at 9:00.', ttsNarration: 'I go to bed at 9:00.' } ] }, ttsNarration: '我的一天：7点起床，坐公交上学，12点吃午饭，9点睡觉' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u7l4q1',
            type: 'choice',
            question: 'I get up ____ 7:00. (在)',
            options: ['at', 'in', 'on', 'of'],
            answer: 'at',
            hint: '表示具体时间用哪个介词？',
            explanation: '表示具体时间用at，I get up at 7:00.我7点起床'
          },
          {
            id: 'e6u7l4q2',
            type: 'choice',
            question: 'I go to school ____ bus. (乘坐)',
            options: ['by', 'on', 'in', 'at'],
            answer: 'by',
            hint: '乘坐交通工具用哪个介词？',
            explanation: '乘坐交通工具用by，I go to school by bus.我坐公交上学'
          },
          {
            id: 'e6u7l4q3',
            type: 'fill',
            question: 'I ____ my homework in the evening. (做)',
            answer: 'do',
            acceptableAnswers: ['Do'],
            hint: '做作业用哪个动词？',
            explanation: '做作业用do，I do my homework.我做作业'
          },
          {
            id: 'e6u7l4q4',
            type: 'choice',
            question: 'Which sentence about a day is correct?',
            options: ['I go to bed at 9:00.', 'I go bed at 9:00.', 'I goes to bed at 9:00.', 'I going to bed at 9:00.'],
            answer: 'I go to bed at 9:00.',
            hint: '主语I用动词原形，go to bed是固定搭配',
            explanation: '主语I用动词原形go，go to bed是固定搭配，I go to bed at 9:00.我9点睡觉'
          },
          {
            id: 'e6u7l4q5',
            type: 'choice',
            question: 'I have ____ at 12:00. (午饭)',
            options: ['lunch', 'breakfast', 'dinner', 'supper'],
            answer: 'lunch',
            hint: '12点吃哪顿饭？',
            explanation: '12点吃午饭，I have lunch at 12:00.我12点吃午饭'
          },
          {
            id: 'e6u7l4q6',
            type: 'fill',
            question: 'I ____ up at 7:00 every morning. (起)',
            answer: 'get',
            acceptableAnswers: ['Get'],
            hint: '起床用哪个动词短语？',
            explanation: '起床用get up，I get up at 7:00.我7点起床'
          },
          {
            id: 'e6u7l4q7',
            type: 'choice',
            question: 'When writing "A day in my life", which order do you use?',
            options: ['Morning, afternoon, evening', 'Random order', 'Evening first', 'Only night'],
            answer: 'Morning, afternoon, evening',
            hint: '[一日活动顺序]（英语二年级-第1单元）',
            explanation: '写"我的一天"按早晨、下午、晚上的时间顺序，是二年级My Day单元学过的一日活动'
          }
        ]
      },
      {
        id: 'e6u7l5',
        title: '阅读与写作综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        iDo: '家长示范检测题型，讲解阅读理解、推理概括、写作三类题',
        weDo: '亲子一起做练习题，家长引导孩子分析题目，讨论答案',
        youDo: '孩子独立完成读写测试，目标正确率≥75%',
        parentTips: '检测覆盖阅读理解+短文写作，错题要分析原因并复习对应课时',
        funElement: '通关后撒花庆祝，获得"读写达人"徽章',
        gsapAnimations: ['GSAP:通关撒花-confetti', 'GSAP:题目逐个出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|读写达人徽章|300x300|可爱卡通风|png|金色徽章', 'IMG:illustration|读写综合场景|500x300|可爱卡通风|png|综合读写'],
        content: [
          { type: 'text', content: '本单元我们学习了阅读策略（推理与概括）、综合短文阅读理解、My favourite...写作和A day in my life写作。现在来做综合检测！', animationType: 'reveal' },
          { type: 'example', content: '阅读策略：推理infer、概括summarize\n阅读理解：找关键信息回答问题\n写作：My favourite...is...because...\n写作：A day in my life（一般现在时）', label: '本单元知识梳理', animationType: 'cardReveal' },
          { type: 'tip', content: '阅读要找关键信息，推理要找线索，概括要抓主要内容。写作要按顺序，用一般现在时。', label: '重点回顾', animationType: 'pulse' },
          { type: 'dialogue', content: 'Tom: What can you infer from "She wore a thick coat"?\nAmy: It was cold.\nTom: Write about your favourite food.\nAmy: My favourite food is noodles because they are delicious.', label: '综合读写对话', animationType: 'timeline' },
          { type: 'example', content: '易错点1：infer推断（正确）/ guess猜（不完全等价）\n易错点2：My favourite...is（正确）/ My favourite...are（错误）\n易错点3：at 7:00（正确）/ in 7:00（错误）', label: '易错点提醒', animationType: 'sequence' },
          { type: 'tip', content: '读写结合：读短文理解内容，再用自己的话写作。多读多写，提高英语综合能力。', label: '学习建议', animationType: 'pulse' },
          { type: 'animation', content: '通关撒花动画，正确率达到75%触发庆祝特效', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Reading & Writing Star', cardRevealConfig: { cards: [ { front: 'read', back: '📖', ttsText: 'read' }, { front: 'write', back: '✍️', ttsText: 'write' }, { front: 'infer', back: '🔍', ttsText: 'infer' } ] }, ttsNarration: '读写达人通关庆祝！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u7l5q1',
            type: 'choice',
            question: 'Tom took an umbrella. What can you infer?',
            options: ['It may rain.', 'It is sunny.', 'It is cold.', 'It is night.'],
            answer: 'It may rain.',
            hint: '带伞推断什么？',
            explanation: '带伞推断可能下雨，It may rain.从带伞推断出可能下雨'
          },
          {
            id: 'e6u7l5q2',
            type: 'choice',
            question: 'My favourite ____ is blue because it is the colour of the sky.',
            options: ['colour', 'food', 'animal', 'subject'],
            answer: 'colour',
            hint: 'blue是颜色',
            explanation: 'blue是颜色，用colour，My favourite colour is blue.'
          },
          {
            id: 'e6u7l5q3',
            type: 'fill',
            question: 'I get up ____ 7:00 every morning. (在)',
            answer: 'at',
            acceptableAnswers: ['At'],
            hint: '表示具体时间用哪个介词？',
            explanation: '表示具体时间用at，I get up at 7:00.我7点起床'
          },
          {
            id: 'e6u7l5q4',
            type: 'choice',
            question: '【期末真题】Reading strategy: we infer from clues and ____ the main idea.',
            options: ['summarize', 'skip', 'forget', 'copy'],
            answer: 'summarize',
            hint: '阅读策略包括推理和什么？',
            explanation: '阅读策略包括推理infer和概括summarize，summarize表示概括主要内容'
          },
          {
            id: 'e6u7l5q5',
            type: 'choice',
            question: 'A story is about Amy going to school by bike. What is the BEST summary?',
            options: ['The story is about Amy\'s way to school.', 'The story is about bikes.', 'The story is about school.', 'The story is about Amy.'],
            answer: 'The story is about Amy\'s way to school.',
            hint: '概括要包含主要人物和事件',
            explanation: '概括要包含主要人物和事件，The story is about Amy\'s way to school.最全面'
          },
          {
            id: 'e6u7l5q6',
            type: 'fill',
            question: 'My favourite food is noodles ____ they are delicious. (因为)',
            answer: 'because',
            acceptableAnswers: ['Because'],
            hint: '说明原因用哪个连词？',
            explanation: 'because表示因为，My favourite food is noodles because they are delicious.'
          },
          {
            id: 'e6u7l5q7',
            type: 'choice',
            question: 'What does "main idea" of a passage mean?',
            options: ['The most important point of the text', 'The last word', 'The title only', 'A new word'],
            answer: 'The most important point of the text',
            hint: '[阅读理解策略]（英语五年级-第7单元）',
            explanation: 'main idea是文章主旨大意，是五年级阅读理解进阶单元学过的阅读策略'
          }
        ]
      }
    ]
  },
  // ==================== 第八单元：六年级英语综合测评 ====================
  {
    id: 'e6u8',
    title: '六年级英语综合测评',
    subtitle: '小升初综合复习与测评',
    order: 8,
    lessons: [
      {
        id: 'e6u8l1',
        title: '词汇总复习',
        order: 1,
        teachingMethod: '间隔重复法',
        iDo: '家长用词汇闪卡复习7个单元的核心词汇，间隔重复强化记忆',
        weDo: '亲子一起玩词汇接龙，复习交通、问路、计划、爱好、职业、自然词汇',
        youDo: '孩子独立完成词汇测试',
        parentTips: '7单元核心词汇综合复习：交通、方位、将来、爱好、职业、自然、读写',
        funElement: '玩"词汇王国"游戏，分类复习词汇得星星',
        gsapAnimations: ['GSAP:词汇卡片出现-cardReveal', 'GSAP:词汇分类-stagger', 'GSAP:词汇高亮-highlight'],
        images: ['IMG:illustration|词汇王国总览|600x400|可爱卡通风|png|词汇分类', 'IMG:illustration|词汇闪卡|500x300|可爱卡通风|png|词汇卡'],
        content: [
          { type: 'text', content: '六年级词汇总复习！回顾7个单元的核心词汇：交通方式、方位问路、将来计划、兴趣爱好、职业梦想、自然科学、读写策略。', animationType: 'reveal' },
          { type: 'example', content: '交通：bus, subway, bike, walk\n方位：next to, in front of, behind\n将来：tomorrow, next week, this weekend\n爱好：reading, swimming, collecting stamps\n职业：teacher, doctor, engineer, pilot\n自然：rain, cloud, sun, water cycle', label: '7单元核心词汇', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Let\'s review words. How do you go to school?\nAmy: I go by bus. Where is the hospital?\nTom: It\'s next to the park. What are you going to do?\nAmy: I\'m going to read a book.', label: '词汇复习对话', animationType: 'timeline' },
          { type: 'tip', content: '词汇复习要分类记忆，把相关词汇放一起记。用间隔重复法：今天学，明天复习，一周后再复习。', label: '复习策略', animationType: 'pulse' },
          { type: 'example', content: '交通类：bus, subway, bike, walk, by\n方位类：next to, in front of, behind, where\n时间类：tomorrow, next week, this weekend\n爱好类：reading, swimming, drawing, like', label: '词汇分类', animationType: 'sequence' },
          { type: 'tip', content: '记词汇要音形义结合：会读、会写、懂意思。用造句法巩固：用新词造句子加深记忆。', label: '记忆方法', animationType: 'pulse' },
          { type: 'animation', content: '词汇卡片出现动画，配合分类展示7单元核心词汇', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Vocabulary Review', cardRevealConfig: { cards: [ { front: 'transport', back: '🚌', ttsText: 'transport, 交通' }, { front: 'directions', back: '🧭', ttsText: 'directions, 方位' }, { front: 'hobbies', back: '📖', ttsText: 'hobbies, 爱好' }, { front: 'jobs', back: '👨‍⚕️', ttsText: 'jobs, 职业' }, { front: 'nature', back: '🌧', ttsText: 'nature, 自然' } ] }, ttsNarration: '词汇总复习：交通、方位、爱好、职业、自然' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u8l1q1',
            type: 'choice',
            question: 'I go to school by ____. (地铁)',
            options: ['subway', 'book', 'apple', 'red'],
            answer: 'subway',
            hint: '地下运行的交通工具',
            explanation: 'subway是地铁，I go by subway.我坐地铁去'
          },
          {
            id: 'e6u8l1q2',
            type: 'choice',
            question: 'The bank is ____ the school. (在...旁边)',
            options: ['next to', 'where', 'how', 'who'],
            answer: 'next to',
            hint: '在旁边用哪个方位词？',
            explanation: 'next to表示在旁边，The bank is next to the school.银行在学校旁边'
          },
          {
            id: 'e6u8l1q3',
            type: 'fill',
            question: 'I like ____ stamps. (收集) It\'s my hobby.',
            answer: 'collecting',
            acceptableAnswers: ['Collecting'],
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式collecting，I like collecting stamps.我喜欢集邮'
          },
          {
            id: 'e6u8l1q4',
            type: 'choice',
            question: 'A ____ works in a hospital. (医生)',
            options: ['doctor', 'teacher', 'pilot', 'farmer'],
            answer: 'doctor',
            hint: '在医院工作的职业',
            explanation: '医生在医院工作，A doctor works in a hospital.'
          },
          {
            id: 'e6u8l1q5',
            type: 'choice',
            question: 'Rain comes from the ____. (云)',
            options: ['clouds', 'sun', 'moon', 'trees'],
            answer: 'clouds',
            hint: '雨来自哪里？',
            explanation: '雨来自云，Rain comes from the clouds.'
          },
          {
            id: 'e6u8l1q6',
            type: 'fill',
            question: 'I\'m going to read a book ____. (明天)',
            answer: 'tomorrow',
            acceptableAnswers: ['Tomorrow'],
            hint: '表示将来的"明天"',
            explanation: 'tomorrow是明天，I\'m going to read a book tomorrow.我明天打算读书'
          },
          {
            id: 'e6u8l1q7',
            type: 'choice',
            question: '—How do you go to school? —I go ____ bus.',
            options: ['by', 'on', 'in', 'at'],
            answer: 'by',
            hint: '[How do you go to...?句型]（英语六年级-第1单元）',
            explanation: '乘交通工具用by，by bus坐公交，是六年级第1单元How Do You Go There学的核心句型'
          }
        ]
      },
      {
        id: 'e6u8l2',
        title: '语法总复习',
        order: 2,
        teachingMethod: '间隔重复法',
        iDo: '家长用语法闪卡复习核心语法，配对练习强化理解',
        weDo: '亲子一起玩语法配对游戏，复习一般现在时、将来时、第三人称等',
        youDo: '孩子独立完成语法测试',
        parentTips: '语法综合：一般现在时+将来时be going to+第三人称单数+There be',
        funElement: '玩"语法配对"游戏，把句型和语法规则配对',
        gsapAnimations: ['GSAP:语法配对-compare', 'GSAP:语法规则出现-stagger', 'GSAP:配对高亮-highlight'],
        images: ['IMG:illustration|语法配对图|500x300|游戏风|png|配对卡片', 'IMG:illustration|语法总览|500x300|教学风|png|语法规则'],
        content: [
          { type: 'text', content: '六年级语法总复习！核心语法：一般现在时、将来时be going to、第三人称单数、There be句型、like+动名词。', animationType: 'reveal' },
          { type: 'example', content: '一般现在时：I go to school.\n将来时：I am going to read.\n第三人称单数：He goes to school.\nThere be：There is a book.\nlike+动名词：I like reading.', label: '核心语法', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: I go to school by bus. He goes by bike.\nAmy: What are you going to do?\nTom: I\'m going to read a book.\nAmy: There is a library near here.\nTom: Great! I like reading there.', label: '语法综合对话', animationType: 'timeline' },
          { type: 'tip', content: '一般现在时表示习惯；be going to表示将来计划；第三人称单数动词加s/es；like+动名词表示爱好。', label: '语法要点', animationType: 'pulse' },
          { type: 'example', content: 'I go. → He goes.\nI am going to read. → She is going to read.\nI like reading. → He likes reading.\nThere is a book. → There are books.', label: '语法变化', animationType: 'sequence' },
          { type: 'tip', content: 'There be句型：单数用There is，复数用There are。就近原则：靠近be的名词决定is/are。', label: 'There be规则', animationType: 'pulse' },
          { type: 'animation', content: '语法配对动画，展示句型和语法规则的对应关系', animationType: 'compare', animationConfig: { sceneType: 'compare', title: 'Grammar Review', compareConfig: { leftItems: ['I go', 'He goes', 'I am going to', 'I like reading'], rightItems: ['一般现在时', '第三人称单数', '将来时', 'like+动名词'], result: 'equal', resultText: '句型与语法对应' }, ttsNarration: '语法总复习：一般现在时、第三人称单数、将来时、like+动名词' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u8l2q1',
            type: 'choice',
            question: 'He ____ to school every day. (go) 第三人称单数',
            options: ['goes', 'go', 'going', 'to go'],
            answer: 'goes',
            hint: '主语He第三人称单数，go怎么变？',
            explanation: '主语He第三人称单数，go加es变goes，He goes to school every day.'
          },
          {
            id: 'e6u8l2q2',
            type: 'choice',
            question: 'I am going to ____ a book tomorrow. (read) 将来时',
            options: ['read', 'reading', 'reads', 'to read'],
            answer: 'read',
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形read，I am going to read a book tomorrow.'
          },
          {
            id: 'e6u8l2q3',
            type: 'fill',
            question: 'There ____ a book on the desk. (is/are) 单数',
            answer: 'is',
            acceptableAnswers: ['Is'],
            hint: 'a book是单数，用is还是are？',
            explanation: 'a book是单数，用is，There is a book on the desk.桌上有一本书'
          },
          {
            id: 'e6u8l2q4',
            type: 'choice',
            question: 'I like ____ in the pool. (swim) like+动名词',
            options: ['swimming', 'swim', 'swims', 'to swim'],
            answer: 'swimming',
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式swimming，I like swimming.我喜欢游泳'
          },
          {
            id: 'e6u8l2q5',
            type: 'choice',
            question: 'There ____ some books on the desk. (is/are) 复数',
            options: ['are', 'is', 'be', 'am'],
            answer: 'are',
            hint: 'books是复数，用is还是are？',
            explanation: 'books是复数，用are，There are some books on the desk.桌上有一些书'
          },
          {
            id: 'e6u8l2q6',
            type: 'fill',
            question: 'She ____ English every day. (study) 变y为i加es',
            answer: 'studies',
            acceptableAnswers: ['Studies'],
            hint: 'study以辅音+y结尾，第三人称单数变y为i加es',
            explanation: 'study以辅音+y结尾，第三人称单数变y为i加es变studies，She studies English.'
          },
          {
            id: 'e6u8l2q7',
            type: 'choice',
            question: '—Excuse me, ____ is the museum? —It\'s next to the park.',
            options: ['where', 'what', 'when', 'who'],
            answer: 'where',
            hint: '[Where is...?句型]（英语六年级-第2单元）',
            explanation: '问路用Where is...?where询问地点，是六年级第2单元Where Is the Museum学的核心句型'
          }
        ]
      },
      {
        id: 'e6u8l3',
        title: '阅读与写作总复习',
        order: 3,
        teachingMethod: '分级阅读+写作',
        iDo: '家长示范读写综合题，讲解阅读理解和短文写作方法',
        weDo: '亲子一起做读写练习，家长引导孩子理解和写作',
        youDo: '孩子独立完成读写测试',
        parentTips: '阅读理解+短文写作综合练习，注意审题和规范写作',
        funElement: '玩"读写挑战"游戏，读短文写短文得星星',
        gsapAnimations: ['GSAP:阅读进度条-highlight', 'GSAP:读写步骤-timeline', 'GSAP:关键句高亮-highlight'],
        images: ['IMG:illustration|读写综合图|500x300|可爱卡通风|png|读写场景', 'IMG:illustration|阅读写作|500x300|可爱卡通风|png|阅读写作'],
        content: [
          { type: 'text', content: '阅读与写作总复习！综合练习阅读理解和短文写作。阅读要找关键信息，写作要按顺序、用对时态。', animationType: 'reveal' },
          { type: 'example', content: '阅读策略：找关键信息、推理、概括\n写作模板：My favourite...is...because...\n写作模板：A day in my life（一般现在时）\n写作模板：I\'m going to...（将来时）', label: '读写策略', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: Read this: "Amy goes to school by bus. She likes reading."\nAmy: How does Amy go to school?\nTom: By bus. What does she like?\nAmy: She likes reading.', label: '读写练习对话', animationType: 'timeline' },
          { type: 'tip', content: '阅读理解先读问题再读短文，带着问题找答案。写作先列提纲再写，注意时态和拼写。', label: '读写技巧', animationType: 'pulse' },
          { type: 'example', content: '阅读：找who/what/where/when/why\n写作：My favourite...is...because...\n写作：I get up at... I go to school by...\n写作：I\'m going to... this weekend.', label: '读写模板', animationType: 'sequence' },
          { type: 'tip', content: '写作要注意：首字母大写、句末标点、单词拼写、时态一致。写完要检查修改。', label: '写作规范', animationType: 'pulse' },
          { type: 'animation', content: '读写步骤动画，配合时间线展示读写过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Reading & Writing Review', timelineConfig: { steps: [ { text: 'Read and find key information.', ttsNarration: 'Read and find key information.' }, { text: 'Infer and summarize.', ttsNarration: 'Infer and summarize.' }, { text: 'Write with correct tense.', ttsNarration: 'Write with correct tense.' }, { text: 'Check spelling and punctuation.', ttsNarration: 'Check spelling and punctuation.' } ] }, ttsNarration: '读写总复习：读找关键信息、推理概括、用对时态写作、检查拼写标点' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u8l3q1',
            type: 'choice',
            question: 'Read: "Amy goes to school by bus." How does Amy go to school?',
            options: ['By bus.', 'By bike.', 'On foot.', 'By subway.'],
            answer: 'By bus.',
            hint: '从短文找Amy怎样上学',
            explanation: '短文说Amy goes to school by bus，所以Amy坐公交上学'
          },
          {
            id: 'e6u8l3q2',
            type: 'choice',
            question: 'My favourite ____ is noodles because they are delicious.',
            options: ['food', 'colour', 'animal', 'subject'],
            answer: 'food',
            hint: 'noodles是食物',
            explanation: 'noodles是食物，用food，My favourite food is noodles.'
          },
          {
            id: 'e6u8l3q3',
            type: 'fill',
            question: 'I get up ____ 7:00 every morning. (在)',
            answer: 'at',
            acceptableAnswers: ['At'],
            hint: '表示具体时间用哪个介词？',
            explanation: '表示具体时间用at，I get up at 7:00.我7点起床'
          },
          {
            id: 'e6u8l3q4',
            type: 'choice',
            question: 'Tom took an umbrella. What can you infer?',
            options: ['It may rain.', 'It is sunny.', 'It is cold.', 'It is night.'],
            answer: 'It may rain.',
            hint: '带伞推断什么？',
            explanation: '带伞推断可能下雨，It may rain.从带伞推断出可能下雨'
          },
          {
            id: 'e6u8l3q5',
            type: 'choice',
            question: 'Which writing has the correct tense (时态)?',
            options: ['I am going to read a book tomorrow.', 'I read a book tomorrow.', 'I reading a book tomorrow.', 'I reads a book tomorrow.'],
            answer: 'I am going to read a book tomorrow.',
            hint: '将来计划用be going to',
            explanation: '将来计划用be going to + 动词原形，I am going to read a book tomorrow.时态正确'
          },
          {
            id: 'e6u8l3q6',
            type: 'fill',
            question: 'My favourite colour is blue ____ it is the colour of the sky. (因为)',
            answer: 'because',
            acceptableAnswers: ['Because'],
            hint: '说明原因用哪个连词？',
            explanation: 'because表示因为，My favourite colour is blue because it is the colour of the sky.'
          },
          {
            id: 'e6u8l3q7',
            type: 'choice',
            question: '—What are you going to do this weekend? —I\'m going to ____ a book.',
            options: ['read', 'reads', 'reading', 'to read'],
            answer: 'read',
            hint: '[be going to句型]（英语六年级-第3单元）',
            explanation: 'be going to后面接动词原形，read是原形，是六年级第3单元What Are You Going to Do学的句型'
          }
        ]
      },
      {
        id: 'e6u8l4',
        title: '小升初模拟——综合测试',
        order: 4,
        teachingMethod: '模拟测试',
        iDo: '家长示范模拟题，分析题型和解题思路',
        weDo: '亲子一起分析模拟题，讨论解题方法',
        youDo: '孩子独立完成模拟卷',
        parentTips: '综合模拟：听力+词汇+阅读+写作，限时完成',
        funElement: '玩"模拟考场"游戏，计时完成模拟卷得星星',
        gsapAnimations: ['GSAP:答题进度条-highlight', 'GSAP:题目出现-stagger', 'GSAP:正确答案高亮-highlight'],
        images: ['IMG:illustration|模拟卷场景|500x300|可爱卡通风|png|试卷+笔', 'IMG:illustration|考场场景|500x300|可爱卡通风|png|考场'],
        content: [
          { type: 'text', content: '小升初模拟测试！综合考查听力、词汇、阅读和写作。认真审题，规范作答，限时完成。', animationType: 'reveal' },
          { type: 'example', content: '听力：听句子选图\n词汇：选词填空、词义辨析\n阅读：短文理解、推理概括\n写作：My favourite.../A day in my life', label: '模拟题型', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: This is a mock test. Listen and choose.\nAmy: How do you go to school?\nTom: I go by bus. Choose the bus picture.\nAmy: Now read and answer.\nTom: Amy likes reading. What\'s her hobby?\nAmy: Reading.', label: '模拟测试对话', animationType: 'timeline' },
          { type: 'tip', content: '考试技巧：先易后难，不会的先跳过；审题要仔细，看清要求；检查要全面，不漏题。', label: '考试技巧', animationType: 'pulse' },
          { type: 'example', content: '听力：听关键词选答案\n词汇：辨析词义选正确\n阅读：回原文找答案\n写作：用对时态和模板', label: '解题策略', animationType: 'sequence' },
          { type: 'tip', content: '考试要自信冷静，遇到难题不慌张。规范作答：字迹工整、拼写正确、标点规范。', label: '考试心态', animationType: 'pulse' },
          { type: 'animation', content: '答题进度条动画，配合时间线展示模拟测试过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: 'Mock Test', timelineConfig: { steps: [ { text: 'Listening: choose the picture.', ttsNarration: 'Listening: choose the picture.' }, { text: 'Vocabulary: fill in the blanks.', ttsNarration: 'Vocabulary: fill in the blanks.' }, { text: 'Reading: answer questions.', ttsNarration: 'Reading: answer questions.' }, { text: 'Writing: write a short passage.', ttsNarration: 'Writing: write a short passage.' } ] }, ttsNarration: '模拟测试：听力选图、词汇填空、阅读答题、写作短文' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u8l4q1',
            type: 'choice',
            question: 'Choose: How do you go to school? — I go by ____.',
            options: ['bus', 'apple', 'red', 'tall'],
            answer: 'bus',
            hint: '选择交通工具',
            explanation: 'bus是交通工具，I go by bus.我坐公交上学'
          },
          {
            id: 'e6u8l4q2',
            type: 'choice',
            question: 'Fill: He ____ to school by bike. (go) 第三人称单数',
            options: ['goes', 'go', 'going', 'to go'],
            answer: 'goes',
            hint: '主语He第三人称单数，go怎么变？',
            explanation: '主语He第三人称单数，go加es变goes，He goes to school by bike.'
          },
          {
            id: 'e6u8l4q3',
            type: 'fill',
            question: 'Read: "Amy likes reading." Amy\'s hobby is ____. (阅读)',
            answer: 'reading',
            acceptableAnswers: ['Reading'],
            hint: '从短文找Amy的爱好',
            explanation: '短文说Amy likes reading，所以Amy的爱好是reading阅读'
          },
          {
            id: 'e6u8l4q4',
            type: 'choice',
            question: '【期末真题】I am going to ____ my grandma this weekend. (visit)',
            options: ['visit', 'visiting', 'visits', 'to visit'],
            answer: 'visit',
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形visit，I am going to visit my grandma this weekend.'
          },
          {
            id: 'e6u8l4q5',
            type: 'choice',
            question: 'Choose the correct sentence.',
            options: ['She works in a hospital.', 'She work in a hospital.', 'She working in a hospital.', 'She to work in a hospital.'],
            answer: 'She works in a hospital.',
            hint: '主语She第三人称单数，work怎么变？',
            explanation: '主语She第三人称单数，work加s变works，She works in a hospital.'
          },
          {
            id: 'e6u8l4q6',
            type: 'fill',
            question: 'My favourite ____ is blue because it is the colour of the sky. (颜色)',
            answer: 'colour',
            acceptableAnswers: ['colour', 'color', 'Color', 'Colour'],
            hint: 'blue是颜色',
            explanation: 'blue是颜色，用colour，My favourite colour is blue.'
          },
          {
            id: 'e6u8l4q7',
            type: 'choice',
            question: '—What\'s your hobby? —I like ____ stamps.',
            options: ['collecting', 'collects', 'collect', 'to collecting'],
            answer: 'collecting',
            hint: '[What\'s your hobby?句型]（英语六年级-第4单元）',
            explanation: 'like后面接动词ing，collecting是收集，是六年级第4单元I Have a Pen Pal学的爱好句型'
          }
        ]
      },
      {
        id: 'e6u8l5',
        title: '学期综合测评+毕业典礼',
        order: 5,
        teachingMethod: '形成性+总结性评价',
        iDo: '家长示范综合题，讲解三星制评价标准',
        weDo: '亲子一起模拟综合测评，总结学期收获',
        youDo: '孩子独立完成综合测评，获得毕业证书',
        parentTips: '三星制评价+毕业证书，总结六年级英语学习成果',
        funElement: '毕业典礼！获得六年级英语毕业证书，三星制评价',
        gsapAnimations: ['GSAP:三星评级动画-starFlyIn', 'GSAP:毕业证书出现-cardReveal', 'GSAP:通关撒花-confetti'],
        images: ['IMG:illustration|六年级英语毕业大证书|500x400|可爱卡通风|png|金色毕业证书', 'IMG:illustration|毕业典礼场景|500x300|可爱卡通风|png|毕业典礼'],
        content: [
          { type: 'text', content: '六年级英语学期综合测评！总结一学期的学习成果，完成综合题，获得毕业证书。三星制评价：3星优秀、2星良好、1星合格。', animationType: 'reveal' },
          { type: 'example', content: '综合考查：交通、问路、计划、爱好、职业、自然、读写\n三星制：3星优秀(≥90%)、2星良好(≥75%)、1星合格(≥60%)\n毕业证书：完成六年级英语学习', label: '综合测评说明', animationType: 'cardReveal' },
          { type: 'dialogue', content: 'Tom: This is the final test. Good luck!\nAmy: How do you go to school?\nTom: By bus. What does your mother do?\nAmy: She is a doctor. What\'s your hobby?\nTom: I like reading.', label: '综合测评对话', animationType: 'timeline' },
          { type: 'tip', content: '综合测评覆盖全部7单元知识，认真作答。三星制鼓励进步，每颗星都值得骄傲。', label: '测评说明', animationType: 'pulse' },
          { type: 'example', content: '3星：正确率≥90%，优秀\n2星：正确率≥75%，良好\n1星：正确率≥60%，合格\n0星：正确率<60%，继续努力', label: '三星制标准', animationType: 'sequence' },
          { type: 'tip', content: '毕业不是结束，是新开始。继续学习英语，多读多写多说，让英语成为你的好朋友！', label: '毕业寄语', animationType: 'pulse' },
          { type: 'animation', content: '三星评级动画，配合毕业证书出现，撒花庆祝', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: 'Graduation', cardRevealConfig: { cards: [ { front: '3 Stars', back: '⭐⭐⭐', ttsText: 'Excellent, 优秀' }, { front: 'Certificate', back: '🎓', ttsText: 'Graduation certificate, 毕业证书' }, { front: 'Congratulations', back: '🎉', ttsText: 'Congratulations, 恭喜毕业' } ] }, ttsNarration: '毕业典礼：三星评级、毕业证书、恭喜毕业！' } }
        ],
        practiceQuestions: [
          {
            id: 'e6u8l5q1',
            type: 'choice',
            question: 'How do you go to school? — I go ____ bus.',
            options: ['by', 'on', 'in', 'at'],
            answer: 'by',
            hint: '乘坐交通工具用哪个介词？',
            explanation: '乘坐交通工具用by，I go by bus.我坐公交上学'
          },
          {
            id: 'e6u8l5q2',
            type: 'choice',
            question: 'What does your mother do? — She is a ____.',
            options: ['doctor', 'apple', 'red', 'tall'],
            answer: 'doctor',
            hint: '选择职业',
            explanation: 'doctor是职业，She is a doctor.她是医生'
          },
          {
            id: 'e6u8l5q3',
            type: 'fill',
            question: 'What\'s your hobby? — I like ____. (阅读)',
            answer: 'reading',
            acceptableAnswers: ['Reading'],
            hint: 'like后面接动词ing形式',
            explanation: 'like + 动词ing形式reading，I like reading.我喜欢阅读'
          },
          {
            id: 'e6u8l5q4',
            type: 'choice',
            question: '【期末真题】I am going to ____ a book this weekend. (read)',
            options: ['read', 'reading', 'reads', 'to read'],
            answer: 'read',
            hint: 'be going to后面接动词原形',
            explanation: 'be going to + 动词原形read，I am going to read a book this weekend.'
          },
          {
            id: 'e6u8l5q5',
            type: 'choice',
            question: 'Where is the hospital? — It\'s ____ the park. (在...旁边)',
            options: ['next to', 'where', 'how', 'who'],
            answer: 'next to',
            hint: '在旁边用哪个方位词？',
            explanation: 'next to表示在旁边，It\'s next to the park.它在公园旁边'
          },
          {
            id: 'e6u8l5q6',
            type: 'fill',
            question: 'Rain comes from the ____. (云)',
            answer: 'clouds',
            acceptableAnswers: ['cloud', 'Clouds', 'Cloud'],
            hint: '雨来自哪里？',
            explanation: '雨来自云，Rain comes from the clouds.'
          },
          {
            id: 'e6u8l5q7',
            type: 'choice',
            question: '—What ____ your mother do? —She is a doctor.',
            options: ['does', 'do', 'is', 'are'],
            answer: 'does',
            hint: '[What does...do?句型]（英语六年级-第5单元）',
            explanation: '第三人称单数your mother用does，是六年级第5单元What Does She Do学的职业问答句型'
          }
        ]
      }
    ]
  }
]
