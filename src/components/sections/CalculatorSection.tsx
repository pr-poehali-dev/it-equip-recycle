import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import SuccessModal from "@/components/ui/success-modal";
import { sendFormData } from "@/lib/mail-sender";

interface CalculatorSectionProps {
  formData: any;
  setFormData: (data: any) => void;
  agreed: boolean;
  setAgreed: (agreed: boolean) => void;
  handleSubmit: (e?: React.MouseEvent) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
  isSubmitting: boolean;
  showSuccessModal: boolean;
  setShowSuccessModal: (show: boolean) => void;
}

const CITIES = [
  'Москва',
  'Санкт-Петербург', 
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Нижний Новгород',
  'Челябинск',
  'Самара',
  'Омск',
  'Ростов-на-Дону',
  'Уфа',
  'Красноярск',
  'Воронеж',
  'Пермь',
  'Волгоград',
  'Краснодар',
  'Саратов',
  'Тюмень',
  'Тольятти',
  'Ижевск',
  'Барнаул',
  'Ульяновск',
  'Иркутск',
  'Хабаровск',
  'Ярославль',
  'Владивосток',
  'Махачкала',
  'Томск',
  'Оренбург',
  'Кемерово',
  'Новокузнецк',
  'Рязань',
  'Набережные Челны',
  'Астрахань',
  'Пенза',
  'Липецк',
  'Калининград',
  'Тула',
  'Киров',
  'Чебоксары',
  'Курск',
  'Брянск',
  'Магнитогорск',
  'Иваново',
  'Тверь',
  'Ставрополь',
  'Белгород',
  'Сочи',
  'Другой город'
];

const PLAN_PRICES: { [key: string]: number } = {
  'Стандарт': 49900,
  'Оптимум': 89900,
  'Премиум': 149900,
  'Корпоративный': 249900
};

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
  const [currentStep, setCurrentStep] = useState(1);
  const [localSubmitting, setLocalSubmitting] = useState(false);

  const cityMultipliers: { [key: string]: number } = {
    'Москва': 1.2,
    'Санкт-Петербург': 1.15,
    'Новосибирск': 1.0,
    'Екатеринбург': 1.05,
    'Казань': 1.0,
    'Нижний Новгород': 1.0,
    'Челябинск': 0.95,
    'Самара': 0.95,
    'Омск': 0.9,
    'Ростов-на-Дону': 0.95,
    'Уфа': 0.9,
    'Красноярск': 1.1,
    'Воронеж': 0.9,
    'Пермь': 0.95,
    'Волгоград': 0.9,
    'Краснодар': 0.95,
    'Саратов': 0.85,
    'Тюмень': 1.1,
    'Тольятти': 0.9,
    'Ижевск': 0.85,
    'Барнаул': 0.8,
    'Ульяновск': 0.85,
    'Иркутск': 1.05,
    'Хабаровск': 1.3,
    'Ярославль': 0.9,
    'Владивосток': 1.4,
    'Махачкала': 0.8,
    'Томск': 0.95,
    'Оренбург': 0.85,
    'Кемерово': 0.9,
    'Новокузнецк': 0.85,
    'Рязань': 0.85,
    'Набережные Челны': 0.9,
    'Астрахань': 0.85,
    'Пенза': 0.8,
    'Липецк': 0.85,
    'Калининград': 1.1,
    'Тула': 0.9,
    'Киров': 0.8,
    'Чебоксары': 0.8,
    'Курск': 0.8,
    'Брянск': 0.8,
    'Магнитогорск': 0.85,
    'Иваново': 0.8,
    'Тверь': 0.85,
    'Ставрополь': 0.85,
    'Белгород': 0.85,
    'Сочи': 1.1,
    'Другой город': 0.9
  };

  const calculatePrice = () => {
    if (!formData.selectedPlan) return 0;
    
    const basePrice = PLAN_PRICES[formData.selectedPlan] || 0;
    const city = formData.city === 'Другой город' ? formData.customCity : formData.city;
    const multiplier = cityMultipliers[city] || 0.9;
    
    return Math.round(basePrice * multiplier);
  };

  const handleLocalSubmit = async () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert('❌ Пожалуйста, заполните обязательные поля: Имя, Телефон, Email');
      return;
    }
    
    if (formData.city === 'Другой город' && !formData.customCity.trim()) {
      alert('❌ Пожалуйста, укажите название вашего города');
      return;
    }
    
    if (!agreed) {
      alert('❌ Пожалуйста, подтвердите согласие с политикой конфиденциальности');
      return;
    }

    setLocalSubmitting(true);

    try {
      const result = await sendFormData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || '',
        city: formData.city === 'Другой город' ? formData.customCity : formData.city,
        plan: formData.selectedPlan,
        comment: formData.comment || ''
      }, formData.files || []);
      
      if (result) {
        setShowSuccessModal(true);
        // Сброс формы
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          city: '',
          customCity: '',
          selectedPlan: '',
          comment: '',
          files: []
        });
        setAgreed(false);
        setCurrentStep(1);
      } else {
        alert('Ошибка отправки. Попробуйте снова.');
      }
    } catch (error) {
      alert('Ошибка отправки. Попробуйте снова.');
    } finally {
      setLocalSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Шаг 1: Выберите план</h3>
              <p className="text-emerald-200">Выберите подходящий тарифный план для вашей компании</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(PLAN_PRICES).map(([plan, price]) => (
                <div
                  key={plan}
                  onClick={() => setFormData({...formData, selectedPlan: plan})}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.selectedPlan === plan
                      ? 'border-professional-rolexGold bg-emerald-700'
                      : 'border-emerald-600 bg-emerald-800 hover:border-emerald-500'
                  }`}
                >
                  <h4 className="text-xl font-bold text-white mb-2">{plan}</h4>
                  <p className="text-2xl font-bold text-professional-rolexGold mb-4">
                    {price.toLocaleString()} ₽
                  </p>
                  <div className="text-emerald-200 text-sm space-y-1">
                    {plan === 'Стандарт' && (
                      <>
                        <p>• Базовые услуги утилизации</p>
                        <p>• Документооборот</p>
                        <p>• Техподдержка</p>
                      </>
                    )}
                    {plan === 'Оптимум' && (
                      <>
                        <p>• Расширенные услуги</p>
                        <p>• Транспортировка</p>
                        <p>• Приоритетная поддержка</p>
                      </>
                    )}
                    {plan === 'Премиум' && (
                      <>
                        <p>• Полный комплекс услуг</p>
                        <p>• Персональный менеджер</p>
                        <p>• Экспресс-обработка</p>
                      </>
                    )}
                    {plan === 'Корпоративный' && (
                      <>
                        <p>• Индивидуальные решения</p>
                        <p>• Выделенная команда</p>
                        <p>• 24/7 поддержка</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                onClick={() => setCurrentStep(2)}
                disabled={!formData.selectedPlan}
                className="bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              >
                Далее: Выбор города
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Шаг 2: Выберите город</h3>
              <p className="text-emerald-200">Выберите ваш город для расчета стоимости</p>
            </div>
            
            <div className="max-h-96 overflow-y-auto border border-emerald-600 rounded-lg p-4 bg-emerald-800">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {CITIES.map((city) => (
                  <div
                    key={city}
                    onClick={() => setFormData({...formData, city})}
                    className={`p-3 rounded cursor-pointer text-center transition-all ${
                      formData.city === city
                        ? 'bg-professional-rolexGold text-black font-semibold'
                        : 'bg-emerald-700 text-white hover:bg-emerald-600'
                    }`}
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {formData.city === 'Другой город' && (
              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Укажите ваш город:
                </label>
                <input
                  type="text"
                  value={formData.customCity}
                  onChange={(e) => setFormData({...formData, customCity: e.target.value})}
                  className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold"
                  placeholder="Название вашего города"
                />
              </div>
            )}

            {formData.city && (
              <div className="bg-emerald-700 p-4 rounded-lg">
                <p className="text-white text-lg font-semibold mb-2">
                  Ориентировочная стоимость в городе {formData.city === 'Другой город' ? formData.customCity : formData.city}:
                </p>
                <p className="text-professional-rolexGold text-2xl font-bold">
                  {calculatePrice().toLocaleString()} ₽
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={() => setCurrentStep(1)}
                variant="outline"
                className="flex-1 border-emerald-600 text-emerald-200 hover:bg-emerald-700"
              >
                Назад
              </Button>
              <Button
                onClick={() => setCurrentStep(3)}
                disabled={!formData.city || (formData.city === 'Другой город' && !formData.customCity)}
                className="flex-1 bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold"
              >
                Далее: Контакты
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Шаг 3: Контактная информация</h3>
              <p className="text-emerald-200">Заполните контактные данные для получения предложения</p>
            </div>

            <div className="bg-emerald-700 p-4 rounded-lg mb-6">
              <h4 className="text-white font-bold text-lg mb-2">Ваш выбор:</h4>
              <p className="text-emerald-200">План: <span className="text-white font-semibold">{formData.selectedPlan}</span></p>
              <p className="text-emerald-200">Город: <span className="text-white font-semibold">{formData.city === 'Другой город' ? formData.customCity : formData.city}</span></p>
              <p className="text-professional-rolexGold text-xl font-bold mt-2">
                Стоимость: {calculatePrice().toLocaleString()} ₽
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold"
                  placeholder="Название компании"
                />
              </div>

              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                Комментарий
              </label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold resize-none"
                placeholder="Опишите ваши потребности или задайте вопрос..."
              />
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                Прикрепить файлы (до 5 файлов)
              </label>
              <div className="border-2 border-dashed border-emerald-600 rounded-lg p-6 text-center">
                <Icon name="Upload" size={32} className="text-emerald-400 mx-auto mb-2" />
                <input
                  type="file"
                  id="calculator-files"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.txt"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="calculator-files"
                  className="cursor-pointer text-emerald-200 hover:text-white"
                >
                  Нажмите для выбора файлов или перетащите их сюда
                </label>
                <p className="text-emerald-300 text-xs mt-1">
                  PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, TXT до 20 МБ каждый
                </p>
              </div>

              {formData.files && formData.files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-emerald-200 text-sm font-medium">
                    Прикрепленные файлы ({formData.files.length}/5):
                  </p>
                  {formData.files.map((file: File, index: number) => (
                    <div key={index} className="flex items-center justify-between bg-emerald-800 p-2 rounded">
                      <span className="text-white text-sm">{file.name}</span>
                      <span className="text-emerald-300 text-xs">
                        {(file.size / 1024 / 1024).toFixed(2)} МБ
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFile(index)}
                        className="ml-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <Icon name="X" size={14} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="calculator-agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 text-professional-rolexGold bg-emerald-800 border-emerald-600 rounded focus:ring-professional-rolexGold"
              />
              <label htmlFor="calculator-agreement" className="text-emerald-200 text-sm">
                Я согласен с{' '}
                <a href="/privacy" className="text-professional-rolexGold hover:underline">
                  политикой конфиденциальности
                </a>{' '}
                и{' '}
                <a href="/terms" className="text-professional-rolexGold hover:underline">
                  условиями обработки персональных данных
                </a>
              </label>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={() => setCurrentStep(2)}
                variant="outline"
                className="flex-1 border-emerald-600 text-emerald-200 hover:bg-emerald-700"
              >
                Назад
              </Button>
              <Button
                onClick={handleLocalSubmit}
                disabled={!formData.name || !formData.phone || !formData.email || !agreed || localSubmitting}
                className="flex-1 bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold"
              >
                {localSubmitting ? 'Отправляем...' : 'Получить предложение'}
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-emerald-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Калькулятор стоимости</h2>
          <p className="text-emerald-200">Рассчитайте стоимость наших услуг в несколько шагов</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Прогресс */}
          <div className="flex justify-center mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step
                      ? 'bg-professional-rolexGold text-black'
                      : 'bg-emerald-700 text-emerald-200'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-professional-rolexGold' : 'bg-emerald-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <Card className="bg-emerald-800 border-emerald-600">
            <CardContent className="p-8">
              {renderStep()}
            </CardContent>
          </Card>
        </div>
      </div>

      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </section>
  );
}