import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "https://i.postimg.cc/x1J5mQLT/x5.jpg", fill: false },
    { name: "МТС", logo: "https://i.postimg.cc/JzGHgf6w/mts.png", fill: true },
    { name: "Альфа-Банк", logo: "https://i.postimg.cc/Qxq7yhQL/alfa.jpg", fill: true },
    { name: "Мегафон", logo: "https://i.postimg.cc/g2QyYjqN/megafon.jpg", fill: true },
    { name: "ВТБ Банк", logo: "https://i.postimg.cc/8cNpPqPZ/vtb.jpg", fill: true },
    { name: "М.Видео", logo: "https://i.postimg.cc/L5JxGKzM/mvideo.png", fill: true },
    { name: "Газпром", logo: "https://i.postimg.cc/y6vLLWx8/gazprom.jpg", fill: true },
    { name: "РЖД", logo: "https://i.postimg.cc/65TQk5NH/rzd.jpg", fill: true },
    { name: "Роснефть", logo: "https://i.postimg.cc/cJp4gWtv/rosneft.png", fill: false },
    { name: "СБЕР", logo: "https://i.postimg.cc/c4mRqDW5/sber.jpg", fill: true },
    { name: "Сургутнефтегаз", logo: "https://i.postimg.cc/7YhzqNz0/surgut.png", fill: true },
    { name: "Сетевая Компания", logo: "https://i.postimg.cc/kMzjzr2G/setevaya.jpg", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "https://i.postimg.cc/RhQb2Zwr/366.jpg", fill: false },
    { name: "Ozon", logo: "https://i.postimg.cc/nzp1FQ7J/ozon.jpg", fill: true },
    { name: "Яндекс", logo: "https://i.postimg.cc/8C5m2f4J/yandex.jpg", fill: false },
    { name: "Ростелеком", logo: "https://i.postimg.cc/MTNJ7g6h/rostelecom.png", fill: false },
    { name: "Сегежа", logo: "https://i.postimg.cc/nVrfRw4X/segezha.png", fill: false },
    { name: "Магнит", logo: "https://i.postimg.cc/XqGzY86B/magnit.png", fill: true },
    { name: "Честный Знак", logo: "https://i.postimg.cc/6QnPL2qc/chestniy.png", fill: false },
    { name: "Лента", logo: "https://i.postimg.cc/R0DFr8qd/lenta.jpg", fill: false },
    { name: "АК Барс Банк", logo: "https://i.postimg.cc/j5qqrqmc/akbars.png", fill: false },
    { name: "METRO Cash & Carry", logo: "https://i.postimg.cc/jjvyDrKn/metro.jpg", fill: true },
    { name: "ООО СИБУР", logo: "https://i.postimg.cc/pL5pQBFw/sibur.jpg", fill: true },
    { name: "ООО \"МАРС\"", logo: "https://i.postimg.cc/nzYyww13/mars.png", fill: false },
    { name: "Красное-Белое", logo: "https://i.postimg.cc/W4Lq1DHy/krasnoe.jpg", fill: false },
    { name: "АО Селектел", logo: "https://i.postimg.cc/BnPqzQqx/selectel.jpg", fill: false },
    { name: "Авито", logo: "https://i.postimg.cc/sgmYywqR/avito.png", fill: false },
    { name: "ТБанк", logo: "https://i.postimg.cc/NjKCQfyS/tbank.jpg", fill: true }
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