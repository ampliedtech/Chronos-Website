// Brand Colors - Chronos Strategic Advisors
export const BRAND_COLORS = {
  PRIMARY: '#CA8F52', // Golden brown
  SECONDARY: '#CA8F52', // Golden brown
  INK: '#000000',
  DEEP: '#1a1a1a',
  SURFACE: '#ffffff',
  TEXT: '#000000',
  TEXT_DARK: '#ffffff',
} as const;

// Animation Delays
export const ANIMATION_DELAYS = {
  STAGGER: 0.1,
  FAST: 0.2,
  MEDIUM: 0.4,
  SLOW: 0.6,
} as const;

// Common Animation Durations
export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  MEDIUM: 0.6,
  SLOW: 0.8,
  VERY_SLOW: 1.2,
} as const;

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'info@chronosadvisors.com',
  PHONE: '+917045946799',
  LOCATION: 'Mumbai, India',
  BUSINESS_HOURS: 'Mon-Fri, 9AM-6PM',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/ikigaii-digital-solution?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  TWITTER: 'https://twitter.com/ikigaiidigital',
  GITHUB: 'https://github.com/ikigaii-digital',
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

// Company Information
export const COMPANY_INFO = {
  NAME: 'Chronos Strategic Advisors LLP',
  TAGLINE: 'Destiny is driven by time',
  DESCRIPTION: 'At Chronos Strategic Advisors, we leverage decades of experience to develop tailored business strategies that drive measurable results and align perfectly with your corporate goals.',
  FOUNDING_YEAR: '2024',
  FOUNDER: 'Ketan Godkhindi (Founder)',
  CO_FOUNDER: '',
} as const;

// SEO Constants
export const SEO = {
  SITE_URL: 'https://chronosadvisors.com',
  SITE_NAME: 'Chronos Strategic Advisors LLP',
  DEFAULT_TITLE: 'Chronos Strategic Advisors LLP - Strategic Business Advisory',
  DEFAULT_DESCRIPTION: 'At Chronos Strategic Advisors, we leverage decades of experience to develop tailored business strategies that drive measurable results and align perfectly with your corporate goals.',
  KEYWORDS: ['strategic advisory', 'business strategy', 'IPO preparedness', 'fund raising', 'M&A advisory', 'corporate strategy'] as string[],
} as const;
