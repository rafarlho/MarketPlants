import React from 'react';
import monstera from "../images/plants/orchid.jpeg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MiniOrchid = () => {
    const history = useNavigate();

    function plant() {
      history('/plantprofile');
    }
    function seller() {
      history('/sellerprofile');
    }
    function cart() {
        history('/cart');
    }

    const [isFavorite, setIsFavorite] = useState(true); // State to track if it's a favorite
        
    
    function removeFromFavorites() {
        setIsFavorite(false); // Update isFavorite state to false
      }

    if (!isFavorite) {
        return null; // If not a favorite, render nothing (it will disappear)
    }    
        

    return(
        <div  className = "product-wrapper" style={{ backgroundColor: '#f1f1f1', borderRadius: '10px', width: '40%', padding: '20px', boxSizing: 'border-box' }}>
            <div className = "product" style={{ marginRight: '1rem' }}>
                <img src={monstera} alt={monstera} style={{ width: '50%', height: '100%', objectFit: 'cover' }} onClick={plant}/>
            </div>
            <div>
                
                <div className = "product-wrapper" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Name:: Mini Orchid</div>
                <div className = "product-wrapper" style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>Sold by: Maria Florista</div>
                
                <div><button style={{ width: '50%',marginTop: '10px',marignLeft: '10px',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={seller}>Visit seller</button></div>
                <div><button style={{ width: '50%',marginTop: '10px',marignLeft: '10px',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}onClick={cart}>Add to cart</button></div>
                <div><button style={{ width: '50%',marginTop: '10px',marignLeft: '10px',backgroundColor: '#ff0000', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={removeFromFavorites}>Remove from favorites</button></div>
            

            </div>
        </div>
                
        );
};

export default MiniOrchid;