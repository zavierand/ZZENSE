import mongoose from 'mongoose';

const designerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Designers = mongoose.model('Designer', designerSchema);

export default Designers;