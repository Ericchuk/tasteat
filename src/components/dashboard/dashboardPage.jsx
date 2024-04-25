import Header from "../homeContent/header";
import DashboardStats from "./dashboardStats";
import dollarSign from "../../assets/sidebar icons/Coin.svg";
import bookmark from "../../assets/sidebar icons/order-icon.svg";
import indicatorUp from "../../assets/sidebar icons/arrow-up.svg";
import indicatorDown from "../../assets/sidebar icons/arrow-down.svg";
import customers from "../../assets/sidebar icons/customer.svg";
import NotificationHead from "../notification/notificationHead";
import NotificationStats from "../notification/notificationStatsHeader";
import OrderInNotification from "../notification/ordersInNotification";
import MostOrdered from "./mostOrdered";
import MostOrderedContent from "./mostOrderedConent";
import noodles from "../../assets/landing page image/image 4.png";
import pasta from "../../assets/landing page image/image 4 (1).png";
import TypeOfOrderStat from "./typeOfOrderStat";

export default function DashboardPage() {
  return (
    <section className="w-full px-5 py-6 bg-bg-color text-white flex justify-between items-start">
      <main className="w-8/12">
        <Header headText="Dashboard" />
      <hr className="mt-3 border border-line h-px" />
      <aside className="flex justify-between items-center mt-5">
        <DashboardStats
          img={dollarSign}
          stat="+32.40"
          indicators={indicatorUp}
          figures="$10,243.00"
          desc="Total Revenue"
          alt1="dollar-sign"
          alt2="arrow-up"
        />
        <DashboardStats
          img={bookmark}
          stat="-12.40"
          indicators={indicatorDown}
          figures="23,456"
          desc="Total dish ordered"
          alt1="order-icon"
          alt2="arrow-down"
        />
        <DashboardStats
          img={customers}
          stat="+2.40"
          indicators={indicatorUp}
          figures="1.234"
          desc="Total customer"
          alt1="customer-icon"
          alt2="arrow-up"
        />
      </aside>

      <aside className="bg-sidebar rounded-lg mt-3 py-6">
        <NotificationHead headText="Order report " option1="Filter options" option2="Preparing" option3="sent out" />
        <NotificationStats />
        <OrderInNotification />
      </aside>
      </main>
      

      <main className="lg:w-[30%]">
        <aside className="bg-sidebar rounded-lg py-3 mb-4">
        <MostOrdered headerText="Most ordered" />
        <div className="w-12/12 px-5">
          <hr className="h-px w-full border border-line" />
        </div>
         
        <MostOrderedContent
          dish="spicy seasoned seafood noodles"
          dishImage={noodles}
          orders="200 dishes ordered"
        />

        <div className="w-12/12 px-5">
          <button className="capitalize border-[#EA736D]  border-2 text-[#EA736D] text-sm w-full rounded-lg h-5 font-semibold py-5 flex justify-center items-center mt-5">
            View all
          </button>
        </div>
      </aside>
      <aside className="bg-sidebar rounded-lg py-4">
        <MostOrdered headerText="Most type of order" />
        <hr className="h-px w-full border border-line" />
        <TypeOfOrderStat />
      </aside>
      </main>
      
    </section>
  );
}
