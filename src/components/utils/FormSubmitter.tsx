import { AppFormData } from '@/types/form';
import { areFilesSmall } from './FileHandler';
import {
  createLoadingIndicator,
  createSuccessModal,
  createFileSuccessModal,
  createErrorModal,
  createFileSizeErrorModal,
  sendSmallFiles,
  sendSmallFilesSingle,
  sendSmallFilesMultiple,
  sendLargeFiles,
  sendFormWithoutFiles,
  sendFallbackForm
} from './FormLogic';

interface FormSubmitterProps {
  formData: AppFormData;
  agreed: boolean;
  onSuccess: () => void;
}

export const useFormSubmitter = ({ formData, agreed, onSuccess }: FormSubmitterProps) => {
  const handleSubmit = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    console.log('🚀 Кнопка нажата!', { formData, agreed });
    
    // Проверяем обязательные поля
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert('❌ Пожалуйста, заполните обязательные поля: Имя, Телефон, Email');
      return;
    }
    
    // Проверяем согласие
    if (!agreed) {
      alert('❌ Пожалуйста, подтвердите согласие с политикой конфиденциальности');
      return;
    }
    
    console.log('✅ Все проверки пройдены, отправляю заявку...');
    
    // Показываем индикатор загрузки
    const loadingDiv = createLoadingIndicator();
    
    try {
      const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
      
      // Обрабатываем файлы
      if (formData.files && formData.files.length > 0) {
        console.log('📎 Отправляем файлы через оптимизированную систему...');
        
        const totalSize = formData.files.reduce((sum, file) => sum + file.size, 0);
        
        // Если файлы маленькие (до 4МБ общий размер) - используем одно письмо со всеми файлами
        if (areFilesSmall(formData.files)) {
          try {
            console.log('📧 Отправляем все файлы одним письмом...');
            await sendSmallFilesSingle(formData, cityInfo);
            
            // Показываем сообщение об успехе
            loadingDiv.remove();
            createFileSuccessModal();
            onSuccess();
            return;
          } catch (ajaxError) {
            console.warn('⚠️ Ajax метод не сработал:', ajaxError);
            // Показываем ошибку пользователю
            loadingDiv.remove();
            createErrorModal(`Ошибка отправки файлов: ${ajaxError.message}. Попробуйте еще раз или свяжитесь с нами по телефону: +7 (901) 862-81-81`);
            return;
          }
        }
        
        // Для больших файлов - используем file.io + email уведомление
        try {
          await sendLargeFiles(formData, cityInfo, totalSize);
          
          // Показываем сообщение об успехе
          loadingDiv.remove();
          createFileSuccessModal();
          onSuccess();
          return;
          
        } catch (fileUploadError) {
          console.error('❌ Ошибка загрузки больших файлов:', fileUploadError);
          
          // Показываем ошибку с инструкциями
          loadingDiv.remove();
          createFileSizeErrorModal();
          return;
        }
      }
      
      // Если файлов нет, используем Ajax
      console.log('📝 Отправляем форму без файлов через Ajax...');
      await sendFormWithoutFiles(formData, cityInfo);
      console.log('✅ Форма без файлов отправлена успешно');
      
      // Убираем индикатор загрузки
      loadingDiv.remove();
      
      // Показываем успешное сообщение
      createSuccessModal('Письмо успешно отправлено на commerce@rusutil-1.ru');
      
      // Очищаем форму
      onSuccess();
      
      console.log('✅ Заявка успешно отправлена через FormSubmit!');
      
    } catch (error) {
      // Убираем индикатор загрузки
      loadingDiv.remove();
      
      console.error('❌ Ошибка при отправке Ajax:', error);
      console.log('🔄 Пробуем резервный метод отправки через HTML-форму...');
      
      // Резервный метод: создаем и отправляем скрытую HTML-форму
      try {
        const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
        sendFallbackForm(formData, cityInfo);
        
        // Не показываем ошибку, так как пробуем резервный метод
        return;
      } catch (fallbackError) {
        console.error('❌ Резервный метод тоже не сработал:', fallbackError);
      }
      
      // Показываем ошибку только если все методы не сработали
      createErrorModal('Попробуйте еще раз или свяжитесь с нами по телефону: +7 (901) 862-81-81');
    }
  };

  return { handleSubmit };
};

// Функция для скролла к калькулятору
export const scrollToCalculator = () => {
  const calculatorSection = document.getElementById('calculator');
  calculatorSection?.scrollIntoView({ behavior: 'smooth' });
};