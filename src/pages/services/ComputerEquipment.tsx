import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function ComputerEquipment() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-professional-rolexGold text-black">
                Компьютерная техника
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Утилизация компьютерной техники
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Экологически безопасная утилизация компьютеров, ноутбуков и мониторов с соблюдением всех стандартов
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Зачем важна утилизация компьютерной техники?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Утилизация компьютерной техники, включая компьютеры, системные блоки, ноутбуки и мониторы, становится всё более актуальной в свете растущей проблемы электроотходов. Каждый год миллионы старых компьютеров и ноутбуков попадают на свалки, в то время как их компоненты могут негативно влиять на окружающую среду. Например, элементы, содержащие свинец, ртуть и другие токсичные вещества, могут проникать в почву и водоемы, причиняя вред флоре и фауне.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Процесс утилизации включает в себя переработку подлежащих утилизации материалов, таких как пластик, стекло и различные металлы. Благодаря утилизации мы можем не только уменьшить количество отходов, но и использовать вторичные сырьё для производства новых товаров, что помогает сохранить ресурсы нашей планеты.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Кроме того, утилизация компьютерной техники необходима для соблюдения законодательства в рамках механизма Расширенной ответственности производителя (РОП), который требует от производителей и импортеров товаров обеспечивать сбор и переработку своих продуктов после их использования.
              </p>

              {/* Equipment Types */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Виды утилизируемой компьютерной техники</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-professional-rolexGold/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Monitor" size={24} className="text-professional-rolexGold" />
                    </div>
                    <CardTitle>Компьютеры и системные блоки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Настольные компьютеры, системные блоки, материнские платы и комплектующие
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-professional-rolexGold/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Laptop" size={24} className="text-professional-rolexGold" />
                    </div>
                    <CardTitle>Ноутбуки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Портативные компьютеры, нетбуки и их компоненты
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-professional-rolexGold/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="MonitorSpeaker" size={24} className="text-professional-rolexGold" />
                    </div>
                    <CardTitle>Мониторы (ЭЛТ, ЖК)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Дисплеи всех типов, включая старые ЭЛТ-мониторы и современные LCD
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-professional-rolexGold/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="HardDrive" size={24} className="text-professional-rolexGold" />
                    </div>
                    <CardTitle>Компьютерные ЗИП</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Запчасти и комплектующие: жесткие диски, память, процессоры
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Нужна утилизация компьютерной техники?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Оставьте заявку и получите бесплатную консультацию по утилизации вашего оборудования
            </p>
            <a 
              href="/#calculator"
              className="inline-flex items-center gap-2 bg-professional-rolexGold text-black px-8 py-4 rounded-lg font-semibold hover:bg-professional-rolexGold/90 transition-colors duration-300"
            >
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}