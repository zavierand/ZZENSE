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
  }
}, {
  discriminatorKey: 'type',
  collection: 'products'
});

const Products = mongoose.model('Products', productSchema);

export default Products;

/**
 * 
db.products.insertOne({
  "name": "",
  "designer": "Acne",
  "price": 1234,
  "stock": 5,
  "type": "Clothing",
  "gender": "mens"
})

db.products.insertOne({
  "name": "Earrings",
  "designer": "Test Designer",
  "price": 1234,
  "stock": 5,
  "type": "Accessory",
  "gender": "mens"
})

db.products.insertOne({
  "name": "Test Bags",
  "designer": "Junya Watanabe",
  "price": 1234,
  "stock": 5,
  "type": "bags",
  "gender": "mens"
})

db.products.insertOne({
  "name": "Test Shoes",
  "designer": "Test Designer",
  "price": 1234,
  "stock": 5,
  "type": "shoes",
})



*/