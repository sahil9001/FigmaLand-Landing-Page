import React from "react";
import "./partners.css";
import { icon01, icon02, icon03, icon04, icon05, icon06 } from "./imports";
const Partners = () => {
  return (
    <div className="figmaland__partners section__padding">
      <div className="figmaland__partners-container">
        <div className="figmaland__partners-content">
          <h1>Partners</h1>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="figmaland__partners-brands">
          <div>
            <img src={icon01} alt="brand" />
          </div>
          <div>
            <img src={icon02} alt="brand" />
          </div>
          <div>
            <img src={icon03} alt="brand" />
          </div>
          <div>
            <img src={icon04} alt="brand" />
          </div>
          <div>
            <img src={icon05} alt="brand" />
          </div>
          <div>
            <img src={icon06} alt="brand" />
          </div>
        </div>
        <div className="figmaland__partners-button">
          <button type="button">All Partners</button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
