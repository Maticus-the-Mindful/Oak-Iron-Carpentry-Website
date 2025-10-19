export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How long does a typical kitchen project take?',
    answer: 'Most kitchen projects take 6-10 weeks from initial measurement to final installation. This includes design consultation, material ordering, building in the shop, and on-site installation. Timeline can vary based on project complexity and material availability.',
  },
  {
    id: '2',
    question: 'Do you provide design services?',
    answer: 'Yes! I work closely with you to design pieces that fit your space and style perfectly. We&apos;ll discuss your needs, take precise measurements, and create detailed drawings before any building begins. I can also collaborate with your architect or designer.',
  },
  {
    id: '3',
    question: 'What types of wood do you work with?',
    answer: 'I work with a variety of hardwoods including white oak, walnut, maple, cherry, and hickory. Each wood has unique characteristics, and I&apos;ll help you choose the best species for your project based on aesthetics, durability, and budget. I source from sustainable suppliers whenever possible.',
  },
];

export const processSteps = [
  {
    id: '1',
    title: 'Discover',
    icon: '/assets/icons/icon-discover.svg',
    description: 'We discuss your vision, needs, and budget. I&apos;ll visit your space to understand the context and possibilities.',
  },
  {
    id: '2',
    title: 'Measure',
    icon: '/assets/icons/icon-measure.svg',
    description: 'Precise measurements and detailed drawings ensure everything fits perfectly. You&apos;ll approve the design before I begin building.',
  },
  {
    id: '3',
    title: 'Build',
    icon: '/assets/icons/icon-build.svg',
    description: 'Expert craftsmanship in my shop. I&apos;ll keep you updated on progress and welcome you to visit and see your piece taking shape.',
  },
  {
    id: '4',
    title: 'Install',
    icon: '/assets/icons/icon-install.svg',
    description: 'Professional installation with minimal disruption. I ensure everything is perfectly fitted, finished, and ready to enjoy.',
  },
];

export const woodSwatches = [
  {
    id: '1',
    name: 'White Oak',
    image: '/assets/placeholder.svg',
    characteristics: 'Durable, beautiful grain, ages gracefully',
    care: 'Dust regularly, use coasters, avoid direct sunlight',
  },
  {
    id: '2',
    name: 'Black Walnut',
    image: '/assets/placeholder.svg',
    characteristics: 'Rich color, fine grain, premium hardwood',
    care: 'Mineral oil yearly, avoid moisture, gentle cleaning',
  },
  {
    id: '3',
    name: 'Hard Maple',
    image: '/assets/placeholder.svg',
    characteristics: 'Extremely durable, subtle grain, light color',
    care: 'Wipe spills immediately, regular dusting, no harsh chemicals',
  },
  {
    id: '4',
    name: 'Cherry',
    image: '/assets/placeholder.svg',
    characteristics: 'Darkens with age, smooth grain, warm tones',
    care: 'Allow to age naturally, dust weekly, oil finish occasionally',
  },
  {
    id: '5',
    name: 'Hickory',
    image: '/assets/placeholder.svg',
    characteristics: 'Very strong, dramatic grain, rustic appeal',
    care: 'Durable finish, standard care, embraces character',
  },
];

