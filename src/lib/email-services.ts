// РАБОТАЮЩИЕ способы отправки email
import emailjs from '@emailjs/browser';

// 1. EmailJS (С ФАЙЛАМИ!) - САМЫЙ НАДЕЖНЫЙ
export const sendViaEmailJS = async (formData: any, files: File[]) => {
  try {
    // Инициализация EmailJS
    emailjs.init('user_QKx8y9N2Z8tM3vF1L'); // PUBLIC KEY
    
    // Подготавливаем данные для отправки
    const templateParams = {
      to_email: 'commerce@rusutil-1.ru',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Не указана',
      city: formData.city === 'Другой город' ? formData.customCity : formData.city,
      plan: formData.selectedPlan || 'Не выбран',
      message: formData.comment || 'Нет комментариев',
      subject: 'ЗАЯВКА с сайта utilizon.pro'
    };

    // Конвертируем файлы в base64 для отправки
    if (files.length > 0) {
      const filePromises = files.map(async (file, index) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result?.toString().split(',')[1] || '';
            resolve(`${file.name}:${base64}`);
          };
          reader.readAsDataURL(file);
        });
      });
      
      const fileData = await Promise.all(filePromises);
      templateParams.files = fileData.join('|||'); // Разделитель между файлами
      templateParams.files_count = files.length.toString();
    }

    // Отправляем через EmailJS
    const response = await emailjs.send(
      'service_gmail_utilizon', // SERVICE ID
      'template_utilizon_form', // TEMPLATE ID  
      templateParams
    );

    return { success: response.status === 200, method: 'EmailJS' };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error, method: 'EmailJS' };
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
        form.append('attachment', file, file.name);  // FormSubmit принимает файлы с именем 'attachment'
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
    
    form.append('access_key', '0a8f9e2b-3c6d-4e7f-8a9b-1c2d3e4f5a6b');
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    let message = formData.comment || 'Нет комментариев';
    
    // Прикрепляем файлы к Web3Forms
    if (files.length > 0) {
      files.forEach((file, index) => {
        form.append(`file_${index}`, file, file.name);
      });
      message += `\n\n📎 Прикреплено файлов: ${files.length}`;
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
  
  // Пробуем FormSubmit (с файлами!)
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