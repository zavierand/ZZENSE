import React from 'react';
import { Outlet } from 'react-router-dom';

// import necessary components
import SideMenu from '../components/LeftSideMenu.jsx';
import RightSideMenu from '../components/RightSideMenu.jsx';
import Stock from '../components/Stock.jsx';

const Menswear = () => {
  return (
    <div>
        <SideMenu />
        <RightSideMenu />
        <Stock gender='mens' />
        <Outlet />
    </div>
  )
}

export default Menswear;