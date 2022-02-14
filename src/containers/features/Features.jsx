import React from "react";
import Featurecard from "../../components/featurecard/Featurecard";
import "./features.css";
import featureimageurl from "../../assets/featureimage.svg";
import { icon01, icon02, icon03 } from "./imports";
const Features = () => {
  return (
    <div className="figmaland__features section__padding">
      <div className="figmaland__features-container">
        <div className="figmaland__features-content">
          <h3>FEATURES</h3>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="figmaland__features-list">
          <div className="figmaland__features-list-image">
            <img src={featureimageurl} alt="featureimage" />
          </div>
          <div className="figmaland__features-list-content">
            <Featurecard
              title="A single source 
of truth"
              imgurl={icon01}
              text="When you add work to your 
Slate calendar we automatically 
calculate useful insights 
"
            />{" "}
            <Featurecard
              title="Intuitive 
              interface"
              imgurl={icon02}
              text="When you add work to your 
Slate calendar we automatically 
calculate useful insights 
"
            />{" "}
            <Featurecard
              title="Or with rules"
              imgurl={icon03}
              text="When you add work to your 
Slate calendar we automatically 
calculate useful insights 
"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
