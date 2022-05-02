const http = require('http');
//const http2 = require('http2'); 
//https를 사용하기 위해선 인증 관련하여 브라우저로 복잡한 단계가 있다.
//아직 개발하는 단계에서 복잡함으로 추후 배포시 변경 

// const server = http.createServer((req,res) =>{
//     console.log('지금 찍히고 있습니다.');
// });

// server.listen(8088);
console.log(http.STATUS_CODES);
console.log(http.METHODS);
// const server = http.createServer((req,res)=>{
//     console.log('incoming');
// });

// server.listen(8080);
//노드에서는 기본적으로 작성 가능하다.
