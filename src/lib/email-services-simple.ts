// ПРОСТОЙ И БЫСТРЫЙ способ отправки email

// FormSubmit - надежный и быстрый
export const sendViaFormSubmit = async (formData: any, files: File[]) => {
  try {
    console.log('📤 FormSubmit: Начинаю отправку, файлов:', files.length);
    const form = new FormData();
    
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    let message = formData.comment || 'Нет комментариев';
    
    // Прикрепляем ВСЕ файлы через FormSubmit (РАБОТАЛО 2 дня назад!)
    if (files.length > 0) {
      files.forEach((file, index) => {
        console.log(`📎 Прикрепляю файл ${index + 1}: ${file.name} (${file.size} bytes)`);
        form.append(`attachment_${index}`, file, file.name);  // Уникальные имена
      });
      message += `\n\n📎 Прикреплено файлов: ${files.length}`;
    }
    
    form.append('message', message);
    form.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
    form.append('_captcha', 'false');
    form.append('_template', 'table');
    form.append('_next', 'https://utilizon.pro/success');

    console.log('🚀 Отправляю на FormSubmit...');
    console.log('📋 Данные формы:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      filesCount: files.length
    });
    
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });

    console.log('📧 FormSubmit полный ответ:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      headers: Object.fromEntries(response.headers.entries())
    });
    
    // Читаем текст ответа для диагностики
    const responseText = await response.text();
    console.log('📄 FormSubmit текст ответа:', responseText);
    return { success: response.ok, method: 'FormSubmit' };
  } catch (error) {
    console.error('❌ FormSubmit error:', error);
    return { success: false, error, method: 'FormSubmit' };
  }
};

// FormSpree - резервный способ
export const sendViaFormSpree = async (formData: any, files: File[]) => {
  try {
    console.log('📤 FormSpree: Отправляю уведомление...');
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
        files_info: files.length > 0 ? `Прикреплено ${files.length} файлов: ${files.map(f => f.name).join(', ')}` : 'Без файлов'
      })
    });

    console.log('📧 FormSpree ответ:', response.status, response.ok);
    return { success: response.ok, method: 'FormSpree' };
  } catch (error) {
    console.error('❌ FormSpree error:', error);
    return { success: false, error, method: 'FormSpree' };
  }
};

// ГЛАВНАЯ функция - двойная отправка для надежности
export const sendEmail = async (formData: any, files: File[] = []) => {
  console.log('🚀 ДВОЙНАЯ отправка для 100% надежности...');
  
  // Отправляем одновременно через 2 сервиса
  const promises = [
    sendViaFormSubmit(formData, files),  // С файлами
    sendViaFormSpree(formData, files)    // Уведомление
  ];
  
  try {
    const results = await Promise.allSettled(promises);
    
    let successCount = 0;
    const methods = [];
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value.success) {
        successCount++;
        methods.push(result.value.method);
        console.log(`✅ Сервис ${index + 1}: SUCCESS`);
      } else {
        console.log(`❌ Сервис ${index + 1}: FAILED`);
      }
    });
    
    if (successCount > 0) {
      console.log(`🎉 УСПЕХ! ${successCount}/2 сервиса отправили письмо`);
      return { success: true, method: methods.join('+') };
    } else {
      console.log('❌ Оба сервиса не смогли отправить');
      return { success: false, error: 'Both services failed' };
    }
    
  } catch (error) {
    console.error('❌ Критическая ошибка:', error);
    return { success: false, error };
  }
};

// Для совместимости
export const sendEmailWithFiles = sendEmail;