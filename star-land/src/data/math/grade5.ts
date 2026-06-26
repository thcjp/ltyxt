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
        learningObjective: '我能用转化法计算小数乘整数，正确点出积的小数点',
        successCriteria: '①能说出小数乘整数的算理 ②能正确计算3道小数乘整数题',
        iDo: '家长用0.8×3=0.8+0.8+0.8=2.4示范，讲解小数乘整数就是求几个相同加数的和。',
        weDo: '亲子一起做1.5×4，先把1.5×4当作15×4=60，再点一位小数得6.0。',
        youDo: '孩子独立完成0.7×5、2.3×3等小数乘整数题目。',
        parentTips: '【家长预习】小数乘整数=先按整数乘法算，再看因数有几位小数，积就点几位小数。\n共学四步：\n①对话出题：问孩子"0.8×3等于多少？你能把它变成学过的整数乘法吗？"\n②孩子应答：先算8×3=24，因数0.8有一位小数，积点一位小数得2.4\n③答错引导：若孩子答0.24，用硬币演示——摆3堆每堆8角，数一数共2元4角=2.4元，说明不是0.24\n④快速检测：①0.7×5= ②1.5×4= ③2.3×3=',
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
          { type: 'tip', content: '先按整数乘，再数小数位，点上小数点', label: '助记口诀', animationType: 'pulse' },
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
            hint: '【期末真题】面积=长×宽=0.6×5',
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
        learningObjective: '我能计算小数乘小数，根据因数小数位数确定积的小数位数',
        successCriteria: '①能说出因数小数位数与积的小数位数关系 ②能正确计算3道小数乘小数题',
        iDo: '家长示范2.5×0.4，先算25×4=100，两个因数共两位小数，积点两位小数得1.00=1。',
        weDo: '亲子一起做1.2×0.3，先算12×3=36，共两位小数，积得0.36。',
        youDo: '孩子独立完成0.4×0.5、1.5×0.6等小数乘小数题目。',
        parentTips: '【家长预习】因数共有几位小数，积就点几位小数。位数不够时用0补足。\n共学四步：\n①对话出题：问孩子"0.6×0.7等于几？两个因数一共有几位小数？"\n②孩子应答：共有2位小数，先算6×7=42，点两位小数得0.42\n③答错引导：若孩子答4.2，用方格图演示——0.6×0.7就是0.6的十分之七，比0.6还小，所以不可能比1大\n④快速检测：①0.3×0.4= ②1.2×0.5= ③0.25×0.2=',
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
            options: ['0.2', '0.02', '2', '0.002'],
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
            hint: '先算3×2=6，共三位小数，位数不够补0',
            explanation: '先算3×2=6，两个因数共三位小数，6只有一位，前面补两个0得0.006。'
          },
          {
            id: 'm5u1l2q5',
            type: 'choice',
            question: '0.25×0.4的积化简后是多少？',
            options: ['0.1', '0.01', '1', '0.100'],
            answer: '0.1',
            hint: '先算25×4=100，共三位小数',
            explanation: '0.25×0.4：25×4=100，两个因数共三位小数，积点三位小数得0.100，化简后为0.1。'
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
        learningObjective: '我能用乘法运算律进行小数乘法的简便计算',
        successCriteria: '①能识别可凑整的因数组合 ②能用运算律简便计算2道题',
        iDo: '家长示范0.25×4.2×4=0.25×4×4.2=1×4.2=4.2，运用乘法交换律和结合律。',
        weDo: '亲子一起做0.8×1.25=1，运用乘法结合律凑整。',
        youDo: '孩子独立运用简便运算定律计算小数乘法。',
        parentTips: '【家长预习】整数乘法的交换律、结合律、分配律同样适用于小数乘法，关键找凑整组合。\n共学四步：\n①对话出题：问孩子"2.5×4.2×4，你能找到能凑整的两个数吗？"\n②孩子应答：2.5和4能凑成10，用交换律先算2.5×4=10，再算10×4.2=42\n③答错引导：若孩子从左到右硬算，提醒"找找哪两个数相乘正好得整数"，用0.25×4=1这类例子帮孩子建立凑整意识\n④快速检测：①0.25×7×4= ②1.25×8×3.2= ③0.5×2.7×2=',
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
            answer: '2和459',
            hint: '把102拆成100+2，用分配律',
            explanation: '4.5×102=4.5×（100+2）=4.5×100+4.5×2=450+9=459，第一空填2，第二空填459。'
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
            answer: '4、0.8、10',
            hint: '把3.2拆成4×0.8，分别凑整',
            explanation: '2.5×3.2×1.25=（2.5×4）×（0.8×1.25）=10×1=10。3.2拆成4×0.8，2.5×4=10，0.8×1.25=1。三个空分别填4、0.8、10。'
          },
          {
            id: 'm5u1l3q7',
            type: 'fill',
            question: '小数乘法简便运算中，1.25×___=10',
            answer: '8',
            hint: '[小数乘小数]（数学五年级-第1单元-第2课）',
            explanation: '1.25×8，先算125×8=1000，1.25共两位小数，再点两位小数得10.00=10，这是小数乘法中常见的凑整组合。'
          }
        ]
      },
      {
        id: 'm5u1l4',
        title: '小数乘法应用题——购物估算',
        order: 4,
        teachingMethod: '情境式，模拟购物场景学习估算',
        learningObjective: '我能用估算解决生活中的小数乘法问题',
        successCriteria: '①能把小数估成最接近的整数 ②能判断购物钱够不够',
        iDo: '家长模拟购物：买3.8元/千克的苹果2.5千克，估算大约花多少钱。3.8≈4，2.5≈3，4×3=12元。',
        weDo: '亲子一起估算：买5.2元的牛奶4盒，5.2≈5，5×4=20元。',
        youDo: '孩子独立解决购物估算问题。',
        parentTips: '【家长预习】估算时把小数看作最接近的整数，方便快速判断钱够不够。\n共学四步：\n①对话出题：问孩子"买3.8千克苹果每千克4.2元，带20元够吗？估一估"\n②孩子应答：3.8≈4，4.2≈4，4×4=16，16<20所以够\n③答错引导：若孩子不会估，教"四舍五入法"——3.8接近4，4.2也接近4，把两个数都往大估算出来的钱够了就一定够\n④快速检测：①5.1×3.9≈ ②2.3×6.1≈ ③9.8×2.1≈',
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
            question: '买2.5千克橘子，每千克4.8元。下面哪种估算最接近实际花费？',
            options: ['4×2=8元', '4×3=12元', '5×2=10元', '5×3=15元'],
            answer: '4×3=12元',
            hint: '4.8≈5还是4？2.5≈3还是2？算算实际花费再比较',
            explanation: '4.8×2.5=12元。4×3=12元与实际花费相同，最接近；5×2=10元差2元，5×3=15元差3元，4×2=8元差4元。'
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
        learningObjective: '我能综合运用小数乘法知识解决各类问题',
        successCriteria: '①能正确计算小数乘法 ②能判断结果合理性',
        iDo: '家长示范综合题，讲解小数乘法的各种题型和解题策略。',
        weDo: '亲子一起竞速做题，比比谁算得又快又准。',
        youDo: '孩子独立完成小数乘法综合检测，正确率≥85%。',
        parentTips: '【家长预习】检测前回顾：小数乘整数、小数乘小数、简便运算、估算，查漏补缺。\n共学四步：\n①对话出题：问孩子"小数乘法你学了哪几种？每种各举一个例子"\n②孩子应答：小数乘整数(0.8×3)、小数乘小数(0.6×0.7)、简便运算(2.5×4×2)、估算(3.8×4.2)\n③答错引导：若孩子说不全，家长拿纸写出四种类型，让孩子每种做一道找规律\n④快速检测：①0.9×7= ②1.5×0.6= ③0.25×4×1.7=',
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
            question: '一个数（0除外）乘0.99，积一定比原数？',
            options: ['小', '大', '相等', '无法确定'],
            answer: '小',
            hint: '0.99比1小还是大？',
            explanation: '0.99<1，所以一个数（0除外）乘0.99，积一定比原数小。同理，乘大于1的数，积比原数大。'
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
    title: '小数除法',
    subtitle: '掌握小数除法的计算方法，认识循环小数',
    order: 2,
    lessons: [
      {
        id: 'm5u2l1',
        title: '小数除以整数',
        order: 1,
        teachingMethod: 'CPA·P→A，商的小数点对齐被除数的小数点',
        learningObjective: '我能计算小数除以整数，正确对齐商的小数点',
        successCriteria: '①能说出商的小数点对齐规则 ②能正确计算3道小数除以整数题',
        iDo: '家长示范7.2÷6竖式：7÷6=1余1，落下2得12，12÷6=2，商的小数点对齐被除数得1.2。',
        weDo: '亲子一起做9.6÷4，先算96÷4=24，商的小数点对齐得2.4。',
        youDo: '孩子独立完成8.4÷6、12.5÷5等小数除以整数题目。',
        parentTips: '【家长预习】商的小数点要和被除数的小数点对齐。整数部分不够除时商0。\n共学四步：\n①对话出题：问孩子"7.2÷6等于几？商的小数点该点在哪里？"\n②孩子应答：先算72÷6=12，商的小数点对齐被除数的小数点，得1.2\n③答错引导：若孩子答12，用钱演示——7.2元平均分6份，每份1.2元不是12元，强调小数点对齐\n④快速检测：①4.8÷4= ②9.6÷8= ③5.4÷3=',
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
          { type: 'tip', content: '商的小数点，对齐被除数，不够除商零', label: '助记口诀', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm5u2l1q1',
            type: 'choice',
            question: '7.2÷6等于多少？',
            options: ['1.2', '12', '0.12', '1.6'],
            answer: '1.2',
            hint: '7÷6=1余1，落下2，12÷6=2',
            explanation: '7.2÷6：7÷6=1余1，点小数点，落下2得12，12÷6=2，商是1.2。'
          },
          {
            id: 'm5u2l1q2',
            type: 'fill',
            question: '9.6÷4=___',
            answer: '2.4',
            hint: '9÷4=2余1，落下6，16÷4=4',
            explanation: '9.6÷4：9÷4=2余1，点小数点，落下6得16，16÷4=4，商是2.4。'
          },
          {
            id: 'm5u2l1q3',
            type: 'choice',
            question: '下面计算正确的是？',
            options: ['8.4÷6=1.4', '8.4÷6=14', '8.4÷6=0.14', '8.4÷6=1.2'],
            answer: '8.4÷6=1.4',
            hint: '8÷6=1余2，落下4，24÷6=4',
            explanation: '8.4÷6：8÷6=1余2，点小数点，落下4得24，24÷6=4，商是1.4。'
          },
          {
            id: 'm5u2l1q4',
            type: 'fill',
            question: '12.5÷5=___',
            answer: '2.5',
            hint: '12÷5=2余2，落下5，25÷5=5',
            explanation: '12.5÷5：12÷5=2余2，点小数点，落下5得25，25÷5=5，商是2.5。'
          },
          {
            id: 'm5u2l1q5',
            type: 'choice',
            question: '0.96÷6的商是多少？',
            options: ['0.16', '1.6', '16', '0.016'],
            answer: '0.16',
            hint: '【期末真题】0÷6=0，点小数点，9÷6=1余3，落下6，36÷6=6',
            explanation: '0.96÷6：0÷6=0，点小数点，9÷6=1余3，落下6得36，36÷6=6，商是0.16。整数部分不够除商0。'
          },
          {
            id: 'm5u2l1q6',
            type: 'fill',
            question: '一根绳子长22.4米，平均剪成7段，每段长___米',
            answer: '3.2',
            hint: '22.4÷7',
            explanation: '22.4÷7：22÷7=3余1，点小数点，落下4得14，14÷7=2，商是3.2米。'
          },
          {
            id: 'm5u2l1q7',
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
        id: 'm5u2l2',
        title: '一个数除以小数——移动小数点',
        order: 2,
        teachingMethod: '支架式，除数变整数再除，除数和被除数小数点同时右移',
        learningObjective: '我能计算一个数除以小数，把除数变成整数再除',
        successCriteria: '①能说出除数变整数的移动规则 ②能正确计算3道除数是小数的题',
        iDo: '家长示范1.8÷0.3：把0.3变成3（小数点右移1位），1.8也右移1位变18，18÷3=6。',
        weDo: '亲子一起做4.5÷0.5：0.5变5，4.5变45，45÷5=9。',
        youDo: '孩子独立完成2.4÷0.6、7.5÷0.25等除以小数题目。',
        parentTips: '【家长预习】除数是小数时，先把除数变整数（小数点右移），被除数也右移相同位数，再除。\n共学四步：\n①对话出题：问孩子"1.2÷0.3怎么算？除数是小数怎么办？"\n②孩子应答：把0.3变整数小数点右移一位变3，被除数1.2也右移一位变12，12÷3=4\n③答错引导：若孩子不会移，用纸条演示——除数0.3变成3扩大10倍，被除数1.2也扩大10倍变12，商不变\n④快速检测：①2.4÷0.6= ②0.56÷0.8= ③3.6÷0.4=',
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
            id: 'm5u2l2q1',
            type: 'choice',
            question: '1.8÷0.3等于多少？',
            options: ['6', '0.6', '60', '0.06'],
            answer: '6',
            hint: '0.3变3，1.8变18',
            explanation: '1.8÷0.3：0.3变3（右移1位），1.8变18（也右移1位），18÷3=6。'
          },
          {
            id: 'm5u2l2q2',
            type: 'fill',
            question: '4.5÷0.5=___',
            answer: '9',
            hint: '0.5变5，4.5变45',
            explanation: '4.5÷0.5：0.5变5，4.5变45，45÷5=9。'
          },
          {
            id: 'm5u2l2q3',
            type: 'choice',
            question: '计算2.4÷0.6时，除数和被除数的小数点应该怎么移动？',
            options: ['都右移1位', '都右移2位', '都左移1位', '都左移2位'],
            answer: '都右移1位',
            hint: '0.6有几位小数？',
            explanation: '0.6有一位小数，所以除数和被除数的小数点都右移1位：0.6→6，2.4→24，24÷6=4。'
          },
          {
            id: 'm5u2l2q4',
            type: 'fill',
            question: '3.6÷0.05=___',
            answer: '72',
            hint: '0.05变5（右移2位），3.6变360',
            explanation: '3.6÷0.05：0.05变5（右移2位），3.6变360（右移2位补0），360÷5=72。'
          },
          {
            id: 'm5u2l2q5',
            type: 'choice',
            question: '7.5÷0.25等于多少？',
            options: ['30', '3', '300', '0.3'],
            answer: '30',
            hint: '0.25变25（右移2位），7.5变750',
            explanation: '7.5÷0.25：0.25变25（右移2位），7.5变750（右移2位补0），750÷25=30。'
          },
          {
            id: 'm5u2l2q6',
            type: 'fill',
            question: '一辆汽车2.5小时行120千米，平均每小时行___千米',
            answer: '48',
            hint: '120÷2.5',
            explanation: '120÷2.5：2.5变25（右移1位），120变1200（右移1位补0），1200÷25=48千米/时。'
          },
          {
            id: 'm5u2l2q7',
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
        id: 'm5u2l3',
        title: '商的近似数——四舍五入',
        order: 3,
        teachingMethod: '支架式，多除一位再四舍五入',
        learningObjective: '我能按要求求商的近似数',
        successCriteria: '①能用多除一位法求近似数 ②能正确四舍五入',
        iDo: '家长示范45.5÷6≈7.6（保留一位小数）：45÷6=7余3，35÷6=5余5，50÷6=8余2，得7.58...，保留一位四舍五入得7.6。',
        weDo: '亲子一起做32÷7≈4.6（保留一位小数）。',
        youDo: '孩子独立求商的近似数。',
        parentTips: '【家长预习】求商的近似数：多除一位，再看这一位四舍五入。保留几位小数就多除一位。\n共学四步：\n①对话出题：问孩子"5÷3保留两位小数约是多少？怎么算？"\n②孩子应答：多除一位除到第三位，5÷3≈1.666，第三位是6四舍五入，约等于1.67\n③答错引导：若孩子只除两位得1.66，提醒"多除一位才能判断要不要进位"，用1.666说明第三位6要进1\n④快速检测：①8÷3≈（保留两位）②10÷7≈（保留两位）③4÷9≈（保留一位）',
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
            id: 'm5u2l3q1',
            type: 'choice',
            question: '求商的近似数时，保留一位小数应该除到第几位？',
            options: ['第二位小数', '第一位小数', '第三位小数', '整数'],
            answer: '第二位小数',
            hint: '多除一位',
            explanation: '保留一位小数就多除一位，除到第二位小数，再看第二位四舍五入。'
          },
          {
            id: 'm5u2l3q2',
            type: 'fill',
            question: '45.5÷6≈___（保留一位小数）',
            answer: '7.6',
            hint: '算到7.58，看第二位8≥5进1',
            explanation: '45.5÷6=7.583...，保留一位小数看第二位8≥5进1，得7.6。'
          },
          {
            id: 'm5u2l3q3',
            type: 'choice',
            question: '32÷7≈？（保留一位小数）',
            options: ['4.6', '4.5', '4.57', '5'],
            answer: '4.6',
            hint: '32÷7=4.571...，看第二位7≥5',
            explanation: '32÷7=4.571...，保留一位小数看第二位7≥5进1，得4.6。'
          },
          {
            id: 'm5u2l3q4',
            type: 'fill',
            question: '10÷3≈___（保留两位小数）',
            answer: '3.33',
            hint: '10÷3=3.333...，看第三位3<5舍去',
            explanation: '10÷3=3.333...，保留两位小数看第三位3<5舍去，得3.33。'
          },
          {
            id: 'm5u2l3q5',
            type: 'choice',
            question: '下面哪个是正确的四舍五入？',
            options: ['15.6÷3.5≈4.5（保留一位）', '15.6÷3.5≈4.4（保留一位）', '15.6÷3.5≈4（保留一位）', '15.6÷3.5≈5.0（保留一位）'],
            answer: '15.6÷3.5≈4.5（保留一位）',
            hint: '15.6÷3.5=4.457...',
            explanation: '15.6÷3.5=4.457...，保留一位小数看第二位5≥5进1，得4.5。'
          },
          {
            id: 'm5u2l3q6',
            type: 'fill',
            question: '李叔叔用18.9元买了4千克苹果，每千克大约___元（保留一位小数）',
            answer: '4.7',
            hint: '18.9÷4=4.725...',
            explanation: '18.9÷4=4.725，保留一位小数看第二位2<5舍去，得4.7元。'
          },
          {
            id: 'm5u2l3q7',
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
        id: 'm5u2l4',
        title: '循环小数',
        order: 4,
        teachingMethod: '探究式：发现规律，认识循环小数',
        learningObjective: '我能认识循环小数并正确读写',
        successCriteria: '①能说出循环小数的特征 ②能用循环节表示循环小数',
        iDo: '家长示范1÷3=0.333...，小数部分3不断重复出现，这就是循环小数。',
        weDo: '亲子一起算2÷3=0.666...，发现循环规律。',
        youDo: '孩子独立辨认循环小数，用简便记法表示。',
        parentTips: '【家长预习】循环小数：小数部分有一个或几个数字依次不断重复出现。用循环节上加点表示。\n共学四步：\n①对话出题：问孩子"1÷3=0.333...这个小数有什么特点？"\n②孩子应答：3不断重复出现，这是循环小数，循环节是3\n③答错引导：若孩子不理解，多算几个——2÷3=0.666...，4÷11=0.3636...，引导发现"有的一个数字重复，有的几个数字重复"\n④快速检测：①1÷6=（写出循环小数）②2÷9= ③5÷11=',
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
            id: 'm5u2l4q1',
            type: 'choice',
            question: '下面哪个是循环小数？',
            options: ['0.333...', '0.35', '0.125', '3.14'],
            answer: '0.333...',
            hint: '哪个数的小数部分有数字重复',
            explanation: '0.333...的小数部分3不断重复出现，是循环小数。其他选项小数部分不重复。'
          },
          {
            id: 'm5u2l4q2',
            type: 'fill',
            question: '1÷3=0.333...，循环节是___',
            answer: '3',
            hint: '哪个数字在重复',
            explanation: '0.333...中数字3不断重复，所以循环节是3。'
          },
          {
            id: 'm5u2l4q3',
            type: 'choice',
            question: '0.333...用简便记法表示是？',
            options: ['0.3̇', '0.3', '0.3̄', '0.33'],
            answer: '0.3̇',
            hint: '在循环节上加点',
            explanation: '循环节是3（一位），在3上点一个点，记作0.3̇。'
          },
          {
            id: 'm5u2l4q4',
            type: 'fill',
            question: '5÷6=0.8333...，循环节是___',
            answer: '3',
            hint: '从哪一位开始重复',
            explanation: '5÷6=0.8333...，从第二位小数开始3不断重复，循环节是3。'
          },
          {
            id: 'm5u2l4q5',
            type: 'choice',
            question: '下面说法正确的是？',
            options: ['循环小数是无限小数', '循环小数是有限小数', '循环小数没有循环节', '所有小数都是循环小数'],
            answer: '循环小数是无限小数',
            hint: '循环小数的小数部分会一直重复',
            explanation: '循环小数的小数部分无限重复，所以是无限小数。有限小数的小数部分位数有限。'
          },
          {
            id: 'm5u2l4q6',
            type: 'fill',
            question: '1÷7=0.142857142857...，循环节是___',
            answer: '142857',
            hint: '找重复的数字序列',
            explanation: '1÷7=0.142857142857...，数字序列142857不断重复，循环节是142857。'
          },
          {
            id: 'm5u2l4q7',
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
        id: 'm5u2l5',
        title: '小数除法综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测小数除法',
        learningObjective: '我能综合运用小数除法知识解决各类问题',
        successCriteria: '①能正确计算各类小数除法 ②能判断商的合理性',
        iDo: '家长示范综合题，讲解小数除法的各种题型和解题策略。',
        weDo: '亲子一起竞速做题，比比谁算得又快又准。',
        youDo: '孩子独立完成小数除法综合检测。',
        parentTips: '【家长预习】检测前回顾：小数除以整数、除以小数、商的近似数、循环小数。\n共学四步：\n①对话出题：问孩子"小数除法你学了哪几种？分别举个例子"\n②孩子应答：除以整数(7.2÷6)、除以小数(1.2÷0.3)、求近似数(5÷3≈1.67)、循环小数(1÷3)\n③答错引导：若孩子混淆，家长帮整理四种类型卡片，让孩子各做一道分类练习\n④快速检测：①8.4÷7= ②2.7÷0.3= ③5÷6≈（保留两位）',
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
            id: 'm5u2l5q1',
            type: 'choice',
            question: '12.6÷0.3等于多少？',
            options: ['42', '4.2', '0.42', '420'],
            answer: '42',
            hint: '0.3变3，12.6变126',
            explanation: '12.6÷0.3：0.3变3（右移1位），12.6变126（也右移1位），126÷3=42。'
          },
          {
            id: 'm5u2l5q2',
            type: 'fill',
            question: '2.8÷0.4=___',
            answer: '7',
            hint: '0.4变4，2.8变28',
            explanation: '2.8÷0.4：0.4变4，2.8变28，28÷4=7。'
          },
          {
            id: 'm5u2l5q3',
            type: 'choice',
            question: '下面算式中，商最大的是？',
            options: ['6÷0.5', '6÷0.3', '6÷1.5', '6÷2'],
            answer: '6÷0.3',
            hint: '除数越小商越大',
            explanation: '除数越小商越大。0.3<0.5<1.5<2，所以6÷0.3的商最大（=20）。'
          },
          {
            id: 'm5u2l5q4',
            type: 'fill',
            question: '15÷7≈___（保留两位小数）',
            answer: '2.14',
            hint: '15÷7=2.142...',
            explanation: '15÷7=2.1428...，保留两位小数看第三位2<5舍去，得2.14。'
          },
          {
            id: 'm5u2l5q5',
            type: 'choice',
            question: '一个数（0除外）除以0.8，商比原数？',
            options: ['大', '小', '相等', '无法确定'],
            answer: '大',
            hint: '0.8<1，除以小于1的数',
            explanation: '0.8<1，一个数（0除外）除以小于1的数，商比原数大。同理除以大于1的数，商比原数小。'
          },
          {
            id: 'm5u2l5q6',
            type: 'fill',
            question: '小明花10.5元买了3千克苹果，每千克___元',
            answer: '3.5',
            hint: '10.5÷3',
            explanation: '10.5÷3=3.5元/千克。10÷3=3余1，点小数点，落下5得15，15÷3=5，商是3.5。'
          },
          {
            id: 'm5u2l5q7',
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
    id: 'm5u3',
    title: '简易方程',
    subtitle: '从算术到代数，用字母表示数，解方程',
    order: 3,
    lessons: [
      {
        id: 'm5u3l1',
        title: '用字母表示数——从算术到代数',
        order: 1,
        teachingMethod: 'CPA·C→P→A：桥梁过渡，从□到x',
        learningObjective: '我能用字母表示数和数量关系',
        successCriteria: '①能用字母表示简单的数量关系 ②能求含字母式子的值',
        iDo: '家长示范：小明今年a岁，爸爸比小明大25岁，爸爸是a+25岁。用字母表示数量关系。',
        weDo: '亲子一起用字母表示正方形周长C=4×a，面积S=a×a。',
        youDo: '孩子独立用字母表示数量关系和公式。',
        parentTips: '【家长预习】从□过渡到x，建立代数思维。字母可以表示任何数。\n共学四步：\n①对话出题：问孩子"小明今年a岁，爸爸比他大28岁，爸爸多少岁？"\n②孩子应答：爸爸是a+28岁\n③答错引导：若孩子不习惯用字母，先用□代替——小明□岁爸爸□+28岁，再说"数学家用字母a代替□更方便"\n④快速检测：①苹果每千克x元，3千克多少钱？②当a=5时，a+28=? ③汽车每小时b千米，4小时走多少千米？',
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
          { type: 'tip', content: '字母代替数，式子更清楚，运算像数字', label: '助记口诀', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm5u3l1q1',
            type: 'choice',
            question: '小明今年a岁，爸爸比小明大25岁，爸爸今年多少岁？',
            options: ['a+25', 'a-25', '25a', '25-a'],
            answer: 'a+25',
            hint: '爸爸比小明大25岁',
            explanation: '爸爸年龄=小明年龄+25=a+25。用字母表示数量关系。'
          },
          {
            id: 'm5u3l1q2',
            type: 'fill',
            question: '正方形边长a，周长C=___',
            answer: '4a',
            hint: '正方形周长=边长×4',
            explanation: '正方形周长=4×a=4a。省略乘号，数字写在前。'
          },
          {
            id: 'm5u3l1q3',
            type: 'choice',
            question: 'a×a可以简写成什么？',
            options: ['a²', '2a', 'aa', 'a+a'],
            answer: 'a²',
            hint: '两个相同的数相乘',
            explanation: 'a×a=a²，读作a的平方。2a=a×2=a+a，注意a²和2a不同。'
          },
          {
            id: 'm5u3l1q4',
            type: 'fill',
            question: '一辆汽车每小时行v千米，t小时行___千米',
            answer: 'vt',
            hint: '路程=速度×时间',
            explanation: '路程=速度×时间=v×t=vt。省略乘号。'
          },
          {
            id: 'm5u3l1q5',
            type: 'choice',
            question: '下面书写正确的是？',
            options: ['4a（表示4×a）', 'a4（表示a×4）', 'a+4写作4a', 'a×a写作2a'],
            answer: '4a（表示4×a）',
            hint: '【期末真题】数字在前字母在后，乘号省略',
            explanation: '4×a写作4a（数字在前）。a4不规范，a+4不能省略加号，a×a写作a²不是2a。'
          },
          {
            id: 'm5u3l1q6',
            type: 'fill',
            question: '苹果每千克x元，买5千克应付___元',
            answer: '5x',
            hint: '总价=单价×数量',
            explanation: '总价=单价×数量=x×5=5x元。省略乘号，数字在前。'
          },
          {
            id: 'm5u3l1q7',
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
        id: 'm5u3l2',
        title: '方程的意义——等式与天平',
        order: 2,
        teachingMethod: 'CPA·C：天平模型，等式=天平平衡',
        learningObjective: '我能判断一个式子是不是方程',
        successCriteria: '①能说出方程的两个条件 ②能正确判断方程',
        iDo: '家长用天平演示：左边放x+3克，右边放8克，天平平衡表示x+3=8，这是方程。',
        weDo: '亲子一起判断哪些是方程：3+5=8（等式但不是方程），x+5=8（方程）。',
        youDo: '孩子独立判断方程和等式。',
        parentTips: '【家长预习】方程：含有未知数的等式。两个条件缺一不可：是等式+含未知数。\n共学四步：\n①对话出题：问孩子"什么样的式子叫方程？x+5是方程吗？"\n②孩子应答：含有未知数的等式叫方程。x+5不是方程因为没有等号不是等式\n③答错引导：若孩子说x+5是方程，用天平比喻——天平平衡(等式)且一边有未知数才是方程，x+5没有天平(等号)所以不是\n④快速检测：判断哪些是方程：①3+5=8 ②x+5=12 ③2x ④6-x=2',
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
            id: 'm5u3l2q1',
            type: 'choice',
            question: '下面哪个是方程？',
            options: ['x+5=12', '3+5=8', 'x+5', '5>3'],
            answer: 'x+5=12',
            hint: '方程=等式+未知数',
            explanation: 'x+5=12是等式（有=号）且含有未知数x，所以是方程。3+5=8没有未知数，x+5没有等号，5>3是不等式。'
          },
          {
            id: 'm5u3l2q2',
            type: 'fill',
            question: '含有___的等式叫做方程',
            answer: '未知数',
            hint: '方程的两个条件',
            explanation: '方程的定义：含有未知数的等式。两个条件缺一不可。'
          },
          {
            id: 'm5u3l2q3',
            type: 'choice',
            question: '下面说法正确的是？',
            options: ['方程一定是等式', '等式一定是方程', '方程不一定是等式', '等式和方程无关'],
            answer: '方程一定是等式',
            hint: '方程是特殊的等式',
            explanation: '方程是含有未知数的等式，所以方程一定是等式。但等式不一定含未知数，所以不一定是方程。'
          },
          {
            id: 'm5u3l2q4',
            type: 'fill',
            question: '天平左边放x克，右边放50克，天平平衡。写出方程：___=50',
            answer: 'x',
            hint: '天平平衡=等式',
            explanation: '天平平衡表示左右相等，左边x=右边50，方程是x=50。'
          },
          {
            id: 'm5u3l2q5',
            type: 'choice',
            question: '下面哪组中都是方程？',
            options: ['x=5, 2x+1=7', '3+2=5, x=5', 'x+1, 2x=6', '5>3, x=2'],
            answer: 'x=5, 2x+1=7',
            hint: '每个都必须是等式且含未知数',
            explanation: 'x=5和2x+1=7都是含有未知数的等式，都是方程。其他选项中有不是方程的。'
          },
          {
            id: 'm5u3l2q6',
            type: 'fill',
            question: '比a多5的数等于15，写成方程是___=15',
            answer: 'a+5',
            hint: '比a多5就是a+5',
            explanation: '比a多5的数是a+5，等于15，方程是a+5=15。'
          },
          {
            id: 'm5u3l2q7',
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
        id: 'm5u3l3',
        title: '解方程——等式性质',
        order: 3,
        teachingMethod: '支架式：天平原理，等式两边同加减同数',
        learningObjective: '我能运用等式的性质解简单方程',
        successCriteria: '①能说出等式的两条性质 ②能解形如x+a=b的方程',
        iDo: '家长示范解x+5=12：等式两边同时减5，x+5-5=12-5，x=7。',
        weDo: '亲子一起解3x=15：等式两边同时除以3，x=5。',
        youDo: '孩子独立解简单方程。',
        parentTips: '【家长预习】等式性质：两边同加减同数，等式仍成立。两边同乘除同数（0除外），等式仍成立。\n共学四步：\n①对话出题：问孩子"解方程x+5=12，等式两边怎么变？"\n②孩子应答：两边同减5，x+5-5=12-5，x=7\n③答错引导：若孩子不会，用天平演示——左边x+5右边12，两边同时拿走5，左边剩x右边剩7，所以x=7\n④快速检测：解方程：①x+8=20 ②x-3=15 ③3x=18',
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
            id: 'm5u3l3q1',
            type: 'choice',
            question: '解方程x+8=20，x等于多少？',
            options: ['12', '28', '20', '8'],
            answer: '12',
            hint: '两边同时减8',
            explanation: 'x+8=20，两边同时减8：x+8-8=20-8，x=12。检验：12+8=20✓'
          },
          {
            id: 'm5u3l3q2',
            type: 'fill',
            question: '解方程x-7=15，x=___',
            answer: '22',
            hint: '两边同时加7',
            explanation: 'x-7=15，两边同时加7：x-7+7=15+7，x=22。检验：22-7=15✓'
          },
          {
            id: 'm5u3l3q3',
            type: 'choice',
            question: '解方程3x=21，x等于多少？',
            options: ['7', '63', '18', '24'],
            answer: '7',
            hint: '两边同时除以3',
            explanation: '3x=21，两边同时除以3：3x÷3=21÷3，x=7。检验：3×7=21✓'
          },
          {
            id: 'm5u3l3q4',
            type: 'fill',
            question: '解方程x÷4=5，x=___',
            answer: '20',
            hint: '两边同时乘4',
            explanation: 'x÷4=5，两边同时乘4：x÷4×4=5×4，x=20。检验：20÷4=5✓'
          },
          {
            id: 'm5u3l3q5',
            type: 'choice',
            question: '解方程2x+3=11，第一步应该怎么做？',
            options: ['两边同时减3', '两边同时除以2', '两边同时加3', '两边同时乘2'],
            answer: '两边同时减3',
            hint: '先把3移到右边',
            explanation: '2x+3=11，第一步两边同时减3：2x=11-3=8，再两边除以2：x=4。'
          },
          {
            id: 'm5u3l3q6',
            type: 'fill',
            question: '解方程5x-4=16，x=___',
            answer: '4',
            hint: '先两边加4，再两边除以5',
            explanation: '5x-4=16，两边加4：5x=20，两边除以5：x=4。检验：5×4-4=16✓'
          },
          {
            id: 'm5u3l3q7',
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
        id: 'm5u3l4',
        title: '列方程解应用题',
        order: 4,
        teachingMethod: '情境式，找等量关系→设未知数→列方程→解方程',
        learningObjective: '我能用列方程的方法解决实际问题',
        successCriteria: '①能找等量关系设未知数 ②能列方程并求解检验',
        iDo: '家长示范：小明比小红多5本书，两人共25本，小红有几本？设小红x本，x+(x+5)=25。',
        weDo: '亲子一起列方程解：一个数的3倍加2等于14，求这个数。',
        youDo: '孩子独立列方程解应用题。',
        parentTips: '【家长预习】列方程四步：1.找等量关系 2.设未知数 3.列方程 4.解方程并检验。\n共学四步：\n①对话出题：问孩子"苹果比梨多5个，梨有x个，苹果有多少个？等量关系是什么？"\n②孩子应答：苹果=梨+5，即苹果=x+5\n③答错引导：若孩子找不出等量关系，教"找关键词法"——看到"比...多"就是大数=小数+差，看到"共"就是加法\n④快速检测：列方程解决：①一个数加上8等于20，这个数是几？②3x=15，x=? ③x的2倍减3等于7，x=?',
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
            id: 'm5u3l4q1',
            type: 'choice',
            question: '一个数的3倍加2等于14，设这个数为x，方程是？',
            options: ['3x+2=14', '3x-2=14', '3(x+2)=14', 'x+3+2=14'],
            answer: '3x+2=14',
            hint: '3倍是3x，加2，等于14',
            explanation: '一个数的3倍=3x，加2=3x+2，等于14，方程是3x+2=14。解：3x=12，x=4。'
          },
          {
            id: 'm5u3l4q2',
            type: 'fill',
            question: '小明有x颗糖，小红比小明多3颗，两人共17颗。方程是x+(x+3)=17，x=___',
            answer: '7',
            hint: '2x+3=17，2x=14',
            explanation: 'x+(x+3)=17→2x+3=17→2x=14→x=7。小明7颗，小红10颗，共17颗✓'
          },
          {
            id: 'm5u3l4q3',
            type: 'choice',
            question: '小明比小红多5本书，两人共25本。设小红有x本，方程是？',
            options: ['x+(x+5)=25', 'x+5=25', 'x-x+5=25', '2x-5=25'],
            answer: 'x+(x+5)=25',
            hint: '小红x本，小明x+5本，共25本',
            explanation: '小红x本，小明(x+5)本，共25本：x+(x+5)=25。解：2x=20，x=10。小红10本，小明15本。'
          },
          {
            id: 'm5u3l4q4',
            type: 'fill',
            question: '一个数减去5等于12，设这个数为x，x=___',
            answer: '17',
            hint: 'x-5=12',
            explanation: 'x-5=12，两边加5：x=17。检验：17-5=12✓'
          },
          {
            id: 'm5u3l4q5',
            type: 'choice',
            question: '苹果每千克5元，买x千克花了30元。方程是？',
            options: ['5x=30', 'x+5=30', 'x-5=30', '5+x=30'],
            answer: '5x=30',
            hint: '总价=单价×数量',
            explanation: '总价=单价×数量=5×x=5x=30。解：x=6。买了6千克。'
          },
          {
            id: 'm5u3l4q6',
            type: 'fill',
            question: '一个数的4倍减去3等于17，设这个数为x，x=___',
            answer: '5',
            hint: '4x-3=17',
            explanation: '4x-3=17，两边加3：4x=20，两边除以4：x=5。检验：4×5-3=17✓'
          },
          {
            id: 'm5u3l4q7',
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
        id: 'm5u3l5',
        title: '方程综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测简易方程知识',
        learningObjective: '我能综合运用简易方程知识解决各类问题',
        successCriteria: '①能正确判断方程 ②能解方程并应用',
        iDo: '家长示范综合题，讲解用字母表示数、方程意义、解方程和列方程应用题。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成方程综合检测。',
        parentTips: '【家长预习】检测前回顾：字母表示数、方程定义、等式性质、列方程四步法。\n共学四步：\n①对话出题：问孩子"方程这一单元你学了哪些知识？"\n②孩子应答：用字母表示数、方程的定义、等式的性质、列方程解决问题\n③答错引导：若孩子说不全，家长拿纸写出四个知识点让孩子每个举一例\n④快速检测：①判断x-7=10是不是方程 ②解方程x+12=30 ③用方程表示"比x多5的数是18"',
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
            id: 'm5u3l5q1',
            type: 'choice',
            question: '下面哪个是方程？',
            options: ['2x+1=9', '2+1=3', '2x+1', 'x>3'],
            answer: '2x+1=9',
            hint: '方程=等式+未知数',
            explanation: '2x+1=9是等式且含未知数x，是方程。2+1=3无未知数，2x+1无等号，x>3是不等式。'
          },
          {
            id: 'm5u3l5q2',
            type: 'fill',
            question: '解方程4x+5=25，x=___',
            answer: '5',
            hint: '两边减5，再除以4',
            explanation: '4x+5=25，两边减5：4x=20，两边除以4：x=5。检验：4×5+5=25✓'
          },
          {
            id: 'm5u3l5q3',
            type: 'choice',
            question: '下面哪个数同时是2、3、5的倍数？',
            options: ['15', '30', '45', '50'],
            answer: '30',
            hint: '同时满足2的倍数（末尾偶数）、3的倍数（各位和是3的倍数）、5的倍数（末尾0或5）',
            explanation: '30末尾是0（2和5的倍数），3+0=3是3的倍数。15不是2的倍数，45不是2的倍数，50不是3的倍数。'
          },
          {
            id: 'm5u3l5q4',
            type: 'fill',
            question: '一个数x的5倍减去7等于18，解得x=___',
            answer: '5',
            hint: '5x-7=18',
            explanation: '5x-7=18，两边加7：5x=25，两边除以5：x=5。检验：5×5-7=18✓'
          },
          {
            id: 'm5u3l5q5',
            type: 'choice',
            question: '甲乙两数和是30，甲是乙的2倍。设乙为x，方程是？',
            options: ['x+2x=30', '2x=30', 'x+2=30', '2x-x=30'],
            answer: 'x+2x=30',
            hint: '乙x，甲2x，共30',
            explanation: '乙x，甲2x，和=30：x+2x=30，3x=30，x=10。乙10，甲20。'
          },
          {
            id: 'm5u3l5q6',
            type: 'fill',
            question: '长方形周长24厘米，长是宽的2倍。设宽x厘米，方程2(x+2x)=24，x=___',
            answer: '4',
            hint: '2(x+2x)=24→6x=24',
            explanation: '2(x+2x)=24→6x=24→x=4。宽4厘米，长8厘米。检验：2×(4+8)=24✓'
          },
          {
            id: 'm5u3l5q7',
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
    id: 'm5u4',
    title: '多边形的面积',
    subtitle: '探索平行四边形、三角形、梯形的面积公式',
    order: 4,
    lessons: [
      {
        id: 'm5u4l1',
        title: '平行四边形面积——割补法',
        order: 1,
        teachingMethod: 'CPA·P→A：剪拼操作，割补转化为长方形',
        learningObjective: '我能用割补法推导并计算平行四边形的面积',
        successCriteria: '①能说出平行四边形面积公式 ②能正确计算面积',
        iDo: '家长用纸片剪一个平行四边形，沿高剪开，平移拼成长方形。面积=底×高。',
        weDo: '亲子一起推导：长方形的长=平行四边形的底，宽=平行四边形的高，面积=底×高。',
        youDo: '孩子独立计算平行四边形面积。',
        parentTips: '【家长预习】平行四边形面积=底×高（S=ah）。注意底和高要对应。\n共学四步：\n①对话出题：问孩子"平行四边形面积怎么算？公式是什么？"\n②孩子应答：平行四边形面积=底×高，S=ah\n③答错引导：若孩子说底×斜边，拿一张平行四边形纸剪拼成长方形演示——沿高剪开拼过去变成长方形，长=底宽=高，所以面积=底×高\n④快速检测：①底6高4面积=? ②底8高5面积=? ③底10高3面积=?',
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
          { type: 'tip', content: '底乘高是平行，割补变成长方形', label: '助记口诀', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm5u4l1q1',
            type: 'choice',
            question: '平行四边形的面积公式是？',
            options: ['底×高', '底×高÷2', '（底+底）×高', '底+高'],
            answer: '底×高',
            hint: '割补成长方形后推导',
            explanation: '平行四边形割补成长方形，长=底，宽=高，面积=底×高（S=ah）。'
          },
          {
            id: 'm5u4l1q2',
            type: 'fill',
            question: '平行四边形底8厘米高5厘米，面积=___平方厘米',
            answer: '40',
            hint: 'S=底×高=8×5',
            explanation: 'S=ah=8×5=40平方厘米。'
          },
          {
            id: 'm5u4l1q3',
            type: 'choice',
            question: '一个平行四边形面积是36平方厘米，底是9厘米，高是多少？',
            options: ['4厘米', '6厘米', '5厘米', '3厘米'],
            answer: '4厘米',
            hint: '高=面积÷底=36÷9',
            explanation: 'h=S÷a=36÷9=4厘米。'
          },
          {
            id: 'm5u4l1q4',
            type: 'fill',
            question: '平行四边形面积是60平方米，高是6米，底是___米',
            answer: '10',
            hint: '底=面积÷高=60÷6',
            explanation: 'a=S÷h=60÷6=10米。'
          },
          {
            id: 'm5u4l1q5',
            type: 'choice',
            question: '下面两个平行四边形（等底等高）的面积关系是？',
            options: ['相等', '不等', '无法比较', '看形状'],
            answer: '相等',
            hint: '【期末真题】面积只与底和高有关',
            explanation: '等底等高的平行四边形面积相等。面积只与底和高有关，与形状（倾斜程度）无关。'
          },
          {
            id: 'm5u4l1q6',
            type: 'fill',
            question: '一个平行四边形底12分米，高比底少4分米，面积=___平方分米',
            answer: '96',
            hint: '先求高=12-4=8，再求面积',
            explanation: '高=12-4=8分米，S=12×8=96平方分米。'
          },
          {
            id: 'm5u4l1q7',
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
        id: 'm5u4l2',
        title: '三角形面积——拼合法',
        order: 2,
        teachingMethod: 'CPA·P：两个完全相同的三角形拼成平行四边形',
        learningObjective: '我能用拼组法推导并计算三角形的面积',
        successCriteria: '①能说出三角形面积公式 ②能正确计算面积',
        iDo: '家长用两个完全相同的三角形拼成一个平行四边形。三角形面积=平行四边形面积÷2=底×高÷2。',
        weDo: '亲子一起推导：两个三角形拼成的平行四边形底=三角形底，高=三角形高。',
        youDo: '孩子独立计算三角形面积。',
        parentTips: '【家长预习】三角形面积=底×高÷2（S=ah÷2）。别忘了除以2！\n共学四步：\n①对话出题：问孩子"三角形面积怎么算？为什么要除以2？"\n②孩子应答：三角形面积=底×高÷2，因为两个完全相同的三角形拼成一个平行四边形\n③答错引导：若孩子忘除2，拿两个相同的三角形纸片拼成平行四边形——平行四边形面积是底×高，三角形是它的一半所以要÷2\n④快速检测：①底5高4面积=? ②底6高8面积=? ③底10高3面积=?',
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
            id: 'm5u4l2q1',
            type: 'choice',
            question: '三角形面积公式是？',
            options: ['底×高÷2', '底×高', '底+高', '底×高×2'],
            answer: '底×高÷2',
            hint: '两个三角形拼成平行四边形，面积是一半',
            explanation: '两个完全相同的三角形拼成平行四边形，S三角形=S平行四边形÷2=底×高÷2。'
          },
          {
            id: 'm5u4l2q2',
            type: 'fill',
            question: '三角形底8厘米高5厘米，面积=___平方厘米',
            answer: '20',
            hint: 'S=8×5÷2',
            explanation: 'S=ah÷2=8×5÷2=20平方厘米。'
          },
          {
            id: 'm5u4l2q3',
            type: 'choice',
            question: '一个三角形面积是24平方厘米，底是8厘米，高是多少？',
            options: ['6厘米', '3厘米', '4厘米', '12厘米'],
            answer: '6厘米',
            hint: '高=面积×2÷底',
            explanation: 'h=S×2÷a=24×2÷8=6厘米。注意面积公式有÷2，反推时要×2。'
          },
          {
            id: 'm5u4l2q4',
            type: 'fill',
            question: '三角形面积是45平方米，高是9米，底是___米',
            answer: '10',
            hint: '底=面积×2÷高',
            explanation: 'a=S×2÷h=45×2÷9=10米。'
          },
          {
            id: 'm5u4l2q5',
            type: 'choice',
            question: '一个直角三角形两条直角边分别是6厘米和8厘米，面积是？',
            options: ['24平方厘米', '48平方厘米', '12平方厘米', '14平方厘米'],
            answer: '24平方厘米',
            hint: '直角边就是底和高',
            explanation: '直角三角形的两条直角边就是底和高。S=6×8÷2=24平方厘米。'
          },
          {
            id: 'm5u4l2q6',
            type: 'fill',
            question: '等底等高的三角形和平行四边形，三角形面积是平行四边形的___',
            answer: '一半',
            hint: '三角形面积=底×高÷2，平行四边形=底×高',
            explanation: '等底等高时，三角形面积=平行四边形面积÷2，即三角形面积是平行四边形的一半。'
          },
          {
            id: 'm5u4l2q7',
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
        id: 'm5u4l3',
        title: '梯形面积——拼合法',
        order: 3,
        teachingMethod: 'CPA·P：两个完全相同的梯形拼成平行四边形',
        learningObjective: '我能用拼组法推导并计算梯形的面积',
        successCriteria: '①能说出梯形面积公式 ②能正确计算面积',
        iDo: '家长用两个完全相同的梯形拼成一个平行四边形。梯形面积=（上底+下底）×高÷2。',
        weDo: '亲子一起推导：拼成的平行四边形底=上底+下底，高=梯形高。',
        youDo: '孩子独立计算梯形面积。',
        parentTips: '【家长预习】梯形面积=（上底+下底）×高÷2（S=(a+b)h÷2）。上底加下底，乘高除以2。\n共学四步：\n①对话出题：问孩子"梯形面积公式是什么？每一步是什么意思？"\n②孩子应答：(上底+下底)×高÷2，上底加下底拼成平行四边形的底，乘高再除以2\n③答错引导：若孩子记不住，拿两个相同梯形拼成平行四边形——平行四边形的底=上底+下底，高不变，梯形是一半所以÷2\n④快速检测：①上3下5高4面积=? ②上2下6高3面积=? ③上4下8高5面积=?',
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
            id: 'm5u4l3q1',
            type: 'choice',
            question: '梯形面积公式是？',
            options: ['（上底+下底）×高÷2', '上底×下底×高', '（上底+下底）×高', '上底×高÷2'],
            answer: '（上底+下底）×高÷2',
            hint: '两个梯形拼成平行四边形',
            explanation: '两个梯形拼成平行四边形，底=上底+下底，S梯形=S平行四边形÷2=(上底+下底)×高÷2。'
          },
          {
            id: 'm5u4l3q2',
            type: 'fill',
            question: '梯形上底4厘米下底6厘米高5厘米，面积=___平方厘米',
            answer: '25',
            hint: 'S=(4+6)×5÷2',
            explanation: 'S=(a+b)h÷2=(4+6)×5÷2=25平方厘米。'
          },
          {
            id: 'm5u4l3q3',
            type: 'choice',
            question: '梯形面积是30平方厘米，上底3厘米下底7厘米，高是多少？',
            options: ['6厘米', '3厘米', '5厘米', '10厘米'],
            answer: '6厘米',
            hint: '高=面积×2÷(上底+下底)',
            explanation: 'h=S×2÷(a+b)=30×2÷(3+7)=60÷10=6厘米。'
          },
          {
            id: 'm5u4l3q4',
            type: 'fill',
            question: '梯形面积是48平方米，上底5米下底7米，高是___米',
            answer: '8',
            hint: '高=48×2÷(5+7)',
            explanation: 'h=S×2÷(a+b)=48×2÷12=8米。'
          },
          {
            id: 'm5u4l3q5',
            type: 'choice',
            question: '一个梯形上底和下底相等，这个图形实际上是？',
            options: ['平行四边形', '三角形', '长方形', '正方形'],
            answer: '平行四边形',
            hint: '上底=下底时只有一组对边平行且相等',
            explanation: '梯形上底=下底时，两组对边都平行且相等，就是平行四边形。面积公式也适用：(a+a)h÷2=2ah÷2=ah。'
          },
          {
            id: 'm5u4l3q6',
            type: 'fill',
            question: '一堆圆木堆成梯形，顶层4根底层10根共7层，一共有___根',
            answer: '49',
            hint: '(4+10)×7÷2',
            explanation: '用梯形面积公式：(顶层+底层)×层数÷2=(4+10)×7÷2=49根。'
          },
          {
            id: 'm5u4l3q7',
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
        id: 'm5u4l4',
        title: '组合图形面积——分割与添补',
        order: 4,
        teachingMethod: '探究式，分割法和添补法求组合图形面积',
        learningObjective: '我能用分割法或添补法计算组合图形的面积',
        successCriteria: '①能说出分割法和添补法的区别 ②能正确计算组合图形面积',
        iDo: '家长示范：一个L形图形，可以分割成两个长方形，分别求面积再相加。',
        weDo: '亲子一起用添补法：把缺角补上成大长方形，减去补的部分。',
        youDo: '孩子独立用分割法或添补法求组合图形面积。',
        parentTips: '【家长预习】组合图形面积：分割法（分成基本图形相加）或添补法（补成大图形减去补的部分）。\n共学四步：\n①对话出题：问孩子"一个L形图形怎么算面积？有几种方法？"\n②孩子应答：分割法分成两个长方形相加，或添补法补成大长方形减去小长方形\n③答错引导：若孩子不会分，拿纸画L形引导"可以在这里切一刀分成两个长方形"，或"在外面补一块变成大长方形再减掉补的"\n④快速检测：①一个长方形上接一个三角形，给数据算面积 ②L形图形分割法 ③凹字形添补法',
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
            id: 'm5u4l4q1',
            type: 'choice',
            question: '求组合图形面积的常用方法有？',
            options: ['分割法和添补法', '乘法和除法', '加法和减法', '估算法'],
            answer: '分割法和添补法',
            hint: '分成基本图形或补成大图形',
            explanation: '分割法：分成基本图形分别计算再相加。添补法：补成大图形减去补的部分。'
          },
          {
            id: 'm5u4l4q2',
            type: 'fill',
            question: '一个L形图形分成两个长方形：8×5和4×3，面积=___',
            answer: '52',
            hint: '40+12',
            explanation: '分割法：8×5+4×3=40+12=52平方单位。'
          },
          {
            id: 'm5u4l4q3',
            type: 'choice',
            question: '一个房子侧面（三角形+长方形），三角形底8米高3米，长方形8米×6米，面积是？',
            options: ['60平方米', '48平方米', '12平方米', '72平方米'],
            answer: '60平方米',
            hint: '三角形面积+长方形面积',
            explanation: '三角形面积=8×3÷2=12，长方形面积=8×6=48，总面积=12+48=60平方米。'
          },
          {
            id: 'm5u4l4q4',
            type: 'fill',
            question: '一个图形添补成长方形10×8=80，补掉的部分是4×3=12，原图形面积=___',
            answer: '68',
            hint: '80-12',
            explanation: '添补法：大图形面积-补的部分=80-12=68平方单位。'
          },
          {
            id: 'm5u4l4q5',
            type: 'choice',
            question: '一个梯形挖去一个三角形，这种组合图形用什么方法求面积？',
            options: ['梯形面积-三角形面积', '梯形面积+三角形面积', '只算梯形面积', '只算三角形面积'],
            answer: '梯形面积-三角形面积',
            hint: '挖去就是减',
            explanation: '梯形挖去三角形，剩余面积=梯形面积-三角形面积。这是添补法的逆向应用。'
          },
          {
            id: 'm5u4l4q6',
            type: 'fill',
            question: '一个长方形12×8中挖去一个底6高4的三角形，剩余面积=___平方厘米',
            answer: '84',
            hint: '长方形面积-三角形面积',
            explanation: '长方形面积=12×8=96，三角形面积=6×4÷2=12，剩余=96-12=84平方厘米。'
          },
          {
            id: 'm5u4l4q7',
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
        id: 'm5u4l5',
        title: '面积综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测多边形面积',
        learningObjective: '我能综合运用多边形面积公式解决问题',
        successCriteria: '①能记住三个面积公式 ②能正确选择公式计算',
        iDo: '家长示范综合题，讲解各种多边形面积公式和组合图形解法。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成面积综合检测。',
        parentTips: '【家长预习】检测前回顾：平行四边形S=ah，三角形S=ah÷2，梯形S=(a+b)h÷2，组合图形分割/添补。\n共学四步：\n①对话出题：问孩子"三个面积公式分别是什么？有什么联系？"\n②孩子应答：平行四边形S=ah，三角形S=ah÷2，梯形S=(a+b)h÷2，三角形和梯形都要÷2\n③答错引导：若孩子记混，整理成表格贴墙上——平行四边形底×高，三角形底×高÷2，梯形(上+下)×高÷2\n④快速检测：①平行四边形底5高4 ②三角形底6高8 ③梯形上3下5高4',
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
            id: 'm5u4l5q1',
            type: 'choice',
            question: '等底等高的平行四边形和三角形，面积关系是？',
            options: ['平行四边形面积是三角形的2倍', '面积相等', '三角形面积是平行四边形的2倍', '无法比较'],
            answer: '平行四边形面积是三角形的2倍',
            hint: '平行四边形S=ah，三角形S=ah÷2',
            explanation: '等底等高时，S平行四边形=ah，S三角形=ah÷2，平行四边形面积是三角形的2倍。'
          },
          {
            id: 'm5u4l5q2',
            type: 'fill',
            question: '梯形上底5下底9高6，面积=___平方厘米',
            answer: '42',
            hint: '(5+9)×6÷2',
            explanation: 'S=(5+9)×6÷2=14×6÷2=42平方厘米。'
          },
          {
            id: 'm5u4l5q3',
            type: 'choice',
            question: '一个平行四边形面积48平方厘米，底8厘米，高多少？',
            options: ['6厘米', '4厘米', '8厘米', '12厘米'],
            answer: '6厘米',
            hint: '高=面积÷底',
            explanation: 'h=S÷a=48÷8=6厘米。'
          },
          {
            id: 'm5u4l5q4',
            type: 'fill',
            question: '三角形底12高7，面积=___平方厘米',
            answer: '42',
            hint: '12×7÷2',
            explanation: 'S=12×7÷2=42平方厘米。'
          },
          {
            id: 'm5u4l5q5',
            type: 'choice',
            question: '一个组合图形由平行四边形(底8高5)和三角形(底8高3)组成，总面积是？',
            options: ['52平方厘米', '64平方厘米', '28平方厘米', '40平方厘米'],
            answer: '52平方厘米',
            hint: '平行四边形面积+三角形面积',
            explanation: '平行四边形=8×5=40，三角形=8×3÷2=12，总面积=40+12=52平方厘米。'
          },
          {
            id: 'm5u4l5q6',
            type: 'fill',
            question: '一堆钢管顶层5根底层11根共7层，一共有___根',
            answer: '56',
            hint: '(5+11)×7÷2',
            explanation: '用梯形面积公式：(5+11)×7÷2=16×7÷2=56根。'
          },
          {
            id: 'm5u4l5q7',
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
  id: 'm5u5',
  title: '因数与倍数',
  subtitle: '从整除关系出发，探索因数倍数的奥秘，认识质数与合数',
  order: 5,
  lessons: [
    {
      id: 'm5u5l1',
      title: '因数与倍数的认识——整除关系',
      order: 1,
      teachingMethod: 'CPA·C→P→A，实物分组引出因数倍数概念',
      learningObjective: '我能理解因数和倍数的概念，会找一个数的因数和倍数',
      successCriteria: '①能说出因数倍数的关系 ②能正确找全一个数的因数',
      iDo: '家长用12颗糖，3颗一组分，能分4组。12÷3=4，说明3和4是12的因数，12是3和4的倍数。',
      weDo: '亲子一起找15的因数：1×15=15，3×5=15，所以15的因数有1、3、5、15。',
      youDo: '孩子独立找20的因数和3的倍数（前5个）。',
      parentTips: '【家长预习】因数和倍数相互依存，3×4=12则3和4是12的因数，12是3和4的倍数。\n共学四步：\n①对话出题：问孩子"12颗糖3颗一组能分几组？谁是因数谁是倍数？"\n②孩子应答：能分4组，3×4=12，3和4是12的因数，12是3和4的倍数\n③答错引导：拿12颗扣子实际分组，孩子看到3组×4颗=12颗，再强调"因数倍数是相互的，不能单独说12是倍数"\n④快速检测：①找15的所有因数 ②找6的倍数(写3个) ③7的因数有哪些？',
      funElement: '数学笑话：老师问"6的因数有哪些？"小明答"1、2、3、6！"老师又问"7的因数呢？"小明想了想说"7太孤独了，只有1和自己！"老师说"答对了，这种孤独的数以后叫质数！"小游戏：因数连连看——写一个数，快速说出它的所有因数，和朋友比赛谁找得又快又全！',
      gsapAnimations: [
        '[GSAP:timeline|12颗糖分组引出因数倍数过程|1.5s|点击播放|power2.out]',
        '[GSAP:highlight|因数和倍数关键词高亮|0.8s|概念出现|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|因数倍数分组图：12颗糖分成3组|500x300|教学风|png|糖果分组]',
        '[IMG:illustration|找因数方法图：成对查找|400x300|教学风|png|因数配对]'
      ],
      content: [
        { type: 'text', content: '如果a×b=c（a、b、c都是非0自然数），那么a和b就是c的因数，c就是a和b的倍数。因数和倍数是相互依存的关系，不能单独说某个数是因数。' },
        { type: 'example', content: '12=3×4，所以3和4是12的因数，12是3和4的倍数。也可以说12=1×12，所以1和12也是12的因数。', label: '例题' },
        { type: 'formula', content: '找因数方法：从1开始，成对找。1×n，2×?，3×?...直到两个因数相遇或交叉。', label: '找因数口诀' },
        { type: 'example', content: '找18的因数：1×18=18，2×9=18，3×6=18，所以18的因数有1、2、3、6、9、18，共6个。', label: '例题' },
        { type: 'tip', content: '一个数的最小因数是1，最大因数是它本身。因数的个数是有限的。', label: '重要性质' },
        { type: 'tip', content: '一个数的最小倍数是它本身，没有最大倍数。倍数的个数是无限的。', label: '重要性质' },
        { type: 'animation', content: '12颗糖分成3组，引出因数和倍数概念', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '因数与倍数的认识',
            timelineConfig: {
              steps: [
                { id: 's1', description: '12颗糖，3颗一组', ttsNarration: '12颗糖，3颗一组' },
                { id: 's2', description: '能分4组：3×4=12', ttsNarration: '能分4组，3乘4等于12' },
                { id: 's3', description: '3和4是12的因数', ttsNarration: '3和4是12的因数' },
                { id: 's4', description: '12是3和4的倍数', ttsNarration: '12是3和4的倍数' },
              ]
            },
            ttsNarration: '12颗糖3颗一组能分4组，3和4是12的因数，12是3和4的倍数。',
          }
        },
        { type: 'tip', content: '因数倍数相互依，大数找因数小到大，小数找倍数成倍长', label: '助记口诀', animationType: 'pulse' },
      ],
      practiceQuestions: [
        {
          id: 'm5u5l1q1',
          type: 'choice',
          question: '12的因数有哪些？',
          options: ['1、2、3、4、6、12', '1、2、3、4、12', '1、3、4、12', '2、3、4、6'],
          answer: '1、2、3、4、6、12',
          hint: '从1开始成对找：1×12，2×6，3×4',
          explanation: '12=1×12=2×6=3×4，所以12的因数有1、2、3、4、6、12，共6个。'
        },
        {
          id: 'm5u5l1q2',
          type: 'fill',
          question: '5的倍数有（从小到大写前5个）：___',
          answer: '5、10、15、20、25',
          hint: '5的倍数就是5×1、5×2、5×3...',
          explanation: '5的倍数有5、10、15、20、25...（5×1=5，5×2=10，5×3=15，5×4=20，5×5=25）。'
        },
        {
          id: 'm5u5l1q3',
          type: 'choice',
          question: '下面哪组数中，第一个数是第二个数的倍数？',
          options: ['36和12', '12和36', '5和2', '7和14'],
          answer: '36和12',
          hint: '看第一个数能不能被第二个数整除',
          explanation: '36÷12=3，36是12的倍数。12÷36不能整除，5÷2不能整除，7÷14不能整除。'
        },
        {
          id: 'm5u5l1q4',
          type: 'fill',
          question: '一个数的最小因数是___',
          answer: '1',
          hint: '所有非0自然数都有哪个因数？',
          explanation: '一个数的最小因数是1，最大因数是它本身。比如12的因数中，最小是1，最大是12。'
        },
        {
          id: 'm5u5l1q5',
          type: 'choice',
          question: '【期中真题】两个自然数的乘积是36，下面哪组不可能是这两个数？',
          options: ['5和7', '4和9', '6和6', '3和12'],
          answer: '5和7',
          hint: '算一算哪组乘积不是36',
          explanation: '4×9=36，6×6=36，3×12=36，但5×7=35不等于36，所以5和7不可能。'
        },
        {
          id: 'm5u5l1q6',
          type: 'fill',
          question: '24有___个因数',
          answer: '8',
          hint: '成对找：1×24，2×12，3×8，4×6',
          explanation: '24=1×24=2×12=3×8=4×6，因数有1、2、3、4、6、8、12、24，共8个。'
        },
        {
          id: 'm5u5l1q7',
          type: 'fill',
          question: '小数乘法中0.5×8=4，如果去掉小数点看整数5×8=40，那么5和8是40的___',
          answer: '因数',
          hint: '[小数乘法]（五年级数学-第1单元）',
          explanation: '5×8=40，5和8是40的因数，40是5和8的倍数。小数乘法0.5×8=4，本质也是因数倍数关系的延伸。'
        }
      ]
    },
    {
      id: 'm5u5l2',
      title: '2、5、3的倍数特征',
      order: 2,
      teachingMethod: '探究式，发现规律：观察倍数的个位特征',
      learningObjective: '我能判断2、3、5的倍数特征',
      successCriteria: '①能说出三种倍数的判断方法 ②能快速判断',
      iDo: '家长写2的倍数序列2、4、6、8、10、12...引导孩子发现个位都是0、2、4、6、8。',
      weDo: '亲子一起找5的倍数和3的倍数特征，5的倍数个位是0或5，3的倍数看各位数字之和。',
      youDo: '孩子独立判断一组数哪些是2、5、3的倍数。',
      parentTips: '【家长预习】2的倍数看个位是偶数，5的倍数看个位是0或5，3的倍数看各位数字之和。\n共学四步：\n①对话出题：问孩子"18、25、36、47哪些是2的倍数？怎么看？"\n②孩子应答：18和36是2的倍数，看个位是不是0、2、4、6、8\n③答错引导：若孩子不会判断3的倍数，教口诀"各位数字加起来看是不是3的倍数"，如36→3+6=9是3的倍数所以36是\n④快速检测：判断各是2、3、5谁的倍数：①24 ②45 ③60',
      funElement: '数学笑话：小红说"我知道2的倍数看个位！"小明说"我知道5的倍数也看个位！"小刚说"那3的倍数呢？"小红和小明一起说"也看个位！"老师："3的倍数不看个位，看各位数字之和！"小游戏：倍数大侦探——家长报一个数，孩子快速判断是不是2、3、5的倍数，答对一个得1分！',
      gsapAnimations: [
        '[GSAP:cardReveal|2、5、3的倍数特征卡片依次翻转|1.2s|点击播放|power2.inOut]',
        '[GSAP:highlight|倍数特征关键词高亮|0.6s|卡片翻转|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|2、5、3的倍数特征表|500x300|教学风|png|三种特征]',
        '[IMG:illustration|偶数与奇数分类图|400x300|教学风|png|奇偶分类]'
      ],
      content: [
        { type: 'text', content: '2的倍数特征：个位是0、2、4、6、8的数都是2的倍数。是2的倍数的数叫偶数，不是2的倍数的数叫奇数。' },
        { type: 'example', content: '判断36是不是2的倍数：36的个位是6，是偶数，所以36是2的倍数。', label: '2的倍数' },
        { type: 'tip', content: '5的倍数特征：个位是0或5的数都是5的倍数。如25、40、105都是5的倍数。', label: '5的倍数' },
        { type: 'example', content: '判断3的倍数：把各位数字加起来，和是3的倍数就是3的倍数。如123，1+2+3=6，6是3的倍数，所以123是3的倍数。', label: '3的倍数' },
        { type: 'formula', content: '同时是2和5的倍数：个位是0。同时是2、3、5的倍数：个位是0且各位数字之和是3的倍数。', label: '综合特征' },
        { type: 'tip', content: '奇数：不是2的倍数（个位1、3、5、7、9）。偶数：是2的倍数（个位0、2、4、6、8）。0也是偶数。', label: '奇偶概念' },
        { type: 'animation', content: '2、5、3的倍数特征卡片翻转揭示', animationType: 'cardReveal',
          animationConfig: {
            sceneType: 'cardReveal',
            title: '倍数特征大揭秘',
            cardRevealConfig: {
              cards: [
                { id: 'c1', front: '2的倍数', back: '个位是0、2、4、6、8', ttsText: '2的倍数，个位是0、2、4、6、8' },
                { id: 'c2', front: '5的倍数', back: '个位是0或5', ttsText: '5的倍数，个位是0或5' },
                { id: 'c3', front: '3的倍数', back: '各位数字之和是3的倍数', ttsText: '3的倍数，各位数字之和是3的倍数' },
              ]
            },
            ttsNarration: '2的倍数看个位，5的倍数看个位，3的倍数看各位数字之和。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u5l2q1',
          type: 'choice',
          question: '下面哪个数是2的倍数？',
          options: ['46', '35', '71', '23'],
          answer: '46',
          hint: '2的倍数个位是0、2、4、6、8',
          explanation: '46的个位是6，是偶数，所以46是2的倍数。35个位是5，71个位是1，23个位是3，都不是2的倍数。'
        },
        {
          id: 'm5u5l2q2',
          type: 'fill',
          question: '同时是2和5的倍数的数，个位一定是___',
          answer: '0',
          hint: '2的倍数个位是偶数，5的倍数个位是0或5',
          explanation: '2的倍数个位是0、2、4、6、8，5的倍数个位是0或5，同时满足的就是个位是0。'
        },
        {
          id: 'm5u5l2q3',
          type: 'choice',
          question: '下面哪个数同时是2、3、5的倍数？（只有一个正确答案）',
          options: ['115', '130', '210', '350'],
          answer: '210',
          hint: '个位是0，且各位数字之和是3的倍数',
          explanation: '同时是2、3、5的倍数：个位是0且各位之和是3的倍数。115个位是5不是2的倍数。130：1+3+0=4不是3的倍数。210：2+1+0=3是3的倍数，个位是0，正确。350：3+5+0=8不是3的倍数。'
        },
        {
          id: 'm5u5l2q4',
          type: 'fill',
          question: '用2、3、4三个数字组成的三位数中，最大的3的倍数是___',
          answer: '432',
          hint: '3的倍数看各位数字之和，2+3+4=9是3的倍数',
          explanation: '2+3+4=9，是3的倍数，所以用2、3、4组成的任何三位数都是3的倍数。最大的排列是432。'
        },
        {
          id: 'm5u5l2q5',
          type: 'choice',
          question: '【期中真题】一个三位数同时是2、3、5的倍数，这个数最小是？',
          options: ['120', '100', '105', '150'],
          answer: '120',
          hint: '个位是0，各位数字之和是3的倍数，且是三位数中最小的',
          explanation: '同时是2、3、5的倍数：个位是0且各位之和是3的倍数。100：1+0+0=1不是。120：1+2+0=3是3的倍数，所以120最小。'
        },
        {
          id: 'm5u5l2q6',
          type: 'fill',
          question: '从1-9中选数字，既是2的倍数又是3的倍数的最小两位数是___',
          answer: '12',
          hint: '既是2的倍数（偶数），又是3的倍数（各位之和是3的倍数）',
          explanation: '既是2又是3的倍数，即6的倍数。最小的两位数6的倍数是12（12=6×2，1+2=3是3的倍数，个位2是偶数）。'
        },
        {
          id: 'm5u5l2q7',
          type: 'fill',
          question: '解简易方程3x=15，x=___。3和x都是15的因数，其中x的值是一个奇数。',
          answer: '5',
          hint: '[简易方程]（五年级数学-第3单元）',
          explanation: '解方程3x=15，两边同除以3得x=5。3和5都是15的因数，5的个位是5，不是2的倍数，所以5是奇数。'
        }
      ]
    },
    {
      id: 'm5u5l3',
      title: '质数与合数',
      order: 3,
      teachingMethod: '支架式，按因数个数分类：质数、合数、1',
      learningObjective: '我能区分质数、合数和1，会判断一个数是质数还是合数',
      successCriteria: '①能说出质数合数的定义 ②能判断1-20中的质数',
      iDo: '家长示范：7的因数只有1和7，只有2个因数的数叫质数；6的因数有1、2、3、6，有3个以上因数的叫合数。',
      weDo: '亲子一起把1-20的数按因数个数分类，找出所有质数。',
      youDo: '孩子独立判断50以内的数哪些是质数哪些是合数。',
      parentTips: '【家长预习】只有1和它本身两个因数的数叫质数；除了1和自己还有别的因数叫合数；1既不是质数也不是合数。\n共学四步：\n①对话出题：问孩子"7的因数有哪些？6的因数呢？它们有什么不同？"\n②孩子应答：7的因数只有1和7是质数，6的因数有1、2、3、6是合数\n③答错引导：若孩子混淆，列因数表——7只有2个因数→质数，6有4个因数→合数，1只有1个因数→特殊\n④快速检测：判断质数还是合数：①11 ②15 ③19 ④1',
      funElement: '数学笑话：数学课上，老师说"1既不是质数也不是合数。"小明问"那1是什么？"老师说"1是自己！"1骄傲地说"我是不一样的烟火！"小游戏：质数大搜捕——在1-50的数字表中圈出所有质数，看谁找得最快最准！质数口诀：二三五七一十一，十三十七一十九，二三二九三一七，四一四三四七五三。',
      gsapAnimations: [
        '[GSAP:cardReveal|质数与合数卡片翻转分类|1s|点击播放|power2.inOut]',
        '[GSAP:stagger|100以内质数表依次出现|1.5s|页面加载|power2.out]'
      ],
      images: [
        '[IMG:illustration|质数与合数分类图|500x300|教学风|png|分类表]',
        '[IMG:illustration|100以内质数表|400x400|教学风|png|质数表]'
      ],
      content: [
        { type: 'text', content: '质数：一个大于1的自然数，除了1和它本身外，没有别的因数，这样的数叫质数（也叫素数）。如2、3、5、7、11...' },
        { type: 'text', content: '合数：一个大于1的自然数，除了1和它本身外，还有别的因数，这样的数叫合数。如4、6、8、9、10...' },
        { type: 'example', content: '判断11是不是质数：11的因数只有1和11，所以11是质数。判断9是不是质数：9的因数有1、3、9，除了1和9还有3，所以9是合数。', label: '判断方法' },
        { type: 'tip', content: '1既不是质数也不是合数。1只有1个因数（它本身），不满足质数的"两个因数"条件。', label: '特殊数字' },
        { type: 'formula', content: '100以内的质数有25个：2、3、5、7、11、13、17、19、23、29、31、37、41、43、47、53、59、61、67、71、73、79、83、89、97。', label: '100以内质数表' },
        { type: 'tip', content: '2是唯一的偶质数，其他质数都是奇数。最小的质数是2，最小的合数是4。', label: '重要性质' },
        { type: 'animation', content: '质数与合数卡片翻转分类', animationType: 'cardReveal',
          animationConfig: {
            sceneType: 'cardReveal',
            title: '质数与合数分类',
            cardRevealConfig: {
              cards: [
                { id: 'c1', front: '7', back: '因数：1、7 → 质数', ttsText: '7的因数只有1和7，是质数' },
                { id: 'c2', front: '6', back: '因数：1、2、3、6 → 合数', ttsText: '6的因数有1、2、3、6，是合数' },
                { id: 'c3', front: '1', back: '因数：只有1 → 既不是质数也不是合数', ttsText: '1只有一个因数，既不是质数也不是合数' },
                { id: 'c4', front: '2', back: '因数：1、2 → 质数（唯一的偶质数）', ttsText: '2的因数只有1和2，是唯一的偶质数' },
              ]
            },
            ttsNarration: '质数只有两个因数，合数有三个以上因数，1既不是质数也不是合数。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u5l3q1',
          type: 'choice',
          question: '下面哪个数是质数？',
          options: ['13', '15', '21', '27'],
          answer: '13',
          hint: '质数只有1和它本身两个因数',
          explanation: '13的因数只有1和13，是质数。15的因数有1、3、5、15，是合数。21的因数有1、3、7、21，是合数。27的因数有1、3、9、27，是合数。'
        },
        {
          id: 'm5u5l3q2',
          type: 'fill',
          question: '20以内的质数有___个',
          answer: '8',
          hint: '20以内的质数：2、3、5、7、11、13、17、19',
          explanation: '20以内的质数有2、3、5、7、11、13、17、19，共8个。'
        },
        {
          id: 'm5u5l3q3',
          type: 'choice',
          question: '下面说法正确的是？',
          options: ['1是质数', '1是合数', '1既不是质数也不是合数', '1既是质数又是合数'],
          answer: '1既不是质数也不是合数',
          hint: '1的因数只有一个',
          explanation: '1的因数只有1本身，只有1个因数。质数需要2个因数，合数需要3个以上因数，所以1既不是质数也不是合数。'
        },
        {
          id: 'm5u5l3q4',
          type: 'fill',
          question: '最小的质数是___',
          answer: '2',
          hint: '从2开始找，2是质数吗？',
          explanation: '2的因数只有1和2，是质数。2是最小的质数，也是唯一的偶质数。'
        },
        {
          id: 'm5u5l3q5',
          type: 'choice',
          question: '【期末真题】两个质数的和是15，这两个质数是？',
          options: ['2和13', '3和12', '5和10', '7和8'],
          answer: '2和13',
          hint: '15是奇数，奇数=偶数+奇数，唯一的偶质数是2',
          explanation: '15是奇数，两个质数之和为奇数，必有一个是偶数。唯一的偶质数是2，15-2=13，13是质数。所以这两个质数是2和13。'
        },
        {
          id: 'm5u5l3q6',
          type: 'fill',
          question: '既是质数又是偶数的数是___',
          answer: '2',
          hint: '偶数是2的倍数，质数只有两个因数',
          explanation: '偶数中只有2的因数是1和2（只有两个），其他偶数都至少有1、2和它本身三个因数，所以2是唯一的偶质数。'
        },
        {
          id: 'm5u5l3q7',
          type: 'fill',
          question: '小数乘法0.25×4=1，去掉小数点看整数25×4=100。25和4都是100的因数，其中4是___数（填"质"或"合"）',
          answer: '合',
          hint: '[小数乘法]（五年级数学-第1单元）',
          explanation: '4的因数有1、2、4，有三个因数，所以4是合数。25的因数有1、5、25，也是合数。小数乘法0.25×4=1本质是25×4=100的延伸。'
        }
      ]
    },
    {
      id: 'm5u5l4',
      title: '分解质因数',
      order: 4,
      teachingMethod: 'EDI，短除法分解质因数，逐步拆分到全质数',
      learningObjective: '我能用短除法分解质因数',
      successCriteria: '①能说出短除法的步骤 ②能正确分解2-3个数的质因数',
      iDo: '家长示范分解30：30=2×15，15=3×5，所以30=2×3×5。用短除法格式展示。',
      weDo: '亲子一起分解42：42÷2=21，21÷3=7，所以42=2×3×7。',
      youDo: '孩子独立分解36、60等数的质因数。',
      parentTips: '【家长预习】分解质因数用短除法，从最小的质数2开始试除，直到商是质数为止。\n共学四步：\n①对话出题：问孩子"30可以分解成哪些质数相乘？怎么用短除法？"\n②孩子应答：30=2×3×5，先用2除30得15，再用3除15得5，5是质数\n③答错引导：若孩子不会，在纸上画短除号一步步示范——30÷2=15，15÷3=5，所以30=2×3×5，强调"从最小的质数2开始试除"\n④快速检测：分解质因数：①42 ②24 ③36',
      funElement: '数学笑话：老师问"把12分解质因数。"小明写12=1×12。老师说"1不是质数！"小明改写12=2×6。老师说"6不是质数！"小明崩溃："到底要怎样？"老师说"要把每个数都拆到不能拆为止，全部都是质数才行！"小游戏：质因数拆拆乐——选一个数，不断拆成两个因数，直到全部是质数为止，看谁拆得快！',
      gsapAnimations: [
        '[GSAP:timeline|短除法分解30的质因数步骤|1.5s|点击播放|power2.out]',
        '[GSAP:highlight|质因数高亮标注|0.8s|分解完成|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|短除法分解质因数示意图|500x300|教学风|png|短除格式]',
        '[IMG:illustration|分解质因数步骤图：30=2×3×5|400x300|教学风|png|分解步骤]'
      ],
      content: [
        { type: 'text', content: '质因数：一个数的因数，同时又是质数，这样的因数叫质因数。如12的因数有1、2、3、4、6、12，其中2和3是质数，所以2和3是12的质因数。' },
        { type: 'example', content: '分解质因数就是把一个合数用质因数相乘的形式表示。如30=2×3×5，就是把30分解质因数。', label: '概念' },
        { type: 'formula', content: '短除法步骤：用最小的质数2开始除，除到商是质数为止。把所有的除数和最后的商从左到右连乘。', label: '短除法口诀' },
        { type: 'example', content: '分解36：36÷2=18，18÷2=9，9÷3=3，所以36=2×2×3×3=2²×3²。', label: '例题' },
        { type: 'tip', content: '分解质因数必须从最小的质数2开始试除，能整除就一直除，不能就换下一个质数3、5、7...', label: '易错提醒' },
        { type: 'tip', content: '1不是质数，也不是任何数的质因数。分解质因数的结果中不会出现1。', label: '注意' },
        { type: 'animation', content: '短除法分解30的质因数过程', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '分解质因数：30',
            timelineConfig: {
              steps: [
                { id: 's1', description: '30÷2=15（2是质因数）', ttsNarration: '30除以2等于15，2是质因数' },
                { id: 's2', description: '15÷3=5（3是质因数）', ttsNarration: '15除以3等于5，3是质因数' },
                { id: 's3', description: '5是质数，停止', ttsNarration: '5是质数，停止除' },
                { id: 's4', description: '30=2×3×5', ttsNarration: '所以30等于2乘3乘5' },
              ]
            },
            ttsNarration: '分解质因数，从最小的质数2开始除，30等于2乘3乘5。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u5l4q1',
          type: 'choice',
          question: '12的质因数有哪些？',
          options: ['2和3', '2和6', '3和4', '1、2、3'],
          answer: '2和3',
          hint: '把12分解质因数：12=2×2×3',
          explanation: '12=2×2×3，12的质因数是2和3。6不是质数，4不是质数，1不是质数。'
        },
        {
          id: 'm5u5l4q2',
          type: 'fill',
          question: '把30分解质因数：30=2×3×___',
          answer: '5',
          hint: '30÷2=15，15÷3=5，5是质数',
          explanation: '30÷2=15，15÷3=5，5是质数，所以30=2×3×5。'
        },
        {
          id: 'm5u5l4q3',
          type: 'choice',
          question: '下面分解质因数正确的是？',
          options: ['24=2×2×2×3', '24=2×3×4', '24=2×12', '24=3×8'],
          answer: '24=2×2×2×3',
          hint: '每个因数都必须是质数',
          explanation: '24=2×2×2×3，每个因数2和3都是质数。4不是质数，12不是质数，8不是质数。'
        },
        {
          id: 'm5u5l4q4',
          type: 'fill',
          question: '36=2×2×3×3，那么36的质因数有___个',
          answer: '4',
          hint: '数一数质因数的总个数',
          explanation: '36=2×2×3×3，质因数有2、2、3、3，共4个质因数（注意重复的也要数）。'
        },
        {
          id: 'm5u5l4q5',
          type: 'choice',
          question: '【期末真题】一个数分解质因数是2×2×3×5，这个数是？',
          options: ['60', '30', '120', '15'],
          answer: '60',
          hint: '把质因数全部相乘',
          explanation: '2×2×3×5=4×3×5=12×5=60。30=2×3×5，120=2×2×2×3×5，15=3×5。'
        },
        {
          id: 'm5u5l4q6',
          type: 'fill',
          question: '甲=2×3×5，乙=2×3×7，甲和乙公有的质因数是___',
          answer: '2和3',
          hint: '找两个分解式中相同的质因数',
          explanation: '甲=2×3×5=30，乙=2×3×7=42，它们公有的质因数是2和3（都出现了）。5是甲独有的，7是乙独有的。'
        },
        {
          id: 'm5u5l4q7',
          type: 'fill',
          question: '解简易方程2x=14，x=___。2和x都是14的因数且都是质数，所以14=2×x就是分解质因数。',
          answer: '7',
          hint: '[简易方程]（五年级数学-第3单元）',
          explanation: '解方程2x=14，两边除以2得x=7。2和7都是14的质因数，14=2×7就是分解质因数。方程求解和分解质因数本质上都是找因数关系。'
        }
      ]
    },
    {
      id: 'm5u5l5',
      title: '综合应用——生活中的因数与倍数',
      order: 5,
      teachingMethod: '情境式，综合应用因数倍数知识解决实际问题',
      learningObjective: '我能综合应用因数倍数知识解决实际问题',
      successCriteria: '①能求最大公因数和最小公倍数 ②能解决生活问题',
      iDo: '家长示范：把24颗糖平均分组，24的因数有1、2、3、4、6、8、12、24，所以有8种分法。',
      weDo: '亲子一起找6和8的最小公倍数：6的倍数6、12、18、24...，8的倍数8、16、24...，最小公倍数是24。',
      youDo: '孩子独立解决生活中的因数倍数问题。',
      parentTips: '【家长预习】最大公因数找公共因数中最大的，最小公倍数找公共倍数中最小的。\n共学四步：\n①对话出题：问孩子"把24颗糖平均分给小朋友，每人一样多，可以怎么分？"\n②孩子应答：找24的因数——可以每人2颗分12人，每人3颗分8人，每人4颗分6人等\n③答错引导：若孩子不会，拿扣子实际分一分，引导"就是找24的因数，从1开始成对找"\n④快速检测：①找12和18的最大公因数 ②找6和8的最小公倍数 ③12和8的最大公因数是几？',
      funElement: '数学笑话：小明问"为什么6人一组和8人一组都正好分完？"小红说"因为人数是6和8的公倍数！"小明问"那至少多少人？"小红说"最小公倍数，24人！"小明恍然大悟："原来公倍数就是大家都能整除的数！"小游戏：公因数公倍数扑克——两人各翻一张牌，找两数的最大公因数和最小公倍数，谁先答对谁赢牌！',
      gsapAnimations: [
        '[GSAP:timeline|列举法找公因数和公倍数步骤|1.5s|点击播放|power2.out]',
        '[GSAP:confetti|综合应用通关撒花|2s|正确率达标|power1.out]'
      ],
      images: [
        '[IMG:illustration|最大公因数与最小公倍数示意图|500x300|教学风|png|公因数公倍数]',
        '[IMG:illustration|生活中的因数倍数应用图|400x300|可爱卡通风|png|生活应用]'
      ],
      content: [
        { type: 'text', content: '最大公因数：两个数公有的因数中最大的一个。如12的因数有1、2、3、4、6、12，18的因数有1、2、3、6、9、18，公因数有1、2、3、6，最大公因数是6。' },
        { type: 'example', content: '找12和18的最大公因数：列举法——12的因数：1、2、3、4、6、12；18的因数：1、2、3、6、9、18。公因数：1、2、3、6，最大公因数是6。', label: '列举法' },
        { type: 'tip', content: '最小公倍数：两个数公有的倍数中最小的一个。如6的倍数有6、12、18、24...，8的倍数有8、16、24...，公倍数有24、48...，最小公倍数是24。', label: '最小公倍数' },
        { type: 'example', content: '生活应用：一班同学分组，6人一组或8人一组都正好分完，这个班至少有多少人？就是求6和8的最小公倍数。6的倍数：6、12、18、24；8的倍数：8、16、24。最小公倍数是24，所以至少24人。', label: '生活应用' },
        { type: 'formula', content: '最大公因数的求法：列举法（列因数找最大）或分解质因数法（取公有质因数的乘积）。', label: '求法总结' },
        { type: 'tip', content: '生活场景：平均分配问题用因数，周期重合问题用公倍数。分糖果、铺地砖用因数；公交车同时发车、闹钟同时响用公倍数。', label: '应用口诀' },
        { type: 'animation', content: '列举法找公因数和公倍数的步骤', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '找12和18的最大公因数',
            timelineConfig: {
              steps: [
                { id: 's1', description: '12的因数：1、2、3、4、6、12', ttsNarration: '12的因数有1、2、3、4、6、12' },
                { id: 's2', description: '18的因数：1、2、3、6、9、18', ttsNarration: '18的因数有1、2、3、6、9、18' },
                { id: 's3', description: '公因数：1、2、3、6', ttsNarration: '公因数有1、2、3、6' },
                { id: 's4', description: '最大公因数：6', ttsNarration: '最大公因数是6' },
              ]
            },
            ttsNarration: '找最大公因数，先列因数，找公共的，取最大的。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u5l5q1',
          type: 'choice',
          question: '15的因数有哪些？',
          options: ['1、3、5、15', '1、5、15', '3、5、15', '1、15'],
          answer: '1、3、5、15',
          hint: '从1开始成对找：1×15，3×5',
          explanation: '15=1×15=3×5，所以15的因数有1、3、5、15。'
        },
        {
          id: 'm5u5l5q2',
          type: 'fill',
          question: '6和8的公因数有___',
          answer: '1、2',
          hint: '6的因数：1、2、3、6；8的因数：1、2、4、8',
          explanation: '6的因数有1、2、3、6，8的因数有1、2、4、8，公因数有1和2。'
        },
        {
          id: 'm5u5l5q3',
          type: 'choice',
          question: '12和18的最大公因数是？',
          options: ['6', '3', '2', '12'],
          answer: '6',
          hint: '找两个数公因数中最大的',
          explanation: '12的因数：1、2、3、4、6、12。18的因数：1、2、3、6、9、18。公因数：1、2、3、6，最大公因数是6。'
        },
        {
          id: 'm5u5l5q4',
          type: 'fill',
          question: '24的因数有___个',
          answer: '8',
          hint: '成对找：1×24，2×12，3×8，4×6',
          explanation: '24=1×24=2×12=3×8=4×6，因数有1、2、3、4、6、8、12、24，共8个。'
        },
        {
          id: 'm5u5l5q5',
          type: 'choice',
          question: '【期末真题】一班同学分组，6人一组或8人一组都正好分完，这个班至少有多少人？',
          options: ['24人', '48人', '12人', '14人'],
          answer: '24人',
          hint: '求6和8的最小公倍数',
          explanation: '6人一组或8人一组都正好分完，人数是6和8的公倍数。6的倍数：6、12、18、24；8的倍数：8、16、24。最小公倍数是24，所以至少24人。'
        },
        {
          id: 'm5u5l5q6',
          type: 'fill',
          question: '一个长方形长12cm，宽8cm，要剪成最大的正方形（边长取整厘米），正方形边长是___cm',
          answer: '4',
          hint: '正方形边长是12和8的最大公因数',
          explanation: '正方形边长必须能同时整除12和8，即12和8的最大公因数。12和8的公因数有1、2、4，最大公因数是4，所以正方形边长是4cm。'
        },
        {
          id: 'm5u5l5q7',
          type: 'fill',
          question: '小数乘法1.5×6=9，去掉小数点看整数15×6=90。15和6都是90的因数，15和6的最大公因数是___',
          answer: '3',
          hint: '[小数乘法]（五年级数学-第1单元）',
          explanation: '15的因数有1、3、5、15，6的因数有1、2、3、6，公因数有1和3，最大公因数是3。小数乘法1.5×6=9本质是15×6=90的延伸，因数关系不变。'
        }
      ]
    }
  ]
},

{
  id: 'm5u6',
  title: '分数的意义与性质',
  subtitle: '从单位"1"出发，理解分数的本质，掌握约分与通分',
  order: 6,
  lessons: [
    {
      id: 'm5u6l1',
      title: '分数的意义——单位"1"与分数',
      order: 1,
      teachingMethod: 'CPA·C→P→A，实物分蛋糕引出分数意义',
      learningObjective: '我能理解分数的意义，知道单位1的含义',
      successCriteria: '①能说出分数各部分名称和意义 ②能用分数表示图形部分',
      iDo: '家长把一个蛋糕平均切成4份，取1份问孩子"这是多少？"孩子答"四分之一"。家长讲解：把整体平均分成4份，取1份就是1/4。',
      weDo: '亲子一起分一根3米长的绳子，平均截成5段，每段是这根绳子的1/5，长3/5米。',
      youDo: '孩子独立用分数表示图形中的阴影部分。',
      parentTips: '【家长预习】把整体平均分成若干份，取其中的几份就是分数。整体叫单位1。\n共学四步：\n①对话出题：问孩子"把一张饼平均分给4个人，每人分多少？1/4表示什么？"\n②孩子应答：每人分1/4，表示把整体平均分成4份取1份\n③答错引导：拿一张圆纸折成4份，取1份让孩子看到1/4，强调"平均分"和"整体叫单位1"\n④快速检测：①把一个蛋糕平均分6份取2份是? ②3÷4=? ③1/5表示什么？',
      funElement: '数学笑话：老师问"什么是单位1？"小明说"就是考试考第一名的那个1！"老师哭笑不得："单位1是把一个整体看作1，比如一个蛋糕、一箱苹果都可以是单位1。"小明恍然大悟："原来1不只是一个数，还是一堆东西！"小游戏：分蛋糕大挑战——家长说"把蛋糕平均分给6个人，每人分几分之几？"孩子快速回答，答对吃一口蛋糕！',
      gsapAnimations: [
        '[GSAP:sceneBuild|分蛋糕场景动画：平均分成4份取1份|1.5s|点击播放|power2.out]',
        '[GSAP:highlight|单位1和分数关键词高亮|0.8s|概念出现|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|分数意义图：蛋糕平均分割|500x300|可爱卡通风|png|蛋糕分割]',
        '[IMG:illustration|分数与除法关系图|400x200|教学风|png|分数除法]'
      ],
      content: [
        { type: 'text', content: '把单位"1"平均分成若干份，表示这样的一份或几份的数，叫分数。单位"1"可以是一个物体、一个计量单位，也可以是一个整体。' },
        { type: 'example', content: '把一个蛋糕平均分成4份，取3份，就是3/4。这里的蛋糕是单位"1"，分母4表示平均分成4份，分子3表示取了3份。', label: '分数的意义' },
        { type: 'formula', content: '分数与除法的关系：a÷b=a/b（b≠0）。被除数是分子，除数是分母，除号相当于分数线。', label: '分数与除法' },
        { type: 'example', content: '把3米长的绳子平均截成5段，每段长多少米？3÷5=3/5（米），每段长3/5米。', label: '例题' },
        { type: 'tip', content: '注意"每段是全长的几分之几"和"每段长多少"的区别。3米截成5段，每段是全长的1/5，每段长3/5米。', label: '易错提醒' },
        { type: 'tip', content: '分子表示取的份数，分母表示平均分的总份数。分数线表示"平均分"的意思。', label: '概念要点' },
        { type: 'animation', content: '蛋糕平均分成4份，取3份的过程', animationType: 'sceneBuild',
          animationConfig: {
            sceneType: 'sceneBuild',
            title: '分数的意义：3/4',
            sceneBuildConfig: {
              sceneName: '分蛋糕',
              elements: [
                { text: '一个蛋糕', emoji: '🎂', x: 50, y: 20, size: 'lg', color: '#FFB347', animation: 'fadeIn', delay: 0, ttsText: '一个蛋糕' },
                { text: '平均分成4份', emoji: '🎂', x: 50, y: 45, size: 'md', color: '#FF6B6B', animation: 'scaleIn', delay: 0.5, ttsText: '平均分成4份' },
                { text: '取3份：3/4', emoji: '🎂', x: 50, y: 70, size: 'lg', color: '#4ECDC4', animation: 'bounceIn', delay: 1, ttsText: '取3份，就是四分之三' },
              ]
            },
            ttsNarration: '把一个蛋糕平均分成4份，取3份，就是四分之三。',
          }
        },
        { type: 'tip', content: '整体平均分，取几是分子，分成几是分母', label: '助记口诀', animationType: 'pulse' },
      ],
      practiceQuestions: [
        {
          id: 'm5u6l1q1',
          type: 'choice',
          question: '3/4表示什么意思？',
          options: ['把整体平均分成4份，取3份', '把整体平均分成3份，取4份', '4个3相加', '3除以4等于4'],
          answer: '把整体平均分成4份，取3份',
          hint: '分母表示平均分的份数，分子表示取的份数',
          explanation: '3/4中，分母4表示把整体平均分成4份，分子3表示取了其中的3份。'
        },
        {
          id: 'm5u6l1q2',
          type: 'fill',
          question: '把一个西瓜平均分成5份，取3份，用分数表示是___',
          answer: '3/5',
          hint: '分母是平均分的份数，分子是取的份数',
          explanation: '平均分成5份（分母5），取3份（分子3），所以是3/5。'
        },
        {
          id: 'm5u6l1q3',
          type: 'choice',
          question: '3÷4用分数表示是？',
          options: ['3/4', '4/3', '3/3', '4/4'],
          answer: '3/4',
          hint: '被除数是分子，除数是分母',
          explanation: '分数与除法的关系：a÷b=a/b。3÷4=3/4，3是被除数（分子），4是除数（分母）。'
        },
        {
          id: 'm5u6l1q4',
          type: 'fill',
          question: '一根绳子长3米，平均截成5段，每段长___米（用分数表示）',
          answer: '3/5',
          hint: '总长÷段数=每段长度，3÷5',
          explanation: '3÷5=3/5（米），每段长3/5米。注意：每段是全长的1/5，但每段长3/5米。'
        },
        {
          id: 'm5u6l1q5',
          type: 'choice',
          question: '【期中真题】把5块饼平均分给8个小朋友，每人分到这些饼的几分之几？',
          options: ['5/8', '1/8', '8/5', '5/5'],
          answer: '1/8',
          hint: '"这些饼"是总数，看作单位"1"，平均分成8份',
          explanation: '"这些饼的几分之几"中，这些饼（5块的整体）是单位"1"，8人平分单位"1"，每人分得1/8。5/8是每人分到的块数（5÷8=5/8块），不是占总数的几分之几。'
        },
        {
          id: 'm5u6l1q6',
          type: 'fill',
          question: '一箱苹果有24个，吃了8个，吃了总数的___（用分数表示）',
          answer: '1/3',
          hint: '吃了的÷总数=吃了的几分之几，注意化为最简分数',
          explanation: '吃了8个，总数24个，吃了总数的8/24，约分后是1/3。分数应化为最简分数。'
        },
        {
          id: 'm5u6l1q7',
          type: 'fill',
          question: '分数3/4中，3和4的最大公因数是___，这说明3/4是最简分数',
          answer: '1',
          hint: '[因数与倍数]（五年级数学-第5单元）',
          explanation: '3的因数有1、3，4的因数有1、2、4，公因数只有1，最大公因数是1。分子分母最大公因数为1的分数是最简分数，3/4是最简分数。'
        }
      ]
    },
    {
      id: 'm5u6l2',
      title: '真分数与假分数',
      order: 2,
      teachingMethod: '支架式，按分子分母大小关系分类',
      learningObjective: '我能区分真分数和假分数，会把假分数化成带分数',
      successCriteria: '①能说出真假分数的特征 ②能化带分数',
      iDo: '家长示范：1/3分子小于分母，是真分数，值小于1；3/3分子等于分母，值等于1；5/3分子大于分母，是假分数，值大于1。',
      weDo: '亲子一起把假分数5/3化成带分数：5÷3=1余2，所以5/3=1又2/3。',
      youDo: '孩子独立判断真假分数并化带分数。',
      parentTips: '【家长预习】分子小于分母是真分数（小于1），分子大于等于分母是假分数（大于等于1）。\n共学四步：\n①对话出题：问孩子"1/3、3/3、5/3哪些比1小？哪些等于或大于1？"\n②孩子应答：1/3比1小是真分数，3/3等于1和5/3大于1是假分数\n③答错引导：若孩子不会化带分数，教口诀"分子除以分母，商是整数部分，余数是新分子"，如5÷3=1余2所以5/3=1又2/3\n④快速检测：①判断7/4是真分数还是假分数 ②把7/3化成带分数 ③把8/5化成带分数',
      funElement: '数学笑话：小明写了一个分数8/3，小红说"这是假分数！"小明不服气："哪里假了？明明是真的！"老师说"分子比分母大的分数叫假分数，不是说它是假的，而是它的值大于或等于1。"小明："那为什么不叫大分数？"老师："..."小游戏：真假分数分类赛——写一堆分数卡片，让孩子快速分成真分数和假分数两堆，看谁分得快！',
      gsapAnimations: [
        '[GSAP:compare|真分数vs假分数对比动画|0.8s|页面加载|power2.out]',
        '[GSAP:highlight|分子分母大小关系高亮|0.6s|对比完成|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|真分数与假分数对比图|500x300|教学风|png|对比表]',
        '[IMG:illustration|假分数化带分数图解|400x300|教学风|png|化带分数]'
      ],
      content: [
        { type: 'text', content: '真分数：分子小于分母的分数。真分数的值小于1。如1/3、2/5、3/4都是真分数。' },
        { type: 'text', content: '假分数：分子大于或等于分母的分数。假分数的值大于或等于1。如3/3、5/3、7/4都是假分数。' },
        { type: 'example', content: '假分数化整数：6/3=6÷3=2，所以6/3=2。当分子是分母的倍数时，假分数可以化成整数。', label: '化整数' },
        { type: 'example', content: '假分数化带分数：7/3，7÷3=2余1，所以7/3=2又1/3。商是整数部分，余数是新分子，分母不变。', label: '化带分数' },
        { type: 'formula', content: '带分数化假分数：整数部分×分母+分子=新分子，分母不变。如2又1/3=(2×3+1)/3=7/3。', label: '互化公式' },
        { type: 'tip', content: '1可以写成任何分子分母相同的分数：1=2/2=3/3=4/4=...这在线分数加减法中很有用。', label: '重要技巧' },
        { type: 'animation', content: '真分数与假分数对比', animationType: 'compare',
          animationConfig: {
            sceneType: 'compare',
            title: '真分数 vs 假分数',
            compareConfig: {
              leftItems: ['1/3 < 1', '2/5 < 1', '3/4 < 1'],
              rightItems: ['3/3 = 1', '5/3 > 1', '7/4 > 1'],
              result: 'equal',
              resultText: '真分数<1，假分数>=1'
            },
            ttsNarration: '真分数分子小于分母，值小于1。假分数分子大于等于分母，值大于等于1。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u6l2q1',
          type: 'choice',
          question: '下面哪个是真分数？',
          options: ['3/5', '5/3', '7/7', '9/4'],
          answer: '3/5',
          hint: '真分数的分子小于分母',
          explanation: '3/5分子3小于分母5，是真分数。5/3分子大于分母，7/7分子等于分母，9/4分子大于分母，都是假分数。'
        },
        {
          id: 'm5u6l2q2',
          type: 'fill',
          question: '分母是5的真分数有___个',
          answer: '4',
          hint: '真分数分子小于分母，分子可以是1到4',
          explanation: '分母是5的真分数有1/5、2/5、3/5、4/5，共4个。分子必须小于分母5。'
        },
        {
          id: 'm5u6l2q3',
          type: 'choice',
          question: '7/3化成带分数是？',
          options: ['2又1/3', '1又4/3', '3又1/2', '2又1/7'],
          answer: '2又1/3',
          hint: '7÷3=2余1，商是整数部分，余数是新分子',
          explanation: '7÷3=2余1，所以7/3=2又1/3。整数部分是商2，新分子是余数1，分母3不变。'
        },
        {
          id: 'm5u6l2q4',
          type: 'fill',
          question: '12/4=___（化成整数）',
          answer: '3',
          hint: '12÷4=3',
          explanation: '12÷4=3，所以12/4=3。当分子是分母的倍数时，假分数可以化成整数。'
        },
        {
          id: 'm5u6l2q5',
          type: 'choice',
          question: '【期末真题】分数a/5（a是非0自然数），当a（  ）时是最小的假分数',
          options: ['等于5', '小于5', '大于5', '等于1'],
          answer: '等于5',
          hint: '最小的假分数分子等于分母',
          explanation: '假分数是分子大于或等于分母的分数。最小的假分数是分子等于分母，即a/5中a=5时，5/5=1是最小的假分数。'
        },
        {
          id: 'm5u6l2q6',
          type: 'fill',
          question: '分母是7的最小假分数是___',
          answer: '7/7',
          hint: '最小假分数分子等于分母',
          explanation: '假分数分子大于等于分母，最小的假分数是分子等于分母，即7/7=1。'
        },
        {
          id: 'm5u6l2q7',
          type: 'fill',
          question: '假分数7/3中，7和3都是___数（填"质"或"合"），它们的最大公因数是1',
          answer: '质',
          hint: '[质数与合数]（五年级数学-第5单元）',
          explanation: '7的因数只有1和7，是质数；3的因数只有1和3，也是质数。两个质数的最大公因数是1（除非它们相同），7和3不同，所以最大公因数是1。'
        }
      ]
    },
    {
      id: 'm5u6l3',
      title: '分数的基本性质——等值变换',
      order: 3,
      teachingMethod: '探究式，发现规律：分子分母同乘除同数大小不变',
      learningObjective: '我能理解和运用分数的基本性质',
      successCriteria: '①能说出分数的基本性质 ②能找等值分数',
      iDo: '家长示范：1/2=2/4=3/6=4/8，分子分母同乘2、3、4，分数大小不变。',
      weDo: '亲子一起验证：画图比较1/2、2/4、3/6的大小，发现它们一样大。',
      youDo: '孩子独立找与2/5相等的分数。',
      parentTips: '【家长预习】分数的基本性质：分子和分母同时乘或除以相同的数（0除外），分数大小不变。\n共学四步：\n①对话出题：问孩子"1/2和2/4哪个大？为什么？"\n②孩子应答：一样大，分子分母同乘2，1/2=2/4\n③答错引导：拿一张长方形纸对折取1/2，再对折取2/4，让孩子看到面积一样大，这就是分数的基本性质\n④快速检测：①1/2=()/8 ②3/5=()/15 ③2/3=()/9',
      funElement: '数学笑话：1/2对2/4说"咱俩一样大！"2/4不信："我分子分母都比你大，怎么可能一样？"1/2说"你把分子分母都除以2，不就变成1/2了吗？分数的基本性质，分子分母同乘除同数大小不变！"2/4试了试："还真是！那咱俩是双胞胎啊！"小游戏：等值分数接力——说一个分数，对方说出一个和它大小相等但分子分母不同的分数，接不上就输！',
      gsapAnimations: [
        '[GSAP:timeline|1/2→2/4→3/6等值变换过程|1s|点击播放|power2.out]',
        '[GSAP:highlight|分子分母同乘同除高亮|0.6s|变换完成|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|分数基本性质图：1/2=2/4=3/6|500x200|教学风|png|等值链]',
        '[IMG:illustration|折纸验证分数性质图|400x300|教学风|png|折纸验证]'
      ],
      content: [
        { type: 'text', content: '分数的基本性质：分数的分子和分母同时乘或除以相同的数（0除外），分数的大小不变。' },
        { type: 'example', content: '1/2=2/4=3/6=4/8：分子分母同乘2得2/4，同乘3得3/6，同乘4得4/8，大小都不变。', label: '等值变换' },
        { type: 'formula', content: 'a/b = (a×c)/(b×c) = (a÷c)/(b÷c)（c≠0，b≠0）。分子分母必须同乘或同除同一个非零数。', label: '性质公式' },
        { type: 'example', content: '把2/3化成分母是12的分数：分母3×4=12，分子2×4=8，所以2/3=8/12。', label: '例题' },
        { type: 'tip', content: '注意：分子分母必须同时乘或除以"相同"的数，不能乘不同的数。如2/3分子乘2分母乘3是错误的。', label: '易错提醒' },
        { type: 'tip', content: '0除外：因为分母不能为0，除以0无意义，所以乘或除以的数不能是0。', label: '注意' },
        { type: 'animation', content: '1/2→2/4→3/6等值变换过程', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '分数的基本性质',
            timelineConfig: {
              steps: [
                { id: 's1', description: '1/2：把整体平均分2份取1份', ttsNarration: '二分之一，平均分2份取1份' },
                { id: 's2', description: '分子分母同乘2：2/4', ttsNarration: '分子分母同乘2，得四分之二' },
                { id: 's3', description: '分子分母同乘3：3/6', ttsNarration: '分子分母同乘3，得六分之三' },
                { id: 's4', description: '1/2=2/4=3/6，大小不变！', ttsNarration: '它们大小一样，分数的基本性质' },
              ]
            },
            ttsNarration: '分数的分子和分母同时乘或除以相同的数，分数大小不变。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u6l3q1',
          type: 'choice',
          question: '1/2=___/4，空格里填什么？',
          options: ['2', '1', '4', '3'],
          answer: '2',
          hint: '分母2×2=4，分子1×2=?',
          explanation: '分母从2变成4，乘了2，分子也要乘2：1×2=2，所以1/2=2/4。'
        },
        {
          id: 'm5u6l3q2',
          type: 'fill',
          question: '3/5=___/20',
          answer: '12',
          hint: '分母5×4=20，分子3×4=?',
          explanation: '分母从5变成20，乘了4，分子也要乘4：3×4=12，所以3/5=12/20。'
        },
        {
          id: 'm5u6l3q3',
          type: 'choice',
          question: '下面哪组分数大小相等？',
          options: ['1/2和2/4', '1/3和2/5', '2/3和3/4', '1/4和2/3'],
          answer: '1/2和2/4',
          hint: '看分子分母是否同乘了相同的数',
          explanation: '1/2分子分母同乘2得2/4，所以1/2=2/4。1/3和2/5不等，2/3和3/4不等，1/4和2/3不等。'
        },
        {
          id: 'm5u6l3q4',
          type: 'fill',
          question: '6/8=3/___',
          answer: '4',
          hint: '分子6÷2=3，分母8÷2=?',
          explanation: '分子从6变成3，除以了2，分母也要除以2：8÷2=4，所以6/8=3/4。'
        },
        {
          id: 'm5u6l3q5',
          type: 'choice',
          question: '【期末真题】一个分数的分子扩大3倍，分母怎样变化，分数大小不变？',
          options: ['扩大3倍', '缩小3倍', '不变', '扩大6倍'],
          answer: '扩大3倍',
          hint: '分数基本性质：分子分母同乘同数大小不变',
          explanation: '根据分数的基本性质，分子扩大3倍（乘3），分母也要同时乘3（扩大3倍），分数大小才不变。'
        },
        {
          id: 'm5u6l3q6',
          type: 'fill',
          question: '2/3的分子加上4（变成6），要使分数大小不变，分母应加上___',
          answer: '6',
          hint: '分子2+4=6，扩大了3倍，分母3也要扩大3倍',
          explanation: '分子2变成6，扩大了3倍（6÷2=3），分母3也要乘3得9，9-3=6，所以分母应加上6。3/9=9，9-3=6。'
        },
        {
          id: 'm5u6l3q7',
          type: 'fill',
          question: '分数2/6=1/3，分子分母同除以2。2是6的___（填"因数"或"倍数"）',
          answer: '因数',
          hint: '[因数与倍数]（五年级数学-第5单元）',
          explanation: '2×3=6，所以2是6的因数，6是2的倍数。分数的基本性质中，分子分母同除以一个数，这个数必须是分子分母的公因数。'
        }
      ]
    },
    {
      id: 'm5u6l4',
      title: '约分——最大公因数与最简分数',
      order: 4,
      teachingMethod: 'EDI，约分步骤：找最大公因数→分子分母同除以最大公因数',
      learningObjective: '我能用最大公因数进行约分，化成最简分数',
      successCriteria: '①能说出约分的步骤 ②能正确约分到最简分数',
      iDo: '家长示范约分6/8：6和8的最大公因数是2，6÷2=3，8÷2=4，所以6/8=3/4。3/4是最简分数。',
      weDo: '亲子一起约分12/18：12和18的最大公因数是6，12÷6=2，18÷6=3，所以12/18=2/3。',
      youDo: '孩子独立约分15/20、18/24等分数。',
      parentTips: '【家长预习】约分：找分子分母的最大公因数，分子分母同除以最大公因数，得到最简分数。\n共学四步：\n①对话出题：问孩子"6/8能化简吗？怎么约分？"\n②孩子应答：6和8的最大公因数是2，6÷2=3，8÷2=4，6/8=3/4\n③答错引导：若孩子不会找公因数，教"列因数找公共的"——6的因数1,2,3,6，8的因数1,2,4,8，公共最大的是2\n④快速检测：约分：①12/18 ②8/12 ③15/20',
      funElement: '数学笑话：6/8对3/4说"我比你大！"3/4说"咱俩一样大，你约分后就变成我了！"6/8不信，除了一下：6÷2=3，8÷2=4，果然变成3/4！"原来约分就是化简啊，我白骄傲了！"小游戏：约分竞速——写一堆非最简分数，看谁最快约成最简分数！连对5个就是"约分大师"！',
      gsapAnimations: [
        '[GSAP:timeline|约分步骤：找公因数→同除→最简分数|1.5s|点击播放|power2.out]',
        '[GSAP:highlight|最大公因数和最简分数高亮|0.8s|约分完成|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|约分示意图：6/8=3/4|500x300|教学风|png|约分过程]',
        '[IMG:illustration|最简分数判断图|400x200|教学风|png|最简分数]'
      ],
      content: [
        { type: 'text', content: '约分：把一个分数的分子和分母同时除以它们的公因数，分数的大小不变，这个过程叫约分。' },
        { type: 'example', content: '约分6/8：6和8的最大公因数是2，6÷2=3，8÷2=4，所以6/8=3/4。', label: '约分示例' },
        { type: 'formula', content: '最简分数：分子和分母只有公因数1（即最大公因数是1）的分数。约分要约到最简分数为止。', label: '最简分数定义' },
        { type: 'example', content: '约分12/18：12和18的最大公因数是6，12÷6=2，18÷6=3，所以12/18=2/3。2和3的最大公因数是1，2/3是最简分数。', label: '例题' },
        { type: 'tip', content: '找最大公因数的方法：列举法（列因数找最大）或分解质因数法（取公有质因数的乘积）。', label: '方法提示' },
        { type: 'tip', content: '约分技巧：如果一眼看不出最大公因数，可以逐步约分。如18/24，先除以2得9/12，再除以3得3/4。', label: '逐步约分' },
        { type: 'animation', content: '约分6/8的步骤过程', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '约分：6/8',
            timelineConfig: {
              steps: [
                { id: 's1', description: '找6和8的最大公因数：2', ttsNarration: '6和8的最大公因数是2' },
                { id: 's2', description: '分子分母同除以2：6÷2=3，8÷2=4', ttsNarration: '分子分母同除以2' },
                { id: 's3', description: '6/8=3/4', ttsNarration: '六分之八等于四分之三' },
                { id: 's4', description: '3和4最大公因数是1，3/4是最简分数', ttsNarration: '3和4只有公因数1，3/4是最简分数' },
              ]
            },
            ttsNarration: '约分就是分子分母同除以最大公因数，约到最简分数为止。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u6l4q1',
          type: 'choice',
          question: '4/8约分后是？',
          options: ['1/2', '2/4', '4/8', '1/4'],
          answer: '1/2',
          hint: '4和8的最大公因数是4',
          explanation: '4和8的最大公因数是4，4÷4=1，8÷4=2，所以4/8=1/2。1/2是最简分数。'
        },
        {
          id: 'm5u6l4q2',
          type: 'fill',
          question: '把6/9约分得___',
          answer: '2/3',
          hint: '6和9的最大公因数是3',
          explanation: '6和9的最大公因数是3，6÷3=2，9÷3=3，所以6/9=2/3。'
        },
        {
          id: 'm5u6l4q3',
          type: 'choice',
          question: '下面哪个是最简分数？',
          options: ['3/5', '4/6', '6/9', '8/12'],
          answer: '3/5',
          hint: '最简分数的分子分母最大公因数是1',
          explanation: '3和5的最大公因数是1，3/5是最简分数。4和6的最大公因数是2，6和9的最大公因数是3，8和12的最大公因数是4，都不是最简分数。'
        },
        {
          id: 'm5u6l4q4',
          type: 'fill',
          question: '12/18约分得___',
          answer: '2/3',
          hint: '12和18的最大公因数是6',
          explanation: '12和18的最大公因数是6，12÷6=2，18÷6=3，所以12/18=2/3。'
        },
        {
          id: 'm5u6l4q5',
          type: 'choice',
          question: '【期末真题】8和12的最大公因数是？',
          options: ['4', '2', '6', '8'],
          answer: '4',
          hint: '8的因数：1、2、4、8；12的因数：1、2、3、4、6、12',
          explanation: '8的因数有1、2、4、8，12的因数有1、2、3、4、6、12，公因数有1、2、4，最大公因数是4。约分8/12时用4约分得2/3。'
        },
        {
          id: 'm5u6l4q6',
          type: 'fill',
          question: '一个最简真分数，分子和分母的差是1，分母是5，这个分数是___',
          answer: '4/5',
          hint: '真分数分子小于分母，分子=5-1=4',
          explanation: '最简真分数，分子小于分母。分母5，分子和分母差1，分子=5-1=4。4和5的最大公因数是1，4/5是最简分数。'
        },
        {
          id: 'm5u6l4q7',
          type: 'fill',
          question: '约分8/12时，8和12的最大公因数是4。4的因数有1、2、4，其中4是___数（填"质"或"合"）',
          answer: '合',
          hint: '[质数与合数]（五年级数学-第5单元）',
          explanation: '4的因数有1、2、4共3个因数，因数个数大于2的数是合数，所以4是合数。2的因数只有1和2，是质数。'
        }
      ]
    },
    {
      id: 'm5u6l5',
      title: '通分——异分母分数比较大小',
      order: 5,
      teachingMethod: 'EDI，通分步骤：找最小公倍数→化成同分母→比较大小',
      learningObjective: '我能用最小公倍数进行通分，比较异分母分数大小',
      successCriteria: '①能说出通分的步骤 ②能通分后比较大小',
      iDo: '家长示范：比较1/3和1/4，找3和4的最小公倍数12，1/3=4/12，1/4=3/12，4/12>3/12，所以1/3>1/4。',
      weDo: '亲子一起通分2/3和3/4：最小公倍数12，2/3=8/12，3/4=9/12。',
      youDo: '孩子独立通分比较3/5和2/3的大小。',
      parentTips: '【家长预习】通分：找分母的最小公倍数作公分母，化成同分母再比较。\n共学四步：\n①对话出题：问孩子"1/3和1/4哪个大？分母不同怎么比？"\n②孩子应答：通分找最小公倍数12，1/3=4/12，1/4=3/12，4/12>3/12所以1/3>1/4\n③答错引导：若孩子不会找公倍数，教"列倍数找第一个相同的"——3的倍数3,6,9,12，4的倍数4,8,12，第一个相同的是12\n④快速检测：通分比较大小：①2/3和3/4 ②1/2和2/5 ③3/8和1/4',
      funElement: '数学笑话：1/3和1/4吵架："我比你大！""我比你大！"2/12和3/12路过说"别吵了，通分后1/3=4/12，1/4=3/12，4/12>3/12，1/3大！"1/4不服："凭什么用12做分母？"2/12说"因为12是3和4的最小公倍数，最公平！"小游戏：通分比大小——两人各说一个分数，通分后比大小，大的赢！',
      gsapAnimations: [
        '[GSAP:timeline|通分步骤：找公倍数→化同分母→比较|1.5s|点击播放|power2.out]',
        '[GSAP:compare|异分母分数通分前后对比|0.8s|页面加载|power2.out]'
      ],
      images: [
        '[IMG:illustration|通分示意图：1/3和1/4通分|500x300|教学风|png|通分过程]',
        '[IMG:illustration|异分母分数比较大小图|400x300|教学风|png|比较大小]'
      ],
      content: [
        { type: 'text', content: '通分：把异分母分数分别化成和原来相等的同分母分数，叫通分。通分的关键是找最小公倍数作公分母。' },
        { type: 'example', content: '通分1/3和1/4：3和4的最小公倍数是12。1/3=4/12（分子分母同乘4），1/4=3/12（分子分母同乘3）。', label: '通分示例' },
        { type: 'formula', content: '通分步骤：1.找分母的最小公倍数作公分母；2.各分数分子分母同乘相同的数化成同分母。', label: '通分口诀' },
        { type: 'example', content: '比较3/4和5/6的大小：最小公倍数12，3/4=9/12，5/6=10/12，9/12<10/12，所以3/4<5/6。', label: '比较大小' },
        { type: 'tip', content: '找最小公倍数的方法：列举法（列倍数找最小）或分解质因数法。用最小公倍数作公分母，计算最简便。', label: '方法提示' },
        { type: 'tip', content: '比较分数大小的其他方法：同分母比分子，分子大的大；同分子比分母，分母小的大。如1/3>1/4。', label: '比较技巧' },
        { type: 'animation', content: '通分1/3和1/4的步骤', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '通分：1/3和1/4',
            timelineConfig: {
              steps: [
                { id: 's1', description: '找3和4的最小公倍数：12', ttsNarration: '3和4的最小公倍数是12' },
                { id: 's2', description: '1/3=4/12（分子分母同乘4）', ttsNarration: '三分之一等于十二分之四' },
                { id: 's3', description: '1/4=3/12（分子分母同乘3）', ttsNarration: '四分之一等于十二分之三' },
                { id: 's4', description: '4/12>3/12，所以1/3>1/4', ttsNarration: '十二分之四大于十二分之三，所以三分之一大于四分之一' },
              ]
            },
            ttsNarration: '通分找最小公倍数作公分母，化成同分母后比较大小。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u6l5q1',
          type: 'choice',
          question: '1/2和1/3的公分母（最小公倍数）是？',
          options: ['6', '12', '5', '2'],
          answer: '6',
          hint: '找2和3的最小公倍数',
          explanation: '2和3互质，最小公倍数是2×3=6。所以1/2和1/3的公分母是6。'
        },
        {
          id: 'm5u6l5q2',
          type: 'fill',
          question: '把1/3和1/4通分，公分母是___',
          answer: '12',
          hint: '3和4的最小公倍数',
          explanation: '3和4互质，最小公倍数是3×4=12，所以通分的公分母是12。'
        },
        {
          id: 'm5u6l5q3',
          type: 'choice',
          question: '2/3和3/4比较大小，哪个大？',
          options: ['3/4大', '2/3大', '一样大', '无法比较'],
          answer: '3/4大',
          hint: '通分后比较：2/3=8/12，3/4=9/12',
          explanation: '通分：2/3=8/12，3/4=9/12。8/12<9/12，所以3/4>2/3。'
        },
        {
          id: 'm5u6l5q4',
          type: 'fill',
          question: '3/5和2/3通分后（公分母15），3/5=___/15',
          answer: '9',
          hint: '分母5×3=15，分子3×3=?',
          explanation: '分母从5变成15，乘了3，分子3×3=9，所以3/5=9/15。2/3=10/15。'
        },
        {
          id: 'm5u6l5q5',
          type: 'choice',
          question: '【期末真题】比较3/4、5/6、7/8的大小，最大的是？',
          options: ['7/8', '5/6', '3/4', '一样大'],
          answer: '7/8',
          hint: '通分成公分母24再比较',
          explanation: '通分成公分母24：3/4=18/24，5/6=20/24，7/8=21/24。21/24最大，所以7/8最大。'
        },
        {
          id: 'm5u6l5q6',
          type: 'fill',
          question: '1/6和1/8通分后分母是24，则1/6=___/24',
          answer: '4',
          hint: '分母6×4=24，分子1×4=?',
          explanation: '分母从6变成24，乘了4，分子1×4=4，所以1/6=4/24。1/8=3/24。4/24>3/24，所以1/6>1/8。'
        },
        {
          id: 'm5u6l5q7',
          type: 'fill',
          question: '通分1/3和1/4时，3和4的最大公因数是1，说明它们___（填"互质"或"不互质"），所以最小公倍数是3×4=12',
          answer: '互质',
          hint: '[最大公因数与互质]（五年级数学-第5单元）',
          explanation: '3的因数只有1和3，4的因数有1、2、4。3和4的最大公因数是1，说明它们互质。两个互质的数的最小公倍数是它们的乘积3×4=12。'
        }
      ]
    }
  ]
},

{
  id: 'm5u7',
  title: '分数的加减法',
  subtitle: '从同分母到异分母，掌握分数加减运算与生活应用',
  order: 7,
  lessons: [
    {
      id: 'm5u7l1',
      title: '同分母分数加减法',
      order: 1,
      teachingMethod: 'CPA·P→A，图示引出同分母加减法法则',
      learningObjective: '我能计算同分母分数加减法并约分',
      successCriteria: '①能说出同分母加减法法则 ②能正确计算并约分',
      iDo: '家长示范1/4+2/4=3/4：分母不变，分子相加。再用图示验证：4份中取1份再取2份，共3份。',
      weDo: '亲子一起做3/8+2/8=5/8和5/8-3/8=2/8=1/4（约分）。',
      youDo: '孩子独立完成同分母分数加减法并约分。',
      parentTips: '【家长预习】同分母分数加减法：分母不变，分子相加减，结果化成最简分数。\n共学四步：\n①对话出题：问孩子"1/4+2/4等于几？分母变不变？"\n②孩子应答：分母不变分子相加，1/4+2/4=3/4\n③答错引导：若孩子把分母也加，画圆分成4份涂1份再涂2份共3份，看到分母还是4不变，强调"分母相同就像同一个盘子里的份数"\n④快速检测：①2/7+3/7= ②5/8-1/8= ③4/9+2/9=',
      funElement: '数学笑话：1/4对2/4说"咱俩加在一起吧！"2/4说"好啊！"结果变成了3/4。1/5路过问"我能加入吗？"1/4说"不行，你分母不一样，我们只和同分母的玩！"1/5委屈地说"那我去找2/5..."小游戏：同分母加减接力——家长说一个同分母加减算式，孩子快速说出答案，答对得分，连对5个获得"分数小达人"称号！',
      gsapAnimations: [
        '[GSAP:timeline|同分母加法图示+算式过程|1.5s|点击播放|power2.out]',
        '[GSAP:merge|分数合并动画：1/4+2/4=3/4|1s|点击播放|power2.out]'
      ],
      images: [
        '[IMG:illustration|同分母加法图：1/4+2/4=3/4|500x200|教学风|png|图示算式]',
        '[IMG:illustration|同分母减法图：5/8-3/8=2/8|400x200|教学风|png|减法图示]'
      ],
      content: [
        { type: 'text', content: '同分母分数加减法：分母不变，分子相加减。结果能约分的要约成最简分数。' },
        { type: 'formula', content: 'a/c + b/c = (a+b)/c，a/c - b/c = (a-b)/c。分母不变，分子相加减。', label: '运算法则' },
        { type: 'example', content: '1/5+2/5=3/5：分母5不变，分子1+2=3。表示5份中取1份再取2份，共3份。', label: '加法例题' },
        { type: 'example', content: '5/8-3/8=2/8=1/4：分母8不变，分子5-3=2。2/8约分得1/4（2和8的最大公因数是2）。', label: '减法例题' },
        { type: 'tip', content: '计算结果一定要约分！如3/9要约成1/3，4/8要约成1/2。最简分数才是最终答案。', label: '易错提醒' },
        { type: 'tip', content: '1可以看作分子分母相同的分数：1=4/4=5/5=7/7...。计算1-3/7时，把1看作7/7，7/7-3/7=4/7。', label: '重要技巧' },
        { type: 'animation', content: '同分母加法：1/4+2/4=3/4的图示过程', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '同分母加法：1/4+2/4',
            timelineConfig: {
              steps: [
                { id: 's1', description: '把整体平均分成4份', ttsNarration: '把整体平均分成4份' },
                { id: 's2', description: '取1份：1/4', ttsNarration: '取1份，四分之一' },
                { id: 's3', description: '再取2份：2/4', ttsNarration: '再取2份，四分之二' },
                { id: 's4', description: '合起来：1/4+2/4=3/4（分母不变，分子相加）', ttsNarration: '合起来等于四分之三，分母不变分子相加' },
              ]
            },
            ttsNarration: '同分母分数相加，分母不变，分子相加。',
          }
        },
        { type: 'tip', content: '同分母加减，分母不变，分子相加减', label: '助记口诀', animationType: 'pulse' },
      ],
      practiceQuestions: [
        {
          id: 'm5u7l1q1',
          type: 'choice',
          question: '1/5+2/5等于多少？',
          options: ['3/5', '2/5', '3/10', '1/5'],
          answer: '3/5',
          hint: '同分母相加，分母不变，分子相加',
          explanation: '1/5+2/5=3/5。分母5不变，分子1+2=3。表示5份中取1份再取2份，共3份。'
        },
        {
          id: 'm5u7l1q2',
          type: 'fill',
          question: '3/7+2/7=___',
          answer: '5/7',
          hint: '分母不变，分子3+2=?',
          explanation: '3/7+2/7=5/7。分母7不变，分子3+2=5。'
        },
        {
          id: 'm5u7l1q3',
          type: 'choice',
          question: '5/8-3/8等于多少？',
          options: ['1/4', '2/8', '1/8', '3/4'],
          answer: '1/4',
          hint: '分母不变，分子5-3=2，再约分',
          explanation: '5/8-3/8=2/8。2/8约分（分子分母同除以2）得1/4。同分母相减分母不变，分子相减，结果要约成最简分数。'
        },
        {
          id: 'm5u7l1q4',
          type: 'fill',
          question: '1-3/7=___',
          answer: '4/7',
          hint: '把1看作7/7，7/7-3/7=?',
          explanation: '1=7/7，7/7-3/7=4/7。把1看作分母相同的分数7/7，再按同分母减法计算。'
        },
        {
          id: 'm5u7l1q5',
          type: 'choice',
          question: '【期中真题】一根绳子长7/9米，剪去2/9米，还剩多少米？',
          options: ['5/9米', '5/18米', '9/9米', '2/9米'],
          answer: '5/9米',
          hint: '7/9-2/9，分母不变分子相减',
          explanation: '7/9-2/9=5/9（米）。同分母分数相减，分母不变，分子7-2=5。5/9是最简分数，不需要约分。'
        },
        {
          id: 'm5u7l1q6',
          type: 'fill',
          question: '2/9+4/9+1/9=___',
          answer: '7/9',
          hint: '分母不变，分子2+4+1=?',
          explanation: '2/9+4/9+1/9=7/9。分母9不变，分子2+4+1=7。7/9是最简分数。'
        },
        {
          id: 'm5u7l1q7',
          type: 'fill',
          question: '计算1/4+2/4时，分母不变是因为1/4和2/4都是把整体平均分成4份。这里整体"1"等于___/4',
          answer: '4',
          hint: '[分数的意义]（五年级数学-第6单元）',
          explanation: '分数的意义中，整体"1"可以看作4/4（把整体平均分成4份取4份就是整体1）。同分母分数加减时，分母不变是因为分数单位相同，都是1/4。'
        }
      ]
    },
    {
      id: 'm5u7l2',
      title: '异分母分数加减法——通分',
      order: 2,
      teachingMethod: '支架式，先通分再按同分母计算',
      learningObjective: '我能通过通分计算异分母分数加减法',
      successCriteria: '①能说出异分母加减法的步骤 ②能正确通分后计算',
      iDo: '家长示范1/2+1/3：先通分，1/2=3/6，1/3=2/6，3/6+2/6=5/6。',
      weDo: '亲子一起做1/4+1/3：通分成3/12+4/12=7/12。',
      youDo: '孩子独立完成异分母分数加减法。',
      parentTips: '【家长预习】异分母分数加减法：先通分化成同分母，再按同分母加减法计算，最后化简。\n共学四步：\n①对话出题：问孩子"1/2+1/3等于几？分母不同怎么办？"\n②孩子应答：先通分找最小公倍数6，1/2=3/6，1/3=2/6，3/6+2/6=5/6\n③答错引导：若孩子直接加分子分母得2/5，强调"分母不同不能直接加，就像苹果和梨不能合并"，必须先通分\n④快速检测：①1/4+1/3= ②2/3-1/6= ③1/2+1/5=',
      funElement: '数学笑话：1/2想和1/3做加法，1/3说"我们分母不一样，不能加！"通分大师来了："别怕，我来帮你们！1/2=3/6，1/3=2/6，现在你们都是6分之几了，可以加了！"1/2+1/3=3/6+2/6=5/6。1/2感叹："原来通分就是找共同语言啊！"小游戏：通分加法棋——掷骰子得到两个分数，先通分再相加，算对前进一格！',
      gsapAnimations: [
        '[GSAP:timeline|异分母通分→计算步骤展开|1.5s|点击播放|power2.out]',
        '[GSAP:highlight|通分公分母高亮标注|0.8s|通分完成|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|异分母加法图：1/2+1/3通分过程|500x300|教学风|png|通分过程]',
        '[IMG:illustration|异分母减法图|400x300|教学风|png|减法通分]'
      ],
      content: [
        { type: 'text', content: '异分母分数加减法：先通分（化成同分母分数），然后按照同分母分数加减法的法则进行计算。' },
        { type: 'formula', content: '步骤：1.找最小公倍数作公分母；2.通分（各分数分子分母同乘相同的数）；3.按同分母加减法计算；4.约分（化成最简分数）。', label: '计算步骤' },
        { type: 'example', content: '1/2+1/3：2和3的最小公倍数6。1/2=3/6，1/3=2/6，3/6+2/6=5/6。', label: '加法例题' },
        { type: 'example', content: '3/4-1/2：4和2的最小公倍数4。1/2=2/4，3/4-2/4=1/4。', label: '减法例题' },
        { type: 'tip', content: '通分时用最小公倍数作公分母最简便，不要用分母的乘积（虽然也能算，但数字会更大）。', label: '易错提醒' },
        { type: 'tip', content: '结果一定要约分成最简分数。如6/8要约成3/4，4/6要约成2/3。', label: '化简要求' },
        { type: 'animation', content: '异分母加法1/2+1/3通分计算过程', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '异分母加法：1/2+1/3',
            timelineConfig: {
              steps: [
                { id: 's1', description: '找2和3的最小公倍数：6', ttsNarration: '2和3的最小公倍数是6' },
                { id: 's2', description: '通分：1/2=3/6，1/3=2/6', ttsNarration: '通分，二分之一等于六分之三，三分之一等于六分之二' },
                { id: 's3', description: '同分母相加：3/6+2/6=5/6', ttsNarration: '同分母相加，六分之三加六分之二等于六分之五' },
                { id: 's4', description: '5/6是最简分数，结果为5/6', ttsNarration: '六分之五是最简分数' },
              ]
            },
            ttsNarration: '异分母分数相加，先通分，再按同分母加法计算。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u7l2q1',
          type: 'choice',
          question: '1/2+1/3等于多少？',
          options: ['5/6', '2/5', '1/6', '2/6'],
          answer: '5/6',
          hint: '先通分，1/2=3/6，1/3=2/6',
          explanation: '通分：1/2=3/6，1/3=2/6。3/6+2/6=5/6。5和6互质，5/6是最简分数。'
        },
        {
          id: 'm5u7l2q2',
          type: 'fill',
          question: '1/4+1/3=___',
          answer: '7/12',
          hint: '通分成分母12，1/4=3/12，1/3=4/12',
          explanation: '4和3的最小公倍数12。1/4=3/12，1/3=4/12。3/12+4/12=7/12。7和12互质，7/12是最简分数。'
        },
        {
          id: 'm5u7l2q3',
          type: 'choice',
          question: '3/4-1/2等于多少？',
          options: ['1/4', '2/4', '1/2', '1/8'],
          answer: '1/4',
          hint: '通分：1/2=2/4，3/4-2/4=?',
          explanation: '4和2的最小公倍数4。1/2=2/4。3/4-2/4=1/4。1/4是最简分数。'
        },
        {
          id: 'm5u7l2q4',
          type: 'fill',
          question: '5/6-1/3=___',
          answer: '1/2',
          hint: '通分：1/3=2/6，5/6-2/6=?',
          explanation: '6和3的最小公倍数6。1/3=2/6。5/6-2/6=3/6。3/6约分得1/2（分子分母同除以3）。'
        },
        {
          id: 'm5u7l2q5',
          type: 'choice',
          question: '【期末真题】1/2+1/3+1/6等于多少？',
          options: ['1', '6/6', '1/6', '5/6'],
          answer: '1',
          hint: '通分成分母6，全部化成6分之几',
          explanation: '通分成分母6：1/2=3/6，1/3=2/6，1/6=1/6。3/6+2/6+1/6=6/6=1。注意6/6=1要化简。'
        },
        {
          id: 'm5u7l2q6',
          type: 'fill',
          question: '一块地，1/3种西红柿，1/4种黄瓜，其余种茄子，茄子占这块地的___',
          answer: '5/12',
          hint: '1-1/3-1/4，先通分',
          explanation: '1-1/3-1/4=12/12-4/12-3/12=5/12。先通分成公分母12，再按同分母减法计算。5/12是最简分数。'
        },
        {
          id: 'm5u7l2q7',
          type: 'fill',
          question: '计算1/2+1/3时，先通分得3/6+2/6。这里利用了分数的___性质（分子分母同乘同数大小不变）',
          answer: '基本',
          hint: '[分数的基本性质]（五年级数学-第6单元）',
          explanation: '通分利用的是分数的基本性质：分数的分子和分母同时乘或除以相同的数（0除外），分数大小不变。1/2分子分母同乘3得3/6，1/3分子分母同乘2得2/6，大小不变。'
        }
      ]
    },
    {
      id: 'm5u7l3',
      title: '分数加减混合运算',
      order: 3,
      teachingMethod: 'EDI，运算顺序+简便计算（交换律、结合律）',
      learningObjective: '我能进行分数加减混合运算和简便计算',
      successCriteria: '①能按运算顺序计算 ②能用运算律简便计算',
      iDo: '家长示范1/2+1/3-1/6：通分成6/12+4/12-2/12=8/12=2/3。从左到右依次计算。',
      weDo: '亲子一起做简便计算3/7+5/8+4/7=（3/7+4/7）+5/8=1+5/8=1又5/8。',
      youDo: '孩子独立完成分数加减混合运算。',
      parentTips: '【家长预习】分数加减混合运算：没有括号从左到右，有括号先算括号；能用交换律结合律凑整简便算。\n共学四步：\n①对话出题：问孩子"1/2+1/3-1/6怎么算？先算什么？"\n②孩子应答：从左到右，先通分找最小公倍数6，3/6+2/6-1/6=4/6=2/3\n③答错引导：若孩子不会简便算，引导观察"3/7+5/8+4/7中3/7和4/7同分母可先算凑成1"，就像整数凑整\n④快速检测：①1/2+1/3-1/6= ②3/7+5/8+4/7= ③5/6-1/3+1/6=',
      funElement: '数学笑话：混合运算题1/2+1/3-1/6，小明从左到右依次算。小红说"我有个巧办法！先通分成6/12+4/12-2/12=8/12=2/3。"小明说"你这是先通分再算！"老师说"两种方法都对，但先通分更不容易出错！"小明："那我还能更巧！1/2+1/3-1/6=3/6+2/6-1/6，直接约分得2/3！"小游戏：简便运算找朋友——在混合运算中找能凑整的分数对（分母相同或能凑成1），看谁找得快！',
      gsapAnimations: [
        '[GSAP:timeline|混合运算步骤：通分→计算→化简|1.5s|点击播放|power2.out]',
        '[GSAP:highlight|简便计算凑整组合高亮|0.6s|凑整完成|power1.inOut]'
      ],
      images: [
        '[IMG:illustration|混合运算步骤图|500x200|教学风|png|运算顺序]',
        '[IMG:illustration|简便计算凑整示意图|400x300|教学风|png|凑整组合]'
      ],
      content: [
        { type: 'text', content: '分数加减混合运算的顺序：没有括号的，从左到右依次计算；有括号的，先算括号里面的。' },
        { type: 'formula', content: '简便计算：整数加法的交换律、结合律同样适用于分数加法。可以调换顺序，把同分母的先算。', label: '简便运算' },
        { type: 'example', content: '1/2+1/3-1/6：通分成分母6，3/6+2/6-1/6=4/6=2/3。从左到右依次计算。', label: '一般运算' },
        { type: 'example', content: '简便计算3/7+5/8+4/7：调换顺序，先算3/7+4/7=1（同分母凑整），再算1+5/8=1又5/8。', label: '简便运算' },
        { type: 'tip', content: '简便计算的技巧：找同分母的分数先算；找能凑成1的分数对（如1/3+2/3=1）先算。', label: '凑整技巧' },
        { type: 'tip', content: '有括号时先算括号里的。如1/2+（1/3-1/6），先算1/3-1/6=1/6，再算1/2+1/6=2/3。', label: '运算顺序' },
        { type: 'animation', content: '简便计算3/7+5/8+4/7的步骤', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '简便计算：3/7+5/8+4/7',
            timelineConfig: {
              steps: [
                { id: 's1', description: '观察：3/7和4/7同分母', ttsNarration: '观察发现3/7和4/7分母相同' },
                { id: 's2', description: '交换顺序：3/7+4/7+5/8', ttsNarration: '交换顺序，把3/7和4/7放一起' },
                { id: 's3', description: '先算3/7+4/7=1（同分母凑整）', ttsNarration: '先算3/7加4/7等于1' },
                { id: 's4', description: '1+5/8=1又5/8', ttsNarration: '1加5/8等于1又5/8' },
              ]
            },
            ttsNarration: '简便计算找同分母先算，凑成1再算剩下的。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u7l3q1',
          type: 'choice',
          question: '1/2+1/3-1/6等于多少？',
          options: ['2/3', '4/6', '1/6', '1/3'],
          answer: '2/3',
          hint: '通分成分母6，3/6+2/6-1/6=?',
          explanation: '通分成分母6：1/2=3/6，1/3=2/6。3/6+2/6-1/6=4/6。4/6约分得2/3（分子分母同除以2）。'
        },
        {
          id: 'm5u7l3q2',
          type: 'fill',
          question: '3/4-1/2+1/3=___',
          answer: '7/12',
          hint: '通分成分母12',
          explanation: '通分成分母12：3/4=9/12，1/2=6/12，1/3=4/12。9/12-6/12+4/12=7/12。7/12是最简分数。'
        },
        {
          id: 'm5u7l3q3',
          type: 'choice',
          question: '1-1/4-1/3等于多少？',
          options: ['5/12', '7/12', '1/12', '2/7'],
          answer: '5/12',
          hint: '把1看作12/12，通分后计算',
          explanation: '1=12/12，1/4=3/12，1/3=4/12。12/12-3/12-4/12=5/12。5/12是最简分数。'
        },
        {
          id: 'm5u7l3q4',
          type: 'fill',
          question: '1/2+(1/3-1/6)=___',
          answer: '2/3',
          hint: '先算括号里的1/3-1/6=?',
          explanation: '先算括号：1/3-1/6=2/6-1/6=1/6。再算1/2+1/6=3/6+1/6=4/6=2/3。有括号先算括号里的。'
        },
        {
          id: 'm5u7l3q5',
          type: 'choice',
          question: '【期末真题】用简便方法计算：3/7+5/8+4/7等于多少？',
          options: ['1又5/8', '12/15', '5/8', '7/8'],
          answer: '1又5/8',
          hint: '把3/7和4/7先加（凑整），再加5/8',
          explanation: '3/7+5/8+4/7=（3/7+4/7）+5/8=1+5/8=1又5/8。运用加法交换律和结合律，把同分母的3/7和4/7先算凑成1。'
        },
        {
          id: 'm5u7l3q6',
          type: 'fill',
          question: '5/6-1/3-1/6=___（用简便方法）',
          answer: '1/3',
          hint: '把5/6和1/6先减（凑整）',
          explanation: '5/6-1/3-1/6=（5/6-1/6）-1/3=4/6-1/3=2/3-1/3=1/3。运用减法性质，把同分母的5/6和1/6先算。'
        },
        {
          id: 'm5u7l3q7',
          type: 'fill',
          question: '简便计算3/7+5/8+4/7时，先算3/7+4/7=1。这里7/7=___，是因为把整体"1"平均分成7份取7份。',
          answer: '1',
          hint: '[分数的意义]（五年级数学-第6单元）',
          explanation: '根据分数的意义，把整体"1"平均分成7份取7份就是7/7，7/7=1。同分母分数3/7+4/7=7/7，而7/7表示取了全部7份，就等于整体1。这是分数意义的直接应用。'
        }
      ]
    },
    {
      id: 'm5u7l4',
      title: '分数与小数的互化',
      order: 4,
      teachingMethod: '支架式，分子除以分母化小数；小数化分数先化分母10/100再约分',
      learningObjective: '我能进行分数和小数的互化',
      successCriteria: '①能把分数化小数 ②能把小数化分数',
      iDo: '家长示范3/4=3÷4=0.75；反过来0.25=25/100=1/4（约分）。',
      weDo: '亲子一起把7/20化成小数：7÷20=0.35。把0.3化成分数3/10。',
      youDo: '孩子独立进行分数和小数的互化。',
      parentTips: '【家长预习】分数化小数用分子除以分母；小数化分数先化成分母10/100的分数再约分。\n共学四步：\n①对话出题：问孩子"3/4化成小数是多少？0.25化成分数呢？"\n②孩子应答：3÷4=0.75；0.25=25/100=1/4\n③答错引导：若孩子不会，教口诀"分数化小数用分子除以分母，小数化分数看几位小数就分母几个0再约分"\n④快速检测：①3/10化小数 ②7/20化小数 ③0.3化分数 ④0.45化分数',
      funElement: '数学笑话：0.3对3/10说"你就是我啊！"3/10说"你是我？"0.3说"对，3÷10=0.3，我就是你的小数形式！"3/10说"那我也可以变成你？"0.3说"当然，我们是一家人！"旁边的1/3哭了"那我呢？1÷3=0.333...永远除不尽！"0.3说"你是无限循环小数，和我不一样！"小游戏：分数小数变身赛——说一个分数化成小数，或说一个小数化成分数，看谁变得快！',
      gsapAnimations: [
        '[GSAP:timeline|分数化小数和小数化分数步骤|1.5s|点击播放|power2.out]',
        '[GSAP:compare|分数与小数对比展示|0.8s|页面加载|power2.out]'
      ],
      images: [
        '[IMG:illustration|分数与小数互化关系图|500x300|教学风|png|互化关系]',
        '[IMG:illustration|有限小数判断图|400x200|教学风|png|判断方法]'
      ],
      content: [
        { type: 'text', content: '分数化小数：用分子除以分母。如3/4=3÷4=0.75。分母是10、100、1000的可以直接去掉分母写小数。' },
        { type: 'example', content: '3/10=0.3，7/100=0.07，23/1000=0.023。分母几个0，小数点左移几位。', label: '特殊分数化小数' },
        { type: 'formula', content: '小数化分数：先把小数写成分母是10、100、1000的分数，再约分。如0.25=25/100=1/4。', label: '小数化分数' },
        { type: 'example', content: '0.6=6/10=3/5（约分）。0.375=375/1000=3/8（约分，分子分母同除以125）。', label: '例题' },
        { type: 'tip', content: '判断能否化有限小数：最简分数的分母只含质因数2和5，就能化成有限小数。如3/4分母4=2²能，2/3分母3不能。', label: '判断方法' },
        { type: 'tip', content: '分数和小数可以互化，说明它们是同一个数的不同表示形式。比较大小时可以统一化成一种形式再比。', label: '应用提示' },
        { type: 'animation', content: '分数与小数互化的步骤', animationType: 'timeline',
          animationConfig: {
            sceneType: 'timeline',
            title: '分数与小数互化',
            timelineConfig: {
              steps: [
                { id: 's1', description: '分数化小数：3/4=3÷4=0.75', ttsNarration: '分数化小数，用分子除以分母，3除以4等于0.75' },
                { id: 's2', description: '小数化分数：0.25=25/100', ttsNarration: '小数化分数，0.25等于一百分之二十五' },
                { id: 's3', description: '约分：25/100=1/4', ttsNarration: '约分得四分之一' },
                { id: 's4', description: '所以0.25=1/4', ttsNarration: '0.25等于四分之一' },
              ]
            },
            ttsNarration: '分数化小数用分子除以分母，小数化分数先化成分母10或100的分数再约分。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u7l4q1',
          type: 'choice',
          question: '3/10化成小数是？',
          options: ['0.3', '3', '0.03', '0.1'],
          answer: '0.3',
          hint: '分母是10，小数点左移一位',
          explanation: '3/10=0.3。分母是10的分数，直接去掉分母，小数点左移一位。3÷10=0.3。'
        },
        {
          id: 'm5u7l4q2',
          type: 'fill',
          question: '7/100=___（化成小数）',
          answer: '0.07',
          hint: '分母是100，小数点左移两位',
          explanation: '7/100=0.07。分母是100的分数，小数点左移两位。7÷100=0.07。'
        },
        {
          id: 'm5u7l4q3',
          type: 'choice',
          question: '0.25化成分数是？',
          options: ['1/4', '25/100', '1/25', '1/2'],
          answer: '1/4',
          hint: '先化成25/100，再约分',
          explanation: '0.25=25/100。25和100的最大公因数是25，25÷25=1，100÷25=4，所以25/100=1/4。约分后是最简分数。'
        },
        {
          id: 'm5u7l4q4',
          type: 'fill',
          question: '3/4=___（化成小数）',
          answer: '0.75',
          hint: '用分子除以分母，3÷4=?',
          explanation: '3/4=3÷4=0.75。用分子除以分母：3÷4=0.75。'
        },
        {
          id: 'm5u7l4q5',
          type: 'choice',
          question: '【期末真题】下面哪个分数不能化成有限小数？',
          options: ['2/3', '3/8', '7/20', '1/4'],
          answer: '2/3',
          hint: '看最简分数的分母是否只含质因数2和5',
          explanation: '2/3是最简分数，分母3含有质因数3（不是2或5），不能化成有限小数。3/8分母8=2³能，7/20分母20=2²×5能，1/4分母4=2²能。'
        },
        {
          id: 'm5u7l4q6',
          type: 'fill',
          question: '0.375=___（化成最简分数）',
          answer: '3/8',
          hint: '先化成375/1000，再约分',
          explanation: '0.375=375/1000。375和1000的最大公因数是125，375÷125=3，1000÷125=8，所以375/1000=3/8。'
        },
        {
          id: 'm5u7l4q7',
          type: 'fill',
          question: '把0.25化成分数时，先写成25/100，再约分得1/4。约分时分子分母同除以___',
          answer: '25',
          hint: '[约分]（五年级数学-第6单元）',
          explanation: '0.25=25/100，约分时找分子分母的最大公因数。25的因数有1、5、25，100的因数有1、2、4、5、10、20、25、50、100，最大公因数是25。25÷25=1，100÷25=4，所以25/100=1/4。'
        }
      ]
    },
    {
      id: 'm5u7l5',
      title: '综合应用——生活中的分数与跨学科应用',
      order: 5,
      teachingMethod: '情境式，综合应用分数加减法解决生活与科学问题',
      learningObjective: '我能综合应用分数加减法解决生活问题',
      successCriteria: '①能正确计算分数加减 ②能解决实际问题',
      iDo: '家长示范：一根绳子3米，第一次截去1/2米，第二次截去剩下的1/2，还剩5/4米。注意区分"1/2米"和"1/2"。',
      weDo: '亲子一起解决：一杯水第一天蒸发1/4，第二天蒸发1/3，还剩5/12。',
      youDo: '孩子独立解决生活中的分数加减问题。',
      parentTips: '【家长预习】综合应用分数加减法，注意区分"几分之几米"和"几分之几"的不同。\n共学四步：\n①对话出题：问孩子"一杯水第一天蒸发1/4，第二天蒸发1/3，还剩几分之几？"\n②孩子应答：1-1/4-1/3，通分成12/12-3/12-4/12=5/12\n③答错引导：若孩子直接减出错，提醒"先把1化成12/12，再通分相减"，注意1/4和1/3是比例不是具体数量\n④快速检测：①一根绳用去1/3又用去1/6，还剩? ②一杯水喝2/5再喝1/3剩? ③3米绳子第一次用1/2米第二次用1/2，剩?',
      funElement: '数学笑话：科学课上，老师说"一杯水蒸发了1/4，又蒸发了1/3，还剩多少？"小明说"还剩1-1/4-1/3=5/12！"老师说"正确！分数加减法在生活中和科学中都很有用！"小明得意地说"我以后量面粉也用分数！"妈妈："别闹，做蛋糕要精确！"小游戏：生活中的分数——全家一起找生活中的分数问题（分披萨、量面粉、算折扣等），看谁找到的最多！每找到一个得1分！',
      gsapAnimations: [
        '[GSAP:sceneBuild|生活中的分数应用场景|1.5s|点击播放|power2.out]',
        '[GSAP:confetti|综合应用通关撒花|2s|正确率达标|power1.out]'
      ],
      images: [
        '[IMG:illustration|生活中的分数应用场景|500x300|可爱卡通风|png|生活应用]',
        '[IMG:illustration|科学测量中的分数应用|400x300|教学风|png|跨学科应用]'
      ],
      content: [
        { type: 'text', content: '分数加减法在生活中有广泛的应用：分配物品、计算用量、科学测量等都会用到。关键是理解题意，正确列式。' },
        { type: 'example', content: '小明吃了一个蛋糕的1/4，小红吃了1/3，两人一共吃了1/4+1/3=3/12+4/12=7/12。', label: '生活应用' },
        { type: 'tip', content: '注意区分"1/2米"和"1/2"：1/2米是具体数量（0.5米），1/2是比例（一半）。"用去1/2米"和"用去1/2"完全不同！', label: '易错提醒' },
        { type: 'example', content: '【跨学科·科学】一杯水第一天蒸发1/4，第二天蒸发1/3，还剩多少？1-1/4-1/3=12/12-3/12-4/12=5/12。', label: '跨学科应用' },
        { type: 'example', content: '做一项工程，甲队每天做1/6，乙队每天做1/4，两队合作每天做1/6+1/4=2/12+3/12=5/12。', label: '工程应用' },
        { type: 'tip', content: '解应用题步骤：1.读懂题意；2.找准单位"1"；3.列式计算；4.检查结果是否合理。', label: '解题策略' },
        { type: 'animation', content: '生活中的分数应用场景', animationType: 'sceneBuild',
          animationConfig: {
            sceneType: 'sceneBuild',
            title: '生活中的分数',
            sceneBuildConfig: {
              sceneName: '分数生活场景',
              elements: [
                { text: '分蛋糕', emoji: '🎂', x: 25, y: 25, size: 'md', color: '#FF6B6B', animation: 'bounceIn', delay: 0, ttsText: '分蛋糕用分数' },
                { text: '量面粉', emoji: '⚖️', x: 75, y: 25, size: 'md', color: '#4ECDC4', animation: 'bounceIn', delay: 0.3, ttsText: '量面粉用分数' },
                { text: '科学测量', emoji: '🧪', x: 25, y: 60, size: 'md', color: '#95E1D3', animation: 'bounceIn', delay: 0.6, ttsText: '科学测量用分数' },
                { text: '工程进度', emoji: '🏗️', x: 75, y: 60, size: 'md', color: '#F38181', animation: 'bounceIn', delay: 0.9, ttsText: '工程进度用分数' },
              ]
            },
            ttsNarration: '分数在生活中无处不在，分蛋糕、量面粉、科学测量、工程进度都会用到分数。',
          }
        },
      ],
      practiceQuestions: [
        {
          id: 'm5u7l5q1',
          type: 'choice',
          question: '小明吃了一个蛋糕的1/4，小红吃了1/3，两人一共吃了多少？',
          options: ['7/12', '2/7', '1/12', '5/12'],
          answer: '7/12',
          hint: '1/4+1/3，先通分',
          explanation: '1/4+1/3=3/12+4/12=7/12。两人一共吃了蛋糕的7/12。7/12是最简分数。'
        },
        {
          id: 'm5u7l5q2',
          type: 'fill',
          question: '一桶水，第一次用去1/5，第二次用去2/5，还剩___',
          answer: '2/5',
          hint: '1-1/5-2/5=?',
          explanation: '1-1/5-2/5=5/5-1/5-2/5=2/5。同分母分数减法，分母不变分子相减。2/5是最简分数。'
        },
        {
          id: 'm5u7l5q3',
          type: 'choice',
          question: '【跨学科·科学】科学课测量水温，第一天升高1/2度，第二天升高1/3度，两天一共升高多少度？',
          options: ['5/6度', '2/5度', '1/6度', '5/5度'],
          answer: '5/6度',
          hint: '1/2+1/3，先通分',
          explanation: '1/2+1/3=3/6+2/6=5/6。两天一共升高5/6度。这是分数在科学测量中的应用。'
        },
        {
          id: 'm5u7l5q4',
          type: 'fill',
          question: '做一项工程，甲队每天做1/6，乙队每天做1/4，两队合作每天做___',
          answer: '5/12',
          hint: '1/6+1/4，先通分',
          explanation: '1/6+1/4=2/12+3/12=5/12。两队合作每天完成工程的5/12。6和4的最小公倍数是12。'
        },
        {
          id: 'm5u7l5q5',
          type: 'choice',
          question: '【期末真题】书店有一批书，第一天卖了1/3，第二天卖了剩下的1/2，第三天卖了120本正好卖完，这批书一共多少本？',
          options: ['360本', '240本', '120本', '480本'],
          answer: '360本',
          hint: '第一天卖1/3剩2/3，第二天卖2/3的1/2=1/3，第三天卖最后的1/3=120本',
          explanation: '第一天卖1/3剩2/3，第二天卖剩下的1/2即2/3×1/2=1/3，还剩2/3-1/3=1/3。第三天卖完120本=1/3，所以总数=120×3=360本。'
        },
        {
          id: 'm5u7l5q6',
          type: 'fill',
          question: '一根钢管长3米，第一次截去1/2米，第二次截去剩下的1/2，还剩___米',
          answer: '5/4',
          hint: '第一次截去1/2米（具体数量），第二次截去剩下的1/2（比例）',
          explanation: '第一次后剩3-1/2=6/2-1/2=5/2米。第二次截去剩下的1/2即5/2×1/2=5/4米。还剩5/2-5/4=10/4-5/4=5/4米。注意区分"1/2米"（0.5米）和"1/2"（一半）的不同。'
        },
        {
          id: 'm5u7l5q7',
          type: 'fill',
          question: '一根绳子用去1/3，还剩2/3。这里1-1/3=2/3，整体"1"可以看作___/3',
          answer: '3',
          hint: '[分数的意义]（五年级数学-第6单元）',
          explanation: '根据分数的意义，整体"1"可以看作3/3（把整体平均分成3份取3份等于整体1）。1-1/3=3/3-1/3=2/3。理解分数的意义是解决分数应用题的基础。'
        }
      ]
    }
  ]
},

{
    id: 'm5u8',
    title: '位置与方向',
    subtitle: '用方向和距离确定位置，学会描述路线图',
    order: 8,
    lessons: [
      {
        id: 'm5u8l1',
        title: '方向与距离——确定位置',
        order: 1,
        teachingMethod: 'CPA·C→P：地图操作，以观测点为中心标方向和距离',
        learningObjective: '我能根据方向和距离确定物体的位置',
        successCriteria: '①能说出确定位置的三要素 ②能描述物体的方向和距离',
        iDo: '家长在地图上以学校为观测点，标出北偏东30°方向500米处是图书馆，示范确定位置。',
        weDo: '亲子一起以家为观测点，标出超市在南偏西45°方向300米处。',
        youDo: '孩子独立以公园为观测点，确定医院、学校等地点的位置。',
        parentTips: '【家长预习】确定位置三要素：观测点、方向（偏角）、距离。方向描述如"北偏东30°"。\n共学四步：\n①对话出题：问孩子"以学校为观测点，图书馆在北偏东30°方向500米处，这三个信息分别是什么？"\n②孩子应答：观测点是学校，方向是北偏东30°，距离是500米\n③答错引导：若孩子不懂偏角，用指南针或画图演示——先找北，再向东偏转30度，就是北偏东30°\n④快速检测：①以家为观测点描述超市位置 ②南偏西45°方向300米是什么意思 ③确定位置需要哪三个要素？',
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
          { type: 'tip', content: '确定位置三要素：观测点、方向角、距离数', label: '助记口诀', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm5u8l1q1',
            type: 'choice',
            question: '确定一个地点的位置需要哪三个要素？',
            options: ['观测点、方向、距离', '方向、距离、时间', '观测点、方向、时间', '方向、距离、速度'],
            answer: '观测点、方向、距离',
            hint: '想想确定位置需要哪些信息',
            explanation: '确定位置三要素：观测点（从哪里看）、方向（偏角）、距离（多远）。'
          },
          {
            id: 'm5u8l1q2',
            type: 'fill',
            question: '以学校为观测点，图书馆在北偏东30°方向，"30°"是从___方向向东偏的角度',
            answer: '正北',
            hint: '北偏东的意思是',
            explanation: '北偏东30°表示从正北方向向东偏30°的角度。'
          },
          {
            id: 'm5u8l1q3',
            type: 'choice',
            question: '南偏西45°方向，相当于哪个方向？',
            options: ['西南方向', '西北方向', '东南方向', '正西方向'],
            answer: '西南方向',
            hint: '南偏西45°正好在正南和正西之间',
            explanation: '南偏西45°从正南向西偏45°，正好在正南和正西的正中间，即西南方向。'
          },
          {
            id: 'm5u8l1q4',
            type: 'fill',
            question: '以家为观测点，小明家在学校东偏北30°方向400米处。学校在小明家的___偏___30°方向400米处',
            answer: '西偏南',
            hint: '反方向看，东偏北的反方向是？',
            explanation: '方向是相对的，东偏北的反方向是西偏南。所以学校在小明家的西偏南30°方向400米处。'
          },
          {
            id: 'm5u8l1q5',
            type: 'choice',
            question: '甲在乙的北偏东40°方向，那么乙在甲的什么方向？',
            options: ['南偏西40°', '南偏东40°', '北偏西40°', '北偏东40°'],
            answer: '南偏西40°',
            hint: '【期末真题】北偏东的反方向是？',
            explanation: '方向的相对性：北偏东40°的反方向是南偏西40°。甲在乙的北偏东40°，则乙在甲的南偏西40°。'
          },
          {
            id: 'm5u8l1q6',
            type: 'fill',
            question: '以广场为观测点，邮局在东偏北35°方向600米处，书店在西偏南35°方向600米处。邮局和书店在广场的___方向上',
            answer: '相反',
            hint: '东偏北和西偏南是什么关系？',
            explanation: '东偏北35°和西偏南35°是相反方向，所以邮局和书店在广场的相反方向上，且距离相同。'
          },
          {
            id: 'm5u8l1q7',
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
        id: 'm5u8l2',
        title: '描述路线图',
        order: 2,
        teachingMethod: '情境式，从A到B分段描述方向和距离',
        learningObjective: '我能根据方向和距离描述路线图',
        successCriteria: '①能分段描述方向和距离 ②能画出简单路线图',
        iDo: '家长示范：从家出发，向东走200米到超市，再向北偏东30°走300米到学校。',
        weDo: '亲子一起描述从学校到公园的路线，包含方向和距离。',
        youDo: '孩子独立描述从家到图书馆的完整路线。',
        parentTips: '【家长预习】描述路线图：分段描述每一段的方向和距离，从起点到终点依次说明。\n共学四步：\n①对话出题：问孩子"从家到学校怎么走？分成几段？每段方向距离是什么？"\n②孩子应答：先向东走200米到超市，再向北偏东30°走300米到学校\n③答错引导：若孩子不会分段，拿一张简易地图用手指描路线，每到一个转弯点就停下来描述方向和距离\n④快速检测：①描述从学校到公园的路线 ②根据描述画路线图 ③路线图要描述什么信息？',
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
            id: 'm5u8l2q1',
            type: 'choice',
            question: '描述路线图时，每段路需要说清楚什么？',
            options: ['方向和距离', '方向和时间', '距离和速度', '时间和速度'],
            answer: '方向和距离',
            hint: '回顾确定位置三要素',
            explanation: '描述路线图每段需要说清楚方向和距离，有时还要说明到达的地点。'
          },
          {
            id: 'm5u8l2q2',
            type: 'fill',
            question: '从学校出发，向东走300米到超市，再向___走200米到图书馆（图书馆在超市北面）',
            answer: '北',
            hint: '图书馆在超市的北面',
            explanation: '图书馆在超市北面，所以从超市向北走200米到图书馆。'
          },
          {
            id: 'm5u8l2q3',
            type: 'choice',
            question: '小明从家出发，先向东走200米到书店，再向北走300米到学校。学校在小明家的什么方向？',
            options: ['东北方向', '东南方向', '西北方向', '正北方向'],
            answer: '东北方向',
            hint: '东走了200米，北走了300米，综合方向是？',
            explanation: '先向东走200米，再向北走300米，学校在家的东北方向。'
          },
          {
            id: 'm5u8l2q4',
            type: 'fill',
            question: '从A地出发向南偏东30°走400米到B地，从B地回A地应该向___偏___30°走400米',
            answer: '北偏西',
            hint: '南偏东的反方向是？',
            explanation: '南偏东30°的反方向是北偏西30°。从B地回A地应该向北偏西30°走400米。'
          },
          {
            id: 'm5u8l2q5',
            type: 'choice',
            question: '小红从家出发向西走300米，再向北走400米到学校。她家到学校的直线距离大约是多少？',
            options: ['500米', '700米', '400米', '300米'],
            answer: '500米',
            hint: '用勾股思想：300和400构成直角边',
            explanation: '向西300米、向北400米构成直角三角形两直角边，斜边=√(300²+400²)=√250000=500米。'
          },
          {
            id: 'm5u8l2q6',
            type: 'fill',
            question: '从起点出发，向东偏北45°走500米到中点，再向东偏南45°走500米到终点。终点在起点的正___方向约707米处',
            answer: '东',
            hint: '北偏东45°和东偏南45°叠加，南北抵消',
            explanation: '东偏北45°走500米：向东约354米，向北约354米。东偏南45°走500米：向东约354米，向南约354米。南北抵消，向东共约707米。终点在起点正东方向约707米处。'
          },
          {
            id: 'm5u8l2q7',
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
        id: 'm5u8l3',
        title: '位置与方向综合应用',
        order: 3,
        teachingMethod: '探究式，综合运用方向和距离解决实际问题',
        learningObjective: '我能综合运用方向和距离解决实际问题',
        successCriteria: '①能在图上标注位置 ②能解决综合问题',
        iDo: '家长示范：在平面图上标注多个地点的位置关系，画出简易地图。',
        weDo: '亲子一起根据描述画出路线图，互相检查。',
        youDo: '孩子独立根据文字描述画出平面位置图。',
        parentTips: '【家长预习】综合运用方向和距离，在平面图上标注多个地点，画出简易地图。\n共学四步：\n①对话出题：问孩子"以公园为中心，学校在北偏东30°方向400米，医院在南偏西45°方向600米，能画出来吗？"\n②孩子应答：画一个点作公园，用量角器和尺子标出两个方向和距离\n③答错引导：若孩子不会用量角器，教"中心对观测点，0度线对正北方向，找到30度画线量400米"\n④快速检测：①以家为中心标注3个地点 ②根据描述画出简易地图 ③两个地点之间的位置关系怎么描述？',
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
            id: 'm5u8l3q1',
            type: 'choice',
            question: '画平面位置图时，第一步应该做什么？',
            options: ['确定观测点', '画方向线', '量角度', '标距离'],
            answer: '确定观测点',
            hint: '所有位置都是相对于谁来说的？',
            explanation: '画平面位置图第一步是确定观测点，因为所有位置都是相对于观测点来描述的。'
          },
          {
            id: 'm5u8l3q2',
            type: 'fill',
            question: '比例尺1:5000，图上3厘米代表实际距离___米',
            answer: '150',
            hint: '3×5000=15000厘米',
            explanation: '3厘米×5000=15000厘米=150米。图上3厘米代表实际150米。'
          },
          {
            id: 'm5u8l3q3',
            type: 'choice',
            question: '以A为观测点，B在北偏东25°方向，以B为观测点，A在什么方向？',
            options: ['南偏西25°', '南偏东25°', '北偏西25°', '北偏东25°'],
            answer: '南偏西25°',
            hint: '北偏东的反方向',
            explanation: '北偏东25°的反方向是南偏西25°。以B为观测点，A在南偏西25°方向。'
          },
          {
            id: 'm5u8l3q4',
            type: 'fill',
            question: '以O为观测点，A在东偏北40°方向200米，B在东偏南40°方向200米。A和B到O的距离___（填"相等"或"不等"）',
            answer: '相等',
            hint: '比较两人到O的距离',
            explanation: 'A和B到O的距离都是200米，所以距离相等。方向不同但距离相同。'
          },
          {
            id: 'm5u8l3q5',
            type: 'choice',
            question: '小明面向正北站立，向右转90°后面向什么方向？',
            options: ['正东', '正西', '正南', '正北'],
            answer: '正东',
            hint: '面向北，右转90°',
            explanation: '面向正北，右转90°就是顺时针转90°，从北转到东，所以面向正东方向。'
          },
          {
            id: 'm5u8l3q6',
            type: 'fill',
            question: '一艘船从港口出发向东南方向航行，"东南方向"就是南偏东___°方向',
            answer: '45',
            hint: '东南方向正好在正南和正东之间',
            explanation: '东南方向就是南偏东45°方向，因为正南到正东是90°，正好中间是45°。'
          },
          {
            id: 'm5u8l3q7',
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
        id: 'm5u8l4',
        title: '位置与方向应用题',
        order: 4,
        teachingMethod: '情境式，解决实际生活中的位置与方向问题',
        learningObjective: '我能用方向和距离解决实际应用题',
        successCriteria: '①能理解题意找出方向距离 ②能正确解答应用题',
        iDo: '家长示范：根据描述画出台风移动路径，标注每段方向和距离。',
        weDo: '亲子一起解决"寻宝"问题，根据线索找到宝藏位置。',
        youDo: '孩子独立解决实际位置与方向应用题。',
        parentTips: '【家长预习】位置与方向应用题：根据题目描述确定观测点、方向和距离，画出图形辅助理解。\n共学四步：\n①对话出题：问孩子"台风从A市出发，向北偏西40°方向移动300千米到达B市，能画出来吗？"\n②孩子应答：以A市为观测点，画北偏西40°方向，量300千米到B市\n③答错引导：若孩子搞错方向，教"先找北再向西偏转40度"，用纸画十字方向标帮助判断\n④快速检测：①船向东偏南30°行200千米 ②飞机从A到B再飞C的路线 ③描述路线要注意什么？',
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
            id: 'm5u8l4q1',
            type: 'choice',
            question: '解决位置与方向应用题，最有效的策略是？',
            options: ['边读题边画图', '只读题不画图', '先算再画', '只画不算'],
            answer: '边读题边画图',
            hint: '画图能帮助理解',
            explanation: '边读题边画图是最有效的策略，能直观地理解位置关系，避免出错。'
          },
          {
            id: 'm5u8l4q2',
            type: 'fill',
            question: '一艘船从港口出发，向南偏西30°方向航行300千米到达A岛。港口在A岛的___偏___30°方向300千米处',
            answer: '北偏东',
            hint: '南偏西的反方向',
            explanation: '南偏西30°的反方向是北偏东30°。港口在A岛的北偏东30°方向300千米处。'
          },
          {
            id: 'm5u8l4q3',
            type: 'choice',
            question: '小明从家出发先向东走300米到书店，再向北走400米到学校。学校在小明家的什么方向？',
            options: ['东北方向', '东南方向', '西北方向', '正北方向'],
            answer: '东北方向',
            hint: '东300米+北400米',
            explanation: '向东走300米，再向北走400米，学校在家的东北方向。'
          },
          {
            id: 'm5u8l4q4',
            type: 'fill',
            question: '一架飞机从A城飞往B城，方向是北偏东35°，距离500千米。从B城飞回A城的方向是南偏西___°',
            answer: '35',
            hint: '反方向角度相同',
            explanation: '北偏东35°的反方向是南偏西35°，角度相同，距离相同。'
          },
          {
            id: 'm5u8l4q5',
            type: 'choice',
            question: '台风从A市正南方500千米处，以每小时25千米的速度向北移动。几小时后到达A市？',
            options: ['20小时', '25小时', '10小时', '15小时'],
            answer: '20小时',
            hint: '500÷25=？',
            explanation: '500÷25=20小时。台风在A市正南方，直接向北移动，距离500千米，速度25千米/时，20小时后到达。'
          },
          {
            id: 'm5u8l4q6',
            type: 'fill',
            question: '在一次定向越野中，小红从起点出发，先向北偏东45°跑400米到A点，再向南偏东45°跑400米到B点。B点在起点的正___方向',
            answer: '东',
            hint: '北偏东45°和南偏东45°叠加',
            explanation: '北偏东45°走400米：向北约283米，向东约283米。南偏东45°走400米：向南约283米，向东约283米。南北抵消，向东共约566米。B点在起点正东方向。'
          },
          {
            id: 'm5u8l4q7',
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
        id: 'm5u8l5',
        title: '位置与方向综合检测',
        order: 5,
        teachingMethod: '形成性评价，综合检测位置与方向知识',
        learningObjective: '我能综合检测位置与方向知识',
        successCriteria: '①能确定位置 ②能描述路线',
        iDo: '家长示范综合题，讲解确定位置、描述路线和画图的方法。',
        weDo: '亲子一起做综合练习，互相出题检测。',
        youDo: '孩子独立完成位置与方向综合检测。',
        parentTips: '【家长预习】检测前回顾：确定位置三要素、描述路线图、综合应用。\n共学四步：\n①对话出题：问孩子"位置与方向这一单元你学了哪些内容？"\n②孩子应答：确定位置(观测点、方向、距离)、描述路线图、综合应用\n③答错引导：若孩子说不全，家长帮梳理三个知识点，让孩子每个画一个示意图\n④快速检测：①以学校为观测点描述家在哪里 ②画一条从家到学校的路线图 ③确定位置的三要素是什么？',
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
            id: 'm5u8l5q1',
            type: 'choice',
            question: '以学校为观测点，公园在北偏西40°方向500米处。下面描述正确的是？',
            options: ['从正北向西偏40°', '从正西向北偏40°', '从正东向北偏40°', '从正南向西偏40°'],
            answer: '从正北向西偏40°',
            hint: '北偏西的意思',
            explanation: '北偏西40°表示从正北方向向西偏40°，所以"从正北向西偏40°"是正确的。'
          },
          {
            id: 'm5u8l5q2',
            type: 'fill',
            question: '甲在乙的东偏南30°方向，乙在甲的___偏___30°方向',
            answer: '西偏北',
            hint: '东偏南的反方向',
            explanation: '东偏南30°的反方向是西偏北30°。乙在甲的西偏北30°方向。'
          },
          {
            id: 'm5u8l5q3',
            type: 'choice',
            question: '下面关于方向的描述，正确的是？',
            options: ['北偏东30°=东偏北60°', '北偏东30°=东偏北30°', '北偏东30°=南偏西30°', '北偏东30°=北偏西30°'],
            answer: '北偏东30°=东偏北60°',
            hint: '北和东之间是90°',
            explanation: '北偏东30°表示从北向东偏30°，等于从东向北偏60°（90°-30°=60°），所以北偏东30°=东偏北60°。'
          },
          {
            id: 'm5u8l5q4',
            type: 'fill',
            question: '比例尺1:20000的地图上，A、B两地图上距离5厘米，实际距离是___米',
            answer: '1000',
            hint: '5×20000=100000厘米',
            explanation: '5厘米×20000=100000厘米=1000米。实际距离是1000米。'
          },
          {
            id: 'm5u8l5q5',
            type: 'choice',
            question: '从小明家看学校是北偏东35°方向，从小红家看学校也是北偏东35°方向，且距离相同。小明家和小红家的位置关系是？',
            options: ['可能在同一地点', '一定在同一地点', '一定不在同一地点', '无法判断'],
            answer: '可能在同一地点',
            hint: '方向和距离相同是否意味着观测点相同？',
            explanation: '方向和距离相同，观测点可能在同一地点，也可能不在（比如对称位置），所以"可能在同一地点"。'
          },
          {
            id: 'm5u8l5q6',
            type: 'fill',
            question: '一艘船从A港出发向南偏西25°航行200海里到B港，又从B港向北偏西25°航行200海里到C港。C港在A港的正___方向',
            answer: '西',
            hint: '南偏西25°和北偏西25°叠加',
            explanation: '南偏西25°走200海里：向南约181海里，向西约85海里。北偏西25°走200海里：向北约181海里，向西约85海里。南北抵消，向西共约170海里。C港在A港正西方向。'
          },
          {
            id: 'm5u8l5q7',
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

];
