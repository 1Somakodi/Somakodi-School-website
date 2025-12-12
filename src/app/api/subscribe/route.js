export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ success: false, message: "Email is required" }), { status: 400 });
    }

    // Send email to SheetDB
    const response = await fetch(process.env.SHEETDB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [{ email }],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save to SheetDB");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("SheetDB Error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
