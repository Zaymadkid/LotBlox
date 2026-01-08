# 🔄 Chrome Extension Sync Workflow Guide

## Overview
This guide walks you through setting up a **Sync Workflow** that lets you:
- Edit files on GitHub's website
- Sync changes to your local laptop with one click in GitHub Desktop
- Automatically reload your extension in Chrome without downloading ZIP files

**Your Setup:**
- ✅ Windows Laptop
- ✅ Code on GitHub Repository
- ✅ Chrome Extension in Development

---

## Step 1: The Clone – Getting Code to Your Laptop

Before you can sync, you need to "clone" (copy) the repository from GitHub to your Windows laptop.

### What You'll Need:
1. GitHub Desktop installed ([download here](https://desktop.github.com))
2. Your GitHub account signed in

### The Clone Process:

**1. Open GitHub Desktop**
- Launch the GitHub Desktop application

**2. Clone the Repository**
- Click **File** → **Clone Repository**
- In the dialog, select the **URL** tab
- Paste this URL:
  ```
  https://github.com/Zaymadkid/LotBlox_Final_V10
  ```

**3. Choose Your Location**
- Under "Local Path", select or create a folder
- **Recommended location:** `C:\Users\YourUsername\Documents\LotBlox_Final_V10`
- This is where all your extension code will be stored locally

**4. Click Clone**
- GitHub Desktop will download the entire repository to your laptop
- This may take a minute depending on your internet

✅ **Result:** Your extension code is now on your laptop! You can find the folder in File Explorer at the path you chose.

---

## Step 2: The Connection – Linking Chrome to Your Local Folder

Now Chrome needs to know where to find your extension files. This is called "Load Unpacked".

### The Connection Process:

**1. Open Chrome**
- Launch Google Chrome

**2. Go to Extensions Manager**
- Type or paste this in the address bar:
  ```
  chrome://extensions/
  ```
- Or: Click menu (three dots) → **Extensions** → **Manage extensions**

**3. Enable Developer Mode**
- In the top-right corner, toggle **Developer mode** to ON
- You'll see new buttons appear: "Load unpacked", "Pack extension", etc.

**4. Load Your Extension**
- Click the **Load unpacked** button
- A file browser opens
- Navigate to your Documents folder → **LotBlox_Final_V10** folder
- **Click "Select Folder"**

✅ **Result:** Your extension now appears in Chrome! You'll see:
- Extension icon in the Chrome toolbar
- A card showing your extension details in `chrome://extensions/`
- Status showing "Errors" or "Ready" depending on your code

### Finding Your Extension ID
- Each unpacked extension gets a unique ID (shown on the `chrome://extensions/` page)
- Save this ID – you may need it later

---

## Step 3: The Workflow – Edit → Sync → Reload (The Daily Routine)

This is where the magic happens. Here's exactly what buttons to click when you make changes.

### Scenario: You Edit a File on GitHub Website

#### On Your Windows Laptop:

**After editing on GitHub website:**

1. **Open GitHub Desktop**
   - The app shows "0 changes"

2. **Click the "Fetch origin" Button**
   - Located at the top of GitHub Desktop
   - This downloads the latest changes from GitHub to your laptop
   - The button will change to **"Pull origin"** if new changes exist

3. **Click "Pull origin" (if it appeared)**
   - This brings the changes you made on the website into your local folder
   - You'll see the file updates reflected locally

#### In Chrome:

4. **Go to `chrome://extensions/`**
   - Click the **refresh icon** ⟲ (circular arrow) on your extension card
   - Chrome reloads the extension from the local folder
   - Changes are now live in your extension!

### Scenario: You Edit Files Locally (On Your Laptop)

#### On Your Windows Laptop:

1. **Edit Your Files**
   - Open your code editor (VSCode, Notepad++, etc.)
   - Navigate to your `C:\Users\YourUsername\Documents\LotBlox_Final_V10` folder
   - Edit any file (`.js`, `.html`, `.json`, etc.)
   - **Save your changes** (Ctrl+S)

2. **Open GitHub Desktop**
   - You'll see your changes listed under "Changes" tab

3. **Commit Your Changes**
   - In the "Summary" field at bottom, write what you changed
     - Example: "Fixed popup button styling"
   - Click **Commit to main**

4. **Push to GitHub**
   - Click **Push origin** button (top right)
   - Your changes are now on GitHub!

#### In Chrome:

5. **Reload the Extension**
   - Go to `chrome://extensions/`
   - Click the **refresh icon** ⟲ on your extension
   - Your local changes are live!

---

## Quick Reference: Button Checklist

### GitHub Desktop Buttons
- **"Fetch origin"** → Download latest changes from website
- **"Pull origin"** → Bring downloaded changes into your local folder
- **"Commit to main"** → Save your local changes to git
- **"Push origin"** → Upload your commits to GitHub website

### Chrome Buttons
- **"Load unpacked"** (one time) → Link extension folder to Chrome
- **"Refresh" icon** (every time you change code) → Reload extension with new changes

---

## Troubleshooting

### "Extension error: Could not load manifest"
**Solution:** Your `manifest.json` file has a typo. Check the `chrome://extensions/` page for the specific error.

### Changes on GitHub website don't show up locally
**Solution:** Did you click **"Fetch origin"** then **"Pull origin"** in GitHub Desktop? Make sure both happen.

### Changes on laptop don't update in Chrome
**Solution:** Did you click the **refresh icon** ⟲ on the extension in `chrome://extensions/`? Chrome doesn't auto-reload.

### "This folder doesn't look like a repository"
**Solution:** Make sure you selected the actual `LotBlox_Final_V10` folder, not a parent folder.

---

## Summary

**The 3-Step Setup:**
1. ✅ Clone: Use GitHub Desktop → File → Clone Repository → paste URL → Select Documents folder
2. ✅ Connect: Chrome → chrome://extensions/ → Enable Developer mode → Load unpacked → Select your folder
3. ✅ Workflow: Edit anywhere → GitHub Desktop (Fetch/Pull/Commit/Push) → Chrome (Refresh icon)

**You're all set!** No more ZIP files. Just edit, sync, and reload. 🎉
