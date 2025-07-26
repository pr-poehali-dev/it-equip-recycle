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
    
    // Прикрепляем первый файл (FormSubmit принимает только 1 файл)
    if (files.length > 0) {
      console.log(`📎 Прикрепляю ПЕРВЫЙ файл: ${files[0].name} (${files[0].size} bytes)`);
      form.append('attachment', files[0], files[0].name);
      
      if (files.length > 1) {
        message += `\n\n📎 Прикреплен 1 файл из ${files.length}:`;
        message += `\n✅ ${files[0].name}`;
        message += `\n❗ Остальные файлы: ${files.slice(1).map(f => f.name).join(', ')}`;
        message += `\n⚠️ ОТПРАВЬТЕ ОСТАЛЬНЫЕ ФАЙЛЫ ОТДЕЛЬНО!`;
      } else {
        message += `\n\n📎 Прикреплен файл: ${files[0].name}`;
      }
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