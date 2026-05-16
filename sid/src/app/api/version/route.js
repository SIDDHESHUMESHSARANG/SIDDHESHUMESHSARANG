import { NextResponse } from "next/server";
import connectDB from "../db/db";
import RequestModel from "../models/RequestModel";
import crypto from "crypto";

export async function GET() {
  try {
    await connectDB();

    let record = await RequestModel.findOne().sort({ updatedAt: -1 }).lean();

    if (!record) {
      // generate initial 6-digit id and upsert
      const salt = process.env.dviSalt || "";
      const hash = crypto
        .createHash("sha256")
        .update(String(Date.now()) + salt)
        .digest("hex");
      const numeric = parseInt(hash.slice(0, 12), 16);
      const dataVersionID = (numeric % 900000) + 100000;

      // create document
      await RequestModel.findOneAndUpdate(
        {},
        { dataVersionID },
        { upsert: true, new: true },
      );

      return NextResponse.json({ dataVersionID }, { status: 200 });
    }

    const dataVersionID = record.dataVersionID || 0;
    return NextResponse.json({ dataVersionID }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch version", details: error.message },
      { status: 500 },
    );
  }
}
