// import dependencies
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/******************************************************************** 
we need to dynamically add designers to the side menu since there 
could be new designers that emerge onto the scene and decide to have 
their products sold through "SSENSE".

in doing that, we'll store the designers in an array and map through
and return a rendered menu of categories and designers.
********************************************************************/ 

const SideMenu = () => {
  const [designers, setDesigners] = useState([]);
  const designersAPI = 'http://localhost:8080/designers';

  // Fetch the designers from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(designersAPI);
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        console.log('Fetched data:', data); // Log the fetched data
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
  }, []);

  // Log designers array to see if it's being set
  useEffect(() => {
    console.log('Designers State:', designers);
  }, [designers]);

  return (
    <section>
        <div className='p-4'>
            <div>
            <NavLink 
                to='/categories'
                className={({ isActive }) => isActive ? `w-[88.84px] h-[11.87px] text-black text-[12px] font-bold font-['Inter'] underline` : `w-[88.84px] h-[11.87px] text-black text-[11px] font-bold font-['Inter'] hover:underline`}
            >
                ALL CATEGORIES
            </NavLink>
            <div>
            <div className="flex flex-col mt-2">
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
            </div>
            <div className='pt-8'>
            <NavLink
                to='/designers'
                className={({ isActive }) => isActive ? `w-[81.60px] h-[11.87px] text-black text-[12px] font-bold font-['Inter'] underline` : `w-[81.60px] h-[11.87px] text-black text-[11px] font-bold font-['Inter'] hover:underline`}
            >
                ALL DESIGNERS
            </NavLink>
            <div className="flex flex-col mt-2">
                {designers.map((designer, index) => (
                <NavLink
                    key={index}
                    to={`/designers/${designer.name}`}
                    className={({ isActive }) => isActive ? `block py-[2px] text-black text-[11px] font-normal font-['Inter'] underline` : `block py-[2px] text-black text-[11px] font-normal font-['Inter'] hover:underline`}
                >
                    {designer.name}
                </NavLink>
                ))}
            </div>
            </div>
        </div>
    </section>
  );
}

export default SideMenu;