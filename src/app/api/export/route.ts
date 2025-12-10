import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(_req: NextRequest) {
  // TODO: Generate DOCX/PDF buffers for CV and cover letter and return as a download.
  return NextResponse.json(
    {
      ok: false,
      message: "Document export not implemented yet",
    },
    { status: 200 },
  );
}


