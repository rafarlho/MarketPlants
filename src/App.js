import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Main from './pages/main';
import AddPlant from './pages/addplant';
import SignUp from './pages/signup';

import Favourites from './pages/favourites';
import Cart from './pages/cart';
import Login from './pages/login';
import SellerProfile from './pages/sellerprofile';
import PlantProfile from './pages/plantprofile';
import Profile from './pages/profile';
import Buy from './pages/buy';

function App() {
return (
	<Router>
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/main' element={<Main/>} />
		
		<Route path='/addplant' element={<AddPlant/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/login' element={<Login/>} />
		<Route path='/favourites' element={<Favourites/>}/>
		<Route path='/cart' element={<Cart/>}/>
		<Route path='/sellerprofile' element={<SellerProfile />}/>
		<Route path='/plantprofile' element={<PlantProfile />}/> 
		<Route path='/profile' element={<Profile />}/>
		<Route path='/buy' element={<Buy/>}/>
	</Routes>
	</Router>
);
}

export default App;
