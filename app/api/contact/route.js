import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("👉 ou try LMS URL:", process.env.LMS_API_URL);

  try {
    const body = await req.json();

    console.log("Website received form:", body);
    console.log("👉 LMS URL:", process.env.LMS_API_URL);


    const response = await fetch(
      process.env.LMS_API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.LMS_INTERNAL_SECRET,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });

  } catch (error) {
    console.error("Website → LMS Error:", error);

    return NextResponse.json(
      { error: "Connection failed" },
      { status: 500 }
    );
  }
}
