import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxContextType {
  images: ImageData[];
  currentIndex: number | null;
  isOpen: boolean;
  openLightbox: (images: ImageData[], index: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  previousImage: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const openLightbox = (imageList: ImageData[], index: number) => {
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentIndex(null);
    setImages([]);
    document.body.style.overflow = ''; // Restore scrolling
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Close lightbox when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      setCurrentIndex(null);
      setImages([]);
      document.body.style.overflow = ''; // Restore scrolling
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <LightboxContext.Provider
      value={{
        images,
        currentIndex,
        isOpen,
        openLightbox,
        closeLightbox,
        nextImage,
        previousImage,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

