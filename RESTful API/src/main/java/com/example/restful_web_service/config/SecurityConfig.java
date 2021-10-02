package com.example.restful_web_service.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)throws Exception{
        auth.inMemoryAuthentication()
                .withUser("ggomi")
                .password("{noop}1234")
                .roles("USER"); //plain text로 하면 오류가 생길 수 있으닌 인코딩 없이 사용할 수 있도록 {noop} (no operation)추가
    }
}
