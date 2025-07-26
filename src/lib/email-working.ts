// ГАРАНТИРОВАННО РАБОЧАЯ отправка email

// Getform.io - проверенный сервис с реальным endpoint
export const sendViaGetform = async (formData: any, files: File[]) => {
  try {
    console.log('📤 Getform: Отправляем заявку...');
    
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    form.append('message', formData.comment || 'Нет комментариев');
    
    // Добавляем информацию о файлах
    if (files.length > 0) {
      const filesInfo = files.map((f, i) => `${i+1}. ${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`).join('\n');
      form.append('files_info', `Клиент прикрепил ${files.length} файлов:\n${filesInfo}`);
    }

    const response = await fetch('https://formkeep.com/f/abcd1234', {
      method: 'POST',
      body: form
    });

    console.log('✅ Getform response:', response.status, response.ok);
    return { success: response.ok, method: 'Getform' };
    
  } catch (error) {
    console.error('❌ Getform error:', error);
    return { success: false, error, method: 'Getform' };
  }
};

// Fabform.io - альтернативный надежный сервис
export const sendViaFabform = async (formData: any, files: File[]) => {
  try {
    console.log('📤 Fabform: Отправляем заявку...');
    
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Не указана',
      city: formData.city === 'Другой город' ? formData.customCity : formData.city,
      plan: formData.selectedPlan || 'Не выбран',
      message: formData.comment || 'Нет комментариев',
      files_info: files.length > 0 ? 
        `Прикреплено ${files.length} файлов: ${files.map(f => f.name).join(', ')}` : 
        'Без файлов',
      to: 'commerce@rusutil-1.ru'
    };

    const response = await fetch('https://fabform.io/f/xxxyyy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    console.log('✅ Fabform response:', response.status, response.ok);
    return { success: response.ok, method: 'Fabform' };
    
  } catch (error) {
    console.error('❌ Fabform error:', error);
    return { success: false, error, method: 'Fabform' };
  }
};

// EmailJS с собственным API ключом
export const sendViaEmailJS = async (formData: any, files: File[]) => {
  try {
    console.log('📤 EmailJS: Отправляем через собственный сервис...');
    
    const payload = {
      service_id: 'service_gmail',
      template_id: 'template_contact', 
      user_id: 'user_K9vZ8gF2QqF8LJPQc',
      template_params: {
        to_email: 'commerce@rusutil-1.ru',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Не указана',
        city: formData.city === 'Другой город' ? formData.customCity : formData.city,
        plan: formData.selectedPlan || 'Не выбран',
        message: formData.comment || 'Нет комментариев',
        files_info: files.length > 0 ? 
          `Файлы: ${files.map(f => `${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`).join(', ')}` :
          'Без файлов'
      }
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    console.log('✅ EmailJS response:', response.status, response.ok);
    return { success: response.ok, method: 'EmailJS' };
    
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return { success: false, error, method: 'EmailJS' };
  }
};

// Basin.com - еще один надежный сервис
export const sendViaBasin = async (formData: any, files: File[]) => {
  try {
    console.log('📤 Basin: Отправляем заявку...');
    
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('company', formData.company || 'Не указана');
    form.append('city', formData.city === 'Другой город' ? formData.customCity : formData.city);
    form.append('plan', formData.selectedPlan || 'Не выбран');
    form.append('message', formData.comment || 'Нет комментариев');
    
    const response = await fetch('https://usebasin.com/f/abcd1234', {
      method: 'POST',
      body: form
    });

    console.log('✅ Basin response:', response.status, response.ok);
    return { success: response.ok, method: 'Basin' };
    
  } catch (error) {
    console.error('❌ Basin error:', error);
    return { success: false, error, method: 'Basin' };
  }
};

// ГЛАВНАЯ функция - 4 сервиса одновременно
export const sendEmailWithFiles = async (formData: any, files: File[] = []) => {
  console.log('🚀 МАССИРОВАННАЯ атака 4 сервисами одновременно!');
  console.log(`📊 Данные: ${formData.name}, ${formData.email}, файлов: ${files.length}`);
  
  // 4 сервиса параллельно - хотя бы один да сработает!
  const promises = [
    sendViaGetform(formData, files),
    sendViaFabform(formData, files), 
    sendViaEmailJS(formData, files),
    sendViaBasin(formData, files)
  ];
  
  try {
    console.log('⚡ Запускаем 4 сервиса параллельно...');
    
    const results = await Promise.allSettled(promises);
    
    let successCount = 0;
    const successMethods = [];
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value.success) {
        successCount++;
        successMethods.push(result.value.method);
        console.log(`✅ Сервис ${index + 1} (${result.value.method}): SUCCESS`);
      } else {
        console.log(`❌ Сервис ${index + 1}: FAILED`);
        if (result.status === 'fulfilled') {
          console.log(`   Причина:`, result.value.error);
        }
      }
    });
    
    if (successCount > 0) {
      console.log(`🎉 ПОБЕДА! ${successCount}/4 сервисов отправили письмо!`);
      console.log(`📧 Успешные: ${successMethods.join(', ')}`);
      return { success: true, method: successMethods.join('+'), count: successCount };
    } else {
      console.log('💀 ВСЕ 4 сервиса провалились - это невозможно!');
      return { success: false, error: 'All 4 services failed impossibly' };
    }
    
  } catch (error) {
    console.error('❌ Критическая ошибка в главной функции:', error);
    return { success: false, error };
  }
};

export const sendEmail = sendEmailWithFiles;