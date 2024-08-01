import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  designer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Designer', // reference to Designer model
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
    enum: [
      'clothing', 
      'accessory', 
      'bags', 
      'shoes'
    ]
  },
  gender: {
    type: String,
    required: true,
    enum: [
      'mens',
      'womens',
      'unisex',
    ]
  },
  overview: {
    type: String,
    required: true,
  },
  points: {
    type: [String],
    required: true,
  },
  color: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false,
  },
  sizes: {
    type: Map,
    of: Number,
    required: false,
  },
  sale: {
    type: mongoose.Decimal128,
    required: false
  }
}, {
  discriminatorKey: 'type',
  collection: 'products'
});

const Products = mongoose.model('Products', productSchema);

export default Products;