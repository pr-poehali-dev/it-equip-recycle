import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { RefObject } from "react";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  customCity: string;
  comment: string;
  file: File | null;
  selectedPlan: string;
}

interface CalculatorSectionProps {
  formData: FormData;
  setFormData: (data: FormData | ((prev: FormData) => FormData)) => void;
  agreed: boolean;
  setAgreed: (agreed: boolean) => void;
  fileInputRef: RefObject<HTMLInputElement>;
  handleSubmit: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CalculatorSection({ 
  formData, 
  setFormData, 
  agreed, 
  setAgreed, 
  fileInputRef, 
  handleSubmit, 
  handleFileChange 
}: CalculatorSectionProps) {
  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-gray-900 mb-4">Быстрая оценка стоимости</h2>
          <p className="premium-body text-gray-700 max-w-2xl mx-auto">
            Прикрепите спецификацию оборудования и получите предварительную стоимость утилизации в течение 30 минут
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="bg-emerald-800 text-white p-6">
              <div className="text-center mb-4">
                <CardTitle className="text-2xl flex items-center justify-center mb-3">
                  <Icon name="Calculator" size={72} className="mr-4 text-professional-rolexGold" />
                  <span className="text-white">Калькулятор стоимости утилизации</span>
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Заполните форму и прикрепите спецификацию оборудования для точного расчета
                </CardDescription>
              </div>
              
              {formData.selectedPlan && (
                <div className="flex justify-end">
                  <div className="bg-professional-rolexGold text-black px-6 py-3 rounded-lg font-semibold shadow-lg">
                    Выбранный план: {formData.selectedPlan}
                  </div>
                </div>
              )}
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 sm:p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Контактное лицо *</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Компания</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="Название компании"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Телефон *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Email *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Город</label>
                    <select 
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value, customCity: e.target.value !== 'Другой город' ? '' : formData.customCity})}
                      className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base"
                    >
                      <option value="">Выберите город</option>
                      <option value="Москва и Московская область">Москва и Московская область</option>
                      <option value="Санкт-Петербург и Ленинградская область">Санкт-Петербург и Ленинградская область</option>
                      <option value="Новосибирск">Новосибирск</option>
                      <option value="Екатеринбург">Екатеринбург</option>
                      <option value="Казань">Казань</option>
                      <option value="Нижний Новгород">Нижний Новгород</option>
                      <option value="Другой город">Другой город</option>
                    </select>
                    {formData.city === 'Другой город' && (
                      <input 
                        type="text" 
                        value={formData.customCity}
                        onChange={(e) => setFormData({...formData, customCity: e.target.value})}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base mt-3" 
                        placeholder="Укажите ваш город"
                      />
                    )}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">
                      📎 Спецификация оборудования *
                      <span className="text-xs text-gray-600 block mt-1">Прикрепите файл с описанием оборудования</span>
                    </label>
                    <div 
                      className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all duration-300 cursor-pointer bg-black/5"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Icon name="Upload" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                      {formData.file ? (
                        <div>
                          <p className="text-sm premium-body text-green-700 mb-2 font-semibold">
                            ✓ Файл загружен: {formData.file.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            Нажмите для выбора другого файла
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm premium-body text-gray-700 mb-2">
                            <span className="text-primary font-semibold">Выберите файл</span> или перетащите сюда
                          </p>
                          <p className="text-xs text-gray-600">
                            Excel (.xlsx, .xls), Word (.docx, .doc), PDF • до 10 МБ
                          </p>
                        </div>
                      )}
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden" 
                        accept=".xlsx,.xls,.docx,.doc,.pdf" 
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Дополнительная информация</label>
                    <textarea 
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      className="w-full px-4 py-3 min-h-[88px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" 
                      placeholder="Укажите срочность, особые требования, вопросы по утилизации..."
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <div className="flex items-start space-x-3 mb-6">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      id="calc-agreement" 
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="sr-only" 
                      required 
                    />
                    <div 
                      onClick={() => setAgreed(!agreed)}
                      className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all ${
                        agreed 
                          ? 'bg-emerald-600 border-emerald-600' 
                          : 'bg-white border-gray-300 hover:border-emerald-400'
                      }`}
                    >
                      {agreed && (
                        <svg width="12" height="12" viewBox="0 0 12 12" className="text-professional-rolexGold">
                          <path
                            fill="currentColor"
                            d="M10.28 2.28L9.72 1.72a.75.75 0 00-1.06 0L5 5.38 2.34 2.72a.75.75 0 00-1.06 0l-.56.56a.75.75 0 000 1.06L4.47 8.09a.75.75 0 001.06 0l6.75-6.75a.75.75 0 000-1.06z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <label htmlFor="calc-agreement" className="text-sm premium-body text-gray-700">
                    Согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a> и 
                    обработкой персональных данных. Подтверждаю, что указанная информация достоверна.
                  </label>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <Button 
                    onClick={() => {
                      console.log('🔥 Прямое нажатие на кнопку');
                      handleSubmit();
                    }}
                    type="button"
                    className="w-full min-h-[48px]" 
                    size="lg"
                  >
                    <Icon name="Calculator" size={20} className="mr-2 text-professional-rolexGold" />
                    Получить расчет стоимости
                  </Button>
                  <Button 
                    onClick={() => window.open('tel:+79018628181', '_self')}
                    variant="outline" 
                    className="w-full min-h-[48px]" 
                    size="lg"
                  >
                    <Icon name="Phone" size={20} className="mr-2 text-professional-rolexGold" />
                    Обсудить по телефону
                  </Button>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-center text-green-700">
                      <Icon name="Clock" size={16} className="mr-2" />
                      <span className="text-sm font-medium">Ответим в течение 30 минут в рабочее время</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}