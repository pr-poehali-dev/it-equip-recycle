import Icon from "@/components/ui/icon";

export default function GeographySection() {
  const cities = ["Москва и Московская область", "Санкт-Петербург и Ленинградская область", "Новосибирск", "Екатеринбург", "Казань", "Н.Новгород", 
    "Челябинск", "Самара", "Омск", "Ростов-на-Дону", "Уфа", "Красноярск",
    "Воронеж", "Пермь", "Волгоград", "Краснодар", "Саратов", "Тюмень"];

  return (
    <section className="py-16 bg-professional-darkChocolate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4 text-white">География присутствия</h2>
          <p className="max-w-2xl mx-auto text-gray-200">
            Мы работаем во всех крупных городах России, обеспечивая быстрый и качественный сервис по утилизации ИТ-оборудования
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-7xl mx-auto">
          {cities.map((city, index) => (
            <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group border border-professional-rolexGold/50">
              <Icon name="MapPin" size={20} className="mx-auto mb-2 text-professional-rolexGold group-hover:text-professional-rolexLightGold transition-colors" />
              <div className="text-sm font-medium text-white/90 group-hover:text-white leading-tight">{city}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="rounded-lg p-8 max-w-4xl mx-auto bg-professional-rolexLightGray shadow-sm">
            <Icon name="Phone" size={24} className="text-professional-rolexGold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Единый федеральный номер</h3>
            <p className="text-slate-700 mb-4">
              Один номер для всех регионов России. Мы автоматически переадресуем ваш звонок в ближайший офис.
            </p>
            <div className="text-2xl font-bold text-primary">8 (901) 862-81-81</div>
            <div className="text-sm text-slate-600 mt-1">Звонок бесплатный из любого региона</div>
          </div>
        </div>
      </div>
    </section>
  );
}