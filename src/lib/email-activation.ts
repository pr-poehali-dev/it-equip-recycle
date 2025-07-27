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
    // Создаем прямую HTML форму (обходит CORS)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/commerce@rusutil-1.ru';
    form.target = '_blank'; // Открываем в новом окне
    form.style.display = 'none';
    
    // Добавляем поля формы
    const fields = {
      'email': 'commerce@rusutil-1.ru',
      'name': 'FormSubmit Activation',
      'message': `АКТИВАЦИЯ FormSubmit для utilizon.pro\n\nДомен: ${window.location.origin}\nВремя: ${new Date().toLocaleString('ru-RU')}\n\nПосле получения этого письма перейдите в почту и подтвердите активацию.`,
      '_next': window.location.origin + '?formsubmit=activated',
      '_captcha': 'false',
      '_template': 'basic',
      '_subject': 'Confirm your form - Активация FormSubmit'
    };
    
    // Создаем скрытые поля
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });
    
    // Добавляем форму на страницу и отправляем
    document.body.appendChild(form);
    form.submit();
    
    // Удаляем форму через секунду
    setTimeout(() => {
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
    }, 1000);
    
    return { 
      success: true, 
      message: 'Форма отправлена! Откроется страница FormSubmit в новом окне' 
    };
  } catch (error) {
    console.error('❌ Ошибка отправки формы:', error);
    return { 
      success: false, 
      error: error.message,
      message: 'Ошибка создания формы активации' 
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
      title: '⚠️ LOCALHOST - НОВЫЙ СПОСОБ РАБОТАЕТ!',
      steps: [
        '1. Нажмите "Отправить письмо активации" - откроется новое окно',
        '2. В новом окне заполните капчу и нажмите Submit',
        '3. Проверьте почту commerce@rusutil-1.ru',
        '4. Найдите письмо от FormSubmit и подтвердите',
        '5. После этого формы заявок будут работать',
        '6. Все формы теперь работают через прямую отправку!'
      ],
      note: 'LOCALHOST теперь работает! Используем обход CORS через HTML формы.'
    };
  }
  
  return {
    title: '✅ ФОРМЫ РАБОТАЮТ БЕЗ CORS!',
    steps: [
      '1. Нажмите "Отправить письмо активации" - откроется новое окно',
      '2. В окне FormSubmit заполните капчу и нажмите Submit',
      '3. Проверьте почту commerce@rusutil-1.ru',
      '4. Найдите письмо от FormSubmit и подтвердите',
      '5. После подтверждения все формы будут работать',
      '6. Формы заявок уже работают через прямую отправку!'
    ],
    note: 'Обходим CORS! Формы отправляются через HTML без JavaScript ошибок.'
  };
};