import Logo from "../../assets/images/homepage/logo.png";
import UserPic from "../../assets/images/homepage/user.png";
import React, { useState } from "react";
import "./navbarComponent.css";
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
              <img id="logo" src={Logo} alt="Logo picture" />
              The Everyone Store
            </a>
          </li>
        </div>
       
        <div id="linksContainer" className={isMenuOpen ? "open" : ""}>
          <li className="navbarLink">
            <a href="/">Home</a>
          </li>
          <li className="navbarLink">
            <a href="market">Marketplace</a>
          </li>

          <li className="navbarLink">
            <a href="#">About Us</a>
          </li>
          <li className="navbarLink">
            <a href="#">Contact Us</a>
          </li>
          <li className="navbarLink">
            <a id="userAvatar" href="myAccount" className="me-4">
              <img src={UserPic} width={40} height={40} alt="User Picture" />
            </a>
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
