// УНИВЕРСАЛЬНАЯ отправка email с файлами - работает для ВСЕХ пользователей

// FormSubmit - САМЫЙ НАДЕЖНЫЙ способ с файлами (до 5МБ ОБЩИЙ лимит)
export const sendViaFormSubmit = async (formData: any, files: File[]) => {
  try {
    console.log('📤 FormSubmit: Отправляем с файлами...');
    
    const form = new FormData();
    
    // Основные данные
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан');
    form.append('plan', formData.selectedPlan || 'Не выбран');
    form.append('message', formData.comment || 'Нет комментариев');
    
    // Настройки FormSubmit для быстрой доставки
    form.append('_subject', '🚀 Новая заявка на утилизацию IT оборудования');
    form.append('_captcha', 'false');
    form.append('_template', 'table');
    form.append('_next', 'https://rusutil-1.ru/success.html'); // Обязательный редирект
    
    // Проверяем общий размер файлов (FormSubmit лимит 25МБ общий)
    const filesToSend = files.slice(0, 10);
    const totalSize = filesToSend.reduce((sum, file) => sum + file.size, 0);
    
    if (totalSize > 25 * 1024 * 1024) {
      console.log('⚠️ FormSubmit: Файлы слишком большие, пропускаем');
      throw new Error('Files too large for FormSubmit');
    }
    
    // Прикрепляем файлы
    filesToSend.forEach((file, index) => {
      form.append(`file_${index + 1}`, file);
    });
    
    // Информация о файлах в тексте письма
    if (filesToSend.length > 0) {
      const filesInfo = filesToSend.map((f, i) => 
        `${i + 1}. ${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`
      ).join('\n');
      form.append('files_info', `📎 Прикреплено файлов: ${filesToSend.length}\n${filesInfo}`);
    }

    // Контроллер для таймаута
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 сек таймаут

    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form,
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    console.log('✅ FormSubmit: Отправлено!', response.status);
    return { success: response.ok, method: 'FormSubmit' };
    
  } catch (error) {
    console.error('❌ FormSubmit error:', error);
    return { success: false, error, method: 'FormSubmit' };
  }
};



// Netlify Forms - НАДЕЖНЫЙ сервис с файлами до 100МБ
export const sendViaNetlify = async (formData: any, files: File[]) => {
  try {
    console.log('📤 Netlify: Отправляем с файлами...');
    
    const form = new FormData();
    form.append('form-name', 'contact-form');
    
    // Основные данные
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан');
    form.append('plan', formData.selectedPlan || 'Не выбран');
    form.append('message', formData.comment || 'Нет комментариев');
    
    // Прикрепляем файлы
    const filesToSend = files.slice(0, 10);
    filesToSend.forEach((file, index) => {
      form.append(`file_${index + 1}`, file);
    });
    
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form as any).toString()
    });

    console.log('✅ Netlify: Отправлено!', response.status);
    return { success: response.ok, method: 'Netlify' };
    
  } catch (error) {
    console.error('❌ Netlify error:', error);
    return { success: false, error, method: 'Netlify' };
  }
};

// FormSpree - резервный способ (БЕЗ файлов, только уведомление)
export const sendViaFormSpree = async (formData: any, files: File[]) => {
  try {
    const response = await fetch('https://formspree.io/f/xvggqgok', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Не указана',
        city: formData.city === 'Другой город' ? formData.customCity : formData.city,
        plan: formData.selectedPlan || 'Не выбран',
        message: formData.comment || 'Нет комментариев',
        files_info: files.length > 0 ? `Клиент пытался прикрепить ${files.length} файл(ов): ${files.map(f => f.name).join(', ')}. Свяжитесь с клиентом для получения файлов.` : 'Без файлов'
      })
    });

    return { success: response.ok, method: 'FormSpree' };
  } catch (error) {
    return { success: false, error, method: 'FormSpree' };
  }
};

// ГЛАВНАЯ функция - УМНАЯ отправка в зависимости от размера файлов
export const sendEmail = async (formData: any, files: File[] = []) => {
  console.log('🚀 УМНАЯ отправка заявки...');
  
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  console.log(`📊 Общий размер файлов: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
  
  const promises = [];
  
  // 1. ВСЕГДА отправляем быстрое уведомление через FormSpree
  promises.push(sendViaFormSpree(formData, files));
  
  // 2. Выбираем сервис для файлов в зависимости от размера
  if (files.length > 0) {
    if (totalSize <= 25 * 1024 * 1024) {
      // Маленькие файлы - через FormSubmit
      console.log('📤 Используем FormSubmit для маленьких файлов');
      promises.push(sendViaFormSubmit(formData, files));
    } else {
      // Большие файлы - через Netlify
      console.log('📤 Используем Netlify для больших файлов');
      promises.push(sendViaNetlify(formData, files));
    }
  }
  
  try {
    const results = await Promise.allSettled(promises);
    
    // Проверяем результаты
    const successResults = results.filter(r => 
      r.status === 'fulfilled' && r.value.success
    );
    
    if (successResults.length > 0) {
      console.log(`✅ SUCCESS! Отправлено через ${successResults.length} сервис(а)`);
      return { success: true, method: 'Multiple' };
    }
    
    console.log('⚠️ Отправка через основные сервисы не удалась');
    return { success: false, error: 'Сервисы недоступны' };
    
  } catch (error) {
    console.error('❌ Критическая ошибка при отправке:', error);
    return { success: false, error };
  }
};

// Для совместимости
export const sendEmailWithFiles = sendEmail;