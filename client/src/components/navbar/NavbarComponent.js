import Logo from "../../assets/images/homepage/logo.png";
import UserPic from "../../assets/images/homepage/user.png";
import React, {useState} from "react";
import "./navbarComponent.css";
import {Link} from "react-router-dom";
import Login from "../login/loginComponent";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


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
        setOpen(false)
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
                        The<br/>EveryOne<br/>Store
                    </span>
                </a>
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
                        <a href="FaQ">FaQ</a>
                    </li>
                    <li className="navbarLink">
                        <Button onClick={toggleDrawer(true)}>
                            <img src={UserPic} width={40} height={40} alt="User Picture"/>
                            <p>Login</p>
                        </Button>
                        <Drawer open={open}
                                onClose={toggleDrawer(false)}
                                anchor="right">
                            <Box sx={{width: 390, height: 844}} role="presentation">
                                <Login onClose={closeDrawer}/>
                            </Box>
                        </Drawer>

                        <Link id="shoppingBag" to="/myShopping">
                            <img src={'/shopping-bag.svg'} width={25} height={25} alt="shopping bag"/>
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
