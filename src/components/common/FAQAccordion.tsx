import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks';
import { faqItems } from '@/data';

interface FAQAccordionProps {
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className={`py-20 bg-oak-50 ${className}`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            ref={ref}
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-h1 font-serif text-iron-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-iron-600">
              Common questions about our process and services
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-oak-50 transition-colors"
                  >
                    <span className="font-serif font-semibold text-lg text-iron-900 pr-4">
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-brass-500 flex-shrink-0 transition-transform duration-300 ${
                        expandedItem === item.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItem === item.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-iron-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-iron-700 mb-4">
              Still have questions?
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

