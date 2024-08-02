import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

// import necessary components
import SideMenu from '../components/LeftSideMenu.jsx';
import RightSideMenu from '../components/RightSideMenu.jsx';
import Stock from '../components/Stock.jsx';

const DesignerPage = () => {
  // Get the current designer from URL or location state
  const location = useLocation();
  const { designer: designerParam } = useParams();
  const { designer: designerFromLocation } = location.state || {};

  const [designer, setDesigner] = useState(designerParam || designerFromLocation || '');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the designer
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?designer=${designer}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (designer) {
      fetchProducts();
    }
  }, [designer]);

  return (
    <div>
      <SideMenu />
      <RightSideMenu />

      <Outlet />
    </div>
  );
};

export default DesignerPage;
