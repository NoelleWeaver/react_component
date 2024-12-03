import React from "react";
import './Gallery.css';

export default function GalleryComponent({ 
  pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic11, pic12, pic13, 
  pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, 
  pic24, pic25, pic26, pic27, pic28, pic29, pic30, pic31, pic32
}) {
  
  return (
    <>
      <body className="gallery">
        <div className="gallery-container">
          <div className="gallery-box">
            <img className="image" src={pic2.url} alt={pic2.alt} />
            <div className="image-name">{pic2.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic3.url} alt={pic3.alt} />
            <div className="image-name">{pic3.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic4.url} alt={pic4.alt} />
            <div className="image-name">{pic4.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic5.url} alt={pic5.alt} />
            <div className="image-name">{pic5.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic6.url} alt={pic6.alt} />
            <div className="image-name">{pic6.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic7.url} alt={pic7.alt} />
            <div className="image-name">{pic7.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic8.url} alt={pic8.alt} />
            <div className="image-name">{pic8.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic9.url} alt={pic9.alt} />
            <div className="image-name">{pic9.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic11.url} alt={pic11.alt} />
            <div className="image-name">{pic11.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic12.url} alt={pic12.alt} />
            <div className="image-name">{pic12.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic13.url} alt={pic13.alt} />
            <div className="image-name">{pic13.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic14.url} alt={pic14.alt} />
            <div className="image-name">{pic14.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic15.url} alt={pic15.alt} />
            <div className="image-name">{pic15.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic16.url} alt={pic16.alt} />
            <div className="image-name">{pic16.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic17.url} alt={pic17.alt} />
            <div className="image-name">{pic17.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic18.url} alt={pic18.alt} />
            <div className="image-name">{pic18.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic19.url} alt={pic19.alt} />
            <div className="image-name">{pic19.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic20.url} alt={pic20.alt} />
            <div className="image-name">{pic20.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic21.url} alt={pic21.alt} />
            <div className="image-name">{pic21.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic22.url} alt={pic22.alt} />
            <div className="image-name">{pic22.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic23.url} alt={pic23.alt} />
            <div className="image-name">{pic23.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic24.url} alt={pic24.alt} />
            <div className="image-name">{pic24.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic25.url} alt={pic25.alt} />
            <div className="image-name">{pic25.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic26.url} alt={pic26.alt} />
            <div className="image-name">{pic26.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic27.url} alt={pic27.alt} />
            <div className="image-name">{pic27.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic28.url} alt={pic28.alt} />
            <div className="image-name">{pic28.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic29.url} alt={pic29.alt} />
            <div className="image-name">{pic29.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic30.url} alt={pic30.alt} />
            <div className="image-name">{pic30.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic31.url} alt={pic31.alt} />
            <div className="image-name">{pic31.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic32.url} alt={pic32.alt} />
            <div className="image-name">{pic32.name}</div>
          </div>
        </div>
      </body>
    </>
  );
}
