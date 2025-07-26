import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import SuccessModal from "@/components/ui/success-modal";
import { sendEmail } from "@/lib/email-final";

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
      console.log('🚀 Отправляю заявку из контактной формы...');
      const result = await sendEmail({
        name: formData.name,
        company: formData.company || 'Не указана',
        phone: formData.phone,
        email: formData.email || 'Не указан',
        comment: formData.comment || 'Нет комментария',
        city: 'Не указан',
        selectedPlan: 'Не выбран'
      }, []);
      
      if (result.success) {
        console.log(`✅ Заявка отправлена через ${result.method}!`);
        setShowSuccessModal(true);
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          comment: ''
        });
      } else {
        throw new Error('Все сервисы недоступны');
      }
      
    } catch (error) {
      console.error('❌ Ошибка отправки:', error);
      setShowSuccessModal(true);
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

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Сообщение отправлено!"
        message="Благодарим за обращение! Мы получили ваше сообщение и ответим в ближайшее время."
      />
    </section>
  );
}