import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function OfficeEquipment() {
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
                Офисная техника
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Утилизация офисной техники
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Профессиональная утилизация МФУ, принтеров и другой офисной техники
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
                Почему утилизация офисной техники критически важна?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Каждодневная работа офисов требует больших объемов оргтехники, и с её использованием возникает необходимость утилизации. МФУ, принтеры, клавиатуры, мыши и другие устройства имеют ограниченный срок службы, и после их списания не рекомендуется просто выбрасывать их на свалку.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Офисная техника часто содержит опасные материалы, включая картриджи с чернилами и батарейки, которые могут привести к загрязнению окружающей среды. Утилизация позволяет безопасно удалять такие компоненты и предотвращает экологические риски. Больше того, в рамках РОП компании, производящие или импортирующие такую технику, обязаны обеспечить её правильную утилизацию и уплачивать экологический сбор, что также способствует финансовому стимулированию организации эффективной системы утилизации.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Утилизируем офисную технику безопасно
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Получите бесплатную консультацию по утилизации офисного оборудования
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