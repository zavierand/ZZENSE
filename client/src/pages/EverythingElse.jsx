// import dependencies
import React from 'react';

// import componenets
import LeftSideMenu from '../components/LeftSideMenu.jsx';
import RightSideMenu from '../components/RightSideMenu.jsx';
import Stock from '../components/Stock.jsx';

const EverythingElse = () => {
  return (
    <div>
      <LeftSideMenu />
      <RightSideMenu />
      <Stock gender='unisex' />
    </div>
  )
}

export default EverythingElse;