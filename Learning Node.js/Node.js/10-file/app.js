//file system
const fs = require('fs');


//3가지 
//rename(......, callback(error,data))  비동기 이기 때문에 , 필요인자 전달 : 필요한 일 다 한 뒤 우리가 등록한  call back 함수 호출
//renameSync(renameSync(.....)) catch(e){} 따로 콜백함수를 호출하지 않음
//promises.rename().then().catch 



//동기 방식
try{
fs.renameSync('./text.txt', './file.txt');

}catch(error){
    console.error(error);
}

console.log('next file');


//비동기
fs.rename('./file.txt','./text-new.txt',(error)=>{
    console.log(error);
});
console.log('hello');


//깔끔하게 쓰기 위한 방법(비동기)
fs.promises.rename('./text-new.txt','./text-change.txt')
            .then(()=>console.log('Done'))
            .catch(console.error());

            
//참고! fs.rename 과 fs.promises 둘 중 어떤게 먼저 시작 되는지 모른다. (둘다 비동기이기 때문)