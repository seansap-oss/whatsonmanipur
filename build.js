const fs = require('fs');
const path = require('path');
const root = __dirname;
const out = path.join(root,'dist');
function copyDir(src,dst){
  fs.mkdirSync(dst,{recursive:true});
  for(const item of fs.readdirSync(src,{withFileTypes:true})){
    const s=path.join(src,item.name), d=path.join(dst,item.name);
    if(item.isDirectory()) copyDir(s,d); else fs.copyFileSync(s,d);
  }
}
function copyAny(name){
  const src=path.join(root,name), dst=path.join(out,name);
  const st=fs.statSync(src);
  if(st.isDirectory()) copyDir(src,dst); else { fs.mkdirSync(path.dirname(dst),{recursive:true}); fs.copyFileSync(src,dst); }
}
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
copyAny('index.html');
copyDir(path.join(root,'public'), out);
copyAny('src');
copyAny('README.md');
console.log('Build complete: dist folder created. Deploy the dist folder if using static hosting.');
