import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrolledPast } from '@/hooks';

interface NavProps {
  className?: string;
}

const menuItems = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC<NavProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrolledPast(50);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Utility Bar - Desktop Only */}
      <div className="hidden lg:block bg-iron-900 text-oak-100 py-2 no-print">
        <div className="section-container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <a href="tel:5551234567" className="hover:text-brass-400 transition-colors">
                <span className="font-medium">Phone:</span> (555) 123-4567
              </a>
              <span className="text-oak-300">|</span>
              <span>
                <span className="font-medium">Service Area:</span> Your City & Surrounding
              </span>
            </div>
            <div>
              <span className="font-medium">Hours:</span> Mon-Fri 8am-5pm
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-oak-50 shadow-md'
            : 'bg-iron-900/70 backdrop-blur-sm text-white'
        } ${className}`}
        style={{ top: isScrolled ? '0' : '0' }}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo/oak-and-iron-logo-main.png"
                alt="Oak & Iron Carpentry"
                width={180}
                height={54}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`link-animated text-sm font-medium transition-colors ${
                    isScrolled ? 'text-iron-800 hover:text-brass-600' : 'text-white hover:text-brass-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`btn btn-primary px-6 py-2.5 text-sm whitespace-nowrap ${
                  isScrolled ? '' : 'bg-brass-500 hover:bg-brass-600'
                }`}
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-iron-800' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-iron-900/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-full bg-oak-50 shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-oak-200">
              <Image
                src="/assets/logo/oak-and-iron-logo-main.png"
                alt="Oak & Iron Carpentry"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-iron-800 hover:bg-oak-100 rounded-md"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6">
              <div className="flex flex-col gap-1 px-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-3 text-lg font-medium text-iron-800 hover:bg-oak-100 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-oak-200">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn btn-primary w-full"
              >
                Request a Quote
              </button>
              <div className="mt-4 text-sm text-iron-600 text-center">
                <a href="tel:5551234567" className="hover:text-brass-600 transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

