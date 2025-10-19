import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

const menuLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const certifications = [
  'Licensed & Insured',
  'OSHA Certified',
  'Member: Local Builders Assoc.',
];

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [subscribeState, setSubscribeState] = useState<'default' | 'success' | 'error'>('default');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeState('error');
      setTimeout(() => setSubscribeState('default'), 3000);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribeState('success');
      setEmail('');
      setTimeout(() => setSubscribeState('default'), 5000);
    } catch (error) {
      setSubscribeState('error');
      setTimeout(() => setSubscribeState('default'), 3000);
    }
  };

  const scrollToSection = (href: string) => {
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
    <footer className={`bg-iron-900 text-oak-100 ${className}`}>
      {/* Newsletter Section */}
      <div className="bg-iron-800 py-12 no-print">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-semibold text-white mb-3">
              Get Project Updates & Shop Notes
            </h3>
            <p className="text-oak-300 mb-6">
              Subscribe to receive occasional updates on new projects, woodworking tips, and availability.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-3 rounded-md bg-iron-700 border-2 border-iron-600 text-white placeholder-oak-400 focus:border-brass-500 focus:outline-none transition-colors"
                  disabled={subscribeState === 'success'}
                />
                <button
                  type="submit"
                  disabled={subscribeState === 'success'}
                  className="btn bg-brass-500 hover:bg-brass-600 text-white px-6 py-3 font-semibold rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {subscribeState === 'success' ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
              {subscribeState === 'error' && (
                <p className="text-red-400 text-sm mt-2">Please enter a valid email address</p>
              )}
              {subscribeState === 'success' && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/assets/logo/oak-iron-logo-light.svg"
                  alt="Oak & Iron Carpentry"
                  width={180}
                  height={54}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-oak-300 text-sm mb-4">
                Custom cabinetry and fine woodwork, built for your home.
              </p>
              
              {/* Certifications */}
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-oak-400">
                    <svg className="w-4 h-4 text-brass-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-1">
              <h4 className="font-serif font-semibold text-white text-lg mb-4">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {menuLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block text-oak-300 hover:text-brass-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="font-serif font-semibold text-white text-lg mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-oak-400 mb-1">Phone</div>
                  <a href="tel:5551234567" className="text-oak-200 hover:text-brass-400 transition-colors">
                    (555) 123-4567
                  </a>
                </div>
                <div>
                  <div className="text-oak-400 mb-1">Email</div>
                  <a href="mailto:josh@oakiron.com" className="text-oak-200 hover:text-brass-400 transition-colors">
                    josh@oakiron.com
                  </a>
                </div>
                <div>
                  <div className="text-oak-400 mb-1">Hours</div>
                  <div className="text-oak-200">
                    Monday - Friday<br />
                    8:00 AM - 5:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Location & Social */}
            <div className="lg:col-span-1">
              <h4 className="font-serif font-semibold text-white text-lg mb-4">
                Location
              </h4>
              <div className="text-sm mb-4">
                <div className="text-oak-200 mb-2">
                  Serving Your City<br />
                  & Surrounding Areas
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brass-400 hover:text-brass-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Map
                </a>
              </div>

              {/* Social Links */}
              <div>
                <div className="text-oak-400 text-sm mb-2">Follow</div>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-iron-800 hover:bg-brass-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-iron-800 hover:bg-brass-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-iron-800 py-6">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-oak-400">
            <div>
              © {new Date().getFullYear()} Oak & Iron Carpentry. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brass-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brass-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

