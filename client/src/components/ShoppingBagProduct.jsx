import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// this will render a single product in the shopping bag
// reason being i don't want to modify the original product 
// component to render specifically on the menswear, womenswear,
// etc.

// import context
import { BagContext } from '../context/Bag.jsx';

const ShoppingBagProduct = ({ product, img }) => {
  // remove from bag
  const { removeFromBag, clearBag } = useContext(BagContext);

  const handleClick = () => {
    if (product.length === 1) {
        clearBag();
    } else {
        removeFromBag(product);
    }
  };

  console.log('selected size:', product.selectedSize);

  // format the URL parts for routing
  const formatForUrl = (str) => str.replace(/\s+/g, '-').toLowerCase();
  const formattedDesigner = formatForUrl(product.designer.designer);
  const formattedName = formatForUrl(product.name);

  return (
    <div className="flex items-center gap-4 mb-4 font-['Inter']">
      <NavLink to={`/${formattedDesigner}/${formattedName}`}>
        <img 
          src={img || 'https://via.placeholder.com/100'}
          alt={product.name}
          className='w-24'
        />
      </NavLink>
      <div className="flex flex-col">
        <NavLink to={`/${formattedDesigner}/${formattedName}`}>
          <p>{product.designer.designer}</p>
          <p>{product.name}</p>
          <p>Size: {product.selectedSize}</p>
          <p className="absolute right-0">${product.price}.00 USD</p>
        </NavLink>
        <button
          className="absolute pt-[65px] right-0 font-bold text-[10px] underline"
          onClick={handleClick}
        >
           Remove
        </button>
      </div>
      <hr className='border-slate-500' />
    </div>
  );
}

export default ShoppingBagProduct;