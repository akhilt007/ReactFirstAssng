import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const LoginBox = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <form>
          <CustomInput label="Email" type="email" placeholder="Enter your email" />
          <CustomInput label="Password" type="password" placeholder="Enter your password" />
          <CustomButton label="Login" />
        </form>
      </div>
    </div>
  );
}

export default LoginBox;