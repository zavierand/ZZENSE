import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ product, image }) => {
  const {
    designer,
    name,
    price,
    gender
  } = product;

  console.log('product designer:', product.designer);

  return (
    <div className="w-full">
      <NavLink 
        to={`/${designer.designer}/${name}`}
        state={{ product }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full"
        />
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