export interface Testimonial {
  id: string;
  clientName: string;
  clientImage: string;
  rating: number;
  projectType: string;
  quote: string;
  neighborhood: string;
  platform: 'Google' | 'Houzz';
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah & Michael Chen',
    clientImage: '/assets/placeholder.svg',
    rating: 5,
    projectType: 'Kitchen Remodel',
    quote: 'Josh transformed our dated kitchen into a stunning modern space. His attention to detail and craftsmanship exceeded our expectations.',
    neighborhood: 'Riverside',
    platform: 'Google',
  },
  {
    id: '2',
    clientName: 'David Thompson',
    clientImage: '/assets/placeholder.svg',
    rating: 5,
    projectType: 'Custom Built-ins',
    quote: 'The library built-ins are absolutely beautiful. Josh listened to our needs and delivered exactly what we envisioned.',
    neighborhood: 'Downtown',
    platform: 'Houzz',
  },
  {
    id: '3',
    clientName: 'Jennifer Martinez',
    clientImage: '/assets/placeholder.svg',
    rating: 5,
    projectType: 'Staircase Refinish',
    quote: 'Professional, punctual, and incredibly skilled. Our staircase went from builder-grade to showpiece. Highly recommend!',
    neighborhood: 'Oak Hills',
    platform: 'Google',
  },
  {
    id: '4',
    clientName: 'Robert & Lisa Williams',
    clientImage: '/assets/placeholder.svg',
    rating: 5,
    projectType: 'Dining Table',
    quote: 'Josh created a stunning live edge table for our dining room. It&apos;s truly a work of art that we&apos;ll cherish for generations.',
    neighborhood: 'Westside',
    platform: 'Houzz',
  },
  {
    id: '5',
    clientName: 'Amanda Foster',
    clientImage: '/assets/placeholder.svg',
    rating: 5,
    projectType: 'Kitchen Cabinets',
    quote: 'From design to installation, Josh was a pleasure to work with. The quality of his work is exceptional.',
    neighborhood: 'Maple Grove',
    platform: 'Google',
  },
];

export const getFeaturedTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};

