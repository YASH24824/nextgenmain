// API route to receive and log customer lead data
// POST /api/submit-lead

export async function POST(request) {
  try {
    const body = await request.json();

    // Log the received data (for preview/debugging)
    console.log("📨 Lead Data Received:", body);

    // Extract customer details
    const {
      name,
      email,
      phone,
      state,
      fundingType,
      sector,
      entityType,
      amountRange,
      isDpiit,
      isFemaleFounder,
    } = body;

    // Validate required fields
    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Prepare data to send to your backend
    const leadData = {
      timestamp: new Date().toISOString(),
      customer: {
        name: name.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : "",
        state: state || "Not specified",
      },
      businessDetails: {
        sector,
        entityType,
        fundingType,
        amountRange,
      },
      eligibilityFlags: {
        isDpiit,
        isFemaleFounder,
      },
    };

    console.log("✅ Processing Lead:", leadData);

    // TODO: Send this data to your backend
    // Example:
    // const backendResponse = await fetch('YOUR_BACKEND_URL/api/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(leadData),
    // });

    // For now, just return success
    return Response.json(
      {
        success: true,
        message: "Lead data received successfully",
        data: leadData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error processing lead:", error);
    return Response.json(
      { error: "Failed to process lead data", details: error.message },
      { status: 500 }
    );
  }
}
