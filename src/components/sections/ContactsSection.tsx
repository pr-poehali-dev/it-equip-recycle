import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  comment: string;
  file: File | null;
  equipmentType: string;
  quantity: string;
}

interface ContactsSectionProps {
  formData: FormData;
  setFormData: (data: FormData | ((prev: FormData) => FormData)) => void;
  fileInputRef: RefObject<HTMLInputElement>;
  handleSubmit: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContactsSection({ 
  formData, 
  setFormData, 
  fileInputRef, 
  handleSubmit, 
  handleFileChange 
}: ContactsSectionProps) {
  return (
    <section id="contacts" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-200">Готовы ответить на ваши вопросы и принять заявку</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Icon name="Phone" size={20} className="text-professional-rolexGold mr-4" />
                <div>
                  <div className="font-semibold text-slate-200">Телефон</div>
                  <div className="text-white font-medium">+7 (901) 862-81-81</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Icon name="Mail" size={20} className="text-professional-rolexGold mr-4" />
                <div>
                  <div className="font-semibold text-slate-200">Email</div>
                  <div className="text-white font-medium">commerce@rusutil-1.ru</div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Icon name="MapPin" size={20} className="text-professional-rolexGold mr-4 mt-1" />
                <div>
                  <div className="font-semibold text-slate-200">Головной офис</div>
                  <div className="text-white font-medium">г. Москва, ул. Лефортовский вал, дом 16А, этаж 1, помещение I, комната 21Б, офис 28</div>
                  <div className="text-sm text-teal-300 mt-1">Филиалы в 30+ городах России</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Icon name="Clock" size={20} className="text-professional-rolexGold mr-4" />
                <div>
                  <div className="font-semibold text-slate-200">Режим работы</div>
                  <div className="text-white font-medium">Пн-Пт: 10:00-20:00</div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-600 p-6 rounded-lg mt-8">
              <h4 className="font-bold text-white mb-4">Экстренная утилизация 24/7 *</h4>
              <p className="text-gray-100 mb-4">Для срочных случаев мы предоставляем услугу экстренной утилизации в любое время суток. 

* Только Москва и Московская область, г. Казань.</p>
              <Button className="bg-white text-red-600 hover:bg-gray-100 min-h-[48px] px-4">
                <Icon name="AlertCircle" size={16} className="mr-2" />
                Экстренный вызов
              </Button>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 30 минут</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Имя</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Компания</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                    placeholder="Название компании"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Телефон</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Тип оборудования</label>
                <select 
                  value={formData.equipmentType}
                  onChange={(e) => setFormData(prev => ({ ...prev, equipmentType: e.target.value }))}
                  className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base"
                >
                  <option>Компьютеры и ноутбуки</option>
                  <option>Серверное оборудование</option>
                  <option>Офисная техника</option>
                  <option>Мобильные устройства</option>
                  <option>Смешанный тип</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Примерное количество</label>
                <input 
                  type="number" 
                  value={formData.quantity}
                  onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                  className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                  placeholder="Количество единиц"
                />
              </div>
              <div>
                <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">
                  Спецификация оборудования
                  <span className="text-xs text-gray-600 ml-1">(Excel, Word, PDF)</span>
                </label>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-md p-4 sm:p-6 min-h-[80px] text-center hover:border-primary transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Клик по области загрузки файла');
                    if (fileInputRef.current) {
                      console.log('Найден input файла через ref, вызываем click');
                      fileInputRef.current.click();
                    } else {
                      console.error('Не найден элемент через fileInputRef');
                    }
                  }}
                >
                  <Icon name="Upload" size={24} className="text-professional-rolexGold mx-auto mb-2" />
                  {formData.file ? (
                    <p className="text-sm text-green-600 mb-1">
                      ✓ Выбран файл: {formData.file.name}
                    </p>
                  ) : (
                    <p className="text-sm premium-body text-gray-700 mb-1">
                      <span className="text-primary font-medium">Нажмите для выбора файла</span> или перетащите сюда
                    </p>
                  )}
                  <p className="text-xs text-gray-400">Поддерживаются: .xlsx, .xls, .docx, .doc, .pdf (макс. 10 МБ)</p>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={(e) => {
                    console.log('Файл выбран:', e.target.files?.[0]);
                    handleFileChange(e);
                  }}
                  className="hidden" 
                  accept=".xlsx,.xls,.docx,.doc,.pdf" 
                />
              </div>
              <div>
                <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Комментарий</label>
                <textarea 
                  value={formData.comment}
                  onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                  className="w-full px-4 py-3 min-h-[88px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" 
                  placeholder="Дополнительная информация, особые требования к утилизации..."
                />
              </div>
              <div className="flex items-center space-x-2 text-sm premium-body text-gray-700">
                <input type="checkbox" id="agreement" className="rounded border-gray-300 w-4 h-4" />
                <label htmlFor="agreement">
                  Согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и 
                  <a href="#" className="text-primary hover:underline ml-1">условиями обработки данных</a>
                </label>
              </div>
              <Button 
                type="button"
                className="w-full min-h-[48px]"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Клик по кнопке');
                  handleSubmit();
                }}
              >
                <Icon name="Calculator" size={16} className="mr-2" />
                Получить расчет стоимости
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}