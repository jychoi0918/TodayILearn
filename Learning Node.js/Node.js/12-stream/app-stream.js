 const fs = require('fs');

// const readStream = fs.createReadStream('./text.txt',{
//   //  highWaterMark : 8,//옵션을 정하지 않으면 default 64
//   //  encoding : 'utf-8',

// })

// const data =[];
// readStream.on('data',(chunk)=>{
//   //  console.log(chunk);
//     data.push(chunk);
//   //  console.log('data');
//     console.count('data')


// });

// readStream.on('end',()=>{
//     console.log(data.join(''));
// })

// readStream.on('error', error=>{
//     console.log(error);
// });


//===========연결하여 수행===================
const data =[];
fs.createReadStream('./text.txt',{
    highWaterMark : 8}).once('data',(chunk)=>{
    //  once는 한번만 수행
data.push(chunk);
    //  console.log('data');
console.count('data')
}).on('end',()=>{
console.log(data.join(''));
}).on('error', error=>{
console.log(error);
});