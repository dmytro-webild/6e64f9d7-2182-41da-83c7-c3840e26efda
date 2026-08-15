import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboardFeatures from "@/components/sections/hero/HeroBillboardFeatures";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import ProductVariantCards from "@/components/sections/product/ProductVariantCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="LuxeSalon"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Book Now", href: "#services" }}
      />

      <HeroBillboardFeatures
        badge="Instant Online Reservation"
        title="Book Your Salon Experience in Seconds"
        description="Pick your desired treatment, choose your favorite master stylist, and complete secure upfront payment without phone calls."
        primaryButton={{ text: "Reserve Appointment", href: "#services" }}
        secondaryButton={{ text: "How It Works", href: "#how-it-works" }}
        textAnimation="slide-up"
        imageSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
        features={[
          { icon: "✨", title: "Signature Treatments", description: "Choose from precision cuts, luxury coloring, and rejuvenating spa rituals." },
          { icon: "👤", title: "Select Your Specialist", description: "Pick your preferred master stylist based on real reviews and work portfolios." },
          { icon: "💳", title: "Upfront Secure Pay", description: "Lock in your preferred time slot instantly with zero checkout friction." },
        ]}
      />

      <div id="how-it-works">
        <FeaturesDetailedSteps
          tag="Frictionless Booking"
          title="Three Simple Steps to Flawless Style"
          description="Our reservation flow gets you confirmed and scheduled in less than two minutes."
          textAnimation="slide-up"
          steps={[
            {
              tag: "Step 01",
              title: "Select Service",
              subtitle: "Transparent Options",
              description: "Browse our complete menu of hair, skin, and nail treatments with clear duration and pricing.",
            },
            {
              tag: "Step 02",
              title: "Pick Artist & Time",
              subtitle: "Real-Time Schedule",
              description: "View real-time calendar availability for top stylists and select the slot that fits your day.",
            },
            {
              tag: "Step 03",
              title: "Pay & Confirm",
              subtitle: "Upfront Lock",
              description: "Pay upfront via credit card or digital wallet to guarantee your appointment without waiting in line.",
            },
          ]}
        />
      </div>

      <div id="services">
        <ProductVariantCards
          tag="Featured Services"
          title="Select Treatment & Lock Your Slot"
          description="All appointments include a personalized consultation and premium organic finishing products."
          textAnimation="slide-up"
          products={[
            {
              name: "Balayage & Couture Cut",
              variant: "Senior Colorist • 120 mins",
              price: "$240",
              imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Botanical Scalp Therapy & Blowout",
              variant: "Master Stylist • 60 mins",
              price: "$110",
              imageSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Deluxe Gel Manicure & Hand Spa",
              variant: "Nail Specialist • 45 mins",
              price: "$75",
              imageSrc: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
            },
          ]}
        />
      </div>

      <ContactCta
        tag="Instant Confirmation"
        text="Elevate your salon routine today with effortless online scheduling and upfront payment security."
        primaryButton={{ text: "Book Treatment", href: "#services" }}
        secondaryButton={{ text: "Contact Support", href: "/contact" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="LuxeSalon"
        copyright="© 2025 LuxeSalon Studio. All rights reserved."
        columns={[
          { title: "Services", items: [{ label: "Hair Coloring", href: "#services" }, { label: "Styling & Cuts", href: "#services" }, { label: "Nail Care", href: "#services" }] },
          { title: "Booking", items: [{ label: "Schedule Online", href: "#services" }, { label: "Policies", href: "/contact" }, { label: "Gift Cards", href: "/contact" }] },
        ]}
        links={[{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }]}
      />
    </div>
  );
}