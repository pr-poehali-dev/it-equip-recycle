// ПРОСТАЯ ОТПРАВКА ПИСЕМ ЧЕРЕЗ FORMSUBMIT

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  city?: string;
  plan?: string;
  comment?: string;
}

export const sendFormData = async (data: FormData, files: File[] = []): Promise<boolean> => {
  try {
    const form = new FormData();
    
    // Основные поля
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('phone', data.phone);
    form.append('company', data.company || '');
    form.append('city', data.city || '');
    form.append('plan', data.plan || '');
    form.append('comment', data.comment || '');
    
    // Настройки FormSubmit
    form.append('_subject', 'Новая заявка с сайта');
    form.append('_captcha', 'false');
    
    // Файлы (до 5 штук)
    if (files.length > 0) {
      files.slice(0, 5).forEach((file, index) => {
        form.append(`file_${index}`, file);
      });
    }
    
    const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form,
    });
    
    return response.ok;
    
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return false;
  }
};