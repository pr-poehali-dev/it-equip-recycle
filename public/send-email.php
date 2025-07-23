<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Метод не разрешен']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Неверные данные']);
    exit;
}

$to = 'commerce@rusutil-1.ru';
$subject = $input['subject'] ?? 'Заявка с сайта';
$from_name = $input['name'] ?? 'Не указано';
$from_email = $input['email'] ?? 'noreply@site.com';

// Формируем сообщение
$message = "Новая заявка с сайта\n\n";

foreach ($input as $key => $value) {
    if ($key !== 'subject' && !empty($value)) {
        $label = '';
        switch ($key) {
            case 'name': $label = 'Имя'; break;
            case 'company': $label = 'Компания'; break;
            case 'phone': $label = 'Телефон'; break;
            case 'email': $label = 'Email'; break;
            case 'city': $label = 'Город'; break;
            case 'comment': $label = 'Комментарий'; break;
            case 'file_name': $label = 'Прикрепленный файл'; break;
            case 'selected_plan': $label = 'Выбранный план'; break;
            default: $label = ucfirst($key); break;
        }
        $message .= "$label: $value\n";
    }
}

$message .= "\n---\nОтправлено с сайта " . date('d.m.Y H:i:s');

// Заголовки письма
$headers = "From: $from_name <$from_email>\r\n";
$headers .= "Reply-To: $from_email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправляем письмо
$success = mail($to, $subject, $message, $headers);

if ($success) {
    echo json_encode([
        'success' => true, 
        'message' => 'Письмо успешно отправлено'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'error' => 'Ошибка отправки письма'
    ]);
}
?>