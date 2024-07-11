import React from 'react';
import './aboutUs.css';
import Accordion from '../components/Accordion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutComponent from '../components/layout';
import Button from '@mui/material/Button';


const SotningPage  = () => {
    useEffect(() => {
      const updateBackground = () => {
          const element = document.getElementById('background-element');
          if (window.innerWidth >= 768) { // 1024px motsvarar 'lg' i Tailwind CSS
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
      <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen
        md:bg-gradient-to-b md:from-black/70 md:via-transparent md:to-transparent md:min-h-screen pt-10 ">

<LayoutComponent
title={"Sotning"}
text1={<div >
  <p className=' mb-4'>Sotning innebär att brännbara sotbeläggningar tas bort i sådan omfattning att risken för skorstensbrand och skadeverkningarna vid en skorstensbrand minimeras. Vid sotning av eldstäder och rökkanaler innebär detta att alla ytor som rökgaserna passerar rengörs.</p>

</div> }
bild1={ <img src={`${process.env.PUBLIC_URL}/chimney-day.jpg`} className='object-cover  '/> }


text2={<p> Hur ofta sotning ska göras bestäms av kommunen. I varje kommun finns det lokala föreskrifter för rengöring (sotning). Imkanalen, köksfläktens anslutning till skorstenen/ ventilationssystemet i bostadshus, omfattas inte längre av kravet på sotning.
Trots detta behöver imkanalen rengöras med jämna mellanrum, om inte annat av funktionsmässiga skäl. Ansvaret för rengöring av imkanalen ligger på fastighetsägaren. </p>}

   bild2={ <img src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} className='object-cover  '/> }

   text3={<div>
    <p className='font-semibold'>Säkerheten på ditt tak är viktig för oss. Du som fastighetsägare har ansvar för att de säkerhetsanordningar som finns föreskrivet i lag finns på plats och är väl underhållna. </p>
     
     <div className=' mb-10' > 
    <Link to={"/tjanster"}> 
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "1rem",
                      textTransform: "none",
                      width: "20rem",
                      color: "white",
                      marginBottom: "8px",
                      backgroundColor: "rgb(224, 95, 51)",
                      border: "0px",
                      fontSize: "1.5rem",
                      lineHeight: "2rem",
                      borderRadius: "0rem"  
                    }}
                  >
                   Mer om säkerhet →
                  </Button>
                  </Link>
                  </div>
                  <p className=' font-semibold'>Numera kan vi också i vissa fall sota din rökkanal underifrån.</p>
    <Link to={"/tjanster"}> 
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "1rem",
                      textTransform: "none",
                      width: "20rem",
                      color: "white",
                      marginBottom: "2px",
                      backgroundColor: "rgb(224, 95, 51)",
                      border: "0px",
                      fontSize: "1.5rem",
                      lineHeight: "2rem",
                      borderRadius: "0rem"  
                    }}
                  >
                   Mer om stavsotning →
                  </Button>
                  </Link>
     </div> }

bild3={ <img src={`${process.env.PUBLIC_URL}/feet.jpg`} className='object-cover  '/> }

/>




    
        
    </div>
    </div>
    );
  }
  
  export default SotningPage;
  