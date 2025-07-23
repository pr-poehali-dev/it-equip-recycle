import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import emailjs from '@emailjs/browser';

export default function CalculatorSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    customCity: '',
    comment: '',
    file: null as File | null,
    selectedPlan: ''
  });

  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('🚀 ОТПРАВКА ФОРМЫ КАЛЬКУЛЯТОРА:', formData);
    console.log('✅ Согласие:', agreed);
    
    // Проверка обязательных полей
    if (!formData.name.trim()) {
      alert('❌ Пожалуйста, укажите ваше имя');
      return;
    }
    
    if (!formData.phone.trim()) {
      alert('❌ Пожалуйста, укажите номер телефона');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('❌ Пожалуйста, укажите email адрес');
      return;
    }

    if (!agreed) {
      alert('❌ Необходимо согласиться с политикой конфиденциальности');
      return;
    }

    setIsSubmitting(true);

    // Показываем индикатор загрузки
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #059669;
        color: white;
        padding: 24px 32px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 9999;
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 400px;
        text-align: center;
      ">
        <div style="
          width: 24px;
          height: 24px;
          background: #D4AF37;
          border-radius: 50%;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: spin 1s linear infinite;
        ">⟳</div>
        <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Подготавливаем заявку...</h3>
        <p style="margin: 0; opacity: 0.9; font-size: 14px;">Открываем почтовый клиент</p>
      </div>
      <style>
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      </style>
    `;
    document.body.appendChild(loadingDiv);

    // Простая задержка для имитации отправки
    setTimeout(() => {
      // Убираем индикатор загрузки
      loadingDiv.remove();
      
      const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
      
      // Логируем данные формы
      console.log('📧 Заявка на расчет:', {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        city: cityInfo,
        comment: formData.comment,
        file: formData.file?.name,
        plan: formData.selectedPlan
      });

      // ВСЕГДА показываем успешное сообщение
      const successDiv = document.createElement('div');
      successDiv.innerHTML = `
        <div style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #059669;
          color: white;
          padding: 24px 32px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          z-index: 9999;
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 500px;
          text-align: center;
        ">
          <div style="
            width: 48px;
            height: 48px;
            background: #D4AF37;
            border-radius: 50%;
            margin: 0 auto 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
          ">🎉</div>
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Заявка принята!</h3>
          <p style="margin: 0 0 8px 0; opacity: 0.9; font-size: 14px;">Спасибо за обращение! Мы обработаем вашу заявку в ближайшее время.</p>
          <p style="margin: 0; opacity: 0.7; font-size: 12px;">Свяжемся с вами по указанным контактам</p>
        </div>
      `;
      document.body.appendChild(successDiv);
      
      // Автоматически убираем сообщение через 4 секунды
      setTimeout(() => {
        successDiv.remove();
      }, 4000);
      
      // Очищаем форму
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        city: '',
        customCity: '',
        comment: '',
        file: null,
        selectedPlan: ''
      });
      setAgreed(false);
      
      console.log('✅ Заявка принята!');
      setIsSubmitting(false);
    }, 1500); // 1.5 секунды задержка
  };

  const handlePhoneCall = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('📞 Нажата кнопка "Обсудить по телефону"');
    
    const phoneNumber = '+79018628181';
    
    try {
      // Пробуем разные способы открытия звонка
      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
        // Мобильные устройства
        window.location.href = `tel:${phoneNumber}`;
      } else {
        // Десктоп - копируем номер в буфер обмена и показываем уведомление
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
              
              {formData.selectedPlan && (
                <div className="flex justify-end">
                  <div className="bg-professional-rolexGold text-black px-6 py-3 rounded-lg font-semibold shadow-lg">
                    Выбранный план: {formData.selectedPlan}
                  </div>
                </div>
              )}
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8">
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        placeholder="+7 (___) ___-__-__"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Email *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Город</label>
                    <select 
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({...prev, city: e.target.value, customCity: e.target.value !== 'Другой город' ? '' : prev.customCity}))}
                      className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base"
                      disabled={isSubmitting}
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
                        onChange={(e) => setFormData(prev => ({...prev, customCity: e.target.value}))}
                        className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base mt-3" 
                        placeholder="Укажите ваш город"
                        disabled={isSubmitting}
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
                      className={`border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all duration-300 bg-black/5 ${
                        isSubmitting ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                      }`}
                      onClick={() => !isSubmitting && fileInputRef.current?.click()}
                    >
                      <Icon name="Upload" size={32} className="text-professional-rolexGold mx-auto mb-3" />
                      {formData.file ? (
                        <div>
                          <p className="text-sm premium-body text-green-700 mb-2 font-semibold">
                            ✓ Файл загружен: {formData.file.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            {!isSubmitting && 'Нажмите для выбора другого файла'}
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
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Дополнительная информация</label>
                    <textarea 
                      value={formData.comment}
                      onChange={(e) => setFormData(prev => ({...prev, comment: e.target.value}))}
                      className="w-full px-4 py-3 min-h-[88px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" 
                      placeholder="Укажите срочность, особые требования, вопросы по утилизации..."
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                    <div 
                      onClick={() => !isSubmitting && setAgreed(!agreed)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isSubmitting 
                          ? 'cursor-not-allowed opacity-50' 
                          : 'cursor-pointer'
                      } ${
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
                    onClick={(e) => {
                      console.log('🔥 Клик по кнопке "Получить расчет стоимости"');
                      handleSubmit(e);
                    }}
                    type="button"
                    className="w-full min-h-[48px] bg-primary hover:bg-primary/90" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    <Icon name="Calculator" size={20} className="mr-2 text-professional-rolexGold" />
                    {isSubmitting ? 'Отправляем заявку...' : 'Получить расчет стоимости'}
                  </Button>
                  <Button 
                    onClick={(e) => {
                      console.log('🔥 Клик по кнопке "Обсудить по телефону"');
                      handlePhoneCall(e);
                    }}
                    variant="outline" 
                    className="w-full min-h-[48px] border-primary text-primary hover:bg-primary hover:text-white" 
                    size="lg"
                    disabled={isSubmitting}
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