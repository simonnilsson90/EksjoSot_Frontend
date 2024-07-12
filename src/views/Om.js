import React from 'react';
import aboutUsData from '../data/aboutUsData'; 
import LayoutComponent from '../components/layout';
import './aboutUs.css';



const OmPage  = () => {
  
  
    return (
      <div 
      id="background-element" 
      className="min-h-screen bg-cover bg-fixed" 
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }}
    >
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10 ">

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
  