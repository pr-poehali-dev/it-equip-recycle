// ФИНАЛЬНАЯ ВЕРСИЯ - УБРАЛ FormSubmit, ТОЛЬКО РАБОЧЕЕ!

// 1. РАБОЧАЯ ОТПРАВКА (Formspree - работает стабильно)
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

// 2. РЕЗЕРВ через mailto
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

// 3. ПРОВЕРКА ОТПРАВКИ (тестовая кнопка)
export const testEmailSending = async () => {
  console.log('🧪 Тестируем отправку...');
  
  const testData = {
    name: 'Тестовая заявка',
    phone: '+7 (999) 123-45-67',
    email: 'test@example.com',
    company: 'Тестовая компания',
    equipment: 'Тестовое оборудование',
    volume: 'Тестовый объем',
    address: 'Тестовый адрес',
    comment: 'Это тестовое сообщение для проверки работы отправки'
  };
  
  const result = await sendViaFormspree(testData, []);
  
  if (result.success) {
    alert('✅ Тест успешен! Проверьте почту commerce@rusutil-1.ru');
  } else {
    alert('❌ Тест не прошел. Formspree не работает.');
  }
  
  return result;
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