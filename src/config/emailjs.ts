// Конфигурация EmailJS
// Получи эти данные в личном кабинете EmailJS

export const EMAILJS_CONFIG = {
  // 1. Твой Public Key (из Account -> General)
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
  
  // 2. Service ID (из Email Services)
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
  
  // 3. Template ID для основного письма
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',
  
  // 4. Template ID для файлов (опционально)
  FILE_TEMPLATE_ID: 'YOUR_FILE_TEMPLATE_ID_HERE'
};

// Как получить эти данные:
// 1. Заходи на https://emailjs.com/
// 2. Account -> General -> Public Key
// 3. Email Services -> Добавь сервис (Gmail/Outlook) -> получи Service ID
// 4. Email Templates -> Create New Template -> получи Template ID