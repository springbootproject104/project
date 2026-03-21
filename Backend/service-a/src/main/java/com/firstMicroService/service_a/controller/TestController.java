package com.firstMicroService.service_a.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.firstMicroService.service_a.feign.BServiceClient;

@RestController
public class TestController {

	@Autowired
	BServiceClient bcaller;
	
    @GetMapping("/a/test")
    public String test() {
        return "Response from Service A";
    }
    @GetMapping("/a/testB")
    public String testB() {
        return bcaller.testB();
    }
}