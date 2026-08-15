import HeroSplit from "@/components/sections/hero/HeroSplit";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";

export default function ComplaintPage() {
  const handleComplaintSubmit = (data: Record<string, string>) => {
    console.log("Complaint submitted:", data); }; return ( <div className="min-h-svh bg-background text-foreground space-y-12">
      <HeroSplit
        tag="Support & Grievance Resolution"
        title="We are Committed to Resolving Your Concerns"
        description="Your experience matters to us. Submit a formal complaint and our dedicated dispute resolution team will review and address your ticket within 24 hours."
        primaryButton={{ text: "File Complaint", href: "#complaint-form" }}
        secondaryButton={{ text: "Resolution Process", href: "#resolution-faq" }}
        imageSrc=""
        textAnimation="slide-up"
      />

      <div id="complaint-form">
        <ContactSplitForm
          tag="Formal Grievance Form"
          title="Submit Your Complaint Ticket"
          description="Please provide detailed information regarding your issue so we can conduct a thorough investigation and resolve it promptly."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "orderId", type: "text", placeholder: "Order or Reference Number", required: false },
            { name: "subject", type: "text", placeholder: "Complaint Category / Subject", required: true },
          ]}
          textarea={{
            name: "details",
            placeholder: "Describe the issue in detail, including dates and relevant particulars...",
            rows: 5,
            required: true,
          }}
          buttonText="Submit Complaint Ticket"
          onSubmit={handleComplaintSubmit}
          imageSrc=""
          textAnimation="slide-up"
        />
      </div>

      <div id="resolution-faq">
        <FaqSimple
          tag="Help & Transparency"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our grievance handling procedures, response timelines, and escalation paths."
          items={[
            {
              question: "How quickly will my complaint be processed?",
              answer: "Our compliance and support team acknowledges all tickets within 12 hours and aims for complete resolution within 24 to 48 business hours.",
            },
            {
              question: "What details should I provide in my ticket?",
              answer: "Including your account or order reference number, transaction date, specific description of what occurred, and any supporting documentation helps us resolve your issue faster.",
            },
            {
              question: "What happens after I submit a complaint?",
              answer: "You will receive an automated ticket confirmation with a tracking reference. A designated resolution officer will review your case and reach out via email or phone with an update.",
            },
            {
              question: "Can I escalate an unresolved issue?",
              answer: "Yes. If you are unsatisfied with the initial resolution, you can request case escalation to a senior compliance manager through your ticket response.",
            },
          ]}
          textAnimation="slide-up"
        />
      </div>
    </div>
  );
}