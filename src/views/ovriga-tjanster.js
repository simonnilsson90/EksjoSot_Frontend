import React from "react";
import LayoutComponent from '../components/layout';
import './aboutUs.css';
import Accordion from "../components/Accordion";

import tjansterData from "../data/ovriga-tjansterData";


const OvrigaTjansterPage= () => {
    
   
    return (
      <div
      id="background-element"
      className="lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/chimney-day.jpg)`,
        backgroundPosition: 'right top', // Default position för större skärmar
        '@media (max-width: 768px)': {
          backgroundPosition: 'right bottom', // Position för mindre skärmar
        },
      }}
    >
        <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10 ">
          <LayoutComponent
            title={
                <div className=" lg:flex md:flex " >
<p className=" lg:mr-3 md:mr-3">Övriga</p>
<p>tjänster</p>
                </div>
            }
    pretext={tjansterData.description}
    text1={<div className=" pb-4 lg:pb-0 md:pb-0">
        <h2 className="text-2xl  font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.whatWeDo.title}</h2>
        <p>{tjansterData.whatWeDo.content}</p>
    </div>}
    bild1={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
    text2={<div className=" pb-4 lg:pb-0 md:pb-0">
       <h2 className="text-2xl  font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.ourCulture.title}</h2>
        <p>{tjansterData.ourCulture.content}</p></div>}
        bild2={<img src={`${process.env.PUBLIC_URL}/fireplace.jpg`} className='object-cover  '/>}
        text3={<div className=" pb-4 lg:pb-0 md:pb-0">
           <h2 className="text-2xl  font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.communityOutreach.title}</h2>
           <p className=" mb-2">Om du funderar på att installera en braskamin i befintlig skorsten eller ska nyinstallera en eldstad kan det vara bra att fråga sotaren först.</p>
           <Accordion title={"Läs mer"}
           content={"Du kan ringa in till kundtjänst och be att få tala med en skorstensfejartekniker. Denne ringer då upp dig på avtalad tid och du kan få svar utan kostnad på generella frågor om skorstenar och eldstäder. Om du däremot har specifika frågor som gäller din fastighet kan det vara svårt att svara på det utan att undersöka skorstenen på plats. Det kallas då “Råd och anvisningar” och en tekniker kommer då ut till dig på en bokad tid till ett fast pris. Det kan vara en god idé att kontrollera med sotaren innan du går vidare med ditt inköp, då vet du att du gör rätt från början. Observera att detta inte är någon besiktning av eldstaden. Vill du ha din befintliga eldstad kontrollerad ska du i stället beställa en statuskontroll som du hittar här "}
           
           />
            </div>}
            bild3={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
          
                text4={<div className=" pb-4 lg:pb-0 md:pb-0">
                    <h2 className="text-2xl  font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.vision.title}</h2>
                    <p>{tjansterData.vision.content}</p></div>}
                     bild4={<img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/>}
                   
                   
                   
                   
                   text5={<div className=" pb-4 lg:pb-0 md:pb-0">
                       <h2 className="text-2xl  font-semibold lg:mb-3 py-4 lg:p-0">{tjansterData.howWeStandOut.title}</h2>
                        <p>{tjansterData.howWeStandOut.content}</p></div>}
                         bild5={<img src={`${process.env.PUBLIC_URL}/stork.jpg`} className='object-cover  '/>}



/>
</div>
        </div>

        
    );
  }
  
  export default OvrigaTjansterPage;
 