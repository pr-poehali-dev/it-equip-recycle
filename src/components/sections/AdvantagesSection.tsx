import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function AdvantagesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-gray-900 mb-4">
            <span className="text-green-600">Преимущества</span> работы с нами
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="Shield" size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Работаем 100% легально</h3>
                <p className="text-gray-700">
                  Имеем лицензию на сбор, транспортирование, обработку и 
                  утилизацию отходов.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="PiggyBank" size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Гарантируем низкую цену</h3>
                <p className="text-gray-700">
                  Стараемся любыми способами уложиться в ваш бюджет. 
                  Найдете дешевле — верним разницу без лишних вопросов.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="Leaf" size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Заботимся об экологии</h3>
                <p className="text-gray-700">
                  Занимаемся реальной утилизацией отходов с соблюдением 
                  экологических норм на всех этапах обращения с ними.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Работаем по всей России</h3>
                <p className="text-gray-700">
                  С 2012 года успешно собираем, транспортируем и утилизируем 
                  отходы предприятий и частных лиц в 85-ти регионах РФ.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute top-0 left-4 text-6xl font-bold text-green-200 z-0">1</div>
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
              {expandedCard === 1 && (
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
              )}
              <div className="mt-4">
                <button 
                  onClick={() => toggleCard(1)}
                  className="text-green-600 font-semibold hover:underline focus:outline-none"
                >
                  {expandedCard === 1 ? 'Скрыть ↑' : 'Подробнее →'}
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute top-0 left-4 text-6xl font-bold text-green-200 z-0">2</div>
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
              {expandedCard === 2 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm mb-3">
                    Это второй этап утилизации отходов, на котором мы в согласованные с вами дату и время осуществляем сбор отходов в специальную тару (в зависимости от объема, вида и класса отходов) и погрузку в оптимальный транспорт.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Неправильная погрузка и перевозка отходов может угрожать здоровью и жизни людей. Мы гарантируем выполнение правил и законных предписаний при транспортировке отходов всех классов опасности.
                  </p>
                </div>
              )}
              <div className="mt-4">
                <button 
                  onClick={() => toggleCard(2)}
                  className="text-green-600 font-semibold hover:underline focus:outline-none"
                >
                  {expandedCard === 2 ? 'Скрыть ↑' : 'Подробнее →'}
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="absolute top-0 left-4 text-6xl font-bold text-green-200 z-0">3</div>
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
              {expandedCard === 3 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm mb-3">
                    Это третий и завершающий этап утилизации отходов. Оригиналы всех необходимых документов с подписями и печатями мы направляем Почтой России на фактический адрес вашей компании. По готовности высылаем электронной почтой скан-копии.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Вам останется только осуществить расчет экологического сбора и оплатить его до 15-го апреля года, следующего за отчетным, а также сдать отчетность по утилизации строго до 1-го апреля.
                  </p>
                </div>
              )}
              <div className="mt-4">
                <button 
                  onClick={() => toggleCard(3)}
                  className="text-green-600 font-semibold hover:underline focus:outline-none"
                >
                  {expandedCard === 3 ? 'Скрыть ↑' : 'Подробнее →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}