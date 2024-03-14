import React from "react";
import "./HomePage.css";
import heroImage from "../assets/images/homepage/hero-image-for-homepage.png";
import feature1 from "../assets/images/homepage/img1.png";
import feature2 from "../assets/images/homepage/img2.png";
import feature3 from "../assets/images/homepage/img3.png";
import feature4 from "../assets/images/homepage/img4.png";
import NavbarComponent from "../components/NavbarComponent";

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-image">
        <img src={heroImage} alt="Image of people" />
      </div>
      <div className={"hero-text"}>
        <h1>REAL HUMANS DATASETS TO CREATE "REAL" MODELS</h1>
        <h3>
          The store where you can buy any type of training data for your AI
          models
        </h3>
      </div>

      <div className="features-section">
        <h1>What can you do with personal data sets?</h1>
        <div className="features-grid">
          <div className="feature">
            <img src={feature1} alt="Feature 1" />
            <h3>Data sets of people</h3>
            <p>
              The Everyone Store is a marketplace that offers a wide range of
              personal data sets.
            </p>
          </div>
          <div className="feature">
            <img src={feature2} alt="Feature 2" />
            <h3>Data sets of people</h3>
            <p>
              The Everyone Store is a marketplace that offers a wide range of
              personal data sets.
            </p>
          </div>
          <div className="feature">
            <img src={feature3} alt="Feature 3" />
            <h3>AI models</h3>
            <p>
              Use the data sets to train your AI models and create more
              realistic and human-like models
            </p>
          </div>
          <div className="feature">
            <img src={feature4} alt="Feature 4" />
            <h3>And more</h3>
            <p>
              There are many other uses for personal data sets. The
              possibilities are endless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
