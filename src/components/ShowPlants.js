import React from "react";
import { useNavigate } from 'react-router-dom';
console.log("showPlants!!")
const ShowPlants = ({ filterPlantName, filterVendorName }) =>{

  const history = useNavigate();





  const userData = localStorage.getItem('users')
  let users = [];
  let plants = [];
  let cartPlants = []

  users = JSON.parse(userData);
  let loggedInUser = users.find((user) => user.loggedIn === true);

  if(users) {

    users.forEach((user) => {

      if(user.plants) {
        user.plants.forEach((plant) => {
        plants.push(plant);
        
        });
      }
    });
  }

  function favourites(plant) {
    console.log("a planta")
    console.log(plant)

    loggedInUser.favPlants.push(plant)
    console.log("o user") 
    console.log(loggedInUser)
    localStorage.setItem('users', JSON.stringify(users));
    //history('/favourites');
  }
  function checkSeller(vendor) {
    localStorage.setItem('vendor', JSON.stringify(vendor));

    history('/sellerprofile');
  }

  function check(planta) {
    localStorage.setItem('plant', JSON.stringify(planta));

    history('/plantprofile');
  }

  function cart(plant) {
    console.log("a planta")
    console.log(plant)
    loggedInUser.cartPlants.push(plant)
    console.log("o user") 
    console.log(loggedInUser)
    localStorage.setItem('users', JSON.stringify(users));
    history('/cart');
  }




const filteredPlants = plants.filter((plant) => {
  const matchesName = filterPlantName ? plant.name.toLowerCase().includes(filterPlantName.toLowerCase()) : true;
  const matchesVendor = filterVendorName ? plant.vendor === filterVendorName : true;
  return matchesName && matchesVendor;
});


      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: '10px' }}>
          {filteredPlants.map((plant, index) => (
  <div className="product" key={index} style={{ border: '2px solid green', borderRadius: '10px', padding: "1rem", backgroundColor: 'rgba(107, 142, 35, 0.3)' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginLeft:'25%',marginBottom:'10px',width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={plant.photo} alt={plant.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onClick={() => check(plant)}/>
      </div>
    </div>
    <div style={{ marginLeft: '1rem', width: '80%', border: '2px solid green', padding: '20px', borderRadius: '10px' }}>
      <div className="product-text" style={{ fontStyle: "italic", fontSize: '20px' }}>Common name: {plant.name}</div>
      <div className="product-text" style={{ fontStyle: "italic", fontSize: '20px' }}>Sold by: {plant.vendor}</div> 
      <div className="product-text" style={{ fontStyle: "italic", fontSize: '20px' }}>Price: {plant.price} €</div>
      <div className="product-text" style={{ fontStyle: "italic", fontSize: '20px' }}>Rating: {plant.rating} / 5</div>
      <div className="product-text" style={{ fontStyle: "italic", fontSize: '20px' }}>Store Rating: {} / 5</div>
    </div>
    <center>
      <div style={{ marginTop: '20px',width:'100%' }}>
        <button className="product-wrapper" style={{ marginRight: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '5px' }} onClick={() => cart(plant)}>Add to cart</button>
        <button className="product-wrapper" style={{ marginRight: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '5px' }} onClick={() => favourites(plant)}>Add to favourites</button>
        <button className="product-wrapper" style={{ marginRight: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '5px' }} onClick={() => checkSeller(plant.vendor)}>Visit seller</button>
      </div>
    </center>
  </div>
))}
        </div>
       );
      
      
          
          }
  
  
  export default ShowPlants;