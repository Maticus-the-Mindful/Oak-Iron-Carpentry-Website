import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';
import { processSteps } from '@/data';

interface ProcessTimelineProps {
  className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });

  return (
    <section id="process" className={`py-20 bg-oak-50 ${className}`}>
      <div className="section-container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h1 font-serif text-iron-900 mb-4">
            The Process
          </h2>
          <p className="text-lg text-iron-600 max-w-2xl mx-auto">
            From initial consultation to final installation, every step is designed to ensure your complete satisfaction.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Progress Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-oak-300">
            <div
              className={`h-full bg-brass-500 transition-all duration-[1500ms] ease-out ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Brass Dot Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-brass-500 rounded-full border-4 border-oak-50 z-10" />
                    
                    {/* Icon */}
                    <div className="relative w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="inline-block bg-brass-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-iron-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-iron-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              {/* Left Side - Icon and Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Icon */}
                <div className="relative w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  {/* Number Badge */}
                  <div className="absolute -top-1 -right-1 bg-brass-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="w-1 flex-grow bg-brass-500 min-h-[60px]" />
                )}
              </div>

              {/* Right Side - Content */}
              <div className="flex-grow pb-8">
                <h3 className="text-xl font-serif font-semibold text-iron-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-iron-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-iron-700 mb-6">
            Ready to start your custom project?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-primary px-8 py-3"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

