import React from 'react';
import aboutUsData from '../data/aboutUsData'; 

import './aboutUs.css';

const OmPage  = () => {
    return (
        <div className="relative h-dvh bg-cover bg-fixed " style={{ backgroundImage: "url('/sot-2.jpeg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"> 
     
        <header className="header">
            <h1>{aboutUsData.title}</h1>
            <p>{aboutUsData.description}</p>
        </header>

        <div className="content-grid">
            <div className="vision section bg-sot text-gray-100">
                <div>
                    <h2>{aboutUsData.vision.title}</h2>
                    <p>yada jada jada jada kjsnfjksdjk kjhsfjksjkd kjhsfhkjsdf</p>
                </div>
            </div>

            <div className="what-we-do section bg-sot text-gray-100">
                <div>
                    <h2>{aboutUsData.whatWeDo.title}</h2>
                    <p>{aboutUsData.whatWeDo.content}</p>
                </div>
            </div>

            <div className="how-we-stand-out section bg-sot text-gray-100">
                <div>
                    <h2>{aboutUsData.howWeStandOut.title}</h2>
                    <p >
                        {aboutUsData.howWeStandOut.items}
                    </p>
                </div>
            </div>

            <div className="our-culture section bg-sot text-gray-100">
                <div>
                    <h2>{aboutUsData.ourCulture.title}</h2>
                    <p>hasdfjh khjsafhjks jhkashfjk hjksahfjk hjksadf</p>
                </div>
            </div>

            <div className="community-outreach section bg-sot text-gray-100">
                <div>
                    <h2>{aboutUsData.communityOutreach.title}</h2>
                    <p>{aboutUsData.communityOutreach.content}</p>
                </div>
            </div>

            <div className="why-choose-us section bg-sot text-gray-100">
                <div>
                    <h2>{aboutUsData.whyChooseUs.title}</h2>
                    <p>{aboutUsData.whyChooseUs.content}</p>
                </div>
            </div>

           

           
        </div>
    </div>
    </div>
  
    );
  }
  
  export default OmPage;
  