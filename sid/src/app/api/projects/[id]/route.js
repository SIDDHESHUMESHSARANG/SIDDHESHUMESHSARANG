import { NextResponse } from "next/server";
import connectDB from "../../db/db";
import Projects from "../../models/projectsModel";
import RequestModel from "../../models/RequestModel";
import crypto from "crypto";

const bumpVersion = async () => {
  const salt = process.env.dviSalt || "";
  const hash = crypto
    .createHash("sha256")
    .update(String(Date.now()) + salt)
    .digest("hex");
  const numeric = parseInt(hash.slice(0, 12), 16);
  const dataVersionID = (numeric % 900000) + 100000;
  await RequestModel.findOneAndUpdate(
    {},
    { dataVersionID },
    { upsert: true, new: true },
  );
};

export async function GET(req, { params }) {
  try {
    await connectDB();
    const project = await Projects.findById(params.id);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project", details: error.message },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();
    const updates = {};
    if (typeof body.title === "string") updates.title = body.title;
    if (typeof body.description === "string")
      updates.description = body.description;
    if (typeof body.githubLink === "string")
      updates.githubLink = body.githubLink;
    if (typeof body.liveLink === "string") updates.liveLink = body.liveLink;
    if (Array.isArray(body.tags)) updates.tags = body.tags;
    if (Array.isArray(body.tech)) updates.tech = body.tech;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No valid fields provided to update" },
        { status: 400 },
      );
    }

    const project = await Projects.findByIdAndUpdate(params.id, updates, {
      new: true,
    });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    await bumpVersion();
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project", details: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const project = await Projects.findByIdAndDelete(params.id);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    await bumpVersion();
    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project", details: error.message },
      { status: 500 },
    );
  }
}
