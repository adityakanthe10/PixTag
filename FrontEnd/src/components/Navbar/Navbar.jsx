import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this file for styling
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img src={assets.logo} alt="" className="logo"/></Link>
        </div>
      <div className="nav-links">
        <Link to="/search">Search Image</Link>
        <Link to="/upload">Upload Image</Link>
        <Link to="/about">About</Link>
          </div>
      </div>
 
  );
};

export default Navbar;
