//Buffer란 고정된 사이즈의 메모리 덩어리
//숫자의 배열과 같은 형태. 데이터에 있는 메모리 그 자체

const buf = Buffer.from('Hi');
console.log(buf);
//uni code 형태로 나온다.

console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
//배열 형태로 접근시 아스키 코드로 나온다.

console.log(buf.toString());
//toString의 기본 값이 utf-8

//퍼버 만들기
const buf2 = Buffer.alloc(2); ////메모리에서 사용가능한 덩어리를 찾아서 초기화 시킨다.
const buf3 = Buffer.allocUnsafe(2); //메모리의 초기화 안 함
buf2[0] = 72;
buf2[1] = 105;

//다른 버퍼에 있는 내용 가져오기 buf2에 잇는 내용을 buf3에 복사하기
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

//concat 여러 버퍼를 모을 수 있다. 버퍼의 배열.
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());