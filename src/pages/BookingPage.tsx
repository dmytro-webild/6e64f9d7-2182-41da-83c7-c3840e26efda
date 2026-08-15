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
  ArrowRight,
  BadgeCheck,
  Award,
  HelpCircle,
  Sparkle,
  ChevronRight
} from "lucide-react";
import { routes } from "@/routes";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroBillboardFeatures from "@/components/sections/hero/HeroBillboardFeatures";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
interface SalonService {
  id: string;
  name: string;
  category: string;
  price: number;
  deposit: number;
  duration: string;
  description: string;
  popular?: boolean;
  imageSrc: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  reviews: number;
  avatar: string;
  badge: string;
}

export default function BookingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("balayage");
  const [selectedStaffId, setSelectedStaffId] = useState<string>("elena");
  const [selectedDate, setSelectedDate] = useState<string>("Today, Nov 12");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("01:30 PM");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const categories = ["All", "Hair Styling & Cuts", "Hair Coloring", "Facials & Skin", "Nail Lounge"];

  const services: SalonService[] = [
    {
      id: "balayage",
      name: "Dimensional Balayage & Custom Gloss",
      category: "Hair Coloring",
      price: 240,
      deposit: 50,
      duration: "120 mins",
      description: "Hand-painted dimensional highlights, bond-building gloss finish, and signature blowout.",
      popular: true,
      imageSrc: "https://picsum.photos/seed/684527839/1200/800",
    },
    {
      id: "precision-cut",
      name: "Couture Haircut & Red-Carpet Blowout",
      category: "Hair Styling & Cuts",
      price: 95,
      deposit: 25,
      duration: "50 mins",
      description: "Personalized scalp analysis, nourishing wash, custom sculpting, and high-shine blowout.",
      popular: false,
      imageSrc: "https://picsum.photos/seed/850992414/1200/800",
    },
    {
      id: "botanical-facial",
      name: "HydraGlow Botanical Facial & Scalp Spa",
      category: "Facials & Skin",
      price: 150,
      deposit: 35,
      duration: "60 mins",
      description: "Deep enzyme exfoliation, lymphatic face massage, collagen infusion, and organic scalp mask.",
      popular: true,
      imageSrc: "https://picsum.photos/seed/2122531894/1200/800",
    },
    {
      id: "gel-manicure",
      name: "Deluxe Gel Manicure & Hand Therapy",
      category: "Nail Lounge",
      price: 75,
      deposit: 20,
      duration: "45 mins",
      description: "Cuticle care, organic sugar scrub, hand massage, and long-wear chip-resistant gel finish.",
      popular: false,
      imageSrc: "https://picsum.photos/seed/1796513254/1200/800",
    },
    {
      id: "keratin-treatment",
      name: "Brazilian Keratin Smoothing Ritual",
      category: "Hair Styling & Cuts",
      price: 280,
      deposit: 60,
      duration: "150 mins",
      description: "Restorative protein infusion to eliminate frizz, seal cuticles, and deliver glass-like shine.",
      popular: false,
      imageSrc: "https://picsum.photos/seed/1108391660/1200/800",
    },
    {
      id: "full-highlights",
      name: "Luxe Full Foil Highlights & Toner",
      category: "Hair Coloring",
      price: 210,
      deposit: 45,
      duration: "110 mins",
      description: "Full head foil brightening, custom neutralizing toner, moisture treatment, and style.",
      popular: false,
      imageSrc: "https://picsum.photos/seed/660059470/1200/800",
    },
  ];

  const staffMembers: StaffMember[] = [
    {
      id: "elena",
      name: "Elena Vance",
      role: "Master Color Director",
      specialty: "Balayage & Precision Tones",
      rating: 4.98,
      reviews: 210,
      avatar: "https://picsum.photos/seed/1953909365/400/400",
      badge: "Top Rated",
    },
    {
      id: "marcus",
      name: "Marcus Chen",
      role: "Senior Hair Sculptor",
      specialty: "Precision Cuts & Styling",
      rating: 4.95,
      reviews: 184,
      avatar: "https://picsum.photos/seed/963130516/400/400",
      badge: "Popular",
    },
    {
      id: "sophia",
      name: "Sophia Miller",
      role: "Lead Aesthetician",
      specialty: "Botanical Facials & Skin",
      rating: 4.92,
      reviews: 156,
      avatar: "https://picsum.photos/seed/785959286/400/400",
      badge: "Specialist",
    },
    {
      id: "first-available",
      name: "First Available Artist",
      role: "Priority Queue Slot",
      specialty: "Shortest Queue Time",
      rating: 4.96,
      reviews: 520,
      avatar: "https://picsum.photos/seed/390708348/400/400",
      badge: "Fastest Slot",
    },
  ];

  const dates = ["Today, Nov 12", "Tomorrow, Nov 13", "Thursday, Nov 14", "Friday, Nov 15"];
  const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"];

  const filteredServices = selectedCategory === "All"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  const activeService = services.find((s) => s.id === selectedServiceId) || services[0];
  const activeStaff = staffMembers.find((s) => s.id === selectedStaffId) || staffMembers[0];

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setBookingConfirmed(true);
    }, 1000);
  };

  return (
    <div className="min-h-svh bg-background text-foreground">
      <HeroBillboardFeatures
        badge="Instant Online Reservation"
        title="Select Services, Choose Stylist & Pay Upfront"
        description="Enjoy a friction-free salon experience. Pick your desired treatments, select your favorite master artist, and lock in your time slot with an upfront deposit."
        primaryButton={{ text: "Reserve Appointment", href: "#booking-flow" }}
        secondaryButton={{ text: "How It Works", href: "#how-it-works" }}
        textAnimation="slide-up"
        imageSrc="https://picsum.photos/seed/201691213/1200/800"
        features={[
          { icon: Sparkles, title: "Couture Salon Menu", description: "Precision cuts, dimensional balayage, botanical facials & nail spa." },
          { icon: User, title: "Choose Your Stylist", description: "Select senior specialists or master colorists based on client reviews." },
          { icon: ShieldCheck, title: "Upfront Slot Lock", description: "Pay deposit upfront to guarantee your chair and skip queue delays." },
        ]}
      />

      {/* DEDICATED SALON BOOKING FLOW */}
      <section id="booking-flow" className="bg-background">
        <div className="w-content-width mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="px-3.5 py-1 text-sm card rounded w-fit mx-auto border border-primary-cta/30">
              <p className="text-primary-cta font-medium">RESERVATION PORTAL</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Configure Your Salon Visit</h2>
            <p className="text-base md:text-lg text-accent max-w-content-width mx-auto">
              Select your service, choose your preferred specialist, and secure your time slot with an upfront deposit.
            </p>
          </div>

          {/* STEP 1: CATEGORIES & SERVICES */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <div className="flex items-center gap-2">
                <Scissors className="size-5 text-primary-cta" />
                <h3 className="text-xl font-bold">1. Select Service Treatment</h3>
              </div>
              <span className="text-xs text-accent">Step 1 of 3</span>
            </div>

            {/* CATEGORY FILTER BUTTONS */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${ selectedCategory === category ?"primary-button text-primary-cta-text shadow-md"
                      : "card text-foreground hover:border-primary-cta/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <Card
                    key={service.id}
                    className={`p-5 flex flex-col justify-between transition-all cursor-pointer border ${ isSelected ?"border-primary-cta ring-2 ring-primary-cta/20 bg-card/90"
                        : "border-transparent hover:border-border"
                    }`}
                    onClick={() => setSelectedServiceId(service.id)}
                  >
                    <div className="space-y-3">
                      <div className="relative aspect-video rounded overflow-hidden">
                        <img
                          src={service.imageSrc}
                          alt={service.name}
                          className="size-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        {service.popular && (
                          <span className="absolute top-2 right-2 px-2.5 py-1 text-xs font-semibold primary-button text-primary-cta-text rounded-full shadow">
                            Popular
                          </span>
                        )}
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary-cta">
                            {service.category}
                          </span>
                          <h4 className="text-lg font-bold mt-0.5">{service.name}</h4>
                        </div>
                      </div>

                      <p className="text-xs text-accent line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-accent pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5 text-primary-cta" /> {service.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BadgeCheck className="size-3.5 text-emerald-400" /> Free Cancellation
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold">${service.price}</span>
                        <p className="text-[11px] text-accent">${service.deposit} deposit upfront</p>
                      </div>

                      <button
                        type="button"
                        className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1 ${ isSelected ?"primary-button text-primary-cta-text"
                            : "secondary-button text-secondary-cta-text"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="size-3.5" /> Selected
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
          </div>

          {/* STEP 2: STAFF SELECTION */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <div className="flex items-center gap-2">
                <User className="size-5 text-primary-cta" />
                <h3 className="text-xl font-bold">2. Choose Your Specialist</h3>
              </div>
              <span className="text-xs text-accent">Step 2 of 3</span>
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
                        <div className="absolute -bottom-1 -right-1 primary-button text-primary-cta-text p-1 rounded-full shadow">
                          <Check className="size-3.5" />
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-bold text-base">{staff.name}</h4>
                      <p className="text-xs text-accent">{staff.role}</p>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-amber-400">
                      <Star className="size-3.5 fill-amber-400" />
                      <span className="font-semibold text-foreground">{staff.rating}</span>
                      <span className="text-accent">({staff.reviews})</span>
                    </div>

                    <button
                      type="button"
                      className={`w-full py-1.5 text-xs rounded font-medium transition-all ${ isStaffSelected ?"primary-button text-primary-cta-text"
                          : "secondary-button text-secondary-cta-text"
                      }`}
                    >
                      {isStaffSelected ? "Specialist Chosen" : "Select Stylist"}
                    </button>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* STEP 3: DATE & TIME SLOT SELECTOR */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-border/50 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-primary-cta" />
                <h3 className="text-xl font-bold">3. Select Date & Time Slot</h3>
              </div>
              <span className="text-xs text-accent">Step 3 of 3</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* DATE SELECTOR */}
              <div className="card p-5 rounded-xl space-y-3 border border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-primary-cta" /> Preferred Date
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`px-3 py-2.5 rounded text-xs font-medium transition-all cursor-pointer text-left flex items-center justify-between ${ selectedDate === date ?"primary-button text-primary-cta-text"
                          : "secondary-button text-secondary-cta-text hover:border-primary-cta/30"
                      }`}
                    >
                      <span>{date}</span>
                      {selectedDate === date && <Check className="size-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* TIME SLOT SELECTOR */}
              <div className="card p-5 rounded-xl space-y-3 border border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
                  <Clock className="size-3.5 text-primary-cta" /> Available Time Slot
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`px-3 py-2.5 rounded text-xs font-medium transition-all cursor-pointer text-center ${ selectedTimeSlot === slot ?"primary-button text-primary-cta-text"
                          : "secondary-button text-secondary-cta-text hover:border-primary-cta/30"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CHECKOUT & UPFRONT DEPOSIT SUMMARY */}
          <div className="pt-8">
            <ScrollReveal variant="slide-up">
              <Card className="p-6 md:p-8 space-y-6 border border-primary-cta/40 shadow-xl relative overflow-hidden bg-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border/60 pb-6 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-primary-cta tracking-wider uppercase">
                      Reservation Summary
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-1">Lock In Your Salon Booking</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 card rounded-full text-xs text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="size-4" /> 24h Free Cancellation Policy
                  </div>
                </div>

                {!bookingConfirmed ? (
                  <form onSubmit={handleDepositSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="p-4 rounded-lg bg-background/70 space-y-1 border border-border/40">
                        <span className="text-xs text-accent flex items-center gap-1">
                          <Scissors className="size-3.5 text-primary-cta" /> Selected Treatment
                        </span>
                        <p className="font-semibold text-base truncate">{activeService.name}</p>
                        <p className="text-xs text-accent">{activeService.duration} • {activeService.category}</p>
                      </div>

                      <div className="p-4 rounded-lg bg-background/70 space-y-1 border border-border/40">
                        <span className="text-xs text-accent flex items-center gap-1">
                          <User className="size-3.5 text-primary-cta" /> Specialist
                        </span>
                        <p className="font-semibold text-base">{activeStaff.name}</p>
                        <p className="text-xs text-accent">{activeStaff.role}</p>
                      </div>

                      <div className="p-4 rounded-lg bg-background/70 space-y-1 border border-border/40">
                        <span className="text-xs text-accent flex items-center gap-1">
                          <Calendar className="size-3.5 text-primary-cta" /> Appointment Time
                        </span>
                        <p className="font-semibold text-base">{selectedDate}</p>
                        <p className="text-xs text-primary-cta font-medium">{selectedTimeSlot}</p>
                      </div>
                    </div>

                    {/* CUSTOMER INFO INPUTS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">Full Name</label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="e.g. Jane Doe"
                          className="w-full h-10 px-3 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary-cta"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">Email Address for Confirmation</label>
                        <input
                          type="email"
                          required
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="jane@example.com"
                          className="w-full h-10 px-3 rounded bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary-cta"
                        />
                      </div>
                    </div>

                    {/* FINANCIAL BREAKDOWN */}
                    <div className="space-y-2 pt-2 border-t border-border/50">
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">Full Service Price</span>
                        <span className="font-semibold">${activeService.price}.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">Remaining Balance (Due at Salon)</span>
                        <span className="font-semibold">${activeService.price - activeService.deposit}.00</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-border/50">
                        <span className="flex items-center gap-1.5">
                          <CreditCard className="size-5 text-primary-cta" /> Upfront Lock-in Deposit
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
                          "Locking Chair & Processing Deposit..."
                        ) : (
                          <>
                            Pay ${activeService.deposit}.00 Upfront Deposit & Confirm Booking{" "}
                            <ArrowRight className="size-5" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-accent flex items-center justify-center gap-1.5">
                        <Lock className="size-3.5 text-emerald-400" />
                        256-bit encrypted checkout • Full refund on cancellations up to 24h prior
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-5">
                    <div className="size-16 primary-button text-primary-cta-text rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle2 className="size-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-3xl font-bold">Appointment Reserved & Confirmed!</h4>
                      <p className="text-xs text-accent font-mono uppercase tracking-wider">
                        Booking Ref: #LUXE-{(Math.floor(Math.random() * 89999) + 10000)}
                      </p>
                    </div>

                    <p className="text-accent max-w-content-width mx-auto text-sm leading-relaxed">
                      Thank you, <span className="text-foreground font-semibold">{customerName || "Valued Client"}</span>. Your ${activeService.deposit}.00 deposit for{" "}
                      <span className="text-foreground font-semibold">{activeService.name}</span> with{" "}
                      <span className="text-foreground font-semibold">{activeStaff.name}</span> on{" "}
                      <span className="text-foreground font-semibold">{selectedDate} at {selectedTimeSlot}</span> has been processed. A confirmation pass has been sent to{" "}
                      <span className="text-foreground font-semibold">{customerEmail || "your email"}</span>.
                    </p>

                    <div className="pt-4 flex justify-center gap-3">
                      <Button
                        text="Book Another Appointment"
                        onClick={() => setBookingConfirmed(false)}
                        variant="secondary"
                      />
                      <Button text="Return to Home" href="/" variant="primary" />
                    </div>
                  </div>
                )}
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STEPS */}
      <div id="how-it-works">
        <FeaturesDetailedSteps
          tag="Frictionless Booking Flow"
          title="Three Simple Steps to Flawless Style"
          description="Our reservation system gets you scheduled, assigned to your specialist, and confirmed in under two minutes."
          textAnimation="slide-up"
          steps={[
            {
              tag: "Step 01",
              title: "Select Treatment",
              subtitle: "Transparent Service Menu",
              description: "Browse our menu of hair, skin, and nail services with exact duration and clear deposit pricing.",
              imageSrc: "https://picsum.photos/seed/684527839/1200/800",
            },
            {
              tag: "Step 02",
              title: "Pick Your Stylist",
              subtitle: "Real-Time Schedule Sync",
              description: "Choose your preferred master colorist or stylist, view live availability, and pick your time slot.",
              imageSrc: "https://picsum.photos/seed/2045139762/1200/800",
            },
            {
              tag: "Step 03",
              title: "Upfront Deposit",
              subtitle: "Instant Chair Confirmation",
              description: "Lock in your slot with a minimal deposit. Walk in at your time and enjoy immediate VIP service.",
              imageSrc: "https://picsum.photos/seed/2122531894/1200/800",
            },
          ]}
        />
      </div>

      {/* FAQ SECTION */}
      <div id="faq">
        <FaqSimple
          tag="Booking & Deposit Policy"
          title="Frequently Asked Questions"
          description="Everything you need to know about upfront deposits, staff scheduling, and salon arrival."
          textAnimation="slide-up"
          items={[
            {
              question: "Why do you require an upfront deposit?",
              answer: "Upfront deposits guarantee your chair with our master stylists, eliminate long queue times, and allow us to prep specialized organic formula bowls prior to your arrival.",
            },
            {
              question: "Can I cancel or reschedule my appointment?",
              answer: "Yes! You can reschedule or cancel up to 24 hours before your scheduled appointment time for a 100% full deposit refund directly back to your payment card.",
            },
            {
              question: "How do I pay the remaining balance?",
              answer: "The remaining balance is paid at the salon after your service is completed. We accept credit cards, Apple Pay, cash, and digital wallets.",
            },
            {
              question: "Can I request a specific stylist for my appointment?",
              answer: "Absolutely. During booking you can select your preferred master colorist or sculptor, or choose'First Available Artist' for the quickest appointment slot.",
            },
          ]}
        />
      </div>

      {/* CALL TO ACTION */}
      <ContactCta
        tag="Ready to Transform Your Look?"
        text="Book your salon experience in under two minutes with instant upfront slot confirmation."
        primaryButton={{ text: "Reserve Appointment", href: "#booking-flow" }}
        secondaryButton={{ text: "Contact Salon Team", href: "/complaint" }}
        textAnimation="slide-up"
      />

    </div>
  );
}