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

// 2. GetForm (РАБОТАЕТ БЕЗ НАСТРОЙКИ)
export const sendViaGetForm = async (formData: any, files: File[]) => {
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

    const response = await fetch('https://getform.io/f/aolgkdla', {
      method: 'POST',
      body: form
    });

    return { success: response.ok, method: 'GetForm' };
  } catch (error) {
    return { success: false, error, method: 'GetForm' };
  }
};

// 3. FormSpree (РЕЗЕРВ)
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

// 4. ГЛАВНАЯ функция - пробует все способы
export const sendEmail = async (formData: any, files: File[] = []) => {
  console.log('🚀 Отправляю через несколько сервисов...');
  
  // Пробуем GetForm (самый надежный)
  const getFormResult = await sendViaGetForm(formData, files);
  if (getFormResult.success) {
    console.log('✅ GetForm - SUCCESS');
    return { success: true, method: 'GetForm' };
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