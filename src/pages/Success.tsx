import React from 'react';
import Icon from '@/components/ui/icon';

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-green-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={40} className="text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Заявка отправлена!
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Спасибо за обращение! Мы получили вашу заявку и свяжемся с вами 
          в ближайшее время для обсуждения деталей утилизации.
        </p>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <Icon name="Phone" size={16} className="text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">
              Или звоните прямо сейчас:
            </span>
          </div>
          <a 
            href="tel:+79018628181" 
            className="text-lg font-bold text-green-700 hover:text-green-800 transition-colors"
          >
            +7 (901) 862-81-81
          </a>
        </div>
        
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Вернуться на сайт
        </button>
        
        <div className="mt-6 text-xs text-gray-500">
          <p>ООО «СБОРУТИЛИЗАЦИЯ»</p>
          <p>Профессиональная утилизация IT-оборудования</p>
        </div>
      </div>
    </div>
  );
};

export default Success;