import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "https://cdn.poehali.dev/files/15ef1e62-8956-4d45-a225-5ffeaabe3489.jpg", fill: false },
    { name: "МТС", logo: "https://cdn.poehali.dev/files/7e87d785-0676-47bf-8b6d-25044885c801.png", fill: true },
    { name: "Альфа-Банк", logo: "https://cdn.poehali.dev/files/b030b317-38ff-4188-919d-aaa9c160c124.jpg", fill: true },
    { name: "Мегафон", logo: "https://cdn.poehali.dev/files/475b462c-e9e3-431d-806d-a5396a7861de.jpg", fill: true },
    { name: "ВТБ Банк", logo: "https://cdn.poehali.dev/files/f3a9c512-5723-4b33-a278-b45f121a1e60.jpg", fill: true },
    { name: "М.Видео", logo: "https://cdn.poehali.dev/files/42b06d37-3966-468e-baaf-90f4d70c9d5a.png", fill: true },
    { name: "Газпром", logo: "https://cdn.poehali.dev/files/c66ee417-ab8b-4333-b048-8994b7313188.jpg", fill: true },
    { name: "РЖД", logo: "https://cdn.poehali.dev/files/5b0e49ca-3dce-4292-baa5-2c64da7f7a26.jpg", fill: true },
    { name: "Роснефть", logo: "https://cdn.poehali.dev/files/4b5d2072-4a42-4e3e-a601-20ff40040705.png", fill: false },
    { name: "СБЕР", logo: "https://cdn.poehali.dev/files/561db6f5-d3b4-4c50-9a4d-60dbf11a88c8.jpg", fill: true },
    { name: "Сургутнефтегаз", logo: "https://cdn.poehali.dev/files/0e5f4bfb-f0f7-4196-981f-1fdf611d2e77.png", fill: true },
    { name: "Сетевая Компания", logo: "https://cdn.poehali.dev/files/139541ec-4f9c-4fe3-b1b8-92a2b8b5e05e.jpg", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "https://cdn.poehali.dev/files/3e1828df-90a4-4930-a9e9-dc0d1139ba94.jpg", fill: false },
    { name: "Ozon", logo: "https://cdn.poehali.dev/files/b230caee-c868-4a38-871c-485a60773225.jpg", fill: true },
    { name: "Яндекс", logo: "https://cdn.poehali.dev/files/d72a2713-c66a-4f07-b755-7407352a6102.jpg", fill: false },
    { name: "Ростелеком", logo: "https://cdn.poehali.dev/files/0c5b3d87-0b5f-4511-a8dd-eda9b9d22e5a.png", fill: false },
    { name: "Сегежа", logo: "https://cdn.poehali.dev/files/d2fd8035-d238-4911-ba61-965013067ab3.png", fill: false },
    { name: "Магнит", logo: "https://cdn.poehali.dev/files/c3007743-6875-4065-af7d-a01ed6f504e9.png", fill: true },
    { name: "Честный Знак", logo: "https://cdn.poehali.dev/files/8eef8483-c102-4e4c-b510-c356ae190c02.png", fill: false },
    { name: "Лента", logo: "https://cdn.poehali.dev/files/50cc011e-6b94-4c96-b7a5-317b7f307e8f.jpg", fill: false },
    { name: "АК Барс Банк", logo: "https://cdn.poehali.dev/files/68cf0440-63f8-400c-ab1e-7d12483ac3f5.png", fill: false },
    { name: "METRO Cash & Carry", logo: "https://cdn.poehali.dev/files/a71337b8-04e1-4d7b-aba1-91c14cadca73.jpg", fill: true },
    { name: "ООО СИБУР", logo: "https://cdn.poehali.dev/files/9bbdfe7f-cb6b-4f10-84ae-e38963fa5ebc.jpg", fill: true },
    { name: "ООО \"МАРС\"", logo: "https://cdn.poehali.dev/files/3162cc44-7d7e-4f3d-80a4-8e58c4a194a2.png", fill: false },
    { name: "Красное-Белое", logo: "https://cdn.poehali.dev/files/6a500e79-e412-442d-94fa-d956df09a10c.jpg", fill: false },
    { name: "АО Селектел", logo: "https://cdn.poehali.dev/files/eacda7fd-e1ea-4eea-a865-6a5e3c5e311e.jpg", fill: false },
    { name: "Авито", logo: "https://cdn.poehali.dev/files/e6396333-07ae-4fa2-bf67-1e803cd08b9c.png", fill: false },
    { name: "ТБанк", logo: "https://cdn.poehali.dev/files/211d09a5-509c-4f60-bd1b-7840a7db6ac8.jpg", fill: true }
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