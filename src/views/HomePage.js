import React from "react";
import "./HomePage.css";
import './aboutUs.css';

function HomePage() {


  return (
   
    <div className="relative h-screen bg-cover bg-top bg-fixed" style={{ backgroundImage: "url('/sunrise_sotare.jpeg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent">
      <span className="absolute lg:top-4 top-4 lg:right-4 right-1/2 transform lg:translate-x-0 translate-x-1/2 lg:mr-4 ml-0 pl-10 lg:pr-6 lg:mt-18 pt-20 text-3xl lg:text-6xl md:text-5xl text-white text-center lg:text-left">
  <p className="font-semibold">Välkommen till Eksjö Sot</p>

  <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-nowrap">
  Expert på sotning i din kommun
    <span className="block border-b-2 border-sot"></span>

    <button className="text-gray-100 text-2xl p-2 rounded-lg mt-2" style={{ backgroundColor: "#2b2f32" }}>Boka tid</button>
  </p>
</span>


        <div style={{ backgroundColor: "#2b2f32 " }}  className=" mb-10 rounded-lg  ml-5  lg:absolute lg:ml-12 pl-2 pr-2 bottom-20 absolute  lg:bottom-20 lg:pb-10 text-gray-100 lg:text-3xl text-xl font-bold ">
        <h2 className="border-b-2 border-sot"> Våra tjänster</h2>  
            <ul className="lg:text-2xl text-lg   mt-2">
              <li> Rengöring av eldstäder, imkanaler och fläktar</li>
              <li>Besiktningar vid överlåtelse, nyinstallationer, status</li>
              <li>Sotning och brandskyddskontroller enligt LSO</li>
              <li>Övriga tjänster inom området</li>
            </ul>
                           
            </div>

      
         
       
      </div>
     
    </div>

  );
}

export default HomePage;
