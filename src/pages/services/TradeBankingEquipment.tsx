import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function TradeBankingEquipment() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const equipmentTypes = [
    "IP камеры видеонаблюдения",
    "Весы для взвешивания в магазине",
    "Кассовое оборудование",
    "Кассы самообслуживания (КСО)",
    "Прайсчекер, Ручные сканеры, ТСД",
    "Инфокиоски, терминалы, банкоматы",
    "Терминалы по учету рабочего времени сотрудников",
    "Фискальный регистратор"
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Гарантированное уничтожение конфиденциальной информации с устройств"
    },
    {
      icon: "FileText",
      title: "Полная документация",
      description: "Акты утилизации для налогового и экологического учета"
    },
    {
      icon: "Truck",
      title: "Вывоз и демонтаж",
      description: "Самостоятельный демонтаж и транспортировка оборудования"
    },
    {
      icon: "Clock",
      title: "Быстрое оформление",
      description: "Оформление всех документов в течение 1-2 рабочих дней"
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
              <Badge className="mb-4 bg-emerald-600 hover:bg-emerald-700">
                Специализированная утилизация
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Торговое и банковское оборудование
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Профессиональная утилизация торгового и банковского оборудования с соблюдением всех требований безопасности
              </p>
            </div>
          </div>
        </section>

        {/* Equipment Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Что мы утилизируем
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Полный спектр торгового и банковского оборудования
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipmentTypes.map((equipment, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <Icon name="Check" size={20} className="text-professional-rolexGold flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{equipment}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Преимущества работы с нами
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Почему выбирают нашу компанию для утилизации торгового оборудования
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="mx-auto mb-4 w-16 h-16 bg-professional-rolexGold/10 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon} size={32} className="text-professional-rolexGold" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Как проходит утилизация
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Простой и прозрачный процесс от заявки до получения документов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-professional-rolexGold text-white rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Заявка</h3>
                <p className="text-gray-600">Оставляете заявку на сайте или по телефону</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-professional-rolexGold text-white rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Оценка</h3>
                <p className="text-gray-600">Проводим техническую экспертизу оборудования</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-professional-rolexGold text-white rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Вывоз</h3>
                <p className="text-gray-600">Демонтируем и вывозим оборудование</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-professional-rolexGold text-white rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Документы</h3>
                <p className="text-gray-600">Предоставляем полный пакет документов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Нужна утилизация торгового оборудования?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Получите бесплатную консультацию и расчет стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#calculator"
                className="inline-flex items-center gap-2 bg-professional-rolexGold text-white px-8 py-4 rounded-lg font-semibold hover:bg-professional-rolexGold/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Icon name="Calculator" size={20} className="text-white" />
                Рассчитать стоимость
              </a>
              <a 
                href="tel:+74951234567"
                className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Icon name="Phone" size={20} className="text-emerald-900" />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}