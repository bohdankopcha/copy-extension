# 🔧 Copy GitHub Element and URL — Chrome Extension

## 📌 Purpose

This Chrome extension allows the user to quickly copy the text content of a specific DOM element on a GitHub page, along with the current page's URL, using a keyboard shortcut. It's designed to simplify workflows like referencing GitHub issues, PR titles, or any important snippet from a GitHub page.

---

## ✅ Features

- **🔗 Hotkey Activation**

  - Press a customizable keyboard shortcut (e.g. `Ctrl+Cmd+C` on macOS)
  - Configure it via `chrome://extensions/shortcuts`

- **📄 DOM Element Capture**

  - Extracts content from a predefined CSS selector (e.g. `.js-issue-title`)
  - Runs only on GitHub pages

- **🌍 URL Attachment**

  - Automatically includes the current page URL in the copied content

- **📋 Clipboard Integration**

  - The combined text (DOM content + URL) is copied directly to your clipboard

- **🔔 Toast Notifications**
  - Clean, Toastify-style feedback in the bottom-right corner:
    - ✅ On success: `"Issue link copied!"`
    - ❌ On failure: `"Issue title not found"` or `"Failed to copy issue link"`
  - Built with vanilla JS + CSS (no external libraries)

---

## 🌐 Domain Restriction

> This extension **only runs on `github.com`**  
> (`*://github.com/*` via `host_permissions` and `content_scripts.matches`)

This ensures better performance, tighter security, and no interference with unrelated websites.

---

## ⚙️ Technical Stack

- Manifest V3
- Vanilla JavaScript (no React)
- Background service worker (`background.js`)
- Content script (`content.js`)
- No popup UI
- CSS-styled toasts emulating React Toastify

---

## 🚫 Not Included

- No React
- No popup interface
- No dynamic UI for setting the selector (currently hardcoded)

---

## 📁 Project Structure

copy-extension/
├── manifest.json
├── background.js
├── content.js
├── (optional) toast styling in content.js
