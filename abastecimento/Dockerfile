FROM eclipse-temurin:21-jdk as builder
WORKDIR /app

COPY ./mvnw ./mvnw
COPY ./mvnw.cmd ./mvnw.cmd
COPY ./.mvn ./.mvn
RUN chmod +x ./mvnw

COPY ./pom.xml ./pom.xml
COPY ./domain ./domain
COPY ./api ./api

RUN ./mvnw clean install -N -DskipTests

WORKDIR /app/domain
RUN ../mvnw clean install -DskipTests

WORKDIR /app/api
RUN ../mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=builder /app/api/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
