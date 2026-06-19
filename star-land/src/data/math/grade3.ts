import type { Unit } from '@/types'

export const mathGrade3: Unit[] = [
  {
    id: 'm3u1', title: '时分秒', subtitle: '认识时间单位，学会计算时间', order: 1,
    lessons: [
      {
        id: 'm3u1l1', title: '秒的认识', order: 1,
        teachingMethod: 'CPA实物钟表→图示刻度→符号读写',
        iDo: '家长用钟表展示秒针走一圈，讲解1分=60秒。',
        weDo: '亲子一起感受1秒有多长：拍手、眨眼、数数，体验秒的快慢。',
        youDo: '孩子独立读出钟面上的秒数，理解秒和分的关系。',
        parentTips: '1秒很短，让孩子用拍手感受1秒的长度，建立时间感。',
        funElement: '笑话：秒针说我跑得最快，分针时针追不上我！小游戏：1秒挑战——1秒能拍几下掌',
        gsapAnimations: ['[GSAP:rotateZ|秒针走一圈动画|2.0s|页面加载|power1.inOut]', '[GSAP:scaleIn|1分=60秒标签弹出|0.5s|走完一圈|back.out(1.7)]'],
        images: ['[IMG:illustration|钟表秒针走动示意图|400x300|cartoon|png|秒的认识]', '[IMG:illustration|1分=60秒关系图|300x250|cartoon|png|时间换算]'],
        content: [
          { type: 'text', content: '小朋友们，你们知道钟表上跑得最快的针叫什么吗？它就是秒针！秒针走1小格就是1秒。', animationType: 'reveal' },
          { type: 'example', content: '⏱️ 秒针走一圈是60小格，也就是60秒，正好等于1分钟！', label: '观察秒针', animationType: 'bounce' },
          { type: 'formula', content: '1分 = 60秒', label: '时间换算', animationType: 'counter' },
          { type: 'text', content: '1秒有多长呢？拍一下手大约就是1秒，眨一下眼大约也是1秒。', animationType: 'typewriter' },
          { type: 'tip', content: '秒针是最细最长的针，走得最快；分针比较粗，走得较慢；时针最短最粗，走得最慢。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '秒针走一圈的动画，走完后弹出"1分=60秒"标签', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u1l1q1', type: 'choice', question: '1分等于多少秒？', options: ['10秒', '30秒', '60秒', '100秒'], answer: '60秒', hint: '秒针走一圈是几秒？', explanation: '1分=60秒，秒针走一圈正好60小格就是60秒。' },
          { id: 'm3u1l1q2', type: 'fill', question: '2分=___秒', answer: '120', hint: '1分=60秒，2分呢？', explanation: '1分=60秒，2分=2×60=120秒。' },
          { id: 'm3u1l1q3', type: 'flashcard', question: '快速换算：3分=几秒？', answer: '180', hint: '3×60=？', explanation: '3分=3×60=180秒。' },
          { id: 'm3u1l1q4', type: 'choice', question: '小明跑步50米用了10秒，他跑100米大约用多少秒？', options: ['10秒', '15秒', '20秒', '30秒'], answer: '20秒', hint: '100米是50米的几倍？', explanation: '100米是50米的2倍，所以大约用10×2=20秒。' },
          { id: 'm3u1l1q5', type: 'fill', question: '小红深呼吸一次用了4秒，深呼吸3次用了___秒', answer: '12', hint: '3次4秒是多少？', explanation: '3×4=12秒，深呼吸3次用了12秒。' },
          { id: 'm3u1l1q6', type: 'choice', question: '秒针从数字3走到数字6，经过了多少秒？', options: ['3秒', '10秒', '15秒', '30秒'], answer: '15秒', hint: '每大格5秒，走了几大格？', explanation: '秒针从3走到6，走了3大格，每大格5秒，3×5=15秒。' },
          { id: 'm3u1l1q7', type: 'fill', question: '5+7=___', answer: '12', hint: '[20以内进位加法]（数学-20以内进位加法-第1课）', explanation: '5+7=12，这是20以内进位加法。' }
        ]
      },
      {
        id: 'm3u1l2', title: '时间的计算', order: 2,
        teachingMethod: 'I Do→We Do→You Do，时间轴辅助法',
        iDo: '家长在时间轴上演示：8:00到8:30经过了30分钟。',
        weDo: '亲子一起用时间轴计算经过的时间，互相出题。',
        youDo: '孩子独立计算开始时间和结束时间之间的时长。',
        parentTips: '计算时间可以用结束时间减去开始时间，注意借位。',
        funElement: '歇后语：一刻千金——时间宝贵！小游戏：时间计算小达人',
        gsapAnimations: ['[GSAP:translateX|时间轴上区间高亮|0.6s|点击触发|power2.inOut]', '[GSAP:scaleIn|经过时间数字弹出|0.4s|区间完成|back.out(1.7)]'],
        images: ['[IMG:illustration|时间轴计算经过时间|400x300|cartoon|png|时间计算]', '[IMG:illustration|钟表起始和结束对比|300x250|cartoon|png|时间对比]'],
        content: [
          { type: 'text', content: '学会了认识时间，现在我们来学习如何计算经过的时间吧！', animationType: 'reveal' },
          { type: 'example', content: '🕐 8:00到8:45，经过了多少分钟？45-0=45分钟！', label: '时间计算', animationType: 'bounce' },
          { type: 'formula', content: '经过时间 = 结束时间 - 开始时间', label: '计算公式', animationType: 'typewriter' },
          { type: 'example', content: '9:30到10:15，9:30到10:00是30分，10:00到10:15是15分，30+15=45分钟。', label: '跨时计算', animationType: 'bounce' },
          { type: 'tip', content: '如果分钟不够减，就从小时借1小时当60分钟再减。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u1l2q1', type: 'choice', question: '8:00到8:45经过了多少分钟？', options: ['35分钟', '40分钟', '45分钟', '50分钟'], answer: '45分钟', hint: '45-0=？', explanation: '8:00到8:45，45-0=45分钟。' },
          { id: 'm3u1l2q2', type: 'fill', question: '9:30到10:15经过了___分钟', answer: '45', hint: '9:30到10:00是30分，10:00到10:15是15分', explanation: '9:30到10:00是30分钟，10:00到10:15是15分钟，30+15=45分钟。' },
          { id: 'm3u1l2q3', type: 'flashcard', question: '快速计算：7:20到8:00经过了几分钟？', answer: '40', hint: '60-20=？', explanation: '7:20到8:00，60-20=40分钟。' },
          { id: 'm3u1l2q4', type: 'choice', question: '一节课从8:30开始，9:10结束，这节课多长时间？', options: ['30分钟', '40分钟', '50分钟', '80分钟'], answer: '40分钟', hint: '8:30到9:00是30分，9:00到9:10是10分', explanation: '8:30到9:00是30分钟，9:00到9:10是10分钟，30+10=40分钟。' },
          { id: 'm3u1l2q5', type: 'fill', question: '小明7:45出门，8:20到学校，路上用了___分钟', answer: '35', hint: '7:45到8:00是15分，8:00到8:20是20分', explanation: '7:45到8:00是15分钟，8:00到8:20是20分钟，15+20=35分钟。' },
          { id: 'm3u1l2q6', type: 'choice', question: '小红看一本书，从下午2:15看到3:40，她看了多长时间？', options: ['1小时15分', '1小时25分', '1小时35分', '2小时25分'], answer: '1小时25分', hint: '2:15到3:15是1小时，3:15到3:40是25分', explanation: '2:15到3:15是1小时，3:15到3:40是25分钟，共1小时25分钟。' },
          { id: 'm3u1l2q7', type: 'fill', question: '45+28=___', answer: '73', hint: '[100以内进位加法]（数学-100以内加法-第2课）', explanation: '45+28=73，个位5+8=13进1，十位4+2+1=7。' }
        ]
      },
      {
        id: 'm3u1l3', title: '时间规划师', order: 3,
        teachingMethod: '情境化实践，生活应用',
        iDo: '家长示范制定一天的作息时间表，标注每项活动的起止时间。',
        weDo: '亲子一起制定周末时间表，合理安排学习和娱乐时间。',
        youDo: '孩子独立制定自己的时间规划表。',
        parentTips: '让孩子学会规划时间，养成守时的好习惯。',
        funElement: '小游戏：小小时间规划师！笑话：时间说我最公平，每人每天24小时',
        gsapAnimations: ['[GSAP:staggerFrom|时间表项目依次出现|0.4s|页面加载|power2.out]', '[GSAP:scaleIn|时间规划完成星星特效|0.5s|规划完成|back.out(1.7)]'],
        images: ['[IMG:illustration|一天作息时间表示例|400x300|cartoon|png|时间规划]', '[IMG:illustration|周末时间安排图|300x250|cartoon|png|作息安排]'],
        content: [
          { type: 'text', content: '学会了认识时间和计算时间，现在让我们来做时间规划师，合理安排每一天吧！', animationType: 'reveal' },
          { type: 'example', content: '📋 作息时间表：7:00起床 → 7:30吃早餐 → 8:00上学 → 11:30放学', label: '时间规划', animationType: 'bounce' },
          { type: 'formula', content: '1小时 = 60分钟，1天 = 24小时', label: '时间关系', animationType: 'counter' },
          { type: 'text', content: '合理安排时间很重要：学习时间、运动时间、休息时间都要有，不能只玩不学，也不能只学不玩。', animationType: 'typewriter' },
          { type: 'tip', content: '制定时间表时，要给自己留一些弹性时间，以防万一。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '时间表项目依次出现的动画，规划完成后星星特效庆祝', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u1l3q1', type: 'choice', question: '小红7:30起床，8:00出门，她用了多长时间准备？', options: ['20分钟', '30分钟', '40分钟', '1小时'], answer: '30分钟', hint: '8:00-7:30=？', explanation: '8:00-7:30=30分钟，小红用了30分钟准备。' },
          { id: 'm3u1l3q2', type: 'fill', question: '一节课40分钟，9:00开始，___结束', answer: '9:40', hint: '9:00加40分钟', explanation: '9:00+40分钟=9:40，9:40下课。' },
          { id: 'm3u1l3q3', type: 'flashcard', question: '小明做作业用了1小时20分，合多少分钟？', answer: '80', hint: '1小时=60分', explanation: '1小时20分=60+20=80分钟。' },
          { id: 'm3u1l3q4', type: 'choice', question: '小红上午上了3节课，每节课40分钟，课间休息10分钟，从8:00开始上课，第一节下课后到第二节课结束经过了多长时间？', options: ['50分钟', '80分钟', '90分钟', '120分钟'], answer: '90分钟', hint: '一节课40分+休息10分+一节课40分', explanation: '第一节课40分+休息10分+第二节课40分=90分钟。' },
          { id: 'm3u1l3q5', type: 'fill', question: '小明7:20吃早餐，用了25分钟，吃完时是___', answer: '7:45', hint: '7:20+25分=？', explanation: '7:20+25分钟=7:45，吃完时是7:45。' },
          { id: 'm3u1l3q6', type: 'choice', question: '学校上午4节课，每节课40分钟，课间休息10分钟（共3个课间），大课间休息20分钟，上午一共在校多长时间？', options: ['2小时30分', '2小时50分', '3小时10分', '3小时20分'], answer: '3小时20分', hint: '4×40+2×10+20=？再换算', explanation: '4×40=160分，2个普通课间2×10=20分，大课间20分，共200分=3小时20分。' },
          { id: 'm3u1l3q7', type: 'fill', question: '56-29=___', answer: '27', hint: '[100以内退位减法]（数学-100以内减法-第2课）', explanation: '56-29=27，个位6-9不够减借位，16-9=7，十位4-2=2。' }
        ]
      },
      {
        id: 'm3u1l4', title: '时分秒形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子的答题情况，记录薄弱环节。',
        weDo: '亲子一起回顾本单元重点，讨论容易出错的地方。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '关注孩子对时间换算和经过时间计算的掌握情况，及时查漏补缺。',
        funElement: '闯关挑战：全部答对获得"时间小达人"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|时间小达人徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|时分秒知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对时分秒的掌握情况吧！答对全部题目就能获得"时间小达人"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '1时=60分，1分=60秒，1时=3600秒', label: '时间换算总表', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u1l4q1', type: 'choice', question: '3分等于多少秒？', options: ['30秒', '180秒', '300秒', '60秒'], answer: '180秒', hint: '1分=60秒', explanation: '3分=3×60=180秒。' },
          { id: 'm3u1l4q2', type: 'fill', question: '120秒=___分', answer: '2', hint: '120÷60=？', explanation: '120÷60=2，120秒=2分。' },
          { id: 'm3u1l4q3', type: 'choice', question: '小明从家到学校要走15分钟，他7:50出发，几时到学校？', options: ['7:55', '8:05', '8:15', '8:00'], answer: '8:05', hint: '7:50+15分=？', explanation: '7:50+15分钟=8:05，8:05到学校。' },
          { id: 'm3u1l4q4', type: 'fill', question: '一场电影从2:00看到3:45，看了___分钟', answer: '105', hint: '1小时45分=？分', explanation: '1小时45分=60+45=105分钟。' },
          { id: 'm3u1l4q5', type: 'choice', question: '秒针从12走到6，经过了多少秒？', options: ['6秒', '25秒', '30秒', '35秒'], answer: '30秒', hint: '从12到6走了几大格？', explanation: '从12到6走了6大格，6×5=30秒。' },
          { id: 'm3u1l4q6', type: 'fill', question: '小红上午在校3小时10分，合___分钟', answer: '190', hint: '3小时=180分', explanation: '3小时10分=180+10=190分钟。' },
          { id: 'm3u1l4q7', type: 'choice', question: '下面哪个时间最接近1分钟？', options: ['看一页书', '跑100米', '吃一顿饭', '睡一个午觉'], answer: '跑100米', hint: '[时分的认识]（数学-时、分、秒-第1课）想想1分钟大约能做什么', explanation: '跑100米大约需要15-20秒，比较接近1分钟内；看一页书通常更短，吃饭和午觉远超1分钟。' }
        ]
      },
      {
        id: 'm3u1l5', title: '时分秒综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的时间问题，引导孩子综合运用时分秒知识解决。',
        weDo: '亲子一起制定周末详细时间表，计算各项活动时长。',
        youDo: '孩子独立解决生活中的时间综合问题。',
        parentTips: '鼓励孩子把时间知识与生活实际结合，培养时间管理意识。',
        funElement: '生活数学：用时分秒解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|生活中的时间应用|400x300|cartoon|png|时间应用]', '[IMG:illustration|周末时间规划表|300x250|cartoon|png|时间规划]'],
        content: [
          { type: 'text', content: '时间就在我们身边！让我们用学到的时分秒知识，解决生活中的各种时间问题吧！', animationType: 'reveal' },
          { type: 'example', content: '🏠 小红周末安排：8:00-9:00做作业，9:00-9:30休息，9:30-10:30看书，10:30-11:30运动。她上午一共安排了多少时间？3小时30分钟！', label: '时间规划', animationType: 'bounce' },
          { type: 'tip', content: '解决时间问题要分清"时刻"和"时长"：时刻是几点几分，时长是经过了多长时间。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u1l5q1', type: 'choice', question: '火车9:35发车，小红从家到火车站要25分钟，她最晚几点出发？', options: ['9:00', '9:10', '9:15', '9:20'], answer: '9:10', hint: '9:35往前推25分', explanation: '9:35-25分=9:10，最晚9:10出发。' },
          { id: 'm3u1l5q2', type: 'fill', question: '小明每天练琴45分钟，一周（7天）共练琴___分钟', answer: '315', hint: '45×7=？', explanation: '45×7=315分钟，一周共练琴315分钟。' },
          { id: 'm3u1l5q3', type: 'choice', question: '【期末真题】小明上午8:10到校，11:50放学，他在校多长时间？', options: ['3小时10分', '3小时30分', '3小时40分', '4小时10分'], answer: '3小时40分', hint: '8:10到11:50经过了多久？', explanation: '8:10到11:50，8:10到11:10是3小时，11:10到11:50是40分钟，共3小时40分钟。' },
          { id: 'm3u1l5q4', type: 'fill', question: '一列火车本应10:20到达，晚点了35分钟，实际___到达', answer: '10:55', hint: '10:20+35分=？', explanation: '10:20+35分钟=10:55，实际10:55到达。' },
          { id: 'm3u1l5q5', type: 'choice', question: '小红看一场电影用了1小时50分钟，如果下午2:10开始，几时几分结束？', options: ['3:50', '4:00', '4:10', '3:40'], answer: '4:00', hint: '2:10+1小时50分=？', explanation: '2:10+1小时50分=4:00，4:00结束。' },
          { id: 'm3u1l5q6', type: 'fill', question: '小明7:30出发，先走15分钟到书店，买书用了20分钟，再走10分钟到学校，到学校时是___', answer: '8:15', hint: '7:30+15+20+10=？', explanation: '7:30+15分=7:45，+20分=8:05，+10分=8:15。' },
          { id: 'm3u1l5q7', type: 'choice', question: '钟面上时针指向8和9之间，分针指向6，这时是几时几分？', options: ['8:06', '8:30', '9:30', '8:12'], answer: '8:30', hint: '[时分的认识]（数学-时、分、秒-第1课）分针指向6表示30分', explanation: '时针在8和9之间表示8时多，分针指向6表示30分，所以是8:30。' }
        ]
      }
    ]
  },
  {
    id: 'm3u2', title: '万以内加减法', subtitle: '掌握大数的加减运算', order: 2,
    lessons: [
      {
        id: 'm3u2l1', title: '口算加减', order: 1,
        teachingMethod: 'CPA拆分法→图示分步→符号速算',
        iDo: '家长示范口算350+200：300+200=500，500+50=550。',
        weDo: '亲子一起口算整百整十的加减法，互相出题。',
        youDo: '孩子独立口算万以内的加减法。',
        parentTips: '口算时把数拆成整百和整十，分别计算再合并。',
        funElement: '笑话：300+200说——我们整百相加最简单！小游戏：口算速算王',
        gsapAnimations: ['[GSAP:scaleIn|拆分数字标签弹出|0.4s|页面加载|back.out(1.7)]', '[GSAP:translateX|分步计算动画|0.5s|点击触发|power2.inOut]'],
        images: ['[IMG:illustration|口算拆分法示意图|400x300|cartoon|png|口算加减]', '[IMG:illustration|整百整十分步计算|300x250|cartoon|png|拆分计算]'],
        content: [
          { type: 'text', content: '口算万以内的加减法，秘诀就是把数拆成整百和整十，分别计算再合并！', animationType: 'reveal' },
          { type: 'example', content: '🔢 350+200：先算300+200=500，再算500+50=550！', label: '拆分口算', animationType: 'bounce' },
          { type: 'formula', content: '口算方法：先算整百，再算整十，最后合并', label: '口算口诀', animationType: 'typewriter' },
          { type: 'example', content: '750-320：先算700-300=400，再算50-20=30，400+30=430！', label: '减法口算', animationType: 'bounce' },
          { type: 'tip', content: '口算时先不看末尾的0，算完再补0会更方便哦！', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u2l1q1', type: 'choice', question: '420+360=？', options: ['680', '780', '880', '760'], answer: '780', hint: '400+300=700，20+60=80', explanation: '400+300=700，20+60=80，700+80=780。' },
          { id: 'm3u2l1q2', type: 'fill', question: '750-320=___', answer: '430', hint: '700-300=400，50-20=30', explanation: '700-300=400，50-20=30，400+30=430。' },
          { id: 'm3u2l1q3', type: 'flashcard', question: '快速口算：560+240=？', answer: '800', hint: '500+200=700，60+40=100', explanation: '500+200=700，60+40=100，700+100=800。' },
          { id: 'm3u2l1q4', type: 'choice', question: '图书馆上午借出280本，下午借出350本，全天共借出多少本？', options: ['530本', '630本', '730本', '620本'], answer: '630本', hint: '280+350=？', explanation: '200+300=500，80+50=130，500+130=630本。' },
          { id: 'm3u2l1q5', type: 'fill', question: '680-250=___', answer: '430', hint: '600-200=400，80-50=30', explanation: '600-200=400，80-50=30，400+30=430。' },
          { id: 'm3u2l1q6', type: 'choice', question: '小明有800元，买衣服花了360元，买鞋花了280元，还剩多少元？', options: ['160元', '170元', '180元', '260元'], answer: '160元', hint: '先算花了多少，再算剩多少', explanation: '360+280=640元，800-640=160元，还剩160元。' },
          { id: 'm3u2l1q7', type: 'fill', question: '36+47=___', answer: '83', hint: '[100以内进位加法]（数学-100以内加法-第2课）', explanation: '36+47=83，个位6+7=13进1，十位3+4+1=8。' }
        ]
      },
      {
        id: 'm3u2l2', title: '笔算加减', order: 2,
        teachingMethod: 'I Do→We Do→You Do，竖式计算法',
        iDo: '家长用竖式演示456+378：个位6+8=14进1，十位5+7+1=13进1，百位4+3+1=8。',
        weDo: '亲子一起列竖式做万以内加减法，重点练习连续进位和退位。',
        youDo: '孩子独立列竖式计算万以内的加减法。',
        parentTips: '竖式计算从个位起，满十进一，不够减借一当十。',
        funElement: '歇后语：九牛一毛——微不足道！小游戏：竖式计算闯关',
        gsapAnimations: ['[GSAP:staggerFrom|竖式数字逐位出现|0.4s|页面加载|power2.out]', '[GSAP:translateY|进位1飞到上位|0.4s|满十触发|power2.inOut]'],
        images: ['[IMG:illustration|456+378竖式计算图|400x300|cartoon|png|笔算加法]', '[IMG:illustration|连续进位退位示意|300x250|cartoon|png|进位退位]'],
        content: [
          { type: 'text', content: '当数字变大了，口算容易出错，这时候就需要用竖式来帮忙啦！', animationType: 'reveal' },
          { type: 'example', content: '📝 456+378竖式：个位6+8=14写4进1，十位5+7+1=13写3进1，百位4+3+1=8，结果是834！', label: '竖式加法', animationType: 'bounce' },
          { type: 'formula', content: '竖式加法：相同数位对齐，从个位加起，满十进一', label: '加法规则', animationType: 'counter' },
          { type: 'formula', content: '竖式减法：相同数位对齐，从个位减起，不够减借一当十', label: '减法规则', animationType: 'counter' },
          { type: 'tip', content: '列竖式时一定要把相同数位对齐，个位对个位，十位对十位，百位对百位！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '竖式计算456+378：个位6+8=14写4进1，十位5+7+1=13写3进1，百位4+3+1=8，结果834', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '竖式连续进位加法',
              verticalCalcConfig: {
                num1: 456,
                num2: 378,
                operator: '+',
                result: 834,
                carry: [0, 1, 1],
                steps: [
                  { text: '个位：6+8=14，写4进1', highlight: 'ones' },
                  { text: '十位：5+7+1=13，写3进1', highlight: 'tens' },
                  { text: '百位：4+3+1=8', highlight: 'hundreds' },
                ],
              },
              ttsNarration: '竖式计算456加378！个位6加8等于14，写4进1！十位5加7加1等于13，写3进1！百位4加3加1等于8！结果834！',
            }
          },
        ],
        practiceQuestions: [
          { id: 'm3u2l2q1', type: 'choice', question: '567+285=？', options: ['742', '842', '852', '752'], answer: '852', hint: '个位7+5=12进1，十位6+8+1=15进1', explanation: '个位7+5=12进1，十位6+8+1=15进1，百位5+2+1=8，所以567+285=852。' },
          { id: 'm3u2l2q2', type: 'fill', question: '813-456=___', answer: '357', hint: '个位3-6不够减借位', explanation: '个位13-6=7，十位0-5不够减借位10-5=5，百位7-4=3，所以813-456=357。' },
          { id: 'm3u2l2q3', type: 'flashcard', question: '快速计算：378+465=？', answer: '843', hint: '注意连续进位', explanation: '个位8+5=13进1，十位7+6+1=14进1，百位3+4+1=8，378+465=843。' },
          { id: 'm3u2l2q4', type: 'choice', question: '学校有男生456人，女生389人，全校一共有多少人？', options: ['735人', '845人', '835人', '855人'], answer: '845人', hint: '456+389=？', explanation: '456+389=845，全校一共845人。' },
          { id: 'm3u2l2q5', type: 'fill', question: '1000-367=___', answer: '633', hint: '连续退位减法', explanation: '个位10-7=3，十位9-6=3，百位9-3=6，1000-367=633。' },
          { id: 'm3u2l2q6', type: 'choice', question: '一个数减去378等于256，这个数是多少？', options: ['524', '634', '624', '614'], answer: '634', hint: '被减数=差+减数', explanation: '256+378=634，这个数是634。' },
          { id: 'm3u2l2q7', type: 'fill', question: '72-35=___', answer: '37', hint: '[100以内退位减法]（数学-100以内减法-第2课）', explanation: '72-35=37，个位12-5=7，十位6-3=3。' }
        ]
      },
      {
        id: 'm3u2l3', title: '估算与验算', order: 3,
        teachingMethod: 'CPA估算策略→图示验证→符号检验',
        iDo: '家长示范估算：398+204≈400+200=600，再用竖式验算。',
        weDo: '亲子一起先估算再精确计算，比较估算和精确结果的差距。',
        youDo: '孩子独立估算和验算万以内的加减法。',
        parentTips: '估算把数看成接近的整百数，验算用加减互逆关系检查。',
        funElement: '笑话：估算说我大约对，验算说我肯定对！小游戏：估算大挑战',
        gsapAnimations: ['[GSAP:scaleIn|估算数字四舍五入|0.5s|点击触发|back.out(1.7)]', '[GSAP:translateX|验算过程展开|0.6s|估算完成|power2.inOut]'],
        images: ['[IMG:illustration|估算四舍五入示意图|400x300|cartoon|png|估算方法]', '[IMG:illustration|加减互逆验算图|300x250|cartoon|png|验算方法]'],
        content: [
          { type: 'text', content: '计算之前先估算，计算之后再验算，这样就不容易出错了！', animationType: 'reveal' },
          { type: 'example', content: '🎯 398+204≈？把398看成400，204看成200，400+200=600，大约600！', label: '估算示例', animationType: 'bounce' },
          { type: 'formula', content: '估算方法：把数看成接近的整百数再计算', label: '估算口诀', animationType: 'typewriter' },
          { type: 'formula', content: '验算方法：加法用减法验算，减法用加法验算', label: '验算口诀', animationType: 'counter' },
          { type: 'tip', content: '估算的结果和精确计算的结果应该比较接近，如果差很多，说明可能算错了！', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u2l3q1', type: 'choice', question: '497+302大约是多少？', options: ['约700', '约800', '约900', '约600'], answer: '约800', hint: '497≈500，302≈300', explanation: '497≈500，302≈300，500+300=800，大约800。' },
          { id: 'm3u2l3q2', type: 'fill', question: '723-398大约是___', answer: '300', hint: '723≈700，398≈400', explanation: '723≈700，398≈400，700-400=300，大约300。' },
          { id: 'm3u2l3q3', type: 'flashcard', question: '验算：345+278=623对吗？用623-345=？', answer: '278', hint: '和-一个加数=另一个加数', explanation: '623-345=278，和另一个加数相同，所以计算正确。' },
          { id: 'm3u2l3q4', type: 'choice', question: '小明算出596+207=793，用估算检验这个结果合理吗？', options: ['合理', '不合理，偏小了', '不合理，偏大了', '无法判断'], answer: '不合理，偏小了', hint: '596≈600，207≈200，600+200=？', explanation: '596≈600，207≈200，600+200=800，793比800少7，但596+207=803，793偏小了。' },
          { id: 'm3u2l3q5', type: 'fill', question: '验算824-367=457，用457+367=___', answer: '824', hint: '差+减数=被减数', explanation: '457+367=824，和被减数相同，计算正确。' },
          { id: 'm3u2l3q6', type: 'choice', question: '学校买了3台电脑，每台大约2000元，带6000元够吗？实际每台1980元。', options: ['够', '不够', '正好', '无法判断'], answer: '够', hint: '3×1980=？和6000比较', explanation: '3×1980=5940元，5940<6000，所以带6000元够。' },
          { id: 'm3u2l3q7', type: 'fill', question: '63+28=___', answer: '91', hint: '[100以内进位加法]（数学-100以内加法-第2课）', explanation: '63+28=91，个位3+8=11进1，十位6+2+1=9。' }
        ]
      },
      {
        id: 'm3u2l4', title: '万以内加减法形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子的计算过程和验算习惯。',
        weDo: '亲子一起回顾本单元重点，讨论容易出错的进位退位问题。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '重点关注孩子竖式计算的进位退位是否正确，验算习惯是否养成。',
        funElement: '闯关挑战：全部答对获得"计算小能手"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|计算小能手徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|加减法知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对万以内加减法的掌握情况吧！答对全部题目就能获得"计算小能手"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '口算→拆分法，笔算→竖式对齐，估算→看成整百，验算→加减互逆', label: '计算策略总结', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u2l4q1', type: 'choice', question: '340+280=？', options: ['520', '620', '630', '510'], answer: '620', hint: '300+200=500，40+80=120', explanation: '300+200=500，40+80=120，500+120=620。' },
          { id: 'm3u2l4q2', type: 'fill', question: '645+278=___', answer: '923', hint: '注意连续进位', explanation: '个位5+8=13进1，十位4+7+1=12进1，百位6+2+1=9，645+278=923。' },
          { id: 'm3u2l4q3', type: 'choice', question: '910-547=？', options: ['363', '463', '373', '367'], answer: '363', hint: '注意连续退位', explanation: '个位10-7=3，十位0-4不够减借位10-4=6，百位8-5=3，910-547=363。' },
          { id: 'm3u2l4q4', type: 'fill', question: '估算：503+298大约是___', answer: '800', hint: '503≈500，298≈300', explanation: '503≈500，298≈300，500+300=800。' },
          { id: 'm3u2l4q5', type: 'choice', question: '验算724-386=338，正确的方法是？', options: ['338+386', '724+386', '724-338', '338-386'], answer: '338+386', hint: '差+减数=被减数', explanation: '验算减法用差+减数，338+386=724，计算正确。' },
          { id: 'm3u2l4q6', type: 'fill', question: '最大的三位数加1等于___', answer: '1000', hint: '999+1=？', explanation: '最大的三位数是999，999+1=1000。' },
          { id: 'm3u2l4q7', type: 'choice', question: '【期中真题】下面哪个算式的结果最接近1000？', options: ['498+498', '502+498', '510+480', '400+598'], answer: '502+498', hint: '[100以内加法]（数学-100以内加法-第1课）分别算一算', explanation: '498+498=996，502+498=1000，510+480=990，400+598=998。502+498=1000最接近1000。' }
        ]
      },
      {
        id: 'm3u2l5', title: '万以内加减法综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的加减法问题，引导孩子选择合适的计算策略。',
        weDo: '亲子一起解决购物、旅行等场景中的加减法问题。',
        youDo: '孩子独立解决生活中的万以内加减法综合问题。',
        parentTips: '鼓励孩子先估算再精确计算，养成验算的好习惯。',
        funElement: '生活数学：用加减法解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|购物加减法应用|400x300|cartoon|png|加减应用]', '[IMG:illustration|旅行费用计算|300x250|cartoon|png|费用计算]'],
        content: [
          { type: 'text', content: '万以内加减法在生活中到处都能用到！购物算账、旅行计划、比较数量……让我们来挑战吧！', animationType: 'reveal' },
          { type: 'example', content: '🛒 小红带了500元去超市，买了电饭锅268元和台灯135元，还剩多少元？500-268-135=97元！', label: '购物问题', animationType: 'bounce' },
          { type: 'tip', content: '解决生活问题要分步思考：先理解题意，再选择方法，最后验算检查。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u2l5q1', type: 'choice', question: '学校图书馆有故事书856本，借出478本，还剩多少本？', options: ['368本', '378本', '388本', '468本'], answer: '378本', hint: '856-478=？', explanation: '856-478=378本，还剩378本。' },
          { id: 'm3u2l5q2', type: 'fill', question: '水果店上午卖出苹果356千克，下午卖出428千克，全天共卖出___千克', answer: '784', hint: '356+428=？', explanation: '356+428=784千克，全天共卖出784千克。' },
          { id: 'm3u2l5q3', type: 'choice', question: '【期末真题】一个数比456多378，这个数是多少？', options: ['724', '834', '824', '814'], answer: '834', hint: '456+378=？', explanation: '456+378=834，这个数是834。' },
          { id: 'm3u2l5q4', type: 'fill', question: '小明家到学校680米，到公园450米，学校到公园最远___米', answer: '1130', hint: '最远=两个距离之和', explanation: '最远距离=680+450=1130米（学校和公园在家的两侧）。' },
          { id: 'm3u2l5q5', type: 'choice', question: '服装店上午卖出衣服235件，下午比上午多卖出87件，全天共卖出多少件？', options: ['322件', '557件', '412件', '447件'], answer: '557件', hint: '先算下午卖多少，再算全天', explanation: '下午235+87=322件，全天235+322=557件。' },
          { id: 'm3u2l5q6', type: 'fill', question: '小明有1000元，买书花了267元，买文具花了185元，还剩___元', answer: '548', hint: '1000-267-185=？', explanation: '267+185=452元，1000-452=548元，还剩548元。' },
          { id: 'm3u2l5q7', type: 'choice', question: '甲仓有粮食800袋，运走356袋后又运进278袋，现在有多少袋？', options: ['622袋', '722袋', '778袋', '822袋'], answer: '722袋', hint: '[100以内加法]（数学-100以内加法-第1课）800-356+278=？', explanation: '800-356=444袋，444+278=722袋，现在有722袋。' }
        ]
      }
    ]
  },
  {
    id: 'm3u3', title: '测量', subtitle: '认识更多长度单位和质量单位', order: 3,
    lessons: [
      {
        id: 'm3u3l1', title: '毫米分米千米', order: 1,
        teachingMethod: 'CPA实物感受→图示换算→符号记录',
        iDo: '家长用直尺展示1毫米的长度，用米尺展示1分米，讲解千米。',
        weDo: '亲子一起感受1毫米（硬币厚度）、1分米（手掌宽），讨论1千米有多远。',
        youDo: '孩子独立完成毫米、分米、千米的换算练习。',
        parentTips: '1厘米=10毫米，1分米=10厘米，1千米=1000米，记住这些关系。',
        funElement: '笑话：毫米说我最精细，千米说我最远！小游戏：单位大比拼',
        gsapAnimations: ['[GSAP:scaleIn|各单位参照物依次出现|0.5s|页面加载|back.out(1.7)]', '[GSAP:translateX|换算箭头动画|0.4s|点击触发|power2.inOut]'],
        images: ['[IMG:illustration|毫米分米千米参照物|400x300|cartoon|png|长度单位]', '[IMG:illustration|长度单位换算关系图|300x250|cartoon|png|单位换算]'],
        content: [
          { type: 'text', content: '除了厘米和米，还有更小和更大的长度单位哦！让我们来认识毫米、分米和千米吧！', animationType: 'reveal' },
          { type: 'example', content: '📏 1毫米大约是一枚硬币的厚度，1分米大约是手掌的宽度，1千米大约是操场的2圈半！', label: '单位感受', animationType: 'bounce' },
          { type: 'formula', content: '1厘米=10毫米，1分米=10厘米，1米=10分米，1千米=1000米', label: '换算关系', animationType: 'counter' },
          { type: 'text', content: '毫米用来量很小的东西，如铅笔芯的粗细；千米用来量很远的距离，如两个城市之间的距离。', animationType: 'typewriter' },
          { type: 'tip', content: '记住：相邻长度单位之间是10倍关系，只有千米和米之间是1000倍！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '各单位参照物依次出现的动画，换算箭头在单位之间移动', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u3l1q1', type: 'choice', question: '1分米等于多少厘米？', options: ['1厘米', '10厘米', '100厘米', '1000厘米'], answer: '10厘米', hint: '1分米=？厘米', explanation: '1分米=10厘米，分米是厘米的10倍。' },
          { id: 'm3u3l1q2', type: 'fill', question: '1千米=___米', answer: '1000', hint: '千米和米的换算', explanation: '1千米=1000米，千米是最大的常用长度单位。' },
          { id: 'm3u3l1q3', type: 'flashcard', question: '快速换算：3千米=几米？', answer: '3000', hint: '3×1000=？', explanation: '3千米=3×1000=3000米。' },
          { id: 'm3u3l1q4', type: 'choice', question: '一本数学书厚约6毫米，3本摞在一起厚约多少？', options: ['9毫米', '18毫米', '60毫米', '180毫米'], answer: '18毫米', hint: '6×3=？', explanation: '6×3=18毫米，3本摞在一起厚约18毫米。' },
          { id: 'm3u3l1q5', type: 'fill', question: '5分米=___厘米=___毫米', answer: '50和500', hint: '1分米=10厘米=100毫米', explanation: '5分米=50厘米=500毫米。' },
          { id: 'm3u3l1q6', type: 'choice', question: '小明家到学校2千米，到公园800米，学校到公园最近多少米？', options: ['800米', '1200米', '2000米', '2800米'], answer: '1200米', hint: '最近=两个距离之差', explanation: '最近距离=2000-800=1200米（学校和公园在小明家的同侧）。' },
          { id: 'm3u3l1q7', type: 'fill', question: '1米=___厘米', answer: '100', hint: '[厘米和米]（数学-长度单位-第1课）', explanation: '1米=100厘米，这是二年级学过的长度换算。' }
        ]
      },
      {
        id: 'm3u3l2', title: '吨的认识', order: 2,
        teachingMethod: 'I Do→We Do→You Do，生活参照法',
        iDo: '家长讲解1吨=1000千克，举例：1辆小汽车大约1吨。',
        weDo: '亲子一起列举生活中用吨作单位的物品，感受1吨有多重。',
        youDo: '孩子独立完成吨和千克的换算练习。',
        parentTips: '1吨=1000千克，吨用于计量很重的物品，如汽车、大象。',
        funElement: '笑话：吨说我最重，千克说我最常用！歇后语：千斤拨四两——轻而易举',
        gsapAnimations: ['[GSAP:scaleIn|吨的参照物出现|0.6s|页面加载|back.out(1.7)]', '[GSAP:scaleIn|1吨=1000千克标签|0.4s|参照物出现后|back.out(1.7)]'],
        images: ['[IMG:illustration|1吨参照物小汽车大象|400x300|cartoon|png|吨的认识]', '[IMG:illustration|吨和千克换算图|300x250|cartoon|png|质量换算]'],
        content: [
          { type: 'text', content: '千克我们已经很熟悉了，但是有些东西太重了，用千克来量数字太大，这时候就要用"吨"啦！', animationType: 'reveal' },
          { type: 'example', content: '🚗 1辆小汽车大约重1吨，1头大象大约重3-5吨！', label: '吨的感受', animationType: 'bounce' },
          { type: 'formula', content: '1吨 = 1000千克', label: '换算关系', animationType: 'counter' },
          { type: 'text', content: '吨是比千克更大的质量单位，用来计量很重的物品，比如汽车、轮船、钢材等。', animationType: 'typewriter' },
          { type: 'tip', content: '吨用字母t表示，千克用kg表示。1吨=1000千克，大单位变小单位要乘1000！', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u3l2q1', type: 'choice', question: '1吨等于多少千克？', options: ['10千克', '100千克', '1000千克', '10000千克'], answer: '1000千克', hint: '吨和千克的换算', explanation: '1吨=1000千克，吨是最大的常用质量单位。' },
          { id: 'm3u3l2q2', type: 'fill', question: '3吨=___千克', answer: '3000', hint: '3×1000=？', explanation: '3吨=3×1000=3000千克。' },
          { id: 'm3u3l2q3', type: 'flashcard', question: '5000千克=几吨？', answer: '5', hint: '5000÷1000=？', explanation: '5000÷1000=5，所以5000千克=5吨。' },
          { id: 'm3u3l2q4', type: 'choice', question: '一袋大米50千克，多少袋大米重1吨？', options: ['10袋', '20袋', '50袋', '100袋'], answer: '20袋', hint: '1吨=1000千克，1000÷50=？', explanation: '1吨=1000千克，1000÷50=20袋，20袋大米重1吨。' },
          { id: 'm3u3l2q5', type: 'fill', question: '2吨500千克=___千克', answer: '2500', hint: '2吨=2000千克', explanation: '2吨=2000千克，2000+500=2500千克。' },
          { id: 'm3u3l2q6', type: 'choice', question: '一辆卡车限载5吨，已经装了3200千克，还能装多少千克？', options: ['1800千克', '2800千克', '180千克', '280千克'], answer: '1800千克', hint: '5吨=5000千克，5000-3200=？', explanation: '5吨=5000千克，5000-3200=1800千克，还能装1800千克。' },
          { id: 'm3u3l2q7', type: 'fill', question: '1千克=___克', answer: '1000', hint: '[克和千克]（数学-质量单位-第1课）', explanation: '1千克=1000克，这是二年级学过的质量换算。' }
        ]
      },
      {
        id: 'm3u3l3', title: '长度单位换算', order: 3,
        teachingMethod: 'CPA换算关系表→图示阶梯→符号练习',
        iDo: '家长画出长度单位阶梯图：千米→米→分米→厘米→毫米，讲解相邻关系。',
        weDo: '亲子一起做长度单位换算练习，用阶梯图辅助。',
        youDo: '孩子独立完成各种长度单位的换算。',
        parentTips: '相邻单位之间是10倍关系，千米和米之间是1000倍。',
        funElement: '小游戏：单位换算大闯关！笑话：米说我有5个兄弟，各有各的用处',
        gsapAnimations: ['[GSAP:staggerFrom|单位阶梯依次出现|0.4s|页面加载|power2.out]', '[GSAP:translateX|换算箭头在阶梯上移动|0.5s|点击触发|power2.inOut]'],
        images: ['[IMG:illustration|长度单位阶梯图|400x300|cartoon|png|单位阶梯]', '[IMG:illustration|各单位换算关系总图|300x250|cartoon|png|换算总表]'],
        content: [
          { type: 'text', content: '让我们把所有长度单位排成一排，看看它们之间的关系吧！', animationType: 'reveal' },
          { type: 'formula', content: '千米 → 米 → 分米 → 厘米 → 毫米（相邻×10，千米→米×1000）', label: '单位阶梯', animationType: 'counter' },
          { type: 'example', content: '📐 5厘米=50毫米（5×10=50），2米=20分米（2×10=20）', label: '大变小', animationType: 'bounce' },
          { type: 'example', content: '📐 4000米=4千米（4000÷1000=4），30毫米=3厘米（30÷10=3）', label: '小变大', animationType: 'bounce' },
          { type: 'tip', content: '大单位变小单位用乘法，小单位变大单位用除法！记住相邻是10倍，千米到米是1000倍。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '单位阶梯依次出现的动画，换算箭头在阶梯上移动', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u3l3q1', type: 'choice', question: '5厘米=多少毫米？', options: ['5毫米', '50毫米', '500毫米', '15毫米'], answer: '50毫米', hint: '1厘米=10毫米', explanation: '1厘米=10毫米，5厘米=5×10=50毫米。' },
          { id: 'm3u3l3q2', type: 'fill', question: '2米=___分米', answer: '20', hint: '1米=10分米', explanation: '1米=10分米，2米=2×10=20分米。' },
          { id: 'm3u3l3q3', type: 'flashcard', question: '快速换算：4000米=几千米？', answer: '4', hint: '4000÷1000=？', explanation: '4000÷1000=4，所以4000米=4千米。' },
          { id: 'm3u3l3q4', type: 'choice', question: '一根绳子长3米6分米，合多少分米？', options: ['36分米', '9分米', '306分米', '60分米'], answer: '36分米', hint: '3米=30分米，再加6分米', explanation: '3米=30分米，30+6=36分米。' },
          { id: 'm3u3l3q5', type: 'fill', question: '80毫米=___厘米', answer: '8', hint: '80÷10=？', explanation: '80÷10=8，80毫米=8厘米。' },
          { id: 'm3u3l3q6', type: 'choice', question: '小明身高135厘米，小华身高1分米3厘米，谁更高？', options: ['小明高', '小华高', '一样高', '无法比较'], answer: '小明高', hint: '1分米3厘米=？厘米', explanation: '1分米3厘米=13厘米，135厘米>13厘米，小明更高。' },
          { id: 'm3u3l3q7', type: 'fill', question: '3米=___厘米', answer: '300', hint: '[厘米和米]（数学-长度单位-第1课）', explanation: '1米=100厘米，3米=300厘米。' }
        ]
      },
      {
        id: 'm3u3l4', title: '测量形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子对单位换算的掌握情况。',
        weDo: '亲子一起回顾本单元重点，讨论容易混淆的单位关系。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '重点关注孩子对千米和米之间1000倍关系的理解，以及吨的应用。',
        funElement: '闯关挑战：全部答对获得"测量小专家"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|测量小专家徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|测量知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对测量的掌握情况吧！答对全部题目就能获得"测量小专家"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '长度：千米→米→分米→厘米→毫米，质量：吨→千克→克', label: '单位体系总结', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u3l4q1', type: 'choice', question: '1米等于多少毫米？', options: ['10毫米', '100毫米', '1000毫米', '10000毫米'], answer: '1000毫米', hint: '1米=100厘米=？毫米', explanation: '1米=100厘米=1000毫米。' },
          { id: 'm3u3l4q2', type: 'fill', question: '4吨=___千克', answer: '4000', hint: '4×1000=？', explanation: '4吨=4×1000=4000千克。' },
          { id: 'm3u3l4q3', type: 'choice', question: '下面哪个物品的重量最适合用"吨"作单位？', options: ['一个苹果', '一袋大米', '一辆卡车', '一支铅笔'], answer: '一辆卡车', hint: '吨用来计量很重的物品', explanation: '卡车很重，适合用吨作单位。苹果、大米、铅笔用千克或克。' },
          { id: 'm3u3l4q4', type: 'fill', question: '7千米200米=___米', answer: '7200', hint: '7千米=7000米', explanation: '7千米=7000米，7000+200=7200米。' },
          { id: 'm3u3l4q5', type: 'choice', question: '一根铁丝长5米，剪下30分米，还剩多少？', options: ['2分米', '20分米', '47分米', '2米'], answer: '2米', hint: '5米=50分米，50-30=？', explanation: '5米=50分米，50-30=20分米=2米。' },
          { id: 'm3u3l4q6', type: 'fill', question: '8吨-3000千克=___吨', answer: '5', hint: '3000千克=3吨', explanation: '3000千克=3吨，8-3=5吨。' },
          { id: 'm3u3l4q7', type: 'choice', question: '【期中真题】一支铅笔长18（ ），括号里应填什么单位？', options: ['毫米', '厘米', '分米', '米'], answer: '厘米', hint: '[长度单位]（数学-长度单位-第1课）想想铅笔的实际长度', explanation: '一支铅笔大约长18厘米，用厘米作单位最合适。' }
        ]
      },
      {
        id: 'm3u3l5', title: '测量综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的测量问题，引导孩子选择合适的单位并换算。',
        weDo: '亲子一起测量家中物品，记录长度和重量，进行单位换算。',
        youDo: '孩子独立解决生活中的测量综合问题。',
        parentTips: '鼓励孩子在生活中多观察、多测量，建立单位感。',
        funElement: '生活数学：用测量知识解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|生活中的测量应用|400x300|cartoon|png|测量应用]', '[IMG:illustration|物品测量记录表|300x250|cartoon|png|测量记录]'],
        content: [
          { type: 'text', content: '测量在生活中无处不在！量身高、称体重、测距离……让我们用学到的测量知识来解决实际问题吧！', animationType: 'reveal' },
          { type: 'example', content: '📏 小明家到学校2千米，他每天走一个来回，一天走多少米？2×2=4千米=4000米！', label: '距离计算', animationType: 'bounce' },
          { type: 'tip', content: '解决测量问题要先统一单位再计算，别忘了检查单位是否一致。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u3l5q1', type: 'choice', question: '小明每天上学走800米，放学走800米，一周（5天）上下学共走多少千米？', options: ['4千米', '8千米', '40千米', '80千米'], answer: '8千米', hint: '每天1600米，5天=8000米=8千米', explanation: '每天800×2=1600米，5天1600×5=8000米=8千米。' },
          { id: 'm3u3l5q2', type: 'fill', question: '一箱苹果重25千克，40箱苹果重___千克，合___吨', answer: '1000和1', hint: '25×40=？', explanation: '25×40=1000千克=1吨。' },
          { id: 'm3u3l5q3', type: 'choice', question: '【期末真题】一条路长3千米，已经修了800米，还剩多少米没修？', options: ['2200米', '220米', '2920米', '2000米'], answer: '2200米', hint: '3千米=3000米', explanation: '3千米=3000米，3000-800=2200米，还剩2200米没修。' },
          { id: 'm3u3l5q4', type: 'fill', question: '一根绳子长4米，剪成5分米的小段，可以剪___段', answer: '8', hint: '4米=40分米，40÷5=？', explanation: '4米=40分米，40÷5=8段。' },
          { id: 'm3u3l5q5', type: 'choice', question: '货场有6吨货物，一辆卡车每次运2000千克，几次能运完？', options: ['2次', '3次', '4次', '6次'], answer: '3次', hint: '2000千克=2吨', explanation: '2000千克=2吨，6÷2=3次，3次能运完。' },
          { id: 'm3u3l5q6', type: 'fill', question: '小明身高1米35厘米，比小红高8厘米，小红身高___厘米', answer: '127', hint: '1米35厘米=135厘米', explanation: '1米35厘米=135厘米，135-8=127厘米。' },
          { id: 'm3u3l5q7', type: 'choice', question: '操场一圈400米，跑5圈是多少千米？', options: ['2千米', '20千米', '200千米', '2000千米'], answer: '2千米', hint: '[长度单位]（数学-长度单位-第1课）400×5=2000米=？千米', explanation: '400×5=2000米=2千米。' }
        ]
      }
    ]
  },
  {
    id: 'm3u4', title: '倍的认识', subtitle: '理解倍的概念，解决倍数问题', order: 4,
    lessons: [
      {
        id: 'm3u4l1', title: '倍的意义', order: 1,
        teachingMethod: 'CPA实物摆圈→图示比较→符号表示',
        iDo: '家长摆2个红球和6个蓝球，讲解蓝球是红球的3倍（6里面有3个2）。',
        weDo: '亲子一起用实物摆倍数关系，说出谁是谁的几倍。',
        youDo: '孩子独立看图判断倍数关系。',
        parentTips: '倍是比较两个数量之间的关系，看大数里有几个小数就是几倍。',
        funElement: '笑话：2对6说——你是我的3倍！小游戏：倍数对对碰',
        gsapAnimations: ['[GSAP:staggerFrom|圈圈分组依次出现|0.4s|页面加载|power2.out]', '[GSAP:scaleIn|倍数标签弹出|0.5s|分组完成|back.out(1.7)]'],
        images: ['[IMG:illustration|2个红球和6个蓝球倍数图|400x300|cartoon|png|倍的意义]', '[IMG:illustration|圈圈分组示意图|300x250|cartoon|png|倍数分组]'],
        content: [
          { type: 'text', content: '今天我们来认识一个新朋友——"倍"！倍是用来比较两个数量之间关系的。', animationType: 'reveal' },
          { type: 'example', content: '🔴🔴 和 🔵🔵🔵🔵🔵🔵：2个红球，6个蓝球，6里面有3个2，所以蓝球是红球的3倍！', label: '倍数关系', animationType: 'bounce' },
          { type: 'formula', content: '求倍数：大数 ÷ 小数 = 倍数', label: '倍数公式', animationType: 'counter' },
          { type: 'text', content: '把小数看作1份，看大数里有几份，就是几倍。用圈圈把大数按小数来分组，圈了几圈就是几倍。', animationType: 'typewriter' },
          { type: 'tip', content: '倍是比较两个数的关系，一定要说清楚"谁是谁的几倍"，不能只说"几倍"！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '圈圈分组依次出现的动画，分组完成后倍数标签弹出', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u4l1q1', type: 'choice', question: '有3朵红花和12朵黄花，黄花是红花的几倍？', options: ['2倍', '3倍', '4倍', '5倍'], answer: '4倍', hint: '12里面有几个3？', explanation: '12÷3=4，黄花是红花的4倍。' },
          { id: 'm3u4l1q2', type: 'fill', question: '5个苹果，15个橘子，橘子是苹果的___倍', answer: '3', hint: '15÷5=？', explanation: '15÷5=3，橘子是苹果的3倍。' },
          { id: 'm3u4l1q3', type: 'flashcard', question: '快速判断：4和8，8是4的几倍？', answer: '2', hint: '8÷4=？', explanation: '8÷4=2，8是4的2倍。' },
          { id: 'm3u4l1q4', type: 'choice', question: '小明有4颗糖，小红有20颗糖，小红的糖是小明的几倍？', options: ['4倍', '5倍', '6倍', '16倍'], answer: '5倍', hint: '20÷4=？', explanation: '20÷4=5，小红的糖是小明的5倍。' },
          { id: 'm3u4l1q5', type: 'fill', question: '6是2的___倍，6是3的___倍', answer: '3和2', hint: '6÷2=？6÷3=？', explanation: '6÷2=3，6是2的3倍；6÷3=2，6是3的2倍。' },
          { id: 'm3u4l1q6', type: 'choice', question: '蓝球是红球的4倍，蓝球有24个，如果再增加蓝球使倍数变成5倍，需要增加几个蓝球？', options: ['6个', '12个', '18个', '24个'], answer: '6个', hint: '红球=24÷4=6，5倍=6×5=30，30-24=？', explanation: '红球=24÷4=6个，5倍=6×5=30个，30-24=6个，需要增加6个蓝球。' },
          { id: 'm3u4l1q7', type: 'fill', question: '4×6=___', answer: '24', hint: '[乘法口诀]（数学-表内乘法-第3课）', explanation: '4×6=24，四六二十四。' }
        ]
      },
      {
        id: 'm3u4l2', title: '求倍数问题', order: 2,
        teachingMethod: 'I Do→We Do→You Do，画图分析法',
        iDo: '家长画线段图示范：小明有5颗糖，小红是小明的3倍，小红有5×3=15颗。',
        weDo: '亲子一起画线段图解决求倍数的问题。',
        youDo: '孩子独立画图解决求一个数的几倍是多少的问题。',
        parentTips: '求一个数的几倍是多少用乘法，画线段图帮助理解。',
        funElement: '歇后语：事半功倍——效率高！小游戏：倍数画图师',
        gsapAnimations: ['[GSAP:scaleX|线段图延伸动画|0.6s|点击触发|power2.out]', '[GSAP:scaleIn|倍数结果弹出|0.4s|画图完成|back.out(1.7)]'],
        images: ['[IMG:illustration|线段图求倍数问题|400x300|cartoon|png|线段图]', '[IMG:illustration|求几倍是多少示意图|300x250|cartoon|png|倍数计算]'],
        content: [
          { type: 'text', content: '知道了倍的意义，现在我们来学习：求一个数的几倍是多少，该怎么做呢？', animationType: 'reveal' },
          { type: 'example', content: '🍬 小明有5颗糖，小红是小明的3倍，小红有5×3=15颗糖！', label: '求几倍', animationType: 'bounce' },
          { type: 'formula', content: '求一个数的几倍是多少：这个数 × 倍数', label: '计算公式', animationType: 'counter' },
          { type: 'text', content: '画线段图来帮助理解：画一条短线段表示小明的5颗，再画3条同样长的线段表示小红的15颗。', animationType: 'typewriter' },
          { type: 'tip', content: '求几倍用乘法，求是谁的几倍用除法，不要搞混哦！', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u4l2q1', type: 'choice', question: '小华有4本书，小丽的书是小华的5倍，小丽有几本？', options: ['9本', '15本', '20本', '25本'], answer: '20本', hint: '4×5=？', explanation: '4×5=20，小丽有20本书。' },
          { id: 'm3u4l2q2', type: 'fill', question: '小明有6颗糖，小红是他的3倍，小红有___颗', answer: '18', hint: '6×3=？', explanation: '6×3=18，小红有18颗糖。' },
          { id: 'm3u4l2q3', type: 'flashcard', question: '快速计算：7的4倍是多少？', answer: '28', hint: '7×4=？', explanation: '7×4=28，7的4倍是28。' },
          { id: 'm3u4l2q4', type: 'choice', question: '小猫有3条鱼，大猫的鱼是小猫的6倍，大猫比小猫多几条鱼？', options: ['12条', '15条', '18条', '21条'], answer: '15条', hint: '先求大猫有几条，再求多几条', explanation: '大猫3×6=18条，18-3=15条，大猫比小猫多15条。' },
          { id: 'm3u4l2q5', type: 'fill', question: '8的5倍是___', answer: '40', hint: '8×5=？', explanation: '8×5=40，8的5倍是40。' },
          { id: 'm3u4l2q6', type: 'choice', question: '红花有6朵，黄花是红花的3倍，红花和黄花一共有多少朵？', options: ['12朵', '18朵', '24朵', '30朵'], answer: '24朵', hint: '先求黄花，再求总数', explanation: '黄花6×3=18朵，6+18=24朵，一共有24朵。' },
          { id: 'm3u4l2q7', type: 'fill', question: '36÷4=___', answer: '9', hint: '[表内除法]（数学-表内除法-第1课）', explanation: '36÷4=9，四九三十六。' }
        ]
      },
      {
        id: 'm3u4l3', title: '倍数应用题', order: 3,
        teachingMethod: '情境化练习，生活问题驱动',
        iDo: '家长出应用题：果园有8棵梨树，苹果树是梨树的3倍，苹果树比梨树多几棵？',
        weDo: '亲子一起解决倍数应用题，画图分析数量关系。',
        youDo: '孩子独立解决倍数相关的应用题。',
        parentTips: '倍数应用题要分步思考：先求几倍是多少，再求多多少或少多少。',
        funElement: '小游戏：果园倍数大挑战！笑话：倍说我让数字变大变快',
        gsapAnimations: ['[GSAP:scaleIn|应用题场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|果园倍数应用题场景|400x300|cartoon|png|倍数应用]', '[IMG:illustration|倍数问题线段分析|300x250|cartoon|png|应用分析]'],
        content: [
          { type: 'text', content: '倍数问题在生活中经常出现，让我们来挑战更有趣的倍数应用题吧！', animationType: 'reveal' },
          { type: 'example', content: '🌳 果园有8棵梨树，苹果树是梨树的3倍，苹果树比梨树多几棵？先算8×3=24棵，再算24-8=16棵！', label: '倍数应用', animationType: 'bounce' },
          { type: 'formula', content: '倍数应用题步骤：①先求几倍是多少 ②再求多多少或少多少', label: '解题步骤', animationType: 'typewriter' },
          { type: 'tip', content: '倍数应用题要分步思考，先画线段图理解题意，再列式计算，最后检查答案。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '果园场景展开的动画，解题成功后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u4l3q1', type: 'choice', question: '红花有9朵，黄花是红花的2倍，黄花比红花多几朵？', options: ['9朵', '11朵', '18朵', '27朵'], answer: '9朵', hint: '先求黄花有几朵，再求多几朵', explanation: '黄花9×2=18朵，18-9=9朵，黄花比红花多9朵。' },
          { id: 'm3u4l3q2', type: 'fill', question: '小明5岁，爸爸是小明的7倍，爸爸比小明大___岁', answer: '30', hint: '先求爸爸几岁，再求大几岁', explanation: '爸爸5×7=35岁，35-5=30岁，爸爸比小明大30岁。' },
          { id: 'm3u4l3q3', type: 'flashcard', question: '快速思考：3的6倍比3多多少？', answer: '15', hint: '3×6-3=？', explanation: '3×6=18，18-3=15，3的6倍比3多15。' },
          { id: 'm3u4l3q4', type: 'choice', question: '学校有篮球8个，足球是篮球的3倍，排球比足球少5个，排球有多少个？', options: ['19个', '24个', '29个', '11个'], answer: '19个', hint: '先求足球，再求排球', explanation: '足球8×3=24个，排球24-5=19个。' },
          { id: 'm3u4l3q5', type: 'fill', question: '鸡有7只，鸭是鸡的4倍，鸡和鸭一共有___只', answer: '35', hint: '先求鸭，再求总数', explanation: '鸭7×4=28只，7+28=35只，一共有35只。' },
          { id: 'm3u4l3q6', type: 'choice', question: '小明有36颗糖，是小红的4倍，小红有几颗糖？两人一共有几颗糖？', options: ['9颗，45颗', '6颗，42颗', '9颗，27颗', '12颗，48颗'], answer: '9颗，45颗', hint: '小红=36÷4，总数=36+小红', explanation: '小红36÷4=9颗，36+9=45颗，一共有45颗。' },
          { id: 'm3u4l3q7', type: 'fill', question: '24÷6=___', answer: '4', hint: '[表内除法]（数学-表内除法-第2课）', explanation: '24÷6=4，四六二十四。' }
        ]
      },
      {
        id: 'm3u4l4', title: '倍的认识形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子对倍数关系的理解和解题过程。',
        weDo: '亲子一起回顾本单元重点，讨论求倍数和求几倍的区别。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '重点关注孩子是否分清"求几倍用乘法"和"求是谁的几倍用除法"。',
        funElement: '闯关挑战：全部答对获得"倍数小达人"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|倍数小达人徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|倍数知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对倍的认识的掌握情况吧！答对全部题目就能获得"倍数小达人"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '求倍数：大数÷小数，求几倍：小数×倍数，求多几：大数-小数', label: '倍数公式总结', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u4l4q1', type: 'choice', question: '18是3的几倍？', options: ['5倍', '6倍', '8倍', '15倍'], answer: '6倍', hint: '18÷3=？', explanation: '18÷3=6，18是3的6倍。' },
          { id: 'm3u4l4q2', type: 'fill', question: '9的7倍是___', answer: '63', hint: '9×7=？', explanation: '9×7=63，9的7倍是63。' },
          { id: 'm3u4l4q3', type: 'choice', question: '小红有5张邮票，小丽的邮票是小红的6倍，小丽有多少张？', options: ['11张', '25张', '30张', '35张'], answer: '30张', hint: '5×6=？', explanation: '5×6=30，小丽有30张邮票。' },
          { id: 'm3u4l4q4', type: 'fill', question: '42是7的___倍', answer: '6', hint: '42÷7=？', explanation: '42÷7=6，42是7的6倍。' },
          { id: 'm3u4l4q5', type: 'choice', question: '小明有8颗弹珠，小华的弹珠是小明的3倍，两人一共有多少颗？', options: ['24颗', '32颗', '40颗', '48颗'], answer: '32颗', hint: '先求小华，再求总数', explanation: '小华8×3=24颗，8+24=32颗，一共有32颗。' },
          { id: 'm3u4l4q6', type: 'fill', question: '一个数的5倍是45，这个数是___', answer: '9', hint: '45÷5=？', explanation: '45÷5=9，这个数是9。' },
          { id: 'm3u4l4q7', type: 'choice', question: '【期中真题】红花有6朵，黄花是红花的4倍，黄花比红花多多少朵？', options: ['12朵', '18朵', '24朵', '30朵'], answer: '18朵', hint: '[表内除法]（数学-表内除法-第1课）先求黄花6×4=24，再求24-6=？', explanation: '黄花6×4=24朵，24-6=18朵，黄花比红花多18朵。' }
        ]
      },
      {
        id: 'm3u4l5', title: '倍的认识综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的倍数问题，引导孩子综合运用倍数知识解决。',
        weDo: '亲子一起解决购物、种植等场景中的倍数问题。',
        youDo: '孩子独立解决生活中的倍数综合问题。',
        parentTips: '鼓励孩子画线段图帮助分析倍数关系，养成审题习惯。',
        funElement: '生活数学：用倍数知识解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|生活中的倍数应用|400x300|cartoon|png|倍数应用]', '[IMG:illustration|倍数线段分析|300x250|cartoon|png|线段分析]'],
        content: [
          { type: 'text', content: '倍数关系在生活中随处可见！让我们用学到的倍数知识来解决实际问题吧！', animationType: 'reveal' },
          { type: 'example', content: '🍎 果园里有梨树9棵，苹果树是梨树的5倍，桃树比苹果树少12棵，桃树有多少棵？9×5-12=33棵！', label: '倍数综合', animationType: 'bounce' },
          { type: 'tip', content: '复杂的倍数问题要分步解决：先画图理解关系，再一步步计算，最后检查。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u4l5q1', type: 'choice', question: '小明看一本书，已看8页，未看的页数是已看的5倍，这本书一共有多少页？', options: ['40页', '48页', '13页', '45页'], answer: '48页', hint: '先求未看，再求总数', explanation: '未看8×5=40页，8+40=48页，一共有48页。' },
          { id: 'm3u4l5q2', type: 'fill', question: '鸡有8只，鸭是鸡的3倍，鹅比鸭少6只，鹅有___只', answer: '18', hint: '先求鸭8×3=24，再求鹅24-6=？', explanation: '鸭8×3=24只，鹅24-6=18只。' },
          { id: 'm3u4l5q3', type: 'choice', question: '【期末真题】学校有篮球6个，足球是篮球的4倍，排球是足球的2倍，排球有多少个？', options: ['24个', '36个', '48个', '12个'], answer: '48个', hint: '先求足球6×4=24，再求排球24×2=？', explanation: '足球6×4=24个，排球24×2=48个。' },
          { id: 'm3u4l5q4', type: 'fill', question: '妈妈买了3千克苹果，买的梨是苹果的4倍，梨有___千克', answer: '12', hint: '3×4=？', explanation: '3×4=12千克，梨有12千克。' },
          { id: 'm3u4l5q5', type: 'choice', question: '小红的画是小明的3倍，小丽的画是小明的2倍，小红比小丽多8幅，小明有多少幅画？', options: ['4幅', '6幅', '8幅', '12幅'], answer: '8幅', hint: '小红比小丽多1倍=8幅', explanation: '小红3倍，小丽2倍，差1倍=8幅，所以小明有8幅画。' },
          { id: 'm3u4l5q6', type: 'fill', question: '果园里苹果树是梨树的3倍，苹果树比梨树多18棵，梨树有___棵', answer: '9', hint: '多2倍=18棵，1倍=？', explanation: '苹果树比梨树多3-1=2倍，2倍=18棵，1倍=9棵，梨树有9棵。' },
          { id: 'm3u4l5q7', type: 'choice', question: '一根绳子对折再对折后量得3米，这根绳子原来有多长？', options: ['6米', '9米', '12米', '15米'], answer: '12米', hint: '[表内除法]（数学-表内除法-第1课）对折1次变2段，对折2次变4段', explanation: '对折再对折变成4段，每段3米，3×4=12米，原来12米长。' }
        ]
      }
    ]
  },
  {
    id: 'm3u5', title: '多位数乘一位数', subtitle: '掌握多位数乘一位数的运算', order: 5,
    lessons: [
      {
        id: 'm3u5l1', title: '口算乘法', order: 1,
        teachingMethod: 'CPA拆分法→图示分步→符号速算',
        iDo: '家长示范口算20×3：2个十×3=6个十=60。',
        weDo: '亲子一起口算整十整百数乘一位数，互相出题。',
        youDo: '孩子独立口算整十整百数乘一位数。',
        parentTips: '口算时先不看末尾的0，算完再补0。',
        funElement: '笑话：20×3说——先算2×3=6，再补个0就是60！小游戏：口算乘法速算王',
        gsapAnimations: ['[GSAP:scaleIn|拆分计算标签弹出|0.4s|页面加载|back.out(1.7)]', '[GSAP:translateX|补0动画|0.3s|计算完成|power2.inOut]'],
        images: ['[IMG:illustration|整十数乘一位数口算|400x300|cartoon|png|口算乘法]', '[IMG:illustration|先算后补0示意图|300x250|cartoon|png|口算技巧]'],
        content: [
          { type: 'text', content: '整十数、整百数乘一位数，有一个超级好用的口算秘诀！', animationType: 'reveal' },
          { type: 'example', content: '🔢 20×3：先算2×3=6，再补1个0，就是60！200×3：先算2×3=6，再补2个0，就是600！', label: '口算秘诀', animationType: 'bounce' },
          { type: 'formula', content: '整十整百乘一位数：先乘0前面的数，再补0', label: '口算口诀', animationType: 'counter' },
          { type: 'text', content: '20里面有2个十，2个十×3=6个十=60。200里面有2个百，2个百×3=6个百=600。', animationType: 'typewriter' },
          { type: 'tip', content: '末尾有几个0就补几个0，但要注意：如果乘出来的结果末尾也有0，0会更多哦！如40×5=200。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u5l1q1', type: 'choice', question: '30×4=？', options: ['34', '70', '120', '130'], answer: '120', hint: '3×4=12，再补1个0', explanation: '3×4=12，补1个0，30×4=120。' },
          { id: 'm3u5l1q2', type: 'fill', question: '200×3=___', answer: '600', hint: '2×3=6，补2个0', explanation: '2×3=6，补2个0，200×3=600。' },
          { id: 'm3u5l1q3', type: 'flashcard', question: '快速口算：40×5=？', answer: '200', hint: '4×5=20，补1个0', explanation: '4×5=20，补1个0，40×5=200。' },
          { id: 'm3u5l1q4', type: 'choice', question: '学校买了4箱牛奶，每箱30盒，一共多少盒？', options: ['34盒', '70盒', '120盒', '130盒'], answer: '120盒', hint: '30×4=？', explanation: '30×4=120盒，一共120盒。' },
          { id: 'm3u5l1q5', type: 'fill', question: '500×6=___', answer: '3000', hint: '5×6=30，补2个0', explanation: '5×6=30，补2个0，500×6=3000。' },
          { id: 'm3u5l1q6', type: 'choice', question: '小明每天读书20页，小红每天读的页数是小明的3倍，两人一周共读多少页？', options: ['80页', '140页', '280页', '560页'], answer: '560页', hint: '先求小红每天读多少，再求两人每天共读多少，最后乘7', explanation: '小红每天20×3=60页，两人每天20+60=80页，一周80×7=560页。' },
          { id: 'm3u5l1q7', type: 'fill', question: '7×8=___', answer: '56', hint: '[乘法口诀]（数学-表内乘法-第4课）', explanation: '7×8=56，七八五十六。' }
        ]
      },
      {
        id: 'm3u5l2', title: '笔算乘法', order: 2,
        teachingMethod: 'I Do→We Do→You Do，竖式乘法法',
        iDo: '家长用竖式演示23×4：个位3×4=12写2进1，十位2×4+1=9。',
        weDo: '亲子一起列竖式做多位数乘一位数，练习进位乘法。',
        youDo: '孩子独立列竖式计算多位数乘一位数。',
        parentTips: '从个位乘起，满几十就进几，别忘了加进上来的数。',
        funElement: '歇后语：一箭双雕——一举两得！小游戏：竖式乘法闯关',
        gsapAnimations: ['[GSAP:staggerFrom|竖式乘法逐位出现|0.4s|页面加载|power2.out]', '[GSAP:translateY|进位数字飞到上位|0.4s|满十触发|power2.inOut]'],
        images: ['[IMG:illustration|23×4竖式乘法图|400x300|cartoon|png|笔算乘法]', '[IMG:illustration|进位乘法示意图|300x250|cartoon|png|乘法进位]'],
        content: [
          { type: 'text', content: '多位数乘一位数，用竖式来计算最清楚！从个位乘起，满几十就进几。', animationType: 'reveal' },
          { type: 'example', content: '📝 23×4竖式：个位3×4=12写2进1，十位2×4+1=9，结果是92！', label: '竖式乘法', animationType: 'bounce' },
          { type: 'formula', content: '竖式乘法：从个位乘起，用一位数依次乘多位数的每一位，满几十进几', label: '乘法规则', animationType: 'counter' },
          { type: 'example', content: '36×5：个位6×5=30写0进3，十位3×5+3=18，结果是180！', label: '进位乘法', animationType: 'bounce' },
          { type: 'tip', content: '进位的数一定要记得加上去！这是最容易出错的地方。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '竖式计算36×5：个位6×5=30写0进3，十位3×5+3=18写8进1，结果180', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '竖式进位乘法',
              verticalCalcConfig: {
                num1: 36,
                num2: 5,
                operator: '×',
                result: 180,
                carry: [1, 3],
                steps: [
                  { text: '个位：6×5=30，写0进3', highlight: 'ones' },
                  { text: '十位：3×5+3=18，写8进1', highlight: 'tens' },
                ],
              },
              ttsNarration: '竖式计算36乘5！个位6乘5等于30，写0进3！十位3乘5加进位的3等于18，写8进1！结果180！',
            }
          },
          { type: 'animation', content: '竖式计算23×4：个位3×4=12写2进1，十位2×4+1=9，结果92', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '竖式乘法',
              verticalCalcConfig: {
                num1: 23,
                num2: 4,
                operator: '×',
                result: 92,
                carry: [0, 1],
                steps: [
                  { text: '个位：3×4=12，写2进1', highlight: 'ones' },
                  { text: '十位：2×4+1=9', highlight: 'tens' },
                ],
              },
              ttsNarration: '竖式计算23乘4！个位3乘4等于12，写2进1！十位2乘4加进位的1等于9！结果92！',
            }
          },
        ],
        practiceQuestions: [
          { id: 'm3u5l2q1', type: 'choice', question: '36×5=？', options: ['150', '160', '180', '190'], answer: '180', hint: '个位6×5=30进3，十位3×5+3=18', explanation: '个位6×5=30写0进3，十位3×5+3=18，所以36×5=180。' },
          { id: 'm3u5l2q2', type: 'fill', question: '47×6=___', answer: '282', hint: '个位7×6=42进4，十位4×6+4=28', explanation: '个位7×6=42写2进4，十位4×6+4=28，所以47×6=282。' },
          { id: 'm3u5l2q3', type: 'flashcard', question: '快速计算：58×3=？', answer: '174', hint: '个位8×3=24进2', explanation: '个位8×3=24写4进2，十位5×3+2=17，所以58×3=174。' },
          { id: 'm3u5l2q4', type: 'choice', question: '学校有6个班，每班45人，全校一共有多少人？', options: ['240人', '270人', '280人', '290人'], answer: '270人', hint: '45×6=？', explanation: '45×6=270人，全校一共270人。' },
          { id: 'm3u5l2q5', type: 'fill', question: '128×4=___', answer: '512', hint: '注意三位数乘一位数', explanation: '个位8×4=32写2进3，十位2×4+3=11写1进1，百位1×4+1=5，128×4=512。' },
          { id: 'm3u5l2q6', type: 'choice', question: '一个三位数乘8，积可能是几位数？', options: ['一定是三位数', '一定是四位数', '可能是三位数或四位数', '一定是两位数'], answer: '可能是三位数或四位数', hint: '100×8=？999×8=？', explanation: '100×8=800（三位数），999×8=7992（四位数），所以可能是三位数或四位数。' },
          { id: 'm3u5l2q7', type: 'fill', question: '54÷9=___', answer: '6', hint: '[表内除法]（数学-表内除法-第3课）', explanation: '54÷9=6，六九五十四。' }
        ]
      },
      {
        id: 'm3u5l3', title: '乘法应用', order: 3,
        teachingMethod: '情境化练习，生活应用',
        iDo: '家长出应用题：每箱有24个苹果，5箱一共多少个？',
        weDo: '亲子一起解决乘法应用题，画图分析数量关系。',
        youDo: '孩子独立解决多位数乘一位数的应用题。',
        parentTips: '应用题要读懂题意，找出每份数和份数，用乘法计算。',
        funElement: '小游戏：乘法应用大冒险！笑话：乘号说我让东西变多变快',
        gsapAnimations: ['[GSAP:scaleIn|应用题场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|苹果箱乘法应用题|400x300|cartoon|png|乘法应用]', '[IMG:illustration|每份数×份数示意图|300x250|cartoon|png|应用分析]'],
        content: [
          { type: 'text', content: '学会了乘法计算，让我们来解决生活中的乘法问题吧！', animationType: 'reveal' },
          { type: 'example', content: '🍎 每箱有24个苹果，5箱一共多少个？24×5=120个！', label: '乘法应用', animationType: 'bounce' },
          { type: 'formula', content: '每份数 × 份数 = 总数', label: '乘法关系', animationType: 'counter' },
          { type: 'text', content: '读应用题时，先找出"每份有多少"和"有几份"，然后用乘法算出总数。', animationType: 'typewriter' },
          { type: 'tip', content: '应用题要仔细读题，分清"每份数"和"份数"，列式前先想清楚用什么方法。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '苹果箱场景展开的动画，解题成功后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u5l3q1', type: 'choice', question: '每排有35个座位，6排一共多少个座位？', options: ['180个', '200个', '210个', '220个'], answer: '210个', hint: '35×6=？', explanation: '35×6=210，6排一共210个座位。' },
          { id: 'm3u5l3q2', type: 'fill', question: '每天看18页书，7天看___页', answer: '126', hint: '18×7=？', explanation: '18×7=126，7天看126页。' },
          { id: 'm3u5l3q3', type: 'flashcard', question: '快速计算：每袋45颗糖，4袋共几颗？', answer: '180', hint: '45×4=？', explanation: '45×4=180，4袋共180颗糖。' },
          { id: 'm3u5l3q4', type: 'choice', question: '一箱苹果24个，3箱分给6个小朋友，每人几个？', options: ['8个', '12个', '18个', '24个'], answer: '12个', hint: '先求3箱共多少，再除以6', explanation: '3箱共24×3=72个，72÷6=12个，每人12个。' },
          { id: 'm3u5l3q5', type: 'fill', question: '每本笔记本8元，买15本需要___元', answer: '120', hint: '8×15=？', explanation: '8×15=120元，需要120元。' },
          { id: 'm3u5l3q6', type: 'choice', question: '学校组织春游，每辆车坐48人，租了7辆车，正好坐满，但后来又来了25人，还需要租几辆车？', options: ['0辆', '1辆', '2辆', '3辆'], answer: '1辆', hint: '25人需要几辆车？', explanation: '25<48，还需要1辆车就够了。' },
          { id: 'm3u5l3q7', type: 'fill', question: '81÷9=___', answer: '9', hint: '[表内除法]（数学-表内除法-第3课）', explanation: '81÷9=9，九九八十一。' }
        ]
      },
      {
        id: 'm3u5l4', title: '多位数乘一位数形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子的口算和笔算过程。',
        weDo: '亲子一起回顾本单元重点，讨论进位乘法的易错点。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '重点关注孩子竖式乘法的进位是否正确，0的乘法是否掌握。',
        funElement: '闯关挑战：全部答对获得"乘法小达人"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|乘法小达人徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|乘法知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对多位数乘一位数的掌握情况吧！答对全部题目就能获得"乘法小达人"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '口算：先乘后补0，笔算：从个位乘起满几十进几，0×任何数=0', label: '乘法策略总结', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u5l4q1', type: 'choice', question: '60×7=？', options: ['67', '407', '420', '470'], answer: '420', hint: '6×7=42，补1个0', explanation: '6×7=42，补1个0，60×7=420。' },
          { id: 'm3u5l4q2', type: 'fill', question: '56×4=___', answer: '224', hint: '注意进位', explanation: '个位6×4=24写4进2，十位5×4+2=22，56×4=224。' },
          { id: 'm3u5l4q3', type: 'choice', question: '0×365=？', options: ['0', '365', '3650', '1'], answer: '0', hint: '0乘任何数等于几？', explanation: '0乘任何数都等于0，所以0×365=0。' },
          { id: 'm3u5l4q4', type: 'fill', question: '205×3=___', answer: '615', hint: '中间有0的乘法', explanation: '个位5×3=15写5进1，十位0×3+1=1，百位2×3=6，205×3=615。' },
          { id: 'm3u5l4q5', type: 'choice', question: '下面哪个算式的积最大？', options: ['99×2', '48×4', '66×3', '55×3'], answer: '99×2', hint: '分别算一算', explanation: '99×2=198，48×4=192，66×3=198，55×3=165。99×2=198最大。' },
          { id: 'm3u5l4q6', type: 'fill', question: '一个数乘7等于56，这个数是___', answer: '8', hint: '56÷7=？', explanation: '56÷7=8，这个数是8。' },
          { id: 'm3u5l4q7', type: 'choice', question: '【期中真题】250×4的积的末尾有几个0？', options: ['1个', '2个', '3个', '4个'], answer: '3个', hint: '[乘法口诀]（数学-乘法口诀-第1课）250×4=？', explanation: '250×4=1000，末尾有3个0。' }
        ]
      },
      {
        id: 'm3u5l5', title: '多位数乘一位数综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的乘法问题，引导孩子综合运用乘法知识解决。',
        weDo: '亲子一起解决购物、旅行等场景中的乘法问题。',
        youDo: '孩子独立解决生活中的多位数乘一位数综合问题。',
        parentTips: '鼓励孩子先估算再精确计算，养成验算的好习惯。',
        funElement: '生活数学：用乘法解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|生活中的乘法应用|400x300|cartoon|png|乘法应用]', '[IMG:illustration|购物乘法计算|300x250|cartoon|png|购物计算]'],
        content: [
          { type: 'text', content: '乘法在生活中到处都能用到！买东西算总价、算面积、安排座位……让我们来挑战吧！', animationType: 'reveal' },
          { type: 'example', content: '🎫 游乐园门票每张68元，5个人需要多少元？68×5=340元！', label: '乘法应用', animationType: 'bounce' },
          { type: 'tip', content: '解决生活问题要先理解题意，选择合适的方法，计算后要检查结果是否合理。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u5l5q1', type: 'choice', question: '学校买来8包书，每包35本，一共多少本？', options: ['240本', '270本', '280本', '300本'], answer: '280本', hint: '35×8=？', explanation: '35×8=280本，一共280本。' },
          { id: 'm3u5l5q2', type: 'fill', question: '每件衣服85元，买4件需要___元', answer: '340', hint: '85×4=？', explanation: '85×4=340元，需要340元。' },
          { id: 'm3u5l5q3', type: 'choice', question: '【期末真题】一本故事书有126页，小红每天看8页，看了9天，还剩多少页没看？', options: ['36页', '44页', '54页', '72页'], answer: '54页', hint: '先算看了多少页，再算还剩多少', explanation: '已看8×9=72页，126-72=54页，还剩54页没看。' },
          { id: 'm3u5l5q4', type: 'fill', question: '果园里有6行梨树，每行18棵，还有56棵苹果树，果园一共有___棵树', answer: '164', hint: '先求梨树，再求总数', explanation: '梨树6×18=108棵，108+56=164棵，一共有164棵树。' },
          { id: 'm3u5l5q5', type: 'choice', question: '小明买了3本书，每本25元，又买了2支笔，每支8元，一共花了多少元？', options: ['75元', '91元', '83元', '99元'], answer: '91元', hint: '书的钱+笔的钱', explanation: '书3×25=75元，笔2×8=16元，75+16=91元。' },
          { id: 'm3u5l5q6', type: 'fill', question: '一个电影院有9排座位，每排32个，来了280名观众，还空___个座位', answer: '8', hint: '先求总座位数', explanation: '总座位9×32=288个，288-280=8个，还空8个座位。' },
          { id: 'm3u5l5q7', type: 'choice', question: '小明有200元，买了5本书每本28元，还剩多少元？', options: ['40元', '50元', '60元', '140元'], answer: '60元', hint: '[乘法口诀]（数学-乘法口诀-第1课）5×28=140，200-140=？', explanation: '5×28=140元，200-140=60元，还剩60元。' }
        ]
      }
    ]
  },
  {
    id: 'm3u6', title: '长方形和正方形', subtitle: '认识四边形，学会计算周长', order: 6,
    lessons: [
      {
        id: 'm3u6l1', title: '四边形特征', order: 1,
        teachingMethod: 'CPA实物观察→图示分类→特征归纳',
        iDo: '家长展示各种四边形，讲解四边形有4条边和4个角。',
        weDo: '亲子一起找生活中的四边形，区分长方形和正方形。',
        youDo: '孩子独立识别四边形，说出长方形和正方形的特征。',
        parentTips: '长方形对边相等，正方形四条边都相等，它们都有4个直角。',
        funElement: '笑话：正方形说我四边一样长最公平！小游戏：四边形大搜索',
        gsapAnimations: ['[GSAP:drawSVG|四边形描边动画|0.6s|页面加载|power2.out]', '[GSAP:scaleIn|特征标签弹出|0.4s|描边完成|back.out(1.7)]'],
        images: ['[IMG:illustration|长方形和正方形特征图|400x300|cartoon|png|四边形特征]', '[IMG:illustration|生活中的四边形|300x250|cartoon|png|找四边形]'],
        content: [
          { type: 'text', content: '今天我们来认识四边形家族！四边形就是有4条边和4个角的图形。', animationType: 'reveal' },
          { type: 'example', content: '📐 长方形：对边相等，4个直角。正方形：4条边都相等，4个直角。', label: '四边形特征', animationType: 'bounce' },
          { type: 'formula', content: '四边形：4条边 + 4个角；长方形：对边相等+4个直角；正方形：4边相等+4个直角', label: '特征归纳', animationType: 'counter' },
          { type: 'text', content: '正方形是特殊的长方形！因为正方形的4条边都相等，当然对边也相等。', animationType: 'typewriter' },
          { type: 'tip', content: '判断四边形看3点：是不是封闭图形、有没有4条直的边、有没有4个角。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '四边形描边动画，描边完成后特征标签弹出', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u6l1q1', type: 'choice', question: '正方形的4条边有什么关系？', options: ['对边相等', '4条边都相等', '只有2条边相等', '没有关系'], answer: '4条边都相等', hint: '正方形最特别的地方', explanation: '正方形的4条边都相等，4个角都是直角。' },
          { id: 'm3u6l1q2', type: 'fill', question: '长方形有___个直角', answer: '4', hint: '数一数长方形的角', explanation: '长方形有4个直角，对边相等。' },
          { id: 'm3u6l1q3', type: 'flashcard', question: '▭ 快速判断：这是长方形还是正方形？（长比宽长）', answer: '长方形', hint: '对边相等但四边不全相等', explanation: '对边相等但四条边不全相等，是长方形。' },
          { id: 'm3u6l1q4', type: 'choice', question: '下面哪个图形是四边形？', options: ['三角形', '圆形', '长方形', '五角星'], answer: '长方形', hint: '四边形有4条边', explanation: '长方形有4条边和4个角，是四边形。' },
          { id: 'm3u6l1q5', type: 'fill', question: '正方形是特殊的___形', answer: '长方', acceptableAnswers: ['矩形'], hint: '正方形也满足长方形的特征', explanation: '正方形4条边都相等，对边也相等，4个直角，所以是特殊的长方形。' },
          { id: 'm3u6l1q6', type: 'choice', question: '一个长方形的长是8厘米，宽是5厘米，如果剪去一个最大的正方形，正方形的边长是多少？', options: ['3厘米', '5厘米', '8厘米', '13厘米'], answer: '5厘米', hint: '最大的正方形边长不能超过宽', explanation: '最大的正方形边长等于长方形的宽，即5厘米。' },
          { id: 'm3u6l1q7', type: 'fill', question: '3+3+3+3=___，也可以写成乘法算式___', answer: '12和3×4=12', hint: '[乘法的意义]（数学-表内乘法-第1课）', explanation: '3+3+3+3=12，乘法算式3×4=12。' }
        ]
      },
      {
        id: 'm3u6l2', title: '周长计算', order: 2,
        teachingMethod: 'I Do→We Do→You Do，描边测量法',
        iDo: '家长用绳子绕长方形一周，量出绳子长度就是周长，再推导公式。',
        weDo: '亲子一起测量桌面、书本的周长，验证公式。',
        youDo: '孩子独立计算长方形和正方形的周长。',
        parentTips: '长方形周长=（长+宽）×2，正方形周长=边长×4。',
        funElement: '笑话：周长说我绕一圈就知道了！歇后语：四通八达——路路通',
        gsapAnimations: ['[GSAP:drawSVG|沿边描一圈动画|0.8s|点击触发|power2.out]', '[GSAP:scaleIn|周长公式弹出|0.5s|描边完成|back.out(1.7)]'],
        images: ['[IMG:illustration|长方形周长公式图|400x300|cartoon|png|周长公式]', '[IMG:illustration|绳子绕一周量周长|300x250|cartoon|png|周长测量]'],
        content: [
          { type: 'text', content: '周长就是围成一个图形所有边长的总和，也就是绕图形一圈的长度。', animationType: 'reveal' },
          { type: 'example', content: '📏 长方形长5厘米宽3厘米：5+3+5+3=16厘米，或(5+3)×2=16厘米！', label: '周长计算', animationType: 'bounce' },
          { type: 'formula', content: '长方形周长 =（长+宽）× 2', label: '长方形公式', animationType: 'counter' },
          { type: 'formula', content: '正方形周长 = 边长 × 4', label: '正方形公式', animationType: 'counter' },
          { type: 'tip', content: '求周长就是把所有边的长度加起来，用公式更方便！别忘了乘2或乘4。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '沿长方形边描一圈的动画，描完后周长公式弹出', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u6l2q1', type: 'choice', question: '长方形长5厘米，宽3厘米，周长是多少？', options: ['8厘米', '15厘米', '16厘米', '20厘米'], answer: '16厘米', hint: '（5+3）×2=？', explanation: '（5+3）×2=16厘米，周长是16厘米。' },
          { id: 'm3u6l2q2', type: 'fill', question: '正方形边长4厘米，周长是___厘米', answer: '16', hint: '4×4=？', explanation: '4×4=16，正方形周长是16厘米。' },
          { id: 'm3u6l2q3', type: 'flashcard', question: '快速计算：长方形长8米宽2米，周长几米？', answer: '20', hint: '（8+2）×2=？', explanation: '（8+2）×2=20，周长是20米。' },
          { id: 'm3u6l2q4', type: 'choice', question: '一个正方形的边长是5厘米，周长是多少？', options: ['10厘米', '15厘米', '20厘米', '25厘米'], answer: '20厘米', hint: '5×4=？', explanation: '5×4=20厘米，正方形周长是20厘米。' },
          { id: 'm3u6l2q5', type: 'fill', question: '长方形周长是30厘米，长是10厘米，宽是___厘米', answer: '5', hint: '30÷2-10=？', explanation: '30÷2=15，15-10=5厘米，宽是5厘米。' },
          { id: 'm3u6l2q6', type: 'choice', question: '一个长方形剪去一个最大的正方形后，剩余部分的长是8厘米，宽是3厘米，原长方形的周长是多少？', options: ['16厘米', '22厘米', '28厘米', '34厘米'], answer: '28厘米', hint: '原长方形长=8+3=11厘米，宽=3厘米', explanation: '原长方形长=8+3=11厘米，宽=3厘米，周长=(11+3)×2=28厘米。' },
          { id: 'm3u6l2q7', type: 'fill', question: '2×9+5=___', answer: '23', hint: '[乘加混合运算]（数学-表内乘法-第5课）', explanation: '先算2×9=18，再算18+5=23。' }
        ]
      },
      {
        id: 'm3u6l3', title: '周长应用', order: 3,
        teachingMethod: '情境化练习，生活应用',
        iDo: '家长出应用题：花坛长6米宽4米，围一圈篱笆需要多少米？',
        weDo: '亲子一起解决周长应用题，测量家中物品的周长。',
        youDo: '孩子独立解决周长相关的应用题。',
        parentTips: '周长应用题要注意是围一圈还是围几圈，还要注意单位。',
        funElement: '小游戏：篱笆围围乐！笑话：篱笆说我绕你一圈就保护你了',
        gsapAnimations: ['[GSAP:drawSVG|篱笆围一圈动画|0.8s|点击触发|power2.out]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|花坛围篱笆应用题|400x300|cartoon|png|周长应用]', '[IMG:illustration|围篱笆示意图|300x250|cartoon|png|篱笆围圈]'],
        content: [
          { type: 'text', content: '周长在生活中有很多用处，比如围篱笆、镶花边、跑操场等都需要算周长。', animationType: 'reveal' },
          { type: 'example', content: '🏡 花坛长6米宽4米，围一圈篱笆需要多少米？(6+4)×2=20米！', label: '周长应用', animationType: 'bounce' },
          { type: 'formula', content: '围1圈=周长，围2圈=周长×2，围n圈=周长×n', label: '围圈公式', animationType: 'counter' },
          { type: 'text', content: '有时候题目会问"靠墙围篱笆"，这时候只需要围3条边，不是完整的周长哦！', animationType: 'typewriter' },
          { type: 'tip', content: '做周长应用题要注意：围几圈？靠不靠墙？单位是否统一？', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '篱笆围一圈的动画，解题成功后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u6l3q1', type: 'choice', question: '操场长100米宽50米，绕操场跑一圈多少米？', options: ['150米', '200米', '300米', '500米'], answer: '300米', hint: '（100+50）×2=？', explanation: '（100+50）×2=300米，跑一圈300米。' },
          { id: 'm3u6l3q2', type: 'fill', question: '正方形桌面边长8分米，围一圈花边需要___分米', answer: '32', hint: '8×4=？', explanation: '8×4=32，围一圈花边需要32分米。' },
          { id: 'm3u6l3q3', type: 'flashcard', question: '快速计算：长方形长12米宽5米，围2圈要多少米？', answer: '68', hint: '先算1圈，再乘2', explanation: '1圈（12+5）×2=34米，2圈34×2=68米。' },
          { id: 'm3u6l3q4', type: 'choice', question: '一个长方形花坛长8米宽5米，一面靠墙，至少需要多少米篱笆？', options: ['13米', '18米', '21米', '26米'], answer: '18米', hint: '靠墙那面不需要篱笆，最少围3条边', explanation: '靠长边墙：5+8+5=18米；靠宽边墙：8+5+8=21米。至少18米。' },
          { id: 'm3u6l3q5', type: 'fill', question: '正方形周长是36厘米，边长是___厘米', answer: '9', hint: '36÷4=？', explanation: '36÷4=9厘米，边长是9厘米。' },
          { id: 'm3u6l3q6', type: 'choice', question: '用一根24厘米的铁丝围成一个长方形，长是8厘米，宽是多少厘米？如果围成正方形，边长是多少？', options: ['宽4厘米，边长6厘米', '宽3厘米，边长6厘米', '宽4厘米，边长8厘米', '宽2厘米，边长6厘米'], answer: '宽4厘米，边长6厘米', hint: '24÷2-8=宽，24÷4=边长', explanation: '长方形宽=24÷2-8=4厘米，正方形边长=24÷4=6厘米。' },
          { id: 'm3u6l3q7', type: 'fill', question: '6×7=___', answer: '42', hint: '[乘法口诀]（数学-表内乘法-第4课）', explanation: '6×7=42，六七四十二。' }
        ]
      },
      {
        id: 'm3u6l4', title: '长方形和正方形形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子对四边形特征和周长公式的掌握。',
        weDo: '亲子一起回顾本单元重点，讨论靠墙围篱笆等易错题型。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '重点关注孩子是否熟记周长公式，能否灵活运用。',
        funElement: '闯关挑战：全部答对获得"图形小专家"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|图形小专家徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|周长知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对长方形和正方形的掌握情况吧！答对全部题目就能获得"图形小专家"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '长方形周长=（长+宽）×2，正方形周长=边长×4', label: '周长公式总结', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u6l4q1', type: 'choice', question: '长方形长12厘米，宽8厘米，周长是多少？', options: ['20厘米', '40厘米', '96厘米', '32厘米'], answer: '40厘米', hint: '（12+8）×2=？', explanation: '（12+8）×2=40厘米。' },
          { id: 'm3u6l4q2', type: 'fill', question: '正方形边长7分米，周长是___分米', answer: '28', hint: '7×4=？', explanation: '7×4=28分米。' },
          { id: 'm3u6l4q3', type: 'choice', question: '一个正方形周长是20米，边长是多少米？', options: ['4米', '5米', '10米', '15米'], answer: '5米', hint: '20÷4=？', explanation: '20÷4=5米。' },
          { id: 'm3u6l4q4', type: 'fill', question: '长方形周长是24厘米，宽是4厘米，长是___厘米', answer: '8', hint: '24÷2-4=？', explanation: '24÷2=12，12-4=8厘米。' },
          { id: 'm3u6l4q5', type: 'choice', question: '下面哪个说法正确？', options: ['正方形不是长方形', '长方形是特殊的正方形', '正方形是特殊的长方形', '长方形和正方形没关系'], answer: '正方形是特殊的长方形', hint: '正方形满足长方形的所有特征', explanation: '正方形4条边都相等，对边也相等，4个直角，所以是特殊的长方形。' },
          { id: 'm3u6l4q6', type: 'fill', question: '一个长方形长15厘米，宽比长短7厘米，周长是___厘米', answer: '46', hint: '先求宽=15-7=8', explanation: '宽=15-7=8厘米，周长=（15+8）×2=46厘米。' },
          { id: 'm3u6l4q7', type: 'choice', question: '【期中真题】一个正方形的边长是9厘米，它的周长是多少厘米？', options: ['18厘米', '27厘米', '36厘米', '81厘米'], answer: '36厘米', hint: '[角的初步]（数学-角的初步-第1课）9×4=？', explanation: '9×4=36厘米。' }
        ]
      },
      {
        id: 'm3u6l5', title: '长方形和正方形综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的周长问题，引导孩子综合运用周长知识解决。',
        weDo: '亲子一起测量家中物品的周长，解决实际问题。',
        youDo: '孩子独立解决生活中的周长综合问题。',
        parentTips: '鼓励孩子画图帮助理解，注意靠墙等特殊情况的周长计算。',
        funElement: '生活数学：用周长知识解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|生活中的周长应用|400x300|cartoon|png|周长应用]', '[IMG:illustration|围篱笆花边示意图|300x250|cartoon|png|围篱笆]'],
        content: [
          { type: 'text', content: '周长在生活中到处都能用到！围篱笆、镶花边、跑操场……让我们来挑战吧！', animationType: 'reveal' },
          { type: 'example', content: '🏡 一块长方形菜地长15米宽10米，一面靠墙，最少需要多少米篱笆？10+15+10=35米！', label: '周长应用', animationType: 'bounce' },
          { type: 'tip', content: '靠墙围篱笆要注意：靠长边墙最省篱笆，靠宽边墙用得多。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u6l5q1', type: 'choice', question: '一块长方形桌布长20分米宽15分米，四周缝花边，需要多少分米花边？', options: ['35分米', '70分米', '300分米', '40分米'], answer: '70分米', hint: '（20+15）×2=？', explanation: '（20+15）×2=70分米。' },
          { id: 'm3u6l5q2', type: 'fill', question: '正方形手帕边长25厘米，四周缝花边，需要___厘米', answer: '100', hint: '25×4=？', explanation: '25×4=100厘米。' },
          { id: 'm3u6l5q3', type: 'choice', question: '【期末真题】一个长方形操场长80米宽50米，小明绕操场跑了3圈，一共跑了多少米？', options: ['260米', '520米', '780米', '1040米'], answer: '780米', hint: '先算1圈周长，再乘3', explanation: '1圈（80+50）×2=260米，3圈260×3=780米。' },
          { id: 'm3u6l5q4', type: 'fill', question: '一块长方形菜地长12米宽8米，一面靠长边墙，需要___米篱笆', answer: '28', hint: '8+12+8=？', explanation: '靠长边墙：8+12+8=28米。' },
          { id: 'm3u6l5q5', type: 'choice', question: '把两个边长3厘米的正方形拼成一个长方形，长方形的周长是多少？', options: ['12厘米', '18厘米', '24厘米', '6厘米'], answer: '18厘米', hint: '拼成长方形长6厘米宽3厘米', explanation: '拼成长方形长=3+3=6厘米，宽=3厘米，周长=（6+3）×2=18厘米。' },
          { id: 'm3u6l5q6', type: 'fill', question: '一个正方形的周长和一个长方形的周长相等，长方形长12厘米宽8厘米，正方形边长是___厘米', answer: '10', hint: '先求长方形周长，再÷4', explanation: '长方形周长=（12+8）×2=40厘米，正方形边长=40÷4=10厘米。' },
          { id: 'm3u6l5q7', type: 'choice', question: '用一根铁丝围成长方形，长是宽的2倍，宽是6厘米，这根铁丝长多少厘米？', options: ['18厘米', '24厘米', '36厘米', '48厘米'], answer: '36厘米', hint: '[角的初步]（数学-角的初步-第1课）长=6×2=12，周长=（12+6）×2', explanation: '长=6×2=12厘米，周长=（12+6）×2=36厘米。' }
        ]
      }
    ]
  },
  {
    id: 'm3u7', title: '分数的初步认识', subtitle: '认识分数，学会简单的分数运算', order: 7,
    lessons: [
      {
        id: 'm3u7l1', title: '认识几分之一', order: 1,
        teachingMethod: 'CPA实物平分→图示折纸→符号读写',
        iDo: '家长把一个苹果平均分成2份，讲解每份是它的二分之一，写作1/2。',
        weDo: '亲子一起折纸，折出1/2、1/3、1/4，感受几分之一。',
        youDo: '孩子独立用折纸或画图表示几分之一。',
        parentTips: '分数的前提是"平均分"，不平均分就不能用分数表示。',
        funElement: '笑话：1/2说我是一半，1/4说我更小！小游戏：折纸分一分',
        gsapAnimations: ['[GSAP:drawSVG|折纸分割线动画|0.6s|点击触发|power2.out]', '[GSAP:scaleIn|分数标签弹出|0.4s|分割完成|back.out(1.7)]'],
        images: ['[IMG:illustration|苹果平均分成2份|400x300|cartoon|png|几分之一]', '[IMG:illustration|折纸表示1/2、1/3、1/4|300x250|cartoon|png|折纸分数]'],
        content: [
          { type: 'text', content: '把一个东西平均分成几份，每份就是它的几分之一，这就是分数！', animationType: 'reveal' },
          { type: 'example', content: '🍎 把一个苹果平均分成2份，每份是它的1/2（二分之一）；平均分成4份，每份是1/4（四分之一）！', label: '几分之一', animationType: 'bounce' },
          { type: 'formula', content: '分数写法：分子/分母，分母=平均分的总份数，分子=取的份数', label: '分数读写', animationType: 'counter' },
          { type: 'text', content: '1/2读作二分之一，1/3读作三分之一，1/4读作四分之一。分母越大，每份越小！', animationType: 'typewriter' },
          { type: 'tip', content: '一定要"平均分"才能用分数表示！如果分得不均匀，就不能用分数哦。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '折纸分割线动画，分割完成后分数标签弹出', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u7l1q1', type: 'choice', question: '把一个蛋糕平均分成4份，每份是它的几分之几？', options: ['1/2', '1/3', '1/4', '1/5'], answer: '1/4', hint: '平均分成几份，每份就是几分之一', explanation: '平均分成4份，每份是它的1/4。' },
          { id: 'm3u7l1q2', type: 'fill', question: '把一根绳子平均分成3段，每段是它的___分之一', answer: '三', hint: '分3段就是几分之一？', explanation: '平均分成3段，每段是它的1/3，即三分之一。' },
          { id: 'm3u7l1q3', type: 'flashcard', question: '⚪平均分成2份，涂了1份（🌑🌕），说出分数！', answer: '1/2', hint: '平均分成2份，涂了1份', explanation: '平均分成2份，涂了1份，是1/2。' },
          { id: 'm3u7l1q4', type: 'choice', question: '把一根绳子对折3次，每段是这根绳子的几分之几？', options: ['1/2', '1/3', '1/6', '1/8'], answer: '1/8', hint: '对折3次分成几段？', explanation: '对折3次分成8段，每段是1/8。' },
          { id: 'm3u7l1q5', type: 'fill', question: '把一个圆平均分成6份，每份是它的___分之一', answer: '六', hint: '分6份就是几分之一', explanation: '平均分成6份，每份是1/6，即六分之一。' },
          { id: 'm3u7l1q6', type: 'choice', question: '下面哪个分数最大？', options: ['1/3', '1/5', '1/8', '1/10'], answer: '1/3', hint: '分母越小，每份越大', explanation: '分子相同，分母越小分数越大，1/3最大。' },
          { id: 'm3u7l1q7', type: 'fill', question: '8÷2=___', answer: '4', hint: '[表内除法]（数学-表内除法-第1课）', explanation: '8÷2=4，二四得八。' }
        ]
      },
      {
        id: 'm3u7l2', title: '认识几分之几', order: 2,
        teachingMethod: 'I Do→We Do→You Do，涂色表示法',
        iDo: '家长把一个圆平均分成8份，涂3份，讲解3/8的读写。',
        weDo: '亲子一起用涂色表示几分之几，互相出题猜分数。',
        youDo: '孩子独立用涂色或画图表示几分之几。',
        parentTips: '分母是平均分的总份数，分子是取的份数。',
        funElement: '笑话：3/8说我取了3份，5/8说我取了5份！小游戏：涂色猜分数',
        gsapAnimations: ['[GSAP:staggerFrom|涂色格子依次填色|0.3s|点击触发|power2.out]', '[GSAP:scaleIn|分数标签弹出|0.4s|涂色完成|back.out(1.7)]'],
        images: ['[IMG:illustration|圆平均分8份涂3份|400x300|cartoon|png|几分之几]', '[IMG:illustration|分数分子分母标注|300x250|cartoon|png|分数读写]'],
        content: [
          { type: 'text', content: '几分之一是取1份，那取2份、3份呢？那就是几分之几啦！', animationType: 'reveal' },
          { type: 'example', content: '🎨 把一个圆平均分成8份，涂3份，涂色部分是3/8（八分之三）！', label: '几分之几', animationType: 'bounce' },
          { type: 'formula', content: '分数 = 分子/分母，分母：平均分的总份数，分子：取的份数', label: '分数结构', animationType: 'counter' },
          { type: 'text', content: '3/8读作八分之三，5/6读作六分之五。分子在上，分母在下，中间一条分数线。', animationType: 'typewriter' },
          { type: 'tip', content: '分母相同的情况下，分子越大，分数越大！比如3/8 > 1/8。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u7l2q1', type: 'choice', question: '一个长方形平均分成6份，涂了5份，涂色部分是几分之几？', options: ['1/6', '5/6', '6/5', '5/5'], answer: '5/6', hint: '分母是6，分子是涂了几份', explanation: '平均分6份，涂5份，涂色部分是5/6。' },
          { id: 'm3u7l2q2', type: 'fill', question: '3/5的分子是___，分母是___', answer: '3和5', hint: '上面是分子，下面是分母', explanation: '3/5的分子是3，分母是5。' },
          { id: 'm3u7l2q3', type: 'flashcard', question: '⚪平均分成4份，涂了2份（🌑🌑🌕🌕），说出分数！', answer: '2/4', hint: '平均分4份，涂了2份', explanation: '平均分4份，涂2份，是2/4。' },
          { id: 'm3u7l2q4', type: 'choice', question: '一个蛋糕平均分成8份，吃了3份，还剩几分之几？', options: ['3/8', '5/8', '8/5', '8/3'], answer: '5/8', hint: '8-3=5份没吃', explanation: '8-3=5份没吃，还剩5/8。' },
          { id: 'm3u7l2q5', type: 'fill', question: '4/7的分子是___，分母是___', answer: '4和7', hint: '上面是分子，下面是分母', explanation: '4/7的分子是4，分母是7。' },
          { id: 'm3u7l2q6', type: 'choice', question: '下面哪个分数最小？', options: ['3/7', '5/7', '1/7', '6/7'], answer: '1/7', hint: '分母相同，分子越小分数越小', explanation: '分母相同，分子越小分数越小，1/7最小。' },
          { id: 'm3u7l2q7', type: 'fill', question: '15÷3=___', answer: '5', hint: '[表内除法]（数学-表内除法-第2课）', explanation: '15÷3=5，三五十五。' }
        ]
      },
      {
        id: 'm3u7l3', title: '简单分数加减', order: 3,
        teachingMethod: 'CPA图示合并→图示拿走→符号计算',
        iDo: '家长用图示讲解：1/4+2/4=3/4，分母不变，分子相加。',
        weDo: '亲子一起用图示做同分母分数加减法，验证计算结果。',
        youDo: '孩子独立计算同分母分数的加减法。',
        parentTips: '同分母分数相加减，分母不变，分子相加减。',
        funElement: '小游戏：分数加减大闯关！歇后语：一分为二——辩证看问题',
        gsapAnimations: ['[GSAP:translateX|分数涂色部分合并|0.5s|点击触发|power2.inOut]', '[GSAP:scaleIn|计算结果弹出|0.4s|合并完成|back.out(1.7)]'],
        images: ['[IMG:illustration|1/4+2/4图示计算|400x300|cartoon|png|分数加法]', '[IMG:illustration|同分母分数加减规则|300x250|cartoon|png|加减规则]'],
        content: [
          { type: 'text', content: '同分母的分数也能做加减法哦！秘诀就是：分母不变，分子相加减。', animationType: 'reveal' },
          { type: 'example', content: '📊 1/4+2/4：分母不变还是4，分子1+2=3，结果是3/4！', label: '分数加法', animationType: 'bounce' },
          { type: 'formula', content: '同分母分数相加：分母不变，分子相加', label: '加法规则', animationType: 'counter' },
          { type: 'formula', content: '同分母分数相减：分母不变，分子相减', label: '减法规则', animationType: 'counter' },
          { type: 'example', content: '📊 3/8-1/8：分母不变还是8，分子3-1=2，结果是2/8！', label: '分数减法', animationType: 'bounce' },
          { type: 'tip', content: '只有分母相同的分数才能直接相加减！分母不同的情况以后再学。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u7l3q1', type: 'choice', question: '1/5+2/5=？', options: ['1/5', '2/5', '3/5', '3/10'], answer: '3/5', hint: '分母不变，分子1+2', explanation: '分母不变，分子1+2=3，所以1/5+2/5=3/5。' },
          { id: 'm3u7l3q2', type: 'fill', question: '3/8-1/8=___', answer: '2/8', hint: '分母不变，分子3-1', explanation: '分母不变，分子3-1=2，所以3/8-1/8=2/8。' },
          { id: 'm3u7l3q3', type: 'flashcard', question: '快速计算：2/7+3/7=？', answer: '5/7', hint: '分母不变，分子2+3', explanation: '分母不变，分子2+3=5，所以2/7+3/7=5/7。' },
          { id: 'm3u7l3q4', type: 'choice', question: '一块地的2/5种了蔬菜，1/5种了花，蔬菜和花一共占这块地的几分之几？', options: ['1/5', '2/5', '3/5', '4/5'], answer: '3/5', hint: '2/5+1/5=？', explanation: '2/5+1/5=3/5，一共占3/5。' },
          { id: 'm3u7l3q5', type: 'fill', question: '5/8-2/8=___', answer: '3/8', hint: '分母不变，分子5-2', explanation: '分母不变，分子5-2=3，5/8-2/8=3/8。' },
          { id: 'm3u7l3q6', type: 'choice', question: '一根绳子的3/7是红色，2/7是蓝色，其余是白色，白色占这根绳子的几分之几？', options: ['1/7', '2/7', '3/7', '5/7'], answer: '2/7', hint: '1-3/7-2/7=？', explanation: '7/7-3/7-2/7=2/7，白色占2/7。' },
          { id: 'm3u7l3q7', type: 'fill', question: '6×5=___', answer: '30', hint: '[乘法口诀]（数学-表内乘法-第3课）', explanation: '6×5=30，五六三十。' }
        ]
      },
      {
        id: 'm3u7l4', title: '分数的初步认识形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子对分数概念和加减法的掌握。',
        weDo: '亲子一起回顾本单元重点，讨论分数比较大小的方法。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '重点关注孩子是否理解"平均分"的前提，以及同分母分数加减法。',
        funElement: '闯关挑战：全部答对获得"分数小达人"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|分数小达人徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|分数知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对分数的初步认识的掌握情况吧！答对全部题目就能获得"分数小达人"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '分数=分子/分母，同分母加减：分母不变，分子相加减', label: '分数公式总结', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u7l4q1', type: 'choice', question: '把一个长方形平均分成5份，涂了3份，涂色部分是几分之几？', options: ['1/5', '2/5', '3/5', '5/3'], answer: '3/5', hint: '分母5，分子3', explanation: '平均分5份，涂3份，是3/5。' },
          { id: 'm3u7l4q2', type: 'fill', question: '2/9+4/9=___', answer: '6/9', hint: '分母不变，分子2+4', explanation: '分母不变，分子2+4=6，2/9+4/9=6/9。' },
          { id: 'm3u7l4q3', type: 'choice', question: '7/8-3/8=？', options: ['2/8', '4/8', '5/8', '10/8'], answer: '4/8', hint: '分母不变，分子7-3', explanation: '分母不变，分子7-3=4，7/8-3/8=4/8。' },
          { id: 'm3u7l4q4', type: 'fill', question: '1/6+3/6=___', answer: '4/6', hint: '分母不变，分子1+3', explanation: '分母不变，分子1+3=4，1/6+3/6=4/6。' },
          { id: 'm3u7l4q5', type: 'choice', question: '下面哪个分数最大？', options: ['1/4', '1/6', '1/3', '1/8'], answer: '1/3', hint: '分子相同，分母越小分数越大', explanation: '分子相同，分母越小分数越大，1/3最大。' },
          { id: 'm3u7l4q6', type: 'fill', question: '5/7-1/7=___', answer: '4/7', hint: '分母不变，分子5-1', explanation: '分母不变，分子5-1=4，5/7-1/7=4/7。' },
          { id: 'm3u7l4q7', type: 'choice', question: '【期中真题】一块巧克力，小明吃了2/8，小红吃了3/8，两人一共吃了这块巧克力的几分之几？', options: ['1/8', '5/8', '6/8', '1'], answer: '5/8', hint: '[平均分]（数学-除法的初步-第1课）2/8+3/8=？', explanation: '2/8+3/8=5/8，两人一共吃了5/8。' }
        ]
      },
      {
        id: 'm3u7l5', title: '分数的初步认识综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的分数问题，引导孩子综合运用分数知识解决。',
        weDo: '亲子一起分食物、分物品，用分数表示和计算。',
        youDo: '孩子独立解决生活中的分数综合问题。',
        parentTips: '鼓励孩子用画图的方式理解分数问题，养成验证习惯。',
        funElement: '生活数学：用分数知识解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|生活中的分数应用|400x300|cartoon|png|分数应用]', '[IMG:illustration|分食物示意图|300x250|cartoon|png|分食物]'],
        content: [
          { type: 'text', content: '分数在生活中经常出现！分蛋糕、分披萨、分地……让我们用分数知识来解决实际问题吧！', animationType: 'reveal' },
          { type: 'example', content: '🍕 一个披萨平均分成8块，小明吃了2块，小红吃了3块，两人一共吃了几分之几？2/8+3/8=5/8！', label: '分数应用', animationType: 'bounce' },
          { type: 'tip', content: '解决分数问题要确认是否"平均分"，再看分母和分子分别代表什么。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u7l5q1', type: 'choice', question: '一根彩带长1米，用去了3/5米，还剩多少米？', options: ['1/5米', '2/5米', '3/5米', '4/5米'], answer: '2/5米', hint: '1-3/5=？', explanation: '5/5-3/5=2/5，还剩2/5米。' },
          { id: 'm3u7l5q2', type: 'fill', question: '一块地的3/8种菜，2/8种花，种菜和种花一共占这块地的___', answer: '5/8', hint: '3/8+2/8=？', explanation: '3/8+2/8=5/8，一共占5/8。' },
          { id: 'm3u7l5q3', type: 'choice', question: '【期末真题】一根绳子长1米，第一次剪去2/7米，第二次剪去3/7米，两次一共剪去多少米？', options: ['1/7米', '5/7米', '6/7米', '1米'], answer: '5/7米', hint: '2/7+3/7=？', explanation: '2/7+3/7=5/7，两次一共剪去5/7米。' },
          { id: 'm3u7l5q4', type: 'fill', question: '一个蛋糕平均分成6份，吃了4份，还剩___分之一', answer: '六', hint: '6-4=2份，2/6=？', explanation: '还剩2份，2/6，即六分之二。' },
          { id: 'm3u7l5q5', type: 'choice', question: '小明看一本书，第一天看了全书的2/7，第二天看了全书的3/7，还剩全书的几分之几没看？', options: ['1/7', '2/7', '3/7', '5/7'], answer: '2/7', hint: '1-2/7-3/7=？', explanation: '7/7-2/7-3/7=2/7，还剩2/7没看。' },
          { id: 'm3u7l5q6', type: 'fill', question: '一瓶果汁，上午喝了3/8，下午比上午少喝了1/8，下午喝了___', answer: '2/8', hint: '3/8-1/8=？', explanation: '3/8-1/8=2/8，下午喝了2/8。' },
          { id: 'm3u7l5q7', type: 'choice', question: '一个西瓜平均分成10块，小明吃了3块，小红吃了2块，还剩几分之几？', options: ['3/10', '5/10', '2/10', '7/10'], answer: '5/10', hint: '[平均分]（数学-除法的初步-第1课）10-3-2=5块，5/10', explanation: '还剩10-3-2=5块，5/10。' }
        ]
      }
    ]
  },
  {
    id: 'm3u8', title: '数学广角-集合', subtitle: '认识集合思想，学会用韦恩图', order: 8,
    lessons: [
      {
        id: 'm3u8l1', title: '集合思想', order: 1,
        teachingMethod: 'CPA实物分类→图示圈圈→概念理解',
        iDo: '家长把水果和红色物品分别圈起来，讲解集合的概念。',
        weDo: '亲子一起给物品分类画圈，说出每个圈里的共同特征。',
        youDo: '孩子独立对物品进行分类，画出集合圈。',
        parentTips: '集合就是把有共同特征的物品放在一起，用圈圈起来。',
        funElement: '笑话：圈圈说我把一样的东西圈在一起！小游戏：圈圈分类师',
        gsapAnimations: ['[GSAP:drawSVG|集合圈画出动画|0.6s|点击触发|power2.out]', '[GSAP:translateX|物品飞入对应圈圈|0.4s|圈圈画完|power2.inOut]'],
        images: ['[IMG:illustration|物品分类画圈图|400x300|cartoon|png|集合思想]', '[IMG:illustration|集合圈分类示例|300x250|cartoon|png|分类圈圈]'],
        content: [
          { type: 'text', content: '集合就是把有共同特征的东西放在一起，用圈圈起来，这就是集合思想！', animationType: 'reveal' },
          { type: 'example', content: '⭕ 把水果圈在一起：🍎🍊🍌🍇，把红色物品圈在一起：🍎🌹❤️，苹果同时在两个圈里！', label: '集合分类', animationType: 'bounce' },
          { type: 'formula', content: '集合：把有共同特征的物品放在一起，用圈圈表示', label: '集合概念', animationType: 'typewriter' },
          { type: 'text', content: '一个物品可以同时属于不同的集合，比如苹果既是水果又是红色物品。', animationType: 'typewriter' },
          { type: 'tip', content: '分类时要确定标准，同一类物品必须有相同的特征，不同类的物品特征不同。', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '集合圈画出的动画，物品飞入对应的圈圈', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u8l1q1', type: 'choice', question: '把会飞的动物圈在一起，下面哪个不应该在圈里？', options: ['小鸟', '蝴蝶', '小鱼', '蜻蜓'], answer: '小鱼', hint: '哪个不会飞？', explanation: '小鱼不会飞，不应该在"会飞的动物"这个集合圈里。' },
          { id: 'm3u8l1q2', type: 'fill', question: '把{2,4,6,8,10}这个集合的共同特征是：都是___数', answer: '偶', acceptableAnswers: ['双'], hint: '这些数有什么共同点？', explanation: '2、4、6、8、10都是偶数，这是它们的共同特征。' },
          { id: 'm3u8l1q3', type: 'flashcard', question: '看一组物品，快速说出它们的共同特征！', answer: '都是圆形', hint: '看看形状', explanation: '这些物品都是圆形的，这是它们的共同特征。' },
          { id: 'm3u8l1q4', type: 'choice', question: '把{3,6,9,12,15}这个集合的共同特征是什么？', options: ['都是偶数', '都是3的倍数', '都是一位数', '都是奇数'], answer: '都是3的倍数', hint: '这些数有什么共同点？', explanation: '3、6、9、12、15都是3的倍数。' },
          { id: 'm3u8l1q5', type: 'fill', question: '把{苹果，香蕉，橘子}这个集合的共同特征是：都是___', answer: '水果', hint: '它们属于什么类别？', explanation: '苹果、香蕉、橘子都是水果。' },
          { id: 'm3u8l1q6', type: 'choice', question: '一个物品同时属于"红色物品"和"水果"两个集合，下面哪个符合？', options: ['蓝莓', '红苹果', '红辣椒', '红玫瑰'], answer: '红苹果', hint: '既是红色又是水果', explanation: '红苹果既是红色物品又是水果，同时属于两个集合。' },
          { id: 'm3u8l1q7', type: 'fill', question: '3×4=___', answer: '12', hint: '[乘法口诀]（数学-表内乘法-第2课）', explanation: '3×4=12，三四十二。' }
        ]
      },
      {
        id: 'm3u8l2', title: '韦恩图', order: 2,
        teachingMethod: 'I Do→We Do→You Do，重叠圈圈法',
        iDo: '家长画两个重叠的圈：一个圈"喜欢吃苹果"，一个圈"喜欢吃香蕉"，重叠部分是"两个都喜欢吃"。',
        weDo: '亲子一起画韦恩图，把同学按爱好分类填入图中。',
        youDo: '孩子独立画韦恩图解决重叠分类问题。',
        parentTips: '韦恩图的重叠部分表示同时属于两个集合的元素。',
        funElement: '笑话：重叠部分说——我两个圈都待过！小游戏：韦恩图画师',
        gsapAnimations: ['[GSAP:drawSVG|两个圈圈重叠动画|0.8s|页面加载|power2.out]', '[GSAP:scaleIn|重叠区域高亮|0.5s|重叠完成|back.out(1.7)]'],
        images: ['[IMG:illustration|韦恩图苹果香蕉重叠|400x300|cartoon|png|韦恩图]', '[IMG:illustration|重叠部分标注图|300x250|cartoon|png|重叠区域]'],
        content: [
          { type: 'text', content: '当两个集合有共同的元素时，我们可以用两个重叠的圈来表示，这就是韦恩图！', animationType: 'reveal' },
          { type: 'example', content: '⭕⭕ 喜欢唱歌8人，喜欢跳舞6人，两个都喜欢3人。重叠部分就是3人！', label: '韦恩图', animationType: 'bounce' },
          { type: 'formula', content: '总人数 = A圈人数 + B圈人数 - 重叠人数', label: '重叠公式', animationType: 'counter' },
          { type: 'text', content: '重叠部分的人被两个圈都算了一次，所以要把多算的一次减掉。', animationType: 'typewriter' },
          { type: 'tip', content: '韦恩图的关键是找出重叠部分，重叠的人被算了两次，要减去一次！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '两个圈圈重叠的动画，重叠区域高亮显示', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u8l2q1', type: 'choice', question: '喜欢唱歌8人，喜欢跳舞6人，两个都喜欢3人，一共有几人？', options: ['14人', '11人', '17人', '8人'], answer: '11人', hint: '8+6-3=？', explanation: '8+6-3=11人，重叠的3人被算了两次要减去1次。' },
          { id: 'm3u8l2q2', type: 'fill', question: '参加数学组12人，参加语文组10人，两组都参加4人，一共有___人', answer: '18', hint: '12+10-4=？', explanation: '12+10-4=18人。' },
          { id: 'm3u8l2q3', type: 'flashcard', question: '喜欢唱歌8人，两个都喜欢3人，只喜欢唱歌的有几人？', answer: '5', hint: '8-3=？', explanation: '只喜欢唱歌=8-3=5人。' },
          { id: 'm3u8l2q4', type: 'choice', question: '参加美术组15人，参加音乐组12人，两组都参加5人，一共有多少人？', options: ['22人', '27人', '32人', '17人'], answer: '22人', hint: '15+12-5=？', explanation: '15+12-5=22人。' },
          { id: 'm3u8l2q5', type: 'fill', question: '喜欢跑步20人，喜欢跳绳18人，两个都喜欢8人，一共有___人', answer: '30', hint: '20+18-8=？', explanation: '20+18-8=30人。' },
          { id: 'm3u8l2q6', type: 'choice', question: '班上45人，喜欢语文28人，喜欢数学32人，每人至少喜欢一种，两种都喜欢的有几人？', options: ['5人', '10人', '15人', '20人'], answer: '15人', hint: '28+32-45=？', explanation: '28+32-45=15人，两种都喜欢的有15人。' },
          { id: 'm3u8l2q7', type: 'fill', question: '48÷6=___', answer: '8', hint: '[表内除法]（数学-表内除法-第3课）', explanation: '48÷6=8，六八四十八。' }
        ]
      },
      {
        id: 'm3u8l3', title: '综合应用', order: 3,
        teachingMethod: '情境化练习，生活问题驱动',
        iDo: '家长出综合题：班上25人，喜欢运动15人，喜欢音乐18人，每人至少喜欢一种，两种都喜欢的有几人？',
        weDo: '亲子一起用韦恩图解决生活中的重叠问题。',
        youDo: '孩子独立用韦恩图解决综合应用题。',
        parentTips: '重叠问题公式：A+B-重叠=总数，所以重叠=A+B-总数。',
        funElement: '小游戏：重叠问题大挑战！歇后语：一石二鸟——一举两得',
        gsapAnimations: ['[GSAP:scaleIn|应用题场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|班级爱好重叠应用题|400x300|cartoon|png|集合应用]', '[IMG:illustration|韦恩图解题步骤|300x250|cartoon|png|解题方法]'],
        content: [
          { type: 'text', content: '集合和韦恩图在生活中有很多用处，让我们来挑战综合应用题吧！', animationType: 'reveal' },
          { type: 'example', content: '🏫 班上25人，喜欢运动15人，喜欢音乐18人，每人至少喜欢一种，两种都喜欢的有几人？15+18-25=8人！', label: '综合应用', animationType: 'bounce' },
          { type: 'formula', content: '重叠人数 = A组人数 + B组人数 - 总人数', label: '求重叠公式', animationType: 'counter' },
          { type: 'text', content: '当知道总数和两个集合的人数时，可以用公式直接求出重叠部分的人数。', animationType: 'typewriter' },
          { type: 'tip', content: '如果A+B等于总数，说明没有重叠；如果A+B小于总数，说明题目数据有问题！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '班级场景展开的动画，解题成功后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u8l3q1', type: 'choice', question: '班上30人，参加美术组16人，参加音乐组14人，每人至少参加一组，两组都参加几人？', options: ['0人', '2人', '4人', '6人'], answer: '0人', hint: '16+14=30，和总数比呢？', explanation: '16+14=30，正好等于总人数，说明没有重叠，两组都参加0人。' },
          { id: 'm3u8l3q2', type: 'fill', question: '40人中，喜欢猫22人，喜欢狗25人，两种都喜欢的有___人', answer: '7', hint: '22+25-40=？', explanation: '22+25-40=7人，两种都喜欢的有7人。' },
          { id: 'm3u8l3q3', type: 'flashcard', question: '快速计算：35人中喜欢红色18人喜欢蓝色20人，两种都喜欢的有几人？', answer: '3', hint: '18+20-35=？', explanation: '18+20-35=3人，两种都喜欢的有3人。' },
          { id: 'm3u8l3q4', type: 'choice', question: '学校组织兴趣小组，参加书法组25人，参加绘画组20人，两个都参加8人，只参加书法组的有多少人？', options: ['12人', '17人', '20人', '25人'], answer: '17人', hint: '25-8=？', explanation: '只参加书法组=25-8=17人。' },
          { id: 'm3u8l3q5', type: 'fill', question: '喜欢看书30人，喜欢运动25人，都喜欢10人，一共有___人', answer: '45', hint: '30+25-10=？', explanation: '30+25-10=45人。' },
          { id: 'm3u8l3q6', type: 'choice', question: '三年级有100人，参加科技组45人，参加体育组52人，每人至少参加一组，两组都参加的有多少人？只参加科技组的有多少人？', options: ['7人，38人', '3人，42人', '7人，45人', '3人，38人'], answer: '7人，38人', hint: '重叠=45+52-100，只科技=45-重叠', explanation: '重叠=45+52-100=7人，只科技=45-7=38人。' },
          { id: 'm3u8l3q7', type: 'fill', question: '5×9=___', answer: '45', hint: '[乘法口诀]（数学-表内乘法-第4课）', explanation: '5×9=45，五九四十五。' }
        ]
      },
      {
        id: 'm3u8l4', title: '数学广角-集合形成性评价', order: 4,
        teachingMethod: '形成性评价',
        iDo: '家长逐一出题，观察孩子对集合概念和韦恩图的掌握。',
        weDo: '亲子一起回顾本单元重点，讨论重叠问题的解题方法。',
        youDo: '孩子独立完成所有评价题目，检验学习效果。',
        parentTips: '重点关注孩子是否理解重叠部分被算了两次需要减去一次。',
        funElement: '闯关挑战：全部答对获得"集合小达人"徽章！',
        gsapAnimations: ['[GSAP:scaleIn|闯关开始标签弹出|0.5s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|全对庆祝特效|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|集合小达人徽章|400x300|cartoon|png|形成性评价]', '[IMG:illustration|集合知识总结图|300x250|cartoon|png|知识总结]'],
        content: [
          { type: 'text', content: '让我们来检验一下你对集合的掌握情况吧！答对全部题目就能获得"集合小达人"徽章！', animationType: 'reveal' },
          { type: 'formula', content: '总人数=A+B-重叠，重叠=A+B-总人数', label: '重叠公式总结', animationType: 'counter' },
          { type: 'animation', content: '闯关开始标签弹出，全对后庆祝特效', animationType: 'cpaTransition' },
        ],
        practiceQuestions: [
          { id: 'm3u8l4q1', type: 'choice', question: '喜欢唱歌10人，喜欢跳舞8人，两个都喜欢4人，一共有多少人？', options: ['14人', '18人', '22人', '12人'], answer: '14人', hint: '10+8-4=？', explanation: '10+8-4=14人。' },
          { id: 'm3u8l4q2', type: 'fill', question: '参加书法组18人，参加绘画组15人，两组都参加6人，一共有___人', answer: '27', hint: '18+15-6=？', explanation: '18+15-6=27人。' },
          { id: 'm3u8l4q3', type: 'choice', question: '班上40人，喜欢语文22人，喜欢数学24人，每人至少喜欢一种，两种都喜欢的有几人？', options: ['2人', '4人', '6人', '8人'], answer: '6人', hint: '22+24-40=？', explanation: '22+24-40=6人。' },
          { id: 'm3u8l4q4', type: 'fill', question: '喜欢红色16人，喜欢蓝色14人，都喜欢5人，只喜欢红色的有___人', answer: '11', hint: '16-5=？', explanation: '只喜欢红色=16-5=11人。' },
          { id: 'm3u8l4q5', type: 'choice', question: '参加合唱团20人，参加舞蹈队16人，两个都参加8人，只参加舞蹈队的有多少人？', options: ['4人', '8人', '12人', '16人'], answer: '8人', hint: '16-8=？', explanation: '只参加舞蹈队=16-8=8人。' },
          { id: 'm3u8l4q6', type: 'fill', question: '喜欢篮球25人，喜欢足球30人，都喜欢12人，一共有___人', answer: '43', hint: '25+30-12=？', explanation: '25+30-12=43人。' },
          { id: 'm3u8l4q7', type: 'choice', question: '【期中真题】三（1）班有42人，参加数学竞赛的有28人，参加作文竞赛的有25人，每人至少参加一项，两项都参加的有多少人？', options: ['7人', '11人', '14人', '18人'], answer: '11人', hint: '[数据收集]（数学-数据收集整理-第1课）28+25-42=？', explanation: '28+25-42=11人，两项都参加的有11人。' }
        ]
      },
      {
        id: 'm3u8l5', title: '数学广角-集合综合应用', order: 5,
        teachingMethod: '综合应用',
        iDo: '家长出示生活中的集合问题，引导孩子综合运用集合知识解决。',
        weDo: '亲子一起调查家人的兴趣爱好，用韦恩图分析重叠情况。',
        youDo: '孩子独立解决生活中的集合综合问题。',
        parentTips: '鼓励孩子画韦恩图帮助分析，注意"每人至少一种"和"可以不参加"的区别。',
        funElement: '生活数学：用集合知识解决生活中的问题！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|生活中的集合应用|400x300|cartoon|png|集合应用]', '[IMG:illustration|兴趣爱好韦恩图|300x250|cartoon|png|韦恩图]'],
        content: [
          { type: 'text', content: '集合和韦恩图在生活中很有用！调查兴趣、统计人数、分析重叠……让我们来挑战吧！', animationType: 'reveal' },
          { type: 'example', content: '📊 学校调查：喜欢看书35人，喜欢运动28人，都喜欢12人，一共有多少人？35+28-12=51人！', label: '集合应用', animationType: 'bounce' },
          { type: 'tip', content: '注意题目条件："每人至少一种"和"可以不参加"的计算方法不同。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm3u8l5q1', type: 'choice', question: '学校调查了50名同学，喜欢看动画片的有32人，喜欢看纪录片的有24人，两种都喜欢的有8人，两种都不喜欢的有几人？', options: ['2人', '6人', '8人', '10人'], answer: '2人', hint: '先求至少喜欢一种的人数：32+24-8=48，50-48=？', explanation: '至少喜欢一种=32+24-8=48人，都不喜欢=50-48=2人。' },
          { id: 'm3u8l5q2', type: 'fill', question: '喜欢游泳22人，喜欢滑冰18人，都喜欢6人，一共有___人', answer: '34', hint: '22+18-6=？', explanation: '22+18-6=34人。' },
          { id: 'm3u8l5q3', type: 'choice', question: '【期末真题】三（2）班有48人，参加数学兴趣小组的有26人，参加英语兴趣小组的有22人，两个小组都没参加的有10人，两个小组都参加的有多少人？', options: ['8人', '10人', '12人', '14人'], answer: '10人', hint: '至少参加一个=48-10=38，26+22-38=？', explanation: '至少参加一个=48-10=38人，都参加=26+22-38=10人。' },
          { id: 'm3u8l5q4', type: 'fill', question: '喜欢红色20人，喜欢蓝色15人，都喜欢8人，只喜欢蓝色的有___人', answer: '7', hint: '15-8=？', explanation: '只喜欢蓝色=15-8=7人。' },
          { id: 'm3u8l5q5', type: 'choice', question: '学校运动会，参加跑步的有36人，参加跳远的有28人，两个都参加的有12人，只参加跑步的有多少人？', options: ['16人', '24人', '28人', '36人'], answer: '24人', hint: '36-12=？', explanation: '只参加跑步=36-12=24人。' },
          { id: 'm3u8l5q6', type: 'fill', question: '全班45人，喜欢语文25人，喜欢数学30人，每人至少喜欢一种，两种都喜欢的有___人', answer: '10', hint: '25+30-45=？', explanation: '25+30-45=10人，两种都喜欢的有10人。' },
          { id: 'm3u8l5q7', type: 'choice', question: '小明调查了班上同学爱吃的水果，爱吃苹果的有18人，爱吃香蕉的有15人，两种都爱吃的有6人，两种都不爱吃的有8人，班上一共有多少人？', options: ['33人', '35人', '41人', '47人'], answer: '35人', hint: '[数据收集]（数学-数据收集整理-第1课）至少爱吃一种=18+15-6=27，总人数=27+8=？', explanation: '至少爱吃一种=18+15-6=27人，总人数=27+8=35人。' }
        ]
      }
    ]
  }
]
