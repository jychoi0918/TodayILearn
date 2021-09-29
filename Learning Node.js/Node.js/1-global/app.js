// node 모듈이라는 걸 알려준다.
const fs = require('fs');


console.log(global);
global.hello =()=>{
    console.log('hello');
};
global.hello();
hello();