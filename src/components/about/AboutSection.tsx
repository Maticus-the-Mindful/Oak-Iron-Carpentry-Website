import React, { useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

interface AboutSectionProps {
  className?: string;
}

const stats = [
  { label: 'Years in Craft', value: '10+' },
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '120+' },
];

const preferredWoods = [
  'White Oak',
  'Black Walnut',
  'Hard Maple',
  'Cherry',
  'Hickory',
];

const tools = [
  {
    id: 1,
    name: 'Hand Planes',
    description: 'Traditional smoothing and shaping',
    icon: '✋',
  },
  {
    id: 2,
    name: 'Dovetail Saw',
    description: 'Precision joinery',
    icon: '🪚',
  },
  {
    id: 3,
    name: 'Chisels',
    description: 'Detail work and mortises',
    icon: '🔨',
  },
  {
    id: 4,
    name: 'Router',
    description: 'Edge profiles and dados',
    icon: '⚙️',
  },
  {
    id: 5,
    name: 'Cabinet Saw',
    description: 'Precise cuts and dimensioning',
    icon: '⚡',
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  return (
    <section id="about" className={`py-20 bg-white ${className}`}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/placeholder.svg"
                alt="Josh Catiller in the workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-brass-600 font-serif">
                        {stat.value}
                      </div>
                      <div className="text-xs text-iron-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-h1 font-serif text-iron-900 mb-6">
              About the Craftsman
            </h2>
            
            {/* Bio */}
            <div className="prose prose-lg mb-8">
              <p className="text-iron-700 leading-relaxed mb-4">
                I'm Josh Catiller, and I've been building custom furniture and cabinetry for over a decade. 
                What started as a passion for woodworking has become a career dedicated to creating pieces 
                that homeowners will treasure for generations.
              </p>
              <p className="text-iron-700 leading-relaxed">
                Every project begins with understanding your vision and your space. I work closely with you 
                from initial concept through installation, ensuring the final piece exceeds your expectations. 
                Whether it's a complete kitchen remodel or a custom bookshelf, I approach each project with 
                the same attention to detail and commitment to quality.
              </p>
            </div>

            {/* Preferred Woods */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-semibold text-iron-900 mb-4">
                Preferred Woods
              </h3>
              <div className="flex flex-wrap gap-3">
                {preferredWoods.map((wood, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-oak-100 text-iron-800 rounded-full text-sm font-medium"
                  >
                    {wood}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-semibold text-iron-900 mb-4">
                Location & Service Area
              </h3>
              <div className="flex items-start gap-3 text-iron-700">
                <svg className="w-6 h-6 text-brass-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">Based in Your City</p>
                  <p className="text-sm text-iron-600">Serving the greater metro area and surrounding communities</p>
                </div>
              </div>
            </div>

            {/* Tools Showcase */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-iron-900 mb-4">
                Tools of the Trade
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="relative"
                    onMouseEnter={() => setHoveredTool(tool.id)}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <button
                      className="w-14 h-14 rounded-full bg-oak-100 hover:bg-oak-200 flex items-center justify-center text-2xl transition-all transform hover:scale-110"
                      aria-label={tool.name}
                    >
                      {tool.icon}
                    </button>
                    
                    {/* Tooltip */}
                    {hoveredTool === tool.id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-iron-900 text-white text-sm rounded-lg whitespace-nowrap z-10 animate-fade-in">
                        <div className="font-medium">{tool.name}</div>
                        <div className="text-xs text-oak-200">{tool.description}</div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-iron-900" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

