import React from "react";
import Styles from "./HomePage.module.css";
import HomeCard from "../components/homeCard/homeCard.js";
import BuyingLandingPage from "../components/buyingLandingPage/BuyingLandingPage.js";

import heroImage from "../assets/images/homepage/hero-image-for-homepage.png";
import SellingLandingPage from "../components/sellingLandingPage/SellingLandingPage.js";

function HomePage() {
  return (
    <div className={Styles.homePage}>

      <div className={Styles.hero}>
        <div className={Styles.heroImage}>
          <img src={heroImage} alt="People" />
        </div>
        <div className={Styles.heroText}>
          <h1>REAL HUMANS DATASETS TO CREATE "REAL" MODELS</h1>
          <h3>
            The store where you can buy any type of training data for your AI
            models
          </h3>
        </div>
      </div>

      <div className={Styles.cards}>
        <HomeCard />
      </div>
      <div className={Styles.components}>


      <div className={Styles.buying}>
        <BuyingLandingPage />
      </div>

      <div className={Styles.selling}>
        <SellingLandingPage />
      </div>
      
      </div>
    </div>
  );
}

export default HomePage;
