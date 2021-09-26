const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 =(args)=>{
    console.log('first-callback - ',args);
};

emitter.on('ggomi',callback1);

emitter.on('ggomi',(args)=>{
    console.log('second-callback - ',args);
});



emitter.emit('ggomi',{message : 1});
emitter.emit('ggomi',{message : 2});
//명시한 이벤트의 콜백함수 제거
emitter.emit('ggomi',{message : 3});
//evnet emit은 콜백함수에서 접근 가능