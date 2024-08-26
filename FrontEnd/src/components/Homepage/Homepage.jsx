import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HomePage.css'; // Add styling here

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="content">
        <h1>Welcome to My Image Tagging App</h1>
        <p>Your one-stop solution for tagging and searching images.</p>
      </div>
    </div>
  );
};

export default HomePage;
