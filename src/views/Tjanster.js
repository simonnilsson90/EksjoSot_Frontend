import React from "react";
import Footer from "../components/footer/FooterComponent";

import tjansterData from "../data/tjansterData";


const TjansterPage= () => {
    return (
        <div className="relative h-dvh bg-cover bg-fixed " style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sot-2.jpeg)` }} >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"> 
  <header className="header text-white">
      <h1>{tjansterData.title}</h1>
      <p>{tjansterData.description}</p>
  </header>

  <div className="content-grid ">
      <div className="vision section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.vision.title}</h2>
              <p>{tjansterData.vision.content}</p>
          </div>
      </div>

      <div className="what-we-do section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.whatWeDo.title}</h2>
              <p>{tjansterData.whatWeDo.content}</p>
          </div>
      </div>

      <div className="how-we-stand-out section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.howWeStandOut.title}</h2>
              <ul className="elegant-list">
                  {tjansterData.howWeStandOut.items}
              </ul>
          </div>
      </div>

      <div className="our-culture section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.ourCulture.title}</h2>
              <p>{tjansterData.ourCulture.content}</p>
          </div>
      </div>

      <div className="community-outreach section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.communityOutreach.title}</h2>
              <p>{tjansterData.communityOutreach.content}</p>
          </div>
      </div>

      <div className="why-choose-us section bg-sot text-gray-100">
          <div>
              <h2>{tjansterData.whyChooseUs.title}</h2>
              <p>{tjansterData.whyChooseUs.content}</p>
          </div>
      </div>

  </div>
  <Footer/>
</div>
</div>
    );
  }
  
  export default TjansterPage;
  