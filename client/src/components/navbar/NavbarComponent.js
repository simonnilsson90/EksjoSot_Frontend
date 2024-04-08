import Logo from "../../assets/images/homepage/logo.png";
import UserPic from "../../assets/images/homepage/user.png";
import React, { useState } from "react";
import "./navbarComponent.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav>
      <ul className="navbarContainer">
        <div id="logoContainer">
          <li>
            <a href="/">
              <img id="logo" src={Logo} alt="Logo" />
              The Everyone Store
            </a>
          </li>
        </div>
       
        <div id="linksContainer" className={isMenuOpen ? "open" : ""}>
          {/* <li className="navbarLink">
            <a href="/">Home</a>
          </li> */}
          <li className="navbarLink">
            <a href="market">Data Sets</a>
          </li>
          <li className="navbarLink">
            <a href="sellData">Sell Data</a>
          </li>
          <li className="navbarLink">
            <a href="aboutUs">About Us</a>
          </li>
          <li className="navbarLink">
            <a href="contactUs">Contact Us</a>
          </li>
          <li className="navbarLink">
            <a href="FaQ">FaQ</a>
          </li>
          <li className="navbarLink">
            <Link id="userAvatar"  to="/myAccount"  className="me-4">
              <img src={UserPic} width={30} height={30} alt="User" />
              <spam>Log in</spam>
            </Link>
          </li>
          <li className="navbarLink">
            <Link id="shoppingBag"  to="/myShopping">
              <img src={'/shopping-bag.svg'} width={25} height={25} alt="shopping bag" />
            </Link>
          </li>
          
        </div>
        <li id="hamburgerMenu">
          <button
            onClick={toggleMenu}
            className={`hamburger-icon ${isMenuOpen ? "active" : ""}`}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
