import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { BagContext } from '../context/Bag.jsx';
import { productImg } from '../data';

const ProductPage = () => {
  const location = useLocation();
  const { bagProducts, addToBag } = useContext(BagContext);
  
  const { product: productFromLocation } = location.state || {};
  const { designer: designerParam, name: nameParam } = useParams();
  
  const [product, setProduct] = useState(productFromLocation || null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (!productFromLocation) {
      const formattedDesigner = designerParam.replace(/-/g, ' ').toUpperCase(); // Adjust based on your format
      const formattedName = nameParam.replace(/-/g, ' ').toUpperCase(); // Adjust based on your format
      
      const foundProduct = bagProducts.find(p => 
        p.designer.designer.toUpperCase() === formattedDesigner &&
        p.name.toUpperCase() === formattedName
      );
      
      setProduct(foundProduct || null);
    }
  }, [productFromLocation, designerParam, nameParam, bagProducts]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <p>Product not found</p>
      </div>
    );
  }

  console.log('selected size', selectedSize);

  const {
    name,
    designer,
    price,
    overview,
    points, 
    color,
    country
  } = product;

  return (
    <div className="absolute w-screen h-screen mx-auto px-4 py-2 font-['Inter']">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Left Column (Details, Overview, and Points) */}
        <div className="py-[300px] flex-1 lg:w-1/3 lg:pr-8 text-[11px]">
          <p>{designer.designer}</p>
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
        <div className="mt-11 flex lg:w-1/3 items-center justify-center">
          <img
            src={productImg[name] || 'https://via.placeholder.com/400x600'}
            alt={name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Right Column (Price and Actions) */}
        <div className="py-[300px] flex-1 lg:w-1 text-[12px] lg:pl-8 flex flex-col h-1/2">
          <div className="flex justify-between items-center mb-4">
            <p className="text-right"><span className='italic'>$</span>{price} USD</p>
          </div>
          <div className="w-full text-[10px]">
            {product.type === 'clothing' ? (
              <select 
                className="border border-black mb-3 w-full py-2 px-3"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option disabled>
                  SELECT A SIZE
                </option>
                {Object.entries(product.sizes).map(([size, stock], index) => (
                  <option 
                    key={index} 
                    disabled={stock === 0}
                  >
                    {size} - {stock === 0 ? 'Sold Out' : `Only ${stock} remaining`}
                  </option>
                ))}
              </select>
            ) : null}
            <button 
              className="bg-black font-bold text-white py-3 px-2 w-2/3 hover:bg-gray-800 transition"
              onClick={() => addToBag(product, selectedSize)}
            >
              ADD TO BAG
            </button>
            <button className="bg-white font-bold text-black py-3 px-2 w-1/3 transition">
              ADD TO WISHLIST
            </button>
            <p className='py-2 text-gray-500 text-[11px]'>
              United States : Free shipping on orders over $300 USD and free returns on all orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;