package com.firstMicroService.service_a.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "service-b")
public interface BServiceClient {

    @GetMapping("/b/testA")
    String testB();
}
