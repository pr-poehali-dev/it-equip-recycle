import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { 
  createFormSubmitActivation, 
  checkActivationStatus, 
  sendViaNetlifyForms,
  sendViaGetform,
  getActivationInstructions 
} from "@/lib/email-activation";

export default function EmailActivationPanel() {
  const [activationStatus, setActivationStatus] = useState<string>('unknown');
  const [isChecking, setIsChecking] = useState(false);
  const [isSendingActivation, setIsSendingActivation] = useState(false);
  
  const instructions = getActivationInstructions();

  const handleSendActivation = async () => {
    setIsSendingActivation(true);
    try {
      const result = await createFormSubmitActivation();
      if (result.success) {
        alert(`✅ ${result.message}\n\nТеперь проверьте почту commerce@rusutil-1.ru и нажмите ссылку подтверждения!`);
      } else {
        alert(`❌ ${result.message}\nОшибка: ${result.error}`);
      }
    } finally {
      setIsSendingActivation(false);
    }
  };

  const handleCheckStatus = async () => {
    setIsChecking(true);
    try {
      const result = await checkActivationStatus();
      setActivationStatus(result.activated ? 'activated' : 'not_activated');
      alert(`${result.activated ? '✅' : '❌'} ${result.message}`);
    } finally {
      setIsChecking(false);
    }
  };

  const handleTestNetlify = async () => {
    const testData = {
      name: 'Тест Netlify Forms',
      phone: '+7 (999) 123-45-67',
      email: 'test@example.com',
      company: 'Тестовая компания'
    };
    
    const result = await sendViaNetlifyForms(testData, []);
    alert(result.success ? 
      '✅ Netlify Forms работает!' : 
      `❌ Netlify Forms не работает: ${result.error}`
    );
  };

  const handleTestGetform = async () => {
    const testData = {
      name: 'Тест Getform.io',
      phone: '+7 (999) 123-45-67',
      email: 'test@example.com',
      company: 'Тестовая компания'
    };
    
    const result = await sendViaGetform(testData, []);
    alert(result.success ? 
      '✅ Getform.io работает!' : 
      `❌ Getform.io не работает: ${result.error}`
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-96 bg-gray-900 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Settings" size={20} />
            Настройка отправки писем
          </CardTitle>
          <CardDescription className="text-gray-300">
            Настройка и проверка всех способов отправки
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* ИНСТРУКЦИИ */}
          <div className="p-3 bg-blue-900 rounded border border-blue-700">
            <h4 className="font-semibold text-blue-200 mb-2">📋 {instructions.title}</h4>
            <div className="text-xs text-blue-300 space-y-1">
              {instructions.steps.map((step, index) => (
                <div key={index}>{step}</div>
              ))}
            </div>
            <div className="mt-2 p-2 bg-yellow-900 rounded text-yellow-300 text-xs">
              ⚠️ {instructions.note}
            </div>
          </div>

          {/* КНОПКИ ДЕЙСТВИЙ */}
          <div className="space-y-2">
            <Button 
              onClick={handleSendActivation}
              disabled={isSendingActivation}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isSendingActivation ? 'Отправляем...' : '📧 Отправить письмо активации'}
            </Button>
            
            <Button 
              onClick={handleCheckStatus}
              disabled={isChecking}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isChecking ? 'Проверяем...' : '🔍 Проверить статус активации'}
            </Button>
          </div>

          {/* СТАТУС */}
          {activationStatus !== 'unknown' && (
            <div className={`p-2 rounded text-center ${
              activationStatus === 'activated' 
                ? 'bg-green-900 text-green-300' 
                : 'bg-red-900 text-red-300'
            }`}>
              {activationStatus === 'activated' ? '✅ FormSubmit активирован' : '❌ FormSubmit НЕ активирован'}
            </div>
          )}

          {/* АЛЬТЕРНАТИВЫ */}
          <div className="border-t border-gray-700 pt-3">
            <h4 className="font-semibold text-gray-300 mb-2">🔄 Альтернативные способы:</h4>
            <div className="space-y-1">
              <Button 
                onClick={handleTestNetlify}
                variant="outline"
                size="sm"
                className="w-full text-xs"
              >
                Тест Netlify Forms
              </Button>
              <Button 
                onClick={handleTestGetform}
                variant="outline"
                size="sm"
                className="w-full text-xs"
              >
                Тест Getform.io
              </Button>
            </div>
          </div>

          {/* РЕШЕНИЕ ПРОБЛЕМ */}
          <div className="text-xs text-gray-400 space-y-1">
            <div><strong>CORS блокировка:</strong> Опубликуйте сайт</div>
            <div><strong>Активация:</strong> Проверьте почту</div>
            <div><strong>Домен:</strong> Используйте реальный URL</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}