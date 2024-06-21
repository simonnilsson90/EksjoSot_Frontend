
import React, { useState } from "react";
import "./navbarComponent.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from "react-router-dom";

import Login from "../login/loginComponent";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";




function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <ul className="navbarContainer ">
          <Link to="/" id="logoContainer">
          <img
                  src={"/eksjo-logo-2.png"}
                  width={60}
                  height={60}
                  alt="shopping bag"
                />
            <span className="companyName text-lg ml-2">
              Sotning
              <br />
             & Ventilation
              <br />
              Eksjö AB
            </span>
          </Link>
          <div id="linksContainer" className={isMenuOpen ? "open" : ""}>
            <li className="navbarLink ">
              <Link to="/" onClick={closeDrawer}>
                Hem
              </Link>
            </li>
            <li className="navbarLink">
              <Link to="/tjanster">Tjänster</Link>
            </li>

            <li className="navbarLink">
              <Link to="/taxor">Taxor</Link>
            </li>

            <li className="navbarLink">
              <Link to="/om">Om oss</Link>
            </li>
            <li className="navbarLink">
              <Link to="/kontakt">Kontakt</Link>
            </li>
            <li className="navbarLink">
              <Link to="/FaQ">Hållbarhet</Link>
            </li>
            <li className="navbarLink">
              <Link to="/besiktningar">Besiktningar
                
              </Link>
            </li>
            <li className="navbarLink">
              <Button className="navbarLinkLogIn" onClick={toggleDrawer(true)}>
              
              <AccountCircleIcon style={{ fontSize: 25, color: 'white' }} />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                <Box sx={{ width: 390, height: 844 }} role="presentation">
                  <Login onClose={closeDrawer} />
                </Box>
              </Drawer>
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
    </>
  );
}

export default Navbar;
