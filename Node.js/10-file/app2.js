const fs = require('fs').promises;


//read a file
fs.readFile('./text-new.txt','utf-8') //경로 , 인코딩 되는 형식
.then(data =>console.log(data)) //데이터 출력
.catch(console.error);

//writing a file
fs.writeFile('./file.txt','New file text 2!!')
.catch(console.error); //반복시, 덮어 씌워진다.

fs.appendFile('./file.txt','more data!')
.catch(console.error); //뒤에 

//copy 비동기 적으로 이루어 순서대로 이루어 지지 않는 경우도 있다.
fs.copyFile('./file.txt','./file2.txt')
.catch(console.error);

//위의 비동기를 해결하기 위해 순서를 정하고 만들기 
fs.appendFile('./file.txt','more data!')
.then(()=>{
    fs.copyFile('./file.txt','./file2.txt')
    .catch(console.error);
})
.catch(console.error);


//folger 만들기
fs.mkdir('sub-folder')
.catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(console.error);


//api 사용할때 인자는 어떤것이 있는지, 추가적으로 전달해야하는 인자가 있는지
//promise타입으로 실행 할때 catch 사용