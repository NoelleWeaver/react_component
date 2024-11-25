import React from "react";
import './Gallery.css';

export default function GalleryComponent({profileImage, description}) {
  
    return (
      <>
        <div className="gallery-container">
          <div className='gallery-card'>
              <div className="gallery-img-box">
                <p>{description}</p>
                  <img className="image" src={profileImage} />
              </div>
          </div>
        </div>
      </>
    )}