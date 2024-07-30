import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// we will probably the state of the shopping cart from the shopping cart component

const Navbar = () => {
    const [itemCount, setItemCount] = useState(0);

    
  return (
    <section className="fixed bg-transparent w-full h-12 p-4 z-10">
      <nav className='flex items-center justify-between text-[12px]'>
        <div className='flex space-x-6'>
          <NavLink
            to='/menswear'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] text-gray-600 hover:underline`}
          >
            MENSWEAR
          </NavLink>
          <NavLink
            to='/womenswear'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] text-gray-600 hover:underline`}
          >
            WOMENSWEAR
          </NavLink>
          <NavLink
            to='/everything-else'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] text-gray-600 hover:underline`}
          >
            EVERYTHING ELSE
          </NavLink>
          <NavLink
            to='/sale'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] text-gray-600 hover:underline`}
          >
            SALE
          </NavLink>
        </div>

        {/* Center link */}
        <div className='absolute text-2xl left-1/2 transform -translate-x-1/2'>
          <NavLink
            to='/'
            className={`font-['Inter'] text-black`}
          >
            ZZENSE
          </NavLink>
        </div>

        {/* Right links */}
        <div className='flex space-x-6'>
          <NavLink
            to='/login'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] text-gray-600 hover:underline`}
          >
            LOGIN
          </NavLink>
          <NavLink
            to='/wishlist'
            className={`hover:underline cursor-not-allowed`}
          >
            WISHLIST
          </NavLink>
          <NavLink
            to='/shopping-cart'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] text-gray-600 hover:underline`}
          >
            SHOPPING CART ({itemCount})
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;