import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "https://cdn.poehali.dev/files/3fa50e0f-d966-4c3c-917a-5c52837ef259.jpg", fill: false },
    { name: "МТС", logo: "/img/d4d9d6c8-780d-496e-be22-dfe88524f182.jpg", fill: true },
    { name: "Альфа-Банк", logo: "https://cdn.poehali.dev/files/b030b317-38ff-4188-919d-aaa9c160c124.jpg", fill: true },
    { name: "Мегафон", logo: "https://cdn.poehali.dev/files/475b462c-e9e3-431d-806d-a5396a7861de.jpg", fill: true },
    { name: "ВТБ Банк", logo: "/img/28ed6ebe-98aa-4960-9d34-f5dbf9687684.jpg", fill: true },
    { name: "М.Видео", logo: "/img/a947b5ea-c14e-4480-8b71-e8eb273be63a.jpg", fill: true },
    { name: "Газпром", logo: "https://cdn.poehali.dev/files/c66ee417-ab8b-4333-b048-8994b7313188.jpg", fill: true },
    { name: "РЖД", logo: "/img/74d99e67-4781-447c-ae75-c512dbc104b9.jpg", fill: true },
    { name: "Роснефть", logo: "/img/57af31d3-80fd-4eec-b4fc-89a835571352.jpg", fill: false },
    { name: "СБЕР", logo: "/img/d2e3bd20-d955-4e82-a076-fb704bcfb0b6.jpg", fill: true },
    { name: "Сургутнефтегаз", logo: "/img/29ff1d88-fa34-49e9-af56-b82ca73d35ab.jpg", fill: true },
    { name: "Сетевая Компания", logo: "https://cdn.poehali.dev/files/139541ec-4f9c-4fe3-b1b8-92a2b8b5e05e.jpg", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "https://cdn.poehali.dev/files/3e1828df-90a4-4930-a9e9-dc0d1139ba94.jpg", fill: false },
    { name: "Ozon", logo: "/img/aad46aa5-a602-4e7f-bd14-ec2be18f7a7d.jpg", fill: true },
    { name: "Яндекс", logo: "/img/73d8f33e-cfd5-4029-8065-e2bd29a515d4.jpg", fill: false },
    { name: "Ростелеком", logo: "https://cdn.poehali.dev/files/0c5b3d87-0b5f-4511-a8dd-eda9b9d22e5a.png", fill: false },
    { name: "Сегежа", logo: "/img/70bece83-c04d-4613-a6d9-acad5715e5d2.jpg", fill: false },
    { name: "Магнит", logo: "https://cdn.poehali.dev/files/c3007743-6875-4065-af7d-a01ed6f504e9.png", fill: true },
    { name: "Честный Знак", logo: "/img/efb14d64-4018-4d62-b1e7-031313b3195e.jpg", fill: false },
    { name: "Лента", logo: "/img/fe2dfebb-a4f5-456e-89b9-5a1241440ce8.jpg", fill: false },
    { name: "АК Барс Банк", logo: "https://cdn.poehali.dev/files/68cf0440-63f8-400c-ab1e-7d12483ac3f5.png", fill: false },
    { name: "АО «СТРОЙГАЗМОНТАЖ»", logo: "/img/29969040-3f66-4cac-a2f1-df9371de261d.jpg", fill: false },
    { name: "ООО СИБУР", logo: "/img/75aeb6c8-8f72-4a12-a521-8ea91b6632f4.jpg", fill: true },
    { name: "ООО \"МАРС\"", logo: "/img/57356876-c66a-4a43-b0d3-7263ca66804a.jpg", fill: false },
    { name: "Красное-Белое", logo: "https://cdn.poehali.dev/files/6a500e79-e412-442d-94fa-d956df09a10c.jpg", fill: false },
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