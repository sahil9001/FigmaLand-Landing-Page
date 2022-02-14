import React from "react";
import Contentcard from "../../components/contentcard/Contentcard";
import "./contents.css";
import { content01, content02 } from "./imports";
const Contents = () => {
  return (
    <div className="figmaland__contents section__padding">
      <div className="figmaland__contents-container">
        <div className="figmaland__contents-content">
          <div className="figmaland__contents-content_title">
            <h1>Contents</h1>
          </div>
          <div className="figmaland__contents-content_subheading">
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
        </div>
        <div className="figmaland__contents-content-cards">
          <Contentcard
            heading="Work"
            text="Ever wondered if you're too reliant 
on a client for work? Slate helps 
you identify ."
            buttontext="Sign Up"
            imageurl={content01}
          />
          <Contentcard
            heading="Design with real data"
            text="Ever wondered if you're too reliant 
on a client for work? Slate helps 
you identify ."
            buttontext="Try For Free"
            imageurl={content02}
          />
        </div>
      </div>
    </div>
  );
};

export default Contents;
