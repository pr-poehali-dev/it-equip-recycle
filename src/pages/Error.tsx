import React from 'react';
import Icon from '@/components/ui/icon';

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="AlertTriangle" size={40} className="text-red-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Ошибка отправки
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз 
          или свяжитесь с нами напрямую.
        </p>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <Icon name="Phone" size={16} className="text-red-600 mr-2" />
            <span className="text-sm font-medium text-red-800">
              Позвоните нам прямо сейчас:
            </span>
          </div>
          <a 
            href="tel:+79018628181" 
            className="text-lg font-bold text-red-700 hover:text-red-800 transition-colors"
          >
            +7 (901) 862-81-81
          </a>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Попробовать снова
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Вернуться на сайт
          </button>
        </div>
        
        <div className="mt-6 text-xs text-gray-500">
          <p>ООО «СБОРУТИЛИЗАЦИЯ»</p>
          <p>Профессиональная утилизация IT-оборудования</p>
        </div>
      </div>
    </div>
  );
};

export default Error;