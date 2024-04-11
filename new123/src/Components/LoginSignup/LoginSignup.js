// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css'; // Import CSS for styling

// Common component for input fields
const InputField = ({ label, type, name, placeholder }) => (
  <div>
    <label htmlFor={name}><strong>{label}:</strong></label>
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
        <h2>Sign up to take your career psychometric test</h2>
      </div>
      <div className="inputs">
        <InputField label="Name" type="text" name="name" placeholder="Enter your name" />
        <InputField label="Email" type="email" name="email" placeholder="Enter your email" />
        <InputField label="Password" type="password" name="password" placeholder="Enter your password" />
      </div>
      <div className="already-have-account">
        Already have an account? <Link to="/signin" onClick={() => setAction("Login")}>Sign in</Link>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={() => {/* Handle sign up submission */}}>SIGN UP</button>
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
        <h2>Sign in to stay connected with us and continue to explore</h2>
      </div>
      <div className="inputs">
        <InputField label="Email" type="email" name="email" placeholder="Enter your email" />
        <InputField label="Password" type="password" name="password" placeholder="Enter your password" />
      </div>
      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <button className="submit" onClick={() => {/* Handle sign in submission */}}>SIGN IN</button>
      </div>
    </div>
  </div>
);

export { SignupForm, SigninForm };
