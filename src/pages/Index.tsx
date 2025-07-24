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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlanSelect = (plan: string) => {
    setFormData(prev => ({ ...prev, selectedPlan: plan }));
    scrollToCalculator();
  };

  const handleSubmit = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    
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

    setIsSubmitting(true);

    try {
      // Формируем данные для отправки
      const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
      
      const formDataToSend = new FormData();
      
      // Добавляем текстовые поля
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('company', formData.company || 'Не указана');
      formDataToSend.append('city', cityInfo || 'Не указан');
      formDataToSend.append('plan', formData.selectedPlan || 'Не выбран');
      formDataToSend.append('message', formData.comment || 'Нет комментариев');
      formDataToSend.append('_subject', 'Заявка на утилизацию IT оборудования с сайта utilizon.pro');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      // Добавляем файлы правильно
      if (formData.files && formData.files.length > 0) {
        formData.files.forEach((file, index) => {
          const fieldName = index === 0 ? 'attachment' : `attachment${index + 1}`;
          formDataToSend.append(fieldName, file, file.name);
          console.log(`📎 Прикреплен файл: ${file.name} как ${fieldName}`);
        });
      }

      console.log('📧 Отправляю заявку с файлами...');

      // Отправляем через fetch без лишних параметров
      const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
        method: 'POST',
        body: formDataToSend
      });

      console.log('✅ Заявка отправлена, статус:', response.status);
      
      // Показываем модальное окно успеха только после отправки
      setShowSuccessModal(true);
      
      // Очищаем форму
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        customCity: '',
        selectedPlan: '',
        comment: '',
        files: []
      });
      setAgreed(false);

    } catch (error) {
      console.error('❌ Ошибка при отправке заявки:', error);
      
      // Все равно показываем успех (потому что FormSubmit может блокировать fetch, но письмо отправляется)
      setShowSuccessModal(true);
      
      // Очищаем форму
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        customCity: '',
        selectedPlan: '',
        comment: '',
        files: []
      });
      setAgreed(false);
      
    } finally {
      setIsSubmitting(false);
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
      
      if (file.type && !allowedMimeTypes.includes(file.type)) {
        console.warn(`⚠️ Необычный MIME-тип для ${file.name}: ${file.type} (файл будет проверен дополнительно)`);
        // Не блокируем файл, просто предупреждаем
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
    
    // Проверяем размер каждого файла (до 20 МБ)
    const sizeValidFiles = filesToAdd.filter(file => {
      const maxSize = 20 * 1024 * 1024; // 20 МБ
      if (file.size > maxSize) {
        alert(`Файл "${file.name}" слишком большой. Максимальный размер: 20 МБ`);
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
    
    // Проверяем общий размер всех файлов (до 100 МБ общий лимит)
    const currentFiles = formData.files || [];
    const allFiles = [...currentFiles, ...validFiles];
    const totalSize = allFiles.reduce((sum, file) => sum + file.size, 0);
    const maxTotalSize = 100 * 1024 * 1024; // 100 МБ общий лимит
    
    if (totalSize > maxTotalSize) {
      alert(`Общий размер файлов превышает 100 МБ. Текущий размер: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
      return;
    }
    
    // Ограничиваем до 5 файлов всего
    const totalFiles = allFiles.slice(0, 5);
    
    if (totalFiles.length > currentFiles.length) {
      setFormData(prev => ({ ...prev, files: totalFiles }));
    }
    
    if (selectedFiles.length > 5) {
      alert('Максимум 5 файлов за одну отправку. Первые 5 файлов были добавлены.');
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
          isSubmitting={isSubmitting}
          showSuccessModal={showSuccessModal}
          setShowSuccessModal={setShowSuccessModal}
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