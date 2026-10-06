package com.example.spring_boot_react_auth.repositries;

import com.example.spring_boot_react_auth.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String Email);

}
