import type { Unit } from '@/types'

export const mathGrade2: Unit[] = [
  {
    id: 'm2u1',
    title: '长度单位',
    subtitle: '认识厘米和米，学会测量',
    order: 1,
    lessons: [
      {
        id: 'm2u1l1',
        title: '厘米的认识',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用尺子测量物体的长度并读出厘米数',
        successCriteria: '①能从0刻度开始测量 ②能正确读出厘米数',
        iDo: '家长用直尺示范测量铅笔的长度，对准0刻度线读数。【CFU检查理解】家长问“你能用尺子测量物体的长度并读出厘米数吗？”',
        weDo: '【引导式】亲子一起用直尺测量身边的物品，读出厘米数。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用直尺测量物品并记录长度。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】测量从0刻度线开始，眼睛平视读数，单位是厘米。\n共学四步：\n①对话出题：拿一把尺子和一支铅笔，问"铅笔长几厘米？怎么量？"\n②孩子应答："把铅笔一端对准0刻度，另一端对着几就是几厘米"\n③答错引导：家长示范把铅笔一端对准0刻度线，让孩子看另一端对着数字几，强调一定要从0开始\n④快速检测：量橡皮长几厘米、量课本宽几厘米、量手指长几厘米',
        funElement: '笑话：厘米说我最精细，毫米说别忘了我！小游戏：量量你的手指有多长',
        gsapAnimations: [
          '[GSAP:translateX|直尺滑入测量动画|0.6s|页面加载|power2.inOut]',
          '[GSAP:scaleIn|测量结果数字弹出|0.4s|测量完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|直尺测量铅笔示意图|400x300|cartoon|png|厘米测量]',
          '[IMG:illustration|0刻度线对齐示意|300x250|cartoon|png|测量方法]'
        ],
        content: [
          { type: 'text', content: '厘米是量长度的单位，写cm。食指的宽度大约就是1厘米，记住了这个你就有了随身尺子！', animationType: 'reveal' },
          { type: 'example', content: '📏量铅笔：对准0刻度线，铅笔末端到8，铅笔长8厘米！', label: '量一量', animationType: 'bounce' },
          { type: 'formula', content: '测量口诀：0刻度线对齐边，眼睛平视读刻度，从0到几就是几厘米！', label: '测量口诀', animationType: 'typewriter' },
          { type: 'tip', content: '测量时一定要从0刻度线开始，不能从尺子边缘开始哦！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '直尺滑入测量铅笔的动画，0刻度线对齐后读数弹出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '厘米测量',
              cpaConfig: {
                concrete: { emoji: '📏', text: '用直尺量铅笔' },
                pictorial: { emoji: '📐', text: '0刻度对齐，读出8厘米' },
                abstract: { emoji: '8cm', text: '铅笔长8厘米' }
              },
              ttsNarration: '用直尺量铅笔，0刻度线对齐，读出8厘米！',
            }
          },
          { type: 'tip', content: '新加坡CPA教学法：用实物摆→画图→写算式三步理解', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u1l1q1',
            type: 'choice',
            question: '测量长度时，直尺的哪个刻度要对齐物体的一端？',
            options: ['1刻度', '0刻度', '10刻度', '随便哪个'],
            answer: '0刻度',
            hint: '从哪里开始量最准确？',
            explanation: '测量时要把直尺的0刻度线对齐物体的一端，这样读数才准确。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l1q2',
            type: 'fill',
            question: '食指的宽度大约是1___',
            answer: '厘米',
            acceptableAnswers: ['cm', '公分'],
            hint: '用直尺量一量你的食指宽度',
            explanation: '食指的宽度大约是1厘米，这是1厘米的直观感受。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l1q3',
            type: 'flashcard',
            question: '看直尺读数：铅笔从0到8，长几厘米？',
            answer: '8',
            hint: '从0到几就是几厘米',
            explanation: '从0刻度到8刻度就是8厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u1l1q4',
            type: 'choice',
            question: '铅笔长15厘米，用掉3厘米后还剩多少厘米？',
            options: ["10厘米","11厘米","12厘米","18厘米"],
            answer: '12厘米',
            hint: '15-3=？',
            explanation: '15-3=12厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l1q5',
            type: 'fill',
            question: '一根绳子对折后每段长约20厘米，这根绳子原来约___厘米长',
            answer: '40',
            hint: '两段各20厘米，共40厘米。',
            explanation: '20+20=40厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l1q6',
            type: 'choice',
            question: '小明身高130厘米，他比1米高多少厘米？',
            options: ["20厘米","30厘米","40厘米","100厘米"],
            answer: '30厘米',
            hint: '1米=100厘米，130-100=？',
            explanation: '130-100=30厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l1q7',
            type: 'fill',
            question: '从1数到100，99后面是___',
            answer: '100',
            hint: '[数数]（数学-6-10的认识-第1课）99后面是100。',
            explanation: '从1数到100，99后面是100。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u1l2',
        title: '米的认识',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能认识米，掌握1米=100厘米',
        successCriteria: '①能说出1米=100厘米 ②能选择合适单位（米或厘米）',
        iDo: '家长用米尺展示1米的长度，和孩子的身高做比较。【CFU检查理解】家长问“你能认识米，掌握1米=100厘米吗？”',
        weDo: '【引导式】亲子一起用米尺量教室或房间的长度，感受1米有多长。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立估测和测量物品的长度，选择合适的单位。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】1米=100厘米，量长物体用米，量短物体用厘米。\n共学四步：\n①对话出题：问"1米等于几厘米？量黑板用米还是厘米？"\n②孩子应答："1米=100厘米，量黑板用米"\n③答错引导：家长用米尺让孩子张开双臂比划1米大约多长，再用尺子量100厘米验证\n④快速检测：1米=几厘米、量桌子长用什么单位、200厘米=几米',
        funElement: '笑话：米对厘米说——我等于100个你！小游戏：1米有多长比划赛',
        gsapAnimations: [
          '[GSAP:scaleIn|米尺展开动画|0.8s|页面加载|power2.out]',
          '[GSAP:staggerFrom|100个厘米刻度依次出现|0.3s|展开完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|米尺和1米参照图|400x300|cartoon|png|米的认识]',
          '[IMG:illustration|1米与身高对比图|300x250|cartoon|png|长度参照]'
        ],
        content: [
          { type: 'text', content: '米是比厘米更大的长度单位，写m。1米=100厘米！量长的东西用米，量短的东西用厘米。', animationType: 'reveal' },
          { type: 'example', content: '📏1米大约是一个一年级小朋友伸开手臂的长度，教室的门大约2米高！', label: '感受1米', animationType: 'bounce' },
          { type: 'formula', content: '换算口诀：1米=100厘米，米变厘米乘100，厘米变米除以100！', label: '换算口诀', animationType: 'counter' },
          { type: 'tip', content: '量教室、操场用米，量铅笔、橡皮用厘米，选对单位很重要！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '米尺展开动画，100个厘米刻度依次出现，1米=100厘米标签弹出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'numberCount',
              title: '1米=100厘米',
              countConfig: { from: 1, to: 10, itemEmoji: '📏', direction: 'forward' },
              ttsNarration: '1米等于100厘米！让我们从1数到10，每个数代表10厘米！10、20、30……100！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u1l2q1',
            type: 'choice',
            question: '1米等于多少厘米？',
            options: ['10厘米', '50厘米', '100厘米', '1000厘米'],
            answer: '100厘米',
            hint: '米和厘米的换算关系',
            explanation: '1米=100厘米，这是长度单位的基本换算。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l2q2',
            type: 'fill',
            question: '2米=___厘米',
            answer: '200',
            hint: '1米=100厘米，2米呢？',
            explanation: '1米=100厘米，2米=2×100=200厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l2q3',
            type: 'flashcard',
            question: '测量操场长度用厘米还是米？',
            answer: '米',
            hint: '操场很长，用大单位还是小单位？',
            explanation: '操场很长，用米作单位更合适，厘米太小了。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u1l2q4',
            type: 'choice',
            question: '下面哪个物品的长度用米作单位比较合适？',
            options: ["铅笔长度","课桌高度","橡皮长度","书本厚度"],
            answer: '课桌高度',
            hint: '选合适单位',
            explanation: '课桌高约1米左右。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l2q5',
            type: 'fill',
            question: '5米=___厘米',
            answer: '500',
            hint: '1米=100厘米，5米=5×100=500厘米。',
            explanation: '5米=5×100=500厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l2q6',
            type: 'choice',
            question: '【期末真题】教室长8米宽6米，小明从教室一头走到另一头再走回来一共走了多少米？',
            options: ["14米","16米","28米","48米"],
            answer: '16米',
            hint: '8+8=？',
            explanation: '一来一回8+8=16米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l2q7',
            type: 'choice',
            question: '食指宽度大约是1___',
            options: ["毫米","厘米","分米","米"],
            answer: '厘米',
            hint: '[长度单位]（数学-长度单位-第1课）身体参照',
            explanation: '食指宽度约1厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u1l3',
        title: '测量小能手',
        order: 3,
        teachingMethod: '情境教学法',
        learningObjective: '我能先估测再实测物体的长度',
        successCriteria: '①能估测物体大约几厘米 ②能用尺子实测验证',
        iDo: '家长示范先估测再测量的方法，比较估测和实测的差距。【CFU检查理解】家长问“你能先估测再实测物体的长度吗？”',
        weDo: '【引导式】亲子一起估测家中物品的长度，再用尺子实测验证。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立估测和测量物品长度，记录结果。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】先估后量是好习惯，培养孩子的长度直觉。\n共学四步：\n①对话出题：拿起一块橡皮问"猜猜它大约长几厘米？"\n②孩子应答："大约5厘米"\n③答错引导：让孩子先用手指比划一厘米有多长（小指宽），再估橡皮有几个一厘米，最后用尺子量\n④快速检测：估铅笔长再量、估课本长再量、估手掌宽再量',
        funElement: '小游戏：估测大挑战——猜猜有多长！歇后语：一寸光阴一寸金——时间宝贵',
        gsapAnimations: [
          '[GSAP:scaleIn|估测气泡弹出|0.5s|页面加载|back.out(1.7)]',
          '[GSAP:translateX|实测对比动画|0.6s|测量完成|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|估测与实测对比图|400x300|cartoon|png|估测实测]',
          '[IMG:illustration|测量记录表示例|300x250|cartoon|png|测量记录]'
        ],
        content: [
          { type: 'text', content: '先猜一猜有多长，再用尺子量一量！猜和量越接近，说明你的长度感觉越好！', animationType: 'reveal' },
          { type: 'example', content: '估测课桌高约70厘米，实测72厘米，估测很接近！', label: '估一估', animationType: 'bounce' },
          { type: 'formula', content: '估测技巧：用身体参照——1厘米≈食指宽，1米≈手臂长，先比再量！', label: '估测技巧', animationType: 'typewriter' },
          { type: 'tip', content: '先估后量是好习惯！估测帮我们快速判断，实测帮我们得到准确结果！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '估测气泡弹出后实测对比动画，估测值和实测值对比显示', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'compare',
              title: '估测vs实测',
              compareConfig: {
                leftItems: ['🤔', '🤔', '🤔', '🤔', '🤔', '🤔', '🤔'],
                rightItems: ['📏', '📏', '📏', '📏', '📏', '📏', '📏', '📏'],
                result: 'close',
                resultText: '估测70cm，实测72cm，很接近！'
              },
              ttsNarration: '先估测70厘米，再实测72厘米，估测很接近！',
            }
          },
          { type: 'tip', content: '本课主要使用情境化实践，估测与实测结合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u1l3q1',
            type: 'choice',
            question: '课桌的高度大约是多少？',
            options: ['7厘米', '70厘米', '7米', '70米'],
            answer: '70厘米',
            hint: '课桌到你腰的位置',
            explanation: '课桌高度大约70厘米，7厘米太矮，7米太高。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l3q2',
            type: 'fill',
            question: '一本书厚约2___（填厘米或米）',
            answer: '厘米',
            acceptableAnswers: ['cm'],
            hint: '书很薄，用小单位',
            explanation: '一本书的厚度约2厘米，用厘米作单位。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l3q3',
            type: 'flashcard',
            question: '估一估：教室的门高约几米？',
            answer: '2',
            hint: '门比你高一些',
            explanation: '教室的门大约2米高，比一般人高一点。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u1l3q4',
            type: 'choice',
            question: '一条彩带长50厘米，剪成2段一样长的彩带，每段多长？',
            options: ["20厘米","25厘米","30厘米","48厘米"],
            answer: '25厘米',
            hint: '50÷2=？',
            explanation: '50÷2=25厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l3q5',
            type: 'fill',
            question: '黑板长3米，比门高1米，门高___米',
            answer: '2',
            hint: '3-1=2米。',
            explanation: '3-1=2米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l3q6',
            type: 'choice',
            question: '小红用一根2米的竹竿量井深，竹竿放下去还有30厘米没到水面，井大约有多深？',
            options: ["170厘米","200厘米","230厘米","2300厘米"],
            answer: '170厘米',
            hint: '2米=200厘米，200-30=？',
            explanation: '200-30=170厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u1l3q7',
            type: 'fill',
            question: '9+8=___',
            answer: '17',
            hint: '[20以内进位加法]（数学-20以内进位加法-第1课）9+1=10，10+7=17。',
            explanation: '9+8=17，用凑十法：9+1=10，10+7=17。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u1l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用厘米和米的知识完成测评',
          successCriteria: '①测评正确率达80%以上 ②能区分厘米和米的适用场景',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用厘米和米的知识完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测长度单位，重点看0刻度测量和单位换算。\n共学四步：\n①对话出题：问"测量时从哪个刻度开始？1米等于几厘米？"\n②孩子应答："从0刻度开始，1米=100厘米"\n③答错引导：拿尺子让孩子重新演示从0量起，错题用实物重新测量\n④快速检测：量一支笔的长度、3米=几厘米、量门用米还是厘米',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"长度单位"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u1l4q1',
              type: 'choice',
              question: '下面哪个物体的长度大约是1厘米？',
              options: ["课桌高","指甲盖宽","教室长","操场宽"],
              answer: '指甲盖宽',
              hint: '1厘米有多长',
              explanation: '指甲盖宽约1厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u1l4q2',
            type: 'fill',
            question: '3米=___厘米',
            answer: '300',
            hint: '1米=100厘米',
            explanation: '3×100=300厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u1l4q3',
              type: 'choice',
              question: '一根绳子长1米剪去30厘米还剩多少厘米？',
              options: ["30厘米","70厘米","130厘米","97厘米"],
              answer: '70厘米',
              hint: '1米=100厘米',
              explanation: '100-30=70厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u1l4q4',
            type: 'fill',
            question: '小明身高1米25厘米=___厘米',
            answer: '125',
            hint: '1米=100厘米',
            explanation: '100+25=125厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u1l4q5',
              type: 'choice',
              question: '【期末真题】一根绳子长1米20厘米，比另一根绳子长35厘米，另一根绳子长多少厘米？',
              options: ["85厘米","95厘米","55厘米","155厘米"],
              answer: '85厘米',
              hint: '1米20厘米=120厘米，120-35=？',
              explanation: '120-35=85厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u1l4q6',
              type: 'choice',
              question: '下面哪个测量方法是正确的？',
              options: ["从尺子边缘开始量","从0刻度开始量","从1刻度开始量","随便从哪开始"],
              answer: '从0刻度开始量',
              hint: '测量规则',
              explanation: '测量要从0刻度线开始。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u1l4q7',
            type: 'fill',
            question: '100厘米=___米',
            answer: '1',
            hint: '[长度单位]（数学-长度单位-第1课）100厘米=1米',
            explanation: '1米=100厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u1l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能用长度单位解决生活测量问题',
          successCriteria: '①能选择合适工具测量 ②能记录并比较测量结果',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能用长度单位解决生活测量问题吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】在生活中测量物体，如量身高、量家具。\n共学四步：\n①对话出题：问"你的身高大约几米几厘米？怎么量？"\n②孩子应答："大约1米2厘米，用米尺靠墙量"\n③答错引导：家长帮孩子靠墙量身高，用书压头顶做记号再量高度\n④快速检测：量桌子高几厘米、量床长几米、比较筷子和铅笔谁长',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"长度单位"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u1l5q1',
              type: 'choice',
              question: '一根绳子长1米剪去30厘米又接上20厘米现在绳子有多长？',
              options: ["70厘米","80厘米","90厘米","110厘米"],
              answer: '90厘米',
              hint: '100-30+20=？',
              explanation: '100-30=70，70+20=90厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u1l5q2',
            type: 'fill',
            question: '小明走一步约50厘米走4步大约走了___厘米',
            answer: '200',
            hint: '50×4=？',
            explanation: '200厘米=2米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u1l5q3',
              type: 'choice',
              question: '课桌高约70厘米椅子高约40厘米课桌比椅子高多少？',
              options: ["20厘米","30厘米","40厘米","110厘米"],
              answer: '30厘米',
              hint: '70-40=？',
              explanation: '70-40=30厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u1l5q4',
            type: 'fill',
            question: '3米-150厘米=___厘米',
            answer: '150',
            hint: '3米=300厘米',
            explanation: '300-150=150厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u1l5q5',
              type: 'choice',
              question: '【期中真题】一根绳子长85厘米，剪成两段，第一段长38厘米，第二段长多少厘米？',
              options: ["47厘米","53厘米","57厘米","123厘米"],
              answer: '47厘米',
              hint: '85-38=？',
              explanation: '85-38=47厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u1l5q6',
              type: 'choice',
              question: '小红量课桌长用直尺量了3次还多5厘米每次量20厘米课桌长多少？',
              options: ["55厘米","60厘米","65厘米","70厘米"],
              answer: '65厘米',
              hint: '3×20+5=？',
              explanation: '60+5=65厘米。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u1l5q7',
            type: 'fill',
            question: '80-36=___',
            answer: '44',
            hint: '[100以内减法]（数学-100以内减法-第2课）借位减法',
            explanation: '80-36=44。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u2',
    title: '100以内加法',
    subtitle: '掌握100以内的加法运算',
    order: 2,
    lessons: [
      {
        id: 'm2u2l1',
        title: '不进位加法',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用竖式计算100以内不进位加法',
        successCriteria: '①能正确列竖式（数位对齐） ②能从个位加起算出结果',
        iDo: '家长用竖式演示23+14：个位3+4=7，十位2+1=3，结果是37。【CFU检查理解】家长问“你能用竖式计算100以内不进位加法吗？”',
        weDo: '【引导式】亲子一起用竖式做不进位加法，互相检查对位。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立列竖式计算100以内不进位加法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】竖式关键是相同数位对齐，从个位加起。\n共学四步：\n①对话出题：问"23+14用竖式怎么算？"\n②孩子应答："个位对个位3+4=7，十位对十位2+1=3，得37"\n③答错引导：家长用小棒摆2捆3根加1捆4根，再写竖式强调个位对个位、十位对十位\n④快速检测：12+15=？、34+23=？、41+27=？',
        funElement: '笑话：个位说我先算，十位说别插队！小游戏：竖式对对齐',
        gsapAnimations: [
          '[GSAP:staggerFrom|竖式数字逐位出现|0.4s|页面加载|power2.out]',
          '[GSAP:scaleIn|计算结果弹出|0.5s|计算完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|23+14竖式计算图|400x300|cartoon|png|不进位加法]',
          '[IMG:illustration|数位对齐示意图|300x250|cartoon|png|竖式规则]'
        ],
        content: [
          { type: 'text', content: '竖式加法很简单！个位和个位对齐，十位和十位对齐，从个位开始加，个位加个位，十位加十位！', animationType: 'reveal' },
          { type: 'example', content: '23+14：个位3+4=7，十位2+1=3，结果37！', label: '竖式计算', animationType: 'bounce' },
          { type: 'formula', content: '竖式加法口诀：数位对齐从个位，个位加个位，十位加十位，不满十不进位！', label: '竖式口诀', animationType: 'typewriter' },
          { type: 'tip', content: '写竖式时一定要对齐数位！个位对个位，十位对十位，不能歪歪扭扭！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '23+14合并动画：23个红球和14个蓝球合在一起，结果37', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'merge',
              title: '23+14不进位加法',
              mergeConfig: { leftCount: 23, rightCount: 14, resultCount: 37, leftEmoji: '🔴', rightEmoji: '🔵', resultEmoji: '🟢', operator: '+' },
              ttsNarration: '23加14，个位3加4等于7，十位2加1等于3，结果37！',
            }
          },
          { type: 'animation', content: '竖式计算23+14：个位3+4=7，十位2+1=3，结果37', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '竖式不进位加法',
              verticalCalcConfig: {
                num1: 23,
                num2: 14,
                operator: '+',
                result: 37,
                steps: [
                  { text: '个位：3+4=7', highlight: 'ones' },
                  { text: '十位：2+1=3', highlight: 'tens' },
                ],
              },
              ttsNarration: '竖式计算23加14！个位3加4等于7！十位2加1等于3！结果37！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u2l1q1',
            type: 'choice',
            question: '32+15=？',
            options: ['37', '47', '57', '42'],
            answer: '47',
            hint: '个位2+5，十位3+1',
            explanation: '个位2+5=7，十位3+1=4，所以32+15=47。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l1q2',
            type: 'fill',
            question: '41+23=___',
            answer: '64',
            hint: '个位1+3，十位4+2',
            explanation: '个位1+3=4，十位4+2=6，所以41+23=64。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l1q3',
            type: 'flashcard',
            question: '快速计算：24+33=？',
            answer: '57',
            hint: '个位4+3，十位2+3',
            explanation: '个位4+3=7，十位2+3=5，所以24+33=57。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u2l1q4',
            type: 'choice',
            question: '45+33=？先算什么？',
            options: ["个位5+3=8","个位8十位7得78","直接写88","不知道"],
            answer: '个位5+3=8',
            hint: '竖式加法从个位算起',
            explanation: '竖式加法先从个位算起，个位5+3=8，再算十位4+3=7，得78。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l1q5',
            type: 'fill',
            question: '36+42=___',
            answer: '78',
            hint: '6+2=8，3+4=7，得78。',
            explanation: '个位6+2=8，十位3+4=7，36+42=78。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l1q6',
            type: 'choice',
            question: '三个数相加：25+30+15=？怎样算最快？',
            options: ["从左往右依次加","先把能凑整十的加","随便加都一样快"],
            answer: '先把能凑整十的加',
            hint: '25+15=40，40+30=70',
            explanation: '25+15=40，40+30=70最快！做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l1q7',
            type: 'fill',
            question: '8+7=___',
            answer: '15',
            hint: '[凑十法]（数学-20以内进位加法-第1课）8+2=10，10+5=15。',
            explanation: '8+7=15，用凑十法：8+2=10，10+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u2l2',
        title: '进位加法',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用竖式计算100以内进位加法',
        successCriteria: '①能正确处理"满十进一" ②能正确计算进位加法',
        iDo: '家长用竖式演示28+35：个位8+5=13，写3进1，十位2+3+1=6。【CFU检查理解】家长问“你能用竖式计算100以内进位加法吗？”',
        weDo: '【引导式】亲子一起练习竖式进位加法，重点练习"满十进一"。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立列竖式计算100以内进位加法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】进位加法关键是"满十进一"，别忘了加进上来的1。\n共学四步：\n①对话出题：问"28+35用竖式怎么算？"\n②孩子应答："个位8+5=13满十进一写3进1，十位2+3+1=6，得63"\n③答错引导：用小棒摆8根加5根满10根捆1捆，强调进上去的1在十位要加上\n④快速检测：36+27=？、48+25=？、19+56=？',
        funElement: '歇后语：十个指头按跳蚤——一个也按不住！小游戏：进位小精灵',
        gsapAnimations: [
          '[GSAP:translateY|进位1飞到十位动画|0.5s|满十触发|power2.inOut]',
          '[GSAP:scaleIn|进位标记闪烁|0.4s|进位完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|28+35竖式进位图|400x300|cartoon|png|进位加法]',
          '[IMG:illustration|满十进一示意图|300x250|cartoon|png|进位规则]'
        ],
        content: [
          { type: 'text', content: '进位加法多一步：个位加起来满10了，就要向十位进1！别忘了把进上来的1加上去！', animationType: 'reveal' },
          { type: 'example', content: '28+35：个位8+5=13，写3进1；十位2+3+1=6，结果63！', label: '进位计算', animationType: 'bounce' },
          { type: 'formula', content: '进位口诀：个位相加满十进一，写余数进1，十位别忘加进位！', label: '进位口诀', animationType: 'counter' },
          { type: 'tip', content: '进位的1一定要写上去提醒自己！不然十位就会少1，答案就错了！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '28+35进位加法合并动画：28个黄球和35个橙球合在一起，个位满十进一，结果63', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'merge',
              title: '28+35进位加法',
              mergeConfig: { leftCount: 28, rightCount: 35, resultCount: 63, leftEmoji: '🟡', rightEmoji: '🟠', resultEmoji: '🟢', operator: '+' },
              ttsNarration: '28加35，个位8加5等于13，满十进一！十位2加3加1等于6，结果63！',
            }
          },
          { type: 'animation', content: '竖式计算28+35：个位8+5=13写3进1，十位2+3+1=6，结果63', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '竖式进位加法',
              verticalCalcConfig: {
                num1: 28,
                num2: 35,
                operator: '+',
                result: 63,
                carry: [0, 1],
                steps: [
                  { text: '个位：8+5=13，写3进1', highlight: 'ones' },
                  { text: '十位：2+3+1=6', highlight: 'tens' },
                ],
              },
              ttsNarration: '竖式计算28加35！个位8加5等于13，写3进1！十位2加3加进位的1等于6！结果63！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u2l2q1',
            type: 'choice',
            question: '36+47=？',
            options: ['73', '83', '93', '82'],
            answer: '83',
            hint: '个位6+7满十了吗？',
            explanation: '个位6+7=13，写3进1；十位3+4+1=8，所以36+47=83。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l2q2',
            type: 'fill',
            question: '58+29=___',
            answer: '87',
            hint: '个位8+9满十进一',
            explanation: '个位8+9=17，写7进1；十位5+2+1=8，所以58+29=87。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l2q3',
            type: 'flashcard',
            question: '快速计算：45+38=？',
            answer: '83',
            hint: '个位5+8=13，进1',
            explanation: '个位5+8=13，写3进1；十位4+3+1=8，所以45+38=83。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u2l2q4',
            type: 'choice',
            question: '38+25进位加法个位8+5=13怎么处理？',
            options: ["写3进1","写13不进位","写8进1","写5进1"],
            answer: '写3进1',
            hint: '进位规则',
            explanation: '个位写3向十位进1。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l2q5',
            type: 'fill',
            question: '46+37=___',
            answer: '83',
            hint: '6+7=13写3进1，4+3+1=8，得83。',
            explanation: '个位6+7=13写3进1，十位4+3+1=8，46+37=83。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l2q6',
            type: 'choice',
            question: '【期末真题】一班有38人二班有25人三班有27人三个班一共有多少人？',
            options: ["80人","90人","89人","100人"],
            answer: '90人',
            hint: '38+25+27=？',
            explanation: '38+25=63，63+27=90人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l2q7',
            type: 'choice',
            question: '52+31=___',
            options: ["73","83","84","93"],
            answer: '83',
            hint: '[100以内加法]（数学-100以内加法-第1课）52+31=83',
            explanation: '2+1=3，5+3=8，得83。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u2l3',
        title: '连加',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能分步计算三个数的连加',
        successCriteria: '①能按顺序分步计算连加 ②能正确算出连加结果',
        iDo: '家长演示连加：23+14+32，先算23+14=37，再算37+32=69。【CFU检查理解】家长问“你能分步计算三个数的连加吗？”',
        weDo: '【引导式】亲子一起做连加练习，分步计算再合并。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立计算连加算式。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】连加分步算，先算前两个数，再加第三个数。\n共学四步：\n①对话出题：问"15+20+18怎么算？"\n②孩子应答："先算15+20=35，再算35+18=53"\n③答错引导：家长用小棒分两步摆，先合前两堆再合第三堆，让孩子看到分步过程\n④快速检测：12+15+20=？、25+30+15=？、18+22+30=？',
        funElement: '笑话：三个数排队加法，谁先谁后都一样！小游戏：连加接力赛',
        gsapAnimations: [
          '[GSAP:translateX|第一步计算动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:translateX|第二步计算动画|0.5s|第一步完成|power2.inOut]'
        ],
        images: [
          '[IMG:illustration|连加分步计算图|400x300|cartoon|png|连加运算]',
          '[IMG:illustration|三组物品合并图|300x250|cartoon|png|连加概念]'
        ],
        content: [
          { type: 'text', content: '连加就是三个或更多的数加在一起！不用怕，一步一步来，先算前两个，再加后面的！', animationType: 'reveal' },
          { type: 'example', content: '23+14+32：先算23+14=37，再算37+32=69！', label: '分步算', animationType: 'bounce' },
          { type: 'formula', content: '连加口诀：从左往右依次算，先算前两个，结果再加下一个！', label: '连加口诀', animationType: 'typewriter' },
          { type: 'tip', content: '连加时可以先找能凑整的数先加，比如12+18=30，再加25=55，这样更简便！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '连加分步计算动画：第一步23+14=37，第二步37+32=69', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '连加分步算',
              timelineConfig: {
                steps: [
                  { emoji: '1️⃣', description: '23+14=37', ttsNarration: '第一步，23加14等于37' },
                  { emoji: '2️⃣', description: '37+32=69', ttsNarration: '第二步，37加32等于69' },
                  { emoji: '✅', description: '结果：69', ttsNarration: '最终结果69！' }
                ]
              },
              ttsNarration: '连加分步算，先算23加14等于37，再算37加32等于69！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u2l3q1',
            type: 'choice',
            question: '21+13+24=？',
            options: ['48', '58', '68', '57'],
            answer: '58',
            hint: '先算21+13，再加24',
            explanation: '21+13=34，34+24=58。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l3q2',
            type: 'fill',
            question: '15+20+30=___',
            answer: '65',
            hint: '先算15+20，再加30',
            explanation: '15+20=35，35+30=65。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l3q3',
            type: 'flashcard',
            question: '快速计算：12+18+25=？',
            answer: '55',
            hint: '先算12+18=30',
            explanation: '12+18=30，30+25=55。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u2l3q4',
            type: 'choice',
            question: '连加：28+34+22=？怎样算简便？',
            options: ["从左到右","28+22=50再加34","34+22=56再加28"],
            answer: '28+22=50再加34',
            hint: '找凑整十的',
            explanation: '28+22=50，50+34=84。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l3q5',
            type: 'fill',
            question: '19+26+31=___',
            answer: '76',
            hint: '19+31=50，50+26=76。',
            explanation: '19+31=50，50+26=76。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l3q6',
            type: 'choice',
            question: '果园上午摘了35个苹果下午摘了28个又运走了20个还剩几个？',
            options: ["33个","43个","53个","83个"],
            answer: '43个',
            hint: '35+28=63，63-20=43',
            explanation: '先加后减得43个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u2l3q7',
            type: 'fill',
            question: '9+6=___想：把6拆成1和___',
            answer: '5',
            hint: '[凑十法]（数学-20以内进位加法-第1课）9+1=10，10+5=15。',
            explanation: '把6拆成1和5，9+1=10，10+5=15，所以9+6=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u2l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用100以内加法完成测评',
          successCriteria: '①测评正确率达80%以上 ②能说清进位和不进位的区别',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用100以内加法完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测100以内加法，重点看进位是否漏加1。\n共学四步：\n①对话出题：问"进位加法和不进位加法有什么不同？"\n②孩子应答："进位加法个位满十要向十位进1"\n③答错引导：错题用小棒重摆，满十捆一捆，强调进位的1不能忘\n④快速检测：23+14=？、48+25=？、36+27=？',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"100以内的加法"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u2l4q1',
              type: 'choice',
              question: '56+23=？先算什么？',
              options: ["个位6+3=9","十位5+2=7","同时算","不知道"],
              answer: '个位6+3=9',
              hint: '竖式加法从个位加起',
              explanation: '从个位加起：6+3=9，5+2=7，得79。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u2l4q2',
            type: 'fill',
            question: '34+45=___',
            answer: '79',
            hint: '个位4+5=9，十位3+4=7',
            explanation: '79。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u2l4q3',
              type: 'choice',
              question: '67+28个位7+8=15怎么处理？',
              options: ["写5进1","写15","写5不进位","写8进1"],
              answer: '写5进1',
              hint: '满十进一',
              explanation: '个位写5向十位进1。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u2l4q4',
            type: 'fill',
            question: '45+38=___',
            answer: '83',
            hint: '注意进位',
            explanation: '5+8=13写3进1，4+3+1=8，得83。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u2l4q5',
              type: 'choice',
              question: '【期中真题】学校有男生45人女生比男生多38人女生有多少人？',
              options: ["7人","13人","73人","83人"],
              answer: '83人',
              hint: '45+38=？',
              explanation: '45+38=83人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u2l4q6',
              type: 'choice',
              question: '下面哪个算式需要进位？',
              options: ["32+45","56+23","47+38","21+34"],
              answer: '47+38',
              hint: '个位相加是否满十',
              explanation: '7+8=15满十需要进位。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u2l4q7',
            type: 'fill',
            question: '8+5=___',
            answer: '13',
            hint: '[凑十法]（数学-20以内进位加法-第1课）凑十法',
            explanation: '8+2=10，10+3=13。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u2l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能用100以内加法解决生活问题',
          successCriteria: '①能从生活场景列加法算式 ②能正确计算结果',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能用100以内加法解决生活问题吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】用100以内加法解决购物、统计等生活问题。\n共学四步：\n①对话出题：上衣48元裤子35元，问"一共多少钱？怎么算？"\n②孩子应答："48+35=83元，个位8+5=13进1，十位4+3+1=8"\n③答错引导：用纸币演示48元加35元，竖式计算让孩子说进位过程\n④快速检测：买书25元买笔18元共几元、两班32人和28人共几人、45+38=？',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"100以内的加法"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u2l5q1',
              type: 'choice',
              question: '学校有男生35人女生比男生多18人全校有多少人？',
              options: ["17人","53人","71人","88人"],
              answer: '88人',
              hint: '先算女生再算总数',
              explanation: '女生35+18=53人，35+53=88人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u2l5q2',
            type: 'fill',
            question: '45+38=___',
            answer: '83',
            hint: '注意进位',
            explanation: '5+8=13写3进1，4+3+1=8，得83。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u2l5q3',
              type: 'choice',
              question: '图书馆上午借出25本下午借出38本还回13本现在比原来少多少本？',
              options: ["50本","38本","63本","76本"],
              answer: '50本',
              hint: '25+38-13=？',
              explanation: '25+38=63，63-13=50本。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u2l5q4',
            type: 'fill',
            question: '56+28=___',
            answer: '84',
            hint: '56+30-2=？',
            explanation: '56+30=86，86-2=84。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u2l5q5',
              type: 'choice',
              question: '【期末真题】学校买来故事书56本科技书28本连环画比故事书少18本三种书一共多少本？',
              options: ["66本","84本","122本","148本"],
              answer: '122本',
              hint: '先算连环画再算总数',
              explanation: '连环画56-18=38本，56+28+38=122本。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u2l5q6',
              type: 'choice',
              question: '下面哪个估算最接近实际值？48+31≈？',
              options: ["70","80","90","100"],
              answer: '80',
              hint: '48≈50，31≈30',
              explanation: '50+30=80。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u2l5q7',
            type: 'fill',
            question: '67+25=___',
            answer: '92',
            hint: '[凑十法]（数学-20以内进位加法-第1课）7+5=12写2进1',
            explanation: '7+5=12写2进1，6+2+1=9，得92。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u3',
    title: '100以内减法',
    subtitle: '掌握100以内的减法运算',
    order: 3,
    lessons: [
      {
        id: 'm2u3l1',
        title: '不退位减法',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用竖式计算100以内不退位减法',
        successCriteria: '①能正确列减法竖式（数位对齐） ②能从个位减起算出结果',
        iDo: '家长用竖式演示58-23：个位8-3=5，十位5-2=3，结果是35。【CFU检查理解】家长问“你能用竖式计算100以内不退位减法吗？”',
        weDo: '【引导式】亲子一起用竖式做不退位减法，互相检查。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立列竖式计算100以内不退位减法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】减法竖式也是相同数位对齐，从个位减起。\n共学四步：\n①对话出题：问"58-23用竖式怎么算？"\n②孩子应答："个位8-3=5，十位5-2=3，得35"\n③答错引导：用小棒摆5捆8根拿走2捆3根，强调个位对个位十位对十位\n④快速检测：67-34=？、89-45=？、76-23=？',
        funElement: '笑话：减法说我越减越少，加法羡慕哭了！小游戏：减法对对碰',
        gsapAnimations: [
          '[GSAP:staggerFrom|竖式减法数字逐位出现|0.4s|页面加载|power2.out]',
          '[GSAP:opacity|被减掉的数字消失|0.3s|计算触发|power2.in]'
        ],
        images: [
          '[IMG:illustration|58-23竖式计算图|400x300|cartoon|png|不退位减法]',
          '[IMG:illustration|小棒拿走示意图|300x250|cartoon|png|减法操作]'
        ],
        content: [
          { type: 'text', content: '不退位减法和加法一样，数位对齐从个位减！个位减个位，十位减十位，够减就不退位！', animationType: 'reveal' },
          { type: 'example', content: '58-23：个位8-3=5，十位5-2=3，结果35！', label: '竖式计算', animationType: 'bounce' },
          { type: 'formula', content: '不退位减法口诀：数位对齐从个位，个位减个位，十位减十位，够减不退位！', label: '减法口诀', animationType: 'typewriter' },
          { type: 'tip', content: '减法竖式和加法竖式一样，都要数位对齐！个位对个位，十位对十位！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '58-23减法分离动画：58个糖果中拿走23个，剩余35个闪烁高亮', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'separate',
              title: '58-23不退位减法',
              mergeConfig: { leftCount: 58, rightCount: 23, resultCount: 35, leftEmoji: '🍬', rightEmoji: '🍬', resultEmoji: '🍬', operator: '-' },
              ttsNarration: '58减23，有58个糖果，拿走23个，还剩35个！每10个一组方便数！',
            }
          },
          { type: 'animation', content: '竖式计算58-23：个位8-3=5，十位5-2=3，结果35', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '竖式不退位减法',
              verticalCalcConfig: {
                num1: 58,
                num2: 23,
                operator: '-',
                result: 35,
                steps: [
                  { text: '个位：8-3=5', highlight: 'ones' },
                  { text: '十位：5-2=3', highlight: 'tens' },
                ],
              },
              ttsNarration: '竖式计算58减23！个位8减3等于5！十位5减2等于3！结果35！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u3l1q1',
            type: 'choice',
            question: '67-34=？',
            options: ['23', '33', '43', '31'],
            answer: '33',
            hint: '个位7-4，十位6-3',
            explanation: '个位7-4=3，十位6-3=3，所以67-34=33。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l1q2',
            type: 'fill',
            question: '89-52=___',
            answer: '37',
            hint: '个位9-2，十位8-5',
            explanation: '个位9-2=7，十位8-5=3，所以89-52=37。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l1q3',
            type: 'flashcard',
            question: '快速计算：76-41=？',
            answer: '35',
            hint: '个位6-1，十位7-4',
            explanation: '个位6-1=5，十位7-4=3，所以76-41=35。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u3l1q4',
            type: 'choice',
            question: '86-32=？十位上8-3=？',
            options: ["5","6","4","不能减"],
            answer: '5',
            hint: '竖式减法',
            explanation: '十位8-3=5，个位6-2=4，得54。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l1q5',
            type: 'fill',
            question: '79-45=___',
            answer: '34',
            hint: '个位9-4=5，十位7-4=3，得34。',
            explanation: '个位9-4=5，十位7-4=3，79-45=34。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l1q6',
            type: 'choice',
            question: '一本书有95页小明看了36页还剩多少页？',
            options: ["49页","59页","61页","131页"],
            answer: '59页',
            hint: '95-36=？',
            explanation: '95-36=59页。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l1q7',
            type: 'fill',
            question: '13-6=___',
            answer: '7',
            hint: '[20以内退位减法]（数学-20以内退位减法-第1课）10-6=4，4+3=7。',
            explanation: '13-6=7，用破十法：10-6=4，4+3=7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u3l2',
        title: '退位减法',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用竖式计算100以内退位减法',
        successCriteria: '①能正确处理"借一当十" ②能正确计算退位减法',
        iDo: '家长用竖式演示52-28：个位2-8不够减，借1当10，12-8=4，十位4-2=2。【CFU检查理解】家长问“你能用竖式计算100以内退位减法吗？”',
        weDo: '【引导式】亲子一起练习退位减法，重点练习"不够减就借位"。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立列竖式计算100以内退位减法。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】退位减法关键是个位不够减时向十位借1当10。\n共学四步：\n①对话出题：问"52-28用竖式怎么算？"\n②孩子应答："个位2不够减8，向十位借1当10，12-8=4，十位5-1-2=2，得24"\n③答错引导：用小棒摆5捆2根，个位2根不够减8，拆开1捆变10根，12-8=4\n④快速检测：63-28=？、74-39=？、50-24=？',
        funElement: '笑话：个位说我借十位的1，十位说记得还！小游戏：借位小管家',
        gsapAnimations: [
          '[GSAP:translateY|借位1从十位飞到个位|0.5s|借位触发|power2.inOut]',
          '[GSAP:scaleIn|退位点标记闪烁|0.4s|借位完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|52-28竖式退位图|400x300|cartoon|png|退位减法]',
          '[IMG:illustration|借1当10示意图|300x250|cartoon|png|借位规则]'
        ],
        content: [
          { type: 'text', content: '个位不够减怎么办？向十位借1当10！借了之后个位就变大了，十位要少1！', animationType: 'reveal' },
          { type: 'example', content: '52-28：个位2-8不够减，借1当10，12-8=4；十位5借走1变4，4-2=2，结果24！', label: '退位计算', animationType: 'bounce' },
          { type: 'formula', content: '退位减法口诀：个位不够减，借1当10减，十位要少1，退位点记上！', label: '退位口诀', animationType: 'counter' },
          { type: 'tip', content: '借位时在十位上画个小圆点提醒自己，十位已经少1了！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '52-28退位减法分离动画：52颗星星中拿走28颗，个位不够减向十位借1当10，结果24', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'separate',
              title: '52-28退位减法',
              mergeConfig: { leftCount: 52, rightCount: 28, resultCount: 24, leftEmoji: '⭐', rightEmoji: '⭐', resultEmoji: '⭐', operator: '-' },
              ttsNarration: '52减28，个位2减8不够减，向十位借1当10，12减8等于4，十位4减2等于2，结果24！',
            }
          },
          { type: 'animation', content: '竖式计算52-28：个位2-8不够减借1当10，12-8=4，十位4-2=2，结果24', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'verticalCalc',
              title: '竖式退位减法',
              verticalCalcConfig: {
                num1: 52,
                num2: 28,
                operator: '-',
                result: 24,
                borrow: [1, 0],
                steps: [
                  { text: '个位：2-8不够减，借1当10', highlight: 'ones' },
                  { text: '个位：12-8=4', highlight: 'ones' },
                  { text: '十位：4-2=2', highlight: 'tens' },
                ],
              },
              ttsNarration: '竖式计算52减28！个位2减8不够减，向十位借1当10！12减8等于4！十位5借走1变4，4减2等于2！结果24！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u3l2q1',
            type: 'choice',
            question: '63-27=？',
            options: ['34', '36', '44', '46'],
            answer: '36',
            hint: '个位3-7不够减，借1当10',
            explanation: '个位13-7=6，十位5-2=3，所以63-27=36。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l2q2',
            type: 'fill',
            question: '81-45=___',
            answer: '36',
            hint: '个位1-5不够减，借位',
            explanation: '个位11-5=6，十位7-4=3，所以81-45=36。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l2q3',
            type: 'flashcard',
            question: '快速计算：54-19=？',
            answer: '35',
            hint: '个位4-9不够减',
            explanation: '个位14-9=5，十位4-1=3，所以54-19=35。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u3l2q4',
            type: 'choice',
            question: '52-18退位减法个位2-8不够怎么办？',
            options: ["从十位借1当10","交换位置","直接写6结束"],
            answer: '从十位借1当10',
            hint: '借位规则',
            explanation: '从十位借1当10，12-8=4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l2q5',
            type: 'fill',
            question: '70-26=___',
            answer: '44',
            hint: '个位0-6借位10-6=4，十位7变6减2=4，得44。',
            explanation: '70-26：个位0-6不够减，借位10-6=4，十位7变6减2=4，得44。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l2q6',
            type: 'choice',
            question: '【期中真题】操场上有62人在跑步走了18人又来了25人现在有多少人？',
            options: ["44人","69人","74人","105人"],
            answer: '69人',
            hint: '62-18+25=？',
            explanation: '62-18=44，44+25=69人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l2q7',
            type: 'choice',
            question: '87-53=___',
            options: ["24","34","44","54"],
            answer: '34',
            hint: '[100以内减法]（数学-100以内减法-第1课）87-53=34',
            explanation: '7-3=4，8-5=3，得34。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u3l3',
        title: '加减混合',
        order: 3,
        teachingMethod: '情境教学法',
        learningObjective: '我能按从左到右的顺序计算加减混合',
        successCriteria: '①能正确判断加减顺序 ②能正确计算加减混合运算',
        iDo: '家长出应用题：有45个苹果，吃了18个，又买了12个，现在有几个？【CFU检查理解】家长问“你能按从左到右的顺序计算加减混合吗？”',
        weDo: '【引导式】亲子一起做加减混合运算，理清先加后减还是先减后加。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立计算加减混合算式。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】加减混合按从左到右顺序算，看清加号减号。\n共学四步：\n①对话出题：问"45-18+12怎么算？"\n②孩子应答："先算45-18=27，再算27+12=39"\n③答错引导：家长用小棒先拿走18根再加12根，强调从左到右一步步算\n④快速检测：36+20-15=？、50-22+18=？、28+35-40=？',
        funElement: '小游戏：加减混合大冒险！歇后语：三下五除二——干脆利落',
        gsapAnimations: [
          '[GSAP:translateX|加法物品飞入|0.5s|加法触发|power2.inOut]',
          '[GSAP:opacity|减法物品消失|0.4s|减法触发|power2.in]'
        ],
        images: [
          '[IMG:illustration|加减混合应用题场景|400x300|cartoon|png|加减混合]',
          '[IMG:illustration|苹果增减示意图|300x250|cartoon|png|混合运算]'
        ],
        content: [
          { type: 'text', content: '加减混合就是又有加法又有减法！按照从左到右的顺序一步一步算，看清是加号还是减号！', animationType: 'reveal' },
          { type: 'example', content: '45-18+12：先算45-18=27，再算27+12=39！', label: '混合计算', animationType: 'bounce' },
          { type: 'formula', content: '加减混合口诀：从左往右依次算，看清加号和减号，一步一步不着急！', label: '混合口诀', animationType: 'typewriter' },
          { type: 'tip', content: '看清符号最重要！加号和减号长得像，别看错了，看错一个答案全错！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '加减混合动画：减法物品消失，加法物品飞入，结果依次变化', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '45-18+12加减混合',
              timelineConfig: {
                steps: [
                  { emoji: '🍎', description: '45个苹果', ttsNarration: '有45个苹果' },
                  { emoji: '➖', description: '-18个', ttsNarration: '吃掉18个，剩27个' },
                  { emoji: '➕', description: '+12个', ttsNarration: '又买来12个' },
                  { emoji: '✅', description: '=39个', ttsNarration: '现在有39个苹果！' }
                ]
              },
              ttsNarration: '45减18加12，先算45减18等于27，再加12等于39！',
            }
          },
          { type: 'tip', content: '本课主要使用情境化练习，应用题驱动，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u3l3q1',
            type: 'choice',
            question: '45-18+12=？',
            options: ['29', '39', '49', '35'],
            answer: '39',
            hint: '先算45-18，再加12',
            explanation: '45-18=27，27+12=39。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l3q2',
            type: 'fill',
            question: '36+25-14=___',
            answer: '47',
            hint: '先算36+25，再减14',
            explanation: '36+25=61，61-14=47。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l3q3',
            type: 'flashcard',
            question: '快速计算：50-23+15=？',
            answer: '42',
            hint: '先算50-23',
            explanation: '50-23=27，27+15=42。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u3l3q4',
            type: 'choice',
            question: '80-35-20=？怎样算？',
            options: ["从左往右依次减","先减20再减35","先算加法再算减法"],
            answer: '从左往右依次减',
            hint: '80-35=45，45-20=25',
            explanation: '连减运算从左往右依次计算：80-35=45，45-20=25，得25。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l3q5',
            type: 'fill',
            question: '91-47-23=___',
            answer: '21',
            hint: '91-47=44，44-23=21。',
            explanation: '91-47=44，44-23=21。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l3q6',
            type: 'choice',
            question: '超市有85瓶果汁上午卖了28瓶下午卖了37瓶还剩几瓶？',
            options: ["10瓶","20瓶","21瓶","52瓶"],
            answer: '20瓶',
            hint: '85-28-37=？',
            explanation: '85-28=57，57-37=20瓶。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u3l3q7',
            type: 'fill',
            question: '48+35=___',
            answer: '83',
            hint: '[100以内加法]（数学-100以内加法-第2课）8+5=13写3进1，4+3+1=8，得83。',
            explanation: '个位8+5=13写3进1，十位4+3+1=8，48+35=83。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u3l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用100以内减法完成测评',
          successCriteria: '①测评正确率达80%以上 ②能说清退位减法的过程',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用100以内减法完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测100以内减法，重点看退位是否出错。\n共学四步：\n①对话出题：问"退位减法个位不够减怎么办？"\n②孩子应答："向十位借1当10再减"\n③答错引导：错题用小棒重摆，拆1捆当10根，让孩子看到借一当十\n④快速检测：58-23=？、63-28=？、74-39=？',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"100以内的减法"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u3l4q1',
              type: 'choice',
              question: '75-32=？先算什么？',
              options: ["个位5-2=3","十位7-3=4","同时算","不知道"],
              answer: '个位5-2=3',
              hint: '竖式减法从个位减起',
              explanation: '5-2=3，7-3=4，得43。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u3l4q2',
            type: 'fill',
            question: '86-54=___',
            answer: '32',
            hint: '个位6-4=2，十位8-5=3',
            explanation: '32。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u3l4q3',
              type: 'choice',
              question: '53-28个位3-8不够减怎么办？',
              options: ["从十位借1当10","交换位置","直接写5结束"],
              answer: '从十位借1当10',
              hint: '借位减法',
              explanation: '从十位借1，13-8=5，十位4-2=2，得25。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u3l4q4',
            type: 'fill',
            question: '62-37=___',
            answer: '25',
            hint: '借位减法',
            explanation: '12-7=5，5-3=2，得25。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u3l4q5',
              type: 'choice',
              question: '【期末真题】水果店有85个苹果上午卖了36个下午卖了28个还剩多少个？',
              options: ["11个","21个","31个","49个"],
              answer: '21个',
              hint: '85-36-28=？',
              explanation: '85-36=49，49-28=21个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u3l4q6',
              type: 'choice',
              question: '100-47=？',
              options: ["43","53","57","63"],
              answer: '53',
              hint: '借位减法',
              explanation: '10-7=3借位，9-4=5，得53。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u3l4q7',
            type: 'fill',
            question: '15-8=___',
            answer: '7',
            hint: '[20以内退位减法]（数学-20以内退位减法-第1课）8+7=15',
            explanation: '15-8=7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u3l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能用100以内减法解决生活问题',
          successCriteria: '①能从生活场景列减法算式 ②能正确计算结果',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能用100以内减法解决生活问题吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】用100以内减法解决购物找零、比较多少等问题。\n共学四步：\n①对话出题：有85元买书花38元，问"还剩几元？怎么算？"\n②孩子应答："85-38=47，个位5不够减8借1当10，15-8=7，十位8-1-3=4"\n③答错引导：用纸币演示85元花38元，竖式让孩子说借位过程\n④快速检测：92-45=？、100-36=？、有60元花27元剩几元',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"100以内的减法"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u3l5q1',
              type: 'choice',
              question: '水果店有85千克苹果卖出35千克又运进28千克现在有多少千克？',
              options: ["22千克","50千克","78千克","92千克"],
              answer: '78千克',
              hint: '85-35+28=？',
              explanation: '85-35=50，50+28=78千克。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u3l5q2',
            type: 'fill',
            question: '90-47=___',
            answer: '43',
            hint: '借位减法',
            explanation: '90-47=43。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u3l5q3',
              type: 'choice',
              question: '小明有50元买书包花了28元买文具花了15元还剩多少元？',
              options: ["7元","13元","22元","35元"],
              answer: '7元',
              hint: '50-28-15=？',
              explanation: '50-28=22，22-15=7元。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u3l5q4',
            type: 'fill',
            question: '验算：83-47=36用加法验算36+47=___',
            answer: '83',
            hint: '差+减数=被减数',
            explanation: '36+47=83正确。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u3l5q5',
              type: 'choice',
              question: '【期中真题】学校有80本图书借出38本又还回15本现在有多少本？',
              options: ["27本","42本","57本","95本"],
              answer: '57本',
              hint: '80-38+15=？',
              explanation: '80-38=42，42+15=57本。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u3l5q6',
              type: 'choice',
              question: '100-36=？',
              options: ["54","64","74","84"],
              answer: '64',
              hint: '连续借位',
              explanation: '100-36=64。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u3l5q7',
            type: 'fill',
            question: '72-38=___',
            answer: '34',
            hint: '[20以内退位减法]（数学-20以内退位减法-第1课）12-8=4，6-3=3',
            explanation: '72-38=34。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u4',
    title: '乘法初步',
    subtitle: '认识乘法，背诵乘法口诀',
    order: 4,
    lessons: [
      {
        id: 'm2u4l1',
        title: '乘法的意义',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能理解乘法是求几个相同加数和的简便运算',
        successCriteria: '①能把连加算式改写成乘法算式 ②能说出乘法各部分名称',
        iDo: '家长用3盘苹果，每盘4个，演示4+4+4=12，写成3×4=12。【CFU检查理解】家长问“你能理解乘法是求几个相同加数和的简便运算吗？”',
        weDo: '【引导式】亲子一起用积木分组，把加法算式改写成乘法算式。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立把相同加数的加法改写成乘法算式。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】乘法是求几个相同加数的和，关键是"相同加数"。\n共学四步：\n①对话出题：摆3盘每盘4个苹果，问"一共几个？用加法和乘法怎么算？"\n②孩子应答："4+4+4=12，3×4=12，3个4相加"\n③答错引导：家长摆3堆每堆4颗糖，让孩子数加法，再说3个4就是3乘4\n④快速检测：5+5+5=？写成乘法、2+2+2+2=？写成乘法、3×6表示几个几',
        funElement: '笑话：加法说我一个一个加，乘法说我一乘搞定！小游戏：加法变乘法魔术',
        gsapAnimations: [
          '[GSAP:staggerFrom|3组物品依次出现|0.4s|页面加载|power2.out]',
          '[GSAP:scaleIn|乘号和结果弹出|0.5s|分组完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|3盘苹果每盘4个|400x300|cartoon|png|乘法意义]',
          '[IMG:illustration|加法变乘法对照图|300x250|cartoon|png|乘法引入]'
        ],
        content: [
          { type: 'text', content: '乘法是加法的快捷方式！当加数都一样时，用乘法更快！3个4相加，写成3×4=12！', animationType: 'reveal' },
          { type: 'example', content: '4+4+4=12，3个4相加，写成3×4=12，读作3乘4等于12！', label: '变一变', animationType: 'bounce' },
          { type: 'formula', content: '乘法意义：几个相同加数的和=加数个数×加数，乘号"×"读作"乘"！', label: '乘法意义', animationType: 'typewriter' },
          { type: 'tip', content: '只有加数一样时才能用乘法！2+3+4不能变乘法，因为加数不一样！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '3组苹果依次出现的动画，加法算式4+4+4变成乘法3×4', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '乘法的意义：3×4=12',
              cpaConfig: {
                concrete: { emoji: '🍎', text: '3盘苹果，每盘4个' },
                pictorial: { emoji: '➕', text: '4+4+4=12' },
                abstract: { emoji: '✖️', text: '3×4=12' }
              },
              ttsNarration: '3盘苹果，每盘4个，4加4加4等于12，写成乘法3乘4等于12！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u4l1q1',
            type: 'choice',
            question: '5+5+5可以写成乘法算式？',
            options: ['3×5', '5×5', '5+3', '3+5'],
            answer: '3×5',
            hint: '3个5相加',
            explanation: '5+5+5是3个5相加，写成乘法就是3×5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l1q2',
            type: 'fill',
            question: '4×6表示___个4相加',
            answer: '6',
            hint: '乘号前面是组数还是每组的数？',
            explanation: '4×6表示6个4相加，即4+4+4+4+4+4=24。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l1q3',
            type: 'flashcard',
            question: '⭕⭕⭕ ⭕⭕⭕ ⭕⭕⭕ ⭕⭕⭕ 写出乘法算式',
            answer: '4×3=12',
            hint: '几组？每组几个？',
            explanation: '4组，每组3个，乘法算式4×3=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u4l1q4',
            type: 'choice',
            question: '6+6+6+6改写成乘法算式是？',
            options: ["4×6或6×4","6+4","4+6","6×6"],
            answer: '4×6或6×4',
            hint: '4个6相乘',
            explanation: '4个6写成4×6或6×4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l1q5',
            type: 'fill',
            question: '5×3表示___个5相加（或5个3相加）',
            answer: '3',
            hint: '5×3表示3个5或5个3。',
            explanation: '5×3表示3个5相加，即5+5+5=15。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l1q6',
            type: 'choice',
            question: '每盘有4个苹果，6盘一共有多少个苹果？用哪种方法最快？',
            options: ["4+4+4+4+4+4","4×6","6×4","B和C都对"],
            answer: 'B和C都对',
            hint: '乘法更快捷',
            explanation: '4×6=24或6×4=24。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l1q7',
            type: 'fill',
            question: '相同的数相加：20+20+20=___',
            answer: '60',
            hint: '[加法]（数学-100以内加法-第1课）20×3=60。',
            explanation: '20+20+20=60，3个20相加等于60。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u4l2',
        title: '2-5的乘法口诀',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能背诵2-5的乘法口诀并计算',
        successCriteria: '①能熟练背诵2-5乘法口诀 ②能用口诀算乘法',
        iDo: '家长带读2-5的乘法口诀，配合节奏拍手朗读。【CFU检查理解】家长问“你能背诵2-5的乘法口诀并计算吗？”',
        weDo: '【引导式】亲子一起拍手念口诀，互相考问答。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立背诵2-5的乘法口诀并计算。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】2-5的口诀要反复朗读，先理解再记忆，可编歌谣。\n共学四步：\n①对话出题：问"三四多少？二五一十对吗？"\n②孩子应答："三四十二，二五一十"\n③答错引导：家长用小棒摆3组每组4根，数一共12根，帮孩子理解三四十二\n④快速检测：2×3=？、4×5=？、3×4=？、5×5=？',
        funElement: '小游戏：口诀接龙——你说一二得二，我接二二得四！歇后语：二五一十——明摆着',
        gsapAnimations: [
          '[GSAP:scaleIn|口诀卡片依次弹出|0.4s|页面加载|back.out(1.7)]',
          '[GSAP:staggerFrom|口诀数字跳动|0.3s|朗读触发|elastic.out(1,0.5)]'
        ],
        images: [
          '[IMG:illustration|2-5乘法口诀表|400x300|cartoon|png|乘法口诀]',
          '[IMG:illustration|口诀配图示例|300x250|cartoon|png|口诀图示]'
        ],
        content: [
          { type: 'text', content: '乘法口诀是计算的好帮手！背熟了口诀，算乘法就像变魔术一样快！', animationType: 'reveal' },
          { type: 'example', content: '2的口诀：一二得二，二二得四，二三得六，二四得八，二五一十', label: '念一念', animationType: 'bounce' },
          { type: 'formula', content: '2-5口诀：一二得二到二五一十，一三得三到三五十五，一四得四到四五二十，一五得五到五五二十五', label: '口诀表', animationType: 'counter' },
          { type: 'tip', content: '背口诀有窍门：2的口诀每次多2，5的口诀个位总是0或5！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '口诀卡片依次弹出的动画，数字跳动配合节奏', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '2-5的乘法口诀',
              cardRevealConfig: {
                cards: [
                  { front: '2×1', back: '一二得二', ttsText: '一二得二' },
                  { front: '2×2', back: '二二得四', ttsText: '二二得四' },
                  { front: '2×3', back: '二三得六', ttsText: '二三得六' },
                  { front: '3×4', back: '三四十二', ttsText: '三四十二' },
                  { front: '4×5', back: '四五二十', ttsText: '四五二十' },
                  { front: '5×5', back: '五五二十五', ttsText: '五五二十五' }
                ]
              },
              ttsNarration: '点击卡片翻转，看看乘法口诀！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u4l2q1',
            type: 'choice',
            question: '三四得几？',
            options: ['7', '10', '12', '14'],
            answer: '12',
            hint: '3×4=？',
            explanation: '三四十二，3×4=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l2q2',
            type: 'fill',
            question: '五五___',
            answer: '二十五',
            hint: '5×5=？',
            explanation: '五五二十五，5×5=25。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l2q3',
            type: 'flashcard',
            question: '快速回答：二四得几？',
            answer: '8',
            hint: '2×4=？',
            explanation: '二四得八，2×4=8。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u4l2q4',
            type: 'choice',
            question: '三四十二可以写出哪两个乘法算式？',
            options: ["3+4和4+3","3×4和4×3","只有3×4","只有4×3"],
            answer: '3×4和4×3',
            hint: '乘法口诀对应',
            explanation: '3×4=12，4×3=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l2q5',
            type: 'fill',
            question: '五七___',
            answer: '三十五',
            hint: '5×7=35。',
            explanation: '五七三十五，5×7=35。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l2q6',
            type: 'choice',
            question: '【期末真题】每个同学发4本练习册，全班有8个同学一共需要多少本练习册？',
            options: ["12本","24本","32本","36本"],
            answer: '32本',
            hint: '4×8=？',
            explanation: '4×8=32本。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l2q7',
            type: 'choice',
            question: '7+7+7=___可以用___计算',
            options: ["21；7×3","21；3×7","A和B都对","以上都不对"],
            answer: 'A和B都对',
            hint: '[乘法初步]（数学-乘法初步-第1课）乘法意义',
            explanation: '7×3=21或3×7=21。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u4l3',
        title: '6-9的乘法口诀',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能背诵6-9的乘法口诀并计算',
        successCriteria: '①能熟练背诵6-9乘法口诀 ②能用口诀算乘法',
        iDo: '家长教9的乘法手指速算法，展示手指弯曲技巧。【CFU检查理解】家长问“你能背诵6-9的乘法口诀并计算吗？”',
        weDo: '【引导式】亲子一起用手指速算法练习9的乘法，互相考。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立背诵6-9的乘法口诀并计算。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】9的口诀有规律：积的十位和个位之和都是9。\n共学四步：\n①对话出题：问"六九多少？九九多少？"\n②孩子应答："六九五十四，九九八十一"\n③答错引导：9的口诀用手指法，弯下第几个手指，左边是十位右边是个位\n④快速检测：6×7=？、8×9=？、7×8=？、9×9=？',
        funElement: '笑话：9说我最神奇，手指一弯就知道！小游戏：9的手指魔术',
        gsapAnimations: [
          '[GSAP:rotateZ|手指弯曲动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|口诀结果弹出|0.4s|弯曲完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|9的乘法手指速算图|400x300|cartoon|png|手指速算]',
          '[IMG:illustration|6-9乘法口诀表|300x250|cartoon|png|口诀表]'
        ],
        content: [
          { type: 'text', content: '6-9的口诀数字更大，但也有规律！9的口诀最神奇：积的十位和个位加起来都是9！', animationType: 'reveal' },
          { type: 'example', content: '9的口诀：一九得九(9)，二九十八(18)，三九二十七(27)……1+8=9，2+7=9！', label: '找规律', animationType: 'bounce' },
          { type: 'formula', content: '9的口诀规律：几九就是几十减几！如三九=30-3=27，七九=70-7=63', label: '9的速算', animationType: 'counter' },
          { type: 'tip', content: '9的手指魔术：弯下第几根手指，左边就是十位，右边就是个位！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '9的手指速算动画：手指弯曲后左右两边数字组成结果', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '9的乘法口诀',
              cardRevealConfig: {
                cards: [
                  { front: '9×1', back: '一九得九', ttsText: '一九得九' },
                  { front: '9×2', back: '二九十八', ttsText: '二九十八' },
                  { front: '9×3', back: '三九二十七', ttsText: '三九二十七' },
                  { front: '9×4', back: '四九三十六', ttsText: '四九三十六' },
                  { front: '9×5', back: '五九四十五', ttsText: '五九四十五' },
                  { front: '9×9', back: '九九八十一', ttsText: '九九八十一' }
                ]
              },
              ttsNarration: '9的口诀最神奇，积的十位和个位加起来都是9！点击翻转卡片！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u4l3q1',
            type: 'choice',
            question: '六七得几？',
            options: ['36', '42', '48', '56'],
            answer: '42',
            hint: '6×7=？',
            explanation: '六七四十二，6×7=42。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l3q2',
            type: 'fill',
            question: '八九___',
            answer: '七十二',
            hint: '8×9=？',
            explanation: '八九七十二，8×9=72。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l3q3',
            type: 'flashcard',
            question: '快速回答：七九得几？',
            answer: '63',
            hint: '7×9=？',
            explanation: '七九六十三，7×9=63。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u4l3q4',
            type: 'choice',
            question: '2×9和9×2的结果一样吗？',
            options: ["不一样","一样，都是18","一样，都是11"],
            answer: '一样，都是18',
            hint: '交换律',
            explanation: '2×9=18，9×2=18。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l3q5',
            type: 'fill',
            question: '6×7+6=___（想：6个7再加1个6等于几个6？）',
            answer: '48',
            hint: '6×7+6=6×8=48。',
            explanation: '6个7再加1个6等于8个6，6×8=48。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l3q6',
            type: 'choice',
            question: '一盒巧克力有8块，买了5盒吃掉了12块还剩几块？',
            options: ["28块","38块","40块","52块"],
            answer: '28块',
            hint: '8×5=40，40-12=28',
            explanation: '先算总数再减去吃的。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u4l3q7',
            type: 'fill',
            question: '四六___',
            answer: '二十四',
            hint: '[2-5乘法口诀]（数学-2-5乘法口诀-第2课）四六二十四。',
            explanation: '四六二十四，4×6=24。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u4l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用乘法意义和口诀完成测评',
          successCriteria: '①测评正确率达80%以上 ②能熟练背诵1-9乘法口诀',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用乘法意义和口诀完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测乘法，重点查口诀熟练度和乘法意义。\n共学四步：\n①对话出题：问"乘法是什么意思？背一遍9的口诀"\n②孩子应答："乘法是求几个相同加数的和，一九得九...九九八十一"\n③答错引导：口诀不熟的多读多背，用小棒摆出来帮助理解\n④快速检测：7×8=？、6×9=？、4×7=？、3×8=？',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"乘法初步"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u4l4q1',
              type: 'choice',
              question: '3×6和6×3的结果分别是？',
              options: ["18和18","18和9","9和18","不一样"],
              answer: '18和18',
              hint: '乘法交换律',
              explanation: '3×6=18，6×3=18，结果相同。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u4l4q2',
            type: 'fill',
            question: '4×5=___',
            answer: '20',
            hint: '四五二十',
            explanation: '4×5=20。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u4l4q3',
              type: 'choice',
              question: '下面哪个算式表示5个6？',
              options: ["5+6","6×5","5×5","6+6"],
              answer: '6×5',
              hint: '乘法的意义',
              explanation: '6×5表示5个6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u4l4q4',
            type: 'fill',
            question: '7×3=___',
            answer: '21',
            hint: '三七二十一',
            explanation: '7×3=21。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u4l4q5',
              type: 'choice',
              question: '【期末真题】每排坐8人坐了5排一共有多少人？',
              options: ["13人","30人","40人","45人"],
              answer: '40人',
              hint: '8×5=？',
              explanation: '8×5=40人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u4l4q6',
              type: 'choice',
              question: '6×4+6=？可以看作几个6？',
              options: ["4个6","5个6","6个6","10个6"],
              answer: '5个6',
              hint: '6×4+6=6×5',
              explanation: '4个6加1个6=5个6=30。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u4l4q7',
            type: 'fill',
            question: '36+42=___',
            answer: '78',
            hint: '[加法]（数学-100以内加法-第1课）个位十位分别加',
            explanation: '78。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u4l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能用乘法解决生活问题',
          successCriteria: '①能从生活场景列乘法算式 ②能正确用口诀计算',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能用乘法解决生活问题吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】用乘法解决生活问题，如算几组物品总数。\n共学四步：\n①对话出题：一盒6支笔买4盒，问"一共几支？怎么算？"\n②孩子应答："6×4=24，四六二十四，共24支"\n③答错引导：用实物摆4堆每堆6个，让孩子数再加，再说乘法更简便\n④快速检测：5排每排7人共几人、8元一个买3个共几元、6×9=？',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"乘法初步"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u4l5q1',
              type: 'choice',
              question: '学校有5排座位每排8个一共有多少个座位？',
              options: ["13个","35个","40个","58个"],
              answer: '40个',
              hint: '5×8=？',
              explanation: '5×8=40个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u4l5q2',
            type: 'fill',
            question: '7×8=___',
            answer: '56',
            hint: '七八五十六',
            explanation: '56。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u4l5q3',
              type: 'choice',
              question: '小明每天读6页书一周（7天）读多少页？',
              options: ["13页","36页","42页","48页"],
              answer: '42页',
              hint: '6×7=？',
              explanation: '6×7=42页。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u4l5q4',
            type: 'fill',
            question: '9×6=___',
            answer: '54',
            hint: '六九五十四',
            explanation: '54。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u4l5q5',
              type: 'choice',
              question: '【期末真题】教室有4行桌子每行9张一共有多少张桌子？',
              options: ["13张","27张","36张","45张"],
              answer: '36张',
              hint: '4×9=？',
              explanation: '4×9=36张。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u4l5q6',
              type: 'choice',
              question: '6×7-6=？可以看作？',
              options: ["5×6","6×6","7×6","5×7"],
              answer: '6×6',
              hint: '6个7减1个6=6个6',
              explanation: '6×7-6=6×6=36。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u4l5q7',
            type: 'fill',
            question: '48÷8=___',
            answer: '6',
            hint: '[除法初步]（数学-除法初步-第2课）六八四十八',
            explanation: '48÷8=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u5',
    title: '除法初步',
    subtitle: '认识除法，学会平均分',
    order: 5,
    lessons: [
      {
        id: 'm2u5l1',
        title: '平均分',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能理解平均分就是每份一样多',
        successCriteria: '①能把物品平均分成几份 ②能说出每份分了几个',
        iDo: '家长把12颗糖平均分给3个小朋友，每人数一数分到几颗。【CFU检查理解】家长问“你能理解平均分就是每份一样多吗？”',
        weDo: '【引导式】亲子一起用积木做平均分游戏，确保每份一样多。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立把物品平均分成若干份。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】平均分就是每份一样多，分完检查每份是否相同。\n共学四步：\n①对话出题：12颗糖平均分3份，问"每份几颗？怎么分？"\n②孩子应答："每份4颗，一颗一颗轮流分3份"\n③答错引导：家长拿12颗糖带孩子一颗颗轮流分到3堆，分完数每堆都是4颗\n④快速检测：8个苹果平均分2份每份几、15颗糖平均分5份每份几、10块饼干平均分2份',
        funElement: '笑话：分糖果——我要一样多，不然不公平！小游戏：公平分糖果',
        gsapAnimations: [
          '[GSAP:translateX|物品分到各组动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|每份数量标签弹出|0.4s|分配完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|12颗糖平均分3份|400x300|cartoon|png|平均分]',
          '[IMG:illustration|每份一样多示意图|300x250|cartoon|png|均分概念]'
        ],
        content: [
          { type: 'text', content: '平均分就是分成几份，每份一样多！分完后检查一下，每份的数量必须相同才算平均分！', animationType: 'reveal' },
          { type: 'example', content: '12颗糖平均分给3个小朋友：1颗1颗分，每人数4颗，每份一样多！', label: '分一分', animationType: 'bounce' },
          { type: 'formula', content: '平均分口诀：总数÷份数=每份数，每份一样多才公平！', label: '平均分口诀', animationType: 'typewriter' },
          { type: 'tip', content: '平均分的关键是"一样多"！分完后数一数每份，不一样多就不是平均分！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '12颗糖平均分给3个小朋友的动画，每份4颗糖', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'separate',
              title: '12颗糖平均分3份',
              mergeConfig: { leftCount: 12, rightCount: 4, resultCount: 4, leftEmoji: '🍬', rightEmoji: '🍬', resultEmoji: '🍬', operator: '÷' },
              ttsNarration: '12颗糖平均分给3个小朋友，每人4颗，每份一样多！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u5l1q1',
            type: 'choice',
            question: '8个苹果平均分给2个人，每人几个？',
            options: ['2个', '3个', '4个', '6个'],
            answer: '4个',
            hint: '8÷2=？',
            explanation: '8÷2=4，每人分到4个苹果。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l1q2',
            type: 'fill',
            question: '10颗糖平均分给5个小朋友，每人___颗',
            answer: '2',
            hint: '10÷5=？',
            explanation: '10÷5=2，每人分到2颗糖。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l1q3',
            type: 'flashcard',
            question: '15块饼干平均分给3人，每人几块？',
            answer: '5',
            hint: '15÷3=？',
            explanation: '15÷3=5，每人分到5块饼干。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u5l1q4',
            type: 'choice',
            question: '12个苹果平均放在4个盘子里每盘几个？',
            options: ['3个', '4个', '6个', '8个'],
            answer: '3个',
            hint: '除法含义',
            explanation: '平均分用除法12÷4=3，每盘3个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l1q5',
            type: 'fill',
            question: '15÷3=___',
            answer: '5',
            hint: '15平均分成3份每份5。',
            explanation: '15÷3=5，三五十五。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l1q6',
            type: 'choice',
            question: '妈妈买了20个橘子平均分给小明和他的4个朋友每人分几个？',
            options: ["4个","5个","6个","16个"],
            answer: '4个',
            hint: '小明+4个朋友=5人，20÷5=4个',
            explanation: '共5人，20÷5=4个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l1q7',
            type: 'fill',
            question: '___×6=18',
            answer: '3',
            hint: '[乘法意义]（数学-乘法初步-第1课）三六十八。',
            explanation: '3×6=18，所以___=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u5l2',
        title: '除法的意义',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能理解除法是乘法的逆运算',
        successCriteria: '①能把平均分写成除法算式 ②能说出除法各部分名称',
        iDo: '家长讲解：12÷3=4，表示把12平均分成3份，每份是4。【CFU检查理解】家长问“你能理解除法是乘法的逆运算吗？”',
        weDo: '【引导式】亲子一起把平均分的过程写成除法算式，和乘法对照。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立写出除法算式，理解被除数、除数、商。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】除法是乘法的逆运算，想乘法可以算除法。\n共学四步：\n①对话出题：12颗糖平均分3份，问"怎么写成除法算式？"\n②孩子应答："12÷3=4，12是被除数3是除数4是商"\n③答错引导：家长摆12颗糖分3份每份4颗，说"12除以3等于4"就是平均分\n④快速检测：15÷5=？、18÷3=？、20÷4=？',
        funElement: '笑话：除号说我是乘号转了45度！小游戏：乘除对对碰',
        gsapAnimations: [
          '[GSAP:rotateZ|乘号旋转变成除号|0.6s|页面加载|power2.inOut]',
          '[GSAP:scaleIn|除法算式弹出|0.4s|旋转完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|乘号变除号动画截图|400x300|cartoon|png|除法意义]',
          '[IMG:illustration|除法算式各部分名称|300x250|cartoon|png|除法术语]'
        ],
        content: [
          { type: 'text', content: '除法就是平均分的算式写法！12÷3=4，12是被除数，3是除数，4是商，读作12除以3等于4。', animationType: 'reveal' },
          { type: 'example', content: '12÷3=4：把12平均分成3份，每份是4。3×4=12，乘法和除法是逆运算！', label: '除法算式', animationType: 'bounce' },
          { type: 'formula', content: '除法各部分：被除数÷除数=商，乘法逆运算：除数×商=被除数！', label: '除法关系', animationType: 'typewriter' },
          { type: 'tip', content: '除号"÷"就像把东西分成上下两份，上面是被分的总数，下面是分成几份！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '乘号旋转45度变成除号的动画，除法算式弹出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '乘号变除号：12÷3=4',
              cpaConfig: {
                concrete: { emoji: '✖️', text: '3×4=12' },
                pictorial: { emoji: '🔄', text: '乘号旋转45度' },
                abstract: { emoji: '➗', text: '12÷3=4' }
              },
              ttsNarration: '乘号旋转45度变成除号！3乘4等于12，反过来12除以3等于4！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u5l2q1',
            type: 'choice',
            question: '15÷5=3中，被除数是几？',
            options: ['15', '5', '3', '0'],
            answer: '15',
            hint: '被除数是除号前面的数',
            explanation: '在15÷5=3中，15是被除数，5是除数，3是商。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l2q2',
            type: 'fill',
            question: '18÷6=___',
            answer: '3',
            hint: '想：6×？=18',
            explanation: '因为6×3=18，所以18÷6=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l2q3',
            type: 'flashcard',
            question: '快速计算：20÷4=？',
            answer: '5',
            hint: '想：4×5=20',
            explanation: '因为4×5=20，所以20÷4=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u5l2q4',
            type: 'choice',
            question: '24÷4=？用哪句口诀？',
            options: ["四六二十四","三八二十四","四四十六","不知道"],
            answer: '四六二十四',
            hint: '除法想乘法',
            explanation: '4×6=24所以24÷4=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l2q5',
            type: 'fill',
            question: '18÷2=___',
            answer: '9',
            hint: '18÷2=9。',
            explanation: '18÷2=9，二九十八。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l2q6',
            type: 'choice',
            question: '【期中真题】有32朵花每4朵扎一束可以扎几束？',
            options: ["6束","7束","8束","9束"],
            answer: '8束',
            hint: '32÷4=？',
            explanation: '32÷4=8束。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l2q7',
            type: 'choice',
            question: '把10个球平均分成2份每份___个',
            options: ["4个","5个","6个","10个"],
            answer: '5个',
            hint: '[除法初步]（数学-除法初步-第1课）10÷2=5',
            explanation: '10÷2=5个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u5l3',
        title: '用乘法口诀求商',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用乘法口诀求商',
        successCriteria: '①能看除数想口诀求商 ②能快速计算表内除法',
        iDo: '家长示范：24÷6=？想6的口诀，四六二十四，所以商是4。【CFU检查理解】家长问“你能用乘法口诀求商吗？”',
        weDo: '【引导式】亲子一起用乘法口诀快速求商，互相考。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用乘法口诀求商。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】想口诀求商最快：看除数想口诀，找到被除数对应的就是商。\n共学四步：\n①对话出题：问"24÷6怎么想口诀求商？"\n②孩子应答："想6的口诀，四六二十四，所以24÷6=4"\n③答错引导：家长引导孩子背6的口诀，找到几六二十四，那个几就是商\n④快速检测：18÷3=？、28÷7=？、36÷9=？、42÷6=？',
        funElement: '小游戏：口诀求商大闯关！歇后语：不管三七二十一——蛮干',
        gsapAnimations: [
          '[GSAP:scaleIn|口诀卡片翻转|0.5s|点击触发|back.out(1.7)]',
          '[GSAP:scaleIn|商的数字弹出|0.4s|口诀翻转完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|口诀求商对照图|400x300|cartoon|png|口诀求商]',
          '[IMG:illustration|乘除互逆关系图|300x250|cartoon|png|乘除关系]'
        ],
        content: [
          { type: 'text', content: '用乘法口诀求商最快！看除数想口诀，找到被除数对应的那个数就是商！', animationType: 'reveal' },
          { type: 'example', content: '24÷6=？想6的口诀：四六二十四，所以24÷6=4！', label: '想口诀', animationType: 'bounce' },
          { type: 'formula', content: '求商口诀：看除数想口诀，找到被除数，对应的另一个数就是商！', label: '求商口诀', animationType: 'typewriter' },
          { type: 'tip', content: '乘法和除法是一对好朋友！乘法口诀背熟了，除法自然就会了！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '口诀卡片翻转动画：四六二十四翻转后显示24÷6=4', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '用口诀求商',
              cardRevealConfig: {
                cards: [
                  { front: '24÷6', back: '四六二十四→4', ttsText: '24除以6等于4，四六二十四' },
                  { front: '36÷9', back: '四九三十六→4', ttsText: '36除以9等于4，四九三十六' },
                  { front: '42÷7', back: '六七四十二→6', ttsText: '42除以7等于6，六七四十二' },
                  { front: '56÷8', back: '七八五十六→7', ttsText: '56除以8等于7，七八五十六' }
                ]
              },
              ttsNarration: '用乘法口诀求商最快！点击翻转卡片看答案！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u5l3q1',
            type: 'choice',
            question: '36÷9=？',
            options: ['3', '4', '5', '6'],
            answer: '4',
            hint: '想9的口诀：几九三十六？',
            explanation: '四九三十六，所以36÷9=4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l3q2',
            type: 'fill',
            question: '42÷7=___',
            answer: '6',
            hint: '想7的口诀：几七四十二？',
            explanation: '六七四十二，所以42÷7=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l3q3',
            type: 'flashcard',
            question: '快速计算：56÷8=？',
            answer: '7',
            hint: '想8的口诀：几八五十六？',
            explanation: '七八五十六，所以56÷8=7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u5l3q4',
            type: 'choice',
            question: '下面哪个算式的商是6？',
            options: ["12÷2","24÷6","30÷6","36÷9"],
            answer: '12÷2',
            hint: '分别计算每个算式',
            explanation: '12÷2=6，24÷6=4，30÷6=5，36÷9=4。只有12÷2的商是6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l3q5',
            type: 'fill',
            question: '45÷9=___',
            answer: '5',
            hint: '45÷9=5。',
            explanation: '45÷9=5，五九四十五。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l3q6',
            type: 'choice',
            question: '同学们排队每行站6人站了3行还剩下4人一共有多少人？',
            options: ["14人","18人","22人","28人"],
            answer: '22人',
            hint: '6×3+4=？',
            explanation: '6×3=18，18+4=22人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u5l3q7',
            type: 'fill',
            question: '七八___',
            answer: '五十六',
            hint: '[乘法意义]（数学-乘法初步-第1课）七八五十六。',
            explanation: '七八五十六，7×8=56。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u5l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用除法和口诀求商完成测评',
          successCriteria: '①测评正确率达80%以上 ②能用口诀快速求商',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用除法和口诀求商完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测除法，重点查口诀求商是否熟练。\n共学四步：\n①对话出题：问"除法怎么算？用什么方法最快？"\n②孩子应答："想乘法口诀求商最快"\n③答错引导：错题让孩子说出想的是哪句口诀，再找商\n④快速检测：24÷6=？、35÷7=？、48÷8=？、27÷9=？',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"除法初步"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u5l4q1',
              type: 'choice',
              question: '12÷3=？用哪句口诀？',
              options: ["三四十二","三六十八","二六十二","不知道"],
              answer: '三四十二',
              hint: '除法想乘法',
              explanation: '3×4=12所以12÷3=4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u5l4q2',
            type: 'fill',
            question: '20÷4=___',
            answer: '5',
            hint: '四五二十',
            explanation: '4×5=20所以20÷4=5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u5l4q3',
              type: 'choice',
              question: '把18平均分成6份每份是多少？',
              options: ["2","3","4","6"],
              answer: '3',
              hint: '18÷6=？',
              explanation: '18÷6=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u5l4q4',
            type: 'fill',
            question: '24÷8=___',
            answer: '3',
            hint: '三八二十四',
            explanation: '24÷8=3。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u5l4q5',
              type: 'choice',
              question: '【期中真题】有30个苹果平均分给6个小朋友每人分几个？',
              options: ["4个","5个","6个","7个"],
              answer: '5个',
              hint: '30÷6=？',
              explanation: '30÷6=5个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u5l4q6',
              type: 'choice',
              question: '□÷5=7，□里应该填几？',
              options: ["12","25","35","2"],
              answer: '35',
              hint: '5×7=？',
              explanation: '5×7=35所以□=35。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u5l4q7',
            type: 'fill',
            question: '六七___',
            answer: '四十二',
            hint: '[乘法意义]（数学-乘法初步-第1课）6×7=？',
            explanation: '六七四十二。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u5l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能用除法解决生活问题',
          successCriteria: '①能从生活场景列除法算式 ②能正确用口诀求商',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能用除法解决生活问题吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】用除法解决平均分的生活问题。\n共学四步：\n①对话出题：20个苹果平均装4袋，问"每袋几个？怎么算？"\n②孩子应答："20÷4=5，四五二十，每袋5个"\n③答错引导：用实物分一分验证，再想口诀四五二十\n④快速检测：18人分3组每组几人、24颗糖分6份每份几、30÷5=？',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"除法初步"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u5l5q1',
              type: 'choice',
              question: '36里面有几个6？',
              options: ["5个","6个","7个","8个"],
              answer: '6个',
              hint: '36÷6=？',
              explanation: '36÷6=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u5l5q2',
            type: 'fill',
            question: '42÷7=___',
            answer: '6',
            hint: '六七四十二',
            explanation: '6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u5l5q3',
              type: 'choice',
              question: '把24个苹果平均分给4个小朋友每人分几个？',
              options: ["4个","5个","6个","8个"],
              answer: '6个',
              hint: '24÷4=？',
              explanation: '24÷4=6个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u5l5q4',
            type: 'fill',
            question: '56÷8=___',
            answer: '7',
            hint: '七八五十六',
            explanation: '7。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u5l5q5',
              type: 'choice',
              question: '【期中真题】有45朵花每9朵扎一束可以扎几束？',
              options: ["4束","5束","6束","9束"],
              answer: '5束',
              hint: '45÷9=？',
              explanation: '45÷9=5束。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u5l5q6',
              type: 'choice',
              question: '□÷6=8，□里应该填几？',
              options: ["14","42","48","56"],
              answer: '48',
              hint: '6×8=？',
              explanation: '6×8=48。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u5l5q7',
            type: 'fill',
            question: '七九___',
            answer: '六十三',
            hint: '[乘法意义]（数学-乘法初步-第1课）7×9=？',
            explanation: '七九六十三。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u6',
    title: '角的初步认识',
    subtitle: '认识角，学会分辨角的类型',
    order: 6,
    lessons: [
      {
        id: 'm2u6l1',
        title: '认识角',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能认识角，知道角有一个顶点和两条边',
        successCriteria: '①能指出角的顶点和两条边 ②能在实物上找到角',
        iDo: '家长用三角板指出角，讲解角有一个顶点和两条边。【CFU检查理解】家长问“你能认识角，知道角有一个顶点和两条边吗？”',
        weDo: '【引导式】亲子一起在教室里找角，指出每个角的顶点和边。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立识别图形中的角，标出顶点和边。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】角有一个顶点和两条边，边是射线可以无限延伸。\n共学四步：\n①对话出题：拿三角板指着角问"角有几部分？分别叫什么？"\n②孩子应答："角有一个顶点和两条边"\n③答错引导：家长在纸上画一个角，标出顶点和两条边，让孩子在家找角（书桌角、门角）\n④快速检测：指出三角板上的顶点和边、找家里的角、画一个角',
        funElement: '笑话：角说我有个尖尖的头！小游戏：找角大搜索',
        gsapAnimations: [
          '[GSAP:drawSVG|角的边从顶点画出|0.6s|页面加载|power2.out]',
          '[GSAP:scaleIn|顶点圆点弹出|0.4s|画边完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|角的顶点和边标注图|400x300|cartoon|png|认识角]',
          '[IMG:illustration|生活中的角示例|300x250|cartoon|png|找角]'
        ],
        content: [
          { type: 'text', content: '角有一个尖尖的顶点和两条直直的边！从顶点出发画两条线，就组成了一个角。', animationType: 'reveal' },
          { type: 'example', content: '三角板上有3个角，每个角都有1个顶点和2条边。找一找教室里的角！', label: '找一找', animationType: 'bounce' },
          { type: 'formula', content: '角的组成：1个顶点+2条边=1个角，三角形有3个角，长方形有4个角！', label: '角的特征', animationType: 'typewriter' },
          { type: 'formula', content: '角儿歌：尖尖顶点在中间，两条直边往外延，边长边短不要管，张开大小定角宽！', label: '角儿歌', animationType: 'typewriter' },
          { type: 'example', content: '趣味歇后语：三角板——面面俱到（每个面都有角）\n圆规画圆——没角找角（圆没有角）\n钝角和锐角——大小分明', label: '趣味角歇后语', animationType: 'bounce' },
          { type: 'tip', content: '角的大小和边的长短没关系，和边张开的大小有关系！张得越大角越大！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '角的边从顶点画出的动画，顶点圆点弹出标注', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '认识角',
              shapeDrawConfig: { shape: '角', labels: ['边', '顶点', '边'] },
              ttsNarration: '角有一个顶点和两条边！从顶点出发画两条线，就组成了一个角！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u6l1q1',
            type: 'choice',
            question: '角由什么组成？',
            options: ['两条线段', '一个顶点和两条边', '三个点', '一条线'],
            answer: '一个顶点和两条边',
            hint: '角最关键的部分是什么？',
            explanation: '角由一个顶点和从顶点出发的两条边组成。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l1q2',
            type: 'fill',
            question: '三角形有___个角',
            answer: '3',
            hint: '三角形的"三"就是角的个数',
            explanation: '三角形有3个角，3条边，3个顶点。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l1q3',
            type: 'flashcard',
            question: '长方形有几个角？快速说出来！',
            answer: '4',
            hint: '数一数尖尖的地方',
            explanation: '长方形有4个角，每个角都是直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u6l1q4',
            type: 'choice',
            question: '下面哪个角是直角？',
            options: ["比直角小的角","比直角大的角","方方正正的角","尖尖的角"],
            answer: '方方正正的角',
            hint: '直角像方方正正的角',
            explanation: '直角是方方正正的角，像课本的角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l1q5',
            type: 'fill',
            question: '三角板上的角中最大的角是___角',
            answer: '直',
            hint: '三角板上有一个直角。',
            explanation: '三角板上最大的角是直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l1q6',
            type: 'choice',
            question: '一张正方形的纸沿对角线剪开得到两个三角形每个三角形中有几个直角？',
            options: ["0个","1个","2个","3个"],
            answer: '1个',
            hint: '正方形4个直角对角线分开后',
            explanation: '每个三角形保留1个直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l1q7',
            type: 'fill',
            question: '正方形有___个直角',
            answer: '4',
            hint: '[基本图形]（数学-认识图形-第1课）4个角都是直角。',
            explanation: '正方形有4个直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u6l2',
        title: '直角锐角钝角',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能区分直角、锐角和钝角',
        successCriteria: '①能用三角板比出直角 ②能判断锐角钝角',
        iDo: '家长用三角板的直角比对不同角，讲解直角、锐角、钝角。【CFU检查理解】家长问“你能区分直角、锐角和钝角吗？”',
        weDo: '【引导式】亲子一起用三角板判断角的类型，分类摆放。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立判断角是直角、锐角还是钝角。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】用三角板的直角去比，比直角小是锐角，比直角大是钝角。\n共学四步：\n①对话出题：画一个角问"这是直角、锐角还是钝角？怎么判断？"\n②孩子应答："用三角板直角去比，比直角小是锐角，比直角大是钝角"\n③答错引导：家长拿三角板示范比对，直角顶点对角顶点、直角边对角边，看另一边\n④快速检测：判断书桌角是什么角、判断锐角、判断钝角',
        funElement: '笑话：锐角说我最尖，钝角说我最宽！小游戏：角的大小比一比',
        gsapAnimations: [
          '[GSAP:rotateZ|角的边张开动画|0.6s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|角类型标签弹出|0.4s|比对完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|直角锐角钝角对比图|400x300|cartoon|png|角分类]',
          '[IMG:illustration|三角板比对示意|300x250|cartoon|png|比对方法]'
        ],
        content: [
          { type: 'text', content: '角有三种：直角正好90度，锐角比直角小（更尖），钝角比直角大（更宽）！', animationType: 'reveal' },
          { type: 'example', content: '用三角板的直角去比：和直角一样大→直角；比直角小→锐角；比直角大→钝角', label: '比一比', animationType: 'bounce' },
          { type: 'formula', content: '角分类口诀：直角90度方方正正，锐角比直角小更尖，钝角比直角大更宽！', label: '分类口诀', animationType: 'typewriter' },
          { type: 'tip', content: '用三角板的直角去比最准确！角的顶点对齐，一条边对齐，看另一条边！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '角的边张开动画：从锐角到直角到钝角，三角板比对显示类型', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '直角、锐角、钝角',
              sceneBuildConfig: {
                elements: [
                  { emoji: '📐', text: '锐角', animation: 'scaleIn', ttsText: '锐角，比直角小，更尖' },
                  { emoji: '📏', text: '直角', animation: 'scaleIn', ttsText: '直角，正好90度' },
                  { emoji: '📐', text: '钝角', animation: 'scaleIn', ttsText: '钝角，比直角大，更宽' }
                ]
              },
              ttsNarration: '锐角比直角小更尖，直角正好90度，钝角比直角大更宽！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u6l2q1',
            type: 'choice',
            question: '比直角小的角叫什么？',
            options: ['直角', '锐角', '钝角', '平角'],
            answer: '锐角',
            hint: '比直角"小"就是"锐"',
            explanation: '比直角小的角叫锐角，锐就是尖锐的意思。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l2q2',
            type: 'fill',
            question: '长方形的4个角都是___角',
            answer: '直',
            hint: '用三角板比一比',
            explanation: '长方形的4个角都是直角，每个角都是90度。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l2q3',
            type: 'flashcard',
            question: '看角快速判断类型！',
            answer: '钝角',
            hint: '比直角大还是小？',
            explanation: '这个角比直角大，所以是钝角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u6l2q4',
            type: 'choice',
            question: '比直角小的角叫什么角？',
            options: ["钝角","锐角","平角","周角"],
            answer: '锐角',
            hint: '角的分类',
            explanation: '比直角小的是锐角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l2q5',
            type: 'fill',
            question: '钟表上3时整时针和分针形成___角',
            answer: '直',
            hint: '3时整时针分针成直角。',
            explanation: '3时整时针和分针成90度，是直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l2q6',
            type: 'choice',
            question: '一个直角和一个锐角拼在一起形成的角是什么角？',
            options: ["一定是钝角","可能是钝角也可能是直角","一定是锐角","无法判断"],
            answer: '一定是钝角',
            hint: '直角+锐角>90度',
            explanation: '一定大于90度是钝角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l2q7',
            type: 'choice',
            question: '数学书的封面有___个直角',
            options: ["2个","3个","4个","0个"],
            answer: '4个',
            hint: '[角的初步认识]（数学-角的初步认识-第1课）长方形特征',
            explanation: '数学书封面是长方形4个直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u6l3',
        title: '画角',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能用尺子和三角板画直角、锐角和钝角',
        successCriteria: '①能画出一个直角 ②能画出锐角和钝角',
        iDo: '家长示范画角的步骤：先画顶点，再从顶点画两条边。【CFU检查理解】家长问“你能用尺子和三角板画直角、锐角和钝角吗？”',
        weDo: '【引导式】亲子一起画不同类型的角，互相检查。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立画直角、锐角和钝角。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】画角先确定顶点，再用尺子从顶点画两条边。\n共学四步：\n①对话出题：问"怎么画一个直角？"\n②孩子应答："用三角板的直角，先画顶点，沿两条直角边画线"\n③答错引导：家长示范用三角板画直角，让孩子照着画，锐角钝角只要张开角度不同\n④快速检测：画一个直角、画一个锐角、画一个钝角',
        funElement: '小游戏：画角小画家！歇后语：拐弯抹角——不直说',
        gsapAnimations: [
          '[GSAP:drawSVG|画角过程动画|0.8s|点击触发|power2.out]',
          '[GSAP:scaleIn|角类型标注弹出|0.4s|画角完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|画角步骤示意图|400x300|cartoon|png|画角步骤]',
          '[IMG:illustration|三种角的手绘图|300x250|cartoon|png|角的作品]'
        ],
        content: [
          { type: 'text', content: '画角三步走：第一步画顶点，第二步从顶点画一条边，第三步从顶点画另一条边！', animationType: 'reveal' },
          { type: 'example', content: '画直角：先画顶点，再画一条横边，用三角板比着画一条竖边，直角就画好了！', label: '画一画', animationType: 'bounce' },
          { type: 'formula', content: '画角步骤：1.画顶点 2.画第一条边 3.画第二条边，注意张口大小决定角的大小！', label: '画角步骤', animationType: 'typewriter' },
          { type: 'tip', content: '画直角要用三角板帮忙比对，画锐角边张小一点，画钝角边张大一点！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '画角过程动画：先画顶点，再画两条边，角类型标注弹出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'shapeDraw',
              title: '画角三步走',
              shapeDrawConfig: { shape: '角', labels: ['1.画顶点', '2.画边', '3.画边'] },
              ttsNarration: '画角三步走：先画顶点，再从顶点画第一条边，最后画第二条边！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u6l3q1',
            type: 'choice',
            question: '画角的第一步是什么？',
            options: ['画边', '画顶点', '量角度', '涂颜色'],
            answer: '画顶点',
            hint: '角从哪里开始？',
            explanation: '画角的第一步是确定顶点，然后从顶点画两条边。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l3q2',
            type: 'fill',
            question: '画直角需要用___板帮忙',
            answer: '三角',
            hint: '什么工具上有直角？',
            explanation: '画直角可以用三角板上的直角来比对画。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l3q3',
            type: 'flashcard',
            question: '画一个锐角，它的边张得比直角大还是小？',
            answer: '小',
            hint: '锐角比直角怎样？',
            explanation: '锐角比直角小，所以边张得比直角小。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u6l3q4',
            type: 'choice',
            question: '用一副三角板可以画出几种不同度数的角？',
            options: ["只能画直角","可以画直角和锐角","可以画直角锐角和钝角","只能画锐角"],
            answer: '可以画直角锐角和钝角',
            hint: '三角板组合使用',
            explanation: '两个三角板可以拼出多种角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l3q5',
            type: 'fill',
            question: '一个直角比一个锐角___（填"大"或"小"）',
            answer: '大',
            hint: '直角90度大于锐角。',
            explanation: '直角90度大于锐角，所以直角比锐角大。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l3q6',
            type: 'choice',
            question: '【期末真题】一个长方形被分成4个小长方形，一共有几个直角？',
            options: ["4个","8个","12个","16个"],
            answer: '16个',
            hint: '每个小长方形4个直角4×4=16',
            explanation: '4个小长方形每个4个直角共16个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u6l3q7',
            type: 'fill',
            question: '三角形有___条边',
            answer: '3',
            hint: '[基本图形]（数学-认识图形-第1课）3条边。',
            explanation: '三角形有3条边。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u6l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用角的知识完成测评',
          successCriteria: '①测评正确率达80%以上 ②能区分三种角',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用角的知识完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测角的知识，重点看角的判断和画法。\n共学四步：\n①对话出题：问"角有哪三种？怎么区分？"\n②孩子应答："直角、锐角、钝角，用三角板直角去比"\n③答错引导：拿三角板让孩子重新比对错题中的角\n④快速检测：判断直角、画锐角、指出角的顶点和边',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"角的初步认识"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u6l4q1',
              type: 'choice',
              question: '下面哪个是直角？',
              options: ["钟表上1时整的角","钟表上3时整的角","钟表上5时整的角","钟表上11时整的角"],
              answer: '钟表上3时整的角',
              hint: '3时整时针分针成90度',
              explanation: '3时整时针分针成直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u6l4q2',
            type: 'fill',
            question: '比直角大的角叫___角',
            answer: '钝',
            hint: '角的分类',
            explanation: '比直角大的是钝角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u6l4q3',
              type: 'choice',
              question: '一个三角板上有几个锐角？',
              options: ["0个","1个","2个","3个"],
              answer: '2个',
              hint: '三角板有一个直角两个锐角',
              explanation: '三角板有1直角2锐角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u6l4q4',
            type: 'fill',
            question: '正方形有___个直角',
            answer: '4',
            hint: '正方形特征',
            explanation: '4个直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u6l4q5',
              type: 'choice',
              question: '【期末真题】下面哪个角最大？',
              options: ["锐角","直角","钝角","无法确定"],
              answer: '钝角',
              hint: '钝角比直角大，锐角比直角小',
              explanation: '钝角>直角>锐角，所以钝角最大。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u6l4q6',
              type: 'choice',
              question: '把一个直角平均分成2个角每个角是？',
              options: ["30度","45度","60度","90度"],
              answer: '45度',
              hint: '90÷2=？',
              explanation: '90÷2=45度。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u6l4q7',
            type: 'fill',
            question: '三角形有___个角',
            answer: '3',
            hint: '[基本图形]（数学-认识图形-第1课）三角形特征',
            explanation: '3个角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u6l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能从生活中找出各种角',
          successCriteria: '①能找出生活中的直角 ②能找出锐角和钝角',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能从生活中找出各种角吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】在生活中找角，如书桌角、钟表指针的角。\n共学四步：\n①对话出题：指着钟表问"现在时针和分针成什么角？"\n②孩子应答：用三角板比一比判断直角锐角钝角\n③答错引导：家长拿三角板让孩子比对钟表指针的角度\n④快速检测：找家里的直角、找锐角、找钝角',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"角的初步认识"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u6l5q1',
              type: 'choice',
              question: '钟表上9时整时针和分针形成什么角？',
              options: ["锐角","直角","钝角","平角"],
              answer: '直角',
              hint: '9时整是90度',
              explanation: '9时整成直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u6l5q2',
            type: 'fill',
            question: '一个直角+一个锐角一定是___角',
            answer: '钝',
            hint: '直角+锐角>90度',
            explanation: '一定是钝角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u6l5q3',
              type: 'choice',
              question: '下面哪个角最小？',
              options: ["90度","60度","120度","45度"],
              answer: '45度',
              hint: '度数越小角越小',
              explanation: '45度最小。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u6l5q4',
            type: 'fill',
            question: '长方形有___个直角',
            answer: '4',
            hint: '长方形特征',
            explanation: '4个直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u6l5q5',
              type: 'choice',
              question: '【期末真题】用三角板可以辨认下面哪种角？',
              options: ["直角","圆角","平角","周角"],
              answer: '直角',
              hint: '三角板上有一个方方正正的角',
              explanation: '三角板上最大的角是直角，可以用来辨认直角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u6l5q6',
              type: 'choice',
              question: '一个钝角减去一个直角剩下的角是什么角？',
              options: ["锐角","直角","钝角","不确定"],
              answer: '锐角',
              hint: '钝角>90°减去90°<90°',
              explanation: '钝角-直角=锐角。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u6l5q7',
            type: 'fill',
            question: '正方形有___条边',
            answer: '4',
            hint: '[基本图形]（数学-认识图形-第1课）正方形特征',
            explanation: '4条边。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u7',
    title: '数据收集整理',
    subtitle: '学会收集数据，制作简单统计图表',
    order: 7,
    lessons: [
      {
        id: 'm2u7l1',
        title: '分类整理',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能按一定标准对物品进行分类整理',
        successCriteria: '①能确定分类标准 ②能正确分类并数出每类数量',
        iDo: '家长把一堆混合的积木按颜色分类，示范分类方法。【CFU检查理解】家长问“你能按一定标准对物品进行分类整理吗？”',
        weDo: '【引导式】亲子一起把家里的物品按不同标准分类，记录每类的数量。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立对物品进行分类并记录结果。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】分类先确定标准，如按颜色、形状、大小。\n共学四步：\n①对话出题：拿一堆积木问"可以怎么分类？按什么分？"\n②孩子应答："可以按颜色分，红色几个、蓝色几个"\n③答错引导：家长先示范按颜色分一堆，让孩子数每类几个，再换按形状分\n④快速检测：按颜色分一堆扣子、按形状分一堆卡片、数每类几个',
        funElement: '笑话：分类说我让乱糟糟变整齐！小游戏：玩具分类大作战',
        gsapAnimations: [
          '[GSAP:translateX|物品滑入对应类别|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|类别标签弹出|0.4s|分类完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|积木按颜色分类图|400x300|cartoon|png|分类整理]',
          '[IMG:illustration|分类记录表格|300x250|cartoon|png|分类记录]'
        ],
        content: [
          { type: 'text', content: '分类整理就是把东西按某个标准分到不同的组里！按颜色分、按形状分、按大小分都可以！', animationType: 'reveal' },
          { type: 'example', content: '积木按颜色分：红色3块、蓝色5块、黄色2块，分完数一数每类有几块！', label: '分一分', animationType: 'bounce' },
          { type: 'formula', content: '分类步骤：1.确定分类标准 2.按标准分组 3.数出每类数量 4.记录结果！', label: '分类步骤', animationType: 'typewriter' },
          { type: 'tip', content: '分类标准只能选一个！按颜色分就不管形状，按形状分就不管颜色！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '积木按颜色滑入对应类别的动画，类别标签弹出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '按颜色分类',
              sceneBuildConfig: {
                elements: [
                  { emoji: '🔴', text: '红色3块', animation: 'slideIn', ttsText: '红色3块' },
                  { emoji: '🔵', text: '蓝色5块', animation: 'slideIn', ttsText: '蓝色5块' },
                  { emoji: '🟡', text: '黄色2块', animation: 'slideIn', ttsText: '黄色2块' }
                ]
              },
              ttsNarration: '积木按颜色分：红色3块，蓝色5块，黄色2块！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u7l1q1',
            type: 'choice',
            question: '把水果按颜色分类，红苹果和红草莓应该分到哪一类？',
            options: ['红色类', '苹果类', '草莓类', '水果类'],
            answer: '红色类',
            hint: '分类标准是颜色',
            explanation: '按颜色分类时，红苹果和红草莓都是红色，分到红色类。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l1q2',
            type: 'fill',
            question: '8个球中红色3个、蓝色5个，按颜色分成___类',
            answer: '2',
            hint: '有几种颜色？',
            explanation: '红色和蓝色2种颜色，所以分成2类。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l1q3',
            type: 'flashcard',
            question: '看一组物品，快速说出按形状可以分几类！',
            answer: '3',
            hint: '数一数有几种形状',
            explanation: '有圆形、三角形、正方形3种形状，分3类。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u7l1q4',
            type: 'choice',
            question: '调查全班同学的生日月份用什么方法最好？',
            options: ["猜一猜","逐个问","举手统计","看星座"],
            answer: '举手统计',
            hint: '数据收集方法',
            explanation: '举手统计最有效率。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l1q5',
            type: 'fill',
            question: '用"正"字记录数据每个"正"字代表___',
            answer: '5',
            hint: '一个正字5笔代表5。',
            explanation: '一个"正"字有5笔，每笔代表1个，所以每个"正"字代表5。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l1q6',
            type: 'choice',
            question: '统计结果：喜欢苹果8人梨子6人香蕉5人橙子4人最喜欢的水果比最少的多几人？',
            options: ["2人","3人","4人","12人"],
            answer: '4人',
            hint: '8-4=？',
            explanation: '最多8人最少4人差4人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l1q7',
            type: 'fill',
            question: '一一对应比较时没有剩余说明___',
            answer: '一样多',
            acceptableAnswers: ['相等', '同样多', '相同', '一样'],
            hint: '[比多少]（数学-数一数-第2课）无剩余则数量相等。',
            explanation: '一一对应比较时没有剩余，说明两种物品数量一样多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u7l2',
        title: '简单统计表',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能制作简单的统计表',
        successCriteria: '①能把分类结果填入统计表 ②能保证数据准确',
        iDo: '家长示范把分类结果填入统计表，讲解表格的行和列。【CFU检查理解】家长问“你能制作简单的统计表吗？”',
        weDo: '【引导式】亲子一起调查班级同学喜欢的颜色，制作统计表。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立收集数据并制作简单统计表。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】统计表要写清类别和数量，数据要准确。\n共学四步：\n①对话出题：分好类的积木问"怎么把结果记在统计表里？"\n②孩子应答："列出类别，写上每类数量"\n③答错引导：家长画一个简单表格，写上类别名，让孩子数后填数字\n④快速检测：统计家里水果种类和数量、统计文具种类、填统计表',
        funElement: '小游戏：小小调查员！歇后语：心中有数——清楚明白',
        gsapAnimations: [
          '[GSAP:staggerFrom|表格行依次出现|0.4s|页面加载|power2.out]',
          '[GSAP:scaleIn|数据填入动画|0.3s|填入触发|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|简单统计表示例|400x300|cartoon|png|统计表]',
          '[IMG:illustration|数据收集场景|300x250|cartoon|png|数据收集]'
        ],
        content: [
          { type: 'text', content: '统计表把分类的结果整整齐齐地记录下来！一行写类别，一行写数量，一目了然！', animationType: 'reveal' },
          { type: 'example', content: '喜欢的颜色统计：红色8人，蓝色5人，绿色3人，一共16人！', label: '做一做', animationType: 'bounce' },
          { type: 'formula', content: '统计表制作：1.写标题 2.列类别 3.填数量 4.算总计！', label: '制作步骤', animationType: 'typewriter' },
          { type: 'tip', content: '统计表里的数据要准确，数错一个结果就全错了！数两遍最保险！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '统计表行依次出现的动画，数据填入动画', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'timeline',
              title: '制作统计表',
              timelineConfig: {
                steps: [
                  { emoji: '📝', description: '写标题', ttsNarration: '第一步，写标题' },
                  { emoji: '📋', description: '列类别', ttsNarration: '第二步，列出类别' },
                  { emoji: '🔢', description: '填数量', ttsNarration: '第三步，填入数量' },
                  { emoji: '✅', description: '算总计', ttsNarration: '第四步，算出总计！' }
                ]
              },
              ttsNarration: '制作统计表四步走：写标题、列类别、填数量、算总计！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u7l2q1',
            type: 'choice',
            question: '统计表中，喜欢红色的8人，喜欢蓝色的5人，一共调查了几人？',
            options: ['8人', '5人', '13人', '3人'],
            answer: '13人',
            hint: '把所有人数加起来',
            explanation: '8+5=13，一共调查了13人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l2q2',
            type: 'fill',
            question: '喜欢苹果6人，喜欢香蕉9人，喜欢香蕉比苹果多___人',
            answer: '3',
            hint: '9-6=？',
            explanation: '9-6=3，喜欢香蕉比苹果多3人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l2q3',
            type: 'choice',
            question: '看统计表快速回答：红色8人蓝色5人黄色6人绿色3人，最受欢迎的是哪种？',
            options: ['红色', '蓝色', '黄色', '绿色'],
            answer: '红色',
            hint: '看哪个数字最大',
            explanation: '统计表中数量最多的就是最受欢迎的，红色8人最多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u7l2q4',
            type: 'choice',
            question: '下面适合用条形统计图表示的是？',
            options: ["气温变化","班级人数分布","汽车速度","以上都可以"],
            answer: '班级人数分布',
            hint: '条形图用途',
            explanation: '条形图适合比较数量多少。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l2q5',
            type: 'fill',
            question: '在条形统计图中最高的条形表示数量最___（填"多"或"少"）',
            answer: '多',
            hint: '越高越多。',
            explanation: '条形统计图中柱子越高表示数量越多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l2q6',
            type: 'choice',
            question: '二(1)班喜欢足球的有12人喜欢篮球的比足球少3人喜欢跳绳的是篮球的2倍喜欢跳绳的有几人？',
            options: ["9人","15人","18人","24人"],
            answer: '18人',
            hint: '先算篮球再算跳绳',
            explanation: '篮球12-3=9人，跳绳9×2=18人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l2q7',
            type: 'fill',
            question: '用"正"字数到第7笔应该写在第___个"正"字的第___笔（填第一个数字）',
            answer: '2',
            hint: '[数据收集整理]（数学-数据收集整理-第2课）第一个"正"5笔第7笔在第2个"正"的第2笔',
            explanation: '第2个"正"字。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u7l3',
        title: '条形统计图',
        order: 3,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能看懂并制作简单的条形统计图',
        successCriteria: '①能看懂条形统计图每格代表几 ②能画出条形统计图',
        iDo: '家长示范用方块摆出条形统计图，讲解横轴和纵轴。【CFU检查理解】家长问“你能看懂并制作简单的条形统计图吗？”',
        weDo: '【引导式】亲子一起把统计表的数据画成条形统计图。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立根据数据绘制简单条形统计图。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】条形统计图能直观看出谁多谁少，每格代表几个要标清。\n共学四步：\n①对话出题：看一张条形统计图问"每格代表几？哪种最多？"\n②孩子应答："每格代表1，苹果最多有6格"\n③答错引导：家长带孩子数格子，一格代表一个，涂几格就是几个\n④快速检测：看图说哪种最少、画一个简单条形图、数某类有几格',
        funElement: '笑话：条形图说我站得高说明我多！小游戏：画条形图大比拼',
        gsapAnimations: [
          '[GSAP:scaleY|条形柱从底部长高|0.6s|页面加载|power2.out]',
          '[GSAP:staggerFrom|每根柱子依次长高|0.4s|上一根完成|power2.out]'
        ],
        images: [
          '[IMG:illustration|条形统计图示例|400x300|cartoon|png|条形统计图]',
          '[IMG:illustration|方块摆成条形图|300x250|cartoon|png|统计图操作]'
        ],
        content: [
          { type: 'text', content: '条形统计图用柱子的高低来表示数量的多少！柱子越高数量越多，一看就知道谁多谁少！', animationType: 'reveal' },
          { type: 'example', content: '红色8人柱子最高，蓝色5人次之，绿色3人最矮，红色最受欢迎！', label: '看一看', animationType: 'bounce' },
          { type: 'formula', content: '条形统计图：横轴写类别，纵轴写数量，每格代表几个要标清，柱子高低看多少！', label: '制图口诀', animationType: 'typewriter' },
          { type: 'tip', content: '画条形图时每格代表几个要一致！如果每格代表2人，3格就是6人！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '条形柱从底部长高的动画，每根柱子依次长高', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'compare',
              title: '条形统计图',
              compareConfig: {
                leftItems: ['🔴', '🔴', '🔴', '🔴', '🔴', '🔴', '🔴', '🔴'],
                rightItems: ['🔵', '🔵', '🔵', '🔵', '🔵'],
                result: 'more',
                resultText: '红色8人最多，蓝色5人次之'
              },
              ttsNarration: '条形统计图用柱子高低表示数量！红色8人柱子最高，蓝色5人次之！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u7l3q1',
            type: 'choice',
            question: '条形统计图中，最高的柱子代表什么？',
            options: ['最少的', '最多的', '平均的', '随便的'],
            answer: '最多的',
            hint: '柱子越高数量怎样？',
            explanation: '条形统计图中，柱子越高代表数量越多。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l3q2',
            type: 'fill',
            question: '条形图中每格代表2人，3格代表___人',
            answer: '6',
            hint: '2×3=？',
            explanation: '每格2人，3格就是2×3=6人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l3q3',
            type: 'choice',
            question: '🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 蓝色8人 🟡🟡🟡🟡🟡🟡 绿色4人，哪种颜色最少？',
            options: ['红色', '蓝色', '黄色', '绿色'],
            answer: '绿色',
            hint: '看哪根柱子最矮',
            explanation: '条形统计图中，柱子最矮的代表数量最少，绿色4人最少。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u7l3q4',
            type: 'choice',
            question: '数据整理的第一步是？',
            options: ["画统计图","分析数据","收集数据","得出结论"],
            answer: '收集数据',
            hint: '整理步骤',
            explanation: '先收集才能整理分析。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l3q5',
            type: 'fill',
            question: '统计班里同学最喜欢的颜色红色12人蓝色8人黄色6人绿色4人一共调查了___人',
            answer: '30',
            hint: '12+8+6+4=30。',
            explanation: '12+8+6+4=30人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l3q6',
            type: 'choice',
            question: '【期中真题】学校图书馆周一借出25本周二借出30本周三借出20本三天一共借出多少本？前三天的平均每天借出多少本？',
            options: ["75本；25本","75本；30本","75本；20本","无法计算"],
            answer: '75本；25本',
            hint: '先求总和再平均',
            explanation: '25+30+20=75，75÷3=25本/天。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u7l3q7',
            type: 'fill',
            question: '用正字记录数据"正 正 一"共___人',
            answer: '11',
            hint: '[数据收集整理]（数学-统计-第7单元）5+5+1=11人。',
            explanation: '每个"正"字5笔，两个"正"字10笔，加"一"1笔，共11人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u7l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用统计知识完成测评',
          successCriteria: '①测评正确率达80%以上 ②能正确分类和制表',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用统计知识完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测数据收集整理，重点看分类和统计。\n共学四步：\n①对话出题：问"统计的第一步是什么？"\n②孩子应答："先确定分类标准再分类数数"\n③答错引导：拿实物让孩子重新分类统计，强调先定标准\n④快速检测：分类一堆物品、填统计表、看条形图回答问题',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"数据收集整理"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u7l4q1',
              type: 'choice',
              question: '统计全班同学最喜欢的运动用什么方法收集数据最好？',
              options: ["猜一猜","逐个询问并记录","看谁跑得快","随便写"],
              answer: '逐个询问并记录',
              hint: '数据收集方法',
              explanation: '逐个询问最准确。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u7l4q2',
            type: 'fill',
            question: '用"正"字记录数据"正 正 正 一"表示数量___',
            answer: '16',
            hint: '3个正=15加1笔=16',
            explanation: '16。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u7l4q3',
              type: 'choice',
              question: '条形统计图中每格代表2人5格代表几人？',
              options: ["5人","7人","10人","25人"],
              answer: '10人',
              hint: '5×2=？',
              explanation: '5×2=10人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u7l4q4',
            type: 'fill',
            question: '调查结果：喜欢红色8人蓝色12人喜欢蓝色的比红色多___人',
            answer: '4',
            hint: '12-8=？',
            explanation: '12-8=4人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u7l4q5',
              type: 'choice',
              question: '【期中真题】二(1)班投票选班长小明15票小红12票小华8票一共有多少人投票？',
              options: ["27人","30人","35人","40人"],
              answer: '35人',
              hint: '15+12+8=？',
              explanation: '15+12+8=35人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u7l4q6',
              type: 'choice',
              question: '下面哪种统计图最适合表示各班人数的多少？',
              options: ["折线图","条形图","扇形图","都可以"],
              answer: '条形图',
              hint: '比较数量多少',
              explanation: '条形图最适合比较数量。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u7l4q7',
            type: 'fill',
            question: '15比9多___',
            answer: '6',
            hint: '[100以内减法]（数学-100以内减法-第1课）15-9=？',
            explanation: '15-9=6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u7l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能用统计方法解决生活问题',
          successCriteria: '①能对生活数据进行分类统计 ②能制作图表展示结果',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能用统计方法解决生活问题吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】用统计方法整理生活中的数据，如统计天气、水果。\n共学四步：\n①对话出题：问"怎么统计这周晴天阴天各几天？"\n②孩子应答："先分类记录，再数每种天气几天，填统计表"\n③答错引导：家长带孩子记录一周天气，分类数数填表\n④快速检测：统计家里文具种类、统计喜欢的水果、做简单统计表',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"数据收集整理"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u7l5q1',
              type: 'choice',
              question: '二(1)班投票选班花：玫瑰12票百合8票向日葵6票康乃馨4票最多和最少相差几票？',
              options: ["4票","6票","8票","10票"],
              answer: '8票',
              hint: '12-4=？',
              explanation: '12-4=8票。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u7l5q2',
            type: 'fill',
            question: '统计全班喜欢的水果：苹果15人香蕉10人橘子8人梨7人一共有___人参加调查',
            answer: '40',
            hint: '15+10+8+7=？',
            explanation: '40人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u7l5q3',
              type: 'choice',
              question: '条形统计图中每格代表5人4格代表几人？',
              options: ["9人","15人","20人","25人"],
              answer: '20人',
              hint: '4×5=？',
              explanation: '4×5=20人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u7l5q4',
            type: 'fill',
            question: '喜欢足球的有18人喜欢篮球的有12人喜欢足球的比篮球多___人',
            answer: '6',
            hint: '18-12=？',
            explanation: '6人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u7l5q5',
              type: 'choice',
              question: '【期中真题】三(1)班同学最喜欢的运动统计：跑步8人跳绳12人游泳6人踢球14人喜欢踢球的比游泳的多几人？',
              options: ["2人","6人","8人","20人"],
              answer: '8人',
              hint: '14-6=？',
              explanation: '14-6=8人。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u7l5q6',
              type: 'choice',
              question: '下面哪种情况适合用表格记录数据？',
              options: ["记录每天的天气","记录考试成绩","记录购物清单","以上都可以"],
              answer: '以上都可以',
              hint: '表格用途广泛',
              explanation: '表格适合各种数据记录。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u7l5q7',
            type: 'fill',
            question: '12比8多___',
            answer: '4',
            hint: '[位置]（数学-位置-第1课）12-8=？',
            explanation: '4。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u8',
    title: '数学广角-搭配',
    subtitle: '探索排列组合的奥秘',
    order: 8,
    lessons: [
      {
        id: 'm2u8l1',
        title: '简单排列',
        order: 1,
        teachingMethod: 'CPA教学法',
        learningObjective: '我能按顺序列举简单的排列',
        successCriteria: '①能有顺序地排列不遗漏 ②能列出所有排列方案',
        iDo: '家长用3张数字卡片1、2、3，示范摆出所有两位数：12、13、21、23、31、32。【CFU检查理解】家长问“你能按顺序列举简单的排列吗？”',
        weDo: '【引导式】亲子一起用数字卡片摆不同的数，做到不重复不遗漏。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用给定数字摆出所有可能的排列。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】排列按顺序来，先固定一个再换其他，避免遗漏。\n共学四步：\n①对话出题：用1、2、3摆两位数，问"能摆几个？怎么摆不漏？"\n②孩子应答："12、13、21、23、31、32，共6个，先固定十位再换个位"\n③答错引导：家长用卡片摆，先固定十位1换个位2、3，再固定十位2、3，有序列举\n④快速检测：用1、2摆两位数、用2、3、4摆两位数、用1、0摆两位数',
        funElement: '笑话：1说我和2搭配是12，和3搭配是13，我太忙了！小游戏：数字搭配师',
        gsapAnimations: [
          '[GSAP:translateX|数字卡片交换位置|0.5s|点击触发|power2.inOut]',
          '[GSAP:scaleIn|排列结果依次弹出|0.4s|排列完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|3张卡片排列组合图|400x300|cartoon|png|排列组合]',
          '[IMG:illustration|有序排列列举图|300x250|cartoon|png|有序列举]'
        ],
        content: [
          { type: 'text', content: '排列就是按顺序摆出所有可能！用数字卡片摆两位数，先固定十位再换个位，不重复不遗漏！', animationType: 'reveal' },
          { type: 'example', content: '用1、2、3摆两位数：十位1→12、13；十位2→21、23；十位3→31、32，共6个！', label: '摆一摆', animationType: 'bounce' },
          { type: 'formula', content: '排列口诀：先固定再变换，按顺序不遗漏，数一数共几个！', label: '排列口诀', animationType: 'typewriter' },
          { type: 'tip', content: '排列时一定要按顺序来！先固定十位再换个位，这样才不会漏掉也不会重复！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '数字卡片交换位置的动画，排列结果依次弹出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sequence',
              title: '用1、2、3摆两位数',
              sequenceConfig: {
                items: ['12', '13', '21', '23', '31', '32']
              },
              ttsNarration: '用1、2、3摆两位数：12、13、21、23、31、32，一共6个！',
            }
          },
          { type: 'tip', content: '本课主要使用CPA教学法：CPA教学法（Concrete具象(摆实物)→Pictorial图示(看图)→Abstract抽象(写符号)）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u8l1q1',
            type: 'choice',
            question: '用1和2可以摆出几个不同的两位数？',
            options: ['1个', '2个', '3个', '4个'],
            answer: '2个',
            hint: '12和21',
            explanation: '用1和2可以摆出12和21两个不同的两位数。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l1q2',
            type: 'fill',
            question: '用1、2、3三个数字摆两位数，一共可以摆___个',
            answer: '6',
            hint: '固定十位再换个位',
            explanation: '十位1：12、13；十位2：21、23；十位3：31、32，共6个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l1q3',
            type: 'flashcard',
            question: '用2和5能摆出哪些两位数？',
            answer: '25和52',
            hint: '先2在十位，再5在十位',
            explanation: '用2和5可以摆出25和52两个两位数。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u8l1q4',
            type: 'choice',
            question: '有2件上衣和3条裤子共有几种搭配方法？',
            options: ["3种","5种","6种","9种"],
            answer: '6种',
            hint: '2×3=？',
            explanation: '2×3=6种搭配。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l1q5',
            type: 'fill',
            question: '早餐有牛奶和豆浆2种饮料面包蛋糕油条3种点心共有___种搭配',
            answer: '6',
            hint: '2×3=6种搭配。',
            explanation: '2种饮料×3种点心=6种搭配。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l1q6',
            type: 'choice',
            question: '用数字1、2、3可以组成多少个不同的两位数（数字不重复）？',
            options: ["3个","6个","9个","12个"],
            answer: '6个',
            hint: '排列组合',
            explanation: '12、13、21、23、31、32共6个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l1q7',
            type: 'fill',
            question: '2个3相加用乘法表示为2×3=___',
            answer: '6',
            hint: '[分类]（数学-分类与整理-第1课）2×3=6。',
            explanation: '2×3=6，2个3相加等于6。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u8l2',
        title: '简单组合',
        order: 2,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能用连线法解决简单的组合问题',
        successCriteria: '①能区分排列和组合 ②能用连线列举组合方案',
        iDo: '家长用3件上衣和2条裤子示范搭配，用连线法列出所有组合。【CFU检查理解】家长问“你能用连线法解决简单的组合问题吗？”',
        weDo: '【引导式】亲子一起用连线法做搭配练习，数出组合总数。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立用连线法计算组合数。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】组合中顺序不重要，1+2和2+1是同一种搭配。\n共学四步：\n①对话出题：2件上衣3条裤子，问"有几种搭配？怎么算？"\n②孩子应答："2×3=6种，连线列举"\n③答错引导：家长画2件上衣3条裤子连线，让孩子数一共6条线\n④快速检测：3种饮料2种点心几种搭配、4支球队比赛几场、2种主食3种菜几种搭配',
        funElement: '笑话：上衣说我有3个朋友，每天换一个！小游戏：服装搭配师',
        gsapAnimations: [
          '[GSAP:drawSVG|搭配连线动画|0.6s|点击触发|power2.out]',
          '[GSAP:scaleIn|组合总数弹出|0.4s|连线完成|back.out(1.7)]'
        ],
        images: [
          '[IMG:illustration|3件上衣2条裤子搭配图|400x300|cartoon|png|组合搭配]',
          '[IMG:illustration|连线法列举组合|300x250|cartoon|png|连线列举]'
        ],
        content: [
          { type: 'text', content: '搭配问题用连线法最清楚！每件上衣和每条裤子都连一条线，数一数一共有几条线就是几种搭配！', animationType: 'reveal' },
          { type: 'example', content: '2件上衣×3条裤子=6种搭配，每件上衣配3条裤子，2件就是2×3=6种！', label: '连一连', animationType: 'bounce' },
          { type: 'formula', content: '搭配公式：A种选择×B种选择=A×B种搭配！', label: '搭配公式', animationType: 'counter' },
          { type: 'tip', content: '搭配问题用乘法最快！几种上衣×几种裤子=几种搭配！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '上衣和裤子搭配连线的动画，连线完成后组合总数弹出', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '2件上衣×3条裤子=6种搭配',
              cpaConfig: {
                concrete: { emoji: '👕', text: '2件上衣' },
                pictorial: { emoji: '👖', text: '3条裤子' },
                abstract: { emoji: '6️⃣', text: '2×3=6种搭配' }
              },
              ttsNarration: '2件上衣配3条裤子，2乘3等于6种搭配！',
            }
          },
          { type: 'tip', content: '本课主要使用EDI直接教学：EDI直接教学（I do家长示范→We do亲子共做→You do孩子独立）', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u8l2q1',
            type: 'choice',
            question: '2件上衣和3条裤子，一共有几种搭配？',
            options: ['4种', '5种', '6种', '8种'],
            answer: '6种',
            hint: '2×3=？',
            explanation: '每件上衣配3条裤子，2件上衣就是2×3=6种搭配。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l2q2',
            type: 'fill',
            question: '3种饮料和2种点心，一共有___种搭配',
            answer: '6',
            hint: '3×2=？',
            explanation: '每种饮料配2种点心，3种饮料就是3×2=6种搭配。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l2q3',
            type: 'flashcard',
            question: '4种主食和3种菜，一共有几种搭配？',
            answer: '12',
            hint: '4×3=？',
            explanation: '每种主食配3种菜，4种主食就是4×3=12种搭配。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u8l2q4',
            type: 'choice',
            question: '3个小朋友互相握手一次一共握几次手？',
            options: ["3次","4次","5次","6次"],
            answer: '3次',
            hint: '组合问题',
            explanation: 'AB、AC、BC共3次。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l2q5',
            type: 'fill',
            question: '从红黄蓝三种颜色中选两种涂在上下两层有___种不同的涂法',
            answer: '6',
            hint: '红黄、红蓝、黄红、黄蓝、蓝红、蓝黄=6种。',
            explanation: '3种颜色选2种涂上下两层，3×2=6种不同涂法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l2q6',
            type: 'choice',
            question: '【期末真题】小明从家到学校有2条路可走从学校到图书馆有3条路可走小明从家经过学校到图书馆有几种走法？',
            options: ["3种","5种","6种","9种"],
            answer: '6种',
            hint: '2×3=6',
            explanation: '2×3=6种走法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l2q7',
            type: 'choice',
            question: '有上衣A、B和裤子甲、乙按顺序列出所有搭配',
            options: ["4种","3种","2种","1种"],
            answer: '4种',
            hint: '[分类]（数学-分类与整理-第1课）A甲、A乙、B甲、B乙',
            explanation: '共4种。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      },
      {
        id: 'm2u8l3',
        title: '综合应用',
        order: 3,
        teachingMethod: '情境教学法',
        learningObjective: '我能用有序思考解决排列组合综合问题',
        successCriteria: '①能有顺序地列举方案 ②能正确计算方案总数',
        iDo: '家长出综合搭配题：3个小朋友拍照，有几种不同的站法？【CFU检查理解】家长问“你能用有序思考解决排列组合综合问题吗？”',
        weDo: '【引导式】亲子一起解决生活中的排列组合问题，画图列举。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
        youDo: '孩子独立解决排列组合的综合应用题。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
        parentTips: '【家长预习】排列组合要有序思考，画图或连线帮助列举。\n共学四步：\n①对话出题：3人排队拍照，问"有几种排法？怎么有序列举？"\n②孩子应答："6种，固定第一个人再排后面"\n③答错引导：家长用ABC代表3人，固定A在第一排BC和CB，再固定B、C\n④快速检测：3人选2人几种选法、4个数字摆两位数几个、2件上衣2条裤子几种搭配',
        funElement: '小游戏：拍照站队大挑战！歇后语：三三两两——不多不少',
        gsapAnimations: [
          '[GSAP:translateX|人物交换位置动画|0.5s|点击触发|power2.inOut]',
          '[GSAP:particleBurst|所有排列找齐庆祝|0.8s|完成触发|power2.out]'
        ],
        images: [
          '[IMG:illustration|3人拍照排列图|400x300|cartoon|png|排列应用]',
          '[IMG:illustration|有序列举所有站法|300x250|cartoon|png|列举方法]'
        ],
        content: [
          { type: 'text', content: '排列组合在生活中很有用！拍照站队、搭配衣服、选颜色……都需要排列组合的知识！', animationType: 'reveal' },
          { type: 'example', content: '3人拍照排列：3×2×1=6种站法，有序列举不遗漏！', label: '排一排', animationType: 'bounce' },
          { type: 'formula', content: '排列组合口诀：排列有顺序，组合无顺序，有序思考画图列，不重不漏最关键！', label: '综合口诀', animationType: 'typewriter' },
          { type: 'tip', content: '排列组合问题一定要有序思考！先固定一个再排其他的，画图或连线帮助列举！', label: '小贴士', animationType: 'pulse' },
          { type: 'animation', content: '3人拍照站队动画：人物交换位置，所有排列找齐后庆祝', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'sequence',
              title: '3人排队拍照',
              sequenceConfig: {
                items: ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']
              },
              ttsNarration: '3人排队拍照，3乘2乘1等于6种站法！ABC、ACB、BAC、BCA、CAB、CBA！',
            }
          },
          { type: 'tip', content: '本课主要使用情境化练习，生活问题驱动，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          {
            id: 'm2u8l3q1',
            type: 'choice',
            question: '3个小朋友排队拍照，有几种不同的站法？',
            options: ['3种', '4种', '6种', '9种'],
            answer: '6种',
            hint: '固定第一个再排后面',
            explanation: '3×2×1=6种，3个小朋友有6种不同站法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l3q2',
            type: 'fill',
            question: '从4种颜色中选2种涂色，有___种选法',
            answer: '6',
            hint: '用连线法数一数',
            explanation: '4种颜色选2种，用连线法：4×3÷2=6种选法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l3q3',
            type: 'flashcard',
            question: '2种面包和3种饮料，早餐有几种搭配？',
            answer: '6',
            hint: '2×3=？',
            explanation: '每种面包配3种饮料，2种面包就是2×3=6种搭配。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ,
          {
            id: 'm2u8l3q4',
            type: 'choice',
            question: '密码是由1、2、3、4组成的两位数（数字不重复）从小到大排第3个是多少？',
            options: ["13","14","23","31"],
            answer: '14',
            hint: '列举排序',
            explanation: '12、13、14...第3个是14。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l3q5',
            type: 'fill',
            question: '用0、1、2可以组成___个不同的两位数（首位不为0）',
            answer: '4',
            hint: '共4个。',
            explanation: '10、12、20、21共4个不同的两位数。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l3q6',
            type: 'choice',
            question: '体育比赛有4个队每两队之间比赛一场一共要比赛几场？',
            options: ["4场","5场","6场","8场"],
            answer: '6场',
            hint: '组合问题',
            explanation: '4×3÷2=6场（每场比赛被两队各算1次要除以2）。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          {
            id: 'm2u8l3q7',
            type: 'fill',
            question: 'A、B两人排队有___种排法',
            answer: '2',
            hint: '[搭配]（数学-搭配-第1课）2种。',
            explanation: 'AB和BA共2种排法。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          }
        ]
      }
    ,
        {
          id: 'm2u8l4',
          title: '形成性评价',
          order: 4,
          teachingMethod: '独立测评，诊断反馈',
          learningObjective: '我能综合运用排列组合知识完成测评',
          successCriteria: '①测评正确率达80%以上 ②能区分排列和组合',
          iDo: '家长读题，孩子独立完成，不做提示。【CFU检查理解】家长问“你能综合运用排列组合知识完成测评吗？”',
          weDo: '【引导式】完成后亲子一起核对答案，讨论错题原因。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成所有题目，检查后提交。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】综合检测搭配问题，重点看有序思考。\n共学四步：\n①对话出题：问"排列和组合有什么不同？"\n②孩子应答："排列有顺序，组合没顺序"\n③答错引导：错题用连线或列举法重新做，强调有序不遗漏\n④快速检测：用123摆两位数、2件衣服3条裤子搭配、3人排队',
          funElement: '小游戏：闯关大挑战！全部答对获得"数学小达人"称号！',
          gsapAnimations: ["[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]","[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]"],
          images: ["[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]","[IMG:illustration|数学小达人奖杯|300x250|cartoon|png|评价奖励]"],
          content: [
            { type: 'text', content: '形成性评价时间到！让我们来检验一下你对"数学广角-搭配"这个单元的掌握情况吧！', animationType: 'reveal' },
            { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用独立测评，诊断反馈，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u8l4q1',
              type: 'choice',
              question: '3件上衣2条裙子有几种搭配方法？',
              options: ["3种","5种","6种","9种"],
              answer: '6种',
              hint: '3×2=？',
              explanation: '3×2=6种。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u8l4q2',
            type: 'fill',
            question: '用2、4、5三个数字组成不同的两位数（不重复）最多能组___个',
            answer: '6',
            hint: '每个数字都能做十位',
            explanation: '24、25、42、45、52、54共6个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u8l4q3',
              type: 'choice',
              question: '4个人每两人握一次手一共握几次？',
              options: ["4次","6次","8次","12次"],
              answer: '6次',
              hint: '组合问题',
              explanation: '4×3÷2=6次。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u8l4q4',
            type: 'fill',
            question: '从甲地到乙地有3条路从乙地到丙地有2条路从甲经过乙到丙有___种走法',
            answer: '6',
            hint: '3×2=？',
            explanation: '3×2=6种。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u8l4q5',
              type: 'choice',
              question: '【期末真题】用0、3、6三个数字能组成多少个不同的两位数？',
              options: ["2个","4个","6个","9个"],
              answer: '4个',
              hint: '0不能做十位',
              explanation: '30、36、60、63共4个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u8l4q6',
              type: 'choice',
              question: '2个同学站成一排照相有多少种不同的站法？',
              options: ["1种","2种","4种","6种"],
              answer: '2种',
              hint: '甲在前或乙在前',
              explanation: '2个人排列有2种站法：甲乙、乙甲。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u8l4q7',
            type: 'fill',
            question: '3×4=___',
            answer: '12',
            hint: '[乘法初步]（数学-乘法初步-第1课）三四十二',
            explanation: '3×4=12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        },
        {
          id: 'm2u8l5',
          title: '综合应用',
          order: 5,
          teachingMethod: '情境教学法',
          learningObjective: '我能用排列组合解决生活问题',
          successCriteria: '①能从生活场景分析排列组合 ②能正确列举方案',
          iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问“你能用排列组合解决生活问题吗？”',
          weDo: '【引导式】亲子一起解决综合性问题，讨论多种解法。 → 【半独立】孩子说步骤家长做 → 【独立】孩子自己做',
          youDo: '孩子独立完成综合应用题，尝试用不同方法解决。【费曼小老师时间】用最简单的话把今天学的讲给小熊/家长听，讲不清的地方回去看一遍再讲。',
          parentTips: '【家长预习】用排列组合解决生活中的搭配、路线等问题。\n共学四步：\n①对话出题：去学校有2条路再到教室有3条路，问"几种走法？"\n②孩子应答："2×3=6种走法"\n③答错引导：家长画路线图连线，让孩子数一共几条路\n④快速检测：3种汉堡2种饮料几种搭配、2件上衣2条裤子2双鞋几种穿法、4支球队比赛几场',
          funElement: '小游戏：数学小侦探——用数学知识破解谜题！',
          gsapAnimations: ["[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]","[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]"],
          images: ["[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]","[IMG:illustration|数学小侦探场景|300x250|cartoon|png|侦探解题]"],
          content: [
            { type: 'text', content: '恭喜你完成了"数学广角-搭配"的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
            { type: 'tip', content: '综合应用题可能需要用到多个知识点，仔细审题，分步思考。', label: '解题提示', animationType: 'pulse' },
            { type: 'tip', content: '本课主要使用情境化综合实践，跨课时整合，结合具体内容灵活应用', label: '教学方法', animationType: 'pulse' },
          ],
          practiceQuestions: [
            {
              id: 'm2u8l5q1',
              type: 'choice',
              question: '小明有3件上衣和2条裤子还有2双鞋一共有几种不同的穿搭方法？',
              options: ["6种","10种","12种","18种"],
              answer: '12种',
              hint: '3×2×2=？',
              explanation: '3×2×2=12种。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u8l5q2',
            type: 'fill',
            question: '用1、2、3三个数字组成不同的三位数（不重复）最多能组___个',
            answer: '6',
            hint: '每个数字都能做百位',
            explanation: '123、132、213、231、312、321共6个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u8l5q3',
              type: 'choice',
              question: '5个同学互相寄一张贺卡一共需要寄多少张？',
              options: ["5张","10张","20张","25张"],
              answer: '20张',
              hint: '每人寄4张',
              explanation: '5×4=20张。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u8l5q4',
            type: 'fill',
            question: '从甲到乙有4条路从乙到丙有3条路从甲经乙到丙有___种走法',
            answer: '12',
            hint: '4×3=？',
            explanation: '12种。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
            {
              id: 'm2u8l5q5',
              type: 'choice',
              question: '【期末真题】用2、5、8三个数字可以组成多少个不同的两位数？',
              options: ["3个","6个","9个","12个"],
              answer: '6个',
              hint: '每个数字做十位有2种',
              explanation: '25、28、52、58、82、85共6个。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
              id: 'm2u8l5q6',
              type: 'choice',
              question: '6个人中选2人参加比赛有几种选法？',
              options: ["6种","12种","15种","30种"],
              answer: '15种',
              hint: '6×5÷2=？',
              explanation: '6×5÷2=15种。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
            },
            {
            id: 'm2u8l5q7',
            type: 'fill',
            question: '4×3=___',
            answer: '12',
            hint: '[乘法初步]（数学-乘法初步-第1课）三四十二',
            explanation: '12。做错是因为这个方法还不熟练，多练几次就好，不是你不够聪明。'
          },
          ]
        }
      ]
  },
  {
    id: 'm2u9',
    title: '表内除法',
    subtitle: '理解除法意义，用乘法口诀求商',
    order: 9,
    lessons: [
      {
        id: 'm2u9l1',
        title: '平均分',
        order: 1,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能理解平均分的含义',
        successCriteria: '①能把物品平均分成几份 ②能说出每份是多少',
        iDo: '家长示范把6颗糖平均分成2份，每份3颗，强调每份同样多才是平均分。【CFU检查理解】家长问"平均分是什么意思？"',
        weDo: '【引导式】家长分孩子说每份几颗 → 【半独立】孩子分家长说 → 【独立】孩子自己分自己说',
        youDo: '孩子独立完成平均分操作。【费曼小老师时间】用最简单的话把今天学的平均分讲给小熊听',
        parentTips: '【家长预习】本课学平均分，每份分得同样多叫平均分。\n共学四步：\n①对话出题：拿6颗糖问"怎样分给2个人才公平？"\n②孩子应答："每人3颗，每份一样多"\n③答错引导：家长实际分糖果，一份一份比，让孩子看到每份同样多才公平\n④快速检测：把8个苹果平均分成4份每份几个、把10颗糖平均分成5份每份几个、把12个梨平均分成3份每份几个',
        funElement: '小游戏：分糖果比赛——看谁分得最公平！',
        gsapAnimations: ['[GSAP:scaleIn|分组动画|0.6s|页面加载|back.out(1.7)]', '[GSAP:staggerFrom|糖果依次分成等份|0.4s|分组完成|power2.out]'],
        images: ['[IMG:illustration|平均分示意图|400x300|cartoon|png|除法教学]', '[IMG:illustration|每份同样多对比图|300x250|cartoon|png|平均分]'],
        content: [
          { type: 'text', content: '把一些物品分成若干份，每份分得同样多，叫做平均分！比如6颗糖平均分成2份，每份3颗。', animationType: 'reveal' },
          { type: 'example', content: '6颗糖平均分成2份，每份3颗，每份同样多！', label: '分一分', animationType: 'bounce' },
          { type: 'formula', content: '平均分口诀：每份同样多，这才叫平均分！', label: '平均分口诀', animationType: 'typewriter' },
          { type: 'animation', content: '6颗糖分成2份的动画，每份3颗，强调每份同样多', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '平均分',
              cpaConfig: {
                concrete: { emoji: '🍬', text: '6颗糖分2份' },
                pictorial: { emoji: '⭕⭕⭕|⭕⭕⭕', text: '每份3颗' },
                abstract: { emoji: '6÷2=3', text: '6÷2=3' }
              },
              ttsNarration: '把6颗糖平均分成2份，每份3颗，每份同样多！',
            }
          },
          { type: 'tip', content: '新加坡CPA教学法：Concrete(分实物糖果)→Pictorial(画圈分)→Abstract(写除法算式)', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '判断是否平均分：看每份是不是同样多，同样多才是平均分！', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u9l1q1', type: 'choice', question: '下面哪种分法是平均分？', options: ['第一份3个第二份2个', '第一份2个第二份4个', '每份都是3个', '第一份5个第二份1个'], answer: '每份都是3个', hint: '平均分要求每份同样多', explanation: '平均分要求每份分得同样多，每份都是3个才是平均分。' },
          { id: 'm2u9l1q2', type: 'fill', question: '把8个苹果平均分成4份，每份___个', answer: '2', hint: '8÷4=？', explanation: '8÷4=2，每份2个苹果。' },
          { id: 'm2u9l1q3', type: 'flashcard', question: '10颗糖平均分成5份，每份几颗？', answer: '2', hint: '10÷5=？', explanation: '10÷5=2，每份2颗糖。' },
          { id: 'm2u9l1q4', type: 'choice', question: '12个梨平均分成3份，每份几个？', options: ['3个', '4个', '5个', '6个'], answer: '4个', hint: '12÷3=？', explanation: '12÷3=4，每份4个梨。' },
          { id: 'm2u9l1q5', type: 'fill', question: '15朵花平均插在3个花瓶里，每个花瓶插___朵', answer: '5', hint: '15÷3=？', explanation: '15÷3=5，每个花瓶插5朵花。' },
          { id: 'm2u9l1q6', type: 'choice', question: '【期中真题】有18个气球，平均分给6个小朋友，每个小朋友分几个？', options: ['2个', '3个', '4个', '6个'], answer: '3个', hint: '18÷6=？', explanation: '18÷6=3，每个小朋友分3个气球。做错是因为对除法还不熟练，多练几次就好，不是你不够聪明。' },
          { id: 'm2u9l1q7', type: 'fill', question: '10里面有___个2', answer: '5', hint: '[100以内数的认识]（数学-100以内数的认识-第3课）10÷2=5', explanation: '10÷2=5，10里面有5个2。回溯一年级数数知识，多练几次就熟练了。' }
        ]
      },
      {
        id: 'm2u9l2',
        title: '除法的意义',
        order: 2,
        teachingMethod: 'CPA教学法 + 思维导图法',
        learningObjective: '我能理解除法的意义，会读写除法算式',
        successCriteria: '①能说出除法算式各部分名称 ②能把平均分写成除法算式',
        iDo: '家长示范把12个苹果平均分成3份，写成除法算式12÷3=4，讲解被除数、除数、商。【CFU检查理解】家长问"12÷3=4中12叫什么？3叫什么？4叫什么？"',
        weDo: '【引导式】家长摆实物孩子写算式 → 【半独立】孩子摆实物写算式 → 【独立】孩子看图直接写算式',
        youDo: '孩子独立把平均分写成除法算式。【费曼小老师时间】把除法算式各部分名称讲给小熊听',
        parentTips: '【家长预习】除法算式：被除数÷除数=商，除号表示平均分。\n共学四步：\n①对话出题：12个苹果平均分成3份，问"怎么用算式表示？"\n②孩子应答："12÷3=4，12是被除数，3是除数，4是商"\n③答错引导：家长用实物分，强调÷表示平均分，读作12除以3等于4\n④快速检测：15÷5=3各部分名称、把20平均分成4份写算式、读出18÷6=3',
        funElement: '笑话：除号说我的样子像横线分东西，所以叫除号！小游戏：除法算式读读乐',
        gsapAnimations: ['[GSAP:typewriter|除法算式逐字出现|0.8s|页面加载|power2.out]', '[GSAP:scaleIn|被除数除数商标签弹出|0.4s|算式完成|back.out(1.7)]'],
        images: ['[IMG:illustration|除法算式各部分名称|400x300|cartoon|png|除法意义]', '[IMG:illustration|平均分对应除法算式|300x250|cartoon|png|除法算式]'],
        content: [
          { type: 'text', content: '平均分可以用除法来表示！把12个苹果平均分成3份，写成除法算式12÷3=4。', animationType: 'reveal' },
          { type: 'example', content: '12 ÷ 3 = 4  读作：12除以3等于4。12是被除数，÷是除号，3是除数，4是商。', label: '除法算式', animationType: 'bounce' },
          { type: 'formula', content: '被除数 ÷ 除数 = 商', label: '除法公式', animationType: 'typewriter' },
          { type: 'animation', content: '12个苹果平均分成3份的动画，对应除法算式12÷3=4', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '除法的意义',
              cpaConfig: {
                concrete: { emoji: '🍎', text: '12个苹果分3份' },
                pictorial: { emoji: '⭕⭕⭕⭕|⭕⭕⭕⭕|⭕⭕⭕⭕', text: '每份4个' },
                abstract: { emoji: '12÷3=4', text: '12÷3=4' }
              },
              ttsNarration: '把12个苹果平均分成3份，每份4个，写成12除以3等于4。',
            }
          },
          { type: 'tip', content: '新加坡CPA教学法：实物分苹果→画图分→写除法算式，三步理解除法意义', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '除号÷读作"除以"，表示平均分，箭头方向表示分的动作', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u9l2q1', type: 'choice', question: '12÷3=4中，12叫什么？', options: ['除数', '被除数', '商', '除号'], answer: '被除数', hint: '÷前面的数', explanation: '12÷3=4中，12是被除数，表示要分的总数。' },
          { id: 'm2u9l2q2', type: 'fill', question: '12÷3=4读作12___3等于4', answer: '除以', hint: '÷读作什么？', explanation: '÷读作除以，12÷3=4读作12除以3等于4。' },
          { id: 'm2u9l2q3', type: 'flashcard', question: '把15个球平均分成5份，写成除法算式是？', answer: '15÷5=3', hint: '总数÷份数=每份', explanation: '15÷5=3，把15个球平均分成5份，每份3个。' },
          { id: 'm2u9l2q4', type: 'choice', question: '20÷4=5中，4叫什么？', options: ['被除数', '除数', '商', '积'], answer: '除数', hint: '÷后面的数', explanation: '20÷4=5中，4是除数，表示平均分成几份。' },
          { id: 'm2u9l2q5', type: 'fill', question: '把24平均分成6份，每份4个，写成除法算式是24÷___=4', answer: '6', hint: '份数是几？', explanation: '24÷6=4，24个物品平均分成6份，每份4个。' },
          { id: 'm2u9l2q6', type: 'choice', question: '【期末真题】小红有18张画片，平均分给3个同学，每个同学分几张？正确的除法算式是？', options: ['18÷2=9', '18÷3=6', '18÷6=3', '18÷9=2'], answer: '18÷3=6', hint: '总数÷人数=每人张数', explanation: '18÷3=6，每个同学分6张。做错是因为对除法意义理解还不够，多摆实物练习就好了，你能行的！' },
          { id: 'm2u9l2q7', type: 'fill', question: '5+5+5=___', answer: '15', hint: '[20以内进位加法]（数学-20以内进位加法-第3课）3个5相加', explanation: '5+5+5=15，3个5相加等于15。回溯一年级加法知识，这是除法的基础。' }
        ]
      },
      {
        id: 'm2u9l3',
        title: '用乘法口诀求商',
        order: 3,
        teachingMethod: 'CPA教学法 + 费曼学习法',
        learningObjective: '我能用乘法口诀求商',
        successCriteria: '①能想乘法口诀求商 ②能正确计算表内除法',
        iDo: '家长示范：12÷3=？想3的口诀，三四十二，所以12÷3=4。【CFU检查理解】家长问"12÷4=？你想哪句口诀？"',
        weDo: '【引导式】家长说除法孩子想口诀 → 【半独立】孩子说除法自己想口诀 → 【独立】孩子快速求商',
        youDo: '孩子独立用乘法口诀求商。【费曼小老师时间】把"想乘法口诀求商"的方法讲给小熊听',
        parentTips: '【家长预习】除法和乘法是逆运算，想乘法口诀就能求商。\n共学四步：\n①对话出题：12÷3=？问"想哪句乘法口诀？"\n②孩子应答："三四十二，所以12÷3=4"\n③答错引导：家长写出3×()=12，引导孩子想3的口诀三四十二\n④快速检测：15÷5=？、24÷6=？、42÷7=？',
        funElement: '小游戏：口诀求商接力赛——看谁算得快！歇后语：乘除不分家——互相帮忙',
        gsapAnimations: ['[GSAP:flipIn|乘法口诀卡片翻转|0.5s|点击触发|back.out(1.7)]', '[GSAP:scaleIn|商的数字弹出|0.4s|口诀找到|back.out(1.7)]'],
        images: ['[IMG:illustration|乘法口诀求商对应图|400x300|cartoon|png|口诀求商]', '[IMG:illustration|乘除法关系图|300x250|cartoon|png|乘除关系]'],
        content: [
          { type: 'text', content: '求商有妙招：想乘法口诀！因为乘法和除法是好朋友，想三四十二就知道12÷3=4。', animationType: 'reveal' },
          { type: 'example', content: '12÷3=？想：3×(4)=12，三四十二，所以12÷3=4！', label: '口诀求商', animationType: 'bounce' },
          { type: 'formula', content: '求商口诀：想乘法口诀，除数×商=被除数', label: '求商方法', animationType: 'typewriter' },
          { type: 'animation', content: '乘法口诀卡片翻转，翻到对应口诀后弹出商', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '口诀求商',
              cpaConfig: {
                concrete: { emoji: '🍎', text: '12个苹果每3个一份' },
                pictorial: { emoji: '3×4=12', text: '三四十二' },
                abstract: { emoji: '12÷3=4', text: '12÷3=4' }
              },
              ttsNarration: '12除以3，想三四十二，所以12÷3=4！',
            }
          },
          { type: 'tip', content: '新加坡CPA教学法：实物分→想乘法口诀→写出除法商，三步理解求商', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '想乘法口诀求商时，找除数对应的口诀，口诀中另一个数就是商！', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u9l3q1', type: 'choice', question: '12÷4=？想哪句乘法口诀？', options: ['三四十二', '二四得八', '四五二十', '四六二十四'], answer: '三四十二', hint: '找4的口诀', explanation: '12÷4=3，想三四十二，所以商是3。' },
          { id: 'm2u9l3q2', type: 'fill', question: '15÷5=___', answer: '3', hint: '想5的口诀三五十五', explanation: '15÷5=3，想三五十五，所以商是3。' },
          { id: 'm2u9l3q3', type: 'flashcard', question: '24÷6=？', answer: '4', hint: '想6的口诀四六二十四', explanation: '24÷6=4，想四六二十四，所以商是4。' },
          { id: 'm2u9l3q4', type: 'choice', question: '42÷7=？', options: ['5', '6', '7', '8'], answer: '6', hint: '想7的口诀六七四十二', explanation: '42÷7=6，想六七四十二，所以商是6。' },
          { id: 'm2u9l3q5', type: 'fill', question: '36÷9=___', answer: '4', hint: '想9的口诀四九三十六', explanation: '36÷9=4，想四九三十六，所以商是4。' },
          { id: 'm2u9l3q6', type: 'choice', question: '【期末真题】一共有28颗糖，每4颗装一袋，可以装几袋？', options: ['6袋', '7袋', '8袋', '9袋'], answer: '7袋', hint: '28÷4=？想4的口诀', explanation: '28÷4=7，想四七二十八，可以装7袋。口诀不熟练没关系，多读几遍就记住了，你一定能学会！' },
          { id: 'm2u9l3q7', type: 'fill', question: '8+8=___', answer: '16', hint: '[20以内进位加法]（数学-20以内进位加法-第2课）8+8=16', explanation: '8+8=16，两个8相加等于16。回溯一年级进位加法。' }
        ]
      },
      {
        id: 'm2u9l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '独立测评 + 成长型思维',
        learningObjective: '我能综合运用除法知识完成测评',
        successCriteria: '①测评正确率达80%以上 ②能区分平均分和除法算式',
        iDo: '家长读题，孩子独立完成，不做提示。',
        weDo: '完成后亲子一起核对答案，讨论错题原因。',
        youDo: '孩子独立完成所有题目，检查后提交。',
        parentTips: '【家长预习】综合检测表内除法，重点看口诀求商。\n共学四步：\n①对话出题：问"除法算式各部分叫什么？怎么求商？"\n②孩子应答："被除数÷除数=商，想乘法口诀求商"\n③答错引导：错题用口诀重新算，强调想除数对应的口诀\n④快速检测：12÷3=？、20÷5=？、36÷6=？',
        funElement: '小游戏：闯关大挑战！全部答对获得"除法小达人"称号！',
        gsapAnimations: ['[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]', '[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]'],
        images: ['[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]', '[IMG:illustration|除法小达人奖杯|300x250|cartoon|png|评价奖励]'],
        content: [
          { type: 'text', content: '形成性评价时间到！让我们来检验一下你对表内除法的掌握情况吧！', animationType: 'reveal' },
          { type: 'tip', content: '思维导图：表内除法 → 平均分(每份同样多) → 除法算式(被除数÷除数=商) → 口诀求商(想乘法口诀) → 解决问题(总数÷每份数=份数)', label: '思维导图', animationType: 'pulse' },
          { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u9l4q1', type: 'choice', question: '下面哪个是平均分？', options: ['6个分2份一份3个一份2个', '8个分4份每份2个', '10个分2份一份7个一份3个', '12个分3份一份5个一份4个一份3个'], answer: '8个分4份每份2个', hint: '每份同样多', explanation: '平均分要求每份同样多，8个分4份每份2个是平均分。' },
          { id: 'm2u9l4q2', type: 'fill', question: '20÷5=___', answer: '4', hint: '想5的口诀四五二十', explanation: '20÷5=4，想四五二十，商是4。' },
          { id: 'm2u9l4q3', type: 'choice', question: '18÷3=6中，6叫什么？', options: ['被除数', '除数', '商', '积'], answer: '商', hint: '等号后面的数', explanation: '18÷3=6中，6是商，表示每份6个。' },
          { id: 'm2u9l4q4', type: 'fill', question: '27÷9=___', answer: '3', hint: '想9的口诀三九二十七', explanation: '27÷9=3，想三九二十七，商是3。' },
          { id: 'm2u9l4q5', type: 'choice', question: '【期末真题】有30个鸡蛋，每盒装6个，需要几个盒子？', options: ['4个', '5个', '6个', '7个'], answer: '5个', hint: '30÷6=？', explanation: '30÷6=5，想五六三十，需要5个盒子。做错是对口诀还不熟，多读几遍口诀就好啦！' },
          { id: 'm2u9l4q6', type: 'fill', question: '48÷8=___', answer: '6', hint: '想8的口诀六八四十八', explanation: '48÷8=6，想六八四十八，商是6。' },
          { id: 'm2u9l4q7', type: 'fill', question: '15-7=___', answer: '8', hint: '[20以内退位减法]（数学-20以内退位减法-第1课）15-7=8', explanation: '15-7=8，用破十法15-7=8。回溯一年级退位减法，这是除法的基础。' }
        ]
      },
      {
        id: 'm2u9l5',
        title: '解决问题',
        order: 5,
        teachingMethod: '情境教学法 + 苏格拉底提问法',
        learningObjective: '我能用除法解决生活中的问题',
        successCriteria: '①能分析题意选择除法 ②能正确列式解答',
        iDo: '家长示范：24个苹果每4个装一袋，能装几袋？24÷4=6袋。【CFU检查理解】家长问"为什么用除法？"',
        weDo: '【引导式】家长分析题意孩子列式 → 【半独立】孩子分析家长检查 → 【独立】孩子独立解决',
        youDo: '孩子独立解决除法应用题。【费曼小老师时间】把解题思路讲给小熊听',
        parentTips: '【家长预习】解决问题要分清两种：平均分成几份求每份、每几个一份求份数，都用除法。\n共学四步：\n①对话出题：20个气球每5个一束，问"能扎几束？怎么算？"\n②孩子应答："20÷5=4束"\n③答错引导：家长用实物分，强调每5个一份，看能分几份就是几束\n④快速检测：18个苹果每3个一盘几盘、24人每6人一组几组、30颗糖每5颗一袋几袋',
        funElement: '小游戏：除法应用小达人！笑话：除法说我最爱分东西，分得公平又开心！',
        gsapAnimations: ['[GSAP:scaleIn|生活场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝|0.8s|答对触发|power2.out]'],
        images: ['[IMG:illustration|除法应用生活场景|400x300|cartoon|png|除法应用]', '[IMG:illustration|平均分装袋示意图|300x250|cartoon|png|解决问题]'],
        content: [
          { type: 'text', content: '学会了除法，我们来解决生活中的问题吧！平均分东西、每几个一份，都用除法！', animationType: 'reveal' },
          { type: 'example', content: '24个苹果每4个装一袋，能装几袋？24÷4=6袋！', label: '解决问题', animationType: 'bounce' },
          { type: 'formula', content: '总数 ÷ 每份数 = 份数，总数 ÷ 份数 = 每份数', label: '除法应用', animationType: 'typewriter' },
          { type: 'tip', content: '苏格拉底提问法：不直接告诉答案，用"为什么用除法？""每几个一份？"引导孩子思考', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '解决问题先看求什么：求每份多少还是求几份，分清后再列除法算式。', label: '解题提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u9l5q1', type: 'choice', question: '20个气球每5个扎一束，能扎几束？', options: ['3束', '4束', '5束', '6束'], answer: '4束', hint: '20÷5=？', explanation: '20÷5=4，能扎4束。' },
          { id: 'm2u9l5q2', type: 'fill', question: '18个苹果每3个装一盘，能装___盘', answer: '6', hint: '18÷3=？', explanation: '18÷3=6，能装6盘。' },
          { id: 'm2u9l5q3', type: 'choice', question: '24个同学每6人一组，可以分成几组？', options: ['3组', '4组', '5组', '6组'], answer: '4组', hint: '24÷6=？', explanation: '24÷6=4，可以分成4组。' },
          { id: 'm2u9l5q4', type: 'fill', question: '30颗糖平均分给6个小朋友，每个小朋友分___颗', answer: '5', hint: '30÷6=？', explanation: '30÷6=5，每个小朋友分5颗。' },
          { id: 'm2u9l5q5', type: 'choice', question: '【期末真题】小明有36张贴画，每页贴6张，需要几页？', options: ['5页', '6页', '7页', '8页'], answer: '6页', hint: '36÷6=？', explanation: '36÷6=6，需要6页。解题时如果不确定，画图分一分就清楚了，你不是学不会，只是需要多练习！' },
          { id: 'm2u9l5q6', type: 'fill', question: '一根绳子长16米，每4米剪一段，能剪___段', answer: '4', hint: '16÷4=？', explanation: '16÷4=4，能剪4段。' },
          { id: 'm2u9l5q7', type: 'fill', question: '2元=___角', answer: '20', hint: '[认识人民币]（数学-认识人民币-第1课）1元=10角', explanation: '1元=10角，2元=20角。回溯一年级人民币知识。' }
        ]
      }
    ]
  },
  {
    id: 'm2u10',
    title: '认识时间',
    subtitle: '认识分秒，学会时间换算和计算',
    order: 10,
    lessons: [
      {
        id: 'm2u10l1',
        title: '认识分秒',
        order: 1,
        teachingMethod: 'CPA教学法 + EDI直接教学',
        learningObjective: '我能认识分和秒，知道1时=60分，1分=60秒',
        successCriteria: '①能读出钟面上的时间 ②知道1时=60分、1分=60秒',
        iDo: '家长用钟表演示分针走一小格是1分，走一圈是60分，时针走一大格是1时。【CFU检查理解】家长问"分针走一圈是多少分？等于几时？"',
        weDo: '【引导式】家长拨分针孩子读时间 → 【半独立】孩子拨分针家长读 → 【独立】孩子自己读时间',
        youDo: '孩子独立读出钟面上的时间。【费曼小老师时间】把1时=60分讲给小熊听',
        parentTips: '【家长预习】分针走一小格1分，走一大格5分，走一圈60分=1时。秒针走一小格1秒，走一圈60秒=1分。\n共学四步：\n①对话出题：指着钟表问"分针走一圈是多少分？等于几时？"\n②孩子应答："走一圈60分，等于1时"\n③答错引导：家长拨分针走一圈，数小格，让孩子看到60小格=60分=1时\n④快速检测：1时=几分、1分=几秒、分针走3大格是几分',
        funElement: '小游戏：拨钟读时间——看谁读得准！笑话：分针说我跑一圈，时针才走一大格，我太累啦！',
        gsapAnimations: ['[GSAP:rotateZ|分针走一圈动画|3.0s|页面加载|power1.inOut]', '[GSAP:scaleIn|1时=60分标签弹出|0.5s|走完一圈|back.out(1.7)]'],
        images: ['[IMG:illustration|钟表分针走动示意图|400x300|cartoon|png|认识分秒]', '[IMG:illustration|1时=60分关系图|300x250|cartoon|png|时间换算]'],
        content: [
          { type: 'text', content: '钟面上有三根针：时针最短最粗走得最慢，分针较长走得较快，秒针最细最长走得最快！', animationType: 'reveal' },
          { type: 'example', content: '⏰ 分针走一小格是1分，走一大格是5分，走一圈是60分，正好等于1时！', label: '认识分针', animationType: 'bounce' },
          { type: 'formula', content: '1时 = 60分，1分 = 60秒', label: '时间换算', animationType: 'counter' },
          { type: 'animation', content: '分针走一圈的动画，走完后弹出1时=60分标签', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '认识分秒',
              cpaConfig: {
                concrete: { emoji: '⏰', text: '拨钟表看分针' },
                pictorial: { emoji: '🕐', text: '分针走一圈60小格' },
                abstract: { emoji: '1时=60分', text: '1时=60分' }
              },
              ttsNarration: '分针走一圈是60分，等于1时！',
            }
          },
          { type: 'tip', content: '新加坡CPA教学法：拨实物钟表→画钟面数格→写出时间关系', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '时针走一大格是1时，分针走一大格是5分，秒针走一小格是1秒。', label: '小贴士', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u10l1q1', type: 'choice', question: '1时等于多少分？', options: ['10分', '30分', '60分', '100分'], answer: '60分', hint: '分针走一圈是几小格？', explanation: '1时=60分，分针走一圈60小格就是60分。' },
          { id: 'm2u10l1q2', type: 'fill', question: '1分=___秒', answer: '60', hint: '秒针走一圈是几秒？', explanation: '1分=60秒，秒针走一圈60小格就是60秒。' },
          { id: 'm2u10l1q3', type: 'flashcard', question: '分针走一大格是多少分？', answer: '5', hint: '一大格有5小格', explanation: '分针走一大格是5分，因为一大格有5小格。' },
          { id: 'm2u10l1q4', type: 'choice', question: '钟面上跑得最快的针是？', options: ['时针', '分针', '秒针', '都一样快'], answer: '秒针', hint: '哪根针最细最长？', explanation: '秒针最细最长走得最快，走一小格是1秒。' },
          { id: 'm2u10l1q5', type: 'fill', question: '分针从12走到3，经过了___分', answer: '15', hint: '走了3大格，每大格5分', explanation: '分针从12走到3，走了3大格，3×5=15分。' },
          { id: 'm2u10l1q6', type: 'choice', question: '【期末真题】时针从数字3走到数字4，经过了多长时间？', options: ['1分', '5分', '1时', '60秒'], answer: '1时', hint: '时针走一大格是几时？', explanation: '时针走一大格是1时，从3到4走了1大格，经过了1时。做错是对钟面还不熟悉，多拨几次钟表就好啦！' },
          { id: 'm2u10l1q7', type: 'fill', question: '7时整，分针指着___', answer: '12', hint: '[认识钟表]（数学-认识钟表-第2课）整时分针指着12', explanation: '7时整，时针指7，分针指12。回溯一年级认识钟表知识。' }
        ]
      },
      {
        id: 'm2u10l2',
        title: '时间单位换算',
        order: 2,
        teachingMethod: 'CPA教学法 + 思维导图法',
        learningObjective: '我能进行时间单位的换算',
        successCriteria: '①能把时换算成分 ②能把分换算成秒',
        iDo: '家长示范：2时=？分，1时=60分，2时=60+60=120分。【CFU检查理解】家长问"3时等于多少分？怎么算？"',
        weDo: '【引导式】家长出题孩子算 → 【半独立】孩子自己算 → 【独立】孩子快速换算',
        youDo: '孩子独立完成时间单位换算。【费曼小老师时间】把时间换算方法讲给小熊听',
        parentTips: '【家长预习】时间换算：1时=60分，1分=60秒。时变分乘60，分变秒乘60。\n共学四步：\n①对话出题：2时=？分，问"怎么算？"\n②孩子应答："1时=60分，2时=120分"\n③答错引导：画图1时=60分，2时就是两个60分相加=120分\n④快速检测：3时=几分、2分=几秒、120分=几时',
        funElement: '小游戏：时间换算大转盘！歇后语：一时半刻——时间不长',
        gsapAnimations: ['[GSAP:counter|时间数字滚动换算动画|0.8s|页面加载|power2.out]', '[GSAP:scaleIn|换算结果弹出|0.4s|换算完成|back.out(1.7)]'],
        images: ['[IMG:illustration|时间单位换算示意图|400x300|cartoon|png|时间换算]', '[IMG:illustration|时分秒关系图|300x250|cartoon|png|单位关系]'],
        content: [
          { type: 'text', content: '时间单位可以互相换算！1时=60分，1分=60秒，大单位变小单位乘60。', animationType: 'reveal' },
          { type: 'example', content: '2时=120分（60+60=120），3分=180秒（60×3=180）', label: '时间换算', animationType: 'bounce' },
          { type: 'formula', content: '1时=60分，1分=60秒，时→分乘60，分→秒乘60', label: '换算公式', animationType: 'typewriter' },
          { type: 'animation', content: '时间数字滚动换算动画，1时变成60分', animationType: 'cpaTransition',
            animationConfig: {
              sceneType: 'cpaTransition',
              title: '时间换算',
              cpaConfig: {
                concrete: { emoji: '⏰', text: '拨1时看分针' },
                pictorial: { emoji: '🕐➡60分', text: '1时=60分' },
                abstract: { emoji: '1时=60分', text: '1×60=60分' }
              },
              ttsNarration: '1时等于60分，2时等于120分！',
            }
          },
          { type: 'tip', content: '新加坡CPA教学法：拨钟表实物→画图数格→写出换算算式', label: '教学方法', animationType: 'pulse' },
          { type: 'tip', content: '思维导图：时间换算 → 时变分(×60) → 分变秒(×60) → 分变时(÷60) → 秒变分(÷60)', label: '思维导图', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u10l2q1', type: 'choice', question: '2时等于多少分？', options: ['60分', '100分', '120分', '200分'], answer: '120分', hint: '1时=60分，2时呢？', explanation: '1时=60分，2时=60×2=120分。' },
          { id: 'm2u10l2q2', type: 'fill', question: '3分=___秒', answer: '180', hint: '1分=60秒，3分呢？', explanation: '1分=60秒，3分=60×3=180秒。' },
          { id: 'm2u10l2q3', type: 'flashcard', question: '4时=？分', answer: '240', hint: '60×4=？', explanation: '1时=60分，4时=60×4=240分。' },
          { id: 'm2u10l2q4', type: 'choice', question: '120分等于几时？', options: ['1时', '2时', '3时', '12时'], answer: '2时', hint: '120÷60=？', explanation: '120÷60=2，120分=2时。' },
          { id: 'm2u10l2q5', type: 'fill', question: '5分=___秒', answer: '300', hint: '60×5=？', explanation: '1分=60秒，5分=60×5=300秒。' },
          { id: 'm2u10l2q6', type: 'choice', question: '【期末真题】一节课40分，两节课加一个课间10分，一共多少分？合几时？', options: ['50分合1时', '80分合1时20分', '90分合1时30分', '100分合1时40分'], answer: '90分合1时30分', hint: '40+40+10=？分，再÷60', explanation: '40+40+10=90分，90÷60=1时30分，合1时30分。时间换算不熟练没关系，多拨钟表多算就好啦，你一定可以！' },
          { id: 'm2u10l2q7', type: 'fill', question: '1元=___角', answer: '10', hint: '[认识人民币]（数学-认识人民币-第1课）1元=10角', explanation: '1元=10角。回溯一年级人民币知识，和时分秒一样都是60或10进制。' }
        ]
      },
      {
        id: 'm2u10l3',
        title: '时间的计算',
        order: 3,
        teachingMethod: 'EDI直接教学',
        learningObjective: '我能计算经过的时间',
        successCriteria: '①能算出经过时间 ②能进行时间加减计算',
        iDo: '家长在时间轴上演示：8:00到8:30经过了30分钟。【CFU检查理解】家长问"8:10到8:40经过了几分钟？"',
        weDo: '【引导式】家长画时间轴孩子算 → 【半独立】孩子画时间轴算 → 【独立】孩子直接计算',
        youDo: '孩子独立计算经过的时间。【费曼小老师时间】把时间计算方法讲给小熊听',
        parentTips: '【家长预习】经过时间=结束时间-开始时间，分钟不够减借1时当60分。\n共学四步：\n①对话出题：8:10到8:45，问"经过了几分钟？"\n②孩子应答："45-10=35分钟"\n③答错引导：画时间轴标出8:10和8:45，让孩子数中间经过多少分钟\n④快速检测：8:00到8:30经过几分、9:15到9:50经过几分、2时=几分',
        funElement: '小游戏：时间计算小达人！笑话：时间说我最公平，每人每天24小时！',
        gsapAnimations: ['[GSAP:translateX|时间轴上区间高亮|0.6s|点击触发|power2.inOut]', '[GSAP:scaleIn|经过时间数字弹出|0.4s|区间完成|back.out(1.7)]'],
        images: ['[IMG:illustration|时间轴计算经过时间|400x300|cartoon|png|时间计算]', '[IMG:illustration|钟表起始结束对比|300x250|cartoon|png|时间对比]'],
        content: [
          { type: 'text', content: '学会了认识时间和换算，现在来学习计算经过的时间吧！', animationType: 'reveal' },
          { type: 'example', content: '🕐 8:00到8:45，经过了多少分钟？45-0=45分钟！', label: '时间计算', animationType: 'bounce' },
          { type: 'formula', content: '经过时间 = 结束时间 - 开始时间', label: '计算公式', animationType: 'typewriter' },
          { type: 'example', content: '9:30到10:15，9:30到10:00是30分，10:00到10:15是15分，30+15=45分钟。', label: '跨时计算', animationType: 'bounce' },
          { type: 'tip', content: '分钟不够减时，从小时借1时当60分钟再减。', label: '小贴士', animationType: 'pulse' },
          { type: 'tip', content: '时间轴辅助法：画一条线标出开始和结束时间，数中间经过的时间。', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u10l3q1', type: 'choice', question: '8:00到8:30经过了多少分钟？', options: ['20分钟', '30分钟', '40分钟', '60分钟'], answer: '30分钟', hint: '30-0=？', explanation: '8:00到8:30，30-0=30分钟。' },
          { id: 'm2u10l3q2', type: 'fill', question: '9:20到9:50经过了___分钟', answer: '30', hint: '50-20=？', explanation: '9:20到9:50，50-20=30分钟。' },
          { id: 'm2u10l3q3', type: 'flashcard', question: '7:30到8:00经过了几分钟？', answer: '30', hint: '60-30=？', explanation: '7:30到8:00，60-30=30分钟。' },
          { id: 'm2u10l3q4', type: 'choice', question: '一节课从8:30开始9:10结束，这节课多长时间？', options: ['30分钟', '40分钟', '50分钟', '80分钟'], answer: '40分钟', hint: '8:30到9:00是30分，9:00到9:10是10分', explanation: '8:30到9:00是30分，9:00到9:10是10分，30+10=40分钟。' },
          { id: 'm2u10l3q5', type: 'fill', question: '小明7:45出门8:05到学校，路上用了___分钟', answer: '20', hint: '7:45到8:00是15分，8:00到8:05是5分', explanation: '7:45到8:00是15分，8:00到8:05是5分，15+5=20分钟。' },
          { id: 'm2u10l3q6', type: 'choice', question: '【期末真题】小红看动画片从下午2:15看到2:55，她看了多长时间？', options: ['30分钟', '40分钟', '50分钟', '60分钟'], answer: '40分钟', hint: '55-15=？', explanation: '2:15到2:55，55-15=40分钟。计算经过时间如果容易搞混，画时间轴就好啦，你不是不会，只是需要换个方法！' },
          { id: 'm2u10l3q7', type: 'fill', question: '1时30分=___分', answer: '90', hint: '[认识钟表]（数学-认识钟表-第2课）1时=60分', explanation: '1时=60分，1时30分=60+30=90分。回溯一年级认识钟表知识。' }
        ]
      },
      {
        id: 'm2u10l4',
        title: '形成性评价',
        order: 4,
        teachingMethod: '独立测评 + 成长型思维',
        learningObjective: '我能综合运用时间知识完成测评',
        successCriteria: '①测评正确率达80%以上 ②能换算和计算时间',
        iDo: '家长读题，孩子独立完成，不做提示。',
        weDo: '完成后亲子一起核对答案，讨论错题原因。',
        youDo: '孩子独立完成所有题目，检查后提交。',
        parentTips: '【家长预习】综合检测认识时间，重点看换算和经过时间计算。\n共学四步：\n①对话出题：问"1时=几分？1分=几秒？怎么算经过时间？"\n②孩子应答："1时=60分，1分=60秒，结束时间-开始时间=经过时间"\n③答错引导：错题用钟表或时间轴重新做\n④快速检测：2时=几分、3分=几秒、8:00到8:40经过几分',
        funElement: '小游戏：闯关大挑战！全部答对获得"时间小达人"称号！',
        gsapAnimations: ['[GSAP:scaleIn|评价开始倒计时|0.6s|页面加载|back.out(1.7)]', '[GSAP:staggerFrom|题目卡片依次翻转出现|0.4s|倒计时结束|power2.out]'],
        images: ['[IMG:illustration|评价闯关场景|400x300|cartoon|png|形成性评价]', '[IMG:illustration|时间小达人奖杯|300x250|cartoon|png|评价奖励]'],
        content: [
          { type: 'text', content: '形成性评价时间到！让我们来检验一下你对认识时间的掌握情况吧！', animationType: 'reveal' },
          { type: 'tip', content: '思维导图：认识时间 → 时分秒(1时=60分，1分=60秒) → 时间换算(时变分×60，分变秒×60) → 时间计算(结束-开始=经过)', label: '思维导图', animationType: 'pulse' },
          { type: 'tip', content: '独立完成所有题目，不要偷看答案哦！做完后再检查一遍。', label: '温馨提示', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u10l4q1', type: 'choice', question: '1时等于多少分？', options: ['30分', '50分', '60分', '100分'], answer: '60分', hint: '分针走一圈是几小格', explanation: '1时=60分，分针走一圈60小格就是60分。' },
          { id: 'm2u10l4q2', type: 'fill', question: '3时=___分', answer: '180', hint: '60×3=？', explanation: '1时=60分，3时=60×3=180分。' },
          { id: 'm2u10l4q3', type: 'choice', question: '分针从12走到6，经过了多少分？', options: ['5分', '15分', '30分', '60分'], answer: '30分', hint: '走了6大格，每大格5分', explanation: '分针从12走到6，走了6大格，6×5=30分。' },
          { id: 'm2u10l4q4', type: 'fill', question: '8:15到8:45经过了___分钟', answer: '30', hint: '45-15=？', explanation: '8:15到8:45，45-15=30分钟。' },
          { id: 'm2u10l4q5', type: 'choice', question: '【期末真题】小华写作业从下午3:20开始，4:00结束，他写作业用了多长时间？', options: ['30分钟', '40分钟', '50分钟', '60分钟'], answer: '40分钟', hint: '3:20到4:00是40分', explanation: '3:20到4:00，60-20=40分钟。时间计算不熟练没关系，多画时间轴就好啦！' },
          { id: 'm2u10l4q6', type: 'fill', question: '4分=___秒', answer: '240', hint: '60×4=？', explanation: '1分=60秒，4分=60×4=240秒。' },
          { id: 'm2u10l4q7', type: 'fill', question: '钟面上有___个大格', answer: '12', hint: '[认识钟表]（数学-认识钟表-第1课）1到12共几格', explanation: '钟面上有12个大格，每个大格有5个小格。回溯一年级认识钟表知识。' }
        ]
      },
      {
        id: 'm2u10l5',
        title: '综合应用',
        order: 5,
        teachingMethod: '情境教学法 + 苏格拉底提问法',
        learningObjective: '我能用时间知识解决生活问题',
        successCriteria: '①能从生活场景分析时间 ②能正确计算和换算',
        iDo: '家长创设生活情境，引导孩子综合运用本单元知识解决问题。【CFU检查理解】家长问"怎么安排时间才合理？"',
        weDo: '亲子一起解决综合性问题，讨论多种解法。',
        youDo: '孩子独立完成综合应用题，尝试用不同方法解决。',
        parentTips: '【家长预习】用时间知识解决生活中的作息安排、活动时长等问题。\n共学四步：\n①对话出题：从7:30起床到8:00出门，问"有多少分钟？怎么安排？"\n②孩子应答："30分钟，刷牙5分洗脸5分吃饭15分剩5分准备"\n③答错引导：画时间轴标出7:30和8:00，帮孩子分配30分钟\n④快速检测：算一节课多长、算从家到学校用时、1时30分=几分',
        funElement: '小游戏：小小时间规划师！用时间知识规划自己的一天！',
        gsapAnimations: ['[GSAP:scaleIn|综合应用场景展开|0.6s|页面加载|back.out(1.7)]', '[GSAP:particleBurst|解题成功庆祝特效|0.8s|全部完成|power2.out]'],
        images: ['[IMG:illustration|综合应用生活场景|400x300|cartoon|png|综合应用]', '[IMG:illustration|一天作息时间表|300x250|cartoon|png|作息安排]'],
        content: [
          { type: 'text', content: '恭喜你完成了认识时间的学习！现在让我们把学到的知识综合运用，解决生活中的实际问题吧！', animationType: 'reveal' },
          { type: 'example', content: '📅 小明7:30起床，7:50吃早饭，8:10出门。起床到出门用了多少分钟？50+20=70分钟=1时10分！', label: '综合应用', animationType: 'bounce' },
          { type: 'tip', content: '综合应用题可能需要多步计算，先算每段时间再相加，注意满60分进1时。', label: '解题提示', animationType: 'pulse' },
          { type: 'tip', content: '苏格拉底提问法：用"从几点到几点？""经过了多长时间？""怎么换算？"引导孩子思考', label: '教学方法', animationType: 'pulse' },
        ],
        practiceQuestions: [
          { id: 'm2u10l5q1', type: 'choice', question: '小明7:30起床7:50吃早饭，起床到吃早饭用了多少分钟？', options: ['10分钟', '20分钟', '30分钟', '50分钟'], answer: '20分钟', hint: '50-30=？', explanation: '7:30到7:50，50-30=20分钟。' },
          { id: 'm2u10l5q2', type: 'fill', question: '一节课40分钟，两节课中间休息10分钟，从上课到第二节下课一共用了___分钟', answer: '90', hint: '40+10+40=？', explanation: '40+10+40=90分钟。' },
          { id: 'm2u10l5q3', type: 'choice', question: '电影从下午2:00开始2:45结束，电影放映了多长时间？', options: ['35分钟', '40分钟', '45分钟', '50分钟'], answer: '45分钟', hint: '45-0=？', explanation: '2:00到2:45，45-0=45分钟。' },
          { id: 'm2u10l5q4', type: 'fill', question: '小红8:05开始做作业8:35做完，她做作业用了___分钟', answer: '30', hint: '35-5=？', explanation: '8:05到8:35，35-5=30分钟。' },
          { id: 'm2u10l5q5', type: 'choice', question: '【期末真题】学校上午8:00上课，每节课40分钟，课间10分钟，第二节课几点下课？', options: ['8:40', '8:50', '9:30', '9:40'], answer: '9:30', hint: '第一节8:00-8:40，课间到8:50，第二节8:50-9:30', explanation: '第一节8:00-8:40，课间8:40-8:50，第二节8:50-9:30，9:30下课。这道题步骤多容易算混，一步一步来就对了，你一定能行！' },
          { id: 'm2u10l5q6', type: 'fill', question: '1时20分=___分', answer: '80', hint: '60+20=？', explanation: '1时=60分，1时20分=60+20=80分。' },
          { id: 'm2u10l5q7', type: 'fill', question: '5+6=___', answer: '11', hint: '[20以内进位加法]（数学-20以内进位加法-第1课）5+6=11', explanation: '5+6=11，用凑十法5+5=10，10+1=11。回溯一年级进位加法。' }
        ]
      }
    ]
  }
]
