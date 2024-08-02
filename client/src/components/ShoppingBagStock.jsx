import React, { useState, useEffect } from 'react';

import Product from './Product.jsx'

import { productImg } from '../data';

const ShoppingBagStock = () => {
    const [productsList, setProductsList] = useState([]);
    const productsAPI = process.env.REACT_APP_PRODUCTS;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(productsAPI);
          if (!res.ok) {
            throw new Error('Error fetching products');
          }
          const data = await res.json();
          setProductsList(data);
        } catch (err) {
          console.error(err);
        }
      };
  
      // call fetch data
      fetchData();
    }, [productsAPI]);
  
    return (
      <div className='pt-4 px-2 grid grid-cols-6 gap-3 flex items-center justify-center'>
        {productsList.map((product) => {
          const imageUrl = productImg[product.name]; // Assuming productImg keys are product names
          return (
            <Product 
              key={product.name} 
              product={product}
              image={imageUrl || 'https://via.placeholder.com/175x320'} // Use placeholder if image not found
            />
          );
        })}
      </div>
    );
}

export default ShoppingBagStock