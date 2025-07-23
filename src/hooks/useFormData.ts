import { useState } from 'react';
import { AppFormData } from '@/types/form';

const initialFormData: AppFormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  city: '',
  customCity: '',
  comment: '',
  files: [],
  selectedPlan: ''
};

export function useFormData() {
  const [formData, setFormData] = useState<AppFormData>(initialFormData);
  const [agreed, setAgreed] = useState(false);

  const updateFormData = (updates: Partial<AppFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const updateFiles = (files: File[]) => {
    setFormData(prev => ({ ...prev, files }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setAgreed(false);
  };

  const handlePlanSelect = (planName: string) => {
    console.log('🎯 План выбран:', planName);
    setFormData(prev => ({ ...prev, selectedPlan: planName }));
    
    // Прокручиваем к калькулятору
    const calculatorSection = document.getElementById('calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    formData,
    agreed,
    setFormData,
    setAgreed,
    updateFormData,
    updateFiles,
    resetForm,
    handlePlanSelect
  };
}