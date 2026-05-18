import { NextResponse } from "next/server";
import connectDB from "../db/db";
import Certs from "../models/certsModel";

export async function GET() {
  try {
    await connectDB();
    const certs = await Certs.find();
    return NextResponse.json(certs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch certs", details: error.message },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const { title, status, issuedOn, issuedBy, grade } = await req.json();
    const cert = await Certs.create({
      title,
      status,
      issuedOn,
      issuedBy,
      grade,
    });
    return NextResponse.json(cert, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create cert", details: error.message },
      { status: 500 },
    );
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Cert id is required in the URL query parameter `id`" },
        { status: 400 },
      );
    }

    const body = await req.json();
    const updates = {};
    if (typeof body.title === "string") updates.title = body.title;
    if (typeof body.status === "string") updates.status = body.status;
    if (typeof body.issuedOn === "string") updates.issuedOn = body.issuedOn;
    if (typeof body.issuedBy === "string") updates.issuedBy = body.issuedBy;
    if (typeof body.grade === "string") updates.grade = body.grade;
    if (typeof body.description === "string")
      updates.description = body.description;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No valid fields provided to update" },
        { status: 400 },
      );
    }

    const cert = await Certs.findByIdAndUpdate(id, updates, { new: true });
    if (!cert) {
      return NextResponse.json({ error: "Cert not found" }, { status: 404 });
    }
    return NextResponse.json(cert, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update cert", details: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Cert id is required in the URL query parameter `id`" },
        { status: 400 },
      );
    }
    await Certs.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Cert deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete cert", details: error.message },
      { status: 500 },
    );
  }
}
