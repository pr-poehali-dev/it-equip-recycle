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
    
    const cityInfo = formData.city === 'Другой город' ? formData.customCity : formData.city;
    
    // ПРОСТОЕ РЕШЕНИЕ: Всегда используем HTML-форму
    console.log('📝 Отправляем через HTML-форму (100% надёжность)...');
    
    // Создаём HTML форму
    const htmlForm = document.createElement('form');
    htmlForm.method = 'POST';
    htmlForm.action = 'https://formsubmit.co/commerce@rusutil-1.ru';
    htmlForm.enctype = 'multipart/form-data';
    htmlForm.style.display = 'none';
    
    // Добавляем все поля
    const fields = [
      { name: 'name', value: formData.name },
      { name: 'email', value: formData.email },
      { name: 'phone', value: formData.phone },
      { name: 'company', value: formData.company || 'Не указана' },
      { name: 'city', value: cityInfo || 'Не указан' },
      { name: 'plan', value: formData.selectedPlan || 'Не выбран' },
      { name: 'message', value: formData.comment || 'Нет комментариев' },
      { name: '_subject', value: 'Заявка на утилизацию IT оборудования с сайта utilizon.pro' },
      { name: '_captcha', value: 'false' },
      { name: '_template', value: 'table' },
      { name: '_next', value: 'https://utilizon.pro/success' },
      { name: '_error', value: 'https://utilizon.pro/error' }
    ];
    
    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      htmlForm.appendChild(input);
    });
    
    // Добавляем файлы если есть
    if (formData.files && formData.files.length > 0) {
      formData.files.forEach((file, index) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = index === 0 ? 'attachment' : `attachment${index + 1}`;
        fileInput.style.display = 'none';
        
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInput.files = dataTransfer.files;
        
        htmlForm.appendChild(fileInput);
        console.log(`📎 Добавлен файл: ${file.name}`);
      });
    }
    
    document.body.appendChild(htmlForm);
    
    console.log('🚀 Отправляем HTML-форму...');
    htmlForm.submit();
    
    // Очищаем форму
    onSuccess();
  };

  return { handleSubmit };
};