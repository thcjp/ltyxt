// emoji 清洗测试
const EMOJI_NAME_MAP = {
  '⭐': '星星', '🌟': '星星', '✨': '闪光',
  '🌸': '花', '🌺': '花', '🌻': '向日葵', '🌹': '玫瑰', '🌷': '郁金香',
  '🍎': '苹果', '🍌': '香蕉', '🍇': '葡萄', '🍊': '橘子', '🍓': '草莓',
  '🐶': '小狗', '🐱': '小猫', '🐰': '兔子',
}

const EMOJI_MEASURE_MAP = {
  '⭐': '颗', '🌟': '颗', '🌸': '朵', '🌺': '朵', '🌹': '朵',
  '🍎': '个', '🍌': '根', '🍇': '串',
  '🐶': '只', '🐱': '只', '🐰': '只',
}

function cleanEmojiForTTS(text) {
  let result = text
  // 匹配连续重复的同一个 emoji（2个及以上），支持可选的变体选择符（U+FE0F）
  result = result.replace(
    /([\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}])\u{FE0F}?(?:\1\u{FE0F}?)+/gu,
    (match, emoji) => {
      const count = [...match].filter(c => c === emoji).length
      const name = EMOJI_NAME_MAP[emoji] || ''
      const measure = EMOJI_MEASURE_MAP[emoji] || '个'
      if (name) {
        return `${count}${measure}${name}`
      }
      return `${count}个`
    }
  )

  // 处理单个 emoji
  result = result.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/gu, (emoji) => {
    return EMOJI_NAME_MAP[emoji] || ''
  })

  result = result.replace(/\s+/g, ' ').trim()
  return result
}

// 测试用例
const tests = [
  { input: '⭐⭐⭐⭐⭐⭐=6', expected: '6颗星星=6', desc: '6 stars equals 6' },
  { input: '⭐⭐⭐⭐⭐⭐⭐=7', expected: '7颗星星=7', desc: '7 stars equals 7' },
  { input: '🌸🌸🌸🌸🌸=5', expected: '5朵花=5', desc: '5 flowers equals 5' },
  { input: '🌸=1，🌸🌸=2，🌸🌸🌸=3', expected: '花=1，2朵花=2，3朵花=3', desc: 'flowers incremental' },
  { input: '🍎🍎🍎和🌸🌸', expected: '3个苹果和2朵花', desc: 'mixed emoji' },
  { input: '得到5颗星星', expected: '得到5颗星星', desc: 'pure chinese unaffected' },
  { input: '小狗小狗', expected: '小狗小狗', desc: 'chinese text unaffected' },
  { input: '🐶🐶🐶', expected: '3只小狗', desc: '3 dogs' },
  { input: '⭐', expected: '星星', desc: 'single star' },
  { input: '⭐⭐', expected: '2颗星星', desc: '2 stars' },
  { input: '⭐️⭐️⭐️', expected: '3颗星星', desc: '3 stars with VS16' },
  { input: '5+3=⭐⭐⭐⭐⭐⭐⭐⭐', expected: '5+3=8颗星星', desc: 'math with 8 stars' },
]

let passed = 0
let failed = 0

tests.forEach((test, i) => {
  const result = cleanEmojiForTTS(test.input)
  const ok = result === test.expected
  if (ok) {
    passed++
    console.log(`  PASS Test${i+1}: ${test.desc} -> "${result}"`)
  } else {
    failed++
    console.log(`  FAIL Test${i+1}: ${test.desc}`)
    console.log(`    input:    "${test.input}"`)
    console.log(`    expected: "${test.expected}"`)
    console.log(`    actual:   "${result}"`)
  }
})

console.log(`\nResult: ${passed} passed, ${failed} failed`)
process.exit(failed > 0 ? 1 : 0)
