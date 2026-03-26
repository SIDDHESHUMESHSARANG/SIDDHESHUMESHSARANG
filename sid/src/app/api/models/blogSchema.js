import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    image: { 
        type: String
    },
    title : {
        type: String, 
        required: true
    },
    caption: { 
        type: String, 
        required: true 
    },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;