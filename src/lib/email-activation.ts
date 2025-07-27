// НАСТОЯЩАЯ АКТИВАЦИЯ FormSubmit - НЕ СИМУЛЯЦИЯ!

// 1. СОЗДАНИЕ АКТИВАЦИИ ЧЕРЕЗ РЕАЛЬНЫЙ ENDPOINT
export const createFormSubmitActivation = async () => {
  console.log('🔑 СОЗДАЁМ НАСТОЯЩУЮ АКТИВАЦИЮ FormSubmit...');
  
  // Проверяем localhost - в разработке показываем инструкцию
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return { 
      success: true, 
      message: 'LOCALHOST: Для активации опубликуйте сайт. CORS блокирует localhost.',
      isLocalhost: true
    };
  }
  
  try {
    // Отправляем запрос активации на НАСТОЯЩИЙ email
    const activationForm = new FormData();
    activationForm.append('email', 'commerce@rusutil-1.ru');
    activationForm.append('message', `
АКТИВАЦИЯ FormSubmit для utilizon.pro

Это письмо для активации FormSubmit.
После получения этого письма, проверьте почту commerce@rusutil-1.ru
и нажмите ссылку подтверждения.

Домен сайта: ${window.location.origin}
Время запроса: ${new Date().toLocaleString()}
    `);
    activationForm.append('_next', window.location.origin + '?activated=true');
    activationForm.append('_captcha', 'false');
    activationForm.append('_template', 'table');
    
    // Используем тестовый endpoint FormSubmit для активации
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: activationForm
    });
    
    if (response.ok) {
      return { 
        success: true, 
        message: 'Письмо активации отправлено на commerce@rusutil-1.ru' 
      };
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Ошибка активации:', error);
    return { 
      success: false, 
      error: error.message,
      message: 'CORS блокировка - опубликуйте сайт для активации' 
    };
  }
};

// 2. ПРОВЕРКА СТАТУСА АКТИВАЦИИ
export const checkActivationStatus = async () => {
  console.log('🔍 Проверяем статус активации...');
  
  try {
    // Пробуем отправить тестовое письмо
    const testForm = new FormData();
    testForm.append('test', 'activation_check');
    testForm.append('_subject', 'Проверка активации FormSubmit');
    testForm.append('_captcha', 'false');
    
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: testForm
    });
    
    if (response.ok) {
      return { 
        activated: true, 
        message: 'FormSubmit активирован!' 
      };
    } else if (response.status === 422) {
      return { 
        activated: false, 
        message: 'FormSubmit НЕ активирован - нужно подтвердить email' 
      };
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    return { 
      activated: false, 
      error: error.message,
      message: 'Ошибка проверки активации' 
    };
  }
};

// 3. АЛЬТЕРНАТИВНЫЕ СЕРВИСЫ (БЕЗ АКТИВАЦИИ)
export const sendViaNetlifyForms = async (formData: any, files: File[]) => {
  console.log('📧 Отправляем через Netlify Forms...');
  
  try {
    const form = new FormData();
    form.append('form-name', 'contact');
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('company', formData.company || 'Не указана');
    form.append('message', `
Оборудование: ${formData.equipment || 'Не указано'}
Объем: ${formData.volume || 'Не указан'}
Адрес: ${formData.address || 'Не указан'}
Комментарий: ${formData.comment || 'Без комментариев'}
Файлов: ${files.length}
    `);
    
    // Отправляем на собственный Netlify сайт
    const response = await fetch(window.location.origin, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form as any).toString()
    });
    
    if (response.ok) {
      return { success: true, method: 'Netlify Forms' };
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Netlify Forms ошибка:', error);
    return { success: false, error };
  }
};

// 4. GETFORM.IO (НАДЁЖНАЯ АЛЬТЕРНАТИВА)
export const sendViaGetform = async (formData: any, files: File[]) => {
  console.log('📧 Отправляем через Getform.io...');
  
  try {
    const form = new FormData();
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('company', formData.company || 'Не указана');
    form.append('message', `
Оборудование: ${formData.equipment || 'Не указано'}
Объем: ${formData.volume || 'Не указан'}
Адрес: ${formData.address || 'Не указан'}
Комментарий: ${formData.comment || 'Без комментариев'}
    `);
    
    // Добавляем маленькие файлы
    const smallFiles = files.filter(f => f.size <= 5 * 1024 * 1024);
    smallFiles.forEach(file => {
      form.append('files', file);
    });
    
    // Используем публичный endpoint Getform
    const response = await fetch('https://getform.io/f/bpjjqdmb', {
      method: 'POST',
      body: form
    });
    
    if (response.ok) {
      return { success: true, method: 'Getform.io' };
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Getform ошибка:', error);
    return { success: false, error };
  }
};

// 5. ИНСТРУКЦИИ ДЛЯ ПОЛЬЗОВАТЕЛЯ
export const getActivationInstructions = () => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  if (isLocalhost) {
    return {
      title: '⚠️ LOCALHOST - CORS БЛОКИРОВКА',
      steps: [
        '1. ОПУБЛИКУЙТЕ САЙТ - нажмите "Опубликовать" в редакторе',
        '2. Откройте РЕАЛЬНЫЙ URL сайта (не localhost)',
        '3. На реальном домене нажмите "Отправить письмо активации"',
        '4. Проверьте почту commerce@rusutil-1.ru',
        '5. Найдите письмо от FormSubmit и подтвердите',
        '6. После подтверждения FormSubmit будет работать'
      ],
      note: 'LOCALHOST НЕ РАБОТАЕТ из-за CORS политики браузера!'
    };
  }
  
  return {
    title: 'Инструкция по активации FormSubmit',
    steps: [
      '1. Нажмите кнопку "Отправить письмо активации"',
      '2. Проверьте почту commerce@rusutil-1.ru',
      '3. Найдите письмо от FormSubmit с темой "Confirm your form"',
      '4. Нажмите ссылку подтверждения в письме',
      '5. После подтверждения FormSubmit будет работать',
      '6. Проверьте статус активации кнопкой ниже'
    ],
    note: 'БЕЗ активации FormSubmit не будет работать!'
  };
};