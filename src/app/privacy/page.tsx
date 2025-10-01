import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Privacy Policy
            </h1>
            <p className="text-xl text-brand-primary max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you engage with our strategic advisory services.
            </p>
          </div>
        </Section>

        {/* Privacy Content */}
        <Section background="surface">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>Information We Collect</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fill out our contact form for strategic advisory services</li>
                    <li>Request a consultation for IPO preparedness, fund raising, or M&A advisory</li>
                    <li>Engage with us for business expansion and corporate strategy services</li>
                    <li>Communicate with us via email or phone regarding your business needs</li>
                  </ul>
                  <p>This may include your name, email address, phone number, company name, business information, financial data, and any other information you choose to provide for our advisory services.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>How We Use Your Information</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide strategic advisory services including IPO preparedness, fund raising, and M&A advisory</li>
                    <li>Develop tailored business strategies and corporate guidance</li>
                    <li>Respond to your inquiries and provide ongoing strategic support</li>
                    <li>Send you relevant business insights and market updates</li>
                    <li>Improve our advisory services and client experience</li>
                    <li>Comply with legal and regulatory obligations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>Information Sharing</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>We maintain strict confidentiality of your business information and do not sell, trade, or otherwise transfer your personal or business information to third parties without your explicit consent, except:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To comply with legal and regulatory requirements</li>
                    <li>To protect our rights and property</li>
                    <li>With trusted professional service providers who assist us in delivering our strategic advisory services</li>
                    <li>When required for due diligence processes in M&A or fund raising activities (with your prior consent)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>Data Security</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>We implement robust security measures to protect your personal and business information against unauthorized access, alteration, disclosure, or destruction. Given the sensitive nature of strategic advisory work, we maintain the highest standards of data protection. However, no method of transmission over the internet is 100% secure.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>Your Rights</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal and business information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information (subject to legal and contractual obligations)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request information about how your data is used in our advisory services</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>Contact Us</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <div className="bg-surface rounded-xl p-4" style={{ color: "#044078" }}>
                    <p><strong>Email:</strong> info@chronosadvisors.com</p>
                    <p><strong>Company:</strong> Chronos Strategic Advisors LLP</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-brand-secondary/15 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-text" style={{ color: "#034078" }}>Changes to This Policy</h2>
                <div className="space-y-4 text-brand-primary" style={{ color: "#044078" }}>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date below.</p>
                  <p><strong>Last updated:</strong> January 2025</p>
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
