package com.thiagogorza.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.thiagogorza.api", "com.thiagogorza.domain"})
@EnableJpaRepositories(basePackages = "com.thiagogorza.domain.model.repository")
@EntityScan(basePackages = "com.thiagogorza.domain.model")
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

}
