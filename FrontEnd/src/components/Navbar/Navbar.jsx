import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this file for styling

const Navbar = ({ onSearch, searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ImageTagger</Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
      <div className="nav-links">
        <Link to="/upload">Submit Image</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
