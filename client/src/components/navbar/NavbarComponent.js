import Logo from "../../assets/images/homepage/logo.png";
import UserPic from "../../assets/images/homepage/user.png";
import React, { useState } from "react";
import "./navbarComponent.css";
import { Link } from "react-router-dom";
import Login from "../login/loginComponent";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

 
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const closeDrawer = () => {
    setOpen(false)
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
            <a href="/" onClick={closeDrawer}>Home</a>
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
         
         
    <div>
   
     <div>
      <Button onClick={toggleDrawer(true)}>
      <img src={UserPic} width={40} height={40} alt="User Picture"
   
   />
      </Button>
      <Drawer open={open} 
      onClose={toggleDrawer(false)} 
      anchor="right">
         <Box sx={{ width: 390, height:844 }} role="presentation" >
          
      
      <Login onClose={closeDrawer}/>
   </Box>
      </Drawer>
    </div>
    
    </div>
            
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
