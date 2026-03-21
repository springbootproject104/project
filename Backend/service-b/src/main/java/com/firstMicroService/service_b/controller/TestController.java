package com.firstMicroService.service_b.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/b/testA")
    public String test() {
        return "Response from Service B called from A";
    }
    @GetMapping("/b/testB")
    public String testDirect() {
        return "Response from Service B";
    }
}