FROM eclipse-temurin:21-jdk
ARG JAR_FILE=build/libs/notecode-0.0.1.jar
COPY ${JAR_FILE} app_notecode.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_notecode.jar"]