import Logo from "../assets/images/homepage/logo.png";
import UserPic from "../assets/images/homepage/user.png";
import React from "react";

function Navbar() {
  return (
    <div className="inter-font">
      <nav className="navbar navbar-expand border-bottom border-2 border-dark-subtle">
        <a className="navbar-brand ms-5" href="#">
          <img src={Logo} alt="Logo picture" className="me-3" />
          The Everyone Store
        </a>
        <div className="container-fluid justify-content-end flex-row me-3">
          <ul className="navbar-nav ml-2">
            <li className="nav-item active">
              <a className="nav-link me-3" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="market">
                Marketplace
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                Account
              </a>
            </li>
            <li className="nav-item me-3">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item me-4">
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="me-4">
                <img src={UserPic} width={40} height={40} alt="User Picture" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
