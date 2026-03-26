import { NextResponse } from 'next/server'
import connectDB from '../db/db'
import Blog from '../models/blogSchema'

export async function GET() {
    try {
        await connectDB()
        const blog = await Blog.find().sort({createdAt: -1})
        return NextResponse.json(blog, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch blog', details: error.message }, 
            { status: 500 }
        )
    }
}

export async function POST(req) {
    try {
        await connectDB()
        const { image, title, caption } = await req.json()
        const blog = await Blog.create({ image, title, caption })
        return NextResponse.json(blog, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create blog', details: error.message }, 
            { status: 500 }
        )
    }
}

export async function PUT(req) {
    try {
        await connectDB()
        const { _id, image, title, caption } = await req.json()
        const blog = await Blog.findByIdAndUpdate(_id, { image, title, caption }, { new: true })
        return NextResponse.json(blog, { status: 200 })
    } catch (error) {   
        return NextResponse.json(
            { error: 'Failed to update blog', details: error.message }, 
            { status: 500 }
        )
    }
}

export async function DELETE(req) {
    try {
        await connectDB()
        const { id } = await req.json()
        await Blog.findByIdAndDelete(id)
        return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete blog', details: error.message }, 
            { status: 500 }
        )
    }
}