import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Laundry",
    "href": "#services"
  },
  {
    "name": "Salon",
    "href": "#services"
  },
  {
    "name": "Games",
    "href": "#services"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  { name: "Complaint", href: "/complaint" },
  { name: "Laundry Drop Off", href: "/laundry-drop-off" },
  { name: "Booking", href: "/booking" },
  { name: "Contact Center", href: "#contact-center" },
  { name: "Pricing", href: "/pricing" },





];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Vinto Global"
      ctaButton={{
        text: "Contact Us",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="HubServices"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Team",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 HubServices. All rights reserved."
      links={[
        {
          label: "Twitter",
          href: "#",
        },
        {
          label: "Instagram",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/dining-sitting-furniture-set-cafe-restaurant-with-light-colors-big-windows_114579-1522.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
