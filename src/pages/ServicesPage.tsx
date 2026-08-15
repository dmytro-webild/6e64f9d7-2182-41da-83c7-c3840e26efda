import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesDetailedCards from "@/components/sections/features/FeaturesDetailedCards";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ServicesPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Webild"
        navItems={navItems}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <HeroSplit
        tag="Services"
        title="Tailored Solutions for Your Business Growth"
        description="From web development to cloud infrastructure, we deliver end-to-end expertise to elevate your digital presence."
        primaryButton={{ text: "Explore Services", href: "#services-list" }}
        secondaryButton={{ text: "Book Consultation", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <FeaturesDetailedCards
        tag="Core Offerings"
        title="End-to-End Engineering & Design"
        description="Comprehensive services built to transform ideas into high-performing digital products."
        items={[
          {
            title: "Custom Web & Mobile Apps",
            description: "Modern, performant applications built with modern frameworks optimized for scale, security, and speed.",
            tags: ["React", "TypeScript", "Node.js"],
            imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "UI/UX & Product Design",
            description: "User-centered design systems, interactive prototypes, and elegant interfaces that drive conversion.",
            tags: ["Figma", "Design Systems", "UX Research"],
            imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Cloud Infrastructure & DevOps",
            description: "Automated deployment pipelines, resilient cloud architecture, and proactive monitoring for maximum reliability.",
            tags: ["AWS", "Docker", "CI/CD"],
            imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
          }
        ]}
        textAnimation="slide-up"
      />

      <FeaturesIconCards
        tag="Why Work With Us"
        title="Built for Speed, Reliability, and Impact"
        description="Our streamlined methodology guarantees rapid development without sacrificing quality."
        features={[
          {
            icon: "Zap",
            title: "Fast Delivery",
            description: "Agile sprints and reusable design patterns ensure quick turnaround times."
          },
          {
            icon: "ShieldCheck",
            title: "Enterprise Security",
            description: "Security-first development adhering to industry standards and best practices."
          },
          {
            icon: "TrendingUp",
            title: "Scalable Results",
            description: "Architectures engineered to handle growing traffic and business needs."
          }
        ]}
        textAnimation="slide-up"
      />

      <ContactCta
        tag="Get Started Today"
        text="Ready to elevate your business with our custom software solutions?"
        primaryButton={{ text: "Start Your Project", href: "/contact" }}
        secondaryButton={{ text: "Learn About Us", href: "/about" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="Webild"
        columns={[
          { title: "Navigation", items: navItems },
          { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] }
        ]}
        copyright="© 2025 Webild Inc. All rights reserved."
        links={[{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }]}
      />
    </div>
  );
}