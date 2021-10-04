/*
package com.example.restful_web_service.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
//   어떠한 메소드도 다 허가 되어 콘솔 가능하게 하는 것 - h2 접속 원활하게 만든다.
    @Override
    protected void configure(HttpSecurity http) throws Exception {
//  오류가 나서 클래스 주석처리
    http.authorizeHttpRequests().antMatcher("/h2-console/**").permitAll();
    http.csrf().disable();
    http.headers().frameOptions().disable();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)throws Exception{
        auth.inMemoryAuthentication()
                .withUser("ggomi")
                .password("{noop}1234")
                .roles("USER"); //plain text로 하면 오류가 생길 수 있으닌 인코딩 없이 사용할 수 있도록 {noop} (no operation)추가
    }
}
*/
