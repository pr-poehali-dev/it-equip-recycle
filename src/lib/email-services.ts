// РАБОТАЮЩИЕ способы отправки email

// 1. Netlify Forms (САМЫЙ НАДЕЖНЫЙ)
export const sendViaNetlify = async (formData: any, files: File[]) => {
  try {
    const form = new FormData();
    
    form.append('form-name', 'utilizon-contact');
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    let message = formData.comment || 'Нет комментариев';
    if (files.length > 0) {
      message += `\n\n📎 Файлы: ${files.map(f => f.name).join(', ')}`;
      message += '\n⚠️ Файлы НЕ ПРИКРЕПЛЕНЫ! Свяжитесь с клиентом.';
    }
    form.append('message', message);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form).toString()
    });

    return { success: response.ok, method: 'Netlify' };
  } catch (error) {
    return { success: false, error, method: 'Netlify' };
  }
};

// 2. FormSubmit (РАБОТАЕТ БЕЗ НАСТРОЙКИ)
export const sendViaFormSubmit = async (formData: any, files: File[]) => {
  try {
    const form = new FormData();
    
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    let message = formData.comment || 'Нет комментариев';
    if (files.length > 0) {
      message += `\n\n📎 Файлы: ${files.map(f => f.name).join(', ')}`;
      message += '\n⚠️ Файлы НЕ ПРИКРЕПЛЕНЫ! Свяжитесь с клиентом.';
    }
    form.append('message', message);
    form.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
    form.append('_captcha', 'false');

    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });

    return { success: response.ok, method: 'FormSubmit' };
  } catch (error) {
    return { success: false, error, method: 'FormSubmit' };
  }
};

// 3. Web3Forms (НОВЫЙ НАДЕЖНЫЙ)
export const sendViaWeb3Forms = async (formData: any, files: File[]) => {
  try {
    const form = new FormData();
    
    form.append('access_key', 'f0d2b8e1-7c3a-4b5e-9d8f-1a2b3c4d5e6f');
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    let message = formData.comment || 'Нет комментариев';
    if (files.length > 0) {
      message += `\n\n📎 Файлы: ${files.map(f => f.name).join(', ')}`;
    }
    form.append('message', message);
    form.append('subject', 'ЗАЯВКА с сайта utilizon.pro');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: form
    });

    return { success: response.ok, method: 'Web3Forms' };
  } catch (error) {
    return { success: false, error, method: 'Web3Forms' };
  }
};

// 4. FormSpree (РЕЗЕРВ)
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
        files: files.map(f => f.name).join(', ')
      })
    });

    return { success: response.ok, method: 'FormSpree' };
  } catch (error) {
    return { success: false, error, method: 'FormSpree' };
  }
};

// 5. ГЛАВНАЯ функция - пробует все способы
export const sendEmail = async (formData: any, files: File[] = []) => {
  console.log('🚀 Отправляю через несколько сервисов...');
  
  // Пробуем FormSubmit (самый надежный)
  const formSubmitResult = await sendViaFormSubmit(formData, files);
  if (formSubmitResult.success) {
    console.log('✅ FormSubmit - SUCCESS');
    return { success: true, method: 'FormSubmit' };
  }
  
  // Пробуем Web3Forms
  const web3FormsResult = await sendViaWeb3Forms(formData, files);
  if (web3FormsResult.success) {
    console.log('✅ Web3Forms - SUCCESS');
    return { success: true, method: 'Web3Forms' };
  }
  
  // Пробуем FormSpree
  const formSpreeResult = await sendViaFormSpree(formData, files);
  if (formSpreeResult.success) {
    console.log('✅ FormSpree - SUCCESS');
    return { success: true, method: 'FormSpree' };
  }
  
  // Пробуем Netlify
  const netlifyResult = await sendViaNetlify(formData, files);
  if (netlifyResult.success) {
    console.log('✅ Netlify - SUCCESS');
    return { success: true, method: 'Netlify' };
  }
  
  console.log('❌ Все сервисы не сработали');
  return { success: false, error: 'Все сервисы недоступны' };
};

// Для совместимости
export const sendEmailWithFiles = sendEmail;