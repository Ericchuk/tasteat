import MostOrdered from "../dashboard/mostOrdered";
import MostOrderedContent from "../dashboard/mostOrderedConent";
import UserOrderHistory from "./userOrderHistory";
import UserProfileDetails from "./userProfileDetails";

export default function UserLoggedIn() {
  return (
    <section>
      <aside className="flex justify-between mb-5">
        <UserProfileDetails />
        <div className="bg-sidebar w-[430px] rounded-lg p-6">
          <MostOrdered headerText="most ordered" />
          <MostOrderedContent />
        </div>
      </aside>
      
      <UserOrderHistory />
    </section>
  );
}
