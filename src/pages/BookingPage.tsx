import { Sparkles, Calendar, CreditCard, Scissors } from "lucide-react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboardFeatures from "@/components/sections/hero/HeroBillboardFeatures";
import FeaturesTaggedCards from "@/components/sections/features/FeaturesTaggedCards";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function BookingPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Aura Salon"
        navItems={navItems}
        ctaButton={{ text: "Book Now", href: "/booking" }}
      />

      <main>
        <HeroBillboardFeatures
          badge="Online Reservations"
          title="Book Your Hair & Beauty Experience Online"
          description="Choose your luxury service, pick your favorite stylist, and lock in your appointment with instant contactless checkout."
          primaryButton={{ text: "Reserve Appointment", href: "#services" }}
          secondaryButton={{ text: "Meet Our Stylists", href: "#team" }}
          imageSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
          features={[
            { icon: Scissors, title: "Curated Services", description: "Precision cuts, coloring, and holistic spa treatments." },
            { icon: Calendar, title: "Real-time Slots", description: "Select exact calendar dates and preferred appointment times." },
            { icon: CreditCard, title: "Instant Payment", description: "Secure online checkout with immediate booking confirmation." },
          ]}
        />

        <section id="services">
          <FeaturesTaggedCards
            tag="Our Menu"
            title="Select Your Desired Treatment"
            description="Explore our full suite of professional hair styling, coloring, skincare, and nail services."
            textAnimation="slide-up"
            items={[
              {
                tag: "Hair Styling",
                title: "Signature Cut & Blowout",
                description: "Personalized hair consultation, precision hair sculpting, scalp massage, and red-carpet blowout finish.",
                imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
                primaryButton: { text: "Select Service • $95", href: "#team" },
              },
              {
                tag: "Coloring",
                title: "Balayage & Gloss Treatment",
                description: "Hand-painted dimensional highlights paired with a customized shine-enhancing gloss and luxury deep condition.",
                imageSrc: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
                primaryButton: { text: "Select Service • $220", href: "#team" },
              },
              {
                tag: "Nail Care",
                title: "Gel Luxury Manicure",
                description: "Nail shaping, cuticle care, hand scrub, therapeutic massage, and long-lasting non-toxic gel polish.",
                imageSrc: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
                primaryButton: { text: "Select Service • $65", href: "#team" },
              },
            ]}
          />
        </section>

        <section id="team">
          <TeamProfileCards
            tag="Our Specialists"
            title="Choose Your Preferred Specialist"
            description="Our master artists bring years of industry expertise and passion to every appointment."
            textAnimation="slide-up"
            items={[
              {
                title: "Elena Vance",
                description: "Master Colorist & Balayage Specialist with 10+ years experience in editorial styling.",
                avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Marcus Chen",
                description: "Precision Hair Sculptor known for sharp modern cuts and customized texture styling.",
                avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Sophia Miller",
                description: "Skincare & Nail Art Director specializing in natural beauty care and intricate gel design.",
                avatarSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
              },
            ]}
          />
        </section>

        <FaqSimple
          tag="Booking Info"
          title="Frequently Asked Questions"
          description="Everything you need to know before visiting Aura Salon."
          textAnimation="slide-up"
          items={[
            {
              question: "Can I reschedule or cancel my appointment?",
              answer: "Yes, you can reschedule or cancel up to 24 hours prior to your scheduled time via your email confirmation link.",
            },
            {
              question: "Are walk-in appointments available?",
              answer: "We strongly recommend booking online in advance as our artists book out quickly, but walk-ins are accommodated when available.",
            },
            {
              question: "How does pre-payment work?",
              answer: "Online payment secures your time slot. Additional add-on services can easily be processed at the salon counter.",
            },
          ]}
        />

        <ContactCta
          tag="Ready for Your Glow Up?"
          text="Complete your booking online today and enjoy a complimentary scalp treatment on your first visit."
          primaryButton={{ text: "Book Your Slot Now", href: "#services" }}
          secondaryButton={{ text: "View Salon Menu", href: "#services" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Aura Salon"
        copyright="© 2025 Aura Salon & Spa. All rights reserved."
        columns={[
          {
            title: "Services",
            items: [
              { label: "Hair Cutting & Styling", href: "#services" },
              { label: "Color & Highlights", href: "#services" },
              { label: "Nails & Spa", href: "#services" },
            ],
          },
          {
            title: "Navigation",
            items: navItems.map((item) => ({ label: item.name, href: item.href })),
          },
        ]}
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ]}
      />
    </div>
  );
}