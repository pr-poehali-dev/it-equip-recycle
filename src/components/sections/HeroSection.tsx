import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-professional-rolexGreen to-professional-rolexDarkGreen text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        <h1 className="hero-title mb-4 sm:mb-6">
          Профессиональная утилизация <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>ИТ-оборудования
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Экологически безопасная утилизация компьютерной техники с полным пакетом документов. 
          Соответствие всем требованиям законодательства.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 min-h-[48px] px-6" onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}>
            <Icon name="Calculator" size={60} className="mr-2 text-professional-rolexGold" />
            Рассчитать стоимость
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6 lg:p-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-professional-rolexGold" />
            </div>
            <h3 className="font-semibold mb-2">Лицензии и сертификаты</h3>
            <p className="text-white/90 text-sm">Полное соответствие экологическим требованиям</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Icon name="Truck" size={24} className="text-professional-rolexGold" />
            </div>
            <h3 className="font-semibold mb-2">Бесплатный вывоз</h3>
            <p className="text-white/90 text-sm">От 10 единиц техники по Москве и Московской области</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Icon name="FileCheck" size={24} className="text-professional-rolexGold" />
            </div>
            <h3 className="font-semibold mb-2">Документооборот</h3>
            <p className="text-white/90 text-sm">Акты, справки и сертификаты об утилизации</p>
          </div>
        </div>
      </div>
    </section>
  );
}