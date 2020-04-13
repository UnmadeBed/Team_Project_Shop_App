package com.shopApp.shopApp.repository;

import com.shopApp.shopApp.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByUserNameAndPassword(String userName, String password);
}
