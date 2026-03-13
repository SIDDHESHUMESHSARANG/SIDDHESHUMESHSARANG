import mongoose from 'mongoose';

const certsSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    },

    issuedOn: { 
        type: String, 
        required: true 
    },

    issuedBy: { 
        type: String, 
        required: true 
    },

    grade: {
        type: String,
        required: true
    }
});

const Certs = mongoose.models.Certs || mongoose.model('Certs', certsSchema);
export default Certs;