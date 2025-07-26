// ФИНАЛЬНОЕ РЕШЕНИЕ - FormData через XMLHttpRequest БЕЗ РЕДИРЕКТА

export const sendEmail = async (formData: any, files: File[] = []) => {
  const form = new FormData();
  
  // Ваш реальный ключ
  form.append('access_key', '364693fd-da09-4ed2-a039-ae99a5d01f42');
  
  // Основные поля (ОБЯЗАТЕЛЬНЫЕ для Web3Forms)
  form.append('name', formData.name || 'Посетитель сайта');
  form.append('email', formData.email || 'noreply@example.com');
  
  // Дополнительные поля
  form.append('phone', formData.phone || 'Не указан');
  form.append('company', formData.company || 'Не указана');
  form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан');
  form.append('plan', formData.selectedPlan || 'Не выбран');
  
  const message = `
ЗАЯВКА С САЙТА UTILIZON.PRO

ИМЯ: ${formData.name || 'Не указано'}
EMAIL: ${formData.email || 'Не указан'}
ТЕЛЕФОН: ${formData.phone || 'Не указан'}
КОМПАНИЯ: ${formData.company || 'Не указана'}
ГОРОД: ${formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан'}
ПЛАН: ${formData.selectedPlan || 'Не выбран'}
КОММЕНТАРИЙ: ${formData.comment || 'Нет комментария'}

ФАЙЛЫ: ${files && files.length > 0 ? files.map(f => f.name).join(', ') : 'Нет файлов'}
КОЛИЧЕСТВО ФАЙЛОВ: ${files ? files.length : 0} из 5

ДАТА: ${new Date().toLocaleString('ru-RU')}
ИСТОЧНИК: utilizon.pro
  `;
  
  form.append('message', message);
  form.append('subject', 'ЗАЯВКА с сайта utilizon.pro');
  form.append('botcheck', '');
  
  // ДО 5 ФАЙЛОВ
  if (files && files.length > 0) {
    files.slice(0, 5).forEach((file, index) => {
      form.append(`attachment`, file, file.name);
    });
  }

  // XMLHttpRequest БЕЗ РЕДИРЕКТА
  return new Promise((resolve) => {
    console.log('🚀 ЗАПУСК XMLHttpRequest к Web3Forms...');
    console.log('📋 Access Key:', '364693fd-da09-4ed2-a039-ae99a5d01f42');
    console.log('📨 Данные для отправки:');
    console.log('  Имя:', formData.name);
    console.log('  Email:', formData.email);
    console.log('  Телефон:', formData.phone);
    console.log('  Компания:', formData.company);
    console.log('  Комментарий:', formData.comment);
    
    const xhr = new XMLHttpRequest();
    
    xhr.onload = () => {
      console.log('📡 ОТВЕТ ПОЛУЧЕН!');
      console.log('✅ Статус отправки:', xhr.status);
      console.log('📧 Полный ответ сервера:', xhr.responseText);
      console.log('📊 Ready State:', xhr.readyState);
      
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          console.log('📦 Парсим JSON ответ:', response);
          if (response.success) {
            console.log('🎉 Web3Forms подтвердил отправку!');
            console.log('✅ SUCCESS = TRUE в ответе');
            resolve({ success: true, method: 'Web3Forms с файлами' });
          } else {
            console.log('❌ Web3Forms ошибка:', response.message);
            console.log('❌ SUCCESS = FALSE в ответе');
            resolve({ success: false, error: response.message });
          }
        } catch (parseError) {
          console.log('⚠️ Ошибка парсинга JSON:', parseError);
          console.log('✅ Ответ получен, считаем успешным');
          resolve({ success: true, method: 'Web3Forms с файлами' });
        }
      } else {
        console.log('❌ HTTP ошибка:', xhr.status);
        console.log('❌ Статус НЕ 2xx');
        resolve({ success: false, error: `HTTP ${xhr.status}` });
      }
    };
    
    xhr.onerror = (error) => {
      console.log('💥 КРИТИЧЕСКАЯ ОШИБКА СЕТИ!');
      console.log('❌ Детали ошибки:', error);
      console.log('❌ НЕ ПОДКЛЮЧЕНИЕ к серверу Web3Forms');
      resolve({ success: false, error: 'Ошибка сети' });
    };
    
    xhr.ontimeout = () => {
      console.log('⏰ ТАЙМАУТ запроса!');
      resolve({ success: false, error: 'Таймаут' });
    };
    
    console.log('📤 Отправляю POST запрос...');
    xhr.open('POST', 'https://api.web3forms.com/submit');
    // НЕ УСТАНАВЛИВАЕМ Content-Type - браузер сам поставит для FormData
    xhr.timeout = 30000; // 30 секунд таймаут
    xhr.send(form);
    console.log('🚀 XMLHttpRequest отправлен!');
  });
};

export const sendEmailWithFiles = sendEmail;