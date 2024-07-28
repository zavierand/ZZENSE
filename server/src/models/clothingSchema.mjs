import mongoose from 'mongoose';
import Products from './productSchema.mjs';

const clothingSchema = new mongoose.Schema({
    sizes: {
      type: [Number],
      required: true,
    }
});

const Clothing = Products.discriminator('Clothing', clothingSchema);

export default Clothing;