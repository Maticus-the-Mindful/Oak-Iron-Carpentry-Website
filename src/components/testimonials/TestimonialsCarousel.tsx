import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks';
import { testimonials } from '@/data';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialsCarouselProps {
  className?: string;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(testimonials.length - 3, prev + 1));
  };

  return (
    <section id="testimonials" className={`py-20 bg-oak-50 ${className}`}>
      <div className="section-container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h1 font-serif text-iron-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-lg text-iron-600 max-w-2xl mx-auto mb-6">
            What homeowners are saying about working with Oak & Iron Carpentry
          </p>
          
          {/* Platform Logos */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-iron-700">Google Reviews</span>
            </div>
            <span className="text-oak-400">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4dbc15"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.707 6.293L11 15l-2.707-2.707 1.414-1.414L11 12.172l3.293-3.293 1.414 1.414z"
                />
              </svg>
              <span className="text-sm font-medium text-iron-700">Houzz</span>
            </div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <div className="relative">
            <div
              className={`grid grid-cols-3 gap-8 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            {testimonials.length > 3 && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous testimonials"
                >
                  <svg className="w-6 h-6 text-iron-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= testimonials.length - 3}
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Next testimonials"
                >
                  <svg className="w-6 h-6 text-iron-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Carousel - Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory custom-scrollbar pb-4 -mx-4 px-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] snap-center"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

