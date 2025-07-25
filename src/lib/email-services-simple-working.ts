// ПРОСТОЙ КОД КОТОРЫЙ РАБОТАЛ

export const sendEmail = async (formData: any, files: File[] = []) => {
  const form = new FormData();
  
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('phone', formData.phone);
  form.append('company', formData.company || '');
  form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
  form.append('plan', formData.selectedPlan || '');
  form.append('message', formData.comment || '');
  
  // Прикрепляем ВСЕ файлы как attachment
  files.forEach((file) => {
    form.append('attachment', file, file.name);
  });
  
  form.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
  form.append('_captcha', 'false');

  await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
    method: 'POST',
    body: form
  });

  return { success: true };
};

export const sendEmailWithFiles = sendEmail;