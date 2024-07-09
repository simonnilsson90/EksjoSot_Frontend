import React from 'react';
import './aboutUs.css';

import { useEffect } from 'react';

import LayoutComponent from '../components/layout';

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
text1={"Sotning innebär att brännbara sotbeläggningar tas bort i sådan omfattning att risken för skorstensbrand och skadeverkningarna vid en skorstensbrand minimeras. Vid sotning av eldstäder och rökkanaler innebär detta att alla ytor som rökgaserna passerar rengörs."}
bild1={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
text2={"Hur ofta sotning ska göras bestäms av kommunen. I varje kommun finns det lokala föreskrifter för rengöring (sotning). Imkanalen, köksfläktens anslutning till skorstenen/ ventilationssystemet i bostadshus, omfattas inte längre av kravet på sotning. Trots detta behöver imkanalen rengöras med jämna mellanrum, om inte annat av funktionsmässiga skäl. Ansvaret för rengöring av imkanalen ligger på fastighetsägaren."}
bild2={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
text3={"Säkerheten på ditt tak är viktig för oss. Du som fastighetsägare har ansvar för att de säkerhetsanordningar som finns föreskrivet i lag finns på olats och är väl underhållna. Läs mer här →"}
text4={"Numera kan vi också i vissa fall sota din rökkanal underifrån- Läs mer om stavsotning här →"}
/>




    
        
    </div>
    </div>
    );
  }
  
  export default SotningPage;
  