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

  const handleSubmit = async () => {
    console.log('🚀 ОТПРАВКА ФОРМЫ ИЗ КОНТАКТОВ:', formData);
    
    // Валидация
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

    // Короткая задержка для показа загрузки
    setTimeout(() => {
      loadingDiv.remove();
      
      try {
        // Формируем данные для письма
        const subject = 'Заявка с раздела Контакты';
        const emailBody = `Заявка с раздела Контакты

Контактные данные:
Имя: ${formData.name}
Компания: ${formData.company || 'Не указана'}
Телефон: ${formData.phone}
Email: ${formData.email || 'Не указан'}

Комментарий: ${formData.comment || 'Нет комментария'}

---
Заявка отправлена с раздела "Контакты"`;

        const mailtoLink = `mailto:commerce@rusutil-1.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        
        console.log('📧 Открываем почтовый клиент:', mailtoLink);
        
        // Пробуем открыть почтовый клиент
        window.location.href = mailtoLink;
        
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
            max-width: 450px;
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
            ">📧</div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Почтовый клиент открыт!</h3>
            <p style="margin: 0; opacity: 0.9; font-size: 14px;">Проверьте ваш почтовый клиент и отправьте письмо.</p>
            <p style="margin: 8px 0 0 0; opacity: 0.7; font-size: 12px;">Если письмо не открылось автоматически, скопируйте: commerce@rusutil-1.ru</p>
          </div>
        `;
        document.body.appendChild(successDiv);
        
        // Автоматически убираем сообщение через 6 секунд
        setTimeout(() => {
          successDiv.remove();
        }, 6000);
        
        // Очищаем форму
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          comment: ''
        });
        
        console.log('✅ Заявка подготовлена к отправке!');
        
      } catch (error) {
        console.error('❌ Ошибка при открытии почтового клиента:', error);
        
        // Показываем инструкции для ручной отправки
        const instructionDiv = document.createElement('div');
        instructionDiv.innerHTML = `
          <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1F2937;
            color: white;
            padding: 24px 32px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 9999;
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 500px;
            text-align: left;
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
            ">📝</div>
            <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; text-align: center;">Отправьте заявку вручную</h3>
            <div style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <p style="margin: 0 0 8px 0; font-weight: 600;">Email:</p>
              <p style="margin: 0 0 12px 0; color: #D4AF37;">commerce@rusutil-1.ru</p>
              <p style="margin: 0 0 8px 0; font-weight: 600;">Тема:</p>
              <p style="margin: 0 0 12px 0;">Заявка с раздела Контакты</p>
              <p style="margin: 0 0 8px 0; font-weight: 600;">Ваши данные:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.4;">
                Имя: ${formData.name}<br>
                Компания: ${formData.company || 'Не указана'}<br>
                Телефон: ${formData.phone}<br>
                Email: ${formData.email || 'Не указан'}<br>
                Комментарий: ${formData.comment || 'Нет'}
              </p>
            </div>
            <div style="text-align: center;">
              <p style="margin: 0; font-size: 14px; opacity: 0.8;">Или позвоните: +7 (901) 862-81-81</p>
            </div>
          </div>
        `;
        document.body.appendChild(instructionDiv);
        
        // Убираем инструкции через 12 секунд или по клику
        const removeInstruction = () => instructionDiv.remove();
        setTimeout(removeInstruction, 12000);
        instructionDiv.addEventListener('click', removeInstruction);
      }
      
      setIsSubmitting(false);
    }, 1500); // 1.5 секунды задержка для реалистичности
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
                  <div className="text-white font-medium">Пн-Пт: 10:00-20:00</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 30 минут</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Имя</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                    placeholder="Ваше имя"
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-sm font-medium premium-body text-gray-700 mb-2 block">Комментарий</label>
                <textarea 
                  value={formData.comment}
                  onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                  className="w-full px-4 py-3 min-h-[88px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" 
                  placeholder="Опишите ваш вопрос или заявку..."
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                onClick={handleSubmit}
                className="w-full min-h-[48px]"
                disabled={isSubmitting}
              >
                <Icon name="Send" size={20} className="mr-2 text-professional-rolexGold" />
                {isSubmitting ? 'Подготавливаем заявку...' : 'Отправить заявку'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}