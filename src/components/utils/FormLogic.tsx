// Основной файл объединяющий компоненты отправки формы

// Импортируем модальные окна
export {
  createLoadingIndicator,
  createSuccessModal,
  createFileSuccessModal,
  createErrorModal,
  createFileSizeErrorModal
} from './ModalComponents';

// Импортируем функции отправки файлов
export {
  sendSmallFilesSingle,
  sendSmallFilesMultiple,
  sendSmallFiles,
  sendLargeFiles
} from './FileSubmission';

// Импортируем функции отправки форм
export {
  sendFormWithoutFiles,
  sendFallbackForm
} from './FormSender';