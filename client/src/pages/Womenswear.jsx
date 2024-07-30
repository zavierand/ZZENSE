import React from 'react'

// import components
import LeftSideMenu from '../components/LeftSideMenu.jsx';
import RightSideMenu from '../components/RightSideMenu.jsx';
import Stock from '../components/Stock.jsx';

const Womenswear = () => {
  return (
    <div>
      <LeftSideMenu />
      <RightSideMenu />
      <Stock gender='womens'/>
    </div>
  )
}

export default Womenswear