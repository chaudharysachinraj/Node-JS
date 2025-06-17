// const fs = require('fs');

// fs.writeFileSync('data.txt', "this is data file");

// ---------------> <--------------------
// ---------------> <--------------------
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'File');
// for(i=1; i<=5; i++){
//     //  fs.writeFileSync(dirPath + "/data"+i+".txt", "this is data file");
//      fs.writeFileSync(dirPath +`/data${i}.txt`, "this is data file");
// }

fs.readdir(dirPath,(err, file)=>{
    file.forEach((item)=>{
        console.log("file name is",item);
    })
})