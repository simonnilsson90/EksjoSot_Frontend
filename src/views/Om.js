import React from 'react';
import aboutUsData from '../data/aboutUsData'; 
import LayoutComponent from '../components/layout';
import './aboutUs.css';



const OmPage  = () => {
  
  
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
      title={
        <div className=" lg:flex md:flex " >
<p className=" lg:mr-3 md:mr-3">Om</p>
<p>oss</p>
        </div>
    }
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
  