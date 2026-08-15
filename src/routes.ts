export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/complaint', label: 'Complaint', pageFile: 'ComplaintPage' },
  { path: '/laundry-drop-off', label: 'Laundry Drop Off', pageFile: 'LaundryDropOffPage' },
  { path: '/booking', label: 'Booking', pageFile: 'BookingPage' },
  { path: '/pricing', label: 'Pricing', pageFile: 'PricingPage' },
  { path: '/get-started', label: 'Get Started', pageFile: 'GetStartedPage' },
  { path: '/salon-booking', label: 'Salon Booking', pageFile: 'SalonBookingPage' },
  { path: '/services', label: 'Services', pageFile: 'ServicesPage' },
];
