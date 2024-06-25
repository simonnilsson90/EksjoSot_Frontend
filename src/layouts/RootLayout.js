import React from "react";
import Navbar from "../components/navbar/NavbarComponent";
import Footer from "../components/footer/FooterComponent";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
 
    <div className="">
      <Navbar />

      <main className="">
        <Outlet />
      </main>

    
    </div>
   
    
  );
}

export default RootLayout;
