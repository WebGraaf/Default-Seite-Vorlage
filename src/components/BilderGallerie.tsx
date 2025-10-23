import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight' && onNext) onNext();
        if (e.key === 'ArrowLeft' && onPrev) onPrev();
      };
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute top-4 right-16 p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-10"
      >
        {isZoomed ? <Maximize2 className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
      </button>

      {onPrev && images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      <div className={`relative max-w-7xl max-h-[90vh] transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-semibold">
          Platzhalter für {images[currentIndex]}
        </div>
      </div>

      {onNext && images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

interface BilderGallerieProps {
  images?: string[];
}

export const BilderGallerie: React.FC<BilderGallerieProps> = ({
  images = ['Platzhalter 1', 'Platzhalter 2', 'Platzhalter 3', 'Platzhalter 4', 'Platzhalter 5', 'Platzhalter 6']
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm font-semibold">
              {image}
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};