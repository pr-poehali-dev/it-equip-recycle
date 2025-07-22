import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import CustomLogo from "@/components/ui/custom-logo";
import OrangeCircle from "@/components/ui/orange-circle";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-professional-darkChocolate border-b border-professional-chocolate sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2 sm:space-x-3 ml-4 sm:ml-8">
            <CustomLogo size={144} className="sm:hidden" />
            <CustomLogo size={192} className="hidden sm:block" />
            <span className="text-white font-sans font-black text-xl sm:text-2xl md:text-3xl" style={{ letterSpacing: '0.1em', fontWeight: '1200' }}>utilizon</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-white hover:text-professional-rolexGold transition-colors">Услуги</a>
            <a href="#prices" className="text-white hover:text-professional-rolexGold transition-colors">Цены</a>
            <a href="#about" className="text-white hover:text-professional-rolexGold transition-colors">О нас</a>
            <a href="#clients" className="text-white hover:text-professional-rolexGold transition-colors">Клиенты</a>
            <a href="#licenses" className="text-white hover:text-professional-rolexGold transition-colors">Лицензии</a>
            <a href="#faq" className="text-white hover:text-professional-rolexGold transition-colors">Вопросы</a>
            <a href="#contacts" className="text-white hover:text-professional-rolexGold transition-colors">Контакты</a>
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button 
              size="sm" 
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-white min-h-[40px] px-4"
              onClick={() => window.open('tel:+79018628181', '_self')}
            >
              <Icon name="Phone" size={16} className="mr-2 text-professional-rolexGold" />
              <span className="text-sm font-semibold text-professional-rolexGold">8 (901) 862-81-81</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-8">
                      <CustomLogo size={72} className="mr-2" />
                      <span className="font-black text-xl">utilizon</span>
                    </div>
                    
                    <nav className="flex flex-col space-y-4 flex-1">
                      <a 
                        href="#services" 
                        className="text-gray-700 hover:text-professional-rolexGold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Услуги
                      </a>
                      <a 
                        href="#prices" 
                        className="text-gray-700 hover:text-professional-rolexGold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Цены
                      </a>
                      <a 
                        href="#about" 
                        className="text-gray-700 hover:text-professional-rolexGold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        О нас
                      </a>
                      <a 
                        href="#clients" 
                        className="text-gray-700 hover:text-professional-rolexGold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Клиенты
                      </a>
                      <a 
                        href="#licenses" 
                        className="text-gray-700 hover:text-professional-rolexGold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Лицензии
                      </a>
                      <a 
                        href="#faq" 
                        className="text-gray-700 hover:text-professional-rolexGold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Вопросы
                      </a>
                      <a 
                        href="#contacts" 
                        className="text-gray-700 hover:text-professional-rolexGold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Контакты
                      </a>
                    </nav>
                    
                    <div className="mt-auto pt-4 border-t">
                      <Button 
                        className="w-full mb-4 bg-primary hover:bg-primary/90 text-white"
                        onClick={() => {
                          window.open('tel:+79018628181', '_self');
                          setMobileMenuOpen(false);
                        }}
                      >
                        <Icon name="Phone" size={16} className="mr-2" />
                        8 (901) 862-81-81
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}