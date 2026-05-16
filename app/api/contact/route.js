import { NextResponse } from "next/server";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_EXPECTED_ACTION = "contact_form";

const getMinScore = () => {
  const raw = process.env.RECAPTCHA_MIN_SCORE;
  const parsed = raw ? Number(raw) : NaN;
  return Number.isFinite(parsed) ? parsed : 0.5;
};

const verifyRecaptcha = async (token) => {
  const params = new URLSearchParams();
  params.append("secret", process.env.RECAPTCHA_SECRET_KEY);
  params.append("response", token);

  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  return response.json();
};

export async function POST(req) {
  console.log("👉 ou try LMS URL:", process.env.LMS_API_URL);
  try {
    const body = await req.json();
    const { recaptchaToken, ...leadPayload } = body || {};

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Captcha verification required" },
        { status: 400 }
      );
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error(
        "RECAPTCHA_SECRET_KEY is not set — rejecting contact submission"
      );
      return NextResponse.json(
        { error: "Captcha not configured" },
        { status: 500 }
      );
    }

    let verification;
    try {
      verification = await verifyRecaptcha(recaptchaToken);
    } catch (error) {
      console.error("reCAPTCHA verify endpoint error:", error);
      return NextResponse.json(
        { error: "Captcha verification unavailable" },
        { status: 503 }
      );
    }

    const minScore = getMinScore();
    const passed =
      verification?.success === true &&
      verification?.action === RECAPTCHA_EXPECTED_ACTION &&
      typeof verification?.score === "number" &&
      verification.score >= minScore;

    console.log("reCAPTCHA verification:", {
      success: verification?.success,
      score: verification?.score,
      action: verification?.action,
      minScore,
      passed,
    });

    if (!passed) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 403 }
      );
    }

    console.log("Website received form:", leadPayload);
    console.log("👉 LMS URL:", process.env.LMS_API_URL);

    const response = await fetch(process.env.LMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.LMS_INTERNAL_SECRET,
      },
      body: JSON.stringify(leadPayload),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Website → LMS Error:", error);

    return NextResponse.json({ error: "Connection failed" }, { status: 500 });
  }
}
