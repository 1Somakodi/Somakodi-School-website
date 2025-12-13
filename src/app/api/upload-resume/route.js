export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: { persistSession: false },
      }
    );

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Safe unique filename
    const safeName = `${Date.now()}-${file.name}`
      .replace(/\s+/g, "-")
      .toLowerCase();

    // Upload file
    const { error: uploadError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(safeName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error(uploadError);
      return NextResponse.json(
        { error: "Upload failed" },
        { status: 500 }
      );
    }

    // Get PUBLIC URL
    const { data } = supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .getPublicUrl(safeName);

    return NextResponse.json({ url: data.publicUrl });
  } catch (err) {
    console.error("Upload route error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
