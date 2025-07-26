// УНИВЕРСАЛЬНАЯ отправка email с файлами - работает для ВСЕХ пользователей

// FormSubmit - САМЫЙ НАДЕЖНЫЙ способ с файлами (до 5 файлов по 5МБ)
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
    
    // Настройки FormSubmit
    form.append('_subject', 'Новая заявка на утилизацию IT оборудования');
    form.append('_captcha', 'false');
    form.append('_template', 'table');
    form.append('_next', window.location.origin + '?success=true');
    
    // Прикрепляем файлы (до 5 штук)
    const filesToSend = files.slice(0, 5);
    filesToSend.forEach((file, index) => {
      form.append(`file_${index + 1}`, file);
    });
    
    // Информация о файлах в тексте письма
    if (filesToSend.length > 0) {
      const filesInfo = filesToSend.map((f, i) => 
        `${i + 1}. ${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`
      ).join('\n');
      form.append('files_info', `Прикреплено файлов: ${filesToSend.length}\n${filesInfo}`);
    }

    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });

    console.log('✅ FormSubmit: Отправлено!', response.status);
    return { success: response.ok, method: 'FormSubmit' };
    
  } catch (error) {
    console.error('❌ FormSubmit error:', error);
    return { success: false, error, method: 'FormSubmit' };
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

// ГЛАВНАЯ функция - FormSubmit ПЕРВЫМ (с файлами), потом резерв
export const sendEmail = async (formData: any, files: File[] = []) => {
  console.log('🚀 Отправляю заявку с файлами...');
  
  // СПОСОБ 1: FormSubmit с файлами (ОСНОВНОЙ)
  const formSubmitResult = await sendViaFormSubmit(formData, files);
  if (formSubmitResult.success) {
    console.log('✅ FormSubmit - SUCCESS с файлами!');
    return { success: true, method: 'FormSubmit' };
  }
  
  console.log('⚠️ FormSubmit не удался, пробуем FormSpree...');
  
  // СПОСОБ 2: FormSpree без файлов (РЕЗЕРВ)
  const formSpreeResult = await sendViaFormSpree(formData, files);
  if (formSpreeResult.success) {
    console.log('✅ FormSpree - SUCCESS (без файлов)');
    return { success: true, method: 'FormSpree' };
  }
  
  console.log('❌ Все способы не сработали');
  return { success: false, error: 'Сервисы недоступны' };
};

// Для совместимости
export const sendEmailWithFiles = sendEmail;