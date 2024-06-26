import React from 'react';

import besiktningarData from '../data/besiktningarData';
import './aboutUs.css';
import Footer from "../components/footer/FooterComponent";

const BesiktningarPage  = () => {
    return (
        <div className="min-h-screen bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
      <div className=" bg-gradient-to-b from-black/70 via-transparent to-transparent min-h-screen"> 
        <header className="header text-gray-100 ">
            <h1>{besiktningarData.title}</h1>
            <p>{besiktningarData.description}</p>
        </header>

        <div className="content-grid">
            <div className="vision section bg-sot text-gray-100">
                <div>
                    <h2>{besiktningarData.vision.title}</h2>
                    <p>{besiktningarData.vision.content}</p>
                </div>
            </div>

            <div className="what-we-do section bg-sot text-gray-100">
                <div>
                    <h2>{besiktningarData.whatWeDo.title}</h2>
                    <p>{besiktningarData.whatWeDo.content}</p>
                </div>
            </div>

            <div className="how-we-stand-out section bg-sot text-gray-100">
                <div>
                    <h2>{besiktningarData.howWeStandOut.title}</h2>
                    <p>  {besiktningarData.howWeStandOut.content}</p>
                </div>
            </div>

            <div className="our-culture section bg-sot text-gray-100">
                <div>
                    <h2>{besiktningarData.ourCulture.title}</h2>
                    <p>{besiktningarData.ourCulture.content}</p>
                </div>
            </div>

            <div className="community-outreach section bg-sot text-gray-100">
                <div>
                    <h2>{besiktningarData.communityOutreach.title}</h2>
                    <p>{besiktningarData.communityOutreach.content}</p>
                </div>
            </div>

            <div className="why-choose-us section bg-sot text-gray-100">
                <div>
                    <h2>{besiktningarData.whyChooseUs.title}</h2>
                    <p>{besiktningarData.whyChooseUs.content}</p>
                </div>
            </div>
 
        </div>
        <Footer />
    </div>
    </div>
    );
  }
  
  export default BesiktningarPage;
  