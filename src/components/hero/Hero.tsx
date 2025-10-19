import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParallax } from '@/hooks';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxOffset = useParallax(0.5);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${className}`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/assets/hero/hero-workshop-v2.png?t=1234567890"
            alt="Josh's workshop - custom cabinetry and fine woodwork"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-iron-900/60 via-iron-900/50 to-iron-900/70" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-20 pt-32">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1
            className={`font-serif text-white mb-6 transition-all duration-500 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Custom cabinetry and fine woodwork,{' '}
            <span className="text-brass-400">built for your home.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl md:text-2xl text-oak-100 mb-10 max-w-2xl transition-all duration-500 delay-100 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            Kitchens, built-ins, stair details, and one-off pieces, crafted in Your City.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-500 delay-200 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            <button
              onClick={scrollToContact}
              className="btn bg-brass-500 hover:bg-brass-600 text-white px-8 py-4 text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Request a Quote
            </button>
            <button
              onClick={scrollToPortfolio}
              className="btn bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 text-lg font-semibold rounded-md transition-all"
            >
              See Recent Work
            </button>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-wrap gap-6 md:gap-8 text-oak-100 transition-all duration-500 delay-300 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-brass-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">10+ years of craft</span>
            </div>
            <div className="hidden md:block text-oak-300">|</div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-brass-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="hidden md:block text-oak-300">|</div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-brass-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span className="font-medium">100% Custom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

