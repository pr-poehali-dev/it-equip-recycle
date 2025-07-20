import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Recycle" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-white">ИТ-Утилизация</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-white hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="text-white hover:text-primary transition-colors">О нас</a>
              <a href="#licenses" className="text-white hover:text-primary transition-colors">Лицензии</a>
              <a href="#faq" className="text-white hover:text-primary transition-colors">Вопросы</a>
              <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-professional-darkChocolate to-professional-chocolate text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Профессиональная утилизация <br />
            ИТ-оборудования
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
            Экологически безопасная утилизация компьютерной техники с полным пакетом документов. 
            Соответствие всем требованиям законодательства.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать прайс
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Лицензии и сертификаты</h3>
              <p className="text-amber-100 text-sm">Полное соответствие экологическим требованиям</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Truck" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Бесплатный вывоз</h3>
              <p className="text-amber-100 text-sm">От 10 единиц техники по Москве и области</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="FileCheck" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Документооборот</h3>
              <p className="text-amber-100 text-sm">Акты, справки и сертификаты об утилизации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-16 bg-professional-darkChocolate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-300">География присутствия</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Мы работаем во всех крупных городах России, обеспечивая быстрый и качественный сервис по утилизации ИТ-оборудования
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto bg-gray-200">
            {["Москва", "СПб", "Новосибирск", "Екатеринбург", "Казань", "Н.Новгород", 
              "Челябинск", "Самара", "Омск", "Ростов-на-Дону", "Уфа", "Красноярск",
              "Воронеж", "Пермь", "Волгоград", "Краснодар", "Саратов", "Тюмень"].map((city, index) => (
              <div key={index} className="text-center p-3 bg-professional-lightGray rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">
                <Icon name="MapPin" size={16} className="mx-auto mb-2" />
                <div className="text-sm font-medium">{city}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="rounded-lg p-6 max-w-4xl mx-auto bg-gray-200">
              <Icon name="Phone" size={24} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Единый федеральный номер</h3>
              <p className="text-gray-600 mb-4">
                Один номер для всех регионов России. Мы автоматически переадресуем ваш звонок в ближайший офис.
              </p>
              <div className="text-2xl font-bold text-primary">8 (901) 862-81-81</div>
              <div className="text-sm text-gray-500 mt-1">Звонок бесплатный из любого региона</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Быстрая оценка стоимости</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                <CardDescription className="text-amber-100">
                  Заполните форму и прикрепите спецификацию оборудования для точного расчета
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Контактное лицо *</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Компания</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                          placeholder="Название компании"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон *</label>
                        <input 
                          type="tel" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Email *</label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Город</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Выберите город</option>
                        <option>Москва</option>
                        <option>Санкт-Петербург</option>
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
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        📎 Спецификация оборудования *
                        <span className="text-xs text-gray-500 block mt-1">Прикрепите файл с описанием оборудования</span>
                      </label>
                      <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all duration-300 cursor-pointer bg-blue-50/50">
                        <Icon name="Upload" size={32} className="text-primary mx-auto mb-3" />
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="text-primary font-semibold">Выберите файл</span> или перетащите сюда
                        </p>
                        <p className="text-xs text-gray-500">
                          Excel (.xlsx, .xls), Word (.docx, .doc), PDF • до 10 МБ
                        </p>
                        <input type="file" className="hidden" accept=".xlsx,.xls,.docx,.doc,.pdf" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Дополнительная информация</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none" 
                        placeholder="Укажите срочность, особые требования, вопросы по утилизации..."
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <div className="flex items-start space-x-3 mb-6">
                    <input type="checkbox" id="calc-agreement" className="mt-1 rounded border-gray-300" required />
                    <label htmlFor="calc-agreement" className="text-sm text-gray-600">
                      Согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и 
                      обработкой персональных данных. Подтверждаю, что указанная информация достоверна.
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="w-full" size="lg">
                      <Icon name="Calculator" size={20} className="mr-2" />
                      Получить расчет стоимости
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Прозрачное ценообразование</h2>
            <p className="text-gray-600">Стоимость зависит от типа и количества оборудования</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Стандартный</CardTitle>
                <CardDescription className="text-center">Для малого бизнеса</CardDescription>
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">от 500₽</span>
                  <span className="text-gray-500">/единица</span>
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
                <Button className="w-full mt-6">Выбрать план</Button>
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
                  <span className="text-3xl font-bold text-primary">от 300₽</span>
                  <span className="text-gray-500">/единица</span>
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
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Премиум</CardTitle>
                <CardDescription className="text-center">Для крупных компаний</CardDescription>
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">от 200₽</span>
                  <span className="text-gray-500">/единица</span>
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
                <Button className="w-full mt-6">Связаться с нами</Button>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">О компании</h2>
              <p className="text-gray-600 mb-6">
                Мы специализируемся на профессиональной утилизации ИТ-оборудования с 2015 года. 
                За это время мы помогли более чем 500 компаниям экологически безопасно утилизировать 
                свое устаревшее оборудование.
              </p>
              <p className="text-gray-600 mb-6">
                Наша команда сертифицированных специалистов обеспечивает полное соответствие 
                процесса утилизации всем требованиям российского и международного законодательства.
              </p>
              <p className="text-gray-600 mb-8">
                <strong>Мы работаем во всех крупных городах России:</strong> Москва, Санкт-Петербург, 
                Новосибирск, Екатеринбург, Казань, Нижний Новгород, Челябинск, Самара, Омск, Ростов-на-Дону, 
                Уфа, Красноярск, Воронеж, Пермь, Волгоград и других региональных центрах.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50 000+</div>
                  <div className="text-gray-600">Единиц утилизировано</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <div className="text-gray-600">Городов России</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Award" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Сертифицированные процессы</h4>
                    <p className="text-gray-600 text-sm">Соответствие ISO 14001 и российским стандартам</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Быстрое реагирование</h4>
                    <p className="text-gray-600 text-sm">Выезд в течение 24 часов после заявки</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Shield" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Полная ответственность</h4>
                    <p className="text-gray-600 text-sm">Страхование всех процессов утилизации</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Leaf" size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Экологичность</h4>
                    <p className="text-gray-600 text-sm">100% переработка материалов без вреда природе</p>
                  </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Лицензии и документы</h2>
            <p className="text-gray-300">Полное соответствие требованиям законодательства</p>
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
                <Button variant="outline" className="mt-4">
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
                <Button variant="outline" className="mt-4">
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
                <Button variant="outline" className="mt-4">
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
                <Button variant="outline" className="mt-4">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mt-12">
            <div className="text-center">
              <Icon name="Info" size={24} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-4">Документы, которые вы получите</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                <div>
                  <h4 className="font-semibold mb-2">Акт приема-передачи</h4>
                  <p className="text-gray-600 text-sm">Подтверждает факт передачи оборудования на утилизацию</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Справка об утилизации</h4>
                  <p className="text-gray-600 text-sm">Документ для налогового учета и экологической отчетности</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Экологический паспорт</h4>
                  <p className="text-gray-600 text-sm">Сертификат соответствия экологическим требованиям</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600">Ответы на популярные вопросы об утилизации ИТ-оборудования</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
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
            <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-300">Готовы ответить на ваши вопросы и принять заявку</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-white">+7 (985) 550-06-73</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white">commerce@rusutil-1.ru</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Головной офис</div>
                    <div className="text-white">г. Москва, ул. Лефортовский вал, дом 16А, этаж 1, помещение I, комната 21Б, офис 28</div>
                    <div className="text-sm text-primary mt-1">Филиалы в 30+ городах России</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-white">Пн-Пт: 9:00-18:00, Сб-Вс: выезд по заявкам</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-600 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-white mb-4">Экстренная утилизация 24/7</h4>
                <p className="text-gray-100 mb-4">
                  Для срочных случаев мы предоставляем услугу экстренной утилизации в любое время суток.
                </p>
                <Button className="bg-white text-red-600 hover:bg-gray-100">
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Компания</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Название компании"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Тип оборудования</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Компьютеры и ноутбуки</option>
                    <option>Серверное оборудование</option>
                    <option>Офисная техника</option>
                    <option>Мобильные устройства</option>
                    <option>Смешанный тип</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Примерное количество</label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="Количество единиц"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Спецификация оборудования
                    <span className="text-xs text-gray-500 ml-1">(Excel, Word, PDF)</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Icon name="Upload" size={24} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="text-primary font-medium">Нажмите для выбора файла</span> или перетащите сюда
                    </p>
                    <p className="text-xs text-gray-400">Поддерживаются: .xlsx, .xls, .docx, .doc, .pdf (макс. 10 МБ)</p>
                    <input type="file" className="hidden" accept=".xlsx,.xls,.docx,.doc,.pdf" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Комментарий</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-20 resize-none" 
                    placeholder="Дополнительная информация, особые требования к утилизации..."
                  />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" id="agreement" className="rounded border-gray-300" />
                  <label htmlFor="agreement">
                    Согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и 
                    <a href="#" className="text-primary hover:underline ml-1">условиями обработки данных</a>
                  </label>
                </div>
                <Button className="w-full">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Recycle" size={24} className="text-primary" />
                <span className="text-xl font-bold">ИТ-Утилизация</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Профессиональная утилизация ИТ-оборудования с полным соблюдением экологических требований.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Linkedin" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Утилизация компьютеров</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Серверное оборудование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Офисная техника</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мобильные устройства</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+7 (985) 550-06-73</li>
                <li>commerce@rusutil-1.ru</li>
                <li>г. Москва, ул. Примерная, д. 123</li>
                <li>Пн-Пт: 10:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>© 2025 СБОР-Утилизация. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;