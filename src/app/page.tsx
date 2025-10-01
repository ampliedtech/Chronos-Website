import dynamic from "next/dynamic";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import Section from "@/components/section";
import ValueProposition from "@/components/value-proposition";
import OurApproach from "@/components/our-approach";
import WhatSetsUsApart from "@/components/what-sets-us-apart";

// Lazy load heavy components with optimized loading states
const CTABand = dynamic(() => import("@/components/cta-band"), {
  loading: () => <div className="h-32 bg-gray-100/50 rounded-lg" />,
});

export default function Home() {
  return (
    <div className="min-h-screen ">
      <SiteHeader />
      
      <main>
        <Hero />
        
        <ValueProposition />
        
        <Section id="services" background="surface">
          <ServicesGrid />
        </Section>
        
        <OurApproach />
        
        <WhatSetsUsApart />
        
        <CTABand />
      </main>
      
      <SiteFooter />
    </div>
  );
}
