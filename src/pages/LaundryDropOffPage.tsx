import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesTaggedCards from "@/components/sections/features/FeaturesTaggedCards";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function LaundryDropOffPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="CleanExpress Laundry"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Log Drop-Off", href: "#register-dropoff" }}
      />

      <HeroBillboard
        tag="Quick & Easy Drop-Off"
        title="Register Your Laundry Drop-Off Point"
        description="Dropped off your clothes at one of our partner locations? Log your drop-off details now so our team can scan, wash, and update your order instantly."
        primaryButton={{ text: "Log Drop-Off Now", href: "#register-dropoff" }}
        secondaryButton={{ text: "Find Pickup Points", href: "#locations" }}
        imageSrc="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <div id="locations">
        <FeaturesTaggedCards
          tag="Pickup Network"
          title="Our Drop-Off Pickup Points"
          description="Choose from our automated smart lockers or partner counter locations across the city."
          items={[
            {
              tag: "Downtown Hub",
              title: "102 Metro Plaza - Locker Station A",
              description: "24/7 self-service lockers with automated bag scanning and 4-hour express service.",
              primaryButton: { text: "Select Location", href: "#register-dropoff" },
            },
            {
              tag: "Westside Market",
              title: "458 West Avenue Counter",
              description: "Attended counter open 7 AM - 9 PM daily. Hanger care & dry cleaning available.",
              primaryButton: { text: "Select Location", href: "#register-dropoff" },
            },
            {
              tag: "University District",
              title: "Campus Student Hub #12",
              description: "Discount drop-off point with instant QR registration for student accounts.",
              primaryButton: { text: "Select Location", href: "#register-dropoff" },
            },
          ]}
          textAnimation="slide-up"
        />
      </div>

      <div id="register-dropoff">
        <ContactSplitForm
          tag="Drop-Off Registration"
          title="Confirm Which Location You Used"
          description="Submit your details below so our courier team can pull your clothes bag from the pickup point without delay."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "phone", type: "tel", placeholder: "Mobile Number (for SMS tracking)", required: true },
            { name: "pickupPoint", type: "text", placeholder: "Pickup Point Name or Locker ID", required: true },
            { name: "bagCount", type: "number", placeholder: "Number of Laundry Bags Dropped", required: true },
          ]}
          textarea={{ name: "specialInstructions", placeholder: "Special requests (e.g. Gentle wash, separate darks, fabric softener preferences)...", rows: 3 }}
          buttonText="Submit Drop-Off Log"
          imageSrc="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />
      </div>

      <FaqSimple
        tag="Help & Support"
        title="Drop-Off Questions"
        description="Need help registering your clothes drop-off?"
        items={[
          {
            question: "How do I tag my clothes bag at the drop-off point?",
            answer: "Attach the reusable QR tag provided in your welcome bag or write your registered phone number clearly on the tag.",
          },
          {
            question: "What is the turnaround time after I submit this form?",
            answer: "Items logged before 10 AM are returned within 24 hours. Express items are ready the same evening.",
          },
          {
            question: "What if I forgot which locker number I deposited into?",
            answer: "Enter the pickup point name and approximate time. Our couriers scan all new deposits upon arrival.",
          },
        ]}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="CleanExpress"
        columns={[
          {
            title: "Services",
            items: [
              { label: "Wash & Fold", href: "#" },
              { label: "Pickup Locations", href: "#locations" },
              { label: "Express Wash", href: "#" },
            ],
          },
          {
            title: "Support",
            items: [
              { label: "Drop-Off Guide", href: "#" },
              { label: "Tracking", href: "#" },
              { label: "Contact Us", href: "#" },
            ],
          },
        ]}
        copyright="© 2025 CleanExpress Laundry Systems. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ]}
      />
    </div>
  );
}