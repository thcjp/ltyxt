import type { Unit } from '@/types'

export const englishGrade4: Unit[] = [
  {
    id: 'e4u1',
    title: 'My Classroom',
    subtitle: '教室物品词汇与Where is...?句型',
    order: 1,
    lessons: [
      {
        id: 'e4u1l1',
        title: '教室物品词汇',
        order: 1,
        teachingMethod: 'TPR全身反应法+实物指认',
        iDo: '家长指着教室/家里的物品，清晰说出door、window、board、picture，配合手指动作示范',
        weDo: '亲子一起指物说单词，玩"我说你指"游戏，家长说单词孩子指物品',
        youDo: '孩子独立指认物品说出对应英文单词，并尝试用What\'s this?提问',
        parentTips: '在家里物品上贴英文标签，看到就读出来，加深记忆',
        funElement: '玩"教室寻宝"游戏，找到物品大声说出英文单词',
        gsapAnimations: [
          'GSAP:教室场景物品逐步出现-sceneBuild',
          'GSAP:物品单词高亮-highlight'
        ],
        images: [
          'IMG:教室场景物品标注插图',
          'IMG:教室物品单词卡'
        ],
        content: [
          {
            type: 'text',
            content: 'Welcome to our classroom! 教室里有很多物品，让我们一起来认识它们的英文名字吧。door是门，window是窗户，board是黑板，picture是图画。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'door — 门\nwindow — 窗户\nboard — 黑板\npicture — 图画',
            animationType: 'cardReveal',
            label: '教室物品词汇'
          },
          {
            type: 'dialogue',
            content: 'Teacher: What\'s this?\nAmy: It\'s a door.\nTeacher: And what\'s that?\nAmy: It\'s a picture.',
            animationType: 'timeline',
            label: '教室问答'
          },
          {
            type: 'tip',
            content: '指认物品时可以问 What\'s this?（这是什么？）回答用 It\'s a...（它是……）这是最基本的问答句型。',
            animationType: 'sequence',
            label: '学习提示'
          },
          {
            type: 'text',
            content: '教室里还有很多物品哦：desk（课桌）、chair（椅子）、light（灯）。试着用 What\'s this? 来问问看吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '教室场景逐步出现门、窗、黑板、图画，配合单词朗读',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'My Classroom',
              sceneBuildConfig: {
                sceneName: 'Classroom',
                elements: [
                  {
                    id: 'el-0',
                    text: 'door',
                    emoji: '🚪',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'door'
                  },
                  {
                    id: 'el-1',
                    text: 'window',
                    emoji: '🪟',
                    delay: 0.4,
                    animation: 'popIn',
                    ttsText: 'window'
                  },
                  {
                    id: 'el-2',
                    text: 'board',
                    emoji: '📋',
                    delay: 0.8,
                    animation: 'scaleIn',
                    ttsText: 'board'
                  },
                  {
                    id: 'el-3',
                    text: 'picture',
                    emoji: '🖼',
                    delay: 1.2,
                    animation: 'fadeIn',
                    ttsText: 'picture'
                  }
                ]
              },
              ttsNarration: '教室物品：门、窗、黑板、图画'
            }
          },
          {
            type: 'example',
            content: 'What\'s this? — 这是什么？\nIt\'s a door. — 它是一扇门。\nWhat\'s that? — 那是什么？\nIt\'s a picture. — 那是一幅画。',
            animationType: 'cardReveal',
            label: '问答句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u1l1q1',
            type: 'choice',
            question: 'What\'s this? (pointing at the door)',
            answer: 'door',
            hint: '想一想进门的地方叫什么',
            explanation: 'door是门，指认物品用It\'s a door.',
            options: [
              'door',
              'window',
              'board',
              'picture'
            ]
          },
          {
            id: 'e4u1l1q2',
            type: 'fill',
            question: 'It\'s a _____. (窗户)',
            answer: 'window',
            hint: '教室里透光的地方',
            explanation: 'window是窗户，It\'s a window.表示它是一扇窗户'
          },
          {
            id: 'e4u1l1q3',
            type: 'choice',
            question: 'Which one do teachers write on in class?',
            answer: 'board',
            hint: '老师上课写字的地方',
            explanation: 'board是黑板，老师在黑板上写字',
            options: [
              'door',
              'window',
              'board',
              'picture'
            ]
          },
          {
            id: 'e4u1l1q4',
            type: 'fill',
            question: 'What\'s _____? (这是什么？)',
            answer: 'this',
            hint: '问近处的东西用哪个词',
            explanation: '问近处的物品用What\'s this?，this表示这、这个'
          },
          {
            id: 'e4u1l1q5',
            type: 'choice',
            question: 'Amy points at a picture on the far wall. What should she say?',
            answer: 'What\'s that?',
            hint: '问远处的东西用什么词',
            explanation: '问远处的物品用What\'s that?，that表示那、那个',
            options: [
              'What\'s that?',
              'What\'s this?',
              'How are you?',
              'What\'s your name?'
            ]
          },
          {
            id: 'e4u1l1q6',
            type: 'fill',
            question: '— What\'s this? — _____ a window.',
            answer: 'It\'s',
            hint: '回答"它是什么"用什么开头',
            explanation: '回答用It\'s a...，It\'s是It is的缩写，表示"它是"'
          },
          {
            id: 'e4u1l1q7',
            type: 'fill',
            question: '教室里能开关透风透光的是 _____。',
            answer: 'window',
            hint: '[教室物品词汇]（英语四年级-第1单元）',
            explanation: 'window是窗户，可以开关通风透光，是教室重要物品'
          }
        ]
      },
      {
        id: 'e4u1l2',
        title: 'Where is...? 介词on/in/under',
        order: 2,
        teachingMethod: '情境式：藏找游戏',
        iDo: '家长把玩具放在不同位置(on/in/under)，边放边说Where is the cat? It\'s on the box.',
        weDo: '亲子一起玩藏找游戏，一个人藏一个人找，找到后用介词描述位置',
        youDo: '孩子独立用Where is...?提问，用on/in/under描述物品位置',
        parentTips: '藏找游戏：把文具藏在不同位置，让孩子用英语描述',
        funElement: '玩"小猫捉迷藏"，小猫藏在盒子上下里，孩子说出位置',
        gsapAnimations: [
          'GSAP:物品位置变化-sceneBuild',
          'GSAP:位置介词对比-compare'
        ],
        images: [
          'IMG:on/in/under位置示意图',
          'IMG:小猫藏找游戏插图'
        ],
        content: [
          {
            type: 'text',
            content: 'Where is the cat? 小猫在哪里？要学会用介词描述位置。on表示在……上面，in表示在……里面，under表示在……下面。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'on — 在……上面\nin — 在……里面\nunder — 在……下面',
            animationType: 'cardReveal',
            label: '位置介词'
          },
          {
            type: 'dialogue',
            content: 'Tom: Where is the book?\nLily: It\'s on the desk.\nTom: Where is the pencil?\nLily: It\'s in the pencil box.',
            animationType: 'timeline',
            label: '位置问答'
          },
          {
            type: 'tip',
            content: 'Where is...? 用来问单个物品在哪里，回答用 It\'s + 介词 + 地点。记住：is跟着单数物品。',
            animationType: 'sequence',
            label: '句型提示'
          },
          {
            type: 'text',
            content: '试试看：The cat is on the box.（在盒子上）The cat is in the box.（在盒子里）The cat is under the box.（在盒子下）位置不同，介词也不同哦！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '小猫在盒子的上面、里面、下面三个位置出现，配合介词朗读',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'Where Is the Cat?',
              sceneBuildConfig: {
                sceneName: 'Positions',
                elements: [
                  {
                    id: 'el-0',
                    text: 'on',
                    emoji: '🐱',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'on'
                  },
                  {
                    id: 'el-1',
                    text: 'in',
                    emoji: '📦',
                    delay: 0.5,
                    animation: 'popIn',
                    ttsText: 'in'
                  },
                  {
                    id: 'el-2',
                    text: 'under',
                    emoji: '⬇️',
                    delay: 1.0,
                    animation: 'scaleIn',
                    ttsText: 'under'
                  }
                ]
              },
              ttsNarration: '位置介词：上面、里面、下面'
            }
          },
          {
            type: 'example',
            content: 'Where is the book? — 书在哪里？\nIt\'s on the desk. — 它在书桌上。\nWhere is the ruler? — 尺子在哪里？\nIt\'s under the chair. — 它在椅子下。',
            animationType: 'cardReveal',
            label: '问答句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u1l2q1',
            type: 'choice',
            question: 'The book is _____ the desk. (在书桌上)',
            answer: 'on',
            hint: '在桌子的上面用什么介词',
            explanation: 'on表示在……上面，on the desk表示在书桌上',
            options: [
              'on',
              'in',
              'under',
              'at'
            ]
          },
          {
            id: 'e4u1l2q2',
            type: 'fill',
            question: 'The cat is _____ the box. (在盒子里)',
            answer: 'in',
            hint: '在里面用什么介词',
            explanation: 'in表示在……里面，in the box表示在盒子里'
          },
          {
            id: 'e4u1l2q3',
            type: 'choice',
            question: 'Where is the pencil? — It\'s _____ the chair. (在椅子下)',
            answer: 'under',
            hint: '在椅子下面用什么介词',
            explanation: 'under表示在……下面，under the chair表示在椅子下面',
            options: [
              'on',
              'in',
              'under',
              'to'
            ]
          },
          {
            id: 'e4u1l2q4',
            type: 'fill',
            question: '_____ is the book? (书在哪里？)',
            answer: 'Where',
            hint: '问位置的疑问词是什么',
            explanation: 'Where is...?用来问物品在哪里，Where是疑问副词'
          },
          {
            id: 'e4u1l2q5',
            type: 'choice',
            question: 'Which sentence means "猫在盒子下面"？',
            answer: 'The cat is under the box.',
            hint: '在下面用under',
            explanation: 'under the box表示在盒子下面，The cat is under the box.表示猫在盒子下',
            options: [
              'The cat is on the box.',
              'The cat is in the box.',
              'The cat is under the box.',
              'The cat is at the box.'
            ]
          },
          {
            id: 'e4u1l2q6',
            type: 'fill',
            question: '— Where is the picture? — _____ on the wall.',
            answer: 'It\'s',
            hint: '回答物品位置用什么开头',
            explanation: '回答用It\'s + 介词 + 地点，It\'s = It is'
          },
          {
            id: 'e4u1l2q7',
            type: 'choice',
            question: '"在桌子上面"用英语怎么说？',
            answer: 'on the desk',
            hint: '[位置介词]（英语四年级-第1单元）',
            explanation: 'on the desk表示在书桌上面，on是表示在物体表面的介词',
            options: [
              'in the desk',
              'under the desk',
              'on the desk',
              'at the desk'
            ]
          }
        ]
      },
      {
        id: 'e4u1l3',
        title: 'Let me... 请求帮忙',
        order: 3,
        teachingMethod: '角色扮演法',
        iDo: '家长扮演小老师示范说Let me clean the board.（让我擦黑板）配合擦黑板的动作',
        weDo: '亲子一起角色扮演，轮流用Let me...提出帮忙请求并做动作',
        youDo: '孩子独立用Let me...造句，表达自己想要帮忙做的事情',
        parentTips: '角色扮演：当小老师，用Let me...主动帮忙做教室事务',
        funElement: '玩"小助手"游戏，谁先说Let me...谁就帮忙做一件事',
        gsapAnimations: [
          'GSAP:动作卡片翻转-cardReveal',
          'GSAP:卡片依次出现-stagger'
        ],
        images: [
          'IMG:Let me动作卡插图',
          'IMG:小老师帮忙场景'
        ],
        content: [
          {
            type: 'text',
            content: '在教室里，我们可以用 Let me... 来主动帮忙。Let me是"让我"的意思，后面接要做的事。Let me clean the board.就是"让我擦黑板"。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'Let me clean the board. — 让我擦黑板。\nLet me open the door. — 让我开门。\nLet me close the window. — 让我关窗。\nLet me help you. — 让我帮你。',
            animationType: 'cardReveal',
            label: 'Let me句型'
          },
          {
            type: 'dialogue',
            content: 'Amy: Let me clean the board, teacher.\nTeacher: Thank you, Amy!\nTom: Let me open the door.\nTeacher: Good boy, Tom!',
            animationType: 'timeline',
            label: '帮忙对话'
          },
          {
            type: 'tip',
            content: 'Let me... 是礼貌地提出帮忙的句型，me是"我"的宾格。说的时候面带微笑，显得更有礼貌哦！',
            animationType: 'sequence',
            label: '学习提示'
          },
          {
            type: 'text',
            content: 'Let me后面要接动词原形，比如clean（擦）、open（开）、close（关）、help（帮助）。记住：Let me + 动词原形！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '动作卡片翻转，揭示擦黑板、开门、关窗、帮忙四个动作',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Let Me Help',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'clean the board',
                    back: '🧽',
                    ttsText: 'Let me clean the board'
                  },
                  {
                    front: 'open the door',
                    back: '🚪',
                    ttsText: 'Let me open the door'
                  },
                  {
                    front: 'close the window',
                    back: '🪟',
                    ttsText: 'Let me close the window'
                  },
                  {
                    front: 'help you',
                    back: '🤝',
                    ttsText: 'Let me help you'
                  }
                ]
              },
              ttsNarration: '请求帮忙：擦黑板、开门、关窗、帮你'
            }
          },
          {
            type: 'example',
            content: 'Let me clean — 让我擦\nLet me open — 让我开\nLet me close — 让我关\nLet me help — 让我帮',
            animationType: 'cardReveal',
            label: '动词搭配'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u1l3q1',
            type: 'choice',
            question: '"让我擦黑板"用英语怎么说？',
            answer: 'Let me clean the board.',
            hint: '擦黑板用clean the board',
            explanation: 'Let me + 动词原形，clean the board是擦黑板',
            options: [
              'Let me clean the board.',
              'Let me open the board.',
              'Let me close the board.',
              'Let me help the board.'
            ]
          },
          {
            id: 'e4u1l3q2',
            type: 'fill',
            question: 'Let me _____ the door. (开)',
            answer: 'open',
            hint: '开门的动词是什么',
            explanation: 'open是开，Let me open the door.表示让我开门'
          },
          {
            id: 'e4u1l3q3',
            type: 'choice',
            question: 'Which one means "让我关窗"？',
            answer: 'Let me close the window.',
            hint: '关窗用close the window',
            explanation: 'close是关，window是窗，Let me close the window.表示让我关窗',
            options: [
              'Let me open the window.',
              'Let me close the window.',
              'Let me clean the window.',
              'Let me help the window.'
            ]
          },
          {
            id: 'e4u1l3q4',
            type: 'fill',
            question: 'Let me _____ you. (帮助)',
            answer: 'help',
            hint: '帮忙的动词是什么',
            explanation: 'help是帮助，Let me help you.表示让我帮你'
          },
          {
            id: 'e4u1l3q5',
            type: 'choice',
            question: 'Let me后面应该接什么？',
            answer: '动词原形',
            hint: '想一想me后面跟什么词',
            explanation: 'Let me后面接动词原形，如clean、open、close、help',
            options: [
              '名词',
              '动词原形',
              '形容词',
              '副词'
            ]
          },
          {
            id: 'e4u1l3q6',
            type: 'fill',
            question: '— Let me clean the board. — _____ you!',
            answer: 'Thank',
            hint: '别人帮忙后要说什么',
            explanation: '别人帮忙后说Thank you!表示感谢'
          },
          {
            id: 'e4u1l3q7',
            type: 'fill',
            question: 'Let me _____ the window. (关窗)',
            answer: 'close',
            hint: '[Let me句型]（英语四年级-第1单元）',
            explanation: 'close是关，Let me close the window.表示让我关窗，是教室帮忙用语'
          }
        ]
      },
      {
        id: 'e4u1l4',
        title: '教室物品对话综合',
        order: 4,
        teachingMethod: '情境对话法',
        iDo: '家长示范完整对话：What\'s in the classroom? Where is...? Let me...',
        weDo: '亲子一起进行教室情境对话，一方提问一方回答，角色互换',
        youDo: '孩子独立完成一段教室对话，综合运用词汇和句型',
        parentTips: '对话练习：What\'s in the classroom? Where is...? Let me...',
        funElement: '玩"教室小导游"游戏，孩子当导游介绍教室物品',
        gsapAnimations: [
          'GSAP:对话气泡依次出现-timeline',
          'GSAP:关键词高亮-highlight'
        ],
        images: [
          'IMG:教室对话场景图',
          'IMG:对话气泡插图'
        ],
        content: [
          {
            type: 'text',
            content: '今天我们要把学过的教室用语串起来，进行完整的对话。用 What\'s this/that? 问物品，用 Where is...? 问位置，用 Let me... 提出帮忙。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'What\'s this? — It\'s a door.\nWhere is the book? — It\'s on the desk.\nLet me clean the board. — Thank you!',
            animationType: 'timeline',
            label: '综合句型'
          },
          {
            type: 'dialogue',
            content: 'Guest: Wow, your classroom is nice! What\'s this?\nAmy: It\'s a picture.\nGuest: Where is the board?\nAmy: It\'s there. Let me clean the board.\nGuest: Thank you!',
            animationType: 'timeline',
            label: '教室参观对话'
          },
          {
            type: 'tip',
            content: '对话时要注意听对方问什么：问What用It\'s a...回答，问Where用It\'s + 介词回答，听到Let me...要说Thank you!',
            animationType: 'sequence',
            label: '对话技巧'
          },
          {
            type: 'text',
            content: '做对话小达人：找一个小伙伴，一人当参观者，一人当小主人，用英语介绍教室吧！记住要面带微笑哦。',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '对话气泡依次出现，展示参观教室的完整对话',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'Classroom Tour',
              timelineConfig: {
                steps: [
                  {
                    text: 'Welcome to our classroom!',
                    emoji: '🚪',
                    ttsNarration: 'Welcome to our classroom!'
                  },
                  {
                    text: 'What\'s this?',
                    emoji: '👆',
                    ttsNarration: 'What\'s this?'
                  },
                  {
                    text: 'It\'s a picture.',
                    emoji: '🖼',
                    ttsNarration: 'It\'s a picture.'
                  },
                  {
                    text: 'Where is the board?',
                    emoji: '📋',
                    ttsNarration: 'Where is the board?'
                  },
                  {
                    text: 'Let me clean the board.',
                    emoji: '🧽',
                    ttsNarration: 'Let me clean the board.'
                  }
                ]
              },
              ttsNarration: '教室参观对话'
            }
          },
          {
            type: 'example',
            content: 'What\'s in the classroom? — 教室里有什么？\nA door, a window, a board and pictures. — 门、窗、黑板和图画。',
            animationType: 'cardReveal',
            label: '拓展问答'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u1l4q1',
            type: 'choice',
            question: 'Guest asks "What\'s this?" about a window. Amy should say?',
            answer: 'It\'s a window.',
            hint: '问What用什么回答',
            explanation: '问What\'s this?用It\'s a + 物品回答',
            options: [
              'It\'s a window.',
              'It\'s on the desk.',
              'Let me help.',
              'It\'s a door.'
            ]
          },
          {
            id: 'e4u1l4q2',
            type: 'fill',
            question: '— Where is the book? — _____ on the desk.',
            answer: 'It\'s',
            hint: '问Where用什么回答',
            explanation: '问Where is...?用It\'s + 介词 + 地点回答'
          },
          {
            id: 'e4u1l4q3',
            type: 'choice',
            question: 'Amy says "Let me clean the board." Guest should say?',
            answer: 'Thank you!',
            hint: '别人帮忙后说什么',
            explanation: '别人主动帮忙后要说Thank you!表示感谢',
            options: [
              'Thank you!',
              'Goodbye!',
              'Sorry!',
              'Hello!'
            ]
          },
          {
            id: 'e4u1l4q4',
            type: 'fill',
            question: 'What\'s _____? — It\'s a picture.',
            answer: 'this',
            hint: '问近处物品用什么',
            explanation: '问近处物品用What\'s this?，this表示这'
          },
          {
            id: 'e4u1l4q5',
            type: 'choice',
            question: 'Which question asks about location (位置)?',
            answer: 'Where is the board?',
            hint: '问位置的疑问词',
            explanation: 'Where is...?用来问物品在哪里，是问位置的句型',
            options: [
              'What\'s this?',
              'Where is the board?',
              'Let me help you.',
              'How are you?'
            ]
          },
          {
            id: 'e4u1l4q6',
            type: 'fill',
            question: 'Let me _____ the door for you. (开)',
            answer: 'open',
            hint: '开门的动词',
            explanation: 'open是开，Let me open the door.表示让我为你开门'
          },
          {
            id: 'e4u1l4q7',
            type: 'choice',
            question: '参观教室时，想问"那是什么"，应该说？',
            answer: 'What\'s that?',
            hint: '[教室问答句型]（英语四年级-第1单元）',
            explanation: '问远处物品用What\'s that?，that表示那',
            options: [
              'What\'s that?',
              'Where is that?',
              'Let me see.',
              'How is that?'
            ]
          }
        ]
      },
      {
        id: 'e4u1l5',
        title: '第一单元综合检测',
        order: 5,
        teachingMethod: '形成性评价法',
        iDo: '家长引导孩子回顾本单元词汇和句型，示范一道检测题',
        weDo: '亲子一起做练习题，互相检查，讨论错误原因',
        youDo: '孩子独立完成单元检测，检验教室物品词汇和Where is/Let me句型',
        parentTips: '词汇+介词+句型综合，正确率达到80%可获三星',
        funElement: '通关后获得"Classroom达人"徽章，播放撒花动画',
        gsapAnimations: [
          'GSAP:通关撒花-confetti',
          'GSAP:星星飞入-starFlyIn'
        ],
        images: [
          'IMG:Classroom达人徽章',
          'IMG:单元回顾插图'
        ],
        content: [
          {
            type: 'text',
            content: '一起来回顾My Classroom单元！我们学了教室物品door/window/board/picture，位置介词on/in/under，还有Where is...?和Let me...句型。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'door门 window窗 board黑板 picture图画\non上 in里 under下\nWhere is...? It\'s on/in/under...\nLet me + 动词原形',
            animationType: 'cardReveal',
            label: '单元知识树'
          },
          {
            type: 'dialogue',
            content: 'Teacher: What\'s this?\nStudent: It\'s a board.\nTeacher: Where is the picture?\nStudent: It\'s on the wall.\nTeacher: Let me clean the board.\nStudent: Thank you!',
            animationType: 'timeline',
            label: '综合对话回顾'
          },
          {
            type: 'tip',
            content: '检测时先读清题目，选择题看清选项，填空题注意大小写和拼写，做完认真检查。',
            animationType: 'sequence',
            label: '答题技巧'
          },
          {
            type: 'text',
            content: '准备好了吗？7道题检验你的学习成果。基础题、提高题、挑战题，还有一道回溯题。加油，Classroom达人！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '回顾卡片翻转，揭示本单元四大知识点',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Unit 1 Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Classroom Items',
                    back: '🏫',
                    ttsText: 'door window board picture'
                  },
                  {
                    front: 'Prepositions',
                    back: '📍',
                    ttsText: 'on in under'
                  },
                  {
                    front: 'Where is...?',
                    back: '❓',
                    ttsText: 'Where is the book?'
                  },
                  {
                    front: 'Let me...',
                    back: '🤝',
                    ttsText: 'Let me clean the board.'
                  }
                ]
              },
              ttsNarration: '第一单元回顾：物品、介词、句型'
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u1l5q1',
            type: 'choice',
            question: 'What do we call the thing we write on in class?',
            answer: 'board',
            hint: '上课写字的物品',
            explanation: 'board是黑板，老师在黑板上写字',
            options: [
              'door',
              'board',
              'window',
              'picture'
            ]
          },
          {
            id: 'e4u1l5q2',
            type: 'fill',
            question: 'The cat is _____ the box. (在盒子下面)',
            answer: 'under',
            hint: '在下面用什么介词',
            explanation: 'under表示在……下面，under the box表示在盒子下面'
          },
          {
            id: 'e4u1l5q3',
            type: 'choice',
            question: '— Where is the book? — _____ on the desk.',
            answer: 'It\'s',
            hint: '问Where用什么回答',
            explanation: '回答Where is...?用It\'s + 介词 + 地点',
            options: [
              'It\'s',
              'They',
              'This',
              'What'
            ]
          },
          {
            id: 'e4u1l5q4',
            type: 'fill',
            question: 'Let me _____ the window. (关)',
            answer: 'close',
            hint: '关窗的动词',
            explanation: 'close是关，Let me close the window.表示让我关窗'
          },
          {
            id: 'e4u1l5q5',
            type: 'choice',
            question: 'Which sentence is correct?',
            answer: 'The picture is on the wall.',
            hint: '图画在哪里',
            explanation: '图画挂在墙上，on the wall表示在墙上，介词用on',
            options: [
              'The picture is on the wall.',
              'The picture in the wall.',
              'The picture under the wall.',
              'The picture is a wall.'
            ]
          },
          {
            id: 'e4u1l5q6',
            type: 'fill',
            question: '— What\'s that? — _____ a window.',
            answer: 'It\'s',
            hint: '问What用什么回答',
            explanation: '问What\'s that?用It\'s a + 物品回答'
          },
          {
            id: 'e4u1l5q7',
            type: 'choice',
            question: '"让我帮你"用Let me句型怎么说？',
            answer: 'Let me help you.',
            hint: '[Let me句型]（英语四年级-第1单元）',
            explanation: 'help是帮助，Let me help you.表示让我帮你',
            options: [
              'Let me help you.',
              'Let me you help.',
              'Let me helps you.',
              'Let me helping you.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'e4u2',
    title: 'My Schoolbag',
    subtitle: '学习用品词汇与What\'s in...?句型',
    order: 2,
    lessons: [
      {
        id: 'e4u2l1',
        title: '学习用品词汇',
        order: 1,
        teachingMethod: 'TPR全身反应法+实物',
        iDo: '家长拿出书包里的文具，逐一举起说book、ruler、eraser、pencil',
        weDo: '亲子一起拿文具说单词，玩"我说你拿"游戏',
        youDo: '孩子独立辨认文具并说出英文单词',
        parentTips: '拿出书包里的文具，逐一学单词，贴标签记忆',
        funElement: '玩"文具商店"游戏，买卖文具说单词',
        gsapAnimations: [
          'GSAP:文具卡片翻转-cardReveal',
          'GSAP:卡片高亮-highlight'
        ],
        images: [
          'IMG:文具词汇图',
          'IMG:书包与文具插图'
        ],
        content: [
          {
            type: 'text',
            content: '打开你的schoolbag（书包），里面装着好多学习用品！book是书，ruler是尺子，eraser是橡皮，pencil是铅笔。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'book — 书\nruler — 尺子\neraser — 橡皮\npencil — 铅笔',
            animationType: 'cardReveal',
            label: '学习用品词汇'
          },
          {
            type: 'dialogue',
            content: 'Mom: What\'s in your hand?\nTom: It\'s a pencil.\nMom: And this?\nTom: It\'s a ruler.',
            animationType: 'timeline',
            label: '文具问答'
          },
          {
            type: 'tip',
            content: 'pencil和ruler读音相似，注意区分：pencil是铅笔，ruler是尺子，多读几遍就能分清啦！',
            animationType: 'sequence',
            label: '发音提示'
          },
          {
            type: 'text',
            content: '书包里还有：pen（钢笔）、bag（包）、crayon（蜡笔）。把它们都拿出来，一边说单词一边整理书包吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '文具卡片翻转，揭示书、尺子、橡皮、铅笔四个单词',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'My School Supplies',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'book',
                    back: '📖',
                    ttsText: 'book'
                  },
                  {
                    front: 'ruler',
                    back: '📏',
                    ttsText: 'ruler'
                  },
                  {
                    front: 'eraser',
                    back: '🧽',
                    ttsText: 'eraser'
                  },
                  {
                    front: 'pencil',
                    back: '✏️',
                    ttsText: 'pencil'
                  }
                ]
              },
              ttsNarration: '学习用品：书、尺子、橡皮、铅笔'
            }
          },
          {
            type: 'example',
            content: 'This is a book. — 这是一本书。\nThis is a ruler. — 这是一把尺子。\nThis is an eraser. — 这是一块橡皮。\nThis is a pencil. — 这是一支铅笔。',
            animationType: 'cardReveal',
            label: '认读句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u2l1q1',
            type: 'choice',
            question: 'Which one do you write with?',
            answer: 'pencil',
            hint: '写字用的文具',
            explanation: 'pencil是铅笔，用来写字',
            options: [
              'book',
              'ruler',
              'eraser',
              'pencil'
            ]
          },
          {
            id: 'e4u2l1q2',
            type: 'fill',
            question: 'This is a _____. (尺子)',
            answer: 'ruler',
            hint: '画直线用的文具',
            explanation: 'ruler是尺子，用来画直线'
          },
          {
            id: 'e4u2l1q3',
            type: 'choice',
            question: 'Which one erases (擦掉) your mistakes?',
            answer: 'eraser',
            hint: '擦错字用的文具',
            explanation: 'eraser是橡皮，用来擦掉写错的字',
            options: [
              'book',
              'ruler',
              'eraser',
              'pencil'
            ]
          },
          {
            id: 'e4u2l1q4',
            type: 'fill',
            question: 'I read a _____ every day. (书)',
            answer: 'book',
            hint: '每天读的东西',
            explanation: 'book是书，I read a book表示我读书'
          },
          {
            id: 'e4u2l1q5',
            type: 'choice',
            question: 'Tom holds a pencil. Mom asks "What\'s in your hand?" He says?',
            answer: 'It\'s a pencil.',
            hint: '问手里拿什么怎么回答',
            explanation: '问What\'s in your hand?用It\'s a + 文具回答',
            options: [
              'It\'s a pencil.',
              'It\'s on the desk.',
              'Let me help.',
              'It\'s a door.'
            ]
          },
          {
            id: 'e4u2l1q6',
            type: 'fill',
            question: 'This is _____ eraser. (一块橡皮)',
            answer: 'an',
            hint: 'eraser前用a还是an',
            explanation: 'eraser以元音音素开头，前面用an，an eraser'
          },
          {
            id: 'e4u2l1q7',
            type: 'fill',
            question: '写字画画用的笔叫 _____。',
            answer: 'pencil',
            hint: '[学习用品词汇]（英语四年级-第2单元）',
            explanation: 'pencil是铅笔，用来写字画画，是重要的学习用品'
          }
        ]
      },
      {
        id: 'e4u2l2',
        title: 'What\'s in your schoolbag?',
        order: 2,
        teachingMethod: '情境对话法',
        iDo: '家长示范翻书包问答：What\'s in your schoolbag? A book and a pencil.',
        weDo: '亲子一起翻书包问答，轮流问What\'s in your schoolbag?',
        youDo: '孩子独立翻书包问答，用英语说出书包里的物品',
        parentTips: '翻书包问答：What\'s in your schoolbag? 说出书包里有什么',
        funElement: '玩"猜书包"游戏，蒙眼摸书包里物品猜单词',
        gsapAnimations: [
          'GSAP:书包打开物品逐一出现-sceneBuild',
          'GSAP:物品高亮-highlight'
        ],
        images: [
          'IMG:书包打开物品图',
          'IMG:翻书包对话插图'
        ],
        content: [
          {
            type: 'text',
            content: 'What\'s in your schoolbag? 你的书包里有什么？这个句型用来问容器里装了什么。回答可以说 A book and a pencil.（一本书和一支铅笔）。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'What\'s in your schoolbag? — 你的书包里有什么？\nA book and a ruler. — 一本书和一把尺子。\nWhat\'s in the pencil box? — 文具盒里有什么？\nTwo pencils and an eraser. — 两支铅笔和一块橡皮。',
            animationType: 'timeline',
            label: '问答句型'
          },
          {
            type: 'dialogue',
            content: 'Amy: What\'s in your schoolbag, Tom?\nTom: A book, a ruler and a pencil.\nAmy: Wow, so many things!\nTom: And an eraser too!',
            animationType: 'timeline',
            label: '书包对话'
          },
          {
            type: 'tip',
            content: 'What\'s = What is。问一个容器里有什么用 What\'s in + 容器？回答时列举物品，多个物品用and连接。',
            animationType: 'sequence',
            label: '句型提示'
          },
          {
            type: 'text',
            content: '除了schoolbag，还可以问 What\'s in the pencil box?（文具盒里有什么？）What\'s in the desk?（课桌里有什么？）快去问问看吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '书包打开，书本、尺子、橡皮、铅笔逐一出现，配合朗读',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'What\'s in the Schoolbag?',
              sceneBuildConfig: {
                sceneName: 'Schoolbag',
                elements: [
                  {
                    id: 'el-0',
                    text: 'book',
                    emoji: '📖',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'book'
                  },
                  {
                    id: 'el-1',
                    text: 'ruler',
                    emoji: '📏',
                    delay: 0.4,
                    animation: 'popIn',
                    ttsText: 'ruler'
                  },
                  {
                    id: 'el-2',
                    text: 'eraser',
                    emoji: '🧽',
                    delay: 0.8,
                    animation: 'scaleIn',
                    ttsText: 'eraser'
                  },
                  {
                    id: 'el-3',
                    text: 'pencil',
                    emoji: '✏️',
                    delay: 1.2,
                    animation: 'fadeIn',
                    ttsText: 'pencil'
                  }
                ]
              },
              ttsNarration: '书包里有什么：书、尺子、橡皮、铅笔'
            }
          },
          {
            type: 'example',
            content: 'What\'s in + 容器? — ……里有什么？\nA... and a... — 一个……和一个……',
            animationType: 'cardReveal',
            label: '句型公式'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u2l2q1',
            type: 'choice',
            question: '"你的书包里有什么"用英语怎么说？',
            answer: 'What\'s in your schoolbag?',
            hint: '问容器里有什么的句型',
            explanation: 'What\'s in your schoolbag?用来问书包里有什么',
            options: [
              'What\'s in your schoolbag?',
              'Where is your schoolbag?',
              'What\'s your schoolbag?',
              'Let me your schoolbag.'
            ]
          },
          {
            id: 'e4u2l2q2',
            type: 'fill',
            question: '— What\'s in your schoolbag? — A book _____ a pencil.',
            answer: 'and',
            hint: '连接两个物品用什么',
            explanation: '多个物品用and连接，A book and a pencil表示一本书和一支铅笔'
          },
          {
            id: 'e4u2l2q3',
            type: 'choice',
            question: 'What\'s in the pencil box? — Two _____ and an eraser.',
            answer: 'pencils',
            hint: '两支铅笔用什么形式',
            explanation: '两支铅笔用复数pencils，two后面接复数名词',
            options: [
              'pencil',
              'pencils',
              'penciles',
              'pencil\'s'
            ]
          },
          {
            id: 'e4u2l2q4',
            type: 'fill',
            question: 'What\'s _____ the desk? (课桌里)',
            answer: 'in',
            hint: '问里面有什么用什么介词',
            explanation: '问容器里有什么用What\'s in + 容器？in表示在……里面'
          },
          {
            id: 'e4u2l2q5',
            type: 'choice',
            question: 'Which answer is correct for "What\'s in your schoolbag?"?',
            answer: 'A book and a ruler.',
            hint: '回答书包里有什么',
            explanation: '回答列举书包里的物品，用A... and a...的句型',
            options: [
              'It\'s on the desk.',
              'A book and a ruler.',
              'Let me help you.',
              'It\'s a door.'
            ]
          },
          {
            id: 'e4u2l2q6',
            type: 'fill',
            question: 'What\'s = What _____.',
            answer: 'is',
            hint: 'What\'s是缩写形式',
            explanation: 'What\'s是What is的缩写，is是be动词'
          },
          {
            id: 'e4u2l2q7',
            type: 'choice',
            question: '问"文具盒里有什么"应该说？',
            answer: 'What\'s in the pencil box?',
            hint: '[What\'s in句型]（英语四年级-第2单元）',
            explanation: '问容器里有什么用What\'s in + 容器？文具盒是pencil box',
            options: [
              'What\'s in the pencil box?',
              'Where is the pencil box?',
              'What\'s the pencil box?',
              'Let me the pencil box.'
            ]
          }
        ]
      },
      {
        id: 'e4u2l3',
        title: '颜色与文具：a red pencil',
        order: 3,
        teachingMethod: '多感官教学法',
        iDo: '家长示范颜色+物品：a red pencil, a blue ruler，边说边展示彩色文具',
        weDo: '亲子一起说颜色+物品的短语，互相指认彩色文具',
        youDo: '孩子独立用"颜色+文具"描述自己的文具',
        parentTips: '颜色+物品：a red pencil, a blue ruler, a yellow eraser',
        funElement: '玩"彩色文具店"游戏，用颜色描述文具来"购买"',
        gsapAnimations: [
          'GSAP:颜色混合展示-colorMix',
          'GSAP:颜色高亮-highlight'
        ],
        images: [
          'IMG:彩色文具图',
          'IMG:颜色与物品插图'
        ],
        content: [
          {
            type: 'text',
            content: '文具也有颜色哦！把颜色词放在文具前面，就能描述文具的颜色。a red pencil是一支红铅笔，a blue ruler是一把蓝尺子。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'a red pencil — 一支红铅笔\na blue ruler — 一把蓝尺子\na yellow eraser — 一块黄橡皮\na green book — 一本绿书',
            animationType: 'cardReveal',
            label: '颜色+文具'
          },
          {
            type: 'dialogue',
            content: 'Clerk: Do you like this red pencil?\nLily: Yes! And I want a blue ruler too.\nClerk: Here you are.\nLily: Thank you!',
            animationType: 'timeline',
            label: '文具店对话'
          },
          {
            type: 'tip',
            content: '英语中颜色词要放在物品前面：颜色 + 物品。比如red pencil（红铅笔），不能说pencil red哦！',
            animationType: 'sequence',
            label: '语序提示'
          },
          {
            type: 'text',
            content: '你知道颜色混合吗？红色和黄色混合变成橙色，蓝色和黄色混合变成绿色。来认识更多颜色吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '红色和黄色混合变成橙色，演示颜色混合原理',
            animationType: 'colorMix',
            animationConfig: {
              sceneType: 'colorMix',
              title: 'Color Mix',
              colorMixConfig: {
                color1: 'red',
                color1Hex: '#FF0000',
                color2: 'yellow',
                color2Hex: '#FFFF00',
                resultColor: 'orange',
                resultHex: '#FF8C00'
              },
              ttsNarration: '红色加黄色变成橙色'
            }
          },
          {
            type: 'example',
            content: 'red红 blue蓝 yellow黄 green绿\na red pencil a blue book a yellow eraser',
            animationType: 'cardReveal',
            label: '颜色词汇'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u2l3q1',
            type: 'choice',
            question: '"一支红铅笔"用英语怎么说？',
            answer: 'a red pencil',
            hint: '颜色放在物品哪里',
            explanation: '颜色词放在物品前，a red pencil表示一支红铅笔',
            options: [
              'a red pencil',
              'a pencil red',
              'red a pencil',
              'pencil a red'
            ]
          },
          {
            id: 'e4u2l3q2',
            type: 'fill',
            question: 'a _____ ruler (蓝色的尺子)',
            answer: 'blue',
            hint: '蓝色用什么词',
            explanation: 'blue是蓝色，a blue ruler表示一把蓝尺子'
          },
          {
            id: 'e4u2l3q3',
            type: 'choice',
            question: 'Which is correct order (语序)?',
            answer: 'a yellow eraser',
            hint: '颜色和物品谁在前',
            explanation: '颜色词放在物品前面，a yellow eraser表示一块黄橡皮',
            options: [
              'a yellow eraser',
              'a eraser yellow',
              'yellow a eraser',
              'eraser yellow a'
            ]
          },
          {
            id: 'e4u2l3q4',
            type: 'fill',
            question: 'red + yellow = _____ (橙色)',
            answer: 'orange',
            hint: '红加黄变什么色',
            explanation: '红色加黄色混合变成橙色，orange是橙色'
          },
          {
            id: 'e4u2l3q5',
            type: 'choice',
            question: 'Lily wants a green book. What does she want?',
            answer: 'A green book.',
            hint: '绿色书是什么',
            explanation: 'a green book表示一本绿书，green是绿色',
            options: [
              'A green book.',
              'A red book.',
              'A blue book.',
              'A yellow book.'
            ]
          },
          {
            id: 'e4u2l3q6',
            type: 'fill',
            question: 'I have a _____ eraser. (黄色的)',
            answer: 'yellow',
            hint: '黄色用什么词',
            explanation: 'yellow是黄色，a yellow eraser表示一块黄橡皮'
          },
          {
            id: 'e4u2l3q7',
            type: 'choice',
            question: '"一把蓝色的尺子"正确说法是？',
            answer: 'a blue ruler',
            hint: '[颜色+物品]（英语四年级-第2单元）',
            explanation: '颜色词放在物品前，a blue ruler表示一把蓝尺子',
            options: [
              'a blue ruler',
              'a ruler blue',
              'blue a ruler',
              'ruler a blue'
            ]
          }
        ]
      },
      {
        id: 'e4u2l4',
        title: 'How many...? 数量问答',
        order: 4,
        teachingMethod: '游戏化教学法',
        iDo: '家长示范How many pencils? 边数边说数字，演示数量问答',
        weDo: '亲子一起数文具数量，玩How many...?问答游戏',
        youDo: '孩子独立用How many...?提问并回答数量',
        parentTips: 'How many...? 数文具数量，练习1-10的数字',
        funElement: '玩"快速数数"游戏，看谁最快数对文具数量',
        gsapAnimations: [
          'GSAP:数量从1滚动到实际数-numberCount',
          'GSAP:数字高亮-highlight'
        ],
        images: [
          'IMG:数量问答图',
          'IMG:不同数量文具插图'
        ],
        content: [
          {
            type: 'text',
            content: 'How many pencils? 有多少支铅笔？How many...?用来问数量。回答用数字：Three pencils.（三支铅笔。）',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'How many books? — 有几本书？\nThree books. — 三本书。\nHow many rulers? — 有几把尺子？\nTwo rulers. — 两把尺子。',
            animationType: 'timeline',
            label: '数量问答'
          },
          {
            type: 'dialogue',
            content: 'Teacher: How many pencils do you have?\nTom: I have five pencils.\nTeacher: How many erasers?\nTom: Two erasers!',
            animationType: 'timeline',
            label: '数量对话'
          },
          {
            type: 'tip',
            content: 'How many后面接可数名词复数。一个用单数，两个及以上用复数（通常加s）：one pencil, two pencils。',
            animationType: 'sequence',
            label: '语法提示'
          },
          {
            type: 'text',
            content: '来数数1到10：one, two, three, four, five, six, seven, eight, nine, ten。用手指一起数，边数边说英语数字！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '铅笔从1支数到5支，数字依次出现',
            animationType: 'numberCount',
            animationConfig: {
              sceneType: 'numberCount',
              title: 'How Many Pencils?',
              countConfig: {
                from: 1,
                to: 5,
                itemEmoji: '✏️',
                direction: 'forward'
              },
              ttsNarration: '从一数到五'
            }
          },
          {
            type: 'example',
            content: 'one1 two2 three3 four4 five5\nsix6 seven7 eight8 nine9 ten10',
            animationType: 'cardReveal',
            label: '数字1-10'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u2l4q1',
            type: 'choice',
            question: '"有多少本书"用英语怎么说？',
            answer: 'How many books?',
            hint: '问数量用什么句型',
            explanation: 'How many + 复数名词? 用来问数量',
            options: [
              'How many books?',
              'How much books?',
              'What books?',
              'Where books?'
            ]
          },
          {
            id: 'e4u2l4q2',
            type: 'fill',
            question: '— How many pencils? — _____ pencils. (三)',
            answer: 'Three',
            hint: '三用英语怎么说',
            explanation: 'three是三，Three pencils表示三支铅笔'
          },
          {
            id: 'e4u2l4q3',
            type: 'choice',
            question: 'How many books? — Two _____.',
            answer: 'books',
            hint: '两本书用什么形式',
            explanation: 'two后面接复数名词，two books表示两本书',
            options: [
              'book',
              'books',
              'bookes',
              'book\'s'
            ]
          },
          {
            id: 'e4u2l4q4',
            type: 'fill',
            question: 'How _____ rulers do you have? (多少)',
            answer: 'many',
            hint: '问可数数量用什么',
            explanation: 'How many + 复数名词? 用来问可数物品的数量'
          },
          {
            id: 'e4u2l4q5',
            type: 'choice',
            question: 'Which number means "七"?',
            answer: 'seven',
            hint: '七的英文是什么',
            explanation: 'seven是七，one到ten的数字要记牢',
            options: [
              'six',
              'seven',
              'eight',
              'nine'
            ]
          },
          {
            id: 'e4u2l4q6',
            type: 'fill',
            question: 'I have _____ books. (五)',
            answer: 'five',
            hint: '五的英文',
            explanation: 'five是五，I have five books表示我有五本书'
          },
          {
            id: 'e4u2l4q7',
            type: 'choice',
            question: 'How many后面应该接什么名词？',
            answer: '可数名词复数',
            hint: '[How many句型]（英语四年级-第2单元）',
            explanation: 'How many后面接可数名词复数，如books、pencils',
            options: [
              '可数名词复数',
              '不可数名词',
              '动词',
              '形容词'
            ]
          }
        ]
      },
      {
        id: 'e4u2l5',
        title: '第二单元综合检测',
        order: 5,
        teachingMethod: '形成性评价法',
        iDo: '家长引导回顾本单元词汇句型，示范一道检测题',
        weDo: '亲子一起做练习，互相检查讨论',
        youDo: '孩子独立完成检测，检验文具词汇、颜色、数量、句型',
        parentTips: '词汇+句型+颜色+数量综合，正确率80%可获三星',
        funElement: '通关获得"Schoolbag达人"徽章，撒花庆祝',
        gsapAnimations: [
          'GSAP:通关撒花-confetti',
          'GSAP:星星飞入-starFlyIn'
        ],
        images: [
          'IMG:Schoolbag达人徽章',
          'IMG:单元回顾插图'
        ],
        content: [
          {
            type: 'text',
            content: '回顾My Schoolbag单元！学习用品book/ruler/eraser/pencil，颜色+文具，What\'s in...?和How many...?句型，还有1-10数字。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'book书 ruler尺 eraser橡皮 pencil铅笔\na red pencil What\'s in...? How many...?\none two three four five six seven eight nine ten',
            animationType: 'cardReveal',
            label: '单元知识树'
          },
          {
            type: 'dialogue',
            content: 'Mom: What\'s in your schoolbag?\nTom: A book and two pencils.\nMom: What color is the pencil?\nTom: It\'s a red pencil.\nMom: How many erasers?\nTom: One eraser.',
            animationType: 'timeline',
            label: '综合对话'
          },
          {
            type: 'tip',
            content: '检测要细心：颜色词在物品前，How many接复数，What\'s是What is的缩写。做完再检查一遍。',
            animationType: 'sequence',
            label: '答题技巧'
          },
          {
            type: 'text',
            content: '7道题等你挑战！基础、提高、挑战加回溯，全部通关就是Schoolbag达人！加油！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '回顾卡片翻转，揭示本单元四大知识点',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Unit 2 Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Supplies',
                    back: '🎒',
                    ttsText: 'book ruler eraser pencil'
                  },
                  {
                    front: 'Colors',
                    back: '🎨',
                    ttsText: 'a red pencil a blue ruler'
                  },
                  {
                    front: 'What\'s in...?',
                    back: '📦',
                    ttsText: 'What\'s in your schoolbag?'
                  },
                  {
                    front: 'How many...?',
                    back: '🔢',
                    ttsText: 'How many pencils? Five.'
                  }
                ]
              },
              ttsNarration: '第二单元回顾：文具、颜色、句型、数字'
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u2l5q1',
            type: 'choice',
            question: 'Which one is a school supply (学习用品)?',
            answer: 'ruler',
            hint: '哪个是文具',
            explanation: 'ruler是尺子，属于学习用品',
            options: [
              'door',
              'ruler',
              'window',
              'picture'
            ]
          },
          {
            id: 'e4u2l5q2',
            type: 'fill',
            question: 'a _____ pencil (红色的铅笔)',
            answer: 'red',
            hint: '红色用什么词',
            explanation: 'red是红色，a red pencil表示一支红铅笔'
          },
          {
            id: 'e4u2l5q3',
            type: 'choice',
            question: '— What\'s in your schoolbag? — _____',
            answer: 'A book and a ruler.',
            hint: '回答书包里有什么',
            explanation: '回答列举物品用A... and a...',
            options: [
              'A book and a ruler.',
              'It\'s on the desk.',
              'Five books.',
              'Let me help.'
            ]
          },
          {
            id: 'e4u2l5q4',
            type: 'fill',
            question: '— How many books? — _____ books. (四)',
            answer: 'Four',
            hint: '四的英文',
            explanation: 'four是四，Four books表示四本书'
          },
          {
            id: 'e4u2l5q5',
            type: 'choice',
            question: 'Which phrase is correct?',
            answer: 'a blue eraser',
            hint: '颜色和物品的语序',
            explanation: '颜色词在物品前，a blue eraser表示一块蓝橡皮',
            options: [
              'a blue eraser',
              'a eraser blue',
              'blue a eraser',
              'eraser blue a'
            ]
          },
          {
            id: 'e4u2l5q6',
            type: 'fill',
            question: 'What\'s _____ the pencil box? (文具盒里)',
            answer: 'in',
            hint: '问里面有什么',
            explanation: '问容器里有什么用What\'s in + 容器？'
          },
          {
            id: 'e4u2l5q7',
            type: 'choice',
            question: '"两支铅笔"用英语怎么说？',
            answer: 'two pencils',
            hint: '[How many句型]（英语四年级-第2单元）',
            explanation: '两个以上用复数加s，two pencils表示两支铅笔',
            options: [
              'two pencil',
              'two pencils',
              'two penciles',
              'two pencil\'s'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'e4u3',
    title: 'My Friends',
    subtitle: '描述外貌性格与He/She is...句型',
    order: 3,
    lessons: [
      {
        id: 'e4u3l1',
        title: '外貌词汇：tall/short/thin/strong',
        order: 1,
        teachingMethod: 'TPR+对比教学法',
        iDo: '家长用手势比划tall（高）和short（矮），thin（瘦）和strong（壮），配合夸张动作',
        weDo: '亲子一起做手势比划高矮胖瘦，玩"我说你比"游戏',
        youDo: '孩子独立用外貌词汇描述自己或朋友',
        parentTips: '用手势比划高矮胖瘦，让孩子边做边说单词',
        funElement: '玩"反义词对对碰"，tall对short，thin对strong',
        gsapAnimations: [
          'GSAP:高矮胖瘦对比-compare',
          'GSAP:词汇高亮-highlight'
        ],
        images: [
          'IMG:高矮胖瘦对比图',
          'IMG:外貌词汇插图'
        ],
        content: [
          {
            type: 'text',
            content: '每个人长得都不一样！tall是高，short是矮，thin是瘦，strong是壮。用手势比划一下，高的人手举高，矮的人手放低。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'tall — 高的\nshort — 矮的\nthin — 瘦的\nstrong — 壮的',
            animationType: 'cardReveal',
            label: '外貌词汇'
          },
          {
            type: 'dialogue',
            content: 'Amy: Look at Tom! He is tall.\nLily: Yes, and he is strong.\nAmy: What about Bob?\nLily: He is short and thin.',
            animationType: 'timeline',
            label: '描述外貌'
          },
          {
            type: 'tip',
            content: 'tall和short是反义词，thin和strong也是反义词。记住这两对反义词，描述外貌就够用啦！',
            animationType: 'sequence',
            label: '学习提示'
          },
          {
            type: 'text',
            content: '描述外貌还可以用：big（大的）、small（小的）、young（年轻的）、old（老的）。试着描述一下你的好朋友吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: 'tall和short、thin和strong两组对比展示',
            animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: 'Tall vs Short & Thin vs Strong',
              compareConfig: {
                leftItems: [
                  'tall',
                  'strong'
                ],
                rightItems: [
                  'short',
                  'thin'
                ],
                result: 'close',
                resultText: 'tall and short are opposites; thin and strong are opposites'
              },
              ttsNarration: '高矮胖瘦对比：tall对short，thin对strong'
            }
          },
          {
            type: 'example',
            content: 'He is tall. — 他很高。\nShe is short. — 她很矮。\nHe is strong. — 他很壮。\nShe is thin. — 她很瘦。',
            animationType: 'cardReveal',
            label: '描述句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u3l1q1',
            type: 'choice',
            question: '"高的"用英语怎么说？',
            answer: 'tall',
            hint: '高用什么词',
            explanation: 'tall是高的，描述人高用tall',
            options: [
              'tall',
              'short',
              'thin',
              'strong'
            ]
          },
          {
            id: 'e4u3l1q2',
            type: 'fill',
            question: 'Tom is _____. (矮的)',
            answer: 'short',
            hint: '矮用什么词',
            explanation: 'short是矮的，Tom is short表示汤姆很矮'
          },
          {
            id: 'e4u3l1q3',
            type: 'choice',
            question: 'Which word is the opposite (反义词) of "tall"?',
            answer: 'short',
            hint: 'tall的反义词',
            explanation: 'tall（高）的反义词是short（矮）',
            options: [
              'thin',
              'short',
              'strong',
              'big'
            ]
          },
          {
            id: 'e4u3l1q4',
            type: 'fill',
            question: 'She is _____. (壮的)',
            answer: 'strong',
            hint: '壮用什么词',
            explanation: 'strong是壮的，She is strong表示她很壮'
          },
          {
            id: 'e4u3l1q5',
            type: 'choice',
            question: 'Lily says "Bob is thin and short." What does Bob look like?',
            answer: '又瘦又矮',
            hint: 'thin和short是什么意思',
            explanation: 'thin是瘦，short是矮，thin and short表示又瘦又矮',
            options: [
              '又高又壮',
              '又瘦又矮',
              '又胖又高',
              '又壮又瘦'
            ]
          },
          {
            id: 'e4u3l1q6',
            type: 'fill',
            question: 'The opposite of thin is _____. (壮)',
            answer: 'strong',
            hint: 'thin的反义词',
            explanation: 'thin（瘦）的反义词是strong（壮）'
          },
          {
            id: 'e4u3l1q7',
            type: 'choice',
            question: '"她又高又壮"用英语怎么说？',
            answer: 'She is tall and strong.',
            hint: '[外貌词汇]（英语四年级-第3单元）',
            explanation: 'tall高 strong壮，She is tall and strong.表示她又高又壮',
            options: [
              'She is tall and strong.',
              'She is short and thin.',
              'She is thin and short.',
              'She is strong and short.'
            ]
          }
        ]
      },
      {
        id: 'e4u3l2',
        title: 'He/She is... 描述外貌',
        order: 2,
        teachingMethod: '情境对话法',
        iDo: '家长示范描述朋友：He is tall and strong. She is short and thin.',
        weDo: '亲子一起描述朋友或家人的外貌，互相猜是谁',
        youDo: '孩子独立用He/She is...描述朋友的外貌',
        parentTips: 'He is tall and strong. She is short and thin. 描述家人朋友',
        funElement: '玩"猜猜他是谁"游戏，用He/She is...描述让人猜',
        gsapAnimations: [
          'GSAP:人物形象逐步构建-sceneBuild',
          'GSAP:关键词高亮-highlight'
        ],
        images: [
          'IMG:不同外貌人物图',
          'IMG:描述朋友场景插图'
        ],
        content: [
          {
            type: 'text',
            content: '描述男生用He is...，描述女生用She is...。He是"他"，She是"她"。He is tall.（他很高。）She is thin.（她很瘦。）',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'He is tall and strong. — 他又高又壮。\nShe is short and thin. — 她又矮又瘦。\nHe is young. — 他很年轻。\nShe is friendly. — 她很友善。',
            animationType: 'timeline',
            label: 'He/She句型'
          },
          {
            type: 'dialogue',
            content: 'Tom: Who is your friend?\nAmy: She is Lily. She is tall and thin.\nTom: Is he your friend too?\nAmy: Yes, he is Bob. He is short and strong.',
            animationType: 'timeline',
            label: '介绍朋友'
          },
          {
            type: 'tip',
            content: '描述男生一定用He，女生一定用She，不能搞混哦！两个特征用and连接：He is tall and strong.',
            animationType: 'sequence',
            label: '语法提示'
          },
          {
            type: 'text',
            content: '介绍朋友时先说名字再说外貌：This is Lily. She is tall and thin. 这样别人就能想象出你朋友的样子啦！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '人物形象逐步构建，先出现男孩高壮，再出现女孩矮瘦',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'My Friends',
              sceneBuildConfig: {
                sceneName: 'Friends',
                elements: [
                  {
                    id: 'el-0',
                    text: 'He is tall',
                    emoji: '🧑',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'He is tall'
                  },
                  {
                    id: 'el-1',
                    text: 'and strong',
                    emoji: '💪',
                    delay: 0.5,
                    animation: 'popIn',
                    ttsText: 'and strong'
                  },
                  {
                    id: 'el-2',
                    text: 'She is short',
                    emoji: '👧',
                    delay: 1.0,
                    animation: 'scaleIn',
                    ttsText: 'She is short'
                  },
                  {
                    id: 'el-3',
                    text: 'and thin',
                    emoji: '🍃',
                    delay: 1.5,
                    animation: 'fadeIn',
                    ttsText: 'and thin'
                  }
                ]
              },
              ttsNarration: '描述朋友：他高壮，她矮瘦'
            }
          },
          {
            type: 'example',
            content: 'He = 他  She = 她\nHe is... = 他是……\nShe is... = 她是……',
            animationType: 'cardReveal',
            label: '代词区分'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u3l2q1',
            type: 'choice',
            question: '描述一个男生应该用哪个代词？',
            answer: 'He',
            hint: '男生的代词',
            explanation: '描述男生用He，He表示他',
            options: [
              'He',
              'She',
              'It',
              'They'
            ]
          },
          {
            id: 'e4u3l2q2',
            type: 'fill',
            question: '_____ is tall and strong. (她)',
            answer: 'She',
            hint: '女生的代词',
            explanation: '描述女生用She，She is tall and strong.表示她又高又壮'
          },
          {
            id: 'e4u3l2q3',
            type: 'choice',
            question: 'Tom is a boy. We say "_____ is tall."',
            answer: 'He',
            hint: '男孩用He还是She',
            explanation: 'Tom是男孩，用He，He is tall.表示他很高',
            options: [
              'He',
              'She',
              'It',
              'We'
            ]
          },
          {
            id: 'e4u3l2q4',
            type: 'fill',
            question: 'He is tall _____ strong. (和)',
            answer: 'and',
            hint: '连接两个特征',
            explanation: '两个特征用and连接，tall and strong表示又高又壮'
          },
          {
            id: 'e4u3l2q5',
            type: 'choice',
            question: 'Amy describes her friend Lily. She should say?',
            answer: 'She is tall and thin.',
            hint: '描述女生用什么代词',
            explanation: '描述女生Lily用She，She is tall and thin.表示她又高又瘦',
            options: [
              'He is tall and thin.',
              'She is tall and thin.',
              'It is tall and thin.',
              'They are tall and thin.'
            ]
          },
          {
            id: 'e4u3l2q6',
            type: 'fill',
            question: 'This is Bob. _____ is short and strong.',
            answer: 'He',
            hint: '男孩的代词',
            explanation: 'Bob是男孩，用He，He is short and strong.表示他又矮又壮'
          },
          {
            id: 'e4u3l2q7',
            type: 'choice',
            question: '"她又矮又瘦"用He/She句型怎么说？',
            answer: 'She is short and thin.',
            hint: '[He/She句型]（英语四年级-第3单元）',
            explanation: '描述女生用She，She is short and thin.表示她又矮又瘦',
            options: [
              'She is short and thin.',
              'He is short and thin.',
              'It is short and thin.',
              'She short and thin.'
            ]
          }
        ]
      },
      {
        id: 'e4u3l3',
        title: '性格词汇：friendly/quiet/funny',
        order: 3,
        teachingMethod: '情境式教学法',
        iDo: '家长用表情和动作演绎friendly（友善）、quiet（安静）、funny（有趣），夸张表现',
        weDo: '亲子一起用表情演绎性格词汇，玩"性格表情秀"',
        youDo: '孩子独立用性格词汇描述朋友或家人',
        parentTips: '用表情和动作演绎性格词汇，让孩子猜',
        funElement: '玩"性格小演员"游戏，抽到词卡就演出来',
        gsapAnimations: [
          'GSAP:性格表情卡翻转-cardReveal',
          'GSAP:卡片依次出现-stagger'
        ],
        images: [
          'IMG:性格表情图',
          'IMG:性格词汇插图'
        ],
        content: [
          {
            type: 'text',
            content: '除了外貌，我们还可以描述性格！friendly是友善的，quiet是安静的，funny是有趣的。每个人都有不同的性格特点。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'friendly — 友善的\nquiet — 安静的\nfunny — 有趣的\nkind — 善良的',
            animationType: 'cardReveal',
            label: '性格词汇'
          },
          {
            type: 'dialogue',
            content: 'Amy: My friend Lily is very friendly.\nTom: Is she quiet?\nAmy: No, she is funny! She makes me laugh.\nTom: That\'s great!',
            animationType: 'timeline',
            label: '描述性格'
          },
          {
            type: 'tip',
            content: '性格词和外貌词都可以放在is后面：He is tall.（外貌）He is funny.（性格）记得区分哦！',
            animationType: 'sequence',
            label: '用法提示'
          },
          {
            type: 'text',
            content: '更多性格词：smart（聪明的）、cute（可爱的）、brave（勇敢的）。用这些词描述你的好朋友，说说他/她是什么性格吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '性格表情卡翻转，揭示友善、安静、有趣三种性格',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Personalities',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'friendly',
                    back: '😊',
                    ttsText: 'friendly'
                  },
                  {
                    front: 'quiet',
                    back: '🤫',
                    ttsText: 'quiet'
                  },
                  {
                    front: 'funny',
                    back: '😂',
                    ttsText: 'funny'
                  }
                ]
              },
              ttsNarration: '性格词汇：友善、安静、有趣'
            }
          },
          {
            type: 'example',
            content: 'She is friendly. — 她很友善。\nHe is quiet. — 他很安静。\nShe is funny. — 她很有趣。',
            animationType: 'cardReveal',
            label: '性格句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u3l3q1',
            type: 'choice',
            question: '"友善的"用英语怎么说？',
            answer: 'friendly',
            hint: '友善用什么词',
            explanation: 'friendly是友善的，表示对人友好',
            options: [
              'friendly',
              'quiet',
              'funny',
              'tall'
            ]
          },
          {
            id: 'e4u3l3q2',
            type: 'fill',
            question: 'He is very _____. (安静的)',
            answer: 'quiet',
            hint: '安静用什么词',
            explanation: 'quiet是安静的，He is quiet.表示他很安静'
          },
          {
            id: 'e4u3l3q3',
            type: 'choice',
            question: 'Which word describes someone who makes you laugh?',
            answer: 'funny',
            hint: '让人笑的是什么性格',
            explanation: 'funny是有趣的，有趣的人会让人笑',
            options: [
              'friendly',
              'quiet',
              'funny',
              'strong'
            ]
          },
          {
            id: 'e4u3l3q4',
            type: 'fill',
            question: 'She is _____ and kind. (友善)',
            answer: 'friendly',
            hint: '友善用什么词',
            explanation: 'friendly是友善的，She is friendly and kind.表示她友善又善良'
          },
          {
            id: 'e4u3l3q5',
            type: 'choice',
            question: 'Amy says "Lily makes me laugh." Lily is _____.',
            answer: 'funny',
            hint: '让人笑的人是什么性格',
            explanation: '让人笑说明她有趣，funny是有趣的',
            options: [
              'quiet',
              'funny',
              'tall',
              'thin'
            ]
          },
          {
            id: 'e4u3l3q6',
            type: 'fill',
            question: 'My friend is _____. He doesn\'t talk much. (安静)',
            answer: 'quiet',
            hint: '不爱说话是什么性格',
            explanation: '不爱说话说明安静，quiet是安静的'
          },
          {
            id: 'e4u3l3q7',
            type: 'choice',
            question: '"他很有趣"用英语怎么说？',
            answer: 'He is funny.',
            hint: '[性格词汇]（英语四年级-第3单元）',
            explanation: 'funny是有趣的，He is funny.表示他很有趣',
            options: [
              'He is funny.',
              'He is quiet.',
              'He is friendly.',
              'He is tall.'
            ]
          }
        ]
      },
      {
        id: 'e4u3l4',
        title: 'My friend is... 综合描述',
        order: 4,
        teachingMethod: '项目式：制作朋友卡',
        iDo: '家长示范制作朋友介绍卡：姓名+外貌+性格，边写边说英语',
        weDo: '亲子一起制作朋友卡，互相介绍对方的朋友',
        youDo: '孩子独立制作朋友卡，用英语综合描述朋友',
        parentTips: '制作朋友介绍卡：姓名+外貌+性格，用英语描述',
        funElement: '玩"朋友卡展览"，互相介绍自己制作的朋友卡',
        gsapAnimations: [
          'GSAP:朋友卡信息逐步填入-timeline',
          'GSAP:信息高亮-highlight'
        ],
        images: [
          'IMG:朋友介绍卡模板',
          'IMG:朋友描述插图'
        ],
        content: [
          {
            type: 'text',
            content: '今天我们来制作一张朋友介绍卡！卡片上写：朋友的名字、外貌（tall/short/thin/strong）、性格（friendly/funny/quiet）。用This is... He/She is...句型介绍。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'Friend Card\nName: Lily\nLooks: tall and thin\nPersonality: friendly and funny\nThis is Lily. She is tall and thin. She is friendly and funny.',
            animationType: 'timeline',
            label: '朋友卡模板'
          },
          {
            type: 'dialogue',
            content: 'Tom: This is my friend Bob.\nAmy: What does he look like?\nTom: He is short and strong.\nAmy: What is he like?\nTom: He is funny and friendly!',
            animationType: 'timeline',
            label: '介绍朋友'
          },
          {
            type: 'tip',
            content: 'What does he look like? 问外貌，What is he like? 问性格。两个问题不一样，回答也不一样哦！',
            animationType: 'sequence',
            label: '问答区分'
          },
          {
            type: 'text',
            content: '做朋友卡时先画朋友的画像，再写名字，最后写外貌和性格。完成后向家人介绍你的朋友吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '朋友卡信息逐步填入：名字、外貌、性格依次出现',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'My Friend Card',
              timelineConfig: {
                steps: [
                  {
                    text: 'Name: Lily',
                    emoji: '🏷',
                    ttsNarration: 'Name: Lily'
                  },
                  {
                    text: 'Looks: tall and thin',
                    emoji: '🧍',
                    ttsNarration: 'Looks: tall and thin'
                  },
                  {
                    text: 'Personality: friendly and funny',
                    emoji: '😊',
                    ttsNarration: 'Personality: friendly and funny'
                  },
                  {
                    text: 'She is a good friend!',
                    emoji: '🌟',
                    ttsNarration: 'She is a good friend!'
                  }
                ]
              },
              ttsNarration: '制作朋友卡：名字、外貌、性格'
            }
          },
          {
            type: 'example',
            content: 'What does he look like? — 他长什么样？（问外貌）\nWhat is he like? — 他是什么样的人？（问性格）',
            animationType: 'cardReveal',
            label: '两种提问'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u3l4q1',
            type: 'choice',
            question: '"他长什么样"问的是外貌还是性格？',
            answer: '外貌',
            hint: 'look like问什么',
            explanation: 'What does he look like?问外貌，问长得怎么样',
            options: [
              '外貌',
              '性格',
              '年龄',
              '名字'
            ]
          },
          {
            id: 'e4u3l4q2',
            type: 'fill',
            question: 'What _____ he like? (他是什么样的人)',
            answer: 'is',
            hint: '问性格用什么',
            explanation: 'What is he like?用来问性格，is是be动词'
          },
          {
            id: 'e4u3l4q3',
            type: 'choice',
            question: 'Tom says "He is short and strong." This describes?',
            answer: '外貌',
            hint: 'short and strong描述什么',
            explanation: 'short and strong是外貌词，描述外貌',
            options: [
              '外貌',
              '性格',
              '名字',
              '年龄'
            ]
          },
          {
            id: 'e4u3l4q4',
            type: 'fill',
            question: 'This _____ Lily. She is friendly.',
            answer: 'is',
            hint: '介绍别人用什么',
            explanation: '介绍别人用This is...，This is Lily.表示这是莉莉'
          },
          {
            id: 'e4u3l4q5',
            type: 'choice',
            question: 'Which question asks about personality (性格)?',
            answer: 'What is he like?',
            hint: '问性格的问题',
            explanation: 'What is he like?问性格，What does he look like?问外貌',
            options: [
              'What is he like?',
              'What does he look like?',
              'How old is he?',
              'Where is he?'
            ]
          },
          {
            id: 'e4u3l4q6',
            type: 'fill',
            question: 'She is tall _____ thin. (和)',
            answer: 'and',
            hint: '连接两个特征',
            explanation: '两个特征用and连接，tall and thin表示又高又瘦'
          },
          {
            id: 'e4u3l4q7',
            type: 'choice',
            question: '介绍朋友时"这是我的朋友"怎么说？',
            answer: 'This is my friend.',
            hint: '[He/She句型]（英语四年级-第3单元）',
            explanation: '介绍别人用This is...，This is my friend.表示这是我的朋友',
            options: [
              'This is my friend.',
              'He is my friend.',
              'She is my friend.',
              'It is my friend.'
            ]
          }
        ]
      },
      {
        id: 'e4u3l5',
        title: '第三单元综合检测',
        order: 5,
        teachingMethod: '形成性评价法',
        iDo: '家长引导回顾外貌性格词汇和He/She句型，示范检测题',
        weDo: '亲子一起做练习，互相检查讨论错误',
        youDo: '孩子独立完成检测，检验外貌性格词汇和描述句型',
        parentTips: '词汇+句型+描述综合，正确率80%可获三星',
        funElement: '通关获得"Friends达人"徽章，撒花庆祝',
        gsapAnimations: [
          'GSAP:通关撒花-confetti',
          'GSAP:星星飞入-starFlyIn'
        ],
        images: [
          'IMG:Friends达人徽章',
          'IMG:单元回顾插图'
        ],
        content: [
          {
            type: 'text',
            content: '回顾My Friends单元！外貌词tall/short/thin/strong，性格词friendly/quiet/funny，He/She is...句型，还有What does he look like?和What is he like?两种提问。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'tall高 short矮 thin瘦 strong壮\nfriendly友善 quiet安静 funny有趣\nHe/She is...\nWhat does he look like? / What is he like?',
            animationType: 'cardReveal',
            label: '单元知识树'
          },
          {
            type: 'dialogue',
            content: 'Amy: This is my friend Tom.\nLily: What does he look like?\nAmy: He is tall and strong.\nLily: What is he like?\nAmy: He is funny and friendly!',
            animationType: 'timeline',
            label: '综合对话'
          },
          {
            type: 'tip',
            content: '答题要点：男生用He女生用She，外貌和性格别搞混，两个特征用and连接。认真审题再作答。',
            animationType: 'sequence',
            label: '答题技巧'
          },
          {
            type: 'text',
            content: '7道题检验你的学习成果！基础、提高、挑战加回溯，全部通关就是Friends达人！加油！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '回顾卡片翻转，揭示本单元知识点',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Unit 3 Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Looks',
                    back: '🧍',
                    ttsText: 'tall short thin strong'
                  },
                  {
                    front: 'Personality',
                    back: '😊',
                    ttsText: 'friendly quiet funny'
                  },
                  {
                    front: 'He/She is...',
                    back: '👥',
                    ttsText: 'He is tall. She is thin.'
                  },
                  {
                    front: 'Questions',
                    back: '❓',
                    ttsText: 'What does he look like?'
                  }
                ]
              },
              ttsNarration: '第三单元回顾：外貌、性格、句型'
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u3l5q1',
            type: 'choice',
            question: '"又高又壮"用英语怎么说？',
            answer: 'tall and strong',
            hint: '高壮怎么说',
            explanation: 'tall高 strong壮，tall and strong表示又高又壮',
            options: [
              'tall and strong',
              'short and thin',
              'thin and short',
              'strong and short'
            ]
          },
          {
            id: 'e4u3l5q2',
            type: 'fill',
            question: 'She is _____. (友善的)',
            answer: 'friendly',
            hint: '友善用什么词',
            explanation: 'friendly是友善的，She is friendly.表示她很友善'
          },
          {
            id: 'e4u3l5q3',
            type: 'choice',
            question: '描述女生Lily应该用哪个代词？',
            answer: 'She',
            hint: '女生的代词',
            explanation: '描述女生用She，She表示她',
            options: [
              'He',
              'She',
              'It',
              'They'
            ]
          },
          {
            id: 'e4u3l5q4',
            type: 'fill',
            question: 'What does he look _____? (长得怎么样)',
            answer: 'like',
            hint: 'look后面接什么',
            explanation: 'What does he look like?问外貌，look like表示看起来像'
          },
          {
            id: 'e4u3l5q5',
            type: 'choice',
            question: '"他是什么样的人"问的是什么？',
            answer: '性格',
            hint: 'What is he like问什么',
            explanation: 'What is he like?问性格，问这个人是什么性格的人',
            options: [
              '性格',
              '外貌',
              '年龄',
              '名字'
            ]
          },
          {
            id: 'e4u3l5q6',
            type: 'fill',
            question: 'He is quiet _____ funny. (和)',
            answer: 'and',
            hint: '连接两个性格',
            explanation: '两个性格用and连接，quiet and funny表示又安静又有趣'
          },
          {
            id: 'e4u3l5q7',
            type: 'choice',
            question: '"她很安静"用He/She句型怎么说？',
            answer: 'She is quiet.',
            hint: '[性格词汇]（英语四年级-第3单元）',
            explanation: '描述女生用She，quiet是安静的，She is quiet.表示她很安静',
            options: [
              'She is quiet.',
              'He is quiet.',
              'She quiet.',
              'She is quiet and tall.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'e4u4',
    title: 'At the Farm',
    subtitle: '农场动物词汇与Are these/those...?句型',
    order: 4,
    lessons: [
      {
        id: 'e4u4l1',
        title: '农场动物词汇',
        order: 1,
        teachingMethod: 'TPR+声音模仿法',
        iDo: '家长模仿动物叫声和动作，边演边说cow、sheep、horse、goat',
        weDo: '亲子一起模仿动物叫声说单词，玩"动物模仿秀"',
        youDo: '孩子独立模仿动物并说出英文单词',
        parentTips: '模仿动物叫声和动作学单词，加深记忆',
        funElement: '玩"农场动物园"游戏，模仿动物让家人猜',
        gsapAnimations: [
          'GSAP:农场场景动物逐一出现-sceneBuild',
          'GSAP:动物高亮-highlight'
        ],
        images: [
          'IMG:农场动物图',
          'IMG:农场场景插图'
        ],
        content: [
          {
            type: 'text',
            content: 'Welcome to the farm! 农场里有很多动物。cow是奶牛，moo~；sheep是绵羊，baa~；horse是马，neigh~；goat是山羊，maa~。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'cow — 奶牛 🐮\nsheep — 绵羊 🐑\nhorse — 马 🐴\ngoat — 山羊 🐐',
            animationType: 'cardReveal',
            label: '农场动物词汇'
          },
          {
            type: 'dialogue',
            content: 'Farmer: Welcome to my farm!\nAmy: Wow! What\'s that?\nFarmer: It\'s a cow.\nAmy: And those?\nFarmer: They are sheep.',
            animationType: 'timeline',
            label: '农场参观'
          },
          {
            type: 'tip',
            content: 'sheep的复数还是sheep，不加s哦！一只绵羊a sheep，两只绵羊two sheep，记住这个特殊变化。',
            animationType: 'sequence',
            label: '特殊复数'
          },
          {
            type: 'text',
            content: '农场里还有：pig（猪）、duck（鸭子）、chicken（鸡）、rabbit（兔子）。模仿它们的叫声和动作，边演边学吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '农场场景逐步出现奶牛、绵羊、马、山羊',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'At the Farm',
              sceneBuildConfig: {
                sceneName: 'Farm',
                elements: [
                  {
                    id: 'el-0',
                    text: 'cow',
                    emoji: '🐮',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'cow'
                  },
                  {
                    id: 'el-1',
                    text: 'sheep',
                    emoji: '🐑',
                    delay: 0.5,
                    animation: 'popIn',
                    ttsText: 'sheep'
                  },
                  {
                    id: 'el-2',
                    text: 'horse',
                    emoji: '🐴',
                    delay: 1.0,
                    animation: 'scaleIn',
                    ttsText: 'horse'
                  },
                  {
                    id: 'el-3',
                    text: 'goat',
                    emoji: '🐐',
                    delay: 1.5,
                    animation: 'fadeIn',
                    ttsText: 'goat'
                  }
                ]
              },
              ttsNarration: '农场动物：奶牛、绵羊、马、山羊'
            }
          },
          {
            type: 'example',
            content: 'What\'s that? — 那是什么？\nIt\'s a cow. — 那是一头奶牛。\nWhat are those? — 那些是什么？\nThey are sheep. — 那些是绵羊。',
            animationType: 'cardReveal',
            label: '问答句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u4l1q1',
            type: 'choice',
            question: '"奶牛"用英语怎么说？',
            answer: 'cow',
            hint: '奶牛的英文',
            explanation: 'cow是奶牛，moo是它的叫声',
            options: [
              'cow',
              'sheep',
              'horse',
              'goat'
            ]
          },
          {
            id: 'e4u4l1q2',
            type: 'fill',
            question: 'The _____ says baa~ (绵羊)',
            answer: 'sheep',
            hint: 'baa叫的是什么动物',
            explanation: 'sheep是绵羊，叫声是baa~'
          },
          {
            id: 'e4u4l1q3',
            type: 'choice',
            question: 'Which animal can run fast and you can ride?',
            answer: 'horse',
            hint: '能骑能跑的动物',
            explanation: 'horse是马，能跑得快，人可以骑马',
            options: [
              'cow',
              'sheep',
              'horse',
              'goat'
            ]
          },
          {
            id: 'e4u4l1q4',
            type: 'fill',
            question: 'One sheep, two _____ (绵羊复数)',
            answer: 'sheep',
            hint: 'sheep的复数是什么',
            explanation: 'sheep的复数还是sheep，不加s，是特殊变化'
          },
          {
            id: 'e4u4l1q5',
            type: 'choice',
            question: 'Farmer says "It\'s a cow." What is it?',
            answer: 'A cow.',
            hint: 'it\'s a cow是什么意思',
            explanation: 'It\'s a cow.表示那是一头奶牛',
            options: [
              'A cow.',
              'A sheep.',
              'A horse.',
              'A goat.'
            ]
          },
          {
            id: 'e4u4l1q6',
            type: 'fill',
            question: 'They are _____ (山羊).',
            answer: 'goat',
            hint: '山羊的英文',
            explanation: 'goat是山羊，They are goat.表示那些是山羊（复数goats，此处填goat词根）'
          },
          {
            id: 'e4u4l1q7',
            type: 'fill',
            question: '农场里产奶的动物是 _____。',
            answer: 'cow',
            hint: '[农场动物词汇]（英语四年级-第4单元）',
            explanation: 'cow是奶牛，产牛奶，是农场重要动物'
          }
        ]
      },
      {
        id: 'e4u4l2',
        title: 'Are these/those...? 复数问答',
        order: 2,
        teachingMethod: '情境对话法',
        iDo: '家长示范Are these cows? 指近处和远处，用Yes/No回答',
        weDo: '亲子一起玩远近问答，these近处those远处',
        youDo: '孩子独立用Are these/those...?提问并回答',
        parentTips: '远近问答：these近处/those远处，用Are提问',
        funElement: '玩"农场猜猜看"，指动物问Are these/those...?',
        gsapAnimations: [
          'GSAP:these近处vs those远处对比-compare',
          'GSAP:疑问词高亮-highlight'
        ],
        images: [
          'IMG:近处远处对比图',
          'IMG:these/those场景插图'
        ],
        content: [
          {
            type: 'text',
            content: 'these是"这些"（近处），those是"那些"（远处）。问复数物品用Are these/those...? 回答用Yes, they are. 或 No, they aren\'t.',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'Are these cows? — 这些是奶牛吗？\nYes, they are. — 是的，它们是。\nAre those sheep? — 那些是绵羊吗？\nNo, they aren\'t. They are goats. — 不，它们是山羊。',
            animationType: 'timeline',
            label: '复数问答'
          },
          {
            type: 'dialogue',
            content: 'Amy: Are these cows?\nFarmer: Yes, they are.\nAmy: Are those sheep?\nFarmer: No, they aren\'t. They are goats!',
            animationType: 'timeline',
            label: '农场问答'
          },
          {
            type: 'tip',
            content: 'these和those指复数，所以be动词用are。肯定回答Yes, they are. 否定回答No, they aren\'t. (are not的缩写)。',
            animationType: 'sequence',
            label: '语法提示'
          },
          {
            type: 'text',
            content: '区分this/these和that/those：this这个(近单数)，these这些(近复数)，that那个(远单数)，those那些(远复数)。记住远近单复！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: 'these近处和those远处两组动物对比展示',
            animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: 'These vs Those',
              compareConfig: {
                leftItems: [
                  'these (近)',
                  'cow',
                  'goat'
                ],
                rightItems: [
                  'those (远)',
                  'sheep',
                  'horse'
                ],
                result: 'close',
                resultText: 'these for near, those for far'
              },
              ttsNarration: 'these近处 vs those远处'
            }
          },
          {
            type: 'example',
            content: 'this→these  that→those\nis→are  it→they\nAre these/those...? Yes, they are. / No, they aren\'t.',
            animationType: 'cardReveal',
            label: '单复对应'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u4l2q1',
            type: 'choice',
            question: '"这些"用英语怎么说？',
            answer: 'these',
            hint: '近处复数用什么',
            explanation: 'these是这些，指近处的复数物品',
            options: [
              'this',
              'these',
              'that',
              'those'
            ]
          },
          {
            id: 'e4u4l2q2',
            type: 'fill',
            question: '_____ those cows? (是)',
            answer: 'Are',
            hint: '复数疑问句用什么be动词',
            explanation: '复数用are，Are those cows?表示那些是奶牛吗'
          },
          {
            id: 'e4u4l2q3',
            type: 'choice',
            question: '— Are these sheep? — _____',
            answer: 'Yes, they are.',
            hint: '肯定回答怎么说',
            explanation: '肯定回答用Yes, they are.',
            options: [
              'Yes, they are.',
              'Yes, it is.',
              'No, they are.',
              'Yes, they is.'
            ]
          },
          {
            id: 'e4u4l2q4',
            type: 'fill',
            question: '— Are those goats? — No, they _____.',
            answer: 'aren\'t',
            hint: '否定回答怎么说',
            explanation: '否定回答用No, they aren\'t. (are not的缩写)'
          },
          {
            id: 'e4u4l2q5',
            type: 'choice',
            question: 'Tom points at far animals. He should ask?',
            answer: 'Are those cows?',
            hint: '指远处的动物问什么',
            explanation: '指远处复数用those，Are those cows?表示那些是奶牛吗',
            options: [
              'Are these cows?',
              'Are those cows?',
              'Is that a cow?',
              'Is this a cow?'
            ]
          },
          {
            id: 'e4u4l2q6',
            type: 'fill',
            question: 'Are _____ horses? (这些)',
            answer: 'these',
            hint: '近处复数用什么',
            explanation: '近处复数用these，Are these horses?表示这些是马吗'
          },
          {
            id: 'e4u4l2q7',
            type: 'choice',
            question: '"那些是绵羊吗"用英语怎么说？',
            answer: 'Are those sheep?',
            hint: '[Are these/those句型]（英语四年级-第4单元）',
            explanation: '远处复数用those，Are those sheep?表示那些是绵羊吗',
            options: [
              'Are those sheep?',
              'Are these sheep?',
              'Is that sheep?',
              'Are those sheeps?'
            ]
          }
        ]
      },
      {
        id: 'e4u4l3',
        title: '蔬菜词汇：tomato/potato/carrot/onion',
        order: 3,
        teachingMethod: '多感官：实物触摸法',
        iDo: '家长拿真实蔬菜让孩子摸和看，边摸边说tomato、potato、carrot、onion',
        weDo: '亲子一起摸蔬菜说单词，玩"摸蔬菜猜单词"游戏',
        youDo: '孩子独立辨认蔬菜并说出英文单词',
        parentTips: '拿真实蔬菜让孩子摸和学，多感官记忆',
        funElement: '玩"蔬菜超市"游戏，买卖蔬菜说单词',
        gsapAnimations: [
          'GSAP:蔬菜卡片翻转-cardReveal',
          'GSAP:蔬菜高亮-highlight'
        ],
        images: [
          'IMG:蔬菜词汇图',
          'IMG:农场蔬菜插图'
        ],
        content: [
          {
            type: 'text',
            content: '农场里还种着好多蔬菜！tomato是西红柿，potato是土豆，carrot是胡萝卜，onion是洋葱。摸一摸、看一看，边学边记。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'tomato — 西红柿 🍅\npotato — 土豆 🥔\ncarrot — 胡萝卜 🥕\nonion — 洋葱 🧅',
            animationType: 'cardReveal',
            label: '蔬菜词汇'
          },
          {
            type: 'dialogue',
            content: 'Mom: What are these?\nTom: They are tomatoes.\nMom: Do you like carrots?\nTom: Yes! But not onions!',
            animationType: 'timeline',
            label: '蔬菜对话'
          },
          {
            type: 'tip',
            content: 'tomato和potato加复数要加es：tomatoes、potatoes。因为它们以o结尾。但carrot和onion只加s：carrots、onions。',
            animationType: 'sequence',
            label: '复数规则'
          },
          {
            type: 'text',
            content: '蔬菜富含维生素，要多吃蔬菜哦！你最喜欢哪种蔬菜？用英语说说看：I like tomatoes. I don\'t like onions.',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '蔬菜卡片翻转，揭示西红柿、土豆、胡萝卜、洋葱',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Farm Vegetables',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'tomato',
                    back: '🍅',
                    ttsText: 'tomato'
                  },
                  {
                    front: 'potato',
                    back: '🥔',
                    ttsText: 'potato'
                  },
                  {
                    front: 'carrot',
                    back: '🥕',
                    ttsText: 'carrot'
                  },
                  {
                    front: 'onion',
                    back: '🧅',
                    ttsText: 'onion'
                  }
                ]
              },
              ttsNarration: '蔬菜词汇：西红柿、土豆、胡萝卜、洋葱'
            }
          },
          {
            type: 'example',
            content: 'tomato→tomatoes  potato→potatoes\ncarrot→carrots  onion→onions\nI like carrots. 我喜欢胡萝卜。',
            animationType: 'cardReveal',
            label: '复数变化'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u4l3q1',
            type: 'choice',
            question: '"西红柿"用英语怎么说？',
            answer: 'tomato',
            hint: '西红柿的英文',
            explanation: 'tomato是西红柿，红色多汁的蔬菜',
            options: [
              'tomato',
              'potato',
              'carrot',
              'onion'
            ]
          },
          {
            id: 'e4u4l3q2',
            type: 'fill',
            question: 'The _____ is orange and long. (胡萝卜)',
            answer: 'carrot',
            hint: '橙色长长的蔬菜',
            explanation: 'carrot是胡萝卜，橙色长长的'
          },
          {
            id: 'e4u4l3q3',
            type: 'choice',
            question: 'Which is the plural (复数) of "tomato"?',
            answer: 'tomatoes',
            hint: 'tomato的复数',
            explanation: 'tomato以o结尾加es，复数是tomatoes',
            options: [
              'tomatos',
              'tomatoes',
              'tomato',
              'tomato\'s'
            ]
          },
          {
            id: 'e4u4l3q4',
            type: 'fill',
            question: 'I don\'t like _____. (洋葱)',
            answer: 'onion',
            hint: '洋葱的英文',
            explanation: 'onion是洋葱，I don\'t like onions.表示我不喜欢洋葱'
          },
          {
            id: 'e4u4l3q5',
            type: 'choice',
            question: 'Tom says "They are potatoes." What are they?',
            answer: 'Potatoes.',
            hint: 'they are potatoes是什么',
            explanation: 'They are potatoes.表示那些是土豆',
            options: [
              'Potatoes.',
              'Carrots.',
              'Tomatoes.',
              'Onions.'
            ]
          },
          {
            id: 'e4u4l3q6',
            type: 'fill',
            question: 'potato的复数是 _____。',
            answer: 'potatoes',
            hint: 'potato加es还是s',
            explanation: 'potato以o结尾加es，复数是potatoes'
          },
          {
            id: 'e4u4l3q7',
            type: 'fill',
            question: '兔子最爱吃的橙色蔬菜是 _____。',
            answer: 'carrot',
            hint: '[蔬菜词汇]（英语四年级-第4单元）',
            explanation: 'carrot是胡萝卜，兔子爱吃，橙色长条形蔬菜'
          }
        ]
      },
      {
        id: 'e4u4l4',
        title: 'What are these/those? 综合问答',
        order: 4,
        teachingMethod: '游戏化：猜猜看',
        iDo: '家长示范猜动物蔬菜游戏，遮住图片问What are these?让孩子猜',
        weDo: '亲子一起玩猜猜看，用What are these/those?问答',
        youDo: '孩子独立用What are these/those?提问并回答',
        parentTips: '猜猜看游戏：遮住图片问What are these? 猜答案',
        funElement: '玩"农场盲盒"游戏，摸蔬菜猜单词',
        gsapAnimations: [
          'GSAP:蔬菜动物排序-sequence',
          'GSAP:答案高亮-highlight'
        ],
        images: [
          'IMG:猜猜看游戏界面',
          'IMG:农场盲盒插图'
        ],
        content: [
          {
            type: 'text',
            content: 'What are these? 这些是什么？What are those? 那些是什么？问复数物品用What are...? 回答用They are... 它们是……',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'What are these? — 这些是什么？\nThey are tomatoes. — 它们是西红柿。\nWhat are those? — 那些是什么？\nThey are horses. — 它们是马。',
            animationType: 'timeline',
            label: '综合问答'
          },
          {
            type: 'dialogue',
            content: 'Amy: What are these?\nFarmer: They are carrots.\nAmy: What are those?\nFarmer: They are goats. Can you guess?\nAmy: Goats! I love the farm!',
            animationType: 'timeline',
            label: '农场问答'
          },
          {
            type: 'tip',
            content: 'What are...? 问复数，回答They are + 复数名词。What is this/that? 问单数，回答It\'s a + 单数名词。别搞混！',
            animationType: 'sequence',
            label: '单复区分'
          },
          {
            type: 'text',
            content: '来玩猜猜看！闭上眼睛摸一摸，猜猜是哪种蔬菜；或者看一部分图片，猜猜是什么动物。用What are these?来提问吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '蔬菜和动物按顺序排列，逐一揭示答案',
            animationType: 'sequence',
            animationConfig: {
              sceneType: 'sequence',
              title: 'Guess the Farm',
              sequenceConfig: {
                items: [
                  'tomatoes',
                  'carrots',
                  'cows',
                  'goats'
                ],
                itemType: 'word'
              },
              ttsNarration: '猜猜农场里有什么：蔬菜和动物'
            }
          },
          {
            type: 'example',
            content: '单数：What\'s this? It\'s a cow.\n复数：What are these? They are cows.\n单数用is/It\'s，复数用are/They are.',
            animationType: 'cardReveal',
            label: '单复问答对照'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u4l4q1',
            type: 'choice',
            question: '"这些是什么"用英语怎么说？',
            answer: 'What are these?',
            hint: '问近处复数用什么',
            explanation: '问近处复数用What are these?',
            options: [
              'What are these?',
              'What is this?',
              'What are those?',
              'What is that?'
            ]
          },
          {
            id: 'e4u4l4q2',
            type: 'fill',
            question: '— What are these? — _____ are carrots.',
            answer: 'They',
            hint: '回答复数用什么代词',
            explanation: '回答复数用They are...，They表示它们'
          },
          {
            id: 'e4u4l4q3',
            type: 'choice',
            question: '— What are those? — _____ horses.',
            answer: 'They are',
            hint: '回答那些是什么',
            explanation: '回答用They are + 复数名词，They are horses.表示它们是马',
            options: [
              'They are',
              'It is',
              'This is',
              'That is'
            ]
          },
          {
            id: 'e4u4l4q4',
            type: 'fill',
            question: 'What _____ these? (是)',
            answer: 'are',
            hint: '复数疑问句用什么be动词',
            explanation: '复数用are，What are these?表示这些是什么'
          },
          {
            id: 'e4u4l4q5',
            type: 'choice',
            question: 'Amy asks about one animal near her. She should say?',
            answer: 'What\'s this?',
            hint: '问近处一个动物用什么',
            explanation: '问近处单数用What\'s this?',
            options: [
              'What\'s this?',
              'What are these?',
              'What are those?',
              'What is those?'
            ]
          },
          {
            id: 'e4u4l4q6',
            type: 'fill',
            question: '— What are those? — They are _____. (绵羊)',
            answer: 'sheep',
            hint: '绵羊复数是什么',
            explanation: 'sheep复数还是sheep，They are sheep.表示它们是绵羊'
          },
          {
            id: 'e4u4l4q7',
            type: 'choice',
            question: '"那些是什么"用英语怎么说？',
            answer: 'What are those?',
            hint: '[What are these/those句型]（英语四年级-第4单元）',
            explanation: '问远处复数用What are those?',
            options: [
              'What are those?',
              'What are these?',
              'What is that?',
              'What is those?'
            ]
          }
        ]
      },
      {
        id: 'e4u4l5',
        title: '第四单元综合检测',
        order: 5,
        teachingMethod: '形成性评价法',
        iDo: '家长引导回顾农场动物蔬菜和句型，示范检测题',
        weDo: '亲子一起做练习，互相检查讨论',
        youDo: '孩子独立完成检测，检验动物蔬菜词汇和复数句型',
        parentTips: '动物+蔬菜+句型综合，正确率80%可获三星',
        funElement: '通关获得"Farm达人"徽章，撒花庆祝',
        gsapAnimations: [
          'GSAP:通关撒花-confetti',
          'GSAP:星星飞入-starFlyIn'
        ],
        images: [
          'IMG:Farm达人徽章',
          'IMG:单元回顾插图'
        ],
        content: [
          {
            type: 'text',
            content: '回顾At the Farm单元！动物cow/sheep/horse/goat，蔬菜tomato/potato/carrot/onion，Are these/those...?和What are these/those?句型。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'cow牛 sheep绵羊 horse马 goat山羊\ntomato西红柿 potato土豆 carrot胡萝卜 onion洋葱\nAre these/those...? Yes, they are. / No, they aren\'t.\nWhat are these/those? They are...',
            animationType: 'cardReveal',
            label: '单元知识树'
          },
          {
            type: 'dialogue',
            content: 'Amy: What are these?\nFarmer: They are tomatoes.\nAmy: Are those cows?\nFarmer: No, they aren\'t. They are goats.\nAmy: I love the farm!',
            animationType: 'timeline',
            label: '综合对话'
          },
          {
            type: 'tip',
            content: '答题要点：sheep复数不变，tomato/potato加es，复数用are/they，单数用is/it。认真审题别马虎。',
            animationType: 'sequence',
            label: '答题技巧'
          },
          {
            type: 'text',
            content: '7道题检验你的学习成果！基础、提高、挑战加回溯，全部通关就是Farm达人！加油！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '回顾卡片翻转，揭示本单元知识点',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Unit 4 Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Animals',
                    back: '🐮',
                    ttsText: 'cow sheep horse goat'
                  },
                  {
                    front: 'Vegetables',
                    back: '🥕',
                    ttsText: 'tomato potato carrot onion'
                  },
                  {
                    front: 'Are these/those?',
                    back: '❓',
                    ttsText: 'Are these cows? Yes, they are.'
                  },
                  {
                    front: 'What are these?',
                    back: '❓',
                    ttsText: 'What are these? They are tomatoes.'
                  }
                ]
              },
              ttsNarration: '第四单元回顾：动物、蔬菜、句型'
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u4l5q1',
            type: 'choice',
            question: '"马"用英语怎么说？',
            answer: 'horse',
            hint: '马的英文',
            explanation: 'horse是马，能跑得快',
            options: [
              'cow',
              'sheep',
              'horse',
              'goat'
            ]
          },
          {
            id: 'e4u4l5q2',
            type: 'fill',
            question: '— Are those goats? — Yes, they _____.',
            answer: 'are',
            hint: '肯定回答用什么',
            explanation: '肯定回答用Yes, they are.'
          },
          {
            id: 'e4u4l5q3',
            type: 'choice',
            question: '— What are these? — _____ carrots.',
            answer: 'They are',
            hint: '回答复数用什么',
            explanation: '回答用They are + 复数名词',
            options: [
              'They are',
              'It is',
              'This is',
              'That is'
            ]
          },
          {
            id: 'e4u4l5q4',
            type: 'fill',
            question: 'tomato的复数是 _____。',
            answer: 'tomatoes',
            hint: 'tomato复数加什么',
            explanation: 'tomato以o结尾加es，复数是tomatoes'
          },
          {
            id: 'e4u4l5q5',
            type: 'choice',
            question: 'Which plural (复数) is correct?',
            answer: 'three sheep',
            hint: '三个绵羊复数是什么',
            explanation: 'sheep复数不变，three sheep表示三只绵羊',
            options: [
              'three sheep',
              'three sheeps',
              'three sheepes',
              'three sheep\'s'
            ]
          },
          {
            id: 'e4u4l5q6',
            type: 'fill',
            question: 'What _____ those? (是)',
            answer: 'are',
            hint: '复数疑问句用什么be动词',
            explanation: '复数用are，What are those?表示那些是什么'
          },
          {
            id: 'e4u4l5q7',
            type: 'choice',
            question: '"这些是胡萝卜吗"用英语怎么说？',
            answer: 'Are these carrots?',
            hint: '[Are these/those句型]（英语四年级-第4单元）',
            explanation: '近处复数用these，Are these carrots?表示这些是胡萝卜吗',
            options: [
              'Are these carrots?',
              'Is this carrot?',
              'Are those carrots?',
              'What are carrots?'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'e4u5',
    title: 'Dinner\'s Ready',
    subtitle: '食物词汇与What would you like?句型',
    order: 5,
    lessons: [
      {
        id: 'e4u5l1',
        title: '食物词汇：rice/beef/fish/noodles',
        order: 1,
        teachingMethod: 'TPR+实物教学法',
        iDo: '家长拿食物图片说单词，边展示边说rice、beef、fish、noodles',
        weDo: '亲子一起看食物图说单词，玩"食物点名"游戏',
        youDo: '孩子独立辨认食物并说出英文单词',
        parentTips: '用食物图片或实物学单词，结合用餐场景',
        funElement: '玩"小小厨师"游戏，报菜名说英语单词',
        gsapAnimations: [
          'GSAP:食物卡片翻转-cardReveal',
          'GSAP:食物高亮-highlight'
        ],
        images: [
          'IMG:食物词汇图',
          'IMG:晚餐食物插图'
        ],
        content: [
          {
            type: 'text',
            content: 'Dinner\'s ready! 晚餐准备好啦！来认识食物单词。rice是米饭，beef是牛肉，fish是鱼，noodles是面条。你最想吃哪个？',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'rice — 米饭 🍚\nbeef — 牛肉 🥩\nfish — 鱼 🐟\nnoodles — 面条 🍜',
            animationType: 'cardReveal',
            label: '食物词汇'
          },
          {
            type: 'dialogue',
            content: 'Mom: Dinner\'s ready! What do you want?\nTom: I want rice and fish.\nMom: Good choice!\nTom: And beef too!',
            animationType: 'timeline',
            label: '晚餐对话'
          },
          {
            type: 'tip',
            content: 'rice和beef是不可数名词，没有复数形式。noodles通常用复数（因为面条是一根根的）。fish单复同形。',
            animationType: 'sequence',
            label: '语法提示'
          },
          {
            type: 'text',
            content: '更多食物：chicken（鸡肉）、soup（汤）、bread（面包）、vegetable（蔬菜）。吃饭时用英语说说桌上的食物吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '食物卡片翻转，揭示米饭、牛肉、鱼、面条',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Dinner\'s Ready',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'rice',
                    back: '🍚',
                    ttsText: 'rice'
                  },
                  {
                    front: 'beef',
                    back: '🥩',
                    ttsText: 'beef'
                  },
                  {
                    front: 'fish',
                    back: '🐟',
                    ttsText: 'fish'
                  },
                  {
                    front: 'noodles',
                    back: '🍜',
                    ttsText: 'noodles'
                  }
                ]
              },
              ttsNarration: '食物词汇：米饭、牛肉、鱼、面条'
            }
          },
          {
            type: 'example',
            content: 'I like rice. — 我喜欢米饭。\nI want fish. — 我想要鱼。\nI eat noodles. — 我吃面条。',
            animationType: 'cardReveal',
            label: '食物句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u5l1q1',
            type: 'choice',
            question: '"米饭"用英语怎么说？',
            answer: 'rice',
            hint: '米饭的英文',
            explanation: 'rice是米饭，是中国人的主食',
            options: [
              'rice',
              'beef',
              'fish',
              'noodles'
            ]
          },
          {
            id: 'e4u5l1q2',
            type: 'fill',
            question: 'I want _____ for dinner. (牛肉)',
            answer: 'beef',
            hint: '牛肉的英文',
            explanation: 'beef是牛肉，I want beef表示我想要牛肉'
          },
          {
            id: 'e4u5l1q3',
            type: 'choice',
            question: 'Which food swims in the water and we eat it?',
            answer: 'fish',
            hint: '水里游的动物食物',
            explanation: 'fish是鱼，水里游的，可以吃的食物',
            options: [
              'rice',
              'beef',
              'fish',
              'noodles'
            ]
          },
          {
            id: 'e4u5l1q4',
            type: 'fill',
            question: '_____ are long and yummy. (面条)',
            answer: 'Noodles',
            hint: '面条的英文',
            explanation: 'noodles是面条，通常用复数形式'
          },
          {
            id: 'e4u5l1q5',
            type: 'choice',
            question: 'Tom says "I want rice and fish." What does he want?',
            answer: '米饭和鱼',
            hint: 'rice and fish是什么',
            explanation: 'rice米饭 fish鱼，rice and fish表示米饭和鱼',
            options: [
              '米饭和鱼',
              '牛肉和面条',
              '米饭和牛肉',
              '鱼和面条'
            ]
          },
          {
            id: 'e4u5l1q6',
            type: 'fill',
            question: 'Dinner\'s _____! (准备好了)',
            answer: 'ready',
            hint: 'ready的用法',
            explanation: 'Dinner\'s ready!表示晚餐准备好了，ready是准备好的'
          },
          {
            id: 'e4u5l1q7',
            type: 'fill',
            question: '中国人最常吃的主食是 _____。',
            answer: 'rice',
            hint: '[食物词汇]（英语四年级-第5单元）',
            explanation: 'rice是米饭，是中国人最常吃的主食'
          }
        ]
      },
      {
        id: 'e4u5l2',
        title: 'What would you like? 句型',
        order: 2,
        teachingMethod: '情境对话：模拟餐厅',
        iDo: '家长模拟餐厅点餐，扮演服务员问What would you like?孩子回答',
        weDo: '亲子一起演餐厅点餐，轮流当服务员和顾客',
        youDo: '孩子独立完成餐厅点餐对话',
        parentTips: '餐厅角色扮演：服务员问What would you like?顾客回答',
        funElement: '玩"家庭餐厅"游戏，孩子当服务员点餐',
        gsapAnimations: [
          'GSAP:餐厅场景逐步构建-sceneBuild',
          'GSAP:对话高亮-highlight'
        ],
        images: [
          'IMG:模拟餐厅场景',
          'IMG:餐厅点餐插图'
        ],
        content: [
          {
            type: 'text',
            content: '在餐厅，服务员会问 What would you like? 你想要什么？这是礼貌地问你想吃什么。回答用 I\'d like...（我想要……）',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'What would you like? — 你想要什么？\nI\'d like some rice. — 我想要一些米饭。\nI\'d like some beef. — 我想要一些牛肉。',
            animationType: 'timeline',
            label: '点餐句型'
          },
          {
            type: 'dialogue',
            content: 'Waiter: What would you like?\nAmy: I\'d like some rice and fish, please.\nWaiter: Anything else?\nAmy: Some noodles too, please.\nWaiter: OK! Wait a moment.',
            animationType: 'timeline',
            label: '餐厅点餐'
          },
          {
            type: 'tip',
            content: 'I\'d like = I would like，比I want更礼貌。点餐时加please更礼貌哦！some用于不可数名词前，表示"一些"。',
            animationType: 'sequence',
            label: '礼貌用语'
          },
          {
            type: 'text',
            content: '完整点餐对话：服务员问What would you like? → 顾客说I\'d like... → 服务员问Anything else?（还要别的吗？）→ 顾客补充或说That\'s all.（就这些。）',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '餐厅场景逐步构建：餐桌、菜单、食物、服务员出现',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'Welcome to the Restaurant',
              sceneBuildConfig: {
                sceneName: 'Restaurant',
                elements: [
                  {
                    id: 'el-0',
                    text: 'table',
                    emoji: '🍽️',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'table'
                  },
                  {
                    id: 'el-1',
                    text: 'menu',
                    emoji: '📋',
                    delay: 0.4,
                    animation: 'popIn',
                    ttsText: 'menu'
                  },
                  {
                    id: 'el-2',
                    text: 'food',
                    emoji: '🍱',
                    delay: 0.8,
                    animation: 'scaleIn',
                    ttsText: 'food'
                  },
                  {
                    id: 'el-3',
                    text: 'waiter',
                    emoji: '🧑‍🍳',
                    delay: 1.2,
                    animation: 'fadeIn',
                    ttsText: 'waiter'
                  }
                ]
              },
              ttsNarration: '餐厅场景：餐桌、菜单、食物、服务员'
            }
          },
          {
            type: 'example',
            content: 'What would you like? I\'d like...\nAnything else? That\'s all.\nPlease. Thank you.',
            animationType: 'cardReveal',
            label: '点餐流程'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u5l2q1',
            type: 'choice',
            question: '服务员问你想吃什么，会说什么？',
            answer: 'What would you like?',
            hint: '服务员问什么',
            explanation: '服务员礼貌地问What would you like?你想要什么',
            options: [
              'What would you like?',
              'Where are you?',
              'How old are you?',
              'What is this?'
            ]
          },
          {
            id: 'e4u5l2q2',
            type: 'fill',
            question: '— What would you like? — _____ like some rice.',
            answer: 'I\'d',
            hint: '礼貌回答用什么',
            explanation: '回答用I\'d like...，I\'d = I would'
          },
          {
            id: 'e4u5l2q3',
            type: 'choice',
            question: 'I\'d like = ?',
            answer: 'I would like',
            hint: 'I\'d是缩写形式',
            explanation: 'I\'d like是I would like的缩写，更礼貌',
            options: [
              'I want like',
              'I would like',
              'I am like',
              'I do like'
            ]
          },
          {
            id: 'e4u5l2q4',
            type: 'fill',
            question: 'I\'d like _____ rice, please. (一些)',
            answer: 'some',
            hint: '不可数名词前用什么',
            explanation: 'some表示一些，用于不可数名词前，some rice表示一些米饭'
          },
          {
            id: 'e4u5l2q5',
            type: 'choice',
            question: 'Waiter asks "Anything else?" Amy is full. She says?',
            answer: 'That\'s all.',
            hint: '不要别的了说什么',
            explanation: '不要别的了说That\'s all.表示就这些了',
            options: [
              'That\'s all.',
              'More please.',
              'I want more.',
              'I don\'t know.'
            ]
          },
          {
            id: 'e4u5l2q6',
            type: 'fill',
            question: '— What would you like? — I\'d like some _____, please. (鱼)',
            answer: 'fish',
            hint: '鱼的英文',
            explanation: 'fish是鱼，I\'d like some fish表示我想要一些鱼'
          },
          {
            id: 'e4u5l2q7',
            type: 'choice',
            question: '"我想要一些牛肉"礼貌说法是？',
            answer: 'I\'d like some beef.',
            hint: '[What would you like句型]（英语四年级-第5单元）',
            explanation: '礼貌用I\'d like some beef.表示我想要一些牛肉',
            options: [
              'I\'d like some beef.',
              'I want beef.',
              'Give me beef.',
              'Beef please I.'
            ]
          }
        ]
      },
      {
        id: 'e4u5l3',
        title: 'I\'d like... 表达喜好',
        order: 3,
        teachingMethod: '情境式教学法',
        iDo: '家长示范I\'d like rice. 表达自己想吃的食物，配合动作',
        weDo: '亲子一起说I\'d like...表达喜好，互相问想吃什么',
        youDo: '孩子独立用I\'d like...表达自己想吃的食物',
        parentTips: 'I\'d like = I would like，礼貌表达喜好',
        funElement: '玩"我的晚餐"游戏，说出自己想吃的食物',
        gsapAnimations: [
          'GSAP:点餐对话气泡依次出现-timeline',
          'GSAP:食物高亮-highlight'
        ],
        images: [
          'IMG:点餐对话图',
          'IMG:表达喜好插图'
        ],
        content: [
          {
            type: 'text',
            content: 'I\'d like... 是礼貌地表达"我想要……"的句型。I\'d like some rice.（我想要一些米饭。）比I want...更礼貌，用餐时多用I\'d like...',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'I\'d like some rice. — 我想要一些米饭。\nI\'d like some beef. — 我想要一些牛肉。\nI\'d like some fish and noodles. — 我想要鱼和面条。\nI\'d like some soup. — 我想要一些汤。',
            animationType: 'timeline',
            label: '表达喜好'
          },
          {
            type: 'dialogue',
            content: 'Mom: What would you like for dinner?\nTom: I\'d like some rice and fish.\nMom: Would you like some beef?\nTom: Yes, please! I love beef!',
            animationType: 'timeline',
            label: '晚餐对话'
          },
          {
            type: 'tip',
            content: 'Would you like...? 是礼貌地问"你要不要……？"肯定回答Yes, please. 否定回答No, thanks. 记住加please和thanks更礼貌！',
            animationType: 'sequence',
            label: '问答提示'
          },
          {
            type: 'text',
            content: '表达喜欢还可以说：I like rice.（我喜欢米饭。）I love fish!（我超爱鱼！）I don\'t like onions.（我不喜欢洋葱。）说说你喜欢和不喜欢的食物吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '点餐对话气泡依次出现，展示表达喜好的对话',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'I\'d Like...',
              timelineConfig: {
                steps: [
                  {
                    text: 'What would you like?',
                    emoji: '🤔',
                    ttsNarration: 'What would you like?'
                  },
                  {
                    text: 'I\'d like some rice.',
                    emoji: '🍚',
                    ttsNarration: 'I\'d like some rice.'
                  },
                  {
                    text: 'Would you like some beef?',
                    emoji: '🥩',
                    ttsNarration: 'Would you like some beef?'
                  },
                  {
                    text: 'Yes, please!',
                    emoji: '😊',
                    ttsNarration: 'Yes, please!'
                  }
                ]
              },
              ttsNarration: '表达喜好对话'
            }
          },
          {
            type: 'example',
            content: 'Would you like...? — 你要不要……？\nYes, please. — 好的，谢谢。\nNo, thanks. — 不用了，谢谢。',
            animationType: 'cardReveal',
            label: '礼貌问答'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u5l3q1',
            type: 'choice',
            question: '"我想要一些米饭"礼貌说法是？',
            answer: 'I\'d like some rice.',
            hint: '礼貌表达想要什么',
            explanation: 'I\'d like some rice.是礼貌表达，I\'d = I would',
            options: [
              'I\'d like some rice.',
              'I want rice.',
              'Give me rice.',
              'Rice I want.'
            ]
          },
          {
            id: 'e4u5l3q2',
            type: 'fill',
            question: '— Would you like some fish? — Yes, _____.',
            answer: 'please',
            hint: '肯定礼貌回答',
            explanation: '肯定回答用Yes, please.加please更礼貌'
          },
          {
            id: 'e4u5l3q3',
            type: 'choice',
            question: '— Would you like some soup? — No, _____.',
            answer: 'thanks',
            hint: '否定礼貌回答',
            explanation: '否定回答用No, thanks.加thanks更礼貌',
            options: [
              'thanks',
              'please',
              'OK',
              'yes'
            ]
          },
          {
            id: 'e4u5l3q4',
            type: 'fill',
            question: 'I\'d _____ some noodles, please.',
            answer: 'like',
            hint: '我想要什么动词',
            explanation: 'I\'d like...表示我想要，like是动词'
          },
          {
            id: 'e4u5l3q5',
            type: 'choice',
            question: 'Which is more polite (更礼貌)?',
            answer: 'I\'d like some beef.',
            hint: '哪个更礼貌',
            explanation: 'I\'d like比I want更礼貌，用餐时用I\'d like',
            options: [
              'I\'d like some beef.',
              'I want beef.',
              'Give me beef.',
              'Beef now.'
            ]
          },
          {
            id: 'e4u5l3q6',
            type: 'fill',
            question: 'I _____ fish! (超爱)',
            answer: 'love',
            hint: '超爱用什么词',
            explanation: 'love表示超爱、非常喜欢，I love fish!表示我超爱鱼'
          },
          {
            id: 'e4u5l3q7',
            type: 'choice',
            question: '"你要不要一些汤"礼貌问法是？',
            answer: 'Would you like some soup?',
            hint: '[I\'d like句型]（英语四年级-第5单元）',
            explanation: '礼貌问要不要用Would you like...? Would you like some soup?',
            options: [
              'Would you like some soup?',
              'Do you want soup?',
              'Soup you like?',
              'Give you soup?'
            ]
          }
        ]
      },
      {
        id: 'e4u5l4',
        title: '餐桌礼仪：Pass me.../Help yourself',
        order: 4,
        teachingMethod: '角色扮演法',
        iDo: '家长示范餐桌用语：Pass me the fork. Help yourself. 配合递餐具动作',
        weDo: '亲子一起模拟晚餐，使用餐桌用语互相递食物',
        youDo: '孩子独立用餐桌用语，礼貌地用餐',
        parentTips: '模拟晚餐：Pass me the fork. Help yourself.',
        funElement: '玩"礼貌小客人"游戏，用餐桌用语用餐',
        gsapAnimations: [
          'GSAP:餐桌场景对话展开-timeline',
          'GSAP:礼仪高亮-highlight'
        ],
        images: [
          'IMG:餐桌场景图',
          'IMG:餐具与食物插图'
        ],
        content: [
          {
            type: 'text',
            content: '吃饭时也有礼仪用语哦！Pass me... 是"递给我……"，Help yourself是"请自便/随便吃"。礼貌用餐，人人夸！',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'Pass me the fork, please. — 请把叉子递给我。\nPass me the spoon, please. — 请把勺子递给我。\nHelp yourself. — 请随便吃。\nThank you. — 谢谢。',
            animationType: 'timeline',
            label: '餐桌用语'
          },
          {
            type: 'dialogue',
            content: 'Dad: Dinner\'s ready. Help yourself!\nTom: Thank you, Dad.\nTom: Pass me the fork, please.\nDad: Here you are.\nTom: Thanks!',
            animationType: 'timeline',
            label: '晚餐礼仪'
          },
          {
            type: 'tip',
            content: 'Pass me... 后面加please更礼貌，别人递给你要说Thank you / Thanks。Help yourself用来邀请别人随便吃。',
            animationType: 'sequence',
            label: '礼仪提示'
          },
          {
            type: 'text',
            content: '餐具词汇：fork（叉子）、spoon（勺子）、knife（刀）、bowl（碗）、plate（盘子）、chopsticks（筷子）。吃饭时用英语说说餐具吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '餐桌场景对话展开，依次出现递餐具和请自便的对话',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'Table Manners',
              timelineConfig: {
                steps: [
                  {
                    text: 'Dinner\'s ready. Help yourself!',
                    emoji: '🍽️',
                    ttsNarration: 'Dinner\'s ready. Help yourself!'
                  },
                  {
                    text: 'Thank you, Dad.',
                    emoji: '😊',
                    ttsNarration: 'Thank you, Dad.'
                  },
                  {
                    text: 'Pass me the fork, please.',
                    emoji: '🍴',
                    ttsNarration: 'Pass me the fork, please.'
                  },
                  {
                    text: 'Here you are.',
                    emoji: '🤲',
                    ttsNarration: 'Here you are.'
                  }
                ]
              },
              ttsNarration: '餐桌礼仪对话'
            }
          },
          {
            type: 'example',
            content: 'Pass me the fork. — 递给我叉子\nPass me the spoon. — 递给我勺子\nHelp yourself. — 请随便吃\nHere you are. — 给你',
            animationType: 'cardReveal',
            label: '餐具与用语'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u5l4q1',
            type: 'choice',
            question: '"请把叉子递给我"用英语怎么说？',
            answer: 'Pass me the fork, please.',
            hint: '递叉子怎么说',
            explanation: 'Pass me...是递给我，fork是叉子',
            options: [
              'Pass me the fork, please.',
              'Help yourself, fork.',
              'Fork me pass.',
              'Give fork me.'
            ]
          },
          {
            id: 'e4u5l4q2',
            type: 'fill',
            question: '_____ yourself! (请随便吃)',
            answer: 'Help',
            hint: '请自便用什么',
            explanation: 'Help yourself!表示请随便吃，是邀请用语'
          },
          {
            id: 'e4u5l4q3',
            type: 'choice',
            question: '别人递给你东西，你应该说什么？',
            answer: 'Thank you.',
            hint: '别人给你东西说什么',
            explanation: '别人递给你东西要说Thank you!表示感谢',
            options: [
              'Thank you.',
              'Goodbye.',
              'Sorry.',
              'Hello.'
            ]
          },
          {
            id: 'e4u5l4q4',
            type: 'fill',
            question: 'Pass me the _____, please. (勺子)',
            answer: 'spoon',
            hint: '勺子的英文',
            explanation: 'spoon是勺子，Pass me the spoon表示把勺子递给我'
          },
          {
            id: 'e4u5l4q5',
            type: 'choice',
            question: 'Dad says "Help yourself!" What does he mean?',
            answer: '请随便吃',
            hint: 'help yourself什么意思',
            explanation: 'Help yourself!表示请随便吃，是邀请客人用餐的用语',
            options: [
              '请随便吃',
              '请帮帮忙',
              '请递给我',
              '请坐下'
            ]
          },
          {
            id: 'e4u5l4q6',
            type: 'fill',
            question: '— Pass me the fork, please. — Here _____ are.',
            answer: 'you',
            hint: '给你怎么说',
            explanation: '递给别人东西说Here you are.表示给你'
          },
          {
            id: 'e4u5l4q7',
            type: 'choice',
            question: '"请随便吃"用英语怎么说？',
            answer: 'Help yourself.',
            hint: '[餐桌礼仪]（英语四年级-第5单元）',
            explanation: 'Help yourself!表示请随便吃，是餐桌邀请用语',
            options: [
              'Help yourself.',
              'Pass yourself.',
              'Eat yourself.',
              'Take yourself.'
            ]
          }
        ]
      },
      {
        id: 'e4u5l5',
        title: '第五单元综合检测',
        order: 5,
        teachingMethod: '形成性评价法',
        iDo: '家长引导回顾食物词汇和点餐句型，示范检测题',
        weDo: '亲子一起做练习，互相检查讨论',
        youDo: '孩子独立完成检测，检验食物词汇和点餐礼仪',
        parentTips: '食物+句型+礼仪综合，正确率80%可获三星',
        funElement: '通关获得"Dinner达人"徽章，撒花庆祝',
        gsapAnimations: [
          'GSAP:通关撒花-confetti',
          'GSAP:星星飞入-starFlyIn'
        ],
        images: [
          'IMG:Dinner达人徽章',
          'IMG:单元回顾插图'
        ],
        content: [
          {
            type: 'text',
            content: '回顾Dinner\'s Ready单元！食物rice/beef/fish/noodles，点餐句型What would you like? I\'d like...，餐桌礼仪Pass me.../Help yourself.',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'rice米饭 beef牛肉 fish鱼 noodles面条\nWhat would you like? I\'d like some...\nWould you like...? Yes, please. / No, thanks.\nPass me... Help yourself. Here you are.',
            animationType: 'cardReveal',
            label: '单元知识树'
          },
          {
            type: 'dialogue',
            content: 'Waiter: What would you like?\nAmy: I\'d like some rice and fish.\nWaiter: Would you like some beef?\nAmy: Yes, please!\nDad: Help yourself!\nAmy: Pass me the fork, please.',
            animationType: 'timeline',
            label: '综合对话'
          },
          {
            type: 'tip',
            content: '答题要点：I\'d like比I want礼貌，some用于不可数名词，Would you like肯定用Yes please否定用No thanks。',
            animationType: 'sequence',
            label: '答题技巧'
          },
          {
            type: 'text',
            content: '7道题检验你的学习成果！基础、提高、挑战加回溯，全部通关就是Dinner达人！加油！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '回顾卡片翻转，揭示本单元知识点',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Unit 5 Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Food',
                    back: '🍱',
                    ttsText: 'rice beef fish noodles'
                  },
                  {
                    front: 'Ordering',
                    back: 'I\'d like some rice.',
                    ttsText: 'What would you like?'
                  },
                  {
                    front: 'Polite Q&A',
                    back: '😊',
                    ttsText: 'Would you like...? Yes, please.'
                  },
                  {
                    front: 'Table Manners',
                    back: '🍴',
                    ttsText: 'Pass me... Help yourself.'
                  }
                ]
              },
              ttsNarration: '第五单元回顾：食物、点餐、礼仪'
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u5l5q1',
            type: 'choice',
            question: '"面条"用英语怎么说？',
            answer: 'noodles',
            hint: '面条的英文',
            explanation: 'noodles是面条，通常用复数形式',
            options: [
              'rice',
              'beef',
              'fish',
              'noodles'
            ]
          },
          {
            id: 'e4u5l5q2',
            type: 'fill',
            question: '— What would you like? — _____ like some fish.',
            answer: 'I\'d',
            hint: '礼貌回答',
            explanation: '回答用I\'d like...，I\'d = I would'
          },
          {
            id: 'e4u5l5q3',
            type: 'choice',
            question: '— Would you like some beef? — _____',
            answer: 'Yes, please.',
            hint: '肯定礼貌回答',
            explanation: '肯定回答用Yes, please.',
            options: [
              'Yes, please.',
              'No, please.',
              'Yes, thanks.',
              'No, OK.'
            ]
          },
          {
            id: 'e4u5l5q4',
            type: 'fill',
            question: 'Pass me the _____, please. (叉子)',
            answer: 'fork',
            hint: '叉子的英文',
            explanation: 'fork是叉子，Pass me the fork表示把叉子递给我'
          },
          {
            id: 'e4u5l5q5',
            type: 'choice',
            question: 'Which is more polite?',
            answer: 'I\'d like some rice.',
            hint: '哪个更礼貌',
            explanation: 'I\'d like比I want更礼貌',
            options: [
              'I\'d like some rice.',
              'I want rice.',
              'Give me rice.',
              'Rice now.'
            ]
          },
          {
            id: 'e4u5l5q6',
            type: 'fill',
            question: '_____ yourself! (请随便吃)',
            answer: 'Help',
            hint: '请自便的用语',
            explanation: 'Help yourself!表示请随便吃，是餐桌邀请用语'
          },
          {
            id: 'e4u5l5q7',
            type: 'choice',
            question: '"你想要什么"服务员礼貌问法是？',
            answer: 'What would you like?',
            hint: '[What would you like句型]（英语四年级-第5单元）',
            explanation: '服务员礼貌问What would you like?你想要什么',
            options: [
              'What would you like?',
              'What do you want?',
              'What you like?',
              'Give you what?'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'e4u6',
    title: 'Meet My Family',
    subtitle: '家庭成员词汇与How many...?句型',
    order: 6,
    lessons: [
      {
        id: 'e4u6l1',
        title: '家庭成员词汇',
        order: 1,
        teachingMethod: '情境式：家庭树',
        iDo: '家长画家庭树介绍成员，边指边说father、mother、uncle、aunt',
        weDo: '亲子一起画家庭树，边画边说家庭成员单词',
        youDo: '孩子独立画家庭树并说出家庭成员单词',
        parentTips: '用家庭树照片学单词，边指边说',
        funElement: '玩"家庭树贴贴乐"，贴照片说单词',
        gsapAnimations: [
          'GSAP:家庭树逐步展开-sceneBuild',
          'GSAP:成员高亮-highlight'
        ],
        images: [
          'IMG:家庭树图',
          'IMG:家庭成员插图'
        ],
        content: [
          {
            type: 'text',
            content: 'Meet my family! 来认识我的家人。father是爸爸，mother是妈妈，uncle是叔叔/舅舅，aunt是阿姨/姑姑。画一棵家庭树，把家人都放上去吧！',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'father — 爸爸 👨\nmother — 妈妈 👩\nuncle — 叔叔/舅舅 🧑\naunt — 阿姨/姑姑 👩',
            animationType: 'cardReveal',
            label: '家庭成员词汇'
          },
          {
            type: 'dialogue',
            content: 'Amy: Look at my family tree!\nTom: Who is this?\nAmy: This is my father. And this is my mother.\nTom: And him?\nAmy: He is my uncle. She is my aunt.',
            animationType: 'timeline',
            label: '家庭介绍'
          },
          {
            type: 'tip',
            content: 'father和mother是父母，uncle和aunt是父母的兄弟姐妹。还有grandfather（爷爷/外公）、grandmother（奶奶/外婆）。',
            animationType: 'sequence',
            label: '家庭关系'
          },
          {
            type: 'text',
            content: '更多家庭成员：brother（哥哥/弟弟）、sister（姐姐/妹妹）、cousin（表兄弟姐妹）、baby（宝宝）。你的家庭有几口人？用英语数数看！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '家庭树逐步展开，爸爸、妈妈、叔叔、阿姨依次出现',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'My Family Tree',
              sceneBuildConfig: {
                sceneName: 'FamilyTree',
                elements: [
                  {
                    id: 'el-0',
                    text: 'father',
                    emoji: '👨',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'father'
                  },
                  {
                    id: 'el-1',
                    text: 'mother',
                    emoji: '👩',
                    delay: 0.4,
                    animation: 'popIn',
                    ttsText: 'mother'
                  },
                  {
                    id: 'el-2',
                    text: 'uncle',
                    emoji: '🧑',
                    delay: 0.8,
                    animation: 'scaleIn',
                    ttsText: 'uncle'
                  },
                  {
                    id: 'el-3',
                    text: 'aunt',
                    emoji: '👩',
                    delay: 1.2,
                    animation: 'fadeIn',
                    ttsText: 'aunt'
                  }
                ]
              },
              ttsNarration: '家庭成员：爸爸、妈妈、叔叔、阿姨'
            }
          },
          {
            type: 'example',
            content: 'This is my father. — 这是我爸爸。\nThis is my mother. — 这是我妈妈。\nHe is my uncle. — 他是我的叔叔。\nShe is my aunt. — 她是我的阿姨。',
            animationType: 'cardReveal',
            label: '介绍句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u6l1q1',
            type: 'choice',
            question: '"爸爸"用英语怎么说？',
            answer: 'father',
            hint: '爸爸的英文',
            explanation: 'father是爸爸，也可以说dad',
            options: [
              'father',
              'mother',
              'uncle',
              'aunt'
            ]
          },
          {
            id: 'e4u6l1q2',
            type: 'fill',
            question: 'This is my _____. (妈妈)',
            answer: 'mother',
            hint: '妈妈的英文',
            explanation: 'mother是妈妈，也可以说mom'
          },
          {
            id: 'e4u6l1q3',
            type: 'choice',
            question: 'Your father\'s brother is your _____?',
            answer: 'uncle',
            hint: '爸爸的兄弟是谁',
            explanation: '爸爸的兄弟是uncle（叔叔/舅舅）',
            options: [
              'uncle',
              'aunt',
              'father',
              'mother'
            ]
          },
          {
            id: 'e4u6l1q4',
            type: 'fill',
            question: 'She is my _____. (阿姨)',
            answer: 'aunt',
            hint: '阿姨的英文',
            explanation: 'aunt是阿姨/姑姑，父母的姐妹'
          },
          {
            id: 'e4u6l1q5',
            type: 'choice',
            question: 'Amy says "He is my uncle." Who is he?',
            answer: 'Her uncle.',
            hint: 'he is my uncle是什么意思',
            explanation: 'He is my uncle.表示他是我的叔叔',
            options: [
              'Her uncle.',
              'Her father.',
              'Her brother.',
              'Her cousin.'
            ]
          },
          {
            id: 'e4u6l1q6',
            type: 'fill',
            question: 'My _____ is a kind woman. (妈妈)',
            answer: 'mother',
            hint: '妈妈的英文',
            explanation: 'mother是妈妈，My mother is a kind woman.表示我妈妈是个善良的女人'
          },
          {
            id: 'e4u6l1q7',
            type: 'fill',
            question: '爸爸的英文还可以说 _____（口语）。',
            answer: 'dad',
            hint: '[家庭成员词汇]（英语四年级-第6单元）',
            explanation: '爸爸口语可以说dad，正式说法是father'
          }
        ]
      },
      {
        id: 'e4u6l2',
        title: '职业词汇：doctor/teacher/driver/nurse',
        order: 2,
        teachingMethod: 'TPR+角色扮演法',
        iDo: '家长模仿职业动作说单词：doctor看病、teacher教书、driver开车、nurse护理',
        weDo: '亲子一起模仿职业动作说单词，玩"职业猜猜看"',
        youDo: '孩子独立模仿职业并说出英文单词',
        parentTips: '用动作模仿职业学单词，边演边说',
        funElement: '玩"职业小演员"游戏，演职业让家人猜',
        gsapAnimations: [
          'GSAP:职业卡片翻转-cardReveal',
          'GSAP:职业高亮-highlight'
        ],
        images: [
          'IMG:职业人物图',
          'IMG:职业动作插图'
        ],
        content: [
          {
            type: 'text',
            content: '家人都有不同的职业！doctor是医生，治病救人；teacher是老师，教书育人；driver是司机，开车运送；nurse是护士，照顾病人。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'doctor — 医生 👨‍⚕️\nteacher — 老师 👩‍🏫\ndriver — 司机 🚗\nnurse — 护士 👩‍⚕️',
            animationType: 'cardReveal',
            label: '职业词汇'
          },
          {
            type: 'dialogue',
            content: 'Tom: What does your father do?\nAmy: He is a doctor. He helps sick people.\nTom: What about your mother?\nAmy: She is a teacher. She teaches English!',
            animationType: 'timeline',
            label: '介绍职业'
          },
          {
            type: 'tip',
            content: '问职业用What does... do? 回答用He/She is a + 职业。比如He is a doctor. 他是一名医生。',
            animationType: 'sequence',
            label: '句型提示'
          },
          {
            type: 'text',
            content: '更多职业：policeman（警察）、farmer（农民）、cook（厨师）、worker（工人）。每个职业都很重要，尊重每一种职业！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '职业卡片翻转，揭示医生、老师、司机、护士',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Jobs',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'doctor',
                    back: '👨‍⚕️',
                    ttsText: 'doctor'
                  },
                  {
                    front: 'teacher',
                    back: '👩‍🏫',
                    ttsText: 'teacher'
                  },
                  {
                    front: 'driver',
                    back: '🚗',
                    ttsText: 'driver'
                  },
                  {
                    front: 'nurse',
                    back: '👩‍⚕️',
                    ttsText: 'nurse'
                  }
                ]
              },
              ttsNarration: '职业词汇：医生、老师、司机、护士'
            }
          },
          {
            type: 'example',
            content: 'What does he do? — 他做什么工作？\nHe is a doctor. — 他是一名医生。\nWhat does she do? — 她做什么工作？\nShe is a teacher. — 她是一名老师。',
            animationType: 'cardReveal',
            label: '职业问答'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u6l2q1',
            type: 'choice',
            question: '"医生"用英语怎么说？',
            answer: 'doctor',
            hint: '医生的英文',
            explanation: 'doctor是医生，治病救人',
            options: [
              'doctor',
              'teacher',
              'driver',
              'nurse'
            ]
          },
          {
            id: 'e4u6l2q2',
            type: 'fill',
            question: 'She is a _____. She teaches English. (老师)',
            answer: 'teacher',
            hint: '教书的职业',
            explanation: 'teacher是老师，teaches表示教书'
          },
          {
            id: 'e4u6l2q3',
            type: 'choice',
            question: 'Who drives a car (开车)?',
            answer: 'driver',
            hint: '开车的职业',
            explanation: 'driver是司机，专门开车',
            options: [
              'doctor',
              'teacher',
              'driver',
              'nurse'
            ]
          },
          {
            id: 'e4u6l2q4',
            type: 'fill',
            question: 'A _____ takes care of sick people in hospital. (护士)',
            answer: 'nurse',
            hint: '照顾病人的职业',
            explanation: 'nurse是护士，在医院照顾病人'
          },
          {
            id: 'e4u6l2q5',
            type: 'choice',
            question: 'Tom asks about Amy\'s father\'s job. He says?',
            answer: 'What does your father do?',
            hint: '问职业怎么说',
            explanation: '问职业用What does... do? What does your father do?',
            options: [
              'What does your father do?',
              'Where is your father?',
              'How is your father?',
              'What is your father?'
            ]
          },
          {
            id: 'e4u6l2q6',
            type: 'fill',
            question: '— What does she do? — She is a _____. (医生)',
            answer: 'doctor',
            hint: '医生英文',
            explanation: 'doctor是医生，She is a doctor.表示她是一名医生'
          },
          {
            id: 'e4u6l2q7',
            type: 'choice',
            question: '"他是一名老师"用英语怎么说？',
            answer: 'He is a teacher.',
            hint: '[职业词汇]（英语四年级-第6单元）',
            explanation: 'teacher是老师，He is a teacher.表示他是一名老师',
            options: [
              'He is a teacher.',
              'He is teacher.',
              'He a teacher.',
              'He does teacher.'
            ]
          }
        ]
      },
      {
        id: 'e4u6l3',
        title: 'This is my... He/She is a...',
        order: 3,
        teachingMethod: '情境对话法',
        iDo: '家长示范介绍家人：This is my father. He is a doctor. 配合照片',
        weDo: '亲子一起介绍家人，说出关系和职业',
        youDo: '孩子独立介绍家人，综合运用关系和职业句型',
        parentTips: 'This is my father. He is a doctor. 介绍家人',
        funElement: '玩"家庭相册"游戏，翻照片介绍家人',
        gsapAnimations: [
          'GSAP:介绍家人对话展开-timeline',
          'GSAP:关键词高亮-highlight'
        ],
        images: [
          'IMG:介绍家人场景',
          'IMG:家人与职业插图'
        ],
        content: [
          {
            type: 'text',
            content: '介绍家人时，先说关系再说职业：This is my father. He is a doctor.（这是我爸爸。他是一名医生。）用This is...介绍，He/She is a...说职业。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'This is my father. He is a doctor.\nThis is my mother. She is a teacher.\nThis is my uncle. He is a driver.\nThis is my aunt. She is a nurse.',
            animationType: 'timeline',
            label: '介绍家人'
          },
          {
            type: 'dialogue',
            content: 'Amy: Look! This is my family photo.\nTom: Who is this?\nAmy: This is my father. He is a doctor.\nTom: And this?\nAmy: This is my mother. She is a teacher.',
            animationType: 'timeline',
            label: '家庭相册'
          },
          {
            type: 'tip',
            content: '介绍男性家人用This is my... He is a...，介绍女性家人用This is my... She is a... 记住He/She别用错！',
            animationType: 'sequence',
            label: '语法提示'
          },
          {
            type: 'text',
            content: '介绍家人时可以多加信息：This is my father. He is a doctor. He is tall and strong. 这样介绍更生动！试试介绍你的家人吧。',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '介绍家人对话展开，依次出现关系和职业',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'Meet My Family',
              timelineConfig: {
                steps: [
                  {
                    text: 'This is my father.',
                    emoji: '👨',
                    ttsNarration: 'This is my father.'
                  },
                  {
                    text: 'He is a doctor.',
                    emoji: '👨‍⚕️',
                    ttsNarration: 'He is a doctor.'
                  },
                  {
                    text: 'This is my mother.',
                    emoji: '👩',
                    ttsNarration: 'This is my mother.'
                  },
                  {
                    text: 'She is a teacher.',
                    emoji: '👩‍🏫',
                    ttsNarration: 'She is a teacher.'
                  }
                ]
              },
              ttsNarration: '介绍家人：关系+职业'
            }
          },
          {
            type: 'example',
            content: '男：This is my... He is a...\n女：This is my... She is a...\n关系+职业，介绍更完整',
            animationType: 'cardReveal',
            label: '介绍公式'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u6l3q1',
            type: 'choice',
            question: '介绍爸爸应该说？',
            answer: 'This is my father.',
            hint: '介绍家人用什么句型',
            explanation: '介绍家人用This is my...，This is my father.表示这是我爸爸',
            options: [
              'This is my father.',
              'He is my father.',
              'It is my father.',
              'My father is this.'
            ]
          },
          {
            id: 'e4u6l3q2',
            type: 'fill',
            question: 'This is my father. _____ is a doctor.',
            answer: 'He',
            hint: '男性用什么代词',
            explanation: '介绍男性职业用He，He is a doctor.表示他是一名医生'
          },
          {
            id: 'e4u6l3q3',
            type: 'choice',
            question: 'This is my mother. _____ is a teacher.',
            answer: 'She',
            hint: '女性用什么代词',
            explanation: '介绍女性职业用She，She is a teacher.表示她是一名老师',
            options: [
              'He',
              'She',
              'It',
              'They'
            ]
          },
          {
            id: 'e4u6l3q4',
            type: 'fill',
            question: 'This is my uncle. He is a _____. (司机)',
            answer: 'driver',
            hint: '司机的英文',
            explanation: 'driver是司机，He is a driver.表示他是一名司机'
          },
          {
            id: 'e4u6l3q5',
            type: 'choice',
            question: 'Amy introduces her aunt who is a nurse. She says?',
            answer: 'This is my aunt. She is a nurse.',
            hint: '介绍阿姨护士怎么说',
            explanation: '介绍女性用This is my... She is a...，aunt是阿姨，nurse是护士',
            options: [
              'This is my aunt. She is a nurse.',
              'This is my uncle. He is a nurse.',
              'This is my aunt. He is a nurse.',
              'This is my aunt. She is a driver.'
            ]
          },
          {
            id: 'e4u6l3q6',
            type: 'fill',
            question: '_____ is my mother. She is a teacher.',
            answer: 'This',
            hint: '介绍用什么开头',
            explanation: '介绍家人用This is my...，This is my mother.表示这是我妈妈'
          },
          {
            id: 'e4u6l3q7',
            type: 'choice',
            question: '"这是我妈妈，她是一名老师"怎么说？',
            answer: 'This is my mother. She is a teacher.',
            hint: '[介绍家人句型]（英语四年级-第6单元）',
            explanation: '介绍女性用This is my... She is a...，mother妈妈 teacher老师',
            options: [
              'This is my mother. She is a teacher.',
              'This is my father. He is a teacher.',
              'This is my mother. He is a teacher.',
              'She is my mother. This is a teacher.'
            ]
          }
        ]
      },
      {
        id: 'e4u6l4',
        title: 'How many people are there in your family?',
        order: 4,
        teachingMethod: '情境对话法',
        iDo: '家长示范问答家庭人数：How many people are there in your family? Three.',
        weDo: '亲子一起问答家庭人数和成员职业',
        youDo: '孩子独立问答家庭人数和成员职业',
        parentTips: '问答家庭人数和成员职业，练习How many句型',
        funElement: '玩"家庭调查员"游戏，调查家人的家庭人数',
        gsapAnimations: [
          'GSAP:家庭人数从1滚动-numberCount',
          'GSAP:数字高亮-highlight'
        ],
        images: [
          'IMG:家庭人数图',
          'IMG:家庭成员插图'
        ],
        content: [
          {
            type: 'text',
            content: 'How many people are there in your family? 你家有几口人？回答用数字：There are three people in my family.（我家有三口人。）',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'How many people are there in your family? — 你家有几口人？\nThere are three people in my family. — 我家有三口人。\nHow many people? — 几口人？\nFour people. — 四口人。',
            animationType: 'timeline',
            label: '人数问答'
          },
          {
            type: 'dialogue',
            content: 'Tom: How many people are there in your family?\nAmy: There are four people in my family.\nTom: Who are they?\nAmy: My father, my mother, my baby brother and me!',
            animationType: 'timeline',
            label: '家庭人数对话'
          },
          {
            type: 'tip',
            content: 'How many people are there...? 问有几口人，回答用There are + 数字 + people。are跟着复数people。',
            animationType: 'sequence',
            label: '句型提示'
          },
          {
            type: 'text',
            content: '数数家里有几口人，用英语说出来：There are ___ people in my family. 再介绍每个家人：My father is a doctor. My mother is a teacher...',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '家庭人数从1滚动到4，数字依次出现',
            animationType: 'numberCount',
            animationConfig: {
              sceneType: 'numberCount',
              title: 'How Many People?',
              countConfig: {
                from: 1,
                to: 4,
                itemEmoji: '👨‍👩‍👧‍👦',
                direction: 'forward'
              },
              ttsNarration: '从一数到四，我家四口人'
            }
          },
          {
            type: 'example',
            content: 'How many people are there in your family?\nThere are three/four/five people in my family.\npeople是person的复数（人们）',
            animationType: 'cardReveal',
            label: '人数句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u6l4q1',
            type: 'choice',
            question: '"你家有几口人"用英语怎么说？',
            answer: 'How many people are there in your family?',
            hint: '问几口人怎么说',
            explanation: '问几口人用How many people are there in your family?',
            options: [
              'How many people are there in your family?',
              'How old is your family?',
              'Where is your family?',
              'What is your family?'
            ]
          },
          {
            id: 'e4u6l4q2',
            type: 'fill',
            question: '— How many people are there in your family? — There _____ three people.',
            answer: 'are',
            hint: '复数用什么be动词',
            explanation: 'people是复数，用are，There are three people.表示有三口人'
          },
          {
            id: 'e4u6l4q3',
            type: 'choice',
            question: '— How many people? — _____',
            answer: 'Four people.',
            hint: '回答几口人',
            explanation: '回答用数字+people，Four people.表示四口人',
            options: [
              'Four people.',
              'Four people is.',
              'People four.',
              'Are four.'
            ]
          },
          {
            id: 'e4u6l4q4',
            type: 'fill',
            question: 'There are _____ people in my family. (五)',
            answer: 'five',
            hint: '五的英文',
            explanation: 'five是五，There are five people.表示有五口人'
          },
          {
            id: 'e4u6l4q5',
            type: 'choice',
            question: 'Amy says "There are four people in my family." How many?',
            answer: 'Four people.',
            hint: '四口人',
            explanation: 'There are four people表示有四口人',
            options: [
              'Four people.',
              'Three people.',
              'Five people.',
              'Two people.'
            ]
          },
          {
            id: 'e4u6l4q6',
            type: 'fill',
            question: 'How _____ people are there in your family?',
            answer: 'many',
            hint: '问数量用什么',
            explanation: '问可数数量用How many，How many people?问几口人'
          },
          {
            id: 'e4u6l4q7',
            type: 'choice',
            question: '"我家有三口人"用英语怎么说？',
            answer: 'There are three people in my family.',
            hint: '[How many句型]（英语四年级-第6单元）',
            explanation: '用There are + 数字 + people，three people表示三口人',
            options: [
              'There are three people in my family.',
              'There is three people in my family.',
              'Three people is my family.',
              'How many three people family.'
            ]
          }
        ]
      },
      {
        id: 'e4u6l5',
        title: '第六单元综合检测',
        order: 5,
        teachingMethod: '形成性评价法',
        iDo: '家长引导回顾家庭成员职业和句型，示范检测题',
        weDo: '亲子一起做练习，互相检查讨论',
        youDo: '孩子独立完成检测，检验家庭职业词汇和介绍句型',
        parentTips: '家庭+职业+句型综合，正确率80%可获三星',
        funElement: '通关获得"Family达人"徽章，撒花庆祝',
        gsapAnimations: [
          'GSAP:通关撒花-confetti',
          'GSAP:星星飞入-starFlyIn'
        ],
        images: [
          'IMG:Family达人徽章',
          'IMG:单元回顾插图'
        ],
        content: [
          {
            type: 'text',
            content: '回顾Meet My Family单元！家庭成员father/mother/uncle/aunt，职业doctor/teacher/driver/nurse，This is my... He/She is a...句型，How many people...?人数问答。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'father爸爸 mother妈妈 uncle叔叔 aunt阿姨\ndoctor医生 teacher老师 driver司机 nurse护士\nThis is my... He/She is a...\nHow many people are there in your family? There are... people.',
            animationType: 'cardReveal',
            label: '单元知识树'
          },
          {
            type: 'dialogue',
            content: 'Tom: How many people are there in your family?\nAmy: There are four people.\nTom: Who is this?\nAmy: This is my father. He is a doctor.\nTom: And your mother?\nAmy: She is a teacher!',
            animationType: 'timeline',
            label: '综合对话'
          },
          {
            type: 'tip',
            content: '答题要点：男性用He女性用She，介绍用This is my...，问人数用How many people...? There are... people. 认真审题。',
            animationType: 'sequence',
            label: '答题技巧'
          },
          {
            type: 'text',
            content: '7道题检验你的学习成果！基础、提高、挑战加回溯，全部通关就是Family达人！加油！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '回顾卡片翻转，揭示本单元知识点',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Unit 6 Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Family',
                    back: '👨‍👩‍👧',
                    ttsText: 'father mother uncle aunt'
                  },
                  {
                    front: 'Jobs',
                    back: '💼',
                    ttsText: 'doctor teacher driver nurse'
                  },
                  {
                    front: 'This is my...',
                    back: '👋',
                    ttsText: 'This is my father. He is a doctor.'
                  },
                  {
                    front: 'How many...?',
                    back: '🔢',
                    ttsText: 'How many people? There are four.'
                  }
                ]
              },
              ttsNarration: '第六单元回顾：家庭、职业、句型'
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u6l5q1',
            type: 'choice',
            question: '"叔叔"用英语怎么说？',
            answer: 'uncle',
            hint: '叔叔的英文',
            explanation: 'uncle是叔叔/舅舅，父母的兄弟',
            options: [
              'uncle',
              'aunt',
              'father',
              'mother'
            ]
          },
          {
            id: 'e4u6l5q2',
            type: 'fill',
            question: 'He is a _____. He drives a bus. (司机)',
            answer: 'driver',
            hint: '司机英文',
            explanation: 'driver是司机，开车运送乘客'
          },
          {
            id: 'e4u6l5q3',
            type: 'choice',
            question: '— How many people in your family? — _____',
            answer: 'There are four people.',
            hint: '回答几口人',
            explanation: '回答用There are + 数字 + people',
            options: [
              'There are four people.',
              'Four is people.',
              'People four.',
              'Are four people.'
            ]
          },
          {
            id: 'e4u6l5q4',
            type: 'fill',
            question: 'This is my mother. _____ is a teacher.',
            answer: 'She',
            hint: '女性代词',
            explanation: '介绍女性用She，She is a teacher.表示她是一名老师'
          },
          {
            id: 'e4u6l5q5',
            type: 'choice',
            question: 'Amy introduces her father the doctor. She says?',
            answer: 'This is my father. He is a doctor.',
            hint: '介绍爸爸医生怎么说',
            explanation: '介绍男性用This is my... He is a...，father爸爸 doctor医生',
            options: [
              'This is my father. He is a doctor.',
              'This is my father. She is a doctor.',
              'This is my mother. He is a doctor.',
              'He is a doctor. This is my father.'
            ]
          },
          {
            id: 'e4u6l5q6',
            type: 'fill',
            question: 'How _____ people are there in your family?',
            answer: 'many',
            hint: '问数量用什么',
            explanation: '问可数数量用How many'
          },
          {
            id: 'e4u6l5q7',
            type: 'choice',
            question: '"她是一名护士"用英语怎么说？',
            answer: 'She is a nurse.',
            hint: '[职业词汇]（英语四年级-第6单元）',
            explanation: 'nurse是护士，She is a nurse.表示她是一名护士',
            options: [
              'She is a nurse.',
              'He is a nurse.',
              'She nurse is.',
              'She a nurse.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'e4u7',
    title: 'Shopping',
    subtitle: '购物对话与How much is...?句型',
    order: 7,
    lessons: [
      {
        id: 'e4u7l1',
        title: '服装词汇：dress/shirt/jacket/sweater',
        order: 1,
        teachingMethod: '情境式：服装店',
        iDo: '家长拿衣服说单词，边展示边说dress、shirt、jacket、sweater',
        weDo: '亲子一起认服装说单词，玩"服装店购物"游戏',
        youDo: '孩子独立辨认服装并说出英文单词',
        parentTips: '用真实衣服学单词，边摸边说',
        funElement: '玩"服装搭配师"游戏，搭配衣服说单词',
        gsapAnimations: [
          'GSAP:服装卡片翻转-cardReveal',
          'GSAP:服装高亮-highlight'
        ],
        images: [
          'IMG:服装词汇图',
          'IMG:服装店插图'
        ],
        content: [
          {
            type: 'text',
            content: 'Welcome to the clothes shop! 服装店里有很多衣服。dress是连衣裙，shirt是衬衫，jacket是夹克，sweater是毛衣。你喜欢哪件？',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'dress — 连衣裙 👗\nshirt — 衬衫 👔\njacket — 夹克 🧥\nsweater — 毛衣 🧶',
            animationType: 'cardReveal',
            label: '服装词汇'
          },
          {
            type: 'dialogue',
            content: 'Clerk: Welcome! Can I help you?\nAmy: Yes, I want a dress.\nClerk: What color?\nAmy: A red dress, please!',
            animationType: 'timeline',
            label: '服装店对话'
          },
          {
            type: 'tip',
            content: 'dress专指女装连衣裙，shirt男女都可以穿。jacket是外套夹克，sweater是毛衣保暖用。分清不同服装的用途！',
            animationType: 'sequence',
            label: '词汇辨析'
          },
          {
            type: 'text',
            content: '更多服装：coat（大衣）、T-shirt（T恤）、skirt（短裙）、pants（裤子）、shoes（鞋子）。整理衣柜时用英语说说衣服吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '服装卡片翻转，揭示连衣裙、衬衫、夹克、毛衣',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Clothes Shop',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'dress',
                    back: '👗',
                    ttsText: 'dress'
                  },
                  {
                    front: 'shirt',
                    back: '👔',
                    ttsText: 'shirt'
                  },
                  {
                    front: 'jacket',
                    back: '🧥',
                    ttsText: 'jacket'
                  },
                  {
                    front: 'sweater',
                    back: '🧶',
                    ttsText: 'sweater'
                  }
                ]
              },
              ttsNarration: '服装词汇：连衣裙、衬衫、夹克、毛衣'
            }
          },
          {
            type: 'example',
            content: 'I want a dress. — 我想要一条连衣裙。\nI like this shirt. — 我喜欢这件衬衫。\nThis jacket is cool. — 这件夹克很酷。',
            animationType: 'cardReveal',
            label: '服装句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u7l1q1',
            type: 'choice',
            question: '"连衣裙"用英语怎么说？',
            answer: 'dress',
            hint: '连衣裙的英文',
            explanation: 'dress是连衣裙，女装',
            options: [
              'dress',
              'shirt',
              'jacket',
              'sweater'
            ]
          },
          {
            id: 'e4u7l1q2',
            type: 'fill',
            question: 'I want a _____ for winter. (毛衣)',
            answer: 'sweater',
            hint: '冬天穿的毛衣',
            explanation: 'sweater是毛衣，保暖用'
          },
          {
            id: 'e4u7l1q3',
            type: 'choice',
            question: 'Which one keeps you warm in cold weather?',
            answer: 'sweater',
            hint: '保暖的衣服',
            explanation: 'sweater是毛衣，冬天穿保暖',
            options: [
              'dress',
              'shirt',
              'jacket',
              'sweater'
            ]
          },
          {
            id: 'e4u7l1q4',
            type: 'fill',
            question: 'This _____ is very cool. (夹克)',
            answer: 'jacket',
            hint: '夹克的英文',
            explanation: 'jacket是夹克，外套的一种'
          },
          {
            id: 'e4u7l1q5',
            type: 'choice',
            question: 'Amy says "I want a dress." What does she want?',
            answer: 'A dress.',
            hint: 'want a dress是什么',
            explanation: 'I want a dress.表示我想要一条连衣裙',
            options: [
              'A dress.',
              'A shirt.',
              'A jacket.',
              'A sweater.'
            ]
          },
          {
            id: 'e4u7l1q6',
            type: 'fill',
            question: 'A _____ is for boys and girls. (衬衫)',
            answer: 'shirt',
            hint: '衬衫的英文',
            explanation: 'shirt是衬衫，男女都可以穿'
          },
          {
            id: 'e4u7l1q7',
            type: 'fill',
            question: '冬天穿保暖的毛衣叫 _____。',
            answer: 'sweater',
            hint: '[服装词汇]（英语四年级-第7单元）',
            explanation: 'sweater是毛衣，冬天穿保暖'
          }
        ]
      },
      {
        id: 'e4u7l2',
        title: 'How much is/are...? 价格问答',
        order: 2,
        teachingMethod: '情境对话：模拟商店',
        iDo: '家长模拟商店问价格，示范How much is this dress? It\'s 50 yuan.',
        weDo: '亲子一起演商店买卖，问价格答价格',
        youDo: '孩子独立用How much问价格并回答',
        parentTips: '商店角色扮演：How much is this dress? It\'s 50 yuan.',
        funElement: '玩"跳蚤市场"游戏，标价买卖问价格',
        gsapAnimations: [
          'GSAP:商店场景构建-sceneBuild',
          'GSAP:价格高亮-highlight'
        ],
        images: [
          'IMG:模拟商店场景',
          'IMG:服装标价插图'
        ],
        content: [
          {
            type: 'text',
            content: '购物时要问价格。How much is...? 问单数物品价格（这个多少钱？），How much are...? 问复数物品价格。回答用It\'s/They\'re + 价格。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'How much is this dress? — 这条连衣裙多少钱？\nIt\'s 50 yuan. — 50元。\nHow much are these shoes? — 这双鞋多少钱？\nThey\'re 80 yuan. — 80元。',
            animationType: 'timeline',
            label: '价格问答'
          },
          {
            type: 'dialogue',
            content: 'Amy: How much is this dress?\nClerk: It\'s 50 yuan.\nAmy: How much are these shoes?\nClerk: They\'re 80 yuan.\nAmy: I\'ll take the dress!',
            animationType: 'timeline',
            label: '购物对话'
          },
          {
            type: 'tip',
            content: '单数物品用How much is...? 回答It\'s... 复数物品用How much are...? 回答They\'re... 价格单位用yuan（元）。',
            animationType: 'sequence',
            label: '单复区分'
          },
          {
            type: 'text',
            content: '数字表达价格：It\'s 25 yuan.（25元）It\'s 100 yuan.（100元）大数字会说吗？twenty-five, one hundred。来练习说价格吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '商店场景构建：衣架、标价牌、收银台、衣服出现',
            animationType: 'sceneBuild',
            animationConfig: {
              sceneType: 'sceneBuild',
              title: 'Clothes Shop',
              sceneBuildConfig: {
                sceneName: 'Shop',
                elements: [
                  {
                    id: 'el-0',
                    text: 'clothes',
                    emoji: '👗',
                    delay: 0,
                    animation: 'bounceIn',
                    ttsText: 'clothes'
                  },
                  {
                    id: 'el-1',
                    text: 'price tag',
                    emoji: '🏷️',
                    delay: 0.4,
                    animation: 'popIn',
                    ttsText: 'price tag'
                  },
                  {
                    id: 'el-2',
                    text: 'cashier',
                    emoji: '💵',
                    delay: 0.8,
                    animation: 'scaleIn',
                    ttsText: 'cashier'
                  },
                  {
                    id: 'el-3',
                    text: 'shopping bag',
                    emoji: '🛍️',
                    delay: 1.2,
                    animation: 'fadeIn',
                    ttsText: 'shopping bag'
                  }
                ]
              },
              ttsNarration: '商店场景：衣服、标价、收银、购物袋'
            }
          },
          {
            type: 'example',
            content: 'How much is...? It\'s ___ yuan.\nHow much are...? They\'re ___ yuan.\nyuan = 元（人民币单位）',
            animationType: 'cardReveal',
            label: '价格句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u7l2q1',
            type: 'choice',
            question: '"这件连衣裙多少钱"用英语怎么说？',
            answer: 'How much is this dress?',
            hint: '问单数价格怎么说',
            explanation: '问单数物品价格用How much is...?',
            options: [
              'How much is this dress?',
              'How much are this dress?',
              'What is this dress?',
              'Where is this dress?'
            ]
          },
          {
            id: 'e4u7l2q2',
            type: 'fill',
            question: '— How much is this dress? — _____ 50 yuan.',
            answer: 'It\'s',
            hint: '回答单数价格',
            explanation: '回答单数用It\'s + 价格，It\'s 50 yuan.表示50元'
          },
          {
            id: 'e4u7l2q3',
            type: 'choice',
            question: '— How much are these shoes? — _____',
            answer: 'They\'re 80 yuan.',
            hint: '回答复数价格',
            explanation: '回答复数用They\'re + 价格',
            options: [
              'They\'re 80 yuan.',
              'It\'s 80 yuan.',
              'This is 80 yuan.',
              'That is 80 yuan.'
            ]
          },
          {
            id: 'e4u7l2q4',
            type: 'fill',
            question: 'How much _____ these shoes? (是)',
            answer: 'are',
            hint: '复数用什么be动词',
            explanation: '复数用are，How much are these shoes?表示这双鞋多少钱'
          },
          {
            id: 'e4u7l2q5',
            type: 'choice',
            question: 'Amy asks the price of one shirt. She says?',
            answer: 'How much is this shirt?',
            hint: '问一件衬衫价格',
            explanation: '单数用How much is...? How much is this shirt?',
            options: [
              'How much is this shirt?',
              'How much are this shirt?',
              'How many is this shirt?',
              'What much this shirt?'
            ]
          },
          {
            id: 'e4u7l2q6',
            type: 'fill',
            question: '— How much is this jacket? — It\'s _____ yuan. (30)',
            answer: '30',
            hint: '30的英文',
            explanation: '30读作thirty，It\'s 30 yuan.表示30元'
          },
          {
            id: 'e4u7l2q7',
            type: 'choice',
            question: '"这双鞋多少钱"用英语怎么说？',
            answer: 'How much are these shoes?',
            hint: '[How much句型]（英语四年级-第7单元）',
            explanation: '复数用are，How much are these shoes?表示这双鞋多少钱',
            options: [
              'How much are these shoes?',
              'How much is these shoes?',
              'How many are these shoes?',
              'What are these shoes?'
            ]
          }
        ]
      },
      {
        id: 'e4u7l3',
        title: '数字表达——价格与找零',
        order: 3,
        teachingMethod: '数学+英语跨学科',
        iDo: '家长示范用英语说价格：It\'s 25 yuan. 边说边写数字',
        weDo: '亲子一起用英语说价格，练习1-100数字',
        youDo: '孩子独立用英语说价格和简单找零',
        parentTips: '英语说价格：It\'s 25 yuan. 练习1-100数字',
        funElement: '玩"收银员"游戏，说价格算找零',
        gsapAnimations: [
          'GSAP:价格数字滚动-numberCount',
          'GSAP:数字高亮-highlight'
        ],
        images: [
          'IMG:价格标签示意图',
          'IMG:收银找零插图'
        ],
        content: [
          {
            type: 'text',
            content: '用英语说价格：It\'s 25 yuan.（25元）数字要会说！1-10是基础，11-20，再到几十。twenty是20，thirty是30，fifty是50，one hundred是100。',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: '1-10: one two three four five six seven eight nine ten\n20: twenty  30: thirty  40: forty  50: fifty\n100: one hundred\nIt\'s 25 yuan. = It\'s twenty-five yuan.',
            animationType: 'cardReveal',
            label: '数字与价格'
          },
          {
            type: 'dialogue',
            content: 'Clerk: This shirt is 25 yuan.\nTom: How much is that jacket?\nClerk: It\'s 50 yuan.\nTom: OK, I\'ll take the shirt. Here\'s 30 yuan.\nClerk: Here\'s 5 yuan change.',
            animationType: 'timeline',
            label: '购物找零'
          },
          {
            type: 'tip',
            content: '21-99的数字表达：几十 + 几，中间加连字符。如25 = twenty-five，48 = forty-eight。100 = one hundred。',
            animationType: 'sequence',
            label: '数字规则'
          },
          {
            type: 'text',
            content: '找零用英语说：Here\'s 5 yuan change.（找你5元。）购物时算一算：给30元，买25元的东西，找回5元。练习用英语说价格和找零吧！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '价格数字从0滚动到25，配合物品出现',
            animationType: 'numberCount',
            animationConfig: {
              sceneType: 'numberCount',
              title: 'Price 25 Yuan',
              countConfig: {
                from: 0,
                to: 25,
                itemEmoji: '👕',
                direction: 'forward'
              },
              ttsNarration: '价格从零到二十五元'
            }
          },
          {
            type: 'example',
            content: 'How much is it? — 多少钱？\nIt\'s 25 yuan. — 25元。\nHere\'s 30 yuan. — 给你30元。\nHere\'s 5 yuan change. — 找你5元。',
            animationType: 'cardReveal',
            label: '购物用语'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u7l3q1',
            type: 'choice',
            question: '"25"用英语怎么说？',
            answer: 'twenty-five',
            hint: '25的英文',
            explanation: '25是twenty-five，几十加几中间加连字符',
            options: [
              'twenty-five',
              'twenty five',
              'two-five',
              'twenty-fifth'
            ]
          },
          {
            id: 'e4u7l3q2',
            type: 'fill',
            question: 'It\'s _____ yuan. (50元)',
            answer: 'fifty',
            hint: '50的英文',
            explanation: '50是fifty，注意不是fivety'
          },
          {
            id: 'e4u7l3q3',
            type: 'choice',
            question: '"100"用英语怎么说？',
            answer: 'one hundred',
            hint: '100的英文',
            explanation: '100是one hundred',
            options: [
              'one hundred',
              'ten ten',
              'hundred one',
              'one zero zero'
            ]
          },
          {
            id: 'e4u7l3q4',
            type: 'fill',
            question: '— How much is it? — It\'s _____ yuan. (30)',
            answer: 'thirty',
            hint: '30的英文',
            explanation: '30是thirty，It\'s thirty yuan.表示30元'
          },
          {
            id: 'e4u7l3q5',
            type: 'choice',
            question: 'Tom pays 30 yuan for a 25 yuan shirt. The change is?',
            answer: '5 yuan',
            hint: '找零多少',
            explanation: '30-25=5，找零5元，change是找零',
            options: [
              '5 yuan',
              '25 yuan',
              '30 yuan',
              '55 yuan'
            ]
          },
          {
            id: 'e4u7l3q6',
            type: 'fill',
            question: 'Here\'s 5 yuan _____. (找零)',
            answer: 'change',
            hint: '找零的英文',
            explanation: 'change是找零，Here\'s 5 yuan change.表示找你5元'
          },
          {
            id: 'e4u7l3q7',
            type: 'choice',
            question: '"50元"用英语怎么说？',
            answer: 'It\'s fifty yuan.',
            hint: '[价格表达]（英语四年级-第7单元）',
            explanation: '50是fifty，It\'s fifty yuan.表示50元',
            options: [
              'It\'s fifty yuan.',
              'It\'s fivety yuan.',
              'It\'s fifteen yuan.',
              'It\'s five yuan.'
            ]
          }
        ]
      },
      {
        id: 'e4u7l4',
        title: 'Can I help you? 购物对话',
        order: 4,
        teachingMethod: '角色扮演法',
        iDo: '家长示范完整购物对话：问候→选商品→问价格→购买',
        weDo: '亲子一起演购物对话，轮流当店员和顾客',
        youDo: '孩子独立完成完整购物对话',
        parentTips: '完整购物对话：问候→选商品→问价格→购买',
        funElement: '玩"模拟商店"游戏，完成一次完整购物',
        gsapAnimations: [
          'GSAP:购物对话步骤展开-timeline',
          'GSAP:步骤高亮-highlight'
        ],
        images: [
          'IMG:购物对话流程图',
          'IMG:商店购物插图'
        ],
        content: [
          {
            type: 'text',
            content: '完整的购物对话有四步：1.问候 Can I help you? 2.选商品 I want a... 3.问价格 How much is...? 4.购买 I\'ll take it. 跟着步骤来！',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'Step 1: Can I help you? — 需要帮忙吗？\nStep 2: I want a dress. — 我想要一条连衣裙。\nStep 3: How much is it? — 多少钱？\nStep 4: It\'s 50 yuan. I\'ll take it. — 50元，我买了。',
            animationType: 'timeline',
            label: '购物四步'
          },
          {
            type: 'dialogue',
            content: 'Clerk: Can I help you?\nAmy: Yes, I want a dress.\nClerk: This red dress is nice.\nAmy: How much is it?\nClerk: It\'s 50 yuan.\nAmy: I\'ll take it! Here you are.',
            animationType: 'timeline',
            label: '完整购物'
          },
          {
            type: 'tip',
            content: 'Can I help you? 是店员礼貌问候。I\'ll take it. 表示"我买了/我要了"。完整对话要按步骤，有礼貌。',
            animationType: 'sequence',
            label: '对话技巧'
          },
          {
            type: 'text',
            content: '购物时还可以说：I\'m just looking.（我只是看看。）Do you have...?（你们有……吗？）I like this one.（我喜欢这个。）学会这些，购物更顺畅！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '购物对话步骤展开，四步对话依次出现',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'Shopping Dialogue',
              timelineConfig: {
                steps: [
                  {
                    text: 'Can I help you?',
                    emoji: '🛒',
                    ttsNarration: 'Can I help you?'
                  },
                  {
                    text: 'I want a dress.',
                    emoji: '👗',
                    ttsNarration: 'I want a dress.'
                  },
                  {
                    text: 'How much is it?',
                    emoji: '💰',
                    ttsNarration: 'How much is it?'
                  },
                  {
                    text: 'I\'ll take it!',
                    emoji: '✅',
                    ttsNarration: 'I\'ll take it!'
                  }
                ]
              },
              ttsNarration: '购物对话四步骤'
            }
          },
          {
            type: 'example',
            content: 'Can I help you? — 需要帮忙吗？\nI\'ll take it. — 我买了。\nI\'m just looking. — 我只是看看。\nDo you have...? — 你们有……吗？',
            animationType: 'cardReveal',
            label: '购物用语'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u7l4q1',
            type: 'choice',
            question: '店员见顾客进来，礼貌问候应该说？',
            answer: 'Can I help you?',
            hint: '店员问候语',
            explanation: 'Can I help you?是店员礼貌问候，表示需要帮忙吗',
            options: [
              'Can I help you?',
              'How much is it?',
              'I\'ll take it.',
              'Where is it?'
            ]
          },
          {
            id: 'e4u7l4q2',
            type: 'fill',
            question: '— How much is it? — I\'ll _____ it. (买)',
            answer: 'take',
            hint: '我买了用什么',
            explanation: 'I\'ll take it.表示我买了/我要了'
          },
          {
            id: 'e4u7l4q3',
            type: 'choice',
            question: '"我买了"用英语怎么说？',
            answer: 'I\'ll take it.',
            hint: '表示购买',
            explanation: 'I\'ll take it.表示我买了，决定购买',
            options: [
              'I\'ll take it.',
              'I take it.',
              'I taking it.',
              'I taken it.'
            ]
          },
          {
            id: 'e4u7l4q4',
            type: 'fill',
            question: '— Can I help you? — I _____ a dress. (想要)',
            answer: 'want',
            hint: '想要什么动词',
            explanation: 'want是想要，I want a dress.表示我想要一条连衣裙'
          },
          {
            id: 'e4u7l4q5',
            type: 'choice',
            question: 'Which is the correct order of shopping?',
            answer: 'Greet, choose, ask price, buy',
            hint: '购物对话顺序',
            explanation: '购物顺序：问候→选商品→问价格→购买',
            options: [
              'Greet, choose, ask price, buy',
              'Ask price, greet, buy, choose',
              'Buy, ask price, greet, choose',
              'Choose, buy, greet, ask price'
            ]
          },
          {
            id: 'e4u7l4q6',
            type: 'fill',
            question: '— I\'m just _____. (看看)',
            answer: 'looking',
            hint: '只是看看怎么说',
            explanation: 'I\'m just looking.表示我只是看看，婉拒帮助'
          },
          {
            id: 'e4u7l4q7',
            type: 'choice',
            question: '"需要帮忙吗"店员礼貌问法是？',
            answer: 'Can I help you?',
            hint: '[购物对话]（英语四年级-第7单元）',
            explanation: 'Can I help you?是店员礼貌问候，表示需要帮忙吗',
            options: [
              'Can I help you?',
              'How much are you?',
              'What are you?',
              'Where are you?'
            ]
          }
        ]
      },
      {
        id: 'e4u7l5',
        title: '第七单元综合检测',
        order: 5,
        teachingMethod: '形成性评价法',
        iDo: '家长引导回顾服装价格和购物对话，示范检测题',
        weDo: '亲子一起做练习，互相检查讨论',
        youDo: '孩子独立完成检测，检验服装价格和购物对话',
        parentTips: '服装+价格+对话综合，正确率80%可获三星',
        funElement: '通关获得"Shopping达人"徽章，撒花庆祝',
        gsapAnimations: [
          'GSAP:通关撒花-confetti',
          'GSAP:星星飞入-starFlyIn'
        ],
        images: [
          'IMG:Shopping达人徽章',
          'IMG:单元回顾插图'
        ],
        content: [
          {
            type: 'text',
            content: '回顾Shopping单元！服装dress/shirt/jacket/sweater，价格How much is/are...?，数字1-100，购物对话Can I help you? I\'ll take it.',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'dress连衣裙 shirt衬衫 jacket夹克 sweater毛衣\nHow much is/are...? It\'s/They\'re ___ yuan.\nCan I help you? I\'ll take it.\n20twenty 30thirty 50fifty 100one hundred',
            animationType: 'cardReveal',
            label: '单元知识树'
          },
          {
            type: 'dialogue',
            content: 'Clerk: Can I help you?\nAmy: I want a dress.\nClerk: How about this one?\nAmy: How much is it?\nClerk: It\'s 50 yuan.\nAmy: I\'ll take it!',
            animationType: 'timeline',
            label: '综合对话'
          },
          {
            type: 'tip',
            content: '答题要点：单数How much is回答It\'s，复数How much are回答They\'re，数字注意拼写，购物用语要礼貌。',
            animationType: 'sequence',
            label: '答题技巧'
          },
          {
            type: 'text',
            content: '7道题检验你的学习成果！基础、提高、挑战加回溯，全部通关就是Shopping达人！加油！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '回顾卡片翻转，揭示本单元知识点',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Unit 7 Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Clothes',
                    back: '👗',
                    ttsText: 'dress shirt jacket sweater'
                  },
                  {
                    front: 'Price',
                    back: '💰',
                    ttsText: 'How much is it? It\'s 50 yuan.'
                  },
                  {
                    front: 'Numbers',
                    back: '🔢',
                    ttsText: 'twenty thirty fifty one hundred'
                  },
                  {
                    front: 'Shopping',
                    back: '🛒',
                    ttsText: 'Can I help you? I\'ll take it.'
                  }
                ]
              },
              ttsNarration: '第七单元回顾：服装、价格、数字、对话'
            }
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u7l5q1',
            type: 'choice',
            question: '"毛衣"用英语怎么说？',
            answer: 'sweater',
            hint: '毛衣的英文',
            explanation: 'sweater是毛衣，冬天穿保暖',
            options: [
              'dress',
              'shirt',
              'jacket',
              'sweater'
            ]
          },
          {
            id: 'e4u7l5q2',
            type: 'fill',
            question: '— How much is this dress? — _____ 50 yuan.',
            answer: 'It\'s',
            hint: '回答单数价格',
            explanation: '回答单数用It\'s + 价格'
          },
          {
            id: 'e4u7l5q3',
            type: 'choice',
            question: '— Can I help you? — _____',
            answer: 'I want a shirt.',
            hint: '回应店员问候',
            explanation: '回应Can I help you?说自己想要什么',
            options: [
              'I want a shirt.',
              'How much is it?',
              'I\'ll take it.',
              'It\'s 50 yuan.'
            ]
          },
          {
            id: 'e4u7l5q4',
            type: 'fill',
            question: '30的英文是 _____。',
            answer: 'thirty',
            hint: '30的英文',
            explanation: '30是thirty，注意拼写'
          },
          {
            id: 'e4u7l5q5',
            type: 'choice',
            question: '"我买了"用英语怎么说？',
            answer: 'I\'ll take it.',
            hint: '表示购买',
            explanation: 'I\'ll take it.表示我买了，决定购买',
            options: [
              'I\'ll take it.',
              'I take.',
              'I buy it now.',
              'Take it me.'
            ]
          },
          {
            id: 'e4u7l5q6',
            type: 'fill',
            question: 'How much _____ these shoes? (是)',
            answer: 'are',
            hint: '复数用什么be动词',
            explanation: '复数用are，How much are these shoes?'
          },
          {
            id: 'e4u7l5q7',
            type: 'choice',
            question: '"这件夹克多少钱"用英语怎么说？',
            answer: 'How much is this jacket?',
            hint: '[How much句型]（英语四年级-第7单元）',
            explanation: '单数用How much is...? How much is this jacket?',
            options: [
              'How much is this jacket?',
              'How much are this jacket?',
              'How many is this jacket?',
              'What is jacket?'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'e4u8',
    title: '四年级英语综合测评',
    subtitle: '学期综合复习与测评',
    order: 8,
    lessons: [
      {
        id: 'e4u8l1',
        title: '词汇总复习',
        order: 1,
        teachingMethod: '间隔重复法',
        iDo: '家长用词汇闪卡带复习，7个单元核心词汇综合回顾',
        weDo: '亲子一起做词汇接龙，互相考单词',
        youDo: '孩子独立完成词汇测试，检验学期词汇掌握',
        parentTips: '7个单元核心词汇综合复习，制作词汇卡',
        funElement: '玩"词汇大闯关"，分类说出7个单元的词汇',
        gsapAnimations: [
          'GSAP:词汇卡片依次出现-stagger',
          'GSAP:词汇高亮-highlight'
        ],
        images: [
          'IMG:词汇王国总览图',
          'IMG:词汇分类图'
        ],
        content: [
          {
            type: 'text',
            content: '学期词汇总复习！我们学了7个单元的词汇：教室物品、学习用品、外貌性格、农场动物蔬菜、食物、家庭职业、服装。一起来回顾吧！',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'U1: door window board picture\nU2: book ruler eraser pencil\nU3: tall short thin strong friendly quiet funny\nU4: cow sheep horse goat tomato potato carrot onion\nU5: rice beef fish noodles\nU6: father mother uncle aunt doctor teacher driver nurse\nU7: dress shirt jacket sweater',
            animationType: 'cardReveal',
            label: '七单元词汇总览'
          },
          {
            type: 'dialogue',
            content: 'Teacher: Let\'s review! What\'s this? (shows a pencil)\nAmy: It\'s a pencil.\nTeacher: What are these? (shows tomatoes)\nTom: They are tomatoes!',
            animationType: 'timeline',
            label: '词汇复习'
          },
          {
            type: 'tip',
            content: '分类记忆更高效：物品类、动物类、食物类、人物类、服装类。把词汇分门别类，复习更轻松！',
            animationType: 'sequence',
            label: '复习方法'
          },
          {
            type: 'text',
            content: '词汇复习小游戏：家长说中文，孩子说英文；家长说英文，孩子说中文。比一比谁反应快！记住多读多说是关键。',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '七单元词汇卡片翻转，分类揭示核心词汇',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Vocabulary Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Classroom',
                    back: '🏫',
                    ttsText: 'door window board picture'
                  },
                  {
                    front: 'Farm',
                    back: '🐮',
                    ttsText: 'cow sheep tomato carrot'
                  },
                  {
                    front: 'Food & Family',
                    back: '🍚',
                    ttsText: 'rice beef father doctor'
                  }
                ]
              },
              ttsNarration: '词汇总复习：分类回顾七单元词汇'
            }
          },
          {
            type: 'example',
            content: '物品: door book pencil jacket\n动物: cow sheep horse goat\n食物: rice beef fish noodles\n人物: father doctor teacher nurse',
            animationType: 'cardReveal',
            label: '词汇分类'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u8l1q1',
            type: 'choice',
            question: '"窗户"用英语怎么说？',
            answer: 'window',
            hint: '教室物品',
            explanation: 'window是窗户，教室物品词汇',
            options: [
              'door',
              'window',
              'board',
              'picture'
            ]
          },
          {
            id: 'e4u8l1q2',
            type: 'fill',
            question: 'A _____ is an animal on the farm. (奶牛)',
            answer: 'cow',
            hint: '农场动物',
            explanation: 'cow是奶牛，农场动物词汇'
          },
          {
            id: 'e4u8l1q3',
            type: 'choice',
            question: 'Which word is a kind of food?',
            answer: 'rice',
            hint: '哪个是食物',
            explanation: 'rice是米饭，属于食物类词汇',
            options: [
              'rice',
              'door',
              'father',
              'dress'
            ]
          },
          {
            id: 'e4u8l1q4',
            type: 'fill',
            question: 'My _____ teaches English. (老师)',
            answer: 'teacher',
            hint: '职业词汇',
            explanation: 'teacher是老师，职业词汇'
          },
          {
            id: 'e4u8l1q5',
            type: 'choice',
            question: 'Which group are all clothes (服装)?',
            answer: 'dress, shirt, jacket, sweater',
            hint: '哪组都是服装',
            explanation: 'dress衬衫shirt夹克jacket毛衣sweater都是服装',
            options: [
              'dress, shirt, jacket, sweater',
              'cow, sheep, horse, goat',
              'rice, beef, fish, noodles',
              'door, window, board, picture'
            ]
          },
          {
            id: 'e4u8l1q6',
            type: 'fill',
            question: 'The _____ is orange and long. (胡萝卜)',
            answer: 'carrot',
            hint: '蔬菜词汇',
            explanation: 'carrot是胡萝卜，蔬菜词汇'
          },
          {
            id: 'e4u8l1q7',
            type: 'choice',
            question: '"友好的"用英语怎么说？',
            answer: 'friendly',
            hint: '[性格词汇]（英语四年级-第3单元）',
            explanation: 'friendly是友善的，性格词汇，回顾第三单元',
            options: [
              'friendly',
              'quiet',
              'tall',
              'strong'
            ]
          }
        ]
      },
      {
        id: 'e4u8l2',
        title: '句型总复习',
        order: 2,
        teachingMethod: '间隔重复法',
        iDo: '家长用句型闪卡带复习，核心句型综合回顾',
        weDo: '亲子一起做句型配对，问答练习',
        youDo: '孩子独立完成句型测试，检验学期句型掌握',
        parentTips: 'Where is...? / What would you like? / How much...? 综合复习',
        funElement: '玩"句型转盘"，转到哪个句型就造句',
        gsapAnimations: [
          'GSAP:句型配对成功-compare',
          'GSAP:句型高亮-highlight'
        ],
        images: [
          'IMG:句型配对游戏',
          'IMG:核心句型图'
        ],
        content: [
          {
            type: 'text',
            content: '学期句型总复习！核心句型：Where is...? It\'s on/in/under... / What\'s in...? / Are these/those...? / What would you like? I\'d like... / How many...? / How much is...? It\'s... yuan.',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'Where is the book? — It\'s on the desk.\nWhat\'s in your schoolbag? — A book and a pencil.\nAre these cows? — Yes, they are.\nWhat would you like? — I\'d like some rice.\nHow many people? — There are four.\nHow much is it? — It\'s 50 yuan.',
            animationType: 'timeline',
            label: '核心句型总览'
          },
          {
            type: 'dialogue',
            content: 'Teacher: Where is the book?\nAmy: It\'s on the desk.\nTeacher: What would you like?\nTom: I\'d like some rice and fish.\nTeacher: How much is this dress?\nLily: It\'s 50 yuan.',
            animationType: 'timeline',
            label: '句型复习'
          },
          {
            type: 'tip',
            content: '句型配对要分清：Where问位置，What问物品/想要什么，How many问数量，How much问价格。看清疑问词再回答！',
            animationType: 'sequence',
            label: '句型辨析'
          },
          {
            type: 'text',
            content: '句型复习法：把疑问词和回答对应起来。Where→位置，What→物品，How many→数字，How much→价格。多练多说是关键！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '核心句型两组对比展示：疑问词 vs 回答方式',
            animationType: 'compare',
            animationConfig: {
              sceneType: 'compare',
              title: 'Sentence Patterns',
              compareConfig: {
                leftItems: [
                  'Where',
                  'What',
                  'How many',
                  'How much'
                ],
                rightItems: [
                  '位置',
                  '物品',
                  '数量',
                  '价格'
                ],
                result: 'close',
                resultText: 'match questions with answer types'
              },
              ttsNarration: '句型配对：疑问词对应回答方式'
            }
          },
          {
            type: 'example',
            content: 'Where→位置  What→物品/喜好\nHow many→数量  How much→价格\nAre these/those?→Yes/No, they are/aren\'t',
            animationType: 'cardReveal',
            label: '句型对应'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u8l2q1',
            type: 'choice',
            question: '问位置用哪个疑问词？',
            answer: 'Where',
            hint: '问位置用什么',
            explanation: 'Where问位置，Where is...?问物品在哪里',
            options: [
              'Where',
              'What',
              'How many',
              'How much'
            ]
          },
          {
            id: 'e4u8l2q2',
            type: 'fill',
            question: '— What would you like? — _____ like some rice.',
            answer: 'I\'d',
            hint: '点餐句型',
            explanation: '回答用I\'d like...，I\'d = I would'
          },
          {
            id: 'e4u8l2q3',
            type: 'choice',
            question: '问价格用哪个疑问词？',
            answer: 'How much',
            hint: '问价格用什么',
            explanation: 'How much问价格，How much is...?问多少钱',
            options: [
              'Where',
              'What',
              'How many',
              'How much'
            ]
          },
          {
            id: 'e4u8l2q4',
            type: 'fill',
            question: '— _____ are these? — They are tomatoes.',
            answer: 'What',
            hint: '问物品用什么',
            explanation: '问物品用What are these?表示这些是什么'
          },
          {
            id: 'e4u8l2q5',
            type: 'choice',
            question: '— How many people in your family? — _____',
            answer: 'There are four people.',
            hint: '回答人数',
            explanation: '回答人数用There are + 数字 + people',
            options: [
              'There are four people.',
              'It\'s four yuan.',
              'I\'d like four.',
              'They are four.'
            ]
          },
          {
            id: 'e4u8l2q6',
            type: 'fill',
            question: '— Are those sheep? — No, they _____.',
            answer: 'aren\'t',
            hint: '否定回答',
            explanation: '否定回答用No, they aren\'t.'
          },
          {
            id: 'e4u8l2q7',
            type: 'choice',
            question: '"这个多少钱"用英语怎么说？',
            answer: 'How much is this?',
            hint: '[How much句型]（英语四年级-第7单元）',
            explanation: '问价格用How much is...? How much is this?',
            options: [
              'How much is this?',
              'How many is this?',
              'What is this?',
              'Where is this?'
            ]
          }
        ]
      },
      {
        id: 'e4u8l3',
        title: '阅读理解总复习',
        order: 3,
        teachingMethod: '图文结合法',
        iDo: '家长带孩子读短文，圈关键词，再答题',
        weDo: '亲子一起读英语小短文，互相提问',
        youDo: '孩子独立读短文并回答问题，检验阅读理解',
        parentTips: '读英语小短文，圈关键词，回答问题',
        funElement: '玩"阅读侦探"，在短文里找线索答题',
        gsapAnimations: [
          'GSAP:阅读关键词高亮-highlight',
          'GSAP:阅读理解反馈-confetti'
        ],
        images: [
          'IMG:英语小短文插图',
          'IMG:阅读理解题图'
        ],
        content: [
          {
            type: 'text',
            content: '阅读理解复习！读英语小短文，先通读一遍了解大意，再带着问题找答案。圈出关键词，答案就在短文里！',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: '短文：My name is Tom. I am nine. I have a friend. She is Amy. She is tall and thin. She is a student. Her mother is a teacher.',
            animationType: 'timeline',
            label: '阅读短文'
          },
          {
            type: 'dialogue',
            content: 'Question 1: How old is Tom?\nAnswer: He is nine.\nQuestion 2: What does Amy look like?\nAnswer: She is tall and thin.\nQuestion 3: What does Amy\'s mother do?\nAnswer: She is a teacher.',
            animationType: 'timeline',
            label: '阅读问答'
          },
          {
            type: 'tip',
            content: '阅读技巧：先读问题，再带着问题读短文，找到关键词所在的句子，答案就在附近。圈出来更清楚！',
            animationType: 'sequence',
            label: '阅读技巧'
          },
          {
            type: 'text',
            content: '阅读时要看清人名、数字、职业、外貌等关键词。如Tom is nine.（年龄）Amy is tall and thin.（外貌）mother is a teacher.（职业）找到这些就能答题！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '短文关键词高亮，逐句揭示理解要点',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'Reading Comprehension',
              timelineConfig: {
                steps: [
                  {
                    text: 'My name is Tom. I am nine.',
                    emoji: '👦',
                    ttsNarration: 'My name is Tom. I am nine.'
                  },
                  {
                    text: 'Amy is tall and thin.',
                    emoji: '👧',
                    ttsNarration: 'Amy is tall and thin.'
                  },
                  {
                    text: 'Her mother is a teacher.',
                    emoji: '👩‍🏫',
                    ttsNarration: 'Her mother is a teacher.'
                  }
                ]
              },
              ttsNarration: '阅读理解：圈关键词找答案'
            }
          },
          {
            type: 'example',
            content: '关键词：name名字 age年龄 look外貌 job职业\nWho/What/How old/How many — 找对应信息',
            animationType: 'cardReveal',
            label: '阅读策略'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u8l3q1',
            type: 'choice',
            question: 'Read: "Tom is nine." How old is Tom?',
            answer: 'Nine',
            hint: 'Tom几岁',
            explanation: '短文说Tom is nine，所以他9岁',
            options: [
              'Nine',
              'Eight',
              'Ten',
              'Seven'
            ]
          },
          {
            id: 'e4u8l3q2',
            type: 'fill',
            question: 'Read: \'Amy is tall and thin.\' Amy is _____ and thin.',
            answer: 'tall',
            hint: 'Amy外貌',
            explanation: '短文说Amy is tall and thin，所以她高'
          },
          {
            id: 'e4u8l3q3',
            type: 'choice',
            question: 'Read: "Her mother is a teacher." What does her mother do?',
            answer: 'A teacher',
            hint: '妈妈职业',
            explanation: '短文说her mother is a teacher，妈妈是老师',
            options: [
              'A teacher',
              'A doctor',
              'A driver',
              'A nurse'
            ]
          },
          {
            id: 'e4u8l3q4',
            type: 'fill',
            question: 'Read: \'I have a friend. She is Amy.\' Tom\'s friend is _____.',
            answer: 'Amy',
            hint: 'Tom朋友',
            explanation: '短文说Tom的friend是Amy'
          },
          {
            id: 'e4u8l3q5',
            type: 'choice',
            question: 'Read: "She is a student." Who is a student?',
            answer: 'Amy',
            hint: '谁是学生',
            explanation: '短文说She(Amy) is a student，Amy是学生',
            options: [
              'Amy',
              'Tom',
              'Mother',
              'Teacher'
            ]
          },
          {
            id: 'e4u8l3q6',
            type: 'fill',
            question: 'Read: \'Tom is nine.\' Tom is _____ years old.',
            answer: 'nine',
            hint: 'Tom年龄',
            explanation: '短文说Tom is nine，他9岁'
          },
          {
            id: 'e4u8l3q7',
            type: 'choice',
            question: '阅读理解第一步应该做什么？',
            answer: '先读问题再读短文',
            hint: '[阅读策略]（英语四年级-第8单元）',
            explanation: '阅读理解先读问题，再带着问题读短文找答案',
            options: [
              '先读问题再读短文',
              '先看图不读字',
              '直接猜答案',
              '只读第一句'
            ]
          }
        ]
      },
      {
        id: 'e4u8l4',
        title: '对话与表达总复习',
        order: 4,
        teachingMethod: '情境综合法',
        iDo: '家长模拟综合场景，带孩子完成多个情境对话',
        weDo: '亲子一起演综合情境对话，角色互换',
        youDo: '孩子独立完成综合情境对话，检验口语表达',
        parentTips: '综合情境对话：购物/用餐/介绍家人/参观农场',
        funElement: '玩"情景大转盘"，转到场景就演对话',
        gsapAnimations: [
          'GSAP:综合对话气泡展开-timeline',
          'GSAP:对话高亮-highlight'
        ],
        images: [
          'IMG:综合场景插图',
          'IMG:口语表达图'
        ],
        content: [
          {
            type: 'text',
            content: '对话与表达总复习！四个综合情境：1.购物 How much is...? 2.用餐 What would you like? 3.介绍家人 This is my... 4.参观农场 Are these/those...? 一起来演！',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: 'Shopping: Can I help you? — I want a dress. — How much is it? — It\'s 50 yuan. — I\'ll take it.\nDinner: What would you like? — I\'d like some rice. — Help yourself!\nFamily: This is my father. He is a doctor.\nFarm: Are these cows? — Yes, they are.',
            animationType: 'timeline',
            label: '四情境对话'
          },
          {
            type: 'dialogue',
            content: 'Clerk: Can I help you?\nAmy: I\'d like a dress. How much is it?\nClerk: It\'s 50 yuan.\nAmy: I\'ll take it. Here\'s 50 yuan.\nClerk: Thank you! Here\'s your dress.',
            animationType: 'timeline',
            label: '购物对话'
          },
          {
            type: 'tip',
            content: '对话表达要连贯：问候→需求→询问→回应。注意礼貌用语please和thank you，让对话更自然流畅！',
            animationType: 'sequence',
            label: '表达技巧'
          },
          {
            type: 'text',
            content: '口语表达要点：声音响亮、发音清楚、面带微笑。说错了不要怕，大胆说出来最重要！多练多说，英语越来越棒！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '综合对话气泡展开，四个情境对话依次出现',
            animationType: 'timeline',
            animationConfig: {
              sceneType: 'timeline',
              title: 'Dialogues Review',
              timelineConfig: {
                steps: [
                  {
                    text: 'Shopping: How much is it?',
                    emoji: '🛒',
                    ttsNarration: 'Shopping: How much is it?'
                  },
                  {
                    text: 'Dinner: I\'d like some rice.',
                    emoji: '🍚',
                    ttsNarration: 'Dinner: I\'d like some rice.'
                  },
                  {
                    text: 'Family: He is a doctor.',
                    emoji: '👨‍⚕️',
                    ttsNarration: 'Family: He is a doctor.'
                  },
                  {
                    text: 'Farm: Yes, they are.',
                    emoji: '🐮',
                    ttsNarration: 'Farm: Yes, they are.'
                  }
                ]
              },
              ttsNarration: '四情境对话总复习'
            }
          },
          {
            type: 'example',
            content: '购物: Can I help you? I\'ll take it.\n用餐: What would you like? Help yourself.\n家人: This is my... He/She is a...\n农场: Are these/those...? Yes, they are.',
            animationType: 'cardReveal',
            label: '情境句型'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u8l4q1',
            type: 'choice',
            question: '购物时顾客想买连衣裙，应该说？',
            answer: 'I want a dress.',
            hint: '买连衣裙怎么说',
            explanation: '顾客表达需求用I want a dress.表示我想要一条连衣裙',
            options: [
              'I want a dress.',
              'How much is it?',
              'Can I help you?',
              'I\'ll take it.'
            ]
          },
          {
            id: 'e4u8l4q2',
            type: 'fill',
            question: '用餐时说 I\'d _____ some rice, please.',
            answer: 'like',
            hint: '点餐表达',
            explanation: 'I\'d like some rice.表示我想要一些米饭'
          },
          {
            id: 'e4u8l4q3',
            type: 'choice',
            question: '介绍爸爸是医生，应该说？',
            answer: 'This is my father. He is a doctor.',
            hint: '介绍爸爸医生',
            explanation: '介绍用This is my... He is a...',
            options: [
              'This is my father. He is a doctor.',
              'This is my father. She is a doctor.',
              'He is a doctor. This is father.',
              'My father doctor is.'
            ]
          },
          {
            id: 'e4u8l4q4',
            type: 'fill',
            question: '— Are those cows? — Yes, _____ are.',
            answer: 'they',
            hint: '复数肯定回答',
            explanation: '复数肯定回答用Yes, they are.'
          },
          {
            id: 'e4u8l4q5',
            type: 'choice',
            question: '店员问"Can I help you?"顾客礼貌回应？',
            answer: 'Yes, I want a dress.',
            hint: '回应店员',
            explanation: '回应Can I help you?表达需求Yes, I want...',
            options: [
              'Yes, I want a dress.',
              'How old are you?',
              'Where is it?',
              'I am fine.'
            ]
          },
          {
            id: 'e4u8l4q6',
            type: 'fill',
            question: '用餐时主人说 _____ yourself! (请随便吃)',
            answer: 'Help',
            hint: '请自便用语',
            explanation: 'Help yourself!表示请随便吃'
          },
          {
            id: 'e4u8l4q7',
            type: 'choice',
            question: '"我买了"购物用语是？',
            answer: 'I\'ll take it.',
            hint: '[购物对话]（英语四年级-第7单元）',
            explanation: 'I\'ll take it.表示我买了，回顾第七单元购物对话',
            options: [
              'I\'ll take it.',
              'I help you.',
              'How much?',
              'Here you are.'
            ]
          }
        ]
      },
      {
        id: 'e4u8l5',
        title: '学期综合测评',
        order: 5,
        teachingMethod: '总结性评价法',
        iDo: '家长说明测评规则，孩子独立完成学期综合测评',
        weDo: '亲子一起分析测评结果，查漏补缺',
        youDo: '孩子独立完成学期综合测评，检验学期整体掌握',
        parentTips: '学期综合测评：词汇+句型+阅读+对话，全部综合',
        funElement: '通关获得"四年级英语之星"勋章，星星飞入庆祝',
        gsapAnimations: [
          'GSAP:星星飞入-starFlyIn',
          'GSAP:通关撒花-confetti'
        ],
        images: [
          'IMG:四年级英语之星勋章',
          'IMG:学期总结图'
        ],
        content: [
          {
            type: 'text',
            content: '学期综合测评！这是本学期最后一关，综合考查词汇、句型、阅读和对话。认真审题，仔细作答，展现你的实力！',
            animationType: 'sequence'
          },
          {
            type: 'example',
            content: '词汇: door cow rice dress teacher...\n句型: Where/What/How many/How much...?\n阅读: 找关键词答题\n对话: 购物/用餐/家人/农场',
            animationType: 'cardReveal',
            label: '学期知识图谱'
          },
          {
            type: 'dialogue',
            content: 'Teacher: Are you ready for the final test?\nStudents: Yes!\nTeacher: Read carefully and do your best!\nStudents: We will!',
            animationType: 'timeline',
            label: '测评动员'
          },
          {
            type: 'tip',
            content: '综合测评要点：仔细读题，选择题看清选项，填空题注意拼写和大小写，阅读题回原文找答案，做完认真检查。',
            animationType: 'sequence',
            label: '测评策略'
          },
          {
            type: 'text',
            content: '经过一学期的学习，你掌握了教室、文具、朋友、农场、食物、家庭、购物7大主题。完成综合测评，你就是四年级英语之星！加油！',
            animationType: 'sequence'
          },
          {
            type: 'animation',
            content: '学期知识图谱卡片翻转，综合回顾四大板块',
            animationType: 'cardReveal',
            animationConfig: {
              sceneType: 'cardReveal',
              title: 'Final Review',
              cardRevealConfig: {
                cards: [
                  {
                    front: 'Vocabulary',
                    back: '📚',
                    ttsText: '7 units words'
                  },
                  {
                    front: 'Sentences',
                    back: '💬',
                    ttsText: 'Where What How much'
                  },
                  {
                    front: 'Reading',
                    back: '📖',
                    ttsText: 'Find key words'
                  },
                  {
                    front: 'Dialogue',
                    back: '🎭',
                    ttsText: 'Shopping Dinner Family Farm'
                  }
                ]
              },
              ttsNarration: '学期综合回顾：词汇、句型、阅读、对话'
            }
          },
          {
            type: 'example',
            content: '仔细读题  认真作答\n检查拼写  回找答案\n完成测评  你最棒！',
            animationType: 'cardReveal',
            label: '测评口诀'
          }
        ],
        practiceQuestions: [
          {
            id: 'e4u8l5q1',
            type: 'choice',
            question: '"教室的窗"用英语怎么说？',
            answer: 'window',
            hint: '教室物品',
            explanation: 'window是窗户，教室物品词汇',
            options: [
              'door',
              'window',
              'board',
              'picture'
            ]
          },
          {
            id: 'e4u8l5q2',
            type: 'fill',
            question: '— Where is the book? — _____ on the desk.',
            answer: 'It\'s',
            hint: '问位置回答',
            explanation: '问Where用It\'s + 介词 + 地点回答'
          },
          {
            id: 'e4u8l5q3',
            type: 'choice',
            question: '— What would you like? — _____',
            answer: 'I\'d like some rice.',
            hint: '点餐回答',
            explanation: '回答用I\'d like...',
            options: [
              'I\'d like some rice.',
              'It\'s on the desk.',
              'Yes, they are.',
              'It\'s 50 yuan.'
            ]
          },
          {
            id: 'e4u8l5q4',
            type: 'fill',
            question: '— How much is this dress? — It\'s _____ yuan. (50)',
            answer: 'fifty',
            hint: '价格数字',
            explanation: '50是fifty，It\'s fifty yuan.表示50元'
          },
          {
            id: 'e4u8l5q5',
            type: 'choice',
            question: 'Read: "She is tall and thin." What is she like?',
            answer: '又高又瘦',
            hint: '阅读理解',
            explanation: 'tall高 thin瘦，tall and thin表示又高又瘦',
            options: [
              '又高又瘦',
              '又矮又壮',
              '又胖又矮',
              '又壮又瘦'
            ]
          },
          {
            id: 'e4u8l5q6',
            type: 'fill',
            question: 'This is my father. _____ is a doctor.',
            answer: 'He',
            hint: '介绍男性职业',
            explanation: '介绍男性用He，He is a doctor.表示他是一名医生'
          },
          {
            id: 'e4u8l5q7',
            type: 'choice',
            question: '"这些是西红柿吗"用英语怎么说？',
            answer: 'Are these tomatoes?',
            hint: '[Are these/those句型]（英语四年级-第4单元）',
            explanation: '复数疑问用Are these/those...? Are these tomatoes?',
            options: [
              'Are these tomatoes?',
              'Is this tomato?',
              'What are these?',
              'Are those rice?'
            ]
          }
        ]
      }
    ]
  }
]
