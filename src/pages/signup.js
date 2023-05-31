import React, { useState } from 'react';
import TopNavSimpleLogin from '../components/Navbar/TopNavSimpleLogin';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [about, setAbout] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');
  let [errorMessage, setErrorMessage] = useState('');
  let [loggedIn ,setLoggedIn] = useState('')

  function handleClick() {
    history('/login');
  }
  function isUserExists(email, users) {
    return users.some(user => user.email === email);
  }
  

  function main() {
    // Check if the user already exists in localStorage
    const userData = localStorage.getItem('users');
    console.log('userData:', userData); // Debug statement
  
    let users = [];
  
    if (userData) {
      try {
        users = JSON.parse(userData);
        console.log('users:', users); // Debug statement
  
        if (isUserExists(email, users)) {
          // Display an error message or handle the case where the user already exists
          setErrorMessage('Email already exists');
          return;
        }
      } catch (error) {
        console.error('Error parsing userData:', error); // Debug statement
      }
    } else {
      // Initialize the users array if it is empty
      users = [];
    }
  
    // Create a new user object
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      loggedIn,
      photo,
      about,
      plants: [],
      favUsers: [],
      favPlants: [],
      cartPlants : [],
      boughtPlants: []
    };
    
    // Add the new user to the existing users array
    users.push(newUser);
    
    // Store the updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect to the main page or perform any other action
    history('/login');
  }
  

  return (
    <div className='full_div'>
      <TopNavSimpleLogin />

      <center>
        <h1>Create an account to get started on MarketPlants!</h1>
      </center>
      <center>
        <div
          style={{
            border: '2px solid green',
            padding: '20px',
            borderRadius: '10px',
            boxSizing: 'border-box',
            marginLeft: '40%',
            marginRight: '40%',
          }}
        >
          <div>
            <h3 style={{ marginBottom: 0 }}>First Name: </h3>
            <input
              type='text'
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '5px',
                border: 'none',
                padding: '10px',
                marginBottom: '10px',
              }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: 0 }}>Last Name</h3>
            <input
              type='text'
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '5px',
                border: 'none',
                padding: '10px',
                marginBottom: '10px',
              }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: 0 }}>Email</h3>
            <input
              type='text'
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '5px',
                border: 'none',
                padding: '10px',
                marginBottom: '10px',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: 0 }}>Password</h3>
            <input
              type='password'
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '5px',
                border: 'none',
                padding: '10px',
                marginBottom: '10px',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: 0 }}>Repeat Password</h3>
            <input
              type='password'
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '5px',
                border: 'none',
                padding: '10px',
                marginBottom: '10px',
              }}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: 0 }}>Photo URL</h3>
            <input
              type='text'
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '5px',
                border: 'none',
                padding: '10px',
                marginBottom: '10px',
              }}
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div>
            <h3 style={{ marginBottom: 0 }}>About</h3>
            <input
              type='text'
              style={{
                backgroundColor: '#f2f2f2',
                borderRadius: '5px',
                border: 'none',
                padding: '10px',
                marginBottom: '10px',
              }}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <div>
            <button
              style={{
                backgroundColor: '#6B8E23',
                color: 'white',
                padding: '10px 20px',
                fontSize: '20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={main}
            >
              Register
            </button>
          </div>
        </div>
        <div>
          <h2 style={{ marginTop: 20 }}>
            Or Login if you have an account:{' '}
            <button
              style={{
                backgroundColor: '#6B8E23',
                color: 'white',
                padding: '5px 20px',
                fontSize: '20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleClick}
            >
              Login
            </button>
          </h2>
        </div>
      </center>

      <div
        style={{
          marginTop: '50px',
          width: '100%',
          height: '100px',
          backgroundColor: '#6B8E23',
        }}
      ></div>
    </div>
  );
};

export default SignUp;
