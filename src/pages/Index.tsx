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
    file: null as File | null,
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
      
      // Добавляем файл если есть
      if (formData.file) {
        formDataToSend.append('attachment', formData.file);
      }

      // Отправляем через FormSubmit
      const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // Убираем индикатор загрузки
      loadingDiv.remove();
      
      console.log('✅ FormSubmit результат:', response.status, response.statusText);
      
      // FormSubmit может возвращать разные статусы при успехе
      if (response.ok || response.status === 200 || response.status === 302) {
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
        console.error('❌ FormSubmit ошибка:', response.status, response.statusText);
        const errorText = await response.text();
        console.error('❌ Детали ошибки:', errorText);
        throw new Error(`Ошибка отправки через FormSubmit: ${response.status} ${response.statusText}`);
      }
      
    } catch (error) {
      // Убираем индикатор загрузки
      loadingDiv.remove();
      
      console.error('❌ Ошибка отправки:', error);
      
      // Показываем ошибку
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
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