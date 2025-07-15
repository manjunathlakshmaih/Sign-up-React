import React, { useState } from "react";
import SocialMediaIcons from "../SocialMedias/SocialMedias";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // 더미 로그인 정보 (예: email: test@example.com, password: 123456)
  const dummyUser = {
    email: "test@example.com",
    password: "123456",
  };

  const handleSignUp = () => {
    if (email === dummyUser.email && password === dummyUser.password) {
      setMessage("Login successful! Proceeding to next step...");
      // 여기서 다음 단계 진행 (예: 페이지 이동, 상태 변경 등)
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
      <h1>Create Account</h1>
      <SocialMediaIcons />
      <p>or use your email for registration</p>

      <div className="input-group">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleSignUp}>Sign Up</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default SignUpForm;