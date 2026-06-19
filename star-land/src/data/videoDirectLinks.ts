import type { VideoResource } from '@/types'

// 网易公开课免费视频直链数据库
// 所有链接均为可直接播放的免费视频，无需VIP
// 数据来源：网易公开课 open.163.com
// 更新时间：2026-06-17

// 网易公开课直链生成函数（直接播放某节课）
function build163Url(pid: string, mid: string): string {
  return `https://open.163.com/newview/movie/free?pid=${pid}&mid=${mid}`
}

// 课程包列表页（用户可看到所有视频并选择）
function build163CourseList(pid: string): string {
  return `https://open.163.com/newview/movie/courseintro?newurl=${pid}`
}

// 数学课程包ID（人教版1-6年级全套，260集）
const MATH_PID = 'CHT9RO3F2'
// 语文拼音课程包ID（一年级拼音精讲，13集）
const CHINESE_PINYIN_PID = 'SHMHJ15HN'
// 语文二年级上课程包ID（统编版，37集）
const CHINESE_G2_PID = 'ZHI46MF3T'
// 英语二年级上课程包ID（人教版，63集）
const ENGLISH_G2_PID = 'KHFRL2JDC'
// 英语三年级下课程包ID（人教版）
const ENGLISH_G3_PID = 'DHI3RTM3D'
// 英语1-6年级基础知识点课程包ID（89集）
const ENGLISH_BASE_PID = 'THLRUVAO6'

// 课时ID到直链的映射
// 有 mid 字段的是精确匹配直链，可直接点击播放
// 无 mid 字段的是课程包列表页，用户可查看所有视频并选择
export const videoDirectLinks: Record<string, { title: string; url: string; pid: string; mid?: string }> = {
  // ===== 数学一年级（MATH_PID）=====
  // 第一单元：数一数
  'm1u1l1': { title: '数一数', url: build163Url(MATH_PID, 'BHT9S73QT'), pid: MATH_PID, mid: 'BHT9S73QT' },
  'm1u1l2': { title: '比多少', url: build163Url(MATH_PID, 'BHT9S73QT'), pid: MATH_PID, mid: 'BHT9S73QT' },
  'm1u1l3': { title: '排排队', url: build163Url(MATH_PID, 'FHT9SUS7T'), pid: MATH_PID, mid: 'FHT9SUS7T' },
  'm1u1l4': { title: '形成性评价', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  'm1u1l5': { title: '综合应用', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  // 第二单元：1-5的认识和加减法
  'm1u2l1': { title: '认识1-5', url: build163Url(MATH_PID, 'FHT9T4775'), pid: MATH_PID, mid: 'FHT9T4775' },
  'm1u2l2': { title: '加法初体验', url: build163Url(MATH_PID, 'FHT9T4775'), pid: MATH_PID, mid: 'FHT9T4775' },
  'm1u2l3': { title: '减法初体验', url: build163Url(MATH_PID, 'XHT9SVI7K'), pid: MATH_PID, mid: 'XHT9SVI7K' },
  'm1u2l4': { title: '形成性评价', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  'm1u2l5': { title: '综合应用', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  // 第三单元：6-10的认识和加减法
  'm1u3l1': { title: '认识6-10', url: build163Url(MATH_PID, 'JHT9T10P5'), pid: MATH_PID, mid: 'JHT9T10P5' },
  'm1u3l2': { title: '进阶加减', url: build163Url(MATH_PID, 'JHT9T10P5'), pid: MATH_PID, mid: 'JHT9T10P5' },
  'm1u3l3': { title: '凑十法初探', url: build163Url(MATH_PID, 'ZHT9S1AJL'), pid: MATH_PID, mid: 'ZHT9S1AJL' },
  'm1u3l4': { title: '形成性评价', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  'm1u3l5': { title: '综合应用', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  // 第四单元：11-20各数的认识
  'm1u4l1': { title: '认识11-20', url: build163Url(MATH_PID, 'HHTA1TG2U'), pid: MATH_PID, mid: 'HHTA1TG2U' },
  'm1u4l2': { title: '十和几', url: build163Url(MATH_PID, 'HHTA1TG2U'), pid: MATH_PID, mid: 'HHTA1TG2U' },
  'm1u4l3': { title: '20以内不进位加法', url: build163Url(MATH_PID, 'SHT9S47TE'), pid: MATH_PID, mid: 'SHT9S47TE' },
  'm1u4l4': { title: '形成性评价', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  'm1u4l5': { title: '综合应用', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  // 第五单元：20以内进位加法
  'm1u5l1': { title: '9加几', url: build163Url(MATH_PID, 'SHT9S47TE'), pid: MATH_PID, mid: 'SHT9S47TE' },
  'm1u5l2': { title: '876加几', url: build163Url(MATH_PID, 'SHT9S47TE'), pid: MATH_PID, mid: 'SHT9S47TE' },
  'm1u5l3': { title: '综合练习', url: build163Url(MATH_PID, 'SHT9S47TE'), pid: MATH_PID, mid: 'SHT9S47TE' },
  'm1u5l4': { title: '形成性评价', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  'm1u5l5': { title: '综合应用', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  // 第六单元：20以内退位减法
  'm1u6l1': { title: '十几减9', url: build163Url(MATH_PID, 'ZHT9STQ35'), pid: MATH_PID, mid: 'ZHT9STQ35' },
  'm1u6l2': { title: '十几减876', url: build163Url(MATH_PID, 'ZHT9STQ35'), pid: MATH_PID, mid: 'ZHT9STQ35' },
  'm1u6l3': { title: '综合应用', url: build163Url(MATH_PID, 'ZHT9STQ35'), pid: MATH_PID, mid: 'ZHT9STQ35' },
  'm1u6l4': { title: '形成性评价', url: build163Url(MATH_PID, 'PHT9U7QTO'), pid: MATH_PID, mid: 'PHT9U7QTO' },
  'm1u6l5': { title: '综合应用', url: build163Url(MATH_PID, 'PHT9U7QTO'), pid: MATH_PID, mid: 'PHT9U7QTO' },
  // 第七单元：认识图形
  'm1u7l1': { title: '立体图形', url: build163Url(MATH_PID, 'GHT9RQC14'), pid: MATH_PID, mid: 'GHT9RQC14' },
  'm1u7l2': { title: '平面图形', url: build163Url(MATH_PID, 'GHT9RQC14'), pid: MATH_PID, mid: 'GHT9RQC14' },
  'm1u7l3': { title: '图形拼搭', url: build163Url(MATH_PID, 'BHT9T3322'), pid: MATH_PID, mid: 'BHT9T3322' },
  'm1u7l4': { title: '形成性评价', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  'm1u7l5': { title: '综合应用', url: build163Url(MATH_PID, 'HHT9T6UU7'), pid: MATH_PID, mid: 'HHT9T6UU7' },
  // 第八单元：认识人民币
  'm1u8l1': { title: '元角分', url: build163Url(MATH_PID, 'KHT9RUSIH'), pid: MATH_PID, mid: 'KHT9RUSIH' },
  'm1u8l2': { title: '简单购物', url: build163Url(MATH_PID, 'KHT9RUSIH'), pid: MATH_PID, mid: 'KHT9RUSIH' },
  'm1u8l3': { title: '找零计算', url: build163Url(MATH_PID, 'KHT9RUSIH'), pid: MATH_PID, mid: 'KHT9RUSIH' },
  'm1u8l4': { title: '形成性评价', url: build163Url(MATH_PID, 'PHT9U7QTO'), pid: MATH_PID, mid: 'PHT9U7QTO' },
  'm1u8l5': { title: '综合应用', url: build163Url(MATH_PID, 'PHT9U7QTO'), pid: MATH_PID, mid: 'PHT9U7QTO' },

  // ===== 数学二年级（MATH_PID）=====
  // 第一单元：长度单位
  'm2u1l1': { title: '厘米的认识', url: build163Url(MATH_PID, 'UHT9TODUH'), pid: MATH_PID, mid: 'UHT9TODUH' },
  'm2u1l2': { title: '米的认识', url: build163Url(MATH_PID, 'UHT9TODUH'), pid: MATH_PID, mid: 'UHT9TODUH' },
  'm2u1l3': { title: '测量小能手', url: build163Url(MATH_PID, 'UHT9TODUH'), pid: MATH_PID, mid: 'UHT9TODUH' },
  'm2u1l4': { title: '形成性评价', url: build163Url(MATH_PID, 'UHT9TODUH'), pid: MATH_PID, mid: 'UHT9TODUH' },
  'm2u1l5': { title: '综合应用', url: build163Url(MATH_PID, 'UHT9TODUH'), pid: MATH_PID, mid: 'UHT9TODUH' },
  // 第二单元：100以内的加法和减法
  'm2u2l1': { title: '不进位加法', url: build163Url(MATH_PID, 'PHT9T1SJ5'), pid: MATH_PID, mid: 'PHT9T1SJ5' },
  'm2u2l2': { title: '进位加法', url: build163Url(MATH_PID, 'PHT9T1SJ5'), pid: MATH_PID, mid: 'PHT9T1SJ5' },
  'm2u2l3': { title: '连加', url: build163Url(MATH_PID, 'PHT9T1SJ5'), pid: MATH_PID, mid: 'PHT9T1SJ5' },
  'm2u2l4': { title: '形成性评价', url: build163Url(MATH_PID, 'BHT9T22F9'), pid: MATH_PID, mid: 'BHT9T22F9' },
  'm2u2l5': { title: '综合应用', url: build163Url(MATH_PID, 'BHT9T22F9'), pid: MATH_PID, mid: 'BHT9T22F9' },
  // 第三单元：减法
  'm2u3l1': { title: '不退位减法', url: build163Url(MATH_PID, 'JHT9T11KD'), pid: MATH_PID, mid: 'JHT9T11KD' },
  'm2u3l2': { title: '退位减法', url: build163Url(MATH_PID, 'JHT9T11KD'), pid: MATH_PID, mid: 'JHT9T11KD' },
  'm2u3l3': { title: '加减混合', url: build163Url(MATH_PID, 'BHT9T22F9'), pid: MATH_PID, mid: 'BHT9T22F9' },
  'm2u3l4': { title: '形成性评价', url: build163Url(MATH_PID, 'XHT9TDJOV'), pid: MATH_PID, mid: 'XHT9TDJOV' },
  'm2u3l5': { title: '综合应用', url: build163Url(MATH_PID, 'XHT9TDJOV'), pid: MATH_PID, mid: 'XHT9TDJOV' },
  // 第四单元：表内乘法
  'm2u4l1': { title: '乘法的意义', url: build163Url(MATH_PID, 'UHT9T2ALS'), pid: MATH_PID, mid: 'UHT9T2ALS' },
  'm2u4l2': { title: '2-5的乘法口诀', url: build163Url(MATH_PID, 'NHT9T22IV'), pid: MATH_PID, mid: 'NHT9T22IV' },
  'm2u4l3': { title: '6-9的乘法口诀', url: build163Url(MATH_PID, 'IHT9SUNN0'), pid: MATH_PID, mid: 'IHT9SUNN0' },
  'm2u4l4': { title: '形成性评价', url: build163Url(MATH_PID, 'GHT9SFQO2'), pid: MATH_PID, mid: 'GHT9SFQO2' },
  'm2u4l5': { title: '综合应用', url: build163Url(MATH_PID, 'GHT9SFQO2'), pid: MATH_PID, mid: 'GHT9SFQO2' },
  // 第五单元：表内除法
  'm2u5l1': { title: '平均分', url: build163Url(MATH_PID, 'YHT9SBQ4J'), pid: MATH_PID, mid: 'YHT9SBQ4J' },
  'm2u5l2': { title: '除法的意义', url: build163Url(MATH_PID, 'YHT9U81AA'), pid: MATH_PID, mid: 'YHT9U81AA' },
  'm2u5l3': { title: '用乘法口诀求商', url: build163Url(MATH_PID, 'NHT9S62JR'), pid: MATH_PID, mid: 'NHT9S62JR' },
  'm2u5l4': { title: '形成性评价', url: build163Url(MATH_PID, 'HHT9RPK25'), pid: MATH_PID, mid: 'HHT9RPK25' },
  'm2u5l5': { title: '综合应用', url: build163Url(MATH_PID, 'THT9SV3C9'), pid: MATH_PID, mid: 'THT9SV3C9' },
  // 第六单元：角的认识
  'm2u6l1': { title: '认识角', url: build163Url(MATH_PID, 'LHT9S864B'), pid: MATH_PID, mid: 'LHT9S864B' },
  'm2u6l2': { title: '直角锐角钝角', url: build163Url(MATH_PID, 'XHT9T0175'), pid: MATH_PID, mid: 'XHT9T0175' },
  'm2u6l3': { title: '画角', url: build163Url(MATH_PID, 'LHT9S864B'), pid: MATH_PID, mid: 'LHT9S864B' },
  'm2u6l4': { title: '形成性评价', url: build163Url(MATH_PID, 'XHT9T0175'), pid: MATH_PID, mid: 'XHT9T0175' },
  'm2u6l5': { title: '综合应用', url: build163Url(MATH_PID, 'XHT9T0175'), pid: MATH_PID, mid: 'XHT9T0175' },
  // 第七单元：统计
  'm2u7l1': { title: '分类整理', url: build163Url(MATH_PID, 'OHT9SVBAD'), pid: MATH_PID, mid: 'OHT9SVBAD' },
  'm2u7l2': { title: '简单统计表', url: build163Url(MATH_PID, 'EHT9S4OR0'), pid: MATH_PID, mid: 'EHT9S4OR0' },
  'm2u7l3': { title: '条形统计图', url: build163Url(MATH_PID, 'JHT9S40H6'), pid: MATH_PID, mid: 'JHT9S40H6' },
  'm2u7l4': { title: '形成性评价', url: build163Url(MATH_PID, 'OHT9SVBAD'), pid: MATH_PID, mid: 'OHT9SVBAD' },
  'm2u7l5': { title: '综合应用', url: build163Url(MATH_PID, 'OHT9SVBAD'), pid: MATH_PID, mid: 'OHT9SVBAD' },
  // 第八单元：数学广角
  'm2u8l1': { title: '简单排列', url: build163Url(MATH_PID, 'FHT9S9AMO'), pid: MATH_PID, mid: 'FHT9S9AMO' },
  'm2u8l2': { title: '简单组合', url: build163Url(MATH_PID, 'RHT9STTL9'), pid: MATH_PID, mid: 'RHT9STTL9' },
  'm2u8l3': { title: '综合应用', url: build163Url(MATH_PID, 'FHT9S9AMO'), pid: MATH_PID, mid: 'FHT9S9AMO' },
  'm2u8l4': { title: '形成性评价', url: build163Url(MATH_PID, 'RHT9STTL9'), pid: MATH_PID, mid: 'RHT9STTL9' },
  'm2u8l5': { title: '综合应用', url: build163Url(MATH_PID, 'RHT9STTL9'), pid: MATH_PID, mid: 'RHT9STTL9' },

  // ===== 数学三年级（MATH_PID）=====
  // 第一单元：时分秒
  'm3u1l1': { title: '秒的认识', url: build163Url(MATH_PID, 'DHT9T10M6'), pid: MATH_PID, mid: 'DHT9T10M6' },
  'm3u1l2': { title: '时间的计算', url: build163Url(MATH_PID, 'QHT9T39KB'), pid: MATH_PID, mid: 'QHT9T39KB' },
  'm3u1l3': { title: '时间规划师', url: build163Url(MATH_PID, 'QHT9T39KB'), pid: MATH_PID, mid: 'QHT9T39KB' },
  'm3u1l4': { title: '形成性评价', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  'm3u1l5': { title: '综合应用', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  // 第二单元：万以内加减法
  'm3u2l1': { title: '口算加减', url: build163Url(MATH_PID, 'UHT9TSCG3'), pid: MATH_PID, mid: 'UHT9TSCG3' },
  'm3u2l2': { title: '笔算加减', url: build163Url(MATH_PID, 'RHT9RULRG'), pid: MATH_PID, mid: 'RHT9RULRG' },
  'm3u2l3': { title: '估算与验算', url: build163Url(MATH_PID, 'QHT9T2O2N'), pid: MATH_PID, mid: 'QHT9T2O2N' },
  'm3u2l4': { title: '形成性评价', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  'm3u2l5': { title: '综合应用', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  // 第三单元：测量
  'm3u3l1': { title: '毫米分米千米', url: build163Url(MATH_PID, 'WHT9S5OVG'), pid: MATH_PID, mid: 'WHT9S5OVG' },
  'm3u3l2': { title: '吨的认识', url: build163Url(MATH_PID, 'SHT9S0T38'), pid: MATH_PID, mid: 'SHT9S0T38' },
  'm3u3l3': { title: '长度单位换算', url: build163Url(MATH_PID, 'FHT9S8NKJ'), pid: MATH_PID, mid: 'FHT9S8NKJ' },
  'm3u3l4': { title: '形成性评价', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  'm3u3l5': { title: '综合应用', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  // 第四单元：倍的认识
  'm3u4l1': { title: '倍的意义', url: build163Url(MATH_PID, 'BHT9S9LQT'), pid: MATH_PID, mid: 'BHT9S9LQT' },
  'm3u4l2': { title: '求倍数问题', url: build163Url(MATH_PID, 'BHT9V472B'), pid: MATH_PID, mid: 'BHT9V472B' },
  'm3u4l3': { title: '倍数应用题', url: build163Url(MATH_PID, 'ZHT9RVJ02'), pid: MATH_PID, mid: 'ZHT9RVJ02' },
  'm3u4l4': { title: '形成性评价', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  'm3u4l5': { title: '综合应用', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  // 第五单元：多位数乘一位数
  'm3u5l1': { title: '口算乘法', url: build163Url(MATH_PID, 'EHT9S5I4C'), pid: MATH_PID, mid: 'EHT9S5I4C' },
  'm3u5l2': { title: '笔算乘法', url: build163Url(MATH_PID, 'CHT9TEOIG'), pid: MATH_PID, mid: 'CHT9TEOIG' },
  'm3u5l3': { title: '乘法应用', url: build163Url(MATH_PID, 'DHT9TEKPK'), pid: MATH_PID, mid: 'DHT9TEKPK' },
  'm3u5l4': { title: '形成性评价', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  'm3u5l5': { title: '综合应用', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  // 第六单元：长方形和正方形
  'm3u6l1': { title: '四边形特征', url: build163Url(MATH_PID, 'EHT9RQTQ9'), pid: MATH_PID, mid: 'EHT9RQTQ9' },
  'm3u6l2': { title: '周长计算', url: build163Url(MATH_PID, 'JHT9SHC7B'), pid: MATH_PID, mid: 'JHT9SHC7B' },
  'm3u6l3': { title: '周长应用', url: build163Url(MATH_PID, 'GHT9T29DM'), pid: MATH_PID, mid: 'GHT9T29DM' },
  'm3u6l4': { title: '形成性评价', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  'm3u6l5': { title: '综合应用', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  // 第七单元：分数的初步认识
  'm3u7l1': { title: '认识几分之一', url: build163Url(MATH_PID, 'PHT9T4MET'), pid: MATH_PID, mid: 'PHT9T4MET' },
  'm3u7l2': { title: '认识几分之几', url: build163Url(MATH_PID, 'GHT9T5FU4'), pid: MATH_PID, mid: 'GHT9T5FU4' },
  'm3u7l3': { title: '简单分数加减', url: build163Url(MATH_PID, 'KHT9S27VA'), pid: MATH_PID, mid: 'KHT9S27VA' },
  'm3u7l4': { title: '形成性评价', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  'm3u7l5': { title: '综合应用', url: build163Url(MATH_PID, 'CHT9T67VL'), pid: MATH_PID, mid: 'CHT9T67VL' },
  // 第八单元：数学广角-集合
  'm3u8l1': { title: '集合思想', url: build163Url(MATH_PID, 'YHT9TCEMO'), pid: MATH_PID, mid: 'YHT9TCEMO' },
  'm3u8l2': { title: '韦恩图', url: build163Url(MATH_PID, 'PHT9TEACK'), pid: MATH_PID, mid: 'PHT9TEACK' },
  'm3u8l3': { title: '综合应用', url: build163Url(MATH_PID, 'YHT9TCEMO'), pid: MATH_PID, mid: 'YHT9TCEMO' },
  'm3u8l4': { title: '形成性评价', url: build163Url(MATH_PID, 'LHT9RU7ED'), pid: MATH_PID, mid: 'LHT9RU7ED' },
  'm3u8l5': { title: '综合应用', url: build163Url(MATH_PID, 'LHT9RU7ED'), pid: MATH_PID, mid: 'LHT9RU7ED' },

  // ===== 语文一年级（拼音部分用 CHINESE_PINYIN_PID，其他用拼音课程包列表页）=====
  // 第一单元：拼音王国（一）
  'c1u1l1': { title: 'a o e i u ü', url: build163Url(CHINESE_PINYIN_PID, 'NHMHJ35NG'), pid: CHINESE_PINYIN_PID, mid: 'NHMHJ35NG' },
  'c1u1l2': { title: 'b p m f d t n l', url: build163Url(CHINESE_PINYIN_PID, 'WHMHJ4SQV'), pid: CHINESE_PINYIN_PID, mid: 'WHMHJ4SQV' },
  'c1u1l3': { title: 'g k h j q x', url: build163Url(CHINESE_PINYIN_PID, 'GHMHJ7939'), pid: CHINESE_PINYIN_PID, mid: 'GHMHJ7939' },
  'c1u1l4': { title: '形成性评价', url: build163Url(CHINESE_PINYIN_PID, 'FHMHJHKOT'), pid: CHINESE_PINYIN_PID, mid: 'FHMHJHKOT' },
  'c1u1l5': { title: '综合复习与应用', url: build163Url(CHINESE_PINYIN_PID, 'FHMHJHKOT'), pid: CHINESE_PINYIN_PID, mid: 'FHMHJHKOT' },
  // 第二单元：拼音王国（二）
  'c1u2l1': { title: 'z c s zh ch sh r', url: build163Url(CHINESE_PINYIN_PID, 'YHMHJ4BHL'), pid: CHINESE_PINYIN_PID, mid: 'YHMHJ4BHL' },
  'c1u2l2': { title: 'ai ei ui ao ou iu', url: build163Url(CHINESE_PINYIN_PID, 'XHMHJ3NDM'), pid: CHINESE_PINYIN_PID, mid: 'XHMHJ3NDM' },
  'c1u2l3': { title: 'an en in un ün ang eng ing ong', url: build163Url(CHINESE_PINYIN_PID, 'GHMHJ15IC'), pid: CHINESE_PINYIN_PID, mid: 'GHMHJ15IC' },
  'c1u2l4': { title: '整体认读音节', url: build163Url(CHINESE_PINYIN_PID, 'IHMHJ2ST7'), pid: CHINESE_PINYIN_PID, mid: 'IHMHJ2ST7' },
  'c1u2l5': { title: '综合复习与应用', url: build163Url(CHINESE_PINYIN_PID, 'FHMHJHKOT'), pid: CHINESE_PINYIN_PID, mid: 'FHMHJHKOT' },
  // 第三单元：识字（一）- 无精确匹配，用拼音课程包列表页
  'c1u3l1': { title: '天地人你我他', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u3l2': { title: '金木水火土', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u3l3': { title: '对韵歌', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u3l4': { title: '形成性评价', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u3l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  // 第四单元：识字（二）
  'c1u4l1': { title: '识字天地（一）', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u4l2': { title: '识字天地（二）', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u4l3': { title: '识字天地（三）', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u4l4': { title: '形成性评价', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u4l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  // 第五单元：课文（一）
  'c1u5l1': { title: '秋天', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u5l2': { title: '小小的船', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u5l3': { title: '江南', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u5l4': { title: '形成性评价', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u5l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  // 第六单元：课文（二）
  'c1u6l1': { title: '雪地里的小画家', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u6l2': { title: '乌鸦喝水', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u6l3': { title: '小蜗牛', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u6l4': { title: '形成性评价', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u6l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  // 第七单元：词语积累
  'c1u7l1': { title: '反义词对对碰', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u7l2': { title: '量词小达人', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u7l3': { title: '形容词乐园', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u7l4': { title: '形成性评价', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u7l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  // 第八单元：古诗诵读
  'c1u8l1': { title: '咏鹅', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u8l2': { title: '悯农', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u8l3': { title: '静夜思', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u8l4': { title: '形成性评价', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },
  'c1u8l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_PINYIN_PID), pid: CHINESE_PINYIN_PID },

  // ===== 语文二年级（CHINESE_G2_PID）=====
  // 第一单元：课文
  'c2u1l1': { title: '小蝌蚪找妈妈', url: build163Url(CHINESE_G2_PID, 'AHI46QAMP'), pid: CHINESE_G2_PID, mid: 'AHI46QAMP' },
  'c2u1l2': { title: '我是什么', url: build163Url(CHINESE_G2_PID, 'AHI46OC0G'), pid: CHINESE_G2_PID, mid: 'AHI46OC0G' },
  'c2u1l3': { title: '植物妈妈有办法', url: build163Url(CHINESE_G2_PID, 'THI46PBH5'), pid: CHINESE_G2_PID, mid: 'THI46PBH5' },
  'c2u1l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'WHI46PRI8'), pid: CHINESE_G2_PID, mid: 'WHI46PRI8' },
  'c2u1l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'WHI46PRI8'), pid: CHINESE_G2_PID, mid: 'WHI46PRI8' },
  // 第二单元：识字
  'c2u2l1': { title: '场景识字', url: build163Url(CHINESE_G2_PID, 'EHI46NVN2'), pid: CHINESE_G2_PID, mid: 'EHI46NVN2' },
  'c2u2l2': { title: '树之歌', url: build163Url(CHINESE_G2_PID, 'CHI46QC4U'), pid: CHINESE_G2_PID, mid: 'CHI46QC4U' },
  'c2u2l3': { title: '拍手歌', url: build163Url(CHINESE_G2_PID, 'SHI46Q7MJ'), pid: CHINESE_G2_PID, mid: 'SHI46Q7MJ' },
  'c2u2l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'BHI46Q1FL'), pid: CHINESE_G2_PID, mid: 'BHI46Q1FL' },
  'c2u2l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'BHI46Q1FL'), pid: CHINESE_G2_PID, mid: 'BHI46Q1FL' },
  // 第三单元：课文
  'c2u3l1': { title: '曹冲称象', url: build163Url(CHINESE_G2_PID, 'SHI46QTT2'), pid: CHINESE_G2_PID, mid: 'SHI46QTT2' },
  'c2u3l2': { title: '玲玲的画', url: build163Url(CHINESE_G2_PID, 'JHI46MTKP'), pid: CHINESE_G2_PID, mid: 'JHI46MTKP' },
  'c2u3l3': { title: '一封信', url: build163Url(CHINESE_G2_PID, 'BHI46O183'), pid: CHINESE_G2_PID, mid: 'BHI46O183' },
  'c2u3l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'PHI46P3AH'), pid: CHINESE_G2_PID, mid: 'PHI46P3AH' },
  'c2u3l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'PHI46P3AH'), pid: CHINESE_G2_PID, mid: 'PHI46P3AH' },
  // 第四单元：古诗与风景
  'c2u4l1': { title: '登鹳雀楼', url: build163Url(CHINESE_G2_PID, 'CHI46QMI5'), pid: CHINESE_G2_PID, mid: 'CHI46QMI5' },
  'c2u4l2': { title: '望庐山瀑布', url: build163Url(CHINESE_G2_PID, 'WHI46NFB5'), pid: CHINESE_G2_PID, mid: 'WHI46NFB5' },
  'c2u4l3': { title: '黄山奇石', url: build163Url(CHINESE_G2_PID, 'LHI46OG64'), pid: CHINESE_G2_PID, mid: 'LHI46OG64' },
  'c2u4l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'FHI46QPE0'), pid: CHINESE_G2_PID, mid: 'FHI46QPE0' },
  'c2u4l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'FHI46QPE0'), pid: CHINESE_G2_PID, mid: 'FHI46QPE0' },
  // 第五单元：词语积累
  'c2u5l1': { title: '成语故事', url: build163Url(CHINESE_G2_PID, 'ZHI46N3B7'), pid: CHINESE_G2_PID, mid: 'ZHI46N3B7' },
  'c2u5l2': { title: 'AABB/ABAB词语', url: build163Url(CHINESE_G2_PID, 'ZHI46N3B7'), pid: CHINESE_G2_PID, mid: 'ZHI46N3B7' },
  'c2u5l3': { title: '近义词反义词', url: build163Url(CHINESE_G2_PID, 'ZHI46N3B7'), pid: CHINESE_G2_PID, mid: 'ZHI46N3B7' },
  'c2u5l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'ZHI46N3B7'), pid: CHINESE_G2_PID, mid: 'ZHI46N3B7' },
  'c2u5l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'ZHI46N3B7'), pid: CHINESE_G2_PID, mid: 'ZHI46N3B7' },
  // 第六单元：课文
  'c2u6l1': { title: '坐井观天', url: build163Url(CHINESE_G2_PID, 'JHI46R0P8'), pid: CHINESE_G2_PID, mid: 'JHI46R0P8' },
  'c2u6l2': { title: '寒号鸟', url: build163Url(CHINESE_G2_PID, 'NHI46N0EE'), pid: CHINESE_G2_PID, mid: 'NHI46N0EE' },
  'c2u6l3': { title: '我要的是葫芦', url: build163Url(CHINESE_G2_PID, 'IHI46QNUM'), pid: CHINESE_G2_PID, mid: 'IHI46QNUM' },
  'c2u6l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'JHI46R0P8'), pid: CHINESE_G2_PID, mid: 'JHI46R0P8' },
  'c2u6l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'JHI46R0P8'), pid: CHINESE_G2_PID, mid: 'JHI46R0P8' },
  // 第七单元：写话
  'c2u7l1': { title: '看图写话', url: build163Url(CHINESE_G2_PID, 'EHI46PEGD'), pid: CHINESE_G2_PID, mid: 'EHI46PEGD' },
  'c2u7l2': { title: '续写故事', url: build163Url(CHINESE_G2_PID, 'DHI46NGPN'), pid: CHINESE_G2_PID, mid: 'DHI46NGPN' },
  'c2u7l3': { title: '日记格式', url: build163Url(CHINESE_G2_PID, 'DHI46NGPN'), pid: CHINESE_G2_PID, mid: 'DHI46NGPN' },
  'c2u7l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'EHI46PEGD'), pid: CHINESE_G2_PID, mid: 'EHI46PEGD' },
  'c2u7l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'EHI46PEGD'), pid: CHINESE_G2_PID, mid: 'EHI46PEGD' },
  // 第八单元：古诗诵读
  'c2u8l1': { title: '夜宿山寺', url: build163Url(CHINESE_G2_PID, 'CHI46QMI5'), pid: CHINESE_G2_PID, mid: 'CHI46QMI5' },
  'c2u8l2': { title: '敕勒歌', url: build163Url(CHINESE_G2_PID, 'WHI46NFB5'), pid: CHINESE_G2_PID, mid: 'WHI46NFB5' },
  'c2u8l3': { title: '梅花', url: build163Url(CHINESE_G2_PID, 'CHI46QMI5'), pid: CHINESE_G2_PID, mid: 'CHI46QMI5' },
  'c2u8l4': { title: '形成性评价', url: build163Url(CHINESE_G2_PID, 'CHI46QMI5'), pid: CHINESE_G2_PID, mid: 'CHI46QMI5' },
  'c2u8l5': { title: '综合复习与应用', url: build163Url(CHINESE_G2_PID, 'CHI46QMI5'), pid: CHINESE_G2_PID, mid: 'CHI46QMI5' },

  // ===== 语文三年级（无对应课程包，用二年级课程包列表页作为入口）=====
  // 第一单元：课文
  'c3u1l1': { title: '大青树下的小学', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u1l2': { title: '花的学校', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u1l3': { title: '不懂就要问', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u1l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u1l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  // 第二单元：古诗
  'c3u2l1': { title: '山行', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u2l2': { title: '赠刘景文', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u2l3': { title: '夜书所见', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u2l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u2l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  // 第三单元：童话
  'c3u3l1': { title: '去年的树', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u3l2': { title: '那一定会很好', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u3l3': { title: '在牛肚子里旅行', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u3l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u3l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  // 第四单元：预测阅读
  'c3u4l1': { title: '总也倒不了的老屋', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u4l2': { title: '预测阅读法', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u4l3': { title: '阅读笔记', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u4l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u4l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  // 第五单元：观察
  'c3u5l1': { title: '金色的草地', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u5l2': { title: '爬天都峰', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u5l3': { title: '写观察日记', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u5l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u5l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  // 第六单元：习作
  'c3u6l1': { title: '这儿真美', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u6l2': { title: '我有一个想法', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u6l3': { title: '那次玩得真高兴', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u6l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u6l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  // 第七单元：文言文
  'c3u7l1': { title: '司马光', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u7l2': { title: '守株待兔', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u7l3': { title: '文言文阅读方法', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u7l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u7l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  // 第八单元：复习
  'c3u8l1': { title: '字词大闯关', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u8l2': { title: '阅读理解训练', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u8l3': { title: '作文提升', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u8l4': { title: '形成性评价', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },
  'c3u8l5': { title: '综合复习与应用', url: build163CourseList(CHINESE_G2_PID), pid: CHINESE_G2_PID },

  // ===== 英语一年级（ENGLISH_BASE_PID 基础知识课程包）=====
  // 第一单元：Hello
  'e1u1l1': { title: '打招呼', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  'e1u1l2': { title: '自我介绍', url: build163Url(ENGLISH_BASE_PID, 'PHLRUVN15'), pid: ENGLISH_BASE_PID, mid: 'PHLRUVN15' },
  'e1u1l3': { title: '课堂用语', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  'e1u1l4': { title: 'Hello! Review', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  'e1u1l5': { title: 'Hello! in Life', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  // 第二单元：Colors
  'e1u2l1': { title: '红黄蓝绿', url: build163Url(ENGLISH_BASE_PID, 'WHLRUVS59'), pid: ENGLISH_BASE_PID, mid: 'WHLRUVS59' },
  'e1u2l2': { title: '颜色混合', url: build163Url(ENGLISH_BASE_PID, 'WHLRUVS59'), pid: ENGLISH_BASE_PID, mid: 'WHLRUVS59' },
  'e1u2l3': { title: '彩虹歌', url: build163Url(ENGLISH_BASE_PID, 'WHLRUVS59'), pid: ENGLISH_BASE_PID, mid: 'WHLRUVS59' },
  'e1u2l4': { title: 'Colors Review', url: build163Url(ENGLISH_BASE_PID, 'WHLRUVS59'), pid: ENGLISH_BASE_PID, mid: 'WHLRUVS59' },
  'e1u2l5': { title: 'Colors in Life', url: build163Url(ENGLISH_BASE_PID, 'WHLRUVS59'), pid: ENGLISH_BASE_PID, mid: 'WHLRUVS59' },
  // 第三单元：Numbers
  'e1u3l1': { title: '1-10数字', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  'e1u3l2': { title: '数字歌', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  'e1u3l3': { title: '数数游戏', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  'e1u3l4': { title: 'Numbers Review', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  'e1u3l5': { title: 'Numbers in Life', url: build163Url(ENGLISH_BASE_PID, 'RHLRUVH18'), pid: ENGLISH_BASE_PID, mid: 'RHLRUVH18' },
  // 第四单元：Animals
  'e1u4l1': { title: '农场动物', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u4l2': { title: '动物园', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u4l3': { title: '宠物', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u4l4': { title: 'Animals Review', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u4l5': { title: 'Animals in Life', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  // 第五单元：Family
  'e1u5l1': { title: '家庭成员', url: build163Url(ENGLISH_BASE_PID, 'PHLRUVN15'), pid: ENGLISH_BASE_PID, mid: 'PHLRUVN15' },
  'e1u5l2': { title: '家庭树', url: build163Url(ENGLISH_BASE_PID, 'PHLRUVN15'), pid: ENGLISH_BASE_PID, mid: 'PHLRUVN15' },
  'e1u5l3': { title: '我爱我家', url: build163Url(ENGLISH_BASE_PID, 'PHLRUVN15'), pid: ENGLISH_BASE_PID, mid: 'PHLRUVN15' },
  'e1u5l4': { title: 'Family Review', url: build163Url(ENGLISH_BASE_PID, 'PHLRUVN15'), pid: ENGLISH_BASE_PID, mid: 'PHLRUVN15' },
  'e1u5l5': { title: 'Family in Life', url: build163Url(ENGLISH_BASE_PID, 'PHLRUVN15'), pid: ENGLISH_BASE_PID, mid: 'PHLRUVN15' },
  // 第六单元：Food
  'e1u6l1': { title: '水果', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u6l2': { title: '食物', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u6l3': { title: '我喜欢', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u6l4': { title: 'Food Review', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u6l5': { title: 'Food in Life', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  // 第七单元：Body
  'e1u7l1': { title: '身体部位', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u7l2': { title: '头肩膀膝盖脚', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u7l3': { title: '五官', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u7l4': { title: 'Body Review', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u7l5': { title: 'Body in Life', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  // 第八单元：Classroom
  'e1u8l1': { title: '文具', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u8l2': { title: '教室物品', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u8l3': { title: '指令', url: build163Url(ENGLISH_BASE_PID, 'HHLRUVFU1'), pid: ENGLISH_BASE_PID, mid: 'HHLRUVFU1' },
  'e1u8l4': { title: 'Classroom Review', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },
  'e1u8l5': { title: 'Classroom in Life', url: build163Url(ENGLISH_BASE_PID, 'BHLRUVV41'), pid: ENGLISH_BASE_PID, mid: 'BHLRUVV41' },

  // ===== 英语二年级（ENGLISH_G2_PID 二年级上英语课程包）=====
  // 第一单元：My Day
  'e2u1l1': { title: '早晨日常', url: build163Url(ENGLISH_G2_PID, 'JHFRL2JEB'), pid: ENGLISH_G2_PID, mid: 'JHFRL2JEB' },
  'e2u1l2': { title: '学校生活', url: build163Url(ENGLISH_G2_PID, 'PHFRL2K29'), pid: ENGLISH_G2_PID, mid: 'PHFRL2K29' },
  'e2u1l3': { title: '晚间日常', url: build163Url(ENGLISH_G2_PID, 'SHFRL2KLD'), pid: ENGLISH_G2_PID, mid: 'SHFRL2KLD' },
  'e2u1l4': { title: 'My Day Review', url: build163Url(ENGLISH_G2_PID, 'THFRL2LC3'), pid: ENGLISH_G2_PID, mid: 'THFRL2LC3' },
  'e2u1l5': { title: 'My Day in Life', url: build163Url(ENGLISH_G2_PID, 'EHFRL2M15'), pid: ENGLISH_G2_PID, mid: 'EHFRL2M15' },
  // 第二单元：Weather
  'e2u2l1': { title: '天气词汇', url: build163Url(ENGLISH_G2_PID, 'UHFRL2NCU'), pid: ENGLISH_G2_PID, mid: 'UHFRL2NCU' },
  'e2u2l2': { title: '四季', url: build163Url(ENGLISH_G2_PID, 'SHFRL2NVK'), pid: ENGLISH_G2_PID, mid: 'SHFRL2NVK' },
  'e2u2l3': { title: '穿衣搭配', url: build163Url(ENGLISH_G2_PID, 'FHFRL2OLB'), pid: ENGLISH_G2_PID, mid: 'FHFRL2OLB' },
  'e2u2l4': { title: 'Weather Review', url: build163Url(ENGLISH_G2_PID, 'XHFRL2P9I'), pid: ENGLISH_G2_PID, mid: 'XHFRL2P9I' },
  'e2u2l5': { title: 'Weather in Life', url: build163Url(ENGLISH_G2_PID, 'OHFRL2PUA'), pid: ENGLISH_G2_PID, mid: 'OHFRL2PUA' },
  // 第三单元：Places
  'e2u3l1': { title: '房间', url: build163Url(ENGLISH_G2_PID, 'XHFRL2TLE'), pid: ENGLISH_G2_PID, mid: 'XHFRL2TLE' },
  'e2u3l2': { title: '公园', url: build163Url(ENGLISH_G2_PID, 'BHFRL2U9T'), pid: ENGLISH_G2_PID, mid: 'BHFRL2U9T' },
  'e2u3l3': { title: '超市', url: build163Url(ENGLISH_G2_PID, 'LHFRL2UUH'), pid: ENGLISH_G2_PID, mid: 'LHFRL2UUH' },
  'e2u3l4': { title: 'Places Review', url: build163Url(ENGLISH_G2_PID, 'PHFRL2VHO'), pid: ENGLISH_G2_PID, mid: 'PHFRL2VHO' },
  'e2u3l5': { title: 'Places in Life', url: build163Url(ENGLISH_G2_PID, 'AHFRL306C'), pid: ENGLISH_G2_PID, mid: 'AHFRL306C' },
  // 第四单元：Actions
  'e2u4l1': { title: '动词学习', url: build163Url(ENGLISH_G2_PID, 'THFRL2QIJ'), pid: ENGLISH_G2_PID, mid: 'THFRL2QIJ' },
  'e2u4l2': { title: "can/can't", url: build163Url(ENGLISH_G2_PID, 'YHFRL2R45'), pid: ENGLISH_G2_PID, mid: 'YHFRL2R45' },
  'e2u4l3': { title: '现在进行时', url: build163Url(ENGLISH_G2_PID, 'JHFRL2ROA'), pid: ENGLISH_G2_PID, mid: 'JHFRL2ROA' },
  'e2u4l4': { title: 'Actions Review', url: build163Url(ENGLISH_G2_PID, 'QHFRL2SG7'), pid: ENGLISH_G2_PID, mid: 'QHFRL2SG7' },
  'e2u4l5': { title: 'Actions in Life', url: build163Url(ENGLISH_G2_PID, 'YHFRL2SUN'), pid: ENGLISH_G2_PID, mid: 'YHFRL2SUN' },
  // 第五单元：Clothes
  'e2u5l1': { title: '服装词汇', url: build163Url(ENGLISH_G2_PID, 'QHFRL30R2'), pid: ENGLISH_G2_PID, mid: 'QHFRL30R2' },
  'e2u5l2': { title: '穿脱表达', url: build163Url(ENGLISH_G2_PID, 'GHFRL31GA'), pid: ENGLISH_G2_PID, mid: 'GHFRL31GA' },
  'e2u5l3': { title: '购物对话', url: build163Url(ENGLISH_G2_PID, 'JHFRL3299'), pid: ENGLISH_G2_PID, mid: 'JHFRL3299' },
  'e2u5l4': { title: 'Clothes Review', url: build163Url(ENGLISH_G2_PID, 'JHFRL32TD'), pid: ENGLISH_G2_PID, mid: 'JHFRL32TD' },
  'e2u5l5': { title: 'Clothes in Life', url: build163Url(ENGLISH_G2_PID, 'THFRL33GC'), pid: ENGLISH_G2_PID, mid: 'THFRL33GC' },
  // 第六单元：Transport
  'e2u6l1': { title: '交通工具', url: build163Url(ENGLISH_G2_PID, 'KHFRL342V'), pid: ENGLISH_G2_PID, mid: 'KHFRL342V' },
  'e2u6l2': { title: '出行方式', url: build163Url(ENGLISH_G2_PID, 'FHFRMQM81'), pid: ENGLISH_G2_PID, mid: 'FHFRMQM81' },
  'e2u6l3': { title: '交通规则', url: build163Url(ENGLISH_G2_PID, 'HHFRMQMRP'), pid: ENGLISH_G2_PID, mid: 'HHFRMQMRP' },
  'e2u6l4': { title: 'Transport Review', url: build163Url(ENGLISH_G2_PID, 'XHFRMQNH8'), pid: ENGLISH_G2_PID, mid: 'XHFRMQNH8' },
  'e2u6l5': { title: 'Transport in Life', url: build163Url(ENGLISH_G2_PID, 'AHFRMQO5O'), pid: ENGLISH_G2_PID, mid: 'AHFRMQO5O' },
  // 第七单元：Hobbies
  'e2u7l1': { title: '爱好表达', url: build163Url(ENGLISH_G2_PID, 'THFRL2LC3'), pid: ENGLISH_G2_PID, mid: 'THFRL2LC3' },
  'e2u7l2': { title: 'like/like doing', url: build163Url(ENGLISH_G2_PID, 'EHFRL2M15'), pid: ENGLISH_G2_PID, mid: 'EHFRL2M15' },
  'e2u7l3': { title: '周末计划', url: build163Url(ENGLISH_G2_PID, 'HHFRL2ML5'), pid: ENGLISH_G2_PID, mid: 'HHFRL2ML5' },
  'e2u7l4': { title: 'Hobbies Review', url: build163Url(ENGLISH_G2_PID, 'THFRL2LC3'), pid: ENGLISH_G2_PID, mid: 'THFRL2LC3' },
  'e2u7l5': { title: 'Hobbies in Life', url: build163Url(ENGLISH_G2_PID, 'EHFRL2M15'), pid: ENGLISH_G2_PID, mid: 'EHFRL2M15' },
  // 第八单元：Festival
  'e2u8l1': { title: '节日词汇', url: build163Url(ENGLISH_G2_PID, 'KHFRL342V'), pid: ENGLISH_G2_PID, mid: 'KHFRL342V' },
  'e2u8l2': { title: '圣诞新年', url: build163Url(ENGLISH_G2_PID, 'FHFRMQM81'), pid: ENGLISH_G2_PID, mid: 'FHFRMQM81' },
  'e2u8l3': { title: '中国节日', url: build163Url(ENGLISH_G2_PID, 'HHFRMQMRP'), pid: ENGLISH_G2_PID, mid: 'HHFRMQMRP' },
  'e2u8l4': { title: 'Festival Review', url: build163Url(ENGLISH_G2_PID, 'XHFRMQNH8'), pid: ENGLISH_G2_PID, mid: 'XHFRMQNH8' },
  'e2u8l5': { title: 'Festival in Life', url: build163Url(ENGLISH_G2_PID, 'AHFRMQO5O'), pid: ENGLISH_G2_PID, mid: 'AHFRMQO5O' },

  // ===== 英语三年级（ENGLISH_G3_PID 三年级下英语课程包）=====
  // 第一单元：Back to School
  'e3u1l1': { title: '新学期', url: build163Url(ENGLISH_G3_PID, 'NHI3RUE34'), pid: ENGLISH_G3_PID, mid: 'NHI3RUE34' },
  'e3u1l2': { title: '课程表', url: build163Url(ENGLISH_G3_PID, 'YHI3S2KRS'), pid: ENGLISH_G3_PID, mid: 'YHI3S2KRS' },
  'e3u1l3': { title: '学校规则', url: build163Url(ENGLISH_G3_PID, 'BHI3RUL5L'), pid: ENGLISH_G3_PID, mid: 'BHI3RUL5L' },
  'e3u1l4': { title: 'Back to School Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u1l5': { title: 'Back to School in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  // 第二单元：My Friends
  'e3u2l1': { title: '描述朋友', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u2l2': { title: '比较级', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u2l3': { title: '友谊', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u2l4': { title: 'My Friends Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u2l5': { title: 'My Friends in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  // 第三单元：Healthy Life
  'e3u3l1': { title: '健康饮食', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u3l2': { title: '运动', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u3l3': { title: '好习惯', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u3l4': { title: 'Healthy Life Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u3l5': { title: 'Healthy Life in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  // 第四单元：Nature
  'e3u4l1': { title: '自然景观', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u4l2': { title: '环境保护', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u4l3': { title: '植物生长', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u4l4': { title: 'Nature Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u4l5': { title: 'Nature in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  // 第五单元：Jobs
  'e3u5l1': { title: '职业词汇', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u5l2': { title: 'want to be', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u5l3': { title: '社区服务', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u5l4': { title: 'Jobs Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u5l5': { title: 'Jobs in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  // 第六单元：Stories
  'e3u6l1': { title: '寓言故事', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u6l2': { title: '故事复述', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u6l3': { title: '角色扮演', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u6l4': { title: 'Stories Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u6l5': { title: 'Stories in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  // 第七单元：Communication
  'e3u7l1': { title: '电话用语', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u7l2': { title: '邮件格式', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u7l3': { title: '邀请函', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u7l4': { title: 'Communication Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u7l5': { title: 'Communication in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  // 第八单元：Review & Show
  'e3u8l1': { title: '学期回顾', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u8l2': { title: '才艺展示', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u8l3': { title: '英语角', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u8l4': { title: 'Review & Show Review', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
  'e3u8l5': { title: 'Review & Show in Life', url: build163CourseList(ENGLISH_G3_PID), pid: ENGLISH_G3_PID },
}

// 获取直链资源
// 根据课时ID返回对应的网易公开课视频资源
// 有精确匹配的返回直链（可直接播放），无匹配的返回课程包列表页
export function getDirectLinkResource(lessonId: string): VideoResource | null {
  const link = videoDirectLinks[lessonId]
  if (!link) return null

  // 判断是否有精确匹配的直链
  const hasDirectLink = !!link.mid
  const titlePrefix = hasDirectLink ? '网易公开课：' : '网易公开课课程包：'
  const noteSuffix = hasDirectLink
    ? '网易公开课免费视频，点击直接播放，无需VIP。'
    : '网易公开课免费课程包列表页，点击查看所有相关视频并选择，无需VIP。'

  return {
    id: `${lessonId}v1`,
    title: `${titlePrefix}${link.title}（免费直链）`,
    platform: 'other',
    url: link.url,
    searchUrl: build163CourseList(link.pid),
    keywords: ['网易公开课', '免费', link.title],
    duration: '约15-20分钟',
    matchScore: hasDirectLink ? 5 : 4,
    note: `${noteSuffix}如需查看该课程包所有视频，点击搜索按钮`,
  }
}
