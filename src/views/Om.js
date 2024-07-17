import React from 'react';
import LayoutComponent from '../components/layout';
import aboutUsData from '../data/aboutUsData';
import './aboutUs.css';

const OmPage = () => {
  const sections = [
    {
      text: (
        <div>
          <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{aboutUsData.vision.title}</h2>
          {aboutUsData.vision.content}
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/istockphoto2.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{aboutUsData.whatWeDo.title}</h2>
          {aboutUsData.whatWeDo.content}
        </div>
      ),
      bild:(
        <div className='bg-white p-4 flex justify-center items-center mx-auto'>
        <img src={`${process.env.PUBLIC_URL}/riks.png`} className='object-cover ' />
    </div>
      ) 
    },
    // Lägg till fler sektioner här om det behövs
  ];

  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center lg:bg-top md:bg-top" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }}>
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
        <LayoutComponent
          title={
            <div className="flex">
              <p className="lg:mr-3 md:mr-3 mr-2">Om</p>
              <p>oss</p>
            </div>
          }
          pretext="Vi finns i Eksjö och Västervik och här i dessa kommuner ansvarar vi för den lagstadgade sotningen och brandskyddskontrollen på uppdrag av kommunerna."
          sections={sections}
        />
      </div>
    </div>
  );
}

export default OmPage;
