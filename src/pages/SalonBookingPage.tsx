import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesTaggedCards from "@/components/sections/features/FeaturesTaggedCards";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function SalonBookingPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="AURA SALON"
        navItems={navItems}
        ctaButton={{ text: "Book Now", href: "#booking-form" }}
      />

      <HeroSplit
        tag="Instant Online Reservation"
        title="Elevate Your Beauty Experience"
        description="Select bespoke services, choose your preferred expert stylist, and lock in your appointment with seamless instant pre-payment."
        primaryButton={{ text: "Select Service", href: "#services" }}
        secondaryButton={{ text: "View Stylists", href: "#stylists" }}
        imageSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <div id="services">
        <FeaturesTaggedCards
          tag="Curated Menu"
          title="Bespoke Salon Services"
          description="Choose from our luxury treatment menu tailored to your hair, skin, and wellness needs."
          items={[
            {
              tag: "Popular",
              title: "Signature Haircut & Styling",
              description: "Custom consultation, luxury wash, deep conditioning, precision cut, and signature blowout.",
              primaryButton: { text: "Select ($85)", href: "#booking-form" },
              imageSrc: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
            },
            {
              tag: "Color Spec",
              title: "Balayage & Gloss Treatment",
              description: "Hand-painted highlights with custom toning glaze and bond-building repair treatment.",
              primaryButton: { text: "Select ($190)", href: "#booking-form" },
              imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
            },
            {
              tag: "Skin & Spa",
              title: "HydraGlow Facial",
              description: "Deep botanical exfoliation, lymphatic facial massage, and customized serum infusion.",
              primaryButton: { text: "Select ($120)", href: "#booking-form" },
              imageSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
            },
          ]}
          textAnimation="slide-up"
        />
      </div>

      <div id="stylists">
        <TeamProfileCards
          tag="Expert Artists"
          title="Choose Your Specialist"
          description="Our master stylists bring decades of high-fashion and red-carpet artistry directly to you."
          items={[
            {
              title: "Elena Vance",
              role: "Master Colorist & Cut Specialist",
              description: "12+ years experience in dimensional balayage and precision cutting.",
              avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
            },
            {
              title: "Marcus Sterling",
              role: "Senior Hair Sculptor",
              description: "Specializes in modern editorial styles, texture transformations, and male grooming.",
              avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
            },
            {
              title: "Sophia Chen",
              role: "Esthetics & Spa Lead",
              description: "Certified medical esthetician dedicated to skin revitalization and holistic care.",
              avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
            },
          ]}
          textAnimation="slide-up"
        />
      </div>

      <div id="booking-form">
        <ContactSplitForm
          tag="Pre-pay & Confirm"
          title="Complete Your Reservation"
          description="Lock in your date, time, and preferred specialist. Pre-payment guarantees zero wait time upon arrival."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true },
          ]}
          textarea={{ name: "notes", placeholder: "Special requests, hair length/type, or preferred stylist name...", rows: 3 }}
          buttonText="Pre-Pay & Confirm Booking"
          imageSrc="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
          textAnimation="slide-up"
        />
      </div>

      <FooterSimple
        brand="AURA SALON"
        columns={[
          {
            title: "Services",
            items: [
              { label: "Haircare & Styling", href: "#services" },
              { label: "Skincare & Facials", href: "#services" },
              { label: "Nail Artistry", href: "#services" },
            ],
          },
          {
            title: "Studio",
            items: [
              { label: "Our Stylists", href: "#stylists" },
              { label: "Location & Hours", href: "#booking-form" },
              { label: "Gift Cards", href: "#" },
            ],
          },
        ]}
        copyright="© 2025 Aura Salon & Spa. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ]}
      />
    </div>
  );
}