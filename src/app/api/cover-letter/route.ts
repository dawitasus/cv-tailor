import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(_req: NextRequest) {
  // TODO: Call LLM to generate a tailored cover letter draft.
  return NextResponse.json(
    {
      ok: true,
      coverLetter: "",
      message: "Cover letter generation not implemented yet",
    },
    { status: 200 },
  );
}


