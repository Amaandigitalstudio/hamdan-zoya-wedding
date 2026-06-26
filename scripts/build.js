const fs = require('fs');
for (const file of ['public/index.html','public/styles.css','public/app.js']) {
  if (!fs.existsSync(file)) throw new Error(`${file} is missing`);
}
console.log('Build check passed: static production assets are present.');
