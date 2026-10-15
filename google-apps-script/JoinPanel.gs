/**
 * VjTH Join Panel -> Google Sheet
 *
 * Setup:
 * 1. Open your Google Sheet > Extensions > Apps Script.
 * 2. Paste this whole file into Code.gs and save.
 * 3. Deploy > New deployment > Type: Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copy the Web app URL (ends with /exec) into .env.local as
 *      NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/XXXX/exec
 *
 * After any change to this script, use Deploy > Manage deployments > Edit >
 * Version: New version, otherwise the old code keeps running.
 */

const SHEET_NAME = "Panel Registrations";

const COLUMNS = [
  ["submittedAt", "Submitted At"],
  ["fullName", "Full Name"],
  ["age", "Age"],
  ["dob", "Date of Birth"],
  ["gender", "Gender"],
  ["email", "Email"],
  ["phone", "Mobile / WhatsApp"],
  ["city", "City"],
  ["country", "Country"],
  ["zipCode", "Pincode / Zip"],
  ["occupation", "Employment Status"],
  ["industry", "Primary Industry"],
  ["incomeRange", "Household Monthly Income"],
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();

    const row = COLUMNS.map(([key]) =>
      key === "submittedAt" ? new Date() : sanitize_(data[key])
    );
    sheet.appendRow(row);

    return json_({ success: true });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map(([, label]) => label));
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Prevent formula injection (values starting with = + - @ run as formulas)
function sanitize_(value) {
  const str = value == null ? "" : String(value).trim();
  return /^[=+\-@]/.test(str) ? "'" + str : str;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
