chrome.commands.onCommand.addListener((command) => {
  if (command === "copy_content") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: copyAndWrite,
        });
      }
    });
  }
});

function copyAndWrite() {
  const selector = '[data-testid="issue-title"]';
  const node = document.querySelector(selector);

  if (!node) {
    window.dispatchEvent(
      new CustomEvent("toast-message", {
        detail: { text: "Issue title not found", success: false },
      })
    );
    return;
  }

  const taskTitle = node.textContent.trim();
  const url = window.location.href;
  const combined = `[${taskTitle}](${url})`;

  navigator.clipboard
    .writeText(combined)
    .then(() => {
      window.dispatchEvent(
        new CustomEvent("toast-message", {
          detail: { text: "Issue link copied!", success: true },
        })
      );
    })
    .catch((err) => {
      window.dispatchEvent(
        new CustomEvent("toast-message", {
          detail: { text: "Failed to copy issue link", success: false },
        })
      );
    });
}
