import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-sot text-gray-100">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div>
          <a href="/kontakt" className="text-white hover:text-gray-300 mr-4">
            Kontakt
          </a>
        </div>
        <div className="text-white">
          <span>&copy; {new Date().getFullYear()} Sotarna i Eksjö</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
