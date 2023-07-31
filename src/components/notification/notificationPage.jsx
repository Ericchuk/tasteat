import Header from "../homeContent/header";
import NotificationHead from "./notificationHead";
import NotificationStatHeader from "./notificationStatsHeader";
import OrdersInNotification from "./ordersInNotification";

export default function NotificationPage() {
  return (
    <section className="w-11/12 px-5 py-7 bg-bg-color mb-10 text-white">
      <Header headText="Notification" />
      <hr className="mt-3 border border-line h-px" />
      <aside className="bg-sidebar mt-5 py-5 rounded-lg h-screen">
        <NotificationHead headText="Your order" option1="Filter Order" option2="Preparing" option3="Completed" />
        <NotificationStatHeader />
        <OrdersInNotification />
      </aside>
    </section>
  );
}
