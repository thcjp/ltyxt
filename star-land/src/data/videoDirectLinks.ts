import type { VideoResource } from '@/types'

// ============================================================
// 视频资源动态生成系统
// ============================================================
// 设计理念：
// 1. 不再维护易失效的直链，改为生成搜索链接
// 2. 每个课时根据其标题+学科+年级生成精准搜索关键词
// 3. 同时提供国家中小学智慧教育平台(官方免费)和B站(内容丰富)两个渠道
// 4. 搜索链接稳定可靠，不会因视频下架而失效
// ============================================================

// 学科代码到中文名称的映射
const SUBJECT_MAP: Record<string, string> = {
  m: '数学',
  c: '语文',
  e: '英语',
}

// 年级数字到中文的映射
const GRADE_MAP: Record<string, string> = {
  '1': '一年级',
  '2': '二年级',
  '3': '三年级',
}

/**
 * 从课时ID解析学科、年级信息
 * 课时ID格式: m1u2l3 (数学一年级第2单元第3课)
 */
function parseLessonId(lessonId: string): { subject: string; grade: string; subjectCode: string; gradeCode: string } | null {
  const match = lessonId.match(/^([mce])(\d)u\d+l\d+$/)
  if (!match) return null
  const [, subjectCode, gradeCode] = match
  const subject = SUBJECT_MAP[subjectCode]
  const grade = GRADE_MAP[gradeCode]
  if (!subject || !grade) return null
  return { subject, grade, subjectCode, gradeCode }
}

/**
 * 生成国家中小学智慧教育平台搜索链接
 * 平台地址: https://www.zxx.edu.cn (官方免费)
 */
function buildSmartEduSearchUrl(keywords: string): string {
  return `https://www.zxx.edu.cn/syncResource/search?keyword=${encodeURIComponent(keywords)}`
}

/**
 * 生成B站搜索链接
 * 平台地址: https://search.bilibili.com (内容丰富)
 */
function buildBilibiliSearchUrl(keywords: string): string {
  return `https://search.bilibili.com/all?keyword=${encodeURIComponent(keywords)}&order=totalrank`
}

/**
 * 生成网易公开课搜索链接
 * 平台地址: https://open.163.com (免费课程)
 */
function build163SearchUrl(keywords: string): string {
  return `https://open.163.com/newview/search?keyword=${encodeURIComponent(keywords)}`
}

/**
 * 根据课时ID和标题动态生成视频资源
 * 返回多个渠道的搜索链接，用户可选择最适合的
 *
 * @param lessonId 课时ID，如 m1u2l3
 * @param lessonTitle 课时标题，如"减法初体验"
 * @returns VideoResource数组，包含官方平台和B站两个渠道
 */
export function getDirectLinkResource(lessonId: string, lessonTitle?: string): VideoResource[] {
  const parsed = parseLessonId(lessonId)
  if (!parsed) return []

  const { subject, grade, subjectCode, gradeCode } = parsed
  // 搜索关键词：年级 + 学科 + 课时标题
  const title = lessonTitle?.trim() || ''
  const baseKeywords = title ? `${grade}${subject} ${title}` : `${grade}${subject}`
  // 简短关键词（用于B站，避免过长导致搜索结果太少）
  const shortKeywords = title ? `${grade}${subject}${title}` : `${grade}${subject}`

  const resources: VideoResource[] = []

  // 1. 国家中小学智慧教育平台（官方免费，最权威）
  resources.push({
    id: `${lessonId}_smartedu`,
    title: `国家中小学智慧教育平台 — ${grade}${subject}${title ? '：' + title : ''}`,
    platform: 'national_edu',
    url: buildSmartEduSearchUrl(baseKeywords),
    searchUrl: buildSmartEduSearchUrl(`${grade}${subject}`),
    keywords: [grade, subject, title, '人教版', '同步课程'].filter(Boolean),
    matchScore: 5,
    note: '教育部官方平台，免费同步课程，内容权威可靠',
  })

  // 2. B站（内容丰富，有名师讲解和动画教学）
  resources.push({
    id: `${lessonId}_bilibili`,
    title: `B站教学视频 — ${grade}${subject}${title ? '：' + title : ''}`,
    platform: 'bilibili',
    url: buildBilibiliSearchUrl(shortKeywords),
    searchUrl: buildBilibiliSearchUrl(`${grade}${subject}教学`),
    keywords: [grade, subject, title, '教学', '讲解'].filter(Boolean),
    matchScore: 4,
    note: 'B站有大量名师讲解和动画教学视频，可选择适合的观看',
  })

  // 3. 网易公开课（免费课程，适合系统学习）
  resources.push({
    id: `${lessonId}_163`,
    title: `网易公开课 — ${grade}${subject}${title ? '：' + title : ''}`,
    platform: 'other',
    url: build163SearchUrl(baseKeywords),
    searchUrl: build163SearchUrl(`${grade}${subject}`),
    keywords: [grade, subject, title, '免费课程'].filter(Boolean),
    matchScore: 4,
    note: '网易公开课提供免费系统课程，可搜索相关课时',
  })

  return resources
}
