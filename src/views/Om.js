import React from 'react';
import aboutUsData from '../data/aboutUsData'; 
import LayoutComponent from '../components/layout';
import './aboutUs.css';
import { useEffect } from 'react';


const OmPage  = () => {
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
     title={aboutUsData.title}
     pretext="Vi finns i Eksjö och Västervik och här i dessa kommuner ansvarar vi för den lagstadgade sotningen och brandskyddskontrollen på uppdrag av kommunerna."
     text1={aboutUsData.vision.content}
     bild1={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
     text2={aboutUsData.whatWeDo.content}
     bild2={<img src={`${process.env.PUBLIC_URL}/riks.png`} className='object-cover py-2  '/>}
    
     
     />
       
    </div>
    </div>
  
    );
  }
  
  export default OmPage;
  