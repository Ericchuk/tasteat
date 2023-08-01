import { useEffect, useContext } from 'react';
import { AppContext } from '../context'
import Cart from "../components/cart";
import HomeContent from "../components/homeContent";
import Sidebar from "../components/sidebar";
import NotificationPage from '../components/notification/notificationPage'
import SettingsPage from '../components/settings/settingPage'
import { Routes, Route, Link } from "react-router-dom";
import DashboardPage from "../components/dashboard/dashboardPage";
import UserAccountPage from '../components/customer/userAccountPage';
import DiscountPage from '../components/discount/discountPage';
import OrderReportPage from '../components/orderReports/orderReportPafe';
import PaymentPage from '../components/payment/paymentPage'
import ConfirmationPage from '../components/payment/confirmation'
// import LocationPage from '../components/location/locationPage'

export function LandingPage() {
  const { removeCart, proceed, payment } = useContext(AppContext);
  return (
    <section className={`flex justify-start`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="notification" element={<NotificationPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="setting" element={<SettingsPage />} />
        <Route path='customer' element={<UserAccountPage />} />
        <Route path='discount' element={<DiscountPage />} />
        <Route path='order' element={<OrderReportPage />} />
      </Routes>
      {removeCart ? "" : <Cart />}
      {proceed ? <section className='text-white w-full flex justify-end absolute bg-[#000000a6] h-[171vh]'>
        <ConfirmationPage />
        <PaymentPage />
        </section>  :  ""}
    </section>
  );
}
