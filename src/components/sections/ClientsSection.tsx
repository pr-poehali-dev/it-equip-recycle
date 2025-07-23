import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "/img/2dd50eeb-103b-44ec-99c1-6261255a06e3.jpg", fill: false },
    { name: "МТС", logo: "/img/75105d8f-acfd-4315-813f-1f601a3657e3.jpg", fill: true },
    { name: "Альфа-Банк", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "Мегафон", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "ВТБ Банк", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "АО Тандер", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Газпром", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "РЖД", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "Роснефть", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "СБЕР", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "Сургутнефтегаз", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "Сетевая Компания", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Ozon", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "Яндекс", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Ростелеком", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Сегежа", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Магнит", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "Честный Знак", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Лента", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "АК Барс Банк", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "АО «СТРОЙГАЗМОНТАЖ»", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "ООО СИБУР", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "ООО \"МАРС\"", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Красное-Белое", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "АО Селектел", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "Авито", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: false },
    { name: "ТБанк", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true }
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
            <div key={index} className={`${client.fill ? 'p-0 overflow-hidden' : 'flex items-center justify-center p-4'} ${(client.name === 'СБЕР' || client.name === 'ООО СИБУР') ? 'p-2' : client.fill ? 'p-0' : 'p-4'} bg-white border-2 border-professional-rolexGold/30 rounded-lg hover:shadow-lg hover:border-professional-rolexGold transition-all duration-300 hover:scale-105 group aspect-square`}>
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