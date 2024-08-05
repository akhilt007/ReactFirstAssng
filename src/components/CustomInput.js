import React from 'react';

const CustomInput = ({ label, type, placeholder }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" placeholder={placeholder} />
    </div>
  );
}

export default CustomInput;