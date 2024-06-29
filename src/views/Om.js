import React from 'react';
import aboutUsData from '../data/aboutUsData'; 
import Image from 'mui-image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";


const OmPage  = () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
        <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 

        <div className="flex flex-col lg:flex-row lg:flex-wrap p-4 gap-4 mb-10 pb-10"> 
            <div className="section bg-sot text-gray-100 lg:mx-16 mx-4 " >
           
            
                <div>
                <h1 className="lg:text-4xl text-4xl border-sotOrange  border-b-2 pb-2 mb-6">{aboutUsData.title}</h1>
                <Card >
      <CardContent>
      <p className='mb-1'>{aboutUsData.vision.content}</p>
                    
                    <p className=' mb-2'>{aboutUsData.whatWeDo.content}</p>

                    <div>
        <Image
            width={100}
            src={`${process.env.PUBLIC_URL}/sveriges-sk.png`}
            sx={{
              borderRadius: '100%',
              borderColor: 'grey.100',
              mr: 2,
             
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          />
        </div>
      </CardContent>
    </Card>
              
                   
                </div>
               
            </div>

        </div>

      
        <div className='  w-full' >
        <Footer/>
        </div>
       
    </div>
    </div>
  
    );
  }
  
  export default OmPage;
  