import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CalculatorSectionProps {
  formData: {
    name: string;
    company: string;
    phone: string;
    email: string;
    city: string;
    customCity: string;
    comment: string;
    files: File[];
    selectedPlan: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    company: string;
    phone: string;
    email: string;
    city: string;
    customCity: string;
    comment: string;
    files: File[];
    selectedPlan: string;
  }>>;
  agreed: boolean;
  setAgreed: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e?: React.MouseEvent) => Promise<void>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
  isSubmitting: boolean;
  showSuccessModal: boolean;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CalculatorSection({ 
  formData, 
  setFormData, 
  agreed, 
  setAgreed, 
  handleSubmit, 
  handleFileChange,
  removeFile,
  isSubmitting,
  showSuccessModal,
  setShowSuccessModal
}: CalculatorSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhoneCall = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('📞 Нажата кнопка "Обсудить по телефону"');
    
    const phoneNumber = '+79018628181';
    
    try {
      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
        window.location.href = `tel:${phoneNumber}`;
      } else {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(phoneNumber).then(() => {
            alert(`📞 Номер телефона скопирован в буфер обмена: ${phoneNumber}`);
          }).catch(() => {
            alert(`📞 Позвоните нам: ${phoneNumber}`);
          });
        } else {
          alert(`📞 Позвоните нам: ${phoneNumber}`);
        }
      }
      console.log('✅ Обработка звонка выполнена успешно');
    } catch (error) {
      console.error('❌ Ошибка при обработке звонка:', error);
      alert(`📞 Позвоните нам: ${phoneNumber}`);
    }
  };

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
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              {formData.selectedPlan && (
                <div className="mb-6 p-4 bg-professional-rolexGold/10 border border-professional-rolexGold/30 rounded-lg">
                  <div className="flex items-center">
                    <Icon name="Check" size={20} className="text-professional-rolexGold mr-3" />
                    <div>
                      <span className="text-professional-rolexGold font-semibold text-lg">
                        Выбранный план: {formData.selectedPlan}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        Заполните форму ниже для получения точной стоимости утилизации
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Контактное лицо *</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
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
                        onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="Название компании"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Телефон *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="+7 (000) 000-00-00"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Email *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="example@company.ru"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Город</label>
                    <select 
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({...prev, city: e.target.value, customCity: ''}))}
                      className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base"
                    >
                      <option value="">Выберите город</option>
                      <option value="Москва">Москва</option>
                      <option value="Санкт-Петербург">Санкт-Петербург</option>
                      <option value="Екатеринбург">Екатеринбург</option>
                      <option value="Новосибирск">Новосибирск</option>
                      <option value="Казань">Казань</option>
                      <option value="Нижний Новгород">Нижний Новгород</option>
                      <option value="Другой город">Другой город</option>
                    </select>
                  </div>
                  
                  {formData.city === 'Другой город' && (
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Укажите ваш город</label>
                      <input 
                        type="text" 
                        value={formData.customCity}
                        onChange={(e) => setFormData(prev => ({...prev, customCity: e.target.value}))}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="Название города"
                      />
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">
                      📎 Спецификация оборудования *
                      <span className="text-xs text-gray-600 block mt-1">Прикрепите файлы с описанием оборудования (до 5 файлов, максимум 20МБ каждый)</span>
                    </label>
                    
                    {formData.files && formData.files.length > 0 && (
                      <div className="mb-4 space-y-2">
                        <p className="text-sm font-medium text-gray-700">Загруженные файлы ({formData.files.length} из 5):</p>
                        <div className="space-y-2">
                          {formData.files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                              <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                  <Icon name="File" size={16} className="text-green-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-green-800 truncate">{file.name}</p>
                                  <p className="text-xs text-green-600">{(file.size / 1024 / 1024).toFixed(2)} МБ</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-600 hover:text-red-800 transition-colors p-1"
                              >
                                <Icon name="X" size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-all duration-300 bg-gray-50/50 cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Icon name="Upload" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                      {formData.files && formData.files.length > 0 ? (
                        <div>
                          <p className="text-sm premium-body text-green-700 mb-2 font-semibold">
                            ✓ Загружено файлов: {formData.files.length}
                          </p>
                          <p className="text-xs text-gray-600">
                            {formData.files.length < 5 ? 'Нажмите для добавления еще файлов' : 'Достигнут лимит в 5 файлов'}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm premium-body text-gray-700 mb-2">
                            <span className="text-gray-600 font-semibold">Добавить файлы</span> или перетащите сюда
                          </p>
                          <p className="text-xs text-gray-600">
                            Excel, Word, PDF • до 20 МБ каждый • до 5 файлов
                          </p>
                        </div>
                      )}
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden" 
                        accept=".xlsx,.xls,.docx,.doc,.pdf" 
                        multiple
                        onChange={handleFileChange}
                        disabled={formData.files && formData.files.length >= 5}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Дополнительная информация</label>
                    <textarea 
                      value={formData.comment}
                      onChange={(e) => setFormData(prev => ({...prev, comment: e.target.value}))}
                      className="w-full px-4 py-3 min-h-[120px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" 
                      placeholder="Опишите ваше оборудование, количество, особые требования к утилизации..."
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
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
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
                    Согласен с <a href="/privacy" className="text-primary hover:underline">политикой конфиденциальности</a>, 
                    <a href="/terms" className="text-primary hover:underline"> условиями использования</a> и 
                    обработкой персональных данных. Подтверждаю, что указанная информация достоверна.
                  </label>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <Button 
                    onClick={(e) => {
                      console.log('🔥 Клик по кнопке "Получить расчет стоимости"');
                      handleSubmit(e);
                    }}
                    type="button"
                    className="w-full min-h-[48px] bg-primary hover:bg-primary/90" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 text-professional-rolexGold animate-spin" />
                        Отправляем запрос...
                      </>
                    ) : (
                      <>
                        <Icon name="Calculator" size={20} className="mr-2 text-professional-rolexGold" />
                        Получить расчет стоимости
                      </>
                    )}
                  </Button>
                  <Button 
                    onClick={(e) => {
                      console.log('🔥 Клик по кнопке "Обсудить по телефону"');
                      handlePhoneCall(e);
                    }}
                    variant="outline" 
                    className="w-full min-h-[48px] border-primary text-primary hover:bg-primary hover:text-white" 
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

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-lg mx-4 text-center shadow-2xl border border-professional-rolexGold/20">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-professional-rolexGold/10 flex items-center justify-center border-2 border-professional-rolexGold/30">
                <Icon name="CheckCircle" size={40} className="text-professional-rolexGold" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Заявка отправлена!</h3>
              <p className="text-gray-600 mb-4">
                Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.
              </p>
              
              <Button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-primary hover:bg-primary/90"
              >
                ОК
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}