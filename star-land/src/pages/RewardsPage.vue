<script setup lang="ts">
import { ref } from 'vue'
import { useRewardStore } from '@/stores/reward'
import { Star, Diamond, ShoppingBag, Award, Info, ChevronDown, ChevronUp } from 'lucide-vue-next'

const rewardStore = useRewardStore()
const showRules = ref(false)
</script>

<template>
  <div class="min-h-screen p-4 pt-6">
    <h1 class="font-title text-2xl text-gray-800 mb-4">奖励中心</h1>

    <!-- 货币余额 -->
    <div class="grid grid-cols-2 gap-3 mb-4">
      <div class="card text-center bg-yellow-50">
        <Star class="w-8 h-8 text-star-gold fill-star-gold mx-auto mb-1" />
        <p class="font-title text-2xl text-yellow-700">{{ rewardStore.stars }}</p>
        <p class="text-xs text-yellow-600">星星</p>
      </div>
      <div class="card text-center bg-blue-50">
        <Diamond class="w-8 h-8 text-blue-500 mx-auto mb-1" />
        <p class="font-title text-2xl text-blue-700">{{ rewardStore.diamonds }}</p>
        <p class="text-xs text-blue-600">钻石</p>
      </div>
    </div>

    <!-- 奖励规则说明 -->
    <div class="card mb-4 bg-gradient-to-br from-primary-50 to-secondary-50">
      <button @click="showRules = !showRules" class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Info class="w-4 h-4 text-primary-500" />
          <span class="font-medium text-sm text-primary-700">奖励规则说明</span>
        </div>
        <component :is="showRules ? ChevronUp : ChevronDown" class="w-4 h-4 text-primary-400" />
      </button>
      <div v-if="showRules" class="mt-3 space-y-3 text-xs text-gray-600">
        <!-- 星星获取 -->
        <div class="bg-white/80 rounded-xl p-3">
          <p class="font-medium text-yellow-700 mb-2 flex items-center gap-1"><Star class="w-3 h-3" /> 如何获得星星</p>
          <ul class="space-y-1">
            <li class="flex justify-between"><span>完成课时（正确率≥95%，三星）</span><span class="text-yellow-600 font-medium">+10 ⭐</span></li>
            <li class="flex justify-between"><span>完成课时（正确率≥80%，二星）</span><span class="text-yellow-600 font-medium">+7 ⭐</span></li>
            <li class="flex justify-between"><span>完成课时（正确率≥60%，一星）</span><span class="text-yellow-600 font-medium">+5 ⭐</span></li>
            <li class="flex justify-between"><span>完成课时（正确率&lt;60%，鼓励星）</span><span class="text-yellow-600 font-medium">+3 ⭐</span></li>
            <li class="flex justify-between"><span>每日签到</span><span class="text-yellow-600 font-medium">+5 ⭐</span></li>
            <li class="flex justify-between"><span>家长手动加分（家长面板）</span><span class="text-yellow-600 font-medium">家长设定</span></li>
          </ul>
        </div>
        <!-- 钻石获取 -->
        <div class="bg-white/80 rounded-xl p-3">
          <p class="font-medium text-blue-700 mb-2 flex items-center gap-1"><Diamond class="w-3 h-3" /> 如何获得钻石</p>
          <ul class="space-y-1">
            <li class="flex justify-between"><span>完成课时（正确率≥95%，三星）</span><span class="text-blue-600 font-medium">+3 💎</span></li>
            <li class="flex justify-between"><span>完成课时（正确率≥80%，二星）</span><span class="text-blue-600 font-medium">+2 💎</span></li>
            <li class="flex justify-between"><span>完成课时（正确率≥60%，一星）</span><span class="text-blue-600 font-medium">+1 💎</span></li>
            <li class="flex justify-between"><span>完成课时（正确率&lt;60%）</span><span class="text-blue-600 font-medium">+0 💎</span></li>
            <li class="flex justify-between"><span>解锁成就勋章</span><span class="text-blue-600 font-medium">+5 💎</span></li>
          </ul>
        </div>
        <!-- 星星消耗 -->
        <div class="bg-white/80 rounded-xl p-3">
          <p class="font-medium text-orange-700 mb-2">🌟 星星如何消耗</p>
          <ul class="space-y-1">
            <li class="flex justify-between"><span>兑换冰淇淋</span><span class="text-orange-600 font-medium">-30 ⭐</span></li>
            <li class="flex justify-between"><span>兑换贴纸套装</span><span class="text-orange-600 font-medium">-40 ⭐</span></li>
            <li class="flex justify-between"><span>兑换看动画片30分钟</span><span class="text-orange-600 font-medium">-50 ⭐</span></li>
            <li class="flex justify-between"><span>兑换故事书</span><span class="text-orange-600 font-medium">-80 ⭐</span></li>
            <li class="flex justify-between"><span>兑换去公园玩</span><span class="text-orange-600 font-medium">-100 ⭐</span></li>
            <li class="flex justify-between"><span>兑换新玩具</span><span class="text-orange-600 font-medium">-200 ⭐</span></li>
          </ul>
          <p class="text-[10px] text-gray-400 mt-2">💡 星星不会因为答错题而扣除，只会因为兑换心愿而减少。答错题只是获得较少的星星。</p>
        </div>
        <!-- 钻石消耗 -->
        <div class="bg-white/80 rounded-xl p-3">
          <p class="font-medium text-cyan-700 mb-2">💎 钻石如何消耗</p>
          <ul class="space-y-1">
            <li v-for="item in rewardStore.diamondItems" :key="item.id" class="flex justify-between">
              <span>{{ item.icon }} {{ item.name }}</span>
              <span class="text-cyan-600 font-medium">-{{ item.diamondCost }} 💎</span>
            </li>
          </ul>
          <p class="text-[10px] text-gray-400 mt-2">💡 钻石比星星更珍贵，只能通过三星完成课时或解锁成就获得。家长可在家长中心修改或新增钻石兑换项。</p>
        </div>
        <!-- 星级说明 -->
        <div class="bg-white/80 rounded-xl p-3">
          <p class="font-medium text-purple-700 mb-2">⭐ 课时星级说明</p>
          <ul class="space-y-1">
            <li class="flex justify-between"><span>三星 ⭐⭐⭐</span><span class="text-purple-600 font-medium">正确率 ≥ 95%</span></li>
            <li class="flex justify-between"><span>二星 ⭐⭐</span><span class="text-purple-600 font-medium">正确率 ≥ 80%</span></li>
            <li class="flex justify-between"><span>一星 ⭐</span><span class="text-purple-600 font-medium">正确率 ≥ 60%</span></li>
            <li class="flex justify-between"><span>未达标</span><span class="text-purple-600 font-medium">正确率 &lt; 60%</span></li>
          </ul>
          <p class="text-[10px] text-gray-400 mt-2">💡 重新完成课时可以提升星级，星星奖励按本次正确率计算。</p>
        </div>
        <!-- 勋章获取 -->
        <div class="bg-white/80 rounded-xl p-3">
          <p class="font-medium text-purple-700 mb-2">🏅 如何获得勋章</p>
          <ul class="space-y-1">
            <li>🌱 初出茅庐 — 完成第1个课时</li>
            <li>🔥 三日连胜 — 连续学习3天</li>
            <li>⚡ 周周不断 — 连续学习7天</li>
            <li>💯 零失误 — 一个课时全部答对</li>
            <li>⭐ 星星收藏家 — 累计获得100颗星星</li>
            <li>💪 坚持不懈 — 完成50个课时</li>
            <li>🚀 逆袭之星 — 从一星升到三星</li>
            <li>👑 完美一天 — 一天内三科全部完成</li>
            <li class="text-gray-400">...更多勋章等你解锁</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 心愿商店 -->
    <h2 class="font-title text-xl text-gray-800 mb-3 flex items-center gap-2">
      <ShoppingBag class="w-5 h-5 text-primary-500" /> 心愿商店
    </h2>
    <div class="grid grid-cols-2 gap-3 mb-6">
      <div
        v-for="item in rewardStore.wishItems"
        :key="item.id"
        class="card text-center"
        :class="{ 'opacity-50': item.stock === 0 }"
      >
        <p class="text-3xl mb-2">{{ item.icon }}</p>
        <p class="font-medium text-sm">{{ item.name }}</p>
        <p class="text-xs text-gray-500 mb-1">{{ item.description }}</p>
        <!-- 库存显示 -->
        <p class="text-xs mb-2" :class="item.stock === 0 ? 'text-red-400' : item.stock === -1 ? 'text-green-500' : 'text-gray-400'">
          {{ item.stock === -1 ? '不限' : item.stock === 0 ? '已兑完' : `剩余 ${item.stock}` }}
        </p>
        <button
          v-if="item.stock !== 0"
          @click="rewardStore.redeemWish(item.id)"
          :disabled="rewardStore.stars < item.starCost"
          class="btn-primary text-xs px-3 py-1.5"
          :class="{ 'opacity-50 cursor-not-allowed': rewardStore.stars < item.starCost }"
        >
          ⭐{{ item.starCost }}
        </button>
        <span v-else class="text-xs text-red-400">已兑完</span>
      </div>
    </div>

    <!-- 钻石商店 -->
    <h2 class="font-title text-xl text-gray-800 mb-3 flex items-center gap-2">
      <Diamond class="w-5 h-5 text-blue-500" /> 钻石商店
    </h2>
    <div class="grid grid-cols-2 gap-3 mb-6">
      <div
        v-for="item in rewardStore.diamondItems"
        :key="item.id"
        class="card text-center"
        :class="{ 'opacity-50': item.stock === 0 }"
      >
        <p class="text-3xl mb-2">{{ item.icon }}</p>
        <p class="font-medium text-sm">{{ item.name }}</p>
        <p class="text-xs text-gray-500 mb-1">{{ item.description }}</p>
        <!-- 库存显示 -->
        <p class="text-xs mb-2" :class="item.stock === 0 ? 'text-red-400' : item.stock === -1 ? 'text-green-500' : 'text-gray-400'">
          {{ item.stock === -1 ? '不限' : item.stock === 0 ? '已兑完' : `剩余 ${item.stock}` }}
        </p>
        <button
          v-if="item.stock !== 0"
          @click="rewardStore.redeemDiamondItem(item.id)"
          :disabled="rewardStore.diamonds < item.diamondCost"
          class="btn-primary text-xs px-3 py-1.5"
          :class="{ 'opacity-50 cursor-not-allowed': rewardStore.diamonds < item.diamondCost }"
        >
          💎{{ item.diamondCost }}
        </button>
        <span v-else class="text-xs text-red-400">已兑完</span>
      </div>
    </div>

    <!-- 成就墙 -->
    <h2 class="font-title text-xl text-gray-800 mb-3 flex items-center gap-2">
      <Award class="w-5 h-5 text-secondary-500" /> 成就墙
      <span class="text-sm text-gray-400">({{ rewardStore.unlockedCount }}/{{ rewardStore.achievements.length }})</span>
    </h2>
    <div class="grid grid-cols-4 gap-2 mb-6">
      <div
        v-for="ach in rewardStore.achievements"
        :key="ach.id"
        class="aspect-square rounded-2xl flex flex-col items-center justify-center text-center p-2"
        :class="ach.unlocked ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' : 'bg-gray-100'"
      >
        <p class="text-2xl" :class="{ 'grayscale opacity-30': !ach.unlocked }">{{ ach.icon }}</p>
        <p class="text-[10px] mt-1" :class="ach.unlocked ? 'text-gray-700' : 'text-gray-400'">{{ ach.name }}</p>
      </div>
    </div>
  </div>
</template>
