import { useRef, useEffect } from 'react';
import { useLightbox, ImageData } from './LightboxContext';

interface ClickableImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ClickableImage({ src, alt, caption, className = '' }: ClickableImageProps) {
  const { openLightbox } = useLightbox();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleClick = () => {
      // Collect all images from the current page that have data-lightbox attribute
      const pageImages: ImageData[] = [];
      const allImages = document.querySelectorAll('img[data-lightbox]');
      
      allImages.forEach((image) => {
        const imgElement = image as HTMLImageElement;
        const imgSrc = imgElement.getAttribute('src') || '';
        const imgAlt = imgElement.alt;
        const imgCaption = imgElement.getAttribute('data-caption') || undefined;
        
        // Ensure src is absolute
        const absoluteSrc = imgSrc.startsWith('http') || imgSrc.startsWith('/') 
          ? imgSrc 
          : `/${imgSrc}`;
        
        pageImages.push({
          src: absoluteSrc,
          alt: imgAlt,
          caption: imgCaption,
        });
      });

      // Find the index of the clicked image
      let clickedIndex = 0;
      allImages.forEach((image, index) => {
        if (image === img) {
          clickedIndex = index;
        }
      });

      if (pageImages.length > 0) {
        openLightbox(pageImages, clickedIndex);
      }
    };

    img.addEventListener('click', handleClick);
    img.style.cursor = 'pointer';
    
    return () => {
      img.removeEventListener('click', handleClick);
    };
  }, [openLightbox]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} cursor-pointer`}
      data-lightbox="true"
      data-caption={caption}
    />
  );
}

