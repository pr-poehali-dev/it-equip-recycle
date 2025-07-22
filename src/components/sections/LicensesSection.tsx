import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function LicensesSection() {
  return (
    <section id="licenses" className="py-20 bg-professional-darkChocolate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">Лицензии и документы</h2>
          <p className="text-gray-100">Полное соответствие требованиям законодательства</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover-scale">
            <CardHeader>
              <Icon name="FileText" size={48} className="text-professional-rolexGold mx-auto mb-4" />
              <CardTitle>Лицензия на утилизацию</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Лицензия Росприроднадзора на деятельность по сбору, транспортированию и обезвреживанию отходов
              </CardDescription>
              <Button variant="outline" className="mt-4 min-h-[44px]">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover-scale">
            <CardHeader>
              <Icon name="Award" size={48} className="text-professional-rolexGold mx-auto mb-4" />
              <CardTitle>ISO 14001</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Сертификат системы экологического менеджмента ISO 14001:2015
              </CardDescription>
              <Button variant="outline" className="mt-4 min-h-[44px]">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover-scale">
            <CardHeader>
              <Icon name="Shield" size={48} className="text-professional-rolexGold mx-auto mb-4" />
              <CardTitle>Страховой полис</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Полис страхования ответственности при обращении с отходами производства
              </CardDescription>
              <Button variant="outline" className="mt-4 min-h-[44px]">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover-scale">
            <CardHeader>
              <Icon name="Building" size={48} className="text-professional-rolexGold mx-auto mb-4" />
              <CardTitle>Свидетельство СРО</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Членство в саморегулируемой организации в области обращения с отходами
              </CardDescription>
              <Button variant="outline" className="mt-4 min-h-[44px]">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 sm:p-6 lg:p-8 mt-12">
          <div className="text-center">
            <Icon name="Info" size={24} className="text-professional-rolexGold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-secondary mb-4">Документы, которые вы получите</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Акт приема-передачи</h4>
                <p className="premium-body text-gray-700 text-sm">Подтверждает факт передачи оборудования на утилизацию</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Справка об утилизации</h4>
                <p className="premium-body text-gray-700 text-sm">Документ для налогового учета и экологической отчетности</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Экологический паспорт</h4>
                <p className="premium-body text-gray-700 text-sm">Сертификат соответствия экологическим требованиям</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}