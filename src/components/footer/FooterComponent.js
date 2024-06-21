import React from "react";
import "./footerComponent.css";
import LinkedInIcon from "../../assets/icons/linkedin_icon.svg";
import GithubIcon from "../../assets/icons/github_icon.svg";
import XIcon from "../../assets/icons/x_icon.svg";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="text-gray-100" id="links-container">
        <div >Kontakt</div>
        <div>API</div>
        <div>FAQ</div>
        <div id="copyright-container">
        <span>@2024</span>
        <a href="/">Sotarna i Eksjö</a>
      </div>
      </div>
      {/* 
      <div id="socials-container">
        <div id="socials-links">
          <div className="socials-icon">
            <a href="https://twitter.com">
              <img className="x-icon" src={XIcon} alt="X" />
            </a>
          </div>
          <div className="socials-icon">
            <a href="https://linkedin.com">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
          </div>
          <div className="socials-icon">
            <a href="https://github.com">
              <img src={GithubIcon} alt="Github" />
            </a>
          </div>
        </div>
      </div>
      <div id="copyright-container">
        <span>@2023</span>
        <a href="/">The Everyone Store</a>
      </div>
      */}
      
    </div>
  );
};

export default Footer;
