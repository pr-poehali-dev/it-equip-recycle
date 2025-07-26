// ЧИСТЫЙ код без лишнего дерьма

export const sendEmail = async (formData: any, files: File[] = []) => {
  const form = new FormData();
  
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('phone', formData.phone);
  form.append('company', formData.company || '');
  form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
  form.append('plan', formData.selectedPlan || '');
  form.append('message', formData.comment || '');
  
  // Прикрепляем файлы
  files.forEach((file) => {
    form.append('attachment', file, file.name);
  });
  
  form.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
  form.append('_captcha', 'false');

  const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
    method: 'POST',
    body: form
  });

  return { success: response.ok };
};

export const sendEmailWithFiles = sendEmail;