"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { NAVIGATION_ITEMS } from "@/constants";

// Use navigation from constants
const navigation = NAVIGATION_ITEMS;

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isClient && isScrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-[#CA8F52]/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo variant="full" size="md" animated={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-textd hover:text-brand-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-brand-primary hover:bg-brand-secondary text-textd shadow-lg hover:shadow-glow">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-textd"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] bg-ink border-brand-primary/20">
              <SheetHeader className="px-6 py-4 border-b border-brand-primary/10">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu with links to all pages and a call-to-action button.
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col h-full px-6">
                {/* Logo Section */}
                <div className="flex items-center justify-center py-6 border-b border-brand-primary/10">
                  <Logo variant="full" size="md" animated={false} />
                </div>
                
                {/* Navigation Section */}
                <nav className="flex-1 py-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-textd hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* CTA Section */}
                <div className="py-6 border-t border-brand-primary/10">
                  <Button
                    asChild
                    className="w-full h-12 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-textd shadow-lg hover:shadow-glow font-medium"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
