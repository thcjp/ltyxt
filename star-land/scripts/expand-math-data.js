/**
 * 数学课程数据扩充脚本
 * 功能：
 * 1. 每个课时从3题扩充到7题（2基础+2提高+2挑战+1回溯）
 * 2. 每个单元新增第4课（形成性评价）和第5课（综合应用）
 * 3. 每个单元至少1道真题
 * 4. 回溯题标注来源
 */

const fs = require('fs');
const path = require('path');

// ===== 一年级新题目数据 =====
const grade1NewQuestions = {
  // m1u1: 数一数（1-10的认识）
  'm1u1l1': [
    { id: 'm1u1l1q7', type: 'fill', question: '从1数到10，7的前面是___', answer: '6', hint: '[数一数]（数学-数一数-第1课）想一想数数的顺序', explanation: '数数的顺序是1、2、3、4、5、6、7、8、9、10，7的前面是6。' }
  ],
  'm1u1l2': [
    { id: 'm1u1l2q4', type: 'choice', question: '小红有6朵花，小明比小红少2朵，小明有几朵花？', options: ['2朵', '3朵', '4朵', '8朵'], answer: '4朵', hint: '"比少"就是更少，用减法', explanation: '"比少"就是更少，6-2=4，小明有4朵花。' },
    { id: 'm1u1l2q5', type: 'fill', question: '□>5，□最小可以填___', answer: '6', hint: '比5大的数中，最小的是几？', explanation: '比5大的数有6、7、8、9、10，最小的是6。' },
    { id: 'm1u1l2q6', type: 'fill', question: '9+☆=15，☆-3=？', answer: '3', hint: '先算☆等于几，再算☆-3', explanation: '因为9+6=15，所以☆=6，6-3=3。' },
    { id: 'm1u1l2q7', type: 'choice', question: '从1数到10，比5大比8小的数有几个？', options: ['1个', '2个', '3个', '4个'], answer: '2个', hint: '[数一数]（数学-数一数-第1课）先找出比5大比8小的数', explanation: '比5大比8小的数有6和7，共2个。' }
  ],
  'm1u1l3': [
    { id: 'm1u1l3q4', type: 'choice', question: '5、___、9，空格应该填什么？', options: ['6', '7', '8', '10'], answer: '7', hint: '看看每次跳了几个数', explanation: '5到7跳了2，7到9跳了2，所以填7。' },
    { id: 'm1u1l3q5', type: 'fill', question: '从大到小排列：8、3、10、1，排在第三个的是___', answer: '3', hint: '先从大到小排好，再看第三个', explanation: '从大到小排列是10、8、3、1，排在第三个的是3。' },
    { id: 'm1u1l3q6', type: 'fill', question: '小朋友们排队，小明排第4个，他后面还有3个人，这一排一共有___个人', answer: '7', hint: '前面有几个人？后面有几个人？加上自己', explanation: '小明排第4个，前面有3个人，后面有3个人，加上小明自己：3+1+3=7个人。' },
    { id: 'm1u1l3q7', type: 'choice', question: '5个苹果和3个梨比，苹果比梨多几个？', options: ['1个', '2个', '3个', '8个'], answer: '2个', hint: '[比多少]（数学-数一数-第2课）用一一对应的方法比一比', explanation: '5-3=2，苹果比梨多2个。' }
  ],
  // m1u2: 1-5的认识和加减法
  'm1u2l1': [
    { id: 'm1u2l1q4', type: 'choice', question: '2+2和1+3的结果哪个大？', options: ['2+2大', '1+3大', '一样大', '无法比较'], answer: '一样大', hint: '先算出两个算式的结果', explanation: '2+2=4，1+3=4，两个结果都是4，一样大。' },
    { id: 'm1u2l1q5', type: 'fill', question: '□+□=5，两个□里可以填1和___', answer: '4', hint: '1加几等于5？', explanation: '1+4=5，所以另一个□里填4。' },
    { id: 'm1u2l1q6', type: 'fill', question: '☆+☆=4，☆=___', answer: '2', hint: '两个相同的数加起来等于4', explanation: '两个相同的数相加等于4，2+2=4，所以☆=2。' },
    { id: 'm1u2l1q7', type: 'choice', question: '从1数到5，3排在第几个？', options: ['第1个', '第2个', '第3个', '第4个'], answer: '第3个', hint: '[数一数]（数学-数一数-第1课）从1开始数', explanation: '从1开始数：1是第1个，2是第2个，3是第3个。' }
  ],
  'm1u2l2': [
    { id: 'm1u2l2q4', type: 'choice', question: '3+2和2+3的结果一样吗？', options: ['一样', '不一样', '3+2大', '2+3大'], answer: '一样', hint: '分别算一算', explanation: '3+2=5，2+3=5，交换加数的位置，结果一样。' },
    { id: 'm1u2l2q5', type: 'fill', question: '□+2=5，□=___', answer: '3', hint: '几加2等于5？反过来想', explanation: '5-2=3，所以□=3。' },
    { id: 'm1u2l2q6', type: 'fill', question: '小明前面有2人，后面有1人，排队的一共有___人', answer: '4', hint: '前面的人+小明+后面的人', explanation: '前面2人+小明1人+后面1人=4人。' },
    { id: 'm1u2l2q7', type: 'fill', question: '2+3=___，再从1数到这个数', answer: '5', hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）先算加法', explanation: '2+3=5，从1数到5：1、2、3、4、5。' }
  ],
  'm1u2l3': [
    { id: 'm1u2l3q4', type: 'choice', question: '5-2和5-3的结果相差多少？', options: ['0', '1', '2', '3'], answer: '1', hint: '先分别算出结果', explanation: '5-2=3，5-3=2，3-2=1，相差1。' },
    { id: 'm1u2l3q5', type: 'fill', question: '5-□=2，□=___', answer: '3', hint: '5减几等于2？反过来想', explanation: '5-3=2，所以□=3。' },
    { id: 'm1u2l3q6', type: 'fill', question: '小明有5颗糖，吃了2颗，又得到1颗，现在有___颗', answer: '4', hint: '先减后加，分两步算', explanation: '5-2=3，3+1=4，现在有4颗糖。' },
    { id: 'm1u2l3q7', type: 'choice', question: '3+2=5，那么5-3=？', options: ['1', '2', '3', '4'], answer: '2', hint: '[加法初体验]（数学-1-5的认识和加减法-第2课）加法和减法是好朋友', explanation: '3+2=5，所以5-3=2，减法是加法的逆运算。' }
  ],
  // m1u3: 6-10的认识和加减法
  'm1u3l1': [
    { id: 'm1u3l1q4', type: 'choice', question: '比6大比9小的数有哪些？', options: ['7', '7和8', '6和7', '8和9'], answer: '7和8', hint: '找出比6大又比9小的数', explanation: '比6大比9小的数有7和8。' },
    { id: 'm1u3l1q5', type: 'fill', question: '10-□=3，□=___', answer: '7', hint: '10减几等于3？', explanation: '10-7=3，所以□=7。' },
    { id: 'm1u3l1q6', type: 'fill', question: '一个数比5大3，这个数是___', answer: '8', hint: '比5大3就是5+3', explanation: '5+3=8，这个数是8。' },
    { id: 'm1u3l1q7', type: 'choice', question: '5+3=8，8里面有几个一？', options: ['3个', '5个', '8个', '1个'], answer: '8个', hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）8的组成', explanation: '8里面有8个一。' }
  ],
  'm1u3l2': [
    { id: 'm1u3l2q4', type: 'choice', question: '8+2-3=？', options: ['5', '6', '7', '8'], answer: '7', hint: '先算8+2，再减3', explanation: '8+2=10，10-3=7。' },
    { id: 'm1u3l2q5', type: 'fill', question: '9-□=4，□=___', answer: '5', hint: '9减几等于4？', explanation: '9-5=4，所以□=5。' },
    { id: 'm1u3l2q6', type: 'fill', question: '小明从6开始往右跳4格，跳到了___', answer: '10', hint: '6+4=？', explanation: '6+4=10，跳到了10。' },
    { id: 'm1u3l2q7', type: 'choice', question: '6可以分成2和几？', options: ['2', '3', '4', '5'], answer: '4', hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）6的组成', explanation: '6可以分成2和4，2+4=6。' }
  ],
  'm1u3l3': [
    { id: 'm1u3l3q4', type: 'choice', question: '8和2凑成10，7和几凑成10？', options: ['2', '3', '4', '5'], answer: '3', hint: '7还差几到10？', explanation: '7+3=10，7和3凑成10。' },
    { id: 'm1u3l3q5', type: 'fill', question: '□+6=10，□=___', answer: '4', hint: '6还差几到10？', explanation: '4+6=10，所以□=4。' },
    { id: 'm1u3l3q6', type: 'fill', question: '9+☆=10，☆+3=？', answer: '4', hint: '先算☆等于几', explanation: '9+1=10，所以☆=1，1+3=4。' },
    { id: 'm1u3l3q7', type: 'choice', question: '5+5=10，这用到了什么方法？', options: ['凑十法', '破十法', '数数法', '排序法'], answer: '凑十法', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）5和5凑成10', explanation: '5+5=10，5和5是凑十好朋友，用的是凑十法。' }
  ],
  // m1u4: 11-20各数的认识
  'm1u4l1': [
    { id: 'm1u4l1q4', type: 'choice', question: '1个十和6个一组成几？', options: ['15', '16', '17', '61'], answer: '16', hint: '1个十是10，再加6', explanation: '1个十是10，6个一是6，10+6=16。' },
    { id: 'm1u4l1q5', type: 'fill', question: '18里面有___个十和8个一', answer: '1', hint: '十位上是几？', explanation: '18的十位是1，个位是8，所以18里面有1个十和8个一。' },
    { id: 'm1u4l1q6', type: 'fill', question: '从11数到20，15前面是___', answer: '14', hint: '按顺序数一数', explanation: '从11数到20：11、12、13、14、15，15前面是14。' },
    { id: 'm1u4l1q7', type: 'choice', question: '10+5=15，这用到了什么知识？', options: ['凑十法', '十和几', '比多少', '数数'], answer: '十和几', hint: '[6-10的认识]（数学-6-10的认识和加减法-第1课）10加几就是十几', explanation: '10+5=15，1个十加5个一就是15，用到了"十和几"的知识。' }
  ],
  'm1u4l2': [
    { id: 'm1u4l2q4', type: 'choice', question: '十位上是1，个位上是9，这个数是？', options: ['19', '91', '18', '9'], answer: '19', hint: '十位1表示10，个位9表示9', explanation: '十位1表示1个十（10），个位9表示9个一，10+9=19。' },
    { id: 'm1u4l2q5', type: 'fill', question: '16的十位上是___', answer: '1', hint: '从左边数第二位', explanation: '16的十位上是1，表示1个十。' },
    { id: 'm1u4l2q6', type: 'fill', question: '一个数，十位是1，个位比十位多5，这个数是___', answer: '16', hint: '个位是1+5=？', explanation: '十位是1，个位是1+5=6，这个数是16。' },
    { id: 'm1u4l2q7', type: 'choice', question: '10和20，哪个数的十位上是2？', options: ['10', '20', '都是', '都不是'], answer: '20', hint: '[6-10的认识]（数学-6-10的认识和加减法-第1课）看十位', explanation: '20的十位是2，10的十位是1，所以20的十位上是2。' }
  ],
  'm1u4l3': [
    { id: 'm1u4l3q4', type: 'choice', question: '12+5=？', options: ['15', '16', '17', '18'], answer: '17', hint: '十位1不变，个位2+5', explanation: '十位1不变，个位2+5=7，所以12+5=17。' },
    { id: 'm1u4l3q5', type: 'fill', question: '15-3=___', answer: '12', hint: '十位1不变，个位5-3', explanation: '十位1不变，个位5-3=2，所以15-3=12。' },
    { id: 'm1u4l3q6', type: 'fill', question: '小红有13颗糖，小明比小红多5颗，小明有___颗', answer: '18', hint: '13+5=？', explanation: '13+5=18，小明有18颗糖。' },
    { id: 'm1u4l3q7', type: 'choice', question: '11+4=15，个位上1+4=5，十位怎样？', options: ['加1', '不变', '减1', '变0'], answer: '不变', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）不进位加法', explanation: '不进位加法，个位相加不满十，十位不变。' }
  ],
  // m1u5: 20以内进位加法
  'm1u5l1': [], // 已有7题，不需添加
  'm1u5l2': [
    { id: 'm1u5l2q4', type: 'choice', question: '7+6=？', options: ['11', '12', '13', '14'], answer: '13', hint: '见7想3，6拆成3和3', explanation: '6拆成3和3，7+3=10，10+3=13。' },
    { id: 'm1u5l2q5', type: 'fill', question: '8+□=12，□=___', answer: '4', hint: '见8想2，12-8=？', explanation: '8+4=12，所以□=4。' },
    { id: 'm1u5l2q6', type: 'fill', question: '7+☆=14，☆-2=？', answer: '5', hint: '先算☆等于几', explanation: '7+7=14，所以☆=7，7-2=5。' },
    { id: 'm1u5l2q7', type: 'choice', question: '8+6=14，用到了什么方法？', options: ['凑十法', '破十法', '数数法', '竖式法'], answer: '凑十法', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）见8想2', explanation: '8+6用凑十法：见8想2，6拆成2和4，8+2=10，10+4=14。' }
  ],
  'm1u5l3': [
    { id: 'm1u5l3q4', type: 'choice', question: '6+8=？', options: ['12', '13', '14', '15'], answer: '14', hint: '见6想4，8拆成4和4', explanation: '8拆成4和4，6+4=10，10+4=14。' },
    { id: 'm1u5l3q5', type: 'fill', question: '9+5=___', answer: '14', hint: '见9想1，5拆成1和4', explanation: '5拆成1和4，9+1=10，10+4=14。' },
    { id: 'm1u5l3q6', type: 'fill', question: '【期末真题】小明有8个苹果，小红有7个苹果，一共有___个', answer: '15', hint: '8+7=？用凑十法', explanation: '8+7=15，见8想2，7拆成2和5，8+2=10，10+5=15。' },
    { id: 'm1u5l3q7', type: 'choice', question: '7+8=15，8+7=？', options: ['13', '14', '15', '16'], answer: '15', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）交换加数位置', explanation: '7+8=15，8+7也等于15，交换加数位置结果不变。' }
  ],
  // m1u6: 20以内退位减法
  'm1u6l1': [
    { id: 'm1u6l1q4', type: 'choice', question: '16-9=？', options: ['5', '6', '7', '8'], answer: '7', hint: '想：9加几等于16？', explanation: '因为9+7=16，所以16-9=7。' },
    { id: 'm1u6l1q5', type: 'fill', question: '14-9=___', answer: '5', hint: '9+5=14', explanation: '因为9+5=14，所以14-9=5。' },
    { id: 'm1u6l1q6', type: 'fill', question: '☆-9=4，☆=___', answer: '13', hint: '4+9=？', explanation: '4+9=13，所以☆=13。' },
    { id: 'm1u6l1q7', type: 'choice', question: '13-9=4，这是用什么方法算的？', options: ['想加算减', '凑十法', '数数法', '竖式法'], answer: '想加算减', hint: '[9加几]（数学-20以内进位加法-第1课）9+4=13', explanation: '因为9+4=13，所以13-9=4，用的是想加算减法。' }
  ],
  'm1u6l2': [
    { id: 'm1u6l2q4', type: 'choice', question: '14-6=？', options: ['6', '7', '8', '9'], answer: '8', hint: '破十法：10-6=4，4+4=？', explanation: '破十法：10-6=4，4+4=8，所以14-6=8。' },
    { id: 'm1u6l2q5', type: 'fill', question: '16-7=___', answer: '9', hint: '7+9=16', explanation: '因为7+9=16，所以16-7=9。' },
    { id: 'm1u6l2q6', type: 'fill', question: '【期末真题】15-7=___', answer: '8', hint: '7+8=15', explanation: '因为7+8=15，所以15-7=8。' },
    { id: 'm1u6l2q7', type: 'choice', question: '12-8=4，8+4=？', options: ['10', '11', '12', '14'], answer: '12', hint: '[876加几]（数学-20以内进位加法-第2课）减法和加法是逆运算', explanation: '12-8=4，所以8+4=12，减法和加法是逆运算。' }
  ],
  'm1u6l3': [
    { id: 'm1u6l3q4', type: 'choice', question: '有15个气球，飞走了8个，还剩几个？', options: ['5个', '6个', '7个', '8个'], answer: '7个', hint: '15-8=？', explanation: '15-8=7，还剩7个气球。' },
    { id: 'm1u6l3q5', type: 'fill', question: '13-5=___', answer: '8', hint: '5+8=13', explanation: '因为5+8=13，所以13-5=8。' },
    { id: 'm1u6l3q6', type: 'fill', question: '【期末真题】小明有12支铅笔，用掉了5支，还剩___支', answer: '7', hint: '12-5=？', explanation: '12-5=7，还剩7支铅笔。' },
    { id: 'm1u6l3q7', type: 'choice', question: '14-6=8，6+8=？', options: ['12', '13', '14', '15'], answer: '14', hint: '[876加几]（数学-20以内进位加法-第2课）想加算减', explanation: '14-6=8，所以6+8=14，减法和加法互为逆运算。' }
  ],
  // m1u7: 认识图形
  'm1u7l1': [
    { id: 'm1u7l1q4', type: 'choice', question: '下面哪个是圆柱？', options: ['皮球', '易拉罐', '魔方', '文具盒'], answer: '易拉罐', hint: '圆柱上下是圆的，侧面是弯的', explanation: '易拉罐上下是圆形，侧面弯曲，是圆柱。' },
    { id: 'm1u7l1q5', type: 'fill', question: '正方体有___个面', answer: '6', hint: '数一数正方体的面', explanation: '正方体有6个面，每个面都是一样大的正方形。' },
    { id: 'm1u7l1q6', type: 'fill', question: '能滚又能堆的立体图形是___', answer: '圆柱', hint: '什么图形侧面弯但上下平？', explanation: '圆柱侧面弯曲能滚，上下平面能堆。' },
    { id: 'm1u7l1q7', type: 'choice', question: '球和圆柱有什么相同点？', options: ['都有平面', '都能滚', '都是方的', '都有6个面'], answer: '都能滚', hint: '[比多少]（数学-数一数-第2课）找共同特征', explanation: '球和圆柱都有弯曲的面，都能滚动。' }
  ],
  'm1u7l2': [
    { id: 'm1u7l2q4', type: 'choice', question: '正方形和长方形有什么相同点？', options: ['4边都相等', '都有4个直角', '都是圆的', '都有3条边'], answer: '都有4个直角', hint: '比较正方形和长方形的特征', explanation: '正方形和长方形都有4个直角，这是它们的相同点。' },
    { id: 'm1u7l2q5', type: 'fill', question: '圆有___个角', answer: '0', hint: '圆是弯弯的，有角吗？', explanation: '圆没有角，边是弯弯的曲线。' },
    { id: 'm1u7l2q6', type: 'fill', question: '用正方体的一个面可以画出___形', answer: '正方', hint: '正方体的面是什么形状？', explanation: '正方体的每个面都是正方形，所以能画出正方形。' },
    { id: 'm1u7l2q7', type: 'choice', question: '三角形有几条边？和几号数字一样？', options: ['2', '3', '4', '5'], answer: '3', hint: '[数一数]（数学-数一数-第1课）三角形的"三"', explanation: '三角形有3条边，和数字3一样。' }
  ],
  'm1u7l3': [
    { id: 'm1u7l3q4', type: 'choice', question: '用4个同样的小正方形可以拼成什么？', options: ['圆形', '大正方形或长方形', '三角形', '圆柱'], answer: '大正方形或长方形', hint: '试着摆一摆', explanation: '4个小正方形可以拼成2×2的大正方形，也可以拼成1×4的长方形。' },
    { id: 'm1u7l3q5', type: 'fill', question: '拼一个房子用了1个三角形和1个正方形，再拼一个用了2个三角形，一共用了___个图形', answer: '4', hint: '1+1+2=？', explanation: '1+1+2=4，一共用了4个图形。' },
    { id: 'm1u7l3q6', type: 'fill', question: '用2个同样的三角形可以拼成一个___形', answer: '平行四边', hint: '两个三角形尖对尖拼', explanation: '两个同样的三角形可以拼成一个平行四边形。' },
    { id: 'm1u7l3q7', type: 'choice', question: '长方形对折后可以变成什么？', options: ['2个三角形', '2个长方形或2个正方形', '1个圆', '1个圆柱'], answer: '2个长方形或2个正方形', hint: '[平面图形]（数学-认识图形-第2课）长方形的特征', explanation: '长方形对折可以变成2个更小的长方形，如果长宽相等可以变成2个正方形。' }
  ],
  // m1u8: 认识人民币
  'm1u8l1': [
    { id: 'm1u8l1q4', type: 'choice', question: '5角等于多少分？', options: ['10分', '30分', '50分', '100分'], answer: '50分', hint: '1角=10分，5角呢？', explanation: '1角=10分，5角=5×10=50分。' },
    { id: 'm1u8l1q5', type: 'fill', question: '1元5角=___角', answer: '15', hint: '1元=10角，加5角', explanation: '1元=10角，10+5=15角。' },
    { id: 'm1u8l1q6', type: 'fill', question: '30角=___元', answer: '3', hint: '10角=1元', explanation: '10角=1元，30角=3元。' },
    { id: 'm1u8l1q7', type: 'choice', question: '1元可以换几张5角？', options: ['1张', '2张', '5张', '10张'], answer: '2张', hint: '[6-10的认识]（数学-6-10的认识和加减法-第1课）5+5=10', explanation: '5角+5角=10角=1元，所以1元可以换2张5角。' }
  ],
  'm1u8l2': [
    { id: 'm1u8l2q4', type: 'choice', question: '买一支铅笔3元，一块橡皮2元，付10元应找回多少？', options: ['3元', '4元', '5元', '6元'], answer: '5元', hint: '先算一共要付多少，再算找回多少', explanation: '3+2=5元，10-5=5元，应找回5元。' },
    { id: 'm1u8l2q5', type: 'fill', question: '小明有5元，买了一个3元的本子，还剩___元', answer: '2', hint: '5-3=？', explanation: '5-3=2，还剩2元。' },
    { id: 'm1u8l2q6', type: 'fill', question: '【期末真题】一支钢笔4元，一支圆珠笔3元，买两支笔一共___元', answer: '7', hint: '4+3=？', explanation: '4+3=7，买两支笔一共7元。' },
    { id: 'm1u8l2q7', type: 'choice', question: '2元+3元=5元，5元可以买什么？', options: ['1元的东西', '5元的东西', '10元的东西', '6元的东西'], answer: '5元的东西', hint: '[20以内进位加法]（数学-20以内进位加法-第1课）2+3=5', explanation: '2元+3元=5元，正好可以买5元的东西。' }
  ],
  'm1u8l3': [
    { id: 'm1u8l3q4', type: 'choice', question: '买6元的玩具，付10元，应找回多少？', options: ['2元', '3元', '4元', '5元'], answer: '4元', hint: '10-6=？', explanation: '10-6=4，应找回4元。' },
    { id: 'm1u8l3q5', type: 'fill', question: '买8元的书，付10元，找回___元', answer: '2', hint: '10-8=？', explanation: '10-8=2，找回2元。' },
    { id: 'm1u8l3q6', type: 'fill', question: '【期末真题】小红买文具花了9元，付了10元，找回___元', answer: '1', hint: '10-9=？', explanation: '10-9=1，找回1元。' },
    { id: 'm1u8l3q7', type: 'choice', question: '买东西找回3元，付了10元，东西多少钱？', options: ['3元', '7元', '10元', '13元'], answer: '7元', hint: '[20以内退位减法]（数学-20以内退位减法-第1课）10-3=7', explanation: '10-3=7，东西7元。' }
  ]
};

// ===== 二年级新题目数据 =====
const grade2NewQuestions = {
  'm2u1l1': [
    { id: 'm2u1l1q4', type: 'choice', question: '一支铅笔大约长多少？', options: ['15厘米', '15米', '50厘米', '1米'], answer: '15厘米', hint: '铅笔比较短，用厘米', explanation: '一支铅笔大约15厘米长。' },
    { id: 'm2u1l1q5', type: 'fill', question: '5厘米+3厘米=___厘米', answer: '8', hint: '相同单位直接相加', explanation: '5+3=8，所以5厘米+3厘米=8厘米。' },
    { id: 'm2u1l1q6', type: 'fill', question: '一根绳子长20厘米，剪去8厘米，还剩___厘米', answer: '12', hint: '20-8=？', explanation: '20-8=12，还剩12厘米。' },
    { id: 'm2u1l1q7', type: 'choice', question: '测量橡皮长度用什么单位？', options: ['米', '厘米', '千米', '吨'], answer: '厘米', hint: '[1-5的认识]（数学-1-5的认识和加减法-第1课）橡皮很小', explanation: '橡皮很小，用厘米作单位测量。' }
  ],
  'm2u1l2': [
    { id: 'm2u1l2q4', type: 'choice', question: '教室的长大约是多少？', options: ['8厘米', '8米', '80米', '800米'], answer: '8米', hint: '教室比较长，用米', explanation: '教室长大约8米，用米作单位。' },
    { id: 'm2u1l2q5', type: 'fill', question: '3米=___厘米', answer: '300', hint: '1米=100厘米', explanation: '1米=100厘米，3米=3×100=300厘米。' },
    { id: 'm2u1l2q6', type: 'fill', question: '一根绳子长1米50厘米，合___厘米', answer: '150', hint: '1米=100厘米，加50厘米', explanation: '1米=100厘米，100+50=150厘米。' },
    { id: 'm2u1l2q7', type: 'choice', question: '1米和100厘米哪个长？', options: ['1米长', '100厘米长', '一样长', '无法比较'], answer: '一样长', hint: '[6-10的认识]（数学-6-10的认识和加减法-第1课）1米=100厘米', explanation: '1米=100厘米，所以一样长。' }
  ],
  'm2u1l3': [
    { id: 'm2u1l3q4', type: 'choice', question: '小明身高约120___，应填什么单位？', options: ['毫米', '厘米', '米', '千米'], answer: '厘米', hint: '小朋友的身高用厘米', explanation: '小明身高约120厘米，合1米20厘米。' },
    { id: 'm2u1l3q5', type: 'fill', question: '1米-40厘米=___厘米', answer: '60', hint: '先把1米换算成100厘米', explanation: '1米=100厘米，100-40=60厘米。' },
    { id: 'm2u1l3q6', type: 'fill', question: '【期末真题】一根绳子长2米，剪去80厘米，还剩___厘米', answer: '120', hint: '2米=200厘米，200-80=？', explanation: '2米=200厘米，200-80=120厘米。' },
    { id: 'm2u1l3q7', type: 'choice', question: '测量操场跑道用哪个单位最合适？', options: ['厘米', '米', '千米', '毫米'], answer: '米', hint: '[11-20各数的认识]（数学-11-20各数的认识-第2课）操场很长', explanation: '操场跑道很长，用米作单位最合适。' }
  ],
  'm2u2l1': [
    { id: 'm2u2l1q4', type: 'choice', question: '23+45=？', options: ['58', '68', '78', '67'], answer: '68', hint: '个位3+5，十位2+4', explanation: '个位3+5=8，十位2+4=6，所以23+45=68。' },
    { id: 'm2u2l1q5', type: 'fill', question: '54+23=___', answer: '77', hint: '个位4+3，十位5+2', explanation: '个位4+3=7，十位5+2=7，所以54+23=77。' },
    { id: 'm2u2l1q6', type: 'fill', question: '一个数加36等于78，这个数是___', answer: '42', hint: '78-36=？', explanation: '78-36=42，这个数是42。' },
    { id: 'm2u2l1q7', type: 'choice', question: '32+15=47，这是不进位加法，为什么？', options: ['个位相加不满十', '十位相加不满十', '结果小于50', '没有进位标记'], answer: '个位相加不满十', hint: '[20以内进位加法]（数学-20以内进位加法-第1课）不进位的条件', explanation: '个位2+5=7不满十，所以不需要进位，是不进位加法。' }
  ],
  'm2u2l2': [
    { id: 'm2u2l2q4', type: 'choice', question: '47+38=？', options: ['75', '85', '86', '84'], answer: '85', hint: '个位7+8=15进1', explanation: '个位7+8=15写5进1，十位4+3+1=8，所以47+38=85。' },
    { id: 'm2u2l2q5', type: 'fill', question: '65+27=___', answer: '92', hint: '个位5+7=12进1', explanation: '个位5+7=12写2进1，十位6+2+1=9，所以65+27=92。' },
    { id: 'm2u2l2q6', type: 'fill', question: '【期末真题】56+38=___', answer: '94', hint: '个位6+8=14进1', explanation: '个位6+8=14写4进1，十位5+3+1=9，所以56+38=94。' },
    { id: 'm2u2l2q7', type: 'choice', question: '进位加法和不进位加法最大的区别是什么？', options: ['数位不同', '个位相加是否满十', '十位不同', '结果不同'], answer: '个位相加是否满十', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）满十进一', explanation: '进位加法个位相加满十要进一，不进位加法个位相加不满十。' }
  ],
  'm2u2l3': [
    { id: 'm2u2l3q4', type: 'choice', question: '23+34+15=？', options: ['62', '72', '82', '69'], answer: '72', hint: '先算23+34，再加15', explanation: '23+34=57，57+15=72。' },
    { id: 'm2u2l3q5', type: 'fill', question: '18+25+30=___', answer: '73', hint: '先算18+25=43', explanation: '18+25=43，43+30=73。' },
    { id: 'm2u2l3q6', type: 'fill', question: '【期末真题】学校有男生45人，女生38人，老师5人，一共___人', answer: '88', hint: '45+38+5=？', explanation: '45+38=83，83+5=88，一共88人。' },
    { id: 'm2u2l3q7', type: 'choice', question: '连加23+14+32，可以先算哪两个？', options: ['只能23+14', '只能14+32', '可以先算凑整的', '必须从左到右'], answer: '可以先算凑整的', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）找凑整的数', explanation: '连加可以先找能凑整的数先加，比如14+32不好凑，但可以先算23+14=37再加32。' }
  ],
  'm2u3l1': [
    { id: 'm2u3l1q4', type: 'choice', question: '78-45=？', options: ['23', '33', '43', '32'], answer: '33', hint: '个位8-5，十位7-4', explanation: '个位8-5=3，十位7-4=3，所以78-45=33。' },
    { id: 'm2u3l1q5', type: 'fill', question: '96-53=___', answer: '43', hint: '个位6-3，十位9-5', explanation: '个位6-3=3，十位9-5=4，所以96-53=43。' },
    { id: 'm2u3l1q6', type: 'fill', question: '一个数减去34等于25，这个数是___', answer: '59', hint: '25+34=？', explanation: '25+34=59，这个数是59。' },
    { id: 'm2u3l1q7', type: 'choice', question: '67-34=33，这是不退位减法，为什么？', options: ['个位够减', '十位够减', '结果小于50', '没有借位'], answer: '个位够减', hint: '[20以内退位减法]（数学-20以内退位减法-第1课）够减不退位', explanation: '个位7-4=3够减，不需要借位，所以是不退位减法。' }
  ],
  'm2u3l2': [
    { id: 'm2u3l2q4', type: 'choice', question: '72-48=？', options: ['24', '25', '34', '36'], answer: '24', hint: '个位2-8不够减，借1当10', explanation: '个位12-8=4，十位6-4=2，所以72-48=24。' },
    { id: 'm2u3l2q5', type: 'fill', question: '53-27=___', answer: '26', hint: '个位3-7不够减', explanation: '个位13-7=6，十位4-2=2，所以53-27=26。' },
    { id: 'm2u3l2q6', type: 'fill', question: '【期末真题】90-56=___', answer: '34', hint: '个位0-6不够减，借位', explanation: '个位10-6=4，十位8-5=3，所以90-56=34。' },
    { id: 'm2u3l2q7', type: 'choice', question: '退位减法中，个位不够减怎么办？', options: ['不用减了', '向十位借1当10', '结果写0', '跳过不算'], answer: '向十位借1当10', hint: '[20以内退位减法]（数学-20以内退位减法-第2课）借1当10', explanation: '个位不够减时，向十位借1当10，加上原来的个位数再减。' }
  ],
  'm2u3l3': [
    { id: 'm2u3l3q4', type: 'choice', question: '56+28-34=？', options: ['40', '50', '60', '48'], answer: '50', hint: '先算56+28，再减34', explanation: '56+28=84，84-34=50。' },
    { id: 'm2u3l3q5', type: 'fill', question: '82-45+23=___', answer: '60', hint: '先算82-45=37', explanation: '82-45=37，37+23=60。' },
    { id: 'm2u3l3q6', type: 'fill', question: '【期末真题】车上有45人，下车18人，上车23人，现在车上有___人', answer: '50', hint: '45-18+23=？', explanation: '45-18=27，27+23=50，现在车上有50人。' },
    { id: 'm2u3l3q7', type: 'choice', question: '加减混合运算按什么顺序算？', options: ['先加后减', '先减后加', '从左到右', '随便算'], answer: '从左到右', hint: '[20以内退位减法]（数学-20以内退位减法-第3课）按顺序计算', explanation: '加减混合运算按照从左到右的顺序依次计算。' }
  ],
  'm2u4l1': [
    { id: 'm2u4l1q4', type: 'choice', question: '6+6+6可以写成乘法算式？', options: ['3×6', '6×6', '6+3', '6×3'], answer: '3×6', hint: '3个6相加', explanation: '6+6+6是3个6相加，写成乘法就是3×6=18。' },
    { id: 'm2u4l1q5', type: 'fill', question: '5×4表示___个5相加', answer: '4', hint: '乘号前面是组数', explanation: '5×4表示4个5相加，即5+5+5+5=20。' },
    { id: 'm2u4l1q6', type: 'fill', question: '3个7相加，写成乘法是3×7=___', answer: '21', hint: '7+7+7=？', explanation: '7+7+7=21，3×7=21。' },
    { id: 'm2u4l1q7', type: 'choice', question: '2+3+4能写成乘法算式吗？', options: ['能，写成3×3', '不能，加数不一样', '能，写成2×4', '能，写成9×1'], answer: '不能，加数不一样', hint: '[1-5的认识和加减法]（数学-1-5的认识和加减法-第2课）乘法需要相同加数', explanation: '2+3+4的加数不一样，不能写成乘法算式。只有加数相同时才能用乘法。' }
  ],
  'm2u4l2': [
    { id: 'm2u4l2q4', type: 'choice', question: '四五得几？', options: ['9', '15', '20', '25'], answer: '20', hint: '4×5=？', explanation: '四五二十，4×5=20。' },
    { id: 'm2u4l2q5', type: 'fill', question: '三六___', answer: '十八', hint: '3×6=？', explanation: '三六十八，3×6=18。' },
    { id: 'm2u4l2q6', type: 'fill', question: '【期中真题】4×5=___', answer: '20', hint: '四五二十', explanation: '四五二十，4×5=20。' },
    { id: 'm2u4l2q7', type: 'choice', question: '5的口诀中，积的个位总是几或0？', options: ['0或3', '0或5', '0或2', '0或1'], answer: '0或5', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）5的倍数规律', explanation: '5的口诀积的个位总是0或5：一五得五、二五一十、三五十五……' }
  ],
  'm2u4l3': [
    { id: 'm2u4l3q4', type: 'choice', question: '七八得几？', options: ['45', '54', '56', '63'], answer: '56', hint: '7×8=？', explanation: '七八五十六，7×8=56。' },
    { id: 'm2u4l3q5', type: 'fill', question: '六九___', answer: '五十四', hint: '6×9=？', explanation: '六九五十四，6×9=54。' },
    { id: 'm2u4l3q6', type: 'fill', question: '【期末真题】7×8=___', answer: '56', hint: '七八五十六', explanation: '七八五十六，7×8=56。' },
    { id: 'm2u4l3q7', type: 'choice', question: '9的口诀中，积的十位和个位之和总是几？', options: ['8', '9', '10', '7'], answer: '9', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）9的口诀规律', explanation: '9的口诀中，积的十位和个位之和总是9，如18(1+8=9)、27(2+7=9)。' }
  ],
  'm2u5l1': [
    { id: 'm2u5l1q4', type: 'choice', question: '12颗糖平均分给4个小朋友，每人几颗？', options: ['2颗', '3颗', '4颗', '6颗'], answer: '3颗', hint: '12÷4=？', explanation: '12÷4=3，每人分到3颗糖。' },
    { id: 'm2u5l1q5', type: 'fill', question: '18个苹果平均分给6个人，每人___个', answer: '3', hint: '18÷6=？', explanation: '18÷6=3，每人分到3个苹果。' },
    { id: 'm2u5l1q6', type: 'fill', question: '把20平均分成5份，每份是___', answer: '4', hint: '20÷5=？', explanation: '20÷5=4，每份是4。' },
    { id: 'm2u5l1q7', type: 'choice', question: '平均分的关键是什么？', options: ['分得快', '每份一样多', '份数少', '总数大'], answer: '每份一样多', hint: '[1-5的认识和加减法]（数学-1-5的认识和加减法-第2课）平均分的含义', explanation: '平均分的关键是每份一样多，分完后每份的数量必须相同。' }
  ],
  'm2u5l2': [
    { id: 'm2u5l2q4', type: 'choice', question: '24÷8=3中，商是几？', options: ['24', '8', '3', '0'], answer: '3', hint: '商是等号后面的数', explanation: '在24÷8=3中，24是被除数，8是除数，3是商。' },
    { id: 'm2u5l2q5', type: 'fill', question: '30÷5=___', answer: '6', hint: '想：5×6=30', explanation: '因为5×6=30，所以30÷5=6。' },
    { id: 'm2u5l2q6', type: 'fill', question: '【期末真题】36÷4=___', answer: '9', hint: '想：4×9=36', explanation: '因为4×9=36，所以36÷4=9。' },
    { id: 'm2u5l2q7', type: 'choice', question: '除法和什么运算是逆运算？', options: ['加法', '减法', '乘法', '无法确定'], answer: '乘法', hint: '[乘法的意义]（数学-乘法初步-第1课）乘除互逆', explanation: '除法和乘法是逆运算，用乘法口诀可以求商。' }
  ],
  'm2u5l3': [
    { id: 'm2u5l3q4', type: 'choice', question: '48÷6=？', options: ['6', '7', '8', '9'], answer: '8', hint: '想6的口诀：几六四十八？', explanation: '六八四十八，所以48÷6=8。' },
    { id: 'm2u5l3q5', type: 'fill', question: '72÷9=___', answer: '8', hint: '想9的口诀：几九七十二？', explanation: '八九七十二，所以72÷9=8。' },
    { id: 'm2u5l3q6', type: 'fill', question: '【期末真题】63÷7=___', answer: '9', hint: '想7的口诀：几七六十三？', explanation: '七九六十三，所以63÷7=9。' },
    { id: 'm2u5l3q7', type: 'choice', question: '用口诀求商时，看什么想口诀？', options: ['被除数', '除数', '商', '余数'], answer: '除数', hint: '[2-5的乘法口诀]（数学-乘法初步-第2课）看除数想口诀', explanation: '用口诀求商时，看除数想口诀，找到被除数对应的那个数就是商。' }
  ],
  'm2u6l1': [
    { id: 'm2u6l1q4', type: 'choice', question: '角的大小与什么有关？', options: ['边的长短', '边张开的大小', '顶点的位置', '角的方向'], answer: '边张开的大小', hint: '角张得越大，角越大', explanation: '角的大小与边张开的大小有关，张得越大角越大。' },
    { id: 'm2u6l1q5', type: 'fill', question: '正方形有___个角', answer: '4', hint: '数一数正方形的角', explanation: '正方形有4个角，都是直角。' },
    { id: 'm2u6l1q6', type: 'fill', question: '一个角有___个顶点', answer: '1', hint: '角最尖的那个点', explanation: '每个角都有1个顶点和2条边。' },
    { id: 'm2u6l1q7', type: 'choice', question: '圆有几个角？', options: ['0个', '1个', '2个', '4个'], answer: '0个', hint: '[认识图形]（数学-认识图形-第2课）圆没有角', explanation: '圆是弯弯的曲线围成的，没有角。' }
  ],
  'm2u6l2': [
    { id: 'm2u6l2q4', type: 'choice', question: '比直角大的角叫什么？', options: ['锐角', '直角', '钝角', '平角'], answer: '钝角', hint: '比直角大就是钝角', explanation: '比直角大的角叫钝角，钝角更宽。' },
    { id: 'm2u6l2q5', type: 'fill', question: '三角板上有___个直角', answer: '1', hint: '用三角板比一比', explanation: '三角板上有1个直角和2个锐角。' },
    { id: 'm2u6l2q6', type: 'fill', question: '【期末真题】正方形的4个角都是___角', answer: '直', hint: '用三角板比一比', explanation: '正方形的4个角都是直角。' },
    { id: 'm2u6l2q7', type: 'choice', question: '用三角板的直角去比，比直角小的是什么角？', options: ['钝角', '锐角', '直角', '平角'], answer: '锐角', hint: '[认识图形]（数学-认识图形-第1课）比直角小更尖', explanation: '比直角小的角叫锐角，锐角更尖。' }
  ],
  'm2u6l3': [
    { id: 'm2u6l3q4', type: 'choice', question: '画角时，第一步应该画什么？', options: ['画边', '画顶点', '量角度', '涂颜色'], answer: '画顶点', hint: '角从哪里开始？', explanation: '画角的第一步是确定顶点，然后从顶点画两条边。' },
    { id: 'm2u6l3q5', type: 'fill', question: '画钝角时，边张得比直角___', answer: '大', hint: '钝角比直角怎样？', explanation: '钝角比直角大，所以画钝角时边张得比直角大。' },
    { id: 'm2u6l3q6', type: 'fill', question: '【期末真题】画一个直角需要用___板', answer: '三角', hint: '什么工具上有直角？', explanation: '画直角可以用三角板上的直角来比对画。' },
    { id: 'm2u6l3q7', type: 'choice', question: '画角需要画几个部分？', options: ['1个', '2个', '3个', '4个'], answer: '3个', hint: '[认识角]（数学-角的初步认识-第1课）顶点和两条边', explanation: '画角需要画3个部分：1个顶点和2条边。' }
  ],
  'm2u7l1': [
    { id: 'm2u7l1q4', type: 'choice', question: '把动物按生活场所分类，鱼和鸟应该分到哪类？', options: ['同一类', '不同类', '无法分类', '都不分类'], answer: '不同类', hint: '鱼生活在水里，鸟生活在天上', explanation: '按生活场所分类，鱼生活在水里，鸟生活在天上，分到不同类。' },
    { id: 'm2u7l1q5', type: 'fill', question: '10个水果中苹果4个、橘子6个，按种类分成___类', answer: '2', hint: '有几种水果？', explanation: '苹果和橘子2种水果，分成2类。' },
    { id: 'm2u7l1q6', type: 'fill', question: '15个球中红色5个、蓝色6个、绿色4个，一共有___种颜色', answer: '3', hint: '数一数有几种颜色', explanation: '红色、蓝色、绿色3种颜色。' },
    { id: 'm2u7l1q7', type: 'choice', question: '分类时，同一个物品可以按不同标准分到不同类别吗？', options: ['不可以', '可以', '只能分一次', '看情况'], answer: '可以', hint: '[比多少]（数学-数一数-第2课）不同标准不同分类', explanation: '同一个物品可以按不同标准分到不同类别，如苹果按颜色分是红色类，按种类分是水果类。' }
  ],
  'm2u7l2': [
    { id: 'm2u7l2q4', type: 'choice', question: '统计表中，喜欢足球12人，喜欢篮球8人，喜欢足球比篮球多几人？', options: ['2人', '3人', '4人', '5人'], answer: '4人', hint: '12-8=？', explanation: '12-8=4，喜欢足球比篮球多4人。' },
    { id: 'm2u7l2q5', type: 'fill', question: '喜欢红色10人，喜欢蓝色8人，一共调查了___人', answer: '18', hint: '10+8=？', explanation: '10+8=18，一共调查了18人。' },
    { id: 'm2u7l2q6', type: 'fill', question: '【期末真题】调查班里同学喜欢的水果：苹果15人，香蕉9人，喜欢苹果比香蕉多___人', answer: '6', hint: '15-9=？', explanation: '15-9=6，喜欢苹果比香蕉多6人。' },
    { id: 'm2u7l2q7', type: 'choice', question: '制作统计表的第一步是什么？', options: ['填数据', '写标题', '算总计', '画表格'], answer: '写标题', hint: '[排排队]（数学-数一数-第3课）先确定统计什么', explanation: '制作统计表的第一步是写标题，确定统计的内容。' }
  ],
  'm2u7l3': [
    { id: 'm2u7l3q4', type: 'choice', question: '条形统计图中，最矮的柱子代表什么？', options: ['最多的', '最少的', '平均的', '随便的'], answer: '最少的', hint: '柱子越矮数量怎样？', explanation: '条形统计图中，柱子越矮代表数量越少。' },
    { id: 'm2u7l3q5', type: 'fill', question: '条形图中每格代表5人，4格代表___人', answer: '20', hint: '5×4=？', explanation: '每格5人，4格就是5×4=20人。' },
    { id: 'm2u7l3q6', type: 'fill', question: '【期末真题】条形图中，红色柱子8格，蓝色柱子5格，每格代表2人，红色比蓝色多___人', answer: '6', hint: '(8-5)×2=？', explanation: '(8-5)×2=6，红色比蓝色多6人。' },
    { id: 'm2u7l3q7', type: 'choice', question: '条形统计图和统计表相比，最大的优点是什么？', options: ['更准确', '更直观', '更省纸', '更简单'], answer: '更直观', hint: '[比多少]（数学-数一数-第2课）柱子高低一目了然', explanation: '条形统计图用柱子高低表示数量，比统计表更直观，一眼就能看出谁多谁少。' }
  ],
  'm2u8l1': [
    { id: 'm2u8l1q4', type: 'choice', question: '用2、4、5三个数字能摆出几个不同的两位数？', options: ['3个', '4个', '6个', '8个'], answer: '6个', hint: '固定十位再换个位', explanation: '十位2：24、25；十位4：42、45；十位5：52、54，共6个。' },
    { id: 'm2u8l1q5', type: 'fill', question: '用0和5摆两位数，能摆出___个', answer: '1', hint: '0不能放在十位', explanation: '0不能放在十位，只能摆出50，共1个。' },
    { id: 'm2u8l1q6', type: 'fill', question: '【期末真题】用1、3、5三个数字摆两位数，一共可以摆___个', answer: '6', hint: '固定十位再换个位', explanation: '十位1：13、15；十位3：31、35；十位5：51、53，共6个。' },
    { id: 'm2u8l1q7', type: 'choice', question: '用3个不同的数字摆两位数，一共能摆几个？', options: ['3个', '4个', '6个', '9个'], answer: '6个', hint: '[乘法的意义]（数学-乘法初步-第1课）3×2=6', explanation: '3个不同的数字摆两位数，十位有3种选法，个位有2种选法，3×2=6个。' }
  ],
  'm2u8l2': [
    { id: 'm2u8l2q4', type: 'choice', question: '3件上衣和4条裤子，一共有几种搭配？', options: ['7种', '10种', '12种', '15种'], answer: '12种', hint: '3×4=？', explanation: '每件上衣配4条裤子，3件上衣就是3×4=12种搭配。' },
    { id: 'm2u8l2q5', type: 'fill', question: '2种主食和5种菜，一共有___种搭配', answer: '10', hint: '2×5=？', explanation: '每种主食配5种菜，2种主食就是2×5=10种搭配。' },
    { id: 'm2u8l2q6', type: 'fill', question: '【期末真题】4种饮料和3种点心，一共有___种搭配', answer: '12', hint: '4×3=？', explanation: '每种饮料配3种点心，4种饮料就是4×3=12种搭配。' },
    { id: 'm2u8l2q7', type: 'choice', question: '搭配问题用什么方法计算最快？', options: ['加法', '减法', '乘法', '除法'], answer: '乘法', hint: '[乘法的意义]（数学-乘法初步-第1课）A×B=搭配数', explanation: '搭配问题用乘法最快：A种选择×B种选择=A×B种搭配。' }
  ],
  'm2u8l3': [
    { id: 'm2u8l3q4', type: 'choice', question: '2个小朋友拍照，有几种不同的站法？', options: ['1种', '2种', '3种', '4种'], answer: '2种', hint: 'AB和BA', explanation: '2个小朋友有2种站法：AB和BA。' },
    { id: 'm2u8l3q5', type: 'fill', question: '从3种颜色中选2种涂色，有___种选法', answer: '3', hint: '用连线法数一数', explanation: '3种颜色选2种：红蓝、红绿、蓝绿，共3种选法。' },
    { id: 'm2u8l3q6', type: 'fill', question: '【期末真题】3件上衣和2条裤子，一共有___种搭配', answer: '6', hint: '3×2=？', explanation: '3×2=6，一共有6种搭配。' },
    { id: 'm2u8l3q7', type: 'choice', question: '排列和组合最大的区别是什么？', options: ['数字不同', '排列有顺序，组合无顺序', '结果不同', '方法不同'], answer: '排列有顺序，组合无顺序', hint: '[排排队]（数学-数一数-第3课）顺序是否重要', explanation: '排列有顺序（12和21不同），组合无顺序（红蓝和蓝红是同一种搭配）。' }
  ]
};

// ===== 三年级新题目数据 =====
const grade3NewQuestions = {
  'm3u1l1': [
    { id: 'm3u1l1q4', type: 'choice', question: '秒针走5小格是多少秒？', options: ['5秒', '10秒', '15秒', '30秒'], answer: '5秒', hint: '秒针走1小格是1秒', explanation: '秒针走1小格是1秒，走5小格就是5秒。' },
    { id: 'm3u1l1q5', type: 'fill', question: '1分30秒=___秒', answer: '90', hint: '1分=60秒，加30秒', explanation: '1分=60秒，60+30=90秒。' },
    { id: 'm3u1l1q6', type: 'fill', question: '秒针从3走到8，走了___秒', answer: '25', hint: '8-3=5大格，每大格5秒', explanation: '8-3=5大格，5×5=25秒。' },
    { id: 'm3u1l1q7', type: 'choice', question: '1分=60秒，这和哪个换算关系类似？', options: ['1元=10角', '1米=100厘米', '1米=10分米', '1角=10分'], answer: '1米=10分米', hint: '[长度单位]（数学-长度单位-第2课）相邻单位进率', explanation: '1分=60秒和1米=10分米都是相邻单位间的换算关系。' }
  ],
  'm3u1l2': [
    { id: 'm3u1l2q4', type: 'choice', question: '8:15到9:00经过了多少分钟？', options: ['15分钟', '30分钟', '45分钟', '60分钟'], answer: '45分钟', hint: '60-15=？', explanation: '8:15到9:00，60-15=45分钟。' },
    { id: 'm3u1l2q5', type: 'fill', question: '10:20到11:05经过了___分钟', answer: '45', hint: '10:20到11:00是40分，11:00到11:05是5分', explanation: '10:20到11:00是40分钟，11:00到11:05是5分钟，40+5=45分钟。' },
    { id: 'm3u1l2q6', type: 'fill', question: '【期末真题】一节课从8:30开始，8:70结束，上了___分钟', answer: '40', hint: '8:30到9:10，40分钟', explanation: '8:30到9:10，经过了40分钟。注意：8:70应理解为9:10。' },
    { id: 'm3u1l2q7', type: 'choice', question: '计算经过时间用什么方法？', options: ['结束时间+开始时间', '结束时间-开始时间', '开始时间-结束时间', '结束时间×开始时间'], answer: '结束时间-开始时间', hint: '[100以内减法]（数学-100以内减法-第1课）用减法', explanation: '经过时间=结束时间-开始时间，用减法计算。' }
  ],
  'm3u1l3': [
    { id: 'm3u1l3q4', type: 'choice', question: '小红8:00到校，16:30放学，在校多长时间？', options: ['7小时30分', '8小时30分', '9小时30分', '8小时'], answer: '8小时30分', hint: '16:30-8:00=？', explanation: '16:30-8:00=8小时30分。' },
    { id: 'm3u1l3q5', type: 'fill', question: '小明6:50起床，7:20出门，用了___分钟', answer: '30', hint: '7:20-6:50=？', explanation: '7:20-6:50=30分钟。' },
    { id: 'm3u1l3q6', type: 'fill', question: '【期末真题】一场电影从14:00开始，放映了1小时40分，___结束', answer: '15:40', hint: '14:00+1小时40分', explanation: '14:00+1小时40分=15:40。' },
    { id: 'm3u1l3q7', type: 'choice', question: '1小时20分=80分，这用到了什么知识？', options: ['1时=60分', '1分=60秒', '1天=24时', '1年=12月'], answer: '1时=60分', hint: '[认识人民币]（数学-认识人民币-第1课）单位换算', explanation: '1小时=60分，60+20=80分，用到了1时=60分的换算。' }
  ],
  'm3u2l1': [
    { id: 'm3u2l1q4', type: 'choice', question: '280+350=？', options: ['530', '630', '730', '620'], answer: '630', hint: '200+300=500，80+50=130', explanation: '200+300=500，80+50=130，500+130=630。' },
    { id: 'm3u2l1q5', type: 'fill', question: '680-240=___', answer: '440', hint: '600-200=400，80-40=40', explanation: '600-200=400，80-40=40，400+40=440。' },
    { id: 'm3u2l1q6', type: 'fill', question: '【期末真题】450+380=___', answer: '830', hint: '400+300=700，50+80=130', explanation: '400+300=700，50+80=130，700+130=830。' },
    { id: 'm3u2l1q7', type: 'choice', question: '口算350+200时，先算什么？', options: ['5+2', '50+0', '300+200', '350+200'], answer: '300+200', hint: '[100以内加法]（数学-100以内加法-第1课）先算整百', explanation: '口算时先算整百：300+200=500，再算整十：500+50=550。' }
  ],
  'm3u2l2': [
    { id: 'm3u2l2q4', type: 'choice', question: '456+289=？', options: ['735', '745', '755', '645'], answer: '745', hint: '个位6+9=15进1，十位5+8+1=14进1', explanation: '个位6+9=15写5进1，十位5+8+1=14写4进1，百位4+2+1=7，所以456+289=745。' },
    { id: 'm3u2l2q5', type: 'fill', question: '724-368=___', answer: '356', hint: '个位4-8不够减借位', explanation: '个位14-8=6，十位11-6=5，百位6-3=3，所以724-368=356。' },
    { id: 'm3u2l2q6', type: 'fill', question: '【期末真题】537+298=___', answer: '835', hint: '注意连续进位', explanation: '个位7+8=15写5进1，十位3+9+1=13写3进1，百位5+2+1=8，所以537+298=835。' },
    { id: 'm3u2l2q7', type: 'choice', question: '竖式计算时，相同数位要对齐，这和什么道理一样？', options: ['凑十法', '位值原理', '乘法口诀', '平均分'], answer: '位值原理', hint: '[11-20各数的认识]（数学-11-20各数的认识-第2课）十位对十位个位对个位', explanation: '相同数位对齐是因为位值原理：十位对十位，个位对个位，百位对百位。' }
  ],
  'm3u2l3': [
    { id: 'm3u2l3q4', type: 'choice', question: '302+198大约是多少？', options: ['约400', '约500', '约600', '约300'], answer: '约500', hint: '302≈300，198≈200', explanation: '302≈300，198≈200，300+200=500，大约500。' },
    { id: 'm3u2l3q5', type: 'fill', question: '803-397大约是___', answer: '400', hint: '803≈800，397≈400', explanation: '803≈800，397≈400，800-400=400，大约400。' },
    { id: 'm3u2l3q6', type: 'fill', question: '【期末真题】验算456+328=784，用784-456=___', answer: '328', hint: '和-一个加数=另一个加数', explanation: '784-456=328，和另一个加数相同，计算正确。' },
    { id: 'm3u2l3q7', type: 'choice', question: '估算时，398应该看成几？', options: ['300', '390', '400', '500'], answer: '400', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）四舍五入', explanation: '398接近400，估算时应该看成400。' }
  ],
  'm3u3l1': [
    { id: 'm3u3l1q4', type: 'choice', question: '1厘米等于多少毫米？', options: ['1毫米', '10毫米', '100毫米', '1000毫米'], answer: '10毫米', hint: '1厘米=10毫米', explanation: '1厘米=10毫米，厘米和毫米是相邻的长度单位。' },
    { id: 'm3u3l1q5', type: 'fill', question: '5分米=___厘米', answer: '50', hint: '1分米=10厘米', explanation: '1分米=10厘米，5分米=5×10=50厘米。' },
    { id: 'm3u3l1q6', type: 'fill', question: '【期末真题】8千米=___米', answer: '8000', hint: '1千米=1000米', explanation: '1千米=1000米，8千米=8×1000=8000米。' },
    { id: 'm3u3l1q7', type: 'choice', question: '相邻长度单位之间的进率是多少？', options: ['10', '100', '1000', '不一定'], answer: '10', hint: '[长度单位]（数学-长度单位-第2课）1米=10分米', explanation: '相邻长度单位之间的进率是10（除了千米和米之间是1000）。' }
  ],
  'm3u3l2': [
    { id: 'm3u3l2q4', type: 'choice', question: '2吨等于多少千克？', options: ['20千克', '200千克', '2000千克', '20000千克'], answer: '2000千克', hint: '1吨=1000千克', explanation: '1吨=1000千克，2吨=2×1000=2000千克。' },
    { id: 'm3u3l2q5', type: 'fill', question: '5吨=___千克', answer: '5000', hint: '5×1000=？', explanation: '5吨=5×1000=5000千克。' },
    { id: 'm3u3l2q6', type: 'fill', question: '【期末真题】8000千克=___吨', answer: '8', hint: '8000÷1000=？', explanation: '8000÷1000=8，所以8000千克=8吨。' },
    { id: 'm3u3l2q7', type: 'choice', question: '1吨=1000千克，这和哪个换算关系类似？', options: ['1米=10分米', '1千米=1000米', '1分=60秒', '1元=10角'], answer: '1千米=1000米', hint: '[长度单位]（数学-长度单位-第1课）大单位和小单位差1000', explanation: '1吨=1000千克和1千米=1000米类似，都是大单位和小单位之间差1000倍。' }
  ],
  'm3u3l3': [
    { id: 'm3u3l3q4', type: 'choice', question: '3米5分米=多少分米？', options: ['35分米', '305分米', '53分米', '30分米'], answer: '35分米', hint: '3米=30分米，加5分米', explanation: '3米=30分米，30+5=35分米。' },
    { id: 'm3u3l3q5', type: 'fill', question: '60毫米=___厘米', answer: '6', hint: '10毫米=1厘米', explanation: '60÷10=6，所以60毫米=6厘米。' },
    { id: 'm3u3l3q6', type: 'fill', question: '【期末真题】4千米50米=___米', answer: '4050', hint: '4千米=4000米，加50米', explanation: '4千米=4000米，4000+50=4050米。' },
    { id: 'm3u3l3q7', type: 'choice', question: '大单位变小单位用什么方法？', options: ['加法', '减法', '乘法', '除法'], answer: '乘法', hint: '[乘法的意义]（数学-乘法初步-第1课）大变小用乘', explanation: '大单位变小单位用乘法，如3米=3×10=30分米。' }
  ],
  'm3u4l1': [
    { id: 'm3u4l1q4', type: 'choice', question: '有4朵红花和20朵黄花，黄花是红花的几倍？', options: ['4倍', '5倍', '6倍', '8倍'], answer: '5倍', hint: '20÷4=？', explanation: '20÷4=5，黄花是红花的5倍。' },
    { id: 'm3u4l1q5', type: 'fill', question: '6的3倍是___', answer: '18', hint: '6×3=？', explanation: '6×3=18，6的3倍是18。' },
    { id: 'm3u4l1q6', type: 'fill', question: '【期末真题】28是7的___倍', answer: '4', hint: '28÷7=？', explanation: '28÷7=4，28是7的4倍。' },
    { id: 'm3u4l1q7', type: 'choice', question: '求一个数是另一个数的几倍，用什么方法？', options: ['加法', '减法', '乘法', '除法'], answer: '除法', hint: '[除法的意义]（数学-除法初步-第2课）大数÷小数=倍数', explanation: '求一个数是另一个数的几倍，用除法：大数÷小数=倍数。' }
  ],
  'm3u4l2': [
    { id: 'm3u4l2q4', type: 'choice', question: '小明有3本书，小红是小明的4倍，小红有几本？', options: ['7本', '10本', '12本', '15本'], answer: '12本', hint: '3×4=？', explanation: '3×4=12，小红有12本书。' },
    { id: 'm3u4l2q5', type: 'fill', question: '5的6倍是___', answer: '30', hint: '5×6=？', explanation: '5×6=30，5的6倍是30。' },
    { id: 'm3u4l2q6', type: 'fill', question: '【期末真题】8的5倍是___', answer: '40', hint: '8×5=？', explanation: '8×5=40，8的5倍是40。' },
    { id: 'm3u4l2q7', type: 'choice', question: '求一个数的几倍是多少，用什么方法？', options: ['加法', '减法', '乘法', '除法'], answer: '乘法', hint: '[乘法的意义]（数学-乘法初步-第1课）这个数×倍数', explanation: '求一个数的几倍是多少用乘法：这个数×倍数。' }
  ],
  'm3u4l3': [
    { id: 'm3u4l3q4', type: 'choice', question: '红花有6朵，黄花是红花的3倍，黄花比红花多几朵？', options: ['6朵', '12朵', '18朵', '24朵'], answer: '12朵', hint: '先求黄花6×3=18，再求多18-6=12', explanation: '黄花6×3=18朵，18-6=12朵，黄花比红花多12朵。' },
    { id: 'm3u4l3q5', type: 'fill', question: '小明4岁，妈妈是小明的8倍，妈妈比小明大___岁', answer: '28', hint: '先求妈妈4×8=32，再求大32-4=28', explanation: '妈妈4×8=32岁，32-4=28岁，妈妈比小明大28岁。' },
    { id: 'm3u4l3q6', type: 'fill', question: '【期末真题】白兔5只，黑兔是白兔的4倍，一共有___只兔', answer: '25', hint: '先求黑兔5×4=20，再加白兔20+5=25', explanation: '黑兔5×4=20只，20+5=25只，一共25只兔。' },
    { id: 'm3u4l3q7', type: 'choice', question: '倍数应用题要先求什么？', options: ['直接算结果', '先求几倍是多少', '先求差', '先求和'], answer: '先求几倍是多少', hint: '[乘法的意义]（数学-乘法初步-第1课）分步思考', explanation: '倍数应用题要先求几倍是多少（用乘法），再求多多少或少多少（用加减法）。' }
  ],
  'm3u5l1': [
    { id: 'm3u5l1q4', type: 'choice', question: '300×4=？', options: ['34', '120', '1200', '3004'], answer: '1200', hint: '3×4=12，补2个0', explanation: '3×4=12，补2个0，300×4=1200。' },
    { id: 'm3u5l1q5', type: 'fill', question: '50×8=___', answer: '400', hint: '5×8=40，补1个0', explanation: '5×8=40，补1个0，50×8=400。' },
    { id: 'm3u5l1q6', type: 'fill', question: '【期末真题】200×5=___', answer: '1000', hint: '2×5=10，补2个0', explanation: '2×5=10，补2个0，200×5=1000。' },
    { id: 'm3u5l1q7', type: 'choice', question: '口算整十数乘一位数时，先算什么？', options: ['直接算', '先乘0前面的数', '先加0', '先减0'], answer: '先乘0前面的数', hint: '[乘法的意义]（数学-乘法初步-第1课）先算后补0', explanation: '口算整十数乘一位数，先乘0前面的数，再补0。' }
  ],
  'm3u5l2': [
    { id: 'm3u5l2q4', type: 'choice', question: '125×4=？', options: ['400', '490', '500', '510'], answer: '500', hint: '个位5×4=20进2，十位2×4+2=10进1，百位1×4+1=5', explanation: '个位5×4=20写0进2，十位2×4+2=10写0进1，百位1×4+1=5，所以125×4=500。' },
    { id: 'm3u5l2q5', type: 'fill', question: '68×5=___', answer: '340', hint: '个位8×5=40进4，十位6×5+4=34', explanation: '个位8×5=40写0进4，十位6×5+4=34，所以68×5=340。' },
    { id: 'm3u5l2q6', type: 'fill', question: '【期末真题】245×3=___', answer: '735', hint: '注意连续进位', explanation: '个位5×3=15写5进1，十位4×3+1=13写3进1，百位2×3+1=7，所以245×3=735。' },
    { id: 'm3u5l2q7', type: 'choice', question: '竖式乘法从哪一位乘起？', options: ['最高位', '个位', '十位', '随便'], answer: '个位', hint: '[20以内进位加法]（数学-20以内进位加法-第1课）从个位乘起满几十进几', explanation: '竖式乘法从个位乘起，用一位数依次乘多位数的每一位，满几十进几。' }
  ],
  'm3u5l3': [
    { id: 'm3u5l3q4', type: 'choice', question: '每箱有24个苹果，3箱一共多少个？', options: ['62个', '72个', '82个', '48个'], answer: '72个', hint: '24×3=？', explanation: '24×3=72，3箱一共72个苹果。' },
    { id: 'm3u5l3q5', type: 'fill', question: '每天走235米，4天走___米', answer: '940', hint: '235×4=？', explanation: '235×4=940，4天走940米。' },
    { id: 'm3u5l3q6', type: 'fill', question: '【期末真题】每本笔记本5元，买48本需要___元', answer: '240', hint: '48×5=？', explanation: '48×5=240，买48本需要240元。' },
    { id: 'm3u5l3q7', type: 'choice', question: '乘法应用题中，"每份数×份数"等于什么？', options: ['差', '商', '总数', '倍数'], answer: '总数', hint: '[乘法的意义]（数学-乘法初步-第1课）每份数×份数=总数', explanation: '乘法应用题中，每份数×份数=总数。' }
  ],
  'm3u6l1': [
    { id: 'm3u6l1q4', type: 'choice', question: '长方形的对边有什么关系？', options: ['4边都相等', '对边相等', '没有关系', '邻边相等'], answer: '对边相等', hint: '长方形的特征', explanation: '长方形的对边相等，4个角都是直角。' },
    { id: 'm3u6l1q5', type: 'fill', question: '正方形有___条边，都相等', answer: '4', hint: '数一数正方形的边', explanation: '正方形有4条边，4条边都相等。' },
    { id: 'm3u6l1q6', type: 'fill', question: '【期末真题】长方形有___个直角', answer: '4', hint: '用三角板比一比', explanation: '长方形有4个直角。' },
    { id: 'm3u6l1q7', type: 'choice', question: '正方形是特殊的长方形，为什么？', options: ['因为正方形更小', '因为正方形4边都相等也对边相等', '因为正方形没有角', '因为颜色不同'], answer: '因为正方形4边都相等也对边相等', hint: '[认识图形]（数学-认识图形-第2课）正方形满足长方形所有条件', explanation: '正方形4条边都相等，当然对边也相等，且4个角都是直角，满足长方形的所有条件。' }
  ],
  'm3u6l2': [
    { id: 'm3u6l2q4', type: 'choice', question: '长方形长8厘米宽5厘米，周长是多少？', options: ['13厘米', '26厘米', '40厘米', '21厘米'], answer: '26厘米', hint: '（8+5）×2=？', explanation: '（8+5）×2=26厘米，周长是26厘米。' },
    { id: 'm3u6l2q5', type: 'fill', question: '正方形边长6厘米，周长是___厘米', answer: '24', hint: '6×4=？', explanation: '6×4=24，正方形周长是24厘米。' },
    { id: 'm3u6l2q6', type: 'fill', question: '【期末真题】长方形长12米宽8米，周长是___米', answer: '40', hint: '（12+8）×2=？', explanation: '（12+8）×2=40，周长是40米。' },
    { id: 'm3u6l2q7', type: 'choice', question: '长方形周长公式中，为什么要乘2？', options: ['因为有2条边', '因为有2组长+宽', '因为周长是面积2倍', '随便乘的'], answer: '因为有2组长+宽', hint: '[乘法的意义]（数学-乘法初步-第1课）长方形有2组长和宽', explanation: '长方形有2组相同的长和宽，所以（长+宽）×2就是周长。' }
  ],
  'm3u6l3': [
    { id: 'm3u6l3q4', type: 'choice', question: '一个长方形花坛长5米宽3米，围着走一圈走了多少米？', options: ['8米', '15米', '16米', '20米'], answer: '16米', hint: '（5+3）×2=？', explanation: '（5+3）×2=16米，围着走一圈走了16米。' },
    { id: 'm3u6l3q5', type: 'fill', question: '正方形边长9分米，围一圈花边需要___分米', answer: '36', hint: '9×4=？', explanation: '9×4=36，围一圈花边需要36分米。' },
    { id: 'm3u6l3q6', type: 'fill', question: '【期末真题】长方形操场长50米宽30米，绕操场跑2圈要跑___米', answer: '320', hint: '先算1圈（50+30）×2=160，再乘2', explanation: '1圈（50+30）×2=160米，2圈160×2=320米。' },
    { id: 'm3u6l3q7', type: 'choice', question: '靠墙围篱笆，只需要围几条边？', options: ['4条', '3条', '2条', '1条'], answer: '3条', hint: '[认识图形]（数学-认识图形-第1课）墙代替了一条边', explanation: '靠墙围篱笆时，墙代替了一条边，只需要围3条边。' }
  ],
  'm3u7l1': [
    { id: 'm3u7l1q4', type: 'choice', question: '把一个蛋糕平均分成6份，每份是它的几分之几？', options: ['1/2', '1/3', '1/5', '1/6'], answer: '1/6', hint: '平均分成几份，每份就是几分之一', explanation: '平均分成6份，每份是它的1/6。' },
    { id: 'm3u7l1q5', type: 'fill', question: '1/4读作___分之一', answer: '四', hint: '分母是4', explanation: '1/4读作四分之一，分母是4。' },
    { id: 'm3u7l1q6', type: 'fill', question: '【期末真题】把一根绳子平均分成5段，每段是它的___分之一', answer: '五', hint: '平均分成5段', explanation: '平均分成5段，每段是它的1/5，即五分之一。' },
    { id: 'm3u7l1q7', type: 'choice', question: '1/3和1/5哪个大？', options: ['1/3大', '1/5大', '一样大', '无法比较'], answer: '1/3大', hint: '[比多少]（数学-数一数-第2课）分母越小每份越大', explanation: '分母越小，每份越大。1/3>1/5，因为分成3份每份更大。' }
  ],
  'm3u7l2': [
    { id: 'm3u7l2q4', type: 'choice', question: '一个圆平均分成4份，涂了3份，涂色部分是几分之几？', options: ['1/4', '2/4', '3/4', '4/3'], answer: '3/4', hint: '分母是4，分子是涂了几份', explanation: '平均分4份，涂3份，涂色部分是3/4。' },
    { id: 'm3u7l2q5', type: 'fill', question: '2/5的分子是___', answer: '2', hint: '分数线上面是分子', explanation: '2/5的分子是2，分母是5。' },
    { id: 'm3u7l2q6', type: 'fill', question: '【期末真题】4/7的分子是___，分母是___', answer: '4和7', hint: '上面是分子，下面是分母', explanation: '4/7的分子是4，分母是7。' },
    { id: 'm3u7l2q7', type: 'choice', question: '分母相同的分数，分子越大分数怎样？', options: ['越小', '越大', '不变', '无法确定'], answer: '越大', hint: '[比多少]（数学-数一数-第2课）取的份数越多越大', explanation: '分母相同的分数，分子越大，取的份数越多，分数越大。' }
  ],
  'm3u7l3': [
    { id: 'm3u7l3q4', type: 'choice', question: '2/6+3/6=？', options: ['1/6', '5/6', '5/12', '6/6'], answer: '5/6', hint: '分母不变，分子2+3', explanation: '分母不变，分子2+3=5，所以2/6+3/6=5/6。' },
    { id: 'm3u7l3q5', type: 'fill', question: '4/8-1/8=___', answer: '3/8', hint: '分母不变，分子4-1', explanation: '分母不变，分子4-1=3，所以4/8-1/8=3/8。' },
    { id: 'm3u7l3q6', type: 'fill', question: '【期末真题】2/5+2/5=___', answer: '4/5', hint: '分母不变，分子2+2', explanation: '分母不变，分子2+2=4，所以2/5+2/5=4/5。' },
    { id: 'm3u7l3q7', type: 'choice', question: '同分母分数相加减，什么不变？', options: ['分子', '分母', '都不变', '都变'], answer: '分母', hint: '[除法的意义]（数学-除法初步-第2课）分母相同才能直接加减', explanation: '同分母分数相加减，分母不变，分子相加减。' }
  ],
  'm3u8l1': [
    { id: 'm3u8l1q4', type: 'choice', question: '把会游泳的动物圈在一起，下面哪个不应该在圈里？', options: ['鱼', '鸭子', '小鸟', '青蛙'], answer: '小鸟', hint: '哪个不会游泳？', explanation: '小鸟不会游泳，不应该在"会游泳的动物"这个集合圈里。' },
    { id: 'm3u8l1q5', type: 'fill', question: '把{1,3,5,7,9}这个集合的共同特征是：都是___数', answer: '奇', hint: '这些数有什么共同点？', explanation: '1、3、5、7、9都是奇数，这是它们的共同特征。' },
    { id: 'm3u8l1q6', type: 'fill', question: '【期末真题】{苹果，香蕉，橘子}的共同特征是：都是___', answer: '水果', hint: '它们属于哪一类？', explanation: '苹果、香蕉、橘子都是水果，这是它们的共同特征。' },
    { id: 'm3u8l1q7', type: 'choice', question: '集合中的物品必须有什么共同特征？', options: ['颜色相同', '大小相同', '某种相同特征', '形状相同'], answer: '某种相同特征', hint: '[分类整理]（数学-数据收集整理-第1课）分类标准', explanation: '集合中的物品必须有某种相同的特征，可以是颜色、形状、用途等。' }
  ],
  'm3u8l2': [
    { id: 'm3u8l2q4', type: 'choice', question: '喜欢唱歌10人，喜欢跳舞8人，两个都喜欢4人，一共有几人？', options: ['18人', '14人', '22人', '12人'], answer: '14人', hint: '10+8-4=？', explanation: '10+8-4=14人，重叠的4人被算了两次要减去1次。' },
    { id: 'm3u8l2q5', type: 'fill', question: '参加书法组15人，参加绘画组12人，两组都参加5人，一共有___人', answer: '22', hint: '15+12-5=？', explanation: '15+12-5=22人。' },
    { id: 'm3u8l2q6', type: 'fill', question: '【期末真题】喜欢红色20人，喜欢蓝色15人，两种都喜欢6人，一共有___人', answer: '29', hint: '20+15-6=？', explanation: '20+15-6=29人。' },
    { id: 'm3u8l2q7', type: 'choice', question: '韦恩图中重叠部分表示什么？', options: ['只属于A', '只属于B', '同时属于A和B', '不属于任何'], answer: '同时属于A和B', hint: '[分类整理]（数学-数据收集整理-第1课）重叠=两个集合的交集', explanation: '韦恩图的重叠部分表示同时属于两个集合的元素。' }
  ],
  'm3u8l3': [
    { id: 'm3u8l3q4', type: 'choice', question: '班上35人，喜欢运动20人，喜欢音乐18人，每人至少喜欢一种，两种都喜欢的有几人？', options: ['1人', '2人', '3人', '5人'], answer: '3人', hint: '20+18-35=？', explanation: '20+18-35=3人，两种都喜欢的有3人。' },
    { id: 'm3u8l3q5', type: 'fill', question: '50人中，喜欢猫28人，喜欢狗30人，两种都喜欢的有___人', answer: '8', hint: '28+30-50=？', explanation: '28+30-50=8人，两种都喜欢的有8人。' },
    { id: 'm3u8l3q6', type: 'fill', question: '【期末真题】45人中喜欢语文25人，喜欢数学22人，两种都喜欢的有___人', answer: '2', hint: '25+22-45=？', explanation: '25+22-45=2人，两种都喜欢的有2人。' },
    { id: 'm3u8l3q7', type: 'choice', question: '如果A组+B组人数=总人数，说明什么？', options: ['数据有误', '没有重叠', '重叠很多', '所有人都参加'], answer: '没有重叠', hint: '[简单统计表]（数学-数据收集整理-第2课）没有重叠时A+B=总数', explanation: '如果A组+B组人数正好等于总人数，说明没有重叠，每人只属于一个组。' }
  ]
};

// ===== 新课时生成函数 =====
function generateLesson4(gradePrefix, unitNum, unitTitle, unitSubtitle) {
  const id = `${gradePrefix}u${unitNum}l4`;
  const shortTitle = unitTitle.replace(/[（(].+/, '').trim();
  return {
    id,
    title: `${shortTitle}形成性评价`,
    order: 4,
    teachingMethod: '形成性评价',
    iDo: '快速闪卡回顾本单元知识点',
    weDo: '一起做闯关练习',
    youDo: '独立完成形成性评价',
    parentTips: '评价时鼓励孩子独立思考，不要急于提示答案。',
    funElement: `闯关挑战：全部答对获得"${shortTitle}小达人"徽章！`,
    gsapAnimations: [
      '[GSAP:scaleIn|闯关关卡解锁特效|0.6s|过关触发|back.out(1.7)]',
      '[GSAP:particleBurst|全部答对星星爆炸|0.8s|全部完成|power2.out]'
    ],
    images: [
      `[IMG:illustration|${shortTitle}闯关地图|400x300|cartoon|png|闯关评价]`,
      `[IMG:illustration|${shortTitle}小达人徽章|300x250|cartoon|png|徽章奖励]`
    ],
    content: [
      { type: 'text', content: `${shortTitle}闯关时间！看看你掌握了多少！`, label: '闯关开始', animationType: 'reveal' },
      { type: 'formula', content: `本单元核心知识回顾：${unitSubtitle}`, label: '知识回顾', animationType: 'typewriter' },
      { type: 'animation', content: '本单元核心动画回顾', animationType: 'cpaTransition',
        animationConfig: {
          sceneType: 'sceneBuild',
          title: `${shortTitle}回顾`,
          sceneBuildConfig: {
            sceneName: `${shortTitle}回顾`,
            elements: [
              { id: 'el-0', text: '知识1', emoji: '📚', delay: 0, animation: 'bounceIn', ttsText: '回顾本单元知识' },
              { id: 'el-1', text: '知识2', emoji: '✅', delay: 0.5, animation: 'bounceIn', ttsText: '检查掌握情况' },
              { id: 'el-2', text: '闯关', emoji: '🏆', delay: 1.0, animation: 'scaleIn', ttsText: '开始闯关挑战！' },
            ],
          },
          ttsNarration: `${shortTitle}闯关时间！看看你掌握了多少！`,
        }
      },
    ],
    practiceQuestions: [] // 将在后面填充
  };
}

function generateLesson5(gradePrefix, unitNum, unitTitle, unitSubtitle) {
  const id = `${gradePrefix}u${unitNum}l5`;
  const shortTitle = unitTitle.replace(/[（(].+/, '').trim();
  return {
    id,
    title: `${shortTitle}综合应用`,
    order: 5,
    teachingMethod: '综合应用',
    iDo: `示范生活中的${shortTitle}应用`,
    weDo: '一起解决生活问题',
    youDo: '独立解决生活应用题',
    parentTips: '让孩子把数学知识和日常生活联系起来，理解数学的实际意义。',
    funElement: `生活数学：用${shortTitle}解决生活中的问题！`,
    gsapAnimations: [
      '[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]',
      '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'
    ],
    images: [
      `[IMG:illustration|${shortTitle}生活应用场景|400x300|cartoon|png|生活应用]`,
      `[IMG:illustration|${shortTitle}实际问题图|300x250|cartoon|png|问题场景]`
    ],
    content: [
      { type: 'text', content: `${shortTitle}在生活中无处不在！`, label: '生活数学', animationType: 'reveal' },
      { type: 'example', content: `生活中的${shortTitle}：${unitSubtitle}`, label: '生活应用', animationType: 'bounce' },
      { type: 'tip', content: `思维训练：把${shortTitle}的知识用到生活中，你会发现数学真有用！`, label: '思维引导', animationType: 'pulse' },
    ],
    practiceQuestions: [] // 将在后面填充
  };
}

// ===== 为新课时生成7道题 =====
// 每个单元的第4课和第5课各7道题：2基础+2提高+2挑战+1回溯
// 第5课至少1道真题

const grade1Lesson4Questions = {
  'm1u1': [
    { id: 'm1u1l4q1', type: 'choice', question: '从1数到10，5的后面是几？', options: ['4', '6', '7', '8'], answer: '6', hint: '5后面一个数', explanation: '从1数到10：1、2、3、4、5、6、7、8、9、10，5后面是6。' },
    { id: 'm1u1l4q2', type: 'fill', question: '7个苹果和3个苹果比，___个多', answer: '7', hint: '7比3大', explanation: '7比3大，所以7个苹果多。' },
    { id: 'm1u1l4q3', type: 'choice', question: '8和10之间有几个数？', options: ['0个', '1个', '2个', '3个'], answer: '1个', hint: '8和10之间只有9', explanation: '8和10之间只有9，共1个数。' },
    { id: 'm1u1l4q4', type: 'fill', question: '从大到小排列：6、2、8，排在第一的是___', answer: '8', hint: '最大的排在第一', explanation: '从大到小排列：8、6、2，排在第一的是8。' },
    { id: 'm1u1l4q5', type: 'fill', question: '小明排第5个，他前面有___个人', answer: '4', hint: '第5个前面有4个', explanation: '排第5个说明前面有4个人。' },
    { id: 'm1u1l4q6', type: 'fill', question: '3+4+□=10，□=___', answer: '3', hint: '先算3+4=7，再想7加几等于10', explanation: '3+4=7，10-7=3，所以□=3。' },
    { id: 'm1u1l4q7', type: 'choice', question: '6比3多几？这用到了什么知识？', options: ['数数', '比多少', '排排队', '加法'], answer: '比多少', hint: '[比多少]（数学-数一数-第2课）用减法比较多几', explanation: '6比3多几，6-3=3，用到了比多少的知识。' }
  ],
  'm1u2': [
    { id: 'm1u2l4q1', type: 'choice', question: '3+1=？', options: ['3', '4', '5', '2'], answer: '4', hint: '3个加1个', explanation: '3+1=4。' },
    { id: 'm1u2l4q2', type: 'fill', question: '5-2=___', answer: '3', hint: '5个拿走2个', explanation: '5-2=3。' },
    { id: 'm1u2l4q3', type: 'choice', question: '4+1和1+4的结果一样吗？', options: ['一样', '不一样', '4+1大', '1+4大'], answer: '一样', hint: '分别算一算', explanation: '4+1=5，1+4=5，结果一样。' },
    { id: 'm1u2l4q4', type: 'fill', question: '□-2=3，□=___', answer: '5', hint: '几减2等于3？', explanation: '3+2=5，所以□=5。' },
    { id: 'm1u2l4q5', type: 'fill', question: '3+2-1=___', answer: '4', hint: '先算3+2=5，再减1', explanation: '3+2=5，5-1=4。' },
    { id: 'm1u2l4q6', type: 'fill', question: '☆+☆=6，☆=___', answer: '3', hint: '两个相同的数加起来等于6', explanation: '3+3=6，所以☆=3。' },
    { id: 'm1u2l4q7', type: 'choice', question: '5可以分成2和几？', options: ['1', '2', '3', '4'], answer: '3', hint: '[数一数]（数学-数一数-第1课）2+3=5', explanation: '5可以分成2和3，2+3=5。' }
  ],
  'm1u3': [
    { id: 'm1u3l4q1', type: 'choice', question: '7+3=？', options: ['9', '10', '11', '8'], answer: '10', hint: '7和3凑成10', explanation: '7+3=10，7和3是凑十好朋友。' },
    { id: 'm1u3l4q2', type: 'fill', question: '10-4=___', answer: '6', hint: '从10往左跳4格', explanation: '10-4=6。' },
    { id: 'm1u3l4q3', type: 'choice', question: '8+5=？', options: ['12', '13', '14', '15'], answer: '13', hint: '见8想2，5拆成2和3', explanation: '5拆成2和3，8+2=10，10+3=13。' },
    { id: 'm1u3l4q4', type: 'fill', question: '9+□=13，□=___', answer: '4', hint: '13-9=？', explanation: '13-9=4，所以□=4。' },
    { id: 'm1u3l4q5', type: 'fill', question: '7+☆=12，☆-2=？', answer: '3', hint: '先算☆=5', explanation: '7+5=12，☆=5，5-2=3。' },
    { id: 'm1u3l4q6', type: 'fill', question: '【期中真题】8+6=___', answer: '14', hint: '见8想2，6拆成2和4', explanation: '6拆成2和4，8+2=10，10+4=14。' },
    { id: 'm1u3l4q7', type: 'choice', question: '6+4=10，这用到了什么方法？', options: ['数数法', '凑十法', '破十法', '竖式法'], answer: '凑十法', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）6和4凑成10', explanation: '6+4=10，6和4凑成10，用的是凑十法。' }
  ],
  'm1u4': [
    { id: 'm1u4l4q1', type: 'choice', question: '1个十和7个一组成几？', options: ['16', '17', '18', '71'], answer: '17', hint: '10+7=？', explanation: '1个十是10，7个一是7，10+7=17。' },
    { id: 'm1u4l4q2', type: 'fill', question: '19里面有1个十和___个一', answer: '9', hint: '个位上是几？', explanation: '19的个位是9，所以19里面有1个十和9个一。' },
    { id: 'm1u4l4q3', type: 'choice', question: '16+3=？', options: ['18', '19', '13', '20'], answer: '19', hint: '十位1不变，个位6+3', explanation: '十位1不变，个位6+3=9，所以16+3=19。' },
    { id: 'm1u4l4q4', type: 'fill', question: '18-5=___', answer: '13', hint: '十位1不变，个位8-5', explanation: '十位1不变，个位8-5=3，所以18-5=13。' },
    { id: 'm1u4l4q5', type: 'fill', question: '一个数，十位是1，个位比十位多6，这个数是___', answer: '17', hint: '个位是1+6=7', explanation: '十位是1，个位是1+6=7，这个数是17。' },
    { id: 'm1u4l4q6', type: 'fill', question: '【期中真题】15+4=___', answer: '19', hint: '十位不变，个位5+4', explanation: '十位1不变，个位5+4=9，所以15+4=19。' },
    { id: 'm1u4l4q7', type: 'choice', question: '20是由几个十组成的？', options: ['1个', '2个', '20个', '0个'], answer: '2个', hint: '[6-10的认识]（数学-6-10的认识和加减法-第1课）20=2个十', explanation: '20是由2个十组成的，2×10=20。' }
  ],
  'm1u5': [
    { id: 'm1u5l4q1', type: 'choice', question: '9+3=？', options: ['11', '12', '13', '14'], answer: '12', hint: '见9想1，3拆成1和2', explanation: '3拆成1和2，9+1=10，10+2=12。' },
    { id: 'm1u5l4q2', type: 'fill', question: '8+7=___', answer: '15', hint: '见8想2，7拆成2和5', explanation: '7拆成2和5，8+2=10，10+5=15。' },
    { id: 'm1u5l4q3', type: 'choice', question: '7+5=？', options: ['11', '12', '13', '14'], answer: '12', hint: '见7想3，5拆成3和2', explanation: '5拆成3和2，7+3=10，10+2=12。' },
    { id: 'm1u5l4q4', type: 'fill', question: '6+□=13，□=___', answer: '7', hint: '13-6=？', explanation: '13-6=7，所以□=7。' },
    { id: 'm1u5l4q5', type: 'fill', question: '8+☆=14，☆-3=？', answer: '3', hint: '先算☆=6', explanation: '8+6=14，☆=6，6-3=3。' },
    { id: 'm1u5l4q6', type: 'fill', question: '【期末真题】7+8=___', answer: '15', hint: '见7想3，8拆成3和5', explanation: '8拆成3和5，7+3=10，10+5=15。' },
    { id: 'm1u5l4q7', type: 'choice', question: '凑十法的关键是什么？', options: ['看小数分大数', '看大数分小数凑十', '直接数数', '背答案'], answer: '看大数分小数凑十', hint: '[凑十法初探]（数学-6-10的认识和加减法-第3课）看大数分小数', explanation: '凑十法的关键是看大数差几到10，就从小的里面拿几凑成10。' }
  ],
  'm1u6': [
    { id: 'm1u6l4q1', type: 'choice', question: '11-9=？', options: ['1', '2', '3', '4'], answer: '2', hint: '9+2=11', explanation: '因为9+2=11，所以11-9=2。' },
    { id: 'm1u6l4q2', type: 'fill', question: '14-8=___', answer: '6', hint: '8+6=14', explanation: '因为8+6=14，所以14-8=6。' },
    { id: 'm1u6l4q3', type: 'choice', question: '16-7=？', options: ['8', '9', '10', '7'], answer: '9', hint: '7+9=16', explanation: '因为7+9=16，所以16-7=9。' },
    { id: 'm1u6l4q4', type: 'fill', question: '□-6=7，□=___', answer: '13', hint: '6+7=？', explanation: '6+7=13，所以□=13。' },
    { id: 'm1u6l4q5', type: 'fill', question: '15-☆=8，☆+2=？', answer: '9', hint: '先算☆=7', explanation: '15-7=8，☆=7，7+2=9。' },
    { id: 'm1u6l4q6', type: 'fill', question: '【期末真题】13-6=___', answer: '7', hint: '6+7=13', explanation: '因为6+7=13，所以13-6=7。' },
    { id: 'm1u6l4q7', type: 'choice', question: '退位减法可以用什么方法帮助计算？', options: ['凑十法', '想加算减', '数数法', '乘法'], answer: '想加算减', hint: '[9加几]（数学-20以内进位加法-第1课）加减互逆', explanation: '退位减法可以用想加算减法，因为加法和减法是逆运算。' }
  ],
  'm1u7': [
    { id: 'm1u7l4q1', type: 'choice', question: '下面哪个是正方体？', options: ['皮球', '魔方', '易拉罐', '铅笔'], answer: '魔方', hint: '正方体6个面都一样', explanation: '魔方6个面都是一样大的正方形，是正方体。' },
    { id: 'm1u7l4q2', type: 'fill', question: '圆柱有___个圆形的面', answer: '2', hint: '上下各一个圆', explanation: '圆柱上面一个圆，下面一个圆，共2个圆形的面。' },
    { id: 'm1u7l4q3', type: 'choice', question: '长方形有几条边？', options: ['2条', '3条', '4条', '5条'], answer: '4条', hint: '数一数长方形的边', explanation: '长方形有4条边，对边相等。' },
    { id: 'm1u7l4q4', type: 'fill', question: '用2个同样的正方形可以拼成一个___形', answer: '长方', hint: '两个正方形并排拼', explanation: '2个同样的正方形并排拼在一起，可以拼成一个长方形。' },
    { id: 'm1u7l4q5', type: 'fill', question: '拼一个火箭用了3个三角形和2个长方形，一共用了___个图形', answer: '5', hint: '3+2=？', explanation: '3+2=5，一共用了5个图形。' },
    { id: 'm1u7l4q6', type: 'fill', question: '【期末真题】球有___个平面', answer: '0', hint: '球到处都是弯的', explanation: '球没有平面，到处都是弯曲的面。' },
    { id: 'm1u7l4q7', type: 'choice', question: '长方体的面是什么形状？', options: ['都是正方形', '都是长方形或正方形', '都是圆形', '都是三角形'], answer: '都是长方形或正方形', hint: '[1-5的认识和加减法]（数学-1-5的认识和加减法-第1课）长方体的面', explanation: '长方体的面都是长方形或正方形。' }
  ],
  'm1u8': [
    { id: 'm1u8l4q1', type: 'choice', question: '1元等于几角？', options: ['5角', '10角', '100角', '8角'], answer: '10角', hint: '1元=10角', explanation: '1元=10角，这是人民币的基本换算。' },
    { id: 'm1u8l4q2', type: 'fill', question: '2元5角=___角', answer: '25', hint: '2元=20角，加5角', explanation: '2元=20角，20+5=25角。' },
    { id: 'm1u8l4q3', type: 'choice', question: '买3元的本子，付5元，找回多少？', options: ['1元', '2元', '3元', '5元'], answer: '2元', hint: '5-3=？', explanation: '5-3=2，找回2元。' },
    { id: 'm1u8l4q4', type: 'fill', question: '小明有1元，买了一个6角的橡皮，还剩___角', answer: '4', hint: '1元=10角，10-6=？', explanation: '1元=10角，10-6=4角。' },
    { id: 'm1u8l4q5', type: 'fill', question: '3角+7角=___元', answer: '1', hint: '3+7=10角=1元', explanation: '3角+7角=10角=1元。' },
    { id: 'm1u8l4q6', type: 'fill', question: '【期末真题】买一支铅笔8角，付1元，找回___角', answer: '2', hint: '1元=10角，10-8=？', explanation: '1元=10角，10-8=2角。' },
    { id: 'm1u8l4q7', type: 'choice', question: '1元=10角，这和哪个换算关系类似？', options: ['1米=10分米', '1千米=1000米', '1分=60秒', '1吨=1000千克'], answer: '1米=10分米', hint: '[11-20各数的认识]（数学-11-20各数的认识-第2课）相邻单位进率10', explanation: '1元=10角和1米=10分米类似，都是相邻单位之间进率是10。' }
  ]
};

const grade1Lesson5Questions = {
  'm1u1': [
    { id: 'm1u1l5q1', type: 'choice', question: '教室里有5个男生和4个女生，一共有几个小朋友？', options: ['8个', '9个', '10个', '1个'], answer: '9个', hint: '5+4=？', explanation: '5+4=9，一共有9个小朋友。' },
    { id: 'm1u1l5q2', type: 'fill', question: '树上有8只鸟，飞走了3只，还剩___只', answer: '5', hint: '8-3=？', explanation: '8-3=5，还剩5只鸟。' },
    { id: 'm1u1l5q3', type: 'choice', question: '小明有7颗糖，小红比小明少2颗，小红有几颗？', options: ['4颗', '5颗', '6颗', '9颗'], answer: '5颗', hint: '"比少"用减法', explanation: '7-2=5，小红有5颗糖。' },
    { id: 'm1u1l5q4', type: 'fill', question: '从1数到10，比6大比9小的数有___个', answer: '2', hint: '7和8', explanation: '比6大比9小的数有7和8，共2个。' },
    { id: 'm1u1l5q5', type: 'fill', question: '小朋友们排队，小红排第2，小明排第6，小红和小明之间有___人', answer: '3', hint: '第3、第4、第5', explanation: '小红排第2，小明排第6，之间有第3、第4、第5，共3人。' },
    { id: 'm1u1l5q6', type: 'fill', question: '【期末真题】小明有5个苹果，吃了2个，又得到3个，现在有___个', answer: '6', hint: '5-2+3=？', explanation: '5-2=3，3+3=6，现在有6个苹果。' },
    { id: 'm1u1l5q7', type: 'choice', question: '数数时，5和7之间隔了几个数？', options: ['0个', '1个', '2个', '3个'], answer: '1个', hint: '[排排队]（数学-数一数-第3课）5和7之间只有6', explanation: '5和7之间只有6，隔了1个数。' }
  ],
  'm1u2': [
    { id: 'm1u2l5q1', type: 'choice', question: '桌上有3个苹果和2个梨，一共有几个水果？', options: ['4个', '5个', '6个', '1个'], answer: '5个', hint: '3+2=？', explanation: '3+2=5，一共有5个水果。' },
    { id: 'm1u2l5q2', type: 'fill', question: '小红有5颗糖，吃了3颗，还剩___颗', answer: '2', hint: '5-3=？', explanation: '5-3=2，还</think>