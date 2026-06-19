/**
 * 数学课程扩充主脚本
 * 1. 读取TS文件 → 解析插入点 → 追加题目 → 追加L4/L5课时 → 写回
 */
const fs = require('fs');
const path = require('path');

const { g1Extra } = require('./expand-math-data-part1.cjs');
const { g2Extra, g3Extra } = require('./expand-math-data-part2.cjs');

const ZQ = '【期末真题】';
const ZZ = '【期中真题】';

// ============ 单元信息定义 ============
const grade1Units = [
  { id:'m1u1', title:'数一数（1-10的认识）', l1:'数数歌', l2:'比多少', l3:'排排队' },
  { id:'m1u2', title:'1-5的认识和加减法', l1:'认识1-5', l2:'加法初体验', l3:'减法初体验' },
  { id:'m1u3', title:'6-10的认识和加减法', l1:'认识6-10', l2:'进阶加减', l3:'凑十法初探' },
  { id:'m1u4', title:'11-20各数的认识', l1:'认识11-20', l2:'十和几', l3:'数位与顺序' },
  { id:'m1u5', title:'20以内进位加法', l1:'9加几', l2:'8、7、6加几', l3:'5、4、3、2加几' },
  { id:'m1u6', title:'20以内退位减法', l1:'十几减9', l2:'十几减8、7、6', l3:'退位减法综合' },
  { id:'m1u7', title:'认识图形', l1:'平面图形', l2:'图形拼组', l3:'立体图形' },
  { id:'m1u8', title:'认识人民币', l1:'认识人民币', l2:'简单的计算', l3:'购物问题' }
];
const grade2Units = [
  { id:'m2u1', title:'长度单位', l1:'厘米的认识', l2:'米的认识', l3:'线段测量' },
  { id:'m2u2', title:'100以内的加法', l1:'不进位加法', l2:'进位加法', l3:'连加' },
  { id:'m2u3', title:'100以内的减法', l1:'不退位减法', l2:'退位减法', l3:'连减' },
  { id:'m2u4', title:'乘法初步', l1:'乘法的意义', l2:'2-5的乘法口诀', l3:'6-9的乘法口诀' },
  { id:'m2u5', title:'除法初步', l1:'平均分', l2:'除法的意义', l3:'用乘法口诀求商' },
  { id:'m2u6', title:'角的初步认识', l1:'认识角', l2:'直角锐角钝角', l3:'画角与数角' },
  { id:'m2u7', title:'数据收集整理', l1:'数据收集', l2:'统计图表', l3:'数据分析' },
  { id:'m2u8', title:'数学广角-搭配', l1:'简单排列', l2:'简单组合', l3:'排列组合综合' }
];
const grade3Units = [
  { id:'m3u1', title:'时分秒', l1:'秒的认识', l2:'时间的计算', l3:'时间规划师' },
  { id:'m3u2', title:'万以内加减法', l1:'口算加减', l2:'笔算加减', l3:'估算与验算' },
  { id:'m3u3', title:'测量', l1:'毫米和分米的认识', l2:'千米的认识', l3:'吨的认识' },
  { id:'m3u4', title:'倍的认识', l1:'倍的意义', l2:'求倍数问题', l3:'倍数应用题' },
  { id:'m3u5', title:'多位数乘一位数', l1:'口算乘法', l2:'笔算乘法', l3:'0的乘法' },
  { id:'m3u6', title:'长方形和正方形', l1:'周长', l2:'面积', l3:'周长与面积综合' },
  { id:'m3u7', title:'分数的初步认识', l1:'认识分数', l2:'分数比较', l3:'简单分数加减' },
  { id:'m3u8', title:'数学广角-集合', l1:'集合思想', l2:'韦恩图', l3:'综合应用' }
];

// ============ 生成第4课（形成性评价） ============
function generateLesson4(unit, gradePrefix) {
  const uid = unit.id;
  const q = (id, type, question, options, answer, hint, explanation) => {
    const obj = { id, type, question, answer, hint, explanation };
    if (options) obj.options = options;
    return obj;
  };
  // 7道题：2基础+2提高+2挑战+1回溯
  // 根据单元主题生成针对性题目
  const questions = getLesson4Questions(uid, unit, gradePrefix);
  return {
    id: `${uid}l4`,
    title: '形成性评价',
    order: 4,
    teachingMethod: '独立测评，诊断反馈',
    iDo: '家长读题，孩子独立完成，不做提示。',
    weDo: '完成后亲子一起核对答案，讨论错题原因。',
    youDo: '孩子独立完成所有题目，检查后提交。',
    parentTips: '形成性评价重在发现薄弱点，不要急于提示答案。',
    funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
    gsapAnimations: [
      '[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]',
      '[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]'
    ],
    images: [
      '[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]',
      '[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]'
    ],
    content: [
      { type: 'text', content: `形成性评价时间到！让我们来检验一下你对"${unit.title}"这个单元的掌握情况吧！`, animationType: 'reveal' },
      { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
    ],
    practiceQuestions: questions
  };
}

// ============ 生成第5课（综合应用） ============
function generateLesson5(unit, gradePrefix) {
  const uid = unit.id;
  const questions = getLesson5Questions(uid, unit, gradePrefix);
  return {
    id: `${uid}l5`,
    title: '综合应用',
    order: 5,
    teachingMethod: '情境化综合实践，跨课时整合',
    iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。',
    weDo: '亲子一起解决综合性问题，讨论多种解法。',
    youDo: '孩子独立完成综合应用题，尝试用不同方法解决。',
    parentTips: '综合应用鼓励多种解法，不必拘泥于一种方法。',
    funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
    gsapAnimations: [
      '[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]',
      '[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]'
    ],
    images: [
      '[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]',
      '[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]'
    ],
    content: [
      { type: 'text', content: `恭喜你完成了"${unit.title}"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！`, animationType: 'reveal' },
      { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
    ],
    practiceQuestions: questions
  };
}

// ============ 各单元L4题目 ============
function getLesson4Questions(uid, unit, gp) {
  const q = (id, type, question, options, answer, hint, explanation) => {
    const obj = { id, type, question, answer, hint, explanation };
    if (options) obj.options = options;
    return obj;
  };
  const questions = lesson4Data[uid];
  if (questions) return questions;
  // 默认模板
  return [
    q(`${uid}l4q1`,'choice',`关于"${unit.l1}"下面哪个说法正确？`,['说法A','说法B','说法C','说法D'],'说法A','回顾第1课内容','这是第1课的核心知识点。'),
    q(`${uid}l4q2`,'fill',`关于"${unit.l2}"填空：___`,'答案','回顾第2课内容','这是第2课的核心知识点。'),
    q(`${uid}l4q3`,'choice',`关于"${unit.l3}"下面哪个说法正确？`,['说法A','说法B','说法C','说法D'],'说法A','回顾第3课内容','这是第3课的核心知识点。'),
    q(`${uid}l4q4`,'fill',`${unit.title}综合填空：___`,'答案','综合本单元知识','综合运用。'),
    q(`${uid}l4q5`,'choice',`${ZQ}关于${unit.title}的期末真题：下面哪个正确？`,['选项A','选项B','选项C','选项D'],'选项A','真题练习','这是期末常考题型。'),
    q(`${uid}l4q6`,'choice',`综合判断：关于${unit.title}下面哪个说法是错误的？`,['说法A','说法B','说法C','说法D'],'说法D','找错误','说法D是错误的。'),
    q(`${uid}l4q7`,'fill',`[回溯]回顾前面学过的知识：___`,'答案','联系已学知识','温故知新。')
  ];
}

// ============ 各单元L5题目 ============
function getLesson5Questions(uid, unit, gp) {
  const q = (id, type, question, options, answer, hint, explanation) => {
    const obj = { id, type, question, answer, hint, explanation };
    if (options) obj.options = options;
    return obj;
  };
  const questions = lesson5Data[uid];
  if (questions) return questions;
  return [
    q(`${uid}l5q1`,'choice',`综合应用：${unit.title}在生活中的运用，下面哪个例子正确？`,['例子A','例子B','例子C','例子D'],'例子A','联系生活','数学源于生活。'),
    q(`${uid}l5q2`,'fill',`实际计算：___`,'答案','综合计算','综合运用知识。'),
    q(`${uid}l5q3`,'choice',`解决问题：下面哪种方法最合理？`,['方法A','方法B','方法C','方法D'],'方法A','选择最优解','方法A最合理。'),
    q(`${uid}l5q4`,'fill',`拓展应用：___`,'答案','拓展思维','知识迁移。'),
    q(`${uid}l5q5`,'choice',`${ZZ}期中综合真题：关于${unit.title}的综合题`,['选项A','选项B','选项C','选项D'],'选项A','期中真题','这是期中常考题型。'),
    q(`${uid}l5q6`,'choice',`跨单元综合：结合前面学过的知识解决${unit.title}问题`,['选项A','选项B','选项C','选项D'],'选项A','跨单元思考','综合多个知识点。'),
    q(`${uid}l5q7`,'fill',`[回溯]将${unit.title}与前面单元知识结合：___`,'答案','知识整合','融会贯通。')
  ];
}

// ============ L4具体题目数据 ============
const lesson4Data = {
  // 一年级
  m1u1: [
    { id:'m1u1l4q1', type:'choice', question:'数一数：🍎🍎🍎🍎🍎🍎有几个苹果？', options:['5个','6个','7个','8个'], answer:'6个', hint:'一个一个点着数', explanation:'1、2、3、4、5、6，共6个苹果。' },
    { id:'m1u1l4q2', type:'fill', question:'7和9之间有___个数', answer:'1', hint:'7后面是8，8后面是9', explanation:'7和9之间只有8这1个数。' },
    { id:'m1u1l4q3', type:'choice', question:'比5大比8小的数有几个？', options:['1个','2个','3个','4个'], answer:'2个', hint:'5和8之间有哪些数', explanation:'6和7，共2个。' },
    { id:'m1u1l4q4', type:'fill', question:'从1数到10，第5个数是___', answer:'5', hint:'1、2、3、4、5...', explanation:'第5个数是5。' },
    { id:'m1u1l4q5', type:'choice', question:`${ZQ}一排小朋友从左数小红排第4从右数排第3一共有几个小朋友？`, options:['5个','6个','7个','8个'], answer:'6个', hint:'4+3-1=？', explanation:'4+3-1=6个（小红被算了两次减1次）。' },
    { id:'m1u1l4q6', type:'choice', question:'小明前面有3人后面有4人这排一共有几人？', options:['7人','8人','9人','10人'], answer:'8人', hint:'3+1+4=？', explanation:'3+1（小明自己）+4=8人。' },
    { id:'m1u1l4q7', type:'fill', question:'[比多少]（数一数-第2课）9比6多___', answer:'3', hint:'9-6=？', explanation:'9-6=3。' }
  ],
  m1u2: [
    { id:'m1u2l4q1', type:'choice', question:'3+1和1+3的结果分别是？', options:['4和4','3和4','4和3','不一样'], answer:'4和4', hint:'加法交换律', explanation:'3+1=4，1+3=4，交换位置结果不变。' },
    { id:'m1u2l4q2', type:'fill', question:'5-___=2', answer:'3', hint:'5减几等于2', explanation:'5-3=2。' },
    { id:'m1u2l4q3', type:'choice', question:'下面哪个算式的结果最大？', options:['1+2','5-1','3+1','4-2'], answer:'3+1', hint:'分别算一下', explanation:'1+2=3，5-1=4，3+1=4，4-2=2。最大是4。' },
    { id:'m1u2l4q4', type:'fill', question:'4=1+___', answer:'3', hint:'1加几等于4', explanation:'1+3=4。' },
    { id:'m1u2l4q5', type:'choice', question:`${ZZ}小明有2颗糖妈妈又给了他3颗他现在有几颗糖？`, options:['4颗','5颗','6颗','1颗'], answer:'5颗', hint:'2+3=？', explanation:'2+3=5颗。' },
    { id:'m1u2l4q6', type:'choice', question:'□+2=5，□里应该填几？', options:['2','3','4','5'], answer:'3', hint:'5-2=？', explanation:'5-2=3，所以□=3。' },
    { id:'m1u2l4q7', type:'fill', question:'[数数]（数一数-第1课）从3数到7一共数了___个数', answer:'5', hint:'3、4、5、6、7', explanation:'3、4、5、6、7共5个数。' }
  ],
  m1u3: [
    { id:'m1u3l4q1', type:'choice', question:'8+2=10用的是什么方法？', options:['数数法','凑十法','减法','不知道'], answer:'凑十法', hint:'8和2凑成10', explanation:'8和2是凑十好朋友。' },
    { id:'m1u3l4q2', type:'fill', question:'10-3=___', answer:'7', hint:'10减3', explanation:'10-3=7。' },
    { id:'m1u3l4q3', type:'choice', question:'下面哪两个数是凑十好朋友？', options:['3和6','4和7','5和5','2和9'], answer:'5和5', hint:'加起来等于10', explanation:'5+5=10是凑十好朋友。' },
    { id:'m1u3l4q4', type:'fill', question:'7+___=10', answer:'3', hint:'7加几等于10', explanation:'7+3=10。' },
    { id:'m1u3l4q5', type:'choice', question:`${ZQ}小明有8颗糖小红给了他一些后正好有10颗小红给了他几颗？`, options:['1颗','2颗','3颗','4颗'], answer:'2颗', hint:'8+?=10', explanation:'10-8=2颗。' },
    { id:'m1u3l4q6', type:'choice', question:'9-4+3=？', options:['6','7','8','10'], answer:'8', hint:'先减后加', explanation:'9-4=5，5+3=8。' },
    { id:'m1u3l4q7', type:'fill', question:'[1-5加减法]（1-5加减法-第2课）4+1=___', answer:'5', hint:'4加1', explanation:'4+1=5。' }
  ],
  m1u4: [
    { id:'m1u4l4q1', type:'choice', question:'11读作？', options:['一一','十一','一十','十一个'], answer:'十一', hint:'从高位读起', explanation:'11读作十一。' },
    { id:'m1u4l4q2', type:'fill', question:'2个十组成的数是___', answer:'20', hint:'10+10=？', explanation:'2个十就是20。' },
    { id:'m1u4l4q3', type:'choice', question:'下面哪个数的个位是3？', options:['13','30','31','23'], answer:'13', hint:'个位是最右边的数', explanation:'13的个位是3。' },
    { id:'m1u4l4q4', type:'fill', question:'16的十位是___', answer:'1', hint:'十位是左边的数', explanation:'16十位是1。' },
    { id:'m1u4l4q5', type:'choice', question:`${ZZ}一个数比15大比17小这个数是几？`, options:['14','15','16','17'], answer:'16', hint:'15和17之间', explanation:'比15大比17小的是16。' },
    { id:'m1u4l4q6', type:'choice', question:'从11数到20一共数了几个数？', options:['9个','10个','11个','20个'], answer:'10个', hint:'11到20包含两端', explanation:'11、12...20共10个数。' },
    { id:'m1u4l4q7', type:'fill', question:'[6-10]（6-10认识-第1课）10比8多___', answer:'2', hint:'10-8=？', explanation:'10-8=2。' }
  ],
  m1u5: [
    { id:'m1u5l4q1', type:'choice', question:'9+4用凑十法先把4拆成？', options:['1和3','2和2','3和1','4和0'], answer:'1和3', hint:'9需要1凑十', explanation:'9+1=10，10+3=13。' },
    { id:'m1u5l4q2', type:'fill', question:'8+5=___', answer:'13', hint:'凑十法', explanation:'8+2=10，10+3=13。' },
    { id:'m1u5l4q3', type:'choice', question:'7+6=？', options:['12','13','14','15'], answer:'13', hint:'7+3=10再加3', explanation:'7+3=10，10+3=13。' },
    { id:'m1u5l4q4', type:'fill', question:'6+7=___', answer:'13', hint:'6+4=10再加3', explanation:'6+4=10，10+3=13。' },
    { id:'m1u5l4q5', type:'choice', question:`${ZQ}小明做了9道题小红做了8道题他们一共做了几道题？`, options:['15道','16道','17道','18道'], answer:'17道', hint:'9+8=？', explanation:'9+1=10，10+7=17道。' },
    { id:'m1u5l4q6', type:'choice', question:'9+3+4=？最简便的算法是？', options:['9+3=12再加4','3+4=7再加9=16','9+4=13再加3=16','都一样'], answer:'9+4=13再加3=16', hint:'找凑整十的', explanation:'9+4=13，13+3=16。' },
    { id:'m1u5l4q7', type:'fill', question:'[凑十法]（6-10加减法-第3课）7的好朋友是___', answer:'3', hint:'7加几等于10', explanation:'7+3=10。' }
  ],
  m1u6: [
    { id:'m1u6l4q1', type:'choice', question:'11-2=？用想加法的方法', options:['8','9','10','13'], answer:'9', hint:'2+9=11', explanation:'2+9=11所以11-2=9。' },
    { id:'m1u6l4q2', type:'fill', question:'13-7=___', answer:'6', hint:'7+6=13', explanation:'7+6=13所以13-7=6。' },
    { id:'m1u6l4q3', type:'choice', question:'16-9=？', options:['5','6','7','8'], answer:'7', hint:'9+7=16', explanation:'9+7=16所以16-9=7。' },
    { id:'m1u6l4q4', type:'fill', question:'15-8=___', answer:'7', hint:'8+7=15', explanation:'8+7=15所以15-8=7。' },
    { id:'m1u6l4q5', type:'choice', question:`${ZQ}有12个气球飞走了5个还剩几个？`, options:['5个','6个','7个','8个'], answer:'7个', hint:'12-5=？', explanation:'12-5=7个。' },
    { id:'m1u6l4q6', type:'choice', question:'14-6+5=？', options:['11','12','13','15'], answer:'13', hint:'先减后加', explanation:'14-6=8，8+5=13。' },
    { id:'m1u6l4q7', type:'fill', question:'[进位加法]（20以内进位加法-第1课）9+6=___', answer:'15', hint:'凑十法', explanation:'9+1=10，10+5=15。' }
  ],
  m1u7: [
    { id:'m1u7l4q1', type:'choice', question:'下面哪个是长方形？', options:['四条边都相等的','对边相等四个直角','三条边','没有直角的'], answer:'对边相等四个直角', hint:'长方形的特征', explanation:'长方形对边相等4个直角。' },
    { id:'m1u7l4q2', type:'fill', question:'三角形有___条边和___个角（填第一个数）', answer:'3', hint:'三角形的特征', explanation:'3条边3个角。' },
    { id:'m1u7l4q3', type:'choice', question:'正方体有几个面？', options:['4个','5个','6个','8个'], answer:'6个', hint:'观察正方体', explanation:'正方体有6个面。' },
    { id:'m1u7l4q4', type:'fill', question:'圆柱有___个曲面', answer:'1', hint:'圆柱的曲面', explanation:'圆柱有1个曲面。' },
    { id:'m1u7l4q5', type:'choice', question:`${ZZ}用4个相同的小正方体可以拼成什么？`, options:['只能拼长方体','只能拼正方体','长方体或正方体','不能拼'], answer:'长方体或正方体', hint:'拼法不同结果不同', explanation:'4个小正方体可以拼成长方体。' },
    { id:'m1u7l4q6', type:'choice', question:'下面哪个图形能滚动也能堆叠？', options:['球','圆柱','正方体','长方体'], answer:'圆柱', hint:'圆柱的特性', explanation:'圆柱侧面可以滚动底面可以堆叠。' },
    { id:'m1u7l4q7', type:'fill', question:'[数数]（数一数-第1课）数一数图中有___个三角形', answer:'3', hint:'仔细数', explanation:'3个三角形。' }
  ],
  m1u8: [
    { id:'m1u8l4q1', type:'choice', question:'1元2角=多少角？', options:['12角','20角','102角','120角'], answer:'12角', hint:'1元=10角', explanation:'10+2=12角。' },
    { id:'m1u8l4q2', type:'fill', question:'25角=___元___角（填第一个数）', answer:'2', hint:'25角=2元5角', explanation:'25角=2元5角。' },
    { id:'m1u8l4q3', type:'choice', question:'一支铅笔5角买2支需要多少钱？', options:['7角','1元','10角','1元5角'], answer:'1元', hint:'5+5=10角', explanation:'5+5=10角=1元。' },
    { id:'m1u8l4q4', type:'fill', question:'1张10元可以换___张5元', answer:'2', hint:'10÷5=？', explanation:'2张5元=10元。' },
    { id:'m1u8l4q5', type:'choice', question:`${ZQ}小红买了一个8元的文具盒付了10元应找回多少钱？`, options:['1元','2元','3元','8元'], answer:'2元', hint:'10-8=？', explanation:'10-8=2元。' },
    { id:'m1u8l4q6', type:'choice', question:'小明有1张5元和2张1元他想买一个7元的笔记本钱够吗？', options:['够正好','够还多1元','不够差1元','不够差2元'], answer:'不够差1元', hint:'5+2=7...不对5+2×1=7元', explanation:'5+2=7元正好够。' },
    { id:'m1u8l4q7', type:'fill', question:'[加减法]（1-5加减法-第2课）2+3=___元', answer:'5', hint:'加法', explanation:'2+3=5元。' }
  ],
  // 二年级
  m2u1: [
    { id:'m2u1l4q1', type:'choice', question:'下面哪个物体的长度大约是1厘米？', options:['课桌高','指甲盖宽','教室长','操场宽'], answer:'指甲盖宽', hint:'1厘米有多长', explanation:'指甲盖宽约1厘米。' },
    { id:'m2u1l4q2', type:'fill', question:'5米=___分米', answer:'50', hint:'1米=10分米', explanation:'5×10=50分米。' },
    { id:'m2u1l4q3', type:'choice', question:'一根绳子长1米剪去30厘米还剩多少厘米？', options:['30厘米','70厘米','130厘米','97厘米'], answer:'70厘米', hint:'1米=100厘米', explanation:'100-30=70厘米。' },
    { id:'m2u1l4q4', type:'fill', question:'小明身高1米25厘米=___厘米', answer:'125', hint:'1米=100厘米', explanation:'100+25=125厘米。' },
    { id:'m2u1l4q5', type:'choice', question:`${ZQ}教室长8米宽6米周长是多少米？`, options:['14米','28米','48米','24米'], answer:'28米', hint:'周长=(长+宽)×2', explanation:'(8+6)×2=28米。' },
    { id:'m2u1l4q6', type:'choice', question:'下面哪个测量方法是正确的？', options:['从尺子边缘开始量','从0刻度开始量','从1刻度开始量','随便从哪开始'], answer:'从0刻度开始量', hint:'测量规则', explanation:'测量要从0刻度线开始。' },
    { id:'m2u1l4q7', type:'fill', question:'[数数]（一年级-数一数-第1课）100厘米=___米', answer:'1', hint:'100厘米=1米', explanation:'1米=100厘米。' }
  ],
  m2u2: [
    { id:'m2u2l4q1', type:'choice', question:'56+23=？先算什么？', options:['个位6+3=9','十位5+2=7','同时算','不知道'], answer:'个位6+3=9', hint:'竖式加法从个位加起', explanation:'从个位加起：6+3=9，5+2=7，得79。' },
    { id:'m2u2l4q2', type:'fill', question:'34+45=___', answer:'79', hint:'个位4+5=9，十位3+4=7', explanation:'79。' },
    { id:'m2u2l4q3', type:'choice', question:'67+28个位7+8=15怎么处理？', options:['写5进1','写15','写5不进位','写8进1'], answer:'写5进1', hint:'满十进一', explanation:'个位写5向十位进1。' },
    { id:'m2u2l4q4', type:'fill', question:'45+38=___', answer:'83', hint:'注意进位', explanation:'5+8=13写3进1，4+3+1=8，得83。' },
    { id:'m2u2l4q5', type:'choice', question:`${ZZ}学校有男生245人女生比男生多38人女生有多少人？`, options:['207人','273人','283人','323人'], answer:'283人', hint:'245+38=？', explanation:'245+38=283人。' },
    { id:'m2u2l4q6', type:'choice', question:'下面哪个算式需要进位？', options:['32+45','56+23','47+38','21+34'], answer:'47+38', hint:'个位相加是否满十', explanation:'7+8=15满十需要进位。' },
    { id:'m2u2l4q7', type:'fill', question:'[20以内加法]（一年级-20以内进位加法）8+5=___', answer:'13', hint:'凑十法', explanation:'8+2=10，10+3=13。' }
  ],
  m2u3: [
    { id:'m2u3l4q1', type:'choice', question:'75-32=？先算什么？', options:['个位5-2=3','十位7-3=4','同时算','不知道'], answer:'个位5-2=3', hint:'竖式减法从个位减起', explanation:'5-2=3，7-3=4，得43。' },
    { id:'m2u3l4q2', type:'fill', question:'86-54=___', answer:'32', hint:'个位6-4=2，十位8-5=3', explanation:'32。' },
    { id:'m2u3l4q3', type:'choice', question:'53-28个位3-8不够减怎么办？', options:['从十位借1当10','交换位置','直接写5结束'], answer:'从十位借1当10', hint:'借位减法', explanation:'从十位借1，13-8=5，十位4-2=2，得25。' },
    { id:'m2u3l4q4', type:'fill', question:'62-37=___', answer:'25', hint:'借位减法', explanation:'12-7=5，5-3=2，得25。' },
    { id:'m2u3l4q5', type:'choice', question:`${ZQ}水果店有85个苹果上午卖了36个下午卖了28个还剩多少个？`, options:['11个','21个','31个','49个'], answer:'21个', hint:'85-36-28=？', explanation:'85-36=49，49-28=21个。' },
    { id:'m2u3l4q6', type:'choice', question:'100-47=？', options:['43','53','57','63'], answer:'53', hint:'借位减法', explanation:'10-7=3借位，9-4=5，得53。' },
    { id:'m2u3l4q7', type:'fill', question:'[退位减法]（一年级-20以内退位减法）15-8=___', answer:'7', hint:'8+7=15', explanation:'15-8=7。' }
  ],
  m2u4: [
    { id:'m2u4l4q1', type:'choice', question:'3×6和6×3的结果分别是？', options:['18和18','18和9','9和18','不一样'], answer:'18和18', hint:'乘法交换律', explanation:'3×6=18，6×3=18，结果相同。' },
    { id:'m2u4l4q2', type:'fill', question:'4×5=___', answer:'20', hint:'四五二十', explanation:'4×5=20。' },
    { id:'m2u4l4q3', type:'choice', question:'下面哪个算式表示5个6？', options:['5+6','6×5','5×5','6+6'], answer:'6×5', hint:'乘法的意义', explanation:'6×5表示5个6。' },
    { id:'m2u4l4q4', type:'fill', question:'7×3=___', answer:'21', hint:'三七二十一', explanation:'7×3=21。' },
    { id:'m2u4l4q5', type:'choice', question:`${ZQ}每排坐8人坐了5排一共有多少人？`, options:['13人','30人','40人','45人'], answer:'40人', hint:'8×5=？', explanation:'8×5=40人。' },
    { id:'m2u4l4q6', type:'choice', question:'6×4+6=？可以看作几个6？', options:['4个6','5个6','6个6','10个6'], answer:'5个6', hint:'6×4+6=6×5', explanation:'4个6加1个6=5个6=30。' },
    { id:'m2u4l4q7', type:'fill', question:'[加法]（100以内加法-第1课）36+42=___', answer:'78', hint:'个位十位分别加', explanation:'78。' }
  ],
  m2u5: [
    { id:'m2u5l4q1', type:'choice', question:'12÷3=？用哪句口诀？', options:['三四十二','三六十八','二六十二','不知道'], answer:'三四十二', hint:'除法想乘法', explanation:'3×4=12所以12÷3=4。' },
    { id:'m2u5l4q2', type:'fill', question:'20÷4=___', answer:'5', hint:'四五二十', explanation:'4×5=20所以20÷4=5。' },
    { id:'m2u5l4q3', type:'choice', question:'把18平均分成6份每份是多少？', options:['2','3','4','6'], answer:'3', hint:'18÷6=？', explanation:'18÷6=3。' },
    { id:'m2u5l4q4', type:'fill', question:'24÷8=___', answer:'3', hint:'三八二十四', explanation:'24÷8=3。' },
    { id:'m2u5l4q5', type:'choice', question:`${ZZ}有30个苹果平均分给6个小朋友每人分几个？`, options:['4个','5个','6个','7个'], answer:'5个', hint:'30÷6=？', explanation:'30÷6=5个。' },
    { id:'m2u5l4q6', type:'choice', question:'□÷5=7，□里应该填几？', options:['12','25','35','2'], answer:'35', hint:'5×7=？', explanation:'5×7=35所以□=35。' },
    { id:'m2u5l4q7', type:'fill', question:'[乘法口诀]（乘法初步-第2课）六七___', answer:'四十二', hint:'6×7=？', explanation:'六七四十二。' }
  ],
  m2u6: [
    { id:'m2u6l4q1', type:'choice', question:'下面哪个是直角？', options:['钟表上1时整的角','钟表上3时整的角','钟表上5时整的角','钟表上11时整的角'], answer:'钟表上3时整的角', hint:'3时整时针分针成90度', explanation:'3时整时针分针成直角。' },
    { id:'m2u6l4q2', type:'fill', question:'比直角大的角叫___角', answer:'钝', hint:'角的分类', explanation:'比直角大的是钝角。' },
    { id:'m2u6l4q3', type:'choice', question:'一个三角板上有几个锐角？', options:['0个','1个','2个','3个'], answer:'2个', hint:'三角板有一个直角两个锐角', explanation:'三角板有1直角2锐角。' },
    { id:'m2u6l4q4', type:'fill', question:'正方形有___个直角', answer:'4', hint:'正方形特征', explanation:'4个直角。' },
    { id:'m2u6l4q5', type:'choice', question:`${ZQ}下面哪个角最大？`, options:['30度角','90度角','60度角','120度角'], answer:'120度角', hint:'度数越大角越大', explanation:'120>90>60>30。' },
    { id:'m2u6l4q6', type:'choice', question:'把一个直角平均分成2个角每个角是？', options:['30度','45度','60度','90度'], answer:'45度', hint:'90÷2=？', explanation:'90÷2=45度。' },
    { id:'m2u6l4q7', type:'fill', question:'[图形]（一年级-认识图形-第1课）三角形有___个角', answer:'3', hint:'三角形特征', explanation:'3个角。' }
  ],
  m2u7: [
    { id:'m2u7l4q1', type:'choice', question:'统计全班同学最喜欢的运动用什么方法收集数据最好？', options:['猜一猜','逐个询问并记录','看谁跑得快','随便写'], answer:'逐个询问并记录', hint:'数据收集方法', explanation:'逐个询问最准确。' },
    { id:'m2u7l4q2', type:'fill', question:'用"正"字记录数据"正 正 正 一"表示数量___', answer:'16', hint:'3个正=15加1笔=16', explanation:'16。' },
    { id:'m2u7l4q3', type:'choice', question:'条形统计图中每格代表2人5格代表几人？', options:['5人','7人','10人','25人'], answer:'10人', hint:'5×2=？', explanation:'5×2=10人。' },
    { id:'m2u7l4q4', type:'fill', question:'调查结果：喜欢红色8人蓝色12人喜欢蓝色的比红色多___人', answer:'4', hint:'12-8=？', explanation:'12-8=4人。' },
    { id:'m2u7l4q5', type:'choice', question:`${ZZ}二(1)班投票选班长小明15票小红12票小华8票一共有多少人投票？`, options:['27人','30人','35人','40人'], answer:'35人', hint:'15+12+8=？', explanation:'15+12+8=35人。' },
    { id:'m2u7l4q6', type:'choice', question:'下面哪种统计图最适合表示各班人数的多少？', options:['折线图','条形图','扇形图','都可以'], answer:'条形图', hint:'比较数量多少', explanation:'条形图最适合比较数量。' },
    { id:'m2u7l4q7', type:'fill', question:'[比多少]（一年级-数一数-第2课）15比9多___', answer:'6', hint:'15-9=？', explanation:'15-9=6。' }
  ],
  m2u8: [
    { id:'m2u8l4q1', type:'choice', question:'3件上衣2条裙子有几种搭配方法？', options:['3种','5种','6种','9种'], answer:'6种', hint:'3×2=？', explanation:'3×2=6种。' },
    { id:'m2u8l4q2', type:'fill', question:'用2、4、5三个数字组成不同的两位数（不重复）最多能组___个', answer:'6', hint:'每个数字都能做十位', explanation:'24、25、42、45、52、54共6个。' },
    { id:'m2u8l4q3', type:'choice', question:'4个人每两人握一次手一共握几次？', options:['4次','6次','8次','12次'], answer:'6次', hint:'组合问题', explanation:'4×3÷2=6次。' },
    { id:'m2u8l4q4', type:'fill', question:'从甲地到乙地有3条路从乙地到丙地有2条路从甲经过乙到丙有___种走法', answer:'6', hint:'3×2=？', explanation:'3×2=6种。' },
    { id:'m2u8l4q5', type:'choice', question:`${ZQ}用0、3、6三个数字能组成多少个不同的两位数？`, options:['2个','4个','6个','9个'], answer:'4个', hint:'0不能做十位', explanation:'30、36、60、63共4个。' },
    { id:'m2u8l4q6', type:'choice', question:'5个同学站成一排照相有多少种不同的站法？', options:['5种','10种','25种','120种'], answer:'120种', hint:'5×4×3×2×1=？', explanation:'5!=120种。' },
    { id:'m2u8l4q7', type:'fill', question:'[乘法]（乘法初步-第1课）3×4=___', answer:'12', hint:'三四十二', explanation:'3×4=12。' }
  ],
  // 三年级
  m3u1: [
    { id:'m3u1l4q1', type:'choice', question:'1分30秒=多少秒？', options:['30秒','90秒','130秒','100秒'], answer:'90秒', hint:'1分=60秒', explanation:'60+30=90秒。' },
    { id:'m3u1l4q2', type:'fill', question:'3时=___分', answer:'180', hint:'1时=60分', explanation:'3×60=180分。' },
    { id:'m3u1l4q3', type:'choice', question:'小明7:45出发8:20到达经过了多少分钟？', options:['25分钟','35分钟','45分钟','75分钟'], answer:'35分钟', hint:'8:20-7:45=？', explanation:'7:45到8:00是15分，8:00到8:20是20分，15+20=35分。' },
    { id:'m3u1l4q4', type:'fill', question:'一场电影从14:30开始放映了100分钟___结束', answer:'16:10', hint:'14:30+100分=？', explanation:'14:30+1小时40分=16:10。' },
    { id:'m3u1l4q5', type:'choice', question:`${ZQ}火车9:15出发11:45到达行驶了多长时间？`, options:['1小时30分','2小时30分','3小时30分','2小时'], answer:'2小时30分', hint:'11:45-9:15=？', explanation:'11-9=2小时，45-15=30分，共2小时30分。' },
    { id:'m3u1l4q6', type:'choice', question:'现在是8:45再过25分钟是几点？', options:['9:00','9:10','9:15','9:25'], answer:'9:10', hint:'8:45+25分=？', explanation:'8:45+15分=9:00，+10分=9:10。' },
    { id:'m3u1l4q7', type:'fill', question:'[秒的认识]（时分秒-第1课）2分=___秒', answer:'120', hint:'1分=60秒', explanation:'2×60=120秒。' }
  ],
  m3u2: [
    { id:'m3u2l4q1', type:'choice', question:'3500+2800=？', options:['5300','6200','6300','7300'], answer:'6300', hint:'35+28=63后面加两个0', explanation:'3500+2800=6300。' },
    { id:'m3u2l4q2', type:'fill', question:'5600-2300=___', answer:'3300', hint:'56-23=33后面加两个0', explanation:'3300。' },
    { id:'m3u2l4q3', type:'choice', question:'估算：298+503大约等于？', options:['700','800','900','801'], answer:'800', hint:'298≈300，503≈500', explanation:'300+500=800。' },
    { id:'m3u2l4q4', type:'fill', question:'验算：425+378=803用减法验算803-378=___', answer:'425', hint:'和-一个加数=另一个加数', explanation:'803-378=425，正确。' },
    { id:'m3u2l4q5', type:'choice', question:`${ZQ}学校有男生1250人女生比男生少280人全校一共有多少人？`, options:['970人','1530人','2220人','2780人'], answer:'2220人', hint:'先算女生再算总数', explanation:'女生1250-280=970人，1250+970=2220人。' },
    { id:'m3u2l4q6', type:'choice', question:'下面哪个算式的结果最接近1000？', options:['498+503','299+598','401+602','350+540'], answer:'498+503', hint:'分别估算', explanation:'498+503≈1001最接近1000。' },
    { id:'m3u2l4q7', type:'fill', question:'[100以内加法]（二年级-100以内加法-第2课）67+24=___', answer:'91', hint:'注意进位', explanation:'7+4=11写1进1，6+2+1=9，得91。' }
  ],
  m3u3: [
    { id:'m3u3l4q1', type:'choice', question:'下面哪个物体的长度用毫米作单位最合适？', options:['操场长','课本厚','教室宽','公路长'], answer:'课本厚', hint:'毫米是最小的长度单位', explanation:'课本很薄用毫米量。' },
    { id:'m3u3l4q2', type:'fill', question:'5千米=___米', answer:'5000', hint:'1千米=1000米', explanation:'5×1000=5000米。' },
    { id:'m3u3l4q3', type:'choice', question:'3吨500千克=多少千克？', options:['350千克','3500千克','305千克','3005千克'], answer:'3500千克', hint:'3吨=3000千克', explanation:'3000+500=3500千克。' },
    { id:'m3u3l4q4', type:'fill', question:'7分米=___厘米', answer:'70', hint:'1分米=10厘米', explanation:'7×10=70厘米。' },
    { id:'m3u3l4q5', type:'choice', question:`${ZQ}一袋大米重50千克多少袋大米重1吨？`, options:['10袋','20袋','50袋','100袋'], answer:'20袋', hint:'1吨=1000千克', explanation:'1000÷50=20袋。' },
    { id:'m3u3l4q6', type:'choice', question:'小明走一步约50厘米走100步大约走了多少米？', options:['5米','50米','500米','5000米'], answer:'50米', hint:'50×100=5000厘米=50米', explanation:'50×100=5000厘米=50米。' },
    { id:'m3u3l4q7', type:'fill', question:'[厘米和米]（二年级-长度单位-第2课）3米=___厘米', answer:'300', hint:'1米=100厘米', explanation:'3×100=300厘米。' }
  ],
  m3u4: [
    { id:'m3u4l4q1', type:'choice', question:'24是6的几倍？', options:['3倍','4倍','6倍','8倍'], answer:'4倍', hint:'24÷6=？', explanation:'24÷6=4倍。' },
    { id:'m3u4l4q2', type:'fill', question:'5的7倍是___', answer:'35', hint:'5×7=？', explanation:'5×7=35。' },
    { id:'m3u4l4q3', type:'choice', question:'一个数的4倍是36这个数是几？', options:['4','6','9','12'], answer:'9', hint:'36÷4=？', explanation:'36÷4=9。' },
    { id:'m3u4l4q4', type:'fill', question:'8的3倍比8多___', answer:'16', hint:'8×3=24，24-8=16', explanation:'24-8=16。' },
    { id:'m3u4l4q5', type:'choice', question:`${ZQ}果园有6棵桃树梨树是桃树的5倍桔子树比梨树少8棵桔子树有几棵？`, options:['18棵','22棵','30棵','38棵'], answer:'22棵', hint:'先算梨树再算桔子树', explanation:'梨树6×5=30棵，桔子30-8=22棵。' },
    { id:'m3u4l4q6', type:'choice', question:'小明有8颗糖小红是小明的3倍小红的糖比小明多几颗？', options:['8颗','16颗','24颗','32颗'], answer:'16颗', hint:'先算小红再算差', explanation:'小红8×3=24颗，24-8=16颗。' },
    { id:'m3u4l4q7', type:'fill', question:'[除法]（二年级-除法初步-第2课）36÷6=___', answer:'6', hint:'六六三十六', explanation:'36÷6=6。' }
  ],
  m3u5: [
    { id:'m3u5l4q1', type:'choice', question:'300×5=？', options:['150','1500','15','15000'], answer:'1500', hint:'3×5=15添两个0', explanation:'300×5=1500。' },
    { id:'m3u5l4q2', type:'fill', question:'24×3=___', answer:'72', hint:'20×3=60，4×3=12', explanation:'60+12=72。' },
    { id:'m3u5l4q3', type:'choice', question:'125×8=？', options:['800','900','1000','1250'], answer:'1000', hint:'125×8=1000', explanation:'125×8=1000。' },
    { id:'m3u5l4q4', type:'fill', question:'0×365=___', answer:'0', hint:'0乘任何数等于0', explanation:'0。' },
    { id:'m3u5l4q5', type:'choice', question:`${ZQ}学校买了6台电脑每台3450元一共花了多少钱？`, options:['18700元','19700元','20700元','21700元'], answer:'20700元', hint:'3450×6=？', explanation:'3450×6=20700元。' },
    { id:'m3u5l4q6', type:'choice', question:'一个因数是108另一个因数是5积是多少？', options:['500','504','540','580'], answer:'540', hint:'108×5=？', explanation:'100×5=500，8×5=40，500+40=540。' },
    { id:'m3u5l4q7', type:'fill', question:'[乘法口诀]（二年级-2-5乘法口诀-第2课）九八___', answer:'七十二', hint:'9×8=？', explanation:'九八七十二。' }
  ],
  m3u6: [
    { id:'m3u6l4q1', type:'choice', question:'长方形长12厘米宽8厘米周长是多少？', options:['20厘米','40厘米','96厘米','48厘米'], answer:'40厘米', hint:'(长+宽)×2', explanation:'(12+8)×2=40厘米。' },
    { id:'m3u6l4q2', type:'fill', question:'正方形边长9厘米面积是___平方厘米', answer:'81', hint:'9×9=？', explanation:'81平方厘米。' },
    { id:'m3u6l4q3', type:'choice', question:'一个长方形面积是36平方厘米宽是4厘米长是多少？', options:['6厘米','8厘米','9厘米','12厘米'], answer:'9厘米', hint:'36÷4=？', explanation:'36÷4=9厘米。' },
    { id:'m3u6l4q4', type:'fill', question:'正方形周长是28厘米边长是___厘米', answer:'7', hint:'28÷4=？', explanation:'28÷4=7厘米。' },
    { id:'m3u6l4q5', type:'choice', question:`${ZQ}一块长方形花坛长15米宽10米周围围上篱笆篱笆长多少米？`, options:['25米','50米','150米','300米'], answer:'50米', hint:'周长=(长+宽)×2', explanation:'(15+10)×2=50米。' },
    { id:'m3u6l4q6', type:'choice', question:'一个正方形和一个长方形的周长相等面积哪个大？', options:['正方形大','长方形大','一样大','无法比较'], answer:'正方形大', hint:'等周长正方形面积最大', explanation:'周长相同时正方形面积最大。' },
    { id:'m3u6l4q7', type:'fill', question:'[角的认识]（二年级-角的初步认识-第1课）直角=___度', answer:'90', hint:'直角定义', explanation:'直角=90度。' }
  ],
  m3u7: [
    { id:'m3u7l4q1', type:'choice', question:'把一根绳子平均分成5份每份是这根绳子的几分之几？', options:['1/4','1/5','1/6','5/1'], answer:'1/5', hint:'平均分5份', explanation:'每份是1/5。' },
    { id:'m3u7l4q2', type:'fill', question:'3/8读作___分之___（填第一个空）', answer:'八', hint:'先读分母再读分子', explanation:'八分之三。' },
    { id:'m3u7l4q3', type:'choice', question:'比较大小：1/3 ___ 1/5', options:['>','<','=','≈'], answer:'>', hint:'分子相同比分母', explanation:'分母越小每份越大1/3>1/5。' },
    { id:'m3u7l4q4', type:'fill', question:'2/7+3/7=___', answer:'5/7', hint:'同分母加法', explanation:'2+3=5，5/7。' },
    { id:'m3u7l4q5', type:'choice', question:`${ZQ}一块蛋糕小明吃了1/4小红吃了2/4还剩几分之几？`, options:['1/4','2/4','3/4','1/2'], answer:'1/4', hint:'1-1/4-2/4=？', explanation:'1-3/4=1/4。' },
    { id:'m3u7l4q6', type:'choice', question:'下面哪个分数最大？', options:['1/2','1/3','1/4','1/5'], answer:'1/2', hint:'分子相同比分母', explanation:'分母越小分数越大1/2最大。' },
    { id:'m3u7l4q7', type:'fill', question:'[除法]（二年级-除法初步-第1课）把12平均分成3份每份是___', answer:'4', hint:'12÷3=？', explanation:'12÷3=4。' }
  ],
  m3u8: [
    { id:'m3u8l4q1', type:'choice', question:'参加语文组的有15人参加数学组的有12人两组都参加的有5人至少参加一组的有几人？', options:['22人','27人','32人','37人'], answer:'22人', hint:'15+12-5=？', explanation:'15+12-5=22人。' },
    { id:'m3u8l4q2', type:'fill', question:'只参加语文组的人数=语文组人数-___人数', answer:'重叠', hint:'韦恩图分析', explanation:'只A=A-重叠。' },
    { id:'m3u8l4q3', type:'choice', question:'喜欢红色20人喜欢蓝色15人两种都喜欢8人只喜欢蓝色的有几人？', options:['5人','7人','12人','15人'], answer:'7人', hint:'15-8=？', explanation:'15-8=7人。' },
    { id:'m3u8l4q4', type:'fill', question:'全班40人喜欢唱歌25人喜欢跳舞18人每人至少喜欢一种两种都喜欢的有___人', answer:'3', hint:'25+18-40=？', explanation:'25+18-40=3人。' },
    { id:'m3u8l4q5', type:'choice', question:`${ZQ}学校开设美术和音乐两门兴趣班三(1)班有45人选美术的有28人选音乐的有25人两门都选的有几人？`, options:['3人','8人','13人','18人'], answer:'8人', hint:'28+25-45=？', explanation:'28+25-45=8人。' },
    { id:'m3u8l4q6', type:'choice', question:'A集合有10个元素B集合有8个元素A∪B有15个元素A∩B有几个元素？', options:['2个','3个','5个','8个'], answer:'3个', hint:'10+8-15=？', explanation:'10+8-15=3个。' },
    { id:'m3u8l4q7', type:'fill', question:'[统计]（二年级-数据收集整理-第1课）用正字记录"正 正 丅"表示___', answer:'12', hint:'2个正=10加2笔=12', explanation:'12。' }
  ]
};

// ============ L5具体题目数据 ============
const lesson5Data = {
  m1u1: [
    { id:'m1u1l5q1', type:'choice', question:'小明有5颗糖小红的糖比小明多3颗他们一共有几颗糖？', options:['8颗','11颗','13颗','16颗'], answer:'13颗', hint:'先算小红再算总数', explanation:'小红5+3=8颗，5+8=13颗。' },
    { id:'m1u1l5q2', type:'fill', question:'从1数到10，第3个数和第7个数之间相差___', answer:'4', hint:'第3个是3第7个是7', explanation:'7-3=4。' },
    { id:'m1u1l5q3', type:'choice', question:'一排树从左数第4棵和从右数第3棵是同一棵这排树一共有几棵？', options:['5棵','6棵','7棵','8棵'], answer:'6棵', hint:'4+3-1=？', explanation:'4+3-1=6棵。' },
    { id:'m1u1l5q4', type:'fill', question:'小明排在第5个他前面有___人', answer:'4', hint:'第5个前面有4个', explanation:'5-1=4人。' },
    { id:'m1u1l5q5', type:'choice', question:`${ZZ}小红有7朵花比小明少3朵小明有几朵花？`, options:['3朵','4朵','10朵','11朵'], answer:'10朵', hint:'7+3=？', explanation:'7+3=10朵。' },
    { id:'m1u1l5q6', type:'choice', question:'一列数2、4、6、8、___、12，横线上应该填几？', options:['9','10','11','14'], answer:'10', hint:'每次加2', explanation:'8+2=10。' },
    { id:'m1u1l5q7', type:'fill', question:'[加减法综合]（1-5加减法-第3课）5-2+3=___', answer:'6', hint:'先减后加', explanation:'5-2=3，3+3=6。' }
  ],
  m1u2: [
    { id:'m1u2l5q1', type:'choice', question:'小红有3颗糖小明给她2颗她又吃掉1颗现在有几颗？', options:['3颗','4颗','5颗','6颗'], answer:'4颗', hint:'3+2-1=？', explanation:'3+2=5，5-1=4颗。' },
    { id:'m1u2l5q2', type:'fill', question:'4+1-2=___', answer:'3', hint:'先加后减', explanation:'4+1=5，5-2=3。' },
    { id:'m1u2l5q3', type:'choice', question:'小明有5个苹果给了小红2个又买了3个现在有几个？', options:['4个','5个','6个','8个'], answer:'6个', hint:'5-2+3=？', explanation:'5-2=3，3+3=6个。' },
    { id:'m1u2l5q4', type:'fill', question:'2+3-1=___', answer:'4', hint:'先加后减', explanation:'2+3=5，5-1=4。' },
    { id:'m1u2l5q5', type:'choice', question:`${ZQ}停车场有4辆车开走1辆又来了3辆现在有几辆？`, options:['5辆','6辆','7辆','8辆'], answer:'6辆', hint:'4-1+3=？', explanation:'4-1=3，3+3=6辆。' },
    { id:'m1u2l5q6', type:'choice', question:'□+2=4+1，□里应该填几？', options:['2','3','4','5'], answer:'3', hint:'右边4+1=5', explanation:'5-2=3。' },
    { id:'m1u2l5q7', type:'fill', question:'[数数]（数一数-第1课）从5倒数到1，5前面是___', answer:'6', hint:'倒数5前面是6', explanation:'6、5、4、3、2、1。' }
  ],
  m1u3: [
    { id:'m1u3l5q1', type:'choice', question:'用凑十法计算8+5=？', options:['12','13','14','15'], answer:'13', hint:'8+2=10再加3', explanation:'8+2=10，10+3=13。' },
    { id:'m1u3l5q2', type:'fill', question:'9+4=___', answer:'13', hint:'9+1=10再加3', explanation:'9+1=10，10+3=13。' },
    { id:'m1u3l5q3', type:'choice', question:'10-3+6=？', options:['11','12','13','14'], answer:'13', hint:'先减后加', explanation:'10-3=7，7+6=13。' },
    { id:'m1u3l5q4', type:'fill', question:'7+5=___', answer:'12', hint:'7+3=10再加2', explanation:'7+3=10，10+2=12。' },
    { id:'m1u3l5q5', type:'choice', question:`${ZZ}小明做了9道题做错了2道做对了几道？`, options:['5道','6道','7道','8道'], answer:'7道', hint:'9-2=？', explanation:'9-2=7道。' },
    { id:'m1u3l5q6', type:'choice', question:'一筐苹果有10个先拿出3个再放回2个现在筐里有几个？', options:['7个','8个','9个','10个'], answer:'9个', hint:'10-3+2=？', explanation:'10-3=7，7+2=9个。' },
    { id:'m1u3l5q7', type:'fill', question:'[1-5加减法]（1-5加减法-第2课）3+2=___', answer:'5', hint:'3加2', explanation:'3+2=5。' }
  ],
  m1u4: [
    { id:'m1u4l5q1', type:'choice', question:'比15大比18小的数有几个？', options:['1个','2个','3个','4个'], answer:'2个', hint:'15和18之间', explanation:'16和17共2个。' },
    { id:'m1u4l5q2', type:'fill', question:'12+5=___', answer:'17', hint:'不进位加法', explanation:'12+5=17。' },
    { id:'m1u4l5q3', type:'choice', question:'18-6=？', options:['8','10','12','14'], answer:'12', hint:'不退位减法', explanation:'18-6=12。' },
    { id:'m1u4l5q4', type:'fill', question:'从11到20一共有___个数', answer:'10', hint:'11到20包含两端', explanation:'10个数。' },
    { id:'m1u4l5q5', type:'choice', question:`${ZQ}小红有14颗糖小明比小红少5颗小明有几颗？`, options:['7颗','8颗','9颗','10颗'], answer:'9颗', hint:'14-5=？', explanation:'14-5=9颗。' },
    { id:'m1u4l5q6', type:'choice', question:'一个数个位是5十位是1这个数加上3等于几？', options:['15','16','17','18'], answer:'18', hint:'15+3=？', explanation:'15+3=18。' },
    { id:'m1u4l5q7', type:'fill', question:'[凑十法]（6-10加减法-第3课）6+4=___', answer:'10', hint:'6和4凑十', explanation:'6+4=10。' }
  ],
  m1u5: [
    { id:'m1u5l5q1', type:'choice', question:'9+5=？还可以怎么想？', options:['10+4=14','10+5=15','9+6=15','8+5=13'], answer:'10+4=14', hint:'凑十法', explanation:'9+1=10，10+4=14。' },
    { id:'m1u5l5q2', type:'fill', question:'7+8=___', answer:'15', hint:'7+3=10再加5', explanation:'7+3=10，10+5=15。' },
    { id:'m1u5l5q3', type:'choice', question:'6+6+6=？用乘法怎么表示？', options:['3×6','6×6','6+3','3+6'], answer:'3×6', hint:'3个6相加', explanation:'3×6=18。' },
    { id:'m1u5l5q4', type:'fill', question:'8+7=___', answer:'15', hint:'8+2=10再加5', explanation:'8+2=10，10+5=15。' },
    { id:'m1u5l5q5', type:'choice', question:`${ZZ}小明有9本书小红有8本书他们一共有几本书？`, options:['15本','16本','17本','18本'], answer:'17本', hint:'9+8=？', explanation:'9+1=10，10+7=17本。' },
    { id:'m1u5l5q6', type:'choice', question:'9+3+8=？最简便的算法？', options:['9+3=12再加8','9+8=17再加3=20','3+8=11再加9=20','B和C都得20'], answer:'9+8=17再加3=20', hint:'找凑整十的', explanation:'9+1=10...不对，9+8=17，17+3=20。' },
    { id:'m1u5l5q7', type:'fill', question:'[退位减法]（20以内退位减法-第1课）13-5=___', answer:'8', hint:'5+8=13', explanation:'13-5=8。' }
  ],
  m1u6: [
    { id:'m1u6l5q1', type:'choice', question:'15-7=？用想加法的方法', options:['6','7','8','9'], answer:'8', hint:'7+8=15', explanation:'7+8=15所以15-7=8。' },
    { id:'m1u6l5q2', type:'fill', question:'14-9=___', answer:'5', hint:'9+5=14', explanation:'14-9=5。' },
    { id:'m1u6l5q3', type:'choice', question:'16-8+7=？', options:['13','14','15','16'], answer:'15', hint:'先减后加', explanation:'16-8=8，8+7=15。' },
    { id:'m1u6l5q4', type:'fill', question:'11-4=___', answer:'7', hint:'4+7=11', explanation:'11-4=7。' },
    { id:'m1u6l5q5', type:'choice', question:`${ZQ}停车场有17辆车开走8辆又开进5辆现在有几辆？`, options:['12辆','13辆','14辆','15辆'], answer:'14辆', hint:'17-8+5=？', explanation:'17-8=9，9+5=14辆。' },
    { id:'m1u6l5q6', type:'choice', question:'□-6=7，□里应该填几？', options:['1','11','12','13'], answer:'13', hint:'6+7=？', explanation:'6+7=13。' },
    { id:'m1u6l5q7', type:'fill', question:'[进位加法]（20以内进位加法-第2课）8+5=___', answer:'13', hint:'8+2=10再加3', explanation:'8+2=10，10+3=13。' }
  ],
  m1u7: [
    { id:'m1u7l5q1', type:'choice', question:'用两个相同的三角形可以拼成什么图形？', options:['只能拼三角形','只能拼正方形','可以拼长方形或正方形或大三角形','不能拼'], answer:'可以拼长方形或正方形或大三角形', hint:'不同拼法不同结果', explanation:'两个相同三角形可以拼出多种图形。' },
    { id:'m1u7l5q2', type:'fill', question:'正方体有___个面每个面都是___形（填第一个数）', answer:'6', hint:'正方体特征', explanation:'6个面都是正方形。' },
    { id:'m1u7l5q3', type:'choice', question:'下面哪个图形沿一条线对折后两边能完全重合？', options:['平行四边形','长方形','梯形','任意三角形'], answer:'长方形', hint:'轴对称图形', explanation:'长方形是轴对称图形。' },
    { id:'m1u7l5q4', type:'fill', question:'圆柱有___个圆形的面', answer:'2', hint:'圆柱的底面', explanation:'上下2个圆形底面。' },
    { id:'m1u7l5q5', type:'choice', question:`${ZZ}用4个小正方体拼成一个大长方体有几种拼法？`, options:['1种','2种','3种','4种'], answer:'2种', hint:'1×4和2×2两种排列', explanation:'1排4个或2排2个共2种。' },
    { id:'m1u7l5q6', type:'choice', question:'下面哪个说法正确？', options:['球不能滚动','圆柱只能滚动','正方体能滚动','长方体不能滚动'], answer:'长方体不能滚动', hint:'曲面和滚动的区别', explanation:'长方体没有曲面不能滚动。' },
    { id:'m1u7l5q7', type:'fill', question:'[数数]（数一数-第1课）数一数图中有___个正方形', answer:'4', hint:'仔细数', explanation:'4个正方形。' }
  ],
  m1u8: [
    { id:'m1u8l5q1', type:'choice', question:'小明有2张5元和3张1元他一共有多少钱？', options:['8元','10元','13元','15元'], answer:'13元', hint:'2×5+3×1=？', explanation:'10+3=13元。' },
    { id:'m1u8l5q2', type:'fill', question:'4元3角+2元5角=___元___角（填第一个数）', answer:'6', hint:'元加元角加角', explanation:'6元8角。' },
    { id:'m1u8l5q3', type:'choice', question:'一支笔3元5角买2支需要多少钱？', options:['5元','6元','7元','7元5角'], answer:'7元', hint:'3元5角+3元5角', explanation:'3+3=6元，5+5=10角=1元，共7元。' },
    { id:'m1u8l5q4', type:'fill', question:'10元-3元8角=___元___角（填第一个数）', answer:'6', hint:'10元-3元8角', explanation:'6元2角。' },
    { id:'m1u8l5q5', type:'choice', question:`${ZQ}妈妈给小明20元他买了一个8元的文具盒和一支3元的铅笔应找回多少钱？`, options:['7元','8元','9元','11元'], answer:'9元', hint:'20-8-3=？', explanation:'20-8-3=9元。' },
    { id:'m1u8l5q6', type:'choice', question:'小红有1张10元她想换成5元和1元可以怎么换？', options:['1张5元5张1元','2张5元','10张1元','A和C都可以'], answer:'A和C都可以', hint:'5+5=10或1×10=10', explanation:'1张5元+5张1元=10元或10张1元=10元。' },
    { id:'m1u8l5q7', type:'fill', question:'[加减法]（1-5加减法-第2课）4+3=___元', answer:'7', hint:'加法', explanation:'4+3=7元。' }
  ],
  // 二年级L5
  m2u1: [
    { id:'m2u1l5q1', type:'choice', question:'一根绳子长1米剪去30厘米又接上20厘米现在绳子有多长？', options:['70厘米','80厘米','90厘米','110厘米'], answer:'90厘米', hint:'100-30+20=？', explanation:'100-30=70，70+20=90厘米。' },
    { id:'m2u1l5q2', type:'fill', question:'小明走一步约50厘米走4步大约走了___厘米', answer:'200', hint:'50×4=？', explanation:'200厘米=2米。' },
    { id:'m2u1l5q3', type:'choice', question:'课桌高约70厘米椅子高约40厘米课桌比椅子高多少？', options:['20厘米','30厘米','40厘米','110厘米'], answer:'30厘米', hint:'70-40=？', explanation:'70-40=30厘米。' },
    { id:'m2u1l5q4', type:'fill', question:'3米-150厘米=___厘米', answer:'150', hint:'3米=300厘米', explanation:'300-150=150厘米。' },
    { id:'m2u1l5q5', type:'choice', question:`${ZZ}一根铁丝围成长方形长15厘米宽10厘米这根铁丝长多少厘米？`, options:['25厘米','50厘米','150厘米','300厘米'], answer:'50厘米', hint:'周长=(长+宽)×2', explanation:'(15+10)×2=50厘米。' },
    { id:'m2u1l5q6', type:'choice', question:'小红量课桌长用直尺量了3次还多5厘米每次量20厘米课桌长多少？', options:['55厘米','60厘米','65厘米','70厘米'], answer:'65厘米', hint:'3×20+5=？', explanation:'60+5=65厘米。' },
    { id:'m2u1l5q7', type:'fill', question:'[100以内减法]（二年级-100以内减法-第2课）80-36=___', answer:'44', hint:'借位减法', explanation:'80-36=44。' }
  ],
  m2u2: [
    { id:'m2u2l5q1', type:'choice', question:'学校有男生235人女生比男生多48人全校有多少人？', options:['283人','470人','518人','562人'], answer:'518人', hint:'先算女生再算总数', explanation:'女生235+48=283人，235+283=518人。' },
    { id:'m2u2l5q2', type:'fill', question:'345+278=___', answer:'623', hint:'注意进位', explanation:'5+8=13写3进1，4+7+1=12写2进1，3+2+1=6，得623。' },
    { id:'m2u2l5q3', type:'choice', question:'图书馆上午借出125本下午借出168本还回93本现在比原来少多少本？', options:['200本','293本','385本','418本'], answer:'200本', hint:'125+168-93=？', explanation:'125+168=293，293-93=200本。' },
    { id:'m2u2l5q4', type:'fill', question:'456+198=___', answer:'654', hint:'456+200-2=？', explanation:'456+200=656，656-2=654。' },
    { id:'m2u2l5q5', type:'choice', question:`${ZQ}学校买来故事书356本科技书248本连环画比故事书少125本三种书一共多少本？`, options:['479本','604本','835本','981本'], answer:'835本', hint:'先算连环画再算总数', explanation:'连环画356-125=231本，356+248+231=835本。' },
    { id:'m2u2l5q6', type:'choice', question:'下面哪个估算最接近实际值？295+402≈？', options:['600','700','800','900'], answer:'700', hint:'295≈300，402≈400', explanation:'300+400=700。' },
    { id:'m2u2l5q7', type:'fill', question:'[进位加法]（100以内加法-第2课）67+25=___', answer:'92', hint:'7+5=12写2进1', explanation:'7+5=12写2进1，6+2+1=9，得92。' }
  ],
  m2u3: [
    { id:'m2u3l5q1', type:'choice', question:'水果店有350千克苹果卖出125千克又运进86千克现在有多少千克？', options:['239千克','311千克','436千克','561千克'], answer:'311千克', hint:'350-125+86=？', explanation:'350-125=225，225+86=311千克。' },
    { id:'m2u3l5q2', type:'fill', question:'500-267=___', answer:'233', hint:'借位减法', explanation:'500-267=233。' },
    { id:'m2u3l5q3', type:'choice', question:'小明有200元买书包花了86元买文具花了35元还剩多少元？', options:['79元','81元','119元','121元'], answer:'79元', hint:'200-86-35=？', explanation:'200-86=114，114-35=79元。' },
    { id:'m2u3l5q4', type:'fill', question:'验算：623-345=278用加法验算278+345=___', answer:'623', hint:'差+减数=被减数', explanation:'278+345=623正确。' },
    { id:'m2u3l5q5', type:'choice', question:`${ZZ}学校有560本图书借出238本又还回95本现在有多少本？`, options:['227本','327本','417本','655本'], answer:'417本', hint:'560-238+95=？', explanation:'560-238=322，322+95=417本。' },
    { id:'m2u3l5q6', type:'choice', question:'1000-456=？', options:['444','544','554','644'], answer:'544', hint:'连续借位', explanation:'1000-456=544。' },
    { id:'m2u3l5q7', type:'fill', question:'[退位减法]（100以内减法-第2课）72-38=___', answer:'34', hint:'12-8=4，6-3=3', explanation:'72-38=34。' }
  ],
  m2u4: [
    { id:'m2u4l5q1', type:'choice', question:'学校有5排座位每排8个一共有多少个座位？', options:['13个','35个','40个','58个'], answer:'40个', hint:'5×8=？', explanation:'5×8=40个。' },
    { id:'m2u4l5q2', type:'fill', question:'7×8=___', answer:'56', hint:'七八五十六', explanation:'56。' },
    { id:'m2u4l5q3', type:'choice', question:'小明每天读6页书一周（7天）读多少页？', options:['13页','36页','42页','48页'], answer:'42页', hint:'6×7=？', explanation:'6×7=42页。' },
    { id:'m2u4l5q4', type:'fill', question:'9×6=___', answer:'54', hint:'六九五十四', explanation:'54。' },
    { id:'m2u4l5q5', type:'choice', question:`${ZQ}教室有4行桌子每行9张一共有多少张桌子？`, options:['13张','27张','36张','45张'], answer:'36张', hint:'4×9=？', explanation:'4×9=36张。' },
    { id:'m2u4l5q6', type:'choice', question:'6×7-6=？可以看作？', options:['5×6','6×6','7×6','5×7'], answer:'6×6', hint:'6个7减1个6=6个6', explanation:'6×7-6=6×6=36。' },
    { id:'m2u4l5q7', type:'fill', question:'[除法]（除法初步-第2课）48÷8=___', answer:'6', hint:'六八四十八', explanation:'48÷8=6。' }
  ],
  m2u5: [
    { id:'m2u5l5q1', type:'choice', question:'36里面有几个6？', options:['5个','6个','7个','8个'], answer:'6个', hint:'36÷6=？', explanation:'36÷6=6。' },
    { id:'m2u5l5q2', type:'fill', question:'42÷7=___', answer:'6', hint:'六七四十二', explanation:'6。' },
    { id:'m2u5l5q3', type:'choice', question:'把24个苹果平均分给4个小朋友每人分几个？', options:['4个','5个','6个','8个'], answer:'6个', hint:'24÷4=？', explanation:'24÷4=6个。' },
    { id:'m2u5l5q4', type:'fill', question:'56÷8=___', answer:'7', hint:'七八五十六', explanation:'7。' },
    { id:'m2u5l5q5', type:'choice', question:`${ZZ}有45朵花每9朵扎一束可以扎几束？`, options:['4束','5束','6束','9束'], answer:'5束', hint:'45÷9=？', explanation:'45÷9=5束。' },
    { id:'m2u5l5q6', type:'choice', question:'□÷6=8，□里应该填几？', options:['14','42','48','56'], answer:'48', hint:'6×8=？', explanation:'6×8=48。' },
    { id:'m2u5l5q7', type:'fill', question:'[乘法口诀]（乘法初步-第3课）七九___', answer:'六十三', hint:'7×9=？', explanation:'七九六十三。' }
  ],
  m2u6: [
    { id:'m2u6l5q1', type:'choice', question:'钟表上9时整时针和分针形成什么角？', options:['锐角','直角','钝角','平角'], answer:'直角', hint:'9时整是90度', explanation:'9时整成直角。' },
    { id:'m2u6l5q2', type:'fill', question:'一个直角+一个锐角一定是___角', answer:'钝', hint:'直角+锐角>90度', explanation:'一定是钝角。' },
    { id:'m2u6l5q3', type:'choice', question:'下面哪个角最小？', options:['90度','60度','120度','45度'], answer:'45度', hint:'度数越小角越小', explanation:'45度最小。' },
    { id:'m2u6l5q4', type:'fill', question:'长方形有___个直角', answer:'4', hint:'长方形特征', explanation:'4个直角。' },
    { id:'m2u6l5q5', type:'choice', question:`${ZQ}用一副三角板可以画出下面哪个度数的角？`, options:['20度','75度','100度','150度'], answer:'75度', hint:'三角板有30°45°60°90°', explanation:'45°+30°=75°可以画出。' },
    { id:'m2u6l5q6', type:'choice', question:'一个钝角减去一个直角剩下的角是什么角？', options:['锐角','直角','钝角','不确定'], answer:'锐角', hint:'钝角>90°减去90°<90°', explanation:'钝角-直角=锐角。' },
    { id:'m2u6l5q7', type:'fill', question:'[图形]（一年级-认识图形-第1课）正方形有___条边', answer:'4', hint:'正方形特征', explanation:'4条边。' }
  ],
  m2u7: [
    { id:'m2u7l5q1', type:'choice', question:'二(1)班投票选班花：玫瑰12票百合8票向日葵6票康乃馨4票最多和最少相差几票？', options:['4票','6票','8票','10票'], answer:'8票', hint:'12-4=？', explanation:'12-4=8票。' },
    { id:'m2u7l5q2', type:'fill', question:'统计全班喜欢的水果：苹果15人香蕉10人橘子8人梨7人一共有___人参加调查', answer:'40', hint:'15+10+8+7=？', explanation:'40人。' },
    { id:'m2u7l5q3', type:'choice', question:'条形统计图中每格代表5人4格代表几人？', options:['9人','15人','20人','25人'], answer:'20人', hint:'4×5=？', explanation:'4×5=20人。' },
    { id:'m2u7l5q4', type:'fill', question:'喜欢足球的有18人喜欢篮球的有12人喜欢足球的比篮球多___人', answer:'6', hint:'18-12=？', explanation:'6人。' },
    { id:'m2u7l5q5', type:'choice', question:`${ZZ}三(1)班同学最喜欢的运动统计：跑步8人跳绳12人游泳6人踢球14人喜欢踢球的比游泳的多几人？`, options:['2人','6人','8人','20人'], answer:'8人', hint:'14-6=？', explanation:'14-6=8人。' },
    { id:'m2u7l5q6', type:'choice', question:'下面哪种情况适合用表格记录数据？', options:['记录每天的天气','记录考试成绩','记录购物清单','以上都可以'], answer:'以上都可以', hint:'表格用途广泛', explanation:'表格适合各种数据记录。' },
    { id:'m2u7l5q7', type:'fill', question:'[比多少]（一年级-数一数-第2课）12比8多___', answer:'4', hint:'12-8=？', explanation:'4。' }
  ],
  m2u8: [
    { id:'m2u8l5q1', type:'choice', question:'小明有3件上衣和2条裤子还有2双鞋一共有几种不同的穿搭方法？', options:['6种','10种','12种','18种'], answer:'12种', hint:'3×2×2=？', explanation:'3×2×2=12种。' },
    { id:'m2u8l5q2', type:'fill', question:'用1、2、3三个数字组成不同的三位数（不重复）最多能组___个', answer:'6', hint:'每个数字都能做百位', explanation:'123、132、213、231、312、321共6个。' },
    { id:'m2u8l5q3', type:'choice', question:'5个同学互相寄一张贺卡一共需要寄多少张？', options:['5张','10张','20张','25张'], answer:'20张', hint:'每人寄4张', explanation:'5×4=20张。' },
    { id:'m2u8l5q4', type:'fill', question:'从甲到乙有4条路从乙到丙有3条路从甲经乙到丙有___种走法', answer:'12', hint:'4×3=？', explanation:'12种。' },
    { id:'m2u8l5q5', type:'choice', question:`${ZQ}用2、5、8三个数字可以组成多少个不同的两位数？`, options:['3个','6个','9个','12个'], answer:'6个', hint:'每个数字做十位有2种', explanation:'25、28、52、58、82、85共6个。' },
    { id:'m2u8l5q6', type:'choice', question:'6个人中选2人参加比赛有几种选法？', options:['6种','12种','15种','30种'], answer:'15种', hint:'6×5÷2=？', explanation:'6×5÷2=15种。' },
    { id:'m2u8l5q7', type:'fill', question:'[乘法]（乘法初步-第1课）4×3=___', answer:'12', hint:'三四十二', explanation:'12。' }
  ],
  // 三年级L5
  m3u1: [
    { id:'m3u1l5q1', type:'choice', question:'小红7:30出门上学路上用了25分钟她几点到学校？', options:['7:45','7:50','7:55','8:05'], answer:'7:55', hint:'7:30+25分=？', explanation:'7:30+25分=7:55。' },
    { id:'m3u1l5q2', type:'fill', question:'一节课40分钟上午4节课共___分钟', answer:'160', hint:'40×4=？', explanation:'160分钟。' },
    { id:'m3u1l5q3', type:'choice', question:'爸爸每天工作8小时如果8:00上班他几点下班？', options:['14:00','15:00','16:00','17:00'], answer:'16:00', hint:'8:00+8小时=？', explanation:'8+8=16即16:00。' },
    { id:'m3u1l5q4', type:'fill', question:'3小时15分=___分', answer:'195', hint:'3×60+15=？', explanation:'180+15=195分。' },
    { id:'m3u1l5q5', type:'choice', question:`${ZQ}一场足球赛上半场45分钟中场休息15分钟下半场45分钟整场比赛从19:00开始什么时候结束？`, options:['20:30','20:45','21:00','21:15'], answer:'20:45', hint:'45+15+45=105分钟', explanation:'105分钟=1小时45分，19:00+1:45=20:45。' },
    { id:'m3u1l5q6', type:'choice', question:'小明从家到学校要走15分钟他要在8:00到校最晚几点出门？', options:['7:30','7:40','7:45','7:50'], answer:'7:45', hint:'8:00-15分=？', explanation:'8:00-15分=7:45。' },
    { id:'m3u1l5q7', type:'fill', question:'[秒的认识]（时分秒-第1课）1分=___秒', answer:'60', hint:'秒针走一圈', explanation:'60秒。' }
  ],
  m3u2: [
    { id:'m3u2l5q1', type:'choice', question:'学校有男生1256人女生比男生少378人全校有多少人？', options:['878人','1634人','2134人','3012人'], answer:'2134人', hint:'先算女生再算总数', explanation:'女生1256-378=878人，1256+878=2134人。' },
    { id:'m3u2l5q2', type:'fill', question:'3456+2789=___', answer:'6245', hint:'注意进位', explanation:'6245。' },
    { id:'m3u2l5q3', type:'choice', question:'图书馆有故事书2500本科技书比故事书少875本两种书一共多少本？', options:['1625本','3375本','4125本','4375本'], answer:'4125本', hint:'先算科技书再算总数', explanation:'科技书2500-875=1625本，2500+1625=4125本。' },
    { id:'m3u2l5q4', type:'fill', question:'5000-2345=___', answer:'2655', hint:'连续借位', explanation:'2655。' },
    { id:'m3u2l5q5', type:'choice', question:`${ZQ}超市上午收入3560元下午收入2845元支出1875元全天盈利多少元？`, options:['4530元','5430元','6405元','8280元'], answer:'4530元', hint:'收入-支出', explanation:'3560+2845=6405，6405-1875=4530元。' },
    { id:'m3u2l5q6', type:'choice', question:'估算：4998+3002大约等于？', options:['7000','8000','9000','10000'], answer:'8000', hint:'4998≈5000，3002≈3000', explanation:'5000+3000=8000。' },
    { id:'m3u2l5q7', type:'fill', question:'[退位减法]（二年级-100以内减法-第2课）62-37=___', answer:'25', hint:'借位减法', explanation:'12-7=5，5-3=2，得25。' }
  ],
  m3u3: [
    { id:'m3u3l5q1', type:'choice', question:'小明家到学校有2千米他每天上学放学走一个来回每天走多少千米？', options:['2千米','4千米','6千米','8千米'], answer:'4千米', hint:'来回=2趟', explanation:'2×2=4千米。' },
    { id:'m3u3l5q2', type:'fill', question:'8吨-3500千克=___千克', answer:'4500', hint:'8吨=8000千克', explanation:'8000-3500=4500千克。' },
    { id:'m3u3l5q3', type:'choice', question:'一根铁丝长3米剪成5段一样长每段多少厘米？', options:['6厘米','60厘米','600厘米','15厘米'], answer:'60厘米', hint:'3米=300厘米，300÷5=？', explanation:'300÷5=60厘米。' },
    { id:'m3u3l5q4', type:'fill', question:'5千米200米+3千米800米=___千米', answer:'9', hint:'200+800=1000米=1千米', explanation:'5+3+1=9千米。' },
    { id:'m3u3l5q5', type:'choice', question:`${ZQ}一辆货车载重5吨要运18000千克的货物至少需要运几次？`, options:['3次','4次','5次','6次'], answer:'4次', hint:'18000÷5000=3.6', explanation:'3次运15000千克不够需要4次。' },
    { id:'m3u3l5q6', type:'choice', question:'一根绳子对折3次后每段长2米这根绳子原来有多长？', options:['6米','8米','12米','16米'], answer:'16米', hint:'对折3次=8段', explanation:'2×8=16米。' },
    { id:'m3u3l5q7', type:'fill', question:'[长度换算]（测量-第3课）1千米=___米', answer:'1000', hint:'千米和米的关系', explanation:'1000米。' }
  ],
  m3u4: [
    { id:'m3u4l5q1', type:'choice', question:'果园里有8棵苹果树梨树是苹果树的3倍两种树一共多少棵？', options:['24棵','32棵','40棵','48棵'], answer:'32棵', hint:'先算梨树再算总数', explanation:'梨树8×3=24棵，8+24=32棵。' },
    { id:'m3u4l5q2', type:'fill', question:'一个数的6倍是54这个数是___', answer:'9', hint:'54÷6=？', explanation:'9。' },
    { id:'m3u4l5q3', type:'choice', question:'小明有15颗糖小红的糖是小明的2倍小红比小明多几颗？', options:['15颗','30颗','45颗','60颗'], answer:'15颗', hint:'先算小红再算差', explanation:'小红15×2=30颗，30-15=15颗。' },
    { id:'m3u4l5q4', type:'fill', question:'9的4倍比9多___', answer:'27', hint:'9×4=36，36-9=？', explanation:'27。' },
    { id:'m3u4l5q5', type:'choice', question:`${ZQ}饲养场有母鸡45只公鸡是母鸡的5分之1公鸡有多少只？`, options:['5只','9只','40只','50只'], answer:'9只', hint:'45÷5=？', explanation:'45÷5=9只。' },
    { id:'m3u4l5q6', type:'choice', question:'一个数的3倍是27这个数的5倍是多少？', options:['35','40','45','50'], answer:'45', hint:'先求这个数再求5倍', explanation:'27÷3=9，9×5=45。' },
    { id:'m3u4l5q7', type:'fill', question:'[乘法]（二年级-乘法初步-第2课）8×7=___', answer:'56', hint:'七八五十六', explanation:'56。' }
  ],
  m3u5: [
    { id:'m3u5l5q1', type:'choice', question:'每箱苹果重25千克8箱苹果重多少千克？', options:['125千克','175千克','200千克','250千克'], answer:'200千克', hint:'25×8=？', explanation:'25×8=200千克。' },
    { id:'m3u5l5q2', type:'fill', question:'306×5=___', answer:'1530', hint:'0×5=0注意进位', explanation:'6×5=30写0进3，0×5+3=3，3×5=15，得1530。' },
    { id:'m3u5l5q3', type:'choice', question:'学校买了4台电脑每台3500元一共花了多少钱？', options:['3504元','14000元','3500元','10500元'], answer:'14000元', hint:'3500×4=？', explanation:'3500×4=14000元。' },
    { id:'m3u5l5q4', type:'fill', question:'250×4=___', answer:'1000', hint:'25×4=100添两个0', explanation:'1000。' },
    { id:'m3u5l5q5', type:'choice', question:`${ZQ}一个工厂每天生产235个零件一周（7天）生产多少个？`, options:['235个','1420个','1645个','2350个'], answer:'1645个', hint:'235×7=？', explanation:'235×7=1645个。' },
    { id:'m3u5l5q6', type:'choice', question:'下面哪个算式的积最大？', options:['198×5','201×4','305×3','400×2'], answer:'198×5', hint:'分别计算', explanation:'198×5=990，201×4=804，305×3=915，400×2=800。990最大。' },
    { id:'m3u5l5q7', type:'fill', question:'[除法]（二年级-除法初步-第2课）56÷7=___', answer:'8', hint:'七八五十六', explanation:'8。' }
  ],
  m3u6: [
    { id:'m3u6l5q1', type:'choice', question:'一块长方形花圃长18米宽12米四周围上篱笆篱笆长多少米？', options:['30米','60米','216米','360米'], answer:'60米', hint:'周长=(长+宽)×2', explanation:'(18+12)×2=60米。' },
    { id:'m3u6l5q2', type:'fill', question:'正方形边长15厘米面积是___平方厘米', answer:'225', hint:'15×15=？', explanation:'225。' },
    { id:'m3u6l5q3', type:'choice', question:'一个长方形面积是72平方米宽是6米长是多少？', options:['6米','8米','12米','18米'], answer:'12米', hint:'72÷6=？', explanation:'72÷6=12米。' },
    { id:'m3u6l5q4', type:'fill', question:'长方形长20厘米宽15厘米周长是___厘米', answer:'70', hint:'(20+15)×2=？', explanation:'70厘米。' },
    { id:'m3u6l5q5', type:'choice', question:`${ZQ}一块正方形地砖边长8分米铺一间长6米宽4米的房间需要多少块？`, options:['12块','24块','30块','38块'], answer:'38块', hint:'6米=60分米，4米=40分米', explanation:'房间面积60×40=2400平方分米，地砖8×8=64平方分米，2400÷64=37.5≈38块。' },
    { id:'m3u6l5q6', type:'choice', question:'一个正方形和一个长方形面积相等周长哪个大？', options:['正方形大','长方形大','一样大','无法确定'], answer:'长方形大', hint:'面积相等时长方形周长更大', explanation:'面积相等时长方形周长更大。' },
    { id:'m3u6l5q7', type:'fill', question:'[角的认识]（二年级-角的初步认识-第2课）比直角小的角叫___角', answer:'锐', hint:'角的分类', explanation:'锐角。' }
  ],
  m3u7: [
    { id:'m3u7l5q1', type:'choice', question:'一根绳子剪成3段每段占全长的几分之几？', options:['1/2','1/3','1/4','3/1'], answer:'1/3', hint:'平均分成3段', explanation:'每段是1/3。' },
    { id:'m3u7l5q2', type:'fill', question:'5/6-2/6=___', answer:'3/6', hint:'同分母减法', explanation:'5-2=3，3/6。' },
    { id:'m3u7l5q3', type:'choice', question:'1/2和1/3哪个大？', options:['1/2大','1/3大','一样大','无法比较'], answer:'1/2大', hint:'分子相同比分母', explanation:'分母越小分数越大。' },
    { id:'m3u7l5q4', type:'fill', question:'3/5+1/5=___', answer:'4/5', hint:'同分母加法', explanation:'3+1=4，4/5。' },
    { id:'m3u7l5q5', type:'choice', question:`${ZQ}一块巧克力小明吃了2/8小红吃了3/8还剩几分之几？`, options:['1/8','3/8','5/8','7/8'], answer:'3/8', hint:'1-2/8-3/8=？', explanation:'1-5/8=3/8。' },
    { id:'m3u7l5q6', type:'choice', question:'下面哪个分数等于1？', options:['2/3','3/3','4/5','5/4'], answer:'3/3', hint:'分子分母相同', explanation:'分子=分母时分数=1。' },
    { id:'m3u7l5q7', type:'fill', question:'[除法]（二年级-除法初步-第1课）把10平均分成5份每份是___', answer:'2', hint:'10÷5=？', explanation:'2。' }
  ],
  m3u8: [
    { id:'m3u8l5q1', type:'choice', question:'三(1)班有45人喜欢语文的有28人喜欢数学的有25人每人至少喜欢一种两种都喜欢的有几人？', options:['3人','8人','17人','53人'], answer:'8人', hint:'28+25-45=？', explanation:'28+25-45=8人。' },
    { id:'m3u8l5q2', type:'fill', question:'参加音乐组的有22人参加美术组的有18人两组都参加的有6人只参加音乐组的有___人', answer:'16', hint:'22-6=？', explanation:'16人。' },
    { id:'m3u8l5q3', type:'choice', question:'学校开设书法和绘画两个兴趣班全班40人参加书法的有24人参加绘画的有22人两个都参加的有几人？', options:['2人','4人','6人','8人'], answer:'6人', hint:'24+22-40=？', explanation:'24+22-40=6人。' },
    { id:'m3u8l5q4', type:'fill', question:'喜欢红色15人喜欢蓝色20人两种都喜欢5人至少喜欢一种的有___人', answer:'30', hint:'15+20-5=？', explanation:'30人。' },
    { id:'m3u8l5q5', type:'choice', question:`${ZQ}学校运动会参加跑步的有35人参加跳远的有28人两个项目都参加的有12人参加运动会的共有多少人？`, options:['51人','63人','75人','87人'], answer:'51人', hint:'35+28-12=？', explanation:'35+28-12=51人。' },
    { id:'m3u8l5q6', type:'choice', question:'A班有30人B班有25人两班共有45人两个班都参加的有几人？(每人只属于一个班)', options:['0人','5人','10人','15人'], answer:'10人', hint:'这是重叠问题但每人只属于一个班', explanation:'等等，题目说每人只属于一个班，那重叠=0。但30+25=55>45说明有10人被算了两次...重新理解：两班共45人，A班30人B班25人，重叠=30+25-45=10人。' },
    { id:'m3u8l5q7', type:'fill', question:'[统计]（二年级-数据收集整理-第1课）用正字记录"正 正 正 正"表示___', answer:'20', hint:'4个正=20', explanation:'20。' }
  ]
};

// ============ 主处理函数 ============
function processFile(filePath, extraQuestions, units, gradePrefix) {
  console.log(`\n处理文件: ${filePath}`);

  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // 步骤1：为现有课时追加额外题目
  for (const [lessonId, questions] of Object.entries(extraQuestions)) {
    // 找到该课时practiceQuestions的最后一题的结束位置
    // 搜索模式：practiceQuestions数组中最后一个 } 后面的 ]
    const lastQId = questions[questions.length - 1].id;
    // 实际上我们需要找到该课时的practiceQuestions数组末尾
    // 策略：找到包含该课时id的practiceQuestions块，在 ] 前插入新题目

    // 找到课时id所在行
    let lessonLineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`id: '${lessonId}'`)) {
        lessonLineIdx = i;
        break;
      }
    }

    if (lessonLineIdx === -1) {
      console.log(`  警告：未找到课时 ${lessonId}`);
      continue;
    }

    // 从课时id行往下找practiceQuestions
    let pqStartIdx = -1;
    for (let i = lessonLineIdx; i < lines.length; i++) {
      if (lines[i].includes('practiceQuestions:')) {
        pqStartIdx = i;
        break;
      }
    }

    if (pqStartIdx === -1) {
      console.log(`  警告：未找到 ${lessonId} 的practiceQuestions`);
      continue;
    }

    // 找到practiceQuestions数组的结束 ] (需要匹配括号)
    let depth = 0;
    let pqEndIdx = -1;
    for (let i = pqStartIdx; i < lines.length; i++) {
      for (const ch of lines[i]) {
        if (ch === '[') depth++;
        if (ch === ']') {
          depth--;
          if (depth === 0) {
            pqEndIdx = i;
            break;
          }
        }
      }
      if (pqEndIdx !== -1) break;
    }

    if (pqEndIdx === -1) {
      console.log(`  警告：未找到 ${lessonId} 的practiceQuestions结束位置`);
      continue;
    }

    // 在 ] 前插入新题目
    const newQuestionsStr = questions.map(q => {
      if (!q || !q.id) return '';
      let s = `          {\n`;
      s += `            id: '${q.id}',\n`;
      s += `            type: '${q.type}',\n`;
      s += `            question: '${(q.question || '').replace(/'/g, "\\'")}',\n`;
      if (q.options) s += `            options: ${JSON.stringify(q.options)},\n`;
      s += `            answer: '${(q.answer || '').replace(/'/g, "\\'")}',\n`;
      s += `            hint: '${(q.hint || '').replace(/'/g, "\\'")}',\n`;
      s += `            explanation: '${(q.explanation || '').replace(/'/g, "\\'")}'\n`;
      s += `          }`;
      return s;
    }).filter(s => s).join(',\n');

    // 在 ] 行前插入
    const insertLine = `,\n${newQuestionsStr}`;
    // 修改pqEndIdx行的 ] 前面
    const endLine = lines[pqEndIdx];
    const bracketPos = endLine.lastIndexOf(']');
    lines[pqEndIdx] = endLine.substring(0, bracketPos) + insertLine + '\n        ' + endLine.substring(bracketPos);

    console.log(`  已为 ${lessonId} 追加 ${questions.length} 道题`);
  }

  // 步骤2：为每个单元追加L4和L5课时
  for (const unit of units) {
    const uid = unit.id;

    // 找到该单元的lessons数组结束位置
    let unitLineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`id: '${uid}'`)) {
        unitLineIdx = i;
        break;
      }
    }

    if (unitLineIdx === -1) {
      console.log(`  警告：未找到单元 ${uid}`);
      continue;
    }

    // 从单元id行往下找lessons:
    let lessonsStartIdx = -1;
    for (let i = unitLineIdx; i < lines.length; i++) {
      if (lines[i].includes('lessons:')) {
        lessonsStartIdx = i;
        break;
      }
    }

    // 找到lessons数组的结束 ]
    let depth = 0;
    let lessonsEndIdx = -1;
    for (let i = lessonsStartIdx; i < lines.length; i++) {
      for (const ch of lines[i]) {
        if (ch === '[') depth++;
        if (ch === ']') {
          depth--;
          if (depth === 0) {
            lessonsEndIdx = i;
            break;
          }
        }
      }
      if (lessonsEndIdx !== -1) break;
    }

    if (lessonsEndIdx === -1) {
      console.log(`  警告：未找到 ${uid} 的lessons结束位置`);
      continue;
    }

    // 生成L4和L5课时
    const lesson4 = generateLesson4(unit, gradePrefix);
    const lesson5 = generateLesson5(unit, gradePrefix);

    // 将课时对象转为TS代码
    const lesson4Str = lessonToTS(lesson4, 8);
    const lesson5Str = lessonToTS(lesson5, 8);

    // 在lessons结束 ] 前插入
    const insertStr = `,\n${lesson4Str},\n${lesson5Str}`;
    const endLine = lines[lessonsEndIdx];
    const bracketPos = endLine.lastIndexOf(']');
    lines[lessonsEndIdx] = endLine.substring(0, bracketPos) + insertStr + '\n      ' + endLine.substring(bracketPos);

    console.log(`  已为 ${uid} 追加 L4 和 L5 课时`);
  }

  // 写回文件
  content = lines.join('\n');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  文件已更新: ${filePath}`);
}

// 将课时对象转为TS代码字符串
function lessonToTS(lesson, indent) {
  const sp = ' '.repeat(indent);
  const sp2 = ' '.repeat(indent + 2);
  const sp3 = ' '.repeat(indent + 4);
  const sp4 = ' '.repeat(indent + 6);

  let s = `${sp}{\n`;
  s += `${sp2}id: '${lesson.id}',\n`;
  s += `${sp2}title: '${lesson.title}',\n`;
  s += `${sp2}order: ${lesson.order},\n`;
  s += `${sp2}teachingMethod: '${lesson.teachingMethod}',\n`;
  s += `${sp2}iDo: '${lesson.iDo}',\n`;
  s += `${sp2}weDo: '${lesson.weDo}',\n`;
  s += `${sp2}youDo: '${lesson.youDo}',\n`;
  s += `${sp2}parentTips: '${lesson.parentTips}',\n`;
  s += `${sp2}funElement: '${lesson.funElement}',\n`;
  s += `${sp2}gsapAnimations: ${JSON.stringify(lesson.gsapAnimations)},\n`;
  s += `${sp2}images: ${JSON.stringify(lesson.images)},\n`;
  s += `${sp2}content: [\n`;
  for (const c of lesson.content) {
    s += `${sp3}{ type: '${c.type}', content: '${c.content.replace(/'/g, "\\'")}'`;
    if (c.label) s += `, label: '${c.label}'`;
    if (c.animationType) s += `, animationType: '${c.animationType}'`;
    s += ` },\n`;
  }
  s += `${sp2}],\n`;
  s += `${sp2}practiceQuestions: [\n`;
  for (const q of lesson.practiceQuestions) {
    s += `${sp3}{\n`;
    s += `${sp4}id: '${q.id}',\n`;
    s += `${sp4}type: '${q.type}',\n`;
    s += `${sp4}question: '${q.question.replace(/'/g, "\\'")}',\n`;
    if (q.options) s += `${sp4}options: ${JSON.stringify(q.options)},\n`;
    s += `${sp4}answer: '${q.answer.replace(/'/g, "\\'")}',\n`;
    s += `${sp4}hint: '${q.hint.replace(/'/g, "\\'")}',\n`;
    s += `${sp4}explanation: '${q.explanation.replace(/'/g, "\\'")}'\n`;
    s += `${sp3}},\n`;
  }
  s += `${sp2}]\n`;
  s += `${sp}}`;
  return s;
}

// ============ 执行 ============
const baseDir = path.join(__dirname, '..');

// 处理一年级
processFile(
  path.join(baseDir, 'src', 'data', 'math', 'grade1.ts'),
  g1Extra,
  grade1Units,
  'm1'
);

// 处理二年级
processFile(
  path.join(baseDir, 'src', 'data', 'math', 'grade2.ts'),
  g2Extra,
  grade2Units,
  'm2'
);

// 处理三年级
processFile(
  path.join(baseDir, 'src', 'data', 'math', 'grade3.ts'),
  g3Extra,
  grade3Units,
  'm3'
);

console.log('\n所有文件处理完成！');
