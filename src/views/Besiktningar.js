import React from 'react';

import besiktningarData from '../data/besiktningarData';
import './aboutUs.css';

const BesiktningarPage  = () => {
    return (
        <div className="relative h-dvh bg-cover bg-fixed " style={{ backgroundImage: "url('/sot-2.jpeg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"> 
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
 {/*
            <div className="join-our-journey section">
                <div>
                    <h2>{besiktningarData.joinOurJourney.title}</h2>
                    <p>{besiktningarData.joinOurJourney.content}</p>
                </div>
            </div>

          <footer className="footer">
                <h2>{besiktningarData.finalMessage.title}</h2>
                <p>{besiktningarData.finalMessage.content}</p>
            </footer> */} 
        </div>
    </div>
    </div>
    );
  }
  
  export default BesiktningarPage;
  