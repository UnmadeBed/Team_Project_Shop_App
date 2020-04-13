package com.shopApp.shopApp;


import com.shopApp.shopApp.models.Customer;
import com.shopApp.shopApp.models.Order;
import org.junit.Before;
import org.junit.Test;

public class CustomerTest {

    Customer customer;

    @Before
    public void before() {

    }

    @Test
    public void canCreateCustomer() {
//        Customer cust1 = new Customer("turbo","bbb","John","Doe","aa@bb.com","Somewhere");
//        System.out.println(cust1);
//        Order ord1 = new Order("2000",cust1);
//        System.out.println(ord1);
//        System.out.println(ord1.getCustomer());
    }

    @Test
    public void canSomething() {
//        cutomer
        Customer cust1 = new Customer("turbo","bbb","John","Doe","aa@bb.com","Somewhere");

//        stock item
//        StockItem item1 = new StockItem("some","some",20.00, 30.00);

//      order
        Order order1 = new Order(cust1,"NO");

//        order detail
//        OrderDetail order1_detail = new OrdrDetail(item1, 10, order1);

        System.out.println(cust1);
//        System.out.println(item1);
        System.out.println(order1);
//        System.out.println(order1_detail);

    }
}
