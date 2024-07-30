import mongoose from 'mongoose';

const designerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false
    }
});

const Designers = mongoose.model('Designer', designerSchema);

export default Designers;