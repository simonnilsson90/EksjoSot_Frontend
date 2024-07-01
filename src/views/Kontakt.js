import React from "react";
import Footer from "../components/footer/FooterComponent";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './aboutUs.css';

const KontaktPage = () => { 
  return (
    <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }}>
    <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
      
      <div className=" text-white p-6 mx-6 space-y-2 bg-sot" >
        <h1 className="lg:text-4xl text-4xl border-sotOrange  border-b-2 mb-6   ">Kontakta oss</h1>
        <Card >
          <CardContent>
            <div className=" lg:flex lg:space-x-20 lg:mr-24 ">
<div id="kundtjast ">
<h2 className="text-lg  ">Kundtjänst</h2>
  <p>I kundtjänsten arbetar</p>
  <p>Agnetha, Emma och Isolde.</p>
  <p className=" whitespace-nowrap">tel. 010 – 410 25 60</p>
  <p>epost: info@eksjosot.se</p>
  </div>
  <div id="male">
<h2 className="text-lg ">Emanuel Nattvarg</h2>
<p className="">Emanuel är brandskydds-</p>
            <p>kontrollant och besiktningsman.</p>
            <p>tel: 010 – 410 25 72</p>
            <p>epost: emanuel@eksjosot.se</p>
            </div>
            <div>
            <h2 className="text-lg    ">Torbjörn Levin Forss</h2>
            <p>Torbjörn arbetar med sotning</p>
            <p>och besiktningar.</p>
            <p>tel: 010 – 410 25 73</p>
            <p>epost: torbjorn@eksjosot.se</p>
            </div>
            

            <div>
<h2 className="text-lg ">Öppetider</h2>
          <p className=" ">Kundtjänsten svarar i telefon mellan kl 7.00 till 16.00 varje vardag. Om du vill ändra eller omboka en tid är 
            det bäst att du kontaktar sotaren direkt, eftersom han har bättre kontroll på lediga tider.</p>
</div>


            </div>
          </CardContent>
        </Card>
        </div>
      <div className=" w-full mt-20 ">
      <Footer/>
      </div>
     
    </div>
  </div>
   
  );
}

export default KontaktPage;
