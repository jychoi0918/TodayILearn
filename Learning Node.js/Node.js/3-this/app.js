function hello(){
    console.log(this);
    console.log(this===global);
    // 함수 내 this 는 true
}
hello();

class A {
    constructor(num){
    this.num = num;
    }
    memberFunction(){
        console.log('-----class------');
        console.log(this);
        console.log(this === global);
        // class 안에 있는 함수는 클래스 자체를 가르키고있고, global이 아니다.
    }
}

const a = new A(1);
a.memberFunction();


console.log('---global scope----');
console.log(this);
console.log(this === module.exports);
// js에서는 바깥의 this는 global 을 가리켰지만, node.js에서는 this는 module.exports를 가리킨다.