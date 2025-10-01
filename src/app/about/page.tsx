"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Target, Clock, Globe, Building, TrendingUp, Handshake, DollarSign, ArrowRightLeft, Shield, Layers, FileText, Lightbulb, Scale } from "lucide-react";

export default function AboutPage() {
  const experience = [
    {
      icon: Building,
      title: "Mastercard",
      role: "Senior Counsel and Company Secretary for South Asia",
      description: "Instrumental in executing business strategy from a legal perspective, significantly contributing to Mastercard's market growth in the region."
    },
    {
      icon: TrendingUp,
      title: "Witzeal Technologies",
      role: "Chief Strategy Officer",
      description: "Led business expansion initiatives, corporate structuring, global market entry, fundraising efforts, M&A activities, and public policy alignment."
    },
    {
      icon: Award,
      title: "Professional Qualifications",
      role: "Corporate Secretary and Lawyer",
      description: "Combines legal expertise with strategic business insight to deliver comprehensive advisory services."
    }
  ];

  const expertise = [
    { name: "Mergers and Acquisitions", icon: Handshake },
    { name: "Capital Investments", icon: DollarSign },
    { name: "Cross-border Transactions", icon: ArrowRightLeft },
    { name: "Governance", icon: Shield },
    { name: "Corporate Structuring", icon: Layers },
    { name: "Regulatory Affairs", icon: FileText },
    { name: "Business Strategy", icon: Lightbulb },
    { name: "Public Policy Alignment", icon: Scale }
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              About Chronos Strategic Advisors
            </h1>
            <p className="text-xl text-brand-primary max-w-3xl mx-auto">
              At Chronos Strategic Advisors, we leverage decades of experience to develop tailored business strategies that drive measurable results and align perfectly with your corporate goals.
            </p>
          </div>
        </Section>

        {/* Founder Section */}
        <Section background="light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#000000' }}>
                Meet Our Founder
              </h2>
              
              {/* Ketan Godkhindi Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                  <div>
                    <h3 className="text-3xl font-bold text-text mb-2" style={{ color: '#000000' }}>
                      Ketan Godkhindi
                    </h3>
                    <p className="text-2xl text-brand-secondary" style={{ color: '#000000' }}>
                      Founder
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-xl text-brand-secondary leading-relaxed text-justify" style={{ color: '#666666' }}>
                    <p>
                      <strong>Ketan Godkhindi</strong>, the founder of <strong>Chronos Strategic Advisors LLP</strong>, brings over two decades of extensive and diverse experience in mergers and acquisitions, capital investments, cross-border transactions, governance, corporate structuring, and regulatory affairs.
                    </p>
                    <p>
                      Throughout his career, Ketan has worked across multiple sectors including <strong>consulting, technology, stock exchanges, and multinational corporations</strong>. His strategic acumen, deep industry experience, and client-centric approach form the cornerstone of Chronos' commitment to delivering high-impact business advisory services.
                    </p>
                    <p className="italic text-lg">
                      <strong>&ldquo; </strong>At Chronos, the focus is always on advancing client objectives through thoughtful, pragmatic, and sustainable strategies.<strong>&rdquo;</strong>
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square mx-auto relative overflow-hidden">
                      <div className="relative w-full h-full p-2 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center overflow-hidden group-hover: transition-all duration-500">
                        <div className="p-[18px] rounded-full bg-gradient-to-br from-[#CA8F52]/80 to-[#CA8F52] group-hover:scale-102 tansition-trasform duration-500">
                          <img 
                            src="/images/ketan-godkhindi.jpg"
                            alt="Ketan Godkhindi Profile"
                            className="w-48 h-48 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-70 lg:h-70 xl:w-94 xl:h-94 object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section background="surface">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#000000' }}>
                Professional Experience
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#666666' }}>
                Over two decades of diverse experience across multiple sectors and roles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-[#CA8F52]/10 rounded-lg flex items-center justify-center mb-6">
                    <exp.icon className="h-8 w-8 text-[#CA8F52]" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{exp.title}</h3>
                  <p className="text-black font-medium mb-4">{exp.role}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Expertise Section */}
        <Section background="light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#000000' }}>
                Areas of Expertise
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#666666' }}>
                Comprehensive expertise across strategic advisory domains
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {expertise.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-[#CA8F52]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-[#CA8F52]" />
                    </div>
                    <p className="text-black font-medium">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Personal Section */}
        <Section background="surface">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#000000' }}>
                Beyond Professional Life
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Users className="h-8 w-8 text-[#CA8F52]" />
                    <h3 className="text-2xl font-semibold text-black">Family Time</h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Ketan enjoys spending quality time with his family, creating lasting memories and maintaining a healthy work-life balance.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <Globe className="h-8 w-8 text-yellow-600" />
                    <h3 className="text-2xl font-semibold text-black">Travel</h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    An avid traveler, Ketan believes in exploring new cultures and perspectives that enrich both personal and professional growth.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <Award className="h-8 w-8 text-[#CA8F52]" />
                    <h3 className="text-2xl font-semibold text-black">Reading</h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    With a passion for reading books on history and politics, Ketan continuously expands his knowledge and understanding of global affairs and strategic thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Information Section */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#000000' }}>
                Get in Touch
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#666666' }}>
                Ready to discuss your strategic advisory needs? Reach out to Ketan directly.
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#CA8F52]/20 hover:shadow-xl transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#CA8F52] to-[#CA8F52]/80 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">KG</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-2" style={{ color: '#000000' }}>
                      Ketan Godkhindi
                    </h3>
                    <p className="text-lg text-brand-secondary mb-4" style={{ color: '#000000' }}>
                      Founder
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="mailto:ketan@chronosadvisors.com"
                        className="inline-flex items-center space-x-2 text-[#CA8F52] hover:text-[#CA8F52]/80 transition-colors duration-300 font-medium"
                      >
                        <span>ketan@chronosadvisors.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <SiteFooter />
    </div>
  );
}