import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  'Выберите город',
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
  'Сочи'
];

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
  const [localSubmitting, setLocalSubmitting] = useState(false);

  const handleLocalSubmit = async () => {
    if (!formData.name.trim()) {
      alert('❌ Пожалуйста, укажите контактное лицо');
      return;
    }
    
    if (!formData.phone.trim()) {
      alert('❌ Пожалуйста, укажите телефон');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('❌ Пожалуйста, укажите email');
      return;
    }
    
    if (!formData.city || formData.city === 'Выберите город') {
      alert('❌ Пожалуйста, выберите город');
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
        city: formData.city,
        plan: 'Быстрая оценка стоимости',
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
          city: 'Выберите город',
          customCity: '',
          selectedPlan: '',
          comment: '',
          files: []
        });
        setAgreed(false);
      } else {
        alert('Ошибка отправки. Попробуйте снова.');
      }
    } catch (error) {
      alert('Ошибка отправки. Попробуйте снова.');
    } finally {
      setLocalSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Быстрая оценка стоимости</h2>
          <p className="text-gray-600">
            Прикрепите спецификацию оборудования и получите предварительную стоимость<br />
            утилизации в течение 30 минут
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white border border-gray-200 shadow-lg">
            <div className="bg-emerald-800 p-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Calculator" size={32} className="text-professional-rolexGold mr-3" />
                <h3 className="text-xl font-bold">Калькулятор стоимости утилизации</h3>
              </div>
              <p className="text-emerald-100 text-center">
                Заполните форму и прикрепите спецификацию оборудования для точного расчета
              </p>
            </div>
            
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Контактное лицо */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Контактное лицо *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Ваше имя"
                  />
                </div>

                {/* Компания */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Название компании"
                  />
                </div>

                {/* Телефон */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Город */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Город
                  </label>
                  <select
                    value={formData.city || 'Выберите город'}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {CITIES.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Прикрепление файлов */}
              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  📎 Спецификация оборудования *
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Прикрепите файлы с описанием оборудования (до 5 файлов, максимум 20МБ каждый)
                </p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Icon name="Upload" size={32} className="text-professional-rolexGold mx-auto mb-3" />
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
                    className="cursor-pointer"
                  >
                    <span className="text-emerald-600 font-medium hover:text-emerald-700">
                      Выберите файлы
                    </span>
                    <span className="text-gray-600"> или перетащите сюда</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    Excel (.xls, .xlsx), Word (.docx), PDF (.pdf) до 20 МБ каждый
                  </p>
                </div>

                {formData.files && formData.files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-700 text-sm font-medium">
                      Прикрепленные файлы ({formData.files.length}/5):
                    </p>
                    {formData.files.map((file: File, index: number) => (
                      <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded border">
                        <div className="flex items-center">
                          <Icon name="FileText" size={16} className="text-gray-500 mr-2" />
                          <span className="text-gray-700 text-sm">{file.name}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 text-xs mr-3">
                            {(file.size / 1024 / 1024).toFixed(2)} МБ
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFile(index)}
                            className="border-red-300 text-red-500 hover:bg-red-50"
                          >
                            <Icon name="X" size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Дополнительная информация */}
              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Дополнительная информация
                </label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                  placeholder="Укажите срочность, особые требования, вопросы по утилизации..."
                />
              </div>

              {/* Согласие */}
              <div className="mt-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="calculator-agreement"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 mt-1 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="calculator-agreement" className="text-sm text-gray-600">
                    Согласен с{' '}
                    <a href="/privacy" className="text-professional-rolexGreen hover:underline">
                      политикой конфиденциальности
                    </a>
                    ,{' '}
                    <a href="/terms" className="text-professional-rolexGreen hover:underline">
                      условиями использования
                    </a>{' '}
                    и обработкой персональных данных.
                    Подтверждаю, что указанная информация достоверна.
                  </label>
                </div>
              </div>

              {/* Кнопки */}
              <div className="mt-8 space-y-4">
                <Button
                  onClick={handleLocalSubmit}
                  disabled={!formData.name || !formData.phone || !formData.email || !formData.city || formData.city === 'Выберите город' || !agreed || localSubmitting}
                  className="w-full bg-professional-rolexGreen text-white font-semibold py-3 px-6 text-lg"
                >
                  <Icon name="Calculator" size={20} className="mr-2 text-professional-rolexGold" />
                  {localSubmitting ? 'Отправляем...' : 'Получить расчет стоимости'}
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-professional-rolexGreen text-professional-rolexGreen hover:bg-emerald-50 font-medium py-3 px-6 bg-white"
                  onClick={() => {
                    const phone = '+7 (495) 123-45-67';
                    window.open(`tel:${phone}`);
                  }}
                >
                  <Icon name="Phone" size={20} className="mr-2 text-professional-rolexGold" />
                  Обсудить по телефону
                </Button>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center text-professional-rolexGreen">
                    <Icon name="Clock" size={20} className="mr-2 text-professional-rolexGreen" />
                    <span className="font-medium">Ответим в течение 30 минут в рабочее время</span>
                  </div>
                </div>
              </div>
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