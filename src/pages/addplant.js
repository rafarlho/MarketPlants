import React, { useState } from 'react';
import TopNav from '../components/Navbar/TopNav';
import { useNavigate } from 'react-router-dom';

const AddPlant = () => {
  const [plantData, setPlantData] = useState({
    photo: '',
    name: '',
    scientificName: '',
    description: '',
    price: '',
    shipping: '',
    lightRequirements: '',
    watering: '',
    temperature: '',
    humidity: '',
    growthRate: '',
    flower: '',
    fruit: '',
    animalFriendly: '',
    extraCautions: '',
    vendor: '',
    
  });
  const history = useNavigate();

  function cancel() {
    history('/profile');
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setPlantData((prevState) => ({
        ...prevState,
        [name]: checked ? 'Yes' : 'No',
      }));
    } else {
      setPlantData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
  
    // Get the user data from localStorage
    const userData = localStorage.getItem('users');
    let users = [];
    let plants =[];


    if (userData) {
      users = JSON.parse(userData);
      console.log("utilizadores em addplant")
      console.log()
      const loggedInUser = users.find((user) => user.loggedIn === true);
      plants = loggedInUser.plants 
      console.log(loggedInUser)
      // Create a new plant object
      const newPlant = {
        photo: plantData.photo,
        name: plantData.name,
        scientificName: plantData.scientificName,
        description: plantData.description,
        price: plantData.price,
        shipping: plantData.shipping,
        lightRequirements: plantData.lightRequirements,
        watering: plantData.watering,
        temperature: plantData.temperature,
        humidity: plantData.humidity,
        growthRate: plantData.growthRate,
        flower: plantData.flower,
        fruit: plantData.fruit,
        animalFriendly: plantData.animalFriendly,
        extraCautions: plantData.extraCautions,
        vendor: loggedInUser.email,
      };
      console.log("plant" + plantData.photo)
      plants.push(newPlant)
      // Add the new plant to the user's plants array
      loggedInUser.plants = plants;
      console.log(plants)
      // Update the localStorage with the modified users array
      localStorage.setItem('users', JSON.stringify(users));
  
      // Redirect or perform any other necessary actions

      history('/profile');
    }
  };
  
  return (
    <div className="full_div2">
      <TopNav />
      <center>
        <div style={{ paddingLeft: '100px', marginTop: '50px' }}></div>
        <div style={{ border: '2px solid green', padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '80%' }}>
          <form >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", padding: '10px' }}>
              <div>
                <div style={{ marginTop: '20px' }}>
                  <div style={{ marginBottom: '0px', marginRight: '10px', backgroundColor: '#ffffff', color: 'black', padding: '5px 20px', fontSize: '30px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px', fontFamily: 'Open Sans, sans-serif' }}>Add Plant</div>
                  <div style={{ marginTop: '20px' }}>Photo:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="photo"
                    value={plantData.photo}
                    onChange={handleChange}
                    placeholder="Example: https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_coffee-plant"
                    required
                  />

                  <div style={{ marginTop: '20px' }}>Name:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="name"
                    value={plantData.name}
                    onChange={handleChange}
                    placeholder="Example: Mini Orchid"
                    required
                  />

                  <div style={{ marginTop: '20px' }}>Scientific Name:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="scientificName"
                    value={plantData.scientificName}
                    onChange={handleChange}
                    placeholder="Example:Phalaenopsis"
                    required
                  />

                <div>
			  	        <div style={{ marginTop: '20px' }}>Price:</div>
                          <input
                            className='sty'
                            style={{
                              backgroundColor: '#ccc',
                              borderRadius: '10px',
                              padding: '10px',
                              border: 'none',
                              width: '500px',
                              height: '30px',
                              textAlign: 'left',
                              marginBottom: '10px',
                              marginTop: '5px',
                              marginRight: '30px'
                            }}
                            type="text"
                            name="price"
                            value={plantData.price}
                            onChange={handleChange}
                            placeholder="Example: 20.00€"
                            required
                          />
				          </div>
                  <div>
			  	<div style={{ marginTop: '20px' }}>Shipping/delivery:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="shipping"
                    value={plantData.shipping}
                    onChange={handleChange}
                    placeholder="Example: No shipping / Shipping by 3,00€ 12/03"
                    required
                  />
				        </div>
				    <div style={{ marginTop: '20px' }}>Description:</div>
              <textarea
                className='sty'
                style={{
                  backgroundColor: '#ccc',
                  borderRadius: '10px',
                  padding: '10px',
                  border: 'none',
                  width: '500px',
                  height: '100px',
                  textAlign: 'left',
                  marginBottom: '10px',
                  marginTop: '5px',
                  marginRight: '30px',
                  resize: 'vertical' // Allows vertical resizing of the textarea
                }}
                name="description"
                readOnly={false}
                value={plantData.description}
                onChange={handleChange}
                placeholder="Example: A mini orchid, also known as a miniature orchid, is a small-sized orchid plant with compact growth and petite flowers. These charming orchids typically have smaller leaves and blooms compared to their larger counterparts."
                required
            />


				  
				</div>
              </div>

              <div>
			  <div>
			  	<div style={{ marginTop: '80px' }}>Light Requirements:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="lightRequirements"
                    value={plantData.lightRequirements}
                    onChange={handleChange}
                    placeholder="Example: Moderate to bright indirect light"
                    required
                  />
				</div>
				<div>
			  	<div style={{ marginTop: '20px' }}>Watering:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="watering"
                    value={plantData.watering}
                    onChange={handleChange}
                    placeholder="Example: Allow the soil to dry partially between waterings, once per week"
                    required
                  />
				</div>
				<div>
			  	<div style={{ marginTop: '20px' }}>Temperature:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="temperature"
                    value={plantData.temperature}
                    onChange={handleChange}
                    placeholder="Example: Average room temperatures around 65-75°F (18-24°C"
                    required
                  />
				</div>
				<div>
			  	<div style={{ marginTop: '20px' }}>Humidity:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="humidity"
                    value={plantData.humidity}
                    onChange={handleChange}
                    placeholder="Example: Average indoor humidity levels"
                    required
                  />
				</div>
				<div>
			  	<div style={{ marginTop: '20px' }}>Grow Rate:</div>
                  <input
                    className='sty'
                    style={{
                      backgroundColor: '#ccc',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none',
                      width: '500px',
                      height: '30px',
                      textAlign: 'left',
                      marginBottom: '10px',
                      marginTop: '5px',
                      marginRight: '30px'
                    }}
                    type="text"
                    name="growthRate"
                    value={plantData.growthRate}
                    onChange={handleChange}
                    placeholder="Example: Slow"
                    required
                  />
                  
				      </div>
              <div>
                <div style={{ marginLeft: '10%',marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '10px' }}>Animal friendly:</div>
                  <label style={{ marginRight: '10px' }}>
                    <input
                      type="checkbox"
                      name="animalFriendly"
                      checked={plantData.animalFriendly === 'Yes'}
                      onChange={(e) => handleChange(e, 'animalFriendly')}
                    />
                    <span>Yes</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="animalFriendly"
                      checked={plantData.animalFriendly === 'No'}
                      onChange={(e) => handleChange(e, 'animalFriendly')}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div>
                <div style={{ marginLeft: '10%',marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '10px' }}>Flower:</div>
                  <label style={{ marginRight: '10px' }}>
                    <input
                      type="checkbox"
                      name="flower"
                      checked={plantData.flower === 'Yes'}
                      onChange={(e) => handleChange(e, 'flower')}
                    />
                    <span>Yes</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="flower"
                      checked={plantData.flower === 'No'}
                      onChange={(e) => handleChange(e, 'flower')}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div>
                <div style={{ marginLeft: '10%',marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '10px' }}>Fruit:</div>
                  <label style={{ marginRight: '10px' }}>
                    <input
                      type="checkbox"
                      name="fruit"
                      checked={plantData.fruit === 'Yes'}
                      onChange={(e) => handleChange(e, 'fruit')}
                    />
                    <span>Yes</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="fruit"
                      checked={plantData.fruit === 'No'}
                      onChange={(e) => handleChange(e, 'fruit')}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              </div>
			  
            </div>

            <button type="submit" style={{ marginRight: '10px', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '20px', borderRadius: '10px', border: 'none', cursor: 'pointer', marginTop: '5px' }} onClick={handleSubmit}>Add Plant</button>

          </form>
            <button type="submit" style={{ marginRight: '10px', backgroundColor: '#ff6666', color: 'white', padding: '5px 20px', fontSize: '20px', borderRadius: '10px', border: 'none', cursor: 'pointer', marginTop: '5px' }}onClick={cancel}>Cancel</button>
        </div>
      </center>
      <div style={{marginTop:'50px',width: '100%', height: '100px', backgroundColor: '#6B8E23'}}></div>
    </div>
);
}

export default AddPlant;
