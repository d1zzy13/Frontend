package org.example.frontend;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import org.springframework.web.client.RestTemplate;

@Route("")
public class MainView extends VerticalLayout {

    private final TextField contentField;
    private final RestTemplate restTemplate;

    public MainView() {
        Span version1 = new Span("V1.0");
        version1.getStyle().set("font-size", "48px");

        Span version2 = new Span("V2.0");
        version2.getStyle().set("font-size", "48px");

        TextField inputField = new TextField("Введите текст");
        Button submitButton = new Button("Отправить");


        contentField = new TextField("Содержимое файла");
        contentField.setReadOnly(true); // Делаем поле только для чтения
        Button fetchButton = new Button("Получить содержимое файла");

        submitButton.addClickListener(event -> {
            String text = inputField.getValue();
            if (text.isEmpty()) {
                Notification.show("Пожалуйста, введите текст");
            } else {
                sendTextToBackend(text);
                Notification.show("Текст отправлен!");
            }
        });

        // Обработчик для получения содержимого файла
        fetchButton.addClickListener(event -> fetchFileContent());

        add(version1, inputField, submitButton, version2, fetchButton, contentField);
        restTemplate = new RestTemplate();
    }

    private void sendTextToBackend(String text) {
        String backendUrl = "http://backend:8080/api/data"; // URL для записи в файл
        restTemplate.postForEntity(backendUrl, text, String.class);
    }

    private void fetchFileContent() {
        String backendUrl = "http://backend:8080/api/read"; // URL для чтения содержимого файла
        String content = restTemplate.getForObject(backendUrl, String.class);
        contentField.setValue(content != null ? content : "Ошибка при получении данных.");
    }
}