import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=X5", fill: false },
    { name: "МТС", logo: "https://via.placeholder.com/120x120/e11d48/ffffff?text=МТС", fill: true },
    { name: "Альфа-Банк", logo: "https://via.placeholder.com/120x120/dc2626/ffffff?text=Альфа", fill: true },
    { name: "Мегафон", logo: "https://via.placeholder.com/120x120/7c3aed/ffffff?text=Мегафон", fill: true },
    { name: "ВТБ Банк", logo: "https://via.placeholder.com/120x120/2563eb/ffffff?text=ВТБ", fill: true },
    { name: "М.Видео", logo: "https://via.placeholder.com/120x120/dc2626/ffffff?text=М.Видео", fill: true },
    { name: "Газпром", logo: "https://via.placeholder.com/120x120/2563eb/ffffff?text=Газпром", fill: true },
    { name: "РЖД", logo: "https://via.placeholder.com/120x120/dc2626/ffffff?text=РЖД", fill: true },
    { name: "Роснефть", logo: "https://via.placeholder.com/120x120/1f2937/ffffff?text=Роснефть", fill: false },
    { name: "СБЕР", logo: "https://via.placeholder.com/120x120/16a34a/ffffff?text=СБЕР", fill: true },
    { name: "Сургутнефтегаз", logo: "https://via.placeholder.com/120x120/2563eb/ffffff?text=СНГ", fill: true },
    { name: "Сетевая Компания", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=СК", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=36.6", fill: false },
    { name: "Ozon", logo: "https://via.placeholder.com/120x120/2563eb/ffffff?text=Ozon", fill: true },
    { name: "Яндекс", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=Яндекс", fill: false },
    { name: "Ростелеком", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=РТК", fill: false },
    { name: "Сегежа", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=Сегежа", fill: false },
    { name: "Магнит", logo: "https://via.placeholder.com/120x120/dc2626/ffffff?text=Магнит", fill: true },
    { name: "Честный Знак", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=ЧЗ", fill: false },
    { name: "Лента", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=Лента", fill: false },
    { name: "АК Барс Банк", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=АК%20Барс", fill: false },
    { name: "METRO Cash & Carry", logo: "https://via.placeholder.com/120x120/f97316/ffffff?text=METRO", fill: true },
    { name: "ООО СИБУР", logo: "https://via.placeholder.com/120x120/2563eb/ffffff?text=СИБУР", fill: true },
    { name: "ООО \"МАРС\"", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=МАРС", fill: false },
    { name: "Красное-Белое", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=КБ", fill: false },
    { name: "АО Селектел", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=Селектел", fill: false },
    { name: "Авито", logo: "https://via.placeholder.com/120x120/f3f4f6/374151?text=Авито", fill: false },
    { name: "ТБанк", logo: "https://via.placeholder.com/120x120/facc15/000000?text=ТБанк", fill: true }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Наши постоянные клиенты</h2>
          <p className="premium-body text-gray-700 max-w-2xl mx-auto">
            Нам доверяют ведущие российские компании из различных отраслей экономики
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className={`${client.fill ? 'p-0 overflow-hidden' : 'flex items-center justify-center p-4'} ${(client.name === 'ООО СИБУР' || client.name === 'METRO Cash & Carry') ? 'p-2' : client.fill ? 'p-0' : 'p-4'} bg-white border-2 border-professional-rolexGold/30 rounded-lg hover:shadow-lg hover:border-professional-rolexGold transition-all duration-300 hover:scale-105 group aspect-square`}>
              <img 
                src={client.logo} 
                alt={`${client.name} логотип`}
                className={`${client.fill ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'} filter group-hover:brightness-110 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto">
            <Icon name="Award" size={32} className="text-professional-rolexGold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Почему нас выбирают</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <span className="text-xl mr-3 mt-1">🏆</span>
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Проверенное качество</h4>
                </div>
                <p className="premium-body text-gray-700 text-base leading-relaxed flex-grow">Работаем с крупнейшими компаниями России с 2013 года</p>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <span className="text-xl mr-3 mt-1">📋</span>
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Полный комплаенс</h4>
                </div>
                <p className="premium-body text-gray-700 text-base leading-relaxed flex-grow">Соответствие всем требованиям корпоративного документооборота</p>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <span className="text-xl mr-3 mt-1">🔒</span>
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Конфиденциальность</h4>
                </div>
                <p className="premium-body text-gray-700 text-base leading-relaxed flex-grow">Гарантированное уничтожение данных с носителей информации</p>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <Icon name="Clock" size={20} className="text-professional-rolexGold mr-3 mt-1 flex-shrink-0" />
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Экономия времени</h4>
                </div>
                <p className="premium-body text-gray-700 text-base leading-relaxed flex-grow">Время — самый ценный ресурс. Мы берём на себя все заботы по утилизации, чтобы вы могли сосредоточиться на своём бизнесе.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}