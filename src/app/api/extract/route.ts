import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(_req: NextRequest) {
  // TODO: Call LLM to extract job title, responsibilities, and competencies.
  return NextResponse.json(
    {
      ok: true,
      extraction: null,
      message: "Job extraction not implemented yet",
    },
    { status: 200 },
  );
}


