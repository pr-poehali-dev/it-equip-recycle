import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-gray-900 mb-4">
            <span className="text-gray-900">Как мы работаем:</span> последовательность шагов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <Icon name="FileText" size={32} className="mx-auto text-professional-rolexGold" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Получаем вашу спецификацию оборудования</h3>
              <p className="text-sm text-gray-600">
                и предлагаем лучшие цены в вашем регионе
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <Icon name="FileCheck" size={32} className="mx-auto text-professional-rolexGold" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Заключаем договор на утилизацию</h3>
              <p className="text-sm text-gray-600">
                после согласования стоимости услуг
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <Icon name="Truck" size={32} className="mx-auto text-professional-rolexGold" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Забираем оборудование с вашей территории</h3>
              <p className="text-sm text-gray-600">
                в течение 24 часов после оплаты услуг
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <Icon name="Mail" size={32} className="mx-auto text-professional-rolexGold" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Направляем документы по фактическому адресу</h3>
              <p className="text-sm text-gray-600">
                предварительно направляем сканы копии всех документов
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Получите <span className="text-green-600">коммерческое предложение</span>
            </h3>
            <p className="text-center text-gray-700 mb-8">
              После заполнения формы с вами свяжется наш специалист для уточнения деталей
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <input 
                type="text" 
                placeholder="Ваше имя*" 
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="flex">
                <span className="bg-gray-100 border border-r-0 border-gray-300 px-3 py-3 rounded-l-lg text-sm flex items-center">
                  🇷🇺 +7
                </span>
                <input 
                  type="tel" 
                  placeholder="(900) 000-00-00" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <input 
                type="email" 
                placeholder="Ваш e-mail*" 
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold">
                Получить
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 text-center">
              Заполняя форму, вы соглашаетесь с{" "}
              <span className="text-green-600 underline cursor-pointer">
                Политикой конфиденциальности
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}