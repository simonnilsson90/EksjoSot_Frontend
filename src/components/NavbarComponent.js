import Logo from "../assets/images/homepage/logo.png";
import UserPic from "../assets/images/homepage/user.png";
import React from "react";

function Navbar() {
  return (
    <div >
      <nav >
        <a  href="#">
          <img src={Logo} alt="Logo picture"  />
          The Everyone Store
        </a>
        <div >
          <ul >
            <li >
              <a  href="/">
                Home
              </a>
            </li>
            <li >
              <a  href="market">
                Marketplace
              </a>
            </li>
            <li >
              <a  href="#">
                Account
              </a>
            </li>
            <li >
              <a href="#" >
                About Us
              </a>
            </li>
            <li >
              <a href="#" >
                Contact Us
              </a>
            </li>
            <li >
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
