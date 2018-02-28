const fs = require('fs');
// 异步操作二进制流
fs.readFile('./fs.js', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }    
})