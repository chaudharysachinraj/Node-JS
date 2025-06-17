const fs = require('fs');
const path = require('path');
const dirPath =path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// --------------> Writes data in a file <-----------------
// fs.writeFileSync(filePath, 'This is a simple file .');


// --------------> Reads content of a file <-----------------
// fs.readFile(filePath, 'utf8',(err, item)=>{
//     console.log(item);
// })


// --------------> Append data in a file <-----------------
// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(!err) console.log('file is updated');
// })


// --------------> Rename a file <-----------------
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log('file is renamed');
// })


// --------------> Delete a file <-----------------
fs.unlinkSync(`${dirPath}/fruit.txt`);