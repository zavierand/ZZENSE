// import dependencies
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// import algos
import { mergeSort } from '../algos';

/******************************************************************** 
we need to dynamically add designers to the side menu since there 
could be new designers that emerge onto the scene and decide to have 
their products sold through "SSENSE".

in doing that, we'll store the designers in an array and map through
and return a rendered menu of categories and designers.
********************************************************************/ 

const LeftSideMenu = () => {
  const [designers, setDesigners] = useState([]);
  const designersAPI = process.env.REACT_APP_DESIGNERS;

  // Fetch the designers from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(designersAPI);
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          setDesigners(data);
        } else {
          console.error('Data fetched is not an array:', data);
        }
      } catch (err) {
        console.error('Error fetching designers API', err);
      }
    };

    fetchData();
  }, [designersAPI]);

  mergeSort(designers, 0, designers.length - 1);

  return (
    <div className='w-32 absolute pt-24 pl-4 mt-2'>
    {/* left side menu */}
      <div>
      <NavLink 
          to='/categories'
          className={({ isActive }) => isActive ? `h-[11.87px] text-black text-[12px] font-bold font-['Inter'] underline` : `w-[88.84px] h-[11.87px] text-black text-[11px] font-bold font-['Inter'] hover:underline`}
      >
          ALL CATEGORIES
      </NavLink>
      <div>
      <div className="mt-3">
          <NavLink
              to=''
              className={({ isActive }) => !isActive ? `block py-[2px] text-black text-[11px] font-normal font-['Inter'] underline` : `block py-[2px] text-black text-[11px] font-normal font-['Inter'] hover:underline`}
          >
            ACCESSORIES
          </NavLink>
          <NavLink
              to=''
              className={({ isActive }) => !isActive ? `block py-[2px] text-black text-[11px] font-normal font-['Inter'] underline` : `block py-[2px] text-black text-[11px] font-normal font-['Inter'] hover:underline`}
          >
            BAGS
          </NavLink>
          <NavLink
              to=''
              className={({ isActive }) => !isActive ? `block py-[2px] text-black text-[11px] font-normal font-['Inter'] underline` : `block py-[2px] text-black text-[11px] font-normal font-['Inter'] hover:underline`}
          >
            CLOTHES
          </NavLink>
          <NavLink
              to=''
              className={({ isActive }) => !isActive ? `block py-[2px] text-black text-[11px] font-normal font-['Inter'] underline` : `block py-[2px] text-black text-[11px] font-normal font-['Inter'] hover:underline`}
          >
            SHOES
          </NavLink>
      </div>
      </div>
      <NavLink
          to='/designers'
          className={({ isActive }) => isActive ? `text-black text-[12px] font-bold font-['Inter'] underline` : `text-black text-[11px] font-bold font-['Inter'] hover:underline`}
      >
          ALL DESIGNERS
      </NavLink>
          {designers.map((designer, index) => (
          <NavLink
              key={index}
              to={`/designers/${designer.name}`}
              className={({ isActive }) => isActive ? `py-4 mt-2 text-black text-[11px] font-normal font-['Inter'] underline` : `block py-[2px] text-black text-[11px] font-normal font-['Inter'] hover:underline`}
          >
              {designer.name}
          </NavLink>
          ))}
      </div>
    </div>
  );
}

export default LeftSideMenu;