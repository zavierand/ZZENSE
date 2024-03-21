const mongoose = require('mongoose');

const user = new mongoose.Schema(
{
    user: // a reference to a user object
    password: // a user's password which will be used for authentication
    shoppingCart: [{
        productID: ,
        quantity:
    }]  // using an array that will render the list on screen if users add 
        // or delete products from their shopping cart
});

const product = new mongoose.Schema(
{
    brand: ,// brand/designer name
    type:   ,// type of clothing item
    gender: ,// to decide mens or womenswear - to be displayed based on gender
    price:  ,// price of item
    sku:    // id for the item {normally would be provided by the retailer}
});
