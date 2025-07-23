import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Privacy() {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'general', title: 'Общие положения', icon: 'FileText' },
    { id: 'collection', title: 'Сбор персональных данных', icon: 'Database' },
    { id: 'usage', title: 'Использование данных', icon: 'Settings' },
    { id: 'storage', title: 'Хранение и защита', icon: 'Shield' },
    { id: 'rights', title: 'Права субъектов данных', icon: 'Users' },
    { id: 'cookies', title: 'Файлы Cookie', icon: 'Globe' },
    { id: 'contacts', title: 'Контактная информация', icon: 'Phone' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-professional-rolexGold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Icon name="Shield" size={48} className="text-professional-rolexGold mx-auto mb-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Мы обеспечиваем надежную защиту ваших персональных данных
              </p>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 inline-flex items-center text-sm text-gray-600">
                <Icon name="Calendar" size={16} className="mr-2" />
                Последнее обновление: 23 июля 2025 года
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
                    Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                    пользователей сайта <strong>utilizon.pro</strong> (далее — «Сайт»).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Оператором персональных данных является <strong>ООО «РусУтиль-1»</strong> 
                    (ОГРН: 1137746064420, ИНН: 7720695918).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Обработка персональных данных осуществляется в соответствии с Федеральным законом 
                    от 27.07.2006 № 152-ФЗ «О персональных данных».
                  </p>
                </div>
              </div>

              {/* Сбор персональных данных */}
              <div id="collection" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Database" size={28} className="text-professional-rolexGold mr-3" />
                  2. Сбор персональных данных
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Какие данные мы собираем</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Имя и фамилия</li>
                      <li>• Номер телефона</li>
                      <li>• Адрес электронной почты</li>
                      <li>• Название компании</li>
                      <li>• Город</li>
                      <li>• Комментарии и сообщения</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Источники данных</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Форма калькулятора стоимости</li>
                      <li>• Контактная форма</li>
                      <li>• Телефонные звонки</li>
                      <li>• Электронная почта</li>
                      <li>• Файлы cookie</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Использование данных */}
              <div id="usage" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Settings" size={28} className="text-professional-rolexGold mr-3" />
                  3. Использование данных
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Мы используем ваши персональные данные исключительно для следующих целей:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Icon name="Phone" size={16} className="text-yellow-600 mr-2 mt-1" />
                        <span className="text-gray-700">Связь с клиентами и консультации</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Calculator" size={16} className="text-yellow-600 mr-2 mt-1" />
                        <span className="text-gray-700">Расчет стоимости услуг утилизации</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="FileText" size={16} className="text-yellow-600 mr-2 mt-1" />
                        <span className="text-gray-700">Подготовка коммерческих предложений</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Icon name="Truck" size={16} className="text-yellow-600 mr-2 mt-1" />
                        <span className="text-gray-700">Организация вывоза оборудования</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Mail" size={16} className="text-yellow-600 mr-2 mt-1" />
                        <span className="text-gray-700">Информирование о статусе заказа</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="BarChart" size={16} className="text-yellow-600 mr-2 mt-1" />
                        <span className="text-gray-700">Улучшение качества услуг</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Хранение и защита */}
              <div id="storage" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Shield" size={28} className="text-professional-rolexGold mr-3" />
                  4. Хранение и защита данных
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <Icon name="Lock" size={32} className="text-red-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-red-900 mb-2">Шифрование</h3>
                    <p className="text-red-800 text-sm">SSL-шифрование при передаче данных</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                    <Icon name="Server" size={32} className="text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-purple-900 mb-2">Хранение</h3>
                    <p className="text-purple-800 text-sm">Защищенные серверы в России</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <Icon name="Clock" size={32} className="text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-green-900 mb-2">Срок хранения</h3>
                    <p className="text-green-800 text-sm">5 лет с момента последнего обращения</p>
                  </div>
                </div>
              </div>

              {/* Права субъектов данных */}
              <div id="rights" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Users" size={28} className="text-professional-rolexGold mr-3" />
                  5. Ваши права
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    В соответствии с законодательством РФ, вы имеете право на:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Icon name="Eye" size={16} className="text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-700">Получение информации об обработке ваших данных</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Edit" size={16} className="text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-700">Уточнение, исправление или дополнение данных</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Trash2" size={16} className="text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-700">Удаление персональных данных</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Icon name="Ban" size={16} className="text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-700">Отзыв согласия на обработку</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="AlertTriangle" size={16} className="text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-700">Обжалование действий оператора</span>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Download" size={16} className="text-blue-600 mr-2 mt-1" />
                        <span className="text-gray-700">Получение копии ваших данных</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Файлы Cookie */}
              <div id="cookies" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Globe" size={28} className="text-professional-rolexGold mr-3" />
                  6. Файлы Cookie
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Наш сайт использует файлы cookie для улучшения пользовательского опыта.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Необходимые cookie</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Обеспечение работы сайта</li>
                        <li>• Сохранение настроек</li>
                        <li>• Безопасность сессий</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Аналитические cookie</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Анализ посещаемости</li>
                        <li>• Улучшение функциональности</li>
                        <li>• Оптимизация контента</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Контактная информация */}
              <div id="contacts" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Icon name="Phone" size={28} className="text-professional-rolexGold mr-3" />
                  7. Контактная информация
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-professional-rolexGold/5 rounded-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    По всем вопросам, связанным с обработкой персональных данных, обращайтесь к нам:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Icon name="Building" size={20} className="text-professional-rolexGold mr-3" />
                        <div>
                          <div className="font-semibold">ООО «РусУтиль-1»</div>
                          <div className="text-sm text-gray-600">ОГРН: 1137746064420</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" size={20} className="text-professional-rolexGold mr-3" />
                        <div className="text-gray-700">г. Москва, ул. Лефортовский вал, дом 16А</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Icon name="Phone" size={20} className="text-professional-rolexGold mr-3" />
                        <div className="text-gray-700">+7 (901) 862-81-81</div>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Mail" size={20} className="text-professional-rolexGold mr-3" />
                        <div className="text-gray-700">commerce@rusutil-1.ru</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-gray-600 mb-2">
                  <Icon name="Calendar" size={16} className="inline mr-1" />
                  Политика вступает в силу с 23 июля 2025 года
                </p>
                <p className="text-sm text-gray-500">
                  Мы оставляем за собой право вносить изменения в данную политику. 
                  Актуальная версия всегда доступна по адресу utilizon.pro/privacy
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