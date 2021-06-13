#  스프링을 사용하지 않고 프로젝트 진행하기
_김영한-스프링 핵심 원리-기본편_
> 순수한 자바로만 프로젝트 진행하는 프로젝트이다. <br>
> 세팅에서의 편의를 위해 Spring Initializr를 사용했지만, 스프링을 전혀 사용하지 않는다.
>역할과 구현 분리를 중요시하여 객체를 조립할 수 있는 객체지향적 프로젝트를 생성해 보자
> 


<br>


### 비즈니스 요구사항 설계
* 회원
    * 회원가입, 조회 가능
    * 회원 등급 ( 일반 / VIP )
    * 회원 데이터 자체 DB 구축, 외부 시스템 연동 가능 (미확정)
    

 * 주문과 할인 정책
   * 회원 상품 주문 가능
   * 회원 등급에 따라 할인 정책 적용 가능
   * 할인 정책 : 모든 VIP 1000원 공정금액 할인 적용 ( 추후 변경 가능 )
   * 할인 정책 변경 가능성 높음. 회사 기본 할인 정책 미정, 오픈 직전까지 고민을 미루고 싶다.<br> 최악의 경우 할인 적용 없을 수 있음( 미확정 )
    

<br>



### interface의 중요성

역할과 구현 분리를 가능
<br>
역할들의 협력 관계를 그대로 재사용

++
단위테스트 중요
<<<<<<< HEAD


<br><br><br>

### 개발
* discount
  * DiscountPolicy (interface)
      * FixDiscountPolicy
        
* member
  * Grade
  * Member
  * MemberRepository (interface)
    * MemberRepositoryImpl
  * MemberService(interface)  
    * MemberServiceImpl
* order
    - Order
    - OrderService (interface)
         - OrderServiceImpl
<br>
<br>

           
<hr>
<br>

## 새로운 할인 정책 개발 21.06.07 

할인율 - 1000원 고정 할인에서 10% 할인율로 변경
* discount
    * DiscountPolicy (interface)
        * FixDiscountPolicy
        * RateDiscountPolicy ====> 추가

    <br>
          

**문제점**

OrderServiceImpl이 DiscountPolicy 인터페이스와 
FixDiscountPolicy 구체 클레스도 함께 의존 => **DIP 위반**
(추상화에만 의존해야한다)

따라서 Fix=>Rate로 변경할때 코드 수정이 일어남.==> **OCP 위반**
<br>
변경하지 않아야 하는데 클라이언트 코드를 수정했음.


이를 해결하기 위해 구현체 없이 인터페이스 만을 의존하게 코드 수정 but 구현체가 없으니 NullPointException 발생

**해결방안**

_누군가가 클라이언트 "OrderServiceImpl"에 "DiscountPolicy" 구현객체 대신 생성 후 주입해줘야한다._

<br>

### 관심사의 분리

위와 같이 OrderServiceImpl의 코드를 수정하는 것은 
마치 연극의 배역의 배우를 다른 배우가 정하는 행위와 같음! = > 공연기획자의 업무!

즉, 실제 실행되는 객체는 실행만을 하고, 인터페이스의 구현체를 정하는 것도 따로!

구현체를 정하는 역할, 즉 공연기획자를 만든다.

- AppConfig : 객체의 생성과 연결 담당 하는 Class. 내부 객체 생성과 그 참조값을 생성자로 전달
  
  **DIP완성**

=> _사용영역의 변경이 없어지고, 구성영역에서 변경만 일어나게 해준다. 변경을 한뒤 영향이 끼쳐지는 범위가 적어진다._
변경이 닫혀있다 = 변경을 해 줄 필요가 없다.

<hr>

## 스프링으로 전환하기 21. 06. 13

**스프링 컨테이너**
_ApplicationContext_를 스프링 컨테이너라고 한다.
기존: 개발자 AppConfig사용 -> 현재: 스프링컨테이너에서 꺼내사용

**@Configuration**AppConfig 사용 **@Bean**붙은 메서드들이 스프링 컨테이너에 저장
됨.(스프링 빈) 기본적으로 메서드이름을 key, 반환 값을 value로 한다.
applicationContext.getBean으로 찾는다.

스프링 컨테이너가 저장해줌으로서 어마어마하게 편해진다!

# Spring Container

- 스프링 컨테이너가 생성되는 과정

```java
ApplicationContext applicationContext =
	 new AnnotationConfigApplicationContext(AppConfig.class);
```

ApplicationContext = 스프링 컨테이너 (인터 페이스)

스프링컨테이너는 xml을 기반으로 만들 수 있고  어노테이션 기반의 자바 설정 클래스 만들 수 있다.

new AnnotationConfigApplicationContext(AppConfig.class); - 구현체

1. 스프링 컨테이너 생성
2. 스프링 빈 등록 ( **빈이름은 항상 다른 이름을 부여** 다른 빈 무시, 기존 빈 덮어버리기)
3. 스프링 빈 의존 관계 설정
4. 스프링 빈 의존 관계 설정 (AppConfig 내 Bean들 사이의 의존관계 설정 )
- 자바 코드로 스프링 빈 등록 시 생성자를 호출하면서 의존관계 주입도 한번에 처리

**정리**

스프링 컨테이너를 생성하고, 설정 정보 참고하여 스프링 빈도 등록, 의존관계 설정

## 컨테이너에 등록된 빈 조회

ac.getBeanDefinitionNames() : 스프링에 등록된 모든 빈 이름 조회

ac.getBean : 빈 이름으로 객체(인스턴스 객체 조회)

- 컨테이너에 등록된 모든 빈 조회(ApplicationContextInfoTest)
    - 직접 등록한 애플리케이션 빈 조회/
    - 스프링 내부에서 사용하는 빈 조회
    

- 기본조회 (ApplicationContextBasicFindTest)
    - 빈이름으로 조회
    - 타입으로 조회
    - 구체 타입으로 조회
    

- 동일한 타입이 둘 이상 시 (ApplicationContextSameBeanFindTest)
    - 타입 조회시 같은 타입 두개 이상 →이름으로 조회
    - 특정 타입 모두 조회
    

- **상속관계 조회 (ApplicationContextExtendsFindTest)**
    - 부모타입으로 조회시 자식 타입도 함께 조회
    - Object타입으로 조회하면 모든 스프링 빈 조회