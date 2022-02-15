import React from "react";
import "./footer.css";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="figmaland__footer section__padding">
      <div className="figmaland__footer-links">
        <div className="figmaland__footer-links-div">
          <h4>FingerTipe</h4>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
        <div className="figmaland__footer-links-div">
          <h4>Resources</h4>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
        <div className="figmaland__footer-links-div">
          <h4>About</h4>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>

        <div className="figmaland__footer-links_logo">
          <p>7480 Mockingbird Hill undefined</p>
          <p className="smalltext">© 2022, Sahil Silare</p>
          <div className="figmaland__footer-links_logo-social">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="twitter" />
            <img src={linkedin} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
