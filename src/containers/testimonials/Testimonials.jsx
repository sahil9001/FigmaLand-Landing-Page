import React from "react";
import Testimonialcard from "../../components/testimonialcard/Testimonialcard";
import "./testimonials.css";
import { profile01, profile02, profile03, profile04 } from "./imports";
const Testimonials = () => {
  return (
    <div className="figmaland__testimonials section__padding">
      <div className="figmaland__testimonials-container">
        <div className="figmaland__testimonials-content">
          <h1>Testimonials</h1>
        </div>
        <div className="figmaland__testimonials-cards">
          <Testimonialcard
            name="Claire Bell"
            title="Designer"
            description="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year.your financial 
            goal for the month and year."
            profileurl={profile01}
          />
          <Testimonialcard
            name="Francisco Lane"
            title="Designer"
            description="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year."
            profileurl={profile02}
          />
          <Testimonialcard
            name="Ralph Fisher"
            title="Designer"
            description="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year."
            profileurl={profile03}
          />
          <Testimonialcard
            name="Jorge Murphy"
            title="Designer"
            description="Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year."
            profileurl={profile04}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
