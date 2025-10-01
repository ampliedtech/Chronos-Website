// import { ReactNode } from "react";
// import { cn } from "@/lib/utils";

// interface SectionProps {
//   children: ReactNode;
//   className?: string;
//   background?: "light" | "dark" | "surface" | "brand" | "ink";
//   id?: string;
// }

// export default function Section({ 
//   children, 
//   className, 
//   background = "light",
//   id
// }: SectionProps) {
//   const backgroundClasses = {
//     light: "bg-surface",
//     dark: "bg-ink text-textd",
//     surface: "bg-accent",
//     brand: "bg-gradient-to-br from-brand-primary to-brand-secondary text-textd",
//     ink: "bg-ink text-textd",
//   };

//   return (
//     <section 
//       id={id}
//       className={cn(
//         "py-16 lg:py-24",
//         backgroundClasses[background],
//         className
//       )}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {children}
//       </div>
//     </section>
//   );
// }
"use client";

import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";

// Type declaration for FinisherHeader
interface FinisherHeaderConfig {
  count: number;
  size: { min: number; max: number; pulse: number };
  speed: { x: { min: number; max: number }; y: { min: number; max: number } };
  colors: { background: string; particles: string[] };
  blending: string;
  opacity: { center: number; edge: number };
  skew: number;
  shapes: string[];
}

declare global {
  interface Window {
    FinisherHeader?: new (config: FinisherHeaderConfig) => void;
  }
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "light" | "dark" | "surface" | "brand" | "ink" | "seamless";
  id?: string;
}

export default function Section({
  children,
  className,
  background = "light",
  id,
}: SectionProps) {
  const backgroundClasses = {
    light: "bg-surface",
    dark: "bg-ink text-textd",
    surface: "bg-accent",
    brand: "bg-gradient-to-br from-brand-primary to-brand-secondary text-textd",
    ink: "bg-ink text-textd",
    seamless: "relative", // Finisher background handled with script
  };

  useEffect(() => {
    if (background === "seamless") {
      const script = document.createElement("script");
      script.src = "/finisher-header.es5.min.js"; // Place file in /public
      script.async = true;
      script.onload = () => {
        // Wait for the DOM element to be available
        const initFinisher = () => {
          const finisherElement = document.querySelector('.finisher-header');
          if (finisherElement && window.FinisherHeader) {
            try {
              new window.FinisherHeader({
                count: 6,
                size: { min: 1100, max: 1300, pulse: 0 },
                speed: {
                  x: { min: 0.1, max: 0.5 },
                  y: { min: 0.1, max: 0.5 },
                },
                colors: {
                  background: "#000000",
                  particles: ["#ff6b35", "#ff8c42", "#ffa500"],
                },
                blending: "overlay",
                opacity: { center: 1, edge: 0.1 },
                skew: 0,
                shapes: ["c"],
              });
            } catch (error) {
              console.warn('Finisher Header initialization failed:', error);
            }
          } else if (!finisherElement) {
            // Retry after a short delay if element not found
            setTimeout(initFinisher, 100);
          }
        };
        
        // Initialize immediately or after a short delay
        setTimeout(initFinisher, 50);
      };
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [background]);

  return (
    <div
      className={cn(
        background === "seamless" ? "finisher-header" : "",
        "relative"
      )}
      style={{ width: "100%", height: "100%" }}
    >
      <section
        id={id}
        className={cn("py-16 lg:py-24", backgroundClasses[background], className, "relative z-10")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    </div>
  );
}
