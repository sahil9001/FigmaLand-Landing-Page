import React from "react";
import "./testimonialcard.css";
const Testimonialcard = ({ name, title, profileurl, description }) => {
  return (
    <div className="figmaland__testimonialcard">
      <div className="figmaland__testimonialcard-container">
        <div className="figmaland__testimonialcard-profile">
          <div className="figmaland__testimonialcard-profile-image">
            <img src={profileurl} alt="profile" />
          </div>
          <div className="figmaland__testimonialcard-profile-details">
            <h3>{name}</h3>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="figmaland__testimonialcard-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonialcard;
