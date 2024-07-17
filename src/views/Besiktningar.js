import React from 'react';
import LayoutComponent from '../components/layout';
import besiktningarData from '../data/besiktningarData';
import './aboutUs.css';


const BesiktningarPage = () => {
  const sections = [
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl lg:mb-6   mb-2 mt-4 lg:mt-0'>{besiktningarData.vision.title}</h2>
          {besiktningarData.vision.content}
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/istockphoto4.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>{besiktningarData.whatWeDo.title}</h2>
        <p> {besiktningarData.whatWeDo.content} </p>  
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/istockphoto2.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>{besiktningarData.howWeStandOut.title}</h2>
      <p>{besiktningarData.howWeStandOut.content} </p>    
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/istockphoto1.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>{besiktningarData.ourCulture.title}</h2>
          <p>  {besiktningarData.ourCulture.content}  </p> 
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>{besiktningarData.communityOutreach.title}</h2>
           <p> {besiktningarData.communityOutreach.content}  </p> 
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover' />
    },
    {
      text: (
        <div>
          <h2 className='text-2xl lg:text-5xl  lg:mb-6   mb-2 mt-4 lg:mt-0'>{besiktningarData.whyChooseUs.title}</h2>
            <p>{besiktningarData.whyChooseUs.content}  </p> 
        </div>
      ),
      bild: <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover' />
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/istockphoto3.jpg)` }}>
      <div className="bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen pt-10">
        <LayoutComponent
          title={besiktningarData.title}
          pretext={besiktningarData.description}
          sections={sections}
        />
      </div>
    </div>
  );
}

export default BesiktningarPage;
