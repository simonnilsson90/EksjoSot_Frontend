import React from "react";
import Styles from "./homeCard.module.css";
import DataSetInfo from "../../assets/homeCard-content.js";

function HomeCard() {
  return (
    <div>
      <div className={Styles.featuresSection}>
        <h1>What can you do with personal data sets?</h1>
        <h3>
          Build more lifelike AI with authentic data from The EveryOne Store
        </h3>

        <div className={Styles.featuresContainer}>
          <div className={Styles.feature}>
            {DataSetInfo.map((card) => {
              return (
                <div key={card.id}>
                  <div>
                    <img
                      className={Styles.front}
                      src={card.imagesSrc}
                      alt={card.alt}
                    />
                    <p className={Styles.back}>{card.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
