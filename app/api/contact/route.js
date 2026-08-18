import crypto from "node:crypto";
import { NextResponse } from "next/server";

// Contact submissions are written server-side so Google credentials never reach the browser.
const SHEET_ID =
  process.env.GOOGLE_SHEETS_ID ||
  "1T6bNrswKYcwCIkpIBrJSMKyVcD_9RB09q17YmMl1dGY";
const SHEET_RANGE = process.env.GOOGLE_SHEETS_RANGE || "Leads!A:I";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function base64url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getGoogleAccessToken() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are not configured.");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: clientEmail,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );

  const unsignedToken = `${header}.${claims}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();

  const signature = signer
    .sign(privateKey, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const assertion = `${unsignedToken}.${signature}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Google token error:", detail);
    throw new Error("Unable to authorize Google Sheets.");
  }

  const data = await response.json();
  return data.access_token;
}

function clean(value, max = 5000) {
  return String(value || "")
    .trim()
    .slice(0, max);
}

function inquiryLabel(value) {
  return (
    {
      advisory: "Principal Advisory",
      operator: "Dedicated Offshore Operator",
      housing: "Affordable Housing Advisory",
      other: "Something Else",
    }[value] || "Something Else"
  );
}

async function appendLead(values) {
  const accessToken = await getGoogleAccessToken();
  const encodedRange = encodeURIComponent(SHEET_RANGE);
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [values] }),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Google Sheets append error:", detail);
    throw new Error("Unable to save the inquiry.");
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot field. Return success so bots do not learn the filter.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 160);
    const email = clean(body.email, 254).toLowerCase();
    const company = clean(body.company, 200);
    const inquiryType = clean(body.inquiryType, 80);
    const message = clean(body.message, 5000);
    const source = clean(body.source || "website-contact", 120);

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "Please complete the required fields." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const submitted = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Phoenix",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date());

    await appendLead([
      submitted,
      name,
      email,
      company,
      inquiryLabel(inquiryType),
      message,
      source,
      "New",
      "",
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "We could not send your note just now. Please email scott.smith@akhadaconsulting.com directly.",
      },
      { status: 500 },
    );
  }
}
