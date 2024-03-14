import Logo from "../assets/images/homepage/logo.png";
import UserPic from "../assets/images/homepage/user.png";
import React from "react";

function Navbar() {

  const flex = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center", 
    listStyle: "none",
  };
  
  const color = {
    textDecoration: "none",
    color: "black",
    alignItems: "center",
  }

  const listItemStyle = {
    margin: "0 10px" 
  };

  const listItemStyle2 = {
    margin: "0 20px" 
  };

  const logoLinkStyle = {
    marginRight: "10px", 
  };

  const profileStyle = {
    marginRight: "30px",
  };

  const navbarBrand = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "black",
  }

  const displayAlign = {
    display: "flex", 
    alignItems: "center",
  }

  const border = {
    borderBottom: "2px solid lightgray"
  }


  return (
    <div>
      <nav style={border}>
        <ul style={flex}>
          <div>
           
            <li style={navbarBrand }>
              <a style={color} href="/">
                <img style={logoLinkStyle} src={Logo} alt="Logo picture" />    
                The Everyone Store
              </a>
            </li>
         
          </div>
          <div style={displayAlign}>
            <li style={listItemStyle}>
              <a style={color} href="/">Home</a>
            </li>
            <li style={listItemStyle}>
              <a style={color} href="market">Marketplace</a>
            </li>
            <li style={listItemStyle}>
              <a style={color} href="#">Account</a>
            </li>
            <li style={listItemStyle}>
              <a style={color} href="#">About Us</a>
            </li>
            <li style={listItemStyle2}>
              <a style={color} href="#">Contact Us</a>
            </li>
            <li style={{...listItemStyle, ...profileStyle}}>
              <a href="#" className="me-4">
                <img src={UserPic} width={40} height={40} alt="User Picture" />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
