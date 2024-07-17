import React from "react";
import './aboutUs.css';
import LayoutComponent from '../components/layout';

const KontaktPage = () => {
  const sections = [
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Kundtjänst</h2>
          <p>I kundtjänsten arbetar Agnetha, Emma och Isolde.</p>
          <p className="whitespace-nowrap">tel. 010 – 410 25 60</p>
          <p>epost: info@eksjosot.se</p>
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/istockphoto-kundtjanst.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Emanuel Nattvarg</h2>
          <p>Emanuel är brandskydds-kontrollant och besiktningsman.</p>
          <p>tel: 010 – 410 25 72</p>
          <p>epost: emanuel@eksjosot.se</p>
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/istockphoto2.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>Torbjörn Levin Forssg</h2>
          <p>Torbjörn arbetar med sotning och besiktningar.</p>
          <p>tel: 010 – 410 25 73</p>
          <p>epost: torbjorn@eksjosot.se</p>
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/sunrise-smoke.jpg`} className='object-cover' />
    }
  ];

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
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
        <LayoutComponent
          title={
            <div className="flex">
              <p className="lg:mr-3 md:mr-3 mr-2">Kontakta</p>
              <p>oss</p>
            </div>
          }
          pretext={"Kundtjänsten svarar i telefon mellan kl 7.00 till 16.00 varje vardag. Om du vill ändra eller omboka en tid är det bäst att du kontaktar sotaren direkt, eftersom han har bättre kontroll på lediga tider."}
          sections={sections}
        />
      </div>
    </div>
  );
}

export default KontaktPage;
