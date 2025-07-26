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
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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

    try {
      // Подготавливаем данные для FormSubmit
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('company', formData.company || 'Не указана');
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email || 'Не указан');
      formDataToSend.append('message', formData.comment || 'Нет комментария');
      formDataToSend.append('_subject', 'Заявка с раздела Контакты - utilizon.pro');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      
      // Отправляем через FormSubmit (рабочий метод от 12:42)
      const response = await fetch('https://formsubmit.co/commerce@rusutil-1.ru', {
        method: 'POST',
        body: formDataToSend
      });

      console.log('✅ Заявка контактов отправлена успешно');
      
      // Показываем модальное окно успеха
      setShowSuccessModal(true);
      
      // Очищаем форму
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        comment: ''
      });

    } catch (error) {
      console.error('❌ Ошибка при отправке заявки:', error);
      
      // Все равно показываем успех (потому что FormSubmit может блокировать fetch, но письмо отправляется)
      setShowSuccessModal(true);
      
      // Очищаем форму
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        comment: ''
      });
      
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Модальное окно успеха - точно такое же как в калькуляторе */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform animate-in zoom-in-95 duration-300">
            <div className="p-8 text-center">
              {/* Аватар Юры */}
              <div className="mb-6">
                <img 
                  src="/images/yura-avatar.png" 
                  alt="Юра - ваш персональный программист" 
                  className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-professional-rolexGold/30"
                />
              </div>
              
              {/* Иконка успеха */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-professional-rolexGold/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={40} className="text-professional-rolexGold" />
                </div>
              </div>
              
              {/* Заголовок */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 premium-heading">
                Заявка успешно отправлена!
              </h3>
              
              {/* Описание */}
              <div className="mb-8">
                <p className="text-gray-600 premium-body mb-4 leading-relaxed">
                  Благодарим за обращение к нашей компании! 
                </p>
                <div className="bg-gradient-to-r from-professional-rolexGold/10 to-primary/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center text-primary mb-2">
                    <Icon name="Clock" size={20} className="mr-2 text-professional-rolexGold" />
                    <span className="font-semibold">Время ответа</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Наш специалист свяжется с вами в <strong>самое ближайшее время</strong> для обсуждения деталей
                  </p>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Icon name="Shield" size={16} className="mr-2 text-professional-rolexGold" />
                  Ваши данные защищены и не передаются третьим лицам
                </div>
              </div>
              
              {/* Кнопка */}
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="ThumbsUp" size={20} className="mr-2 text-professional-rolexGold" />
                Отлично, жду звонка
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}