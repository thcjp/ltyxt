import { useRewardStore } from '@/stores/reward'
import { useProgressStore } from '@/stores/progress'

export function useRewardSystem() {
  const rewardStore = useRewardStore()
  const progressStore = useProgressStore()

  // 完成课时奖励
  function rewardForLesson(accuracy: number) {
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
    rewardStore.addStars(stars, `完成课时（正确率${accuracy}%）`, 'lesson')
    if (diamonds > 0) {
      rewardStore.addDiamonds(diamonds, `完成课时（正确率${accuracy}%）`, 'lesson')
    }
    return { stars, diamonds }
  }

  // 签到奖励
  function rewardForCheckIn() {
    const stars = 5
    rewardStore.addStars(stars, '每日签到', 'checkin')
    return { stars }
  }

  // 考试奖励（期中/期末）
  function rewardForExam(accuracy: number, examType: 'midterm' | 'final') {
    const multiplier = examType === 'final' ? 3 : 2
    let stars = 0
    let diamonds = 0
    if (accuracy >= 95) {
      stars = 20 * multiplier
      diamonds = 6 * multiplier
    } else if (accuracy >= 80) {
      stars = 15 * multiplier
      diamonds = 4 * multiplier
    } else if (accuracy >= 60) {
      stars = 10 * multiplier
      diamonds = 2 * multiplier
    } else {
      stars = 5 * multiplier
      diamonds = 0
    }
    const examName = examType === 'final' ? '期末考试' : '期中考试'
    rewardStore.addStars(stars, `${examName}（正确率${accuracy}%）`, 'lesson')
    if (diamonds > 0) {
      rewardStore.addDiamonds(diamonds, `${examName}（正确率${accuracy}%）`, 'lesson')
    }
    return { stars, diamonds }
  }

  // 检查成就
  function checkAchievements() {
    const totalCompleted = progressStore.totalCompleted
    const streak = progressStore.currentStreak

    if (totalCompleted >= 1) rewardStore.unlockAchievement('first_lesson')
    if (streak >= 3) rewardStore.unlockAchievement('streak_3')
    if (streak >= 7) rewardStore.unlockAchievement('streak_7')
    if (totalCompleted >= 50) rewardStore.unlockAchievement('persistent')
    if (rewardStore.stars >= 100) rewardStore.unlockAchievement('collector')
  }

  return {
    rewardForLesson,
    rewardForCheckIn,
    rewardForExam,
    checkAchievements,
  }
}
