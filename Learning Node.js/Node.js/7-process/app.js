const process = require('process');

//실행되는 위치
console.log(process.execPath);
console.log(process.version);
//process id
console.log(process.pid);
//process의 부모 아이디
console.log(process.ppid);
console.log(process.platform);
//환경정보
console.log(process.env);
//얼마나 사용되고 있었는지
console.log(process.uptime());
//현재사용되고 있는 노드 경로
console.log(process.cwd());
//CPU 사용량
console.log(process.cpuUsage());


//위의 모든 코드가 다 수행되고 난 뒤, setTimeout 콜백 함수가 수행된다.
setTimeout(()=>{
 console.log('setTimeOut');
},0)


//callStack에 있는 것을 다 행위한 뒤 task queue실행 해줘!
//nextTick은 taskqueue에 순서 무시하고 callback 함수의 순서를 가장 높여 가장 앞 부분 넣어준다 (setTimeOut보다 앞에 위치하는것을 이야기 하는 듯 하다.)
process.nextTick(()=>{
    console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
    console.log('for loop');
}