import React, { useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';
import { woodSwatches } from '@/data';

interface WoodSwatchesProps {
  className?: string;
}

export const WoodSwatches: React.FC<WoodSwatchesProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });
  const [expandedSwatch, setExpandedSwatch] = useState<string | null>(null);

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="section-container">
        <div
          ref={ref}
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-h3 font-serif text-iron-900 mb-2">
            Wood Selection
          </h3>
          <p className="text-iron-600">
            Premium hardwoods sourced for beauty and durability
          </p>
        </div>

        <div
          className={`flex gap-4 overflow-x-auto custom-scrollbar pb-4 -mx-4 px-4 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {woodSwatches.map((swatch) => (
            <div
              key={swatch.id}
              className="flex-shrink-0 w-64 cursor-pointer"
              onClick={() => setExpandedSwatch(expandedSwatch === swatch.id ? null : swatch.id)}
            >
              <div className="card overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={swatch.image}
                    alt={swatch.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif font-semibold text-iron-900 mb-2">
                    {swatch.name}
                  </h4>
                  <p className="text-sm text-iron-600 mb-3">
                    {swatch.characteristics}
                  </p>
                  
                  {/* Expandable Care Notes */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedSwatch === swatch.id ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <div className="pt-3 border-t border-oak-200">
                      <div className="text-xs font-medium text-iron-700 mb-1">
                        Care Instructions:
                      </div>
                      <div className="text-xs text-iron-600">
                        {swatch.care}
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-brass-600 hover:text-brass-700 text-sm font-medium mt-2 flex items-center gap-1">
                    {expandedSwatch === swatch.id ? 'Hide' : 'View'} Care Notes
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedSwatch === swatch.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

