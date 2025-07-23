import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Terms() {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'general', title: 'Общие положения', icon: 'FileText' },
    { id: 'services', title: 'Описание услуг', icon: 'Recycle' },
    { id: 'obligations', title: 'Права и обязанности', icon: 'Users' },
    { id: 'payment', title: 'Порядок оплаты', icon: 'CreditCard' },
    { id: 'liability', title: 'Ответственность', icon: 'Shield' },
    { id: 'force-majeure', title: 'Форс-мажор', icon: 'AlertTriangle' },
    { id: 'dispute', title: 'Разрешение споров', icon: 'Scale' },
    { id: 'final', title: 'Заключительные положения', icon: 'CheckCircle' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-professional-rolexGold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Icon name="FileText" size={48} className="text-professional-rolexGold mx-auto mb-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Условия использования
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Пользовательское соглашение об оказании услуг утилизации IT-оборудования
              </p>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 inline-flex items-center text-sm text-gray-600">
                <Icon name="Calendar" size={16} className="mr-2" />
                Действует с: 23 июля 2025 года
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-gray-50 sticky top-20 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs"
                  >
                    <Icon name={section.icon as any} size={14} className="mr-1" />
                    {section.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              
              {/* Общие положения */}
              <div id="general" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="FileText" size={28} className="text-professional-rolexGold mr-3" />
                  1. Общие положения
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения 
                    между <strong>ООО «СБОРУТИЛИЗАЦИЯ»</strong> (ОГРН: 1217700073678, ИНН: 7720695918) 
                    и Пользователями сайта <strong>utilizon.pro</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Использование сайта означает полное и безоговорочное согласие с условиями 
                    настоящего Соглашения.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Основные определения:</h3>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• <strong>Исполнитель</strong> — ООО «СБОРУТИЛИЗАЦИЯ»</li>
                      <li>• <strong>Заказчик</strong> — физическое или юридическое лицо</li>
                      <li>• <strong>Услуги</strong> — утилизация IT-оборудования и сопутствующие услуги</li>
                      <li>• <strong>Оборудование</strong> — компьютеры, серверы, офисная техника и др.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Описание услуг */}
              <div id="services" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Recycle" size={28} className="text-professional-rolexGold mr-3" />
                  2. Описание услуг
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Основные услуги</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Утилизация компьютеров и ноутбуков</li>
                      <li>• Утилизация серверного оборудования</li>
                      <li>• Утилизация офисной техники</li>
                      <li>• Утилизация мобильных устройств</li>
                      <li>• Вывоз оборудования</li>
                      <li>• Выдача документов об утилизации</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">Дополнительные услуги</h3>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• Гарантированное уничтожение данных</li>
                      <li>• Демонтаж и разборка оборудования</li>
                      <li>• Подготовка отчетной документации</li>
                      <li>• Консультации по утилизации</li>
                      <li>• Экспресс-вывоз (срочная утилизация)</li>
                      <li>• Выкуп работающего оборудования</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Права и обязанности */}
              <div id="obligations" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Users" size={28} className="text-professional-rolexGold mr-3" />
                  3. Права и обязанности сторон
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">Исполнитель обязуется:</h3>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• Оказать услуги в соответствии с техническими требованиями</li>
                        <li>• Соблюдать сроки выполнения работ</li>
                        <li>• Обеспечить экологическую безопасность утилизации</li>
                        <li>• Предоставить документы об утилизации</li>
                        <li>• Обеспечить конфиденциальность информации</li>
                        <li>• Соблюдать требования законодательства РФ</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-purple-900 mb-4">Исполнитель имеет право:</h3>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li>• Требовать своевременной оплаты услуг</li>
                        <li>• Отказаться от выполнения работ при несоблюдении условий</li>
                        <li>• Изменять стоимость услуг при изменении объема работ</li>
                        <li>• Привлекать субподрядчиков</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-emerald-900 mb-4">Заказчик обязуется:</h3>
                      <ul className="space-y-2 text-emerald-800 text-sm">
                        <li>• Своевременно оплачивать услуги</li>
                        <li>• Предоставить достоверную информацию об оборудовании</li>
                        <li>• Обеспечить доступ к оборудованию для вывоза</li>
                        <li>• Уведомить об особенностях и рисках оборудования</li>
                        <li>• Самостоятельно создать резервные копии данных</li>
                        <li>• Соблюдать условия настоящего Соглашения</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-orange-900 mb-4">Заказчик имеет право:</h3>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• Требовать качественного выполнения услуг</li>
                        <li>• Получить документы об утилизации</li>
                        <li>• Контролировать ход выполнения работ</li>
                        <li>• Расторгнуть договор при нарушении условий</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Порядок оплаты */}
              <div id="payment" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="CreditCard" size={28} className="text-professional-rolexGold mr-3" />
                  4. Порядок оплаты
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Icon name="Calculator" size={32} className="text-professional-rolexGold mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Расчет стоимости</h3>
                      <p className="text-sm text-gray-600">Бесплатный расчет по заявке с сайта</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Icon name="FileText" size={32} className="text-professional-rolexGold mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Договор</h3>
                      <p className="text-sm text-gray-600">Заключение договора на оказание услуг</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Icon name="Banknote" size={32} className="text-professional-rolexGold mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Оплата</h3>
                      <p className="text-sm text-gray-600">По безналичному расчету или наличными</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Способы оплаты:</strong> безналичный расчет, наличные средства</p>
                    <p><strong>Сроки оплаты:</strong> согласно условиям договора (обычно в течение 5 рабочих дней)</p>
                    <p><strong>Валюта расчетов:</strong> российские рубли</p>
                    <p><strong>НДС:</strong> включен в стоимость услуг</p>
                  </div>
                </div>
              </div>

              {/* Ответственность */}
              <div id="liability" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Shield" size={28} className="text-professional-rolexGold mr-3" />
                  5. Ответственность сторон
                </h2>
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Ограничение ответственности</h3>
                    <ul className="space-y-2 text-red-800">
                      <li>• Исполнитель не несет ответственности за потерю данных при утилизации</li>
                      <li>• Заказчик самостоятельно создает резервные копии важных данных</li>
                      <li>• Ответственность ограничивается стоимостью оказанных услуг</li>
                      <li>• Исключается ответственность за упущенную выгоду</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Гарантии качества</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Соблюдение экологических стандартов утилизации</li>
                      <li>• Полное уничтожение персональных данных</li>
                      <li>• Предоставление документов об утилизации</li>
                      <li>• Соответствие требованиям законодательства РФ</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Форс-мажор */}
              <div id="force-majeure" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="AlertTriangle" size={28} className="text-professional-rolexGold mr-3" />
                  6. Форс-мажорные обстоятельства
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Стороны освобождаются от ответственности за неисполнение или ненадлежащее 
                    исполнение обязательств при возникновении форс-мажорных обстоятельств.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">Форс-мажорные обстоятельства:</h3>
                      <ul className="space-y-1 text-yellow-800 text-sm">
                        <li>• Стихийные бедствия</li>
                        <li>• Военные действия</li>
                        <li>• Изменения законодательства</li>
                        <li>• Эпидемии и пандемии</li>
                        <li>• Действия государственных органов</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-2">Действия сторон:</h3>
                      <ul className="space-y-1 text-yellow-800 text-sm">
                        <li>• Незамедлительное уведомление</li>
                        <li>• Предоставление документального подтверждения</li>
                        <li>• Принятие мер по минимизации последствий</li>
                        <li>• Согласование новых сроков выполнения</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Разрешение споров */}
              <div id="dispute" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Scale" size={28} className="text-professional-rolexGold mr-3" />
                  7. Разрешение споров
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Досудебный порядок:</strong> все споры решаются путем переговоров. 
                      Претензии направляются в письменном виде и рассматриваются в течение 10 рабочих дней.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Судебный порядок:</strong> при невозможности досудебного урегулирования 
                      споры рассматриваются в судах г. Москвы в соответствии с законодательством РФ.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Применимое право:</strong> к отношениям сторон применяется 
                      действующее законодательство Российской Федерации.
                    </p>
                  </div>
                </div>
              </div>

              {/* Заключительные положения */}
              <div id="final" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="CheckCircle" size={28} className="text-professional-rolexGold mr-3" />
                  8. Заключительные положения
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-professional-rolexGold/5 rounded-lg p-8">
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Изменение условий:</strong> Исполнитель вправе изменять условия Соглашения. 
                      Актуальная версия размещается на сайте utilizon.pro/terms.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Срок действия:</strong> Соглашение действует бессрочно до его изменения 
                      или отмены Исполнителем.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Контактная информация:</strong> все вопросы по Соглашению направлять 
                      на email: commerce@rusutil-1.ru или по телефону: +7 (901) 862-81-81.
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">ООО «СБОРУТИЛИЗАЦИЯ»</h3>
                        <p className="text-sm text-gray-600">ОГРН: 1217700073678</p>
                        <p className="text-sm text-gray-600">ИНН: 7720695918</p>
                        <p className="text-sm text-gray-600">г. Москва, ул. Лефортовский вал, дом 16А</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Контакты</h3>
                        <p className="text-sm text-gray-600">Телефон: +7 (901) 862-81-81</p>
                        <p className="text-sm text-gray-600">Email: commerce@rusutil-1.ru</p>
                        <p className="text-sm text-gray-600">Сайт: utilizon.pro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-gray-600 mb-2">
                  <Icon name="Calendar" size={16} className="inline mr-1" />
                  Соглашение вступает в силу с 23 июля 2025 года
                </p>
                <p className="text-sm text-gray-500">
                  Используя сайт utilizon.pro, вы автоматически соглашаетесь с условиями настоящего Соглашения.
                  Актуальная версия всегда доступна по адресу utilizon.pro/terms
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}