const fs = require('fs');
//만들고쓰기
const writeStream= fs.createWriteStream('./text3.txt');
writeStream.on('finish',()=>{
    console.log('finished!');
});


//쓸 수 있다.
writeStream.write('hello!');
writeStream.write('World!');
writeStream.end();