import React from 'react';
import { useIntersectionObserver } from '@/hooks';

interface VideoSectionProps {
  className?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  return (
    <section className={`py-20 bg-iron-900 ${className}`}>
      <div className="section-container">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-h2 font-serif text-white mb-3">
              Craftsmanship in Action
            </h3>
            <p className="text-oak-200">
              A glimpse into the workshop where your custom pieces come to life
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder for video - in production, replace with actual video */}
            <div className="absolute inset-0 bg-oak-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-brass-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-oak-200">Workshop Video Showcase</p>
                <p className="text-sm text-oak-400 mt-1">
                  (Video element would autoplay here in production)
                </p>
              </div>
            </div>
            
            {/* 
            Uncomment for actual video implementation:
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/video/workshop-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

