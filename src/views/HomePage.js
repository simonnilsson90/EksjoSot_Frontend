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
<div className="min-h-screen bg-cover bg-fixed lg:bg-left-top bg-center    " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimney-sweep.jpg)` }} >
<div className="bg-gradient-to-b lg:from-black/20 lg:to-black/60 from-black/20 to-black/50 min-h-screen">

   
        <div className="flex flex-col md:items-center items-center lg:items-start lg:pl-12 lg:pr-4 pt-32 ">
          <div className="text-center md:text-center lg:text-left lg:absolute lg:right-12 ">
            <span className="text-3xl lg:text-6xl md:text-5xl text-white">
              <p className="font-semibold">Välkommen till EksjöSot</p>
          
              
              <p className="lg:text-4xl md:text-4xl text-xl font-bold">
                <p> Expert på sotning</p>
                 <p>i din kommun </p>
                <span className="block lg:border-b-2 border-sot mt-1"></span>
                <Link to={"/kontakt"}> 
               
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    textTransform: "none",
                    width: "14rem",
                    color: "white",
                    marginBottom: "2px",
                   
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0rem"
                  }}
                >
                  Kontakta oss
                </Button>
                </Link>
              </p>
            </span>
          </div>

          <div  className=" lg:mt-56 mt-4 lg:mx-5 w-full lg:w-2/5 lg:ml-0 pl-10 pt-4 pb-4 mx-auto pr-10  text-white lg:text-3xl text-xl font-semibold">
            <h2 className="border-b-2 border-sot">Våra tjänster</h2>
            <ul className="lg:text-lg text-sm  mt-2 space-y-1 list-disc pl-5">
              <li className=" ">Rengöring av eldstäder, imkanaler och fläktar</li>
              <li className="  "> Besiktningar vid överlåtelse, nyinstallationer, status</li>
              
              <li> Sotning och brandskyddskontroller</li>
              <li> Övriga tjänster inom området</li>
            </ul>
          </div>
        </div>
       
      
      </div>
     
        <Footer/>
       
    </div>
  );
}

export default HomePage;
