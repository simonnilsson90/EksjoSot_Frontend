import React from "react";
import Navbar from "../components/navbar/NavbarComponent";
import Footer from "../components/footer/FooterComponent";
import { Outlet } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';

function RootLayout() {
  return (
 
    <div className="">
        <ScrollToTop />
      <Navbar />

      <main className="">
        <Outlet />
      </main>

    
    </div>
   
    
  );
}

export default RootLayout;
