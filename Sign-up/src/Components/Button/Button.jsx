import React from 'react';
import './Button.css'; 

const Button = ({type,label,handleClick}) => {
  return(
    <div className="green-bg">
      <button type={type} onClick={handleClick}>{label}</button>
    </div>
  );
};

export default Button;