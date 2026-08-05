export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  detailedScope: string[];
  features: string[];
  image: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'villas' | 'towers' | 'malls' | 'residential' | 'infrastructure';
  categoryLabel: string;
  location: string;
  area: string;
  completionYear: string;
  client: string;
  value: string;
  image: string;
  gallery: string[];
  description: string;
  keyFeatures: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export interface StatItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  stepNumber: string;
}
