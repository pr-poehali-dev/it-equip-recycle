import Icon from "@/components/ui/icon";

export default function LegalSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-gray-900 mb-4">
            Мы гарантируем <span className="text-green-600">законность</span> всех процедур
          </h2>
          
          <div className="bg-white rounded-lg p-6 mb-8 border-l-4 border-green-600">
            <div className="flex items-start space-x-4">
              <Icon name="Shield" size={24} className="text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Работая с нами, вы можете быть уверены в правильности 
                  определения остаточной ценности всей отслужившей техники
                </h3>
                <p className="text-gray-700 text-sm">
                  Мы знаем принципы справедливого оценивания и определения ценности 
                  и выдаем заключение о негодности техники к дальнейшему применению.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Штрафы за ошибки в списании */}
            <div className="bg-green-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Штрафы за ошибки в списании</h3>
              <p className="text-sm mb-6">
                налагаются за неправильное ведение бухгалтерского учета
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={20} />
                  <div>
                    <div className="font-bold">20-50 МРОТ</div>
                    <div className="text-sm">для должностных лиц</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={20} />
                  <div>
                    <div className="font-bold">100-1000 МРОТ</div>
                    <div className="text-sm">для юридических лиц</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Нарушение процедуры списания */}
            <div className="bg-white border-2 border-green-600 rounded-lg p-6">
              <div className="text-green-600 mb-4">
                <h4 className="font-bold">Нарушение процедуры списания</h4>
                <p className="text-sm">
                  ущерба администрированной и иной уголовной ответственности, поэтому что техника 
                  представляет собой материальную ценность.
                </p>
              </div>
              <div className="text-green-600 mb-4">
                <h4 className="font-bold">Неверное определение остаточной стоимости отходов</h4>
                <p className="text-sm">
                  приводит к ошибкам и влияниям бухгалтерского учета и 
                  отчетности с санкциями для руководства и главного 
                  бухгалтера организации.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Санкции за нарушение */}
            <div className="bg-green-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Санкции за нарушение правил обращения с отходами
              </h3>
              <p className="text-sm mb-4">в соответствии с ФЗ № 89</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={16} />
                  <span className="text-sm font-semibold">Выговор / увольнение</span>
                </div>
                <div className="text-sm">для должностных лиц</div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={16} />
                  <span className="text-sm font-semibold">Крупный штраф / возмещение причиненного вреда экологии</span>
                </div>
                <div className="text-sm">для юридических лиц</div>
              </div>
            </div>

            {/* Штрафы за нанесение вреда */}
            <div className="bg-green-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                Штрафы за нанесение вреда окружающей среде
              </h3>
              <p className="text-sm mb-4">согласно Кодексу административных правонарушений</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Banknote" size={16} />
                  <div>
                    <div className="font-bold text-sm">до 30 000 руб.</div>
                    <div className="text-xs">для должностных лиц</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Banknote" size={16} />
                  <div>
                    <div className="font-bold text-sm">до 250 000 руб.</div>
                    <div className="text-xs">для юридических лиц</div>
                  </div>
                </div>
                <div className="bg-green-700 rounded p-2 mt-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm font-semibold">Закрытие на срок до 3-х месяцев</span>
                  </div>
                  <p className="text-xs mt-1">
                    в случае выявления решений в предоставлении деятельности организаций в сфере утилизации отходов
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительные штрафы */}
          <div className="bg-green-600 text-white rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">
              Штрафы за выявление негативного воздействия на ОС и сокрытие 
              экологических сведений о процессе утилизации компьютеров и оргтехники
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Icon name="Banknote" size={20} />
                <div>
                  <div className="font-bold">от 2 000 до 6 000 руб.</div>
                  <div className="text-sm">для должностных лиц</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Banknote" size={20} />
                <div>
                  <div className="font-bold">от 20 000 руб. до 100 000 руб.</div>
                  <div className="text-sm">для юридических лиц</div>
                </div>
              </div>
            </div>
          </div>

          {/* Призыв к действию */}
          <div className="text-center bg-white rounded-lg p-8 border-2 border-green-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Мы справимся с <span className="text-green-600">любым объемом</span> отходов
            </h3>
            <p className="text-gray-700 mb-6">
              У нас есть все необходимые технические возможности, чтобы утилизировать большое количество отходов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}