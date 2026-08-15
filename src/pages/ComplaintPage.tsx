import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ComplaintPage() {
  const handleComplaintSubmit = (data: Record<string, string>) => {
    console.log("Complaint submitted:", data);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="ResolveHub"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "File Complaint", href: "#complaint-form" }}
      />

      <HeroSplit
        tag="Customer Support & Resolution"
        title="We are Here to Listen and Make Things Right"
        description="Your feedback helps us maintain high standards. File a formal complaint and our dedicated resolution team will review it within 24 hours."
        primaryButton={{ text: "Submit Complaint", href: "#complaint-form" }}
        secondaryButton={{ text: "View Resolution FAQs", href: "#faq" }}
        imageSrc="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <div id="complaint-form">
        <ContactSplitForm
          tag="Submit Ticket"
          title="File a Formal Complaint"
          description="Provide details regarding your issue so we can investigate and resolve it promptly."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "orderId", type: "text", placeholder: "Order or Reference Number", required: false },
            { name: "subject", type: "text", placeholder: "Complaint Category / Subject", required: true }
          ]}
          textarea={{
            name: "details",
            placeholder: "Describe what happened in detail...",
            rows: 5,
            required: true
          }}
          buttonText="Submit Complaint Ticket"
          onSubmit={handleComplaintSubmit}
          imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />
      </div>

      <div id="faq">
        <FaqSimple
          tag="Resolution FAQ"
          title="Frequently Asked Questions"
          description="Learn more about our investigation process, timelines, and response policies."
          items={[
            {
              question: "How long does it take to review a complaint?",
              answer: "Our resolution team reviews every ticket within 24 business hours and provides an initial response."
            },
            {
              question: "What information should I include?",
              answer: "Include relevant reference numbers, dates, transaction details, and a clear description of the issue."
            },
            {
              question: "Can I escalate an unresolved complaint?",
              answer: "Yes, if you are not satisfied with the initial resolution, your ticket can be escalated to a senior support manager."
            }
          ]}
          textAnimation="slide-up"
        />
      </div>

      <FooterSimple
        brand="ResolveHub"
        columns={[
          {
            title: "Support",
            items: [
              { label: "Help Center", href: "#" },
              { label: "File Complaint", href: "#complaint-form" },
              { label: "Track Status", href: "#" }
            ]
          },
          {
            title: "Legal",
            items: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" }
            ]
          }
        ]}
        copyright="© 2025 ResolveHub Inc. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}