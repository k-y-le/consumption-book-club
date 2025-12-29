# Google Sheets Email Collection Setup

This guide will help you set up free email collection using Google Sheets and Google Apps Script.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Name it something like "Consumption Book Club - Email List"
4. The headers will be automatically added when the first email is submitted

## Step 2: Open Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. This will open the Apps Script editor in a new tab
3. Delete any default code in the editor

## Step 3: Add the Script Code

1. Copy the code from the `google-apps-script.js` file in this repository
2. Paste it into the Apps Script editor
3. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
4. Name your project (e.g., "Email Collection Script")

## Step 4: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Configure the deployment:
   - **Description**: "Email collection endpoint" (or anything you like)
   - **Execute as**: Me (your email address)
   - **Who has access**: Anyone
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [project name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - you'll need this for the next step

## Step 5: Update Your Website Code

1. Open `script.js` in your website folder
2. Find this line near the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the URL you copied in Step 4
4. Save the file

## Step 6: Test It Out

1. Open your `index.html` file in a web browser
2. Enter a test email address
3. Click the "stay tuned" button
4. Check your Google Sheet - the email should appear with a timestamp!

## How to Access Your Emails

- Open your Google Sheet anytime to see all collected emails
- You can export to CSV: **File** → **Download** → **Comma Separated Values (.csv)**
- You can sort, filter, and manage emails directly in the spreadsheet

## Updating the Script

If you need to make changes to the Apps Script:

1. Edit the code in the Apps Script editor
2. Save your changes
3. Click **Deploy** → **Manage deployments**
4. Click the pencil icon ✏️ next to your deployment
5. Update the version (select "New version")
6. Click **Deploy**

## Privacy & Data

- Only you can access the Google Sheet (unless you share it)
- The script runs under your Google account
- All data is stored in your Google Drive
- Free with no limits from Google

## Troubleshooting

**Emails not appearing in the sheet?**
- Make sure you copied the correct Web App URL
- Check that the deployment is set to "Anyone" for access
- Look at the browser console for error messages

**Getting authorization errors?**
- Make sure you completed the authorization flow in Step 4
- Try redeploying the script

**Need to update the script?**
- Follow the "Updating the Script" section above
- The Web App URL stays the same, so you don't need to update `script.js`
