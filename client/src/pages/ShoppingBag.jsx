import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// import context to display
import { BagContext } from '../context/Bag.jsx';

// import components
import ShoppingBagProduct from '../components/ShoppingBagProduct.jsx';
import ShoppingBagStock from '../components/ShoppingBagStock.jsx';

// import data
import { productImg } from '../data';

const ShoppingBag = () => {
  // using context hook to display global state of shopping bag here
  const { bagProducts } = useContext(BagContext);

  console.log('Current Shopping Bag', bagProducts);

  // arrow function to decode URL to handle spaces in designer/product name
  const formatForUrl = (str) => str.replace(/\s+/g, '-').toLowerCase();

  // format designer and name for each product in the bag
  const formattedProducts = bagProducts.map(product => {
    const formattedDesigner = product.designer?.designer ? formatForUrl(product.designer.designer) : 'unknown-designer';
    const formattedName = product.name ? formatForUrl(product.name) : 'unknown-product';
    
    return {
      ...product,
      formattedDesigner,
      formattedName,
    };
  });

  const calculateTotal = () => {
    let total = 0;
    bagProducts.forEach(product => {
      total += product.price * product.quantity; // Assuming quantity is available
    });
    return total.toFixed(2); // Return total with two decimal places
  };

  return (
    <div className="absolute text-[11px] font['Inter'] w-screen">
      {bagProducts.length === 0 ? (
        <div className="absolute pt-32 pl-4 w-2/3 z-10">
          <p className="mb-6">
            Shopping Bag
          </p>
          <p className="mt-16 mb-4">
            Your shopping bag is empty.
          </p>
          <div className="flex flex-row gap-6">
            <NavLink to='/men' className='flex-grow'>
              <button className="border border-black bg-white text-black py-2 px-4 w-full">
                MENSWEAR SALE
              </button>
            </NavLink>
            <NavLink to='/women' className='flex-grow'>
              <button className="border border-black bg-white text-black py-2 px-4 w-full">
                WOMENSWEAR SALE
              </button>
            </NavLink>
            <NavLink to='/everything-else' className='flex-grow'>
              <button className="border border-black bg-white text-black py-2 px-4 w-full">
                EVERYTHING ELSE SALE
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
          <div className='absolute mt-20 ml-52 lg:w-[800px] z-10'>
            <p className="">Shopping Bag</p>
            <div className='flex mt-2'>
              <p className='text-slate-400 w-2/3'>ITEM</p>
              <p className='text-slate-400 w-1/3 text-right'>TOTAL</p>
            </div>
            <hr className='border-slate-400 my-2'/>
            <div className='mt-4'>
              {formattedProducts.map((bagProduct) => (
                <ShoppingBagProduct 
                key={bagProduct.name}
                product={bagProduct}
                img={productImg[bagProduct.name]}
                />
                ))}
              <hr className='border-slate-400'/>
              <div className="flex justify-between mt-4">
                <p className='pl-24'>Total:</p>
                <p><span className='italic'>$</span>{calculateTotal()} USD</p>
              </div>
            </div>
          </div>
          <div className='absolute right-0 pt-32 w-96'>
            <p className='text-[11px]'>
              Checkout as Guest
            </p>
            <p className='mt-2/1'>
              Are you a member? <span className='underline hover:cursor-not-allowed'>Login</span>
            </p>
            <NavLink>
              <button className='bg-black text-white py-2 px-16 mt-4'>
                PROCEED TO CHECKOUT
              </button>
            </NavLink>
          </div>
        </div>
      )}
      {bagProducts.length === 0 ? (
        <div className='pl-4 pt-[420px] w-full'>
          <p className=''>
            CHECKOUT THESE ITEMS
          </p>
          <ShoppingBagStock />
        </div>
      ) : null
      }
    </div>
  );
}

export default ShoppingBag;