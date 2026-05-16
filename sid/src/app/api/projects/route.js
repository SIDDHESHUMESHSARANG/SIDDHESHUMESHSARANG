import { NextResponse } from "next/server";
import connectDB from "../db/db";
import Projects from "../models/projectsModel";
import RequestModel from "../models/RequestModel";
import crypto from "crypto";

export async function GET() {
  try {
    await connectDB();

    const projects = await Projects.find();

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects", details: error.message },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const { title, description, githubLink, liveLink, tags, tech } =
      await req.json();
    const project = await Projects.create({
      title,
      description,
      githubLink,
      liveLink,
      tags,
      tech,
    });

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

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project", details: error.message },
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
        { error: "Project id is required in the URL query parameter `id`" },
        { status: 400 },
      );
    }

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

    const project = await Projects.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // bump dataVersionID
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

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project", details: error.message },
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
        { error: "Project id is required in the URL query parameter `id`" },
        { status: 400 },
      );
    }

    await Projects.findByIdAndDelete(id);

    // bump dataVersionID
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
