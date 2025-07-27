import Icon from "@/components/ui/icon";

export default function LegalSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center text-black mb-4">
            Мы гарантируем законность всех процедур
          </h2>
          
          <div className="bg-white rounded-lg p-6 mb-8 border border-gray-300">
            <div className="flex items-start space-x-4">
              <Icon name="Shield" size={24} className="text-professional-rolexGold mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-black mb-2">
                  Работая с нами, вы можете быть уверены в правильности 
                  определения остаточной ценности всей отслужившей техники
                </h3>
                <p className="text-black text-sm">
                  Мы знаем принципы справедливого оценивания и определения ценности 
                  и выдаем заключение о негодности техники к дальнейшему применению.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Штрафы за ошибки в списании */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black">Штрафы за ошибки в списании</h3>
              <p className="text-sm mb-6 text-black">
                налагаются за неправильное ведение бухгалтерского учета
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={20} className="text-professional-rolexGold" />
                  <div>
                    <div className="font-bold text-black">20-50 МРОТ</div>
                    <div className="text-sm text-black">для должностных лиц</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={20} className="text-professional-rolexGold" />
                  <div>
                    <div className="font-bold text-black">100-1000 МРОТ</div>
                    <div className="text-sm text-black">для юридических лиц</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Нарушение процедуры списания */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="text-black mb-4">
                <h4 className="font-bold">Нарушение процедуры списания</h4>
                <p className="text-sm">
                  ущерба администрированной и иной уголовной ответственности, поэтому что техника 
                  представляет собой материальную ценность.
                </p>
              </div>
              <div className="text-black mb-4">
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
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black">
                Санкции за нарушение правил обращения с отходами
              </h3>
              <p className="text-sm mb-4 text-black">в соответствии с ФЗ № 89</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={16} className="text-professional-rolexGold" />
                  <span className="text-sm font-semibold text-black">Выговор / увольнение</span>
                </div>
                <div className="text-sm text-black">для должностных лиц</div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" size={16} className="text-professional-rolexGold" />
                  <span className="text-sm font-semibold text-black">Крупный штраф / возмещение причиненного вреда экологии</span>
                </div>
                <div className="text-sm text-black">для юридических лиц</div>
              </div>
            </div>

            {/* Штрафы за нанесение вреда */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-black">
                Штрафы за нанесение вреда окружающей среде
              </h3>
              <p className="text-sm mb-4 text-black">согласно Кодексу административных правонарушений</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Banknote" size={16} className="text-professional-rolexGold" />
                  <div>
                    <div className="font-bold text-sm text-black">до 30 000 руб.</div>
                    <div className="text-xs text-black">для должностных лиц</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Banknote" size={16} className="text-professional-rolexGold" />
                  <div>
                    <div className="font-bold text-sm text-black">до 250 000 руб.</div>
                    <div className="text-xs text-black">для юридических лиц</div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded p-2 mt-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-professional-rolexGold" />
                    <span className="text-sm font-semibold text-black">Закрытие на срок до 3-х месяцев</span>
                  </div>
                  <p className="text-xs mt-1 text-black">
                    в случае выявления решений в предоставлении деятельности организаций в сфере утилизации отходов
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительные штрафы */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-black">
              Штрафы за выявление негативного воздействия на ОС и сокрытие 
              экологических сведений о процессе утилизации компьютеров и оргтехники
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Icon name="Banknote" size={20} className="text-professional-rolexGold" />
                <div>
                  <div className="font-bold text-black">от 2 000 до 6 000 руб.</div>
                  <div className="text-sm text-black">для должностных лиц</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Banknote" size={20} className="text-professional-rolexGold" />
                <div>
                  <div className="font-bold text-black">от 20 000 руб. до 100 000 руб.</div>
                  <div className="text-sm text-black">для юридических лиц</div>
                </div>
              </div>
            </div>
          </div>

          {/* Призыв к действию */}
          <div className="text-center bg-white rounded-lg p-8 border border-gray-300">
            <h3 className="text-2xl font-bold text-black mb-4">
              Мы справимся с любым объемом отходов
            </h3>
            <p className="text-black mb-6">
              У нас есть все необходимые технические возможности, чтобы утилизировать большое количество отходов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}