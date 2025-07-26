import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  equipment: string;
  additionalInfo: string;
}

const CalculatorSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: 'Выберите город',
    equipment: '',
    additionalInfo: ''
  });

  const [agreed, setAgreed] = useState(false);
  const [localSubmitting, setLocalSubmitting] = useState(false);

  const cities = [
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
    'Волгоград'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLocalSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.city || formData.city === 'Выберите город' || !agreed) {
      return;
    }

    setLocalSubmitting(true);
    
    try {
      // Здесь будет логика отправки
      console.log('Отправка данных калькулятора:', formData);
      
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Заявка успешно отправлена!');
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка отправки заявки');
    } finally {
      setLocalSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Быстрая оценка стоимости
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прикрепите спецификацию оборудования и получите предварительную стоимость 
            утилизации в течение 30 минут
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white border border-gray-200 shadow-lg">
            <div className="bg-professional-rolexGreen p-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Calculator" size={32} className="text-professional-rolexGold mr-3" />
                <h3 className="text-xl font-bold">Калькулятор стоимости утилизации</h3>
              </div>
              <p className="text-center text-emerald-100">
                Заполните форму и прикрепите спецификацию оборудования для точного расчета
              </p>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Контактное лицо */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Контактное лицо <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Компания */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Компания
                  </label>
                  <Input
                    placeholder="Название компании"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Телефон */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Город */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Город
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-professional-rolexGreen focus:border-transparent"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Спецификация оборудования */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Icon name="Paperclip" size={16} className="inline mr-1" />
                    Спецификация оборудования <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-professional-rolexGreen transition-colors">
                    <Icon name="Upload" size={32} className="mx-auto mb-2 text-professional-rolexGold" />
                    <p className="text-professional-rolexGreen font-medium mb-1">
                      Выберите файлы <span className="text-gray-500">или перетащите сюда</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Excel (.xlsx, .xls), Word (.docx, .doc), PDF • до 20 МБ каждый • до 5 файлов • до 100 МБ всего
                    </p>
                  </div>
                </div>

                {/* Дополнительная информация */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дополнительная информация
                  </label>
                  <Textarea
                    placeholder="Укажите срочность, особые требования, вопросы по утилизации..."
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    className="w-full h-24 resize-none"
                  />
                </div>
              </div>

              {/* Согласие */}
              <div className="mt-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="calculator-agreement"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 text-professional-rolexGreen focus:ring-professional-rolexGreen border-gray-300 rounded"
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
    </section>
  );
};

export default CalculatorSection;