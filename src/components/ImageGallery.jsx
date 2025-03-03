// src/components/ImageGallery.js
import React from "react";
import photo1 from "../assets/photo1.jpg"; // Adjust paths accordingly
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <img src={photo1} alt="Project Screenshot 1" />
      <img src={photo2} alt="Project Screenshot 2" />
      <img src={photo3} alt="Project Screenshot 3" />
    </div>
  );
};

export default ImageGallery;
