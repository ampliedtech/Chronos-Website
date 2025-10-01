import { ANIMATION_DELAYS, ANIMATION_DURATIONS } from '@/constants';

// Common animation variants
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: ANIMATION_DURATIONS.MEDIUM, delay }
});

export const fadeInLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: ANIMATION_DURATIONS.MEDIUM, delay }
});

export const fadeInRight = (delay = 0) => ({
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: ANIMATION_DURATIONS.MEDIUM, delay }
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: ANIMATION_DURATIONS.MEDIUM, delay }
});

export const staggerContainer = (staggerChildren = 0.1) => ({
  animate: {
    transition: {
      staggerChildren
    }
  }
});

export const staggerItem = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: ANIMATION_DURATIONS.FAST, delay }
});

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: ANIMATION_DURATIONS.FAST }
};

export const hoverLift = {
  whileHover: { y: -8 },
  transition: { duration: ANIMATION_DURATIONS.FAST }
};

// Stagger animation for lists
export const staggerList = (items: any[], baseDelay = 0) => 
  items.map((_, index) => staggerItem(baseDelay + (index * ANIMATION_DELAYS.STAGGER)));

// Viewport animations
export const viewportOnce = { once: true, margin: "-100px" };
