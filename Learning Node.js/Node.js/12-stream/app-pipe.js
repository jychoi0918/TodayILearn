const fs = require('fs');


//만들고쓰기
const readStream = fs.createReadStream('./text.txt');
//const zlibStream = zlib.createGzip//압축하는 스트림
const writeStream = fs.createWriteStream('./text4.txt');
//stream을 연결해서 pipe관 같이 흐르게 하는 역할
const piping = readStream.pipe(writeStream);
piping.on('finish',()=>{
    console.log('done');
});

const http = require('http');
const server = http.createServer((req,res)=>{
    //fs.readFile('text.txt',(err,data)=>{
    //    res.end(data);  이 방법 보다
    const stream = fs.createReadStream('./text.txt');
    stream.pipe(res);

    });
server.listen(3000);