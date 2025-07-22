import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-professional-rolexLightGray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="section-title text-gray-900 mb-6">О компании Utilizon</h2>
            <div className="space-y-4 premium-body text-gray-700">
              <p>
                <strong>Utilizon</strong> — ведущая компания России в сфере экологически безопасной утилизации 
                ИТ-оборудования с 2013 года. Мы обеспечиваем полное соответствие экологическим стандартам 
                и требованиям законодательства РФ.
              </p>
              <p>
                Наша миссия — сделать процесс утилизации компьютерной техники простым, прозрачным и 
                экологически ответственным. Мы работаем как с крупными корпорациями, так и с малыми предприятиями.
              </p>
              <p>
                За годы работы мы утилизировали более <strong>1 800 000 единиц</strong> различного 
                ИТ-оборудования, выдали тысячи сертификатов об утилизации и помогли компаниям 
                соблюдать экологические требования.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg" 
                className="min-h-[48px]"
                onClick={() => {
                  const licensesSection = document.getElementById('licenses');
                  licensesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="FileText" size={20} className="mr-2 text-professional-rolexGold" />
                Скачать сертификаты
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <Card className="text-center p-3 sm:p-6">
              <CardContent className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">12</div>
                <div className="text-gray-600 text-xs sm:text-sm leading-tight">лет опыта</div>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-6">
              <CardContent className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">1.8М+</div>
                <div className="text-gray-600 text-xs sm:text-sm leading-tight">утилизированных единиц</div>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-6">
              <CardContent className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">18</div>
                <div className="text-gray-600 text-xs sm:text-sm leading-tight">городов присутствия</div>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-6">
              <CardContent className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">700</div>
                <div className="text-gray-600 text-xs sm:text-sm leading-tight">довольных клиентов</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}