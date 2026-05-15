import { google } from "googleapis";
import path from "node:path";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,

    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim(),
  },


  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

export async function appendToSheet(data: string[]) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,

    range: "Sheet1!A:E",

    valueInputOption: "USER_ENTERED",

    requestBody: {
      values: [data],
    },
  });
}