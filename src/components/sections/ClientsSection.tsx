import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "/img/2dd50eeb-103b-44ec-99c1-6261255a06e3.jpg", fill: false },
    { name: "МТС", logo: "/img/75105d8f-acfd-4315-813f-1f601a3657e3.jpg", fill: true },
    { name: "Альфа-Банк", logo: "/img/e30b29fc-5cfd-4d92-8a60-cd1b75c1bb6a.jpg", fill: true },
    { name: "Мегафон", logo: "/img/394577a2-0405-49a3-a0d2-d767e511ba2e.jpg", fill: true },
    { name: "ВТБ Банк", logo: "/img/3961a6ee-f302-4984-b7f6-9d8e6a3e5976.jpg", fill: true },
    { name: "М.Видео", logo: "/img/896702a0-63fe-4be2-b730-0e179965107d.jpg", fill: true },
    { name: "Газпром", logo: "/img/39b5a4a1-84c8-446b-8cd7-64d0e17a1c28.jpg", fill: true },
    { name: "РЖД", logo: "/img/462cfe12-874c-426c-8e07-50773d2965bb.jpg", fill: true },
    { name: "Роснефть", logo: "/img/17bf56d8-143a-4332-b63f-8e02459bf75b.jpg", fill: false },
    { name: "СБЕР", logo: "/img/5433be84-ffcb-4008-b76c-b883474ab547.jpg", fill: true },
    { name: "Сургутнефтегаз", logo: "/img/7a629961-3ff5-4fe8-8bfc-ce733dd0df80.jpg", fill: true },
    { name: "Сетевая Компания", logo: "/img/b231d753-2fc7-4305-9358-89df2bc39a84.jpg", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "/img/0eb78255-136a-43aa-9f49-38b891133b85.jpg", fill: false },
    { name: "Ozon", logo: "/img/4eca8804-2b53-4da6-802d-68efb626e140.jpg", fill: true },
    { name: "Яндекс", logo: "/img/42910f57-51ac-401a-b44c-ea4b5f5d2814.jpg", fill: false },
    { name: "Ростелеком", logo: "/img/572c9757-2e0e-41d5-b3bd-28a8ea910381.jpg", fill: false },
    { name: "Сегежа", logo: "/img/692f1fb0-be4e-43ae-bc57-05ac9efb5cb1.jpg", fill: false },
    { name: "Магнит", logo: "/img/853c4e53-cd08-458a-9249-1875661eea6d.jpg", fill: true },
    { name: "Честный Знак", logo: "/img/14a01fe3-5b5d-4bcb-9e6c-62d6c62d2751.jpg", fill: false },
    { name: "Лента", logo: "/img/232fbac9-5b5a-4592-9c7d-c219ca998886.jpg", fill: false },
    { name: "АК Барс Банк", logo: "/img/311dc170-aa8a-47e9-ae9a-40dfc2906150.jpg", fill: false },
    { name: "АО «СТРОЙГАЗМОНТАЖ»", logo: "/img/572c9757-2e0e-41d5-b3bd-28a8ea910381.jpg", fill: false },
    { name: "ООО СИБУР", logo: "/img/7bb6cc3b-7136-49c7-b6fe-129e3c9cbb3a.jpg", fill: true },
    { name: "ООО \"МАРС\"", logo: "/img/853c4e53-cd08-458a-9249-1875661eea6d.jpg", fill: false },
    { name: "Красное-Белое", logo: "/img/981f5b7f-2a51-4720-9f28-aa79ef4ce18d.jpg", fill: false },
    { name: "АО Селектел", logo: "/img/c88430cf-6bbc-484e-963a-9d2817f97c38.jpg", fill: false },
    { name: "Авито", logo: "/img/cf791694-79f3-47dd-89b9-2263da301948.jpg", fill: false },
    { name: "ТБанк", logo: "/img/dd17a692-dea8-408e-9999-fe5a3d96182e.jpg", fill: true }
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