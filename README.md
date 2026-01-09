# 🎮 LotBlox Manager V21 - Vault Edition & Mobile Suite

**LotBlox Manager** is a premium browser extension and mobile suite for advanced Roblox account management with Discord integration, secure vault storage, and powerful automation tools.

---

## ✨ Key Features

### 🔐 Secure Vault
- **AES-256 Encrypted Storage** for Roblox cookies and passwords
- Multi-account management with avatar thumbnails
- One-click account switching
- Password-only profiles for secure credential storage

### 📉 Age Glitch
- Forcefully set account age to <13 (born 2016)
- Automatically unlinks email addresses
- Bypasses parent PIN protection (common PINs)
- ID verification detection

### 🤖 Discord Bridge
- Send accounts directly from Discord using `!cookie` command
- Real-time sync between Discord and Extension
- Queue system for multiple account imports
- Username:Password login support with `!login`

### 📱 Mobile Suite
- Tampermonkey userscript for iOS/Android
- Draggable UI controls
- Full vault access on mobile browsers
- Cross-platform synchronization

### 🔑 2FA Authenticator
- Built-in TOTP code generator
- Auto-refresh every 30 seconds
- Secret key management per account
- No external app required

---

## 📥 Downloads

### Chrome/Edge Extension
[**Download Latest Release**](https://github.com/Zaymadkid/LotBlox/releases/latest)

### Mobile UserScript
[**Download Mobile Suite**](https://github.com/Zaymadkid/LotBlox/raw/main/lotblox_mobile.user.js)

### Discord Bot
[**Add LotBlox Bridge Bot**](https://discord.com/oauth2/authorize?client_id=1458782837435138194&permissions=0&integration_type=0&scope=bot)

---

## 🔗 Important Links

**Replit Host:** https://ac60268c-ed75-426d-88d7-fe1af5f2bb6e-00-jmsrouekor0a.kirk.replit.dev

**Discord Server:** *Coming Soon*

**GitHub Repository:** https://github.com/Zaymadkid/LotBlox

---

## 🚀 Quick Start

### Extension Setup
1. Download the latest release
2. Extract the ZIP file
3. Open `chrome://extensions` (or `edge://extensions`)
4. Enable "Developer mode"
5. Click "Load unpacked" and select the extracted folder
6. The extension icon will appear in your toolbar

### Discord Bridge Setup
1. Add the bot to your Discord server
2. Ensure the Replit server is running (green status)
3. Use `!cookie <your_cookie>` to import accounts
4. Check the extension - accounts appear automatically

### Mobile Setup
1. Install Tampermonkey on your mobile browser
2. Click the Mobile UserScript download link
3. Tap "Install" when prompted
4. Visit any Roblox page to see the floating controls

---

## 📖 Usage Guide

### Account Management
- **Add Account:** Click the extension icon  "Add Account"  Paste cookie
- **Switch Account:** Click any account card in the vault
- **Delete Account:** Click the × button on any account card
- **Update 2FA:** Go to Authenticator tab  "Update Key"

### Age Glitch
1. Go to Settings tab
2. Enter your current password
3. Click "Execute Age Glitch"
4. Wait for confirmation (email will be unlinked)

### Email Management
1. Go to Settings tab
2. Enter new email and password
3. Click "Auto-Fill Email Form"
4. Complete the captcha on the opened page

---

## ⚠️ Disclaimer

This tool is for educational purposes only. Use at your own risk. The developers are not responsible for any account actions, bans, or data loss. Always follow Roblox Terms of Service.

---

## 📜 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 🛠️ Technical Details

- **Manifest Version:** 3
- **Encryption:** AES-256-GCM
- **Bridge Protocol:** REST API with polling
- **Supported Browsers:** Chrome, Edge, Brave, Opera
- **Mobile Support:** iOS Safari, Android Chrome (via Tampermonkey)

---

**Made with ❤️ by the LotBlox Team**
