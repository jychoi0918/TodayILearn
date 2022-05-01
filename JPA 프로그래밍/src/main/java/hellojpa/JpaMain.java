package hellojpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;

public class JpaMain {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin();

        try {
            Member member = new Member();
            member.setId(101L);
            member.setName("Name");

//            >>>>>>>>>>>>>여기까지 비영속성

//            여기부터 영속성<<<<<<<<<<<<<<<<<<<
            System.out.println("===Before===");
           em.persist(member);
           //em.detatch(member); 는 영속성 컨텍스트 분리
            //em.remove(member); 는 객체를 삭제한 상태
            System.out.println("===After===");

            Member findMember = em.find(Member.class, 101L);
            System.out.println("findMember = " + findMember.getId());
            System.out.println("findMember = " + findMember.getName());

            tx.commit();
        }catch (Exception e){
            tx.rollback();
        } finally {
            em.close();
        }

        //code
        em.close();
        emf.close();
    }
}
