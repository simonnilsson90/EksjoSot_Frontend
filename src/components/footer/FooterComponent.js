import React from "react";
import { Link } from 'react-router-dom';  
import Image from "mui-image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/*
 <div className=" py-4 px-4 lg:flex justify-between items-center lg:mx-auto ">

      <div className=" flex lg:flex-none  justify-between items-center   ">

      
        <div className="  lg:border lg:border-white lg:rounded-full justify-between items-center">
        <Image
            width={110}
            src={`${process.env.PUBLIC_URL}/eksjo-new-logo.png`}
            sx={{
              mr: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          />
        </div>


     <div>   </div> 
<div className="text-white mr-16 lg:mr-0 ">
  <h2>Tjänster</h2>
  <div className=" text-sm">
  <p>Sotning</p>
  <p>Brandskydd</p>
  <p>Besiktning</p>
  <p>Övriga tjänster</p>
  </div>
  </div>
</div>


<div className=" flex mt-4 lg:mt-0  lg:border lg:border-white lg:rounded-full justify-between items-center ">
<div className="text-white lg:mt-0 mt-1">
  <h2>Om företaget</h2>
  <div className=" text-sm">
  <p>Personal</p>
  <p>Sotningens historia</p>
  <p>Sotarens lilla gris</p>
  </div>
 
</div>
    
        <div>
          <Link to={"/kontakt"}>
       
          <p className="text-white hover:text-gray-300 mr-10">
            Kontakta oss
          </p>
          </Link>
          <p>INFO@EKSJOSOT.SE</p>
          <p>010 - 410 25 60</p>
        </div>

        </div>
       
        <div className=" flex mt-4 lg:mt-0  lg:border lg:border-white lg:rounded-full justify-between items-center">
        <Card>
          <CardContent>
          <div >
          <Image
            width={100}
            src={`${process.env.PUBLIC_URL}/med.png`}
            sx={{
              mr: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          />
          </div>
            
           </CardContent>
           </Card>

           <Card>
          <CardContent>
           <Image
            width={140}
            src={`${process.env.PUBLIC_URL}/ISO.png`}
            sx={{
              mr: 1,
              mt: 5,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          />
           </CardContent>
           </Card>
            </div>
         

         
            
      </div>




*/ 

const Footer = () => {
  return (
    <div class="bg-gray-100">
    <div class="w-full mx-auto px-4 sm:px-6  bg-sot  flex-wrap flex justify-between">
        <div class="p-5">
        <div className="  lg:border lg:border-white lg:rounded-full justify-between items-center">
          <Link to={"/"}>
        <Image
            width={110}
            src={`${process.env.PUBLIC_URL}/eksjo-new-logo.png`}
            sx={{
              mr: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          />
           </Link>
        </div>
        </div>
        <div class="p-5">
            <div class="text-xs uppercase text-gray-100 font-medium">Tjänster</div>
<div className="my-3 block text-gray-100" >
<Link  to={"/tjanster/sotning/rengorning"}> 
<p>Sotning</p>
</Link>
</div>

           
            <a class="my-3 block text-gray-100" href="/#">Brandskyddskontroll <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <div className="my-3 block text-gray-100" >
<Link  to={"/tjanster/besiktningar"}> 
<p>Besiktningar</p>
</Link>
</div>

<div className="my-3 block text-gray-100" >
<Link  to={"/tjanster/ovriga-tjanster"}> 
<p>Övriga tjänster</p>
</Link>
</div>

            
        </div>
        <div class="p-5">
            <div class="text-xs uppercase  text-gray-100 font-medium">Om företaget</div>

            <div className="my-3 block text-gray-100" >
<Link  to={"/kontakt"}> 
<p>Personal</p>
</Link>
</div>
            <a class="my-3 block text-gray-100" href="/#">Sotingens historia <span class="text-gray-100 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100" href="/#">Sotarens lilla gris <span class="text-gray-100 text-xs p-1"></span>
            </a>
        </div>
        <div class="p-5">
            <div class="text-xs uppercase text-gray-100 font-medium">Kontakta oss</div>

            <a class="my-3 block text-gray-100" href="/#">010 - 410 25 60
                <span class="text-gray-100 text-xs p-1"></span>
            </a>

            <a class="my-3 block text-gray-100" href="/#">INFO@EKSJOSOT.SE
                <span class="text-gray-100 text-xs p-1"></span>
            </a>
        </div>
    </div>
</div>
  );
};

export default Footer;
