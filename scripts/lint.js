const fs = require('fs');
const files = ['public/index.html','public/styles.css','public/app.js','server.js'];
for (const file of files) {
  const text = fs.readFileSync(file,'utf8');
  if (text.includes('<<<<<<<')) throw new Error(`Merge marker found in ${file}`);
}
console.log('Lint check passed.');
