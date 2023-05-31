import React,{useState} from 'react';
import TopNav from '../components/Navbar/TopNav';
import ShowPlants from '../components/ShowPlants';
import Comment from '../components/Comment';
import { useNavigate } from 'react-router-dom';

//import { useNavigate } from 'react-router-dom';

const Profile = () =>{
    const history = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    function handleClick() {
        history('/addplant');
    }
    function logout() {
      const userData = localStorage.getItem('users')
      let users = [];
      users = JSON.parse(userData);
      if(users) {
        users.forEach((user) => {
          // Access user properties
          user.loggedIn = false
        })
        localStorage.setItem('users', JSON.stringify(users));
        history('/');   
      }
    }
    
    
    let loggedInUser;
    const userData = localStorage.getItem('users')
    let users = [];
    users = JSON.parse(userData);
    if(users) {
      users.forEach((user) => {
        // Access user properties
       
        if(user.loggedIn) {
            loggedInUser=user;
            
        }

      })
    }
    let { firstName, email} = loggedInUser
    return(
        <div className='full_div2'>
            <TopNav />
            
                <div style={{marginTop:'50px',marginLeft:'10%', border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '80%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', margin: '0 auto' }}>
                        <div style={{ border: '2px solid green',padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '30%',backgroundColor: 'rgba(107, 142, 35, 0.3)' ,height:'300px'}}>  
                            
                              <img src={loggedInUser.photo} alt="Foto" style={{maxWidth:'300px', maxHeight:'300px', marginLeft:'10%',width: 'auto', height: '90%', objectFit: 'cover' }} />
                            
                        </div>
                        <div style={{ marginLeft: '20px', border: '2px solid green', padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '60%', height: '300px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <div>
                                <div>
                                  <h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>FirstName: {firstName}</h3>
                                  <h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>Last Name {firstName}</h3>
                                  
                                  <h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>Email: {email}</h3>
                                  <h3 style={{ fontFamily: 'Open Sans, sans-serif' }}>About: {loggedInUser.about}</h3>
                                </div>
                              <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <h3 style={{ fontFamily: 'Open Sans, sans-serif', marginRight: '10px' }}>Password:</h3>
                                  <span>{showPassword ? loggedInUser.password : '******'}</span>
                                  <button style={{ marginLeft: '10px', width: 50, padding: '10px 10px', border: 'none', cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? 'Hide' : 'Show'}
                                  </button>
                                  <button style={{ marginBottom:'10px',marginLeft:'10px', width:'50%',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer',marginTop:'10px' }}>Recover Password</button>
                              </div>
                                </div>
                                </div>
                                <div style={{ marginTop: '0px' }}>
                                  <h3 style={{ fontSize: '30px',fontFamily: 'Open Sans, sans-serif', display: 'inline-block', marginRight: '10px' }}>Rating: 4.9</h3>
                    
                              </div>
                            </div>
                        </div>

                          <div>
                            <button style={{ marginTop:'0px',marginLeft:'15%', width:'70%',backgroundColor: '#ff6666', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}onClick={logout}>LogOut</button>
                            <button style={{ marginTop:'40px',marginLeft:'15%',width:'70%',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}onClick={handleClick}>Add plant to sell</button>
                          </div>
                        
                    </div>
                    <div style={{ marginTop:'10px',fontFamily: 'Open Sans, sans-serif'}}><h2>Your plants for sale:</h2>
                    <div style={{ border: '2px solid green',padding: '10px', borderRadius: '10px', boxSizing: 'border-box', width: '100%' }}>
                        <ShowPlants filterVendorName={email}/>
                    </div>
                    </div>
                    <div style={{ marginTop:'10px',fontFamily: 'Open Sans, sans-serif'}}><h2>Your last purchases:</h2>
                        <div style={{ border: '2px solid green',padding: '10px', borderRadius: '10px', boxSizing: 'border-box', width: '100%' }}>
                        {loggedInUser.boughtPlants.map((plant, index) => (
                    <div className="product" key={index} style={{ border: '2px solid green', borderRadius: '10px', padding: "1rem", backgroundColor: 'rgba(107, 142, 35, 0.3)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginLeft:'25%',marginBottom:'10px',width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <img src={plant.photo} alt={plant.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}  />
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
         </div>
    </center>
  </div>
))}
                        </div>
                    </div>
                        <div style={{ marginTop:'50px',border: '2px solid green',padding: '10px', borderRadius: '10px', boxSizing: 'border-box', width: '100%' }}>
                            <Comment />
                    </div>
                </div>
            
            <div style={{marginTop:'50px',width: '100%', height: '100px', backgroundColor: '#6B8E23'}}></div>
            </div>
        
    );
}

export default Profile;