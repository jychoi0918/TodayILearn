package hello.core.order;

public interface OrderService {

    //주문을 생성성
   Order createOrder(Long memberId, String itemName, int itemPrice);

}
