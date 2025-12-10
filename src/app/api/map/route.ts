import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(_req: NextRequest) {
  // TODO: Call LLM to map CV content to job competencies and suggest rewrites.
  return NextResponse.json(
    {
      ok: true,
      mapping: null,
      message: "CV-to-competency mapping not implemented yet",
    },
    { status: 200 },
  );
}


