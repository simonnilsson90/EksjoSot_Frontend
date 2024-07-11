import React from "react";
import LayoutComponent from '../components/layout';
import './aboutUs.css';
import { useEffect } from 'react';

import tjansterData from "../data/ovriga-tjansterData";


const OvrigaTjansterPage= () => {
    
    useEffect(() => {
        const updateBackground = () => {
            const element = document.getElementById('background-element');
            if (window.innerWidth >= 768) {
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
        <div className="lg:bg-gradient-to-b lg:from-black/70 lg:via-transparent lg:to-transparent lg:min-h-screen
        md:bg-gradient-to-b md:from-black/70 md:via-transparent md:to-transparent md:min-h-screen pt-10 ">
    <LayoutComponent 
    title={tjansterData.title}
    pretext={tjansterData.description}
    text1={<div className=" pb-4 lg:pb-0 md:pb-0">
        <h2 className="lg:text-2xl text-xl font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.whatWeDo.title}</h2>
        <p>{tjansterData.whatWeDo.content}</p>
    </div>}
    bild1={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
    text2={<div className=" pb-4 lg:pb-0 md:pb-0">
       <h2 className="lg:text-2xl text-xl font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.ourCulture.title}</h2>
        <p>{tjansterData.ourCulture.content}</p></div>}
        bild2={<img src={`${process.env.PUBLIC_URL}/fireplace.jpg`} className='object-cover  '/>}
        text3={<div className=" pb-4 lg:pb-0 md:pb-0">
           <h2 className="lg:text-2xl text-xl font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.communityOutreach.title}</h2>
            <p>{tjansterData.communityOutreach.content}</p></div>}
            bild3={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
          
                text4={<div className=" pb-4 lg:pb-0 md:pb-0">
                    <h2 className="lg:text-2xl text-xl font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.vision.title}</h2>
                    <p>{tjansterData.vision.content}</p></div>}
                     bild4={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
                   
                   
                   
                   
                   text5={<div className=" pb-4 lg:pb-0 md:pb-0">
                       <h2 className="lg:text-2xl text-xl font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.howWeStandOut.title}</h2>
                        <p>{tjansterData.howWeStandOut.content}</p></div>}
                         bild5={<img src={`${process.env.PUBLIC_URL}/stork.jpg`} className='object-cover  '/>}



/>
</div>
        </div>

        
    );
  }
  
  export default OvrigaTjansterPage;
 