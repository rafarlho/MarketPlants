import React from 'react';
import TopNavSimple from '../components/Navbar/TopNavSimple';
import { useNavigate } from 'react-router-dom';
import big_logo from '../images/marketplants-logo.png'

const Home = () => {
  const navigate = useNavigate();

    function login() {
      navigate('/login');
    }
    function register() {
      navigate('/sign-up');
    }
  //localStorage.clear();
  return (
	<div className='full_div'>
      <TopNavSimple />
      <center><img src={big_logo} alt="MarketPlants" className="big-logo" /></center>
      <center><h2>Welcome to your online biological marketplace!</h2></center>
      <center>
        <h2>Login or Register to access your account!</h2>
        <div>
          <div>
              <button style={{ width: 200,marginRight:10,backgroundColor: '#6B8E23', color: 'white', padding: '20px 60px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}   onClick={login}>Login </button>
              <button style={{ width: 200,marginRight:10,backgroundColor: '#6B8E23', color: 'white', padding: '20px 60px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}   onClick={register}>Register</button>
          </div>
        </div>
      </center>
      <div className='bottom_panel'>
      </div>
    </div>
	
);
};

export default Home;
