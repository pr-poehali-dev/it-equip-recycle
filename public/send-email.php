<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Метод не разрешен']);
    exit;
}

$to = 'commerce@rusutil-1.ru';
$from_name = $_POST['name'] ?? 'Не указано';
$from_email = $_POST['email'] ?? 'noreply@rusutil-1.ru';
$subject = $_POST['subject'] ?? 'Заявка с сайта';

// Формируем сообщение
$message = "=== НОВАЯ ЗАЯВКА С САЙТА ===\n\n";
$message .= "Контактные данные:\n";
$message .= "Имя: " . ($_POST['name'] ?? 'Не указано') . "\n";
$message .= "Компания: " . ($_POST['company'] ?? 'Не указана') . "\n";
$message .= "Телефон: " . ($_POST['phone'] ?? 'Не указан') . "\n";
$message .= "Email: " . ($_POST['email'] ?? 'Не указан') . "\n";
$message .= "Город: " . ($_POST['city'] ?? 'Не указан') . "\n";

if (!empty($_POST['selected_plan'])) {
    $message .= "Выбранный план: " . $_POST['selected_plan'] . "\n";
}

$message .= "\nДополнительная информация:\n";
$message .= $_POST['comment'] ?? 'Не указана';

$message .= "\n\n---\nОтправлено с сайта " . date('d.m.Y H:i:s');

// Обработка файла
$boundary = md5(time());
$headers = "From: $from_name <$from_email>\r\n";
$headers .= "Reply-To: $from_email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$email_message = "--$boundary\r\n";
$email_message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$email_message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$email_message .= $message . "\r\n";

// Прикрепляем файл если есть
if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $file_tmp = $_FILES['file']['tmp_name'];
    $file_name = $_FILES['file']['name'];
    $file_type = $_FILES['file']['type'];
    
    $file_content = file_get_contents($file_tmp);
    $file_content = chunk_split(base64_encode($file_content));
    
    $email_message .= "--$boundary\r\n";
    $email_message .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
    $email_message .= "Content-Transfer-Encoding: base64\r\n";
    $email_message .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n\r\n";
    $email_message .= $file_content . "\r\n";
}

$email_message .= "--$boundary--\r\n";

// Отправляем письмо
$success = mail($to, $subject, $email_message, $headers);

if ($success) {
    echo json_encode([
        'success' => true, 
        'message' => 'Письмо успешно отправлено на ' . $to
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'error' => 'Ошибка отправки письма'
    ]);
}
?>