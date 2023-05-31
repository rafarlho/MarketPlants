import React from "react";
import plant1 from "../images/plants/dplant1.png";
import plant2 from "../images/plants/monstera.png";
import { useNavigate } from 'react-router-dom';



function ShowPlants1() {

    const history = useNavigate();

  function handleClick() {
    history('/plantprofile');
  }
  function checkSeller() {
    history('/sellerprofile');
  }
  function cart() {
    history('/cart');
}

    const plants = [
        { name: "Dragon Plant", vendor: "Maria Florista", price : 20, imageUrl: plant1 },
        { name: "Monstera",vendor: "Estufas Martins", imageUrl: plant2 },
      ]

    return (
        <div style={{flex: 1,border: '5px solid #6B8E23'}}>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {plants.map((plant, index) => (
                <div key={index} style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <img src={plant.imageUrl} alt={plant.name} style={{ width: "50%", height: "50%", objectFit: "cover", marginBottom: "0.5rem" }} />
            <div style={{ fontWeight: "bold" }}>{plant.name}</div>
            <div style={{ fontStyle: "italic" }}>Vendedido por: {plant.vendor}</div>
            <div style={{ fontStyle: "italic" }}>Preço: {plant.price} €</div>
            <div>
              <button style={{ marginRight: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}onClick={handleClick}>Visit</button>
              <button style={{ marignLeft: '10px',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}onClick={cart}>Add to cart</button>
            </div>
            <div>
              <button style={{ marignLeft: '10px',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer',marginTop:'5px' }} onClick={checkSeller}>Visit seller</button>
            </div> 
          </div>
        ))}
      </div>
        </div>
    );
  }
  
  export default ShowPlants1;