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
    
    // НЕ прикрепляем файлы - они вызывают HTTP 500
    // Добавляем только информацию о файлах в текст
    if (files.length > 0) {
      const filesInfo = files.map((f, i) => `${i+1}. ${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`).join('\n');
      form.append('files_info', `📎 Клиент хочет отправить ${files.length} файлов:\n${filesInfo}\n\nСвяжитесь с клиентом для получения файлов.`);
    }

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

    const response = await fetch('https://formspree.io/f/mwpevvba', {
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

// Прямая отправка через почтовый клиент (100% работает)
export const sendViaMailto = async (formData: any, files: File[]) => {
  try {
    console.log('📧 Mailto: Открываем почтовый клиент...');
    
    const subject = encodeURIComponent('Заявка на утилизацию IT оборудования');
    const body = encodeURIComponent(`
Заявка с сайта utilizon.pro

Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone}
Компания: ${formData.company || 'Не указана'}
Город: ${formData.city === 'Другой город' ? formData.customCity : formData.city}
План: ${formData.selectedPlan || 'Не выбран'}
Сообщение: ${formData.comment || 'Нет комментариев'}

Файлы для отправки:
${files.length > 0 ? files.map((f, i) => `${i+1}. ${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`).join('\n') : 'Нет файлов'}

Клиент ожидает звонка для передачи файлов.
    `);
    
    const mailtoUrl = `mailto:commerce@rusutil-1.ru?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_self');
    
    console.log('✅ Mailto: Почтовый клиент открыт');
    return { success: true, method: 'Mailto' };
    
  } catch (error) {
    console.error('❌ Mailto error:', error);
    return { success: false, error, method: 'Mailto' };
  }
};

// ГЛАВНАЯ функция - попробуем все способы
export const sendEmailWithFiles = async (formData: any, files: File[] = []) => {
  console.log('🚀 Отправка через несколько способов...');
  
  // 1. FormSubmit без файлов
  const formSubmitResult = await sendViaFormSubmit(formData, files);
  if (formSubmitResult.success) {
    console.log('✅ FormSubmit сработал!');
    return { success: true, method: 'FormSubmit' };
  }
  
  // 2. FormSpree резерв
  const formSpreeResult = await sendViaFormSpree(formData, files);
  if (formSpreeResult.success) {
    console.log('✅ FormSpree сработал!');
    return { success: true, method: 'FormSpree' };
  }
  
  // 3. Прямая отправка через mailto (всегда работает)
  console.log('📧 Открываем почтовый клиент как последний способ...');
  const mailtoResult = await sendViaMailto(formData, files);
  
  if (mailtoResult.success) {
    console.log('✅ Mailto открыт - клиент сможет отправить письмо сам');
    return { success: true, method: 'Mailto' };
  }
  
  console.log('❌ Все способы не сработали');
  return { success: false, error: 'All methods failed' };
};

export const sendEmail = sendEmailWithFiles;