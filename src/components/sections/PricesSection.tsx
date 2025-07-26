import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PricesSectionProps {
  onPlanSelect: (planName: string) => void;
  selectedPlan?: string;
}

export default function PricesSection({ onPlanSelect, selectedPlan }: PricesSectionProps) {
  return (
    <section id="prices" className="py-20 bg-professional-darkChocolate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 text-[#ffffff]">Прозрачное ценообразование</h2>
          <p className="text-[#ffffff]">Стоимость зависит от типа и количества оборудования</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-center">Стандартный</CardTitle>
              <CardDescription className="text-center">Для малого бизнеса</CardDescription>
              <div className="text-center">
                <span className="premium-heading text-primary">от 500₽</span>
                <span className="text-gray-600">/единица</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Утилизация компьютеров
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Акт передачи
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Вывоз от 10 единиц
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Справка об утилизации
                </li>
                <li className="flex items-center opacity-50">
                  <Icon name="X" size={16} className="text-red-500 mr-2" />
                  <span className="line-through text-gray-500">Любое ИТ оборудование</span>
                </li>
              </ul>
              <Button 
                className={`w-full mt-6 min-h-[44px] ${selectedPlan === 'Стандартный' ? 'bg-professional-rolexGold hover:bg-professional-rolexLightGold text-gray-900 font-semibold' : ''}`}
                onClick={() => onPlanSelect('Стандартный')}
                disabled={selectedPlan === 'Стандартный'}
              >
                {selectedPlan === 'Стандартный' ? (
                  <span className="text-gray-900 font-semibold">✓ Выбранный план</span>
                ) : (
                  'Выбрать план'
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="relative border-primary border-2">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-center">Корпоративный</CardTitle>
              <CardDescription className="text-center">Для среднего бизнеса</CardDescription>
              <div className="text-center">
                <span className="premium-heading text-primary">от 300₽</span>
                <span className="text-gray-600">/единица</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Любое ИТ-оборудование
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Полный пакет документов
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Срочный вывоз 24/7
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Экологический сертификат
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Консультации по утилизации
                </li>
              </ul>
              <Button 
                className={`w-full mt-6 min-h-[44px] ${selectedPlan === 'Корпоративный' ? 'bg-professional-rolexGold hover:bg-professional-rolexLightGold text-gray-900 font-semibold' : ''}`}
                onClick={() => onPlanSelect('Корпоративный')}
                disabled={selectedPlan === 'Корпоративный'}
              >
                {selectedPlan === 'Корпоративный' ? (
                  <span className="text-gray-900 font-semibold">✓ Выбранный план</span>
                ) : (
                  'Выбрать план'
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-center">Премиум</CardTitle>
              <CardDescription className="text-center">Для крупных компаний</CardDescription>
              <div className="text-center">
                <span className="premium-heading text-primary">от 200₽</span>
                <span className="text-gray-600">/единица</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Все виды техники
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Персональный менеджер
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Договор на обслуживание
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Сертификат ISO 14001
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  Аудит утилизации
                </li>
              </ul>
              <Button 
                className={`w-full mt-6 min-h-[44px] ${selectedPlan === 'Премиум' ? 'bg-professional-rolexGold hover:bg-professional-rolexLightGold text-gray-900 font-semibold' : ''}`}
                onClick={() => onPlanSelect('Премиум')}
                disabled={selectedPlan === 'Премиум'}
              >
                {selectedPlan === 'Премиум' ? (
                  <span className="text-gray-900 font-semibold">✓ Выбранный план</span>
                ) : (
                  'Связаться с нами'
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}