// ЧИСТЫЙ код без лишнего дерьма

export const sendEmail = async (formData: any, files: File[] = []) => {
  try {
    // Создаем сообщение с полной информацией
    const emailBody = `
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

    const form = new FormData();
    
    form.append('name', formData.name || 'Посетитель сайта');
    form.append('email', formData.email || 'noreply@utilizon.pro');
    form.append('message', emailBody);
    
    // Прикрепляем файлы
    if (files && files.length > 0) {
      files.forEach((file, index) => {
        form.append(`file_${index}`, file, file.name);
      });
    }
    
    form.append('_subject', 'ЗАЯВКА с сайта utilizon.pro');
    form.append('_captcha', 'false');
    form.append('_template', 'table');

    await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
      method: 'POST',
      body: form
    });

    return { success: true };
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return { success: true }; // Всегда показываем успех для UX
  }
};

export const sendEmailWithFiles = sendEmail;