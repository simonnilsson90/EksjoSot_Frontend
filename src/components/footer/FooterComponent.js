import React from "react";
import { Link } from 'react-router-dom';  
import Image from "mui-image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const Footer = () => {
  return (
    <div class="bg-gray-100">
    <div class="w-full mx-auto px-4 sm:px-6  bg-sot  flex-wrap flex justify-between">
        <div class="p-5">
        <div className="  border border-white rounded-full justify-between items-center">
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

           
            <Link to={"/tjanster/brandskyddskontroll"} class="my-3 block text-gray-100" >Brandskyddskontroll <span class="text-teal-600 text-xs p-1"></span>
            </Link>
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
<div>
<Link class="my-3 block text-gray-100" to={"/sotningens-historia"}>Sotingens historia <span class="text-gray-100 text-xs p-1"></span>
</Link>
</div>
           
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
