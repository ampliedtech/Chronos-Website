"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, CheckCircle, Globe, Clock, Target, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Simplified floating strategic icons */}
        <motion.div
          className="absolute top-20 left-10 text-[#CA8F52]/20"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Clock className="h-6 w-6" />
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-20 text-[#CA8F52]/20"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Target className="h-8 w-8" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-16 text-[#CA8F52]/15"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <TrendingUp className="h-7 w-7" />
        </motion.div>
        
        {/* Static gradient orbs for better performance */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#CA8F52]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#CA8F52]/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-[#CA8F52]">Destiny is driven by time</span>
            </h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Chronos Strategic Advisors, we leverage decades of experience to develop tailored business strategies that drive measurable results and align perfectly with your corporate goals.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#CA8F52] hover:bg-[#CA8F52]/80 text-white px-12 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Schedule a Strategic Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#CA8F52] text-[#CA8F52] hover:bg-[#CA8F52]/10 hover:border-[#CA8F52] px-12 py-6 rounded-md backdrop-blur-sm transition-all duration-300 font-medium"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Explore Our Services</span>
              </Link>
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
            <div className="w-20 h-20 bg-[#CA8F52]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#CA8F52]/20 transition-colors duration-300">
              <Target className="h-10 w-10 text-[#CA8F52]" />
            </div>
              <h3 className="text-xl font-semibold text-white">Strategic Focus</h3>
              <p className="text-gray-400">We think and act like seasoned business leaders, not just consultants.</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
            <div className="w-20 h-20 bg-[#CA8F52]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#CA8F52]/20 transition-colors duration-300">
              <TrendingUp className="h-10 w-10 text-[#CA8F52]" />
            </div>
              <h3 className="text-xl font-semibold text-white">Proven Results</h3>
              <p className="text-gray-400">Every recommendation is grounded in practical experience that advances your objectives.</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-6 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
            <div className="w-20 h-20 bg-[#CA8F52]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#CA8F52]/20 transition-colors duration-300">
              <Clock className="h-10 w-10 text-[#CA8F52]" />
            </div>
              <h3 className="text-xl font-semibold text-white">Long-term Growth</h3>
              <p className="text-gray-400">We prioritize sustainable competitive advantages and strong market positioning.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
