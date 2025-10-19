import Head from 'next/head';
import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { PortfolioGallery } from '@/components/portfolio';
import { TestimonialsCarousel } from '@/components/testimonials';
import { AboutSection } from '@/components/about';
import { ProcessTimeline } from '@/components/process';
import { WoodSwatches, VideoSection, FAQAccordion } from '@/components/common';
import { ContactForm } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oak & Iron Carpentry - Custom Cabinetry & Fine Woodwork</title>
        <meta
          name="description"
          content="Custom cabinetry and fine woodwork, built for your home. Kitchens, built-ins, stair details, and one-off pieces, crafted with precision and care."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Oak & Iron Carpentry - Custom Cabinetry & Fine Woodwork" />
        <meta
          property="og:description"
          content="Custom cabinetry and fine woodwork, built for your home."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/logo/oak-iron-logo.svg" />
      </Head>

      <div className="min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Portfolio Gallery */}
          <PortfolioGallery />

          {/* Video Section */}
          <VideoSection />

          {/* Testimonials */}
          <TestimonialsCarousel />

          {/* About Section */}
          <AboutSection />

          {/* Wood Swatches */}
          <WoodSwatches />

          {/* Process Timeline */}
          <ProcessTimeline />

          {/* FAQ */}
          <FAQAccordion />

          {/* Contact Form */}
          <ContactForm />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

