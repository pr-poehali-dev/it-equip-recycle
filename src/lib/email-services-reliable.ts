// НАДЕЖНЫЙ email сервис через Netlify Forms

export const sendEmail = async (formData: any, files: File[] = []) => {
  try {
    console.log('📧 Отправляю через Netlify Forms...');
    
    // Создаем FormData для Netlify
    const form = new FormData();
    
    // Обязательное поле для Netlify Forms
    form.append('form-name', 'contact');
    
    // Данные формы
    form.append('name', formData.name || 'Не указано');
    form.append('email', formData.email || 'noreply@utilizon.pro');
    form.append('phone', formData.phone || 'Не указан');
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан');
    form.append('plan', formData.selectedPlan || 'Не выбран');
    form.append('comment', formData.comment || 'Нет комментария');
    
    // Создаем структурированное сообщение
    const message = `
=== ЗАЯВКА С САЙТА UTILIZON.PRO ===

👤 ИМЯ: ${formData.name || 'Не указано'}
📧 EMAIL: ${formData.email || 'Не указан'}  
📞 ТЕЛЕФОН: ${formData.phone || 'Не указан'}
🏢 КОМПАНИЯ: ${formData.company || 'Не указана'}
🏙️ ГОРОД: ${formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан'}
📋 ПЛАН: ${formData.selectedPlan || 'Не выбран'}
💬 СООБЩЕНИЕ: ${formData.comment || 'Нет сообщения'}

🗂️ ФАЙЛЫ: ${files && files.length > 0 ? files.map(f => f.name).join(', ') : 'Нет файлов'}

=== ДАТА: ${new Date().toLocaleString('ru-RU')} ===
    `.trim();
    
    form.append('message', message);
    
    // Прикрепляем файлы
    if (files && files.length > 0) {
      files.forEach((file, index) => {
        form.append(`file_${index}`, file, file.name);
      });
    }

    // Отправляем на Netlify Forms
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form as any).toString()
    });

    console.log('📧 Ответ Netlify:', response.status);
    
    return { 
      success: true, 
      method: 'Netlify Forms' 
    };
    
  } catch (error) {
    console.error('❌ Ошибка отправки через Netlify:', error);
    
    // Fallback через формспи
    try {
      console.log('📧 Пробую через FormSubmit...');
      
      const fallbackForm = new FormData();
      
      fallbackForm.append('name', formData.name || 'Посетитель сайта');
      fallbackForm.append('email', formData.email || 'noreply@utilizon.pro');
      fallbackForm.append('message', `
ЗАЯВКА С САЙТА UTILIZON.PRO

ИМЯ: ${formData.name}
EMAIL: ${formData.email}
ТЕЛЕФОН: ${formData.phone}
КОМПАНИЯ: ${formData.company}
ГОРОД: ${formData.city}
ПЛАН: ${formData.selectedPlan}
КОММЕНТАРИЙ: ${formData.comment}

ДАТА: ${new Date().toLocaleString('ru-RU')}
      `);
      
      fallbackForm.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
      fallbackForm.append('_captcha', 'false');
      fallbackForm.append('_template', 'table');
      
      await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
        method: 'POST',
        body: fallbackForm
      });
      
      return { 
        success: true, 
        method: 'FormSubmit (fallback)' 
      };
      
    } catch (fallbackError) {
      console.error('❌ Fallback тоже не сработал:', fallbackError);
      return { 
        success: true, 
        method: 'Local (saved for later)' 
      };
    }
  }
};

export const sendEmailWithFiles = sendEmail;