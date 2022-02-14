import React from "react";
import "./contentcard.css";
const Contentcard = ({ heading, text, buttontext, imageurl }) => {
  return (
    <div className="figmaland__contentcard">
      <div className="figmaland__contentcard-container">
        <div className="figmaland__contentcard-content">
          <p className="figmaland__contentcard-heading">{heading}</p>
          <p className="figmaland__contentcard-description">{text}</p>
        </div>
        <button className="figmaland__contentcard-button">{buttontext}</button>
        <div className="figmaland__contentcard-image">
          <img src={imageurl} alt="contentcard" />
        </div>
      </div>
    </div>
  );
};

export default Contentcard;
