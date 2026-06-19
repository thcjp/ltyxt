import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { RewardRecord, Achievement, WishItem, StarHistoryRecord } from '@/types'

export const useRewardStore = defineStore('reward', () => {
  // 星星货币
  const stars = ref(0)
  // 钻石货币
  const diamonds = ref(0)
  // 已获得的奖励
  const rewards = ref<RewardRecord[]>([])
  // 星星变动历史
  const starHistory = ref<StarHistoryRecord[]>([])
  // 成就列表
  const achievements = ref<Achievement[]>([
    { id: 'first_lesson', name: '初出茅庐', description: '完成第一个课时', icon: '🌱', unlocked: false, unlockedAt: null, condition: 'complete_1_lesson' },
    { id: 'streak_3', name: '三日连胜', description: '连续学习3天', icon: '🔥', unlocked: false, unlockedAt: null, condition: 'streak_3' },
    { id: 'streak_7', name: '周周不断', description: '连续学习7天', icon: '⚡', unlocked: false, unlockedAt: null, condition: 'streak_7' },
    { id: 'math_master', name: '数学小达人', description: '数学获得10个三星', icon: '🔢', unlocked: false, unlockedAt: null, condition: 'math_10_three_stars' },
    { id: 'chinese_scholar', name: '语文小学者', description: '语文获得10个三星', icon: '📖', unlocked: false, unlockedAt: null, condition: 'chinese_10_three_stars' },
    { id: 'english_star', name: '英语小明星', description: '英语获得10个三星', icon: '🌟', unlocked: false, unlockedAt: null, condition: 'english_10_three_stars' },
    { id: 'perfect_day', name: '完美一天', description: '一天内三科全部完成', icon: '👑', unlocked: false, unlockedAt: null, condition: 'all_subjects_in_day' },
    { id: 'review_hero', name: '复习英雄', description: '完成20次复习', icon: '🔄', unlocked: false, unlockedAt: null, condition: 'review_20' },
    { id: 'no_mistake', name: '零失误', description: '一个课时全部答对', icon: '💯', unlocked: false, unlockedAt: null, condition: 'perfect_lesson' },
    { id: 'speed_learner', name: '闪电学习', description: '30分钟内完成3个课时', icon: '⚡', unlocked: false, unlockedAt: null, condition: '3_lessons_30min' },
    { id: 'explorer', name: '知识探索者', description: '解锁所有学科', icon: '🗺️', unlocked: false, unlockedAt: null, condition: 'all_subjects_unlocked' },
    { id: 'collector', name: '星星收藏家', description: '累计获得100颗星星', icon: '⭐', unlocked: false, unlockedAt: null, condition: '100_stars' },
    { id: 'persistent', name: '坚持不懈', description: '完成50个课时', icon: '💪', unlocked: false, unlockedAt: null, condition: 'complete_50_lessons' },
    { id: 'comeback', name: '逆袭之星', description: '从一星升到三星', icon: '🚀', unlocked: false, unlockedAt: null, condition: 'star_upgrade' },
    { id: 'parent_praise', name: '家长表扬', description: '获得10次家长好评', icon: '👏', unlocked: false, unlockedAt: null, condition: 'parent_praise_10' },
    { id: 'wish_master', name: '心愿达人', description: '兑换5个心愿', icon: '🎁', unlocked: false, unlockedAt: null, condition: 'redeem_5_wishes' },
  ])
  // 心愿商店
  const wishItems = ref<WishItem[]>([
    { id: 'ice_cream', name: '冰淇淋', description: '一个美味的冰淇淋', starCost: 30, icon: '🍦', purchased: false },
    { id: 'cartoon', name: '看动画片', description: '看30分钟动画片', starCost: 50, icon: '📺', purchased: false },
    { id: 'park', name: '去公园玩', description: '周末去公园玩', starCost: 100, icon: '🎡', purchased: false },
    { id: 'toy', name: '新玩具', description: '选一个小玩具', starCost: 200, icon: '🧸', purchased: false },
    { id: 'book', name: '故事书', description: '一本喜欢的故事书', starCost: 80, icon: '📚', purchased: false },
    { id: 'sticker', name: '贴纸套装', description: '一套漂亮贴纸', starCost: 40, icon: '🎨', purchased: false },
  ])

  // 计算属性：已解锁成就数
  const unlockedCount = computed(() => achievements.value.filter(a => a.unlocked).length)

  // 记录星星变动
  function recordStarChange(amount: number, reason: string, source: StarHistoryRecord['source']) {
    const record: StarHistoryRecord = {
      id: `star_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      amount,
      reason,
      source,
      timestamp: new Date().toISOString(),
    }
    starHistory.value.unshift(record)
    // 保留最近100条记录
    if (starHistory.value.length > 100) {
      starHistory.value = starHistory.value.slice(0, 100)
    }
  }

  // 添加星星
  function addStars(count: number, reason = '学习奖励', source: StarHistoryRecord['source'] = 'lesson') {
    stars.value += count
    recordStarChange(count, reason, source)
    saveToStorage()
  }

  // 添加钻石
  function addDiamonds(count: number) {
    diamonds.value += count
    saveToStorage()
  }

  // 家长手动加分（需PIN验证）
  function parentAddStars(count: number, reason: string): boolean {
    if (count === 0) return false
    stars.value += count
    recordStarChange(count, reason, 'parent')
    saveToStorage()
    return true
  }

  // 兑换心愿
  function redeemWish(itemId: string): boolean {
    const item = wishItems.value.find(w => w.id === itemId)
    if (item && stars.value >= item.starCost && !item.purchased) {
      stars.value -= item.starCost
      item.purchased = true
      recordStarChange(-item.starCost, `兑换：${item.name}`, 'redeem')
      saveToStorage()
      return true
    }
    return false
  }

  // 解锁成就
  function unlockAchievement(achievementId: string) {
    const achievement = achievements.value.find(a => a.id === achievementId)
    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true
      achievement.unlockedAt = new Date().toISOString()
      addDiamonds(5)
      saveToStorage()
    }
  }

  // 保存到localStorage
  function saveToStorage() {
    const data = {
      stars: stars.value,
      diamonds: diamonds.value,
      rewards: rewards.value,
      starHistory: starHistory.value,
      achievements: achievements.value,
      wishItems: wishItems.value,
    }
    localStorage.setItem('star-land-rewards', JSON.stringify(data))
  }

  // 从localStorage加载
  function loadFromStorage() {
    const stored = localStorage.getItem('star-land-rewards')
    if (stored) {
      try {
        const data = JSON.parse(stored)
        stars.value = data.stars || 0
        diamonds.value = data.diamonds || 0
        rewards.value = data.rewards || []
        starHistory.value = data.starHistory || []
        if (data.achievements) achievements.value = data.achievements
        if (data.wishItems) wishItems.value = data.wishItems
      } catch (e) {
        console.error('加载奖励数据失败:', e)
      }
    }
  }

  loadFromStorage()

  return {
    stars,
    diamonds,
    rewards,
    starHistory,
    achievements,
    wishItems,
    unlockedCount,
    addStars,
    addDiamonds,
    parentAddStars,
    redeemWish,
    unlockAchievement,
    saveToStorage,
    loadFromStorage,
  }
})
