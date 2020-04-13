package com.shopApp.shopApp.components;

import com.shopApp.shopApp.models.Customer;
import com.shopApp.shopApp.models.Order;
import com.shopApp.shopApp.models.Sneaker;
import com.shopApp.shopApp.repository.CustomerRepository;
import com.shopApp.shopApp.repository.OrderRepository;
import com.shopApp.shopApp.repository.SneakerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    SneakerRepository sneakerRepository;


    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        Customer cust1 = new Customer("turbo","12345","John","Doe","aa@bb.com","Somewhere");
        customerRepository.save(cust1);
        Sneaker item1 = new Sneaker("Nike","001","/images/nike-air-jordan-1.jpg",10.00, 20.00,99.99,"male");
        sneakerRepository.save(item1);
        Sneaker item2 = new Sneaker("Adidas","043","/images/nike-air-jordan-2.jpg",9.00, 20.00,89.99, "women");
        sneakerRepository.save(item2);
        Sneaker item3 = new Sneaker("Nike","127","/images/nike-air-jordan-3.jpg",12.00, 20.00,79.99, "children");
        sneakerRepository.save(item3);


        Sneaker item4 = new Sneaker("Converse","Xs2","/images/nike-air-jordan-1.jpg",8.00, 20.00,99.99,"male");
        sneakerRepository.save(item4);
        Sneaker item5 = new Sneaker("Adidas","043","/images/nike-air-jordan-2.jpg",4.00, 20.00,89.99, "children");
        sneakerRepository.save(item5);
        Sneaker item6 = new Sneaker("Nike","127","/images/nike-air-jordan-3.jpg",6.00, 20.00,79.99, "women");
        sneakerRepository.save(item6);


        Order order1 = new Order(cust1,"no");
        orderRepository.save(order1);
        order1.addSneaker(item1);
        order1.addSneaker(item1);
        order1.addSneaker(item1);
        order1.addSneaker(item1);

        orderRepository.save(order1);







    }
}
