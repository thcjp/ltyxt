import type { Unit } from '@/types'

export const mathGrade6: Unit[] = [
  {
    id: 'm6u1',
    title: '分数乘法',
    subtitle: '从连加到乘法，掌握分数乘法的意义与计算',
    order: 1,
    lessons: [
        {
          id: 'm6u1l1',
          title: '分数乘整数——意义与计算',
          order: 1,
          teachingMethod: 'CPA·C→P→A，配合连加转化',
          iDo: '家长用2/3×3=2/3+2/3+2/3示范分数乘整数的意义和计算方法。',
          weDo: '亲子一起用连加转化法计算3/5×2，理解分数乘整数的算理。',
          youDo: '孩子独立计算分数乘整数的题目，注意能约分的先约分。',
          parentTips: '共学四步（家长当陪练，不当老师）：①对话出题：家长问“2/5乘3怎么算？”②孩子应答：“分子2乘3得6，分母5不变，得6/5。”③答错引导：若孩子把分母也乘了，家长把一张纸条折成5等份涂2份表示2/5，再摆3组，让孩子数出共6份即6/5，强调“只有分子乘整数”。④快速听写：家长报“3/7乘2、1/4乘8”，孩子口算报数。',
          funElement: '小游戏：分数接力赛——你说算式我报答案！歇后语：九牛一毛——微不足道',
          gsapAnimations: ['[GSAP:timeline|2/3×3转化为连加过程|1.5s|点击播放|power2.out]', '[GSAP:numberCount|分子乘整数分母不变|0.8s|页面加载|back.out(1.7)]'],
          images: ['[IMG:illustration|分数乘整数连加转化图|500x300|教学风|png|转化过程]', '[IMG:illustration|分数乘法示意图|400x250|cartoon|png|分数乘法]'],
          content: [
          { type: 'text', content: '分数乘整数的意义和整数乘法相同，表示几个相同分数的和。', animationType: 'reveal' },
          { type: 'example', content: '2/3 × 3 就是求3个2/3的和：2/3 + 2/3 + 2/3 = 6/3 = 2', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '分数乘整数：a/b × n = (a×n)/b（分母不变，分子乘整数）', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '计算时能约分的先约分，再乘，这样更简便！比如3/8×4，先约分（8和4约得2），再乘：3/2。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '2/3×3转化为连加过程', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '2/3×3转化为连加过程', timelineConfig: { steps: [{ text: '第1步：2/3×3表示3个2/3相加', ttsText: '第1步：2/3×3表示3个2/3相加' }, { text: '第2步：2/3+2/3+2/3', ttsText: '第2步：2/3+2/3+2/3' }, { text: '第3步：分子相加=6/3', ttsText: '第3步：分子相加=6/3' }, { text: '第4步：约分=2', ttsText: '第4步：约分=2' }] }, ttsNarration: '2/3乘3就是3个2/3相加，等于2' } },
          { type: 'text', content: '总结：分数乘整数，用分子乘整数的积作分子，分母不变。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u1l1q1',
            type: 'choice',
            question: '计算 2/5 × 3 = ?',
            options: ['6/5', '6/15', '5/6', '2/15'],
            answer: '6/5',
            hint: '分子乘整数，分母不变',
            explanation: '2/5 × 3 = (2×3)/5 = 6/5'
          },
          {
            id: 'm6u1l1q2',
            type: 'fill',
            question: '计算 3/7 × 2 = ___',
            answer: '6/7',
            hint: '分子乘整数，分母不变',
            explanation: '3/7 × 2 = (3×2)/7 = 6/7'
          },
          {
            id: 'm6u1l1q3',
            type: 'choice',
            question: '1/4 × 8 = ?',
            options: ['2', '8/4', '1/32', '4/8'],
            answer: '2',
            hint: '先约分：8和4约分',
            explanation: '1/4 × 8 = 1×8/4 = 8/4 = 2'
          },
          {
            id: 'm6u1l1q4',
            type: 'fill',
            question: '一袋面粉5/8千克，3袋重___千克',
            answer: '15/8',
            hint: '求3个5/8是多少，用乘法',
            explanation: '5/8 × 3 = 15/8千克'
          },
          {
            id: 'm6u1l1q5',
            type: 'fill',
            question: '【期中真题】2/3 × 9 + 1/2 = ___',
            answer: '13/2',
            hint: '先算乘法，再算加法，注意通分',
            explanation: '2/3 × 9 = 6，6 + 1/2 = 12/2 + 1/2 = 13/2',
            acceptableAnswers: ['6.5', '6又1/2'],
          },
          {
            id: 'm6u1l1q6',
            type: 'fill',
            question: '已知 a × 3/5 = 3/5 + 3/5 + 3/5，则 a = ___',
            answer: '3',
            hint: '分数乘整数的意义是什么？3/5+3/5+3/5等于3/5乘几？',
            explanation: '3/5 + 3/5 + 3/5 = 3/5 × 3，所以 a = 3'
          },
          {
            id: 'm6u1l1q7',
            type: 'fill',
            question: '同分母分数相加：1/5 + 2/5 = ___',
            answer: '3/5',
            hint: '[同分母分数加法]（数学-分数的加减法-第1课）',
            explanation: '同分母分数相加，分母不变，分子相加：1/5 + 2/5 = 3/5'
          },
          ]
        },
        {
          id: 'm6u1l2',
          title: '分数乘分数——面积模型',
          order: 2,
          teachingMethod: 'CPA·P：面积图模型',
          iDo: '家长用长方形面积模型演示1/2×1/3的意义和计算方法。',
          weDo: '亲子一起画长方形面积模型，理解分数乘分数的算理。',
          youDo: '孩子独立计算分数乘分数的题目，注意先约分。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“1/2乘1/3怎么算？”②孩子应答：“分子1乘1得1，分母2乘3得6，结果1/6。”③答错引导：若孩子不会，家长画一个长方形先横分2份涂1份(1/2)，再纵分3份涂1份(1/3)，让孩子数交叉部分占整体的1/6。④快速出题：家长报“2/3乘3/4”，孩子先约分(2和4约、3和3约)再算得1/2。',
          funElement: '小游戏：面积拼图——画出1/2的1/3是多少！谚语：磨刀不误砍柴工——先约分再乘更高效',
          gsapAnimations: ['[GSAP:shapeDraw|长方形面积模型分割|1.5s|点击播放|power2.out]', '[GSAP:highlight|分子乘分子分母乘分母|0.5s|计算完成|power2.out]'],
          images: ['[IMG:illustration|面积模型图|500x300|教学风|png|长方形分割]', '[IMG:illustration|分数乘分数示意图|400x250|cartoon|png|面积模型]'],
          content: [
          { type: 'text', content: '分数乘分数表示求一个分数的几分之几是多少。比如1/2×1/3就是求1/2的1/3是多少。', animationType: 'reveal' },
          { type: 'example', content: '1/2 × 1/3 = 1/6：把长方形先横向分2份取1份（1/2），再纵向分3份取1份（1/3），交叉部分占整体的1/6。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '分数乘分数：a/b × c/d = (a×c)/(b×d)', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '先约分再乘：交叉约分，分子和分母约，计算更简便！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '长方形面积模型演示1/2×1/3', animationType: 'shapeDraw', animationConfig: { sceneType: 'shapeDraw', title: '长方形面积模型演示1/2×1/3', shapeDrawConfig: { shape: 'rectangle', labels: ['1/2（横向取一半）', '1/3（纵向取三分之一）', '1/6（交叉部分）'] }, ttsNarration: '把长方形横分2份纵分3份，交叉部分就是1/6' } },
          { type: 'text', content: '例如：2/3 × 3/4，先约分（2和4约得1/2，3和3约得1），结果=1/2。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u1l2q1',
            type: 'choice',
            question: '1/2 × 1/4 = ?',
            options: ['1/8', '2/4', '1/6', '2/8'],
            answer: '1/8',
            hint: '分子乘分子，分母乘分母',
            explanation: '1/2 × 1/4 = (1×1)/(2×4) = 1/8'
          },
          {
            id: 'm6u1l2q2',
            type: 'fill',
            question: '2/3 × 3/4 = ___',
            answer: '1/2',
            hint: '先约分再乘：2和4约，3和3约',
            explanation: '2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2'
          },
          {
            id: 'm6u1l2q3',
            type: 'choice',
            question: '3/5 × 2/3 = ?',
            options: ['2/5', '6/15', '5/6', '1/5'],
            answer: '2/5',
            hint: '先约分：3和3约',
            explanation: '3/5 × 2/3 = (3×2)/(5×3) = 6/15 = 2/5'
          },
          {
            id: 'm6u1l2q4',
            type: 'fill',
            question: '一块地的1/2种了1/3的玉米，玉米占这块地的___',
            answer: '1/6',
            hint: '求1/2的1/3是多少，用乘法',
            explanation: '1/2 × 1/3 = 1/6'
          },
          {
            id: 'm6u1l2q5',
            type: 'fill',
            question: '【期末真题】5/6 × 3/10 = ___',
            answer: '1/4',
            hint: '交叉约分：5和10约，6和3约',
            explanation: '5/6 × 3/10 = (5×3)/(6×10) = 15/60 = 1/4'
          },
          {
            id: 'm6u1l2q6',
            type: 'fill',
            question: '已知 a/b × b/a = 1（a≠0, b≠0），验证 3/4 × 4/3 = ___',
            answer: '1',
            hint: '分子分母互换的两个分数相乘等于多少？',
            explanation: '3/4 × 4/3 = (3×4)/(4×3) = 12/12 = 1'
          },
          {
            id: 'm6u1l2q7',
            type: 'fill',
            question: '把一根绳子平均分成6段，每段是这根绳子的___（填分数）',
            answer: '1/6',
            hint: '[分数的意义]（五年级数学-第6单元）',
            explanation: '把单位“1”平均分成6份，每份是1/6',
            acceptableAnswers: ['1/6'],
          },
          ]
        },
        {
          id: 'm6u1l3',
          title: '分数乘法的简便运算',
          order: 3,
          teachingMethod: 'Mental Math，先约分再乘',
          iDo: '家长示范先约分再乘的简便运算方法。',
          weDo: '亲子一起练习交叉约分后计算的简便方法。',
          youDo: '孩子独立完成分数乘法简便运算题目。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“3/8乘4，先约分还是先乘？”②孩子应答：“先约分，8和4约成2，再3乘1得3/2。”③答错引导：若孩子直接乘得12/8，家长强调“约分只能分子和分母约，不能分子和分子约”，再让孩子重算。④快速听写：家长报“5/6乘9、7/12乘8”，孩子先约分再报结果。',
          funElement: '速算挑战：看谁先约分算得快！歇后语：磨刀不误砍柴工——先约分再算更省力',
          gsapAnimations: ['[GSAP:timeline|约分到乘法步骤|1.5s|点击播放|power2.out]', '[GSAP:highlight|交叉约分高亮|0.5s|约分完成|power2.out]'],
          images: ['[IMG:illustration|约分乘法步骤图|500x200|教学风|png|步骤标注]', '[IMG:illustration|交叉约分示意图|400x250|cartoon|png|约分过程]'],
          content: [
          { type: 'text', content: '分数乘法的简便运算核心是：先约分，再计算。这样可以让数字变小，计算更简便。', animationType: 'reveal' },
          { type: 'example', content: '3/8 × 4/9：先交叉约分——3和9约得1/3，4和8约得1/2，所以(1×1)/(2×3)=1/6', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '简便运算口诀：先约分，后相乘，分子分母各归各。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '约分时只能分子和分母约，不能分子和分子约、分母和分母约！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '约分到乘法步骤演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '约分到乘法步骤演示', timelineConfig: { steps: [{ text: '第1步：观察3/8×4/9', ttsText: '第1步：观察3/8×4/9' }, { text: '第2步：交叉约分——3和9约（得1/3），4和8约（得1/2）', ttsText: '第2步：交叉约分——3和9约（得1/3），4和8约（得1/2）' }, { text: '第3步：约分后变成1/2×1/3', ttsText: '第3步：约分后变成1/2×1/3' }, { text: '第4步：相乘=1/6', ttsText: '第4步：相乘=1/6' }] }, ttsNarration: '先交叉约分，再相乘，又快又准' } },
          { type: 'text', content: '连乘也可以简便：3/4 × 8/15 × 5/2，同时约分后=1/1×2/5×1/1=1。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u1l3q1',
            type: 'choice',
            question: '2/9 × 3/4 = ?',
            options: ['1/6', '6/36', '1/12', '5/36'],
            answer: '1/6',
            hint: '交叉约分：2和4约，3和9约',
            explanation: '2/9 × 3/4 = (2×3)/(9×4) = 6/36 = 1/6'
          },
          {
            id: 'm6u1l3q2',
            type: 'fill',
            question: '5/7 × 14/25 = ___',
            answer: '2/5',
            hint: '交叉约分：5和25约，7和14约',
            explanation: '5/7 × 14/25 = (5×14)/(7×25) = 70/175 = 2/5'
          },
          {
            id: 'm6u1l3q3',
            type: 'choice',
            question: '7/10 × 5/14 = ?',
            options: ['1/4', '35/140', '1/2', '7/28'],
            answer: '1/4',
            hint: '7和14约，5和10约',
            explanation: '7/10 × 5/14 = (7×5)/(10×14) = 35/140 = 1/4'
          },
          {
            id: 'm6u1l3q4',
            type: 'fill',
            question: '3/4 × 8/15 × 5/2 = ___',
            answer: '1',
            hint: '三个分数连乘，同时约分',
            explanation: '3/4×8/15×5/2 = (3×8×5)/(4×15×2) = 120/120 = 1'
          },
          {
            id: 'm6u1l3q5',
            type: 'fill',
            question: '【期中真题】(2/3 + 1/4) × 12 = ___',
            answer: '11',
            hint: '用分配律：分别乘12再相加',
            explanation: '(2/3)×12 + (1/4)×12 = 8 + 3 = 11'
          },
          {
            id: 'm6u1l3q6',
            type: 'fill',
            question: '用简便方法计算：25 × 4/5 × 1/5 = ___',
            answer: '4',
            hint: '先算25×4/5=20，再算20×1/5=4',
            explanation: '25 × 4/5 = 20，20 × 1/5 = 4'
          },
          {
            id: 'm6u1l3q7',
            type: 'fill',
            question: '异分母分数加法：1/2 + 1/3 = ___',
            answer: '5/6',
            hint: '[异分母分数加减法]（五年级数学-第7单元）',
            explanation: '先通分：1/2=3/6，1/3=2/6，3/6+2/6=5/6'
          },
          ]
        },
        {
          id: 'm6u1l4',
          title: '分数乘法应用题——求一个数的几分之几',
          order: 4,
          teachingMethod: '情境式教学，模拟分蛋糕',
          iDo: '家长模拟分蛋糕场景，示范求一个数的几分之几用乘法。',
          weDo: '亲子一起分析应用题，找单位1，确定分率，列乘法算式。',
          youDo: '孩子独立解决分数乘法应用题。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“一本书120页看了1/4，看了多少页？单位1是谁？”②孩子应答：“单位1是全书120页，120乘1/4得30页。”③答错引导：若孩子找错单位1，家长教口诀“‘的’前面是单位1”——“全书的1/4”中“全书”是单位1，再用乘法。④快速出题：家长说“一袋米20千克吃了3/5”，孩子说出单位1和算式。',
          funElement: '情境游戏：分蛋糕大作战——算算每个人分到多少！谚语：磨刀不误砍柴工——审题找单位1再列式',
          gsapAnimations: ['[GSAP:sceneBuild|分蛋糕场景动画|1.5s|点击播放|power2.out]', '[GSAP:highlight|单位1高亮标注|0.5s|审题|power2.out]'],
          images: ['[IMG:illustration|分数应用题场景|500x300|可爱卡通风|png|分蛋糕]', '[IMG:illustration|单位1标注图|400x250|教学风|png|线段图]'],
          content: [
          { type: 'text', content: '求一个数的几分之几是多少，用乘法计算。关键是找到单位1。', animationType: 'reveal' },
          { type: 'example', content: '一箱苹果24个，吃了1/3，吃了多少个？ 24 × 1/3 = 8（个）。单位1是一箱苹果的总数。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '求一个数的几分之几：单位1 × 分率 = 对应数量', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '找单位1的方法：通常在是、占、比、相当于的前面。的后面是分率。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '分蛋糕场景演示', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: '分蛋糕场景演示', sceneBuildConfig: { elements: [{ text: '一个完整蛋糕', emoji: 'cake', x: 50, y: 30, size: 'lg', animation: 'bounceIn' }, { text: '切1/3', emoji: 'cut', x: 30, y: 60, size: 'md', delay: 0.5, animation: 'slideIn' }, { text: '1/3块', emoji: 'cake', x: 70, y: 60, size: 'md', delay: 1.0, animation: 'bounceIn' }] }, ttsNarration: '一个蛋糕切1/3，就是求蛋糕的1/3是多少' } },
          { type: 'text', content: '解题步骤：1.读题找单位1  2.确定分率  3.列乘法算式  4.计算并检验。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u1l4q1',
            type: 'choice',
            question: '一本书120页，看了1/4，看了多少页？',
            options: ['30页', '40页', '60页', '90页'],
            answer: '30页',
            hint: '单位1是120页，求120的1/4',
            explanation: '120 × 1/4 = 30页'
          },
          {
            id: 'm6u1l4q2',
            type: 'fill',
            question: '一袋大米20千克，用了2/5，用了___千克',
            answer: '8',
            hint: '求20的2/5是多少',
            explanation: '20 × 2/5 = 8千克'
          },
          {
            id: 'm6u1l4q3',
            type: 'choice',
            question: '六一班有45人，其中男生占4/9，男生有多少人？',
            options: ['20人', '25人', '15人', '10人'],
            answer: '20人',
            hint: '求45的4/9',
            explanation: '45 × 4/9 = 20人'
          },
          {
            id: 'm6u1l4q4',
            type: 'fill',
            question: '一根绳子长3/4米，剪去它的1/3，剪去___米',
            answer: '1/4',
            hint: '求3/4的1/3是多少',
            explanation: '3/4 × 1/3 = 1/4米'
          },
          {
            id: 'm6u1l4q5',
            type: 'fill',
            question: '【期末真题】一件衣服原价200元，降价1/5后，降价了多少元？',
            answer: '40',
            hint: '单位1是原价200元，求200的1/5',
            explanation: '200 × 1/5 = 40元'
          },
          {
            id: 'm6u1l4q6',
            type: 'fill',
            question: '仓库有粮食5/6吨，运出它的2/5，运出___吨',
            answer: '1/3',
            hint: '求5/6的2/5是多少',
            explanation: '5/6 × 2/5 = 10/30 = 1/3吨'
          },
          {
            id: 'm6u1l4q7',
            type: 'fill',
            question: '约分：12/18 = ___（填最简分数）',
            answer: '2/3',
            hint: '[约分与最简分数]（五年级数学-第6单元）',
            explanation: '12和18的最大公因数是6，12/18=(12÷6)/(18÷6)=2/3'
          },
          ]
        },
        {
          id: 'm6u1l5',
          title: '分数乘法综合检测',
          order: 5,
          teachingMethod: '形成性评价，20题综合检测',
          iDo: '家长示范综合题的解题思路和方法。',
          weDo: '亲子竞速完成综合练习题。',
          youDo: '孩子独立完成分数乘法综合检测，正确率大于等于85%。',
          parentTips: '综合检测分数乘法意义、计算、简便运算和应用题，正确率大于等于85%。',
          funElement: '通关挑战：全对获得分数乘法达人徽章！歇后语：百尺竿头——更进一步',
          gsapAnimations: ['[GSAP:confetti|通关撒花|2s|正确率大于等于85%|power1.out]', '[GSAP:starFlyIn|达人徽章飞入|1s|通关|back.out(1.7)]'],
          images: ['[IMG:illustration|分数乘法达人徽章|300x300|可爱卡通风|png|金色徽章]', '[IMG:illustration|综合检测场景|500x300|可爱卡通风|png|检测场景]'],
          content: [
          { type: 'text', content: '本单元我们学习了分数乘法的意义、计算方法和应用。', animationType: 'reveal' },
          { type: 'text', content: '分数乘整数：分子乘整数，分母不变。', animationType: 'reveal' },
          { type: 'text', content: '分数乘分数：分子乘分子，分母乘分母。', animationType: 'reveal' },
          { type: 'text', content: '简便运算：先约分再乘，计算更简便。', animationType: 'reveal' },
          { type: 'tip', content: '综合检测时要细心审题，先约分再计算，注意找单位1。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '分数乘法知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '分数乘法知识回顾', timelineConfig: { steps: [{ text: '知识点1：分数乘整数——分子乘整数，分母不变', ttsText: '知识点1：分数乘整数——分子乘整数，分母不变' }, { text: '知识点2：分数乘分数——分子乘分子，分母乘分母', ttsText: '知识点2：分数乘分数——分子乘分子，分母乘分母' }, { text: '知识点3：简便运算——先约分再乘', ttsText: '知识点3：简便运算——先约分再乘' }, { text: '知识点4：应用题——求一个数的几分之几用乘法', ttsText: '知识点4：应用题——求一个数的几分之几用乘法' }] }, ttsNarration: '让我们回顾分数乘法的四个知识点' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u1l5q1',
            type: 'choice',
            question: '3/4 × 8 = ?',
            options: ['6', '8/3', '3/32', '24/4'],
            answer: '6',
            hint: '先约分：4和8约',
            explanation: '3/4 × 8 = 3×8/4 = 24/4 = 6'
          },
          {
            id: 'm6u1l5q2',
            type: 'fill',
            question: '2/5 × 5/6 = ___',
            answer: '1/3',
            hint: '交叉约分：2和6约，5和5约',
            explanation: '2/5 × 5/6 = (2×5)/(5×6) = 10/30 = 1/3'
          },
          {
            id: 'm6u1l5q3',
            type: 'choice',
            question: '5/8 × 4/15 = ?',
            options: ['1/6', '20/120', '1/4', '5/30'],
            answer: '1/6',
            hint: '5和15约，4和8约',
            explanation: '5/8 × 4/15 = (5×4)/(8×15) = 20/120 = 1/6'
          },
          {
            id: 'm6u1l5q4',
            type: 'fill',
            question: '一桶油16千克，用了3/8，用了___千克',
            answer: '6',
            hint: '求16的3/8是多少',
            explanation: '16 × 3/8 = 6千克'
          },
          {
            id: 'm6u1l5q5',
            type: 'fill',
            question: '【期末真题】(3/4 - 1/2) × 8 = ___',
            answer: '2',
            hint: '先算括号内，再乘8',
            explanation: '3/4 - 1/2 = 3/4 - 2/4 = 1/4，1/4 × 8 = 2'
          },
          {
            id: 'm6u1l5q6',
            type: 'fill',
            question: '一条路长3/4千米，已修了它的1/3，还剩___千米没修',
            answer: '1/2',
            hint: '先算修了多少，再用总长减',
            explanation: '已修：3/4×1/3=1/4千米，剩余：3/4-1/4=2/4=1/2千米'
          },
          {
            id: 'm6u1l5q7',
            type: 'fill',
            question: '同分母分数减法：7/9 - 4/9 = ___',
            answer: '1/3',
            hint: '[同分母分数加减法]（五年级数学-第7单元）',
            explanation: '同分母分数相减，分母不变，分子相减：7/9-4/9=3/9=1/3',
            acceptableAnswers: ['3/9'],
          },
          ]
        },
    ]
  },
  {
    id: 'm6u2',
    title: '位置与方向（二）',
    subtitle: '用方向和距离确定位置，描述行走路线',
    order: 2,
    lessons: [
        {
          id: 'm6u2l1',
          title: '方向与距离——确定物体位置',
          order: 1,
          teachingMethod: 'CPA·C→P：地图操作',
          iDo: '家长在地图上标出方向和距离，示范确定物体位置的方法。',
          weDo: '亲子一起在地图上用方向和距离标注位置。',
          youDo: '孩子独立根据方向和距离确定物体的位置。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“怎么在图上确定一个地方的位置？”②孩子应答：“要以观测点为中心，量出方向(角度)和距离两个条件。”③答错引导：若孩子只说方向不说距离，家长用家里两把椅子演示“东偏北30度方向2米处”，强调缺距离就定不了位置。④快速出题：家长报“学校在家的东偏南20度300米”，孩子在纸上画图标注。',
          funElement: '寻宝游戏：根据线索找宝藏——方向+距离！谚语：按图索骥——照着地图找',
          gsapAnimations: ['[GSAP:sceneBuild|地图方向距离标注|1.5s|点击播放|power2.out]', '[GSAP:highlight|方向角度高亮|0.5s|标注|power2.out]'],
          images: ['[IMG:illustration|方向位置图|500x300|教学风|png|地图+方向]', '[IMG:illustration|方向角度示意图|400x250|教学风|png|角度标注]'],
          content: [
          { type: 'text', content: '确定物体的位置需要两个条件：方向（含角度）和距离。', animationType: 'reveal' },
          { type: 'example', content: '学校在小明家东偏北30度方向500米处。观测点是小明家，方向是东偏北30度，距离500米。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '确定位置 = 观测点 + 方向（角度）+ 距离', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '东偏北30度表示从正东方向向北偏30度。方向角一般不超过90度。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '地图方向距离标注演示', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: '地图方向距离标注演示', sceneBuildConfig: { elements: [{ text: '观测点', emoji: 'pushpin', x: 50, y: 50, size: 'md', animation: 'bounceIn' }, { text: '东偏北30度', emoji: 'arrow', x: 75, y: 35, size: 'sm', delay: 0.5, animation: 'fadeIn' }, { text: '500米', emoji: 'ruler', x: 65, y: 45, size: 'sm', delay: 1.0, animation: 'slideIn' }] }, ttsNarration: '以观测点为中心，标方向和距离确定位置' } },
          { type: 'text', content: '注意：方向描述有两种方式，如东偏北30度=北偏东60度，它们表示同一方向。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u2l1q1',
            type: 'choice',
            question: '确定物体位置需要几个条件？',
            options: ['1个', '2个', '3个', '4个'],
            answer: '2个',
            hint: '想想需要什么信息才能确定位置',
            explanation: '确定位置需要方向（角度）和距离两个条件'
          },
          {
            id: 'm6u2l1q2',
            type: 'fill',
            question: '学校在小明家东偏北___度方向500米处（从正东向北偏30度）',
            answer: '30',
            hint: '东偏北表示从正东向北偏',
            explanation: '从正东方向向北偏30度，所以是东偏北30度'
          },
          {
            id: 'm6u2l1q3',
            type: 'choice',
            question: '北偏东60度和哪个方向相同？',
            options: ['东偏北30度', '东偏北60度', '北偏东30度', '西偏北60度'],
            answer: '东偏北30度',
            hint: '东偏北角度+北偏东角度=90度',
            explanation: '北偏东60度 = 东偏北(90-60)=东偏北30度'
          },
          {
            id: 'm6u2l1q4',
            type: 'fill',
            question: '书店在学校的西偏南45度方向300米处，书店在学校的___偏___45度方向',
            answer: '南偏西45',
            hint: '西偏南45度=南偏西多少度？',
            explanation: '西偏南45度 = 南偏西(90-45) = 南偏西45度'
          },
          {
            id: 'm6u2l1q5',
            type: 'fill',
            question: '【期中真题】A在B的东偏北40度方向600米处，B在A的___方向',
            answer: '西偏南40度',
            hint: '方向具有相对性，相反方向角度相同',
            explanation: 'A在B东偏北40度，则B在A西偏南40度方向'
          },
          {
            id: 'm6u2l1q6',
            type: 'fill',
            question: '甲在乙的北偏东30度方向400米处，甲在乙的东偏北___度方向',
            answer: '60',
            hint: '北偏东30度=东偏北(90-30)=东偏北60度',
            explanation: '北偏东30度 = 东偏北60度'
          },
          {
            id: 'm6u2l1q7',
            type: 'fill',
            question: '在地图上，上通常表示___方',
            answer: '北',
            hint: '[地图方向]（数学-位置与方向-第1课）',
            explanation: '地图上通常上北下南左西右东'
          },
          ]
        },
        {
          id: 'm6u2l2',
          title: '描述简单路线图',
          order: 2,
          teachingMethod: '情境式教学',
          iDo: '家长示范描述从A到B的路线，包括方向和距离。',
          weDo: '亲子一起描述从家到学校的路线。',
          youDo: '孩子独立描述简单的路线图。',
          parentTips: '描述路线：从起点出发，沿什么方向走多远，到达哪里，再转向。',
          funElement: '导航游戏：我来当导航员——描述回家的路线！谚语：条条大路通罗马——路线有多种',
          gsapAnimations: ['[GSAP:timeline|路线逐步绘制|1.5s|点击播放|power2.out]', '[GSAP:highlight|路线段高亮|0.5s|点击|power2.out]'],
          images: ['[IMG:illustration|路线图|500x300|教学风|png|路线+标注]', '[IMG:illustration|路线描述示意图|400x250|cartoon|png|行走路线]'],
          content: [
          { type: 'text', content: '描述路线图时，要按行走顺序，依次说明每一段的方向和距离。', animationType: 'reveal' },
          { type: 'example', content: '从家出发，向东走200米到超市，再向北偏东30度走300米到学校。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '路线描述 = 起点 + 方向1 + 距离1 + 中途经点 + 方向2 + 距离2 + 终点', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '每段路线都要说清楚：从哪里出发、往什么方向走、走多远、到达哪里。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '路线逐步绘制演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '路线逐步绘制演示', timelineConfig: { steps: [{ text: '第1段：从家向东走200米到超市', ttsText: '第1段：从家向东走200米到超市' }, { text: '第2段：从超市向北偏东30度走300米到学校', ttsText: '第2段：从超市向北偏东30度走300米到学校' }, { text: '第3段：到达终点——学校', ttsText: '第3段：到达终点——学校' }] }, ttsNarration: '按照行走顺序描述每段方向和距离' } },
          { type: 'text', content: '描述路线时要注意：1.确定观测点  2.标明方向和距离  3.按顺序描述每一段。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u2l2q1',
            type: 'choice',
            question: '描述路线时，每段需要说明什么？',
            options: ['方向和距离', '只有方向', '只有距离', '时间'],
            answer: '方向和距离',
            hint: '确定位置需要方向和距离',
            explanation: '每段路线都要说明方向（角度）和距离'
          },
          {
            id: 'm6u2l2q2',
            type: 'fill',
            question: '从家向东走200米到超市，再向___走300米到学校（学校在超市正北方）',
            answer: '北',
            hint: '学校在超市正北方，所以向北走',
            explanation: '学校在超市正北方，所以向北走300米'
          },
          {
            id: 'm6u2l2q3',
            type: 'choice',
            question: '从A到B的路线：先向东走100米，再向北偏东45度走200米。共几段？',
            options: ['1段', '2段', '3段', '4段'],
            answer: '2段',
            hint: '数一数路线描述中有几段',
            explanation: '先向东走100米（第1段），再向北偏东45度走200米（第2段），共2段'
          },
          {
            id: 'm6u2l2q4',
            type: 'fill',
            question: '小明从家出发向西走300米到图书馆，图书馆在小明家的___方向',
            answer: '西',
            hint: '向西走就是西方',
            explanation: '向西走300米，图书馆在西面300米处'
          },
          {
            id: 'm6u2l2q5',
            type: 'fill',
            question: '【期末真题】从学校出发向东偏南30度走400米到公园，再向正南走200米到超市。公园在学校的___偏___30度方向',
            answer: '东南',
            hint: '东偏南30度也就是什么方向？',
            explanation: '东偏南30度方向，即东南方向偏南30度'
          },
          {
            id: 'm6u2l2q6',
            type: 'fill',
            question: '路线A-B-C：A到B向东走200米，B到C向北走150米。从A到C总路程___米',
            answer: '350',
            hint: '总路程=各段路程之和',
            explanation: '200 + 150 = 350米'
          },
          {
            id: 'm6u2l2q7',
            type: 'fill',
            question: '小红家在学校东面300米，学校在小红家的___面300米',
            answer: '西',
            hint: '[方向的相对性]（五年级数学-第8单元）',
            explanation: '方向的相对性：东与西相对，距离不变，所以学校在小红家西面300米',
          },
          ]
        },
        {
          id: 'm6u2l3',
          title: '方向的相对性',
          order: 3,
          teachingMethod: '探究式教学',
          iDo: '家长示范A看B和B看A方向相反的规律。',
          weDo: '亲子一起探究方向的相对性。',
          youDo: '孩子独立判断相对方向。',
          parentTips: '方向的相对性：A在B的东面，则B在A的西面；方向相反，角度相同。',
          funElement: '方向反转游戏：我说东你说西！谚语：换位思考——方向也相反',
          gsapAnimations: ['[GSAP:compare|相对方向对比|0.8s|页面加载|power2.out]', '[GSAP:highlight|相反方向标注|0.5s|对比|power2.out]'],
          images: ['[IMG:illustration|相对方向图|500x300|教学风|png|东西对比]', '[IMG:illustration|方向相对性示意图|400x250|教学风|png|相反方向]'],
          content: [
          { type: 'text', content: '方向具有相对性：如果A在B的某个方向，那么B在A的相反方向。', animationType: 'reveal' },
          { type: 'example', content: 'A在B的东偏北30度方向，则B在A的西偏南30度方向。东↔西，北↔南，角度不变。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '相对方向规律：东↔西，南↔北，东偏北↔西偏南，东偏南↔西偏北，角度相同。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '判断相对方向：把方向词中的东换成西、南换成北（或反之），角度不变。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '相对方向对比', animationType: 'compare', animationConfig: { sceneType: 'compare', title: '相对方向对比', compareConfig: { leftItems: ['A在B东偏北30度'], rightItems: ['B在A西偏南30度'], result: 'equal', resultText: '方向相反，角度相同！' }, ttsNarration: 'A在B东偏北30度，B就在A西偏南30度' } },
          { type: 'text', content: '练习：甲在乙的北偏东40度方向，则乙在甲的南偏西40度方向。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u2l3q1',
            type: 'choice',
            question: 'A在B的东面，B在A的哪个方向？',
            options: ['东面', '西面', '南面', '北面'],
            answer: '西面',
            hint: '东的相反方向是？',
            explanation: '东的相反方向是西，所以B在A的西面'
          },
          {
            id: 'm6u2l3q2',
            type: 'fill',
            question: 'A在B的东偏北30度方向，B在A的___偏___30度方向',
            answer: '西南',
            hint: '东↔西，北↔南',
            explanation: '东偏北30度的相对方向是西偏南30度'
          },
          {
            id: 'm6u2l3q3',
            type: 'choice',
            question: '甲在乙的北偏东40度方向，乙在甲的哪个方向？',
            options: ['北偏东40度', '南偏西40度', '南偏东40度', '北偏西40度'],
            answer: '南偏西40度',
            hint: '北↔南，东↔西，角度不变',
            explanation: '北偏东40度的相对方向是南偏西40度'
          },
          {
            id: 'm6u2l3q4',
            type: 'fill',
            question: '学校在公园的西偏南25度方向，公园在学校的___偏___25度方向',
            answer: '东北',
            hint: '西↔东，南↔北',
            explanation: '西偏南25度的相对方向是东偏北25度'
          },
          {
            id: 'm6u2l3q5',
            type: 'fill',
            question: '【期中真题】A在B的东偏南35度方向600米处，B在A的___偏___35度方向600米处',
            answer: '西北',
            hint: '东↔西，南↔北，距离不变',
            explanation: '东偏南35度的相对方向是西偏北35度，距离不变'
          },
          {
            id: 'm6u2l3q6',
            type: 'fill',
            question: '甲在乙的南偏西20度方向，乙在甲的___偏___20度方向',
            answer: '东北',
            hint: '南↔北，西↔东',
            explanation: '南偏西20度的相对方向是北偏东20度'
          },
          {
            id: 'm6u2l3q7',
            type: 'fill',
            question: '量角器上，60度的角属于___角（填“锐”“直”或“钝”）',
            answer: '锐',
            hint: '[角的度量与分类]（四年级数学-第2单元）',
            explanation: '小于90度的角是锐角，60°<90°，所以是锐角'
          },
          ]
        },
        {
          id: 'm6u2l4',
          title: '路线图综合应用——出行规划',
          order: 4,
          teachingMethod: '情境式教学',
          iDo: '家长模拟出行规划，示范用方向和距离描述完整路线。',
          weDo: '亲子一起规划周末出行路线。',
          youDo: '孩子独立规划从家到目的地的路线。',
          parentTips: '出行规划：确定起点、途经点、终点，用方向和距离描述每段路线。',
          funElement: '出行规划师：设计一条周末出游路线！谚语：凡事预则立——出行先规划',
          gsapAnimations: ['[GSAP:timeline|出行路线规划|1.5s|点击播放|power2.out]', '[GSAP:sceneBuild|地图场景构建|1s|页面加载|power2.out]'],
          images: ['[IMG:illustration|出行规划图|500x300|可爱卡通风|png|地图+路线]', '[IMG:illustration|路线规划示意图|400x250|教学风|png|多段路线]'],
          content: [
          { type: 'text', content: '出行规划需要确定起点、途经点和终点，用方向和距离描述每段路线。', animationType: 'reveal' },
          { type: 'example', content: '从家出发，向东偏北30度走400米到公交站，乘公交到公园南门，再向北走200米到公园。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '出行路线 = 起点 + 第1段(方向+距离) + 途经点 + 第2段(方向+距离) + 终点', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '规划路线时要注意：1.确定观测点  2.标明方向和距离  3.考虑实际路况。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '出行路线规划演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '出行路线规划演示', timelineConfig: { steps: [{ text: '第1段：从家向东偏北30度走400米到公交站', ttsText: '第1段：从家向东偏北30度走400米到公交站' }, { text: '第2段：从公交站向正东走600米到超市', ttsText: '第2段：从公交站向正东走600米到超市' }, { text: '第3段：从超市向南偏西45度走300米到公园', ttsText: '第3段：从超市向南偏西45度走300米到公园' }] }, ttsNarration: '按照出行顺序规划每段路线' } },
          { type: 'text', content: '综合应用：结合方向的相对性，可以描述往返路线。去时东偏北，回来时西偏南。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u2l4q1',
            type: 'choice',
            question: '规划出行路线时，首先要确定什么？',
            options: ['起点和终点', '交通工具', '出发时间', '天气'],
            answer: '起点和终点',
            hint: '路线规划的第一步',
            explanation: '首先要确定起点和终点，再规划途经路线'
          },
          {
            id: 'm6u2l4q2',
            type: 'fill',
            question: '从家向东走300米到学校，回来时从学校向___走300米到家',
            answer: '西',
            hint: '去的方向是东，回来方向相反',
            explanation: '去时向东，回来向西'
          },
          {
            id: 'm6u2l4q3',
            type: 'choice',
            question: '从A到B东偏北30度走400米，从B回A应怎么走？',
            options: ['西偏南30度走400米', '东偏北30度走400米', '西偏北30度走400米', '东偏南30度走400米'],
            answer: '西偏南30度走400米',
            hint: '回去方向相反，角度距离不变',
            explanation: '东偏北30度的相对方向是西偏南30度，距离不变400米'
          },
          {
            id: 'm6u2l4q4',
            type: 'fill',
            question: '路线：家→超市(东200米)→学校(北300米)。从家到学校总路程___米',
            answer: '500',
            hint: '总路程=各段之和',
            explanation: '200 + 300 = 500米'
          },
          {
            id: 'm6u2l4q5',
            type: 'fill',
            question: '【期末真题】去时从A向东偏南40度走500米到B，回来时从B向___偏___40度走500米到A',
            answer: '西北',
            hint: '相对方向：东↔西，南↔北',
            explanation: '东偏南40度的相对方向是西偏北40度'
          },
          {
            id: 'm6u2l4q6',
            type: 'fill',
            question: '三段路线分别走200米、300米、100米，总路程___米',
            answer: '600',
            hint: '总路程=各段之和',
            explanation: '200 + 300 + 100 = 600米'
          },
          {
            id: 'm6u2l4q7',
            type: 'fill',
            question: '在地图上，“上北下南”的左边是___方',
            answer: '西',
            hint: '[地图上的方向]（五年级数学-第8单元）',
            explanation: '地图上通常“上北下南，左西右东”，左边是西方'
          },
          ]
        },
        {
          id: 'm6u2l5',
          title: '位置方向综合检测',
          order: 5,
          teachingMethod: '形成性评价',
          iDo: '家长示范综合题的解题方法。',
          weDo: '亲子一起练习综合题。',
          youDo: '孩子独立完成位置与方向综合检测，正确率大于等于80%。',
          parentTips: '综合检测确定位置、描述路线和方向的相对性，正确率大于等于80%。',
          funElement: '通关挑战：全对获得方向达人徽章！谚语：方向对了，不怕路远',
          gsapAnimations: ['[GSAP:starFlyIn|方向达人徽章|1s|通关|back.out(1.7)]', '[GSAP:confetti|通关撒花|2s|正确率大于等于80%|power1.out]'],
          images: ['[IMG:illustration|方向达人徽章|300x300|可爱卡通风|png|金色徽章]', '[IMG:illustration|综合检测场景|500x300|可爱卡通风|png|地图检测]'],
          content: [
          { type: 'text', content: '本单元我们学习了用方向和距离确定位置、描述路线和方向的相对性。', animationType: 'reveal' },
          { type: 'text', content: '确定位置需要方向（角度）和距离两个条件。', animationType: 'reveal' },
          { type: 'text', content: '描述路线要按顺序说明每段的方向和距离。', animationType: 'reveal' },
          { type: 'text', content: '方向的相对性：方向相反，角度相同。', animationType: 'reveal' },
          { type: 'tip', content: '综合检测时注意：方向描述要准确，角度和距离不要遗漏。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '位置与方向知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '位置与方向知识回顾', timelineConfig: { steps: [{ text: '知识点1：确定位置——方向+距离', ttsText: '知识点1：确定位置——方向+距离' }, { text: '知识点2：描述路线——按顺序描述每段', ttsText: '知识点2：描述路线——按顺序描述每段' }, { text: '知识点3：方向相对性——方向相反，角度相同', ttsText: '知识点3：方向相对性——方向相反，角度相同' }] }, ttsNarration: '回顾位置与方向的三个知识点' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u2l5q1',
            type: 'choice',
            question: '确定物体位置需要什么条件？',
            options: ['方向和距离', '只有方向', '只有距离', '时间和速度'],
            answer: '方向和距离',
            hint: '确定位置的两个条件',
            explanation: '确定位置需要方向（角度）和距离两个条件'
          },
          {
            id: 'm6u2l5q2',
            type: 'fill',
            question: 'A在B的东偏北40度方向，B在A的___偏___40度方向',
            answer: '西南',
            hint: '相对方向：东↔西，北↔南',
            explanation: '东偏北40度的相对方向是西偏南40度'
          },
          {
            id: 'm6u2l5q3',
            type: 'choice',
            question: '北偏东50度等于哪个方向？',
            options: ['东偏北40度', '东偏北50度', '北偏东40度', '西偏北50度'],
            answer: '东偏北40度',
            hint: '北偏东角度+东偏北角度=90度',
            explanation: '北偏东50度 = 东偏北(90-50) = 东偏北40度'
          },
          {
            id: 'm6u2l5q4',
            type: 'fill',
            question: '从家向东走300米再到向北走200米到学校，总路程___米',
            answer: '500',
            hint: '总路程=各段之和',
            explanation: '300 + 200 = 500米'
          },
          {
            id: 'm6u2l5q5',
            type: 'fill',
            question: '【期末真题】甲在乙的南偏西30度方向400米处，乙在甲的___偏___30度方向400米处',
            answer: '东北',
            hint: '南↔北，西↔东',
            explanation: '南偏西30度的相对方向是北偏东30度'
          },
          {
            id: 'm6u2l5q6',
            type: 'fill',
            question: '从A到B有3段路：150米、250米、100米，往返总路程___米',
            answer: '1000',
            hint: '往返=去程+回程，去程=各段之和',
            explanation: '去程：150+250+100=500米，往返：500×2=1000米'
          },
          {
            id: 'm6u2l5q7',
            type: 'fill',
            question: '一个平角等于___度',
            answer: '180',
            hint: '[角的度量]（四年级数学-第2单元）',
            explanation: '平角=180度'
          },
          ]
        },
    ]
  },
  {
    id: 'm6u3',
    title: '分数除法',
    subtitle: '从倒数到除法，掌握分数除法的计算与应用',
    order: 3,
    lessons: [
        {
          id: 'm6u3l1',
          title: '分数除以整数',
          order: 1,
          teachingMethod: 'CPA·P→A，除法转化乘法',
          iDo: '家长示范4/5÷2=4/5×1/2，讲解分数除以整数的计算方法。',
          weDo: '亲子一起练习分数除以整数，理解除以一个数等于乘以它的倒数。',
          youDo: '孩子独立计算分数除以整数的题目。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“4/5除以2怎么算？”②孩子应答：“除以2等于乘2的倒数1/2，4/5乘1/2得2/5。”③答错引导：若孩子直接除分子得2/5却说不清算理，家长强调“除以一个数(0除外)=乘它的倒数”，即4/5÷2=4/5×1/2=2/5。④快速听写：家长报“6/7除以3、3/4除以2”，孩子先变乘倒数再算。',
          funElement: '倒数翻转游戏：我说分数你说倒数！歇后语：反其道而行之——除变乘',
          gsapAnimations: ['[GSAP:timeline|除法转化为乘法过程|1.5s|点击播放|power2.out]', '[GSAP:highlight|倒数高亮标注|0.5s|转化|power2.out]'],
          images: ['[IMG:illustration|分数除法转化图|500x200|教学风|png|除到乘]', '[IMG:illustration|倒数示意图|400x250|cartoon|png|分子分母互换]'],
          content: [
          { type: 'text', content: '分数除以整数（0除外），等于分数乘以这个整数的倒数。', animationType: 'reveal' },
          { type: 'example', content: '4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5。除以2变成乘以1/2。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '分数除以整数：a/b ÷ n = a/b × 1/n（n≠0）', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '倒数：把分数的分子和分母交换位置。如3/4的倒数是4/3。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '除法转化为乘法演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '除法转化为乘法演示', timelineConfig: { steps: [{ text: '第1步：4/5÷2', ttsText: '第1步：4/5÷2' }, { text: '第2步：除以2=乘以2的倒数1/2', ttsText: '第2步：除以2=乘以2的倒数1/2' }, { text: '第3步：4/5×1/2', ttsText: '第3步：4/5×1/2' }, { text: '第4步：=4/10=2/5', ttsText: '第4步：=4/10=2/5' }] }, ttsNarration: '除以一个数等于乘以它的倒数' } },
          { type: 'text', content: '注意：0没有倒数，所以除数不能为0。1的倒数是1。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u3l1q1',
            type: 'choice',
            question: '4/5 ÷ 2 = ?',
            options: ['2/5', '4/10', '8/5', '4/3'],
            answer: '2/5',
            hint: '除以2=乘以1/2',
            explanation: '4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5'
          },
          {
            id: 'm6u3l1q2',
            type: 'fill',
            question: '6/7 ÷ 3 = ___',
            answer: '2/7',
            hint: '除以3=乘以1/3',
            explanation: '6/7 ÷ 3 = 6/7 × 1/3 = 6/21 = 2/7'
          },
          {
            id: 'm6u3l1q3',
            type: 'choice',
            question: '3/4的倒数是？',
            options: ['4/3', '3/4', '1/4', '4/1'],
            answer: '4/3',
            hint: '倒数=分子分母互换',
            explanation: '3/4的倒数是4/3'
          },
          {
            id: 'm6u3l1q4',
            type: 'fill',
            question: '8/9 ÷ 4 = ___',
            answer: '2/9',
            hint: '除以4=乘以1/4',
            explanation: '8/9 ÷ 4 = 8/9 × 1/4 = 8/36 = 2/9'
          },
          {
            id: 'm6u3l1q5',
            type: 'fill',
            question: '【期中真题】5/6 ÷ 5 + 1/3 = ___',
            answer: '1/2',
            hint: '先算除法，再算加法',
            explanation: '5/6 ÷ 5 = 1/6，1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2'
          },
          {
            id: 'm6u3l1q6',
            type: 'fill',
            question: '一个数除以3等于2/7，这个数是___',
            answer: '6/7',
            hint: '逆运算：2/7×3=?',
            explanation: '2/7 × 3 = 6/7，所以这个数是6/7'
          },
          {
            id: 'm6u3l1q7',
            type: 'fill',
            question: '分数乘整数：3/5 × 4 = ___',
            answer: '12/5',
            hint: '[分数乘整数]（数学-分数乘法-第1课）',
            explanation: '3/5 × 4 = 12/5',
            acceptableAnswers: ['2.4', '2又2/5'],
          },
          ]
        },
        {
          id: 'm6u3l2',
          title: '一个数除以分数',
          order: 2,
          teachingMethod: '支架式教学',
          iDo: '家长示范整数除以分数和小数除以分数的计算方法。',
          weDo: '亲子一起练习一个数除以分数。',
          youDo: '孩子独立计算一个数除以分数的题目。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“6除以2/3怎么算？”②孩子应答：“除以2/3等于乘3/2，6乘3/2得9。”③答错引导：若孩子把被除数和除数都颠倒，家长强调“只颠倒除数变倒数，被除数不变”，再练一遍8÷2/5。④快速出题：家长报“3÷1/4、10÷2/5”，孩子口答“乘它的倒数”并算出结果。',
          funElement: '倒数挑战赛：看谁算得又快又准！谚语：以退为进——除变乘，倒数来帮忙',
          gsapAnimations: ['[GSAP:timeline|倒数转化动画|1.5s|点击播放|power2.inOut]', '[GSAP:highlight|倒数翻转高亮|0.5s|转化|power2.out]'],
          images: ['[IMG:illustration|除以分数转化图|500x200|教学风|png|倒数过程]', '[IMG:illustration|分数除法示意图|400x250|cartoon|png|除法转化]'],
          content: [
          { type: 'text', content: '一个数除以分数，等于这个数乘以分数的倒数。', animationType: 'reveal' },
          { type: 'example', content: '6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9。整数除以分数，先化成分数再乘倒数。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '一个数除以分数：a ÷ b/c = a × c/b（b≠0）', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '无论是分数除以整数、整数除以分数还是分数除以分数，都是乘以除数的倒数。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '倒数转化动画演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '倒数转化动画演示', timelineConfig: { steps: [{ text: '第1步：6÷2/3', ttsText: '第1步：6÷2/3' }, { text: '第2步：除以2/3=乘以2/3的倒数3/2', ttsText: '第2步：除以2/3=乘以2/3的倒数3/2' }, { text: '第3步：6×3/2', ttsText: '第3步：6×3/2' }, { text: '第4步：=18/2=9', ttsText: '第4步：=18/2=9' }] }, ttsNarration: '除以分数等于乘以分数的倒数' } },
          { type: 'text', content: '统一法则：甲÷乙=甲×乙的倒数（乙≠0）。这就是分数除法的万能法则。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u3l2q1',
            type: 'choice',
            question: '6 ÷ 2/3 = ?',
            options: ['9', '4', '12/3', '6/2'],
            answer: '9',
            hint: '除以2/3=乘以3/2',
            explanation: '6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9'
          },
          {
            id: 'm6u3l2q2',
            type: 'fill',
            question: '3/4 ÷ 1/2 = ___',
            answer: '3/2',
            hint: '除以1/2=乘以2/1',
            explanation: '3/4 ÷ 1/2 = 3/4 × 2 = 6/4 = 3/2',
            acceptableAnswers: ['1.5', '1又1/2'],
          },
          {
            id: 'm6u3l2q3',
            type: 'choice',
            question: '2/3 ÷ 4/5 = ?',
            options: ['5/6', '8/15', '10/12', '2/5'],
            answer: '5/6',
            hint: '除以4/5=乘以5/4',
            explanation: '2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6'
          },
          {
            id: 'm6u3l2q4',
            type: 'fill',
            question: '12 ÷ 3/4 = ___',
            answer: '16',
            hint: '除以3/4=乘以4/3',
            explanation: '12 ÷ 3/4 = 12 × 4/3 = 48/3 = 16'
          },
          {
            id: 'm6u3l2q5',
            type: 'fill',
            question: '【期末真题】5/8 ÷ 5/4 + 1/2 = ___',
            answer: '1',
            hint: '先算除法，再算加法',
            explanation: '5/8 ÷ 5/4 = 5/8 × 4/5 = 20/40 = 1/2，1/2 + 1/2 = 1'
          },
          {
            id: 'm6u3l2q6',
            type: 'fill',
            question: '一个数除以2/5等于10，这个数是___',
            answer: '4',
            hint: '逆运算：10×2/5=?',
            explanation: '10 × 2/5 = 20/5 = 4，所以这个数是4'
          },
          {
            id: 'm6u3l2q7',
            type: 'fill',
            question: '异分母分数减法：3/4 - 1/6 = ___',
            answer: '7/12',
            hint: '[异分母分数加减法]（五年级数学-第7单元）',
            explanation: '先通分：3/4=9/12，1/6=2/12，9/12-2/12=7/12'
          },
          ]
        },
        {
          id: 'm6u3l3',
          title: '分数除法应用题——已知一个数的几分之几',
          order: 3,
          teachingMethod: '情境式教学',
          iDo: '家长示范逆向应用题的解法：已知一个数的几分之几是多少，求这个数。',
          weDo: '亲子一起分析逆向应用题，列方程或用除法求解。',
          youDo: '孩子独立解决分数除法逆向应用题。',
          parentTips: '已知一个数的几分之几是多少，求这个数=用除法（或列方程）。',
          funElement: '侦探游戏：已知部分求整体——当数学小侦探！谚语：顺藤摸瓜——从已知推未知',
          gsapAnimations: ['[GSAP:timeline|逆向应用题步骤|1.5s|点击播放|power2.out]', '[GSAP:highlight|单位1高亮|0.5s|审题|power2.out]'],
          images: ['[IMG:illustration|逆向应用题图|500x300|教学风|png|线段图]', '[IMG:illustration|分数除法应用题|400x250|cartoon|png|已知部分求整体]'],
          content: [
          { type: 'text', content: '已知一个数的几分之几是多少，求这个数，用除法计算。', animationType: 'reveal' },
          { type: 'example', content: '一本书看了1/3正好30页，这本书共多少页？ 30 ÷ 1/3 = 30 × 3 = 90页。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '已知部分求整体：整体 = 部分 ÷ 对应分率', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '也可以列方程：设整体为x，则x×分率=部分，解方程求x。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '逆向应用题解题步骤', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '逆向应用题解题步骤', timelineConfig: { steps: [{ text: '第1步：找单位1——这本书的总页数（未知）', ttsText: '第1步：找单位1——这本书的总页数（未知）' }, { text: '第2步：找已知量和对应分率——30页对应1/3', ttsText: '第2步：找已知量和对应分率——30页对应1/3' }, { text: '第3步：列式——30÷1/3', ttsText: '第3步：列式——30÷1/3' }, { text: '第4步：计算——30×3=90页', ttsText: '第4步：计算——30×3=90页' }] }, ttsNarration: '已知一个数的几分之几是多少，求这个数用除法' } },
          { type: 'text', content: '区分乘除法：求一个数的几分之几用乘法；已知一个数的几分之几求原数用除法。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u3l3q1',
            type: 'choice',
            question: '一本书看了1/3正好30页，这本书共多少页？',
            options: ['60页', '90页', '10页', '120页'],
            answer: '90页',
            hint: '已知30页是1/3，求总数用除法',
            explanation: '30 ÷ 1/3 = 30 × 3 = 90页'
          },
          {
            id: 'm6u3l3q2',
            type: 'fill',
            question: '一个数的3/4是15，这个数是___',
            answer: '20',
            hint: '已知15是3/4，求原数用除法',
            explanation: '15 ÷ 3/4 = 15 × 4/3 = 60/3 = 20'
          },
          {
            id: 'm6u3l3q3',
            type: 'choice',
            question: '一桶油用去了2/5，正好用了8千克，这桶油原有多少千克？',
            options: ['16千克', '20千克', '12千克', '10千克'],
            answer: '20千克',
            hint: '8千克对应2/5，求总量用除法',
            explanation: '8 ÷ 2/5 = 8 × 5/2 = 40/2 = 20千克'
          },
          {
            id: 'm6u3l3q4',
            type: 'fill',
            question: '小红身高是小明的5/6，小红150厘米，小明___厘米',
            answer: '180',
            hint: '150是小明的5/6，求小明用除法',
            explanation: '150 ÷ 5/6 = 150 × 6/5 = 900/5 = 180厘米'
          },
          {
            id: 'm6u3l3q5',
            type: 'fill',
            question: '【期末真题】一桶水用去1/4后还剩12升，这桶水原有___升',
            answer: '16',
            hint: '12升对应(1-1/4)=3/4',
            explanation: '12 ÷ (1-1/4) = 12 ÷ 3/4 = 12 × 4/3 = 16升'
          },
          {
            id: 'm6u3l3q6',
            type: 'fill',
            question: '某班男生占3/5，男生有18人，全班___人',
            answer: '30',
            hint: '18人对应3/5，求总数用除法',
            explanation: '18 ÷ 3/5 = 18 × 5/3 = 90/3 = 30人'
          },
          {
            id: 'm6u3l3q7',
            type: 'fill',
            question: '2/5的分数单位是___（填分数）',
            answer: '1/5',
            hint: '[分数的意义]（五年级数学-第6单元）',
            explanation: '2/5表示2个1/5，所以它的分数单位是1/5'
          },
          ]
        },
        {
          id: 'm6u3l4',
          title: '分数除法——工程问题',
          order: 4,
          teachingMethod: '情境式教学',
          iDo: '家长模拟工程问题，示范用分数除法解决工程问题。',
          weDo: '亲子一起解决工程问题，理解工作总量、工作效率和工作时间的关系。',
          youDo: '孩子独立解决分数工程问题。',
          parentTips: '工程问题：工作总量÷工作效率=工作时间。通常把工作总量看作1。',
          funElement: '工程师游戏：计算修路要几天！谚语：众人拾柴火焰高——合作效率高',
          gsapAnimations: ['[GSAP:sceneBuild|工程场景动画|1.5s|点击播放|power2.out]', '[GSAP:timeline|工程问题步骤|1.5s|点击播放|power2.out]'],
          images: ['[IMG:illustration|工程问题场景|500x300|可爱卡通风|png|施工场景]', '[IMG:illustration|工程问题示意图|400x250|教学风|png|工作效率]'],
          content: [
          { type: 'text', content: '工程问题中，通常把工作总量看作1，工作效率用分数表示。', animationType: 'reveal' },
          { type: 'example', content: '修一条路，甲队单独修10天完成，每天修1/10。甲乙合作几天完成？', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '工程问题：工作总量÷工作效率=工作时间（总量通常设为1）', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '工作效率=1/工作时间。合作效率=各队效率之和。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '工程问题场景演示', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: '工程问题场景演示', sceneBuildConfig: { elements: [{ text: '工作总量=1', emoji: 'road', x: 50, y: 20, size: 'lg', animation: 'bounceIn' }, { text: '甲效率=1/10', emoji: 'hammer', x: 25, y: 50, size: 'md', delay: 0.5, animation: 'slideIn' }, { text: '乙效率=1/15', emoji: 'wrench', x: 75, y: 50, size: 'md', delay: 1.0, animation: 'slideIn' }, { text: '合作效率=1/10+1/15', emoji: 'handshake', x: 50, y: 75, size: 'md', delay: 1.5, animation: 'bounceIn' }] }, ttsNarration: '工作总量设为1，效率=1/时间，合作效率=各队效率之和' } },
          { type: 'text', content: '解题步骤：1.设总量为1  2.求各队效率  3.求合作效率  4.1÷合作效率=合作时间。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u3l4q1',
            type: 'choice',
            question: '一项工程甲单独做6天完成，甲的工作效率是？',
            options: ['1/6', '6', '1/6天', '6/1'],
            answer: '1/6',
            hint: '工作效率=1/工作时间',
            explanation: '工作总量设为1，甲6天完成，效率=1/6'
          },
          {
            id: 'm6u3l4q2',
            type: 'fill',
            question: '甲单独做10天完成，乙单独做15天完成，合作___天完成',
            answer: '6',
            hint: '合作效率=1/10+1/15=1/6，时间=1÷1/6=6',
            explanation: '1/10+1/15=3/30+2/30=5/30=1/6，1÷1/6=6天'
          },
          {
            id: 'm6u3l4q3',
            type: 'choice',
            question: '甲乙合作5天完成，甲单独做10天完成，乙单独做几天？',
            options: ['5天', '10天', '15天', '20天'],
            answer: '10天',
            hint: '乙效率=合作效率-甲效率',
            explanation: '合作效率=1/5，甲效率=1/10，乙效率=1/5-1/10=1/10，乙时间=10天'
          },
          {
            id: 'm6u3l4q4',
            type: 'fill',
            question: '修一条路甲单独8天完成，乙单独12天完成，合作___天完成',
            answer: '4.8',
            hint: '合作效率=1/8+1/12=5/24',
            explanation: '1/8+1/12=3/24+2/24=5/24，1÷5/24=24/5=4.8天',
            acceptableAnswers: ['24/5', '4又4/5'],
          },
          {
            id: 'm6u3l4q5',
            type: 'fill',
            question: '【期末真题】一项工程甲单独做12天完成，甲乙合作4天完成，乙单独做___天完成',
            answer: '6',
            hint: '乙效率=合作效率-甲效率=1/4-1/12=1/6',
            explanation: '1/4-1/12=3/12-1/12=2/12=1/6，1÷1/6=6天'
          },
          {
            id: 'm6u3l4q6',
            type: 'fill',
            question: '水池有进水管和出水管，进水管5小时注满，出水管8小时排完，同时开放___小时注满',
            answer: '40/3',
            hint: '净效率=1/5-1/8=3/40',
            explanation: '1/5-1/8=8/40-5/40=3/40，1÷3/40=40/3小时',
            acceptableAnswers: ['13又1/3'],
          },
          {
            id: 'm6u3l4q7',
            type: 'fill',
            question: '同分母分数加法：4/9 + 2/9 = ___',
            answer: '6/9',
            hint: '[同分母分数加减法]（五年级数学-第7单元）',
            explanation: '同分母分数相加，分母不变，分子相加：4/9+2/9=6/9=2/3',
            acceptableAnswers: ['2/3'],
          },
          ]
        },
        {
          id: 'm6u3l5',
          title: '分数除法综合检测',
          order: 5,
          teachingMethod: '形成性评价',
          iDo: '家长示范综合题的解题思路。',
          weDo: '亲子竞速完成综合练习。',
          youDo: '孩子独立完成分数除法综合检测，正确率大于等于85%。',
          parentTips: '综合检测分数除法计算、应用题和工程问题，正确率大于等于85%。',
          funElement: '通关挑战：全对获得分数除法达人徽章！歇后语：水到渠成——学会除法自然通',
          gsapAnimations: ['[GSAP:confetti|通关撒花|2s|正确率大于等于85%|power1.out]', '[GSAP:starFlyIn|达人徽章飞入|1s|通关|back.out(1.7)]'],
          images: ['[IMG:illustration|分数除法达人徽章|300x300|可爱卡通风|png|金色徽章]', '[IMG:illustration|综合检测场景|500x300|可爱卡通风|png|检测场景]'],
          content: [
          { type: 'text', content: '本单元我们学习了分数除法的计算方法、应用题和工程问题。', animationType: 'reveal' },
          { type: 'text', content: '分数除法法则：除以一个数（0除外）=乘以这个数的倒数。', animationType: 'reveal' },
          { type: 'text', content: '应用题：已知一个数的几分之几求原数用除法。', animationType: 'reveal' },
          { type: 'text', content: '工程问题：工作总量÷工作效率=工作时间，总量通常设为1。', animationType: 'reveal' },
          { type: 'tip', content: '综合检测时注意：除变乘要取倒数，应用题要分清乘除。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '分数除法知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '分数除法知识回顾', timelineConfig: { steps: [{ text: '知识点1：分数除法法则——除以一个数=乘以它的倒数', ttsText: '知识点1：分数除法法则——除以一个数=乘以它的倒数' }, { text: '知识点2：应用题——已知部分求整体用除法', ttsText: '知识点2：应用题——已知部分求整体用除法' }, { text: '知识点3：工程问题——总量÷效率=时间', ttsText: '知识点3：工程问题——总量÷效率=时间' }] }, ttsNarration: '回顾分数除法的三个知识点' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u3l5q1',
            type: 'choice',
            question: '3/5 ÷ 1/10 = ?',
            options: ['6', '3/50', '10/3', '30/5'],
            answer: '6',
            hint: '除以1/10=乘以10/1',
            explanation: '3/5 ÷ 1/10 = 3/5 × 10 = 30/5 = 6'
          },
          {
            id: 'm6u3l5q2',
            type: 'fill',
            question: '7/8 ÷ 7/4 = ___',
            answer: '1/2',
            hint: '除以7/4=乘以4/7',
            explanation: '7/8 ÷ 7/4 = 7/8 × 4/7 = 28/56 = 1/2'
          },
          {
            id: 'm6u3l5q3',
            type: 'choice',
            question: '一个数的2/3是12，这个数是？',
            options: ['8', '18', '6', '24'],
            answer: '18',
            hint: '12÷2/3=?，用除法',
            explanation: '12 ÷ 2/3 = 12 × 3/2 = 36/2 = 18'
          },
          {
            id: 'm6u3l5q4',
            type: 'fill',
            question: '一项工程甲单独6天完成，甲的工作效率是___',
            answer: '1/6',
            hint: '效率=1/时间',
            explanation: '工作总量设为1，甲6天完成，效率=1/6'
          },
          {
            id: 'm6u3l5q5',
            type: 'fill',
            question: '【期末真题】5/6 ÷ 5/12 - 1/4 = ___',
            answer: '7/4',
            hint: '先算除法，再算减法',
            explanation: '5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2，2 - 1/4 = 8/4 - 1/4 = 7/4',
            acceptableAnswers: ['1.75', '1又3/4'],
          },
          {
            id: 'm6u3l5q6',
            type: 'fill',
            question: '甲乙合作效率1/4，甲单独6天完成，乙单独___天完成',
            answer: '12',
            hint: '乙效率=1/4-1/6=1/12',
            explanation: '1/4-1/6=3/12-2/12=1/12，1÷1/12=12天'
          },
          {
            id: 'm6u3l5q7',
            type: 'fill',
            question: '同分母分数加法：2/7 + 3/7 = ___',
            answer: '5/7',
            hint: '[同分母分数加减法]（五年级数学-第7单元）',
            explanation: '同分母分数相加，分母不变，分子相加：2/7+3/7=5/7'
          },
          ]
        },
    ]
  },
  {
    id: 'm6u4',
    title: '比',
    subtitle: '认识比的意义、性质与应用，掌握按比分配',
    order: 4,
    lessons: [
        {
          id: 'm6u4l1',
          title: '比的意义——两个量的关系',
          order: 1,
          teachingMethod: 'CPA·C→P：实物比较',
          iDo: '家长用果汁和水的比例引出比的概念。',
          weDo: '亲子一起调配果汁，写出果汁和水的比。',
          youDo: '孩子独立写出两个量的比。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“2比3写作什么？谁前谁后？”②孩子应答：“写作2:3，2是前项，3是后项，表示2和3的倍数关系。”③答错引导：若孩子把前项后项搞反，家长用“糖水2克糖3克水”举例，强调写在前的是前项、写在后的是后项，顺序不能换。④快速听写：家长说“5比8、7比2”，孩子写出比并说出前后项。',
          funElement: '调果汁游戏：2份果汁3份水，调出好喝的果汁！谚语：恰到好处——比例要对',
          gsapAnimations: ['[GSAP:sceneBuild|调果汁场景动画|1.5s|点击播放|power2.out]', '[GSAP:numberCount|比的前项后项|0.8s|页面加载|back.out(1.7)]'],
          images: ['[IMG:illustration|比的意义图|500x300|可爱卡通风|png|果汁调配]', '[IMG:illustration|比的关系示意图|400x250|教学风|png|两个量的比]'],
          content: [
          { type: 'text', content: '两个数相除又叫两个数的比。比表示两个量之间的倍数关系。', animationType: 'reveal' },
          { type: 'example', content: '果汁2份，水3份，果汁和水的比是2:3。2是前项，3是后项，:是比号。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '比的意义：a:b = a÷b = a/b（b≠0）。比值=前项÷后项。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '比的后项不能为0（因为除数不能为0）。比和除法、分数可以互化。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '调果汁场景演示', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: '调果汁场景演示', sceneBuildConfig: { elements: [{ text: '果汁2份', emoji: 'cup', x: 30, y: 50, size: 'md', color: '#FF6B35', animation: 'bounceIn' }, { text: '水3份', emoji: 'droplet', x: 70, y: 50, size: 'md', color: '#4ECDC4', delay: 0.5, animation: 'bounceIn' }, { text: '比=2:3', emoji: 'ratio', x: 50, y: 25, size: 'lg', delay: 1.0, animation: 'bounceIn' }] }, ttsNarration: '果汁2份水3份，果汁和水的比是2:3' } },
          { type: 'text', content: '比、除法、分数的关系：a:b = a÷b = a/b。比的前项相当于被除数/分子，后项相当于除数/分母。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u4l1q1',
            type: 'choice',
            question: '果汁2份水3份，果汁和水的比是？',
            options: ['2:3', '3:2', '2:5', '3:5'],
            answer: '2:3',
            hint: '果汁在前，水在后',
            explanation: '果汁和水的比是2:3，2是前项，3是后项'
          },
          {
            id: 'm6u4l1q2',
            type: 'fill',
            question: '5:8中，前项是___，后项是___',
            answer: '5和8',
            hint: '比号前面的叫前项，后面的叫后项',
            explanation: '5是前项，8是后项'
          },
          {
            id: 'm6u4l1q3',
            type: 'choice',
            question: '3:4的比值是？',
            options: ['3/4', '4/3', '0.34', '1.33'],
            answer: '3/4',
            hint: '比值=前项÷后项',
            explanation: '3:4的比值=3÷4=3/4'
          },
          {
            id: 'm6u4l1q4',
            type: 'fill',
            question: '男生20人，女生25人，男生和女生的比是___:___',
            answer: '20:25',
            hint: '男生在前，女生在后',
            explanation: '男生和女生的比是20:25'
          },
          {
            id: 'm6u4l1q5',
            type: 'fill',
            question: '【期中真题】甲数是乙数的3/2倍，甲和乙的比是___:___',
            answer: '3:2',
            hint: '甲=3/2×乙，所以甲:乙=3/2:1=3:2',
            explanation: '甲=3/2乙，甲:乙=3/2:1=3:2'
          },
          {
            id: 'm6u4l1q6',
            type: 'fill',
            question: '一个长方形长6厘米宽4厘米，长和宽的比是___:___，比值是___',
            answer: '6:4和3/2',
            hint: '长:宽=6:4，比值=6/4=3/2',
            explanation: '长:宽=6:4，比值=6÷4=3/2',
            acceptableAnswers: ['6:4和1.5'],
          },
          {
            id: 'm6u4l1q7',
            type: 'fill',
            question: '一个数除以分数：3/4 ÷ 1/2 = ___',
            answer: '3/2',
            hint: '[一个数除以分数]（数学-分数除法-第2课）',
            explanation: '3/4 ÷ 1/2 = 3/4 × 2 = 6/4 = 3/2',
            acceptableAnswers: ['1.5', '1又1/2'],
          },
          ]
        },
        {
          id: 'm6u4l2',
          title: '比的基本性质——化简比',
          order: 2,
          teachingMethod: '探究式教学：发现规律',
          iDo: '家长示范比的前后项同乘除同一个数（0除外），比值不变。',
          weDo: '亲子一起化简比，发现比的基本性质。',
          youDo: '孩子独立化简比。',
          parentTips: '比的前后项同乘或除以同一个数（0除外），比值不变。',
          funElement: '化简比大赛：看谁化得最快最简！谚语：万变不离其宗——比值不变',
          gsapAnimations: ['[GSAP:timeline|化简比步骤|1.5s|点击播放|power2.out]', '[GSAP:highlight|同除以最大公因数|0.5s|化简|power2.out]'],
          images: ['[IMG:illustration|化简比示意图|500x200|教学风|png|化简过程]', '[IMG:illustration|比的基本性质图|400x250|教学风|png|同乘除]'],
          content: [
          { type: 'text', content: '比的基本性质：比的前项和后项同时乘或除以相同的数（0除外），比值不变。', animationType: 'reveal' },
          { type: 'example', content: '12:8 = (12÷4):(8÷4) = 3:2。前后项同除以最大公因数4，得到最简比。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '化简比：前后项同除以最大公因数（整数比）；或同乘分母最小公倍数（分数比）。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '最简比：前后项互质（最大公因数为1）。如3:2是最简比。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '化简比步骤演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '化简比步骤演示', timelineConfig: { steps: [{ text: '第1步：观察12:8', ttsText: '第1步：观察12:8' }, { text: '第2步：找最大公因数——4', ttsText: '第2步：找最大公因数——4' }, { text: '第3步：前后项同除以4', ttsText: '第3步：前后项同除以4' }, { text: '第4步：得到最简比3:2', ttsText: '第4步：得到最简比3:2' }] }, ttsNarration: '比的前后项同除以最大公因数，得到最简比' } },
          { type: 'text', content: '分数比化简：1/2:1/3 = (1/2×6):(1/3×6) = 3:2。同乘分母的最小公倍数。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u4l2q1',
            type: 'choice',
            question: '化简比 12:8 = ?',
            options: ['3:2', '2:3', '6:4', '12:8'],
            answer: '3:2',
            hint: '前后项同除以最大公因数4',
            explanation: '12:8 = (12÷4):(8÷4) = 3:2'
          },
          {
            id: 'm6u4l2q2',
            type: 'fill',
            question: '化简比 15:25 = ___:___',
            answer: '3:5',
            hint: '同除以最大公因数5',
            explanation: '15:25 = (15÷5):(25÷5) = 3:5'
          },
          {
            id: 'm6u4l2q3',
            type: 'choice',
            question: '化简比 1/2:1/3 = ?',
            options: ['3:2', '2:3', '1:6', '6:1'],
            answer: '3:2',
            hint: '同乘分母最小公倍数6',
            explanation: '1/2:1/3 = (1/2×6):(1/3×6) = 3:2'
          },
          {
            id: 'm6u4l2q4',
            type: 'fill',
            question: '化简比 0.4:0.6 = ___:___',
            answer: '2:3',
            hint: '先化为整数比再化简',
            explanation: '0.4:0.6 = 4:6 = 2:3'
          },
          {
            id: 'm6u4l2q5',
            type: 'fill',
            question: '【期末真题】化简比 3/4:1/8 = ___:___',
            answer: '6:1',
            hint: '同乘分母最小公倍数8',
            explanation: '3/4:1/8 = (3/4×8):(1/8×8) = 6:1'
          },
          {
            id: 'm6u4l2q6',
            type: 'fill',
            question: '化简比 2/3:4/9 = ___:___',
            answer: '3:2',
            hint: '同乘分母最小公倍数9',
            explanation: '2/3:4/9 = (2/3×9):(4/9×9) = 6:4 = 3:2'
          },
          {
            id: 'm6u4l2q7',
            type: 'fill',
            question: '4/8化成最简分数是___',
            answer: '1/2',
            hint: '[约分与最简分数]（五年级数学-第6单元）',
            explanation: '4和8的最大公因数是4，4/8=(4÷4)/(8÷4)=1/2',
          },
          ]
        },
        {
          id: 'm6u4l3',
          title: '比的应用——按比分配',
          order: 3,
          teachingMethod: '情境式教学',
          iDo: '家长模拟按比分糖果，示范按比分配的方法。',
          weDo: '亲子一起按比分东西。',
          youDo: '孩子独立解决按比分配问题。',
          parentTips: '按比分配：总量÷总份数=每份量，再乘各自的份数。',
          funElement: '分糖果游戏：按2:3分糖果，算算各得多少！谚语：按劳分配——按比来分',
          gsapAnimations: ['[GSAP:timeline|按比分配步骤|1.5s|点击播放|power2.out]', '[GSAP:highlight|份数高亮|0.5s|分配|power2.out]'],
          images: ['[IMG:illustration|按比分配图|500x300|可爱卡通风|png|分糖果]', '[IMG:illustration|按比分配示意图|400x250|教学风|png|份数分配]'],
          content: [
          { type: 'text', content: '按比分配就是把一个总量按照给定的比分成若干份。', animationType: 'reveal' },
          { type: 'example', content: '把30颗糖按2:3分给甲乙。总份数=2+3=5，每份=30÷5=6颗。甲得6×2=12颗，乙得6×3=18颗。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '按比分配：1.求总份数  2.总量÷总份数=每份量  3.每份量×各份数=各部分量', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '验证：各部分量之和=总量。12+18=30，正确！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '按比分配步骤演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '按比分配步骤演示', timelineConfig: { steps: [{ text: '第1步：30颗糖按2:3分', ttsText: '第1步：30颗糖按2:3分' }, { text: '第2步：总份数=2+3=5份', ttsText: '第2步：总份数=2+3=5份' }, { text: '第3步：每份=30÷5=6颗', ttsText: '第3步：每份=30÷5=6颗' }, { text: '第4步：甲=6×2=12颗，乙=6×3=18颗', ttsText: '第4步：甲=6×2=12颗，乙=6×3=18颗' }] }, ttsNarration: '按比分配：先求总份数，再求每份量，最后求各部分' } },
          { type: 'text', content: '也可以用分数法：甲占2/5，乙占3/5。甲=30×2/5=12，乙=30×3/5=18。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u4l3q1',
            type: 'choice',
            question: '把30颗糖按2:3分给甲乙，甲得多少颗？',
            options: ['10颗', '12颗', '15颗', '18颗'],
            answer: '12颗',
            hint: '总份数=5，每份=6，甲=6×2=12',
            explanation: '30÷(2+3)×2=30÷5×2=12颗'
          },
          {
            id: 'm6u4l3q2',
            type: 'fill',
            question: '把40本书按3:5分给两个班，第二个班得___本',
            answer: '25',
            hint: '总份数=8，每份=5，第二个班=5×5=25',
            explanation: '40÷(3+5)×5=40÷8×5=25本'
          },
          {
            id: 'm6u4l3q3',
            type: 'choice',
            question: '一个三角形三个内角度数比是1:2:3，这是什么三角形？',
            options: ['锐角三角形', '直角三角形', '钝角三角形', '等腰三角形'],
            answer: '直角三角形',
            hint: '总份数=6，180÷6=30度，最大角=30×3=90度',
            explanation: '180÷(1+2+3)=30度，最大角=30×3=90度，是直角三角形'
          },
          {
            id: 'm6u4l3q4',
            type: 'fill',
            question: '甲乙丙三人按2:3:4分72元，乙得___元',
            answer: '24',
            hint: '总份数=9，每份=8，乙=8×3=24',
            explanation: '72÷(2+3+4)×3=72÷9×3=24元'
          },
          {
            id: 'm6u4l3q5',
            type: 'fill',
            question: '【期末真题】学校购进图书120本按1:2:3分给低中高年级，高年级得___本',
            answer: '60',
            hint: '总份数=6，每份=20，高年级=20×3=60',
            explanation: '120÷(1+2+3)×3=120÷6×3=60本'
          },
          {
            id: 'm6u4l3q6',
            type: 'fill',
            question: '甲乙按5:3分80个苹果，甲比乙多___个',
            answer: '20',
            hint: '甲=50,乙=30,差=20',
            explanation: '甲=80÷8×5=50，乙=80÷8×3=30，50-30=20个'
          },
          {
            id: 'm6u4l3q7',
            type: 'fill',
            question: '3÷4写成分数是___（填分数）',
            answer: '3/4',
            hint: '[分数与除法的关系]（五年级数学-第6单元）',
            explanation: '分数与除法的关系：a÷b=a/b，所以3÷4=3/4'
          },
          ]
        },
        {
          id: 'm6u4l4',
          title: '比与分数除法的关系',
          order: 4,
          teachingMethod: '对比辨析法',
          iDo: '家长对比比和分数除法，示范三者的互化。',
          weDo: '亲子一起对比比、分数和除法。',
          youDo: '孩子独立进行比、分数、除法的互化。',
          parentTips: '比=分数=除法，三者可以互化。前项=分子=被除数，后项=分母=除数。',
          funElement: '连连看游戏：把比、分数、除法配对！谚语：殊途同归——三种形式一个意思',
          gsapAnimations: ['[GSAP:compare|比分数除法对比|0.8s|页面加载|power2.out]', '[GSAP:highlight|三者关系高亮|0.5s|对比|power2.out]'],
          images: ['[IMG:illustration|三者关系图|500x300|教学风|png|互化关系]', '[IMG:illustration|比分数除法对比图|400x250|教学风|png|三者对比]'],
          content: [
          { type: 'text', content: '比、分数和除法之间有密切的关系，它们可以互相转化。', animationType: 'reveal' },
          { type: 'example', content: '3:4 = 3/4 = 3÷4。前项=分子=被除数，后项=分母=除数，比号=分数线=除号。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '比↔分数↔除法：a:b = a/b = a÷b', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '区别：比表示两个量的关系；分数是一个数；除法是一种运算。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '比、分数、除法三者对比', animationType: 'compare', animationConfig: { sceneType: 'compare', title: '比、分数、除法三者对比', compareConfig: { leftItems: ['比: 3:4', '前项:3 后项:4', '比号::', '表示倍数关系'], rightItems: ['分数: 3/4', '分子:3 分母:4', '分数线:/', '是一个数'], result: 'equal', resultText: '三者本质相同，形式不同！' }, ttsNarration: '比、分数、除法三者可以互化，本质相同' } },
          { type: 'text', content: '应用：求比值就是用前项除以后项；化简比可以用分数约分的方法。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u4l4q1',
            type: 'choice',
            question: '3:4 = 3÷4 = ?',
            options: ['3/4', '4/3', '12', '0.43'],
            answer: '3/4',
            hint: '比=分数=除法',
            explanation: '3:4 = 3÷4 = 3/4'
          },
          {
            id: 'm6u4l4q2',
            type: 'fill',
            question: '5:8 = 5÷___ = 5/___',
            answer: '8和8',
            hint: '比的后项=除数=分母',
            explanation: '5:8 = 5÷8 = 5/8'
          },
          {
            id: 'm6u4l4q3',
            type: 'choice',
            question: '12÷15化成比是？',
            options: ['12:15', '15:12', '4:5', '5:4'],
            answer: '12:15',
            hint: '被除数:除数',
            explanation: '12÷15 = 12:15 = 4:5（化简后）'
          },
          {
            id: 'm6u4l4q4',
            type: 'fill',
            question: '7/9化成比是___:___',
            answer: '7:9',
            hint: '分子:分母',
            explanation: '7/9 = 7:9'
          },
          {
            id: 'm6u4l4q5',
            type: 'fill',
            question: '【期中真题】甲数÷乙数=5/6，则甲:乙=___:___',
            answer: '5:6',
            hint: '除法可以化为比',
            explanation: '甲÷乙=5/6，所以甲:乙=5:6'
          },
          {
            id: 'm6u4l4q6',
            type: 'fill',
            question: '比值是0.5的比，最简形式是___:___',
            answer: '1:2',
            hint: '0.5=1/2=1:2',
            explanation: '0.5=1/2，所以最简比是1:2'
          },
          {
            id: 'm6u4l4q7',
            type: 'fill',
            question: '把3/5的分子分母同时乘2，分数大小___（填“变”或“不变”）',
            answer: '不变',
            hint: '[分数的基本性质]（五年级数学-第6单元）',
            explanation: '分数的分子分母同时乘或除以相同的数(0除外)，分数大小不变。'
          },
          ]
        },
        {
          id: 'm6u4l5',
          title: '比综合检测',
          order: 5,
          teachingMethod: '形成性评价',
          iDo: '家长示范综合题的解题方法。',
          weDo: '亲子一起练习综合题。',
          youDo: '孩子独立完成比的综合检测，正确率大于等于80%。',
          parentTips: '综合检测比的意义、化简比、按比分配和三者关系，正确率大于等于80%。',
          funElement: '通关挑战：全对获得比达人徽章！谚语：有比较才有鉴别',
          gsapAnimations: ['[GSAP:starFlyIn|比达人徽章|1s|通关|back.out(1.7)]', '[GSAP:confetti|通关撒花|2s|正确率大于等于80%|power1.out]'],
          images: ['[IMG:illustration|比达人徽章|300x300|可爱卡通风|png|金色徽章]', '[IMG:illustration|综合检测场景|500x300|可爱卡通风|png|检测场景]'],
          content: [
          { type: 'text', content: '本单元我们学习了比的意义、基本性质、按比分配和比与分数除法的关系。', animationType: 'reveal' },
          { type: 'text', content: '比表示两个量的倍数关系，比=分数=除法。', animationType: 'reveal' },
          { type: 'text', content: '化简比：前后项同除以最大公因数。', animationType: 'reveal' },
          { type: 'text', content: '按比分配：总量÷总份数×各份数。', animationType: 'reveal' },
          { type: 'tip', content: '综合检测时注意：比的后项不能为0，化简要化到最简。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '比的知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '比的知识回顾', timelineConfig: { steps: [{ text: '知识点1：比的意义——两个量的倍数关系', ttsText: '知识点1：比的意义——两个量的倍数关系' }, { text: '知识点2：比的基本性质——同乘除比值不变', ttsText: '知识点2：比的基本性质——同乘除比值不变' }, { text: '知识点3：按比分配——总量÷总份数×各份数', ttsText: '知识点3：按比分配——总量÷总份数×各份数' }, { text: '知识点4：比与分数除法——三者互化', ttsText: '知识点4：比与分数除法——三者互化' }] }, ttsNarration: '回顾比的四个知识点' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u4l5q1',
            type: 'choice',
            question: '5:6的比值是？',
            options: ['5/6', '6/5', '30', '5/30'],
            answer: '5/6',
            hint: '比值=前项÷后项',
            explanation: '5:6的比值=5÷6=5/6'
          },
          {
            id: 'm6u4l5q2',
            type: 'fill',
            question: '化简比 18:24 = ___:___',
            answer: '3:4',
            hint: '同除以最大公因数6',
            explanation: '18:24 = (18÷6):(24÷6) = 3:4'
          },
          {
            id: 'm6u4l5q3',
            type: 'choice',
            question: '把60个苹果按1:2分，第二份多少个？',
            options: ['20个', '30个', '40个', '60个'],
            answer: '40个',
            hint: '总份数=3，每份=20，第二份=20×2=40',
            explanation: '60÷(1+2)×2=60÷3×2=40个'
          },
          {
            id: 'm6u4l5q4',
            type: 'fill',
            question: '3/4化成比是___:___',
            answer: '3:4',
            hint: '分子:分母',
            explanation: '3/4 = 3:4'
          },
          {
            id: 'm6u4l5q5',
            type: 'fill',
            question: '【期末真题】甲乙两人速度比是4:5，甲每分钟走80米，乙每分钟走___米',
            answer: '100',
            hint: '甲=4份=80，每份=20，乙=5份=100',
            explanation: '80÷4×5=100米'
          },
          {
            id: 'm6u4l5q6',
            type: 'fill',
            question: '三角形三个内角比1:1:2，最大角___度',
            answer: '90',
            hint: '总份数=4，180÷4=45，最大=45×2=90',
            explanation: '180÷(1+1+2)×2=180÷4×2=90度'
          },
          {
            id: 'm6u4l5q7',
            type: 'fill',
            question: '分数3/4中，分母是___',
            answer: '4',
            hint: '[分数各部分名称]（五年级数学-第6单元）',
            explanation: '分数中，分母在下表示平均分的份数，3/4的分母是4。'
          },
          ]
        },
    ]
  },
  {
    id: 'm6u5',
    title: '圆',
    subtitle: '认识圆的特征，掌握圆的周长与面积计算',
    order: 5,
    lessons: [
        {
          id: 'm6u5l1',
          title: '圆的认识——圆心半径直径',
          order: 1,
          teachingMethod: 'CPA·C→P：实物画圆',
          iDo: '家长用圆规画圆，引出圆心、半径、直径的概念。',
          weDo: '亲子一起画圆并标注圆心、半径和直径。',
          youDo: '孩子独立画圆并标出各要素。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“圆心、半径各决定什么？半径3厘米直径多少？”②孩子应答：“圆心定位置，半径定大小，直径=2倍半径=6厘米。”③答错引导：若孩子把直径半径弄混，家长拿一个圆碗口描圆，标出圆心和从圆心到边的半径，量出半径再算直径，强调d=2r。④快速出题：家长报半径，孩子报直径(如半径4→直径8)。',
          funElement: '画圆比赛：看谁画的圆最标准！谚语：无规矩不成方圆——圆规画圆',
          gsapAnimations: ['[GSAP:shapeDraw|圆规画圆动画|2s|点击播放|power2.out]', '[GSAP:highlight|圆心半径直径标注|0.5s|标注|power2.out]'],
          images: ['[IMG:illustration|圆的要素图|500x300|教学风|png|圆心+半径+直径]', '[IMG:illustration|圆规画圆示意图|400x250|教学风|png|画圆过程]'],
          content: [
          { type: 'text', content: '圆是平面上到一定点距离等于定长的所有点组成的封闭曲线。', animationType: 'reveal' },
          { type: 'example', content: '用圆规画圆：针尖固定的点叫圆心（O），圆规两脚间的距离是半径（r），通过圆心两端在圆上的线段是直径（d）。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '圆的特征：d = 2r（直径=半径×2）。圆有无数条半径和直径，同圆中所有半径相等，所有直径相等。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '圆心决定圆的位置，半径决定圆的大小。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '圆规画圆并标注要素', animationType: 'shapeDraw', animationConfig: { sceneType: 'shapeDraw', title: '圆规画圆并标注要素', shapeDrawConfig: { shape: 'circle', labels: ['圆心O', '半径r', '直径d=2r'] }, ttsNarration: '圆心定位置，半径定大小，d=2r' } },
          { type: 'text', content: '圆是轴对称图形，有无数条对称轴。每一条直径所在的直线都是对称轴。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u5l1q1',
            type: 'choice',
            question: '圆的半径是3厘米，直径是多少？',
            options: ['6厘米', '3厘米', '9厘米', '1.5厘米'],
            answer: '6厘米',
            hint: 'd=2r',
            explanation: 'd=2r=2×3=6厘米'
          },
          {
            id: 'm6u5l1q2',
            type: 'fill',
            question: '圆的直径是10厘米，半径是___厘米',
            answer: '5',
            hint: 'r=d/2',
            explanation: 'r=d/2=10/2=5厘米'
          },
          {
            id: 'm6u5l1q3',
            type: 'choice',
            question: '圆有___条对称轴。',
            options: ['1条', '2条', '4条', '无数条'],
            answer: '无数条',
            hint: '每条直径所在直线都是对称轴',
            explanation: '圆有无数条对称轴'
          },
          {
            id: 'm6u5l1q4',
            type: 'fill',
            question: '决定圆的位置的是___，决定圆的大小的是___',
            answer: '圆心和半径',
            hint: '圆心定位置，半径定大小',
            explanation: '圆心决定位置，半径决定大小'
          },
          {
            id: 'm6u5l1q5',
            type: 'fill',
            question: '【期中真题】一个圆的半径r=4cm，直径d=___cm，这个圆有___条对称轴',
            answer: '8和无数',
            hint: 'd=2r=8，圆有无数条对称轴',
            explanation: 'd=2×4=8cm，圆有无数条对称轴'
          },
          {
            id: 'm6u5l1q6',
            type: 'fill',
            question: '在同一个圆中，最多能画出___条直径',
            answer: '无数',
            hint: '圆有无数条直径',
            explanation: '同一个圆中有无数条直径'
          },
          {
            id: 'm6u5l1q7',
            type: 'fill',
            question: '化简比 18:24 = ___:___',
            answer: '3:4',
            hint: '[比的基本性质]（数学-比-第2课）',
            explanation: '18:24 = (18÷6):(24÷6) = 3:4'
          },
          ]
        },
        {
          id: 'm6u5l2',
          title: '圆的周长——圆周率',
          order: 2,
          teachingMethod: '探究式教学：测量发现',
          iDo: '家长用绳绕圆测量，引出圆周率的概念。',
          weDo: '亲子一起测量圆的周长和直径，计算比值。',
          youDo: '孩子独立计算圆的周长。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“圆周长怎么算？直径10厘米的圆周长多少？”②孩子应答：“C=πd=3.14乘10=31.4厘米。”③答错引导：若孩子忘了公式，家长用绳子绕杯口一圈量出周长，再量杯口直径，算比值≈3.14，让孩子理解π=周长÷直径。④快速听写：家长报直径或半径，孩子报周长(如d=2→C=6.28)。',
          funElement: '测量实验：量一量圆的周长和直径，算算比值！谚语：实践出真知——测量发现圆周率',
          gsapAnimations: ['[GSAP:timeline|绳绕圆到测量到发现π|1.5s|点击播放|power2.out]', '[GSAP:highlight|π≈3.14高亮|0.5s|发现|power2.out]'],
          images: ['[IMG:illustration|圆周率发现图|500x300|教学风|png|测量过程]', '[IMG:illustration|圆的周长示意图|400x250|教学风|png|周长公式]'],
          content: [
          { type: 'text', content: '圆的周长与直径的比值是一个固定的数，叫做圆周率，用π表示。', animationType: 'reveal' },
          { type: 'example', content: '测量发现：任何圆的周长÷直径≈3.14。所以C=πd=2πr，π≈3.14。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '圆的周长：C = πd = 2πr（π≈3.14）', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: 'π是无限不循环小数，计算时通常取3.14。π=3.1415926...', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '绳绕圆到测量到发现π', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '绳绕圆到测量到发现π', timelineConfig: { steps: [{ text: '第1步：用绳子绕圆一周，量出周长C', ttsText: '第1步：用绳子绕圆一周，量出周长C' }, { text: '第2步：量出圆的直径d', ttsText: '第2步：量出圆的直径d' }, { text: '第3步：计算C÷d的比值', ttsText: '第3步：计算C÷d的比值' }, { text: '第4步：发现比值≈3.14，即圆周率π', ttsText: '第4步：发现比值≈3.14，即圆周率π' }] }, ttsNarration: '测量发现：圆的周长÷直径=π≈3.14' } },
          { type: 'text', content: '已知周长求直径：d=C÷π。已知周长求半径：r=C÷π÷2。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u5l2q1',
            type: 'choice',
            question: '圆的半径是2厘米，周长是多少？（π取3.14）',
            options: ['12.56厘米', '6.28厘米', '4厘米', '12厘米'],
            answer: '12.56厘米',
            hint: 'C=2πr=2×3.14×2',
            explanation: 'C=2πr=2×3.14×2=12.56厘米'
          },
          {
            id: 'm6u5l2q2',
            type: 'fill',
            question: '圆的直径是6厘米，周长是___厘米（π取3.14）',
            answer: '18.84',
            hint: 'C=πd=3.14×6',
            explanation: 'C=πd=3.14×6=18.84厘米'
          },
          {
            id: 'm6u5l2q3',
            type: 'choice',
            question: '圆周率π约等于？',
            options: ['3.14', '3.41', '31.4', '3.1'],
            answer: '3.14',
            hint: 'π≈3.14',
            explanation: '圆周率π≈3.14'
          },
          {
            id: 'm6u5l2q4',
            type: 'fill',
            question: '圆的周长是31.4厘米，直径是___厘米（π取3.14）',
            answer: '10',
            hint: 'd=C÷π=31.4÷3.14',
            explanation: 'd=C÷π=31.4÷3.14=10厘米'
          },
          {
            id: 'm6u5l2q5',
            type: 'fill',
            question: '【期末真题】一个圆形花坛周长25.12米，半径是___米（π取3.14）',
            answer: '4',
            hint: 'r=C÷π÷2=25.12÷3.14÷2',
            explanation: 'r=25.12÷3.14÷2=4米'
          },
          {
            id: 'm6u5l2q6',
            type: 'fill',
            question: '两个圆半径比是2:3，周长比是___:___',
            answer: '2:3',
            hint: '周长比=半径比',
            explanation: 'C=2πr，周长与半径成正比，所以周长比=半径比=2:3'
          },
          {
            id: 'm6u5l2q7',
            type: 'fill',
            question: '一个平行四边形底5厘米、高3厘米，面积是___平方厘米',
            answer: '15',
            hint: '[平行四边形的面积]（五年级数学-第4单元）',
            explanation: '平行四边形面积=底×高=5×3=15平方厘米'
          },
          ]
        },
        {
          id: 'm6u5l3',
          title: '圆的面积——转化法',
          order: 3,
          teachingMethod: 'CPA·C→P：剪拼转化',
          iDo: '家长把圆剪拼成近似长方形，推导圆的面积公式。',
          weDo: '亲子一起剪拼圆，理解面积公式的推导。',
          youDo: '孩子独立计算圆的面积。',
          parentTips: '圆的面积S=πr²。把圆剪拼成近似长方形，长=πr，宽=r。',
          funElement: '剪纸拼图：把圆变成长方形！谚语：化圆为方——转化法的妙用',
          gsapAnimations: ['[GSAP:shapeDraw|圆剪拼成长方形|2s|点击播放|power2.inOut]', '[GSAP:timeline|面积公式推导步骤|1.5s|点击播放|power2.out]'],
          images: ['[IMG:illustration|圆面积转化图|500x300|教学风|png|剪拼过程]', '[IMG:illustration|圆面积公式推导|400x250|教学风|png|长方形类比]'],
          content: [
          { type: 'text', content: '圆的面积可以通过剪拼转化成长方形来推导。', animationType: 'reveal' },
          { type: 'example', content: '把圆等分成若干份，拼成近似长方形。长方形的长=圆周长的一半=πr，宽=圆的半径=r。S=πr×r=πr²。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '圆的面积：S = πr²（r是半径）', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '圆剪拼成近似长方形：长=πr，宽=r。分得越细越接近长方形。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '圆剪拼成长方形', animationType: 'shapeDraw', animationConfig: { sceneType: 'shapeDraw', title: '圆剪拼成长方形', shapeDrawConfig: { shape: 'rectangle', labels: ['长=πr（半圆周长）', '宽=r（半径）', 'S=πr×r=πr²'] }, ttsNarration: '圆剪拼成长方形，长=πr，宽=r，面积=πr²' } },
          { type: 'text', content: '注意区分：周长C=2πr（长度），面积S=πr²（面积）。单位不同！', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u5l3q1',
            type: 'choice',
            question: '圆的半径是3厘米，面积是多少？（π取3.14）',
            options: ['28.26平方厘米', '18.84平方厘米', '9平方厘米', '6平方厘米'],
            answer: '28.26平方厘米',
            hint: 'S=πr²=3.14×3²',
            explanation: 'S=πr²=3.14×3²=3.14×9=28.26平方厘米'
          },
          {
            id: 'm6u5l3q2',
            type: 'fill',
            question: '圆的半径是5厘米，面积是___平方厘米（π取3.14）',
            answer: '78.5',
            hint: 'S=πr²=3.14×5²',
            explanation: 'S=πr²=3.14×25=78.5平方厘米'
          },
          {
            id: 'm6u5l3q3',
            type: 'choice',
            question: '圆剪拼成近似长方形，长方形的长等于？',
            options: ['圆周长的一半πr', '圆的直径d', '圆的半径r', '圆周长C'],
            answer: '圆周长的一半πr',
            hint: '长方形的长=半圆周长=πr',
            explanation: '圆剪拼成长方形，长=圆周长的一半=πr'
          },
          {
            id: 'm6u5l3q4',
            type: 'fill',
            question: '圆的直径是8厘米，面积是___平方厘米（π取3.14）',
            answer: '50.24',
            hint: 'r=4，S=πr²=3.14×16',
            explanation: 'r=4，S=3.14×4²=3.14×16=50.24平方厘米'
          },
          {
            id: 'm6u5l3q5',
            type: 'fill',
            question: '【期末真题】一个圆的面积是12.56平方厘米，半径是___厘米（π取3.14）',
            answer: '2',
            hint: 'r²=S÷π=12.56÷3.14=4，r=2',
            explanation: 'r²=12.56÷3.14=4，r=2厘米'
          },
          {
            id: 'm6u5l3q6',
            type: 'fill',
            question: '两个圆半径比是1:2，面积比是___:___',
            answer: '1:4',
            hint: '面积比=半径平方比=1²:2²=1:4',
            explanation: 'S=πr²，面积与半径平方成正比，面积比=1²:2²=1:4'
          },
          {
            id: 'm6u5l3q7',
            type: 'fill',
            question: '一个三角形底4厘米、高3厘米，面积是___平方厘米',
            answer: '6',
            hint: '[三角形的面积]（五年级数学-第4单元）',
            explanation: '三角形面积=底×高÷2=4×3÷2=6平方厘米'
          },
          ]
        },
        {
          id: 'm6u5l4',
          title: '圆的应用——环形面积',
          order: 4,
          teachingMethod: '情境式教学',
          iDo: '家长示范计算环形面积的方法。',
          weDo: '亲子一起计算环形面积。',
          youDo: '孩子独立解决环形面积问题。',
          parentTips: '环形面积=大圆面积-小圆面积=π(R²-r²)。',
          funElement: '设计花坛：计算环形花坛的面积！谚语：有容乃大——大圆减小圆',
          gsapAnimations: ['[GSAP:shapeDraw|环形绘制动画|1.5s|点击播放|power2.out]', '[GSAP:highlight|大圆小圆标注|0.5s|绘制|power2.out]'],
          images: ['[IMG:illustration|环形面积图|500x300|教学风|png|大圆-小圆]', '[IMG:illustration|环形应用场景|400x250|可爱卡通风|png|环形花坛]'],
          content: [
          { type: 'text', content: '环形是由两个同心圆（圆心相同、半径不同）组成的图形。', animationType: 'reveal' },
          { type: 'example', content: '环形面积=大圆面积-小圆面积=πR²-πr²=π(R²-r²)。R是大圆半径，r是小圆半径。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '环形面积：S = πR² - πr² = π(R² - r²)', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '用π(R²-r²)计算更简便，先算半径平方差再乘π。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '环形绘制过程', animationType: 'shapeDraw', animationConfig: { sceneType: 'shapeDraw', title: '环形绘制过程', shapeDrawConfig: { shape: 'circle', labels: ['外圆半径R', '内圆半径r', '环形面积=π(R²-r²)'] }, ttsNarration: '环形=大圆-小圆，面积=π(R²-r²)' } },
          { type: 'text', content: '应用：花坛、跑道、垫圈等环形物体的面积都可以用这个公式计算。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u5l4q1',
            type: 'choice',
            question: '环形外圆半径5cm，内圆半径3cm，面积是多少？（π取3.14）',
            options: ['50.24平方厘米', '28.26平方厘米', '78.5平方厘米', '12.56平方厘米'],
            answer: '50.24平方厘米',
            hint: 'S=π(R²-r²)=3.14×(25-9)',
            explanation: 'S=π(5²-3²)=3.14×(25-9)=3.14×16=50.24平方厘米'
          },
          {
            id: 'm6u5l4q2',
            type: 'fill',
            question: '环形大圆半径4cm，小圆半径2cm，面积是___平方厘米（π取3.14）',
            answer: '37.68',
            hint: 'S=π(16-4)=3.14×12',
            explanation: 'S=π(4²-2²)=3.14×(16-4)=3.14×12=37.68平方厘米'
          },
          {
            id: 'm6u5l4q3',
            type: 'choice',
            question: '环形面积公式是什么？',
            options: ['π(R²-r²)', 'πR²+πr²', '2πR-2πr', 'π(R-r)'],
            answer: 'π(R²-r²)',
            hint: '大圆面积减小圆面积',
            explanation: 'S=πR²-πr²=π(R²-r²)'
          },
          {
            id: 'm6u5l4q4',
            type: 'fill',
            question: '一个环形垫圈外圆直径10cm，内圆直径6cm，面积是___平方厘米（π取3.14）',
            answer: '50.24',
            hint: 'R=5,r=3,S=π(25-9)',
            explanation: 'R=5,r=3，S=π(5²-3²)=3.14×16=50.24平方厘米'
          },
          {
            id: 'm6u5l4q5',
            type: 'fill',
            question: '【期末真题】圆形花坛半径5米，中间有一个半径2米的圆形水池，剩余面积是___平方米（π取3.14）',
            answer: '65.94',
            hint: 'S=π(25-4)=3.14×21',
            explanation: 'S=π(5²-2²)=3.14×(25-4)=3.14×21=65.94平方米'
          },
          {
            id: 'm6u5l4q6',
            type: 'fill',
            question: '环形外圆周长18.84cm，内圆半径2cm，环形面积是___平方厘米（π取3.14）',
            answer: '15.7',
            hint: '外圆R=3，S=π(9-4)=3.14×5',
            explanation: '外圆R=18.84÷3.14÷2=3，S=π(3²-2²)=3.14×5=15.7平方厘米'
          },
          {
            id: 'm6u5l4q7',
            type: 'fill',
            question: '一个梯形上底2厘米、下底4厘米、高3厘米，面积是___平方厘米',
            answer: '9',
            hint: '[梯形的面积]（五年级数学-第4单元）',
            explanation: '梯形面积=(上底+下底)×高÷2=(2+4)×3÷2=9平方厘米'
          },
          ]
        },
        {
          id: 'm6u5l5',
          title: '圆综合检测',
          order: 5,
          teachingMethod: '形成性评价',
          iDo: '家长示范综合题的解题思路。',
          weDo: '亲子一起练习综合题。',
          youDo: '孩子独立完成圆的综合检测，正确率大于等于80%。',
          parentTips: '综合检测圆的认识、周长、面积和环形面积，正确率大于等于80%。',
          funElement: '通关挑战：全对获得圆达人徽章！谚语：圆满成功——圆的知识全掌握',
          gsapAnimations: ['[GSAP:confetti|通关撒花|2s|正确率大于等于80%|power1.out]', '[GSAP:starFlyIn|圆达人徽章|1s|通关|back.out(1.7)]'],
          images: ['[IMG:illustration|圆达人徽章|300x300|可爱卡通风|png|金色徽章]', '[IMG:illustration|综合检测场景|500x300|可爱卡通风|png|检测场景]'],
          content: [
          { type: 'text', content: '本单元我们学习了圆的认识、周长、面积和环形面积。', animationType: 'reveal' },
          { type: 'text', content: '圆心定位置，半径定大小，d=2r。', animationType: 'reveal' },
          { type: 'text', content: '周长C=πd=2πr，面积S=πr²。', animationType: 'reveal' },
          { type: 'text', content: '环形面积=π(R²-r²)。', animationType: 'reveal' },
          { type: 'tip', content: '综合检测时注意：周长是长度（厘米），面积是面积（平方厘米），单位不要混淆。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '圆的知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '圆的知识回顾', timelineConfig: { steps: [{ text: '知识点1：圆的认识——圆心、半径、直径，d=2r', ttsText: '知识点1：圆的认识——圆心、半径、直径，d=2r' }, { text: '知识点2：圆的周长——C=πd=2πr', ttsText: '知识点2：圆的周长——C=πd=2πr' }, { text: '知识点3：圆的面积——S=πr²', ttsText: '知识点3：圆的面积——S=πr²' }, { text: '知识点4：环形面积——π(R²-r²)', ttsText: '知识点4：环形面积——π(R²-r²)' }] }, ttsNarration: '回顾圆的四个知识点' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u5l5q1',
            type: 'choice',
            question: '圆的半径是4厘米，直径是？',
            options: ['8厘米', '4厘米', '2厘米', '16厘米'],
            answer: '8厘米',
            hint: 'd=2r',
            explanation: 'd=2r=2×4=8厘米'
          },
          {
            id: 'm6u5l5q2',
            type: 'fill',
            question: '圆的半径是3厘米，周长是___厘米（π取3.14）',
            answer: '18.84',
            hint: 'C=2πr=2×3.14×3',
            explanation: 'C=2πr=2×3.14×3=18.84厘米'
          },
          {
            id: 'm6u5l5q3',
            type: 'choice',
            question: '圆的半径是5厘米，面积是多少？（π取3.14）',
            options: ['78.5平方厘米', '31.4平方厘米', '15.7平方厘米', '25平方厘米'],
            answer: '78.5平方厘米',
            hint: 'S=πr²=3.14×25',
            explanation: 'S=πr²=3.14×5²=3.14×25=78.5平方厘米'
          },
          {
            id: 'm6u5l5q4',
            type: 'fill',
            question: '环形外圆半径6cm，内圆半径4cm，面积是___平方厘米（π取3.14）',
            answer: '62.8',
            hint: 'S=π(36-16)=3.14×20',
            explanation: 'S=π(6²-4²)=3.14×(36-16)=3.14×20=62.8平方厘米'
          },
          {
            id: 'm6u5l5q5',
            type: 'fill',
            question: '【期末真题】圆形桌布半径1米，要在中间剪去半径0.5米的圆，剩余面积是___平方米（π取3.14）',
            answer: '2.355',
            hint: 'S=π(1-0.25)=3.14×0.75',
            explanation: 'S=π(1²-0.5²)=3.14×(1-0.25)=3.14×0.75=2.355平方米'
          },
          {
            id: 'm6u5l5q6',
            type: 'fill',
            question: '两个圆半径比是3:4，面积比是___:___',
            answer: '9:16',
            hint: '面积比=半径平方比',
            explanation: '面积比=3²:4²=9:16'
          },
          {
            id: 'm6u5l5q7',
            type: 'fill',
            question: '一个长方形长5厘米、宽4厘米，面积是___平方厘米',
            answer: '20',
            hint: '[长方形的面积]（五年级数学-第4单元）',
            explanation: '长方形面积=长×宽=5×4=20平方厘米'
          },
          ]
        },
    ]
  },
  {
    id: 'm6u6',
    title: '百分数（一）',
    subtitle: '理解百分数的意义，掌握百分数与分数小数的互化及应用',
    order: 6,
    lessons: [
        {
          id: 'm6u6l1',
          title: '百分数的意义',
          order: 1,
          teachingMethod: 'CPA·C→P：生活实例',
          iDo: '家长用打折、出勤率等生活实例引出百分数的概念。',
          weDo: '亲子一起找生活中的百分数，理解百分数的意义。',
          youDo: '孩子独立读写百分数，理解百分数的意义。',
          parentTips: '共学四步（家长当陪练）：①对话出题：家长问“什么是百分数？40%表示什么？”②孩子应答：“百分数表示一个数是另一个数的百分之几，40%表示占百分之四十。”③答错引导：若孩子把百分数当普通分数，家长举“考试100题对40题得40%”，强调百分数只表示关系不带单位。④快速出题：家长说“45人中有9人缺席”，孩子算缺席率(9÷45=20%)。',
          funElement: '找百分数游戏：在广告包装上找百分数！谚语：百发百中——百分数的由来',
          gsapAnimations: ['[GSAP:sceneBuild|生活中的百分数场景|1.5s|点击播放|power2.out]', '[GSAP:numberCount|百分数从0到100|0.8s|页面加载|back.out(1.7)]'],
          images: ['[IMG:illustration|百分数生活实例|500x300|可爱卡通风|png|打折/出勤率]', '[IMG:illustration|百分数示意图|400x250|教学风|png|百分数意义]'],
          content: [
          { type: 'text', content: '百分数表示一个数是另一个数的百分之几，也叫百分率或百分比。', animationType: 'reveal' },
          { type: 'example', content: '出勤率95%表示出勤人数占应出勤人数的95/100。打八折=80%。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '百分数：a% = a/100。如25% = 25/100 = 1/4。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '百分数只表示两个量的倍数关系，不表示具体数量，所以不带单位名称。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '生活中的百分数场景', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: '生活中的百分数场景', sceneBuildConfig: { elements: [{ text: '打八折=80%', emoji: 'tag', x: 25, y: 30, size: 'md', animation: 'bounceIn' }, { text: '出勤率95%', emoji: 'check', x: 75, y: 30, size: 'md', delay: 0.5, animation: 'bounceIn' }, { text: '含棉100%', emoji: 'shirt', x: 50, y: 60, size: 'md', delay: 1.0, animation: 'bounceIn' }] }, ttsNarration: '生活中到处都有百分数' } },
          { type: 'text', content: '百分数与分数的区别：百分数只表示关系（不带单位），分数既可以表示关系也可以表示具体数量（可带单位）。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u6l1q1',
            type: 'choice',
            question: '百分数表示什么？',
            options: ['一个数是另一个数的百分之几', '一个数的大小', '100个数', '百分比'],
            answer: '一个数是另一个数的百分之几',
            hint: '百分数的定义',
            explanation: '百分数表示一个数是另一个数的百分之几'
          },
          {
            id: 'm6u6l1q2',
            type: 'fill',
            question: '25%读作___',
            answer: '百分之二十五',
            hint: '百分数的读法',
            explanation: '25%读作百分之二十五'
          },
          {
            id: 'm6u6l1q3',
            type: 'choice',
            question: '百分数能带单位吗？',
            options: ['不能带单位', '必须带单位', '可以带可以不带', '只能带个'],
            answer: '不能带单位',
            hint: '百分数只表示关系不表示具体数量',
            explanation: '百分数只表示倍数关系，不表示具体数量，所以不能带单位'
          },
          {
            id: 'm6u6l1q4',
            type: 'fill',
            question: '百分之四十写作___%',
            answer: '40',
            hint: '百分数的写法',
            explanation: '百分之四十写作40%'
          },
          {
            id: 'm6u6l1q5',
            type: 'fill',
            question: '【期中真题】一件衣服打七折出售，表示按原价的___%出售',
            answer: '70',
            hint: '打七折=70%',
            explanation: '打七折表示按原价的70%出售'
          },
          {
            id: 'm6u6l1q6',
            type: 'fill',
            question: '50%等于分数___（最简分数）',
            answer: '1/2',
            hint: '50%=50/100=1/2',
            explanation: '50%=50/100=1/2'
          },
          {
            id: 'm6u6l1q7',
            type: 'fill',
            question: '圆的面积公式是___',
            answer: 'πr²',
            hint: '[圆的面积]（数学-圆-第3课）',
            explanation: '圆的面积S=πr²'
          },
          ]
        },
        {
          id: 'm6u6l2',
          title: '百分数与分数小数互化',
          order: 2,
          teachingMethod: '支架式教学',
          iDo: '家长示范百分数、分数、小数互化的方法。',
          weDo: '亲子一起练习互化。',
          youDo: '孩子独立完成互化。',
          parentTips: '百分数↔小数：小数点移两位；百分数↔分数：先化分母100再约分。',
          funElement: '互化接力赛：小数→百分数→分数→小数！谚语：融会贯通——三者互化',
          gsapAnimations: ['[GSAP:timeline|互化步骤展开|1.5s|点击播放|power2.out]', '[GSAP:highlight|小数点移动高亮|0.5s|转化|power2.out]'],
          images: ['[IMG:illustration|互化关系图|500x300|教学风|png|三者互化]', '[IMG:illustration|互化方法示意图|400x250|教学风|png|转化步骤]'],
          content: [
          { type: 'text', content: '百分数、小数和分数之间可以互相转化。', animationType: 'reveal' },
          { type: 'example', content: '0.25=25%=1/4。小数化百分数：小数点右移两位加%；百分数化小数：去掉%小数点左移两位。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '互化方法：小数→百分数：小数点右移2位加%；百分数→小数：去%小数点左移2位；百分数→分数：写成分母100的分数再约分。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '分数化百分数：先用分子除以分母化成小数，再化成百分数。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '互化步骤展开演示', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '互化步骤展开演示', timelineConfig: { steps: [{ text: '小数→百分数：0.375→小数点右移2位→37.5%', ttsText: '小数→百分数：0.375→小数点右移2位→37.5%' }, { text: '百分数→小数：45%→去%→小数点左移2位→0.45', ttsText: '百分数→小数：45%→去%→小数点左移2位→0.45' }, { text: '百分数→分数：20%→20/100→约分→1/5', ttsText: '百分数→分数：20%→20/100→约分→1/5' }, { text: '分数→百分数：3/4→3÷4=0.75→75%', ttsText: '分数→百分数：3/4→3÷4=0.75→75%' }] }, ttsNarration: '掌握百分数、小数、分数的互化方法' } },
          { type: 'text', content: '常见互化：1/4=25%=0.25，1/2=50%=0.5，3/4=75%=0.75，1/5=20%=0.2。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u6l2q1',
            type: 'choice',
            question: '0.45化成百分数是？',
            options: ['45%', '4.5%', '450%', '0.45%'],
            answer: '45%',
            hint: '小数点右移两位加%',
            explanation: '0.45→小数点右移2位→45%'
          },
          {
            id: 'm6u6l2q2',
            type: 'fill',
            question: '60%化成小数是___',
            answer: '0.6',
            hint: '去%小数点左移两位',
            explanation: '60%→去%→小数点左移2位→0.6'
          },
          {
            id: 'm6u6l2q3',
            type: 'choice',
            question: '1/4化成百分数是？',
            options: ['25%', '50%', '20%', '40%'],
            answer: '25%',
            hint: '1÷4=0.25=25%',
            explanation: '1/4=1÷4=0.25=25%'
          },
          {
            id: 'm6u6l2q4',
            type: 'fill',
            question: '75%化成分数是___（最简分数）',
            answer: '3/4',
            hint: '75/100=3/4',
            explanation: '75%=75/100=3/4'
          },
          {
            id: 'm6u6l2q5',
            type: 'fill',
            question: '【期末真题】3/8化成百分数是___%',
            answer: '37.5',
            hint: '3÷8=0.375=37.5%',
            explanation: '3/8=3÷8=0.375=37.5%'
          },
          {
            id: 'm6u6l2q6',
            type: 'fill',
            question: '0.125=___%=___（分数）',
            answer: '12.5和1/8',
            hint: '0.125=12.5%=125/1000=1/8',
            explanation: '0.125=12.5%=1/8'
          },
          {
            id: 'm6u6l2q7',
            type: 'fill',
            question: '小数除法：7.2 ÷ 0.8 = ___',
            answer: '9',
            hint: '[小数除法]（五年级数学-第2单元）',
            explanation: '7.2 ÷ 0.8 = 72 ÷ 8 = 9'
          },
          ]
        },
        {
          id: 'm6u6l3',
          title: '百分数应用题——求百分率',
          order: 3,
          teachingMethod: '情境式教学',
          iDo: '家长模拟出勤率、合格率等场景，示范求百分率的方法。',
          weDo: '亲子一起计算百分率。',
          youDo: '孩子独立求百分率。',
          parentTips: '百分率=部分÷总数×100%。',
          funElement: '统计师游戏：计算班级出勤率、合格率！谚语：十拿九稳——90%的把握',
          gsapAnimations: ['[GSAP:sceneBuild|百分率场景|1.5s|点击播放|power2.out]', '[GSAP:timeline|求百分率步骤|1.5s|点击播放|power2.out]'],
          images: ['[IMG:illustration|百分率场景|500x300|可爱卡通风|png|出勤/合格]', '[IMG:illustration|百分率计算图|400x250|教学风|png|百分率公式]'],
          content: [
          { type: 'text', content: '百分率表示部分占整体的百分比，在生活中应用广泛。', animationType: 'reveal' },
          { type: 'example', content: '全班50人，出勤48人。出勤率=48÷50×100%=96%。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '百分率=部分÷总数×100%', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '出勤率、合格率、成活率、命中率等都不会超过100%。增长率可能超过100%。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '百分率场景演示', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: '百分率场景演示', sceneBuildConfig: { elements: [{ text: '全班50人', emoji: 'users', x: 50, y: 20, size: 'lg', animation: 'bounceIn' }, { text: '出勤48人', emoji: 'check', x: 30, y: 55, size: 'md', delay: 0.5, animation: 'slideIn' }, { text: '出勤率96%', emoji: 'percent', x: 70, y: 55, size: 'lg', delay: 1.0, animation: 'bounceIn' }] }, ttsNarration: '出勤率=出勤人数÷总人数×100%' } },
          { type: 'text', content: '常见百分率：出勤率、合格率、达标率、发芽率、出粉率、命中率等。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u6l3q1',
            type: 'choice',
            question: '全班50人，出勤48人，出勤率是？',
            options: ['96%', '48%', '50%', '100%'],
            answer: '96%',
            hint: '48÷50×100%',
            explanation: '出勤率=48÷50×100%=96%'
          },
          {
            id: 'm6u6l3q2',
            type: 'fill',
            question: '200个零件中合格196个，合格率是___%',
            answer: '98',
            hint: '196÷200×100%',
            explanation: '合格率=196÷200×100%=98%'
          },
          {
            id: 'm6u6l3q3',
            type: 'choice',
            question: '百分率=部分÷总数×___',
            options: ['100%', '10%', '1000%', '1%'],
            answer: '100%',
            hint: '百分率公式',
            explanation: '百分率=部分÷总数×100%'
          },
          {
            id: 'm6u6l3q4',
            type: 'fill',
            question: '种树200棵成活190棵，成活率是___%',
            answer: '95',
            hint: '190÷200×100%',
            explanation: '成活率=190÷200×100%=95%'
          },
          {
            id: 'm6u6l3q5',
            type: 'fill',
            question: '【期末真题】某班今天请假3人，出勤47人，出勤率是___%（保留一位小数）',
            answer: '94',
            hint: '47÷(47+3)×100%',
            explanation: '总人数=47+3=50，出勤率=47÷50×100%=94%'
          },
          {
            id: 'm6u6l3q6',
            type: 'fill',
            question: '投篮20次命中15次，命中率是___%',
            answer: '75',
            hint: '15÷20×100%',
            explanation: '命中率=15÷20×100%=75%'
          },
          {
            id: 'm6u6l3q7',
            type: 'fill',
            question: '小数乘法：0.3 × 0.4 = ___',
            answer: '0.12',
            hint: '[小数乘法]（五年级数学-第1单元）',
            explanation: '0.3×0.4=0.12，积的小数位数等于两个因数小数位数之和(1+1=2)'
          },
          ]
        },
        {
          id: 'm6u6l4',
          title: '百分数应用题——增减幅度',
          order: 4,
          teachingMethod: '情境式教学',
          iDo: '家长模拟涨降价场景，示范计算增减幅度的方法。',
          weDo: '亲子一起计算增减幅度。',
          youDo: '孩子独立解决增减幅度问题。',
          parentTips: '增减幅度=增减量÷原量×100%。',
          funElement: '物价分析师：计算涨价降幅百分比！谚语：水涨船高——增长幅度',
          gsapAnimations: ['[GSAP:compare|增加vs减少对比|0.8s|页面加载|power2.out]', '[GSAP:highlight|增减量高亮|0.5s|计算|power2.out]'],
          images: ['[IMG:illustration|增减幅度图|500x300|教学风|png|涨降价]', '[IMG:illustration|增减计算示意图|400x250|cartoon|png|增长下降]'],
          content: [
          { type: 'text', content: '增减幅度表示增加或减少的部分占原量的百分之几。', animationType: 'reveal' },
          { type: 'example', content: '原价200元，现价160元。降价了(200-160)÷200×100%=20%。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '增减幅度=增减量÷原量×100%（增加为正，减少为负）', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '关键是找准原来的量（单位1）作为除数。增减量=现量-原量。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '增加vs减少对比', animationType: 'compare', animationConfig: { sceneType: 'compare', title: '增加vs减少对比', compareConfig: { leftItems: ['增加：现量>原量', '增幅=(现量-原量)÷原量×100%'], rightItems: ['减少：现量<原量', '降幅=(原量-现量)÷原量×100%'], result: 'equal', resultText: '增减幅度都是相对于原量计算！' }, ttsNarration: '增加和减少都是除以原量' } },
          { type: 'text', content: '注意：增产20%是在原来基础上增加20%，不是现在的20%。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u6l4q1',
            type: 'choice',
            question: '原价200元，现价240元，增长了百分之几？',
            options: ['20%', '40%', '16.7%', '10%'],
            answer: '20%',
            hint: '(240-200)÷200×100%',
            explanation: '增幅=(240-200)÷200×100%=20%'
          },
          {
            id: 'm6u6l4q2',
            type: 'fill',
            question: '原价100元降到80元，降价了___%',
            answer: '20',
            hint: '(100-80)÷100×100%',
            explanation: '降幅=(100-80)÷100×100%=20%'
          },
          {
            id: 'm6u6l4q3',
            type: 'choice',
            question: '增减幅度=增减量÷___×100%',
            options: ['原量', '现量', '总量', '增减量'],
            answer: '原量',
            hint: '增减幅度是相对于原量计算的',
            explanation: '增减幅度=增减量÷原量×100%'
          },
          {
            id: 'm6u6l4q4',
            type: 'fill',
            question: '去年产量500吨，今年600吨，增产了___%',
            answer: '20',
            hint: '(600-500)÷500×100%',
            explanation: '增幅=(600-500)÷500×100%=20%'
          },
          {
            id: 'm6u6l4q5',
            type: 'fill',
            question: '【期末真题】一件衣服原价250元，涨价20%后，现价___元',
            answer: '300',
            hint: '250×(1+20%)=250×1.2',
            explanation: '现价=250×(1+20%)=250×1.2=300元'
          },
          {
            id: 'm6u6l4q6',
            type: 'fill',
            question: '某商品原价80元，降价25%后现价___元',
            answer: '60',
            hint: '80×(1-25%)=80×0.75',
            explanation: '现价=80×(1-25%)=80×0.75=60元'
          },
          {
            id: 'm6u6l4q7',
            type: 'fill',
            question: '小数除法：1.5 ÷ 0.5 = ___',
            answer: '3',
            hint: '[小数除法]（五年级数学-第2单元）',
            explanation: '1.5 ÷ 0.5 = 15 ÷ 5 = 3'
          },
          ]
        },
        {
          id: 'm6u6l5',
          title: '百分数综合检测',
          order: 5,
          teachingMethod: '形成性评价',
          iDo: '家长示范综合题的解题方法。',
          weDo: '亲子一起练习综合题。',
          youDo: '孩子独立完成百分数综合检测，正确率大于等于80%。',
          parentTips: '综合检测百分数意义、互化和应用，正确率大于等于80%。',
          funElement: '通关挑战：全对获得百分数达人徽章！谚语：百尺竿头更进一步',
          gsapAnimations: ['[GSAP:confetti|通关撒花|2s|正确率大于等于80%|power1.out]', '[GSAP:starFlyIn|百分数达人徽章|1s|通关|back.out(1.7)]'],
          images: ['[IMG:illustration|百分数达人徽章|300x300|可爱卡通风|png|金色徽章]', '[IMG:illustration|综合检测场景|500x300|可爱卡通风|png|检测场景]'],
          content: [
          { type: 'text', content: '本单元我们学习了百分数的意义、互化和应用。', animationType: 'reveal' },
          { type: 'text', content: '百分数表示一个数是另一个数的百分之几。', animationType: 'reveal' },
          { type: 'text', content: '互化：小数↔百分数↔分数。', animationType: 'reveal' },
          { type: 'text', content: '应用：百分率=部分÷总数×100%，增减幅度=增减量÷原量×100%。', animationType: 'reveal' },
          { type: 'tip', content: '综合检测时注意：百分数不带单位，增减幅度除以原量。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '百分数知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '百分数知识回顾', timelineConfig: { steps: [{ text: '知识点1：百分数的意义——一个数是另一个数的百分之几', ttsText: '知识点1：百分数的意义——一个数是另一个数的百分之几' }, { text: '知识点2：互化——小数、百分数、分数互化', ttsText: '知识点2：互化——小数、百分数、分数互化' }, { text: '知识点3：百分率——部分÷总数×100%', ttsText: '知识点3：百分率——部分÷总数×100%' }, { text: '知识点4：增减幅度——增减量÷原量×100%', ttsText: '知识点4：增减幅度——增减量÷原量×100%' }] }, ttsNarration: '回顾百分数的四个知识点' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u6l5q1',
            type: 'choice',
            question: '0.08化成百分数是？',
            options: ['8%', '0.8%', '80%', '0.08%'],
            answer: '8%',
            hint: '小数点右移两位加%',
            explanation: '0.08→小数点右移2位→8%'
          },
          {
            id: 'm6u6l5q2',
            type: 'fill',
            question: '45%化成分数是___（最简分数）',
            answer: '9/20',
            hint: '45/100=9/20',
            explanation: '45%=45/100=9/20'
          },
          {
            id: 'm6u6l5q3',
            type: 'choice',
            question: '某班50人，今天出勤47人，出勤率是？',
            options: ['94%', '47%', '50%', '90%'],
            answer: '94%',
            hint: '47÷50×100%',
            explanation: '出勤率=47÷50×100%=94%'
          },
          {
            id: 'm6u6l5q4',
            type: 'fill',
            question: '原价200元涨到260元，涨了___%',
            answer: '30',
            hint: '(260-200)÷200×100%',
            explanation: '增幅=(260-200)÷200×100%=30%'
          },
          {
            id: 'm6u6l5q5',
            type: 'fill',
            question: '【期末真题】某商品原价400元，打八折后是___元',
            answer: '320',
            hint: '400×80%=400×0.8',
            explanation: '400×80%=400×0.8=320元'
          },
          {
            id: 'm6u6l5q6',
            type: 'fill',
            question: '3/5化成百分数是___%',
            answer: '60',
            hint: '3÷5=0.6=60%',
            explanation: '3/5=3÷5=0.6=60%'
          },
          {
            id: 'm6u6l5q7',
            type: 'fill',
            question: '小数除法：4.8 ÷ 1.2 = ___',
            answer: '4',
            hint: '[小数除法]（五年级数学-第2单元）',
            explanation: '4.8 ÷ 1.2 = 48 ÷ 12 = 4'
          },
          ]
        },
    ]
  },
  {
    id: 'm6u7',
    title: '扇形统计图',
    subtitle: '认识扇形统计图，掌握数据分析与统计图选择',
    order: 7,
    lessons: [
        {
          id: 'm6u7l1',
          title: '扇形统计图的认识',
          order: 1,
          teachingMethod: 'CPA·C→P：实物到图示',
          iDo: '家长用饼切分引出扇形统计图的概念。',
          weDo: '亲子一起画扇形统计图。',
          youDo: '孩子独立认读扇形统计图。',
          parentTips: '扇形统计图用整个圆表示总数，扇形大小表示各部分占总数的百分比。',
          funElement: '分披萨游戏：把披萨分成不同的扇形！谚语：画饼充饥——扇形统计图',
          gsapAnimations: ['[GSAP:shapeDraw|扇形图逐步绘制|1.5s|点击播放|power2.out]', '[GSAP:highlight|各扇形百分比标注|0.5s|绘制|power2.out]'],
          images: ['[IMG:illustration|扇形统计图|500x300|教学风|png|饼图+标注]', '[IMG:illustration|扇形图认识示意图|400x250|cartoon|png|分饼图]'],
          content: [
          { type: 'text', content: '扇形统计图是用整个圆表示总数，用圆内各个扇形的大小表示各部分占总数的百分比。', animationType: 'reveal' },
          { type: 'example', content: '一个班40人，喜欢语文12人(30%)，数学16人(40%)，英语12人(30%)。扇形图用三个扇形分别表示。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '扇形统计图：整个圆=总数=100%，各扇形百分比之和=100%。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '扇形统计图能清楚地看出各部分与总数之间的关系（百分比）。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '扇形统计图逐步绘制', animationType: 'shapeDraw', animationConfig: { sceneType: 'shapeDraw', title: '扇形统计图逐步绘制', shapeDrawConfig: { shape: 'circle', labels: ['语文30%', '数学40%', '英语30%', '总计100%'] }, ttsNarration: '整个圆表示100%，扇形大小表示百分比' } },
          { type: 'text', content: '扇形的圆心角=百分比×360度。如40%对应的圆心角=40%×360=144度。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u7l1q1',
            type: 'choice',
            question: '扇形统计图用整个圆表示什么？',
            options: ['总数', '部分', '百分比', '数量'],
            answer: '总数',
            hint: '整个圆代表整体',
            explanation: '扇形统计图用整个圆表示总数（100%）'
          },
          {
            id: 'm6u7l1q2',
            type: 'fill',
            question: '扇形统计图中各扇形百分比之和是___%',
            answer: '100',
            hint: '各部分加起来是整体',
            explanation: '各扇形百分比之和=100%'
          },
          {
            id: 'm6u7l1q3',
            type: 'choice',
            question: '扇形统计图最大的优点是？',
            options: ['清楚地看出各部分占总数的百分比', '看出数量多少', '看出变化趋势', '看出最大值'],
            answer: '清楚地看出各部分占总数的百分比',
            hint: '扇形图的特点',
            explanation: '扇形统计图能清楚地看出各部分占总数的百分比'
          },
          {
            id: 'm6u7l1q4',
            type: 'fill',
            question: '一个扇形占25%，它的圆心角是___度',
            answer: '90',
            hint: '25%×360度',
            explanation: '圆心角=25%×360=90度'
          },
          {
            id: 'm6u7l1q5',
            type: 'fill',
            question: '【期中真题】扇形统计图中，占40%的部分对应的圆心角是___度',
            answer: '144',
            hint: '40%×360度',
            explanation: '圆心角=40%×360=144度'
          },
          {
            id: 'm6u7l1q6',
            type: 'fill',
            question: '扇形统计图中，某部分占30%，它对应的圆心角是___度',
            answer: '108',
            hint: '30%×360度',
            explanation: '圆心角=30%×360=108度'
          },
          {
            id: 'm6u7l1q7',
            type: 'fill',
            question: '3/5化成百分数是___%',
            answer: '60',
            hint: '[百分数与分数互化]（数学-百分数一-第2课）',
            explanation: '3/5=3÷5=0.6=60%'
          },
          ]
        },
        {
          id: 'm6u7l2',
          title: '扇形图数据分析',
          order: 2,
          teachingMethod: '探究式教学',
          iDo: '家长示范从扇形图获取信息的方法。',
          weDo: '亲子一起分析扇形图的数据。',
          youDo: '孩子独立分析扇形图。',
          parentTips: '从扇形图可以读出各部分的百分比，结合总数可以算出各部分的具体数量。',
          funElement: '数据分析师：从扇形图中挖掘信息！谚语：管中窥豹——从扇形图看全貌',
          gsapAnimations: ['[GSAP:highlight|扇形各部分高亮|0.5s|点击|power2.out]', '[GSAP:timeline|数据分析步骤|1.5s|点击播放|power2.out]'],
          images: ['[IMG:illustration|扇形图分析标注|500x300|教学风|png|标注图]', '[IMG:illustration|扇形图数据分析|400x250|教学风|png|数据分析]'],
          content: [
          { type: 'text', content: '从扇形图中可以读出各部分占总数的百分比，结合总数可以计算各部分的具体数量。', animationType: 'reveal' },
          { type: 'example', content: '全校500人，扇形图显示喜欢足球占40%。喜欢足球的人数=500×40%=200人。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '部分数量=总数×百分比', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '也可以从部分反求总数：总数=部分数量÷百分比。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '扇形图数据分析步骤', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '扇形图数据分析步骤', timelineConfig: { steps: [{ text: '第1步：读扇形图各部分百分比', ttsText: '第1步：读扇形图各部分百分比' }, { text: '第2步：结合总数计算各部分数量——总数×百分比', ttsText: '第2步：结合总数计算各部分数量——总数×百分比' }, { text: '第3步：比较各部分大小关系', ttsText: '第3步：比较各部分大小关系' }, { text: '第4步：得出分析结论', ttsText: '第4步：得出分析结论' }] }, ttsNarration: '从扇形图中获取信息并进行分析' } },
          { type: 'text', content: '分析时注意：扇形越大占比越大，最大的扇形占比最高。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u7l2q1',
            type: 'choice',
            question: '全校600人，扇形图显示喜欢音乐占25%，喜欢音乐多少人？',
            options: ['150人', '200人', '100人', '250人'],
            answer: '150人',
            hint: '600×25%',
            explanation: '600×25%=150人'
          },
          {
            id: 'm6u7l2q2',
            type: 'fill',
            question: '总数400人，扇形图显示A类占30%，A类有___人',
            answer: '120',
            hint: '400×30%',
            explanation: '400×30%=120人'
          },
          {
            id: 'm6u7l2q3',
            type: 'choice',
            question: '扇形图中A占35%，B占40%，C占25%，哪类最多？',
            options: ['B类', 'A类', 'C类', '一样多'],
            answer: 'B类',
            hint: '比较百分比大小',
            explanation: 'B占40%最大，所以B类最多'
          },
          {
            id: 'm6u7l2q4',
            type: 'fill',
            question: '扇形图显示某部分占20%，该部分有60人，总数是___人',
            answer: '300',
            hint: '60÷20%',
            explanation: '总数=60÷20%=300人'
          },
          {
            id: 'm6u7l2q5',
            type: 'fill',
            question: '【期末真题】扇形图显示喜欢语文占30%，喜欢数学占35%，已知总人数200人，喜欢数学比语文多___人',
            answer: '10',
            hint: '200×(35%-30%)',
            explanation: '200×35%=70人，200×30%=60人，70-60=10人'
          },
          {
            id: 'm6u7l2q6',
            type: 'fill',
            question: '扇形图中A占45%，B占15%，A是B的___倍',
            answer: '3',
            hint: '45%÷15%',
            explanation: '45%÷15%=3倍'
          },
          {
            id: 'm6u7l2q7',
            type: 'fill',
            question: '扇形统计图中各扇形百分比之和是___%',
            answer: '100',
            hint: '[扇形统计图的认识]（数学-扇形统计图-第1课）',
            explanation: '各扇形百分比之和=100%'
          },
          ]
        },
        {
          id: 'm6u7l3',
          title: '三种统计图对比',
          order: 3,
          teachingMethod: '对比辨析法',
          iDo: '家长对比条形图、折线图和扇形图的特点和用途。',
          weDo: '亲子一起对比三种统计图。',
          youDo: '孩子独立选择合适的统计图。',
          parentTips: '条形图看多少，折线图看变化，扇形图看比例。',
          funElement: '选图大赛：什么情况用什么图？谚语：量体裁衣——选对统计图',
          gsapAnimations: ['[GSAP:compare|三种统计图对比|0.8s|页面加载|power2.out]', '[GSAP:highlight|各图特点高亮|0.5s|对比|power2.out]'],
          images: ['[IMG:illustration|三种统计图对比|500x300|教学风|png|三种图]', '[IMG:illustration|统计图选择示意图|400x250|教学风|png|选图指南]'],
          content: [
          { type: 'text', content: '三种统计图各有特点，适用于不同的数据分析需求。', animationType: 'reveal' },
          { type: 'example', content: '条形统计图：清楚看出各数量的多少。折线统计图：清楚看出数量变化趋势。扇形统计图：清楚看出各部分占总数的百分比。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '选择统计图：看多少→条形图；看变化→折线图；看比例→扇形图。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '要根据数据特点和分析目的选择合适的统计图。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '三种统计图对比', animationType: 'compare', animationConfig: { sceneType: 'compare', title: '三种统计图对比', compareConfig: { leftItems: ['条形图：看数量多少', '适合比较各项目数量'], rightItems: ['折线图：看变化趋势', '适合显示数据随时间变化'], result: 'equal', resultText: '条形看多少，折线看变化，扇形看比例！' }, ttsNarration: '三种统计图各有特点，根据需要选择' } },
          { type: 'text', content: '有时同一组数据可以用不同的统计图表示，但分析角度不同。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u7l3q1',
            type: 'choice',
            question: '要清楚看出各数量的多少，应选用哪种统计图？',
            options: ['条形统计图', '折线统计图', '扇形统计图', '都可以'],
            answer: '条形统计图',
            hint: '条形图的特点是看数量多少',
            explanation: '条形统计图能清楚看出各数量的多少'
          },
          {
            id: 'm6u7l3q2',
            type: 'choice',
            question: '要清楚看出数据的变化趋势，应选用哪种统计图？',
            options: ['折线统计图', '条形统计图', '扇形统计图', '都可以'],
            answer: '折线统计图',
            hint: '折线图的特点是看变化趋势',
            explanation: '折线统计图能清楚看出数据的变化趋势'
          },
          {
            id: 'm6u7l3q3',
            type: 'choice',
            question: '要清楚看出各部分占总数的百分比，应选用哪种统计图？',
            options: ['扇形统计图', '条形统计图', '折线统计图', '都可以'],
            answer: '扇形统计图',
            hint: '扇形图的特点是看比例',
            explanation: '扇形统计图能清楚看出各部分占总数的百分比'
          },
          {
            id: 'm6u7l3q4',
            type: 'choice',
            question: '记录一周气温变化，应选用哪种统计图？',
            options: ['折线统计图', '条形统计图', '扇形统计图', '都可以'],
            answer: '折线统计图',
            hint: '气温变化是看趋势',
            explanation: '折线统计图适合显示气温的变化趋势'
          },
          {
            id: 'm6u7l3q5',
            type: 'fill',
            question: '【期中真题】比较5个班的植树数量，应选用___统计图',
            answer: '条形',
            hint: '比较数量多少用条形图',
            explanation: '比较各班数量多少，应选用条形统计图'
          },
          {
            id: 'm6u7l3q6',
            type: 'fill',
            question: '要表示一天中各时段体温变化，应选用___统计图',
            answer: '折线',
            hint: '看变化趋势用折线图',
            explanation: '体温变化趋势，应选用折线统计图'
          },
          {
            id: 'm6u7l3q7',
            type: 'fill',
            question: '扇形统计图最大的优点是看出各部分占总数的___',
            answer: '百分比',
            hint: '[扇形统计图的认识]（数学-扇形统计图-第1课）',
            explanation: '扇形统计图能清楚看出各部分占总数的百分比',
            acceptableAnswers: ['比例'],
          },
          ]
        },
        {
          id: 'm6u7l4',
          title: '统计图综合应用——数据分析报告',
          order: 4,
          teachingMethod: '项目式教学',
          iDo: '家长示范写数据分析报告的步骤。',
          weDo: '亲子一起写一份简单的数据分析报告。',
          youDo: '孩子独立写一份简单的数据分析报告。',
          parentTips: '数据分析步骤：收集数据→制作统计图→分析数据→得出结论。',
          funElement: '小小分析师：完成一份运动爱好调查报告！谚语：有理有据——数据说话',
          gsapAnimations: ['[GSAP:timeline|报告步骤展开|1.5s|点击播放|power2.out]', '[GSAP:highlight|各步骤高亮|0.5s|点击|power2.out]'],
          images: ['[IMG:illustration|数据分析报告模板|500x350|教学风|png|报告模板]', '[IMG:illustration|数据分析流程图|400x250|教学风|png|分析步骤]'],
          content: [
          { type: 'text', content: '数据分析报告包括：收集数据、整理数据、制作统计图、分析数据和得出结论。', animationType: 'reveal' },
          { type: 'example', content: '调查全班同学最喜欢的运动，收集数据→画扇形统计图→分析哪项运动最受欢迎→得出结论。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '数据分析步骤：1.收集数据  2.整理制表  3.制作统计图  4.分析数据  5.得出结论', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '根据数据特点选择合适的统计图。看比例用扇形图，看多少用条形图，看变化用折线图。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '数据分析报告步骤', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '数据分析报告步骤', timelineConfig: { steps: [{ text: '第1步：收集数据——调查问卷或观察记录', ttsText: '第1步：收集数据——调查问卷或观察记录' }, { text: '第2步：整理数据——分类统计、制表', ttsText: '第2步：整理数据——分类统计、制表' }, { text: '第3步：制作统计图——选择合适的统计图', ttsText: '第3步：制作统计图——选择合适的统计图' }, { text: '第4步：分析数据——比较、计算、发现规律', ttsText: '第4步：分析数据——比较、计算、发现规律' }, { text: '第5步：得出结论——用数据支撑结论', ttsText: '第5步：得出结论——用数据支撑结论' }] }, ttsNarration: '按步骤完成数据分析报告' } },
          { type: 'text', content: '好的数据分析报告要做到：数据准确、图表清晰、分析有理、结论可靠。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u7l4q1',
            type: 'choice',
            question: '数据分析报告的第一步是什么？',
            options: ['收集数据', '制作统计图', '分析数据', '得出结论'],
            answer: '收集数据',
            hint: '先有数据才能分析',
            explanation: '数据分析的第一步是收集数据'
          },
          {
            id: 'm6u7l4q2',
            type: 'fill',
            question: '数据分析步骤依次是：收集数据→整理数据→制作统计图→分析数据→得出___',
            answer: '结论',
            hint: '最后一步是得出结论',
            explanation: '数据分析的最后一步是得出结论'
          },
          {
            id: 'm6u7l4q3',
            type: 'fill',
            question: '要清楚看出各运动占总人数的百分比，应选用哪种统计图？',
            answer: '扇形统计图',
            hint: '看各部分占总数的百分比用扇形统计图',
            explanation: '要清楚看出各运动占总人数的百分比，应选用扇形统计图'
          },
          {
            id: 'm6u7l4q4',
            type: 'choice',
            question: '调查全班最喜欢的学科并比较各学科人数，应选用哪种统计图？',
            options: ['条形统计图', '折线统计图', '扇形统计图', '都可以'],
            answer: '条形统计图',
            hint: '比较各数量多少用条形图',
            explanation: '比较各学科人数多少，应选用条形统计图'
          },
          {
            id: 'm6u7l4q5',
            type: 'fill',
            question: '【期末真题】制作数据分析报告时，看数量变化趋势应选用___统计图',
            answer: '折线',
            hint: '看变化趋势用折线图',
            explanation: '看数量变化趋势，应选用折线统计图'
          },
          {
            id: 'm6u7l4q6',
            type: 'fill',
            question: '某班40人，扇形图显示喜欢足球占25%，喜欢足球有___人',
            answer: '10',
            hint: '40×25%',
            explanation: '40×25%=10人'
          },
          {
            id: 'm6u7l4q7',
            type: 'fill',
            question: '要清楚看出数据的变化趋势，应选用___统计图',
            answer: '折线',
            hint: '[三种统计图对比]（数学-扇形统计图-第3课）',
            explanation: '折线统计图能清楚看出数据的变化趋势'
          },
          ]
        },
        {
          id: 'm6u7l5',
          title: '统计综合检测',
          order: 5,
          teachingMethod: '形成性评价',
          iDo: '家长示范综合题的解题方法。',
          weDo: '亲子一起练习综合题。',
          youDo: '孩子独立完成统计综合检测，正确率大于等于80%。',
          parentTips: '综合检测扇形统计图和数据分析，正确率大于等于80%。',
          funElement: '通关挑战：全对获得统计达人徽章！谚语：心中有数——统计学的境界',
          gsapAnimations: ['[GSAP:starFlyIn|统计达人徽章|1s|通关|back.out(1.7)]', '[GSAP:confetti|通关撒花|2s|正确率大于等于80%|power1.out]'],
          images: ['[IMG:illustration|统计达人徽章|300x300|可爱卡通风|png|金色徽章]', '[IMG:illustration|综合检测场景|500x300|可爱卡通风|png|统计检测]'],
          content: [
          { type: 'text', content: '本单元我们学习了扇形统计图的认识、数据分析和三种统计图的选择。', animationType: 'reveal' },
          { type: 'text', content: '扇形统计图用整个圆表示总数，扇形大小表示百分比。', animationType: 'reveal' },
          { type: 'text', content: '三种统计图：条形看多少，折线看变化，扇形看比例。', animationType: 'reveal' },
          { type: 'text', content: '数据分析：收集→整理→制图→分析→结论。', animationType: 'reveal' },
          { type: 'tip', content: '综合检测时注意：扇形百分比之和=100%，根据需要选择统计图。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '统计知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '统计知识回顾', timelineConfig: { steps: [{ text: '知识点1：扇形统计图——圆表总数，扇形表百分比', ttsText: '知识点1：扇形统计图——圆表总数，扇形表百分比' }, { text: '知识点2：数据分析——读百分比，算数量', ttsText: '知识点2：数据分析——读百分比，算数量' }, { text: '知识点3：三种统计图——条形看多少，折线看变化，扇形看比例', ttsText: '知识点3：三种统计图——条形看多少，折线看变化，扇形看比例' }, { text: '知识点4：数据分析报告——收集→整理→制图→分析→结论', ttsText: '知识点4：数据分析报告——收集→整理→制图→分析→结论' }] }, ttsNarration: '回顾扇形统计图的四个知识点' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u7l5q1',
            type: 'choice',
            question: '扇形统计图中各扇形百分比之和是？',
            options: ['100%', '50%', '90%', '不确定'],
            answer: '100%',
            hint: '各部分加起来是整体',
            explanation: '各扇形百分比之和=100%'
          },
          {
            id: 'm6u7l5q2',
            type: 'fill',
            question: '扇形占30%，圆心角是___度',
            answer: '108',
            hint: '30%×360度',
            explanation: '圆心角=30%×360=108度'
          },
          {
            id: 'm6u7l5q3',
            type: 'choice',
            question: '要看各部分占总数的百分比，用哪种统计图？',
            options: ['扇形统计图', '条形统计图', '折线统计图', '都可以'],
            answer: '扇形统计图',
            hint: '扇形图看比例',
            explanation: '扇形统计图能清楚看出各部分占总数的百分比'
          },
          {
            id: 'm6u7l5q4',
            type: 'fill',
            question: '总数500人，扇形图显示A占40%，A有___人',
            answer: '200',
            hint: '500×40%',
            explanation: '500×40%=200人'
          },
          {
            id: 'm6u7l5q5',
            type: 'fill',
            question: '【期末真题】某校调查学生最喜爱的运动，要清楚看出各运动占总人数的百分比，应选用___统计图',
            answer: '扇形',
            hint: '看百分比用扇形图',
            explanation: '要清楚看出各运动占总人数的百分比，应选用扇形统计图'
          },
          {
            id: 'm6u7l5q6',
            type: 'fill',
            question: '要记录一周气温变化趋势，应选用___统计图',
            answer: '折线',
            hint: '看变化趋势用折线图',
            explanation: '折线统计图适合显示变化趋势'
          },
          {
            id: 'm6u7l5q7',
            type: 'fill',
            question: '数据分析报告的最后一步是得出___',
            answer: '结论',
            hint: '[统计图综合应用]（数学-扇形统计图-第4课）',
            explanation: '数据分析报告的最后一步是得出结论'
          },
          ]
        },
    ]
  },
  {
    id: 'm6u8',
    title: '总复习',
    subtitle: '数学广角与六年级数学综合复习',
    order: 8,
    lessons: [
        {
          id: 'm6u8l1',
          title: '数学广角——鸽巢问题',
          order: 1,
          teachingMethod: '探究式教学：抽屉原理',
          iDo: '家长用铅笔和笔筒演示鸽巢原理。',
          weDo: '亲子一起探究鸽巢问题。',
          youDo: '孩子独立解决鸽巢问题。',
          parentTips: '鸽巢原理：n+1个物体放入n个鸽巢，至少有1个鸽巢有2个物体。',
          funElement: '魔术游戏：猜牌魔术中的鸽巢原理！谚语：必有一得——鸽巢原理',
          gsapAnimations: ['[GSAP:sceneBuild|铅笔放入笔筒动画|1.5s|点击播放|power2.out]', '[GSAP:highlight|至少一个笔筒有两支|0.5s|演示|power2.out]'],
          images: ['[IMG:illustration|鸽巢原理图|500x300|可爱卡通风|png|笔筒+铅笔]', '[IMG:illustration|抽屉原理示意图|400x250|教学风|png|鸽巢原理]'],
          content: [
          { type: 'text', content: '鸽巢原理（抽屉原理）：如果把n+1个物体放入n个鸽巢（抽屉），那么至少有一个鸽巢里有2个或更多物体。', animationType: 'reveal' },
          { type: 'example', content: '4支铅笔放入3个笔筒，至少有一个笔筒里有2支铅笔。因为4÷3=1...1，至少1+1=2支。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '鸽巢原理：m个物体放入n个鸽巢（m>n），至少有一个鸽巢有ceil(m/n)个物体。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '关键思想：最不利原则——考虑最坏情况，仍然能保证结论成立。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '铅笔放入笔筒演示', animationType: 'sceneBuild', animationConfig: { sceneType: 'sceneBuild', title: '铅笔放入笔筒演示', sceneBuildConfig: { elements: [{ text: '3个笔筒', emoji: 'cup', x: 50, y: 25, size: 'lg', animation: 'bounceIn' }, { text: '4支铅笔', emoji: 'pencil', x: 50, y: 55, size: 'md', delay: 0.5, animation: 'slideIn' }, { text: '至少1个笔筒有2支!', emoji: 'exclamation', x: 50, y: 80, size: 'md', color: '#FF6B35', delay: 1.0, animation: 'bounceIn' }] }, ttsNarration: '4支铅笔放入3个笔筒，至少有1个笔筒有2支' } },
          { type: 'text', content: '推广：m个物体放入n个鸽巢，至少有一个鸽巢有不少于ceil(m/n)个物体。ceil表示向上取整。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u8l1q1',
            type: 'choice',
            question: '5只鸽子飞进4个鸽笼，至少有一个鸽笼里有几只鸽子？',
            options: ['2只', '1只', '3只', '5只'],
            answer: '2只',
            hint: '5÷4=1...1，至少1+1=2只',
            explanation: '5÷4=1余1，至少有一个鸽笼有1+1=2只鸽子'
          },
          {
            id: 'm6u8l1q2',
            type: 'fill',
            question: '7支铅笔放入3个笔筒，至少有一个笔筒有___支',
            answer: '3',
            hint: '7÷3=2...1，至少2+1=3支',
            explanation: '7÷3=2余1，至少有一个笔筒有2+1=3支'
          },
          {
            id: 'm6u8l1q3',
            type: 'choice',
            question: '13个人中至少有几个人同一个月生日？',
            options: ['2人', '1人', '3人', '13人'],
            answer: '2人',
            hint: '13÷12=1...1，至少1+1=2人',
            explanation: '12个月，13÷12=1余1，至少有2人同一个月生日'
          },
          {
            id: 'm6u8l1q4',
            type: 'fill',
            question: '10本书放入4个抽屉，至少有一个抽屉有___本',
            answer: '3',
            hint: '10÷4=2...2，至少2+1=3本',
            explanation: '10÷4=2余2，至少有一个抽屉有2+1=3本'
          },
          {
            id: 'm6u8l1q5',
            type: 'fill',
            question: '【期末真题】盒子里有红黄蓝三种球各5个，至少摸出___个才能保证有2个同色',
            answer: '4',
            hint: '最不利：每种摸1个=3个，再摸1个必同色',
            explanation: '最不利情况：每种颜色摸1个共3个，第4个必与前面某色相同，所以至少摸4个'
          },
          {
            id: 'm6u8l1q6',
            type: 'fill',
            question: '8只鸽子飞进3个鸽笼，至少有一个鸽笼有___只',
            answer: '3',
            hint: '8÷3=2...2，至少2+1=3只',
            explanation: '8÷3=2余2，至少有一个鸽笼有2+1=3只'
          },
          {
            id: 'm6u8l1q7',
            type: 'fill',
            question: '扇形统计图中各扇形百分比之和是___%',
            answer: '100',
            hint: '[扇形统计图的认识]（数学-扇形统计图-第1课）',
            explanation: '各扇形百分比之和=100%'
          },
          ]
        },
        {
          id: 'm6u8l2',
          title: '总复习一——数与代数',
          order: 2,
          teachingMethod: '间隔重复',
          iDo: '家长用闪卡复习分数乘除、比、百分数等知识点。',
          weDo: '亲子接龙复习数与代数。',
          youDo: '孩子独立完成数与代数复习题。',
          parentTips: '数与代数综合复习：分数乘除、比、百分数。',
          funElement: '知识接龙：从分数到比到百分数！谚语：温故而知新——复习的力量',
          gsapAnimations: ['[GSAP:cardReveal|运算知识卡片|0.5s|点击|power2.inOut]', '[GSAP:timeline|知识体系展开|1.5s|点击播放|power2.out]'],
          images: ['[IMG:illustration|数与代数总览|600x400|教学风|png|知识图]', '[IMG:illustration|数与代数复习图|400x250|教学风|png|复习内容]'],
          content: [
          { type: 'text', content: '数与代数复习：分数乘法、分数除法、比、百分数。', animationType: 'reveal' },
          { type: 'example', content: '分数乘法：2/3×3/4=1/2。分数除法：2/3÷4/5=2/3×5/4=5/6。比：3:4=3/4。百分数：0.5=50%。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '核心公式：a/b×c/d=(a×c)/(b×d)；a/b÷c/d=a/b×d/c；a:b=a/b=a÷b；a%=a/100。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '分数除法=乘倒数；比=分数=除法；百分数=分母100的分数。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '数与代数知识卡片', animationType: 'cardReveal', animationConfig: { sceneType: 'cardReveal', title: '数与代数知识卡片', cardRevealConfig: { cards: [{ front: '分数乘法', back: '分子乘分子，分母乘分母', ttsText: '分数乘法：分子乘分子，分母乘分母' }, { front: '分数除法', back: '除以一个数=乘以它的倒数', ttsText: '分数除法：除以一个数等于乘以它的倒数' }, { front: '比', back: 'a:b=a/b=a÷b', ttsText: '比等于分数等于除法' }, { front: '百分数', back: 'a%=a/100', ttsText: '百分数等于分母是一百的分数' }] }, ttsNarration: '数与代数知识卡片复习' } },
          { type: 'text', content: '注意区分：求一个数的几分之几用乘法，已知一个数的几分之几求原数用除法。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u8l2q1',
            type: 'choice',
            question: '2/3 × 3/4 = ?',
            options: ['1/2', '6/12', '2/4', '1/3'],
            answer: '1/2',
            hint: '分子乘分子，分母乘分母',
            explanation: '2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2'
          },
          {
            id: 'm6u8l2q2',
            type: 'fill',
            question: '2/3 ÷ 4/5 = ___',
            answer: '5/6',
            hint: '除以4/5=乘以5/4',
            explanation: '2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6'
          },
          {
            id: 'm6u8l2q3',
            type: 'choice',
            question: '0.75化成百分数是？',
            options: ['75%', '7.5%', '750%', '0.75%'],
            answer: '75%',
            hint: '小数点右移两位加%',
            explanation: '0.75→75%'
          },
          {
            id: 'm6u8l2q4',
            type: 'fill',
            question: '化简比 12:18 = ___:___',
            answer: '2:3',
            hint: '同除以最大公因数6',
            explanation: '12:18 = (12÷6):(18÷6) = 2:3'
          },
          {
            id: 'm6u8l2q5',
            type: 'fill',
            question: '【期末真题】一件商品原价200元，打八折后是___元',
            answer: '160',
            hint: '200×80%',
            explanation: '200×80%=200×0.8=160元'
          },
          {
            id: 'm6u8l2q6',
            type: 'fill',
            question: '一个数的3/5是15，这个数是___',
            answer: '25',
            hint: '15÷3/5',
            explanation: '15 ÷ 3/5 = 15 × 5/3 = 25'
          },
          {
            id: 'm6u8l2q7',
            type: 'fill',
            question: '5只鸽子飞进4个鸽笼，至少有一个鸽笼有___只',
            answer: '2',
            hint: '[鸽巢问题]（数学-总复习-第1课）',
            explanation: '5÷4=1余1，至少有一个鸽笼有2只'
          },
          ]
        },
        {
          id: 'm6u8l3',
          title: '总复习二——图形与统计',
          order: 3,
          teachingMethod: '间隔重复',
          iDo: '家长用闪卡复习圆、面积和统计图等知识点。',
          weDo: '亲子一起练习图形与统计。',
          youDo: '孩子独立完成图形与统计复习题。',
          parentTips: '图形与统计综合复习：圆的周长面积、扇形统计图。',
          funElement: '图形配对游戏：把公式和图形配对！谚语：图文并茂——图形与统计',
          gsapAnimations: ['[GSAP:compare|图形知识对比|0.8s|页面加载|power2.out]', '[GSAP:highlight|公式高亮|0.5s|对比|power2.out]'],
          images: ['[IMG:illustration|图形统计总览|600x400|教学风|png|知识图]', '[IMG:illustration|图形统计复习|400x250|教学风|png|复习内容]'],
          content: [
          { type: 'text', content: '图形与统计复习：圆的认识、周长、面积、环形面积和扇形统计图。', animationType: 'reveal' },
          { type: 'example', content: '圆：d=2r，C=πd=2πr，S=πr²，环形=π(R²-r²)。扇形图：圆表总数，扇形表百分比。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '核心公式：d=2r，C=2πr，S=πr²，环形=π(R²-r²)，扇形圆心角=百分比×360°。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '周长是长度（cm），面积是面积（cm²），单位不要混淆。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '图形与统计知识对比', animationType: 'compare', animationConfig: { sceneType: 'compare', title: '图形与统计知识对比', compareConfig: { leftItems: ['圆的周长C=2πr', '圆的面积S=πr²', '环形=π(R²-r²)'], rightItems: ['扇形图：圆=总数', '扇形=百分比', '圆心角=百分比×360°'], result: 'equal', resultText: '图形公式+统计图特点要分清！' }, ttsNarration: '图形与统计知识对比复习' } },
          { type: 'text', content: '三种统计图：条形看多少，折线看变化，扇形看比例。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u8l3q1',
            type: 'choice',
            question: '圆的半径是3厘米，面积是多少？（π取3.14）',
            options: ['28.26平方厘米', '18.84平方厘米', '9平方厘米', '6平方厘米'],
            answer: '28.26平方厘米',
            hint: 'S=πr²=3.14×9',
            explanation: 'S=πr²=3.14×3²=3.14×9=28.26平方厘米'
          },
          {
            id: 'm6u8l3q2',
            type: 'fill',
            question: '圆的直径是10厘米，周长是___厘米（π取3.14）',
            answer: '31.4',
            hint: 'C=πd=3.14×10',
            explanation: 'C=πd=3.14×10=31.4厘米'
          },
          {
            id: 'm6u8l3q3',
            type: 'choice',
            question: '要看出各部分占总数的百分比，用哪种统计图？',
            options: ['扇形统计图', '条形统计图', '折线统计图', '都可以'],
            answer: '扇形统计图',
            hint: '扇形图看比例',
            explanation: '扇形统计图能清楚看出各部分占总数的百分比'
          },
          {
            id: 'm6u8l3q4',
            type: 'fill',
            question: '扇形占25%，圆心角是___度',
            answer: '90',
            hint: '25%×360度',
            explanation: '圆心角=25%×360=90度'
          },
          {
            id: 'm6u8l3q5',
            type: 'fill',
            question: '【期末真题】环形外圆半径5cm，内圆半径3cm，面积是___平方厘米（π取3.14）',
            answer: '50.24',
            hint: 'π(25-9)=3.14×16',
            explanation: 'S=π(5²-3²)=3.14×(25-9)=3.14×16=50.24平方厘米'
          },
          {
            id: 'm6u8l3q6',
            type: 'fill',
            question: '圆的半径是2厘米，周长是___厘米，面积是___平方厘米（π取3.14）',
            answer: '12.56和12.56',
            hint: 'C=2πr=12.56，S=πr²=12.56',
            explanation: 'C=2×3.14×2=12.56厘米，S=3.14×2²=12.56平方厘米'
          },
          {
            id: 'm6u8l3q7',
            type: 'fill',
            question: '2/3 ÷ 4/5 = ___',
            answer: '5/6',
            hint: '[分数除法]（数学-分数除法-第2课）',
            explanation: '2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6'
          },
          ]
        },
        {
          id: 'm6u8l4',
          title: '总复习三——应用题',
          order: 4,
          teachingMethod: '间隔重复',
          iDo: '家长用闪卡复习各类应用题的解法。',
          weDo: '亲子一起练习应用题。',
          youDo: '孩子独立完成应用题复习。',
          parentTips: '应用题综合复习：分数应用题、百分数应用题、工程问题、按比分配。',
          funElement: '应用题大闯关：一题一关，看谁全通！谚语：学以致用——应用题的境界',
          gsapAnimations: ['[GSAP:timeline|应用题类型分类|1.5s|点击播放|power2.out]', '[GSAP:highlight|解题关键高亮|0.5s|分类|power2.out]'],
          images: ['[IMG:illustration|应用题分类图|600x400|教学风|png|类型图]', '[IMG:illustration|应用题复习|400x250|教学风|png|应用题类型]'],
          content: [
          { type: 'text', content: '应用题综合复习：分数应用题、百分数应用题、工程问题、按比分配。', animationType: 'reveal' },
          { type: 'example', content: '分数应用题：一本书120页看了1/4，看了30页。百分数应用题：出勤率48/50=96%。工程问题：1÷(1/6+1/4)=2.4天。按比分配：30÷(2+3)×2=12。', label: '例题', animationType: 'bounce' },
          { type: 'formula', content: '解题关键：分数题找单位1，百分数题找部分和总数，工程题设总量为1，按比分配先求总份数。', label: '公式', animationType: 'typewriter' },
          { type: 'tip', content: '工程问题：工作总量÷工作效率=工作时间，总量通常设为1。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '应用题类型分类复习', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '应用题类型分类复习', timelineConfig: { steps: [{ text: '类型1：分数应用题——求一个数的几分之几用乘法', ttsText: '类型1：分数应用题——求一个数的几分之几用乘法' }, { text: '类型2：百分数应用题——百分率=部分÷总数×100%', ttsText: '类型2：百分数应用题——百分率=部分÷总数×100%' }, { text: '类型3：工程问题——1÷合作效率=合作时间', ttsText: '类型3：工程问题——1÷合作效率=合作时间' }, { text: '类型4：按比分配——总量÷总份数×各份数', ttsText: '类型4：按比分配——总量÷总份数×各份数' }] }, ttsNarration: '四类应用题的解题方法' } },
          { type: 'text', content: '解题步骤：1.审题理解题意  2.判断题目类型  3.选择解题方法  4.列式计算  5.检验作答。', animationType: 'reveal' },
          ],
          practiceQuestions: [
          {
            id: 'm6u8l4q1',
            type: 'choice',
            question: '一本书120页看了1/4，看了多少页？',
            options: ['30页', '40页', '60页', '90页'],
            answer: '30页',
            hint: '120×1/4',
            explanation: '120 × 1/4 = 30页'
          },
          {
            id: 'm6u8l4q2',
            type: 'fill',
            question: '全班50人出勤47人，出勤率是___%',
            answer: '94',
            hint: '47÷50×100%',
            explanation: '47÷50×100%=94%'
          },
          {
            id: 'm6u8l4q3',
            type: 'choice',
            question: '甲单独6天完成，乙单独12天完成，合作几天完成？',
            options: ['4天', '3天', '6天', '2天'],
            answer: '4天',
            hint: '1÷(1/6+1/12)',
            explanation: '1÷(1/6+1/12)=1÷(2/12+1/12)=1÷3/12=4天'
          },
          {
            id: 'm6u8l4q4',
            type: 'fill',
            question: '把40颗糖按3:5分，第一份___颗',
            answer: '15',
            hint: '40÷8×3',
            explanation: '40÷(3+5)×3=40÷8×3=15颗'
          },
          {
            id: 'm6u8l4q5',
            type: 'fill',
            question: '【期末真题】一件衣服原价250元涨价20%，现价___元',
            answer: '300',
            hint: '250×(1+20%)',
            explanation: '250×(1+20%)=250×1.2=300元'
          },
          {
            id: 'm6u8l4q6',
            type: 'fill',
            question: '甲乙合作效率1/4，甲单独6天完成，乙单独___天完成',
            answer: '12',
            hint: '乙效率=1/4-1/6=1/12',
            explanation: '乙效率=1/4-1/6=3/12-2/12=1/12，1÷1/12=12天'
          },
          {
            id: 'm6u8l4q7',
            type: 'fill',
            question: '圆的半径是3厘米，面积是___平方厘米（π取3.14）',
            answer: '28.26',
            hint: '[圆的面积]（数学-圆-第3课）',
            explanation: 'S=πr²=3.14×3²=3.14×9=28.26平方厘米'
          },
          ]
        },
        {
          id: 'm6u8l5',
          title: '学期综合测评+毕业测评',
          order: 5,
          teachingMethod: '形成性+总结性评价',
          iDo: '家长示范综合题的解题思路和方法。',
          weDo: '亲子模拟综合测评。',
          youDo: '孩子独立完成综合测评，获得毕业证书。',
          parentTips: '六年级数学综合测评：分数乘除、比、百分数、圆、统计、鸽巢。',
          funElement: '毕业典礼：全对获得六年级数学毕业证书！谚语：学有所成——毕业啦',
          gsapAnimations: ['[GSAP:starFlyIn|毕业证书飞入|1.5s|通关|elastic.out(1,0.3)]', '[GSAP:confetti|毕业撒花|2s|通关|power1.out]'],
          images: ['[IMG:illustration|六年级数学毕业大证书|500x400|可爱卡通风|png|金色毕业证书]', '[IMG:illustration|毕业测评场景|500x300|可爱卡通风|png|毕业典礼]'],
          content: [
          { type: 'text', content: '六年级数学综合测评涵盖全册内容：分数乘除法、比、百分数、圆、扇形统计图和鸽巢问题。', animationType: 'reveal' },
          { type: 'text', content: '分数乘除：乘法分子乘分子分母乘分母，除法乘倒数。', animationType: 'reveal' },
          { type: 'text', content: '比和百分数：比=分数=除法，百分数=分母100的分数。', animationType: 'reveal' },
          { type: 'text', content: '圆和统计：C=2πr，S=πr²，扇形图看比例。', animationType: 'reveal' },
          { type: 'tip', content: '毕业测评要综合运用所学知识，认真审题，仔细计算。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '六年级数学全册知识回顾', animationType: 'timeline', animationConfig: { sceneType: 'timeline', title: '六年级数学全册知识回顾', timelineConfig: { steps: [{ text: '第1-3单元：分数乘除法——乘法和除法的计算与应用', ttsText: '第1-3单元：分数乘除法——乘法和除法的计算与应用' }, { text: '第4单元：比——意义、化简、按比分配', ttsText: '第4单元：比——意义、化简、按比分配' }, { text: '第5单元：圆——周长、面积、环形', ttsText: '第5单元：圆——周长、面积、环形' }, { text: '第6单元：百分数——意义、互化、应用', ttsText: '第6单元：百分数——意义、互化、应用' }, { text: '第7单元：扇形统计图——认识、分析、选择', ttsText: '第7单元：扇形统计图——认识、分析、选择' }, { text: '第8单元：鸽巢问题与总复习', ttsText: '第8单元：鸽巢问题与总复习' }] }, ttsNarration: '回顾六年级数学全部知识，迎接毕业测评' } },
          ],
          practiceQuestions: [
          {
            id: 'm6u8l5q1',
            type: 'choice',
            question: '2/5 × 3/4 = ?',
            options: ['3/10', '6/20', '6/9', '1/2'],
            answer: '3/10',
            hint: '分子乘分子，分母乘分母，再约分',
            explanation: '2/5 × 3/4 = 6/20 = 3/10'
          },
          {
            id: 'm6u8l5q2',
            type: 'fill',
            question: '3/4 ÷ 1/8 = ___',
            answer: '6',
            hint: '除以1/8=乘以8/1',
            explanation: '3/4 ÷ 1/8 = 3/4 × 8 = 24/4 = 6'
          },
          {
            id: 'm6u8l5q3',
            type: 'choice',
            question: '圆的半径是5厘米，面积是多少？（π取3.14）',
            options: ['78.5平方厘米', '31.4平方厘米', '15.7平方厘米', '25平方厘米'],
            answer: '78.5平方厘米',
            hint: 'S=πr²=3.14×25',
            explanation: 'S=πr²=3.14×5²=3.14×25=78.5平方厘米'
          },
          {
            id: 'm6u8l5q4',
            type: 'fill',
            question: '化简比 15:25 = ___:___',
            answer: '3:5',
            hint: '同除以最大公因数5',
            explanation: '15:25 = (15÷5):(25÷5) = 3:5'
          },
          {
            id: 'm6u8l5q5',
            type: 'fill',
            question: '【毕业真题】一件商品原价400元打八五折，现价___元',
            answer: '340',
            hint: '400×85%',
            explanation: '400×85%=400×0.85=340元'
          },
          {
            id: 'm6u8l5q6',
            type: 'fill',
            question: '把60个苹果按1:2:3分给三人，第三个人得___个',
            answer: '30',
            hint: '60÷6×3',
            explanation: '60÷(1+2+3)×3=60÷6×3=30个'
          },
          {
            id: 'm6u8l5q7',
            type: 'fill',
            question: '全班50人出勤47人，出勤率是___%',
            answer: '94',
            hint: '[百分率]（数学-百分数一-第3课）',
            explanation: '出勤率=47÷50×100%=94%'
          },
          ]
        },
    ]
  },
]
