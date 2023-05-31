import '../../App.css';
import logo from '../../images/logo.png';
import home from '../../images/home.png';
import favourite from '../../images/favourite.png';
import profile from '../../images/profile.png';
import cart from '../../images/cart.png';
import React from 'react';
import {Link } from "react-router-dom";



function TopNav() {
  return (
  <div className="top_nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <img src={logo} alt="MarketPlants"/>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/main" activeStyle>
        <img src={home} alt="Buy" style={{ marginRight: '20px' }} />
      </Link>
      <Link to="/favourites" >
        <img src={favourite} alt="Favourites" style={{ marginRight: '20px' }} />
      </Link>
      <Link to="/cart" activeStyle>
        <img src={cart} alt="Profile" style={{ marginRight: '20px' }} />
      </Link>
      <Link to="/profile" activeStyle>
        <img src={profile} alt="Profile" style={{ marginRight: '20px' }} />
      </Link>
    </div>
  </div>
  
  );
}
export default TopNav;