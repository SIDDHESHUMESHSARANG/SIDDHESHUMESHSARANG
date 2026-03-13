    import { NextResponse } from 'next/server'
    import connectDB from '../db/db'
    import Projects from '../models/projectsModel'

    export async function GET() {
        try {
            await connectDB()
            
            const projects = await Projects.find()
            
            return NextResponse.json(projects, { status: 200 })
        } catch (error) {
            return NextResponse.json(
                { error: 'Failed to fetch projects', details: error.message }, 
                { status: 500 }
            )
        }
    }

    export async function POST(req) {
        try {
            await connectDB()
            const { title, description, githubLink, liveLink, tags, tech } = await req.json()
            const project = await Projects.create({ title, description, githubLink, liveLink, tags, tech })
            return NextResponse.json(project, { status: 201 })
        } catch (error) {
            return NextResponse.json(
                { error: 'Failed to create project', details: error.message }, 
                { status: 500 }
            )
        }
    }

    export async function PUT(req) {
        try {
            await connectDB()
            const { id, title, description, githubLink, liveLink, tags, tech } = await req.json()
            const project = await Projects.findByIdAndUpdate(id, { title, description, githubLink, liveLink, tags, tech }, { new: true })
            return NextResponse.json(project, { status: 200 })
        } catch (error) {
            return NextResponse.json(
                { error: 'Failed to update project', details: error.message }, 
                { status: 500 }
            )
        }
    }

    export async function DELETE(req) {
        try {
            await connectDB()
            const { id } = await req.json()
            await Projects.findByIdAndDelete(id)
            return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 })
        } catch (error) {
            return NextResponse.json(
                { error: 'Failed to delete project', details: error.message }, 
                { status: 500 }
            )
        }
    }