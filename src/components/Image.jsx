import React, { useState } from 'react';
import galleryData from '../data.jsx';
import '../styles/image.css';

function Image() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className='image-container'>
      <div className="image-gallery">
        {galleryData.map((category, index) => (
          <div key={index} className="image-category">
            <h2>{category.category}</h2>
            <p>{category.description}</p>
            <div className="image-grid">
              {category.images.map((img, idx) => (
                <div key={idx} className="image-item">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    onClick={() => handleImageClick(img.src)} // Event listener
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Full View" className="lightbox-image" />
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
        </div>
      )}
    </div>
  );
}

export default Image;
