import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import PricingHighlightedCards from "@/components/sections/pricing/PricingHighlightedCards";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimpleCard from "@/components/sections/footer/FooterSimpleCard";

export default function PricingPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="LuxeSalon"
        navItems={navItems}
        ctaButton={{ text: "Book Now", href: "/contact" }}
      />

      <main className="pt-16">
        <PricingHighlightedCards
          tag="SALON SERVICES & PACKAGES"
          title="Transparent Pricing for Every Beauty Need"
          description="Select your service, choose your favorite specialist, and complete your reservation upfront with instant SMS confirmation."
          plans={[
            {
              tag: "EXPRESS STYLING",
              price: "$65",
              description: "Quick refresh including wash, signature blowdry, and essential finishing style.",
              features: [
                "30-Minute Session",
                "Choose Any Junior Stylist",
                "Instant Mobile Confirmation",
                "Complimentary Drink"
              ],
              buttonText: "Book Express",
              buttonHref: "/contact",
              highlighted: false
            },
            {
              tag: "SIGNATURE CUT & COLOR",
              price: "$180",
              description: "Custom color consultation, precision haircut, deep treatment, and full styling.",
              features: [
                "90-Minute Service",
                "Select Master Stylist or Colorist",
                "Custom Glossing & Moisture Treatment",
                "Upfront Lock-in Rate",
                "Includes Aftercare Mini Kit"
              ],
              buttonText: "Book Signature",
              buttonHref: "/contact",
              highlighted: true
            },
            {
              tag: "VIP FULL DAY RETREAT",
              price: "$320",
              description: "Complete hair transformation, luxury scalp spa, manicure, and private suite experience.",
              features: [
                "3-Hour VIP Suite Access",
                "Senior Art Director Specialist",
                "Scalp Massage & Deep Conditioning",
                "Champagne & Gourmet Refreshments",
                "Full Cancellation Refund (24h+)"
              ],
              buttonText: "Reserve VIP Day",
              buttonHref: "/contact",
              highlighted: false
            }
          ]}
          textAnimation="slide-up"
        />

        <FeaturesIconCards
          tag="EASY BOOKING FLOW"
          title="Seamless Salon Experience in 3 Simple Steps"
          description="Skip phone calls and waiting. Secure your time slot and preferred staff member in seconds."
          features={[
            {
              icon: "✂️",
              title: "1. Choose Your Service",
              description: "Pick from cuts, coloring, extensions, scalp care, or full pampering bundles."
            },
            {
              icon: "👤",
              title: "2. Select Your Stylist",
              description: "Filter specialists by skill set, ratings, and real-time availability calendar."
            },
            {
              icon: "💳",
              title: "3. Pay & Get Confirmed",
              description: "Complete payment upfront for a hassle-free visit with zero checkout line wait."
            }
          ]}
          textAnimation="slide-up"
        />

        <FaqSimple
          tag="BOOKING DETAILS"
          title="Frequently Asked Questions"
          description="Have questions about upfront deposits, staff availability, or cancellation policies?"
          items={[
            {
              question: "Can I choose a specific staff member for my treatment?",
              answer: "Yes! During online checkout, you can select any available stylist or choose 'First Available' for flexible scheduling."
            },
            {
              question: "What is the cancellation policy?",
              answer: "You can reschedule or cancel for a 100% full refund up to 24 hours prior to your scheduled appointment time."
            },
            {
              question: "Are products included in the upfront price?",
              answer: "All essential shampoos, conditioners, and styling products used during your visit are fully included in the listed price."
            }
          ]}
          textAnimation="slide-up"
        />

        <ContactCta
          tag="RESERVE YOUR TIME"
          text="Ready for your transformation? Secure your spot with top specialists today."
          primaryButton={{ text: "Book Appointment Now", href: "/contact" }}
          secondaryButton={{ text: "View Stylist Profiles", href: "/team" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimpleCard
        brand="LuxeSalon"
        columns={[
          {
            title: "Services",
            items: [
              { label: "Haircare & Cuts", href: "/pricing" },
              { label: "Coloring & Highlights", href: "/pricing" },
              { label: "VIP Treatments", href: "/pricing" }
            ]
          },
          {
            title: "Navigation",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Stylist Team", href: "/team" },
              { label: "Contact & Hours", href: "/contact" }
            ]
          }
        ]}
        copyright="© 2025 LuxeSalon Studio. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}