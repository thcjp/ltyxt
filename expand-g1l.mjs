import fs from 'fs';
const f = 'd:/xxysw/xxysw/star-land/src/data/math/grade1.ts';
let c = fs.readFileSync(f, 'utf8');

function addLesson(unitId, lessonCode) {
  const marker = `id: '${unitId}'`;
  const pos = c.indexOf(marker);
  if (pos === -1) { console.log(`SKIP UNIT ${unitId}`); return; }
  const lPos = c.indexOf('lessons: [', pos);
  if (lPos === -1) { console.log(`SKIP LESSONS ${unitId}`); return; }
  let depth = 0, i = lPos + 'lessons: ['.length - 1;
  depth = 1; i++;
  while (i < c.length && depth > 0) {
    if (c[i] === '[') depth++;
    if (c[i] === ']') depth--;
    i++;
  }
  const insertPos = i - 1;
  c = c.substring(0, insertPos) + lessonCode + c.substring(insertPos);
  console.log(`OK ${unitId} +lesson`);
}

function mkL4(uid, title, review, formula, tip, animCfg, qs) {
  let code = `,\n      {\n        id: '${uid}l4',\n        title: '\u5f62\u6210\u6027\u8bc4\u4ef7',\n        order: 4,\n`;
  code += `        teachingMethod: '\u7efc\u5408\u6d4b\u8bc4\uff0c\u67e5\u6f0f\u8865\u7f3a',\n`;
  code += `        iDo: '\u5bb6\u957f\u51fa${title}\u7684\u7efc\u5408\u9898\uff0c\u89c2\u5bdf\u5b69\u5b50\u7684\u638c\u63e1\u60c5\u51b5\u3002',\n`;
  code += `        weDo: '\u4eb2\u5b50\u4e00\u8d77\u56de\u987e\u672c\u5355\u5143\u91cd\u70b9\uff0c\u4e92\u76f8\u63d0\u95ee\u68c0\u67e5\u7406\u89e3\u3002',\n`;
  code += `        youDo: '\u5b69\u5b50\u72ec\u7acb\u5b8c\u6210\u5f62\u6210\u6027\u8bc4\u4ef7\u9898\u76ee\uff0c\u68c0\u9a8c\u5b66\u4e60\u6548\u679c\u3002',\n`;
  code += `        parentTips: '\u5173\u6ce8\u9519\u9898\uff0c\u5206\u6790\u9519\u8bef\u539f\u56e0\uff0c\u9488\u5bf9\u6027\u590d\u4e60\u8584\u5f31\u73af\u8282\u3002',\n`;
  code += `        funElement: '\u5c0f\u6e38\u620f\uff1a\u77e5\u8bc6\u5927\u95ef\u5173\u2014\u2014\u770b\u770b\u4f60\u80fd\u8fc7\u51e0\u5173\uff01\u6b47\u540e\u8bed\uff1a\u6e29\u6545\u77e5\u65b0\u2014\u2014\u5b66\u4e86\u8981\u590d\u4e60',\n`;
  code += `        gsapAnimations: ['[GSAP:scaleIn|\u8bc4\u4ef7\u9898\u76ee\u4f9d\u6b21\u51fa\u73b0|0.5s|\u9875\u9762\u52a0\u8f7d|back.out(1.7)]','[GSAP:particleBurst|\u7b54\u5bf9\u5e86\u795d\u7279\u6548|0.8s|\u7b54\u5bf9\u89e6\u53d1|power2.out]'],\n`;
  code += `        images: ['[IMG:illustration|${title}\u8bc4\u4ef7\u573a\u666f|400x300|cartoon|png|\u8bc4\u4ef7\u6d4b\u8bd5]','[IMG:illustration|${title}\u77e5\u8bc6\u56de\u987e|300x250|cartoon|png|\u77e5\u8bc6\u56de\u987e]'],\n`;
  code += `        content: [\n`;
  code += `          { type: 'text', content: '${review}', animationType: 'reveal' },\n`;
  code += `          { type: 'formula', content: '${formula}', label: '\u5355\u5143\u56de\u987e', animationType: 'counter' },\n`;
  code += `          { type: 'tip', content: '${tip}', label: '\u5c0f\u8d34\u58eb', animationType: 'pulse' },\n`;
  code += `          { type: 'animation', content: '${title}\u8bc4\u4ef7\u52a8\u753b', animationType: 'cpaTransition',\n            animationConfig: ${animCfg}\n          },\n`;
  code += `        ],\n`;
  code += `        practiceQuestions: [\n`;
  qs.forEach(q => {
    code += `          {\n            id: '${q.id}', type: '${q.type}', question: '${q.q}',\n`;
    if (q.opts) code += `            options: [${q.opts.map(o => `'${o}'`).join(', ')}],\n`;
    code += `            answer: '${q.a}', hint: '${q.h}', explanation: '${q.e}'\n          },\n`;
  });
  code += `        ]\n      }`;
  return code;
}

function mkL5(uid, title, appText, formula, tip, animCfg, qs) {
  let code = `,\n      {\n        id: '${uid}l5',\n        title: '\u7efc\u5408\u590d\u4e60\u4e0e\u5e94\u7528',\n        order: 5,\n`;
  code += `        teachingMethod: '\u60c5\u5883\u5316\u7efc\u5408\u5e94\u7528\uff0c\u751f\u6d3b\u95ee\u9898\u9a71\u52a8',\n`;
  code += `        iDo: '\u5bb6\u957f\u521b\u8bbe\u751f\u6d3b\u60c5\u5883\uff0c\u8ba9\u5b69\u5b50\u7528${title}\u7684\u77e5\u8bc6\u89e3\u51b3\u5b9e\u9645\u95ee\u9898\u3002',\n`;
  code += `        weDo: '\u4eb2\u5b50\u4e00\u8d77\u89e3\u51b3\u751f\u6d3b\u4e2d\u7684\u6570\u5b66\u95ee\u9898\uff0c\u4e92\u76f8\u51fa\u9898\u3002',\n`;
  code += `        youDo: '\u5b69\u5b50\u72ec\u7acb\u89e3\u51b3\u751f\u6d3b\u4e2d\u7684\u6570\u5b66\u5e94\u7528\u9898\u3002',\n`;
  code += `        parentTips: '\u9f13\u52b1\u5b69\u5b50\u5728\u751f\u6d3b\u4e2d\u53d1\u73b0\u6570\u5b66\uff0c\u5b66\u4ee5\u81f4\u7528\u3002',\n`;
  code += `        funElement: '\u5c0f\u6e38\u620f\uff1a\u6570\u5b66\u5c0f\u4fa6\u63a2\u2014\u2014\u5728\u751f\u6d3b\u4e2d\u627e\u6570\u5b66\uff01\u7b11\u8bdd\uff1a\u6570\u5b66\u8bf4\u6211\u65e0\u5904\u4e0d\u5728',\n`;
  code += `        gsapAnimations: ['[GSAP:scaleIn|\u751f\u6d3b\u573a\u666f\u5c55\u5f00|0.6s|\u9875\u9762\u52a0\u8f7d|back.out(1.7)]','[GSAP:particleBurst|\u89e3\u9898\u6210\u529f\u5e86\u795d|0.8s|\u7b54\u5bf9\u89e6\u53d1|power2.out]'],\n`;
  code += `        images: ['[IMG:illustration|${title}\u751f\u6d3b\u5e94\u7528|400x300|cartoon|png|\u751f\u6d3b\u5e94\u7528]','[IMG:illustration|${title}\u5e94\u7528\u9898|300x250|cartoon|png|\u5e94\u7528\u9898]'],\n`;
  code += `        content: [\n`;
  code += `          { type: 'text', content: '${appText}', animationType: 'reveal' },\n`;
  code += `          { type: 'formula', content: '${formula}', label: '\u89e3\u9898\u79d8\u8bc0', animationType: 'typewriter' },\n`;
  code += `          { type: 'tip', content: '${tip}', label: '\u5c0f\u8d34\u58eb', animationType: 'pulse' },\n`;
  code += `          { type: 'animation', content: '${title}\u751f\u6d3b\u5e94\u7528\u52a8\u753b', animationType: 'cpaTransition',\n            animationConfig: ${animCfg}\n          },\n`;
  code += `        ],\n`;
  code += `        practiceQuestions: [\n`;
  qs.forEach(q => {
    code += `          {\n            id: '${q.id}', type: '${q.type}', question: '${q.q}',\n`;
    if (q.opts) code += `            options: [${q.opts.map(o => `'${o}'`).join(', ')}],\n`;
    code += `            answer: '${q.a}', hint: '${q.h}', explanation: '${q.e}'\n          },\n`;
  });
  code += `        ]\n      }`;
  return code;
}

// ===== m1u1 =====
addLesson('m1u1', mkL4('m1u1', '\u6570\u4e00\u6570',
  '\u8ba9\u6211\u4eec\u6765\u68c0\u9a8c\u4e00\u4e0b\u8fd9\u5355\u5143\u5b66\u5230\u4e86\u4ec0\u4e48\u5427\uff01\u6570\u6570\u3001\u6bd4\u591a\u5c11\u3001\u6392\u6392\u961f\uff0c\u4f60\u90fd\u5b66\u4f1a\u4e86\u5417\uff1f',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a1.\u4ece1\u6570\u523010 2.\u6bd4\u591a\u5c11\u7528\u4e00\u4e00\u5bf9\u5e94 3.\u6392\u5e8f\u4ece\u5c0f\u5230\u5927\u6216\u4ece\u5927\u5230\u5c0f',
  '\u505a\u9519\u7684\u9898\u8981\u91cd\u70b9\u590d\u4e60\uff0c\u5f04\u6e05\u695a\u4e3a\u4ec0\u4e48\u9519\uff0c\u4e0b\u6b21\u5c31\u4e0d\u4f1a\u518d\u9519\u4e86\uff01',
  `{\n              sceneType: 'numberCount',\n              title: '\u6570\u6570\u8bc4\u4ef7',\n              countConfig: { from: 1, to: 10, itemEmoji: '\ud83c\udf1f', direction: 'forward' },\n              ttsNarration: '\u8ba9\u6211\u4eec\u6765\u6570\u4e00\u6570\uff0c\u4ece1\u6570\u523010\uff01',\n            }`,
  [
    {id:'m1u1l4q1',type:'choice',q:'\u4ece3\u6570\u52307\uff0c\u4e00\u5171\u6709\u51e0\u4e2a\u6570\uff1f',opts:['4\u4e2a','5\u4e2a','6\u4e2a','3\u4e2a'],a:'5\u4e2a',h:'3\u30014\u30015\u30016\u30017',e:'3\u30014\u30015\u30016\u30017\u51715\u4e2a\u6570\u3002'},
    {id:'m1u1l4q2',type:'fill',q:'9\u6bd47\u591a___',a:'2',h:'9-7=\uff1f',e:'9-7=2\uff0c9\u6bd47\u591a2\u3002'},
    {id:'m1u1l4q3',type:'choice',q:'\u62803\u30011\u30012\u4ece\u5c0f\u5230\u5927\u6392\u5217\uff0c\u6b63\u786e\u7684\u662f\uff1f',opts:['3\u30012\u30011','1\u30012\u30013','2\u30011\u30013','1\u30013\u30012'],a:'1\u30012\u30013',h:'\u6700\u5c0f\u7684\u6392\u6700\u524d',e:'\u4ece\u5c0f\u5230\u5927\u6392\u5217\u662f1\u30012\u30013\u3002'},
    {id:'m1u1l4q4',type:'choice',q:'8\u548c10\u4e4b\u95f4\u6709\u51e0\u4e2a\u6570\uff1f',opts:['1\u4e2a','2\u4e2a','3\u4e2a','0\u4e2a'],a:'1\u4e2a',h:'8\u548c10\u4e4b\u95f4\u53ea\u67099',e:'8\u548c10\u4e4b\u95f4\u53ea\u67099\u8fd91\u4e2a\u6570\u3002'},
    {id:'m1u1l4q5',type:'fill',q:'\u6bd44\u591a3\u7684\u6570\u662f___',a:'7',h:'4+3=\uff1f',e:'4+3=7\uff0c\u6bd44\u591a3\u7684\u6570\u662f7\u3002'},
    {id:'m1u1l4q6',type:'fill',q:'\u3010\u671f\u4e2d\u771f\u9898\u3011\u4ece\u5927\u5230\u5c0f\u6392\u5217\uff1a5\u30012\u30018\uff0c\u6392\u5728\u7b2c\u4e8c\u7684\u662f___',a:'5',h:'\u5148\u4ece\u5927\u5230\u5c0f\u6392\u597d',e:'\u4ece\u5927\u5230\u5c0f\u6392\u5217\u662f8\u30015\u30012\uff0c\u6392\u5728\u7b2c\u4e8c\u7684\u662f5\u3002'},
  ]
));

addLesson('m1u1', mkL5('m1u1', '\u6570\u4e00\u6570',
  '\u6570\u5b66\u5c31\u5728\u6211\u4eec\u8eab\u8fb9\uff01\u6570\u4e00\u6570\u684c\u4e0a\u6709\u51e0\u4e2a\u82f9\u679c\uff0c\u6bd4\u4e00\u6bd4\u8c01\u7684\u591a\uff0c\u6392\u4e00\u6392\u8c01\u6700\u9ad8\u2026\u2026\u8fd9\u4e9b\u90fd\u662f\u6570\u5b66\uff01',
  '\u5e94\u7528\u9898\u6b65\u9aa4\uff1a1.\u8bfb\u9898\u627e\u4fe1\u606f 2.\u60f3\u7528\u4ec0\u4e48\u65b9\u6cd5 3.\u5217\u5f0f\u8ba1\u7b97 4.\u68c0\u67e5\u7b54\u6848',
  '\u505a\u5e94\u7528\u9898\u65f6\uff0c\u5148\u5f04\u6e05\u695a\u9898\u76ee\u95ee\u4ec0\u4e48\uff0c\u518d\u60f3\u7528\u4ec0\u4e48\u65b9\u6cd5\uff0c\u6700\u540e\u7b97\u51fa\u7b54\u6848\uff01',
  `{\n              sceneType: 'sceneBuild',\n              title: '\u751f\u6d3b\u4e2d\u7684\u6570\u5b66',\n              sceneBuildConfig: {\n                sceneName: '\u5bb6\u5ead\u6570\u5b66',\n                elements: [\n                  { id: 'el-0', text: '3\u4eba', emoji: '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67', delay: 0, animation: 'bounceIn', ttsText: '\u5bb6\u91cc3\u4e2a\u4eba' },\n                  { id: 'el-1', text: '5\u7897', emoji: '\ud83e\udd63', delay: 0.5, animation: 'bounceIn', ttsText: '5\u4e2a\u7897' },\n                  { id: 'el-2', text: '\u591a2\u4e2a', emoji: '\u2795', delay: 1.0, animation: 'scaleIn', ttsText: '\u7897\u6bd4\u4eba\u591a2\u4e2a' },\n                ],\n              },\n              ttsNarration: '\u5bb6\u91cc3\u4e2a\u4eba5\u4e2a\u7897\uff0c\u7897\u6bd4\u4eba\u591a2\u4e2a\uff01',\n            }`,
  [
    {id:'m1u1l5q1',type:'choice',q:'\u5c0f\u660e\u5bb6\u67094\u628a\u6905\u5b50\uff0c\u6765\u4e866\u4e2a\u5ba2\u4eba\uff0c\u6905\u5b50\u591f\u5750\u5417\uff1f',opts:['\u591f','\u4e0d\u591f\uff0c\u5dee2\u628a','\u4e0d\u591f\uff0c\u5dee4\u628a','\u521a\u597d\u591f'],a:'\u4e0d\u591f\uff0c\u5dee2\u628a',h:'6-4=\uff1f',e:'6-4=2\uff0c\u6905\u5b50\u4e0d\u591f\uff0c\u5dee2\u628a\u3002'},
    {id:'m1u1l5q2',type:'fill',q:'\u5c0f\u7ea2\u67098\u9897\u7cd6\uff0c\u5403\u4e863\u9897\uff0c\u8fd8\u5269___\u9897',a:'5',h:'8-3=\uff1f',e:'8-3=5\uff0c\u8fd8\u52695\u9897\u7cd6\u3002'},
    {id:'m1u1l5q3',type:'choice',q:'\u6392\u961f\u65f6\u5c0f\u660e\u6392\u7b2c4\uff0c\u4ed6\u540e\u9762\u8fd8\u67093\u4eba\uff0c\u4e00\u5171\u6709\u51e0\u4eba\uff1f',opts:['6\u4eba','7\u4eba','8\u4eba','5\u4eba'],a:'7\u4eba',h:'4+3=\uff1f',e:'\u5c0f\u660e\u6392\u7b2c4\u8bf4\u660e\u524d\u9762\u67093\u4eba\uff0c\u4ed6\u540e\u9762\u8fd8\u67093\u4eba\uff0c3+1+3=7\u4eba\u3002'},
    {id:'m1u1l5q4',type:'choice',q:'\u7bee\u5b50\u91cc\u67097\u4e2a\u82f9\u679c\u548c5\u4e2a\u6a58\u5b50\uff0c\u54ea\u79cd\u6c34\u679c\u591a\uff1f',opts:['\u82f9\u679c\u591a','\u6a58\u5b50\u591a','\u4e00\u6837\u591a','\u65e0\u6cd5\u6bd4\u8f83'],a:'\u82f9\u679c\u591a',h:'7\u548c5\u6bd4',e:'7\u6bd45\u5927\uff0c\u82f9\u679c\u591a\u3002'},
    {id:'m1u1l5q5',type:'fill',q:'\u5c0f\u660e\u67095\u672c\u4e66\uff0c\u5c0f\u7ea2\u6bd4\u4ed6\u591a3\u672c\uff0c\u5c0f\u7ea2\u6709___\u672c',a:'8',h:'5+3=\uff1f',e:'5+3=8\uff0c\u5c0f\u7ea2\u67098\u672c\u4e66\u3002'},
    {id:'m1u1l5q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u3011\u5c0f\u670b\u53cb\u6392\u961f\uff0c\u4ece\u524d\u5f80\u540e\u6570\u5c0f\u660e\u6392\u7b2c3\uff0c\u4ece\u540e\u5f80\u524d\u6570\u4ed6\u6392\u7b2c4\uff0c\u4e00\u5171\u6709___\u4eba',a:'6',h:'3+4-1=\uff1f',e:'\u4ece\u524d\u5f80\u540e3\u4eba\uff0c\u4ece\u540e\u5f80\u524d4\u4eba\uff0c\u5c0f\u660e\u88ab\u6570\u4e86\u4e24\u6b21\uff0c3+4-1=6\u4eba\u3002'},
  ]
));

// ===== m1u2 =====
addLesson('m1u2', mkL4('m1u2', '1-5\u8ba4\u8bc6\u548c\u52a0\u51cf\u6cd5',
  '1-5\u7684\u8ba4\u8bc6\u548c\u52a0\u51cf\u6cd5\uff0c\u4f60\u5b66\u5f97\u600e\u4e48\u6837\uff1f\u8ba9\u6211\u4eec\u6765\u6d4b\u4e00\u6d4b\uff01',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a1.\u8ba4\u8bc61-5 2.\u52a0\u6cd5=\u5408\u8d77\u6765 3.\u51cf\u6cd5=\u62ff\u8d70',
  '\u770b\u6e05\u7b26\u53f7\u6700\u91cd\u8981\uff01+\u662f\u5408\u8d77\u6765\uff0c-\u662f\u62ff\u8d70\uff0c\u522b\u770b\u9519\u4e86\uff01',
  `{\n              sceneType: 'cardReveal',\n              title: '1-5\u52a0\u51cf\u6cd5\u8bc4\u4ef7',\n              cardRevealConfig: {\n                cards: [\n                  { front: '1+4', back: '=5', ttsText: '1\u52a04\u7b49\u4e8e5' },\n                  { front: '5-2', back: '=3', ttsText: '5\u51cf2\u7b49\u4e8e3' },\n                  { front: '2+3', back: '=5', ttsText: '2\u52a03\u7b49\u4e8e5' },\n                  { front: '4-1', back: '=3', ttsText: '4\u51cf1\u7b49\u4e8e3' },\n                ]\n              },\n              ttsNarration: '\u6765\u6d4b\u6d4b\u4f60\u7684\u52a0\u51cf\u6cd5\u5427\uff01',\n            }`,
  [
    {id:'m1u2l4q1',type:'choice',q:'3+2=\uff1f',opts:['4','5','6','1'],a:'5',h:'3\u4e2a\u52a02\u4e2a',e:'3+2=5\u3002'},
    {id:'m1u2l4q2',type:'fill',q:'5-4=___',a:'1',h:'5\u4e2a\u62ff\u8d704\u4e2a',e:'5-4=1\u3002'},
    {id:'m1u2l4q3',type:'choice',q:'1+3=\uff1f',opts:['3','4','5','2'],a:'4',h:'1\u4e2a\u52a03\u4e2a',e:'1+3=4\u3002'},
    {id:'m1u2l4q4',type:'choice',q:'4-2=\uff1f',opts:['1','2','3','4'],a:'2',h:'4\u4e2a\u62ff\u8d702\u4e2a',e:'4-2=2\u3002'},
    {id:'m1u2l4q5',type:'fill',q:'2+2=___',a:'4',h:'2\u4e2a\u52a02\u4e2a',e:'2+2=4\u3002'},
    {id:'m1u2l4q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u30115-5=___',a:'0',h:'5\u4e2a\u5168\u62ff\u8d70',e:'5-5=0\uff0c\u5168\u62ff\u8d70\u4e86\u5c31\u6ca1\u4e86\u3002'},
  ]
));

addLesson('m1u2', mkL5('m1u2', '1-5\u8ba4\u8bc6\u548c\u52a0\u51cf\u6cd5',
  '\u52a0\u51cf\u6cd5\u5728\u751f\u6d3b\u4e2d\u5230\u5904\u90fd\u662f\uff01\u4e70\u4e1c\u897f\u3001\u5206\u4e1c\u897f\u3001\u6570\u4e1c\u897f\u2026\u2026\u90fd\u9700\u8981\u52a0\u51cf\u6cd5\uff01',
  '\u5e94\u7528\u9898\u79d8\u8bc0\uff1a\u591a\u4e86\u7528\u52a0\u6cd5\uff0c\u5c11\u4e86\u7528\u51cf\u6cd5\uff0c\u770b\u6e05\u9898\u76ee\u518d\u5217\u5f0f\uff01',
  '\u505a\u5b8c\u5e94\u7528\u9898\u8981\u68c0\u67e5\uff1a\u7b54\u6848\u5408\u7406\u5417\uff1f\u4eba\u6570\u3001\u4e2a\u6570\u4e0d\u80fd\u662f\u8d1f\u6570\u54e6\uff01',
  `{\n              sceneType: 'merge',\n              title: '3+2=5',\n              mergeConfig: { leftCount: 3, leftEmoji: '\ud83c\udf4e', rightCount: 2, rightEmoji: '\ud83c\udf4e', operator: '+', resultCount: 5 },\n              ttsNarration: '3\u4e2a\u82f9\u679c\u52a02\u4e2a\u82f9\u679c\uff0c\u4e00\u51715\u4e2a\uff01',\n            }`,
  [
    {id:'m1u2l5q1',type:'choice',q:'\u6811\u4e0a\u67092\u53ea\u9e1f\uff0c\u53c8\u98de\u67653\u53ea\uff0c\u73b0\u5728\u6709\u51e0\u53ea\uff1f',opts:['4\u53ea','5\u53ea','6\u53ea','1\u53ea'],a:'5\u53ea',h:'2+3=\uff1f',e:'2+3=5\uff0c\u73b0\u5728\u67095\u53ea\u9e1f\u3002'},
    {id:'m1u2l5q2',type:'fill',q:'\u5c0f\u7ea2\u67094\u9897\u7cd6\uff0c\u5403\u4e861\u9897\uff0c\u8fd8\u5269___\u9897',a:'3',h:'4-1=\uff1f',e:'4-1=3\uff0c\u8fd8\u52693\u9897\u7cd6\u3002'},
    {id:'m1u2l5q3',type:'choice',q:'\u5c0f\u660e\u67092\u652f\u94c5\u7b14\uff0c\u5c0f\u7ea2\u7ed9\u4e86\u4ed63\u652f\uff0c\u73b0\u5728\u6709\u51e0\u652f\uff1f',opts:['4\u652f','5\u652f','6\u652f','1\u652f'],a:'5\u652f',h:'2+3=\uff1f',e:'2+3=5\uff0c\u73b0\u5728\u67095\u652f\u94c5\u7b14\u3002'},
    {id:'m1u2l5q4',type:'choice',q:'\u76d8\u5b50\u91cc\u67095\u5757\u997c\u5e72\uff0c\u5403\u4e862\u5757\uff0c\u8fd8\u5269\u51e0\u5757\uff1f',opts:['2\u5757','3\u5757','4\u5757','7\u5757'],a:'3\u5757',h:'5-2=\uff1f',e:'5-2=3\uff0c\u8fd8\u52693\u5757\u997c\u5e72\u3002'},
    {id:'m1u2l5q5',type:'fill',q:'1+4=___',a:'5',h:'1\u4e2a\u52a04\u4e2a',e:'1+4=5\u3002'},
    {id:'m1u2l5q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u3011\u5c0f\u7ea2\u67095\u4e2a\u6c14\u7403\uff0c\u98de\u8d70\u4e863\u4e2a\uff0c\u8fd8\u5269___\u4e2a',a:'2',h:'5-3=\uff1f',e:'5-3=2\uff0c\u8fd8\u52692\u4e2a\u6c14\u7403\u3002'},
  ]
));

// ===== m1u3 =====
addLesson('m1u3', mkL4('m1u3', '6-10\u7684\u8ba4\u8bc6\u548c\u52a0\u51cf\u6cd5',
  '6-10\u548c\u51d1\u5341\u6cd5\uff0c\u4f60\u5b66\u5f97\u600e\u4e48\u6837\uff1f\u8ba9\u6211\u4eec\u6765\u68c0\u9a8c\u4e00\u4e0b\uff01',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a1.\u8ba4\u8bc66-10 2.\u6570\u8f74\u52a0\u51cf\u6cd5 3.\u51d1\u5341\u6cd5\uff1a\u770b\u5927\u6570\u5206\u5c0f\u6570',
  '\u51d1\u5341\u6cd5\u662f\u4ee5\u540e\u8ba1\u7b97\u7684\u57fa\u7840\uff0c\u4e00\u5b9a\u8981\u591a\u7ec3\u4e60\uff01',
  `{\n              sceneType: 'cardReveal',\n              title: '6-10\u548c\u51d1\u5341\u6cd5\u8bc4\u4ef7',\n              cardRevealConfig: {\n                cards: [\n                  { front: '6+4', back: '=10', ttsText: '6\u52a04\u7b49\u4e8e10' },\n                  { front: '9+2', back: '=11', ttsText: '9\u52a02\u7b49\u4e8e11' },\n                  { front: '8+5', back: '=13', ttsText: '8\u52a05\u7b49\u4e8e13' },\n                  { front: '7+6', back: '=13', ttsText: '7\u52a06\u7b49\u4e8e13' },\n                ]\n              },\n              ttsNarration: '\u6765\u6d4b\u6d4b\u4f60\u7684\u51d1\u5341\u6cd5\u5427\uff01',\n            }`,
  [
    {id:'m1u3l4q1',type:'choice',q:'7+3=\uff1f',opts:['9','10','11','8'],a:'10',h:'7\u548c3\u51d1\u621010',e:'7+3=10\uff0c\u51d1\u5341\u6210\u529f\uff01'},
    {id:'m1u3l4q2',type:'fill',q:'10-4=___',a:'6',h:'10\u51cf4',e:'10-4=6\u3002'},
    {id:'m1u3l4q3',type:'choice',q:'8+2=\uff1f',opts:['9','10','11','12'],a:'10',h:'8\u548c2\u51d1\u621010',e:'8+2=10\u3002'},
    {id:'m1u3l4q4',type:'choice',q:'9+3=\uff1f',opts:['11','12','13','10'],a:'12',h:'\u89c19\u60f31',e:'3\u62c6\u62101\u548c2\uff0c9+1=10\uff0c10+2=12\u3002'},
    {id:'m1u3l4q5',type:'fill',q:'6+4=___',a:'10',h:'6\u548c4\u51d1\u621010',e:'6+4=10\u3002'},
    {id:'m1u3l4q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u301110-7=___',a:'3',h:'7+3=10',e:'7+3=10\uff0c\u6240\u4ee510-7=3\u3002'},
  ]
));

addLesson('m1u3', mkL5('m1u3', '6-10\u7684\u8ba4\u8bc6\u548c\u52a0\u51cf\u6cd5',
  '6-10\u7684\u52a0\u51cf\u6cd5\u5728\u751f\u6d3b\u4e2d\u5f88\u6709\u7528\uff01\u7b97\u7b97\u4e70\u4e1c\u897f\u8981\u4ed8\u591a\u5c11\u94b1\uff0c\u627e\u96f6\u591a\u5c11\u94b1\u2026\u2026',
  '\u751f\u6d3b\u5e94\u7528\uff1a\u4e70\u4e1c\u897f\u7528\u52a0\u6cd5\u7b97\u603b\u4ef7\uff0c\u627e\u96f6\u7528\u51cf\u6cd5\u7b97\u5269\u4f59\uff01',
  '\u505a\u5e94\u7528\u9898\u5148\u8bfb\u61c2\u9898\u76ee\uff0c\u60f3\u6e05\u695a\u7528\u4ec0\u4e48\u65b9\u6cd5\u518d\u5217\u5f0f\uff01',
  `{\n              sceneType: 'merge',\n              title: '8+5=13',\n              mergeConfig: { leftCount: 8, leftEmoji: '\ud83c\udf38', rightCount: 5, rightEmoji: '\ud83c\udf38', operator: '+', resultCount: 13 },\n              ttsNarration: '8\u6735\u82b1\u52a05\u6735\u82b1\uff0c\u7528\u51d1\u5341\u6cd5\u7b49\u4e8e13\uff01',\n            }`,
  [
    {id:'m1u3l5q1',type:'choice',q:'\u5c0f\u660e\u67098\u9897\u7cd6\uff0c\u5c0f\u7ea2\u7ed9\u4e86\u4ed65\u9897\uff0c\u4e00\u5171\u51e0\u9897\uff1f',opts:['12\u9897','13\u9897','14\u9897','15\u9897'],a:'13\u9897',h:'8+5\u7528\u51d1\u5341\u6cd5',e:'8+5=13\uff0c\u4e00\u517113\u9897\u7cd6\u3002'},
    {id:'m1u3l5q2',type:'fill',q:'\u6811\u4e0a\u670910\u53ea\u9e1f\uff0c\u98de\u8d70\u4e866\u53ea\uff0c\u8fd8\u5269___\u53ea',a:'4',h:'10-6=\uff1f',e:'10-6=4\uff0c\u8fd8\u52694\u53ea\u9e1f\u3002'},
    {id:'m1u3l5q3',type:'choice',q:'\u5c0f\u7ea2\u67099\u5143\uff0c\u4e70\u7b14\u7528\u4e864\u5143\uff0c\u8fd8\u5269\u51e0\u5143\uff1f',opts:['3\u5143','4\u5143','5\u5143','6\u5143'],a:'5\u5143',h:'9-4=\uff1f',e:'9-4=5\uff0c\u8fd8\u52695\u5143\u3002'},
    {id:'m1u3l5q4',type:'choice',q:'7+7=\uff1f',opts:['13','14','15','12'],a:'14',h:'\u89c17\u60f33',e:'7\u62c6\u62103\u548c4\uff0c7+3=10\uff0c10+4=14\u3002'},
    {id:'m1u3l5q5',type:'fill',q:'10-3=___',a:'7',h:'3+7=10',e:'10-3=7\u3002'},
    {id:'m1u3l5q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u30119+5=___',a:'14',h:'\u89c19\u60f31',e:'5\u62c6\u62101\u548c4\uff0c9+1=10\uff0c10+4=14\u3002'},
  ]
));

// ===== m1u4 =====
addLesson('m1u4', mkL4('m1u4', '11-20\u5404\u6570\u7684\u8ba4\u8bc6',
  '11-20\u7684\u8ba4\u8bc6\u548c\u4e0d\u8fdb\u4f4d\u52a0\u6cd5\uff0c\u4f60\u638c\u63e1\u4e86\u5417\uff1f\u8ba9\u6211\u4eec\u6765\u68c0\u9a8c\uff01',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a1.1\u6346=10\u6839 2.\u5341\u51e0=1\u4e2a\u5341\u548c\u51e0\u4e2a\u4e00 3.\u4e0d\u8fdb\u4f4d\u52a0\u6cd5\uff1a\u5341\u4f4d\u4e0d\u53d8\u4e2a\u4f4d\u52a0',
  '\u8bb0\u4f4f\u5341\u4f4d\u4e0a\u76841\u8868\u793a10\uff0c\u4e0d\u662f1\uff01\u8fd9\u662f\u6700\u5bb9\u6613\u51fa\u9519\u7684\u5730\u65b9\u3002',
  `{\n              sceneType: 'sceneBuild',\n              title: '11-20\u8bc4\u4ef7',\n              sceneBuildConfig: {\n                sceneName: '11-20\u56de\u987e',\n                elements: [\n                  { id: 'el-0', text: '1\u6346=10\u6839', emoji: '\ud83e\udeb5', delay: 0, animation: 'bounceIn', ttsText: '1\u6346\u7b49\u4e8e10\u6839' },\n                  { id: 'el-1', text: '15=10+5', emoji: '\ud83d\udd22', delay: 0.5, animation: 'scaleIn', ttsText: '15\u7b49\u4e8e10\u52a05' },\n                  { id: 'el-2', text: '12+3=15', emoji: '\u2795', delay: 1.0, animation: 'scaleIn', ttsText: '12\u52a03\u7b49\u4e8e15' },\n                ],\n              },\n              ttsNarration: '11\u523020\uff0c1\u6346\u52a0\u51e0\u6839\u5c31\u662f\u5341\u51e0\uff01',\n            }`,
  [
    {id:'m1u4l4q1',type:'choice',q:'1\u4e2a\u5341\u548c7\u4e2a\u4e00\u7ec4\u6210\u51e0\uff1f',opts:['17','71','8','16'],a:'17',h:'10+7=\uff1f',e:'1\u4e2a\u5341\u548c7\u4e2a\u4e00\u7ec4\u621017\u3002'},
    {id:'m1u4l4q2',type:'fill',q:'19\u91cc\u9762\u67091\u4e2a\u5341\u548c___\u4e2a\u4e00',a:'9',h:'\u4e2a\u4f4d\u662f\u51e0\uff1f',e:'19\u7684\u4e2a\u4f4d\u662f9\uff0c\u6240\u4ee519\u91cc\u9762\u67091\u4e2a\u5341\u548c9\u4e2a\u4e00\u3002'},
    {id:'m1u4l4q3',type:'choice',q:'13+4=\uff1f',opts:['17','16','14','15'],a:'17',h:'\u5341\u4f4d1\u4e0d\u53d8\uff0c\u4e2a\u4f4d3+4',e:'\u5341\u4f4d1\u4e0d\u53d8\uff0c\u4e2a\u4f4d3+4=7\uff0c13+4=17\u3002'},
    {id:'m1u4l4q4',type:'choice',q:'\u5341\u4f4d\u4e0a\u662f1\uff0c\u4e2a\u4f4d\u4e0a\u662f6\uff0c\u8fd9\u4e2a\u6570\u662f\uff1f',opts:['61','16','6','7'],a:'16',h:'\u5341\u4f4d1=10\uff0c\u4e2a\u4f4d6',e:'\u5341\u4f4d1\u4e2a\u4f4d6\u7ec4\u6210\u7684\u6570\u662f16\u3002'},
    {id:'m1u4l4q5',type:'fill',q:'15+3=___',a:'18',h:'\u4e2a\u4f4d5+3',e:'\u5341\u4f4d1\u4e0d\u53d8\uff0c\u4e2a\u4f4d5+3=8\uff0c15+3=18\u3002'},
    {id:'m1u4l4q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u30112\u4e2a\u5341\u662f___',a:'20',h:'10+10=\uff1f',e:'2\u4e2a\u5341\u5c31\u662f10+10=20\u3002'},
  ]
));

addLesson('m1u4', mkL5('m1u4', '11-20\u5404\u6570\u7684\u8ba4\u8bc6',
  '11-20\u7684\u6570\u5728\u751f\u6d3b\u4e2d\u5230\u5904\u90fd\u662f\uff01\u697c\u5c42\u53f7\u3001\u9875\u7801\u3001\u65e5\u5386\u2026\u2026\u90fd\u662f\u5341\u51e0\u7684\u6570\uff01',
  '\u751f\u6d3b\u5e94\u7528\uff1a\u770b\u9875\u7801\u7528\u5341\u51e0\u7684\u6570\uff0c\u7b97\u52a0\u6cd5\u7528\u4e0d\u8fdb\u4f4d\u52a0\u6cd5\uff01',
  '\u8bfb\u6570\u5199\u6570\u8981\u4ed4\u7ec6\uff0c\u5341\u4f4d\u548c\u4e2a\u4f4d\u522b\u641e\u53cd\u4e86\uff01',
  `{\n              sceneType: 'sceneBuild',\n              title: '\u751f\u6d3b\u4e2d\u768411-20',\n              sceneBuildConfig: {\n                sceneName: '\u751f\u6d3b\u5e94\u7528',\n                elements: [\n                  { id: 'el-0', text: '\u7b2c15\u9875', emoji: '\ud83d\udcd6', delay: 0, animation: 'slideIn', ttsText: '\u7ffb\u5230\u7b2c15\u9875' },\n                  { id: 'el-1', text: '12+5', emoji: '\u2795', delay: 0.5, animation: 'scaleIn', ttsText: '12\u52a05\u7b49\u4e8e17' },\n                  { id: 'el-2', text: '17\u5c42', emoji: '\ud83c\udfe0', delay: 1.0, animation: 'bounceIn', ttsText: '\u4f4f\u5728\u7b2c17\u5c42' },\n                ],\n              },\n              ttsNarration: '11\u523020\u5728\u751f\u6d3b\u4e2d\u5230\u5904\u90fd\u662f\uff01',\n            }`,
  [
    {id:'m1u4l5q1',type:'choice',q:'\u5c0f\u660e\u770b\u4e00\u672c\u4e66\uff0c\u4eca\u5929\u4ece\u7b2c12\u9875\u770b\u5230\u7b2c16\u9875\uff0c\u4ed6\u770b\u4e86\u51e0\u9875\uff1f',opts:['4\u9875','5\u9875','6\u9875','3\u9875'],a:'5\u9875',h:'16-12+1=\uff1f',e:'\u4ece12\u523016\u5305\u62ec12\u548c16\uff0c16-12+1=5\u9875\u3002'},
    {id:'m1u4l5q2',type:'fill',q:'\u5c0f\u7ea2\u4f4f\u5728\u7b2c15\u5c42\uff0c\u5979\u4e0a\u9762\u8fd8\u67093\u5c42\uff0c\u8fd9\u680b\u697c\u4e00\u5171\u6709___\u5c42',a:'18',h:'15+3=\uff1f',e:'15+3=18\uff0c\u8fd9\u680b\u697c\u4e00\u5171\u670918\u5c42\u3002'},
    {id:'m1u4l5q3',type:'choice',q:'\u5c0f\u660e\u670914\u9897\u7cd6\uff0c\u5988\u5988\u53c8\u7ed9\u4e86\u4ed65\u9897\uff0c\u73b0\u5728\u6709\u51e0\u9897\uff1f',opts:['18\u9897','19\u9897','20\u9897','9\u9897'],a:'19\u9897',h:'14+5=\uff1f',e:'14+5=19\uff0c\u73b0\u5728\u670919\u9897\u7cd6\u3002'},
    {id:'m1u4l5q4',type:'choice',q:'1\u4e2a\u5341\u548c4\u4e2a\u4e00\u7ec4\u6210\u7684\u6570\u662f\uff1f',opts:['14','41','5','13'],a:'14',h:'10+4=\uff1f',e:'1\u4e2a\u5341\u548c4\u4e2a\u4e00\u7ec4\u621014\u3002'},
    {id:'m1u4l5q5',type:'fill',q:'16+2=___',a:'18',h:'\u4e2a\u4f4d6+2',e:'\u5341\u4f4d1\u4e0d\u53d8\uff0c\u4e2a\u4f4d6+2=8\uff0c16+2=18\u3002'},
    {id:'m1u4l5q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u301118\u91cc\u9762\u6709___\u4e2a\u5341\u548c8\u4e2a\u4e00',a:'1',h:'\u5341\u4f4d\u4e0a\u662f\u51e0\uff1f',e:'18\u7684\u5341\u4f4d\u662f1\uff0c\u6240\u4ee518\u91cc\u9762\u67091\u4e2a\u5341\u548c8\u4e2a\u4e00\u3002'},
  ]
));

// ===== m1u5 =====
addLesson('m1u5', mkL4('m1u5', '20\u4ee5\u5185\u8fdb\u4f4d\u52a0\u6cd5',
  '\u51d1\u5341\u6cd5\u4f60\u7528\u5f97\u719f\u7ec3\u5417\uff1f\u8ba9\u6211\u4eec\u6765\u68c0\u9a8c\u4e00\u4e0b\u8fdb\u4f4d\u52a0\u6cd5\uff01',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a\u51d1\u5341\u6cd5\u53e3\u8bc0\u2014\u2014\u770b\u5927\u6570\u5206\u5c0f\u6570\uff0c\u51d1\u6210\u5341\u52a0\u5269\u6570\uff01',
  '\u51d1\u5341\u6cd5\u7684\u5173\u952e\u662f\u8bb0\u4f4f\u51d1\u5341\u597d\u670b\u53cb\uff1a9\u548c1\u30018\u548c2\u30017\u548c3\u30016\u548c4\u30015\u548c5',
  `{\n              sceneType: 'makeTen',\n              title: '\u51d1\u5341\u6cd5\u8bc4\u4ef7',\n              makeTenConfig: {\n                bigNum: 8,\n                smallNum: 5,\n                splitTo: 5,\n                splitLeft: 2,\n                splitRight: 3,\n                tenResult: 10,\n                finalResult: 13,\n              },\n              ttsNarration: '8\u52a05\uff0c\u89c18\u60f32\uff0c5\u62c6\u62102\u548c3\uff0c8\u52a02\u7b49\u4e8e10\uff0c10\u52a03\u7b49\u4e8e13\uff01',\n            }`,
  [
    {id:'m1u5l4q1',type:'choice',q:'9+6=\uff1f',opts:['14','15','16','13'],a:'15',h:'\u89c19\u60f31',e:'6\u62c6\u62101\u548c5\uff0c9+1=10\uff0c10+5=15\u3002'},
    {id:'m1u5l4q2',type:'fill',q:'8+7=___',a:'15',h:'\u89c18\u60f32',e:'7\u62c6\u62102\u548c5\uff0c8+2=10\uff0c10+5=15\u3002'},
    {id:'m1u5l4q3',type:'choice',q:'7+5=\uff1f',opts:['11','12','13','14'],a:'12',h:'\u89c17\u60f33',e:'5\u62c6\u62103\u548c2\uff0c7+3=10\uff0c10+2=12\u3002'},
    {id:'m1u5l4q4',type:'choice',q:'6+8=\uff1f',opts:['13','14','15','12'],a:'14',h:'\u89c16\u60f34',e:'8\u62c6\u62104\u548c4\uff0c6+4=10\uff0c10+4=14\u3002'},
    {id:'m1u5l4q5',type:'fill',q:'9+3=___',a:'12',h:'\u89c19\u60f31',e:'3\u62c6\u62101\u548c2\uff0c9+1=10\uff0c10+2=12\u3002'},
    {id:'m1u5l4q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u30118+6=___',a:'14',h:'\u89c18\u60f32',e:'6\u62c6\u62102\u548c4\uff0c8+2=10\uff0c10+4=14\u3002'},
  ]
));

addLesson('m1u5', mkL5('m1u5', '20\u4ee5\u5185\u8fdb\u4f4d\u52a0\u6cd5',
  '\u8fdb\u4f4d\u52a0\u6cd5\u5728\u751f\u6d3b\u4e2d\u5f88\u6709\u7528\uff01\u7b97\u7b97\u4e70\u4e1c\u897f\u7684\u603b\u4ef7\uff0c\u6570\u6570\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u2026\u2026',
  '\u751f\u6d3b\u5e94\u7528\uff1a\u628a\u4e24\u5806\u4e1c\u897f\u5408\u8d77\u6765\u7528\u52a0\u6cd5\uff0c\u8d85\u8fc710\u5c31\u7528\u51d1\u5341\u6cd5\uff01',
  '\u5148\u4f30\u4e00\u4f30\u7b54\u6848\u5927\u6982\u591a\u5c11\uff0c\u7b97\u5b8c\u518d\u68c0\u67e5\uff0c\u8fd9\u6837\u4e0d\u5bb9\u6613\u51fa\u9519\uff01',
  `{\n              sceneType: 'merge',\n              title: '9+6=15',\n              mergeConfig: { leftCount: 9, leftEmoji: '\ud83c\udf4e', rightCount: 6, rightEmoji: '\ud83c\udf4e', operator: '+', resultCount: 15 },\n              ttsNarration: '9\u4e2a\u82f9\u679c\u52a06\u4e2a\u82f9\u679c\uff0c\u51d1\u5341\u6cd5\u7b49\u4e8e15\uff01',\n            }`,
  [
    {id:'m1u5l5q1',type:'choice',q:'\u5c0f\u7ea2\u67099\u9897\u661f\uff0c\u5c0f\u660e\u67097\u9897\u661f\uff0c\u4e00\u5171\u6709\u51e0\u9897\uff1f',opts:['15\u9897','16\u9897','17\u9897','14\u9897'],a:'16\u9897',h:'9+7\u7528\u51d1\u5341\u6cd5',e:'9+7=16\uff0c\u4e00\u517116\u9897\u661f\u3002'},
    {id:'m1u5l5q2',type:'fill',q:'\u4e00\u672c\u4e66\u7b2c\u4e00\u5929\u770b\u4e868\u9875\uff0c\u7b2c\u4e8c\u5929\u770b\u4e867\u9875\uff0c\u4e24\u5929\u4e00\u5171\u770b\u4e86___\u9875',a:'15',h:'8+7=\uff1f',e:'8+7=15\uff0c\u4e24\u5929\u4e00\u5171\u770b\u4e8615\u9875\u3002'},
    {id:'m1u5l5q3',type:'choice',q:'\u64cd\u573a\u4e0a\u67096\u4e2a\u7537\u5b69\u548c9\u4e2a\u5973\u5b69\uff0c\u4e00\u5171\u6709\u51e0\u4e2a\u5c0f\u670b\u53cb\uff1f',opts:['14\u4e2a','15\u4e2a','16\u4e2a','13\u4e2a'],a:'15\u4e2a',h:'6+9=\uff1f',e:'6+9=15\uff0c\u4e00\u5171\u670915\u4e2a\u5c0f\u670b\u53cb\u3002'},
    {id:'m1u5l5q4',type:'choice',q:'7+8=\uff1f',opts:['14','15','16','13'],a:'15',h:'\u89c17\u60f33',e:'8\u62c6\u62103\u548c5\uff0c7+3=10\uff0c10+5=15\u3002'},
    {id:'m1u5l5q5',type:'fill',q:'9+8=___',a:'17',h:'\u89c19\u60f31',e:'8\u62c6\u62101\u548c7\uff0c9+1=10\uff0c10+7=17\u3002'},
    {id:'m1u5l5q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u3011\u5c0f\u660e\u67098\u4e2a\u82f9\u679c\uff0c\u5c0f\u7ea2\u53c8\u7ed9\u4e86\u4ed66\u4e2a\uff0c\u73b0\u5728\u6709___\u4e2a',a:'14',h:'8+6\u7528\u51d1\u5341\u6cd5',e:'8+6=14\uff0c\u73b0\u5728\u670914\u4e2a\u82f9\u679c\u3002'},
  ]
));

// ===== m1u6 =====
addLesson('m1u6', mkL4('m1u6', '20\u4ee5\u5185\u9000\u4f4d\u51cf\u6cd5',
  '\u9000\u4f4d\u51cf\u6cd5\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u7834\u5341\u6cd5\u548c\u60f3\u52a0\u7b97\u51cf\uff0c\u54ea\u79cd\u4f60\u66f4\u719f\u7ec3\uff1f',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a1.\u7834\u5341\u6cd5\uff1a\u4e0d\u591f\u51cf\u62c6\u5341 2.\u60f3\u52a0\u7b97\u51cf\uff1a\u51cf9\u60f31\uff0c\u51cf8\u60f32\uff0c\u51cf7\u60f33',
  '\u60f3\u52a0\u7b97\u51cf\u6700\u5feb\uff01\u8bb0\u4f4f\u52a0\u6cd5\u5c31\u80fd\u7b97\u51cf\u6cd5\u3002',
  `{\n              sceneType: 'cpaTransition',\n              title: '\u9000\u4f4d\u51cf\u6cd5\u8bc4\u4ef7',\n              cpaConfig: {\n                concrete: { emoji: '\ud83c\udf6c', text: '15\u9897\u7cd6\u62ff\u8d709\u9897' },\n                pictorial: { emoji: '\ud83d\udcca', text: '\u7834\u5341\u6cd5\uff1a10-9=1\uff0c1+5=6' },\n                abstract: { emoji: '\ud83d\udd22', text: '15-9=6' }\n              },\n              ttsNarration: '15\u51cf9\uff0c\u60f39\u52a06\u7b49\u4e8e15\uff0c\u6240\u4ee515\u51cf9\u7b49\u4e8e6\uff01',\n            }`,
  [
    {id:'m1u6l4q1',type:'choice',q:'13-8=\uff1f',opts:['4','5','6','7'],a:'5',h:'8+5=13',e:'8+5=13\uff0c\u6240\u4ee513-8=5\u3002'},
    {id:'m1u6l4q2',type:'fill',q:'16-9=___',a:'7',h:'9+7=16',e:'9+7=16\uff0c\u6240\u4ee516-9=7\u3002'},
    {id:'m1u6l4q3',type:'choice',q:'11-6=\uff1f',opts:['4','5','6','7'],a:'5',h:'6+5=11',e:'6+5=11\uff0c\u6240\u4ee511-6=5\u3002'},
    {id:'m1u6l4q4',type:'choice',q:'14-7=\uff1f',opts:['6','7','8','9'],a:'7',h:'7+7=14',e:'7+7=14\uff0c\u6240\u4ee514-7=7\u3002'},
    {id:'m1u6l4q5',type:'fill',q:'12-5=___',a:'7',h:'5+7=12',e:'5+7=12\uff0c\u6240\u4ee512-5=7\u3002'},
    {id:'m1u6l4q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u301117-8=___',a:'9',h:'8+9=17',e:'8+9=17\uff0c\u6240\u4ee517-8=9\u3002'},
  ]
));

addLesson('m1u6', mkL5('m1u6', '20\u4ee5\u5185\u9000\u4f4d\u51cf\u6cd5',
  '\u9000\u4f4d\u51cf\u6cd5\u5728\u751f\u6d3b\u4e2d\u7ecf\u5e38\u7528\u5230\uff01\u7b97\u7b97\u627e\u96f6\u3001\u7b97\u7b97\u8fd8\u5269\u591a\u5c11\u2026\u2026',
  '\u751f\u6d3b\u5e94\u7528\uff1a\u627e\u96f6\u7528\u51cf\u6cd5\uff0c\u8fd8\u5269\u591a\u5c11\u4e5f\u7528\u51cf\u6cd5\uff01',
  '\u505a\u51cf\u6cd5\u5e94\u7528\u9898\u65f6\uff0c\u5148\u627e\u51fa\u603b\u6570\u548c\u62ff\u8d70\u7684\u90e8\u5206\uff0c\u7528\u51cf\u6cd5\u7b97\u5269\u4f59\uff01',
  `{\n              sceneType: 'separate',\n              title: '15-8=7',\n              mergeConfig: { leftCount: 15, leftEmoji: '\ud83c\udf6c', rightCount: 8, rightEmoji: '\ud83c\udf6c', operator: '-', resultCount: 7 },\n              ttsNarration: '15\u9897\u7cd6\u62ff\u8d708\u9897\uff0c\u8fd8\u52697\u9897\uff01',\n            }`,
  [
    {id:'m1u6l5q1',type:'choice',q:'\u5c0f\u7ea2\u670915\u5143\uff0c\u4e70\u6587\u5177\u7528\u4e868\u5143\uff0c\u8fd8\u5269\u51e0\u5143\uff1f',opts:['6\u5143','7\u5143','8\u5143','9\u5143'],a:'7\u5143',h:'15-8=\uff1f',e:'15-8=7\uff0c\u8fd8\u52697\u5143\u3002'},
    {id:'m1u6l5q2',type:'fill',q:'\u6811\u4e0a\u670914\u53ea\u9e1f\uff0c\u98de\u8d70\u4e869\u53ea\uff0c\u8fd8\u5269___\u53ea',a:'5',h:'14-9=\uff1f',e:'14-9=5\uff0c\u8fd8\u52695\u53ea\u9e1f\u3002'},
    {id:'m1u6l5q3',type:'choice',q:'\u5c0f\u660e\u670913\u9897\u7cd6\uff0c\u9001\u7ed9\u5c0f\u7ea26\u9897\uff0c\u8fd8\u5269\u51e0\u9897\uff1f',opts:['6\u9897','7\u9897','8\u9897','5\u9897'],a:'7\u9897',h:'13-6=\uff1f',e:'13-6=7\uff0c\u8fd8\u52697\u9897\u7cd6\u3002'},
    {id:'m1u6l5q4',type:'choice',q:'16-7=\uff1f',opts:['8','9','10','7'],a:'9',h:'7+9=16',e:'7+9=16\uff0c\u6240\u4ee516-7=9\u3002'},
    {id:'m1u6l5q5',type:'fill',q:'11-3=___',a:'8',h:'3+8=11',e:'3+8=11\uff0c\u6240\u4ee511-3=8\u3002'},
    {id:'m1u6l5q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u301112-7=___',a:'5',h:'7+5=12',e:'7+5=12\uff0c\u6240\u4ee512-7=5\u3002'},
  ]
));

// ===== m1u7 =====
addLesson('m1u7', mkL4('m1u7', '\u8ba4\u8bc6\u56fe\u5f62',
  '\u7acb\u4f53\u56fe\u5f62\u548c\u5e73\u9762\u56fe\u5f62\u4f60\u90fd\u8ba4\u8bc6\u4e86\u5417\uff1f\u8ba9\u6211\u4eec\u6765\u68c0\u9a8c\uff01',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a1.\u7acb\u4f53\u56fe\u5f62\uff1a\u6b63\u65b9\u4f53\u3001\u957f\u65b9\u4f53\u3001\u5706\u67f1\u3001\u7403 2.\u5e73\u9762\u56fe\u5f62\uff1a\u6b63\u65b9\u5f62\u3001\u957f\u65b9\u5f62\u3001\u4e09\u89d2\u5f62\u3001\u5706',
  '\u5e73\u9762\u56fe\u5f62\u662f\u7acb\u4f53\u56fe\u5f62\u7684\u9762\uff0c\u5b83\u4eec\u4e4b\u95f4\u6709\u8054\u7cfb\uff01',
  `{\n              sceneType: 'sceneBuild',\n              title: '\u56fe\u5f62\u8bc4\u4ef7',\n              sceneBuildConfig: {\n                sceneName: '\u56fe\u5f62\u56de\u987e',\n                elements: [\n                  { id: 'el-0', text: '\u6b63\u65b9\u4f53', emoji: '\ud83e\uddea', delay: 0, animation: 'bounceIn', ttsText: '\u6b63\u65b9\u4f536\u4e2a\u9762\u5168\u4e00\u6837' },\n                  { id: 'el-1', text: '\u957f\u65b9\u5f62', emoji: '\ud83d\udfe5', delay: 0.5, animation: 'bounceIn', ttsText: '\u957f\u65b9\u5f62\u5bf9\u8fb9\u76f8\u7b49' },\n                  { id: 'el-2', text: '\u4e09\u89d2\u5f62', emoji: '\ud83d\udd3a', delay: 1.0, animation: 'bounceIn', ttsText: '\u4e09\u89d2\u5f623\u6761\u8fb93\u4e2a\u89d2' },\n                  { id: 'el-3', text: '\u5706', emoji: '\ud83d\udd34', delay: 1.5, animation: 'bounceIn', ttsText: '\u5706\u6ca1\u6709\u89d2' },\n                ],\n              },\n              ttsNarration: '\u56db\u79cd\u7acb\u4f53\u56fe\u5f62\u548c\u56db\u79cd\u5e73\u9762\u56fe\u5f62\uff0c\u4f60\u90fd\u8ba4\u8bc6\u4e86\u5417\uff1f',\n            }`,
  [
    {id:'m1u7l4q1',type:'choice',q:'\u4e0b\u9762\u54ea\u4e2a\u662f\u5e73\u9762\u56fe\u5f62\uff1f',opts:['\u6b63\u65b9\u4f53','\u5706\u67f1','\u4e09\u89d2\u5f62','\u7403'],a:'\u4e09\u89d2\u5f62',h:'\u5e73\u9762\u56fe\u5f62\u662f\u6241\u6241\u7684',e:'\u4e09\u89d2\u5f62\u662f\u5e73\u9762\u56fe\u5f62\uff0c\u6b63\u65b9\u4f53\u3001\u5706\u67f1\u548c\u7403\u662f\u7acb\u4f53\u56fe\u5f62\u3002'},
    {id:'m1u7l4q2',type:'fill',q:'\u957f\u65b9\u5f62\u6709___\u4e2a\u76f4\u89d2',a:'4',h:'\u6570\u4e00\u6570\u957f\u65b9\u5f62\u7684\u89d2',e:'\u957f\u65b9\u5f62\u67094\u4e2a\u76f4\u89d2\u3002'},
    {id:'m1u7l4q3',type:'choice',q:'\u7403\u7684\u7279\u5f81\u662f\u4ec0\u4e48\uff1f',opts:['\u67096\u4e2a\u9762','\u5706\u5706\u7684\u5230\u5904\u90fd\u662f\u5f2f\u7684','\u4e0a\u4e0b\u5706\u4e2d\u95f4\u5f2f','\u67094\u4e2a\u89d2'],a:'\u5706\u5706\u7684\u5230\u5904\u90fd\u662f\u5f2f\u7684',h:'\u7403\u6478\u8d77\u6765\u4ec0\u4e48\u611f\u89c9\uff1f',e:'\u7403\u5706\u5706\u7684\uff0c\u5230\u5904\u90fd\u662f\u5f2f\u5f2f\u7684\uff0c\u6ca1\u6709\u5e73\u9762\u3002'},
    {id:'m1u7l4q4',type:'choice',q:'\u6b63\u65b9\u4f53\u7684\u6bcf\u4e2a\u9762\u662f\u4ec0\u4e48\u5f62\u72b6\uff1f',opts:['\u957f\u65b9\u5f62','\u4e09\u89d2\u5f62','\u6b63\u65b9\u5f62','\u5706'],a:'\u6b63\u65b9\u5f62',h:'\u6b63\u65b9\u4f53\u7684\u9762\u5168\u4e00\u6837',e:'\u6b63\u65b9\u4f53\u76846\u4e2a\u9762\u90fd\u662f\u4e00\u6837\u5927\u7684\u6b63\u65b9\u5f62\u3002'},
    {id:'m1u7l4q5',type:'fill',q:'\u4e09\u89d2\u5f62\u6709___\u6761\u8fb9',a:'3',h:'\u4e09\u89d2\u5f62\u7684\u201c\u4e09\u201d\u5c31\u662f\u7b54\u6848',e:'\u4e09\u89d2\u5f62\u67093\u6761\u8fb9\u3002'},
    {id:'m1u7l4q6',type:'choice',q:'\u3010\u671f\u672b\u771f\u9898\u3011\u4e0b\u9762\u54ea\u4e2a\u56fe\u5f62\u80fd\u6eda\u52a8\u53c8\u80fd\u5e73\u653e\uff1f',opts:['\u6b63\u65b9\u4f53','\u957f\u65b9\u4f53','\u5706\u67f1','\u4e09\u89d2\u5f62'],a:'\u5706\u67f1',h:'\u4ec0\u4e48\u5f62\u72b6\u4fa7\u9762\u80fd\u6eda\u3001\u5e95\u9762\u80fd\u653e\uff1f',e:'\u5706\u67f1\u4fa7\u9762\u80fd\u6eda\u52a8\uff0c\u5e95\u9762\u5e73\u7684\u80fd\u5e73\u653e\u3002'},
  ]
));

addLesson('m1u7', mkL5('m1u7', '\u8ba4\u8bc6\u56fe\u5f62',
  '\u56fe\u5f62\u5728\u751f\u6d3b\u4e2d\u5230\u5904\u90fd\u662f\uff01\u627e\u627e\u770b\uff0c\u5bb6\u91cc\u6709\u54ea\u4e9b\u56fe\u5f62\uff1f',
  '\u751f\u6d3b\u5e94\u7528\uff1a\u8ba4\u8bc6\u56fe\u5f62\u5e2e\u6211\u4eec\u63cf\u8ff0\u4e8b\u7269\u7684\u5f62\u72b6\uff0c\u62fc\u642d\u56fe\u5f62\u5e2e\u6211\u4eec\u53d1\u6325\u521b\u610f\uff01',
  '\u7528\u56fe\u5f62\u7684\u773c\u5149\u770b\u4e16\u754c\uff0c\u4f60\u4f1a\u53d1\u73b0\u6570\u5b66\u65e0\u5904\u4e0d\u5728\uff01',
  `{\n              sceneType: 'sceneBuild',\n              title: '\u751f\u6d3b\u4e2d\u7684\u56fe\u5f62',\n              sceneBuildConfig: {\n                sceneName: '\u627e\u56fe\u5f62',\n                elements: [\n                  { id: 'el-0', text: '\u51b0\u7bb1=\u957f\u65b9\u4f53', emoji: '\ud83d\udce6', delay: 0, animation: 'slideIn', ttsText: '\u51b0\u7bb1\u662f\u957f\u65b9\u4f53' },\n                  { id: 'el-1', text: '\u949f\u8868=\u5706', emoji: '\u23f0', delay: 0.5, animation: 'slideIn', ttsText: '\u949f\u8868\u7684\u9762\u662f\u5706' },\n                  { id: 'el-2', text: '\u79ef\u6728=\u6b63\u65b9\u4f53', emoji: '\ud83e\uddea', delay: 1.0, animation: 'slideIn', ttsText: '\u79ef\u6728\u662f\u6b63\u65b9\u4f53' },\n                ],\n              },\n              ttsNarration: '\u751f\u6d3b\u4e2d\u5230\u5904\u90fd\u6709\u56fe\u5f62\uff01',\n            }`,
  [
    {id:'m1u7l5q1',type:'choice',q:'\u51b0\u7bb1\u662f\u4ec0\u4e48\u5f62\u72b6\uff1f',opts:['\u6b63\u65b9\u4f53','\u957f\u65b9\u4f53','\u5706\u67f1','\u7403'],a:'\u957f\u65b9\u4f53',h:'\u51b0\u7bb1\u7684\u9762\u4e0d\u5168\u4e00\u6837\u5927',e:'\u51b0\u7bb1\u662f\u957f\u65b9\u4f53\uff0c\u5bf9\u9762\u4e00\u6837\u5927\u4f46\u4e0d\u662f\u6240\u6709\u9762\u90fd\u4e00\u6837\u3002'},
    {id:'m1u7l5q2',type:'fill',q:'\u75282\u4e2a\u540c\u6837\u7684\u4e09\u89d2\u5f62\u53ef\u4ee5\u62fc\u62101\u4e2a___\u5f62',a:'\u957f\u65b9',h:'\u8bd5\u8bd5\u62fc\u4e00\u62fc',e:'2\u4e2a\u540c\u6837\u7684\u76f4\u89d2\u4e09\u89d2\u5f62\u53ef\u4ee5\u62fc\u62101\u4e2a\u957f\u65b9\u5f62\u3002'},
    {id:'m1u7l5q3',type:'choice',q:'\u4e0b\u9762\u54ea\u4e2a\u7269\u54c1\u7684\u5f62\u72b6\u662f\u5706\u67f1\uff1f',opts:['\u9b54\u65b9','\u8336\u53f6\u7f50','\u4e66\u672c','\u7bee\u7403'],a:'\u8336\u53f6\u7f50',h:'\u5706\u67f1\u4e0a\u4e0b\u5706\u4fa7\u9762\u5f2f',e:'\u8336\u53f6\u7f50\u4e0a\u4e0b\u662f\u5706\u5f62\uff0c\u4fa7\u9762\u662f\u5f2f\u66f2\u7684\uff0c\u662f\u5706\u67f1\u3002'},
    {id:'m1u7l5q4',type:'choice',q:'\u75284\u4e2a\u5c0f\u6b63\u65b9\u5f62\u62fc\u6210\u4e00\u4e2a\u5927\u6b63\u65b9\u5f62\uff0c\u6bcf\u8fb9\u6709\u51e0\u4e2a\u5c0f\u6b63\u65b9\u5f62\uff1f',opts:['1\u4e2a','2\u4e2a','3\u4e2a','4\u4e2a'],a:'2\u4e2a',h:'2\u00d72=4',e:'2\u00d72=4\uff0c\u6bcf\u8fb9\u67092\u4e2a\u5c0f\u6b63\u65b9\u5f62\u3002'},
    {id:'m1u7l5q5',type:'fill',q:'\u62fc\u4e00\u4e2a\u623f\u5b50\u7528\u4e861\u4e2a\u4e09\u89d2\u5f62\u548c1\u4e2a\u6b63\u65b9\u5f62\uff0c\u4e00\u5171\u7528\u4e86___\u4e2a\u56fe\u5f62',a:'2',h:'\u6570\u4e00\u6570',e:'1+1=2\uff0c\u4e00\u5171\u7528\u4e862\u4e2a\u56fe\u5f62\u3002'},
    {id:'m1u7l5q6',type:'choice',q:'\u3010\u671f\u672b\u771f\u9898\u3011\u4e0b\u9762\u54ea\u4e2a\u8bf4\u6cd5\u662f\u5bf9\u7684\uff1f',opts:['\u7403\u80fd\u5806\u53e0','\u5706\u67f1\u4e0d\u80fd\u6eda\u52a8','\u6b63\u65b9\u4f53\u80fd\u6eda\u52a8','\u957f\u65b9\u4f53\u67096\u4e2a\u9762'],a:'\u957f\u65b9\u4f53\u67096\u4e2a\u9762',h:'\u60f3\u60f3\u6bcf\u79cd\u56fe\u5f62\u7684\u7279\u5f81',e:'\u957f\u65b9\u4f53\u67096\u4e2a\u9762\uff0c\u5bf9\u9762\u4e00\u6837\u5927\u3002\u7403\u4e0d\u80fd\u5806\u53e0\uff0c\u5706\u67f1\u80fd\u6eda\u52a8\uff0c\u6b63\u65b9\u4f53\u4e0d\u80fd\u6eda\u52a8\u3002'},
  ]
));

// ===== m1u8 =====
addLesson('m1u8', mkL4('m1u8', '\u8ba4\u8bc6\u4eba\u6c11\u5e01',
  '\u5143\u89d2\u5206\u548c\u8d2d\u7269\u627e\u96f6\uff0c\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u8ba9\u6211\u4eec\u6765\u68c0\u9a8c\uff01',
  '\u672c\u5355\u5143\u91cd\u70b9\uff1a1.1\u5143=10\u89d2=100\u5206 2.\u8d2d\u7269\u7528\u52a0\u6cd5 3.\u627e\u96f6\u7528\u51cf\u6cd5',
  '\u4eba\u6c11\u5e01\u6362\u7b97\u8981\u8bb0\u7262\uff1a\u5143\u5230\u89d2\u4e5810\uff0c\u89d2\u5230\u5206\u4e5810\uff01',
  `{\n              sceneType: 'sceneBuild',\n              title: '\u4eba\u6c11\u5e01\u8bc4\u4ef7',\n              sceneBuildConfig: {\n                sceneName: '\u4eba\u6c11\u5e01\u56de\u987e',\n                elements: [\n                  { id: 'el-0', text: '1\u5143=10\u89d2', emoji: '\ud83d\udcb5', delay: 0, animation: 'bounceIn', ttsText: '1\u5143\u7b49\u4e8e10\u89d2' },\n                  { id: 'el-1', text: '1\u89d2=10\u5206', emoji: '\ud83e\ude99', delay: 0.5, animation: 'bounceIn', ttsText: '1\u89d2\u7b49\u4e8e10\u5206' },\n                  { id: 'el-2', text: '\u627e\u96f6=\u4ed8-\u4ef7', emoji: '\ud83d\udcb0', delay: 1.0, animation: 'scaleIn', ttsText: '\u627e\u96f6\u7b49\u4e8e\u4ed8\u7684\u94b1\u51cf\u4ef7\u683c' },\n                ],\n              },\n              ttsNarration: '1\u5143\u7b49\u4e8e10\u89d2\uff0c1\u89d2\u7b49\u4e8e10\u5206\uff0c\u627e\u96f6\u7528\u51cf\u6cd5\uff01',\n            }`,
  [
    {id:'m1u8l4q1',type:'choice',q:'2\u5143\u7b49\u4e8e\u51e0\u89d2\uff1f',opts:['10\u89d2','20\u89d2','30\u89d2','2\u89d2'],a:'20\u89d2',h:'1\u5143=10\u89d2',e:'1\u5143=10\u89d2\uff0c2\u5143=20\u89d2\u3002'},
    {id:'m1u8l4q2',type:'fill',q:'50\u5206=___\u89d2',a:'5',h:'10\u5206=1\u89d2',e:'10\u5206=1\u89d2\uff0c50\u5206=5\u89d2\u3002'},
    {id:'m1u8l4q3',type:'choice',q:'\u4e706\u5143\u7684\u73a9\u5177\uff0c\u4ed810\u5143\uff0c\u627e\u56de\u591a\u5c11\uff1f',opts:['3\u5143','4\u5143','5\u5143','6\u5143'],a:'4\u5143',h:'10-6=\uff1f',e:'10-6=4\uff0c\u627e\u56de4\u5143\u3002'},
    {id:'m1u8l4q4',type:'choice',q:'1\u51433\u89d2=\u51e0\u89d2\uff1f',opts:['13\u89d2','30\u89d2','103\u89d2','3\u89d2'],a:'13\u89d2',h:'1\u5143=10\u89d2+3\u89d2',e:'1\u51433\u89d2=10\u89d2+3\u89d2=13\u89d2\u3002'},
    {id:'m1u8l4q5',type:'fill',q:'\u4e703\u5143\u7684\u7b14\u548c2\u5143\u7684\u6a61\u76ae\uff0c\u4e00\u5171___\u5143',a:'5',h:'3+2=\uff1f',e:'3+2=5\uff0c\u4e00\u51715\u5143\u3002'},
    {id:'m1u8l4q6',type:'fill',q:'\u3010\u671f\u672b\u771f\u9898\u30111\u5143-4\u89d2=___\u89d2',a:'6',h:'1\u5143=10\u89d2\uff0c10-4=\uff1f',e:'1\u5143=10\u89d2\uff0c10\u89d2-4\u89d2=6\u89d2\u3002'},
  ]
));

addLesson('m1u8', mkL5('m1u8', '\u8ba4\u8bc6\u4eba\u6c11\u5e01',
  '\u4eba\u6c11\u5e01\u5728\u751f\u6d3b\u4e2d\u5929\u5929\u7528\uff01\u53bb\u8d85\u5e02\u4e70\u4e1c\u897f\u3001\u7b97\u7b97\u96f6\u82b1\u94b1\u2026\u2026\u90fd\u662f\u6570\u5b66\uff01',
  '\u751f\u6d3b\u5e94\u7528\uff1a\u8d2d\u7269\u7b97\u603b\u4ef7\u7528\u52a0\u6cd5\uff0c\u627e\u96f6\u7528\u51cf\u6cd5\uff0c\u6362\u7b97\u8981\u8bb0\u7262\uff01',
  '\u4e70\u4e1c\u897f\u524d\u5148\u7b97\u7b97\u8981\u82b1\u591a\u5c11\u94b1\uff0c\u770b\u770b\u5e26\u7684\u94b1\u591f\u4e0d\u591f\uff01',
  `{\n              sceneType: 'sceneBuild',\n              title: '\u8d2d\u7269\u5e94\u7528',\n              sceneBuildConfig: {\n                sceneName: '\u8d85\u5e02\u8d2d\u7269',\n                elements: [\n                  { id: 'el-0', text: '\u94c5\u7b143\u5143', emoji: '\u270f\ufe0f', delay: 0, animation: 'slideIn', ttsText: '\u94c5\u7b143\u5143' },\n                  { id: 'el-1', text: '\u672c\u5b505\u5143', emoji: '\ud83d\udcd3', delay: 0.5, animation: 'slideIn', ttsText: '\u672c\u5b505\u5143' },\n                  { id: 'el-2', text: '\u51718\u5143', emoji: '\ud83d\udcb0', delay: 1.0, animation: 'scaleIn', ttsText: '\u4e00\u51718\u5143' },\n                  { id: 'el-3', text: '\u627e2\u5143', emoji: '\ud83e\ude99', delay: 1.5, animation: 'scaleIn', ttsText: '\u4ed810\u5143\u627e\u56de2\u5143' },\n                ],\n              },\n              ttsNarration: '3\u5143\u52a05\u5143\u7b49\u4e8e8\u5143\uff0c\u4ed810\u5143\u627e\u56de2\u5143\uff01',\n            }`,
  [
    {id:'m1u8l5q1',type:'choice',q:'\u4e704\u5143\u7684\u996e\u6599\u548c3\u5143\u7684\u9762\u5305\uff0c\u4e00\u5171\u8981\u4ed8\u591a\u5c11\uff1f',opts:['6\u5143','7\u5143','8\u5143','1\u5143'],a:'7\u5143',h:'4+3=\uff1f',e:'4+3=7\uff0c\u4e00\u5171\u8981\u4ed87\u5143\u3002'},
    {id:'m1u8l5q2',type:'fill',q:'\u5c0f\u660e\u670910\u5143\uff0c\u4e70\u4e866\u5143\u7684\u73a9\u5177\uff0c\u8fd8\u5269___\u5143',a:'4',h:'10-6=\uff1f',e:'10-6=4\uff0c\u8fd8\u52694\u5143\u3002'},
    {id:'m1u8l5q3',type:'choice',q:'\u4e709\u5143\u7684\u4e66\uff0c\u4ed8\u4e861\u5f2010\u5143\uff0c\u5e94\u627e\u56de\u591a\u5c11\uff1f',opts:['1\u5143','2\u5143','9\u5143','10\u5143'],a:'1\u5143',h:'10-9=\uff1f',e:'10-9=1\uff0c\u5e94\u627e\u56de1\u5143\u3002'},
    {id:'m1u8l5q4',type:'choice',q:'1\u51432\u89d2+3\u89d2=\u51e0\u89d2\uff1f',opts:['15\u89d2','5\u89d2','12\u89d2','6\u89d2'],a:'15\u89d2',h:'1\u51432\u89d2=12\u89d2',e:'1\u51432\u89d2=12\u89d2\uff0c12\u89d2+3\u89d2=15\u89d2\u3002'},
    {id:'m1u8l5q5',type:'fill',q:'5\u5143-2\u51433\u89d2=___\u5143___\u89d2',a:'2\u51437\u89d2',h:'5\u5143=4\u514310\u89d2',e:'5\u5143-2\u51433\u89d2=4\u514310\u89d2-2\u51433\u89d2=2\u51437\u89d2\u3002'},
    {id:'m1u8l5q6',type:'choice',q:'\u3010\u671f\u672b\u771f\u9898\u3011\u5c0f\u7ea2\u4e70\u4e86\u4e00\u4e2a8\u5143\u7684\u6587\u5177\u76d2\uff0c\u4ed8\u4e862\u5f205\u5143\uff0c\u5e94\u627e\u56de\u591a\u5c11\uff1f',opts:['1\u5143','2\u5143','3\u5143','8\u5143'],a:'2\u5143',h:'2\u5f205\u5143=10\u5143\uff0c10-8=\uff1f',e:'2\u5f205\u5143=10\u5143\uff0c10-8=2\uff0c\u5e94\u627e\u56de2\u5143\u3002'},
  ]
));

fs.writeFileSync(f, c, 'utf8');
console.log('Grade1 lessons done!');
