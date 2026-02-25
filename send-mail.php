<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "vash-email@example.com"; // Вкажіть вашу пошту
    $subject = "Нова заявка з сайту Terra Nova";

    // Очищення даних
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    $email_content = "Ім'я: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Повідомлення:\n$message\n";

    $headers = "From: Terra Nova <no-reply@vash-domen.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Дякуємо! Ваше повідомлення надіслано.";
    } else {
        http_response_code(500);
        echo "Помилка сервера. Спробуйте пізніше.";
    }
} else {
    http_response_code(403);
    echo "Метод не дозволено.";
}
?>