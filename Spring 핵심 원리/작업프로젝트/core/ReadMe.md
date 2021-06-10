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

