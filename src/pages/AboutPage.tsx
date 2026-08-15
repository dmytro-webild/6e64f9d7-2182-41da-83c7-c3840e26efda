import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FeaturesTaggedCards from "@/components/sections/features/FeaturesTaggedCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="OmniHub"
        navItems={navItems}
        ctaButton={{ text: "Book Service", href: "/contact" }}
      />

      <HeroSplit
        tag="Lifestyle & Entertainment"
        title="Laundry, Gaming & Beauty Salon All Under One Roof"
        description="We are a modern lifestyle destination combining convenient laundry services, exciting gaming lounges, and premium beauty salon care into a single seamless experience."
        primaryButton={{ text: "Explore Services", href: "#services" }}
        secondaryButton={{ text: "Our Story", href: "#story" }}
        imageSrc="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <div id="story">
        <AboutFeaturesSplit
          tag="Our Philosophy"
          title="Designed for Your Modern Routine"
          description="We created OmniHub to eliminate wasted time and make routine care enjoyable. Drop off your wardrobe, meet up for games, or refresh your look with expert stylists."
          items={[
            {
              icon: "🧼",
              title: "Garment Care",
              description: "Washing, drying, ironing, and professional clothing care."
            },
            {
              icon: "🎮",
              title: "Gaming Lounge",
              description: "High-spec PCs and consoles for relaxed social gaming or tournaments."
            },
            {
              icon: "✂️",
              title: "Beauty Salon",
              description: "Quality haircuts, grooming, styling, and rejuvenating treatments."
            }
          ]}
          imageSrc="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />
      </div>

      <div id="services">
        <FeaturesTaggedCards
          tag="What We Offer"
          title="Three Experiences, One Destination"
          description="Step into a vibrant environment engineered for convenience, entertainment, and personal care."
          items={[
            {
              tag: "Clean & Fresh",
              title: "Express Laundry & Garment Care",
              description: "Relax in our lounge while our team washes, irons, and carefully folds your garments.",
              imageSrc: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80",
              primaryButton: { text: "View Laundry Rates", href: "/contact" }
            },
            {
              tag: "Play & Connect",
              title: "Next-Gen Gaming House",
              description: "Immerse yourself in top-tier gaming gear and compete or hang out with friends.",
              imageSrc: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
              primaryButton: { text: "Book a Console", href: "/contact" }
            },
            {
              tag: "Look & Feel Great",
              title: "Full-Service Beauty Salon",
              description: "Treat yourself to modern haircuts, beard grooming, coloring, and self-care treatments.",
              imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
              primaryButton: { text: "Book Stylist", href: "/contact" }
            }
          ]}
          textAnimation="slide-up"
        />
      </div>

      <ContactCta
        tag="Visit Us Today"
        text="Ready to elevate your day? Experience the convenience of OmniHub today."
        primaryButton={{ text: "Schedule Appointment", href: "/contact" }}
        secondaryButton={{ text: "Get Directions", href: "/contact" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="OmniHub"
        columns={[
          {
            title: "Services",
            items: [
              { label: "Laundry Care", href: "#services" },
              { label: "Gaming House", href: "#services" },
              { label: "Beauty Salon", href: "#services" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" }
            ]
          }
        ]}
        copyright="© 2025 OmniHub. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}