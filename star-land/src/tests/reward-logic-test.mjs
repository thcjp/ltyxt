// 奖励逻辑测试脚本
// 用法: node src/tests/reward-logic-test.mjs
// 测试星星/钻石的获取、消耗、成就解锁等逻辑

import assert from 'assert'

// ============ 模拟 reward store 逻辑 ============
function createRewardState() {
  return {
    stars: 0,
    diamonds: 0,
    achievements: [
      { id: 'first_lesson', unlocked: false },
      { id: 'streak_3', unlocked: false },
      { id: 'streak_7', unlocked: false },
      { id: 'collector', unlocked: false },
      { id: 'persistent', unlocked: false },
    ],
    wishItems: [
      { id: 'ice_cream', starCost: 30, purchased: false },
      { id: 'cartoon', starCost: 50, purchased: false },
      { id: 'park', starCost: 100, purchased: false },
      { id: 'toy', starCost: 200, purchased: false },
      { id: 'book', starCost: 80, purchased: false },
      { id: 'sticker', starCost: 40, purchased: false },
    ],
  }
}

// 完成课时奖励（复制自 useRewardSystem.ts）
function rewardForLesson(state, accuracy) {
  let stars = 0
  let diamonds = 0
  if (accuracy >= 95) {
    stars = 10
    diamonds = 3
  } else if (accuracy >= 80) {
    stars = 7
    diamonds = 2
  } else if (accuracy >= 60) {
    stars = 5
    diamonds = 1
  } else {
    stars = 3
    diamonds = 0
  }
  state.stars += stars
  state.diamonds += diamonds
  return { stars, diamonds }
}

// 签到奖励
function rewardForCheckIn(state) {
  const stars = 5
  state.stars += stars
  return { stars }
}

// 家长加分
function parentAddStars(state, count) {
  if (count === 0) return false
  state.stars += count
  return true
}

// 兑换心愿
function redeemWish(state, itemId) {
  const item = state.wishItems.find(w => w.id === itemId)
  if (item && state.stars >= item.starCost && !item.purchased) {
    state.stars -= item.starCost
    item.purchased = true
    return true
  }
  return false
}

// 解锁成就（解锁成就 +5 钻石）
function unlockAchievement(state, achievementId) {
  const achievement = state.achievements.find(a => a.id === achievementId)
  if (achievement && !achievement.unlocked) {
    achievement.unlocked = true
    state.diamonds += 5
    return true
  }
  return false
}

// 星级计算（复制自 LessonPage.vue）
function calcStarLevel(accuracy) {
  return accuracy >= 95 ? 3 : accuracy >= 80 ? 2 : accuracy >= 60 ? 1 : 0
}

// ============ 测试用例 ============
let passed = 0
let failed = 0
const failures = []

function test(name, fn) {
  try {
    fn()
    passed++
    console.log(`  ✓ ${name}`)
  } catch (e) {
    failed++
    failures.push({ name, error: e.message })
    console.log(`  ✗ ${name}`)
    console.log(`    ${e.message}`)
  }
}

function assertEqual(actual, expected, msg) {
  assert.strictEqual(actual, expected, msg || `期望 ${expected}，实际 ${actual}`)
}

console.log('\n🧪 奖励逻辑测试')
console.log('========================================')

// ---- 1. 课时奖励测试 ----
console.log('\n📦 课时奖励（rewardForLesson）')

test('正确率100% → 10星+3钻石+3星', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 100)
  assertEqual(result.stars, 10, '100%应得10星')
  assertEqual(result.diamonds, 3, '100%应得3钻石')
  assertEqual(state.stars, 10)
  assertEqual(state.diamonds, 3)
  assertEqual(calcStarLevel(100), 3)
})

test('正确率95% → 10星+3钻石+3星（边界）', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 95)
  assertEqual(result.stars, 10, '95%应得10星')
  assertEqual(result.diamonds, 3, '95%应得3钻石')
  assertEqual(calcStarLevel(95), 3)
})

test('正确率94% → 7星+2钻石+2星（边界）', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 94)
  assertEqual(result.stars, 7, '94%应得7星')
  assertEqual(result.diamonds, 2, '94%应得2钻石')
  assertEqual(calcStarLevel(94), 2)
})

test('正确率80% → 7星+2钻石+2星（边界）', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 80)
  assertEqual(result.stars, 7)
  assertEqual(result.diamonds, 2)
  assertEqual(calcStarLevel(80), 2)
})

test('正确率79% → 5星+1钻石+1星（边界）', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 79)
  assertEqual(result.stars, 5)
  assertEqual(result.diamonds, 1)
  assertEqual(calcStarLevel(79), 1)
})

test('正确率60% → 5星+1钻石+1星（边界）', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 60)
  assertEqual(result.stars, 5)
  assertEqual(result.diamonds, 1)
  assertEqual(calcStarLevel(60), 1)
})

test('正确率59% → 3星+0钻石+0星（边界）', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 59)
  assertEqual(result.stars, 3, '59%应得3星')
  assertEqual(result.diamonds, 0, '59%应得0钻石')
  assertEqual(calcStarLevel(59), 0)
})

test('正确率0% → 3星+0钻石+0星', () => {
  const state = createRewardState()
  const result = rewardForLesson(state, 0)
  assertEqual(result.stars, 3)
  assertEqual(result.diamonds, 0)
  assertEqual(calcStarLevel(0), 0)
})

// ---- 2. 签到奖励测试 ----
console.log('\n📅 签到奖励（rewardForCheckIn）')

test('每日签到 → +5星', () => {
  const state = createRewardState()
  const result = rewardForCheckIn(state)
  assertEqual(result.stars, 5)
  assertEqual(state.stars, 5)
})

test('连续签到3天 → 15星', () => {
  const state = createRewardState()
  rewardForCheckIn(state)
  rewardForCheckIn(state)
  rewardForCheckIn(state)
  assertEqual(state.stars, 15)
})

// ---- 3. 家长加分测试 ----
console.log('\n👨‍👩‍👧 家长加分（parentAddStars）')

test('家长加10星 → +10星', () => {
  const state = createRewardState()
  const ok = parentAddStars(state, 10)
  assertEqual(ok, true)
  assertEqual(state.stars, 10)
})

test('家长加0星 → 失败，不加星', () => {
  const state = createRewardState()
  const ok = parentAddStars(state, 0)
  assertEqual(ok, false)
  assertEqual(state.stars, 0)
})

test('家长减星（负数）→ 星星减少', () => {
  const state = createRewardState()
  state.stars = 20
  const ok = parentAddStars(state, -5)
  assertEqual(ok, true)
  assertEqual(state.stars, 15)
})

// ---- 4. 心愿兑换测试 ----
console.log('\n🎁 心愿兑换（redeemWish）')

test('兑换冰淇淋（30星）→ 成功，扣30星', () => {
  const state = createRewardState()
  state.stars = 50
  const ok = redeemWish(state, 'ice_cream')
  assertEqual(ok, true)
  assertEqual(state.stars, 20)
  assertEqual(state.wishItems.find(w => w.id === 'ice_cream').purchased, true)
})

test('星星不足兑换冰淇淋 → 失败', () => {
  const state = createRewardState()
  state.stars = 20
  const ok = redeemWish(state, 'ice_cream')
  assertEqual(ok, false)
  assertEqual(state.stars, 20)
  assertEqual(state.wishItems.find(w => w.id === 'ice_cream').purchased, false)
})

test('重复兑换已兑换物品 → 失败', () => {
  const state = createRewardState()
  state.stars = 100
  redeemWish(state, 'ice_cream')
  const ok = redeemWish(state, 'ice_cream')
  assertEqual(ok, false)
  assertEqual(state.stars, 70)
})

test('兑换新玩具（200星）→ 成功，扣200星', () => {
  const state = createRewardState()
  state.stars = 200
  const ok = redeemWish(state, 'toy')
  assertEqual(ok, true)
  assertEqual(state.stars, 0)
})

test('星星刚好等于兑换成本 → 成功', () => {
  const state = createRewardState()
  state.stars = 100
  const ok = redeemWish(state, 'park')
  assertEqual(ok, true)
  assertEqual(state.stars, 0)
})

test('星星比兑换成本少1 → 失败', () => {
  const state = createRewardState()
  state.stars = 99
  const ok = redeemWish(state, 'park')
  assertEqual(ok, false)
  assertEqual(state.stars, 99)
})

// ---- 5. 成就解锁测试 ----
console.log('\n🏅 成就解锁（unlockAchievement）')

test('解锁成就 → +5钻石', () => {
  const state = createRewardState()
  const ok = unlockAchievement(state, 'first_lesson')
  assertEqual(ok, true)
  assertEqual(state.diamonds, 5)
  assertEqual(state.achievements.find(a => a.id === 'first_lesson').unlocked, true)
})

test('重复解锁同一成就 → 失败，不再加钻石', () => {
  const state = createRewardState()
  unlockAchievement(state, 'first_lesson')
  const ok = unlockAchievement(state, 'first_lesson')
  assertEqual(ok, false)
  assertEqual(state.diamonds, 5)
})

test('解锁不存在的成就 → 失败', () => {
  const state = createRewardState()
  const ok = unlockAchievement(state, 'nonexistent')
  assertEqual(ok, false)
  assertEqual(state.diamonds, 0)
})

// ---- 6. 星级边界测试 ----
console.log('\n⭐ 星级边界（calcStarLevel）')

test('正确率95% → 3星', () => assertEqual(calcStarLevel(95), 3))
test('正确率94% → 2星', () => assertEqual(calcStarLevel(94), 2))
test('正确率80% → 2星', () => assertEqual(calcStarLevel(80), 2))
test('正确率79% → 1星', () => assertEqual(calcStarLevel(79), 1))
test('正确率60% → 1星', () => assertEqual(calcStarLevel(60), 1))
test('正确率59% → 0星', () => assertEqual(calcStarLevel(59), 0))
test('正确率0% → 0星', () => assertEqual(calcStarLevel(0), 0))
test('正确率100% → 3星', () => assertEqual(calcStarLevel(100), 3))

// ---- 7. 完整学习流程模拟 ----
console.log('\n🎯 完整学习流程模拟')

test('完成5个课时（全三星）→ 50星+15钻石', () => {
  const state = createRewardState()
  for (let i = 0; i < 5; i++) {
    rewardForLesson(state, 100)
  }
  assertEqual(state.stars, 50)
  assertEqual(state.diamonds, 15)
})

test('完成5个课时（全二星）→ 35星+10钻石', () => {
  const state = createRewardState()
  for (let i = 0; i < 5; i++) {
    rewardForLesson(state, 85)
  }
  assertEqual(state.stars, 35)
  assertEqual(state.diamonds, 10)
})

test('混合正确率完成3课时 → 20星+5钻石', () => {
  const state = createRewardState()
  rewardForLesson(state, 100)  // 10+3
  rewardForLesson(state, 80)   // 7+2
  rewardForLesson(state, 50)   // 3+0
  assertEqual(state.stars, 20)
  assertEqual(state.diamonds, 5)
})

test('学习+签到+兑换完整流程', () => {
  const state = createRewardState()
  // 完成3个课时（全三星）：30星+9钻石
  rewardForLesson(state, 100)
  rewardForLesson(state, 100)
  rewardForLesson(state, 100)
  // 签到2天：+10星
  rewardForCheckIn(state)
  rewardForCheckIn(state)
  // 此时：40星+9钻石
  assertEqual(state.stars, 40)
  assertEqual(state.diamonds, 9)
  // 兑换冰淇淋（30星）：剩10星
  const ok = redeemWish(state, 'ice_cream')
  assertEqual(ok, true)
  assertEqual(state.stars, 10)
  // 解锁成就：+5钻石
  unlockAchievement(state, 'first_lesson')
  assertEqual(state.diamonds, 14)
})

test('答错题不会扣除星星（只获得较少星星）', () => {
  const state = createRewardState()
  // 第一次完成（100%）：+10星
  rewardForLesson(state, 100)
  assertEqual(state.stars, 10)
  // 第二次完成（50%）：+3星（不扣星）
  rewardForLesson(state, 50)
  assertEqual(state.stars, 13, '答错题不应扣星，只获得较少星星')
})

// ---- 8. 边界情况测试 ----
console.log('\n🔍 边界情况')

test('初始状态：0星0钻石', () => {
  const state = createRewardState()
  assertEqual(state.stars, 0)
  assertEqual(state.diamonds, 0)
})

test('兑换后星星为0，再兑换失败', () => {
  const state = createRewardState()
  state.stars = 30
  redeemWish(state, 'ice_cream')
  assertEqual(state.stars, 0)
  const ok = redeemWish(state, 'sticker')
  assertEqual(ok, false)
})

// ============ 测试结果 ============
console.log('\n========================================')
console.log(`📊 测试结果: ${passed} 通过, ${failed} 失败`)
if (failed > 0) {
  console.log('\n❌ 失败用例:')
  failures.forEach(f => {
    console.log(`  - ${f.name}: ${f.error}`)
  })
  process.exit(1)
} else {
  console.log('\n✅ 所有测试通过！')
  process.exit(0)
}
