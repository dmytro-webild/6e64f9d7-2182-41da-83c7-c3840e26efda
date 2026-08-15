import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesTaggedCards from "@/components/sections/features/FeaturesTaggedCards";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import PricingSimpleCards from "@/components/sections/pricing/PricingSimpleCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function BookingPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  const services = [
    { tag: "PC ARENA", title: "Pro Esports Rigs", description: "RTX 4090 rigs, 240Hz monitors, and mechanical peripherals for competitive play.", primaryButton: { text: "Reserve PC", href: "#packages" } },
    { tag: "VR ROOM", title: "Full-Motion VR Pods", description: "Immersive 360-degree virtual reality setups equipped with wireless headsets.", primaryButton: { text: "Reserve VR", href: "#packages" } },
    { tag: "VIP SUITE", title: "Console Lounge", description: "4K OLED displays, comfortable couch seating, and full multiplayer libraries.", primaryButton: { text: "Reserve Suite", href: "#packages" } },
  ];

  const staff = [
    { title: "Alex Vance", description: "FPS Coach & Tactical Specialist with 6+ years tournament experience.", avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", tags: ["FPS Specialist", "Pro Coach"] },
    { title: "Elena Rostova", description: "VR Host & Sim Racing Instructor trained in setup tuning.", avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", tags: ["VR Host", "Sim Racing"] },
    { title: "Marcus Brody", description: "Tournament Director & Fighting Game Coach for private parties.", avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", tags: ["Event Host", "FGC Specialist"] },
  ];

  const packages = [
    { tag: "QUICK PLAY", price: "$25", description: "Ideal for 2-hour solo or duo gaming sessions.", features: ["2 Hours High-Spec Rig", "Choice of Any Title", "Standard Headset"], primaryButton: { text: "Pay $25 Securely", href: "#faq" } },
    { tag: "PRO PASS", price: "$60", description: "Full half-day access with dedicated staff support.", features: ["5 Hours Any Station", "Dedicated Game Master", "Free Beverage & Snacks", "Priority Hardware"], primaryButton: { text: "Pay $60 Securely", href: "#faq" } },
    { tag: "VIP SQUAD", price: "$150", description: "Private lounge reserved for up to 6 players.", features: ["4 Hours Private Suite", "Dedicated Coach Included", "Tournament Setup", "Full Catering Support"], primaryButton: { text: "Pay $150 Securely", href: "#faq" } },
  ];

  const faqs = [
    { question: "How do I confirm my payment?", answer: "Once you complete checkout online, you will receive an instant digital receipt and QR entry code via email." },
    { question: "Can I change my assigned staff coach?", answer: "Yes, you can request staff changes up to 2 hours before your scheduled reservation start time." },
    { question: "Is my payment information secure?", answer: "All transactions are processed using encrypted 256-bit SSL secure payment gateways." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered logo="Apex Gaming" navItems={navItems} ctaButton={{ text: "Book Station", href: "#packages" }} />
      <HeroSplit
        tag="ONLINE RESERVATIONS"
        title="Reserve Your Ultimate Gaming Station"
        description="Select your preferred gaming setup, choose a dedicated coach or host, and process payment securely before you arrive."
        primaryButton={{ text: "Select Package", href: "#packages" }}
        secondaryButton={{ text: "Choose Staff", href: "#staff" }}
        imageSrc="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80"
        textAnimation="slide-up"
      />
      <div id="services">
        <FeaturesTaggedCards
          tag="STEP 1: SELECT SERVICE"
          title="Choose Your Gaming Experience"
          description="High-spec PC rigs, motion VR pods, or private console suites tailored to your gaming style."
          items={services}
          textAnimation="slide-up"
        />
      </div>
      <div id="staff">
        <TeamProfileCards
          tag="STEP 2: CHOOSE STAFF"
          title="Select a Dedicated Game Master"
          description="Enhance your session with pro coaching, tournament setup, or dedicated host assistance."
          items={staff}
          textAnimation="slide-up"
        />
      </div>
      <div id="packages">
        <PricingSimpleCards
          tag="STEP 3: SECURE PAYMENT"
          title="Select Duration & Pay Online"
          description="Lock in your session time instantly with our SSL-encrypted checkout system."
          plans={packages}
          textAnimation="slide-up"
        />
      </div>
      <div id="faq">
        <FaqSimple
          tag="NEED HELP?"
          title="Booking & Payment FAQ"
          description="Common questions about instant online reservations and venue arrivals."
          items={faqs}
          textAnimation="slide-up"
        />
      </div>
      <FooterSimple
        brand="Apex Gaming"
        columns={[
          { title: "Booking", items: [{ label: "PC Arena", href: "#services" }, { label: "VR Pods", href: "#services" }] },
          { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] },
        ]}
        copyright="© 2025 Apex Gaming Lounge. All rights reserved."
        links={[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }]}
      />
    </div>
  );
}