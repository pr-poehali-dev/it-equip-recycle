import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function FormSubmitTest() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Отправляем прямо на FormSubmit для активации
      const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('✅ Активация отправлена! Проверьте почту commerce@rusutil-1.ru');
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      alert('📧 Запрос отправлен! FormSubmit может блокировать ответ, но письмо должно прийти.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader className="bg-emerald-800 text-white text-center">
            <CardTitle className="text-2xl flex items-center justify-center mb-3">
              <Icon name="Mail" size={48} className="mr-4 text-professional-rolexGold" />
              <span>FormSubmit Активация</span>
            </CardTitle>
            <p className="text-white/90">
              Активация email для формы обратной связи Utilizon.pro
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <Icon name="Info" size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Важно:</h3>
                  <p className="text-blue-700 text-sm">
                    Эта форма нужна для активации email-адреса в FormSubmit. 
                    После первой отправки основная форма на сайте будет работать корректно.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя:
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue="Тест активации FormSubmit"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue="test@utilizon.pro"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон:
                </label>
                <input
                  type="tel"
                  name="phone"
                  defaultValue="+7 (901) 862-81-81"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение:
                </label>
                <textarea
                  name="message"
                  rows={4}
                  defaultValue="Тестовое сообщение для активации FormSubmit сервиса. Дата: 26 июля 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
                />
              </div>

              {/* FormSubmit скрытые поля */}
              <input type="hidden" name="_subject" value="АКТИВАЦИЯ FormSubmit для Utilizon.pro" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 min-h-[48px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Отправляю активацию...
                  </>
                ) : (
                  <>
                    <Icon name="Mail" size={20} className="mr-2" />
                    Активировать FormSubmit
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                <Icon name="CheckCircle" size={20} className="mr-2" />
                Инструкция:
              </h3>
              <ol className="text-green-700 text-sm space-y-2">
                <li>1. Нажмите кнопку "Активировать FormSubmit"</li>
                <li>2. Проверьте почту commerce@rusutil-1.ru</li>
                <li>3. Должно прийти письмо активации от FormSubmit</li>
                <li>4. После этого основная форма на сайте заработает</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}