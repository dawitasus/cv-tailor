import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(_req: NextRequest) {
  // TODO: Implement server-side PDF/DOCX parsing with temp file cleanup.
  return NextResponse.json(
    {
      ok: true,
      text: "",
      meta: { source: "server", type: "unknown" },
      message: "Parsing not implemented yet",
    },
    { status: 200 },
  );
}


