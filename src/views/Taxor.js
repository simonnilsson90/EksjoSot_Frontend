import React from "react";
import taxorData from "../data/taxorData";
import Footer from "../components/footer/FooterComponent";
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';


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
    
        
  <div className="flex flex-col lg:flex-row lg:flex-wrap p-4 gap-4 mb-10 pb-10 lg:mb-16">  

     <div className="     text-white px-10  space-y-2 lg:mt-4 lg:mb-4  "  >
      <h1 className="lg:text-4xl text-4xl border-sotOrange lg:border-none lg:border-b-0  border-b-2 text-start ">Sotningstaxa</h1>

  </div> 
  
 
  <div className=" section bg-sot text-gray-100 lg:mx-10 mx-4 lg:mt-12 ">
          
         
          
            <h2 className='text-2xl mb-2 mt-4'>{taxorData.whatWeDo.title}</h2>
              <p className="">Vi är medlemmar i Sveriges Skorstensfejarmästares Riksförbund och har avtal att utföras sotningstjänster i Eksjö och Västerviks kommuner. </p>
             <p>Vår främsta uppgift är att förebygga bränder i samhället och det gör vi genom lagstadgad sotning och brandskyddskontroll enligt LSO, Lagen om skydd mot olyckor.</p>
              <div>
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
             
          </div>

          
        
      </div>


  </div>
  <div className="  w-full "> 
  <Footer />
  </div>
 
</div>
</div>
    );
  }
  
  export default TaxorPage;
  