import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ product, image }) => {
  const {
    designer,
    name,
    price,
  } = product;

  // arrow function to decode url to handle spaces in designer/product name
  const formatForUrl = (str) => str.replace(/\s+/g, '-').toLowerCase();

  // format designer and name for the URL
  const formattedDesigner = formatForUrl(designer.designer);
  const formattedName = formatForUrl(name);

  return (
    <div className="w-full">
      <NavLink 
        to={`/${formattedDesigner}/${formattedName}`}
        state={{ product }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full"
          />
        ) : null}
        <div className={`text-[11px] font-['Inter']`}>
          <p className='mt-2'>{designer.designer}</p>
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Product;