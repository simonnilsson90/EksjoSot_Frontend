import React from "react";
import LayoutComponent from '../components/layout';
import './aboutUs.css';
import { useEffect } from 'react';

import tjansterData from "../data/ovriga-tjansterData";


const OvrigaTjansterPage= () => {
    
    useEffect(() => {
        const updateBackground = () => {
            const element = document.getElementById('background-element');
            if (window.innerWidth >= 1024) {
                element.style.backgroundImage = `url(${process.env.PUBLIC_URL}/chimney-day.jpg)`;
                element.classList.add('bg-cover', 'bg-fixed');
            } else {
                element.style.backgroundImage = 'none';
                element.classList.remove('bg-cover', 'bg-fixed');
            }
        };

        updateBackground();
        window.addEventListener('resize', updateBackground);

        return () => {
            window.removeEventListener('resize', updateBackground);
        };
    }, []);
    return (
        <div id="background-element" className="min-h-screen bg-sot">
        <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen pt-10 ">
    <LayoutComponent 
    title={tjansterData.title}
    pretext={tjansterData.description}
    text1={<div>
        <h2 className="lg:text-2xl lg:mb-3">{tjansterData.whatWeDo.title}</h2>
        <p>{tjansterData.whatWeDo.content}</p>
    </div>}
    bild1={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
    text2={<div>
        <h2 className="lg:text-2xl lg:mb-3">{tjansterData.ourCulture.title}</h2>
        <p>{tjansterData.ourCulture.content}</p></div>}
        bild2={<img src={`${process.env.PUBLIC_URL}/fireplace.jpg`} className='object-cover  '/>}
        text3={<div>
            <h2 className="lg:text-2xl lg:mb-3">{tjansterData.communityOutreach.title}</h2>
            <p>{tjansterData.communityOutreach.content}</p></div>}
            bild3={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
          
                text4={<div>
                    <h2 className="lg:text-2xl lg:mb-3">{tjansterData.vision.title}</h2>
                    <p>{tjansterData.vision.content}</p></div>}
                     bild4={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
                   
                   
                   
                   
                   text5={<div>
                        <h2 className="lg:text-2xl lg:mb-3">{tjansterData.howWeStandOut.title}</h2>
                        <p>{tjansterData.howWeStandOut.content}</p></div>}
                         bild5={<img src={`${process.env.PUBLIC_URL}/stork.jpg`} className='object-cover  '/>}



/>
</div>
        </div>

        
    );
  }
  
  export default OvrigaTjansterPage;
  /* 
  <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
        <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 
    
        <div className="  rounded-xl   text-white p-6 mx-5 space-y-2 " style={{backgroundColor: "#322E2B"}} >
        <h1 className="lg:text-4xl text-4xl">{tjansterData.title}</h1>
        <p className=" lg:text-2xl  text-center">{tjansterData.description}</p>
    </div>

  <div className="content-grid ">
      <div className="vision section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.vision.title}</h2>
              <p>{tjansterData.vision.content}</p>
          </div>
      </div>

      <div className="what-we-do section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.whatWeDo.title}</h2>
              <p>{tjansterData.whatWeDo.content}</p>
          </div>
      </div>

      <div className="how-we-stand-out section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.howWeStandOut.title}</h2>
              <ul className="elegant-list">
                  {tjansterData.howWeStandOut.items}
              </ul>
          </div>
      </div>

      <div className="our-culture section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.ourCulture.title}</h2>
              <p>{tjansterData.ourCulture.content}</p>
          </div>
      </div>

      <div className="community-outreach section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.communityOutreach.title}</h2>
              <p>{tjansterData.communityOutreach.content}</p>
          </div>
      </div>

      <div className="why-choose-us section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.whyChooseUs.title}</h2>
              <p>{tjansterData.whyChooseUs.content}</p>
          </div>
      </div>

  </div>
  <Footer/>
</div>
</div>
  
  */