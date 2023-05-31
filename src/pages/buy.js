import React from 'react';
import TopNav from '../components/Navbar/TopNav';

import { useNavigate } from 'react-router-dom';

const Buy = () =>{
    const navigate = useNavigate();

    function Cancel() {
        navigate('/cart');
    }
    return(
        <div className='full_div2'>
            <TopNav />
            <center>
                <div style={{ paddingLeft: '100px', marginTop: '50px' }}></div>
                <div style={{ border: '2px solid green', padding: '20px', borderRadius: '10px', boxSizing: 'border-box', width: '80%' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", padding: '10px' }}>
                        <div className='product_wrapper'>
                            <div style={{ marginTop: '50px' }}></div>
                            <div className='product_text' style={{ marginTop: '50px' }}>
                                <div style={{ marginBottom: '0px', marginRight: '10px', backgroundColor: '#ffffff', color: 'black', padding: '5px 20px', fontSize: '30px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px',fontFamily: 'Open Sans, sans-serif' }}>Billing Details</div>
                                <div style={{ marginTop: '50px' }}>First Name:</div>
                                <input className='sty' style={{
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
                                }} type="text" placeholder="Replace with your first name" />

                                <div style={{ marginTop: '50px' }}>Last Name:</div>
                                <input className='sty' style={{
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
                                }} type="text" placeholder="Replace with your last name" />

                                <div style={{ marginTop: '50px' }}>Street Address:</div>
                                <input className='sty' style={{
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
                                }} type="text" placeholder="Replace with your address" />

                                <div style={{ marginTop: '50px' }}>City:</div>
                                <input className='sty' style={{
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
                                }} type="text" placeholder="Replace with your city" />

                                <div style={{ marginTop: '50px' }}>ZIP Code:</div>
                                <input className='sty' style={{
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
                                }} type="text" placeholder="Replace with your ZIP Code" />

                                <div style={{ marginTop: '50px' }}>Email:</div>
                                <input className='sty' style={{
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
                                }} type="text" placeholder="Replace with your email" />

                                <div style={{ marginTop: '50px' }}>Phone:</div>
                                <input className='sty' style={{
                                    fontFamily: 'Times New Roman, serif',
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
                                }} type="text" placeholder="Replace with your phone number" />

                                <label className='product_wrapper' style={{ marginTop: '50px' }}>
                                <h3 style={{ fontFamily: 'Open Sans, sans-serif'}}>Save information for future purchases</h3>
                                <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
                                </label>
                            </div>
                        </div>

                        <div className='product_wrapper'>
                        <div style={{ marginTop: '50px' }}></div>
                        <div className='product_text' style={{ marginTop: '50px' }}></div>
                            {/* Add your div content for the second column here */}
                            <div style={{fontFamily: 'Open Sans, sans-serif',marginBottom: '0px', marginRight: '10px', backgroundColor: '#ffffff', color: 'black', padding: '5px 20px', fontSize: '30px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Your order</div>
                            <div className = "product" style={{ fontFamily: 'Open Sans, sans-serif', marginTop:'75px',borderRadius: '10px', padding: "1rem" , backgroundColor: '#ffffff' }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", padding: '10px' }}>
                                <div >Product</div>
                                <div>Subtotal</div>
                            </div>


                            <div className='product_wrapper' style={{ marginTop: '100px' }}>
                            <h3 style={{ fontFamily: 'Open Sans, sans-serif'}}>Safe & Secure Checkout</h3>
                            <div className='product_text' style={{ marginTop: '50px' }}></div>
                            <div style={{ marginTop: '50px' }}>Card Number:</div>
                                <input className='sty' style={{
                                    fontFamily: 'Times New Roman, serif',
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
                                }} type="text" placeholder="**** **** **** ****" /> 
                            </div>

                            <div className='product_text' style={{ marginTop: '50px' }}></div>
                            <div style={{ marginTop: '50px' }}>Expiry(MM/YY):</div>
                                <input className='sty' style={{
                                    fontFamily: 'Times New Roman, serif',
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
                                }} type="text" placeholder="Expiry(MM/YY)" /> 
                           

                            <div className='product_text' style={{ marginTop: '50px' }}></div>
                            <div style={{ marginTop: '50px' }}>Card Code:</div>
                                <input className='sty' style={{
                                    fontFamily: 'Times New Roman, serif',
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
                                }} type="text" placeholder="CVC" /> 
                            <div className = 'product_wrapper' >
               
                            <div style={{ marginTop : '50px'}}>
                            </div>
                            <div className = 'product_text' style={{ marginTop : '50px'}}>
                            <button className = "product-text" style={{ marginRight: '10px',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize:'20px', borderRadius: '10px', border: 'none', cursor: 'pointer',marginTop:'5px' }}>Checkout</button></div>
                            <button className = "product-text" style={{ marginRight: '10px',backgroundColor: '#ff6666', color: 'white', padding: '5px 20px', fontSize:'20px', borderRadius: '10px', border: 'none', cursor: 'pointer',marginTop:'20px' }} onClick={Cancel}>Cancel</button>
                            </div>
                          </div>  
                        </div>
                    </div>
                </div>
            </center>
            <div style={{marginTop:'50px',width: '100%', height: '100px', backgroundColor: '#6B8E23'}}></div>
        </div>
    );
}

export default Buy;
