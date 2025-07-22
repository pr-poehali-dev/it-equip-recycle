import { useState, useRef } from "react";

// Import all section components
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import GeographySection from "@/components/sections/GeographySection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricesSection from "@/components/sections/PricesSection";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import LicensesSection from "@/components/sections/LicensesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    customCity: '',
    comment: '',
    file: null as File | null,
    equipmentType: 'Компьютеры и ноутбуки',
    quantity: '',
    selectedPlan: ''
  });
  
  const [agreed, setAgreed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePlanSelect = (planName: string) => {
    setFormData(prev => ({ ...prev, selectedPlan: planName }));
    // Прокрутка к форме заявки
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e?: React.MouseEvent) => {
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
    
    const subject = 'Заявка на расчет стоимости утилизации';
    const body = `Заявка на расчет стоимости утилизации

Контактные данные:
Имя: ${formData.name}
Компания: ${formData.company || 'Не указана'}
Телефон: ${formData.phone}
Email: ${formData.email}
${formData.selectedPlan ? `Выбранный план: ${formData.selectedPlan}` : ''}

Дополнительная информация: ${formData.comment || 'Не указана'}
${formData.file ? `Приложен файл спецификации: ${formData.file.name}` : 'Файл спецификации не приложен'}

---
Заявка отправлена с сайта utilizon.ru`;
    
    const mailtoLink = `mailto:commerce@rusutil-1.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    console.log('📧 Открываю почтовую программу:', mailtoLink);
    
    // Попробуем разные способы открытия
    try {
      window.location.href = mailtoLink;
      
      // Показываем стилизованное сообщение об успехе
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
            font-size: 16px;
            color: white;
            font-weight: bold;
          ">✓</div>
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Подтвердите действие на utilizon.pro</h3>
          <p style="margin: 0; opacity: 0.9; font-size: 14px;">Заявка готова к отправке! Откроется ваша почтовая программа.</p>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: #D4AF37;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 6px;
            margin-top: 16px;
            cursor: pointer;
            font-weight: 600;
          ">OK</button>
        </div>
      `;
      document.body.appendChild(successDiv);
      
      // Автоматически убираем через 5 секунд
      setTimeout(() => {
        if (successDiv.parentElement) {
          successDiv.remove();
        }
      }, 5000);
      
    } catch (error) {
      console.error('❌ Ошибка при открытии почтовой программы:', error);
      alert(`Скопируйте данные и отправьте на commerce@rusutil-1.ru:\n\n${body}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  // Static data arrays
  const services = [
    {
      icon: "Monitor",
      title: "Утилизация компьютеров",
      description: "Профессиональная утилизация настольных ПК, ноутбуков и комплектующих",
      price: "от 400₽"
    },
    {
      icon: "Printer",
      title: "Офисная техника",
      description: "Принтеры, сканеры, копиры и многофункциональные устройства",
      price: "от 200₽"
    },
    {
      icon: "Server",
      title: "Серверное оборудование",
      description: "Утилизация серверов, сетевого оборудования и систем хранения",
      price: "от 500₽"
    },
    {
      icon: "Smartphone",
      title: "Мобильные устройства",
      description: "Утилизация смартфонов, планшетов и другой мобильной техники",
      price: "от 200₽"
    }
  ];

  const faqItems = [
    {
      question: "Какие документы нужны для утилизации ИТ-оборудования?",
      answer: "Для утилизации необходимы: копия паспорта или устава организации, доверенность на лицо, сдающее технику, опись передаваемого оборудования. Мы поможем подготовить все документы."
    },
    {
      question: "Какие гарантии уничтожения данных вы предоставляете?",
      answer: "Мы гарантируем полное уничтожение данных согласно стандарту ГОСТ Р 50739-95. Выдаем сертификат об уничтожении информации с указанием серийных номеров накопителей."
    },
    {
      question: "Какие экологические стандарты вы соблюдаете?",
      answer: "Мы работаем в соответствии с требованиями ISO 14001, имеем лицензию Росприроднадзора и соблюдаем все нормы экологического законодательства РФ."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main className="flex-1">
        <HeroSection />
        <GeographySection />
        <CalculatorSection 
          formData={formData}
          setFormData={setFormData}
          agreed={agreed}
          setAgreed={setAgreed}
          fileInputRef={fileInputRef}
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
        />
        <ServicesSection services={services} />
        <PricesSection onPlanSelect={handlePlanSelect} />
        <AboutSection />
        <ClientsSection />
        <LicensesSection />
        <FAQSection faqItems={faqItems} />
        <ContactsSection 
          formData={formData}
          setFormData={setFormData}
          fileInputRef={fileInputRef}
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;