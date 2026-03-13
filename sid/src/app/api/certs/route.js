import { NextResponse } from 'next/server'
import connectDB from '../db/db'
import Certs from '../models/certsModel'

export async function GET() {
    try {
        await connectDB()
        const certs = await Certs.find()
        return NextResponse.json(certs, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch certs', details: error.message }, 
            { status: 500 }
        )
    }
}

export async function POST(req) {
    try {
        await connectDB()
        const { title, status, issuedOn, issuedBy, grade } = await req.json()
        const cert = await Certs.create({ title, status, issuedOn, issuedBy, grade})
        return NextResponse.json(cert, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create cert', details: error.message }, 
            { status: 500 }
        )
    }
}

export async function PUT(req) {
    try {
        await connectDB()
        const { id, title, description, status, date } = await req.json()
        const cert = await Certs.findByIdAndUpdate(id, { title, description, status, date }, { new: true })
        return NextResponse.json(cert, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update cert', details: error.message }, 
            { status: 500 }
        )
    }
}

export async function DELETE(req) {
    try {
        await connectDB()
        const { id } = await req.json()
        await Certs.findByIdAndDelete(id)
        return NextResponse.json({ message: 'Cert deleted successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete cert', details: error.message }, 
            { status: 500 }
        )
    }
}