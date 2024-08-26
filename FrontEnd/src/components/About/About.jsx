import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'; // Add styling here

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <h1>About Our App</h1>
        <p>This app allows you to upload, tag, and search for images seamlessly.</p>
        <p>Designed with the latest technologies to provide the best user experience.</p>
      </div>
    </div>
  );
};

export default About;
