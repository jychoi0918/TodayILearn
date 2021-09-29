// console의 다양한 기능

console.log('log-------------------');
console.clear();


//console에 치면 색깔이 달라진다.
//서버에 배포했을 때 심각성에 따라 레벨별로 빠르게 알아채고, 수정하기 좋다.
console.log('log');     //개발
console.info('info');   //중요정보 남기고 싶을때
console.warn('warn');   //경보 단계(치명적이지 않은 오류)
console.error('error'); //에러, 사용자 에러, 시스템 에러



//assert 참이면 출력이 되지 않음!
console.assert(2===3,'not same! 같지 않음!');
console.assert(2===2,'같음 same');


//print object 공식 문서에 설명이 더 있음
const student = {name: 'JJang Yeon', age: 20, pet:{name:'ggomi'}};
console.log(student);
console.table(student);
console.dir(student,{showHidden: true, color: false, depth:1});


//measuring time 시간 측정
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');


//counting 함수호출 count
function a(){
    console.count('a function');
}
a();
a();
console.countReset('a function');
a();


//debugging 유용 기능 추적하기
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}

f1();