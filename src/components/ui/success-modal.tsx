import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  showAvatar?: boolean;
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title = "Заявка успешно отправлена!",
  message = "Благодарим за обращение к нашей компании!",
  showAvatar = true 
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform animate-in zoom-in-95 duration-300">
        <div className="p-8 text-center">
          {/* Аватар Юры */}
          {showAvatar && (
            <div className="mb-6">
              <img 
                src="/images/yura-avatar.png" 
                alt="Юра - ваш персональный программист" 
                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-professional-rolexGold/30"
                onError={(e) => {
                  // Если нет аватара, скрываем его
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
          
          {/* Иконка успеха */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-professional-rolexGold/10 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={40} className="text-professional-rolexGold" />
            </div>
          </div>
          
          {/* Заголовок */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 premium-heading">
            {title}
          </h3>
          
          {/* Описание */}
          <div className="mb-8">
            <p className="text-gray-600 premium-body mb-4 leading-relaxed">
              {message}
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
            onClick={onClose}
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Icon name="ThumbsUp" size={20} className="mr-2 text-professional-rolexGold" />
            Отлично, жду звонка
          </Button>
        </div>
      </div>
    </div>
  );
}