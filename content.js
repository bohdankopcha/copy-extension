// CSS стили перенесены в styles.css

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
