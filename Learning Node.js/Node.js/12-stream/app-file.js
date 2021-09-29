const fs = require('fs');

const beforeMemory = process.memoryUsage().rss;

//파일 읽기
fs.readFile('./text.txt',(_,data)=>{
    fs.writeFile('./text2.txt',data,()=>{}); //새로운 파일에 저장

    //calculate
    const afterMemory = process.memoryUsage().rss;
    const diff = afterMemory - beforeMemory;
    const consumed = diff/1024/1024;
    console.log(diff);
    console.log(`Consumed Memory : ${consumed}MB`);
});