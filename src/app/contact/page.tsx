"use client";
import { useState } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import ContactForm from "@/components/contact-form";
import CTABand from "@/components/cta-band";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/constants";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT_INFO.EMAIL,
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: CONTACT_INFO.PHONE,
    description: "Call us during business hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: CONTACT_INFO.LOCATION,
    description: "Serving clients worldwide",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: CONTACT_INFO.BUSINESS_HOURS,
    description: "Always here to help",
  },
];

const faqs = [
  {
    question: "What strategic advisory services do you offer?",
    answer:
      "We offer comprehensive strategic advisory services including IPO preparedness, fund raising (up to USD 5-6 million), business expansion & corporate strategy retainership, and M&A advisory. Our services are tailored to drive measurable results and align with your corporate goals.",
  },
  {
    question: "How are your services different from traditional consultancy?",
    answer:
      "We think and act like seasoned business leaders, not just consultants. Every recommendation is grounded in practical experience that advances your objectives. We focus on building sustainable competitive advantages and prioritize long-term business growth over short-term gains.",
  },
  {
    question: "What's included in your strategic advisory services?",
    answer:
      "Our services include strategic framework development, growth strategy validation, market positioning, organizational excellence, investor story development, and continuous progress review. We provide comprehensive support through our network of trusted affiliates including law firms and professional advisors.",
  },
  {
    question: "Do you work with businesses across different sectors?",
    answer:
      "Yes, we work with businesses across regulated industries, AI-driven technology, conventional sectors, and emerging fields like renewable energy. Our expertise spans multiple sectors including consulting, technology, stock exchanges, and multinational corporations.",
  },
  {
    question: "What is your approach to strategic advisory?",
    answer:
      "We begin with a deep understanding of your business objectives and requirements. Our approach includes aligning with your vision, thorough strategic analysis, customized strategy development, practical implementation planning, continuous progress review, and agile strategic adaptation.",
  },
  {
    question: "How quickly can you start working with us?",
    answer:
      "We can typically begin strategic advisory engagements within 1-2 weeks after initial consultation. For urgent strategic needs, we can expedite the process and begin work within days of our initial discussion.",
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Schedule a Strategic Consultation
            </h1>
            <p className="text-xl text-brand-primary max-w-3xl mx-auto">
              Ready to discuss your strategic advisory needs? Let's explore how we can help you achieve your business objectives and drive measurable results.
            </p>
          </div>
        </Section>

        {/* Contact Form */}
        <Section background="surface">
          <ContactForm />
        </Section>

        {/* Contact Info */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2
                className="text-4xl font-bold text-text"
                style={{ color: "#000000" }}
              >
                Get in Touch
              </h2>
              <p
                className="text-xl text-brand-secondary max-w-3xl mx-auto"
                style={{ color: "#666666" }}
              >
                Multiple ways to reach us - choose what works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="text-center space-y-4 p-6 bg-white rounded-2xl border border-brand-secondary/15 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-text mb-2"
                        style={{ color: "#000000" }}
                      >
                        {info.title}
                      </h3>
                      <p className="text-lg text-black font-semibold mb-2">
                        {info.value}
                      </p>
                      <p
                        className="text-brand-secondary text-sm"
                        style={{ color: "#666666" }}
                      >
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section background="surface">
  <div className="space-y-16">
    {/* Section Header */}
    <div className="text-center space-y-4">
      <h2
        className="text-4xl font-bold text-text"
        style={{ color: "#CA8F52" }}
      >
        Frequently Asked Questions
      </h2>
      <p
        className="text-xl text-brand-secondary max-w-3xl mx-auto"
        style={{ color: "#666666" }}
      >
        Common questions about our strategic advisory services
      </p>
    </div>

    {/* FAQ Accordion */}
    <div className="max-w-5xl mx-auto space-y-2">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`group border border-brand-secondary/15 px-6 py-3 cursor-pointer  
              ${isOpen ? "bg-[#CA8F52] text-white" : "bg-white hover:bg-[#CA8F52]"}
            `}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`text-xl font-medium  
                  ${isOpen ? "text-white" : "text-black group-hover:text-white"}
                `}
              >
                {faq.question}
              </h3>
              <span
                className={`font-bold text-2xl 
                  ${isOpen ? "text-white" : "text-brand-primary group-hover:text-white"}
                `}
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>

            {/* Collapsible Answer */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                isOpen ? "max-h-96 mt-4" : "max-h-0"
              }`}
            >
              <p
                className={`leading-relaxed transition-colors duration-300 
                  ${isOpen ? "text-white" : "text-[#034078] group-hover:text-white"}
                `}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</Section>

<CTABand />
</main>

<SiteFooter />

    </div>
  );
}
