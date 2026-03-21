package com.firstMicroService.auth_service.service;


import com.firstMicroService.auth_service.util.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public String login(String username, String password) {

        // 🔴 For now: dummy validation
        if ("admin".equals(username) && "admin".equals(password)) {
            return JwtUtil.generateToken(username);
        }

        throw new RuntimeException("Invalid credentials");
    }
}
