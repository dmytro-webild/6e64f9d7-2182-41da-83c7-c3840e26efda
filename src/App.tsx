import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import ComplaintPage from "@/pages/ComplaintPage";
import LaundryDropOffPage from "@/pages/LaundryDropOffPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/laundry-drop-off" element={<LaundryDropOffPage />} />
      </Route>
    </Routes>
  );
}
