//package com.shopApp.shopApp.controller;
//
//import lombok.Value;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//@Controller
//public class CheckoutController {
//
//    @Value("${pk_test_E2FAuOZosm0GMANWGyZ6QiIN00ztQJoxNN}")
//    private String stripePublicKey;
//
//    @RequestMapping("/checkout")
//    public String checkout(Model model) {
//        model.addAttribute("amount", 50 * 100); // in cents
//        model.addAttribute("stripePublicKey", stripePublicKey);
//        model.addAttribute("currency", ChargeRequest.Currency.EUR);
//        return "checkout";
//    }
//}
