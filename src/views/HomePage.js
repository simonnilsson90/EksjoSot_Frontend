import React from "react";
import "./HomePage.css";
import './aboutUs.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';  
import Footer from "../components/footer/FooterComponent";


/*
npm run build
npm run deploy

*/


function HomePage() {
  return (
<div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sunrise_sotare.jpeg)` }} >
<div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen"> 

   
        <div className="flex flex-col md:items-center items-center lg:items-start lg:pl-12 lg:pr-4 pt-36 mb-4">
          <div className="text-center md:text-center lg:text-left lg:absolute lg:right-12 lg:top-36">
            <span className="text-3xl lg:text-6xl md:text-5xl text-white">
              <p className="font-semibold">Välkommen till EksjöSot</p>
          
              
              <p className="lg:text-4xl md:text-4xl text-xl font-bold">
                Expert på sotning i din kommun
                <span className="block border-b-2 border-sot mt-1"></span>
                <Link to={"/kontakt"}> 
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    textTransform: "none",
                    width: "14rem",
                    color: "white",
                    marginBottom: "2px",
                    backgroundColor: "#2b2f32",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0.5rem"
                  }}
                >
                  Kontakta oss
                </Button>
                </Link>
              </p>
            </span>
          </div>

          <div style={{ backgroundColor: "#2b2f32" }} className=" lg:mt-72 mt-12 lg:rounded-lg lg:mx-5 w-full lg:w-2/5 lg:ml-0 p-2  text-gray-100 lg:text-3xl text-xl font-semibold">
            <h2 className="border-b-2 border-sot">Våra tjänster</h2>
            <ul className="lg:text-xl text-sm  mt-2 space-y-1">
              <li className="flex  "><p className=" my-auto mr-1 mt-1">*</p> <p></p>Rengöring av eldstäder, imkanaler och fläktar</li>
              <li className="flex  "><p className=" my-auto mr-1 mt-1">*</p> <p></p> Besiktningar vid överlåtelse, nyinstallationer, status</li>
              
              <li>* Sotning och brandskyddskontroller</li>
              <li>* Övriga tjänster inom området</li>
            </ul>
          </div>
        </div>
       
      
      </div>
     
        <Footer/>
       
    </div>
  );
}

export default HomePage;
