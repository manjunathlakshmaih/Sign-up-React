import { useState } from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import Banner from "../../Components/Banner/Banner";
import "./Sign-up.css";

const SignUp = () => {
  const [isColorChange, setColorChange] = useState(false);

  const handleColorChange = () => {
    setColorChange((prev) => !prev);
  };

  return (
    <div className={`container${isColorChange ? "change" : ""}`}>
      <div className="form-wrapper">
        <Banner />
        <div className="green-bg">
          <button type="button" onClick={handleColorChange}>
            Sign Up
          </button>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;