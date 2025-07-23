import { AppFormData } from '@/types/form';

// Создание индикатора загрузки
export function createLoadingIndicator(): HTMLElement {
  const loadingDiv = document.createElement('div');
  loadingDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #059669;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 400px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #D4AF37;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: spin 1s linear infinite;
      ">⟳</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Отправляем заявку...</h3>
      <p style="margin: 0; opacity: 0.9; font-size: 14px;">Пожалуйста, подождите</p>
    </div>
    <style>
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(loadingDiv);
  return loadingDiv;
}

// Создание модального окна успеха
export function createSuccessModal(message: string): void {
  const successDiv = document.createElement('div');
  successDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #059669;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 500px;
      text-align: center;
    ">
      <div style="
        width: 48px;
        height: 48px;
        background: #D4AF37;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: black;
        font-weight: bold;
      ">✅</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Заявка отправлена!</h3>
      <p style="margin: 0 0 8px 0; opacity: 0.9; font-size: 14px;">${message}</p>
      <p style="margin: 0; opacity: 0.7; font-size: 12px;">Мы свяжемся с вами в ближайшее время</p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #D4AF37;
        color: black;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        margin-top: 12px;
        cursor: pointer;
        font-weight: 600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(successDiv);
}

// Создание модального окна успеха для больших файлов
export function createFileSuccessModal(): void {
  const successDiv = document.createElement('div');
  successDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #16a34a;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      z-index: 10000;
      max-width: 400px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #22c55e;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
      ">✓</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Заявка отправлена!</h3>
      <p style="margin: 0 0 16px 0; opacity: 0.9; font-size: 14px;">Файлы загружены и отправлены. Мы свяжемся с вами в ближайшее время.</p>
      <button onclick="this.parentElement.parentElement.remove(); location.reload();" style="
        background: #22c55e;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(successDiv);
}

// Создание модального окна ошибки
export function createErrorModal(message: string): void {
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #dc2626;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 400px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #fbbf24;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
      ">!</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Ошибка отправки</h3>
      <p style="margin: 0 0 16px 0; opacity: 0.9; font-size: 14px;">${message}</p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #fbbf24;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(errorDiv);
}

// Создание модального окна ошибки для больших файлов
export function createFileSizeErrorModal(): void {
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #dc2626;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      z-index: 10000;
      max-width: 500px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #fbbf24;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
      ">!</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Файлы слишком большие</h3>
      <p style="margin: 0 0 16px 0; opacity: 0.9; font-size: 14px;">
        Попробуйте уменьшить размер файлов или свяжитесь с нами напрямую:<br>
        📞 <strong>+7 (901) 862-81-81</strong><br>
        📧 <strong>commerce@rusutil-1.ru</strong>
      </p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #fbbf24;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(errorDiv);
}

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
    
    const response = await fetch('https://formsubmit.co/ajax/commerce@rusutil-1.ru', {
      method: 'POST',
      body: singleFileFormData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Ошибка отправки файла ${file.name}: ${response.status}`);
    }
    
    console.log(`✅ Файл ${file.name} отправлен успешно`);
    
    // Небольшая задержка между отправками, чтобы не нагружать сервер
    if (i < formData.files.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
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
    
    const uploadResponse = await fetch('https://file.io', {
      method: 'POST',
      body: fileFormData
    });
    
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

// Отправка заявки без файлов через Ajax
export async function sendFormWithoutFiles(formData: AppFormData, cityInfo: string): Promise<void> {
  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('company', formData.company || 'Не указана');
  formDataToSend.append('city', cityInfo || 'Не указан');
  formDataToSend.append('plan', formData.selectedPlan || 'Не выбран');
  formDataToSend.append('message', formData.comment || 'Нет комментариев');
  formDataToSend.append('subject', 'Заявка на расчет стоимости утилизации IT оборудования с сайта utilizon.pro');
  formDataToSend.append('_captcha', 'false');
  formDataToSend.append('_template', 'table');
  formDataToSend.append('_next', 'https://utilizon.pro/success');
  formDataToSend.append('_error', 'https://utilizon.pro/error');
  
  const response = await fetch('https://formsubmit.co/ajax/commerce@rusutil-1.ru', {
    method: 'POST',
    body: formDataToSend,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  console.log('✅ FormSubmit результат:', response.status, response.statusText);
  
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
    try {
      const errorText = await response.text();
      console.error('❌ FormSubmit error details:', errorText);
    } catch (readError) {
      console.error('❌ Could not read FormSubmit error response');
    }
    console.error('❌ FormSubmit ошибка:', response.status, response.statusText);
    const errorText = await response.text();
    console.error('❌ Детали ошибки:', errorText);
    throw new Error(`Ошибка отправки через FormSubmit: ${response.status} ${response.statusText}`);
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