import React from 'react';
import logo from "../images/jose.jpg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const JoseFavourite = () => {

        const history = useNavigate();
        const [isFavorite, setIsFavorite] = useState(true); // State to track if it's a favorite
        
        function visitSeller() {
          history('/sellerprofile');
        } 
    
        function removeFromFavorites() {
            setIsFavorite(false); // Update isFavorite state to false
          }
    
        if (!isFavorite) {
            return null; // If not a favorite, render nothing (it will disappear)
        }    
        
        return(
            <div  className = "product-wrapper" style={{ backgroundColor: '#f1f1f1', borderRadius: '10px', width: '40%', padding: '20px', boxSizing: 'border-box' }}>
            <div style={{ marginRight: '1rem' }}>
                <img src={logo} alt="Maria Florista" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                </div>
            <div>
            <div style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Nome: José Fernandes</div>
            
            
            <div><button style={{ width:'50%',marginTop:'10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={visitSeller}>Visit</button></div>
            <div>
                <button style={{  width:'50%',marginTop:'10px',backgroundColor: '#ff0000', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}onClick={removeFromFavorites}>Remove from favorites</button>
            </div>
            
        </div>
    </div>
        );
};

export default JoseFavourite;