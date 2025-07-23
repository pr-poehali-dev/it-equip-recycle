import { AppFormData } from '@/types/form';

// Отправка заявки без файлов через Ajax
export async function sendFormWithoutFiles(formData: AppFormData, cityInfo: string): Promise<void> {
  console.log('📧 Отправляем заявку без файлов через Ajax...');
  
  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('company', formData.company || 'Не указана');
  formDataToSend.append('city', cityInfo || 'Не указан');
  formDataToSend.append('plan', formData.selectedPlan || 'Не выбран');
  formDataToSend.append('message', formData.comment || 'Нет комментариев');
  formDataToSend.append('_subject', 'Заявка на расчет стоимости утилизации IT оборудования с сайта utilizon.pro');
  formDataToSend.append('_captcha', 'false');
  formDataToSend.append('_template', 'table');
  formDataToSend.append('_next', 'https://utilizon.pro/success');
  formDataToSend.append('_error', 'https://utilizon.pro/error');
  
  console.log('🚀 Подготовленные данные:', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company || 'Не указана',
    city: cityInfo || 'Не указан',
    plan: formData.selectedPlan || 'Не выбран'
  });
  
  // Создаем AbortController для тайм-аута
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 секунд тайм-аут
  
  let response;
  try {
    console.log('📤 Отправляем запрос к FormSubmit...');
    response = await fetch('https://formsubmit.co/ajax/commerce@rusutil-1.ru', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId); // Отменяем тайм-аут если запрос успешен
    console.log('✅ FormSubmit результат:', response.status, response.statusText);
  } catch (fetchError) {
    clearTimeout(timeoutId);
    if (fetchError.name === 'AbortError') {
      throw new Error('Тайм-аут запроса (15 секунд). Попробуйте еще раз.');
    }
    throw fetchError;
  }
  
  // Проверяем успешность отправки
  let success = false;
  
  try {
    const responseData = await response.json();
    console.log('📧 FormSubmit ответ:', responseData);
    success = response.ok && (responseData.success !== false);
  } catch (jsonError) {
    // Если не JSON, проверяем по статусу
    success = response.ok || response.status === 200 || response.status === 302;
  }
  
  if (!success) {
    // Логируем ошибку для отладки
    let errorDetails = '';
    try {
      const errorText = await response.text();
      console.error('❌ FormSubmit error details:', errorText);
      errorDetails = errorText;
    } catch (readError) {
      console.error('❌ Could not read FormSubmit error response');
    }
    console.error('❌ FormSubmit ошибка:', response.status, response.statusText);
    throw new Error(`Ошибка отправки через FormSubmit: ${response.status} ${response.statusText}${errorDetails ? ' - ' + errorDetails : ''}`);
  }
}

// Резервный метод отправки через HTML-форму
export function sendFallbackForm(formData: AppFormData, cityInfo: string): void {
  console.log('🔄 Пробуем резервный метод отправки через HTML-форму...');
  
  const fallbackForm = document.createElement('form');
  fallbackForm.method = 'POST';
  fallbackForm.action = 'https://formsubmit.co/commerce@rusutil-1.ru';
  fallbackForm.style.display = 'none';
  
  // Добавляем все поля
  const fields = [
    { name: 'name', value: formData.name },
    { name: 'email', value: formData.email },
    { name: 'phone', value: formData.phone },
    { name: 'company', value: formData.company || 'Не указана' },
    { name: 'city', value: cityInfo || 'Не указан' },
    { name: 'plan', value: formData.selectedPlan || 'Не выбран' },
    { name: 'message', value: formData.comment || 'Нет комментариев' },
    { name: '_subject', value: 'Заявка на расчет стоимости утилизации IT оборудования с сайта utilizon.pro' },
    { name: '_captcha', value: 'false' },
    { name: '_template', value: 'table' },
    { name: '_next', value: 'https://utilizon.pro/success' },
    { name: '_error', value: 'https://utilizon.pro/error' }
  ];
  
  fields.forEach(field => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = field.name;
    input.value = field.value;
    fallbackForm.appendChild(input);
  });
  
  // Добавляем информацию о файлах (сами файлы не могут быть отправлены через HTML-форму)
  if (formData.files && formData.files.length > 0) {
    console.log(`⚠️ ${formData.files.length} файл(ов) не могут быть отправлены через резервный HTML-метод. Используйте Ajax.`);
    
    // Добавляем информацию о файлах в текстовом виде
    const fileInfo = formData.files.map((file, index) => 
      `${index + 1}. ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} МБ)`
    ).join('\n');
    
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'files_info';
    input.value = `Загружены файлы (${formData.files.length} шт.):\n${fileInfo}`;
    fallbackForm.appendChild(input);
  }
  
  document.body.appendChild(fallbackForm);
  fallbackForm.submit();
}