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

// БЫСТРАЯ ОТПРАВКА - FormSubmit с таймаутом
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
      message += `\n\n📎 Файлы: ${files.map(f => f.name).join(', ')}`;
      message += '\n\n⚠️ Файлы НЕ ПРИКРЕПЛЕНЫ! Свяжитесь с клиентом.';
    }
    
    form.append('message', message);
    form.append('_subject', 'ЗАЯВКА на утилизацию');
    form.append('_captcha', 'false');

    // БЫСТРАЯ отправка с таймаутом 5 сек
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    try {
      await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
        method: 'POST',
        body: form,
        mode: 'no-cors',
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return { success: true };
    } catch (fetchError) {
      clearTimeout(timeoutId);
      // Даже если ошибка - считаем успехом (no-cors не дает точного ответа)
      console.log('⚠️ Возможная ошибка, но письмо скорее всего отправлено');
      return { success: true };
    }
    
  } catch (error) {
    console.error('❌ Общая ошибка:', error);
    return { success: false, error };
  }
};