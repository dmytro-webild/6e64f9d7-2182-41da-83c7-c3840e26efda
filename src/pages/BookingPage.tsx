import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function BookingPage() {
  const steps = [
    { tag: "01", title: "Select Service", subtitle: "Hair, Nails & Spa", description: "Choose from our signature salon treatments tailored to your exact beauty needs." },
    { tag: "02", title: "Pick Stylist", subtitle: "Expert Professionals", description: "Select your preferred senior stylist or beauty specialist for a personalized session." },
    { tag: "03", title: "Reserve & Pay", subtitle: "Instant Confirmation", description: "Secure your time slot online with seamless contactless payment processing." }
  ];

  const stylists = [
    { title: "Elena Rostova", description: "Master Colorist & Hair Architect with 10+ years of studio experience.", avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" },
    { title: "Marcus Vance", description: "Creative Cut & Styling Director specializing in precision modern cuts.", avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80" },
    { title: "Sophia Chen", description: "Nail Artistry & Aesthetics Specialist dedicated to luxury care.", avatarSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80" }
  ];

  const formInputs = [
    { name: "name", type: "text", placeholder: "Your Full Name", required: true },
    { name: "email", type: "email", placeholder: "Email Address", required: true },
    { name: "date", type: "date", placeholder: "Preferred Date", required: true }
  ];

  const footerCols = [
    { title: "Services", items: [{ label: "Hair Care", href: "#" }, { label: "Nail Care", href: "#" }, { label: "Spa & Facial", href: "#" }] },
    { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Stylists", href: "#" }, { label: "Careers", href: "#" }] }
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="LuxeSalon"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Book Now", href: "#reserve" }}
      />

      <HeroSplit
        tag="ONLINE APPOINTMENTS"
        title="Reserve Your Beauty Experience in Minutes"
        description="Pick your desired service, select your favorite specialist, and confirm instantly with secure digital checkout."
        primaryButton={{ text: "Book Appointment", href: "#reserve" }}
        secondaryButton={{ text: "Explore Services", href: "#services" }}
        imageSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&auto=format&fit=crop&q=80"
        textAnimation="slide-up"
      />

      <FeaturesDetailedSteps
        tag="HOW IT WORKS"
        title="Three Simple Steps to Glamour"
        description="Our streamlined reservation system makes scheduling effortless and fast."
        steps={steps}
        textAnimation="slide-up"
      />

      <TeamProfileCards
        tag="OUR TEAM"
        title="Meet Our Master Stylists"
        description="Choose from our team of industry-leading beauty artisans."
        items={stylists}
        textAnimation="slide-up"
      />

      <div id="reserve">
        <ContactSplitForm
          tag="INSTANT RESERVATION"
          title="Schedule Your Session Today"
          description="Fill out your details below to finalize your booking and secure your appointment."
          inputs={formInputs}
          textarea={{ name: "notes", placeholder: "Special requests or service preferences...", rows: 3 }}
          buttonText="Confirm & Pay Online"
          imageSrc="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&auto=format&fit=crop&q=80"
          textAnimation="slide-up"
        />
      </div>

      <FooterSimple
        brand="LuxeSalon"
        columns={footerCols}
        copyright="© 2025 LuxeSalon. All rights reserved."
        links={footerLinks}
      />
    </div>
  );
}