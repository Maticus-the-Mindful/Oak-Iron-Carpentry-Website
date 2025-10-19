import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/data';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!project.beforeImage) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="card group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setSliderPosition(50);
      }}
      onClick={onClick}
    >
      <div
        className="relative aspect-[4/3] overflow-hidden bg-oak-200"
        onMouseMove={handleMouseMove}
      >
        {project.beforeImage && isHovering ? (
          // Before/After Slider View
          <div className="relative w-full h-full">
            {/* After Image (Background) */}
            <Image
              src={project.heroImage}
              alt={`${project.title} - After`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Before Image (Overlay with clip) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={project.beforeImage}
                alt={`${project.title} - Before`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-iron-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
            {/* Labels */}
            <div className="absolute top-4 left-4 bg-iron-900/80 text-white px-3 py-1 rounded text-sm font-medium">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-iron-900/80 text-white px-3 py-1 rounded text-sm font-medium">
              After
            </div>
          </div>
        ) : (
          // Regular Image View
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Overlay with category */}
        <div className="absolute inset-0 bg-gradient-to-t from-iron-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-brass-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-iron-900 mb-2 group-hover:text-brass-600 transition-colors">
          {project.title}
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs text-iron-600 bg-oak-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-iron-600 bg-oak-100 px-2 py-1 rounded">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* View More Link */}
        <div className="flex items-center text-brass-600 font-medium text-sm group-hover:gap-2 transition-all">
          <span>View Gallery</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

