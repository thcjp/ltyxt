import type { Unit } from '@/types'

export const chineseGrade6: Unit[] = [
  // ==================== 第一单元：议论文入门——观点与论据 ====================
  {
    id: 'c6u1',
    title: '议论文入门——观点与论据',
    subtitle: '观点与论据',
    order: 1,
    lessons: [
      {
        id: 'c6u1l1',
        title: '议论文特点——观点与理由',
        order: 1,
        teachingMethod: '支架式：议论三角形',
        content: [
          { type: 'text', content: '我们平时说话写文章，有时是在"讲故事"——那是记叙文；有时是在"说明事物"——那是说明文；还有时是在"讲道理、说服别人"——这就是议论文！议论文的核心是提出观点、摆出理由、得出结论。', animationType: 'bounce' },
          { type: 'example', content: '议论三角形：\n顶角——观点（论点）：我认为小学生应该多读课外书\n左下角——理由（论据）：读书能开阔眼界、提高写作能力\n右下角——结论：所以，每天坚持读半小时课外书很有必要', label: '议论三角形', animationType: 'bounce' },
          { type: 'tip', content: '议论文三要素：①论点——作者的主张和看法；②论据——支撑论点的理由和证据；③论证——用论据证明论点的过程。三者缺一不可。', label: '议论文三要素', animationType: 'pulse' },
          { type: 'dialogue', content: '老师：甜甜，你觉得小学生该不该带手机上学？\n甜甜：我觉得不应该！\n老师：为什么呢？\n甜甜：因为上课容易分心，还会影响视力。\n老师：很好！"不应该带"是论点，"分心""影响视力"是论据，把它们连起来就是一篇小议论文！', label: '师生对话', animationType: 'reveal' },
          { type: 'animation', content: '议论三角形逐步绘制：先画出三角形框架，顶角标注"论点"，左下角标注"论据"，右下角标注"结论"，三个要素用连线串联', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '议论三角形',
              shapeDrawConfig: {
                shape: 'triangle',
                labels: ['论点（观点）', '论据（理由）', '结论（总结）'],
              },
              ttsNarration: '议论文就像一个三角形：顶角是论点，左下角是论据，右下角是结论，三点支撑起一篇完整的议论。',
            },
          },
          { type: 'example', content: '议论文与记叙文的区别：\n记叙文：以事感人——那天下雨下得很大，我淋成了落汤鸡\n议论文：以理服人——下雨天应该带伞，因为淋雨会感冒，影响学习', label: '文体对比', animationType: 'bounce' },
          { type: 'tip', content: '口诀：议论文，讲道理，论点论据加论证；论点明确方向清，论据充分才有理，结论自然水到成。', label: '巧记口诀', animationType: 'pulse' },
        ],
        iDo: '家长画一个"观点+理由+结论"的议论三角形，示范如何用三角形组织一篇小议论文，让孩子看到议论的结构。',
        weDo: '亲子一起就"小学生要不要做家务"这个话题，合作画议论三角形，讨论观点和论据。',
        youDo: '孩子独立就"课间该不该玩手机"画一个议论三角形，写出论点、论据和结论。',
        parentTips: '共学四步（家长当陪练，不当老师）：①对话出题：家长问“议论文三要素是什么？”②孩子应答：“论点、论据、论证。”③答错引导：若孩子说不全，家长用三角形比喻——论点在顶端(你的主张)，论据在底部(理由证据)，论证是把论据顶上去证明论点的过程。④快速出题：家长说一句“读书有用”，让孩子补一个论据。',
        funElement: '辩论小游戏：家庭辩论赛！选一个话题（如"周末该不该睡懒觉"），一人当正方一人当反方，每人说出观点和两个理由，看谁说得更有理！',
        gsapAnimations: [
          'GSAP:shapeDraw|议论三角形逐步绘制|1.5s|点击播放|power2.out',
          'GSAP:highlight|议论三要素关键词高亮|0.5s|点击要素|power2.out|repeat:2',
        ],
        images: [
          'IMG:illustration|议论三角形图|500x300|教学风|png|三角形结构',
          'IMG:illustration|议论文与记叙文对比|500x300|教学风|png|文体对比',
        ],
        practiceQuestions: [
          {
            id: 'c6u1l1q1',
            type: 'choice',
            question: '议论文的核心目的是什么？',
            options: ['讲故事感人', '讲道理说服别人', '说明事物的特征'],
            answer: '讲道理说服别人',
            hint: '想想议论文和其他文体的区别',
            explanation: '记叙文以事感人，说明文以知启人，议论文以理服人——讲道理、说服别人才是议论文的核心目的。'
          },
          {
            id: 'c6u1l1q2',
            type: 'choice',
            question: '议论文三要素不包括下列哪一项？',
            options: ['论点', '论据', '情节'],
            answer: '情节',
            hint: '情节是哪种文体的要素',
            explanation: '议论文三要素是论点、论据、论证。情节是小说和记叙文的要素，不属于议论文。'
          },
          {
            id: 'c6u1l1q3',
            type: 'fill',
            question: '议论三角形的顶角代表的是___（填"论点"或"论据"）',
            answer: '论点',
            hint: '顶端统领全局的是什么',
            explanation: '议论三角形顶角是论点（观点），它在顶端统领全篇；左下角是论据，右下角是结论。'
          },
          {
            id: 'c6u1l1q4',
            type: 'choice',
            question: '"读书能开阔眼界，所以我们应该多读书。"这句话中，"我们应该多读书"是？',
            options: ['论题', '论据', '结论'],
            answer: '结论',
            hint: '看看"所以"后面是什么',
            explanation: '"所以"引导的是由论据推导出的结论。"读书能开阔眼界"是论据，"我们应该多读书"是由此得出的结论。'
          },
          {
            id: 'c6u1l1q5',
            type: 'choice',
            question: '【期末真题】下列哪个句子属于议论文的表达方式？',
            options: ['那天下雨了，我淋成了落汤鸡', '下雨天应该带伞，因为淋雨会感冒', '雨滴打在窗户上，发出嗒嗒的声音'],
            answer: '下雨天应该带伞，因为淋雨会感冒',
            hint: '议论文是讲道理的',
            explanation: '"下雨天应该带伞，因为淋雨会感冒"提出了观点并给出理由，是议论文表达。第一句是记叙，第三句是描写。这是期末常考题！'
          },
          {
            id: 'c6u1l1q6',
            type: 'drag',
            question: '把议论三要素拖到对应位置：论点、论据、结论',
            answer: '顶角-论点,左下角-论据,右下角-结论',
            hint: '顶角统领，两底角支撑',
            explanation: '议论三角形：顶角是论点（统领），左下角是论据（支撑），右下角是结论（总结）。'
          },
          {
            id: 'c6u1l1q7',
            type: 'fill',
            question: '记叙文的六要素是时间、地点、人物、起因、经过和___',
            answer: '结果',
            hint: '[记叙文六要素]（五年级语文-第2单元）',
            explanation: '记叙文六要素：时间、地点、人物、起因、经过、结果。议论文要学好，先复习记叙文的要素。'
          }
        ]
      },
      {
        id: 'c6u1l2',
        title: '找观点——论点在哪里',
        order: 2,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '读一篇议论文，首先要找到作者的论点。论点就是作者对某个问题的主张和看法。论点通常藏在哪里呢？标题、开头或结尾是最常见的"藏身之处"。', animationType: 'bounce' },
          { type: 'example', content: '论点常见位置：\n①标题点题——《诚实最可贵》标题就是论点\n②开头亮明——文章第一段直接提出"我认为……"\n③结尾总结——结尾用"总之""综上所述"引出论点', label: '论点三位置', animationType: 'bounce' },
          { type: 'tip', content: '找论点小窍门：留意"我认为""应该""必须""总之""可见"等标志性词语，论点常常紧跟在这些词后面。', label: '找论点窍门', animationType: 'pulse' },
          { type: 'example', content: '示例：\n"读书的好处很多。首先，读书能增长知识；其次，读书能提高写作能力。总之，读书是一种好习惯，我们都应该养成读书的习惯。"\n→论点在结尾："读书是一种好习惯，我们都应该养成读书的习惯。"', label: '论点示例', animationType: 'bounce' },
          { type: 'animation', content: '论点句子高亮动画：文章中标题、开头、结尾的论点句子依次高亮闪烁，标注出论点位置', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '论点在哪里',
              sequenceConfig: {
                items: ['标题：诚实最可贵', '开头：我认为……', '结尾：总之……'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '论点常常藏在标题、开头或结尾，留意标志性词语就能找到它！',
            },
          },
          { type: 'tip', content: '注意区分论点和论据：论点是"我认为……"（主张），论据是"因为……"（理由）。论点是结果，论据是支撑理由。', label: '论点与论据区分', animationType: 'pulse' },
        ],
        iDo: '家长示范找论点：拿一篇短文，分别在标题、开头、结尾处标注论点，让孩子看到论点的常见位置。',
        weDo: '亲子一起读一篇议论文，一起找论点，互相检查找得对不对。',
        youDo: '孩子独立阅读一篇议论文，找出论点并标注其位置。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“找论点要留意哪些标志性词语？”②孩子应答：“我认为”“总之”“可见”“综上所述”。③答错引导：若孩子答不出，家长读一段报纸评论，让孩子圈出“我认为”后面的句子，强调论点常在标题、开头或结尾。④快速出题：家长说标志词“可见”，让孩子接一句论点。',
        funElement: '找茬游戏：论点捉迷藏！读一段文字，看谁能最快找到藏起来的论点，找到了就大喊"抓到你啦"！',
        gsapAnimations: [
          'GSAP:highlight|论点句子高亮|0.5s|点击|power2.out|repeat:2',
          'GSAP:sequence|论点三位置依次出现|1s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|论点位置标注图|500x300|教学风|png|三处位置',
        ],
        practiceQuestions: [
          {
            id: 'c6u1l2q1',
            type: 'choice',
            question: '论点最常出现在文章的哪些位置？',
            options: ['标题、开头或结尾', '中间段落', '每个自然段'],
            answer: '标题、开头或结尾',
            hint: '回忆论点的三个常见位置',
            explanation: '论点最常出现在标题（点题）、开头（亮明）或结尾（总结）三个位置。'
          },
          {
            id: 'c6u1l2q2',
            type: 'choice',
            question: '下列哪个词语常用来引出论点？',
            options: ['因为', '我认为', '例如'],
            answer: '我认为',
            hint: '哪个词表示提出主张',
            explanation: '"我认为"常用来亮明论点（主张）。"因为"引出论据，"例如"引出举例。'
          },
          {
            id: 'c6u1l2q3',
            type: 'fill',
            question: '"总之，我们应该珍惜时间。"这句话中，论点紧跟在"___"这个标志性词语后面',
            answer: '总之',
            hint: '哪个词引出了总结性主张',
            explanation: '"总之"是引出结论性论点的标志性词语，论点"我们应该珍惜时间"紧跟其后。'
          },
          {
            id: 'c6u1l2q4',
            type: 'choice',
            question: '"因为读书能增长知识"这句话是论点还是论据？',
            options: ['论点', '论据', '论证'],
            answer: '论据',
            hint: '看看是主张还是理由',
            explanation: '"因为"引出的是理由，"读书能增长知识"是用来支撑论点的论据，不是论点本身。'
          },
          {
            id: 'c6u1l2q5',
            type: 'choice',
            question: '【期末真题】读句子："运动有益健康。跑步能增强心肺功能，游泳能锻炼全身。可见，我们应该坚持运动。"论点在哪里？',
            options: ['运动有益健康', '跑步能增强心肺功能', '我们应该坚持运动'],
            answer: '我们应该坚持运动',
            hint: '论点是作者的主张，常在"可见"之后',
            explanation: '"可见"引出结论性论点"我们应该坚持运动"。"运动有益健康"是开头引入，"跑步能增强心肺功能"是论据。这是期末常考题！'
          },
          {
            id: 'c6u1l2q6',
            type: 'drag',
            question: '把句子拖到正确类别：论点 / 论据\n"我认为诚实最重要" "因为撒谎会失去信任" "例如列宁打碎花瓶主动承认"',
            answer: '论点-我认为诚实最重要,论据-因为撒谎会失去信任,论据-例如列宁打碎花瓶主动承认',
            hint: '主张是论点，理由和例子是论据',
            explanation: '"我认为诚实最重要"是论点（主张），其余两句分别用"因为""例如"引出，都是论据。'
          },
          {
            id: 'c6u1l2q7',
            type: 'fill',
            question: '“弯弯的月亮像小船”用了___的修辞手法',
            answer: '比喻',
            hint: '[修辞手法]（五年级语文-第1单元）',
            explanation: '“像”是比喻的标志，把月亮比作小船，是比喻修辞。议论文也常用修辞增强说服力。'
          }
        ]
      },
      {
        id: 'c6u1l3',
        title: '找论据——事实与道理',
        order: 3,
        teachingMethod: '对比辨析法',
        content: [
          { type: 'text', content: '论点需要论据来支撑。论据分为两大类：事实论据和道理论据。事实论据用真实的事例、数据说话，道理论据用名言、原理、公理说理。两者结合，议论才更有说服力。', animationType: 'bounce' },
          { type: 'example', content: '事实论据（用事实说话）：\n①具体事例：爱迪生发明电灯试验了上千次\n②统计数据：调查显示80%的优秀学生有阅读习惯\n③历史事实：司马迁忍辱写成《史记》', label: '事实论据', animationType: 'bounce' },
          { type: 'example', content: '道理论据（用道理说话）：\n①名言警句：周恩来"为中华之崛起而读书"\n②科学原理：水往低处流是自然规律\n③公理常识：团结就是力量', label: '道理论据', animationType: 'bounce' },
          { type: 'tip', content: '区分窍门：事实论据是"发生过的事"（看得见摸得着），道理论据是"公认的理"（名言原理）。事实让人信服，道理让人明白。', label: '论据区分窍门', animationType: 'pulse' },
          { type: 'animation', content: '事实论据与道理论据对比动画：左边展示事实论据（事例、数据），右边展示道理论据（名言、原理），一一对应比较', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '事实论据 vs 道理论据',
              compareConfig: {
                leftItems: ['具体事例', '统计数据', '历史事实'],
                rightItems: ['名言警句', '科学原理', '公理常识'],
                result: 'equal',
                resultText: '两类论据各有千秋，结合使用最有说服力',
              },
              ttsNarration: '事实论据用事例和数据说话，道理论据用名言和原理说理，两者结合议论更有力！',
            },
          },
          { type: 'tip', content: '好论据的标准：①真实准确——不能编造；②典型充分——有代表性；③紧扣论点——与论点密切相关。', label: '好论据标准', animationType: 'pulse' },
        ],
        iDo: '家长对比事实论据和道理论据，举出两类论据的例子，让孩子看清两者的区别。',
        weDo: '亲子一起辨析：给出几个论据，一起判断是事实论据还是道理论据。',
        youDo: '孩子独立找论据：为一个论点分别找出一个事实论据和一个道理论据。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“论据分哪两类？各举一例。”②孩子应答：“事实论据(事例数据)和道理论据(名言原理)。”③答错引导：若孩子混淆，家长举“鲁迅说…”是道理、“调查显示70%…”是事实，让孩子判断分类。④快速出题：家长说一句论据，孩子判断是事实还是道理。',
        funElement: '论据大侦探：给一个论点，看谁能在3分钟内找到最多的事实论据和道理论据，找得又多又准就是"论据大侦探"！',
        gsapAnimations: [
          'GSAP:compare|事实vs道理论据对比|0.8s|页面加载|power2.out',
          'GSAP:highlight|论据关键词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|论据对比图|500x300|教学风|png|两种论据',
        ],
        practiceQuestions: [
          {
            id: 'c6u1l3q1',
            type: 'choice',
            question: '"爱迪生发明电灯试验了上千次"属于哪种论据？',
            options: ['事实论据', '道理论据', '既不是事实也不是道理'],
            answer: '事实论据',
            hint: '这是发生过的事还是公认的理',
            explanation: '爱迪生试验上千次是真实发生过的具体事例，属于事实论据。'
          },
          {
            id: 'c6u1l3q2',
            type: 'choice',
            question: '下列哪一项是道理论据？',
            options: ['调查显示80%的学生爱读书', '孔子说"学而时习之"', '司马迁写成《史记》'],
            answer: '孔子说"学而时习之"',
            hint: '名言警句属于哪类论据',
            explanation: '孔子的话是名言警句，属于道理论据。调查数据和史实都属于事实论据。'
          },
          {
            id: 'c6u1l3q3',
            type: 'fill',
            question: '论据分为事实论据和___论据两大类',
            answer: '道理',
            hint: '用名言原理说理的是哪类',
            explanation: '论据分为事实论据（事例、数据）和道理论据（名言、原理）两大类。'
          },
          {
            id: 'c6u1l3q4',
            type: 'choice',
            question: '为论点"团结就是力量"找论据，下列最合适的是？',
            options: ['我一个人也能完成任务', '蚂蚁齐心协力搬走大食物', '团结这个词有六个笔画'],
            answer: '蚂蚁齐心协力搬走大食物',
            hint: '论据要紧扣论点且有说服力',
            explanation: '"蚂蚁齐心协力搬走大食物"用具体事例证明团结的力量，紧扣论点且典型，是合适的事实论据。'
          },
          {
            id: 'c6u1l3q5',
            type: 'choice',
            question: '【期末真题】"据教育部统计，全国小学生近视率达40%"这句话作为论据，属于？',
            options: ['事实论据（数据）', '道理论据（名言）', '道理论据（原理）'],
            answer: '事实论据（数据）',
            hint: '统计数据属于哪类论据',
            explanation: '统计数据是客观事实，属于事实论据。这是期末常考的论据辨析题！'
          },
          {
            id: 'c6u1l3q6',
            type: 'drag',
            question: '把论据拖到正确类别：事实论据 / 道理论据\n"牛顿发现万有引力" "谚语：失败是成功之母" "去年高考录取率85%" "孟子说：生于忧患"',
            answer: '事实论据-牛顿发现万有引力,事实论据-去年高考录取率85%,道理论据-谚语：失败是成功之母,道理论据-孟子说：生于忧患',
            hint: '事例数据是事实，名言谚语是道理',
            explanation: '牛顿发现万有引力和高考录取率是事实（事例/数据），谚语和孟子的话是道理（名言警句）。'
          },
          {
            id: 'c6u1l3q7',
            type: 'fill',
            question: '把后发生的事先写、先发生的事后写，这种顺序叫___叙',
            answer: '倒',
            hint: '[记叙顺序]（五年级语文-第2单元）',
            explanation: '记叙顺序有顺叙、倒叙、插叙。先写结果后写起因的是倒叙。'
          }
        ]
      },
      {
        id: 'c6u1l4',
        title: '写简单议论文——观点+论据+结论',
        order: 4,
        teachingMethod: '支架式：议论模板',
        content: [
          { type: 'text', content: '学会了找论点和论据，接下来我们试着自己写一篇简单的议论文。议论模板很简单："我认为___，因为___，所以___。"这就是一篇小议论文的骨架。', animationType: 'bounce' },
          { type: 'example', content: '议论模板示例：\n论点：我认为小学生应该多读课外书\n论据：因为读书能开阔眼界、提高写作能力\n结论：所以，我们应该每天坚持读半小时课外书', label: '议论模板', animationType: 'bounce' },
          { type: 'tip', content: '写议论文四步走：①亮明论点——开门见山提出主张；②摆出论据——用事实和道理支撑；③分析论证——把论据和论点联系起来；④得出结论——自然收束全文。', label: '议论四步法', animationType: 'pulse' },
          { type: 'example', content: '范文片段：\n"我认为诚信是做人之本。首先，诚信能赢得他人信任，曾子杀猪教子就是最好的例证；其次，诚信是中华民族的传统美德，古人云「人无信不立」。所以，我们每个人都应该做一个诚实守信的人。"', label: '议论文范文', animationType: 'bounce' },
          { type: 'animation', content: '议论三部分展开动画：论点、论据、结论三部分按顺序逐步出现，用箭头连接显示逻辑关系', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '议论三部分展开',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '论点', text: '我认为……', ttsNarration: '第一步亮明论点：我认为' },
                  { id: 's2', description: '论据', text: '因为……', ttsNarration: '第二步摆出论据：因为' },
                  { id: 's3', description: '论证', text: '由此可见……', ttsNarration: '第三步分析论证：由此可见' },
                  { id: 's4', description: '结论', text: '所以……', ttsNarration: '第四步得出结论：所以' },
                ],
              },
              ttsNarration: '写议论文四步走：亮明论点、摆出论据、分析论证、得出结论。',
            },
          },
          { type: 'tip', content: '小贴士：论据要紧扣论点，不能跑题；论证要说出论据为什么能证明论点，不能只罗列不管联系。', label: '写作提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范写议论文：用模板"我认为……因为……所以……"写一篇小议论文，让孩子看清写作过程。',
        weDo: '亲子一起填模板：选一个话题，一起填入论点、论据和结论。',
        youDo: '孩子独立写一篇简单议论文，包含论点、论据和结论。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“议论模板怎么搭？”②孩子应答：“我认为(论点)，因为(论据)，所以(结论)。”③答错引导：若孩子不会搭骨架，家长出题“小学生该不该带手机”，让孩子先填“我认为不该”，再补“因为影响学习”，最后“所以不带”。④快速听写：家长出话题，孩子用模板口头说一段议论。',
        funElement: '议论接龙：一家人轮流接龙写议论文！爸爸说论点，妈妈说论据，孩子说结论，看接出来的是不是一篇有理有据的小议论文！',
        gsapAnimations: [
          'GSAP:timeline|议论三部分展开|1.5s|点击播放|power2.out',
          'GSAP:cardReveal|议论模板卡片翻转|0.5s|点击|power2.inOut',
        ],
        images: [
          'IMG:illustration|议论模板图|500x300|教学风|png|三部分模板',
        ],
        practiceQuestions: [
          {
            id: 'c6u1l4q1',
            type: 'choice',
            question: '议论模板"我认为___，因为___，所以___"中，"因为"后面填什么？',
            options: ['论点', '论据', '结论'],
            answer: '论据',
            hint: '"因为"引出的是理由还是主张',
            explanation: '"因为"后面填论据（理由），用来支撑论点。"我认为"后是论点，"所以"后是结论。'
          },
          {
            id: 'c6u1l4q2',
            type: 'choice',
            question: '写议论文的第一步应该做什么？',
            options: ['摆出论据', '亮明论点', '得出结论'],
            answer: '亮明论点',
            hint: '先有主张才能找理由支撑',
            explanation: '写议论文四步走：①亮明论点 ②摆出论据 ③分析论证 ④得出结论。第一步是亮明论点。'
          },
          {
            id: 'c6u1l4q3',
            type: 'fill',
            question: '议论模板中，"所以"后面填的是___（填"论点"或"结论"）',
            answer: '结论',
            hint: '"所以"是推导出的结果',
            explanation: '"所以"后面填结论，是由论据推导出的总结性主张。'
          },
          {
            id: 'c6u1l4q4',
            type: 'choice',
            question: '下列哪个论据最能支撑论点"读书有益"？',
            options: ['读书要花钱', '读书能增长知识、开阔眼界', '书很重不方便携带'],
            answer: '读书能增长知识、开阔眼界',
            hint: '论据要紧扣论点并支持论点',
            explanation: '论据必须紧扣论点并支持论点。"读书能增长知识、开阔眼界"正面支撑"读书有益"，是合适的论据。'
          },
          {
            id: 'c6u1l4q5',
            type: 'choice',
            question: '【期末真题】写议论文时，论据和论点的关系应该是？',
            options: ['论据与论点无关', '论据要紧扣并支撑论点', '论据越多越好不用管论点'],
            answer: '论据要紧扣并支撑论点',
            hint: '论据的作用是什么',
            explanation: '论据的作用是支撑论点，必须紧扣论点、与论点密切相关，不能跑题。这是期末常考的写作要点！'
          },
          {
            id: 'c6u1l4q6',
            type: 'drag',
            question: '把议论四步按正确顺序排列：亮明论点、摆出论据、分析论证、得出结论',
            answer: '亮明论点,摆出论据,分析论证,得出结论',
            hint: '先有主张，再找理由，再联系，最后总结',
            explanation: '写议论文四步走：①亮明论点 ②摆出论据 ③分析论证 ④得出结论，逻辑顺序不能乱。'
          },
          {
            id: 'c6u1l4q7',
            type: 'fill',
            question: '“因为下雨，___没去公园”应填关联词___',
            answer: '所以',
            hint: '[关联词]（五年级语文-第1单元）',
            explanation: '“因为……所以……”表因果关系，填“所以”。议论文中也常用关联词把论点和论据连起来。'
          }
        ]
      },
      {
        id: 'c6u1l5',
        title: '议论文综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '学完了议论文入门，让我们来综合检测一下！这节课我们将练习读议论文找论点论据、写简单议论文，看看你掌握了多少。', animationType: 'bounce' },
          { type: 'tip', content: '检测小贴士：做错的题不要着急，回到前面的课时再学一遍。议论文的关键是论点、论据、论证三要素，掌握了就不怕任何题！', label: '检测提示', animationType: 'pulse' },
          { type: 'example', content: '复习要点：\n①议论文三要素：论点、论据、论证\n②论点位置：标题、开头、结尾\n③论据分类：事实论据、道理论据\n④议论模板：我认为……因为……所以……', label: '复习要点', animationType: 'bounce' },
          { type: 'animation', content: '通关撒花动画：完成检测后，如果正确率达到75%以上，撒花庆祝获得"议论文小达人"徽章', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '议论文达人通关',
              sequenceConfig: { items: ['论点', '论据', '论证', '通关撒花！'], order: 'custom', itemType: 'word' },
              ttsNarration: '恭喜你完成议论文综合检测，你是议论文小达人！',
            },
          },
          { type: 'tip', content: '读议论文先找论点，再找论据，最后看论证。写议论文先亮论点，再摆论据，最后得结论。读写都要抓住三要素！', label: '读写口诀', animationType: 'pulse' },
          { type: 'text', content: '议论文检测的难点在于区分论点和论据。论点是作者的主张（"我认为……"），论据是支撑主张的理由和证据。读题时先问自己：作者想让我赞同什么？那就是论点。', animationType: 'reveal' },
          { type: 'example', content: '例题：判断下列句子的论点和论据。"读书能让人变得聪明，因为读书可以开拓视野、增长见识，所以我们要多读书。"\n→论点：我们要多读书\n→论据：读书能开拓视野、增长见识', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范检测：做一道议论文读写题，示范如何找论点论据、如何写议论片段。',
        weDo: '亲子一起练习：读一段议论文，一起找论点和论据。',
        youDo: '孩子独立完成议论文读写测试，读议论文找论点论据，写一段简单议论文。',
        parentTips: '读议论文+写议论文，正确率达到75%就非常棒了。错了的题回到对应课时复习。',
        funElement: '议论文达人挑战：完成全部检测题，正确率≥75%就能获得"议论文小达人"金色徽章！',
        gsapAnimations: [
          'GSAP:confetti|通关撒花|2s|正确率≥75%|power1.out|particleCount:40',
          'GSAP:highlight|检测要点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|议论文达人徽章|300x300|可爱卡通风|png|金色徽章',
        ],
        practiceQuestions: [
          {
            id: 'c6u1l5q1',
            type: 'choice',
            question: '议论文的三要素是什么？',
            options: ['论点、论据、论证', '人物、情节、环境', '论点、例子、数字'],
            answer: '论点、论据、论证',
            hint: '回忆议论文三要素',
            explanation: '议论文三要素是论点（主张）、论据（理由证据）、论证（用论据证明论点的过程）。'
          },
          {
            id: 'c6u1l5q2',
            type: 'choice',
            question: '"俗话说：失败是成功之母"作为论据，属于哪一类？',
            options: ['事实论据', '道理论据', '不是论据'],
            answer: '道理论据',
            hint: '俗语名言属于哪类论据',
            explanation: '俗语"失败是成功之母"是公认的哲理名言，属于道理论据。'
          },
          {
            id: 'c6u1l5q3',
            type: 'fill',
            question: '读句子："总之，读书的好处很多，我们应该养成阅读习惯。"论点紧跟在"___"后面',
            answer: '总之',
            hint: '哪个词引出总结性论点',
            explanation: '"总之"是引出结论性论点的标志词，论点"我们应该养成阅读习惯"紧跟其后。'
          },
          {
            id: 'c6u1l5q4',
            type: 'choice',
            question: "阅读：'总之，诚实是一种美德，我们每个人都应该拥有它。'论点最可能是？",
            options: ['诚实是一种美德', '总之', '每个人都应该拥有诚实这种美德'],
            answer: '每个人都应该拥有诚实这种美德',
            hint: '"总之"后提出的主张是什么？注意是号召大家怎么做',
            explanation: '"总之"引出结论性论点。这句中"我们每个人都应该拥有它"是作者号召大家的主张，完整论点是"每个人都应该拥有诚实这种美德"。"诚实是一种美德"是铺垫，"总之"只是过渡词。'
          },
          {
            id: 'c6u1l5q5',
            type: 'choice',
            question: '【期末真题】为论点"勤奋出天才"选择最合适的论据组合？',
            options: ['爱迪生试验上千次发明电灯＋"天才出于勤奋"名言', '天才很少见＋勤奋很累', '我不认识天才＋书很贵'],
            answer: '爱迪生试验上千次发明电灯＋"天才出于勤奋"名言',
            hint: '论据要紧扣论点，事实加道理最有说服力',
            explanation: '爱迪生的事例（事实论据）加名言（道理论据），一事实一道理，紧扣"勤奋出天才"论点，最有说服力。这是期末常考题！'
          },
          {
            id: 'c6u1l5q6',
            type: 'drag',
            question: '把议论三部分拖到对应位置（按"我认为…因为…所以…"模板）：\n"我认为诚信最重要" "因为曾子杀猪教子" "所以我们要诚实守信"',
            answer: '论点-我认为诚信最重要,论据-因为曾子杀猪教子,结论-所以我们要诚实守信',
            hint: '主张是论点，理由是论据，总结是结论',
            explanation: '"我认为诚信最重要"是论点，"因为曾子杀猪教子"是论据，"所以我们要诚实守信"是结论，构成完整的议论结构。'
          },
          {
            id: 'c6u1l5q7',
            type: 'fill',
            question: '记叙文顺序按事情发展先后来写叫___叙',
            answer: '顺',
            hint: '[记叙文顺序]（五年级语文-第2单元）',
            explanation: '记叙文顺序有顺叙（按时间先后）、倒叙（先写结果再写起因）、插叙（中间插入），是五年级记叙文进阶学过的。'
          }
        ]
      }
    ]
  },

  // ==================== 第二单元：小说阅读——人物与环境 ====================
  {
    id: 'c6u2',
    title: '小说阅读——人物与环境',
    subtitle: '人物与环境',
    order: 2,
    lessons: [
      {
        id: 'c6u2l1',
        title: '小说三要素——人物情节环境',
        order: 1,
        teachingMethod: '支架式：要素图',
        content: [
          { type: 'text', content: '小说是以刻画人物为中心，通过完整的故事情节和具体的环境描写来反映社会生活的文学体裁。小说三要素：人物、情节、环境，缺一不可。', animationType: 'bounce' },
          { type: 'example', content: '小说三要素：\n①人物——小说的核心，通过外貌、语言、动作、心理刻画\n②情节——小说的骨架，包括开端、发展、高潮、结局\n③环境——小说的背景，分自然环境和社会环境', label: '小说三要素', animationType: 'bounce' },
          { type: 'tip', content: '人物是"谁"，情节是"发生了什么"，环境是"在哪儿、什么时代"。三者结合，才能构成一个完整的小说世界。', label: '要素理解窍门', animationType: 'pulse' },
          { type: 'example', content: '以《草船借箭》为例：\n人物：诸葛亮、周瑜、鲁肃、曹操\n情节：周瑜刁难→诸葛亮立军令状→草船借箭→如期交箭\n环境：三国时期，长江之上，大雾漫天', label: '要素示例', animationType: 'bounce' },
          { type: 'animation', content: '小说三要素图逐步构建：中心是"小说"，三个分支"人物""情节""环境"依次出现，每个分支展开具体内容', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '小说三要素',
              sceneBuildConfig: {
                sceneName: '小说三要素图',
                elements: [
                  { id: 'e1', text: '小说', x: 50, y: 50, size: 'xl', color: '#FF6B6B', animation: 'popIn' },
                  { id: 'e2', text: '人物', x: 20, y: 25, size: 'lg', color: '#4ECDC4', animation: 'slideIn' },
                  { id: 'e3', text: '情节', x: 50, y: 20, size: 'lg', color: '#45B7D1', animation: 'slideIn' },
                  { id: 'e4', text: '环境', x: 80, y: 25, size: 'lg', color: '#96CEB4', animation: 'slideIn' },
                ],
              },
              ttsNarration: '小说三要素：人物、情节、环境，缺一不可！',
            },
          },
          { type: 'tip', content: '记忆口诀：小说三要素，人物是核心，情节是骨架，环境是背景，三者合一处，故事才动人。', label: '巧记口诀', animationType: 'pulse' },
        ],
        iDo: '家长画小说三要素图，以一个熟悉的故事为例，示范如何辨认三要素。',
        weDo: '亲子一起分析一个童话故事的三要素，互相补充。',
        youDo: '孩子独立辨认一篇短篇小说的人物、情节、环境。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“小说三要素是什么？”②孩子应答：“人物、情节、环境。”③答错引导：若孩子记不全，家长用《西游记》举例——人物(孙悟空)、情节(取经打怪)、环境(神魔世界)，让孩子对应。④快速出题：家长说一部看过的动画片，孩子说出它的人物、情节、环境。',
        funElement: '要素拼图：给人物、情节、环境三组卡片，孩子自由拼出一个小说故事，看谁拼的故事最精彩！',
        gsapAnimations: [
          'GSAP:sceneBuild|三要素图逐步构建|1.5s|点击播放|power2.out',
          'GSAP:highlight|三要素关键词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|小说三要素图|500x300|思维导图风|png|三要素',
        ],
        practiceQuestions: [
          {
            id: 'c6u2l1q1',
            type: 'choice',
            question: '小说三要素是什么？',
            options: ['人物、情节、环境', '论点、论据、论证', '起因、经过、结果'],
            answer: '人物、情节、环境',
            hint: '回忆小说的核心要素',
            explanation: '小说三要素是人物（核心）、情节（骨架）、环境（背景）。'
          },
          {
            id: 'c6u2l1q2',
            type: 'choice',
            question: '小说中最核心的要素是？',
            options: ['环境', '人物', '情节'],
            answer: '人物',
            hint: '小说以什么为中心刻画',
            explanation: '小说以刻画人物为中心，人物是小说最核心的要素，情节和环境都是为表现人物服务的。'
          },
          {
            id: 'c6u2l1q3',
            type: 'fill',
            question: '小说的"骨架"指的是___（填三要素之一）',
            answer: '情节',
            hint: '哪个要素像骨架一样支撑故事',
            explanation: '情节是小说的骨架，包括开端、发展、高潮、结局，支撑起整个故事。'
          },
          {
            id: 'c6u2l1q4',
            type: 'choice',
            question: '在《草船借箭》中，"大雾漫天"属于小说三要素中的哪一个？',
            options: ['人物', '情节', '环境'],
            answer: '环境',
            hint: '大雾是天气描写，属于什么',
            explanation: '"大雾漫天"是自然环境描写，属于小说三要素中的环境要素。'
          },
          {
            id: 'c6u2l1q5',
            type: 'choice',
            question: '【期末真题】下列哪一项不属于小说三要素？',
            options: ['人物', '环境', '论点'],
            answer: '论点',
            hint: '论点是哪种文体的要素',
            explanation: '论点是议论文的要素，不属于小说三要素（人物、情节、环境）。这是期末常考题！'
          },
          {
            id: 'c6u2l1q6',
            type: 'drag',
            question: '把要素拖到对应类别：人物 / 情节 / 环境\n"诸葛亮" "草船借箭" "长江大雾"',
            answer: '人物-诸葛亮,情节-草船借箭,环境-长江大雾',
            hint: '谁是人，什么是事，什么是背景',
            explanation: '诸葛亮是人物，草船借箭是情节（事件），长江大雾是环境（背景）。'
          },
          {
            id: 'c6u2l1q7',
            type: 'fill',
            question: '《西游记》中孙悟空的兵器是___',
            answer: '金箍棒',
            hint: '[名著阅读]（五年级语文-第4单元）',
            explanation: '《西游记》是五年级名著阅读篇目，孙悟空的兵器是金箍棒(定海神针)。'
          }
        ]
      },
      {
        id: 'c6u2l2',
        title: '人物分析——圆形人物与扁平人物',
        order: 2,
        teachingMethod: '支架式：人物分析卡',
        content: [
          { type: 'text', content: '读小说要分析人物。人物分两种：圆形人物性格丰富、会变化发展，像真实的人；扁平人物性格单一、固定不变，特征鲜明。从人物的行为、语言、心理入手，就能分析出人物性格。', animationType: 'bounce' },
          { type: 'example', content: '圆形人物：性格复杂、会成长变化\n如《草船借箭》的诸葛亮——既神机妙算，又从容自信，形象丰满立体\n\n扁平人物：性格单一、特征固定\n如一些故事里的"贪财商人""善良农夫"，一个标签概括', label: '圆形与扁平人物', animationType: 'bounce' },
          { type: 'tip', content: '分析人物四角度：①外貌——长相穿着；②语言——说了什么；③动作——做了什么；④心理——想了什么。综合这四点就能判断人物性格。', label: '人物分析四角度', animationType: 'pulse' },
          { type: 'example', content: '人物分析卡示例：\n人物：诸葛亮\n外貌：羽扇纶巾，气度从容\n语言："只消三天"——胸有成竹\n动作：饮酒取乐——镇定自若\n心理：早算准曹操不敢出兵——神机妙算\n性格：足智多谋、从容自信', label: '人物分析卡', animationType: 'bounce' },
          { type: 'animation', content: '人物分析卡逐步填入动画：外貌、语言、动作、心理四个格子依次填入内容，最后汇总出人物性格', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '人物分析卡',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '外貌', text: '羽扇纶巾', ttsNarration: '看外貌：羽扇纶巾，气度从容' },
                  { id: 's2', description: '语言', text: '"只消三天"', ttsNarration: '听语言：只消三天，胸有成竹' },
                  { id: 's3', description: '动作', text: '饮酒取乐', ttsNarration: '观动作：饮酒取乐，镇定自若' },
                  { id: 's4', description: '心理', text: '算准曹操', ttsNarration: '察心理：算准曹操，神机妙算' },
                  { id: 's5', description: '性格', text: '足智多谋', ttsNarration: '综合得出：足智多谋、从容自信' },
                ],
              },
              ttsNarration: '从外貌、语言、动作、心理四个角度分析，就能得出人物性格！',
            },
          },
          { type: 'tip', content: '小窍门：分析人物时，先找原文中的描写，再用自己的话概括性格，做到"有理有据"。', label: '分析窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范分析人物性格变化：以一个人物为例，从行为、语言、心理分析其性格。',
        weDo: '亲子一起分析一个人物，填写人物分析卡。',
        youDo: '孩子独立分析一篇小说中的人物性格，完成人物分析卡。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“分析人物性格从哪几个角度？”②孩子应答：“外貌、语言、动作、心理。”③答错引导：若孩子只说一个，家长读“他攥紧拳头大声吼”，让孩子从动作和语言分析这是个暴躁的人。④快速出题：家长说一句人物描写，孩子判断用了哪个角度、看出什么性格。',
        funElement: '人物名片：为小说人物设计一张名片，写上外貌、口头禅、性格标签，看谁设计的名片最传神！',
        gsapAnimations: [
          'GSAP:timeline|人物分析卡逐步填入|1.5s|点击播放|power2.out',
          'GSAP:cardReveal|人物性格标签翻转|0.5s|点击|power2.inOut',
        ],
        images: [
          'IMG:illustration|人物分析卡|500x350|思维导图风|png|分析模板',
        ],
        practiceQuestions: [
          {
            id: 'c6u2l2q1',
            type: 'choice',
            question: '性格复杂、会成长变化的人物称为？',
            options: ['扁平人物', '圆形人物', '次要人物'],
            answer: '圆形人物',
            hint: '哪种人物像真实的人一样丰富',
            explanation: '圆形人物性格丰富、会变化发展，像真实的人；扁平人物性格单一固定。'
          },
          {
            id: 'c6u2l2q2',
            type: 'choice',
            question: '分析人物性格可以从下列哪个角度入手？',
            options: ['只看名字', '外貌、语言、动作、心理', '只看结尾'],
            answer: '外貌、语言、动作、心理',
            hint: '回忆人物分析四角度',
            explanation: '分析人物四角度：外貌、语言、动作、心理，综合这四点判断人物性格。'
          },
          {
            id: 'c6u2l2q3',
            type: 'fill',
            question: '诸葛亮说"只消三天"，从语言描写可看出他___的性格',
            answer: '胸有成竹',
            acceptableAnswers: ['胸有成竹', '从容自信', '自信'],
            hint: '敢说"只消三天"说明很有把握',
            explanation: '"只消三天"的语言描写表现诸葛亮胸有成竹、从容自信的性格。'
          },
          {
            id: 'c6u2l2q4',
            type: 'choice',
            question: '"他气得把杯子摔在地上"这句话主要通过什么描写表现人物？',
            options: ['外貌描写', '动作描写', '心理描写'],
            answer: '动作描写',
            hint: '摔杯子是动作还是语言',
            explanation: '"摔杯子"是具体的动作行为，属于动作描写，表现人物愤怒的情绪。'
          },
          {
            id: 'c6u2l2q5',
            type: 'choice',
            question: '【期末真题】下列哪个是圆形人物的特点？',
            options: ['性格单一固定不变', '性格丰富会发展变化', '只出现一次不重要'],
            answer: '性格丰富会发展变化',
            hint: '圆形人物像真实的人',
            explanation: '圆形人物性格丰富、会成长变化，形象立体丰满。这是期末常考的人物类型辨析题！'
          },
          {
            id: 'c6u2l2q6',
            type: 'drag',
            question: '把描写方法拖到对应类别：\n"羽扇纶巾" "他大喊一声" "心想：糟了" "拔腿就跑"',
            answer: '外貌-羽扇纶巾,语言-他大喊一声,心理-心想：糟了,动作-拔腿就跑',
            hint: '看长相、说话、想法、行为',
            explanation: '"羽扇纶巾"是外貌，"大喊"是语言，"心想"是心理，"拔腿就跑"是动作。'
          },
          {
            id: 'c6u2l2q7',
            type: 'fill',
            question: '“他涨红了脸”属于___描写',
            answer: '神态',
            hint: '[人物描写方法]（五年级语文-第2单元）',
            explanation: '描写表情神色属于神态描写，是五年级学过的人物描写方法之一。'
          }
        ]
      },
      {
        id: 'c6u2l3',
        title: '环境描写——自然环境与社会环境',
        order: 3,
        teachingMethod: '对比辨析法',
        content: [
          { type: 'text', content: '小说中的环境描写分为两类：自然环境描写天气、景色、季节等自然现象；社会环境描写时代背景、社会风气、人物关系等社会状况。环境描写能烘托气氛、推动情节、表现人物。', animationType: 'bounce' },
          { type: 'example', content: '自然环境：\n"那天大雾漫天，江上连面对面都看不清。"\n→描写天气（大雾），属于自然环境\n\n社会环境：\n"故事发生在解放战争时期，村里人都盼着胜利的那一天。"\n→描写时代背景（解放战争），属于社会环境', label: '两种环境', animationType: 'bounce' },
          { type: 'tip', content: '区分窍门：自然环境写的是"天和地"（天气景色），社会环境写的是"人和世"（时代社会）。', label: '环境区分窍门', animationType: 'pulse' },
          { type: 'example', content: '环境描写的作用：\n①烘托气氛——"阴云密布"烘托紧张气氛\n②推动情节——"大雾"为草船借箭创造条件\n③表现人物——"烈日当空"衬托人物坚毅\n④暗示主题——"破败的村庄"暗示战争之苦', label: '环境描写作用', animationType: 'bounce' },
          { type: 'animation', content: '自然环境与社会环境对比动画：左边展示自然环境（天气景色），右边展示社会环境（时代背景），一一对应比较', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '自然环境 vs 社会环境',
              compareConfig: {
                leftItems: ['天气（大雾、晴天）', '景色（山水、花草）', '季节（春夏秋冬）'],
                rightItems: ['时代背景（解放战争）', '社会风气（民风习俗）', '人物关系（贫富贵贱）'],
                result: 'equal',
                resultText: '自然环境写天地，社会环境写人世，共同烘托故事',
              },
              ttsNarration: '自然环境写天气景色，社会环境写时代背景，两者共同为故事服务！',
            },
          },
          { type: 'tip', content: '读小说遇到环境描写，多问问自己：这里写环境有什么作用？烘托气氛？推动情节？还是表现人物？', label: '阅读提醒', animationType: 'pulse' },
        ],
        iDo: '家长对比自然和社会环境，示范如何辨认两种环境描写及其作用。',
        weDo: '亲子一起辨析：给出几段环境描写，一起判断是自然环境还是社会环境。',
        youDo: '孩子独立找环境描写，并说明其作用。',
        parentTips: '自然环境写天气/景色，社会环境写时代/背景。多让孩子辨析环境描写的作用。',
        funElement: '环境画家：读一段环境描写，孩子用画笔把它画出来，看画出的画面和文字是否吻合！',
        gsapAnimations: [
          'GSAP:compare|自然vs社会环境对比|0.8s|页面加载|power2.out',
          'GSAP:sceneBuild|环境场景逐步构建|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|环境描写对比图|500x300|教学风|png|两种环境',
        ],
        practiceQuestions: [
          {
            id: 'c6u2l3q1',
            type: 'choice',
            question: '"那天大雾漫天，江上连面对面都看不清"属于哪种环境描写？',
            options: ['自然环境', '社会环境', '人物描写'],
            answer: '自然环境',
            hint: '大雾是天气还是时代',
            explanation: '大雾是天气现象，属于自然环境描写。'
          },
          {
            id: 'c6u2l3q2',
            type: 'choice',
            question: '下列哪一项是社会环境描写？',
            options: ['春风拂面，柳条轻摇', '故事发生在抗战时期', '太阳火辣辣地照着'],
            answer: '故事发生在抗战时期',
            hint: '哪个写的是时代背景',
            explanation: '"故事发生在抗战时期"描写时代背景，属于社会环境。其余两项是自然环境（天气景色）。'
          },
          {
            id: 'c6u2l3q3',
            type: 'fill',
            question: '环境描写分为自然环境和___环境',
            answer: '社会',
            hint: '描写时代背景的是哪种环境',
            explanation: '环境描写分为自然环境（天气景色）和社会环境（时代背景）两类。'
          },
          {
            id: 'c6u2l3q4',
            type: 'choice',
            question: '"阴云密布，雷声滚滚"这段环境描写的主要作用是？',
            options: ['烘托紧张气氛', '介绍人物外貌', '说明故事结局'],
            answer: '烘托紧张气氛',
            hint: '阴云雷声给人什么感觉',
            explanation: '"阴云密布，雷声滚滚"渲染压抑紧张的氛围，主要作用是烘托紧张气氛。'
          },
          {
            id: 'c6u2l3q5',
            type: 'choice',
            question: '【期末真题】"村子里到处是断壁残垣，人们面黄肌瘦"这段描写属于？',
            options: ['自然环境', '社会环境', '心理描写'],
            answer: '社会环境',
            hint: '断壁残垣和人们的状态反映什么',
            explanation: '断壁残垣和人们面黄肌瘦反映了社会状况（战乱后的破败），属于社会环境描写。这是期末常考题！'
          },
          {
            id: 'c6u2l3q6',
            type: 'drag',
            question: '把句子拖到正确类别：自然环境 / 社会环境\n"大雪纷飞" "解放前人们生活困苦" "夕阳西下" "那年闹饥荒"',
            answer: '自然环境-大雪纷飞,自然环境-夕阳西下,社会环境-解放前人们生活困苦,社会环境-那年闹饥荒',
            hint: '天气景色是自然，时代社会是社会',
            explanation: '大雪纷飞、夕阳西下是自然环境（天气景色）；解放前生活困苦、闹饥荒是社会环境（时代社会状况）。'
          },
          {
            id: 'c6u2l3q7',
            type: 'fill',
            question: '《三国演义》中“草船借箭”的主人公是___',
            answer: '诸葛亮',
            hint: '[名著阅读]（五年级语文-第4单元）',
            explanation: '《三国演义》是五年级名著阅读篇目，“草船借箭”的主人公是诸葛亮。'
          }
        ]
      },
      {
        id: 'c6u2l4',
        title: '情节分析——开端发展高潮结局',
        order: 4,
        teachingMethod: '支架式：情节曲线图',
        content: [
          { type: 'text', content: '小说的情节一般分为四个阶段：开端（故事开始，交代背景）、发展（矛盾展开，推进故事）、高潮（矛盾最激烈，最精彩）、结局（矛盾解决，故事收束）。用情节曲线图就能看清故事起伏。', animationType: 'bounce' },
          { type: 'example', content: '情节四阶段：\n开端——交代背景，引出人物和矛盾\n发展——矛盾展开，故事向前推进\n高潮——矛盾最尖锐，最紧张精彩\n结局——矛盾解决，故事结束', label: '情节四阶段', animationType: 'bounce' },
          { type: 'tip', content: '情节曲线像一座山：开端是山脚（平稳起步），发展是上坡（逐渐升高），高潮是山顶（最高点），结局是下山（回落收束）。', label: '情节曲线窍门', animationType: 'pulse' },
          { type: 'example', content: '以《草船借箭》为例：\n开端：周瑜妒忌诸葛亮，要他三天造十万支箭\n发展：诸葛亮立军令状，向鲁肃借船\n高潮：大雾天草船借箭，曹操万箭齐发\n结局：诸葛亮如期交箭，周瑜自叹不如', label: '情节分析示例', animationType: 'bounce' },
          { type: 'animation', content: '情节曲线绘制动画：横轴是四阶段，纵轴是紧张程度，曲线从开端平稳上升，到高潮达到顶点，再回落到结局', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '情节发展曲线',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '开端', text: '周瑜刁难', ttsNarration: '开端：周瑜妒忌，要诸葛亮三天造十万支箭' },
                  { id: 's2', description: '发展', text: '立状借船', ttsNarration: '发展：诸葛亮立军令状，向鲁肃借船' },
                  { id: 's3', description: '高潮', text: '草船借箭', ttsNarration: '高潮：大雾天草船借箭，万箭齐发，最精彩' },
                  { id: 's4', description: '结局', text: '如期交箭', ttsNarration: '结局：诸葛亮如期交箭，周瑜自叹不如' },
                ],
              },
              ttsNarration: '情节像一座山：开端起步，发展上坡，高潮登顶，结局回落！',
            },
          },
          { type: 'tip', content: '找高潮小窍门：高潮是故事最紧张、矛盾最激烈的地方，通常是读者最揪心、最想知道结果的部分。', label: '找高潮窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范画情节曲线：以一个故事为例，标出开端、发展、高潮、结局四点。',
        weDo: '亲子一起画情节曲线：共同分析一个故事的情节发展。',
        youDo: '孩子独立画情节曲线，标注四个阶段。',
        parentTips: '情节四阶段：开端→发展→高潮→结局。用情节曲线图帮孩子看清故事起伏。',
        funElement: '情节过山车：把情节画成过山车轨道，开端是起点，高潮是最高点，结局是终点，坐上"情节过山车"感受故事起伏！',
        gsapAnimations: [
          'GSAP:timeline|情节曲线绘制|1.5s|点击播放|power2.out',
          'GSAP:shapeDraw|情节曲线图绘制|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|情节曲线图|500x300|教学风|png|曲线+标注',
        ],
        practiceQuestions: [
          {
            id: 'c6u2l4q1',
            type: 'choice',
            question: '小说情节一般分为几个阶段？',
            options: ['两个', '三个', '四个'],
            answer: '四个',
            hint: '回忆开端发展高潮结局',
            explanation: '小说情节一般分四个阶段：开端、发展、高潮、结局。'
          },
          {
            id: 'c6u2l4q2',
            type: 'choice',
            question: '情节中矛盾最尖锐、最紧张精彩的部分是？',
            options: ['开端', '高潮', '结局'],
            answer: '高潮',
            hint: '哪个阶段像山顶一样最高',
            explanation: '高潮是矛盾最激烈、最紧张精彩的部分，是情节曲线的最高点。'
          },
          {
            id: 'c6u2l4q3',
            type: 'fill',
            question: '情节曲线中，"山脚"代表的是___阶段',
            answer: '开端',
            hint: '故事平稳起步的地方',
            explanation: '开端是情节的起点，像山脚一样平稳起步，交代背景引出矛盾。'
          },
          {
            id: 'c6u2l4q4',
            type: 'choice',
            question: '在《草船借箭》中，"大雾天草船借箭，曹操万箭齐发"属于情节的哪个阶段？',
            options: ['开端', '发展', '高潮'],
            answer: '高潮',
            hint: '这部分是不是最紧张精彩',
            explanation: '"草船借箭、万箭齐发"是矛盾最激烈、最精彩的部分，属于高潮阶段。'
          },
          {
            id: 'c6u2l4q5',
            type: 'choice',
            question: '【期末真题】情节的"发展"阶段的作用是？',
            options: ['交代背景引出矛盾', '展开矛盾推进故事', '解决矛盾收束故事'],
            answer: '展开矛盾推进故事',
            hint: '发展在开端和高潮之间，起什么作用',
            explanation: '发展阶段的作用是展开矛盾、推进故事，把情节从开端推向高潮。交代背景是开端，解决矛盾是结局。这是期末常考题！'
          },
          {
            id: 'c6u2l4q6',
            type: 'drag',
            question: '把情节四阶段按正确顺序排列：开端、发展、高潮、结局',
            answer: '开端,发展,高潮,结局',
            hint: '像爬山：起步、上坡、登顶、下山',
            explanation: '情节四阶段顺序：开端（起步）→发展（上坡）→高潮（登顶）→结局（下山）。'
          },
          {
            id: 'c6u2l4q7',
            type: 'fill',
            question: '《水浒传》中“武松打虎”的主人公是___',
            answer: '武松',
            hint: '[名著阅读]（五年级语文-第4单元）',
            explanation: '《水浒传》是五年级名著阅读篇目，“武松打虎”的主人公是武松。'
          }
        ]
      },
      {
        id: 'c6u2l5',
        title: '小说阅读综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '学完了小说阅读，让我们综合检测一下！这节课我们将阅读小说片段，分析人物、环境、情节，看看你掌握了多少。', animationType: 'bounce' },
          { type: 'tip', content: '检测小贴士：读小说先找三要素（人物、情节、环境），再分析人物性格和情节发展。做错的题回到前面复习。', label: '检测提示', animationType: 'pulse' },
          { type: 'example', content: '复习要点：\n①小说三要素：人物、情节、环境\n②人物分析：外貌、语言、动作、心理\n③环境分类：自然环境、社会环境\n④情节四阶段：开端、发展、高潮、结局', label: '复习要点', animationType: 'bounce' },
          { type: 'animation', content: '通关撒花动画：完成检测，正确率≥75%撒花庆祝，获得"小说阅读小达人"徽章', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '小说阅读达人通关',
              sequenceConfig: { items: ['人物', '情节', '环境', '通关撒花！'], order: 'custom', itemType: 'word' },
              ttsNarration: '恭喜你完成小说阅读综合检测，你是小说阅读小达人！',
            },
          },
          { type: 'tip', content: '读小说口诀：先找三要素，再析人物心，环境看作用，情节画曲线。', label: '阅读口诀', animationType: 'pulse' },
          { type: 'text', content: '小说阅读检测要重点区分"人物描写方法"。外貌写长相，语言写说话，动作写做什么，心理写想什么。判断描写方法时，看句子是"写外表""写嘴巴""写手脚"还是"写心思"，一个句子可以同时包含多种描写。', animationType: 'reveal' },
          { type: 'example', content: '例题：分析描写方法。"她红着脸，低着头，小声说：\'我……我不知道。\'"\n→外貌描写：红着脸、低着头\n→语言描写：小声说\n→心理暗示：害羞紧张', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范检测：做一道小说阅读题，示范如何分析人物、环境、情节。',
        weDo: '亲子一起练习：读一段小说，一起分析三要素。',
        youDo: '孩子独立完成小说阅读测试，分析人物性格、环境作用、情节发展。',
        parentTips: '小说片段阅读理解，正确率≥75%就很棒。错了的题回到对应课时复习。',
        funElement: '小说阅读达人挑战：完成全部检测题，正确率≥75%获得"小说阅读小达人"金色徽章！',
        gsapAnimations: [
          'GSAP:confetti|通关撒花|2s|正确率≥75%|power1.out|particleCount:40',
          'GSAP:highlight|检测要点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|小说阅读徽章|300x300|可爱卡通风|png|金色徽章',
        ],
        practiceQuestions: [
          {
            id: 'c6u2l5q1',
            type: 'choice',
            question: '小说三要素是什么？',
            options: ['人物、情节、环境', '起因、经过、结果', '论点、论据、论证'],
            answer: '人物、情节、环境',
            hint: '回忆小说三要素',
            explanation: '小说三要素是人物（核心）、情节（骨架）、环境（背景）。'
          },
          {
            id: 'c6u2l5q2',
            type: 'choice',
            question: '分析人物性格不能从下列哪个角度入手？',
            options: ['外貌', '论据', '心理'],
            answer: '论据',
            hint: '哪个不属于人物描写角度',
            explanation: '分析人物四角度：外貌、语言、动作、心理。论据是议论文的要素，不是人物分析角度。'
          },
          {
            id: 'c6u2l5q3',
            type: 'fill',
            question: '环境描写分为自然环境和社会___',
            answer: '环境',
            hint: '描写时代背景的是哪种环境',
            explanation: '环境描写分为自然环境和社会环境两类。'
          },
          {
            id: 'c6u2l5q4',
            type: 'choice',
            question: '情节中最紧张精彩的阶段是？',
            options: ['开端', '高潮', '结局'],
            answer: '高潮',
            hint: '哪个阶段像山顶',
            explanation: '高潮是矛盾最尖锐、最紧张精彩的阶段，是情节曲线的最高点。'
          },
          {
            id: 'c6u2l5q5',
            type: 'choice',
            question: '【期末真题】"他咬紧牙关，握紧拳头，一步也不后退"主要通过什么描写表现人物坚毅？',
            options: ['外貌描写', '动作描写', '环境描写'],
            answer: '动作描写',
            hint: '咬牙、握拳、不退是什么描写',
            explanation: '咬紧牙关、握紧拳头、不后退都是具体动作，属于动作描写，表现人物坚毅。这是期末常考题！'
          },
          {
            id: 'c6u2l5q6',
            type: 'drag',
            question: '把情节四阶段拖到正确顺序：开端、发展、高潮、结局',
            answer: '开端,发展,高潮,结局',
            hint: '像爬山：起步、上坡、登顶、下山',
            explanation: '情节四阶段顺序：开端→发展→高潮→结局。'
          },
          {
            id: 'c6u2l5q7',
            type: 'fill',
            question: '"武松打虎"出自四大名著中的《___》',
            answer: '水浒传',
            hint: '[名著阅读]（五年级语文-第4单元）',
            explanation: '武松打虎出自施耐庵《水浒传》，是五年级名著阅读学过的经典故事。'
          }
        ]
      }
    ]
  },

  // ==================== 第三单元：散文鉴赏——形散神聚 ====================
  {
    id: 'c6u3',
    title: '散文鉴赏——形散神聚',
    subtitle: '形散神聚',
    order: 3,
    lessons: [
      {
        id: 'c6u3l1',
        title: '散文特点——形散神聚',
        order: 1,
        teachingMethod: '情境式',
        content: [
          { type: 'text', content: '散文最大的特点是"形散神聚"。"形散"指取材自由，天南海北、古今中外都可以写；"神聚"指中心主题统一，所有材料都围绕一个中心。形散是表面，神聚是内核。', animationType: 'bounce' },
          { type: 'example', content: '形散：材料自由散落\n如朱自清《春》写了春草、春花、春风、春雨、迎春——材料很多很散\n\n神聚：中心统一\n所有材料都围绕"赞美春天"这一中心，形散而神不散', label: '形散神聚', animationType: 'bounce' },
          { type: 'tip', content: '理解窍门：形散就像撒出去的珍珠，神聚就像串起珍珠的那根线。珍珠可以四处散落，但都串在一根线上。', label: '形散神聚窍门', animationType: 'pulse' },
          { type: 'example', content: '散文与小说的区别：\n小说：有完整的人物和情节，以讲故事为主\n散文：取材自由，以抒发情感、表达感悟为主，不一定有完整情节', label: '文体区别', animationType: 'bounce' },
          { type: 'animation', content: '散文材料散开→中心收拢动画：先有多个材料散落在画面各处，然后向中心收拢，串在"中心主题"这根线上', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '形散神聚',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '形散', text: '春草·春花·春风·春雨', ttsNarration: '形散：材料自由散落，春草春花春风春雨' },
                  { id: 's2', description: '神聚', text: '中心：赞美春天', ttsNarration: '神聚：所有材料都围绕赞美春天这一中心' },
                  { id: 's3', description: '收拢', text: '形散而神不散', ttsNarration: '材料散落但中心统一，这就是形散神聚' },
                ],
              },
              ttsNarration: '散文形散神聚：材料像散落的珍珠，中心是串起珍珠的线！',
            },
          },
          { type: 'tip', content: '口诀：散文形散神聚，取材自由神不散，看似东拉西扯，其实都围绕一个中心。', label: '巧记口诀', animationType: 'pulse' },
        ],
        iDo: '家长读散文找"形"和"神"：示范如何找出散落的材料和统一的中心。',
        weDo: '亲子一起找散文的形和神，互相讨论。',
        youDo: '孩子独立找一篇散文的"形"（材料）和"神"（中心）。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“散文最大的特点是什么？”②孩子应答：“形散神聚——形散是取材自由，神聚是中心统一。”③答错引导：若孩子不懂，家长用比喻——散文像散落的珍珠(形散)，用一根线(中心)串成项链(神聚)。④快速出题：家长读一段散文，让孩子找“串珠的线”(中心)。',
        funElement: '珍珠串联游戏：把散文材料比作珍珠，中心比作线，孩子把散落的"珍珠"串到"中心线"上，看串得对不对！',
        gsapAnimations: [
          'GSAP:timeline|散文材料散开→中心收拢|1.5s|点击播放|power2.inOut',
          'GSAP:sceneBuild|形散神聚示意图|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|形散神聚示意图|500x300|水彩画风|png|散开+收拢',
        ],
        practiceQuestions: [
          {
            id: 'c6u3l1q1',
            type: 'choice',
            question: '散文最大的特点是什么？',
            options: ['形散神聚', '人物情节环境', '论点论据论证'],
            answer: '形散神聚',
            hint: '散文的标志性特点',
            explanation: '散文最大的特点是"形散神聚"：形散指取材自由，神聚指中心统一。'
          },
          {
            id: 'c6u3l1q2',
            type: 'choice',
            question: '"形散"中的"形"指的是什么？',
            options: ['中心主题', '取材和材料', '人物形象'],
            answer: '取材和材料',
            hint: '形散是表面上的散',
            explanation: '"形"指取材和材料，"形散"指散文取材自由，材料可以散落各处。'
          },
          {
            id: 'c6u3l1q3',
            type: 'fill',
            question: '散文"形散神聚"中，"神"指的是___',
            answer: '中心',
            acceptableAnswers: ['中心', '中心主题', '主题'],
            hint: '神聚是内核的统一',
            explanation: '"神"指中心主题，"神聚"指所有材料都围绕统一的中心。'
          },
          {
            id: 'c6u3l1q4',
            type: 'choice',
            question: '朱自清《春》写了春草、春花、春风、春雨等，这体现了散文的什么特点？',
            options: ['形散', '神聚', '情节完整'],
            answer: '形散',
            hint: '材料多而散体现什么',
            explanation: '《春》写了多种景物，取材自由散落，体现了散文"形散"的特点。'
          },
          {
            id: 'c6u3l1q5',
            type: 'choice',
            question: '【期末真题】下列对散文"形散神聚"理解正确的是？',
            options: ['材料散乱没有中心', '材料自由但都围绕一个中心', '只写一件事不散'],
            answer: '材料自由但都围绕一个中心',
            hint: '形散神聚的真正含义',
            explanation: '形散神聚指取材自由（形散）但中心统一（神聚），材料看似散落实则都围绕一个中心。这是期末常考题！'
          },
          {
            id: 'c6u3l1q6',
            type: 'drag',
            question: '把内容拖到正确类别：形散 / 神聚\n"写春草春花春雨" "赞美春天" "东拉西扯取材广" "中心统一不变"',
            answer: '形散-写春草春花春雨,形散-东拉西扯取材广,神聚-赞美春天,神聚-中心统一不变',
            hint: '材料散落是形散，中心统一是神聚',
            explanation: '写多种景物、取材广是形散（材料）；赞美春天、中心统一是神聚（主题）。'
          },
          {
            id: 'c6u3l1q7',
            type: 'fill',
            question: '“鸟儿在树枝上唱歌”用了___的修辞手法',
            answer: '拟人',
            hint: '[修辞手法]（五年级语文-第1单元）',
            explanation: '把鸟儿当人来写，赋予人的动作“唱歌”，是拟人修辞。'
          }
        ]
      },
      {
        id: 'c6u3l2',
        title: '散文语言——优美与含蓄',
        order: 2,
        teachingMethod: '多感官：朗读品味',
        content: [
          { type: 'text', content: '散文的语言优美而含蓄。优美在于用词生动、修辞丰富、节奏感强；含蓄在于言外有意、回味悠长。朗读是品味散文语言最好的方法，边读边体会语言之美。', animationType: 'bounce' },
          { type: 'example', content: '优美语言示例：\n"小草偷偷地从土里钻出来，嫩嫩的，绿绿的。"\n→"偷偷地""钻"用拟人，生动形象；"嫩嫩的""绿绿的"叠词，音韵优美', label: '优美语言', animationType: 'bounce' },
          { type: 'tip', content: '品味散文语言三看：①看用词——动词形容词是否精准生动；②看修辞——比喻拟人排比等；③看节奏——长短句、叠词的音韵美。', label: '品味语言三看', animationType: 'pulse' },
          { type: 'example', content: '含蓄语言示例：\n"其实，地上本没有路，走的人多了，也便成了路。"\n→表面写路，实则含蓄表达：希望要靠行动去创造，言外有意', label: '含蓄语言', animationType: 'bounce' },
          { type: 'animation', content: '散文意境画面构建动画：优美语句描绘的画面元素逐步出现，构建出一幅完整的散文意境图', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '散文意境画面',
              sceneBuildConfig: {
                sceneName: '春日意境',
                elements: [
                  { id: 'e1', text: '嫩绿小草', emoji: '🌱', x: 30, y: 60, size: 'md', color: '#7CB342', animation: 'popIn' },
                  { id: 'e2', text: '和煦春风', emoji: '🍃', x: 60, y: 30, size: 'md', color: '#81C784', animation: 'fadeIn' },
                  { id: 'e3', text: '细密春雨', emoji: '💧', x: 75, y: 50, size: 'md', color: '#64B5F6', animation: 'slideIn' },
                  { id: 'e4', text: '春日暖阳', emoji: '☀️', x: 20, y: 25, size: 'lg', color: '#FFB74D', animation: 'scaleIn' },
                ],
              },
              ttsNarration: '散文用优美语言构建意境画面：嫩草、春风、春雨、暖阳，画面感十足！',
            },
          },
          { type: 'tip', content: '朗读小窍门：读散文要读出节奏和情感，优美的句子放慢语速细细品味，含蓄的句子读后停一停，体会言外之意。', label: '朗读窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范朗读品味散文语言，读出节奏和情感，让孩子感受语言之美。',
        weDo: '亲子一起朗读散文，互相品味优美语句。',
        youDo: '孩子独立朗读散文并品味语言，摘抄优美语句。',
        parentTips: '朗读品味散文语言的优美，边读边体会用词、修辞和节奏。',
        funElement: '美句收藏家：朗读散文时，把最美的句子摘抄到"美句收藏本"里，看谁收藏的句子最多最美！',
        gsapAnimations: [
          'GSAP:highlight|优美语句高亮|0.5s|点击|power2.out',
          'GSAP:sceneBuild|散文意境画面构建|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|散文语言标注图|500x300|教学风|png|语句标注',
        ],
        practiceQuestions: [
          {
            id: 'c6u3l2q1',
            type: 'choice',
            question: '散文语言的两个突出特点是？',
            options: ['优美与含蓄', '简单与直白', '夸张与幽默'],
            answer: '优美与含蓄',
            hint: '回忆散文语言特点',
            explanation: '散文语言优美（用词生动、修辞丰富）又含蓄（言外有意、回味悠长）。'
          },
          {
            id: 'c6u3l2q2',
            type: 'choice',
            question: '"小草偷偷地从土里钻出来"中"偷偷地""钻"用了什么修辞？',
            options: ['比喻', '拟人', '排比'],
            answer: '拟人',
            hint: '把小草当成人来写',
            explanation: '"偷偷地""钻"把小草当成人来写，赋予小草人的动作，是拟人修辞。'
          },
          {
            id: 'c6u3l2q3',
            type: 'fill',
            question: '品味散文语言"三看"：看用词、看修辞、看___',
            answer: '节奏',
            acceptableAnswers: ['节奏', '音韵'],
            hint: '长短句叠词的美感',
            explanation: '品味散文语言三看：看用词（精准生动）、看修辞（比喻拟人等）、看节奏（长短句、叠词的音韵美）。'
          },
          {
            id: 'c6u3l2q4',
            type: 'choice',
            question: '"地上本没有路，走的人多了，也便成了路"这句话的语言特点是？',
            options: ['直白简单', '含蓄有言外之意', '夸张幽默'],
            answer: '含蓄有言外之意',
            hint: '表面写路，实则表达什么',
            explanation: '这句话表面写路，实则含蓄表达"希望要靠行动去创造"，言外有意，回味悠长。'
          },
          {
            id: 'c6u3l2q5',
            type: 'choice',
            question: '【期末真题】"嫩嫩的，绿绿的"这两个叠词在散文中的作用是？',
            options: ['增加字数', '增强音韵美和节奏感', '让人看不懂'],
            answer: '增强音韵美和节奏感',
            hint: '叠词读起来有什么感觉',
            explanation: '叠词"嫩嫩的""绿绿的"读起来朗朗上口，增强了散文的音韵美和节奏感。这是期末常考的语言赏析题！'
          },
          {
            id: 'c6u3l2q6',
            type: 'drag',
            question: '把语句拖到对应特点：优美 / 含蓄\n"小草偷偷地钻出来" "走的人多了便成了路" "嫩嫩的绿绿的" "希望本无所谓有无"',
            answer: '优美-小草偷偷地钻出来,优美-嫩嫩的绿绿的,含蓄-走的人多了便成了路,含蓄-希望本无所谓有无',
            hint: '生动形象是优美，言外有意是含蓄',
            explanation: '"偷偷地钻""嫩嫩绿绿"用词生动形象是优美；"成了路""希望无所谓有"言外有意是含蓄。'
          },
          {
            id: 'c6u3l2q7',
            type: 'fill',
            question: '“飞流直下三千尺”用了___的修辞手法',
            answer: '夸张',
            hint: '[修辞手法]（五年级语文-第1单元）',
            explanation: '“三千尺”故意夸大，是夸张修辞，突出瀑布之高。'
          }
        ]
      },
      {
        id: 'c6u3l3',
        title: '散文情感——找情感线索',
        order: 3,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '散文以抒情为主，情感是散文的灵魂。很多散文有一条情感线索贯穿全文，情感会随着内容变化。找到情感线索，就能把握散文的情感脉络。', animationType: 'bounce' },
          { type: 'example', content: '情感线索示例：\n《背影》的情感变化：\n开头：淡淡的感伤（想起父亲）\n中间：感动愧疚（看到父亲买橘子的背影）\n结尾：深深的思念（泪光中再现背影）\n→情感线索：感伤→感动→思念', label: '情感线索示例', animationType: 'bounce' },
          { type: 'tip', content: '找情感线索三步：①找情感词——高兴、悲伤、感动等；②看情感变化——从什么情感到什么情感；③连成线索——把情感变化串联起来。', label: '找情感线索三步', animationType: 'pulse' },
          { type: 'example', content: '常见情感线索类型：\n①以物为线索——借某物抒发情感\n②以时间为线索——随时间推移情感变化\n③以地点为线索——随地点转换情感不同\n④以事件为线索——围绕一件事抒发情感', label: '线索类型', animationType: 'bounce' },
          { type: 'animation', content: '情感变化曲线动画：横轴是文章段落，纵轴是情感强度，曲线随段落变化起伏，展示情感从感伤到感动到思念的变化', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '情感变化曲线',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '开头', text: '淡淡感伤', ttsNarration: '开头：想起父亲，淡淡的感伤' },
                  { id: 's2', description: '中间', text: '感动愧疚', ttsNarration: '中间：看到背影，感动愧疚' },
                  { id: 's3', description: '结尾', text: '深深思念', ttsNarration: '结尾：泪光中再现背影，深深思念' },
                ],
              },
              ttsNarration: '散文情感线索：感伤→感动→思念，情感贯穿全文！',
            },
          },
          { type: 'tip', content: '小窍门：找情感线索要关注文中直接表达情感的词语，也要留意间接透露情感的描写，两者结合更准确。', label: '找线索窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范找情感线索：以一篇散文为例，标出情感词和情感变化。',
        weDo: '亲子一起找情感线索，讨论情感如何变化。',
        youDo: '孩子独立找一篇散文的情感线索，画出情感变化曲线。',
        parentTips: '情感线索是贯穿全文的感情变化。帮孩子找情感词，理清情感脉络。',
        funElement: '情感心电图：把散文的情感变化画成"心电图"，感伤是低谷，感动是高峰，看谁的"情感心电图"画得最准！',
        gsapAnimations: [
          'GSAP:timeline|情感变化曲线|1.5s|点击播放|power2.out',
          'GSAP:highlight|情感词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|情感线索图|500x300|教学风|png|情感曲线',
        ],
        practiceQuestions: [
          {
            id: 'c6u3l3q1',
            type: 'choice',
            question: '散文的灵魂是什么？',
            options: ['情节', '情感', '环境'],
            answer: '情感',
            hint: '散文以什么为主',
            explanation: '散文以抒情为主，情感是散文的灵魂，贯穿全文。'
          },
          {
            id: 'c6u3l3q2',
            type: 'choice',
            question: '找情感线索的第一步是？',
            options: ['找情感词', '画曲线图', '背全文'],
            answer: '找情感词',
            hint: '回忆找情感线索三步',
            explanation: '找情感线索三步：①找情感词 ②看情感变化 ③连成线索。第一步是找情感词。'
          },
          {
            id: 'c6u3l3q3',
            type: 'fill',
            question: '《背影》的情感线索是：感伤→感动→___',
            answer: '思念',
            acceptableAnswers: ['思念', '深深思念'],
            hint: '结尾的情感是什么',
            explanation: '《背影》情感线索：开头感伤→中间感动→结尾思念，情感层层深入。'
          },
          {
            id: 'c6u3l3q4',
            type: 'choice',
            question: '"他高兴得跳了起来"中，情感线索上的情感词是？',
            options: ['跳了起来', '高兴', '他'],
            answer: '高兴',
            hint: '哪个词直接表达情感',
            explanation: '"高兴"是直接表达情感的词语，是情感线索上的情感词。"跳了起来"是动作，"他"是人物。'
          },
          {
            id: 'c6u3l3q5',
            type: 'choice',
            question: '【期末真题】散文中"情感线索"的作用是？',
            options: ['增加字数', '贯穿全文串联情感变化', '介绍人物外貌'],
            answer: '贯穿全文串联情感变化',
            hint: '线索像什么一样贯穿全文',
            explanation: '情感线索贯穿全文，串联起作者情感的变化，是把握散文情感脉络的关键。这是期末常考题！'
          },
          {
            id: 'c6u3l3q6',
            type: 'drag',
            question: '把情感按变化顺序排列：感伤、感动、思念',
            answer: '感伤,感动,思念',
            hint: '《背影》的情感是怎么层层深入的',
            explanation: '《背影》情感线索：感伤（开头）→感动（中间）→思念（结尾），层层深入。'
          },
          {
            id: 'c6u3l3q7',
            type: 'fill',
            question: '把事情的经过按时间先后顺序写，这种顺序叫___叙',
            answer: '顺',
            hint: '[记叙顺序]（五年级语文-第2单元）',
            explanation: '按事情发生发展的先后顺序来写，是顺叙，是最常用的记叙顺序。'
          }
        ]
      },
      {
        id: 'c6u3l4',
        title: '散文仿写——学习表达',
        order: 4,
        teachingMethod: '布鲁姆·创造层',
        content: [
          { type: 'text', content: '品读了散文的语言和情感，现在我们试着仿写散文。仿写不是照抄，而是学习名家散文的表达方式和语言风格，写出自己的文字。从模仿到创造，逐步形成自己的写作风格。', animationType: 'bounce' },
          { type: 'example', content: '仿写示例：\n原文："小草偷偷地从土里钻出来，嫩嫩的，绿绿的。"\n仿写："小花悄悄地从枝头探出头，艳艳的，香香的。"\n→学习了拟人修辞和叠词用法', label: '仿写示例', animationType: 'bounce' },
          { type: 'tip', content: '仿写三步走：①读原文——体会表达方式和语言风格；②找特点——用了什么修辞、什么句式；③仿写——用相同手法写自己的内容。', label: '仿写三步走', animationType: 'pulse' },
          { type: 'example', content: '可仿写的方面：\n①修辞手法——拟人、比喻、排比\n②句式结构——长短句结合、叠词\n③表达方式——描写、抒情、议论\n④语言风格——优美、朴实、幽默', label: '仿写方面', animationType: 'bounce' },
          { type: 'animation', content: '散文仿写逐字出现动画：原文句子和仿写句子并排展示，逐字出现，高亮对应的修辞手法和句式', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '散文仿写对照',
              sequenceConfig: {
                items: ['原文：小草偷偷地钻出来', '仿写：小花悄悄地探出头', '手法：拟人+叠词'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '仿写不是照抄，而是学习修辞和句式，写出自己的文字！',
            },
          },
          { type: 'tip', content: '仿写提醒：要"神似"不要"形似"。学的是方法不是内容，用自己的观察和感受去写，才能写出真情实感。', label: '仿写提醒', animationType: 'pulse' },
        ],
        iDo: '家长示范仿写散文片段：读一句原文，分析特点，再仿写一句。',
        weDo: '亲子一起仿写：选一句散文，一起分析特点并仿写。',
        youDo: '孩子独立仿写一段散文，学习名家的表达方式。',
        parentTips: '仿写散文的表达方式和语言风格，从模仿到创造。重点是学方法不是抄内容。',
        funElement: '散文接力赛：爸爸写一句仿写，妈妈接一句，孩子再接一句，看接出来的散文像不像名家的风格！',
        gsapAnimations: [
          'GSAP:sequence|散文仿写逐字出现|2s|点击播放|power1.inOut',
          'GSAP:highlight|修辞手法高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|仿写模板|400x300|教学风|png|模板',
        ],
        practiceQuestions: [
          {
            id: 'c6u3l4q1',
            type: 'choice',
            question: '散文仿写的目的是什么？',
            options: ['照抄原文', '学习表达方式和语言风格', '背下原文'],
            answer: '学习表达方式和语言风格',
            hint: '仿写是模仿还是创造',
            explanation: '仿写的目的是学习名家的表达方式和语言风格，从模仿到创造，写出自己的文字。'
          },
          {
            id: 'c6u3l4q2',
            type: 'choice',
            question: '仿写三步走的正确顺序是？',
            options: ['找特点→读原文→仿写', '读原文→找特点→仿写', '仿写→读原文→找特点'],
            answer: '读原文→找特点→仿写',
            hint: '先读再分析最后写',
            explanation: '仿写三步走：①读原文体会表达 ②找特点（修辞句式） ③用相同手法仿写。'
          },
          {
            id: 'c6u3l4q3',
            type: 'fill',
            question: '"小草偷偷地钻出来"仿写为"小花___地探出头"，填入合适的词',
            answer: '悄悄',
            acceptableAnswers: ['悄悄', '慢慢', '轻轻'],
            hint: '学原文"偷偷地"的拟人叠词',
            explanation: '仿写学习原文"偷偷地"的拟人叠词手法，填"悄悄地"保持风格一致。'
          },
          {
            id: 'c6u3l4q4',
            type: 'choice',
            question: '仿写"嫩嫩的，绿绿的"这一叠词句式，下列哪句最好？',
            options: ['红的，大的', '艳艳的，香香的', '花很美丽'],
            answer: '艳艳的，香香的',
            hint: '要学叠词句式',
            explanation: '"艳艳的，香香的"学习了原文"嫩嫩的，绿绿的"叠词句式，结构一致，是好的仿写。'
          },
          {
            id: 'c6u3l4q5',
            type: 'choice',
            question: '【期末真题】散文仿写最重要的是？',
            options: ['照抄原文内容', '神似——学方法写自己的感受', '字数要和原文一样'],
            answer: '神似——学方法写自己的感受',
            hint: '仿写是学方法还是抄内容',
            explanation: '散文仿写最重要的是"神似"——学习表达方法，用自己的观察和感受去写，而不是照抄原文内容。这是期末常考的写作要求！'
          },
          {
            id: 'c6u3l4q6',
            type: 'drag',
            question: '把仿写三步按顺序排列：读原文、找特点、仿写',
            answer: '读原文,找特点,仿写',
            hint: '先读再分析最后写',
            explanation: '仿写三步走：读原文（体会表达）→找特点（修辞句式）→仿写（用相同手法）。'
          },
          {
            id: 'c6u3l4q7',
            type: 'fill',
            question: '“太阳像个大火球”用了___修辞',
            answer: '比喻',
            hint: '[修辞手法]（五年级语文-第1单元）',
            explanation: '“像”是比喻标志，把太阳比作大火球，是比喻修辞。'
          }
        ]
      },
      {
        id: 'c6u3l5',
        title: '散文鉴赏综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '学完了散文鉴赏，让我们综合检测一下！这节课我们将阅读散文，分析形散神聚、品味语言、找情感线索，看看你掌握了多少。', animationType: 'bounce' },
          { type: 'tip', content: '检测小贴士：读散文先找"形"和"神"，再品味语言，最后找情感线索。做错的题回到前面复习。', label: '检测提示', animationType: 'pulse' },
          { type: 'example', content: '复习要点：\n①散文特点：形散神聚\n②散文语言：优美与含蓄\n③情感线索：贯穿全文的感情变化\n④散文仿写：神似不形似', label: '复习要点', animationType: 'bounce' },
          { type: 'animation', content: '通关撒花动画：完成检测，正确率≥75%撒花庆祝，获得"散文鉴赏小达人"徽章', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '散文鉴赏达人通关',
              sequenceConfig: { items: ['形散神聚', '优美含蓄', '情感线索', '通关撒花！'], order: 'custom', itemType: 'word' },
              ttsNarration: '恭喜你完成散文鉴赏综合检测，你是散文鉴赏小达人！',
            },
          },
          { type: 'tip', content: '读散文口诀：先找形和神，再品语言美，情感找线索，仿写求神似。', label: '鉴赏口诀', animationType: 'pulse' },
          { type: 'text', content: '散文鉴赏检测常考"找中心（神）"。方法是：把散文里所有材料列出来，问自己"作者写这些想表达什么？"那个共同的主题就是"神"。如《春》写春草春花春风春雨，"神"就是赞美春天。', animationType: 'reveal' },
          { type: 'example', content: '例题：找出下面句子的"神"。"春天的草嫩嫩的，春天的花艳艳的，春风柔柔地吹过脸庞。"\n→三个材料都写春天的美好\n→"神"是表达对春天的喜爱与赞美之情', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范检测：做一道散文鉴赏题，示范如何分析形散神聚、品味语言。',
        weDo: '亲子一起练习：读一段散文，一起鉴赏。',
        youDo: '孩子独立完成散文鉴赏测试，分析特点、品味语言、找情感线索。',
        parentTips: '散文阅读理解，正确率≥75%就很棒。错了的题回到对应课时复习。',
        funElement: '散文鉴赏达人挑战：完成全部检测题，正确率≥75%获得"散文鉴赏小达人"金色徽章！',
        gsapAnimations: [
          'GSAP:confetti|通关撒花|2s|正确率≥75%|power1.out|particleCount:40',
          'GSAP:highlight|检测要点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|散文鉴赏徽章|300x300|可爱卡通风|png|金色徽章',
        ],
        practiceQuestions: [
          {
            id: 'c6u3l5q1',
            type: 'choice',
            question: '散文最大的特点是？',
            options: ['形散神聚', '人物情节环境', '论点论据论证'],
            answer: '形散神聚',
            hint: '回忆散文特点',
            explanation: '散文最大的特点是"形散神聚"：形散（取材自由）神聚（中心统一）。'
          },
          {
            id: 'c6u3l5q2',
            type: 'choice',
            question: '散文语言的突出特点是？',
            options: ['简单直白', '优美与含蓄', '夸张幽默'],
            answer: '优美与含蓄',
            hint: '回忆散文语言特点',
            explanation: '散文语言优美（生动形象）又含蓄（言外有意）。'
          },
          {
            id: 'c6u3l5q3',
            type: 'fill',
            question: '散文的"灵魂"是___',
            answer: '情感',
            hint: '散文以什么为主',
            explanation: '散文以抒情为主，情感是散文的灵魂，贯穿全文。'
          },
          {
            id: 'c6u3l5q4',
            type: 'choice',
            question: '"小草偷偷地从土里钻出来"用了什么修辞？',
            options: ['比喻', '拟人', '排比'],
            answer: '拟人',
            hint: '把小草当人写',
            explanation: '"偷偷地""钻"把小草当人写，赋予人的动作，是拟人修辞。'
          },
          {
            id: 'c6u3l5q5',
            type: 'choice',
            question: '【期末真题】下列对散文"形散神聚"理解正确的是？',
            options: ['材料散乱无中心', '取材自由但中心统一', '只写一件事'],
            answer: '取材自由但中心统一',
            hint: '形散神聚的真正含义',
            explanation: '形散神聚指取材自由（形散）但中心统一（神聚），材料散落却都围绕一个中心。这是期末常考题！'
          },
          {
            id: 'c6u3l5q6',
            type: 'drag',
            question: '把散文鉴赏步骤按顺序排列：找形和神、品语言、找情感线索、仿写',
            answer: '找形和神,品语言,找情感线索,仿写',
            hint: '先找特点再品语言再找情感最后仿写',
            explanation: '散文鉴赏步骤：找形和神→品语言→找情感线索→仿写，层层深入。'
          },
          {
            id: 'c6u3l5q7',
            type: 'fill',
            question: '"太阳像个大火球"用了___比喻',
            answer: '明',
            hint: '[修辞手法]（五年级语文-第1单元）',
            explanation: '明喻是用"像、好像、仿佛"连接本体和喻体的比喻，是五年级修辞手法学过的。'
          }
        ]
      }
    ]
  },

  // ==================== 第四单元：记叙文提升——细节描写 ====================
  {
    id: 'c6u4',
    title: '记叙文提升——细节描写',
    subtitle: '细节描写',
    order: 4,
    lessons: [
      {
        id: 'c6u4l1',
        title: '细节描写——外貌细节',
        order: 1,
        teachingMethod: '支架式：放大镜法',
        content: [
          { type: 'text', content: '细节描写是记叙文的灵魂。外貌细节描写用"放大镜法"——聚焦人物的一个特征，细致地描写，让人物形象鲜活起来。不要面面俱到，要抓住最有个性的特征。', animationType: 'bounce' },
          { type: 'example', content: '普通描写：他是个老爷爷，头发白了。\n细节描写（放大镜法）：他的头发像落了一层薄雪，银白银白的，在阳光下闪着柔和的光，额头的皱纹像刀刻的一样深。\n→聚焦"白发"和"皱纹"两个特征细致描写', label: '放大镜法对比', animationType: 'bounce' },
          { type: 'tip', content: '放大镜法三步：①选特征——选最有特点的外貌；②细观察——看清颜色、形状、状态；③用比喻——用比喻让描写更生动。', label: '放大镜法三步', animationType: 'pulse' },
          { type: 'example', content: '外貌细节可写的方面：\n头发：颜色、光泽、形状\n眼睛：大小、神态、光芒\n手：粗糙、细腻、老茧\n衣着：颜色、款式、整洁度', label: '外貌细节方面', animationType: 'bounce' },
          { type: 'animation', content: '外貌特征放大展示动画：选中"白发"特征后放大展示，配合比喻句出现，突出细节描写的聚焦效果', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '放大镜法：外貌细节',
              sceneBuildConfig: {
                sceneName: '外貌放大',
                elements: [
                  { id: 'e1', text: '聚焦：白发', x: 50, y: 30, size: 'lg', color: '#E0E0E0', animation: 'scaleIn' },
                  { id: 'e2', text: '像落了一层薄雪', x: 30, y: 55, size: 'md', color: '#90CAF9', animation: 'fadeIn' },
                  { id: 'e3', text: '银白发亮', x: 70, y: 55, size: 'md', color: '#BDBDBD', animation: 'slideIn' },
                  { id: 'e4', text: '阳光下闪着光', x: 50, y: 75, size: 'md', color: '#FFD54F', animation: 'popIn' },
                ],
              },
              ttsNarration: '放大镜法：聚焦白发特征，用比喻细致描写，让人物形象鲜活！',
            },
          },
          { type: 'tip', content: '小窍门：写外貌细节不要"五官俱全"地罗列，抓住一两个最有特点的地方写细写透，效果更好。', label: '描写窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范用放大镜法写外貌细节：聚焦一个特征细致描写。',
        weDo: '亲子一起用放大镜法写外貌，互相修改。',
        youDo: '孩子独立用放大镜法写一段外貌细节描写。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“外貌细节用什么方法？”②孩子应答：“放大镜法，聚焦一个最有特点的特征细致描写。”③答错引导：若孩子面面俱到，家长让孩子只写同桌的“眼睛”一个特征，像放大镜一样写细。④快速出题：家长指定“奶奶的手”，孩子用放大镜法写2句。',
        funElement: '放大镜侦探：拿一个放大镜（或用手比划），观察家人的一个外貌特征，用放大镜法描写出来，看谁写得最传神！',
        gsapAnimations: [
          'GSAP:sceneBuild|外貌特征放大展示|0.8s|点击|power2.out',
          'GSAP:highlight|外貌特征高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|放大镜描写图|500x300|可爱卡通风|png|放大镜+特征',
        ],
        practiceQuestions: [
          {
            id: 'c6u4l1q1',
            type: 'choice',
            question: '外貌细节描写的"放大镜法"核心是什么？',
            options: ['面面俱到写全貌', '聚焦一个特征细致描写', '只写衣服不写脸'],
            answer: '聚焦一个特征细致描写',
            hint: '放大镜是放大一个点',
            explanation: '放大镜法的核心是聚焦人物一个最有特点的特征，细致地描写，让人物形象鲜活。'
          },
          {
            id: 'c6u4l1q2',
            type: 'choice',
            question: '下列哪句是好的外貌细节描写？',
            options: ['他长得很好看', '他的头发像落了一层薄雪，银白发亮', '他有眼睛鼻子嘴巴'],
            answer: '他的头发像落了一层薄雪，银白发亮',
            hint: '哪句聚焦特征并用了比喻',
            explanation: '"头发像落了一层薄雪，银白发亮"聚焦白发特征并用比喻，是好的外貌细节描写。'
          },
          {
            id: 'c6u4l1q3',
            type: 'fill',
            question: '放大镜法三步：选特征、细观察、用___',
            answer: '比喻',
            hint: '用什么让描写更生动',
            explanation: '放大镜法三步：选特征、细观察、用比喻，让外貌细节描写更生动形象。'
          },
          {
            id: 'c6u4l1q4',
            type: 'choice',
            question: '"她的眼睛像两颗黑葡萄，亮晶晶的"这句话聚焦了哪个外貌特征？',
            options: ['头发', '眼睛', '手'],
            answer: '眼睛',
            hint: '描写的是哪个部位',
            explanation: '这句话聚焦"眼睛"这个特征，用"黑葡萄"比喻，是放大镜法的运用。'
          },
          {
            id: 'c6u4l1q5',
            type: 'choice',
            question: '【期末真题】外貌细节描写应该？',
            options: ['五官俱全面面俱到', '抓住一两个最有特点的特征写细写透', '只写穿着不写长相'],
            answer: '抓住一两个最有特点的特征写细写透',
            hint: '细节描写要聚焦还是罗列',
            explanation: '外貌细节描写不要面面俱到地罗列，而要抓住一两个最有特点的特征写细写透，效果更好。这是期末常考的写作要求！'
          },
          {
            id: 'c6u4l1q6',
            type: 'drag',
            question: '把描写拖到正确类别：细节描写 / 普通描写\n"头发像薄雪银白" "他是个老人" "皱纹像刀刻一样深" "他长得很老"',
            answer: '细节描写-头发像薄雪银白,细节描写-皱纹像刀刻一样深,普通描写-他是个老人,普通描写-他长得很老',
            hint: '有比喻有聚焦的是细节描写',
            explanation: '"头发像薄雪""皱纹像刀刻"有比喻有聚焦是细节描写；"是个老人""长得很老"笼统模糊是普通描写。'
          },
          {
            id: 'c6u4l1q7',
            type: 'fill',
            question: '记叙文六要素中，要把___作为重点写详细',
            answer: '经过',
            hint: '[记叙文六要素]（五年级语文-第2单元）',
            explanation: '记叙文六要素中，“经过”是事情的发展过程，要作为重点写详细。'
          }
        ]
      },
      {
        id: 'c6u4l2',
        title: '细节描写——动作细节',
        order: 2,
        teachingMethod: '多感官：慢镜头法',
        content: [
          { type: 'text', content: '动作细节描写用"慢镜头法"——把一个快速的动作分解成几个连续的慢动作，像电影慢镜头一样，让动作清晰生动。把1秒的动作写成3句，动作就有了画面感。', animationType: 'bounce' },
          { type: 'example', content: '普通描写：他接住了球。\n慢镜头法（分解动作）：他猛地一蹬地，身体腾空而起，双手在空中稳稳地抱住了飞来的篮球，落地时膝盖微微弯曲缓冲。\n→把"接球"分解成"蹬地→腾空→抱球→落地"四个动作', label: '慢镜头法对比', animationType: 'bounce' },
          { type: 'tip', content: '慢镜头法三步：①拆动作——把一个动作拆成几个小动作；②加修饰——用动词和修饰语让动作清晰；③连成串——把小动作按顺序连起来。', label: '慢镜头法三步', animationType: 'pulse' },
          { type: 'example', content: '动作分解示例：\n"喝水"→拿起杯子→凑到嘴边→仰起头→咕咚咕咚喝下→放下杯子\n"开门"→伸手握住门把→轻轻转动→用力一推→门开了', label: '动作分解', animationType: 'bounce' },
          { type: 'animation', content: '动作慢镜头分解动画：一个动作分解成几个连续小动作，依次出现，像慢镜头回放', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '动作慢镜头分解',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '动作1', text: '猛地蹬地', ttsNarration: '第一帧：猛地蹬地' },
                  { id: 's2', description: '动作2', text: '腾空而起', ttsNarration: '第二帧：身体腾空而起' },
                  { id: 's3', description: '动作3', text: '双手抱球', ttsNarration: '第三帧：双手稳稳抱住篮球' },
                  { id: 's4', description: '动作4', text: '落地缓冲', ttsNarration: '第四帧：落地时膝盖弯曲缓冲' },
                ],
              },
              ttsNarration: '慢镜头法：把一个动作拆成几个小动作，像慢镜头一样写清楚！',
            },
          },
          { type: 'tip', content: '用好动词是关键：不用"走"而用"踱、蹿、溜、蹭"，不用"看"而用"瞄、盯、瞥、望"，动词越精准动作越生动。', label: '用好动词', animationType: 'pulse' },
        ],
        iDo: '家长示范用慢镜头法写动作：把一个动作分解成几个小动作细致描写。',
        weDo: '亲子一起用慢镜头法写动作，互相修改。',
        youDo: '孩子独立用慢镜头法写一段动作细节描写。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“动作细节用什么方法？”②孩子应答：“慢镜头法，把一个动作分解成几个小动作。”③答错引导：若孩子只写“他喝水”，家长让分解成“拿起杯子-送到嘴边-仰头咕咚喝下”，强调用好动词。④快速出题：家长说“开门”动作，孩子用慢镜头法分解成3句。',
        funElement: '慢动作表演：全家一起做"慢动作表演"——用最慢的速度做一个动作，其他人用慢镜头法描述出来，看谁描述得最清楚！',
        gsapAnimations: [
          'GSAP:timeline|动作慢镜头分解|1.5s|点击播放|power2.out',
          'GSAP:highlight|动词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|慢镜头分解图|500x300|可爱卡通风|png|动作分解',
        ],
        practiceQuestions: [
          {
            id: 'c6u4l2q1',
            type: 'choice',
            question: '动作细节描写的"慢镜头法"核心是什么？',
            options: ['把动作写得很快', '把一个动作分解成几个小动作', '只写一个动词'],
            answer: '把一个动作分解成几个小动作',
            hint: '慢镜头是把快变慢',
            explanation: '慢镜头法的核心是把一个快速动作分解成几个连续的小动作，像慢镜头一样写清楚。'
          },
          {
            id: 'c6u4l2q2',
            type: 'choice',
            question: '下列哪句用了慢镜头法？',
            options: ['他接住了球', '他蹬地腾空，双手稳稳抱住篮球，落地缓冲', '球被他接住了'],
            answer: '他蹬地腾空，双手稳稳抱住篮球，落地缓冲',
            hint: '哪句把动作分解了',
            explanation: '"蹬地腾空→抱球→落地缓冲"把接球分解成几个小动作，用了慢镜头法。'
          },
          {
            id: 'c6u4l2q3',
            type: 'fill',
            question: '慢镜头法的关键是用好___（填一种词性）',
            answer: '动词',
            hint: '什么词让动作更精准',
            explanation: '慢镜头法的关键是用好动词，动词越精准（如踱、蹿、瞄、盯）动作越生动。'
          },
          {
            id: 'c6u4l2q4',
            type: 'choice',
            question: '把"喝水"用慢镜头法分解，下列分解最合理的是？',
            options: ['拿起杯子→凑到嘴边→仰头喝下→放下杯子', '喝水→喝水→喝水', '杯子→水→嘴'],
            answer: '拿起杯子→凑到嘴边→仰头喝下→放下杯子',
            hint: '要按动作的先后顺序',
            explanation: '"拿起杯子→凑到嘴边→仰头喝下→放下杯子"按动作先后顺序分解，最合理。'
          },
          {
            id: 'c6u4l2q5',
            type: 'choice',
            question: '【期末真题】"他蹑手蹑脚地走到门后"中"蹑手蹑脚"比"走"好在哪里？',
            options: ['字数多', '更精准地表现小心翼翼的动作', '更难写'],
            answer: '更精准地表现小心翼翼的动作',
            hint: '这个动词表现了什么状态',
            explanation: '"蹑手蹑脚"比"走"更精准地表现了小心翼翼、怕被发现的状态，动词用得准动作才生动。这是期末常考的动作描写赏析！'
          },
          {
            id: 'c6u4l2q6',
            type: 'drag',
            question: '把"开门"动作按慢镜头法顺序排列：握住门把、转动门把、用力一推、门开了',
            answer: '握住门把,转动门把,用力一推,门开了',
            hint: '按动作先后顺序',
            explanation: '开门慢镜头分解：握住门把→转动门把→用力一推→门开了，按先后顺序。'
          },
          {
            id: 'c6u4l2q7',
            type: 'fill',
            question: '描写人物可用外貌、语言、动作、神态和___描写',
            answer: '心理',
            hint: '[人物描写方法]（五年级语文-第2单元）',
            explanation: '人物描写方法有外貌、语言、动作、神态、心理，多角度描写人物更生动。'
          }
        ]
      },
      {
        id: 'c6u4l3',
        title: '细节描写——心理细节',
        order: 3,
        teachingMethod: '支架式：内心独白法',
        content: [
          { type: 'text', content: '心理细节描写用"内心独白法"——把人物心里想的话写出来，让读者看到人物的内心世界。心理描写能让人物更真实、情感更动人。', animationType: 'bounce' },
          { type: 'example', content: '普通描写：他很紧张。\n内心独白法：他的心怦怦直跳，手心全是汗。"千万别叫到我，千万别叫到我……"他在心里一遍遍默念，腿却忍不住发抖。\n→写出心里想的"千万别叫到我"', label: '内心独白法对比', animationType: 'bounce' },
          { type: 'tip', content: '心理描写四种方法：①内心独白——直接写心里想的话；②动作暗示——用动作表现心理；③神态表现——用表情表现心理；④环境烘托——用环境衬托心理。', label: '心理描写四法', animationType: 'pulse' },
          { type: 'example', content: '心理描写示例：\n内心独白："完了完了，这次肯定考砸了。"\n动作暗示：他不停地咬着嘴唇，手指绞在一起。\n神态表现：他的脸涨得通红，眼神躲闪不定。\n环境烘托：窗外乌云密布，和他低落的心情一样沉重。', label: '四种心理描写', animationType: 'bounce' },
          { type: 'animation', content: '心理活动气泡翻转动画：点击人物头像，思考气泡翻转显示内心独白，揭示人物心理', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '内心独白',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '😨', back: '"千万别叫到我"', ttsText: '内心独白：千万别叫到我' },
                  { id: 'c1', front: '😰', back: '心怦怦跳，手心出汗', ttsText: '动作暗示：心怦怦跳，手心出汗' },
                  { id: 'c2', front: '😳', back: '脸涨通红，眼神躲闪', ttsText: '神态表现：脸涨通红，眼神躲闪' },
                ],
              },
              ttsNarration: '心理描写四种方法：内心独白、动作暗示、神态表现、环境烘托！',
            },
          },
          { type: 'tip', content: '小窍门：写心理要真实，把自己代入人物去想。紧张时心里会默念什么？高兴时心里会喊什么？写出真实的心理才动人。', label: '心理描写窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范写心理活动：用内心独白法写出人物心里想的话。',
        weDo: '亲子一起写心理活动，互相修改。',
        youDo: '孩子独立用内心独白法写一段心理细节描写。',
        parentTips: '内心独白法：写出心里在想什么。心理描写让人物更真实、情感更动人。',
        funElement: '心里话气泡：想象自己是故事人物，把心里想的话写在"心里话气泡"里，看谁的心理描写最真实最动人！',
        gsapAnimations: [
          'GSAP:cardReveal|心理活动气泡翻转|0.5s|点击|power2.inOut',
          'GSAP:highlight|心理词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|心理活动图|500x300|可爱卡通风|png|思考气泡',
        ],
        practiceQuestions: [
          {
            id: 'c6u4l3q1',
            type: 'choice',
            question: '心理细节描写的"内心独白法"核心是什么？',
            options: ['写出人物外貌', '写出人物心里想的话', '写出人物动作'],
            answer: '写出人物心里想的话',
            hint: '内心独白是心里的什么',
            explanation: '内心独白法的核心是写出人物心里想的话，让读者看到人物的内心世界。'
          },
          {
            id: 'c6u4l3q2',
            type: 'choice',
            question: '下列哪句用了内心独白法？',
            options: ['他手心出汗', '"千万别叫到我"他在心里默念', '他脸红了'],
            answer: '"千万别叫到我"他在心里默念',
            hint: '哪句直接写心里想的话',
            explanation: '"千万别叫到我"直接写出人物心里想的话，是内心独白法。手心出汗是动作暗示，脸红是神态表现。'
          },
          {
            id: 'c6u4l3q3',
            type: 'fill',
            question: '心理描写四种方法：内心独白、动作暗示、神态表现和___烘托',
            answer: '环境',
            hint: '用环境衬托心理',
            explanation: '心理描写四种方法：内心独白、动作暗示、神态表现、环境烘托。'
          },
          {
            id: 'c6u4l3q4',
            type: 'choice',
            question: '"他不停地咬着嘴唇，手指绞在一起"属于哪种心理描写？',
            options: ['内心独白', '动作暗示', '环境烘托'],
            answer: '动作暗示',
            hint: '咬嘴唇、绞手指是动作还是想法',
            explanation: '"咬嘴唇""绞手指"是动作，用动作表现紧张的心理，属于动作暗示。'
          },
          {
            id: 'c6u4l3q5',
            type: 'choice',
            question: '【期末真题】"窗外乌云密布，和他低落的心情一样沉重"属于哪种心理描写？',
            options: ['内心独白', '动作暗示', '环境烘托'],
            answer: '环境烘托',
            hint: '用窗外的天气衬托心情',
            explanation: '用"窗外乌云密布"的环境来衬托人物低落的心情，属于环境烘托。这是期末常考的心理描写辨析！'
          },
          {
            id: 'c6u4l3q6',
            type: 'drag',
            question: '把描写拖到正确类别：内心独白 / 动作暗示 / 神态表现\n"完了完了考砸了" "咬嘴唇绞手指" "脸红眼神躲闪"',
            answer: '内心独白-完了完了考砸了,动作暗示-咬嘴唇绞手指,神态表现-脸红眼神躲闪',
            hint: '心里话是独白，动作是暗示，表情是神态',
            explanation: '"完了完了"是心里话（内心独白），"咬嘴唇绞手指"是动作（动作暗示），"脸红眼神躲闪"是表情（神态表现）。'
          },
          {
            id: 'c6u4l3q7',
            type: 'fill',
            question: '描写人物内心活动属于___描写',
            answer: '心理',
            hint: '[人物描写方法]（五年级语文-第2单元）',
            explanation: '人物描写方法有外貌、语言、动作、神态、心理，写内心活动属于心理描写。'
          }
        ]
      },
      {
        id: 'c6u4l4',
        title: '细节描写——环境细节',
        order: 4,
        teachingMethod: '多感官：五感法',
        content: [
          { type: 'text', content: '环境细节描写用"五感法"——调动视觉、听觉、嗅觉、味觉、触觉五种感官，多角度描写环境，让读者身临其境。用五感写环境，画面就立体起来了。', animationType: 'bounce' },
          { type: 'example', content: '五感法示例（写清晨的公园）：\n视觉：晨光透过树叶洒下斑驳的光影\n听觉：鸟儿在枝头叽叽喳喳地唱歌\n嗅觉：空气中飘来淡淡的花香\n味觉：嘴里还留着早餐豆浆的甜味\n触觉：微风拂过脸颊，凉丝丝的', label: '五感法示例', animationType: 'bounce' },
          { type: 'tip', content: '五感法口诀：眼睛看（视觉）、耳朵听（听觉）、鼻子闻（嗅觉）、嘴巴尝（味觉）、皮肤触（触觉），五感齐上阵，环境写立体。', label: '五感口诀', animationType: 'pulse' },
          { type: 'example', content: '五感对应问题：\n视觉——看到了什么颜色、形状？\n听觉——听到了什么声音？\n嗅觉——闻到了什么气味？\n味觉——尝到了什么味道？\n触觉——摸到了什么感觉？', label: '五感问题', animationType: 'bounce' },
          { type: 'animation', content: '五感环境逐步出现动画：视觉、听觉、嗅觉、味觉、触觉五种感官的图标和描写依次出现，构建立体环境画面', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '五感法：环境细节',
              sceneBuildConfig: {
                sceneName: '清晨公园',
                elements: [
                  { id: 'e1', text: '视觉：斑驳光影', emoji: '👀', x: 20, y: 30, size: 'md', color: '#FFB74D', animation: 'popIn' },
                  { id: 'e2', text: '听觉：鸟儿唱歌', emoji: '👂', x: 50, y: 25, size: 'md', color: '#81C784', animation: 'fadeIn' },
                  { id: 'e3', text: '嗅觉：淡淡花香', emoji: '👃', x: 80, y: 30, size: 'md', color: '#F06292', animation: 'slideIn' },
                  { id: 'e4', text: '味觉：豆浆甜味', emoji: '👅', x: 35, y: 65, size: 'md', color: '#7986CB', animation: 'scaleIn' },
                  { id: 'e5', text: '触觉：微风凉丝丝', emoji: '✋', x: 65, y: 65, size: 'md', color: '#4DD0E1', animation: 'popIn' },
                ],
              },
              ttsNarration: '五感法：看光影、听鸟鸣、闻花香、尝甜味、触微风，环境写立体！',
            },
          },
          { type: 'tip', content: '小窍门：不必每次五感全用，根据环境特点选2-3种最突出的感官来写，效果更好。', label: '使用窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范用五感法写环境：调动多种感官多角度描写。',
        weDo: '亲子一起用五感法写环境，互相补充。',
        youDo: '孩子独立用五感法写一段环境细节描写。',
        parentTips: '五感法：看/听/闻/尝/触，多角度描写环境。不必五感全用，选2-3种最突出的。',
        funElement: '五感探险家：闭上眼睛，用听、闻、触感受周围环境，再用五感法写下来，看谁的环境描写最立体！',
        gsapAnimations: [
          'GSAP:sceneBuild|五感环境逐步出现|1.5s|点击播放|power2.out',
          'GSAP:highlight|五感词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|五感描写图|500x300|水彩画风|png|五感图标',
        ],
        practiceQuestions: [
          {
            id: 'c6u4l4q1',
            type: 'choice',
            question: '环境细节描写的"五感法"包括哪五种感官？',
            options: ['视觉、听觉、嗅觉、味觉、触觉', '喜、怒、哀、乐、惧', '眼、耳、鼻、舌、牙'],
            answer: '视觉、听觉、嗅觉、味觉、触觉',
            hint: '回忆五种感官',
            explanation: '五感法包括视觉（看）、听觉（听）、嗅觉（闻）、味觉（尝）、触觉（触）五种感官。'
          },
          {
            id: 'c6u4l4q2',
            type: 'choice',
            question: '"鸟儿叽叽喳喳地唱歌"调动了哪种感官？',
            options: ['视觉', '听觉', '嗅觉'],
            answer: '听觉',
            hint: '叽叽喳喳是听到什么',
            explanation: '"叽叽喳喳"是声音，调动的是听觉，描写听到的鸟鸣。'
          },
          {
            id: 'c6u4l4q3',
            type: 'fill',
            question: '五感法中，"微风拂过脸颊凉丝丝的"调动的是___觉',
            answer: '触',
            acceptableAnswers: ['触', '触觉'],
            hint: '皮肤感受的是什么觉',
            explanation: '"微风拂过脸颊凉丝丝"是皮肤感受到的触觉，描写触摸到的感觉。'
          },
          {
            id: 'c6u4l4q4',
            type: 'choice',
            question: '下列哪句调动了嗅觉？',
            options: ['晨光洒下斑驳光影', '空气中飘来淡淡的花香', '嘴里留着豆浆的甜味'],
            answer: '空气中飘来淡淡的花香',
            hint: '闻到的是什么',
            explanation: '"淡淡的花香"是鼻子闻到的气味，调动了嗅觉。光影是视觉，甜味是味觉。'
          },
          {
            id: 'c6u4l4q5',
            type: 'choice',
            question: '【期末真题】用五感法描写环境时，应该？',
            options: ['五感必须全用缺一不可', '根据环境特点选2-3种突出的感官来写', '只用视觉不用其他感官'],
            answer: '根据环境特点选2-3种突出的感官来写',
            hint: '五感必须全用吗',
            explanation: '用五感法描写环境不必五感全用，根据环境特点选2-3种最突出的感官来写，效果更好。这是期末常考的写作要求！'
          },
          {
            id: 'c6u4l4q6',
            type: 'drag',
            question: '把描写拖到对应感官：视觉 / 听觉 / 嗅觉\n"斑驳光影" "鸟儿唱歌" "淡淡花香"',
            answer: '视觉-斑驳光影,听觉-鸟儿唱歌,嗅觉-淡淡花香',
            hint: '看、听、闻分别对应什么',
            explanation: '"斑驳光影"是看到的（视觉），"鸟儿唱歌"是听到的（听觉），"淡淡花香"是闻到的（嗅觉）。'
          },
          {
            id: 'c6u4l4q7',
            type: 'fill',
            question: '写景要按一定顺序，如由远到___、由整体到局部',
            answer: '近',
            hint: '[写景顺序]（五年级语文-第2单元）',
            explanation: '写景要有顺序，常用由远到近、由整体到局部、由上到下等。'
          }
        ]
      },
      {
        id: 'c6u4l5',
        title: '记叙文综合写作',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '学完了四种细节描写，现在我们综合运用，写一篇500字的记叙文，要包含3种以上的细节描写。细节让记叙文更生动、更感人！', animationType: 'bounce' },
          { type: 'tip', content: '写作小贴士：写记叙文时，在外貌、动作、心理、环境四种细节中至少选三种运用。细节要为表现中心服务，不能为细节而细节。', label: '写作提示', animationType: 'pulse' },
          { type: 'example', content: '复习要点：\n①外貌细节——放大镜法：聚焦一个特征\n②动作细节——慢镜头法：分解动作\n③心理细节——内心独白法：写心里话\n④环境细节——五感法：多感官描写', label: '复习要点', animationType: 'bounce' },
          { type: 'animation', content: '写作完成撒花动画：提交500字记叙文后撒花庆祝，获得"写作小达人"徽章', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '记叙文写作达人',
              sequenceConfig: { items: ['外貌', '动作', '心理', '环境', '撒花！'], order: 'custom', itemType: 'word' },
              ttsNarration: '恭喜你完成记叙文综合写作，你是写作小达人！',
            },
          },
          { type: 'tip', content: '写作口诀：外貌用放大镜，动作用慢镜头，心理写独白，环境用五感，细节为中心，文章才动人。', label: '写作口诀', animationType: 'pulse' },
          { type: 'text', content: '综合写作时，细节描写要"少而精"。不要每种细节都堆一大段，而是选最有表现力的细节重点写。一个好细节胜过十句空话，比如写紧张，"手心全是汗"比"我很紧张"生动十倍。', animationType: 'reveal' },
          { type: 'example', content: '例题：把"他很紧张"改成含细节的句子。\n→"他攥紧了拳头，手心沁出一层细汗，眼睛不停地瞟向门口，心里像揣了只小兔子怦怦直跳。"\n（动作+外貌+心理三种细节）', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范写细节记叙文：综合运用多种细节描写写一段。',
        weDo: '亲子一起修改：互相修改对方作文中的细节描写。',
        youDo: '孩子独立写500字记叙文，含3种以上细节描写。',
        parentTips: '500字记叙文，含3种以上细节描写。细节要为表现中心服务。',
        funElement: '写作达人挑战：完成500字细节记叙文，含3种以上细节，获得"写作小达人"金色徽章！',
        gsapAnimations: [
          'GSAP:confetti|写作完成撒花|2s|提交|power1.out|particleCount:30',
          'GSAP:highlight|细节类型高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|写作达人徽章|300x300|可爱卡通风|png|金色徽章',
        ],
        practiceQuestions: [
          {
            id: 'c6u4l5q1',
            type: 'choice',
            question: '外貌细节描写用什么方法？',
            options: ['慢镜头法', '放大镜法', '五感法'],
            answer: '放大镜法',
            hint: '回忆四种细节描写方法',
            explanation: '外貌细节用放大镜法（聚焦特征），动作用慢镜头法，心理用内心独白法，环境用五感法。'
          },
          {
            id: 'c6u4l5q2',
            type: 'choice',
            question: '动作细节描写用什么方法？',
            options: ['放大镜法', '慢镜头法', '内心独白法'],
            answer: '慢镜头法',
            hint: '把动作分解的方法',
            explanation: '动作细节用慢镜头法：把一个动作分解成几个小动作细致描写。'
          },
          {
            id: 'c6u4l5q3',
            type: 'fill',
            question: '环境细节描写用"___法"调动五种感官',
            answer: '五感',
            hint: '看听闻尝触',
            explanation: '环境细节用五感法：调动视觉、听觉、嗅觉、味觉、触觉多角度描写。'
          },
          {
            id: 'c6u4l5q4',
            type: 'choice',
            question: '综合写作时，细节描写应该？',
            options: ['为细节而细节越多越好', '为表现中心服务', '只写外貌不写其他'],
            answer: '为表现中心服务',
            hint: '细节的作用是什么',
            explanation: '细节描写要为表现文章中心服务，不能为细节而细节，要恰到好处。'
          },
          {
            id: 'c6u4l5q5',
            type: 'choice',
            question: '【期末真题】下列哪段同时用了动作和心理两种细节？',
            options: ['他长得很高', '他咬着嘴唇，心想：完了完了', '窗外下着雨'],
            answer: '他咬着嘴唇，心想：完了完了',
            hint: '找既有动作又有心理的',
            explanation: '"咬着嘴唇"是动作细节，"心想：完了完了"是心理细节，一句话同时用了两种细节描写。这是期末常考的细节辨析题！'
          },
          {
            id: 'c6u4l5q6',
            type: 'drag',
            question: '把细节描写方法拖到对应类别：\n放大镜法-外貌 慢镜头法-动作 内心独白法-心理 五感法-环境',
            answer: '外貌-放大镜法,动作-慢镜头法,心理-内心独白法,环境-五感法',
            hint: '回忆四种细节描写各自的方法',
            explanation: '外貌用放大镜法，动作用慢镜头法，心理用内心独白法，环境用五感法。'
          },
          {
            id: 'c6u4l5q7',
            type: 'fill',
            question: '把人物动作一步步写清楚叫___描写',
            answer: '动作',
            hint: '[记叙文描写]（五年级语文-第2单元）',
            explanation: '记叙文描写方法有外貌、语言、动作、心理描写，动作描写是把动作分解写清楚，是五年级学过的。'
          }
        ]
      }
    ]
  },

  // ==================== 第五单元：古诗文综合——诗意与哲理 ====================
  {
    id: 'c6u5',
    title: '古诗文综合——诗意与哲理',
    subtitle: '诗意与哲理',
    order: 5,
    lessons: [
      {
        id: 'c6u5l1',
        title: '古诗哲理——含哲理的诗句',
        order: 1,
        teachingMethod: '情境式',
        content: [
          { type: 'text', content: '有些古诗不仅画面美，还蕴含深刻的人生哲理。读这样的诗，既要欣赏画面，更要体会哲理。如"不识庐山真面目，只缘身在此山中"就告诉我们：当局者迷，旁观者清。', animationType: 'bounce' },
          { type: 'poem', content: '题西林壁\n宋·苏轼\n横看成岭侧成峰，远近高低各不同。\n不识庐山真面目，只缘身在此山中。', label: '哲理诗', animationType: 'pulse' },
          { type: 'tip', content: '哲理赏析："不识庐山真面目，只缘身在此山中"——因为身在其中，所以看不清全貌。哲理：当局者迷，旁观者清；要全面认识事物，需跳出局限。', label: '哲理赏析', animationType: 'pulse' },
          { type: 'example', content: '常见哲理诗句：\n"欲穷千里目，更上一层楼"——站得高才能看得远\n"沉舟侧畔千帆过，病树前头万木春"——新事物必将取代旧事物\n"山重水复疑无路，柳暗花明又一村"——绝境中往往有转机', label: '哲理诗句集', animationType: 'bounce' },
          { type: 'animation', content: '庐山诗意意境展示动画：诗句描绘的庐山画面逐步展开，从不同角度看庐山形状不同，最后揭示哲理', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '庐山意境与哲理',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '横看', text: '横看成岭', ttsNarration: '横看庐山，像连绵的山岭' },
                  { id: 's2', description: '侧看', text: '侧成峰', ttsNarration: '侧看庐山，变成高耸的山峰' },
                  { id: 's3', description: '感悟', text: '不识真面目', ttsNarration: '身在山中看不清全貌' },
                  { id: 's4', description: '哲理', text: '当局者迷旁观者清', ttsNarration: '哲理：当局者迷，旁观者清' },
                ],
              },
              ttsNarration: '不识庐山真面目，只缘身在此山中——当局者迷，旁观者清！',
            },
          },
          { type: 'tip', content: '找哲理小窍门：先理解诗句字面意思，再想想诗句背后藏着什么道理，最后联系生活体会哲理。', label: '找哲理窍门', animationType: 'pulse' },
        ],
        iDo: '家长读"不识庐山真面目"引出哲理，示范如何从诗句中体会人生道理。',
        weDo: '亲子一起讨论哲理诗句的含义和生活启示。',
        youDo: '孩子独立找一首哲理诗，说出其中的哲理。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“‘不识庐山真面目，只缘身在此山中’蕴含什么哲理？”②孩子应答：“当局者迷，旁观者清。”③答错引导：若孩子不懂，家长举例“下棋的人看不清，旁观的人看得清”，再让孩子体会诗句道理。④快速听写：家长报“欲穷千里目”，孩子接“更上一层楼”并说哲理。',
        funElement: '哲理小侦探：读一句哲理诗，当"小侦探"找出藏在诗里的"哲理宝藏"，看谁找得又快又准！',
        gsapAnimations: [
          'GSAP:highlight|哲理句高亮|0.5s|点击|power2.out|repeat:2',
          'GSAP:timeline|庐山意境展示|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|庐山诗意画|500x300|水墨画风|png|庐山图',
        ],
        practiceQuestions: [
          {
            id: 'c6u5l1q1',
            type: 'choice',
            question: '"不识庐山真面目，只缘身在此山中"蕴含的哲理是？',
            options: ['庐山很美', '当局者迷，旁观者清', '要爬到山顶'],
            answer: '当局者迷，旁观者清',
            hint: '身在山中看不清全貌说明什么',
            explanation: '身在山中反而看不清庐山全貌，哲理是：当局者迷，旁观者清，要全面认识事物需跳出局限。'
          },
          {
            id: 'c6u5l1q2',
            type: 'choice',
            question: '"欲穷千里目，更上一层楼"蕴含的哲理是？',
            options: ['楼很高', '站得高才能看得远', '要多爬楼梯'],
            answer: '站得高才能看得远',
            hint: '更上一层楼才能看更远',
            explanation: '"欲穷千里目，更上一层楼"哲理是：站得高才能看得远，要不断进取才能有更广阔的视野。'
          },
          {
            id: 'c6u5l1q3',
            type: 'fill',
            question: '"不识庐山真面目，只缘身在此山中"作者是宋代的___',
            answer: '苏轼',
            hint: '这首诗的作者是谁',
            explanation: '《题西林壁》的作者是宋代诗人苏轼。'
          },
          {
            id: 'c6u5l1q4',
            type: 'choice',
            question: '"山重水复疑无路，柳暗花明又一村"蕴含的哲理是？',
            options: ['山村很美', '绝境中往往有转机', '路很难走'],
            answer: '绝境中往往有转机',
            hint: '疑无路后又见村庄说明什么',
            explanation: '"山重水复疑无路，柳暗花明又一村"哲理是：绝境中往往有转机，不要轻易放弃希望。'
          },
          {
            id: 'c6u5l1q5',
            type: 'choice',
            question: '【期末真题】"沉舟侧畔千帆过，病树前头万木春"蕴含的哲理是？',
            options: ['船沉了很可惜', '新事物必将取代旧事物', '春天树木茂盛'],
            answer: '新事物必将取代旧事物',
            hint: '沉舟旁千帆过，病树前万木春',
            explanation: '"沉舟侧畔千帆过，病树前头万木春"哲理是：新事物必将取代旧事物，事物总是向前发展的。这是期末常考的哲理诗赏析！'
          },
          {
            id: 'c6u5l1q6',
            type: 'drag',
            question: '把诗句拖到对应哲理：\n"更上一层楼" "不识真面目" "柳暗花明又一村"',
            answer: '站得高看得远-更上一层楼,当局者迷-不识真面目,绝境有转机-柳暗花明又一村',
            hint: '想想每句诗的哲理',
            explanation: '"更上一层楼"=站得高看得远；"不识真面目"=当局者迷；"柳暗花明又一村"=绝境有转机。'
          },
          {
            id: 'c6u5l1q7',
            type: 'fill',
            question: '补写诗句：“欲穷千里目，___”',
            answer: '更上一层楼',
            hint: '[古诗名句]（五年级语文-第5单元）',
            explanation: '“欲穷千里目，更上一层楼”出自五年级古诗《登鹳雀楼》，寓意向高处看要再登高。'
          }
        ]
      },
      {
        id: 'c6u5l2',
        title: '古诗意境——画面与情感',
        order: 2,
        teachingMethod: '多感官：诗画结合',
        content: [
          { type: 'text', content: '古诗的意境由画面和情感融合而成。画面是诗中描绘的景象，情感是诗人寄托的感情。画面+情感=意境。读诗要先想象画面，再体会情感，最后感受意境之美。', animationType: 'bounce' },
          { type: 'poem', content: '静夜思\n唐·李白\n床前明月光，疑是地上霜。\n举头望明月，低头思故乡。', label: '意境诗', animationType: 'pulse' },
          { type: 'tip', content: '意境赏析：画面——明月、地上霜光；情感——思乡之情。画面（冷清月夜）+情感（思乡）=意境（清冷孤寂的思乡之情）。', label: '意境赏析', animationType: 'pulse' },
          { type: 'example', content: '读诗想象画面三步：\n①找景物——诗中写了哪些景物\n②想画面——把景物连成一幅画\n③悟情感——画面传达了什么感情', label: '想象画面三步', animationType: 'bounce' },
          { type: 'animation', content: '诗意境逐步构建动画：明月、霜光、思乡之人等元素逐步出现，构建出《静夜思》的清冷思乡意境', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '静夜思意境',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '画面', text: '明月霜光', ttsNarration: '画面：床前明月光，疑是地上霜' },
                  { id: 's2', description: '动作', text: '举头望月', ttsNarration: '动作：举头望明月' },
                  { id: 's3', description: '情感', text: '低头思乡', ttsNarration: '情感：低头思故乡' },
                  { id: 's4', description: '意境', text: '清冷思乡', ttsNarration: '意境：清冷孤寂的思乡之情' },
                ],
              },
              ttsNarration: '画面加情感等于意境：明月霜光的画面，加上思乡的情感，构成清冷孤寂的意境！',
            },
          },
          { type: 'tip', content: '口诀：读诗想画面，画面悟情感，画面加情感，意境自然现。', label: '意境口诀', animationType: 'pulse' },
        ],
        iDo: '家长读诗作画体会意境：示范如何想象画面、体会情感、感受意境。',
        weDo: '亲子一起读诗画画面，互相讨论意境。',
        youDo: '孩子独立画画面并体会意境。',
        parentTips: '画面+情感=意境。读诗先想象画面，再体会情感，最后感受意境之美。',
        funElement: '诗中画展：读一首古诗，把想象到的画面画出来，办一个"诗中画展"，看谁的画最有意境！',
        gsapAnimations: [
          'GSAP:timeline|诗意境展示|1.5s|点击播放|power2.out',
          'GSAP:sceneBuild|诗意境画面构建|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|诗意画|500x300|水墨画风|png|诗中画面',
        ],
        practiceQuestions: [
          {
            id: 'c6u5l2q1',
            type: 'choice',
            question: '古诗的意境由什么融合而成？',
            options: ['画面与情感', '字数与韵律', '标题与作者'],
            answer: '画面与情感',
            hint: '回忆意境的构成',
            explanation: '意境由画面（诗中景象）和情感（诗人感情）融合而成，画面+情感=意境。'
          },
          {
            id: 'c6u5l2q2',
            type: 'choice',
            question: '《静夜思》中"床前明月光"主要描绘了什么？',
            options: ['人物外貌', '画面（景物）', '议论道理'],
            answer: '画面（景物）',
            hint: '明月光是景物还是情感',
            explanation: '"床前明月光"描绘了明月和霜光等景物，属于意境中的画面部分。'
          },
          {
            id: 'c6u5l2q3',
            type: 'fill',
            question: '《静夜思》表达的情感是___之情',
            answer: '思乡',
            acceptableAnswers: ['思乡', '思念故乡'],
            hint: '低头思的是什么',
            explanation: '《静夜思》"低头思故乡"表达了诗人思念故乡的思乡之情。'
          },
          {
            id: 'c6u5l2q4',
            type: 'choice',
            question: '读诗想象画面的第一步是？',
            options: ['背全文', '找景物', '查作者'],
            answer: '找景物',
            hint: '回忆想象画面三步',
            explanation: '读诗想象画面三步：①找景物 ②想画面 ③悟情感。第一步是找景物。'
          },
          {
            id: 'c6u5l2q5',
            type: 'choice',
            question: '【期末真题】《静夜思》的意境可以概括为？',
            options: ['热闹欢快', '清冷孤寂的思乡之情', '雄壮激昂'],
            answer: '清冷孤寂的思乡之情',
            hint: '明月霜光的画面配思乡的情感',
            explanation: '《静夜思》明月霜光的清冷画面，加上思乡的孤寂情感，意境是"清冷孤寂的思乡之情"。这是期末常考的意境赏析！'
          },
          {
            id: 'c6u5l2q6',
            type: 'drag',
            question: '把内容拖到对应类别：画面 / 情感\n"明月霜光" "思故乡" "举头望月" "思乡之情"',
            answer: '画面-明月霜光,画面-举头望月,情感-思故乡,情感-思乡之情',
            hint: '景物是画面，感情是情感',
            explanation: '"明月霜光""举头望月"是景物画面；"思故乡""思乡之情"是感情情感。'
          },
          {
            id: 'c6u5l2q7',
            type: 'fill',
            question: '补写诗句："床前明月光，疑是地上___"',
            answer: '霜',
            hint: '[古诗名句]（五年级语文-第5单元）',
            explanation: '李白《静夜思》"床前明月光，疑是地上霜"，用霜比喻月光，是五年级学过的名句。'
          }
        ]
      },
      {
        id: 'c6u5l3',
        title: '古文阅读——短篇文言文',
        order: 3,
        teachingMethod: 'CPA·C→P→A',
        content: [
          { type: 'text', content: '文言文是古人的书面语言，简洁凝练。读短篇文言文要做到：读准字音、理解字义、疏通句意、体会感悟。先读原文，再看翻译，最后理解意思。', animationType: 'bounce' },
          { type: 'poem', content: '《守株待兔》（节选）\n宋人有耕者。田中有株。兔走触株，折颈而死。因释其耒而守株，冀复得兔。', label: '文言短文', animationType: 'pulse' },
          { type: 'tip', content: '重点字词：走——跑（古义）；触——撞；释——放下；耒——农具；冀——希望。注意"走"在古文中是"跑"，不是现在的"走"。', label: '重点字词', animationType: 'pulse' },
          { type: 'example', content: '逐句翻译：\n宋人有耕者——宋国有个种田的人\n田中有株——田里有个树桩\n兔走触株——兔子跑过来撞到树桩\n折颈而死——折断脖子死了\n因释其耒而守株——于是放下农具守在树桩旁\n冀复得兔——希望能再捡到兔子', label: '逐句翻译', animationType: 'bounce' },
          { type: 'animation', content: '文言文逐句翻译翻转动画：每句文言文点击后翻转显示白话翻译，原文和译文对照', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '文言文翻译对照',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '宋人有耕者', back: '宋国有个种田的人', ttsText: '宋人有耕者：宋国有个种田的人' },
                  { id: 'c1', front: '兔走触株', back: '兔子跑来撞到树桩', ttsText: '兔走触株：兔子跑来撞到树桩。走是跑的意思' },
                  { id: 'c2', front: '因释其耒', back: '于是放下农具', ttsText: '因释其耒：于是放下农具' },
                  { id: 'c3', front: '冀复得兔', back: '希望再捡到兔子', ttsText: '冀复得兔：希望能再捡到兔子' },
                ],
              },
              ttsNarration: '文言文翻译：走是跑，释是放下，耒是农具，冀是希望！',
            },
          },
          { type: 'tip', content: '感悟：守株待兔告诉我们不能心存侥幸，要靠自己的劳动，不能把偶然当成必然。', label: '感悟', animationType: 'pulse' },
        ],
        iDo: '家长读文言文+逐句翻译，示范如何理解文言文。',
        weDo: '亲子一起翻译短篇文言文，互相检查。',
        youDo: '孩子独立翻译短篇文言文。',
        parentTips: '文言文阅读：实词/虚词/句式。注意古今异义，如"走"古义是"跑"。',
        funElement: '穿越翻译官：当一回"穿越翻译官"，把古人的话翻译成现代话，看谁翻译得最准确！',
        gsapAnimations: [
          'GSAP:cardReveal|文言文翻译翻转|1.5s|点击播放|power2.out',
          'GSAP:highlight|重点字词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|文言文翻译对照|500x300|教学风|png|古文+白话',
        ],
        practiceQuestions: [
          {
            id: 'c6u5l3q1',
            type: 'choice',
            question: '"兔走触株"中"走"的意思是？',
            options: ['步行', '跑', '离开'],
            answer: '跑',
            hint: '古文中"走"和现在意思不同',
            explanation: '"走"在古文中是"跑"的意思，古今异义。"兔走触株"是兔子跑过来撞到树桩。'
          },
          {
            id: 'c6u5l3q2',
            type: 'choice',
            question: '"因释其耒而守株"中"释"的意思是？',
            options: ['解释', '放下', '释放'],
            answer: '放下',
            hint: '在这里"释"是什么动作',
            explanation: '"释"在这里是"放下"的意思。"因释其耒"是于是放下农具。'
          },
          {
            id: 'c6u5l3q3',
            type: 'fill',
            question: '"冀复得兔"中"冀"的意思是___',
            answer: '希望',
            hint: '农夫守株是为了什么',
            explanation: '"冀"是"希望"的意思。"冀复得兔"是希望能再捡到兔子。'
          },
          {
            id: 'c6u5l3q4',
            type: 'choice',
            question: '《守株待兔》告诉我们的道理是？',
            options: ['兔子跑得快', '不能心存侥幸，要靠劳动', '树桩很有用'],
            answer: '不能心存侥幸，要靠劳动',
            hint: '农夫守株的结果是什么',
            explanation: '《守株待兔》告诉我们不能心存侥幸，不能把偶然当成必然，要靠自己的劳动。'
          },
          {
            id: 'c6u5l3q5',
            type: 'choice',
            question: '【期末真题】下列对"兔走触株，折颈而死"翻译正确的是？',
            options: ['兔子走路撞树桩，脖子折了死了', '兔子跑来撞到树桩，折断脖子死了', '兔子走了，碰到树桩'],
            answer: '兔子跑来撞到树桩，折断脖子死了',
            hint: '注意"走"的古义',
            explanation: '"兔走触株，折颈而死"翻译为"兔子跑来撞到树桩，折断脖子死了"。注意"走"古义是"跑"。这是期末常考的文言文翻译！'
          },
          {
            id: 'c6u5l3q6',
            type: 'drag',
            question: '把文言词语拖到对应现代意思：\n走 释 耒 冀',
            answer: '走-跑,释-放下,耒-农具,冀-希望',
            hint: '回忆重点字词的古义',
            explanation: '走=跑，释=放下，耒=农具，冀=希望，这些都是文言文重点字词。'
          },
          {
            id: 'c6u5l3q7',
            type: 'fill',
            question: '"春眠不觉晓"出自古诗《___》',
            answer: '春晓',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '孟浩然《春晓》"春眠不觉晓，处处闻啼鸟"，是五年级学过的古诗。'
          }
        ]
      },
      {
        id: 'c6u5l4',
        title: '古诗文默写与运用',
        order: 4,
        teachingMethod: '间隔重复',
        content: [
          { type: 'text', content: '学古诗文学了就要会默写、会运用。默写要准确不写错别字，运用要把诗句用到合适的情境中。默写+运用，古诗文才算真正掌握。', animationType: 'bounce' },
          { type: 'example', content: '默写易错字：\n"举头望明月"——"举"不要写成"具"\n"疑是地上霜"——"疑"不要写成"宜"\n"不识庐山真面目"——"庐"不要写成"卢"', label: '默写易错字', animationType: 'bounce' },
          { type: 'tip', content: '默写三注意：①字形——不写错别字；②标点——逗号句号不能少；③格式——题目作者不能忘。', label: '默写三注意', animationType: 'pulse' },
          { type: 'example', content: '诗句运用示例：\n①鼓励人上进——"欲穷千里目，更上一层楼"\n②劝人全面看问题——"不识庐山真面目，只缘身在此山中"\n③安慰人困境有转机——"山重水复疑无路，柳暗花明又一村"', label: '诗句运用', animationType: 'bounce' },
          { type: 'animation', content: '诗句配对翻转动画：左边情境，右边诗句，翻转配对，匹配成功高亮', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '诗句配对运用',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '鼓励上进', back: '欲穷千里目，更上一层楼', ttsText: '鼓励上进：欲穷千里目，更上一层楼' },
                  { id: 'c1', front: '全面看问题', back: '不识庐山真面目，只缘身在此山中', ttsText: '全面看问题：不识庐山真面目' },
                  { id: 'c2', front: '困境有转机', back: '山重水复疑无路，柳暗花明又一村', ttsText: '困境有转机：柳暗花明又一村' },
                ],
              },
              ttsNarration: '诗句运用：把合适的诗句用到合适的情境中！',
            },
          },
          { type: 'tip', content: '运用小窍门：先理解诗句含义，再找匹配的生活情境，最后把诗句自然地用到情境中。', label: '运用窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范默写+运用闪卡：默写名句，示范在情境中运用诗句。',
        weDo: '亲子一起做默写和运用练习。',
        youDo: '孩子独立默写名句并在情境中运用。',
        parentTips: '默写名句+在情境中运用。默写注意错别字，运用注意情境匹配。',
        funElement: '诗句百搭卡：把诗句做成"百搭卡"，抽一个生活情境，配上最合适的诗句，看谁配得最贴切！',
        gsapAnimations: [
          'GSAP:cardReveal|诗句配对翻转|0.5s|配对成功|power2.inOut',
          'GSAP:highlight|易错字高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|古诗配对图|500x300|水墨画风|png|诗句卡片',
        ],
        practiceQuestions: [
          {
            id: 'c6u5l4q1',
            type: 'choice',
            question: '"举头望明月"中哪个字容易写错？',
            options: ['举', '头', '月'],
            answer: '举',
            hint: '哪个字笔画多容易错',
            explanation: '"举"字笔画较多，容易写成"具"等错别字，默写时要特别注意。'
          },
          {
            id: 'c6u5l4q2',
            type: 'choice',
            question: '鼓励同学不断进步，用哪句诗最合适？',
            options: ['不识庐山真面目', '欲穷千里目，更上一层楼', '床前明月光'],
            answer: '欲穷千里目，更上一层楼',
            hint: '哪句诗表达上进的意思',
            explanation: '"欲穷千里目，更上一层楼"哲理是站得高看得远，鼓励人不断进取，最合适。'
          },
          {
            id: 'c6u5l4q3',
            type: 'fill',
            question: '"不识庐山真面目，只缘身在此山中"中"缘"的意思是___',
            answer: '因为',
            hint: '"只缘"就是"只因为"',
            explanation: '"缘"在这里是"因为"的意思。"只缘身在此山中"是只因为身在这座山里。'
          },
          {
            id: 'c6u5l4q4',
            type: 'choice',
            question: '安慰遇到困难的朋友，用哪句诗最合适？',
            options: ['山重水复疑无路，柳暗花明又一村', '举头望明月', '兔走触株'],
            answer: '山重水复疑无路，柳暗花明又一村',
            hint: '哪句诗表达困境有转机',
            explanation: '"山重水复疑无路，柳暗花明又一村"哲理是绝境中有转机，最适合安慰遇到困难的朋友。'
          },
          {
            id: 'c6u5l4q5',
            type: 'choice',
            question: '【期末真题】"___，更上一层楼"默写填空，正确的是？',
            options: ['欲穷千里目', '欲穷千里木', '欲穷千理目'],
            answer: '欲穷千里目',
            hint: '注意"目"和"千"的字形',
            explanation: '正确默写是"欲穷千里目，更上一层楼"。"目"是眼睛，不能写成"木"。这是期末常考的默写题！'
          },
          {
            id: 'c6u5l4q6',
            type: 'drag',
            question: '把情境拖到对应诗句：\n"鼓励上进" "全面看问题" "困境有转机"',
            answer: '鼓励上进-欲穷千里目更上一层楼,全面看问题-不识庐山真面目,困境有转机-柳暗花明又一村',
            hint: '想想每句诗适合什么情境',
            explanation: '鼓励上进用"欲穷千里目"，全面看问题用"不识庐山真面目"，困境有转机用"柳暗花明又一村"。'
          },
          {
            id: 'c6u5l4q7',
            type: 'fill',
            question: '补写诗句："谁言寸草心，报得三春___"',
            answer: '晖',
            hint: '[古诗名句]（五年级语文-第5单元）',
            explanation: '孟郊《游子吟》"谁言寸草心，报得三春晖"，表达母爱，是五年级学过的名句。'
          }
        ]
      },
      {
        id: 'c6u5l5',
        title: '古诗文综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '学完了古诗文综合，让我们检测一下！这节课将练习默写、理解和运用古诗文，看看你掌握了多少。', animationType: 'bounce' },
          { type: 'tip', content: '检测小贴士：古诗文学了要会默写、会理解、会运用。做错的题回到前面复习，古诗文重在积累。', label: '检测提示', animationType: 'pulse' },
          { type: 'example', content: '复习要点：\n①古诗哲理：当局者迷旁观者清、站得高看得远\n②古诗意境：画面+情感=意境\n③文言文：走=跑，释=放下\n④默写运用：不写错别字，情境要匹配', label: '复习要点', animationType: 'bounce' },
          { type: 'animation', content: '通关撒花动画：完成检测，正确率≥75%撒花庆祝，获得"古诗文小达人"徽章', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '古诗文达人通关',
              sequenceConfig: { items: ['哲理', '意境', '默写', '通关撒花！'], order: 'custom', itemType: 'word' },
              ttsNarration: '恭喜你完成古诗文综合检测，你是古诗文小达人！',
            },
          },
          { type: 'tip', content: '古诗文口诀：哲理要体会，意境画面加情感，文言注意古今义，默写运用要准确。', label: '复习口诀', animationType: 'pulse' },
          { type: 'text', content: '古诗文检测最容易在默写上丢分。默写要做到"三不"：不写错别字、不漏字、不颠倒顺序。遇到"疑""凝""雁""燕"这类易错字，要特别留意笔画，多写几遍加深记忆。', animationType: 'reveal' },
          { type: 'example', content: '例题：默写"山重水复疑无路，柳暗花明又一村"。\n易错点：①"疑"不要写成"凝"；②"复"不要写成"覆"。\n这句哲理是：绝境中往往藏着转机，不要轻易放弃。', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范检测：做一道古诗文题，示范默写、理解、运用。',
        weDo: '亲子一起练习古诗文默写和理解。',
        youDo: '孩子独立完成古诗文测试，默写+理解+运用。',
        parentTips: '默写+理解+运用，正确率≥75%就很棒。错了的题回到对应课时复习。',
        funElement: '古诗文达人挑战：完成全部检测题，正确率≥75%获得"古诗文小达人"金色徽章！',
        gsapAnimations: [
          'GSAP:confetti|通关撒花|2s|正确率≥75%|power1.out|particleCount:40',
          'GSAP:highlight|检测要点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|古诗文达人徽章|300x300|可爱卡通风|png|金色徽章',
        ],
        practiceQuestions: [
          {
            id: 'c6u5l5q1',
            type: 'choice',
            question: '"不识庐山真面目，只缘身在此山中"蕴含的哲理是？',
            options: ['庐山很美', '当局者迷，旁观者清', '要爬山'],
            answer: '当局者迷，旁观者清',
            hint: '身在山中看不清全貌',
            explanation: '"不识庐山真面目"哲理是当局者迷，旁观者清，要全面认识事物需跳出局限。'
          },
          {
            id: 'c6u5l5q2',
            type: 'choice',
            question: '古诗意境由什么构成？',
            options: ['画面与情感', '字数与韵律', '标题与作者'],
            answer: '画面与情感',
            hint: '回忆意境的构成',
            explanation: '意境由画面（诗中景象）和情感（诗人感情）融合而成。'
          },
          {
            id: 'c6u5l5q3',
            type: 'fill',
            question: '文言文中"走"的意思是___',
            answer: '跑',
            hint: '古今异义词',
            explanation: '文言文中"走"是"跑"的意思，是古今异义词。'
          },
          {
            id: 'c6u5l5q4',
            type: 'choice',
            question: '"欲穷千里目，更上一层楼"适合用在什么情境？',
            options: ['鼓励人上进', '描写月光', '记录天气'],
            answer: '鼓励人上进',
            hint: '这句诗的哲理是什么',
            explanation: '"欲穷千里目，更上一层楼"哲理是站得高看得远，适合鼓励人不断上进。'
          },
          {
            id: 'c6u5l5q5',
            type: 'choice',
            question: '【期末真题】"___，柳暗花明又一村"默写填空，正确的是？',
            options: ['山重水复疑无路', '山水重重复疑无路', '山重水复疑无路了'],
            answer: '山重水复疑无路',
            hint: '注意原句的字词',
            explanation: '正确默写是"山重水复疑无路，柳暗花明又一村"。这是期末常考的默写题！'
          },
          {
            id: 'c6u5l5q6',
            type: 'drag',
            question: '把内容拖到对应类别：画面 / 情感\n"明月霜光" "思乡之情" "举头望月" "思故乡"',
            answer: '画面-明月霜光,画面-举头望月,情感-思乡之情,情感-思故乡',
            hint: '景物是画面，感情是情感',
            explanation: '"明月霜光""举头望月"是景物画面；"思乡之情""思故乡"是感情情感。'
          },
          {
            id: 'c6u5l5q7',
            type: 'fill',
            question: '"举头望明月，低头思___"出自《静夜思》',
            answer: '故乡',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '李白《静夜思》"举头望明月，低头思故乡"表达思乡之情，是五年级古诗文鉴赏学过的。'
          }
        ]
      }
    ]
  },

  // ==================== 第六单元：回忆与展望 ====================
  {
    id: 'c6u6',
    title: '回忆与展望',
    subtitle: '回忆小学生活与展望未来',
    order: 6,
    lessons: [
      {
        id: 'c6u6l1',
        title: '回忆小学生活——成长故事',
        order: 1,
        teachingMethod: '项目式：成长纪念册',
        content: [
          { type: 'text', content: '小学六年，我们经历了许多难忘的事。回忆小学生活，把成长故事记录下来，制作成成长纪念册，留住美好回忆。成长故事要写清楚时间、地点、人物和感受。', animationType: 'bounce' },
          { type: 'example', content: '成长故事要素：\n时间——什么时候发生的\n地点——在哪里发生的\n人物——有谁参与\n事件——发生了什么\n感受——你有什么感想', label: '成长故事要素', animationType: 'bounce' },
          { type: 'tip', content: '成长纪念册组成：封面+目录+照片+故事+感受。每页一个故事，配照片和感受，就是一本完整的成长纪念册。', label: '纪念册组成', animationType: 'pulse' },
          { type: 'example', content: '成长故事示例：\n"三年级运动会上，我参加了50米跑。发令枪一响，我拼命向前冲，耳边是同学们的加油声。虽然只得了第三名，但那是第一次为班级争光，我心里特别自豪。"', label: '成长故事示例', animationType: 'bounce' },
          { type: 'animation', content: '成长纪念册翻页动画：纪念册一页页翻开，每页展示一个成长故事和照片，像翻阅回忆', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '成长纪念册',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '一年级', text: '入学第一天', ttsNarration: '一年级：入学第一天，背上新书包' },
                  { id: 's2', description: '三年级', text: '运动会获奖', ttsNarration: '三年级：运动会50米跑为班级争光' },
                  { id: 's3', description: '五年级', text: '参加合唱', ttsNarration: '五年级：参加合唱比赛获得一等奖' },
                  { id: 's4', description: '六年级', text: '毕业在即', ttsNarration: '六年级：即将毕业，心怀感恩' },
                ],
              },
              ttsNarration: '翻开成长纪念册，每一页都是珍贵的回忆！',
            },
          },
          { type: 'tip', content: '写成长故事小窍门：选最难忘的事来写，写出真情实感，让读者感受到你的成长和快乐。', label: '写作窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范制作成长纪念册：展示如何选故事、配照片、写感受。',
        weDo: '亲子一起策划成长纪念册，挑选照片和故事。',
        youDo: '孩子独立制作成长纪念册，写成长故事。',
        parentTips: '成长纪念册：照片+故事+感受。让孩子选最难忘的事来写，写出真情实感。',
        funElement: '回忆盲盒：把小学照片放进"盲盒"，随机抽出一张，讲出照片背后的成长故事，看谁讲得最生动！',
        gsapAnimations: [
          'GSAP:timeline|成长纪念册翻页|1.5s|点击播放|power2.inOut',
          'GSAP:cardReveal|成长故事卡片翻转|0.5s|点击|power2.inOut',
        ],
        images: [
          'IMG:illustration|成长纪念册模板|500x350|可爱卡通风|png|纪念册模板',
        ],
        practiceQuestions: [
          {
            id: 'c6u6l1q1',
            type: 'choice',
            question: '成长故事不需要写下列哪个要素？',
            options: ['时间地点', '论点论据', '人物感受'],
            answer: '论点论据',
            hint: '论点论据是哪种文体的要素',
            explanation: '成长故事要素：时间、地点、人物、事件、感受。论点论据是议论文的要素，不需要。'
          },
          {
            id: 'c6u6l1q2',
            type: 'choice',
            question: '成长纪念册的组成不包括下列哪项？',
            options: ['封面', '照片故事', '数学公式'],
            answer: '数学公式',
            hint: '纪念册里放什么',
            explanation: '成长纪念册由封面+目录+照片+故事+感受组成，数学公式不属于纪念册内容。'
          },
          {
            id: 'c6u6l1q3',
            type: 'fill',
            question: '成长故事要写清楚时间、地点、人物、事件和___',
            answer: '感受',
            hint: '故事最后要写什么',
            explanation: '成长故事要素：时间、地点、人物、事件、感受，感受是表达自己的感想。'
          },
          {
            id: 'c6u6l1q4',
            type: 'choice',
            question: '写成长故事最重要的是？',
            options: ['字数要多', '写出真情实感', '用华丽辞藻'],
            answer: '写出真情实感',
            hint: '什么让故事打动人',
            explanation: '写成长故事最重要的是写出真情实感，让读者感受到你的成长和快乐，而不是追求字数或辞藻。'
          },
          {
            id: 'c6u6l1q5',
            type: 'choice',
            question: '【期末真题】成长纪念册中"成长故事"的写作重点是？',
            options: ['罗列所有发生过的事', '选最难忘的事写出真情实感', '只写学习不写活动'],
            answer: '选最难忘的事写出真情实感',
            hint: '故事要选什么来写',
            explanation: '成长故事要选最难忘的事来写，写出真情实感，而不是罗列所有事情。这是期末常考的写作要求！'
          },
          {
            id: 'c6u6l1q6',
            type: 'drag',
            question: '把成长故事要素拖到对应：\n"三年级" "操场" "我和同学" "运动会获奖" "很自豪"',
            answer: '时间-三年级,地点-操场,人物-我和同学,事件-运动会获奖,感受-很自豪',
            hint: '什么时候在哪谁做了什么感觉如何',
            explanation: '时间=三年级，地点=操场，人物=我和同学，事件=运动会获奖，感受=很自豪。'
          },
          {
            id: 'c6u6l1q7',
            type: 'fill',
            question: '记叙文六要素是时间、地点、人物、起因、经过和___',
            answer: '结果',
            hint: '[记叙文六要素]（五年级语文-第2单元）',
            explanation: '记叙文六要素：时间、地点、人物、起因、经过、结果，是五年级记叙文进阶学过的基础。'
          }
        ]
      },
      {
        id: 'c6u6l2',
        title: '写给未来自己的一封信',
        order: 2,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '给未来的自己写一封信，记录现在的自己，表达对未来的期望和梦想。书信有固定格式：称呼、问候、正文、祝福、署名、日期。', animationType: 'bounce' },
          { type: 'example', content: '书信格式：\n称呼：未来的我：（顶格写，加冒号）\n问候：你好！（空两格）\n正文：写现在的自己和未来的期望（空两格，分段写）\n祝福：祝学业进步！（空两格）\n署名：现在的×××（右下角）\n日期：×年×月×日（署名下方）', label: '书信格式', animationType: 'bounce' },
          { type: 'tip', content: '写信内容三部分：①现在的我——介绍现在的学习和生活；②我的期望——对未来自己的期望；③我的梦想——未来的梦想和计划。', label: '写信内容', animationType: 'pulse' },
          { type: 'example', content: '信件片段示例：\n"未来的我：你好！现在的我正在读六年级，最大的爱好是画画。我希望未来的你能成为一名设计师，画出美丽的作品。无论遇到什么困难，都不要放弃梦想哦！"', label: '信件示例', animationType: 'bounce' },
          { type: 'animation', content: '信件逐字出现动画：信纸上的字逐字逐句出现，像在写信一样，展示书信格式和内容', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '写给未来的信',
              sequenceConfig: {
                items: ['称呼：未来的我', '问候：你好！', '正文：现在的我……', '祝福：祝学业进步！', '署名日期'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '书信六部分：称呼、问候、正文、祝福、署名、日期！',
            },
          },
          { type: 'tip', content: '写信小窍门：像跟朋友说话一样自然，写出真实的想法和感受，未来的自己读到一定很感动。', label: '写信窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范写信：按格式写一封给未来自己的信。',
        weDo: '亲子一起讨论写信内容，互相启发。',
        youDo: '孩子独立写一封给未来自己的信。',
        parentTips: '写给未来：现在的我+期望+梦想。注意书信格式：称呼、问候、正文、祝福、署名、日期。',
        funElement: '时光信箱：把写好的信装进信封，封上"×年后才能拆开"的标签，放进"时光信箱"，未来的自己拆开一定很惊喜！',
        gsapAnimations: [
          'GSAP:sequence|信件逐字出现|2s|点击播放|power1.inOut',
          'GSAP:cardReveal|书信格式卡片翻转|0.5s|点击|power2.inOut',
        ],
        images: [
          'IMG:illustration|信件模板|400x300|可爱卡通风|png|信纸模板',
        ],
        practiceQuestions: [
          {
            id: 'c6u6l2q1',
            type: 'choice',
            question: '书信格式的正确顺序是？',
            options: ['称呼→问候→正文→祝福→署名→日期', '正文→称呼→日期→问候', '日期→署名→正文→称呼'],
            answer: '称呼→问候→正文→祝福→署名→日期',
            hint: '回忆书信六部分',
            explanation: '书信格式顺序：称呼→问候→正文→祝福→署名→日期。'
          },
          {
            id: 'c6u6l2q2',
            type: 'choice',
            question: '书信中"称呼"应该怎么写？',
            options: ['空两格写', '顶格写加冒号', '写在最后'],
            answer: '顶格写加冒号',
            hint: '称呼的位置和标点',
            explanation: '称呼要顶格写，后面加冒号，如"未来的我："。'
          },
          {
            id: 'c6u6l2q3',
            type: 'fill',
            question: '写给未来的信内容包括现在的我、我的期望和我的___',
            answer: '梦想',
            acceptableAnswers: ['梦想', '计划'],
            hint: '第三部分写什么',
            explanation: '写信内容三部分：现在的我、我的期望、我的梦想（未来梦想和计划）。'
          },
          {
            id: 'c6u6l2q4',
            type: 'choice',
            question: '书信中"署名"和"日期"的位置是？',
            options: ['左上角', '右下角，署名在上日期在下', '正文中间'],
            answer: '右下角，署名在上日期在下',
            hint: '回忆署名日期的位置',
            explanation: '署名和日期写在右下角，署名在上，日期在署名下方。'
          },
          {
            id: 'c6u6l2q5',
            type: 'choice',
            question: '【期末真题】下列书信格式说法正确的是？',
            options: ['正文要顶格写', '称呼顶格写加冒号，正文空两格写', '祝福语写在开头'],
            answer: '称呼顶格写加冒号，正文空两格写',
            hint: '回忆书信各部分格式',
            explanation: '书信格式：称呼顶格写加冒号，问候和正文空两格写，祝福空两格，署名日期在右下角。这是期末常考的书信格式！'
          },
          {
            id: 'c6u6l2q6',
            type: 'drag',
            question: '把书信各部分按正确顺序排列：称呼、问候、正文、祝福、署名、日期',
            answer: '称呼,问候,正文,祝福,署名,日期',
            hint: '从上到下的顺序',
            explanation: '书信顺序：称呼→问候→正文→祝福→署名→日期。'
          },
          {
            id: 'c6u6l2q7',
            type: 'fill',
            question: '写日记要先写日期、星期和___',
            answer: '天气',
            hint: '[应用文写作]（五年级语文-第7单元）',
            explanation: '日记格式先写日期、星期、天气，再写正文，是五年级应用文写作学过的。'
          }
        ]
      },
      {
        id: 'c6u6l3',
        title: '毕业演讲——告别与感谢',
        order: 3,
        teachingMethod: '情境式',
        content: [
          { type: 'text', content: '毕业之际，用一篇演讲稿告别母校、感谢师长。毕业演讲包含三部分：回忆（小学生活的美好回忆）、感谢（感谢老师同学）、展望（对未来的展望）。演讲要有真情实感。', animationType: 'bounce' },
          { type: 'example', content: '毕业演讲三部分：\n回忆——六年小学生活的难忘瞬间\n感谢——感谢老师的教导、同学的陪伴\n展望——对初中生活的期待和决心', label: '演讲三部分', animationType: 'bounce' },
          { type: 'tip', content: '演讲稿特点：①有称呼——"敬爱的老师、亲爱的同学"；②有真情——发自内心的感受；③有号召——结尾呼吁大家一起努力。', label: '演讲稿特点', animationType: 'pulse' },
          { type: 'example', content: '演讲片段示例：\n"敬爱的老师、亲爱的同学们：六年时光匆匆而过，最难忘的是运动会上我们一起拼搏的身影。感谢老师们的悉心教导，感谢同学们的真诚陪伴。未来，让我们带着这份美好，勇敢地向前走！"', label: '演讲示例', animationType: 'bounce' },
          { type: 'animation', content: '演讲场景构建动画：舞台、话筒、毕业帽等元素逐步出现，构建出毕业演讲的庄重场景', animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '毕业演讲场景',
              sceneBuildConfig: {
                sceneName: '毕业演讲',
                elements: [
                  { id: 'e1', text: '舞台', emoji: '🎤', x: 50, y: 50, size: 'xl', color: '#FF6B6B', animation: 'scaleIn' },
                  { id: 'e2', text: '毕业帽', emoji: '🎓', x: 30, y: 25, size: 'lg', color: '#4ECDC4', animation: 'popIn' },
                  { id: 'e3', text: '鲜花', emoji: '💐', x: 70, y: 30, size: 'md', color: '#F06292', animation: 'fadeIn' },
                  { id: 'e4', text: '同学们', emoji: '👏', x: 50, y: 80, size: 'md', color: '#FFD54F', animation: 'slideIn' },
                ],
              },
              ttsNarration: '毕业演讲：回忆、感谢、展望，告别母校，勇敢向前！',
            },
          },
          { type: 'tip', content: '演讲小窍门：声音洪亮、语速适中、眼神交流、感情真挚。练习几遍，上台就不紧张了。', label: '演讲技巧', animationType: 'pulse' },
        ],
        iDo: '家长示范毕业演讲：读一篇演讲稿，示范回忆、感谢、展望三部分。',
        weDo: '亲子一起练习演讲，互相提建议。',
        youDo: '孩子独立写并演讲一篇毕业演讲稿。',
        parentTips: '毕业演讲：回忆+感谢+展望。演讲要声音洪亮、感情真挚。',
        funElement: '模拟毕业典礼：在家办一场"模拟毕业典礼"，孩子上台演讲，家人当观众鼓掌，感受毕业的仪式感！',
        gsapAnimations: [
          'GSAP:sceneBuild|演讲场景构建|1.5s|点击播放|power2.out',
          'GSAP:highlight|演讲要点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|演讲场景|500x300|可爱卡通风|png|舞台+话筒',
        ],
        practiceQuestions: [
          {
            id: 'c6u6l3q1',
            type: 'choice',
            question: '毕业演讲的三部分是？',
            options: ['回忆、感谢、展望', '论点、论据、结论', '开端、发展、结局'],
            answer: '回忆、感谢、展望',
            hint: '回忆小学，感谢师长，展望未来',
            explanation: '毕业演讲三部分：回忆（小学美好回忆）、感谢（感谢老师同学）、展望（对未来的期待）。'
          },
          {
            id: 'c6u6l3q2',
            type: 'choice',
            question: '毕业演讲稿的开头应该有？',
            options: ['称呼', '日期', '论点'],
            answer: '称呼',
            hint: '演讲开头先叫谁',
            explanation: '演讲稿开头要有称呼，如"敬爱的老师、亲爱的同学们"。'
          },
          {
            id: 'c6u6l3q3',
            type: 'fill',
            question: '毕业演讲中"感谢"部分主要感谢___和同学',
            answer: '老师',
            acceptableAnswers: ['老师', '师长', '老师同学'],
            hint: '除了同学还要感谢谁',
            explanation: '毕业演讲的"感谢"部分主要感谢老师的教导和同学的陪伴。'
          },
          {
            id: 'c6u6l3q4',
            type: 'choice',
            question: '毕业演讲最重要的是？',
            options: ['辞藻华丽', '真情实感', '字数最多'],
            answer: '真情实感',
            hint: '什么让演讲打动人',
            explanation: '毕业演讲最重要的是真情实感，发自内心的感受才能打动听众。'
          },
          {
            id: 'c6u6l3q5',
            type: 'choice',
            question: '【期末真题】毕业演讲稿与议论文最大的区别是？',
            options: ['演讲稿以抒情为主，议论文以说理为主', '没有区别', '演讲稿不需要称呼'],
            answer: '演讲稿以抒情为主，议论文以说理为主',
            hint: '两种文体的核心目的不同',
            explanation: '毕业演讲稿以抒情表达感情为主，议论文以说理说服别人为主，这是两者最大的区别。这是期末常考的文体辨析！'
          },
          {
            id: 'c6u6l3q6',
            type: 'drag',
            question: '把毕业演讲三部分按顺序排列：回忆、感谢、展望',
            answer: '回忆,感谢,展望',
            hint: '先回忆再感谢最后展望',
            explanation: '毕业演讲三部分顺序：回忆（过去）→感谢（现在）→展望（未来）。'
          },
          {
            id: 'c6u6l3q7',
            type: 'fill',
            question: '写信结尾祝语"此致 敬礼"，"敬礼"要___格写',
            answer: '顶',
            hint: '[应用文写作]（五年级语文-第7单元）',
            explanation: '书信格式中"此致"空两格写，"敬礼"顶格写，是五年级应用文写作学过的。'
          }
        ]
      },
      {
        id: 'c6u6l4',
        title: '小组合作——制作毕业纪念册',
        order: 4,
        teachingMethod: '项目式',
        content: [
          { type: 'text', content: '制作毕业纪念册需要小组合作。合理分工：封面设计、文章撰写、照片整理、装饰美化，每个人发挥所长，合作完成一本精美的纪念册。', animationType: 'bounce' },
          { type: 'example', content: '小组分工：\n封面设计——负责封面和封底设计\n文章撰写——负责写成长故事和感言\n照片整理——负责挑选和排版照片\n装饰美化——负责插图和装饰', label: '小组分工', animationType: 'bounce' },
          { type: 'tip', content: '合作三原则：①明确分工——每人负责一部分；②互相帮助——遇到困难一起解决；③统一风格——整体风格要协调一致。', label: '合作三原则', animationType: 'pulse' },
          { type: 'example', content: '纪念册结构：\n封面（标题+毕业年份）→目录→卷首语→成长故事（多篇）→同学留言→老师寄语→封底', label: '纪念册结构', animationType: 'bounce' },
          { type: 'animation', content: '纪念册各部分完成动画：封面、文章、照片、装饰各部分依次完成，最后合在一起成为完整纪念册', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '纪念册制作完成',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '封面', text: '封面完成', ttsNarration: '第一步：封面设计完成' },
                  { id: 's2', description: '文章', text: '文章写好', ttsNarration: '第二步：成长故事撰写完成' },
                  { id: 's3', description: '照片', text: '照片排版', ttsNarration: '第三步：照片整理排版完成' },
                  { id: 's4', description: '装饰', text: '装饰美化', ttsNarration: '第四步：装饰美化完成' },
                  { id: 's5', description: '完成', text: '纪念册完成！', ttsNarration: '纪念册制作完成！' },
                ],
              },
              ttsNarration: '小组分工合作，各部分依次完成，做出精美纪念册！',
            },
          },
          { type: 'tip', content: '合作小窍门：定期交流进度，遇到问题及时沟通，互相欣赏和鼓励，合作才能愉快高效。', label: '合作窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范分工合作：展示如何分工、如何协调各部分。',
        weDo: '亲子一起制作纪念册，分工合作。',
        youDo: '孩子独立完成个人负责的部分。',
        parentTips: '分工：封面/文章/照片/装饰。教孩子合作三原则：明确分工、互相帮助、统一风格。',
        funElement: '纪念册工坊：全家分工做一本"家庭纪念册"，爸爸做封面，妈妈写文章，孩子配插图，看合作出的纪念册有多精美！',
        gsapAnimations: [
          'GSAP:timeline|纪念册各部分完成|1.5s|点击播放|power2.out',
          'GSAP:cardReveal|分工卡片翻转|0.5s|点击|power2.inOut',
        ],
        images: [
          'IMG:illustration|毕业纪念册|500x350|可爱卡通风|png|纪念册封面',
        ],
        practiceQuestions: [
          {
            id: 'c6u6l4q1',
            type: 'choice',
            question: '制作毕业纪念册的小组分工不包括下列哪项？',
            options: ['封面设计', '文章撰写', '数学竞赛'],
            answer: '数学竞赛',
            hint: '哪项和制作纪念册无关',
            explanation: '小组分工包括封面设计、文章撰写、照片整理、装饰美化。数学竞赛与制作纪念册无关。'
          },
          {
            id: 'c6u6l4q2',
            type: 'choice',
            question: '小组合作的三原则是？',
            options: ['明确分工、互相帮助、统一风格', '各做各的互不交流', '一个人做完所有事'],
            answer: '明确分工、互相帮助、统一风格',
            hint: '回忆合作三原则',
            explanation: '合作三原则：明确分工、互相帮助、统一风格，这样才能高效合作。'
          },
          {
            id: 'c6u6l4q3',
            type: 'fill',
            question: '毕业纪念册的封面设计包括标题和毕业___',
            answer: '年份',
            hint: '封面上除了标题还有什么',
            explanation: '纪念册封面包括标题和毕业年份，如"2026届毕业纪念册"。'
          },
          {
            id: 'c6u6l4q4',
            type: 'choice',
            question: '小组合作时遇到困难应该？',
            options: ['放弃不做了', '互相帮助一起解决', '指责队友'],
            answer: '互相帮助一起解决',
            hint: '合作三原则之一',
            explanation: '遇到困难要互相帮助一起解决，这是合作三原则之一，不能放弃或指责队友。'
          },
          {
            id: 'c6u6l4q5',
            type: 'choice',
            question: '【期末真题】小组合作制作纪念册，最重要的是？',
            options: ['一个人包揽所有工作', '合理分工，互相配合', '比谁做得快'],
            answer: '合理分工，互相配合',
            hint: '合作的关键是什么',
            explanation: '小组合作最重要的是合理分工、互相配合，发挥各自所长，才能高效完成。这是期末常考的合作理念！'
          },
          {
            id: 'c6u6l4q6',
            type: 'drag',
            question: '把纪念册结构按顺序排列：封面、目录、成长故事、同学留言、封底',
            answer: '封面,目录,成长故事,同学留言,封底',
            hint: '从开头到结尾的顺序',
            explanation: '纪念册结构：封面→目录→成长故事→同学留言→封底。'
          },
          {
            id: 'c6u6l4q7',
            type: 'fill',
            question: '写通知正文最后要写发通知的___和日期',
            answer: '单位',
            hint: '[应用文写作]（五年级语文-第7单元）',
            explanation: '通知格式：标题→正文（事由+时间+地点+要求）→发文单位→日期，是五年级应用文写作学过的。'
          }
        ]
      },
      {
        id: 'c6u6l5',
        title: '成果展示——毕业分享会',
        order: 5,
        teachingMethod: '综合展示',
        content: [
          { type: 'text', content: '毕业分享会上，展示成长纪念册，发表毕业演讲，和同学老师分享六年的收获。这是小学阶段最难忘的时刻，勇敢地展示自己吧！', animationType: 'bounce' },
          { type: 'tip', content: '展示小贴士：①准备充分——提前练习；②自信大方——抬头挺胸；③表达清楚——声音洪亮；④感恩真诚——真心感谢。', label: '展示小贴士', animationType: 'pulse' },
          { type: 'example', content: '分享会流程：\n开场（主持人介绍）→纪念册展示（轮流展示）→毕业演讲（代表发言）→同学互赠留言→老师寄语→合影留念', label: '分享会流程', animationType: 'bounce' },
          { type: 'animation', content: '展示完成撒花动画：分享会展示完成后撒花庆祝，获得"毕业分享小达人"徽章', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '毕业分享会',
              sequenceConfig: { items: ['展示纪念册', '发表演讲', '互赠留言', '撒花庆祝！'], order: 'custom', itemType: 'word' },
              ttsNarration: '毕业分享会：展示纪念册，发表演讲，互赠留言，撒花庆祝！',
            },
          },
          { type: 'tip', content: '毕业寄语：六年的时光，是人生最美的回忆。带着这份美好，勇敢地迈向新的征程，未来一定会更好！', label: '毕业寄语', animationType: 'pulse' },
          { type: 'text', content: '毕业演讲要抓住"回忆、感谢、展望"三个部分。回忆用具体故事，感谢点名道姓说真心话，展望要真诚有力量。开头可以说"六年前……"，结尾可以说"未来，我们……"，让演讲有首有尾。', animationType: 'reveal' },
          { type: 'example', content: '例题（演讲片段）：\n"六年前，我怯生生地走进校门；六年里，老师的耐心教导让我从怕写作文到爱上写作。谢谢您，李老师！未来，我会带着这份热爱继续前行。"\n→回忆（六年前）+感谢（李老师）+展望（未来继续前行）', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范展示：展示如何自信地展示纪念册和发表演讲。',
        weDo: '亲子一起练习展示，互相鼓励。',
        youDo: '孩子独立展示成长纪念册并发表演讲。',
        parentTips: '展示成长纪念册+演讲。教孩子自信大方、表达清楚、感恩真诚。',
        funElement: '毕业分享会达人挑战：完成展示和演讲，获得"毕业分享小达人"金色徽章，为小学画上圆满句号！',
        gsapAnimations: [
          'GSAP:confetti|展示完成撒花|2s|展示完成|power1.out|particleCount:50',
          'GSAP:starFlyIn|达人徽章飞入|1.5s|展示完成|power2.out',
        ],
        images: [
          'IMG:illustration|毕业分享会徽章|300x300|可爱卡通风|png|金色徽章',
        ],
        practiceQuestions: [
          {
            id: 'c6u6l5q1',
            type: 'choice',
            question: '毕业分享会上不需要做下列哪件事？',
            options: ['展示纪念册', '发表演讲', '参加考试'],
            answer: '参加考试',
            hint: '哪项和分享会无关',
            explanation: '毕业分享会包括展示纪念册、发表演讲、互赠留言等。参加考试与分享会无关。'
          },
          {
            id: 'c6u6l5q2',
            type: 'choice',
            question: '展示成果时应该？',
            options: ['低头不敢看人', '自信大方、声音洪亮', '随便应付'],
            answer: '自信大方、声音洪亮',
            hint: '回忆展示小贴士',
            explanation: '展示时要自信大方、抬头挺胸、声音洪亮、表达清楚，这样才能展示出最好的自己。'
          },
          {
            id: 'c6u6l5q3',
            type: 'fill',
            question: '毕业分享会展示的内容包括成长纪念册和毕业___',
            answer: '演讲',
            hint: '除了纪念册还有什么',
            explanation: '毕业分享会主要展示成长纪念册和发表毕业演讲。'
          },
          {
            id: 'c6u6l5q4',
            type: 'choice',
            question: '毕业分享会的意义是？',
            options: ['只是走形式', '分享收获，感恩告别，展望未来', '为了拿奖状'],
            answer: '分享收获，感恩告别，展望未来',
            hint: '分享会的真正目的',
            explanation: '毕业分享会的意义是分享六年收获、感恩老师同学、展望美好未来，是小学最难忘的时刻。'
          },
          {
            id: 'c6u6l5q5',
            type: 'choice',
            question: '【期末真题】毕业分享会上发表演讲，最应该体现的态度是？',
            options: ['骄傲自大', '感恩真诚', '无所谓'],
            answer: '感恩真诚',
            hint: '什么态度最打动人',
            explanation: '毕业演讲最应体现感恩真诚的态度，真心感谢老师同学，这样才最打动人。这是期末常考的表达要求！'
          },
          {
            id: 'c6u6l5q6',
            type: 'drag',
            question: '把分享会流程按顺序排列：开场、纪念册展示、毕业演讲、同学留言、合影留念',
            answer: '开场,纪念册展示,毕业演讲,同学留言,合影留念',
            hint: '从开始到结束的顺序',
            explanation: '分享会流程：开场→纪念册展示→毕业演讲→同学留言→合影留念。'
          },
          {
            id: 'c6u6l5q7',
            type: 'fill',
            question: '写请假条要先写___再写正文最后写此致敬礼',
            answer: '称呼',
            hint: '[应用文写作]（五年级语文-第7单元）',
            explanation: '请假条格式：称呼→正文（请假原因+时间）→此致敬礼→署名→日期，是五年级应用文写作学过的。'
          }
        ]
      }
    ]
  },

  // ==================== 第七单元：文言文入门 ====================
  {
    id: 'c6u7',
    title: '文言文入门',
    subtitle: '小升初衔接——文言文',
    order: 7,
    lessons: [
      {
        id: 'c6u7l1',
        title: '文言文特点——与现代文对比',
        order: 1,
        teachingMethod: '对比辨析法',
        content: [
          { type: 'text', content: '文言文是古人的书面语言，与现代文有很多不同。文言文特点：简洁凝练、单音节词多、有特殊句式。对比文言和白话，能更清楚地认识文言文的特点。', animationType: 'bounce' },
          { type: 'example', content: '文言文 vs 现代文：\n文言文：学而时习之，不亦说乎？\n现代文：学习了知识然后按时温习它，不也是很愉快吗？\n→文言文简洁，现代文详细', label: '文言白话对比', animationType: 'bounce' },
          { type: 'tip', content: '文言文三大特点：①简洁——字数少意思全；②单音节词多——一字一词，如"学"=学习；③特殊句式——如倒装句、判断句。', label: '文言文特点', animationType: 'pulse' },
          { type: 'example', content: '单音节词示例：\n文言"学"=现代"学习"\n文言"走"=现代"跑步"\n文言"日"=现代"太阳"\n文言"妻"=现代"妻子"', label: '单音节词', animationType: 'bounce' },
          { type: 'animation', content: '文言文与现代文对比动画：左边文言文，右边现代文，一一对应比较，突出文言简洁的特点', animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: '文言文 vs 现代文',
              compareConfig: {
                leftItems: ['学而时习之', '不亦说乎', '走（跑）'],
                rightItems: ['学习了按时温习', '不也很愉快吗', '跑步'],
                result: 'equal',
                resultText: '文言简洁凝练，白话详细明白',
              },
              ttsNarration: '文言文简洁，现代文详细，对比着学更容易懂！',
            },
          },
          { type: 'tip', content: '学文言文小窍门：先读熟原文，再对照翻译理解，最后体会古今异义。多读多比，文言文就不难了。', label: '学习窍门', animationType: 'pulse' },
        ],
        iDo: '家长对比文言和白话：逐句对比，让孩子看清文言文简洁的特点。',
        weDo: '亲子一起对比：给一段文言文，一起说出现代文意思。',
        youDo: '孩子独立辨认文言文特点，说出与现代文的不同。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“文言文最突出的特点是什么？”②孩子应答：“简洁凝练，用很少的字表达完整意思。”③答错引导：若孩子没概念，家长对比“吾日三省吾身”(文言)和“我每天多次反省自己”(白话)，让孩子感受文言更简短。④快速出题：家长说一句白话，让孩子试着用文言缩成几个字。',
        funElement: '古今对话：一人说文言文，一人翻译成现代文，像古人穿越到现代对话，看谁翻译得最准确！',
        gsapAnimations: [
          'GSAP:compare|文言vs白话对比|0.8s|页面加载|power2.out',
          'GSAP:highlight|文言特点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|文言白话对照|500x300|教学风|png|对照表',
        ],
        practiceQuestions: [
          {
            id: 'c6u7l1q1',
            type: 'choice',
            question: '文言文最突出的特点是？',
            options: ['简洁凝练', '字数很多', '没有标点'],
            answer: '简洁凝练',
            hint: '文言文用字少意思全',
            explanation: '文言文最突出的特点是简洁凝练，用很少的字表达完整的意思。'
          },
          {
            id: 'c6u7l1q2',
            type: 'choice',
            question: '文言文中"走"的意思是？',
            options: ['步行', '跑', '离开'],
            answer: '跑',
            hint: '古今异义词',
            explanation: '文言文中"走"是"跑"的意思，与现在的"步行"不同，是古今异义词。'
          },
          {
            id: 'c6u7l1q3',
            type: 'fill',
            question: '文言文"学"对应的现代文意思是___',
            answer: '学习',
            hint: '单音节词对应双音节词',
            explanation: '文言文单音节词"学"对应现代文双音节词"学习"。'
          },
          {
            id: 'c6u7l1q4',
            type: 'choice',
            question: '"学而时习之，不亦说乎"与"学习了按时温习，不也很愉快吗"相比，体现了文言文的什么特点？',
            options: ['字数多', '简洁凝练', '没有意义'],
            answer: '简洁凝练',
            hint: '文言文用字少还是多',
            explanation: '文言文"学而时习之，不亦说乎"比现代文简洁很多，体现了文言文简洁凝练的特点。'
          },
          {
            id: 'c6u7l1q5',
            type: 'choice',
            question: '【期末真题】下列哪项不是文言文的特点？',
            options: ['简洁凝练', '单音节词多', '句子很长很啰嗦'],
            answer: '句子很长很啰嗦',
            hint: '文言文是简洁还是啰嗦',
            explanation: '文言文特点是简洁凝练、单音节词多、有特殊句式。"句子很长很啰嗦"不是文言文特点。这是期末常考的文言文常识！'
          },
          {
            id: 'c6u7l1q6',
            type: 'drag',
            question: '把文言词拖到对应现代意思：\n学 走 日 妻',
            answer: '学-学习,走-跑,日-太阳,妻-妻子',
            hint: '单音节词对应双音节词',
            explanation: '学=学习，走=跑，日=太阳，妻=妻子，都是文言单音节词对应现代双音节词。'
          },
          {
            id: 'c6u7l1q7',
            type: 'fill',
            question: '“锄禾日当午，汗滴禾下土”出自古诗《___》',
            answer: '悯农',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '《悯农》是五年级学习的古诗，“锄禾日当午，汗滴禾下土”写农民劳作辛苦。'
          }
        ]
      },
      {
        id: 'c6u7l2',
        title: '文言实词——常见字义',
        order: 2,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '文言实词是有实在意义的词，如名词、动词、形容词。掌握常见实词的古义，是读懂文言文的关键。很多实词古今意思不同，要特别注意。', animationType: 'bounce' },
          { type: 'example', content: '常见实词古今义：\n走——古义：跑；今义：步行\n去——古义：离开；今义：前往\n妻——古义：妻子和儿女；今义：妻子\n子——古义：孩子（男女都可）；今义：儿子', label: '实词古今义', animationType: 'bounce' },
          { type: 'tip', content: '记实词三步：①记古义——记住古文中的意思；②比今义——和现在的意思对比；③会运用——在句子中理解。', label: '记实词三步', animationType: 'pulse' },
          { type: 'example', content: '实词运用示例：\n"兔走触株"——走=跑（兔子跑来撞树桩）\n"太丘舍去"——去=离开（太丘放下离开）\n"率妻子邑人来此绝境"——妻=妻子和儿女', label: '实词运用', animationType: 'bounce' },
          { type: 'animation', content: '实词卡片翻转翻译动画：点击实词卡片，翻转显示古义和今义，对照翻译', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '实词翻译翻转',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '走', back: '古义：跑', ttsText: '走：古义是跑，今义是步行' },
                  { id: 'c1', front: '去', back: '古义：离开', ttsText: '去：古义是离开，今义是前往' },
                  { id: 'c2', front: '妻', back: '古义：妻子和儿女', ttsText: '妻：古义是妻子和儿女，今义是妻子' },
                  { id: 'c3', front: '子', back: '古义：孩子', ttsText: '子：古义是孩子男女都可，今义是儿子' },
                ],
              },
              ttsNarration: '实词翻译：走是跑，去是离开，妻是妻子儿女，子是孩子！',
            },
          },
          { type: 'tip', content: '小窍门：把常见实词的古义记在笔记本上，经常复习。遇到文言文先想实词古义，再理解句子。', label: '记忆窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范常见实词的意思：逐个讲解实词古义和今义。',
        weDo: '亲子一起记实词，互相考问。',
        youDo: '孩子独立翻译实词，说出古义和今义。',
        parentTips: '共学四步（家长当陪练）：①对话出题：家长问“文言文里‘走’是什么意思？”②孩子应答：“古义是跑，不是现在的走。”③答错引导：若孩子答“走”，家长讲“走马观花”原指骑马跑着看，所以“走”古义是跑，强调记古义。④快速听写：家长报“走、去、妻、子”，孩子说出古义(跑、离开、妻子儿女)。',
        funElement: '实词翻翻乐：做实词卡片，正面写字背面写古义，翻牌记忆，看谁记得最多最快！',
        gsapAnimations: [
          'GSAP:cardReveal|实词卡片翻转翻译|0.5s|点击|power2.inOut',
          'GSAP:highlight|古今异义高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|实词对照表|500x300|教学风|png|古义今义',
        ],
        practiceQuestions: [
          {
            id: 'c6u7l2q1',
            type: 'choice',
            question: '"去"在文言文中的古义是？',
            options: ['前往', '离开', '去掉'],
            answer: '离开',
            hint: '古今异义词',
            explanation: '"去"在文言文中古义是"离开"，今义是"前往"，是古今异义词。'
          },
          {
            id: 'c6u7l2q2',
            type: 'choice',
            question: '"妻"在古文中的意思是？',
            options: ['只有妻子', '妻子和儿女', '只有女儿'],
            answer: '妻子和儿女',
            hint: '古义比今义范围大',
            explanation: '"妻"在古文中意思是"妻子和儿女"，比今义"妻子"范围更大。'
          },
          {
            id: 'c6u7l2q3',
            type: 'fill',
            question: '"兔走触株"中"走"的古义是___',
            answer: '跑',
            hint: '兔子怎么撞树桩的',
            explanation: '"兔走触株"中"走"古义是"跑"，兔子跑来撞到树桩。'
          },
          {
            id: 'c6u7l2q4',
            type: 'choice',
            question: '下列哪个实词古今义相同？',
            options: ['走（古今义不同）', '去（古今义不同）', '山（古今义相同）'],
            answer: '山（古今义相同）',
            hint: '哪个词古今意思没变',
            explanation: '"山"古今义相同都是山。"走"古义跑今义步行，"去"古义离开今义前往，都不同。'
          },
          {
            id: 'c6u7l2q5',
            type: 'choice',
            question: '【期末真题】"太丘舍去"中"去"的正确翻译是？',
            options: ['太丘前往', '太丘离开', '太丘去掉'],
            answer: '太丘离开',
            hint: '注意"去"的古义',
            explanation: '"去"古义是"离开"，"太丘舍去"翻译为"太丘放下（东西）离开了"。这是期末常考的实词翻译！'
          },
          {
            id: 'c6u7l2q6',
            type: 'drag',
            question: '把实词拖到对应古义：\n走 去 妻 子',
            answer: '走-跑,去-离开,妻-妻子和儿女,子-孩子',
            hint: '回忆常见实词古义',
            explanation: '走=跑，去=离开，妻=妻子和儿女，子=孩子，都是常见实词的古义。'
          },
          {
            id: 'c6u7l2q7',
            type: 'fill',
            question: '补写诗句：“举头望明月，低头思___”',
            answer: '故乡',
            hint: '[古诗名句]（五年级语文-第5单元）',
            explanation: '《静夜思》中“举头望明月，低头思故乡”，思故乡表达思乡之情。'
          }
        ]
      },
      {
        id: 'c6u7l3',
        title: '文言虚词——之乎者也',
        order: 3,
        teachingMethod: '支架式',
        content: [
          { type: 'text', content: '文言虚词没有实在意义，但在句中起语法作用。常见虚词有"之、乎、者、也、矣、焉"等。掌握虚词的用法，能更好地理解文言文句意。', animationType: 'bounce' },
          { type: 'example', content: '常见虚词用法：\n之——①的（古之学者）；②他/它（学而时习之）；③去/往（吾欲之南海）\n也——语气词，表判断或感叹（孔子东游也）\n乎——语气词，表疑问或感叹（不亦说乎）\n者——……的人（耕者）', label: '虚词用法', animationType: 'bounce' },
          { type: 'tip', content: '"之"字三用法最常考：①的——修饰关系；②代词——他/它；③动词——去/往。根据上下文判断"之"是哪种用法。', label: '之字三用法', animationType: 'pulse' },
          { type: 'example', content: '"之"字辨析：\n"古之学者"——之=的（古代的学者）\n"学而时习之"——之=它（温习它）\n"吾欲之南海"——之=去（我想去南海）', label: '之字辨析', animationType: 'bounce' },
          { type: 'animation', content: '虚词用法逐个展示动画：之、乎、者、也等虚词依次出现，展示各自的用法和例句', animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: '虚词用法',
              timelineConfig: {
                steps: [
                  { id: 's1', description: '之', text: '的/他/去', ttsNarration: '之：的、他它、去往，三种用法' },
                  { id: 's2', description: '也', text: '语气词', ttsNarration: '也：语气词，表判断或感叹' },
                  { id: 's3', description: '乎', text: '语气词', ttsNarration: '乎：语气词，表疑问或感叹' },
                  { id: 's4', description: '者', text: '……的人', ttsNarration: '者：……的人，如耕者' },
                ],
              },
              ttsNarration: '虚词之乎者也各有用法，根据上下文判断！',
            },
          },
          { type: 'tip', content: '判断虚词用法小窍门：把虚词替换成不同的意思读一读，哪个通顺就是哪个用法。', label: '判断窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范虚词用法：逐个讲解之乎者也的用法和例句。',
        weDo: '亲子一起辨析虚词，互相考问。',
        youDo: '孩子独立判断虚词用法。',
        parentTips: '虚词：之/乎/者/也/矣。"之"最常考三用法：的、代词、去往。',
        funElement: '虚词魔法师：给一句文言文，当"虚词魔法师"把虚词变出正确的意思，看谁的魔法最准！',
        gsapAnimations: [
          'GSAP:timeline|虚词用法展示|1.5s|点击播放|power2.out',
          'GSAP:highlight|虚词高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|虚词用法表|500x300|教学风|png|虚词对照',
        ],
        practiceQuestions: [
          {
            id: 'c6u7l3q1',
            type: 'choice',
            question: '"古之学者"中"之"的用法是？',
            options: ['的', '他/它', '去/往'],
            answer: '的',
            hint: '古（的）学者',
            explanation: '"古之学者"中"之"是"的"的意思，表修饰关系，"古之学者"即"古代的学者"。'
          },
          {
            id: 'c6u7l3q2',
            type: 'choice',
            question: '"学而时习之"中"之"的用法是？',
            options: ['的', '代词（他/它）', '去/往'],
            answer: '代词（他/它）',
            hint: '温习什么',
            explanation: '"学而时习之"中"之"是代词，代指学过的知识，"温习它"。'
          },
          {
            id: 'c6u7l3q3',
            type: 'fill',
            question: '"吾欲之南海"中"之"的意思是___',
            answer: '去',
            acceptableAnswers: ['去', '前往', '去往'],
            hint: '我想___南海',
            explanation: '"吾欲之南海"中"之"是动词"去/往"的意思，"我想去南海"。'
          },
          {
            id: 'c6u7l3q4',
            type: 'choice',
            question: '"不亦说乎"中"乎"的作用是？',
            options: ['表判断', '表疑问或感叹', '表修饰'],
            answer: '表疑问或感叹',
            hint: '乎是语气词',
            explanation: '"不亦说乎"中"乎"是语气词，表疑问或感叹，"不也很愉快吗"。'
          },
          {
            id: 'c6u7l3q5',
            type: 'choice',
            question: '【期末真题】"耕者"中"者"的意思是？',
            options: ['的人', '的', '去'],
            answer: '的人',
            hint: '耕者是什么人',
            explanation: '"者"意思是"……的人"，"耕者"即"种田的人"。这是期末常考的虚词用法！'
          },
          {
            id: 'c6u7l3q6',
            type: 'drag',
            question: '把"之"的用法拖到对应例句：\n"古之学者" "学而时习之" "吾欲之南海"',
            answer: '的-古之学者,代词-学而时习之,去往-吾欲之南海',
            hint: '回忆之字三用法',
            explanation: '"古之学者"之=的；"学而时习之"之=代词；"吾欲之南海"之=去往。'
          },
          {
            id: 'c6u7l3q7',
            type: 'fill',
            question: '"春风又绿江南岸"中"绿"字原是形容词，这里用作___词',
            answer: '动',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '王安石《泊船瓜洲》"春风又绿江南岸"中"绿"是形容词用作动词，表示"吹绿了"，是五年级古诗文鉴赏学过的。'
          }
        ]
      },
      {
        id: 'c6u7l4',
        title: '文言短文阅读——《揠苗助长》',
        order: 4,
        teachingMethod: 'CPA·C→P→A',
        content: [
          { type: 'text', content: '学了实词虚词，我们来读一篇完整的文言短文《揠苗助长》。读文言文要：读准字音、理解字词、疏通句意、体会感悟。让我们逐句翻译，读懂这个故事。', animationType: 'bounce' },
          { type: 'poem', content: '《揠苗助长》\n宋人有闵其苗之不长而揠之者。\n芒芒然归，谓其人曰：\n"今日病矣！予助苗长矣！"\n其子趋而往视之，苗则槁矣。', label: '文言短文', animationType: 'pulse' },
          { type: 'tip', content: '重点字词：闵——担心；揠——拔；芒芒然——疲惫的样子；病——累；予——我；趋——快走；槁——枯萎。', label: '重点字词', animationType: 'pulse' },
          { type: 'example', content: '逐句翻译：\n宋人有闵其苗之不长而揠之者——宋国有个担心禾苗不长而把它们拔高的人\n芒芒然归——疲惫地回到家\n"今日病矣！予助苗长矣！"——"今天累坏了！我帮禾苗长高了！"\n其子趋而往视之，苗则槁矣——他儿子快步去看，禾苗已经枯萎了', label: '逐句翻译', animationType: 'bounce' },
          { type: 'animation', content: '文言文逐句翻译翻转动画：每句文言文点击翻转显示白话翻译，原文译文对照，揭示揠苗助长的故事', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '揠苗助长翻译',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '宋人有闵其苗之不长而揠之者', back: '宋国有人担心禾苗不长而拔高它', ttsText: '宋国有人担心禾苗长得慢，就把禾苗拔高' },
                  { id: 'c1', front: '芒芒然归', back: '疲惫地回到家', ttsText: '芒芒然归：疲惫地回到家' },
                  { id: 'c2', front: '今日病矣，予助苗长矣', back: '今天累坏了，我帮禾苗长高了', ttsText: '今天累坏了，我帮禾苗长高了' },
                  { id: 'c3', front: '苗则槁矣', back: '禾苗已经枯萎了', ttsText: '儿子去看，禾苗已经枯萎了' },
                ],
              },
              ttsNarration: '揠苗助长：把禾苗拔高反而害了它，做事不能违背规律！',
            },
          },
          { type: 'tip', content: '感悟：揠苗助长告诉我们做事不能急于求成、违背客观规律，否则会适得其反。', label: '感悟', animationType: 'pulse' },
        ],
        iDo: '家长读《揠苗助长》+逐句翻译，示范如何读懂文言短文。',
        weDo: '亲子一起翻译，互相检查字词理解。',
        youDo: '孩子独立翻译《揠苗助长》并说出感悟。',
        parentTips: '读《揠苗助长》：揠=拔，闵=担心，槁=枯萎。逐句翻译，体会做事不能急于求成的道理。',
        funElement: '古文小剧场：把《揠苗助长》演成小剧场，一人当农夫拔苗，一人当儿子去看，用古文和现代文交替演，超有趣！',
        gsapAnimations: [
          'GSAP:cardReveal|文言文翻译翻转|1.5s|点击播放|power2.out',
          'GSAP:sceneBuild|揠苗助长场景|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|揠苗助长图|500x300|水墨画风|png|拔苗场景',
        ],
        practiceQuestions: [
          {
            id: 'c6u7l4q1',
            type: 'choice',
            question: '"揠苗助长"中"揠"的意思是？',
            options: ['种', '拔', '浇水'],
            answer: '拔',
            hint: '农夫对禾苗做了什么',
            explanation: '"揠"是"拔"的意思。"揠苗"就是把禾苗拔高。'
          },
          {
            id: 'c6u7l4q2',
            type: 'choice',
            question: '"宋人有闵其苗之不长"中"闵"的意思是？',
            options: ['高兴', '担心', '讨厌'],
            answer: '担心',
            hint: '农夫对禾苗不长是什么心情',
            explanation: '"闵"是"担心"的意思。"闵其苗之不长"是担心禾苗长得慢。'
          },
          {
            id: 'c6u7l4q3',
            type: 'fill',
            question: '"苗则槁矣"中"槁"的意思是___',
            answer: '枯萎',
            acceptableAnswers: ['枯萎', '枯死', '干枯'],
            hint: '禾苗被拔后怎么了',
            explanation: '"槁"是"枯萎"的意思。"苗则槁矣"是禾苗已经枯萎了。'
          },
          {
            id: 'c6u7l4q4',
            type: 'choice',
            question: '《揠苗助长》告诉我们的道理是？',
            options: ['禾苗要拔才长得快', '做事不能急于求成、违背规律', '种田很辛苦'],
            answer: '做事不能急于求成、违背规律',
            hint: '拔苗的结果是什么',
            explanation: '《揠苗助长》告诉我们做事不能急于求成、违背客观规律，否则会适得其反，害了事物。'
          },
          {
            id: 'c6u7l4q5',
            type: 'choice',
            question: '【期末真题】"芒芒然归"的正确翻译是？',
            options: ['高高兴兴地回家', '疲惫地回到家', '慢慢地回家'],
            answer: '疲惫地回到家',
            hint: '芒芒然是什么样子',
            explanation: '"芒芒然"是疲惫的样子，"芒芒然归"翻译为"疲惫地回到家"。这是期末常考的文言文翻译！'
          },
          {
            id: 'c6u7l4q6',
            type: 'drag',
            question: '把字词拖到对应意思：\n揠 闵 槁 趋',
            answer: '揠-拔,闵-担心,槁-枯萎,趋-快走',
            hint: '回忆重点字词',
            explanation: '揠=拔，闵=担心，槁=枯萎，趋=快走，都是《揠苗助长》的重点字词。'
          },
          {
            id: 'c6u7l4q7',
            type: 'fill',
            question: '"随风潜入夜，润物细无声"描写的是___(自然现象)',
            answer: '春雨',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '杜甫《春夜喜雨》"随风潜入夜，润物细无声"描写春雨，是五年级古诗文鉴赏学过的。'
          }
        ]
      },
      {
        id: 'c6u7l5',
        title: '文言文入门综合检测',
        order: 5,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '学完了文言文入门，让我们综合检测一下！这节课将练习文言文特点、实词虚词、短文翻译，看看你掌握了多少。', animationType: 'bounce' },
          { type: 'tip', content: '检测小贴士：文言文重在积累实词虚词的古义，多读多译多记。做错的题回到前面复习。', label: '检测提示', animationType: 'pulse' },
          { type: 'example', content: '复习要点：\n①文言文特点：简洁凝练、单音节词多\n②实词：走=跑，去=离开\n③虚词：之=的/代词/去往\n④短文翻译：揠=拔，闵=担心，槁=枯萎', label: '复习要点', animationType: 'bounce' },
          { type: 'animation', content: '通关撒花动画：完成检测，正确率≥75%撒花庆祝，获得"文言文小达人"徽章', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '文言文达人通关',
              sequenceConfig: { items: ['实词', '虚词', '翻译', '通关撒花！'], order: 'custom', itemType: 'word' },
              ttsNarration: '恭喜你完成文言文入门综合检测，你是文言文小达人！',
            },
          },
          { type: 'tip', content: '文言文口诀：简洁凝练单音节，实词古今义不同，虚词之乎者也用，翻译逐句不放松。', label: '复习口诀', animationType: 'pulse' },
          { type: 'text', content: '文言文检测的关键是"字字落实"。翻译时每个字都要译出意思，不能跳过。遇到不认识的字，结合上下文猜，再查证。特别留意古今异义词，如"走"今义是步行，古义却是跑，译错意思就全拧了。', animationType: 'reveal' },
          { type: 'example', content: '例题：翻译"夸父与日逐走"。\n→"逐"=追赶，"走"=跑（古义，不是现代的"步行"）\n→整句翻译：夸父追赶太阳，一路奔跑。', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范检测：做一道文言文翻译题，示范如何理解字词、翻译句子。',
        weDo: '亲子一起练习文言文翻译。',
        youDo: '孩子独立完成文言文测试，翻译句子、理解字词。',
        parentTips: '翻译+理解，正确率≥75%就很棒。错了的题回到对应课时复习。',
        funElement: '文言文达人挑战：完成全部检测题，正确率≥75%获得"文言文小达人"金色徽章！',
        gsapAnimations: [
          'GSAP:confetti|通关撒花|2s|正确率≥75%|power1.out|particleCount:40',
          'GSAP:highlight|检测要点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|文言文达人徽章|300x300|可爱卡通风|png|金色徽章',
        ],
        practiceQuestions: [
          {
            id: 'c6u7l5q1',
            type: 'choice',
            question: '文言文最突出的特点是？',
            options: ['简洁凝练', '句子很长', '没有标点'],
            answer: '简洁凝练',
            hint: '回忆文言文特点',
            explanation: '文言文最突出的特点是简洁凝练，用很少的字表达完整意思。'
          },
          {
            id: 'c6u7l5q2',
            type: 'choice',
            question: '"走"在文言文中的古义是？',
            options: ['步行', '跑', '离开'],
            answer: '跑',
            hint: '古今异义实词',
            explanation: '"走"在文言文中古义是"跑"，今义是"步行"，是古今异义实词。'
          },
          {
            id: 'c6u7l5q3',
            type: 'fill',
            question: '"古之学者"中"之"的用法是___（填"的"或"去"）',
            answer: '的',
            hint: '古（的）学者',
            explanation: '"古之学者"中"之"是"的"的意思，表修饰关系。'
          },
          {
            id: 'c6u7l5q4',
            type: 'choice',
            question: '"揠苗助长"中"揠"的意思是？',
            options: ['种', '拔', '浇水'],
            answer: '拔',
            hint: '农夫对禾苗做了什么',
            explanation: '"揠"是"拔"的意思，"揠苗"就是把禾苗拔高。'
          },
          {
            id: 'c6u7l5q5',
            type: 'choice',
            question: '【期末真题】"学而时习之"中"之"的用法是？',
            options: ['的', '代词（他/它）', '去/往'],
            answer: '代词（他/它）',
            hint: '温习什么',
            explanation: '"学而时习之"中"之"是代词，代指学过的知识，"温习它"。这是期末常考的虚词用法！'
          },
          {
            id: 'c6u7l5q6',
            type: 'drag',
            question: '把字词拖到对应古义：\n走 去 揠 闵',
            answer: '走-跑,去-离开,揠-拔,闵-担心',
            hint: '回忆实词古义',
            explanation: '走=跑，去=离开，揠=拔，闵=担心，都是文言文常见字词的古义。'
          },
          {
            id: 'c6u7l5q7',
            type: 'fill',
            question: '"举头望明月"中"举"的意思是___',
            answer: '抬',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '"举头"即抬头，"举"是"抬"的意思，是五年级古诗文鉴赏学过的字词理解。'
          }
        ]
      }
    ]
  },

  // ==================== 第八单元：综合测评 ====================
  {
    id: 'c6u8',
    title: '综合测评',
    subtitle: '小升初综合复习与测评',
    order: 8,
    lessons: [
      {
        id: 'c6u8l1',
        title: '阅读理解总复习——各类文体',
        order: 1,
        teachingMethod: '综合复习',
        content: [
          { type: 'text', content: '小学六年我们学过很多文体：记叙文、说明文、议论文、小说、散文、诗歌。每种文体特点不同，阅读方法也不同。今天我们综合复习各类文体的阅读方法。', animationType: 'bounce' },
          { type: 'example', content: '各类文体特点：\n记叙文——以事感人，六要素齐全\n说明文——以知启人，说明事物特征\n议论文——以理服人，论点论据论证\n小说——人物情节环境\n散文——形散神聚\n诗歌——押韵凝练，有意境', label: '文体特点总览', animationType: 'bounce' },
          { type: 'tip', content: '阅读方法：记叙文找六要素；说明文抓说明方法；议论文找三要素；小说析人物情节；散文品形散神聚；诗歌想画面悟情感。', label: '阅读方法', animationType: 'pulse' },
          { type: 'example', content: '文体判断示例：\n"那天下大雨，我淋成了落汤鸡"——记叙文（叙事）\n"鲸鱼是哺乳动物，用肺呼吸"——说明文（说明）\n"读书有益，我们应该多读书"——议论文（说理）', label: '文体判断', animationType: 'bounce' },
          { type: 'animation', content: '各类文体卡片依次展示动画：记叙文、说明文、议论文、小说、散文、诗歌六张卡片依次翻转，展示各自特点', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '各类文体总览',
              sequenceConfig: {
                items: ['记叙文-以事感人', '说明文-以知启人', '议论文-以理服人', '小说-人物情节环境', '散文-形散神聚', '诗歌-押韵有意境'],
                order: 'custom',
                itemType: 'word',
              },
              ttsNarration: '六种文体各有特点：记叙文以事感人，说明文以知启人，议论文以理服人！',
            },
          },
          { type: 'tip', content: '复习小窍门：用对比法记忆各类文体特点，找出相同点和不同点，记得更牢。', label: '复习窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范判断文体：读片段，示范如何判断文体并选用阅读方法。',
        weDo: '亲子一起判断文体，互相讨论。',
        youDo: '孩子独立判断文体并选用阅读方法。',
        parentTips: '六种文体各有特点。用对比法记忆，根据文体选用阅读方法。',
        funElement: '文体大转盘：转动"文体大转盘"，转到哪种文体就说出它的特点和阅读方法，看谁答得最快最准！',
        gsapAnimations: [
          'GSAP:sequence|文体卡片依次展示|2s|点击播放|power2.out',
          'GSAP:cardReveal|文体卡片翻转|0.5s|点击|power2.inOut',
        ],
        images: [
          'IMG:illustration|文体总览图|500x300|教学风|png|六种文体',
        ],
        practiceQuestions: [
          {
            id: 'c6u8l1q1',
            type: 'choice',
            question: '"鲸鱼是哺乳动物，用肺呼吸"属于哪种文体？',
            options: ['记叙文', '说明文', '议论文'],
            answer: '说明文',
            hint: '介绍事物特征的是什么文体',
            explanation: '介绍鲸鱼的特征和知识，属于说明文（以知启人）。'
          },
          {
            id: 'c6u8l1q2',
            type: 'choice',
            question: '议论文的核心特点是？',
            options: ['以事感人', '以知启人', '以理服人'],
            answer: '以理服人',
            hint: '议论文用什么说服人',
            explanation: '议论文的核心是以理服人——讲道理、说服别人。'
          },
          {
            id: 'c6u8l1q3',
            type: 'fill',
            question: '小说三要素是人物、情节和___',
            answer: '环境',
            hint: '回忆小说三要素',
            explanation: '小说三要素：人物（核心）、情节（骨架）、环境（背景）。'
          },
          {
            id: 'c6u8l1q4',
            type: 'choice',
            question: '散文最大的特点是？',
            options: ['形散神聚', '论点论据', '人物情节'],
            answer: '形散神聚',
            hint: '散文的标志性特点',
            explanation: '散文最大的特点是"形散神聚"：取材自由（形散）中心统一（神聚）。'
          },
          {
            id: 'c6u8l1q5',
            type: 'choice',
            question: '【期末真题】"读书有益，我们应该多读书"属于哪种文体？',
            options: ['记叙文', '说明文', '议论文'],
            answer: '议论文',
            hint: '提出观点并说理的是什么文体',
            explanation: '"读书有益，我们应该多读书"提出观点并说理，属于议论文（以理服人）。这是期末常考的文体判断！'
          },
          {
            id: 'c6u8l1q6',
            type: 'drag',
            question: '把文体拖到对应特点：\n记叙文 说明文 议论文 散文',
            answer: '记叙文-以事感人,说明文-以知启人,议论文-以理服人,散文-形散神聚',
            hint: '回忆各类文体特点',
            explanation: '记叙文以事感人，说明文以知启人，议论文以理服人，散文形散神聚。'
          },
          {
            id: 'c6u8l1q7',
            type: 'fill',
            question: '记叙文六要素中最重要的是___和经过',
            answer: '起因',
            hint: '[记叙文六要素]（五年级语文-第2单元）',
            explanation: '记叙文六要素：时间、地点、人物、起因、经过、结果，其中起因和经过最关键，是五年级学过的。'
          }
        ]
      },
      {
        id: 'c6u8l2',
        title: '作文总复习——各类文体',
        order: 2,
        teachingMethod: '综合复习',
        content: [
          { type: 'text', content: '写作也要分文体。记叙文写事要六要素齐全、细节生动；议论文要论点论据论证；散文要形散神聚。今天我们综合复习各类文体的写作方法。', animationType: 'bounce' },
          { type: 'example', content: '各类文体写作要点：\n记叙文——六要素+细节描写+真情实感\n议论文——论点+论据+结论（议论模板）\n散文——形散神聚+优美语言+情感线索\n应用文——书信演讲稿注意格式', label: '写作要点', animationType: 'bounce' },
          { type: 'tip', content: '写作三步走：①审题——看清题目要求和文体；②构思——列提纲想内容；③写作——按要求写并修改。', label: '写作三步', animationType: 'pulse' },
          { type: 'example', content: '审题示例：\n题目"我难忘的一件事"→记叙文→写清六要素+细节+感受\n题目"读书有益"→议论文→论点+论据+结论\n题目"校园的春天"→散文→形散神聚+优美语言', label: '审题示例', animationType: 'bounce' },
          { type: 'animation', content: '作文结构图绘制动画：画出不同文体的结构图（记叙文六要素、议论文三要素、散文形散神聚），逐步绘制', animationType: 'shapeDraw',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '各类文体结构图',
              shapeDrawConfig: {
                shape: 'diagram',
                labels: ['记叙文：六要素+细节', '议论文：论点+论据+结论', '散文：形散神聚'],
              },
              ttsNarration: '写作要分文体：记叙文六要素，议论文三要素，散文形散神聚！',
            },
          },
          { type: 'tip', content: '修改小窍门：写完读一遍，检查有无错别字、语句通不通、内容是否紧扣题目。好文章是改出来的。', label: '修改窍门', animationType: 'pulse' },
        ],
        iDo: '家长示范审题写作：根据题目判断文体，示范写作过程。',
        weDo: '亲子一起审题构思，互相讨论。',
        youDo: '孩子独立审题并写一篇指定文体的作文。',
        parentTips: '写作分文体：记叙文六要素+细节，议论文论点论据结论，散文形散神聚。审题是第一步。',
        funElement: '作文变身秀：给同一个素材（如运动会），分别用记叙文、议论文、散文三种文体写开头，看同一个素材怎么"变身"！',
        gsapAnimations: [
          'GSAP:shapeDraw|作文结构图绘制|1.5s|点击播放|power2.out',
          'GSAP:highlight|写作要点高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|作文结构图|500x300|教学风|png|结构图',
        ],
        practiceQuestions: [
          {
            id: 'c6u8l2q1',
            type: 'choice',
            question: '题目"我难忘的一件事"应该写成哪种文体？',
            options: ['记叙文', '说明文', '议论文'],
            answer: '记叙文',
            hint: '写一件事适合什么文体',
            explanation: '"我难忘的一件事"要求叙述事件，适合写成记叙文，写清六要素和细节。'
          },
          {
            id: 'c6u8l2q2',
            type: 'choice',
            question: '写议论文的模板是？',
            options: ['我认为……因为……所以……', '时间地点人物起因经过结果', '形散神聚'],
            answer: '我认为……因为……所以……',
            hint: '回忆议论模板',
            explanation: '议论文模板："我认为（论点）……因为（论据）……所以（结论）……"。'
          },
          {
            id: 'c6u8l2q3',
            type: 'fill',
            question: '写作三步是审题、___和写作',
            answer: '构思',
            hint: '审题之后写作之前做什么',
            explanation: '写作三步走：审题（看清要求）→构思（列提纲）→写作（写并修改）。'
          },
          {
            id: 'c6u8l2q4',
            type: 'choice',
            question: '写记叙文最重要的是？',
            options: ['辞藻华丽', '六要素齐全+细节描写+真情实感', '字数最多'],
            answer: '六要素齐全+细节描写+真情实感',
            hint: '记叙文的关键是什么',
            explanation: '写记叙文最重要的是六要素齐全、细节描写生动、有真情实感。'
          },
          {
            id: 'c6u8l2q5',
            type: 'choice',
            question: '【期末真题】写作时第一步应该做什么？',
            options: ['直接动笔写', '审题看清题目要求和文体', '数字数'],
            answer: '审题看清题目要求和文体',
            hint: '写作三步的第一步',
            explanation: '写作第一步是审题，看清题目要求和文体，再构思和写作。这是期末常考的写作要求！'
          },
          {
            id: 'c6u8l2q6',
            type: 'drag',
            question: '把题目拖到对应文体：\n"我难忘的一件事" "读书有益" "校园的春天"',
            answer: '记叙文-我难忘的一件事,议论文-读书有益,散文-校园的春天',
            hint: '根据题目判断文体',
            explanation: '"一件事"是记叙文，"读书有益"是议论文，"校园的春天"是散文。'
          },
          {
            id: 'c6u8l2q7',
            type: 'fill',
            question: '说明文常用的说明方法有列数字、作比较和打___',
            answer: '比方',
            hint: '[说明文写作]（五年级语文-第3单元）',
            explanation: '说明方法有列数字、作比较、打比方、举例子等，打比方就是用比喻说明，是五年级说明文写作学过的。'
          }
        ]
      },
      {
        id: 'c6u8l3',
        title: '古诗文总复习',
        order: 3,
        teachingMethod: '间隔重复',
        content: [
          { type: 'text', content: '古诗文是语文学习的重点。今天我们总复习古诗哲理、意境、默写运用和文言文翻译。古诗文学了要会背、会默、会理解、会运用。', animationType: 'bounce' },
          { type: 'example', content: '古诗文复习要点：\n古诗哲理：不识庐山真面目——当局者迷旁观者清\n古诗意境：画面+情感=意境\n文言实词：走=跑，去=离开\n文言虚词：之=的/代词/去往\n文言短文：揠=拔，闵=担心，槁=枯萎', label: '复习要点', animationType: 'bounce' },
          { type: 'tip', content: '古诗默写易错字：举（不是具）、疑（不是宜）、庐（不是卢）、目（不是木）。默写要逐字检查。', label: '默写易错字', animationType: 'pulse' },
          { type: 'example', content: '诗句运用：\n鼓励上进——欲穷千里目，更上一层楼\n全面看问题——不识庐山真面目，只缘身在此山中\n困境有转机——山重水复疑无路，柳暗花明又一村', label: '诗句运用', animationType: 'bounce' },
          { type: 'animation', content: '古诗文配对翻转动画：诗句和意思/情境配对，翻转匹配，配对成功高亮', animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '古诗文配对复习',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '不识庐山真面目', back: '当局者迷旁观者清', ttsText: '不识庐山真面目：当局者迷，旁观者清' },
                  { id: 'c1', front: '欲穷千里目', back: '站得高看得远', ttsText: '欲穷千里目：站得高看得远' },
                  { id: 'c2', front: '柳暗花明又一村', back: '困境有转机', ttsText: '柳暗花明又一村：困境中有转机' },
                  { id: 'c3', front: '走（文言）', back: '跑', ttsText: '走：古义是跑' },
                ],
              },
              ttsNarration: '古诗文复习：哲理、意境、默写、翻译，配对记忆更牢固！',
            },
          },
          { type: 'tip', content: '复习口诀：哲理要体会，意境画面情，默写不写错，翻译逐字清。', label: '复习口诀', animationType: 'pulse' },
        ],
        iDo: '家长示范古诗文复习：默写名句，示范翻译和理解。',
        weDo: '亲子一起默写和翻译古诗文。',
        youDo: '孩子独立默写、翻译、运用古诗文。',
        parentTips: '古诗哲理+意境+默写+文言翻译。默写注意易错字，翻译注意古今异义。',
        funElement: '古诗文擂台赛：全家古诗文擂台赛，轮流背诗、默写、翻译，看谁是"古诗文擂主"！',
        gsapAnimations: [
          'GSAP:cardReveal|古诗文配对翻转|0.5s|配对成功|power2.inOut',
          'GSAP:highlight|易错字高亮|0.5s|点击|power2.out',
        ],
        images: [
          'IMG:illustration|古诗文复习图|500x300|水墨画风|png|复习卡',
        ],
        practiceQuestions: [
          {
            id: 'c6u8l3q1',
            type: 'choice',
            question: '"不识庐山真面目，只缘身在此山中"的哲理是？',
            options: ['庐山很美', '当局者迷，旁观者清', '要爬山'],
            answer: '当局者迷，旁观者清',
            hint: '身在山中看不清全貌',
            explanation: '"不识庐山真面目"哲理是当局者迷，旁观者清。'
          },
          {
            id: 'c6u8l3q2',
            type: 'choice',
            question: '"欲穷千里目，更上一层楼"中容易写错的字是？',
            options: ['目（易写成木）', '楼（易写成搂）', '千（易写成干）'],
            answer: '目（易写成木）',
            hint: '哪个字最易写错',
            explanation: '"目"容易写成"木"，默写时要特别注意。'
          },
          {
            id: 'c6u8l3q3',
            type: 'fill',
            question: '文言文中"走"的古义是___',
            answer: '跑',
            hint: '古今异义词',
            explanation: '文言文中"走"古义是"跑"，今义是"步行"。'
          },
          {
            id: 'c6u8l3q4',
            type: 'choice',
            question: '安慰遇到困难的朋友用哪句诗？',
            options: ['山重水复疑无路，柳暗花明又一村', '不识庐山真面目', '床前明月光'],
            answer: '山重水复疑无路，柳暗花明又一村',
            hint: '哪句诗表达困境有转机',
            explanation: '"山重水复疑无路，柳暗花明又一村"哲理是困境中有转机，最适合安慰朋友。'
          },
          {
            id: 'c6u8l3q5',
            type: 'choice',
            question: '【期末真题】"揠苗助长"告诉我们什么道理？',
            options: ['禾苗要拔才长得快', '做事不能急于求成、违背规律', '种田很辛苦'],
            answer: '做事不能急于求成、违背规律',
            hint: '拔苗的结果是什么',
            explanation: '《揠苗助长》告诉我们做事不能急于求成、违背客观规律，否则适得其反。这是期末常考的文言文感悟！'
          },
          {
            id: 'c6u8l3q6',
            type: 'drag',
            question: '把诗句拖到对应哲理/情境：\n"不识庐山真面目" "欲穷千里目" "柳暗花明又一村"',
            answer: '不识庐山真面目-当局者迷,欲穷千里目-站得高看得远,柳暗花明又一村-困境有转机',
            hint: '回忆每句诗的哲理',
            explanation: '"不识庐山真面目"=当局者迷，"欲穷千里目"=站得高看得远，"柳暗花明又一村"=困境有转机。'
          },
          {
            id: 'c6u8l3q7',
            type: 'fill',
            question: '"停车坐爱枫林晚"中"坐"的意思是___',
            answer: '因为',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '杜牧《山行》"停车坐爱枫林晚"中"坐"是"因为"的意思，不是"坐下"，是五年级古诗文鉴赏学过的。'
          }
        ]
      },
      {
        id: 'c6u8l4',
        title: '小升初模拟——综合阅读与写作',
        order: 4,
        teachingMethod: '形成性评价',
        content: [
          { type: 'text', content: '小升初模拟测试来了！这是一套综合阅读与写作的模拟题，涵盖各类文体。认真审题，仔细作答，检测六年学习成果。', animationType: 'bounce' },
          { type: 'tip', content: '考试小贴士：①先审题——看清要求再作答；②抓要点——阅读找关键信息；③写完整——作文结构完整；④查一遍——做完检查。', label: '考试贴士', animationType: 'pulse' },
          { type: 'example', content: '模拟题型：\n①文体判断——判断片段属于什么文体\n②阅读理解——记叙文/议论文/小说阅读\n③古诗文默写——默写名句\n④作文——指定文体写作', label: '模拟题型', animationType: 'bounce' },
          { type: 'animation', content: '答题进度高亮动画：每完成一道题，进度条高亮前进，展示答题进度', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '小升初模拟答题',
              sequenceConfig: { items: ['第1题', '第2题', '第3题', '第4题', '第5题', '第6题', '第7题'], order: 'custom', itemType: 'word' },
              ttsNarration: '小升初模拟：认真审题，仔细作答，检测六年学习成果！',
            },
          },
          { type: 'tip', content: '阅读理解答题法：①带着问题读文章；②在文中找答案；③用自己的话组织答案；④答完整不遗漏。', label: '阅读答题法', animationType: 'pulse' },
          { type: 'text', content: '小升初模拟中，作文分值最高，要重点把握。拿到作文题先想三件事：写什么文体、选什么材料、表达什么中心。开头要引人，中间要具体，结尾要点题，结构完整才能拿高分。', animationType: 'reveal' },
          { type: 'example', content: '例题：分析作文题《一件难忘的事》。\n→文体：记叙文\n→材料：选一件真实经历的事\n→中心：表达这件事给自己的启发或感动\n注意用细节描写让事情更生动，结尾点明"难忘"的原因。', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长示范模拟答题：做一道阅读理解，示范审题、找答案、组织答案。',
        weDo: '亲子一起做模拟题，互相讨论。',
        youDo: '孩子独立完成小升初模拟测试。',
        parentTips: '小升初模拟：先审题再作答，做完检查。阅读带着问题找答案。',
        funElement: '模拟闯关：把模拟题设计成闯关游戏，每答对一题过一关，闯过全部7关就是"闯关王者"！',
        gsapAnimations: [
          'GSAP:highlight|答题进度高亮|0.5s|每题完成|power2.out',
          'GSAP:sequence|题型依次展示|1.5s|点击播放|power2.out',
        ],
        images: [
          'IMG:illustration|模拟测试卷|500x300|可爱卡通风|png|试卷',
        ],
        practiceQuestions: [
          {
            id: 'c6u8l4q1',
            type: 'choice',
            question: '小升初模拟考试时，第一步应该做什么？',
            options: ['直接答题', '先审题看清要求', '先写作文'],
            answer: '先审题看清要求',
            hint: '考试小贴士第一条',
            explanation: '考试第一步是先审题，看清题目要求再作答，避免答非所问。'
          },
          {
            id: 'c6u8l4q2',
            type: 'choice',
            question: '阅读理解答题时应该？',
            options: ['凭想象答题', '带着问题在文中找答案', '随便写写'],
            answer: '带着问题在文中找答案',
            hint: '回忆阅读答题法',
            explanation: '阅读理解答题要带着问题读文章，在文中找答案，再用自己的话组织。'
          },
          {
            id: 'c6u8l4q3',
            type: 'fill',
            question: '小升初模拟题型包括文体判断、阅读理解、古诗文默写和___',
            answer: '作文',
            hint: '第四种题型是什么',
            explanation: '小升初模拟题型：文体判断、阅读理解、古诗文默写、作文。'
          },
          {
            id: 'c6u8l4q4',
            type: 'choice',
            question: '"我认为读书有益，因为读书能增长知识，所以我们应该多读书"是什么文体的表达？',
            options: ['记叙文', '议论文', '说明文'],
            answer: '议论文',
            hint: '用了议论模板的是什么文体',
            explanation: '用了"我认为……因为……所以……"议论模板，属于议论文表达。'
          },
          {
            id: 'c6u8l4q5',
            type: 'choice',
            question: '【期末真题】下列哪项是小升初阅读理解正确的答题方法？',
            options: ['不看文章直接答题', '带着问题读文章，在文中找答案', '只看开头答题'],
            answer: '带着问题读文章，在文中找答案',
            hint: '回忆阅读答题法',
            explanation: '阅读理解正确答题方法：带着问题读文章，在文中找答案，再用自己话组织。这是期末常考的答题方法！'
          },
          {
            id: 'c6u8l4q6',
            type: 'drag',
            question: '把考试小贴士按顺序排列：先审题、抓要点、写完整、查一遍',
            answer: '先审题,抓要点,写完整,查一遍',
            hint: '考试的四步顺序',
            explanation: '考试小贴士：先审题→抓要点→写完整→查一遍。'
          },
          {
            id: 'c6u8l4q7',
            type: 'fill',
            question: '修改病句"他大概一定是生病了"应删去___',
            answer: '大概',
            hint: '[病句修改]（五年级语文-第8单元）',
            explanation: '"大概"和"一定"矛盾，应删去"大概"，是五年级综合测评学过的病句修改。'
          }
        ]
      },
      {
        id: 'c6u8l5',
        title: '学期综合测评+毕业典礼',
        order: 5,
        teachingMethod: '综合展示',
        content: [
          { type: 'text', content: '六年语文学习到此圆满结束！最后一节课是学期综合测评和毕业典礼。回顾六年收获，展望美好未来，带着满满的收获，勇敢地迈向初中！', animationType: 'bounce' },
          { type: 'tip', content: '六年收获回顾：拼音识字、组词造句、阅读写作、古诗文、各类文体……六年语文学习，你收获了太多！', label: '六年收获', animationType: 'pulse' },
          { type: 'example', content: '六年语文能力：\n阅读——能读懂各类文体\n写作——会写记叙议论散文\n古诗——会默写理解和运用\n文言——能翻译短篇文言文\n表达——能演讲和书信写作', label: '六年能力', animationType: 'bounce' },
          { type: 'animation', content: '三星评级飞入动画：完成综合测评后，根据成绩飞入一至三颗星星，三星为最高评级', animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: '学期综合测评评级',
              sequenceConfig: { items: ['答题完成', '评分中', '三星评级', '毕业典礼撒花！'], order: 'custom', itemType: 'word' },
              ttsNarration: '恭喜你完成六年语文学习！三星评级，毕业快乐！',
            },
          },
          { type: 'tip', content: '毕业寄语：六年的语文学习，让你拥有了阅读、写作、表达的能力。带着这份收获，勇敢地迈向初中，未来更精彩！毕业快乐！', label: '毕业寄语', animationType: 'pulse' },
          { type: 'text', content: '综合测评是对六年语文学习的全面检验，要放平心态。遇到难题不慌，回顾学过的文体知识和答题方法，按部就班作答。无论结果如何，六年努力都值得为自己骄傲。', animationType: 'reveal' },
          { type: 'example', content: '例题（综合题）：判断"书籍是人类进步的阶梯"属于哪种文体表达？\n→这是引用名言来证明观点，属于议论文的表达方式（道理论据），用来支撑"读书有益"的论点。', label: '例题', animationType: 'bounce' },
        ],
        iDo: '家长主持毕业典礼：回顾六年收获，颁发"毕业证书"。',
        weDo: '亲子一起回顾六年语文学习的收获和成长。',
        youDo: '孩子完成综合测评，参加毕业典礼。',
        parentTips: '六年语文毕业啦！回顾收获，展望未来。给孩子一个有仪式感的毕业典礼。',
        funElement: '毕业典礼：在家办一场温馨的毕业典礼！回顾六年收获，颁发自制的"语文毕业证书"，撒花庆祝，为六年画上圆满句号！',
        gsapAnimations: [
          'GSAP:starFlyIn|三星评级飞入|1.5s|测评完成|power2.out',
          'GSAP:confetti|毕业典礼撒花|3s|典礼开始|power1.out|particleCount:60',
        ],
        images: [
          'IMG:illustration|毕业典礼|500x350|可爱卡通风|png|毕业典礼',
        ],
        practiceQuestions: [
          {
            id: 'c6u8l5q1',
            type: 'choice',
            question: '六年语文学习不包括下列哪项能力？',
            options: ['阅读写作', '古诗文文言文', '解数学方程'],
            answer: '解数学方程',
            hint: '哪项不是语文能力',
            explanation: '六年语文学习包括阅读写作、古诗文文言文、表达等能力。解数学方程是数学能力，不属于语文。'
          },
          {
            id: 'c6u8l5q2',
            type: 'choice',
            question: '议论文的三要素是？',
            options: ['论点、论据、论证', '人物、情节、环境', '时间、地点、人物'],
            answer: '论点、论据、论证',
            hint: '回忆议论文三要素',
            explanation: '议论文三要素：论点（主张）、论据（理由证据）、论证（证明过程）。'
          },
          {
            id: 'c6u8l5q3',
            type: 'fill',
            question: '散文最大的特点是___神聚',
            answer: '形散',
            hint: '回忆散文特点',
            explanation: '散文最大的特点是"形散神聚"：形散（取材自由）神聚（中心统一）。'
          },
          {
            id: 'c6u8l5q4',
            type: 'choice',
            question: '六年语文学习最重要的收获是？',
            options: ['背了很多课文', '拥有了阅读写作表达的能力', '认识了很多字'],
            answer: '拥有了阅读写作表达的能力',
            hint: '什么能力最重要',
            explanation: '六年语文学习最重要的收获是拥有了阅读、写作、表达的能力，这些能力终身受用。'
          },
          {
            id: 'c6u8l5q5',
            type: 'choice',
            question: '【期末真题】下列对六年语文学习总结正确的是？',
            options: ['只学了认字', '学会了阅读各类文体、写作各类文体、理解古诗文', '语文没什么用'],
            answer: '学会了阅读各类文体、写作各类文体、理解古诗文',
            hint: '六年语文学习的全面收获',
            explanation: '六年语文学习学会了阅读各类文体、写作各类文体、理解古诗文和文言文，收获全面而丰富。这是毕业总结的核心！'
          },
          {
            id: 'c6u8l5q6',
            type: 'drag',
            question: '把六年语文能力按类别排列：阅读、写作、古诗、文言、表达',
            answer: '阅读,写作,古诗,文言,表达',
            hint: '六年语文五大能力',
            explanation: '六年语文五大能力：阅读（各类文体）、写作（各类文体）、古诗（默写运用）、文言（翻译理解）、表达（演讲书信）。'
          },
          {
            id: 'c6u8l5q7',
            type: 'fill',
            question: '"不知细叶谁裁出，二月春风似___"用了比喻修辞',
            answer: '剪刀',
            hint: '[古诗文鉴赏]（五年级语文-第5单元）',
            explanation: '贺知章《咏柳》"二月春风似剪刀"把春风比作剪刀，是五年级古诗文鉴赏学过的名句。'
          }
        ]
      }
    ]
  }
]
