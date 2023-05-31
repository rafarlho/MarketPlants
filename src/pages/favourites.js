import React from 'react';
import TopNav from '../components/Navbar/TopNav';



//import {useNavigate} from 'react-router-dom';

const Favourites = () => {

    const userData = localStorage.getItem('users')
    let users = [];
    let plants = [];
    let favPlants = [];
    let favUsers = [];
    if(userData) {
        users = JSON.parse(userData) 
        console.log(users)
        let user = users.find((user) => user.loggedIn === true)
        favPlants = user.favPlants
        favUsers = user.favUsers
        
        
        
    }
    function removeFav(plant) {
        const updatedFavPlants = favPlants.filter((favPlant) => favPlant !== plant);
        // Update the favorite plants in the user object
        const updatedUsers = users.map((user) => {
          if (user.loggedIn) {
            return {
              ...user,
              favPlants: updatedFavPlants,
            };
          }
          return user;
        });
        // Update the localStorage with the updated user object
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        // Update the state
        favPlants = updatedFavPlants;
    }
    return(
        <div className='full_div2'>
            <TopNav />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '80%', margin: '0 auto', marginTop:'50px' }}>
                <div className = "product" style={{ border: '2px solid green', padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '45%' }}>
                    <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Your favorite products:</h3></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', margin: '0 auto', marginTop: '20px', flexWrap: 'wrap' }}>
                          {favPlants.map((plant, index) => (
                            <div key={index} className="product-wrapper" style={{ backgroundColor: '#f1f1f1', borderRadius: '10px', width: '48%', padding: '20px', boxSizing: 'border-box', marginBottom: '1rem' }}>
                              <div className="product" style={{ marginRight: '1rem' }}>
                                <img src={plant.photo} alt={plant.name} style={{ width: '50%', height: '100%', objectFit: 'cover' }} />
                              </div>
                              <div>
                                <div className="product-wrapper" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Name: {plant.name}</div>
                                <div className="product-wrapper" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Sold by: {plant.vendor}</div>
                                <div>
                                  <button style={{ width: '50%', marginTop: '10px', marginLeft: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} >Visit seller</button>
                                </div>
                                <div>
                                  <button style={{ width: '50%', marginTop: '10px', marginLeft: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} >Add to cart</button>
                                </div>
                                <div>
                                  <button style={{ width: '50%', marginTop: '10px', marginLeft: '10px', backgroundColor: '#ff0000', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={() => removeFav(plant)}>Remove from favorites</button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                </div>
                <div className = "product" style={{ border: '2px solid green', padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '45%' }}>
                    <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Your favorite sellers:</h3></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', margin: '0 auto', marginTop: '20px', flexWrap: 'wrap' }}>
                          {favUsers.map((plant, index) => (
                            <div key={index} className="product-wrapper" style={{ backgroundColor: '#f1f1f1', borderRadius: '10px', width: '48%', padding: '20px', boxSizing: 'border-box', marginBottom: '1rem' }}>
                              <div className="product" style={{ marginRight: '1rem' }}>
                                <img src={plant.photo} alt={plant.name} style={{ width: '50%', height: '100%', objectFit: 'cover' }} />
                              </div>
                              <div>
                                <div className="product-wrapper" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Name: {plant.name}</div>
                                <div className="product-wrapper" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Sold by: {plant.vendor}</div>
                                <div>
                                  <button style={{ width: '50%', marginTop: '10px', marginLeft: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} >Visit seller</button>
                                </div>
                                <div>
                                  <button style={{ width: '50%', marginTop: '10px', marginLeft: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} >Add to cart</button>
                                </div>
                                <div>
                                  <button style={{ width: '50%', marginTop: '10px', marginLeft: '10px', backgroundColor: '#ff0000', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={() => removeFav(plant)}>Remove from favorites</button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                </div>
            </div>
            <div style={{marginTop:'20%',width: '100%', height: '100px', backgroundColor: '#6B8E23'}}></div>
        </div>
    );
}

export default Favourites;