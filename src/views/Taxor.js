import React from 'react';

import LayoutComponent from '../components/layout';
import './aboutUs.css';


import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const TaxorPage  = () => {
  
  
    return (
      <div
      id="background-element"
      className="lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)`,
        backgroundPosition: 'right top', // Default position för större skärmar
        '@media (max-width: 768px)': {
          backgroundPosition: 'right bottom', // Position för mindre skärmar
        },
      }}
    >
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10 ">

     <LayoutComponent

title={"Sotningstaxa"}

text1={ <div>
  <h2 className=' text-2xl mb-2 mt-4 '>Länkar till respektive kommun:</h2>
                                  <Link  to={"https://eksjo.se/bo-miljo-och-trafik/ditt-boende/brandskyddskontroll-och-rengoring-sotning"}>
                                       <div className=" flex ">
                                       <h2 className=" pr-2">Eksjö</h2>
                                       <ArrowForwardIcon className=" text-sotOrange mb-1 " > </ArrowForwardIcon>
                                       </div>
                                       </Link>
                                       <Link to={"https://www.vastervik.se/Bygga-bo-och-miljo/Brandskydd-sotning/Sotning/"}>
                                       <div className=" flex ">
                                       <h2> Västervik</h2>
                                       <ArrowForwardIcon className=" text-sotOrange " > </ArrowForwardIcon>
                                       </div>
                                       </Link>
                                      
                                   </div>}
     bild1={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
    
     
     />
  
     

       
    </div>
    </div>
  
    );
  }
  
  export default TaxorPage;
  
  

/*
import React from "react";
import taxorData from '../data/taxorData';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from 'react';
import LayoutComponent from "../components/layout";



const TaxorPage = () => { 
  useEffect(() => {
    const updateBackground = () => {
        const element = document.getElementById('background-element');
        if (window.innerWidth >= 1024) { // 1024px motsvarar 'lg' i Tailwind CSS
            element.style.backgroundImage = `url(${process.env.PUBLIC_URL}/chimneys.jpg)`;
            element.classList.add('bg-cover', 'bg-fixed');
        } else {
            element.style.backgroundImage = 'none';
            element.classList.remove('bg-cover', 'bg-fixed');
        }
    };
  
    updateBackground(); // Kör en gång vid laddning
    window.addEventListener('resize', updateBackground); // Lägg till eventlyssnare för att hantera förändringar i storlek
    
    return () => {
      window.removeEventListener('resize', updateBackground); // Ta bort eventlyssnaren vid nedmontering
  };
}, []);
    return (
      <div id="background-element" className="min-h-screen bg-sot">
      <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen pt-10">
   
    <LayoutComponent
     title={taxorData.title}
     
    />
        

 
</div>
</div>
    );
  }
  
  export default TaxorPage;

  /* 
  text1={ <div>
     <h2 className=' text-2xl mb-2 mt-4 '>Länkar till respektive kommun:</h2>
                                     <Link  to={"https://eksjo.se/bo-miljo-och-trafik/ditt-boende/brandskyddskontroll-och-rengoring-sotning"}>
                                          <div className=" flex ">
                                          <h2 className=" pr-2">Eksjö</h2>
                                          <ArrowForwardIcon className=" text-sotOrange mb-1 " > </ArrowForwardIcon>
                                          </div>
                                          </Link>
                                          <Link to={"https://www.vastervik.se/Bygga-bo-och-miljo/Brandskydd-sotning/Sotning/"}>
                                          <div className=" flex ">
                                          <h2> Västervik</h2>
                                          <ArrowForwardIcon className=" text-sotOrange " > </ArrowForwardIcon>
                                          </div>
                                          </Link>
                                         
                                      </div>}
                                        bild1={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover py-2  '
                                        />  }
  */
  