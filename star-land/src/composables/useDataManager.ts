import { ref } from 'vue'

// 所有需要导出/导入的 localStorage key
const STORAGE_KEYS = [
  'star-land-progress',
  'star-land-wrong-questions',
  'star-land-study-logs',
  'star-land-unit-tests',
  'star-land-rewards',
  'star-land-settings',
  'star-land-writing-records', // 书写练习记录（任务3新增）
  'theme',
]

export interface ExportData {
  version: string
  exportTime: string
  data: Record<string, string>
}

export function useDataManager() {
  const exporting = ref(false)
  const importing = ref(false)
  const importMessage = ref('')
  const importSuccess = ref(false)

  // 导出所有数据为 JSON 文件
  function exportAllData() {
    exporting.value = true
    try {
      const data: Record<string, string> = {}
      for (const key of STORAGE_KEYS) {
        const value = localStorage.getItem(key)
        if (value !== null) {
          data[key] = value
        }
      }

      const exportPayload: ExportData = {
        version: '1.0',
        exportTime: new Date().toISOString(),
        data,
      }

      const jsonStr = JSON.stringify(exportPayload, null, 2)
      const blob = new Blob([jsonStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)

      const childName = localStorage.getItem('star-land-settings')
      let nameSuffix = ''
      try {
        const settings = childName ? JSON.parse(childName) : null
        if (settings?.childName) {
          nameSuffix = `_${settings.childName}`
        }
      } catch { /* ignore */ }

      const dateStr = new Date().toISOString().split('T')[0]
      const fileName = `star-land-backup${nameSuffix}_${dateStr}.json`

      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } finally {
      exporting.value = false
    }
  }

  // 从 JSON 文件导入数据
  async function importAllData(file: File): Promise<boolean> {
    importing.value = true
    importMessage.value = ''
    importSuccess.value = false
    try {
      const text = await file.text()
      const parsed = JSON.parse(text) as ExportData

      if (!parsed.data || typeof parsed.data !== 'object') {
        importMessage.value = '文件格式错误：缺少 data 字段'
        return false
      }

      // 写入 localStorage
      let importedCount = 0
      for (const key of STORAGE_KEYS) {
        if (parsed.data[key] !== undefined) {
          localStorage.setItem(key, parsed.data[key])
          importedCount++
        }
      }

      importMessage.value = `成功导入 ${importedCount} 项数据，页面即将刷新...`
      importSuccess.value = true

      // 延迟刷新让用户看到提示
      setTimeout(() => {
        window.location.reload()
      }, 1500)

      return true
    } catch (e) {
      importMessage.value = `导入失败：${e instanceof Error ? e.message : '未知错误'}`
      return false
    } finally {
      importing.value = false
    }
  }

  // 清除所有数据（需谨慎调用）
  function clearAllData() {
    for (const key of STORAGE_KEYS) {
      localStorage.removeItem(key)
    }
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  // 触发文件选择
  function triggerImport(input: HTMLInputElement) {
    const file = input.files?.[0]
    if (file) {
      importAllData(file)
    }
    // 重置 input 允许重复选择同一文件
    input.value = ''
  }

  return {
    exporting,
    importing,
    importMessage,
    importSuccess,
    exportAllData,
    importAllData,
    clearAllData,
    triggerImport,
  }
}
