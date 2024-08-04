import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// we will probably the state of the shopping cart from the shopping cart component
import { BagContext } from '../context/Bag.jsx';

const Navbar = () => {
    const { bagProducts } = useContext(BagContext);

  return (
    <section className="fixed bg-transparent w-full h-12 p-4 z-50">
      <nav className='flex items-center justify-between text-[12px]'>
        <div className='flex space-x-6'>
          <NavLink
            to='/men'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] hover:underline`}
          >
            MENSWEAR
          </NavLink>
          <NavLink
            to='/women'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] hover:underline`}
          >
            WOMENSWEAR
          </NavLink>
          <NavLink
            to='/everything-else'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] hover:underline`}
          >
            EVERYTHING ELSE
          </NavLink>
          <NavLink
            to='/sale'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] hover:underline`}
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
          <p
            className={`hover:underline cursor-not-allowed`}
          >
            LOGIN
          </p>
          <p
            to='/wishlist'
            className={`hover:underline cursor-not-allowed`}
          >
            WISHLIST
          </p>
          <NavLink
            to='/shopping-bag'
            className={({ isActive }) => isActive ? `font-['Inter'] text-black underline` : `font-['Inter'] hover:underline`}
          >
            SHOPPING BAG ({bagProducts.length})
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;