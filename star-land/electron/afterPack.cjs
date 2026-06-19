// afterPack.js - 构建后清理非必要文件以减小体积
const fs = require('fs');
const path = require('path');

exports.default = async function(context) {
  const appOutDir = context.appOutDir;
  
  // 需要删除的非必要文件列表
  const filesToRemove = [
    'LICENSES.chromium.html',   // Chromium 许可证文件 (~19MB)
    'LICENSE.electron.txt',      // Electron 许可证文件
  ];

  for (const file of filesToRemove) {
    const filePath = path.join(appOutDir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`  • removed ${file}`);
    }
  }
};
