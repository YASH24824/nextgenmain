import { NextResponse } from "next/server";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_EXPECTED_ACTION = "contact_form";

const AUTO_SAVE_TOKENS = ["auto_save_no_captcha", "final_submission_no_captcha", "auto_save"];

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
  console.log("🚀 API called at:", new Date().toISOString());
  console.log("👉 LMS URL:", process.env.LMS_API_URL);

  try {
    const body = await req.json();
    console.log("📥 Received body:", JSON.stringify(body, null, 2));

    const {
      recaptchaToken,
      campaign_name,
      name,
      phone,
      email,
      state,
      platform,
      ad_name,
      external_lead_id,
      sector,
      entityType,
      isDpiit,
      isFemaleFounder,
      completed,
      timestamp,
      ...rest
    } = body || {};

    // 🔥 Check if this is an auto-save request
    const isAutoSave = recaptchaToken && AUTO_SAVE_TOKENS.includes(recaptchaToken);

    if (isAutoSave) {
      console.log("🔄 Auto-save request detected");
      console.log("📝 Campaign name:", campaign_name);
      console.log("📞 Phone:", phone);
      console.log("👤 Name:", name);
      console.log("📍 State:", state);

      // 🔥 Prepare payload for LMS
      const lmsPayload = {
        name: name || "",
        phone: phone || "",
        email: email || "",
        state: state || "",
        platform: platform || "website chatbot",
        ad_name: ad_name || "",
        external_lead_id: external_lead_id || "",
        sector: sector || "",
        entity_type: entityType || "",
        is_dpiit: isDpiit || false,
        is_female_founder: isFemaleFounder || false,
        campaign_name: campaign_name || "50% Interested",
        completed: completed || false,
        timestamp: timestamp || new Date().toISOString(),
      };

      console.log("📤 Sending to LMS (Auto-Save):", lmsPayload);

      try {
        const response = await fetch(process.env.LMS_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.LMS_INTERNAL_SECRET,
          },
          body: JSON.stringify(lmsPayload),
        });

        const data = await response.json();
        console.log("✅ LMS Response (Auto-Save):", data);

        return NextResponse.json(data, {
          status: response.status,
        });
      } catch (error) {
        console.error("❌ Auto-save forward error:", error);
        // Even if LMS fails, return success to not block the user
        return NextResponse.json(
          {
            success: true,
            message: "Data received successfully (LMS unavailable)",
            data: lmsPayload,
          },
          { status: 200 }
        );
      }
    }

    // 🔥 Regular recaptcha verification for actual form submissions
    if (!recaptchaToken) {
      console.log("❌ No recaptcha token provided");
      return NextResponse.json(
        { error: "Captcha verification required" },
        { status: 400 }
      );
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("❌ RECAPTCHA_SECRET_KEY is not set — rejecting contact submission");
      return NextResponse.json(
        { error: "Captcha not configured" },
        { status: 500 }
      );
    }

    // 🔥 Verify recaptcha
    let verification;
    try {
      verification = await verifyRecaptcha(recaptchaToken);
    } catch (error) {
      console.error("❌ reCAPTCHA verify endpoint error:", error);
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

    console.log("🔍 reCAPTCHA verification:", {
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

    // 🔥 Final submission - send to LMS
    const lmsPayload = {
      name: name || "",
      phone: phone || "",
      email: email || "",
      state: state || "",
      platform: platform || "website chatbot",
      ad_name: ad_name || "",
      external_lead_id: external_lead_id || "",
      sector: sector || "",
      entity_type: entityType || "",
      is_dpiit: isDpiit || false,
      is_female_founder: isFemaleFounder || false,
      campaign_name: campaign_name || "Fully Interested",
      completed: completed || true,
      timestamp: timestamp || new Date().toISOString(),
    };

    console.log("📤 Sending to LMS (Final):", lmsPayload);
    console.log("👉 LMS URL:", process.env.LMS_API_URL);

    const response = await fetch(process.env.LMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.LMS_INTERNAL_SECRET,
      },
      body: JSON.stringify(lmsPayload),
    });

    const data = await response.json();
    console.log("✅ LMS Response (Final):", data);

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("❌ Website → LMS Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Connection failed",
        message: error.message,
      },
      { status: 500 }
    );
  }
}