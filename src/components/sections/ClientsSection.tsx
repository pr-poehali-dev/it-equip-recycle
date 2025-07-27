import { useState } from 'react';
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ClientsSection() {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const clients = [
    { 
      name: "X5 Retail Group", 
      logo: "https://cdn.poehali.dev/files/15ef1e62-8956-4d45-a225-5ffeaabe3489.jpg", 
      fill: false,
      description: "X5 Retail Group — российская продуктовая розничная торговая компания. Компания управляет торговыми сетями: «Пятёрочка», «Перекрёсток», «Чижик», «Около», «Виктория», «Красный яр» и «Слата»."
    },
    { 
      name: "МТС", 
      logo: "https://cdn.poehali.dev/files/7e87d785-0676-47bf-8b6d-25044885c801.png", 
      fill: true,
      description: "МТС («Мобильные ТелеСистемы») — российская компания, предоставляющая телекоммуникационные услуги, цифровые и медийные сервисы в России и Белоруссии под торговой маркой «МТС»."
    },
    { 
      name: "Альфа-Банк", 
      logo: "https://cdn.poehali.dev/files/b030b317-38ff-4188-919d-aaa9c160c124.jpg", 
      fill: true,
      description: "Альфа-Банк — один из крупнейших частных банков России, входящий в состав финансовой группы «Альфа-Групп». Предоставляет широкий спектр банковских услуг для частных и корпоративных клиентов."
    },
    { 
      name: "Мегафон", 
      logo: "https://cdn.poehali.dev/files/475b462c-e9e3-431d-806d-a5396a7861de.jpg", 
      fill: true,
      description: "МегаФон — российская телекоммуникационная компания, один из ведущих операторов мобильной связи в России. Предоставляет услуги мобильной и фиксированной связи, интернета и цифровых решений."
    },
    { 
      name: "ВТБ Банк", 
      logo: "https://cdn.poehali.dev/files/f3a9c512-5723-4b33-a278-b45f121a1e60.jpg", 
      fill: true,
      description: "ВТБ — один из ведущих универсальных банков России, предоставляющий широкий спектр финансовых услуг на российском и международных рынках."
    },
    { 
      name: "М.Видео", 
      logo: "https://cdn.poehali.dev/files/42b06d37-3966-468e-baaf-90f4d70c9d5a.png", 
      fill: true,
      description: "М.Видео — крупнейшая российская розничная сеть по продаже бытовой техники и электроники. Компания входит в группу М.Видео-Эльдорадо."
    },
    { 
      name: "Газпром", 
      logo: "https://cdn.poehali.dev/files/c66ee417-ab8b-4333-b048-8994b7313188.jpg", 
      fill: true,
      description: "Газпром — российская энергетическая компания, крупнейший в мире производитель природного газа. Занимается геологоразведкой, добычей, транспортировкой, хранением, переработкой и реализацией газа."
    },
    { 
      name: "РЖД", 
      logo: "https://cdn.poehali.dev/files/5b0e49ca-3dce-4292-baa5-2c64da7f7a26.jpg", 
      fill: true,
      description: "Российские железные дороги — государственная компания, владеющая железнодорожной инфраструктурой России и осуществляющая железнодорожные перевозки."
    },
    { 
      name: "Роснефть", 
      logo: "https://cdn.poehali.dev/files/4b5d2072-4a42-4e3e-a601-20ff40040705.png", 
      fill: false,
      description: "Роснефть — российская нефтегазовая компания, крупнейшая публичная нефтяная компания мира по производству и одна из крупнейших частных компаний России."
    },
    { 
      name: "СБЕР", 
      logo: "https://cdn.poehali.dev/files/561db6f5-d3b4-4c50-9a4d-60dbf11a88c8.jpg", 
      fill: true,
      description: "Сбербанк — крупнейший банк России и один из ведущих глобальных финансовых институтов. Предоставляет широкий спектр банковских услуг и входит в топ-3 банков Европы по капитализации."
    },
    { 
      name: "Сургутнефтегаз", 
      logo: "https://cdn.poehali.dev/files/0e5f4bfb-f0f7-4196-981f-1fdf611d2e77.png", 
      fill: true,
      description: "Сургутнефтегаз — российская вертикально-интегрированная нефтяная компания, одна из крупнейших частных нефтяных компаний России."
    },
    { 
      name: "Сетевая Компания", 
      logo: "https://cdn.poehali.dev/files/139541ec-4f9c-4fe3-b1b8-92a2b8b5e05e.jpg", 
      fill: false,
      description: "Сетевая компания — крупнейшая территориальная сетевая организация в Республике Татарстан, осуществляющая передачу и распределение электроэнергии."
    },
    { 
      name: "Аптечная Сеть 36.6", 
      logo: "https://cdn.poehali.dev/files/3e1828df-90a4-4930-a9e9-dc0d1139ba94.jpg", 
      fill: false,
      description: "Аптечная сеть 36,6 — одна из крупнейших аптечных сетей России, предоставляющая широкий ассортимент лекарственных препаратов и товаров для здоровья."
    },
    { 
      name: "Ozon", 
      logo: "https://cdn.poehali.dev/files/b230caee-c868-4a38-871c-485a60773225.jpg", 
      fill: true,
      description: "Ozon — одна из крупнейших российских интернет-торговых площадок, предлагающая широкий ассортимент товаров и услуг с быстрой доставкой."
    },
    { 
      name: "Яндекс", 
      logo: "https://cdn.poehali.dev/files/d72a2713-c66a-4f07-b755-7407352a6102.jpg", 
      fill: false,
      description: "Яндекс — российская транснациональная IT-компания, владеющая одноимённой системой поиска в интернете и интернет-порталом. Разрабатывает интернет-сервисы и мобильные приложения."
    },
    { 
      name: "Ростелеком", 
      logo: "https://cdn.poehali.dev/files/0c5b3d87-0b5f-4511-a8dd-eda9b9d22e5a.png", 
      fill: false,
      description: "Ростелеком — крупнейший российский провайдер цифровых услуг и решений, национальный лидер в области телекоммуникаций."
    },
    { 
      name: "Сегежа", 
      logo: "https://cdn.poehali.dev/files/d2fd8035-d238-4911-ba61-965013067ab3.png", 
      fill: false,
      description: "Сегежа Групп — один из крупнейших вертикально интегрированных лесопромышленных холдингов России, производитель целлюлозы, упаковочных решений и изделий из древесины."
    },
    { 
      name: "Магнит", 
      logo: "https://cdn.poehali.dev/files/c3007743-6875-4065-af7d-a01ed6f504e9.png", 
      fill: true,
      description: "Магнит — крупнейшая по выручке и количеству магазинов розничная сеть в России, специализирующаяся на торговле продуктами питания и товарами повседневного спроса."
    },
    { 
      name: "Честный Знак", 
      logo: "https://cdn.poehali.dev/files/8eef8483-c102-4e4c-b510-c356ae190c02.png", 
      fill: false,
      description: "Честный ЗНАК — национальная система маркировки товаров в России, обеспечивающая контроль за оборотом товаров от производства до покупки."
    },
    { 
      name: "Лента", 
      logo: "https://cdn.poehali.dev/files/50cc011e-6b94-4c96-b7a5-317b7f307e8f.jpg", 
      fill: false,
      description: "Лента — российская торговая сеть гипермаркетов и супермаркетов, одна из крупнейших продуктовых ритейлеров России."
    },
    { 
      name: "АК Барс Банк", 
      logo: "https://cdn.poehali.dev/files/68cf0440-63f8-400c-ab1e-7d12483ac3f5.png", 
      fill: false,
      description: "АК БАРС Банк — универсальный коммерческий банк, один из ведущих региональных банков России, головной банк Группы АК БАРС."
    },
    { 
      name: "METRO Cash & Carry", 
      logo: "https://cdn.poehali.dev/files/a71337b8-04e1-4d7b-aba1-91c14cadca73.jpg", 
      fill: true,
      description: "METRO Cash & Carry — международная торговая компания, специализирующаяся на оптовой торговле для профессиональных клиентов."
    },
    { 
      name: "ООО СИБУР", 
      logo: "https://cdn.poehali.dev/files/9bbdfe7f-cb6b-4f10-84ae-e38963fa5ebc.jpg", 
      fill: true,
      description: "СИБУР — крупнейшая интегрированная нефтехимическая компания России, ведущий производитель полимеров, синтетических каучуков и пластиков."
    },
    { 
      name: "ООО \"МАРС\"", 
      logo: "https://cdn.poehali.dev/files/3162cc44-7d7e-4f3d-80a4-8e58c4a194a2.png", 
      fill: false,
      description: "МАРС — международная компания, один из крупнейших производителей кондитерских изделий, кормов для домашних животных и других потребительских товаров."
    },
    { 
      name: "Красное-Белое", 
      logo: "https://cdn.poehali.dev/files/6a500e79-e412-442d-94fa-d956df09a10c.jpg", 
      fill: false,
      description: "Красное&Белое — крупнейшая специализированная алкогольная розничная сеть России, предлагающая широкий ассортимент алкогольных напитков."
    },
    { 
      name: "АО Селектел", 
      logo: "https://cdn.poehali.dev/files/eacda7fd-e1ea-4eea-a865-6a5e3c5e311e.jpg", 
      fill: false,
      description: "Селектел — российская телекоммуникационная компания, предоставляющая услуги связи и IT-решения для бизнеса."
    },
    { 
      name: "Авито", 
      logo: "https://cdn.poehali.dev/files/e6396333-07ae-4fa2-bf67-1e803cd08b9c.png", 
      fill: false,
      description: "Авито — крупнейшая российская интернет-площадка для размещения объявлений о товарах, услугах, вакансиях и резюме."
    },
    { 
      name: "ТБанк", 
      logo: "https://cdn.poehali.dev/files/211d09a5-509c-4f60-bd1b-7840a7db6ac8.jpg", 
      fill: true,
      description: "Т-Банк (ранее Тинькофф Банк) — российский частный банк, специализирующийся на дистанционном банковском обслуживании и инновационных финансовых продуктах."
    }
  ];

  const handleClientClick = (client: typeof clients[0]) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Нам доверяют</h2>
          <p className="premium-body text-gray-700 max-w-2xl mx-auto">
            Нам доверяют ведущие российские компании из различных отраслей экономики
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {clients.slice(0, showAll ? clients.length : 12).map((client, index) => (
            <div 
              key={index} 
              onClick={() => handleClientClick(client)}
              className={`${client.fill ? 'p-0 overflow-hidden' : 'flex items-center justify-center p-4'} ${(client.name === 'ООО СИБУР' || client.name === 'METRO Cash & Carry') ? 'p-2' : client.fill ? 'p-0' : 'p-4'} bg-white border-2 border-professional-rolexGold/30 rounded-lg hover:shadow-lg hover:border-professional-rolexGold transition-all duration-300 hover:scale-105 group aspect-square cursor-pointer`}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} логотип`}
                className={`${client.fill ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'} filter group-hover:brightness-110 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline"
              className="border-professional-rolexGold text-professional-rolexGold hover:bg-professional-rolexGold hover:text-white"
            >
              Показать остальных
            </Button>
          </div>
        )}

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                {selectedClient?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src={selectedClient?.logo} 
                    alt={`${selectedClient?.name} логотип`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedClient?.description}
              </p>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}