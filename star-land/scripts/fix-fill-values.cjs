/**
 * 修复fill/flashcard类型题目的字段值错位问题
 * 原因：q()函数签名是(id, type, question, options, answer, hint, explanation)
 * 但fill/flashcard没有options，导致answer→options, hint→answer, explanation→hint
 * 修复：把当前answer→hint, 当前hint→explanation, 真正的answer需要从原options行恢复
 *
 * 但options行已被删除，所以需要另一种方法：
 * 检查fill/flashcard题目，如果answer看起来像hint（如包含"？"、"想"等），
 * 就把answer移到hint，hint移到explanation
 */
const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '..', 'src', 'data', 'math', 'grade1.ts'),
  path.join(__dirname, '..', 'src', 'data', 'math', 'grade2.ts'),
  path.join(__dirname, '..', 'src', 'data', 'math', 'grade3.ts'),
];

// 原始数据中fill/flashcard题目的正确值映射
// 从part1和part2脚本中提取
const correctData = {};

// 从expand-math-data-part1.cjs和part2.cjs中，我们知道fill/flashcard题目的参数顺序
// aq('id','fill','question','answer','hint','explanation')
// 但q()函数把第4个参数当作options，所以实际存储是：
// options='answer', answer='hint', hint='explanation', explanation=undefined

// 我们需要重新解析原始数据来获取正确的值
// 更简单的方法：直接从part1/part2的源代码中提取正确数据

// 读取part1和part2的源代码，解析出fill/flashcard题目的正确值
function parseCorrectValues(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const results = {};

  // 匹配 aq/cq/rq/bq 调用中的fill/flashcard题目
  // 格式: aq('id','fill','question','answer','hint','explanation')
  const regex = /(?:a|c|r|b)q\(\s*'([^']+)'\s*,\s*'(fill|flashcard)'\s*,\s*'([^']*)'\s*,\s*(?:\[([^\]]*)\]|'([^']*)')\s*,\s*'([^']*)'\s*,\s*'([^']*)'\s*,\s*'([^']*)'\s*\)/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const type = match[2];
    const question = match[3];
    // match[4] 是数组格式的options（choice类型），match[5] 是字符串格式的（fill类型）
    const answer = match[5] || match[4]; // fill类型用match[5]
    const hint = match[6];
    const explanation = match[7];
    results[id] = { id, type, question, answer, hint, explanation };
  }

  return results;
}

// 也需要处理lesson4Data和lesson5Data中的fill/flashcard题目
function parseLessonData(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const results = {};

  // 匹配 lesson4Data/lesson5Data 中的fill/flashcard题目
  // 格式: { id:'xxx', type:'fill', question:'xxx', answer:'xxx', hint:'xxx', explanation:'xxx' }
  const regex = /\{\s*id:\s*'([^']+)'\s*,\s*type:\s*'(fill|flashcard)'\s*,\s*question:\s*'([^']*)'\s*(?:,\s*options:\s*\[[^\]]*\])?\s*,\s*answer:\s*'([^']*)'\s*,\s*hint:\s*'([^']*)'\s*,\s*explanation:\s*'([^']*)'\s*\}/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    results[id] = {
      id,
      type: match[2],
      question: match[3],
      answer: match[4],
      hint: match[5],
      explanation: match[6]
    };
  }

  return results;
}

// 收集所有正确的数据
const part1Data = parseCorrectValues(path.join(__dirname, 'expand-math-data-part1.cjs'));
const part2Data = parseCorrectValues(path.join(__dirname, 'expand-math-data-part2.cjs'));
const lessonData = parseLessonData(path.join(__dirname, 'expand-math-main.cjs'));

const allCorrectData = { ...part1Data, ...part2Data, ...lessonData };

console.log(`从源代码中解析到 ${Object.keys(allCorrectData).length} 个fill/flashcard题目的正确数据`);

// 现在修复TS文件中的数据
for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let fixCount = 0;

  for (const [id, correct] of Object.entries(allCorrectData)) {
    // 在文件中查找这个id的题目
    const idPattern = `id: '${id}'`;
    if (!content.includes(idPattern)) continue;

    // 找到该题目的位置
    const idIdx = content.indexOf(idPattern);
    if (idIdx === -1) continue;

    // 找到该题目块的开始和结束
    let blockStart = content.lastIndexOf('{', idIdx);
    let depth = 0;
    let blockEnd = -1;
    for (let i = blockStart; i < content.length; i++) {
      if (content[i] === '{') depth++;
      if (content[i] === '}') {
        depth--;
        if (depth === 0) {
          blockEnd = i + 1;
          break;
        }
      }
    }

    if (blockEnd === -1) continue;

    const oldBlock = content.substring(blockStart, blockEnd);

    // 构建新的题目块
    let newBlock = `{
            id: '${correct.id}',
            type: '${correct.type}',
            question: '${correct.question.replace(/'/g, "\\'")}',`;
    if (correct.type === 'choice' || correct.type === 'drag') {
      // choice类型需要options，但这里我们只处理fill/flashcard
    }
    newBlock += `
            answer: '${correct.answer.replace(/'/g, "\\'")}',
            hint: '${correct.hint.replace(/'/g, "\\'")}',
            explanation: '${correct.explanation.replace(/'/g, "\\'")}'
          }`;

    if (oldBlock !== newBlock) {
      content = content.substring(0, blockStart) + newBlock + content.substring(blockEnd);
      fixCount++;
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`修复 ${path.basename(filePath)}: ${fixCount} 个题目`);
}

console.log('字段值修复完成！');
