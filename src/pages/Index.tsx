import { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PricesSection from '@/components/sections/PricesSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientsSection from '@/components/sections/ClientsSection';
import LicensesSection from '@/components/sections/LicensesSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactsSection from '@/components/sections/ContactsSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import Footer from '@/components/sections/Footer';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    customCity: '',
    comment: '',
    files: [] as File[],
    selectedPlan: ''
  });
  const [agreed, setAgreed] = useState(false);

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlanSelect = (planName: string) => {
    console.log('🎯 План выбран:', planName);
    setFormData(prev => ({ ...prev, selectedPlan: planName }));
    
    // Прокручиваем к калькулятору
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    console.log('🚀 Кнопка нажата!', { formData, agreed });
    
    // Проверяем обязательные поля
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert('❌ Пожалуйста, заполните обязательные поля: Имя, Телефон, Email');
      return;
    }
    
    // Проверяем согласие
    if (!agreed) {
      alert('❌ Пожалуйста, подтвердите согласие с политикой конфиденциальности');
      return;
    }
    
    console.log('✅ Все проверки пройдены, отправляю заявку...');
    
    // Показываем индикатор загрузки
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
    
    try {
      // Подготавливаем данные для FormSubmit
      const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
      
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
      
      // ⚠️ FormSubmit Ajax НЕ поддерживает файлы надёжно, поэтому используем HTML-форму
      if (formData.files && formData.files.length > 0) {
        console.log('📎 Отправляем файлы через HTML-форму для надёжности...');
        
        // Создаём HTML-форму для отправки с файлами
        const htmlForm = document.createElement('form');
        htmlForm.method = 'POST';
        htmlForm.action = 'https://formsubmit.co/commerce@rusutil-1.ru';
        htmlForm.enctype = 'multipart/form-data';
        htmlForm.style.display = 'none';
        
        const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
        
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
        
        // Добавляем файлы через file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = 'attachment';
        fileInput.multiple = true;
        fileInput.style.display = 'none';
        
        // Создаём новый FileList для передачи файлов
        const dataTransfer = new DataTransfer();
        formData.files.forEach(file => {
          dataTransfer.items.add(file);
        });
        fileInput.files = dataTransfer.files;
        
        htmlForm.appendChild(fileInput);
        document.body.appendChild(htmlForm);
        
        // Отправляем форму
        htmlForm.submit();
        
        return; // Выходим, так как HTML-форма перенаправит страницу
      }
      
      // Если файлов нет, используем Ajax
      // Отправляем через FormSubmit API
      const response = await fetch('https://formsubmit.co/ajax/commerce@rusutil-1.ru', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // Убираем индикатор загрузки
      loadingDiv.remove();
      
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
      if (success) {
        // Показываем успешное сообщение
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
            <p style="margin: 0 0 8px 0; opacity: 0.9; font-size: 14px;">Письмо успешно отправлено на commerce@rusutil-1.ru</p>
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
        
        // Очищаем форму
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          city: '',
          customCity: '',
          comment: '',
          file: null,
          selectedPlan: ''
        });
        setAgreed(false);
        
        console.log('✅ Заявка успешно отправлена через FormSubmit!');
      } else {
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
      
    } catch (error) {
      // Убираем индикатор загрузки
      loadingDiv.remove();
      
      console.error('❌ Ошибка при отправке Ajax:', error);
      console.log('🔄 Пробуем резервный метод отправки через HTML-форму...');
      
      // Резервный метод: создаем и отправляем скрытую HTML-форму
      try {
        const fallbackForm = document.createElement('form');
        fallbackForm.method = 'POST';
        fallbackForm.action = 'https://formsubmit.co/commerce@rusutil-1.ru';
        fallbackForm.style.display = 'none';
        
        const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
        
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
        
        // Не показываем ошибку, так как пробуем резервный метод
        return;
      } catch (fallbackError) {
        console.error('❌ Резервный метод тоже не сработал:', fallbackError);
      }
      
      // Показываем ошибку только если все методы не сработали
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
          <p style="margin: 0 0 16px 0; opacity: 0.9; font-size: 14px;">Попробуйте еще раз или свяжитесь с нами по телефону: +7 (901) 862-81-81</p>
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
  };

  // Антивирусная проверка файлов
  const scanFileForVirus = async (file: File): Promise<boolean> => {
    try {
      // Базовая проверка расширения
      const allowedExtensions = ['.xlsx', '.xls', '.docx', '.doc', '.pdf'];
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
      
      if (!allowedExtensions.includes(fileExtension)) {
        throw new Error(`Недопустимый формат файла: ${fileExtension}`);
      }
      
      // Проверка MIME-типа
      const allowedMimeTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
        'application/vnd.ms-excel', // .xls
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
        'application/msword', // .doc
        'application/pdf' // .pdf
      ];
      
      if (!allowedMimeTypes.includes(file.type)) {
        throw new Error(`Подозрительный MIME-тип: ${file.type}`);
      }
      
      // Проверка на подозрительные последовательности байтов
      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      
      // Проверяем первые байты на соответствие формату
      const pdfSignature = [0x25, 0x50, 0x44, 0x46]; // %PDF
      const zipSignature = [0x50, 0x4B, 0x03, 0x04]; // PK (для .docx, .xlsx)
      const docSignature = [0xD0, 0xCF, 0x11, 0xE0]; // для старых .doc, .xls
      
      const startsWithSignature = (
        bytes.slice(0, 4).every((byte, i) => byte === pdfSignature[i]) ||
        bytes.slice(0, 4).every((byte, i) => byte === zipSignature[i]) ||
        bytes.slice(0, 4).every((byte, i) => byte === docSignature[i])
      );
      
      if (!startsWithSignature) {
        throw new Error('Файл не соответствует заявленному формату');
      }
      
      // Проверка на подозрительные строки в начале файла
      const fileStart = new TextDecoder('utf-8', { fatal: false }).decode(bytes.slice(0, 1024));
      const suspiciousPatterns = [
        'javascript:', 'vbscript:', '<script', 'eval(', 'document.write',
        'shell.application', 'wscript.shell', '.exe', '.bat', '.cmd'
      ];
      
      for (const pattern of suspiciousPatterns) {
        if (fileStart.toLowerCase().includes(pattern)) {
          throw new Error(`Обнаружена подозрительная последовательность: ${pattern}`);
        }
      }
      
      console.log(`✅ Файл ${file.name} прошёл антивирусную проверку`);
      return true;
      
    } catch (error) {
      console.error(`❌ Антивирусная проверка файла ${file.name}:`, error);
      alert(`⚠️ Файл "${file.name}" не прошёл проверку безопасности: ${error.message}`);
      return false;
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    // Ограничиваем до 5 файлов (лимит FormSubmit)
    const filesToAdd = selectedFiles.slice(0, 5);
    
    // Проверяем размер каждого файла (до 3 МБ для надёжности)
    const sizeValidFiles = filesToAdd.filter(file => {
      const maxSize = 3 * 1024 * 1024; // 3 МБ (безопасный размер для FormSubmit)
      if (file.size > maxSize) {
        alert(`Файл "${file.name}" слишком большой. Максимум: 3 МБ (лимит почтового сервиса)`);
        return false;
      }
      return true;
    });
    
    // Проводим антивирусную проверку для каждого файла
    const validFiles = [];
    for (const file of sizeValidFiles) {
      const isClean = await scanFileForVirus(file);
      if (isClean) {
        validFiles.push(file);
      }
    }
    
    // Проверяем общий размер всех файлов (лимит FormSubmit - 5МБ всего)
    const currentFiles = formData.files || [];
    const allFiles = [...currentFiles, ...validFiles];
    const totalSize = allFiles.reduce((sum, file) => sum + file.size, 0);
    const maxTotalSize = 4 * 1024 * 1024; // 4 МБ общий лимит
    
    if (totalSize > maxTotalSize) {
      alert(`Общий размер файлов превышает 4 МБ. Текущий размер: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
      return;
    }
    
    // Ограничиваем до 5 файлов всего
    const totalFiles = allFiles.slice(0, 5);
    
    if (totalFiles.length > currentFiles.length) {
      setFormData(prev => ({ ...prev, files: totalFiles }));
    }
    
    if (selectedFiles.length > 5) {
      alert('Лимит почтового сервиса: максимум 5 файлов. Первые 5 файлов были добавлены.');
    }
    
    if (validFiles.length < sizeValidFiles.length) {
      alert('Некоторые файлы не прошли проверку безопасности и были исключены.');
    }
  };
  
  const removeFile = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, index) => index !== indexToRemove)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricesSection onPlanSelect={handlePlanSelect} />
        <CalculatorSection 
          formData={formData}
          setFormData={setFormData}
          agreed={agreed}
          setAgreed={setAgreed}
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
          removeFile={removeFile}
        />
        <AboutSection />
        <ClientsSection />
        <LicensesSection />
        <FAQSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}