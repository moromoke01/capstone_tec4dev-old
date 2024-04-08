import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';
import logo from '../../Assets/logo.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Create Account");
  return (
    <div className='body'>
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign Up" ? (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Name' />
            </div>
          ) : null}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' required />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Confirm Password' required />
          </div>
        </div>
        {action==="Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        <div className="submit-container">
          <div key="login" className={action === "Create Account" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
          <div key="sign up" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Create Account") }}>Sign Up</div>
        </div>
        <div className='second'>
          <div><img src={logo} alt="logo" /></div>
          <div>
            <h3>We are glad to have you. Welcome!</h3>
            <p>Already have an account with Insightify? Stay connected with us and log in here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
