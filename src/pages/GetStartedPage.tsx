import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboardFeatures from "@/components/sections/hero/HeroBillboardFeatures";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Platform"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Sign In", href: "/get-started" }}
      />

      <main className="space-y-16 py-8">
        <HeroBillboardFeatures
          badge="Quick Onboarding"
          title="Get Up and Running in Minutes"
          description="Follow our intuitive setup process to configure your workspace, invite your team, and deploy your first project effortlessly."
          primaryButton={{ text: "Create Free Account", href: "#register" }}
          secondaryButton={{ text: "Read Documentation", href: "#faq" }}
          features={[
            { icon: "UserPlus", title: "1. Create Account", description: "Sign up in seconds with email or single sign-on." },
            { icon: "Sliders", title: "2. Configure Space", description: "Personalize dashboard preferences and integrations." },
            { icon: "Zap", title: "3. Launch Workflow", description: "Automate your builds and scale with total confidence." }
          ]}
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />

        <div id="register">
          <ContactSplitForm
            tag="Sign Up"
            title="Start your 14-day free trial"
            description="No credit card required. Gain immediate access to all pro features and modern deployment tooling."
            inputs={[
              { name: "fullName", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Work Email", required: true },
              { name: "password", type: "password", placeholder: "Password (8+ characters)", required: true }
            ]}
            buttonText="Create Account"
            imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            textAnimation="fade-blur"
          />
        </div>

        <div id="faq">
          <FaqSimple
            tag="Questions"
            title="Frequently Asked Questions"
            description="Everything you need to know about getting started and team onboarding."
            items={[
              { question: "Is there a free trial available?", answer: "Yes, you get full access to all features for 14 days without entering credit card details." },
              { question: "Can I invite my entire team?", answer: "Yes, you can invite unlimited team members to collaborate on your projects right away." },
              { question: "How long does onboarding take?", answer: "Most teams are fully configured and deployed in less than 10 minutes." }
            ]}
            textAnimation="slide-up"
          />
        </div>
      </main>

      <FooterSimple
        brand="Platform"
        columns={[
          { title: "Product", items: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }] },
          { title: "Resources", items: [{ label: "Documentation", href: "#" }, { label: "Guides", href: "#" }] }
        ]}
        copyright="© 2025 Platform Inc. All rights reserved."
        links={[{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }]}
      />
    </div>
  );
}