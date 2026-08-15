import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import PricingSimpleCards from '@/components/sections/pricing/PricingSimpleCards';
import TeamListCards from '@/components/sections/team/TeamListCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/close-up-shot-amused-enthusiastic-good-looking-malaysian-woman-smiling-feeling-positive_176420-44079.jpg",        "http://img.b2bpic.net/free-photo/portrait-business-woman-with-enthusiastic-face-expression-smiling-looking-confident-standing-s_1258-127188.jpg",        "http://img.b2bpic.net/free-photo/content-stylish-student-posing-table_23-2147666655.jpg",        "http://img.b2bpic.net/free-photo/woman-talking-video-call-decorated-kitchen-home_482257-16862.jpg"]}
      avatarText="Trusted by 500+ locals"
      title="Your Daily Essentials, Elevated."
      description="Seamlessly manage laundry, refresh your style in our salon, and unwind in our premium gaming lounge."
      primaryButton={{
        text: "Book Now",        href: "#contact"}}
      secondaryButton={{
        text: "Our Services",        href: "#services"}}
      names={[
        "Laundry",        "Salon",        "Gaming"]}
      imageSrc="http://img.b2bpic.net/free-photo/drum-closeup-perforation-symmetry-modern-dryer_169016-69505.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Three Experiences, One Destination."
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesImageBento
      tag="Our Core Services"
      title="Everything Under One Roof"
      description="Explore our curated lifestyle hub designed for maximum convenience and fun."
      items={[
        {
          title: "Premium Laundry",          description: "Eco-friendly, fast, and reliable.",          imageSrc: "http://img.b2bpic.net/free-photo/shirts-jackets-hangers-closet-capsule-wardrobe_169016-71050.jpg"},
        {
          title: "Style Salon",          description: "Expert cuts and wellness.",          imageSrc: "http://img.b2bpic.net/free-photo/barber-shop-retro-vintage-style_1150-17931.jpg"},
        {
          title: "Gaming Lounge",          description: "Next-gen consoles and PCs.",          imageSrc: "http://img.b2bpic.net/free-photo/excited-customers-testing-vr-software_74855-1836.jpg"},
        {
          title: "Express Folding",          description: "Done in under an hour.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-carrying-weaved-laundry-basket-lifestyle-concept_53876-123647.jpg"},
        {
          title: "Beauty Treatments",          description: "Full spa pampering services.",          imageSrc: "http://img.b2bpic.net/free-photo/make-up-products_23-2148553409.jpg"},
        {
          title: "Esports Arena",          description: "Compete with the best.",          imageSrc: "http://img.b2bpic.net/free-photo/two-young-indian-people-having-fun-with-new-technology-vr-headset-virtual-reality-simulator_627829-9531.jpg"},
        {
          title: "Hub Lounge",          description: "Community workspace & cafe.",          imageSrc: "http://img.b2bpic.net/free-photo/team-multiethnic-call-center-workers-using-ai-chatbot-reply-customer-queries_482257-125156.jpg"},
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSimpleCards
      tag="Membership Options"
      title="Flexible Plans for You"
      description="Choose the membership that fits your lifestyle frequency."
      plans={[
        {
          tag: "Essentials",          price: "$29/mo",          description: "Unlimited laundry drops.",          features: [
            "12 washes",            "Same-day service",            "Free pickup"],
        },
        {
          tag: "Style & Play",          price: "$59/mo",          description: "Unlimited gaming + salon discount.",          features: [
            "5 salon hours",            "Weekly gaming",            "Exclusive member events"],
        },
        {
          tag: "All-Access",          price: "$99/mo",          description: "Complete service pass.",          features: [
            "Full laundry coverage",            "Priority salon booking",            "Unlimited gaming access"],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Impact"
      title="Serving Our Community Daily"
      description="Proven results for busy residents."
      metrics={[
        {
          value: "15k+",          title: "Clothes Washed",          features: [
            "Safe handling",            "Eco-detergents"],
        },
        {
          value: "5k+",          title: "Style Refreshments",          features: [
            "Professional stylists",            "High-end products"],
        },
        {
          value: "2k+",          title: "Gaming Sessions",          features: [
            "High FPS",            "Pro controllers"],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamListCards
      tag="Expert Staff"
      title="Meet Your Local Experts"
      description="Friendly professionals ready to help."
      groups={[
        {
          title: "Laundry & Salon Team",          members: [
            {
              name: "Sarah J.",              role: "Head Stylist",              detail: "10 years experience.",              imageSrc: "http://img.b2bpic.net/free-photo/confident-young-beautiful-female-barber-uniform-grabbed-hair-isolated-green-wall_141793-105669.jpg"},
            {
              name: "Mike D.",              role: "Laundry Mgr",              detail: "Operations expert.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-choosing-clothes-from-clothes-rack_1170-816.jpg"},
          ],
        },
        {
          title: "Game Tech Support",          members: [
            {
              name: "Leo K.",              role: "Lounge Mgr",              detail: "Hardware specialist.",              imageSrc: "http://img.b2bpic.net/free-photo/data-center-software-developer-using-pc-monitor-neural-network-ai-visualization-woman-working_482257-135341.jpg"},
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Customer Stories"
      title="Love from Our Neighbors"
      description="Hear what our community says about us."
      testimonials={[
        {
          name: "Sarah Miller",          role: "Designer",          quote: "The laundry is fast and the salon is top-tier!",          imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3706.jpg"},
        {
          name: "Tom Baker",          role: "Gamer",          quote: "Best gaming setup in town, bar none.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12867.jpg"},
        {
          name: "Emily Chen",          role: "Student",          quote: "Love coming here to relax and get stuff done.",          imageSrc: "http://img.b2bpic.net/free-photo/older-woman-drinking-coffee-smiling-house-white-shirt-daytime_176474-4942.jpg"},
        {
          name: "David Wilson",          role: "Artist",          quote: "So convenient having everything in one place.",          imageSrc: "http://img.b2bpic.net/free-photo/emotional-female-portrait-closeup-outdoors_1321-4437.jpg"},
        {
          name: "Jessica R.",          role: "Teacher",          quote: "Staff are friendly and the place is spotless.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-teenage-girl-emotions-concept-emotion-happiness_169016-66569.jpg"},
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Get Answers"
      title="Commonly Asked Questions"
      description="Everything you need to know about our services."
      items={[
        {
          question: "Are bookings required?",          answer: "For salon yes, but laundry/games are walk-in friendly."},
        {
          question: "Can I bring my own gear?",          answer: "Yes, we encourage using your own peripherals."},
        {
          question: "Is WiFi available?",          answer: "Yes, high-speed fiber throughout the building."},
        {
          question: "Do you offer dry cleaning?",          answer: "Yes, we offer professional dry cleaning services."},
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Start Today"
      text="Ready to simplify your errands?"
      primaryButton={{
        text: "Get In Touch",        href: "#"}}
      secondaryButton={{
        text: "View Location",        href: "#"}}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
