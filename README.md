# 🚀 LotBlox Manager – Vault Edition (V15: Smart Unlinker)

**LotBlox Manager** is a premium browser extension for advanced Roblox account management. V15 introduces the **Smart Email Unlinker**, enhanced Discord bridge integration, and powerful account automation tools.

---

## ✨ Key Features

### 🛡️ Discord Vault Integration

Manage your entire account vault through a secure Discord bridge.

- **Cookie Import:** Directly import cookies from Discord bridge
- **Username:Password Storage:** Save login credentials with optional password-only profiles
- **Auto-Sync:** Real-time sync from the local bridge at `http://localhost:3000`

### 🔄 Smart Profile Auto-Fixer (New in V15)

- **Auto-Rename Imports:** Detects active Roblox user and auto-renames generic imports (e.g., "Discord Import") to real usernames
- **Live Avatars:** Pulls live avatar headshots for a cleaner accounts grid
- **Profile Status:** Displays Robux balance or "Pass Only" status for quick account identification

### 🔐 Built-in TOTP / 2FA

- **Per-Account Secrets:** Store 2FA secrets inside the vault for each account
- **Live Code Display:** Real-time code generation with 30-second timer bar
- **Auto-Fill & Auto-Submit:** Automatically fills and submits verification codes on Roblox 2FA prompts
- **Secret Management:** Add, update, or remove secrets per-account

### ⚠️ Smart Email Unlinker (V15)

**The flagship feature of V15 - intelligent email unlinking with safety checks.**

- **ID-Verified Detection:** Checks if account is ID-verified/voice-verified before attempting changes
- **Age Glitch (Target: <13):** Attempts to change birthdate to 2016 to force email unlink on standard accounts
- **Parent PIN Bypass:** Automatically tests common PINs when parent controls are detected
- **Error Handling:** Clear feedback on why unlinking fails (2FA, ID Verified, wrong password, etc.)

### ⚡ Quick Actions & Quality of Life

- **One-Click Login:** Instantly switch `.ROBLOSECURITY` between stored accounts
- **Bridge Status Indicator:** Real-time connected/disconnected status (🟢/🔴)
- **Passkey Shortcut:** Quick access to Roblox security settings for passkey registration
- **Email Auto-Fill Helper:** Speeds up email change flows with auto-populated forms
- **Bulk Account Management:** View, delete, or switch between accounts in a clean grid interface

---

## 📦 Installation

### Option 1: Download Latest Release

**[⬇️ Download LotBlox V15 (Latest)](https://github.com/Zaymadkid/LotBlox/releases/latest/download/LotBlox_Extension.zip)**

1. Download the ZIP file above
2. Extract to a folder on your computer
3. Open `chrome://extensions`
4. Enable **Developer mode** (top right)
5. Click **Load unpacked**
6. Select the extracted folder
7. Done! LotBlox is installed

### Option 2: Clone via GitHub Desktop

1. In GitHub Desktop, click **File → Clone Repository**
2. Select the **URL** tab
3. Paste: `https://github.com/Zaymadkid/LotBlox`
4. Choose a folder on your computer
5. Click **Clone**
6. Follow steps 3-7 above

### Option 3: Manual Git Clone

```bash
git clone https://github.com/Zaymadkid/LotBlox
cd LotBlox
```

Then load the folder in `chrome://extensions` with Developer mode enabled.

---

## 🎮 How to Use

### Dashboard Tab
- View current logged-in username, Robux balance, and email status
- See Discord bridge connection status
- Add passkey for enhanced security

### Accounts Tab
- **Add Account:** Paste `.ROBLOSECURITY` cookie + optional 2FA secret
- **Click Profile:** Switch account instantly (cookie-based) or copy password (password-only)
- **Hover & Delete:** Remove accounts from vault
- **Password-Only Mode:** Save credentials without cookies for read-only access

### 2FA Tab
- View live TOTP codes for the current logged-in account
- Add or update 2FA secrets
- Codes auto-generate every 30 seconds
- Automatically fills on Roblox login pages

### Settings Tab

#### Smart Email Unlinker
1. Enter your account password
2. Click **ATTEMPT UNLINK**
3. Extension checks if account is ID-Verified
4. If eligible, changes age to <13 to trigger auto-unlink
5. If parent PIN detected, tries common PINs automatically
6. Reload page to see results

#### Email Auto-Fill Helper
1. Enter new email and password
2. Click **Open Settings & Type**
3. Extension opens email settings page and auto-fills fields
4. Complete the captcha manually
5. Submit to change email

---

## 🔧 Files Overview

| File | Purpose |
|------|----------|
| `manifest.json` | Chrome extension configuration (V3) |
| `popup.html` | Extension UI (Dashboard, Accounts, 2FA, Settings tabs) |
| `script.js` | Popup logic & account management |
| `background.js` | Service worker for CSRF caching, unlinker, email auto-fill, Discord bridge |
| `content.js` | Auto-fills 2FA codes on Roblox login pages |
| `sha.js` | SHA-1 & TOTP implementation |

---

## ⚙️ Technical Details

### Chrome MV3 Compliant
- Uses Service Worker (not background page)
- No DOM manipulation from service worker
- Content scripts isolated per-tab

### Security
- **Local Storage Only:** All data stored in `chrome.storage.local` (encrypted at rest by Chrome)
- **CSRF Protection:** Caches X-CSRF-TOKEN from Roblox headers
- **No External API:** Bridge communication is local (`http://localhost:3000`)

### Smart Unlinker Logic
1. Validates password with POST to `https://users.roblox.com/v1/birthdate`
2. Checks voice verification status via `https://voice.roblox.com/v1/settings`
3. Attempts age change to 2016 (sets user to <13)
4. If Parent PIN detected (error code 6), tries: "0000", "1234", "1111", "12345"
5. Reports success/failure via Chrome notification

---

## 📋 Changelog - V15

### ✨ New Features
- **Smart Email Unlinker:** Intelligent age glitch with Parent PIN detection
- **Profile Auto-Fixer:** Auto-renames imported accounts and syncs avatars
- **Enhanced Error Messages:** Clear feedback on why operations fail

### 🐛 Improvements
- Better bridge status detection
- Improved account switching speed
- Cleaner UI animations
- More reliable 2FA auto-fill

### 🔒 Fixes
- Fixed CSRF token caching issues
- Fixed 2FA secret validation
- Fixed account profile image loading

---

## 🛑 Limitations & Warnings

⚠️ **ID-Verified Accounts:** Cannot unlink email if account is verified with government ID or voice verification.

⚠️ **2FA Protected:** If 2FA is enabled, you'll need the original email code to change the age.

⚠️ **Parent Controls:** Parent PINs are brute-forced with common values; unique PINs may not be bypassed.

⚠️ **Terms of Service:** Using this extension may violate Roblox Terms of Service. Use at your own risk.

---

## 🔗 Links

- **GitHub:** https://github.com/Zaymadkid/LotBlox
- **Latest Release:** https://github.com/Zaymadkid/LotBlox/releases/latest
- **Discord Bridge:** See `SYNC_WORKFLOW_GUIDE.md` for setup

---

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Made with ❤️ for the Roblox community. Use responsibly.**
