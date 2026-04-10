import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // TODO: Replace with actual submission logic (e.g. database, email, CRM)
    console.log("Drop-off/Pick-up submission:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
