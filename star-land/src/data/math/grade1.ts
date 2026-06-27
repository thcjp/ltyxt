import type { Unit } from '@/types'

export const mathGrade1: Unit[] = [
  {
    id: 'm1u1',
    title: '数一数（1-10的认识）',
    subtitle: '从数数开始，走进奇妙的数字世界',
    order: 1,
    lessons: [
      {
        id: 'm1u1l1',
        title: '数数歌',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用手指点数1-10的物品并说出总数',
        successCriteria: '①能从1正确数到10不跳数不重复 ②能点数物品并说出总数',
        iDo: '家长用手指逐一点数桌上的水果，大声说出数字，示范数数节奏。【CFU检查理解】家长问“你能用手指点数1-10的物品并说出总数吗？”',
        weDo: '【引导式】亲子一起拍手数数，从1数到10，每数一个数拍一下手。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立数一数图片中有几只小动物，用手指点数并说出总数。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课学1-10数数，重点是手指点一个数一个，不漏不重。\n共学四步：\n①对话出题：桌上放5颗糖，问孩子"数一数有几颗？"\n②孩子应答：用手指一边点一边数"1、2、3、4、5，有5颗"\n③答错引导：家长握着孩子的手，带着他一个一个点，点一个数一个，强调数到最后一个数就是总数\n④快速检测：数3个苹果、数7根手指、数图中6只小鸡',
        funElement: '小游戏：数数接力赛——你说1我接2，看谁反应快！歇后语：一加一等于二——明摆着的事',
        gsapAnimations: [
          '[GSAP:scaleIn|数字1-10依次弹跳出现|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:staggerFrom|手指点数动画|0.4s|点击触发|elastic.out(1,0.5)]'
        ],
        images: [
          '[IMG:illustration|10只小动物排成一排|400x300|cartoon|png|计数教学]',
          '[IMG:illustration|手指点数示意图|300x250|cartoon|png|数数引导]'
        ],
        content: [
          { type: 'text', content: '小朋友们，让我们一起来数数吧！从1数到10，看看身边有哪些东西可以数。', animationType: 'reveal' },
          { type: 'example', content: '🍎🍎🍎 — 数一数：1、2、3，有3个苹果！', label: '数一数', animationType: 'bounce' },
          { type: 'text', content: '数字1像铅笔细又长，数字2像鸭子水上漂，数字3像耳朵听声音...', animationType: 'typewriter' },
          { type: 'formula', content: '数数口诀：1 2 3 4 5 6 7 8 9 10，从小到大排好队！', label: '数数口诀', animationType: 'counter' },
          { type: 'tip', content: '数数的时候，用手指着一个一个数，不要漏掉也不要重复哦！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '数字1-10依次弹跳出现的动画，每个数字配有对应数量的物品', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'numberCount',
              title: '数数歌：1到10',
              countConfig: { from: 1, to: 10, itemEmoji: '🍎', direction: 'forward' },
              ttsNarration: '让我们一起来数数，从1数到10！',
            }
          },
          { type: 'tip', content: '新加坡CPA教学法：Concrete具象(摆实物)→Pictorial图示(看图数)→Abstract抽象(写数字)，从摸得到到看得懂再到会写', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u1l1q1',
            type: 'choice',
            question: '🐰🐰🐰🐰🐰 数一数，有几只小兔子？',
            options: ['3只', '4只', '5只', '6只'],
            answer: '5只',
            hint: '用手指一只一只点着数哦',
            explanation: '我们用手指逐一点数，1、2、3、4、5，一共有5只小兔子。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l1q2',
            type: 'fill',
            question: '从1数到5，3后面是___',
            answer: '4',
            hint: '想一想数数的顺序：1、2、3、？',
            explanation: '数数的顺序是1、2、3、4、5，所以3后面是4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l1q3',
            type: 'flashcard',
            question: '看到数字，大声读出来！',
            answer: '7',
            hint: '这是比6大1的数字',
            explanation: '这个数字是7，读作\u201c七\u201d，7棵大树、7朵花。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l1q4',
            type: 'choice',
            question: '小红有4颗糖，小明比小红多3颗，小明有几颗糖？',
            options: ['5颗', '6颗', '7颗', '8颗'],
            answer: '7颗',
            hint: '先想"比多"是什么意思，再算一算',
            explanation: '"比多"就是更多，4+3=7，小明有7颗糖。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l1q5',
            type: 'fill',
            question: '从1数到10，5后面第3个数是___',
            answer: '8',
            hint: '5后面是6、7、8...',
            explanation: '5后面第1个是6，第2个是7，第3个是8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l1q6',
            type: 'fill',
            question: '【期中真题】☆+3=8，☆=？',
            answer: '5',
            hint: '几加3等于8？反过来想一想',
            explanation: '因为5+3=8，所以☆=5。逆向思考：8-3=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l1q7',
            type: 'fill',
            question: '按顺序填数：5、6、___、8、9',
            answer: '7',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '按顺序数5、6、7、8、9，7在6和8之间。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u1l2',
        title: '比多少',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用一一对应的方法比较两组物品的多少',
        successCriteria: '①能用连线一一对应比较 ②能说出谁多谁少或一样多',
        iDo: '家长摆出两排不同数量的积木，用连线方式示范一一对应比较。【CFU检查理解】家长问“你能用一一对应的方法比较两组物品的多少吗？”',
        weDo: '【引导式】亲子各拿一些糖果，一一配对比较谁的更多，说出"多""少""一样多"。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立比较两组物品的数量，圈出较多的一组。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】比较多少用"一个对一个"连线法，有剩余的那组多。\n共学四步：\n①对话出题：左边放3颗糖右边放5颗糖，问"哪边多？多几个？"\n②孩子应答："右边多，5比3大，多2个"\n③答错引导：家长和孩子一起把糖一颗颗配对连起来，连完看右边还剩2颗，说明右边多\n④快速检测：4个和4个比（一样多）、2个和6个比（6多）、5个和3个比（5多）',
        funElement: '笑话：0对8说——你的腰带系得太紧啦！小游戏：抢椅子比多少',
        gsapAnimations: [
          '[GSAP:drawSVG|一一对应连线动画|0.8s|页面加载|power2.out]',
          '[GSAP:scaleIn|多/少/一样多标签弹出|0.5s|比较完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|两排苹果一一对应比较|400x300|cartoon|png|比较教学]',
          '[IMG:illustration|积木一一配对图|300x250|cartoon|png|对应比较]'
        ],
        content: [
          { type: 'text', content: '比一比，谁多谁少？把两排东西一个对一个连起来，连完后看谁还有剩下的，剩下的那排就多！', animationType: 'reveal' },
          { type: 'example', content: '🍎🍎🍎 对比 🍎🍎🍎🍎🍎，3个苹果和5个苹果一一配对后，右边还剩2个，所以右边多！', label: '比一比', animationType: 'bounce' },
          { type: 'formula', content: '一一对应法：一个对一个，连完看剩余，有剩余的更多，没剩余的一样多。', label: '比较口诀', animationType: 'typewriter' },
          { type: 'tip', content: '比较多少时，一定要一个一个对齐比，不能只看哪排长就认为多哦！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '两排物品一一连线对应的动画，多出来的物品闪烁高亮', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'compare',
              title: '比多少',
              compareConfig: {
                leftItems: ['🍎', '🍎', '🍎'],
                rightItems: ['🍎', '🍎', '🍎', '🍎', '🍎'],
                result: 'right',
                resultText: '右边多！5比3大',
              },
              ttsNarration: '3个苹果和5个苹果比一比，右边多！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u1l2q1',
            type: 'choice',
            question: '左边3个草莓，右边5个草莓，哪边多？',
            options: ['左边多', '右边多', '一样多', '无法比较'],
            answer: '右边多',
            hint: '用一一对应的方法比一比',
            explanation: '3个和5个一一对应后，右边还剩2个，所以右边多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l2q2',
            type: 'fill',
            question: '4和4比，它们___多',
            answer: '一样',
            acceptableAnswers: ['同样', '相等', '相同'],
            hint: '两个相同的数比较呢？',
            explanation: '4和4数量相同，所以它们一样多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l2q3',
            type: 'flashcard',
            question: '快速判断：5个圆点和3个圆点，哪组更多？',
            answer: '5个圆点',
            hint: '数一数每组的数量',
            explanation: '5比3大，所以5个圆点那组更多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l2q4',
            type: 'choice',
            question: '小红有6颗糖，小明有4颗糖，小红比小明多几颗？',
            options: ['1颗', '2颗', '3颗', '4颗'],
            answer: '2颗',
            hint: '用减法算多几个',
            explanation: '6-4=2，小红比小明多2颗糖。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l2q5',
            type: 'fill',
            question: '△有7个，○有5个，△比○多___个',
            answer: '2',
            hint: '7-5=？',
            explanation: '7-5=2，△比○多2个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l2q6',
            type: 'fill',
            question: '☆比△多3个，△有4个，☆有___个',
            answer: '7',
            hint: '先想"多3个"是什么意思',
            explanation: '☆比△多3个，就是4+3=7，☆有7个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l2q7',
            type: 'fill',
            question: '从1数到10，第5个数是___',
            answer: '5',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '从1开始数：1、2、3、4、5，第5个数是5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u1l3',
        title: '排排队',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能区分"几个"和"第几"，正确说出物品的排列顺序',
        successCriteria: '①能说出某物品排第几 ②能区分"有几个"和"排第几"',
        iDo: '家长用数字卡片1-10示范从小到大排队，讲解排列规则。【CFU检查理解】家长问“你能区分"几个"和"第几"吗？”',
        weDo: '【引导式】亲子一起把打乱的数字卡片按顺序排列，互相检查。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立将数字按从大到小或从小到大排列。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】"几个"是数总数，"第几"是排位置，这是孩子易混淆点。\n共学四步：\n①对话出题：排5个玩具，问"从左数第3个是什么？一共有几个？"\n②孩子应答："第3个是小熊，一共有5个"\n③答错引导：家长用手指着数"第1、第2、第3"强调位置，再数"1、2、3、4、5"强调总数，对比两者不同\n④快速检测：从右数第2个是谁、一共有几个、第4个是谁',
        funElement: '小游戏：数字小火车——把车厢按顺序连起来！歇后语：八九不离十——差不多',
        gsapAnimations: [
          '[GSAP:staggerFrom|数字卡片依次飞入排队|0.5s|页面加载|power3.out]',
          '[GSAP:translateX|数字交换位置动画|0.4s|拖拽完成|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|数字1-10排成小火车|400x300|cartoon|png|排序教学]',
          '[IMG:illustration|小朋友排队示意图|300x250|cartoon|png|序数概念]'
        ],
        content: [
          { type: 'text', content: '数字宝宝要排队啦！从小到大排，1在最前面，10在最后面；从大到小排，10在最前面，1在最后面。', animationType: 'reveal' },
          { type: 'example', content: '从小到大：1、2、3、4、5、6、7、8、9、10；从大到小：10、9、8、7、6、5、4、3、2、1', label: '排一排', animationType: 'bounce' },
          { type: 'formula', content: '排序口诀：小数在前大数后，从小到大正着走；大数在前小数后，从大到小倒着走！', label: '排序口诀', animationType: 'typewriter' },
          { type: 'tip', content: '记住："第几个"是说位置，"几个"是说数量，它们不一样哦！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '数字1-10像小火车车厢一样按顺序连接的动画', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sequence',
              title: '排排队',
              sequenceConfig: { items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], order: 'asc', itemType: 'number' },
              ttsNarration: '数字宝宝排好队，从小到大1到10！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u1l3q1',
            type: 'choice',
            question: '2、4、6、___，下一个应该填什么？',
            options: ['7', '8', '9', '10'],
            answer: '8',
            hint: '看看每次跳了几个数',
            explanation: '2、4、6每次跳2个数，所以6后面是8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l3q2',
            type: 'fill',
            question: '从大到小排列：3、9、1、7，排在第二个的是___',
            answer: '7',
            hint: '先从大到小排好，再看第二个',
            explanation: '从大到小排列是9、7、3、1，排在第二个的是7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l3q3',
            type: 'flashcard',
            question: '小猫排第3个，它前面有几个小动物？',
            answer: '2',
            hint: '第3个前面有第1个和第2个',
            explanation: '排第3个说明前面有2个，就是第1个和第2个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l3q4',
            type: 'choice',
            question: '5、___、9，空格处应该填什么？',
            options: ['6', '7', '8', '10'],
            answer: '7',
            hint: '看看每次跳了几个数',
            explanation: '5到9之间跳2个数，5、7、9，空格处填7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l3q5',
            type: 'fill',
            question: '从大到小排列：8、3、6、1，排在第三个的是___',
            answer: '3',
            hint: '先从大到小排好，再看第三个',
            explanation: '从大到小排列是8、6、3、1，排在第三个的是3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l3q6',
            type: 'fill',
            question: '一排小朋友排队，小明排第4，小红排第7，小明和小红之间有___人',
            answer: '2',
            hint: '第4和第7之间有几个？',
            explanation: '第4和第7之间有第5和第6，共2人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l3q7',
            type: 'choice',
            question: '排队时，小明前面有3人，后面有2人，这排一共有几人？',
            options: ['4人', '5人', '6人', '7人'],
            answer: '6人',
            hint: '[比多少]（数学-数一数-第2课）',
            explanation: '前面3人+小明1人+后面2人=6人，一共6人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u1l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合运用数数、比多少、排序知识完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能说出错题的解题思路',
        iDo: '家长出题引导，示范答题思路，讲解数数、比多少、排序的综合运用。【CFU检查理解】家长问“你能综合运用数数、比多少、排序知识完成闯关测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的解题方法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用数数、比较和排序知识。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】本课综合检测数数、比多少、第几，观察孩子薄弱环节。\n共学四步：\n①对话出题：测试前问"数数、比多少、排第几，你最拿手哪个？"\n②孩子应答：孩子说出自己最有把握的部分\n③答错引导：把错题分类，数数错就摆实物重数，比多少错就画连线，排序错就摆卡片\n④快速检测：数8个物品、比较6和4谁多、从左数第3个是谁',
        funElement: '小游戏：闯关大挑战——打败数数怪兽！歇后语：一五一十——清清楚楚',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|闯关测试场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|数数比多少排序综合图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用数数、比多少和排队的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '数一数有6个苹果，比5多1，排在6和8之间的数是7——这就是综合运用！', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '遇到不会的题，先想想是数数、比多少还是排序的问题，再用对应的方法解决！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测本单元知识掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u1l4q1',
            type: 'choice',
            question: '从1数到5，一共有几个数？',
            options: ['4个', '5个', '6个', '3个'],
            answer: '5个',
            hint: '1、2、3、4、5，数一数',
            explanation: '1、2、3、4、5，一共5个数。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l4q2',
            type: 'fill',
            question: '3和5比，___大',
            answer: '5',
            hint: '哪个数排在后面，哪个就大',
            explanation: '5排在3后面，所以5比3大。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l4q3',
            type: 'choice',
            question: '小明有4颗糖，小红有2颗糖，小明比小红多几颗？',
            options: ['1颗', '2颗', '3颗', '4颗'],
            answer: '2颗',
            hint: '4-2=？',
            explanation: '4-2=2，小明比小红多2颗糖。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l4q4',
            type: 'fill',
            question: '从大到小排列：2、5、1，排在第二个的是___',
            answer: '2',
            hint: '先从大到小排好再看',
            explanation: '从大到小排列是5、2、1，排在第二个的是2。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l4q5',
            type: 'fill',
            question: '△有3个，○比△多2个，○有___个',
            answer: '5',
            hint: '3+2=？',
            explanation: '3+2=5，○有5个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l4q6',
            type: 'choice',
            question: '一排小朋友排队，小红排第2，小明排第5，小红和小明之间有几人？',
            options: ['2人', '3人', '4人', '5人'],
            answer: '2人',
            hint: '第2和第5之间有第3和第4',
            explanation: '第2和第5之间有第3和第4，共2人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l4q7',
            type: 'fill',
            question: '按顺序数数：1、2、3、4、___',
            answer: '5',
            hint: '[数数]（数学一年级-第1单元）',
            explanation: '按顺序数：1、2、3、4、5，4的后面是5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u1l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能用数数和比较解决生活中的数学问题',
        successCriteria: '①能从生活场景中提出数学问题 ②能正确解答生活应用题',
        iDo: '家长用生活场景出题：家里有3个苹果，妈妈又买了2个，一共有几个？【CFU检查理解】家长问“你能用数数和比较解决生活中的数学问题吗？”',
        weDo: '【引导式】亲子一起编生活应用题，互相解答并说出解题思路。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决生活中的数数、比较、排序问题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】把数数和比较用到生活里，如数餐具、比水果多少。\n共学四步：\n①对话出题：吃饭时问"桌上有几只碗？几双筷子？哪个多？"\n②孩子应答："有4只碗、4双筷子，一样多"\n③答错引导：让孩子实际去数去比，用一一对应法把碗和筷子配对\n④快速检测：数家里几把椅子、比较大人和小孩的人数、数书架几本书',
        funElement: '小游戏：生活中的数学侦探！歇后语：屈指可数——数目不多',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|家庭生活数学场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|数数比较排序生活图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '数学就在我们身边！数一数桌上有几个碗，比一比谁的糖果多，排一排谁站前面——都是数学！', animationType: 'reveal' },
          { type: 'example', content: '家里有3个红苹果和2个绿苹果，一共有3+2=5个苹果，红苹果比绿苹果多3-2=1个！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '遇到生活问题，先想清楚是数数、比多少还是排序，再选择正确的方法！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u1l5q1',
            type: 'choice',
            question: '餐桌上有3个碗和2根筷子，碗和筷子哪个多？',
            options: ['碗多', '筷子多', '一样多', '无法比较'],
            answer: '碗多',
            hint: '3和2比大小',
            explanation: '3比2大，所以碗比筷子多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l5q2',
            type: 'fill',
            question: '小红有5颗糖，吃了2颗，还剩___颗',
            answer: '3',
            hint: '5-2=？',
            explanation: '5-2=3，还剩3颗糖。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l5q3',
            type: 'choice',
            question: '小明排队买冰淇淋，他前面有2人，后面有3人，这排一共有几人？',
            options: ['4人', '5人', '6人', '7人'],
            answer: '6人',
            hint: '前面2人+小明1人+后面3人',
            explanation: '2+1+3=6，这排一共有6人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l5q4',
            type: 'fill',
            question: '从1数到10，比4大比7小的数有___和___（从小到大填）',
            answer: '5和6',
            hint: '4和7之间有哪些数？',
            explanation: '比4大比7小的数是5和6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l5q5',
            type: 'fill',
            question: '【期末真题】小红有4朵花，小丽有3朵花，她们一共有___朵花',
            answer: '7',
            hint: '4+3=？',
            explanation: '4+3=7，她们一共有7朵花。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l5q6',
            type: 'choice',
            question: '【期末真题】5个小朋友排队，小明排第3，他后面有几人？',
            options: ['1人', '2人', '3人', '4人'],
            answer: '2人',
            hint: '5-3=？',
            explanation: '5个小朋友排第3，后面有5-3=2人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l5q7',
            type: 'fill',
            question: '数一数：☆☆☆☆☆一共有___个',
            answer: '5',
            hint: '[数数]（数学一年级-第1单元）',
            explanation: '数一数：1、2、3、4、5，一共有5个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u1l5q8',
            type: 'fill',
            question: '科创少年小组做手工，桌上有6个红色零件、3个蓝色零件，一共有几个零件？',
            answer: '9',
            hint: '6+3=？',
            explanation: '6+3=9，一共有9个零件。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u2',
    title: '1-5的认识和加减法',
    subtitle: '认识1到5，开启加减法的大门',
    order: 2,
    lessons: [
      {
        id: 'm1u2l1',
        title: '认识1-5',
        order: 1,
        teachingMethod: 'CPA教学法 + 蒙台梭利多感官',
        learningObjective: '我能认识数字1-5并写出对应数字',
        successCriteria: '①能认读数字1-5 ②能摆出对应数量的物品',
        iDo: '家长用手指和实物展示1-5，每个数字配合对应数量的物品。【CFU检查理解】家长问“你能认识数字1-5并写出对应数字吗？”',
        weDo: '【引导式】亲子一起用手指比划1-5，并用身边的物品摆出对应数量。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立看图写出对应的数字1-5。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】1-5的认识，用实物和手势建立数字与数量的联系。\n共学四步：\n①对话出题：伸出3根手指问"这是数字几？能拿3颗糖吗？"\n②孩子应答："是3，拿1、2、3颗糖"\n③答错引导：家长带孩子一起伸手指，伸一根数一根，再对应摆实物，反复练1到5\n④快速检测：认数字4并摆4块积木、认数字2并拿2支笔、写数字5',
        funElement: '笑话：1对7说——你走路怎么老弯着腰？小游戏：手指变变变',
        gsapAnimations: [
          '[GSAP:scaleIn|数字1-5逐个放大出现|0.5s|页面加载|back.out(1.7)]',
          '[GSAP:staggerFrom|对应数量物品依次出现|0.3s|数字出现后|power2.out]'
        ],
        images: [
          '[IMG:illustration|1-5数字配对应物品|400x300|cartoon|png|数字认识]',
          '[IMG:illustration|手指比划1-5|300x250|cartoon|png|手势数字]'
        ],
        content: [
          { type: 'text', content: '数字1-5是我们的好朋友！1像铅笔细又长，2像鸭子水上漂，3像耳朵听声音，4像小旗迎风飘，5像钩子挂东西。', animationType: 'reveal' },
          { type: 'example', content: '🌸=1，🌸🌸=2，🌸🌸🌸=3，🌸🌸🌸🌸=4，🌸🌸🌸🌸🌸=5', label: '数一数', animationType: 'bounce' },
          { type: 'formula', content: '数字歌：1像铅笔细又长，2像鸭子水上漂，3像耳朵听声音，4像小旗迎风飘，5像钩子挂东西。', label: '数字歌', animationType: 'typewriter' },
          { type: 'tip', content: '每伸出一根手指就多1，1根手指是1，2根手指是2，伸到5根就是5！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '数字1-5依次出现，每个数字旁边浮现对应数量的物品', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'numberCount',
              title: '认识1-5',
              countConfig: { from: 1, to: 5, itemEmoji: '🌸', direction: 'forward' },
              ttsNarration: '数字1到5，每个数字都有对应数量的物品哦！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法 + 蒙台梭利多感官：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）；蒙台梭利多感官（调动视觉听觉触觉等多感官参与学习）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u2l1q1',
            type: 'choice',
            question: '🌸🌸🌸 数一数，有几朵花？',
            options: ['2朵', '3朵', '4朵', '5朵'],
            answer: '3朵',
            hint: '数一数橙色的花有几朵',
            explanation: '一朵一朵数，1、2、3，一共有3朵花。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l1q2',
            type: 'fill',
            question: '伸出4根手指，写出这个数字：___',
            answer: '4',
            hint: '比3多1的数字是几？',
            explanation: '伸出4根手指，对应的数字就是4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l1q3',
            type: 'flashcard',
            question: '一只手全部手指伸开，这是数字几？',
            answer: '5',
            hint: '一只手全部手指伸开',
            explanation: '一只手5根手指全部伸开，这个数字是5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l1q4',
            type: 'choice',
            question: '比3大比5小的数是几？',
            options: ['2', '3', '4', '5'],
            answer: '4',
            hint: '3和5中间的数',
            explanation: '比3大比5小的数是4，3<4<5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l1q5',
            type: 'fill',
            question: '2+2=___',
            answer: '4',
            hint: '两组2个合在一起',
            explanation: '2+2=4，两组2个合在一起是4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l1q6',
            type: 'fill',
            question: '☆+1=4，☆=___',
            answer: '3',
            hint: '几加1等于4？',
            explanation: '因为3+1=4，所以☆=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l1q7',
            type: 'fill',
            question: '按顺序填数：1、2、___、4、5',
            answer: '3',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '按顺序数1、2、3、4、5，3在2和4之间。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u2l2',
        title: '加法初体验',
        order: 2,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能理解加法是"合起来"，会列加法算式并计算',
        successCriteria: '①能看图列出加法算式 ②能正确计算5以内加法',
        iDo: '家长用2个苹果和1个苹果演示合并，说"2加1等于3"。【CFU检查理解】家长问“你能理解加法是"合起来"，会列加法算式并计算吗？”',
        weDo: '【引导式】亲子各拿一些积木，合在一起数总数，说出加法算式。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立看图列加法算式并计算结果。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】加法就是"合起来"，用实物合并演示最直观。\n共学四步：\n①对话出题：放2颗糖再加1颗，问"合起来有几颗？怎么写算式？"\n②孩子应答："2+1=3，有3颗"\n③答错引导：家长把两堆糖推到一起说"合起来"，让孩子数总数，强调加号就是合起来\n④快速检测：1+2=？、3+1=？、2+2=？',
        funElement: '歇后语：二一添作五——一人一半！小游戏：积木大合并',
        gsapAnimations: [
          '[GSAP:translateX|两组物品合并动画|0.6s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|等号和结果弹出|0.4s|合并完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|2个苹果加1个苹果等于3个|400x300|cartoon|png|加法教学]',
          '[IMG:illustration|积木合并示意图|300x250|cartoon|png|合并概念]'
        ],
        content: [
          { type: 'text', content: '加法就是把两堆东西合在一起数！看到"+"号就知道要合起来，看到"="号就知道结果是多少。', animationType: 'reveal' },
          { type: 'example', content: '🍎🍎 + 🍎 = 🍎🍎🍎，2个苹果加1个苹果等于3个苹果，2+1=3', label: '算一算', animationType: 'bounce' },
          { type: 'formula', content: '加法口诀：看到加号就合起来，左边加右边，数一数一共有几个！', label: '加法口诀', animationType: 'typewriter' },
          { type: 'tip', content: '记住：加法就是把东西合在一起数，加号"+"就像两根小棒搭在一起！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '2个苹果和1个苹果合在一起的动画，合并后数字3弹跳出现', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'merge',
              title: '加法初体验',
              mergeConfig: { leftCount: 2, leftEmoji: '🍎', rightCount: 1, rightEmoji: '🍎', operator: '+', resultCount: 3 },
              ttsNarration: '2个苹果加1个苹果，合在一起是3个！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法 + EDI直接教学：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）；EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u2l2q1',
            type: 'choice',
            question: '2+1=？',
            options: ['1', '2', '3', '4'],
            answer: '3',
            hint: '2个和1个合在一起',
            explanation: '2个加1个，合起来数一数：1、2、3，所以2+1=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l2q2',
            type: 'fill',
            question: '1+3=___',
            answer: '4',
            hint: '1个和3个合在一起数',
            explanation: '1个加3个，合起来是4个，所以1+3=4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l2q3',
            type: 'flashcard',
            question: '看算式快速说出答案：2+2=？',
            answer: '4',
            hint: '两组2个合在一起',
            explanation: '2+2就是两组2个合在一起，1、2、3、4，等于4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l2q4',
            type: 'choice',
            question: '小明有3颗糖，妈妈又给了他2颗，现在有几颗糖？',
            options: ['4颗', '5颗', '6颗', '7颗'],
            answer: '5颗',
            hint: '3颗加2颗',
            explanation: '3+2=5，现在有5颗糖。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l2q5',
            type: 'fill',
            question: '4+1=___',
            answer: '5',
            hint: '4个加1个',
            explanation: '4+1=5，4个加1个合起来是5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l2q6',
            type: 'fill',
            question: '2+□=5，□=___',
            answer: '3',
            hint: '几加2等于5？',
            explanation: '因为3+2=5，所以□=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l2q7',
            type: 'fill',
            question: '一只手伸开是5根手指，弯下2根，还伸着___根',
            answer: '3',
            hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）',
            explanation: '5根弯下2根，还伸着3根，5-2=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u2l3',
        title: '减法初体验',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能理解减法是"拿走"，会列减法算式并计算',
        successCriteria: '①能看图列出减法算式 ②能正确计算5以内减法',
        iDo: '家长摆3颗糖，拿走1颗，说"3减1等于2"。【CFU检查理解】家长问“你能理解减法是"拿走"，会列减法算式并计算吗？”',
        weDo: '【引导式】亲子一起用手指做减法：伸出5根，弯下2根，数剩下的。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立看图列减法算式并计算结果。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】减法就是"拿走、去掉"，用实物拿走演示最直观。\n共学四步：\n①对话出题：放3颗糖拿走1颗，问"还剩几颗？怎么写算式？"\n②孩子应答："3-1=2，还剩2颗"\n③答错引导：家长实际拿走糖让孩子数剩下的，强调减号就是拿走\n④快速检测：4-1=？、5-2=？、3-2=？',
        funElement: '笑话：减号对加号说——你怎么老是往多了算？小游戏：糖果不见了',
        gsapAnimations: [
          '[GSAP:opacity|物品消失动画|0.4s|点击触发|power2.in]',
          '[GSAP:scaleIn|剩余数量弹出|0.5s|消失完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|3颗糖拿走1颗剩2颗|400x300|cartoon|png|减法教学]',
          '[IMG:illustration|手指弯下减法示意|300x250|cartoon|png|减法操作]'
        ],
        content: [
          { type: 'text', content: '减法就是从一堆东西里拿走一些，看还剩多少！看到"-"号就知道要拿走，看到"="号就知道还剩几个。', animationType: 'reveal' },
          { type: 'example', content: '🍬🍬🍬 拿走 🍬 = 🍬🍬，3颗糖拿走1颗还剩2颗，3-1=2', label: '算一算', animationType: 'bounce' },
          { type: 'formula', content: '减法口诀：看到减号就拿走，从多的里面去掉少的，数一数还剩几个！', label: '减法口诀', animationType: 'typewriter' },
          { type: 'tip', content: '减号"-"就像拿走的意思，从总数里去掉一部分，看还剩下多少！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '3颗糖中1颗消失的动画，剩余2颗糖闪烁高亮', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'separate',
              title: '减法初体验',
              mergeConfig: { leftCount: 3, leftEmoji: '🍬', rightCount: 1, rightEmoji: '🍬', operator: '-', resultCount: 2 },
              ttsNarration: '3颗糖拿走1颗，还剩2颗！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u2l3q1',
            type: 'choice',
            question: '3-1=？',
            options: ['1', '2', '3', '4'],
            answer: '2',
            hint: '3个拿走1个，还剩几个？',
            explanation: '3个拿走1个，还剩2个，所以3-1=2。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l3q2',
            type: 'fill',
            question: '5-2=___',
            answer: '3',
            hint: '5个去掉2个，数数剩下的',
            explanation: '5个去掉2个，还剩3个，所以5-2=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l3q3',
            type: 'flashcard',
            question: '看算式快速说出答案：4-3=？',
            answer: '1',
            hint: '4个拿走3个',
            explanation: '4个拿走3个，还剩1个，所以4-3=1。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l3q4',
            type: 'choice',
            question: '盘子里有5块饼干，吃了2块，还剩几块？',
            options: ['2块', '3块', '4块', '5块'],
            answer: '3块',
            hint: '5块拿走2块',
            explanation: '5-2=3，还剩3块饼干。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l3q5',
            type: 'fill',
            question: '5-3=___',
            answer: '2',
            hint: '5个拿走3个',
            explanation: '5-3=2，5个拿走3个还剩2个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l3q6',
            type: 'fill',
            question: '□-2=3，□=___',
            answer: '5',
            hint: '几减2等于3？',
            explanation: '因为5-2=3，所以□=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l3q7',
            type: 'choice',
            question: '3+2=5，那么5-2=？',
            options: ['2', '3', '4', '5'],
            answer: '3',
            hint: '[加法]（数学-1-5的认识和加减法-第2课）',
            explanation: '因为3+2=5，所以5-2=3，用加法帮忙算减法！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u2l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合运用1-5认识和加减法完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能区分加法和减法的含义',
        iDo: '家长出题引导，示范认识数字、加法、减法的综合运用思路。【CFU检查理解】家长问“你能综合运用1-5认识和加减法完成闯关测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的解题方法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用1-5的认识和加减法知识。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合检测1-5认识和加减法，重点看加减是否混淆。\n共学四步：\n①对话出题：问"加法是什么意思？减法是什么意思？"\n②孩子应答："加法是合起来，减法是拿走"\n③答错引导：混淆时用实物演示，合起来是加，拿走是减，再做错题\n④快速检测：2+3=？、4-1=？、认数字5、1+4=？',
        funElement: '小游戏：加减法闯关大挑战！歇后语：三下五除二——干脆利落',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|加减法闯关测试场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|1-5加减法综合图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用1-5的认识、加法和减法的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '3+2=5是加法（合起来），5-2=3是减法（拿走），加法和减法是一对好朋友！', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '看到"一共""合起来"用加法，看到"还剩""拿走"用减法！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测1-5认识和加减法掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u2l4q1',
            type: 'choice',
            question: '2+3=？',
            options: ['4', '5', '6', '3'],
            answer: '5',
            hint: '2个和3个合在一起',
            explanation: '2+3=5，2个和3个合在一起是5个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l4q2',
            type: 'fill',
            question: '5-1=___',
            answer: '4',
            hint: '5个拿走1个',
            explanation: '5-1=4，5个拿走1个还剩4个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l4q3',
            type: 'choice',
            question: '小明有3颗糖，妈妈又给了他2颗，现在有几颗？',
            options: ['4颗', '5颗', '6颗', '3颗'],
            answer: '5颗',
            hint: '"又给了"用加法',
            explanation: '3+2=5，"又给了"是合起来，用加法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l4q4',
            type: 'fill',
            question: '4-3=___',
            answer: '1',
            hint: '4个拿走3个',
            explanation: '4-3=1，4个拿走3个还剩1个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l4q5',
            type: 'fill',
            question: '□+2=4，□=___',
            answer: '2',
            hint: '几加2等于4？',
            explanation: '2+2=4，所以□=2。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l4q6',
            type: 'choice',
            question: '小红有5朵花，送给小明2朵，又得到1朵，现在有几朵？',
            options: ['3朵', '4朵', '5朵', '2朵'],
            answer: '4朵',
            hint: '先减后加',
            explanation: '5-2=3，3+1=4，先拿走2朵再得到1朵，现在有4朵。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l4q7',
            type: 'fill',
            question: '3的相邻数是2和___',
            answer: '4',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '3的前面是2，后面是4，3的相邻数是2和4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u2l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能用1-5加减法解决生活问题',
        successCriteria: '①能从生活场景列加减法算式 ②能正确计算结果',
        iDo: '家长用生活场景出题：盘子里有4块饼干，吃了1块，还剩几块？【CFU检查理解】家长问“你能用1-5加减法解决生活问题吗？”',
        weDo: '【引导式】亲子一起编1-5加减法生活应用题，互相解答。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决生活中的1-5加减法问题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】在吃饭玩玩具时练加减法，如分糖果、数碗筷。\n共学四步：\n①对话出题：盘里4块饼干吃了1块，问"还剩几块？怎么算？"\n②孩子应答："4-1=3，还剩3块"\n③答错引导：用真饼干演示拿走，让孩子数剩下的，再写算式\n④快速检测：3人又来1人共几人、5个气球飞走2个剩几个、2颗糖加2颗共几颗',
        funElement: '小游戏：生活加减法小侦探！歇后语：一减一等于零——白忙一场',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|生活加减法场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|1-5加减法生活图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '加减法在生活中到处都是！分糖果用加法，吃饼干用减法，让我们一起在生活中找数学！', animationType: 'reveal' },
          { type: 'example', content: '桌上有2个苹果和3个橘子，一共有2+3=5个水果；吃了2个，还剩5-2=3个！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '生活中遇到"一共有多少"用加法，遇到"还剩多少"用减法！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u2l5q1',
            type: 'choice',
            question: '盘子里有2块蛋糕，妈妈又放了3块，一共有几块？',
            options: ['4块', '5块', '6块', '3块'],
            answer: '5块',
            hint: '"又放了"用加法',
            explanation: '2+3=5，一共有5块蛋糕。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l5q2',
            type: 'fill',
            question: '小红有5颗糖，吃了3颗，还剩___颗',
            answer: '2',
            hint: '"吃了"用减法',
            explanation: '5-3=2，还剩2颗糖。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l5q3',
            type: 'choice',
            question: '树上有4只鸟，飞走了1只，还剩几只？',
            options: ['2只', '3只', '4只', '5只'],
            answer: '3只',
            hint: '"飞走了"用减法',
            explanation: '4-1=3，还剩3只鸟。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l5q4',
            type: 'fill',
            question: '小明有1支铅笔，又买了4支，现在有___支',
            answer: '5',
            hint: '"又买了"用加法',
            explanation: '1+4=5，现在有5支铅笔。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l5q5',
            type: 'fill',
            question: '【期末真题】小红有3个苹果，小明有2个苹果，他们一共有___个苹果',
            answer: '5',
            hint: '3+2=？',
            explanation: '3+2=5，他们一共有5个苹果。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l5q6',
            type: 'choice',
            question: '【期中真题】5个小朋友在玩，走了2个，还剩几个？',
            options: ['2个', '3个', '4个', '5个'],
            answer: '3个',
            hint: '5-2=？',
            explanation: '5-2=3，还剩3个小朋友。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u2l5q7',
            type: 'fill',
            question: '4-2=___',
            answer: '2',
            hint: '[减法初体验]（数学-1-5的认识和加减法-第3课）',
            explanation: '4-2=2，4个拿走2个还剩2个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u3',
    title: '6-10的认识和加减法',
    subtitle: '认识更大的数字，掌握凑十法',
    order: 3,
    lessons: [
      {
        id: 'm1u3l1',
        title: '认识6-10',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能认识数字6-10并用双手表示',
        successCriteria: '①能认读数字6-10 ②能用双手比划6-10的数量',
        iDo: '家长用双手手指展示6-10，每增加一个数字多伸一根手指。【CFU检查理解】家长问“你能认识数字6-10并用双手表示吗？”',
        weDo: '【引导式】亲子一起用双手比划6-10，并用积木摆出对应数量。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立看图写出数字6-10，并摆出对应数量。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】6-10要用两只手，关键是"5再多几个"的思路。\n共学四步：\n①对话出题：伸出一只手5根手指问"这是几？再加2根是几？"\n②孩子应答："5，再加2根是7"\n③答错引导：家长先伸5根，再一根根加，数6、7、8，让孩子跟着做\n④快速检测：认数字8并摆8个物品、用双手比7、写数字9',
        funElement: '笑话：6对9说——你倒立走路不头晕吗？小游戏：双手变数字',
        gsapAnimations: [
          '[GSAP:scaleIn|数字6-10弹跳出现|0.5s|页面加载|back.out(1.7)]',
          '[GSAP:staggerFrom|双手手指依次伸展|0.3s|数字出现后|power2.out]'
        ],
        images: [
          '[IMG:illustration|6-10数字配双手手指|400x300|cartoon|png|数字认识]',
          '[IMG:illustration|10颗星星排列图|300x250|cartoon|png|数量对应]'
        ],
        content: [
          { type: 'text', content: '比5更大的数字来了！6就是5再多1个，7就是5再多2个……10就是两只手全部伸开！', animationType: 'reveal' },
          { type: 'example', content: '⭐⭐⭐⭐⭐⭐=6，⭐⭐⭐⭐⭐⭐⭐=7，⭐⭐⭐⭐⭐⭐⭐⭐=8，⭐⭐⭐⭐⭐⭐⭐⭐⭐=9，⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐=10', label: '数一数', animationType: 'bounce' },
          { type: 'formula', content: '6=5+1，7=5+2，8=5+3，9=5+4，10=5+5', label: '拆分记法', animationType: 'counter' },
          { type: 'tip', content: '6-10的数字需要两只手来比划，一只手5根加上另一手的根数！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '双手手指从5根逐渐增加到10根的动画，数字同步变化', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'numberCount',
              title: '认识6-10',
              countConfig: { from: 6, to: 10, itemEmoji: '⭐', direction: 'forward' },
              ttsNarration: '比5更大的数字来了！6、7、8、9、10！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u3l1q1',
            type: 'choice',
            question: '比5多2的数是几？',
            options: ['6', '7', '8', '9'],
            answer: '7',
            hint: '5根手指再多伸2根',
            explanation: '5再多2就是7，一只手5根加另一只手2根，一共7根。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l1q2',
            type: 'fill',
            question: '9后面是___',
            answer: '10',
            hint: '9再多1是几？',
            explanation: '9再多1就是10，10是两位数，由1和0组成。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l1q3',
            type: 'flashcard',
            question: '比7多1，比9少1，这是数字几？',
            answer: '8',
            hint: '比7多1，比9少1',
            explanation: '这个数字是8，两只手伸出8根手指。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l1q4',
            type: 'choice',
            question: '比8小比6大的数是几？',
            options: ['5', '6', '7', '8'],
            answer: '7',
            hint: '6和8中间的数',
            explanation: '比6大比8小的数是7，6<7<8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l1q5',
            type: 'fill',
            question: '5+4=___',
            answer: '9',
            hint: '5再多4个',
            explanation: '5+4=9，一只手5根加另一手4根=9根。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l1q6',
            type: 'fill',
            question: '☆+2=8，☆=___',
            answer: '6',
            hint: '几加2等于8？',
            explanation: '因为6+2=8，所以☆=6，逆向思考：8-2=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l1q7',
            type: 'fill',
            question: '5再多1是6，那5再多2是___',
            answer: '7',
            hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）',
            explanation: '5+2=7，5再多2就是7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u3l2',
        title: '进阶加减',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用数轴计算6-10的加减法',
        successCriteria: '①能在数轴上做加法往右跳 ②能在数轴上做减法往左跳',
        iDo: '家长在数轴上演示6+3，从6开始往右跳3格到9。【CFU检查理解】家长问“你能用数轴计算6-10的加减法吗？”',
        weDo: '【引导式】亲子一起用数轴做加减法，一个出题一个跳数轴。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在数轴上计算6-10的加减法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】数轴是工具，往右加、往左减，帮孩子建立方向感。\n共学四步：\n①对话出题：画数轴问"从6往右跳3格到几？"\n②孩子应答："6+3=9，到9"\n③答错引导：家长在纸上画数轴标数字，带孩子手指从6开始数3格往右跳到9\n④快速检测：7+2=？跳数轴、8-3=？往左跳、9-4=？',
        funElement: '小游戏：数轴跳跳乐——小青蛙在数轴上跳！歇后语：七上八下——心里不踏实',
        gsapAnimations: [
          '[GSAP:translateX|数轴上小青蛙跳跃|0.6s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|计算结果弹出|0.4s|跳跃完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|数轴0-10及小青蛙|400x300|cartoon|png|数轴教学]',
          '[IMG:illustration|数轴加减法示意图|300x250|cartoon|png|加减操作]'
        ],
        content: [
          { type: 'text', content: '数轴是一条有数字的线，加法往右跳，减法往左跳，像小青蛙一样蹦蹦跳！', animationType: 'reveal' },
          { type: 'example', content: '6+3：小青蛙从6往右跳3格，7→8→9，跳到9！6+3=9', label: '跳一跳', animationType: 'bounce' },
          { type: 'formula', content: '数轴口诀：加法往右跳，减法往左跳，跳几格看数字，跳到哪就是答案！', label: '数轴口诀', animationType: 'typewriter' },
          { type: 'tip', content: '在数轴上做加减法，加就是往大的方向走，减就是往小的方向走！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '小青蛙在数轴上从6跳到9的动画，每跳一格数字滚动变化', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'numberCount',
              title: '数的大小顺序',
              countConfig: { from: 6, to: 9, itemEmoji: '🐸', direction: 'forward' },
              ttsNarration: '6、7、8、9，数字越来越大！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u3l2q1',
            type: 'choice',
            question: '6+3=？',
            options: ['7', '8', '9', '10'],
            answer: '9',
            hint: '从6开始往右跳3格',
            explanation: '从6往右跳3格：7、8、9，所以6+3=9。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l2q2',
            type: 'fill',
            question: '10-4=___',
            answer: '6',
            hint: '从10往左跳4格',
            explanation: '从10往左跳4格：9、8、7、6，所以10-4=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l2q3',
            type: 'flashcard',
            question: '看算式快速说出答案：8-5=？',
            answer: '3',
            hint: '从8往左跳5格',
            explanation: '8往左跳5格：7、6、5、4、3，所以8-5=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l2q4',
            type: 'choice',
            question: '小明有7颗糖，又得到3颗，现在有几颗？',
            options: ['8颗', '9颗', '10颗', '11颗'],
            answer: '10颗',
            hint: '7+3=？',
            explanation: '7+3=10，从7往右跳3格到10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l2q5',
            type: 'fill',
            question: '9-6=___',
            answer: '3',
            hint: '从9往左跳6格',
            explanation: '9往左跳6格：8、7、6、5、4、3，所以9-6=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l2q6',
            type: 'fill',
            question: '8+□=10，□=___',
            answer: '2',
            hint: '8还差几到10？',
            explanation: '8+2=10，8还差2到10，这就是凑十法的思路！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l2q7',
            type: 'fill',
            question: '比5多3的数是___',
            answer: '8',
            hint: '[6-10的认识]（数学-6-10的认识和加减法-第1课）',
            explanation: '5+3=8，比5多3就是8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u3l3',
        title: '凑十法初探',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能找出凑成10的两个数（1和9、2和8等）',
        successCriteria: '①能说出凑十配对 ②能用十格阵演示凑十',
        iDo: '家长用十格阵演示：8个格子已满，再加2个凑成10。【CFU检查理解】家长问“你能找出凑成10的两个数（1和9、2和8等）吗？”',
        weDo: '【引导式】亲子一起用十格阵凑十，找出谁和谁能凑成10。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立填写凑十的配对：1和9、2和8……【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】凑十法是计算基础，记住配对：1和9、2和8、3和7、4和6、5和5。\n共学四步：\n①对话出题：问"几和几凑成10？"\n②孩子应答："1和9、2和8、3和7、4和6、5和5"\n③答错引导：画一个十格阵（两排5格），放8个棋子问"还差几个满10？"让孩子数空格\n④快速检测：7和几凑10、几和4凑10、9和几凑10',
        funElement: '笑话：5对5说——咱俩凑一起正好是10！小游戏：凑十对对碰',
        gsapAnimations: [
          '[GSAP:staggerFrom|十格阵逐格填充|0.3s|页面加载|power2.out]',
          '[GSAP:scaleIn|凑十成功星星特效|0.5s|凑十完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|十格阵凑十示意图|400x300|cartoon|png|凑十教学]',
          '[IMG:illustration|数字配对凑十图|300x250|cartoon|png|凑十配对]'
        ],
        content: [
          { type: 'text', content: '凑十法就是找好朋友！两个数加起来正好等于10，它们就是凑十好朋友。', animationType: 'reveal' },
          { type: 'example', content: '8+2=10，8和2是好朋友；7+3=10，7和3是好朋友！', label: '找朋友', animationType: 'bounce' },
          { type: 'formula', content: '凑十歌：1和9手拉手，2和8是一家，3和7亲又亲，4和6好朋友，5和5并肩走！', label: '凑十歌', animationType: 'typewriter' },
          { type: 'tip', content: '记住凑十好朋友，以后做大加法就快多了！看到9想1，看到8想2，看到7想3！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '凑十法分解动画：8+2，2拆成2和0，8+2=10，10+0=10', animationType: 'makeTen',
            animationConfig: {
              sceneType: 'makeTen',
              title: '凑十法',
              makeTenConfig: {
                bigNum: 8,
                smallNum: 2,
                splitTo: 2,
                splitLeft: 2,
                splitRight: 0,
                tenResult: 10,
                finalResult: 10,
              },
              ttsNarration: '8加2等于10，凑十成功！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u3l3q1',
            type: 'choice',
            question: '7和几凑成10？',
            options: ['2', '3', '4', '5'],
            answer: '3',
            hint: '7还差几个到10？',
            explanation: '7还差3个到10，所以7和3凑成10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l3q2',
            type: 'fill',
            question: '6+___=10',
            answer: '4',
            hint: '6还差几个到10？',
            explanation: '6还差4个到10，所以6+4=10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l3q3',
            type: 'flashcard',
            question: '快速说出凑十伙伴：9的好朋友是谁？',
            answer: '1',
            hint: '9还差几个到10？',
            explanation: '9还差1个到10，所以9的好朋友是1，9+1=10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l3q4',
            type: 'choice',
            question: '8和几凑成10？',
            options: ['1', '2', '3', '4'],
            answer: '2',
            hint: '8还差几到10？',
            explanation: '8还差2到10，所以8和2凑成10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l3q5',
            type: 'fill',
            question: '5+___=10',
            answer: '5',
            hint: '5还差几到10？',
            explanation: '5+5=10，5和5凑成10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l3q6',
            type: 'choice',
            question: '7+3=10，那么10-7=？',
            options: ['2', '3', '4', '5'],
            answer: '3',
            hint: '凑十的好朋友反过来想',
            explanation: '7+3=10，所以10-7=3，凑十的好朋友也能帮我们做减法！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l3q7',
            type: 'fill',
            question: '6+4=10，那么10-6=___',
            answer: '4',
            hint: '[6-10加减法]（数学-6-10的认识和加减法-第2课）',
            explanation: '6+4=10，所以10-6=4，加法和减法是好朋友！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u3l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合运用6-10认识和凑十法完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能熟练说出凑十配对',
        iDo: '家长出题引导，示范6-10的认识、进阶加减和凑十法的综合运用。【CFU检查理解】家长问“你能综合运用6-10认识和凑十法完成闯关测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的解题方法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用6-10的认识和加减法知识。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合检测6-10认识和加减法，重点查凑十法。\n共学四步：\n①对话出题：问"凑十配对有哪些？"\n②孩子应答："1和9、2和8、3和7、4和6、5和5"\n③答错引导：用十格阵或手指帮孩子重新记配对，再练错题\n④快速检测：7+3=？、9+1=？、认数字10、6和几凑10',
        funElement: '小游戏：6-10加减法闯关大挑战！歇后语：十拿九稳——很有把握',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|6-10加减法闯关场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|凑十法综合检测图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用6-10的认识、数轴加减和凑十法的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '7+3=10（凑十法），10-4=6（数轴往左跳），6和4凑成10——综合运用！', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '凑十法是关键！看到9想1，看到8想2，看到7想3，看到6想4！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测6-10认识和加减法掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u3l4q1',
            type: 'choice',
            question: '7+3=？',
            options: ['9', '10', '11', '8'],
            answer: '10',
            hint: '7和3是凑十好朋友',
            explanation: '7+3=10，7和3凑成10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l4q2',
            type: 'fill',
            question: '10-6=___',
            answer: '4',
            hint: '从10往左跳6格',
            explanation: '10-6=4，从10往左跳6格到4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l4q3',
            type: 'choice',
            question: '8和几凑成10？',
            options: ['1', '2', '3', '4'],
            answer: '2',
            hint: '8还差几到10？',
            explanation: '8还差2到10，所以8和2凑成10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l4q4',
            type: 'fill',
            question: '9+□=10，□=___',
            answer: '1',
            hint: '9还差几到10？',
            explanation: '9+1=10，9还差1到10。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l4q5',
            type: 'fill',
            question: '7+5=___',
            answer: '12',
            hint: '见7想3，5拆成3和2',
            explanation: '5拆成3和2，7+3=10，10+2=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l4q6',
            type: 'choice',
            question: '小明有8颗糖，小红给了他5颗，一共有几颗？用凑十法怎么算？',
            options: ['11颗', '12颗', '13颗', '14颗'],
            answer: '13颗',
            hint: '见8想2，5拆成2和3',
            explanation: '5拆成2和3，8+2=10，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l4q7',
            type: 'fill',
            question: '5+3=___',
            answer: '8',
            hint: '[1-5加减法]（数学-1-5的认识和加减法-第2课）',
            explanation: '5+3=8，5再多3就是8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u3l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能用6-10加减法解决生活问题',
        successCriteria: '①能从生活场景列算式 ②能正确计算6-10加减法',
        iDo: '家长用生活场景出题：小明有7颗糖，妈妈又给了他4颗，一共有几颗？【CFU检查理解】家长问“你能用6-10加减法解决生活问题吗？”',
        weDo: '【引导式】亲子一起编6-10加减法生活应用题，互相解答。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决生活中的6-10加减法问题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】用6-10加减法解决生活问题，鼓励说出凑十过程。\n共学四步：\n①对话出题：小明有7颗糖妈妈给4颗，问"一共几颗？怎么算？"\n②孩子应答："7+4=11，用凑十法"\n③答错引导：用硬币摆7个和4个，让孩子凑十：拿3个给7凑10，剩1个，共11\n④快速检测：8颗糖吃3颗剩几、6本书加4本共几本、9个苹果送2个剩几',
        funElement: '小游戏：生活凑十小达人！歇后语：八九不离十——差不多',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|生活凑十法场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|6-10加减法生活图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '6-10的加减法在生活中很有用！买东西算钱、分东西、数人数……凑十法帮你算得又快又准！', animationType: 'reveal' },
          { type: 'example', content: '8个同学加5个同学，8+5=13：见8想2，5拆成2和3，8+2=10，10+3=13个同学！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '生活中遇到加法，先看看能不能凑十，凑十法比一个一个数快多了！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u3l5q1',
            type: 'choice',
            question: '教室里有6个男生和5个女生，一共有几个小朋友？',
            options: ['10个', '11个', '12个', '9个'],
            answer: '11个',
            hint: '6+5=？用凑十法',
            explanation: '5拆成4和1，6+4=10，10+1=11个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l5q2',
            type: 'fill',
            question: '妈妈买了10个苹果，吃了3个，还剩___个',
            answer: '7',
            hint: '10-3=？',
            explanation: '10-3=7，还剩7个苹果。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l5q3',
            type: 'choice',
            question: '小红有9颗星，小明有6颗星，他们一共有几颗星？',
            options: ['14颗', '15颗', '16颗', '13颗'],
            answer: '15颗',
            hint: '9+6=？用凑十法',
            explanation: '6拆成1和5，9+1=10，10+5=15颗。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l5q4',
            type: 'fill',
            question: '停车场有10辆车，开走了7辆，还剩___辆',
            answer: '3',
            hint: '10-7=？',
            explanation: '10-7=3，还剩3辆车。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l5q5',
            type: 'fill',
            question: '【期末真题】8+7=___',
            answer: '15',
            hint: '见8想2，7拆成2和5',
            explanation: '7拆成2和5，8+2=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l5q6',
            type: 'choice',
            question: '【期中真题】比5多4的数是几？',
            options: ['8', '9', '10', '7'],
            answer: '9',
            hint: '5+4=？',
            explanation: '5+4=9，比5多4的数是9。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u3l5q7',
            type: 'fill',
            question: '3+2=___',
            answer: '5',
            hint: '[1-5加减法]（数学-1-5的认识和加减法-第2课）',
            explanation: '3+2=5，3个和2个合在一起是5个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u4',
    title: '11-20各数的认识',
    subtitle: '认识十几和二十，理解十和几',
    order: 4,
    lessons: [
      {
        id: 'm1u4l1',
        title: '认识11-20',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能认识11-20各数，理解"十和几"',
        successCriteria: '①能读写11-20各数 ②能说出十几由1个十和几个一组成',
        iDo: '家长用小棒演示：1捆（10根）+1根=11，讲解十位和个位。【CFU检查理解】家长问“你能认识11-20各数，理解"十和几"吗？”',
        weDo: '【引导式】亲子一起用小棒摆出11-20，说出"1个十和几个一"。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立看小棒图写出11-20的数字。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】重点是"10根捆成1捆"的概念，这是位值基础。\n共学四步：\n①对话出题：拿1捆小棒（10根）加3根，问"这是多少？"\n②孩子应答："13，1捆是10，加3根是13"\n③答错引导：家长用皮筋把10根捆成1捆，说"1捆就是1个十"，再数散的几根\n④快速检测：1捆加5根是几、1捆加8根是几、读出17',
        funElement: '笑话：11对1说——你一个人太孤单了，我来陪你！小游戏：小棒捆捆乐',
        gsapAnimations: [
          '[GSAP:translateX|10根小棒捆成一捆|0.6s|页面加载|power2.inOut]',
          '[GSAP:scaleIn|11-20数字依次出现|0.4s|捆棒完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|小棒捆成1捆加散根|400x300|cartoon|png|位值教学]',
          '[IMG:illustration|11-20数字卡片|300x250|cartoon|png|数字认识]'
        ],
        content: [
          { type: 'text', content: '10根小棒捆成1捆就是1个十！1捆加1根就是11，1捆加2根就是12……1捆加9根就是19，2捆就是20！', animationType: 'reveal' },
          { type: 'example', content: '1捆+3根=13，13里面有1个十和3个一', label: '摆一摆', animationType: 'bounce' },
          { type: 'formula', content: '十几的组成：1个十和几个一合起来就是十几，2个十就是20！', label: '组成口诀', animationType: 'typewriter' },
          { type: 'tip', content: '10根捆成1捆很重要！这1捆就表示十位上的1，散的根数就是个位上的数。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '10根散小棒捆成1捆的动画，然后1根1根加上去变成11、12、13', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '认识11-20',
              sceneBuildConfig: {
                sceneName: '11到20的认识',
                elements: [
                  { id: 'el-0', text: '1捆', emoji: '🪵', delay: 0, animation: 'bounceIn', ttsText: '10根捆成1捆' },
                  { id: 'el-1', text: '11', emoji: '1️⃣', delay: 0.5, animation: 'scaleIn', ttsText: '1捆加1根是11' },
                  { id: 'el-2', text: '12', emoji: '2️⃣', delay: 1.0, animation: 'scaleIn', ttsText: '1捆加2根是12' },
                  { id: 'el-3', text: '20', emoji: '🔟', delay: 1.5, animation: 'bounceIn', ttsText: '2捆就是20' },
                ],
              },
              ttsNarration: '10根小棒捆成1捆，再加几根就是十几！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u4l1q1',
            type: 'choice',
            question: '1个十和3个一组成几？',
            options: ['12', '13', '14', '31'],
            answer: '13',
            hint: '1个十是10，再加3',
            explanation: '1个十是10，3个一是3，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l1q2',
            type: 'fill',
            question: '15里面有1个十和几个一？填数字',
            answer: '5',
            hint: '十位上是1，个位上是几？',
            explanation: '15的十位是1，个位是5，所以15里面有1个十和5个一。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l1q3',
            type: 'flashcard',
            question: '数一数小棒：||||||||||||||||| 快速说出数字！',
            answer: '17',
            hint: '1捆加7根',
            explanation: '1捆是10根，加7根散的，一共17根，所以是17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l1q4',
            type: 'choice',
            question: '1个十和6个一组成几？',
            options: ['15', '16', '17', '61'],
            answer: '16',
            hint: '1个十是10，再加6',
            explanation: '1个十是10，6个一是6，10+6=16。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l1q5',
            type: 'fill',
            question: '18里面有1个十和___个一',
            answer: '8',
            hint: '18的个位是几？',
            explanation: '18的十位是1，个位是8，所以18里面有1个十和8个一。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l1q6',
            type: 'fill',
            question: '1个十和5个一，再加上2个一，是___',
            answer: '17',
            hint: '先想15再加2',
            explanation: '1个十和5个一是15，15+2=17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l1q7',
            type: 'fill',
            question: '8+2=___，这就是凑十法',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '8+2=10，8和2是凑十好朋友！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u4l2',
        title: '十和几',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用位值表理解十位和个位',
        successCriteria: '①能在位值表上摆数字 ②能说出十位和个位各表示什么',
        iDo: '家长在位值表上摆出数字，讲解十位和个位各表示什么。【CFU检查理解】家长问“你能用位值表理解十位和个位吗？”',
        weDo: '【引导式】亲子一起在位值表上摆数字，互相出题猜数字。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立根据位值表上的数字写出对应的数。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】十位上的1表示1个十（10），不是1个一，这是关键。\n共学四步：\n①对话出题：在位值表十位摆1个位摆5，问"这是几？十位1表示什么？"\n②孩子应答："是15，十位1表示1个十"\n③答错引导：家长用1捆小棒放十位、5根放个位，说"十位的1是1捆等于10，个位是几根"\n④快速检测：十位1个位7是几、十位2个位0是几、15的十位是几',
        funElement: '歇后语：十个手指头——数得清！小游戏：位值表猜猜猜',
        gsapAnimations: [
          '[GSAP:staggerFrom|位值表十位个位数字飞入|0.5s|页面加载|power3.out]',
          '[GSAP:scaleIn|完整数字组合弹出|0.4s|位值填完|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|位值表示意图十位个位|400x300|cartoon|png|位值概念]',
          '[IMG:illustration|小棒与位值表对应|300x250|cartoon|png|位值对应]'
        ],
        content: [
          { type: 'text', content: '每个数字都有自己的"座位"：十位和个位。十位上的数字表示几个十，个位上的数字表示几个一。', animationType: 'reveal' },
          { type: 'example', content: '18：十位上是1，表示1个十；个位上是8，表示8个一。1个十+8个一=18', label: '位值表', animationType: 'bounce' },
          { type: 'formula', content: '位值口诀：左边十位右边个位，十位1就是10，个位几就是几！', label: '位值口诀', animationType: 'typewriter' },
          { type: 'tip', content: '十位上的1可不是1哦，它表示1个十，就是10！别搞混了！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '位值表上十位和个位数字飞入组合成完整数字的动画', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '位值表',
              sceneBuildConfig: {
                sceneName: '位值表',
                elements: [
                  { id: 'el-0', text: '十位', emoji: '🔟', delay: 0, animation: 'bounceIn', ttsText: '十位' },
                  { id: 'el-1', text: '个位', emoji: '1️⃣', delay: 0.4, animation: 'bounceIn', ttsText: '个位' },
                  { id: 'el-2', text: '1', emoji: '🔵', delay: 0.8, animation: 'slideIn', ttsText: '十位写1' },
                  { id: 'el-3', text: '3', emoji: '🔴', delay: 1.2, animation: 'slideIn', ttsText: '个位写3，合起来是13' },
                ],
              },
              ttsNarration: '十位和个位上的数字合起来，就是一个完整的数！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u4l2q1',
            type: 'choice',
            question: '十位上是1，个位上是8，这个数是？',
            options: ['18', '81', '8', '108'],
            answer: '18',
            hint: '十位1表示10，个位8表示8',
            explanation: '十位1表示1个十（10），个位8表示8个一，10+8=18。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l2q2',
            type: 'fill',
            question: '2个十是___',
            answer: '20',
            hint: '2个十就是10+10',
            explanation: '2个十就是10+10=20，个位上是0。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l2q3',
            type: 'flashcard',
            question: '十位是1，个位是0，这是什么数？',
            answer: '10',
            hint: '1个十加0个一',
            explanation: '1个十加0个一就是10，这是最小的两位数。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l2q4',
            type: 'choice',
            question: '一个数的十位是1，个位是9，这个数是？',
            options: ['19', '91', '18', '9'],
            answer: '19',
            hint: '十位1表示10，个位9表示9',
            explanation: '十位1表示1个十（10），个位9表示9个一，10+9=19。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l2q5',
            type: 'fill',
            question: '十位是1，个位是4，这个数是___',
            answer: '14',
            hint: '1个十加4个一',
            explanation: '1个十加4个一，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l2q6',
            type: 'fill',
            question: '15的十位是___，个位是5',
            answer: '1',
            hint: '15是十几，十位上是几？',
            explanation: '15的十位是1，表示1个十，个位是5，表示5个一。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l2q7',
            type: 'fill',
            question: '1个十和3个一组成___',
            answer: '13',
            hint: '[11-20的认识]（数学-11-20各数的认识-第1课）',
            explanation: '1个十和3个一，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u4l3',
        title: '20以内不进位加法',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能计算20以内不进位加法（只加个位，十位不变）',
        successCriteria: '①能正确计算十几加几 ②能说出十位不变的规律',
        iDo: '家长用小棒演示12+3：1捆2根+3根=1捆5根=15。【CFU检查理解】家长问“你能计算20以内不进位加法（只加个位吗？”',
        weDo: '【引导式】亲子一起用小棒做十几加几的加法，说出计算过程。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立计算20以内不进位加法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】不进位加法只加个位，十位不变。\n共学四步：\n①对话出题：问"12+3怎么算？"\n②孩子应答："12+3=15，个位2+3=5，十位1不变"\n③答错引导：用小棒摆1捆2根加3根，让孩子看到1捆没变，2根+3根=5根，共15\n④快速检测：11+5=？、14+3=？、13+6=？',
        funElement: '笑话：12+3说——我十位不动，只加个位就行！小游戏：不进位加法接力',
        gsapAnimations: [
          '[GSAP:translateX|个位小棒增加动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|计算结果弹出|0.4s|计算完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|12+3小棒操作图|400x300|cartoon|png|不进位加法]',
          '[IMG:illustration|个位相加十位不变|300x250|cartoon|png|计算规则]'
        ],
        content: [
          { type: 'text', content: '不进位加法很简单！十位上的数字不动，只把个位上的数字加起来就行啦！', animationType: 'reveal' },
          { type: 'example', content: '12+3：十位1不动，个位2+3=5，所以12+3=15', label: '算一算', animationType: 'bounce' },
          { type: 'formula', content: '不进位加法口诀：十位不变个位加，个位相加不满十，十位稳稳不搬家！', label: '计算口诀', animationType: 'typewriter' },
          { type: 'tip', content: '记住：个位加起来不超过10，十位就不用变！这就是"不进位"的意思。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '12+3的小棒操作动画，3根小棒加入个位，十位1捆不动', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'merge',
              title: '不进位加法',
              mergeConfig: { leftCount: 12, leftEmoji: '🪵', rightCount: 3, rightEmoji: '🪵', operator: '+', resultCount: 15 },
              ttsNarration: '12加3，个位2加3等于5，十位1不变，结果是15！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u4l3q1',
            type: 'choice',
            question: '11+5=？',
            options: ['15', '16', '17', '51'],
            answer: '16',
            hint: '十位1不变，个位1+5',
            explanation: '十位1不变，个位1+5=6，所以11+5=16。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l3q2',
            type: 'fill',
            question: '14+3=___',
            answer: '17',
            hint: '个位4+3等于几？',
            explanation: '十位1不变，个位4+3=7，所以14+3=17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l3q3',
            type: 'flashcard',
            question: '快速计算：13+6=？',
            answer: '19',
            hint: '个位3+6',
            explanation: '十位1不变，个位3+6=9，所以13+6=19。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l3q4',
            type: 'choice',
            question: '小明有12本书，又买了5本，现在有几本？',
            options: ['15本', '16本', '17本', '18本'],
            answer: '17本',
            hint: '12+5=？',
            explanation: '十位1不变，个位2+5=7，12+5=17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l3q5',
            type: 'fill',
            question: '15+3=___',
            answer: '18',
            hint: '个位5+3',
            explanation: '十位1不变，个位5+3=8，15+3=18。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l3q6',
            type: 'fill',
            question: '12+4=16，那么16-4=___',
            answer: '12',
            hint: '加法和减法是逆运算',
            explanation: '12+4=16，所以16-4=12，用加法帮忙算减法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l3q7',
            type: 'fill',
            question: '十位是1，个位是7，这个数是___',
            answer: '17',
            hint: '[位值表]（数学-11-20各数的认识-第2课）',
            explanation: '十位1表示10，个位7表示7，10+7=17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u4l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合运用11-20认识和加减法完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能说清十位个位的含义',
        iDo: '家长出题引导，示范11-20的认识、位值表和不进位加法的综合运用。【CFU检查理解】家长问“你能综合运用11-20认识和加减法完成闯关测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的解题方法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用11-20的认识和不进位加法知识。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合检测11-20认识和加减法，重点查位值概念。\n共学四步：\n①对话出题：问"15的十位是几？表示什么？"\n②孩子应答："十位是1，表示1个十"\n③答错引导：用小棒捆和位值表重新演示，十位的1是1捆等于10\n④快速检测：13+4=？、十位1个位8是几、读出19、12+7=？',
        funElement: '小游戏：11-20闯关大挑战！歇后语：十全十美——完美无缺',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|11-20闯关测试场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|位值和不进位加法综合图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用11-20的认识、位值表和不进位加法的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '15里面有1个十和5个一，15+3=18（十位不变个位加）——综合运用！', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '不进位加法的关键：十位不变，个位相加！个位加起来不超过10就不进位。', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测11-20认识和加减法掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u4l4q1',
            type: 'choice',
            question: '1个十和8个一组成几？',
            options: ['16', '17', '18', '19'],
            answer: '18',
            hint: '10+8=？',
            explanation: '1个十是10，8个一是8，10+8=18。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l4q2',
            type: 'fill',
            question: '16里面有1个十和___个一',
            answer: '6',
            hint: '16的个位是几？',
            explanation: '16的十位是1，个位是6，所以16里面有1个十和6个一。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l4q3',
            type: 'choice',
            question: '十位是1，个位是3，这个数是？',
            options: ['12', '13', '14', '31'],
            answer: '13',
            hint: '10+3=？',
            explanation: '十位1表示10，个位3表示3，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l4q4',
            type: 'fill',
            question: '12+5=___',
            answer: '17',
            hint: '十位1不变，个位2+5',
            explanation: '十位1不变，个位2+5=7，12+5=17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l4q5',
            type: 'fill',
            question: '19的十位是___，个位是9',
            answer: '1',
            hint: '19是十几，十位是几？',
            explanation: '19的十位是1，表示1个十。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l4q6',
            type: 'choice',
            question: '小红有14颗糖，小明比她多5颗，小明有几颗？',
            options: ['18颗', '19颗', '20颗', '17颗'],
            answer: '19颗',
            hint: '14+5=？',
            explanation: '14+5=19，十位1不变，个位4+5=9。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l4q7',
            type: 'fill',
            question: '7+3=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '7+3=10，7和3是凑十好朋友。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u4l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能用11-20的数解决生活问题',
        successCriteria: '①能在生活中找到十几的数 ②能计算生活中的不进位加法',
        iDo: '家长用生活场景出题：书架上有12本书，又放了6本，现在有几本？【CFU检查理解】家长问“你能用11-20的数解决生活问题吗？”',
        weDo: '【引导式】亲子一起编11-20加减法生活应用题，互相解答。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决生活中的11-20加减法问题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】在生活中找十几的数，如页码、门牌号、楼层。\n共学四步：\n①对话出题：书架12本又放6本，问"现在几本？怎么算？"\n②孩子应答："12+6=18，个位2+6=8，十位1不变"\n③答错引导：用书实际摆，先数12本再放6本，强调十位不变只加个位\n④快速检测：15页再看3页到几页、14楼再上4层到几楼、11+8=？',
        funElement: '小游戏：生活中的十几小侦探！歇后语：十五个吊桶打水——七上八下',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|生活中11-20场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|位值和加法生活图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '11-20的数字在生活中到处都是！楼层号、页码、人数……理解十和几，就能轻松认识它们！', animationType: 'reveal' },
          { type: 'example', content: '小明住15楼，就是1个十和5个一；他今天读了13页书，就是1个十和3个一！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '遇到十几的数，就拆成1个十和几个一，这样加减法就简单了！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u4l5q1',
            type: 'choice',
            question: '小明看一本书，今天从第11页看到第18页，他今天看了几页？',
            options: ['7页', '8页', '9页', '18页'],
            answer: '8页',
            hint: '18-11+1=？',
            explanation: '从11页到18页，18-11+1=8页。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l5q2',
            type: 'fill',
            question: '教室里有14个男生和5个女生，一共有___个小朋友',
            answer: '19',
            hint: '14+5=？',
            explanation: '14+5=19，十位1不变，个位4+5=9。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l5q3',
            type: 'choice',
            question: '停车场有17辆车，开走了5辆，还剩几辆？',
            options: ['11辆', '12辆', '13辆', '14辆'],
            answer: '12辆',
            hint: '17-5=？',
            explanation: '17-5=12，十位1不变，个位7-5=2。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l5q4',
            type: 'fill',
            question: '小红有11颗糖，妈妈又给了她8颗，现在有___颗',
            answer: '19',
            hint: '11+8=？',
            explanation: '11+8=19，十位1不变，个位1+8=9。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l5q5',
            type: 'fill',
            question: '【期末真题】1个十和5个一组成___',
            answer: '15',
            hint: '10+5=？',
            explanation: '1个十和5个一，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l5q6',
            type: 'choice',
            question: '【期末真题】十位上是1，个位上是2，这个数是？',
            options: ['12', '21', '11', '13'],
            answer: '12',
            hint: '十位1表示10，个位2表示2',
            explanation: '十位1表示10，个位2表示2，10+2=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u4l5q7',
            type: 'fill',
            question: '6+4=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '6+4=10，6和4是凑十好朋友。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u5',
    title: '20以内进位加法',
    subtitle: '掌握凑十法，攻克进位加法',
    order: 5,
    lessons: [
      {
        id: 'm1u5l1',
        title: '9加几',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用凑十法计算9加几的进位加法',
        successCriteria: '①能说出"见9想1"凑十过程 ②能正确计算9加几',
        iDo: '家长演示9+4：把4拆成1和3，9+1=10，10+3=13。【CFU检查理解】家长问“你能用凑十法计算9加几的进位加法吗？”',
        weDo: '【引导式】亲子一起用小棒做9加几，练习"见9想1"的凑十法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用凑十法计算9加几的进位加法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】9加几的关键是"见9想1"，从另一个数拿1给9凑成10。\n共学四步：\n①对话出题：问"9+4怎么用凑十法算？"\n②孩子应答："见9想1，把4拆成1和3，9+1=10，10+3=13"\n③答错引导：摆9颗糖和4颗糖，让孩子拿1颗给9那边凑成10，剩3颗，共13\n④快速检测：9+5=？、9+3=？、9+7=？',
        funElement: '笑话：9说——我差1个就满了，谁借我1个？小游戏：9的凑十魔法',
        gsapAnimations: [
          '[GSAP:translateX|小棒拆分移动动画|0.6s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|凑十成功闪光特效|0.5s|凑十完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|9+4凑十法拆分图|400x300|cartoon|png|凑十法]',
          '[IMG:illustration|见9想1示意图|300x250|cartoon|png|凑十口诀]'
        ],
        content: [
          { type: 'text', content: '9加几有妙招！9差1个就满10，所以从另一个数里拿1给9，凑成10再加剩下的！', animationType: 'reveal' },
          { type: 'example', content: '9+4：从4里拿1给9，9+1=10，4还剩3，10+3=13', label: '凑一凑', animationType: 'bounce' },
          { type: 'formula', content: '凑十法：看大数，分小数，凑成十，加剩数！9加几，见9想1！', label: '凑十口诀', animationType: 'typewriter' },
          { type: 'tip', content: '9是最需要凑十的数字，因为它只差1就到10了！看到9就想到1！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '思维训练：为什么9+4不直接数，而要凑十？因为凑十法让我们"多想少算"——先想9和谁凑成10，再算剩下的，比一个一个数快多了！这就是数学思维的力量！', label: '思维引导', animationType: 'pulse' },
          { type: 'animation', content: '9+4凑十法分解动画：4拆成1和3，9+1=10，10+3=13', animationType: 'makeTen',
            animationConfig: {
              sceneType: 'makeTen',
              title: '9加几凑十法',
              makeTenConfig: {
                bigNum: 9,
                smallNum: 4,
                splitTo: 4,
                splitLeft: 1,
                splitRight: 3,
                tenResult: 10,
                finalResult: 13,
              },
              ttsNarration: '9加4，看到9想1，4分成1和3，9加1等于10，10加3等于13！',
            }
          },
          { type: 'animation', content: '凑十法分解动画：9+4，4拆成1和3，9+1=10，10+3=13', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'makeTen',
              title: '凑十法分解',
              makeTenConfig: {
                bigNum: 9,
                smallNum: 4,
                splitTo: 4,
                splitLeft: 1,
                splitRight: 3,
                tenResult: 10,
                finalResult: 13,
              },
              ttsNarration: '9加4，看到9想1，4拆成1和3，9加1等于10，10加3等于13！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u5l1q1',
            type: 'choice',
            question: '9+5=？',
            options: ['13', '14', '15', '16'],
            answer: '14',
            hint: '见9想1，5拆成1和4',
            explanation: '5拆成1和4，9+1=10，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l1q2',
            type: 'fill',
            question: '9+7=___',
            answer: '16',
            hint: '7拆成1和几？',
            explanation: '7拆成1和6，9+1=10，10+6=16。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l1q3',
            type: 'flashcard',
            question: '快速计算：9+8=？',
            answer: '17',
            hint: '见9想1，8拆成1和7',
            explanation: '8拆成1和7，9+1=10，10+7=17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l1q4',
            type: 'choice',
            question: '【期末真题】小红折了9颗星，小丽折的和小红同样多，她们一共折了多少颗星？',
            options: ['9', '18', '16', '10'],
            answer: '18',
            hint: '同样多就是9+9',
            explanation: '小丽也折了9颗，9+9=18颗。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l1q5',
            type: 'fill',
            question: '【期末真题】9+2=___',
            answer: '11',
            hint: '见9想1，2拆成1和1',
            explanation: '9+2=11，这是期末常考的凑十法计算题！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l1q6',
            type: 'fill',
            question: '【期末真题】11+5=___',
            answer: '16',
            hint: '十位1不变，个位1+5',
            explanation: '11+5=16，不进位加法，十位不变个位加！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l1q7',
            type: 'fill',
            question: '【期末真题】16-4=___',
            answer: '12',
            hint: '[11-20的认识]（数学-11-20各数的认识-第1课）',
            explanation: '16-4=12，不退位减法，十位不变个位减！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u5l2',
        title: '876加几',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用凑十法计算8、7、6加几的进位加法',
        successCriteria: '①能说出"见8想2、见7想3、见6想4" ②能正确计算876加几',
        iDo: '家长演示8+5：把5拆成2和3，8+2=10，10+3=13。【CFU检查理解】家长问“你能用凑十法计算8、7、6加几的进位加法吗？”',
        weDo: '【引导式】亲子一起练习8、7、6加几，总结"见几想几"的规律。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用凑十法计算8、7、6加几。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】记住凑十口诀：见8想2、见7想3、见6想4。\n共学四步：\n①对话出题：问"8+5怎么凑十？"\n②孩子应答："见8想2，把5拆成2和3，8+2=10，10+3=13"\n③答错引导：摆8个和5个硬币，让孩子拿2个给8凑10，剩3个，共13\n④快速检测：7+6=？、8+4=？、6+5=？',
        funElement: '歇后语：八仙过海——各显神通！小游戏：凑十口诀对对碰',
        gsapAnimations: [
          '[GSAP:translateX|凑十拆分箭头动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|凑十口诀标签弹出|0.4s|凑十完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|8+5凑十法拆分图|400x300|cartoon|png|8加几]',
          '[IMG:illustration|凑十口诀表6-9|300x250|cartoon|png|凑十口诀]'
        ],
        content: [
          { type: 'text', content: '8、7、6加几也能用凑十法！8差2到10，7差3到10，6差4到10，从另一个数里拿走凑十！', animationType: 'reveal' },
          { type: 'example', content: '8+5：从5里拿2给8，8+2=10，5还剩3，10+3=13', label: '凑一凑', animationType: 'bounce' },
          { type: 'formula', content: '凑十口诀：见9想1，见8想2，见7想3，见6想4，凑成10加剩数！', label: '凑十口诀', animationType: 'counter' },
          { type: 'tip', content: '凑十法的关键：看大数差几到10，就从小的里面拿几！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '8+5凑十法分解动画：5拆成2和3，8+2=10，10+3=13', animationType: 'makeTen',
            animationConfig: {
              sceneType: 'makeTen',
              title: '8加几凑十法',
              makeTenConfig: {
                bigNum: 8,
                smallNum: 5,
                splitTo: 5,
                splitLeft: 2,
                splitRight: 3,
                tenResult: 10,
                finalResult: 13,
              },
              ttsNarration: '8加5，看到8想2，5分成2和3，8加2等于10，10加3等于13！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u5l2q1',
            type: 'choice',
            question: '8+6=？',
            options: ['12', '13', '14', '15'],
            answer: '14',
            hint: '见8想2，6拆成2和4',
            explanation: '6拆成2和4，8+2=10，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l2q2',
            type: 'fill',
            question: '7+8=___',
            answer: '15',
            hint: '见7想3，8拆成3和几？',
            explanation: '8拆成3和5，7+3=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l2q3',
            type: 'flashcard',
            question: '快速计算：6+9=？',
            answer: '15',
            hint: '见6想4，9拆成4和5',
            explanation: '9拆成4和5，6+4=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l2q4',
            type: 'choice',
            question: '小红有8朵花，小丽给了她5朵，一共有几朵？',
            options: ['12朵', '13朵', '14朵', '15朵'],
            answer: '13朵',
            hint: '8+5=？用凑十法',
            explanation: '5拆成2和3，8+2=10，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l2q5',
            type: 'fill',
            question: '7+6=___',
            answer: '13',
            hint: '见7想3，6拆成3和3',
            explanation: '6拆成3和3，7+3=10，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l2q6',
            type: 'fill',
            question: '8+☆=15，☆-3=___',
            answer: '4',
            hint: '先算☆等于几',
            explanation: '8+7=15，所以☆=7，7-3=4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l2q7',
            type: 'fill',
            question: '9+5=___',
            answer: '14',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+5=14，见9想1，5拆成1和4，9+1=10，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u5l3',
        title: '综合练习',
        order: 3,
        teachingMethod: '游戏化学习',
        learningObjective: '我能用凑十法快速计算20以内进位加法',
        successCriteria: '①能正确计算混合进位加法 ②能说出凑十过程',
        iDo: '家长出几道混合进位加法题，示范快速凑十的思路。【CFU检查理解】家长问“你能用凑十法快速计算20以内进位加法吗？”',
        weDo: '【引导式】亲子一起做进位加法闯关，计时挑战看谁算得快。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成综合练习题，巩固进位加法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合练习凑十法，速度不重要，思路正确才重要。\n共学四步：\n①对话出题：问"9+6和8+7分别怎么凑十？"\n②孩子应答："9+6见9想1拆6剩5得15；8+7见8想2拆7剩5得15"\n③答错引导：每道题都用硬币摆一摆，让孩子说出拿几个凑十、剩几个\n④快速检测：9+8=？、7+5=？、8+6=？',
        funElement: '小游戏：进位加法大闯关——打败数字怪兽！笑话：10对9说——你永远差我一点',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|进位加法闯关地图|400x300|cartoon|png|闯关游戏]',
          '[IMG:illustration|数字怪兽卡通形象|300x250|cartoon|png|游戏元素]'
        ],
        content: [
          { type: 'text', content: '进位加法大闯关！用凑十法打败每一道题，看看你能闯几关！', animationType: 'reveal' },
          { type: 'example', content: '9+6：见9想1，6拆成1和5，9+1=10，10+5=15！闯关成功！', label: '闯关示范', animationType: 'bounce' },
          { type: 'formula', content: '凑十法总口诀：看大数，分小数，凑成十，加剩数！', label: '总口诀', animationType: 'typewriter' },
          { type: 'tip', content: '不管9加几、8加几还是7加几，凑十法都能用！关键是找到凑十的好朋友！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '闯关地图上关卡依次解锁的动画，答对后星星爆炸庆祝', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '进位加法闯关',
              sceneBuildConfig: {
                sceneName: '闯关地图',
                elements: [
                  { id: 'el-0', text: '9+2', emoji: '🏰', delay: 0, animation: 'bounceIn', ttsText: '第一关：9加2' },
                  { id: 'el-1', text: '8+4', emoji: '🏯', delay: 0.5, animation: 'bounceIn', ttsText: '第二关：8加4' },
                  { id: 'el-2', text: '7+5', emoji: '🏟️', delay: 1.0, animation: 'bounceIn', ttsText: '第三关：7加5' },
                  { id: 'el-3', text: '通关', emoji: '🏆', delay: 1.5, animation: 'scaleIn', ttsText: '恭喜通关！' },
                ],
              },
              ttsNarration: '进位加法大闯关，用凑十法来挑战！',
            }
          },
          { type: 'tip', content: '本课主要使用游戏化学习：游戏化学习（将学习融入游戏，提升兴趣和参与度）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u5l3q1',
            type: 'choice',
            question: '9+6=？',
            options: ['13', '14', '15', '16'],
            answer: '15',
            hint: '用凑十法：见9想1',
            explanation: '6拆成1和5，9+1=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l3q2',
            type: 'fill',
            question: '8+7=___',
            answer: '15',
            hint: '见8想2，7拆成2和5',
            explanation: '7拆成2和5，8+2=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l3q3',
            type: 'flashcard',
            question: '快速计算：7+5=？',
            answer: '12',
            hint: '见7想3，5拆成3和2',
            explanation: '5拆成3和2，7+3=10，10+2=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l3q4',
            type: 'choice',
            question: '一盒铅笔有8支，又买了6支，一共有几支？',
            options: ['12支', '13支', '14支', '15支'],
            answer: '14支',
            hint: '8+6=？',
            explanation: '6拆成2和4，8+2=10，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l3q5',
            type: 'fill',
            question: '6+8=___',
            answer: '14',
            hint: '见6想4，8拆成4和4',
            explanation: '8拆成4和4，6+4=10，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l3q6',
            type: 'fill',
            question: '9+3=12，12+5=___',
            answer: '17',
            hint: '先凑十再加',
            explanation: '9+3=12，12+5=17，连续两步计算。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l3q7',
            type: 'fill',
            question: '8+4=___',
            answer: '12',
            hint: '[8加几]（数学-20以内进位加法-第2课）',
            explanation: '8+4=12，见8想2，4拆成2和2，8+2=10，10+2=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u5l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合运用凑十法完成20以内进位加法测试',
        successCriteria: '①闯关正确率达80%以上 ②能说出"见几想几、拆几剩几"过程',
        iDo: '家长出题引导，示范9加几、876加几和凑十法的综合运用。【CFU检查理解】家长问“你能综合运用凑十法完成20以内进位加法测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的凑十思路。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用凑十法计算20以内进位加法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合检测进位加法，重点查凑十思路是否正确。\n共学四步：\n①对话出题：问"凑十法分几步？"\n②孩子应答："看大数想凑几，拆小数，凑十再加剩"\n③答错引导：错题用硬币重摆，让孩子完整说出凑十过程再算\n④快速检测：9+4=？、8+5=？、7+4=？',
        funElement: '小游戏：进位加法闯关大挑战！歇后语：九牛一毛——微不足道',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|进位加法闯关场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|凑十法综合检测图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用9加几、876加几的凑十法，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '9+6=15（见9想1，6拆1和5），8+7=15（见8想2，7拆2和5），7+5=12（见7想3，5拆3和2）', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '凑十法总口诀：看大数，分小数，凑成十，加剩数！见9想1，见8想2，见7想3，见6想4！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测20以内进位加法掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u5l4q1',
            type: 'choice',
            question: '9+4=？',
            options: ['12', '13', '14', '15'],
            answer: '13',
            hint: '见9想1，4拆成1和3',
            explanation: '4拆成1和3，9+1=10，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l4q2',
            type: 'fill',
            question: '8+6=___',
            answer: '14',
            hint: '见8想2，6拆成2和4',
            explanation: '6拆成2和4，8+2=10，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l4q3',
            type: 'choice',
            question: '7+8=？',
            options: ['13', '14', '15', '16'],
            answer: '15',
            hint: '见7想3，8拆成3和5',
            explanation: '8拆成3和5，7+3=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l4q4',
            type: 'fill',
            question: '6+5=___',
            answer: '11',
            hint: '见6想4，5拆成4和1',
            explanation: '5拆成4和1，6+4=10，10+1=11。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l4q5',
            type: 'fill',
            question: '9+7=___',
            answer: '16',
            hint: '见9想1，7拆成1和6',
            explanation: '7拆成1和6，9+1=10，10+6=16。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l4q6',
            type: 'choice',
            question: '小红有8朵花，小丽给了她7朵，一共有几朵？',
            options: ['14朵', '15朵', '16朵', '17朵'],
            answer: '15朵',
            hint: '8+7=？用凑十法',
            explanation: '7拆成2和5，8+2=10，10+5=15朵。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l4q7',
            type: 'fill',
            question: '5+5=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '5+5=10，5和5是凑十好朋友。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u5l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能用凑十法解决生活中的进位加法问题',
        successCriteria: '①能从生活场景列进位加法算式 ②能用凑十法计算',
        iDo: '家长用生活场景出题：一班有9人参加比赛，二班有8人，一共有几人？【CFU检查理解】家长问“你能用凑十法解决生活中的进位加法问题吗？”',
        weDo: '【引导式】亲子一起编20以内进位加法生活应用题，互相解答。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决生活中的20以内进位加法问题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】用凑十法解决生活问题，鼓励说出凑十过程。\n共学四步：\n①对话出题：一班9人二班8人，问"一共几人？怎么凑十？"\n②孩子应答："9+8，见9想1拆8剩7，10+7=17"\n③答错引导：用硬币摆9和8，拿1个给9凑10剩7个共17\n④快速检测：8颗糖加6颗、7本书加5本、9个苹果加4个',
        funElement: '小游戏：生活凑十小达人！歇后语：十有八九——差不多',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|生活进位加法场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|凑十法生活应用图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '进位加法在生活中经常用到！数人数、算物品总数、买东西算钱……凑十法帮你又快又准！', animationType: 'reveal' },
          { type: 'example', content: '一班9人，二班7人，9+7=16：见9想1，7拆成1和6，9+1=10，10+6=16人！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '生活中遇到大数加法，先用凑十法算，再验证答案是否合理！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u5l5q1',
            type: 'choice',
            question: '操场上有9个男生和6个女生在跑步，一共有几个小朋友？',
            options: ['14个', '15个', '16个', '17个'],
            answer: '15个',
            hint: '9+6=？用凑十法',
            explanation: '6拆成1和5，9+1=10，10+5=15个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l5q2',
            type: 'fill',
            question: '小红有8颗星，又得了7颗，现在有___颗星',
            answer: '15',
            hint: '8+7=？用凑十法',
            explanation: '7拆成2和5，8+2=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l5q3',
            type: 'choice',
            question: '水果店上午卖了7箱苹果，下午卖了8箱，一天一共卖了几箱？',
            options: ['14箱', '15箱', '16箱', '17箱'],
            answer: '15箱',
            hint: '7+8=？用凑十法',
            explanation: '8拆成3和5，7+3=10，10+5=15箱。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l5q4',
            type: 'fill',
            question: '小明有6本故事书，又买了9本，现在有___本',
            answer: '15',
            hint: '6+9=？用凑十法',
            explanation: '9拆成4和5，6+4=10，10+5=15本。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l5q5',
            type: 'fill',
            question: '【期末真题】9+5=___',
            answer: '14',
            hint: '见9想1，5拆成1和4',
            explanation: '5拆成1和4，9+1=10，10+4=14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l5q6',
            type: 'choice',
            question: '【期末真题】8+8=？',
            options: ['14', '15', '16', '17'],
            answer: '16',
            hint: '见8想2，8拆成2和6',
            explanation: '8拆成2和6，8+2=10，10+6=16。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u5l5q7',
            type: 'fill',
            question: '7+3=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '7+3=10，7和3是凑十好朋友。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u6',
    title: '20以内退位减法',
    subtitle: '学会退位减法，减法也不怕',
    order: 6,
    lessons: [
      {
        id: 'm1u6l1',
        title: '十几减9',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用破十法或想加算减计算十几减9',
        successCriteria: '①能用破十法算十几减9 ②能想加算减（9+4=13所以13-9=4）',
        iDo: '家长用小棒演示13-9：1捆拆开，10-9=1，1+3=4。【CFU检查理解】家长问“你能用破十法或想加算减计算十几减9吗？”',
        weDo: '【引导式】亲子一起用小棒做十几减9，练习破十法和想加算减。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立计算十几减9的退位减法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】想加算减更快捷：因为9+4=13，所以13-9=4。\n共学四步：\n①对话出题：问"13-9怎么算？"\n②孩子应答："想9+4=13，所以13-9=4"或"破十法10-9=1，1+3=4"\n③答错引导：摆1捆3根小棒，拆开1捆10-9=1，1+3=4；或问"9加几等于13？"\n④快速检测：12-9=？、15-9=？、17-9=？',
        funElement: '笑话：13减9说——我借你10，还剩4！小游戏：破十法小魔术',
        gsapAnimations: [
          '[GSAP:translateX|1捆小棒拆开动画|0.6s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|破十结果弹出|0.4s|计算完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|13-9破十法操作图|400x300|cartoon|png|破十法]',
          '[IMG:illustration|想加算减对照图|300x250|cartoon|png|加减关系]'
        ],
        content: [
          { type: 'text', content: '十几减9有两种好方法：破十法和想加算减法！破十法是拆开十位来减，想加算减是用加法来帮忙！', animationType: 'reveal' },
          { type: 'example', content: '13-9：破十法→10-9=1，1+3=4；想加算减→9+4=13，所以13-9=4', label: '算一算', animationType: 'bounce' },
          { type: 'formula', content: '破十法：不够减就拆十，10减几再加个位！想加算减：想9加几等于十几，几就是答案！', label: '减法口诀', animationType: 'typewriter' },
          { type: 'tip', content: '想加算减最快捷！9+4=13，所以13-9=4，加法和减法是一对好朋友！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '13-9破十法动画：1捆小棒拆开，9根拿走，剩1根加3根=4根', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '破十法',
              cpaConfig: {
                concrete: { text: '13根小棒拿走9根', emoji: '🪵' },
                pictorial: { text: '拆开1捆拿走9根剩1根', emoji: '📊' },
                abstract: { text: '13-9=4', emoji: '🔢' },
              },
              ttsNarration: '13减9，个位3不够减，从十位借1当10，10减9等于1，1加3等于4！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u6l1q1',
            type: 'choice',
            question: '15-9=？',
            options: ['4', '5', '6', '7'],
            answer: '6',
            hint: '想：9加几等于15？',
            explanation: '因为9+6=15，所以15-9=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l1q2',
            type: 'fill',
            question: '12-9=___',
            answer: '3',
            hint: '9+3=12',
            explanation: '因为9+3=12，所以12-9=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l1q3',
            type: 'flashcard',
            question: '快速计算：17-9=？',
            answer: '8',
            hint: '9+8=17',
            explanation: '因为9+8=17，所以17-9=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l1q4',
            type: 'choice',
            question: '小红有13颗糖，吃了9颗，还剩几颗？',
            options: ['3颗', '4颗', '5颗', '6颗'],
            answer: '4颗',
            hint: '13-9=？',
            explanation: '因为9+4=13，所以13-9=4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l1q5',
            type: 'fill',
            question: '16-9=___',
            answer: '7',
            hint: '9+7=16',
            explanation: '因为9+7=16，所以16-9=7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l1q6',
            type: 'fill',
            question: '14-9=5，5+8=___',
            answer: '13',
            hint: '先算减法，再加',
            explanation: '14-9=5，5+8=13，减法后再做加法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l1q7',
            type: 'fill',
            question: '9+6=___',
            answer: '15',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+6=15，见9想1，6拆成1和5，9+1=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u6l2',
        title: '十几减876',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用破十法计算十几减8、7、6',
        successCriteria: '①能说出"减8想2、减7想3、减6想4" ②能正确计算十几减876',
        iDo: '家长演示14-8：破十法10-8=2，2+4=6。【CFU检查理解】家长问“你能用破十法计算十几减8、7、6吗？”',
        weDo: '【引导式】亲子一起练习十几减8、7、6，总结规律。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立计算十几减8、7、6的退位减法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】破十法关键记差几：减8想2、减7想3、减6想4。\n共学四步：\n①对话出题：问"14-8怎么算？"\n②孩子应答："破十法10-8=2，2+4=6"或"想8+6=14所以14-8=6"\n③答错引导：摆1捆4根，拆开10-8=2，2+4=6；或问"8加几等于14？"\n④快速检测：13-7=？、15-8=？、14-6=？',
        funElement: '歇后语：八九不离十——差不多！小游戏：退位减法消消乐',
        gsapAnimations: [
          '[GSAP:translateX|破十法拆分动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|退位减法口诀弹出|0.4s|计算完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|14-8破十法图|400x300|cartoon|png|减8破十]',
          '[IMG:illustration|退位减法口诀表|300x250|cartoon|png|减法口诀]'
        ],
        content: [
          { type: 'text', content: '十几减8、7、6也能用破十法和想加算减！减8想2，减7想3，减6想4，破十后加上个位就是答案！', animationType: 'reveal' },
          { type: 'example', content: '14-8：破十法→10-8=2，2+4=6；想加算减→8+6=14，所以14-8=6', label: '算一算', animationType: 'bounce' },
          { type: 'formula', content: '退位减法口诀：减9想1，减8想2，减7想3，减6想4，破十加个位！', label: '减法口诀', animationType: 'counter' },
          { type: 'tip', content: '减几就想它和10差几！减8差2，减7差3，减6差4，差几就加几！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '14-8破十法动画：1捆拆开拿走8根，剩2根加4根=6根', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '14减8破十法',
              cpaConfig: {
                concrete: { text: '14根小棒拿走8根', emoji: '🪵' },
                pictorial: { text: '拆开1捆拿走8根剩2根', emoji: '📊' },
                abstract: { text: '14-8=6', emoji: '🔢' },
              },
              ttsNarration: '14减8，个位4不够减，从十位借1当10，10减8等于2，2加4等于6！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u6l2q1',
            type: 'choice',
            question: '13-7=？',
            options: ['4', '5', '6', '7'],
            answer: '6',
            hint: '破十法：10-7=3，3+3=？',
            explanation: '破十法：10-7=3，3+3=6，所以13-7=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l2q2',
            type: 'fill',
            question: '15-8=___',
            answer: '7',
            hint: '8+7=15',
            explanation: '因为8+7=15，所以15-8=7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l2q3',
            type: 'flashcard',
            question: '快速计算：11-6=？',
            answer: '5',
            hint: '6+5=11',
            explanation: '因为6+5=11，所以11-6=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l2q4',
            type: 'choice',
            question: '树上有15个苹果，摘了8个，还剩几个？',
            options: ['6个', '7个', '8个', '9个'],
            answer: '7个',
            hint: '15-8=？',
            explanation: '因为8+7=15，所以15-8=7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l2q5',
            type: 'fill',
            question: '14-6=___',
            answer: '8',
            hint: '6+8=14',
            explanation: '因为6+8=14，所以14-6=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l2q6',
            type: 'fill',
            question: '13-7=6，6+9=___',
            answer: '15',
            hint: '先算减法，再用凑十法加',
            explanation: '13-7=6，6+9=15，见9想1，6拆成1和5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l2q7',
            type: 'fill',
            question: '18-9=___',
            answer: '9',
            hint: '[十几减9]（数学-20以内退位减法-第1课）',
            explanation: '因为9+9=18，所以18-9=9。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u6l3',
        title: '综合应用',
        order: 3,
        teachingMethod: '情境教学法',
        learningObjective: '我能用退位减法解决生活问题',
        successCriteria: '①能从生活场景列减法算式 ②能正确计算退位减法',
        iDo: '家长出生活应用题：有16颗糖，吃了9颗，还剩几颗？【CFU检查理解】家长问“你能用退位减法解决生活问题吗？”',
        weDo: '【引导式】亲子一起编退位减法应用题，互相解答。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决退位减法应用题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】把减法和日常生活联系，理解减法实际意义。\n共学四步：\n①对话出题：16颗糖吃了9颗，问"还剩几颗？怎么算？"\n②孩子应答："16-9=7，想9+7=16"或"破十法10-9=1，1+6=7"\n③答错引导：用硬币摆16个拿走9个，数剩下7个\n④快速检测：15个气球飞8个剩几、14本书送7本剩几、13-6=？',
        funElement: '小游戏：糖果店小老板——算算找零！笑话：减号说我最公平，只减不多',
        gsapAnimations: [
          '[GSAP:scaleIn|应用题场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|糖果店购物场景|400x300|cartoon|png|应用题]',
          '[IMG:illustration|找零计算示意图|300x250|cartoon|png|生活应用]'
        ],
        content: [
          { type: 'text', content: '减法在生活中到处都是！买东西找零、吃东西剩下多少、还差几个……都是减法问题！', animationType: 'reveal' },
          { type: 'example', content: '有16颗糖，吃了9颗，还剩几颗？16-9=7，还剩7颗糖！', label: '生活应用', animationType: 'bounce' },
          { type: 'formula', content: '应用题口诀：找总数和部分，用减法求剩余，总数减部分等于剩余！', label: '解题口诀', animationType: 'typewriter' },
          { type: 'tip', content: '做应用题要先读懂题目，找出"一共有多少"和"用掉多少"，用减法算"还剩多少"！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '糖果店场景动画：16颗糖中9颗被拿走，剩余7颗闪烁高亮', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'separate',
              title: '退位减法练习',
              mergeConfig: { leftCount: 16, leftEmoji: '🍬', rightCount: 9, rightEmoji: '🍬', operator: '-', resultCount: 7 },
              ttsNarration: '16颗糖拿走9颗，还剩7颗！',
            }
          },
          { type: 'tip', content: '本课主要使用情境化练习，生活应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u6l3q1',
            type: 'choice',
            question: '小红有14朵花，送给小明8朵，还剩几朵？',
            options: ['5朵', '6朵', '7朵', '8朵'],
            answer: '6朵',
            hint: '14-8=？',
            explanation: '14-8=6，所以还剩6朵花。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l3q2',
            type: 'fill',
            question: '树上有17只鸟，飞走了9只，还剩___只',
            answer: '8',
            hint: '17-9=？',
            explanation: '17-9=8，所以还剩8只鸟。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l3q3',
            type: 'flashcard',
            question: '快速计算：16-7=？',
            answer: '9',
            hint: '7+9=16',
            explanation: '因为7+9=16，所以16-7=9。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l3q4',
            type: 'choice',
            question: '停车场有12辆车，开走了7辆，还剩几辆？',
            options: ['4辆', '5辆', '6辆', '7辆'],
            answer: '5辆',
            hint: '12-7=？',
            explanation: '因为7+5=12，所以12-7=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l3q5',
            type: 'fill',
            question: '11-8=___',
            answer: '3',
            hint: '8+3=11',
            explanation: '因为8+3=11，所以11-8=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l3q6',
            type: 'fill',
            question: '15-8=7，7+6=___',
            answer: '13',
            hint: '先减后加',
            explanation: '15-8=7，7+6=13，见7想3，6拆成3和3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l3q7',
            type: 'fill',
            question: '16-8=___',
            answer: '8',
            hint: '[十几减8]（数学-20以内退位减法-第2课）',
            explanation: '因为8+8=16，所以16-8=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u6l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合运用破十法和想加算减完成退位减法测试',
        successCriteria: '①闯关正确率达80%以上 ②能熟练想加算减',
        iDo: '家长出题引导，示范十几减9、十几减876和破十法的综合运用。【CFU检查理解】家长问“你能综合运用破十法和想加算减完成退位减法测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的破十法或想加算减思路。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用破十法和想加算减计算退位减法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合检测退位减法，重点查想加算减是否熟练。\n共学四步：\n①对话出题：问"想加算减是什么意思？"\n②孩子应答："想加法算减法，如9+5=14所以14-9=5"\n③答错引导：加法和减法是好朋友，错题先想对应的加法再算减法\n④快速检测：13-9=？、15-8=？、12-7=？、16-9=？',
        funElement: '小游戏：退位减法闯关大挑战！歇后语：九九归一——最终回到原点',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|退位减法闯关场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|破十法综合检测图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用十几减9、十几减876的破十法和想加算减，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '15-9=6（9+6=15），14-8=6（8+6=14），13-7=6（7+6=13）——想加算减最快捷！', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '退位减法口诀：减9想1，减8想2，减7想3，减6想4，破十加个位！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测20以内退位减法掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u6l4q1',
            type: 'choice',
            question: '14-9=？',
            options: ['4', '5', '6', '7'],
            answer: '5',
            hint: '9+5=14',
            explanation: '因为9+5=14，所以14-9=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l4q2',
            type: 'fill',
            question: '16-8=___',
            answer: '8',
            hint: '8+8=16',
            explanation: '因为8+8=16，所以16-8=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l4q3',
            type: 'choice',
            question: '12-7=？',
            options: ['4', '5', '6', '7'],
            answer: '5',
            hint: '7+5=12',
            explanation: '因为7+5=12，所以12-7=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l4q4',
            type: 'fill',
            question: '11-6=___',
            answer: '5',
            hint: '6+5=11',
            explanation: '因为6+5=11，所以11-6=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l4q5',
            type: 'fill',
            question: '17-9=___',
            answer: '8',
            hint: '9+8=17',
            explanation: '因为9+8=17，所以17-9=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l4q6',
            type: 'choice',
            question: '小红有15颗糖，吃了7颗，还剩几颗？',
            options: ['7颗', '8颗', '9颗', '6颗'],
            answer: '8颗',
            hint: '15-7=？',
            explanation: '因为7+8=15，所以15-7=8颗。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l4q7',
            type: 'fill',
            question: '9+6=___',
            answer: '15',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+6=15，见9想1，6拆成1和5，9+1=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u6l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能用退位减法解决生活中的减法问题',
        successCriteria: '①能从生活找减法问题 ②能正确计算并说思路',
        iDo: '家长用生活场景出题：有15个气球，飞走了8个，还剩几个？【CFU检查理解】家长问“你能用退位减法解决生活中的减法问题吗？”',
        weDo: '【引导式】亲子一起编20以内退位减法生活应用题，互相解答。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决生活中的20以内退位减法问题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】在生活中找减法问题，如吃东西剩下、用掉还剩。\n共学四步：\n①对话出题：15个气球飞走8个，问"剩几个？怎么算？"\n②孩子应答："15-8=7，想8+7=15"或"破十法10-8=2，2+5=7"\n③答错引导：用实物演示拿走，数剩下的，再想加法验证\n④快速检测：14颗糖吃6颗剩几、12页写7页剩几、13-9=？',
        funElement: '小游戏：生活减法小达人！歇后语：一减再减——越来越少',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|生活退位减法场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|破十法生活应用图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '退位减法在生活中到处都是！吃东西剩下多少、用掉多少、还差多少……都是减法问题！', animationType: 'reveal' },
          { type: 'example', content: '有15个气球，飞走了8个，15-8=7：因为8+7=15，所以还剩7个气球！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '遇到减法问题，先想加法帮忙！几加减数等于被减数，答案就是几！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u6l5q1',
            type: 'choice',
            question: '小红有13颗糖，送给小明7颗，还剩几颗？',
            options: ['5颗', '6颗', '7颗', '4颗'],
            answer: '6颗',
            hint: '13-7=？',
            explanation: '因为7+6=13，所以13-7=6颗。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l5q2',
            type: 'fill',
            question: '操场上有16个小朋友，回家了9个，还剩___个',
            answer: '7',
            hint: '16-9=？',
            explanation: '因为9+7=16，所以16-9=7个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l5q3',
            type: 'choice',
            question: '树上有14只鸟，飞走了6只，还剩几只？',
            options: ['6只', '7只', '8只', '9只'],
            answer: '8只',
            hint: '14-6=？',
            explanation: '因为6+8=14，所以14-6=8只。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l5q4',
            type: 'fill',
            question: '小明有12本故事书，借给同学8本，还剩___本',
            answer: '4',
            hint: '12-8=？',
            explanation: '因为8+4=12，所以12-8=4本。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l5q5',
            type: 'fill',
            question: '【期末真题】15-9=___',
            answer: '6',
            hint: '9+6=15',
            explanation: '因为9+6=15，所以15-9=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l5q6',
            type: 'choice',
            question: '【期末真题】13-7=？',
            options: ['5', '6', '7', '8'],
            answer: '6',
            hint: '7+6=13',
            explanation: '因为7+6=13，所以13-7=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u6l5q7',
            type: 'fill',
            question: '8+7=___',
            answer: '15',
            hint: '[876加几]（数学-20以内进位加法-第2课）',
            explanation: '8+7=15，见8想2，7拆成2和5，8+2=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u7',
    title: '认识图形',
    subtitle: '走进奇妙的图形世界',
    order: 7,
    lessons: [
      {
        id: 'm1u7l1',
        title: '立体图形',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能识别长方体、正方体、圆柱、球四种立体图形',
        successCriteria: '①能说出四种立体图形名称 ②能找出生活中的立体图形',
        iDo: '家长拿出球、积木、易拉罐等实物，示范识别长方体、正方体、圆柱、球。【CFU检查理解】家长问“你能识别长方体、正方体、圆柱、球四种立体图形吗？”',
        weDo: '【引导式】亲子一起在家找立体图形的物品，分类摆放。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立识别图片中的立体图形并说出名称。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】让孩子用手摸实物感受特征：长方体、正方体、圆柱、球。\n共学四步：\n①对话出题：拿一个魔方问"这是什么形状？摸摸它有什么特点？"\n②孩子应答："正方体，每个面一样大，方方的"\n③答错引导：家长准备球、积木、易拉罐，让孩子摸：球能滚没平面、圆柱能滚有两个圆面、正方体方方正正\n④快速检测：找家里的球、找长方体盒子、摸圆柱易拉罐',
        funElement: '笑话：球说我最圆，正方体说我最方！小游戏：家里寻宝找图形',
        gsapAnimations: [
          '[GSAP:rotateY|立体图形3D旋转展示|1.0s|页面加载|power2.inOut]',
          '[GSAP:scaleIn|图形名称标签弹出|0.4s|旋转完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|四种立体图形卡通形象|400x300|cartoon|png|立体图形]',
          '[IMG:illustration|生活中的立体图形物品|300x250|cartoon|png|实物对应]'
        ],
        content: [
          { type: 'text', content: '立体图形住在我们身边！方方的叫长方体和正方体，圆圆能滚的叫球，上下圆中间弯的叫圆柱！', animationType: 'reveal' },
          { type: 'example', content: '📦长方体——文具盒、冰箱；🎲正方体——骰子、魔方；🥫圆柱——易拉罐、铅笔；⚽球——皮球、地球仪', label: '找一找', animationType: 'bounce' },
          { type: 'formula', content: '立体图形特征：长方体6个面对面一样，正方体6个面全一样，圆柱上下圆侧面弯，球到处都是弯弯的！', label: '特征歌', animationType: 'typewriter' },
          { type: 'tip', content: '用手摸一摸！方的有平平的面，圆的弯弯的，圆柱上下是平的中间是弯的！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '四种立体图形依次出现：正方体🧊、长方体📦、圆柱体🥫、球体⚽，配生活实物联想', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '认识立体图形',
              sceneBuildConfig: {
                sceneName: '立体图形',
                elements: [
                  { id: 'el-0', text: '正方体', emoji: '🧊', delay: 0, animation: 'bounceIn', ttsText: '正方体，像魔方' },
                  { id: 'el-1', text: '长方体', emoji: '📦', delay: 0.5, animation: 'bounceIn', ttsText: '长方体，像纸盒' },
                  { id: 'el-2', text: '圆柱体', emoji: '🥫', delay: 1.0, animation: 'bounceIn', ttsText: '圆柱体，像罐子' },
                  { id: 'el-3', text: '球体', emoji: '⚽', delay: 1.5, animation: 'bounceIn', ttsText: '球体，像足球' },
                ],
              },
              ttsNarration: '四种立体图形：正方体、长方体、圆柱体和球体！',
            }
          },
          { type: 'animation', content: '拖动鼠标旋转正方体，看看它的6个面！', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '拖动旋转正方体',
              shapeDrawConfig: { shape: '正方体3D', labels: [] },
              ttsNarration: '拖动鼠标旋转正方体，看看它的6个面！每个面都是一样大的正方形！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u7l1q1',
            type: 'choice',
            question: '易拉罐是什么形状？',
            options: ['长方体', '正方体', '圆柱', '球'],
            answer: '圆柱',
            hint: '它上下是圆的，侧面是弯的',
            explanation: '易拉罐上下是圆形，侧面是弯曲的面，所以是圆柱。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l1q2',
            type: 'fill',
            question: '骰子是___体',
            answer: '正方体',
            hint: '六个面都一样大的正方形',
            explanation: '骰子六个面都是一样大的正方形，所以是正方体。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l1q3',
            type: 'flashcard',
            question: '猜猜这是什么图形？圆圆的，到处都是弯的！',
            answer: '球',
            hint: '圆圆的，到处都是弯的',
            explanation: '这个图形圆圆的，没有平面，是球。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l1q4',
            type: 'choice',
            question: '下面哪个物品是长方体？',
            options: ['足球', '文具盒', '易拉罐', '魔方'],
            answer: '文具盒',
            hint: '找方方的、面不一样大的',
            explanation: '文具盒是长方体，6个面，对面一样大。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l1q5',
            type: 'fill',
            question: '正方体有___个面',
            answer: '6',
            hint: '数一数正方体有几个面',
            explanation: '正方体有6个面，每个面都是一样大的正方形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l1q6',
            type: 'fill',
            question: '1个正方体有6个面，2个正方体一共有___个面',
            answer: '12',
            hint: '用加法算',
            explanation: '6+6=12，2个正方体一共有12个面。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l1q7',
            type: 'fill',
            question: '15-7=___',
            answer: '8',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '因为7+8=15，所以15-7=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u7l2',
        title: '平面图形',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能识别长方形、正方形、圆、三角形四种平面图形',
        successCriteria: '①能说出四种平面图形名称 ②能区分立体和平面图形',
        iDo: '家长把立体图形的面按在纸上描边，展示长方形、正方形、圆、三角形。【CFU检查理解】家长问“你能识别长方形、正方形、圆、三角形四种平面图形吗？”',
        weDo: '【引导式】亲子一起用立体图形在纸上拓印平面图形，涂色装饰。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立识别平面图形并说出名称和特征。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】平面图形是立体图形的面，用描边拓印建立联系。\n共学四步：\n①对话出题：拿积木问"把这个面按在纸上描下来是什么图形？"\n②孩子应答："正方形，方方的四个角"\n③答错引导：家长把积木面按在纸上描边，展示描出来的是平面图形，再让孩子摸立体、看平面对比\n④快速检测：画一个圆、画一个三角形、找出正方形',
        funElement: '笑话：三角形说我最稳定，圆说我没有角！小游戏：图形拓印画',
        gsapAnimations: [
          '[GSAP:drawSVG|图形描边动画|0.8s|页面加载|power2.out]',
          '[GSAP:fill|图形填色动画|0.5s|描边完成|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|四种平面图形描边图|400x300|cartoon|png|平面图形]',
          '[IMG:illustration|立体图形拓印平面图|300x250|cartoon|png|拓印操作]'
        ],
        content: [
          { type: 'text', content: '平面图形是立体图形的"脸"！把立体图形按在纸上描一圈，就画出了平面图形。', animationType: 'reveal' },
          { type: 'example', content: '长方体的面→长方形；正方体的面→正方形；圆柱的底面→圆；三棱柱的面→三角形', label: '描一描', animationType: 'bounce' },
          { type: 'formula', content: '平面图形特征：长方形对边相等4个直角，正方形4边相等4个直角，三角形3条边3个角，圆没有角弯弯的！', label: '特征歌', animationType: 'typewriter' },
          { type: 'tip', content: '平面图形是扁扁的，只有一个面；立体图形是胖胖的，有好多面！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '立体图形按在纸上描边画出平面图形的动画，描完后填色', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '立体到平面',
              shapeDrawConfig: { shape: '长方形' },
              ttsNarration: '把立体图形的面按在纸上描一圈，就画出了平面图形！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u7l2q1',
            type: 'choice',
            question: '三角形有几条边？',
            options: ['2条', '3条', '4条', '5条'],
            answer: '3条',
            hint: '三角形的"三"就是答案',
            explanation: '三角形有3条边和3个角，"三"角形就是3个角的意思。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l2q2',
            type: 'fill',
            question: '长方形有___条边',
            answer: '4',
            hint: '数一数长方形的边',
            explanation: '长方形有4条边，对边相等，有4个直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l2q3',
            type: 'flashcard',
            question: '猜猜这是什么图形？没有角，弯弯的！',
            answer: '圆',
            hint: '没有角，弯弯的',
            explanation: '这个图形没有角，边是弯弯的曲线，是圆。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l2q4',
            type: 'choice',
            question: '下面哪个图形没有角？',
            options: ['三角形', '正方形', '长方形', '圆'],
            answer: '圆',
            hint: '哪个图形的边是弯弯的？',
            explanation: '圆没有角，边是弯弯的曲线。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l2q5',
            type: 'fill',
            question: '正方形有4条边，三角形有___条边',
            answer: '3',
            hint: '三角形的名字里有提示',
            explanation: '三角形有3条边，"三"角形就是3个角3条边。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l2q6',
            type: 'fill',
            question: '1个三角形有3条边，3个三角形一共有___条边',
            answer: '9',
            hint: '用加法算',
            explanation: '3+3+3=9，3个三角形一共有9条边。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l2q7',
            type: 'choice',
            question: '正方体的面是什么形状？',
            options: ['三角形', '长方形', '正方形', '圆'],
            answer: '正方形',
            hint: '[立体图形]（数学-认识图形-第1课）',
            explanation: '正方体的6个面都是一样大的正方形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u7l3',
        title: '图形拼搭',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用基本图形拼搭出图案并说出用了哪些图形',
        successCriteria: '①能用图形拼出图案 ②能说出拼搭用了哪些图形及数量',
        iDo: '家长用三角形和正方形拼成一座房子，示范图形组合。【CFU检查理解】家长问“你能用基本图形拼搭出图案并说出用了哪些图形吗？”',
        weDo: '【引导式】亲子一起用各种图形拼出有趣的图案，如小船、火箭。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用图形拼搭出自己喜欢的图案，说出用了哪些图形。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】用三角形和正方形等拼图案，发挥创意，数用了几个图形。\n共学四步：\n①对话出题：问"用三角形和正方形能拼出什么？拼座房子试试"\n②孩子应答：用正方形做房身、三角形做屋顶\n③答错引导：家长先示范拼一个房子，让孩子照着拼，再数用了几个什么图形\n④快速检测：拼小船用了几个三角形、拼火箭用了什么图形、数拼图中的正方形',
        funElement: '小游戏：七巧板拼图大挑战！笑话：圆说我能滚，方说我很稳',
        gsapAnimations: [
          '[GSAP:translateX|图形滑入拼合动画|0.6s|点击触发|power2.inOut]',
          '[GSAP:rotateZ|图形旋转到位|0.4s|拼合过程|power2.out]'
        ],
        images: [
          '[IMG:illustration|图形拼搭成房子小船|400x300|cartoon|png|图形拼搭]',
          '[IMG:illustration|七巧板拼图示例|300x250|cartoon|png|七巧板]'
        ],
        content: [
          { type: 'text', content: '图形可以拼出好多有趣的东西！三角形和正方形拼成房子，圆形和三角形拼成小丑……发挥你的想象力！', animationType: 'reveal' },
          { type: 'example', content: '🏠房子=△三角形（屋顶）+□正方形（墙壁）；🚀火箭=△三角形+□正方形+○圆形', label: '拼一拼', animationType: 'bounce' },
          { type: 'formula', content: '拼搭口诀：大图形变小图形，小图形拼大图案，数一数用了几个，说一说都是什么！', label: '拼搭口诀', animationType: 'typewriter' },
          { type: 'tip', content: '拼搭时先想好要拼什么，再找需要的图形，就像搭积木一样！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '三角形和正方形滑入拼合成房子的动画，图形旋转到位', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '图形拼合',
              sceneBuildConfig: {
                sceneName: '图形拼合',
                elements: [
                  { id: 'el-0', text: '正方形', emoji: '🟥', delay: 0, animation: 'slideIn', ttsText: '一个正方形做墙壁' },
                  { id: 'el-1', text: '三角形', emoji: '🔺', delay: 0.6, animation: 'slideIn', ttsText: '一个三角形做屋顶' },
                  { id: 'el-2', text: '房子', emoji: '🏠', delay: 1.2, animation: 'scaleIn', ttsText: '拼成了一座小房子！' },
                ],
              },
              ttsNarration: '正方形和三角形拼在一起，变成了一座小房子！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u7l3q1',
            type: 'choice',
            question: '用2个完全一样的等腰直角三角形沿斜边拼合，可以拼成什么图形？',
            options: ['圆形', '平行四边形', '正方形', '梯形'],
            answer: '正方形',
            hint: '两个一样的直角三角形',
            explanation: '两个完全一样的等腰直角三角形可以拼成一个正方形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l3q2',
            type: 'fill',
            question: '拼一座房子用了1个三角形和1个正方形，一共用了___个图形',
            answer: '2',
            hint: '数一数一共用了几种图形',
            explanation: '1个三角形+1个正方形=2个图形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l3q3',
            type: 'flashcard',
            question: '🔺🔺🔺 拼成了一个图形，用了几个三角形？',
            answer: '3',
            hint: '仔细数一数三角形的数量',
            explanation: '仔细观察拼图，数出三角形的个数是3个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l3q4',
            type: 'fill',
            question: '最少用___个一样的小正方形可以拼成一个大正方形',
            answer: '4',
            hint: '2x2的正方形',
            explanation: '4个小正方形拼成2x2的大正方形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l3q5',
            type: 'fill',
            question: '拼一个房子用了1个三角形和1个正方形，拼2个房子用___个图形',
            answer: '4',
            hint: '1个房子2个图形，2个房子呢？',
            explanation: '1个房子用2个图形，2个房子用2+2=4个图形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l3q6',
            type: 'fill',
            question: '1个正方形有4条边，2个正方形拼在一起（共用1条边），一共有___条边',
            answer: '6',
            hint: '4+4-2=？',
            explanation: '2个正方形8条边，共用1条边去掉2条，8-2=6条边。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l3q7',
            type: 'fill',
            question: '长方形有___条边',
            answer: '4',
            hint: '[平面图形]（数学-认识图形-第2课）',
            explanation: '长方形有4条边，对边相等。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u7l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合识别立体和平面图形完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能说出各图形特征',
        iDo: '家长出题引导，示范立体图形、平面图形和图形拼搭的综合运用。【CFU检查理解】家长问“你能综合识别立体和平面图形完成闯关测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的图形特征和解题方法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用图形认识和拼搭知识。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合检测认识图形，重点查立体平面区分和特征。\n共学四步：\n①对话出题：问"立体图形有哪些？平面图形有哪些？"\n②孩子应答："立体的有长方体正方体圆柱球，平面的有长方形正方形圆三角形"\n③答错引导：拿实物让孩子重新摸特征，立体的能站住有厚度，平面的是扁的\n④快速检测：认圆柱、认三角形、区分球和圆',
        funElement: '小游戏：图形闯关大挑战！歇后语：方方正正——规规矩矩',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|图形闯关测试场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|立体平面图形综合图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用立体图形、平面图形和图形拼搭的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '正方体有6个面都是正方形，圆柱上下是圆形，2个三角形能拼成1个正方形——综合运用！', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '立体图形是胖胖的有好多面，平面图形是扁扁的只有一个面，别搞混了！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测认识图形掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u7l4q1',
            type: 'choice',
            question: '下面哪个是立体图形？',
            options: ['三角形', '正方形', '正方体', '圆'],
            answer: '正方体',
            hint: '立体图形是胖胖的',
            explanation: '正方体是立体图形，有6个面；三角形、正方形、圆都是平面图形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l4q2',
            type: 'fill',
            question: '正方体有___个面，每个面都是正方形',
            answer: '6',
            hint: '数一数正方体有几个面',
            explanation: '正方体有6个面，每个面都是一样大的正方形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l4q3',
            type: 'choice',
            question: '圆柱的上下两个面是什么形状？',
            options: ['正方形', '长方形', '三角形', '圆'],
            answer: '圆',
            hint: '圆柱上下是平平的圆面',
            explanation: '圆柱的上下两个底面是圆形，侧面是弯曲的。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l4q4',
            type: 'fill',
            question: '三角形有___条边和___个角（用顿号分隔）',
            answer: '3、3',
            hint: '"三"角形就是3个角',
            explanation: '三角形有3条边和3个角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l4q5',
            type: 'fill',
            question: '2个完全一样的小正方形可以拼成1个___形',
            answer: '长方',
            hint: '两个正方形并排拼',
            explanation: '2个完全一样的小正方形并排拼在一起就是1个长方形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l4q6',
            type: 'choice',
            question: '用4个完全一样的小正方形拼成一个大正方形，每行排几个？',
            options: ['1个', '2个', '3个', '4个'],
            answer: '2个',
            hint: '2×2的正方形',
            explanation: '4个小正方形拼成2行2列的大正方形，每行排2个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l4q7',
            type: 'fill',
            question: '15-8=___',
            answer: '7',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '因为8+7=15，所以15-8=7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u7l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能从生活中找出各种图形',
        successCriteria: '①能找出生活中的立体图形 ②能找出生活中的平面图形',
        iDo: '家长用生活场景出题：找一找家里有哪些长方体、正方体、圆柱和球？【CFU检查理解】家长问“你能从生活中找出各种图形吗？”',
        weDo: '【引导式】亲子一起在家找各种图形的物品，分类摆放并说出图形名称。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立在生活中识别图形，说出物品对应的图形名称和特征。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】观察生活中图形，如建筑物、家具、食品包装。\n共学四步：\n①对话出题：指着电视问"这是什么形状？还有什么东西也是这个形状？"\n②孩子应答："长方形，还有门、窗户也是长方形"\n③答错引导：带孩子在家里转一圈，摸一摸各种物品，说出形状\n④快速检测：找家里的圆柱、找三角形的东西、找正方形的面',
        funElement: '小游戏：图形寻宝大冒险！歇后语：圆凿方枘——格格不入',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|生活中图形场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|图形生活应用图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '图形在生活中到处都是！冰箱是长方体，魔方是正方体，易拉罐是圆柱，足球是球……找找看！', animationType: 'reveal' },
          { type: 'example', content: '窗户是长方形，钟面是圆形，红领巾是三角形，地砖是正方形——生活充满图形！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '看到物品先想它是立体还是平面的，再看它是什么形状，说出特征就对了！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '认识钟表：时针和分针。整时——分针指向12，时针指向几就是几时。半时——分针指向6。', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u7l5q1',
            type: 'choice',
            question: '冰箱是什么形状？',
            options: ['正方体', '长方体', '圆柱', '球'],
            answer: '长方体',
            hint: '冰箱是方方的，但面不一样大',
            explanation: '冰箱是长方体，6个面，对面一样大，但不是每个面都一样大。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q2',
            type: 'fill',
            question: '钟面是___形',
            answer: '圆',
            hint: '钟面弯弯的没有角',
            explanation: '钟面是圆形，没有角，边是弯弯的曲线。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q3',
            type: 'choice',
            question: '红领巾是什么形状？',
            options: ['长方形', '正方形', '三角形', '圆'],
            answer: '三角形',
            hint: '红领巾有3条边3个角',
            explanation: '红领巾是三角形，有3条边和3个角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q4',
            type: 'fill',
            question: '用2个三角形和1个正方形拼一座房子，一共用了___个图形',
            answer: '3',
            hint: '2+1=？',
            explanation: '2个三角形+1个正方形=3个图形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q5',
            type: 'fill',
            question: '【期末真题】正方体有___个面',
            answer: '6',
            hint: '数一数正方体有几个面',
            explanation: '正方体有6个面，每个面都是一样大的正方形。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q6',
            type: 'choice',
            question: '【期末真题】下面哪个图形没有角？',
            options: ['三角形', '长方形', '正方形', '圆'],
            answer: '圆',
            hint: '哪个图形的边是弯弯的？',
            explanation: '圆没有角，边是弯弯的曲线。三角形、长方形、正方形都有角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q7',
            type: 'fill',
            question: '14-6=___',
            answer: '8',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '因为6+8=14，所以14-6=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q8',
            type: 'choice',
            question: '【认识钟表】分针指向12，时针指向3，是几时？',
            options: ['3时', '12时', '6时'],
            answer: '3时',
            hint: '整时看时针，分针指12',
            explanation: '整时：分针指向12，时针指向几就是几时。时针指向3，所以是3时。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u7l5q9',
            type: 'choice',
            question: '【认识钟表】分针指向6，时针走过9走到9和10中间，是几时半？',
            options: ['9时半', '6时半', '10时半'],
            answer: '9时半',
            hint: '半时分针指向6',
            explanation: '半时：分针指向6，时针走到两数中间。时针走过9，所以是9时半。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u8',
    title: '认识人民币',
    subtitle: '认识钱币，学会简单购物',
    order: 8,
    lessons: [
      {
        id: 'm1u8l1',
        title: '元角分',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能认识人民币并掌握元角分换算（1元=10角=100分）',
        successCriteria: '①能认人民币面值 ②能说出1元=10角=100分',
        iDo: '家长拿出真实人民币，展示1元、1角、1分，讲解元角分的关系。【CFU检查理解】家长问“你能认识人民币吗？”',
        weDo: '【引导式】亲子一起用人民币学具做换算游戏：1元=10角，1角=10分。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成元角分的换算练习。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】1元=10角=100分，用真钱或玩具钱感受换算。\n共学四步：\n①对话出题：拿1元问"1元等于几角？等于几分？"\n②孩子应答："1元=10角=100分"\n③答错引导：家长用10张1角换1元演示，让孩子数10角就是1元\n④快速检测：1元=几角、5角=几分、2元=几角',
        funElement: '笑话：1元对10角说——咱俩一样值钱！小游戏：小小银行家换零钱',
        gsapAnimations: [
          '[GSAP:scaleIn|人民币面额依次出现|0.5s|页面加载|back.out(1.7)]',
          '[GSAP:translateX|换算箭头动画|0.4s|点击触发|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|1元1角1分人民币|400x300|cartoon|png|认识人民币]',
          '[IMG:illustration|元角分换算关系图|300x250|cartoon|png|换算关系]'
        ],
        content: [
          { type: 'text', content: '人民币有三个单位：元、角、分。元最大，分最小，角在中间！它们之间可以换算哦！', animationType: 'reveal' },
          { type: 'example', content: '1元=10角，1角=10分，所以1元=10角=100分！', label: '换一换', animationType: 'bounce' },
          { type: 'formula', content: '人民币换算口诀：1元等于10角，1角等于10分，1元等于100分！', label: '换算口诀', animationType: 'counter' },
          { type: 'tip', content: '元→角乘10，角→分乘10；分→角除以10，角→元除以10！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '1元纸币变成10个1角硬币的动画，1角硬币变成10个1分硬币的动画', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '认识人民币',
              sceneBuildConfig: {
                sceneName: '人民币换算',
                elements: [
                  { id: 'el-0', text: '1元', emoji: '💵', delay: 0, animation: 'bounceIn', ttsText: '1元' },
                  { id: 'el-1', text: '=10角', emoji: '🪙', delay: 0.6, animation: 'scaleIn', ttsText: '等于10个1角' },
                  { id: 'el-2', text: '1角', emoji: '🪙', delay: 1.2, animation: 'bounceIn', ttsText: '1角' },
                  { id: 'el-3', text: '=10分', emoji: '🪙', delay: 1.8, animation: 'scaleIn', ttsText: '等于10个1分' },
                ],
              },
              ttsNarration: '1元等于10角，1角等于10分！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u8l1q1',
            type: 'choice',
            question: '1元等于几角？',
            options: ['5角', '8角', '10角', '100角'],
            answer: '10角',
            hint: '1元=？角',
            explanation: '1元=10角，这是人民币的基本换算关系。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l1q2',
            type: 'fill',
            question: '1角=___分',
            answer: '10',
            hint: '角和分的关系',
            explanation: '1角=10分，所以1元=10角=100分。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l1q3',
            type: 'flashcard',
            question: '快速换算：3元=几角？',
            answer: '30',
            hint: '1元=10角，3元呢？',
            explanation: '1元=10角，3元=3×10=30角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l1q4',
            type: 'choice',
            question: '2元等于几角？',
            options: ['10角', '15角', '20角', '25角'],
            answer: '20角',
            hint: '1元=10角，2元呢？',
            explanation: '1元=10角，2元=2×10=20角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l1q5',
            type: 'fill',
            question: '50分=___角',
            answer: '5',
            hint: '10分=1角',
            explanation: '50分=5角，因为10分=1角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l1q6',
            type: 'fill',
            question: '1元-3角=___角',
            answer: '7',
            hint: '先把1元换成角',
            explanation: '1元=10角，10角-3角=7角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l1q7',
            type: 'fill',
            question: '15角-8角=___角',
            answer: '7',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '15-8=7，所以15角-8角=7角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u8l2',
        title: '简单购物',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用人民币进行简单购物计算',
        successCriteria: '①能算出买物品要付多少钱 ②能选对组合的人民币付款',
        iDo: '家长扮演店主，示范用人民币购买物品并计算总价。【CFU检查理解】家长问“你能用人民币进行简单购物计算吗？”',
        weDo: '【引导式】亲子轮流扮演买家和卖家，模拟购物场景计算金额。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立计算简单购物场景中的金额。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】在模拟购物中练习计算，理解人民币使用。\n共学四步：\n①对话出题：铅笔1元、橡皮5角，问"买一支铅笔和一块橡皮共多少钱？"\n②孩子应答："1元+5角=1元5角"\n③答错引导：用真钱摆出来，1元加5角，引导孩子数总共1元5角\n④快速检测：2元+3元=？、1元+8角=？、买3元东西怎么付',
        funElement: '小游戏：小小超市购物乐！歇后语：一分钱掰成两半花——精打细算',
        gsapAnimations: [
          '[GSAP:scaleIn|商品和价格标签出现|0.5s|页面加载|back.out(1.7)]',
          '[GSAP:translateX|人民币支付动画|0.6s|点击触发|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|小小超市购物场景|400x300|cartoon|png|购物场景]',
          '[IMG:illustration|商品价格标签示例|300x250|cartoon|png|价格标签]'
        ],
        content: [
          { type: 'text', content: '去超市买东西要付钱！把每样东西的价格加起来就是总共要付的钱。', animationType: 'reveal' },
          { type: 'example', content: '铅笔2元+橡皮1元=3元，买铅笔和橡皮一共要付3元！', label: '买一买', animationType: 'bounce' },
          { type: 'formula', content: '购物计算：把每样东西的价格加起来=总共要付的钱！', label: '购物口诀', animationType: 'typewriter' },
          { type: 'tip', content: '买东西前先算算要花多少钱，看看带的钱够不够！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '超市购物场景动画：商品放入购物车，价格标签叠加计算', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '购物计算',
              sceneBuildConfig: {
                sceneName: '超市购物',
                elements: [
                  { id: 'el-0', text: '铅笔2元', emoji: '✏️', delay: 0, animation: 'slideIn', ttsText: '铅笔2元' },
                  { id: 'el-1', text: '橡皮1元', emoji: '🧹', delay: 0.5, animation: 'slideIn', ttsText: '橡皮1元' },
                  { id: 'el-2', text: '尺子3元', emoji: '📏', delay: 1.0, animation: 'slideIn', ttsText: '尺子3元' },
                  { id: 'el-3', text: '共6元', emoji: '💰', delay: 1.5, animation: 'scaleIn', ttsText: '一共6元' },
                ],
              },
              ttsNarration: '2元加1元加3元，一共6元！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u8l2q1',
            type: 'choice',
            question: '铅笔2元，橡皮1元，一共要付多少？',
            options: ['2元', '3元', '4元', '5元'],
            answer: '3元',
            hint: '2+1=？',
            explanation: '铅笔2元+橡皮1元=3元，一共要付3元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l2q2',
            type: 'fill',
            question: '笔记本5元，你有10元，买完后还剩___元',
            answer: '5',
            hint: '10-5=？',
            explanation: '10-5=5，买完笔记本还剩5元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l2q3',
            type: 'flashcard',
            question: '快速计算：买3块1元的糖，要付多少？',
            answer: '3元',
            hint: '3个1元是几元？',
            explanation: '3块糖每块1元，1+1+1=3元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l2q4',
            type: 'choice',
            question: '铅笔3元，橡皮2元，尺子4元，买铅笔和尺子一共多少元？',
            options: ['5元', '6元', '7元', '9元'],
            answer: '7元',
            hint: '3+4=？',
            explanation: '铅笔3元+尺子4元=7元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l2q5',
            type: 'fill',
            question: '买1本5元的笔记本，付10元，找回___元',
            answer: '5',
            hint: '10-5=？',
            explanation: '10-5=5，找回5元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l2q6',
            type: 'fill',
            question: '铅笔2元，橡皮1元，尺子3元，三样都买一共要___元',
            answer: '6',
            hint: '2+1+3=？',
            explanation: '2+1+3=6，三样都买一共6元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l2q7',
            type: 'fill',
            question: '5元=___角',
            answer: '50',
            hint: '[元角分]（数学-认识人民币-第1课）',
            explanation: '1元=10角，5元=50角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u8l3',
        title: '找零计算',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能计算购物找零（付的钱减价格等于找零）',
        successCriteria: '①能列找零算式 ②能正确计算找零金额',
        iDo: '家长演示：物品3元，付5元，找回5-3=2元。【CFU检查理解】家长问“你能计算购物找零（付的钱减价格等于找零）吗？”',
        weDo: '【引导式】亲子一起模拟找零场景，练习计算应找回多少钱。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立计算各种找零场景。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】找零就是付的钱减去价格，多让孩子实际操作。\n共学四步：\n①对话出题：买3元东西付5元，问"找你多少钱？怎么算？"\n②孩子应答："5-3=2，找2元"\n③答错引导：用真钱演示，给5元拿走3元商品，数手里剩2元就是找零\n④快速检测：买4元付10元找几元、买2元付5元找几元、买6元付10元找几元',
        funElement: '笑话：5元对3元说——你不用找，我自己走！小游戏：找零小达人',
        gsapAnimations: [
          '[GSAP:translateX|找零硬币滑出动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|找零金额弹出|0.4s|计算完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|购物找零场景图|400x300|cartoon|png|找零教学]',
          '[IMG:illustration|付钱和找零示意图|300x250|cartoon|png|找零计算]'
        ],
        content: [
          { type: 'text', content: '买东西付的钱比价格多时，店主会找给你零钱！找零=付的钱-物品价格。', animationType: 'reveal' },
          { type: 'example', content: '买4元的本子，付10元，找回10-4=6元！', label: '找一找', animationType: 'bounce' },
          { type: 'formula', content: '找零公式：找零=付的钱-物品价格，付的多就找零，付的正好不用找！', label: '找零口诀', animationType: 'counter' },
          { type: 'tip', content: '找零就是减法！用你给的钱减去东西的价格，剩下的就是找回的钱！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '付10元买4元物品的找零动画：6元硬币从收银台滑出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'separate',
              title: '找零计算',
              mergeConfig: { leftCount: 10, leftEmoji: '💵', rightCount: 4, rightEmoji: '💰', operator: '-', resultCount: 6 },
              ttsNarration: '付了10元，买了4元的东西，找回6元！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u8l3q1',
            type: 'choice',
            question: '买4元的本子，付10元，应找回多少？',
            options: ['4元', '5元', '6元', '7元'],
            answer: '6元',
            hint: '10-4=？',
            explanation: '10-4=6，所以应找回6元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l3q2',
            type: 'fill',
            question: '买7元的玩具，付10元，找回___元',
            answer: '3',
            hint: '10-7=？',
            explanation: '10-7=3，所以找回3元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l3q3',
            type: 'flashcard',
            question: '快速计算：买2元的笔，付5元，找回几元？',
            answer: '3',
            hint: '5-2=？',
            explanation: '5-2=3，所以找回3元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l3q4',
            type: 'choice',
            question: '买6元的玩具，付10元，应找回多少？',
            options: ['3元', '4元', '5元', '6元'],
            answer: '4元',
            hint: '10-6=？',
            explanation: '10-6=4，应找回4元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l3q5',
            type: 'fill',
            question: '买8元的东西，付10元，找回___元',
            answer: '2',
            hint: '10-8=？',
            explanation: '10-8=2，找回2元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l3q6',
            type: 'fill',
            question: '铅笔3元，橡皮2元，买这两样付10元，找回___元',
            answer: '5',
            hint: '先算一共多少，再算找零',
            explanation: '3+2=5元，10-5=5元，找回5元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l3q7',
            type: 'fill',
            question: '尺子4元，笔记本5元，买这两样一共___元',
            answer: '9',
            hint: '[简单购物]（数学-认识人民币-第2课）',
            explanation: '4+5=9，买这两样一共9元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u8l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '游戏化学习',
        learningObjective: '我能综合运用人民币知识完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能熟练换算元角分',
        iDo: '家长出题引导，示范元角分换算、简单购物和找零计算的综合运用。【CFU检查理解】家长问“你能综合运用人民币知识完成闯关测试吗？”',
        weDo: '【引导式】亲子一起完成闯关测试，讨论每道题的换算和计算方法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立完成闯关测试，综合运用人民币换算和购物计算知识。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】综合检测认识人民币，重点查元角分换算。\n共学四步：\n①对话出题：问"1元等于几角几分？"\n②孩子应答："1元=10角=100分"\n③答错引导：用真钱重新演示换算，10张1角=1元，10枚1分=1角\n④快速检测：1元=几角、买5元付10元找几元、3元+2元=？',
        funElement: '小游戏：人民币闯关大挑战！歇后语：一分钱难倒英雄汉——没钱不行',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|人民币闯关测试场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|元角分购物综合图|300x250|cartoon|png|综合检测]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用元角分换算、简单购物和找零计算的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '1元=10角，铅笔3元+橡皮2元=5元，付10元找回10-5=5元——综合运用！', label: '闯关提示', animationType: 'bounce' },
          { type: 'tip', content: '换算口诀：1元=10角=100分；购物口诀：价格加起来=要付的钱；找零口诀：付的钱-价格=找回的钱！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用闯关测试模式，综合检测认识人民币掌握情况，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u8l4q1',
            type: 'choice',
            question: '3元等于几角？',
            options: ['10角', '20角', '30角', '40角'],
            answer: '30角',
            hint: '1元=10角，3元呢？',
            explanation: '1元=10角，3元=3×10=30角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l4q2',
            type: 'fill',
            question: '40分=___角',
            answer: '4',
            hint: '10分=1角',
            explanation: '40分=4角，因为10分=1角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l4q3',
            type: 'choice',
            question: '铅笔2元，橡皮1元，尺子3元，买铅笔和尺子一共多少元？',
            options: ['4元', '5元', '6元', '3元'],
            answer: '5元',
            hint: '2+3=？',
            explanation: '铅笔2元+尺子3元=5元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l4q4',
            type: 'fill',
            question: '买6元的玩具，付10元，找回___元',
            answer: '4',
            hint: '10-6=？',
            explanation: '10-6=4，找回4元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l4q5',
            type: 'fill',
            question: '1元-6角=___角',
            answer: '4',
            hint: '先把1元换成角',
            explanation: '1元=10角，10角-6角=4角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l4q6',
            type: 'choice',
            question: '笔记本5元，铅笔3元，买这两样付10元，找回几元？',
            options: ['1元', '2元', '3元', '4元'],
            answer: '2元',
            hint: '先算一共多少，再算找零',
            explanation: '5+3=8元，10-8=2元，找回2元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l4q7',
            type: 'fill',
            question: '17-9=___',
            answer: '8',
            hint: '[退位减法]（数学-20以内退位减法-第1课）',
            explanation: '因为9+8=17，所以17-9=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u8l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用 + 真题练习，真实场景应用',
        learningObjective: '我能在真实购物中算价格和找零',
        successCriteria: '①能算总价 ②能算找零',
        iDo: '家长用生活场景出题：去超市买铅笔2元、橡皮1元、尺子3元，带10元够吗？【CFU检查理解】家长问“你能在真实购物中算价格和找零吗？”',
        weDo: '【引导式】亲子一起模拟超市购物，练习算总价和找零。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决生活中的购物和找零问题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】带孩子去超市真实购物，自己算价格和找零。\n共学四步：\n①对话出题：超市里拿两样东西，问"这两样共多少钱？给10元够吗？"\n②孩子应答："4元+3元=7元，10元够，找3元"\n③答错引导：让孩子在收银台前自己算，家长核对，用真钱感受\n④快速检测：买5元和2元共几元、给10元找几元、1元买5角找几角',
        funElement: '小游戏：小小超市收银员！歇后语：精打细算——会过日子',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:particleBurst|答对庆祝特效|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|超市购物生活场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|购物找零生活图|300x250|cartoon|png|综合应用]'
        ],
        content: [
          { type: 'text', content: '人民币在生活中天天用到！去超市买东西要算价格，付钱要算找零，元角分换算要熟练！', animationType: 'reveal' },
          { type: 'example', content: '买铅笔3元和橡皮2元，一共3+2=5元，付10元找回10-5=5元——这就是生活中的数学！', label: '生活数学', animationType: 'bounce' },
          { type: 'tip', content: '购物三步走：1.算总价（加法）2.看带的钱够不够 3.算找零（减法）！', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '本课主要使用生活场景应用+真题练习，真实场景应用，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm1u8l5q1',
            type: 'choice',
            question: '买1本5元的笔记本和1支2元的铅笔，一共要付多少元？',
            options: ['6元', '7元', '8元', '3元'],
            answer: '7元',
            hint: '5+2=？',
            explanation: '5+2=7元，一共要付7元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l5q2',
            type: 'fill',
            question: '买8元的玩具，付10元，找回___元',
            answer: '2',
            hint: '10-8=？',
            explanation: '10-8=2，找回2元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l5q3',
            type: 'choice',
            question: '橡皮1元，铅笔2元，尺子4元，三样都买一共多少元？',
            options: ['5元', '6元', '7元', '8元'],
            answer: '7元',
            hint: '1+2+4=？',
            explanation: '1+2+4=7元，三样都买一共7元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l5q4',
            type: 'fill',
            question: '小红有5元，买了一支3元的铅笔，还剩___元',
            answer: '2',
            hint: '5-3=？',
            explanation: '5-3=2，还剩2元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l5q5',
            type: 'fill',
            question: '【期末真题】1元=___角',
            answer: '10',
            hint: '元和角的换算',
            explanation: '1元=10角，这是人民币的基本换算关系。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l5q6',
            type: 'choice',
            question: '【期末真题】买一个6元的文具盒，付10元，应找回多少？',
            options: ['3元', '4元', '5元', '6元'],
            answer: '4元',
            hint: '10-6=？',
            explanation: '10-6=4，应找回4元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u8l5q7',
            type: 'fill',
            question: '9+3=___',
            answer: '12',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+3=12，见9想1，3拆成1和2，9+1=10，10+2=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u9',
    title: '认识钟表',
    subtitle: '认识整时和半时，做时间的小主人',
    order: 9,
    lessons: [
      {
        id: 'm1u9l1',
        title: '认识钟面',
        order: 1,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能认识钟面上的时针和分针，知道钟面上有12个数字',
        successCriteria: '①能区分时针和分针 ②能说出钟面上有12个数字和12个大格',
        iDo: '家长出示钟表模型，指出时针（短粗）和分针（长细），示范读钟面上的数字和大格。【CFU检查理解】家长问"短针叫什么针？长针叫什么针？"',
        weDo: '【引导式】家长拨时针孩子说 → 【半独立】孩子拨针家长说 → 【独立】孩子自己拨自己说',
        youDo: '孩子独立认读钟面上的时针和分针，说出钟面上有几个数字。【费曼小老师时间】用最简单的话把今天学的讲给小熊听',
        parentTips: '【家长预习】本课学认识钟面，重点是区分时针和分针，认识12个数字。\n共学四步：\n①对话出题：指着钟面问"这根短针叫什么？长针叫什么？"\n②孩子应答："短针是时针，长针是分针"\n③答错引导：让孩子摸一摸两根针，短粗的是时针，长细的是分针，多看几遍\n④快速检测：指出时针、指出分针、数钟面上有几个数字',
        funElement: '小游戏：时针分针找朋友——你说时针孩子指短针！歇后语：钟表没电——停摆了',
        gsapAnimations: [
          '[GSAP:scaleIn|钟面出现|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:rotateTo|时针分针转动|1s|点击触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|钟面示意图|400x300|cartoon|png|钟表教学]',
          '[IMG:illustration|时针分针对比图|300x250|cartoon|png|时针分针]'
        ],
        content: [
          { type: 'text', content: '小朋友们，今天我们来认识钟表！钟面上藏着许多秘密，让我们一起发现吧。', animationType: 'reveal' },
          { type: 'example', content: '钟面上有两根针：短粗的叫时针，长细的叫分针。时针走得慢，分针走得快。', label: '认识指针', animationType: 'bounce' },
          { type: 'text', content: '钟面上有12个数字：1、2、3、4、5、6、7、8、9、10、11、12，围成一圈。', animationType: 'typewriter' },
          { type: 'formula', content: '时针短粗走得慢，分针长细走得快，12个数字围成圈。', label: '钟面口诀', animationType: 'counter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(看真表)→Pictorial(看钟面图)→Abstract(写时间符号)，从摸得到到看得懂再到会写', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '认钟面小窍门：时针短、分针长，记住"短时长分"就不会搞错啦！', label: '记忆小窍门', animationType: 'pulse' },
          { type: 'animation', content: '钟面逐步出现，先显示12个数字，再分别高亮时针和分针', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '认识钟面',
              sceneBuildConfig: {
                sceneName: '认识钟面',
                elements: [
                  { id: 'el-0', text: '钟面', emoji: '🕐', delay: 0, animation: 'scaleIn', ttsText: '这是钟面' },
                  { id: 'el-1', text: '时针（短粗）', emoji: '🕙', delay: 0.5, animation: 'fadeIn', ttsText: '短粗的针是时针' },
                  { id: 'el-2', text: '分针（长细）', emoji: '🕚', delay: 1.0, animation: 'fadeIn', ttsText: '长细的针是分针' }
                ]
              }
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'm1u9l1q1',
            type: 'choice',
            question: '钟面上短粗的针叫什么？',
            options: ['时针', '分针', '秒针', '时针和分针'],
            answer: '时针',
            hint: '短粗的针走得慢',
            explanation: '钟面上短粗的针叫时针，它走得慢。做错是因为对时针分针的区分还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l1q2',
            type: 'choice',
            question: '钟面上长细的针叫什么？',
            options: ['时针', '分针', '秒针', '时针和分针'],
            answer: '分针',
            hint: '长细的针走得快',
            explanation: '钟面上长细的针叫分针，它走得快。做错是因为对时针分针的区分还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l1q3',
            type: 'fill',
            question: '钟面上一共有___个数字',
            answer: '12',
            hint: '从1数到几？',
            explanation: '钟面上有12个数字，从1到12围成一圈。做错是因为对钟面数字还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l1q4',
            type: 'choice',
            question: '钟面上的数字是从几到几？',
            options: ['1到10', '1到12', '0到9', '1到20'],
            answer: '1到12',
            hint: '看看钟面最大的数字',
            explanation: '钟面上的数字从1到12，围成一圈。做错是因为对钟面观察还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l1q5',
            type: 'fill',
            question: '钟面上相邻两个数字之间有1个大格，12个数字一共有___个大格',
            answer: '12',
            hint: '12个数字围成一圈，中间有多少个间隔？',
            explanation: '12个数字围成一圈，相邻两个数字之间有1个大格，一共12个大格。做错是因为对钟面格数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l1q6',
            type: 'choice',
            question: '【期中真题】下列说法正确的是？',
            options: ['时针比分针长', '时针比分针短粗', '时针和分针一样长', '钟面上有10个数字'],
            answer: '时针比分针短粗',
            hint: '想想时针和分针的长短粗细',
            explanation: '时针短粗，分针长细，所以时针比分针短粗是正确的。做错是因为对钟面认识还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l1q7',
            type: 'fill',
            question: '按顺序数：1、2、3、___、5、6',
            answer: '4',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '按顺序数1、2、3、4、5、6，空格填4。做错是因为数数顺序还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u9l2',
        title: '认识整时',
        order: 2,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能认读钟面上的整时，知道分针指向12时就是整时',
        successCriteria: '①能正确读出整时 ②知道分针指向12、时针指向几就是几时',
        iDo: '家长拨钟到3时，分针指向12，时针指向3，示范读"3时"。再拨到6时演示。【CFU检查理解】家长问"分针指向几的时候是整时？"',
        weDo: '【引导式】家长拨到5时孩子读 → 【半独立】孩子拨到8时家长读 → 【独立】孩子自己拨自己读',
        youDo: '孩子独立认读各种整时钟面，拨出指定整时。【费曼小老师时间】把认整时的方法讲给小熊听',
        parentTips: '【家长预习】本课学认识整时，分针指向12，时针指向几就是几时。\n共学四步：\n①对话出题：拨到3时问"现在是几时？"\n②孩子应答："分针指12，时针指3，是3时"\n③答错引导：先看分针是不是指12，再看时针指几，就是几时\n④快速检测：读2时、7时、9时、12时',
        funElement: '小游戏：我说你拨——家长说"4时"孩子拨出来！歇后语：钟敲十二下——正午到了',
        gsapAnimations: [
          '[GSAP:rotateTo|分针转到12|0.8s|点击触发|power2.out]',
          '[GSAP:scaleIn|整时数字弹出|0.5s|整时确认|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|整时钟面3时|400x300|cartoon|png|整时教学]',
          '[IMG:illustration|整时钟面6时|300x250|cartoon|png|整时示例]'
        ],
        content: [
          { type: 'text', content: '今天我们来学习认整时！当分针指向12，时针指向几，就是几时。', animationType: 'reveal' },
          { type: 'example', content: '分针指向12，时针指向3，就是3时，写作3:00。', label: '认整时', animationType: 'bounce' },
          { type: 'formula', content: '整时口诀：分针指12，时针指几就是几时！', label: '整时口诀', animationType: 'counter' },
          { type: 'text', content: '3时写作3:00，6时写作6:00，9时写作9:00，12时写作12:00。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(拨真表)→Pictorial(看钟面图)→Abstract(写几:00)，从动手拨到看图认再到写符号', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '认整时三步走：第一步看分针指向12，第二步看时针指向几，第三步说出几时！', label: '认时三步', animationType: 'pulse' },
          { type: 'animation', content: '钟面分针转到12，时针依次指向3、6、9、12，显示对应整时', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '认识整时',
              timelineConfig: {
                steps: [
                  { id: 'step1', text: '分针指向12', emoji: '🕐', ttsNarration: '分针指向12' },
                  { id: 'step2', text: '时针指向3，是3时', emoji: '3️⃣', ttsNarration: '时针指向3，是3时' },
                  { id: 'step3', text: '时针指向6，是6时', emoji: '6️⃣', ttsNarration: '时针指向6，是6时' }
                ]
              }
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'm1u9l2q1',
            type: 'choice',
            question: '分针指向12，时针指向3，是几时？',
            options: ['2时', '3时', '4时', '12时'],
            answer: '3时',
            hint: '分针指12，时针指几就是几时',
            explanation: '分针指向12，时针指向3，是3时。做错是因为认整时还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l2q2',
            type: 'fill',
            question: '分针指向12，时针指向6，是___时',
            answer: '6',
            hint: '时针指向几就是几时',
            explanation: '分针指向12，时针指向6，是6时。做错是因为认整时还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l2q3',
            type: 'choice',
            question: '7时怎么写？',
            options: ['7:00', '7:30', '7:12', '12:7'],
            answer: '7:00',
            hint: '整时写作几:00',
            explanation: '整时写作几:00，7时写作7:00。做错是因为整时写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l2q4',
            type: 'fill',
            question: '9时写作___:00',
            answer: '9',
            hint: '几时就写几:00',
            explanation: '9时写作9:00。做错是因为整时写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l2q5',
            type: 'choice',
            question: '【期末真题】分针指向12，时针指向12，是几时？',
            options: ['6时', '12时', '1时', '0时'],
            answer: '12时',
            hint: '时针和分针都指向12',
            explanation: '分针指向12，时针也指向12，是12时，两根针重合在一起。做错是因为12时比较特殊还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l2q6',
            type: 'fill',
            question: '【期末真题】妈妈早上7时起床，写作7:___',
            answer: '00',
            hint: '整时是几:00',
            explanation: '7时是整时，写作7:00，所以填00。做错是因为整时写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l2q7',
            type: 'fill',
            question: '钟面上时针指向5，分针指向12，是___时',
            answer: '5',
            hint: '[整时认识]（数学-认识钟表-第2课）',
            explanation: '分针指向12，时针指向5，是5时。做错是因为认整时还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u9l3',
        title: '认识半时',
        order: 3,
        teachingMethod: 'CPA教学法 + 蒙台梭利多感官',
        learningObjective: '我能认读钟面上的半时，知道分针指向6时就是半时',
        successCriteria: '①能正确读出半时 ②知道分针指向6表示半时，时针在两个数字中间',
        iDo: '家长拨钟到3时半，分针指向6，时针指向3和4中间，示范读"3时半"。【CFU检查理解】家长问"分针指向几的时候是半时？"',
        weDo: '【引导式】家长拨到5时半孩子读 → 【半独立】孩子拨到8时半家长读 → 【独立】孩子自己拨自己读',
        youDo: '孩子独立认读各种半时钟面，拨出指定半时。【费曼小老师时间】把认半时的方法讲给小熊听',
        parentTips: '【家长预习】本课学认识半时，分针指向6，时针在两个数字中间。\n共学四步：\n①对话出题：拨到3时半问"现在是几时半？"\n②孩子应答："分针指6，时针在3和4中间，是3时半"\n③答错引导：先看分针是不是指6，再看时针过了几就是几时半\n④快速检测：读2时半、7时半、9时半',
        funElement: '小游戏：半时小侦探——找出哪个钟是半时！歇后语：半天云里拍巴掌——响当当',
        gsapAnimations: [
          '[GSAP:rotateTo|分针转到6|0.8s|点击触发|power2.out]',
          '[GSAP:scaleIn|半时数字弹出|0.5s|半时确认|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|半时钟面3时半|400x300|cartoon|png|半时教学]',
          '[IMG:illustration|半时时针位置图|300x250|cartoon|png|半时示例]'
        ],
        content: [
          { type: 'text', content: '今天我们来学习认半时！当分针指向6，时针走过几，就是几时半。', animationType: 'reveal' },
          { type: 'example', content: '分针指向6，时针走过3（在3和4中间），就是3时半，写作3:30。', label: '认半时', animationType: 'bounce' },
          { type: 'formula', content: '半时口诀：分针指6，时针走过几就是几时半！', label: '半时口诀', animationType: 'counter' },
          { type: 'text', content: '3时半写作3:30，7时半写作7:30，9时半写作9:30。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(拨真表看半时)→Pictorial(看钟面图)→Abstract(写几:30)，从动手到看图再到写符号', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '认半时关键：分针指6是半时，时针在两个数字中间，走过几就是几时半！', label: '半时关键', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u9l3q1',
            type: 'choice',
            question: '分针指向6，时针走过3，是几时半？',
            options: ['2时半', '3时半', '4时半', '6时半'],
            answer: '3时半',
            hint: '分针指6是半时，时针走过几就是几时半',
            explanation: '分针指向6，时针走过3，是3时半。做错是因为认半时还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l3q2',
            type: 'fill',
            question: '分针指向6，时针走过7，是___时半',
            answer: '7',
            hint: '时针走过几就是几时半',
            explanation: '分针指向6，时针走过7，是7时半。做错是因为认半时还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l3q3',
            type: 'choice',
            question: '5时半怎么写？',
            options: ['5:00', '5:30', '5:06', '6:30'],
            answer: '5:30',
            hint: '半时写作几:30',
            explanation: '半时写作几:30，5时半写作5:30。做错是因为半时写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l3q4',
            type: 'fill',
            question: '8时半写作8:___',
            answer: '30',
            hint: '半时是几:30',
            explanation: '8时半写作8:30，所以填30。做错是因为半时写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l3q5',
            type: 'choice',
            question: '【期末真题】分针指向6，时针在9和10中间，是几时半？',
            options: ['8时半', '9时半', '10时半', '6时半'],
            answer: '9时半',
            hint: '时针走过9，在9和10中间',
            explanation: '分针指向6，时针在9和10中间，说明时针走过9，是9时半。做错是因为认半时还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l3q6',
            type: 'choice',
            question: '【期末真题】下列哪个是半时？',
            options: ['分针指向12', '分针指向6', '分针指向3', '分针指向9'],
            answer: '分针指向6',
            hint: '半时分针指向几？',
            explanation: '分针指向6时表示半时。做错是因为半时判断还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l3q7',
            type: 'fill',
            question: '分针指向6，时针走过4，是___时半',
            answer: '4',
            hint: '[半时认识]（数学-认识钟表-第3课）',
            explanation: '分针指向6，时针走过4，是4时半。做错是因为认半时还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u9l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用整时和半时的知识完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能区分整时和半时并正确读出时间',
        iDo: '家长引导梳理思维导图：钟表→整时（分针指12）和半时（分针指6），示范综合判断。【CFU检查理解】家长问"整时分针指向几？半时分针指向几？"',
        weDo: '【引导式】亲子一起做思维导图整理 → 【半独立】家长出题孩子答 → 【独立】孩子独立闯关',
        youDo: '孩子独立完成整时半时综合闯关测试。【费曼小老师时间】用思维导图把整时半时的知识讲给小熊听',
        parentTips: '【家长预习】本课综合检测整时和半时，用思维导图整理知识。\n共学四步：\n①对话出题：问"整时分针指向几？半时呢？"\n②孩子应答："整时分针指12，半时分针指6"\n③答错引导：拨钟演示，整时分针指12，半时分针指6\n④快速检测：读3时、3时半、6时、6时半',
        funElement: '小游戏：钟表闯关大挑战！歇后语：钟表师傅——拨弄是非（指针）',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|钟表闯关测试场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|整时半时思维导图|300x250|cartoon|png|思维导图]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用整时和半时的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '思维导图：认识钟表→整时（分针指12，时针指几是几时）+半时（分针指6，时针走过几是几时半）', label: '思维导图', animationType: 'bounce' },
          { type: 'tip', content: '区分整时半时口诀：分针指12是整时，分针指6是半时，先看分针再看时针！', label: '小贴士', animationType: 'pulse' },
          { type: 'formula', content: '整时=几:00（分针指12）；半时=几:30（分针指6）', label: '时间公式', animationType: 'counter' },
          { type: 'tip', content: 'RTI分层干预：基础层读整时半时→提高层写时间→挑战层综合判断，分层闯关逐步提升！', label: '教学方法', animationType: 'pulse' },
          { type: 'text', content: '闯关小窍门：先看分针判断是整时还是半时，再看时针读出具体时间！', animationType: 'reveal' }
        ],
        practiceQuestions: [
          {
            id: 'm1u9l4q1',
            type: 'choice',
            question: '分针指向12，时针指向8，是几时？',
            options: ['8时', '8时半', '12时', '6时'],
            answer: '8时',
            hint: '分针指12是整时',
            explanation: '分针指向12是整时，时针指向8，是8时。做错是因为整时半时判断还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l4q2',
            type: 'fill',
            question: '分针指向6，时针走过10，是___时半',
            answer: '10',
            hint: '分针指6是半时，时针走过几就是几时半',
            explanation: '分针指向6是半时，时针走过10，是10时半。做错是因为半时判断还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l4q3',
            type: 'choice',
            question: '4:30表示什么时间？',
            options: ['4时', '4时半', '4时零30分', '30时4分'],
            answer: '4时半',
            hint: ':30表示半时',
            explanation: '4:30中30表示半时，是4时半。做错是因为时间写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l4q4',
            type: 'choice',
            question: '分针指向6，时针在2和3中间，是几时半？',
            options: ['1时半', '2时半', '3时半', '6时半'],
            answer: '2时半',
            hint: '时针走过2，在2和3中间',
            explanation: '分针指向6，时针走过2在2和3中间，是2时半。做错是因为半时判断还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l4q5',
            type: 'fill',
            question: '【期末真题】分针指向12，时针指向11，是___时',
            answer: '11',
            hint: '分针指12是整时，时针指几就是几时',
            explanation: '分针指向12是整时，时针指向11，是11时。做错是因为整时判断还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l4q6',
            type: 'choice',
            question: '【期末真题】10:30是几时半？',
            options: ['10时', '10时半', '3时', '30时'],
            answer: '10时半',
            hint: ':30表示半时',
            explanation: '10:30中30表示半时，是10时半。做错是因为时间写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l4q7',
            type: 'fill',
            question: '分针指向12是___时，分针指向6是___时（填"整"或"半"）',
            answer: '整',
            hint: '[钟面认识]（数学-认识钟表-第1课）',
            explanation: '分针指向12是整时。做错是因为钟面认识还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u9l5',
        title: '综合应用',
        order: 5,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能在生活场景中认读时间，综合运用钟表知识解决实际问题',
        successCriteria: '①能结合生活场景读时间 ②能根据时间安排合理的生活计划',
        iDo: '家长结合一日生活场景，示范读早上7时起床、中午12时吃饭、晚上8时半睡觉等时间。【CFU检查理解】家长问"你早上几时起床？那个时间分针指向几？"',
        weDo: '【引导式】家长说生活场景孩子读时间 → 【半独立】孩子说自己的时间安排家长补充 → 【独立】孩子自己规划一日时间',
        youDo: '孩子独立完成生活中的认时间任务，安排自己的一日时间表。【费曼小老师时间】把自己的一天时间表讲给小熊听',
        parentTips: '【家长预习】本课综合应用钟表知识到生活中，结合一日时间安排。\n共学四步：\n①对话出题：问"你早上几时起床？是整时还是半时？"\n②孩子应答："我7时起床，7时是整时，分针指向12"\n③答错引导：拨钟到7时让孩子看，分针指12时针指7\n④快速检测：读起床时间、午饭时间、睡觉时间',
        funElement: '小游戏：我的一天——把时间和活动配对！歇后语：一日之计在于晨——早起好',
        gsapAnimations: [
          '[GSAP:timeline|一日时间线动画|1.5s|页面加载|power2.out]',
          '[GSAP:scaleIn|活动图标出现|0.5s|时间匹配|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|小朋友一天的时间安排|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|一日时间线|300x250|cartoon|png|时间线]'
        ],
        content: [
          { type: 'text', content: '时间在我们的生活中无处不在！让我们用学过的钟表知识，来安排自己的一天吧。', animationType: 'reveal' },
          { type: 'example', content: '早上7:00起床，中午12:00吃午饭，下午3:30做运动，晚上8:30睡觉——这就是我的一天！', label: '我的一天', animationType: 'bounce' },
          { type: 'formula', content: '生活时间口诀：早起7:00整，午饭12:00整，运动3:30半，睡觉8:30半！', label: '时间口诀', animationType: 'counter' },
          { type: 'text', content: '看时间安排生活：分针指12是整时，分针指6是半时，先看分针再看时针。', animationType: 'typewriter' },
          { type: 'tip', content: '芬兰现象式学习：把钟表知识融入真实生活场景，让孩子在规划一日生活中自然运用时间概念！', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(看真实钟表)→Pictorial(看时间安排图)→Abstract(写时间计划)，从生活到图表再到符号', label: 'CPA方法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u9l5q1',
            type: 'choice',
            question: '小明早上7时起床，7时是整时还是半时？',
            options: ['整时', '半时', '既不是整时也不是半时', '无法判断'],
            answer: '整时',
            hint: '7时分针指向几？',
            explanation: '7时是整时，分针指向12。做错是因为整时半时判断还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l5q2',
            type: 'fill',
            question: '小红晚上8时半睡觉，写作8:___',
            answer: '30',
            hint: '半时是几:30',
            explanation: '8时半是半时，写作8:30。做错是因为半时写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l5q3',
            type: 'choice',
            question: '中午12:00小朋友在做什么最合理？',
            options: ['起床', '吃午饭', '睡觉', '上学'],
            answer: '吃午饭',
            hint: '中午12时是什么时候？',
            explanation: '中午12时是吃午饭的时间，选择吃午饭最合理。做错是因为生活常识还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l5q4',
            type: 'fill',
            question: '下午3时半做运动，写作3:___',
            answer: '30',
            hint: '半时是几:30',
            explanation: '3时半是半时，写作3:30。做错是因为半时写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l5q5',
            type: 'choice',
            question: '【期末真题】小华晚上9:00睡觉，9:00是几时？',
            options: ['9时', '9时半', '9时零分', '12时'],
            answer: '9时',
            hint: ':00表示整时',
            explanation: '9:00中00表示整时，是9时。做错是因为时间写法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l5q6',
            type: 'choice',
            question: '【期末真题】下列时间安排合理的是？',
            options: ['早上7:30起床，晚上7:00睡觉', '早上7:00起床，晚上8:30睡觉', '中午12:30起床', '晚上12:00上学'],
            answer: '早上7:00起床，晚上8:30睡觉',
            hint: '想想合理的作息时间',
            explanation: '早上7:00起床、晚上8:30睡觉是合理的小学生作息时间。做错是因为生活常识还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u9l5q7',
            type: 'fill',
            question: '分针指向6，时针走过6，是___时半',
            answer: '6',
            hint: '[半时认识]（数学-认识钟表-第3课）',
            explanation: '分针指向6，时针走过6，是6时半。做错是因为半时判断还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u10',
    title: '分类与整理',
    subtitle: '按形状、颜色、用途分类，做个整理小能手',
    order: 10,
    lessons: [
      {
        id: 'm1u10l1',
        title: '按形状分类',
        order: 1,
        teachingMethod: 'CPA教学法 + 蒙台梭利多感官',
        learningObjective: '我能把物品按形状进行分类，说出分类的标准',
        successCriteria: '①能按形状给物品分类 ②能说出分类标准和每类的数量',
        iDo: '家长拿出不同形状的积木（圆形、三角形、正方形），示范把相同形状的放在一起。【CFU检查理解】家长问"这些为什么放在一起？它们形状一样吗？"',
        weDo: '【引导式】家长分类孩子说标准 → 【半独立】孩子分类家长补充 → 【独立】孩子自己分类自己说',
        youDo: '孩子独立按形状给物品分类，数出每类有多少个。【费曼小老师时间】把按形状分类的方法讲给小熊听',
        parentTips: '【家长预习】本课学按形状分类，重点是找到相同形状放在一起。\n共学四步：\n①对话出题：拿出混在一起的积木问"能把相同形状的放一起吗？"\n②孩子应答：把圆形放一起、三角形放一起、正方形放一起\n③答错引导：拿起一个问"这是什么形状？找和它一样的放一起"\n④快速检测：分类圆形3个、三角形4个、正方形2个',
        funElement: '小游戏：形状找家——把图形送回它的家！歇后语：物以类聚——人以群分',
        gsapAnimations: [
          '[GSAP:staggerFrom|不同形状物品弹入|0.4s|页面加载|elastic.out(1,0.5)]',
          '[GSAP:scaleIn|分类框出现|0.5s|分类完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|不同形状积木分类|400x300|cartoon|png|形状分类]',
          '[IMG:illustration|分类整理示意图|300x250|cartoon|png|分类整理]'
        ],
        content: [
          { type: 'text', content: '小朋友们，今天我们来学习分类！把相同形状的物品放在一起，就是按形状分类。', animationType: 'reveal' },
          { type: 'example', content: '圆形放一堆、三角形放一堆、正方形放一堆——这就是按形状分类！', label: '按形状分', animationType: 'bounce' },
          { type: 'formula', content: '分类口诀：先看标准（形状），再找相同，最后分堆数一数！', label: '分类口诀', animationType: 'counter' },
          { type: 'text', content: '分类后要数一数：圆形3个，三角形4个，正方形2个，一共9个。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(摸真实积木分类)→Pictorial(看图片分类)→Abstract(用表格记录)，从动手分到看图分再到记录', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '蒙台梭利多感官：用手摸形状、用眼看颜色、用嘴说名称，多感官参与让分类更有趣！', label: '多感官法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u10l1q1',
            type: 'choice',
            question: '把物品按形状分类，圆形应该和谁放一起？',
            options: ['三角形', '圆形', '正方形', '长方形'],
            answer: '圆形',
            hint: '相同形状放一起',
            explanation: '按形状分类，圆形和圆形放一起。做错是因为分类标准还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l1q2',
            type: 'fill',
            question: '圆形3个，三角形4个，正方形2个，一共有___个',
            answer: '9',
            hint: '3+4+2=？',
            explanation: '3+4+2=9，一共有9个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l1q3',
            type: 'choice',
            question: '下列哪个不应该和三角形放一起？',
            options: ['三角形', '三角形', '圆形', '三角形'],
            answer: '圆形',
            hint: '哪个形状和其他不一样？',
            explanation: '圆形和其他三个三角形形状不同，不应该放一起。做错是因为分类判断还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l1q4',
            type: 'fill',
            question: '按形状分了3类，圆形有5个，三角形有3个，正方形有5个，圆形和正方形一共有___个',
            answer: '10',
            hint: '5+5=？',
            explanation: '圆形5个+正方形5个=10个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l1q5',
            type: 'choice',
            question: '【期中真题】分类后三角形最多有5个，圆形有3个，哪种形状多？',
            options: ['三角形多', '圆形多', '一样多', '无法比较'],
            answer: '三角形多',
            hint: '比较5和3的大小',
            explanation: '三角形5个比圆形3个多，所以三角形多。做错是因为比较大小还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l1q6',
            type: 'fill',
            question: '【期中真题】按形状分类，分了4类，每类分别有2、3、4、1个，一共有___个',
            answer: '10',
            hint: '2+3+4+1=？',
            explanation: '2+3+4+1=10，一共有10个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l1q7',
            type: 'fill',
            question: '认识图形：有4条边一样长的图形是___方形',
            answer: '正',
            hint: '[图形认识]（数学-认识图形-第2课）',
            explanation: '4条边一样长的图形是正方形。做错是因为图形认识还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u10l2',
        title: '按颜色分类',
        order: 2,
        teachingMethod: 'CPA教学法 + 游戏化学习',
        learningObjective: '我能把物品按颜色进行分类，并能用不同方式记录分类结果',
        successCriteria: '①能按颜色给物品分类 ②能用画图或列表方式记录分类结果',
        iDo: '家长拿出红、黄、蓝不同颜色的积木，示范按颜色分类并画"正"字记录。【CFU检查理解】家长问"红色积木有几个？你是怎么记的？"',
        weDo: '【引导式】家长分类孩子记录 → 【半独立】孩子分类家长检查 → 【独立】孩子自己分类自己记录',
        youDo: '孩子独立按颜色分类物品，用画图或列表方式记录结果。【费曼小老师时间】把按颜色分类的方法讲给小熊听',
        parentTips: '【家长预习】本课学按颜色分类，重点是分类后用画图或列表记录结果。\n共学四步：\n①对话出题：拿出彩色积木问"按颜色怎么分？"\n②孩子应答：红色放一起、黄色放一起、蓝色放一起\n③答错引导：拿起一个问"什么颜色？找同色的放一起"\n④快速检测：分类红3个、黄4个、蓝2个并记录',
        funElement: '小游戏：颜色大集合——把同色物品找出来！歇后语：五颜六色——花里胡哨',
        gsapAnimations: [
          '[GSAP:staggerFrom|彩色物品弹入|0.4s|页面加载|elastic.out(1,0.5)]',
          '[GSAP:scaleIn|颜色分类框|0.5s|分类完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|彩色积木分类|400x300|cartoon|png|颜色分类]',
          '[IMG:illustration|分类记录表|300x250|cartoon|png|分类记录]'
        ],
        content: [
          { type: 'text', content: '今天我们来学习按颜色分类！把相同颜色的物品放在一起，还能用画图记录哦。', animationType: 'reveal' },
          { type: 'example', content: '红色放一堆、黄色放一堆、蓝色放一堆，再画圆圈记录：红●●●黄●●●●蓝●●', label: '按颜色分', animationType: 'bounce' },
          { type: 'formula', content: '记录方法：画图形记录（●●●）、画"正"字记录、列表格记录！', label: '记录方法', animationType: 'counter' },
          { type: 'text', content: '分类记录后能一眼看出：红色3个，黄色4个，蓝色2个，黄色最多。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(分真实彩色物品)→Pictorial(画图记录)→Abstract(列表格写数字)，从动手分到画图记再到列表格', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '游戏化学习：把分类变成颜色大集合游戏，找同色朋友，让分类充满乐趣！', label: '游戏化法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u10l2q1',
            type: 'choice',
            question: '把物品按颜色分类，红色的应该和谁放一起？',
            options: ['黄色', '红色', '蓝色', '绿色'],
            answer: '红色',
            hint: '相同颜色放一起',
            explanation: '按颜色分类，红色和红色放一起。做错是因为分类标准还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l2q2',
            type: 'fill',
            question: '红色3个，黄色4个，蓝色2个，___色最多',
            answer: '黄',
            hint: '比较3、4、2哪个最大',
            explanation: '黄色4个最多（4>3>2）。做错是因为比较大小还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l2q3',
            type: 'choice',
            question: '记录分类结果，下列哪种方法是画图记录？',
            options: ['●●●', '3+4=7', '红黄蓝', '123'],
            answer: '●●●',
            hint: '画图记录是用图形表示数量',
            explanation: '●●●是用图形画图记录数量，是画图记录法。做错是因为记录方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l2q4',
            type: 'fill',
            question: '红色4个，黄色3个，红色比黄色多___个',
            answer: '1',
            hint: '4-3=？',
            explanation: '4-3=1，红色比黄色多1个。做错是因为比较计算还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l2q5',
            type: 'choice',
            question: '【期末真题】红色●●●●，黄色●●●，蓝色●●，哪种颜色最多？',
            options: ['红色', '黄色', '蓝色', '一样多'],
            answer: '红色',
            hint: '数一数每种颜色有几个圆点',
            explanation: '红色4个圆点最多，所以红色最多。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l2q6',
            type: 'fill',
            question: '【期末真题】按颜色分类，红色5个，黄色2个，蓝色3个，一共有___个',
            answer: '10',
            hint: '5+2+3=？',
            explanation: '5+2+3=10，一共有10个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l2q7',
            type: 'fill',
            question: '红色有3个，黄色有3个，红色和黄色一共有___个',
            answer: '6',
            hint: '[加法计算]（数学-1-5的认识和加减法-第2课）',
            explanation: '3+3=6，红色和黄色一共有6个。做错是因为加法计算还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u10l3',
        title: '按用途分类',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能把物品按用途进行分类，理解不同分类标准会产生不同结果',
        successCriteria: '①能按用途给物品分类 ②知道同一组物品可以按不同标准分类',
        iDo: '家长拿出文具、水果、玩具混在一起，示范按用途分成三类。【CFU检查理解】家长问"这些为什么放一起？它们的用途一样吗？"',
        weDo: '【引导式】家长分类孩子说用途 → 【半独立】孩子换标准分类 → 【独立】孩子自己定标准分类',
        youDo: '孩子独立按用途给物品分类，尝试用不同标准分类。【费曼小老师时间】把按用途分类的方法讲给小熊听',
        parentTips: '【家长预习】本课学按用途分类，重点是同一组物品可以按不同标准分类。\n共学四步：\n①对话出题：拿出铅笔、苹果、汽车问"怎么按用途分？"\n②孩子应答：文具类（铅笔）、水果类（苹果）、玩具类（汽车）\n③答错引导：问"铅笔用来干什么？和谁用途一样？"\n④快速检测：分类文具3个、水果4个、玩具2个',
        funElement: '小游戏：用途大配对——找找同用途的物品！歇后语：尺有所短——寸有所长',
        gsapAnimations: [
          '[GSAP:staggerFrom|不同用途物品弹入|0.4s|页面加载|elastic.out(1,0.5)]',
          '[GSAP:scaleIn|用途分类框|0.5s|分类完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|物品按用途分类|400x300|cartoon|png|用途分类]',
          '[IMG:illustration|不同分类标准对比|300x250|cartoon|png|分类对比]'
        ],
        content: [
          { type: 'text', content: '今天我们来学习按用途分类！物品可以按用途分成文具、水果、玩具等不同类别。', animationType: 'reveal' },
          { type: 'example', content: '铅笔橡皮是文具，苹果香蕉是水果，汽车积木是玩具——按用途分3类！', label: '按用途分', animationType: 'bounce' },
          { type: 'formula', content: '分类可以换标准：同一组物品，按形状分一种结果，按颜色分另一种结果！', label: '换标准', animationType: 'counter' },
          { type: 'text', content: '同一组物品，按不同标准分类，分出的结果可能不同，但总数不变。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(分真实物品)→Pictorial(看图片分类)→Abstract(列表记录)，从动手到看图再到记录', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '芬兰现象式学习：把分类融入真实生活场景，整理书包、收拾房间，在生活中自然运用分类！', label: '现象式法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u10l3q1',
            type: 'choice',
            question: '铅笔应该和谁放一起？（按用途分类）',
            options: ['苹果', '橡皮', '汽车', '香蕉'],
            answer: '橡皮',
            hint: '铅笔和橡皮都是什么类的？',
            explanation: '铅笔和橡皮都是文具，用途相同放一起。做错是因为用途分类还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l3q2',
            type: 'fill',
            question: '文具3个，水果4个，玩具2个，一共有___个',
            answer: '9',
            hint: '3+4+2=？',
            explanation: '3+4+2=9，一共有9个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l3q3',
            type: 'choice',
            question: '同一组物品按不同标准分类，结果会怎样？',
            options: ['结果一定相同', '结果可能不同', '不能分类', '只能分一类'],
            answer: '结果可能不同',
            hint: '按形状分和按颜色分结果一样吗？',
            explanation: '同一组物品按不同标准分类，结果可能不同，但总数不变。做错是因为分类理解还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l3q4',
            type: 'fill',
            question: '按用途分文具类有4个，水果类有5个，文具和水果一共有___个',
            answer: '9',
            hint: '4+5=？',
            explanation: '4+5=9，文具和水果一共有9个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l3q5',
            type: 'choice',
            question: '【期末真题】苹果、香蕉、铅笔、橡皮，按用途分成几类？',
            options: ['1类', '2类', '3类', '4类'],
            answer: '2类',
            hint: '苹果香蕉是水果，铅笔橡皮是文具',
            explanation: '苹果香蕉是水果类，铅笔橡皮是文具类，分2类。做错是因为用途分类还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l3q6',
            type: 'fill',
            question: '【期末真题】8个物品按用途分成文具类和水果类，文具类3个，水果类有___个',
            answer: '5',
            hint: '8-3=？',
            explanation: '8-3=5，水果类有5个。做错是因为分类计算还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l3q7',
            type: 'fill',
            question: '一共有7个物品，分成两类，一类有4个，另一类有___个',
            answer: '3',
            hint: '[减法计算]（数学-1-5的认识和加减法-第3课）',
            explanation: '7-4=3，另一类有3个。做错是因为减法计算还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u10l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用分类知识完成闯关测试，用多种标准分类并记录',
        successCriteria: '①闯关正确率达80%以上 ②能按不同标准分类并记录结果',
        iDo: '家长引导梳理思维导图：分类→按形状/颜色/用途，不同标准不同结果，示范综合分类。【CFU检查理解】家长问"分类有哪些标准？同一组物品分类结果一定一样吗？"',
        weDo: '【引导式】亲子一起做思维导图整理 → 【半独立】家长出题孩子分类 → 【独立】孩子独立闯关',
        youDo: '孩子独立完成分类综合闯关测试。【费曼小老师时间】用思维导图把分类知识讲给小熊听',
        parentTips: '【家长预习】本课综合检测分类知识，用思维导图整理。\n共学四步：\n①对话出题：问"分类有哪些标准？"\n②孩子应答："按形状、按颜色、按用途"\n③答错引导：拿实物演示不同标准分类\n④快速检测：按形状分、按颜色分、按用途分',
        funElement: '小游戏：分类闯关大挑战！歇后语：物以类聚——人以群分',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|分类闯关测试场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|分类思维导图|300x250|cartoon|png|思维导图]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用分类知识，按不同标准分类并记录结果！', animationType: 'reveal' },
          { type: 'example', content: '思维导图：分类→按形状/按颜色/按用途→不同标准不同结果→记录方法：画图、列表、画正字', label: '思维导图', animationType: 'bounce' },
          { type: 'tip', content: '分类三步走：第一步定标准，第二步找相同，第三步分堆数数记录！', label: '小贴士', animationType: 'pulse' },
          { type: 'formula', content: '分类标准：形状、颜色、用途；记录方法：画图●、列表格、画正字', label: '分类总结', animationType: 'counter' },
          { type: 'tip', content: 'RTI分层干预：基础层按一种标准分类→提高层换标准分类→挑战层多标准对比，分层闯关逐步提升！', label: '教学方法', animationType: 'pulse' },
          { type: 'text', content: '闯关小窍门：分类前先想好标准，分完后数一数，记录清楚不遗漏！', animationType: 'reveal' }
        ],
        practiceQuestions: [
          {
            id: 'm1u10l4q1',
            type: 'choice',
            question: '分类时第一步应该做什么？',
            options: ['直接分', '确定分类标准', '数数', '画图'],
            answer: '确定分类标准',
            hint: '分类前要先想好按什么分',
            explanation: '分类第一步是确定分类标准（如形状、颜色、用途）。做错是因为分类步骤还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l4q2',
            type: 'fill',
            question: '按形状分圆形4个，三角形3个，一共___个',
            answer: '7',
            hint: '4+3=？',
            explanation: '4+3=7，一共7个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l4q3',
            type: 'choice',
            question: '10个物品按颜色分成红色和蓝色两类，红色6个，蓝色几个？',
            options: ['3个', '4个', '5个', '6个'],
            answer: '4个',
            hint: '10-6=？',
            explanation: '10-6=4，蓝色有4个。做错是因为分类计算还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l4q4',
            type: 'choice',
            question: '下列哪种不是分类的记录方法？',
            options: ['画图记录', '列表记录', '画正字记录', '随便乱写'],
            answer: '随便乱写',
            hint: '记录方法要清楚有条理',
            explanation: '随便乱写不是分类的记录方法。做错是因为记录方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l4q5',
            type: 'fill',
            question: '【期末真题】按用途分类，文具类4个，水果类5个，玩具类1个，一共有___个',
            answer: '10',
            hint: '4+5+1=？',
            explanation: '4+5+1=10，一共有10个。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l4q6',
            type: 'choice',
            question: '【期末真题】同一组物品按不同标准分类，下列说法正确的是？',
            options: ['结果一定相同', '总数可能不同', '总数不变', '不能分类'],
            answer: '总数不变',
            hint: '不管怎么分，物品总数变不变？',
            explanation: '同一组物品按不同标准分类，结果可能不同但总数不变。做错是因为分类理解还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l4q7',
            type: 'fill',
            question: '按形状分3类，每类有2个，一共有___个',
            answer: '6',
            hint: '[加法计算]（数学-6-10的认识和加减法-第2课）',
            explanation: '2+2+2=6，一共有6个。做错是因为加法计算还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u10l5',
        title: '综合应用',
        order: 5,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能在生活场景中运用分类知识，整理物品并解决实际问题',
        successCriteria: '①能在生活中按标准分类整理物品 ②能用分类解决实际问题',
        iDo: '家长结合整理书包、收拾玩具等生活场景，示范分类整理并记录。【CFU检查理解】家长问"你的书包里的东西可以怎么分类整理？"',
        weDo: '【引导式】家长说场景孩子分类 → 【半独立】孩子分类家长检查 → 【独立】孩子自己整理分类',
        youDo: '孩子独立在生活中分类整理物品，解决实际问题。【费曼小老师时间】把分类整理的方法讲给小熊听',
        parentTips: '【家长预习】本课综合应用分类知识到生活中，整理物品。\n共学四步：\n①对话出题：问"你的玩具可以怎么分类整理？"\n②孩子应答："按用途分成积木、汽车、毛绒玩具"\n③答错引导：拿起玩具问"这个和谁用途一样？放一起"\n④快速检测：分类整理书包、玩具、衣柜',
        funElement: '小游戏：整理小达人——把房间收拾整齐！歇后语：各就各位——井井有条',
        gsapAnimations: [
          '[GSAP:scaleIn|整理场景出现|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:staggerFrom|分类物品归位|0.4s|分类完成|elastic.out(1,0.5)]'
        ],
        images: [
          '[IMG:illustration|整理书包分类场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|整理玩具分类图|300x250|cartoon|png|分类整理]'
        ],
        content: [
          { type: 'text', content: '分类在生活中用处可大啦！整理书包、收拾玩具、摆放衣服，都需要分类！', animationType: 'reveal' },
          { type: 'example', content: '整理书包：课本放一起、文具放一起、水壶放一起——按用途分类整理！', label: '整理书包', animationType: 'bounce' },
          { type: 'formula', content: '生活分类口诀：先看物品想标准，再找相同放一起，最后数数记清楚！', label: '生活口诀', animationType: 'counter' },
          { type: 'text', content: '整理玩具：积木按形状分，汽车按颜色分，毛绒玩具按大小分——不同标准不同分法！', animationType: 'typewriter' },
          { type: 'tip', content: '芬兰现象式学习：把分类融入整理书包、收拾房间等真实生活场景，让知识在生活中运用！', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(整理真实物品)→Pictorial(看整理图片)→Abstract(列表记录)，从动手到看图再到记录', label: 'CPA方法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u10l5q1',
            type: 'choice',
            question: '整理书包时，课本应该和谁放一起？',
            options: ['水壶', '课本', '零食', '玩具'],
            answer: '课本',
            hint: '相同用途放一起',
            explanation: '课本和课本用途相同，放一起。做错是因为生活分类还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l5q2',
            type: 'fill',
            question: '整理玩具，积木5个，汽车3个，毛绒玩具2个，一共有___个玩具',
            answer: '10',
            hint: '5+3+2=？',
            explanation: '5+3+2=10，一共有10个玩具。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l5q3',
            type: 'choice',
            question: '整理衣柜，下列哪种分类最合理？',
            options: ['按颜色分', '按大小分', '按季节分', '随便放'],
            answer: '按季节分',
            hint: '衣服按什么分类最实用？',
            explanation: '按季节分类整理衣柜最合理，方便换季找衣服。做错是因为生活分类还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l5q4',
            type: 'fill',
            question: '整理文具，铅笔4支，橡皮2块，尺子1把，铅笔比橡皮多___支',
            answer: '2',
            hint: '4-2=？',
            explanation: '4-2=2，铅笔比橡皮多2支。做错是因为比较计算还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l5q5',
            type: 'choice',
            question: '【期末真题】12个苹果按颜色分，红苹果7个，青苹果几个？',
            options: ['4个', '5个', '6个', '7个'],
            answer: '5个',
            hint: '12-7=？',
            explanation: '12-7=5，青苹果有5个。做错是因为分类计算还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l5q6',
            type: 'fill',
            question: '【期末真题】整理书架，故事书6本，科普书3本，故事书和科普书一共有___本',
            answer: '9',
            hint: '6+3=？',
            explanation: '6+3=9，故事书和科普书一共有9本。做错是因为分类计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u10l5q7',
            type: 'fill',
            question: '按颜色分类，红色4个，蓝色和红色一样多，蓝色有___个',
            answer: '4',
            hint: '[比较多少]（数学-数一数-第2课）',
            explanation: '蓝色和红色一样多，红色4个，所以蓝色也有4个。做错是因为比较多少还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u11',
    title: '100以内数的认识',
    subtitle: '数位、读数写数、比较大小，开启大数世界',
    order: 11,
    lessons: [
      {
        id: 'm1u11l1',
        title: '数100以内的数',
        order: 1,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能正确数出100以内的数，会一个一个数和十个十个数',
        successCriteria: '①能从1数到100不跳数 ②能十个十个地数到100',
        iDo: '家长用小棒示范数数，一个一个数到20，再十个十个数到100，示范数数节奏。【CFU检查理解】家长问"十个十个数，10后面是几十？"',
        weDo: '【引导式】家长数孩子接 → 【半独立】孩子数家长听 → 【独立】孩子自己数到100',
        youDo: '孩子独立数100以内的数，一个一个数和十个十个数。【费曼小老师时间】把数数的方法讲给小熊听',
        parentTips: '【家长预习】本课学数100以内的数，重点是一个一个数和十个十个数。\n共学四步：\n①对话出题：问"从21数到30怎么数？"\n②孩子应答："21、22、23、24、25、26、27、28、29、30"\n③答错引导：数到29提醒下一个是30，十位进一\n④快速检测：从1数到50、十个十个数到100',
        funElement: '小游戏：数数接龙——你数一个我接一个！歇后语：百里挑一——难得',
        gsapAnimations: [
          '[GSAP:counter|数字从1数到100|1.5s|页面加载|power2.out]',
          '[GSAP:staggerFrom|小棒十根一捆出现|0.4s|点击触发|elastic.out(1,0.5)]'
        ],
        images: [
          '[IMG:illustration|数100以内数小棒|400x300|cartoon|png|数数教学]',
          '[IMG:illustration|十根一捆示意图|300x250|cartoon|png|十捆]'
        ],
        content: [
          { type: 'text', content: '小朋友们，今天我们来数更大的数！从1数到100，还有更快的方法哦。', animationType: 'reveal' },
          { type: 'example', content: '一个一个数：1、2、3...29、30...99、100；十个十个数：10、20、30...90、100！', label: '数数方法', animationType: 'bounce' },
          { type: 'formula', content: '数数口诀：一个一个数到100，十个十个数更快，10、20、30...100！', label: '数数口诀', animationType: 'counter' },
          { type: 'text', content: '数到29下一个是30，数到39下一个是40，数到99下一个是100。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(数真实小棒)→Pictorial(看图数)→Abstract(直接数数字)，从动手数到看图数再到口数', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '数数小窍门：十个十个数又快又方便，10根小棒捆一捆，10捆就是100！', label: '数数窍门', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u11l1q1',
            type: 'fill',
            question: '一个一个数：28后面是___',
            answer: '29',
            hint: '28往后数1个',
            explanation: '一个一个数，28后面是29。做错是因为数数顺序还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l1q2',
            type: 'choice',
            question: '一个一个数，39后面是几？',
            options: ['38', '40', '49', '30'],
            answer: '40',
            hint: '39往后数1个',
            explanation: '一个一个数，39后面是40。做错是因为数数进位还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l1q3',
            type: 'fill',
            question: '十个十个数：30、40、___、60',
            answer: '50',
            hint: '十个十个数，40后面是几十',
            explanation: '十个十个数，40后面是50。做错是因为十十数数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l1q4',
            type: 'choice',
            question: '十个十个数，90后面是几？',
            options: ['80', '91', '100', '99'],
            answer: '100',
            hint: '十个十个数，90+10=？',
            explanation: '十个十个数，90后面是100。做错是因为十十数数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l1q5',
            type: 'fill',
            question: '【期中真题】从47开始一个一个数，数3个数：47、48、___',
            answer: '49',
            hint: '47往后数2个',
            explanation: '从47开始数3个：47、48、49，第三个是49。做错是因为数数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l1q6',
            type: 'choice',
            question: '【期中真题】十个十个数，从10数到100，一共数了几个数？',
            options: ['8个', '9个', '10个', '11个'],
            answer: '10个',
            hint: '数一数10、20...100有几个',
            explanation: '十个十个数从10到100：10、20、30、40、50、60、70、80、90、100，一共10个数。做错是因为数数计数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l1q7',
            type: 'fill',
            question: '按顺序数：18、19、___、21、22',
            answer: '20',
            hint: '[数数顺序]（数学-11-20各数的认识-第1课）',
            explanation: '按顺序数18、19、20、21、22，空格填20。做错是因为数数顺序还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u11l2',
        title: '数位的认识',
        order: 2,
        teachingMethod: 'CPA教学法 + 思维导图法',
        learningObjective: '我能认识个位和十位，知道一个数由几个十和几个一组成',
        successCriteria: '①能说出个位和十位的位置 ②能说出一个数由几个十几个一组成',
        iDo: '家长用数位表示范，从右边起第一位是个位，第二位是十位，摆小棒表示几个十几个一。【CFU检查理解】家长问"从右边起第一位是什么位？第二位是什么位？"',
        weDo: '【引导式】家长摆数孩子说组成 → 【半独立】孩子摆数家长说 → 【独立】孩子自己摆自己说',
        youDo: '孩子独立认识数位，说出一个数的组成。【费曼小老师时间】把数位的知识讲给小熊听',
        parentTips: '【家长预习】本课学数位，从右边起第一位是个位，第二位是十位。\n共学四步：\n①对话出题：问"35是由几个十和几个一组成的？"\n②孩子应答："35由3个十和5个一组成"\n③答错引导：摆3捆小棒（每捆10）和5根，数出35\n④快速检测：说24、46、89的组成',
        funElement: '小游戏：数位小侦探——找出十位和个位！歇后语：位数不够——差得远',
        gsapAnimations: [
          '[GSAP:scaleIn|数位表出现|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:staggerFrom|小棒十根一捆弹出|0.4s|点击触发|elastic.out(1,0.5)]'
        ],
        images: [
          '[IMG:illustration|数位表示意图|400x300|cartoon|png|数位教学]',
          '[IMG:illustration|数的组成小棒图|300x250|cartoon|png|数的组成]'
        ],
        content: [
          { type: 'text', content: '今天我们来认识数位！从右边起，第一位是个位，第二位是十位。', animationType: 'reveal' },
          { type: 'example', content: '35：十位是3表示3个十，个位是5表示5个一，35由3个十和5个一组成。', label: '数的组成', animationType: 'bounce' },
          { type: 'formula', content: '数位口诀：从右起，第一位个位，第二位十位；十位几个十，个位几个一！', label: '数位口诀', animationType: 'counter' },
          { type: 'text', content: '十位的数字表示几个十，个位的数字表示几个一，合起来就是总数。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(摆小棒捆和单根)→Pictorial(看数位表图)→Abstract(写数字说组成)，从动手到看图再到抽象', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '思维导图法：数位→十位（几个十）+个位（几个一）→组成总数，用导图理清结构！', label: '思维导图法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u11l2q1',
            type: 'choice',
            question: '从右边起第一位是什么位？',
            options: ['十位', '个位', '百位', '千位'],
            answer: '个位',
            hint: '从右边数第一位',
            explanation: '从右边起第一位是个位，第二位是十位。做错是因为数位认识还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l2q2',
            type: 'fill',
            question: '从右边起第二位是___位',
            answer: '十',
            hint: '第一位是个位，第二位是？',
            explanation: '从右边起第二位是十位。做错是因为数位认识还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l2q3',
            type: 'choice',
            question: '35是由几个十和几个一组成的？',
            options: ['3个十和5个一', '5个十和3个一', '35个十', '3个一和5个十'],
            answer: '3个十和5个一',
            hint: '十位是3，个位是5',
            explanation: '35十位是3表示3个十，个位是5表示5个一，由3个十和5个一组成。做错是因为数的组成还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l2q4',
            type: 'fill',
            question: '4个十和2个一组成___',
            answer: '42',
            hint: '十位写4，个位写2',
            explanation: '4个十和2个一组成42。做错是因为数的组成还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l2q5',
            type: 'choice',
            question: '【期末真题】66中两个6分别表示什么？',
            options: ['都表示6个一', '左6表示6个十，右6表示6个一', '都表示6个十', '左6表示6个一，右6表示6个十'],
            answer: '左6表示6个十，右6表示6个一',
            hint: '同样数字在不同数位表示不同含义',
            explanation: '66中左边的6在十位表示6个十，右边的6在个位表示6个一。做错是因为数位含义还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l2q6',
            type: 'fill',
            question: '【期末真题】8个十和5个一组成___',
            answer: '85',
            hint: '十位写8，个位写5',
            explanation: '8个十和5个一组成85。做错是因为数的组成还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l2q7',
            type: 'fill',
            question: '1个十和5个一组成___',
            answer: '15',
            hint: '[数的组成]（数学-11-20各数的认识-第2课）',
            explanation: '1个十和5个一组成15。做错是因为数的组成还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u11l3',
        title: '读数和写数',
        order: 3,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能正确读出和写出100以内的数',
        successCriteria: '①能正确读出100以内的数 ②能正确写出100以内的数',
        iDo: '家长在数位表上摆数，示范读"四十五"写"45"，再示范读"一百"写"100"。【CFU检查理解】家长问"45怎么读？十位和个位各是几？"',
        weDo: '【引导式】家长摆数孩子读 → 【半独立】孩子读数家长写 → 【独立】孩子自己读自己写',
        youDo: '孩子独立读出和写出100以内的数。【费曼小老师时间】把读数写数的方法讲给小熊听',
        parentTips: '【家长预习】本课学读数写数，十位几读几十，个位几读几。\n共学四步：\n①对话出题：写"67"问"怎么读？"\n②孩子应答："六十七"\n③答错引导：十位6读六十，个位7读七，合起来六十七\n④快速检测：读23、56、89、100',
        funElement: '小游戏：读数写数大比拼——看谁读得快！歇后语：读书破万卷——下笔如有神',
        gsapAnimations: [
          '[GSAP:scaleIn|数位表出现|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:typewriter|数字逐个写出|0.8s|写数触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|读数写数数位表|400x300|cartoon|png|读写教学]',
          '[IMG:illustration|100的写法|300x250|cartoon|png|写一百]'
        ],
        content: [
          { type: 'text', content: '今天我们来学习读数和写数！十位的数字读几十，个位的数字读几。', animationType: 'reveal' },
          { type: 'example', content: '45读作四十五，67读作六十七，100读作一百。', label: '读数', animationType: 'bounce' },
          { type: 'formula', content: '读写口诀：十位几读几十，个位几读几；写数从高位写起！', label: '读写口诀', animationType: 'counter' },
          { type: 'text', content: '写数从高位写起：先写十位，再写个位。100是三位数，百位1，十位0，个位0。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(摆小棒)→Pictorial(看数位表)→Abstract(读写数字)，从摆到看到读写', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '读写小窍门：读数从高位读，写数从高位写，十位几十个位几，合起来就是数！', label: '读写窍门', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u11l3q1',
            type: 'choice',
            question: '45读作什么？',
            options: ['四五', '四十五', '五十四', '四百五'],
            answer: '四十五',
            hint: '十位4读四十，个位5读五',
            explanation: '45十位4读四十，个位5读五，读作四十五。做错是因为读数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l3q2',
            type: 'fill',
            question: '六十三写作___',
            answer: '63',
            hint: '六十写6，三写3',
            explanation: '六十三，十位写6，个位写3，写作63。做错是因为写数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l3q3',
            type: 'choice',
            question: '78读作什么？',
            options: ['七八', '七十八', '八十七', '七百八'],
            answer: '七十八',
            hint: '十位7读七十，个位8读八',
            explanation: '78十位7读七十，个位8读八，读作七十八。做错是因为读数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l3q4',
            type: 'fill',
            question: '九十二写作___',
            answer: '92',
            hint: '九十写9，二写2',
            explanation: '九十二，十位写9，个位写2，写作92。做错是因为写数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l3q5',
            type: 'choice',
            question: '【期末真题】100读作什么？',
            options: ['一零零', '一百', '十零', '一十'],
            answer: '一百',
            hint: '100是三位数',
            explanation: '100读作一百，是三位数，百位1十位0个位0。做错是因为读数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l3q6',
            type: 'fill',
            question: '【期末真题】一百写作___',
            answer: '100',
            hint: '百位1，十位和个位都是0',
            explanation: '一百写作100，百位1十位0个位0。做错是因为写数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l3q7',
            type: 'fill',
            question: '二十写作___',
            answer: '20',
            hint: '[读数写数]（数学-11-20各数的认识-第1课）',
            explanation: '二十写作20，十位2个位0。做错是因为写数还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u11l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用100以内数的认识知识完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能熟练数数、认识数位、读写数字',
        iDo: '家长引导梳理思维导图：100以内数→数数（一个一个/十个十个）→数位（个位十位）→读写，示范综合运用。【CFU检查理解】家长问"100以内数我们学了哪些知识？"',
        weDo: '【引导式】亲子一起做思维导图整理 → 【半独立】家长出题孩子答 → 【独立】孩子独立闯关',
        youDo: '孩子独立完成100以内数综合闯关测试。【费曼小老师时间】用思维导图把100以内数的知识讲给小熊听',
        parentTips: '【家长预习】本课综合检测100以内数的认识，用思维导图整理。\n共学四步：\n①对话出题：问"100以内数学了什么？"\n②孩子应答："数数、数位、读数写数"\n③答错引导：用思维导图帮孩子梳理知识结构\n④快速检测：数数、说组成、读数、写数',
        funElement: '小游戏：100以内数闯关大挑战！歇后语：百发百中——准得很',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|100以内数闯关场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|100以内数思维导图|300x250|cartoon|png|思维导图]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用数数、数位、读写数的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '思维导图：100以内数→数数（一个一个/十个十个）→数位（个位十位）→读写（十位几十个位几）', label: '思维导图', animationType: 'bounce' },
          { type: 'tip', content: '综合口诀：数数会进位（39→40），数位右个左十，读写从高位起！', label: '小贴士', animationType: 'pulse' },
          { type: 'formula', content: '数数：1个1个/10个10个；数位：右个左十；读写：十位几十个位几', label: '知识总结', animationType: 'counter' },
          { type: 'tip', content: 'RTI分层干预：基础层数数→提高层数位组成→挑战层读写综合，分层闯关逐步提升！', label: '教学方法', animationType: 'pulse' },
          { type: 'text', content: '闯关小窍门：数数注意进位（39→40），数位右边起第一是个位，读写从高位开始！', animationType: 'reveal' }
        ],
        practiceQuestions: [
          {
            id: 'm1u11l4q1',
            type: 'fill',
            question: '一个一个数，49后面是___',
            answer: '50',
            hint: '49往后数1个',
            explanation: '一个一个数，49后面是50。做错是因为数数进位还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l4q2',
            type: 'choice',
            question: '57是由几个十和几个一组成的？',
            options: ['5个十和7个一', '7个十和5个一', '57个十', '5个一和7个十'],
            answer: '5个十和7个一',
            hint: '十位5个位7',
            explanation: '57十位5表示5个十，个位7表示7个一。做错是因为数的组成还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l4q3',
            type: 'choice',
            question: '89读作什么？',
            options: ['八九', '八十九', '九十八', '八百九'],
            answer: '八十九',
            hint: '十位8读八十，个位9读九',
            explanation: '89十位8读八十，个位9读九，读作八十九。做错是因为读数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l4q4',
            type: 'fill',
            question: '3个十和6个一组成___',
            answer: '36',
            hint: '十位写3，个位写6',
            explanation: '3个十和6个一组成36。做错是因为数的组成还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l4q5',
            type: 'fill',
            question: '【期末真题】十个十个数，从10数到100：10、20、30、40、50、60、70、80、___、100',
            answer: '90',
            hint: '80后面十个十个数',
            explanation: '十个十个数，80后面是90。做错是因为十十数数还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l4q6',
            type: 'choice',
            question: '【期末真题】下列哪个数读作"五十六"？',
            options: ['65', '56', '506', '560'],
            answer: '56',
            hint: '五十写5，六写6',
            explanation: '五十六，十位5个位6，写作56。做错是因为读写对应还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l4q7',
            type: 'fill',
            question: '一个一个数：29、30、31、___、33',
            answer: '32',
            hint: '[数数顺序]（数学-11-20各数的认识-第1课）',
            explanation: '一个一个数29、30、31、32、33，空格填32。做错是因为数数顺序还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u11l5',
        title: '比较大小',
        order: 5,
        teachingMethod: 'CPA教学法 + 苏格拉底提问法',
        learningObjective: '我能比较100以内数的大小，掌握比较的方法',
        successCriteria: '①能正确比较两个数的大小 ②知道先比十位，十位相同比个位',
        iDo: '家长示范比较38和45：先比十位3和4，3<4所以38<45；再示范52和58：十位相同比个位2<8所以52<58。【CFU检查理解】家长问"比较两个数先比什么位？"',
        weDo: '【引导式】家长比孩子说理由 → 【半独立】孩子比家长听 → 【独立】孩子自己比自己说',
        youDo: '孩子独立比较100以内数的大小，说出比较理由。【费曼小老师时间】把比较大小的方法讲给小熊听',
        parentTips: '【家长预习】本课学比较大小，先比十位，十位相同比个位。\n共学四步：\n①对话出题：问"38和45谁大？"\n②孩子应答："先比十位3和4，4大，所以45大"\n③答错引导：摆小棒比较，3捆4捆一眼看出谁多\n④快速检测：比较23和32、56和59、78和87',
        funElement: '小游戏：大小比拼——看谁比得快！歇后语：大小不一——各有千秋',
        gsapAnimations: [
          '[GSAP:compare|两个数比较大小的动画|1s|点击触发|power2.out]',
          '[GSAP:scaleIn|比较结果出现|0.5s|比较完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|比较大小示意图|400x300|cartoon|png|比较大小]',
          '[IMG:illustration|数位比较方法|300x250|cartoon|png|比较方法]'
        ],
        content: [
          { type: 'text', content: '今天我们来学习比较100以内数的大小！先比十位，十位相同再比个位。', animationType: 'reveal' },
          { type: 'example', content: '比较38和45：十位3<4，所以38<45；比较52和58：十位相同，个位2<8，所以52<58。', label: '比较方法', animationType: 'bounce' },
          { type: 'formula', content: '比较口诀：先比十位定大小，十位相同比个位！', label: '比较口诀', animationType: 'counter' },
          { type: 'text', content: '十位大的数就大，十位相同看个位，个位大的数就大。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(摆小棒比较)→Pictorial(看图比较)→Abstract(直接比数字)，从摆到看到直接比', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '苏格拉底提问法：引导孩子思考"为什么45比38大？"让孩子自己发现先比十位的规律！', label: '提问法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u11l5q1',
            type: 'choice',
            question: '38和45哪个大？',
            options: ['38大', '45大', '一样大', '无法比较'],
            answer: '45大',
            hint: '先比十位3和4',
            explanation: '十位3<4，所以38<45，45大。做错是因为比较大小还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l5q2',
            type: 'fill',
            question: '52和58比较，十位相同比个位，2___8（填大于或小于）',
            answer: '小于',
            hint: '2和8哪个小？',
            explanation: '十位相同比个位，2<8，所以52<58。做错是因为比较大小还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l5q3',
            type: 'choice',
            question: '比较两个数的大小，应该先比什么？',
            options: ['个位', '十位', '百位', '随便比'],
            answer: '十位',
            hint: '比较大小先看哪一位？',
            explanation: '比较两个数的大小先比十位，十位大的数就大。做错是因为比较方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l5q4',
            type: 'fill',
            question: '67和76比较，___更大',
            answer: '76',
            hint: '十位6和7哪个大？',
            explanation: '十位6<7，所以67<76，76更大。做错是因为比较大小还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l5q5',
            type: 'choice',
            question: '【期末真题】下列各数中最大的是？',
            options: ['45', '54', '48', '50'],
            answer: '54',
            hint: '比十位，十位最大的是5',
            explanation: '十位最大的是5（54和50），十位相同比个位，4>0，所以54最大。做错是因为比较大小还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l5q6',
            type: 'fill',
            question: '【期末真题】把下面的数从小到大排：23、32、20，最小的是___',
            answer: '20',
            hint: '十位最小的是2，再看个位',
            explanation: '十位都是2，比个位0<3<3，20最小。做错是因为排序还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u11l5q7',
            type: 'fill',
            question: '15和18比较，十位相同比个位，5___8（填大于或小于）',
            answer: '小于',
            hint: '[比较大小]（数学-11-20各数的认识-第1课）',
            explanation: '十位相同比个位，5<8，所以15<18。做错是因为比较大小还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  },
  {
    id: 'm1u12',
    title: '找规律',
    subtitle: '图形规律、数字规律，做个规律小侦探',
    order: 12,
    lessons: [
      {
        id: 'm1u12l1',
        title: '图形规律（重复排列）',
        order: 1,
        teachingMethod: 'CPA教学法 + 苏格拉底提问法',
        learningObjective: '我能发现图形重复排列的规律，并按规律接着画',
        successCriteria: '①能发现图形重复排列的规律 ②能按规律画出下一个图形',
        iDo: '家长摆出红黄红黄红黄排列，圈出一组重复的部分（红黄），示范找规律接下去画。【CFU检查理解】家长问"这组图形的规律是什么？重复的是哪几个？"',
        weDo: '【引导式】家长找规律孩子接 → 【半独立】孩子找规律家长接 → 【独立】孩子自己找自己接',
        youDo: '孩子独立发现图形重复规律，按规律接着画。【费曼小老师时间】把找规律的方法讲给小熊听',
        parentTips: '【家长预习】本课学找图形重复规律，圈出一组重复的部分，按规律接着画。\n共学四步：\n①对话出题：摆红黄红黄红黄问"下一个是什么颜色？"\n②孩子应答："红黄红黄重复，下一个是红"\n③答错引导：圈出一组红黄，让孩子看到重复规律\n④快速检测：接圆三角圆三角、接红蓝红蓝',
        funElement: '小游戏：规律小侦探——找出下一个是谁！歇后语：照葫芦画瓢——按样来',
        gsapAnimations: [
          '[GSAP:sequence|图形依次出现|0.5s|页面加载|power2.out]',
          '[GSAP:scaleIn|规律圈高亮|0.5s|找规律|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|图形重复排列规律|400x300|cartoon|png|图形规律]',
          '[IMG:illustration|圈出重复部分|300x250|cartoon|png|找规律]'
        ],
        content: [
          { type: 'text', content: '小朋友们，今天我们来当规律小侦探！发现图形重复排列的规律，就能猜出下一个！', animationType: 'reveal' },
          { type: 'example', content: '圆形三角形圆形三角形圆形三角形...规律是"圆形三角形"重复，下一个是圆形！', label: '找规律', animationType: 'bounce' },
          { type: 'formula', content: '找规律口诀：圈出一组重复的，按规律接着画！', label: '找规律口诀', animationType: 'counter' },
          { type: 'text', content: '红黄红黄红黄...规律是"红黄"重复；红蓝绿红蓝绿...规律是"红蓝绿"重复。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(摆真实图形卡片)→Pictorial(看图片找规律)→Abstract(说规律接画)，从摆到看到画', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '苏格拉底提问法：引导孩子思考"这组图形有什么特点？"让孩子自己发现重复规律！', label: '提问法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u12l1q1',
            type: 'choice',
            question: '圆形三角形圆形三角形圆形___，下一个是什么？',
            options: ['圆形', '三角形', '正方形', '长方形'],
            answer: '三角形',
            hint: '规律是圆形三角形重复',
            explanation: '规律是"圆形三角形"重复，圆形后面是三角形。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l1q2',
            type: 'fill',
            question: '红黄红黄红黄红___，下一个是___色',
            answer: '黄',
            hint: '规律是红黄重复',
            explanation: '规律是"红黄"重复，红色后面是黄色。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l1q3',
            type: 'choice',
            question: '正方形圆形三角形正方形圆形三角形正方形___，下一个是什么？',
            options: ['正方形', '圆形', '三角形', '长方形'],
            answer: '圆形',
            hint: '规律是正方形圆形三角形重复',
            explanation: '规律是"正方形圆形三角形"重复，正方形后面是圆形。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l1q4',
            type: 'fill',
            question: '红蓝绿红蓝绿红___绿，空格是___色',
            answer: '蓝',
            hint: '规律是红蓝绿重复',
            explanation: '规律是"红蓝绿"重复，红色后面是蓝色。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l1q5',
            type: 'choice',
            question: '【期中真题】圆形圆形三角形圆形圆形三角形圆形___，下一个是什么？',
            options: ['圆形', '三角形', '正方形', '长方形'],
            answer: '圆形',
            hint: '规律是圆形圆形三角形重复',
            explanation: '规律是"圆形圆形三角形"重复，三角形后面又是圆形。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l1q6',
            type: 'fill',
            question: '【期中真题】红红蓝红红蓝红红___，下一个是___色',
            answer: '蓝',
            hint: '规律是红红蓝重复',
            explanation: '规律是"红红蓝"重复，红红后面是蓝色。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l1q7',
            type: 'fill',
            question: '按顺序数：1、2、1、2、1、___，下一个是几？',
            answer: '2',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '规律是"1、2"重复，1后面是2。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u12l2',
        title: '图形规律深化',
        order: 2,
        teachingMethod: 'CPA教学法 + 思维导图法',
        learningObjective: '我能发现更复杂的图形规律，包括颜色和形状的变化规律',
        successCriteria: '①能发现颜色和形状同时变化的规律 ②能按规律接着画',
        iDo: '家长摆出红圆蓝三角红圆蓝三角，示范同时看颜色和形状找规律。【CFU检查理解】家长问"这组图形的规律是什么？颜色和形状怎么变化？"',
        weDo: '【引导式】家长找规律孩子接 → 【半独立】孩子找规律家长接 → 【独立】孩子自己找自己接',
        youDo: '孩子独立发现复杂图形规律，按规律接着画。【费曼小老师时间】把找复杂规律的方法讲给小熊听',
        parentTips: '【家长预习】本课学更复杂的图形规律，同时看颜色和形状的变化。\n共学四步：\n①对话出题：摆红圆蓝方红圆蓝方问"下一个是什么？"\n②孩子应答："红圆蓝方重复，下一个是红圆"\n③答错引导：圈出一组红圆蓝方，让孩子看到颜色和形状同时重复\n④快速检测：接复杂规律3种4种',
        funElement: '小游戏：规律升级——挑战更难的规律！歇后语：青出于蓝——胜于蓝',
        gsapAnimations: [
          '[GSAP:sequence|复杂图形依次出现|0.5s|页面加载|power2.out]',
          '[GSAP:scaleIn|规律圈高亮|0.5s|找规律|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|复杂图形规律|400x300|cartoon|png|复杂规律]',
          '[IMG:illustration|颜色形状变化规律|300x250|cartoon|png|变化规律]'
        ],
        content: [
          { type: 'text', content: '图形规律可以更复杂！有时候颜色和形状同时变化，我们要仔细观察。', animationType: 'reveal' },
          { type: 'example', content: '红圆蓝方红圆蓝方...规律是"红圆蓝方"重复，颜色和形状同时变化！', label: '复杂规律', animationType: 'bounce' },
          { type: 'formula', content: '复杂规律口诀：同时看颜色和形状，圈出一组重复的，按规律接着画！', label: '复杂规律口诀', animationType: 'counter' },
          { type: 'text', content: '有时候规律是递增的：1个圆2个圆3个圆...数量在增加也是一种规律。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(摆真实卡片)→Pictorial(看图找规律)→Abstract(描述规律)，从摆到看到说', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '思维导图法：规律→重复排列（颜色/形状/数量）→递增排列，用导图分类理解不同规律！', label: '思维导图法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u12l2q1',
            type: 'choice',
            question: '红圆蓝方红圆蓝方红___，下一个是什么？',
            options: ['红圆', '蓝方', '红方', '蓝圆'],
            answer: '红圆',
            hint: '规律是红圆蓝方重复',
            explanation: '规律是"红圆蓝方"重复，蓝方后面是红圆。做错是因为找复杂规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l2q2',
            type: 'fill',
            question: '红圆蓝方红圆蓝方红圆___，下一个是___方',
            answer: '蓝',
            hint: '规律是红圆蓝方重复',
            explanation: '规律是"红圆蓝方"重复，红圆后面是蓝方。做错是因为找复杂规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l2q3',
            type: 'choice',
            question: '下列哪种是递增规律？',
            options: ['红黄红黄红黄', '1个圆2个圆3个圆4个圆', '圆形三角形圆形三角形', '红蓝红蓝红蓝'],
            answer: '1个圆2个圆3个圆4个圆',
            hint: '哪种规律数量在增加？',
            explanation: '1个圆2个圆3个圆4个圆，数量递增，是递增规律。做错是因为规律类型还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l2q4',
            type: 'fill',
            question: '1个三角形2个三角形3个三角形___个三角形，下一个是几个？',
            answer: '4',
            hint: '数量递增规律',
            explanation: '规律是1、2、3、4递增，下一个是4个三角形。做错是因为递增规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l2q5',
            type: 'choice',
            question: '【期末真题】红方蓝圆红方蓝圆红方___，下一个是什么？',
            options: ['红方', '蓝圆', '红圆', '蓝方'],
            answer: '蓝圆',
            hint: '规律是红方蓝圆重复',
            explanation: '规律是"红方蓝圆"重复，红方后面是蓝圆。做错是因为找复杂规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l2q6',
            type: 'fill',
            question: '【期末真题】1个圆2个圆3个圆4个圆5个圆___个圆，下一个是几个？',
            answer: '6',
            hint: '数量递增规律',
            explanation: '规律是1、2、3、4、5、6递增，下一个是6个圆。做错是因为递增规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l2q7',
            type: 'fill',
            question: '圆形三角形圆形三角形圆形___，下一个是什么图形？填三角形或圆形',
            answer: '三角形',
            hint: '[图形规律]（数学-找规律-第1课）',
            explanation: '规律是"圆形三角形"重复，圆形后面是三角形。做错是因为找规律还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u12l3',
        title: '数字规律',
        order: 3,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能发现数字排列的规律，按规律填出下一个数',
        successCriteria: '①能发现数字递增递减规律 ②能按规律填出下一个数',
        iDo: '家长写2、4、6、8、10，圈出规律"每次加2"，示范填下一个数12。【CFU检查理解】家长问"这组数字的规律是什么？每次加几？"',
        weDo: '【引导式】家长找规律孩子填 → 【半独立】孩子找规律家长填 → 【独立】孩子自己找自己填',
        youDo: '孩子独立发现数字规律，按规律填数。【费曼小老师时间】把找数字规律的方法讲给小熊听',
        parentTips: '【家长预习】本课学找数字规律，看每次增加或减少多少。\n共学四步：\n①对话出题：写2、4、6、8问"下一个是几？"\n②孩子应答："每次加2，下一个是10"\n③答错引导：算相邻两个数差多少，2到4加2，4到6加2\n④快速检测：填1、3、5、7；填5、10、15',
        funElement: '小游戏：数字密码——破解规律填密码！歇后语：顺藤摸瓜——找到规律',
        gsapAnimations: [
          '[GSAP:counter|数字依次出现|0.5s|页面加载|power2.out]',
          '[GSAP:scaleIn|规律高亮|0.5s|找规律|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|数字排列规律|400x300|cartoon|png|数字规律]',
          '[IMG:illustration|数字递增示意图|300x250|cartoon|png|递增规律]'
        ],
        content: [
          { type: 'text', content: '今天我们来找数字的规律！看看数字是怎么变化的，就能猜出下一个数。', animationType: 'reveal' },
          { type: 'example', content: '2、4、6、8、10...规律是每次加2，下一个是12；1、3、5、7...规律是每次加2。', label: '数字规律', animationType: 'bounce' },
          { type: 'formula', content: '找数字规律口诀：算相邻两数差多少，差一样就按规律填！', label: '数字规律口诀', animationType: 'counter' },
          { type: 'text', content: '5、10、15、20...每次加5；10、9、8、7...每次减1，递减也是规律。', animationType: 'typewriter' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(摆数字卡片)→Pictorial(看数轴找规律)→Abstract(直接填数)，从摆到看到填', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '找数字规律小窍门：算一算相邻两个数差多少，差一样就是等差规律！', label: '找规律窍门', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u12l3q1',
            type: 'fill',
            question: '2、4、6、8、___，下一个是几？',
            answer: '10',
            hint: '每次加2',
            explanation: '规律是每次加2，8+2=10。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l3q2',
            type: 'choice',
            question: '1、3、5、7、___，下一个是几？',
            options: ['6', '8', '9', '10'],
            answer: '9',
            hint: '每次加2',
            explanation: '规律是每次加2，7+2=9。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l3q3',
            type: 'fill',
            question: '5、10、15、20、___，下一个是几？',
            answer: '25',
            hint: '每次加5',
            explanation: '规律是每次加5，20+5=25。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l3q4',
            type: 'choice',
            question: '10、9、8、7、___，下一个是几？',
            options: ['6', '8', '11', '0'],
            answer: '6',
            hint: '每次减1',
            explanation: '规律是每次减1，7-1=6。做错是因为递减规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l3q5',
            type: 'fill',
            question: '【期末真题】2、4、6、8、10、___，下一个是几？',
            answer: '12',
            hint: '每次加2',
            explanation: '规律是每次加2，10+2=12。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l3q6',
            type: 'choice',
            question: '【期末真题】1、4、7、10、___，下一个是几？',
            options: ['11', '12', '13', '14'],
            answer: '13',
            hint: '每次加3',
            explanation: '规律是每次加3，10+3=13。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l3q7',
            type: 'fill',
            question: '按顺序数：1、2、3、4、___，下一个是几？',
            answer: '5',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '按顺序数每次加1，4+1=5。做错是因为数数顺序还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u12l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '形成性评价',
        learningObjective: '我能综合运用找规律的知识完成闯关测试',
        successCriteria: '①闯关正确率达80%以上 ②能发现图形和数字规律并按规律填画',
        iDo: '家长引导梳理思维导图：找规律→图形规律（重复/递增）+数字规律（递增/递减），示范综合判断。【CFU检查理解】家长问"找规律有哪些类型？图形和数字规律怎么找？"',
        weDo: '【引导式】亲子一起做思维导图整理 → 【半独立】家长出题孩子答 → 【独立】孩子独立闯关',
        youDo: '孩子独立完成找规律综合闯关测试。【费曼小老师时间】用思维导图把找规律的知识讲给小熊听',
        parentTips: '【家长预习】本课综合检测找规律知识，用思维导图整理。\n共学四步：\n①对话出题：问"找规律有几种类型？"\n②孩子应答："图形规律和数字规律"\n③答错引导：用思维导图帮孩子梳理知识结构\n④快速检测：找图形规律、找数字规律',
        funElement: '小游戏：规律闯关大挑战！歇后语：顺理成章——水到渠成',
        gsapAnimations: [
          '[GSAP:scaleIn|闯关关卡解锁|0.6s|过关触发|back.out(1.7)]',
          '[GSAP:particleBurst|答对星星爆炸|0.8s|答对触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|找规律闯关场景|400x300|cartoon|png|闯关评价]',
          '[IMG:illustration|找规律思维导图|300x250|cartoon|png|思维导图]'
        ],
        content: [
          { type: 'text', content: '闯关时间到！这一关要综合运用图形规律和数字规律的知识，看看你掌握了多少！', animationType: 'reveal' },
          { type: 'example', content: '思维导图：找规律→图形规律（重复排列/递增排列）+数字规律（递增加/递减减）', label: '思维导图', animationType: 'bounce' },
          { type: 'tip', content: '综合口诀：图形看重复，数字看差值，圈一组重复，算相邻差多少！', label: '小贴士', animationType: 'pulse' },
          { type: 'formula', content: '图形规律：圈重复组接画；数字规律：算相邻差填数', label: '规律总结', animationType: 'counter' },
          { type: 'tip', content: 'RTI分层干预：基础层找简单重复→提高层找复杂规律→挑战层找递增递减，分层闯关逐步提升！', label: '教学方法', animationType: 'pulse' },
          { type: 'text', content: '闯关小窍门：图形先圈重复部分，数字先算相邻差值，规律找到了就不怕！', animationType: 'reveal' }
        ],
        practiceQuestions: [
          {
            id: 'm1u12l4q1',
            type: 'choice',
            question: '圆形三角形圆形三角形圆形___，下一个是什么？',
            options: ['圆形', '三角形', '正方形', '长方形'],
            answer: '三角形',
            hint: '规律是圆形三角形重复',
            explanation: '规律是"圆形三角形"重复，圆形后面是三角形。做错是因为找图形规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l4q2',
            type: 'fill',
            question: '2、4、6、8、___，下一个是几？',
            answer: '10',
            hint: '每次加2',
            explanation: '规律是每次加2，8+2=10。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l4q3',
            type: 'choice',
            question: '找数字规律2、5、8、11、___，下一个是几？',
            options: ['12', '13', '14', '15'],
            answer: '14',
            hint: '每次加3',
            explanation: '规律是每次加3，11+3=14。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l4q4',
            type: 'fill',
            question: '红黄蓝红黄蓝红___蓝，空格是___色',
            answer: '黄',
            hint: '规律是红黄蓝重复',
            explanation: '规律是"红黄蓝"重复，红色后面是黄色。做错是因为找图形规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l4q5',
            type: 'fill',
            question: '【期末真题】3、6、9、12、___，下一个是几？',
            answer: '15',
            hint: '每次加3',
            explanation: '规律是每次加3，12+3=15。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l4q6',
            type: 'choice',
            question: '【期末真题】红方蓝圆红方蓝圆红___，下一个是什么？',
            options: ['红方', '蓝圆', '红圆', '蓝方'],
            answer: '蓝圆',
            hint: '规律是红方蓝圆重复',
            explanation: '规律是"红方蓝圆"重复，红方后面是蓝圆。做错是因为找复杂规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l4q7',
            type: 'fill',
            question: '按规律填数：1、2、3、4、5、___，下一个是几？',
            answer: '6',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '规律是每次加1，5+1=6。做错是因为数数顺序还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm1u12l5',
        title: '综合应用',
        order: 5,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能在生活场景中发现规律，综合运用找规律知识解决实际问题',
        successCriteria: '①能发现生活中的规律 ②能按规律解决实际问题',
        iDo: '家长结合生活中的规律（地砖花纹、窗帘图案、日历日期），示范找规律解决实际问题。【CFU检查理解】家长问"生活中你发现了哪些规律？"',
        weDo: '【引导式】家长说场景孩子找规律 → 【半独立】孩子找规律家长补充 → 【独立】孩子自己发现规律',
        youDo: '孩子独立在生活中发现规律，按规律解决问题。【费曼小老师时间】把生活中的规律讲给小熊听',
        parentTips: '【家长预习】本课综合应用找规律知识到生活中，发现生活中的规律。\n共学四步：\n①对话出题：问"地砖的花纹有什么规律？"\n②孩子应答："红白红白重复排列"\n③答错引导：指着地砖让孩子圈出一组重复的\n④快速检测：找窗帘、地砖、衣服上的规律',
        funElement: '小游戏：生活规律大搜索——找找身边的规律！歇后语：按部就班——有条不紊',
        gsapAnimations: [
          '[GSAP:scaleIn|生活场景出现|0.6s|页面加载|back.out(1.7)]',
          '[GSAP:staggerFrom|规律元素依次出现|0.4s|找规律|elastic.out(1,0.5)]'
        ],
        images: [
          '[IMG:illustration|生活中的规律场景|400x300|cartoon|png|生活应用]',
          '[IMG:illustration|地砖花纹规律|300x250|cartoon|png|花纹规律]'
        ],
        content: [
          { type: 'text', content: '规律在生活中无处不在！地砖花纹、窗帘图案、日历日期，到处都有规律！', animationType: 'reveal' },
          { type: 'example', content: '地砖红白红白红白...规律是"红白"重复；日历1、8、15、22...规律是每次加7！', label: '生活规律', animationType: 'bounce' },
          { type: 'formula', content: '生活规律口诀：先观察找重复，再圈出一组，按规律接下去！', label: '生活口诀', animationType: 'counter' },
          { type: 'text', content: '排队时有规律：男女男女男女...；楼层有规律：1、2、3、4...每层加1。', animationType: 'typewriter' },
          { type: 'tip', content: '芬兰现象式学习：把找规律融入真实生活场景，在地砖、窗帘、日历中发现规律！', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(看真实生活物品)→Pictorial(看图案图片)→Abstract(描述规律)，从实物到图片到描述', label: 'CPA方法', animationType: 'pulse' }
        ],
        practiceQuestions: [
          {
            id: 'm1u12l5q1',
            type: 'choice',
            question: '地砖红白红白红白红___，下一块是什么颜色？',
            options: ['红色', '白色', '蓝色', '黄色'],
            answer: '白色',
            hint: '规律是红白重复',
            explanation: '规律是"红白"重复，红色后面是白色。做错是因为找生活规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l5q2',
            type: 'fill',
            question: '日历上1号、8号、15号、22号，规律是每次加___',
            answer: '7',
            hint: '算相邻两个数差多少',
            explanation: '8-1=7，15-8=7，规律是每次加7。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l5q3',
            type: 'choice',
            question: '排队时男女男女男女男___，下一个是？',
            options: ['男', '女', '都是', '无法判断'],
            answer: '女',
            hint: '规律是男女重复',
            explanation: '规律是"男女"重复，男后面是女。做错是因为找生活规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l5q4',
            type: 'fill',
            question: '楼层1、2、3、4、5、___，下一层是几楼？',
            answer: '6',
            hint: '每次加1',
            explanation: '规律是每次加1，5+1=6。做错是因为找数字规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l5q5',
            type: 'fill',
            question: '【期末真题】窗帘花纹圆形方形圆形方形圆形___，下一个是什么图形？填圆形或方形',
            answer: '方形',
            hint: '规律是圆形方形重复',
            explanation: '规律是"圆形方形"重复，圆形后面是方形。做错是因为找图形规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l5q6',
            type: 'choice',
            question: '【期末真题】日历上星期一、星期二、星期三、星期四、___，下一个是星期几？',
            options: ['星期一', '星期五', '星期日', '星期六'],
            answer: '星期五',
            hint: '星期一到星期日按顺序排列',
            explanation: '星期按顺序排列，星期四后面是星期五。做错是因为顺序规律还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm1u12l5q7',
            type: 'fill',
            question: '按顺序数数：10、11、12、13、___，下一个是几？',
            answer: '14',
            hint: '[数数顺序]（数学-11-20各数的认识-第1课）',
            explanation: '按顺序数每次加1，13+1=14。做错是因为数数顺序还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ]
  }
]
