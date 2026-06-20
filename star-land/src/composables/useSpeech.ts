import { ref, onUnmounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'

// ===== 拼音转中文映射 =====
// 确保拼音用中文语音正确朗读，而不是被当成英文字母
// 完整的拼音音节映射表，覆盖小学阶段所有常用拼音
// 按长度降序排列，确保优先匹配长音节（如 zhiang 优先于 zhi）
const PINYIN_MAP: Record<string, string> = {
  // ===== 整体认读音节（最优先，长度最长） =====
  'zhi': '知', 'chi': '吃', 'shi': '诗', 'ri': '日',
  'zi': '资', 'ci': '次', 'si': '思',
  'yi': '衣', 'wu': '乌', 'yu': '鱼',
  'ye': '耶', 'yue': '月', 'yuan': '圆', 'yin': '因', 'yun': '晕', 'ying': '英',

  // ===== 带声调的完整音节（最优先匹配，确保声调正确） =====
  // ba
  'bā': '巴', 'bá': '拔', 'bǎ': '把', 'bà': '爸',
  'pā': '趴', 'pá': '爬', 'pǎ': '怕', 'pà': '怕',
  'mā': '妈', 'má': '麻', 'mǎ': '马', 'mà': '骂',
  'fā': '发', 'fá': '乏', 'fǎ': '法', 'fà': '发',
  'dā': '搭', 'dá': '达', 'dǎ': '打', 'dà': '大',
  'tā': '他', 'tá': '踏', 'tǎ': '塔', 'tà': '踏',
  'nā': '那', 'ná': '拿', 'nǎ': '哪', 'nà': '那',
  'lā': '拉', 'lá': '拉', 'lǎ': '拉', 'là': '啦',
  'gā': '嘎', 'gá': '嘎', 'gǎ': '嘎', 'gà': '嘎',
  'kā': '咖', 'ká': '卡', 'kǎ': '卡', 'kà': '卡',
  'hā': '哈', 'há': '哈', 'hǎ': '哈', 'hà': '哈',
  // bo/po/mo/fo
  'bō': '波', 'bó': '伯', 'bǒ': '跛', 'bò': '薄',
  'pō': '坡', 'pó': '婆', 'pǒ': '叵', 'pò': '破',
  'mō': '摸', 'mó': '魔', 'mǒ': '抹', 'mò': '莫',
  'fō': '佛', 'fó': '佛', 'fǒ': '否', 'fò': '佛',
  // de/te/ne/le
  'dē': '得', 'dé': '得', 'dě': '得', 'dè': '得',
  'tē': '特', 'té': '特', 'tě': '特', 'tè': '特',
  'nē': '呢', 'né': '呢', 'ně': '呢', 'nè': '呢',
  'lē': '勒', 'lé': '勒', 'lě': '勒', 'lè': '勒',
  // ge/ke/he
  'gē': '哥', 'gé': '革', 'gě': '葛', 'gè': '个',
  'kē': '科', 'ké': '咳', 'kě': '可', 'kè': '客',
  'hē': '喝', 'hé': '河', 'hě': '喝', 'hè': '贺',
  // ji/qi/xi
  'jī': '机', 'jí': '及', 'jǐ': '几', 'jì': '记',
  'qī': '七', 'qí': '齐', 'qǐ': '起', 'qì': '气',
  'xī': '西', 'xí': '习', 'xǐ': '洗', 'xì': '系',
  // bu/pu/mu/fu/du/tu/nu/lu/gu/ku/hu
  'bū': '不', 'bú': '不', 'bǔ': '补', 'bù': '不',
  'pū': '铺', 'pú': '葡', 'pǔ': '普', 'pù': '铺',
  'mū': '母', 'mú': '模', 'mǔ': '母', 'mù': '木',
  'fū': '夫', 'fú': '福', 'fǔ': '府', 'fù': '父',
  'dū': '都', 'dú': '读', 'dǔ': '堵', 'dù': '度',
  'tū': '突', 'tú': '图', 'tǔ': '土', 'tù': '兔',
  'nū': '奴', 'nú': '奴', 'nǔ': '努', 'nù': '怒',
  'lū': '撸', 'lú': '卢', 'lǔ': '鲁', 'lù': '路',
  'gū': '姑', 'gú': '骨', 'gǔ': '骨', 'gù': '故',
  'kū': '哭', 'kú': '哭', 'kǔ': '苦', 'kù': '库',
  'hū': '呼', 'hú': '湖', 'hǔ': '虎', 'hù': '户',
  // ju/qu/xu (ü)
  'jū': '居', 'jú': '局', 'jǔ': '举', 'jù': '句',
  'qū': '区', 'qú': '渠', 'qǔ': '取', 'qù': '去',
  'xū': '虚', 'xú': '徐', 'xǔ': '许', 'xù': '序',
  // nü/lü
  'nǖ': '女', 'nǘ': '女', 'nǚ': '女', 'nǜ': '女',
  'lǖ': '驴', 'lǘ': '驴', 'lǚ': '旅', 'lǜ': '绿',
  // zhu/chu/shu/ru
  'zhū': '猪', 'zhú': '竹', 'zhǔ': '主', 'zhù': '住',
  'chū': '出', 'chú': '除', 'chǔ': '楚', 'chù': '处',
  'shū': '书', 'shú': '熟', 'shǔ': '鼠', 'shù': '树',
  'rū': '如', 'rú': '如', 'rǔ': '乳', 'rù': '入',
  // zu/cu/su
  'zū': '租', 'zú': '足', 'zǔ': '组', 'zù': '租',
  'cū': '粗', 'cú': '粗', 'cǔ': '粗', 'cù': '醋',
  'sū': '苏', 'sú': '俗', 'sǔ': '苏', 'sù': '诉',
  // ya/wa/yo/wo
  'yā': '压', 'yá': '牙', 'yǎ': '雅', 'yà': '亚',
  'wā': '挖', 'wá': '娃', 'wǎ': '瓦', 'wà': '瓦',
  'yō': '哟', 'yó': '哟', 'yǒ': '哟', 'yò': '哟',
  'wō': '窝', 'wó': '窝', 'wǒ': '我', 'wò': '卧',

  // ===== 带声调的复韵母音节 =====
  // bai/pai/mai/dai/tai/nai/lai/gai/kai/hai
  'bāi': '白', 'bái': '白', 'bǎi': '百', 'bài': '拜',
  'pāi': '拍', 'pái': '排', 'pǎi': '拍', 'pài': '派',
  'māi': '买', 'mái': '埋', 'mǎi': '买', 'mài': '卖',
  'dāi': '呆', 'dái': '呆', 'dǎi': '逮', 'dài': '代',
  'tāi': '胎', 'tái': '台', 'tǎi': '台', 'tài': '太',
  'nāi': '奶', 'nái': '奶', 'nǎi': '奶', 'nài': '耐',
  'lāi': '来', 'lái': '来', 'lǎi': '来', 'lài': '来',
  'gāi': '该', 'gái': '该', 'gǎi': '改', 'gài': '盖',
  'kāi': '开', 'kái': '开', 'kǎi': '凯', 'kài': '开',
  'hāi': '嗨', 'hái': '孩', 'hǎi': '海', 'hài': '害',
  // bei/pei/mei/fei/dei/tei/nei/lei/gei/kei/hei
  'bēi': '杯', 'béi': '白', 'běi': '北', 'bèi': '被',
  'pēi': '呸', 'péi': '陪', 'pěi': '呸', 'pèi': '配',
  'mēi': '没', 'méi': '梅', 'měi': '美', 'mèi': '妹',
  'fēi': '飞', 'féi': '肥', 'fěi': '匪', 'fèi': '费',
  'dēi': '得', 'déi': '得', 'děi': '得', 'dèi': '得',
  'tēi': '忒', 'téi': '忒', 'těi': '忒', 'tèi': '忒',
  'nēi': '内', 'néi': '内', 'něi': '内', 'nèi': '内',
  'lēi': '勒', 'léi': '雷', 'lěi': '垒', 'lèi': '类',
  'gēi': '给', 'géi': '给', 'gěi': '给', 'gèi': '给',
  'hēi': '黑', 'héi': '黑', 'hěi': '黑', 'hèi': '黑',
  // bao/pao/mao/dao/tao/nao/lao/gao/kao/hao
  'bāo': '包', 'báo': '薄', 'bǎo': '宝', 'bào': '报',
  'pāo': '抛', 'páo': '袍', 'pǎo': '跑', 'pào': '炮',
  'māo': '猫', 'máo': '毛', 'mǎo': '卯', 'mào': '帽',
  'dāo': '刀', 'dáo': '叨', 'dǎo': '倒', 'dào': '到',
  'tāo': '掏', 'táo': '桃', 'tǎo': '讨', 'tào': '套',
  'nāo': '闹', 'náo': '闹', 'nǎo': '脑', 'nào': '闹',
  'lāo': '捞', 'láo': '劳', 'lǎo': '老', 'lào': '烙',
  'gāo': '高', 'gáo': '高', 'gǎo': '搞', 'gào': '告',
  'kāo': '考', 'káo': '考', 'kǎo': '考', 'kào': '靠',
  'hāo': '蒿', 'háo': '豪', 'hǎo': '好', 'hào': '号',
  // bou/pou/mou/fou/dou/tou/nou/lou/gou/kou/hou
  'dōu': '都', 'dóu': '都', 'dǒu': '斗', 'dòu': '豆',
  'tōu': '偷', 'tóu': '头', 'tǒu': '透', 'tòu': '透',
  'lōu': '搂', 'lóu': '楼', 'lǒu': '搂', 'lòu': '漏',
  'gōu': '沟', 'góu': '沟', 'gǒu': '狗', 'gòu': '够',
  'kōu': '抠', 'kóu': '抠', 'kǒu': '口', 'kòu': '扣',
  'hōu': '齁', 'hóu': '猴', 'hǒu': '吼', 'hòu': '后',
  // jiu/qiu/xiu
  'jiū': '纠', 'jiú': '九', 'jiǔ': '九', 'jiù': '就',
  'qiū': '秋', 'qiú': '球', 'qiǔ': '秋', 'qiù': '秋',
  'xiū': '修', 'xiú': '休', 'xiǔ': '朽', 'xiù': '秀',
  // zhou/chou/shou/rou
  'zhōu': '周', 'zhóu': '轴', 'zhǒu': '肘', 'zhòu': '宙',
  'chōu': '抽', 'chóu': '愁', 'chǒu': '丑', 'chòu': '臭',
  'shōu': '收', 'shóu': '熟', 'shǒu': '手', 'shòu': '受',
  'rōu': '柔', 'róu': '肉', 'rǒu': '肉', 'ròu': '肉',
  // zou/cou/sou/you
  'zōu': '邹', 'zóu': '邹', 'zǒu': '走', 'zòu': '奏',
  'cōu': '凑', 'cóu': '凑', 'cǒu': '凑', 'còu': '凑',
  'sōu': '搜', 'sóu': '搜', 'sǒu': '搜', 'sòu': '嗽',
  'yōu': '优', 'yóu': '由', 'yǒu': '有', 'yòu': '又',

  // ===== 带声调的鼻韵母音节 =====
  // ban/pan/man/fan/dan/tan/nan/lan/gan/kan/han
  'bān': '班', 'bán': '班', 'bǎn': '板', 'bàn': '半',
  'pān': '攀', 'pán': '盘', 'pǎn': '盼', 'pàn': '盼',
  'mān': '满', 'mán': '满', 'mǎn': '满', 'màn': '慢',
  'fān': '翻', 'fán': '烦', 'fǎn': '反', 'fàn': '饭',
  'dān': '单', 'dán': '单', 'dǎn': '胆', 'dàn': '但',
  'tān': '摊', 'tán': '谈', 'tǎn': '坦', 'tàn': '叹',
  'nān': '南', 'nán': '南', 'nǎn': '南', 'nàn': '难',
  'lān': '兰', 'lán': '兰', 'lǎn': '懒', 'làn': '烂',
  'gān': '干', 'gán': '干', 'gǎn': '敢', 'gàn': '干',
  'kān': '看', 'kán': '看', 'kǎn': '砍', 'kàn': '看',
  'hān': '酣', 'hán': '含', 'hǎn': '喊', 'hàn': '汉',
  // ben/pen/men/fen/den/ten/nen/len/gen/ken/hen
  'bēn': '奔', 'bén': '奔', 'běn': '本', 'bèn': '笨',
  'pēn': '喷', 'pén': '盆', 'pěn': '喷', 'pèn': '喷',
  'mēn': '闷', 'mén': '门', 'měn': '闷', 'mèn': '闷',
  'fēn': '分', 'fén': '坟', 'fěn': '粉', 'fèn': '份',
  'gēn': '根', 'gén': '根', 'gěn': '根', 'gèn': '根',
  'kēn': '肯', 'kén': '肯', 'kěn': '肯', 'kèn': '肯',
  'hēn': '很', 'hén': '痕', 'hěn': '很', 'hèn': '恨',
  // bin/pin/min
  'bīn': '宾', 'bín': '宾', 'bǐn': '宾', 'bìn': '殡',
  'pīn': '拼', 'pín': '贫', 'pǐn': '品', 'pìn': '聘',
  'mīn': '民', 'mín': '民', 'mǐn': '敏', 'mìn': '民',
  // dun/tun/lun/gun/kun/hun
  'dūn': '吨', 'dún': '吨', 'dǔn': '吨', 'dùn': '顿',
  'tūn': '吞', 'tún': '吞', 'tǔn': '吞', 'tùn': '吞',
  'lūn': '抡', 'lún': '轮', 'lǔn': '轮', 'lùn': '论',
  'gūn': '滚', 'gún': '滚', 'gǔn': '滚', 'gùn': '棍',
  'kūn': '昆', 'kún': '昆', 'kǔn': '捆', 'kùn': '困',
  'hūn': '婚', 'hún': '魂', 'hǔn': '婚', 'hùn': '混',
  // zhun/chun/shun/run
  'zhūn': '谆', 'zhún': '谆', 'zhǔn': '准', 'zhùn': '准',
  'chūn': '春', 'chún': '纯', 'chǔn': '蠢', 'chùn': '蠢',
  'shūn': '顺', 'shún': '顺', 'shǔn': '顺', 'shùn': '顺',
  'rūn': '润', 'rún': '润', 'rǔn': '润', 'rùn': '润',
  // zun/cun/sun/yun
  'zūn': '尊', 'zún': '尊', 'zǔn': '尊', 'zùn': '尊',
  'cūn': '村', 'cún': '存', 'cǔn': '忖', 'cùn': '寸',
  'sūn': '孙', 'sún': '孙', 'sǔn': '损', 'sùn': '逊',
  // jün/qün/xün (jun/qun/xun)
  'jūn': '军', 'jún': '军', 'jǔn': '均', 'jùn': '俊',
  'qūn': '裙', 'qún': '群', 'qǔn': '裙', 'qùn': '裙',
  'xūn': '熏', 'xún': '寻', 'xǔn': '训', 'xùn': '训',
  // yan/wan/yen/wen
  'yān': '烟', 'yán': '言', 'yǎn': '眼', 'yàn': '燕',
  'wān': '弯', 'wán': '完', 'wǎn': '晚', 'wàn': '万',
  'wēn': '温', 'wén': '文', 'wěn': '稳', 'wèn': '问',
  // jian/qian/xian
  'jiān': '尖', 'jián': '尖', 'jiǎn': '减', 'jiàn': '见',
  'qiān': '千', 'qián': '前', 'qiǎn': '浅', 'qiàn': '欠',
  'xiān': '先', 'xián': '闲', 'xiǎn': '显', 'xiàn': '线',
  // zhuan/chuan/shuan/ruan
  'zhuān': '专', 'zhuán': '专', 'zhuǎn': '转', 'zhuàn': '传',
  'chuān': '穿', 'chuán': '船', 'chuǎn': '喘', 'chuàn': '串',
  'shuān': '栓', 'shuán': '栓', 'shuǎn': '栓', 'shuàn': '栓',
  'ruān': '软', 'ruán': '软', 'ruǎn': '软', 'ruàn': '软',
  // zuan/cuan/suan/yuan
  'zuān': '钻', 'zuán': '钻', 'zuǎn': '钻', 'zuàn': '钻',
  'cuān': '蹿', 'cuán': '攒', 'cuǎn': '蹿', 'cuàn': '窜',
  'suān': '酸', 'suán': '酸', 'suǎn': '酸', 'suàn': '算',
  'yuān': '渊', 'yuán': '圆', 'yuǎn': '远', 'yuàn': '愿',

  // ===== 带声调的后鼻韵母音节 =====
  // bang/pang/mang/fang/dang/tang/nang/lang/gang/kang/hang
  'bāng': '帮', 'báng': '帮', 'bǎng': '绑', 'bàng': '棒',
  'pāng': '乓', 'páng': '旁', 'pǎng': '胖', 'pàng': '胖',
  'māng': '忙', 'máng': '忙', 'mǎng': '莽', 'màng': '忙',
  'fāng': '方', 'fáng': '房', 'fǎng': '访', 'fàng': '放',
  'dāng': '当', 'dáng': '当', 'dǎng': '党', 'dàng': '当',
  'tāng': '汤', 'táng': '糖', 'tǎng': '躺', 'tàng': '烫',
  'nāng': '囊', 'náng': '囊', 'nǎng': '囊', 'nàng': '囊',
  'lāng': '狼', 'láng': '狼', 'lǎng': '朗', 'làng': '浪',
  'gāng': '刚', 'gáng': '刚', 'gǎng': '岗', 'gàng': '钢',
  'kāng': '康', 'káng': '康', 'kǎng': '扛', 'kàng': '抗',
  'hāng': '夯', 'háng': '行', 'hǎng': '夯', 'hàng': '行',
  // beng/peng/meng/feng/deng/teng/neng/leng/geng/keng/heng
  'bēng': '崩', 'béng': '崩', 'běng': '崩', 'bèng': '蹦',
  'pēng': '烹', 'péng': '朋', 'pěng': '捧', 'pèng': '碰',
  'mēng': '蒙', 'méng': '盟', 'měng': '猛', 'mèng': '梦',
  'fēng': '风', 'féng': '逢', 'fěng': '讽', 'fèng': '奉',
  'dēng': '灯', 'déng': '灯', 'děng': '等', 'dèng': '凳',
  'tēng': '疼', 'téng': '疼', 'těng': '疼', 'tèng': '疼',
  'nēng': '能', 'néng': '能', 'něng': '能', 'nèng': '能',
  'lēng': '冷', 'léng': '棱', 'lěng': '冷', 'lèng': '愣',
  'gēng': '更', 'géng': '更', 'gěng': '耿', 'gèng': '更',
  'kēng': '坑', 'kéng': '坑', 'kěng': '坑', 'kèng': '坑',
  'hēng': '哼', 'héng': '恒', 'hěng': '哼', 'hèng': '横',
  // bing/ping/ming/ding/ting/ning/ling/jing/qing/xing/ying
  'bīng': '冰', 'bíng': '冰', 'bǐng': '饼', 'bìng': '病',
  'pīng': '乒', 'píng': '平', 'pǐng': '平', 'pìng': '平',
  'mīng': '明', 'míng': '明', 'mǐng': '明', 'mìng': '命',
  'dīng': '丁', 'díng': '顶', 'dǐng': '顶', 'dìng': '定',
  'tīng': '听', 'tíng': '停', 'tǐng': '挺', 'tìng': '听',
  'nīng': '宁', 'níng': '宁', 'nǐng': '宁', 'nìng': '宁',
  'līng': '拎', 'líng': '灵', 'lǐng': '领', 'lìng': '另',
  'jīng': '京', 'jíng': '精', 'jǐng': '井', 'jìng': '静',
  'qīng': '清', 'qíng': '情', 'qǐng': '请', 'qìng': '庆',
  'xīng': '星', 'xíng': '行', 'xǐng': '醒', 'xìng': '姓',
  'yīng': '应', 'yíng': '营', 'yǐng': '影', 'yìng': '硬',
  // dong/tong/nong/long/gong/kong/hong
  'dōng': '东', 'dóng': '东', 'dǒng': '懂', 'dòng': '动',
  'tōng': '通', 'tóng': '同', 'tǒng': '筒', 'tòng': '痛',
  'nōng': '农', 'nóng': '农', 'nǒng': '农', 'nòng': '弄',
  'lōng': '隆', 'lóng': '龙', 'lǒng': '拢', 'lòng': '弄',
  'gōng': '工', 'góng': '工', 'gǒng': '拱', 'gòng': '共',
  'kōng': '空', 'kóng': '空', 'kǒng': '恐', 'kòng': '空',
  'hōng': '轰', 'hóng': '红', 'hǒng': '哄', 'hòng': '哄',
  // zhong/chong/rong
  'zhōng': '钟', 'zhóng': '钟', 'zhǒng': '种', 'zhòng': '中',
  'chōng': '冲', 'chóng': '虫', 'chǒng': '宠', 'chòng': '冲',
  'rōng': '容', 'róng': '容', 'rǒng': '容', 'ròng': '容',
  // zong/cong/song/yong
  'zōng': '宗', 'zóng': '宗', 'zǒng': '总', 'zòng': '纵',
  'cōng': '葱', 'cóng': '从', 'cǒng': '聪', 'còng': '从',
  'sōng': '松', 'sóng': '松', 'sǒng': '耸', 'sòng': '送',
  'yōng': '拥', 'yóng': '拥', 'yǒng': '永', 'yòng': '用',
  // jiong/qiong/xiong
  'jiōng': '窘', 'jióng': '窘', 'jiǒng': '窘', 'jiòng': '窘',
  'qiōng': '穷', 'qióng': '穷', 'qiǒng': '穷', 'qiòng': '穷',
  'xiōng': '兄', 'xióng': '熊', 'xiǒng': '熊', 'xiòng': '熊',
  // yang/wang
  'yāng': '央', 'yáng': '羊', 'yǎng': '养', 'yàng': '样',
  'wāng': '汪', 'wáng': '王', 'wǎng': '往', 'wàng': '忘',
  // jiang/qiang/xiang
  'jiāng': '江', 'jiáng': '江', 'jiǎng': '讲', 'jiàng': '将',
  'qiāng': '枪', 'qiáng': '强', 'qiǎng': '抢', 'qiàng': '枪',
  'xiāng': '香', 'xiáng': '详', 'xiǎng': '想', 'xiàng': '向',
  // zhuang/chuang/shuang
  'zhuāng': '庄', 'zhuáng': '庄', 'zhuǎng': '装', 'zhuàng': '壮',
  'chuāng': '窗', 'chuáng': '床', 'chuǎng': '闯', 'chuàng': '创',
  'shuāng': '双', 'shuáng': '双', 'shuǎng': '爽', 'shuàng': '双',
  // guang/kuang/huang
  'guāng': '光', 'guáng': '光', 'guǎng': '广', 'guàng': '逛',
  'kuāng': '筐', 'kuáng': '狂', 'kuǎng': '筐', 'kuàng': '况',
  'huāng': '荒', 'huáng': '黄', 'huǎng': '谎', 'huàng': '晃',

  // ===== 复韵母（带声调） =====
  'āi': '哀', 'ái': '挨', 'ǎi': '矮', 'ài': '爱',
  'ēi': '诶', 'éi': '诶', 'ěi': '诶', 'èi': '诶',
  'uī': '威', 'uí': '围', 'uǐ': '尾', 'uì': '位',
  'āo': '凹', 'áo': '熬', 'ǎo': '袄', 'ào': '奥',
  'ōu': '欧', 'óu': '欧', 'ǒu': '偶', 'òu': '欧',
  'iū': '优', 'iú': '油', 'iǔ': '有', 'iù': '又',
  'iē': '耶', 'ié': '爷', 'iě': '也', 'iè': '夜',
  'üē': '约', 'üé': '约', 'üě': '约', 'üè': '月',
  'ān': '安', 'án': '安', 'ǎn': '俺', 'àn': '按',
  'ēn': '恩', 'én': '恩', 'ěn': '恩', 'èn': '恩',
  'īn': '因', 'ín': '银', 'ǐn': '引', 'ìn': '印',
  'ūn': '温', 'ún': '文', 'ǔn': '稳', 'ùn': '问',
  'ǖn': '晕', 'ǘn': '云', 'ǚn': '允', 'ǜn': '运',
  'āng': '昂', 'áng': '昂', 'ǎng': '昂', 'àng': '盎',
  'ēng': '鞥', 'éng': '鞥', 'ěng': '鞥', 'èng': '鞥',
  'īng': '英', 'íng': '营', 'ǐng': '影', 'ìng': '硬',
  'ōng': '嗡', 'óng': '翁', 'ǒng': '翁', 'òng': '瓮',

  // ===== 复韵母（无声调） =====
  'ai': '爱', 'ei': '诶', 'ui': '威', 'ao': '凹', 'ou': '欧', 'iu': '优',
  'ie': '耶', 'üe': '月', 'er': '耳',
  'an': '安', 'en': '恩', 'in': '因', 'un': '温', 'ün': '晕',
  'ang': '昂', 'eng': '鞥', 'ing': '英', 'ong': '嗡',

  // ===== 无声调的完整音节（用于无标调拼音） =====
  'ba': '巴', 'pa': '趴', 'ma': '妈', 'fa': '发', 'da': '大', 'ta': '他',
  'na': '那', 'la': '拉', 'ga': '嘎', 'ka': '咖', 'ha': '哈',
  'bo': '波', 'po': '坡', 'mo': '摸', 'fo': '佛',
  'de': '得', 'te': '特', 'ne': '呢', 'le': '勒',
  'ge': '哥', 'ke': '科', 'he': '喝',
  'ji': '机', 'qi': '七', 'xi': '西',
  'bu': '不', 'pu': '铺', 'mu': '母', 'fu': '夫', 'du': '都', 'tu': '突',
  'nu': '奴', 'lu': '路', 'gu': '姑', 'ku': '哭', 'hu': '呼',
  'ju': '居', 'qu': '区', 'xu': '虚',
  'nv': '女', 'lv': '驴', 'nü': '女', 'lü': '驴',
  'zhu': '猪', 'chu': '出', 'shu': '书', 'ru': '如',
  'zu': '租', 'cu': '粗', 'su': '苏',
  'ya': '压', 'wa': '挖', 'yo': '哟', 'wo': '窝',
  'yai': '崖', 'wai': '外', 'wei': '为', 'you': '又',
  'bai': '白', 'pai': '拍', 'mai': '买', 'dai': '代', 'tai': '太',
  'nai': '奶', 'lai': '来', 'gai': '盖', 'kai': '开', 'hai': '海',
  'bei': '被', 'pei': '配', 'mei': '美', 'fei': '飞', 'nei': '内',
  'lei': '类', 'gei': '给', 'hei': '黑',
  'bao': '包', 'pao': '跑', 'mao': '猫', 'dao': '到', 'tao': '套',
  'nao': '脑', 'lao': '老', 'gao': '高', 'kao': '考', 'hao': '好',
  'dou': '豆', 'tou': '头', 'lou': '楼', 'gou': '够', 'kou': '口', 'hou': '后',
  'jiu': '就', 'qiu': '球', 'xiu': '秀',
  'zhou': '周', 'chou': '愁', 'shou': '手', 'rou': '肉',
  'zou': '走', 'cou': '凑', 'sou': '搜',
  'ban': '班', 'pan': '盘', 'man': '满', 'fan': '饭', 'dan': '但', 'tan': '谈',
  'nan': '南', 'lan': '兰', 'gan': '干', 'kan': '看', 'han': '汉',
  'ben': '本', 'pen': '盆', 'men': '门', 'fen': '分', 'gen': '根',
  'ken': '肯', 'hen': '很',
  'bin': '宾', 'pin': '品', 'min': '民',
  'dun': '顿', 'tun': '吞', 'lun': '论', 'gun': '棍', 'kun': '困', 'hun': '婚',
  'zhun': '准', 'chun': '春', 'shun': '顺', 'run': '润',
  'zun': '尊', 'cun': '村', 'sun': '孙',
  'jun': '军', 'qun': '裙', 'xun': '训',
  'yan': '烟', 'wan': '万', 'wen': '问',
  'jian': '见', 'qian': '前', 'xian': '先',
  'zhuan': '传', 'chuan': '船', 'shuan': '栓', 'ruan': '软',
  'zuan': '钻', 'cuan': '窜', 'suan': '算',
  'bang': '帮', 'pang': '胖', 'mang': '忙', 'fang': '放', 'dang': '当', 'tang': '糖',
  'nang': '囊', 'lang': '浪', 'gang': '刚', 'kang': '抗', 'hang': '行',
  'beng': '蹦', 'peng': '碰', 'meng': '梦', 'feng': '风', 'deng': '灯', 'teng': '疼',
  'neng': '能', 'leng': '冷', 'geng': '更', 'keng': '坑', 'heng': '横',
  'bing': '病', 'ping': '平', 'ming': '明', 'ding': '定', 'ting': '听',
  'ning': '宁', 'ling': '领', 'jing': '静', 'qing': '请', 'xing': '姓',
  'dong': '动', 'tong': '同', 'nong': '农', 'long': '龙', 'gong': '工', 'kong': '空', 'hong': '红',
  'zhong': '中', 'chong': '虫', 'rong': '容',
  'zong': '总', 'cong': '从', 'song': '送', 'yong': '用',
  'jiong': '窘', 'qiong': '穷', 'xiong': '熊',
  'yang': '羊', 'wang': '王',
  'jiang': '江', 'qiang': '强', 'xiang': '向',
  'zhuang': '壮', 'chuang': '创', 'shuang': '双',
  'guang': '光', 'kuang': '狂', 'huang': '黄',

  // ===== 声母（多字母优先） =====
  'zh': '知', 'ch': '吃', 'sh': '诗',

  // ===== 单韵母（带声调） =====
  'ā': '啊', 'á': '啊', 'ǎ': '啊', 'à': '啊',
  'ō': '喔', 'ó': '哦', 'ǒ': '哦', 'ò': '哦',
  'ē': '鹅', 'é': '鹅', 'ě': '鹅', 'è': '鹅',
  'ī': '衣', 'í': '衣', 'ǐ': '衣', 'ì': '衣',
  'ū': '乌', 'ú': '乌', 'ǔ': '乌', 'ù': '乌',
  'ǖ': '鱼', 'ǘ': '鱼', 'ǚ': '鱼', 'ǜ': '鱼',

  // ===== 单韵母（无声调） =====
  'a': '啊', 'o': '哦', 'e': '鹅', 'i': '衣', 'u': '乌', 'ü': '鱼',

  // ===== 声母（单字母） =====
  'b': '波', 'p': '坡', 'm': '摸', 'f': '佛',
  'd': '得', 't': '特', 'n': '讷', 'l': '勒',
  'g': '哥', 'k': '科', 'h': '喝',
  'j': '基', 'q': '七', 'x': '西',
  'r': '日', 'z': '资', 'c': '次', 's': '思',
  'y': '衣', 'w': '乌',
}

// 按长度降序排列的拼音键，用于优先匹配长音节
const PINYIN_KEYS_SORTED = Object.keys(PINYIN_MAP).sort((a, b) => b.length - a.length)

// ===== 语音列表异步加载管理 =====
// Chrome/Electron 中 speechSynthesis.getVoices() 首次调用可能返回空数组，
// 需要监听 voiceschanged 事件并等待语音加载完成，否则无法选到中文语音。
let voicesCache: SpeechSynthesisVoice[] = []
let voicesLoaded = false
let voicesLoadPromise: Promise<SpeechSynthesisVoice[]> | null = null

function updateVoicesCache(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const voices = speechSynthesis.getVoices()
  if (voices.length > 0) {
    voicesCache = voices
    voicesLoaded = true
  }
}

// 初始化语音加载（模块加载时立即执行，尽早触发 voiceschanged 监听）
function initVoicesLoader(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  updateVoicesCache()
  // voiceschanged 事件在语音列表异步加载完成时触发
  speechSynthesis.addEventListener('voiceschanged', updateVoicesCache)
}

// 等待语音列表加载完成，返回可用的语音数组
function waitForVoices(timeout = 1500): Promise<SpeechSynthesisVoice[]> {
  if (voicesLoaded && voicesCache.length > 0) {
    return Promise.resolve(voicesCache)
  }
  if (voicesLoadPromise) {
    return voicesLoadPromise
  }
  voicesLoadPromise = new Promise<SpeechSynthesisVoice[]>((resolve) => {
    let resolved = false
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let handler: (() => void) | null = null

    const cleanup = () => {
      if (handler && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        speechSynthesis.removeEventListener('voiceschanged', handler)
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
    }

    const finish = () => {
      if (resolved) return
      resolved = true
      cleanup()
      voicesLoadPromise = null
      resolve(voicesCache)
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      updateVoicesCache()
      if (voicesLoaded && voicesCache.length > 0) {
        finish()
        return
      }
      handler = () => {
        updateVoicesCache()
        if (voicesCache.length > 0) {
          finish()
        }
      }
      speechSynthesis.addEventListener('voiceschanged', handler)
    }
    // 超时兜底：即使没有语音也继续执行（避免永久阻塞）
    timeoutId = setTimeout(finish, timeout)
  })
  return voicesLoadPromise
}

// 模块加载时立即初始化语音监听
initVoicesLoader()

// ===== 角色语气配置 =====
export type SpeechRole = 'narrator' | 'teacher' | 'student' | 'child' | 'system' | 'mother' | 'father'

interface RoleConfig {
  rate: number    // 语速
  pitch: number   // 音调
  volume: number  // 音量
  // 角色性别提示（用于选择不同人声）
  gender?: 'male' | 'female' | 'neutral'
}

const ROLE_CONFIGS: Record<SpeechRole, RoleConfig> = {
  // 旁白：平稳、适中
  narrator: { rate: 0.85, pitch: 1.0, volume: 1.0, gender: 'neutral' },
  // 老师：清晰、稍慢、稳重（偏男声）
  teacher: { rate: 0.8, pitch: 0.95, volume: 1.0, gender: 'male' },
  // 学生：活泼、稍快（偏女声）
  student: { rate: 0.9, pitch: 1.15, volume: 0.95, gender: 'female' },
  // 小朋友：天真、高音、慢速（女声）
  child: { rate: 0.75, pitch: 1.3, volume: 0.9, gender: 'female' },
  // 妈妈：温柔、稍慢（女声）
  mother: { rate: 0.82, pitch: 1.2, volume: 1.0, gender: 'female' },
  // 爸爸：稳重、低沉（男声）
  father: { rate: 0.82, pitch: 0.85, volume: 1.0, gender: 'male' },
  // 系统：中性（用于反派/特殊角色）
  system: { rate: 0.9, pitch: 1.0, volume: 1.0, gender: 'neutral' },
}

// ===== 对话角色名映射到 SpeechRole =====
// 将对话文本中的中文角色名映射到语音角色配置
const DIALOGUE_ROLE_MAP: Record<string, SpeechRole> = {
  // 老师
  '老师': 'teacher',
  '教师': 'teacher',
  'teacher': 'teacher',
  // 家长
  '妈妈': 'mother',
  '妈妈妈': 'mother',
  '父亲': 'father',
  '爸爸': 'father',
  'mother': 'mother',
  'father': 'father',
  'mom': 'mother',
  'dad': 'father',
  // 学生/孩子
  '小明': 'child',
  '小红': 'child',
  '孩子': 'child',
  '小朋友': 'child',
  '学生': 'student',
  '同学': 'student',
  '同学们': 'student',
  'student': 'student',
  'child': 'child',
  // 故事角色（三只小猪）
  '小猪1': 'child',
  '小猪2': 'student',
  '小猪3': 'child',
  '小猪': 'child',
  // 故事角色（龟兔赛跑）
  '兔子': 'student',
  '乌龟': 'child',
  // 故事角色（大灰狼等反派）
  '大灰狼': 'system',
  '狼': 'system',
  'wolf': 'system',
  // 社会角色
  '店员': 'system',
  '导游': 'narrator',
  '售货员': 'system',
  // 旁白/合唱
  '旁白': 'narrator',
  '合唱': 'narrator',
  '观众': 'narrator',
  'narrator': 'narrator',
}

export function useSpeech() {
  const isSpeaking = ref(false)
  const isSupported = ref(typeof window !== 'undefined' && 'speechSynthesis' in window)
  let currentUtterance: SpeechSynthesisUtterance | null = null
  // 用于取消异步等待中的 speak（每次 speak/stop 递增，await 后检查是否过期）
  let speakGeneration = 0

  // 获取设置store（统一语音速度设置）
  let settingsStore: ReturnType<typeof useSettingsStore> | null = null
  try {
    settingsStore = useSettingsStore()
  } catch (e) {
    // 在非组件上下文中调用时忽略
    settingsStore = null
  }

  // 获取统一语音速度（来自设置store）
  function getUnifiedRate(): number | null {
    if (!settingsStore) return null
    const rate = settingsStore.settings.speechRate
    // 0 表示使用默认值，其他值表示用户自定义
    return rate && rate > 0 ? rate : null
  }

  // 获取中文语音（使用缓存，匹配更全面）
  function getChineseVoice(): SpeechSynthesisVoice | null {
    if (!isSupported.value) return null
    const voices = voicesCache.length > 0 ? voicesCache : speechSynthesis.getVoices()
    if (voices.length === 0) return null
    // 按优先级匹配中文语音，优先选择本地服务语音（离线可用）
    return voices.find(v => v.lang === 'zh-CN' && v.localService)
      || voices.find(v => v.lang === 'zh-CN')
      || voices.find(v => v.lang.startsWith('zh-CN'))
      || voices.find(v => v.lang === 'zh-Hans')
      || voices.find(v => v.lang.startsWith('zh-Hans'))
      || voices.find(v => v.lang === 'zh-Hant' || v.lang === 'zh-TW')
      || voices.find(v => v.lang.startsWith('zh-Hant') || v.lang.startsWith('zh-TW'))
      || voices.find(v => v.lang === 'zh' || v.lang === 'zh_')
      || voices.find(v => v.lang.startsWith('zh'))
      || voices.find(v => /chinese|中文|汉语|mandarin|cantonese/i.test(v.name))
      || null
  }

  // 获取英文语音（使用缓存）
  function getEnglishVoice(): SpeechSynthesisVoice | null {
    if (!isSupported.value) return null
    const voices = voicesCache.length > 0 ? voicesCache : speechSynthesis.getVoices()
    if (voices.length === 0) return null
    return voices.find(v => v.lang === 'en-US' && v.localService)
      || voices.find(v => v.lang === 'en-US')
      || voices.find(v => v.lang.startsWith('en-US'))
      || voices.find(v => v.lang.startsWith('en'))
      || null
  }

  // 按角色性别获取英文语音（实现"不同人声"）
  // 通过voice名称中的性别关键词启发式匹配，尽量为不同角色选不同voice
  function getEnglishVoiceByRole(role: SpeechRole): SpeechSynthesisVoice | null {
    if (!isSupported.value) return null
    const voices = voicesCache.length > 0 ? voicesCache : speechSynthesis.getVoices()
    if (voices.length === 0) return null

    const roleConfig = ROLE_CONFIGS[role]
    const gender = roleConfig.gender || 'neutral'

    // 英文voice名称中常见的男/女声关键词
    const femaleKeywords = /female|woman|samantha|victoria|karen|moira|tessa|fiona|veena|amelie|anna|google uk english female|zira|hazel|catherine/i
    const maleKeywords = /male|man|daniel|alex|fred|tom|david|oliver|aaron|google uk english male|george|james|mark/i

    // 筛选英文voice
    const enVoices = voices.filter(v => v.lang.startsWith('en'))
    if (enVoices.length === 0) return getEnglishVoice()

    // 按性别优先匹配
    if (gender === 'female') {
      // 优先选女声voice
      const femaleVoice = enVoices.find(v => femaleKeywords.test(v.name))
      if (femaleVoice) return femaleVoice
      // 次选：非明确男声的voice
      const nonMaleVoice = enVoices.find(v => !maleKeywords.test(v.name))
      if (nonMaleVoice) return nonMaleVoice
    } else if (gender === 'male') {
      // 优先选男声voice
      const maleVoice = enVoices.find(v => maleKeywords.test(v.name))
      if (maleVoice) return maleVoice
      // 次选：非明确女声的voice
      const nonFemaleVoice = enVoices.find(v => !femaleKeywords.test(v.name))
      if (nonFemaleVoice) return nonFemaleVoice
    }

    // 中性或未匹配到：返回默认英文voice
    return enVoices.find(v => v.lang === 'en-US' && v.localService)
      || enVoices.find(v => v.lang === 'en-US')
      || enVoices[0]
  }

  // 按角色性别获取中文语音（实现"不同人声"）
  function getChineseVoiceByRole(role: SpeechRole): SpeechSynthesisVoice | null {
    if (!isSupported.value) return null
    const voices = voicesCache.length > 0 ? voicesCache : speechSynthesis.getVoices()
    if (voices.length === 0) return null

    const roleConfig = ROLE_CONFIGS[role]
    const gender = roleConfig.gender || 'neutral'

    // 中文voice名称中常见的男/女声关键词
    const femaleKeywords = /female|woman|女|xiaoxiao|yaoyao|tingting|huihui|kangkang/i
    const maleKeywords = /male|man|男|yunxi|yunyang/i

    // 筛选中文voice
    const zhVoices = voices.filter(v => v.lang.startsWith('zh'))
    if (zhVoices.length === 0) return getChineseVoice()

    // 按性别优先匹配
    if (gender === 'female') {
      const femaleVoice = zhVoices.find(v => femaleKeywords.test(v.name))
      if (femaleVoice) return femaleVoice
    } else if (gender === 'male') {
      const maleVoice = zhVoices.find(v => maleKeywords.test(v.name))
      if (maleVoice) return maleVoice
    }

    // 默认中文voice
    return zhVoices.find(v => v.lang === 'zh-CN' && v.localService)
      || zhVoices.find(v => v.lang === 'zh-CN')
      || zhVoices[0]
  }

  // 解析对话文本，提取角色名和台词
  // 格式："角色名: 台词" 或 "角色名：台词"
  interface DialogueLine {
    role: string           // 原始角色名
    speechRole: SpeechRole // 映射后的语音角色
    text: string           // 台词内容
    lang: 'zh' | 'en'      // 单行语言
  }

  function parseDialogue(text: string, defaultLang: 'zh' | 'en' = 'zh'): DialogueLine[] {
    const lines = text.trim().split('\n')
    const result: DialogueLine[] = []

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed) continue

      // 匹配 "角色名: 台词" 或 "角色名：台词"
      const match = trimmed.match(/^(.+?)[:：]\s*(.+)$/)
      if (match) {
        const roleName = match[1].trim()
        const lineText = match[2].trim()
        // 映射角色名到SpeechRole
        const speechRole: SpeechRole = DIALOGUE_ROLE_MAP[roleName] || 'narrator'
        // 检测单行语言：如果主要是英文字母则为英语
        const isEnglish = /^[A-Za-z\s!?,.'\d\-]+$/.test(lineText) && /[a-zA-Z]/.test(lineText)
        result.push({
          role: roleName,
          speechRole,
          text: lineText,
          lang: isEnglish ? 'en' : defaultLang,
        })
      } else {
        // 没有角色名的行，作为旁白
        const isEnglish = /^[A-Za-z\s!?,.'\d\-]+$/.test(trimmed) && /[a-zA-Z]/.test(trimmed)
        result.push({
          role: '',
          speechRole: 'narrator',
          text: trimmed,
          lang: isEnglish ? 'en' : defaultLang,
        })
      }
    }
    return result
  }

  // 判断文本是否主要是拼音（含连字符、分隔符等拼音常用符号）
  function isPinyinText(text: string): boolean {
    const trimmed = text.trim()
    if (!trimmed) return false
    // 放宽匹配：允许拼音字母、带声调字母、空格、逗号、连字符、等号、分号等
    if (/^[a-zA-Züǖǘǚǜāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s,，、;；\-=·]+$/.test(trimmed)) {
      // 至少包含一个拼音字母（不仅仅是符号）
      return /[a-zA-Züǖǘǚǜāáǎàēéěèīíǐìōóǒòūúǔù]/.test(trimmed)
    }
    return false
  }

  // 将拼音文本转换为中文读音文本
  // 例如："a o e" → "啊、哦、鹅"
  // 例如："b-a-ba" → "波-啊-巴"
  // 例如："zh ch sh" → "知、吃、诗"
  function convertPinyinToChinese(text: string): string {
    // 先按分隔符拆分，尝试逐个匹配拼音
    const parts = text.trim().split(/([\s,，、;；\-=·])/g)
    const convertedParts: string[] = []
    let hasConversion = false

    for (const part of parts) {
      // 保留分隔符原样
      if (/^[\s,，、;；\-=·]+$/.test(part) || part === '') {
        convertedParts.push(part)
        continue
      }

      // 尝试匹配拼音键（按长度降序，优先匹配长音节）
      let remaining = part
      let converted = ''
      let foundAny = false

      while (remaining.length > 0) {
        let matched = false
        for (const key of PINYIN_KEYS_SORTED) {
          if (remaining.toLowerCase().startsWith(key.toLowerCase())) {
            converted += PINYIN_MAP[key]
            remaining = remaining.slice(key.length)
            matched = true
            foundAny = true
            break
          }
        }
        if (!matched) {
          // 无法匹配的字符保留原样
          converted += remaining[0]
          remaining = remaining.slice(1)
        }
      }

      if (foundAny) {
        convertedParts.push(converted)
        hasConversion = true
      } else {
        convertedParts.push(part)
      }
    }

    // 如果没有任何转换，返回原文
    if (!hasConversion) return text

    return convertedParts.join('')
  }

  // 判断文本是否包含拼音（混合中英文时）
  function hasPinyin(text: string): boolean {
    // 检测是否包含拼音字符（带声调的字母或单韵母组合）
    return /[üǖǘǚǜāáǎàēéěèīíǐìōóǒòūúǔù]/.test(text)
      || /\b[bpmfdtnlgkhjqxzcsryw]+\b/i.test(text)
  }

  // 智能处理文本中的拼音并将其转换为中文读音
  // 处理混合中英文+拼音文本，将拼音部分转换为中文读音
  function smartConvertPinyin(text: string): string {
    // 纯拼音文本：直接转换
    if (isPinyinText(text)) {
      return convertPinyinToChinese(text)
    }

    // 混合文本：检测并转换拼音段落
    // 策略：将文本按中文字符/标点分割，检查每个片段是否是拼音
    let result = text
    // 先转换带声调的拼音（明确标识，带声调的几乎一定是拼音）
    if (/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(result)) {
      result = convertPinyinToChinese(result)
    }
    // 再处理纯小写字母片段（可能是拼音，包括单字母如 a o e）
    // 严格限制：只转换全小写、且能被完全解析为拼音音节的片段
    // 避免误转换英文单词（如 Hello、Good morning 等含大写字母的不会被匹配）
    // 注意：{1,} 而非 {2,}，确保单字母拼音（a o e i u ü）也能被转换
    result = result.replace(/(?<![a-zA-Z])([a-züǖǘǚǜāáǎàēéěèīíǐìōóǒòūúǔù]+)(?![a-zA-Z])/g, (match) => {
      // 排除包含大写字母的片段（英文单词通常首字母大写）
      if (/[A-Z]/.test(match)) return match
      // 单字母：只有是有效拼音字母时才转换（v 不是拼音字母，跳过）
      if (match.length === 1) {
        const lower = match.toLowerCase()
        return PINYIN_MAP[lower] ? PINYIN_MAP[lower] : match
      }
      // 多字母：只有纯小写且能被完全解析为拼音音节时才转换
      if (isPinyinText(match)) {
        return convertPinyinToChinese(match)
      }
      return match
    })
    return result
  }

  // 清洗 emoji 用于 TTS 朗读
  // 将连续重复的 emoji 聚合为"X个[名称]"格式，避免 TTS 逐个朗读
  // 例如：⭐⭐⭐⭐⭐ → "5颗星星"，🌸🌸🌸 → "3朵花"
  const EMOJI_NAME_MAP: Record<string, string> = {
    '⭐': '星星', '🌟': '星星', '✨': '闪光',
    '🌸': '花', '🌺': '花', '🌻': '向日葵', '🌹': '玫瑰', '🌷': '郁金香',
    '🍎': '苹果', '🍌': '香蕉', '🍇': '葡萄', '🍊': '橘子', '🍓': '草莓',
    '🍐': '梨', '🍑': '桃子', '🍉': '西瓜', '🍋': '柠檬',
    '🐶': '小狗', '🐱': '小猫', '🐰': '兔子', '🐻': '熊', '🐼': '熊猫',
    '🦊': '狐狸', '🐸': '青蛙', '🐷': '小猪', '🐮': '小牛', '🐔': '小鸡',
    '🐦': '小鸟', '🦆': '鸭子', '🐢': '乌龟', '🐟': '鱼',
    '🔴': '红圆', '🟠': '橙圆', '🟡': '黄圆', '🟢': '绿圆', '🔵': '蓝圆', '🟣': '紫圆',
    '❤️': '爱心', '💛': '黄心', '💚': '绿心', '💙': '蓝心', '💜': '紫心',
    '🔺': '三角形', '🔻': '倒三角形', '⭕': '圆圈', '🔲': '方块', '⚪': '白圆',
    '⚽': '球', '🏀': '篮球', '🎈': '气球', '🎁': '礼物', '🍭': '棒棒糖',
    '🍦': '冰淇淋', '🍰': '蛋糕', '🍪': '饼干', '🥕': '胡萝卜', '🌽': '玉米',
    '🥚': '鸡蛋', '🍞': '面包', '🧀': '奶酪',
    '🚗': '汽车', '🚕': '出租车', '🚌': '公交车', '✈️': '飞机', '🚲': '自行车',
    '⛵': '帆船', '🚂': '火车',
    '🏠': '房子', '🏫': '学校', '🌳': '树', '🌲': '松树', '🌴': '棕榈树',
    '☀️': '太阳', '🌙': '月亮', '☁️': '云', '⭐️': '星星',
    '1️⃣': '1', '2️⃣': '2', '3️⃣': '3', '4️⃣': '4', '5️⃣': '5',
    '6️⃣': '6', '7️⃣': '7', '8️⃣': '8', '9️⃣': '9', '0️⃣': '0',
  }

  // 量词映射
  const EMOJI_MEASURE_MAP: Record<string, string> = {
    '⭐': '颗', '🌟': '颗', '🌸': '朵', '🌺': '朵', '🌹': '朵', '🌷': '朵', '🌻': '朵',
    '🍎': '个', '🍌': '根', '🍇': '串', '🍊': '个', '🍓': '颗',
    '🐶': '只', '🐱': '只', '🐰': '只', '🐻': '只', '🐼': '只',
    '🦊': '只', '🐸': '只', '🐷': '只', '🐮': '只', '🐔': '只',
    '🐦': '只', '🦆': '只', '🐢': '只', '🐟': '条',
    '⚽': '个', '🏀': '个', '🎈': '个', '🎁': '个',
    '🌳': '棵', '🌲': '棵', '🌴': '棵',
  }

  function cleanEmojiForTTS(text: string): string {
    let result = text
    // 匹配连续重复的同一个 emoji（2个及以上），支持可选的变体选择符（U+FE0F）
    // emoji 范围包括：
    //   \u{1F300}-\u{1F9FF}  补充表情符号及象形文字
    //   \u{2600}-\u{27BF}    杂项符号（含✨等）
    //   \u{2B00}-\u{2BFF}    杂项符号和箭头（含⭐ U+2B50）
    //   \u{FE0F}             变体选择符16（emoji 后常跟，如⭐️）
    result = result.replace(
      /([\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}])\u{FE0F}?(?:\1\u{FE0F}?)+/gu,
      (match, emoji) => {
        // 用 code point 计数，避免 UTF-16 代理对导致非 BMP emoji 计数翻倍
        const count = [...match].filter(c => c === emoji).length
        const name = EMOJI_NAME_MAP[emoji] || ''
        const measure = EMOJI_MEASURE_MAP[emoji] || '个'
        if (name) {
          return `${count}${measure}${name}`
        }
        return `${count}个`
      }
    )

    // 处理单个 emoji（替换为中文名称或移除）
    result = result.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/gu, (emoji) => {
      return EMOJI_NAME_MAP[emoji] || ''
    })

    // 清理多余的空格
    result = result.replace(/\s+/g, ' ').trim()
    return result
  }

  // 朗读文本（增强版：支持角色和拼音智能处理）
  // rate 参数现在作为"覆盖值"，如果未提供则使用统一设置或角色默认值
  // 异步函数：会等待语音列表加载完成后再选择中文语音，确保拼音转中文后能正确朗读
  async function speak(
    text: string,
    lang: 'zh' | 'en' = 'zh',
    rate?: number,
    role?: SpeechRole
  ) {
    if (!isSupported.value) return
    stop()

    // 生成唯一代次，用于 await 后判断是否被取消
    const generation = ++speakGeneration

    // 等待语音列表加载完成（关键修复：首次调用时 voices 可能为空）
    await waitForVoices()

    // 如果在等待期间被取消（stop 或新的 speak），则放弃本次朗读
    if (generation !== speakGeneration) return

    // 拼音智能处理：智能检测并转换拼音
    let speakText = text
    let speakLang = lang
    if (lang === 'zh') {
      speakText = smartConvertPinyin(text)
      // 清洗 emoji：将连续重复的 emoji 聚合为"X颗星星"等格式，避免 TTS 逐个朗读
      speakText = cleanEmojiForTTS(speakText)
      speakLang = 'zh'
    }

    const utterance = new SpeechSynthesisUtterance(speakText)
    utterance.lang = speakLang === 'zh' ? 'zh-CN' : 'en-US'

    // 语音速度优先级：显式传入的rate > 统一设置 > 角色默认值
    const roleConfig = role ? ROLE_CONFIGS[role] : ROLE_CONFIGS.narrator
    const unifiedRate = getUnifiedRate()
    if (rate !== undefined && rate !== 0.85) {
      // 显式传入的rate（保持向后兼容，但0.85是默认值标记）
      utterance.rate = rate
    } else if (unifiedRate !== null) {
      // 统一设置
      utterance.rate = unifiedRate
    } else {
      // 角色默认值
      utterance.rate = roleConfig.rate
    }
    utterance.pitch = roleConfig.pitch
    utterance.volume = roleConfig.volume

    // 选择语音（此时 voices 已加载完成）
    // 如果有角色，按角色性别选择不同voice；否则用默认voice
    let voice: SpeechSynthesisVoice | null = null
    if (role) {
      voice = speakLang === 'zh' ? getChineseVoiceByRole(role) : getEnglishVoiceByRole(role)
    } else {
      voice = speakLang === 'zh' ? getChineseVoice() : getEnglishVoice()
    }
    if (voice) utterance.voice = voice

    // 再次检查是否被取消
    if (generation !== speakGeneration) return

    utterance.onstart = () => { if (generation === speakGeneration) isSpeaking.value = true }
    utterance.onend = () => { if (generation === speakGeneration) isSpeaking.value = false }
    utterance.onerror = () => { if (generation === speakGeneration) isSpeaking.value = false }

    currentUtterance = utterance
    speechSynthesis.speak(utterance)
  }

  // 朗读中文
  function speakChinese(text: string, rate?: number, role?: SpeechRole) {
    speak(text, 'zh', rate, role)
  }

  // 朗读英文
  function speakEnglish(text: string, rate?: number) {
    speak(text, 'en', rate)
  }

  // 朗读拼音（确保用中文语音正确发音）
  function speakPinyin(pinyin: string, rate?: number) {
    const chineseText = convertPinyinToChinese(pinyin)
    speak(chineseText, 'zh', rate, 'teacher')
  }

  // 带角色的朗读
  function speakWithRole(text: string, role: SpeechRole, lang: 'zh' | 'en' = 'zh') {
    speak(text, lang, undefined, role)
  }

  // 朗读对话（逐行用不同角色人声朗读）
  // 解析 "角色名: 台词" 格式，为每行选择对应角色的voice
  // 英语对话会自动用不同人声，中文对话也会按角色性别选不同voice
  async function speakDialogue(text: string, defaultLang: 'zh' | 'en' = 'zh') {
    if (!isSupported.value) return
    stop()

    const generation = ++speakGeneration

    // 等待语音列表加载完成
    await waitForVoices()
    if (generation !== speakGeneration) return

    const dialogueLines = parseDialogue(text, defaultLang)
    if (dialogueLines.length === 0) return

    isSpeaking.value = true
    let index = 0

    // 获取统一语音速度
    const unifiedRate = getUnifiedRate()

    function speakNextLine() {
      // 检查是否被取消
      if (generation !== speakGeneration) return
      if (index >= dialogueLines.length) {
        isSpeaking.value = false
        return
      }

      const line = dialogueLines[index]
      const roleConfig = ROLE_CONFIGS[line.speechRole]

      // 处理台词文本：如果是中文且包含拼音，转换为中文读音
      let speakText = line.text
      if (line.lang === 'zh') {
        speakText = smartConvertPinyin(line.text)
        // 清洗 emoji：将连续重复的 emoji 聚合为"X颗星星"等格式
        speakText = cleanEmojiForTTS(speakText)
      }

      const utterance = new SpeechSynthesisUtterance(speakText)
      utterance.lang = line.lang === 'zh' ? 'zh-CN' : 'en-US'

      // 语速：统一设置 > 角色默认值
      utterance.rate = unifiedRate !== null ? unifiedRate : roleConfig.rate
      utterance.pitch = roleConfig.pitch
      utterance.volume = roleConfig.volume

      // 按角色和语言选择不同voice（关键：实现"不同人声"）
      let voice: SpeechSynthesisVoice | null = null
      if (line.lang === 'en') {
        voice = getEnglishVoiceByRole(line.speechRole)
      } else {
        voice = getChineseVoiceByRole(line.speechRole)
      }
      if (voice) utterance.voice = voice

      utterance.onend = () => {
        if (generation !== speakGeneration) return
        index++
        // 行间短暂停顿，让对话更自然
        setTimeout(speakNextLine, 300)
      }
      utterance.onerror = () => {
        if (generation === speakGeneration) isSpeaking.value = false
      }
      speechSynthesis.speak(utterance)
    }
    speakNextLine()
  }

  // 逐字朗读（适合生字学习）
  async function speakCharByChar(text: string, lang: 'zh' | 'en' = 'zh', charDelay = 500) {
    if (!isSupported.value) return
    stop()

    const generation = ++speakGeneration

    // 等待语音列表加载完成
    await waitForVoices()
    if (generation !== speakGeneration) return

    isSpeaking.value = true
    let index = 0
    const chars = [...text] // 正确处理emoji和中文

    // 获取统一语音速度
    const unifiedRate = getUnifiedRate()
    const charRate = unifiedRate !== null ? unifiedRate * 0.85 : 0.7

    function speakNext() {
      // 检查是否被取消
      if (generation !== speakGeneration) return
      if (index >= chars.length) {
        isSpeaking.value = false
        return
      }
      let char = chars[index]
      // 拼音字符转中文
      if (lang === 'zh' && PINYIN_MAP[char.toLowerCase()]) {
        char = PINYIN_MAP[char.toLowerCase()] || PINYIN_MAP[char] || char
      }

      const utterance = new SpeechSynthesisUtterance(char)
      utterance.lang = lang === 'zh' ? 'zh-CN' : 'en-US'
      utterance.rate = charRate
      utterance.pitch = 1.1

      const voice = lang === 'zh' ? getChineseVoice() : getEnglishVoice()
      if (voice) utterance.voice = voice

      utterance.onend = () => {
        index++
        setTimeout(speakNext, charDelay)
      }
      utterance.onerror = () => {
        if (generation === speakGeneration) isSpeaking.value = false
      }
      speechSynthesis.speak(utterance)
    }
    speakNext()
  }

  // 停止朗读
  function stop() {
    // 递增代次，使任何等待中的异步 speak 失效
    speakGeneration++
    if (isSupported.value) {
      speechSynthesis.cancel()
    }
    isSpeaking.value = false
    currentUtterance = null
  }

  // 组件卸载时停止
  onUnmounted(() => {
    stop()
  })

  return {
    isSpeaking,
    isSupported,
    speak,
    speakChinese,
    speakEnglish,
    speakPinyin,
    speakWithRole,
    speakDialogue,
    speakCharByChar,
    stop,
  }
}
