import mongoose from 'mongoose';
import Products from './productSchema.mjs';

const accessorySchema = new mongoose.Schema({
    typeOfAccessory: {
      type: String,
      required: true,
    }
});

const Accessory = Products.discriminator('Accessory', accessorySchema);

export default Accessory;