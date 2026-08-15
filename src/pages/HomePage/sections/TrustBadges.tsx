import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, BadgeCheck, Star, Sparkles } from 'lucide-react';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function TrustBadgesSection(): React.JSX.Element {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "100% Hygiene Certified",
      subtitle: "Eco-friendly, sanitized laundry and salon protocols",
    },
    {
      icon: Award,
      title: "Top Rated Local Hub",
      subtitle: "#1 all-in-one lifestyle & entertainment destination",
    },
    {
      icon: BadgeCheck,
      title: "Verified Business",
      subtitle: "Licensed salon, laundry, & gaming lounge",
    },
    {
      icon: Star,
      title: "5-Star Local Quality",
      subtitle: "Backed by 500+ verified community reviews",
    },
  ];

  const featuredLogos = [
    "Metro Daily",
    "Urban Life Mag",
    "City Guide 2024",
    "E-Sports Weekly",
    "Local Business Journal",
  ];

  return (
    <div id="trust-badges" data-section="trust-badges" data-webild-section="trust-badges">
      <SectionErrorBoundary name="trust-badges">
        <section className="w-full py-12 bg-background border-y border-[var(--accent)]/20">
          <div className="w-content-width mx-auto">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold rounded-full bg-[var(--primary-cta)]/10 text-[var(--primary-cta)]">
                <Sparkles className="w-3.5 h-3.5" />
                Trusted & Verified Local Service
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {trustItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="card p-5 rounded-xl flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-lg bg-[var(--primary-cta)]/10 text-[var(--primary-cta)] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-accent text-xs leading-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[var(--accent)]/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent shrink-0">
                Featured In & Recognized By
              </span>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10">
                {featuredLogos.map((brand, idx) => (
                  <span
                    key={idx}
                    className="text-sm md:text-base font-bold text-foreground/70 tracking-tight"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionErrorBoundary>
    </div>
  );
}