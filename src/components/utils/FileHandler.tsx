// Антивирусная проверка файлов
export const scanFileForVirus = async (file: File): Promise<boolean> => {
  try {
    // Базовая проверка расширения
    const allowedExtensions = ['.xlsx', '.xls', '.docx', '.doc', '.pdf'];
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    
    if (!allowedExtensions.includes(fileExtension)) {
      throw new Error(`Недопустимый формат файла: ${fileExtension}`);
    }
    
    // Проверка MIME-типа
    const allowedMimeTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
      'application/vnd.ms-excel', // .xls
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      'application/msword', // .doc
      'application/pdf' // .pdf
    ];
    
    if (file.type && !allowedMimeTypes.includes(file.type)) {
      console.warn(`⚠️ Необычный MIME-тип для ${file.name}: ${file.type} (файл будет проверен дополнительно)`);
      // Не блокируем файл, просто предупреждаем
    }
    
    // Проверка на подозрительные последовательности байтов
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    
    // Проверяем первые байты на соответствие формату
    const pdfSignature = [0x25, 0x50, 0x44, 0x46]; // %PDF
    const zipSignature = [0x50, 0x4B, 0x03, 0x04]; // PK (для .docx, .xlsx)
    const docSignature = [0xD0, 0xCF, 0x11, 0xE0]; // для старых .doc, .xls
    
    const startsWithSignature = (
      bytes.slice(0, 4).every((byte, i) => byte === pdfSignature[i]) ||
      bytes.slice(0, 4).every((byte, i) => byte === zipSignature[i]) ||
      bytes.slice(0, 4).every((byte, i) => byte === docSignature[i])
    );
    
    if (!startsWithSignature) {
      throw new Error('Файл не соответствует заявленному формату');
    }
    
    // Проверка на подозрительные строки в начале файла
    const fileStart = new TextDecoder('utf-8', { fatal: false }).decode(bytes.slice(0, 1024));
    const suspiciousPatterns = [
      'javascript:', 'vbscript:', '<script', 'eval(', 'document.write',
      'shell.application', 'wscript.shell', '.exe', '.bat', '.cmd'
    ];
    
    for (const pattern of suspiciousPatterns) {
      if (fileStart.toLowerCase().includes(pattern)) {
        throw new Error(`Обнаружена подозрительная последовательность: ${pattern}`);
      }
    }
    
    console.log(`✅ Файл ${file.name} прошёл антивирусную проверку`);
    return true;
    
  } catch (error) {
    console.error(`❌ Антивирусная проверка файла ${file.name}:`, error);
    alert(`⚠️ Файл "${file.name}" не прошёл проверку безопасности: ${error.message}`);
    return false;
  }
};

// Обработка выбора файлов
export const handleFileSelection = async (
  files: FileList | null,
  currentFiles: File[],
  onUpdate: (files: File[]) => void
): Promise<void> => {
  if (!files) return;
  
  const selectedFiles = Array.from(files);
  
  // Ограничиваем до 5 файлов (лимит FormSubmit)
  const filesToAdd = selectedFiles.slice(0, 5);
  
  // Проверяем размер каждого файла (до 20 МБ)
  const sizeValidFiles = filesToAdd.filter(file => {
    const maxSize = 20 * 1024 * 1024; // 20 МБ
    if (file.size > maxSize) {
      alert(`Файл "${file.name}" слишком большой. Максимальный размер: 20 МБ`);
      return false;
    }
    return true;
  });
  
  // Проводим антивирусную проверку для каждого файла
  const validFiles = [];
  for (const file of sizeValidFiles) {
    const isClean = await scanFileForVirus(file);
    if (isClean) {
      validFiles.push(file);
    }
  }
  
  // Проверяем общий размер всех файлов (до 100 МБ общий лимит)
  const allFiles = [...currentFiles, ...validFiles];
  const totalSize = allFiles.reduce((sum, file) => sum + file.size, 0);
  const maxTotalSize = 100 * 1024 * 1024; // 100 МБ общий лимит
  
  if (totalSize > maxTotalSize) {
    alert(`Общий размер файлов превышает 100 МБ. Текущий размер: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
    return;
  }
  
  // Ограничиваем до 5 файлов всего
  const totalFiles = allFiles.slice(0, 5);
  
  // Обновляем список файлов если есть изменения
  if (totalFiles.length > currentFiles.length) {
    onUpdate(totalFiles);
  }
  
  // Показываем предупреждения пользователю
  if (selectedFiles.length > 5) {
    alert('Максимум 5 файлов за одну отправку. Первые 5 файлов были добавлены.');
  }
  
  if (validFiles.length < sizeValidFiles.length) {
    alert('Некоторые файлы не прошли проверку безопасности и были исключены.');
  }
};

// Удаление файла из списка
export const removeFileFromList = (
  indexToRemove: number,
  currentFiles: File[],
  onUpdate: (files: File[]) => void
): void => {
  const updatedFiles = currentFiles.filter((_, index) => index !== indexToRemove);
  onUpdate(updatedFiles);
};

// Определение общего размера файлов
export const calculateTotalFileSize = (files: File[]): number => {
  return files.reduce((sum, file) => sum + file.size, 0);
};

// Проверка, являются ли файлы "малыми" для FormSubmit
export const areFilesSmall = (files: File[]): boolean => {
  const totalSize = calculateTotalFileSize(files);
  const smallFilesLimit = 4 * 1024 * 1024; // 4 МБ лимит для FormSubmit
  return totalSize <= smallFilesLimit;
};

// Валидация файлов перед отправкой
export const validateFilesForSubmission = (files: File[]): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
  // Проверяем количество файлов
  if (files.length > 5) {
    errors.push('Максимум 5 файлов за одну отправку');
  }
  
  // Проверяем размер каждого файла
  const maxFileSize = 20 * 1024 * 1024; // 20 МБ
  for (const file of files) {
    if (file.size > maxFileSize) {
      errors.push(`Файл "${file.name}" превышает лимит 20 МБ`);
    }
  }
  
  // Проверяем общий размер
  const totalSize = calculateTotalFileSize(files);
  const maxTotalSize = 100 * 1024 * 1024; // 100 МБ
  if (totalSize > maxTotalSize) {
    errors.push(`Общий размер файлов превышает 100 МБ: ${(totalSize / 1024 / 1024).toFixed(2)} МБ`);
  }
  
  // Проверяем расширения файлов
  const allowedExtensions = ['.xlsx', '.xls', '.docx', '.doc', '.pdf'];
  for (const file of files) {
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    if (!allowedExtensions.includes(fileExtension)) {
      errors.push(`Недопустимый формат файла: ${file.name} (${fileExtension})`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Форматирование размера файла для отображения
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Получение информации о файлах для отправки в email
export const getFilesInfoForEmail = (files: File[]): string => {
  if (files.length === 0) return 'Файлы не прикреплены';
  
  const totalSize = calculateTotalFileSize(files);
  const filesList = files.map((file, index) => 
    `${index + 1}. ${file.name} (${formatFileSize(file.size)})`
  ).join('\n');
  
  return `Прикреплено файлов: ${files.length} шт., общий размер: ${formatFileSize(totalSize)}\n\nСписок файлов:\n${filesList}`;
};