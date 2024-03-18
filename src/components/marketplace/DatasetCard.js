import React from "react";
import "./DatasetCard.css";

const Card = ({ dataset }) => {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img
          src={`/images/marketplace/${dataset.imagePreview}`}
          alt={dataset.title}
        />
      </div>
      <div className="cardInfo">
        <h4>{dataset.title}</h4>
        <p className="price">${dataset.price}</p>
      </div>
    </div>
  );
};

export default Card;
