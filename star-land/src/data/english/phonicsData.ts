// 自然拼读（Phonics）教学数据
// 覆盖小学1-3年级所需拼读技能：字母音、CVC词、字母组合、Word Family、Sight Words

export interface LetterSound {
  letter: string          // 字母
  sound: string           // 音标
  soundCn: string         // 中文发音提示
  exampleWord: string     // 示例单词
  exampleCn: string       // 示例中文
  emoji: string           // 图标
}

export interface WordFamily {
  family: string          // 词族尾音，如 "-at"
  familySound: string     // 发音
  words: { word: string; cn: string; emoji: string }[]
}

export interface BlendDigraph {
  pattern: string         // 字母组合，如 "sh"
  sound: string           // 音标
  soundCn: string         // 中文发音提示
  words: { word: string; cn: string; emoji: string }[]
}

export interface SightWord {
  word: string
  cn: string
  sentence: string
  sentenceCn: string
}

export interface PhonicsUnit {
  id: string
  title: string
  grade: 1 | 2 | 3
  type: 'letter_sound' | 'cvc' | 'word_family' | 'blend_digraph' | 'sight_words' | 'long_vowel'
  description: string
  data: LetterSound[] | WordFamily[] | BlendDigraph[] | SightWord[]
}

// ===== 一年级：字母音 + 基础CVC =====
const letterSoundsGrade1: LetterSound[] = [
  { letter: 'Aa', sound: '/æ/', soundCn: '啊（短促）', exampleWord: 'apple', exampleCn: '苹果', emoji: '🍎' },
  { letter: 'Bb', sound: '/b/', soundCn: '波', exampleWord: 'book', exampleCn: '书', emoji: '📖' },
  { letter: 'Cc', sound: '/k/', soundCn: '克', exampleWord: 'cat', exampleCn: '猫', emoji: '🐱' },
  { letter: 'Dd', sound: '/d/', soundCn: '得', exampleWord: 'dog', exampleCn: '狗', emoji: '🐶' },
  { letter: 'Ee', sound: '/e/', soundCn: '哎（短促）', exampleWord: 'egg', exampleCn: '鸡蛋', emoji: '🥚' },
  { letter: 'Ff', sound: '/f/', soundCn: '夫', exampleWord: 'fish', exampleCn: '鱼', emoji: '🐟' },
  { letter: 'Gg', sound: '/g/', soundCn: '哥', exampleWord: 'go', exampleCn: '走', emoji: '🚶' },
  { letter: 'Hh', sound: '/h/', soundCn: '喝', exampleWord: 'hat', exampleCn: '帽子', emoji: '🎩' },
  { letter: 'Ii', sound: '/ɪ/', soundCn: '衣（短促）', exampleWord: 'igloo', exampleCn: '冰屋', emoji: '🏠' },
  { letter: 'Jj', sound: '/dʒ/', soundCn: '吉', exampleWord: 'jam', exampleCn: '果酱', emoji: '🍯' },
  { letter: 'Kk', sound: '/k/', soundCn: '克', exampleWord: 'kite', exampleCn: '风筝', emoji: '🪁' },
  { letter: 'Ll', sound: '/l/', soundCn: '勒', exampleWord: 'lion', exampleCn: '狮子', emoji: '🦁' },
  { letter: 'Mm', sound: '/m/', soundCn: '姆', exampleWord: 'moon', exampleCn: '月亮', emoji: '🌙' },
  { letter: 'Nn', sound: '/n/', soundCn: '恩', exampleWord: 'nose', exampleCn: '鼻子', emoji: '👃' },
  { letter: 'Oo', sound: '/ɒ/', soundCn: '哦（短促）', exampleWord: 'orange', exampleCn: '橙子', emoji: '🍊' },
  { letter: 'Pp', sound: '/p/', soundCn: '泼', exampleWord: 'pig', exampleCn: '猪', emoji: '🐷' },
  { letter: 'Qq', sound: '/kw/', soundCn: '库', exampleWord: 'queen', exampleCn: '女王', emoji: '👸' },
  { letter: 'Rr', sound: '/r/', soundCn: '若', exampleWord: 'red', exampleCn: '红色', emoji: '🔴' },
  { letter: 'Ss', sound: '/s/', soundCn: '斯', exampleWord: 'sun', exampleCn: '太阳', emoji: '☀️' },
  { letter: 'Tt', sound: '/t/', soundCn: '特', exampleWord: 'top', exampleCn: '顶部', emoji: '⬆️' },
  { letter: 'Uu', sound: '/ʌ/', soundCn: '阿（短促）', exampleWord: 'umbrella', exampleCn: '雨伞', emoji: '☂️' },
  { letter: 'Vv', sound: '/v/', soundCn: '乌（咬唇）', exampleWord: 'van', exampleCn: '货车', emoji: '🚐' },
  { letter: 'Ww', sound: '/w/', soundCn: '乌', exampleWord: 'water', exampleCn: '水', emoji: '💧' },
  { letter: 'Xx', sound: '/ks/', soundCn: '克斯', exampleWord: 'box', exampleCn: '盒子', emoji: '📦' },
  { letter: 'Yy', sound: '/j/', soundCn: '耶', exampleWord: 'yes', exampleCn: '是', emoji: '✅' },
  { letter: 'Zz', sound: '/z/', soundCn: '滋', exampleWord: 'zoo', exampleCn: '动物园', emoji: '🦁' },
]

// CVC Word Families（一年级）
const cvcFamiliesGrade1: WordFamily[] = [
  {
    family: '-at', familySound: '/æt/',
    words: [
      { word: 'cat', cn: '猫', emoji: '🐱' },
      { word: 'hat', cn: '帽子', emoji: '🎩' },
      { word: 'mat', cn: '垫子', emoji: '🟫' },
      { word: 'bat', cn: '蝙蝠', emoji: '🦇' },
      { word: 'rat', cn: '老鼠', emoji: '🐀' },
    ],
  },
  {
    family: '-an', familySound: '/æn/',
    words: [
      { word: 'can', cn: '能/罐', emoji: '🥫' },
      { word: 'man', cn: '男人', emoji: '👨' },
      { word: 'fan', cn: '风扇', emoji: '🌀' },
      { word: 'pan', cn: '平底锅', emoji: '🍳' },
      { word: 'van', cn: '货车', emoji: '🚐' },
    ],
  },
  {
    family: '-ig', familySound: '/ɪg/',
    words: [
      { word: 'pig', cn: '猪', emoji: '🐷' },
      { word: 'big', cn: '大的', emoji: '🐘' },
      { word: 'dig', cn: '挖', emoji: '⛏️' },
      { word: 'wig', cn: '假发', emoji: '💇' },
    ],
  },
  {
    family: '-og', familySound: '/ɒg/',
    words: [
      { word: 'dog', cn: '狗', emoji: '🐶' },
      { word: 'log', cn: '木头', emoji: '🪵' },
      { word: 'fog', cn: '雾', emoji: '🌫️' },
      { word: 'hop', cn: '跳跃', emoji: '🐰' },
    ],
  },
  {
    family: '-et', familySound: '/et/',
    words: [
      { word: 'pet', cn: '宠物', emoji: '🐹' },
      { word: 'net', cn: '网', emoji: '🕸️' },
      { word: 'jet', cn: '喷气机', emoji: '✈️' },
      { word: 'wet', cn: '湿的', emoji: '💧' },
    ],
  },
  {
    family: '-ug', familySound: '/ʌg/',
    words: [
      { word: 'bug', cn: '虫子', emoji: '🐛' },
      { word: 'mug', cn: '杯子', emoji: '☕' },
      { word: 'hug', cn: '拥抱', emoji: '🤗' },
      { word: 'rug', cn: '地毯', emoji: '🟫' },
    ],
  },
]

// Sight Words（一年级）
const sightWordsGrade1: SightWord[] = [
  { word: 'the', cn: '这/那', sentence: 'The cat is big.', sentenceCn: '这只猫很大。' },
  { word: 'a', cn: '一个', sentence: 'I see a dog.', sentenceCn: '我看到一只狗。' },
  { word: 'is', cn: '是', sentence: 'It is red.', sentenceCn: '它是红色的。' },
  { word: 'it', cn: '它', sentence: 'It is a cat.', sentenceCn: '它是一只猫。' },
  { word: 'I', cn: '我', sentence: 'I like apples.', sentenceCn: '我喜欢苹果。' },
  { word: 'see', cn: '看见', sentence: 'I see a star.', sentenceCn: '我看到一颗星星。' },
  { word: 'like', cn: '喜欢', sentence: 'I like to play.', sentenceCn: '我喜欢玩。' },
  { word: 'my', cn: '我的', sentence: 'This is my book.', sentenceCn: '这是我的书。' },
  { word: 'you', cn: '你', sentence: 'You are happy.', sentenceCn: '你很开心。' },
  { word: 'we', cn: '我们', sentence: 'We play together.', sentenceCn: '我们一起玩。' },
]

// ===== 二年级：字母组合 + 长元音 =====
const blendsGrade2: BlendDigraph[] = [
  {
    pattern: 'sh', sound: '/ʃ/', soundCn: '嘘（不要出声）',
    words: [
      { word: 'ship', cn: '船', emoji: '🚢' },
      { word: 'fish', cn: '鱼', emoji: '🐟' },
      { word: 'shop', cn: '商店', emoji: '🏪' },
      { word: 'wish', cn: '愿望', emoji: '🌟' },
    ],
  },
  {
    pattern: 'ch', sound: '/tʃ/', soundCn: '吃',
    words: [
      { word: 'chair', cn: '椅子', emoji: '🪑' },
      { word: 'cheese', cn: '奶酪', emoji: '🧀' },
      { word: 'chick', cn: '小鸡', emoji: '🐤' },
      { word: 'lunch', cn: '午餐', emoji: '🍱' },
    ],
  },
  {
    pattern: 'th', sound: '/θ/', soundCn: '咬舌吐气',
    words: [
      { word: 'think', cn: '想', emoji: '🤔' },
      { word: 'three', cn: '三', emoji: '3️⃣' },
      { word: 'thumb', cn: '拇指', emoji: '👍' },
      { word: 'bath', cn: '洗澡', emoji: '🛁' },
    ],
  },
  {
    pattern: 'oo', sound: '/uː/', soundCn: '乌（长音）',
    words: [
      { word: 'moon', cn: '月亮', emoji: '🌙' },
      { word: 'food', cn: '食物', emoji: '🍽️' },
      { word: 'zoo', cn: '动物园', emoji: '🦁' },
      { word: 'room', cn: '房间', emoji: '🚪' },
    ],
  },
  {
    pattern: 'ee', sound: '/iː/', soundCn: '衣（长音）',
    words: [
      { word: 'bee', cn: '蜜蜂', emoji: '🐝' },
      { word: 'tree', cn: '树', emoji: '🌳' },
      { word: 'green', cn: '绿色', emoji: '🟢' },
      { word: 'see', cn: '看见', emoji: '👀' },
    ],
  },
  {
    pattern: 'ea', sound: '/iː/', soundCn: '衣（长音）',
    words: [
      { word: 'eat', cn: '吃', emoji: '🍽️' },
      { word: 'read', cn: '读', emoji: '📖' },
      { word: 'tea', cn: '茶', emoji: '🍵' },
      { word: 'sea', cn: '海', emoji: '🌊' },
    ],
  },
]

// 长元音（二年级）
const longVowelsGrade2: WordFamily[] = [
  {
    family: 'a-e', familySound: '/eɪ/',
    words: [
      { word: 'cake', cn: '蛋糕', emoji: '🎂' },
      { word: 'make', cn: '制作', emoji: '🔨' },
      { word: 'name', cn: '名字', emoji: '🏷️' },
      { word: 'game', cn: '游戏', emoji: '🎮' },
    ],
  },
  {
    family: 'i-e', familySound: '/aɪ/',
    words: [
      { word: 'bike', cn: '自行车', emoji: '🚲' },
      { word: 'kite', cn: '风筝', emoji: '🪁' },
      { word: 'time', cn: '时间', emoji: '⏰' },
      { word: 'five', cn: '五', emoji: '5️⃣' },
    ],
  },
  {
    family: 'o-e', familySound: '/oʊ/',
    words: [
      { word: 'home', cn: '家', emoji: '🏠' },
      { word: 'bone', cn: '骨头', emoji: '🦴' },
      { word: 'nose', cn: '鼻子', emoji: '👃' },
      { word: 'rose', cn: '玫瑰', emoji: '🌹' },
    ],
  },
  {
    family: 'u-e', familySound: '/juː/',
    words: [
      { word: 'cube', cn: '立方体', emoji: '🧊' },
      { word: 'tube', cn: '管子', emoji: '🧪' },
      { word: 'cute', cn: '可爱的', emoji: '🥰' },
      { word: 'mute', cn: '静音', emoji: '🔇' },
    ],
  },
]

// Sight Words（二年级）
const sightWordsGrade2: SightWord[] = [
  { word: 'are', cn: '是', sentence: 'They are friends.', sentenceCn: '他们是朋友。' },
  { word: 'have', cn: '有', sentence: 'I have a book.', sentenceCn: '我有一本书。' },
  { word: 'do', cn: '做', sentence: 'Do you like it?', sentenceCn: '你喜欢吗？' },
  { word: 'what', cn: '什么', sentence: 'What is this?', sentenceCn: '这是什么？' },
  { word: 'can', cn: '能', sentence: 'I can swim.', sentenceCn: '我会游泳。' },
  { word: 'go', cn: '去', sentence: 'Let us go.', sentenceCn: '我们走吧。' },
  { word: 'said', cn: '说', sentence: 'She said yes.', sentenceCn: '她说是的。' },
  { word: 'there', cn: '那里', sentence: 'There is a cat.', sentenceCn: '那里有一只猫。' },
  { word: 'they', cn: '他们', sentence: 'They are happy.', sentenceCn: '他们很开心。' },
  { word: 'want', cn: '想要', sentence: 'I want water.', sentenceCn: '我想要水。' },
]

// ===== 三年级：复合辅音 + 高阶拼读 =====
const advancedBlendsGrade3: BlendDigraph[] = [
  {
    pattern: 'bl', sound: '/bl/', soundCn: '波-勒',
    words: [
      { word: 'blue', cn: '蓝色', emoji: '🔵' },
      { word: 'block', cn: '积木', emoji: '🧱' },
      { word: 'blow', cn: '吹', emoji: '💨' },
      { word: 'blink', cn: '眨眼', emoji: '😉' },
    ],
  },
  {
    pattern: 'br', sound: '/br/', soundCn: '波-若',
    words: [
      { word: 'bread', cn: '面包', emoji: '🍞' },
      { word: 'brown', cn: '棕色', emoji: '🟤' },
      { word: 'brush', cn: '刷子', emoji: '🖌️' },
      { word: 'brain', cn: '大脑', emoji: '🧠' },
    ],
  },
  {
    pattern: 'cl', sound: '/kl/', soundCn: '克-勒',
    words: [
      { word: 'clock', cn: '时钟', emoji: '🕐' },
      { word: 'cloud', cn: '云', emoji: '☁️' },
      { word: 'class', cn: '班级', emoji: '🏫' },
      { word: 'clean', cn: '干净的', emoji: '✨' },
    ],
  },
  {
    pattern: 'cr', sound: '/kr/', soundCn: '克-若',
    words: [
      { word: 'cry', cn: '哭', emoji: '😢' },
      { word: 'cream', cn: '奶油', emoji: '🍦' },
      { word: 'crab', cn: '螃蟹', emoji: '🦀' },
      { word: 'crop', cn: '庄稼', emoji: '🌾' },
    ],
  },
  {
    pattern: 'dr', sound: '/dr/', soundCn: '得-若',
    words: [
      { word: 'drink', cn: '喝', emoji: '🥤' },
      { word: 'dream', cn: '梦', emoji: '💭' },
      { word: 'dragon', cn: '龙', emoji: '🐉' },
      { word: 'draw', cn: '画', emoji: '✏️' },
    ],
  },
  {
    pattern: 'fl', sound: '/fl/', soundCn: '夫-勒',
    words: [
      { word: 'flower', cn: '花', emoji: '🌸' },
      { word: 'flag', cn: '旗帜', emoji: '🚩' },
      { word: 'fly', cn: '飞', emoji: '🪰' },
      { word: 'floor', cn: '地板', emoji: '🟫' },
    ],
  },
  {
    pattern: 'tr', sound: '/tr/', soundCn: '特-若',
    words: [
      { word: 'tree', cn: '树', emoji: '🌳' },
      { word: 'train', cn: '火车', emoji: '🚂' },
      { word: 'truck', cn: '卡车', emoji: '🚛' },
      { word: 'trip', cn: '旅行', emoji: '🧳' },
    ],
  },
  {
    pattern: 'st', sound: '/st/', soundCn: '斯-特',
    words: [
      { word: 'star', cn: '星星', emoji: '⭐' },
      { word: 'stop', cn: '停', emoji: '🛑' },
      { word: 'story', cn: '故事', emoji: '📚' },
      { word: 'study', cn: '学习', emoji: '📝' },
    ],
  },
]

// R-Controlled Vowels（三年级）
const rControlledGrade3: WordFamily[] = [
  {
    family: 'ar', familySound: '/ɑːr/',
    words: [
      { word: 'car', cn: '汽车', emoji: '🚗' },
      { word: 'star', cn: '星星', emoji: '⭐' },
      { word: 'park', cn: '公园', emoji: '🏞️' },
      { word: 'farm', cn: '农场', emoji: '🚜' },
    ],
  },
  {
    family: 'or', familySound: '/ɔːr/',
    words: [
      { word: 'fork', cn: '叉子', emoji: '🍴' },
      { word: 'corn', cn: '玉米', emoji: '🌽' },
      { word: 'horse', cn: '马', emoji: '🐴' },
      { word: 'morning', cn: '早晨', emoji: '🌅' },
    ],
  },
  {
    family: 'er/ir/ur', familySound: '/ɜːr/',
    words: [
      { word: 'her', cn: '她', emoji: '👧' },
      { word: 'bird', cn: '鸟', emoji: '🐦' },
      { word: 'nurse', cn: '护士', emoji: '👩‍⚕️' },
      { word: 'turn', cn: '转动', emoji: '🔄' },
    ],
  },
]

// Sight Words（三年级）
const sightWordsGrade3: SightWord[] = [
  { word: 'because', cn: '因为', sentence: 'I am happy because it is sunny.', sentenceCn: '我很开心因为天气晴朗。' },
  { word: 'before', cn: '在...之前', sentence: 'Wash hands before lunch.', sentenceCn: '午饭前要洗手。' },
  { word: 'after', cn: '在...之后', sentence: 'We play after school.', sentenceCn: '放学后我们玩。' },
  { word: 'would', cn: '将会', sentence: 'I would like water.', sentenceCn: '我想要水。' },
  { word: 'could', cn: '能', sentence: 'I could help you.', sentenceCn: '我能帮你。' },
  { word: 'should', cn: '应该', sentence: 'You should sleep early.', sentenceCn: '你应该早睡。' },
  { word: 'these', cn: '这些', sentence: 'These are books.', sentenceCn: '这些是书。' },
  { word: 'those', cn: '那些', sentence: 'Those are stars.', sentenceCn: '那些是星星。' },
  { word: 'through', cn: '通过', sentence: 'Go through the door.', sentenceCn: '穿过这扇门。' },
  { word: 'together', cn: '一起', sentence: 'We learn together.', sentenceCn: '我们一起学习。' },
]

// 所有 phonics 单元
export const phonicsUnits: PhonicsUnit[] = [
  // 一年级
  { id: 'ph1-1', title: '26个字母发音', grade: 1, type: 'letter_sound', description: '学习每个字母的基础发音，这是拼读的基础', data: letterSoundsGrade1 },
  { id: 'ph1-2', title: 'CVC拼读词族', grade: 1, type: 'cvc', description: '辅音-元音-辅音结构，学习-at/-an/-ig等词族', data: cvcFamiliesGrade1 },
  { id: 'ph1-3', title: '高频词Sight Words', grade: 1, type: 'sight_words', description: '不规则但高频的词，需要整体记忆', data: sightWordsGrade1 },
  // 二年级
  { id: 'ph2-1', title: '字母组合sh/ch/th/oo/ee/ea', grade: 2, type: 'blend_digraph', description: '两个字母发一个音的拼读组合', data: blendsGrade2 },
  { id: 'ph2-2', title: '长元音a-e/i-e/o-e/u-e', grade: 2, type: 'long_vowel', description: '魔法E让元音发长音', data: longVowelsGrade2 },
  { id: 'ph2-3', title: '高频词Sight Words', grade: 2, type: 'sight_words', description: '二年级高频词扩展', data: sightWordsGrade2 },
  // 三年级
  { id: 'ph3-1', title: '复合辅音bl/br/cl/cr/dr/fl/tr/st', grade: 3, type: 'blend_digraph', description: '两个辅音连在一起，各发各的音', data: advancedBlendsGrade3 },
  { id: 'ph3-2', title: 'R控制元音ar/or/er', grade: 3, type: 'long_vowel', description: '元音+R的特殊发音规则', data: rControlledGrade3 },
  { id: 'ph3-3', title: '高频词Sight Words', grade: 3, type: 'sight_words', description: '三年级高频词进阶', data: sightWordsGrade3 },
]

// 按年级获取 phonics 单元
export function getPhonicsUnitsByGrade(grade: number): PhonicsUnit[] {
  return phonicsUnits.filter(u => u.grade === grade)
}
