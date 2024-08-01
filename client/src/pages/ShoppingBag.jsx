// import dependencies
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// import data
import { productImg } from '../assets/img';

// import pages to route to if empty bag
import { Menswear, Womenswear, EverythingElse } from '../pages';

const ShoppingBag = () => {
    const [products, setProducts] = useState([]);
    const productsAPI = process.env.REACT_APP_PRODUCTS;

    // fetching data for test
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(productsAPI);
            if (!res.ok) {
                throw new Error('error fetching products');
            }
            const data = await res.json()
            // this should only initialize after res.json returns
                .then(() => {
                    setProducts(data);
                })
                .catch((err) => {
                    console.error('error fetching', err);
                })
            }

        fetchData();
        console.log(products);
    }, []);

  return (
    // this is what will render if the shopping cart is empty
    <div className="absolute text-[11px] font['Inter'] left-4 top-32 w-1/2">
      <p className="mb-6">
        Shopping Bag
      </p>
      {products.length === 0 ? (
      <div className="">
        <p className="mt-16 mb-4">
          Your shopping bag is empty.
        </p>
        <div className="flex flex-row gap-6">
          <NavLink to='/men'
            className='flex-grow'
          >
            <button className="border border-black bg-white text-black py-2 px-4 w-full">
              MENSWEAR SALE
            </button>
          </NavLink>
          <NavLink 
            to='/women'
            className='flex-grow'
          >
            <button className="border border-black bg-white text-black py-2 px-4 w-full">
              WOMENSWEAR SALE
            </button>
          </NavLink>
          <NavLink 
            to='/everything-else'
            className='flex-grow'
          >
            <button className="border border-black bg-white text-black py-2 px-4 w-full">
              EVERYTHING ELSE SALE
            </button>
          </NavLink>
        </div>
      </div>
    ) : (
        // otherwise, we'll render this
        <div>
          
        </div>
      )}
      {/* other items that a user can potentially buy*/}
      <div>
        {/* this might be a different component that ill import into the shopping */}
      </div>
    </div>
  )
}

export default ShoppingBag;