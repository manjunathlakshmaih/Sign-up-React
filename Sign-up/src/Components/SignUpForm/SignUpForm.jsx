import React from "react";
import SocialMediaIcons from "../SocialMedias/SocialMedias";

const SignUpForm = () => {
  return (
    <form className="signup-form">
      <h1>Create Account</h1>
      <SocialMediaIcons />
      <p>or use your email for registration</p>
      <div className="input-group">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Name" />
      </div>
      <div className="input-group">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-group">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <button type="button">Sign Up</button>
    </form>
  );
};

export default SignUpForm;