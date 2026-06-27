<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useSpeech } from '@/composables/useSpeech'
import { getPhonicsUnitsByGrade, type PhonicsUnit, type LetterSound, type WordFamily, type BlendDigraph, type SightWord } from '@/data/english/phonicsData'
import { X, Volume2, CheckCircle, Star, ArrowRight, RotateCcw, BookOpen, Headphones, Pencil } from 'lucide-vue-next'

const props = defineProps<{
  grade: number
}>()

const emit = defineEmits<{ close: [] }>()

const { speakEnglish } = useSpeech()

const units = computed(() => getPhonicsUnitsByGrade(props.grade))
const currentUnitIndex = ref(0)
const currentUnit = computed(() => units.value[currentUnitIndex.value])

// 练习模式：'learn' | 'blend' | 'spell' | 'sight'
const mode = ref<'learn' | 'blend' | 'spell' | 'sight'>('learn')

// 拼读练习状态
const blendStep = ref(0)  // 0=分音素，1=合读，2=完整
const blendWord = ref<{ word: string; cn: string; emoji: string } | null>(null)

// 拼写练习状态
const spellWord = ref<{ word: string; cn: string; emoji: string } | null>(null)
const spellInput = ref('')
const spellResult = ref<'none' | 'correct' | 'wrong'>('none')
const spellScore = ref(0)
const spellTotal = ref(0)

// Sight Words 状态
const sightWordIndex = ref(0)
const sightWords = computed<SightWord[]>(() => {
  if (!currentUnit.value || currentUnit.value.type !== 'sight_words') return []
  return currentUnit.value.data as SightWord[]
})
const currentSightWord = computed(() => sightWords.value[sightWordIndex.value])

// 选择当前单元的第一个词作为拼读/拼写练习对象
function startBlendPractice() {
  mode.value = 'blend'
  blendStep.value = 0
  pickRandomWord()
}

function pickRandomWord() {
  if (!currentUnit.value) return
  let words: { word: string; cn: string; emoji: string }[] = []
  if (currentUnit.value.type === 'cvc' || currentUnit.value.type === 'long_vowel') {
    const families = currentUnit.value.data as WordFamily[]
    families.forEach(f => words.push(...f.words))
  } else if (currentUnit.value.type === 'blend_digraph') {
    const blends = currentUnit.value.data as BlendDigraph[]
    blends.forEach(b => words.push(...b.words))
  }
  if (words.length > 0) {
    blendWord.value = words[Math.floor(Math.random() * words.length)]
  }
}

// 分解单词为音素（简化版：按字母拆分）
function splitPhonemes(word: string): string[] {
  // 常见字母组合作为整体
  const digraphs = ['sh', 'ch', 'th', 'oo', 'ee', 'ea', 'ar', 'or', 'er', 'ir', 'ur', 'bl', 'br', 'cl', 'cr', 'dr', 'fl', 'tr', 'st']
  const result: string[] = []
  let i = 0
  while (i < word.length) {
    if (i < word.length - 1) {
      const pair = word.slice(i, i + 2).toLowerCase()
      if (digraphs.includes(pair)) {
        result.push(pair)
        i += 2
        continue
      }
    }
    // 处理 a-e / i-e 等魔法E结构
    if (word.length > 3 && i === 0 && word[word.length - 1] === 'e' && 'aeiou'.includes(word[i])) {
      result.push(word[i] + '-e')
      i++
      continue
    }
    result.push(word[i])
    i++
  }
  return result
}

const phonemes = computed(() => blendWord.value ? splitPhonemes(blendWord.value.word) : [])

function speakPhoneme(ph: string) {
  // 逐音素朗读
  speakEnglish(ph.replace('-', ''))
}

function speakWholeWord() {
  if (blendWord.value) {
    speakEnglish(blendWord.value.word)
  }
}

function nextBlendStep() {
  if (blendStep.value < 2) {
    blendStep.value++
    if (blendStep.value === 1) {
      // 合读步骤：朗读整个词
      setTimeout(() => speakWholeWord(), 300)
    }
  } else {
    // 完成一轮，换新词
    blendStep.value = 0
    pickRandomWord()
  }
}

// 拼写练习
function startSpellPractice() {
  mode.value = 'spell'
  spellScore.value = 0
  spellTotal.value = 0
  nextSpellWord()
}

function nextSpellWord() {
  if (!currentUnit.value) return
  let words: { word: string; cn: string; emoji: string }[] = []
  if (currentUnit.value.type === 'cvc' || currentUnit.value.type === 'long_vowel') {
    const families = currentUnit.value.data as WordFamily[]
    families.forEach(f => words.push(...f.words))
  } else if (currentUnit.value.type === 'blend_digraph') {
    const blends = currentUnit.value.data as BlendDigraph[]
    blends.forEach(b => words.push(...b.words))
  } else if (currentUnit.value.type === 'sight_words') {
    const sw = currentUnit.value.data as SightWord[]
    words = sw.map(s => ({ word: s.word, cn: s.cn, emoji: '⭐' }))
  }
  if (words.length > 0) {
    spellWord.value = words[Math.floor(Math.random() * words.length)]
    spellInput.value = ''
    spellResult.value = 'none'
    // 朗读单词
    setTimeout(() => speakEnglish(spellWord.value!.word), 300)
  }
}

function checkSpell() {
  if (!spellWord.value || !spellInput.value.trim()) return
  spellTotal.value++
  if (spellInput.value.trim().toLowerCase() === spellWord.value.word.toLowerCase()) {
    spellResult.value = 'correct'
    spellScore.value++
    speakEnglish(spellWord.value.word)
  } else {
    spellResult.value = 'wrong'
  }
}

function nextSpell() {
  nextSpellWord()
}

// Sight Words 模式
function startSightPractice() {
  mode.value = 'sight'
  sightWordIndex.value = 0
  if (currentSightWord.value) {
    setTimeout(() => speakEnglish(currentSightWord.value.word), 300)
  }
}

function nextSightWord() {
  if (sightWordIndex.value < sightWords.value.length - 1) {
    sightWordIndex.value++
    if (currentSightWord.value) {
      setTimeout(() => speakEnglish(currentSightWord.value.word), 300)
    }
  }
}

function prevSightWord() {
  if (sightWordIndex.value > 0) {
    sightWordIndex.value--
    if (currentSightWord.value) {
      setTimeout(() => speakEnglish(currentSightWord.value.word), 300)
    }
  }
}

// 切换单元
function selectUnit(index: number) {
  currentUnitIndex.value = index
  mode.value = 'learn'
}

// 朗读字母音
function speakLetterSound(ls: LetterSound) {
  speakEnglish(ls.exampleWord)
}

// 朗读 Word Family
function speakFamilyWord(word: string) {
  speakEnglish(word)
}

onMounted(() => {
  if (units.value.length === 0) {
    emit('close')
  }
})
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
    <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
      <!-- 头部 -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-title text-xl text-gray-800 flex items-center gap-2">
          <BookOpen class="w-5 h-5 text-blue-500" />
          自然拼读 Phonics
        </h2>
        <button @click="emit('close')" class="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- 单元选择 -->
      <div class="flex gap-2 mb-4 overflow-x-auto pb-2">
        <button
          v-for="(unit, idx) in units"
          :key="unit.id"
          @click="selectUnit(idx)"
          class="flex-shrink-0 px-3 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap"
          :class="currentUnitIndex === idx ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          {{ unit.title }}
        </button>
      </div>

      <!-- 模式切换 -->
      <div v-if="currentUnit" class="flex gap-2 mb-4">
        <button @click="mode = 'learn'" :class="mode === 'learn' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'" class="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
          <BookOpen class="w-3 h-3" /> 学习
        </button>
        <button v-if="currentUnit.type !== 'letter_sound'" @click="startBlendPractice" :class="mode === 'blend' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'" class="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
          <Headphones class="w-3 h-3" /> 拼读
        </button>
        <button v-if="currentUnit.type !== 'letter_sound'" @click="startSpellPractice" :class="mode === 'spell' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'" class="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
          <Pencil class="w-3 h-3" /> 拼写
        </button>
        <button v-if="currentUnit.type === 'sight_words'" @click="startSightPractice" :class="mode === 'sight' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'" class="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
          <Star class="w-3 h-3" /> 高频词
        </button>
      </div>

      <!-- 学习模式 -->
      <div v-if="currentUnit && mode === 'learn'">
        <p class="text-sm text-gray-500 mb-3">{{ currentUnit.description }}</p>

        <!-- 字母音 -->
        <div v-if="currentUnit.type === 'letter_sound'" class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div v-for="item in (currentUnit.data as LetterSound[])" :key="item.letter" class="card bg-blue-50 p-3 text-center cursor-pointer hover:bg-blue-100" @click="speakLetterSound(item)">
            <div class="text-3xl font-bold text-blue-600 mb-1">{{ item.letter }}</div>
            <div class="text-sm text-gray-500">{{ item.sound }}</div>
            <div class="text-xs text-gray-400">{{ item.soundCn }}</div>
            <div class="mt-2 text-2xl">{{ item.emoji }}</div>
            <div class="text-xs text-gray-600">{{ item.exampleWord }} {{ item.exampleCn }}</div>
          </div>
        </div>

        <!-- Word Family / CVC / 长元音 -->
        <div v-else-if="currentUnit.type === 'cvc' || currentUnit.type === 'long_vowel'" class="space-y-4">
          <div v-for="family in (currentUnit.data as WordFamily[])" :key="family.family" class="card bg-green-50 p-4">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-lg font-bold text-green-600">{{ family.family }}</span>
              <span class="text-sm text-gray-400">{{ family.familySound }}</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div v-for="w in family.words" :key="w.word" class="bg-white rounded-lg p-2 text-center cursor-pointer hover:bg-green-100" @click="speakFamilyWord(w.word)">
                <div class="text-2xl mb-1">{{ w.emoji }}</div>
                <div class="font-medium text-gray-700">{{ w.word }}</div>
                <div class="text-xs text-gray-400">{{ w.cn }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 字母组合 -->
        <div v-else-if="currentUnit.type === 'blend_digraph'" class="space-y-4">
          <div v-for="blend in (currentUnit.data as BlendDigraph[])" :key="blend.pattern" class="card bg-purple-50 p-4">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-lg font-bold text-purple-600">{{ blend.pattern }}</span>
              <span class="text-sm text-gray-400">{{ blend.sound }}</span>
              <span class="text-xs text-gray-400">{{ blend.soundCn }}</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div v-for="w in blend.words" :key="w.word" class="bg-white rounded-lg p-2 text-center cursor-pointer hover:bg-purple-100" @click="speakFamilyWord(w.word)">
                <div class="text-2xl mb-1">{{ w.emoji }}</div>
                <div class="font-medium text-gray-700">{{ w.word }}</div>
                <div class="text-xs text-gray-400">{{ w.cn }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sight Words -->
        <div v-else-if="currentUnit.type === 'sight_words'" class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div v-for="sw in (currentUnit.data as SightWord[])" :key="sw.word" class="card bg-yellow-50 p-3 text-center cursor-pointer hover:bg-yellow-100" @click="speakEnglish(sw.word)">
            <div class="text-lg font-bold text-yellow-600 mb-1">{{ sw.word }}</div>
            <div class="text-xs text-gray-400 mb-1">{{ sw.cn }}</div>
            <div class="text-xs text-gray-500 italic">"{{ sw.sentence }}"</div>
          </div>
        </div>
      </div>

      <!-- 拼读模式 -->
      <div v-if="currentUnit && mode === 'blend' && blendWord" class="text-center py-4">
        <div class="text-6xl mb-4">{{ blendWord.emoji }}</div>
        <div class="text-sm text-gray-400 mb-4">{{ blendWord.cn }}</div>

        <!-- 步骤0：分音素 -->
        <div v-if="blendStep === 0" class="space-y-4">
          <p class="text-sm text-gray-600 mb-3">第1步：逐个音素朗读</p>
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <button
              v-for="(ph, i) in phonemes"
              :key="i"
              @click="speakPhoneme(ph)"
              class="px-4 py-3 bg-blue-100 rounded-xl text-2xl font-bold text-blue-600 hover:bg-blue-200"
            >
              {{ ph }}
            </button>
          </div>
          <button @click="nextBlendStep" class="btn-primary mt-4">
            合读 <ArrowRight class="w-4 h-4 inline" />
          </button>
        </div>

        <!-- 步骤1：合读 -->
        <div v-if="blendStep === 1" class="space-y-4">
          <p class="text-sm text-gray-600 mb-3">第2步：合在一起读</p>
          <div class="text-4xl font-bold text-green-600 mb-3">{{ blendWord.word }}</div>
          <button @click="speakWholeWord" class="p-3 rounded-xl bg-green-100 text-green-600 hover:bg-green-200">
            <Volume2 class="w-6 h-6" />
          </button>
          <button @click="nextBlendStep" class="btn-primary block mx-auto mt-4">
            完成 <CheckCircle class="w-4 h-4 inline" />
          </button>
        </div>

        <!-- 步骤2：完成 -->
        <div v-if="blendStep === 2" class="space-y-4">
          <div class="text-4xl mb-2">🎉</div>
          <p class="text-green-600 font-medium">拼对了，你真努力！</p>
          <button @click="nextBlendStep" class="btn-primary">
            下一词 <ArrowRight class="w-4 h-4 inline" />
          </button>
        </div>
      </div>

      <!-- 拼写模式 -->
      <div v-if="currentUnit && mode === 'spell' && spellWord" class="text-center py-4">
        <div class="text-6xl mb-3">{{ spellWord.emoji }}</div>
        <div class="text-sm text-gray-400 mb-2">{{ spellWord.cn }}</div>
        <p class="text-sm text-gray-600 mb-3">听音拼写：写出你听到的单词</p>

        <button @click="speakEnglish(spellWord.word)" class="p-3 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
          <Volume2 class="w-6 h-6" /> 再听一次
        </button>

        <div class="flex items-center justify-center gap-2 mb-4">
          <input
            v-model="spellInput"
            type="text"
            :disabled="spellResult !== 'none'"
            class="px-4 py-3 border-2 border-gray-200 rounded-xl text-2xl text-center font-bold focus:border-primary-500 outline-none w-48"
            placeholder="拼写..."
            @keyup.enter="checkSpell"
          />
        </div>

        <div v-if="spellResult === 'correct'" class="space-y-2">
          <p class="text-green-600 font-medium flex items-center justify-center gap-1">
            <CheckCircle class="w-5 h-5" /> 正确！
          </p>
          <p class="text-sm text-gray-500">得分：{{ spellScore }} / {{ spellTotal }}</p>
          <button @click="nextSpell" class="btn-primary">下一词 <ArrowRight class="w-4 h-4 inline" /></button>
        </div>

        <div v-if="spellResult === 'wrong'" class="space-y-2">
          <p class="text-red-500 font-medium">再试试！正确答案是：{{ spellWord.word }}</p>
          <button @click="nextSpell" class="btn-primary">下一词 <ArrowRight class="w-4 h-4 inline" /></button>
        </div>

        <button v-if="spellResult === 'none'" @click="checkSpell" class="btn-primary">确认拼写</button>
      </div>

      <!-- Sight Words 模式 -->
      <div v-if="currentUnit && mode === 'sight' && currentSightWord" class="text-center py-4">
        <div class="text-sm text-gray-400 mb-2">第 {{ sightWordIndex + 1 }} / {{ sightWords.length }} 词</div>
        <div class="text-5xl font-bold text-yellow-500 mb-4">{{ currentSightWord.word }}</div>
        <div class="text-lg text-gray-600 mb-4">{{ currentSightWord.cn }}</div>

        <button @click="speakEnglish(currentSightWord.word)" class="p-3 rounded-xl bg-yellow-100 text-yellow-600 hover:bg-yellow-200 mb-4">
          <Volume2 class="w-6 h-6" /> 朗读
        </button>

        <div class="card bg-yellow-50 p-4 mb-4">
          <p class="text-sm text-gray-700 italic mb-1">"{{ currentSightWord.sentence }}"</p>
          <p class="text-xs text-gray-400">{{ currentSightWord.sentenceCn }}</p>
        </div>

        <div class="flex justify-center gap-2">
          <button @click="prevSightWord" :disabled="sightWordIndex === 0" class="px-4 py-2 bg-gray-100 rounded-xl text-sm disabled:opacity-30">上一个</button>
          <button @click="nextSightWord" :disabled="sightWordIndex === sightWords.length - 1" class="px-4 py-2 bg-primary-500 text-white rounded-xl text-sm">下一个</button>
        </div>
      </div>
    </div>
  </div>
</template>
