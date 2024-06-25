import React from 'react';
import aboutUsData from '../data/aboutUsData'; 

import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";

const OmPage  = () => {
    return (
        <div className="relative h-dvh bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"> 
     
        <header className="header">
            <h1>{aboutUsData.title}</h1>
            <p>{aboutUsData.description}</p>
        </header>

        <div className="content-grid mb-20">
            <div className="vision section bg-sot text-gray-100">
                <div>
                    
                    <p>{aboutUsData.vision.content}</p>
                </div>
            </div>

            <div className="what-we-do section bg-sot text-gray-100">
                <div>
                 
                    <p>{aboutUsData.whatWeDo.content}</p>
                </div>
            </div>

           
        </div>
        <div className=' mt-20 bottom-0 absolute'>
        <Footer/>
        </div>
       
    </div>
    </div>
  
    );
  }
  
  export default OmPage;
  