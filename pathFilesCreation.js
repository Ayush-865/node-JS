const fs = require('fs');
const path = require('path');
const address = path.join(__dirname,'files');
for(i=0; i<5; i++){
    fs.writeFileSync(address+`/hello${i}.txt`, "i like diksha");
}

fs.readdir(address,(error,files)=>{
    console.warn(files);
});
