package com.G3Tingeso.PublicServices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PublicServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PublicServicesApplication.class, args);
	}

	@GetMapping("/")
	public String HelloWorld(){
		return "Hello World";
	}

}
