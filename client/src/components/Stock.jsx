import React, { useState, useEffect } from 'react';
import Product from './Product.jsx';

// import data
import { productImg } from '../data/index.js';

/******************************************************************
This component renders the list of stock for each page, making it
reusable over different pages. It takes the gender prop to filter 
products by gender.
******************************************************************/

const Stock = ({ gender }) => {
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

  // This should return the filtered products based on mens/womens
  const filterProducts = productsList.filter((product) => product.gender === gender);

  console.log('Filtered Products', filterProducts);

  return (
    <div className='pt-24 px-64 grid grid-cols-4 flex items-center justify-center'>
      {filterProducts.map((product) => {
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
};

export default Stock;
