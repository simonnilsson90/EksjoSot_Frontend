import React from 'react';
import aboutUsData from '../data/aboutUsData'; 
import Image from 'mui-image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";
import { useEffect } from 'react';
/*
*/


const OmPage  = () => {
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
      <h1 className="lg:text-4xl text-4xl border-sotOrange lg:border-none lg:border-b-0  border-b-2 text-start ">{aboutUsData.title}</h1>

  </div> 
           
  <div className=" section bg-sot text-gray-100 lg:mx-10 mx-4 lg:mt-10 ">
           
        
     

      <div className=' md:flex md:flex-row-reverse md:mb-4  '>
     
     
     <div className='lg:hidden  flex justify-center mx-auto  p md:w-1/2 '> 
 <Image className='mx-auto items-center '
   src={`${process.env.PUBLIC_URL}/chimneys.jpg`}
   style={{
   
      width: '100%', // Sätt bredden till 50% av föräldraelementet
   }}
 />
</div>
<p className=' mb-2 mt-2 md:w-1/2 lg:w-full md:mr-3 '>{aboutUsData.vision.content}</p>
    
     </div>
     
      <div className=' md:flex md:flex-row-reverse  '>
     
     
      <div className='lg:hidden bg-white flex justify-center mx-auto px-24 py-4 md:w-1/2 '> 
  <Image className='mx-auto items-center '
    src={`${process.env.PUBLIC_URL}/riks.png`}
    style={{
      width: '100%', // Sätt bredden till 50% av föräldraelementet
      height: 'auto', // Höjden är auto för att behålla bildens proportioner
      objectFit: 'cover', // Klipp bilden för att täcka området
      objectPosition: 'top' // Positionera bilden från toppen
    }}
  />
</div>
<p className=' mb-2 mt-2 md:w-1/2 lg:w-full md:mr-3 '>{aboutUsData.whatWeDo.content}</p>
     
      </div>
    
                    

                    <div>
        
     
    
              
                   
                </div>
               
            </div>

        </div>

      
        <div className='  w-full ' >
        <Footer/>
        </div>
       
    </div>
    </div>
  
    );
  }
  
  export default OmPage;
  