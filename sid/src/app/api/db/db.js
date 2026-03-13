import mongoose from 'mongoose'

const connection = {}

async function connectDB() {
    if (connection.isConnected) return;

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        connection.isConnected = db.connections[0].readyState
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("DB Connection Error:", error.message)
    }
}

export default connectDB
