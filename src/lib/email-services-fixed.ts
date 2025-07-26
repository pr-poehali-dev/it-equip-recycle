// ИСПРАВЛЕННАЯ система отправки email с файлами

// FormSubmit - основной способ (до 5МБ общий размер)
export const sendViaFormSubmit = async (formData: any, files: File[]) => {
  try {
    console.log('📤 FormSubmit: Начинаем отправку...');
    
    const form = new FormData();
    
    // Основные данные формы
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан');
    form.append('plan', formData.selectedPlan || 'Не выбран');
    form.append('message', formData.comment || 'Нет комментариев');
    
    // ОБЯЗАТЕЛЬНЫЕ настройки FormSubmit
    form.append('_subject', 'Новая заявка на утилизацию IT оборудования');
    form.append('_captcha', 'false'); 
    form.append('_template', 'table');
    form.append('_blacklist', 'captcha,_next,_template,_subject,_captcha,_cc,_blacklist');
    
    // Проверяем размер файлов (FormSubmit лимит 5МБ общий)
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    console.log(`📊 Общий размер файлов: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
    
    if (totalSize > 5 * 1024 * 1024) {
      console.log('⚠️ Файлы слишком большие для FormSubmit');
      return { success: false, error: 'Files too large', method: 'FormSubmit' };
    }
    
    // Прикрепляем файлы
    files.slice(0, 5).forEach((file, index) => {
      form.append(`file${index + 1}`, file);
      console.log(`📎 Прикрепляем файл ${index + 1}: ${file.name} (${(file.size/1024/1024).toFixed(2)}МБ)`);
    });
    
    // Отправляем
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });

    if (response.ok) {
      console.log('✅ FormSubmit: Успешно отправлено!');
      return { success: true, method: 'FormSubmit' };
    } else {
      console.error('❌ FormSubmit: Ошибка HTTP', response.status, response.statusText);
      return { success: false, error: `HTTP ${response.status}`, method: 'FormSubmit' };
    }
    
  } catch (error) {
    console.error('❌ FormSubmit: Критическая ошибка', error);
    return { success: false, error, method: 'FormSubmit' };
  }
};

// FormSpree - резервный способ (без файлов)
export const sendViaFormSpree = async (formData: any, files: File[]) => {
  try {
    console.log('📤 FormSpree: Отправляем уведомление...');
    
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
        files_count: files.length,
        files_info: files.length > 0 ? 
          `Клиент прикрепил ${files.length} файл(ов): ${files.map(f => `${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`).join(', ')}` : 
          'Без файлов'
      })
    });

    if (response.ok) {
      console.log('✅ FormSpree: Уведомление отправлено!');
      return { success: true, method: 'FormSpree' };
    } else {
      console.error('❌ FormSpree: Ошибка', response.status);
      return { success: false, error: `HTTP ${response.status}`, method: 'FormSpree' };
    }
    
  } catch (error) {
    console.error('❌ FormSpree: Ошибка', error);
    return { success: false, error, method: 'FormSpree' };
  }
};

// ГЛАВНАЯ функция - умная отправка
export const sendEmailWithFiles = async (formData: any, files: File[] = []) => {
  console.log('🚀 Начинаем отправку заявки...');
  console.log(`📊 Количество файлов: ${files.length}`);
  
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  console.log(`📊 Общий размер: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
  
  // Всегда отправляем быстрое уведомление
  const formSpreePromise = sendViaFormSpree(formData, files);
  
  // Стратегия для файлов
  let filePromise = null;
  
  if (files.length > 0) {
    if (totalSize <= 5 * 1024 * 1024) {
      // Маленькие файлы - через FormSubmit
      console.log('🎯 Стратегия: Маленькие файлы через FormSubmit');
      filePromise = sendViaFormSubmit(formData, files);
    } else {
      // Большие файлы - только уведомление в FormSpree
      console.log('🎯 Стратегия: Большие файлы - только уведомление');
      filePromise = Promise.resolve({ success: true, method: 'NotificationOnly' });
    }
  } else {
    console.log('🎯 Стратегия: Без файлов');
    filePromise = Promise.resolve({ success: true, method: 'NoFiles' });
  }
  
  try {
    // Ждем оба результата
    const [formSpreeResult, fileResult] = await Promise.allSettled([
      formSpreePromise,
      filePromise
    ]);
    
    let successCount = 0;
    const methods = [];
    
    if (formSpreeResult.status === 'fulfilled' && formSpreeResult.value.success) {
      successCount++;
      methods.push(formSpreeResult.value.method);
    }
    
    if (fileResult.status === 'fulfilled' && fileResult.value.success) {
      successCount++;
      methods.push(fileResult.value.method);
    }
    
    if (successCount > 0) {
      console.log(`✅ SUCCESS! Отправлено через: ${methods.join(', ')}`);
      return { success: true, method: methods.join('+') };
    } else {
      console.log('❌ Все попытки не удались');
      return { success: false, error: 'All methods failed' };
    }
    
  } catch (error) {
    console.error('❌ Критическая ошибка:', error);
    return { success: false, error };
  }
};

export const sendEmail = sendEmailWithFiles;