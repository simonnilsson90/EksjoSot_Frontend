import Logo from "../assets/images/homepage/logo.png";
import UserPic from "../assets/images/homepage/user.png";
import React from "react";

function Navbar() {
  return (
    <div className="inter-font">
      <nav class="navbar navbar-expand border-bottom border-2 border-dark-subtle">
        <a class="navbar-brand ms-5" href="#">
          <img src={Logo} alt="Logo picture" />
          The Everyone Store
        </a>
        <div class="container-fluid justify-content-end flex-row me-3">
          <ul class="navbar-nav ml-2">
            <li class="nav-item active">
              <a class="nav-link me-3" href="#">
                Data Sets
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">
                Sell Data
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">
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
