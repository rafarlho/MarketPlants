import React from "react";
import TopNav from "../components/Navbar/TopNav";
import Comments from "../components/Comment"
import { useNavigate } from 'react-router-dom';
import ShowPlants from "../components/ShowPlants";
const PlantProfile = () => {

    const history = useNavigate();

    function handleClick() {
        history('/sellerprofile');
    }
    function favoritos() {
        history('/favourites');
    }
    function cart() {
        history('/cart');
    }
    let plant = localStorage.getItem('plant');
    console.log("logging plant");
    console.log(plant);
    const parsedPlant = JSON.parse(plant);
    console.log(parsedPlant);
    console.log(parsedPlant.name);
    const userData = localStorage.getItem('users');
    let users = [];
    users = JSON.parse(userData);
    let sellerInfo = users.find((user) => user.email === parsedPlant.vendor);
    console.log("aqui ha vendedor!!");
    console.log(sellerInfo);

    return(

        <div className="full_div2">

            <TopNav></TopNav>
            
            <div style={{ marginBottom:'20px',marginTop:'20px' ,border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '80%' , marginLeft:'10%',marginRight:'10%'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', margin: '0 auto' }}>
                    <div style={{ border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '30%',backgroundColor: 'rgba(107, 142, 35, 0.3)' ,height:'300px'}}>  
                        <center>
                        <img src={parsedPlant.photo} alt={parsedPlant.name} style={{ maxWidth: '300px', maxHeight: '300px', width: 'auto', height: 'auto', objectFit: 'cover' }} />
                        </center>
                    </div>
                    <div style={{ marginLeft:'10px',border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '80%',height:'300px' }}>   
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', margin: '0 auto' }}>   
                            <div>
                                <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Commun Name : {parsedPlant.name}</h3></div>
                                <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Cientific Name: {parsedPlant.scientificName}</h3></div>
                                <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Kingdom/Family: Plantae/Asparagaceae</h3></div>
                                <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Plant Categories: Indoor, Flower, Folliage Plant</h3></div>
                                <div style={{marginTop:'0px'}}>
                                    <h3 style={{ display: 'inline-block', marginRight: '10px' }}>Rating:</h3>
                                    <label htmlFor="star-1" style={{ display: 'inline-block' }}>1</label>
                                    <input type="radio" id="star-1" name="rating" value="1" style={{ display: 'inline-block' }} />
                                    <input type="radio" id="star-2" name="rating" value="2" style={{ display: 'inline-block' }} />
                                    <input type="radio" id="star-3" name="rating" value="3" style={{ display: 'inline-block' }} />
                                    <input type="radio" id="star-4" name="rating" value="4" style={{ display: 'inline-block' }} />
                                    <input type="radio" id="star-5" name="rating" value="5" style={{ display: 'inline-block' }} />
                                    <label htmlFor="star-5" style={{ display: 'inline-block' }}>5</label>
                                </div>
                            </div>
                            <div> 
                                <div>
                                <div style={{ fontFamily: 'Open Sans, sans-serif',marginRight: '20px' ,border: '2px solid green',padding: '20px', borderRadius: '10px',backgroundColor: 'rgba(107, 142, 35, 0.3)'}}>
                                    <h3>Only:</h3><center>

                                    <h1 style={{ fontFamily: 'Open Sans, sans-serif',fontSize: '35px', fontWeight: 'bold', marginBottom: '10px'}}>{parsedPlant.price}</h1>
                                    </center>
                                    <h3>{parsedPlant.shipping}</h3>
                                    
                                    <button style={{ fontFamily: 'Open Sans, sans-serif',marginRight: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer',marginTop:'5px' } } onClick={cart}>Add to cart</button>
                                
                                    </div>
                                </div>
                            </div>
                            <div style={{height:'100%'}}>
                                <center>
                                    <div style={{marginTop:'20%'}}>
                                        <button style={{ backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop:'10px' } } onClick={handleClick}>Visit Seller</button>
                                    </div>
                                    <div style={{marginTop:'10%'}}>
                                        <button style={{ backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop:'10px' } } onClick={favoritos}>Add to favorites</button>
                                    </div>
                                </center>
                            </div>
                         </div>
                    </div>
                </div>
                    <div style={{marginTop:'20px',border: '2px solid green', borderRadius: '10px', padding:'20px'}}>
                        <div style={{ fontFamily: 'Open Sans, sans-serif',marginTop:'10px'}}><h2>Description:</h2></div>
                        <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>{parsedPlant.description}</h3></div>
                    </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', margin: '0 auto' }}>
                    <div style={{marginTop:'20px',border: '2px solid green', borderRadius: '10px',padding:'20px'}}>
                        <div style={{ fontFamily: 'Open Sans, sans-serif',marginTop:'10px'}}><h2>Additional Information:</h2></div>
                            <div>
                                <h4 style={{fontFamily: 'Open Sans, sans-serif'}}>Light Requirements: {parsedPlant.lightRequirements}</h4>
                                <h4 style={{fontFamily: 'Open Sans, sans-serif'}}>Watering: {parsedPlant.watering}</h4>
                                <h4 style={{fontFamily: 'Open Sans, sans-serif'}}>Temperature: {parsedPlant.temperature}</h4>
                                <h4 style={{fontFamily: 'Open Sans, sans-serif'}}>Humidity: {parsedPlant.humidity}</h4>
                                <h4 style={{fontFamily: 'Open Sans, sans-serif'}}>Growth Rate: {parsedPlant.growthRate}</h4>
                            </div>
                        </div>
                    <div style={{marginLeft:'10px',width:'55%',marginTop:'20px',border: '2px solid green', borderRadius: '10px',padding:'20px'}}>
                        <Comments />
                    </div>
                    </div>
                    <div>
                    <div style={{ marginTop:'20px', border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '100%' }}>
                        <div style={{ fontFamily: 'Open Sans, sans-serif',marginTop:'10px'}}><h2>Stores Best Sellers:</h2></div>

                        <ShowPlants filterVendorName={sellerInfo.email} />
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', height: '100px', backgroundColor: '#6B8E23'}}></div>
                
            </div>
    );
}
export default PlantProfile;