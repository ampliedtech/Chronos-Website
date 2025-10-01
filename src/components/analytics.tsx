"use client";

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Simple page view tracking
    const trackPageView = () => {
      // You can replace this with your preferred analytics service
      console.log('Page view:', window.location.pathname);
      
      // Example: Google Analytics 4
      // gtag('config', 'GA_MEASUREMENT_ID', {
      //   page_path: window.location.pathname,
      // });
    };

    // Track initial page view
    trackPageView();

    // Track route changes (for SPA behavior)
    const handleRouteChange = () => {
      trackPageView();
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null; // This component doesn't render anything
}

// Event tracking function
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (process.env.NODE_ENV !== 'production') return;
  
  console.log('Event tracked:', eventName, parameters);
  
  // Example: Google Analytics 4
  // gtag('event', eventName, parameters);
};
