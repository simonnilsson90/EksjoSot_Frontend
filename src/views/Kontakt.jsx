import React from "react";
import Footer from "../components/footer/FooterComponent";



const KontaktPage = () => { 
  return (
    <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
      <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen"> 
  <header className="header text-gray-100">
      <h1 className="">KONTAKTA OSS</h1>
    
  </header>

  <div className=" lg:flex  ">
      <div className=" ml-2 section bg-sot text-gray-100">
          <div className="">
              <h2>KUNDTJÄNST</h2>
              <p>I kundtjänsten arbetar</p>
              <p>Agnetha, Emma och Isolde. </p>
              <p> tel. 010 – 410 25 60</p>
              <p>epost: info@eksjosot.se</p>
          </div>
      </div>

      <div className=" ml-2 mt-2 section bg-sot text-gray-100">
          <div>
              <h2>EMANUEL NATTVARG</h2>
              <p>Emanuel är brandskydds- </p>
              <p>kontrollant och besiktnings-</p>
              <p>man.</p>
              <p>tel: 010 – 410 25 72</p>
              <p>epost:  emanuel@eksjosot.se</p>
          </div>
      </div>

      <div className=" ml-2 mr-2 mt-2  section bg-sot text-gray-100">
          <div>
              <h2>TORBJÖRN LEVIN FORSS</h2>
              <p>Torbjörn arbetar med sotning</p>
              <p> och besiktningar.</p>
              <p>tel: 010 – 410 25 73</p>
              <p>epost: torbjorn@eksjosot.se</p>
          </div>
      </div>

      <div className=" ml-2 mr-2 bg-sotOrange text-xl rounded-xl " style={{ padding: "30px",
  borderRadius: "15px", marginRight:"8px" }} >
        <h3>Öppetider</h3>
      <p>Kundtjänsten svarar i telefon mellan kl 7.00 till 16.00 varje vardag. Om du vill ändra eller omboka en tid är 
        det bäst att du kontaktar sotaren direkt, eftersom han har bättre kontroll på lediga tider.</p>
        </div>

  </div>
  <Footer/>
</div>
</div>
  );
}

export default KontaktPage

  