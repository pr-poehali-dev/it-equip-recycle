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
    quantity: ''
  });
  
  const [agreed, setAgreed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

Дополнительная информация: ${formData.comment || 'Не указана'}
${formData.file ? `Приложен файл спецификации: ${formData.file.name}` : 'Файл спецификации не приложен'}

---
Заявка отправлена с сайта utilizon.ru`;
    
    const mailtoLink = `mailto:commerce@rusutil-1.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    console.log('📧 Открываю почтовую программу:', mailtoLink);
    
    // Попробуем разные способы открытия
    try {
      window.location.href = mailtoLink;
      alert('✅ Заявка готова к отправке! Откроется ваша почтовая программа.');
    } catch (error) {
      console.error('❌ Ошибка при открытии почтовой программы:', error);
      // Запасной вариант - показать данные пользователю
      alert(`Скопируйте данные и отправьте на commerce@rusutil-1.ru:

${body}`);
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
      price: "от 500₽"
    },
    {
      icon: "Printer",
      title: "Офисная техника",
      description: "Принтеры, сканеры, копиры и многофункциональные устройства",
      price: "от 300₽"
    },
    {
      icon: "Server",
      title: "Серверное оборудование",
      description: "Утилизация серверов, сетевого оборудования и систем хранения",
      price: "от 1500₽"
    },
    {
      icon: "Smartphone",
      title: "Мобильные устройства",
      description: "Утилизация смартфонов, планшетов и другой мобильной техники",
      price: "от 100₽"
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
        <PricesSection />
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