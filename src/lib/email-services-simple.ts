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
        form.append('attachment', file, file.name);  // ВСЕ файлы с одним именем
      });
      message += `\n\n📎 Прикреплено файлов: ${files.length}`;
    }
    
    form.append('message', message);
    form.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
    form.append('_captcha', 'false');

    console.log('🚀 Отправляю на FormSubmit...');
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });

    console.log('📧 FormSubmit ответ:', response.status, response.ok);
    return { success: response.ok, method: 'FormSubmit' };
  } catch (error) {
    console.error('❌ FormSubmit error:', error);
    return { success: false, error, method: 'FormSubmit' };
  }
};

// ГЛАВНАЯ функция - только FormSubmit
export const sendEmail = async (formData: any, files: File[] = []) => {
  console.log('🚀 Быстрая отправка через FormSubmit...');
  
  const result = await sendViaFormSubmit(formData, files);
  return result;
};

// Для совместимости
export const sendEmailWithFiles = sendEmail;