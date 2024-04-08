// import Logo from "../../assets/images/homepage/logo.png";
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
        
            <a href="/" id="logoContainer">
              <img
                id="logo"
                src={"/theEveryoneStorelogo.svg"}
                alt="Logo"
                width={90}
                height={90}
              />
              <span className="companyName">
                The<br />EveryOne<br />Store
              </span>
            </a>
        

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
            <Link id="userAvatar" to="/myAccount" className="me-4">
              <img src={UserPic} width={40} height={40} alt="User Picture" />
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
