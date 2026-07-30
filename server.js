const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const port = Number(process.env.PORT || 5174);
const types = {
  '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8', '.webmanifest':'application/manifest+json; charset=utf-8',
  '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.mp4':'video/mp4'
};
const server = http.createServer((req,res)=>{
  const clean = decodeURIComponent((req.url || '/').split('?')[0].split('#')[0]);
  let file = path.join(root, clean === '/' ? 'index.html' : clean.replace(/^\/+/,''));
  if(!file.startsWith(root)) file = path.join(root,'index.html');
  fs.stat(file,(err,st)=>{
    if(err || !st.isFile()){
      const pub = path.join(root, 'public', clean.replace(/^\/+/,''));
      try { if(fs.statSync(pub).isFile()) file = pub; else file = path.join(root,'index.html'); }
      catch { file = path.join(root,'index.html'); }
    }
    fs.readFile(file,(err,data)=>{
      if(err){res.writeHead(404);res.end('Not found');return;}
      res.writeHead(200, {'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream'});
      res.end(data);
    });
  });
});
server.listen(port,'127.0.0.1',()=>{
  console.log(`WOM v5 local server running:`);
  console.log(`Local: http://localhost:${port}/#home`);
  console.log(`AdminPro: http://localhost:${port}/#-admin`);
});
