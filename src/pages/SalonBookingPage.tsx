import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import PricingSimpleCards from "@/components/sections/pricing/PricingSimpleCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { routes } from "@/routes";

export default function SalonBookingPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="LuxeSalon"
        navItems={navItems}
        ctaButton={{ text: "Book Appointment", href: "#booking" }}
      />

      <HeroBillboard
        tag="Seamless Salon Experience"
        title="Book your stylist & lock in your spot instantly"
        description="Select premium treatments, pick your master stylist, and pay securely online to guarantee your preferred time slot without no-shows."
        primaryButton={{ text: "Select Service", href: "#booking" }}
        secondaryButton={{ text: "View Stylists", href: "#services" }}
        imageSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <div id="services">
        <FeaturesIconCards
          tag="Why Book Online"
          title="Designed for Effortless Salon Visits"
          description="Pick your specialist, choose custom add-ons, and secure instant confirmation."
          features={[
            {
              icon: "Scissors",
              title: "Expert Stylists",
              description: "Browse master colorists and senior stylists tailored to your hair type."
            },
            {
              icon: "Calendar",
              title: "Real-Time Schedule",
              description: "See up-to-the-minute availability and pick exact times that suit you."
            },
            {
              icon: "CreditCard",
              title: "Upfront Payment",
              description: "Secure contactless payment guarantees your slot and minimizes wait times."
            }
          ]}
          textAnimation="slide-up"
        />
      </div>

      <div id="booking">
        <PricingSimpleCards
          tag="Packages & Rates"
          title="Transparent Pricing & Instant Confirmation"
          description="Choose a full session or quick service and prepay online for zero hassle at checkout."
          plans={[
            {
              tag: "Express",
              price: "$65",
              description: "Quick blow-dry, styling, and scalp treatment.",
              features: ["30-Minute Session", "Senior Stylist Choice", "Instant Confirmation"],
              primaryButton: { text: "Book Express", href: "#" },
              highlighted: false
            },
            {
              tag: "Signature",
              price: "$140",
              description: "Precision haircut, custom color gloss, and conditioning mask.",
              features: ["75-Minute Session", "Master Stylist", "Consultation Included", "Priority Scheduling"],
              primaryButton: { text: "Book Signature", href: "#" },
              highlighted: true
            },
            {
              tag: "Luxury Transformation",
              price: "$280",
              description: "Full balayage or highlights, cut, gloss, and deep repair.",
              features: ["180-Minute Session", "Creative Director", "Deluxe Treatment Package", "100% Reserved Slot"],
              primaryButton: { text: "Book Deluxe", href: "#" },
              highlighted: false
            }
          ]}
          textAnimation="slide-up"
        />
      </div>

      <ContactCta
        tag="Ready for Your New Look?"
        text="Book your appointment today and experience stress-free upfront scheduling."
        primaryButton={{ text: "Reserve Spot Now", href: "#booking" }}
        secondaryButton={{ text: "Contact Support", href: "/contact" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="LuxeSalon"
        columns={[
          {
            title: "Services",
            items: [
              { label: "Haircuts & Styling", href: "#services" },
              { label: "Color & Highlights", href: "#services" },
              { label: "Treatments", href: "#services" }
            ]
          },
          {
            title: "Salon",
            items: [
              { label: "Our Team", href: "#services" },
              { label: "About Us", href: "#" },
              { label: "Locations", href: "#" }
            ]
          }
        ]}
        copyright="© 2025 LuxeSalon. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}