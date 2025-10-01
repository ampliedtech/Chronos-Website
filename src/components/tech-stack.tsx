"use client";

import { motion } from "framer-motion";

const technologies = [
  // Cloud Platforms
  { 
    name: "AWS", 
    category: "Cloud",
    icon: (
      <img src="/techlogos/AWS_logo.svg" alt="AWS" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "Azure", 
    category: "Cloud",
    icon: (
      <img src="/techlogos/Azure_logo.svg" alt="Azure" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "GCP", 
    category: "Cloud",
    icon: (
      <img src="/techlogos/GCP_logo.svg" alt="GCP" className="w-full h-full object-contain" />
    )
  },
  
  // Containerization & Orchestration
  { 
    name: "Docker", 
    category: "Containers",
    icon: (
      <img src="/techlogos/Docker_logo.svg" alt="Docker" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "Kubernetes", 
    category: "Orchestration",
    icon: (
      <img src="/techlogos/Kubernetes_logo.svg" alt="Kubernetes" className="w-full h-full object-contain" />
    )
  },
  
  // Frontend Technologies
  { 
    name: "React", 
    category: "Frontend",
    icon: (
      <img src="/techlogos/React_logo.svg" alt="React" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "Next.js", 
    category: "Frontend",
    icon: (
      <img src="/techlogos/Nextjs_logo.svg" alt="Next.js" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "TypeScript", 
    category: "Language",
    icon: (
      <img src="/techlogos/TypeScript_logo.svg" alt="TypeScript" className="w-full h-full object-contain" />
    )
  },
  
  // Backend Technologies
  { 
    name: "Node.js", 
    category: "Backend",
    icon: (
      <img src="/techlogos/Node.js_logo.svg" alt="Node.js" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "Python", 
    category: "Backend",
    icon: (
      <img src="/techlogos/Python_logo.svg" alt="Python" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "Java", 
    category: "Backend",
    icon: (
      <img src="/techlogos/Java_logo.svg" alt="Java" className="w-full h-full object-contain" />
    )
  },
  
  // Databases
  { 
    name: "PostgreSQL", 
    category: "Database",
    icon: (
      <img src="/techlogos/Postgre_logo.svg" alt="PostgreSQL" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "MongoDB", 
    category: "Database",
    icon: (
      <img src="/techlogos/MongoDB_logo.svg" alt="MongoDB" className="w-full h-full object-contain" />
    )
  },
  
  // AI & Machine Learning
  { 
    name: "TensorFlow", 
    category: "AI/ML",
    icon: (
      <img src="/techlogos/TensorFlow_logo.svg" alt="TensorFlow" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "PyTorch", 
    category: "AI/ML",
    icon: (
      <img src="/techlogos/PyTorch_logo.svg" alt="PyTorch" className="w-full h-full object-contain" />
    )
  },
  
  // Security & Monitoring
  { 
    name: "Terraform", 
    category: "Infrastructure",
    icon: (
      <img src="/techlogos/Terraform_logo.svg" alt="Terraform" className="w-full h-full object-contain" />
    )
  },
  { 
    name: "Grafana", 
    category: "Monitoring",
    icon: (
      <img src="/techlogos/Grafana_logo.svg" alt="Grafana" className="w-full h-full object-contain" />
    )
  }
];

export default function TechStack() {
  return (
    <div className="space-y-16">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-text text-black">
          Our Technology Expertise
        </h2>
        <p className="text-xl text-brand-secondary max-w-3xl mx-auto text-gray-600">
          We master modern technologies across cloud, AI, security, and development to deliver comprehensive digital transformation solutions that evolve with your business
        </p>
      </motion.div>

      {/* Scrolling animation container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: [0, -100 * technologies.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of technologies */}
          {technologies.map((tech, index) => (
            <motion.div
              key={`first-${tech.name}`}
              className="group text-center space-y-3 flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-16 h-16 mx-auto bg-white rounded-xl border border-brand-secondary/15 flex items-center justify-center group-hover:shadow-card transition-all duration-300 group-hover:scale-110">
                {/* Official tech icon */}
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  {tech.icon}
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-semibold text-text text-sm group-hover:text-brand-primary transition-colors duration-300 text-black">
                  {tech.name}
                </h3>
                <p className="text-xs text-brand-secondary text-gray-600">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <motion.div
              key={`second-${tech.name}`}
              className="group text-center space-y-3 flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-16 h-16 mx-auto bg-white rounded-xl border border-brand-secondary/15 flex items-center justify-center group-hover:shadow-card transition-all duration-300 group-hover:scale-110">
                {/* Official tech icon */}
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  {tech.icon}
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-semibold text-text text-sm group-hover:text-brand-primary transition-colors duration-300 text-black">
                  {tech.name}
                </h3>
                <p className="text-xs text-brand-secondary text-gray-600">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Additional info */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text mb-4 text-black">
            Continuous Technology Evolution
          </h3>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto text-gray-600">
            As part of our digital transformation approach, we continuously evaluate, adopt, and integrate new technologies to keep your solutions cutting-edge, secure, and future-ready. No technology debt, no outdated systems.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
