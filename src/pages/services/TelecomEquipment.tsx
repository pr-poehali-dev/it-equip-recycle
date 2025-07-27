import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function TelecomEquipment() {
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
                Телекоммуникационное оборудование
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Утилизация телекоммуникационного оборудования
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Безопасная утилизация сетевого оборудования и средств связи
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
                Значение утилизации телекоммуникационного оборудования
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Телекоммуникационное оборудование, такое как маршрутизаторы, коммутаторы и аналоговые ТВ-передатчики, также подлежит утилизации. Как и в случае с компьютерами и офисной техникой, устаревшее оборудование может содержать опасные компоненты и материалы, включая свинец и полихлорированные бифенилы, которые могут быть вредны для здоровья человека и окружающей среды.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                К тому же, утилизация старого телекоммуникационного оборудования открывает новые возможности для использования вторичных материалов в производстве новых устройств. В рамках РОП производители обязаны позаботиться о безопасной утилизации своей продукции, что формирует культуру ответственного потребления и производства.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Утилизация телекоммуникационного оборудования
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Профессиональная переработка сетевого оборудования и средств связи
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