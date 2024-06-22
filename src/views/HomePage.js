import React from "react";
import "./HomePage.css";
import './aboutUs.css';
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <div className="relative h-screen bg-cover bg-top bg-fixed" style={{ backgroundImage: "url('/sunrise_sotare.jpeg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent">
        <div className="flex flex-col md:items-center items-center lg:items-start lg:pl-12 lg:pr-4 pt-36">
          <div className="text-center md:text-center lg:text-left lg:absolute lg:right-12 lg:top-24">
            <span className="text-4xl lg:text-6xl md:text-5xl text-white">
              <p className="font-semibold">Välkommen till EksjöSot</p>
              <p className="lg:text-4xl md:text-4xl text-2xl font-bold">
                Expert på sotning i din kommun
                <span className="block border-b-2 border-sot"></span>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "1rem",
                    textTransform: "none",
                    width: "10rem",
                    color: "white",
                    marginBottom: "2px",
                    backgroundColor: "#2b2f32",
                    border: "0px",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    borderRadius: "0.5rem"
                  }}
                >
                  Boka tid
                </Button>
              </p>
            </span>
          </div>

          <div style={{ backgroundColor: "#2b2f32" }} className=" lg:mt-80 mt-48 rounded-lg mx-5 lg:ml-0 p-2 lg:w-3/7 text-gray-100 lg:text-3xl text-xl font-semibold">
            <h2 className="border-b-2 border-sot">Våra tjänster</h2>
            <ul className="lg:text-xl text-base mt-2 space-y-1">
              <li>-Rengöring av eldstäder, imkanaler och fläktar</li>
              <li>-Besiktningar vid överlåtelse, nyinstallationer, status</li>
              <li>-Sotning och brandskyddskontroller enligt LSO</li>
              <li>-Övriga tjänster inom området</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
