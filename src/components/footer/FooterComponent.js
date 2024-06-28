import React from "react";
import { Link } from 'react-router-dom';  

const Footer = () => {
  return (
    <footer className="mt-auto bg-sot text-gray-100">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div>
          <Link to={"/kontakt"}>
       
          <p className="text-white hover:text-gray-300 mr-4">
            Kontakt
          </p>
          </Link>
        </div>
        <div className="text-white">
          <span>&copy; {new Date().getFullYear()} Sotarna i Eksjö</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
