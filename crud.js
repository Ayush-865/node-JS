const fs = require('fs');
const path = require('path');
// FILE path DECLERATION
let dirPath = path.join(__dirname,'crud');
let filePath = `${dirPath}/apple.txt`;
// FILE CREATION
fs.writeFileSync(filePath,"I love eating apple");
//FILE APPEND
fs.appendFile(filePath," and this is apple.txt",(err)=>{
    if(!err){
        console.log("file appended");
    }
});

//FILE READING
fs.readFile(filePath,'utf8',(err, item)=>{
    console.log(item);
});

// //FILE RENAME
fs.rename(filePath, `${dirPath}/fruits.txt`,(err)=>{
    if(!err){
        console.log("file renamed");
        //FILE DELETION

        fs.unlinkSync(`${dirPath}/fruits.txt`);
    }
});
