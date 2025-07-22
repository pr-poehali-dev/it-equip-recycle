import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { useState, useRef } from "react";

const Index = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    equipmentType: 'Компьютеры и ноутбуки',
    quantity: '',
    comment: '',
    file: null as File | null
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = () => {
    console.log('Кнопка нажата!', formData);
    
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Пожалуйста, заполните обязательные поля: Имя, Телефон, Email');
      return;
    }
    
    try {
      const subject = 'Заявка на расчет стоимости утилизации';
      const body = `Имя: ${formData.name}
Компания: ${formData.company}
Телефон: ${formData.phone}
Email: ${formData.email}
Тип оборудования: ${formData.equipmentType}
Количество: ${formData.quantity}
Комментарий: ${formData.comment}${formData.file ? '\nПриложен файл: ' + formData.file.name : ''}`;
      
      const mailtoLink = `mailto:commerce@rusutil-1.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      console.log('Открываю mailto:', mailtoLink);
      window.open(mailtoLink, '_self');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке. Попробуйте еще раз.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };
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
      description: "Телефоны, планшеты и другие портативные устройства",
      price: "от 200₽"
    }
  ];

  const faqItems = [
    {
      question: "Как происходит вывоз оборудования?",
      answer: "Мы организуем вывоз в удобное для вас время. Наши специалисты приезжают с необходимым транспортом и упаковочными материалами."
    },
    {
      question: "Выдаете ли вы документы об утилизации?",
      answer: "Да, после утилизации мы предоставляем полный пакет документов: акт о передаче, справку об утилизации и экологический сертификат."
    },
    {
      question: "Какое оборудование принимаете?",
      answer: "Мы принимаем любое ИТ-оборудование: компьютеры, серверы, принтеры, мониторы, телефоны, кабели и комплектующие."
    },
    {
      question: "Есть ли минимальный объем для вывоза?",
      answer: "Минимальный объем для бесплатного вывоза - от 10 единиц техники. При меньшем объеме взимается доплата за выезд."
    }
  ];

  return (
    <div className="min-h-screen bg-professional-deepChocolate">
      {/* Header */}
      <header className="bg-professional-darkChocolate border-b border-professional-chocolate sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2 sm:space-x-3 ml-4 sm:ml-8">
              <Icon name="Recycle" size={24} className="text-primary sm:hidden" />
              <Icon name="Recycle" size={32} className="text-primary hidden sm:block" />
              <span className="text-white font-sans font-black text-xl sm:text-2xl md:text-3xl" style={{ letterSpacing: '0.1em', fontWeight: '950' }}>utilizon</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-white hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="text-white hover:text-primary transition-colors">О нас</a>
              <a href="#clients" className="text-white hover:text-primary transition-colors">Клиенты</a>
              <a href="#licenses" className="text-white hover:text-primary transition-colors">Лицензии</a>
              <a href="#faq" className="text-white hover:text-primary transition-colors">Вопросы</a>
              <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
            </nav>

            {/* Desktop Call Button */}
            <Button className="bg-primary hover:bg-primary/90 hidden sm:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white p-2">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-professional-darkChocolate border-l border-teal-600">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a 
                      href="#services" 
                      className="text-white hover:text-primary transition-colors text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Услуги
                    </a>
                    <a 
                      href="#prices" 
                      className="text-white hover:text-primary transition-colors text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Цены
                    </a>
                    <a 
                      href="#about" 
                      className="text-white hover:text-primary transition-colors text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      О нас
                    </a>
                    <a 
                      href="#clients" 
                      className="text-white hover:text-primary transition-colors text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Клиенты
                    </a>
                    <a 
                      href="#licenses" 
                      className="text-white hover:text-primary transition-colors text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Лицензии
                    </a>
                    <a 
                      href="#faq" 
                      className="text-white hover:text-primary transition-colors text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Вопросы
                    </a>
                    <a 
                      href="#contacts" 
                      className="text-white hover:text-primary transition-colors text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Контакты
                    </a>
                    <Button 
                      className="bg-primary hover:bg-primary/90 w-full mt-4" 
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                    >
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать звонок
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="hero-title mb-4 sm:mb-6">
            Профессиональная утилизация <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>ИТ-оборудования
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Экологически безопасная утилизация компьютерной техники с полным пакетом документов. 
            Соответствие всем требованиям законодательства.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 min-h-[48px] px-6" onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white !text-white hover:bg-white hover:text-primary bg-transparent min-h-[48px] px-6">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать прайс
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6 lg:p-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Лицензии и сертификаты</h3>
              <p className="text-white/90 text-sm">Полное соответствие экологическим требованиям</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Truck" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Бесплатный вывоз</h3>
              <p className="text-white/90 text-sm">От 10 единиц техники по Москве и Московской области</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="FileCheck" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Документооборот</h3>
              <p className="text-white/90 text-sm">Акты, справки и сертификаты об утилизации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-16 bg-professional-darkChocolate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4 text-white">География присутствия</h2>
            <p className="max-w-2xl mx-auto text-gray-200">
              Мы работаем во всех крупных городах России, обеспечивая быстрый и качественный сервис по утилизации ИТ-оборудования
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto bg-gray-200">
            {["Москва и Московская область", "Санкт-Петербург и Ленинградская область", "Новосибирск", "Екатеринбург", "Казань", "Н.Новгород", 
              "Челябинск", "Самара", "Омск", "Ростов-на-Дону", "Уфа", "Красноярск",
              "Воронеж", "Пермь", "Волгоград", "Краснодар", "Саратов", "Тюмень"].map((city, index) => (
              <div key={index} className="text-center p-3 bg-professional-lightGray rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">
                <Icon name="MapPin" size={16} className="mx-auto mb-2" />
                <div className="text-sm font-medium">{city}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="rounded-lg p-6 max-w-4xl mx-auto bg-slate-100 border border-slate-200">
              <Icon name="Phone" size={24} className="text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Единый федеральный номер</h3>
              <p className="text-slate-700 mb-4">
                Один номер для всех регионов России. Мы автоматически переадресуем ваш звонок в ближайший офис.
              </p>
              <div className="text-2xl font-bold text-teal-600">8 (901) 862-81-81</div>
              <div className="text-sm text-slate-600 mt-1">Звонок бесплатный из любого региона</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-900 mb-4">Быстрая оценка стоимости</h2>
            <p className="premium-body text-gray-700 max-w-2xl mx-auto">
              Прикрепите спецификацию оборудования и получите предварительную стоимость утилизации в течение 30 минут
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="bg-primary text-white text-center">
                <CardTitle className="text-2xl flex items-center justify-center">
                  <Icon name="Calculator" size={24} className="mr-2" />
                  Калькулятор стоимости утилизации
                </CardTitle>
                <CardDescription className="text-white/90">
                  Заполните форму и прикрепите спецификацию оборудования для точного расчета
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 sm:p-6 lg:p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Контактное лицо *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Компания</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                          placeholder="Название компании"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Телефон *</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Email *</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Город</label>
                      <select className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base">
                        <option value="">Выберите город</option>
                        <option>Москва и Московская область</option>
                        <option>Санкт-Петербург и Ленинградская область</option>
                        <option>Новосибирск</option>
                        <option>Екатеринбург</option>
                        <option>Казань</option>
                        <option>Нижний Новгород</option>
                        <option>Другой город</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">
                        📎 Спецификация оборудования *
                        <span className="text-xs text-gray-600 block mt-1">Прикрепите файл с описанием оборудования</span>
                      </label>
                      <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all duration-300 cursor-pointer bg-blue-50/50">
                        <Icon name="Upload" size={32} className="text-primary mx-auto mb-3" />
                        <p className="text-sm premium-body text-gray-700 mb-2">
                          <span className="text-primary font-semibold">Выберите файл</span> или перетащите сюда
                        </p>
                        <p className="text-xs text-gray-600">
                          Excel (.xlsx, .xls), Word (.docx, .doc), PDF • до 10 МБ
                        </p>
                        <input type="file" className="hidden" accept=".xlsx,.xls,.docx,.doc,.pdf" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Дополнительная информация</label>
                      <textarea 
                        className="w-full px-4 py-3 min-h-[88px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" 
                        placeholder="Укажите срочность, особые требования, вопросы по утилизации..."
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <div className="flex items-start space-x-3 mb-6">
                    <input type="checkbox" id="calc-agreement" className="mt-1 rounded border-gray-300 w-4 h-4" required />
                    <label htmlFor="calc-agreement" className="text-sm premium-body text-gray-700">
                      Согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и 
                      обработкой персональных данных. Подтверждаю, что указанная информация достоверна.
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <Button className="w-full min-h-[48px]" size="lg">
                      <Icon name="Calculator" size={20} className="mr-2" />
                      Получить расчет стоимости
                    </Button>
                    <Button variant="outline" className="w-full min-h-[48px]" size="lg">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Обсудить по телефону
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-center text-green-700">
                        <Icon name="Clock" size={16} className="mr-2" />
                        <span className="text-sm font-medium">Ответим в течение 30 минут в рабочее время</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Наши услуги</h2>
            <p className="premium-body text-gray-700 max-w-2xl mx-auto">
              Комплексное решение по утилизации любого ИТ-оборудования с соблюдением экологических норм
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover-scale">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Badge variant="outline" className="text-primary border-primary">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 text-[#ffffff]">Прозрачное ценообразование</h2>
            <p className="text-[#ffffff]">Стоимость зависит от типа и количества оборудования</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Стандартный</CardTitle>
                <CardDescription className="text-center">Для малого бизнеса</CardDescription>
                <div className="text-center">
                  <span className="premium-heading text-primary">от 500₽</span>
                  <span className="text-gray-600">/единица</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Утилизация компьютеров
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Акт передачи
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Вывоз от 10 единиц
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Справка об утилизации
                  </li>
                </ul>
                <Button className="w-full mt-6 min-h-[44px]">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Корпоративный</CardTitle>
                <CardDescription className="text-center">Для среднего бизнеса</CardDescription>
                <div className="text-center">
                  <span className="premium-heading text-primary">от 300₽</span>
                  <span className="text-gray-600">/единица</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Любое ИТ-оборудование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Полный пакет документов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Срочный вывоз 24/7
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Экологический сертификат
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Консультации по утилизации
                  </li>
                </ul>
                <Button className="w-full mt-6 min-h-[44px]">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Премиум</CardTitle>
                <CardDescription className="text-center">Для крупных компаний</CardDescription>
                <div className="text-center">
                  <span className="premium-heading text-primary">от 200₽</span>
                  <span className="text-gray-600">/единица</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Все виды техники
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Персональный менеджер
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Договор на обслуживание
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Сертификат ISO 14001
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Аудит утилизации
                  </li>
                </ul>
                <Button className="w-full mt-6 min-h-[44px]">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-gray-900 mb-6">О компании</h2>
              <p className="premium-body text-gray-700 mb-6">
                Мы специализируемся на профессиональной утилизации ИТ-оборудования с 2015 года. 
                За это время мы помогли более чем 800 компаниям экологически безопасно утилизировать 
                свое устаревшее оборудование.
              </p>
              <p className="premium-body text-gray-700 mb-6">
                Наша команда сертифицированных специалистов обеспечивает полное соответствие 
                процесса утилизации всем требованиям российского и международного законодательства.
              </p>
              <p className="premium-body text-gray-700 mb-8">
                <strong>Мы работаем во всех крупных городах России:</strong> Москва и Московская область, Санкт-Петербург и Ленинградская область, 
                Новосибирск, Екатеринбург, Казань, Нижний Новгород, Челябинск, Самара, Омск, Ростов-на-Дону, 
                Уфа, Красноярск, Воронеж, Пермь, Волгоград и других региональных центрах.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="premium-heading text-primary mb-2">800+</div>
                  <div className="premium-body text-gray-700">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="premium-heading text-primary mb-2">1000 000+</div>
                  <div className="premium-body text-gray-700">Единиц утилизировано</div>
                </div>
                <div className="text-center">
                  <div className="premium-heading text-primary mb-2">30+</div>
                  <div className="premium-body text-gray-700">Городов России</div>
                </div>
                <div className="text-center">
                  <div className="premium-heading text-primary mb-2">24/7</div>
                  <div className="premium-body text-gray-700">Поддержка клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Award" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Сертифицированные процессы</h4>
                    <p className="premium-body text-gray-700 text-sm">Соответствие ISO 14001 и российским стандартам</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Быстрое реагирование</h4>
                    <p className="premium-body text-gray-700 text-sm">Выезд в течение 24 часов после заявки</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Shield" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Полная ответственность</h4>
                    <p className="premium-body text-gray-700 text-sm">Страхование всех процессов утилизации</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Leaf" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Экологичность</h4>
                    <p className="premium-body text-gray-700 text-sm">100% переработка материалов без вреда природе</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Наши постоянные клиенты</h2>
            <p className="premium-body text-gray-700 max-w-2xl mx-auto">
              Нам доверяют ведущие российские компании из различных отраслей экономики
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {[
              { name: "X5 Retail Group", logo: "https://cdn.poehali.dev/files/057ea779-59d6-4be1-a312-e2355d930e8c.jpg", fill: false },
              { name: "МТС", logo: "https://cdn.poehali.dev/files/2ffe13fc-a676-47a8-9e46-0e5fec7ea564.png", fill: true },
              { name: "Альфа-Банк", logo: "https://cdn.poehali.dev/files/80317c5a-d49d-4df6-9bc8-cd40c8083959.jpg", fill: true },
              { name: "Мегафон", logo: "https://cdn.poehali.dev/files/72a8f653-8a39-464a-b090-83e4a4fd5cf1.jpg", fill: true },
              { name: "ВТБ Банк", logo: "https://cdn.poehali.dev/files/1f60c8b1-fb45-41e1-9478-2ca7b9ed7fb3.jpg", fill: true },
              { name: "АО Тандер", logo: "https://cdn.poehali.dev/files/07f9ba71-02cc-4f46-8908-f8b21ece5fa2.png", fill: false },
              { name: "Газпром", logo: "https://cdn.poehali.dev/files/832f6188-3e36-4516-88d6-d6594dc539b7.jpg", fill: true },
              { name: "РЖД", logo: "https://cdn.poehali.dev/files/7bd20793-9a6b-4c17-bc33-0c2c085b25c4.jpg", fill: true },
              { name: "Роснефть", logo: "https://cdn.poehali.dev/files/db70b93b-a8f4-4094-94a5-e803774e3c95.png", fill: false },
              { name: "СБЕР", logo: "https://cdn.poehali.dev/files/9d250503-5454-4120-9ac2-b95b40552a5a.jpg", fill: true },
              { name: "Сургутнефтегаз", logo: "https://cdn.poehali.dev/files/d4878f97-ab8e-4d50-a2cc-685ff5e98324.png", fill: true },
              { name: "Сетевая Компания", logo: "https://cdn.poehali.dev/files/05956c81-7d92-440c-95e5-1f23442dd970.jpg", fill: false },
              { name: "Аптечная Сеть 36.6", logo: "https://cdn.poehali.dev/files/70bf1c92-2e30-4b15-9e96-d58e3b135474.jpg", fill: false },
              { name: "Ozon", logo: "https://cdn.poehali.dev/files/16104369-f255-460e-ab4c-56e091f1eb94.png", fill: true },
              { name: "Яндекс", logo: "https://cdn.poehali.dev/files/11b91071-ec0c-4501-876d-f1b81cd5bd5f.jpg", fill: false },
              { name: "Ростелеком", logo: "https://cdn.poehali.dev/files/0bf6ea4c-a844-4b7b-ac5c-bb51ec55590f.png", fill: false },
              { name: "Сегежа", logo: "https://cdn.poehali.dev/files/93f1e2a8-a309-457f-80d2-c0e06cd65f42.png", fill: false },
              { name: "Магнит", logo: "https://cdn.poehali.dev/files/3ec18fc8-fae5-4eba-856c-92dfb085956e.png", fill: true },
              { name: "Честный Знак", logo: "https://cdn.poehali.dev/files/e6884e2b-d4e1-41d6-8aab-b48e3aa19aca.jpg", fill: false },
              { name: "Лента", logo: "https://cdn.poehali.dev/files/1a7d4131-a8ad-4d1f-8090-9779e8f83bf7.jpg", fill: false },
              { name: "АК Барс Банк", logo: "https://cdn.poehali.dev/files/e3bb5c6c-40ed-4f43-9576-8b3d7c13e0dd.png", fill: false },
              { name: "АО «СТРОЙГАЗМОНТАЖ»", logo: "https://cdn.poehali.dev/files/e063ff3c-542e-4f23-847d-b84ba4b62ab7.png", fill: false },
              { name: "ООО СИБУР", logo: "https://cdn.poehali.dev/files/74564939-0d84-437d-b786-af177e84f945.jpg", fill: true },
              { name: "ООО \"МАРС\"", logo: "https://cdn.poehali.dev/files/13488320-f16b-4768-87f6-d512709b9e37.png", fill: false },
              { name: "Красное-Белое", logo: "https://cdn.poehali.dev/files/621f0488-9829-467b-9fac-e3b6c0ee20e0.jpg", fill: false },
              { name: "АО Селектел", logo: "https://cdn.poehali.dev/files/a22ae5d4-8399-4de1-aaad-1edac937a295.jpg", fill: false },
              { name: "Авито", logo: "https://cdn.poehali.dev/files/1aa2eeb2-6e1d-4810-b06a-bf4d1fce4e96.png", fill: false },
              { name: "ТБанк", logo: "https://cdn.poehali.dev/files/e547fe52-d2b5-4a93-a328-6bc767ac0455.jpg", fill: true }
            ].map((client, index) => (
              <div key={index} className={`${client.fill ? 'p-0 overflow-hidden' : 'flex items-center justify-center p-4'} ${(client.name === 'СБЕР' || client.name === 'ООО СИБУР') ? 'p-2' : client.fill ? 'p-0' : 'p-4'} bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group aspect-square`}>
                <img 
                  src={client.logo} 
                  alt={`${client.name} логотип`}
                  className={`${client.fill ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'} filter group-hover:brightness-110 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
              <Icon name="Award" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Почему нас выбирают</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🏆 Проверенное качество</h4>
                  <p className="premium-body text-gray-700 text-sm">Работаем с крупнейшими компаниями России с 2015 года</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📋 Полный комплаенс</h4>
                  <p className="premium-body text-gray-700 text-sm">Соответствие всем требованиям корпоративного документооборота</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🔒 Конфиденциальность</h4>
                  <p className="premium-body text-gray-700 text-sm">Гарантированное уничтожение данных с носителей информации</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section id="licenses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-4">Лицензии и документы</h2>
            <p className="text-gray-100">Полное соответствие требованиям законодательства</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover-scale">
              <CardHeader>
                <Icon name="FileText" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Лицензия на утилизацию</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Лицензия Росприроднадзора на деятельность по сбору, транспортированию и обезвреживанию отходов
                </CardDescription>
                <Button variant="outline" className="mt-4 min-h-[44px]">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>ISO 14001</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Сертификат системы экологического менеджмента ISO 14001:2015
                </CardDescription>
                <Button variant="outline" className="mt-4 min-h-[44px]">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Страховой полис</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полис страхования ответственности при обращении с отходами производства
                </CardDescription>
                <Button variant="outline" className="mt-4 min-h-[44px]">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardHeader>
                <Icon name="Building" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Свидетельство СРО</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Членство в саморегулируемой организации в области обращения с отходами
                </CardDescription>
                <Button variant="outline" className="mt-4 min-h-[44px]">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 sm:p-6 lg:p-8 mt-12">
            <div className="text-center">
              <Icon name="Info" size={24} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-4">Документы, которые вы получите</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                <div>
                  <h4 className="font-semibold mb-2">Акт приема-передачи</h4>
                  <p className="premium-body text-gray-700 text-sm">Подтверждает факт передачи оборудования на утилизацию</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Справка об утилизации</h4>
                  <p className="premium-body text-gray-700 text-sm">Документ для налогового учета и экологической отчетности</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Экологический паспорт</h4>
                  <p className="premium-body text-gray-700 text-sm">Сертификат соответствия экологическим требованиям</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="premium-body text-gray-700">Ответы на популярные вопросы об утилизации ИТ-оборудования</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="premium-body text-gray-700 pt-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-200">Готовы ответить на ваши вопросы и принять заявку</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <Icon name="Phone" size={20} className="text-teal-400 mr-4" />
                  <div>
                    <div className="font-semibold text-slate-200">Телефон</div>
                    <div className="text-white font-medium">+7 (901) 862-81-81</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <Icon name="Mail" size={20} className="text-teal-400 mr-4" />
                  <div>
                    <div className="font-semibold text-slate-200">Email</div>
                    <div className="text-white font-medium">commerce@rusutil-1.ru</div>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <Icon name="MapPin" size={20} className="text-teal-400 mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-200">Головной офис</div>
                    <div className="text-white font-medium">г. Москва, ул. Лефортовский вал, дом 16А, этаж 1, помещение I, комната 21Б, офис 28</div>
                    <div className="text-sm text-teal-300 mt-1">Филиалы в 30+ городах России</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <Icon name="Clock" size={20} className="text-teal-400 mr-4" />
                  <div>
                    <div className="font-semibold text-slate-200">Режим работы</div>
                    <div className="text-white font-medium">Пн-Пт: 10:00-20:00</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-600 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-white mb-4">Экстренная утилизация 24/7 *</h4>
                <p className="text-gray-100 mb-4">Для срочных случаев мы предоставляем услугу экстренной утилизации в любое время суток. 

* Только Москва и Московская область, г. Казань.</p>
                <Button className="bg-white text-red-600 hover:bg-gray-100 min-h-[48px] px-4">
                  <Icon name="AlertCircle" size={16} className="mr-2" />
                  Экстренный вызов
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 30 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Имя</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Компания</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                      placeholder="Название компании"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Тип оборудования</label>
                  <select 
                    value={formData.equipmentType}
                    onChange={(e) => setFormData(prev => ({ ...prev, equipmentType: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  >
                    <option>Компьютеры и ноутбуки</option>
                    <option>Серверное оборудование</option>
                    <option>Офисная техника</option>
                    <option>Мобильные устройства</option>
                    <option>Смешанный тип</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Примерное количество</label>
                  <input 
                    type="number" 
                    value={formData.quantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                    placeholder="Количество единиц"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">
                    Спецификация оборудования
                    <span className="text-xs text-gray-600 ml-1">(Excel, Word, PDF)</span>
                  </label>
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-md p-4 sm:p-6 min-h-[80px] text-center hover:border-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Клик по области загрузки файла');
                      if (fileInputRef.current) {
                        console.log('Найден input файла через ref, вызываем click');
                        fileInputRef.current.click();
                      } else {
                        console.error('Не найден элемент через fileInputRef');
                      }
                    }}
                  >
                    <Icon name="Upload" size={24} className="text-gray-400 mx-auto mb-2" />
                    {formData.file ? (
                      <p className="text-sm text-green-600 mb-1">
                        ✓ Выбран файл: {formData.file.name}
                      </p>
                    ) : (
                      <p className="text-sm premium-body text-gray-700 mb-1">
                        <span className="text-primary font-medium">Нажмите для выбора файла</span> или перетащите сюда
                      </p>
                    )}
                    <p className="text-xs text-gray-400">Поддерживаются: .xlsx, .xls, .docx, .doc, .pdf (макс. 10 МБ)</p>
                  </div>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={(e) => {
                      console.log('Файл выбран:', e.target.files?.[0]);
                      handleFileChange(e);
                    }}
                    className="hidden" 
                    accept=".xlsx,.xls,.docx,.doc,.pdf" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Комментарий</label>
                  <textarea 
                    value={formData.comment}
                    onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[88px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" 
                    placeholder="Дополнительная информация, особые требования к утилизации..."
                  />
                </div>
                <div className="flex items-center space-x-2 text-sm premium-body text-gray-700">
                  <input type="checkbox" id="agreement" className="rounded border-gray-300 w-4 h-4" />
                  <label htmlFor="agreement">
                    Согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и 
                    <a href="#" className="text-primary hover:underline ml-1">условиями обработки данных</a>
                  </label>
                </div>
                <Button 
                  type="button"
                  className="w-full min-h-[48px]"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Клик по кнопке');
                    handleSubmit();
                  }}
                >
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Получить расчет стоимости
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:p-6 lg:p-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Recycle" size={24} className="text-primary" />
                <span className="text-xl font-bold">ИТ-Утилизация</span>
              </div>
              <p className="text-gray-200 text-sm mb-4">
                Профессиональная утилизация ИТ-оборудования с полным соблюдением экологических требований.
              </p>
              <div className="flex space-x-4">
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><a href="#" className="hover:text-primary transition-colors">Утилизация компьютеров</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Серверное оборудование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Офисная техника</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мобильные устройства</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>+7 (901) 862-81-81</li>
                <li>commerce@rusutil-1.ru</li>
                <li>г. Москва, ул. Лефортовский вал, дом 16А, этаж 1, помещение I, комната 21Б, офис 28</li>
                <li>Пн-Пт: 10:00-20:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-200">
            <p>© 2025 UTILIZON.PRO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;