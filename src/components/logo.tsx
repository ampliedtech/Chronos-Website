"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "icon" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
}

export default function Logo({ 
  variant = "full", 
  size = "md", 
  className,
  animated = false 
}: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: "w-8 h-8",
      text: "text-lg",
      container: "space-x-2"
    },
    md: {
      icon: "w-12 h-12", 
      text: "text-xl",
      container: "space-x-3"
    },
    lg: {
      icon: "w-16 h-16",
      text: "text-2xl", 
      container: "space-x-4"
    }
  };

  const currentSize = sizeClasses[size];

  const IconLogo = () => (
    <motion.div
      className={cn(
        "relative flex items-center justify-center",
        currentSize.icon,
        className
      )}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full h-full bg-gradient-to-br from-[#CA8F52] to-[#7B1315] rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
    </motion.div>
  );

  const TextLogo = () => (
    <motion.span
      className={cn(
        "font-bold text-textd group-hover:text-brand-primary transition-colors duration-300",
        currentSize.text,
        className
      )}
      initial={animated ? { opacity: 0, x: -10 } : {}}
      animate={animated ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      CHRONOS
    </motion.span>
  );

  if (variant === "icon") {
    return <IconLogo />;
  }

  return (
    <motion.div
      className={cn(
        "flex items-center",
        currentSize.container,
        className
      )}
      initial={animated ? { opacity: 0, y: -10 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <IconLogo />
      <TextLogo />
    </motion.div>
  );
}
