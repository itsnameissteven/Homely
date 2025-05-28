# Use an official Maven image with JDK 24
FROM maven:3.9.9-eclipse-temurin-24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the project files into the container
COPY . .

# Run Spring Boot using Maven
CMD ["mvn", "spring-boot:run"]