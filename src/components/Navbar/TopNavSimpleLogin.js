import '../../App.css';
import logo from '../../images/logo.png'
import React from 'react';

function TopNavSimple() {
  return (
      <div className="top_nav">
        <img src={logo} alt="MarketPlants" className="logo"></img> 
      </div>
  );
}
export default TopNavSimple;