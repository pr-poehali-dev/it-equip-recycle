import Icon from "@/components/ui/icon";

export default function ClientsSection() {
  const clients = [
    { name: "X5 Retail Group", logo: "https://cdn.poehali.dev/files/057ea779-59d6-4be1-a312-e2355d930e8c.jpg", fill: false },
    { name: "МТС", logo: "https://cdn.poehali.dev/files/2ffe13fc-a676-47a8-9e46-0e5fec7ea564.png", fill: true },
    { name: "Альфа-Банк", logo: "https://cdn.poehali.dev/files/80317c5a-d49d-4df6-9bc8-cd40c8083959.jpg", fill: true },
    { name: "Мегафон", logo: "https://cdn.poehali.dev/files/72a8f653-8a39-464a-b090-83e4a4fd5cf1.jpg", fill: true },
    { name: "ВТБ Банк", logo: "https://cdn.poehali.dev/files/1f60c8b1-fb45-41e1-9478-2ca7b9ed7fb3.jpg", fill: true },
    { name: "АО Тандер", logo: "https://cdn.poehali.dev/files/07f9ba71-02cc-4f46-8908-f8b21ece5fa2.png", fill: false },
    { name: "Газпром", logo: "https://cdn.poehali.dev/files/832f6188-3e36-4516-88d6-d6594dc539b7.jpg", fill: true },
    { name: "РЖД", logo: "https://cdn.poehali.dev/files/7bd20793-9a6b-4c17-bc33-0c2c085b25c4.jpg", fill: true },
    { name: "Роснефть", logo: "https://cdn.poehali.dev/files/db70b93b-a8f4-4094-94a5-e803774e3c95.png", fill: false },
    { name: "СБЕР", logo: "https://cdn.poehali.dev/files/9d250503-5454-4120-9ac2-b95b40552a5a.jpg", fill: true },
    { name: "Сургутнефтегаз", logo: "https://cdn.poehali.dev/files/d4878f97-ab8e-4d50-a2cc-685ff5e98324.png", fill: true },
    { name: "Сетевая Компания", logo: "https://cdn.poehali.dev/files/05956c81-7d92-440c-95e5-1f23442dd970.jpg", fill: false },
    { name: "Аптечная Сеть 36.6", logo: "https://cdn.poehali.dev/files/70bf1c92-2e30-4b15-9e96-d58e3b135474.jpg", fill: false },
    { name: "Ozon", logo: "https://cdn.poehali.dev/files/16104369-f255-460e-ab4c-56e091f1eb94.png", fill: true },
    { name: "Яндекс", logo: "https://cdn.poehali.dev/files/11b91071-ec0c-4501-876d-f1b81cd5bd5f.jpg", fill: false },
    { name: "Ростелеком", logo: "https://cdn.poehali.dev/files/0bf6ea4c-a844-4b7b-ac5c-bb51ec55590f.png", fill: false },
    { name: "Сегежа", logo: "https://cdn.poehali.dev/files/93f1e2a8-a309-457f-80d2-c0e06cd65f42.png", fill: false },
    { name: "Магнит", logo: "https://cdn.poehali.dev/files/3ec18fc8-fae5-4eba-856c-92dfb085956e.png", fill: true },
    { name: "Честный Знак", logo: "https://cdn.poehali.dev/files/e6884e2b-d4e1-41d6-8aab-b48e3aa19aca.jpg", fill: false },
    { name: "Лента", logo: "https://cdn.poehali.dev/files/1a7d4131-a8ad-4d1f-8090-9779e8f83bf7.jpg", fill: false },
    { name: "АК Барс Банк", logo: "https://cdn.poehali.dev/files/e3bb5c6c-40ed-4f43-9576-8b3d7c13e0dd.png", fill: false },
    { name: "АО «СТРОЙГАЗМОНТАЖ»", logo: "https://cdn.poehali.dev/files/e063ff3c-542e-4f23-847d-b84ba4b62ab7.png", fill: false },
    { name: "ООО СИБУР", logo: "https://cdn.poehali.dev/files/74564939-0d84-437d-b786-af177e84f945.jpg", fill: true },
    { name: "ООО \"МАРС\"", logo: "https://cdn.poehali.dev/files/13488320-f16b-4768-87f6-d512709b9e37.png", fill: false },
    { name: "Красное-Белое", logo: "https://cdn.poehali.dev/files/621f0488-9829-467b-9fac-e3b6c0ee20e0.jpg", fill: false },
    { name: "АО Селектел", logo: "https://cdn.poehali.dev/files/a22ae5d4-8399-4de1-aaad-1edac937a295.jpg", fill: false },
    { name: "Авито", logo: "https://cdn.poehali.dev/files/1aa2eeb2-6e1d-4810-b06a-bf4d1fce4e96.png", fill: false },
    { name: "ТБанк", logo: "https://cdn.poehali.dev/files/e547fe52-d2b5-4a93-a328-6bc767ac0455.jpg", fill: true }
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
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <Icon name="Award" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Почему нас выбирают</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🏆 Проверенное качество</h4>
                <p className="premium-body text-gray-700 text-sm">Работаем с крупнейшими компаниями России с 2015 года</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📋 Полный комплаенс</h4>
                <p className="premium-body text-gray-700 text-sm">Соответствие всем требованиям корпоративного документооборота</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🔒 Конфиденциальность</h4>
                <p className="premium-body text-gray-700 text-sm">Гарантированное уничтожение данных с носителей информации</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}