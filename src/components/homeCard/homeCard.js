import React, { useState } from "react";
import Styles from "./homeCard.module.css";
import DataSetInfo from "../../assets/homeCard-content.js";

const ContentCard = ({ imagesSrc, alt, content }) => {
  const [expand, setExpand] = useState(false);

  const handleMouseEnter = () => {
    setExpand(!expand);
  };

  const handleMouseLeave = () => {
    setExpand(!expand);
  };

  return (
    <div className={Styles.cardContent}>
      <div className={Styles.cardHeader} onMouseEnter={handleMouseEnter}>
        <img src={imagesSrc} alt={alt} />
      </div>

      {expand && (
        <div className={Styles.cardExtended} onMouseLeave={handleMouseLeave}>
          {content}
        </div>
      )}
    </div>
  );
};

function HomeCard() {
  return (
    <div className={Styles.homeCardBody}>
      <div className={Styles.featuresSection}>
        <h1>What can you do with personal data sets?</h1>
        <h3>
          Build more lifelike AI with authentic data from The EveryOne Store
        </h3>

        <div className={Styles.featuresContainer}>
          {DataSetInfo.map((card) => (
            <ContentCard
              key={card.id}
              imagesSrc={card.imagesSrc}
              alt={card.alt}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
