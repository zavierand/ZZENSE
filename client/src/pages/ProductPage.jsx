import React from 'react';
import { useLocation } from 'react-router-dom';

import { productImg } from '../data';

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state || {}; 

  if (!product) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <p>Product not found</p>
      </div>
    );
  }

  const {
    name,
    designer,
    price,
    stock,
    overview,
    points, 
    color,
    country
  } = product;

  return (
    <div className={`absolute w-screen h-screen mx-auto px-4 py-8 font-['Inter']`}>
      <div className="flex flex-col flex items-center lg:flex-row lg:space-x-8">
        {/* Left Column (Details, Overview, and Points) */}
        <div className="flex-1 text-[11px] lg:w-1/3 lg:pr-8 text-[11px]">
          <p className="text-gray-700">{designer}</p>
          <p className="mb-2">{name}</p>
          <p className="mb-4">{overview}</p>
          <ul className="list-disc list-inside mb-4">
            {points.map((point, index) => (
              <li key={index} className="text-gray-700">{point}</li>
            ))}
          </ul>
          <p className="mb-4">
            Supplier color: {color}
          </p>
          <p className="mb-4">
            Made in {country}
          </p>
        </div>
        
        {/* Center Column (Product Image) */}
        <div className="mt-11 flex lg:w-1/3 flex items-center justify-center">
          <img
            src={productImg[name] || 'https://via.placeholder.com/400x600'}
            alt={name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Right Column (Price and Actions) */}
        <div className="flex-1 lg:w-1/3 text-[12px] font-['Inter'] lg:pl-8 flex flex-col items-center">
          <p className="mb-4 text-right"><span className='italic'>$</span>{price} USD</p>
          <div className="w-full">
            <select className="border border-black mb-4 w-full py-2 px-3">
              <option>SELECT A SIZE</option>
              <option>XS</option>
              <option>SM</option>
              <option>M</option>
              <option>L</option>
            </select>
            <button className="bg-black text-white py-2 px-4 w-full hover:bg-gray-800 transition">
              ADD TO BAG
            </button>
            <p className={stock < 5 ? 'text-gray-700 mt-2' : 'hidden'}>
              Less than 5 in stock ({stock})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
