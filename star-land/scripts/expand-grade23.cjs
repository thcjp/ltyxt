/**
 * 通用英语课程数据扩充脚本
 * 为grade2和grade3生成扩充数据
 * 策略：基于模板+单元知识自动生成题目
 */
const fs = require('fs');
const path = require('path');

// ========== 二年级单元知识 ==========
const grade2Units = [
  { id: 'e2u1', title: 'My Day', reviewTitle: 'My Day Review', lifeTitle: 'My Day in Life',
    keywords: ['wake up', 'brush my teeth', 'eat breakfast', 'go to school', 'read books', 'play with friends', 'eat dinner', 'take a bath', 'go to bed'],
    reviewContent: '回顾My Day单元！我们学了早晨日常wake up/brush teeth/eat breakfast、学校生活go to school/read books/play、晚间日常eat dinner/take a bath/go to bed',
    formulaContent: '日常活动公式：\nI + 动词 + 宾语 → I brush my teeth.\nI + 动词 + 介词 + 名词 → I go to school.\n频率词：every day每天',
    lifeContent: '日常活动在生活中无处不在！从早到晚，我们做的每件事都可以用英语说出来',
    lifeExample: '场景1：早晨 → I wake up. I brush my teeth. I eat breakfast.\n场景2：学校 → I go to school. I read books.\n场景3：晚上 → I eat dinner. I take a bath. I go to bed.' },
  { id: 'e2u2', title: 'Weather', reviewTitle: 'Weather Review', lifeTitle: 'Weather in Life',
    keywords: ["It's sunny", "It's rainy", "It's cloudy", "It's snowy", "It's windy", 'Spring', 'Summer', 'Autumn', 'Winter', 'Coat', 'T-shirt', 'Raincoat'],
    reviewContent: '回顾Weather单元！我们学了天气词汇sunny/rainy/cloudy/snowy/windy、四季Spring/Summer/Autumn/Winter、穿衣搭配coat/T-shirt/raincoat',
    formulaContent: '天气表达公式：\nIt\'s + 天气形容词 → It\'s sunny!\nWhat\'s the weather like? → 问天气\nI wear + 服装 → I wear a coat.',
    lifeContent: '天气影响我们的日常生活！出门前看天气，决定穿什么衣服，做什么活动',
    lifeExample: '场景1：看天气 → What\'s the weather like? It\'s sunny!\n场景2：选衣服 → It\'s cold. I wear a coat.\n场景3：选活动 → It\'s rainy. Let\'s stay home.' },
  { id: 'e2u3', title: 'Places', reviewTitle: 'Places Review', lifeTitle: 'Places in Life',
    keywords: ['Bedroom', 'Kitchen', 'Bathroom', 'Living room', 'Park', 'Supermarket', 'buy', 'shopping list'],
    reviewContent: '回顾Places单元！我们学了房间Bedroom/Kitchen/Bathroom/Living room、公园Park、超市Supermarket',
    formulaContent: '场所表达公式：\nroom结尾的房间：bed+room, bath+room\nI go to + 场所 → I go to the supermarket.\nI buy + 物品 → I buy apples.',
    lifeContent: '场所是我们生活的空间！家里的每个房间、社区的公园和超市，都可以用英语描述',
    lifeExample: '场景1：介绍房间 → This is my bedroom.\n场景2：去公园 → I play on the swing in the park.\n场景3：逛超市 → I buy milk at the supermarket.' },
  { id: 'e2u4', title: 'Actions', reviewTitle: 'Actions Review', lifeTitle: 'Actions in Life',
    keywords: ['Run', 'Walk', 'Jump', 'Swim', 'Dance', 'Sing', 'can', "can't", 'am running', 'is dancing', 'are playing'],
    reviewContent: '回顾Actions单元！我们学了动词Run/Walk/Jump/Swim/Dance、can/can\'t表达、现在进行时am/is/are+doing',
    formulaContent: '动作表达公式：\nI can + 动词原形 → I can swim.\nI can\'t + 动词原形 → I can\'t fly.\n现在进行时：I am + 动词ing → I am running.',
    lifeContent: '动作是生活的基础！运动、玩耍、做家务……每个动作都可以用英语表达',
    lifeExample: '场景1：运动 → I can run! I can jump!\n场景2：描述正在做 → I am reading a book.\n场景3：能力表达 → I can swim. But I can\'t fly!' },
  { id: 'e2u5', title: 'Clothes', reviewTitle: 'Clothes Review', lifeTitle: 'Clothes in Life',
    keywords: ['Shirt', 'Skirt', 'Dress', 'Pants', 'Hat', 'Shoes', 'Put on', 'Take off', 'Can I help you', 'How much'],
    reviewContent: '回顾Clothes单元！我们学了服装Shirt/Skirt/Dress/Pants/Hat/Shoes、穿脱Put on/Take off、购物对话Can I help you/How much',
    formulaContent: '服装表达公式：\nPut on + 服装 → Put on your coat.\nTake off + 服装 → Take off your shoes.\n购物：Can I help you? → I want a...',
    lifeContent: '衣服是生活的必需品！每天穿脱衣服、买衣服、搭配衣服，都可以用英语表达',
    lifeExample: '场景1：穿衣服 → Put on your coat. It\'s cold!\n场景2：脱衣服 → Take off your shoes before you come in.\n场景3：买衣服 → Can I help you? I want a skirt.' },
  { id: 'e2u6', title: 'Transport', reviewTitle: 'Transport Review', lifeTitle: 'Transport in Life',
    keywords: ['Bus', 'Car', 'Train', 'Bike', 'Plane', 'Subway', 'by bus', 'by car', 'by train', 'by plane', 'Red light stop', 'Green light go', 'Crosswalk'],
    reviewContent: '回顾Transport单元！我们学了交通工具Bus/Car/Train/Bike/Plane、出行方式by+交通工具、交通规则Red light stop/Green light go',
    formulaContent: '交通表达公式：\nby + 交通工具 → I go by bus.\nOn foot → 走路去\nRed light, stop! / Green light, go!',
    lifeContent: '交通工具连接我们的生活！上学、旅行、出行……选择合适的交通工具很重要',
    lifeExample: '场景1：上学 → I go to school by bus.\n场景2：旅行 → I go to Beijing by train.\n场景3：交通规则 → Red light, stop! Green light, go!' },
  { id: 'e2u7', title: 'Hobbies', reviewTitle: 'Hobbies Review', lifeTitle: 'Hobbies in Life',
    keywords: ['I like reading', 'I like drawing', 'I like singing', 'I like swimming', 'like + 名词', 'like + doing', 'Saturday', 'Sunday', 'on Saturday'],
    reviewContent: '回顾Hobbies单元！我们学了爱好表达I like reading/drawing/singing、like两种用法like+名词/like+doing、周末计划on Saturday/Sunday',
    formulaContent: '爱好表达公式：\nI like + 名词 → I like music.\nI like + 动词ing → I like reading.\n周末：On Saturday, I will...',
    lifeContent: '爱好让生活更丰富！用英语说出你的爱好，和朋友们分享快乐',
    lifeExample: '场景1：分享爱好 → I like reading. What about you?\n场景2：like两种用法 → I like cats. / I like playing with cats.\n场景3：周末计划 → On Saturday, I will go swimming.' },
  { id: 'e2u8', title: 'Festival', reviewTitle: 'Festival Review', lifeTitle: 'Festival in Life',
    keywords: ['Christmas', 'New Year', 'Mid-Autumn Festival', 'Spring Festival', 'Merry Christmas', 'Santa Claus', 'dumplings', 'red envelope'],
    reviewContent: '回顾Festival单元！我们学了节日词汇Christmas/New Year/Mid-Autumn Festival/Spring Festival、圣诞新年Merry Christmas/Santa Claus、中国节日Spring Festival/dumplings/red envelope',
    formulaContent: '节日表达公式：\nMerry Christmas! / Happy New Year!\nHappy Spring Festival! / We eat dumplings.',
    lifeContent: '节日是文化的体现！用英语介绍中国节日，让世界了解我们的文化',
    lifeExample: '场景1：圣诞节 → Merry Christmas! Here\'s a gift for you!\n场景2：新年 → Happy New Year!\n场景3：春节 → Happy Spring Festival! We eat dumplings!' },
];

// ========== 三年级单元知识 ==========
const grade3Units = [
  { id: 'e3u1', title: 'Back to School', reviewTitle: 'Back to School Review', lifeTitle: 'Back to School in Life',
    keywords: ['Grade 3', 'New term', 'textbooks', 'English', 'Math', 'Chinese', 'Science', "Don't run", 'Be quiet', 'Raise your hand'],
    reviewContent: '回顾Back to School单元！我们学了新学期I am in Grade 3、课程表On Monday I have English、学校规则Don\'t run/Be quiet/Raise your hand',
    formulaContent: '学校表达公式：\nI am in Grade + 数字 → I am in Grade 3.\nOn + 星期几 + I have + 科目\nDon\'t + 动词原形 → Don\'t run.',
    lifeContent: '新学期新开始！用英语说出你的课程表和学校规则',
    lifeExample: '场景1：介绍年级 → I am in Grade 3 now!\n场景2：课程表 → On Monday, I have English and Math.\n场景3：学校规则 → Don\'t run in the hallway!' },
  { id: 'e3u2', title: 'My Friends', reviewTitle: 'My Friends Review', lifeTitle: 'My Friends in Life',
    keywords: ['tall', 'thin', 'long hair', 'kind', 'funny', 'taller', 'shorter', 'bigger', 'share', 'help', 'listen'],
    reviewContent: '回顾My Friends单元！我们学了描述朋友tall/thin/long hair/kind/funny、比较级taller/shorter/bigger、友谊share/help/listen',
    formulaContent: '朋友表达公式：\nShe is + 形容词 → She is tall.\nShe has + 名词 → She has long hair.\n比较级：形容词+er → taller, shorter, bigger',
    lifeContent: '朋友是生活中最重要的人！用英语描述你的好朋友',
    lifeExample: '场景1：描述朋友 → My friend is tall and kind.\n场景2：比较 → Tom is taller than Jerry.\n场景3：友谊 → A good friend shares with you.' },
  { id: 'e3u3', title: 'Healthy Life', reviewTitle: 'Healthy Life Review', lifeTitle: 'Healthy Life in Life',
    keywords: ['Eat more vegetables', 'Drink water', 'Eat less junk food', 'Play basketball', 'Ride a bike', 'Jump rope', 'Brush teeth twice a day', 'Wash hands before meals', 'Go to bed early'],
    reviewContent: '回顾Healthy Life单元！我们学了健康饮食Eat more vegetables/Drink water/Eat less junk food、运动Play basketball/Ride a bike、好习惯Brush teeth twice a day/Wash hands/Go to bed early',
    formulaContent: '健康表达公式：\nEat more + 健康食物 → Eat more vegetables.\nEat less + 不健康食物 → Eat less junk food.\n频率：twice a day一天两次',
    lifeContent: '健康生活从好习惯开始！用英语说出你的健康生活方式',
    lifeExample: '场景1：健康饮食 → Eat more vegetables! Drink water!\n场景2：运动 → I play basketball every day.\n场景3：好习惯 → I brush my teeth twice a day.' },
  { id: 'e3u4', title: 'Nature', reviewTitle: 'Nature Review', lifeTitle: 'Nature in Life',
    keywords: ['Mountains', 'Rivers', 'Forests', 'Oceans', 'Earth', "Don't litter", 'Save water', 'Plant trees', 'Seed', 'Sprout', 'Flower'],
    reviewContent: '回顾Nature单元！我们学了自然景观Mountains/Rivers/Forests/Oceans、环境保护Don\'t litter/Save water/Plant trees、植物生长Seed/Sprout/Flower',
    formulaContent: '自然表达公式：\nWe should protect the Earth.\nDon\'t litter! Save water! Plant trees!\nA seed grows into a sprout, then a plant, then a flower.',
    lifeContent: '大自然是我们的家园！保护环境，从身边小事做起',
    lifeExample: '场景1：自然景观 → Mountains are tall and beautiful!\n场景2：环保 → Don\'t litter! Save water! Plant trees!\n场景3：植物生长 → A seed grows into a flower.' },
  { id: 'e3u5', title: 'Jobs', reviewTitle: 'Jobs Review', lifeTitle: 'Jobs in Life',
    keywords: ['Doctor', 'Teacher', 'Firefighter', 'Police officer', 'Pilot', 'Chef', 'I want to be a', 'Mail carriers', 'Cleaners', 'keep us safe'],
    reviewContent: '回顾Jobs单元！我们学了职业Doctor/Teacher/Firefighter/Police officer/Pilot/Chef、梦想I want to be a...、社区服务Police officers/Mail carriers/Cleaners',
    formulaContent: '职业表达公式：\nI want to be a + 职业 → I want to be a doctor.\nA + 职业 + 动作 → A firefighter puts out fires.\nkeep us safe / keep our city clean',
    lifeContent: '职业让社会运转！用英语说出你梦想的职业',
    lifeExample: '场景1：职业 → A doctor helps sick people.\n场景2：梦想 → I want to be a pilot!\n场景3：社区服务 → Police officers keep us safe.',
    hasSceneBuild: true },
  { id: 'e3u6', title: 'Stories', reviewTitle: 'Stories Review', lifeTitle: 'Stories in Life',
    keywords: ['Tortoise', 'Hare', 'Slow and steady', 'First', 'Then', 'Finally', 'Straw', 'Sticks', 'Bricks', 'made of'],
    reviewContent: '回顾Stories单元！我们学了寓言故事龟兔赛跑Tortoise and Hare/Slow and steady、故事复述First/Then/Finally、角色扮演三只小猪Straw/Sticks/Bricks',
    formulaContent: '故事表达公式：\nFirst... Then... Finally... → 复述故事\nmade of + 材料 → made of bricks\nSlow and steady wins the race!',
    lifeContent: '故事是学习英语的好方法！用英语复述你最喜欢的故事',
    lifeExample: '场景1：龟兔赛跑 → Slow and steady wins the race!\n场景2：复述故事 → First, the hare ran fast. Then, he slept. Finally, the tortoise won!\n场景3：三只小猪 → My house is made of bricks!' },
  { id: 'e3u7', title: 'Communication', reviewTitle: 'Communication Review', lifeTitle: 'Communication in Life',
    keywords: ['This is...', 'May I speak to', 'Hold on', 'Dear', 'Best wishes', 'When', 'Where', "You're invited"],
    reviewContent: '回顾Communication单元！我们学了电话用语This is.../May I speak to/Hold on、邮件格式Dear/Best wishes、邀请函When/Where/You\'re invited',
    formulaContent: '沟通表达公式：\n电话：This is... (不是I am...)\n邮件：Dear + 名字 ... Best wishes, + 署名\n邀请函：When + Where + What',
    lifeContent: '沟通连接世界！用英语打电话、写邮件、发邀请',
    lifeExample: '场景1：打电话 → Hello? This is Xiaoming. May I speak to Lily?\n场景2：写邮件 → Dear friend, How are you? Best wishes, Lily.\n场景3：邀请 → You\'re invited to my party! When: Saturday.' },
  { id: 'e3u8', title: 'Review & Show', reviewTitle: 'Review & Show Review', lifeTitle: 'Review & Show in Life',
    keywords: ['I want to be a', 'taller', 'Eat more vegetables', "Don't litter", 'First Then Finally', 'This is...', 'How about you', 'favorite'],
    reviewContent: '回顾Review & Show单元！我们学了学期回顾friends/health/nature/jobs/stories/communication、才艺展示Hello everyone/Let me show you、英语角How about you/favorite',
    formulaContent: '总结公式：\n回顾：What did we learn? We learned about...\n展示：Hello everyone! Let me show you!\n对话：How about you? / What\'s your favorite...?',
    lifeContent: '学以致用！用英语展示你的学习成果',
    lifeExample: '场景1：回顾 → We learned about friends, health, and nature!\n场景2：展示 → Hello everyone! I can sing an English song.\n场景3：对话 → What\'s your favorite color? I like blue.' },
];

// 生成题目模板
function generateQuestions(grade, unitNum, lessonNum, unit) {
  const prefix = `e${grade}u${unitNum}`;
  const kw = unit.keywords;
  const questions = [];

  // 提高层（2道）：需要一步推理
  if (lessonNum <= 3) {
    const q4id = `${prefix}l${lessonNum}q4`;
    const q5id = `${prefix}l${lessonNum}q5`;

    // q4: 提高层choice
    questions.push({
      id: q4id, type: 'choice',
      question: `关于"${kw[0]}"，以下哪个说法是正确的？`,
      options: [kw[0], kw[1], kw[2], kw[3]].filter(Boolean),
      answer: kw[0],
      hint: '回想本课时学的内容',
      explanation: `${kw[0]}是本课时的重点内容`
    });

    // q5: 提高层fill
    questions.push({
      id: q5id, type: 'fill',
      question: `完成句子：I ${kw[0].split(' ').pop()} _____.`,
      answer: kw[1].split(' ').pop(),
      hint: '根据上下文填入正确的词',
      explanation: `正确的表达应该包含${kw[1]}`
    });

    // 挑战层（2道）：跨知识点综合
    const q6id = `${prefix}l${lessonNum}q6`;
    const q7id = `${prefix}l${lessonNum}q7`;

    // q6: 挑战层choice - 跨知识点
    questions.push({
      id: q6id, type: 'choice',
      question: `【期末真题】在什么情况下应该使用"${kw[0]}"？`,
      options: [`当${kw[0]}时`, `当${kw[1]}时`, `当${kw[2]}时`, `当${kw[3]}时`].filter(Boolean),
      answer: `当${kw[0]}时`,
      hint: '结合生活场景思考',
      explanation: `${kw[0]}在特定场景中使用，要理解其含义和用法`
    });

    // q7: 回溯层 - 标注来源
    const prevUnitTitle = grade === 2 ?
      (unitNum > 1 ? grade2Units[unitNum - 2].title : unit.title) :
      (unitNum > 1 ? grade3Units[unitNum - 2].title : unit.title);
    questions.push({
      id: q7id, type: 'drag',
      question: `把正确的词拖到空格处：${kw[0]} = ____`,
      answer: kw[0].split(' ').pop(),
      hint: `[${prevUnitTitle}]（英语${grade === 2 ? '二' : '三'}年级-第${Math.max(1, unitNum - 1)}单元）`,
      explanation: `回顾已学知识：${kw[0]}是之前学过的重要表达`
    });
  }

  return questions;
}

// 生成第4课题目
function generateL4Questions(grade, unitNum, unit) {
  const prefix = `e${grade}u${unitNum}`;
  const kw = unit.keywords;
  const questions = [];

  // 基础层2道
  questions.push({
    id: `${prefix}l4q1`, type: 'choice',
    question: `本单元"${unit.title}"的核心词汇是？`,
    options: [kw[0], kw[3] || kw[1], kw[5] || kw[2], kw[7] || kw[0]],
    answer: kw[0],
    hint: '回顾本单元学的第一个关键词',
    explanation: `${kw[0]}是${unit.title}单元的核心词汇`
  });

  questions.push({
    id: `${prefix}l4q2`, type: 'fill',
    question: `完成表达：${kw[0]} ____`,
    answer: kw[1].split(' ').pop(),
    hint: '和第一个关键词搭配的词',
    explanation: `${kw[0]}和${kw[1]}是本单元的重要搭配`
  });

  // 提高层2道
  questions.push({
    id: `${prefix}l4q3`, type: 'choice',
    question: `以下哪个表达属于"${unit.title}"主题？`,
    options: [kw[2], 'Good morning', 'One two three', 'Red and blue'],
    answer: kw[2],
    hint: '哪个和本单元主题相关？',
    explanation: `${kw[2]}是${unit.title}单元的重要表达`
  });

  questions.push({
    id: `${prefix}l4q4`, type: 'drag',
    question: `把词拖到正确位置：${kw[0]} → ____`,
    answer: kw[0].split(' ').pop(),
    hint: '完成本单元的核心表达',
    explanation: `${kw[0]}是本单元需要掌握的核心内容`
  });

  // 挑战层2道（含期末真题）
  questions.push({
    id: `${prefix}l4q5`, type: 'choice',
    question: `【期末真题】"${kw[0]}"和"${kw[1]}"有什么共同点？`,
    options: [`都属于"${unit.title}"主题`, '都是颜色词', '都是数字', '没有共同点'],
    answer: `都属于"${unit.title}"主题`,
    hint: '它们属于哪个单元？',
    explanation: `${kw[0]}和${kw[1]}都属于${unit.title}单元的主题内容`
  });

  questions.push({
    id: `${prefix}l4q6`, type: 'fill',
    question: `用英语表达：${kw[3] || kw[0]} ____`,
    answer: (kw[4] || kw[1]).split(' ').pop(),
    hint: '完成本单元的重要表达',
    explanation: `这是${unit.title}单元的重要表达方式`
  });

  // 回溯层1道
  const prevUnit = grade === 2 ?
    (unitNum > 1 ? grade2Units[unitNum - 2] : unit) :
    (unitNum > 1 ? grade3Units[unitNum - 2] : unit);
  questions.push({
    id: `${prefix}l4q7`, type: 'choice',
    question: `以下哪个是上一单元"${prevUnit.title}"学的内容？`,
    options: [prevUnit.keywords[0], kw[0], kw[1], 'Goodbye'],
    answer: prevUnit.keywords[0],
    hint: `[${prevUnit.title}]（英语${grade === 2 ? '二' : '三'}年级-第${Math.max(1, unitNum - 1)}单元）`,
    explanation: `${prevUnit.keywords[0]}是上一单元"${prevUnit.title}"的核心内容`
  });

  return questions;
}

// 生成第5课题目
function generateL5Questions(grade, unitNum, unit) {
  const prefix = `e${grade}u${unitNum}`;
  const kw = unit.keywords;
  const questions = [];

  // 基础层2道
  questions.push({
    id: `${prefix}l5q1`, type: 'choice',
    question: `在生活中，什么时候会用到"${kw[0]}"？`,
    options: [`日常${unit.title}相关场景`, '吃饭时', '睡觉时', '运动时'],
    answer: `日常${unit.title}相关场景`,
    hint: '这个表达在什么场景使用？',
    explanation: `${kw[0]}在${unit.title}相关的日常场景中使用`
  });

  questions.push({
    id: `${prefix}l5q2`, type: 'fill',
    question: `在生活中运用：${kw[0]} ____`,
    answer: kw[1].split(' ').pop(),
    hint: '完成日常表达',
    explanation: `${kw[0]} ${kw[1]}是日常生活中常用的表达`
  });

  // 提高层2道
  questions.push({
    id: `${prefix}l5q3`, type: 'choice',
    question: `小明想表达"${kw[2]}"，他应该怎么说？`,
    options: [kw[2], kw[3] || kw[1], kw[0], 'I don\'t know'],
    answer: kw[2],
    hint: '用本单元学过的表达',
    explanation: `${kw[2]}是表达该意思的正确方式`
  });

  questions.push({
    id: `${prefix}l5q4`, type: 'drag',
    question: `把表达拖到正确场景：${kw[0]} → ____`,
    answer: kw[0].split(' ').pop(),
    hint: '在什么场景下使用？',
    explanation: `${kw[0]}在特定生活场景中使用`
  });

  // 挑战层2道（含期末真题）
  questions.push({
    id: `${prefix}l5q5`, type: 'choice',
    question: `【期末真题】在生活中遇到以下情况，应该用哪个英语表达？${kw[0]}`,
    options: [kw[0], kw[1], kw[2] || kw[0], kw[3] || kw[1]],
    answer: kw[0],
    hint: '选择最合适的英语表达',
    explanation: `${kw[0]}是最合适的表达方式`
  });

  questions.push({
    id: `${prefix}l5q6`, type: 'fill',
    question: `用英语完成生活对话：${kw[1]} ____`,
    answer: kw[2] ? kw[2].split(' ').pop() : kw[0].split(' ').pop(),
    hint: '根据对话情境填空',
    explanation: `在日常对话中，这是正确的表达方式`
  });

  // 回溯层1道
  const prevUnit = grade === 2 ?
    (unitNum > 1 ? grade2Units[unitNum - 2] : unit) :
    (unitNum > 1 ? grade3Units[unitNum - 2] : unit);
  questions.push({
    id: `${prefix}l5q7`, type: 'choice',
    question: `结合"${prevUnit.title}"和"${unit.title}"，以下哪个表达将两个主题联系起来？`,
    options: [`${prevUnit.keywords[0]} and ${kw[0]}`, kw[0], prevUnit.keywords[0], 'None'],
    answer: `${prevUnit.keywords[0]} and ${kw[0]}`,
    hint: `[${prevUnit.title}]（英语${grade === 2 ? '二' : '三'}年级-第${Math.max(1, unitNum - 1)}单元）`,
    explanation: `${prevUnit.keywords[0]}和${kw[0]}分别来自两个单元，可以结合使用`
  });

  return questions;
}

// 序列化课时
function serializeLesson(lesson) {
  let str = `{\n        id: '${lesson.id}',\n        title: '${lesson.title}',\n        order: ${lesson.order},\n`;
  str += `        teachingMethod: '${lesson.teachingMethod}',\n`;
  str += `        iDo: '${lesson.iDo}',\n`;
  str += `        weDo: '${lesson.weDo}',\n`;
  str += `        youDo: '${lesson.youDo}',\n`;
  str += `        parentTips: '${lesson.parentTips}',\n`;
  str += `        funElement: '${lesson.funElement}',\n`;
  str += `        gsapAnimations: [${lesson.gsapAnimations.map(a => `'${a}'`).join(', ')}],\n`;
  str += `        images: [${lesson.images.map(i => `'${i}'`).join(', ')}],\n`;
  str += `        content: [\n`;
  for (const block of lesson.content) {
    str += `          { type: '${block.type}', content: \`${block.content.replace(/`/g, '\\`')}\`, animationType: '${block.animationType}'`;
    if (block.label) str += `, label: '${block.label}'`;
    if (block.animationConfig) {
      str += `, animationConfig: ${JSON.stringify(block.animationConfig)}`;
    }
    str += ` },\n`;
  }
  str += `        ],\n`;
  str += `        practiceQuestions: [\n`;
  for (const q of lesson.practiceQuestions) {
    str += `          {\n`;
    str += `            id: '${q.id}',\n`;
    str += `            type: '${q.type}',\n`;
    str += `            question: '${q.question.replace(/'/g, "\\'")}',\n`;
    if (q.options) {
      str += `            options: [${q.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}],\n`;
    }
    str += `            answer: '${q.answer.replace(/'/g, "\\'")}',\n`;
    str += `            hint: '${q.hint.replace(/'/g, "\\'")}',\n`;
    str += `            explanation: '${q.explanation.replace(/'/g, "\\'")}'\n`;
    str += `          },\n`;
  }
  str += `        ]\n`;
  str += `      }`;
  return str;
}

// e3u5 sceneBuild动画配置
function getE3U5AnimationConfig() {
  return {
    sceneName: 'Jobs Scene',
    elements: [
      { id: 'firefighter', emoji: '🧑‍🚒', text: 'Firefighter', x: 20, y: 30, size: 'lg', delay: 0, animation: 'bounceIn', ttsText: 'Firefighter! A firefighter puts out fires.', group: 'A' },
      { id: 'fire-extinguisher', emoji: '🧯', text: 'Fire Extinguisher', x: 20, y: 60, size: 'sm', delay: 500, animation: 'popIn', ttsText: 'Fire extinguisher!', group: 'A' },
      { id: 'fire-action', emoji: '🔥', text: 'Put out fires', x: 20, y: 80, size: 'sm', delay: 1000, animation: 'scaleIn', ttsText: 'Put out fires!', group: 'A' },
      { id: 'doctor', emoji: '👨‍⚕️', text: 'Doctor', x: 40, y: 30, size: 'lg', delay: 1500, animation: 'bounceIn', ttsText: 'Doctor! A doctor helps sick people.', group: 'A' },
      { id: 'stethoscope', emoji: '🩺', text: 'Stethoscope', x: 40, y: 60, size: 'sm', delay: 2000, animation: 'popIn', ttsText: 'Stethoscope!', group: 'A' },
      { id: 'doctor-action', emoji: '💊', text: 'Help sick people', x: 40, y: 80, size: 'sm', delay: 2500, animation: 'scaleIn', ttsText: 'Help sick people!', group: 'A' },
      { id: 'teacher', emoji: '👩‍🏫', text: 'Teacher', x: 60, y: 30, size: 'lg', delay: 3000, animation: 'bounceIn', ttsText: 'Teacher! A teacher teaches students.', group: 'A' },
      { id: 'book-tool', emoji: '📚', text: 'Books', x: 60, y: 60, size: 'sm', delay: 3500, animation: 'popIn', ttsText: 'Books!', group: 'A' },
      { id: 'teacher-action', emoji: '✏️', text: 'Teach students', x: 60, y: 80, size: 'sm', delay: 4000, animation: 'scaleIn', ttsText: 'Teach students!', group: 'A' },
      { id: 'police', emoji: '👮', text: 'Police Officer', x: 80, y: 30, size: 'lg', delay: 4500, animation: 'bounceIn', ttsText: 'Police officer! A police officer keeps us safe.', group: 'A' },
      { id: 'badge', emoji: '🎖️', text: 'Badge', x: 80, y: 60, size: 'sm', delay: 5000, animation: 'popIn', ttsText: 'Badge!', group: 'A' },
      { id: 'police-action', emoji: '🛡️', text: 'Keep us safe', x: 80, y: 80, size: 'sm', delay: 5500, animation: 'scaleIn', ttsText: 'Keep us safe!', group: 'A' },
    ]
  };
}

// 处理年级文件
function processGrade(grade, units) {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'english', `grade${grade}.ts`);
  let content = fs.readFileSync(filePath, 'utf-8');

  for (let unitNum = 1; unitNum <= units.length; unitNum++) {
    const unit = units[unitNum - 1];

    // 为现有3课时追加4道题
    for (let lessonNum = 1; lessonNum <= 3; lessonNum++) {
      const extra = generateQuestions(grade, unitNum, lessonNum, unit);
      if (!extra.length) continue;

      const lastQuestionId = `e${grade}u${unitNum}l${lessonNum}q3`;
      const lastQuestionPattern = new RegExp(
        `id: '${lastQuestionId}'[\\s\\S]*?explanation: '[^']*'\\s*\\}`,
        'g'
      );

      const match = content.match(lastQuestionPattern);
      if (match) {
        const insertPoint = match[0];
        const extraQuestionsStr = extra.map(q => {
          let qStr = `,\n          {\n            id: '${q.id}',\n            type: '${q.type}',\n            question: '${q.question.replace(/'/g, "\\'")}',\n`;
          if (q.options) {
            qStr += `            options: [${q.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}],\n`;
          }
          qStr += `            answer: '${q.answer.replace(/'/g, "\\'")}',\n`;
          qStr += `            hint: '${q.hint.replace(/'/g, "\\'")}',\n`;
          qStr += `            explanation: '${q.explanation.replace(/'/g, "\\'")}'\n          }`;
          return qStr;
        }).join('');

        content = content.replace(insertPoint, insertPoint + extraQuestionsStr);
      }
    }

    // 在每个单元的lessons数组末尾追加第4课和第5课
    const unitId = `e${grade}u${unitNum}`;
    const unitStartIdx = content.indexOf(`id: '${unitId}'`);
    if (unitStartIdx !== -1) {
      let lessonsStartIdx = content.indexOf('lessons: [', unitStartIdx);
      let braceCount = 0;
      let lessonsEndIdx = -1;
      let inLessons = false;

      for (let i = lessonsStartIdx; i < content.length; i++) {
        if (content[i] === '[') { braceCount++; inLessons = true; }
        else if (content[i] === ']') {
          braceCount--;
          if (inLessons && braceCount === 0) { lessonsEndIdx = i; break; }
        }
      }

      if (lessonsEndIdx !== -1) {
        // 生成第4课
        const l4Content = [
          { type: 'text', content: unit.reviewContent, animationType: 'reveal' },
          { type: 'formula', content: unit.formulaContent, label: `${unit.title}公式`, animationType: 'typewriter' },
          { type: 'animation', content: `${unit.title}单元回顾动画`, animationType: 'cpaTransition' },
        ];
        const l4 = {
          id: `${unitId}l4`, title: unit.reviewTitle, order: 4,
          teachingMethod: '形成性评价法',
          iDo: '家长引导孩子回顾本单元内容，说出关键词和句型',
          weDo: '亲子一起完成回顾练习，互相检查掌握情况',
          youDo: '孩子独立完成所有回顾题目，检验学习效果',
          parentTips: '回顾时不要只记单词，要回忆情境和用法',
          funElement: '玩"知识大转盘"，转到哪个主题就说出3个关键词',
          gsapAnimations: ['GSAP:知识节点亮起-nodeLight', 'GSAP:回顾卡片翻转-cardFlip'],
          images: ['IMG:单元回顾插图', 'IMG:关键词卡片'],
          content: l4Content,
          practiceQuestions: generateL4Questions(grade, unitNum, unit)
        };

        // 生成第5课
        const l5Content = [
          { type: 'text', content: unit.lifeContent, animationType: 'reveal' },
          { type: 'example', content: unit.lifeExample, label: `${unit.title}在生活中的应用`, animationType: 'bounce' },
          { type: 'tip', content: '每天在生活中运用英语，坚持下来你会越来越自信！', label: '生活提示', animationType: 'pulse' },
        ];

        // e3u5特殊动画处理
        if (unit.hasSceneBuild) {
          l5Content.push({
            type: 'animation',
            content: '职业人物场景动画：消防员🧑‍🚒+灭火器🧯+灭火🔥 | 医生👨‍⚕️+听诊器🩺+治病💊 | 老师👩‍🏫+书本📚+教书✏️ | 警察👮+徽章🎖️+保护安全🛡️',
            animationType: 'sceneBuild',
            animationConfig: getE3U5AnimationConfig()
          });
        }

        const l5 = {
          id: `${unitId}l5`, title: unit.lifeTitle, order: 5,
          teachingMethod: '综合应用教学法',
          iDo: '家长示范在生活中运用本单元英语，说出场景对话',
          weDo: '亲子一起在生活中实践英语，模拟真实场景',
          youDo: '孩子独立在生活中运用英语，完成实际任务',
          parentTips: '鼓励孩子在真实场景中使用英语，不怕出错',
          funElement: '举办"英语生活秀"，用英语完成一个生活任务',
          gsapAnimations: ['GSAP:生活场景展开-lifeScene', 'GSAP:应用图标弹出-appPop'],
          images: ['IMG:生活应用场景', 'IMG:场景对话卡片'],
          content: l5Content,
          practiceQuestions: generateL5Questions(grade, unitNum, unit)
        };

        const l4Str = serializeLesson(l4);
        const l5Str = serializeLesson(l5);
        const insertStr = `,\n      ${l4Str},\n      ${l5Str}`;

        content = content.substring(0, lessonsEndIdx) + insertStr + content.substring(lessonsEndIdx);
      }
    }
  }

  // e3u5特殊处理：替换现有动画为sceneBuild
  if (grade === 3) {
    const oldAnimation = "{ type: 'animation', content: '职业人物出场，工具图标弹出的动画', animationType: 'cpaTransition' }";
    const newAnimation = "{ type: 'animation', content: '职业人物场景动画：消防员🧑‍🚒+灭火器🧯+灭火🔥 | 医生👨‍⚕️+听诊器🩺+治病💊 | 老师👩‍🏫+书本📚+教书✏️ | 警察👮+徽章🎖️+保护安全🛡️', animationType: 'sceneBuild', animationConfig: " + JSON.stringify(getE3U5AnimationConfig()) + " }";
    content = content.replace(oldAnimation, newAnimation);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`grade${grade}.ts 扩充完成！`);
}

// 执行
processGrade(2, grade2Units);
processGrade(3, grade3Units);
