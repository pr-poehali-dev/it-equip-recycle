import Icon from "@/components/ui/icon";

export default function ClientTypesPageSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-professional-rolexGold/20 rounded-full mb-6">
              <Icon name="Users" size={32} className="text-professional-rolexGold" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              С кем мы работаем
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Мы предоставляем услуги утилизации для всех типов организаций: от государственных учреждений до частного бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Государственные и муниципальные учреждения */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="bg-professional-rolexGold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Icon name="Building" size={24} className="text-professional-rolexGold" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Государственные и муниципальные учреждения
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="GraduationCap" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">ОБРАЗОВАНИЕ</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Школы</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Детские сады</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>ВУЗы</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="Heart" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">ЗДРАВООХРАНЕНИЕ</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Больницы</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Поликлиники</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Аптеки</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="Music" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">КУЛЬТУРА</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Театры</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Музеи</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Библиотеки</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="Home" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">ЖКХ</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Ресурсоснабжение</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Управляющие компании</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>И другие</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Промышленные предприятия */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="bg-professional-rolexGold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Icon name="Factory" size={24} className="text-professional-rolexGold" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Промышленные предприятия и производственные комплексы
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Cog" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">МАШИНОСТРОЕНИЕ</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Building2" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">СТРОИТЕЛЬСТВО</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Fuel" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">НЕФТЕХИМ</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Zap" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">ТЭК</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Package" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">ПИЩЕПРОМ</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Truck" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">ЛЕГПРОМ</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Wrench" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">МЕТАЛЛУРГИЯ</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 border border-professional-rolexGold/20 text-center">
                  <Icon name="Wheat" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                  <span className="font-bold text-gray-900 text-lg block">АПК</span>
                </div>
              </div>
            </div>

            {/* Частный бизнес */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="bg-professional-rolexGold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Icon name="Briefcase" size={24} className="text-professional-rolexGold" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Частный бизнес и корпорации
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="Building2" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">ОРГАНИЗАЦИИ</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Банки</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Бизнес-центры</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Офисы агентств</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>И другое</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="ShoppingCart" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">МАГАЗИНЫ</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Техника и электроника</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Стройматериалы</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Супермаркеты</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>И другое</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="Settings" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">СЕРВИСНЫЕ КОМПАНИИ</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Интернет и телеком</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Клининг</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Услуги ремонта</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>И другое</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon name="UtensilsCrossed" size={24} className="text-professional-rolexGold mr-3" />
                    <span className="font-bold text-gray-900 text-lg">HORECA</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Гостиницы и отели</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Сети быстрого питания</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>Рестораны</li>
                    <li className="flex items-center"><span className="text-professional-rolexGold mr-2">•</span>И другое</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA секция */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-professional-rolexGold/30 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-professional-rolexGold/20 rounded-full mb-6">
                <Icon name="Handshake" size={32} className="text-professional-rolexGold" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы начать сотрудничество?
              </h3>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Независимо от типа вашей организации, мы найдем оптимальное решение для утилизации техники
              </p>
              <a 
                href="/#calculator"
                className="inline-flex items-center bg-professional-rolexGold hover:bg-professional-rolexGold/90 text-professional-rolexGreen font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}