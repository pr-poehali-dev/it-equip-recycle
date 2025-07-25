import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "/img/cae4c762-f1e5-47e8-b8dd-1ff9ed2395ff.jpg", fill: false },
    { name: "МТС", logo: "/img/d4d9d6c8-780d-496e-be22-dfe88524f182.jpg", fill: true },
    { name: "Альфа-Банк", logo: "/img/6e22fd74-ccfe-4e23-aa58-678ccd255d0d.jpg", fill: true },
    { name: "Мегафон", logo: "/img/1da472b5-1a45-46d8-9229-8a31cd5b2252.jpg", fill: true },
    { name: "ВТБ Банк", logo: "/img/28ed6ebe-98aa-4960-9d34-f5dbf9687684.jpg", fill: true },
    { name: "М.Видео", logo: "/img/a947b5ea-c14e-4480-8b71-e8eb273be63a.jpg", fill: true },
    { name: "Газпром", logo: "/img/c1f8a0d6-c3fd-4c0e-8eb0-c272f06572ae.jpg", fill: true },
    { name: "РЖД", logo: "/img/74d99e67-4781-447c-ae75-c512dbc104b9.jpg", fill: true },
    { name: "Роснефть", logo: "/img/57af31d3-80fd-4eec-b4fc-89a835571352.jpg", fill: false },
    { name: "СБЕР", logo: "/img/d2e3bd20-d955-4e82-a076-fb704bcfb0b6.jpg", fill: true },
    { name: "Сургутнефтегаз", logo: "/img/29ff1d88-fa34-49e9-af56-b82ca73d35ab.jpg", fill: true },
    { name: "Сетевая Компания", logo: "/img/285b7c9e-7156-4b7c-b227-d45167185c28.jpg", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "/img/6d1b3af8-7e22-4893-b56e-b6976d29f5e8.jpg", fill: false },
    { name: "Ozon", logo: "/img/aad46aa5-a602-4e7f-bd14-ec2be18f7a7d.jpg", fill: true },
    { name: "Яндекс", logo: "/img/73d8f33e-cfd5-4029-8065-e2bd29a515d4.jpg", fill: false },
    { name: "Ростелеком", logo: "/img/2e14f0e8-6fcd-43ee-a35d-dc1a59a207a0.jpg", fill: false },
    { name: "Сегежа", logo: "/img/70bece83-c04d-4613-a6d9-acad5715e5d2.jpg", fill: false },
    { name: "Магнит", logo: "/img/01e6a09c-c6fa-4eff-832f-b910f7e012f8.jpg", fill: true },
    { name: "Честный Знак", logo: "/img/efb14d64-4018-4d62-b1e7-031313b3195e.jpg", fill: false },
    { name: "Лента", logo: "/img/fe2dfebb-a4f5-456e-89b9-5a1241440ce8.jpg", fill: false },
    { name: "АК Барс Банк", logo: "/img/6a29d558-25b0-4469-bcfa-5d045646a8c3.jpg", fill: false },
    { name: "АО «СТРОЙГАЗМОНТАЖ»", logo: "/img/29969040-3f66-4cac-a2f1-df9371de261d.jpg", fill: false },
    { name: "ООО СИБУР", logo: "/img/75aeb6c8-8f72-4a12-a521-8ea91b6632f4.jpg", fill: true },
    { name: "ООО \"МАРС\"", logo: "/img/57356876-c66a-4a43-b0d3-7263ca66804a.jpg", fill: false },
    { name: "Красное-Белое", logo: "/img/25b62928-8c6a-4b1b-ac10-9f6d93114edf.jpg", fill: false },
    { name: "АО Селектел", logo: "/img/a9efe399-0ad8-4a4f-95f2-db4c19cbc9dc.jpg", fill: false },
    { name: "Авито", logo: "/img/acbe9ae4-183e-47a1-b833-18266231a0bf.jpg", fill: false },
    { name: "ТБанк", logo: "/img/30b2394d-9df1-4921-9fde-34928b17e2b3.jpg", fill: true }
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