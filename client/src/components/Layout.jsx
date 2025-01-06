import React from 'react';
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
  console.log('Layout rendered'); // For debugging
  
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout; 