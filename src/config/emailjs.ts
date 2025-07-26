// Конфигурация EmailJS
// Получи эти данные в личном кабинете EmailJS

export const EMAILJS_CONFIG = {
  // Читаем из переменных окружения (безопасно)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  FILE_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_FILE_TEMPLATE_ID || ''
};

// Как получить эти данные:
// 1. Заходи на https://emailjs.com/
// 2. Account -> General -> Public Key
// 3. Email Services -> Добавь сервис (Gmail/Outlook) -> получи Service ID
// 4. Email Templates -> Create New Template -> получи Template ID