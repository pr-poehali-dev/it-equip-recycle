import Icon from "@/components/ui/icon";
import CustomLogo from "@/components/ui/custom-logo";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:p-6 lg:p-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CustomLogo size={24} />
              <span className="font-black text-3xl">utilizon</span>
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
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Утилизация компьютеров</a></li>
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Серверное оборудование</a></li>
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Офисная техника</a></li>
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Мобильные устройства</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Лицензии</a></li>
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Сертификаты</a></li>
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-professional-rolexGold transition-colors">Условия использования</a></li>
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
  );
}