import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { UserSettings, ParentMode } from '@/types'

const STORAGE_KEY = 'star-land-settings'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<UserSettings>({
    childName: '',
    parentMode: 'independent' as ParentMode,
    soundEnabled: true,
    musicEnabled: true,
    dailyGoal: 3,
    speechRate: 0,  // 0表示使用默认值，用户可设置0.5-1.5
    parentPin: '',  // 空表示未设置PIN码
  })

  const childName = ref<string>('')

  // 加载设置
  function loadSettings() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const data = JSON.parse(stored)
        Object.assign(settings.value, data)
        // 确保speechRate字段存在（兼容旧数据）
        if (settings.value.speechRate === undefined) {
          settings.value.speechRate = 0
        }
        // 确保parentPin字段存在（兼容旧数据）
        if (settings.value.parentPin === undefined) {
          settings.value.parentPin = ''
        }
        childName.value = settings.value.childName || ''
      } catch (e) {
        console.error('加载设置失败:', e)
      }
    }
  }

  // 保存设置
  function saveSettings() {
    settings.value.childName = childName.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings.value))
  }

  // 设置孩子名字
  function setChildName(name: string) {
    childName.value = name.trim()
    saveSettings()
  }

  // 设置语音速度 (0表示默认, 0.5-1.5为自定义范围)
  function setSpeechRate(rate: number) {
    const clampedRate = Math.max(0, Math.min(1.5, rate))
    settings.value.speechRate = clampedRate
    saveSettings()
  }

  // 设置家长PIN码
  function setParentPin(pin: string) {
    settings.value.parentPin = pin
    saveSettings()
  }

  // 验证家长PIN码
  function verifyParentPin(pin: string): boolean {
    return settings.value.parentPin === pin
  }

  // 是否已设置PIN码
  function hasParentPin(): boolean {
    return !!settings.value.parentPin
  }

  // 获取语音速度描述
  function getSpeechRateLabel(): string {
    const rate = settings.value.speechRate
    if (rate === 0 || !rate) return '默认'
    if (rate <= 0.6) return '很慢'
    if (rate <= 0.8) return '稍慢'
    if (rate <= 1.0) return '正常'
    if (rate <= 1.2) return '稍快'
    return '很快'
  }

  // 获取孩子名字（默认"小朋友"）
  function getChildName(): string {
    return childName.value || '小朋友'
  }

  // 获取鼓励语
  function getPraise(): string {
    const name = getChildName()
    const praises = [
      `${name}你真棒！`,
      `${name}太厉害了！`,
      `${name}做得真好！`,
      `${name}真聪明！`,
      `太棒了${name}！`,
      `${name}满分！`,
    ]
    return praises[Math.floor(Math.random() * praises.length)]
  }

  // 获取答错鼓励语
  function getEncourage(): string {
    const name = getChildName()
    const encourages = [
      `${name}再想想哦~`,
      `${name}加油！再试一次`,
      `${name}别灰心，继续努力！`,
      `没关系${name}，再来一次`,
    ]
    return encourages[Math.floor(Math.random() * encourages.length)]
  }

  // 初始化
  loadSettings()

  return {
    settings,
    childName,
    loadSettings,
    saveSettings,
    setChildName,
    setSpeechRate,
    setParentPin,
    verifyParentPin,
    hasParentPin,
    getSpeechRateLabel,
    getChildName,
    getPraise,
    getEncourage,
  }
})