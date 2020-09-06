import React from "react";

const Input = ({ onChange, placeholder }) => {
  return (
    <div>
      <input type="text" onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
