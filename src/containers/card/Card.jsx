import React from "react";
import "./card.css";
import card01 from "../../assets/card01.svg";
import card02 from "../../assets/card02.svg";

const Card = () => {
  return (
    <div className="figmaland__card section__padding">
      <div className="figmaland__card-container">
        <div className="figmaland__card-content">
          <div className="figmaland__card-heading">
            <h1>OpenType feature and Variable fonts</h1>
          </div>
          <div className="figmaland__card-button">
            <button type="button">Try For Free</button>
          </div>
        </div>
        <div className="figmaland__card-image">
          <img
            src={card01}
            alt="card"
            className="figmaland__card-image-visible"
          />
          <img
            src={card02}
            alt="card"
            className="figmaland__card-image-not_visible"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
