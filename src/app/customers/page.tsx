"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import CustomersLogos from "@/components/customers-logos";
import Testimonials from "@/components/testimonials";
import CTABand from "@/components/cta-band";
import Image from "next/image";

const caseStudies = [
  {
    company: "Witzeal Technologies",
    industry: "Real Money Gaming Platform",
    challenge: "Needed to scale to 50+ million users across 20+ games while maintaining robust infrastructure",
    solution: "Implemented comprehensive digital transformation approach with dedicated team and continuous optimization",
    results: [
      "Scaled to 50+ million users",
      "60% improvement in game performance",
      "Zero-downtime deployments",
      "50% cost savings through optimization"
    ],
    logo: "/logos/witzeal.svg"
  },
  {
    company: "Teeoff Technologies",
    industry: "AI Solutions Company",
    challenge: "Required ongoing partnership to develop cutting-edge AI and AR technologies",
    solution: "Provided dedicated digital transformation team for AI development, AR implementation, and continuous innovation",
    results: [
      "Advanced AI and AR capabilities",
      "Predictable development costs",
      "Dedicated team always available",
      "Continuous technology updates"
    ],
    logo: "/logos/teeoff_large.png"
  }
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Our Customers
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              We&apos;re proud to partner with forward-thinking companies across diverse industries, providing ongoing technology support that drives digital transformation and sustainable growth.
            </p>
          </div>
        </Section>

        {/* Customer Logos */}
        <Section background="surface">
          <CustomersLogos />
        </Section>

        {/* Testimonials */}
        <Section background="seamless">
          <Testimonials />
        </Section>

        {/* Success Stories */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold" style={{
                background: "linear-gradient(90deg, #0a1128 0%, #034078 50%, #1282a2 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.1em", 
              }}>
                Success Stories
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
                Discover how we&apos;ve helped our clients achieve remarkable results through our ongoing digital transformation partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <div
                  key={study.company}
                  className="bg-white  rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Header with Logo and Company Info */}
                  <div className="p-8  mt-5 pb-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-text/90 rounded-xl flex items-center justify-center shadow-lg">
                        <Image 
                          src={study.logo} 
                          alt={`${study.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-brand-primary mb-1" style={{ color: "#034078" }}>
                          {study.company}
                        </h3>
                        <p className="text-lg text-brand-secondary font-medium" style={{ color: "#044078" }}>
                          {study.industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-8 space-y-6">
                    {/* Challenge */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <h4 className="text-lg font-semibold text-brand-primary" style={{ color: "#034078" }}>Challenge</h4>
                      </div>
                      <p className="text-brand-secondary leading-relaxed pl-4" style={{ color: "#044078" }}>
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" style={{ color: "#034078" }}></div>
                        <h4 className="text-lg font-semibold text-brand-primary" style={{ color: "#034078" }}>Solution</h4>
                      </div>
                      <p className="text-brand-secondary leading-relaxed pl-4" style={{ color: "#044078" }}>
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <h4 className="text-lg font-semibold text-brand-primary" style={{ color: "#034078" }}>Results</h4>
                      </div>
                      <ul className="space-y-2 pl-4">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2.5 flex-shrink-0" />
                            <span className="text-brand-secondary text-sm leading-relaxed" style={{ color: "#044078" }}>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        

        <CTABand />
      </main>
      
      <SiteFooter />
    </div>
  );
}
