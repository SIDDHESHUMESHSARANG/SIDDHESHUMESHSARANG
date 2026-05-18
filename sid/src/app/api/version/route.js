import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "Version endpoint removed" },
    { status: 404 },
  );
}
