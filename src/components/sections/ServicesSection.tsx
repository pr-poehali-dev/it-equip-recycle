import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function ServicesSection() {
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
      category: "Торговое и банковское оборудование",
      icon: "CreditCard",
      link: "/services/trade-banking-equipment",
      items: [
        "IP камеры видеонаблюдения",
        "Весы для взвешивания в магазине",
        "Кассовое оборудование",
        "Кассы самообслуживания (КСО)",
        "Прайсчекер, Ручные сканеры",
        "Инфокиоски, терминалы, банкоматы",
        "Счетчик банкнот",
        "Терминалы по учету рабочего времени сотрудников",
        "Термопринтер",
        "Тонкие клиенты",
        "Точка доступа",
        "ТСД",
        "Фискальный регистратор"
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

  return (
    <section id="services" className="py-20 bg-professional-rolexCream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Наши услуги</h2>
          <p className="premium-body text-gray-700 max-w-2xl mx-auto">
            Полный спектр услуг по утилизации IT-оборудования с оформлением всех необходимых документов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <a 
            href="/services"
            className="inline-flex items-center gap-2 bg-professional-rolexGold text-white px-8 py-4 rounded-lg font-semibold hover:bg-professional-rolexGold/90 transition-colors duration-300"
          >
            <Icon name="ArrowRight" size={20} />
            Подробнее об услугах
          </a>
        </div>
      </div>
    </section>
  );
}