import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks';
import { Project, ProjectCategory, getProjectsByCategory } from '@/data';
import { ProjectCard } from './ProjectCard';
import { Lightbox } from './Lightbox';

interface PortfolioGalleryProps {
  className?: string;
}

const categories: (ProjectCategory | 'All')[] = ['All', 'Kitchens', 'Built-ins', 'Stairwork', 'Furniture'];

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = getProjectsByCategory(activeCategory);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="portfolio" className={`py-20 bg-white ${className}`}>
      <div className="section-container">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h1 font-serif text-iron-900 mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-iron-600 max-w-2xl mx-auto">
            From custom kitchens to one-of-a-kind furniture pieces, each project is crafted with precision and care.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-iron-800 text-white shadow-md'
                  : 'bg-oak-100 text-iron-700 hover:bg-oak-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && filteredProjects.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn btn-secondary px-8 py-3"
            >
              View More Projects ({filteredProjects.length - 6} more)
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-iron-600 text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <Lightbox
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

