"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import ServicesGrid from "@/components/services-grid";
import CTABand from "@/components/cta-band";
import { useEffect } from "react";
import Image from "next/image";

// Standardized Responsive Service Visual Components
function CustomSoftwareVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/sde.jpg"
        alt="Custom Software"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}


function CybersecurityVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/cyber.png"
        alt="Cybersecurity"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

function CloudInfrastructureVisual() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/services/cloud.png"
        alt="Cloud Infrastructure"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

// Function to get service-specific visuals
function getServiceVisual(serviceTitle: string) {
  switch (serviceTitle) {
    case "Custom Software Development":
      return <CustomSoftwareVisual />;
    case "Cybersecurity Solutions":
      return <CybersecurityVisual />;
    case "Cloud Infrastructure & DevOps":
      return <CloudInfrastructureVisual />;
    default:
      return (
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 bg-brand-primary rounded-lg animate-bounce"></div>
        </div>
      );
  }
}

const detailedServices = [
  {
    title: "IPO Preparedness",
    description:
      "Preparing for an IPO demands a clear, forward-looking vision as a public company. We support businesses across regulated industries, AI-driven technology, conventional sectors, and emerging fields like renewable energy to define and refine a public company vision aligned with long-term growth targets.",
    features: [
      "Growth Strategy Validation",
      "Market Positioning",
      "Organizational Excellence",
      "Investor Story Development",
      "Market Readiness Assessment",
      "Regulatory Compliance Framework",
      "Public Company Vision Development",
    ],
    technologies: ["Strategic Planning", "Market Analysis", "Financial Modeling", "Compliance", "Investor Relations", "Public Markets"],
  },
  {
    title: "Fund Raising (up to USD 5-6 Million)",
    description:
      "Capital is a catalyst for growth. We partner with businesses across regulated industries, AI-driven technology, conventional sectors, and emerging businesses such as renewable energy to define clear, strategic plans for the effective use of funds aligned with expansion and long-term value creation.",
    features: [
      "Investment Proposition Development",
      "Strategic Positioning",
      "Growth Model Design",
      "Investor Engagement Strategy",
      "Integrated Service Delivery",
      "Referral Network for Larger Deals",
    ],
    technologies: ["Capital Strategy", "Investor Relations", "Financial Planning", "Market Positioning", "Due Diligence", "Valuation"],
  },
  {
    title: "Business Expansion & Corporate Strategy",
    description:
      "We provide ongoing retainership services to support your evolving business expansion and corporate strategy needs. Our approach ensures continuous strategic alignment and agility in a dynamic business environment.",
    features: [
      "Strategic Framework Development",
      "Expansion Planning and Execution",
      "Organizational Design & Performance Systems",
      "Integrated Advisory Support",
      "Continuous Strategic Alignment",
      "Market Entry Strategies",
    ],
    technologies: ["Strategic Planning", "Organizational Design", "Market Analysis", "Performance Management", "Risk Assessment", "Growth Strategy"],
  },
  {
    title: "M&A Advisory",
    description:
      "We work with clients to define a clear transaction strategy that aligns with their broader business objectives. Our approach ensures every deal supports long-term growth and value creation.",
    features: [
      "Strategic Transaction Planning",
      "Business Positioning",
      "Value Creation Strategy",
      "Strategic Story Development",
      "Deal Strategy Design",
      "Integration Strategy",
    ],
    technologies: ["Transaction Strategy", "Due Diligence", "Valuation", "Integration Planning", "Risk Management", "Deal Execution"],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Our Strategic Advisory Services
            </h1>
            <p className="text-xl text-brand-primary max-w-3xl mx-auto">
              From IPO preparedness to fund raising and M&A advisory — we provide comprehensive strategic advisory services with decades of experience and proven results.
            </p>
          </div>
        </Section>

        {/* Services Overview */}
        <Section background="surface">
          <ServicesGrid />
        </Section>


        {/* Detailed Services */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2
                className="text-4xl lg:text-5xl font-bold text-text"
                style={{ color: "#000000" }}
              >
                Detailed Service Offerings
              </h2>
            <p
              className="text-xl text-brand-secondary max-w-3xl mx-auto"
              style={{ color: "#666666" }}
            >
              Explore our comprehensive range of strategic advisory services
              designed to drive your business growth and success
            </p>
            </div>

            <div className="space-y-16">
              {detailedServices.map((service, index) => (
                <div
                  key={service.title}
                  id={service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/&/g, "and")}
                  className="max-w-6xl mx-auto"
                  style={{ color: "#000000" }}
                >
                  <div className="text-center space-y-8 mb-12">
                    <h3
                      className="text-4xl lg:text-4xl font-bold text-text"
                      style={{ color: "#000000" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xl text-brand-secondary max-w-4xl mx-auto leading-relaxed"
                      style={{ color: "#666666" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-4">
                          <h4
                            className="text-2xl font-semibold text-text"
                            style={{ color: "#000000" }}
                          >
                            What we deliver:
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start space-x-3"
                                style={{ color: "#000000" }}
                              >
                                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                                <span
                                  className="text-brand-secondary"
                                  style={{ color: "#000000" }}
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4
                            className="text-2xl font-semibold text-text"
                            style={{ color: "#000000" }}
                          >
                            Our expertise areas:
                          </h4>
                          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {service.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="relative w-full aspect-[16/9] rounded-2xl border border-brand-secondary/20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
                        {getServiceVisual(service.title)}
                      </div>
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
