import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      category: "Компьютерная техника",
      icon: "Monitor",
      link: "/services/computer-equipment",
      items: [
        "Утилизация компьютерной техники (компьютеров, системных блоков)",
        "Утилизация ноутбуков",
        "Утилизация Мониторов (ЭЛТ, ЖК)",
        "Утилизация компьютерных ЗИП - запчасти, комплектующие"
      ]
    },
    {
      category: "Офисная техника",
      icon: "Printer",
      link: "/services/office-equipment",
      items: [
        "Утилизация МФУ в Москве и других регионах РФ",
        "Утилизация Принтеров",
        "Утилизация оргтехники",
        "Утилизация офисной техники",
        "Утилизация клавиатур, компьютерных мышей",
        "Утилизация офисных ЗИП - запчасти, комплектующие, картриджи"
      ]
    },
    {
      category: "Телекоммуникационное оборудование",
      icon: "Wifi",
      link: "/services/telecom-equipment",
      items: [
        "Утилизация аналоговых ТВ передатчиков",
        "Утилизация Сетевого оборудования (коммутаторы, свитчи, роутеры, маршрутизаторы и т.д)",
        "Утилизация телефонов в Москве и других регионах РФ (мобильных и стационарных) а также средств связи",
        "Утилизация GSM оборудования"
      ]
    },
    {
      category: "Серверное оборудование",
      icon: "Server",
      link: "/services/server-equipment",
      items: [
        "Утилизация Серверов",
        "Утилизация Серверных шкафов в сборе",
        "Утилизация Систем хранения данных (СХД)",
        "Системы охлаждения и управления",
        "Блоки питания и защитные устройства",
        "Источники бесперебойного питания (ИБП)"
      ]
    },
    {
      category: "Специализированные услуги",
      icon: "Settings",
      link: "/services/specialized-services",
      items: [
        "Утилизация оборудования (любого)",
        "Утилизация, демонтаж и вывоз любой старой техники, где есть платы",
        "Утилизация аккумуляторов",
        "Платы от компьютеров, а также любых других печатных плат с любых устройств"
      ]
    }
  ];

  const documents = [
    {
      name: "Акт технической экспертизы",
      description: "Документ с оценкой состояния оборудования",
      icon: "FileText"
    },
    {
      name: "Акт приема-передачи",
      description: "Подтверждение передачи оборудования на утилизацию",
      icon: "FileCheck"
    },
    {
      name: "Акт утилизации",
      description: "Официальное подтверждение проведенной утилизации",
      icon: "Shield"
    },
    {
      name: "Прочие закрывающие документы",
      description: "Полный пакет документов для отчетности",
      icon: "FolderOpen"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Наши услуги
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Полный спектр услуг по утилизации IT-оборудования с оформлением всех необходимых документов
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Виды утилизируемого оборудования
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Мы принимаем и утилизируем любую технику, содержащую электронные компоненты
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a key={index} href={service.link} className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 w-16 h-16 bg-professional-rolexGold/10 rounded-full flex items-center justify-center">
                        <Icon name={service.icon} size={32} className="text-professional-rolexGold" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <Icon name="Check" size={16} className="text-professional-rolexGold mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700">
                Документооборот
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                В услугу включены
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный пакет документов для соблюдения всех требований законодательства
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-14 h-14 bg-professional-rolexGold/10 rounded-full flex items-center justify-center">
                      <Icon name={doc.icon} size={24} className="text-professional-rolexGold" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {doc.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {doc.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы утилизировать оборудование?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Оставьте заявку и получите расчет стоимости услуг в течение 30 минут
            </p>
            <a 
              href="/#calculator"
              className="inline-flex items-center gap-2 bg-professional-rolexGold text-white px-8 py-4 rounded-lg font-semibold hover:bg-professional-rolexGold/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Icon name="Calculator" size={20} className="text-white" />
              Рассчитать стоимость
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}