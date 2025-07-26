// РАБОТАЮЩИЕ способы отправки email
import emailjs from '@emailjs/browser';

// 1. НОВЫЙ способ - отправляем каждый файл отдельно через FormSubmit
export const sendViaFormSubmitMultiple = async (formData: any, files: File[]) => {
  try {
    console.log('📤 Отправляю основную форму + каждый файл отдельно');
    
    // Основная форма без файлов
    const mainForm = new FormData();
    mainForm.append('name', formData.name);
    mainForm.append('email', formData.email);
    mainForm.append('phone', formData.phone);
    mainForm.append('company', formData.company || 'Не указана');
    mainForm.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    mainForm.append('plan', formData.selectedPlan || 'Не выбран');
    mainForm.append('message', formData.comment || 'Нет комментариев' + (files.length > 0 ? `\n\n📎 К заявке прикреплено ${files.length} файлов` : ''));
    mainForm.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
    mainForm.append('_captcha', 'false');

    // Отправляем основную форму
    const mainResponse = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: mainForm
    });

    // Отправляем каждый файл отдельно
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const fileForm = new FormData();
        fileForm.append('name', `${formData.name} - ФАЙЛ ${i + 1}/${files.length}`);
        fileForm.append('email', formData.email);
        fileForm.append('message', `Файл ${i + 1} к заявке от ${formData.name}`);
        fileForm.append('attachment', files[i], files[i].name);
        fileForm.append('_subject', `ФАЙЛ ${i + 1}/${files.length} к заявке - ${files[i].name}`);
        fileForm.append('_captcha', 'false');

        console.log(`📎 Отправляю файл ${i + 1}: ${files[i].name}`);
        await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
          method: 'POST',
          body: fileForm
        });
        
        // Пауза между отправками
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    return { success: mainResponse.ok, method: 'FormSubmitMultiple' };
  } catch (error) {
    console.error('FormSubmitMultiple Error:', error);
    return { success: false, error, method: 'FormSubmitMultiple' };
  }
};

// 2. Netlify Forms (РЕЗЕРВ)
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
    form.append('message', formData.comment || 'Нет комментариев');

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

// 3. FormSubmit (РАБОТАЕТ БЕЗ НАСТРОЙКИ)
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
    
    // ПРАВИЛЬНО прикрепляем файлы к FormSubmit
    if (files.length > 0) {
      files.forEach((file, index) => {
        console.log(`📎 Прикрепляю файл ${index + 1}: ${file.name} (${file.size} bytes)`);
        form.append(`attachment${index + 1}`, file, file.name);  // Разные имена для каждого файла
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
    return { success: false, error, method: 'FormSubmit' };
  }
};

// 3. Web3Forms (НОВЫЙ НАДЕЖНЫЙ)
export const sendViaWeb3Forms = async (formData: any, files: File[]) => {
  try {
    const form = new FormData();
    
    form.append('access_key', 'b8c94d2e-7f3a-4b5e-9d8f-2a3b4c5d6e7f');
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    let message = formData.comment || 'Нет комментариев';
    
    // Web3Forms поддерживает множественные файлы через одно поле
    if (files.length > 0) {
      files.forEach((file) => {
        form.append('attachment', file, file.name);  // Все файлы с одним именем
      });
      message += `\n\n📎 Прикреплено файлов: ${files.length}`;
      console.log(`📤 Web3Forms: Прикрепляю ${files.length} файлов в одном письме`);
    }
    
    form.append('message', message);
    form.append('subject', 'ЗАЯВКА с сайта utilizon.pro');

    console.log('🚀 Отправляю на Web3Forms...');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: form
    });

    console.log('📧 Web3Forms ответ:', response.status, response.ok);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Web3Forms error:', errorText);
    }
    
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
  
  // Пробуем Web3Forms (ВСЕ ФАЙЛЫ В ОДНОМ ПИСЬМЕ!)
  const web3FormsResult = await sendViaWeb3Forms(formData, files);
  if (web3FormsResult.success) {
    console.log('✅ Web3Forms - SUCCESS');
    return { success: true, method: 'Web3Forms' };
  }
  
  // Пробуем FormSubmit (с файлами разными именами)
  const formSubmitResult = await sendViaFormSubmit(formData, files);
  if (formSubmitResult.success) {
    console.log('✅ FormSubmit - SUCCESS');
    return { success: true, method: 'FormSubmit' };
  }
  
  // Резерв - отдельные письма для каждого файла
  const formSubmitMultipleResult = await sendViaFormSubmitMultiple(formData, files);
  if (formSubmitMultipleResult.success) {
    console.log('✅ FormSubmitMultiple - SUCCESS');
    return { success: true, method: 'FormSubmitMultiple' };
  }
  
  // Пробуем EmailJS (резерв)
  const emailJSResult = await sendViaEmailJS(formData, files);
  if (emailJSResult.success) {
    console.log('✅ EmailJS - SUCCESS');
    return { success: true, method: 'EmailJS' };
  }
  
  // Пробуем FormSpree
  const formSpreeResult = await sendViaFormSpree(formData, files);
  if (formSpreeResult.success) {
    console.log('✅ FormSpree - SUCCESS');
    return { success: true, method: 'FormSpree' };
  }
  
  console.log('❌ Все сервисы не сработали');
  return { success: false, error: 'Все сервисы недоступы' };
};

// Для совместимости
export const sendEmailWithFiles = sendEmail;