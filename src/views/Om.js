import React from 'react';
import aboutUsData from '../data/aboutUsData'; 
import Image from 'mui-image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";


const OmPage  = () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }} >
        <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 

        <div className="flex flex-col lg:flex-row lg:flex-wrap p-4 gap-4 mb-10 pb-10"> 
            <div className="section  text-black bg-white lg:mx-16 mx-4 " >
           
            
                <div>
                <h1 className="lg:text-4xl text-4xl pb-2 mb-6 text-start">{aboutUsData.title}</h1>
               
      
      <p className='mb-1'>{aboutUsData.vision.content}</p>
      <Image className='lg:hidden'
            
            src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
            sx={{
              mr: 1,
              width: '100%', // Sätt bredden till 100% av föräldraelementet
              height: 'auto', 
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          />   
                    <p className=' mb-2'>{aboutUsData.whatWeDo.content}</p>

                    <div>
        
        </div>
    
              
                   
                </div>
               
            </div>

        </div>

      
        <div className='  w-full absolute bottom-0' >
        <Footer/>
        </div>
       
    </div>
    </div>
  
    );
  }
  
  export default OmPage;
  