import React, { useState } from 'react';
import TopNavSimpleLogin from '../components/Navbar/TopNavSimpleLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleClick() {
    history('/sign-up');
  }

  function loginButton() {
    const userData = localStorage.getItem('users');
    let users = [];
    if (userData) {
      users = JSON.parse(userData);
      console.log('users:', users);
  
      const userIndex = users.findIndex((user) => user.email === email);
  
      if (userIndex !== -1 && users[userIndex].password === password) {
        users[userIndex].loggedIn = true;
        console.log("login update to true")
        console.log(users[userIndex].loggedIn)
        // Update localStorage with the modified users array
        localStorage.setItem('users', JSON.stringify(users));
        history('/main');
      } else {
        setErrorMessage('Invalid email or password');
        return
      }
    }
  }
  


  return (
    <div className='full_div'>
      <TopNavSimpleLogin />

      <center>
        <h1>Login to your MarketPlants account!</h1>
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
              onClick={loginButton}
            >
              Login
            </button>
          </div>
          <div>
            <h2 style={{ marginTop: 20, marginBottom: 0 }}>Forgot your password?</h2>
            <button
              style={{
                marginTop: '5px',
                backgroundColor: '#6B8E23',
                color: 'white',
                padding: '5px 20px',
                fontSize: '20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Recover password
            </button>
          </div>
        </div>
        <div>
          <h2 style={{ marginTop: 20 }}>
            Or Register if you don't have an account:{' '}
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
              Register
            </button>
          </h2>
        </div>
      </center>
      <div className='bottom_panel'></div>
    </div>
  );
};

export default Login;
