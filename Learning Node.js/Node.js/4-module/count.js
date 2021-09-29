let count = 0;

function increase(){
    count++;
}

function getCount(){
    return count;
}

//export
module.exports.getCount = getCount;
module.exports.increase = increase;
//모듈을 더 확인해 보기
console.log(module);

//이 두가지가 동일할까요?
module.exports.increase = increase;
exports.increase = increase;

console.log(module.exports === exports);
exports = {};
console.log(module.exports === exports);

//exports는 모듈을 참조한다. 하지만 중간에 exports에 중간에 다르게 할당하면, 다른 것이 되어버린다.