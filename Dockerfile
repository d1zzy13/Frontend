FROM openjdk:17

WORKDIR /app

COPY target/frontend-1.0-SNAPSHOT.jar frontend.jar

RUN useradd -m myuser

USER myuser

CMD ["java", "-jar", "-Dspring.profiles.active=prod", "frontend.jar"]