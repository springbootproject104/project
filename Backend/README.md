#backend

# Backend Microservices System

## Architecture

- API Gateway (Spring Cloud Gateway)
- Service Registry (Eureka)
- Config Server (Spring Cloud Config)
- Auth Service (JWT)
- Service-A (Business logic)
- config-repo (contain all properties file)

## Features

- Centralized configuration
- Service discovery
- API Gateway routing
- JWT-based authentication (in progress)
- Service-to-service communication (Feign)

## Tech Stack

- Java
- Spring Boot
- Spring Cloud
- Eureka
- OpenFeign

## How to Run

1. Start Config Server
2. Start Service Registry
3. Start Auth Service
4. Start Service-A
5. Start API Gateway

## Future Enhancements

- JWT validation at gateway and services
- Dockerization
- Cloud deployment