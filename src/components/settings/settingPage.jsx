import SettingNavbar from "./settingNavbar";
import order from "../../assets/sidebar icons/order-icon.svg";
import notification from "../../assets/sidebar icons/notification-bell.svg";
import discount from "../../assets/sidebar icons/discount.svg";
import security from "../../assets/sidebar icons/padlock.svg";
import info from "../../assets/sidebar icons/exclamation.svg";
import NotificationHead from "../notification/notificationHead";
import MenuNavbar from "../homeContent/navbar";
import AddOrEditDish from "./addOrEdit dish";
import CartFooterButton from "../cartContent/cartFooterButton"
import OrderSettings from "./orderSetting";
import ApperanceSetting from "./appearanceSetting";

export default function SettingsPage() {
  return (
    <section className="w-11/12 bg-bg-color py-5 px-6">
      <h2 className="font-universal text-heading font-semibold text-white mb-3 ">
        Settings
      </h2>
      <section className="flex justify-between">
        <aside className="bg-sidebar w-4/12 mr-7 rounded-lg min-h-screen ">
          <SettingNavbar
            navIcon={order}
            navName="orders"
            description="Your previous orders"
          />
          <SettingNavbar
            navIcon={notification}
            navName="notification"
            description="Customize your notification"
          />
          <SettingNavbar
            navIcon={discount}
            navName="Product management"
            description="manage your product, pricing etc"
          />
          <SettingNavbar
            navIcon={security}
            navName="security"
            description="configure password,pin, etc"
          />
          <SettingNavbar
            navIcon={info}
            navName="about us"
            description="find out more about posty"
          />
        </aside>
        {/* add dish setting program management  */}
        <main className="bg-sidebar relative h-screen overflow-x-hidden overflow-y-scroll w-8/12 rounded-lg py-5">
          <NotificationHead
            headText="Product management"
            option1="Manage Categories"
            option2="manage outgoing orders"
          />
          <MenuNavbar />
          <AddOrEditDish />
          <aside className="w-12/12 px-6 relative">
            <footer className="sticky bottom-0 border border-line w-full flex justify-start items-center">
        <CartFooterButton button1="Discards Changes" button2="Save changes" />
      </footer>
          </aside>
          
        </main>

        {/* orders setting  */}
         {/* <main className="bg-sidebar rounded-lg h-4/4 w-8/12 py-5">
      <NotificationHead
            headText="order report"
            option1="Filter order"
            option2="pending"
            option3="delivered"
          />
          <OrderSettings />
          
      </main> */}

      {/* appearance setting */}
      {/* <main className="bg-sidebar rounded-lg h-4/4 w-8/12 py-5 px-5">
        <ApperanceSetting />
      </main> */}
      </section>
     
      
      
    </section>
  );
}
