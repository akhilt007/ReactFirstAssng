import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const SignupBox = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Sign Up</h2>
        <form>
          <CustomInput label="Name" type="text" placeholder="Enter your name" />
          <CustomInput label="Email" type="email" placeholder="Enter your email" />
          <CustomInput label="Number" type="tel" placeholder="Enter your phone number" />
          <CustomInput label="Password" type="password" placeholder="Enter your password" />
          <CustomButton label="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default SignupBox;