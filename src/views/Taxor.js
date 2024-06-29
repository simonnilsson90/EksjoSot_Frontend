import React from "react";
import taxorData from "../data/taxorData";
import Footer from "../components/footer/FooterComponent";
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const TaxorPage = () => { 
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }} >
        <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 
    
        

  
  <div className="flex flex-col lg:flex-row lg:flex-wrap p-4 gap-4 mb-10 pb-10">   
  
 
  <div className=" section bg-sot text-gray-100 lg:mx-16 mx-4 ">
          
          <h1 className="lg:text-4xl text-4xl border-sotOrange  border-b-2 pb-2 mb-6 ">Sotningstaxa</h1>  
          <Card >
            <CardContent className=" pl-4 pb-2">
            <h2 className='text-2xl mb-2 mt-4'>{taxorData.whatWeDo.title}</h2>
              <p className="mb-4">{taxorData.whatWeDo.content}</p>
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

            </CardContent>
            </Card> 
             
        
      </div>


  </div>
  <div className="  w-full"> 
  <Footer />
  </div>
 
</div>
</div>
    );
  }
  
  export default TaxorPage;
  