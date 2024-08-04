import React from 'react';
import { Outlet  } from 'react-router-dom';

// import necessary components
import SideMenu from '../components/LeftSideMenu.jsx';
import RightSideMenu from '../components/RightSideMenu'

const DesignerPage = () => {
  // Get the current designer from URL or location state


  return (
    <div>
      <SideMenu />
      <RightSideMenu />

      <Outlet />
    </div>
  );
};

export default DesignerPage;
