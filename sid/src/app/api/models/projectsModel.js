import mongoose from 'mongoose'

const projectsSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    githubLink: { 
        type: String, 
        required: true 
    },
    liveLink: { 
        type: String, 
        required: true 
    },
    tags: { 
        type: [String], 
        required: true 
    },
    tech: { 
        type: String, 
        required: true 
    },
});

const Projects = mongoose.models.Projects || mongoose.model('Projects', projectsSchema);

export default Projects;
