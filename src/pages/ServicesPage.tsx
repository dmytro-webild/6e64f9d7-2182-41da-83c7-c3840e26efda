import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";
import FeaturesAlternatingSplit from "@/components/sections/features/FeaturesAlternatingSplit";

export default function ServicesPage() {
  return (
    <>
      <div data-webild-section="HeroBillboard"><section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30"><HeroBackgroundSlot /><div className="flex flex-col gap-12 md:gap-15 w-content-width mx-auto"><div className="flex flex-col items-center gap-3 text-center"><AvatarGroup avatarsSrc={["https://img.freepik.com/free-photo/portrait-young-confident-woman-smiling_23-2148431712.jpg","https://img.freepik.com/free-photo/handsome-smiling-man-modern-outfit_23-2149318900.jpg","https://img.freepik.com/free-photo/young-stylish-man-modern-attire_23-2149151234.jpg"]} label="Trusted by guests for laundry, salon & gaming" className="mb-1" /><TextAnimation text="Three Experiences, One Destination." variant="slide-up" gradientText={true} tag="h1" className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance" /><TextAnimation text="Discover our trio of elevated lifestyle offerings in one seamless hub. Experience effortless valet laundry, luxury salon styling, and ultimate esports gaming." variant="slide-up" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Explore All" href="#services-list" variant="primary" /><Button text="Book Service" href="/booking" variant="secondary" animationDelay={0.1} /></div></div><ScrollReveal variant="slide-up" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden"><ImageOrVideo imageSrc="https://img.freepik.com/free-photo/modern-luxury-lounge-interior-with-stylish-decor_23-2150914102.jpg" className="aspect-4/5 md:aspect-video" /></ScrollReveal></div></section></div>
      <div data-webild-section="FeaturesAlternatingSplit"><FeaturesAlternatingSplit
        tag="Our Services"
        title="Tailored Lifestyle Services Under One Roof"
        description="Discover Vinto Global's premier offerings combining effortless garment care, luxury beauty treatments, and high-tech gaming entertainment."
        primaryButton={{"text":"Explore Offerings","href":"#services-list"}}
        secondaryButton={{"text":"Get in Touch","href":"/contact"}}
        items={[{"title":"Premium Express Laundry Care","description":"Effortless eco-friendly garment cleaning with precision finishing and convenient same-day pickup options.","imageSrc":"https://img.freepik.com/free-photo/clean-folded-towels-laundry-basket_23-2148213888.jpg","primaryButton":{"text":"View Laundry Rates","href":"/pricing"}},{"title":"Luxe Hair & Beauty Salon","description":"Indulge in tailored hair styling, skin treatments, and personal care from our certified master artists.","imageSrc":"https://img.freepik.com/free-photo/woman-getting-hair-done-hair-salon_23-2149232262.jpg","primaryButton":{"text":"Book Salon Visit","href":"/booking"}},{"title":"Pro Gaming & Esports Lounge","description":"Immerse yourself in top-tier gaming rigs, ultra-low latency fiber, and comfortable private esports booths.","imageSrc":"https://img.freepik.com/free-photo/young-man-playing-video-game-dark-room_23-2149313009.jpg","primaryButton":{"text":"Reserve Gaming Booth","href":"/booking"}}]}
        textAnimation="slide-up"
      /></div>
      <div data-webild-section="ContactCta"><section aria-label="Contact section" className="py-20"><div className="w-content-width mx-auto"><ScrollReveal variant="fade-blur"><div className="flex flex-col items-center gap-8 md:gap-10 py-20 px-8 rounded card"><div className="flex flex-col items-center gap-2"><div className="px-3 py-1 mb-1 text-sm card rounded w-fit"><p>Connect With Us</p></div><TextAnimation text="Have questions about our laundry, salon, or gaming lounge services? Reach out to our team today." variant="slide-up" gradientText={true} tag="h2" className="md:max-w-8/10 text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Book Service" href="/booking" variant="primary" /><Button text="Contact Center" href="/contact" variant="secondary" animationDelay={0.1} /></div></div></div></ScrollReveal></div></section></div>
    </>
  );
}
