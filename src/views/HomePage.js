import React from "react";
import Styles from "./HomePage.module.css";
import HomeCard from "../components/homeCard/homeCard.js";

import heroImage from "../assets/images/homepage/hero-image-for-homepage.png";

function HomePage() {
  return (
    <div className={Styles.homePage}>
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
      <HomeCard />
    </div>
  );
}

export default HomePage;
