import { NextResponse } from "next/server";

import { claimOfferSchema } from "@/src/lib/validation/claimOffer.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = claimOfferSchema.parse(body);

    const webhookResponse = await fetch(process.env.WEBHOOK_URL!, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,

        source: "Landing Page",

        campaign: "Hero CTA",

        product: "Xiaomi Robot Vacuum X20+",

        submittedAt: new Date().toISOString(),
      }),
    });
    if (!webhookResponse.ok) {
      throw new Error("Webhook request failed.");
    }

    return NextResponse.json({
      success: true,
      message: "Request received successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request.",
      },
      {
        status: 400,
      }
    );
  }
}