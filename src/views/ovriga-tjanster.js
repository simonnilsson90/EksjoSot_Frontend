import React from "react";
import LayoutComponent from '../components/layout';
import './aboutUs.css';


import tjansterData from "../data/ovriga-tjansterData";


const OvrigaTjansterPage= () => {
    
   
    return (
        <div 
        id="background-element" 
        className="min-h-screen bg-cover bg-fixed" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }}
      >
        <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10 ">
          <LayoutComponent
            title={
                <div className=" lg:flex md:flex " >
<p className=" lg:mr-3 md:mr-3">Övriga</p>
<p>Tjänster</p>
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
            <p>{tjansterData.communityOutreach.content}</p></div>}
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
 