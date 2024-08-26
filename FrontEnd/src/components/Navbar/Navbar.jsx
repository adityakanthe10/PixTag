import { Link } from 'react-router-dom';
import {assets} from "../../assets/assets"
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img src={assets.logo} alt="" className="logo"/></Link>
        </div>
      <ul className="nav-links">
        <li><Link to="/search">Search Image</Link></li>
        <li><Link to="/upload">Upload Image</Link></li>
        <li><Link to="/about">About</Link></li>
          </ul>
      </div>
 
  );
};

export default Navbar;
