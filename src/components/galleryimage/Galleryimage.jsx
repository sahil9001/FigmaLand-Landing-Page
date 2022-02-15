import React from "react";
import "./galleryimage.css";
const Galleryimage = ({ imageurl, visible }) => {
  return (
    <div
      className={`figmaland__galleryimage ${!visible ? `visible-large` : ``}`}
    >
      <img src={imageurl} alt="galleryimage" />
    </div>
  );
};

export default Galleryimage;
