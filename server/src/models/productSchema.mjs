import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designer: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sizes: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true
    }
});

const Products = mongoose.model('Product', productSchema);

export default Products;