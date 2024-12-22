import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import styles from './ImageGallery.module.css'


// Define the type for an individual image
interface Image {
  src: string;
  caption: string;
}

// Define the props for the component
interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    console.log(images);
    
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className={styles['gallery-container']}>
      <div className={styles['gallery-container1']}>
        <div className={`${styles['gallery-item']} ${styles['large']}`}>
          <img
            src={images[0]?.src}
            alt={images[0]?.caption}
            onClick={() => openLightbox(0)}
          />
        </div>
        <div className={`${styles['gallery-item']} ${styles['med']}`}>
          <img
            src={images[1]?.src}
            alt={images[1]?.caption}
            onClick={() => openLightbox(1)}
          />
        </div>
        <div className={`${styles['gallery-item']} ${styles['small']}`}>
          <img
            src={images[2]?.src}
            alt={images[2]?.caption}
            onClick={() => openLightbox(2)}
          />
        </div>
        <div className={`${styles['gallery-item']} ${styles['small']} ${styles['overlay']}`}>
          <img
            src={images[3]?.src}
            alt={images[3]?.caption}
          />
          <div className={styles['overlay-text']}>
            <button onClick={() => openLightbox(0)}>
              +{images.length - (isMobile ? 2 : 3)} Photos
            </button>
          </div>
        </div>
      </div>
      {/* Custom Lightbox with Thumbnails */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((image) => ({
            src: image.src,
            title: image.caption,
          }))}
          plugins={[Thumbnails]}
          index={photoIndex}
          carousel={{ padding: 5 }}
        />
      )}
    </div>
  );
};

export default ImageGallery;
