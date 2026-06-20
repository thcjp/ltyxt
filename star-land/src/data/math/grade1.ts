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
        teachingMethod: 'CPA实物→图示→符号，配合儿歌节奏',
        iDo: '家长用手指逐一点数桌上的水果，大声说出数字，示范数数节奏。',
        weDo: '亲子一起拍手数数，从1数到10，每数一个数拍一下手。',
        youDo: '孩子独立数一数图片中有几只小动物，用手指点数并说出总数。',
        parentTips: '数数时鼓励孩子用手指逐一点，避免跳数或重复数。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u1l1q1',
            type: 'choice',
            question: '🐰🐰🐰🐰🐰 数一数，有几只小兔子？',
            options: ['3只', '4只', '5只', '6只'],
            answer: '5只',
            hint: '用手指一只一只点着数哦',
            explanation: '我们用手指逐一点数，1、2、3、4、5，一共有5只小兔子。'
          },
          {
            id: 'm1u1l1q2',
            type: 'fill',
            question: '从1数到5，3后面是___',
            answer: '4',
            hint: '想一想数数的顺序：1、2、3、？',
            explanation: '数数的顺序是1、2、3、4、5，所以3后面是4。'
          },
          {
            id: 'm1u1l1q3',
            type: 'flashcard',
            question: '看到数字，大声读出来！',
            answer: '7',
            hint: '这是比6大1的数字',
            explanation: '这个数字是7，读作\u201c七\u201d，7棵大树、7朵花。'
          },
          {
            id: 'm1u1l1q4',
            type: 'choice',
            question: '小红有4颗糖，小明比小红多3颗，小明有几颗糖？',
            options: ['5颗', '6颗', '7颗', '8颗'],
            answer: '7颗',
            hint: '先想"比多"是什么意思，再算一算',
            explanation: '"比多"就是更多，4+3=7，小明有7颗糖。'
          },
          {
            id: 'm1u1l1q5',
            type: 'fill',
            question: '从1数到10，5后面第3个数是___',
            answer: '8',
            hint: '5后面是6、7、8...',
            explanation: '5后面第1个是6，第2个是7，第3个是8。'
          },
          {
            id: 'm1u1l1q6',
            type: 'fill',
            question: '【期中真题】☆+3=8，☆=？',
            answer: '5',
            hint: '几加3等于8？反过来想一想',
            explanation: '因为5+3=8，所以☆=5。逆向思考：8-3=5。'
          },
          {
            id: 'm1u1l1q7',
            type: 'fill',
            question: '按顺序填数：5、6、___、8、9',
            answer: '7',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '按顺序数5、6、7、8、9，7在6和8之间。'
          }
        ]
      },
      {
        id: 'm1u1l2',
        title: '比多少',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，一一对应比较法',
        iDo: '家长摆出两排不同数量的积木，用连线方式示范一一对应比较。',
        weDo: '亲子各拿一些糖果，一一配对比较谁的更多，说出"多""少""一样多"。',
        youDo: '孩子独立比较两组物品的数量，圈出较多的一组。',
        parentTips: '教孩子用一一对应的方法比较，不要只凭感觉猜。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u1l2q1',
            type: 'choice',
            question: '左边3个草莓，右边5个草莓，哪边多？',
            options: ['左边多', '右边多', '一样多', '无法比较'],
            answer: '右边多',
            hint: '用一一对应的方法比一比',
            explanation: '3个和5个一一对应后，右边还剩2个，所以右边多。'
          },
          {
            id: 'm1u1l2q2',
            type: 'fill',
            question: '4和4比，它们___多',
            answer: '一样',
            acceptableAnswers: ['同样', '相等', '相同'],
            hint: '两个相同的数比较呢？',
            explanation: '4和4数量相同，所以它们一样多。'
          },
          {
            id: 'm1u1l2q3',
            type: 'flashcard',
            question: '快速判断：5个圆点和3个圆点，哪组更多？',
            answer: '5个圆点',
            hint: '数一数每组的数量',
            explanation: '5比3大，所以5个圆点那组更多。'
          },
          {
            id: 'm1u1l2q4',
            type: 'choice',
            question: '小红有6颗糖，小明有4颗糖，小红比小明多几颗？',
            options: ['1颗', '2颗', '3颗', '4颗'],
            answer: '2颗',
            hint: '用减法算多几个',
            explanation: '6-4=2，小红比小明多2颗糖。'
          },
          {
            id: 'm1u1l2q5',
            type: 'fill',
            question: '△有7个，○有5个，△比○多___个',
            answer: '2',
            hint: '7-5=？',
            explanation: '7-5=2，△比○多2个。'
          },
          {
            id: 'm1u1l2q6',
            type: 'fill',
            question: '☆比△多3个，△有4个，☆有___个',
            answer: '7',
            hint: '先想"多3个"是什么意思',
            explanation: '☆比△多3个，就是4+3=7，☆有7个。'
          },
          {
            id: 'm1u1l2q7',
            type: 'fill',
            question: '从1数到10，第5个数是___',
            answer: '5',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '从1开始数：1、2、3、4、5，第5个数是5。'
          }
        ]
      },
      {
        id: 'm1u1l3',
        title: '排排队',
        order: 3,
        teachingMethod: 'CPA实物操作→图示排列→符号表示',
        iDo: '家长用数字卡片1-10示范从小到大排队，讲解排列规则。',
        weDo: '亲子一起把打乱的数字卡片按顺序排列，互相检查。',
        youDo: '孩子独立将数字按从大到小或从小到大排列。',
        parentTips: '让孩子理解"排在第几个"和"有几个"的区别。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u1l3q1',
            type: 'choice',
            question: '2、4、6、___，下一个应该填什么？',
            options: ['7', '8', '9', '10'],
            answer: '8',
            hint: '看看每次跳了几个数',
            explanation: '2、4、6每次跳2个数，所以6后面是8。'
          },
          {
            id: 'm1u1l3q2',
            type: 'fill',
            question: '从大到小排列：3、9、1、7，排在第二个的是___',
            answer: '7',
            hint: '先从大到小排好，再看第二个',
            explanation: '从大到小排列是9、7、3、1，排在第二个的是7。'
          },
          {
            id: 'm1u1l3q3',
            type: 'flashcard',
            question: '小猫排第3个，它前面有几个小动物？',
            answer: '2',
            hint: '第3个前面有第1个和第2个',
            explanation: '排第3个说明前面有2个，就是第1个和第2个。'
          },
          {
            id: 'm1u1l3q4',
            type: 'choice',
            question: '5、___、9，空格处应该填什么？',
            options: ['6', '7', '8', '10'],
            answer: '7',
            hint: '看看每次跳了几个数',
            explanation: '5到9之间跳2个数，5、7、9，空格处填7。'
          },
          {
            id: 'm1u1l3q5',
            type: 'fill',
            question: '从大到小排列：8、3、6、1，排在第三个的是___',
            answer: '3',
            hint: '先从大到小排好，再看第三个',
            explanation: '从大到小排列是8、6、3、1，排在第三个的是3。'
          },
          {
            id: 'm1u1l3q6',
            type: 'fill',
            question: '一排小朋友排队，小明排第4，小红排第7，小明和小红之间有___人',
            answer: '2',
            hint: '第4和第7之间有几个？',
            explanation: '第4和第7之间有第5和第6，共2人。'
          },
          {
            id: 'm1u1l3q7',
            type: 'choice',
            question: '排队时，小明前面有3人，后面有2人，这排一共有几人？',
            options: ['4人', '5人', '6人', '7人'],
            answer: '6人',
            hint: '[比多少]（数学-数一数-第2课）',
            explanation: '前面3人+小明1人+后面2人=6人，一共6人。'
          }
        ]
      },
      {
        id: 'm1u1l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测本单元知识掌握情况',
        iDo: '家长出题引导，示范答题思路，讲解数数、比多少、排序的综合运用。',
        weDo: '亲子一起完成闯关测试，讨论每道题的解题方法。',
        youDo: '孩子独立完成闯关测试，综合运用数数、比较和排序知识。',
        parentTips: '观察孩子哪类题目容易出错，针对性复习对应课时内容。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u1l4q1',
            type: 'choice',
            question: '从1数到5，一共有几个数？',
            options: ['4个', '5个', '6个', '3个'],
            answer: '5个',
            hint: '1、2、3、4、5，数一数',
            explanation: '1、2、3、4、5，一共5个数。'
          },
          {
            id: 'm1u1l4q2',
            type: 'fill',
            question: '3和5比，___大',
            answer: '5',
            hint: '哪个数排在后面，哪个就大',
            explanation: '5排在3后面，所以5比3大。'
          },
          {
            id: 'm1u1l4q3',
            type: 'choice',
            question: '小明有4颗糖，小红有2颗糖，小明比小红多几颗？',
            options: ['1颗', '2颗', '3颗', '4颗'],
            answer: '2颗',
            hint: '4-2=？',
            explanation: '4-2=2，小明比小红多2颗糖。'
          },
          {
            id: 'm1u1l4q4',
            type: 'fill',
            question: '从大到小排列：2、5、1，排在第二个的是___',
            answer: '2',
            hint: '先从大到小排好再看',
            explanation: '从大到小排列是5、2、1，排在第二个的是2。'
          },
          {
            id: 'm1u1l4q5',
            type: 'fill',
            question: '△有3个，○比△多2个，○有___个',
            answer: '5',
            hint: '3+2=？',
            explanation: '3+2=5，○有5个。'
          },
          {
            id: 'm1u1l4q6',
            type: 'choice',
            question: '一排小朋友排队，小红排第2，小明排第5，小红和小明之间有几人？',
            options: ['2人', '3人', '4人', '5人'],
            answer: '2人',
            hint: '第2和第5之间有第3和第4',
            explanation: '第2和第5之间有第3和第4，共2人。'
          },
          {
            id: 'm1u1l4q7',
            type: 'fill',
            question: '4+1=___',
            answer: '5',
            hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）',
            explanation: '4+1=5，4再多1就是5。'
          }
        ]
      },
      {
        id: 'm1u1l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：家里有3个苹果，妈妈又买了2个，一共有几个？',
        weDo: '亲子一起编生活应用题，互相解答并说出解题思路。',
        youDo: '孩子独立解决生活中的数数、比较、排序问题。',
        parentTips: '鼓励孩子在生活中发现数学问题，如数餐具、比较水果多少等。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u1l5q1',
            type: 'choice',
            question: '餐桌上有3个碗和2双筷子，碗和筷子哪个多？',
            options: ['碗多', '筷子多', '一样多', '无法比较'],
            answer: '碗多',
            hint: '3和2比大小',
            explanation: '3比2大，所以碗比筷子多。'
          },
          {
            id: 'm1u1l5q2',
            type: 'fill',
            question: '小红有5颗糖，吃了2颗，还剩___颗',
            answer: '3',
            hint: '5-2=？',
            explanation: '5-2=3，还剩3颗糖。'
          },
          {
            id: 'm1u1l5q3',
            type: 'choice',
            question: '小明排队买冰淇淋，他前面有2人，后面有3人，这排一共有几人？',
            options: ['4人', '5人', '6人', '7人'],
            answer: '6人',
            hint: '前面2人+小明1人+后面3人',
            explanation: '2+1+3=6，这排一共有6人。'
          },
          {
            id: 'm1u1l5q4',
            type: 'fill',
            question: '从1数到10，比4大比7小的数有___和___（从小到大填）',
            answer: '5和6',
            hint: '4和7之间有哪些数？',
            explanation: '比4大比7小的数是5和6。'
          },
          {
            id: 'm1u1l5q5',
            type: 'fill',
            question: '【期末真题】小红有4朵花，小丽有3朵花，她们一共有___朵花',
            answer: '7',
            hint: '4+3=？',
            explanation: '4+3=7，她们一共有7朵花。'
          },
          {
            id: 'm1u1l5q6',
            type: 'choice',
            question: '【期末真题】5个小朋友排队，小明排第3，他后面有几人？',
            options: ['1人', '2人', '3人', '4人'],
            answer: '2人',
            hint: '5-3=？',
            explanation: '5个小朋友排第3，后面有5-3=2人。'
          },
          {
            id: 'm1u1l5q7',
            type: 'fill',
            question: '2+3=___',
            answer: '5',
            hint: '[加法初体验]（数学-1-5的认识和加减法-第2课）',
            explanation: '2+3=5，2个和3个合在一起是5个。'
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
        teachingMethod: 'CPA实物→图示→数字符号，多感官体验',
        iDo: '家长用手指和实物展示1-5，每个数字配合对应数量的物品。',
        weDo: '亲子一起用手指比划1-5，并用身边的物品摆出对应数量。',
        youDo: '孩子独立看图写出对应的数字1-5。',
        parentTips: '让孩子多用手势和实物感受数字，建立数感。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u2l1q1',
            type: 'choice',
            question: '🌸🌸🌸 数一数，有几朵花？',
            options: ['2朵', '3朵', '4朵', '5朵'],
            answer: '3朵',
            hint: '数一数橙色的花有几朵',
            explanation: '一朵一朵数，1、2、3，一共有3朵花。'
          },
          {
            id: 'm1u2l1q2',
            type: 'fill',
            question: '伸出4根手指，写出这个数字：___',
            answer: '4',
            hint: '比3多1的数字是几？',
            explanation: '伸出4根手指，对应的数字就是4。'
          },
          {
            id: 'm1u2l1q3',
            type: 'flashcard',
            question: '一只手全部手指伸开，这是数字几？',
            answer: '5',
            hint: '一只手全部手指伸开',
            explanation: '一只手5根手指全部伸开，这个数字是5。'
          },
          {
            id: 'm1u2l1q4',
            type: 'choice',
            question: '比3大比5小的数是几？',
            options: ['2', '3', '4', '5'],
            answer: '4',
            hint: '3和5中间的数',
            explanation: '比3大比5小的数是4，3<4<5。'
          },
          {
            id: 'm1u2l1q5',
            type: 'fill',
            question: '2+2=___',
            answer: '4',
            hint: '两组2个合在一起',
            explanation: '2+2=4，两组2个合在一起是4。'
          },
          {
            id: 'm1u2l1q6',
            type: 'fill',
            question: '☆+1=4，☆=___',
            answer: '3',
            hint: '几加1等于4？',
            explanation: '因为3+1=4，所以☆=3。'
          },
          {
            id: 'm1u2l1q7',
            type: 'fill',
            question: '按顺序填数：1、2、___、4、5',
            answer: '3',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '按顺序数1、2、3、4、5，3在2和4之间。'
          }
        ]
      },
      {
        id: 'm1u2l2',
        title: '加法初体验',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，实物合并法',
        iDo: '家长用2个苹果和1个苹果演示合并，说"2加1等于3"。',
        weDo: '亲子各拿一些积木，合在一起数总数，说出加法算式。',
        youDo: '孩子独立看图列加法算式并计算结果。',
        parentTips: '强调"合起来"的含义，加法就是把两组合并在一起。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u2l2q1',
            type: 'choice',
            question: '2+1=？',
            options: ['1', '2', '3', '4'],
            answer: '3',
            hint: '2个和1个合在一起',
            explanation: '2个加1个，合起来数一数：1、2、3，所以2+1=3。'
          },
          {
            id: 'm1u2l2q2',
            type: 'fill',
            question: '1+3=___',
            answer: '4',
            hint: '1个和3个合在一起数',
            explanation: '1个加3个，合起来是4个，所以1+3=4。'
          },
          {
            id: 'm1u2l2q3',
            type: 'flashcard',
            question: '看算式快速说出答案：2+2=？',
            answer: '4',
            hint: '两组2个合在一起',
            explanation: '2+2就是两组2个合在一起，1、2、3、4，等于4。'
          },
          {
            id: 'm1u2l2q4',
            type: 'choice',
            question: '小明有3颗糖，妈妈又给了他2颗，现在有几颗糖？',
            options: ['4颗', '5颗', '6颗', '7颗'],
            answer: '5颗',
            hint: '3颗加2颗',
            explanation: '3+2=5，现在有5颗糖。'
          },
          {
            id: 'm1u2l2q5',
            type: 'fill',
            question: '4+1=___',
            answer: '5',
            hint: '4个加1个',
            explanation: '4+1=5，4个加1个合起来是5。'
          },
          {
            id: 'm1u2l2q6',
            type: 'fill',
            question: '2+□=5，□=___',
            answer: '3',
            hint: '几加2等于5？',
            explanation: '因为3+2=5，所以□=3。'
          },
          {
            id: 'm1u2l2q7',
            type: 'fill',
            question: '一只手伸开是5根手指，弯下2根，还伸着___根',
            answer: '3',
            hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）',
            explanation: '5根弯下2根，还伸着3根，5-2=3。'
          }
        ]
      },
      {
        id: 'm1u2l3',
        title: '减法初体验',
        order: 3,
        teachingMethod: 'CPA实物拿走→图示划掉→符号表示',
        iDo: '家长摆3颗糖，拿走1颗，说"3减1等于2"。',
        weDo: '亲子一起用手指做减法：伸出5根，弯下2根，数剩下的。',
        youDo: '孩子独立看图列减法算式并计算结果。',
        parentTips: '减法就是"拿走""去掉"，用实物演示最直观。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u2l3q1',
            type: 'choice',
            question: '3-1=？',
            options: ['1', '2', '3', '4'],
            answer: '2',
            hint: '3个拿走1个，还剩几个？',
            explanation: '3个拿走1个，还剩2个，所以3-1=2。'
          },
          {
            id: 'm1u2l3q2',
            type: 'fill',
            question: '5-2=___',
            answer: '3',
            hint: '5个去掉2个，数数剩下的',
            explanation: '5个去掉2个，还剩3个，所以5-2=3。'
          },
          {
            id: 'm1u2l3q3',
            type: 'flashcard',
            question: '看算式快速说出答案：4-3=？',
            answer: '1',
            hint: '4个拿走3个',
            explanation: '4个拿走3个，还剩1个，所以4-3=1。'
          },
          {
            id: 'm1u2l3q4',
            type: 'choice',
            question: '盘子里有5块饼干，吃了2块，还剩几块？',
            options: ['2块', '3块', '4块', '5块'],
            answer: '3块',
            hint: '5块拿走2块',
            explanation: '5-2=3，还剩3块饼干。'
          },
          {
            id: 'm1u2l3q5',
            type: 'fill',
            question: '5-3=___',
            answer: '2',
            hint: '5个拿走3个',
            explanation: '5-3=2，5个拿走3个还剩2个。'
          },
          {
            id: 'm1u2l3q6',
            type: 'fill',
            question: '□-2=3，□=___',
            answer: '5',
            hint: '几减2等于3？',
            explanation: '因为5-2=3，所以□=5。'
          },
          {
            id: 'm1u2l3q7',
            type: 'choice',
            question: '3+2=5，那么5-2=？',
            options: ['2', '3', '4', '5'],
            answer: '3',
            hint: '[加法]（数学-1-5的认识和加减法-第2课）',
            explanation: '因为3+2=5，所以5-2=3，用加法帮忙算减法！'
          }
        ]
      },
      {
        id: 'm1u2l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测1-5认识和加减法掌握情况',
        iDo: '家长出题引导，示范认识数字、加法、减法的综合运用思路。',
        weDo: '亲子一起完成闯关测试，讨论每道题的解题方法。',
        youDo: '孩子独立完成闯关测试，综合运用1-5的认识和加减法知识。',
        parentTips: '观察孩子加减法是否混淆，加法是合起来，减法是拿走，帮孩子区分清楚。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u2l4q1',
            type: 'choice',
            question: '2+3=？',
            options: ['4', '5', '6', '3'],
            answer: '5',
            hint: '2个和3个合在一起',
            explanation: '2+3=5，2个和3个合在一起是5个。'
          },
          {
            id: 'm1u2l4q2',
            type: 'fill',
            question: '5-1=___',
            answer: '4',
            hint: '5个拿走1个',
            explanation: '5-1=4，5个拿走1个还剩4个。'
          },
          {
            id: 'm1u2l4q3',
            type: 'choice',
            question: '小明有3颗糖，妈妈又给了他2颗，现在有几颗？',
            options: ['4颗', '5颗', '6颗', '3颗'],
            answer: '5颗',
            hint: '"又给了"用加法',
            explanation: '3+2=5，"又给了"是合起来，用加法。'
          },
          {
            id: 'm1u2l4q4',
            type: 'fill',
            question: '4-3=___',
            answer: '1',
            hint: '4个拿走3个',
            explanation: '4-3=1，4个拿走3个还剩1个。'
          },
          {
            id: 'm1u2l4q5',
            type: 'fill',
            question: '□+2=4，□=___',
            answer: '2',
            hint: '几加2等于4？',
            explanation: '2+2=4，所以□=2。'
          },
          {
            id: 'm1u2l4q6',
            type: 'choice',
            question: '小红有5朵花，送给小明2朵，又得到1朵，现在有几朵？',
            options: ['3朵', '4朵', '5朵', '2朵'],
            answer: '4朵',
            hint: '先减后加',
            explanation: '5-2=3，3+1=4，先拿走2朵再得到1朵，现在有4朵。'
          },
          {
            id: 'm1u2l4q7',
            type: 'fill',
            question: '3的相邻数是2和___',
            answer: '4',
            hint: '[数数顺序]（数学-数一数-第1课）',
            explanation: '3的前面是2，后面是4，3的相邻数是2和4。'
          }
        ]
      },
      {
        id: 'm1u2l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：盘子里有4块饼干，吃了1块，还剩几块？',
        weDo: '亲子一起编1-5加减法生活应用题，互相解答。',
        youDo: '孩子独立解决生活中的1-5加减法问题。',
        parentTips: '让孩子在吃饭、玩玩具时练习加减法，如数碗筷、分糖果等。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u2l5q1',
            type: 'choice',
            question: '盘子里有2块蛋糕，妈妈又放了3块，一共有几块？',
            options: ['4块', '5块', '6块', '3块'],
            answer: '5块',
            hint: '"又放了"用加法',
            explanation: '2+3=5，一共有5块蛋糕。'
          },
          {
            id: 'm1u2l5q2',
            type: 'fill',
            question: '小红有5颗糖，吃了3颗，还剩___颗',
            answer: '2',
            hint: '"吃了"用减法',
            explanation: '5-3=2，还剩2颗糖。'
          },
          {
            id: 'm1u2l5q3',
            type: 'choice',
            question: '树上有4只鸟，飞走了1只，还剩几只？',
            options: ['2只', '3只', '4只', '5只'],
            answer: '3只',
            hint: '"飞走了"用减法',
            explanation: '4-1=3，还剩3只鸟。'
          },
          {
            id: 'm1u2l5q4',
            type: 'fill',
            question: '小明有1支铅笔，又买了4支，现在有___支',
            answer: '5',
            hint: '"又买了"用加法',
            explanation: '1+4=5，现在有5支铅笔。'
          },
          {
            id: 'm1u2l5q5',
            type: 'fill',
            question: '【期末真题】小红有3个苹果，小明有2个苹果，他们一共有___个苹果',
            answer: '5',
            hint: '3+2=？',
            explanation: '3+2=5，他们一共有5个苹果。'
          },
          {
            id: 'm1u2l5q6',
            type: 'choice',
            question: '【期中真题】5个小朋友在玩，走了2个，还剩几个？',
            options: ['2个', '3个', '4个', '5个'],
            answer: '3个',
            hint: '5-2=？',
            explanation: '5-2=3，还剩3个小朋友。'
          },
          {
            id: 'm1u2l5q7',
            type: 'fill',
            question: '4-2=___',
            answer: '2',
            hint: '[减法初体验]（数学-1-5的认识和加减法-第3课）',
            explanation: '4-2=2，4个拿走2个还剩2个。'
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
        teachingMethod: 'CPA实物→图示→符号，双手操作法',
        iDo: '家长用双手手指展示6-10，每增加一个数字多伸一根手指。',
        weDo: '亲子一起用双手比划6-10，并用积木摆出对应数量。',
        youDo: '孩子独立看图写出数字6-10，并摆出对应数量。',
        parentTips: '6-10需要用到两只手，帮孩子理解"5再多几个"的思路。',
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
          { type: 'example', content: '⭐⭐⭐⭐⭐⭐=6，⭐⭐⭐⭐⭐⭐⭐=7，⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐=10', label: '数一数', animationType: 'bounce' },
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
        ],
        practiceQuestions: [
          {
            id: 'm1u3l1q1',
            type: 'choice',
            question: '比5多2的数是几？',
            options: ['6', '7', '8', '9'],
            answer: '7',
            hint: '5根手指再多伸2根',
            explanation: '5再多2就是7，一只手5根加另一只手2根，一共7根。'
          },
          {
            id: 'm1u3l1q2',
            type: 'fill',
            question: '9后面是___',
            answer: '10',
            hint: '9再多1是几？',
            explanation: '9再多1就是10，10是两位数，由1和0组成。'
          },
          {
            id: 'm1u3l1q3',
            type: 'flashcard',
            question: '比7多1，比9少1，这是数字几？',
            answer: '8',
            hint: '比7多1，比9少1',
            explanation: '这个数字是8，两只手伸出8根手指。'
          },
          {
            id: 'm1u3l1q4',
            type: 'choice',
            question: '比8小比6大的数是几？',
            options: ['5', '6', '7', '8'],
            answer: '7',
            hint: '6和8中间的数',
            explanation: '比6大比8小的数是7，6<7<8。'
          },
          {
            id: 'm1u3l1q5',
            type: 'fill',
            question: '5+4=___',
            answer: '9',
            hint: '5再多4个',
            explanation: '5+4=9，一只手5根加另一手4根=9根。'
          },
          {
            id: 'm1u3l1q6',
            type: 'fill',
            question: '☆+2=8，☆=___',
            answer: '6',
            hint: '几加2等于8？',
            explanation: '因为6+2=8，所以☆=6，逆向思考：8-2=6。'
          },
          {
            id: 'm1u3l1q7',
            type: 'fill',
            question: '5再多1是6，那5再多2是___',
            answer: '7',
            hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）',
            explanation: '5+2=7，5再多2就是7。'
          }
        ]
      },
      {
        id: 'm1u3l2',
        title: '进阶加减',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，数轴辅助法',
        iDo: '家长在数轴上演示6+3，从6开始往右跳3格到9。',
        weDo: '亲子一起用数轴做加减法，一个出题一个跳数轴。',
        youDo: '孩子独立在数轴上计算6-10的加减法。',
        parentTips: '数轴是很好的工具，往右加、往左减，帮孩子建立方向感。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u3l2q1',
            type: 'choice',
            question: '6+3=？',
            options: ['7', '8', '9', '10'],
            answer: '9',
            hint: '从6开始往右跳3格',
            explanation: '从6往右跳3格：7、8、9，所以6+3=9。'
          },
          {
            id: 'm1u3l2q2',
            type: 'fill',
            question: '10-4=___',
            answer: '6',
            hint: '从10往左跳4格',
            explanation: '从10往左跳4格：9、8、7、6，所以10-4=6。'
          },
          {
            id: 'm1u3l2q3',
            type: 'flashcard',
            question: '看算式快速说出答案：8-5=？',
            answer: '3',
            hint: '从8往左跳5格',
            explanation: '8往左跳5格：7、6、5、4、3，所以8-5=3。'
          },
          {
            id: 'm1u3l2q4',
            type: 'choice',
            question: '小明有7颗糖，又得到3颗，现在有几颗？',
            options: ['8颗', '9颗', '10颗', '11颗'],
            answer: '10颗',
            hint: '7+3=？',
            explanation: '7+3=10，从7往右跳3格到10。'
          },
          {
            id: 'm1u3l2q5',
            type: 'fill',
            question: '9-6=___',
            answer: '3',
            hint: '从9往左跳6格',
            explanation: '9往左跳6格：8、7、6、5、4、3，所以9-6=3。'
          },
          {
            id: 'm1u3l2q6',
            type: 'fill',
            question: '8+□=10，□=___',
            answer: '2',
            hint: '8还差几到10？',
            explanation: '8+2=10，8还差2到10，这就是凑十法的思路！'
          },
          {
            id: 'm1u3l2q7',
            type: 'fill',
            question: '比5多3的数是___',
            answer: '8',
            hint: '[6-10的认识]（数学-6-10的认识和加减法-第1课）',
            explanation: '5+3=8，比5多3就是8。'
          }
        ]
      },
      {
        id: 'm1u3l3',
        title: '凑十法初探',
        order: 3,
        teachingMethod: 'CPA十格阵操作→图示凑十→符号推理',
        iDo: '家长用十格阵演示：8个格子已满，再加2个凑成10。',
        weDo: '亲子一起用十格阵凑十，找出谁和谁能凑成10。',
        youDo: '孩子独立填写凑十的配对：1和9、2和8……',
        parentTips: '凑十法是以后计算的基础，多练习1-9的凑十配对。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u3l3q1',
            type: 'choice',
            question: '7和几凑成10？',
            options: ['2', '3', '4', '5'],
            answer: '3',
            hint: '7还差几个到10？',
            explanation: '7还差3个到10，所以7和3凑成10。'
          },
          {
            id: 'm1u3l3q2',
            type: 'fill',
            question: '6+___=10',
            answer: '4',
            hint: '6还差几个到10？',
            explanation: '6还差4个到10，所以6+4=10。'
          },
          {
            id: 'm1u3l3q3',
            type: 'flashcard',
            question: '快速说出凑十伙伴：9的好朋友是谁？',
            answer: '1',
            hint: '9还差几个到10？',
            explanation: '9还差1个到10，所以9的好朋友是1，9+1=10。'
          },
          {
            id: 'm1u3l3q4',
            type: 'choice',
            question: '8和几凑成10？',
            options: ['1', '2', '3', '4'],
            answer: '2',
            hint: '8还差几到10？',
            explanation: '8还差2到10，所以8和2凑成10。'
          },
          {
            id: 'm1u3l3q5',
            type: 'fill',
            question: '5+___=10',
            answer: '5',
            hint: '5还差几到10？',
            explanation: '5+5=10，5和5凑成10。'
          },
          {
            id: 'm1u3l3q6',
            type: 'choice',
            question: '7+3=10，那么10-7=？',
            options: ['2', '3', '4', '5'],
            answer: '3',
            hint: '凑十的好朋友反过来想',
            explanation: '7+3=10，所以10-7=3，凑十的好朋友也能帮我们做减法！'
          },
          {
            id: 'm1u3l3q7',
            type: 'fill',
            question: '6+4=10，那么10-6=___',
            answer: '4',
            hint: '[6-10加减法]（数学-6-10的认识和加减法-第2课）',
            explanation: '6+4=10，所以10-6=4，加法和减法是好朋友！'
          }
        ]
      },
      {
        id: 'm1u3l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测6-10认识和加减法掌握情况',
        iDo: '家长出题引导，示范6-10的认识、进阶加减和凑十法的综合运用。',
        weDo: '亲子一起完成闯关测试，讨论每道题的解题方法。',
        youDo: '孩子独立完成闯关测试，综合运用6-10的认识和加减法知识。',
        parentTips: '重点检查凑十法是否掌握，凑十配对要熟记：1和9、2和8、3和7、4和6、5和5。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u3l4q1',
            type: 'choice',
            question: '7+3=？',
            options: ['9', '10', '11', '8'],
            answer: '10',
            hint: '7和3是凑十好朋友',
            explanation: '7+3=10，7和3凑成10。'
          },
          {
            id: 'm1u3l4q2',
            type: 'fill',
            question: '10-6=___',
            answer: '4',
            hint: '从10往左跳6格',
            explanation: '10-6=4，从10往左跳6格到4。'
          },
          {
            id: 'm1u3l4q3',
            type: 'choice',
            question: '8和几凑成10？',
            options: ['1', '2', '3', '4'],
            answer: '2',
            hint: '8还差几到10？',
            explanation: '8还差2到10，所以8和2凑成10。'
          },
          {
            id: 'm1u3l4q4',
            type: 'fill',
            question: '9+□=10，□=___',
            answer: '1',
            hint: '9还差几到10？',
            explanation: '9+1=10，9还差1到10。'
          },
          {
            id: 'm1u3l4q5',
            type: 'fill',
            question: '7+5=___',
            answer: '12',
            hint: '见7想3，5拆成3和2',
            explanation: '5拆成3和2，7+3=10，10+2=12。'
          },
          {
            id: 'm1u3l4q6',
            type: 'choice',
            question: '小明有8颗糖，小红给了他5颗，一共有几颗？用凑十法怎么算？',
            options: ['11颗', '12颗', '13颗', '14颗'],
            answer: '13颗',
            hint: '见8想2，5拆成2和3',
            explanation: '5拆成2和3，8+2=10，10+3=13。'
          },
          {
            id: 'm1u3l4q7',
            type: 'fill',
            question: '5+3=___',
            answer: '8',
            hint: '[1-5加减法]（数学-1-5的认识和加减法-第2课）',
            explanation: '5+3=8，5再多3就是8。'
          }
        ]
      },
      {
        id: 'm1u3l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：小明有7颗糖，妈妈又给了他4颗，一共有几颗？',
        weDo: '亲子一起编6-10加减法生活应用题，互相解答。',
        youDo: '孩子独立解决生活中的6-10加减法问题。',
        parentTips: '鼓励孩子用凑十法解决生活中的加法问题，说出凑十的过程。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u3l5q1',
            type: 'choice',
            question: '教室里有6个男生和5个女生，一共有几个小朋友？',
            options: ['10个', '11个', '12个', '9个'],
            answer: '11个',
            hint: '6+5=？用凑十法',
            explanation: '5拆成4和1，6+4=10，10+1=11个。'
          },
          {
            id: 'm1u3l5q2',
            type: 'fill',
            question: '妈妈买了10个苹果，吃了3个，还剩___个',
            answer: '7',
            hint: '10-3=？',
            explanation: '10-3=7，还剩7个苹果。'
          },
          {
            id: 'm1u3l5q3',
            type: 'choice',
            question: '小红有9颗星，小明有6颗星，他们一共有几颗星？',
            options: ['14颗', '15颗', '16颗', '13颗'],
            answer: '15颗',
            hint: '9+6=？用凑十法',
            explanation: '6拆成1和5，9+1=10，10+5=15颗。'
          },
          {
            id: 'm1u3l5q4',
            type: 'fill',
            question: '停车场有10辆车，开走了7辆，还剩___辆',
            answer: '3',
            hint: '10-7=？',
            explanation: '10-7=3，还剩3辆车。'
          },
          {
            id: 'm1u3l5q5',
            type: 'fill',
            question: '【期末真题】8+7=___',
            answer: '15',
            hint: '见8想2，7拆成2和5',
            explanation: '7拆成2和5，8+2=10，10+5=15。'
          },
          {
            id: 'm1u3l5q6',
            type: 'choice',
            question: '【期中真题】比5多4的数是几？',
            options: ['8', '9', '10', '7'],
            answer: '9',
            hint: '5+4=？',
            explanation: '5+4=9，比5多4的数是9。'
          },
          {
            id: 'm1u3l5q7',
            type: 'fill',
            question: '3+2=___',
            answer: '5',
            hint: '[1-5加减法]（数学-1-5的认识和加减法-第2课）',
            explanation: '3+2=5，3个和2个合在一起是5个。'
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
        teachingMethod: 'CPA捆小棒→图示位值→符号读写',
        iDo: '家长用小棒演示：1捆（10根）+1根=11，讲解十位和个位。',
        weDo: '亲子一起用小棒摆出11-20，说出"1个十和几个一"。',
        youDo: '孩子独立看小棒图写出11-20的数字。',
        parentTips: '重点理解"10根捆成1捆"的概念，这是位值的基础。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u4l1q1',
            type: 'choice',
            question: '1个十和3个一组成几？',
            options: ['12', '13', '14', '31'],
            answer: '13',
            hint: '1个十是10，再加3',
            explanation: '1个十是10，3个一是3，10+3=13。'
          },
          {
            id: 'm1u4l1q2',
            type: 'fill',
            question: '15里面有1个十和几个一？填数字',
            answer: '5',
            hint: '十位上是1，个位上是几？',
            explanation: '15的十位是1，个位是5，所以15里面有1个十和5个一。'
          },
          {
            id: 'm1u4l1q3',
            type: 'flashcard',
            question: '数一数小棒：||||||||||||||||| 快速说出数字！',
            answer: '17',
            hint: '1捆加7根',
            explanation: '1捆是10根，加7根散的，一共17根，所以是17。'
          },
          {
            id: 'm1u4l1q4',
            type: 'choice',
            question: '1个十和6个一组成几？',
            options: ['15', '16', '17', '61'],
            answer: '16',
            hint: '1个十是10，再加6',
            explanation: '1个十是10，6个一是6，10+6=16。'
          },
          {
            id: 'm1u4l1q5',
            type: 'fill',
            question: '18里面有1个十和___个一',
            answer: '8',
            hint: '18的个位是几？',
            explanation: '18的十位是1，个位是8，所以18里面有1个十和8个一。'
          },
          {
            id: 'm1u4l1q6',
            type: 'fill',
            question: '1个十和5个一，再加上2个一，是___',
            answer: '17',
            hint: '先想15再加2',
            explanation: '1个十和5个一是15，15+2=17。'
          },
          {
            id: 'm1u4l1q7',
            type: 'fill',
            question: '8+2=___，这就是凑十法',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '8+2=10，8和2是凑十好朋友！'
          }
        ]
      },
      {
        id: 'm1u4l2',
        title: '十和几',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，位值表操作法',
        iDo: '家长在位值表上摆出数字，讲解十位和个位各表示什么。',
        weDo: '亲子一起在位值表上摆数字，互相出题猜数字。',
        youDo: '孩子独立根据位值表上的数字写出对应的数。',
        parentTips: '强调十位上的1表示1个十（10），不是1个一。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u4l2q1',
            type: 'choice',
            question: '十位上是1，个位上是8，这个数是？',
            options: ['18', '81', '8', '108'],
            answer: '18',
            hint: '十位1表示10，个位8表示8',
            explanation: '十位1表示1个十（10），个位8表示8个一，10+8=18。'
          },
          {
            id: 'm1u4l2q2',
            type: 'fill',
            question: '2个十是___',
            answer: '20',
            hint: '2个十就是10+10',
            explanation: '2个十就是10+10=20，个位上是0。'
          },
          {
            id: 'm1u4l2q3',
            type: 'flashcard',
            question: '十位是1，个位是0，这是什么数？',
            answer: '10',
            hint: '1个十加0个一',
            explanation: '1个十加0个一就是10，这是最小的两位数。'
          },
          {
            id: 'm1u4l2q4',
            type: 'choice',
            question: '一个数的十位是1，个位是9，这个数是？',
            options: ['19', '91', '18', '9'],
            answer: '19',
            hint: '十位1表示10，个位9表示9',
            explanation: '十位1表示1个十（10），个位9表示9个一，10+9=19。'
          },
          {
            id: 'm1u4l2q5',
            type: 'fill',
            question: '十位是1，个位是4，这个数是___',
            answer: '14',
            hint: '1个十加4个一',
            explanation: '1个十加4个一，10+4=14。'
          },
          {
            id: 'm1u4l2q6',
            type: 'fill',
            question: '15的十位是___，个位是5',
            answer: '1',
            hint: '15是十几，十位上是几？',
            explanation: '15的十位是1，表示1个十，个位是5，表示5个一。'
          },
          {
            id: 'm1u4l2q7',
            type: 'fill',
            question: '1个十和3个一组成___',
            answer: '13',
            hint: '[11-20的认识]（数学-11-20各数的认识-第1课）',
            explanation: '1个十和3个一，10+3=13。'
          }
        ]
      },
      {
        id: 'm1u4l3',
        title: '20以内不进位加法',
        order: 3,
        teachingMethod: 'CPA小棒操作→图示计算→符号竖式',
        iDo: '家长用小棒演示12+3：1捆2根+3根=1捆5根=15。',
        weDo: '亲子一起用小棒做十几加几的加法，说出计算过程。',
        youDo: '孩子独立计算20以内不进位加法。',
        parentTips: '不进位加法只加个位，十位不变，让孩子理解这个规律。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u4l3q1',
            type: 'choice',
            question: '11+5=？',
            options: ['15', '16', '17', '51'],
            answer: '16',
            hint: '十位1不变，个位1+5',
            explanation: '十位1不变，个位1+5=6，所以11+5=16。'
          },
          {
            id: 'm1u4l3q2',
            type: 'fill',
            question: '14+3=___',
            answer: '17',
            hint: '个位4+3等于几？',
            explanation: '十位1不变，个位4+3=7，所以14+3=17。'
          },
          {
            id: 'm1u4l3q3',
            type: 'flashcard',
            question: '快速计算：13+6=？',
            answer: '19',
            hint: '个位3+6',
            explanation: '十位1不变，个位3+6=9，所以13+6=19。'
          },
          {
            id: 'm1u4l3q4',
            type: 'choice',
            question: '小明有12本书，又买了5本，现在有几本？',
            options: ['15本', '16本', '17本', '18本'],
            answer: '17本',
            hint: '12+5=？',
            explanation: '十位1不变，个位2+5=7，12+5=17。'
          },
          {
            id: 'm1u4l3q5',
            type: 'fill',
            question: '15+3=___',
            answer: '18',
            hint: '个位5+3',
            explanation: '十位1不变，个位5+3=8，15+3=18。'
          },
          {
            id: 'm1u4l3q6',
            type: 'fill',
            question: '12+4=16，那么16-4=___',
            answer: '12',
            hint: '加法和减法是逆运算',
            explanation: '12+4=16，所以16-4=12，用加法帮忙算减法。'
          },
          {
            id: 'm1u4l3q7',
            type: 'fill',
            question: '十位是1，个位是7，这个数是___',
            answer: '17',
            hint: '[位值表]（数学-11-20各数的认识-第2课）',
            explanation: '十位1表示10，个位7表示7，10+7=17。'
          }
        ]
      },
      {
        id: 'm1u4l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测11-20认识和加减法掌握情况',
        iDo: '家长出题引导，示范11-20的认识、位值表和不进位加法的综合运用。',
        weDo: '亲子一起完成闯关测试，讨论每道题的解题方法。',
        youDo: '孩子独立完成闯关测试，综合运用11-20的认识和不进位加法知识。',
        parentTips: '重点检查位值概念是否理解，十位上的1表示10不是1，这是关键。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u4l4q1',
            type: 'choice',
            question: '1个十和8个一组成几？',
            options: ['16', '17', '18', '19'],
            answer: '18',
            hint: '10+8=？',
            explanation: '1个十是10，8个一是8，10+8=18。'
          },
          {
            id: 'm1u4l4q2',
            type: 'fill',
            question: '16里面有1个十和___个一',
            answer: '6',
            hint: '16的个位是几？',
            explanation: '16的十位是1，个位是6，所以16里面有1个十和6个一。'
          },
          {
            id: 'm1u4l4q3',
            type: 'choice',
            question: '十位是1，个位是3，这个数是？',
            options: ['12', '13', '14', '31'],
            answer: '13',
            hint: '10+3=？',
            explanation: '十位1表示10，个位3表示3，10+3=13。'
          },
          {
            id: 'm1u4l4q4',
            type: 'fill',
            question: '12+5=___',
            answer: '17',
            hint: '十位1不变，个位2+5',
            explanation: '十位1不变，个位2+5=7，12+5=17。'
          },
          {
            id: 'm1u4l4q5',
            type: 'fill',
            question: '19的十位是___，个位是9',
            answer: '1',
            hint: '19是十几，十位是几？',
            explanation: '19的十位是1，表示1个十。'
          },
          {
            id: 'm1u4l4q6',
            type: 'choice',
            question: '小红有14颗糖，小明比她多5颗，小明有几颗？',
            options: ['18颗', '19颗', '20颗', '17颗'],
            answer: '19颗',
            hint: '14+5=？',
            explanation: '14+5=19，十位1不变，个位4+5=9。'
          },
          {
            id: 'm1u4l4q7',
            type: 'fill',
            question: '7+3=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '7+3=10，7和3是凑十好朋友。'
          }
        ]
      },
      {
        id: 'm1u4l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：书架上有12本书，又放了6本，现在有几本？',
        weDo: '亲子一起编11-20加减法生活应用题，互相解答。',
        youDo: '孩子独立解决生活中的11-20加减法问题。',
        parentTips: '让孩子在生活中找十几的数字，如页码、门牌号、楼层等，加深对11-20的理解。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u4l5q1',
            type: 'choice',
            question: '小明看一本书，今天从第11页看到第18页，他今天看了几页？',
            options: ['7页', '8页', '9页', '18页'],
            answer: '8页',
            hint: '18-11+1=？',
            explanation: '从11页到18页，18-11+1=8页。'
          },
          {
            id: 'm1u4l5q2',
            type: 'fill',
            question: '教室里有14个男生和5个女生，一共有___个小朋友',
            answer: '19',
            hint: '14+5=？',
            explanation: '14+5=19，十位1不变，个位4+5=9。'
          },
          {
            id: 'm1u4l5q3',
            type: 'choice',
            question: '停车场有17辆车，开走了5辆，还剩几辆？',
            options: ['11辆', '12辆', '13辆', '14辆'],
            answer: '12辆',
            hint: '17-5=？',
            explanation: '17-5=12，十位1不变，个位7-5=2。'
          },
          {
            id: 'm1u4l5q4',
            type: 'fill',
            question: '小红有11颗糖，妈妈又给了她8颗，现在有___颗',
            answer: '19',
            hint: '11+8=？',
            explanation: '11+8=19，十位1不变，个位1+8=9。'
          },
          {
            id: 'm1u4l5q5',
            type: 'fill',
            question: '【期末真题】1个十和5个一组成___',
            answer: '15',
            hint: '10+5=？',
            explanation: '1个十和5个一，10+5=15。'
          },
          {
            id: 'm1u4l5q6',
            type: 'choice',
            question: '【期末真题】十位上是1，个位上是2，这个数是？',
            options: ['12', '21', '11', '13'],
            answer: '12',
            hint: '十位1表示10，个位2表示2',
            explanation: '十位1表示10，个位2表示2，10+2=12。'
          },
          {
            id: 'm1u4l5q7',
            type: 'fill',
            question: '6+4=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '6+4=10，6和4是凑十好朋友。'
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
        teachingMethod: 'CPA凑十法操作→图示拆分→符号推理',
        iDo: '家长演示9+4：把4拆成1和3，9+1=10，10+3=13。',
        weDo: '亲子一起用小棒做9加几，练习"见9想1"的凑十法。',
        youDo: '孩子独立用凑十法计算9加几的进位加法。',
        parentTips: '9加几的关键是"见9想1"，从另一个数里拿1给9凑成10。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u5l1q1',
            type: 'choice',
            question: '9+5=？',
            options: ['13', '14', '15', '16'],
            answer: '14',
            hint: '见9想1，5拆成1和4',
            explanation: '5拆成1和4，9+1=10，10+4=14。'
          },
          {
            id: 'm1u5l1q2',
            type: 'fill',
            question: '9+7=___',
            answer: '16',
            hint: '7拆成1和几？',
            explanation: '7拆成1和6，9+1=10，10+6=16。'
          },
          {
            id: 'm1u5l1q3',
            type: 'flashcard',
            question: '快速计算：9+8=？',
            answer: '17',
            hint: '见9想1，8拆成1和7',
            explanation: '8拆成1和7，9+1=10，10+7=17。'
          },
          {
            id: 'm1u5l1q4',
            type: 'choice',
            question: '【期末真题】小红折了9颗星，小丽折的和小红同样多，她们一共折了多少颗星？',
            options: ['9', '18', '16', '10'],
            answer: '18',
            hint: '同样多就是9+9',
            explanation: '小丽也折了9颗，9+9=18颗。'
          },
          {
            id: 'm1u5l1q5',
            type: 'fill',
            question: '【期末真题】9+2=___',
            answer: '11',
            hint: '见9想1，2拆成1和1',
            explanation: '9+2=11，这是期末常考的凑十法计算题！'
          },
          {
            id: 'm1u5l1q6',
            type: 'fill',
            question: '【期末真题】11+5=___',
            answer: '16',
            hint: '十位1不变，个位1+5',
            explanation: '11+5=16，不进位加法，十位不变个位加！'
          },
          {
            id: 'm1u5l1q7',
            type: 'fill',
            question: '【期末真题】16-4=___',
            answer: '12',
            hint: '[11-20的认识]（数学-11-20各数的认识-第1课）',
            explanation: '16-4=12，不退位减法，十位不变个位减！'
          }
        ]
      },
      {
        id: 'm1u5l2',
        title: '876加几',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，凑十法迁移',
        iDo: '家长演示8+5：把5拆成2和3，8+2=10，10+3=13。',
        weDo: '亲子一起练习8、7、6加几，总结"见几想几"的规律。',
        youDo: '孩子独立用凑十法计算8、7、6加几。',
        parentTips: '见8想2、见7想3、见6想4，帮孩子记住凑十口诀。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u5l2q1',
            type: 'choice',
            question: '8+6=？',
            options: ['12', '13', '14', '15'],
            answer: '14',
            hint: '见8想2，6拆成2和4',
            explanation: '6拆成2和4，8+2=10，10+4=14。'
          },
          {
            id: 'm1u5l2q2',
            type: 'fill',
            question: '7+8=___',
            answer: '15',
            hint: '见7想3，8拆成3和几？',
            explanation: '8拆成3和5，7+3=10，10+5=15。'
          },
          {
            id: 'm1u5l2q3',
            type: 'flashcard',
            question: '快速计算：6+9=？',
            answer: '15',
            hint: '见6想4，9拆成4和5',
            explanation: '9拆成4和5，6+4=10，10+5=15。'
          },
          {
            id: 'm1u5l2q4',
            type: 'choice',
            question: '小红有8朵花，小丽给了她5朵，一共有几朵？',
            options: ['12朵', '13朵', '14朵', '15朵'],
            answer: '13朵',
            hint: '8+5=？用凑十法',
            explanation: '5拆成2和3，8+2=10，10+3=13。'
          },
          {
            id: 'm1u5l2q5',
            type: 'fill',
            question: '7+6=___',
            answer: '13',
            hint: '见7想3，6拆成3和3',
            explanation: '6拆成3和3，7+3=10，10+3=13。'
          },
          {
            id: 'm1u5l2q6',
            type: 'fill',
            question: '8+☆=15，☆-3=___',
            answer: '4',
            hint: '先算☆等于几',
            explanation: '8+7=15，所以☆=7，7-3=4。'
          },
          {
            id: 'm1u5l2q7',
            type: 'fill',
            question: '9+5=___',
            answer: '14',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+5=14，见9想1，5拆成1和4，9+1=10，10+4=14。'
          }
        ]
      },
      {
        id: 'm1u5l3',
        title: '综合练习',
        order: 3,
        teachingMethod: '游戏化练习，闯关模式',
        iDo: '家长出几道混合进位加法题，示范快速凑十的思路。',
        weDo: '亲子一起做进位加法闯关，计时挑战看谁算得快。',
        youDo: '孩子独立完成综合练习题，巩固进位加法。',
        parentTips: '速度不重要，凑十思路正确才重要，鼓励孩子说出过程。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u5l3q1',
            type: 'choice',
            question: '9+6=？',
            options: ['13', '14', '15', '16'],
            answer: '15',
            hint: '用凑十法：见9想1',
            explanation: '6拆成1和5，9+1=10，10+5=15。'
          },
          {
            id: 'm1u5l3q2',
            type: 'fill',
            question: '8+7=___',
            answer: '15',
            hint: '见8想2，7拆成2和5',
            explanation: '7拆成2和5，8+2=10，10+5=15。'
          },
          {
            id: 'm1u5l3q3',
            type: 'flashcard',
            question: '快速计算：7+5=？',
            answer: '12',
            hint: '见7想3，5拆成3和2',
            explanation: '5拆成3和2，7+3=10，10+2=12。'
          },
          {
            id: 'm1u5l3q4',
            type: 'choice',
            question: '一盒铅笔有8支，又买了6支，一共有几支？',
            options: ['12支', '13支', '14支', '15支'],
            answer: '14支',
            hint: '8+6=？',
            explanation: '6拆成2和4，8+2=10，10+4=14。'
          },
          {
            id: 'm1u5l3q5',
            type: 'fill',
            question: '6+8=___',
            answer: '14',
            hint: '见6想4，8拆成4和4',
            explanation: '8拆成4和4，6+4=10，10+4=14。'
          },
          {
            id: 'm1u5l3q6',
            type: 'fill',
            question: '9+3=12，12+5=___',
            answer: '17',
            hint: '先凑十再加',
            explanation: '9+3=12，12+5=17，连续两步计算。'
          },
          {
            id: 'm1u5l3q7',
            type: 'fill',
            question: '8+4=___',
            answer: '12',
            hint: '[8加几]（数学-20以内进位加法-第2课）',
            explanation: '8+4=12，见8想2，4拆成2和2，8+2=10，10+2=12。'
          }
        ]
      },
      {
        id: 'm1u5l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测20以内进位加法掌握情况',
        iDo: '家长出题引导，示范9加几、876加几和凑十法的综合运用。',
        weDo: '亲子一起完成闯关测试，讨论每道题的凑十思路。',
        youDo: '孩子独立完成闯关测试，综合运用凑十法计算20以内进位加法。',
        parentTips: '重点检查凑十法思路是否正确，能说出"见几想几、拆几剩几"的过程。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u5l4q1',
            type: 'choice',
            question: '9+4=？',
            options: ['12', '13', '14', '15'],
            answer: '13',
            hint: '见9想1，4拆成1和3',
            explanation: '4拆成1和3，9+1=10，10+3=13。'
          },
          {
            id: 'm1u5l4q2',
            type: 'fill',
            question: '8+6=___',
            answer: '14',
            hint: '见8想2，6拆成2和4',
            explanation: '6拆成2和4，8+2=10，10+4=14。'
          },
          {
            id: 'm1u5l4q3',
            type: 'choice',
            question: '7+8=？',
            options: ['13', '14', '15', '16'],
            answer: '15',
            hint: '见7想3，8拆成3和5',
            explanation: '8拆成3和5，7+3=10，10+5=15。'
          },
          {
            id: 'm1u5l4q4',
            type: 'fill',
            question: '6+5=___',
            answer: '11',
            hint: '见6想4，5拆成4和1',
            explanation: '5拆成4和1，6+4=10，10+1=11。'
          },
          {
            id: 'm1u5l4q5',
            type: 'fill',
            question: '9+7=___',
            answer: '16',
            hint: '见9想1，7拆成1和6',
            explanation: '7拆成1和6，9+1=10，10+6=16。'
          },
          {
            id: 'm1u5l4q6',
            type: 'choice',
            question: '小红有8朵花，小丽给了她7朵，一共有几朵？',
            options: ['14朵', '15朵', '16朵', '17朵'],
            answer: '15朵',
            hint: '8+7=？用凑十法',
            explanation: '7拆成2和5，8+2=10，10+5=15朵。'
          },
          {
            id: 'm1u5l4q7',
            type: 'fill',
            question: '5+5=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '5+5=10，5和5是凑十好朋友。'
          }
        ]
      },
      {
        id: 'm1u5l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：一班有9人参加比赛，二班有8人，一共有几人？',
        weDo: '亲子一起编20以内进位加法生活应用题，互相解答。',
        youDo: '孩子独立解决生活中的20以内进位加法问题。',
        parentTips: '鼓励孩子用凑十法快速计算，说出凑十过程，提高计算速度和准确率。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u5l5q1',
            type: 'choice',
            question: '操场上有9个男生和6个女生在跑步，一共有几个小朋友？',
            options: ['14个', '15个', '16个', '17个'],
            answer: '15个',
            hint: '9+6=？用凑十法',
            explanation: '6拆成1和5，9+1=10，10+5=15个。'
          },
          {
            id: 'm1u5l5q2',
            type: 'fill',
            question: '小红有8颗星，又得了7颗，现在有___颗星',
            answer: '15',
            hint: '8+7=？用凑十法',
            explanation: '7拆成2和5，8+2=10，10+5=15。'
          },
          {
            id: 'm1u5l5q3',
            type: 'choice',
            question: '水果店上午卖了7箱苹果，下午卖了8箱，一天一共卖了几箱？',
            options: ['14箱', '15箱', '16箱', '17箱'],
            answer: '15箱',
            hint: '7+8=？用凑十法',
            explanation: '8拆成3和5，7+3=10，10+5=15箱。'
          },
          {
            id: 'm1u5l5q4',
            type: 'fill',
            question: '小明有6本故事书，又买了9本，现在有___本',
            answer: '15',
            hint: '6+9=？用凑十法',
            explanation: '9拆成4和5，6+4=10，10+5=15本。'
          },
          {
            id: 'm1u5l5q5',
            type: 'fill',
            question: '【期末真题】9+5=___',
            answer: '14',
            hint: '见9想1，5拆成1和4',
            explanation: '5拆成1和4，9+1=10，10+4=14。'
          },
          {
            id: 'm1u5l5q6',
            type: 'choice',
            question: '【期末真题】8+8=？',
            options: ['14', '15', '16', '17'],
            answer: '16',
            hint: '见8想2，8拆成2和6',
            explanation: '8拆成2和6，8+2=10，10+6=16。'
          },
          {
            id: 'm1u5l5q7',
            type: 'fill',
            question: '7+3=___',
            answer: '10',
            hint: '[凑十法]（数学-6-10的认识和加减法-第3课）',
            explanation: '7+3=10，7和3是凑十好朋友。'
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
        teachingMethod: 'CPA小棒操作→破十法→想加算减',
        iDo: '家长用小棒演示13-9：1捆拆开，10-9=1，1+3=4。',
        weDo: '亲子一起用小棒做十几减9，练习破十法和想加算减。',
        youDo: '孩子独立计算十几减9的退位减法。',
        parentTips: '想加算减更快捷：因为9+4=13，所以13-9=4。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u6l1q1',
            type: 'choice',
            question: '15-9=？',
            options: ['4', '5', '6', '7'],
            answer: '6',
            hint: '想：9加几等于15？',
            explanation: '因为9+6=15，所以15-9=6。'
          },
          {
            id: 'm1u6l1q2',
            type: 'fill',
            question: '12-9=___',
            answer: '3',
            hint: '9+3=12',
            explanation: '因为9+3=12，所以12-9=3。'
          },
          {
            id: 'm1u6l1q3',
            type: 'flashcard',
            question: '快速计算：17-9=？',
            answer: '8',
            hint: '9+8=17',
            explanation: '因为9+8=17，所以17-9=8。'
          },
          {
            id: 'm1u6l1q4',
            type: 'choice',
            question: '小红有13颗糖，吃了9颗，还剩几颗？',
            options: ['3颗', '4颗', '5颗', '6颗'],
            answer: '4颗',
            hint: '13-9=？',
            explanation: '因为9+4=13，所以13-9=4。'
          },
          {
            id: 'm1u6l1q5',
            type: 'fill',
            question: '16-9=___',
            answer: '7',
            hint: '9+7=16',
            explanation: '因为9+7=16，所以16-9=7。'
          },
          {
            id: 'm1u6l1q6',
            type: 'fill',
            question: '14-9=5，5+8=___',
            answer: '13',
            hint: '先算减法，再加',
            explanation: '14-9=5，5+8=13，减法后再做加法。'
          },
          {
            id: 'm1u6l1q7',
            type: 'fill',
            question: '9+6=___',
            answer: '15',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+6=15，见9想1，6拆成1和5，9+1=10，10+5=15。'
          }
        ]
      },
      {
        id: 'm1u6l2',
        title: '十几减876',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，破十法迁移',
        iDo: '家长演示14-8：破十法10-8=2，2+4=6。',
        weDo: '亲子一起练习十几减8、7、6，总结规律。',
        youDo: '孩子独立计算十几减8、7、6的退位减法。',
        parentTips: '减8想2、减7想3、减6想4，破十法的关键是记住差几。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u6l2q1',
            type: 'choice',
            question: '13-7=？',
            options: ['4', '5', '6', '7'],
            answer: '6',
            hint: '破十法：10-7=3，3+3=？',
            explanation: '破十法：10-7=3，3+3=6，所以13-7=6。'
          },
          {
            id: 'm1u6l2q2',
            type: 'fill',
            question: '15-8=___',
            answer: '7',
            hint: '8+7=15',
            explanation: '因为8+7=15，所以15-8=7。'
          },
          {
            id: 'm1u6l2q3',
            type: 'flashcard',
            question: '快速计算：11-6=？',
            answer: '5',
            hint: '6+5=11',
            explanation: '因为6+5=11，所以11-6=5。'
          },
          {
            id: 'm1u6l2q4',
            type: 'choice',
            question: '树上有15个苹果，摘了8个，还剩几个？',
            options: ['6个', '7个', '8个', '9个'],
            answer: '7个',
            hint: '15-8=？',
            explanation: '因为8+7=15，所以15-8=7。'
          },
          {
            id: 'm1u6l2q5',
            type: 'fill',
            question: '14-6=___',
            answer: '8',
            hint: '6+8=14',
            explanation: '因为6+8=14，所以14-6=8。'
          },
          {
            id: 'm1u6l2q6',
            type: 'fill',
            question: '13-7=6，6+9=___',
            answer: '15',
            hint: '先算减法，再用凑十法加',
            explanation: '13-7=6，6+9=15，见9想1，6拆成1和5。'
          },
          {
            id: 'm1u6l2q7',
            type: 'fill',
            question: '18-9=___',
            answer: '9',
            hint: '[十几减9]（数学-20以内退位减法-第1课）',
            explanation: '因为9+9=18，所以18-9=9。'
          }
        ]
      },
      {
        id: 'm1u6l3',
        title: '综合应用',
        order: 3,
        teachingMethod: '情境化练习，生活应用',
        iDo: '家长出生活应用题：有16颗糖，吃了9颗，还剩几颗？',
        weDo: '亲子一起编退位减法应用题，互相解答。',
        youDo: '孩子独立解决退位减法应用题。',
        parentTips: '让孩子把减法和日常生活联系起来，理解减法的实际意义。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u6l3q1',
            type: 'choice',
            question: '小红有14朵花，送给小明8朵，还剩几朵？',
            options: ['5朵', '6朵', '7朵', '8朵'],
            answer: '6朵',
            hint: '14-8=？',
            explanation: '14-8=6，所以还剩6朵花。'
          },
          {
            id: 'm1u6l3q2',
            type: 'fill',
            question: '树上有17只鸟，飞走了9只，还剩___只',
            answer: '8',
            hint: '17-9=？',
            explanation: '17-9=8，所以还剩8只鸟。'
          },
          {
            id: 'm1u6l3q3',
            type: 'flashcard',
            question: '快速计算：16-7=？',
            answer: '9',
            hint: '7+9=16',
            explanation: '因为7+9=16，所以16-7=9。'
          },
          {
            id: 'm1u6l3q4',
            type: 'choice',
            question: '停车场有12辆车，开走了7辆，还剩几辆？',
            options: ['4辆', '5辆', '6辆', '7辆'],
            answer: '5辆',
            hint: '12-7=？',
            explanation: '因为7+5=12，所以12-7=5。'
          },
          {
            id: 'm1u6l3q5',
            type: 'fill',
            question: '11-8=___',
            answer: '3',
            hint: '8+3=11',
            explanation: '因为8+3=11，所以11-8=3。'
          },
          {
            id: 'm1u6l3q6',
            type: 'fill',
            question: '15-8=7，7+6=___',
            answer: '13',
            hint: '先减后加',
            explanation: '15-8=7，7+6=13，见7想3，6拆成3和3。'
          },
          {
            id: 'm1u6l3q7',
            type: 'fill',
            question: '16-8=___',
            answer: '8',
            hint: '[十几减8]（数学-20以内退位减法-第2课）',
            explanation: '因为8+8=16，所以16-8=8。'
          }
        ]
      },
      {
        id: 'm1u6l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测20以内退位减法掌握情况',
        iDo: '家长出题引导，示范十几减9、十几减876和破十法的综合运用。',
        weDo: '亲子一起完成闯关测试，讨论每道题的破十法或想加算减思路。',
        youDo: '孩子独立完成闯关测试，综合运用破十法和想加算减计算退位减法。',
        parentTips: '重点检查想加算减是否熟练，加法和减法是一对好朋友，互相帮忙算。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u6l4q1',
            type: 'choice',
            question: '14-9=？',
            options: ['4', '5', '6', '7'],
            answer: '5',
            hint: '9+5=14',
            explanation: '因为9+5=14，所以14-9=5。'
          },
          {
            id: 'm1u6l4q2',
            type: 'fill',
            question: '16-8=___',
            answer: '8',
            hint: '8+8=16',
            explanation: '因为8+8=16，所以16-8=8。'
          },
          {
            id: 'm1u6l4q3',
            type: 'choice',
            question: '12-7=？',
            options: ['4', '5', '6', '7'],
            answer: '5',
            hint: '7+5=12',
            explanation: '因为7+5=12，所以12-7=5。'
          },
          {
            id: 'm1u6l4q4',
            type: 'fill',
            question: '11-6=___',
            answer: '5',
            hint: '6+5=11',
            explanation: '因为6+5=11，所以11-6=5。'
          },
          {
            id: 'm1u6l4q5',
            type: 'fill',
            question: '17-9=___',
            answer: '8',
            hint: '9+8=17',
            explanation: '因为9+8=17，所以17-9=8。'
          },
          {
            id: 'm1u6l4q6',
            type: 'choice',
            question: '小红有15颗糖，吃了7颗，还剩几颗？',
            options: ['7颗', '8颗', '9颗', '6颗'],
            answer: '8颗',
            hint: '15-7=？',
            explanation: '因为7+8=15，所以15-7=8颗。'
          },
          {
            id: 'm1u6l4q7',
            type: 'fill',
            question: '9+6=___',
            answer: '15',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+6=15，见9想1，6拆成1和5，9+1=10，10+5=15。'
          }
        ]
      },
      {
        id: 'm1u6l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：有15个气球，飞走了8个，还剩几个？',
        weDo: '亲子一起编20以内退位减法生活应用题，互相解答。',
        youDo: '孩子独立解决生活中的20以内退位减法问题。',
        parentTips: '让孩子在生活中找减法问题，如吃东西剩下多少、用掉多少还剩多少等。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u6l5q1',
            type: 'choice',
            question: '小红有13颗糖，送给小明7颗，还剩几颗？',
            options: ['5颗', '6颗', '7颗', '4颗'],
            answer: '6颗',
            hint: '13-7=？',
            explanation: '因为7+6=13，所以13-7=6颗。'
          },
          {
            id: 'm1u6l5q2',
            type: 'fill',
            question: '操场上有16个小朋友，回家了9个，还剩___个',
            answer: '7',
            hint: '16-9=？',
            explanation: '因为9+7=16，所以16-9=7个。'
          },
          {
            id: 'm1u6l5q3',
            type: 'choice',
            question: '树上有14只鸟，飞走了6只，还剩几只？',
            options: ['6只', '7只', '8只', '9只'],
            answer: '8只',
            hint: '14-6=？',
            explanation: '因为6+8=14，所以14-6=8只。'
          },
          {
            id: 'm1u6l5q4',
            type: 'fill',
            question: '小明有12本故事书，借给同学8本，还剩___本',
            answer: '4',
            hint: '12-8=？',
            explanation: '因为8+4=12，所以12-8=4本。'
          },
          {
            id: 'm1u6l5q5',
            type: 'fill',
            question: '【期末真题】15-9=___',
            answer: '6',
            hint: '9+6=15',
            explanation: '因为9+6=15，所以15-9=6。'
          },
          {
            id: 'm1u6l5q6',
            type: 'choice',
            question: '【期末真题】13-7=？',
            options: ['5', '6', '7', '8'],
            answer: '6',
            hint: '7+6=13',
            explanation: '因为7+6=13，所以13-7=6。'
          },
          {
            id: 'm1u6l5q7',
            type: 'fill',
            question: '8+7=___',
            answer: '15',
            hint: '[876加几]（数学-20以内进位加法-第2课）',
            explanation: '8+7=15，见8想2，7拆成2和5，8+2=10，10+5=15。'
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
        teachingMethod: 'CPA实物触摸→图示识别→名称匹配',
        iDo: '家长拿出球、积木、易拉罐等实物，示范识别长方体、正方体、圆柱、球。',
        weDo: '亲子一起在家找立体图形的物品，分类摆放。',
        youDo: '孩子独立识别图片中的立体图形并说出名称。',
        parentTips: '让孩子用手摸一摸实物，感受每个立体图形的特征。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u7l1q1',
            type: 'choice',
            question: '易拉罐是什么形状？',
            options: ['长方体', '正方体', '圆柱', '球'],
            answer: '圆柱',
            hint: '它上下是圆的，侧面是弯的',
            explanation: '易拉罐上下是圆形，侧面是弯曲的面，所以是圆柱。'
          },
          {
            id: 'm1u7l1q2',
            type: 'fill',
            question: '骰子是___体',
            answer: '正方体',
            hint: '六个面都一样大的正方形',
            explanation: '骰子六个面都是一样大的正方形，所以是正方体。'
          },
          {
            id: 'm1u7l1q3',
            type: 'flashcard',
            question: '猜猜这是什么图形？圆圆的，到处都是弯的！',
            answer: '球',
            hint: '圆圆的，到处都是弯的',
            explanation: '这个图形圆圆的，没有平面，是球。'
          },
          {
            id: 'm1u7l1q4',
            type: 'choice',
            question: '下面哪个物品是长方体？',
            options: ['足球', '文具盒', '易拉罐', '魔方'],
            answer: '文具盒',
            hint: '找方方的、面不一样大的',
            explanation: '文具盒是长方体，6个面，对面一样大。'
          },
          {
            id: 'm1u7l1q5',
            type: 'fill',
            question: '正方体有___个面',
            answer: '6',
            hint: '数一数正方体有几个面',
            explanation: '正方体有6个面，每个面都是一样大的正方形。'
          },
          {
            id: 'm1u7l1q6',
            type: 'fill',
            question: '1个正方体有6个面，2个正方体一共有___个面',
            answer: '12',
            hint: '用加法算',
            explanation: '6+6=12，2个正方体一共有12个面。'
          },
          {
            id: 'm1u7l1q7',
            type: 'fill',
            question: '15-7=___',
            answer: '8',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '因为7+8=15，所以15-7=8。'
          }
        ]
      },
      {
        id: 'm1u7l2',
        title: '平面图形',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，描边拓印法',
        iDo: '家长把立体图形的面按在纸上描边，展示长方形、正方形、圆、三角形。',
        weDo: '亲子一起用立体图形在纸上拓印平面图形，涂色装饰。',
        youDo: '孩子独立识别平面图形并说出名称和特征。',
        parentTips: '平面图形是立体图形的面，帮孩子建立两者之间的联系。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u7l2q1',
            type: 'choice',
            question: '三角形有几条边？',
            options: ['2条', '3条', '4条', '5条'],
            answer: '3条',
            hint: '三角形的"三"就是答案',
            explanation: '三角形有3条边和3个角，"三"角形就是3个角的意思。'
          },
          {
            id: 'm1u7l2q2',
            type: 'fill',
            question: '长方形有___条边',
            answer: '4',
            hint: '数一数长方形的边',
            explanation: '长方形有4条边，对边相等，有4个直角。'
          },
          {
            id: 'm1u7l2q3',
            type: 'flashcard',
            question: '猜猜这是什么图形？没有角，弯弯的！',
            answer: '圆',
            hint: '没有角，弯弯的',
            explanation: '这个图形没有角，边是弯弯的曲线，是圆。'
          },
          {
            id: 'm1u7l2q4',
            type: 'choice',
            question: '下面哪个图形没有角？',
            options: ['三角形', '正方形', '长方形', '圆'],
            answer: '圆',
            hint: '哪个图形的边是弯弯的？',
            explanation: '圆没有角，边是弯弯的曲线。'
          },
          {
            id: 'm1u7l2q5',
            type: 'fill',
            question: '正方形有4条边，三角形有___条边',
            answer: '3',
            hint: '三角形的名字里有提示',
            explanation: '三角形有3条边，"三"角形就是3个角3条边。'
          },
          {
            id: 'm1u7l2q6',
            type: 'fill',
            question: '1个三角形有3条边，3个三角形一共有___条边',
            answer: '9',
            hint: '用加法算',
            explanation: '3+3+3=9，3个三角形一共有9条边。'
          },
          {
            id: 'm1u7l2q7',
            type: 'choice',
            question: '正方体的面是什么形状？',
            options: ['三角形', '长方形', '正方形', '圆'],
            answer: '正方形',
            hint: '[立体图形]（数学-认识图形-第1课）',
            explanation: '正方体的6个面都是一样大的正方形。'
          }
        ]
      },
      {
        id: 'm1u7l3',
        title: '图形拼搭',
        order: 3,
        teachingMethod: 'CPA实物拼搭→图示组合→创意表达',
        iDo: '家长用三角形和正方形拼成一座房子，示范图形组合。',
        weDo: '亲子一起用各种图形拼出有趣的图案，如小船、火箭。',
        youDo: '孩子独立用图形拼搭出自己喜欢的图案，说出用了哪些图形。',
        parentTips: '鼓励孩子发挥创意，拼搭过程中数一数用了几个什么图形。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u7l3q1',
            type: 'choice',
            question: '用2个完全一样的等腰直角三角形可以拼成什么图形？',
            options: ['圆形', '平行四边形', '正方形', '梯形'],
            answer: '正方形',
            hint: '两个一样的直角三角形',
            explanation: '两个完全一样的等腰直角三角形可以拼成一个正方形。'
          },
          {
            id: 'm1u7l3q2',
            type: 'fill',
            question: '拼一座房子用了1个三角形和1个正方形，一共用了___个图形',
            answer: '2',
            hint: '数一数一共用了几种图形',
            explanation: '1个三角形+1个正方形=2个图形。'
          },
          {
            id: 'm1u7l3q3',
            type: 'flashcard',
            question: '🔺🔺🔺 拼成了一个图形，用了几个三角形？',
            answer: '3',
            hint: '仔细数一数三角形的数量',
            explanation: '仔细观察拼图，数出三角形的个数是3个。'
          },
          {
            id: 'm1u7l3q4',
            type: 'fill',
            question: '最少用___个一样的小正方形可以拼成一个大正方形',
            answer: '4',
            hint: '2x2的正方形',
            explanation: '4个小正方形拼成2x2的大正方形。'
          },
          {
            id: 'm1u7l3q5',
            type: 'fill',
            question: '拼一个房子用了1个三角形和1个正方形，拼2个房子用___个图形',
            answer: '4',
            hint: '1个房子2个图形，2个房子呢？',
            explanation: '1个房子用2个图形，2个房子用2+2=4个图形。'
          },
          {
            id: 'm1u7l3q6',
            type: 'fill',
            question: '1个正方形有4条边，2个正方形拼在一起（共用1条边），一共有___条边',
            answer: '6',
            hint: '4+4-2=？',
            explanation: '2个正方形8条边，共用1条边去掉2条，8-2=6条边。'
          },
          {
            id: 'm1u7l3q7',
            type: 'fill',
            question: '长方形有___条边',
            answer: '4',
            hint: '[平面图形]（数学-认识图形-第2课）',
            explanation: '长方形有4条边，对边相等。'
          }
        ]
      },
      {
        id: 'm1u7l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测认识图形掌握情况',
        iDo: '家长出题引导，示范立体图形、平面图形和图形拼搭的综合运用。',
        weDo: '亲子一起完成闯关测试，讨论每道题的图形特征和解题方法。',
        youDo: '孩子独立完成闯关测试，综合运用图形认识和拼搭知识。',
        parentTips: '重点检查孩子能否区分立体图形和平面图形，以及各图形的特征是否记住。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u7l4q1',
            type: 'choice',
            question: '下面哪个是立体图形？',
            options: ['三角形', '正方形', '正方体', '圆'],
            answer: '正方体',
            hint: '立体图形是胖胖的',
            explanation: '正方体是立体图形，有6个面；三角形、正方形、圆都是平面图形。'
          },
          {
            id: 'm1u7l4q2',
            type: 'fill',
            question: '正方体有___个面，每个面都是正方形',
            answer: '6',
            hint: '数一数正方体有几个面',
            explanation: '正方体有6个面，每个面都是一样大的正方形。'
          },
          {
            id: 'm1u7l4q3',
            type: 'choice',
            question: '圆柱的上下两个面是什么形状？',
            options: ['正方形', '长方形', '三角形', '圆'],
            answer: '圆',
            hint: '圆柱上下是平平的圆面',
            explanation: '圆柱的上下两个底面是圆形，侧面是弯曲的。'
          },
          {
            id: 'm1u7l4q4',
            type: 'fill',
            question: '三角形有___条边和___个角（用顿号分隔）',
            answer: '3、3',
            hint: '"三"角形就是3个角',
            explanation: '三角形有3条边和3个角。'
          },
          {
            id: 'm1u7l4q5',
            type: 'fill',
            question: '2个完全一样的小正方形可以拼成1个___形',
            answer: '长方',
            hint: '两个正方形并排拼',
            explanation: '2个完全一样的小正方形并排拼在一起就是1个长方形。'
          },
          {
            id: 'm1u7l4q6',
            type: 'choice',
            question: '用4个完全一样的小正方形拼成一个大正方形，每行排几个？',
            options: ['1个', '2个', '3个', '4个'],
            answer: '2个',
            hint: '2×2的正方形',
            explanation: '4个小正方形拼成2行2列的大正方形，每行排2个。'
          },
          {
            id: 'm1u7l4q7',
            type: 'fill',
            question: '15-8=___',
            answer: '7',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '因为8+7=15，所以15-8=7。'
          }
        ]
      },
      {
        id: 'm1u7l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：找一找家里有哪些长方体、正方体、圆柱和球？',
        weDo: '亲子一起在家找各种图形的物品，分类摆放并说出图形名称。',
        youDo: '孩子独立在生活中识别图形，说出物品对应的图形名称和特征。',
        parentTips: '让孩子多观察生活中的图形，如建筑物、家具、食品包装等，建立图形与生活的联系。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u7l5q1',
            type: 'choice',
            question: '冰箱是什么形状？',
            options: ['正方体', '长方体', '圆柱', '球'],
            answer: '长方体',
            hint: '冰箱是方方的，但面不一样大',
            explanation: '冰箱是长方体，6个面，对面一样大，但不是每个面都一样大。'
          },
          {
            id: 'm1u7l5q2',
            type: 'fill',
            question: '钟面是___形',
            answer: '圆',
            hint: '钟面弯弯的没有角',
            explanation: '钟面是圆形，没有角，边是弯弯的曲线。'
          },
          {
            id: 'm1u7l5q3',
            type: 'choice',
            question: '红领巾是什么形状？',
            options: ['长方形', '正方形', '三角形', '圆'],
            answer: '三角形',
            hint: '红领巾有3条边3个角',
            explanation: '红领巾是三角形，有3条边和3个角。'
          },
          {
            id: 'm1u7l5q4',
            type: 'fill',
            question: '用2个三角形和1个正方形拼一座房子，一共用了___个图形',
            answer: '3',
            hint: '2+1=？',
            explanation: '2个三角形+1个正方形=3个图形。'
          },
          {
            id: 'm1u7l5q5',
            type: 'fill',
            question: '【期末真题】正方体有___个面',
            answer: '6',
            hint: '数一数正方体有几个面',
            explanation: '正方体有6个面，每个面都是一样大的正方形。'
          },
          {
            id: 'm1u7l5q6',
            type: 'choice',
            question: '【期末真题】下面哪个图形没有角？',
            options: ['三角形', '长方形', '正方形', '圆'],
            answer: '圆',
            hint: '哪个图形的边是弯弯的？',
            explanation: '圆没有角，边是弯弯的曲线。三角形、长方形、正方形都有角。'
          },
          {
            id: 'm1u7l5q7',
            type: 'fill',
            question: '14-6=___',
            answer: '8',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '因为6+8=14，所以14-6=8。'
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
        teachingMethod: 'CPA实物观察→图示换算→符号表示',
        iDo: '家长拿出真实人民币，展示1元、1角、1分，讲解元角分的关系。',
        weDo: '亲子一起用人民币学具做换算游戏：1元=10角，1角=10分。',
        youDo: '孩子独立完成元角分的换算练习。',
        parentTips: '1元=10角=100分，让孩子用实物感受换算关系。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u8l1q1',
            type: 'choice',
            question: '1元等于几角？',
            options: ['5角', '8角', '10角', '100角'],
            answer: '10角',
            hint: '1元=？角',
            explanation: '1元=10角，这是人民币的基本换算关系。'
          },
          {
            id: 'm1u8l1q2',
            type: 'fill',
            question: '1角=___分',
            answer: '10',
            hint: '角和分的关系',
            explanation: '1角=10分，所以1元=10角=100分。'
          },
          {
            id: 'm1u8l1q3',
            type: 'flashcard',
            question: '快速换算：3元=几角？',
            answer: '30',
            hint: '1元=10角，3元呢？',
            explanation: '1元=10角，3元=3×10=30角。'
          },
          {
            id: 'm1u8l1q4',
            type: 'choice',
            question: '2元等于几角？',
            options: ['10角', '15角', '20角', '25角'],
            answer: '20角',
            hint: '1元=10角，2元呢？',
            explanation: '1元=10角，2元=2×10=20角。'
          },
          {
            id: 'm1u8l1q5',
            type: 'fill',
            question: '50分=___角',
            answer: '5',
            hint: '10分=1角',
            explanation: '50分=5角，因为10分=1角。'
          },
          {
            id: 'm1u8l1q6',
            type: 'fill',
            question: '1元-3角=___角',
            answer: '7',
            hint: '先把1元换成角',
            explanation: '1元=10角，10角-3角=7角。'
          },
          {
            id: 'm1u8l1q7',
            type: 'fill',
            question: '15角-8角=___角',
            answer: '7',
            hint: '[退位减法]（数学-20以内退位减法-第2课）',
            explanation: '15-8=7，所以15角-8角=7角。'
          }
        ]
      },
      {
        id: 'm1u8l2',
        title: '简单购物',
        order: 2,
        teachingMethod: 'I Do→We Do→You Do，角色扮演法',
        iDo: '家长扮演店主，示范用人民币购买物品并计算总价。',
        weDo: '亲子轮流扮演买家和卖家，模拟购物场景计算金额。',
        youDo: '孩子独立计算简单购物场景中的金额。',
        parentTips: '让孩子在真实或模拟购物中练习计算，理解人民币的使用。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u8l2q1',
            type: 'choice',
            question: '铅笔2元，橡皮1元，一共要付多少？',
            options: ['2元', '3元', '4元', '5元'],
            answer: '3元',
            hint: '2+1=？',
            explanation: '铅笔2元+橡皮1元=3元，一共要付3元。'
          },
          {
            id: 'm1u8l2q2',
            type: 'fill',
            question: '笔记本5元，你有10元，买完后还剩___元',
            answer: '5',
            hint: '10-5=？',
            explanation: '10-5=5，买完笔记本还剩5元。'
          },
          {
            id: 'm1u8l2q3',
            type: 'flashcard',
            question: '快速计算：买3块1元的糖，要付多少？',
            answer: '3元',
            hint: '3个1元是几元？',
            explanation: '3块糖每块1元，1+1+1=3元。'
          },
          {
            id: 'm1u8l2q4',
            type: 'choice',
            question: '铅笔3元，橡皮2元，尺子4元，买铅笔和尺子一共多少元？',
            options: ['5元', '6元', '7元', '9元'],
            answer: '7元',
            hint: '3+4=？',
            explanation: '铅笔3元+尺子4元=7元。'
          },
          {
            id: 'm1u8l2q5',
            type: 'fill',
            question: '买1本5元的笔记本，付10元，找回___元',
            answer: '5',
            hint: '10-5=？',
            explanation: '10-5=5，找回5元。'
          },
          {
            id: 'm1u8l2q6',
            type: 'fill',
            question: '铅笔2元，橡皮1元，尺子3元，三样都买一共要___元',
            answer: '6',
            hint: '2+1+3=？',
            explanation: '2+1+3=6，三样都买一共6元。'
          },
          {
            id: 'm1u8l2q7',
            type: 'fill',
            question: '5元=___角',
            answer: '50',
            hint: '[元角分]（数学-认识人民币-第1课）',
            explanation: '1元=10角，5元=50角。'
          }
        ]
      },
      {
        id: 'm1u8l3',
        title: '找零计算',
        order: 3,
        teachingMethod: 'CPA实物操作→图示计算→符号推理',
        iDo: '家长演示：物品3元，付5元，找回5-3=2元。',
        weDo: '亲子一起模拟找零场景，练习计算应找回多少钱。',
        youDo: '孩子独立计算各种找零场景。',
        parentTips: '找零就是用付的钱减去物品的价格，多让孩子实际操作。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u8l3q1',
            type: 'choice',
            question: '买4元的本子，付10元，应找回多少？',
            options: ['4元', '5元', '6元', '7元'],
            answer: '6元',
            hint: '10-4=？',
            explanation: '10-4=6，所以应找回6元。'
          },
          {
            id: 'm1u8l3q2',
            type: 'fill',
            question: '买7元的玩具，付10元，找回___元',
            answer: '3',
            hint: '10-7=？',
            explanation: '10-7=3，所以找回3元。'
          },
          {
            id: 'm1u8l3q3',
            type: 'flashcard',
            question: '快速计算：买2元的笔，付5元，找回几元？',
            answer: '3',
            hint: '5-2=？',
            explanation: '5-2=3，所以找回3元。'
          },
          {
            id: 'm1u8l3q4',
            type: 'choice',
            question: '买6元的玩具，付10元，应找回多少？',
            options: ['3元', '4元', '5元', '6元'],
            answer: '4元',
            hint: '10-6=？',
            explanation: '10-6=4，应找回4元。'
          },
          {
            id: 'm1u8l3q5',
            type: 'fill',
            question: '买8元的东西，付10元，找回___元',
            answer: '2',
            hint: '10-8=？',
            explanation: '10-8=2，找回2元。'
          },
          {
            id: 'm1u8l3q6',
            type: 'fill',
            question: '铅笔3元，橡皮2元，买这两样付10元，找回___元',
            answer: '5',
            hint: '先算一共多少，再算找零',
            explanation: '3+2=5元，10-5=5元，找回5元。'
          },
          {
            id: 'm1u8l3q7',
            type: 'fill',
            question: '尺子4元，笔记本5元，买这两样一共___元',
            answer: '9',
            hint: '[简单购物]（数学-认识人民币-第2课）',
            explanation: '4+5=9，买这两样一共9元。'
          }
        ]
      },
      {
        id: 'm1u8l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '闯关测试模式，综合检测认识人民币掌握情况',
        iDo: '家长出题引导，示范元角分换算、简单购物和找零计算的综合运用。',
        weDo: '亲子一起完成闯关测试，讨论每道题的换算和计算方法。',
        youDo: '孩子独立完成闯关测试，综合运用人民币换算和购物计算知识。',
        parentTips: '重点检查元角分换算是否熟练，1元=10角=100分是基础，一定要记牢。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u8l4q1',
            type: 'choice',
            question: '3元等于几角？',
            options: ['10角', '20角', '30角', '40角'],
            answer: '30角',
            hint: '1元=10角，3元呢？',
            explanation: '1元=10角，3元=3×10=30角。'
          },
          {
            id: 'm1u8l4q2',
            type: 'fill',
            question: '40分=___角',
            answer: '4',
            hint: '10分=1角',
            explanation: '40分=4角，因为10分=1角。'
          },
          {
            id: 'm1u8l4q3',
            type: 'choice',
            question: '铅笔2元，橡皮1元，尺子3元，买铅笔和尺子一共多少元？',
            options: ['4元', '5元', '6元', '3元'],
            answer: '5元',
            hint: '2+3=？',
            explanation: '铅笔2元+尺子3元=5元。'
          },
          {
            id: 'm1u8l4q4',
            type: 'fill',
            question: '买6元的玩具，付10元，找回___元',
            answer: '4',
            hint: '10-6=？',
            explanation: '10-6=4，找回4元。'
          },
          {
            id: 'm1u8l4q5',
            type: 'fill',
            question: '1元-6角=___角',
            answer: '4',
            hint: '先把1元换成角',
            explanation: '1元=10角，10角-6角=4角。'
          },
          {
            id: 'm1u8l4q6',
            type: 'choice',
            question: '笔记本5元，铅笔3元，买这两样付10元，找回几元？',
            options: ['1元', '2元', '3元', '4元'],
            answer: '2元',
            hint: '先算一共多少，再算找零',
            explanation: '5+3=8元，10-8=2元，找回2元。'
          },
          {
            id: 'm1u8l4q7',
            type: 'fill',
            question: '17-9=___',
            answer: '8',
            hint: '[退位减法]（数学-20以内退位减法-第1课）',
            explanation: '因为9+8=17，所以17-9=8。'
          }
        ]
      },
      {
        id: 'm1u8l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '生活场景应用+真题练习，真实场景应用',
        iDo: '家长用生活场景出题：去超市买铅笔2元、橡皮1元、尺子3元，带10元够吗？',
        weDo: '亲子一起模拟超市购物，练习算总价和找零。',
        youDo: '孩子独立解决生活中的购物和找零问题。',
        parentTips: '带孩子去真实超市购物，让孩子自己算价格和找零，实践出真知。',
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
        ],
        practiceQuestions: [
          {
            id: 'm1u8l5q1',
            type: 'choice',
            question: '买1本5元的笔记本和1支2元的铅笔，一共要付多少元？',
            options: ['6元', '7元', '8元', '3元'],
            answer: '7元',
            hint: '5+2=？',
            explanation: '5+2=7元，一共要付7元。'
          },
          {
            id: 'm1u8l5q2',
            type: 'fill',
            question: '买8元的玩具，付10元，找回___元',
            answer: '2',
            hint: '10-8=？',
            explanation: '10-8=2，找回2元。'
          },
          {
            id: 'm1u8l5q3',
            type: 'choice',
            question: '橡皮1元，铅笔2元，尺子4元，三样都买一共多少元？',
            options: ['5元', '6元', '7元', '8元'],
            answer: '7元',
            hint: '1+2+4=？',
            explanation: '1+2+4=7元，三样都买一共7元。'
          },
          {
            id: 'm1u8l5q4',
            type: 'fill',
            question: '小红有5元，买了一支3元的铅笔，还剩___元',
            answer: '2',
            hint: '5-3=？',
            explanation: '5-3=2，还剩2元。'
          },
          {
            id: 'm1u8l5q5',
            type: 'fill',
            question: '【期末真题】1元=___角',
            answer: '10',
            hint: '元和角的换算',
            explanation: '1元=10角，这是人民币的基本换算关系。'
          },
          {
            id: 'm1u8l5q6',
            type: 'choice',
            question: '【期末真题】买一个6元的文具盒，付10元，应找回多少？',
            options: ['3元', '4元', '5元', '6元'],
            answer: '4元',
            hint: '10-6=？',
            explanation: '10-6=4，应找回4元。'
          },
          {
            id: 'm1u8l5q7',
            type: 'fill',
            question: '9+3=___',
            answer: '12',
            hint: '[9加几]（数学-20以内进位加法-第1课）',
            explanation: '9+3=12，见9想1，3拆成1和2，9+1=10，10+2=12。'
          }
        ]
      }
    ]
  }
]
