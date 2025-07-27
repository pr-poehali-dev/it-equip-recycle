import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function AdvantagesSection() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (cardIndex: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardIndex)) {
        newSet.delete(cardIndex);
      } else {
        newSet.add(cardIndex);
      }
      return newSet;
    });
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto mb-12">
            <Icon name="Award" size={32} className="text-rolexGold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Почему нас выбирают</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <span className="text-xl mr-3 mt-1">🏆</span>
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Проверенное качество</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed flex-grow">Работаем с крупнейшими компаниями России с 2013 года</p>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <span className="text-xl mr-3 mt-1">📋</span>
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Полный комплаенс</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed flex-grow">Соответствие всем требованиям корпоративного документооборота</p>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <span className="text-xl mr-3 mt-1">🔒</span>
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Конфиденциальность</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed flex-grow">Гарантированное уничтожение данных с носителей информации</p>
              </div>
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-3">
                  <Icon name="Clock" size={20} className="text-rolexGold mr-3 mt-1 flex-shrink-0" />
                  <h4 className="font-semibold text-gray-900 text-base leading-tight">Экономия времени</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed flex-grow">Время — самый ценный ресурс. Мы берём на себя все заботы по утилизации, чтобы вы могли сосредоточиться на своём бизнесе.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute top-0 left-4 text-6xl font-bold text-rolexLightGold z-0">1</div>
                <img 
                  src="https://cdn.poehali.dev/files/6f1078c6-c77d-4799-9ca5-9af7fd8d917b.PNG" 
                  alt="Идентификация отходов"
                  className="relative z-10 w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Идентифицируем отходы<br />
                и проводим тех. экспертизу
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Определяем класс опасности и вид отходов
              </p>
              <p className="text-gray-600 text-sm">
                Каждый вид отхода на предприятии должен быть идентифицирован и отнесен к 
                соответствующему классу опасности.
              </p>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCards.has(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm mb-3">
                    Это первый этап утилизации отходов, который мы полностью берем на себя:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• идентифицируем отходы;</li>
                    <li>• проводим необходимые для определения класса опасности отхода замеры и испытания на современном оборудовании с привлечением специализированной аккредитованной лаборатории;</li>
                    <li>• определяем класс опасности отхода;</li>
                    <li>• составляем и согласовываем в органах Росприроднадзора паспорт опасного отхода.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <button 
                  onClick={() => toggleCard(1)}
                  className="text-rolexGold font-semibold hover:underline focus:outline-none"
                >
                  {expandedCards.has(1) ? 'Скрыть ↑' : 'Подробнее →'}
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute top-0 left-4 text-6xl font-bold text-rolexLightGold z-0">2</div>
                <img 
                  src="https://cdn.poehali.dev/files/9218ff2a-1bf7-45d5-ad8b-6d473699e438.PNG" 
                  alt="Транспортировка отходов"
                  className="relative z-10 w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Грузим и вывозим отходы<br />
                собственным транспортом
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Безопасно транспортируем к месту утилизации
              </p>
              <p className="text-gray-600 text-sm">
                Сбор и транспортирование любых отходов является лицензируемой деятельностью и 
                подразумевает специальную тару и защиту.
              </p>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCards.has(2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm mb-3">
                    Это второй этап утилизации отходов, на котором мы в согласованные с вами дату и время осуществляем сбор отходов в специальную тару (в зависимости от объема, вида и класса отходов) и погрузку в оптимальный транспорт.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Неправильная погрузка и перевозка отходов может угрожать здоровью и жизни людей. Мы гарантируем выполнение правил и законных предписаний при транспортировке отходов всех классов опасности.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button 
                  onClick={() => toggleCard(2)}
                  className="text-rolexGold font-semibold hover:underline focus:outline-none"
                >
                  {expandedCards.has(2) ? 'Скрыть ↑' : 'Подробнее →'}
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute top-0 left-4 text-6xl font-bold text-rolexLightGold z-0">3</div>
                <img 
                  src="https://cdn.poehali.dev/files/e6fc3a46-d9cf-4dc9-bb99-7ca7c47eee9e.PNG" 
                  alt="Документооборот"
                  className="relative z-10 w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Готовим и направляем вам<br />
                необходимые документы
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Полный пакет экологической документации
              </p>
              <p className="text-gray-600 text-sm">
                Невыполнение нормативов преследуется по закону — предусмотрена административная и 
                уголовная ответственность.
              </p>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCards.has(3) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm mb-3">
                    Это третий и завершающий этап утилизации отходов. Оригиналы всех необходимых документов с подписями и печатями мы направляем Почтой России на фактический адрес вашей компании. По готовности высылаем электронной почтой скан-копии.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Вам останется только осуществить расчет экологического сбора и оплатить его до 15-го апреля года, следующего за отчетным, а также сдать отчетность по утилизации строго до 1-го апреля.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button 
                  onClick={() => toggleCard(3)}
                  className="text-rolexGold font-semibold hover:underline focus:outline-none"
                >
                  {expandedCards.has(3) ? 'Скрыть ↑' : 'Подробнее →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}