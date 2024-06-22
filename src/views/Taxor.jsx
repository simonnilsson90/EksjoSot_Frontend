import React from "react";
import taxorData from "../data/taxorData";

const TaxorPage = () => { 
    return (
      <div className="relative h-dvh bg-cover bg-fixed " style={{ backgroundImage: "url('/sot-2.jpeg')",  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"> 
  <header className="header text-white">
      <h1>{taxorData.title}</h1>
      <p>{taxorData.description}</p>
  </header>

  <div className="content-grid ">
      <div className="vision section bg-sot text-gray-100">
          <div>
              <h2>{taxorData.vision.title}</h2>
              <p>{taxorData.vision.content}</p>
          </div>
      </div>

      <div className="what-we-do section bg-sot text-gray-100">
          <div>
              <h2>{taxorData.whatWeDo.title}</h2>
              <p>{taxorData.whatWeDo.content}</p>
          </div>
      </div>

      <div className="how-we-stand-out section bg-sot text-gray-100">
          <div>
              <h2>{taxorData.howWeStandOut.title}</h2>
              <ul className="elegant-list">
                  {taxorData.howWeStandOut.items}
              </ul>
          </div>
      </div>

      <div className="our-culture section bg-sot text-gray-100">
          <div>
              <h2>{taxorData.ourCulture.title}</h2>
              <p>{taxorData.ourCulture.content}</p>
          </div>
      </div>

      <div className="community-outreach section bg-sot text-gray-100">
          <div>
              <h2>{taxorData.communityOutreach.title}</h2>
              <p>{taxorData.communityOutreach.content}</p>
          </div>
      </div>

      <div className="why-choose-us section bg-sot text-gray-100">
          <div>
              <h2>{taxorData.whyChooseUs.title}</h2>
              <p>{taxorData.whyChooseUs.content}</p>
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
  
  export default TaxorPage;
  