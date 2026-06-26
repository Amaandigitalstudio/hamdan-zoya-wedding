const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
http.createServer((req,res)=>{const url = req.url === '/' ? '/index.html' : req.url.split('?')[0]; const file = path.join(__dirname,'public',path.normalize(url)); if(!file.startsWith(path.join(__dirname,'public'))){res.writeHead(403);return res.end('Forbidden')} fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')} res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'}); res.end(data)})}).listen(port,()=>console.log(`Luxury wedding invitation running at http://localhost:${port}`));
