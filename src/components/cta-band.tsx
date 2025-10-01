"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export default function CTABand() {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CA8F52] via-[#7B1315] to-[#CA8F52]" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center space-y-8">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-textd"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to drive your business destiny with{" "}
            <span className="text-white">Strategic Advisory?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-textd/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join forward-thinking companies that have embraced our strategic approach for measurable results, 
            sustainable growth, and competitive advantages. Schedule your consultation today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#CA8F52] hover:bg-white/90 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-glow transition-all duration-300"
            >
              <Link 
                href="/contact" 
                className="flex items-center space-x-2"
                onClick={() => trackEvent('cta_clicked', { 
                  cta_type: 'start_partnership',
                  location: 'cta_band'
                })}
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white text-lg px-8 py-6 font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <Link 
                href="/services"
                onClick={() => trackEvent('cta_clicked', { 
                  cta_type: 'view_solutions',
                  location: 'cta_band'
                })}
              >
                Explore Our Services
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-textd/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">Decades of experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">Strategic business focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">Measurable results</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
