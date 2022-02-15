import React from "react";
import Galleryimage from "../../components/galleryimage/Galleryimage";
import "./gallery.css";
import {
  galleryimage01,
  galleryimage02,
  galleryimage03,
  galleryimage04,
  galleryimage05,
  galleryimage06,
  galleryimage07,
} from "./imports";
const Gallery = () => {
  return (
    <div className="figmaland__gallery section__padding">
      <div className="figmaland__gallery-container">
        <div className="figmaland__gallery-content">
          <h1>Gallery</h1>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="figmaland__gallery-images">
          <Galleryimage imageurl={galleryimage01} visible={true} />
          <Galleryimage imageurl={galleryimage02} visible={true} />
          <Galleryimage imageurl={galleryimage03} visible={true} />
          <Galleryimage imageurl={galleryimage04} visible={true} />
          <Galleryimage imageurl={galleryimage05} visible={false} />
          <Galleryimage imageurl={galleryimage06} visible={false} />
          <Galleryimage imageurl={galleryimage07} visible={false} />
        </div>
        <div className="figmaland__gallery-button">
          <button type="button">See more</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
