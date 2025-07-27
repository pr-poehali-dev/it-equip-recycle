// ФИНАЛЬНАЯ ВЕРСИЯ - ТОЛЬКО РАБОЧЕЕ БЕЗ ГЕММОРОЯ!

// 1. АКТИВАЦИЯ FormSubmit (кнопка активации)
export const activateFormSubmit = async () => {
  console.log('🔑 Активируем FormSubmit...');
  
  try {
    const form = new FormData();
    form.append('email', 'commerce@rusutil-1.ru');
    form.append('message', 'Активация FormSubmit для utilizon.pro');
    form.append('_next', window.location.origin);
    form.append('_captcha', 'false');
    
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });
    
    console.log('✅ Активация отправлена! Проверьте почту и подтвердите.');
    alert('📧 Письмо активации отправлено на commerce@rusutil-1.ru\nПроверьте почту и нажмите ссылку подтверждения!');
    
    return { success: true };
  } catch (error) {
    console.error('❌ Ошибка активации:', error);
    return { success: false, error };
  }
};

// 2. РАБОЧАЯ ОТПРАВКА (Formspree уже активирован)
export const sendViaFormspree = async (formData: any, files: File[]) => {
  console.log('📧 Отправляем через Formspree...');
  
  const payload = {
    name: formData.name,
    phone: formData.phone, 
    email: formData.email,
    company: formData.company || 'Не указана',
    equipment: formData.equipment || 'Не указано',
    volume: formData.volume || 'Не указан',
    address: formData.address || 'Не указан',
    comment: formData.comment || 'Без комментариев',
    files_count: files.length,
    files_info: files.length > 0 ? 
      files.map(f => `${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`).join(', ') : 
      'Нет файлов'
  };

  try {
    const response = await fetch('https://formspree.io/f/mldervlv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✅ Formspree: письмо отправлено!');
      return { success: true };
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Formspree ошибка:', error);
    return { success: false, error };
  }
};

// 3. РЕЗЕРВ через mailto
export const sendViaMailto = async (formData: any, files: File[]) => {
  console.log('📧 Открываем почтовый клиент...');
  
  const body = `
Заявка на утилизацию IT оборудования

Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Компания: ${formData.company || 'Не указана'}
Оборудование: ${formData.equipment || 'Не указано'}
Объем: ${formData.volume || 'Не указан'}
Адрес: ${formData.address || 'Не указан'}
Комментарий: ${formData.comment || 'Без комментариев'}

Файлов: ${files.length}
${files.map(f => `- ${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`).join('\n')}
`;
  
  const mailto = `mailto:commerce@rusutil-1.ru?subject=Заявка на утилизацию&body=${encodeURIComponent(body)}`;
  window.open(mailto);
  
  return { success: true };
};

// ГЛАВНАЯ функция - простая и надежная
export const sendEmailWithFiles = async (formData: any, files: File[] = []) => {
  console.log('🚀 Отправляем заявку...');
  
  // 1. Сначала Formspree (работает стабильно)
  const formspreeResult = await sendViaFormspree(formData, files);
  if (formspreeResult.success) {
    console.log('✅ Заявка отправлена через Formspree!');
    return { success: true, method: 'Formspree' };
  }
  
  // 2. Если не работает - mailto
  console.log('⚠️ Formspree не сработал, открываем почтовый клиент...');
  await sendViaMailto(formData, files);
  
  return { 
    success: true, 
    method: 'Mailto',
    message: 'Почтовый клиент открыт для отправки'
  };
};

export const sendEmail = sendEmailWithFiles;