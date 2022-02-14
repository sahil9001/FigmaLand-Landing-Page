import React from "react";
import "./header.css";
import imgUrl from "../../assets/heading.svg";
const Header = () => {
  return (
    <div className="figmaland__heading ">
      <div className="figmaland__heading-container section__padding">
        <div className="figmaland__heading-content">
          <h1>Work at the speed of thought</h1>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="figmaland__heading-button">
          <button type="button" className="figmaland__heading-button-1">
            Try For Free
          </button>
          <button type="button" className="figmaland__heading-button-2">
            Learn More
          </button>
        </div>
      </div>
      <div className="figmaland__heading-image">
        <img src={imgUrl} alt="heading" />
      </div>
    </div>
  );
};

export default Header;
