package com.example.spring_boot_react_auth.services;

import com.example.spring_boot_react_auth.entities.User;

public interface UserService {
    User findByEmail (String email);
    User saveUser(User user);

}
