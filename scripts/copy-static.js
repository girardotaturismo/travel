const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

const rootDir = path.join(__dirname, '..');

// Copy public -> .next/standalone/public
const publicSrc = path.join(rootDir, 'public');
const publicDst = path.join(rootDir, '.next/standalone/public');
if (fs.existsSync(publicSrc)) {
  copyFolderSync(publicSrc, publicDst);
  console.log('Copied public folder to standalone.');
}

// Copy .next/static -> .next/standalone/.next/static
const staticSrc = path.join(rootDir, '.next/static');
const staticDst = path.join(rootDir, '.next/standalone/.next/static');
if (fs.existsSync(staticSrc)) {
  copyFolderSync(staticSrc, staticDst);
  console.log('Copied .next/static folder to standalone.');
}

console.log('Static assets copied to standalone successfully.');
