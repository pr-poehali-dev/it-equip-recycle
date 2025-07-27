import Icon from "@/components/ui/icon";

export default function ClientTypesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-gray-900 mb-16">
            <span className="text-green-600">С кем</span> мы работаем
          </h2>
          
          {/* Государственные и муниципальные учреждения */}
          <div className="bg-green-600 rounded-lg p-8 mb-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Государственные<br />
              и муниципальные учреждения
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="GraduationCap" size={20} className="mr-2" />
                  <span className="font-semibold">ОБРАЗОВАНИЕ</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Школы</li>
                  <li>• Детские сады</li>
                  <li>• ВУЗы</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Heart" size={20} className="mr-2" />
                  <span className="font-semibold">ЗДРАВООХРАНЕНИЕ</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Больницы</li>
                  <li>• Поликлиники</li>
                  <li>• Аптеки</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Music" size={20} className="mr-2" />
                  <span className="font-semibold">КУЛЬТУРА</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Театры</li>
                  <li>• Музеи</li>
                  <li>• Библиотеки</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Home" size={20} className="mr-2" />
                  <span className="font-semibold">ЖКХ</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Ресурсоснабжение</li>
                  <li>• Управляющие компании</li>
                  <li>• И другие</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Промышленные предприятия */}
          <div className="bg-green-600 rounded-lg p-8 mb-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Промышленные предприятия<br />
              и производственные комплексы
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Cog" size={20} className="mr-2" />
                  <span className="font-semibold">МАШИНОСТРОЕНИЕ</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Building" size={20} className="mr-2" />
                  <span className="font-semibold">СТРОИТЕЛЬСТВО</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Fuel" size={20} className="mr-2" />
                  <span className="font-semibold">НЕФТЕХИМ</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Zap" size={20} className="mr-2" />
                  <span className="font-semibold">ТЭК</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Package" size={20} className="mr-2" />
                  <span className="font-semibold">ПИЩЕПРОМ</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Truck" size={20} className="mr-2" />
                  <span className="font-semibold">ЛЕГПРОМ</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Wrench" size={20} className="mr-2" />
                  <span className="font-semibold">МЕТАЛЛУРГИЯ</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Beaker" size={20} className="mr-2" />
                  <span className="font-semibold">АПК</span>
                </div>
              </div>
            </div>
          </div>

          {/* Частный бизнес */}
          <div className="bg-green-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Частный бизнес и корпорации
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Building2" size={20} className="mr-2" />
                  <span className="font-semibold">ОРГАНИЗАЦИИ</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Банки</li>
                  <li>• Бизнес-центры</li>
                  <li>• Офисы агентств</li>
                  <li>• И другое</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  <span className="font-semibold">МАГАЗИНЫ</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Техника и электроника</li>
                  <li>• Стройматериалы</li>
                  <li>• Супермаркеты</li>
                  <li>• И другое</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="Settings" size={20} className="mr-2" />
                  <span className="font-semibold">СЕРВИСНЫЕ КОМПАНИИ</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Интернет и телеком</li>
                  <li>• Клининг</li>
                  <li>• Услуги ремонта</li>
                  <li>• И другое</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Icon name="UtensilsCrossed" size={20} className="mr-2" />
                  <span className="font-semibold">HORECA</span>
                </div>
                <ul className="space-y-1 text-sm">
                  <li>• Гостиницы и отели</li>
                  <li>• Сети быстрого питания</li>
                  <li>• Рестораны</li>
                  <li>• И другое</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}