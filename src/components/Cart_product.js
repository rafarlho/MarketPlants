import React from 'react';
import monstera from "../images/plants/monstera.png";
import dragon from "../images/plants/dplant1.png";
import pearl from "../images/plants/pearlstrings.png";
import oak from "../images/plants/image 5.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




const Cart_product = () => {
    const history = useNavigate();
    const [isFavorite, setIsFavorite] = useState(true); // State to track if it's a favorite
    function removeFromFavorites() {
        setIsFavorite(false); // Update isFavorite state to false
      }
    
    if (!isFavorite) {
        return null; // If not a favorite, render nothing (it will disappear)
    } 
    
    function buy() {
        history('/buy');
      }
      

    return(
        <div>

            <div className="product_wrapper">
            <div style={{ border: '2px solid green', borderRadius: '10px', padding: '1rem', backgroundColor: 'rgba(107, 142, 35, 0.3)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <img src={pearl} alt={pearl} style={{ width: 'auto', height: 'auto', objectFit: 'cover', gridColumn: '1 / 3',gridRow: '1 / 4' }} />
                <div className="product_text" style={{ fontStyle: 'italic', marginBottom: '0.5rem', gridColumn: '2 / 3', gridRow: '1 / 4' }}>Name: Pearl of Stings</div>
                <div className="product_text" style={{ fontStyle: 'italic', marginBottom: '0.5rem', gridColumn: '2 / 3' , gridRow: '2 / 4'}}>Sold by: Continente</div>
                <div className="product_text" style={{ fontStyle: 'italic', marginBottom: '0.5rem', gridColumn: '2 / 3' , gridRow: '3 / 4'}}>Price:</div>
                <div className='product_text'>
                <label htmlFor="minPrice" style={{ gridColumn: '3 / 3'}}>Quantity:</label>
                <input type="number" id="minPrice" placeholder="Quantity" style={{ padding: '5px', width: '100px', marginTop: '20px', gridColumn: '3 / 3' }} />
                </div>
                <div className='product_text' >
                <button className="product_text" style={{ backgroundColor: '#ff6666', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px', gridColumn: '3 / 3', width: '100px' }}onClick={removeFromFavorites}>Remove</button>
                </div>
            </div>
            </div>

            </div> 
                
        );
};

export default Cart_product;