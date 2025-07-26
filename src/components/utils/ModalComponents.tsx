// Модальные окна для отображения статуса отправки формы

// Создание индикатора загрузки
export function createLoadingIndicator(): HTMLElement {
  const loadingDiv = document.createElement('div');
  loadingDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #059669;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 400px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #D4AF37;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: spin 1s linear infinite;
      ">⟳</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Отправляем заявку...</h3>
      <p style="margin: 0; opacity: 0.9; font-size: 14px;">Пожалуйста, подождите</p>
    </div>
    <style>
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(loadingDiv);
  return loadingDiv;
}

// Создание модального окна успеха
export function createSuccessModal(message?: string): void {
  const successDiv = document.createElement('div');
  successDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #059669;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 500px;
      text-align: center;
    ">
      <div style="
        width: 48px;
        height: 48px;
        background: #D4AF37;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: black;
        font-weight: bold;
      ">✅</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Заявка успешно отправлена!</h3>
      <p style="margin: 0 0 8px 0; opacity: 0.9; font-size: 14px;">${message || 'Благодарим за обращение к нашей компании!'}</p>
      <p style="margin: 0; opacity: 0.7; font-size: 12px;">Наш специалист свяжется с вами в ближайшее время</p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #D4AF37;
        color: black;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        margin-top: 12px;
        cursor: pointer;
        font-weight: 600;
      ">Отлично, жду звонка</button>
    </div>
  `;
  document.body.appendChild(successDiv);
}

// Создание модального окна успеха для больших файлов
export function createFileSuccessModal(): void {
  const successDiv = document.createElement('div');
  successDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #16a34a;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      z-index: 10000;
      max-width: 400px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #22c55e;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
      ">✓</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Заявка отправлена!</h3>
      <p style="margin: 0 0 16px 0; opacity: 0.9; font-size: 14px;">Файлы загружены и отправлены. Мы свяжемся с вами в ближайшее время.</p>
      <button onclick="this.parentElement.parentElement.remove(); location.reload();" style="
        background: #22c55e;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(successDiv);
}

// Создание модального окна ошибки
export function createErrorModal(message: string): void {
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #dc2626;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 400px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #fbbf24;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
      ">!</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Ошибка отправки</h3>
      <p style="margin: 0 0 16px 0; opacity: 0.9; font-size: 14px;">${message}</p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #fbbf24;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(errorDiv);
}

// Создание модального окна ошибки для больших файлов
export function createFileSizeErrorModal(): void {
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #dc2626;
      color: white;
      padding: 24px 32px;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      z-index: 10000;
      max-width: 500px;
      text-align: center;
    ">
      <div style="
        width: 24px;
        height: 24px;
        background: #fbbf24;
        border-radius: 50%;
        margin: 0 auto 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
      ">!</div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Файлы слишком большие</h3>
      <p style="margin: 0 0 16px 0; opacity: 0.9; font-size: 14px;">
        Попробуйте уменьшить размер файлов или свяжитесь с нами напрямую:<br>
        📞 <strong>+7 (901) 862-81-81</strong><br>
        📧 <strong>commerce@rusutil-1.ru</strong>
      </p>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #fbbf24;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(errorDiv);
}