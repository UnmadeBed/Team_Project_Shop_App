package com.shopApp.shopApp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "is_completed")
    private String isCompleted;

    @JsonIgnoreProperties(value= "orders")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;






   @ManyToMany
//   @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
   @JoinTable(
           name = "orders_sneakers",
    joinColumns = {@JoinColumn(name= "order_id", nullable= false,updatable = false)},
           inverseJoinColumns = {@JoinColumn(name ="sneaker_id",nullable = false, updatable = false)}
   )
           private List<Sneaker> sneakers;






    public Order(Customer customer,String isCompleted) {
        this.date = LocalDate.now();
        this.customer = customer;
        this.isCompleted = isCompleted;
        this.sneakers = new ArrayList<>();

    }

    public Order() {
    }

    public void addSneaker(Sneaker sneaker){
        this.sneakers.add(sneaker);
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(String isCompleted) {
        this.isCompleted = isCompleted;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Sneaker> getSneakers() {
        return sneakers;
    }

    public void setSneakers(List<Sneaker> sneakers) {
        this.sneakers = sneakers;
    }
}







