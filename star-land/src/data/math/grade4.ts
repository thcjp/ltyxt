import type { Unit } from '@/types'

export const mathGrade4: Unit[] = [
  // ==================== 第一单元：大数的认识 ====================
  {
    id: 'm4u1',
    title: '大数的认识',
    subtitle: '从万到亿，探索大数的奥秘',
    order: 1,
    lessons: [
      {
        id: 'm4u1l1',
        title: '亿以内数的认识',
        order: 1,
        teachingMethod: 'CPA·C→P：实物→数位表→符号',
        content: [
          { type: 'text', content: '在生活中，我们经常会遇到比万更大的数。比如一个城市有几百万人，一本书有几万个字。今天我们就来认识这些大数！', animationType: 'reveal' },
          { type: 'example', content: '10个一万是十万，10个十万是一百万，10个一百万是一千万，10个一千万是一亿。', label: '数一数', animationType: 'bounce' },
          { type: 'formula', content: '数位顺序表：从右到左依次是个位、十位、百位、千位（个级），万位、十万位、百万位、千万位（万级）。每相邻两个计数单位之间的进率都是10。', label: '数位顺序表', animationType: 'typewriter' },
          { type: 'tip', content: '记住"十进制"：每相邻两个计数单位之间的进率都是10，满十进一！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '数位表逐步展开：个位→十位→百位→千位→万位→十万位→百万位→千万位，每四位一组分级显示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '数位表的构建',
              sceneBuildConfig: {
                sceneName: '数位顺序表',
                elements: [
                  { text: '个位', x: 8, y: 50, animation: 'bounceIn', delay: 0, ttsText: '个位' },
                  { text: '十位', x: 18, y: 50, animation: 'bounceIn', delay: 0.2, ttsText: '十位' },
                  { text: '百位', x: 28, y: 50, animation: 'bounceIn', delay: 0.4, ttsText: '百位' },
                  { text: '千位', x: 38, y: 50, animation: 'bounceIn', delay: 0.6, ttsText: '千位' },
                  { text: '万位', x: 55, y: 50, animation: 'scaleIn', delay: 0.9, color: '#FF6B6B', ttsText: '万位，从这里开始是万级' },
                  { text: '十万位', x: 68, y: 50, animation: 'scaleIn', delay: 1.1, color: '#FF6B6B', ttsText: '十万位' },
                  { text: '百万位', x: 81, y: 50, animation: 'scaleIn', delay: 1.3, color: '#FF6B6B', ttsText: '百万位' },
                  { text: '千万位', x: 94, y: 50, animation: 'scaleIn', delay: 1.5, color: '#FF6B6B', ttsText: '千万位' },
                ]
              },
              ttsNarration: '从右边起，每四个数位为一级。个位、十位、百位、千位是个级；万位、十万位、百万位、千万位是万级！',
            }
          },
          { type: 'text', content: '在数位顺序表中，从右边起第5位是万位，第6位是十万位，第7位是百万位，第8位是千万位。', animationType: 'reveal' },
          { type: 'tip', content: '巧记口诀：个十百千是个级，万十万百万千万是万级，每级四位，从右到左排好队！', label: '巧记口诀', animationType: 'pulse' },
        ],
        iDo: '家长在纸上画数位顺序表，用万为单位数大数，示范"一万、二万、三万……十万"，让孩子观察数位的变化。',
        weDo: '亲子一起在数位表上摆数，家长说一个数，孩子用数字卡片在数位表上摆出来，互相检查。',
        youDo: '孩子独立读写大数，在数位表上填写缺失的数位名称，并说出每个数字所在的数位。',
        parentTips: '从万开始，用数位表帮助孩子理解大数。强调每四个数位为一级，满十进一。',
        funElement: '笑话：0对1说——你太瘦了，我才是圆圆胖胖的大数！歇后语：万丈高楼平地起——从头来。小游戏：数位接力赛，抢答数位名称！',
        gsapAnimations: [
          '[GSAP:sceneBuild|数位表逐步展开（个→万→十万→百万→千万）|1.5s|点击播放|power2.out]',
          '[GSAP:starFlyIn|万级数位高亮星星飞入|0.6s|数位展开完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|数位表：个位到千万位|600x200|教学风|png|数位表格]',
          '[IMG:illustration|十进制进位示意图|400x300|教学风|png|满十进一]'
        ],
        practiceQuestions: [
          {
            id: 'm4u1l1q1',
            type: 'choice',
            question: '从右边起，第5位是什么位？',
            options: ['千位', '万位', '十万位', '百万位'],
            answer: '万位',
            hint: '数一数：个、十、百、千，下一个就是第5位',
            explanation: '从右边起，第1位是个位，第2位是十位，第3位是百位，第4位是千位，第5位是万位。'
          },
          {
            id: 'm4u1l1q2',
            type: 'fill',
            question: '在数3840571中，4在___位上。',
            answer: '万',
            hint: '从右边开始数数位',
            explanation: '3840571从右到左：个位1、十位7、百位5、千位0、万位4、十万位8、百万位3，所以4在万位上。'
          },
          {
            id: 'm4u1l1q3',
            type: 'choice',
            question: '10个一万是多少？',
            options: ['一百万', '十万', '一千万', '一亿'],
            answer: '十万',
            hint: '满十进一，10个一万就是……',
            explanation: '10个一万是十万。每相邻两个计数单位之间进率是10，满十进一。'
          },
          {
            id: 'm4u1l1q4',
            type: 'fill',
            question: '10个十万是___。',
            answer: '一百万',
            acceptableAnswers: ['百万', '1000000'],
            hint: '满十进一，十万再往前一位是？',
            explanation: '10个十万是一百万。从右到左，十万位的前一位是百万位。'
          },
          {
            id: 'm4u1l1q5',
            type: 'choice',
            question: '由3个百万、5个万和4个百组成的数是多少？',
            options: ['3500400', '3050400', '305400', '350400'],
            answer: '3050400',
            hint: '【期末真题】3个百万=3000000，5个万=50000，4个百=400，加起来',
            explanation: '3个百万是3000000，5个万是50000，4个百是400，合起来是3050400。'
          },
          {
            id: 'm4u1l1q6',
            type: 'fill',
            question: '用1、2、3、4、5、6六个数字组成最大的六位数是___。',
            answer: '654321',
            hint: '要最大，大数字要放在高位',
            explanation: '要组成最大的数，把最大的数字放在最高位。6>5>4>3>2>1，所以最大的六位数是654321。'
          },
          {
            id: 'm4u1l1q7',
            type: 'fill',
            question: '在数20709000中，9在___位上。',
            answer: '千',
            hint: '[数位顺序]（数学-大数的认识-第1课）',
            explanation: '20709000从右到左：个位0、十位0、百位0、千位9、万位0、十万位7、百万位0、千万位2，所以9在千位上。'
          }
        ]
      },
      {
        id: 'm4u1l2',
        title: '大数的读法和写法',
        order: 2,
        teachingMethod: 'EDI：示范→合作→独立',
        content: [
          { type: 'text', content: '读大数有秘诀：先分级，再从高位读起。万级的数按个级的读法读，末尾加"万"字。', animationType: 'reveal' },
          { type: 'example', content: '30500000 先分级：3050 | 0000，读作：三千零五十万。', label: '读一读', animationType: 'bounce' },
          { type: 'formula', content: '读数口诀：先分级再读数，万级按个级读加"万"；每级末尾0不读，中间有一个或连续几个0都只读一个零。', label: '读数口诀', animationType: 'typewriter' },
          { type: 'tip', content: '写数时也要先分级，从高位写起，哪一位上一个单位也没有就写0占位。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '大数分级卡片翻转：先翻出万级，再翻出个级，组合成完整的大数', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '大数分级读法',
              cardRevealConfig: {
                cards: [
                  { front: '万级', back: '3050', ttsText: '万级读作三千零五十' },
                  { front: '个级', back: '0000', ttsText: '个级全是零，末尾零不读' },
                  { front: '合起来', back: '30500000', ttsText: '读作三千零五十万' },
                ]
              },
              ttsNarration: '先分级，万级是3050，读作三千零五十，个级全是零不读，合起来读作三千零五十万！',
            }
          },
          { type: 'example', content: '写数：六千零八十万零四十。先分级：6080 | 0040，写作60800040。', label: '写一写', animationType: 'bounce' },
          { type: 'tip', content: '易错提醒：中间的0要读出来，末尾的0不读。比如2007000读作"二百万七千"，中间两个0只读一个零。', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范分级读数法：先画分级线，再从万级开始读，最后加"万"字。示范几个大数的读法。',
        weDo: '亲子一起分级读数，家长说大数，孩子分级并读出来，互相检查读法是否正确。',
        youDo: '孩子独立读写大数，完成读写练习，标注分级线。',
        parentTips: '分级法是关键：先万级再个级，万级按个级读加"万"。注意0的读法规则。',
        funElement: '歇后语：芝麻开花——节节高（数位越来越高）。笑话：8对0说——胖有什么用，还不是排在最后！小游戏：大数读法接龙，看谁读得快又准！',
        gsapAnimations: [
          '[GSAP:cardReveal|大数分级卡片翻转（万级红色/个级蓝色）|0.8s|点击分级|power2.inOut]',
          '[GSAP:highlight|中间0高亮闪烁提示读法|0.5s|分级完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|大数分级读法示意图|500x200|教学风|png|红蓝分级]',
          '[IMG:illustration|0的读法规则图|400x200|教学风|png|零读法规则]'
        ],
        practiceQuestions: [
          {
            id: 'm4u1l2q1',
            type: 'choice',
            question: '30500000怎么读？',
            options: ['三百零五万', '三千零五十万', '三千五百五十万', '三千万零五十万'],
            answer: '三千零五十万',
            hint: '先分级：3050 | 0000',
            explanation: '先分级为3050|0000，万级3050读作三千零五十，加"万"字，个级全是零不读，所以读作三千零五十万。'
          },
          {
            id: 'm4u1l2q2',
            type: 'fill',
            question: '四千五百万写作___。',
            answer: '45000000',
            hint: '四千五百万=4500个万',
            explanation: '四千五百万，万级是4500，个级是0000，写作45000000。'
          },
          {
            id: 'm4u1l2q3',
            type: 'choice',
            question: '2007000怎么读？',
            options: ['二百万七千', '二百万零七千', '二百零七万', '二零零七千'],
            answer: '二百万七千',
            hint: '先分级：200 | 7000，注意中间的0',
            explanation: '分级为200|7000，万级200读作二百万，个级7000读作七千，中间连续的0只读一个零但这里万级末尾0不读，所以读作二百万七千。'
          },
          {
            id: 'm4u1l2q4',
            type: 'fill',
            question: '六千零八十万零四十写作___。',
            answer: '60800040',
            hint: '先分级：6080 | 0040',
            explanation: '六千零八十万零四十，万级6080，个级0040，写作60800040。注意个级中间的0要占位。'
          },
          {
            id: 'm4u1l2q5',
            type: 'choice',
            question: '下面哪个读法是正确的？',
            options: ['30004000读作三千万四千', '30004000读作三千万零四千', '30004000读作三千万零零四千', '30004000读作三千四千'],
            answer: '30004000读作三千万四千',
            hint: '分级：3000 | 4000，每级末尾的0都不读',
            explanation: '30004000分级为3000|4000，万级3000读作三千万（末尾0不读），个级4000读作四千（末尾0不读），每级末尾的0都不读，所以读作三千万四千。'
          },
          {
            id: 'm4u1l2q6',
            type: 'fill',
            question: '一个数由5个千万和6个万组成，这个数写作___。',
            answer: '50060000',
            hint: '5个千万=50000000，6个万=60000',
            explanation: '5个千万是50000000，6个万是60000，合起来是50060000。'
          },
          {
            id: 'm4u1l2q7',
            type: 'fill',
            question: '一个数百万位上是3，万位上是5，其余各位都是0，这个数读作___。',
            answer: '三百零五万',
            hint: '[大数的读写]（数学-大数的认识-第2课）',
            explanation: '百万位3、万位5，其余为0，这个数是3050000，读作三百零五万。'
          }
        ]
      },
      {
        id: 'm4u1l3',
        title: '大数的大小比较和改写',
        order: 3,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '比较大数有两种方法：位数不同的，位数多的数大；位数相同的，从最高位起依次比较。', animationType: 'reveal' },
          { type: 'example', content: '比较99999和100000：99999是五位数，100000是六位数，六位数>五位数，所以100000>99999。', label: '比一比', animationType: 'bounce' },
          { type: 'formula', content: '比较口诀：位数多的大，位数少的小；位数相同从高位比起，高位大的数就大。', label: '比较口诀', animationType: 'typewriter' },
          { type: 'tip', content: '整万、整亿的数可以改写：去掉末尾4个0加"万"字，去掉末尾8个0加"亿"字。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '两个大数逐位对比动画，相同位数从高位开始一位一位比较', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '大数大小比较',
              compareConfig: {
                leftItems: ['8', '4', '5', '0', '0'],
                rightItems: ['8', '4', '5', '5', '0'],
                result: 'right',
                resultText: '84550 > 84500，从左到右比到第4位，5>0',
              },
              ttsNarration: '两个数都是五位数，从最高位比起，前三位都一样，第四位5大于0，所以84550大于84500！',
            }
          },
          { type: 'example', content: '改写：300000 = 30万，500000000 = 5亿。整万整亿的数改写后大小不变，只是写法不同。', label: '改一改', animationType: 'bounce' },
          { type: 'tip', content: '注意区分"改写"和"省略"：改写是等号（=），省略是约等号（≈）。改写不改变大小，省略是求近似数。', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范大数比较：先数位数，位数相同从高位比起。再示范整万整亿的改写方法。',
        weDo: '亲子一起比较和改写大数，家长出题，孩子比较大小并改写，互相检查。',
        youDo: '孩子独立比较和改写大数，完成练习题。',
        parentTips: '位数不同比位数，位数相同从高位比；整万整亿改写时去掉0加"万"或"亿"字。',
        funElement: '笑话：9对10说——别以为你比我多一位就了不起！歇后语：小葱拌豆腐——一清二白（大小清清楚楚）。小游戏：大数比大小扑克牌，翻牌比大小！',
        gsapAnimations: [
          '[GSAP:compare|两个大数逐位对比展示|0.8s|页面加载|power2.out]',
          '[GSAP:numberCount|改写时0逐个消失动画|0.6s|改写完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|大数比较规则图|500x200|教学风|png|比较规则]',
          '[IMG:illustration|整万整亿改写示意图|400x200|教学风|png|改写方法]'
        ],
        practiceQuestions: [
          {
            id: 'm4u1l3q1',
            type: 'choice',
            question: '比较大小：99998 ○ 100001，○里填什么？',
            options: ['>', '<', '=', '无法比较'],
            answer: '<',
            hint: '先看位数，99998是几位数？100001是几位数？',
            explanation: '99998是五位数，100001是六位数，六位数大于五位数，所以99998 < 100001。'
          },
          {
            id: 'm4u1l3q2',
            type: 'fill',
            question: '300000改写成以"万"为单位的数是___万。',
            answer: '30',
            hint: '去掉末尾4个0，加"万"字',
            explanation: '300000去掉末尾4个0得到30，加"万"字，改写为30万。'
          },
          {
            id: 'm4u1l3q3',
            type: 'choice',
            question: '比较大小：84500 ○ 845000，○里填什么？',
            options: ['>', '<', '=', '无法比较'],
            answer: '<',
            hint: '位数不同时怎么办？',
            explanation: '84500是五位数，845000是六位数，六位数大于五位数，所以84500 < 845000。'
          },
          {
            id: 'm4u1l3q4',
            type: 'fill',
            question: '50000000 = ___万。',
            answer: '5000',
            hint: '去掉末尾4个0',
            explanation: '50000000去掉末尾4个0得到5000，所以50000000 = 5000万。'
          },
          {
            id: 'm4u1l3q5',
            type: 'choice',
            question: '把306万、360万、63万、630万按从大到小的顺序排列，排在第二位的是？',
            options: ['306万', '360万', '63万', '630万'],
            answer: '360万',
            hint: '先比较大小再排列',
            explanation: '从大到小排列：630万 > 360万 > 306万 > 63万，排在第二位的是360万。'
          },
          {
            id: 'm4u1l3q6',
            type: 'fill',
            question: '一个数改写成以"万"为单位是450万，这个数原来是___。',
            answer: '4500000',
            hint: '450万就是在450后面加4个0',
            explanation: '450万 = 4500000，在450后面添上4个0就是原来的数。'
          },
          {
            id: 'm4u1l3q7',
            type: 'fill',
            question: '在○里填">""<"或"="：7800000 ○ 780万。',
            answer: '=',
            hint: '[大数比较与改写]（数学-大数的认识-第3课）',
            explanation: '7800000改写成以万为单位就是780万，大小不变，所以7800000 = 780万。'
          }
        ]
      },
      {
        id: 'm4u1l4',
        title: '近似数——四舍五入法',
        order: 4,
        teachingMethod: 'CPA·P→A',
        content: [
          { type: 'text', content: '有时候我们不需要精确的数，用近似数就够了。求近似数最常用的方法是"四舍五入法"。', animationType: 'reveal' },
          { type: 'example', content: '234567四舍五入到万位：看千位上的4，4<5舍去，所以234567≈23万。', label: '四舍五入', animationType: 'bounce' },
          { type: 'formula', content: '四舍五入法：要看省略的尾数最高位上的数。如果是0、1、2、3、4就舍去（四舍），如果是5、6、7、8、9就进一（五入）。', label: '四舍五入法', animationType: 'typewriter' },
          { type: 'tip', content: '关键口诀：看下一位，5以上进1，5以下舍去。要看省略尾数的最高位！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '四舍五入步骤动画：确定精确到哪一位→看下一位→判断进或舍→写出近似数', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '四舍五入法步骤',
              timelineConfig: {
                steps: [
                  { text: '第1步：确定精确到万位', emoji: '1️⃣', ttsNarration: '先确定要精确到哪一位', duration: 1 },
                  { text: '第2步：看千位上的数字', emoji: '👀', ttsNarration: '看省略尾数的最高位', duration: 1 },
                  { text: '第3步：千位是4，小于5，舍去', emoji: '✂️', ttsNarration: '4小于5，四舍', duration: 1 },
                  { text: '第4步：234567≈23万', emoji: '✅', ttsNarration: '结果约等于23万', duration: 1 },
                ]
              },
              ttsNarration: '四舍五入四步走：一确定，二看数，三判断，四写出！',
            }
          },
          { type: 'example', content: '7890000四舍五入到百万位：看十万位上的8，8>5进一，所以7890000≈8000000=800万。', label: '进一例题', animationType: 'bounce' },
          { type: 'tip', content: '注意：四舍五入后用约等号"≈"，不是等号"="。精确到哪一位就看它后面一位的数字。', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范四舍五入到万位：先确定精确位，再看下一位，5以上进1，5以下舍去。示范几个例题。',
        weDo: '亲子一起做四舍五入练习，家长出数，孩子判断舍入，互相检查。',
        youDo: '孩子独立求近似数，完成四舍五入练习。',
        parentTips: '四舍五入：看下一位，5以上进1，5以下舍去。提醒孩子用约等号。',
        funElement: '歇后语：四舍五入——差不多就行。笑话：5对4说——我进位了，你被舍了！小游戏：四舍五入转盘，转到几就四舍五入！',
        gsapAnimations: [
          '[GSAP:timeline|四舍五入动画：数字→看下一位→进/舍→结果|1.5s|点击播放|power2.inOut]',
          '[GSAP:highlight|省略尾数最高位高亮|0.5s|步骤2|power2.out]'
        ],
        images: [
          '[IMG:illustration|四舍五入示意图|500x300|教学风|png|箭头指向+进舍]',
          '[IMG:illustration|约等号用法图|300x200|教学风|png|约等号]'
        ],
        practiceQuestions: [
          {
            id: 'm4u1l4q1',
            type: 'choice',
            question: '234567四舍五入到万位约等于多少？',
            options: ['23万', '24万', '20万', '235万'],
            answer: '23万',
            hint: '看千位上的数字，是4，4<5怎么办？',
            explanation: '四舍五入到万位，看千位上的4，4<5舍去，所以234567≈23万。'
          },
          {
            id: 'm4u1l4q2',
            type: 'fill',
            question: '456320四舍五入到万位约等于___万。',
            answer: '46',
            hint: '看千位上的6，6>5怎么办？',
            explanation: '四舍五入到万位，看千位上的6，6>5进一，所以456320≈46万。'
          },
          {
            id: 'm4u1l4q3',
            type: 'choice',
            question: '7890000四舍五入到百万位约等于多少？',
            options: ['700万', '800万', '790万', '789万'],
            answer: '800万',
            hint: '看十万位上的8，8>5怎么办？',
            explanation: '四舍五入到百万位，看十万位上的8，8>5进一，7+1=8，所以7890000≈800万。'
          },
          {
            id: 'm4u1l4q4',
            type: 'fill',
            question: '一个数四舍五入到万位约是8万，这个数最大是___。',
            answer: '84999',
            hint: '四舍的最大数：万位是8，千位最大是4',
            explanation: '要使四舍五入后是8万，万位是8，千位必须小于5（最大是4），其余各位最大是9，所以最大是84999。'
          },
          {
            id: 'm4u1l4q5',
            type: 'choice',
            question: '省略亿位后面的尾数，623456789约等于多少？',
            options: ['6亿', '7亿', '62亿', '623亿'],
            answer: '6亿',
            hint: '看千万位上的2，2<5怎么办？',
            explanation: '省略亿位后面的尾数，看千万位上的2，2<5舍去，所以623456789≈6亿。'
          },
          {
            id: 'm4u1l4q6',
            type: 'fill',
            question: '某市人口约为230万人，实际人口最少是___人。',
            answer: '2295000',
            hint: '五入的最小数：万位是9，千位最小是5',
            explanation: '约230万，五入的最小数是2295000（万位9进一后变230万，千位最小是5），所以最少是2295000人。'
          },
          {
            id: 'm4u1l4q7',
            type: 'fill',
            question: '372800四舍五入到万位约等于___万。',
            answer: '37',
            hint: '[四舍五入法]（数学-大数的认识-第4课）',
            explanation: '四舍五入到万位，看千位上的2，2<5舍去，所以372800≈37万。'
          }
        ]
      },
      {
        id: 'm4u1l5',
        title: '大数综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了大数的认识、读写、比较、改写和四舍五入。现在来检测一下你的掌握情况吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①数位顺序表 ②分级读写法 ③大小比较 ④整万整亿改写 ⑤四舍五入求近似数', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：一个九位数，最高位是5，千万位是3，万位是8，其余是0。这个数写作530080000，读作五亿三千零八万，四舍五入到亿位约等于5亿。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测时注意：读写要先分级，比较看位数，改写用等号，四舍五入用约等号！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '综合检测通关动画：完成所有题目后，大数达人徽章弹出', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '大数达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '🏆', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为大数达人' },
                  { text: '大数达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '大数达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成大数的认识单元，你是大数达人！',
            }
          },
          { type: 'tip', content: '目标：读写+比较+改写+近似数，正确率达到80%以上就能获得大数达人徽章！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：给出一个大数，示范读写、比较、改写、四舍五入的完整过程。',
        weDo: '亲子一起做大数综合练习，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成大数综合测试，争取正确率80%以上。',
        parentTips: '读写+比较+改写+近似数，正确率达到80%以上为通过。注意孩子的薄弱环节。',
        funElement: '歇后语：芝麻官打灯笼——照旧（照舅）。笑话：大数说——别数了，你们数不过来！小游戏：大数知识竞赛，抢答得分！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥80%|power1.out|particleCount:40]',
          '[GSAP:starFlyIn|大数达人徽章飞入|0.8s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|大数达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|大数知识点思维导图|500x300|教学风|png|知识导图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u1l5q1',
            type: 'choice',
            question: '一个数的最高位是千万位，这个数是几位数？',
            options: ['七位数', '八位数', '九位数', '六位数'],
            answer: '八位数',
            hint: '千万位是第几位？',
            explanation: '从右到左，千万位是第8位，所以最高位是千万位的数是八位数。'
          },
          {
            id: 'm4u1l5q2',
            type: 'fill',
            question: '50060000读作___。',
            answer: '五千零六万',
            hint: '先分级：5006 | 0000',
            explanation: '分级为5006|0000，万级5006读作五千零六，加"万"，个级全零不读，读作五千零六万。'
          },
          {
            id: 'm4u1l5q3',
            type: 'choice',
            question: '把39999、40001、39998、40000按从大到小排列，正确的是？',
            options: ['40001>40000>39999>39998', '40000>40001>39999>39998', '39998>39999>40000>40001', '40001>39999>40000>39998'],
            answer: '40001>40000>39999>39998',
            hint: '都是五位数，从高位比起',
            explanation: '四个数都是五位数，从最高位比起：40001和40000的前四位都是4000，个位1>0，所以40001最大；依次排列为40001>40000>39999>39998。'
          },
          {
            id: 'm4u1l5q4',
            type: 'fill',
            question: '把7800000改写成以"万"为单位的数是___万。',
            answer: '780',
            hint: '去掉末尾4个0',
            explanation: '7800000去掉末尾4个0得到780，改写为780万。'
          },
          {
            id: 'm4u1l5q5',
            type: 'choice',
            question: '一个数四舍五入到万位是45万，这个数不可能是？',
            options: ['454999', '445000', '455001', '454000'],
            answer: '455001',
            hint: '四舍的数万位是4千位小于5；五入的数万位是5千位大于等于5',
            explanation: '四舍五入到45万，四舍的数万位是5千位小于5（如454999），五入的数万位是4千位大于等于5（如445000）。455001四舍五入到万位是46万，不是45万。'
          },
          {
            id: 'm4u1l5q6',
            type: 'fill',
            question: '一个数由8个千万、5个万和3个百组成，这个数写作___。',
            answer: '80050300',
            hint: '8个千万=80000000，5个万=50000，3个百=300',
            explanation: '8个千万是80000000，5个万是50000，3个百是300，合起来是80050300。'
          },
          {
            id: 'm4u1l5q7',
            type: 'fill',
            question: '用3、0、5、8、1组成的最小五位数是___。',
            answer: '10358',
            hint: '[大数的认识和比较]（数学-大数的认识-第1课）',
            explanation: '要组成最小的五位数，最高位不能是0，所以用最小的非零数1开头，其余从小到大排列：10358。'
          }
        ]
      }
    ]
  },

  // ==================== 第二单元：角的度量 ====================
  {
    id: 'm4u2',
    title: '角的度量',
    subtitle: '线与角的世界，量出精彩',
    order: 2,
    lessons: [
      {
        id: 'm4u2l1',
        title: '线段、直线、射线',
        order: 1,
        teachingMethod: 'CPA·C→P：实物→图示→符号',
        content: [
          { type: 'text', content: '今天我们来认识三种线：线段、射线和直线。它们有什么不同呢？一起来看看！', animationType: 'reveal' },
          { type: 'example', content: '线段：有两个端点，可以量出长度（如一根拉紧的线）。射线：只有一个端点，向一方无限延伸（如手电筒的光）。直线：没有端点，向两端无限延伸。', label: '三种线', animationType: 'bounce' },
          { type: 'formula', content: '线段：2个端点，有限长。射线：1个端点，向一方无限延伸。直线：0个端点，向两方无限延伸。', label: '三种线特征', animationType: 'typewriter' },
          { type: 'tip', content: '巧记：线段两端有端点，射线一端有端点，直线两端无端点。端点数量是区分三者的关键！', label: '巧记口诀', animationType: 'pulse' },
          { type: 'animation', content: '线段→射线（一端延伸）→直线（两端延伸）的绘制动画', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '三种线的绘制',
              shapeDrawConfig: {
                shape: 'lines',
                vertices: [[10, 50], [40, 50]],
                labels: ['线段：两端有端点'],
              },
              ttsNarration: '线段有两个端点；把线段一端无限延伸变成射线，射线有一个端点；把线段两端无限延伸变成直线，直线没有端点！',
            }
          },
          { type: 'text', content: '线段和射线都是直线的一部分。经过一点可以画无数条直线，经过两点只能画一条直线。', animationType: 'reveal' },
          { type: 'tip', content: '易错提醒：射线和直线是"无限长"的，不能量出长度。只有线段可以量出长度！', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长用拉紧的线演示线段，松开一端演示射线，松开两端演示直线，让孩子直观感受三种线的区别。',
        weDo: '亲子一起画三种线，家长说名称，孩子画出来，互相检查端点数量。',
        youDo: '孩子独立辨认和画线，区分线段、射线和直线。',
        parentTips: '线段有两个端点，射线一个，直线没有。用实物演示帮助孩子理解"无限延伸"。',
        funElement: '笑话：直线对线段说——你太短了！线段说——至少我能量出来！歇后语：一根筋——直来直去。小游戏：画线小达人，听名称画线！',
        gsapAnimations: [
          '[GSAP:shapeDraw|线段→射线（一端延伸）→直线（两端延伸）|1.5s|点击播放|power2.out]',
          '[GSAP:stagger|三种线端点依次标注|0.4s|绘制完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|三种线对比图|500x200|教学风|png|线段/射线/直线]',
          '[IMG:illustration|手电筒射线示意图|400x300|可爱卡通风|png|射线举例]'
        ],
        practiceQuestions: [
          {
            id: 'm4u2l1q1',
            type: 'choice',
            question: '线段有几个端点？',
            options: ['0个', '1个', '2个', '无数个'],
            answer: '2个',
            hint: '线段两端各有一个……',
            explanation: '线段有两个端点，可以量出长度。两个端点确定了线段的长度。'
          },
          {
            id: 'm4u2l1q2',
            type: 'fill',
            question: '射线有___个端点。',
            answer: '1',
            hint: '射线向一方无限延伸，另一端是……',
            explanation: '射线只有一个端点，从端点出发向一个方向无限延伸。'
          },
          {
            id: 'm4u2l1q3',
            type: 'choice',
            question: '下面关于直线的说法，正确的是？',
            options: ['有一个端点', '有两个端点', '没有端点', '可以量出长度'],
            answer: '没有端点',
            hint: '直线向两端无限延伸',
            explanation: '直线没有端点，向两端无限延伸，不能量出长度。'
          },
          {
            id: 'm4u2l1q4',
            type: 'fill',
            question: '把线段向一端无限延伸，得到的是___。',
            answer: '射线',
            hint: '一端延伸，另一端还有端点',
            explanation: '线段向一端无限延伸，保留一个端点，得到的是射线。'
          },
          {
            id: 'm4u2l1q5',
            type: 'choice',
            question: '经过一点可以画多少条直线？',
            options: ['1条', '2条', '10条', '无数条'],
            answer: '无数条',
            hint: '【期末真题】想一想，从一点出发可以向四面八方画线',
            explanation: '经过一点可以向四面八方画直线，没有限制，所以可以画无数条直线。'
          },
          {
            id: 'm4u2l1q6',
            type: 'fill',
            question: '经过两点可以画___条直线。',
            answer: '1',
            hint: '两点确定一条……',
            explanation: '经过两点只能画一条直线，这就是"两点确定一条直线"。'
          },
          {
            id: 'm4u2l1q7',
            type: 'fill',
            question: '把线段向两端无限延伸，得到的是___。',
            answer: '直线',
            hint: '[线的认识]（数学-角的度量-第1课）',
            explanation: '线段向两端无限延伸，没有端点了，得到的是直线。'
          }
        ]
      },
      {
        id: 'm4u2l2',
        title: '角的认识与量角器',
        order: 2,
        teachingMethod: '多感官：实物操作',
        content: [
          { type: 'text', content: '从一点引出两条射线组成的图形叫做角。这个点叫做角的顶点，两条射线叫做角的边。', animationType: 'reveal' },
          { type: 'example', content: '角用符号"∠"表示，如∠1、∠AOB。角的大小与两条边张开的程度有关，与边的长短无关。', label: '认识角', animationType: 'bounce' },
          { type: 'formula', content: '角的定义：从一点引出两条射线组成的图形。角的表示：∠1、∠AOB（顶点字母在中间）。角的单位：度（°）。', label: '角的知识', animationType: 'typewriter' },
          { type: 'tip', content: '量角器是把半圆分成180等份，每份是1度（1°）。量角器的中心对准角的顶点，0°刻度线对准角的一条边。', label: '量角器', animationType: 'pulse' },
          { type: 'animation', content: '角的两条边从顶点画出，配合量角器显示角的度数', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '角的绘制',
              shapeDrawConfig: {
                shape: 'angle',
                vertices: [[30, 70], [30, 30], [60, 30]],
                labels: ['顶点', '边', '边'],
              },
              ttsNarration: '从一点引出两条射线组成角，这个点是顶点，两条射线是边。角的大小看两条边张开的大小！',
            }
          },
          { type: 'text', content: '量角三步：①点对点（中心对顶点）②线对边（0°线对一条边）③读刻度（看另一条边对准的刻度）。', animationType: 'reveal' },
          { type: 'tip', content: '注意：读刻度时看0°线在哪边，0°在内圈读内圈刻度，0°在外圈读外圈刻度！', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长用两根木条组成角，演示角的大小变化，再示范量角器量角的三步法。',
        weDo: '亲子一起量角，家长画角，孩子用量角器量出度数，互相检查。',
        youDo: '孩子独立量角，用量角器量出各种角的度数。',
        parentTips: '从一点引出两条射线组成角，用量角器量角。强调"点对点、线对边、读刻度"三步法。',
        funElement: '笑话：角说——我张开嘴就能变大！歇后语：张飞穿针——大眼瞪小眼（看刻度）。小游戏：量角小能手，看谁量得准！',
        gsapAnimations: [
          '[GSAP:shapeDraw|角的两条边从顶点画出|0.8s|点击画角|power2.out]',
          '[GSAP:highlight|量角器中心点和0°线高亮|0.5s|量角时|power2.out]'
        ],
        images: [
          '[IMG:illustration|量角器使用示意图|500x300|教学风|png|量角器+角]',
          '[IMG:illustration|角的各部分名称图|400x200|教学风|png|顶点+边]'
        ],
        practiceQuestions: [
          {
            id: 'm4u2l2q1',
            type: 'choice',
            question: '角是由什么组成的？',
            options: ['两条直线', '两条线段', '从一点引出的两条射线', '一条射线'],
            answer: '从一点引出的两条射线',
            hint: '回忆角的定义',
            explanation: '从一点引出两条射线组成的图形叫做角。这个点是顶点，两条射线是边。'
          },
          {
            id: 'm4u2l2q2',
            type: 'fill',
            question: '角通常用符号___表示。',
            answer: '∠',
            hint: '这个符号像一个小于号加一条横线',
            explanation: '角用符号"∠"表示，如∠1、∠ABC。'
          },
          {
            id: 'm4u2l2q3',
            type: 'choice',
            question: '量角器把半圆分成了多少等份？',
            options: ['90等份', '180等份', '360等份', '100等份'],
            answer: '180等份',
            hint: '半圆是180度',
            explanation: '量角器把半圆分成180等份，每份是1度（1°），所以量角器最多量180°。'
          },
          {
            id: 'm4u2l2q4',
            type: 'fill',
            question: '量角器把半圆分成180等份，每份是___度。',
            answer: '1',
            hint: '180等份，每份是1度',
            explanation: '量角器把半圆分成180等份，每一份就是1度，记作1°。'
          },
          {
            id: 'm4u2l2q5',
            type: 'choice',
            question: '角的大小与什么有关？',
            options: ['边的长短', '两条边张开的程度', '顶点的位置', '角的名称'],
            answer: '两条边张开的程度',
            hint: '两条边张得越开，角越大还是越小？',
            explanation: '角的大小与两条边张开的程度有关，张开越大角越大，与边的长短无关。'
          },
          {
            id: 'm4u2l2q6',
            type: 'fill',
            question: '一个角是45°，用5倍放大镜看，这个角是___度。',
            answer: '45',
            hint: '角的大小与边的长短有关吗？',
            explanation: '角的大小与两条边张开的程度有关，与边的长短无关。放大镜只是把边画长了，角的大小不变，还是45°。'
          },
          {
            id: 'm4u2l2q7',
            type: 'fill',
            question: '量角时，量角器的___要对准角的顶点。',
            answer: '中心',
            hint: '[角的认识与度量]（数学-角的度量-第2课）',
            explanation: '量角三步法第一步是"点对点"：量角器的中心要对准角的顶点。'
          }
        ]
      },
      {
        id: 'm4u2l3',
        title: '角的分类——锐直钝平周',
        order: 3,
        teachingMethod: '支架式：分类对比',
        content: [
          { type: 'text', content: '角可以分为五大类：锐角、直角、钝角、平角和周角。让我们一起来认识它们！', animationType: 'reveal' },
          { type: 'example', content: '锐角<90°，直角=90°，钝角>90°且<180°，平角=180°，周角=360°。', label: '五种角', animationType: 'bounce' },
          { type: 'formula', content: '锐角<90°＜钝角<180°，直角=90°，平角=180°=2个直角，周角=360°=2个平角=4个直角。', label: '角的分类', animationType: 'typewriter' },
          { type: 'tip', content: '大小关系：锐角 < 直角 < 钝角 < 平角 < 周角。1平角=2直角，1周角=2平角=4直角。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '5种角依次出现并标注度数的动画，从锐角到周角逐步展开', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '五种角的分类',
              timelineConfig: {
                steps: [
                  { text: '锐角：小于90°', emoji: '🔺', ttsNarration: '锐角小于90度', duration: 1 },
                  { text: '直角：等于90°', emoji: '📐', ttsNarration: '直角等于90度', duration: 1 },
                  { text: '钝角：大于90°小于180°', emoji: '◇', ttsNarration: '钝角大于90度小于180度', duration: 1 },
                  { text: '平角：等于180°', emoji: '▬', ttsNarration: '平角等于180度', duration: 1 },
                  { text: '周角：等于360°', emoji: '⭕', ttsNarration: '周角等于360度', duration: 1 },
                ]
              },
              ttsNarration: '角分五种：锐角小于90度，直角等于90度，钝角大于90度小于180度，平角等于180度，周角等于360度！',
            }
          },
          { type: 'text', content: '特殊关系：1个周角 = 2个平角 = 4个直角。钟面上，3点整时针和分针成直角，6点整成平角。', animationType: 'reveal' },
          { type: 'tip', content: '巧记：锐角尖尖直角方，钝角胖胖平角平，周角转圈回到家！', label: '巧记口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范5种角：用两根木条旋转展示锐角、直角、钝角、平角、周角，并标注度数。',
        weDo: '亲子一起分类，家长画角，孩子说出角的类型，互相检查。',
        youDo: '孩子独立辨认和画角，说出各种角的度数范围。',
        parentTips: '锐角<90°，直角=90°，钝角>90°且<180°，平角=180°，周角=360°。记住它们的大小关系。',
        funElement: '笑话：锐角说——我最尖！钝角说——我最胖！直角说——我最标准！歇后语：周而复始——转一圈又回来。小游戏：角分类接龙，说角名！',
        gsapAnimations: [
          '[GSAP:timeline|5种角依次出现并标注度数|1.5s|点击播放|power2.out]',
          '[GSAP:shapeDraw|每种角的图形绘制|0.8s|每步出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|5种角分类图|500x300|教学风|png|5种角+度数]',
          '[IMG:illustration|钟面角示意图|400x300|教学风|png|钟面角度]'
        ],
        practiceQuestions: [
          {
            id: 'm4u2l3q1',
            type: 'choice',
            question: '直角是多少度？',
            options: ['45°', '90°', '180°', '360°'],
            answer: '90°',
            hint: '直角是最"标准"的角',
            explanation: '直角等于90°。我们用的三角板上的角就有直角。'
          },
          {
            id: 'm4u2l3q2',
            type: 'fill',
            question: '钝角大于___度且小于180度。',
            answer: '90',
            hint: '钝角比直角大，比平角小',
            explanation: '钝角大于90°且小于180°，介于直角和平角之间。'
          },
          {
            id: 'm4u2l3q3',
            type: 'choice',
            question: '1个平角等于几个直角？',
            options: ['1个', '2个', '3个', '4个'],
            answer: '2个',
            hint: '180°÷90°=？',
            explanation: '平角=180°，直角=90°，180°÷90°=2，所以1个平角等于2个直角。'
          },
          {
            id: 'm4u2l3q4',
            type: 'fill',
            question: '1周角=___度=___个平角。',
            answer: '360;2',
            acceptableAnswers: ['360;2', '360，2'],
            hint: '周角是转一圈，平角是转半圈',
            explanation: '周角=360°，平角=180°，360°÷180°=2，所以1周角=360°=2个平角。'
          },
          {
            id: 'm4u2l3q5',
            type: 'choice',
            question: '把锐角、直角、钝角、平角、周角按从小到大排列，正确的是？',
            options: ['锐角<直角<钝角<平角<周角', '直角<锐角<钝角<平角<周角', '锐角<钝角<直角<平角<周角', '锐角<直角<平角<钝角<周角'],
            answer: '锐角<直角<钝角<平角<周角',
            hint: '回忆每种角的度数范围',
            explanation: '锐角<90°<直角=90°<钝角<180°<平角=180°<周角=360°，所以从大到小是锐角<直角<钝角<平角<周角。'
          },
          {
            id: 'm4u2l3q6',
            type: 'fill',
            question: '一个角是90°的2倍，它是___角（填角的类型）。',
            answer: '平',
            hint: '90°×2=180°，180°是什么角？',
            explanation: '90°×2=180°，180°是平角，所以一个角是90°的2倍，它是平角。'
          },
          {
            id: 'm4u2l3q7',
            type: 'fill',
            question: '1个周角=___个直角。',
            answer: '4',
            hint: '[角的分类]（数学-角的度量-第3课）',
            explanation: '周角=360°，直角=90°，360°÷90°=4，所以1个周角=4个直角。'
          }
        ]
      },
      {
        id: 'm4u2l4',
        title: '画角——用量角器和三角板',
        order: 4,
        teachingMethod: 'EDI：示范→合作→独立',
        content: [
          { type: 'text', content: '学会了量角，现在来学画角！用量角器可以画出任意度数的角，用三角板可以画出特殊度数的角。', animationType: 'reveal' },
          { type: 'example', content: '画65°的角：①画一条射线 ②量角器中心对准端点，0°线对准射线 ③在65°处点一个点 ④连线。', label: '画角步骤', animationType: 'bounce' },
          { type: 'formula', content: '量角器画角四步：①画射线②对中心和0°线③找度数点④连线。三角板画角：30°+45°=75°，60°+90°=150°等。', label: '画角方法', animationType: 'typewriter' },
          { type: 'tip', content: '用一副三角板可以画出：15°、30°、45°、60°、75°、90°、105°、120°、135°、150°、165°、180°的角。', label: '三角板画角', animationType: 'pulse' },
          { type: 'animation', content: '画角过程动画：画射线→对量角器→找度数→连线', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '画角过程',
              shapeDrawConfig: {
                shape: 'angle',
                vertices: [[20, 60], [20, 20], [50, 35]],
                labels: ['射线', '65°', '连线'],
              },
              ttsNarration: '画角四步走：一画射线，二对中心和零度线，三找度数点点，四连线！',
            }
          },
          { type: 'text', content: '三角板的度数：一个三角板是45°-45°-90°，另一个是30°-60°-90°。通过拼合或做差可以画出多种度数的角。', animationType: 'reveal' },
          { type: 'tip', content: '检查方法：画完后可以量一量检查度数是否正确。锐角画出来应该尖尖的，钝角应该张得较开。', label: '检查方法', animationType: 'pulse' },
        ],
        iDo: '家长示范画指定度数的角：用量角器四步法画65°的角，再用三角板拼出75°的角。',
        weDo: '亲子一起画角，家长说度数，孩子画出来，互相用量角器检查。',
        youDo: '孩子独立画指定度数的角，用量角器和三角板各画几个。',
        parentTips: '量角器画角：画射线→对准中心和0°线→找度数点→连线。三角板画角可拼可做差。',
        funElement: '笑话：三角板说——我有三个角，但只能给你用两个！歇后语：照葫芦画瓢——按样子来。小游戏：画角PK赛，看谁画得准！',
        gsapAnimations: [
          '[GSAP:shapeDraw|画角过程动画（4步）|2s|点击播放|power1.inOut]',
          '[GSAP:stagger|三角板拼合动画|0.6s|拼角时|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|画角步骤图|500x300|教学风|png|4步画角]',
          '[IMG:illustration|三角板拼角示意图|400x300|教学风|png|三角板拼合]'
        ],
        practiceQuestions: [
          {
            id: 'm4u2l4q1',
            type: 'choice',
            question: '用量角器画角的第一步是什么？',
            options: ['找度数', '画一条射线', '连线', '对准中心'],
            answer: '画一条射线',
            hint: '先要有一条边才能量度数',
            explanation: '用量角器画角的第一步是画一条射线，作为角的一条边。'
          },
          {
            id: 'm4u2l4q2',
            type: 'fill',
            question: '用量角器画角，先画一条___。',
            answer: '射线',
            hint: '角的一条边',
            explanation: '画角第一步是画一条射线作为角的一条边，然后用量角器量出度数再画另一条边。'
          },
          {
            id: 'm4u2l4q3',
            type: 'choice',
            question: '用一副三角板可以直接画出下面哪个度数的角？',
            options: ['65°', '55°', '75°', '85°'],
            answer: '75°',
            hint: '三角板有30°、45°、60°、90°，哪些可以拼出？',
            explanation: '用三角板的45°+30°=75°，所以75°可以用一副三角板直接画出。'
          },
          {
            id: 'm4u2l4q4',
            type: 'fill',
            question: '用一副三角板可以拼出___度和___度的角。（写出一个即可，如75）',
            answer: '75',
            acceptableAnswers: ['15', '30', '45', '60', '75', '90', '105', '120', '135', '150', '165', '180'],
            hint: '三角板有30°、45°、60°、90°，拼一拼',
            explanation: '用一副三角板可以拼出15°、30°、45°、60°、75°、90°、105°、120°、135°、150°、165°、180°等多种度数的角。'
          },
          {
            id: 'm4u2l4q5',
            type: 'choice',
            question: '用一副三角板不能画出下面哪个度数的角？',
            options: ['75°', '135°', '140°', '150°'],
            answer: '140°',
            hint: '三角板的角是30°、45°、60°、90°，140能由这些数加减得到吗？',
            explanation: '140°不能由30°、45°、60°、90°通过加减得到，所以不能用一副三角板画出140°的角。'
          },
          {
            id: 'm4u2l4q6',
            type: 'fill',
            question: '用量角器画一个120°的角，画好射线后，量角器的0°刻度线要对准这条___。',
            answer: '射线',
            hint: '0°线要对准角的已知边',
            explanation: '画角时，量角器的0°刻度线要对准已画的射线（角的一条边），中心对准射线的端点（角的顶点）。'
          },
          {
            id: 'm4u2l4q7',
            type: 'fill',
            question: '用三角板画角，60°+90°=___度。',
            answer: '150',
            hint: '[画角方法]（数学-角的度量-第4课）',
            explanation: '用三角板的60°角和90°角拼在一起，60°+90°=150°，可以画出150°的角。'
          }
        ]
      },
      {
        id: 'm4u2l5',
        title: '角与线综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了线段、直线、射线、角的认识、量角、角分类和画角。来检测一下掌握情况吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①三种线的特征 ②角的定义和度量 ③五种角的分类 ④画角方法（量角器和三角板）', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：一个角是直角的3倍，它是270°的角。270°=180°+90°=1个平角+1个直角，是一个钝角（大于180°但小于360°，实际上270°是优角）。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测要点：线的辨认+角的度量+画角，注意区分三种线和五种角！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '角线达人通关动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '角线达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '📐', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为角线达人' },
                  { text: '角线达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '角线达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成角的度量单元，你是角线达人！',
            }
          },
          { type: 'tip', content: '目标：线的辨认+角的度量+画角，正确率达到80%以上就能获得角线达人徽章！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：辨认三种线、量角、画角，展示完整解题过程。',
        weDo: '亲子一起练习，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成角与线综合测试，争取正确率80%以上。',
        parentTips: '线的辨认+角的度量+画角，正确率达到80%以上为通过。注意孩子对量角器使用的掌握。',
        funElement: '歇后语：井底之蛙——目光短浅（看不到大角）。笑话：角对量角器说——别量了，我自己知道多大！小游戏：角线知识抢答赛！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥80%|power1.out|particleCount:40]',
          '[GSAP:starFlyIn|角线达人徽章飞入|0.8s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|角线达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|角线知识思维导图|500x300|教学风|png|知识导图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u2l5q1',
            type: 'choice',
            question: '下面哪种线可以向两端无限延伸？',
            options: ['线段', '射线', '直线', '以上都可以'],
            answer: '直线',
            hint: '回忆三种线的特征',
            explanation: '直线没有端点，可以向两端无限延伸。线段有两个端点不能延伸，射线只有一个端点向一端延伸。'
          },
          {
            id: 'm4u2l5q2',
            type: 'fill',
            question: '一个平角是___度。',
            answer: '180',
            hint: '平角等于几个直角？',
            explanation: '平角等于180°，等于2个直角（90°×2=180°）。'
          },
          {
            id: 'm4u2l5q3',
            type: 'choice',
            question: '用量角器量一个角，0°刻度线在内圈，另一条边对准外圈60°，这个角是多少度？',
            options: ['60°', '120°', '30°', '150°'],
            answer: '60°',
            hint: '0°在内圈就读内圈刻度',
            explanation: '量角时看0°线在哪边。0°在内圈就读内圈，另一条边对准内圈的60°刻度，所以角是60°。注意内外圈不要读反。'
          },
          {
            id: 'm4u2l5q4',
            type: 'fill',
            question: '钟面上9点整，时针和分针所成的角是___角（填类型）。',
            answer: '直',
            hint: '9点整时针和分针成多少度？',
            explanation: '9点整时，时针指向9，分针指向12，它们之间是90°，是直角。'
          },
          {
            id: 'm4u2l5q5',
            type: 'choice',
            question: '∠1+∠2=180°，如果∠1是锐角，那么∠2一定是什么角？',
            options: ['锐角', '直角', '钝角', '无法确定'],
            answer: '钝角',
            hint: '∠1<90°，∠2=180°-∠1，∠2的范围是？',
            explanation: '∠1是锐角所以∠1<90°，∠2=180°-∠1>180°-90°=90°，且∠2<180°，所以∠2是钝角。'
          },
          {
            id: 'm4u2l5q6',
            type: 'fill',
            question: '用一副三角板拼角，45°+60°=___度。',
            answer: '105',
            hint: '45+60=？',
            explanation: '用三角板的45°角和60°角拼在一起，45°+60°=105°，可以画出105°的角。'
          },
          {
            id: 'm4u2l5q7',
            type: 'fill',
            question: '经过一点可以画___条射线。',
            answer: '无数',
            hint: '[线的认识]（数学-角的度量-第1课）',
            explanation: '经过一点可以向四面八方画射线，没有限制，所以可以画无数条射线。'
          }
        ]
      }
    ]
  },
  // ==================== 第三单元：三位数乘两位数 ====================
  {
    id: 'm4u3',
    title: '三位数乘两位数',
    subtitle: '竖式乘法大挑战，算出精彩',
    order: 3,
    lessons: [
      {
        id: 'm4u3l1',
        title: '三位数乘两位数笔算',
        order: 1,
        teachingMethod: 'CPA·P→A：图示→竖式',
        content: [
          { type: 'text', content: '三位数乘两位数怎么算？关键是用竖式分步计算：先用两位数个位上的数乘三位数，再用十位上的数乘三位数，最后把两次的积相加。', animationType: 'reveal' },
          { type: 'example', content: '145×12：先用个位2乘145得290，再用十位1乘145得145（末尾对十位），最后290+1450=1740。', label: '竖式示范', animationType: 'bounce' },
          { type: 'formula', content: '笔算法则：先用两位数个位上的数去乘三位数，积的末位和个位对齐；再用两位数十位上的数去乘三位数，积的末位和十位对齐；最后把两次的积加起来。', label: '笔算法则', animationType: 'typewriter' },
          { type: 'tip', content: '关键提醒：用十位上的数乘时，积的末尾要和十位对齐！这是最容易出错的地方。', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '145×12竖式逐步计算动画', animationType: 'verticalCalc',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '145×12竖式计算',
              verticalCalcConfig: {
                num1: 145,
                num2: 12,
                operator: '×',
                result: 1740,
                steps: [
                  { text: '先用12个位上的2乘145：2×5=10，2×40=80，2×100=200，得290', highlight: 'ones' },
                  { text: '再用12十位上的1乘145：1×5=5，1×40=40，1×100=100，得145（末尾对十位）', highlight: 'tens' },
                  { text: '两次积相加：290+1450=1740', highlight: 'hundreds' },
                ]
              },
              ttsNarration: '先用个位2乘145得290，再用十位1乘145得1450，最后相加等于1740！',
            }
          },
          { type: 'text', content: '验算方法：可以交换两个因数的位置再乘一遍，或者用计算器验算。', animationType: 'reveal' },
          { type: 'tip', content: '对齐口诀：个位对个位，十位对十位，百位对百位，错位加起来！', label: '对齐口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范竖式145×12：先乘个位再乘十位，强调十位积末尾对十位，最后相加。',
        weDo: '亲子一起做竖式，家长出题，孩子做竖式，互相检查对齐和计算。',
        youDo: '孩子独立做竖式，完成三位数乘两位数的笔算练习。',
        parentTips: '先乘个位再乘十位，十位积末尾对十位。强调对齐和进位不要遗漏。',
        funElement: '笑话：竖式对横式说——站直了才算清楚！歇后语：一步一个脚印——踏踏实实。小游戏：竖式PK赛，看谁算得快又对！',
        gsapAnimations: [
          '[GSAP:verticalCalc|145×12竖式逐步计算|2s|点击播放|power2.out]',
          '[GSAP:numberCount|每次乘积数字滚动出现|0.5s|每步完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|三位数乘两位数竖式图|400x300|教学风|png|竖式步骤]',
          '[IMG:illustration|竖式对齐示意图|400x200|教学风|png|数位对齐]'
        ],
        practiceQuestions: [
          {
            id: 'm4u3l1q1',
            type: 'choice',
            question: '计算145×12时，先用两位数的什么位上的数乘145？',
            options: ['十位', '个位', '百位', '都可以'],
            answer: '个位',
            hint: '竖式计算从哪位开始？',
            explanation: '笔算乘法先用两位数个位上的数乘三位数，所以先用12个位上的2乘145。'
          },
          {
            id: 'm4u3l1q2',
            type: 'fill',
            question: '234×11=___。',
            answer: '2574',
            hint: '先用1乘234，再用10乘234，相加',
            explanation: '234×11：先用个位1乘234得234，再用十位1乘234得2340，234+2340=2574。'
          },
          {
            id: 'm4u3l1q3',
            type: 'choice',
            question: '236×15的结果是多少？',
            options: ['3450', '3540', '3440', '3640'],
            answer: '3540',
            hint: '236×5=1180，236×10=2360，相加',
            explanation: '236×15：先用个位5乘236得1180，再用十位1乘236得2360，1180+2360=3540。'
          },
          {
            id: 'm4u3l1q4',
            type: 'fill',
            question: '175×23=___。',
            answer: '4025',
            hint: '175×3=525，175×20=3500，相加',
            explanation: '175×23：先用个位3乘175得525，再用十位2乘175得3500，525+3500=4025。'
          },
          {
            id: 'm4u3l1q5',
            type: 'choice',
            question: '计算312×24时，用十位上的2乘312得到的积是（注意末尾对十位）：',
            options: ['624', '6240', '1248', '3120'],
            answer: '6240',
            hint: '【期末真题】十位上的2表示2个十，2×312=624，末尾对十位',
            explanation: '用十位上的2乘312得624，因为2在十位上表示20，所以实际是6240（末尾对十位）。'
          },
          {
            id: 'm4u3l1q6',
            type: 'fill',
            question: '学校买来25箱粉笔，每箱144盒，一共买了___盒粉笔。',
            answer: '3600',
            hint: '25×144=？',
            explanation: '25×144：先用个位4乘25... 不对，应该144×25。先用个位5乘144得720，再用十位2乘144得2880，720+2880=3600盒。'
          },
          {
            id: 'm4u3l1q7',
            type: 'fill',
            question: '竖式计算时，用十位上的数乘，积的末尾要和___位对齐。',
            answer: '十',
            hint: '[乘法笔算]（数学-三位数乘两位数-第1课）',
            explanation: '笔算乘法中，用两位数十位上的数乘三位数时，积的末尾要和十位对齐，因为十位上的数表示几个十。'
          }
        ]
      },
      {
        id: 'm4u3l2',
        title: '因数中间或末尾有0的乘法',
        order: 2,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '当因数中间或末尾有0时，怎么算呢？末尾有0可以先不算0，最后添上；中间有0时要照常乘。', animationType: 'reveal' },
          { type: 'example', content: '106×30：先算106×3=318，再在末尾添1个0，得3180。250×40：先算25×4=100，再添2个0，得10000。', label: '含0乘法', animationType: 'bounce' },
          { type: 'formula', content: '末尾有0的乘法：先不算末尾的0，算完后再添上相同个数的0。中间有0的乘法：0也要参与计算，0乘任何数都得0。', label: '含0法则', animationType: 'typewriter' },
          { type: 'tip', content: '易错提醒：中间的0不能跳过！如106×3，0×3=0，不要漏算。末尾的0可以先不算，最后添上。', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '250×40竖式计算（末尾0的特殊处理）动画', animationType: 'verticalCalc',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '250×40竖式计算',
              verticalCalcConfig: {
                num1: 250,
                num2: 40,
                operator: '×',
                result: 10000,
                steps: [
                  { text: '先不算末尾的0：算25×4=100', highlight: 'ones' },
                  { text: '250和40末尾共有2个0，添上2个0', highlight: 'tens' },
                  { text: '100添2个0 = 10000', highlight: 'hundreds' },
                ]
              },
              ttsNarration: '末尾有0先不算，25乘4等于100，再添上2个0，等于10000！',
            }
          },
          { type: 'example', content: '308×20：先算308×2=616，再添1个0，得6160。注意308中间的0要参与计算。', label: '中间有0', animationType: 'bounce' },
          { type: 'tip', content: '总结：末尾0先不算最后添，中间0照常乘不跳过！', label: '总结口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范106×30和250×40的竖式，讲解末尾0和中间0的不同处理方法。',
        weDo: '亲子一起做含0乘法，家长出题，孩子计算，互相检查0的处理。',
        youDo: '孩子独立做含0乘法竖式练习。',
        parentTips: '末尾有0先不算0，最后添上；中间有0要乘，0乘任何数都得0。',
        funElement: '笑话：0说——别小看我，乘出来我可重要了！歇后语：画蛇添足——多此一举（但添0不是）。小游戏：0的处理挑战赛！',
        gsapAnimations: [
          '[GSAP:verticalCalc|250×40竖式（0的特殊处理）|2s|点击播放|power2.out]',
          '[GSAP:highlight|末尾0高亮闪烁提示|0.5s|添0时|power2.out]'
        ],
        images: [
          '[IMG:illustration|含0乘法竖式图|400x300|教学风|png|0处理标注]',
          '[IMG:illustration|中间0和末尾0对比图|400x200|教学风|png|0的位置]'
        ],
        practiceQuestions: [
          {
            id: 'm4u3l2q1',
            type: 'choice',
            question: '106×30的结果是多少？',
            options: ['318', '3180', '3018', '380'],
            answer: '3180',
            hint: '先算106×3=318，再添1个0',
            explanation: '106×30：先算106×3=318，30末尾有1个0，添上1个0，得3180。'
          },
          {
            id: 'm4u3l2q2',
            type: 'fill',
            question: '250×40=___。',
            answer: '10000',
            hint: '先算25×4=100，再添2个0',
            explanation: '250×40：先不算末尾0，25×4=100，250和40末尾共2个0，添上2个0，得10000。'
          },
          {
            id: 'm4u3l2q3',
            type: 'choice',
            question: '308×20的结果是多少？',
            options: ['616', '6160', '61600', '6016'],
            answer: '6160',
            hint: '先算308×2=616，再添1个0',
            explanation: '308×20：先算308×2=616（注意中间0要乘：0×2=0），再添1个0，得6160。'
          },
          {
            id: 'm4u3l2q4',
            type: 'fill',
            question: '105×40=___。',
            answer: '4200',
            hint: '先算105×4=420，再添1个0',
            explanation: '105×40：先算105×4=420，添1个0，得4200。'
          },
          {
            id: 'm4u3l2q5',
            type: 'choice',
            question: '下面计算正确的是？',
            options: ['204×30=612', '204×30=6120', '204×30=61200', '204×30=660'],
            answer: '204×30=6120',
            hint: '先算204×3=612，再添1个0',
            explanation: '204×30：先算204×3=612（中间0×3=0），再添1个0，得6120。'
          },
          {
            id: 'm4u3l2q6',
            type: 'fill',
            question: '一个工厂每天生产205个零件，30天生产___个零件。',
            answer: '6150',
            hint: '205×30=？',
            explanation: '205×30：先算205×3=615，再添1个0，得6150个零件。'
          },
          {
            id: 'm4u3l2q7',
            type: 'fill',
            question: '计算103×20时，中间的0×2=___。',
            answer: '0',
            hint: '[含0乘法]（数学-三位数乘两位数-第2课）',
            explanation: '0乘任何数都得0，所以计算103×20时，中间的0×2=0，不能跳过。'
          }
        ]
      },
      {
        id: 'm4u3l3',
        title: '积的变化规律',
        order: 3,
        teachingMethod: '探究式：发现规律',
        content: [
          { type: 'text', content: '乘法中隐藏着有趣的规律！当一个因数变化时，积会怎么变化呢？让我们一起来探究！', animationType: 'reveal' },
          { type: 'example', content: '观察：3×4=12，6×4=24，12×4=48。一个因数4不变，另一个因数从3变到6（乘2），积从12变到24（也乘2）。', label: '发现规律', animationType: 'bounce' },
          { type: 'formula', content: '积的变化规律：两个数相乘，一个因数不变，另一个因数乘（或除以）几，积也乘（或除以）相同的数。', label: '积的变化规律', animationType: 'typewriter' },
          { type: 'tip', content: '延伸：如果两个因数都乘2，积就乘2×2=4。两个因数都除以2，积就除以2×2=4。', label: '延伸规律', animationType: 'pulse' },
          { type: 'animation', content: '因数变化→积变化对应展示动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '积的变化规律',
              timelineConfig: {
                steps: [
                  { text: '3×4=12', emoji: '✖️', ttsNarration: '3乘4等于12', duration: 1 },
                  { text: '6×4=24（因数乘2，积也乘2）', emoji: '📈', ttsNarration: '因数3变成6，乘了2，积也乘2变成24', duration: 1.5 },
                  { text: '12×4=48（因数再乘2，积也再乘2）', emoji: '📈', ttsNarration: '因数再乘2变成12，积也再乘2变成48', duration: 1.5 },
                ]
              },
              ttsNarration: '一个因数不变，另一个因数乘几，积也乘几，这就是积的变化规律！',
            }
          },
          { type: 'text', content: '利用这个规律可以快速计算：已知25×4=100，那么25×40=1000（因数4乘10，积也乘10）。', animationType: 'reveal' },
          { type: 'tip', content: '巧用规律：不会算的大数乘法，可以先算小的，再用规律推导。', label: '小贴士', animationType: 'pulse' },
        ],
        iDo: '家长示范一组题发现规律：3×4=12→6×4=24→12×4=48，引导孩子观察因数和积的变化关系。',
        weDo: '亲子一起探究规律，家长出题组，孩子发现规律并验证。',
        youDo: '孩子独立应用规律，快速计算相关的乘法题。',
        parentTips: '一个因数不变，另一个因数乘几，积也乘几。引导孩子发现规律而非死记。',
        funElement: '笑话：积说——因数变大我也变大，跟着走准没错！歇后语：水涨船高——跟着涨。小游戏：积的变化找规律，填数挑战！',
        gsapAnimations: [
          '[GSAP:timeline|因数变化→积变化对应展示|1.5s|点击播放|power2.out]',
          '[GSAP:compare|变化前后对比展示|0.8s|每步出现|power2.out]'
        ],
        images: [
          '[IMG:illustration|积的变化规律表|500x300|教学风|png|规律对照表]',
          '[IMG:illustration|因数与积关系图|400x200|教学风|png|变化关系]'
        ],
        practiceQuestions: [
          {
            id: 'm4u3l3q1',
            type: 'choice',
            question: '两个数相乘，一个因数不变，另一个因数乘3，积怎么变化？',
            options: ['不变', '乘3', '除以3', '乘9'],
            answer: '乘3',
            hint: '回忆积的变化规律',
            explanation: '积的变化规律：一个因数不变，另一个因数乘几，积也乘相同的数。因数乘3，积也乘3。'
          },
          {
            id: 'm4u3l3q2',
            type: 'fill',
            question: '已知3×4=12，那么30×4=___。',
            answer: '120',
            hint: '因数3变成30，乘了10，积也乘10',
            explanation: '一个因数4不变，3变成30（乘10），积也乘10，12×10=120。'
          },
          {
            id: 'm4u3l3q3',
            type: 'choice',
            question: '两个数相乘，一个因数乘2，另一个因数也乘2，积怎么变化？',
            options: ['乘2', '乘4', '乘6', '不变'],
            answer: '乘4',
            hint: '两个因数都乘2，积乘2×2=？',
            explanation: '两个因数都乘2，积乘2×2=4。例如3×4=12，6×8=48，48÷12=4。'
          },
          {
            id: 'm4u3l3q4',
            type: 'fill',
            question: '已知25×8=200，那么25×16=___。',
            answer: '400',
            hint: '因数8变成16，乘了2，积也乘2',
            explanation: '一个因数25不变，8变成16（乘2），积也乘2，200×2=400。'
          },
          {
            id: 'm4u3l3q5',
            type: 'choice',
            question: '下面说法正确的是？',
            options: ['因数变大积一定变大', '一个因数乘5另一个除以5，积不变', '两个因数都除以2，积除以2', '积与因数变化无关'],
            answer: '一个因数乘5另一个除以5，积不变',
            hint: '一个乘5一个除以5，相互抵消',
            explanation: '一个因数乘5，另一个因数除以5，积先乘5再除以5，等于不变。例如4×6=24，20×1.2... 嗯，更准确地说4×6=24，(4×5)×(6÷5)=20×1.2=24，积不变。'
          },
          {
            id: 'm4u3l3q6',
            type: 'fill',
            question: '已知12×15=180，那么12×45=___。',
            answer: '540',
            hint: '因数15变成45，乘了3，积也乘3',
            explanation: '一个因数12不变，15变成45（乘3），积也乘3，180×3=540。'
          },
          {
            id: 'm4u3l3q7',
            type: 'fill',
            question: '两个数相乘，一个因数不变，另一个因数除以3，积也___。',
            answer: '除以3',
            hint: '[积的变化规律]（数学-三位数乘两位数-第3课）',
            explanation: '积的变化规律：一个因数不变，另一个因数除以几，积也除以相同的数。因数除以3，积也除以3。'
          }
        ]
      },
      {
        id: 'm4u3l4',
        title: '乘法应用题——单价数量总价',
        order: 4,
        teachingMethod: '情境式：模拟购物',
        content: [
          { type: 'text', content: '去超市买东西，每件商品的价格叫"单价"，买的件数叫"数量"，一共要付的钱叫"总价"。它们之间有什么关系呢？', animationType: 'reveal' },
          { type: 'example', content: '每本笔记本15元（单价），买12本（数量），一共15×12=180元（总价）。', label: '购物例子', animationType: 'bounce' },
          { type: 'formula', content: '单价×数量=总价。总价÷数量=单价。总价÷单价=数量。', label: '购物公式', animationType: 'typewriter' },
          { type: 'tip', content: '解题关键：先找出单价、数量、总价中的两个已知量，用公式求第三个。', label: '解题关键', animationType: 'pulse' },
          { type: 'animation', content: '购物场景：商品+价格+数量→总价逐步展示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '模拟购物',
              sceneBuildConfig: {
                sceneName: '超市购物',
                elements: [
                  { text: '单价15元', emoji: '📓', x: 20, y: 30, animation: 'bounceIn', delay: 0, ttsText: '每本笔记本15元' },
                  { text: '数量12本', emoji: '📚', x: 50, y: 30, animation: 'bounceIn', delay: 0.3, ttsText: '买12本' },
                  { text: '×', x: 70, y: 30, animation: 'fadeIn', delay: 0.5 },
                  { text: '总价180元', emoji: '💰', x: 85, y: 30, animation: 'scaleIn', delay: 0.8, color: '#FF6B6B', ttsText: '一共180元' },
                ]
              },
              ttsNarration: '单价15元乘数量12本等于总价180元！',
            }
          },
          { type: 'text', content: '两步计算题：先算一部分的总价，再算全部的总价。如买3箱苹果，每箱25个，每个5元，先算每箱25×5=125元，再算3箱125×3=375元。', animationType: 'reveal' },
          { type: 'tip', content: '读题技巧：看到"每个""每件"找单价，看到"一共"找总价，看到"几件""几本"找数量。', label: '读题技巧', animationType: 'pulse' },
        ],
        iDo: '家长模拟购物算总价：拿出商品和价格，示范单价×数量=总价的计算过程。',
        weDo: '亲子一起算购物问题，模拟超市买东西，计算总价。',
        youDo: '孩子独立解决购物问题，用单价×数量=总价解题。',
        parentTips: '单价×数量=总价。让孩子在实际购物场景中理解三者关系。',
        funElement: '笑话：收银员说——你买这么多，总价很大哦！歇后语：买卖不成仁义在——别光算钱。小游戏：超市小当家，算总价比赛！',
        gsapAnimations: [
          '[GSAP:sceneBuild|购物场景：商品+价格+数量→总价|1.5s|点击播放|power2.out]',
          '[GSAP:numberCount|总价数字滚动|0.6s|计算完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|模拟购物场景|500x300|可爱卡通风|png|商品+标价]',
          '[IMG:illustration|单价数量总价关系图|400x200|教学风|png|三者关系]'
        ],
        practiceQuestions: [
          {
            id: 'm4u3l4q1',
            type: 'choice',
            question: '单价、数量和总价的关系是？',
            options: ['单价+数量=总价', '单价×数量=总价', '单价÷数量=总价', '数量÷单价=总价'],
            answer: '单价×数量=总价',
            hint: '回忆购物公式',
            explanation: '单价×数量=总价。如每本15元买12本，15×12=180元。'
          },
          {
            id: 'm4u3l4q2',
            type: 'fill',
            question: '每本书25元，买14本，一共需要___元。',
            answer: '350',
            hint: '单价×数量=总价，25×14=？',
            explanation: '单价25元×数量14本=25×14=350元。'
          },
          {
            id: 'm4u3l4q3',
            type: 'choice',
            question: '买8箱牛奶共花了960元，每箱牛奶多少元？这道题求的是什么？',
            options: ['单价', '数量', '总价', '无法确定'],
            answer: '单价',
            hint: '已知总价和数量，求什么？',
            explanation: '已知总价960元和数量8箱，求每箱的价格就是求单价。总价÷数量=单价，960÷8=120元。'
          },
          {
            id: 'm4u3l4q4',
            type: 'fill',
            question: '每个篮球45元，用540元可以买___个篮球。',
            answer: '12',
            hint: '总价÷单价=数量',
            explanation: '总价540÷单价45=540÷45=12个。540÷45：45×10=450，540-450=90，45×2=90，所以是12个。'
          },
          {
            id: 'm4u3l4q5',
            type: 'choice',
            question: '学校买来15套桌椅，每套168元，一共花了多少元？',
            options: ['168÷15', '15÷168', '168×15', '168+15'],
            answer: '168×15',
            hint: '求总价用什么公式？',
            explanation: '求总价用单价×数量=168×15=2520元。168×15：168×5=840，168×10=1680，840+1680=2520元。'
          },
          {
            id: 'm4u3l4q6',
            type: 'fill',
            question: '商店运来24箱苹果，每箱35个，每个苹果卖3元，这些苹果一共可以卖___元。',
            answer: '2520',
            hint: '先算每箱多少元，再算24箱多少元',
            explanation: '先算每箱：35×3=105元，再算24箱：105×24=2520元。105×24：105×4=420，105×20=2100，420+2100=2520元。'
          },
          {
            id: 'm4u3l4q7',
            type: 'fill',
            question: '已知总价÷___=单价。',
            answer: '数量',
            hint: '[单价数量总价]（数学-三位数乘两位数-第4课）',
            explanation: '根据单价×数量=总价，可以推导出：总价÷数量=单价，总价÷单价=数量。'
          }
        ]
      },
      {
        id: 'm4u3l5',
        title: '乘法综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了三位数乘两位数的笔算、含0乘法、积的变化规律和乘法应用题。来检测一下吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①笔算法则（对齐+分步） ②含0乘法（末尾添0/中间照乘） ③积的变化规律 ④单价×数量=总价', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：每箱饼干128元，买15箱，一共多少元？128×15=1920元。验算：15×128=1920。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测要点：笔算对齐、0的处理、规律应用、应用题分析，正确率≥85%！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '乘法达人通关动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '乘法达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '🧮', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为乘法达人' },
                  { text: '乘法达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '乘法达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成三位数乘两位数单元，你是乘法达人！',
            }
          },
          { type: 'tip', content: '目标：20题综合检测，正确率达到85%以上就能获得乘法达人徽章！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：竖式笔算、含0乘法、积的变化规律和应用题的完整解题过程。',
        weDo: '亲子一起竞速做题，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成20题综合检测，争取正确率85%以上。',
        parentTips: '20题综合检测，正确率≥85%为通过。注意孩子的竖式对齐和0处理。',
        funElement: '歇后语：算盘珠子——拨一拨动一动。笑话：乘号说——我转45度就是加号了！小游戏：乘法竞速20题！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out|particleCount:40]',
          '[GSAP:starFlyIn|乘法达人徽章飞入|0.8s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|乘法达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|乘法知识思维导图|500x300|教学风|png|知识导图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u3l5q1',
            type: 'choice',
            question: '156×23的竖式计算中，用十位上的2乘156得到的积是多少？',
            options: ['312', '3120', '468', '4680'],
            answer: '3120',
            hint: '十位上的2表示2个十，2×156=312，末尾对十位',
            explanation: '用十位上的2乘156得312，因为2在十位表示20，实际值312×10=3120（末尾对十位）。'
          },
          {
            id: 'm4u3l5q2',
            type: 'fill',
            question: '208×30=___。',
            answer: '6240',
            hint: '先算208×3=624，再添1个0',
            explanation: '208×30：先算208×3=624（中间0×3=0），再添1个0，得6240。'
          },
          {
            id: 'm4u3l5q3',
            type: 'choice',
            question: '已知36×7=252，那么36×14=？',
            options: ['252', '504', '1008', '126'],
            answer: '504',
            hint: '因数7变成14，乘了2，积也乘2',
            explanation: '一个因数36不变，7变成14（乘2），积也乘2，252×2=504。'
          },
          {
            id: 'm4u3l5q4',
            type: 'fill',
            question: '每支钢笔18元，买25支一共___元。',
            answer: '450',
            hint: '18×25=？',
            explanation: '18×25：18×5=90，18×20=360，90+360=450元。'
          },
          {
            id: 'm4u3l5q5',
            type: 'choice',
            question: '下面哪个算式的结果和其他三个不同？',
            options: ['150×40', '15×400', '300×20', '100×50'],
            answer: '100×50',
            hint: '分别算一算',
            explanation: '150×40=6000，15×400=6000，300×20=6000，100×50=5000。前三个结果都是6000，只有100×50=5000不同。'
          },
          {
            id: 'm4u3l5q6',
            type: 'fill',
            question: '一个长方形操场长125米，宽48米，面积是___平方米。',
            answer: '6000',
            hint: '面积=长×宽=125×48',
            explanation: '125×48：125×8=1000，125×40=5000，1000+5000=6000平方米。'
          },
          {
            id: 'm4u3l5q7',
            type: 'fill',
            question: '竖式计算134×26时，先用个位上的___乘134。',
            answer: '6',
            hint: '[乘法笔算]（数学-三位数乘两位数-第1课）',
            explanation: '竖式计算134×26时，先用两位数个位上的6乘134，得804；再用十位上的2乘134，得2680；最后804+2680=3484。'
          }
        ]
      }
    ]
  },

  // ==================== 第四单元：平行四边形与梯形 ====================
  {
    id: 'm4u4',
    title: '平行四边形与梯形',
    subtitle: '四边形的奥秘，平行与垂直',
    order: 4,
    lessons: [
      {
        id: 'm4u4l1',
        title: '垂直与平行',
        order: 1,
        teachingMethod: 'CPA·C→P：实物→图示→符号',
        content: [
          { type: 'text', content: '在同一平面内，两条直线的位置关系有两种：相交和平行。相交中有一种特殊情况叫垂直。', animationType: 'reveal' },
          { type: 'example', content: '平行：两条直线永不相交（如铁轨）。垂直：两条直线相交成直角（如十字路口的交叉线）。', label: '平行与垂直', animationType: 'bounce' },
          { type: 'formula', content: '平行（∥）：在同一平面内不相交的两条直线。垂直（⊥）：两条直线相交成直角。交点叫垂足。', label: '定义', animationType: 'typewriter' },
          { type: 'tip', content: '关键前提：平行和垂直都是在"同一平面内"讨论的。不在同一平面的两条线不能叫平行！', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '两条线平行/相交/垂直绘制动画', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '平行与垂直',
              shapeDrawConfig: {
                shape: 'lines',
                vertices: [[10, 30], [40, 30]],
                labels: ['平行线（永不相交）', '垂直线（成直角）'],
              },
              ttsNarration: '在同一平面内，不相交的两条直线互相平行，相交成直角的两条直线互相垂直！',
            }
          },
          { type: 'text', content: '垂直的记法：如果直线a和直线b互相垂直，记作a⊥b，读作"a垂直于b"。它们的交点O叫做垂足。', animationType: 'reveal' },
          { type: 'tip', content: '生活中的平行：斑马线、铁轨、书桌对边。生活中的垂直：墙角、十字路口、三角板的直角边。', label: '生活举例', animationType: 'pulse' },
        ],
        iDo: '家长用两根木条演示平行和垂直：平行时木条不相交，垂直时木条成直角相交。',
        weDo: '亲子一起找教室/家里的平行和垂直，互相说一说。',
        youDo: '孩子独立辨认平行和垂直，画出平行线和垂线。',
        parentTips: '不相交=平行，成直角=垂直。强调"同一平面内"的前提。',
        funElement: '笑话：平行线说——我们永远不相见！垂直线说——我们只成直角见！歇后语：铁轨上的火车——各走各的道。小游戏：找平行垂直大搜索！',
        gsapAnimations: [
          '[GSAP:shapeDraw|两条线平行/相交/垂直绘制|1s|点击|power2.out]',
          '[GSAP:compare|平行vs垂直对比展示|0.8s|绘制完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|平行与垂直对比图|500x200|教学风|png|3种位置关系]',
          '[IMG:illustration|生活中的平行垂直|500x300|可爱卡通风|png|生活举例]'
        ],
        practiceQuestions: [
          {
            id: 'm4u4l1q1',
            type: 'choice',
            question: '在同一平面内，不相交的两条直线叫做什么？',
            options: ['垂直', '平行', '相交', '重合'],
            answer: '平行',
            hint: '永不相交的两条线',
            explanation: '在同一平面内不相交的两条直线叫做平行线，也可以说这两条直线互相平行。'
          },
          {
            id: 'm4u4l1q2',
            type: 'fill',
            question: '两条直线相交成___角时，这两条直线互相垂直。',
            answer: '直',
            hint: '什么角是90°？',
            explanation: '两条直线相交成直角（90°）时，这两条直线互相垂直。'
          },
          {
            id: 'm4u4l1q3',
            type: 'choice',
            question: '两条直线互相垂直，它们的交点叫做什么？',
            options: ['交点', '顶点', '垂足', '中心'],
            answer: '垂足',
            hint: '垂直的"脚"叫什么？',
            explanation: '两条互相垂直的直线的交点叫做垂足。'
          },
          {
            id: 'm4u4l1q4',
            type: 'fill',
            question: '如果直线a和直线b互相垂直，记作a___b。',
            answer: '⊥',
            hint: '垂直的符号',
            explanation: '直线a和直线b互相垂直，记作a⊥b，读作"a垂直于b"。'
          },
          {
            id: 'm4u4l1q5',
            type: 'choice',
            question: '下面说法正确的是？',
            options: ['不相交的两条直线一定平行', '在同一平面内不相交的两条直线平行', '两条直线要么平行要么垂直', '垂直的两条直线不相交'],
            answer: '在同一平面内不相交的两条直线平行',
            hint: '【期末真题】注意"同一平面内"这个前提',
            explanation: '平行必须在"同一平面内"讨论，不在同一平面的不相交直线不叫平行。所以"在同一平面内不相交的两条直线平行"是正确的。'
          },
          {
            id: 'm4u4l1q6',
            type: 'fill',
            question: '长方形的两组对边互相___（填"平行"或"垂直"）。',
            answer: '平行',
            hint: '长方形对边是什么关系？',
            explanation: '长方形的两组对边互相平行，相邻的两条边互相垂直。'
          },
          {
            id: 'm4u4l1q7',
            type: 'fill',
            question: '两条直线相交成直角，这两条直线的交点叫做___。',
            answer: '垂足',
            hint: '[垂直与平行]（数学-平行四边形与梯形-第1课）',
            explanation: '两条互相垂直的直线的交点叫做垂足。'
          }
        ]
      },
      {
        id: 'm4u4l2',
        title: '画垂线和平行线',
        order: 2,
        teachingMethod: 'EDI：示范→合作→独立',
        content: [
          { type: 'text', content: '学会了辨认平行和垂直，现在来学画垂线和平行线。主要工具是三角板和直尺！', animationType: 'reveal' },
          { type: 'example', content: '画垂线：把三角板的一条直角边对准已知直线，另一条直角边过已知点画线。画平行线：用三角板和直尺配合，沿直尺平移三角板画线。', label: '画法示范', animationType: 'bounce' },
          { type: 'formula', content: '画垂线：三角板一直角边对准直线，另一直角边过点画线。画平行线：三角板一边对准直线，直尺靠另一边，三角板沿直尺平移画线。', label: '画法步骤', animationType: 'typewriter' },
          { type: 'tip', content: '点到直线的距离：从直线外一点到这条直线所画的垂直线段最短，这条垂直线段的长度叫做点到直线的距离。', label: '距离概念', animationType: 'pulse' },
          { type: 'animation', content: '画垂线过程动画：对准→靠紧→画线', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '画垂线过程',
              shapeDrawConfig: {
                shape: 'perpendicular',
                vertices: [[20, 60], [60, 60], [40, 20]],
                labels: ['已知直线', '垂足', '垂线'],
              },
              ttsNarration: '画垂线三步：一放三角板对准直线，二让另一直角边过点，三沿边画线！',
            }
          },
          { type: 'text', content: '重要性质：从直线外一点到这条直线，可以画无数条线段，但只有垂直线段最短。', animationType: 'reveal' },
          { type: 'tip', content: '易错提醒：点到直线的距离是垂直线段的长度，不是任意线段的长度！', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范用三角板画垂线和平行线：一直角边对准已知线，另一边画线；用直尺配合平移画平行线。',
        weDo: '亲子一起画垂线和平行线，互相检查画法。',
        youDo: '孩子独立画垂线和平行线，过点画已知直线的垂线。',
        parentTips: '三角板画垂线：一直角边对准已知线，另一边画线。点到直线的距离是最短的垂直线段。',
        funElement: '笑话：三角板说——我天生就有直角，画垂线我最行！歇后语：比着葫芦画瓢——照着来。小游戏：画线小能手PK赛！',
        gsapAnimations: [
          '[GSAP:shapeDraw|画垂线过程动画|1.5s|点击播放|power1.inOut]',
          '[GSAP:stagger|画平行线平移动画|0.6s|平移时|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|三角板画垂线步骤图|500x300|教学风|png|4步画法]',
          '[IMG:illustration|点到直线距离图|400x300|教学风|png|垂直最短]'
        ],
        practiceQuestions: [
          {
            id: 'm4u4l2q1',
            type: 'choice',
            question: '画垂线最常用的工具是？',
            options: ['量角器', '三角板', '圆规', '直尺'],
            answer: '三角板',
            hint: '什么工具有直角？',
            explanation: '画垂线最常用的工具是三角板，因为三角板有直角，可以用来画垂直线。'
          },
          {
            id: 'm4u4l2q2',
            type: 'fill',
            question: '从直线外一点到这条直线所画的___线段最短，它的长度叫做点到直线的距离。',
            answer: '垂直',
            hint: '什么样的线段最短？',
            explanation: '从直线外一点到这条直线，垂直线段最短，这条垂直线段的长度就是点到直线的距离。'
          },
          {
            id: 'm4u4l2q3',
            type: 'choice',
            question: '画平行线时，需要用三角板和什么配合？',
            options: ['量角器', '圆规', '直尺', '另一块三角板'],
            answer: '直尺',
            hint: '三角板沿什么平移？',
            explanation: '画平行线需要三角板和直尺配合：三角板一边对准直线，直尺靠另一边，三角板沿直尺平移画线。'
          },
          {
            id: 'm4u4l2q4',
            type: 'fill',
            question: '从直线外一点到这条直线，可以画___条垂直线段。',
            answer: '1',
            hint: '一个点到一条直线能画几条垂直线段？',
            explanation: '从直线外一点到这条直线只能画1条垂直线段，因为过一点只能画一条已知直线的垂线。'
          },
          {
            id: 'm4u4l2q5',
            type: 'choice',
            question: '关于点到直线的距离，下面说法正确的是？',
            options: ['任意线段的长度', '最短线段的长度', '垂直线段的长度', '最短垂直线段的长度'],
            answer: '垂直线段的长度',
            hint: '点到直线的距离是哪种线段的长度？',
            explanation: '点到直线的距离就是从该点到直线的垂直线段的长度。因为垂直线段是最短的，所以距离就是垂直线段的长度。'
          },
          {
            id: 'm4u4l2q6',
            type: 'fill',
            question: '从直线外一点到这条直线可以画无数条线段，其中___线段最短。',
            answer: '垂直',
            hint: '哪种线段最短？',
            explanation: '从直线外一点到这条直线可以画无数条线段，其中垂直线段最短。'
          },
          {
            id: 'm4u4l2q7',
            type: 'fill',
            question: '画平行线时，三角板沿直尺___，就能画出平行线。',
            answer: '平移',
            hint: '[画垂线和平行线]（数学-平行四边形与梯形-第2课）',
            explanation: '画平行线的方法是：三角板的一边对准已知直线，直尺紧靠三角板的另一边，三角板沿直尺平移，沿三角板画线，就能画出平行线。'
          }
        ]
      },
      {
        id: 'm4u4l3',
        title: '平行四边形的认识',
        order: 3,
        teachingMethod: 'CPA·C→P',
        content: [
          { type: 'text', content: '两组对边分别平行的四边形叫做平行四边形。它有什么特征呢？', animationType: 'reveal' },
          { type: 'example', content: '平行四边形的特征：两组对边分别平行且相等，对角相等，容易变形（不稳定性）。', label: '认识特征', animationType: 'bounce' },
          { type: 'formula', content: '平行四边形：两组对边分别平行的四边形。特征：对边平行且相等，对角相等。高：从一边到对边的垂直距离。', label: '平行四边形', animationType: 'typewriter' },
          { type: 'tip', content: '平行四边形容易变形，这叫"不稳定性"。生活中的伸缩门、晾衣架就利用了这个特性！', label: '生活应用', animationType: 'pulse' },
          { type: 'animation', content: '平行四边形逐步绘制+标注对边对角动画', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '平行四边形的绘制',
              shapeDrawConfig: {
                shape: 'parallelogram',
                vertices: [[20, 60], [60, 60], [70, 30], [30, 30]],
                labels: ['底', '高', '对边平行且相等'],
              },
              ttsNarration: '两组对边分别平行的四边形是平行四边形，对边平行且相等，对角相等！',
            }
          },
          { type: 'text', content: '从平行四边形一条边上的一点到对边引一条垂线，这点和垂足之间的线段叫做平行四边形的高，垂足所在的边叫做底。', animationType: 'reveal' },
          { type: 'tip', content: '长方形和正方形是特殊的平行四边形！它们的角都是直角。', label: '特殊关系', animationType: 'pulse' },
        ],
        iDo: '家长用四根木条组成平行四边形，让孩子摸实物认特征，再推动变形展示不稳定性。',
        weDo: '亲子一起认特征，找生活中的平行四边形，互相说一说。',
        youDo: '孩子独立辨认平行四边形，画高标底。',
        parentTips: '对边平行且相等，对角相等。不稳定性是平行四边形的重要特征。',
        funElement: '笑话：平行四边形说——我推一下就变形了！歇后语：伸缩门——能大能小。小游戏：找平行四边形大搜索！',
        gsapAnimations: [
          '[GSAP:shapeDraw|平行四边形逐步绘制+标注对边对角|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|高和底高亮标注|0.5s|绘制完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|平行四边形特征标注图|500x300|教学风|png|对边+对角]',
          '[IMG:illustration|伸缩门不稳定性图|400x300|可爱卡通风|png|伸缩门]'
        ],
        practiceQuestions: [
          {
            id: 'm4u4l3q1',
            type: 'choice',
            question: '平行四边形有什么特征？',
            options: ['四条边都相等', '两组对边分别平行', '四个角都是直角', '对角线相等'],
            answer: '两组对边分别平行',
            hint: '平行四边形最基本的特征',
            explanation: '平行四边形最基本的特征是两组对边分别平行，且对边相等、对角相等。'
          },
          {
            id: 'm4u4l3q2',
            type: 'fill',
            question: '平行四边形的对边___且相等。',
            answer: '平行',
            hint: '对边的关系',
            explanation: '平行四边形的对边平行且相等，这是它的基本特征。'
          },
          {
            id: 'm4u4l3q3',
            type: 'choice',
            question: '下面哪个图形是特殊的平行四边形？',
            options: ['三角形', '圆形', '长方形', '梯形'],
            answer: '长方形',
            hint: '长方形的对边平行吗？',
            explanation: '长方形的两组对边分别平行且相等，所以长方形是特殊的平行四边形（特殊的在于四个角都是直角）。'
          },
          {
            id: 'm4u4l3q4',
            type: 'fill',
            question: '平行四边形的对角___。',
            answer: '相等',
            hint: '对角的大小关系',
            explanation: '平行四边形的对角相等，即相对的两个角度数相同。'
          },
          {
            id: 'm4u4l3q5',
            type: 'choice',
            question: '平行四边形容易变形，这个特性叫做？',
            options: ['稳定性', '不稳定性', '灵活性', '可变性'],
            answer: '不稳定性',
            hint: '容易变形叫什么？',
            explanation: '平行四边形容易变形，这个特性叫做"不稳定性"。伸缩门就是利用了这个特性。'
          },
          {
            id: 'm4u4l3q6',
            type: 'fill',
            question: '从平行四边形一条边上的一点到对边引一条垂线，这条垂线段叫做平行四边形的___。',
            answer: '高',
            hint: '垂直线段叫什么？',
            explanation: '从平行四边形一条边上的一点到对边引垂线，这点和垂足之间的线段叫做平行四边形的高。'
          },
          {
            id: 'm4u4l3q7',
            type: 'fill',
            question: '平行四边形的两组对边分别___。',
            answer: '平行',
            hint: '[平行四边形]（数学-平行四边形与梯形-第3课）',
            explanation: '平行四边形的定义就是两组对边分别平行的四边形，对边平行是它最基本的特征。'
          }
        ]
      },
      {
        id: 'm4u4l4',
        title: '梯形的认识',
        order: 4,
        teachingMethod: 'CPA·C→P',
        content: [
          { type: 'text', content: '只有一组对边平行的四边形叫做梯形。和平行四边形不同，梯形只有一组对边平行！', animationType: 'reveal' },
          { type: 'example', content: '梯形中平行的一组边叫上底和下底，不平行的一组边叫腰。两腰相等的梯形叫等腰梯形，有一个直角的梯形叫直角梯形。', label: '认识梯形', animationType: 'bounce' },
          { type: 'formula', content: '梯形：只有一组对边平行的四边形。上底、下底（平行的两边），腰（不平行的两边），高（两底之间的垂直距离）。', label: '梯形定义', animationType: 'typewriter' },
          { type: 'tip', content: '区分梯形和平行四边形：平行四边形有两组对边平行，梯形只有一组对边平行！', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '梯形绘制+标注上底下底高动画', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '梯形的绘制',
              shapeDrawConfig: {
                shape: 'trapezoid',
                vertices: [[30, 60], [70, 60], [60, 30], [40, 30]],
                labels: ['下底', '上底', '腰', '高'],
              },
              ttsNarration: '只有一组对边平行的四边形是梯形，平行的两边是上底和下底，不平行的是腰！',
            }
          },
          { type: 'text', content: '等腰梯形：两腰相等的梯形，同一底上的两个角相等。直角梯形：有一条腰垂直于底的梯形。', animationType: 'reveal' },
          { type: 'tip', content: '梯形的高：从上底到下底的垂直距离。可以在梯形的任意位置画高，长度都相等。', label: '高的画法', animationType: 'pulse' },
        ],
        iDo: '家长用木条组成梯形，让孩子认特征：只有一组对边平行，认识上底下底腰和高。',
        weDo: '亲子一起认特征，找生活中的梯形（如大坝截面），互相说一说。',
        youDo: '孩子独立辨认梯形，画高标底，区分等腰和直角梯形。',
        parentTips: '只有一组对边平行的四边形是梯形。认识上底、下底、腰、高。',
        funElement: '笑话：梯形说——我只有一组对边平行，但我也很稳定！歇后语：大坝截流——一堵到底。小游戏：梯形辨认挑战赛！',
        gsapAnimations: [
          '[GSAP:shapeDraw|梯形绘制+标注上底下底高|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|等腰梯形和直角梯形对比高亮|0.5s|对比时|power2.out]'
        ],
        images: [
          '[IMG:illustration|梯形特征标注图|500x300|教学风|png|上底+下底+高]',
          '[IMG:illustration|等腰梯形和直角梯形图|400x300|教学风|png|两种特殊梯形]'
        ],
        practiceQuestions: [
          {
            id: 'm4u4l4q1',
            type: 'choice',
            question: '梯形有什么特征？',
            options: ['两组对边分别平行', '只有一组对边平行', '四条边都相等', '四个角都是直角'],
            answer: '只有一组对边平行',
            hint: '梯形和平行四边形的区别',
            explanation: '梯形只有一组对边平行，这是它和平行四边形（两组对边平行）最大的区别。'
          },
          {
            id: 'm4u4l4q2',
            type: 'fill',
            question: '梯形中互相平行的一组边叫做上底和___。',
            answer: '下底',
            hint: '平行的两条边分别叫什么',
            explanation: '梯形中互相平行的一组边叫做上底和下底，不平行的一组边叫做腰。'
          },
          {
            id: 'm4u4l4q3',
            type: 'choice',
            question: '两腰相等的梯形叫做什么梯形？',
            options: ['直角梯形', '等腰梯形', '正梯形', '一般梯形'],
            answer: '等腰梯形',
            hint: '两腰相等——"等腰"',
            explanation: '两腰相等的梯形叫做等腰梯形。等腰梯形同一底上的两个角相等。'
          },
          {
            id: 'm4u4l4q4',
            type: 'fill',
            question: '有一个角是直角的梯形叫做___梯形。',
            answer: '直角',
            hint: '有直角的梯形叫什么',
            explanation: '有一个角是直角的梯形叫做直角梯形。直角梯形有一条腰垂直于底。'
          },
          {
            id: 'm4u4l4q5',
            type: 'choice',
            question: '下面哪个说法正确？',
            options: ['梯形有两组对边平行', '平行四边形是特殊的梯形', '梯形只有一组对边平行', '梯形的四个角都相等'],
            answer: '梯形只有一组对边平行',
            hint: '回忆梯形的定义',
            explanation: '梯形只有一组对边平行，这是梯形的定义特征。梯形不是平行四边形，平行四边形也不是特殊的梯形。'
          },
          {
            id: 'm4u4l4q6',
            type: 'fill',
            question: '梯形的上底和下底之间的___距离叫做梯形的高。',
            answer: '垂直',
            hint: '高是什么样的距离？',
            explanation: '梯形的高是上底和下底之间的垂直距离，即从上底到下底所画垂直线段的长度。'
          },
          {
            id: 'm4u4l4q7',
            type: 'fill',
            question: '梯形中不平行的一组边叫做___。',
            answer: '腰',
            hint: '[梯形的认识]（数学-平行四边形与梯形-第4课）',
            explanation: '梯形中互相平行的两边叫上底和下底，不互相平行的两边叫腰。'
          }
        ]
      },
      {
        id: 'm4u4l5',
        title: '四边形综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了垂直与平行、画垂线和平行线、平行四边形和梯形。来检测一下掌握情况吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①平行与垂直的定义 ②画垂线和平行线 ③平行四边形（两组对边平行） ④梯形（一组对边平行）', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：一个平行四边形的底是15厘米，高是8厘米，另一条底是10厘米，对应的高是多少？面积不变，15×8=10×高，高=12厘米。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测要点：辨认图形+画高+区分平行四边形和梯形，正确率≥80%！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '四边形达人通关动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '四边形达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '⬜', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为四边形达人' },
                  { text: '四边形达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '四边形达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成平行四边形与梯形单元，你是四边形达人！',
            }
          },
          { type: 'tip', content: '目标：平行四边形+梯形辨认和画图，正确率达到80%以上就能获得四边形达人徽章！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：辨认四边形、画高、区分平行四边形和梯形。',
        weDo: '亲子一起分类游戏，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成四边形综合测试，争取正确率80%以上。',
        parentTips: '平行四边形+梯形辨认和画图，正确率≥80%为通过。注意区分两种四边形。',
        funElement: '歇后语：盲人摸象——以偏概全（别只看一条边就判断）。笑话：梯形对平行四边形说——你比我多一组平行边！小游戏：四边形分类大挑战！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥80%|power1.out|particleCount:40]',
          '[GSAP:starFlyIn|四边形达人徽章飞入|0.8s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|四边形达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|四边形分类思维导图|500x300|教学风|png|知识导图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u4l5q1',
            type: 'choice',
            question: '下面哪个图形只有一组对边平行？',
            options: ['长方形', '正方形', '平行四边形', '梯形'],
            answer: '梯形',
            hint: '只有一组对边平行的是？',
            explanation: '梯形只有一组对边平行。长方形、正方形和平行四边形都有两组对边平行。'
          },
          {
            id: 'm4u4l5q2',
            type: 'fill',
            question: '平行四边形有___组对边平行。',
            answer: '两',
            hint: '平行四边形有几组对边平行？',
            explanation: '平行四边形有两组对边分别平行，这是它和梯形（只有一组对边平行）的主要区别。'
          },
          {
            id: 'm4u4l5q3',
            type: 'choice',
            question: '下面说法正确的是？',
            options: ['正方形不是平行四边形', '长方形是特殊的平行四边形', '梯形是特殊的平行四边形', '平行四边形四条边都相等'],
            answer: '长方形是特殊的平行四边形',
            hint: '长方形的对边平行吗？',
            explanation: '长方形的两组对边分别平行，所以长方形是特殊的平行四边形。正方形也是特殊的平行四边形。'
          },
          {
            id: 'm4u4l5q4',
            type: 'fill',
            question: '从直线外一点到这条直线所画的最短线段是___线段。',
            answer: '垂直',
            hint: '什么线段最短？',
            explanation: '从直线外一点到这条直线，垂直线段最短。这条垂直线段的长度就是点到直线的距离。'
          },
          {
            id: 'm4u4l5q5',
            type: 'choice',
            question: '一个四边形有两组对边平行且四个角都是直角，这个图形是？',
            options: ['平行四边形', '梯形', '长方形', '三角形'],
            answer: '长方形',
            hint: '两组对边平行+四个直角',
            explanation: '两组对边平行且四个角都是直角的四边形是长方形。长方形是特殊的平行四边形。'
          },
          {
            id: 'm4u4l5q6',
            type: 'fill',
            question: '等腰梯形的两腰___。',
            answer: '相等',
            hint: '等腰梯形的特征',
            explanation: '等腰梯形的两腰相等，并且同一底上的两个底角也相等。'
          },
          {
            id: 'm4u4l5q7',
            type: 'fill',
            question: '在同一平面内不相交的两条直线互相___。',
            answer: '平行',
            hint: '[垂直与平行]（数学-平行四边形与梯形-第1课）',
            explanation: '在同一平面内不相交的两条直线互相平行。这是平行的定义。'
          }
        ]
      }
    ]
  },
  // ==================== 第五单元：除数是两位数的除法 ====================
  {
    id: 'm4u5',
    title: '除数是两位数的除法',
    subtitle: '试商与笔算，除法大冒险',
    order: 5,
    lessons: [
      {
        id: 'm4u5l1',
        title: '口算除法——整十数除法',
        order: 1,
        teachingMethod: 'Mental Math',
        content: [
          { type: 'text', content: '除数是整十数的除法可以口算！方法是想乘法算除法，或者利用表内除法。', animationType: 'reveal' },
          { type: 'example', content: '60÷20=？想：20×3=60，所以60÷20=3。也可以想：6÷2=3，所以60÷20=3。', label: '口算示范', animationType: 'bounce' },
          { type: 'formula', content: '口算方法：①想乘法算除法 ②利用表内除法，去掉相同个数的0。如120÷30：想12÷3=4，所以120÷30=4。', label: '口算方法', animationType: 'typewriter' },
          { type: 'tip', content: '如果有余数：80÷30=2……20。先算80里面有2个30（2×30=60），余数80-60=20。', label: '有余数', animationType: 'pulse' },
          { type: 'animation', content: '60÷20分解动画：6÷2=3，所以60÷20=3', animationType: 'numberCount',
            animationConfig: {
              sceneType: 'numberCount',
              title: '口算除法分解',
              countConfig: { from: 1, to: 3, itemEmoji: '🔟', direction: 'forward' },
              ttsNarration: '60里面有3个20，因为6除以2等于3，所以60除以20等于3！',
            }
          },
          { type: 'text', content: '估算方法：把被除数或除数看成接近的整十数。如143÷20≈7（140÷20=7）。', animationType: 'reveal' },
          { type: 'tip', content: '口算口诀：想乘算除最直接，去零算表再添零，整十除法不害怕！', label: '口算口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范60÷20=3：想20×3=60，或6÷2=3。示范有余数的口算。',
        weDo: '亲子一起做口算，家长出题，孩子口算，互相检查。',
        youDo: '孩子独立口算整十数除法，快速说出结果。',
        parentTips: '60÷20想6÷2=3。教孩子想乘法算除法，或去零算表内除法。',
        funElement: '笑话：60对20说——你装了我3次！歇后语：一分为二——干脆利落。小游戏：口算除法抢答赛！',
        gsapAnimations: [
          '[GSAP:numberCount|60÷20分解动画|0.8s|点击|power2.out]',
          '[GSAP:highlight|去0过程高亮|0.5s|口算时|power2.out]'
        ],
        images: [
          '[IMG:illustration|口算除法示意图|400x200|教学风|png|分解过程]',
          '[IMG:illustration|想乘算除图|400x200|教学风|png|乘除关系]'
        ],
        practiceQuestions: [
          {
            id: 'm4u5l1q1',
            type: 'choice',
            question: '60÷20=？',
            options: ['2', '3', '4', '30'],
            answer: '3',
            hint: '想：20×3=60',
            explanation: '60÷20：想20×3=60，所以60÷20=3。也可以想6÷2=3，所以60÷20=3。'
          },
          {
            id: 'm4u5l1q2',
            type: 'fill',
            question: '120÷30=___。',
            answer: '4',
            hint: '想12÷3=？',
            explanation: '120÷30：想12÷3=4，所以120÷30=4。'
          },
          {
            id: 'm4u5l1q3',
            type: 'choice',
            question: '80÷30的结果是多少？',
            options: ['2', '2……20', '3', '2……2'],
            answer: '2……20',
            hint: '先算80里有几个30，再算余数',
            explanation: '80÷30：2×30=60，80-60=20，所以80÷30=2……20。余数20小于除数30。'
          },
          {
            id: 'm4u5l1q4',
            type: 'fill',
            question: '150÷50=___。',
            answer: '3',
            hint: '想15÷5=？',
            explanation: '150÷50：想15÷5=3，所以150÷50=3。'
          },
          {
            id: 'm4u5l1q5',
            type: 'choice',
            question: '240÷60=？',
            options: ['3', '4', '5', '6'],
            answer: '4',
            hint: '【期末真题】想24÷6=？',
            explanation: '240÷60：想24÷6=4，所以240÷60=4。'
          },
          {
            id: 'm4u5l1q6',
            type: 'fill',
            question: '一个数除以40商是5余数是10，这个数是___。',
            answer: '210',
            hint: '被除数=商×除数+余数',
            explanation: '被除数=商×除数+余数=5×40+10=200+10=210。'
          },
          {
            id: 'm4u5l1q7',
            type: 'fill',
            question: '口算360÷90时，想36÷___=4，所以360÷90=4。',
            answer: '9',
            hint: '[口算除法]（数学-除数是两位数的除法-第1课）',
            explanation: '口算360÷90时，利用表内除法去掉相同个数的0，想36÷9=4，所以360÷90=4。'
          }
        ]
      },
      {
        id: 'm4u5l2',
        title: '笔算除法——两位数除法',
        order: 2,
        teachingMethod: 'CPA·P→A：图示→竖式',
        content: [
          { type: 'text', content: '除数是两位数的笔算除法，关键步骤是"试商"——想被除数里最多有几个除数。', animationType: 'reveal' },
          { type: 'example', content: '92÷30=3……2：想92里最多有几个30，3×30=90最接近，92-90=2，余数2<30，所以92÷30=3……2。', label: '竖式示范', animationType: 'bounce' },
          { type: 'formula', content: '笔算步骤：①从被除数高位除起 ②想被除数前两位里最多有几个除数 ③商写在对应位上 ④余数必须比除数小', label: '笔算法则', animationType: 'typewriter' },
          { type: 'tip', content: '关键提醒：余数一定要比除数小！如果余数大于等于除数，说明商小了，要调大。', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '92÷30竖式逐步计算动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '92÷30竖式计算',
              timelineConfig: {
                steps: [
                  { text: '想：92里面最多有几个30', emoji: '🤔', ttsNarration: '92里面最多有几个30', duration: 1 },
                  { text: '试商：3×30=90，最接近92', emoji: '✖️', ttsNarration: '3乘30等于90，最接近', duration: 1 },
                  { text: '商3，3×30=90，写在个位上', emoji: '✏️', ttsNarration: '商3写在个位上', duration: 1 },
                  { text: '余数：92-90=2，2<30 ✓', emoji: '✅', ttsNarration: '余数2小于30', duration: 1 },
                ]
              },
              ttsNarration: '92除以30，3乘30等于90，余数2，2小于30，所以92除以30等于3余2！',
            }
          },
          { type: 'text', content: '商的位置：除到被除数的哪一位，商就写在那一位的上面。如92÷30，除到个位，商3写在个位上。', animationType: 'reveal' },
          { type: 'tip', content: '检查方法：商×除数+余数=被除数。如3×30+2=92，验证正确！', label: '检查方法', animationType: 'pulse' },
        ],
        iDo: '家长示范92÷30竖式：试商3，3×30=90，余数2，强调余数要比除数小。',
        weDo: '亲子一起做竖式，家长出题，孩子做竖式，互相检查试商和余数。',
        youDo: '孩子独立做两位数除法竖式练习。',
        parentTips: '试商：想被除数里最多有几个除数。余数必须比除数小。检查：商×除数+余数=被除数。',
        funElement: '笑话：除号说——我是横过来的减号！歇后语：心中有数——不慌不忙。小游戏：试商小达人，看谁商得准！',
        gsapAnimations: [
          '[GSAP:timeline|92÷30竖式逐步计算|2s|点击播放|power2.out]',
          '[GSAP:highlight|余数与除数比较高亮|0.5s|验算时|power2.out]'
        ],
        images: [
          '[IMG:illustration|两位数除法竖式图|400x300|教学风|png|竖式步骤]',
          '[IMG:illustration|试商过程示意图|400x300|教学风|png|试商步骤]'
        ],
        practiceQuestions: [
          {
            id: 'm4u5l2q1',
            type: 'choice',
            question: '92÷30的结果是多少？',
            options: ['3', '3……2', '4', '2……32'],
            answer: '3……2',
            hint: '3×30=90，92-90=2',
            explanation: '92÷30：3×30=90，92-90=2，余数2<30，所以92÷30=3……2。'
          },
          {
            id: 'm4u5l2q2',
            type: 'fill',
            question: '84÷21=___。',
            answer: '4',
            hint: '想84里面有几个21',
            explanation: '84÷21：想21×4=84，所以84÷21=4，没有余数。'
          },
          {
            id: 'm4u5l2q3',
            type: 'choice',
            question: '196÷39的结果是多少？',
            options: ['4……40', '5……1', '5', '4……1'],
            answer: '5……1',
            hint: '39×5=195，196-195=1',
            explanation: '196÷39：39×5=195，196-195=1，余数1<39，所以196÷39=5……1。'
          },
          {
            id: 'm4u5l2q4',
            type: 'fill',
            question: '280÷42=___……___。',
            answer: '6;28',
            acceptableAnswers: ['6……28', '6,28'],
            hint: '42×6=252，280-252=28',
            explanation: '280÷42：42×6=252，280-252=28，余数28<42，所以280÷42=6……28。'
          },
          {
            id: 'm4u5l2q5',
            type: 'choice',
            question: '笔算除法时，余数必须满足什么条件？',
            options: ['余数>除数', '余数=除数', '余数<除数', '余数=0'],
            answer: '余数<除数',
            hint: '如果余数比除数大说明什么？',
            explanation: '笔算除法中，余数必须比除数小。如果余数大于或等于除数，说明商小了，需要调大。'
          },
          {
            id: 'm4u5l2q6',
            type: 'fill',
            question: '验算156÷31=5……1是否正确：31×5+1=___，等于156所以正确。',
            answer: '156',
            hint: '商×除数+余数=被除数',
            explanation: '验算：31×5+1=155+1=156，等于被除数156，所以156÷31=5……1正确。'
          },
          {
            id: 'm4u5l2q7',
            type: 'fill',
            question: '笔算除法时，如果余数大于除数，说明商___了（填"大"或"小"）。',
            answer: '小',
            hint: '[笔算除法]（数学-除数是两位数的除法-第2课）',
            explanation: '笔算除法时，如果余数大于或等于除数，说明商小了，需要把商调大。'
          }
        ]
      },
      {
        id: 'm4u5l3',
        title: '四舍五入试商法',
        order: 3,
        teachingMethod: '支架式：试商策略',
        content: [
          { type: 'text', content: '当除数不是整十数时，试商变得困难。这时可以用"四舍五入法"把除数看成接近的整十数来试商。', animationType: 'reveal' },
          { type: 'example', content: '196÷39：把39用四舍五入看作40，196÷40≈4，试商4。但39×4=156，196-156=40>39，商小了，调商为5。39×5=195，196-195=1，余数1<39，所以196÷39=5……1。', label: '试商示范', animationType: 'bounce' },
          { type: 'formula', content: '四舍五入试商法：①把除数四舍五入到整十数 ②用整十数试商 ③用原除数乘商验证 ④余数太大就调大，余数为负就调小', label: '试商步骤', animationType: 'typewriter' },
          { type: 'tip', content: '四舍试商：除数个位是1-4的，四舍后除数变小，商可能偏大，要准备调小。五入试商：除数个位是5-9的，五入后除数变大，商可能偏小，要准备调大。', label: '试商技巧', animationType: 'pulse' },
          { type: 'animation', content: '试商过程动画：四舍五入→试商→调整→确认', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '四舍五入试商法',
              timelineConfig: {
                steps: [
                  { text: '第1步：39≈40（五入）', emoji: '🔢', ttsNarration: '把39五入看作40', duration: 1 },
                  { text: '第2步：196÷40≈4，试商4', emoji: '✏️', ttsNarration: '试商4', duration: 1 },
                  { text: '第3步：39×4=156，196-156=40>39，商小了', emoji: '⚠️', ttsNarration: '余数太大，商小了', duration: 1.5 },
                  { text: '第4步：调商为5，39×5=195，196-195=1 ✓', emoji: '✅', ttsNarration: '调商为5，余数1小于39', duration: 1.5 },
                ]
              },
              ttsNarration: '四舍五入试商法：把除数看成整十数试商，不对就调整，直到余数比除数小！',
            }
          },
          { type: 'text', content: '口诀：四舍商大容易偏，五入商小要调添。试商之后要验证，余数小了才算完。', animationType: 'reveal' },
          { type: 'tip', content: '熟练后可以直接想乘法试商，不需要每次都四舍五入。多练习就能快速试商！', label: '进阶技巧', animationType: 'pulse' },
        ],
        iDo: '家长示范四舍五入试商：39≈40，试商4，发现商小调为5。讲解四舍和五入的不同调商方向。',
        weDo: '亲子一起试商，家长出题，孩子试商并调整，互相检查。',
        youDo: '孩子独立试商计算，完成需要调整商的除法题。',
        parentTips: '除数四舍五入到整十数再试商。四舍商可能偏大，五入商可能偏小，要根据余数调整。',
        funElement: '笑话：试商说——我先猜一个，不对再改！歇后语：摸着石头过河——边走边试。小游戏：试商大冒险，看谁调得快！',
        gsapAnimations: [
          '[GSAP:timeline|试商过程：四舍五入→试商→调整→确认|1.5s|点击播放|power2.inOut]',
          '[GSAP:highlight|调商过程高亮|0.5s|调整时|power2.out]'
        ],
        images: [
          '[IMG:illustration|试商策略图|500x300|教学风|png|四舍/五入对比]',
          '[IMG:illustration|调商方向图|400x200|教学风|png|调商规则]'
        ],
        practiceQuestions: [
          {
            id: 'm4u5l3q1',
            type: 'choice',
            question: '计算196÷39时，把39四舍五入看作多少来试商？',
            options: ['30', '35', '40', '50'],
            answer: '40',
            hint: '39的个位是9，五入到多少？',
            explanation: '39个位是9，大于5，五入到40。所以把39看作40来试商。'
          },
          {
            id: 'm4u5l3q2',
            type: 'fill',
            question: '计算84÷21时，把21四舍五入看作___来试商。',
            answer: '20',
            hint: '21的个位是1，四舍到多少？',
            explanation: '21个位是1，小于5，四舍到20。所以把21看作20来试商。'
          },
          {
            id: 'm4u5l3q3',
            type: 'choice',
            question: '计算196÷39时，用40试商得4，但39×4=156，196-156=40>39，应该怎么调商？',
            options: ['商调大', '商调小', '不调整', '重新四舍五入'],
            answer: '商调大',
            hint: '余数大于除数说明商偏大还是偏小？',
            explanation: '余数40>除数39，说明商4偏小了，需要把商调大为5。39×5=195，196-195=1<39。'
          },
          {
            id: 'm4u5l3q4',
            type: 'fill',
            question: '280÷42，把42看作40试商得7，42×7=294>280，商偏大，调商为___。',
            answer: '6',
            hint: '294>280说明商太大了',
            explanation: '42×7=294>280，商7偏大，调小为6。42×6=252，280-252=28<42，所以280÷42=6……28。'
          },
          {
            id: 'm4u5l3q5',
            type: 'choice',
            question: '关于四舍五入试商法，下面说法正确的是？',
            options: ['四舍后商一定偏大', '五入后商一定偏小', '四舍后商可能偏大需要调小', '试商后不需要验证'],
            answer: '四舍后商可能偏大需要调小',
            hint: '四舍把除数变小了，商会怎样？',
            explanation: '四舍把除数看小了，用小除数试出的商可能偏大，需要验证后调小。但不是一定偏大，只是可能。'
          },
          {
            id: 'm4u5l3q6',
            type: 'fill',
            question: '用四舍五入法试商：312÷52，把52看作___来试商。',
            answer: '50',
            hint: '52的个位是2，四舍还是五入？',
            explanation: '52个位是2，小于5，四舍到50。所以把52看作50来试商。312÷50≈6，52×6=312，所以312÷52=6。'
          },
          {
            id: 'm4u5l3q7',
            type: 'fill',
            question: '试商后如果余数大于除数，说明商偏___，需要调大。',
            answer: '小',
            hint: '[四舍五入试商法]（数学-除数是两位数的除法-第3课）',
            explanation: '试商后如果余数大于或等于除数，说明商偏小了，需要把商调大。'
          }
        ]
      },
      {
        id: 'm4u5l4',
        title: '除法应用题——速度时间路程',
        order: 4,
        teachingMethod: '情境式：出行场景',
        content: [
          { type: 'text', content: '出行时，速度、时间和路程之间有什么关系呢？速度×时间=路程，这是出行中最常用的公式！', animationType: 'reveal' },
          { type: 'example', content: '一辆汽车每小时行60千米（速度），行驶4小时（时间），路程=60×4=240千米。', label: '出行例子', animationType: 'bounce' },
          { type: 'formula', content: '速度×时间=路程。路程÷时间=速度。路程÷速度=时间。', label: '出行公式', animationType: 'typewriter' },
          { type: 'tip', content: '速度的单位：千米/时（km/h）、米/分（m/min）等。读作"千米每小时"。', label: '速度单位', animationType: 'pulse' },
          { type: 'animation', content: '出行场景：汽车+速度+时间→路程逐步展示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '模拟出行',
              sceneBuildConfig: {
                sceneName: '汽车出行',
                elements: [
                  { text: '速度60千米/时', emoji: '🚗', x: 20, y: 30, animation: 'bounceIn', delay: 0, ttsText: '每小时行60千米' },
                  { text: '时间4小时', emoji: '🕐', x: 50, y: 30, animation: 'bounceIn', delay: 0.3, ttsText: '行驶4小时' },
                  { text: '×', x: 70, y: 30, animation: 'fadeIn', delay: 0.5 },
                  { text: '路程240千米', emoji: '🏁', x: 85, y: 30, animation: 'scaleIn', delay: 0.8, color: '#FF6B6B', ttsText: '路程240千米' },
                ]
              },
              ttsNarration: '速度60千米每时乘时间4小时等于路程240千米！',
            }
          },
          { type: 'text', content: '两步计算题：一辆汽车2小时行了120千米，照这样计算，5小时行多少千米？先算速度120÷2=60千米/时，再算路程60×5=300千米。', animationType: 'reveal' },
          { type: 'tip', content: '读题技巧：看到"每小时""每分钟"找速度，看到"几小时""几分钟"找时间，看到"一共行了"找路程。', label: '读题技巧', animationType: 'pulse' },
        ],
        iDo: '家长模拟出行算路程：给出速度和时间，示范速度×时间=路程的计算。',
        weDo: '亲子一起算出行问题，模拟开车出行场景。',
        youDo: '孩子独立解决出行问题，用速度×时间=路程解题。',
        parentTips: '速度×时间=路程。让孩子在实际出行场景中理解三者关系。',
        funElement: '笑话：汽车说——跑得快用时少！歇后语：快马加鞭——加速前进。小游戏：出行规划师，算路程比赛！',
        gsapAnimations: [
          '[GSAP:sceneBuild|出行场景：车+速度+时间→路程|1.5s|点击播放|power2.out]',
          '[GSAP:numberCount|路程数字滚动|0.6s|计算完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|出行场景图|500x300|可爱卡通风|png|汽车+路标]',
          '[IMG:illustration|速度时间路程关系图|400x200|教学风|png|三者关系]'
        ],
        practiceQuestions: [
          {
            id: 'm4u5l4q1',
            type: 'choice',
            question: '速度、时间和路程的关系是？',
            options: ['速度+时间=路程', '速度×时间=路程', '速度÷时间=路程', '时间÷速度=路程'],
            answer: '速度×时间=路程',
            hint: '回忆出行公式',
            explanation: '速度×时间=路程。如每小时60千米行4小时，60×4=240千米。'
          },
          {
            id: 'm4u5l4q2',
            type: 'fill',
            question: '一辆汽车每小时行80千米，3小时行___千米。',
            answer: '240',
            hint: '速度×时间=路程',
            explanation: '速度80×时间3=80×3=240千米。'
          },
          {
            id: 'm4u5l4q3',
            type: 'choice',
            question: '一辆汽车4小时行了240千米，每小时行多少千米？这道题求的是什么？',
            options: ['速度', '时间', '路程', '无法确定'],
            answer: '速度',
            hint: '已知路程和时间，求什么？',
            explanation: '已知路程240千米和时间4小时，求每小时行多少就是求速度。路程÷时间=速度，240÷4=60千米/时。'
          },
          {
            id: 'm4u5l4q4',
            type: 'fill',
            question: '甲乙两地相距360千米，一辆汽车每小时行60千米，需要___小时到达。',
            answer: '6',
            hint: '路程÷速度=时间',
            explanation: '路程360÷速度60=360÷60=6小时。'
          },
          {
            id: 'm4u5l4q5',
            type: 'choice',
            question: '一辆汽车2小时行了120千米，照这样计算，5小时行多少千米？',
            options: ['240千米', '300千米', '360千米', '600千米'],
            answer: '300千米',
            hint: '先算速度，再算5小时的路程',
            explanation: '先算速度：120÷2=60千米/时，再算5小时路程：60×5=300千米。'
          },
          {
            id: 'm4u5l4q6',
            type: 'fill',
            question: '小明骑车每分钟行200米，行4000米需要___分钟。',
            answer: '20',
            hint: '路程÷速度=时间',
            explanation: '路程4000÷速度200=4000÷200=20分钟。'
          },
          {
            id: 'm4u5l4q7',
            type: 'fill',
            question: '已知路程÷___=速度。',
            answer: '时间',
            hint: '[速度时间路程]（数学-除数是两位数的除法-第4课）',
            explanation: '根据速度×时间=路程，可以推导出：路程÷时间=速度，路程÷速度=时间。'
          }
        ]
      },
      {
        id: 'm4u5l5',
        title: '除法综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了口算除法、笔算除法、四舍五入试商法和除法应用题。来检测一下吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①口算整十数除法 ②笔算两位数除法（余数<除数） ③四舍五入试商法 ④速度×时间=路程', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：一辆汽车3小时行了195千米，平均每小时行多少千米？195÷3=65千米/时。验算：65×3=195。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测要点：口算+笔算+试商+应用题，正确率≥85%！注意余数要比除数小！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '除法达人通关动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '除法达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '➗', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为除法达人' },
                  { text: '除法达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '除法达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成除数是两位数的除法单元，你是除法达人！',
            }
          },
          { type: 'tip', content: '目标：20题综合检测，正确率达到85%以上就能获得除法达人徽章！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：口算、笔算、试商和除法应用题的完整解题过程。',
        weDo: '亲子一起竞速做题，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成20题综合检测，争取正确率85%以上。',
        parentTips: '20题综合检测，正确率≥85%为通过。注意试商和余数。',
        funElement: '歇后语：算账先生——一分不差。笑话：除号说——我是横线加两个点，上面下面都有份！小游戏：除法竞速20题！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out|particleCount:40]',
          '[GSAP:starFlyIn|除法达人徽章飞入|0.8s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|除法达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|除法知识思维导图|500x300|教学风|png|知识导图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u5l5q1',
            type: 'choice',
            question: '180÷30=？',
            options: ['5', '6', '60', '3'],
            answer: '6',
            hint: '想18÷3=？',
            explanation: '180÷30：想18÷3=6，所以180÷30=6。'
          },
          {
            id: 'm4u5l5q2',
            type: 'fill',
            question: '245÷41=___……___。',
            answer: '5;40',
            acceptableAnswers: ['5……40', '5,40'],
            hint: '41×5=205... 不对，245÷41，41≈40，245÷40≈6，试商6：41×6=246>245，调商5：41×5=205，245-205=40',
            explanation: '245÷41：41≈40，试商6：41×6=246>245太大，试商5：41×5=205，245-205=40，余数40<41，所以245÷41=5……40。'
          },
          {
            id: 'm4u5l5q3',
            type: 'choice',
            question: '计算312÷52时，把52四舍五入看作50试商得6，验证52×6=312，说明？',
            options: ['商偏大需要调小', '商偏小需要调大', '商正好，不用调', '需要重新试商'],
            answer: '商正好，不用调',
            hint: '52×6=312，恰好等于被除数',
            explanation: '52×6=312正好等于被除数312，没有余数，说明商6正好，不用调整。312÷52=6。'
          },
          {
            id: 'm4u5l5q4',
            type: 'fill',
            question: '一辆火车每小时行120千米，4小时行___千米。',
            answer: '480',
            hint: '速度×时间=路程',
            explanation: '速度120×时间4=120×4=480千米。'
          },
          {
            id: 'm4u5l5q5',
            type: 'choice',
            question: '下面哪个算式的结果和其他三个不同？',
            options: ['120÷40', '240÷80', '360÷90', '480÷160'],
            answer: '360÷90',
            hint: '分别算一算',
            explanation: '120÷40=3，240÷80=3，360÷90=4，480÷160=3。只有360÷90=4和其他三个结果3不同。'
          },
          {
            id: 'm4u5l5q6',
            type: 'fill',
            question: '学校运来480本书，平均分给24个班，每班分___本。',
            answer: '20',
            hint: '480÷24=？',
            explanation: '480÷24：24≈20，480÷20=24，试商24太大，试商20：24×20=480，正好。所以480÷24=20本。'
          },
          {
            id: 'm4u5l5q7',
            type: 'fill',
            question: '验算156÷31=5……1：31×5+1=___，等于被除数所以正确。',
            answer: '156',
            hint: '[笔算除法验算]（数学-除数是两位数的除法-第2课）',
            explanation: '验算：商×除数+余数=被除数，31×5+1=155+1=156，等于被除数156，所以156÷31=5……1正确。'
          }
        ]
      }
    ]
  },

  // ==================== 第六单元：小数的意义和性质 ====================
  {
    id: 'm4u6',
    title: '小数的意义和性质',
    subtitle: '小数的世界，精确到每一位',
    order: 6,
    lessons: [
      {
        id: 'm4u6l1',
        title: '小数的产生和意义',
        order: 1,
        teachingMethod: 'CPA·C→P：分米厘米毫米→小数',
        content: [
          { type: 'text', content: '在测量时，常常得不到整数结果，这就需要用小数来表示。小数到底表示什么呢？', animationType: 'reveal' },
          { type: 'example', content: '1分米=0.1米（把1米平均分成10份，1份是1/10米=0.1米）。1厘米=0.01米（把1米平均分成100份，1份是1/100米=0.01米）。', label: '小数的意义', animationType: 'bounce' },
          { type: 'formula', content: '小数的意义：分母是10、100、1000……的分数可以用小数表示。一位小数表示十分之几，两位小数表示百分之几，三位小数表示千分之几。', label: '小数意义', animationType: 'typewriter' },
          { type: 'tip', content: '小数各部分：小数点左边是整数部分，右边是小数部分。如3.14，3是整数部分，14是小数部分。', label: '小数结构', animationType: 'pulse' },
          { type: 'animation', content: '米尺逐步展开：米→分米→厘米，对应小数0.1和0.01', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '米尺与小数',
              sceneBuildConfig: {
                sceneName: '米尺展开',
                elements: [
                  { text: '1米', emoji: '📏', x: 10, y: 30, animation: 'bounceIn', delay: 0, ttsText: '1米' },
                  { text: '1分米=0.1米', emoji: '📐', x: 40, y: 30, animation: 'scaleIn', delay: 0.4, ttsText: '1分米等于0.1米' },
                  { text: '1厘米=0.01米', emoji: '📍', x: 75, y: 30, animation: 'scaleIn', delay: 0.8, ttsText: '1厘米等于0.01米' },
                ]
              },
              ttsNarration: '把1米平均分成10份，每份是1分米等于0.1米；分成100份，每份是1厘米等于0.01米！',
            }
          },
          { type: 'text', content: '小数的计数单位：十分之一（0.1）、百分之一（0.01）、千分之一（0.001）……每相邻两个计数单位之间的进率是10。', animationType: 'reveal' },
          { type: 'tip', content: '理解关键：小数就是特殊的分数。0.3=3/10，0.25=25/100，0.125=125/1000。', label: '小数与分数', animationType: 'pulse' },
        ],
        iDo: '家长用米尺演示1分米=0.1米，1厘米=0.01米，让孩子用小数表示测量结果。',
        weDo: '亲子一起量物品，用小数表示测量结果，互相检查。',
        youDo: '孩子独立用小数表示测量结果，理解小数的意义。',
        parentTips: '从测量出发理解小数：不够1用小数。1分米=0.1米，1厘米=0.01米。',
        funElement: '笑话：小数点说——我虽小，但位置很重要！歇后语：差之毫厘——谬以千里。小游戏：量一量说小数！',
        gsapAnimations: [
          '[GSAP:sceneBuild|米尺逐步展开：米→分米→厘米|1.5s|点击播放|power2.out]',
          '[GSAP:numberCount|分米厘米对应小数滚动|0.6s|展开时|power2.out]'
        ],
        images: [
          '[IMG:illustration|米尺与小数对应图|500x300|教学风|png|米尺标注]',
          '[IMG:illustration|小数与分数关系图|400x200|教学风|png|分数小数]'
        ],
        practiceQuestions: [
          {
            id: 'm4u6l1q1',
            type: 'choice',
            question: '1分米等于多少米？',
            options: ['1米', '0.1米', '0.01米', '10米'],
            answer: '0.1米',
            hint: '把1米平均分成10份，1份是？',
            explanation: '把1米平均分成10份，1份是1/10米，用小数表示就是0.1米。所以1分米=0.1米。'
          },
          {
            id: 'm4u6l1q2',
            type: 'fill',
            question: '1厘米=___米（用小数表示）。',
            answer: '0.01',
            hint: '把1米平均分成100份，1份是？',
            explanation: '把1米平均分成100份，1份是1/100米，用小数表示就是0.01米。所以1厘米=0.01米。'
          },
          {
            id: 'm4u6l1q3',
            type: 'choice',
            question: '0.3表示什么？',
            options: ['三分之三', '十分之三', '百分之三', '千分之三'],
            answer: '十分之三',
            hint: '一位小数表示什么？',
            explanation: '0.3是一位小数，表示十分之三，即3/10。一位小数表示十分之几。'
          },
          {
            id: 'm4u6l1q4',
            type: 'fill',
            question: '0.25=___/100（填分子）。',
            answer: '25',
            hint: '两位小数表示百分之几',
            explanation: '0.25是两位小数，表示百分之二十五，即25/100。'
          },
          {
            id: 'm4u6l1q5',
            type: 'choice',
            question: '小数部分最高的计数单位是？',
            options: ['0.001', '0.01', '0.1', '1'],
            answer: '0.1',
            hint: '【期末真题】小数点右边第一位是什么位？',
            explanation: '小数点右边第一位是十分位，计数单位是0.1（十分之一），这是小数部分最高的计数单位。'
          },
          {
            id: 'm4u6l1q6',
            type: 'fill',
            question: '3.14中，整数部分是___，小数部分是14。',
            answer: '3',
            hint: '小数点左边是什么部分？',
            explanation: '3.14中，小数点左边的3是整数部分，右边的14是小数部分。'
          },
          {
            id: 'm4u6l1q7',
            type: 'fill',
            question: '把1米平均分成1000份，1份是___米（用小数表示）。',
            answer: '0.001',
            hint: '[小数的意义]（数学-小数的意义和性质-第1课）',
            explanation: '把1米平均分成1000份，1份是1/1000米，用小数表示就是0.001米。这就是三位小数的意义。'
          }
        ]
      },
      {
        id: 'm4u6l2',
        title: '小数的读写和组成',
        order: 2,
        teachingMethod: 'EDI：示范→合作→独立',
        content: [
          { type: 'text', content: '小数怎么读怎么写呢？整数部分按整数读，小数点读"点"，小数部分逐位读。', animationType: 'reveal' },
          { type: 'example', content: '3.14读作：三点一四。0.25读作：零点二五。整数部分是0时读"零"。', label: '小数读写', animationType: 'bounce' },
          { type: 'formula', content: '读法：整数部分按整数读，小数点读"点"，小数部分逐位读出每个数字。写法：整数部分按整数写，小数点写在个位右下角，小数部分逐位写。', label: '读写法则', animationType: 'typewriter' },
          { type: 'tip', content: '小数的组成：3.14由3个一、1个十分之一和4个百分之一组成。', label: '小数组成', animationType: 'pulse' },
          { type: 'animation', content: '小数逐位出现：3.14→3+点+1+4', animationType: 'numberCount',
            animationConfig: {
              sceneType: 'numberCount',
              title: '小数逐位读写',
              countConfig: { from: 0, to: 4, itemEmoji: '🔢', direction: 'forward' },
              ttsNarration: '3.14读作三点一四，整数部分3，小数部分一四！',
            }
          },
          { type: 'text', content: '小数数位顺序：整数部分（个位、十位……），小数点，小数部分（十分位、百分位、千分位……）。', animationType: 'reveal' },
          { type: 'tip', content: '易错提醒：小数部分要逐位读，不能按整数读。如0.15读作"零点一五"，不能读作"零点十五"！', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范读写小数：3.14读作三点一四，0.25读作零点二五。强调小数部分逐位读。',
        weDo: '亲子一起读写小数，家长写数，孩子读出来，互相检查。',
        youDo: '孩子独立读写小数，说出小数的组成。',
        parentTips: '整数部分按整数读，点读"点"，小数部分逐位读。注意小数部分不能按整数读。',
        funElement: '笑话：小数点说——我就是个点，但少了我数字就乱套了！歇后语：一点不差——非常精确。小游戏：小数读写接龙！',
        gsapAnimations: [
          '[GSAP:numberCount|小数逐位出现：3.14→3+点+1+4|0.8s|点击|power2.out]',
          '[GSAP:stagger|小数数位依次标注|0.4s|逐位出现|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|小数读写示意图|400x200|教学风|png|小数数位表]',
          '[IMG:illustration|小数组成图|400x200|教学风|png|组成示意]'
        ],
        practiceQuestions: [
          {
            id: 'm4u6l2q1',
            type: 'choice',
            question: '3.14怎么读？',
            options: ['三点十四', '三点一四', '三十四点一四', '三又十四'],
            answer: '三点一四',
            hint: '小数部分要逐位读',
            explanation: '3.14：整数部分3，小数点读"点"，小数部分逐位读"一四"，所以读作"三点一四"。'
          },
          {
            id: 'm4u6l2q2',
            type: 'fill',
            question: '零点二五写作___。',
            answer: '0.25',
            hint: '整数部分是0，小数部分是25',
            explanation: '零点二五：整数部分0，小数点，小数部分25，写作0.25。'
          },
          {
            id: 'm4u6l2q3',
            type: 'choice',
            question: '0.15怎么读？',
            options: ['零点十五', '零点一五', '十五点零', '零点一十五'],
            answer: '零点一五',
            hint: '小数部分逐位读',
            explanation: '0.15：整数部分0读"零"，小数点读"点"，小数部分逐位读"一五"，所以读作"零点一五"。不能读作"零点十五"。'
          },
          {
            id: 'm4u6l2q4',
            type: 'fill',
            question: '2.36由2个一、3个___和6个百分之一组成。',
            answer: '十分之一',
            acceptableAnswers: ['0.1', '十分之一'],
            hint: '小数点右边第一位是什么？',
            explanation: '2.36中，3在十分位，表示3个十分之一（0.1），6在百分位表示6个百分之一（0.01）。'
          },
          {
            id: 'm4u6l2q5',
            type: 'choice',
            question: '下面哪个读法是正确的？',
            options: ['10.05读作十点零五', '10.05读作十点五', '10.05读作十点零零五', '10.05读作一零点零五'],
            answer: '10.05读作十点零五',
            hint: '小数部分逐位读，0也要读',
            explanation: '10.05：整数部分10读"十"，小数点读"点"，小数部分逐位读"零五"，所以读作"十点零五"。'
          },
          {
            id: 'm4u6l2q6',
            type: 'fill',
            question: '一个数由5个一和3个十分之一组成，这个数是___。',
            answer: '5.3',
            hint: '5个一=5，3个十分之一=0.3',
            explanation: '5个一是5，3个十分之一是0.3，合起来是5.3。'
          },
          {
            id: 'm4u6l2q7',
            type: 'fill',
            question: '小数点右边第一位是___位，计数单位是0.1。',
            answer: '十分',
            hint: '[小数的读写]（数学-小数的意义和性质-第2课）',
            explanation: '小数点右边第一位是十分位，计数单位是十分之一（0.1）；第二位是百分位，计数单位是百分之一（0.01）。'
          }
        ]
      },
      {
        id: 'm4u6l3',
        title: '小数的性质——末尾0不变',
        order: 3,
        teachingMethod: '探究式：发现规律',
        content: [
          { type: 'text', content: '小数有一个奇妙的性质：在小数的末尾添上0或去掉0，小数的大小不变！', animationType: 'reveal' },
          { type: 'example', content: '0.1=0.10=0.100。比较大小：0.1元=1角，0.10元=10分=1角，所以0.1=0.10。', label: '小数性质', animationType: 'bounce' },
          { type: 'formula', content: '小数的性质：小数的末尾添上"0"或去掉"0"，小数的大小不变。', label: '小数性质', animationType: 'typewriter' },
          { type: 'tip', content: '注意：只能添上或去掉"末尾"的0，不能去掉中间的0！0.10=0.1（可以），但0.01≠0.1（中间的0不能去）！', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '0.1→0.10→0.100依次出现用等号连接', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '小数的性质',
              timelineConfig: {
                steps: [
                  { text: '0.1', emoji: '🔢', ttsNarration: '0.1', duration: 0.8 },
                  { text: '0.1 = 0.10', emoji: '➕', ttsNarration: '末尾添0等于0.10', duration: 1 },
                  { text: '0.1 = 0.10 = 0.100', emoji: '➕', ttsNarration: '再添0等于0.100，大小不变', duration: 1 },
                ]
              },
              ttsNarration: '小数末尾添上0或去掉0，小数的大小不变！0.1等于0.10等于0.100！',
            }
          },
          { type: 'text', content: '利用小数的性质可以化简小数：0.20=0.2，1.50=1.5，3.00=3。也可以根据需要添0：0.2=0.20=0.200。', animationType: 'reveal' },
          { type: 'tip', content: '化简口诀：末尾有0尽管去，中间有0不能动！', label: '化简口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范0.1=0.10=0.100，用元角分验证。再示范化简小数和添0的方法。',
        weDo: '亲子一起验证性质，化简和添0练习，互相检查。',
        youDo: '孩子独立应用性质，化简小数和按要求添0。',
        parentTips: '小数末尾添上或去掉0，大小不变。强调"末尾"的0，中间的0不能动。',
        funElement: '笑话：0说——在小数末尾我多一个少一个都一样！歇后语：换汤不换药——本质没变。小游戏：添0去0大挑战！',
        gsapAnimations: [
          '[GSAP:timeline|0.1→0.10→0.100依次出现用等号连接|1s|点击播放|power2.out]',
          '[GSAP:highlight|末尾0高亮闪烁|0.5s|添0去0时|power2.out]'
        ],
        images: [
          '[IMG:illustration|小数性质示意图|500x200|教学风|png|等式链]',
          '[IMG:illustration|末尾0与中间0对比|400x200|教学风|png|0的位置]'
        ],
        practiceQuestions: [
          {
            id: 'm4u6l3q1',
            type: 'choice',
            question: '小数的性质是什么？',
            options: ['小数末尾添上0变大', '小数末尾添上0或去掉0，大小不变', '小数中间的0可以去掉', '小数点的位置可以移动'],
            answer: '小数末尾添上0或去掉0，大小不变',
            hint: '回忆小数的性质',
            explanation: '小数的性质：小数的末尾添上"0"或去掉"0"，小数的大小不变。'
          },
          {
            id: 'm4u6l3q2',
            type: 'fill',
            question: '化简小数：0.20=___。',
            answer: '0.2',
            hint: '去掉末尾的0',
            explanation: '根据小数的性质，去掉末尾的0，0.20=0.2，大小不变。'
          },
          {
            id: 'm4u6l3q3',
            type: 'choice',
            question: '下面哪个等式不成立？',
            options: ['0.5=0.50', '1.2=1.20', '0.01=0.1', '3.00=3'],
            answer: '0.01=0.1',
            hint: '哪个去掉的是中间的0？',
            explanation: '0.01≠0.1。0.01中间的0不能去掉，去掉后变成0.1，大小改变了。其他都是去掉末尾的0，大小不变。'
          },
          {
            id: 'm4u6l3q4',
            type: 'fill',
            question: '化简小数：3.00=___。',
            answer: '3',
            hint: '去掉末尾的0和小数点',
            explanation: '3.00去掉末尾的两个0，小数点右边没有数字了，小数点也可以去掉，所以3.00=3。'
          },
          {
            id: 'm4u6l3q5',
            type: 'choice',
            question: '把0.5改写成三位小数是？',
            options: ['0.500', '0.005', '0.050', '500'],
            answer: '0.500',
            hint: '在末尾添0到三位小数',
            explanation: '0.5是一位小数，改写成三位小数就在末尾添两个0：0.5=0.500，大小不变。'
          },
          {
            id: 'm4u6l3q6',
            type: 'fill',
            question: '1.50去掉末尾的0是___，大小不变。',
            answer: '1.5',
            hint: '去掉末尾的0',
            explanation: '根据小数的性质，1.50去掉末尾的0得到1.5，大小不变。'
          },
          {
            id: 'm4u6l3q7',
            type: 'fill',
            question: '把2.5改写成以百分之一为单位的小数是___。',
            answer: '2.50',
            hint: '[小数的性质]（数学-小数的意义和性质-第3课）',
            explanation: '2.5改写成以百分之一为单位的小数，就是改写成两位小数，在末尾添一个0：2.5=2.50。'
          }
        ]
      },
      {
        id: 'm4u6l4',
        title: '小数大小比较和改写',
        order: 4,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '小数怎么比较大小呢？方法和整数类似：从高位比起，但要注意小数位数多不一定大！', animationType: 'reveal' },
          { type: 'example', content: '比较3.25和3.28：整数部分都是3，十分位都是2，百分位5<8，所以3.25<3.28。', label: '比较示范', animationType: 'bounce' },
          { type: 'formula', content: '小数比较：先比整数部分，整数部分大的大；整数部分相同比十分位，十分位大的大；以此类推。', label: '比较法则', animationType: 'typewriter' },
          { type: 'tip', content: '易错提醒：小数位数多不一定大！如0.3>0.28（3>2），虽然0.28位数多。', label: '易错提醒', animationType: 'pulse' },
          { type: 'animation', content: '两个小数逐位对比展示动画', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '小数大小比较',
              compareConfig: {
                leftItems: ['3', '2', '5'],
                rightItems: ['3', '2', '8'],
                result: 'right',
                resultText: '3.28 > 3.25，百分位8>5',
              },
              ttsNarration: '3.25和3.28比较，整数和十分位都相同，百分位5小于8，所以3.25小于3.28！',
            }
          },
          { type: 'text', content: '小数与单位换算：0.5米=50厘米（大单位化小单位乘进率），50厘米=0.5米（小单位化大单位除以进率）。', animationType: 'reveal' },
          { type: 'tip', content: '单位换算口诀：大化小乘进率，小化大除进率。米和厘米进率100，米和分米进率10。', label: '换算口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范比较和改写单位：先比整数部分，再比小数部分从高到低。示范单位换算。',
        weDo: '亲子一起比较和改写，家长出题，孩子比较大小并改写单位。',
        youDo: '孩子独立比较和改写小数，完成练习。',
        parentTips: '先比整数部分，再比小数部分从高到低。大化小乘进率，小化大除进率。',
        funElement: '笑话：0.3对0.28说——别以为你位数多就比我大！歇后语：棋逢对手——不相上下。小游戏：小数比大小扑克牌！',
        gsapAnimations: [
          '[GSAP:compare|两个小数对比展示|0.8s|页面加载|power2.out]',
          '[GSAP:numberCount|单位换算数字变化|0.6s|换算时|power2.out]'
        ],
        images: [
          '[IMG:illustration|小数比较规则图|500x200|教学风|png|比较步骤]',
          '[IMG:illustration|单位换算图|400x200|教学风|png|米厘米换算]'
        ],
        practiceQuestions: [
          {
            id: 'm4u6l4q1',
            type: 'choice',
            question: '比较3.25和3.28的大小：3.25 ○ 3.28',
            options: ['>', '<', '=', '无法比较'],
            answer: '<',
            hint: '整数部分相同，比十分位，再比百分位',
            explanation: '3.25和3.28：整数部分都是3，十分位都是2，百分位5<8，所以3.25<3.28。'
          },
          {
            id: 'm4u6l4q2',
            type: 'fill',
            question: '0.5米=___厘米。',
            answer: '50',
            hint: '大化小乘进率，米到厘米进率是100',
            explanation: '0.5米化成厘米：0.5×100=50厘米。大单位化小单位乘进率。'
          },
          {
            id: 'm4u6l4q3',
            type: 'choice',
            question: '下面哪个小数最大？',
            options: ['0.3', '0.29', '0.31', '0.285'],
            answer: '0.31',
            hint: '从十分位开始比较',
            explanation: '比较十分位：0.3和0.31的十分位是3，0.29和0.285的十分位是2。3>2，所以0.3和0.31更大。0.31的百分位1>0.3的百分位0（0.3=0.30），所以0.31最大。'
          },
          {
            id: 'm4u6l4q4',
            type: 'fill',
            question: '25厘米=___米（用小数表示）。',
            answer: '0.25',
            hint: '小化大除进率，厘米到米进率100',
            explanation: '25厘米化成米：25÷100=0.25米。小单位化大单位除以进率。'
          },
          {
            id: 'm4u6l4q5',
            type: 'choice',
            question: '比较0.3和0.285的大小：0.3 ○ 0.285',
            options: ['>', '<', '=', '无法比较'],
            answer: '>',
            hint: '位数多不一定大，从十分位比起',
            explanation: '0.3=0.300，和0.285比较：十分位3>2，所以0.3>0.285。小数位数多不一定大。'
          },
          {
            id: 'm4u6l4q6',
            type: 'fill',
            question: '把0.4、0.39、0.41按从小到大排列，排在中间的是___。',
            answer: '0.4',
            hint: '0.4=0.40，比较三个数',
            explanation: '0.4=0.40，三个数从小到大：0.39<0.40<0.41，即0.39<0.4<0.41，排在中间的是0.4。'
          },
          {
            id: 'm4u6l4q7',
            type: 'fill',
            question: '比较0.6和0.60的大小：0.6 ○ 0.60，填">""<"或"="。',
            answer: '=',
            hint: '[小数的性质]（数学-小数的意义和性质-第3课）',
            explanation: '根据小数的性质，0.6末尾添0等于0.60，大小不变，所以0.6=0.60。'
          }
        ]
      },
      {
        id: 'm4u6l5',
        title: '小数综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了小数的意义、读写、性质和大小比较。来检测一下掌握情况吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①小数的意义（分数与小数） ②读写和组成 ③小数的性质（末尾0不变） ④大小比较和单位改写', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：0.35读作零点三五，由3个0.1和5个0.01组成，化简后是0.35（不能化简），0.35>0.3。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测要点：意义+性质+比较+改写，正确率≥80%！注意末尾0和中间0的区别！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '小数达人通关动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '小数达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '🎯', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为小数达人' },
                  { text: '小数达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '小数达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成小数的意义和性质单元，你是小数达人！',
            }
          },
          { type: 'tip', content: '目标：意义+性质+比较+改写，正确率达到80%以上就能获得小数达人徽章！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：意义、读写、性质、比较和改写的完整解题过程。',
        weDo: '亲子一起练习，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成小数综合测试，争取正确率80%以上。',
        parentTips: '意义+性质+比较+改写，正确率≥80%为通过。注意小数性质的应用。',
        funElement: '歇后语：一丝不苟——十分精确。笑话：小数点搬家——数字也跟着变！小游戏：小数知识抢答赛！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥80%|power1.out|particleCount:40]',
          '[GSAP:starFlyIn|小数达人徽章飞入|0.8s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|小数达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|小数知识思维导图|500x300|教学风|png|知识导图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u6l5q1',
            type: 'choice',
            question: '0.7表示什么？',
            options: ['百分之七', '十分之七', '千分之七', '七分之十'],
            answer: '十分之七',
            hint: '一位小数表示什么？',
            explanation: '0.7是一位小数，表示十分之七，即7/10。一位小数表示十分之几。'
          },
          {
            id: 'm4u6l5q2',
            type: 'fill',
            question: '0.45读作___。',
            answer: '零点四五',
            hint: '整数部分读零，小数部分逐位读',
            explanation: '0.45：整数部分0读"零"，小数点读"点"，小数部分逐位读"四五"，读作"零点四五"。'
          },
          {
            id: 'm4u6l5q3',
            type: 'choice',
            question: '下面化简正确的是？',
            options: ['0.030=0.03', '0.030=0.3', '0.030=0.30', '0.030=30'],
            answer: '0.030=0.03',
            hint: '只能去掉末尾的0',
            explanation: '0.030只能去掉末尾的0，得到0.03。中间的0不能去掉，0.030≠0.3。'
          },
          {
            id: 'm4u6l5q4',
            type: 'fill',
            question: '比较大小：0.52 ○ 0.519，填">""<"或"="。',
            answer: '>',
            hint: '0.52=0.520，和0.519比较',
            explanation: '0.52=0.520，和0.519比较：整数部分0=0，十分位5=5，百分位2>1，所以0.52>0.519。'
          },
          {
            id: 'm4u6l5q5',
            type: 'choice',
            question: '3分米=多少米？',
            options: ['3米', '0.3米', '0.03米', '30米'],
            answer: '0.3米',
            hint: '1分米=0.1米',
            explanation: '1分米=0.1米，3分米=3×0.1=0.3米。'
          },
          {
            id: 'm4u6l5q6',
            type: 'fill',
            question: '一个数由4个0.1和5个0.01组成，这个数是___。',
            answer: '0.45',
            hint: '4个0.1=0.4，5个0.01=0.05',
            explanation: '4个0.1是0.4，5个0.01是0.05，合起来是0.45。'
          },
          {
            id: 'm4u6l5q7',
            type: 'fill',
            question: '把3.5改写成以百分之一为单位的小数是___。',
            answer: '3.50',
            hint: '[小数的性质]（数学-小数的意义和性质-第3课）',
            explanation: '3.5改写成以百分之一为单位就是改写成两位小数，在末尾添一个0：3.5=3.50。根据小数的性质，大小不变。'
          }
        ]
      }
    ]
  },
  // ==================== 第七单元：小数加减法 ====================
  {
    id: 'm4u7',
    title: '小数加减法',
    subtitle: '小数点对齐，加减不犯错',
    order: 7,
    lessons: [
      {
        id: 'm4u7l1',
        title: '小数加法——小数点对齐',
        order: 1,
        teachingMethod: 'CPA·P→A：图示→竖式',
        content: [
          { type: 'text', content: '小数加法最重要的规则就是：小数点对齐！小数点对齐了，相同数位自然就对齐了。', animationType: 'reveal' },
          { type: 'example', content: '2.5+3.4=5.9：小数点对齐，十分位5+4=9，个位2+3=5，结果5.9。', label: '小数加法', animationType: 'bounce' },
          { type: 'formula', content: '小数加法法则：小数点对齐（相同数位对齐），按整数加法计算，得数的小数点要和加数的小数点对齐。', label: '加法法则', animationType: 'typewriter' },
          { type: 'tip', content: '位数不同时要补0：1.25+3.7，把3.7写成3.70，再对齐小数点计算。1.25+3.70=4.95。', label: '补0对齐', animationType: 'pulse' },
          { type: 'animation', content: '2.5+3.4竖式计算动画（小数点对齐）', animationType: 'verticalCalc',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '2.5+3.4小数加法',
              verticalCalcConfig: {
                num1: 2.5,
                num2: 3.4,
                operator: '+',
                result: 5.9,
                steps: [
                  { text: '小数点对齐', highlight: 'ones' },
                  { text: '十分位：5+4=9', highlight: 'ones' },
                  { text: '个位：2+3=5', highlight: 'tens' },
                  { text: '结果：5.9（小数点对齐）', highlight: 'hundreds' },
                ]
              },
              ttsNarration: '小数点对齐，十分位5加4等于9，个位2加3等于5，结果5.9！',
            }
          },
          { type: 'text', content: '验算方法：交换加数位置再加一遍，或者用减法验算（和-一个加数=另一个加数）。', animationType: 'reveal' },
          { type: 'tip', content: '易错提醒：千万不要末尾对齐！是小数点对齐！2.5+3.14不是把5和4对齐，而是小数点对齐。', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范2.5+3.4：小数点对齐，十分位加十分位，个位加个位。示范位数不同时补0。',
        weDo: '亲子一起做小数加法，家长出题，孩子做竖式，互相检查小数点对齐。',
        youDo: '孩子独立做小数加法竖式练习。',
        parentTips: '小数点对齐是关键！位数不同时补0再对齐。得数的小数点也要对齐。',
        funElement: '笑话：小数点说——排队要对齐我，别对别人！歇后语：对号入座——各就各位。小游戏：小数点对齐大挑战！',
        gsapAnimations: [
          '[GSAP:verticalCalc|2.5+3.4竖式计算（小数点对齐）|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|小数点对齐线高亮|0.5s|对齐时|power2.out]'
        ],
        images: [
          '[IMG:illustration|小数加法竖式图|400x300|教学风|png|小数点对齐]',
          '[IMG:illustration|补0对齐示意图|400x200|教学风|png|补零方法]'
        ],
        practiceQuestions: [
          {
            id: 'm4u7l1q1',
            type: 'choice',
            question: '2.5+3.4=？',
            options: ['5.9', '5.09', '59', '2.84'],
            answer: '5.9',
            hint: '小数点对齐，5+4=9，2+3=5',
            explanation: '2.5+3.4：小数点对齐，十分位5+4=9，个位2+3=5，结果5.9。'
          },
          {
            id: 'm4u7l1q2',
            type: 'fill',
            question: '1.2+0.8=___。',
            answer: '2',
            acceptableAnswers: ['2', '2.0', '2.0'],
            hint: '小数点对齐，2+8=10进1，1+0+1=2',
            explanation: '1.2+0.8：十分位2+8=10，写0进1，个位1+0+1=2，结果2.0=2。'
          },
          {
            id: 'm4u7l1q3',
            type: 'choice',
            question: '1.25+3.7=？',
            options: ['4.32', '4.95', '5.02', '1.62'],
            answer: '4.95',
            hint: '补0对齐：1.25+3.70',
            explanation: '1.25+3.7：补0变成1.25+3.70，百分位5+0=5，十分位2+7=9，个位1+3=4，结果4.95。'
          },
          {
            id: 'm4u7l1q4',
            type: 'fill',
            question: '0.75+2.5=___。',
            answer: '3.25',
            hint: '补0对齐：0.75+2.50',
            explanation: '0.75+2.5：补0变成0.75+2.50，百分位5+0=5，十分位7+5=12写2进1，个位0+2+1=3，结果3.25。'
          },
          {
            id: 'm4u7l1q5',
            type: 'choice',
            question: '下面哪个计算是正确的？',
            options: ['3.5+2.14=5.19', '3.5+2.14=2.49', '3.5+2.14=5.64', '3.5+2.14=5.49'],
            answer: '3.5+2.14=5.64',
            hint: '【期末真题】补0对齐：3.50+2.14',
            explanation: '3.5+2.14：补0变成3.50+2.14，百分位0+4=4，十分位5+1=6，个位3+2=5，结果5.64。'
          },
          {
            id: 'm4u7l1q6',
            type: 'fill',
            question: '小红买文具花了3.5元，买本子花了4.8元，一共花了___元。',
            answer: '8.3',
            hint: '3.5+4.8=？',
            explanation: '3.5+4.8：十分位5+8=13写3进1，个位3+4+1=8，结果8.3元。'
          },
          {
            id: 'm4u7l1q7',
            type: 'fill',
            question: '小数加法竖式计算时，首先要让___对齐。',
            answer: '小数点',
            hint: '[小数加法]（数学-小数加减法-第1课）',
            explanation: '小数加法竖式计算时，首先要让小数点对齐，这样相同数位就自然对齐了。'
          }
        ]
      },
      {
        id: 'm4u7l2',
        title: '小数减法——借位处理',
        order: 2,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '小数减法和小数加法一样，关键也是小数点对齐。退位减法时要注意借位！', animationType: 'reveal' },
          { type: 'example', content: '5.3-2.7=2.6：小数点对齐，十分位3-7不够减，从个位借1，13-7=6，个位4-2=2，结果2.6。', label: '小数减法', animationType: 'bounce' },
          { type: 'formula', content: '小数减法法则：小数点对齐，按整数减法计算，得数的小数点要和被减数、减数的小数点对齐。', label: '减法法则', animationType: 'typewriter' },
          { type: 'tip', content: '位数不同时补0：10-3.25，把10写成10.00，再对齐小数点计算。10.00-3.25=6.75。', label: '补0对齐', animationType: 'pulse' },
          { type: 'animation', content: '5.3-2.7竖式计算动画（含借位）', animationType: 'verticalCalc',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '5.3-2.7小数减法',
              verticalCalcConfig: {
                num1: 5.3,
                num2: 2.7,
                operator: '-',
                result: 2.6,
                borrow: [0, 1],
                steps: [
                  { text: '小数点对齐', highlight: 'ones' },
                  { text: '十分位：3-7不够减，借1，13-7=6', highlight: 'ones' },
                  { text: '个位：4-2=2', highlight: 'tens' },
                  { text: '结果：2.6', highlight: 'hundreds' },
                ]
              },
              ttsNarration: '小数点对齐，十分位3减7不够减，借1变13减7等于6，个位4减2等于2，结果2.6！',
            }
          },
          { type: 'text', content: '验算方法：差+减数=被减数。如2.6+2.7=5.3，验证正确！', animationType: 'reveal' },
          { type: 'tip', content: '易错提醒：整数减小数时要补0！如10-3.25，写成10.00-3.25，从右往左逐位减。', label: '易错提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范5.3-2.7：小数点对齐，十分位借位减。示范10-3.25补0的方法。',
        weDo: '亲子一起做小数减法，家长出题，孩子做竖式，互相检查借位。',
        youDo: '孩子独立做小数减法竖式练习。',
        parentTips: '小数点对齐，不够减要借位。整数减小数要补0。验算：差+减数=被减数。',
        funElement: '笑话：借位说——我先借一个，等会儿还！歇后语：拆东墙补西墙——借来借去。小游戏：借位小达人挑战赛！',
        gsapAnimations: [
          '[GSAP:verticalCalc|5.3-2.7竖式计算（含借位）|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|借位过程高亮|0.5s|借位时|power2.out]'
        ],
        images: [
          '[IMG:illustration|小数减法竖式图|400x300|教学风|png|借位标注]',
          '[IMG:illustration|补0减法示意图|400x200|教学风|png|补零借位]'
        ],
        practiceQuestions: [
          {
            id: 'm4u7l2q1',
            type: 'choice',
            question: '5.3-2.7=？',
            options: ['2.6', '3.6', '2.4', '3.4'],
            answer: '2.6',
            hint: '十分位3-7不够减，借1变13-7',
            explanation: '5.3-2.7：十分位3-7不够减，借1变13-7=6，个位5-1-2=2，结果2.6。'
          },
          {
            id: 'm4u7l2q2',
            type: 'fill',
            question: '3.6-1.2=___。',
            answer: '2.4',
            hint: '小数点对齐，6-2=4，3-1=2',
            explanation: '3.6-1.2：十分位6-2=4，个位3-1=2，结果2.4。'
          },
          {
            id: 'm4u7l2q3',
            type: 'choice',
            question: '10-3.25=？',
            options: ['6.75', '7.75', '7.25', '6.25'],
            answer: '6.75',
            hint: '补0：10.00-3.25',
            explanation: '10-3.25：补0变成10.00-3.25，百分位0-5借1变10-5=5，十分位9-2=7，个位9-3=6，结果6.75。'
          },
          {
            id: 'm4u7l2q4',
            type: 'fill',
            question: '8.5-3.75=___。',
            answer: '4.75',
            hint: '补0：8.50-3.75',
            explanation: '8.5-3.75：补0变成8.50-3.75，百分位0-5借1变10-5=5，十分位4-7借1变14-7=7，个位7-3=4，结果4.75。'
          },
          {
            id: 'm4u7l2q5',
            type: 'choice',
            question: '下面哪个计算是正确的？',
            options: ['5-2.3=2.7', '5-2.3=3.3', '5-2.3=2.3', '5-2.3=3.7'],
            answer: '5-2.3=2.7',
            hint: '补0：5.0-2.3',
            explanation: '5-2.3：补0变成5.0-2.3，十分位0-3借1变10-3=7，个位4-2=2，结果2.7。'
          },
          {
            id: 'm4u7l2q6',
            type: 'fill',
            question: '妈妈带了20元，买菜花了12.5元，还剩___元。',
            answer: '7.5',
            hint: '20-12.5=？补0变成20.0-12.5',
            explanation: '20-12.5：补0变成20.0-12.5，十分位0-5借1变10-5=5，个位19-12=7，结果7.5元。'
          },
          {
            id: 'm4u7l2q7',
            type: 'fill',
            question: '小数减法竖式计算时，如果被减数的小数位数比减数少，需要___再对齐。',
            answer: '补0',
            hint: '[小数减法]（数学-小数加减法-第2课）',
            explanation: '小数减法竖式计算时，如果被减数的小数位数比减数少，需要在小数末尾补0，使小数位数相同，再对齐小数点计算。'
          }
        ]
      },
      {
        id: 'm4u7l3',
        title: '小数加减混合运算',
        order: 3,
        teachingMethod: 'EDI：示范→合作→独立',
        content: [
          { type: 'text', content: '小数加减混合运算的顺序和整数一样：从左往右算，有括号先算括号里的。', animationType: 'reveal' },
          { type: 'example', content: '2.5+3.4-1.8：先算2.5+3.4=5.9，再算5.9-1.8=4.1。从左往右依次计算。', label: '混合运算', animationType: 'bounce' },
          { type: 'formula', content: '运算顺序：①没有括号的，从左往右依次计算 ②有括号的，先算括号里的 ③能用简便方法的用简便方法', label: '运算顺序', animationType: 'typewriter' },
          { type: 'tip', content: '简便方法：凑整法。如2.7+3.8+0.3，可以先算2.7+0.3=3，再算3+3.8=6.8。', label: '简便方法', animationType: 'pulse' },
          { type: 'animation', content: '混合运算步骤动画：2.5+3.4-1.8逐步计算', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '小数加减混合运算',
              timelineConfig: {
                steps: [
                  { text: '原式：2.5+3.4-1.8', emoji: '📝', ttsNarration: '从左往右算', duration: 1 },
                  { text: '第1步：2.5+3.4=5.9', emoji: '➕', ttsNarration: '先算加法，等于5.9', duration: 1 },
                  { text: '第2步：5.9-1.8=4.1', emoji: '➖', ttsNarration: '再算减法，等于4.1', duration: 1 },
                  { text: '结果：4.1', emoji: '✅', ttsNarration: '最终结果是4.1', duration: 1 },
                ]
              },
              ttsNarration: '小数加减混合运算，从左往右依次计算，2.5加3.4等于5.9，5.9减1.8等于4.1！',
            }
          },
          { type: 'text', content: '带括号的运算：10-(3.5+2.8)，先算括号里的3.5+2.8=6.3，再算10-6.3=3.7。', animationType: 'reveal' },
          { type: 'tip', content: '验算方法：可以用不同顺序再算一遍，或者逆运算验算。', label: '验算方法', animationType: 'pulse' },
        ],
        iDo: '家长示范2.5+3.4-1.8：从左往右依次计算。示范简便方法和带括号的运算。',
        weDo: '亲子一起做混合运算，家长出题，孩子计算，互相检查运算顺序。',
        youDo: '孩子独立做小数加减混合运算练习。',
        parentTips: '从左往右依次算，有括号先算括号。能简便就简便（凑整法）。',
        funElement: '笑话：加减混合运算说——左左右右，先来后到！歇后语：按部就班——一步一步来。小游戏：混合运算接龙赛！',
        gsapAnimations: [
          '[GSAP:timeline|2.5+3.4-1.8逐步计算|1.5s|点击播放|power2.inOut]',
          '[GSAP:numberCount|每步结果数字滚动|0.5s|每步完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|混合运算步骤图|500x200|教学风|png|运算步骤]',
          '[IMG:illustration|简便方法示意图|400x200|教学风|png|凑整法]'
        ],
        practiceQuestions: [
          {
            id: 'm4u7l3q1',
            type: 'choice',
            question: '2.5+3.4-1.8=？',
            options: ['4.1', '5.9', '2.3', '3.1'],
            answer: '4.1',
            hint: '先算2.5+3.4，再减1.8',
            explanation: '2.5+3.4-1.8：先算2.5+3.4=5.9，再算5.9-1.8=4.1。'
          },
          {
            id: 'm4u7l3q2',
            type: 'fill',
            question: '10-3.5+2.8=___。',
            answer: '9.3',
            hint: '从左往右：先算10-3.5，再加2.8',
            explanation: '10-3.5+2.8：先算10-3.5=6.5，再算6.5+2.8=9.3。'
          },
          {
            id: 'm4u7l3q3',
            type: 'choice',
            question: '10-(3.5+2.8)=？',
            options: ['9.3', '3.7', '6.3', '4.3'],
            answer: '3.7',
            hint: '先算括号里的3.5+2.8',
            explanation: '10-(3.5+2.8)：先算括号3.5+2.8=6.3，再算10-6.3=3.7。'
          },
          {
            id: 'm4u7l3q4',
            type: 'fill',
            question: '用简便方法计算：2.7+3.8+0.3=___。',
            answer: '6.8',
            hint: '2.7+0.3=3，再3+3.8',
            explanation: '简便方法：2.7+0.3=3，3+3.8=6.8。凑整先算2.7+0.3。'
          },
          {
            id: 'm4u7l3q5',
            type: 'choice',
            question: '下面计算正确的是？',
            options: ['5.6-2.3+1.4=1.9', '5.6-2.3+1.4=4.7', '5.6-2.3+1.4=2.3', '5.6-2.3+1.4=6.7'],
            answer: '5.6-2.3+1.4=4.7',
            hint: '从左往右：先减后加',
            explanation: '5.6-2.3+1.4：先算5.6-2.3=3.3，再算3.3+1.4=4.7。'
          },
          {
            id: 'm4u7l3q6',
            type: 'fill',
            question: '15.2-(3.7+5.3)=___。',
            answer: '6.2',
            hint: '先算括号里3.7+5.3=9，再15.2-9',
            explanation: '15.2-(3.7+5.3)：先算括号3.7+5.3=9，再算15.2-9=6.2。'
          },
          {
            id: 'm4u7l3q7',
            type: 'fill',
            question: '小数加减混合运算的顺序：没有括号的，从___往右依次计算。',
            answer: '左',
            hint: '[小数加减混合运算]（数学-小数加减法-第3课）',
            explanation: '小数加减混合运算的顺序与整数相同：没有括号的，从左往右依次计算；有括号的，先算括号里的。'
          }
        ]
      },
      {
        id: 'm4u7l4',
        title: '小数加减应用题——购物计算',
        order: 4,
        teachingMethod: '情境式：模拟购物',
        content: [
          { type: 'text', content: '生活中到处需要小数加减法！买东西算总价用加法，找零用减法，比较价格也用减法。', animationType: 'reveal' },
          { type: 'example', content: '买一支笔3.5元，一个本子4.8元，一共3.5+4.8=8.3元。付10元，找回10-8.3=1.7元。', label: '购物例子', animationType: 'bounce' },
          { type: 'formula', content: '购物公式：总价=各商品价格之和。找零=付的钱-总价。比较=大价格-小价格。', label: '购物公式', animationType: 'typewriter' },
          { type: 'tip', content: '解题关键：先弄清题目求什么（总价、找零还是差价），再选择加法还是减法。', label: '解题关键', animationType: 'pulse' },
          { type: 'animation', content: '购物场景：商品+价格→总价→找零逐步展示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '模拟购物计算',
              sceneBuildConfig: {
                sceneName: '文具店购物',
                elements: [
                  { text: '笔3.5元', emoji: '🖊️', x: 15, y: 25, animation: 'bounceIn', delay: 0, ttsText: '笔3.5元' },
                  { text: '本4.8元', emoji: '📓', x: 40, y: 25, animation: 'bounceIn', delay: 0.3, ttsText: '本子4.8元' },
                  { text: '总价8.3元', emoji: '💰', x: 65, y: 25, animation: 'scaleIn', delay: 0.6, color: '#FF6B6B', ttsText: '总价8.3元' },
                  { text: '付10元找1.7元', emoji: '💵', x: 50, y: 60, animation: 'bounceIn', delay: 1, ttsText: '付10元找回1.7元' },
                ]
              },
              ttsNarration: '笔3.5元加本子4.8元等于8.3元，付10元找回1.7元！',
            }
          },
          { type: 'text', content: '多步计算：买3件商品，先算前两件的总价，再加上第三件。或先算总价，再减去优惠券。', animationType: 'reveal' },
          { type: 'tip', content: '读题技巧：看到"一共""总共"用加法，看到"找回""还剩""贵多少"用减法。', label: '读题技巧', animationType: 'pulse' },
        ],
        iDo: '家长模拟购物：买两件商品算总价，付钱算找零，示范完整购物计算过程。',
        weDo: '亲子一起模拟购物，计算总价和找零。',
        youDo: '孩子独立解决购物问题，用小数加减法解题。',
        parentTips: '总价用加法，找零用减法。让孩子在实际购物中练习小数加减。',
        funElement: '笑话：收银员说——找你1.7元，别丢了！歇后语：买卖公平——一分不差。小游戏：超市收银员体验！',
        gsapAnimations: [
          '[GSAP:sceneBuild|购物场景：商品+价格→总价→找零|1.5s|点击播放|power2.out]',
          '[GSAP:numberCount|总价和找零数字滚动|0.6s|计算时|power2.out]'
        ],
        images: [
          '[IMG:illustration|模拟购物场景|500x300|可爱卡通风|png|文具店]',
          '[IMG:illustration|购物计算流程图|400x200|教学风|png|计算流程]'
        ],
        practiceQuestions: [
          {
            id: 'm4u7l4q1',
            type: 'choice',
            question: '买一支笔3.5元和一个本子4.8元，一共多少元？',
            options: ['7.3元', '8.3元', '7.8元', '8.8元'],
            answer: '8.3元',
            hint: '3.5+4.8=？',
            explanation: '3.5+4.8：十分位5+8=13写3进1，个位3+4+1=8，一共8.3元。'
          },
          {
            id: 'm4u7l4q2',
            type: 'fill',
            question: '买文具花了8.3元，付了10元，找回___元。',
            answer: '1.7',
            hint: '10-8.3=？',
            explanation: '10-8.3：补0变成10.0-8.3，十分位0-3借1变10-3=7，个位9-8=1，找回1.7元。'
          },
          {
            id: 'm4u7l4q3',
            type: 'choice',
            question: '小明带了15元，买了两本书，一本7.8元，另一本5.6元，还剩多少元？',
            options: ['1.6元', '2.6元', '7.2元', '6.6元'],
            answer: '1.6元',
            hint: '先算总价7.8+5.6，再用15减总价',
            explanation: '先算总价：7.8+5.6=13.4元，再算剩余：15-13.4=1.6元。'
          },
          {
            id: 'm4u7l4q4',
            type: 'fill',
            question: '一件衣服45.5元，一条裤子32.8元，衣服比裤子贵___元。',
            answer: '12.7',
            hint: '45.5-32.8=？',
            explanation: '45.5-32.8：补0对齐，十分位5-8借1变15-8=7，个位44-32=12，贵12.7元。'
          },
          {
            id: 'm4u7l4q5',
            type: 'choice',
            question: '小红买了3件商品：2.5元、3.8元、1.7元，一共花了多少元？',
            options: ['7.0元', '8.0元', '6.0元', '9.0元'],
            answer: '8.0元',
            hint: '2.5+3.8+1.7，可以凑整：2.5+1.5=4... 不对，2.5+3.8=6.3，6.3+1.7=8.0',
            explanation: '2.5+3.8+1.7：先算2.5+3.8=6.3，再算6.3+1.7=8.0。也可以凑整：3.8+1.7=5.5... 不对，简便方法是2.5+1.5不对。直接算2.5+3.8=6.3，6.3+1.7=8.0元。'
          },
          {
            id: 'm4u7l4q6',
            type: 'fill',
            question: '妈妈买水果花了12.5元，买蔬菜花了8.7元，一共花了___元。',
            answer: '21.2',
            hint: '12.5+8.7=？',
            explanation: '12.5+8.7：十分位5+7=12写2进1，个位2+8+1=11写1进1，十位0+0+1=1，一共21.2元。'
          },
          {
            id: 'm4u7l4q7',
            type: 'fill',
            question: '买一支钢笔和一本字典共花了35.6元，钢笔12.8元，字典___元。',
            answer: '22.8',
            hint: '[小数加减法]（数学-小数加减法-第4课）',
            explanation: '35.6-12.8=22.8元。补0对齐：35.6-12.8，十分位6-8借1变16-8=8，个位34-12=22，字典22.8元。'
          }
        ]
      },
      {
        id: 'm4u7l5',
        title: '小数加减综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了小数加法、减法、混合运算和购物应用题。来检测一下吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①小数加法（小数点对齐） ②小数减法（借位处理） ③混合运算（从左往右） ④购物应用题', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：3.75+2.5=6.25，6.25-1.8=4.45。验算：4.45+1.8=6.25，6.25-2.5=3.75。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测要点：小数点对齐+补0+借位+应用题，正确率≥85%！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '小数达人通关动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '小数加减达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '🧮', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为小数加减达人' },
                  { text: '小数加减达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '小数加减达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成小数加减法单元，你是小数加减达人！',
            }
          },
          { type: 'tip', content: '目标：20题综合检测，正确率达到85%以上就能获得小数加减达人徽章！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：加法、减法、混合运算和购物应用题的完整解题过程。',
        weDo: '亲子一起竞速做题，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成20题综合检测，争取正确率85%以上。',
        parentTips: '20题综合检测，正确率≥85%为通过。注意小数点对齐和补0。',
        funElement: '歇后语：精打细算——一分不浪费。笑话：小数点说——算错一位差很多！小游戏：小数加减竞速20题！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out|particleCount:40]',
          '[GSAP:starFlyIn|小数加减达人徽章飞入|0.8s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|小数加减达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|小数加减知识思维导图|500x300|教学风|png|知识导图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u7l5q1',
            type: 'choice',
            question: '3.75+2.5=？',
            options: ['6.25', '6.30', '5.80', '3.95'],
            answer: '6.25',
            hint: '补0对齐：3.75+2.50',
            explanation: '3.75+2.5：补0变成3.75+2.50，百分位5+0=5，十分位7+5=12写2进1，个位3+2+1=6，结果6.25。'
          },
          {
            id: 'm4u7l5q2',
            type: 'fill',
            question: '6.25-1.8=___。',
            answer: '4.45',
            hint: '补0对齐：6.25-1.80',
            explanation: '6.25-1.8：补0变成6.25-1.80，百分位5-0=5，十分位2-8借1变12-8=4，个位5-1=4，结果4.45。'
          },
          {
            id: 'm4u7l5q3',
            type: 'choice',
            question: '4.5+3.2-2.8=？',
            options: ['4.9', '5.9', '4.5', '3.9'],
            answer: '4.9',
            hint: '从左往右：先4.5+3.2，再减2.8',
            explanation: '4.5+3.2-2.8：先算4.5+3.2=7.7，再算7.7-2.8=4.9。'
          },
          {
            id: 'm4u7l5q4',
            type: 'fill',
            question: '用简便方法计算：1.8+2.7+0.2=___。',
            answer: '4.7',
            hint: '1.8+0.2=2，再2+2.7',
            explanation: '简便方法：1.8+0.2=2，2+2.7=4.7。凑整先算1.8+0.2。'
          },
          {
            id: 'm4u7l5q5',
            type: 'choice',
            question: '小华买书花了15.6元，买笔花了4.5元，付了25元，还剩多少元？',
            options: ['5.9元', '4.9元', '5.4元', '20.5元'],
            answer: '4.9元',
            hint: '先算总价15.6+4.5，再用25减总价',
            explanation: '先算总价：15.6+4.5=20.1元，再算剩余：25-20.1=4.9元。'
          },
          {
            id: 'm4u7l5q6',
            type: 'fill',
            question: '12-(3.8+4.2)=___。',
            answer: '4',
            acceptableAnswers: ['4', '4.0'],
            hint: '先算括号里3.8+4.2=8，再12-8',
            explanation: '12-(3.8+4.2)：先算括号3.8+4.2=8，再算12-8=4。'
          },
          {
            id: 'm4u7l5q7',
            type: 'fill',
            question: '小数加减法竖式计算时，要先把___对齐。',
            answer: '小数点',
            hint: '[小数加减法]（数学-小数加减法-第1课）',
            explanation: '小数加减法竖式计算时，首先要让小数点对齐，这样相同数位就自然对齐了。这是小数加减法最重要的规则。'
          }
        ]
      }
    ]
  },

  // ==================== 第八单元：条形统计图 ====================
  {
    id: 'm4u8',
    title: '条形统计图',
    subtitle: '数据说话，图表显真知',
    order: 8,
    lessons: [
      {
        id: 'm4u8l1',
        title: '条形统计图的认识',
        order: 1,
        teachingMethod: 'CPA·C→P：数据→图表',
        content: [
          { type: 'text', content: '条形统计图是用直条的长短来表示数量多少的统计图。它能让我们一眼看出谁多谁少！', animationType: 'reveal' },
          { type: 'example', content: '统计一周天气：晴3天，雨2天，阴2天。用条形统计图画出来，晴天直条最高，雨天和阴天一样高。', label: '条形统计图', animationType: 'bounce' },
          { type: 'formula', content: '条形统计图三要素：①标题 ②横轴（项目）③纵轴（数量，带刻度）。直条越高，数量越多。', label: '统计图要素', animationType: 'typewriter' },
          { type: 'tip', content: '画条形统计图的步骤：①画横轴和纵轴 ②标注项目名称和刻度 ③画直条 ④写标题。直条宽度要一样！', label: '画图步骤', animationType: 'pulse' },
          { type: 'animation', content: '条形统计图逐步构建：画轴→标注→画条→完成', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '条形统计图的构建',
              timelineConfig: {
                steps: [
                  { text: '第1步：画横轴（天气）和纵轴（天数）', emoji: '📐', ttsNarration: '先画坐标轴', duration: 1 },
                  { text: '第2步：标注刻度（0,1,2,3,4天）', emoji: '📏', ttsNarration: '标注刻度', duration: 1 },
                  { text: '第3步：画直条（晴3格、雨2格、阴2格）', emoji: '📊', ttsNarration: '根据数据画直条', duration: 1 },
                  { text: '第4步：写标题"一周天气统计图"', emoji: '✏️', ttsNarration: '写上标题', duration: 1 },
                ]
              },
              ttsNarration: '条形统计图四步画：一画轴，二标刻度，三画直条，四写标题！',
            }
          },
          { type: 'text', content: '条形统计图的优点：能直观地看出数量的多少，便于比较。直条越高表示数量越多。', animationType: 'reveal' },
          { type: 'tip', content: '注意：纵轴的刻度要均匀，直条宽度要相同，直条之间的间隔也要相同！', label: '画图注意', animationType: 'pulse' },
        ],
        iDo: '家长示范画条形统计图：画轴、标刻度、画直条、写标题，用一周天气数据示范。',
        weDo: '亲子一起画统计图，用家庭数据（如各人年龄）制作条形统计图。',
        youDo: '孩子独立画条形统计图，根据数据画出正确的直条。',
        parentTips: '条形统计图用直条长短表示数量。强调画图四步：轴、刻度、条、标题。',
        funElement: '笑话：直条说——我越高说明数量越多！歇后语：一目了然——看一眼就明白。小游戏：数据画图小达人！',
        gsapAnimations: [
          '[GSAP:timeline|条形统计图逐步构建：画轴→标注→画条→完成|1.5s|点击播放|power2.inOut]',
          '[GSAP:sceneBuild|条形统计图直条从下往上生长|1s|画条时|power2.out]'
        ],
        images: [
          '[IMG:illustration|条形统计图示例|500x300|教学风|png|天气统计图]',
          '[IMG:illustration|画图步骤图|400x200|教学风|png|四步画图]'
        ],
        practiceQuestions: [
          {
            id: 'm4u8l1q1',
            type: 'choice',
            question: '条形统计图是用什么来表示数量多少的？',
            options: ['圆的大小', '直条的长短', '颜色的深浅', '数字的大小'],
            answer: '直条的长短',
            hint: '条形统计图的"条"是什么形状？',
            explanation: '条形统计图用直条的长短来表示数量的多少，直条越长表示数量越多。'
          },
          {
            id: 'm4u8l1q2',
            type: 'fill',
            question: '条形统计图的纵轴表示___，横轴表示项目。',
            answer: '数量',
            hint: '纵轴上的刻度表示什么？',
            explanation: '条形统计图的纵轴表示数量（带刻度），横轴表示统计的项目名称。'
          },
          {
            id: 'm4u8l1q3',
            type: 'choice',
            question: '画条形统计图的第一步是什么？',
            options: ['画直条', '画横轴和纵轴', '写标题', '标注刻度'],
            answer: '画横轴和纵轴',
            hint: '先画什么才能画条？',
            explanation: '画条形统计图的第一步是画横轴和纵轴，然后才能标注刻度和画直条。'
          },
          {
            id: 'm4u8l1q4',
            type: 'fill',
            question: '条形统计图中，直条越___表示数量越多。',
            answer: '长',
            hint: '直条的长度和数量的关系',
            explanation: '条形统计图中，直条越长表示数量越多，直条越短表示数量越少。'
          },
          {
            id: 'm4u8l1q5',
            type: 'choice',
            question: '下面关于条形统计图的说法，正确的是？',
            options: ['直条宽度可以不同', '纵轴刻度不需要均匀', '直条越长表示数量越多', '不需要写标题'],
            answer: '直条越长表示数量越多',
            hint: '【期末真题】回忆条形统计图的特点',
            explanation: '条形统计图中直条越长表示数量越多。其他选项都不对：直条宽度要相同，刻度要均匀，需要写标题。'
          },
          {
            id: 'm4u8l1q6',
            type: 'fill',
            question: '在一周天气统计图中，晴天3天，雨天2天，晴天比雨天多___天。',
            answer: '1',
            hint: '3-2=？',
            explanation: '晴天3天减去雨天2天，晴天比雨天多3-2=1天。'
          },
          {
            id: 'm4u8l1q7',
            type: 'fill',
            question: '条形统计图必须包含___，让人知道图表示什么内容。',
            answer: '标题',
            hint: '[条形统计图的认识]（数学-条形统计图-第1课）',
            explanation: '条形统计图必须包含标题，标明统计的内容和目的，让人一目了然地知道图表表示什么。'
          }
        ]
      },
      {
        id: 'm4u8l2',
        title: '条形统计图的数据分析',
        order: 2,
        teachingMethod: '探究式：分析数据',
        content: [
          { type: 'text', content: '会画统计图还不够，还要会分析数据！从条形统计图中可以读出很多信息。', animationType: 'reveal' },
          { type: 'example', content: '四（1）班最喜欢的运动统计图：足球12人，篮球8人，乒乓球10人，羽毛球6人。最多的是足球，最少的是羽毛球。', label: '数据分析', animationType: 'bounce' },
          { type: 'formula', content: '数据分析要点：①最多的是哪个 ②最少的是哪个 ③相差多少 ④一共多少 ⑤平均每个多少', label: '分析要点', animationType: 'typewriter' },
          { type: 'tip', content: '读图技巧：先看标题了解统计什么，再看横轴纵轴了解项目和数量，最后比较直条长短分析数据。', label: '读图技巧', animationType: 'pulse' },
          { type: 'animation', content: '条形统计图数据高亮分析：最多→最少→相差→总计', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '数据分析步骤',
              timelineConfig: {
                steps: [
                  { text: '最多：足球12人', emoji: '🏆', ttsNarration: '足球最多12人', duration: 1 },
                  { text: '最少：羽毛球6人', emoji: '📍', ttsNarration: '羽毛球最少6人', duration: 1 },
                  { text: '相差：12-6=6人', emoji: '📊', ttsNarration: '相差6人', duration: 1 },
                  { text: '总计：12+8+10+6=36人', emoji: '📈', ttsNarration: '一共36人', duration: 1 },
                ]
              },
              ttsNarration: '从统计图可以看出，足球最多12人，羽毛球最少6人，相差6人，总共36人！',
            }
          },
          { type: 'text', content: '平均数：把所有数据加起来除以份数。如12+8+10+6=36，36÷4=9，平均每项9人。', animationType: 'reveal' },
          { type: 'tip', content: '分析时要准确读数，直条顶端对应的刻度就是该项目的数量。', label: '读数提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范分析条形统计图：找出最多最少，算相差和总计，引导孩子发现信息。',
        weDo: '亲子一起分析统计图，互相提问回答，发现数据中的信息。',
        youDo: '孩子独立分析条形统计图，回答相关问题。',
        parentTips: '从统计图中找最多最少、算相差和总计。引导孩子主动发现数据信息。',
        funElement: '笑话：统计图说——看我最高的地方就知道谁最受欢迎！歇后语：心中有数——了如指掌。小游戏：数据侦探大挑战！',
        gsapAnimations: [
          '[GSAP:timeline|数据高亮分析：最多→最少→相差→总计|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|最高和最低直条高亮|0.5s|分析时|power2.out]'
        ],
        images: [
          '[IMG:illustration|运动喜好统计图|500x300|教学风|png|4项运动数据]',
          '[IMG:illustration|数据分析步骤图|400x200|教学风|png|分析要点]'
        ],
        practiceQuestions: [
          {
            id: 'm4u8l2q1',
            type: 'choice',
            question: '四（1）班最喜欢的运动：足球12人，篮球8人，乒乓球10人，羽毛球6人。最受欢迎的是？',
            options: ['足球', '篮球', '乒乓球', '羽毛球'],
            answer: '足球',
            hint: '哪个直条最高？',
            explanation: '足球12人最多，直条最高，所以足球最受欢迎。'
          },
          {
            id: 'm4u8l2q2',
            type: 'fill',
            question: '足球12人，羽毛球6人，足球比羽毛球多___人。',
            answer: '6',
            hint: '12-6=？',
            explanation: '足球12人比羽毛球6人多12-6=6人。'
          },
          {
            id: 'm4u8l2q3',
            type: 'choice',
            question: '足球12人，篮球8人，乒乓球10人，羽毛球6人。四（1）班一共有多少人参加调查？',
            options: ['30人', '36人', '34人', '32人'],
            answer: '36人',
            hint: '把四个数加起来',
            explanation: '12+8+10+6=36人，四（1）班一共有36人参加调查。'
          },
          {
            id: 'm4u8l2q4',
            type: 'fill',
            question: '足球12人，篮球8人，乒乓球10人，羽毛球6人。平均每项运动有___人。',
            answer: '9',
            hint: '总人数÷项数=平均数',
            explanation: '总人数36÷4项=9人。平均每项运动有9人。'
          },
          {
            id: 'm4u8l2q5',
            type: 'choice',
            question: '从条形统计图中不能直接看出什么？',
            options: ['哪个最多', '哪个最少', '各项的具体数量', '变化趋势'],
            answer: '变化趋势',
            hint: '条形统计图能看什么？不能看什么？',
            explanation: '条形统计图可以看哪个最多、哪个最少、各项具体数量，但不能直接看出变化趋势（那是折线统计图的功能）。'
          },
          {
            id: 'm4u8l2q6',
            type: 'fill',
            question: '从统计图看出篮球8人，乒乓球10人，乒乓球比篮球多___人。',
            answer: '2',
            hint: '10-8=？',
            explanation: '乒乓球10人比篮球8人多10-8=2人。'
          },
          {
            id: 'm4u8l2q7',
            type: 'fill',
            question: '分析条形统计图时，最少的那个项目对应的是最___的直条（填"高"或"矮"）。',
            answer: '矮',
            hint: '[条形统计图数据分析]（数学-条形统计图-第2课）',
            explanation: '条形统计图中，数量最少的项目对应的直条最矮，数量最多的项目对应的直条最高。'
          }
        ]
      },
      {
        id: 'm4u8l3',
        title: '数学广角——优化问题',
        order: 3,
        teachingMethod: '探究式：优化策略',
        content: [
          { type: 'text', content: '生活中有很多事情可以同时做，合理安排时间就是优化！数学广角教我们如何用最少的时间完成任务。', animationType: 'reveal' },
          { type: 'example', content: '煮鸡蛋10分钟 + 烧开水5分钟。如果同时做：烧开水的同时煮鸡蛋，只需10分钟（而不是10+5=15分钟）。', label: '优化例子', animationType: 'bounce' },
          { type: 'formula', content: '优化原则：能同时做的事情同时做，不要一件一件排队做，这样最省时间。', label: '优化原则', animationType: 'typewriter' },
          { type: 'tip', content: '解题方法：①列出所有任务和时间 ②找出能同时做的 ③算出最短总时间', label: '解题方法', animationType: 'pulse' },
          { type: 'animation', content: '优化过程动画：排队做vs同时做对比', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '时间优化对比',
              timelineConfig: {
                steps: [
                  { text: '排队做：煮蛋10分+烧水5分=15分', emoji: '⏰', ttsNarration: '排队做要15分钟', duration: 1.5 },
                  { text: '优化：烧水5分同时煮蛋（煮蛋10分）', emoji: '🔄', ttsNarration: '同时做只需10分钟', duration: 1.5 },
                  { text: '节省了5分钟！', emoji: '✅', ttsNarration: '节省了5分钟', duration: 1 },
                ]
              },
              ttsNarration: '烧水的同时煮蛋，只需10分钟，比排队做节省5分钟！',
            }
          },
          { type: 'text', content: '经典问题：沏茶需要烧水8分钟、洗茶杯2分钟、放茶叶1分钟、沏茶1分钟。洗杯和放茶叶可以在烧水时同时做，总时间=8+1=9分钟。', animationType: 'reveal' },
          { type: 'tip', content: '关键思路：找出最耗时的任务作为主线，其他短任务在等待时同时完成。', label: '优化思路', animationType: 'pulse' },
        ],
        iDo: '家长示范优化问题：列出任务，找出能同时做的，算最短时间。用沏茶问题示范。',
        weDo: '亲子一起解决优化问题，模拟家务安排，找最优方案。',
        youDo: '孩子独立解决优化问题，合理安排任务顺序。',
        parentTips: '能同时做的就同时做，不要排队。找最长任务做主线，其他任务穿插完成。',
        funElement: '笑话：时间说——合理安排我就能省出来！歇后语：一心二用——效率高。小游戏：家务优化大挑战！',
        gsapAnimations: [
          '[GSAP:timeline|优化过程：排队做vs同时做对比|1.5s|点击播放|power2.inOut]',
          '[GSAP:compare|两种方案时间对比|0.8s|对比时|power2.out]'
        ],
        images: [
          '[IMG:illustration|优化问题示意图|500x300|教学风|png|同时做vs排队]',
          '[IMG:illustration|沏茶优化流程图|400x200|教学风|png|沏茶步骤]'
        ],
        practiceQuestions: [
          {
            id: 'm4u8l3q1',
            type: 'choice',
            question: '煮鸡蛋10分钟，烧开水5分钟。同时做需要多少分钟？',
            options: ['5分钟', '10分钟', '15分钟', '7分钟'],
            answer: '10分钟',
            hint: '烧水的同时可以煮蛋，取最长的那个时间',
            explanation: '烧水5分钟的同时煮蛋（煮蛋需要10分钟），所以总共需要10分钟（最长的任务时间）。'
          },
          {
            id: 'm4u8l3q2',
            type: 'fill',
            question: '煮鸡蛋10分钟，烧开水5分钟。如果排队做（先做完一件再做另一件），需要___分钟。',
            answer: '15',
            hint: '10+5=？',
            explanation: '排队做需要10+5=15分钟。而同时做只需10分钟，节省5分钟。'
          },
          {
            id: 'm4u8l3q3',
            type: 'choice',
            question: '沏茶：烧水8分钟、洗杯2分钟、放茶叶1分钟、沏茶1分钟。最短需要多少分钟？',
            options: ['9分钟', '12分钟', '8分钟', '10分钟'],
            answer: '9分钟',
            hint: '洗杯和放茶叶可以在烧水时做，最后沏茶1分钟',
            explanation: '烧水8分钟时同时洗杯2分钟和放茶叶1分钟（都在8分钟内完成），然后沏茶1分钟。总共8+1=9分钟。'
          },
          {
            id: 'm4u8l3q4',
            type: 'fill',
            question: '沏茶：烧水8分钟、洗杯2分钟、放茶叶1分钟、沏茶1分钟。如果排队做需要___分钟。',
            answer: '12',
            hint: '8+2+1+1=？',
            explanation: '排队做需要8+2+1+1=12分钟。而优化后只需9分钟，节省3分钟。'
          },
          {
            id: 'm4u8l3q5',
            type: 'choice',
            question: '优化问题的核心原则是什么？',
            options: ['一件一件做最省时', '能同时做的同时做', '先做最短的', '先做最长的'],
            answer: '能同时做的同时做',
            hint: '回忆优化原则',
            explanation: '优化问题的核心原则是：能同时做的事情同时做，不要一件一件排队做，这样最省时间。'
          },
          {
            id: 'm4u8l3q6',
            type: 'fill',
            question: '小明做作业15分钟，听音乐10分钟。如果边做作业边听音乐，需要___分钟。',
            answer: '15',
            hint: '同时做，取最长的',
            explanation: '边做作业边听音乐，同时做，需要15分钟（最长的任务时间）。'
          },
          {
            id: 'm4u8l3q7',
            type: 'fill',
            question: '解决优化问题时，要找出___同时做的事情同时做，这样最省时间。',
            answer: '能',
            hint: '[优化问题]（数学-条形统计图-第3课）',
            explanation: '解决优化问题时，要找出能同时做的事情同时做，不要一件一件排队做，这样最省时间。'
          }
        ]
      },
      {
        id: 'm4u8l4',
        title: '数学广角——排队问题',
        order: 4,
        teachingMethod: '探究式：排队策略',
        content: [
          { type: 'text', content: '排队也有学问！不同顺序排队，等待的总时间不同。怎样安排才能让总等待时间最少呢？', animationType: 'reveal' },
          { type: 'example', content: '三个人打水：甲需要1分钟，乙需要2分钟，丙需要3分钟。如果按甲→乙→丙的顺序，等待总时间=1+(1+2)+(1+2+3)=10分钟。', label: '排队问题', animationType: 'bounce' },
          { type: 'formula', content: '排队策略：让用时最短的先做！这样后面的人等待时间最短，总等待时间最少。', label: '排队策略', animationType: 'typewriter' },
          { type: 'tip', content: '关键思路：时间短的排前面，时间长的排后面。这样总等待时间最少。', label: '解题思路', animationType: 'pulse' },
          { type: 'animation', content: '排队问题对比：短→长 vs 长→短', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '排队问题对比',
              timelineConfig: {
                steps: [
                  { text: '按1→2→3顺序：等待总时间=1+3+6=10分', emoji: '✅', ttsNarration: '短到长排列，总等待10分钟', duration: 1.5 },
                  { text: '按3→2→1顺序：等待总时间=3+5+6=14分', emoji: '❌', ttsNarration: '长到短排列，总等待14分钟', duration: 1.5 },
                  { text: '短到长更省时！节省4分钟', emoji: '🏆', ttsNarration: '短到长排列更省时间', duration: 1 },
                ]
              },
              ttsNarration: '按时间从短到长排队，总等待时间10分钟；从长到短排队要14分钟。短到长更省时！',
            }
          },
          { type: 'text', content: '计算方法：第1个人等待=自己的时间，第2个人等待=第1个+自己的时间，第3个人等待=第1+第2+自己的时间。把所有人的等待时间加起来就是总等待时间。', animationType: 'reveal' },
          { type: 'tip', content: '结论：按时间从短到长排队，总等待时间最少。这就是"短者优先"策略！', label: '排队结论', animationType: 'pulse' },
        ],
        iDo: '家长示范排队问题：三个人打水1分、2分、3分，对比不同顺序的总等待时间。',
        weDo: '亲子一起解决排队问题，模拟排队场景，找最优顺序。',
        youDo: '孩子独立解决排队问题，安排最优顺序。',
        parentTips: '时间短的排前面，总等待时间最少。引导孩子计算不同顺序的等待时间。',
        funElement: '笑话：排队说——短的人先来，大家少等！歇后语：先来后到——按顺序来。小游戏：排队优化小达人！',
        gsapAnimations: [
          '[GSAP:timeline|排队问题对比：短→长 vs 长→短|1.5s|点击播放|power2.inOut]',
          '[GSAP:compare|两种排队方案时间对比|0.8s|对比时|power2.out]'
        ],
        images: [
          '[IMG:illustration|排队问题示意图|500x300|教学风|png|排队对比]',
          '[IMG:illustration|等待时间计算图|400x200|教学风|png|等待计算]'
        ],
        practiceQuestions: [
          {
            id: 'm4u8l4q1',
            type: 'choice',
            question: '三个人打水分别需要1分、2分、3分。怎样排队总等待时间最少？',
            options: ['3→2→1', '1→2→3', '2→1→3', '2→3→1'],
            answer: '1→2→3',
            hint: '谁先排队大家等待最少？',
            explanation: '按时间从短到长排队（1→2→3），总等待时间最少=1+(1+2)+(1+2+3)=1+3+6=10分钟。'
          },
          {
            id: 'm4u8l4q2',
            type: 'fill',
            question: '三个人按1→2→3的顺序打水，总等待时间是___分钟。',
            answer: '10',
            hint: '第1人等1分，第2人等1+2=3分，第3人等1+2+3=6分',
            explanation: '第1人等待1分钟，第2人等待1+2=3分钟，第3人等待1+2+3=6分钟，总等待=1+3+6=10分钟。'
          },
          {
            id: 'm4u8l4q3',
            type: 'choice',
            question: '三个人按3→2→1的顺序打水，总等待时间是多少？',
            options: ['10分钟', '12分钟', '14分钟', '6分钟'],
            answer: '14分钟',
            hint: '第1人等3分，第2人等3+2=5分，第3人等3+2+1=6分',
            explanation: '第1人等待3分钟，第2人等待3+2=5分钟，第3人等待3+2+1=6分钟，总等待=3+5+6=14分钟。'
          },
          {
            id: 'm4u8l4q4',
            type: 'fill',
            question: '排队问题的策略是：让用时最___的人排在最前面（填"短"或"长"）。',
            answer: '短',
            hint: '谁先来大家少等？',
            explanation: '排队问题的策略是"短者优先"：让用时最短的人排在最前面，这样后面的人等待时间最短，总等待时间最少。'
          },
          {
            id: 'm4u8l4q5',
            type: 'choice',
            question: '四个人打水分别需要1分、2分、3分、4分。按从短到长排队，第3个人等待多少分钟？',
            options: ['3分钟', '6分钟', '4分钟', '1分钟'],
            answer: '6分钟',
            hint: '第3人等待=1+2+3',
            explanation: '按1→2→3→4顺序，第3个人等待1+2+3=6分钟。'
          },
          {
            id: 'm4u8l4q6',
            type: 'fill',
            question: '两个人打水分别需要2分和5分。按2→5顺序排队，总等待时间是___分钟。',
            answer: '9',
            hint: '第1人等2分，第2人等2+5=7分',
            explanation: '按2→5顺序：第1人等待2分钟，第2人等待2+5=7分钟，总等待=2+7=9分钟。如果按5→2顺序：5+7=12分钟，所以2→5更好。'
          },
          {
            id: 'm4u8l4q7',
            type: 'fill',
            question: '排队等候问题中，要使总等待时间最少，应该让用时最___的人先排队。',
            answer: '短',
            hint: '[排队问题]（数学-条形统计图-第4课）',
            explanation: '排队等候问题中，要使总等待时间最少，应该让用时最短的人先排队，这就是"短者优先"策略。'
          }
        ]
      },
      {
        id: 'm4u8l5',
        title: '统计与广角综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '这单元我们学了条形统计图的认识、数据分析、优化问题和排队问题。来检测一下吧！', animationType: 'reveal' },
          { type: 'formula', content: '知识要点：①条形统计图（画图+读图） ②数据分析（最多最少+总计+平均） ③优化问题（同时做省时间） ④排队问题（短者优先）', label: '知识总结', animationType: 'typewriter' },
          { type: 'example', content: '综合例题：统计全班视力情况，画条形统计图，分析正常和近视人数，合理安排检查顺序。', label: '综合例题', animationType: 'bounce' },
          { type: 'tip', content: '检测要点：画图+分析+优化+排队，正确率≥80%！', label: '检测提示', animationType: 'pulse' },
          { type: 'animation', content: '统计达人通关动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '统计达人通关',
              sceneBuildConfig: {
                sceneName: '通关庆祝',
                elements: [
                  { text: '📊', x: 50, y: 40, size: 'xl', animation: 'scaleIn', delay: 0, ttsText: '恭喜你成为统计达人' },
                  { text: '统计达人', x: 50, y: 65, animation: 'bounceIn', delay: 0.3, color: '#FFD700', ttsText: '统计达人徽章' },
                ]
              },
              ttsNarration: '恭喜你完成条形统计图单元，你是统计达人！四年级数学全部完成！',
            }
          },
          { type: 'tip', content: '目标：统计+优化+排队综合检测，正确率达到80%以上就能获得统计达人徽章，完成四年级全部数学课程！', label: '通关目标', animationType: 'pulse' },
        ],
        iDo: '家长示范综合题：画统计图、分析数据、优化时间安排、排队策略。',
        weDo: '亲子一起综合练习，互相出题检查，查漏补缺。',
        youDo: '孩子独立完成综合测试，争取正确率80%以上。',
        parentTips: '统计+优化+排队综合检测，正确率≥80%为通过。鼓励孩子完成四年级全部课程！',
        funElement: '歇后语：满载而归——收获满满。笑话：统计图说——画完我你就是四年级数学全通了！小游戏：统计知识综合大PK！',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|3s|正确率≥80%|power1.out|particleCount:50]',
          '[GSAP:starFlyIn|统计达人徽章飞入+四年级通关|1s|检测通过|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|统计达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|四年级通关证书|500x300|可爱卡通风|png|通关证书]'
        ],
        practiceQuestions: [
          {
            id: 'm4u8l5q1',
            type: 'choice',
            question: '条形统计图最大的优点是什么？',
            options: ['能看出变化趋势', '能直观看出数量多少', '能算平均数', '能预测未来'],
            answer: '能直观看出数量多少',
            hint: '回忆条形统计图的特点',
            explanation: '条形统计图最大的优点是能直观地看出数量的多少，便于比较。直条越长数量越多。'
          },
          {
            id: 'm4u8l5q2',
            type: 'fill',
            question: '四人打水分别需要1分、2分、3分、4分。按从短到长排队，总等待时间是___分钟。',
            answer: '20',
            hint: '1+(1+2)+(1+2+3)+(1+2+3+4)=？',
            explanation: '按1→2→3→4顺序：第1人等1分，第2人等3分，第3人等6分，第4人等10分。总等待=1+3+6+10=20分钟。'
          },
          {
            id: 'm4u8l5q3',
            type: 'choice',
            question: '做饭：煮饭20分钟、切菜5分钟、炒菜8分钟。最短需要多少分钟？',
            options: ['20分钟', '33分钟', '28分钟', '13分钟'],
            answer: '28分钟',
            hint: '切菜和炒菜可以在煮饭时做',
            explanation: '煮饭20分钟时同时切菜5分钟和炒菜8分钟（都在20分钟内完成），所以总时间=20+8=28分钟。切菜5分钟可以在煮饭前8分钟内完成。'
          },
          {
            id: 'm4u8l5q4',
            type: 'fill',
            question: '条形统计图中，5个项目分别有10、15、8、12、20人，最多和最少相差___人。',
            answer: '12',
            hint: '最多20，最少8，20-8=？',
            explanation: '最多20人，最少8人，相差20-8=12人。'
          },
          {
            id: 'm4u8l5q5',
            type: 'choice',
            question: '关于排队问题，下面说法正确的是？',
            options: ['让用时最长的人先排队', '让用时最短的人先排队', '排队顺序不影响总时间', '同时做最省时间'],
            answer: '让用时最短的人先排队',
            hint: '回忆排队策略',
            explanation: '排队问题中，让用时最短的人先排队，总等待时间最少。这是"短者优先"策略。'
          },
          {
            id: 'm4u8l5q6',
            type: 'fill',
            question: '条形统计图的5个项目分别有10、15、8、12、20人，总共有___人。',
            answer: '65',
            hint: '10+15+8+12+20=？',
            explanation: '10+15+8+12+20=65人，总共有65人。'
          },
          {
            id: 'm4u8l5q7',
            type: 'fill',
            question: '条形统计图是用___的长短来表示数量多少的统计图。',
            answer: '直条',
            hint: '[条形统计图]（数学-条形统计图-第1课）',
            explanation: '条形统计图是用直条的长短来表示数量多少的统计图。直条越长表示数量越多，直条越短表示数量越少。'
          }
        ]
      }
    ]
  }
]
