import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data';

interface LightboxProps {
  project: Project;
  onClose: () => void;
  isOpen: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({ project, onClose, isOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [project.heroImage, ...project.galleryImages];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, allImages.length]);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-iron-900/95 backdrop-blur-sm animate-fade-in">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-iron-900/80 to-transparent">
        <div className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-white mb-1">
              {project.title}
            </h2>
            <p className="text-oak-200 text-sm">
              {currentImageIndex + 1} / {allImages.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="absolute inset-0 flex items-center justify-center p-20">
        <div className="relative w-full h-full max-w-6xl">
          <Image
            src={allImages[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={90}
            priority
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      {allImages.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors text-white"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors text-white"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Thumbnail Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-iron-900/80 to-transparent">
        <div className="p-6 overflow-x-auto custom-scrollbar">
          <div className="flex gap-2 min-w-min justify-center">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-20 h-20 flex-shrink-0 rounded overflow-hidden transition-all ${
                  index === currentImageIndex
                    ? 'ring-2 ring-brass-400 opacity-100'
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details */}
      {project.description && (
        <div className="absolute bottom-24 left-6 right-6 max-w-md">
          <div className="bg-iron-900/80 backdrop-blur-sm text-white p-4 rounded-lg">
            <p className="text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-brass-500/30 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

