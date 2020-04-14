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

        Customer cust1 = new Customer("t","1","John","Doe","aa@bb.com","Somewhere");
        customerRepository.save(cust1);

        Sneaker item1 = new Sneaker("Nike","Air Jordan 1 Low SE","/images/air-jordan-1-1.jpg",10.00,10.00,89.95, "male","/images/air-jordan-1-2.jpg","/images/air-jordan-1-3.jpg");
        sneakerRepository.save(item1);
        Sneaker item2 = new Sneaker("Nike","Air Jordan 1 Mid","/images/air-jordan-1-mid-1.jpg",9.00,20.00,84.95, "male","/images/air-jordan-1-mid-2.jpg","/images/air-jordan-1-mid-3.jpg");
        sneakerRepository.save(item2);


        Sneaker item3 = new Sneaker("Nike","Nike Air Max 2090","/images/air-max-2090-1.jpg",9.00,20.00,84.95, "women","/images/air-max-2090-2.jpg","/images/air-max-2090-3.jpg");
        sneakerRepository.save(item3);
        Sneaker item4 = new Sneaker("Nike","Nike Air Max 2090 dark","/images/air-max-2090-shoe-1.jpg",7.00,20.00,129.95, "women","/images/air-max-2090-shoe-2.jpg","/images/air-max-2090-shoe-3.jpg");
        sneakerRepository.save(item4);

        Sneaker item5 = new Sneaker("Nike","Nike Air Max 2090","/images/air-max-2090-and-shoe-1.jpg",5.00,20.00,47.95, "children","/images/air-max-2090-and-shoe-2.jpg","/images/air-max-2090-and-shoe-3.jpg");
        sneakerRepository.save(item5);
        Sneaker item6 = new Sneaker("Nike","Nike Air Force 1","/images/air-force-1-lv8-3-older-shoe-1.jpg",5.00,20.00,54.95, "children","/images/air-force-1-lv8-3-older-shoe-2.jpg","/images/air-force-1-lv8-3-older-shoe-3.jpg");
        sneakerRepository.save(item6);


        Sneaker item7 = new Sneaker("Converse","Chuck 70 Low Top","/images/167813C_standard.jpg",5.00,20.00,88.95, "male","/images/167813C_shot2.jpg","/images/167813C_shot3.jpg");
        sneakerRepository.save(item7);
        Sneaker item8 = new Sneaker("Converse","Pro Leather Low-Top","/images/167238C_standard.jpg",5.00,20.00,67.95, "male","/images/167238C_shot2.jpg","/images/167238C_shot3.jpg");
        sneakerRepository.save(item8);

        Sneaker item9 = new Sneaker("Converse","Pro Leather Low-Top","/images/167238C_standard.jpg",11.00,20.00,67.95, "male","/images/167238C_shot2.jpg","/images/167238C_shot3.jpg");
        sneakerRepository.save(item9);
        Sneaker item10 = new Sneaker("Converse","Chuck 70 Classic","/images/162050C_standard.jpg",12.00,20.00,70.00, "women","/images/162050C_shot2.jpg","/images/162050C_shot3.jpg");
        sneakerRepository.save(item10);

        Sneaker item11 = new Sneaker("Adidas","OZWEEGO SHOES","/images/OZWEEGO_Shoes_Black_EE7002_01_standard.jpg",10.00,20.00,70.00, "women","/images/OZWEEGO_Shoes_Black-1.jpg","/images/OZWEEGO_Shoes_Black-2.jpg");
        sneakerRepository.save(item11);

        Sneaker item12 = new Sneaker("Adidas","IZZA SHOESS","/images/Nizza_Shoes_White_C1.jpg",6.00,20.00,89.00, "man","/images/Nizza_Shoes_White_C2.jpg","/images/Nizza_Shoes_White_C3.jpg");
        sneakerRepository.save(item12);


        Sneaker item13 = new Sneaker("Adidas","IGAZELLE SHOES","/images/Gazelle_Shoes_Blue_C1.jpg",6.00,20.00,69.00, "children","/images/Gazelle_Shoes_Blue_C2.jpg","/images/Gazelle_Shoes_Blue_C3.jpg");
        sneakerRepository.save(item13);














        Order order1 = new Order(cust1,"no");
        orderRepository.save(order1);
        order1.addSneaker(item1);
        order1.addSneaker(item2);


        orderRepository.save(order1);







    }
}
