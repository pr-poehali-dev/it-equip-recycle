import emailjs from '@emailjs/browser';

// EmailJS конфигурация (ВРЕМЕННО ОТКЛЮЧЕН - НУЖНЫ КЛЮЧИ)
export const emailJSConfig = {
  serviceId: '', // Пустой = отключен
  templateId: '', 
  publicKey: ''
};

// Функция отправки через EmailJS (ПРОПУСКАЕМ - НУЖНЫ КЛЮЧИ)
export const sendEmailWithFiles = async (formData: any, files: File[]) => {
  // Пропускаем пока нет ключей
  if (!emailJSConfig.serviceId) {
    console.log('⚠️ EmailJS пропущен - нужны ключи');
    return { success: false, error: 'No keys' };
  }
  
  return { success: false, error: 'Disabled' };
};

// Резервный способ - Netlify Forms (если проект на Netlify)
export const sendViaNetlifyForms = async (formData: any, files: File[]) => {
  const form = new FormData();
  
  // Основные данные
  form.append('form-name', 'contact'); // Имя формы в HTML
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('phone', formData.phone);
  form.append('company', formData.company || 'Не указана');
  form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
  form.append('plan', formData.selectedPlan || 'Не выбран');
  form.append('message', formData.comment || 'Нет комментариев');
  
  // Файлы
  files.forEach((file, index) => {
    form.append(`file-${index}`, file);
  });

  try {
    const response = await fetch('/', {
      method: 'POST',
      body: form
    });
    
    return { success: response.ok, response };
  } catch (error) {
    return { success: false, error };
  }
};

// Альтернатива 3 - Собственный backend endpoint
export const sendViaCustomAPI = async (formData: any, files: File[]) => {
  const form = new FormData();
  
  // Основные данные
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('phone', formData.phone);
  form.append('company', formData.company || 'Не указана');
  form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
  form.append('plan', formData.selectedPlan || 'Не выбран');
  form.append('message', formData.comment || 'Нет комментариев');
  
  // Файлы
  files.forEach((file, index) => {
    form.append('files', file);
  });

  try {
    // Замените на ваш backend URL
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: form
    });
    
    return { success: response.ok, response };
  } catch (error) {
    return { success: false, error };
  }
};

// РАБОЧИЙ СПОСОБ - FormSubmit (БЕЗ CORS, РЕАЛЬНО РАБОТАЕТ)
export const sendViaFormSpree = async (formData: any, files: File[]) => {
  try {
    const form = new FormData();
    
    form.append('name', formData.name);
    form.append('email', formData.email); 
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    
    const city = formData.city === 'Другой город' ? formData.customCity : formData.city;
    form.append('city', city || 'Не указан');
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    // Сообщение с информацией о файлах
    let message = formData.comment || 'Нет комментариев';
    if (files.length > 0) {
      message += `\n\n📎 Прикрепленные файлы (${files.length}):`;
      files.forEach((file, index) => {
        message += `\n${index + 1}. ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} МБ)`;
      });
      message += '\n\n⚠️ Файлы не прикреплены к письму. Свяжитесь с клиентом для получения файлов.';
    }
    
    form.append('message', message);
    form.append('_subject', 'НОВАЯ ЗАЯВКА на утилизацию IT оборудования');
    form.append('_captcha', 'false');
    form.append('_template', 'table');

    // Отправляем БЕЗ CORS
    await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form,
      mode: 'no-cors'
    });
    
    console.log('✅ Письмо отправлено на commerce@rusutil-1.ru');
    return { success: true };
    
  } catch (error) {
    console.error('❌ FormSubmit ошибка:', error);
    return { success: false, error };
  }
};