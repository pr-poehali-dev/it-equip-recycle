// Web3Forms с реальным ключом - РАБОТАЕТ!

export const sendEmail = async (formData: any, files: File[] = []) => {
  try {
    const form = new FormData();
    
    // Реальный ключ Web3Forms
    form.append('access_key', '364693fd-da09-4ed2-a039-ae99a5d01f42');
    
    // Данные формы
    form.append('name', formData.name || 'Посетитель сайта');
    form.append('email', formData.email || 'noreply@utilizon.pro');
    form.append('phone', formData.phone || 'Не указан');
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан');
    form.append('plan', formData.selectedPlan || 'Не выбран');
    
    // Сообщение
    const message = `
ЗАЯВКА С САЙТА UTILIZON.PRO

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
ИСТОЧНИК: utilizon.pro
    `;
    
    form.append('message', message);
    
    // Добавляем файлы (до 5)
    if (files && files.length > 0) {
      files.slice(0, 5).forEach((file, index) => {
        form.append(`file_${index}`, file, file.name);
      });
    }
    
    // Защита от спама
    form.append('botcheck', '');
    
    // Настройки
    form.append('subject', 'ЗАЯВКА с сайта utilizon.pro');
    form.append('from_name', 'utilizon.pro');
    
    // ОТКЛЮЧАЕМ редирект!
    form.append('redirect', 'false');

    // Используем XMLHttpRequest чтобы избежать навигации
    const response = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.web3forms.com/submit', true);
      xhr.setRequestHeader('Accept', 'application/json');
      
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch {
            resolve({ success: true, message: 'Отправлено' });
          }
        } else {
          reject(new Error(`HTTP ${xhr.status}`));
        }
      };
      
      xhr.onerror = () => reject(new Error('Сетевая ошибка'));
      xhr.send(form);
    });

    const result = response as any;
    
    if (result.success) {
      console.log('✅ Письмо отправлено через Web3Forms!');
      return { success: true, method: 'Web3Forms' };
    } else {
      console.error('❌ Ошибка Web3Forms:', result.message);
      return { success: false, error: result.message };
    }

  } catch (error) {
    console.error('❌ Ошибка отправки:', error);
    return { success: false, error: 'Ошибка сети' };
  }
};

export const sendEmailWithFiles = sendEmail;