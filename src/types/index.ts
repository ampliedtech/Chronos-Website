import { LucideIcon } from 'lucide-react';

// Service Types
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  iconGradient: string;
}

export interface DetailedService extends Service {
  technologies: string[];
}

// Customer Types
export interface Customer {
  name: string;
  logo: string;
  description: string;
  industry: string;
  testimonial: string;
  rating: number;
  projectType: string;
}

export interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
}

// Testimonial Types
export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

// Technology Types
export interface Technology {
  name: string;
  category: string;
  icon: React.ReactNode;
}

// Contact Types
export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
}


// Stats Types
export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

// Component Props Types
export interface SectionProps {
  id?: string;
  background?: 'surface' | 'light' | 'ink' | 'seamless';
  className?: string;
  children: React.ReactNode;
}

export interface LogoProps {
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

// Animation Types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Form Types
export interface FormState {
  isSubmitting: boolean;
  errors: Record<string, string>;
  success: boolean;
}

// SEO Types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}
