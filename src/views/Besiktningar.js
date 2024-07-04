import React from 'react';
import LayoutComponent from '../components/layout';
import besiktningarData from '../data/besiktningarData';
import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";

const BesiktningarPage  = () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/chimneys.jpg)` }} >
        <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen  pt-10"> 

        <LayoutComponent
        title={  besiktningarData.title  }
        pretext={besiktningarData.description}
        text1={ <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{besiktningarData.vision.title}</h2>  {besiktningarData.vision.content}  </div> }
        bild1={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
        text2={ <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{besiktningarData.whatWeDo.title}</h2>  {besiktningarData.whatWeDo.content}  </div> }
        bild2={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
        text3={ <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{besiktningarData.howWeStandOut.title}</h2>  {besiktningarData.howWeStandOut.content}  </div> }
        bild3={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
        text4={ <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{besiktningarData.ourCulture.title}</h2>  {besiktningarData.ourCulture.content}  </div> }
        bild4={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
        text5={ <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{besiktningarData.communityOutreach.title}</h2>  {besiktningarData.communityOutreach.content}  </div> }
        bild5={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
        text6={ <div> <h2 className='text-2xl mb-2 mt-4 lg:mt-0'>{besiktningarData.whyChooseUs.title}</h2>  {besiktningarData.whyChooseUs.content}  </div> }
        bild6={ <img src={`${process.env.PUBLIC_URL}/chimneys.jpg`} className='object-cover  '/> }
        />
        <Footer />
    </div>
    </div>
    );
  }
  
  export default BesiktningarPage;
  