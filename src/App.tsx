import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import ComplaintPage from "@/pages/ComplaintPage";
import LaundryDropOffPage from "@/pages/LaundryDropOffPage";
import BookingPage from "@/pages/BookingPage";
import PricingPage from "@/pages/PricingPage";
import GetStartedPage from "@/pages/GetStartedPage";
import SalonBookingPage from "@/pages/SalonBookingPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/laundry-drop-off" element={<LaundryDropOffPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/salon-booking" element={<SalonBookingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
