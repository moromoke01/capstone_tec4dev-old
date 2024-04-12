import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';
import google from '../../Assets/Google logo.webp'

// Common component for input fields
const InputField = ({ label, type, name, placeholder }) => (
  <div>
    <label htmlFor={name}><strong>{label}</strong></label>
    <input type={type} name={name} autoComplete='off' placeholder={placeholder} className='input' />
  </div>
);

// Signup form component
const SignupForm = ({ setAction }) => (
  <div className='body'>
    <div className='container'>
      <div className="header">
        <div className="text">Insightify</div>
        <div className="underline"></div>
      </div>
      <div className="signup-heading">
        <h4>Sign up to take your career psychometric test</h4>
      </div>
      <div className="inputs">
        <InputField label="Name" type="text" name="name" placeholder="Enter your name" />
        <InputField label="Email" type="email" name="email" placeholder="Enter your email" />
        <InputField label="Password" type="password" name="password" placeholder="Enter your password" />
        <div className="password-info">Add at least 8 characters and special characters</div>
      </div>

      {/* Checkbox for agreeing to terms */}
      <div className="agree-checkbox">
        <input type="checkbox" id="agreeTerms" name="agreeTerms" />
        <label htmlFor="agreeTerms">I agree with Insightify's <Link to="/terms">terms of service</Link>, <Link to="/privacy">privacy policy</Link>, and default settings</label>
      </div>
    
      <div className="submit-container">
        <button className="submit" onClick={() => {/* Handle sign up submission */}}>SIGN UP</button>
      </div>

      <div className="already-have-account">
        Already have an account? <Link to="/signin" onClick={() => setAction("Login")}>Sign in</Link>
      </div>
    </div>
  </div>
);

// Signin form component
const SigninForm = () => (
  <div className='body'>
    <div className='container'>
      <div className="header">
        <div className="text">Insightify</div>
        <div className="underline"></div>
      </div>
      <div className="signin-heading">
        <h5>Sign in to stay connected with us and continue to explore</h5>
      </div>
      <div className="inputs">
        <InputField label="Email" type="email" name="email" placeholder="Enter your email" />
        <InputField label="Password" type="password" name="password" placeholder="Enter your password" />
      </div>
      <div className="forgot-password">Forgot Password?</div>
      <div className="submit-container">
        <button className="submit" onClick={() => {/* Handle sign in submission */}}>SIGN IN</button>
      </div>
    </div>
  </div>
);

export { SignupForm, SigninForm };
