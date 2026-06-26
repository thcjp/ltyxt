import type { Unit } from '@/types'

export const mathGrade5: Unit[] = [
  {
    id: 'm5u1',
    title: '小数乘法',
    subtitle: '从整数乘法到小数乘法，掌握转化与估算的智慧',
    order: 1,
    lessons: [
      {
        id: 'm5u1l1',
        title: '小数乘整数——转化思想',
        order: 1,
        teachingMethod: 'CPA·C→P→A，转化思想：小数乘整数转化为整数乘法',
        iDo: '家长用0.8×3=0.8+0.8+0.8=2.4示范，讲解小数乘整数就是求几个相同加数的和。',
        weDo: '亲子一起做1.5×4，先把1.5×4当作15×4=60，再点一位小数得6.0。',
        youDo: '孩子独立完成0.7×5、2.3×3等小数乘整数题目。',
        parentTips: '小数乘整数=先按整数乘法算，再看因数有几位小数，积就点几位小数。',
        funElement: '小游戏：小数变形金刚——把小数变成整数再变回来！歇后语：小葱拌豆腐——一清二白',
        gsapAnimations: [
          '[GSAP:timeline|0.8×3转化为0.8+0.8+0.8的加法过程|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|小数点定位高亮|0.8s|计算完成|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|小数乘整数转化图：0.8×3变成0.8+0.8+0.8|500x200|教学风|png|转化过程]',
          '[IMG:illustration|小数乘整数竖式图|400x300|教学风|png|竖式标注]'
        ],
        content: [
          { type: 'text', content: '小数乘整数是什么意思呢？其实就像整数乘法一样，0.8×3就是求3个0.8的和，也就是0.8+0.8+0.8=2.4。' },
          { type: 'example', content: '0.8×3：先算8×3=24，因数0.8有一位小数，所以积24从右往左点一位小数，得2.4。', label: '例题' },
          { type: 'tip', content: '转化口诀：先按整数乘，再数小数位，积的小数位=因数的小数位。', label: '转化口诀' },
          { type: 'example', content: '2.5×4：先算25×4=100，因数2.5有一位小数，积从右往左点一位，得10.0=10。', label: '例题' },
          { type: 'tip', content: '注意：积的末尾有0时，先点小数点，再去掉末尾的0，化简结果。', label: '易错提醒' },
          { type: 'animation', content: '0.8×3转化为0.8+0.8+0.8=2.4的转化过程动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '小数乘整数的转化',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '0.8×3表示3个0.8相加', ttsNarration: '0.8乘3表示3个0.8相加' },
                  { id: 's2', description: '转化为0.8+0.8+0.8', ttsNarration: '转化为0.8加0.8加0.8' },
                  { id: 's3', description: '8×3=24，点一位小数得2.4', ttsNarration: '先算8乘3等于24，再点一位小数得2.4' },
                ]
              },
              ttsNarration: '小数乘整数，先按整数乘法算，再点小数点。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u1l1q1',
            type: 'choice',
            question: '0.8×3等于多少？',
            options: ['2.4', '0.24', '24', '0.8'],
            answer: '2.4',
            hint: '0.8×3就是3个0.8相加',
            explanation: '0.8×3=0.8+0.8+0.8=2.4，或者先算8×3=24，因数0.8有一位小数，积点一位小数得2.4。'
          },
          {
            id: 'm5u1l1q2',
            type: 'fill',
            question: '1.5×4=___',
            answer: '6',
            hint: '先算15×4=60，再点一位小数',
            explanation: '先算15×4=60，因数1.5有一位小数，积从右往左点一位小数，得6.0=6。'
          },
          {
            id: 'm5u1l1q3',
            type: 'choice',
            question: '下面算式中，积是一位小数的是？',
            options: ['0.3×4', '0.12×3', '1.25×2', '0.05×6'],
            answer: '0.3×4',
            hint: '看因数有几位小数',
            explanation: '0.3×4的因数0.3有一位小数，所以积是一位小数（1.2）。0.12×3积是两位小数，1.25×2积是两位小数，0.05×6积是两位小数。'
          },
          {
            id: 'm5u1l1q4',
            type: 'fill',
            question: '0.25×8=___',
            answer: '2',
            hint: '先算25×8=200，再点两位小数',
            explanation: '先算25×8=200，因数0.25有两位小数，积从右往左点两位小数，得2.00=2。'
          },
          {
            id: 'm5u1l1q5',
            type: 'choice',
            question: '一个长方形长0.6米，宽5米，面积是多少平方米？',
            options: ['3平方米', '0.3平方米', '30平方米', '0.03平方米'],
            answer: '3平方米',
            hint: '面积=长×宽=0.6×5',
            explanation: '面积=0.6×5，先算6×5=30，因数0.6有一位小数，积点一位小数得3.0=3平方米。'
          },
          {
            id: 'm5u1l1q6',
            type: 'fill',
            question: '一根绳子每段长0.7米，剪了12段，一共长___米',
            answer: '8.4',
            hint: '0.7×12，先算7×12=84',
            explanation: '0.7×12，先算7×12=84，因数0.7有一位小数，积点一位小数得8.4米。'
          },
          {
            id: 'm5u1l1q7',
            type: 'fill',
            question: '整数乘法中，25×4=100，那么2.5×4=___',
            answer: '10',
            hint: '[整数乘法]（数学五年级-第1单元-第1课）',
            explanation: '25×4=100，2.5比25小数点左移一位，所以积也左移一位，2.5×4=10。'
          }
        ]
      },
      {
        id: 'm5u1l2',
        title: '小数乘小数——积的小数位数',
        order: 2,
        teachingMethod: '支架式，探究因数小数位数与积的小数位数关系',
        iDo: '家长示范2.5×0.4，先算25×4=100，两个因数共两位小数，积点两位小数得1.00=1。',
        weDo: '亲子一起做1.2×0.3，先算12×3=36，共两位小数，积得0.36。',
        youDo: '孩子独立完成0.4×0.5、1.5×0.6等小数乘小数题目。',
        parentTips: '因数共有几位小数，积就点几位小数。位数不够时用0补足。',
        funElement: '小游戏：小数点跳跳棋——数小数位数，小数点跳到正确位置！歇后语：种瓜得瓜——一分耕耘一分收获',
        gsapAnimations: [
          '[GSAP:verticalCalc|2.5×0.4竖式计算（小数位标注）|2s|点击播放|power2.out]',
          '[GSAP:highlight|因数小数位数高亮|0.6s|页面加载|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|小数乘小数竖式图：2.5×0.4|400x300|教学风|png|小数位标注]',
          '[IMG:illustration|因数小数位数与积小数位数关系图|500x200|教学风|png|位数关系]'
        ],
        content: [
          { type: 'text', content: '小数乘小数怎么算呢？秘诀是：先按整数乘法算出积，再看两个因数一共有几位小数，就从积的右边起数出几位，点上小数点。' },
          { type: 'example', content: '2.5×0.4：先算25×4=100，2.5有一位小数，0.4有一位小数，共两位小数，积从右往左点两位，得1.00=1。', label: '例题' },
          { type: 'tip', content: '位数不够用0补足：0.03×0.2，先算3×2=6，共四位小数，但6只有一位，前面补0得0.006。', label: '易错提醒' },
          { type: 'example', content: '1.2×0.3=0.36，先算12×3=36，共两位小数，积得0.36。', label: '例题' },
          { type: 'tip', content: '积的末尾有0时，先点小数点再去掉末尾的0。如0.25×0.4=0.100=0.1。', label: '化简规则' },
          { type: 'animation', content: '2.5×0.4竖式计算过程，标注小数位数', animationType: 'verticalCalc',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '小数乘小数竖式：2.5×0.4',
              verticalCalcConfig: {
                num1: 25,
                num2: 4,
                operator: '×',
                result: 100,
                steps: [
                  { text: '先按整数算：25×4=100', highlight: 'ones' },
                  { text: '2.5有一位小数，0.4有一位小数，共两位', highlight: 'tens' },
                  { text: '积从右往左点两位小数：1.00=1', },
                ]
              },
              ttsNarration: '2.5乘0.4，先按整数算25乘4等于100，两个因数共两位小数，积点两位小数得1。',
            }
          },
          { type: 'text', content: '小数乘小数与整数乘法的区别在于最后要数小数位数定点，计算过程完全一样。' },
        ],
        practiceQuestions: [
          {
            id: 'm5u1l2q1',
            type: 'choice',
            question: '0.4×0.5等于多少？',
            options: ['0.2', '0.02', '2', '0.2'],
            answer: '0.2',
            hint: '先算4×5=20，共两位小数',
            explanation: '先算4×5=20，两个因数共两位小数，积点两位小数得0.20=0.2。'
          },
          {
            id: 'm5u1l2q2',
            type: 'fill',
            question: '1.5×0.6=___',
            answer: '0.9',
            hint: '先算15×6=90，共两位小数',
            explanation: '先算15×6=90，两个因数共两位小数，积点两位小数得0.90=0.9。'
          },
          {
            id: 'm5u1l2q3',
            type: 'choice',
            question: '下面算式中，积是三位小数的是？',
            options: ['0.1×0.2', '1.2×0.03', '0.5×0.6', '2×0.3'],
            answer: '1.2×0.03',
            hint: '数两个因数共有几位小数',
            explanation: '1.2×0.03：1.2一位小数+0.03两位小数=三位小数。0.1×0.2是两位，0.5×0.6是两位，2×0.3是一位。'
          },
          {
            id: 'm5u1l2q4',
            type: 'fill',
            question: '0.03×0.2=___',
            answer: '0.006',
            hint: '先算3×2=6，共四位小数，位数不够补0',
            explanation: '先算3×2=6，两个因数共四位小数，6只有一位，前面补三个0得0.006。'
          },
          {
            id: 'm5u1l2q5',
            type: 'choice',
            question: '0.25×0.4的积化简后是多少？',
            options: ['0.1', '0.01', '1', '0.100'],
            answer: '0.1',
            hint: '先算25×4=100，共四位小数',
            explanation: '25×4=100，两个因数共四位小数，积点四位小数得0.0100，化简后为0.1。'
          },
          {
            id: 'm5u1l2q6',
            type: 'fill',
            question: '一个长方形长0.8米，宽0.5米，面积是___平方米',
            answer: '0.4',
            hint: '面积=0.8×0.5',
            explanation: '面积=0.8×0.5，先算8×5=40，共两位小数，积得0.40=0.4平方米。'
          },
          {
            id: 'm5u1l2q7',
            type: 'choice',
            question: '小数乘整数0.3×5和整数乘法3×5相比，积的小数点位置有什么关系？',
            options: ['0.3×5的积是3×5的积的十分之一', '积相同', '0.3×5的积是3×5的十倍', '无法比较'],
            answer: '0.3×5的积是3×5的积的十分之一',
            hint: '[小数乘整数]（数学五年级-第1单元-第1课）',
            explanation: '0.3×5=1.5，3×5=15，1.5是15的十分之一，因为0.3是3的十分之一，所以积也是十分之一。'
          }
        ]
      },
      {
        id: 'm5u1l3',
        title: '小数乘法的简便运算',
        order: 3,
        teachingMethod: 'Mental Math，迁移整数简便运算定律到小数',
        iDo: '家长示范0.25×4.2×4=0.25×4×4.2=1×4.2=4.2，运用乘法交换律和结合律。',
        weDo: '亲子一起做0.8×1.25=1，运用乘法结合律凑整。',
        youDo: '孩子独立运用简便运算定律计算小数乘法。',
        parentTips: '整数乘法的交换律、结合律、分配律同样适用于小数乘法。关键找凑整组合。',
        funElement: '小游戏：简便运算连连看——找凑整的好朋友！歇后语：三个臭皮匠——顶个诸葛亮',
        gsapAnimations: [
          '[GSAP:timeline|简便运算步骤展开：交换→结合→凑整|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|凑整组合高亮|0.5s|步骤完成|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|三大运算定律图：交换律/结合律/分配律|500x300|教学风|png|三大定律]',
          '[IMG:illustration|简便运算凑整示意图|400x300|教学风|png|凑整组合]'
        ],
        content: [
          { type: 'text', content: '整数乘法的运算定律在小数乘法中同样适用！运用交换律、结合律和分配律，可以让计算更简便。' },
          { type: 'example', content: '0.25×4.2×4=（0.25×4）×4.2=1×4.2=4.2，运用乘法交换律和结合律。', label: '交换律+结合律' },
          { type: 'tip', content: '常见凑整组合：0.25×4=1，1.25×8=10，0.5×2=1，记住这些好帮手！', label: '凑整组合' },
          { type: 'example', content: '1.2×2.5+0.8×2.5=（1.2+0.8）×2.5=2×2.5=5，运用乘法分配律。', label: '分配律' },
          { type: 'tip', content: '简便运算的关键：先观察数字特点，找到能凑整的组合，再运用运算定律。', label: '解题策略' },
          { type: 'animation', content: '0.25×4.2×4运用交换律和结合律的简便运算步骤', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '简便运算：0.25×4.2×4',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '观察：0.25和4能凑整', ttsNarration: '观察发现0.25和4能凑整' },
                  { id: 's2', description: '交换4.2和4的位置：0.25×4×4.2', ttsNarration: '交换4.2和4的位置' },
                  { id: 's3', description: '结合：0.25×4=1', ttsNarration: '0.25乘4等于1' },
                  { id: 's4', description: '1×4.2=4.2', ttsNarration: '1乘4.2等于4.2' },
                ]
              },
              ttsNarration: '运用交换律和结合律，让计算更简便。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u1l3q1',
            type: 'choice',
            question: '0.25×4.2×4用简便方法计算，第一步应该怎么做？',
            options: ['把0.25和4结合', '把4.2和4结合', '直接从左到右算', '把0.25和4.2结合'],
            answer: '把0.25和4结合',
            hint: '哪两个数能凑整？',
            explanation: '0.25×4=1能凑整，所以运用交换律把4.2和4交换，再结合0.25×4=1。'
          },
          {
            id: 'm5u1l3q2',
            type: 'fill',
            question: '0.8×1.25=___',
            answer: '1',
            hint: '0.8×1.25是常见凑整组合',
            explanation: '0.8×1.25=1.00=1，这是常见的凑整组合，要牢记。'
          },
          {
            id: 'm5u1l3q3',
            type: 'choice',
            question: '1.2×2.5+0.8×2.5用简便方法计算，结果是？',
            options: ['5', '50', '0.5', '0.05'],
            answer: '5',
            hint: '运用乘法分配律',
            explanation: '1.2×2.5+0.8×2.5=（1.2+0.8）×2.5=2×2.5=5，运用乘法分配律。'
          },
          {
            id: 'm5u1l3q4',
            type: 'fill',
            question: '4.5×102=4.5×100+4.5×___=___',
            answer: '2',
            hint: '把102拆成100+2，用分配律',
            explanation: '4.5×102=4.5×（100+2）=4.5×100+4.5×2=450+9=459，空格填2。'
          },
          {
            id: 'm5u1l3q5',
            type: 'choice',
            question: '下面哪个算式运用了乘法分配律？',
            options: ['0.25×（4×8）=（0.25×4）×8', '0.25×4.2×4=0.25×4×4.2', '3.6×2.5+6.4×2.5=（3.6+6.4）×2.5', '1.25×8=10'],
            answer: '3.6×2.5+6.4×2.5=（3.6+6.4）×2.5',
            hint: '分配律是a×c+b×c=（a+b）×c',
            explanation: '3.6×2.5+6.4×2.5=（3.6+6.4）×2.5运用了乘法分配律，把相同因数2.5提取出来。'
          },
          {
            id: 'm5u1l3q6',
            type: 'fill',
            question: '2.5×3.2×1.25=（2.5×___）×（___×1.25）=___',
            answer: '4',
            hint: '把3.2拆成4×0.8，分别凑整',
            explanation: '2.5×3.2×1.25=（2.5×4）×（0.8×1.25）=10×1=10。3.2拆成4×0.8，2.5×4=10，0.8×1.25=1。'
          },
          {
            id: 'm5u1l3q7',
            type: 'fill',
            question: '小数乘法简便运算中，1.25×___=10',
            answer: '8',
            hint: '[小数乘小数]（数学五年级-第1单元-第2课）',
            explanation: '1.25×8=10.00=10，这是小数乘法中常见的凑整组合。回顾小数乘小数的计算：先按整数算125×8=1000，共四位小数，得1.000=1。'
          }
        ]
      },
      {
        id: 'm5u1l4',
        title: '小数乘法应用题——购物估算',
        order: 4,
        teachingMethod: '情境式，模拟购物场景学习估算',
        iDo: '家长模拟购物：买3.8元/千克的苹果2.5千克，估算大约花多少钱。3.8≈4，2.5≈3，4×3=12元。',
        weDo: '亲子一起估算：买5.2元的牛奶4盒，5.2≈5，5×4=20元。',
        youDo: '孩子独立解决购物估算问题。',
        parentTips: '估算时把小数看作最接近的整数，方便快速判断钱够不够。',
        funElement: '小游戏：超市小当家——估算购物总价！歇后语：心中有数——不慌不忙',
        gsapAnimations: [
          '[GSAP:sceneBuild|购物场景+商品+估算过程|1.5s|点击播放|power2.out]',
          '[GSAP:stagger|商品价格逐一出现|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|超市购物场景图|500x300|可爱卡通风|png|商品+估算]',
          '[IMG:illustration|购物估算过程图|400x300|教学风|png|估算步骤]'
        ],
        content: [
          { type: 'text', content: '去超市买东西时，我们经常需要快速估算要花多少钱。把小数看作接近的整数，就能快速估算啦！' },
          { type: 'example', content: '苹果3.8元/千克，买2.5千克：3.8≈4，2.5≈3，4×3=12元，大约12元。', label: '估算示例' },
          { type: 'tip', content: '估算方法：四舍五入把小数看成最接近的整数，再相乘。', label: '估算口诀' },
          { type: 'example', content: '妈妈带了50元，买5.2元/盒的牛奶8盒够吗？5.2≈5，5×8=40元<50元，够了。', label: '够不够问题' },
          { type: 'tip', content: '估算时，如果是看够不够，可以把价格估大一点更保险。', label: '估算技巧' },
          { type: 'animation', content: '超市购物场景，商品逐一出现，估算过程展示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '购物估算',
              sceneBuildConfig: {
                sceneName: '超市购物',
                elements: [
                  { id: 'e1', emoji: '🍎', text: '苹果3.8元/千克', x: 20, y: 30, size: 'md', animation: 'popIn' },
                  { id: 'e2', emoji: '🥛', text: '牛奶5.2元/盒', x: 50, y: 30, size: 'md', animation: 'popIn' },
                  { id: 'e3', emoji: '🍞', text: '面包4.5元/个', x: 80, y: 30, size: 'md', animation: 'popIn' },
                  { id: 'e4', text: '估算：3.8≈4', x: 50, y: 70, size: 'lg', color: '#e74c3c', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '购物时把价格估算成整数，方便快速计算。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u1l4q1',
            type: 'choice',
            question: '苹果3.8元/千克，买2千克大约多少钱？',
            options: ['约8元', '约6元', '约10元', '约4元'],
            answer: '约8元',
            hint: '3.8≈4，4×2=8',
            explanation: '3.8≈4，4×2=8，大约8元。'
          },
          {
            id: 'm5u1l4q2',
            type: 'fill',
            question: '牛奶5.2元/盒，买4盒，估算大约___元',
            answer: '20',
            hint: '5.2≈5，5×4=20',
            explanation: '5.2≈5，5×4=20，大约20元。'
          },
          {
            id: 'm5u1l4q3',
            type: 'choice',
            question: '妈妈带30元，买4.8元/千克的香蕉5千克，钱够吗？（用估算判断）',
            options: ['够，约25元', '不够，约35元', '刚好30元', '无法判断'],
            answer: '够，约25元',
            hint: '4.8≈5，5×5=25',
            explanation: '4.8≈5，5×5=25元<30元，钱够了。实际4.8×5=24元，估算合理。'
          },
          {
            id: 'm5u1l4q4',
            type: 'fill',
            question: '一袋大米15.6元，买3袋，估算大约___元',
            answer: '48',
            hint: '15.6≈16，16×3=48',
            explanation: '15.6≈16，16×3=48，大约48元。实际15.6×3=46.8元。'
          },
          {
            id: 'm5u1l4q5',
            type: 'choice',
            question: '买2.5千克橘子，每千克4.4元。下面哪种估算最接近实际花费？',
            options: ['4×2=8元', '4×3=12元', '5×2=10元', '5×3=15元'],
            answer: '4×3=12元',
            hint: '4.4≈4还是5？2.5≈2还是3？',
            explanation: '4.4≈4，2.5≈3（四舍五入），4×3=12元。实际4.4×2.5=11元，估算12元最接近。'
          },
          {
            id: 'm5u1l4q6',
            type: 'fill',
            question: '学校买足球，每个48.5元，买12个。带600元够吗？估算大约___元',
            answer: '600',
            hint: '48.5≈50，50×12=600',
            explanation: '48.5≈50，50×12=600元。带600元刚好够。实际48.5×12=582元。'
          },
          {
            id: 'm5u1l4q7',
            type: 'choice',
            question: '估算0.49×2.1时，哪种方法最合适？',
            options: ['0.5×2=1', '0.4×2=0.8', '0.5×3=1.5', '0.4×3=1.2'],
            answer: '0.5×2=1',
            hint: '[小数乘小数]（数学五年级-第1单元-第2课）',
            explanation: '0.49≈0.5，2.1≈2，0.5×2=1最合适。实际0.49×2.1=1.029≈1。回顾小数乘小数的方法。'
          }
        ]
      },
      {
        id: 'm5u1l5',
        title: '小数乘法综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测小数乘法',
        iDo: '家长示范综合题，讲解小数乘法的各种题型和解题策略。',
        weDo: '亲子一起竞速做题，比比谁算得又快又准。',
        youDo: '孩子独立完成小数乘法综合检测，正确率≥85%。',
        parentTips: '检测前回顾：小数乘整数、小数乘小数、简便运算、估算，查漏补缺。',
        funElement: '小游戏：小数乘法达人挑战赛——20题竞速！歇后语：百尺竿头——更进一步',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|小数乘法达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|小数乘法达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|小数乘法知识总结图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课综合检测小数乘法知识，包括小数乘整数、小数乘小数、简便运算和估算应用。' },
          { type: 'example', content: '综合题：0.25×3.6×4=（0.25×4）×3.6=1×3.6=3.6', label: '简便运算' },
          { type: 'tip', content: '检测要点：1.小数位数判断 2.简便运算定律 3.估算方法 4.实际应用', label: '检测要点' },
          { type: 'example', content: '综合题：1.5×0.4+1.5×0.6=1.5×（0.4+0.6）=1.5×1=1.5', label: '分配律应用' },
          { type: 'tip', content: '常见错误：忘记点小数点、小数位数数错、末尾0未化简。', label: '易错点' },
          { type: 'animation', content: '小数乘法知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '小数乘法知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '小数乘整数', back: '先按整数乘，再点小数位', ttsText: '小数乘整数' },
                  { id: 'c2', front: '小数乘小数', back: '因数小数位之和=积的小数位', ttsText: '小数乘小数' },
                  { id: 'c3', front: '简便运算', back: '交换律、结合律、分配律', ttsText: '简便运算' },
                  { id: 'c4', front: '估算', back: '四舍五入到整数再乘', ttsText: '估算方法' },
                ]
              },
              ttsNarration: '小数乘法四大知识点总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u1l5q1',
            type: 'choice',
            question: '0.06×0.5的积是几位小数？',
            options: ['三位小数', '四位小数', '两位小数', '一位小数'],
            answer: '三位小数',
            hint: '0.06两位+0.5一位=几位？',
            explanation: '0.06有两位小数，0.5有一位小数，共三位小数。先算6×5=30，积从右往左点三位小数得0.030，化简为0.03。'
          },
          {
            id: 'm5u1l5q2',
            type: 'fill',
            question: '2.5×0.4=___',
            answer: '1',
            hint: '常见凑整组合',
            explanation: '2.5×0.4，先算25×4=100，共两位小数，得1.00=1。'
          },
          {
            id: 'm5u1l5q3',
            type: 'choice',
            question: '下面算式中，结果最大的是？',
            options: ['0.8×0.9', '0.8×1.2', '1.5×0.9', '1.5×1.2'],
            answer: '1.5×1.2',
            hint: '比较因数的大小',
            explanation: '1.5×1.2=1.8最大。0.8×0.9=0.72，0.8×1.2=0.96，1.5×0.9=1.35，1.5×1.2=1.8。'
          },
          {
            id: 'm5u1l5q4',
            type: 'fill',
            question: '用简便方法计算：1.25×0.7×8=___',
            answer: '7',
            hint: '1.25×8=10',
            explanation: '1.25×0.7×8=（1.25×8）×0.7=10×0.7=7，运用乘法交换律和结合律。'
          },
          {
            id: 'm5u1l5q5',
            type: 'choice',
            question: '一个数乘0.99，积一定比原数？',
            options: ['小', '大', '相等', '无法确定'],
            answer: '小',
            hint: '0.99比1小还是大？',
            explanation: '0.99<1，所以一个数（正数）乘0.99，积一定比原数小。同理，乘大于1的数，积比原数大。'
          },
          {
            id: 'm5u1l5q6',
            type: 'fill',
            question: '一辆汽车每小时行45.6千米，2.5小时行___千米',
            answer: '114',
            hint: '45.6×2.5，先算456×25',
            explanation: '45.6×2.5，先算456×25=11400，因数共两位小数，积得114.00=114千米。'
          },
          {
            id: 'm5u1l5q7',
            type: 'choice',
            question: '一个数（0除外）乘大于1的小数，积比原数？',
            options: ['大', '小', '相等', '无法确定'],
            answer: '大',
            hint: '[小数乘小数]（数学五年级-第1单元-第2课）',
            explanation: '一个数（0除外）乘大于1的数，积比原数大；乘小于1的数，积比原数小。回顾小数乘小数的积与因数大小关系。'
          }
        ]
      }
    ]
  },
  {
    id: 'm5u2',
    title: '位置与方向',
    subtitle: '用方向和距离确定位置，学会描述路线图',
    order: 2,
    lessons: [
      {
        id: 'm5u2l1',
        title: '方向与距离——确定位置',
        order: 1,
        teachingMethod: 'CPA·C→P：地图操作，以观测点为中心标方向和距离',
        iDo: '家长在地图上以学校为观测点，标出北偏东30°方向500米处是图书馆，示范确定位置。',
        weDo: '亲子一起以家为观测点，标出超市在南偏西45°方向300米处。',
        youDo: '孩子独立以公园为观测点，确定医院、学校等地点的位置。',
        parentTips: '确定位置三要素：观测点、方向（偏角）、距离。方向描述如"北偏东30°"。',
        funElement: '小游戏：寻宝大冒险——根据方向和距离找宝藏！歇后语：按图索骥——顺藤摸瓜',
        gsapAnimations: [
          '[GSAP:sceneBuild|地图+方向箭头+距离标注逐步出现|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|观测点和方向角高亮|0.8s|页面加载|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|方向位置图：以学校为中心标注各地点|500x300|教学风|png|地图+方向]',
          '[IMG:illustration|八个方向示意图|400x300|教学风|png|方向标注]'
        ],
        content: [
          { type: 'text', content: '确定一个地点的位置，需要知道三个要素：观测点在哪里、目标在什么方向、距离观测点多远。' },
          { type: 'example', content: '以学校为观测点，图书馆在北偏东30°方向500米处。"北偏东30°"就是从正北方向向东偏30°。', label: '确定位置示例' },
          { type: 'tip', content: '方向描述：北偏东/北偏西/南偏东/南偏西，偏角从正北或正南方向算起。', label: '方向口诀' },
          { type: 'example', content: '以家为观测点，超市在南偏西45°方向300米处。从正南向西偏45°就是西南方向。', label: '例题' },
          { type: 'tip', content: '量角器使用：中心对准观测点，0刻度线对准正北或正南方向，读出偏角度数。', label: '工具使用' },
          { type: 'animation', content: '以观测点为中心，方向箭头和距离标注逐步出现', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '确定位置',
              sceneBuildConfig: {
                sceneName: '地图定位',
                elements: [
                  { id: 'e1', emoji: '🏫', text: '学校（观测点）', x: 50, y: 50, size: 'lg', color: '#e74c3c', animation: 'popIn' },
                  { id: 'e2', emoji: '📚', text: '图书馆 北偏东30° 500m', x: 70, y: 30, size: 'md', animation: 'fadeIn' },
                  { id: 'e3', emoji: '🏥', text: '医院 南偏西45° 400m', x: 30, y: 70, size: 'md', animation: 'fadeIn' },
                  { id: 'e4', text: '北偏东30°', x: 60, y: 40, size: 'sm', color: '#3498db', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '以学校为观测点，图书馆在北偏东30度方向500米处。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u2l1q1',
            type: 'choice',
            question: '确定一个地点的位置需要哪三个要素？',
            options: ['观测点、方向、距离', '方向、距离、时间', '观测点、方向、时间', '方向、距离、速度'],
            answer: '观测点、方向、距离',
            hint: '想想确定位置需要哪些信息',
            explanation: '确定位置三要素：观测点（从哪里看）、方向（偏角）、距离（多远）。'
          },
          {
            id: 'm5u2l1q2',
            type: 'fill',
            question: '以学校为观测点，图书馆在北偏东30°方向，"30°"是从___方向向东偏的角度',
            answer: '正北',
            hint: '北偏东的意思是',
            explanation: '北偏东30°表示从正北方向向东偏30°的角度。'
          },
          {
            id: 'm5u2l1q3',
            type: 'choice',
            question: '南偏西45°方向，相当于哪个方向？',
            options: ['西南方向', '西北方向', '东南方向', '正西方向'],
            answer: '西南方向',
            hint: '南偏西45°正好在正南和正西之间',
            explanation: '南偏西45°从正南向西偏45°，正好在正南和正西的正中间，即西南方向。'
          },
          {
            id: 'm5u2l1q4',
            type: 'fill',
            question: '以家为观测点，小明家在学校东偏北30°方向400米处。学校在小明家的___偏___30°方向400米处',
            answer: '西',
            hint: '反方向看，东偏北的反方向是？',
            explanation: '方向是相对的，东偏北的反方向是西偏南。所以学校在小明家的西偏南30°方向400米处。'
          },
          {
            id: 'm5u2l1q5',
            type: 'choice',
            question: '甲在乙的北偏东40°方向，那么乙在甲的什么方向？',
            options: ['南偏西40°', '南偏东40°', '北偏西40°', '北偏东40°'],
            answer: '南偏西40°',
            hint: '北偏东的反方向是？',
            explanation: '方向的相对性：北偏东40°的反方向是南偏西40°。甲在乙的北偏东40°，则乙在甲的南偏西40°。'
          },
          {
            id: 'm5u2l1q6',
            type: 'fill',
            question: '以广场为观测点，邮局在东偏北35°方向600米处，书店在西偏南35°方向600米处。邮局和书店在广场的___方向上',
            answer: '相反',
            hint: '东偏北和西偏南是什么关系？',
            explanation: '东偏北35°和西偏南35°是相反方向，所以邮局和书店在广场的相反方向上，且距离相同。'
          },
          {
            id: 'm5u2l1q7',
            type: 'choice',
            question: '在地图上量得两地的图上距离是5厘米，比例尺是1:10000，实际距离是多少？',
            options: ['500米', '50米', '5000米', '5米'],
            answer: '500米',
            hint: '[小数乘法]（数学五年级-第1单元-第1课）',
            explanation: '5厘米×10000=50000厘米=500米。回顾小数乘法：5×10000=50000，再换算单位。'
          }
        ]
      },
      {
        id: 'm5u2l2',
        title: '描述路线图',
        order: 2,
        teachingMethod: '情境式，从A到B分段描述方向和距离',
        iDo: '家长示范：从家出发，向东走200米到超市，再向北偏东30°走300米到学校。',
        weDo: '亲子一起描述从学校到公园的路线，包含方向和距离。',
        youDo: '孩子独立描述从家到图书馆的完整路线。',
        parentTips: '描述路线：从起点出发→向某方向走某距离→到达某地→再转向→走→到达。',
        funElement: '小游戏：我是小小导航员——描述路线让小伙伴走！歇后语：顺藤摸瓜——一路找到底',
        gsapAnimations: [
          '[GSAP:timeline|路线分段绘制：起点→中转→终点|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|每段路线方向标注高亮|0.5s|步骤切换|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|路线图：家→超市→学校|500x300|教学风|png|路线+标注]',
          '[IMG:illustration|路线描述模板图|400x200|教学风|png|描述格式]'
        ],
        content: [
          { type: 'text', content: '描述路线图就是把从起点到终点的每一段路说清楚：从哪里出发，向什么方向走多远，到哪里，再怎么走。' },
          { type: 'example', content: '从家出发，向东走200米到超市，再向北偏东30°走300米到学校，最后向南走150米到图书馆。', label: '路线描述示例' },
          { type: 'tip', content: '描述格式：从___出发，向___方向走___米到___，再向___方向走___米到___。', label: '描述模板' },
          { type: 'example', content: '从学校出发，向西偏南45°走400米到公园。这是一段路的描述。', label: '单段路线' },
          { type: 'tip', content: '注意每到一个转弯点，要重新确定方向，以当前位置为观测点描述下一段。', label: '易错提醒' },
          { type: 'animation', content: '路线逐步绘制，每段标注方向和距离', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '描述路线图',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '从家出发，向东走200米', ttsNarration: '从家出发，向东走200米' },
                  { id: 's2', description: '到达超市，转向北偏东30°', ttsNarration: '到达超市，转向北偏东30度' },
                  { id: 's3', description: '走300米到达学校', ttsNarration: '走300米到达学校' },
                  { id: 's4', description: '转向南走150米到图书馆', ttsNarration: '转向南走150米到图书馆' },
                ]
              },
              ttsNarration: '描述路线图，分段说明方向和距离。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u2l2q1',
            type: 'choice',
            question: '描述路线图时，每段路需要说清楚什么？',
            options: ['方向和距离', '方向和时间', '距离和速度', '时间和速度'],
            answer: '方向和距离',
            hint: '回顾确定位置三要素',
            explanation: '描述路线图每段需要说清楚方向和距离，有时还要说明到达的地点。'
          },
          {
            id: 'm5u2l2q2',
            type: 'fill',
            question: '从学校出发，向东走300米到超市，再向___走200米到图书馆（图书馆在超市北面）',
            answer: '北',
            hint: '图书馆在超市的北面',
            explanation: '图书馆在超市北面，所以从超市向北走200米到图书馆。'
          },
          {
            id: 'm5u2l2q3',
            type: 'choice',
            question: '小明从家出发，先向东走200米到书店，再向北走300米到学校。学校在小明家的什么方向？',
            options: ['东北方向', '东南方向', '西北方向', '正北方向'],
            answer: '东北方向',
            hint: '东走了200米，北走了300米，综合方向是？',
            explanation: '先向东走200米，再向北走300米，学校在家的东北方向。'
          },
          {
            id: 'm5u2l2q4',
            type: 'fill',
            question: '从A地出发向南偏东30°走400米到B地，从B地回A地应该向___偏___30°走400米',
            answer: '北',
            hint: '南偏东的反方向是？',
            explanation: '南偏东30°的反方向是北偏西30°。从B地回A地应该向北偏西30°走400米。'
          },
          {
            id: 'm5u2l2q5',
            type: 'choice',
            question: '小红从家出发向西走300米，再向北走400米到学校。她家到学校的直线距离大约是多少？',
            options: ['500米', '700米', '400米', '300米'],
            answer: '500米',
            hint: '用勾股思想：300和400构成直角边',
            explanation: '向西300米、向北400米构成直角三角形两直角边，斜边=√(300²+400²)=√250000=500米。'
          },
          {
            id: 'm5u2l2q6',
            type: 'fill',
            question: '从起点出发，向东偏北45°走500米到中点，再向东偏南45°走500米到终点。终点在起点的正___方向500米处',
            answer: '东',
            hint: '北偏东45°和东偏南45°叠加，南北抵消',
            explanation: '东偏北45°走500米：向东约354米，向北约354米。东偏南45°走500米：向东约354米，向南约354米。南北抵消，向东共约707米。终点在起点正东方向约707米处。'
          },
          {
            id: 'm5u2l2q7',
            type: 'choice',
            question: '描述路线图时，每次转弯后确定方向应以什么为观测点？',
            options: ['当前位置（转弯点）', '出发点', '终点', '任意位置'],
            answer: '当前位置（转弯点）',
            hint: '[方向与距离]（数学五年级-第2单元-第1课）',
            explanation: '每到一个转弯点，要以当前位置为新观测点确定下一段方向。回顾确定位置时观测点的重要性。'
          }
        ]
      },
      {
        id: 'm5u2l3',
        title: '位置与方向综合应用',
        order: 3,
        teachingMethod: '探究式，综合运用方向和距离解决实际问题',
        iDo: '家长示范：在平面图上标注多个地点的位置关系，画出简易地图。',
        weDo: '亲子一起根据描述画出路线图，互相检查。',
        youDo: '孩子独立根据文字描述画出平面位置图。',
        parentTips: '画图时注意比例尺统一，方向标注准确，量角器中心对准观测点。',
        funElement: '小游戏：地图设计师——自己画一张小区平面图！歇后语：运筹帷幄——心中有地图',
        gsapAnimations: [
          '[GSAP:sceneBuild|平面图上多地点标注逐步出现|1.5s|点击播放|power2.out]',
          '[GSAP:compare|两个地点位置关系对比|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|简易平面图：多地点位置关系|500x300|教学风|png|平面图]',
          '[IMG:illustration|量角器使用示意图|400x300|教学风|png|量角器]'
        ],
        content: [
          { type: 'text', content: '综合应用方向和距离知识，我们可以在平面图上标注多个地点的位置，画出简易地图。' },
          { type: 'example', content: '以广场为中心：学校在北偏东30°方向400米，医院在南偏西45°方向300米，超市在正东方向500米。', label: '多地点标注' },
          { type: 'tip', content: '画图步骤：1.确定观测点 2.画方向线 3.量角度 4.按比例尺标距离 5.标注地点名称。', label: '画图步骤' },
          { type: 'example', content: '比例尺1:10000，图上1厘米代表实际100米。400米在图上画4厘米。', label: '比例尺换算' },
          { type: 'tip', content: '多个地点以同一观测点标注时，各地点之间也可以互相描述位置关系。', label: '位置关系' },
          { type: 'animation', content: '平面图上多个地点逐一标注的过程', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '平面图标注',
              sceneBuildConfig: {
                sceneName: '简易平面图',
                elements: [
                  { id: 'e1', emoji: '🏙️', text: '广场（中心）', x: 50, y: 50, size: 'lg', color: '#e74c3c', animation: 'popIn' },
                  { id: 'e2', emoji: '🏫', text: '学校 北偏东30°', x: 65, y: 35, size: 'md', animation: 'fadeIn' },
                  { id: 'e3', emoji: '🏥', text: '医院 南偏西45°', x: 35, y: 65, size: 'md', animation: 'fadeIn' },
                  { id: 'e4', emoji: '🛒', text: '超市 正东', x: 75, y: 50, size: 'md', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '以广场为中心，标注学校、医院、超市的位置。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u2l3q1',
            type: 'choice',
            question: '画平面位置图时，第一步应该做什么？',
            options: ['确定观测点', '画方向线', '量角度', '标距离'],
            answer: '确定观测点',
            hint: '所有位置都是相对于谁来说的？',
            explanation: '画平面位置图第一步是确定观测点，因为所有位置都是相对于观测点来描述的。'
          },
          {
            id: 'm5u2l3q2',
            type: 'fill',
            question: '比例尺1:5000，图上3厘米代表实际距离___米',
            answer: '150',
            hint: '3×5000=15000厘米',
            explanation: '3厘米×5000=15000厘米=150米。图上3厘米代表实际150米。'
          },
          {
            id: 'm5u2l3q3',
            type: 'choice',
            question: '以A为观测点，B在北偏东25°方向，以B为观测点，A在什么方向？',
            options: ['南偏西25°', '南偏东25°', '北偏西25°', '北偏东25°'],
            answer: '南偏西25°',
            hint: '北偏东的反方向',
            explanation: '北偏东25°的反方向是南偏西25°。以B为观测点，A在南偏西25°方向。'
          },
          {
            id: 'm5u2l3q4',
            type: 'fill',
            question: '以O为观测点，A在东偏北40°方向200米，B在东偏南40°方向200米。A和B到O的距离___（填"相等"或"不等"）',
            answer: '相等',
            hint: '比较两人到O的距离',
            explanation: 'A和B到O的距离都是200米，所以距离相等。方向不同但距离相同。'
          },
          {
            id: 'm5u2l3q5',
            type: 'choice',
            question: '小明面向正北站立，向右转90°后面向什么方向？',
            options: ['正东', '正西', '正南', '正北'],
            answer: '正东',
            hint: '面向北，右转90°',
            explanation: '面向正北，右转90°就是顺时针转90°，从北转到东，所以面向正东方向。'
          },
          {
            id: 'm5u2l3q6',
            type: 'fill',
            question: '一艘船从港口出发向东南方向航行，"东南方向"就是南偏东___°方向',
            answer: '45',
            hint: '东南方向正好在正南和正东之间',
            explanation: '东南方向就是南偏东45°方向，因为正南到正东是90°，正好中间是45°。'
          },
          {
            id: 'm5u2l3q7',
            type: 'choice',
            question: '比例尺1:10000的地图上，量得A、B两地图上距离4厘米。如果改用1:5000的比例尺，图上距离应该是几厘米？',
            options: ['8厘米', '2厘米', '4厘米', '16厘米'],
            answer: '8厘米',
            hint: '[方向与距离]（数学五年级-第2单元-第1课）',
            explanation: '实际距离=4×10000=40000厘米=400米。新比例尺1:5000，图上距离=40000÷5000=8厘米。回顾比例尺换算。'
          }
        ]
      },
      {
        id: 'm5u2l4',
        title: '位置与方向应用题',
        order: 4,
        teachingMethod: '情境式，解决实际生活中的位置与方向问题',
        iDo: '家长示范：根据描述画出台风移动路径，标注每段方向和距离。',
        weDo: '亲子一起解决"寻宝"问题，根据线索找到宝藏位置。',
        youDo: '孩子独立解决实际位置与方向应用题。',
        parentTips: '解题关键：边读题边画图，标注每一步的方向和距离，最后确定位置。',
        funElement: '小游戏：寻宝猎人——根据线索找宝藏！歇后语：按图索骥——有据可查',
        gsapAnimations: [
          '[GSAP:timeline|台风路径分段绘制|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|关键信息高亮：方向+距离|0.5s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|台风移动路径图|500x300|教学风|png|路径标注]',
          '[IMG:illustration|寻宝路线图|400x300|可爱卡通风|png|宝藏+路线]'
        ],
        content: [
          { type: 'text', content: '生活中很多问题都涉及位置与方向，比如台风路径、导航路线、寻宝游戏等。解题时边读边画图是关键。' },
          { type: 'example', content: '台风从A市出发，向北偏西30°方向移动200千米到B市，再向北偏东45°方向移动150千米到C市。画出路径。', label: '台风路径' },
          { type: 'tip', content: '解题步骤：1.读题标注信息 2.确定起点 3.分段画方向和距离 4.标注终点 5.回答问题。', label: '解题策略' },
          { type: 'example', content: '寻宝线索：从大树出发向东走50步，再向北偏东30°走30步找到宝藏。画出路线找位置。', label: '寻宝问题' },
          { type: 'tip', content: '注意单位统一：题目中如果是千米，画图时按比例尺换算成厘米。', label: '易错提醒' },
          { type: 'animation', content: '台风路径分段绘制动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '台风移动路径',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '台风从A市出发', ttsNarration: '台风从A市出发' },
                  { id: 's2', description: '向北偏西30°移动200千米到B市', ttsNarration: '向北偏西30度移动200千米到B市' },
                  { id: 's3', description: '再向北偏东45°移动150千米到C市', ttsNarration: '再向北偏东45度移动150千米到C市' },
                ]
              },
              ttsNarration: '画出台风移动路径，标注方向和距离。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u2l4q1',
            type: 'choice',
            question: '解决位置与方向应用题，最有效的策略是？',
            options: ['边读题边画图', '只读题不画图', '先算再画', '只画不算'],
            answer: '边读题边画图',
            hint: '画图能帮助理解',
            explanation: '边读题边画图是最有效的策略，能直观地理解位置关系，避免出错。'
          },
          {
            id: 'm5u2l4q2',
            type: 'fill',
            question: '一艘船从港口出发，向南偏西30°方向航行300千米到达A岛。港口在A岛的___偏___30°方向300千米处',
            answer: '北',
            hint: '南偏西的反方向',
            explanation: '南偏西30°的反方向是北偏东30°。港口在A岛的北偏东30°方向300千米处。'
          },
          {
            id: 'm5u2l4q3',
            type: 'choice',
            question: '小明从家出发先向东走300米到书店，再向北走400米到学校。学校在小明家的什么方向？',
            options: ['东北方向', '东南方向', '西北方向', '正北方向'],
            answer: '东北方向',
            hint: '东300米+北400米',
            explanation: '向东走300米，再向北走400米，学校在家的东北方向。'
          },
          {
            id: 'm5u2l4q4',
            type: 'fill',
            question: '一架飞机从A城飞往B城，方向是北偏东35°，距离500千米。从B城飞回A城的方向是南偏西___°',
            answer: '35',
            hint: '反方向角度相同',
            explanation: '北偏东35°的反方向是南偏西35°，角度相同，距离相同。'
          },
          {
            id: 'm5u2l4q5',
            type: 'choice',
            question: '台风从A市正南方500千米处，以每小时25千米的速度向北移动。几小时后到达A市？',
            options: ['20小时', '25小时', '10小时', '15小时'],
            answer: '20小时',
            hint: '500÷25=？',
            explanation: '500÷25=20小时。台风在A市正南方，直接向北移动，距离500千米，速度25千米/时，20小时后到达。'
          },
          {
            id: 'm5u2l4q6',
            type: 'fill',
            question: '在一次定向越野中，小红从起点出发，先向北偏东45°跑400米到A点，再向南偏东45°跑400米到B点。B点在起点的正___方向',
            answer: '东',
            hint: '北偏东45°和南偏东45°叠加',
            explanation: '北偏东45°走400米：向北约283米，向东约283米。南偏东45°走400米：向南约283米，向东约283米。南北抵消，向东共约566米。B点在起点正东方向。'
          },
          {
            id: 'm5u2l4q7',
            type: 'choice',
            question: '解决位置与方向应用题时，为什么要标注每一步的观测点？',
            options: ['因为每段路的方向是相对于当前位置的', '因为好看', '因为题目要求', '没有特别原因'],
            answer: '因为每段路的方向是相对于当前位置的',
            hint: '[描述路线图]（数学五年级-第2单元-第2课）',
            explanation: '每段路的方向是相对于当前所在位置来描述的，所以必须标注每一步的观测点。回顾描述路线图的方法。'
          }
        ]
      },
      {
        id: 'm5u2l5',
        title: '位置与方向综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测位置与方向知识',
        iDo: '家长示范综合题，讲解确定位置、描述路线和画图的方法。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成位置与方向综合检测。',
        parentTips: '检测前回顾：三要素、方向描述、路线描述、比例尺换算、相对方向。',
        funElement: '小游戏：方向达人挑战——画图+描述+判断！歇后语：轻车熟路——了如指掌',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|方向达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|位置与方向达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|位置与方向知识总结图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课综合检测位置与方向知识，包括确定位置、描述路线、画平面图和解决实际问题。' },
          { type: 'example', content: '综合题：以O为观测点，A在北偏东30°方向400米，B在南偏西30°方向400米，A和B在O的两侧且方向相反。', label: '综合分析' },
          { type: 'tip', content: '检测要点：1.三要素 2.方向描述 3.路线描述 4.比例尺 5.相对方向', label: '检测要点' },
          { type: 'example', content: '综合题：从家到学校，先向东走200米到超市，再向北偏东45°走300米到学校。画出路线图。', label: '路线画图' },
          { type: 'tip', content: '易错点：方向反了、角度量错、比例尺换算错、忘标观测点。', label: '易错点' },
          { type: 'animation', content: '位置与方向知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '位置与方向知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '确定位置', back: '观测点+方向+距离', ttsText: '确定位置三要素' },
                  { id: 'c2', front: '描述路线', back: '分段说明方向和距离', ttsText: '描述路线方法' },
                  { id: 'c3', front: '相对方向', back: '北偏东的反方向是南偏西', ttsText: '相对方向' },
                  { id: 'c4', front: '比例尺', back: '图上距离÷实际距离', ttsText: '比例尺换算' },
                ]
              },
              ttsNarration: '位置与方向四大知识点总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u2l5q1',
            type: 'choice',
            question: '以学校为观测点，公园在北偏西40°方向500米处。下面描述正确的是？',
            options: ['从正北向西偏40°', '从正西向北偏40°', '从正东向北偏40°', '从正南向西偏40°'],
            answer: '从正北向西偏40°',
            hint: '北偏西的意思',
            explanation: '北偏西40°表示从正北方向向西偏40°，所以"从正北向西偏40°"是正确的。'
          },
          {
            id: 'm5u2l5q2',
            type: 'fill',
            question: '甲在乙的东偏南30°方向，乙在甲的___偏___30°方向',
            answer: '西',
            hint: '东偏南的反方向',
            explanation: '东偏南30°的反方向是西偏北30°。乙在甲的西偏北30°方向。'
          },
          {
            id: 'm5u2l5q3',
            type: 'choice',
            question: '下面关于方向的描述，正确的是？',
            options: ['北偏东30°=东偏北60°', '北偏东30°=东偏北30°', '北偏东30°=南偏西30°', '北偏东30°=北偏西30°'],
            answer: '北偏东30°=东偏北60°',
            hint: '北和东之间是90°',
            explanation: '北偏东30°表示从北向东偏30°，等于从东向北偏60°（90°-30°=60°），所以北偏东30°=东偏北60°。'
          },
          {
            id: 'm5u2l5q4',
            type: 'fill',
            question: '比例尺1:20000的地图上，A、B两地图上距离5厘米，实际距离是___米',
            answer: '1000',
            hint: '5×20000=100000厘米',
            explanation: '5厘米×20000=100000厘米=1000米。实际距离是1000米。'
          },
          {
            id: 'm5u2l5q5',
            type: 'choice',
            question: '从小明家看学校是北偏东35°方向，从小红家看学校也是北偏东35°方向，且距离相同。小明家和小红家的位置关系是？',
            options: ['可能在同一地点', '一定在同一地点', '一定不在同一地点', '无法判断'],
            answer: '可能在同一地点',
            hint: '方向和距离相同是否意味着观测点相同？',
            explanation: '方向和距离相同，观测点可能在同一地点，也可能不在（比如对称位置），所以"可能在同一地点"。'
          },
          {
            id: 'm5u2l5q6',
            type: 'fill',
            question: '一艘船从A港出发向南偏西25°航行200海里到B港，又从B港向北偏西25°航行200海里到C港。C港在A港的正___方向',
            answer: '西',
            hint: '南偏西25°和北偏西25°叠加',
            explanation: '南偏西25°走200海里：向南约181海里，向西约85海里。北偏西25°走200海里：向北约181海里，向西约85海里。南北抵消，向西共约170海里。C港在A港正西方向。'
          },
          {
            id: 'm5u2l5q7',
            type: 'choice',
            question: '在描述路线时，"向北偏东30°走400米"中的观测点是？',
            options: ['出发时所在的位置', '终点', '出发点', '任意位置'],
            answer: '出发时所在的位置',
            hint: '[描述路线图]（数学五年级-第2单元-第2课）',
            explanation: '描述路线时每段方向的观测点是该段出发时所在的位置。回顾描述路线图的方法。'
          }
        ]
      }
    ]
  },
  {
    id: 'm5u3',
    title: '小数除法',
    subtitle: '掌握小数除法的计算方法，认识循环小数',
    order: 3,
    lessons: [
      {
        id: 'm5u3l1',
        title: '小数除以整数',
        order: 1,
        teachingMethod: 'CPA·P→A，商的小数点对齐被除数的小数点',
        iDo: '家长示范7.2÷6竖式：7÷6=1余1，落下2得12，12÷6=2，商的小数点对齐被除数得1.2。',
        weDo: '亲子一起做9.6÷4，先算96÷4=24，商的小数点对齐得2.4。',
        youDo: '孩子独立完成8.4÷6、12.5÷5等小数除以整数题目。',
        parentTips: '商的小数点要和被除数的小数点对齐。整数部分不够除时商0。',
        funElement: '小游戏：小数点对对齐——商的小数点找位置！歇后语：对号入座——各就各位',
        gsapAnimations: [
          '[GSAP:timeline|7.2÷6竖式计算过程（小数点对齐）|2s|点击播放|power2.out]',
          '[GSAP:highlight|商的小数点与被除数小数点对齐高亮|0.8s|计算完成|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|小数除法竖式图：7.2÷6|400x300|教学风|png|小数点对齐]',
          '[IMG:illustration|商的小数点对齐示意图|400x200|教学风|png|对齐标注]'
        ],
        content: [
          { type: 'text', content: '小数除以整数怎么算呢？按整数除法的方法去除，商的小数点要和被除数的小数点对齐。' },
          { type: 'example', content: '7.2÷6：7÷6=1余1，点小数点（对齐），落下2得12，12÷6=2，商是1.2。', label: '例题' },
          { type: 'tip', content: '关键规则：商的小数点一定要和被除数的小数点对齐！', label: '核心口诀' },
          { type: 'example', content: '9.6÷4：9÷4=2余1，点小数点，落下6得16，16÷4=4，商是2.4。', label: '例题' },
          { type: 'tip', content: '整数部分不够除时，商0，点上小数点继续除。如0.96÷6=0.16。', label: '易错提醒' },
          { type: 'animation', content: '7.2÷6竖式计算过程，标注小数点对齐', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '小数除以整数：7.2÷6',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '7÷6=1余1，商1', ttsNarration: '7除以6等于1余1' },
                  { id: 's2', description: '点小数点（与被除数对齐）', ttsNarration: '点上小数点，与被除数对齐' },
                  { id: 's3', description: '落下2，12÷6=2', ttsNarration: '落下2，12除以6等于2' },
                  { id: 's4', description: '商是1.2', ttsNarration: '商是1.2' },
                ]
              },
              ttsNarration: '7.2除以6，按整数除法算，商的小数点对齐被除数。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u3l1q1',
            type: 'choice',
            question: '7.2÷6等于多少？',
            options: ['1.2', '12', '0.12', '1.6'],
            answer: '1.2',
            hint: '7÷6=1余1，落下2，12÷6=2',
            explanation: '7.2÷6：7÷6=1余1，点小数点，落下2得12，12÷6=2，商是1.2。'
          },
          {
            id: 'm5u3l1q2',
            type: 'fill',
            question: '9.6÷4=___',
            answer: '2.4',
            hint: '9÷4=2余1，落下6，16÷4=4',
            explanation: '9.6÷4：9÷4=2余1，点小数点，落下6得16，16÷4=4，商是2.4。'
          },
          {
            id: 'm5u3l1q3',
            type: 'choice',
            question: '下面计算正确的是？',
            options: ['8.4÷6=1.4', '8.4÷6=14', '8.4÷6=0.14', '8.4÷6=1.2'],
            answer: '8.4÷6=1.4',
            hint: '8÷6=1余2，落下4，24÷6=4',
            explanation: '8.4÷6：8÷6=1余2，点小数点，落下4得24，24÷6=4，商是1.4。'
          },
          {
            id: 'm5u3l1q4',
            type: 'fill',
            question: '12.5÷5=___',
            answer: '2.5',
            hint: '12÷5=2余2，落下5，25÷5=5',
            explanation: '12.5÷5：12÷5=2余2，点小数点，落下5得25，25÷5=5，商是2.5。'
          },
          {
            id: 'm5u3l1q5',
            type: 'choice',
            question: '0.96÷6的商是多少？',
            options: ['0.16', '1.6', '16', '0.016'],
            answer: '0.16',
            hint: '0÷6=0，点小数点，9÷6=1余3，落下6，36÷6=6',
            explanation: '0.96÷6：0÷6=0，点小数点，9÷6=1余3，落下6得36，36÷6=6，商是0.16。整数部分不够除商0。'
          },
          {
            id: 'm5u3l1q6',
            type: 'fill',
            question: '一根绳子长22.4米，平均剪成7段，每段长___米',
            answer: '3.2',
            hint: '22.4÷7',
            explanation: '22.4÷7：22÷7=3余1，点小数点，落下4得14，14÷7=2，商是3.2米。'
          },
          {
            id: 'm5u3l1q7',
            type: 'choice',
            question: '小数除以整数时，商的小数点应该怎么定位？',
            options: ['与被除数的小数点对齐', '在商的最前面', '不需要小数点', '在商的最后面'],
            answer: '与被除数的小数点对齐',
            hint: '[小数乘整数]（数学五年级-第1单元-第1课）',
            explanation: '小数除以整数时，商的小数点要与被除数的小数点对齐。回顾小数乘法中"先按整数算再点小数点"的思路，除法是逆向运算。'
          }
        ]
      },
      {
        id: 'm5u3l2',
        title: '一个数除以小数——移动小数点',
        order: 2,
        teachingMethod: '支架式，除数变整数再除，除数和被除数小数点同时右移',
        iDo: '家长示范1.8÷0.3：把0.3变成3（小数点右移1位），1.8也右移1位变18，18÷3=6。',
        weDo: '亲子一起做4.5÷0.5：0.5变5，4.5变45，45÷5=9。',
        youDo: '孩子独立完成2.4÷0.6、7.5÷0.25等除以小数题目。',
        parentTips: '除数是小数时，先把除数变整数（小数点右移），被除数也右移相同位数，再除。',
        funElement: '小游戏：小数点搬家——除数变整数，被除数跟着搬！歇后语：近朱者赤——跟着走',
        gsapAnimations: [
          '[GSAP:timeline|小数点右移动画：0.3→3，1.8→18|1.5s|点击播放|power2.inOut]',
          '[GSAP:highlight|除数和被除数小数点同时移动高亮|0.6s|步骤完成|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|小数点移动示意图：1.8÷0.3|500x200|教学风|png|移动箭头]',
          '[IMG:illustration|除以小数计算步骤图|400x300|教学风|png|步骤标注]'
        ],
        content: [
          { type: 'text', content: '除数是小数怎么办？秘诀是：把除数变成整数，被除数也跟着变，商不变。' },
          { type: 'example', content: '1.8÷0.3：除数0.3变3（右移1位），被除数1.8变18（也右移1位），18÷3=6。', label: '例题' },
          { type: 'tip', content: '移动规则：除数小数点右移几位，被除数小数点也右移几位。位数不够补0。', label: '移动口诀' },
          { type: 'example', content: '4.5÷0.5：0.5变5，4.5变45，45÷5=9。', label: '例题' },
          { type: 'tip', content: '被除数位数不够时补0：3.6÷0.05，0.05变5（右移2位），3.6变360（右移2位，补一个0），360÷5=72。', label: '补0规则' },
          { type: 'animation', content: '小数点右移动画：0.3→3，1.8→18', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '除以小数：小数点右移',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '1.8÷0.3，除数是小数', ttsNarration: '1.8除以0.3，除数是小数' },
                  { id: 's2', description: '除数0.3右移1位变3', ttsNarration: '除数0.3右移1位变成3' },
                  { id: 's3', description: '被除数1.8也右移1位变18', ttsNarration: '被除数1.8也右移1位变成18' },
                  { id: 's4', description: '18÷3=6', ttsNarration: '18除以3等于6' },
                ]
              },
              ttsNarration: '除数是小数时，把除数变整数，被除数也右移相同位数。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u3l2q1',
            type: 'choice',
            question: '1.8÷0.3等于多少？',
            options: ['6', '0.6', '60', '0.06'],
            answer: '6',
            hint: '0.3变3，1.8变18',
            explanation: '1.8÷0.3：0.3变3（右移1位），1.8变18（也右移1位），18÷3=6。'
          },
          {
            id: 'm5u3l2q2',
            type: 'fill',
            question: '4.5÷0.5=___',
            answer: '9',
            hint: '0.5变5，4.5变45',
            explanation: '4.5÷0.5：0.5变5，4.5变45，45÷5=9。'
          },
          {
            id: 'm5u3l2q3',
            type: 'choice',
            question: '计算2.4÷0.6时，除数和被除数的小数点应该怎么移动？',
            options: ['都右移1位', '都右移2位', '都左移1位', '都左移2位'],
            answer: '都右移1位',
            hint: '0.6有几位小数？',
            explanation: '0.6有一位小数，所以除数和被除数的小数点都右移1位：0.6→6，2.4→24，24÷6=4。'
          },
          {
            id: 'm5u3l2q4',
            type: 'fill',
            question: '3.6÷0.05=___',
            answer: '72',
            hint: '0.05变5（右移2位），3.6变360',
            explanation: '3.6÷0.05：0.05变5（右移2位），3.6变360（右移2位补0），360÷5=72。'
          },
          {
            id: 'm5u3l2q5',
            type: 'choice',
            question: '7.5÷0.25等于多少？',
            options: ['30', '3', '300', '0.3'],
            answer: '30',
            hint: '0.25变25（右移2位），7.5变750',
            explanation: '7.5÷0.25：0.25变25（右移2位），7.5变750（右移2位补0），750÷25=30。'
          },
          {
            id: 'm5u3l2q6',
            type: 'fill',
            question: '一辆汽车2.5小时行120千米，平均每小时行___千米',
            answer: '48',
            hint: '120÷2.5',
            explanation: '120÷2.5：2.5变25（右移1位），120变1200（右移1位补0），1200÷25=48千米/时。'
          },
          {
            id: 'm5u3l2q7',
            type: 'choice',
            question: '比较1.8÷0.3和18÷3的结果？',
            options: ['相等', '1.8÷0.3是18÷3的10倍', '1.8÷0.3是18÷3的十分之一', '无法比较'],
            answer: '相等',
            hint: '[小数除以整数]（数学五年级-第3单元-第1课）',
            explanation: '1.8÷0.3把除数和被除数都右移1位变成18÷3=6，所以两者结果相等。回顾小数除以整数的方法。'
          }
        ]
      },
      {
        id: 'm5u3l3',
        title: '商的近似数——四舍五入',
        order: 3,
        teachingMethod: '支架式，多除一位再四舍五入',
        iDo: '家长示范45.5÷6≈7.6（保留一位小数）：45÷6=7余3，35÷6=5余5，50÷6=8余2，得7.58...，保留一位四舍五入得7.6。',
        weDo: '亲子一起做32÷7≈4.6（保留一位小数）。',
        youDo: '孩子独立求商的近似数。',
        parentTips: '求商的近似数：多除一位，再看这一位四舍五入。保留几位小数就多除一位。',
        funElement: '小游戏：四舍五入大冒险——多除一位再取舍！歇后语：四舍五入——差不多就行',
        gsapAnimations: [
          '[GSAP:timeline|除法→多除一位→四舍五入过程|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|多除的那一位高亮|0.5s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|商的近似数图：多除一位再四舍五入|500x200|教学风|png|四舍五入]',
          '[IMG:illustration|四舍五入规则图|400x200|教学风|png|取舍规则]'
        ],
        content: [
          { type: 'text', content: '有时候除不尽或者不需要精确结果，我们就求商的近似数。方法是：多除一位，再用四舍五入法取近似值。' },
          { type: 'example', content: '45.5÷6保留一位小数：算到7.58...，看第二位8≥5进1，得7.6。', label: '例题' },
          { type: 'tip', content: '保留几位小数就多除一位：保留一位除到两位，保留两位除到三位。', label: '口诀' },
          { type: 'example', content: '32÷7保留一位小数：算到4.57...，看第二位7≥5进1，得4.6。', label: '例题' },
          { type: 'tip', content: '四舍五入：0-4舍去，5-9进1。注意看的是多除的那一位。', label: '四舍五入规则' },
          { type: 'animation', content: '除法→多除一位→四舍五入的过程', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '求商的近似数',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '45.5÷6，保留一位小数', ttsNarration: '45.5除以6，保留一位小数' },
                  { id: 's2', description: '多除一位：算到7.58', ttsNarration: '多除一位，算到7.58' },
                  { id: 's3', description: '看第二位8≥5，进1', ttsNarration: '看第二位8大于等于5，进1' },
                  { id: 's4', description: '得7.6', ttsNarration: '四舍五入得7.6' },
                ]
              },
              ttsNarration: '求商的近似数，多除一位再四舍五入。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u3l3q1',
            type: 'choice',
            question: '求商的近似数时，保留一位小数应该除到第几位？',
            options: ['第二位小数', '第一位小数', '第三位小数', '整数'],
            answer: '第二位小数',
            hint: '多除一位',
            explanation: '保留一位小数就多除一位，除到第二位小数，再看第二位四舍五入。'
          },
          {
            id: 'm5u3l3q2',
            type: 'fill',
            question: '45.5÷6≈___（保留一位小数）',
            answer: '7.6',
            hint: '算到7.58，看第二位8≥5进1',
            explanation: '45.5÷6=7.583...，保留一位小数看第二位8≥5进1，得7.6。'
          },
          {
            id: 'm5u3l3q3',
            type: 'choice',
            question: '32÷7≈？（保留一位小数）',
            options: ['4.6', '4.5', '4.57', '5'],
            answer: '4.6',
            hint: '32÷7=4.571...，看第二位7≥5',
            explanation: '32÷7=4.571...，保留一位小数看第二位7≥5进1，得4.6。'
          },
          {
            id: 'm5u3l3q4',
            type: 'fill',
            question: '10÷3≈___（保留两位小数）',
            answer: '3.33',
            hint: '10÷3=3.333...，看第三位3<5舍去',
            explanation: '10÷3=3.333...，保留两位小数看第三位3<5舍去，得3.33。'
          },
          {
            id: 'm5u3l3q5',
            type: 'choice',
            question: '下面哪个是正确的四舍五入？',
            options: ['15.6÷3.5≈4.5（保留一位）', '15.6÷3.5≈4.4（保留一位）', '15.6÷3.5≈4（保留一位）', '15.6÷3.5≈5.0（保留一位）'],
            answer: '15.6÷3.5≈4.5（保留一位）',
            hint: '15.6÷3.5=4.457...',
            explanation: '15.6÷3.5=4.457...，保留一位小数看第二位5≥5进1，得4.5。'
          },
          {
            id: 'm5u3l3q6',
            type: 'fill',
            question: '李叔叔用18.9元买了4千克苹果，每千克大约___元（保留一位小数）',
            answer: '4.7',
            hint: '18.9÷4=4.725...',
            explanation: '18.9÷4=4.725，保留一位小数看第二位2<5舍去，得4.7元。'
          },
          {
            id: 'm5u3l3q7',
            type: 'choice',
            question: '一个数除以小数后，商的近似数需要保留两位小数，应该除到第几位？',
            options: ['第三位小数', '第二位小数', '第一位小数', '整数'],
            answer: '第三位小数',
            hint: '[一个数除以小数]（数学五年级-第3单元-第2课）',
            explanation: '保留两位小数就多除一位，除到第三位小数。回顾除以小数时小数点移动的方法。'
          }
        ]
      },
      {
        id: 'm5u3l4',
        title: '循环小数',
        order: 4,
        teachingMethod: '探究式：发现规律，认识循环小数',
        iDo: '家长示范1÷3=0.333...，小数部分3不断重复出现，这就是循环小数。',
        weDo: '亲子一起算2÷3=0.666...，发现循环规律。',
        youDo: '孩子独立辨认循环小数，用简便记法表示。',
        parentTips: '循环小数：小数部分有一个或几个数字依次不断重复出现。用循环节上加点表示。',
        funElement: '小游戏：循环小数侦探——找出循环节！歇后语：周而复始——循环往复',
        gsapAnimations: [
          '[GSAP:timeline|1÷3=0.333...循环出现|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|循环节高亮标注|0.5s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|循环小数示意图：0.333...|500x200|教学风|png|循环标记]',
          '[IMG:illustration|循环节标注图|400x200|教学风|png|循环节点]'
        ],
        content: [
          { type: 'text', content: '有些除法算着算着，发现余数不断重复出现，商的小数部分也有数字不断重复，这就是循环小数。' },
          { type: 'example', content: '1÷3=0.333...，小数部分的3不断重复，记作0.3̇（3上加点）。', label: '循环小数示例' },
          { type: 'tip', content: '循环小数：小数部分有一个或几个数字依次不断重复出现。重复的部分叫循环节。', label: '定义' },
          { type: 'example', content: '2÷7=0.285714285714...，循环节是285714，记作0.2̇8571̇4̇。', label: '多位循环节' },
          { type: 'tip', content: '简便记法：在循环节的首位和末位上各点一个点。如0.333...记作0.3̇。', label: '简便记法' },
          { type: 'animation', content: '1÷3=0.333...循环出现的过程', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '认识循环小数',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '1÷3：1÷3=0余1', ttsNarration: '1除以3等于0余1' },
                  { id: 's2', description: '10÷3=3余1', ttsNarration: '10除以3等于3余1' },
                  { id: 's3', description: '余数1又出现，商3重复', ttsNarration: '余数1又出现，商3不断重复' },
                  { id: 's4', description: '0.333...是循环小数', ttsNarration: '0.333...是循环小数' },
                ]
              },
              ttsNarration: '当余数重复出现时，商就变成循环小数。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u3l4q1',
            type: 'choice',
            question: '下面哪个是循环小数？',
            options: ['0.333...', '0.35', '0.125', '3.14'],
            answer: '0.333...',
            hint: '哪个数的小数部分有数字重复',
            explanation: '0.333...的小数部分3不断重复出现，是循环小数。其他选项小数部分不重复。'
          },
          {
            id: 'm5u3l4q2',
            type: 'fill',
            question: '1÷3=0.333...，循环节是___',
            answer: '3',
            hint: '哪个数字在重复',
            explanation: '0.333...中数字3不断重复，所以循环节是3。'
          },
          {
            id: 'm5u3l4q3',
            type: 'choice',
            question: '0.333...用简便记法表示是？',
            options: ['0.3̇', '0.3', '0.3̄', '0.33'],
            answer: '0.3̇',
            hint: '在循环节上加点',
            explanation: '循环节是3（一位），在3上点一个点，记作0.3̇。'
          },
          {
            id: 'm5u3l4q4',
            type: 'fill',
            question: '5÷6=0.8333...，循环节是___',
            answer: '3',
            hint: '从哪一位开始重复',
            explanation: '5÷6=0.8333...，从第二位小数开始3不断重复，循环节是3。'
          },
          {
            id: 'm5u3l4q5',
            type: 'choice',
            question: '下面说法正确的是？',
            options: ['循环小数是无限小数', '循环小数是有限小数', '循环小数没有循环节', '所有小数都是循环小数'],
            answer: '循环小数是无限小数',
            hint: '循环小数的小数部分会一直重复',
            explanation: '循环小数的小数部分无限重复，所以是无限小数。有限小数的小数部分位数有限。'
          },
          {
            id: 'm5u3l4q6',
            type: 'fill',
            question: '1÷7=0.142857142857...，循环节是___',
            answer: '142857',
            hint: '找重复的数字序列',
            explanation: '1÷7=0.142857142857...，数字序列142857不断重复，循环节是142857。'
          },
          {
            id: 'm5u3l4q7',
            type: 'choice',
            question: '循环小数0.333...保留两位小数是？',
            options: ['0.33', '0.34', '0.30', '0.333'],
            answer: '0.33',
            hint: '[商的近似数]（数学五年级-第3单元-第3课）',
            explanation: '0.333...保留两位小数看第三位3<5舍去，得0.33。回顾四舍五入求近似数的方法。'
          }
        ]
      },
      {
        id: 'm5u3l5',
        title: '小数除法综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测小数除法',
        iDo: '家长示范综合题，讲解小数除法的各种题型和解题策略。',
        weDo: '亲子一起竞速做题，比比谁算得又快又准。',
        youDo: '孩子独立完成小数除法综合检测。',
        parentTips: '检测前回顾：小数除以整数、除以小数、商的近似数、循环小数。',
        funElement: '小游戏：小数除法达人挑战赛——20题竞速！歇后语：熟能生巧——越练越快',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|小数除法达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|小数除法达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|小数除法知识总结图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课综合检测小数除法知识，包括小数除以整数、一个数除以小数、商的近似数和循环小数。' },
          { type: 'example', content: '综合题：12.6÷0.3=126÷3=42，把除数变整数再除。', label: '综合计算' },
          { type: 'tip', content: '检测要点：1.小数点对齐 2.小数点移动 3.四舍五入 4.循环小数辨认', label: '检测要点' },
          { type: 'example', content: '综合题：10÷3=3.333...是循环小数，循环节是3，记作3.3̇。', label: '循环小数' },
          { type: 'tip', content: '易错点：小数点移动位数不一致、商0忘记点小数点、四舍五入看错位。', label: '易错点' },
          { type: 'animation', content: '小数除法知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '小数除法知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '除以整数', back: '商的小数点对齐被除数', ttsText: '小数除以整数' },
                  { id: 'c2', front: '除以小数', back: '除数变整数，被除数同移', ttsText: '一个数除以小数' },
                  { id: 'c3', front: '商的近似数', back: '多除一位再四舍五入', ttsText: '商的近似数' },
                  { id: 'c4', front: '循环小数', back: '小数部分数字重复出现', ttsText: '循环小数' },
                ]
              },
              ttsNarration: '小数除法四大知识点总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u3l5q1',
            type: 'choice',
            question: '12.6÷0.3等于多少？',
            options: ['42', '4.2', '0.42', '420'],
            answer: '42',
            hint: '0.3变3，12.6变126',
            explanation: '12.6÷0.3：0.3变3（右移1位），12.6变126（也右移1位），126÷3=42。'
          },
          {
            id: 'm5u3l5q2',
            type: 'fill',
            question: '2.8÷0.4=___',
            answer: '7',
            hint: '0.4变4，2.8变28',
            explanation: '2.8÷0.4：0.4变4，2.8变28，28÷4=7。'
          },
          {
            id: 'm5u3l5q3',
            type: 'choice',
            question: '下面算式中，商最大的是？',
            options: ['6÷0.5', '6÷0.3', '6÷1.5', '6÷2'],
            answer: '6÷0.3',
            hint: '除数越小商越大',
            explanation: '除数越小商越大。0.3<0.5<1.5<2，所以6÷0.3的商最大（=20）。'
          },
          {
            id: 'm5u3l5q4',
            type: 'fill',
            question: '15÷7≈___（保留两位小数）',
            answer: '2.14',
            hint: '15÷7=2.142...',
            explanation: '15÷7=2.1428...，保留两位小数看第三位2<5舍去，得2.14。'
          },
          {
            id: 'm5u3l5q5',
            type: 'choice',
            question: '一个数（0除外）除以0.8，商比原数？',
            options: ['大', '小', '相等', '无法确定'],
            answer: '大',
            hint: '0.8<1，除以小于1的数',
            explanation: '0.8<1，一个数（0除外）除以小于1的数，商比原数大。同理除以大于1的数，商比原数小。'
          },
          {
            id: 'm5u3l5q6',
            type: 'fill',
            question: '小明花10.5元买了3千克苹果，每千克___元',
            answer: '3.5',
            hint: '10.5÷3',
            explanation: '10.5÷3=3.5元/千克。10÷3=3余1，点小数点，落下5得15，15÷3=5，商是3.5。'
          },
          {
            id: 'm5u3l5q7',
            type: 'choice',
            question: '4.8÷0.12的结果和下面哪个算式相等？',
            options: ['480÷12', '48÷12', '4.8÷12', '0.48÷12'],
            answer: '480÷12',
            hint: '[一个数除以小数]（数学五年级-第3单元-第2课）',
            explanation: '4.8÷0.12：0.12变12（右移2位），4.8变480（右移2位补0），480÷12=40。所以4.8÷0.12=480÷12。'
          }
        ]
      }
    ]
  },
  {
    id: 'm5u4',
    title: '可能性',
    subtitle: '认识可能性的大小，判断游戏规则的公平性',
    order: 4,
    lessons: [
      {
        id: 'm5u4l1',
        title: '可能性的大小',
        order: 1,
        teachingMethod: 'CPA·C→P：实物操作，体验可能性大小',
        iDo: '家长准备一个袋子放5个红球1个白球，示范摸球：摸到红球的可能性大。',
        weDo: '亲子一起摸球20次，记录结果，发现红球出现次数多。',
        youDo: '孩子独立判断不同情况下可能性的大小。',
        parentTips: '可能性大小与数量有关：数量越多，摸到的可能性越大。',
        funElement: '小游戏：摸球大猜想——猜猜会摸到什么颜色？歇后语：瞎子摸象——各有各的说法',
        gsapAnimations: [
          '[GSAP:sceneBuild|袋子+不同颜色球+摸球动画|1.5s|点击播放|power2.out]',
          '[GSAP:stagger|球逐一出现展示数量|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|袋子中不同颜色球的数量图|500x300|可爱卡通风|png|摸球场景]',
          '[IMG:illustration|可能性大小比较图|400x200|教学风|png|大小比较]'
        ],
        content: [
          { type: 'text', content: '生活中很多事情有可能发生，有可能不发生。事件发生的可能性有大有小，我们一起来探索吧！' },
          { type: 'example', content: '袋子里有5个红球和1个白球，摸到红球的可能性大，因为红球数量多。', label: '可能性示例' },
          { type: 'tip', content: '可能性大小看数量：某种情况的数量越多，发生的可能性越大。', label: '可能性口诀' },
          { type: 'example', content: '抛硬币：正面和反面可能性一样大，因为只有1个正面和1个反面。', label: '等可能事件' },
          { type: 'tip', content: '一定发生的事件可能性最大，不可能发生的事件可能性最小（为0）。', label: '特殊事件' },
          { type: 'animation', content: '袋子中不同颜色球展示，摸球过程动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '可能性的大小',
              sceneBuildConfig: {
                sceneName: '摸球实验',
                elements: [
                  { id: 'e1', emoji: '🔴', text: '红球×5', x: 30, y: 30, size: 'md', color: '#e74c3c', animation: 'popIn' },
                  { id: 'e2', emoji: '⚪', text: '白球×1', x: 60, y: 30, size: 'md', color: '#95a5a6', animation: 'popIn' },
                  { id: 'e3', emoji: '袋子', text: '摸到红球可能性大', x: 50, y: 60, size: 'lg', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '红球5个白球1个，摸到红球的可能性大。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u4l1q1',
            type: 'choice',
            question: '袋子里有5个红球和1个白球，任意摸一个，摸到什么颜色的可能性大？',
            options: ['红球', '白球', '一样大', '无法确定'],
            answer: '红球',
            hint: '哪种球数量多？',
            explanation: '红球有5个，白球只有1个，红球数量多，所以摸到红球的可能性大。'
          },
          {
            id: 'm5u4l1q2',
            type: 'fill',
            question: '抛一枚硬币，正面朝上的可能性和反面朝上的可能性___（填"相等"或"不等"）',
            answer: '相等',
            hint: '硬币只有两面',
            explanation: '硬币只有正面和反面，各一个，所以正面朝上和反面朝上的可能性相等。'
          },
          {
            id: 'm5u4l1q3',
            type: 'choice',
            question: '下面哪个事件是"一定发生"的？',
            options: ['太阳从东方升起', '明天会下雨', '抛硬币正面朝上', '摸彩票中奖'],
            answer: '太阳从东方升起',
            hint: '哪个是确定的事实',
            explanation: '太阳从东方升起是一定发生的事件（确定性事件）。其他都是不确定事件。'
          },
          {
            id: 'm5u4l1q4',
            type: 'fill',
            question: '袋子里有3个红球和7个黄球，任意摸一个，摸到___球的可能性大',
            answer: '黄',
            hint: '哪种球多？',
            explanation: '黄球有7个，红球有3个，黄球数量多，所以摸到黄球的可能性大。'
          },
          {
            id: 'm5u4l1q5',
            type: 'choice',
            question: '一个骰子六个面分别写1-6，掷一次，掷出每个数字的可能性？',
            options: ['一样大', '6最大', '1最小', '无法确定'],
            answer: '一样大',
            hint: '每个面出现的概率',
            explanation: '骰子有6个面，每个面出现的可能性一样大，都是1/6。'
          },
          {
            id: 'm5u4l1q6',
            type: 'fill',
            question: '袋子里有10个球，其中红球4个。摸到红球的可能性比摸到不是红球的可能性___（填"大"或"小"）',
            answer: '小',
            hint: '红球4个，非红球6个',
            explanation: '红球4个，非红球6个。红球数量少，所以摸到红球的可能性比摸到非红球的可能性小。'
          },
          {
            id: 'm5u4l1q7',
            type: 'choice',
            question: '如果袋子里全是红球，摸到白球的可能性是？',
            options: ['不可能（0）', '很大', '很小', '一半'],
            answer: '不可能（0）',
            hint: '[可能性的大小]（数学五年级-第4单元-第1课）',
            explanation: '袋子里全是红球，没有白球，所以摸到白球是不可能事件，可能性为0。回顾可能性大小的概念。'
          }
        ]
      },
      {
        id: 'm5u4l2',
        title: '可能性的大小比较',
        order: 2,
        teachingMethod: '探究式，比较不同情况的可能性大小',
        iDo: '家长示范：袋子里3红2白1黄，摸到红球可能性>白球>黄球。',
        weDo: '亲子一起比较不同颜色球的可能性大小，用">"连接。',
        youDo: '孩子独立比较和排列可能性的大小。',
        parentTips: '可能性大小比较：看各种情况的数量，数量多的可能性大。',
        funElement: '小游戏：可能性大比拼——排列可能性大小！歇后语：不怕不识货——就怕货比货',
        gsapAnimations: [
          '[GSAP:compare|三种颜色球可能性大小对比|0.8s|页面加载|power2.out]',
          '[GSAP:stagger|不同颜色球分组出现|0.6s|点击播放|power2.out]'
        ],
        images: [
          '[IMG:illustration|三种颜色球可能性比较图|500x300|教学风|png|大小对比]',
          '[IMG:illustration|可能性大小排列图|400x200|教学风|png|排列示意]'
        ],
        content: [
          { type: 'text', content: '当有多种情况时，我们可以比较它们可能性的大小。数量越多的，可能性越大。' },
          { type: 'example', content: '袋子有3红2白1黄：红球(3)>白球(2)>黄球(1)，可能性：红>白>黄。', label: '比较示例' },
          { type: 'tip', content: '比较方法：数每种情况的数量，数量多的可能性大，数量少的可能性小。', label: '比较方法' },
          { type: 'example', content: '转盘分8等份，红色4份、蓝色3份、绿色1份。指针停在红色的可能性最大。', label: '转盘示例' },
          { type: 'tip', content: '可能性可以用分数表示：红球3个共6个球，摸到红球可能性=3/6=1/2。', label: '分数表示' },
          { type: 'animation', content: '三种颜色球可能性大小对比', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '可能性大小比较',
              compareConfig: {
                leftItems: ['🔴', '🔴', '🔴'],
                rightItems: ['⚪', '⚪'],
                result: 'left',
                resultText: '红球可能性>白球可能性',
              },
              ttsNarration: '红球3个白球2个，摸到红球的可能性大于白球。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u4l2q1',
            type: 'choice',
            question: '袋子里有4红3白2黄，任意摸一个，可能性从大到小排列是？',
            options: ['红>白>黄', '黄>白>红', '白>红>黄', '红>黄>白'],
            answer: '红>白>黄',
            hint: '比较每种球的数量',
            explanation: '红球4个最多，白球3个次之，黄球2个最少。可能性：红(4)>白(3)>黄(2)。'
          },
          {
            id: 'm5u4l2q2',
            type: 'fill',
            question: '转盘分6等份，红色3份蓝色2份绿色1份。指针停在___色的可能性最大',
            answer: '红',
            hint: '哪种颜色份数最多',
            explanation: '红色3份最多，所以指针停在红色的可能性最大。'
          },
          {
            id: 'm5u4l2q3',
            type: 'choice',
            question: '袋子里有5红5白，摸到红球的可能性是？',
            options: ['1/2', '1/5', '5/10=1/2', '1/2和5/10都对'],
            answer: '1/2和5/10都对',
            hint: '红球5个，共10个球',
            explanation: '红球5个共10个球，可能性=5/10=1/2。两种表示都对。'
          },
          {
            id: 'm5u4l2q4',
            type: 'fill',
            question: '袋子里有3红2白共5个球，摸到红球的可能性是___/___',
            answer: '3',
            hint: '红球3个共5个',
            explanation: '红球3个共5个球，摸到红球的可能性是3/5。'
          },
          {
            id: 'm5u4l2q5',
            type: 'choice',
            question: '下面哪种情况摸到红球的可能性最大？',
            options: ['5红5白', '7红3白', '3红7白', '1红9白'],
            answer: '7红3白',
            hint: '红球占比最高的是？',
            explanation: '7红3白：红球占7/10=70%，比例最高，所以摸到红球的可能性最大。'
          },
          {
            id: 'm5u4l2q6',
            type: 'fill',
            question: '一副扑克牌（不含大小王）共52张，其中红桃13张。抽到红桃的可能性是___/___',
            answer: '13',
            hint: '红桃13张共52张',
            explanation: '红桃13张共52张，抽到红桃的可能性是13/52=1/4。'
          },
          {
            id: 'm5u4l2q7',
            type: 'choice',
            question: '如果要让摸到红球和黄球的可能性相等，袋子里应该怎么放？',
            options: ['红球和黄球数量相同', '红球比黄球多', '黄球比红球多', '随便放'],
            answer: '红球和黄球数量相同',
            hint: '[可能性的大小]（数学五年级-第4单元-第1课）',
            explanation: '要让可能性相等，两种球的数量要相同。回顾可能性大小取决于数量的规则。'
          }
        ]
      },
      {
        id: 'm5u4l3',
        title: '游戏规则的公平性',
        order: 3,
        teachingMethod: '探究式，判断游戏规则是否公平',
        iDo: '家长示范：抛硬币决定谁先走，正面甲先反面乙先，规则公平因为可能性相等。',
        weDo: '亲子一起分析掷骰子游戏：大于3甲赢，小于等于3乙赢，判断是否公平。',
        youDo: '孩子独立判断各种游戏规则的公平性。',
        parentTips: '公平的游戏规则：双方赢的可能性相等。不公平的规则要修改使其公平。',
        funElement: '小游戏：公平大法官——判断游戏规则公不公平！歇后语：一碗水端平——不偏不倚',
        gsapAnimations: [
          '[GSAP:compare|公平vs不公平规则对比|0.8s|页面加载|power2.out]',
          '[GSAP:timeline|游戏规则分析步骤|1.5s|点击播放|power2.out]'
        ],
        images: [
          '[IMG:illustration|公平vs不公平游戏规则图|500x300|教学风|png|对比表]',
          '[IMG:illustration|骰子游戏规则分析图|400x300|教学风|png|规则分析]'
        ],
        content: [
          { type: 'text', content: '游戏公不公平，要看双方赢的可能性是否相等。如果可能性相等，游戏公平；否则不公平。' },
          { type: 'example', content: '抛硬币：正面甲赢，反面乙赢。正反面可能性相等，游戏公平。', label: '公平游戏' },
          { type: 'tip', content: '判断步骤：1.分析规则 2.计算各方赢的可能性 3.比较是否相等 4.下结论。', label: '判断步骤' },
          { type: 'example', content: '掷骰子：大于3甲赢（4,5,6共3种），小于等于3乙赢（1,2,3共3种）。可能性相等，公平。', label: '骰子游戏' },
          { type: 'tip', content: '修改不公平规则：调整条件使双方赢的可能性相等。', label: '修改规则' },
          { type: 'animation', content: '公平与不公平游戏规则对比', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '游戏公平性对比',
              compareConfig: {
                leftItems: ['公平：正面甲赢', '反面乙赢', '可能性相等'],
                rightItems: ['不公平：1-4甲赢', '5-6乙赢', '可能性不等'],
                result: 'equal',
                resultText: '公平=可能性相等',
              },
              ttsNarration: '公平的游戏双方赢的可能性相等。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u4l3q1',
            type: 'choice',
            question: '抛硬币决定谁先走，正面甲先反面乙先。这个规则公平吗？',
            options: ['公平', '不公平', '无法判断', '看运气'],
            answer: '公平',
            hint: '正反面可能性是否相等',
            explanation: '硬币正反面可能性相等，甲乙赢的可能性都是1/2，所以规则公平。'
          },
          {
            id: 'm5u4l3q2',
            type: 'fill',
            question: '掷骰子，大于4甲赢（5,6），小于等于4乙赢（1,2,3,4）。这个规则___（填"公平"或"不公平"）',
            answer: '不公平',
            hint: '甲赢2种，乙赢4种',
            explanation: '甲赢2种（5,6），乙赢4种（1,2,3,4），可能性不等，规则不公平。'
          },
          {
            id: 'm5u4l3q3',
            type: 'choice',
            question: '掷骰子，怎样设置规则才公平？',
            options: ['1-3甲赢，4-6乙赢', '1-4甲赢，5-6乙赢', '1-2甲赢，3-6乙赢', '1-5甲赢，6乙赢'],
            answer: '1-3甲赢，4-6乙赢',
            hint: '双方赢的种数要相等',
            explanation: '1-3甲赢（3种），4-6乙赢（3种），双方可能性相等，规则公平。'
          },
          {
            id: 'm5u4l3q4',
            type: 'fill',
            question: '袋子里有4红4白，甲摸到红球赢，乙摸到白球赢。这个规则___（填"公平"或"不公平"）',
            answer: '公平',
            hint: '红球和白球数量',
            explanation: '红球4个白球4个，甲乙赢的可能性相等，规则公平。'
          },
          {
            id: 'm5u4l3q5',
            type: 'choice',
            question: '甲乙玩摸球游戏：袋子里5红3白，甲摸到红球赢，乙摸到白球赢。这个规则公平吗？',
            options: ['不公平，甲赢可能性大', '公平', '不公平，乙赢可能性大', '无法判断'],
            answer: '不公平，甲赢可能性大',
            hint: '红球5个白球3个',
            explanation: '红球5个>白球3个，甲摸到红球的可能性大于乙摸到白球的可能性，规则不公平。'
          },
          {
            id: 'm5u4l3q6',
            type: 'fill',
            question: '袋子里5红3白，甲摸红球赢乙摸白球赢。要使规则公平，可以再放___个白球',
            answer: '2',
            hint: '让红球白球数量相等',
            explanation: '现有5红3白，再放2个白球变成5红5白，双方可能性相等，规则公平。'
          },
          {
            id: 'm5u4l3q7',
            type: 'choice',
            question: '一个游戏：转盘8等份，红色5份甲赢，蓝色3份乙赢。下面哪种修改能让游戏公平？',
            options: ['红色4份蓝色4份', '红色6份蓝色2份', '红色5份蓝色3份', '红色7份蓝色1份'],
            answer: '红色4份蓝色4份',
            hint: '[可能性的大小比较]（数学五年级-第4单元-第2课）',
            explanation: '红色4份蓝色4份时双方可能性相等，游戏公平。回顾可能性大小比较的方法。'
          }
        ]
      },
      {
        id: 'm5u4l4',
        title: '可能性应用题',
        order: 4,
        teachingMethod: '情境式，解决生活中的可能性问题',
        iDo: '家长示范：设计抽奖转盘，一等奖1份二等奖3份三等奖6份，分析中奖可能性。',
        weDo: '亲子一起设计公平的游戏规则。',
        youDo: '孩子独立解决可能性应用题。',
        parentTips: '解决可能性问题：分析各种情况的数量，比较可能性大小，判断公平性。',
        funElement: '小游戏：我是游戏设计师——设计公平的游戏！歇后语：己所不欲——勿施于人',
        gsapAnimations: [
          '[GSAP:sceneBuild|抽奖转盘+不同奖项|1.5s|点击播放|power2.out]',
          '[GSAP:timeline|可能性分析步骤|1.5s|点击播放|power2.out]'
        ],
        images: [
          '[IMG:illustration|抽奖转盘图|500x300|可爱卡通风|png|转盘+奖项]',
          '[IMG:illustration|可能性应用场景图|400x300|教学风|png|生活场景]'
        ],
        content: [
          { type: 'text', content: '可能性在生活中有很多应用：抽奖、天气预报、游戏设计等。学会分析可能性，做明智的判断。' },
          { type: 'example', content: '转盘10等份，一等奖1份二等奖3份三等奖6份。中一等奖可能性=1/10最小。', label: '抽奖分析' },
          { type: 'tip', content: '解题步骤：1.找出所有可能的结果 2.数每种情况的数量 3.比较或计算可能性。', label: '解题策略' },
          { type: 'example', content: '天气预报说降水概率80%，说明下雨的可能性很大，出门带伞。', label: '概率应用' },
          { type: 'tip', content: '可能性越大不等于一定发生，可能性越小不等于一定不发生。', label: '重要提醒' },
          { type: 'animation', content: '抽奖转盘不同奖项展示', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '可能性应用',
              sceneBuildConfig: {
                sceneName: '抽奖转盘',
                elements: [
                  { id: 'e1', emoji: '🥇', text: '一等奖 1/10', x: 50, y: 20, size: 'md', color: '#f1c40f', animation: 'popIn' },
                  { id: 'e2', emoji: '🥈', text: '二等奖 3/10', x: 30, y: 50, size: 'md', color: '#95a5a6', animation: 'fadeIn' },
                  { id: 'e3', emoji: '🥉', text: '三等奖 6/10', x: 70, y: 50, size: 'md', color: '#cd7f32', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '一等奖1份可能性最小，三等奖6份可能性最大。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u4l4q1',
            type: 'choice',
            question: '转盘10等份，一等奖1份二等奖3份三等奖6份。中哪种奖的可能性最大？',
            options: ['三等奖', '二等奖', '一等奖', '一样大'],
            answer: '三等奖',
            hint: '哪种奖份数最多',
            explanation: '三等奖6份最多，所以中三等奖的可能性最大（6/10）。'
          },
          {
            id: 'm5u4l4q2',
            type: 'fill',
            question: '转盘8等份，红色3份。指针停在红色的可能性是___/___',
            answer: '3',
            hint: '红色3份共8份',
            explanation: '红色3份共8份，停在红色的可能性是3/8。'
          },
          {
            id: 'm5u4l4q3',
            type: 'choice',
            question: '小明设计游戏：袋子里放红黄蓝球，摸到红球甲赢。要使游戏公平，红球应该占总数的多少？',
            options: ['一半', '三分之一', '四分之一', '全部'],
            answer: '一半',
            hint: '甲赢的可能性要等于乙赢的可能性',
            explanation: '要使游戏公平，甲乙赢的可能性相等，所以红球应占总数的一半（1/2）。'
          },
          {
            id: 'm5u4l4q4',
            type: 'fill',
            question: '一副扑克牌52张（不含大小王），黑桃13张。抽到黑桃的可能性是___/___',
            answer: '13',
            hint: '黑桃13张共52张',
            explanation: '黑桃13张共52张，抽到黑桃的可能性是13/52=1/4。'
          },
          {
            id: 'm5u4l4q5',
            type: 'choice',
            question: '气象台预报明天降水概率90%，下面说法正确的是？',
            options: ['明天下雨的可能性很大', '明天一定下雨', '明天一定不下雨', '明天下不下雨无法判断'],
            answer: '明天下雨的可能性很大',
            hint: '90%说明什么',
            explanation: '降水概率90%表示下雨的可能性很大，但不是一定下雨。可能性大不等于一定发生。'
          },
          {
            id: 'm5u4l4q6',
            type: 'fill',
            question: '小明从3红2白的袋子里摸一个球，摸到红球的可能性是___/___',
            answer: '3',
            hint: '红球3个共5个',
            explanation: '红球3个共5个球，摸到红球的可能性是3/5。'
          },
          {
            id: 'm5u4l4q7',
            type: 'choice',
            question: '一个不透明的袋子里有红球和黄球共10个。下面哪种情况摸到红球的可能性最小？',
            options: ['1红9黄', '3红7黄', '5红5黄', '8红2黄'],
            answer: '1红9黄',
            hint: '[可能性的大小比较]（数学五年级-第4单元-第2课）',
            explanation: '1红9黄时红球占比最少（1/10），所以摸到红球的可能性最小。回顾可能性大小比较。'
          }
        ]
      },
      {
        id: 'm5u4l5',
        title: '可能性综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测可能性知识',
        iDo: '家长示范综合题，讲解可能性的各种题型和解题策略。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成可能性综合检测。',
        parentTips: '检测前回顾：可能性大小、比较方法、公平性判断、应用题。',
        funElement: '小游戏：可能性达人挑战——综合大检测！歇后语：胸有成竹——心中有数',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|可能性达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|可能性达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|可能性知识总结图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课综合检测可能性知识，包括可能性大小、比较方法、公平性判断和实际应用。' },
          { type: 'example', content: '综合题：袋子里4红3白2黄1蓝共10个球，可能性：红(4)>白(3)>黄(2)>蓝(1)。', label: '综合分析' },
          { type: 'tip', content: '检测要点：1.可能性大小 2.比较排列 3.公平判断 4.分数表示 5.实际应用', label: '检测要点' },
          { type: 'example', content: '综合题：设计公平的摸球游戏，红白球各5个，甲摸红赢乙摸白赢。', label: '设计游戏' },
          { type: 'tip', content: '易错点：混淆"可能"和"一定"、可能性大小判断错误、不公平规则未修改。', label: '易错点' },
          { type: 'animation', content: '可能性知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '可能性知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '可能性大小', back: '数量越多可能性越大', ttsText: '可能性大小' },
                  { id: 'c2', front: '比较方法', back: '数每种情况的数量', ttsText: '比较方法' },
                  { id: 'c3', front: '公平判断', back: '双方可能性相等才公平', ttsText: '公平判断' },
                  { id: 'c4', front: '分数表示', back: '该情况数÷总数', ttsText: '分数表示' },
                ]
              },
              ttsNarration: '可能性四大知识点总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u4l5q1',
            type: 'choice',
            question: '下面哪个事件是"不可能发生"的？',
            options: ['掷骰子掷出7', '明天会下雨', '抛硬币正面朝上', '摸到红球'],
            answer: '掷骰子掷出7',
            hint: '骰子最大是几？',
            explanation: '骰子只有1-6点，掷出7是不可能事件，可能性为0。'
          },
          {
            id: 'm5u4l5q2',
            type: 'fill',
            question: '袋子里有6红4白共10个球，摸到红球的可能性是___/___',
            answer: '6',
            hint: '红球6个共10个',
            explanation: '红球6个共10个球，摸到红球的可能性是6/10=3/5。'
          },
          {
            id: 'm5u4l5q3',
            type: 'choice',
            question: '甲乙玩游戏，掷骰子，甲赢的可能性是2/6，乙赢的可能性是3/6，剩下的情况平局。这个游戏公平吗？',
            options: ['不公平，乙赢可能性大', '公平', '不公平，甲赢可能性大', '无法判断'],
            answer: '不公平，乙赢可能性大',
            hint: '比较甲乙赢的可能性',
            explanation: '甲赢2/6，乙赢3/6，乙赢的可能性大于甲，游戏不公平。'
          },
          {
            id: 'm5u4l5q4',
            type: 'fill',
            question: '要使摸球游戏公平（甲摸红赢乙摸白赢），袋子里有4个红球，应该放___个白球',
            answer: '4',
            hint: '红球白球数量要相等',
            explanation: '要使游戏公平，红球白球数量相等，4个红球放4个白球。'
          },
          {
            id: 'm5u4l5q5',
            type: 'choice',
            question: '一个袋子里有1-9各一张数字卡片，任意抽一张。抽到偶数的可能性是？',
            options: ['4/9', '5/9', '1/2', '1/9'],
            answer: '4/9',
            hint: '1-9中偶数有几个',
            explanation: '1-9中偶数有2,4,6,8共4个，9张卡片，可能性=4/9。'
          },
          {
            id: 'm5u4l5q6',
            type: 'fill',
            question: '转盘12等份，红色5份。停在红色的可能性是___/___',
            answer: '5',
            hint: '红色5份共12份',
            explanation: '红色5份共12份，停在红色的可能性是5/12。'
          },
          {
            id: 'm5u4l5q7',
            type: 'choice',
            question: '甲乙玩石头剪刀布，甲赢的可能性和乙赢的可能性？',
            options: ['相等', '甲大', '乙大', '无法确定'],
            answer: '相等',
            hint: '[游戏规则的公平性]（数学五年级-第4单元-第3课）',
            explanation: '石头剪刀布双方赢的可能性相等（各1/3），还有1/3平局。回顾游戏公平性判断。'
          }
        ]
      }
    ]
  },
  {
    id: 'm5u5',
    title: '简易方程',
    subtitle: '从算术到代数，用字母表示数，解方程',
    order: 5,
    lessons: [
      {
        id: 'm5u5l1',
        title: '用字母表示数——从算术到代数',
        order: 1,
        teachingMethod: 'CPA·C→P→A：桥梁过渡，从□到x',
        iDo: '家长示范：小明今年a岁，爸爸比小明大25岁，爸爸是a+25岁。用字母表示数量关系。',
        weDo: '亲子一起用字母表示正方形周长C=4×a，面积S=a×a。',
        youDo: '孩子独立用字母表示数量关系和公式。',
        parentTips: '从□过渡到x，建立代数思维。字母可以表示任何数。',
        funElement: '小游戏：字母变变变——用字母表示生活中的数量！歇后语：代数入门——字母当家',
        gsapAnimations: [
          '[GSAP:timeline|□→x变形动画：从图形到字母|1s|点击播放|power2.inOut]',
          '[GSAP:cardReveal|字母表示数公式卡片翻转|0.5s|点击|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|□到x的桥梁过渡图|500x200|教学风|png|过渡示意]',
          '[IMG:illustration|字母表示数公式图|400x300|教学风|png|常见公式]'
        ],
        content: [
          { type: 'text', content: '以前我们用□表示未知数，现在我们要学用字母表示数，这是从算术到代数的重要一步！' },
          { type: 'example', content: '小明a岁，爸爸比小明大25岁，爸爸(a+25)岁。a可以代表任何数。', label: '字母表示数' },
          { type: 'tip', content: '字母可以表示任何数。用字母表示数使数量关系更简洁、更通用。', label: '核心思想' },
          { type: 'example', content: '正方形边长a，周长C=4a，面积S=a²。省略乘号时数字在前字母在后。', label: '公式表示' },
          { type: 'tip', content: '书写规则：a×b写作ab，a×4写作4a，a×a写作a²。数字写在前。', label: '书写规则' },
          { type: 'animation', content: '从□到x的变形动画，建立代数思维', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '从□到x',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '用□表示未知数：□+3=8', ttsNarration: '用方框表示未知数' },
                  { id: 's2', description: '□换成x：x+3=8', ttsNarration: '方框换成字母x' },
                  { id: 's3', description: 'x可以表示任何数', ttsNarration: 'x可以表示任何数' },
                  { id: 's4', description: '建立代数思维', ttsNarration: '这就是代数思维' },
                ]
              },
              ttsNarration: '从方框到字母，从算术到代数。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u5l1q1',
            type: 'choice',
            question: '小明今年a岁，爸爸比小明大25岁，爸爸今年多少岁？',
            options: ['a+25', 'a-25', '25a', '25-a'],
            answer: 'a+25',
            hint: '爸爸比小明大25岁',
            explanation: '爸爸年龄=小明年龄+25=a+25。用字母表示数量关系。'
          },
          {
            id: 'm5u5l1q2',
            type: 'fill',
            question: '正方形边长a，周长C=___',
            answer: '4a',
            hint: '正方形周长=边长×4',
            explanation: '正方形周长=4×a=4a。省略乘号，数字写在前。'
          },
          {
            id: 'm5u5l1q3',
            type: 'choice',
            question: 'a×a可以简写成什么？',
            options: ['a²', '2a', 'aa', 'a+a'],
            answer: 'a²',
            hint: '两个相同的数相乘',
            explanation: 'a×a=a²，读作a的平方。2a=a×2=a+a，注意a²和2a不同。'
          },
          {
            id: 'm5u5l1q4',
            type: 'fill',
            question: '一辆汽车每小时行v千米，t小时行___千米',
            answer: 'vt',
            hint: '路程=速度×时间',
            explanation: '路程=速度×时间=v×t=vt。省略乘号。'
          },
          {
            id: 'm5u5l1q5',
            type: 'choice',
            question: '下面书写正确的是？',
            options: ['4a（表示4×a）', 'a4（表示a×4）', 'a+4写作4a', 'a×a写作2a'],
            answer: '4a（表示4×a）',
            hint: '数字在前字母在后，乘号省略',
            explanation: '4×a写作4a（数字在前）。a4不规范，a+4不能省略加号，a×a写作a²不是2a。'
          },
          {
            id: 'm5u5l1q6',
            type: 'fill',
            question: '苹果每千克x元，买5千克应付___元',
            answer: '5x',
            hint: '总价=单价×数量',
            explanation: '总价=单价×数量=x×5=5x元。省略乘号，数字在前。'
          },
          {
            id: 'm5u5l1q7',
            type: 'choice',
            question: 'a²和2a有什么关系？',
            options: ['a²=a×a，2a=a+a，通常不相等', 'a²=2a', 'a²>2a', 'a²<2a'],
            answer: 'a²=a×a，2a=a+a，通常不相等',
            hint: '[可能性的大小]（数学五年级-第4单元-第1课）',
            explanation: 'a²=a×a，2a=a+a。当a=2时a²=2a=4，除此之外通常不相等。回顾用字母表示数的意义。'
          }
        ]
      },
      {
        id: 'm5u5l2',
        title: '方程的意义——等式与天平',
        order: 2,
        teachingMethod: 'CPA·C：天平模型，等式=天平平衡',
        iDo: '家长用天平演示：左边放x+3克，右边放8克，天平平衡表示x+3=8，这是方程。',
        weDo: '亲子一起判断哪些是方程：3+5=8（等式但不是方程），x+5=8（方程）。',
        youDo: '孩子独立判断方程和等式。',
        parentTips: '方程：含有未知数的等式。两个条件缺一不可：是等式+含未知数。',
        funElement: '小游戏：方程小侦探——找出方程！歇后语：天平两端——一视同仁',
        gsapAnimations: [
          '[GSAP:sceneBuild|天平平衡动画：x+3=8|1.5s|点击播放|power2.out]',
          '[GSAP:compare|等式vs方程对比|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|天平与等式图：x+3=8|500x300|教学风|png|天平+方程]',
          '[IMG:illustration|等式与方程关系图|400x200|教学风|png|包含关系]'
        ],
        content: [
          { type: 'text', content: '方程是什么？就像天平一样，左右两边相等就是等式。含有未知数的等式就是方程。' },
          { type: 'example', content: 'x+3=8是方程：它是等式（有=号），且含有未知数x。3+5=8是等式但不是方程（没有未知数）。', label: '方程判断' },
          { type: 'tip', content: '方程的两个条件：1.是等式（有等号）2.含有未知数。缺一不可！', label: '方程定义' },
          { type: 'example', content: '天平左边x+3克，右边8克，平衡→x+3=8。这就是方程的天平模型。', label: '天平模型' },
          { type: 'tip', content: '所有方程都是等式，但不是所有等式都是方程。方程是等式的特殊情况。', label: '包含关系' },
          { type: 'animation', content: '天平平衡动画展示方程的概念', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '方程与天平',
              sceneBuildConfig: {
                sceneName: '天平模型',
                elements: [
                  { id: 'e1', emoji: '⚖️', text: '天平', x: 50, y: 40, size: 'xl', animation: 'popIn' },
                  { id: 'e2', text: '左：x+3', x: 30, y: 30, size: 'md', color: '#e74c3c', animation: 'fadeIn' },
                  { id: 'e3', text: '右：8', x: 70, y: 30, size: 'md', color: '#3498db', animation: 'fadeIn' },
                  { id: 'e4', text: 'x+3=8 是方程', x: 50, y: 65, size: 'lg', color: '#2ecc71', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '天平平衡表示等式，含有未知数的等式就是方程。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u5l2q1',
            type: 'choice',
            question: '下面哪个是方程？',
            options: ['x+5=12', '3+5=8', 'x+5', '5>3'],
            answer: 'x+5=12',
            hint: '方程=等式+未知数',
            explanation: 'x+5=12是等式（有=号）且含有未知数x，所以是方程。3+5=8没有未知数，x+5没有等号，5>3是不等式。'
          },
          {
            id: 'm5u5l2q2',
            type: 'fill',
            question: '含有___的等式叫做方程',
            answer: '未知数',
            hint: '方程的两个条件',
            explanation: '方程的定义：含有未知数的等式。两个条件缺一不可。'
          },
          {
            id: 'm5u5l2q3',
            type: 'choice',
            question: '下面说法正确的是？',
            options: ['方程一定是等式', '等式一定是方程', '方程不一定是等式', '等式和方程无关'],
            answer: '方程一定是等式',
            hint: '方程是特殊的等式',
            explanation: '方程是含有未知数的等式，所以方程一定是等式。但等式不一定含未知数，所以不一定是方程。'
          },
          {
            id: 'm5u5l2q4',
            type: 'fill',
            question: '天平左边放x克，右边放50克，天平平衡。写出方程：___=50',
            answer: 'x',
            hint: '天平平衡=等式',
            explanation: '天平平衡表示左右相等，左边x=右边50，方程是x=50。'
          },
          {
            id: 'm5u5l2q5',
            type: 'choice',
            question: '下面哪组中都是方程？',
            options: ['x=5, 2x+1=7', '3+2=5, x=5', 'x+1, 2x=6', '5>3, x=2'],
            answer: 'x=5, 2x+1=7',
            hint: '每个都必须是等式且含未知数',
            explanation: 'x=5和2x+1=7都是含有未知数的等式，都是方程。其他选项中有不是方程的。'
          },
          {
            id: 'm5u5l2q6',
            type: 'fill',
            question: '比a多5的数等于15，写成方程是___=15',
            answer: 'a+5',
            hint: '比a多5就是a+5',
            explanation: '比a多5的数是a+5，等于15，方程是a+5=15。'
          },
          {
            id: 'm5u5l2q7',
            type: 'choice',
            question: 'x+3=8中，x表示什么？',
            options: ['一个未知数，它的值使等式成立', '一个固定的字母', '一个运算符号', '一个数字'],
            answer: '一个未知数，它的值使等式成立',
            hint: '[用字母表示数]（数学五年级-第5单元-第1课）',
            explanation: '方程中的x是未知数，我们需要求出使等式成立的x的值。回顾用字母表示数的意义。'
          }
        ]
      },
      {
        id: 'm5u5l3',
        title: '解方程——等式性质',
        order: 3,
        teachingMethod: '支架式：天平原理，等式两边同加减同数',
        iDo: '家长示范解x+5=12：等式两边同时减5，x+5-5=12-5，x=7。',
        weDo: '亲子一起解3x=15：等式两边同时除以3，x=5。',
        youDo: '孩子独立解简单方程。',
        parentTips: '等式性质：两边同加减同数，等式仍成立。两边同乘除同数（0除外），等式仍成立。',
        funElement: '小游戏：方程解密——求出未知数的值！歇后语：天平两端——同增同减',
        gsapAnimations: [
          '[GSAP:timeline|天平两边同时加减动画|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|等式两边同时操作高亮|0.5s|步骤切换|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|等式性质示意图：天平加减|500x200|教学风|png|天平加减]',
          '[IMG:illustration|解方程步骤图|400x300|教学风|png|解题步骤]'
        ],
        content: [
          { type: 'text', content: '解方程就是求出未知数的值。利用等式性质，像天平一样，两边同时操作保持平衡。' },
          { type: 'example', content: '解x+5=12：两边同时减5→x+5-5=12-5→x=7。检验：7+5=12✓', label: '解方程示例' },
          { type: 'tip', content: '等式性质1：两边同加（减）同数，等式仍成立。等式性质2：两边同乘（除）同数（0除外），等式仍成立。', label: '等式性质' },
          { type: 'example', content: '解3x=15：两边同时除以3→3x÷3=15÷3→x=5。检验：3×5=15✓', label: '乘除方程' },
          { type: 'tip', content: '解方程后要检验：把求出的值代入原方程，看左右两边是否相等。', label: '检验习惯' },
          { type: 'animation', content: '天平两边同时加减的动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '等式性质与解方程',
              timelineConfig: {
                steps: [
                  { id: 's1', description: 'x+5=12，天平平衡', ttsNarration: 'x加5等于12，天平平衡' },
                  { id: 's2', description: '两边同时减5', ttsNarration: '两边同时减去5' },
                  { id: 's3', description: 'x+5-5=12-5', ttsNarration: 'x加5减5等于12减5' },
                  { id: 's4', description: 'x=7，检验7+5=12', ttsNarration: 'x等于7，检验7加5等于12' },
                ]
              },
              ttsNarration: '利用等式性质解方程，两边同时操作保持平衡。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u5l3q1',
            type: 'choice',
            question: '解方程x+8=20，x等于多少？',
            options: ['12', '28', '20', '8'],
            answer: '12',
            hint: '两边同时减8',
            explanation: 'x+8=20，两边同时减8：x+8-8=20-8，x=12。检验：12+8=20✓'
          },
          {
            id: 'm5u5l3q2',
            type: 'fill',
            question: '解方程x-7=15，x=___',
            answer: '22',
            hint: '两边同时加7',
            explanation: 'x-7=15，两边同时加7：x-7+7=15+7，x=22。检验：22-7=15✓'
          },
          {
            id: 'm5u5l3q3',
            type: 'choice',
            question: '解方程3x=21，x等于多少？',
            options: ['7', '63', '18', '24'],
            answer: '7',
            hint: '两边同时除以3',
            explanation: '3x=21，两边同时除以3：3x÷3=21÷3，x=7。检验：3×7=21✓'
          },
          {
            id: 'm5u5l3q4',
            type: 'fill',
            question: '解方程x÷4=5，x=___',
            answer: '20',
            hint: '两边同时乘4',
            explanation: 'x÷4=5，两边同时乘4：x÷4×4=5×4，x=20。检验：20÷4=5✓'
          },
          {
            id: 'm5u5l3q5',
            type: 'choice',
            question: '解方程2x+3=11，第一步应该怎么做？',
            options: ['两边同时减3', '两边同时除以2', '两边同时加3', '两边同时乘2'],
            answer: '两边同时减3',
            hint: '先把3移到右边',
            explanation: '2x+3=11，第一步两边同时减3：2x=11-3=8，再两边除以2：x=4。'
          },
          {
            id: 'm5u5l3q6',
            type: 'fill',
            question: '解方程5x-4=16，x=___',
            answer: '4',
            hint: '先两边加4，再两边除以5',
            explanation: '5x-4=16，两边加4：5x=20，两边除以5：x=4。检验：5×4-4=16✓'
          },
          {
            id: 'm5u5l3q7',
            type: 'choice',
            question: '解方程时为什么要检验？',
            options: ['确认求出的值使等式成立', '因为老师要求', '没有特别原因', '为了多写一步'],
            answer: '确认求出的值使等式成立',
            hint: '[方程的意义]（数学五年级-第5单元-第2课）',
            explanation: '检验是把求出的值代入原方程，确认等式成立，确保答案正确。回顾方程是等式的概念。'
          }
        ]
      },
      {
        id: 'm5u5l4',
        title: '列方程解应用题',
        order: 4,
        teachingMethod: '情境式，找等量关系→设未知数→列方程→解方程',
        iDo: '家长示范：小明比小红多5本书，两人共25本，小红有几本？设小红x本，x+(x+5)=25。',
        weDo: '亲子一起列方程解：一个数的3倍加2等于14，求这个数。',
        youDo: '孩子独立列方程解应用题。',
        parentTips: '列方程四步：1.找等量关系 2.设未知数 3.列方程 4.解方程并检验。',
        funElement: '小游戏：方程应用大师——用方程解决生活问题！歇后语：对症下药——找等量关系',
        gsapAnimations: [
          '[GSAP:timeline|列方程四步骤展开|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|等量关系高亮|0.5s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|列方程解题步骤图|500x300|教学风|png|四步流程]',
          '[IMG:illustration|等量关系分析图|400x300|教学风|png|等量分析]'
        ],
        content: [
          { type: 'text', content: '列方程解应用题的关键是找到等量关系，把它翻译成方程。四步走：设、列、解、验。' },
          { type: 'example', content: '一个数x的3倍加2等于14：3x+2=14，解：3x=12，x=4。', label: '列方程示例' },
          { type: 'tip', content: '四步法：1.设未知数x 2.根据等量关系列方程 3.解方程 4.检验并写答。', label: '解题步骤' },
          { type: 'example', content: '小明x岁，爸爸x+28岁，爸爸40岁。方程：x+28=40，x=12。', label: '年龄问题' },
          { type: 'tip', content: '找等量关系的关键词："共"=加，"比...多"=加，"比...少"=减，"倍"=乘。', label: '关键词' },
          { type: 'animation', content: '列方程四步骤展开动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '列方程解应用题',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '第一步：设未知数x', ttsNarration: '第一步设未知数x' },
                  { id: 's2', description: '第二步：找等量关系列方程', ttsNarration: '第二步找等量关系列方程' },
                  { id: 's3', description: '第三步：解方程', ttsNarration: '第三步解方程' },
                  { id: 's4', description: '第四步：检验并写答', ttsNarration: '第四步检验并写答' },
                ]
              },
              ttsNarration: '列方程解应用题四步走。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u5l4q1',
            type: 'choice',
            question: '一个数的3倍加2等于14，设这个数为x，方程是？',
            options: ['3x+2=14', '3x-2=14', '3(x+2)=14', 'x+3+2=14'],
            answer: '3x+2=14',
            hint: '3倍是3x，加2，等于14',
            explanation: '一个数的3倍=3x，加2=3x+2，等于14，方程是3x+2=14。解：3x=12，x=4。'
          },
          {
            id: 'm5u5l4q2',
            type: 'fill',
            question: '小明有x颗糖，小红比小明多3颗，两人共17颗。方程是x+(x+3)=17，x=___',
            answer: '7',
            hint: '2x+3=17，2x=14',
            explanation: 'x+(x+3)=17→2x+3=17→2x=14→x=7。小明7颗，小红10颗，共17颗✓'
          },
          {
            id: 'm5u5l4q3',
            type: 'choice',
            question: '小明比小红多5本书，两人共25本。设小红有x本，方程是？',
            options: ['x+(x+5)=25', 'x+5=25', 'x-x+5=25', '2x-5=25'],
            answer: 'x+(x+5)=25',
            hint: '小红x本，小明x+5本，共25本',
            explanation: '小红x本，小明(x+5)本，共25本：x+(x+5)=25。解：2x=20，x=10。小红10本，小明15本。'
          },
          {
            id: 'm5u5l4q4',
            type: 'fill',
            question: '一个数减去5等于12，设这个数为x，x=___',
            answer: '17',
            hint: 'x-5=12',
            explanation: 'x-5=12，两边加5：x=17。检验：17-5=12✓'
          },
          {
            id: 'm5u5l4q5',
            type: 'choice',
            question: '苹果每千克5元，买x千克花了30元。方程是？',
            options: ['5x=30', 'x+5=30', 'x-5=30', '5+x=30'],
            answer: '5x=30',
            hint: '总价=单价×数量',
            explanation: '总价=单价×数量=5×x=5x=30。解：x=6。买了6千克。'
          },
          {
            id: 'm5u5l4q6',
            type: 'fill',
            question: '一个数的4倍减去3等于17，设这个数为x，x=___',
            answer: '5',
            hint: '4x-3=17',
            explanation: '4x-3=17，两边加3：4x=20，两边除以4：x=5。检验：4×5-3=17✓'
          },
          {
            id: 'm5u5l4q7',
            type: 'choice',
            question: '列方程解应用题时，第一步应该做什么？',
            options: ['找等量关系', '直接列方程', '解方程', '写答案'],
            answer: '找等量关系',
            hint: '[解方程]（数学五年级-第5单元-第3课）',
            explanation: '列方程解应用题第一步是找等量关系，然后设未知数，列方程，解方程。回顾解方程的方法。'
          }
        ]
      },
      {
        id: 'm5u5l5',
        title: '方程综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测简易方程知识',
        iDo: '家长示范综合题，讲解用字母表示数、方程意义、解方程和列方程应用题。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成方程综合检测。',
        parentTips: '检测前回顾：字母表示数、方程定义、等式性质、列方程四步法。',
        funElement: '小游戏：方程达人挑战——综合大检测！歇后语：水到渠成——顺理成章',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|方程达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|方程达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|简易方程知识总结图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课综合检测简易方程知识，包括用字母表示数、方程的意义、解方程和列方程解应用题。' },
          { type: 'example', content: '综合题：解方程5x-8=22，两边加8：5x=30，两边除以5：x=6。', label: '综合计算' },
          { type: 'tip', content: '检测要点：1.字母表示数 2.方程判断 3.等式性质解方程 4.列方程应用题', label: '检测要点' },
          { type: 'example', content: '综合题：小红x岁，妈妈4x岁，妈妈比小红大27岁。方程：4x-x=27，3x=27，x=9。', label: '综合应用' },
          { type: 'tip', content: '易错点：混淆方程和等式、解方程步骤错误、列方程时等量关系找错。', label: '易错点' },
          { type: 'animation', content: '简易方程知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '简易方程知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '字母表示数', back: '用字母表示任何数', ttsText: '字母表示数' },
                  { id: 'c2', front: '方程', back: '含未知数的等式', ttsText: '方程的意义' },
                  { id: 'c3', front: '解方程', back: '等式性质，两边同操作', ttsText: '解方程' },
                  { id: 'c4', front: '列方程', back: '找等量关系→设→列→解', ttsText: '列方程应用' },
                ]
              },
              ttsNarration: '简易方程四大知识点总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u5l5q1',
            type: 'choice',
            question: '下面哪个是方程？',
            options: ['2x+1=9', '2+1=3', '2x+1', 'x>3'],
            answer: '2x+1=9',
            hint: '方程=等式+未知数',
            explanation: '2x+1=9是等式且含未知数x，是方程。2+1=3无未知数，2x+1无等号，x>3是不等式。'
          },
          {
            id: 'm5u5l5q2',
            type: 'fill',
            question: '解方程4x+5=25，x=___',
            answer: '5',
            hint: '两边减5，再除以4',
            explanation: '4x+5=25，两边减5：4x=20，两边除以4：x=5。检验：4×5+5=25✓'
          },
          {
            id: 'm5u5l5q3',
            type: 'choice',
            question: '下面哪个数同时是2、3、5的倍数？',
            options: ['15', '30', '45', '50'],
            answer: '30',
            hint: '同时满足2的倍数（末尾偶数）、3的倍数（各位和是3的倍数）、5的倍数（末尾0或5）',
            explanation: '30末尾是0（2和5的倍数），3+0=3是3的倍数。15不是2的倍数，45不是2的倍数，50不是3的倍数。'
          },
          {
            id: 'm5u5l5q4',
            type: 'fill',
            question: '一个数x的5倍减去7等于18，解得x=___',
            answer: '5',
            hint: '5x-7=18',
            explanation: '5x-7=18，两边加7：5x=25，两边除以5：x=5。检验：5×5-7=18✓'
          },
          {
            id: 'm5u5l5q5',
            type: 'choice',
            question: '甲乙两数和是30，甲是乙的2倍。设乙为x，方程是？',
            options: ['x+2x=30', '2x=30', 'x+2=30', '2x-x=30'],
            answer: 'x+2x=30',
            hint: '乙x，甲2x，共30',
            explanation: '乙x，甲2x，和=30：x+2x=30，3x=30，x=10。乙10，甲20。'
          },
          {
            id: 'm5u5l5q6',
            type: 'fill',
            question: '长方形周长24厘米，长是宽的2倍。设宽x厘米，方程2(x+2x)=24，x=___',
            answer: '4',
            hint: '2(x+2x)=24→6x=24',
            explanation: '2(x+2x)=24→6x=24→x=4。宽4厘米，长8厘米。检验：2×(4+8)=24✓'
          },
          {
            id: 'm5u5l5q7',
            type: 'choice',
            question: '方程2x+3=11的解和下面哪个方程的解相同？',
            options: ['2x=8', 'x+3=11', '2x=11', 'x=8'],
            answer: '2x=8',
            hint: '[解方程]（数学五年级-第5单元-第3课）',
            explanation: '2x+3=11，解得x=4。2x=8，解得x=4。解相同。回顾解方程的等式性质。'
          }
        ]
      }
    ]
  },
  {
    id: 'm5u6',
    title: '多边形的面积',
    subtitle: '探索平行四边形、三角形、梯形的面积公式',
    order: 6,
    lessons: [
      {
        id: 'm5u6l1',
        title: '平行四边形面积——割补法',
        order: 1,
        teachingMethod: 'CPA·P→A：剪拼操作，割补转化为长方形',
        iDo: '家长用纸片剪一个平行四边形，沿高剪开，平移拼成长方形。面积=底×高。',
        weDo: '亲子一起推导：长方形的长=平行四边形的底，宽=平行四边形的高，面积=底×高。',
        youDo: '孩子独立计算平行四边形面积。',
        parentTips: '平行四边形面积=底×高（S=ah）。注意底和高要对应。',
        funElement: '小游戏：割补魔术——把平行四边形变成长方形！歇后语：移花接木——巧妙转化',
        gsapAnimations: [
          '[GSAP:shapeDraw|平行四边形沿高剪开平移拼成长方形|2s|点击播放|power2.out]',
          '[GSAP:highlight|底和高对应关系高亮|0.6s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|平行四边形割补成长方形图|500x300|教学风|png|割补过程]',
          '[IMG:illustration|平行四边形面积公式图|400x200|教学风|png|公式标注]'
        ],
        content: [
          { type: 'text', content: '平行四边形的面积怎么求？我们可以用割补法，把它转化成已经学过的长方形！' },
          { type: 'example', content: '沿平行四边形的高剪开，把左边的三角形平移到右边，拼成一个长方形。', label: '割补法' },
          { type: 'tip', content: '推导：长方形的长=平行四边形的底，宽=高。S长方形=长×宽→S平行四边形=底×高。', label: '公式推导' },
          { type: 'example', content: '底6厘米高4厘米的平行四边形，面积=6×4=24平方厘米。', label: '例题' },
          { type: 'tip', content: '注意：底和高必须对应。不同的底对应不同的高。', label: '易错提醒' },
          { type: 'animation', content: '平行四边形沿高剪开平移拼成长方形', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '平行四边形割补法',
              shapeDrawConfig: {
                shape: '平行四边形割补',
                labels: ['平行四边形', '长方形（割补后）'],
              },
              ttsNarration: '沿高剪开平移，平行四边形变成长方形，面积=底×高。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u6l1q1',
            type: 'choice',
            question: '平行四边形的面积公式是？',
            options: ['底×高', '底×高÷2', '（底+底）×高', '底+高'],
            answer: '底×高',
            hint: '割补成长方形后推导',
            explanation: '平行四边形割补成长方形，长=底，宽=高，面积=底×高（S=ah）。'
          },
          {
            id: 'm5u6l1q2',
            type: 'fill',
            question: '平行四边形底8厘米高5厘米，面积=___平方厘米',
            answer: '40',
            hint: 'S=底×高=8×5',
            explanation: 'S=ah=8×5=40平方厘米。'
          },
          {
            id: 'm5u6l1q3',
            type: 'choice',
            question: '一个平行四边形面积是36平方厘米，底是9厘米，高是多少？',
            options: ['4厘米', '6厘米', '5厘米', '3厘米'],
            answer: '4厘米',
            hint: '高=面积÷底=36÷9',
            explanation: 'h=S÷a=36÷9=4厘米。'
          },
          {
            id: 'm5u6l1q4',
            type: 'fill',
            question: '平行四边形面积是60平方米，高是6米，底是___米',
            answer: '10',
            hint: '底=面积÷高=60÷6',
            explanation: 'a=S÷h=60÷6=10米。'
          },
          {
            id: 'm5u6l1q5',
            type: 'choice',
            question: '下面两个平行四边形（等底等高）的面积关系是？',
            options: ['相等', '不等', '无法比较', '看形状'],
            answer: '相等',
            hint: '面积只与底和高有关',
            explanation: '等底等高的平行四边形面积相等。面积只与底和高有关，与形状（倾斜程度）无关。'
          },
          {
            id: 'm5u6l1q6',
            type: 'fill',
            question: '一个平行四边形底12分米，高比底少4分米，面积=___平方分米',
            answer: '96',
            hint: '先求高=12-4=8，再求面积',
            explanation: '高=12-4=8分米，S=12×8=96平方分米。'
          },
          {
            id: 'm5u6l1q7',
            type: 'choice',
            question: '平行四边形有两组底和高，计算面积时应该？',
            options: ['用对应的底和高相乘', '随便选一组', '两组都乘', '取较大的那组'],
            answer: '用对应的底和高相乘',
            hint: '[小数乘法]（数学五年级-第1单元-第1课）',
            explanation: '计算面积时底和高必须对应。回顾小数乘法计算基础。'
          }
        ]
      },
      {
        id: 'm5u6l2',
        title: '三角形面积——拼合法',
        order: 2,
        teachingMethod: 'CPA·P：两个完全相同的三角形拼成平行四边形',
        iDo: '家长用两个完全相同的三角形拼成一个平行四边形。三角形面积=平行四边形面积÷2=底×高÷2。',
        weDo: '亲子一起推导：两个三角形拼成的平行四边形底=三角形底，高=三角形高。',
        youDo: '孩子独立计算三角形面积。',
        parentTips: '三角形面积=底×高÷2（S=ah÷2）。别忘了除以2！',
        funElement: '小游戏：三角形双胞胎——两个一样拼一拼！歇后语：成双成对——拼在一起',
        gsapAnimations: [
          '[GSAP:shapeDraw|两个三角形旋转拼成平行四边形|2s|点击播放|power2.out]',
          '[GSAP:highlight|三角形面积=平行四边形÷2高亮|0.5s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|两个三角形拼成平行四边形图|500x300|教学风|png|拼合过程]',
          '[IMG:illustration|三角形面积公式图|400x200|教学风|png|公式标注]'
        ],
        content: [
          { type: 'text', content: '三角形的面积怎么求？用两个完全相同的三角形拼成一个平行四边形，三角形面积就是平行四边形面积的一半！' },
          { type: 'example', content: '两个完全相同的三角形拼成平行四边形。S三角形=S平行四边形÷2=底×高÷2。', label: '拼合法' },
          { type: 'tip', content: '公式：S=ah÷2。关键：别忘了除以2！', label: '面积公式' },
          { type: 'example', content: '底10厘米高6厘米的三角形，面积=10×6÷2=30平方厘米。', label: '例题' },
          { type: 'tip', content: '注意：底和高必须对应。直角三角形的两条直角边就是一组对应的底和高。', label: '易错提醒' },
          { type: 'animation', content: '两个三角形旋转拼成平行四边形', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '三角形拼合法',
              shapeDrawConfig: {
                shape: '三角形拼合',
                labels: ['三角形1', '三角形2（翻转）', '拼成的平行四边形'],
              },
              ttsNarration: '两个完全相同的三角形拼成平行四边形，三角形面积=底乘高除以2。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u6l2q1',
            type: 'choice',
            question: '三角形面积公式是？',
            options: ['底×高÷2', '底×高', '底+高', '底×高×2'],
            answer: '底×高÷2',
            hint: '两个三角形拼成平行四边形，面积是一半',
            explanation: '两个完全相同的三角形拼成平行四边形，S三角形=S平行四边形÷2=底×高÷2。'
          },
          {
            id: 'm5u6l2q2',
            type: 'fill',
            question: '三角形底8厘米高5厘米，面积=___平方厘米',
            answer: '20',
            hint: 'S=8×5÷2',
            explanation: 'S=ah÷2=8×5÷2=20平方厘米。'
          },
          {
            id: 'm5u6l2q3',
            type: 'choice',
            question: '一个三角形面积是24平方厘米，底是8厘米，高是多少？',
            options: ['6厘米', '3厘米', '4厘米', '12厘米'],
            answer: '6厘米',
            hint: '高=面积×2÷底',
            explanation: 'h=S×2÷a=24×2÷8=6厘米。注意面积公式有÷2，反推时要×2。'
          },
          {
            id: 'm5u6l2q4',
            type: 'fill',
            question: '三角形面积是45平方米，高是9米，底是___米',
            answer: '10',
            hint: '底=面积×2÷高',
            explanation: 'a=S×2÷h=45×2÷9=10米。'
          },
          {
            id: 'm5u6l2q5',
            type: 'choice',
            question: '一个直角三角形两条直角边分别是6厘米和8厘米，面积是？',
            options: ['24平方厘米', '48平方厘米', '12平方厘米', '14平方厘米'],
            answer: '24平方厘米',
            hint: '直角边就是底和高',
            explanation: '直角三角形的两条直角边就是底和高。S=6×8÷2=24平方厘米。'
          },
          {
            id: 'm5u6l2q6',
            type: 'fill',
            question: '等底等高的三角形和平行四边形，三角形面积是平行四边形的___',
            answer: '一半',
            hint: '三角形面积=底×高÷2，平行四边形=底×高',
            explanation: '等底等高时，三角形面积=平行四边形面积÷2，即三角形面积是平行四边形的一半。'
          },
          {
            id: 'm5u6l2q7',
            type: 'choice',
            question: '计算三角形面积时最容易忘记什么？',
            options: ['除以2', '乘以2', '加底', '减高'],
            answer: '除以2',
            hint: '[平行四边形面积]（数学五年级-第6单元-第1课）',
            explanation: '三角形面积=底×高÷2，最容易忘记除以2。回顾平行四边形面积=底×高（不用除以2）。'
          }
        ]
      },
      {
        id: 'm5u6l3',
        title: '梯形面积——拼合法',
        order: 3,
        teachingMethod: 'CPA·P：两个完全相同的梯形拼成平行四边形',
        iDo: '家长用两个完全相同的梯形拼成一个平行四边形。梯形面积=（上底+下底）×高÷2。',
        weDo: '亲子一起推导：拼成的平行四边形底=上底+下底，高=梯形高。',
        youDo: '孩子独立计算梯形面积。',
        parentTips: '梯形面积=（上底+下底）×高÷2（S=(a+b)h÷2）。上底加下底，乘高除以2。',
        funElement: '小游戏：梯形拍拍乐——两个梯形拍一拍！歇后语：珠联璧合——天作之合',
        gsapAnimations: [
          '[GSAP:shapeDraw|两个梯形旋转拼成平行四边形|2s|点击播放|power2.out]',
          '[GSAP:highlight|上底+下底=平行四边形的底高亮|0.6s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|两个梯形拼成平行四边形图|500x300|教学风|png|拼合过程]',
          '[IMG:illustration|梯形面积公式图|400x200|教学风|png|公式标注]'
        ],
        content: [
          { type: 'text', content: '梯形的面积怎么求？和三角形类似，用两个完全相同的梯形拼成一个平行四边形！' },
          { type: 'example', content: '两个完全相同的梯形拼成平行四边形。平行四边形的底=上底+下底，高=梯形高。S梯形=（上底+下底）×高÷2。', label: '拼合法' },
          { type: 'tip', content: '公式：S=(a+b)h÷2。口诀：上底加下底，乘高除以二。', label: '面积公式' },
          { type: 'example', content: '上底3厘米下底7厘米高4厘米的梯形，面积=(3+7)×4÷2=20平方厘米。', label: '例题' },
          { type: 'tip', content: '特殊梯形：上底=0时是三角形（(0+b)h÷2=bh÷2），上底=下底时是平行四边形。', label: '知识联系' },
          { type: 'animation', content: '两个梯形旋转拼成平行四边形', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '梯形拼合法',
              shapeDrawConfig: {
                shape: '梯形拼合',
                labels: ['梯形1', '梯形2（翻转）', '拼成的平行四边形'],
              },
              ttsNarration: '两个完全相同的梯形拼成平行四边形，梯形面积=上底加下底乘高除以2。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u6l3q1',
            type: 'choice',
            question: '梯形面积公式是？',
            options: ['（上底+下底）×高÷2', '上底×下底×高', '（上底+下底）×高', '上底×高÷2'],
            answer: '（上底+下底）×高÷2',
            hint: '两个梯形拼成平行四边形',
            explanation: '两个梯形拼成平行四边形，底=上底+下底，S梯形=S平行四边形÷2=(上底+下底)×高÷2。'
          },
          {
            id: 'm5u6l3q2',
            type: 'fill',
            question: '梯形上底4厘米下底6厘米高5厘米，面积=___平方厘米',
            answer: '25',
            hint: 'S=(4+6)×5÷2',
            explanation: 'S=(a+b)h÷2=(4+6)×5÷2=25平方厘米。'
          },
          {
            id: 'm5u6l3q3',
            type: 'choice',
            question: '梯形面积是30平方厘米，上底3厘米下底7厘米，高是多少？',
            options: ['6厘米', '3厘米', '5厘米', '10厘米'],
            answer: '6厘米',
            hint: '高=面积×2÷(上底+下底)',
            explanation: 'h=S×2÷(a+b)=30×2÷(3+7)=60÷10=6厘米。'
          },
          {
            id: 'm5u6l3q4',
            type: 'fill',
            question: '梯形面积是48平方米，上底5米下底7米，高是___米',
            answer: '8',
            hint: '高=48×2÷(5+7)',
            explanation: 'h=S×2÷(a+b)=48×2÷12=8米。'
          },
          {
            id: 'm5u6l3q5',
            type: 'choice',
            question: '一个梯形上底和下底相等，这个图形实际上是？',
            options: ['平行四边形', '三角形', '长方形', '正方形'],
            answer: '平行四边形',
            hint: '上底=下底时只有一组对边平行且相等',
            explanation: '梯形上底=下底时，两组对边都平行且相等，就是平行四边形。面积公式也适用：(a+a)h÷2=2ah÷2=ah。'
          },
          {
            id: 'm5u6l3q6',
            type: 'fill',
            question: '一堆圆木堆成梯形，顶层4根底层10根共7层，一共有___根',
            answer: '49',
            hint: '(4+10)×7÷2',
            explanation: '用梯形面积公式：(顶层+底层)×层数÷2=(4+10)×7÷2=49根。'
          },
          {
            id: 'm5u6l3q7',
            type: 'choice',
            question: '梯形面积公式中"上底+下底"相当于什么？',
            options: ['拼成的平行四边形的底', '梯形的高', '梯形的面积', '梯形的周长'],
            answer: '拼成的平行四边形的底',
            hint: '[平行四边形面积]（数学五年级-第6单元-第1课）',
            explanation: '两个梯形拼成平行四边形，上底+下底=平行四边形的底。回顾平行四边形面积=底×高。'
          }
        ]
      },
      {
        id: 'm5u6l4',
        title: '组合图形面积——分割与添补',
        order: 4,
        teachingMethod: '探究式，分割法和添补法求组合图形面积',
        iDo: '家长示范：一个L形图形，可以分割成两个长方形，分别求面积再相加。',
        weDo: '亲子一起用添补法：把缺角补上成大长方形，减去补的部分。',
        youDo: '孩子独立用分割法或添补法求组合图形面积。',
        parentTips: '组合图形面积：分割法（分成基本图形相加）或添补法（补成大图形减去补的部分）。',
        funElement: '小游戏：图形拼拼乐——分割和添补大挑战！歇后语：化整为零——各个击破',
        gsapAnimations: [
          '[GSAP:shapeDraw|L形图形分割成两个长方形|1.5s|点击播放|power2.out]',
          '[GSAP:compare|分割法vs添补法对比|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|L形图形分割法图|500x300|教学风|png|分割示意]',
          '[IMG:illustration|L形图形添补法图|400x300|教学风|png|添补示意]'
        ],
        content: [
          { type: 'text', content: '组合图形由几个基本图形组合而成。求面积可以用分割法或添补法。' },
          { type: 'example', content: '分割法：L形分成两个长方形。长方形1面积+长方形2面积=组合图形面积。', label: '分割法' },
          { type: 'tip', content: '两种方法：分割法——分成基本图形分别计算再相加；添补法——补成大图形减去补的部分。', label: '两种方法' },
          { type: 'example', content: '添补法：L形补成大长方形10×8=80，减去补的小长方形4×4=16，面积=80-16=64。', label: '添补法' },
          { type: 'tip', content: '选择方法：看哪种方法分割/添补后的图形更简单、计算更方便。', label: '方法选择' },
          { type: 'animation', content: 'L形图形分割成两个长方形的过程', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '组合图形分割法',
              shapeDrawConfig: {
                shape: '组合图形分割',
                labels: ['L形组合图形', '长方形1', '长方形2'],
              },
              ttsNarration: '把L形图形分割成两个长方形，分别计算再相加。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u6l4q1',
            type: 'choice',
            question: '求组合图形面积的常用方法有？',
            options: ['分割法和添补法', '乘法和除法', '加法和减法', '估算法'],
            answer: '分割法和添补法',
            hint: '分成基本图形或补成大图形',
            explanation: '分割法：分成基本图形分别计算再相加。添补法：补成大图形减去补的部分。'
          },
          {
            id: 'm5u6l4q2',
            type: 'fill',
            question: '一个L形图形分成两个长方形：8×5和4×3，面积=___',
            answer: '52',
            hint: '40+12',
            explanation: '分割法：8×5+4×3=40+12=52平方单位。'
          },
          {
            id: 'm5u6l4q3',
            type: 'choice',
            question: '一个房子侧面（三角形+长方形），三角形底8米高3米，长方形8米×6米，面积是？',
            options: ['60平方米', '48平方米', '12平方米', '72平方米'],
            answer: '60平方米',
            hint: '三角形面积+长方形面积',
            explanation: '三角形面积=8×3÷2=12，长方形面积=8×6=48，总面积=12+48=60平方米。'
          },
          {
            id: 'm5u6l4q4',
            type: 'fill',
            question: '一个图形添补成长方形10×8=80，补掉的部分是4×3=12，原图形面积=___',
            answer: '68',
            hint: '80-12',
            explanation: '添补法：大图形面积-补的部分=80-12=68平方单位。'
          },
          {
            id: 'm5u6l4q5',
            type: 'choice',
            question: '一个梯形挖去一个三角形，这种组合图形用什么方法求面积？',
            options: ['梯形面积-三角形面积', '梯形面积+三角形面积', '只算梯形面积', '只算三角形面积'],
            answer: '梯形面积-三角形面积',
            hint: '挖去就是减',
            explanation: '梯形挖去三角形，剩余面积=梯形面积-三角形面积。这是添补法的逆向应用。'
          },
          {
            id: 'm5u6l4q6',
            type: 'fill',
            question: '一个长方形12×8中挖去一个底6高4的三角形，剩余面积=___平方厘米',
            answer: '84',
            hint: '长方形面积-三角形面积',
            explanation: '长方形面积=12×8=96，三角形面积=6×4÷2=12，剩余=96-12=84平方厘米。'
          },
          {
            id: 'm5u6l4q7',
            type: 'choice',
            question: '求组合图形面积时，选择分割法还是添补法的关键是？',
            options: ['看哪种方法计算更简便', '必须用分割法', '必须用添补法', '随便选都一样'],
            answer: '看哪种方法计算更简便',
            hint: '[梯形面积]（数学五年级-第6单元-第3课）',
            explanation: '根据图形特点选择更简便的方法。回顾各种基本图形的面积公式。'
          }
        ]
      },
      {
        id: 'm5u6l5',
        title: '面积综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测多边形面积',
        iDo: '家长示范综合题，讲解各种多边形面积公式和组合图形解法。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成面积综合检测。',
        parentTips: '检测前回顾：平行四边形S=ah，三角形S=ah÷2，梯形S=(a+b)h÷2，组合图形分割/添补。',
        funElement: '小游戏：面积达人挑战——综合大检测！歇后语：心中有数——面面俱到',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|面积达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|面积达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|多边形面积知识总结图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课综合检测多边形面积知识，包括平行四边形、三角形、梯形和组合图形面积。' },
          { type: 'example', content: '综合题：平行四边形底10高6→S=60；等底等高三角形→S=30；等底等高梯形(上下底和10+10=20)→S=60。', label: '综合比较' },
          { type: 'tip', content: '面积公式：S平行四边形=ah，S三角形=ah÷2，S梯形=(a+b)h÷2。', label: '公式总结' },
          { type: 'example', content: '综合题：一个梯形上底4下底8高6，面积=(4+8)×6÷2=36。', label: '综合计算' },
          { type: 'tip', content: '易错点：三角形和梯形忘记÷2、底和高不对应、组合图形分割/添补错误。', label: '易错点' },
          { type: 'animation', content: '多边形面积知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '多边形面积知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '平行四边形', back: 'S=底×高', ttsText: '平行四边形面积' },
                  { id: 'c2', front: '三角形', back: 'S=底×高÷2', ttsText: '三角形面积' },
                  { id: 'c3', front: '梯形', back: 'S=(上底+下底)×高÷2', ttsText: '梯形面积' },
                  { id: 'c4', front: '组合图形', back: '分割法或添补法', ttsText: '组合图形面积' },
                ]
              },
              ttsNarration: '多边形面积四大知识点总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u6l5q1',
            type: 'choice',
            question: '等底等高的平行四边形和三角形，面积关系是？',
            options: ['平行四边形面积是三角形的2倍', '面积相等', '三角形面积是平行四边形的2倍', '无法比较'],
            answer: '平行四边形面积是三角形的2倍',
            hint: '平行四边形S=ah，三角形S=ah÷2',
            explanation: '等底等高时，S平行四边形=ah，S三角形=ah÷2，平行四边形面积是三角形的2倍。'
          },
          {
            id: 'm5u6l5q2',
            type: 'fill',
            question: '梯形上底5下底9高6，面积=___平方厘米',
            answer: '42',
            hint: '(5+9)×6÷2',
            explanation: 'S=(5+9)×6÷2=14×6÷2=42平方厘米。'
          },
          {
            id: 'm5u6l5q3',
            type: 'choice',
            question: '一个平行四边形面积48平方厘米，底8厘米，高多少？',
            options: ['6厘米', '4厘米', '8厘米', '12厘米'],
            answer: '6厘米',
            hint: '高=面积÷底',
            explanation: 'h=S÷a=48÷8=6厘米。'
          },
          {
            id: 'm5u6l5q4',
            type: 'fill',
            question: '三角形底12高7，面积=___平方厘米',
            answer: '42',
            hint: '12×7÷2',
            explanation: 'S=12×7÷2=42平方厘米。'
          },
          {
            id: 'm5u6l5q5',
            type: 'choice',
            question: '一个组合图形由平行四边形(底8高5)和三角形(底8高3)组成，总面积是？',
            options: ['52平方厘米', '64平方厘米', '28平方厘米', '40平方厘米'],
            answer: '52平方厘米',
            hint: '平行四边形面积+三角形面积',
            explanation: '平行四边形=8×5=40，三角形=8×3÷2=12，总面积=40+12=52平方厘米。'
          },
          {
            id: 'm5u6l5q6',
            type: 'fill',
            question: '一堆钢管顶层5根底层11根共7层，一共有___根',
            answer: '56',
            hint: '(5+11)×7÷2',
            explanation: '用梯形面积公式：(5+11)×7÷2=16×7÷2=56根。'
          },
          {
            id: 'm5u6l5q7',
            type: 'choice',
            question: '等底等高的三角形和梯形（梯形上底=0），面积关系是？',
            options: ['相等', '三角形大', '梯形大', '无法比较'],
            answer: '相等',
            hint: '[三角形面积]（数学五年级-第6单元-第2课）',
            explanation: '梯形上底=0时，S=(0+b)h÷2=bh÷2=三角形面积。回顾三角形面积公式。'
          }
        ]
      }
    ]
  },
  {
    id: 'm5u7',
    title: '数学广角-植树问题',
    subtitle: '探索植树问题中的数学规律',
    order: 7,
    lessons: [
      {
        id: 'm5u7l1',
        title: '植树问题——两端都栽',
        order: 1,
        teachingMethod: 'CPA·C→P：画图操作，发现棵数与间隔数的关系',
        iDo: '家长示范：20米路每隔5米栽一棵树，两端都栽。间隔=20÷5=4，棵数=4+1=5。',
        weDo: '亲子一起画图验证：12米路每隔3米栽树，间隔=4，棵数=5。',
        youDo: '孩子独立解决两端都栽的植树问题。',
        parentTips: '两端都栽：棵数=间隔数+1。间隔数=总长÷间距。',
        funElement: '小游戏：种树小能手——两端都栽来种树！歇后语：十年树木——百年树人',
        gsapAnimations: [
          '[GSAP:sceneBuild|路上种树动画：5棵树4个间隔|1.5s|点击播放|power2.out]',
          '[GSAP:stagger|树和间隔逐一出现|0.8s|点击播放|power2.out]'
        ],
        images: [
          '[IMG:illustration|两端都栽植树图|500x200|教学风|png|5棵树4间隔]',
          '[IMG:illustration|植树问题公式图|400x300|教学风|png|公式标注]'
        ],
        content: [
          { type: 'text', content: '在一条路上种树，两端都栽，棵数和间隔数有什么关系呢？让我们画图来发现规律！' },
          { type: 'example', content: '20米路每隔5米栽一棵，两端都栽。间隔数=20÷5=4，棵数=4+1=5。', label: '两端都栽示例' },
          { type: 'tip', content: '两端都栽：棵数=间隔数+1。间隔数=总长÷间距。', label: '核心公式' },
          { type: 'example', content: '100米路每隔10米栽一棵，两端都栽。间隔=100÷10=10，棵数=10+1=11。', label: '例题' },
          { type: 'tip', content: '关键区分：间隔数=总长÷间距，棵数与间隔数的关系取决于栽法。', label: '解题关键' },
          { type: 'animation', content: '路上种树动画，树和间隔逐一出现', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '两端都栽',
              sceneBuildConfig: {
                sceneName: '植树问题',
                elements: [
                  { id: 'e1', emoji: '🌳', text: '树1', x: 10, y: 50, size: 'md', animation: 'popIn' },
                  { id: 'e2', emoji: '🌳', text: '树2', x: 30, y: 50, size: 'md', animation: 'popIn' },
                  { id: 'e3', emoji: '🌳', text: '树3', x: 50, y: 50, size: 'md', animation: 'popIn' },
                  { id: 'e4', emoji: '🌳', text: '树4', x: 70, y: 50, size: 'md', animation: 'popIn' },
                  { id: 'e5', emoji: '🌳', text: '树5', x: 90, y: 50, size: 'md', animation: 'popIn' },
                  { id: 'e6', text: '4个间隔，5棵树', x: 50, y: 75, size: 'lg', color: '#2ecc71', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '两端都栽，5棵树4个间隔，棵数=间隔数+1。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u7l1q1',
            type: 'choice',
            question: '20米路每隔5米栽一棵树（两端都栽），需要几棵树？',
            options: ['5棵', '4棵', '6棵', '3棵'],
            answer: '5棵',
            hint: '间隔数=20÷5=4，棵数=4+1',
            explanation: '间隔数=20÷5=4，两端都栽棵数=间隔数+1=4+1=5棵。'
          },
          {
            id: 'm5u7l1q2',
            type: 'fill',
            question: '100米路每隔10米栽一棵树（两端都栽），需要___棵树',
            answer: '11',
            hint: '间隔数=100÷10=10，棵数=10+1',
            explanation: '间隔数=100÷10=10，两端都栽棵数=10+1=11棵。'
          },
          {
            id: 'm5u7l1q3',
            type: 'choice',
            question: '两端都栽时，棵数和间隔数的关系是？',
            options: ['棵数=间隔数+1', '棵数=间隔数', '棵数=间隔数-1', '棵数=间隔数×2'],
            answer: '棵数=间隔数+1',
            hint: '画图数一数',
            explanation: '两端都栽：棵数=间隔数+1。因为两端都有一棵树，所以棵数比间隔数多1。'
          },
          {
            id: 'm5u7l1q4',
            type: 'fill',
            question: '一条路长60米，每隔3米栽一棵树（两端都栽），需要___棵树',
            answer: '21',
            hint: '60÷3+1',
            explanation: '间隔数=60÷3=20，棵数=20+1=21棵。'
          },
          {
            id: 'm5u7l1q5',
            type: 'choice',
            question: '一条路一侧种21棵树（两端都栽），每隔5米一棵，这条路长多少米？',
            options: ['100米', '105米', '95米', '110米'],
            answer: '100米',
            hint: '间隔数=棵数-1=20，总长=20×5',
            explanation: '间隔数=21-1=20，总长=20×5=100米。'
          },
          {
            id: 'm5u7l1q6',
            type: 'fill',
            question: '一条路长48米，每隔4米栽一棵树（两端都栽），需要___棵树',
            answer: '13',
            hint: '48÷4+1',
            explanation: '间隔数=48÷4=12，棵数=12+1=13棵。'
          },
          {
            id: 'm5u7l1q7',
            type: 'choice',
            question: '锯木头问题：一根木头锯成5段，需要锯几次？',
            options: ['4次', '5次', '6次', '3次'],
            answer: '4次',
            hint: '[植树问题两端都栽]（数学五年级-第7单元-第1课）',
            explanation: '锯木头类似植树问题：段数=次数+1，所以次数=5-1=4次。回顾两端都栽棵数=间隔数+1。'
          }
        ]
      },
      {
        id: 'm5u7l2',
        title: '植树问题——两端都不栽',
        order: 2,
        teachingMethod: '支架式，对比两端都栽发现规律',
        iDo: '家长示范：20米路每隔5米栽树，两端都不栽。间隔=4，棵数=4-1=3。',
        weDo: '亲子一起画图：12米路每隔3米，两端都不栽，间隔=4，棵数=3。',
        youDo: '孩子独立解决两端都不栽的植树问题。',
        parentTips: '两端都不栽：棵数=间隔数-1。两端都栽棵数比间隔数+1，两端都不栽则-1。',
        funElement: '小游戏：种树变变变——两端不栽怎么种？歇后语：留有余地——不把话说满',
        gsapAnimations: [
          '[GSAP:sceneBuild|路上种树动画：3棵树4个间隔两端空|1.5s|点击播放|power2.out]',
          '[GSAP:compare|两端都栽vs两端不栽对比|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|两端不栽植树图|500x200|教学风|png|3棵树4间隔]',
          '[IMG:illustration|三种栽法对比图|400x300|教学风|png|对比表]'
        ],
        content: [
          { type: 'text', content: '如果两端都不栽树呢？棵数和间隔数的关系会怎样变化？' },
          { type: 'example', content: '20米路每隔5米栽树，两端都不栽。间隔=4，棵数=4-1=3。', label: '两端不栽示例' },
          { type: 'tip', content: '两端都不栽：棵数=间隔数-1。间隔数=总长÷间距。', label: '核心公式' },
          { type: 'example', content: '走廊12米每隔3米放一盆花，两端不放。间隔=4，盆数=4-1=3。', label: '例题' },
          { type: 'tip', content: '对比记忆：两端都栽+1，两端都不栽-1，一端栽一端不栽=间隔数。', label: '三种情况' },
          { type: 'animation', content: '两端不栽种树动画，对比两端都栽', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '两端都栽vs两端不栽',
              compareConfig: {
                leftItems: ['🌳🌳🌳🌳🌳', '两端都栽', '5棵=4+1'],
                rightItems: ['  🌳🌳🌳  ', '两端不栽', '3棵=4-1'],
                result: 'equal',
                resultText: '间隔数相同，棵数不同',
              },
              ttsNarration: '两端都栽棵数等于间隔数加1，两端不栽棵数等于间隔数减1。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u7l2q1',
            type: 'choice',
            question: '20米路每隔5米栽一棵树（两端都不栽），需要几棵树？',
            options: ['3棵', '4棵', '5棵', '2棵'],
            answer: '3棵',
            hint: '间隔=4，棵数=4-1',
            explanation: '间隔数=20÷5=4，两端不栽棵数=间隔数-1=4-1=3棵。'
          },
          {
            id: 'm5u7l2q2',
            type: 'fill',
            question: '100米路每隔10米栽树（两端都不栽），需要___棵树',
            answer: '9',
            hint: '间隔=10，棵数=10-1',
            explanation: '间隔数=100÷10=10，两端不栽棵数=10-1=9棵。'
          },
          {
            id: 'm5u7l2q3',
            type: 'choice',
            question: '两端都不栽时，棵数和间隔数的关系是？',
            options: ['棵数=间隔数-1', '棵数=间隔数+1', '棵数=间隔数', '棵数=间隔数×2'],
            answer: '棵数=间隔数-1',
            hint: '两端没有树，棵数比间隔少1',
            explanation: '两端都不栽：棵数=间隔数-1。因为两端都没有树，棵数比间隔数少1。'
          },
          {
            id: 'm5u7l2q4',
            type: 'fill',
            question: '走廊30米每隔5米放花盆（两端不放），需要___盆花',
            answer: '5',
            hint: '30÷5-1',
            explanation: '间隔数=30÷5=6，两端不放盆数=6-1=5盆。'
          },
          {
            id: 'm5u7l2q5',
            type: 'choice',
            question: '一条路两端不栽种了8棵树，每隔6米一棵，路长多少米？',
            options: ['54米', '48米', '60米', '42米'],
            answer: '54米',
            hint: '间隔数=8+1=9，总长=9×6',
            explanation: '两端不栽：间隔数=棵数+1=8+1=9，总长=9×6=54米。'
          },
          {
            id: 'm5u7l2q6',
            type: 'fill',
            question: '两栋楼之间50米，每隔10米种一棵树（楼旁不种），需要___棵树',
            answer: '4',
            hint: '楼旁不种=两端不栽',
            explanation: '两楼之间=两端不栽。间隔数=50÷10=5，棵数=5-1=4棵。'
          },
          {
            id: 'm5u7l2q7',
            type: 'choice',
            question: '两端都栽需要5棵树的路，如果改成两端都不栽，需要几棵？',
            options: ['3棵', '4棵', '5棵', '2棵'],
            answer: '3棵',
            hint: '[植树问题两端都栽]（数学五年级-第7单元-第1课）',
            explanation: '两端都栽5棵→间隔数=5-1=4。两端不栽→棵数=4-1=3棵。回顾两端都栽的公式。'
          }
        ]
      },
      {
        id: 'm5u7l3',
        title: '植树问题——一端栽一端不栽',
        order: 3,
        teachingMethod: '探究式，三种情况对比归纳',
        iDo: '家长示范：20米路每隔5米栽树，一端栽一端不栽。间隔=4，棵数=4。',
        weDo: '亲子一起验证：一端栽一端不栽时，棵数=间隔数。',
        youDo: '孩子独立解决一端栽一端不栽的植树问题。',
        parentTips: '一端栽一端不栽：棵数=间隔数。记住三种情况对比。',
        funElement: '小游戏：三种植树法大对比！歇后语：一分为二——各有不同',
        gsapAnimations: [
          '[GSAP:sceneBuild|一端栽一端不栽种树动画|1.5s|点击播放|power2.out]',
          '[GSAP:compare|三种栽法对比表|0.8s|页面加载|power2.out]'
        ],
        images: [
          '[IMG:illustration|一端栽一端不栽图|500x200|教学风|png|4棵树4间隔]',
          '[IMG:illustration|三种植树情况总结表|500x300|教学风|png|对比表]'
        ],
        content: [
          { type: 'text', content: '如果只有一端栽树，另一端不栽呢？棵数正好等于间隔数！' },
          { type: 'example', content: '20米路每隔5米栽树，一端栽一端不栽。间隔=4，棵数=4。', label: '一端栽示例' },
          { type: 'tip', content: '一端栽一端不栽：棵数=间隔数。间隔数=总长÷间距。', label: '核心公式' },
          { type: 'example', content: '三种情况对比：两端都栽→间隔数+1；两端不栽→间隔数-1；一端栽→间隔数。', label: '三种对比' },
          { type: 'tip', content: '解题先判断属于哪种情况，再套用对应公式。', label: '解题策略' },
          { type: 'animation', content: '三种栽法对比动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '三种植树情况对比',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '两端都栽：棵数=间隔数+1', ttsNarration: '两端都栽，棵数等于间隔数加1' },
                  { id: 's2', description: '两端不栽：棵数=间隔数-1', ttsNarration: '两端不栽，棵数等于间隔数减1' },
                  { id: 's3', description: '一端栽一端不栽：棵数=间隔数', ttsNarration: '一端栽一端不栽，棵数等于间隔数' },
                ]
              },
              ttsNarration: '三种植树情况：加1、减1、等于。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u7l3q1',
            type: 'choice',
            question: '20米路每隔5米栽树（一端栽一端不栽），需要几棵？',
            options: ['4棵', '5棵', '3棵', '6棵'],
            answer: '4棵',
            hint: '棵数=间隔数=20÷5',
            explanation: '一端栽一端不栽：棵数=间隔数=20÷5=4棵。'
          },
          {
            id: 'm5u7l3q2',
            type: 'fill',
            question: '100米路每隔10米栽树（一端栽一端不栽），需要___棵',
            answer: '10',
            hint: '棵数=间隔数=100÷10',
            explanation: '一端栽一端不栽：棵数=间隔数=100÷10=10棵。'
          },
          {
            id: 'm5u7l3q3',
            type: 'choice',
            question: '一端栽一端不栽时，棵数和间隔数的关系是？',
            options: ['棵数=间隔数', '棵数=间隔数+1', '棵数=间隔数-1', '棵数=间隔数×2'],
            answer: '棵数=间隔数',
            hint: '只有一端有树',
            explanation: '一端栽一端不栽：棵数=间隔数。一端有树一端没有，棵数正好等于间隔数。'
          },
          {
            id: 'm5u7l3q4',
            type: 'fill',
            question: '45米路每隔5米栽树（一端栽一端不栽），需要___棵',
            answer: '9',
            hint: '45÷5',
            explanation: '一端栽一端不栽：棵数=间隔数=45÷5=9棵。'
          },
          {
            id: 'm5u7l3q5',
            type: 'choice',
            question: '下面三种情况中，棵数最多的是？',
            options: ['两端都栽', '两端都不栽', '一端栽一端不栽', '都一样多'],
            answer: '两端都栽',
            hint: '比较三种公式',
            explanation: '间隔数相同时：两端都栽棵数=间隔数+1最多，一端栽=间隔数，两端不栽=间隔数-1最少。'
          },
          {
            id: 'm5u7l3q6',
            type: 'fill',
            question: '一面墙前60米每隔6米栽树（靠墙不栽=一端不栽），需要___棵',
            answer: '10',
            hint: '靠墙不栽=一端栽一端不栽',
            explanation: '靠墙不栽=一端栽一端不栽。棵数=间隔数=60÷6=10棵。'
          },
          {
            id: 'm5u7l3q7',
            type: 'choice',
            question: '一个圆形花坛周长40米，每隔5米栽一棵树，需要几棵？',
            options: ['8棵', '9棵', '7棵', '10棵'],
            answer: '8棵',
            hint: '[植树问题一端栽]（数学五年级-第7单元-第3课）',
            explanation: '封闭图形首尾相连，相当于一端栽一端不栽，棵数=间隔数=40÷5=8棵。回顾一端栽的情况。'
          }
        ]
      },
      {
        id: 'm5u7l4',
        title: '植树问题变式——封闭图形',
        order: 4,
        teachingMethod: '情境式，圆形/方形等封闭图形植树',
        iDo: '家长示范：圆形花坛周长40米，每隔5米栽一棵，棵数=40÷5=8。',
        weDo: '亲子一起算正方形花坛四周种树问题。',
        youDo: '孩子独立解决封闭图形植树问题。',
        parentTips: '封闭图形（圆形、方形等）植树：棵数=间隔数=周长÷间距。相当于一端栽一端不栽。',
        funElement: '小游戏：花坛设计师——在圆形花坛周围种花！歇后语：画地为牢——围成一圈',
        gsapAnimations: [
          '[GSAP:sceneBuild|圆形花坛周围种树动画|1.5s|点击播放|power2.out]',
          '[GSAP:timeline|封闭图形植树规律推导|1s|点击播放|power2.out]'
        ],
        images: [
          '[IMG:illustration|圆形花坛植树图|500x300|可爱卡通风|png|花坛+树]',
          '[IMG:illustration|封闭图形植树公式图|400x200|教学风|png|公式标注]'
        ],
        content: [
          { type: 'text', content: '封闭图形（圆形、正方形等）的周围种树，因为首尾相连，棵数正好等于间隔数！' },
          { type: 'example', content: '圆形花坛周长40米，每隔5米栽一棵。棵数=间隔数=40÷5=8。', label: '封闭图形示例' },
          { type: 'tip', content: '封闭图形：棵数=间隔数=周长÷间距。相当于一端栽一端不栽。', label: '核心公式' },
          { type: 'example', content: '正方形花坛每边10米，每隔2米栽一棵，周长=40，棵数=40÷2=20。', label: '正方形示例' },
          { type: 'tip', content: '注意：封闭图形不用+1或-1，棵数就等于间隔数。', label: '易错提醒' },
          { type: 'animation', content: '圆形花坛周围种树动画', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '封闭图形植树',
              sceneBuildConfig: {
                sceneName: '圆形花坛',
                elements: [
                  { id: 'e1', emoji: '🌸', text: '花坛', x: 50, y: 50, size: 'xl', animation: 'popIn' },
                  { id: 'e2', emoji: '🌳', text: '树1', x: 50, y: 20, size: 'sm', animation: 'fadeIn' },
                  { id: 'e3', emoji: '🌳', text: '树2', x: 80, y: 35, size: 'sm', animation: 'fadeIn' },
                  { id: 'e4', emoji: '🌳', text: '树3', x: 80, y: 65, size: 'sm', animation: 'fadeIn' },
                  { id: 'e5', emoji: '🌳', text: '树4', x: 50, y: 80, size: 'sm', animation: 'fadeIn' },
                  { id: 'e6', text: '棵数=间隔数', x: 50, y: 90, size: 'md', color: '#2ecc71', animation: 'fadeIn' },
                ]
              },
              ttsNarration: '封闭图形植树，棵数等于间隔数。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u7l4q1',
            type: 'choice',
            question: '圆形花坛周长60米，每隔6米栽一棵树，需要几棵？',
            options: ['10棵', '11棵', '9棵', '12棵'],
            answer: '10棵',
            hint: '封闭图形：棵数=间隔数=60÷6',
            explanation: '封闭图形：棵数=间隔数=周长÷间距=60÷6=10棵。'
          },
          {
            id: 'm5u7l4q2',
            type: 'fill',
            question: '正方形花坛周长48米，每隔4米栽一棵树，需要___棵',
            answer: '12',
            hint: '48÷4',
            explanation: '封闭图形：棵数=间隔数=48÷4=12棵。'
          },
          {
            id: 'm5u7l4q3',
            type: 'choice',
            question: '封闭图形植树，棵数和间隔数的关系是？',
            options: ['棵数=间隔数', '棵数=间隔数+1', '棵数=间隔数-1', '棵数=间隔数×2'],
            answer: '棵数=间隔数',
            hint: '首尾相连',
            explanation: '封闭图形首尾相连，棵数=间隔数，不用加1或减1。'
          },
          {
            id: 'm5u7l4q4',
            type: 'fill',
            question: '圆形操场周长120米，每隔8米插一面旗，需要___面旗',
            answer: '15',
            hint: '120÷8',
            explanation: '封闭图形：旗数=间隔数=120÷8=15面。'
          },
          {
            id: 'm5u7l4q5',
            type: 'choice',
            question: '一个三角形花坛三边分别长20米、20米、20米，每隔5米栽一棵树，共需几棵？',
            options: ['12棵', '13棵', '11棵', '15棵'],
            answer: '12棵',
            hint: '周长=60，60÷5',
            explanation: '三角形周长=20×3=60米，封闭图形棵数=60÷5=12棵。'
          },
          {
            id: 'm5u7l4q6',
            type: 'fill',
            question: '圆形跑道周长400米，每隔10米放一把长椅，需要___把',
            answer: '40',
            hint: '400÷10',
            explanation: '封闭图形：椅数=间隔数=400÷10=40把。'
          },
          {
            id: 'm5u7l4q7',
            type: 'choice',
            question: '封闭图形植树和不封闭一端栽一端不栽有什么关系？',
            options: ['棵数都等于间隔数', '完全不同', '封闭图形多1棵', '封闭图形少1棵'],
            answer: '棵数都等于间隔数',
            hint: '[植树问题一端栽]（数学五年级-第7单元-第3课）',
            explanation: '封闭图形首尾相连，相当于一端栽一端不栽，棵数=间隔数。回顾一端栽的情况。'
          }
        ]
      },
      {
        id: 'm5u7l5',
        title: '植树问题综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测植树问题',
        iDo: '家长示范综合题，讲解各种植树问题的解题方法。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成植树问题综合检测。',
        parentTips: '检测前回顾：两端都栽+1、两端不栽-1、一端栽=间隔数、封闭图形=间隔数。',
        funElement: '小游戏：植树达人挑战——综合大检测！歇后语：前人栽树——后人乘凉',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|植树达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|植树达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|植树问题知识总结图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课综合检测植树问题知识，包括两端都栽、两端不栽、一端栽和封闭图形四种情况。' },
          { type: 'example', content: '综合题：100米路每隔5米，两端都栽→21棵，两端不栽→19棵，一端栽→20棵。', label: '综合比较' },
          { type: 'tip', content: '四种情况：两端都栽=间隔+1，两端不栽=间隔-1，一端栽=间隔，封闭=间隔。', label: '公式总结' },
          { type: 'example', content: '综合题：圆形花坛周长50米每隔5米→10棵，锯3段木头→锯2次。', label: '综合应用' },
          { type: 'tip', content: '解题关键：先判断类型，再算间隔数，最后套公式。', label: '解题策略' },
          { type: 'animation', content: '植树问题知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '植树问题知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '两端都栽', back: '棵数=间隔数+1', ttsText: '两端都栽' },
                  { id: 'c2', front: '两端不栽', back: '棵数=间隔数-1', ttsText: '两端不栽' },
                  { id: 'c3', front: '一端栽', back: '棵数=间隔数', ttsText: '一端栽一端不栽' },
                  { id: 'c4', front: '封闭图形', back: '棵数=间隔数', ttsText: '封闭图形植树' },
                ]
              },
              ttsNarration: '植树问题四种情况总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u7l5q1',
            type: 'choice',
            question: '80米路每隔8米栽树（两端都栽），需要几棵？',
            options: ['11棵', '10棵', '9棵', '12棵'],
            answer: '11棵',
            hint: '80÷8+1',
            explanation: '间隔数=80÷8=10，两端都栽棵数=10+1=11棵。'
          },
          {
            id: 'm5u7l5q2',
            type: 'fill',
            question: '两楼间36米每隔6米栽树（楼旁不栽），需要___棵',
            answer: '5',
            hint: '两端不栽：36÷6-1',
            explanation: '两楼间=两端不栽。间隔=36÷6=6，棵数=6-1=5棵。'
          },
          {
            id: 'm5u7l5q3',
            type: 'choice',
            question: '圆形花坛周长72米每隔9米栽树，需要几棵？',
            options: ['8棵', '9棵', '7棵', '10棵'],
            answer: '8棵',
            hint: '封闭图形：72÷9',
            explanation: '封闭图形棵数=间隔数=72÷9=8棵。'
          },
          {
            id: 'm5u7l5q4',
            type: 'fill',
            question: '一根木头锯成4段需要6分钟，每锯一次需___分钟',
            answer: '2',
            hint: '锯4段=锯3次，6÷3',
            explanation: '锯4段=锯3次（植树问题两端都栽：段数=次数+1）。每次=6÷3=2分钟。'
          },
          {
            id: 'm5u7l5q5',
            type: 'choice',
            question: '一条路一侧两端都栽种了10棵树，如果两侧都种，共需几棵？',
            options: ['20棵', '19棵', '10棵', '18棵'],
            answer: '20棵',
            hint: '两侧各10棵',
            explanation: '一侧10棵，两侧=10×2=20棵。'
          },
          {
            id: 'm5u7l5q6',
            type: 'fill',
            question: '时钟5点敲5下用了8秒，敲10下需要___秒',
            answer: '18',
            hint: '5下=4个间隔，每间隔2秒。10下=9个间隔',
            explanation: '5下有4个间隔，每个=8÷4=2秒。10下有9个间隔，9×2=18秒。植树问题：下数=间隔数+1。'
          },
          {
            id: 'm5u7l5q7',
            type: 'choice',
            question: '封闭图形植树和一端栽一端不栽的共同点是？',
            options: ['棵数都等于间隔数', '棵数都等于间隔数+1', '棵数都等于间隔数-1', '没有共同点'],
            answer: '棵数都等于间隔数',
            hint: '[植树问题一端栽]（数学五年级-第7单元-第3课）',
            explanation: '封闭图形和一端栽一端不栽的棵数都等于间隔数。回顾一端栽的情况。'
          }
        ]
      }
    ]
  },
  {
    id: 'm5u8',
    title: '总复习',
    subtitle: '系统复习五年级数学知识，查漏补缺',
    order: 8,
    lessons: [
      {
        id: 'm5u8l1',
        title: '数与代数复习',
        order: 1,
        teachingMethod: '形成性评价，系统复习小数乘除法和简易方程',
        iDo: '家长引导复习：小数乘法（转化思想）、小数除法（小数点移动）、简易方程（等式性质）。',
        weDo: '亲子一起做综合练习，梳理数与代数知识网络。',
        youDo: '孩子独立完成数与代数综合复习题。',
        parentTips: '复习重点：小数乘除法计算、简便运算、解方程、列方程解应用题。',
        funElement: '小游戏：数与代数大闯关——复习冲冲冲！歇后语：温故知新——学而时习之',
        gsapAnimations: [
          '[GSAP:timeline|数与代数知识网络图展开|1.5s|点击播放|power2.out]',
          '[GSAP:cardReveal|知识要点卡片翻转|0.5s|点击|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|数与代数知识网络图|500x300|教学风|png|知识网络]',
          '[IMG:illustration|小数乘除法总结图|400x300|教学风|png|公式总结]'
        ],
        content: [
          { type: 'text', content: '本课系统复习数与代数：小数乘法、小数除法、简易方程。梳理知识网络，查漏补缺。' },
          { type: 'example', content: '小数乘法：2.5×0.4=1（因数共两位小数），0.25×4.2×4=4.2（简便运算）。', label: '小数乘法复习' },
          { type: 'tip', content: '知识网络：小数乘法→转化思想；小数除法→小数点移动；简易方程→等式性质。', label: '知识梳理' },
          { type: 'example', content: '解方程：3x+5=20，两边减5→3x=15，两边除以3→x=5。', label: '方程复习' },
          { type: 'tip', content: '易错回顾：小数位数判断、简便运算定律、解方程步骤、列方程找等量关系。', label: '易错回顾' },
          { type: 'animation', content: '数与代数知识网络图展开', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '数与代数知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '小数乘法', back: '先按整数乘，再点小数位', ttsText: '小数乘法' },
                  { id: 'c2', front: '小数除法', back: '除数变整数，被除数同移', ttsText: '小数除法' },
                  { id: 'c3', front: '简便运算', back: '交换律、结合律、分配律', ttsText: '简便运算' },
                  { id: 'c4', front: '简易方程', back: '等式性质解方程', ttsText: '简易方程' },
                ]
              },
              ttsNarration: '数与代数四大知识点复习。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u8l1q1',
            type: 'choice',
            question: '0.25×0.4等于多少？',
            options: ['0.1', '1', '0.01', '0.4'],
            answer: '0.1',
            hint: '25×4=100，共三位小数（0.25有2位+0.4有1位）',
            explanation: '0.25×0.4：25×4=100，0.25有2位小数，0.4有1位小数，共3位小数，得0.100=0.1。'
          },
          {
            id: 'm5u8l1q2',
            type: 'fill',
            question: '7.2÷0.08=___',
            answer: '90',
            hint: '0.08变8（右移2位），7.2变720',
            explanation: '7.2÷0.08：0.08变8（右移2位），7.2变720（右移2位补0），720÷8=90。'
          },
          {
            id: 'm5u8l1q3',
            type: 'choice',
            question: '解方程2x-7=13，x等于多少？',
            options: ['10', '3', '20', '6'],
            answer: '10',
            hint: '两边加7，再除以2',
            explanation: '2x-7=13，两边加7：2x=20，两边除以2：x=10。检验：2×10-7=13✓'
          },
          {
            id: 'm5u8l1q4',
            type: 'fill',
            question: '用简便方法计算：0.8×2.5×1.25×4=（___×___）×（___×___）=___',
            answer: '0.8',
            hint: '0.8×1.25=1，2.5×4=10',
            explanation: '0.8×2.5×1.25×4=（0.8×1.25）×（2.5×4）=1×10=10。运用交换律和结合律凑整。'
          },
          {
            id: 'm5u8l1q5',
            type: 'choice',
            question: '一个数（0除外）除以0.5，商和原数的关系？',
            options: ['商是原数的2倍', '商是原数的一半', '商和原数相等', '无法确定'],
            answer: '商是原数的2倍',
            hint: '0.5=1/2，除以1/2=乘2',
            explanation: '一个数÷0.5=一个数÷(1/2)=一个数×2，所以商是原数的2倍。'
          },
          {
            id: 'm5u8l1q6',
            type: 'fill',
            question: '甲数是乙数的3倍，甲乙共40。设乙为x，方程x+3x=40，x=___',
            answer: '10',
            hint: '4x=40',
            explanation: 'x+3x=40→4x=40→x=10。乙=10，甲=30。'
          },
          {
            id: 'm5u8l1q7',
            type: 'choice',
            question: '小数乘法和小数除法在确定小数点位置时，方法有什么不同？',
            options: ['乘法数因数小数位之和，除法移动小数点使除数变整数', '方法相同', '乘法看被除数，除法看因数', '没有规律'],
            answer: '乘法数因数小数位之和，除法移动小数点使除数变整数',
            hint: '[小数乘法]（数学五年级-第1单元-第2课）',
            explanation: '小数乘法：因数小数位之和=积的小数位。小数除法：除数小数点右移变整数，被除数同移。回顾小数乘小数。'
          }
        ]
      },
      {
        id: 'm5u8l2',
        title: '图形与几何复习',
        order: 2,
        teachingMethod: '形成性评价，系统复习多边形面积和位置方向',
        iDo: '家长引导复习：多边形面积公式（平行四边形、三角形、梯形）和位置与方向。',
        weDo: '亲子一起做综合练习，梳理图形与几何知识。',
        youDo: '孩子独立完成图形与几何综合复习题。',
        parentTips: '复习重点：面积公式及推导、组合图形面积、方向与距离确定位置。',
        funElement: '小游戏：图形大侦探——复习图形知识！歇后语：按图索骥——顺藤摸瓜',
        gsapAnimations: [
          '[GSAP:shapeDraw|三种图形面积公式推导回顾|2s|点击播放|power2.out]',
          '[GSAP:cardReveal|图形知识卡片翻转|0.5s|点击|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|图形与几何知识网络图|500x300|教学风|png|知识网络]',
          '[IMG:illustration|三种图形面积公式图|400x300|教学风|png|公式对比]'
        ],
        content: [
          { type: 'text', content: '本课系统复习图形与几何：多边形面积和位置与方向。梳理公式，回顾推导过程。' },
          { type: 'example', content: '面积公式：平行四边形S=ah，三角形S=ah÷2，梯形S=(a+b)h÷2。', label: '公式复习' },
          { type: 'tip', content: '推导方法：平行四边形→割补法，三角形和梯形→拼合法。都转化为长方形。', label: '推导回顾' },
          { type: 'example', content: '位置与方向：以观测点为中心，方向+距离确定位置。比例尺换算。', label: '位置复习' },
          { type: 'tip', content: '组合图形：分割法（分而治之）和添补法（补大减小）。', label: '组合图形' },
          { type: 'animation', content: '三种图形面积公式推导回顾', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '面积公式推导回顾',
              shapeDrawConfig: {
                shape: '面积公式推导',
                labels: ['平行四边形 S=ah', '三角形 S=ah÷2', '梯形 S=(a+b)h÷2'],
              },
              ttsNarration: '三种图形面积公式：平行四边形底乘高，三角形底乘高除以2，梯形上底加下底乘高除以2。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u8l2q1',
            type: 'choice',
            question: '平行四边形底8高5，面积是？',
            options: ['40', '20', '80', '13'],
            answer: '40',
            hint: 'S=8×5',
            explanation: 'S=ah=8×5=40平方单位。'
          },
          {
            id: 'm5u8l2q2',
            type: 'fill',
            question: '三角形底10高9，面积=___',
            answer: '45',
            hint: '10×9÷2',
            explanation: 'S=ah÷2=10×9÷2=45平方单位。'
          },
          {
            id: 'm5u8l2q3',
            type: 'choice',
            question: '梯形上底3下底7高6，面积是？',
            options: ['30', '60', '15', '36'],
            answer: '30',
            hint: '(3+7)×6÷2',
            explanation: 'S=(a+b)h÷2=(3+7)×6÷2=30平方单位。'
          },
          {
            id: 'm5u8l2q4',
            type: 'fill',
            question: '以学校为观测点，图书馆在北偏东30°方向500米处。比例尺1:10000，图上距离___厘米',
            answer: '5',
            hint: '500米=50000厘米，50000÷10000',
            explanation: '500米=50000厘米，图上距离=50000÷10000=5厘米。'
          },
          {
            id: 'm5u8l2q5',
            type: 'choice',
            question: '等底等高的平行四边形和三角形，面积差是12平方厘米，平行四边形面积是？',
            options: ['24平方厘米', '12平方厘米', '6平方厘米', '36平方厘米'],
            answer: '24平方厘米',
            hint: '差=ah-ah÷2=ah÷2=12',
            explanation: '面积差=ah-ah÷2=ah÷2=12，所以ah=24。平行四边形面积=24平方厘米，三角形=12。'
          },
          {
            id: 'm5u8l2q6',
            type: 'fill',
            question: '一个组合图形由梯形(上4下8高6)和三角形(底8高4)组成，面积=___',
            answer: '52',
            hint: '梯形面积+三角形面积',
            explanation: '梯形=(4+8)×6÷2=12×6÷2=36，三角形=8×4÷2=16，总面积=36+16=52。'
          },
          {
            id: 'm5u8l2q7',
            type: 'choice',
            question: '三角形面积公式和梯形面积公式有什么联系？',
            options: ['梯形上底=0时就是三角形公式', '两个公式完全相同', '没有联系', '梯形上底=下底时就是三角形公式'],
            answer: '梯形上底=0时就是三角形公式',
            hint: '[梯形面积]（数学五年级-第6单元-第3课）',
            explanation: '梯形S=(a+b)h÷2，当上底a=0时，S=(0+b)h÷2=bh÷2=三角形面积。回顾梯形面积公式。'
          }
        ]
      },
      {
        id: 'm5u8l3',
        title: '统计与概率复习',
        order: 3,
        teachingMethod: '形成性评价，复习可能性知识',
        iDo: '家长引导复习：可能性大小、比较方法、公平性判断。',
        weDo: '亲子一起做可能性综合练习。',
        youDo: '孩子独立完成统计与概率复习题。',
        parentTips: '复习重点：可能性大小比较、游戏公平性判断、用分数表示可能性。',
        funElement: '小游戏：概率小达人——复习冲冲冲！歇后语：心中有数——不慌不忙',
        gsapAnimations: [
          '[GSAP:timeline|可能性知识回顾|1.5s|点击播放|power2.out]',
          '[GSAP:cardReveal|可能性知识卡片翻转|0.5s|点击|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|可能性知识网络图|500x300|教学风|png|知识网络]',
          '[IMG:illustration|可能性公式总结图|400x200|教学风|png|公式总结]'
        ],
        content: [
          { type: 'text', content: '本课复习统计与概率：可能性大小、比较方法、游戏公平性和实际应用。' },
          { type: 'example', content: '袋子5红3白，摸到红球可能性=5/8，白球=3/8，红球可能性大。', label: '可能性复习' },
          { type: 'tip', content: '可能性大小：数量越多可能性越大。公平：双方可能性相等。', label: '知识梳理' },
          { type: 'example', content: '游戏公平判断：甲乙赢的可能性相等→公平，不等→不公平。', label: '公平性复习' },
          { type: 'tip', content: '分数表示：该情况数量÷总数量。如3红7白，摸到红球=3/10。', label: '分数表示' },
          { type: 'animation', content: '可能性知识回顾动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '可能性知识卡片',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '可能性大小', back: '数量越多可能性越大', ttsText: '可能性大小' },
                  { id: 'c2', front: '公平判断', back: '双方可能性相等', ttsText: '游戏公平' },
                  { id: 'c3', front: '分数表示', back: '该情况数÷总数', ttsText: '分数表示' },
                  { id: 'c4', front: '特殊事件', back: '一定/不可能/可能', ttsText: '特殊事件' },
                ]
              },
              ttsNarration: '可能性四大知识点复习。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u8l3q1',
            type: 'choice',
            question: '袋子里4红6白，摸到红球的可能性是？',
            options: ['4/10', '6/10', '4/6', '1/2'],
            answer: '4/10',
            hint: '红球4个共10个',
            explanation: '红球4个共10个球，摸到红球可能性=4/10=2/5。'
          },
          {
            id: 'm5u8l3q2',
            type: 'fill',
            question: '袋子里3红2白1黄，摸到___球的可能性最大',
            answer: '红',
            hint: '哪种球最多',
            explanation: '红球3个最多，摸到红球的可能性最大。'
          },
          {
            id: 'm5u8l3q3',
            type: 'choice',
            question: '抛硬币游戏公平吗？',
            options: ['公平', '不公平', '看运气', '无法判断'],
            answer: '公平',
            hint: '正反面可能性相等',
            explanation: '硬币正反面可能性各1/2，相等，所以游戏公平。'
          },
          {
            id: 'm5u8l3q4',
            type: 'fill',
            question: '转盘8等份红色3份，停在红色的可能性=___/___',
            answer: '3',
            hint: '红色3份共8份',
            explanation: '红色3份共8份，停在红色的可能性=3/8。'
          },
          {
            id: 'm5u8l3q5',
            type: 'choice',
            question: '下面事件中"不可能发生"的是？',
            options: ['掷骰子掷出0', '明天会下雨', '抛硬币正面朝上', '摸到红球'],
            answer: '掷骰子掷出0',
            hint: '骰子最小是几？',
            explanation: '骰子最小是1，掷出0是不可能事件。'
          },
          {
            id: 'm5u8l3q6',
            type: 'fill',
            question: '甲乙玩游戏，甲赢的可能性是3/8，乙赢的可能性是5/8，这个游戏___（填"公平"或"不公平"）',
            answer: '不公平',
            hint: '比较3/8和5/8',
            explanation: '3/8≠5/8，乙赢可能性大于甲，游戏不公平。'
          },
          {
            id: 'm5u8l3q7',
            type: 'choice',
            question: '要让摸球游戏公平（甲摸红赢乙摸白赢），红球和白球应该？',
            options: ['数量相等', '红球多', '白球多', '随便放'],
            answer: '数量相等',
            hint: '[游戏规则的公平性]（数学五年级-第4单元-第3课）',
            explanation: '要让游戏公平，双方可能性相等，红球白球数量要相等。回顾游戏公平性判断。'
          }
        ]
      },
      {
        id: 'm5u8l4',
        title: '综合应用复习',
        order: 4,
        teachingMethod: '情境式，综合运用各单元知识解决实际问题',
        iDo: '家长示范综合应用题，涉及小数运算、方程、面积和植树问题。',
        weDo: '亲子一起解决跨单元综合题。',
        youDo: '孩子独立完成综合应用题。',
        parentTips: '综合应用：读懂题意，判断用什么知识，分步解决。',
        funElement: '小游戏：综合应用大挑战——多知识融合！歇后语：融会贯通——举一反三',
        gsapAnimations: [
          '[GSAP:timeline|综合应用解题步骤|1.5s|点击播放|power2.out]',
          '[GSAP:highlight|关键信息高亮|0.5s|自动播放|power1.inOut]'
        ],
        images: [
          '[IMG:illustration|综合应用场景图|500x300|教学风|png|多场景]',
          '[IMG:illustration|解题策略图|400x300|教学风|png|策略流程]'
        ],
        content: [
          { type: 'text', content: '本课综合运用各单元知识解决实际问题，涉及小数运算、方程、面积和植树问题。' },
          { type: 'example', content: '综合题：一块梯形花圃上底10米下底20米高8米，每平方米种5棵花，共种多少棵？', label: '面积+乘法' },
          { type: 'tip', content: '解题策略：1.读懂题意 2.判断用什么知识 3.分步计算 4.检验答案。', label: '解题策略' },
          { type: 'example', content: '综合题：小明用12.5元买了2.5千克苹果，每千克多少元？12.5÷2.5=5元。', label: '小数除法应用' },
          { type: 'tip', content: '跨单元综合：面积+乘除、方程+面积、植树+乘除等。', label: '综合题型' },
          { type: 'animation', content: '综合应用解题步骤动画', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '综合应用解题',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '第一步：读懂题意', ttsNarration: '第一步读懂题意' },
                  { id: 's2', description: '第二步：判断用什么知识', ttsNarration: '第二步判断用什么知识' },
                  { id: 's3', description: '第三步：分步计算', ttsNarration: '第三步分步计算' },
                  { id: 's4', description: '第四步：检验答案', ttsNarration: '第四步检验答案' },
                ]
              },
              ttsNarration: '综合应用四步解题法。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u8l4q1',
            type: 'choice',
            question: '一块梯形花圃上底10米下底20米高8米，每平方米种5棵花，共种多少棵？',
            options: ['600棵', '120棵', '300棵', '200棵'],
            answer: '600棵',
            hint: '先求面积(10+20)×8÷2，再乘5',
            explanation: '面积=(10+20)×8÷2=120平方米，花数=120×5=600棵。'
          },
          {
            id: 'm5u8l4q2',
            type: 'fill',
            question: '小明用12.5元买了2.5千克苹果，每千克___元',
            answer: '5',
            hint: '12.5÷2.5',
            explanation: '12.5÷2.5=5元/千克。2.5变25，12.5变125，125÷25=5。'
          },
          {
            id: 'm5u8l4q3',
            type: 'choice',
            question: '一条路长120米，每隔6米栽一棵树（两端都栽），两侧都种，共需几棵？',
            options: ['42棵', '21棵', '20棵', '40棵'],
            answer: '42棵',
            hint: '一侧：120÷6+1=21，两侧×2',
            explanation: '一侧：120÷6+1=21棵，两侧=21×2=42棵。'
          },
          {
            id: 'm5u8l4q4',
            type: 'fill',
            question: '一个长方形长a米宽b米，面积S=___（用字母表示）',
            answer: 'ab',
            hint: '长方形面积=长×宽',
            explanation: '长方形面积S=长×宽=a×b=ab。回顾用字母表示数。'
          },
          {
            id: 'm5u8l4q5',
            type: 'choice',
            question: '甲乙共36岁，甲是乙的2倍。设乙x岁，甲乙各几岁？',
            options: ['乙12岁，甲24岁', '乙18岁，甲18岁', '乙6岁，甲12岁', '乙24岁，甲12岁'],
            answer: '乙12岁，甲24岁',
            hint: 'x+2x=36',
            explanation: 'x+2x=36，3x=36，x=12。乙12岁，甲24岁。'
          },
          {
            id: 'm5u8l4q6',
            type: 'fill',
            question: '一块三角形地底200米高150米，面积=___平方米=___公顷',
            answer: '15000',
            hint: '200×150÷2=15000平方米，1公顷=10000平方米',
            explanation: '面积=200×150÷2=15000平方米=1.5公顷。'
          },
          {
            id: 'm5u8l4q7',
            type: 'choice',
            question: '解决综合应用题时，最重要的是？',
            options: ['先判断用什么知识再解题', '直接列算式', '猜答案', '只看数字大小'],
            answer: '先判断用什么知识再解题',
            hint: '[综合应用]（数学五年级-第8单元-第4课）',
            explanation: '解决综合应用题的关键是先读懂题意、判断用什么知识，再分步解题。回顾综合应用策略。'
          }
        ]
      },
      {
        id: 'm5u8l5',
        title: '学期综合测评',
        order: 5,
        teachingMethod: '形成性评价，五年级数学全册综合测评',
        iDo: '家长引导全册综合测评，覆盖8个单元核心知识。',
        weDo: '亲子一起做期末模拟试卷，计时检测。',
        youDo: '孩子独立完成学期综合测评，正确率≥85%。',
        parentTips: '测评前全面复习：小数乘除法、位置方向、可能性、简易方程、多边形面积、植树问题。',
        funElement: '小游戏：五年级数学达人——期末大挑战！歇后语：百尺竿头——更进一步',
        gsapAnimations: [
          '[GSAP:confetti|通关撒花|2s|正确率≥85%|power1.out]',
          '[GSAP:starFlyIn|五年级数学达人徽章飞入|1s|通关|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|五年级数学达人徽章|300x300|可爱卡通风|png|金色徽章]',
          '[IMG:illustration|五年级数学全册知识图|500x300|教学风|png|知识梳理]'
        ],
        content: [
          { type: 'text', content: '本课是五年级数学全册综合测评，覆盖小数乘除法、位置与方向、可能性、简易方程、多边形面积和植树问题。' },
          { type: 'example', content: '综合题：0.25×3.6×4=（0.25×4）×3.6=3.6（简便运算）。', label: '小数乘法综合' },
          { type: 'tip', content: '全册知识：小数乘法（U1）、位置方向（U2）、小数除法（U3）、可能性（U4）、简易方程（U5）、多边形面积（U6）、植树问题（U7）。', label: '全册梳理' },
          { type: 'example', content: '综合题：梯形上底4下底8高6，面积=(4+8)×6÷2=36平方厘米。', label: '面积综合' },
          { type: 'tip', content: '检测要点：计算准确、概念清晰、公式熟练、应用灵活。', label: '检测要点' },
          { type: 'animation', content: '五年级数学全册知识总结动画', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '五年级数学全册总结',
              cardRevealConfig: {
                cards: [
                  { id: 'c1', front: '第1-3单元', back: '小数乘除法', ttsText: '小数乘除法' },
                  { id: 'c2', front: '第2单元', back: '位置与方向', ttsText: '位置与方向' },
                  { id: 'c3', front: '第4-5单元', back: '可能性与方程', ttsText: '可能性与方程' },
                  { id: 'c4', front: '第6-7单元', back: '面积与植树', ttsText: '面积与植树' },
                ]
              },
              ttsNarration: '五年级数学全册知识总结。',
            }
          },
        ],
        practiceQuestions: [
          {
            id: 'm5u8l5q1',
            type: 'choice',
            question: '2.5×0.04的积是几位小数？',
            options: ['四位小数', '三位小数', '两位小数', '一位小数'],
            answer: '三位小数',
            hint: '2.5有1位小数，0.04有2位小数，共1+2=3位小数',
            explanation: '2.5有1位小数，0.04有2位小数，共3位小数。25×4=100，点三位小数得0.100=0.1。积化简后是0.1（1位小数），但未化简前是0.100（3位小数）。'
          },
          {
            id: 'm5u8l5q2',
            type: 'fill',
            question: '7.2÷0.9=___',
            answer: '8',
            hint: '0.9变9，7.2变72',
            explanation: '7.2÷0.9：0.9变9，7.2变72，72÷9=8。'
          },
          {
            id: 'm5u8l5q3',
            type: 'choice',
            question: '解方程3x+6=27，x等于多少？',
            options: ['7', '11', '9', '3'],
            answer: '7',
            hint: '两边减6，再除以3',
            explanation: '3x+6=27，两边减6：3x=21，两边除以3：x=7。检验：3×7+6=27✓'
          },
          {
            id: 'm5u8l5q4',
            type: 'fill',
            question: '一个三角形底12厘米高8厘米，面积=___平方厘米',
            answer: '48',
            hint: '12×8÷2',
            explanation: 'S=ah÷2=12×8÷2=48平方厘米。'
          },
          {
            id: 'm5u8l5q5',
            type: 'choice',
            question: '一条路200米每隔5米栽树（两端都栽），需要几棵？',
            options: ['41棵', '40棵', '39棵', '42棵'],
            answer: '41棵',
            hint: '200÷5+1',
            explanation: '间隔数=200÷5=40，两端都栽棵数=40+1=41棵。'
          },
          {
            id: 'm5u8l5q6',
            type: 'fill',
            question: '甲袋有x颗糖，乙袋是甲袋的3倍，两袋共60颗。方程x+3x=60，x=___',
            answer: '15',
            hint: '4x=60',
            explanation: 'x+3x=60→4x=60→x=15。甲15颗，乙45颗。'
          },
          {
            id: 'm5u8l5q7',
            type: 'choice',
            question: '五年级数学中，"转化思想"体现在哪些知识中？',
            options: ['小数乘法转化整数乘法、平行四边形转化长方形', '只在方程中', '只在面积中', '只在乘法中'],
            answer: '小数乘法转化整数乘法、平行四边形转化长方形',
            hint: '[小数乘法]（数学五年级-第1单元-第1课）',
            explanation: '转化思想贯穿五年级数学：小数乘法转化为整数乘法，平行四边形割补转化为长方形，除数小数转化整数。回顾转化思想。'
          }
        ]
      }
    ]
  }
]
