import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function PricesSection() {
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
              </ul>
              <Button className="w-full mt-6 min-h-[44px]">Выбрать план</Button>
            </CardContent>
          </Card>

          <Card className="relative border-primary border-2 bg-gray-400">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-center text-white">Корпоративный</CardTitle>
              <CardDescription className="text-center text-white/90">Для среднего бизнеса</CardDescription>
              <div className="text-center">
                <span className="premium-heading text-white">от 300₽</span>
                <span className="text-white/80">/единица</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-white">Любое ИТ-оборудование</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-white">Полный пакет документов</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-white">Срочный вывоз 24/7</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-white">Экологический сертификат</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-white">Консультации по утилизации</span>
                </li>
              </ul>
              <Button className="w-full mt-6 min-h-[44px] bg-white text-gray-800 hover:bg-gray-100">Выбрать план</Button>
            </CardContent>
          </Card>

          <Card className="relative bg-black text-white">
            <CardHeader>
              <CardTitle className="text-center text-professional-rolexGold">Премиум</CardTitle>
              <CardDescription className="text-center text-professional-rolexGold/80">Для крупных компаний</CardDescription>
              <div className="text-center">
                <span className="premium-heading text-professional-rolexGold">от 200₽</span>
                <span className="text-professional-rolexGold/70">/единица</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-professional-rolexGold">Все виды техники</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-professional-rolexGold">Персональный менеджер</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-professional-rolexGold">Договор на обслуживание</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-professional-rolexGold">Сертификат ISO 14001</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-professional-rolexGold mr-2" />
                  <span className="text-professional-rolexGold">Аудит утилизации</span>
                </li>
              </ul>
              <Button className="w-full mt-6 min-h-[44px] bg-professional-rolexGold text-black hover:bg-professional-rolexLightGold">Связаться с нами</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}