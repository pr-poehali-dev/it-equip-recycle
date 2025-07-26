import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { sendFormData, FormData } from "@/lib/mail-sender";

interface CalculatorData {
  serviceType: string;
  complexity: string;
  customCity: string;
  files: File[];
}

const SERVICES = [
  { id: 'disposal', name: 'Утилизация', basePrice: 50000 },
  { id: 'transport', name: 'Транспортировка', basePrice: 30000 },
  { id: 'processing', name: 'Переработка', basePrice: 75000 },
  { id: 'consulting', name: 'Консультации', basePrice: 25000 },
];

const COMPLEXITY_MULTIPLIERS = {
  simple: { name: 'Простая', multiplier: 1 },
  medium: { name: 'Средняя', multiplier: 1.5 },
  complex: { name: 'Сложная', multiplier: 2.2 },
};

export default function CalculatorSection() {
  const [data, setData] = useState<CalculatorData>({
    serviceType: '',
    complexity: '',
    customCity: '',
    files: [],
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    plan: '',
    comment: '',
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const service = SERVICES.find(s => s.id === data.serviceType);
    const complexity = COMPLEXITY_MULTIPLIERS[data.complexity as keyof typeof COMPLEXITY_MULTIPLIERS];
    
    if (!service || !complexity) return 0;
    
    return Math.round(service.basePrice * complexity.multiplier);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 5);
      setData({ ...data, files: newFiles });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = data.files.filter((_, i) => i !== index);
    setData({ ...data, files: newFiles });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const service = SERVICES.find(s => s.id === data.serviceType);
      const complexity = COMPLEXITY_MULTIPLIERS[data.complexity as keyof typeof COMPLEXITY_MULTIPLIERS];
      
      const submissionData: FormData = {
        ...formData,
        plan: `${service?.name} - ${complexity?.name} (${calculatePrice().toLocaleString()} руб.)`,
        city: data.customCity,
      };

      const success = await sendFormData(submissionData, data.files);
      
      if (success) {
        setShowResult(true);
      } else {
        alert('Ошибка отправки. Попробуйте снова.');
      }
    } catch (error) {
      alert('Ошибка отправки. Попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showResult) {
    return (
      <section className="py-20 bg-gradient-to-b from-emerald-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-md mx-auto bg-emerald-800 border-emerald-600">
            <CardContent className="p-8">
              <Icon name="CheckCircle" size={64} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-emerald-200 mb-4">
                Мы свяжемся с вами в ближайшее время
              </p>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-professional-rolexGold hover:bg-yellow-600 text-black"
              >
                Рассчитать снова
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-emerald-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Калькулятор стоимости</h2>
          <p className="text-emerald-200">Рассчитайте стоимость наших услуг</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Прогресс */}
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center mx-2 font-bold ${
                  step >= num 
                    ? 'bg-professional-rolexGold text-black' 
                    : 'bg-emerald-700 text-emerald-200'
                }`}
              >
                {num}
              </div>
            ))}
          </div>

          <Card className="bg-emerald-800 border-emerald-600">
            <CardHeader>
              <CardTitle className="text-white text-center">
                {step === 1 && 'Выберите тип услуги'}
                {step === 2 && 'Укажите сложность'}
                {step === 3 && 'Прикрепите файлы'}
                {step === 4 && 'Контактная информация'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              
              {/* Шаг 1: Тип услуги */}
              {step === 1 && (
                <div className="space-y-4">
                  {SERVICES.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setData({ ...data, serviceType: service.id })}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        data.serviceType === service.id
                          ? 'border-professional-rolexGold bg-emerald-700'
                          : 'border-emerald-600 bg-emerald-900 hover:border-emerald-500'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{service.name}</span>
                        <span className="text-emerald-200">от {service.basePrice.toLocaleString()} ₽</span>
                      </div>
                    </div>
                  ))}
                  
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!data.serviceType}
                    className="w-full bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold"
                  >
                    Далее
                  </Button>
                </div>
              )}

              {/* Шаг 2: Сложность */}
              {step === 2 && (
                <div className="space-y-4">
                  {Object.entries(COMPLEXITY_MULTIPLIERS).map(([key, complexity]) => (
                    <div
                      key={key}
                      onClick={() => setData({ ...data, complexity: key })}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        data.complexity === key
                          ? 'border-professional-rolexGold bg-emerald-700'
                          : 'border-emerald-600 bg-emerald-900 hover:border-emerald-500'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{complexity.name}</span>
                        <span className="text-emerald-200">×{complexity.multiplier}</span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1 border-emerald-600 text-emerald-200 hover:bg-emerald-700"
                    >
                      Назад
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!data.complexity}
                      className="flex-1 bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold"
                    >
                      Далее
                    </Button>
                  </div>
                </div>
              )}

              {/* Шаг 3: Файлы */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-emerald-600 rounded-lg p-8 text-center">
                    <Icon name="Upload" size={48} className="text-emerald-400 mx-auto mb-4" />
                    <input
                      type="file"
                      id="files"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="files"
                      className="cursor-pointer text-white font-medium hover:text-emerald-200"
                    >
                      Нажмите для загрузки файлов
                    </label>
                    <p className="text-emerald-300 text-sm mt-2">
                      До 5 файлов (PDF, DOC, DOCX, JPG, PNG)
                    </p>
                  </div>

                  {data.files.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Загруженные файлы:</h4>
                      {data.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-emerald-700 p-3 rounded">
                          <span className="text-white text-sm">{file.name}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFile(index)}
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="flex-1 border-emerald-600 text-emerald-200 hover:bg-emerald-700"
                    >
                      Назад
                    </Button>
                    <Button
                      onClick={() => setStep(4)}
                      className="flex-1 bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold"
                    >
                      Далее
                    </Button>
                  </div>
                </div>
              )}

              {/* Шаг 4: Контакты */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="bg-emerald-700 p-4 rounded-lg mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">Итоговая стоимость:</h3>
                    <p className="text-professional-rolexGold text-3xl font-bold">
                      {calculatePrice().toLocaleString()} ₽
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-emerald-900 border border-emerald-600 rounded text-white"
                        placeholder="Ваше имя"
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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-emerald-900 border border-emerald-600 rounded text-white"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>

                    <div>
                      <label className="block text-emerald-200 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-emerald-900 border border-emerald-600 rounded text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-emerald-200 text-sm font-medium mb-2">
                        Компания
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-emerald-900 border border-emerald-600 rounded text-white"
                        placeholder="Название компании"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-emerald-200 text-sm font-medium mb-2">
                        Город
                      </label>
                      <input
                        type="text"
                        value={data.customCity}
                        onChange={(e) => setData({ ...data, customCity: e.target.value })}
                        className="w-full px-3 py-2 bg-emerald-900 border border-emerald-600 rounded text-white"
                        placeholder="Ваш город"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-emerald-200 text-sm font-medium mb-2">
                        Комментарий
                      </label>
                      <textarea
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 bg-emerald-900 border border-emerald-600 rounded text-white resize-none"
                        placeholder="Дополнительная информация..."
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep(3)}
                      variant="outline"
                      className="flex-1 border-emerald-600 text-emerald-200 hover:bg-emerald-700"
                    >
                      Назад
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.phone || isSubmitting}
                      className="flex-1 bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold"
                    >
                      {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                    </Button>
                  </div>
                </div>
              )}

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}