import type { VideoResource } from '@/types'
import { getDirectLinkResource } from '@/data/videoDirectLinks'

// 通用视频资源生成器（回退方案）
// 优先使用 videoDirectLinks.ts 中的直链数据库
// 无直链时生成网易公开课搜索页（非首页，确保有实际内容）
// 已排除：smartedu.cn 首页（无法直接定位视频）、renjiaoshe.com、sp910.com、tingkez.com（VIP）
// 更新时间：2026-06-17

// 学科中文名称映射
const subjectNames: Record<string, string> = {
  math: '数学',
  chinese: '语文',
  english: '英语',
}

// 年级中文名称映射
const gradeNames: Record<number, string> = {
  1: '一年级',
  2: '二年级',
  3: '三年级',
}

// 学科对应的教材版本提示
const subjectEditionTips: Record<string, string> = {
  math: '人教版',
  chinese: '部编版',
  english: '人教PEP版',
}

/**
 * 根据学科、年级、课时信息生成免费视频资源
 * 优先使用直链数据库，无直链时回退到网易公开课搜索页
 *
 * @param subject 学科英文标识：math | chinese | english
 * @param grade 年级数字：1 | 2 | 3
 * @param lessonId 课时ID，如 'm2u1l1'
 * @param lessonTitle 课时标题，如 '厘米的认识'
 * @returns VideoResource[] 免费视频资源数组
 */
export function generateVideoResources(
  subject: string,
  grade: number,
  lessonId: string,
  lessonTitle: string,
): VideoResource[] {
  // 优先使用直链数据库（现在返回数组）
  const directLinks = getDirectLinkResource(lessonId, lessonTitle)
  if (directLinks.length > 0) {
    return directLinks
  }

  // 回退方案：生成网易公开课搜索页（非首页，确保有实际搜索结果）
  const subjectName = subjectNames[subject] || subject
  const gradeName = gradeNames[grade] || `${grade}年级`
  const edition = subjectEditionTips[subject] || '人教版'
  // 搜索关键词：年级+学科+课题
  const keyword = `${gradeName}${subjectName}${lessonTitle}`
  const encodedKeyword = encodeURIComponent(keyword)
  const searchUrl = `https://open.163.com/newview/search?keyword=${encodedKeyword}`

  return [
    {
      id: `${lessonId}v1`,
      title: `网易公开课搜索：${gradeName}${subjectName} ${lessonTitle}（免费）`,
      platform: 'other',
      url: searchUrl,
      searchUrl,
      keywords: [gradeName, subjectName, lessonTitle, '网易公开课', '免费', edition],
      duration: '多个视频',
      matchScore: 3,
      note: `网易公开课搜索结果页，包含多个${gradeName}${subjectName}${lessonTitle}的教学视频，全部免费观看。点击"观看视频"打开搜索结果，选择合适的视频学习`,
    },
  ]
}
