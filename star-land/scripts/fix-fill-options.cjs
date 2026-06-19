/**
 * 修复fill/flashcard类型题目中options字段被错误赋值的问题
 * fill和flashcard类型不应该有options字段
 */
const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '..', 'src', 'data', 'math', 'grade1.ts'),
  path.join(__dirname, '..', 'src', 'data', 'math', 'grade2.ts'),
  path.join(__dirname, '..', 'src', 'data', 'math', 'grade3.ts'),
];

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  let fixCount = 0;

  for (let i = 0; i < lines.length; i++) {
    // 查找 type: 'fill' 或 type: 'flashcard' 的题目块
    if (lines[i].includes("type: 'fill'") || lines[i].includes("type: 'flashcard'")) {
      // 在接下来的几行中查找并删除 options: 行
      for (let j = i + 1; j < Math.min(i + 8, lines.length); j++) {
        if (lines[j].includes('options:') && !lines[j].includes('options: [')) {
          // 这是fill/flashcard类型中错误的options行（值是字符串而非数组）
          // 删除这行
          lines[j] = '';
          fixCount++;
          break;
        }
      }
    }
  }

  content = lines.join('\n');
  // 清理多余空行
  content = content.replace(/\n\n\n+/g, '\n\n');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`修复 ${filePath}: 删除了 ${fixCount} 个错误的options字段`);
}

console.log('修复完成！');
