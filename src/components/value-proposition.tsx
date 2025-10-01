"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Shield } from "lucide-react";

export default function ValueProposition() {
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
            Your business destiny is shaped by the strategic choices made at the right moments
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Chronos Strategic Advisors, we partner closely with corporates and their promoters, 
            applying proven expertise to craft actionable strategies that deliver lasting value and 
            accelerate business success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Strategic Focus",
              description: "We think and act like seasoned business leaders, not just consultants"
            },
            {
              icon: TrendingUp,
              title: "Proven Results",
              description: "Every recommendation is grounded in practical experience that advances your objectives"
            },
            {
              icon: Shield,
              title: "Sustainable Growth",
              description: "We prioritize long-term business growth and resilience over short-term gains"
            },
            {
              icon: Users,
              title: "Partnership Approach",
              description: "We recognize that enduring business success is built on rigorous, effective strategies"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#CA8F52]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-[#CA8F52]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
