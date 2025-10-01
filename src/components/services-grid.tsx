"use client";

import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  DollarSign, 
  Building,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const services = [
  {
    icon: TrendingUp,
    title: "IPO Preparedness",
    description: "Preparing for an IPO demands a clear, forward-looking vision as a public company. We support businesses across regulated industries, AI-driven technology, conventional sectors, and emerging fields like renewable energy.",
    features: ["Growth Strategy Validation", "Market Positioning", "Organizational Excellence", "Investor Story Development"],
    gradient: "from-[#CA8F52]/10 via-[#CA8F52]/5 to-[#CA8F52]/10",
    iconGradient: "from-[#7B1315] to-[#CA8F52]"
  },
  {
    icon: DollarSign,
    title: "Fund Raising (up to USD 5-6 Million)",
    description: "Capital is a catalyst for growth. We partner with businesses across regulated industries, AI-driven technology, conventional sectors, and emerging businesses such as renewable energy to define clear, strategic plans.",
    features: ["Investment Proposition Development", "Strategic Positioning", "Growth Model Design", "Investor Engagement Strategy"],
    gradient: "from-[#CA8F52]/10 via-[#CA8F52]/5 to-[#CA8F52]/10",
    iconGradient: "from-[#7B1315] to-[#CA8F52]"
  },
  {
    icon: Building,
    title: "Business Expansion & Corporate Strategy",
    description: "We provide ongoing retainership services to support your evolving business expansion and corporate strategy needs. Our approach ensures continuous strategic alignment and agility in a dynamic business environment.",
    features: ["Strategic Framework Development", "Expansion Planning", "Organizational Design", "Integrated Advisory Support"],
    gradient: "from-[#CA8F52]/10 via-[#CA8F52]/5 to-[#CA8F52]/10",
    iconGradient: "from-[#7B1315] to-[#CA8F52]"
  },
  {
    icon: Target,
    title: "M&A Advisory",
    description: "We work with clients to define a clear transaction strategy that aligns with their broader business objectives. Our approach ensures every deal supports long-term growth and value creation.",
    features: ["Strategic Transaction Planning", "Business Positioning", "Value Creation Strategy", "Integration Strategy"],
    gradient: "from-[#CA8F52]/10 via-[#CA8F52]/5 to-[#CA8F52]/10",
    iconGradient: "from-[#7B1315] to-[#CA8F52]"
  },
];

// Individual Service Card Component
function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const Icon = service.icon;
  const router = useRouter();
  const pathname = usePathname();

  const handleLearnMore = () => {
    const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    
    if (pathname === '/services') {
      // If on services page, scroll to the detailed section
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ 
          
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
          
        });
      }
    } else {
      // If on homepage, navigate to services page with hash
      router.push(`/services#${serviceId}`);
    }
  };

  const handleHover = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.05,
      rotateY: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };

  const handleLeave = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={handleHover}
      onHoverEnd={handleLeave}
      className="group"
    >
      <motion.div
        animate={controls}
        className="h-full"
      >
        <Card className="h-full relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm group-hover:bg-white/95 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10">
          {/* Animated background gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          

          <CardContent className="relative p-8 space-y-6 z-10">
            {/* Icon with simplified animation */}
            <div className={`w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-3xl flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-brand-primary/25 transition-all duration-300`}>
              <Icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black group-hover:text-brand-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600 group-hover:text-gray-600 transition-colors duration-300">
                {service.description}
              </p>
            </div>

            {/* Simplified features list */}
            <div className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center space-x-3 text-gray-600 text-sm group-hover:text-brand-primary transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action button */}
            <div className="pt-4">
              <button
                onClick={handleLearnMore}
                className="flex items-center space-x-2 text-brand-primary font-semibold text-sm group-hover:text-brand-primary/80 transition-colors duration-300 cursor-pointer hover:translate-x-1"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <div className="space-y-16">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-text leading-[1.3] inline-block"
          whileInView={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, #000000 0%, #CA8F52 50%, #7B1315 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            paddingBottom: "0.1em", 
          }}
        >
          Our Strategic Advisory Services
        </motion.h2>
        <motion.p 
          className="text-xl max-w-3xl mx-auto text-black"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover our comprehensive range of strategic advisory services designed to drive your business growth, prepare for public markets, and create lasting competitive advantages.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
