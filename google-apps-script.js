// Google Apps Script Code
// This code should be deployed in Google Apps Script and connected to a Google Sheet

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = new Date();

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email']);
    }

    // Add the email to the sheet
    sheet.appendRow([timestamp, email]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'email': email }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to get all emails (for testing)
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success', 'data': data }))
    .setMimeType(ContentService.MimeType.JSON);
}
