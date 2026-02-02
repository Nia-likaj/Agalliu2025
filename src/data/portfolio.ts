import { PortfolioItem } from '../types';

export const portfolio: PortfolioItem[] = [
  {
    id: '1',
    title: 'Modern Villa Complex',
    category: 'residential',
    description: 'Luxury residential complex with 12 villas',
    image: '/assets/portfolio/images/villa-complex.jpg',
    video: '/assets/portfolio/videos/villa-complex.mp4',
    location: 'Prishtina',
    date: '2024',
    tags: ['luxury', 'residential', 'modern'],
  },
  {
    id: '2',
    title: 'Commercial Center',
    category: 'commercial',
    description: 'Multi-story shopping and office complex',
    image: '/assets/portfolio/images/commercial-center.jpg',
    location: 'Prishtina',
    date: '2024',
    tags: ['commercial', 'retail', 'office'],
  },
];
