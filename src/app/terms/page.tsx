import { Metadata } from 'next'
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from '@/components/section'

export const metadata: Metadata = {
  title: 'Terms of Service | Chronos Strategic Advisors',
  description: 'Terms of Service for Chronos Strategic Advisors LLP - Strategic Business Advisory Services',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Terms of Service
            </h1>
            <p className="text-xl text-brand-primary max-w-3xl mx-auto">
              Please read these terms carefully before engaging with our strategic advisory services. By accessing our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-brand-primary">
              Last updated: January 2025
            </p>
          </div>
        </Section>

        {/* Terms Content */}
        <Section background="surface">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>1. Acceptance of Terms</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>By accessing and using Chronos Strategic Advisors LLP&apos;s (&quot;Company&quot;) strategic advisory services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>2. Description of Service</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>Chronos Strategic Advisors LLP provides strategic advisory services including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#044078" }}>
                    <li>IPO preparedness and capital market advisory</li>
                    <li>Fund raising and investment advisory (up to USD 5-6 million)</li>
                    <li>Mergers and acquisitions (M&A) advisory</li>
                    <li>Business expansion and corporate strategy retainership</li>
                    <li>Strategic business planning and market positioning</li>
                    <li>Corporate governance and regulatory compliance advisory</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>3. Service Agreement</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>Our strategic advisory approach provides ongoing partnership with continuous support, regular strategic insights, and tailored business solutions. Services are provided on a retainer or project basis as outlined in individual service agreements.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>4. Client Responsibilities</h2>
                <div className="space-y-4 text-brand-primary">
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#044078" }}>
                    <li>Providing accurate and complete business and financial information</li>
                    <li>Timely payment of advisory fees and retainer amounts</li>
                    <li>Active collaboration and communication throughout the advisory process</li>
                    <li>Compliance with applicable laws, regulations, and market requirements</li>
                    <li>Maintaining confidentiality of proprietary information and strategic plans</li>
                    <li>Implementing recommended strategies and following through on agreed actions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>5. Payment Terms</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>Payment terms are specified in individual service agreements. Generally, advisory services are billed on a retainer basis (monthly/quarterly) or project basis. Late payments may result in service suspension or termination of the advisory relationship.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>6. Intellectual Property</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>All intellectual property rights in the advisory methodologies, strategic frameworks, and materials provided remain with Chronos Strategic Advisors LLP unless otherwise specified in writing. Clients retain ownership of their business data, processes, and proprietary information.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>7. Confidentiality</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>Both parties agree to maintain strict confidentiality of all proprietary information, business strategies, financial data, and sensitive information shared during the course of the advisory relationship. This obligation survives termination of the agreement and extends to all team members and representatives.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>8. Limitation of Liability</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>To the maximum extent permitted by law, Chronos Strategic Advisors LLP&apos;s liability is limited to the amount paid for advisory services in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages arising from business decisions made based on our advisory services.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>9. Service Availability</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>While we strive to provide consistent advisory support, we do not guarantee uninterrupted availability. Scheduled breaks or maintenance periods will be communicated in advance when possible.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>10. Termination</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>Either party may terminate the advisory service agreement with 30 days written notice. Upon termination, clients retain access to their business data and any deliverables as specified in the service agreement.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>11. Governing Law</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>These terms are governed by the laws of India. Any disputes will be resolved through binding arbitration in accordance with Indian arbitration laws, with proceedings conducted in Mumbai, India.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>12. Changes to Terms</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our advisory services constitutes acceptance of modified terms.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>13. Contact Information</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>For questions about these Terms of Service, please contact us at:</p>
                  <div className="bg-surface rounded-xl p-4" style={{ color: "#044078" }}>
                    <p><strong>Email:</strong> info@chronosadvisors.com</p>
                    <p><strong>Company:</strong> Chronos Strategic Advisors LLP</p>
                    <p><strong>Location:</strong> Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <SiteFooter />
    </div>
  )
}

