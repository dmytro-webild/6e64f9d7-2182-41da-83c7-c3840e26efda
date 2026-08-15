import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import ComplaintPage from "@/pages/ComplaintPage";
import LaundryDropOffPage from "@/pages/LaundryDropOffPage";
import BookingPage from "@/pages/BookingPage";
import PricingPage from "@/pages/PricingPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/laundry-drop-off" element={<LaundryDropOffPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Route>
    </Routes>
  );
}
