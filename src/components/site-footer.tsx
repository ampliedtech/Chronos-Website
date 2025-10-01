import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import Logo from "@/components/logo";
import { COMPANY_INFO, CONTACT_INFO, SOCIAL_LINKS } from "@/constants";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  services: [
    { name: "IPO Preparedness", href: "/services#ipo" },
    { name: "Fund Raising", href: "/services#fundraising" },
    { name: "Business Expansion", href: "/services#expansion" },
    { name: "M&A Advisory", href: "/services#ma" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN, icon: Linkedin },
  { name: "Twitter", href: SOCIAL_LINKS.TWITTER, icon: Twitter },
  { name: "GitHub", href: SOCIAL_LINKS.GITHUB, icon: Github },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-textd">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="full" size="md" animated={false} />
            </div>
            <p className="text-brand-primary/80 text-sm mb-6 max-w-xs">
              {COMPANY_INFO.TAGLINE}
              <br />
              We leverage decades of experience to develop tailored business strategies that drive measurable results.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-brand-primary/70 hover:text-brand-primary transition-colors duration-300 hover:scale-110"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-textd font-semibold mb-4">Company</h3>
            <ul className="space-y-*">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-brand-primary hover:text-brand-primary/80 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-textd font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-brand-primary hover:text-brand-primary/80 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-textd font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-brand-primary text-sm">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="hover:text-textd transition-colors duration-200"
                >
                  {CONTACT_INFO.EMAIL}
                </a>
              </div>
              <Button
                asChild
                className="bg-[#CA8F52] hover:bg-[#CA8F52]/80 text-textd text-sm shadow-lg hover:shadow-glow transition-all duration-300"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#CA8F52]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-primary text-sm">
              © {COMPANY_INFO.FOUNDING_YEAR} {COMPANY_INFO.NAME}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brand-primary hover:text-textd transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
