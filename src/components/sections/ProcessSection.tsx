import Icon from "@/components/ui/icon";

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


        </div>
      </div>
    </section>
  );
}