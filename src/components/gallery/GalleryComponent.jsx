import React from "react";
import './Gallery.css';

export default function GalleryComponent({profileImage}) {
  
    return (
      <>
      <body className="gallery">
        
      
        <div className="gallery-container">
          <div className="gallery-box">
            <img className="image" src={profileImage} />
          </div>
        </div>
      </body>
      </>
    )}