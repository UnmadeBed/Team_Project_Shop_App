package com.shopApp.shopApp.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sneakers")
public class Sneaker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "brand")
    private String brand;

    @Column
    private String model;

    @Column
    private Double size;

    @Column(name = "image_link")
    private String imgLink;

    @Column(name = "image_link2")
    private String img2;

    @Column(name = "image_link3")
    private String img3;

    @Column(name = "stock_price")
    private Double stockPrice;

    @Column(name = "retail_price")
    private Double retailPrice;

    @Column(name = "department")
    private String department;


    public Sneaker(String brand,String model, String imgLink,Double size, Double stockPrice, Double retailPrice, String department,String img2,String img3){
        this.brand = brand;
        this.model = model;
        this.size = size;
        this.imgLink = imgLink;
        this.stockPrice = stockPrice;
        this.retailPrice = retailPrice;
        this.department = department;
        this.img2 = img2;
        this.img3 = img3;
    }

    public Sneaker() {
    }

    public String getImg2() {
        return img2;
    }

    public void setImg2(String img2) {
        this.img2 = img2;
    }

    public String getImg3() {
        return img3;
    }

    public void setImg3(String img3) {
        this.img3 = img3;
    }

    public Long getId() {
        return id;
    }

    public String getDepartment() {
        return department;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Double getSize() {
        return size;
    }

    public void setSize(Double size) {
        this.size = size;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    public Double getStockPrice() {
        return stockPrice;
    }

    public void setStockPrice(Double stockPrice) {
        this.stockPrice = stockPrice;
    }

    public Double getRetailPrice() {
        return retailPrice;
    }

    public void setRetailPrice(Double retailPrice) {
        this.retailPrice = retailPrice;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}




