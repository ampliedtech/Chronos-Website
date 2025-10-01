"use client";

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if PerformanceObserver is supported
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Debounced performance logging to reduce console spam
    let timeoutId: NodeJS.Timeout;
    const debouncedLog = (message: string, value: number) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log(`[Performance] ${message}:`, value);
      }, 1000);
    };

    // Monitor Core Web Vitals with reduced frequency
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log LCP (Largest Contentful Paint) - only log if > 2.5s
        if (entry.entryType === 'largest-contentful-paint' && entry.startTime > 2500) {
          debouncedLog('LCP (slow)', entry.startTime);
        }
        
        // Log FID (First Input Delay) - only log if > 100ms
        if (entry.entryType === 'first-input') {
          const fid = entry.processingStart - entry.startTime;
          if (fid > 100) {
            debouncedLog('FID (slow)', fid);
          }
        }
        
        // Log CLS (Cumulative Layout Shift) - only log if > 0.1
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          const cls = (entry as any).value;
          if (cls > 0.1) {
            debouncedLog('CLS (poor)', cls);
          }
        }
      }
    });

    // Observe with error handling
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Silently fail if not supported
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return null; // This component doesn't render anything
}
