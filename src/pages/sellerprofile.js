import React, {useState} from 'react';
import TopNav from '../components/Navbar/TopNav';
import logo from "../images/MariaFloristaLogo.jpg";
import ShowPlants from '../components/ShowPlants';
import Comments from "../components/Comment"

const SellerProfile = () =>{
    const handleRating = () => {
        const rating = prompt('Please enter a rating (0-5)');
        if (rating !== null && rating !== '') {
          const parsedRating = parseFloat(rating);
          if (!isNaN(parsedRating) && parsedRating >= 0 && parsedRating <= 5) {
            alert(`Success! Rating: ${parsedRating}`);
          } else {
            alert('Invalid rating');
          }
        }
    };
    
    const vendor = localStorage.getItem('vendor')
    const userData = localStorage.getItem('users')
    const trimmedVendor = vendor.replace(/"/g, '');
    console.log(trimmedVendor)
    let users = []     
    users = JSON.parse(userData); 
    let sellerInfo = users.find((user) => user.email == trimmedVendor);
    console.log("aqui ha vendedor!!")
    console.log(sellerInfo)
    let loggedInUser = users.find((user) => user.loggedIn == true);
    console.log(loggedInUser)
    function favouriteUser() {
        console.log(sellerInfo.favUsers)
        loggedInUser.favUsers.push(sellerInfo)
        localStorage.setItem('users', JSON.stringify(users));
    }

    return(
        <div className='full_div2'>
            <TopNav />
            <center>
                <div ><h2 style={{fontFamily: 'Open Sans, sans-serif'}}>Perfil de {sellerInfo.firstName +" "+sellerInfo.lastName  }</h2></div>
            </center>
            <center>
            <div style={{ border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '80%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', margin: '0 auto' }}>
                    <div style={{ border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '30%',backgroundColor: 'rgba(107, 142, 35, 0.3)' ,height:'300px'}}>  
                        <center>
                            <img src={sellerInfo.photo} alt="Maria Florista" style={{ width: 'auto', height: 'auto', objectFit: 'cover' ,maxHeight:'250px',maxWidth:'250px'}} />
                        </center>
                    </div>
                    <div style={{ textAlign: 'left',border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '65%',height:'300px' }}>   
                        <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Name : {sellerInfo.firstName +" "+sellerInfo.lastName  }</h3></div>
                        <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>Email : {sellerInfo.email}</h3></div>
                        <div><h3 style={{fontFamily: 'Open Sans, sans-serif'}}>About : {sellerInfo.about}</h3></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', margin: '0 auto' }}>
                        <div style={{ marginRight: '20px' }}><h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>Rating : 4.1</h3></div>
                        <button style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '5px' }} onClick={() => handleRating()}>Rate</button>
                        <button style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '5px' }} onClick={() => favouriteUser()}>Add to favourites</button>

                    </div>

                    </div>
                </div>
                <div style={{marginTop:'20px'}}>
                <div style={{ marginTop:'20px', border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '100%' }}>
                     <ShowPlants filterVendorName = {sellerInfo.email} />
                     </div>
                </div>
                <div style={{ marginTop:'20px', border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '100%' }}>
                    <Comments/>
                </div>
            </div>
            </center>
            <div style={{marginTop:'50px',width: '100%', height: '100px', backgroundColor: '#6B8E23'}}></div>
        </div>
    );
}

export default SellerProfile;