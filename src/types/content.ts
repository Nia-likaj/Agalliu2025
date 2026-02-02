export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'corporate' | 'commercial';
  thumbnail: string;
  video: string;
  date: string;
  description?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
