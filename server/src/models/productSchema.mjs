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
  stock: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['clothing', 'accessory']
  }
}, {
  discriminatorKey: 'type',
  collection: 'products'
});

const Products = mongoose.model('Product', productSchema);

export default Products;
