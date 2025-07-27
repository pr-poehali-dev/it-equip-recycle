import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function SpecializedServices() {
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
                Специализированные услуги
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Специализированные услуги по утилизации
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Полный спектр услуг по утилизации электронных компонентов и оборудования
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
                Специализированные услуги: необходимость и преимущества
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                В условиях постоянного роста объема электроотходов специализированные услуги по утилизации становятся неотъемлемой частью любой компании. Утилизация оборудования, аккумуляторов и печатных плат важна не только для снижения количества отходов, но и для предотвращения утечек опасных веществ, способных навредить экологии.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Организации, осуществляющие утилизацию, должны быть сертифицированы и следовать требованиям РОП, что подтверждает их ответственность и обеспечивает выполнение законодательно установленных норм. Заключая договор на утилизацию, ваша компания избавляется от многих забот и рисков, связанных с неправильной утилизацией, что значительно упрощает процесс соблюдения экологических стандартов.
              </p>

              <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Заключение</h3>
                <p className="text-gray-700 leading-relaxed">
                  Утилизация — это не просто обязанность компаний, а важный шаг к устойчивому будущему. Обеспечивая экологически безопасное обращение с отходами, мы можем минимизировать негативное воздействие на планету и способствовать ресурсоэффективной экономике.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Специализированная утилизация
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Профессиональные услуги по утилизации любых электронных компонентов
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