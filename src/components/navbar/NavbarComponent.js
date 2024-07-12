import * as React from 'react';
import { Image } from 'mui-image';
import { Link } from 'react-router-dom'
import { useState } from "react";
import {
  
  MoonIcon,
  SunIcon,
  Bars3Icon,
  
} from "@heroicons/react/24/outline";


function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div>
    <div className="app bg-sot text-white">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-4">
              {/* logo */}
              
                <div className=' flex '> 

                
              <Link className='mr-4' to="/">
          <Image className='border border-white rounded-full  lg:w-9 '
            width={65}
            src={`${process.env.PUBLIC_URL}/eksjo-new-logo.png`}
            sx={{
              mr: 1,
              display: {  md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          />
        </Link>
        <Link to="/">
         
        </Link>
        </div>
            
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
              <Link className=' hover:border-b-2 border-sotOrange'  to={"/"}>Hem</Link>
              <Link  className=' hover:border-b-2 border-sotOrange' to="/tjanster">Tjänster</Link >
              <Link className='hover:border-b-2 border-sotOrange pl-2' to="/taxor" onClick={closeMenu}>Taxor</Link>
                <Link className=' hover:border-b-2 border-sotOrange'  to={"/om"}>Om oss</Link>
                <Link className=' hover:border-b-2 border-sotOrange'  to={"/kontakt"}>Kontakta oss</Link>
                <Link className=' hover:border-b-2 border-sotOrange'  to={"/hallbarhet"}>Hållbarhet</Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6 bg-pink-700" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobilnavigation */}
        <div
          className={`fixed z-40 w-full bg-sot overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <Link className='hover:border-b-2 border-sotOrange mt-4 ' to={"/"} onClick={closeMenu}>Hem</Link>
              <Link className='hover:border-b-2 border-sotOrange' to="/tjanster" onClick={closeMenu}>Tjänster</Link>
              <Link className='hover:border-b-2 border-sotOrange' to="/taxor" onClick={closeMenu}>Taxor</Link>
              <Link className='hover:border-b-2 border-sotOrange ' to={"/om"} onClick={closeMenu}>Om oss</Link>
              <Link className='hover:border-b-2 border-sotOrange ' to={"/kontakt"} onClick={closeMenu}>Kontakta oss</Link>
              <Link className='hover:border-b-2 border-sotOrange ' to={"/hallbarhet"} onClick={closeMenu}>Hållbarhet</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className=' bg-white w-full lg:px-20   justify-between   pt-2 '>
      <div className='w-5/6 flex mx-auto justify-between'>

      
      <p className=' '>
      Sotning &<br />
            Ventilation<br />
            i Eksjö AB
      </p>

      <img src={`${process.env.PUBLIC_URL}/ISO.png`} className="h-16 w-auto pt-2" />


      <img src={`${process.env.PUBLIC_URL}/riks.png`}  className=' h-20 w-auto  pb-2  '/>
     </div>
     </div>
    </div>
  );
}

export default NavBar;

