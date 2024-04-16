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
                <Link to ="/" id="logoContainer">
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
                </Link>
                <div id="linksContainer" className={isMenuOpen ? "open" : ""}>
                    <li className="navbarLink">
                        <Link to="/" onClick={closeDrawer}>Home</Link>
                    </li>
                    <li className="navbarLink">
                        <Link to="/market">Marketplace</Link>
                    </li>

                    <li className="navbarLink">
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li className="navbarLink">
                        <Link to="/contactUs">Contact Us</Link>
                    </li>
                    <li className="navbarLink">
                        <Link to="/FaQ">FaQ</Link>
                    </li>
                    <li className="navbarLink">
                        <Link to="/LogIn">
                            <Button onClick={toggleDrawer(true)}>
                                <img src={UserPic} width={30} height={30} alt="User"/>
                                <p>Login</p>
                            </Button>
                            <Drawer open={open}
                                    onClose={toggleDrawer(false)}
                                    anchor="right">
                                <Box sx={{width: 390, height: 844}} role="presentation">
                                    <Login onClose={closeDrawer}/>
                                </Box>
                            </Drawer>
                        </Link>
                    </li>
                    <li>
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
