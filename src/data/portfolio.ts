export type ProjectCategory = 'Kitchens' | 'Built-ins' | 'Stairwork' | 'Furniture';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  heroImage: string;
  beforeImage?: string;
  tags: string[];
  galleryImages: string[];
  description?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: '1',
    title: 'Modern White Oak Kitchen',
    category: 'Kitchens',
    heroImage: '/assets/placeholder.svg',
    beforeImage: '/assets/placeholder.svg',
    tags: ['White oak', 'Inset doors', 'Soft-close', 'Custom island'],
    galleryImages: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    description: 'Full kitchen remodel featuring custom white oak cabinetry with inset doors and soft-close hardware.',
  },
  {
    id: '2',
    title: 'Walnut Library Built-ins',
    category: 'Built-ins',
    heroImage: '/assets/placeholder.svg',
    beforeImage: '/assets/placeholder.svg',
    tags: ['Walnut', 'Floor-to-ceiling', 'Adjustable shelves'],
    galleryImages: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    description: 'Custom walnut library built-ins with adjustable shelving and integrated lighting.',
  },
  {
    id: '3',
    title: 'Traditional Staircase Refinish',
    category: 'Stairwork',
    heroImage: '/assets/placeholder.svg',
    beforeImage: '/assets/placeholder.svg',
    tags: ['Oak treads', 'Custom newels', 'Hand-turned balusters'],
    galleryImages: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    description: 'Complete staircase refinish with custom oak treads and hand-turned balusters.',
  },
  {
    id: '4',
    title: 'Live Edge Dining Table',
    category: 'Furniture',
    heroImage: '/assets/placeholder.svg',
    tags: ['Live edge', 'Black walnut', 'Steel base', 'Natural finish'],
    galleryImages: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    description: 'Custom live edge black walnut dining table with steel base.',
  },
  {
    id: '5',
    title: 'Shaker Style Kitchen',
    category: 'Kitchens',
    heroImage: '/assets/placeholder.svg',
    beforeImage: '/assets/placeholder.svg',
    tags: ['Maple', 'Shaker doors', 'Quartz counters', 'Custom pantry'],
    galleryImages: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    description: 'Classic shaker style kitchen in maple with custom pantry organization.',
  },
  {
    id: '6',
    title: 'Entertainment Center',
    category: 'Built-ins',
    heroImage: '/assets/placeholder.svg',
    tags: ['Cherry wood', 'Cable management', 'LED lighting'],
    galleryImages: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    description: 'Custom cherry entertainment center with integrated cable management and LED lighting.',
  },
];

export const getProjectsByCategory = (category: ProjectCategory | 'All'): Project[] => {
  if (category === 'All') {
    return portfolioProjects;
  }
  return portfolioProjects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (count: number = 3): Project[] => {
  return portfolioProjects.slice(0, count);
};

