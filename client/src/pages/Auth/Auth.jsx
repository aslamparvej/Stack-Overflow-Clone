import React, { useState } from "react";

import AboutAuth from "./AboutAuth";
import Icon from "../../assets/icon.png";

import "./Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={Icon} alt="Icon" className="login-icon" width="100px" />
        )}

        <form>
          {isSignup && (
            <label htmlFor="">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color: "#0077CC", cursor: "pointer" ,fontSize:"13px"}}>forgot password</p>}
            </div>
            <input type="password" name="password" id="password" />
            {isSignup && (
              <p style={{color: "#666767", fontSize:"13px", marginTop: "10px"}}>
                Passwords must contain at least eight <br /> characters,
                including at least 1 letter and 1 number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" name="check" />
              <p style={{ fontSize:"13px"}}>
                Opt-in to receive occasional product <br /> updates, user
                research invitations, company <br /> announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{color: "#666767", fontSize:"13px", marginTop: "20px"}}>
              By clicking “Sign up”, you agree to our
              <span style={{color: "#0077CC", cursor: "pointer"}}> terms of <br /> service,</span>
              <span style={{color: "#0077CC", cursor: "pointer"}}> privacy policy</span> and  
              <span style={{color: "#0077CC", cursor: "pointer"}}> cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "already have a account? " : "Don't have an account? "}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
