// ПРОСТОЕ РЕШЕНИЕ - возвращаемся к работающему FormSubmit

export const sendViaFormSubmit = async (formData: any, files: File[]) => {
  try {
    console.log('📤 FormSubmit: Отправляем заявку (как работало раньше)...');
    console.log(`📊 Файлов: ${files.length}, данные:`, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    });
    
    const form = new FormData();
    
    // Основные поля (как было)
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    form.append('message', formData.comment || 'Нет комментариев');
    
    // Настройки FormSubmit (базовые)
    form.append('_subject', 'Заявка на утилизацию IT оборудования');
    form.append('_captcha', 'false');
    
    // Прикрепляем файлы (как работало раньше)
    files.forEach((file, index) => {
      form.append(`file${index + 1}`, file);
      console.log(`📎 Прикрепляю файл ${index + 1}: ${file.name} (${(file.size/1024/1024).toFixed(2)}МБ)`);
    });

    console.log('🚀 Отправляю на FormSubmit (тот же endpoint что работал)...');
    
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });

    console.log('📧 FormSubmit ответ:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok
    });

    if (response.ok) {
      console.log('✅ FormSubmit: УСПЕХ! Письмо отправлено');
      return { success: true, method: 'FormSubmit' };
    } else {
      console.log('❌ FormSubmit: Ошибка HTTP', response.status);
      return { success: false, error: `HTTP ${response.status}`, method: 'FormSubmit' };
    }
    
  } catch (error) {
    console.error('❌ FormSubmit: Критическая ошибка', error);
    return { success: false, error, method: 'FormSubmit' };
  }
};

// Резервный FormSpree (исправленный endpoint)
export const sendViaFormSpree = async (formData: any, files: File[]) => {
  try {
    console.log('📤 FormSpree: Резервная отправка...');
    
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Не указана',
      city: formData.city === 'Другой город' ? formData.customCity : formData.city,
      plan: formData.selectedPlan || 'Не выбран',
      message: formData.comment || 'Нет комментариев',
      files_info: files.length > 0 ? 
        `Клиент прикрепил ${files.length} файлов: ${files.map(f => f.name).join(', ')}` : 
        'Без файлов'
    };

    const response = await fetch('https://formspree.io/f/mldervlv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    console.log('📧 FormSpree ответ:', response.status, response.ok);
    return { success: response.ok, method: 'FormSpree' };
    
  } catch (error) {
    console.error('❌ FormSpree error:', error);
    return { success: false, error, method: 'FormSpree' };
  }
};

// ГЛАВНАЯ функция - сначала FormSubmit, потом резерв
export const sendEmailWithFiles = async (formData: any, files: File[] = []) => {
  console.log('🚀 Простая отправка - сначала FormSubmit, потом резерв...');
  
  // Сначала пробуем FormSubmit (как работало раньше)
  const formSubmitResult = await sendViaFormSubmit(formData, files);
  
  if (formSubmitResult.success) {
    console.log('✅ FormSubmit сработал! Письмо отправлено');
    return { success: true, method: 'FormSubmit' };
  }
  
  console.log('⚠️ FormSubmit не сработал, пробуем резерв...');
  
  // Резерв - FormSpree без файлов
  const formSpreeResult = await sendViaFormSpree(formData, files);
  
  if (formSpreeResult.success) {
    console.log('✅ FormSpree сработал как резерв');
    return { success: true, method: 'FormSpree' };
  }
  
  console.log('❌ Оба сервиса не сработали');
  return { success: false, error: 'Both services failed' };
};

export const sendEmail = sendEmailWithFiles;