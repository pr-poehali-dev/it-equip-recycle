import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 ОТПРАВКА ФОРМЫ КОНТАКТОВ:', formData);
    
    // Проверка обязательных полей
    if (!formData.name.trim()) {
      alert('❌ Пожалуйста, укажите ваше имя');
      return;
    }
    
    if (!formData.phone.trim()) {
      alert('❌ Пожалуйста, укажите номер телефона');
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
        <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Отправляем заявку...</h3>
        <p style="margin: 0; opacity: 0.9; font-size: 14px;">Обрабатываем данные</p>
      </div>
      <style>
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      </style>
    `;
    document.body.appendChild(loadingDiv);

    // Отправляем реальное письмо через Formspree
    const sendEmail = async () => {
      try {
        // Подготавливаем данные для отправки
        const emailData = {
          subject: 'Заявка с раздела Контакты',
          name: formData.name,
          company: formData.company || 'Не указана',
          phone: formData.phone,
          email: formData.email,
          comment: formData.comment || 'Нет комментария'
        };
        
        // Отправляем через PHP скрипт
        const response = await fetch('/send-email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData)
        });

        // Убираем индикатор загрузки
        loadingDiv.remove();

        const result = await response.json();
        
        if (response.ok && result.success) {
          console.log('✅ Письмо успешно отправлено на commerce@rusutil-1.ru');
          
          // Показываем успешное сообщение
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
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Заявка отправлена!</h3>
          <p style="margin: 0 0 8px 0; opacity: 0.9; font-size: 14px;">Письмо успешно отправлено на commerce@rusutil-1.ru</p>
          <p style="margin: 0; opacity: 0.7; font-size: 12px;">Мы свяжемся с вами в ближайшее время</p>
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
        comment: ''
      });
        } else {
          throw new Error('Ошибка отправки');
        }
      } catch (error) {
        // Убираем индикатор загрузки в случае ошибки
        loadingDiv.remove();
        
        console.error('❌ Ошибка при отправке:', error);
        
        // Показываем сообщение об ошибке
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = `
          <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #DC2626;
            color: white;
            padding: 24px 32px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 9999;
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 450px;
            text-align: center;
          ">
            <div style="
              width: 48px;
              height: 48px;
              background: rgba(255,255,255,0.2);
              border-radius: 50%;
              margin: 0 auto 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
            ">❌</div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Ошибка отправки</h3>
            <p style="margin: 0; opacity: 0.9; font-size: 14px;">Попробуйте позже или позвоните: +7 (901) 862-81-81</p>
          </div>
        `;
        document.body.appendChild(errorDiv);
        
        // Автоматически убираем сообщение через 5 секунд
        setTimeout(() => {
          errorDiv.remove();
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    };

    // Запускаем отправку
    sendEmail();
  };

  return (
    <section id="contacts" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-200">Готовы ответить на ваши вопросы и принять заявку</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-emerald-800 rounded-lg border border-emerald-700">
                <Icon name="Phone" size={20} className="text-professional-rolexGold mr-4" />
                <div>
                  <div className="font-semibold text-slate-200">Телефон</div>
                  <div className="text-white font-medium">+7 (901) 862-81-81</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-emerald-800 rounded-lg border border-emerald-700">
                <Icon name="Mail" size={20} className="text-professional-rolexGold mr-4" />
                <div>
                  <div className="font-semibold text-slate-200">Email</div>
                  <div className="text-white font-medium">commerce@rusutil-1.ru</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-emerald-800 rounded-lg border border-emerald-700">
                <Icon name="MapPin" size={20} className="text-professional-rolexGold mr-4" />
                <div>
                  <div className="font-semibold text-slate-200">Адрес</div>
                  <div className="text-white font-medium">г. Москва, ул. Лефортовский вал, дом 16А</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-emerald-800 rounded-lg border border-emerald-700">
                <Icon name="Clock" size={20} className="text-professional-rolexGold mr-4" />
                <div>
                  <div className="font-semibold text-slate-200">Время работы</div>
                  <div className="text-white font-medium">Пн-Пт: 9:00-18:00</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-emerald-900 border-emerald-700">
              <CardHeader>
                <CardTitle className="text-white">Оставьте заявку</CardTitle>
                <CardDescription className="text-gray-300">
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
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
                    <label className="block text-sm font-medium text-gray-200 mb-2">
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
                    <label className="block text-sm font-medium text-gray-200 mb-2">
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
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Комментарий
                    </label>
                    <textarea
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 bg-emerald-800 border border-emerald-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-professional-rolexGold resize-none"
                      placeholder="Опишите ваш вопрос или потребность..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-professional-rolexGold hover:bg-yellow-600 text-black font-semibold"
                  >
                    {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}