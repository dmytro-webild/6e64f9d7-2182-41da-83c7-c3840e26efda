import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/get-started" }}
      />
      <main>
        <HeroBillboard
          tag="Quick Start"
          title="Get Started with Your New Platform in Minutes"
          description="Follow our simple onboarding flow or create your account today to unlock your workspace, invite your team, and launch immediately."
          primaryButton={{ text: "Create Free Account", href: "#signup" }}
          secondaryButton={{ text: "Explore Steps", href: "#steps" }}
          textAnimation="slide-up"
        />
        <div id="steps">
          <FeaturesDetailedSteps
            tag="3 Easy Steps"
            title="How to Get Started"
            description="Launching your next big project takes only a few simple actions."
            steps={[
              {
                tag: "Step 01",
                title: "Create Your Workspace",
                subtitle: "Set up in under 60 seconds",
                description: "Sign up with your work email and choose a project domain to initialize your environment.",
                imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              },
              {
                tag: "Step 02",
                title: "Configure Integrations",
                subtitle: "Connect your favorite tools",
                description: "Import your existing repository or select built-in templates to customize your workspace.",
                imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                tag: "Step 03",
                title: "Invite Team & Deploy",
                subtitle: "Go live with confidence",
                description: "Collaborate seamlessly in real time and hit publish to distribute your app across edge networks.",
                imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              }
            ]}
            textAnimation="slide-up"
          />
        </div>
        <div id="signup">
          <ContactSplitForm
            tag="Sign Up"
            title="Create Your Account"
            description="Start building right away with full access to all essential tools and features."
            inputs={[
              { name: "fullName", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Work Email", required: true },
              { name: "company", type: "text", placeholder: "Company Name", required: false }
            ]}
            buttonText="Get Started Now"
            imageSrc="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
            textAnimation="slide-up"
          />
        </div>
      </main>
      <FooterSimple
        brand="Webild"
        columns={[
          { title: "Product", items: [{ label: "Features", href: "#steps" }, { label: "Get Started", href: "#signup" }] },
          { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Contact", href: "#signup" }] }
        ]}
        copyright="© 2025 Webild Inc. All rights reserved."
        links={[{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }]}
      />
    </div>
  );
}