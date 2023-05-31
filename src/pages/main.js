import React, { useState ,useEffect} from "react";
import TopNav from '../components/Navbar/TopNav';
import ShowPlants from "../components/ShowPlants";
import { useNavigate } from 'react-router-dom';

const Main = () => {

	const history = useNavigate();
   
	const [showSubcategoriesPlants, setShowSubcategoriesPlants] = useState(false);
  	const toggleSubcategoriesPlants = () => {
    	setShowSubcategoriesPlants(!showSubcategoriesPlants);
  	};
  	const [showSubcategoriesTrees, setShowSubcategoriesTrees] = useState(false);

  	const toggleSubcategoriesTrees = () => {
    	setShowSubcategoriesTrees(!showSubcategoriesTrees);
  	};
	
	  let [username, setUsername] = useState('');

	  useEffect(() => {
		// Retrieve the logged-in user's name from localStorage
		const userData = localStorage.getItem('users');
		let users = [];
		if (userData) {
		  	users = JSON.parse(userData)
			console.log("utilizadores")
			console.log(users)	
		  	const user = users.find((user) => user.loggedIn === true);		
			  	if (user) {
					setUsername(user.firstName);
		  		} else {
				console.log("user not loggedIn " )
		  	}
		} else {
			console.log("no users")
		}
	  }, [history]);
	
	  function handleClick() {
		history('/addplant');
	  }
	const [searchQuery, setSearchQuery] = useState("");
	



	return (
		<div className='full_div2'>
		  <TopNav />
		  <div style={{display: 'flex', width:'100%'}}>
			<div style={{ width: "20%", border: "5px solid #6B8E23" }}>
	  			<div style={{ marginTop: 20 }}>
		  			<h2 className="plants-to-show" style={{fontFamily: 'Helvetica, sans-serif'}}>Search:</h2>
					<div style={{ display: 'flex'}}>
		 				<input
		 					type="text"
		 					placeholder="Filter plants..."
		 					value={searchQuery}
		 					onChange={(e) => setSearchQuery(e.target.value)}
		 					style={{
		 						backgroundColor: "#ccc",
		 						borderRadius: "20px",
		 						padding: "10px",
		 						border: "none",
		 						width: "300px",
		 						height: "30px",
		 						textAlign: "left",
		 						marginBottom: "10px",
		 						marginTop: "5px",
		 						marginRight: "30px"
		 					}}
		 			  	/>
					</div>
				</div>
				
				<h2 className="plants-to-show" style={{fontFamily: 'Helvetica, sans-serif'}} >Price Range:</h2>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
		  			<div style={{ marginRight: '10px' }}>
						<label htmlFor="minPrice">Min:</label>
						<input type="number" id="minPrice" placeholder="Min" style={{ padding: '5px', width: '80px' }} />
		  			</div>
		  			<div style={{ marginLeft: '10px' }}>
						<label htmlFor="maxPrice">Max:</label>
						<input type="number" id="maxPrice" placeholder="Max" style={{ padding: '5px', width: '80px' }} />
		  			</div>
	  			</div>
					<h2 className="plants-to-show" style={{fontFamily: 'Helvetica, sans-serif'}}>Categories:</h2>
				<div>
					<button style={{ border: 'none', paddingLeft: '5', fontWeight: 'bold',marginLeft:10 ,width:'80%'}} onClick={toggleSubcategoriesPlants}>
  						<h3 style={{ display: 'inline-block', marginRight: '10px', fontFamily: 'Helvetica, sans-serif' }}>All Plants</h3>
  						{showSubcategoriesPlants ? <span>&#x25BC;</span> : <span>&#x25B6;</span>}
					</button>
					{showSubcategoriesPlants && (
  						<center>
  						<div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px',marginRight:'10px' }}>
							<button style={{ height:'40px',marginTop:'5px',border: 'none', fontWeight: 'bold', fontFamily: 'Helvetica, sans-serif' }}>Indoor Plants</button>
							<button style={{ height:'40px',marginTop:'5px',border: 'none', fontWeight: 'bold',fontFamily: 'Helvetica, sans-serif' }}>Outdoor Plants</button>
							<button style={{ height:'40px',marginTop:'5px',border: 'none', fontWeight: 'bold',fontFamily: 'Helvetica, sans-serif' }}>Aquatic Plants</button>
							<button style={{ height:'40px',marginTop:'5px',border: 'none', fontWeight: 'bold',fontFamily: 'Helvetica, sans-serif' }}>Succulents</button>
							<button style={{ height:'40px',marginTop: '5px', border: 'none', fontWeight: 'bold',fontFamily: 'Helvetica, sans-serif' }}>Cacti</button> 
							<button style={{ height:'40px',marginTop: '5px', border: 'none', fontWeight: 'bold',fontFamily: 'Helvetica, sans-serif' }}>Herbs</button> 
							<button style={{ height:'40px',marginTop: '5px', border: 'none', fontWeight: 'bold',fontFamily: 'Helvetica, sans-serif' }}>Bamboo Plants</button>
							<button style={{ height:'40px',marginTop: '5px', border: 'none', fontWeight: 'bold', fontFamily: 'Helvetica, sans-serif' }}>Scented Plants</button>
							<button style={{ height:'40px',marginTop: '5px', border: 'none', fontWeight: 'bold', fontFamily: 'Helvetica, sans-serif' }}>Tropical Plants</button>
							<button style={{ height:'40px',marginTop: '5px', border: 'none', fontWeight: 'bold',fontFamily: 'Helvetica, sans-serif' }}>Foliage Plants</button>
		  				</div>
						</center>
					)}
	 			</div>
				<button style={{ border: 'none', paddingLeft: '5', fontWeight: 'bold',marginLeft:10 ,width:'80%',marginTop:10}} onClick={toggleSubcategoriesTrees}>
				  	<h3 style={{ display: 'inline-block', marginRight: '10px' }}>All Trees</h3>
				  	{showSubcategoriesTrees ? <span>&#x25BC;</span> : <span>&#x25B6;</span>}
				</button>
				{showSubcategoriesTrees && (
					<div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px',marginRight:10 }}>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold',marginTop:'5px',fontFamily: 'Helvetica, sans-serif' }}>Fruit trees</button>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold',marginTop:'5px',fontFamily: 'Helvetica, sans-serif' }}>Bushes</button>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold',marginTop:'5px' , fontFamily: 'Helvetica, sans-serif'}}>Large Trees</button>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold',marginTop:'5px', fontFamily: 'Helvetica, sans-serif' }}>Bonsais</button>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold', marginTop: '5px', fontFamily: 'Helvetica, sans-serif' }}>Evergreen Trees</button>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold', marginTop: '5px', fontFamily: 'Helvetica, sans-serif' }}>Deciduous Trees</button>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold', marginTop: '5px', fontFamily: 'Helvetica, sans-serif' }}>Palm Trees</button>
				  		<button style={{ height:'40px',border: 'none', fontWeight: 'bold', marginTop: '5px', fontFamily: 'Helvetica, sans-serif' }}>Coniferous Trees</button>
					</div>
				)}

  				<div style={{ marginTop: 20 , marginLeft:'10%'}}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<label style={{ display: 'flex', alignItems: 'center' }}>
							<h3 style={{ marginRight: '10px',fontFamily: 'Helvetica, sans-serif' }}>Animal Friendly</h3>
						  	<input type="checkbox" style={{ transform: 'scale(1.5)' }} />
						</label>
						<label style={{ display: 'flex', alignItems: 'center' }}>
							<h3 style={{ marginRight: '10px', fontFamily: 'Helvetica, sans-serif' }}>With Flower</h3>
							<input type="checkbox" style={{ transform: 'scale(1.5)' }} />
						</label>
						<label style={{ display: 'flex', alignItems: 'center' }}>
						  	<h3 style={{ marginRight: '10px',fontFamily: 'Helvetica, sans-serif' }}>With Fruit</h3>
							<input type="checkbox" style={{ transform: 'scale(1.5)' }} />
						</label>
					</div>
				</div>
  			</div>
			<div style={{ width: "100%", border: "5px solid #6B8E23" }}>
			  	<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
			    	<h2 className="plants-to-show" style={{ fontFamily: 'Helvetica, sans-serif' }}>Welcome {username}! What we have for you today:</h2>
			   	 	<button style={{marginRight: '5%', width: '20%', backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={handleClick}>Add plant to sell</button>
			  	</div>
			  	<ShowPlants filterPlantName={searchQuery} />
			</div>

		</div>
		
		<div style={{width: '100%', height: '100px', backgroundColor: '#6B8E23'}}></div>
	</div>
	);
}	  

export default Main;
