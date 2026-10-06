package com.example.spring_boot_react_auth.controllers;

import com.example.spring_boot_react_auth.entities.User;
import com.example.spring_boot_react_auth.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    private final UserServiceImpl userService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserServiceImpl userService,
                          PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null) {
            return "Email Already Exists";
        } else
        {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
            return "User Saved Successfully";
        }
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());

        if (existingUser != null && passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            return "Login Credentials are Valid";
        } else {
            return "Invalid Credentials";
        }
    }
}
