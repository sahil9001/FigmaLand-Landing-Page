import React from "react";
import "./featurecard.css";
const Featurecard = ({ title, imgurl, text }) => {
  return (
    <div className="figmaland__featurecard">
      <div className="figmaland__featurecard-heading">
        <div className="figmaland__featurecard-heading-icon">
          <img
            className="figmaland__featurecard-heading-img"
            src={imgurl}
            alt="featureicon"
          />
        </div>
        <div className="figmaland__featurecard-heading-title">
          <p>{title}</p>
        </div>
      </div>
      <div className="figmaland__featurecard-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Featurecard;
