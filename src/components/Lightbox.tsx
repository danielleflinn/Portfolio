import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLightbox } from './LightboxContext';

export function Lightbox() {
  const { images, currentIndex, isOpen, closeLightbox, nextImage, previousImage } = useLightbox();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, previousImage]);

  if (!isOpen || currentIndex === null || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrevious = currentIndex > 0;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center"
      onClick={closeLightbox}
    >
      {/* Close button */}
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Previous button */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={48} />
        </button>
      )}

      {/* Image container */}
      <div
        className="max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[85vh] object-contain"
        />
        {currentImage.caption && (
          <p className="text-white text-sm mt-4 text-center px-4 max-w-2xl">
            {currentImage.caption}
          </p>
        )}
        {images.length > 1 && (
          <p className="text-white text-sm mt-2 opacity-75">
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={48} />
        </button>
      )}
    </div>
  );
}

