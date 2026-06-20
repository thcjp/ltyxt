import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { RewardRecord, Achievement, WishItem, DiamondItem, StarHistoryRecord, DiamondHistoryRecord } from '@/types'

export const useRewardStore = defineStore('reward', () => {
  // 星星货币
  const stars = ref(0)
  // 钻石货币
  const diamonds = ref(0)
  // 已获得的奖励
  const rewards = ref<RewardRecord[]>([])
  // 星星变动历史
  const starHistory = ref<StarHistoryRecord[]>([])
  // 钻石变动历史
  const diamondHistory = ref<DiamondHistoryRecord[]>([])
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
  // 心愿商店（星星兑换）
  const wishItems = ref<WishItem[]>([
    { id: 'ice_cream', name: '冰淇淋', description: '一个美味的冰淇淋', starCost: 30, icon: '🍦', stock: 5, purchased: false },
    { id: 'cartoon', name: '看动画片', description: '看30分钟动画片', starCost: 50, icon: '📺', stock: 5, purchased: false },
    { id: 'park', name: '去公园玩', description: '周末去公园玩', starCost: 100, icon: '🎡', stock: 3, purchased: false },
    { id: 'toy', name: '新玩具', description: '选一个小玩具', starCost: 200, icon: '🧸', stock: 2, purchased: false },
    { id: 'book', name: '故事书', description: '一本喜欢的故事书', starCost: 80, icon: '📚', stock: 3, purchased: false },
    { id: 'sticker', name: '贴纸套装', description: '一套漂亮贴纸', starCost: 40, icon: '🎨', stock: 5, purchased: false },
  ])
  // 钻石商店（钻石兑换，系统预置+家长可修改新增）
  const diamondItems = ref<DiamondItem[]>([
    { id: 'movie', name: '看电影', description: '去电影院看一部电影', diamondCost: 10, icon: '🎬', stock: 3, purchased: false, custom: false },
    { id: 'big_toy', name: '大玩具', description: '选一个心仪的大玩具', diamondCost: 20, icon: '🎁', stock: 2, purchased: false, custom: false },
    { id: 'trip', name: '短途旅行', description: '周末短途亲子旅行', diamondCost: 30, icon: '🚗', stock: 1, purchased: false, custom: false },
    { id: 'game_time', name: '游戏时间', description: '额外30分钟游戏时间', diamondCost: 5, icon: '🎮', stock: 5, purchased: false, custom: false },
    { id: 'stay_up', name: '晚睡特权', description: '周末晚睡30分钟', diamondCost: 8, icon: '🌙', stock: 4, purchased: false, custom: false },
    { id: 'no_homework', name: '作业减免', description: '减免一次课外作业', diamondCost: 15, icon: '📝', stock: 3, purchased: false, custom: false },
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

  // 记录钻石变动
  function recordDiamondChange(amount: number, reason: string, source: DiamondHistoryRecord['source']) {
    const record: DiamondHistoryRecord = {
      id: `diamond_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      amount,
      reason,
      source,
      timestamp: new Date().toISOString(),
    }
    diamondHistory.value.unshift(record)
    if (diamondHistory.value.length > 100) {
      diamondHistory.value = diamondHistory.value.slice(0, 100)
    }
  }

  // 添加星星
  function addStars(count: number, reason = '学习奖励', source: StarHistoryRecord['source'] = 'lesson') {
    stars.value += count
    recordStarChange(count, reason, source)
    saveToStorage()
  }

  // 添加钻石
  function addDiamonds(count: number, reason = '学习奖励', source: DiamondHistoryRecord['source'] = 'lesson') {
    diamonds.value += count
    recordDiamondChange(count, reason, source)
    saveToStorage()
  }

  // 家长手动加星（需PIN验证）
  function parentAddStars(count: number, reason: string): boolean {
    if (count === 0) return false
    stars.value += count
    recordStarChange(count, reason, 'parent')
    saveToStorage()
    return true
  }

  // 家长手动加钻石（需PIN验证）
  function parentAddDiamonds(count: number, reason: string): boolean {
    if (count === 0) return false
    diamonds.value += count
    recordDiamondChange(count, reason, 'parent')
    saveToStorage()
    return true
  }

  // 兑换心愿（星星）— 基于库存，可多次兑换
  function redeemWish(itemId: string): boolean {
    const item = wishItems.value.find(w => w.id === itemId)
    if (!item) return false
    // 库存为0则不可兑换；-1为不限
    if (item.stock === 0) return false
    if (stars.value < item.starCost) return false
    stars.value -= item.starCost
    // 有限库存则递减
    if (item.stock > 0) item.stock--
    item.purchased = true
    recordStarChange(-item.starCost, `兑换：${item.name}`, 'redeem')
    saveToStorage()
    return true
  }

  // 兑换钻石商品 — 基于库存，可多次兑换
  function redeemDiamondItem(itemId: string): boolean {
    const item = diamondItems.value.find(d => d.id === itemId)
    if (!item) return false
    if (item.stock === 0) return false
    if (diamonds.value < item.diamondCost) return false
    diamonds.value -= item.diamondCost
    if (item.stock > 0) item.stock--
    item.purchased = true
    recordDiamondChange(-item.diamondCost, `兑换：${item.name}`, 'redeem')
    saveToStorage()
    return true
  }

  // 家长管理钻石商品：新增
  function addDiamondItem(name: string, description: string, diamondCost: number, icon: string, stock = 3): boolean {
    if (!name.trim() || diamondCost <= 0) return false
    const newItem: DiamondItem = {
      id: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      name: name.trim(),
      description: description.trim() || '家长自定义奖励',
      diamondCost,
      icon: icon || '🎁',
      stock,
      purchased: false,
      custom: true,
    }
    diamondItems.value.push(newItem)
    saveToStorage()
    return true
  }

  // 家长管理钻石商品：修改
  function updateDiamondItem(itemId: string, updates: Partial<Pick<DiamondItem, 'name' | 'description' | 'diamondCost' | 'icon' | 'stock'>>): boolean {
    const item = diamondItems.value.find(d => d.id === itemId)
    if (!item) return false
    if (updates.name !== undefined) item.name = updates.name.trim()
    if (updates.description !== undefined) item.description = updates.description.trim()
    if (updates.diamondCost !== undefined && updates.diamondCost > 0) item.diamondCost = updates.diamondCost
    if (updates.icon !== undefined) item.icon = updates.icon
    if (updates.stock !== undefined) item.stock = updates.stock
    saveToStorage()
    return true
  }

  // 家长管理钻石商品：删除（只能删除自定义的）
  function removeDiamondItem(itemId: string): boolean {
    const idx = diamondItems.value.findIndex(d => d.id === itemId)
    if (idx === -1) return false
    if (!diamondItems.value[idx].custom) return false // 系统预置不可删除
    diamondItems.value.splice(idx, 1)
    saveToStorage()
    return true
  }

  // 家长管理钻石商品：补货（重置库存）
  function restockDiamondItem(itemId: string, stock: number): boolean {
    const item = diamondItems.value.find(d => d.id === itemId)
    if (!item) return false
    item.stock = stock
    item.purchased = false
    saveToStorage()
    return true
  }

  // ===== 家长管理心愿商品（星星商店）=====
  function addWishItem(name: string, description: string, starCost: number, icon: string, stock = 3): boolean {
    if (!name.trim() || starCost <= 0) return false
    const newItem: WishItem = {
      id: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      name: name.trim(),
      description: description.trim() || '家长自定义奖励',
      starCost,
      icon: icon || '🎁',
      stock,
      purchased: false,
      custom: true,
    }
    wishItems.value.push(newItem)
    saveToStorage()
    return true
  }

  function updateWishItem(itemId: string, updates: Partial<Pick<WishItem, 'name' | 'description' | 'starCost' | 'icon' | 'stock'>>): boolean {
    const item = wishItems.value.find(w => w.id === itemId)
    if (!item) return false
    if (updates.name !== undefined) item.name = updates.name.trim()
    if (updates.description !== undefined) item.description = updates.description.trim()
    if (updates.starCost !== undefined && updates.starCost > 0) item.starCost = updates.starCost
    if (updates.icon !== undefined) item.icon = updates.icon
    if (updates.stock !== undefined) item.stock = updates.stock
    saveToStorage()
    return true
  }

  function removeWishItem(itemId: string): boolean {
    const idx = wishItems.value.findIndex(w => w.id === itemId)
    if (idx === -1) return false
    if (!wishItems.value[idx].custom) return false
    wishItems.value.splice(idx, 1)
    saveToStorage()
    return true
  }

  function restockWishItem(itemId: string, stock: number): boolean {
    const item = wishItems.value.find(w => w.id === itemId)
    if (!item) return false
    item.stock = stock
    item.purchased = false
    saveToStorage()
    return true
  }

  // 解锁成就
  function unlockAchievement(achievementId: string) {
    const achievement = achievements.value.find(a => a.id === achievementId)
    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true
      achievement.unlockedAt = new Date().toISOString()
      addDiamonds(5, `解锁成就：${achievement.name}`, 'achievement')
    }
  }

  // 保存到localStorage
  function saveToStorage() {
    const data = {
      stars: stars.value,
      diamonds: diamonds.value,
      rewards: rewards.value,
      starHistory: starHistory.value,
      diamondHistory: diamondHistory.value,
      achievements: achievements.value,
      wishItems: wishItems.value,
      diamondItems: diamondItems.value,
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
        diamondHistory.value = data.diamondHistory || []
        if (data.achievements) achievements.value = data.achievements
        if (data.wishItems) {
          // 迁移：为旧数据补充 stock 字段
          wishItems.value = data.wishItems.map((item: WishItem) => ({
            ...item,
            stock: item.stock !== undefined ? item.stock : (item.purchased ? 0 : 5),
          }))
        }
        if (data.diamondItems) {
          diamondItems.value = data.diamondItems.map((item: DiamondItem) => ({
            ...item,
            stock: item.stock !== undefined ? item.stock : (item.purchased ? 0 : 3),
          }))
        }
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
    diamondHistory,
    achievements,
    wishItems,
    diamondItems,
    unlockedCount,
    addStars,
    addDiamonds,
    parentAddStars,
    parentAddDiamonds,
    redeemWish,
    redeemDiamondItem,
    addDiamondItem,
    updateDiamondItem,
    removeDiamondItem,
    restockDiamondItem,
    addWishItem,
    updateWishItem,
    removeWishItem,
    restockWishItem,
    unlockAchievement,
    saveToStorage,
    loadFromStorage,
  }
})
