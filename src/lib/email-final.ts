// ФИНАЛЬНОЕ РЕШЕНИЕ - FormData через XMLHttpRequest БЕЗ РЕДИРЕКТА

export const sendEmail = async (formData: any, files: File[] = []) => {
  const form = new FormData();
  
  // ВОЗВРАЩАЕМСЯ К FORMSUBMIT - ОН РАБОТАЛ!
  form.append('name', formData.name || 'Посетитель сайта');
  form.append('email', formData.email || 'noreply@example.com');
  form.append('phone', formData.phone || 'Не указан');
  form.append('company', formData.company || 'Не указана');
  form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан');
  form.append('plan', formData.selectedPlan || 'Не выбран');
  
  const message = `
ЗАЯВКА С САЙТА

ИМЯ: ${formData.name || 'Не указано'}
EMAIL: ${formData.email || 'Не указан'}
ТЕЛЕФОН: ${formData.phone || 'Не указан'}
КОМПАНИЯ: ${formData.company || 'Не указана'}
ГОРОД: ${formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан'}
ПЛАН: ${formData.selectedPlan || 'Не выбран'}
КОММЕНТАРИЙ: ${formData.comment || 'Нет комментария'}

ФАЙЛЫ: ${files && files.length > 0 ? files.map(f => f.name).join(', ') : 'Нет файлов'}
КОЛИЧЕСТВО ФАЙЛОВ: ${files ? files.length : 0} из 5

ДАТА: ${new Date().toLocaleString('ru-RU')}
  `;
  
  form.append('message', message);
  form.append('_subject', 'ЗАЯВКА с сайта');
  form.append('_captcha', 'false');
  
  // ДО 5 ФАЙЛОВ
  if (files && files.length > 0) {
    files.slice(0, 5).forEach((file, index) => {
      form.append(`attachment`, file, file.name);
    });
  }

  // FORMSUBMIT - РАБОТАЕТ!
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = () => {
      console.log('✅ FormSubmit ответ:', xhr.status);
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve({ success: true, method: 'FormSubmit' });
      } else {
        resolve({ success: false, error: `HTTP ${xhr.status}` });
      }
    };
    
    xhr.onerror = () => {
      resolve({ success: false, error: 'Ошибка сети' });
    };
    
    xhr.open('POST', 'https://formsubmit.co/danilgaleev7@gmail.com');
    xhr.send(form);
  });
};

export const sendEmailWithFiles = sendEmail;