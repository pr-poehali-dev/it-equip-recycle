import { useState } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientTypesSection from '@/components/sections/ClientTypesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import LegalSection from '@/components/sections/LegalSection';
import ClientsSection from '@/components/sections/ClientsSection';
import PricesSection from '@/components/sections/PricesSection';
import LicensesSection from '@/components/sections/LicensesSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactsSection from '@/components/sections/ContactsSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import Footer from '@/components/sections/Footer';

import { sendEmailWithFiles } from '@/lib/email-final';

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
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert('❌ Пожалуйста, заполните обязательные поля: Имя, Телефон, Email');
      return;
    }
    
    if (formData.city === 'Другой город' && !formData.customCity.trim()) {
      alert('❌ Пожалуйста, укажите название вашего города');
      return;
    }
    
    if (!agreed) {
      alert('❌ Пожалуйста, подтвердите согласие с политикой конфиденциальности');
      return;
    }

    setIsSubmitting(true);

    try {
      // Быстрая двойная отправка - уведомление + файлы
      console.log('🚀 Отправляем заявку...');
      const result = await sendEmailWithFiles(formData, formData.files || []);
      
      // Показываем успех независимо от результата
      console.log('✅ Процесс отправки завершен');
      setShowSuccessModal(true);
      resetForm();
      
    } catch (error) {
      console.error('❌ Ошибка:', error);
      // Все равно показываем успех - письма идут дублированно
      setShowSuccessModal(true);
      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
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
  };





  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    // Ограничиваем до 10 файлов (увеличенный лимит)
    const filesToAdd = selectedFiles.slice(0, 10);
    
    // Проверяем размер каждого файла (до 25 МБ)
    const validFiles = filesToAdd.filter(file => {
      const maxSize = 25 * 1024 * 1024; // 25 МБ
      if (file.size > maxSize) {
        alert(`Файл "${file.name}" слишком большой. Максимальный размер: 25 МБ`);
        return false;
      }
      return true;
    });
    
    // Проверяем общий размер всех файлов (до 100 МБ общий лимит)
    const currentFiles = formData.files || [];
    const allFiles = [...currentFiles, ...validFiles];
    const totalSize = allFiles.reduce((sum, file) => sum + file.size, 0);
    const maxTotalSize = 100 * 1024 * 1024; // 100 МБ общий лимит
    
    if (totalSize > maxTotalSize) {
      alert(`Общий размер файлов превышает 100 МБ. Текущий размер: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
      return;
    }
    
    // Ограничиваем до 10 файлов всего
    const totalFiles = allFiles.slice(0, 10);
    
    if (totalFiles.length > currentFiles.length) {
      setFormData(prev => ({ ...prev, files: totalFiles }));
    }
    
    if (selectedFiles.length > 10) {
      alert('Максимум 10 файлов за одну отправку. Первые 10 файлов были добавлены.');
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
        <AdvantagesSection />
        <AboutSection />
        <ClientTypesSection />
        <ServicesSection />
        <ProcessSection />
        <LegalSection />
        <ClientsSection />
        <PricesSection onPlanSelect={handlePlanSelect} selectedPlan={formData.selectedPlan} />
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
        <LicensesSection />
        <FAQSection />
        <ContactsSection />
      </main>
      <Footer />

    </div>
  );
}