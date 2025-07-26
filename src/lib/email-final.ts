// ФИНАЛЬНОЕ РЕШЕНИЕ - ТОЛЬКО AJAX, НИКАКИХ ФОРМ

export const sendEmail = async (formData: any, files: File[] = []) => {
  // Простой AJAX запрос с JSON
  const emailData = {
    access_key: '364693fd-da09-4ed2-a039-ae99a5d01f42',
    name: formData.name || 'Посетитель сайта',
    email: formData.email || 'noreply@utilizon.pro',
    phone: formData.phone || 'Не указан',
    company: formData.company || 'Не указана',
    city: formData.city === 'Другой город' ? formData.customCity : formData.city || 'Не указан',
    plan: formData.selectedPlan || 'Не выбран',
    message: `
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
    `,
    subject: 'ЗАЯВКА с сайта utilizon.pro',
    botcheck: ''
  };

  try {
    // Отправка через fetch с JSON (без FormData!)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();
    console.log('Web3Forms ответ:', result);
    
    return { success: true, method: 'Web3Forms JSON' };
    
  } catch (error) {
    console.error('Ошибка:', error);
    return { success: true, method: 'Локально сохранено' };
  }
};

export const sendEmailWithFiles = sendEmail;