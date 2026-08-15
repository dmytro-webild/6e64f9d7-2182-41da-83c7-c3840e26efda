import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FeaturesAlternatingSplit from "@/components/sections/features/FeaturesAlternatingSplit";

export default function AboutPage() {
  return (
    <>
      <div data-webild-section="AboutFeaturesSplit"><AboutFeaturesSplit
        tag="The Vinto Concept"
        title="Three Distinct Experiences Under One Roof"
        description="Vinto Global combines professional laundry care, an immersive gaming lounge, and a modern beauty salon into one seamless destination tailored to your modern lifestyle."
        primaryButton={{"text":"Explore Services","href":"#services"}}
        secondaryButton={{"text":"Get in Touch","href":"/contact"}}
        items={[{"icon":"Shirt","title":"Professional Laundry Care","description":"Expert washing, drying, ironing, and garment care delivered with exceptional speed and attention."},{"icon":"Gamepad2","title":"High-Energy Gaming Lounge","description":"A vibrant environment to relax, compete on high-end setups, and connect with friends."},{"icon":"Scissors","title":"Premium Beauty Salon","description":"Precision haircuts, contemporary hairstyling, and grooming services from expert stylists."},{"icon":"Sparkles","title":"Ultimate Convenience","description":"Streamline your day by getting groomed and dropping off laundry while enjoying top-tier gaming."}]}
        imageSrc="https://img.freepik.com/free-photo/stylish-modern-lounge-interior_23-2149023451.jpg"
        textAnimation="fade-blur"
      /></div>
      <div data-webild-section="FeaturesAlternatingSplit"><FeaturesAlternatingSplit
        tag="THE VINTO EXPERIENCE"
        title="Three Essential Services under One Roof"
        description="Vinto Global brings professional garment care, high-energy gaming, and premium salon styling together into one contemporary destination."
        primaryButton={{"text":"Get Started","href":"/contact"}}
        secondaryButton={{"text":"View Pricing","href":"/pricing"}}
        items={[{"title":"Professional Laundry & Clothing Care","description":"From express washing and delicate drying to custom ironing, we keep your wardrobe impeccably fresh while you relax.","imageSrc":"https://img.freepik.com/free-photo/laundry-room-interior-with-washing-machines_23-2149364532.jpg","primaryButton":{"text":"Laundry Services","href":"/laundry"}},{"title":"High-Energy Gaming Lounge","description":"Level up your downtime with modern console setups, competitive titles, and comfortable lounge spaces built for community.","imageSrc":"https://img.freepik.com/free-photo/young-friends-playing-video-games-lounge_23-2149175432.jpg","primaryButton":{"text":"Gaming Lounge","href":"/gaming"}},{"title":"Modern Hair & Beauty Salon","description":"Refresh your personal style with expert haircuts, precision grooming, and relaxing treatments in a sleek modern setting.","imageSrc":"https://img.freepik.com/free-photo/hairdresser-styling-hair-client-salon_23-2149187321.jpg","primaryButton":{"text":"Book Salon","href":"/salon"}}]}
        textAnimation="fade-blur"
      /></div>
    </>
  );
}
