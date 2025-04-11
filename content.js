// Вставка CSS-стилей
const toastStyles = `
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast {
  padding: 12px 20px;
  border-radius: 8px;
  background: #333;
  color: white;
  font-family: "SF Pro Text", sans-serif;
  font-size: 18px;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.3s ease forwards, fadeOut 0.5s ease 2.5s forwards;
}

.toast.success {
  background: #4BB543;
}

.toast.error {
  background: #E74C3C;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
`;

const styleTag = document.createElement("style");
styleTag.textContent = toastStyles;
document.head.appendChild(styleTag);

// Контейнер для тостов
const container = document.createElement("div");
container.className = "toast-container";
document.body.appendChild(container);

// Показ тоста
function showToast(message, success = true) {
  const toast = document.createElement("div");
  toast.className = "toast " + (success ? "success" : "error");
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Слушаем кастомные события от background.js
window.addEventListener("toast-message", (e) => {
  const { text, success } = e.detail;
  showToast(text, success);
});
