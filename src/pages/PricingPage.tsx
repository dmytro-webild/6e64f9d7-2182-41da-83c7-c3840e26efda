import { useState } from "react";
import {
  Scissors,
  User,
  Calendar,
  Clock,
  CreditCard,
  Check,
  Sparkles,
  ShieldCheck,
  Star,
  Lock,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { routes } from "@/routes";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PricingHighlightedCards from "@/components/sections/pricing/PricingHighlightedCards";
interface ServiceItem {
  id: string;
  name: string;
  category: string;
  price: number;
  deposit: number;
  duration: string;
  description: string;
  popular?: boolean;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  avatar: string;
  specialty: string;
}

export default function PricingPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  // Interactive booking selection state
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("balayage");
  const [selectedStaffId, setSelectedStaffId] = useState<string>("elena");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("Today, 2:30 PM");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const categories = ["All", "Hair Cut & Style", "Coloring", "Skincare", "Nails & Spa"];

  const services: ServiceItem[] = [
    {
      id: "cut-blowout",
      name: "Signature Cut & Red-Carpet Blowout",
      category: "Hair Cut & Style",
      price: 85,
      deposit: 25,
      duration: "45 mins",
      description: "Custom style consultation, precision scalp wash, hair sculpting, and shine blowout finish.",
      popular: false,
    },
    {
      id: "balayage",
      name: "Dimensional Balayage & Custom Gloss",
      category: "Coloring",
      price: 220,
      deposit: 50,
      duration: "120 mins",
      description: "Hand-painted dimensional highlights, bond-building gloss treatment, and luxury blowout.",
      popular: true,
    },
    {
      id: "hydraglow",
      name: "HydraGlow Deep Facial & Scalp Spa",
      category: "Skincare",
      price: 145,
      deposit: 35,
      duration: "60 mins",
      description: "Exfoliating botanical peel, lymphatic facial massage, oxygen boost, and scalp nourishment.",
      popular: false,
    },
    {
      id: "gel-manicure",
      name: "Luxury Gel Manicure & Hand Spa",
      category: "Nails & Spa",
      price: 65,
      deposit: 20,
      duration: "45 mins",
      description: "Precision nail shaping, cuticle nourishment, organic hand scrub, and long-lasting gel polish.",
      popular: false,
    },
  ];

  const staffMembers: StaffMember[] = [
    {
      id: "elena",
      name: "Elena Vance",
      role: "Master Colorist & Balayage Director",
      specialty: "Coloring & Balayage",
      rating: 4.9,
      reviews: 142,
      avatar: "https://picsum.photos/seed/963130516/400/400",
    },
    {
      id: "marcus",
      name: "Marcus Chen",
      role: "Senior Precision Hair Sculptor",
      specialty: "Precision Cuts & Styling",
      rating: 4.95,
      reviews: 198,
      avatar: "https://picsum.photos/seed/128341008/400/400",
    },
    {
      id: "sophia",
      name: "Sophia Miller",
      role: "Skincare & Nail Art Director",
      specialty: "Facials & Spa Aesthetics",
      rating: 4.88,
      reviews: 116,
      avatar: "https://picsum.photos/seed/1885361542/400/400",
    },
    {
      id: "first-available",
      name: "First Available Artist",
      role: "Shortest Waiting Time",
      specialty: "Express Booking",
      rating: 4.92,
      reviews: 450,
      avatar: "https://picsum.photos/seed/426446510/400/400",
    },
  ];

  const timeSlots = [
    "Today, 2:30 PM",
    "Today, 4:00 PM",
    "Tomorrow, 10:30 AM",
    "Tomorrow, 1:15 PM",
    "Tomorrow, 3:45 PM",
  ];

  const activeService = services.find((s) => s.id === selectedServiceId) || services[1];
  const activeStaff = staffMembers.find((s) => s.id === selectedStaffId) || staffMembers[0];

  const filteredServices = selectedCategory === "All"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  const handleProcessDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBookingConfirmed(true);
    }, 900);
  };

  return (
    <div className="min-h-svh bg-background text-foreground">

      <main className="space-y-20">
        {/* HERO SECTION */}
        <section aria-label="Pricing Hero" className="pt-8">
          <div className="w-content-width mx-auto flex flex-col items-center gap-4 text-center">
            <div className="px-3.5 py-1.5 text-sm card rounded-full w-fit flex items-center gap-2 border border-primary-cta/30">
              <Sparkles className="size-4 text-primary-cta" />
              <span>Instant Online Booking & Upfront Deposit</span>
            </div>

            <TextAnimation
              text="Select Services, Pick Your Stylist & Reserve Upfront"
              variant="slide-up"
              gradientText={true}
              tag="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-content-width tracking-tight leading-[1.15]"
            />

            <TextAnimation
              text="Enjoy transparent salon pricing with zero surprise charges. Secure your appointment and lock in your preferred specialist with a minimal deposit."
              variant="fade-blur"
              gradientText={false}
              tag="p"
              className="text-lg md:text-xl text-muted-foreground max-w-content-width leading-relaxed"
            />

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button text="Explore Services & Book" href="#service-selector" variant="primary" />
              <Button text="View Package Bundles" href="#pricing-packages" variant="secondary" />
            </div>
          </div>
        </section>

        {/* INTERACTIVE SERVICE & STAFF SELECTOR */}
        <section id="service-selector" aria-label="Service Selector" className="scroll-">
          <div className="w-content-width mx-auto space-y-12">
            <div className="text-center space-y-3">
              <div className="px-3 py-1 text-sm card rounded w-fit mx-auto">
                <p>STEP 1 OF 2</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">1. Select Service & Preferred Specialist</h2>
              <p className="text-lg text-muted-foreground max-w-content-width mx-auto">
                Filter our menu, choose your treatment, and pick your artist.
              </p>
            </div>

            {/* CATEGORY FILTERS */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${ selectedCategory === category ?"primary-button text-primary-cta-text shadow-md"
                      : "card hover:border-primary-cta/40 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <Card
                    key={service.id}
                    className={`p-6 flex flex-col justify-between transition-all cursor-pointer border ${ isSelected ?"border-primary-cta ring-2 ring-primary-cta/20 bg-card/90"
                        : "border-transparent hover:border-border"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary-cta">
                            {service.category}
                          </span>
                          <h3 className="text-2xl font-bold mt-1">{service.name}</h3>
                        </div>
                        {service.popular && (
                          <span className="px-2.5 py-1 text-xs font-medium primary-button text-primary-cta-text rounded-full shrink-0">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          {service.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="size-3.5 text-emerald-400" />
                          100% Refundable up to 24h
                        </span>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">${service.price}</div>
                        <div className="text-xs text-muted-foreground">
                          ${service.deposit} upfront deposit to lock time
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`px-4 py-2 rounded text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${ isSelected ?"primary-button text-primary-cta-text"
                            : "secondary-button text-secondary-cta-text"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="size-4" /> Selected
                          </>
                        ) : (
                          "Select Service"
                        )}
                      </button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* STAFF SELECTION */}
            <div className="space-y-6 pt-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold">2. Choose Your Specialist</h3>
                <p className="text-sm text-muted-foreground">
                  Select your preferred stylist or select the first available appointment slot.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {staffMembers.map((staff) => {
                  const isStaffSelected = selectedStaffId === staff.id;
                  return (
                    <Card
                      key={staff.id}
                      className={`p-5 flex flex-col items-center text-center space-y-3 cursor-pointer transition-all border ${ isStaffSelected ?"border-primary-cta ring-2 ring-primary-cta/20"
                          : "border-transparent hover:border-border"
                      }`}
                      onClick={() => setSelectedStaffId(staff.id)}
                    >
                      <div className="relative">
                        <img
                          src={staff.avatar}
                          alt={staff.name}
                          className="size-20 rounded-full object-cover border-2 border-primary-cta/30"
                        />
                        {isStaffSelected && (
                          <div className="absolute -bottom-1 -right-1 primary-button text-primary-cta-text p-1 rounded-full">
                            <Check className="size-3.5" />
                          </div>
                        )}
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">{staff.name}</h4>
                        <p className="text-xs text-muted-foreground">{staff.role}</p>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-amber-400">
                        <Star className="size-3.5 fill-amber-400" />
                        <span className="font-semibold text-foreground">{staff.rating}</span>
                        <span className="text-muted-foreground">({staff.reviews})</span>
                      </div>

                      <button
                        type="button"
                        className={`w-full py-1.5 text-xs rounded font-medium transition-all cursor-pointer ${ isStaffSelected ?"primary-button text-primary-cta-text"
                            : "secondary-button text-secondary-cta-text"
                        }`}
                      >
                        {isStaffSelected ? "Specialist Selected" : "Select Stylist"}
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* TIME SLOT SELECTOR */}
            <div className="p-6 card rounded-xl space-y-4 max-w-content-width mx-auto border border-border/60">
              <div className="flex items-center gap-2 text-primary-cta">
                <Calendar className="size-5" />
                <h4 className="font-semibold text-lg text-foreground">Select Appointment Slot</h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`px-3.5 py-2 rounded text-xs md:text-sm font-medium transition-all cursor-pointer ${ selectedTimeSlot === slot ?"primary-button text-primary-cta-text"
                        : "secondary-button text-secondary-cta-text"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UPFRONT DEPOSIT & SUMMARY CHECKOUT */}
        <section id="deposit-checkout" aria-label="Deposit Checkout" className="scroll-">
          <div className="w-content-width mx-auto max-w-content-width">
            <ScrollReveal variant="slide-up">
              <Card className="p-8 space-y-8 border border-primary-cta/30 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-border/60 pb-6">
                  <div>
                    <span className="text-xs font-semibold text-primary-cta tracking-wider uppercase">
                      Reservation Summary
                    </span>
                    <h3 className="text-3xl font-bold mt-1">Lock In Your Booking</h3>
                  </div>
                  <Lock className="size-8 text-primary-cta/60" />
                </div>

                {!bookingConfirmed ? (
                  <form onSubmit={handleProcessDeposit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="p-4 rounded-lg bg-background/60 space-y-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Scissors className="size-3.5" /> Service Selected
                        </span>
                        <p className="font-semibold text-base">{activeService.name}</p>
                        <p className="text-xs text-muted-foreground">{activeService.duration}</p>
                      </div>

                      <div className="p-4 rounded-lg bg-background/60 space-y-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <User className="size-3.5" /> Specialist
                        </span>
                        <p className="font-semibold text-base">{activeStaff.name}</p>
                        <p className="text-xs text-muted-foreground">{activeStaff.role}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-background/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="size-4 text-primary-cta" />
                        <span className="text-sm font-medium">Selected Date & Time</span>
                      </div>
                      <span className="text-sm font-bold text-primary-cta">{selectedTimeSlot}</span>
                    </div>

                    {/* DEPOSIT BREAKDOWN */}
                    <div className="space-y-2 pt-2 border-t border-border/50">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Service Price</span>
                        <span className="font-semibold">${activeService.price}.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Remaining Due At Salon</span>
                        <span className="font-semibold">
                          ${activeService.price - activeService.deposit}.00
                        </span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-border/50">
                        <span className="flex items-center gap-1.5">
                          <CreditCard className="size-5 text-primary-cta" /> Upfront Deposit Due Today
                        </span>
                        <span className="text-primary-cta">${activeService.deposit}.00</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full py-4 rounded font-bold text-base primary-button text-primary-cta-text flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg hover:opacity-95 disabled:opacity-50"
                      >
                        {isProcessing ? (
                          "Processing Secure Reservation..."
                        ) : (
                          <>
                            Pay ${activeService.deposit}.00 Deposit & Reserve Appointment{" "}
                            <ArrowRight className="size-5" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
                        <ShieldCheck className="size-4 text-emerald-400" />
                        Instant SMS confirmation • Full refund on cancellations up to 24 hours prior
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <div className="size-16 primary-button text-primary-cta-text rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <h4 className="text-3xl font-bold">Booking Deposit Confirmed!</h4>
                    <p className="text-muted-foreground max-w-content-width mx-auto text-sm leading-relaxed">
                      Your ${activeService.deposit}.00 deposit for{" "}
                      <span className="text-foreground font-semibold">{activeService.name}</span> with{" "}
                      <span className="text-foreground font-semibold">{activeStaff.name}</span> on{" "}
                      <span className="text-foreground font-semibold">{selectedTimeSlot}</span> has been processed.
                    </p>
                    <div className="pt-4 flex justify-center gap-3">
                      <Button
                        text="Book Another Appointment"
                        onClick={() => setBookingConfirmed(false)}
                        variant="secondary"
                      />
                      <Button text="View Salon Directions" href="/contact" variant="primary" />
                    </div>
                  </div>
                )}
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* PACKAGE PRICING SECTION */}
        <section id="pricing-packages" aria-label="Pricing Packages" className="scroll-">
          <PricingHighlightedCards
            tag="BUNDLED PACKAGES"
            title="Transparent Salon Service Packages"
            description="Select from our curated beauty & hair care tiers for maximum value and seamless upfront checkout."
            plans={[
              {
                tag: "EXPRESS STYLING",
                price: "$65",
                description: "Quick refresh including wash, signature blowdry, and essential finishing style.",
                features: [
                  "30-Minute Express Session",
                  "Select Any Available Senior Stylist",
                  "$20 Upfront Lock-in Deposit",
                  "Instant Mobile Confirmation",
                  "Complimentary Beverage"
                ],
                primaryButton: { text: "Select Express Package", href: "#service-selector" },
              },
              {
                tag: "SIGNATURE CUT & COLOR",
                price: "$180",
                description: "Custom color consultation, precision haircut, deep moisture treatment, and red-carpet blowout.",
                features: [
                  "90-Minute Full Transformation",
                  "Select Master Stylist or Color Director",
                  "$40 Upfront Lock-in Deposit",
                  "Custom Gloss & Bond Builder Included",
                  "Complimentary Aftercare Mini Kit"
                ],
                primaryButton: { text: "Select Signature Package", href: "#service-selector" },
                highlight: "MOST POPULAR"
              },
              {
                tag: "VIP RETREAT DAY",
                price: "$320",
                description: "Full hair transformation, luxury scalp spa, organic manicure, and private suite experience.",
                features: [
                  "3-Hour Exclusive VIP Suite Access",
                  "Art Director Senior Specialist",
                  "$75 Upfront Lock-in Deposit",
                  "Scalp Therapy & Deep Conditioning",
                  "Champagne & Gourmet Refreshments",
                  "24-Hour Free Cancellation Policy"
                ],
                primaryButton: { text: "Reserve VIP Day", href: "#service-selector" },
                highlight: "PREMIUM EXPERIENCE"
              }
            ]}
            textAnimation="slide-up"
          />
        </section>
      </main>

    </div>
  );
}