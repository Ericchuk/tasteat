import { useEffect, useContext } from 'react';
import { AppContext } from '../context'
import Cart from "../components/cart";
import HomeContent from "../components/homeContent";
import Sidebar from "../components/sidebar";
import NotificationPage from '../components/notification/notificationPage'
import SettingsPage from '../components/settings/settingPage'
import { Routes, Route, Link } from "react-router-dom";
import DashboardPage from "../components/dashboard/dashboardPage";

export function LandingPage() {
  const {removeCart} = useContext(AppContext);
  return (
    <section className="flex justify-start item">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="notification" element={<NotificationPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="setting" element={<SettingsPage />} />
      </Routes>
     {removeCart ? "" :<Cart /> }
    </section>
  );
}
