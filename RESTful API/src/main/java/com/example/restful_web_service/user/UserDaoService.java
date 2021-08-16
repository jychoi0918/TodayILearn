package com.example.restful_web_service.user;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UserDaoService {


    //Data Base역할의 List
    private static List<User> users = new ArrayList<>();
    //userId 고유 아이디
    private static int usersCount = 3;

    static {
        //사용자 등록
        users.add(new User(1,"Diana",new Date()));
        users.add(new User(2,"Tomas",new Date()));
        users.add(new User(3,"Lupe" ,new Date()));
    }

    //모든 user 반환
    public static List<User> findAll() {
        return users;
    }

    //새 user의 겹치는 id값이 없다면 새 번호 부여 후 저장 / 아니면 그냥 저장
    public User save(User user){
        if(user.getId()==null){
            user.setId(++usersCount);
        }
        users.add(user);
        return user;
    }

    //하나의 user 반환
    public User findOne(int id){
        for(User user : users){
            if(user.getId() == id){
                return user;
            }
        }
        return null;
    }



}
