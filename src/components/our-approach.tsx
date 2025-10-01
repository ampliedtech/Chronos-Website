"use client";

import { motion } from "framer-motion";
import { Eye, Search, Wrench, Map, BarChart3, RefreshCw } from "lucide-react";

export default function OurApproach() {
  const approachSteps = [
    {
      icon: Eye,
      title: "Aligning with Your Vision",
      description: "We immerse ourselves in your strategic priorities"
    },
    {
      icon: Search,
      title: "Thorough Strategic Analysis",
      description: "Identifying opportunities and risks with clarity"
    },
    {
      icon: Wrench,
      title: "Customized Strategy Development",
      description: "Crafting business solutions that work for you"
    },
    {
      icon: Map,
      title: "Practical Implementation Planning",
      description: "Creating roadmaps that turn strategy into action"
    },
    {
      icon: BarChart3,
      title: "Continuous Progress Review",
      description: "Monitoring outcomes and adjusting for evolving needs"
    },
    {
      icon: RefreshCw,
      title: "Agile Strategic Adaptation",
      description: "Keeping your strategy effective as conditions change"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Approach
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Focused on Your Business Needs
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We begin with a deep understanding of your business objectives and requirements. 
            Every insight, every recommendation is crafted to serve your unique goals and 
            advance your corporate vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#CA8F52]/10 rounded-lg flex items-center justify-center mb-6">
                <step.icon className="h-6 w-6 text-[#CA8F52]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
