import Cart from "../components/cart";
import HomeContent from "../components/homeContent";
import Sidebar from "../components/sidebar";
import NotificationPage from '../components/notification/notificationPage'
import { Routes, Route, Link } from "react-router-dom";

export function LandingPage() {
  return (
    <section className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="notification" element={<NotificationPage />} />
      </Routes>
      <Cart />
    </section>
  );
}
