# Node.js

> Node.js는 확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다. 작성 언어로 자바스크립트를 활용하며 논블로킹 I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있다. -위키백과

Node.js는 Chrome의 V8엔진을 이용하여 브라우저에서 JavaScript를 해석하듯이 서버에서 JavaScript를 동작할 수 있도록 하는 환경(플랫폼)

즉,Node.js JavaScript Runtime 환경. 브라우저 밖에서도 모든 곳에서 사용할 수 있다

### Why Node?

1. js 로 모든 것을 할 수 있다. client, server 모두 javascript로 개발 할 수 있다. (생산성 높아짐) - 빠르게 프로토 타입도 만들 수 있다.
2. 개발자 절반 이상이 node.js를 사용
3. 대기업들이 server,ssr 한다.!
4. 쉽고 간단하지만, 강하고 유연성이 높다.
5. 강력한 커뮤니티 (npm)

즉, 강력한 커뮤니티 (QnA), 대기업이 사용한 만큼 질 좋은 것, 즉 많은 이들이 쓰고 사용하는 것은 좋은 툴이 있다!

### 노드의 매력포인트

1. **JavaScript Runtime**
2. **Single Thread**

프로그램(프로세스)안에는 1-code ,2-Stack:함수의 실행 순서 기억,3-동적으로 생긴 데이터 보관 Heap, 4- 전역변수 저장하고 있는 Data.

thread가 많으면 비용이 높아진다. 꼭 좋은 것 만은 아님!

반면 js 는 동기적인 언어! 비효율일 것 같은데...?

그러나! non blocking I/O(input/output)(외부적) vs CPU (내부 두뇌)

3.**non blocking** : 비동기적인 방식. callback을 부르고 다음으로 넘어간다.

1. **Event-Driven** : event를 통해 내가 등록한 callback호출

### 노드 내부 쏘옥 들여다보기

Nodejs. runtime Environment

Memory Heap : 동적 데이터

Call Stack : 함수 호출 순차적 흐름을 기억하는 곳

call stack 에서 함수를 수행시 call back 등록. 이 call back 함수를 task queue라는 대기 줄에 넣어 둔다.

Event Loop : call stack이 비워질때까지 기다렸다가, 다 비워지면 task queue에 들어있던 call back 함수를 call stack에 넣어둔다.

즉, Node.js application은 **main single thread**가 있다. 파일 i/o 등은 nodejs api에서 통해 할 수 있다. 이벤트 발생시 처리해야하는것을 node.js 를 통해 병렬적으로 처리

## 전형적인 서버 vs Node.js

멀티 쓰레드 - 멀티 쓰레드 풀이있다.

클라이언트 요청시 처리하는 쓰레드 할당.

한번에 처리할 수 있는 쓰레드 양을 넘어가면, 쓰레드가 남을 때까지 기다리는것.!

즉 식당의 직원 같은 개념인 쓰레드!

노드 js.는 한 식당에 일할 수 있는 직원이 있는 것이 아니라, 주문을 받는 직원이 따로 있음.

이 주문 직원은 티켓을 부여한 뒤, 음식이 다 준비되었을때 음식을 서빙하는 직원 한명이 티켓 순서대로 돌려줌.

## NPM

외부 라이브러리, 프로젝트를 관리할 때 사용하는 npm

**Node Package Manager** : 수 많은 라이브러리, 다시 사용할 수 있는 템플릿

최고의 오픈 소스를 가져다 쓸 수 있다. 생산성 높고 안전성이 높다. 1M 개가 넘는 라이브러리!

하지만, 모든 것이 무조건 좋은 라이브러리가 아니기 때문에 자체 검열을 잘 해야한다.

npm은 특히 팀 단위에서 유용하다.

npm init 명령어 - package.json (프로젝트 정보가 들어있다.)

npm install _library이름_ : node module(해당 라이브러리 소스 코드를 가져온다)

프로젝트를 공유하거나, 전달 할 때 package.json 만 포함해 두면 무거운 node.module을 빼고,

알아서 package.json을 통해 npm install 후 실행 가능
