import { AppFormData } from '@/types/form';

// Отправка малых файлов через несколько отдельных Ajax запросов
export async function sendSmallFilesMultiple(formData: AppFormData, cityInfo: string): Promise<void> {
  console.log('📧 Отправляем каждый файл отдельным письмом для надёжности');
  
  for (let i = 0; i < formData.files.length; i++) {
    const file = formData.files[i];
    console.log(`📎 Отправляем файл ${i + 1}/${formData.files.length}: ${file.name}`);
    
    const singleFileFormData = new FormData();
    singleFileFormData.append('name', formData.name);
    singleFileFormData.append('email', formData.email);
    singleFileFormData.append('phone', formData.phone);
    singleFileFormData.append('company', formData.company || 'Не указана');
    singleFileFormData.append('city', cityInfo || 'Не указан');
    singleFileFormData.append('plan', formData.selectedPlan || 'Не выбран');
    singleFileFormData.append('message', formData.comment || 'Нет комментариев');
    singleFileFormData.append('_subject', `Заявка на утилизацию IT оборудования - файл ${i + 1} из ${formData.files.length}: ${file.name}`);
    singleFileFormData.append('_captcha', 'false');
    singleFileFormData.append('_template', 'table');
    singleFileFormData.append('_next', 'https://utilizon.pro/success');
    singleFileFormData.append('_error', 'https://utilizon.pro/error');
    singleFileFormData.append('attachment', file);
    
    // Добавляем тайм-аут для каждого файла
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 секунд на файл
    
    let response;
    try {
      response = await fetch('https://formsubmit.co/ajax/commerce@rusutil-1.ru', {
        method: 'POST',
        body: singleFileFormData,
        headers: {
          'Accept': 'application/json'
        },
        signal: controller.signal
      });
      clearTimeout(timeoutId);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        throw new Error(`Тайм-аут отправки файла ${file.name} (10 секунд)`);
      }
      throw fetchError;
    }
    
    // Проверяем ответ более тщательно
    let success = false;
    
    try {
      if (response.ok) {
        const responseData = await response.json();
        console.log(`📧 FormSubmit ответ для ${file.name}:`, responseData);
        success = responseData.success !== false;
      }
    } catch (jsonError) {
      // Если не JSON, проверяем по статусу
      success = response.ok || response.status === 200 || response.status === 302;
    }
    
    if (!success) {
      let errorMessage = `Ошибка отправки файла ${file.name}: ${response.status}`;
      try {
        const errorText = await response.text();
        console.error(`❌ Детали ошибки для ${file.name}:`, errorText);
        errorMessage += ` - ${errorText}`;
      } catch (readError) {
        console.warn('Не удалось прочитать детали ошибки');
      }
      throw new Error(errorMessage);
    }
    
    console.log(`✅ Файл ${file.name} отправлен успешно`);
    
    // Увеличиваем задержку между отправками для надёжности
    if (i < formData.files.length - 1) {
      console.log(`⏳ Ожидание 3 секунды перед отправкой следующего файла...`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  console.log('🎉 Все файлы отправлены успешно!');
}

// Отправка малых файлов через FormSubmit HTML-форму
export function sendSmallFiles(formData: AppFormData, cityInfo: string): void {
  console.log('💌 Небольшие файлы - отправляем через FormSubmit HTML-форму');
  console.log(`📊 Отправляем ${formData.files.length} файл(ов):`, formData.files.map(f => `${f.name} (${(f.size/1024/1024).toFixed(2)}МБ)`));
  
  const htmlForm = document.createElement('form');
  htmlForm.method = 'POST';
  htmlForm.action = 'https://formsubmit.co/commerce@rusutil-1.ru';
  htmlForm.enctype = 'multipart/form-data';
  htmlForm.style.display = 'none';
  
  // Добавляем все текстовые поля
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
    htmlForm.appendChild(input);
  });
  
  // Добавляем каждый файл как отдельное поле (FormSubmit лучше работает с отдельными полями)
  formData.files.forEach((file, index) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.name = `attachment${index === 0 ? '' : index + 1}`; // attachment, attachment2, attachment3, etc.
    fileInput.style.display = 'none';
    
    // Создаём DataTransfer для каждого файла отдельно
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInput.files = dataTransfer.files;
    
    htmlForm.appendChild(fileInput);
    
    console.log(`📎 Добавлен файл ${index + 1}/${formData.files.length}: ${file.name} как поле "${fileInput.name}"`);
  });
  
  document.body.appendChild(htmlForm);
  
  // Финальная проверка формы перед отправкой
  console.log('🏁 Форма готова к отправке:');
  console.log(`   • Текстовых полей: ${fields.length}`);
  console.log(`   • Файловых полей: ${formData.files.length}`);
  console.log('📤 Отправляем HTML-форму...');
  
  // Отправляем форму
  htmlForm.submit();
}

// Отправка больших файлов через File.io
export async function sendLargeFiles(formData: AppFormData, cityInfo: string, totalSize: number): Promise<void> {
  console.log('📁 Большие файлы - используем file.io для загрузки');
  
  // Загружаем файлы на file.io (бесплатный сервис для больших файлов)
  const fileLinks = [];
  
  for (let i = 0; i < formData.files.length; i++) {
    const file = formData.files[i];
    console.log(`📤 Загружаем файл ${i + 1}/${formData.files.length}: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} МБ)`);
    
    const fileFormData = new FormData();
    fileFormData.append('file', file);
    
    // Добавляем тайм-аут для загрузки файлов
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 секунд для файлов
    
    let uploadResponse;
    try {
      uploadResponse = await fetch('https://file.io', {
        method: 'POST',
        body: fileFormData,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
    } catch (uploadError) {
      clearTimeout(timeoutId);
      if (uploadError.name === 'AbortError') {
        throw new Error(`Тайм-аут загрузки файла ${file.name} (30 секунд)`);
      }
      throw uploadError;
    }
    
    if (!uploadResponse.ok) {
      throw new Error(`Ошибка загрузки файла ${file.name}: ${uploadResponse.status}`);
    }
    
    const uploadResult = await uploadResponse.json();
    
    if (uploadResult.success && uploadResult.link) {
      fileLinks.push({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' МБ',
        link: uploadResult.link,
        key: uploadResult.key
      });
      console.log(`✅ Файл ${file.name} загружен: ${uploadResult.link}`);
    } else {
      throw new Error(`Не удалось загрузить файл ${file.name}: ${uploadResult.message || 'Неизвестная ошибка'}`);
    }
  }
  
  // Отправляем заявку с ссылками на файлы через FormSubmit Ajax
  const emailFormData = new FormData();
  emailFormData.append('name', formData.name);
  emailFormData.append('email', formData.email);
  emailFormData.append('phone', formData.phone);
  emailFormData.append('company', formData.company || 'Не указана');
  emailFormData.append('city', cityInfo || 'Не указан');
  emailFormData.append('plan', formData.selectedPlan || 'Не выбран');
  emailFormData.append('message', formData.comment || 'Нет комментариев');
  emailFormData.append('subject', 'Заявка на расчет стоимости утилизации IT оборудования с сайта utilizon.pro');
  emailFormData.append('_captcha', 'false');
  emailFormData.append('_template', 'table');
  emailFormData.append('_next', 'https://utilizon.pro/success');
  emailFormData.append('_error', 'https://utilizon.pro/error');
  
  // Добавляем информацию о файлах
  const filesInfo = fileLinks.map((file, index) => 
    `${index + 1}. ${file.name} (${file.size}) - ${file.link}`
  ).join('\\n');
  
  emailFormData.append('files_info', `Загружены файлы (${fileLinks.length} шт., общий размер: ${(totalSize / 1024 / 1024).toFixed(2)} МБ):\\n${filesInfo}`);
  emailFormData.append('files_count', fileLinks.length.toString());
  
  const emailResponse = await fetch('https://formsubmit.co/ajax/commerce@rusutil-1.ru', {
    method: 'POST',
    body: emailFormData,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (!emailResponse.ok) {
    throw new Error(`Ошибка отправки письма: ${emailResponse.status}`);
  }
  
  console.log('✅ Заявка с файлами отправлена успешно');
}