export type PortfolioMediaType = "image" | "video";

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  video?: string;
  location: string;
  date: string;
  tags: string[];
}

export type PortfolioCategory = "all" | "residential" | "commercial" | "industrial" | "special";
