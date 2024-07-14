import React from "react";
import './aboutUs.css';
import LayoutComponent from '../components/layout';

const KontaktPage = () => { 
  return (
    <div
      id="background-element"
      className="lg:min-h-screen md:min-h-screen h-screen relative bg-cover bg-center md:bg-top md:bg-fixed lg:bg-fixed"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)`,
        backgroundPosition: 'right top', // Default position för större skärmar
        '@media (max-width: 768px)': {
          backgroundPosition: 'right bottom', // Position för mindre skärmar
        },
      }}
    >
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10 ">

<LayoutComponent
title={<div className=" flex">   
<p className=" lg:mr-3 md:mr-3">Kontakta</p>
<p>oss</p>
</div> }
pretext={"Kundtjänsten svarar i telefon mellan kl 7.00 till 16.00 varje vardag. Om du vill ändra eller omboka en tid är det bäst att du kontaktar sotaren direkt, eftersom han har bättre kontroll på lediga tider."}
text1= { <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>Kundtjänst</h2>
<p className=''>
<p>I kundtjänsten arbetar Agnetha, Emma och Isolde.</p>
  <p className=" whitespace-nowrap">tel. 010 – 410 25 60</p>
  <p>epost: info@eksjosot.se</p>  
  </p> </div>}
    bild1={ <img src={`${process.env.PUBLIC_URL}/chimney-day.jpg`} className='object-cover  '/>  }

    text2= { <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>Emanuel Nattvarg</h2>
  
      <p className="">Emanuel är brandskydds-kontrollant och besiktningsman.</p>
            <p>tel: 010 – 410 25 72</p>
            <p>epost: emanuel@eksjosot.se</p> </div>}
          bild2={ <img src={`${process.env.PUBLIC_URL}/fireplace.jpg`} className='object-cover  '/>  }

          text3= { <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>Torbjörn Levin Forssg</h2>
  
  <p>Torbjörn arbetar med sotning och besiktningar.</p>
                  <p>tel: 010 – 410 25 73</p>
                  <p>epost: torbjorn@eksjosot.se</p> </div>}
                bild3={ <img src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} className='object-cover  '/>  }
    
/>


     
    </div>
  </div>
   
  );
}

export default KontaktPage;
