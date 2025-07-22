import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}

interface ServicesSectionProps {
  services?: Service[];
}

export default function ServicesSection({ services = [] }: ServicesSectionProps) {
  const defaultServices: Service[] = [
    {
      icon: "Monitor",
      title: "Компьютеры и ноутбуки",
      description: "Утилизация настольных компьютеров, ноутбуков и планшетов",
      price: "от 500₽"
    },
    {
      icon: "Server",
      title: "Серверное оборудование",
      description: "Профессиональная утилизация серверов и сетевого оборудования",
      price: "от 1000₽"
    },
    {
      icon: "Printer",
      title: "Офисная техника",
      description: "Принтеры, сканеры, МФУ и другая офисная техника",
      price: "от 300₽"
    },
    {
      icon: "Smartphone",
      title: "Мобильные устройства",
      description: "Телефоны, планшеты и другие портативные устройства",
      price: "от 200₽"
    }
  ];

  const servicesToDisplay = services.length > 0 ? services : defaultServices;
  return (
    <section id="services" className="py-20 bg-professional-rolexCream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Наши услуги</h2>
          <p className="premium-body text-gray-700 max-w-2xl mx-auto">
            Комплексное решение по утилизации любого ИТ-оборудования с соблюдением экологических норм
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesToDisplay.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name={service.icon as any} size={32} className="text-professional-rolexGold" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <Badge variant="outline" className="text-primary border-primary">
                  {service.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}