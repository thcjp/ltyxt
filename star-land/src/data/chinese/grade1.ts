import type { Unit } from '@/types'

export const chineseGrade1: Unit[] = [
  {
    id: 'c1u1',
    title: '拼音王国（一）',
    subtitle: '认识单韵母和声母',
    order: 1,
    lessons: [
      {
        id: 'c1u1l1',
        title: 'a o e i u ü',
        order: 1,
        content: [
          { type: 'text', content: '拼音a，嘴巴张大aaa！像医生检查嗓子时说的"啊——"', animationType: 'typewriter' },
          { type: 'text', content: '拼音o，嘴巴圆圆ooo！像公鸡早上打鸣"喔喔喔"', animationType: 'typewriter' },
          { type: 'text', content: '拼音e，嘴巴扁扁eee！像白鹅在水中的倒影', animationType: 'typewriter' },
          { type: 'example', content: 'a像张大嘴，o像公鸡叫，e像白鹅影，i像小辣椒，u像小茶杯，ü像小鱼吐泡泡', label: '单韵母口诀', animationType: 'bounce' },
          { type: 'tip', content: '发音小窍门：发a时嘴张最大，发o时嘴变圆，发e时嘴变扁，发i时嘴角向两边拉，发u时嘴向前突出，发ü时嘴最圆最前。对着镜子练，看嘴型对不对！', label: '发音技巧', animationType: 'pulse' },
          { type: 'animation', content: '六个单韵母从空中飘落弹跳入场，配合口型动画放大缩小循环展示', animationType: 'bounce',
            animationConfig: {
              sceneType: 'pinyin',
              title: '单韵母a o e i u ü',
              pinyinConfig: { letters: ['a', 'o', 'e', 'i', 'u', 'ü'] },
              ttsNarration: '六个单韵母：a、o、e、i、u、ü，跟我一起念！',
            },
          },
        ],
        teachingMethod: '认知科学识字法',
        learningObjective: '我能正确认读本课拼音字母并准确发音，掌握口型要领',
        successCriteria: '①能正确认读本课所有拼音字母的发音 ②能区分易混淆的拼音并正确书写',
        iDo: '家长大声示范六个单韵母的发音，配合口型夸张展示，让孩子观察嘴形变化。',
        weDo: '亲子一起对着镜子发音，互相观察口型，一起念"a像张大嘴，o像公鸡叫"的口诀。',
        youDo: '孩子独立跟读录音，自己对着镜子练习六个单韵母的发音。',
        parentTips: '【家长预习】拼音a，嘴巴张大aaa！像医生检查嗓子时说的"啊——"\n共学四步：\n①对话出题：问孩子"哪个字母发音时嘴巴张得最大？"\n②孩子应答：a发音时嘴巴张得最大，就像医生说"啊——"一样。\n③答错引导：家长可以和孩子一起对着镜子练口型，用"口型对照法"——家长做口型让孩子猜是哪个拼音，再反过来\n④快速检测：哪个字母发音时嘴巴张得最大？、小鱼吐泡泡的韵母是哪个？、把单韵母按顺序排列：i、a、u、o、e、ü',
        funElement: '小游戏：嘴巴变变变！像照镜子一样做鬼脸，看谁的"a"嘴张得最大，谁的"ü"嘴最像小鱼吐泡泡！🐟',
        gsapAnimations: ['GSAP: 字母从空中飘落弹跳入场', 'GSAP: 口型动画放大缩小循环'],
        images: ['IMG: 六个单韵母配可爱动物插图', 'IMG: 口型示意图'],
        practiceQuestions: [
          {
            id: 'c1u1l1q1',
            type: 'choice',
            question: '哪个字母发音时嘴巴张得最大？',
            options: ['a', 'i', 'u'],
            answer: 'a',
            hint: '想想张大嘴巴的样子',
            explanation: 'a发音时嘴巴张得最大，就像医生说"啊——"一样。'
          },
          {
            id: 'c1u1l1q2',
            type: 'choice',
            question: '小鱼吐泡泡的韵母是哪个？',
            options: ['u', 'ü', 'i', 'e'],
            answer: 'ü',
            hint: '它的头上像有两个小点',
            explanation: 'ü的头上两点就像小鱼吐出的两个泡泡，所以叫"小鱼ü"。'
          },
          {
            id: 'c1u1l1q3',
            type: 'drag',
            question: '把单韵母按顺序排列：i、a、u、o、e、ü',
            answer: 'a,o,e,i,u,ü',
            hint: '按照课文的顺序来排',
            explanation: '六个单韵母的标准顺序是a、o、e、i、u、ü。'
          },
          {
            id: 'c1u1l1q4',
            type: 'choice',
            question: '【期末真题】下列字母中，哪个是单韵母？',
            options: ['b', 'a', 'm', 'f'],
            answer: 'a',
            hint: '单韵母只有6个：a、o、e、i、u、ü',
            explanation: 'a是单韵母，b、m、f都是声母。这是期末常考题！'
          },
          {
            id: 'c1u1l1q5',
            type: 'choice',
            question: '六个单韵母中，哪个发音时嘴向前突出？',
            options: ['a', 'u', 'e'],
            answer: 'u',
            hint: '想想哪个韵母像吹口哨',
            explanation: 'u发音时嘴向前突出成圆形，像吹口哨一样。'
          },
          {
            id: 'c1u1l1q6',
            type: 'choice',
            question: '你能用六个单韵母中的两个组成一个复韵母吗？',
            options: ['ai', 'ba', 'pa'],
            answer: 'ai',
            hint: '两个单韵母手拉手',
            explanation: 'a和i手拉手组成复韵母ai，单韵母可以组合成复韵母！ba和pa是声母加单韵母组成的音节，不是复韵母。'
          },
          {
            id: 'c1u1l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：六个单韵母按顺序是什么？（用逗号分隔）',
            answer: 'a,o,e,i,u,ü',
            hint: '[单韵母顺序]（语文一年级-第1单元）',
            explanation: '六个单韵母的标准顺序是a、o、e、i、u、ü。'
          }
        ]
      },
      {
        id: 'c1u1l2',
        title: 'b p m f d t n l',
        order: 2,
        content: [
          { type: 'text', content: '右下半圆b b b，右上半圆p p p！b和p就像一对双胞胎，肚子一个在右下，一个在右上', animationType: 'typewriter' },
          { type: 'text', content: '两个门洞m m m，一根拐杖f f f！m像两扇大门，f像老爷爷的拐杖', animationType: 'typewriter' },
          { type: 'text', content: '左下半圆d d d，伞把朝上t t t！d和b也是一对，d的肚子在左下', animationType: 'typewriter' },
          { type: 'example', content: 'b—爸(bà)、p—跑(pǎo)、m—妈(mā)、f—飞(fēi)、d—大(dà)、t—天(tiān)、n—你(nǐ)、l—来(lái)', label: '声母组词', animationType: 'bounce' },
          { type: 'tip', content: '区分b、d、p、q的小窍门：右下半圆b，左下半圆d，右上半圆p，左上半圆q。用手指在空中画一画，记住半圆在哪边！', label: '易混声母区分', animationType: 'pulse' },
          { type: 'animation', content: '声母卡片翻转揭示动画，b和p对比展示半圆位置差异', animationType: 'bounce',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '声母b p m f',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '❓', back: 'b', ttsText: 'b，右下半圆b b b' },
                  { id: 'c1', front: '❓', back: 'p', ttsText: 'p，右上半圆p p p' },
                  { id: 'c2', front: '❓', back: 'm', ttsText: 'm，两个门洞m m m' },
                  { id: 'c3', front: '❓', back: 'f', ttsText: 'f，一根拐杖f f f' },
                ],
              },
              ttsNarration: '声母b、p、m、f，跟我一起念！',
            },
          },
        ],
        teachingMethod: 'I Do→We Do→You Do',
        learningObjective: '我能正确认读本课拼音字母并准确发音，掌握口型要领',
        successCriteria: '①能正确认读本课所有拼音字母的发音 ②能区分易混淆的拼音并正确书写',
        iDo: '家长用手指在空中书写声母，边写边念"右下半圆b b b，右上半圆p p p"的口诀。',
        weDo: '亲子一起用手势比划声母形状，互相检查书写方向是否正确。',
        youDo: '孩子在练习本上独立书写八个声母，每个写三遍。',
        parentTips: '【家长预习】右下半圆b b b，右上半圆p p p！b和p就像一对双…\n共学四步：\n①对话出题：问孩子"右下半圆是哪个声母？"\n②孩子应答：b的竖线在左边，半圆在右下方，所以是"右下半圆b b b"。\n③答错引导：家长可以和孩子一起对着镜子练口型，用"口型对照法"——家长做口型让孩子猜是哪个拼音，再反过来\n④快速检测：右下半圆是哪个声母？、看卡片快速读出声母、哪个声母像一根拐杖？',
        funElement: '笑话时间：b和p吵架了，b说"我肚子在右边！"p说"我肚子也在右边！"——等等，p的肚子在上面！😄',
        gsapAnimations: ['GSAP: 声母卡片翻转揭示动画'],
        images: ['IMG: 声母手势示意图', 'IMG: b和p对比图'],
        practiceQuestions: [
          {
            id: 'c1u1l2q1',
            type: 'choice',
            question: '右下半圆是哪个声母？',
            options: ['b', 'p', 'd'],
            answer: 'b',
            hint: '想想半圆在竖线的哪一边',
            explanation: 'b的竖线在左边，半圆在右下方，所以是"右下半圆b b b"。'
          },
          {
            id: 'c1u1l2q2',
            type: 'flashcard',
            question: '看卡片快速读出声母',
            answer: 'm',
            hint: '两个门洞',
            explanation: 'm的形状像两个门洞，所以叫"两个门洞m m m"。'
          },
          {
            id: 'c1u1l2q3',
            type: 'choice',
            question: '哪个声母像一根拐杖？',
            options: ['f', 't', 'l'],
            answer: 'f',
            hint: '拐杖上面还有一横',
            explanation: 'f的形状像一根拐杖，上面还有一横，所以叫"一根拐杖f f f"。'
          },
          {
            id: 'c1u1l2q4',
            type: 'fill',
            question: 'b和d怎么区分？b的半圆在___边',
            answer: '右',
            acceptableAnswers: ['右', '右下', '右下方'],
            hint: '回忆口诀：右下半圆b',
            explanation: 'b的半圆在右下方（右边），d的半圆在左下方（左边），这就是区分b和d的窍门。'
          },
          {
            id: 'c1u1l2q5',
            type: 'choice',
            question: '用声母b组一个音节，下面哪个是对的？',
            options: ['bā', 'ǎb', 'āb'],
            answer: 'bā',
            hint: '声母在前还是韵母在前',
            explanation: '拼音规则是声母在前韵母在后，所以bā是正确的，声母b在前面。'
          },
          {
            id: 'c1u1l2q6',
            type: 'choice',
            question: '给"大"字加一横能变成什么字？',
            options: ['天', '太', '木'],
            answer: '天',
            hint: '在"大"字上面加一横',
            explanation: '"大"字上面加一横就变成了"天"字，汉字真有趣！'
          },
          {
            id: 'c1u1l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：b和p怎么区分？b的半圆在___边',
            answer: '右下',
            acceptableAnswers: ['右下', '右下方'],
            hint: '[声母区分]（语文一年级-第1单元）',
            explanation: 'b的半圆在右下方，p的半圆在右上方，口诀：右下半圆b，右上半圆p。'
          }
        ]
      },
      {
        id: 'c1u1l3',
        title: 'g k h j q x',
        order: 3,
        content: [
          { type: 'text', content: '9字加弯g g g！g的形状就像数字9多了一个小弯钩，像一只可爱的小鸽子', animationType: 'typewriter' },
          { type: 'text', content: '蝌蚪喝水k k k！k的一竖像水草，右边的笔画像小蝌蚪在喝水', animationType: 'typewriter' },
          { type: 'text', content: '一把椅子h h h！h的形状就像一把小椅子，可以坐上去', animationType: 'typewriter' },
          { type: 'example', content: 'j q x和ü相拼时要去掉两点：ju、qu、xu，虽然写的时候没有两点，但读音还是ü的音', label: '拼读规则', animationType: 'bounce' },
          { type: 'tip', content: '记忆口诀：j q x真淘气，见到ü眼就挖去！挖去两点还读ü，可别读成u哦！', label: 'j q x与ü的规则', animationType: 'pulse' },
          { type: 'animation', content: '声母与实物形状变形动画，g变9字，k变蝌蚪，h变椅子', animationType: 'bounce',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '声母g k h',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '9️⃣', back: 'g', ttsText: 'g，9字加弯g g g' },
                  { id: 'c1', front: '🐸', back: 'k', ttsText: 'k，蝌蚪咬草k k k' },
                  { id: 'c2', front: '🪑', back: 'h', ttsText: 'h，一把椅子h h h' },
                ],
              },
              ttsNarration: '声母g、k、h，9字蝌蚪和椅子！',
            },
          },
        ],
        teachingMethod: '多感官联想法',
        learningObjective: '我能正确认读本课拼音字母并准确发音，掌握口型要领',
        successCriteria: '①能正确认读本课所有拼音字母的发音 ②能区分易混淆的拼音并正确书写',
        iDo: '家长用实物演示声母形状，如用剪刀展示x的形状，用9字展示g的形状。',
        weDo: '亲子一起找家里的物品，看看哪些像这些声母的形状。',
        youDo: '孩子独立完成声母与图片的连线匹配练习。',
        parentTips: '【家长预习】9字加弯g g g！g的形状就像数字9多了一个小弯钩，像…\n共学四步：\n①对话出题：问孩子"哪个声母像数字9？"\n②孩子应答：g的形状就像数字9，所以叫"9字加弯g g g"。\n③答错引导：家长可以和孩子一起对着镜子练口型，用"口型对照法"——家长做口型让孩子猜是哪个拼音，再反过来\n④快速检测：哪个声母像数字9？、j、q、x和ü相拼时，ü要去掉（    ）、把声母拖到对应的图片上',
        funElement: '歇后语：j q x见ü——眼睛都没了！因为ü的两点被它们"挖走"啦！😂',
        gsapAnimations: ['GSAP: 声母与实物形状变形动画'],
        images: ['IMG: 声母与实物对照图', 'IMG: j q x和ü拼读规则图'],
        practiceQuestions: [
          {
            id: 'c1u1l3q1',
            type: 'choice',
            question: '哪个声母像数字9？',
            options: ['g', 'q', 'j'],
            answer: 'g',
            hint: '想想9字的样子',
            explanation: 'g的形状就像数字9，所以叫"9字加弯g g g"。'
          },
          {
            id: 'c1u1l3q2',
            type: 'fill',
            question: 'j、q、x和ü相拼时，ü要去掉___',
            answer: '两点',
            hint: '想想ü的头上有什么',
            explanation: 'j、q、x和ü相拼时，ü要去掉两点，但读音还是ü。'
          },
          {
            id: 'c1u1l3q3',
            type: 'drag',
            question: '把声母拖到对应的图片上',
            answer: 'g-鸽子,k-蝌蚪,h-椅子',
            hint: '想想每个声母像什么',
            explanation: 'g像9字鸽子，k像蝌蚪喝水，h像一把小椅子。'
          },
          {
            id: 'c1u1l3q4',
            type: 'fill',
            question: 'j、q、x和ü相拼时，ü要去掉两点，但___还是ü的音',
            answer: '读音',
            hint: '写法变了，读音变了吗',
            explanation: 'j、q、x和ü相拼时，ü去掉两点，但读音还是ü，不能读成u。'
          },
          {
            id: 'c1u1l3q5',
            type: 'choice',
            question: '下面哪个音节的韵母实际上是ü？',
            options: ['ju', 'gu', 'ku'],
            answer: 'ju',
            hint: '想想哪个声母会让ü去掉两点',
            explanation: 'ju中的u实际上是ü去掉两点后的写法，因为j和ü相拼时ü要去掉两点。'
          },
          {
            id: 'c1u1l3q6',
            type: 'choice',
            question: '【期末真题】"j q x真淘气，见到ü眼就挖去"，挖去两点后还读什么？',
            options: ['u', 'ü', 'i'],
            answer: 'ü',
            hint: '虽然写法变了，但读音不变',
            explanation: 'j、q、x和ü相拼时，ü去掉两点，但读音还是ü。这是期末常考的拼读规则！'
          },
          {
            id: 'c1u1l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：j、q、x和ü相拼时，ü要去掉什么？',
            answer: '两点',
            hint: '[拼读规则]（语文一年级-第1单元）',
            explanation: 'j、q、x和ü相拼时，ü要去掉两点，但读音还是ü。'
          }
        ]
      },
      {
        id: 'c1u1l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的拼音知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '拼音王国复习口诀：单韵母6个a o e i u ü，声母23个要记牢，整体认读16个不用拼！', label: '复习口诀', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的拼音卡片，让孩子逐一认读，记录掌握情况。',
        weDo: '亲子一起做拼音闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的拼音多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的拼音知识吧！通过这些练习，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：拼音大闯关！答对一题前进一步，全部答对就是拼音大王！👑',
        gsapAnimations: ['GSAP: 拼音卡片翻转评价动画'],
        images: ['IMG: 拼音评价闯关图'],
        practiceQuestions: [
          {
            id: 'c1u1l4q1',
            type: 'choice',
            question: '下面哪个是单韵母？',
            options: ['b', 'ü', 'f'],
            answer: 'ü',
            hint: '单韵母只有6个',
            explanation: 'ü是单韵母，b和f是声母。'
          },
          {
            id: 'c1u1l4q2',
            type: 'fill',
            question: '六个单韵母按顺序是a、o、e、___、u、ü',
            answer: 'i',
            hint: '第四个单韵母',
            explanation: '六个单韵母的顺序是a、o、e、i、u、ü。'
          },
          {
            id: 'c1u1l4q3',
            type: 'choice',
            question: '"右下半圆"是哪个声母？',
            options: ['d', 'p', 'b'],
            answer: 'b',
            hint: '回忆声母口诀',
            explanation: '右下半圆b b b，b的半圆在右下方。'
          },
          {
            id: 'c1u1l4q4',
            type: 'fill',
            question: 'j、q、x和ü相拼时，ü要去掉___',
            answer: '两点',
            hint: '回忆拼读规则',
            explanation: 'j、q、x和ü相拼时，ü要去掉两点，但读音还是ü。'
          },
          {
            id: 'c1u1l4q5',
            type: 'choice',
            question: '【期中真题】下列哪个声母和ü相拼时要去掉两点？',
            options: ['m', 'q', 'l'],
            answer: 'q',
            hint: '只有三个声母有这个规则',
            explanation: 'j、q、x和ü相拼时要去掉两点，q就是其中之一。这是期中常考题！'
          },
          {
            id: 'c1u1l4q6',
            type: 'choice',
            question: 'g和单韵母能组成几个音节？',
            options: ['3个', '4个', '6个'],
            answer: '3个',
            hint: 'g可以和哪些单韵母相拼',
            explanation: 'g可以和a、e、u三个单韵母相拼，能组成3个音节！'
          },
          {
            id: 'c1u1l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：声母b的口诀是什么？右下半圆___',
            answer: 'b',
            hint: '[声母口诀]（语文一年级-第1单元）',
            explanation: '右下半圆b b b，这是记忆声母b的口诀。'
          }
        ]
      },
      {
        id: 'c1u1l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了拼音王国第一单元，让我们把所有知识综合起来，用拼音来读儿歌、认汉字吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着用拼音给家人写一张小纸条，或者用拼音读一本绘本，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '拼音应用歌：声母韵母手拉手，拼出音节读出口，整体认读不用拼，十六兄弟要记熟！', label: '应用口诀', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长用拼音写一张小纸条，让孩子拼读出来，示范拼音的实际应用。',
        weDo: '亲子一起用拼音给对方写小纸条，互相拼读，看谁写得多读得准。',
        youDo: '孩子独立用拼音写一段话，并尝试拼读拼音绘本。',
        parentTips: '【家长预习】学完了拼音王国第一单元，让我们把所有知识综合起来，用拼音…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：拼音密码信！用拼音给妈妈写一封密码信，让妈妈拼出来看看你写了什么！✉️',
        gsapAnimations: ['GSAP: 拼音组合拼读动画'],
        images: ['IMG: 拼音应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u1l5q1',
            type: 'choice',
            question: '"māma"这个音节的声母是什么？',
            options: ['m', 'a', 'ma'],
            answer: 'm',
            hint: '音节开头的辅音',
            explanation: '"māma"的声母是m，韵母是a。'
          },
          {
            id: 'c1u1l5q2',
            type: 'fill',
            question: '用拼音写出"爸爸"：___',
            answer: 'bàba',
            hint: '先想声母再想韵母',
            explanation: '"爸爸"的拼音是bàba，声母b，韵母a。'
          },
          {
            id: 'c1u1l5q3',
            type: 'drag',
            question: '把声母和韵母拖到一起组成音节',
            answer: 'b-a-ba,m-a-ma,d-a-da',
            hint: '声母在前韵母在后',
            explanation: 'b+a=ba，m+a=ma，d+a=da，声母和韵母拼在一起就是音节。'
          },
          {
            id: 'c1u1l5q4',
            type: 'fill',
            question: '"大雁往南飞"用拼音写第一个字"大"：___',
            answer: 'dà',
            hint: '声母d，韵母a，四声',
            explanation: '"大"的拼音是dà，声母d，韵母a，第四声。'
          },
          {
            id: 'c1u1l5q5',
            type: 'choice',
            question: '下面哪个音节的声母是翘舌音？',
            options: ['zū', 'zhū', 'sū'],
            answer: 'zhū',
            hint: '翘舌音声母有哪些',
            explanation: 'zh是翘舌音，z和s是平舌音，所以zhū的声母是翘舌音。'
          },
          {
            id: 'c1u1l5q6',
            type: 'choice',
            question: '【期末真题】下列音节中，哪个是整体认读音节？',
            options: ['zhā', 'zhi', 'zho'],
            answer: 'zhi',
            hint: '整体认读音节不用拼',
            explanation: 'zhi是整体认读音节，不用拼直接读；zhā和zho需要拼读。这是期末常考题！'
          },
          {
            id: 'c1u1l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：声母和韵母拼在一起叫什么？',
            answer: '音节',
            hint: '[音节组成]（语文一年级-第1单元）',
            explanation: '声母和韵母拼在一起就组成了音节，如b+a=ba。'
          }
        ]
      }
    ]
  },
  {
    id: 'c1u2',
    title: '拼音王国（二）',
    subtitle: '学习复韵母和鼻韵母',
    order: 2,
    lessons: [
      {
        id: 'c1u2l1',
        title: 'z c s zh ch sh r',
        order: 1,
        content: [
          { type: 'text', content: '平舌音z c s：舌头平放，舌尖抵住上齿背发音。像小蛇发出的"嘶嘶"声', animationType: 'typewriter' },
          { type: 'text', content: '翘舌音zh ch sh r：舌头翘起，舌尖靠近硬腭发音。像知了叫"知知知"', animationType: 'typewriter' },
          { type: 'example', content: '平舌音：写字(zì)、刺猬(cì)、三(sān)个\n翘舌音：纸(zhǐ)张、吃饭(chī)、老师(shī)、日出(rì)', label: '平翘舌音对比', animationType: 'bounce' },
          { type: 'dialogue', content: '小z说："我舌头平平的！"\n大zh说："我舌头翘起来的！"\n小z说："我们长得像，但舌头不一样！"', label: '平翘舌对话', animationType: 'reveal' },
          { type: 'tip', content: '区分平翘舌音的小窍门：用手摸着下巴发音，平舌音下巴不动，翘舌音下巴会微微上抬。多练几次就能感觉到了！', label: '发音区分技巧', animationType: 'pulse' },
          { type: 'animation', content: '舌头位置示意图动态切换，展示平舌音和翘舌音的舌头位置差异', animationType: 'bounce',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '平舌音与翘舌音',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '👅', back: 'z c s', ttsText: '平舌音z c s，舌尖抵住上齿背' },
                  { id: 'c1', front: '👅', back: 'zh ch sh', ttsText: '翘舌音zh ch sh，舌尖翘起抵住硬腭' },
                ],
              },
              ttsNarration: '平舌音z c s，舌尖平放；翘舌音zh ch sh，舌尖翘起来！',
            },
          },
        ],
        teachingMethod: '对比辨析法',
        learningObjective: '我能正确认读本课拼音字母并准确发音，掌握口型要领',
        successCriteria: '①能正确认读本课所有拼音字母的发音 ②能区分易混淆的拼音并正确书写',
        iDo: '家长分别示范平舌音和翘舌音的发音，用手指指示舌头位置。',
        weDo: '亲子一起做"舌头体操"——平放发z c s，翘起发zh ch sh r。',
        youDo: '孩子独立听音分类，把平舌音和翘舌音分别写在两个圈里。',
        parentTips: '【家长预习】平舌音z c s：舌头平放，舌尖抵住上齿背发音。像小蛇发…\n共学四步：\n①对话出题：问孩子"下面哪个是翘舌音？"\n②孩子应答：zh是翘舌音，发音时舌尖要翘起靠近硬腭；z是平舌音，舌尖平放。\n③答错引导：家长可以和孩子一起对着镜子练口型，用"口型对照法"——家长做口型让孩子猜是哪个拼音，再反过来\n④快速检测：下面哪个是翘舌音？、快速判断：听到的是平舌音还是翘舌音？、"写字"的"字"声母是（    ）',
        funElement: '小游戏：舌头跷跷板！平放是平舌音，翘起是翘舌音，看谁的舌头跷跷板最灵活！👅',
        gsapAnimations: ['GSAP: 舌头位置示意图动态切换'],
        images: ['IMG: 平舌音与翘舌音舌位对比图'],
        practiceQuestions: [
          {
            id: 'c1u2l1q1',
            type: 'choice',
            question: '下面哪个是翘舌音？',
            options: ['z', 'zh', 's'],
            answer: 'zh',
            hint: '翘舌音舌头要翘起来',
            explanation: 'zh是翘舌音，发音时舌尖要翘起靠近硬腭；z是平舌音，舌尖平放。'
          },
          {
            id: 'c1u2l1q2',
            type: 'flashcard',
            question: '快速判断：听到的是平舌音还是翘舌音？',
            answer: '平舌音',
            hint: '注意舌头有没有翘起来',
            explanation: 'c是平舌音，发音时舌尖平放抵住上齿背。'
          },
          {
            id: 'c1u2l1q3',
            type: 'fill',
            question: '"写字"的"字"声母是___',
            answer: 'z',
            hint: '这个音舌头是平的',
            explanation: '"字"的拼音是zì，声母z是平舌音。'
          },
          {
            id: 'c1u2l1q4',
            type: 'choice',
            question: '【期末真题】"得(dé děi)走得(de děi)快一些"，正确的读音是？',
            options: ['dé děi', 'děi de', 'dé de', 'děi děi'],
            answer: 'děi de',
            hint: '"得"表示"必须"读děi，"得"作补语助词读de（轻声）',
            explanation: '"我得(děi)走得(de)快一些"——"得"表示必须读děi，轻声读de。这是期末常考的多音字题！'
          },
          {
            id: 'c1u2l1q5',
            type: 'choice',
            question: '下面哪组都是平舌音？',
            options: ['z c s', 'zh ch sh', 'j q x'],
            answer: 'z c s',
            hint: '平舌音舌头平放',
            explanation: 'z c s是平舌音，发音时舌尖平放；zh ch sh是翘舌音。'
          },
          {
            id: 'c1u2l1q6',
            type: 'choice',
            question: '"写字"和"纸张"中，哪个词的声母是平舌音？',
            options: ['写字', '纸张'],
            answer: '写字',
            hint: 'z是平舌音还是翘舌音',
            explanation: '"写字"的"字"声母z是平舌音；"纸张"的"纸"声母zh是翘舌音。'
          },
          {
            id: 'c1u2l1q7',
            type: 'fill',
            question: '回顾前面学过的知识：六个单韵母是哪些？（用逗号分隔）',
            answer: 'a,o,e,i,u,ü',
            hint: '[单韵母]（语文一年级-第2单元）',
            explanation: '六个单韵母是a、o、e、i、u、ü，这是第1单元学过的内容。'
          }
        ]
      },
      {
        id: 'c1u2l2',
        title: 'ai ei ui ao ou iu',
        order: 2,
        content: [
          { type: 'text', content: '复韵母是由两个单韵母手拉手组成的！发音时从前一个元音滑向后一个元音，像滑滑梯一样', animationType: 'typewriter' },
          { type: 'text', content: 'ai：从a滑向i，"挨"的音。ei：从e滑向i，"诶"的音。ui：从u滑向i，"威"的音', animationType: 'typewriter' },
          { type: 'text', content: 'ao：从a滑向o，"凹"的音。ou：从o滑向u，"欧"的音。iu：从i滑向u，"优"的音', animationType: 'typewriter' },
          { type: 'example', content: '标调口诀：有a不放过，没a找o e，i u并列标在后。\nài标在a上，éi标在e上，uǐ中i和u并列标在后面的i上', label: '复韵母标调规则', animationType: 'bounce' },
          { type: 'tip', content: '复韵母发音要领：嘴巴要滑动！不能停在第一个音上，要像滑滑梯一样从第一个音滑到第二个音。对着镜子看嘴巴的变化！', label: '发音要领', animationType: 'pulse' },
          { type: 'animation', content: '声调符号在韵母上滑动标注动画，复韵母滑滑梯示意图', animationType: 'bounce',
            animationConfig: {
              sceneType: 'pinyin',
              title: '四声调',
              pinyinConfig: { letters: ['ā', 'á', 'ǎ', 'à'] },
              ttsNarration: '一声平，二声扬，三声拐弯，四声降！',
            },
          },
        ],
        teachingMethod: '滑动拼读法',
        learningObjective: '我能正确认读本课拼音字母并准确发音，掌握口型要领',
        successCriteria: '①能正确认读本课所有拼音字母的发音 ②能区分易混淆的拼音并正确书写',
        iDo: '家长示范复韵母的滑动发音，从前一个元音滑向后一个元音，动作夸张。',
        weDo: '亲子一起做"滑滑梯"游戏——声音从高滑到低，像滑滑梯一样读复韵母。',
        youDo: '孩子独立给复韵母标声调并练习拼读。',
        parentTips: '【家长预习】复韵母是由两个单韵母手拉手组成的！发音时从前一个元音滑向…\n共学四步：\n①对话出题：问孩子"复韵母ai的标调应该标在哪个字母上？"\n②孩子应答：标调规则"有a不放过"，ai中有a，所以标在a上。\n③答错引导：家长可以和孩子一起对着镜子练口型，用"口型对照法"——家长做口型让孩子猜是哪个拼音，再反过来\n④快速检测：复韵母ai的标调应该标在哪个字母上？、"水杯"的"杯"韵母是（    ）、把复韵母拖到正确的声调位置上',
        funElement: '笑话：ai说"我爱排第一！"ei说"诶，我也想！"ui说"喂，别吵了！"——它们三个吵了一节课！🤣',
        gsapAnimations: ['GSAP: 声调符号在韵母上滑动标注动画'],
        images: ['IMG: 复韵母滑滑梯示意图'],
        practiceQuestions: [
          {
            id: 'c1u2l2q1',
            type: 'choice',
            question: '复韵母ai的标调应该标在哪个字母上？',
            options: ['a', 'i'],
            answer: 'a',
            hint: '想想标调口诀',
            explanation: '标调规则"有a不放过"，ai中有a，所以标在a上。'
          },
          {
            id: 'c1u2l2q2',
            type: 'fill',
            question: '"水杯"的"杯"韵母是___',
            answer: 'ei',
            hint: '嘴巴从e滑向i',
            explanation: '"杯"的拼音是bēi，韵母是ei。'
          },
          {
            id: 'c1u2l2q3',
            type: 'drag',
            question: '把复韵母拖到正确的声调位置上',
            answer: 'ài-四声,éi-二声,uǐ-三声',
            hint: '有a标a，没a找o e',
            explanation: 'ài标在a上，éi标在e上，uǐ中i u并列标在后，所以标在i上。'
          },
          {
            id: 'c1u2l2q4',
            type: 'choice',
            question: '复韵母ui的标调应该标在哪个字母上？',
            options: ["u","i"],
            answer: 'i',
            hint: 'i u并列标在后',
            explanation: '标调规则"i u并列标在后"，ui中i在后面，所以标在i上。'
          },
          {
            id: 'c1u2l2q5',
            type: 'choice',
            question: '用复韵母ai组一个词：___',
            options: ['爱心', '太阳', '月亮', '星星'],
            answer: '爱心',
            hint: 'ai开头的词',
            explanation: '可以用ai组词：爱心、矮小等。'
          },
          {
            id: 'c1u2l2q6',
            type: 'choice',
            question: '【期末真题】"水杯"的"杯"韵母标调在哪个字母上？',
            options: ["e","i"],
            answer: 'e',
            hint: 'ei的标调规则',
            explanation: 'ei的标调在e上，因为没a找o e。这是期末常考题！'
          },
          {
            id: 'c1u2l2q7',
            type: 'fill',
            question: '回顾前面学过的知识：复韵母ai由哪两个单韵母组成？',
            answer: 'a和i',
            hint: '[复韵母组成]（语文一年级-第2单元）',
            explanation: '复韵母ai由单韵母a和i组成，两个单韵母手拉手。'
          }
        ]
      },
      {
        id: 'c1u2l3',
        title: 'an en in un ün ang eng ing ong',
        order: 3,
        content: [
          { type: 'text', content: '前鼻韵母an en in un ün：结尾是n，舌尖抵住上齿龈，鼻子出气。像小猫叫"嗯~"', animationType: 'typewriter' },
          { type: 'text', content: '后鼻韵母ang eng ing ong：结尾是ng，舌根抵住软腭，鼻子出气。像小羊叫"咩~"', animationType: 'typewriter' },
          { type: 'example', content: '前鼻韵母：天(tiān)空、人(rén)们、森(lín)林、春(chūn)天、云(yún)朵\n后鼻韵母：方(fāng)向、灯(dēng)光、星(xīng)星、空(kōng)气', label: '鼻韵母组词', animationType: 'bounce' },
          { type: 'dialogue', content: '前鼻n说："我舌尖抵上面！"\n后鼻ng说："我舌根抵后面！"\n小朋友说："原来鼻子也能帮忙发音！"', label: '前后鼻对话', animationType: 'reveal' },
          { type: 'tip', content: '区分前后鼻音：发前鼻音时用手指点鼻尖，感觉鼻尖振动；发后鼻音时用手摸鼻子根部，感觉那里振动。试试看！', label: '前后鼻区分技巧', animationType: 'pulse' },
          { type: 'animation', content: '前后鼻韵母分组弹出动画，鼻韵母发音部位示意图', animationType: 'bounce',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '前鼻韵母与后鼻韵母',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '👃', back: 'an en in', ttsText: '前鼻韵母an en in，舌尖抵住上齿龈' },
                  { id: 'c1', front: '👃', back: 'ang eng ing', ttsText: '后鼻韵母ang eng ing，舌根抵住软腭' },
                ],
              },
              ttsNarration: '前鼻韵母舌尖抵上齿，后鼻韵母舌根抵软腭！',
            },
          },
        ],
        teachingMethod: '分类记忆法',
        learningObjective: '我能正确认读本课拼音字母并准确发音，掌握口型要领',
        successCriteria: '①能正确认读本课所有拼音字母的发音 ②能区分易混淆的拼音并正确书写',
        iDo: '家长把鼻韵母分成前鼻韵母和后鼻韵母两组，分别示范发音差异。',
        weDo: '亲子一起玩"鼻子感应器"游戏——前鼻音用手指点鼻尖，后鼻音用手摸鼻子根部。',
        youDo: '孩子独立完成前鼻韵母和后鼻韵母的分类练习。',
        parentTips: '【家长预习】前鼻韵母an en in un ün：结尾是n，舌尖抵住…\n共学四步：\n①对话出题：问孩子"下面哪个是前鼻韵母？"\n②孩子应答：en以n结尾，是前鼻韵母；ang和ing以ng结尾，是后鼻韵母。\n③答错引导：家长可以和孩子一起对着镜子练口型，用"口型对照法"——家长做口型让孩子猜是哪个拼音，再反过来\n④快速检测：下面哪个是前鼻韵母？、"天空"的"空"韵母是（    ）、把鼻韵母分到前鼻韵母和后鼻韵母两组',
        funElement: '小游戏：鼻子侦探！前鼻音轻轻碰鼻尖，后鼻音用力按鼻根，看谁鼻子最灵敏！👃',
        gsapAnimations: ['GSAP: 前后鼻韵母分组弹出动画'],
        images: ['IMG: 鼻韵母发音部位示意图'],
        practiceQuestions: [
          {
            id: 'c1u2l3q1',
            type: 'choice',
            question: '下面哪个是前鼻韵母？',
            options: ['ang', 'en', 'ing'],
            answer: 'en',
            hint: '前鼻韵母以n结尾',
            explanation: 'en以n结尾，是前鼻韵母；ang和ing以ng结尾，是后鼻韵母。'
          },
          {
            id: 'c1u2l3q2',
            type: 'fill',
            question: '"天空"的"空"韵母是___',
            answer: 'ong',
            hint: '嘴巴张圆发后鼻音',
            explanation: '"空"的拼音是kōng，韵母是ong，属于后鼻韵母。'
          },
          {
            id: 'c1u2l3q3',
            type: 'drag',
            question: '把鼻韵母分到前鼻韵母和后鼻韵母两组',
            answer: '前鼻:an,en,in,un,ün;后鼻:ang,eng,ing,ong',
            hint: '看结尾是n还是ng',
            explanation: '以n结尾的是前鼻韵母：an、en、in、un、ün；以ng结尾的是后鼻韵母：ang、eng、ing、ong。'
          },
          {
            id: 'c1u2l3q4',
            type: 'choice',
            question: '"森林"的"林"韵母属于哪一类？',
            options: ['前鼻韵母', '后鼻韵母', '单韵母'],
            answer: '前鼻韵母',
            hint: '先想"林"的拼音，再看韵母以什么结尾',
            explanation: '"林"的拼音是lín，韵母是in，以n结尾，所以是前鼻韵母。'
          },
          {
            id: 'c1u2l3q5',
            type: 'fill',
            question: '"灯光"的"灯"韵母是___',
            answer: 'eng',
            hint: '后鼻韵母',
            explanation: '"灯"的拼音是dēng，韵母是eng，属于后鼻韵母。'
          },
          {
            id: 'c1u2l3q6',
            type: 'choice',
            question: '前鼻音n和后鼻音ng的发音区别是什么？',
            options: ["n舌尖抵上齿龈，ng舌根抵软腭","没有区别","n声音大ng声音小"],
            answer: 'n舌尖抵上齿龈，ng舌根抵软腭',
            hint: '发音部位不同',
            explanation: '前鼻音n舌尖抵住上齿龈，后鼻音ng舌根抵住软腭，发音部位不同。'
          },
          {
            id: 'c1u2l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：前鼻韵母的鼻音用什么字母表示？',
            answer: 'n',
            hint: '[前鼻韵母]（语文一年级-第2单元）',
            explanation: '前鼻韵母以n结尾，发音时舌尖抵住上齿龈。'
          }
        ]
      },
      {
        id: 'c1u2l4',
        title: '整体认读音节',
        order: 4,
        content: [
          { type: 'text', content: '有些音节不用拼，直接读出来就好！它们叫"整体认读音节"，就像一个整体，不能拆开拼', animationType: 'typewriter' },
          { type: 'text', content: '第一组：zhi、chi、shi、ri——翘舌整体认读，跟声母zh、ch、sh、r读音一样，但读得更长更响', animationType: 'typewriter' },
          { type: 'text', content: '第二组：zi、ci、si——平舌整体认读，跟声母z、c、s读音一样，但读得更长更响', animationType: 'typewriter' },
          { type: 'text', content: '第三组：yi、wu、yu——跟单韵母i、u、ü读音一样，前面加了y或w', animationType: 'typewriter' },
          { type: 'text', content: '第四组：ye、yue、yuan、yin、yun、ying——这些也是整体认读，不用拼，直接读！', animationType: 'typewriter' },
          { type: 'example', content: 'zhi（织毛衣的织）、chi（吃苹果的吃）、shi（狮子的狮）\nzi（自己的自）、ci（刺猬的刺）、si（丝线的丝）\nyi（衣服的衣）、wu（乌鸦的乌）、yu（鱼的鱼）\nye（椰子的椰）、yue（月亮的月）、yin（音乐的音）、yun（白云的云）、ying（老鹰的鹰）', label: '整体认读音节组词', animationType: 'bounce' },
          { type: 'tip', content: '记住口诀：整体认读不用拼，16个兄弟要记清！zhi chi shi ri zi ci si，yi wu yu ye yue yuan yin yun ying', label: '记忆口诀', animationType: 'pulse' },
          { type: 'animation', content: '16个整体认读音节卡片依次翻转揭示动画，分组弹出展示', animationType: 'bounce',
            animationConfig: {
              sceneType: 'pinyin',
              title: '整体认读音节',
              pinyinConfig: { letters: ['zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying'] },
              ttsNarration: '整体认读音节不用拼，直接读！跟我一起念！',
            },
          },
        ],
        teachingMethod: '分组记忆法',
        learningObjective: '我能正确认读本课拼音字母并准确发音，掌握口型要领',
        successCriteria: '①能正确认读本课所有拼音字母的发音 ②能区分易混淆的拼音并正确书写',
        iDo: '家长按四组分别示范整体认读音节的发音，强调不用拼直接读。',
        weDo: '亲子一起念整体认读音节口诀，互相考对方属于哪一组。',
        youDo: '孩子独立读出16个整体认读音节，并能说出每个音节的组词。',
        parentTips: '【家长预习】有些音节不用拼，直接读出来就好！它们叫"整体认读音节"，…\n共学四步：\n①对话出题：问孩子"下面哪个是整体认读音节？"\n②孩子应答：zhi是整体认读音节，不用拼读，直接读"织"的音。zhā和zho需要拼读。\n③答错引导：家长可以和孩子一起对着镜子练口型，用"口型对照法"——家长做口型让孩子猜是哪个拼音，再反过来\n④快速检测：下面哪个是整体认读音节？、把整体认读音节分到正确的组、"衣服"的"衣"用整体认读音节表示是（    ）',
        funElement: '小游戏：整体认读接力赛！家长说前半，孩子接后半。比如家长说"zhi chi shi"，孩子接"ri"！',
        gsapAnimations: ['GSAP: 16个音节卡片依次翻转揭示', 'GSAP: 分组弹出高亮动画'],
        images: ['IMG: 整体认读音节分组图', 'IMG: 每个音节配对应插图'],
        practiceQuestions: [
          {
            id: 'c1u2l4q1',
            type: 'choice',
            question: '下面哪个是整体认读音节？',
            options: ['zhā', 'zhi', 'zho'],
            answer: 'zhi',
            hint: '整体认读音节不用拼，直接读',
            explanation: 'zhi是整体认读音节，不用拼读，直接读"织"的音。zhā和zho需要拼读。'
          },
          {
            id: 'c1u2l4q2',
            type: 'drag',
            question: '把整体认读音节分到正确的组',
            answer: '翘舌:zhi,chi,shi,ri;平舌:zi,ci,si',
            hint: '看声母是翘舌还是平舌',
            explanation: 'zhi、chi、shi、ri是翘舌整体认读，zi、ci、si是平舌整体认读。'
          },
          {
            id: 'c1u2l4q3',
            type: 'fill',
            question: '"衣服"的"衣"用整体认读音节表示是___',
            answer: 'yi',
            hint: '跟单韵母i读音一样的整体认读音节',
            explanation: 'yi是整体认读音节，读音跟单韵母i一样，前面加了y。'
          },
          {
            id: 'c1u2l4q4',
            type: 'choice',
            question: '下面哪个不是整体认读音节？',
            options: ['zhi', 'zha', 'yu'],
            answer: 'zha',
            hint: '整体认读音节不用拼',
            explanation: 'zha需要拼读，不是整体认读音节；zhi和yu都是整体认读音节。'
          },
          {
            id: 'c1u2l4q5',
            type: 'fill',
            question: '整体认读音节共有___个',
            answer: '16',
            hint: '回忆口诀中的数量',
            explanation: '整体认读音节共有16个：zhi chi shi ri zi ci si yi wu yu ye yue yuan yin yun ying。'
          },
          {
            id: 'c1u2l4q6',
            type: 'choice',
            question: '【期末真题】"yue"是什么类型的音节？',
            options: ['拼读音节', '整体认读音节', '三拼音节'],
            answer: '整体认读音节',
            hint: 'yue需要拼吗',
            explanation: 'yue是整体认读音节，不用拼直接读。这是期末常考题！'
          },
          {
            id: 'c1u2l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：整体认读音节有什么特点？',
            answer: '不用拼直接读',
            hint: '[整体认读音节]（语文一年级-第2单元）',
            explanation: '整体认读音节不用拼，直接读出整个音节的音。'
          }
        ]
      },
      {
        id: 'c1u2l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了拼音王国第二单元，让我们把复韵母、鼻韵母和整体认读音节综合起来复习吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着用拼音写一段话，包含复韵母、鼻韵母和整体认读音节，看你能写多少！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复韵母标调歌：有a不放过，没a找o e，i u并列标在后。前后鼻音分清楚，舌尖舌根不一样！', label: '复习口诀', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长用拼音写一段包含复韵母和鼻韵母的话，让孩子拼读。',
        weDo: '亲子一起用拼音写小故事，互相拼读检查。',
        youDo: '孩子独立用拼音写一段话，包含至少3个复韵母和2个鼻韵母。',
        parentTips: '【家长预习】学完了拼音王国第二单元，让我们把复韵母、鼻韵母和整体认读…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：拼音小作家！用拼音写一个小故事，读给家人听，看谁写得最有趣！📝',
        gsapAnimations: ['GSAP: 拼音综合拼读动画'],
        images: ['IMG: 拼音综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u2l5q1',
            type: 'choice',
            question: '"水杯"的"杯"韵母是什么？',
            options: ['ei', 'ai', 'ui'],
            answer: 'ei',
            hint: '回忆复韵母的发音',
            explanation: '"杯"的拼音是bēi，韵母是ei。'
          },
          {
            id: 'c1u2l5q2',
            type: 'fill',
            question: '"天空"的"天"韵母是___',
            answer: 'ian',
            hint: '前鼻韵母',
            explanation: '"天"的拼音是tiān，韵母是ian，属于前鼻韵母。'
          },
          {
            id: 'c1u2l5q3',
            type: 'drag',
            question: '把音节分到整体认读和拼读两组',
            answer: '整体认读:zhi,yi,yue;拼读:zha,ba,mei',
            hint: '整体认读不用拼',
            explanation: 'zhi、yi、yue是整体认读音节；zha、ba、mei需要拼读。'
          },
          {
            id: 'c1u2l5q4',
            type: 'choice',
            question: '下面哪个是后鼻韵母？',
            options: ['an', 'en', 'ang'],
            answer: 'ang',
            hint: '后鼻韵母以ng结尾',
            explanation: 'ang以ng结尾，是后鼻韵母；an和en以n结尾，是前鼻韵母。'
          },
          {
            id: 'c1u2l5q5',
            type: 'fill',
            question: '复韵母ai的标调应该标在___上',
            answer: 'a',
            hint: '有a不放过',
            explanation: '标调规则"有a不放过"，ai中有a，所以标在a上。'
          },
          {
            id: 'c1u2l5q6',
            type: 'choice',
            question: '【期末真题】下列哪个是前鼻韵母？',
            options: ['ing', 'ang', 'un'],
            answer: 'un',
            hint: '前鼻韵母以n结尾',
            explanation: 'un以n结尾，是前鼻韵母；ing和ang以ng结尾，是后鼻韵母。这是期末常考题！'
          },
          {
            id: 'c1u2l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：后鼻韵母的尾音和前鼻韵母有什么不同？',
            answer: 'ng',
            hint: '[鼻韵母区分]（语文一年级-第2单元）',
            explanation: '前鼻韵母以n结尾，后鼻韵母以ng结尾，发音部位不同。'
          }
        ]
      }
    ]
  },
  {
    id: 'c1u3',
    title: '识字天地（一）',
    subtitle: '认识基础汉字',
    order: 3,
    lessons: [
      {
        id: 'c1u3l1',
        title: '天地人你我他',
        order: 1,
        content: [
          { type: 'example', content: '天(tiān)\n偏旁：大\n本义：人的头顶上方\n引申义：天空、日子、季节\n组词：天气、今天\n儿歌：二人顶天立地', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '地(dì)\n偏旁：土\n本义：脚下的土地\n引申义：地面、地方、田地\n组词：大地、土地\n儿歌：土也成地万物生', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '人(rén)\n偏旁：人\n本义：人类\n引申义：别人、人才、成人\n组词：人们、大人\n儿歌：一撇一捺人站立', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '天气\n释义：大气的状态和现象\n网络用法：今天天气太好了吧！（感叹句式）\n典故：古人观天象测农时\n趣味表达：天气是个变脸大师', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '土地\n释义：田地、土壤\n网络用法：这片土地真肥沃啊！\n典故：土地是农民的命根子\n趣味表达：土地爷爷最慷慨', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '"天"——头顶上广阔的天空。上面一横代表天空，下面是"大"，人头顶上的就是天', animationType: 'reveal' },
          { type: 'text', content: '"地"——脚下踩着的土地。泥土里能长出花草树木，是我们生活的家园', animationType: 'reveal' },
          { type: 'text', content: '"人"——你、我、他都是人。"人"字像一个人在走路，一撇一捺互相支撑', animationType: 'reveal' },
          { type: 'example', content: '天——天空、天气、今天\n地——大地、地面、土地\n人——人们、大人、工人\n你——你好、你们\n我——我们、自我\n他——他们、其他', label: '生字组词', animationType: 'bounce' },
          { type: 'dialogue', content: '天说："我在最上面！"\n地说："我在最下面！"\n人说："我站在天地之间！"\n你说："你好呀！"\n我说："我是小朋友！"\n他说："他是我好朋友！"', label: '六个字对话', animationType: 'reveal' },
          { type: 'tip', content: '识字小窍门：在生活中认字！抬头看"天"，低头看"地"，指自己说"我"，指别人说"你"和"他"。字和生活连起来，记得更牢！', label: '生活识字法', animationType: 'pulse' },
          { type: 'formula', content: '识字歌：天大地大人在中间，你你我我他他相连。抬头看天低头看地，天地之间人最奇！', label: '识字歌', animationType: 'typewriter' },
          { type: 'example', content: '歇后语：天上的星星——数不清\n地上的蚂蚁——密密麻麻\n人的本事——各有所长', label: '趣味歇后语', animationType: 'bounce' },
        ],
        teachingMethod: '生活情境识字法',
        learningObjective: '我能正确认读和书写本课生字，了解汉字的构字规律',
        successCriteria: '①能正确认读本课所有生字 ②能说出至少3个字的构字方法或偏旁部首',
        iDo: '家长指着天空说"天"，指着地面说"地"，指着家人说"人你我他"。',
        weDo: '亲子一起在家里找"天地人你我他"对应的事物，互相指认。',
        youDo: '孩子独立认读六个生字，并用每个字说一句话。',
        parentTips: '【家长预习】天(tiān)偏旁：大本义：人的头顶上方引申义：天空、日…\n共学四步：\n①对话出题：问孩子"天"字上面一横代表什么？"\n②孩子应答："天"字上面一横代表天空，下面是"大"，表示人头顶上的就是天。\n③答错引导：家长可以和孩子一起用"偏旁部首分析法"拆字——先认偏旁再认部件，编个顺口溜帮助记忆\n④快速检测："天"字上面一横代表什么？、"（    ）好，我是小明。"填一个字、看字卡快速读出汉字',
        funElement: '小游戏：手指指指指！指天花板说"天"，指地板说"地"，指自己说"我"，看谁反应最快！⚡',
        gsapAnimations: ['GSAP: 汉字从场景图片中浮现动画'],
        images: ['IMG: 天地人你我他场景图'],
        practiceQuestions: [
          {
            id: 'c1u3l1q1',
            type: 'choice',
            question: '"天"字上面一横代表什么？',
            options: ['云', '天空', '太阳'],
            answer: '天空',
            hint: '看看天的上面是什么',
            explanation: '"天"字上面一横代表天空，下面是"大"，表示人头顶上的就是天。'
          },
          {
            id: 'c1u3l1q2',
            type: 'fill',
            question: '"___好，我是小明。"填一个字',
            answer: '你',
            hint: '和别人打招呼用的字',
            explanation: '"你好"是打招呼的用语，所以填"你"字。'
          },
          {
            id: 'c1u3l1q3',
            type: 'flashcard',
            question: '看字卡快速读出汉字',
            answer: '他',
            hint: '指另外一个人',
            explanation: '"他"指另外一个人，和"你""我"合称三人称。'
          },
          {
            id: 'c1u3l1q4',
            type: 'fill',
            question: '"天"字的偏旁是___',
            answer: '大',
            hint: '看看天字由什么组成',
            explanation: '"天"字由"一"和"大"组成，偏旁是"大"。'
          },
          {
            id: 'c1u3l1q5',
            type: 'choice',
            question: '"你、我、他"三个字有什么共同点？',
            options: ["都有单人旁","都是代词","都是动词"],
            answer: '都是代词',
            hint: '它们代替什么',
            explanation: '"你、我、他"都是代词，用来代替人。'
          },
          {
            id: 'c1u3l1q6',
            type: 'choice',
            question: '【期末真题】"天"字一共有几笔？',
            options: ["3笔","4笔","5笔"],
            answer: '4笔',
            hint: '数一数天的笔画',
            explanation: '"天"字共4笔：一、一、撇、捺。这是期末常考题！'
          },
          {
            id: 'c1u3l1q7',
            type: 'fill',
            question: '回顾前面学过的知识："天"字的声母是什么？',
            answer: 't',
            hint: '[拼音声母]（语文一年级-第3单元）',
            explanation: '"天"的拼音是tiān，声母是t，这是第1单元学过的声母。'
          }
        ]
      },
      {
        id: 'c1u3l2',
        title: '金木水火土',
        order: 2,
        content: [
          { type: 'example', content: '木(mù)\n偏旁：木\n本义：树木\n引申义：木头、木材、呆板\n组词：木头、树木\n儿歌：一竖一横木成树', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '水(shuǐ)\n偏旁：水\n本义：流动的液体\n引申义：河流、饮料、液体\n组词：水果、喝水\n儿歌：水流弯弯像条河', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '火(huǒ)\n偏旁：火\n本义：燃烧的光热\n引申义：火焰、怒气、紧急\n组词：火车、火山\n儿歌：两点一人火燃烧', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '水果\n释义：可以吃的植物果实\n网络用法：这个水果甜到心里了！\n典故：古人采野果充饥\n趣味表达：水果是大自然的糖果', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '火山\n释义：喷发岩浆的山\n网络用法：火山爆发太壮观了！\n典故：古人以为火山是神灵发怒\n趣味表达：火山是地球的出气口', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '"金"——闪闪发光的金属。金色的阳光、金色的奖牌，金是很贵重的东西', animationType: 'reveal' },
          { type: 'text', content: '"木"——一棵大树。"木"字中间一竖是树干，一横是树枝，下面两撇是树根', animationType: 'reveal' },
          { type: 'text', content: '"水"——流动的液体。河水、雨水、自来水，水是生命之源', animationType: 'reveal' },
          { type: 'example', content: '一二三四五，金木水火土。\n金——金色、金子\n木——木头、树木\n水——水果、喝水\n火——火车、火山\n土——土地、泥土', label: '五行识字口诀', animationType: 'bounce' },
          { type: 'tip', content: '五行相生相克：水克火（水灭火）、火克金（火熔金）、金克木（斧砍树）、木克土（根固土）、土克水（堤挡水）。像石头剪刀布一样循环！', label: '五行关系', animationType: 'pulse' },
          { type: 'animation', content: '五行元素旋转排列动画，金木水火土实物图依次展示', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '金木水火土',
              sceneBuildConfig: {
                sceneName: '五行',
                elements: [
                  { id: 'el-0', text: '金', emoji: '🪙', delay: 0, animation: 'bounceIn', ttsText: '金' },
                  { id: 'el-1', text: '木', emoji: '🌳', delay: 0.4, animation: 'bounceIn', ttsText: '木' },
                  { id: 'el-2', text: '水', emoji: '💧', delay: 0.8, animation: 'bounceIn', ttsText: '水' },
                  { id: 'el-3', text: '火', emoji: '🔥', delay: 1.2, animation: 'bounceIn', ttsText: '火' },
                  { id: 'el-4', text: '土', emoji: '🌍', delay: 1.6, animation: 'bounceIn', ttsText: '土' },
                ],
              },
              ttsNarration: '金木水火土，天地分上下，日月照今古！',
            },
          },
        ],
        teachingMethod: '五行联想识字法',
        learningObjective: '我能正确认读和书写本课生字，了解汉字的构字规律',
        successCriteria: '①能正确认读本课所有生字 ②能说出至少3个字的构字方法或偏旁部首',
        iDo: '家长展示五种元素的图片，讲解每个字的意思和五行关系。',
        weDo: '亲子一起画五行图，把"金木水火土"五个字写在对应位置。',
        youDo: '孩子独立书写五个生字，并说出每个字代表的事物。',
        parentTips: '【家长预习】木(mù)偏旁：木本义：树木引申义：木头、木材、呆板组词…\n共学四步：\n①对话出题：问孩子"木"字像什么？"\n②孩子应答："木"字像一棵树，中间一竖是树干，一横是树枝，下面两撇是树根。\n③答错引导：家长可以和孩子一起用"偏旁部首分析法"拆字——先认偏旁再认部件，编个顺口溜帮助记忆\n④快速检测："木"字像什么？、一二三四五，金木水火（    ）、把五行元素拖到正确的位置',
        funElement: '歇后语：水克火——浇灭啦！火克金——化掉啦！五行相克就像石头剪刀布！✊✌️🖐️',
        gsapAnimations: ['GSAP: 五行元素旋转排列动画'],
        images: ['IMG: 五行元素示意图', 'IMG: 金木水火土实物图'],
        practiceQuestions: [
          {
            id: 'c1u3l2q1',
            type: 'choice',
            question: '"木"字像什么？',
            options: ['一棵树', '一条河', '一团火'],
            answer: '一棵树',
            hint: '看看木字的笔画',
            explanation: '"木"字像一棵树，中间一竖是树干，一横是树枝，下面两撇是树根。'
          },
          {
            id: 'c1u3l2q2',
            type: 'fill',
            question: '一二三四五，金木水火___',
            answer: '土',
            hint: '五个元素最后一个',
            explanation: '口诀是"一二三四五，金木水火土"，第五个是土。'
          },
          {
            id: 'c1u3l2q3',
            type: 'drag',
            question: '把五行元素拖到正确的位置',
            answer: '金-西方,木-东方,水-北方,火-南方,土-中央',
            hint: '五行对应五个方位',
            explanation: '五行对应方位：金-西、木-东、水-北、火-南、土-中央。'
          },
          {
            id: 'c1u3l2q4',
            type: 'choice',
            question: '"木"字中间一竖代表树的哪个部分？',
            options: ['树根', '树干', '树叶'],
            answer: '树干',
            hint: '想想树的主干是哪一笔',
            explanation: '"木"字中间一竖是树干，一横是树枝，下面两撇是树根，所以中间一竖代表树干。'
          },
          {
            id: 'c1u3l2q5',
            type: 'fill',
            question: '给"木"加一笔能变成___字',
            answer: '本',
            hint: '在木字下面加一横',
            explanation: '"木"字下面加一横变成"本"字，表示树根。'
          },
          {
            id: 'c1u3l2q6',
            type: 'choice',
            question: '【期末真题】"金木水火土"中，哪个代表植物？',
            options: ["金","木","火"],
            answer: '木',
            hint: '植物和什么有关',
            explanation: '"木"代表植物，树木就是植物。这是期末常考题！'
          },
          {
            id: 'c1u3l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："木"字的韵母是什么？',
            answer: 'u',
            hint: '[拼音韵母]（语文一年级-第3单元）',
            explanation: '"木"的拼音是mù，韵母是u，这是第1单元学过的单韵母。'
          }
        ]
      },
      {
        id: 'c1u3l3',
        title: '对韵歌',
        order: 3,
        content: [
          { type: 'example', content: '花(huā)\n偏旁：艹\n本义：植物的繁殖器官\n引申义：花朵、花费、花纹\n组词：花朵、花生\n儿歌：草头化成花一朵', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '鸟(niǎo)\n偏旁：鸟\n本义：有翅膀的动物\n引申义：飞鸟、候鸟\n组词：小鸟、鸟儿\n儿歌：一点一横鸟飞来', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '花朵\n释义：开放的花\n网络用法：这朵花开得真漂亮！\n典故：古人用花传情达意\n趣味表达：花朵是植物的笑脸', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '虫子\n释义：小型动物\n网络用法：这只虫子好可爱！\n典故：古人把小动物都叫虫\n趣味表达：虫子是大自然的清洁工', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '对韵歌\n\n云对雨，雪对风。\n花对树，鸟对虫。\n山清对水秀，\n柳绿对桃红。', label: '对韵歌原文', animationType: 'reveal' },
          { type: 'text', content: '对韵歌就是上下两句对仗：字数一样、词性相同、意思相对。"云"对"雨"，都是天气；"花"对"树"，都是植物', animationType: 'reveal' },
          { type: 'example', content: '"山清"对"水秀"——山是清的，水是秀的\n"柳绿"对"桃红"——柳树是绿的，桃花是红的\n颜色对颜色，景物对景物', label: '对仗解析', animationType: 'typewriter' },
          { type: 'tip', content: '对韵歌的秘诀：找对子！上句说一个东西，下句说一个同类的东西。天对地、日对月、大对小、多对少，你也能编对韵歌！', label: '编对韵歌技巧', animationType: 'pulse' },
          { type: 'formula', content: '对韵歌口诀：字数一样对对齐，词性相同意思反，名词对名词，动词对动词，颜色对颜色，数量对数量！', label: '对韵口诀', animationType: 'typewriter' },
          { type: 'example', content: '趣味对子：猫对狗——都是动物\n黑对白——都是颜色\n哭对笑——都是表情\n胖对瘦——都是体型\n你还能想出更多吗？', label: '趣味对子', animationType: 'bounce' },
          { type: 'animation', content: '对仗词组左右对称飞入动画，云和雨、雪和风成对出现', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '对对子',
              sceneBuildConfig: {
                sceneName: '对仗',
                elements: [
                  { id: 'el-0', text: '云', emoji: '☁️', delay: 0, animation: 'slideIn', ttsText: '云对雨' },
                  { id: 'el-1', text: '雨', emoji: '🌧️', delay: 0.3, animation: 'slideIn', ttsText: '雨' },
                  { id: 'el-2', text: '雪', emoji: '❄️', delay: 0.6, animation: 'slideIn', ttsText: '雪对风' },
                  { id: 'el-3', text: '风', emoji: '🌬️', delay: 0.9, animation: 'slideIn', ttsText: '风' },
                  { id: 'el-4', text: '花', emoji: '🌸', delay: 1.2, animation: 'slideIn', ttsText: '花对树' },
                  { id: 'el-5', text: '树', emoji: '🌳', delay: 1.5, animation: 'slideIn', ttsText: '树' },
                ],
              },
              ttsNarration: '云对雨，雪对风，花对树，鸟对虫！',
            },
          },
        ],
        teachingMethod: '韵律诵读法',
        learningObjective: '我能背诵古诗《对韵歌》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《对韵歌》全诗 ②能说出诗句的意思和诗人表达的情感',
        iDo: '家长有节奏地朗读对韵歌，配合拍手打节拍，示范韵律感。',
        weDo: '亲子一起拍手读对韵歌，一人读上句一人读下句，感受对仗之美。',
        youDo: '孩子独立背诵对韵歌，并尝试自己编一句对仗的话。',
        parentTips: '【家长预习】花(huā)偏旁：艹本义：植物的繁殖器官引申义：花朵、花…\n共学四步：\n①对话出题：问孩子"云对雨"中，和"云"相对的是？"\n②孩子应答：对韵歌中"云对雨，雪对风"，云和雨是相对的。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测："云对雨"中，和"云"相对的是？、"花对树，鸟对（    ）"、对韵歌的特点是什么？',
        funElement: '小游戏：对对子大赛！我说"云对雨"，你说"雪对风"，看谁对得又快又好！🌧️🌬️',
        gsapAnimations: ['GSAP: 对仗词组左右对称飞入动画'],
        images: ['IMG: 对韵歌意境插图'],
        practiceQuestions: [
          {
            id: 'c1u3l3q1',
            type: 'choice',
            question: '"云对雨"中，和"云"相对的是？',
            options: ['风', '雨', '雪'],
            answer: '雨',
            hint: '看看对韵歌怎么写的',
            explanation: '对韵歌中"云对雨，雪对风"，云和雨是相对的。'
          },
          {
            id: 'c1u3l3q2',
            type: 'fill',
            question: '"花对树，鸟对___"',
            answer: '虫',
            hint: '想想什么和鸟相对',
            explanation: '对韵歌中"花对树，鸟对虫"，鸟和虫是相对的。'
          },
          {
            id: 'c1u3l3q3',
            type: 'choice',
            question: '对韵歌的特点是什么？',
            options: ['字数相同、词性相对', '每句押韵', '都是五个字'],
            answer: '字数相同、词性相对',
            hint: '观察上下句的关系',
            explanation: '对韵歌的特点是上下句字数相同、词性相对，形成对仗。'
          },
          {
            id: 'c1u3l3q4',
            type: 'choice',
            question: '对韵歌中"山清"对什么？',
            options: ["水秀","花香","鸟鸣"],
            answer: '水秀',
            hint: '回忆对韵歌',
            explanation: '对韵歌中"山清对水秀"，山对水，清对秀。'
          },
          {
            id: 'c1u3l3q5',
            type: 'fill',
            question: '自己编一句对韵歌："黑对___"',
            answer: '白',
            hint: '和黑相反的颜色',
            explanation: '黑和白是反义词，可以对"黑对白"。'
          },
          {
            id: 'c1u3l3q6',
            type: 'choice',
            question: '【期末真题】对韵歌中"柳绿"对什么？',
            options: ["桃红","草青","天蓝"],
            answer: '桃红',
            hint: '回忆课文中对仗',
            explanation: '对韵歌中"柳绿对桃红"，柳对桃，绿对红。这是期末常考题！'
          },
          {
            id: 'c1u3l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：对韵歌中"天"对什么？',
            answer: '地',
            hint: '[对韵歌]（语文一年级-第3单元）',
            explanation: '对韵歌中"天地"相对，"天"对"地"是对对子的基本方法。'
          }
        ]
      },
      {
        id: 'c1u3l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c1u3l4q1',
            type: 'choice',
            question: '"天"字上面一横代表什么？',
            options: ["云","天空","太阳"],
            answer: '天空',
            hint: '看看天的上面是什么',
            explanation: '"天"字上面一横代表天空，下面是"大"，人头顶上的就是天。'
          },
          {
            id: 'c1u3l4q2',
            type: 'fill',
            question: '"金木水火土"中，"木"字像什么？',
            answer: '一棵树',
            acceptableAnswers: ['一棵树', '树', '树木', '大树'],
            hint: '看看木字的笔画',
            explanation: '"木"字像一棵树，中间一竖是树干，一横是树枝。'
          },
          {
            id: 'c1u3l4q3',
            type: 'choice',
            question: '对韵歌中"云对___"？',
            options: ["风","雨","雪"],
            answer: '雨',
            hint: '回忆对韵歌',
            explanation: '对韵歌中"云对雨，雪对风"。'
          },
          {
            id: 'c1u3l4q4',
            type: 'fill',
            question: '本单元学了"天地人你我他"和"金木水火___"',
            answer: '土',
            hint: '五行最后一个',
            explanation: '本单元学了天地人你我他和金木水火土两组生字。'
          },
          {
            id: 'c1u3l4q5',
            type: 'choice',
            question: '"人"字像什么？',
            options: ["一个人在走路","一棵树","一座山"],
            answer: '一个人在走路',
            hint: '看看人字的形状',
            explanation: '"人"字像一个人在走路，一撇一捺互相支撑。'
          },
          {
            id: 'c1u3l4q6',
            type: 'choice',
            question: '【期末真题】"对韵歌"的特点是什么？',
            options: ["字数相同词性相对","每句押韵","都是五个字"],
            answer: '字数相同词性相对',
            hint: '观察上下句的关系',
            explanation: '对韵歌的特点是上下句字数相同、词性相对，这是期末常考题！'
          },
          {
            id: 'c1u3l4q7',
            type: 'choice',
            question: '回顾前面学过的知识：本单元学了哪些识字方法？写出一种',
            options: ['象形字', '加法', '减法', '乘法'],
            answer: '象形字',
            hint: '[识字方法]（语文一年级-第3单元）',
            explanation: '本单元学习了通过象形字来认识汉字的方法。'
          }
        ]
      },
      {
        id: 'c1u3l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"识字天地（一）"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"识字天地（一）"这个单元，让我们把所有知识综合起…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u3l5q1',
            type: 'choice',
            question: '"天"和"地"是什么关系？',
            options: ["反义词","近义词","无关"],
            answer: '反义词',
            hint: '天在上面地在下面',
            explanation: '天在上面，地在下面，它们是一对反义词。'
          },
          {
            id: 'c1u3l5q2',
            type: 'choice',
            question: '用"天"组一个词：___',
            options: ['天气', '太阳', '跑步', '吃饭'],
            answer: '天气',
            hint: '和天有关的词',
            explanation: '可以组词：天气、今天、天空等。'
          },
          {
            id: 'c1u3l5q3',
            type: 'drag',
            question: '把生字和对应的组词连起来',
            answer: '天-天气,地-土地,人-大人',
            hint: '每个字能组什么词',
            explanation: '天可以组天气，地可以组土地，人可以组大人。'
          },
          {
            id: 'c1u3l5q4',
            type: 'choice',
            question: '"你、我、他"是什么词？',
            options: ["代词","名词","动词"],
            answer: '代词',
            hint: '它们代替什么',
            explanation: '"你、我、他"是代词，用来代替人。'
          },
          {
            id: 'c1u3l5q5',
            type: 'fill',
            question: '编一句对韵歌："大对___"',
            answer: '小',
            hint: '大的反义词',
            explanation: '大对小，这是对韵歌的写法，意思相反的词相对。'
          },
          {
            id: 'c1u3l5q6',
            type: 'choice',
            question: '【期末真题】"花对树，鸟对虫"中，"花"和"树"都是什么词？',
            options: ["动词","名词","形容词"],
            answer: '名词',
            hint: '花和树表示什么',
            explanation: '花和树都表示事物，是名词。对韵歌中名词对名词。这是期末常考题！'
          },
          {
            id: 'c1u3l5q7',
            type: 'fill',
            question: '回顾前面学过的知识："花对树"中"花"和"树"都是什么词？',
            answer: '名词',
            hint: '[词性分类]（语文一年级-第3单元）',
            explanation: '"花"和"树"都表示事物的名称，是名词。'
          }
        ]
      }
    ]
  },
  {
    id: 'c1u4',
    title: '识字天地（二）',
    subtitle: '认识常见汉字',
    order: 4,
    lessons: [
      {
        id: 'c1u4l1',
        title: '日月水火山石田禾',
        order: 1,
        content: [
          { type: 'example', content: '日(rì)\n偏旁：日\n本义：太阳\n引申义：白天、日子\n组词：日出、日子\n儿歌：一轮红日挂天上', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '月(yuè)\n偏旁：月\n本义：月亮\n引申义：月份\n组词：月亮、月份\n儿歌：弯弯月亮像小船', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '日出\n释义：太阳升起来\n网络用法：日出真美啊！\n典故：古人日出而作日落而息\n趣味表达：日出是大自然的闹钟', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '山水\n释义：山和水的风景\n网络用法：这里的山水真漂亮！\n典故：山水画是中国传统绘画\n趣味表达：山水是大自然的画', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '日、月、水、火、山、石、田、禾，这些字都是古人照着事物的样子画出来的，叫做象形字', animationType: 'reveal' },
          { type: 'example', content: '象形字小知识：\n日——像圆圆的太阳 ☀️\n月——像弯弯的月亮 🌙\n水——像流动的河水 💧\n火——像跳动的火焰 🔥\n山——像高高的山峰 ⛰️\n石——像一块大石头 🪨\n田——像一块块农田 🌾\n禾——像一棵小禾苗 🌱', label: '象形字', animationType: 'bounce' },
          { type: 'dialogue', content: '日说："我最亮，白天挂天上！"\n月说："我最美，晚上挂天上！"\n水说："我最柔，到处都能流！"\n火说："我最热，冬天暖洋洋！"', label: '自然现象对话', animationType: 'reveal' },
          { type: 'tip', content: '识字小窍门：象形字就像画画一样，看到字形就能想到它画的是什么。记住事物的样子，就能记住这些字！', label: '识字技巧', animationType: 'pulse' },
          { type: 'animation', content: '象形字演变动画，从图画变成汉字', animationType: 'bounce',
            animationConfig: {
              sceneType: 'timeline',
              title: '象形字的由来',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '日', emoji: '☀️', ttsText: '日，像圆圆的太阳' },
                  { id: 's1', text: '月', emoji: '🌙', ttsText: '月，像弯弯的月亮' },
                  { id: 's2', text: '水', emoji: '💧', ttsText: '水，像流动的河水' },
                  { id: 's3', text: '火', emoji: '🔥', ttsText: '火，像跳动的火焰' },
                  { id: 's4', text: '山', emoji: '⛰️', ttsText: '山，像高高的山峰' },
                ],
              },
              ttsNarration: '古人照着事物的样子画出来的字，就是象形字！',
            },
          },
        ],
        teachingMethod: '象形识字法',
        learningObjective: '我能正确认读和书写本课生字，了解汉字的构字规律',
        successCriteria: '①能正确认读本课所有生字 ②能说出至少3个字的构字方法或偏旁部首',
        iDo: '家长展示象形字卡片，让孩子观察字形和图画的对应关系。',
        weDo: '亲子一起玩"看图猜字"游戏，家长画图画，孩子猜对应的汉字。',
        youDo: '孩子独立认读八个象形字，并尝试画出对应的图画。',
        parentTips: '【家长预习】日(rì)偏旁：日本义：太阳引申义：白天、日子组词：日出…\n共学四步：\n①对话出题：问孩子"日"字像什么？"\n②孩子应答："日"字是象形字，像圆圆的太阳。\n③答错引导：家长可以和孩子一起用"偏旁部首分析法"拆字——先认偏旁再认部件，编个顺口溜帮助记忆\n④快速检测："日"字像什么？、山上有石头，田里种（    ）、把象形字和对应的事物连起来',
        funElement: '小游戏：象形字变变变！看看图画变成汉字，猜猜是哪个字？🎨',
        gsapAnimations: ['GSAP: 象形字演变动画'],
        images: ['IMG: 象形字对照图'],
        practiceQuestions: [
          {
            id: 'c1u4l1q1',
            type: 'choice',
            question: '"日"字像什么？',
            options: ['月亮', '太阳', '星星'],
            answer: '太阳',
            hint: '想想"日"字的样子',
            explanation: '"日"字是象形字，像圆圆的太阳。'
          },
          {
            id: 'c1u4l1q2',
            type: 'fill',
            question: '山上有石头，田里种___',
            answer: '禾',
            hint: '田里种的是什么',
            explanation: '田里种的是禾苗，"禾"指庄稼的幼苗。'
          },
          {
            id: 'c1u4l1q3',
            type: 'drag',
            question: '把象形字和对应的事物连起来',
            answer: '日-太阳,月-月亮,水-河流,火-火焰',
            hint: '每个字像什么',
            explanation: '日像太阳、月像月亮、水像河流、火像火焰，它们都是象形字。'
          },
          {
            id: 'c1u4l1q4',
            type: 'choice',
            question: '下面哪个字是象形字？',
            options: ["他", "山", "的"],
            answer: '山',
            hint: '哪个字像事物的样子',
            explanation: '"山"字像高高的山峰，是象形字。"他"和"的"不是象形字。'
          },
          {
            id: 'c1u4l1q5',
            type: 'choice',
            question: '"月"可以组词为___',
            options: ['月亮', '太阳', '星星', '云朵'],
            answer: '月亮',
            hint: '晚上天上有什么',
            explanation: '"月"可以组词为月亮、月份等。'
          },
          {
            id: 'c1u4l1q6',
            type: 'choice',
            question: '【期末真题】"禾"字的本义是什么？',
            options: ["树木", "禾苗", "花朵"],
            answer: '禾苗',
            hint: '田里种的庄稼',
            explanation: '"禾"字的本义是禾苗，指庄稼的幼苗。这是期末常考题！'
          },
          {
            id: 'c1u4l1q7',
            type: 'fill',
            question: '回顾前面学过的知识："禾"字像什么植物？',
            answer: '禾苗',
            hint: '[象形字]（语文一年级-第4单元）',
            explanation: '"禾"是象形字，形状像成熟的禾苗，穗子下垂。'
          }
        ]
      },
      {
        id: 'c1u4l2',
        title: '牛羊马鸟鱼虫草花',
        order: 2,
        content: [
          { type: 'example', content: '牛(niú)\n偏旁：牛\n本义：一种家畜\n引申义：固执、厉害\n组词：水牛、牛奶\n儿歌：牛字像牛头长角', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '羊(yáng)\n偏旁：羊\n本义：一种家畜\n引申义：温和\n组词：小羊、山羊\n儿歌：羊字像羊头弯角', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '小羊\n释义：年幼的羊\n网络用法：小羊咩咩叫！\n典故：古人养羊取毛取奶\n趣味表达：小羊是草原的白棉花', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '花草\n释义：花和草的统称\n网络用法：公园里的花草真美！\n典故：古人种花养草怡情\n趣味表达：花草是大地的衣裳', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '牛、羊、马、鸟、鱼、虫、草、花，这些字和我们身边的动物植物有关，一起来认识它们吧', animationType: 'reveal' },
          { type: 'example', content: '动物字小知识：\n牛——像牛的头和角 🐄\n羊——像羊的头和弯角 🐑\n马——像马的形状 🐴\n鸟——像鸟的样子 🐦\n鱼——像鱼的体形 🐟\n虫——像小虫子 🐛\n草——草字头加早 🌿\n花——草字头加化 🌸', label: '动物植物字', animationType: 'bounce' },
          { type: 'dialogue', content: '牛说："我力气大，能耕田！"\n马说："我跑得快，能赶路！"\n鸟说："我有翅膀，能飞翔！"\n鱼说："我会游泳，水里最欢！"', label: '动物对话', animationType: 'reveal' },
          { type: 'tip', content: '识字小窍门：草字头的字大多和植物有关，比如草、花、菜、茶。看到草字头，就想到绿色的植物！', label: '识字技巧', animationType: 'pulse' },
          { type: 'animation', content: '动物植物字演变动画，从图画变成汉字', animationType: 'bounce',
            animationConfig: {
              sceneType: 'timeline',
              title: '动物植物字',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '牛', emoji: '🐄', ttsText: '牛，像牛的头和角' },
                  { id: 's1', text: '马', emoji: '🐴', ttsText: '马，像马的形状' },
                  { id: 's2', text: '鸟', emoji: '🐦', ttsText: '鸟，像鸟的样子' },
                  { id: 's3', text: '鱼', emoji: '🐟', ttsText: '鱼，像鱼的体形' },
                  { id: 's4', text: '花', emoji: '🌸', ttsText: '花，草字头加化，和植物有关' },
                ],
              },
              ttsNarration: '这些字和动物植物有关，真有趣！',
            },
          },
        ],
        teachingMethod: '归类识字法',
        learningObjective: '我能正确认读和书写本课生字，了解汉字的构字规律',
        successCriteria: '①能正确认读本课所有生字 ②能说出至少3个字的构字方法或偏旁部首',
        iDo: '家长展示动物和植物的图片，让孩子观察并认读对应的汉字。',
        weDo: '亲子一起玩"动物植物分类"游戏，把字卡分成动物类和植物类。',
        youDo: '孩子独立认读八个字，并试着给每个字组一个词。',
        parentTips: '【家长预习】牛(niú)偏旁：牛本义：一种家畜引申义：固执、厉害组词…\n共学四步：\n①对话出题：问孩子"下面哪个字表示会飞的动物？"\n②孩子应答："鸟"字表示有翅膀会飞的动物。\n③答错引导：家长可以和孩子一起用"偏旁部首分析法"拆字——先认偏旁再认部件，编个顺口溜帮助记忆\n④快速检测：下面哪个字表示会飞的动物？、草地上开满了（    ）、把字分成动物和植物两类',
        funElement: '小游戏：动物植物大分类！把字卡分成两队，动物队和植物队，看谁分得又快又准！🐾🌿',
        gsapAnimations: ['GSAP: 动物植物字演变动画'],
        images: ['IMG: 动物植物字对照图'],
        practiceQuestions: [
          {
            id: 'c1u4l2q1',
            type: 'choice',
            question: '下面哪个字表示会飞的动物？',
            options: ['鱼', '鸟', '虫'],
            answer: '鸟',
            hint: '哪个动物有翅膀',
            explanation: '"鸟"字表示有翅膀会飞的动物。'
          },
          {
            id: 'c1u4l2q2',
            type: 'fill',
            question: '草地上开满了___',
            answer: '花',
            hint: '草地上有什么颜色',
            explanation: '草地上开满了花，"花"是草字头的字，和植物有关。'
          },
          {
            id: 'c1u4l2q3',
            type: 'drag',
            question: '把字分成动物和植物两类',
            answer: '牛-动物,羊-动物,草-植物,花-植物',
            hint: '哪些是动物，哪些是植物',
            explanation: '牛和羊是动物，草和花是植物。'
          },
          {
            id: 'c1u4l2q4',
            type: 'choice',
            question: '下面哪个字有草字头？',
            options: ["牛", "花", "马"],
            answer: '花',
            hint: '哪个字和植物有关',
            explanation: '"花"字有草字头，和植物有关。"牛"和"马"没有草字头。'
          },
          {
            id: 'c1u4l2q5',
            type: 'choice',
            question: '"马"可以组词为___',
            options: ['小马', '小狗', '小猫', '小鸟'],
            answer: '小马',
            hint: '马的宝宝叫什么',
            explanation: '"马"可以组词为小马、马车、马路等。'
          },
          {
            id: 'c1u4l2q6',
            type: 'choice',
            question: '【期末真题】"虫"字偏旁是什么？',
            options: ["虫字旁", "草字头", "木字旁"],
            answer: '虫字旁',
            hint: '"虫"字本身是什么偏旁',
            explanation: '"虫"字本身是虫字旁，和昆虫有关。这是期末常考题！'
          },
          {
            id: 'c1u4l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："虫"字的偏旁是什么？',
            answer: '虫',
            hint: '[偏旁识记]（语文一年级-第4单元）',
            explanation: '"虫"字本身就是偏旁，虫字旁表示与昆虫有关。'
          }
        ]
      },
      {
        id: 'c1u4l3',
        title: '口耳目手足头心力',
        order: 3,
        content: [
          { type: 'example', content: '口(kǒu)\n偏旁：口\n本义：嘴巴\n引申义：入口、人口\n组词：口水、门口\n儿歌：口字方方像嘴巴', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '耳(ěr)\n偏旁：耳\n本义：耳朵\n引申义：耳旁、木耳\n组词：耳朵、木耳\n儿歌：耳朵弯弯听声音', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '耳朵\n释义：听觉器官\n网络用法：竖起耳朵认真听！\n典故：古人说"兼听则明"\n趣味表达：耳朵是脑袋的天线', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '力量\n释义：力气、能力\n网络用法：我的力量变大了！\n典故：古人以力为美\n趣味表达：力量是身体的发动机', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '口、耳、目、手、足、头、心、力，这些字都和我们自己的身体有关，一起来认识它们吧', animationType: 'reveal' },
          { type: 'example', content: '身体字小知识：\n口——像张开的嘴巴 👄\n耳——像耳朵的形状 👂\n目——像眼睛的样子 👁️\n手——像伸开的手掌 ✋\n足——像脚的形状 🦶\n头——头的意思 🗣️\n心——像心脏的形状 ❤️\n力——像手臂用力 💪', label: '身体字', animationType: 'bounce' },
          { type: 'dialogue', content: '口说："我能说话和吃饭！"\n耳说："我能听声音！"\n目说："我能看东西！"\n手说："我能写字和画画！"', label: '身体对话', animationType: 'reveal' },
          { type: 'tip', content: '识字小窍门：口字旁的字大多和嘴巴有关，比如吃、喝、唱、叫。看到口字旁，就想到嘴巴！', label: '识字技巧', animationType: 'pulse' },
          { type: 'animation', content: '身体字演变动画，从图画变成汉字', animationType: 'bounce',
            animationConfig: {
              sceneType: 'timeline',
              title: '身体字',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '口', emoji: '👄', ttsText: '口，像张开的嘴巴' },
                  { id: 's1', text: '目', emoji: '👁️', ttsText: '目，就是眼睛的意思' },
                  { id: 's2', text: '手', emoji: '✋', ttsText: '手，像伸开的手掌' },
                  { id: 's3', text: '足', emoji: '🦶', ttsText: '足，就是脚的意思' },
                  { id: 's4', text: '心', emoji: '❤️', ttsText: '心，像心脏的形状' },
                ],
              },
              ttsNarration: '这些字都和我们自己的身体有关，真有趣！',
            },
          },
        ],
        teachingMethod: '身体体验识字法',
        learningObjective: '我能正确认读和书写本课生字，了解汉字的构字规律',
        successCriteria: '①能正确认读本课所有生字 ②能说出至少3个字的构字方法或偏旁部首',
        iDo: '家长指着自己身体的部位，让孩子认读对应的汉字。',
        weDo: '亲子一起玩"指指说说"游戏，家长指身体部位，孩子说出对应的字。',
        youDo: '孩子独立认读八个身体字，并试着用手指着身体部位读出字来。',
        parentTips: '【家长预习】口(kǒu)偏旁：口本义：嘴巴引申义：入口、人口组词：口…\n共学四步：\n①对话出题：问孩子"目"是指什么？"\n②孩子应答："目"字的本义是眼睛。\n③答错引导：家长可以和孩子一起用"偏旁部首分析法"拆字——先认偏旁再认部件，编个顺口溜帮助记忆\n④快速检测："目"是指什么？、用（    ）写字、把身体字和对应的部位连起来',
        funElement: '小游戏：身体部位点名！家长说字，孩子指身体部位，看谁反应最快！🏃',
        gsapAnimations: ['GSAP: 身体字演变动画'],
        images: ['IMG: 身体字对照图'],
        practiceQuestions: [
          {
            id: 'c1u4l3q1',
            type: 'choice',
            question: '"目"是指什么？',
            options: ['嘴巴', '眼睛', '耳朵'],
            answer: '眼睛',
            hint: '"目"是哪个身体部位',
            explanation: '"目"字的本义是眼睛。'
          },
          {
            id: 'c1u4l3q2',
            type: 'fill',
            question: '用___写字',
            answer: '手',
            hint: '写字用什么',
            explanation: '我们用手写字，"手"是身体部位。'
          },
          {
            id: 'c1u4l3q3',
            type: 'drag',
            question: '把身体字和对应的部位连起来',
            answer: '口-嘴巴,目-眼睛,足-脚,手-手',
            hint: '每个字对应哪个身体部位',
            explanation: '口是嘴巴，目是眼睛，足是脚，手是手。'
          },
          {
            id: 'c1u4l3q4',
            type: 'choice',
            question: '"力"字的意思是？',
            options: ["力气", "美丽", "厉害"],
            answer: '力气',
            hint: '"力"是什么意思',
            explanation: '"力"字的意思是力气、力量。'
          },
          {
            id: 'c1u4l3q5',
            type: 'fill',
            question: '"足"就是___的意思',
            answer: '脚',
            hint: '"足"是哪个身体部位',
            explanation: '"足"就是脚的意思，比如"手足"就是手和脚。'
          },
          {
            id: 'c1u4l3q6',
            type: 'choice',
            question: '【期末真题】"口"字旁的字大多和什么有关？',
            options: ["眼睛", "嘴巴", "脚"],
            answer: '嘴巴',
            hint: '口字旁和什么有关',
            explanation: '"口"字旁的字大多和嘴巴有关，比如吃、喝、唱、叫。这是期末常考题！'
          },
          {
            id: 'c1u4l3q7',
            type: 'fill',
            question: '回顾前面学过的知识：身体部位的汉字中，"口"像什么？',
            answer: '嘴巴',
            hint: '[象形字]（语文一年级-第4单元）',
            explanation: '"口"是象形字，形状像张开的嘴巴。'
          }
        ]
      },
      {
        id: 'c1u4l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c1u4l4q1',
            type: 'choice',
            question: '"日"字是什么类型的字？',
            options: ["象形字", "形声字", "会意字"],
            answer: '象形字',
            hint: '想想"日"字像什么',
            explanation: '"日"字是象形字，像圆圆的太阳。'
          },
          {
            id: 'c1u4l4q2',
            type: 'fill',
            question: '草字头的字大多和___有关',
            answer: '植物',
            hint: '草字头和什么有关',
            explanation: '草字头的字大多和植物有关，比如草、花、菜。'
          },
          {
            id: 'c1u4l4q3',
            type: 'choice',
            question: '"目"字的意思是？',
            options: ["嘴巴", "眼睛", "耳朵"],
            answer: '眼睛',
            hint: '"目"是哪个身体部位',
            explanation: '"目"字的意思是眼睛。'
          },
          {
            id: 'c1u4l4q4',
            type: 'fill',
            question: '"足"就是___的意思',
            answer: '脚',
            hint: '"足"是哪个身体部位',
            explanation: '"足"就是脚的意思。'
          },
          {
            id: 'c1u4l4q5',
            type: 'choice',
            question: '下面哪个字和动物有关？',
            options: ["花", "牛", "田"],
            answer: '牛',
            hint: '哪个字是动物',
            explanation: '"牛"是动物，"花"是植物，"田"是自然现象。'
          },
          {
            id: 'c1u4l4q6',
            type: 'choice',
            question: '【期末真题】"口"字旁的字大多和什么有关？',
            options: ["耳朵", "嘴巴", "手"],
            answer: '嘴巴',
            hint: '口字旁和什么有关',
            explanation: '"口"字旁的字大多和嘴巴有关，比如吃、喝、唱。这是期末常考题！'
          },
          {
            id: 'c1u4l4q7',
            type: 'choice',
            question: '回顾前面学过的知识：本单元学了哪些和动物有关的字？写出一个',
            options: ['鸟', '山', '水', '火'],
            answer: '鸟',
            hint: '[动物字]（语文一年级-第4单元）',
            explanation: '本单元学习了"鸟"等和动物有关的汉字。'
          }
        ]
      },
      {
        id: 'c1u4l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"识字天地"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"识字天地"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u4l5q1',
            type: 'choice',
            question: '本单元学了哪三类汉字？',
            options: ["自然现象、动物植物、身体", "故事、诗歌、散文", "数字、颜色、形状"],
            answer: '自然现象、动物植物、身体',
            hint: '回顾三课的内容',
            explanation: '本单元学了自然现象（日月水火等）、动物植物（牛羊马鸟等）、身体（口耳目手等）三类汉字。'
          },
          {
            id: 'c1u4l5q2',
            type: 'fill',
            question: '象形字是古人照着事物的___画出来的',
            answer: '样子',
            hint: '象形字像什么',
            explanation: '象形字是古人照着事物的样子画出来的字，如日像太阳、月像月亮。'
          },
          {
            id: 'c1u4l5q3',
            type: 'drag',
            question: '把字和类别配对',
            answer: '日-自然现象,牛-动物,花-植物,手-身体',
            hint: '每个字属于哪一类',
            explanation: '日是自然现象，牛是动物，花是植物，手是身体部位。'
          },
          {
            id: 'c1u4l5q4',
            type: 'choice',
            question: '下面哪个字是身体部位的字？',
            options: ["山", "耳", "鱼"],
            answer: '耳',
            hint: '哪个字是身体部位',
            explanation: '"耳"是身体部位的字，"山"是自然现象，"鱼"是动物。'
          },
          {
            id: 'c1u4l5q5',
            type: 'fill',
            question: '用"山水"造一个句子：___',
            answer: '这里的山水真美',
            hint: '山水是什么',
            explanation: '山水指山和水的风景，可以造句如"这里的山水真美"。'
          },
          {
            id: 'c1u4l5q6',
            type: 'choice',
            question: '【期末真题】象形字的特点是什么？',
            options: ["字形像事物的样子", "字很多笔画", "字很难写"],
            answer: '字形像事物的样子',
            hint: '象形字为什么叫象形字',
            explanation: '象形字的特点是字形像事物的样子，如"日"像太阳、"山"像山峰。这是期末常考题！'
          },
          {
            id: 'c1u4l5q7',
            type: 'fill',
            question: '回顾前面学过的知识：象形字的特点是什么？',
            answer: '像事物的形状',
            hint: '[象形字特点]（语文一年级-第4单元）',
            explanation: '象形字是模仿事物的形状造出来的汉字。'
          }
        ]
      }
    ]
  },
  {
    id: 'c1u5',
    title: '课文阅读（一）',
    subtitle: '感受自然之美',
    order: 5,
    lessons: [
      {
        id: 'c1u5l1',
        title: '秋天',
        order: 1,
        content: [
          { type: 'example', content: '秋(qiū)\n偏旁：禾\n本义：秋天\n引申义：秋季、收获\n组词：秋天、秋风\n儿歌：禾火为秋丰收时', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '叶(yè)\n偏旁：口\n本义：植物的叶子\n引申义：书页、时代\n组词：树叶、叶子\n儿歌：口十为叶绿满枝', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '秋天\n释义：一年四季中的第三季\n网络用法：秋天的落叶真美啊！\n典故：古人以秋为收获季节\n趣味表达：秋天是大自然的调色盘', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '落叶\n释义：从树上掉下来的叶子\n网络用法：落叶飘下来像跳舞！\n典故：落叶归根是自然规律\n趣味表达：落叶是大地的被子', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '秋天来了！天气凉了，树叶黄了，一片片叶子从树上落下来', animationType: 'reveal' },
          { type: 'text', content: '天空那么蓝，那么高。一群大雁往南飞，一会儿排成个"人"字，一会儿排成个"一"字', animationType: 'reveal' },
          { type: 'example', content: '秋天的特征：\n天气变凉了\n树叶变黄变红了\n落叶飘下来\n大雁往南飞\n果实成熟了', label: '秋天特征', animationType: 'bounce' },
          { type: 'dialogue', content: '树叶说："我变黄了，要离开大树了！"\n大雁说："天冷了，我要飞去南方过冬！"\n小朋友说："秋天真美，我要去捡落叶！"', label: '秋天的对话', animationType: 'reveal' },
          { type: 'tip', content: '读课文时注意：课文从天气、树叶、天空、大雁四个方面描写秋天。你也可以观察身边的秋天，看看还有什么变化！', label: '阅读提示', animationType: 'pulse' },
          { type: 'animation', content: '树叶从树上飘落动画，大雁排成"人"字和"一"字飞过天空', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '秋天来了',
              sceneBuildConfig: {
                sceneName: '秋天',
                elements: [
                  { id: 'el-0', text: '落叶', emoji: '🍂', delay: 0, animation: 'slideIn', ttsText: '树叶黄了，一片片飘落下来' },
                  { id: 'el-1', text: '大雁', emoji: '🦢', delay: 0.6, animation: 'slideIn', ttsText: '大雁排成人字和一字飞向南方' },
                  { id: 'el-2', text: '秋天', emoji: '🍁', delay: 1.2, animation: 'scaleIn', ttsText: '秋天来了！' },
                ],
              },
              ttsNarration: '秋天来了，树叶黄了，大雁飞向南方！',
            },
          },
        ],
        teachingMethod: '三遍阅读法',
        learningObjective: '我能流利朗读课文《秋天》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长第一遍范读课文，让孩子整体感受秋天的画面。',
        weDo: '亲子第二遍一起朗读，边读边圈出描写秋天特点的词语。',
        youDo: '孩子第三遍独立朗读，并用自己的话说说秋天的特点。',
        parentTips: '【家长预习】秋(qiū)偏旁：禾本义：秋天引申义：秋季、收获组词：秋…\n共学四步：\n①对话出题：问孩子"秋天树叶变成了什么颜色？"\n②孩子应答：课文中描写"树叶黄了"，所以秋天树叶变成了黄色。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：秋天树叶变成了什么颜色？、秋天来了，大雁往（    ）飞、看图片快速说出秋天特征',
        funElement: '小游戏：秋天收藏家！去户外捡落叶，看看能找到几种颜色的叶子，红黄橙绿都是秋天的画笔！🍂',
        gsapAnimations: ['GSAP: 树叶从树上飘落动画'],
        images: ['IMG: 秋天景色插图'],
        practiceQuestions: [
          {
            id: 'c1u5l1q1',
            type: 'choice',
            question: '秋天树叶变成了什么颜色？',
            options: ['绿色', '黄色', '紫色'],
            answer: '黄色',
            hint: '回忆课文描写的秋天',
            explanation: '课文中描写"树叶黄了"，所以秋天树叶变成了黄色。'
          },
          {
            id: 'c1u5l1q2',
            type: 'fill',
            question: '秋天来了，大雁往___飞',
            answer: '南',
            acceptableAnswers: ['南', '南方'],
            hint: '大雁冬天去哪里',
            explanation: '秋天大雁往南飞，因为南方冬天更暖和。'
          },
          {
            id: 'c1u5l1q3',
            type: 'flashcard',
            question: '看图片快速说出秋天特征',
            answer: '落叶',
            hint: '秋天最明显的特征',
            explanation: '落叶是秋天最明显的特征之一，树叶变色后从树上飘落。'
          },
          {
            id: 'c1u5l1q4',
            type: 'choice',
            question: '秋天大雁排成什么字飞行？',
            options: ["人字和一字","大字和小字","天字和地字"],
            answer: '人字和一字',
            hint: '回忆课文描写',
            explanation: '课文中说大雁"一会儿排成个人字，一会儿排成个一字"。'
          },
          {
            id: 'c1u5l1q5',
            type: 'choice',
            question: '用"一片片"造一个短语：一片片___',
            options: ['落叶', '桌子', '铅笔', '书包'],
            answer: '落叶',
            hint: '秋天什么从树上飘下来',
            explanation: '可以用"一片片落叶"来描写秋天的景象。'
          },
          {
            id: 'c1u5l1q6',
            type: 'choice',
            question: '【期末真题】"秋天"这篇课文从哪几个方面描写秋天？',
            options: ["天气、树叶、天空、大雁","只有天气","只有树叶"],
            answer: '天气、树叶、天空、大雁',
            hint: '课文写了秋天的哪些变化',
            explanation: '课文从天气变凉、树叶变黄、天空蓝高、大雁南飞四个方面描写秋天。这是期末常考题！'
          },
          {
            id: 'c1u5l1q7',
            type: 'fill',
            question: '回顾前面学过的知识："秋天"的"秋"字左边是什么偏旁？',
            answer: '禾',
            hint: '[偏旁识记]（语文一年级-第5单元）',
            explanation: '"秋"字左边是禾字旁，表示与庄稼有关。'
          }
        ]
      },
      {
        id: 'c1u5l2',
        title: '小小的船',
        order: 2,
        content: [
          { type: 'example', content: '月(yuè)\n偏旁：月\n本义：月亮\n引申义：月份、月光\n组词：月亮、月光\n儿歌：弯弯月亮像小船', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '星(xīng)\n偏旁：日\n本义：夜空中的发光点\n引申义：星星、明星\n组词：星星、星空\n儿歌：日生为星亮闪闪', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '月亮\n释义：地球的卫星\n网络用法：今晚的月亮好圆啊！\n典故：古人嫦娥奔月的传说\n趣味表达：月亮是夜空的小灯笼', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '星星\n释义：夜空中闪烁的天体\n网络用法：星星一闪一闪亮晶晶！\n典故：古人用星星辨别方向\n趣味表达：星星是天空的小眼睛', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '小小的船\n\n弯弯的月儿小小的船，\n小小的船儿两头尖，\n我在小小的船里坐，\n只看见闪闪的星星蓝蓝的天。', label: '课文原文', animationType: 'reveal' },
          { type: 'text', content: '弯弯的月亮像什么？像小小的船！这是一个比喻句，把弯月比作小船，多美啊', animationType: 'reveal' },
          { type: 'example', content: '比喻句：弯弯的月儿像小船\n"弯弯的"形容形状，"小小的"形容大小\n"闪闪的"形容星光，"蓝蓝的"形容天色\n叠词让句子更优美！', label: '比喻与叠词', animationType: 'bounce' },
          { type: 'tip', content: '想象一下：你坐在月亮船上，飘在星空中，周围是闪闪的星星和蓝蓝的天。闭上眼睛，感受这份美丽和宁静！', label: '想象体验', animationType: 'pulse' },
          { type: 'animation', content: '月亮变成小船的变形动画，星星闪烁，蓝蓝的天空', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '小小的船',
              sceneBuildConfig: {
                sceneName: '夜空',
                elements: [
                  { id: 'el-0', text: '月亮', emoji: '🌙', delay: 0, animation: 'bounceIn', ttsText: '弯弯的月儿小小的船' },
                  { id: 'el-1', text: '星星', emoji: '⭐', delay: 0.5, animation: 'scaleIn', ttsText: '闪闪的星星蓝蓝的天' },
                  { id: 'el-2', text: '小船', emoji: '🚣', delay: 1.0, animation: 'scaleIn', ttsText: '我在小小的船里坐' },
                ],
              },
              ttsNarration: '弯弯的月儿小小的船，小小的船儿两头尖，我在小小的船里坐，只看见闪闪的星星蓝蓝的天！',
            },
          },
        ],
        teachingMethod: '想象联想法',
        learningObjective: '我能流利朗读课文《小小的船》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，配合手势比划弯弯的月亮和闪闪的星星。',
        weDo: '亲子一起想象：如果你坐在月亮船上，会看到什么？互相分享想象。',
        youDo: '孩子独立背诵课文，并画一幅"坐在月亮船上"的画。',
        parentTips: '【家长预习】月(yuè)偏旁：月本义：月亮引申义：月份、月光组词：月…\n共学四步：\n①对话出题：问孩子"小小的船"指的是什么？"\n②孩子应答：课文把弯弯的月亮比作小小的船，这是比喻的写法。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测："小小的船"指的是什么？、弯弯的月儿小小的（    ）、坐在月亮船上看到什么？',
        funElement: '笑话：弯弯的月亮说"我是小船！"星星说"那我是船灯！"云朵说"我是船帆！"——月亮船出发啦！🌙',
        gsapAnimations: ['GSAP: 月亮变成小船的变形动画'],
        images: ['IMG: 月亮船星空意境图'],
        practiceQuestions: [
          {
            id: 'c1u5l2q1',
            type: 'choice',
            question: '"小小的船"指的是什么？',
            options: ['真的船', '弯弯的月亮', '弯弯的桥'],
            answer: '弯弯的月亮',
            hint: '想想课文把什么比作船',
            explanation: '课文把弯弯的月亮比作小小的船，这是比喻的写法。'
          },
          {
            id: 'c1u5l2q2',
            type: 'fill',
            question: '弯弯的月儿小小的___',
            answer: '船',
            hint: '课文的第一个比喻',
            explanation: '课文原句"弯弯的月儿小小的船"，把弯月比作小船。'
          },
          {
            id: 'c1u5l2q3',
            type: 'choice',
            question: '坐在月亮船上看到什么？',
            options: ['太阳和云', '闪闪的星星和蓝蓝的天', '大树和房子'],
            answer: '闪闪的星星和蓝蓝的天',
            hint: '回忆课文内容',
            explanation: '课文说坐在月亮船上看到"闪闪的星星蓝蓝的天"。'
          },
          {
            id: 'c1u5l2q4',
            type: 'choice',
            question: '课文为什么把月亮比作小船？',
            options: ['因为月亮会发光', '因为弯弯的月亮形状像小船', '因为月亮在天上'],
            answer: '因为弯弯的月亮形状像小船',
            hint: '想想月亮和小船有什么共同点',
            explanation: '弯弯的月亮两头尖尖，形状像小船，所以课文把月亮比作小船，这是比喻的写法。'
          },
          {
            id: 'c1u5l2q5',
            type: 'choice',
            question: '模仿课文写一句比喻句：弯弯的___像小船',
            options: ['香蕉', '苹果', '西瓜', '葡萄'],
            answer: '香蕉',
            hint: '还有什么东西是弯弯的',
            explanation: '弯弯的香蕉也像小船，你可以用其他弯弯的东西来比喻。'
          },
          {
            id: 'c1u5l2q6',
            type: 'choice',
            question: '【期末真题】"闪闪的星星蓝蓝的天"用了什么修辞？',
            options: ["拟人","比喻","叠词描写"],
            answer: '叠词描写',
            hint: '闪闪和蓝蓝是什么词',
            explanation: '"闪闪的"和"蓝蓝的"是叠词，用叠词描写让句子更优美。这是期末常考题！'
          },
          {
            id: 'c1u5l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："小小的船"中"船"的韵母是什么？',
            answer: 'uan',
            hint: '[拼音韵母]（语文一年级-第5单元）',
            explanation: '"船"的拼音是chuán，韵母是uan，是三拼音节。'
          }
        ]
      },
      {
        id: 'c1u5l3',
        title: '江南',
        order: 3,
        content: [
          { type: 'example', content: '江(jiāng)\n偏旁：氵\n本义：大河\n引申义：江河、长江\n组词：江水、江南\n儿歌：水工为江水长流', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '莲(lián)\n偏旁：艹\n本义：荷花\n引申义：莲花、莲藕\n组词：莲花、莲叶\n儿歌：草连为莲出淤泥', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '江南\n释义：长江以南的地区\n网络用法：江南的风景真美啊！\n典故：江南自古是鱼米之乡\n趣味表达：江南是水乡的代名词', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '采莲\n释义：采摘莲花\n网络用法：采莲的小船划过来啦！\n典故：古人采莲是夏日乐事\n趣味表达：采莲是江南的夏日派对', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '江南\n汉乐府\n\n江南可采莲，\n莲叶何田田。\n鱼戏莲叶间，\n鱼戏莲叶东，\n鱼戏莲叶西，\n鱼戏莲叶南，\n鱼戏莲叶北。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '江南就是长江以南的地方，那里水乡多莲藕。夏天到了，莲叶长得又大又绿，鱼儿在莲叶间快乐地游来游去', animationType: 'reveal' },
          { type: 'example', content: '"莲叶何田田"——莲叶长得又大又圆，挨挨挤挤的，非常茂盛\n"鱼戏莲叶间"——鱼儿在莲叶中间玩耍嬉戏\n东、西、南、北——鱼儿游到四面八方，多快活！', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '读这首诗要感受鱼儿的快乐！鱼儿在东南西北四个方向游来游去，就像小朋友在操场上到处跑一样开心！', label: '诗歌感受', animationType: 'pulse' },
          { type: 'animation', content: '小鱼在莲叶间穿梭动画，鱼儿在东南西北四个方向游动', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '江南',
              sceneBuildConfig: {
                sceneName: '江南莲池',
                elements: [
                  { id: 'el-0', text: '莲叶', emoji: '🪷', delay: 0, animation: 'bounceIn', ttsText: '江南可采莲，莲叶何田田' },
                  { id: 'el-1', text: '东', emoji: '🐟', delay: 0.4, animation: 'slideIn', ttsText: '鱼戏莲叶东' },
                  { id: 'el-2', text: '西', emoji: '🐟', delay: 0.8, animation: 'slideIn', ttsText: '鱼戏莲叶西' },
                  { id: 'el-3', text: '南', emoji: '🐟', delay: 1.2, animation: 'slideIn', ttsText: '鱼戏莲叶南' },
                  { id: 'el-4', text: '北', emoji: '🐟', delay: 1.6, animation: 'slideIn', ttsText: '鱼戏莲叶北' },
                ],
              },
              ttsNarration: '江南可采莲，莲叶何田田，鱼戏莲叶间！',
            },
          },
        ],
        teachingMethod: '诗歌诵读法',
        learningObjective: '我能背诵古诗《江南》并理解诗句的意思和表达的情感',
        successCriteria: '①能正确流利背诵《江南》全诗 ②能说出诗句的意思和诗人表达的情感',
        iDo: '家长有感情地朗读江南汉乐府，示范古诗的节奏和韵律。',
        weDo: '亲子一起打着节拍读古诗，感受"鱼戏莲叶间"的欢快。',
        youDo: '孩子独立背诵古诗，并画出诗中描绘的画面。',
        parentTips: '【家长预习】江(jiāng)偏旁：氵本义：大河引申义：江河、长江组词…\n共学四步：\n①对话出题：问孩子"江南"是什么意思？"\n②孩子应答：江南指长江以南的地区，那里水乡多莲藕。\n③答错引导：家长可以和孩子一起看课文插图，用"画面记忆法"——把每句诗变成一幅画，看图背诗\n④快速检测："江南"是什么意思？、鱼戏莲叶（    ）（填正确的字）、按诗中顺序排列鱼儿游的方向',
        funElement: '小游戏：小鱼捉迷藏！鱼儿在莲叶东、西、南、北捉迷藏，你来当小鱼，在四个方向游一游！🐟',
        gsapAnimations: ['GSAP: 小鱼在莲叶间穿梭动画'],
        images: ['IMG: 江南采莲意境图'],
        practiceQuestions: [
          {
            id: 'c1u5l3q1',
            type: 'choice',
            question: '"江南"是什么意思？',
            options: ['江的南边', '江的北边', '江的中间'],
            answer: '江的南边',
            hint: '江南就是长江以南',
            explanation: '江南指长江以南的地区，那里水乡多莲藕。'
          },
          {
            id: 'c1u5l3q2',
            type: 'fill',
            question: '鱼戏莲叶___（填正确的字）',
            answer: '间',
            hint: '鱼儿在哪里游',
            explanation: '原诗"鱼戏莲叶间"，鱼儿在莲叶中间游来游去。'
          },
          {
            id: 'c1u5l3q3',
            type: 'drag',
            question: '按诗中顺序排列鱼儿游的方向',
            answer: '东,西,南,北',
            hint: '回忆诗中鱼儿游的顺序',
            explanation: '诗中写鱼戏莲叶东、西、南、北，依次是东、西、南、北。'
          },
          {
            id: 'c1u5l3q4',
            type: 'choice',
            question: '江南地区为什么盛产莲藕？',
            options: ['因为江南水乡多水', '因为江南天气很冷', '因为江南有很多山'],
            answer: '因为江南水乡多水',
            hint: '想想莲藕生长需要什么',
            explanation: '江南是长江以南的水乡地区，水多适合莲藕生长，所以盛产莲藕。'
          },
          {
            id: 'c1u5l3q5',
            type: 'fill',
            question: '"莲叶何田田"意思是莲叶长得又___又圆',
            answer: '大',
            acceptableAnswers: ['大', '多'],
            hint: '田田形容莲叶怎样',
            explanation: '"何田田"形容莲叶长得又大又圆，挨挨挤挤的，非常茂盛。'
          },
          {
            id: 'c1u5l3q6',
            type: 'choice',
            question: '【期末真题】"鱼戏莲叶间"中"戏"是什么意思？',
            options: ["打架","游玩嬉戏","睡觉"],
            answer: '游玩嬉戏',
            hint: '鱼儿在莲叶间做什么',
            explanation: '"戏"是游玩嬉戏的意思，鱼儿在莲叶间快乐地游来游去。这是期末常考题！'
          },
          {
            id: 'c1u5l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："江南"的"江"字偏旁是什么？',
            answer: '氵',
            hint: '[偏旁识记]（语文一年级-第5单元）',
            explanation: '"江"字的偏旁是三点水（氵），表示与水有关。'
          }
        ]
      },
      {
        id: 'c1u5l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c1u5l4q1',
            type: 'choice',
            question: '秋天的树叶变成了什么颜色？',
            options: ["绿色","黄色","紫色"],
            answer: '黄色',
            hint: '回忆课文描写的秋天',
            explanation: '课文中描写"树叶黄了"，秋天树叶变成了黄色。'
          },
          {
            id: 'c1u5l4q2',
            type: 'fill',
            question: '"小小的船"指的是弯弯的___',
            answer: '月亮',
            hint: '课文把什么比作船',
            explanation: '课文把弯弯的月亮比作小小的船。'
          },
          {
            id: 'c1u5l4q3',
            type: 'choice',
            question: '"江南可采莲"中"莲"是什么？',
            options: ["莲花","柳树","竹子"],
            answer: '莲花',
            hint: '江南水乡有什么花',
            explanation: '"莲"就是莲花，江南水乡盛产莲藕。'
          },
          {
            id: 'c1u5l4q4',
            type: 'fill',
            question: '秋天大雁往___飞',
            answer: '南',
            acceptableAnswers: ['南', '南方'],
            hint: '大雁冬天去哪里',
            explanation: '秋天大雁往南飞，因为南方冬天更暖和。'
          },
          {
            id: 'c1u5l4q5',
            type: 'choice',
            question: '"弯弯的月儿小小的船"用了什么修辞手法？',
            options: ["拟人","比喻","排比"],
            answer: '比喻',
            hint: '把月亮比作什么',
            explanation: '把弯弯的月亮比作小小的船，这是比喻的手法。'
          },
          {
            id: 'c1u5l4q6',
            type: 'choice',
            question: '【期末真题】"鱼戏莲叶间"中"戏"是什么意思？',
            options: ["打架","游玩","睡觉"],
            answer: '游玩',
            hint: '鱼儿在莲叶间做什么',
            explanation: '"戏"是游玩、嬉戏的意思，鱼儿在莲叶间快乐地游来游去。这是期末常考题！'
          },
          {
            id: 'c1u5l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：本单元课文主要描写了什么？',
            answer: '自然风景',
            hint: '[课文主题]（语文一年级-第5单元）',
            explanation: '本单元课文描写了不同的自然风景：《秋天》写秋景，《小小的船》写夜空月色，《江南》写水乡莲池。'
          }
        ]
      },
      {
        id: 'c1u5l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"课文阅读（一）"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"课文阅读（一）"这个单元，让我们把所有知识综合起…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u5l5q1',
            type: 'choice',
            question: '本单元的三篇课文都是关于什么的？',
            options: ["自然风景","动物故事","科学知识"],
            answer: '自然风景',
            hint: '秋天、月亮、江南都是什么',
            explanation: '三篇课文都描写了自然风景：秋天的景色、夜空的月亮、江南的莲池。'
          },
          {
            id: 'c1u5l5q2',
            type: 'fill',
            question: '用"弯弯的"造一个短语：___的月亮',
            answer: '弯弯',
            hint: '课文中的叠词',
            explanation: '课文用了"弯弯的"这个叠词来描写月亮的形状。'
          },
          {
            id: 'c1u5l5q3',
            type: 'drag',
            question: '把课文和描写的事物配对',
            answer: '秋天-落叶,小小的船-月亮,江南-莲叶',
            hint: '每篇课文写了什么',
            explanation: '秋天写落叶，小小的船写月亮，江南写莲叶和鱼。'
          },
          {
            id: 'c1u5l5q4',
            type: 'choice',
            question: '下面哪个是叠词？',
            options: ["红色","红红的","红了"],
            answer: '红红的',
            hint: '叠词是什么样子的',
            explanation: '叠词是同一个字重复，如"红红的""弯弯的""闪闪的"。'
          },
          {
            id: 'c1u5l5q5',
            type: 'fill',
            question: '模仿"弯弯的月儿小小的船"，写一句：___的花儿小小的草',
            answer: '红红',
            acceptableAnswers: ['红红', '白白', '黄黄', '粉粉', '蓝蓝', '绿绿'],
            hint: '用什么叠词形容花',
            explanation: '可以用"红红的花儿小小的草"来模仿课文的句式。'
          },
          {
            id: 'c1u5l5q6',
            type: 'choice',
            question: '【期末真题】"闪闪的星星蓝蓝的天"中，有几个叠词？',
            options: ["1个","2个","3个"],
            answer: '2个',
            hint: '找重复的字',
            explanation: '"闪闪的"和"蓝蓝的"是叠词，共有2个。这是期末常考题！'
          },
          {
            id: 'c1u5l5q7',
            type: 'fill',
            question: '回顾前面学过的知识："弯弯的月儿"中"弯"的反义词是什么？',
            answer: '直',
            hint: '[反义词]（语文一年级-第5单元）',
            explanation: '"弯"的反义词是"直"，意思相反的两个词就是反义词。'
          }
        ]
      }
    ]
  },
  {
    id: 'c1u6',
    title: '课文阅读（二）',
    subtitle: '趣味故事阅读',
    order: 6,
    lessons: [
      {
        id: 'c1u6l1',
        title: '雪地里的小画家',
        order: 1,
        content: [
          { type: 'example', content: '雪(xuě)\n偏旁：雨\n本义：天空中落下的白色冰晶\n引申义：下雪、雪白\n组词：下雪、雪人\n儿歌：雨彐为雪白茫茫', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '画(huà)\n偏旁：田\n本义：图画\n引申义：画画、画面\n组词：画画、图画\n儿歌：一田为画绘美景', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '下雪\n释义：天空中降下雪花\n网络用法：下雪啦！可以堆雪人了！\n典故：古人以雪兆丰年\n趣味表达：下雪是天空撒白糖', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '冬眠\n释义：动物在冬天长时间睡眠\n网络用法：青蛙冬眠呼噜噜！\n典故：古人发现动物冬眠现象\n趣味表达：冬眠是动物的超长午觉', label: '生词详解', animationType: 'bounce' },
{ type: 'poem', content: '雪地里的小画家\n\n下雪啦，下雪啦！\n雪地里来了一群小画家。\n小鸡画竹叶，小狗画梅花，\n小鸭画枫叶，小马画月牙。\n不用颜料不用笔，\n几步就成一幅画。\n青蛙为什么没参加？\n他在洞里睡着啦。', label: '课文原文', animationType: 'reveal' },
          { type: 'text', content: '下雪啦！雪地就像一张大白纸，小动物们用脚印来画画，不用颜料不用笔，几步就成一幅画', animationType: 'reveal' },
          { type: 'example', content: '小鸡的脚印像竹叶——尖尖的\n小狗的脚印像梅花——圆圆的带花瓣\n小鸭的脚印像枫叶——脚趾间有蹼\n小马的脚印像月牙——马蹄铁的形状', label: '脚印像什么', animationType: 'bounce' },
          { type: 'dialogue', content: '小鸡说："我画竹叶！"\n小狗说："我画梅花！"\n小鸭说："我画枫叶！"\n小马说："我画月牙！"\n青蛙："呼噜噜……我在冬眠呢！"', label: '小画家对话', animationType: 'reveal' },
          { type: 'tip', content: '为什么青蛙没参加？因为青蛙要冬眠！冬天太冷了，青蛙躲在洞里睡大觉，等到春天才醒来。这就是"冬眠"！', label: '冬眠知识', animationType: 'pulse' },
          { type: 'animation', content: '动物脚印依次盖印动画，小鸡竹叶、小狗梅花、小鸭枫叶、小马月牙', animationType: 'bounce',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '雪地里的小画家',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '🐾', back: '小鸡→竹叶', ttsText: '小鸡画竹叶' },
                  { id: 'c1', front: '🐾', back: '小狗→梅花', ttsText: '小狗画梅花' },
                  { id: 'c2', front: '🐾', back: '小鸭→枫叶', ttsText: '小鸭画枫叶' },
                  { id: 'c3', front: '🐾', back: '小马→月牙', ttsText: '小马画月牙' },
                ],
              },
              ttsNarration: '小鸡画竹叶，小狗画梅花，小鸭画枫叶，小马画月牙！',
            },
          },
        ],
        teachingMethod: '互动表演法',
        learningObjective: '我能流利朗读课文《雪地里的小画家》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，用手势模仿不同小动物的脚印形状。',
        weDo: '亲子一起扮演小画家，在纸上画各种动物的脚印，配上课文内容。',
        youDo: '孩子独立朗读并背诵课文，说说每种动物的脚印像什么。',
        parentTips: '【家长预习】雪(xuě)偏旁：雨本义：天空中落下的白色冰晶引申义：下…\n共学四步：\n①对话出题：问孩子"小鸡的脚印像什么？"\n②孩子应答：课文中说小鸡画竹叶，小鸡的脚印像竹叶的形状。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：小鸡的脚印像什么？、小狗画（    ）、谁没有参加画画？',
        funElement: '笑话：青蛙说"我也要画画！"大家说"你冬眠呢！"——青蛙是唯一没参加的小画家！🐸❄️',
        gsapAnimations: ['GSAP: 动物脚印依次盖印动画'],
        images: ['IMG: 雪地动物脚印图'],
        practiceQuestions: [
          {
            id: 'c1u6l1q1',
            type: 'choice',
            question: '小鸡的脚印像什么？',
            options: ['竹叶', '梅花', '枫叶'],
            answer: '竹叶',
            hint: '想想小鸡脚趾的形状',
            explanation: '课文中说小鸡画竹叶，小鸡的脚印像竹叶的形状。'
          },
          {
            id: 'c1u6l1q2',
            type: 'fill',
            question: '小狗画___',
            answer: '梅花',
            hint: '小狗的脚印像什么花',
            explanation: '课文中说小狗画梅花，小狗的脚印像梅花。'
          },
          {
            id: 'c1u6l1q3',
            type: 'choice',
            question: '谁没有参加画画？',
            options: ['小鸡', '青蛙', '小鸭'],
            answer: '青蛙',
            hint: '谁在冬眠',
            explanation: '青蛙在冬眠没有参加，课文中说"青蛙为什么没参加？他在洞里睡着啦"。'
          },
          {
            id: 'c1u6l1q4',
            type: 'choice',
            question: '雪地里的小画家有几个？',
            options: ["3个","4个","5个"],
            answer: '4个',
            hint: '数一数有几种动物',
            explanation: '雪地里有4个小画家：小鸡、小狗、小鸭、小马。'
          },
          {
            id: 'c1u6l1q5',
            type: 'fill',
            question: '青蛙没有参加画画，因为它在___',
            answer: '冬眠',
            hint: '青蛙冬天做什么',
            explanation: '青蛙在冬眠，所以没有参加画画。'
          },
          {
            id: 'c1u6l1q6',
            type: 'choice',
            question: '【期末真题】"不用颜料不用笔，几步就成一幅画"中"画"指的是什么？',
            options: ["真的画","动物的脚印","雪地上的图案"],
            answer: '动物的脚印',
            hint: '小画家用什么画画',
            explanation: '"画"指的是动物在雪地上留下的脚印，像一幅画。这是期末常考题！'
          },
          {
            id: 'c1u6l1q7',
            type: 'fill',
            question: '回顾前面学过的知识："雪地里的小画家"中，小鸡画的是什么？',
            answer: '竹叶',
            hint: '[课文内容]（语文一年级-第6单元）',
            explanation: '小鸡的脚印像竹叶，所以小鸡画竹叶。'
          }
        ]
      },
      {
        id: 'c1u6l2',
        title: '乌鸦喝水',
        order: 2,
        content: [
          { type: 'example', content: '乌(wū)\n偏旁：丿\n本义：乌鸦\n引申义：黑色\n组词：乌鸦、乌黑\n儿歌：比鸟少眼就是乌', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '喝(hē)\n偏旁：口\n本义：把液体咽下去\n引申义：喝水、喝酒\n组词：喝水、喝奶\n儿歌：口曷为喝解口渴', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '乌鸦\n释义：一种黑色的鸟\n网络用法：聪明的乌鸦想到好办法了！\n典故：古人认为乌鸦是孝鸟\n趣味表达：乌鸦是鸟界的大聪明', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '办法\n释义：解决问题的方法\n网络用法：我想到了一个好办法！\n典故：古人说"办法总比困难多"\n趣味表达：办法是困难的克星', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '一只乌鸦口渴了，到处找水喝。可是瓶子里水不多，瓶口又小，乌鸦喝不着水，怎么办呢？', animationType: 'reveal' },
          { type: 'dialogue', content: '乌鸦说："水太少了，瓶口太小了，我够不着啊！"\n乌鸦看了看周围："咦，地上有很多小石子！有了！"', label: '乌鸦想办法', animationType: 'reveal' },
          { type: 'example', content: '乌鸦的办法：\n1. 看到瓶子里的水太少\n2. 发现旁边有很多小石子\n3. 把小石子一颗一颗放进瓶子里\n4. 瓶子里的水渐渐升高\n5. 乌鸦终于喝到水了！', label: '乌鸦喝水步骤', animationType: 'bounce' },
          { type: 'tip', content: '这个故事告诉我们：遇到困难不要着急，要动脑筋想办法！乌鸦就是用智慧解决了问题，我们也要像乌鸦一样善于思考！', label: '故事道理', animationType: 'pulse' },
          { type: 'animation', content: '石子投入瓶中水位上升动画，乌鸦最终喝到水', animationType: 'bounce',
            animationConfig: {
              sceneType: 'timeline',
              title: '乌鸦喝水',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '口渴', emoji: '🐦', ttsText: '一只乌鸦口渴了，到处找水喝' },
                  { id: 's1', text: '发现水瓶', emoji: '🫙', ttsText: '找到一个水瓶，但水不多' },
                  { id: 's2', text: '投石子', emoji: '🪨', ttsText: '乌鸦把小石子一颗一颗放进瓶里' },
                  { id: 's3', text: '水升高', emoji: '💧', ttsText: '瓶子里的水渐渐升高' },
                  { id: 's4', text: '喝到水', emoji: '🎉', ttsText: '乌鸦终于喝到水了！' },
                ],
              },
              ttsNarration: '乌鸦把石子放进瓶子里，水升高了，终于喝到水了！',
            },
          },
        ],
        teachingMethod: '问题解决式阅读法',
        learningObjective: '我能流利朗读课文《乌鸦喝水》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，在乌鸦遇到困难时暂停，让孩子先想想办法。',
        weDo: '亲子一起做实验：用小石子放入水瓶中，观察水位上升的过程。',
        youDo: '孩子独立复述故事，说说乌鸦是怎么解决问题的。',
        parentTips: '【家长预习】乌(wū)偏旁：丿本义：乌鸦引申义：黑色组词：乌鸦、乌黑…\n共学四步：\n①对话出题：问孩子"乌鸦是怎么喝到水的？"\n②孩子应答：乌鸦把小石子一颗一颗放进瓶子里，水位升高就喝到水了。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：乌鸦是怎么喝到水的？、乌鸦把小（    ）放进瓶子里、这个故事告诉我们什么道理？',
        funElement: '小游戏：乌鸦智多星！瓶子里的水太低喝不到，除了加石子，你还能想到什么办法？倾斜瓶子？用吸管？🧠',
        gsapAnimations: ['GSAP: 石子投入瓶中水位上升动画'],
        images: ['IMG: 乌鸦喝水故事插图'],
        practiceQuestions: [
          {
            id: 'c1u6l2q1',
            type: 'choice',
            question: '乌鸦是怎么喝到水的？',
            options: ['把瓶子推倒', '往瓶子里放石子', '用翅膀舀水'],
            answer: '往瓶子里放石子',
            hint: '回忆乌鸦的办法',
            explanation: '乌鸦把小石子一颗一颗放进瓶子里，水位升高就喝到水了。'
          },
          {
            id: 'c1u6l2q2',
            type: 'fill',
            question: '乌鸦把小___放进瓶子里',
            answer: '石子',
            hint: '乌鸦找来了什么东西',
            explanation: '乌鸦找来小石子放进瓶子里，让水位升高。'
          },
          {
            id: 'c1u6l2q3',
            type: 'choice',
            question: '这个故事告诉我们什么道理？',
            options: ['乌鸦很聪明', '遇到困难要想办法', '要多喝水'],
            answer: '遇到困难要想办法',
            hint: '想想乌鸦的精神',
            explanation: '故事告诉我们遇到困难要动脑筋想办法，不能轻易放弃。'
          },
          {
            id: 'c1u6l2q4',
            type: 'choice',
            question: '乌鸦为什么喝不到水？',
            options: ["水瓶太重","水太少瓶口太小","乌鸦嘴巴太短"],
            answer: '水太少瓶口太小',
            hint: '回忆课文内容',
            explanation: '瓶子里水不多，瓶口又小，乌鸦的嘴够不着水。'
          },
          {
            id: 'c1u6l2q5',
            type: 'fill',
            question: '除了加石子，你还能想到什么办法让乌鸦喝到水？___',
            answer: '倾斜瓶子',
            hint: '动动脑筋',
            explanation: '还可以倾斜瓶子、用吸管等办法，只要动脑筋就能想出好办法！'
          },
          {
            id: 'c1u6l2q6',
            type: 'choice',
            question: '【期末真题】"乌鸦喝水"这个故事属于什么类型？',
            options: ["童话故事","寓言故事","科普文章"],
            answer: '寓言故事',
            hint: '故事告诉我们什么道理',
            explanation: '乌鸦喝水是寓言故事，通过故事告诉我们遇到困难要想办法。这是期末常考题！'
          },
          {
            id: 'c1u6l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："乌鸦喝水"中乌鸦用什么方法喝到水的？',
            answer: '往瓶子里放石子',
            hint: '[课文内容]（语文一年级-第6单元）',
            explanation: '乌鸦往瓶子里放石子，水面升高就喝到水了。'
          }
        ]
      },
      {
        id: 'c1u6l3',
        title: '小蜗牛',
        order: 3,
        content: [
          { type: 'example', content: '蜗(wō)\n偏旁：虫\n本义：蜗牛\n引申义：蜗居、蜗壳\n组词：蜗牛、蜗居\n儿歌：虫呙为蜗慢悠悠', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '季(jì)\n偏旁：子\n本义：季节\n引申义：季度、季军\n组词：季节、四季\n儿歌：禾子为季四季轮', label: '生字详解', animationType: 'typewriter' },
          { type: 'example', content: '蜗牛\n释义：一种爬行缓慢的软体动物\n网络用法：蜗牛爬得也太慢了吧！\n典故：古人以蜗牛比喻慢\n趣味表达：蜗牛是动物界的慢跑冠军', label: '生词详解', animationType: 'bounce' },
          { type: 'example', content: '季节\n释义：一年中的某个时期\n网络用法：四季变化真奇妙！\n典故：古人根据季节安排农事\n趣味表达：季节是大自然的时钟', label: '生词详解', animationType: 'bounce' },
{ type: 'text', content: '小蜗牛爬得太慢了！每次妈妈让它去看风景，等它爬到的时候，季节已经变了', animationType: 'reveal' },
          { type: 'dialogue', content: '蜗牛妈妈说："春天到了，你去看看小树发芽了吧。"\n小蜗牛爬呀爬，回来时说："妈妈，小树已经长满了叶子，夏天到了！"\n蜗牛妈妈说："夏天到了，你去摘几颗草莓吧。"\n小蜗牛爬呀爬，回来时说："妈妈，草莓没了，地上长着蘑菇，秋天到了！"\n蜗牛妈妈说："秋天到了，你去采几个蘑菇吧。"\n小蜗牛爬呀爬，回来时说："妈妈，蘑菇没了，地上盖着雪，冬天到了！"', label: '小蜗牛与妈妈', animationType: 'reveal' },
          { type: 'example', content: '小蜗牛看到的四季变化：\n春天——小树发芽\n夏天——树叶碧绿，草莓红了\n秋天——树叶变黄，长出蘑菇\n冬天——地上盖着白雪', label: '四季变化', animationType: 'bounce' },
          { type: 'tip', content: '小蜗牛为什么总是错过？因为它爬得太慢了！这个故事告诉我们：时间不等人，要珍惜时间，做事不能太慢哦！', label: '故事启示', animationType: 'pulse' },
          { type: 'animation', content: '季节更替场景切换动画，春天发芽、夏天碧绿、秋天变黄、冬天盖雪', animationType: 'bounce',
            animationConfig: {
              sceneType: 'timeline',
              title: '四季',
              timelineConfig: {
                steps: [
                  { id: 's0', text: '春天', emoji: '🌱', ttsText: '春天，草芽尖尖，小鸟在唱歌' },
                  { id: 's1', text: '夏天', emoji: '🌿', ttsText: '夏天，荷叶圆圆，青蛙在唱歌' },
                  { id: 's2', text: '秋天', emoji: '🍂', ttsText: '秋天，谷穗弯弯，大地在唱歌' },
                  { id: 's3', text: '冬天', emoji: '❄️', ttsText: '冬天，雪人挺挺，北风在唱歌' },
                ],
              },
              ttsNarration: '春夏秋冬，四季各有各的美！',
            },
          },
        ],
        teachingMethod: '季节线索阅读法',
        learningObjective: '我能流利朗读课文《小蜗牛》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读课文，在季节变化处重点提示，帮孩子建立时间线索。',
        weDo: '亲子一起梳理小蜗牛每次出门的季节和看到的变化，画出时间线。',
        youDo: '孩子独立阅读课文，说说小蜗牛为什么每次都错过季节。',
        parentTips: '【家长预习】蜗(wō)偏旁：虫本义：蜗牛引申义：蜗居、蜗壳组词：蜗牛…\n共学四步：\n①对话出题：问孩子"小蜗牛第一次出门是什么季节？"\n②孩子应答：小蜗牛春天出门，妈妈让它看小树发芽。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测：小蜗牛第一次出门是什么季节？、小蜗牛爬回来时，夏天已经变成了（    ）、按故事顺序排列小蜗牛看到的景象',
        funElement: '笑话：蜗牛说"我要去看小树发芽！"爬到时"哇，树叶都黄了！"——蜗牛的速度真是急死人！🐌',
        gsapAnimations: ['GSAP: 季节更替场景切换动画'],
        images: ['IMG: 四季变化与小蜗牛图'],
        practiceQuestions: [
          {
            id: 'c1u6l3q1',
            type: 'choice',
            question: '小蜗牛第一次出门是什么季节？',
            options: ['春天', '夏天', '秋天'],
            answer: '春天',
            hint: '小树发芽是什么季节',
            explanation: '小蜗牛春天出门，妈妈让它看小树发芽。'
          },
          {
            id: 'c1u6l3q2',
            type: 'fill',
            question: '小蜗牛爬回来时，夏天已经变成了___',
            answer: '秋天',
            hint: '蜗牛太慢了，季节已经变了',
            explanation: '小蜗牛爬得太慢，夏天出门回来已经是秋天了。'
          },
          {
            id: 'c1u6l3q3',
            type: 'drag',
            question: '按故事顺序排列小蜗牛看到的景象',
            answer: '小树发芽,树叶碧绿,树叶变黄,地上盖着雪',
            hint: '按照春夏秋冬的顺序',
            explanation: '小蜗牛依次看到：春天小树发芽→夏天树叶碧绿→秋天树叶变黄→冬天地上盖着雪。'
          },
          {
            id: 'c1u6l3q4',
            type: 'choice',
            question: '小蜗牛的故事告诉我们什么？',
            options: ["蜗牛很可爱","要珍惜时间","冬天很冷"],
            answer: '要珍惜时间',
            hint: '蜗牛为什么总是错过',
            explanation: '小蜗牛爬得太慢总是错过季节，告诉我们时间不等人，要珍惜时间。'
          },
          {
            id: 'c1u6l3q5',
            type: 'fill',
            question: '小蜗牛看到的四季变化：春天发芽→夏天碧绿→秋天变黄→冬天___',
            answer: '盖着雪',
            hint: '冬天地上有什么',
            explanation: '冬天地上盖着白雪，小蜗牛回来时已经是冬天了。'
          },
          {
            id: 'c1u6l3q6',
            type: 'choice',
            question: '【期末真题】"小蜗牛"这篇课文是按什么顺序写的？',
            options: ["时间顺序","空间顺序","人物顺序"],
            answer: '时间顺序',
            hint: '故事按什么发展',
            explanation: '课文按春夏秋冬的时间顺序写小蜗牛每次出门看到的季节变化。这是期末常考题！'
          },
          {
            id: 'c1u6l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："小蜗牛"中蜗牛在什么季节出门？',
            answer: '春天',
            hint: '[课文内容]（语文一年级-第6单元）',
            explanation: '小蜗牛在春天出门，但爬得太慢，回来时季节已经变了。'
          }
        ]
      },
      {
        id: 'c1u6l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c1u6l4q1',
            type: 'choice',
            question: '雪地里的小画家中，谁没有参加？',
            options: ["小鸡","青蛙","小鸭"],
            answer: '青蛙',
            hint: '谁在冬眠',
            explanation: '青蛙在冬眠没有参加画画，课文中说"他在洞里睡着啦"。'
          },
          {
            id: 'c1u6l4q2',
            type: 'fill',
            question: '乌鸦往瓶子里放___，水就升高了',
            answer: '石子',
            hint: '乌鸦找来了什么东西',
            explanation: '乌鸦把小石子放进瓶子里，水位升高就喝到水了。'
          },
          {
            id: 'c1u6l4q3',
            type: 'choice',
            question: '小蜗牛每次出门都错过了什么？',
            options: ["妈妈","当季的风景","朋友"],
            answer: '当季的风景',
            hint: '蜗牛太慢了',
            explanation: '小蜗牛爬得太慢，每次回来时季节已经变了，错过了当季的风景。'
          },
          {
            id: 'c1u6l4q4',
            type: 'fill',
            question: '小鸡画___，小狗画梅花',
            answer: '竹叶',
            hint: '小鸡的脚印像什么',
            explanation: '小鸡的脚印像竹叶，小狗的脚印像梅花。'
          },
          {
            id: 'c1u6l4q5',
            type: 'choice',
            question: '这三个故事都告诉我们要怎样？',
            options: ["要快","要动脑筋","要睡觉"],
            answer: '要动脑筋',
            hint: '乌鸦是怎么喝到水的',
            explanation: '三个故事都告诉我们要动脑筋：青蛙冬眠是智慧，乌鸦放石子是动脑，蜗牛太慢要珍惜时间。'
          },
          {
            id: 'c1u6l4q6',
            type: 'choice',
            question: '【期末真题】"乌鸦喝水"的故事告诉我们什么道理？',
            options: ["乌鸦很聪明","遇到困难要想办法","要多喝水"],
            answer: '遇到困难要想办法',
            hint: '乌鸦的精神是什么',
            explanation: '故事告诉我们遇到困难要动脑筋想办法，不能轻易放弃。这是期末常考题！'
          },
          {
            id: 'c1u6l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：本单元课文都和什么有关？',
            answer: '小动物',
            hint: '[课文主题]（语文一年级-第6单元）',
            explanation: '本单元课文都和小动物有关，讲述了小动物的故事。'
          }
        ]
      },
      {
        id: 'c1u6l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"课文阅读（二）"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"课文阅读（二）"这个单元，让我们把所有知识综合起…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u6l5q1',
            type: 'choice',
            question: '本单元三个故事的主角分别是什么？',
            options: ["小动物","植物","人"],
            answer: '小动物',
            hint: '谁在故事里',
            explanation: '三个故事的主角都是小动物：雪地里的动物、乌鸦、小蜗牛。'
          },
          {
            id: 'c1u6l5q2',
            type: 'fill',
            question: '小蜗牛春天出门，回来时已经是___天了',
            answer: '夏',
            hint: '蜗牛太慢了，季节变了',
            explanation: '小蜗牛爬得太慢，春天出门回来已经是夏天了。'
          },
          {
            id: 'c1u6l5q3',
            type: 'drag',
            question: '把动物和脚印形状配对',
            answer: '小鸡-竹叶,小狗-梅花,小鸭-枫叶',
            hint: '每种动物的脚印像什么',
            explanation: '小鸡画竹叶，小狗画梅花，小鸭画枫叶。'
          },
          {
            id: 'c1u6l5q4',
            type: 'choice',
            question: '下面哪个动物需要冬眠？',
            options: ["小鸡","青蛙","小狗"],
            answer: '青蛙',
            hint: '谁冬天睡觉',
            explanation: '青蛙需要冬眠，冬天躲在洞里睡大觉。'
          },
          {
            id: 'c1u6l5q5',
            type: 'fill',
            question: '用"一边……一边……"造一个句子：我一边___一边唱歌',
            answer: '走路',
            hint: '同时做两件事',
            explanation: '"一边……一边……"表示同时做两件事，如一边走路一边唱歌。'
          },
          {
            id: 'c1u6l5q6',
            type: 'choice',
            question: '【期末真题】"雪地里的小画家"中，小马的脚印像什么？',
            options: ["竹叶","月牙","梅花"],
            answer: '月牙',
            hint: '马蹄的形状',
            explanation: '小马的脚印像月牙，因为马蹄铁的形状是月牙形的。这是期末常考题！'
          },
          {
            id: 'c1u6l5q7',
            type: 'fill',
            question: '回顾前面学过的知识："雪"字的偏旁是什么？',
            answer: '雨',
            hint: '[偏旁识记]（语文一年级-第6单元）',
            explanation: '"雪"字的偏旁是雨字头，表示与天气降水有关。'
          }
        ]
      }
    ]
  },
  {
    id: 'c1u7',
    title: '字词积累',
    subtitle: '丰富词汇量',
    order: 7,
    lessons: [
      {
        id: 'c1u7l1',
        title: '反义词对对碰',
        order: 1,
        content: [
          { type: 'text', content: '反义词就是意思相反的词！大对小、高对低、长对短，它们就像跷跷板的两端', animationType: 'reveal' },
          { type: 'example', content: '大——小\n高——低\n长——短\n快——慢\n冷——热\n多——少\n上——下\n前——后', label: '常见反义词', animationType: 'bounce' },
          { type: 'dialogue', content: '大说："我最厉害！"\n小说："我虽然小，但我也很重要！"\n高说："我看得远！"\n低说："我离地面近，也很方便！"\n老师说："反义词是一对好朋友，谁也离不开谁！"', label: '反义词对话', animationType: 'reveal' },
          { type: 'tip', content: '记忆反义词的窍门：想象画面！比如"大和小"——想象大象和老鼠；"高和低"——想象长颈鹿和小兔子。画面越生动，记得越牢！', label: '记忆技巧', animationType: 'pulse' },
          { type: 'animation', content: '反义词卡片左右翻转对比动画，大↔小、高↔低', animationType: 'bounce',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '反义词对对碰',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '大', back: '小', ttsText: '大对小' },
                  { id: 'c1', front: '高', back: '低', ttsText: '高对低' },
                  { id: 'c2', front: '长', back: '短', ttsText: '长对短' },
                  { id: 'c3', front: '多', back: '少', ttsText: '多对少' },
                ],
              },
              ttsNarration: '大对小，高对低，长对短，多对少，反义词对对碰！',
            },
          },
        ],
        teachingMethod: '对比游戏法',
        learningObjective: '我能找出反义词并进行正确的词语搭配',
        successCriteria: '①能正确找出词语的反义词 ②能进行正确的词语搭配',
        iDo: '家长说一个词，让孩子说出反义词，如"大——小""高——低"。',
        weDo: '亲子玩反义词对对碰游戏，一人说词一人对反义词，看谁反应快。',
        youDo: '孩子独立完成反义词连线练习，并自己想出三组反义词。',
        parentTips: '【家长预习】反义词就是意思相反的词！大对小、高对低、长对短，它们就像…\n共学四步：\n①对话出题：问孩子"大"的反义词是什么？"\n②孩子应答："大"的反义词是"小"，它们是一对反义词。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："大"的反义词是什么？、"长"的反义词是（    ）、把反义词配对',
        funElement: '小游戏：反义词跷跷板！你说"上"，我说"下"，就像跷跷板一上一下！看谁先"掉"下来！⚖️',
        gsapAnimations: ['GSAP: 反义词卡片左右翻转对比动画'],
        images: ['IMG: 反义词对比示意图'],
        practiceQuestions: [
          {
            id: 'c1u7l1q1',
            type: 'choice',
            question: '"大"的反义词是什么？',
            options: ['多', '小', '少'],
            answer: '小',
            hint: '和大相反',
            explanation: '"大"的反义词是"小"，它们是一对反义词。'
          },
          {
            id: 'c1u7l1q2',
            type: 'fill',
            question: '"长"的反义词是___',
            answer: '短',
            hint: '和长相反',
            explanation: '"长"的反义词是"短"，如长铅笔对短铅笔。'
          },
          {
            id: 'c1u7l1q3',
            type: 'drag',
            question: '把反义词配对',
            answer: '高-低,快-慢,冷-热',
            hint: '找意思相反的词',
            explanation: '高和低、快和慢、冷和热都是反义词对。'
          },
          {
            id: 'c1u7l1q4',
            type: 'choice',
            question: '"上"的反义词是什么？',
            options: ["下","左","右"],
            answer: '下',
            hint: '和上相反',
            explanation: '"上"的反义词是"下"，它们是一对反义词。'
          },
          {
            id: 'c1u7l1q5',
            type: 'fill',
            question: '自己想一组反义词：___',
            answer: '黑-白',
            hint: '意思相反的两个词',
            explanation: '反义词很多，如黑-白、前-后、左-右等。'
          },
          {
            id: 'c1u7l1q6',
            type: 'choice',
            question: '【期末真题】下面哪组是反义词？',
            options: ["美丽-漂亮","大-小","开心-快乐"],
            answer: '大-小',
            hint: '哪组意思相反',
            explanation: '大和小意思相反是反义词；美丽和漂亮、开心和快乐是近义词。这是期末常考题！'
          },
          {
            id: 'c1u7l1q7',
            type: 'fill',
            question: '回顾前面学过的知识："大"的反义词是什么？',
            answer: '小',
            hint: '[反义词]（语文一年级-第7单元）',
            explanation: '"大"和"小"是一对反义词，大小相对。'
          }
        ]
      },
      {
        id: 'c1u7l2',
        title: '量词小达人',
        order: 2,
        content: [
          { type: 'text', content: '量词是汉语特有的！在名词前面表示数量的词就是量词，比如"一只猫"的"只"、"一条鱼"的"条"', animationType: 'typewriter' },
          { type: 'example', content: '一只猫、一条鱼、一头牛、一匹马\n一朵花、一棵树、一片云、一阵风\n一本书、一支笔、一张纸、一把尺\n一杯水、一碗饭、一盘菜、一锅汤', label: '量词搭配', animationType: 'bounce' },
          { type: 'dialogue', content: '猫说："我是一只猫！"\n鱼说："我是一条鱼！"\n牛说："我是一头牛！"\n马说："我是一匹马！"\n小朋友说："每个名词都有自己的量词好朋友！"', label: '量词对话', animationType: 'reveal' },
          { type: 'tip', content: '量词用错会闹笑话！"一头牛"对，但"一头苍蝇"就搞笑了！记住：小动物用"只"，细长的用"条"，大的用"头"或"匹"', label: '量词使用技巧', animationType: 'pulse' },
          { type: 'animation', content: '量词与名词配对弹跳动画，量词和名词手拉手', animationType: 'bounce',
            animationConfig: {
              sceneType: 'cardReveal',
              title: '量词配对',
              cardRevealConfig: {
                cards: [
                  { id: 'c0', front: '一', back: '只🐱', ttsText: '一只猫' },
                  { id: 'c1', front: '一', back: '朵🌸', ttsText: '一朵花' },
                  { id: 'c2', front: '一', back: '本📖', ttsText: '一本书' },
                  { id: 'c3', front: '一', back: '条🐟', ttsText: '一条鱼' },
                ],
              },
              ttsNarration: '一只猫，一朵花，一本书，一条鱼，量词和名词手拉手！',
            },
          },
        ],
        teachingMethod: '实物配对法',
        learningObjective: '我能正确使用量词搭配名词',
        successCriteria: '①能正确搭配量词和名词 ②能说出至少5个量词搭配',
        iDo: '家长展示实物或图片，示范正确的量词搭配，如"一只猫""一条鱼"。',
        weDo: '亲子一起玩量词配对游戏，看图说量词，互相纠正。',
        youDo: '孩子独立完成量词填空练习，并说出三个量词搭配。',
        parentTips: '【家长预习】量词是汉语特有的！在名词前面表示数量的词就是量词，比如"…\n共学四步：\n①对话出题：问孩子"一什么猫"填什么量词？"\n②孩子应答：猫用"只"作量词，"一只猫"是正确的搭配。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："一（    ）猫"填什么量词？、"一（    ）鱼"填量词、把量词拖到正确的名词前',
        funElement: '笑话：说"一头牛"对，说"一头苍蝇"就搞笑了！量词用错，苍蝇比牛还大！🐄🪰',
        gsapAnimations: ['GSAP: 量词与名词配对弹跳动画'],
        images: ['IMG: 量词搭配实物图'],
        practiceQuestions: [
          {
            id: 'c1u7l2q1',
            type: 'choice',
            question: '"一___猫"填什么量词？',
            options: ['条', '只', '头'],
            answer: '只',
            hint: '小动物用什么量词',
            explanation: '猫用"只"作量词，"一只猫"是正确的搭配。'
          },
          {
            id: 'c1u7l2q2',
            type: 'fill',
            question: '"一___鱼"填量词',
            answer: '条',
            hint: '细长的东西用什么量词',
            explanation: '鱼用"条"作量词，"一条鱼"是正确的搭配。'
          },
          {
            id: 'c1u7l2q3',
            type: 'drag',
            question: '把量词拖到正确的名词前',
            answer: '只-鸟,朵-花,本-书',
            hint: '想想每个名词用什么量词',
            explanation: '鸟用"只"，花用"朵"，书用"本"，这是常见的量词搭配。'
          },
          {
            id: 'c1u7l2q4',
            type: 'choice',
            question: '"一本书"中"本"是什么词？',
            options: ["名词","量词","动词"],
            answer: '量词',
            hint: '在名词前面表示数量',
            explanation: '"本"是量词，用在名词前面表示数量，如"一本书"。'
          },
          {
            id: 'c1u7l2q5',
            type: 'fill',
            question: '"一___树"填量词',
            answer: '棵',
            hint: '树用什么量词',
            explanation: '树用"棵"作量词，"一棵树"是正确的搭配。'
          },
          {
            id: 'c1u7l2q6',
            type: 'choice',
            question: '【期末真题】下面哪个量词用错了？',
            options: ["一只猫","一条鱼","一头蚂蚁"],
            answer: '一头蚂蚁',
            hint: '蚂蚁用什么量词',
            explanation: '蚂蚁应该用"一只蚂蚁"，"一头"用于大的动物如牛。这是期末常考题！'
          },
          {
            id: 'c1u7l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："一只猫"中"只"是什么词？',
            answer: '量词',
            hint: '[量词]（语文一年级-第7单元）',
            explanation: '"只"是量词，用来计量动物的数量。'
          }
        ]
      },
      {
        id: 'c1u7l3',
        title: '形容词乐园',
        order: 3,
        content: [
          { type: 'text', content: '形容词是用来描述事物样子、颜色、味道的词。比如"红红的苹果""软软的棉花""甜甜的糖果"', animationType: 'typewriter' },
          { type: 'example', content: '描写颜色：红红的、黄黄的、蓝蓝的、白白的\n描写形状：圆圆的、方方的、长长的、扁扁的\n描写味道：甜甜的、酸酸的、苦苦的、辣辣的\n描写感觉：软软的、硬硬的、暖暖的、凉凉的', label: '形容词分类', animationType: 'bounce' },
          { type: 'dialogue', content: '苹果说："我是红红的、甜甜的！"\n棉花说："我是白白的、软软的！"\n太阳说："我是圆圆的、暖暖的！"\n小朋友说："加上形容词，世界更精彩！"', label: '形容词对话', animationType: 'reveal' },
          { type: 'tip', content: '形容词魔法：普通苹果→红红的苹果→甜甜的红红的苹果→脆脆的甜甜的红红的苹果！形容词越多，描述越丰富，但也不能太多哦！', label: '形容词使用技巧', animationType: 'pulse' },
          { type: 'animation', content: '形容词逐个添加修饰动画，普通苹果变成红红的大苹果', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '形容词叠加',
              sceneBuildConfig: {
                sceneName: '形容词修饰',
                elements: [
                  { id: 'el-0', text: '苹果', emoji: '🍎', delay: 0, animation: 'bounceIn', ttsText: '苹果' },
                  { id: 'el-1', text: '红的苹果', emoji: '🔴', delay: 0.6, animation: 'slideIn', ttsText: '红的苹果' },
                  { id: 'el-2', text: '红红的大苹果', emoji: '🍎', delay: 1.2, animation: 'scaleIn', ttsText: '红红的大苹果' },
                ],
              },
              ttsNarration: '苹果，红的苹果，红红的大苹果！形容词让句子更生动！',
            },
          },
        ],
        teachingMethod: '感官体验法',
        learningObjective: '我能用形容词生动地描述事物',
        successCriteria: '①能用形容词描述事物特征 ②能说出至少3个叠词形容词',
        iDo: '家长用丰富的形容词描述身边的事物，如"红红的苹果""软软的棉花"。',
        weDo: '亲子一起玩"形容词接龙"，一人说名词一人加形容词修饰。',
        youDo: '孩子独立用形容词造三个句子，描述自己喜欢的东西。',
        parentTips: '【家长预习】形容词是用来描述事物样子、颜色、味道的词。比如"红红的苹…\n共学四步：\n①对话出题：问孩子"红红的"是什么词？"\n②孩子应答："红红的"描述颜色，是形容词，用来修饰名词。\n③答错引导：家长可以举例引导，用"举例法"——举一个生活中的例子帮助孩子理解\n④快速检测："红红的"是什么词？、（    ）的太阳（填一个形容词）、下面哪个是形容词？',
        funElement: '小游戏：形容词魔法棒！普通苹果→红红的大苹果→甜甜的脆脆的红红的大苹果！看谁的苹果最"豪华"！🍎',
        gsapAnimations: ['GSAP: 形容词逐个添加修饰动画'],
        images: ['IMG: 形容词修饰名词示意图'],
        practiceQuestions: [
          {
            id: 'c1u7l3q1',
            type: 'choice',
            question: '"红红的"是什么词？',
            options: ['名词', '形容词', '动词'],
            answer: '形容词',
            hint: '它描述了什么',
            explanation: '"红红的"描述颜色，是形容词，用来修饰名词。'
          },
          {
            id: 'c1u7l3q2',
            type: 'fill',
            question: '___的太阳（填一个形容词）',
            answer: '红红的',
            hint: '太阳是什么颜色',
            explanation: '可以用"红红的"来修饰太阳，"红红的太阳"是常见搭配。'
          },
          {
            id: 'c1u7l3q3',
            type: 'choice',
            question: '下面哪个是形容词？',
            options: ['跑步', '美丽', '苹果'],
            answer: '美丽',
            hint: '哪个词能描述事物',
            explanation: '"美丽"是形容词，能描述事物的样子；"跑步"是动词，"苹果"是名词。'
          },
          {
            id: 'c1u7l3q4',
            type: 'choice',
            question: '形容词的作用是什么？',
            options: ["表示动作","描述事物的特征","表示数量"],
            answer: '描述事物的特征',
            hint: '形容词描述什么',
            explanation: '形容词用来描述事物的样子、颜色、味道等特征。'
          },
          {
            id: 'c1u7l3q5',
            type: 'fill',
            question: '给"天空"加一个形容词：___的天空',
            answer: '蓝蓝的',
            hint: '天空是什么颜色',
            explanation: '可以用"蓝蓝的""高高的""广阔的"等形容词来修饰天空。'
          },
          {
            id: 'c1u7l3q6',
            type: 'choice',
            question: '【期末真题】"红红的苹果"中"红红的"是什么词？',
            options: ["名词","形容词","动词"],
            answer: '形容词',
            hint: '它描述了苹果的什么',
            explanation: '"红红的"描述苹果的颜色，是形容词。这是期末常考题！'
          },
          {
            id: 'c1u7l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："红红的苹果"中"红红的"是什么词？',
            answer: '形容词',
            hint: '[形容词]（语文一年级-第7单元）',
            explanation: '"红红的"是形容词，用来描述苹果的颜色。'
          }
        ]
      },
      {
        id: 'c1u7l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c1u7l4q1',
            type: 'choice',
            question: '"大"的反义词是什么？',
            options: ["多","小","少"],
            answer: '小',
            hint: '和大相反',
            explanation: '"大"的反义词是"小"，它们是一对反义词。'
          },
          {
            id: 'c1u7l4q2',
            type: 'fill',
            question: '"一只猫"中"只"是___词',
            answer: '量',
            hint: '在名词前面表示数量',
            explanation: '"只"是量词，用在名词前面表示数量。'
          },
          {
            id: 'c1u7l4q3',
            type: 'choice',
            question: '"红红的"是什么词？',
            options: ["名词","形容词","动词"],
            answer: '形容词',
            hint: '它描述了什么',
            explanation: '"红红的"描述颜色，是形容词。'
          },
          {
            id: 'c1u7l4q4',
            type: 'fill',
            question: '"快"的反义词是___',
            answer: '慢',
            hint: '和快相反',
            explanation: '"快"的反义词是"慢"，如快跑对慢走。'
          },
          {
            id: 'c1u7l4q5',
            type: 'choice',
            question: '下面哪个量词用得对？',
            options: ["一头牛","一条牛","一只牛"],
            answer: '一头牛',
            hint: '牛用什么量词',
            explanation: '大的动物用"头"作量词，"一头牛"是正确的搭配。'
          },
          {
            id: 'c1u7l4q6',
            type: 'choice',
            question: '【期末真题】下列哪个是形容词？',
            options: ["跑步","美丽","苹果"],
            answer: '美丽',
            hint: '哪个词能描述事物',
            explanation: '"美丽"是形容词，能描述事物的样子；"跑步"是动词，"苹果"是名词。这是期末常考题！'
          },
          {
            id: 'c1u7l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：写出"多"的反义词',
            answer: '少',
            hint: '[反义词]（语文一年级-第7单元）',
            explanation: '"多"和"少"是一对反义词，多少相对。'
          }
        ]
      },
      {
        id: 'c1u7l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"字词积累"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"字词积累"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u7l5q1',
            type: 'choice',
            question: '本单元学了哪三种词？',
            options: ["反义词、量词、形容词","名词、动词、代词","近义词、助词、连词"],
            answer: '反义词、量词、形容词',
            hint: '回顾三课内容',
            explanation: '本单元学了反义词对对碰、量词小达人、形容词乐园三种词。'
          },
          {
            id: 'c1u7l5q2',
            type: 'fill',
            question: '用"一朵"造一个短语：一朵___',
            answer: '花',
            hint: '什么用"朵"作量词',
            explanation: '花用"朵"作量词，"一朵花"是正确的搭配。'
          },
          {
            id: 'c1u7l5q3',
            type: 'drag',
            question: '把词分到正确的类别',
            answer: '反义词:大-小,量词:只-朵,形容词:红红的-甜甜的',
            hint: '三种词各有什么',
            explanation: '反义词意思相反，量词在名词前表数量，形容词描述事物特征。'
          },
          {
            id: 'c1u7l5q4',
            type: 'choice',
            question: '"高高兴兴"是什么类型的词语？',
            options: ["AABB","ABAB","ABCC"],
            answer: 'AABB',
            hint: '看看字的排列规律',
            explanation: '"高高兴兴"是AABB型词语，前两个字相同，后两个字相同。'
          },
          {
            id: 'c1u7l5q5',
            type: 'fill',
            question: '给"苹果"加一个形容词：___的苹果',
            answer: '红红的',
            hint: '用什么词描述苹果',
            explanation: '可以用"红红的""甜甜的""大大的"等形容词来修饰苹果。'
          },
          {
            id: 'c1u7l5q6',
            type: 'choice',
            question: '【期末真题】"一条鱼"中"条"是什么词？',
            options: ["名词","动词","量词"],
            answer: '量词',
            hint: '在名词前面表示什么',
            explanation: '"条"是量词，用在名词前面表示数量。这是期末常考题！'
          },
          {
            id: 'c1u7l5q7',
            type: 'fill',
            question: '回顾前面学过的知识："一条鱼"中"条"是什么词？',
            answer: '量词',
            hint: '[量词]（语文一年级-第7单元）',
            explanation: '"条"是量词，用来计量细长的事物。'
          }
        ]
      }
    ]
  },
  {
    id: 'c1u8',
    title: '古诗启蒙',
    subtitle: '走进古诗世界',
    order: 8,
    lessons: [
      {
        id: 'c1u8l1',
        title: '咏鹅',
        order: 1,
        content: [
          { type: 'poem', content: '咏鹅\n【唐】骆宾王\n\n鹅，鹅，鹅，\n曲项向天歌。\n白毛浮绿水，\n红掌拨清波。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '这首诗是7岁的骆宾王写的！他看到池塘里的大白鹅，就写下了这首诗。7岁就能写古诗，厉害吧！', animationType: 'reveal' },
          { type: 'example', content: '"曲项"就是弯弯的脖子，"向天歌"就是朝天上叫。想象一下大白鹅仰着头"鹅鹅鹅"叫的样子！', label: '词语解释', animationType: 'bounce' },
          { type: 'example', content: '"白毛浮绿水"——白色的羽毛漂浮在绿色的水面上。"红掌拨清波"——红色的脚掌划着清清的水波。', label: '诗句理解', animationType: 'typewriter' },
          { type: 'tip', content: '背诵小窍门：先想象画面——大白鹅→弯脖子朝天叫→白毛在绿水里→红脚掌划水，就能记住啦！', label: '背诵技巧', animationType: 'pulse' },
          { type: 'animation', content: '大白鹅在池塘中游动的动画，配合诗句逐字出现', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '咏鹅',
              sceneBuildConfig: {
                sceneName: '池塘',
                elements: [
                  { id: 'el-0', text: '鹅', emoji: '🦢', delay: 0, animation: 'bounceIn', ttsText: '鹅鹅鹅' },
                  { id: 'el-1', text: '曲项', emoji: '🦢', delay: 0.5, animation: 'slideIn', ttsText: '曲项向天歌' },
                  { id: 'el-2', text: '白毛', emoji: '🤍', delay: 1.0, animation: 'slideIn', ttsText: '白毛浮绿水' },
                  { id: 'el-3', text: '红掌', emoji: '🦶', delay: 1.5, animation: 'slideIn', ttsText: '红掌拨清波' },
                ],
              },
              ttsNarration: '鹅鹅鹅，曲项向天歌，白毛浮绿水，红掌拨清波！',
            },
          },
        ],
        teachingMethod: '画面联想法',
        learningObjective: '我能流利朗读课文《咏鹅》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读古诗，配合图片展示白鹅在绿水上的画面。',
        weDo: '亲子一起画一幅咏鹅图，把诗中的画面画出来。',
        youDo: '孩子独立背诵古诗，并说出诗中描写了鹅的哪些部位。',
        parentTips: '【家长预习】这首诗是7岁的骆宾王写的！他看到池塘里的大白鹅，就写下了…\n共学四步：\n①对话出题：问孩子"曲项向天歌"中"项"是什么意思？"\n②孩子应答："项"就是脖子的意思，"曲项"就是弯着脖子。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测："曲项向天歌"中"项"是什么意思？、白毛浮（    ）水、咏鹅的作者是谁？',
        funElement: '笑话：骆宾王7岁写咏鹅，白鹅说"谢谢你夸我漂亮！"——7岁就能写古诗，厉害吧！🦢',
        gsapAnimations: ['GSAP: 白鹅在绿水中游动动画'],
        images: ['IMG: 咏鹅诗意画'],
        practiceQuestions: [
          {
            id: 'c1u8l1q1',
            type: 'choice',
            question: '"曲项向天歌"中"项"是什么意思？',
            options: ['脖子', '翅膀', '尾巴'],
            answer: '脖子',
            hint: '鹅弯着什么向天叫',
            explanation: '"项"就是脖子的意思，"曲项"就是弯着脖子。'
          },
          {
            id: 'c1u8l1q2',
            type: 'fill',
            question: '白毛浮___水',
            answer: '绿',
            hint: '水是什么颜色',
            explanation: '原诗"白毛浮绿水"，白鹅的羽毛浮在绿色的水面上。'
          },
          {
            id: 'c1u8l1q3',
            type: 'choice',
            question: '咏鹅的作者是谁？',
            options: ['李白', '骆宾王', '杜甫'],
            answer: '骆宾王',
            hint: '7岁写这首诗的神童',
            explanation: '《咏鹅》的作者是骆宾王，他7岁时就写了这首诗。'
          },
          {
            id: 'c1u8l1q4',
            type: 'choice',
            question: '"咏鹅"描写了鹅的哪些部位？',
            options: ["脖子、羽毛、脚掌","头、翅膀、尾巴","眼睛、嘴巴、脚"],
            answer: '脖子、羽毛、脚掌',
            hint: '回忆诗句内容',
            explanation: '诗中描写了鹅的曲项（脖子）、白毛（羽毛）、红掌（脚掌）。'
          },
          {
            id: 'c1u8l1q5',
            type: 'fill',
            question: '"曲项向天歌"中"曲"的意思是___',
            answer: '弯',
            hint: '鹅的脖子是什么形状',
            explanation: '"曲"是弯的意思，"曲项"就是弯着脖子。'
          },
          {
            id: 'c1u8l1q6',
            type: 'choice',
            question: '【期末真题】"白毛浮绿水，红掌拨清波"中用了哪两种颜色？',
            options: ["白和红","绿和蓝","黄和红"],
            answer: '白和红',
            hint: '找诗句中的颜色词',
            explanation: '诗句中有"白毛"和"红掌"，用了白色和红色两种颜色。这是期末常考题！'
          },
          {
            id: 'c1u8l1q7',
            type: 'fill',
            question: '回顾前面学过的知识："咏鹅"的作者是谁？',
            answer: '骆宾王',
            hint: '[古诗作者]（语文一年级-第8单元）',
            explanation: '"咏鹅"是唐代诗人骆宾王七岁时写的诗。'
          }
        ]
      },
      {
        id: 'c1u8l2',
        title: '悯农',
        order: 2,
        content: [
          { type: 'poem', content: '悯农\n【唐】李绅\n\n锄禾日当午，\n汗滴禾下土。\n谁知盘中餐，\n粒粒皆辛苦。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '中午太阳最热的时候，农民伯伯还在田里锄草，汗水一滴一滴落在泥土里。每一粒粮食都来之不易！', animationType: 'reveal' },
          { type: 'example', content: '"锄禾"——用锄头给禾苗除草\n"日当午"——太阳在头顶上，最热的时候\n"汗滴禾下土"——汗水滴到禾苗下面的泥土里\n"粒粒皆辛苦"——每一粒粮食都是辛苦劳动换来的', label: '诗句解释', animationType: 'typewriter' },
          { type: 'dialogue', content: '农民伯伯说："种地真辛苦，太阳晒得我满头大汗！"\n小朋友说："我以后再也不浪费粮食了！"\n妈妈说："谁知盘中餐，粒粒皆辛苦。记住这句话！"', label: '悯农对话', animationType: 'reveal' },
          { type: 'tip', content: '吃饭时想想这首诗：每一粒米都是农民伯伯辛苦种出来的。不挑食、不剩饭，就是对农民伯伯最大的尊重！', label: '珍惜粮食', animationType: 'pulse' },
          { type: 'animation', content: '农民耕种场景动画，烈日下锄草、汗水滴入泥土', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '悯农',
              sceneBuildConfig: {
                sceneName: '田间',
                elements: [
                  { id: 'el-0', text: '烈日', emoji: '☀️', delay: 0, animation: 'bounceIn', ttsText: '锄禾日当午' },
                  { id: 'el-1', text: '汗水', emoji: '💧', delay: 0.5, animation: 'slideIn', ttsText: '汗滴禾下土' },
                  { id: 'el-2', text: '盘中餐', emoji: '🍚', delay: 1.0, animation: 'scaleIn', ttsText: '谁知盘中餐' },
                  { id: 'el-3', text: '辛苦', emoji: '🙏', delay: 1.5, animation: 'scaleIn', ttsText: '粒粒皆辛苦' },
                ],
              },
              ttsNarration: '锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦！',
            },
          },
        ],
        teachingMethod: '情感体验法',
        learningObjective: '我能流利朗读课文《悯农》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读古诗，讲解农民种地的辛苦，让孩子感受粮食来之不易。',
        weDo: '亲子一起讨论：为什么不能浪费粮食？说说自己吃饭时应该怎么做。',
        youDo: '孩子独立背诵古诗，并说出"粒粒皆辛苦"的意思。',
        parentTips: '【家长预习】中午太阳最热的时候，农民伯伯还在田里锄草，汗水一滴一滴落…\n共学四步：\n①对话出题：问孩子"汗滴禾下土"描写的是谁？"\n②孩子应答："汗滴禾下土"描写的是农民在烈日下种地，汗水滴入泥土中。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测："汗滴禾下土"描写的是谁？、谁知盘中餐，粒粒皆（    ）、这首诗告诉我们什么？',
        funElement: '小游戏：粮食旅行记！一粒米从播种到餐桌要经过多少步？试试画出来，你会更珍惜每一粒米！🌾',
        gsapAnimations: ['GSAP: 农民耕种场景动画'],
        images: ['IMG: 悯农耕种意境图'],
        practiceQuestions: [
          {
            id: 'c1u8l2q1',
            type: 'choice',
            question: '"汗滴禾下土"描写的是谁？',
            options: ['诗人', '农民', '小孩'],
            answer: '农民',
            hint: '谁在田里种地',
            explanation: '"汗滴禾下土"描写的是农民在烈日下种地，汗水滴入泥土中。'
          },
          {
            id: 'c1u8l2q2',
            type: 'fill',
            question: '谁知盘中餐，粒粒皆___',
            answer: '辛苦',
            hint: '每一粒粮食都怎么样',
            explanation: '原诗"谁知盘中餐，粒粒皆辛苦"，每一粒粮食都来之不易。'
          },
          {
            id: 'c1u8l2q3',
            type: 'choice',
            question: '这首诗告诉我们什么？',
            options: ['种地很好玩', '要珍惜粮食', '农民很穷'],
            answer: '要珍惜粮食',
            hint: '想想诗的中心意思',
            explanation: '《悯农》告诉我们要珍惜粮食，因为每一粒都来自农民的辛苦劳动。'
          },
          {
            id: 'c1u8l2q4',
            type: 'choice',
            question: '"悯农"的"悯"是什么意思？',
            options: ["高兴","同情","生气"],
            answer: '同情',
            hint: '诗人对农民是什么感情',
            explanation: '"悯"是同情、怜悯的意思，诗人同情农民的辛苦。'
          },
          {
            id: 'c1u8l2q5',
            type: 'fill',
            question: '"锄禾日当午"意思是中午太阳最热时，农民还在___',
            answer: '锄草',
            hint: '农民在做什么',
            explanation: '"锄禾"就是用锄头给禾苗除草，中午最热时还在干活。'
          },
          {
            id: 'c1u8l2q6',
            type: 'choice',
            question: '【期末真题】"谁知盘中餐，粒粒皆辛苦"告诉我们要怎样？',
            options: ["多吃点","珍惜粮食","少吃点"],
            answer: '珍惜粮食',
            hint: '每粒粮食都来之不易',
            explanation: '这句诗告诉我们要珍惜粮食，因为每一粒都来自农民的辛苦劳动。这是期末常考题！'
          },
          {
            id: 'c1u8l2q7',
            type: 'fill',
            question: '回顾前面学过的知识："悯农"告诉我们要珍惜什么？',
            answer: '粮食',
            hint: '[古诗寓意]（语文一年级-第8单元）',
            explanation: '"悯农"告诉我们要珍惜粮食，每一粒都来之不易。'
          }
        ]
      },
      {
        id: 'c1u8l3',
        title: '静夜思',
        order: 3,
        content: [
          { type: 'poem', content: '静夜思\n【唐】李白\n\n床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。', label: '古诗原文', animationType: 'reveal' },
          { type: 'text', content: '夜晚，李白看到月光照在床前，白白的像霜一样。他抬头看月亮，低下头想起了远方的家乡', animationType: 'reveal' },
          { type: 'example', content: '"疑是地上霜"——月光照在地上，白白的，好像铺了一层霜\n"举头望明月"——抬起头看天上明亮的月亮\n"低头思故乡"——低下头想念远方的家乡\n一"举"一"低"，写出了诗人的思乡之情', label: '诗句理解', animationType: 'typewriter' },
          { type: 'dialogue', content: '李白说："月光好白啊，像霜一样！"\n月亮说："我在天上看着你呢！"\n李白说："看着月亮，我想家了……"\n故乡说："李白，快回来吧！"', label: '思乡对话', animationType: 'reveal' },
          { type: 'tip', content: '背诵小窍门：记住动作！看地上（明月光）→觉得像霜（疑是霜）→抬头看天（望明月）→低头想家（思故乡）。四个动作，四句诗！', label: '背诵技巧', animationType: 'pulse' },
          { type: 'animation', content: '月光洒落床前动画，李白举头望月、低头思乡', animationType: 'bounce',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: '静夜思',
              sceneBuildConfig: {
                sceneName: '月夜',
                elements: [
                  { id: 'el-0', text: '月光', emoji: '🌙', delay: 0, animation: 'bounceIn', ttsText: '床前明月光' },
                  { id: 'el-1', text: '霜', emoji: '❄️', delay: 0.5, animation: 'slideIn', ttsText: '疑是地上霜' },
                  { id: 'el-2', text: '举头', emoji: '👤', delay: 1.0, animation: 'slideIn', ttsText: '举头望明月' },
                  { id: 'el-3', text: '思乡', emoji: '🏠', delay: 1.5, animation: 'scaleIn', ttsText: '低头思故乡' },
                ],
              },
              ttsNarration: '床前明月光，疑是地上霜，举头望明月，低头思故乡！',
            },
          },
        ],
        teachingMethod: '情境代入法',
        learningObjective: '我能流利朗读课文《静夜思》并理解主要内容',
        successCriteria: '①能正确流利朗读课文 ②能回答关于课文内容的问题',
        iDo: '家长朗读古诗，营造安静的氛围，让孩子想象自己一个人在远方想家的感觉。',
        weDo: '亲子一起讨论：如果你离开家很久，会想念什么？互相分享。',
        youDo: '孩子独立背诵古诗，并用自己的话说说诗人的心情。',
        parentTips: '【家长预习】夜晚，李白看到月光照在床前，白白的像霜一样。他抬头看月亮…\n共学四步：\n①对话出题：问孩子"疑是地上霜"中"疑"是什么意思？"\n②孩子应答："疑"在这里是"好像"的意思，月光照在地上好像白霜一样。\n③答错引导：家长可以和孩子一起重读课文，用"图文结合法"——边看插图边读文字，帮助理解\n④快速检测："疑是地上霜"中"疑"是什么意思？、举头望（    ）月、静夜思的作者是谁？',
        funElement: '笑话：李白看着月亮想家，月亮说"别想我啦，我又不是你家人！"——月亮表示很无辜！🌕',
        gsapAnimations: ['GSAP: 月光洒落床前动画'],
        images: ['IMG: 静夜思月夜意境图'],
        practiceQuestions: [
          {
            id: 'c1u8l3q1',
            type: 'choice',
            question: '"疑是地上霜"中"疑"是什么意思？',
            options: ['看见', '好像', '确定'],
            answer: '好像',
            hint: '月光像什么',
            explanation: '"疑"在这里是"好像"的意思，月光照在地上好像白霜一样。'
          },
          {
            id: 'c1u8l3q2',
            type: 'fill',
            question: '举头望___月',
            answer: '明',
            hint: '什么样的月亮',
            explanation: '原诗"举头望明月"，抬头看天上明亮的月亮。'
          },
          {
            id: 'c1u8l3q3',
            type: 'choice',
            question: '静夜思的作者是谁？',
            options: ['骆宾王', '李白', '白居易'],
            answer: '李白',
            hint: '这位诗人被称为"诗仙"',
            explanation: '《静夜思》的作者是李白，他被后人称为"诗仙"。'
          },
          {
            id: 'c1u8l3q4',
            type: 'choice',
            question: '诗人为什么觉得月光"疑是地上霜"？',
            options: ['因为月光照在地上白白的像霜', '因为地上真的有霜', '因为诗人很冷'],
            answer: '因为月光照在地上白白的像霜',
            hint: '想想月光和霜有什么共同点',
            explanation: '月光照在地上白白的，诗人觉得好像铺了一层霜，所以用"疑是地上霜"来描写月光的洁白。'
          },
          {
            id: 'c1u8l3q5',
            type: 'fill',
            question: '李白看到月光想起___',
            answer: '家乡',
            hint: '思是什么意思',
            explanation: '李白看到月光，想起了远方的家乡，这就是"思故乡"。'
          },
          {
            id: 'c1u8l3q6',
            type: 'choice',
            question: '【期末真题】"静夜思"表达了诗人什么情感？',
            options: ["开心","思乡","害怕"],
            answer: '思乡',
            hint: '诗人看着月亮想什么',
            explanation: '《静夜思》表达了诗人对家乡的思念之情。这是期末常考题！'
          },
          {
            id: 'c1u8l3q7',
            type: 'fill',
            question: '回顾前面学过的知识："静夜思"的作者是谁？',
            answer: '李白',
            hint: '[古诗作者]（语文一年级-第8单元）',
            explanation: '"静夜思"是唐代诗人李白写的，表达思乡之情。'
          }
        ]
      },
      {
        id: 'c1u8l4',
        title: '形成性评价',
        order: 4,
        content: [
          { type: 'text', content: '让我们来检验一下这单元学到的知识吧！通过这些练习，看看你掌握了多少', animationType: 'typewriter' },
          { type: 'tip', content: '评价小贴士：做错的题不要着急，回到前面的课时再学一遍，学会了就是最大的进步！', label: '评价提示', animationType: 'pulse' },
          { type: 'formula', content: '复习口诀：学过的知识要常复习，温故而知新，才能记得更牢！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '评价反馈法',
        learningObjective: '我能独立完成本单元形成性评价检测，查漏补缺',
        successCriteria: '①能独立完成所有检测题 ②能说出自己做错题目的正确答案',
        iDo: '家长出示本单元的学习卡片，让孩子逐一回答，记录掌握情况。',
        weDo: '亲子一起做闯关游戏，答对一题前进一步，看谁能闯关成功。',
        youDo: '孩子独立完成评价练习，错的内容多练几遍。',
        parentTips: '【家长预习】让我们来检验一下这单元学到的知识吧！通过这些练习，看看你…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大闯关！答对一题前进一步，全部答对就是学习大王！👑',
        gsapAnimations: ['GSAP: 评价卡片翻转动画'],
        images: ['IMG: 评价闯关图'],
        practiceQuestions: [
          {
            id: 'c1u8l4q1',
            type: 'choice',
            question: '"咏鹅"的作者是谁？',
            options: ["李白","骆宾王","杜甫"],
            answer: '骆宾王',
            hint: '7岁写这首诗的神童',
            explanation: '《咏鹅》的作者是骆宾王，他7岁时就写了这首诗。'
          },
          {
            id: 'c1u8l4q2',
            type: 'fill',
            question: '"谁知盘中餐，粒粒皆___"',
            answer: '辛苦',
            hint: '每一粒粮食都怎么样',
            explanation: '原诗"谁知盘中餐，粒粒皆辛苦"，每一粒粮食都来之不易。'
          },
          {
            id: 'c1u8l4q3',
            type: 'choice',
            question: '"静夜思"表达了什么情感？',
            options: ["开心","思乡","生气"],
            answer: '思乡',
            hint: '李白看着月亮想什么',
            explanation: '《静夜思》表达了诗人对家乡的思念之情。'
          },
          {
            id: 'c1u8l4q4',
            type: 'fill',
            question: '"白毛浮___水"',
            answer: '绿',
            hint: '白鹅在什么颜色的水上',
            explanation: '原诗"白毛浮绿水"，白鹅的羽毛浮在绿色的水面上。'
          },
          {
            id: 'c1u8l4q5',
            type: 'choice',
            question: '三首古诗的共同主题是什么？',
            options: ["写景抒情","叙事说理","送别友人"],
            answer: '写景抒情',
            hint: '三首诗都写了什么',
            explanation: '三首古诗都通过写景来抒情：咏鹅写鹅、悯农写劳动、静夜思写月夜思乡。'
          },
          {
            id: 'c1u8l4q6',
            type: 'choice',
            question: '【期末真题】"举头望明月，低头思故乡"中，"举"和"低"是什么关系？',
            options: ["近义词","反义词","无关"],
            answer: '反义词',
            hint: '举头和低头动作相反',
            explanation: '"举头"是抬头，"低头"是低头，动作相反，是反义词。这是期末常考题！'
          },
          {
            id: 'c1u8l4q7',
            type: 'fill',
            question: '回顾前面学过的知识：本单元学了哪三首古诗？写出一首的名称',
            answer: '咏鹅',
            hint: '[古诗名称]（语文一年级-第8单元）',
            explanation: '本单元学了"咏鹅""悯农""静夜思"三首古诗。'
          }
        ]
      },
      {
        id: 'c1u8l5',
        title: '综合复习与应用',
        order: 5,
        content: [
          { type: 'text', content: '学完了"古诗启蒙"这个单元，让我们把所有知识综合起来，看看能做什么吧！', animationType: 'typewriter' },
          { type: 'tip', content: '综合应用小窍门：试着把本单元学到的知识用在生活中，学以致用最有效！', label: '应用技巧', animationType: 'pulse' },
          { type: 'formula', content: '复习三步法：回顾学过什么→练习不会的→把知识用起来！', label: '复习方法', animationType: 'typewriter' }
        ],
        teachingMethod: '综合应用法',
        learningObjective: '我能综合运用本单元所学知识解决实际问题',
        successCriteria: '①能正确运用本单元核心知识解题 ②能解释解题思路',
        iDo: '家长和孩子一起回顾本单元所有内容，示范如何综合运用所学知识。',
        weDo: '亲子一起做综合练习，互相出题考对方。',
        youDo: '孩子独立完成综合练习，把本单元知识串联起来。',
        parentTips: '【家长预习】学完了"古诗启蒙"这个单元，让我们把所有知识综合起来，看…\n共学四步：\n①对话出题：测试前问孩子"这个单元你觉得最难的是什么？最容易的是什么？"\n②孩子应答：孩子说出自己觉得最难和最容易的部分\n③答错引导：把错题分类，针对薄弱点用实物或画图重新讲解\n④快速检测：让孩子挑3道错题重新做，说说现在为什么这样选',
        funElement: '小游戏：知识大串联！把本单元学到的知识连成一条线，看谁连得最长！🔗',
        gsapAnimations: ['GSAP: 综合复习动画'],
        images: ['IMG: 综合应用场景图'],
        practiceQuestions: [
          {
            id: 'c1u8l5q1',
            type: 'choice',
            question: '本单元学了哪三首古诗？',
            options: ["咏鹅、悯农、静夜思","春晓、望庐山、登鹳雀楼","江南、敕勒歌、梅花"],
            answer: '咏鹅、悯农、静夜思',
            hint: '回顾本单元内容',
            explanation: '本单元学了咏鹅、悯农、静夜思三首古诗。'
          },
          {
            id: 'c1u8l5q2',
            type: 'fill',
            question: '背诵"静夜思"：床前明月光，疑是地上___',
            answer: '霜',
            hint: '月光像什么',
            explanation: '原诗"床前明月光，疑是地上霜"，月光照在地上像白霜。'
          },
          {
            id: 'c1u8l5q3',
            type: 'drag',
            question: '把古诗和作者配对',
            answer: '咏鹅-骆宾王,悯农-李绅,静夜思-李白',
            hint: '每首诗是谁写的',
            explanation: '咏鹅的作者是骆宾王，悯农的作者是李绅，静夜思的作者是李白。'
          },
          {
            id: 'c1u8l5q4',
            type: 'choice',
            question: '学古诗最好的方法是什么？',
            options: ["死记硬背","先理解意思再背诵","不用学"],
            answer: '先理解意思再背诵',
            hint: '怎样学古诗最有效',
            explanation: '先理解古诗的意思，再背诵，这样记得更牢。'
          },
          {
            id: 'c1u8l5q5',
            type: 'fill',
            question: '用"思乡"造一个句子：___',
            answer: '李白看着月亮思乡',
            hint: '思乡是什么意思',
            explanation: '思乡就是想念家乡，李白看着月亮想念远方的家乡。'
          },
          {
            id: 'c1u8l5q6',
            type: 'choice',
            question: '【期末真题】"曲项向天歌"中"项"是什么意思？',
            options: ["翅膀","脖子","尾巴"],
            answer: '脖子',
            hint: '鹅弯着什么向天叫',
            explanation: '"项"就是脖子的意思，"曲项"就是弯着脖子。这是期末常考题！'
          },
          {
            id: 'c1u8l5q7',
            type: 'fill',
            question: '回顾前面学过的知识："床前明月光"出自哪首诗？',
            answer: '静夜思',
            hint: '[古诗背诵]（语文一年级-第8单元）',
            explanation: '"床前明月光"出自李白的《静夜思》。'
          }
        ]
      }
    ]
  }
]
