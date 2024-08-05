import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignupBox from './components/SignupBox';
import LoginBox from './components/LoginBox';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <SignupBox />
          </div>
          <div className="col-md-6">
            <LoginBox />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;