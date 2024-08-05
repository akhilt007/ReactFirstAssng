import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 MyApp:
        <a className="text-dark" href="#"> myapp.com</a>
      </div>
    </footer>
  );
}

export default Footer;