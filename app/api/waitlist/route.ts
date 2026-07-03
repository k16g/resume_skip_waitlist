import { NextRequest, NextResponse } from "next/server";

// Placeholder waitlist endpoint.
// Swap this out for a real integration (e.g. a Google Sheet via Apps Script,
// Airtable, Supabase table, or an email tool like Resend/Mailchimp/Beehiiv)
// before launch. For now it just validates the email and logs it.
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
    }

    // TODO: persist `email` to your waitlist store of choice.
    console.log("New waitlist signup:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
