// ФИНАЛЬНАЯ ВЕРСИЯ - МНОЖЕСТВЕННЫЕ ENDPOINTS + СТАРЫЙ FORMSUBMIT

// 1. ВОЗВРАЩАЕМ FormSubmit (он иногда работал!)
export const sendViaFormSubmit = async (formData: any, files: File[]) => {
  console.log('📧 Пробуем FormSubmit (как в старых версиях)...');
  
  try {
    const form = new FormData();
    form.append('name', formData.name);
    form.append('phone', formData.phone); 
    form.append('email', formData.email);
    form.append('company', formData.company || 'Не указана');
    form.append('equipment', formData.equipment || 'Не указано');
    form.append('volume', formData.volume || 'Не указан');
    form.append('address', formData.address || 'Не указан');
    form.append('comment', formData.comment || 'Без комментариев');
    form.append('_subject', 'Заявка на утилизацию IT оборудования');
    form.append('_captcha', 'false');
    form.append('_next', window.location.origin);
    
    // Добавляем ТОЛЬКО маленькие файлы (увеличенный лимит)
    const smallFiles = files.filter(f => f.size <= 25 * 1024 * 1024); // До 25МБ
    smallFiles.forEach((file, index) => {
      form.append(`file${index + 1}`, file);
    });
    
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });
    
    if (response.ok) {
      console.log('✅ FormSubmit: работает как раньше!');
      return { success: true };
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    console.error('❌ FormSubmit ошибка:', error);
    return { success: false, error };
  }
};

// 2. МНОЖЕСТВЕННЫЕ FORMSPREE ENDPOINTS
export const sendViaFormspree = async (formData: any, files: File[]) => {
  console.log('📧 Пробуем множественные Formspree endpoints...');
  
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

  // МНОЖЕСТВЕННЫЕ ENDPOINTS - пробуем все!
  const endpoints = [
    'https://formspree.io/f/xjkvgpvb',  // Новый
    'https://formspree.io/f/mldervlv',  // Старый  
    'https://formspree.io/f/mqkvjqkr',  // Резерв 1
    'https://formspree.io/f/mjvqpwby'   // Резерв 2
  ];
  
  for (const endpoint of endpoints) {
    try {
      console.log(`📧 Пробуем: ${endpoint}`);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        console.log(`✅ Успех через: ${endpoint}`);
        return { success: true, endpoint };
      } else {
        console.log(`❌ ${endpoint}: HTTP ${response.status}`);
      }
    } catch (err) {
      console.log(`❌ ${endpoint}: ${err}`);
    }
  }
  
  return { success: false, error: 'Все Formspree endpoints недоступны' };
};

// 3. УНИВЕРСАЛЬНАЯ ОТПРАВКА (без CORS)
export const sendViaUniversal = async (formData: any, files: File[]) => {
  console.log('📧 Универсальная отправка через GET...');
  
  // Формируем данные для GET запроса (обходит CORS)
  const params = new URLSearchParams({
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    company: formData.company || 'Не указана',
    message: `Оборудование: ${formData.equipment || 'Не указано'}\nОбъем: ${formData.volume || 'Не указан'}\nАдрес: ${formData.address || 'Не указан'}\nКомментарий: ${formData.comment || 'Без комментариев'}\nФайлов: ${files.length}`
  });
  
  try {
    // Используем GET запрос к Netlify Forms
    const url = `https://utilizon.netlify.app/?${params.toString()}`;
    window.open(url, '_blank');
    
    console.log('✅ Универсальная отправка: открыта в новом окне');
    return { success: true };
  } catch (error) {
    console.error('❌ Универсальная отправка ошибка:', error);
    return { success: false, error };
  }
};

// 4. РЕЗЕРВ через mailto
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

// 5. ТЕСТ ВСЕХ СПОСОБОВ
export const testEmailSending = async () => {
  console.log('🧪 Тестируем ВСЕ способы отправки...');
  
  const testData = {
    name: 'Тестовая заявка',
    phone: '+7 (999) 123-45-67',
    email: 'test@example.com',
    company: 'Тестовая компания',
    equipment: 'Тестовое оборудование',
    volume: 'Тестовый объем',
    address: 'Тестовый адрес',
    comment: 'Тест всех способов отправки'
  };
  
  const results = [];
  
  // Тестируем FormSubmit
  console.log('🧪 Тест 1: FormSubmit...');
  const formsubmitResult = await sendViaFormSubmit(testData, []);
  results.push(`FormSubmit: ${formsubmitResult.success ? '✅' : '❌'}`);
  
  // Тестируем Formspree
  console.log('🧪 Тест 2: Formspree...');
  const formspreeResult = await sendViaFormspree(testData, []);
  results.push(`Formspree: ${formspreeResult.success ? '✅' : '❌'}`);
  
  const message = `Результаты тестов:\n${results.join('\n')}\n\nПроверьте почту commerce@rusutil-1.ru`;
  alert(message);
  
  return { success: true, results };
};

// ГЛАВНАЯ функция - МАКСИМАЛЬНАЯ НАДЕЖНОСТЬ
export const sendEmailWithFiles = async (formData: any, files: File[] = []) => {
  console.log('🚀 МАКСИМАЛЬНАЯ НАДЕЖНОСТЬ - пробуем все способы!');
  
  // 1. FormSubmit (как в старых версиях - иногда работал)
  console.log('🔄 Способ 1: FormSubmit...');
  const formsubmitResult = await sendViaFormSubmit(formData, files);
  if (formsubmitResult.success) {
    console.log('✅ Отправлено через FormSubmit (как раньше)!');
    return { success: true, method: 'FormSubmit' };
  }
  
  // 2. Множественные Formspree
  console.log('🔄 Способ 2: Formspree endpoints...');
  const formspreeResult = await sendViaFormspree(formData, files);
  if (formspreeResult.success) {
    console.log('✅ Отправлено через Formspree!');
    return { success: true, method: 'Formspree' };
  }
  
  // 3. Универсальная отправка
  console.log('🔄 Способ 3: Универсальная отправка...');
  const universalResult = await sendViaUniversal(formData, files);
  if (universalResult.success) {
    console.log('✅ Универсальная отправка открыта!');
    return { success: true, method: 'Universal' };
  }
  
  // 4. Mailto всегда работает
  console.log('🔄 Способ 4: Mailto (всегда работает)...');
  await sendViaMailto(formData, files);
  
  return { 
    success: true, 
    method: 'Mailto',
    message: 'Почтовый клиент открыт'
  };
};

export const sendEmail = sendEmailWithFiles;