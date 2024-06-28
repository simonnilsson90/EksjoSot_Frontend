import React from 'react';

import besiktningarData from '../data/besiktningarData';
import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";

const SotningPage  = () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
        <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 
    
        <div className="  rounded-xl   text-white p-6 mx-5 space-y-2 " style={{backgroundColor: "#322E2B"}} >
        <h1 className="lg:text-4xl text-4xl">Sotning/rengöring och brandskyddskontroll enligt LSO, Lagen om skydd mot olyckor.</h1>
        <p className=" lg:text-2xl  text-center">En anläggning/eldstad ska regelbundet både rengöras (sotas) och brandskyddskontrolleras.</p>
    </div>


        <div className="content-grid">
  
            <div className="what-we-do section bg-sot text-gray-100">
                <div>
<h2></h2>
                    <p>En anläggning/eldstad ska regelbundet både rengöras (sotas) och brandskyddskontrolleras.
Brandskyddskontrollen görs för att se så anläggningen är brandsäker, d.v.s. upptäcka eventuella fel och brister hos anläggningen så att skador på människor, egendom och miljö kan undvikas.

Brandskyddskontrollen kan jämföras med besiktningen av bilen. Med en viss regelbundenhet ska man få reda på om bilen är körduglig. Samma syfte fyller brandskyddskontrollen när det gäller eldstaden och skorstenen. </p>
                </div>
            </div>

            <div className="how-we-stand-out section bg-sot text-gray-100">
                <div>
                    <h2></h2>
                    <p>  Brandskyddskontrollen får endast utföras av kommunen eller av en entreprenör/företag som kommunen har bestämt, i detta fall Sotning & Ventilation i Eksjö AB. Hur ofta kontrollen ska göras har Myndigheten för samhällsskydd och beredskap (MSB) beslutat. Hur ofta (fristen) en anläggning/eldstad ska kontrolleras beror på hur den ser ut och hur den används. Normalt sker brandskyddskontroll vart 3:e eller vart 6:e år. Entreprenören har ett register på alla eldstäder och kontaktar ("budar") ägaren när det är dags för kontroll. En eldstad måste vara kontrollerad för att få användas. Brandskyddskontrollen innefattar eldningsanläggning med rökgångar och angränsande byggnadsdetaljer samt skyddsanordningar på tak.</p>
                </div>
            </div>
           

            

         
        </div>
        <Footer />
    </div>
    </div>
    );
  }
  
  export default SotningPage;
  