"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, Users, Target, TrendingUp } from "lucide-react";

export default function WhatSetsUsApart() {
  const differentiators = [
    "We think and act like seasoned business leaders, not just consultants",
    "Every recommendation is grounded in practical experience that advances your objectives",
    "Our focus is on building sustainable competitive advantages and strong market positioning",
    "We prioritize long-term business growth and resilience over short-term gains",
    "We recognize that enduring business success is built on rigorous, effective strategies"
  ];

  const brandMessages = [
    "Destiny is driven by time",
    "Business strategy grounded in experience, delivering results",
    "Strategic advisors committed to your business success",
    "Where business vision meets disciplined execution",
    "Your trusted partner in business transformation"
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Sets Us Apart
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-black mb-8">Our Unique Approach</h3>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#CA8F52]/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-[#CA8F52]" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brand Messages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-black mb-8">Refined Brand Messages</h3>
            <div className="space-y-6">
              {brandMessages.map((message, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#CA8F52]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-[#CA8F52] flex-shrink-0" />
                    <p className="text-black font-medium">{message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
