import React from 'react'
import './Login.css'
import Button from '../../../Components/Button'
import { useNavigate } from 'react-router-dom';
import LogoBack from '../../../Components/LogoBack';

const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleOtp = () => {
    navigate('/loginotp')
  };

  const handleSignup = () => {
    navigate('/');
  };

  return (
    <div className='login-container'>

      <div className='login-left-side'>

        <LogoBack onClick={handleBack} />

        <h1 className='login-text'>Log In</h1>
        <p className='login-subtitle'>Lorem ipsum dolor sit amet, consectetuer<br />adipiscing elit Lorem ipsum </p>

        <div className='login-email-container'>
          <input type="email" placeholder='Enter your email' className='login-email-input' />
        </div>
        <div className='login-button-container'>
          <Button className='login-letstart-button' onClick={handleOtp}>Lets Start!</Button>
        </div>

        <p className='dont-have-text'>Don’t  have an account?<span className='signup-text' onClick={handleSignup}>Sign Up</span></p>

      </div>

      <div className='login-right-side'>
        <img src="/src/assets/LoginImg.png" alt="LoginIlustration" className='login-image-style' />
      </div>

    </div>
  )
}

export default Login