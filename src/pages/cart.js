import React from "react";
import TopNav from '../components/Navbar/TopNav';
import { useNavigate } from 'react-router-dom';

const Cart1 = () => {
  const navigate = useNavigate();

  const userData = localStorage.getItem('users');
  let users = [];
  let cartPlants = [];
  let totalPrice = 0

  let loggedInUser;
  if (userData) {
    users = JSON.parse(userData);
    const user = users.find((user) => user.loggedIn === true);
    loggedInUser = user;
    if (user) {

        cartPlants = user.cartPlants;
        console.log("added plant to cart" );
        console.log(user.cartPlants)
    } else {
        console.log("user not loggedIn");
    }
  } else {
    console.log("no users");
  }

  const removeFromCart = (plant) => {
    totalPrice -= plant.price 
    const updatedCartPlants = cartPlants.filter((p) => p.name !== plant.name    );
    // Update the cartPlants array in user data
    users.forEach((user) => {
      if (user.loggedIn) {
        user.cartPlants = updatedCartPlants;
    }
    localStorage.setItem('users', JSON.stringify(users));
    });
    };
    function buy() {
        if (loggedInUser.cartPlants.length !== 0) {
          for (const plant of loggedInUser.cartPlants) {
            const user = users.find((user) => user.email === plant.vendor);
      
            if (user) {
              const updatedCartPlants = user.plants.filter((p) => p.name !== plant.name);
              user.plants = updatedCartPlants;
              loggedInUser.boughtPlants.push(plant);
            } else {
              console.log(`User with email ${plant.vendor} not found.`);
            }
          }
      
          loggedInUser.cartPlants = [];
        }
      
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/main');
      }
      console.log("here");
      console.log(cartPlants);
      
      for (const plant of cartPlants) {
        console.log("Plant price");
        console.log(plant.price);
        totalPrice += parseFloat(plant.price);
      }
      
      console.log("totalPrice");
      console.log(totalPrice);
      
    return (
    <div className='full_div2'>
      <TopNav />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '80%', margin: '0 auto', marginTop: '50px' }}>
        <div style={{ border: '2px solid green', padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '100%' }}>
          <div><h3>Your Cart</h3></div>
          {cartPlants.map((plant, index) => (
            <div key={index} className="product_wrapper">
              <div style={{ border: '2px solid green', borderRadius: '10px', padding: '1rem', backgroundColor: 'rgba(107, 142, 35, 0.3)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <img src={plant.image} alt={plant.name} style={{ width: 'auto', height: 'auto', objectFit: 'cover', gridColumn: '1 / 3', gridRow: '1 / 4' }} />
                <div className="product_text" style={{ fontStyle: 'italic', marginBottom: '0.5rem', gridColumn: '2 / 3', gridRow: '1 / 4' }}>Name: {plant.name}</div>
                <div className="product_text" style={{ fontStyle: 'italic', marginBottom: '0.5rem', gridColumn: '2 / 3', gridRow: '2 / 4' }}>Sold by: {plant.vendor}</div>
                <div className="product_text" style={{ fontStyle: 'italic', marginBottom: '0.5rem', gridColumn: '2 / 3', gridRow: '3 / 4' }}>Price: {plant.price}</div>
                <div className='product_text'>
                  <label htmlFor="minPrice" style={{ gridColumn: '3 / 3' }}>Quantity:</label>
                  <input type="number" id="minPrice" placeholder="Quantity" style={{ padding: '5px', width: '100px', marginTop: '20px', gridColumn: '3 / 3' }} />
                </div>
                <div className='product_text'>
                  <button className="product_text" style={{ backgroundColor: '#ff6666', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px', gridColumn: '3 / 3', width: '100px' }} onClick={() => removeFromCart(plant)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className='product_wrapper'>
            <div className='product_text' style={{ marginTop: '50px' }}>
              <div style={{ marginBottom: '0px', marginRight: '10px', backgroundColor: '#ffffff', color: 'black', padding: '5px 20px', fontSize: '30px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Total: {totalPrice}$</div>
            </div>
          </div>
          <div className='product_wrapper'>
            <div className='product_text' style={{ marginTop: '50px' }}>
              <button style={{ backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '5px' }} onClick={buy}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '200px', width: '100%', height: '100px', backgroundColor: '#6B8E23' }}></div>
    </div>
  );
}

export default Cart1;
