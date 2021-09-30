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

## NPM 21.09.29

외부 라이브러리, 프로젝트를 관리할 때 사용하는 npm

**Node Package Manager** : 수 많은 라이브러리, 다시 사용할 수 있는 템플릿

최고의 오픈 소스를 가져다 쓸 수 있다. 생산성 높고 안전성이 높다. 1M 개가 넘는 라이브러리!

하지만, 모든 것이 무조건 좋은 라이브러리가 아니기 때문에 자체 검열을 잘 해야한다.

npm은 특히 팀 단위에서 유용하다.

npm init 명령어 - package.json (프로젝트 정보가 들어있다.)

npm install _library이름_ : node module(해당 라이브러리 소스 코드를 가져온다)

프로젝트를 공유하거나, 전달 할 때 package.json 만 포함해 두면 무거운 node.module을 빼고,

알아서 package.json을 통해 npm install 후 실행 가능
