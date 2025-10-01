"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { CONTACT_INFO } from "@/constants";
import { trackEvent } from "@/components/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: ""
        });
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.EMAIL);
      setCopied(true);
      toast.success("Email address copied to clipboard!");
      
      // Track email copy event
      trackEvent('email_copied', {
        action: 'copy_email',
        location: 'contact_form',
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy email address");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#000000' }}>
          Get in Touch
        </h2>
        <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#666666' }}>
          Ready to transform your business? Let&apos;s discuss how our technology solutions can help you achieve your goals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-[#CA8F52]/15">
            <CardHeader>
              <CardTitle className="text-2xl text-text" style={{ color: '#000000' }}>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text" style={{ color: '#000000' }}>
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-[#CA8F52]/20 focus:border-[#CA8F52]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text" style={{ color: '#000000' }}>
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-[#CA8F52]/20 focus:border-[#CA8F52]"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-text" style={{ color: '#000000' }}>
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-[#CA8F52]/20 focus:border-[#CA8F52]"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-text" style={{ color: '#000000' }}>
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-[#CA8F52]/20 focus:border-[#CA8F52]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text" style={{ color: '#000000' }}>
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-brand-secondary/20 focus:border-brand-primary min-h-[120px]"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#CA8F52] hover:brightness-110 text-textd text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text" style={{ color: '#000000' }}>Other ways to reach us</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-surface rounded-xl">
                <div className="w-12 h-12 bg-[#CA8F52]/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#CA8F52]" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-text" style={{ color: '#000000' }}>Email us</div>
                  <div className="text-brand-secondary">{CONTACT_INFO.EMAIL}</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="border-[#CA8F52] text-[#CA8F52] hover:bg-[#CA8F52]/10"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#CA8F52]/10 to-[#7B1315]/10 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-text mb-4" style={{ color: '#000000' }}>Why choose us?</h4>
            <ul className="space-y-3 text-brand-secondary">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#CA8F52] rounded-full mt-2 flex-shrink-0" />
                <span style={{ color: '#000000' }}>Free consultation and project assessment</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#CA8F52] rounded-full mt-2 flex-shrink-0" />
                <span style={{ color: '#000000' }}>Flexible engagement models</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#CA8F52] rounded-full mt-2 flex-shrink-0" />
                <span style={{ color: '#000000' }}>Dedicated project manager</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#CA8F52] rounded-full mt-2 flex-shrink-0" />
                <span style={{ color: '#000000' }}>Regular progress updates</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
