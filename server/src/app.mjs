// import dependencies
import express from 'express'
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import models
import Products from './models/productSchema.mjs';
import Designers from './models/designerSchema.mjs';
import User from './models/userSchema.mjs';

// import our environment variables
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// create port for server to run
const PORT = process.env.PORT;
const DB = process.env.MONGO_URI;

// connect to db
mongoose.connect(DB)
    // since connect returns a promise, we can chain a .then()
    .then(() => {
        console.log('Connected to ZZENSE DB');
    })
    .catch((err) => {
        console.error('Error connecting to ZZENSE DB', err);
    });

// test get method
app.get('/', (req, res) => {
    // log request methods
    console.log(req.body, req.method);
    try {
        res.json({
            message: 'HELLO FROM ZZENSE'
        });
    } catch(err) {
        console.error('Error fetching /', err);
    }
    
});

app.get('/products', async (req, res) => {
    // Log request method and body
    console.log('GET request to /products', req.body, req.method);
  
    try {
      // Fetch all products from the database
      const products = await Products.find().populate('designer');
  
      // Send the products as a JSON response
      res.json(products);
  
      // Log the fetched products
      console.log(products);
    } catch (err) {
      // Log and send the error response
      console.error('Error fetching /products', err);
      res.status(500).json({ message: 'Error fetching products' });
    }
  });

// this will probably be a route method because I want to pos
app.get('/users', async (req, res) => {
    try {
        console.log('GET request to /users');
        console.log(req.body, req.method);
        const users = await User.find();
        res.json(users);
    } catch(err) {
        console.error('Error fetching /users', err);
    }
});

// designers route for menu
app.get('/designers', async (req, res) => {
    try {
        console.log('/GET request to /designers');
        console.log(req.body, req.method);
        const designers = await Designers.find();
        res.json(designers);
        console.log(designers);
    } catch(err) {
        console.error('Error fetching /designers', err);
    }

});

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
